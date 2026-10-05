import { NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * Contact form handler.
 *
 * The Resend client is created lazily, INSIDE the handler. It was previously
 * constructed at module scope, so `next build` crashed with "Missing API key"
 * on any machine or CI without RESEND_API_KEY — the build evaluates modules
 * while collecting page data. Per-request creation keeps the build
 * environment-independent.
 *
 * ---------------------------------------------------------------------------
 * ABUSE PROTECTION
 * ---------------------------------------------------------------------------
 * This endpoint is a public, unauthenticated route that sends email. Without
 * protection it is an open relay into the company inbox: anyone can script it
 * and bury real enquiries, or get the sending domain flagged as spam.
 *
 * Three layers, cheapest first:
 *
 *   1. Honeypot — a field hidden from humans. Bots fill everything in, so a
 *      non-empty value is a near-certain bot. We return 200 "success" rather
 *      than an error, so the bot has no signal to adapt against.
 *
 *   2. Validation — length caps and shape checks. Also stops the request
 *      before it costs a Resend API call.
 *
 *   3. Rate limit — per-IP, in memory.
 *
 * ⚠️ LIMITATION OF THE RATE LIMIT, STATED HONESTLY: serverless instances do not
 * share memory, so the limit is per-instance, not global. A determined attacker
 * spread across instances gets more than `MAX_REQUESTS`. It stops casual abuse
 * and accidental double-submits, which is the common case. If this endpoint is
 * ever seriously targeted, move to Upstash Redis or Vercel KV for a shared
 * counter. Documented rather than left as a silent false sense of security.
 */

const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3;

const MAX_LENGTHS = {
  name: 100,
  email: 254, // RFC 5321
  company: 100,
  message: 5000,
  service: 60,
  budget: 30,
  timeline: 30,
};

/** IP -> array of request timestamps. Trimmed on every check, so it cannot grow unbounded. */
const requestLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);

  // Opportunistic cleanup so the Map does not leak on a long-lived instance.
  if (requestLog.size > 5000) {
    for (const [key, value] of requestLog) {
      if (value.every((t) => now - t >= RATE_LIMIT_WINDOW_MS)) {
        requestLog.delete(key);
      }
    }
  }

  return false;
}

/**
 * Strip characters that allow header injection when a value is interpolated
 * into an email subject or the reply-to address.
 */
const sanitiseHeaderValue = (value) => String(value).replace(/[\r\n]/g, ' ').trim();

/** Escape HTML special characters so form input can't break out of the email markup. */
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const isValidEmail = (email) =>
  typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(req) {
  // ---- Rate limit -------------------------------------------------------
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait a moment and try again.' },
      { status: 429 }
    );
  }

  // ---- Parse ------------------------------------------------------------
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const {
    name = '',
    email = '',
    company = '',
    service = '',
    budget = '',
    timeline = '',
    message = '',
    website = '', // honeypot
  } = body ?? {};

  // ---- Honeypot ---------------------------------------------------------
  // Deliberately reports success so bots cannot tell they were caught.
  if (website) {
    console.warn(`Honeypot triggered from ${ip}`);
    return NextResponse.json({ ok: true });
  }

  // ---- Validate ---------------------------------------------------------
  if (!String(name).trim()) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
  }
  if (!String(message).trim()) {
    return NextResponse.json({ error: 'Message is required.' }, { status: 400 });
  }

  for (const [field, limit] of Object.entries(MAX_LENGTHS)) {
    if (String(body[field] ?? '').length > limit) {
      return NextResponse.json(
        { error: `${field} is too long (max ${limit} characters).` },
        { status: 400 }
      );
    }
  }

  // ---- Config check -----------------------------------------------------
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  if (!process.env.RESEND_FROM_EMAIL || !process.env.RESEND_TO_EMAIL) {
    console.error('Email sender or recipient is not configured');
    return NextResponse.json(
      { error: 'Email service is not fully configured.' },
      { status: 500 }
    );
  }

  // ---- Send -------------------------------------------------------------
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const safeName = sanitiseHeaderValue(name);
    const safeEmail = sanitiseHeaderValue(email);

    // Plain HTML string, not Resend's `react:` prop. `react:` renders via
    // react-dom/server inside the Resend SDK, and that internal renderer gets
    // mangled by Next.js's production bundling in the Vercel serverless
    // runtime ("TypeError: t is not a function" inside resend's create call).
    // A plain HTML string sidesteps that renderer entirely.
    const htmlBody = `
      <div>
        <h2>New enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(safeName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(safeEmail)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
        ${service ? `<p><strong>Service:</strong> ${escapeHtml(service)}</p>` : ''}
        ${budget ? `<p><strong>Budget:</strong> ${escapeHtml(budget)}</p>` : ''}
        ${timeline ? `<p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>` : ''}
        <hr />
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: `Otical Website <${process.env.RESEND_FROM_EMAIL}>`,
      to: [process.env.RESEND_TO_EMAIL],
      replyTo: safeEmail,
      subject: `New enquiry from ${safeName}${company ? ` (${sanitiseHeaderValue(company)})` : ''}`,
      html: htmlBody,
    });

    // The Resend SDK reports failures in `error` rather than throwing, so this
    // must be checked explicitly or failures are reported to the user as success.
    if (error) {
      console.error('Resend returned an error:', error);
      return NextResponse.json(
        { error: 'Could not send your message. Please email us directly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, id: data?.id });
  } catch (error) {
    console.error('Error sending email:', error);
    // A real status code. The original returned HTTP 200 on failure, which made
    // client-side error handling unreliable.
    return NextResponse.json(
      { error: 'Could not send your message. Please email us directly.' },
      { status: 500 }
    );
  }
}
