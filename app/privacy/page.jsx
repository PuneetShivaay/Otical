import { site } from '@/data';
import { Container, PageHeader, Section } from '@/components/ui';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'How Otical collects, uses and protects the personal information you share through this website.',
};

/**
 * Privacy policy.
 *
 * ---------------------------------------------------------------------------
 * ⚠️  READ BEFORE LAUNCH — THIS IS A DRAFT, NOT LEGAL ADVICE
 * ---------------------------------------------------------------------------
 * This is a binding public statement about data you control. Every claim below
 * was written to match what the code ACTUALLY does today (see the audit in the
 * next block) — but claims about your internal practice (how long you keep
 * enquiries, who handles deletion requests) can only be verified by you.
 *
 * A policy that describes practices you do not follow is worse than no policy:
 * an omission is a gap, a false statement is a documented misrepresentation.
 *
 * Search this file for TODO(client) — those are the points that need your
 * confirmation, and ideally a read by someone who practises Indian privacy law.
 *
 * ---------------------------------------------------------------------------
 * WHAT THE CODE ACTUALLY DOES (audited, not assumed)
 * ---------------------------------------------------------------------------
 * - components/sections/ContactForm.jsx collects: name, email, company,
 *   service, budget, timeline, message.
 * - app/api/send/route.js reads the caller's IP from `x-forwarded-for` /
 *   `x-real-ip` purely for in-memory rate limiting. It is NOT written to disk
 *   and NOT included in the email. It disappears when the server restarts.
 * - The enquiry is sent via Resend (resend.com), a US company. That is a
 *   cross-border transfer and must be disclosed.
 * - components/layout/ThemeScript.jsx writes ONE localStorage key for the
 *   light/dark preference. No cookies, no analytics, no tracking pixels.
 *   That is why there is no cookie banner — and why this file must be revised
 *   the day analytics is added.
 *
 * ---------------------------------------------------------------------------
 * WHY NO COMPANY NAME
 * ---------------------------------------------------------------------------
 * There is no registered entity behind Otical (confirmed by the owner), so the
 * policy deliberately never says "Otical Pvt Ltd" or refers to a company. It
 * identifies the operator by the contact address instead. Naming a legal
 * entity that does not exist would be a false statement in a legal document.
 */

/* TODO(client): confirm this date is the day the policy actually goes live. */
const LAST_UPDATED = '19 September 2026';

const sections = [
  {
    heading: 'Who we are',
    body: [
      `Otical is an independent technology practice offering design, engineering and infrastructure services. This policy explains how we handle personal information collected through ${site.url}.`,
      `If you have any question about this policy, or about information we hold about you, contact us at ${site.email}.`,
    ],
  },
  {
    heading: 'Information we collect',
    body: [
      'We only collect information you choose to give us. We do not buy personal data, and we do not build profiles of visitors.',
    ],
    list: [
      'Enquiry details — when you submit the contact form we collect your name, email address, company name (if you provide one), the service you are interested in, your indicative budget and timeline, and the content of your message.',
      'Direct correspondence — if you email or call us, we hold whatever you choose to share in that conversation.',
      'Technical information — our contact form records the IP address of the sending device briefly, in memory only, to prevent automated abuse. It is not stored permanently, not written to any database, and not included in the email we receive.',
    ],
  },
  {
    heading: 'How we use it',
    body: [
      'We use the information you send us to reply to your enquiry, to understand what you need, and to prepare a proposal or quotation if that is what you have asked for.',
      'We do not use your details for marketing unless you have separately asked us to. We do not sell, rent or trade personal information to anyone, and we do not share it for advertising.',
    ],
  },
  {
    heading: 'Who else can see it',
    body: [
      'We keep the list of people who can access your information as short as possible. Beyond the people at Otical working on your enquiry, your information reaches:',
    ],
    list: [
      'Resend — our email delivery provider, which processes enquiry submissions so they reach our inbox. Resend is based in the United States, which means your information is transferred and stored outside India.',
      'Our email provider — enquiries arrive in, and remain in, a standard business email inbox.',
      'Anyone we are legally required to disclose to, where a valid legal obligation applies.',
    ],
    after:
      'We do not give any of these parties permission to use your information for their own purposes.',
  },
  {
    heading: 'How long we keep it',
    body: [
      // TODO(client): confirm. This is the honest default and needs no process
      // to be true — but if you later add a real retention schedule, say so.
      'We keep enquiry correspondence for as long as it is useful for the conversation it belongs to, and until you ask us to delete it. If you ask us to remove your information, we will do so unless we are legally required to keep it.',
    ],
  },
  {
    heading: 'Keeping it secure',
    body: [
      'The site is served over an encrypted connection, and enquiries are transmitted over encrypted channels to our email provider.',
      // Deliberately not claiming more than is true. "Bank-grade security" and
      // similar phrasing is common in policies and is close to meaningless.
      'No method of transmitting information over the internet is completely secure, so we cannot promise absolute security — but we do not collect more than we need, which is the most effective protection we can offer.',
    ],
  },
  {
    heading: 'Your rights',
    body: [
      `You can ask us to show you the information we hold about you, correct it if it is wrong, or delete it. Email ${site.email} and we will respond as quickly as we reasonably can.`,
      'There is no charge for this, and you do not need to give a reason.',
    ],
  },
  {
    heading: 'Cookies and tracking',
    body: [
      // Accurate as of today. See the audit block above — this paragraph is the
      // first thing that becomes false if analytics is added.
      'We do not use tracking cookies, advertising cookies or third-party analytics on this site.',
      'Your browser stores a single preference locally to remember whether you chose the light or dark theme. It stays on your device, is never sent to us, and can be cleared at any time through your browser settings.',
    ],
  },
  {
    heading: 'Other websites',
    body: [
      'This site links to other websites, including our social media profiles and, in some case studies, our clients’ sites. We are not responsible for how those sites handle your information — their own privacy policies apply once you leave here.',
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      'If we change how we handle personal information, we will update this page and revise the date shown above. For anything significant we will make the change clear rather than quietly editing the text.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="What we collect, why we collect it, and what you can ask us to do with it."
      />

      <Section spacing="default">
        <Container>
          {/*
            `max-w-2xl` is deliberate. Legal text is the longest unbroken
            reading on the site, and full-width lines are where people give up.
            This holds roughly 70 characters per line.
          */}
          <div className="max-w-2xl">
            <p className="text-sm text-fg-subtle">Last updated: {LAST_UPDATED}</p>

            <div className="mt-12 space-y-12">
              {sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-xl font-semibold tracking-tight text-fg">
                    {section.heading}
                  </h2>

                  <div className="mt-4 space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="leading-relaxed text-fg-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {section.list && (
                    <ul className="mt-4 space-y-3">
                      {section.list.map((item) => (
                        <li key={item} className="flex gap-3 leading-relaxed text-fg-muted">
                          {/*
                            A plain dot, not an Icon. Check marks read as
                            "benefit" — the wrong tone for a disclosure list
                            that includes things like overseas data transfer.
                          */}
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.after && (
                    <p className="mt-4 leading-relaxed text-fg-muted">{section.after}</p>
                  )}
                </section>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
