
import { NextResponse } from "next/server";
import { Resend } from "resend";

/*
 * The Resend client is created lazily, INSIDE the handler.
 *
 * Previously it was constructed at module scope, so `next build` crashed with
 * "Missing API key" on any machine/CI without RESEND_API_KEY set — the build
 * evaluates modules while collecting page data. Creating it per-request keeps
 * the build environment-independent.
 */
export async function POST(req) {
  const { email, subject, message } = await req.json();

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['oticalmail@gmail.com'],
      replyTo: email,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>New message submitted from {email}:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error sending email:", error);
    // Return a real error status — the old version returned 200 on failure,
    // which made client-side error handling unreliable.
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
