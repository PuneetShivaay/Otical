import { site } from '@/data';
import { Container, PageHeader, Section } from '@/components/ui';

export const metadata = {
  title: 'Terms of Use',
  description:
    'The terms that apply when you use the Otical website, including content ownership, enquiries and limits of liability.',
};

/**
 * Terms of use.
 *
 * ---------------------------------------------------------------------------
 * ⚠️  DRAFT — NOT LEGAL ADVICE. READ BEFORE LAUNCH.
 * ---------------------------------------------------------------------------
 * Search for TODO(client). Have someone who practises Indian contract law read
 * this before it goes live.
 *
 * ---------------------------------------------------------------------------
 * SCOPE: WEBSITE TERMS, NOT SERVICE TERMS — AND WHY
 * ---------------------------------------------------------------------------
 * This page governs USE OF THIS WEBSITE only. It deliberately says nothing
 * about how projects are delivered, paid for, or who owns the resulting IP.
 *
 * Those belong in the signed agreement for each engagement. Publishing them
 * here would create a second set of terms that (a) nobody negotiated, and
 * (b) will eventually contradict a real contract — and when a website page and
 * a signed agreement disagree, that is a dispute you have manufactured for
 * yourself. Keeping this page narrow is the safer position, not the lazier one.
 *
 * ---------------------------------------------------------------------------
 * NO REGISTERED ENTITY
 * ---------------------------------------------------------------------------
 * Confirmed by the owner: there is no registered company behind Otical. So this
 * page never says "the Company", never names a Pvt Ltd, and makes no claim
 * about incorporation. It refers to "we" and identifies the operator by the
 * contact email. If an entity is registered later, this page and the privacy
 * policy both need updating — a governing-law clause naming a jurisdiction is
 * far stronger when there is a registered entity to attach it to.
 */

/* TODO(client): set to the day this actually goes live. */
const LAST_UPDATED = '19 September 2026';

const sections = [
  {
    heading: 'About these terms',
    body: [
      `These terms apply to your use of ${site.url}. By browsing the site or sending us an enquiry, you accept them. If you do not agree with them, please do not use the site.`,
      // The scope limit is stated to the reader, not just in the code comment.
      // A visitor should not have to guess whether this page governs their
      // project.
      'These terms cover the website itself. They do not govern any work we may go on to do for you — that is set out separately in the agreement we sign for that engagement, and nothing on this page replaces or overrides it.',
    ],
  },
  {
    heading: 'Using this site',
    body: ['You are welcome to browse, read and share this site. We ask that you do not:'],
    list: [
      'Use it for anything unlawful, or in a way that breaches anyone else’s rights.',
      'Attempt to gain unauthorised access to the site, its server, or any connected system.',
      'Interfere with the site’s normal operation, including by automated scraping, flooding the contact form, or probing for vulnerabilities without our written permission.',
      'Copy substantial parts of the site to reproduce it elsewhere.',
    ],
  },
  {
    heading: 'Our content',
    body: [
      'The text, design, layout, code and graphics on this site belong to us, unless stated otherwise. You may not reuse them commercially without our permission.',
      // This carve-out matters: the marquee and case studies display client
      // trade marks, and claiming ownership of everything on the page would be
      // inaccurate.
      'Client names, logos and trade marks shown on this site remain the property of those respective owners, and appear here to identify work we have carried out.',
      'Case studies describe work we have delivered. Where a client has asked us to limit what we disclose, the description is necessarily general.',
    ],
  },
  {
    heading: 'Enquiries and information you send us',
    body: [
      'When you contact us through this site, please send accurate information — we rely on it when responding and when preparing any estimate.',
      // Important: this prevents an enquiry reply being treated as a binding
      // quote.
      'An enquiry does not create a contract between us, and our reply is not a binding offer. Any figure or timeline we mention before a formal proposal is indicative and subject to a proper scope discussion.',
      'How we handle the personal information you send is covered by our Privacy Policy.',
    ],
  },
  {
    heading: 'Accuracy of the site',
    body: [
      'We take care to keep this site accurate and current, but we do not guarantee that everything on it is complete or up to date at all times.',
      // Honest and specific — better than a blanket "all information may be
      // wrong", which undermines the whole site.
      'Descriptions of our services are a general summary of what we offer, not a specification. What we actually deliver on a project is defined in the agreement for that project.',
    ],
  },
  {
    heading: 'Availability',
    body: [
      'We aim to keep the site available, but we do not promise uninterrupted access. It may be unavailable during maintenance, or because of issues with hosting and network providers outside our control.',
      'We may change, update or remove any part of the site at any time without notice.',
    ],
  },
  {
    heading: 'Links to other sites',
    body: [
      'This site links to external sites, including our social media profiles and, in some case studies, our clients’ own sites. We do not control those sites and are not responsible for their content, their accuracy, or how they handle your information.',
      'A link is not an endorsement of everything on the site it points to.',
    ],
  },
  {
    heading: 'Limits of our responsibility',
    body: [
      // Deliberately modest. Sweeping exclusions ("we exclude all liability to
      // the fullest extent permitted by law") are routinely read down by courts
      // and read badly to a prospective client. A narrow, honest clause is more
      // likely to survive and costs nothing in credibility.
      'This site is provided as it is. To the extent the law allows, we are not responsible for any loss arising from your use of the site, or from reliance on general information published here rather than on advice given for your specific situation.',
      'Nothing in these terms limits any liability that cannot lawfully be limited.',
    ],
  },
  {
    heading: 'Changes to these terms',
    body: [
      'We may update these terms from time to time. The current version is always the one on this page, and the date above shows when it last changed. Continuing to use the site after a change means you accept the updated terms.',
    ],
  },
  {
    heading: 'Governing law',
    body: [
      // TODO(client): confirm. India is the sensible default given the operator
      // is India-based, but a court in a named city cannot be specified with
      // confidence while there is no registered entity or registered address.
      'These terms are governed by the laws of India, and any dispute relating to them will be subject to the jurisdiction of the Indian courts.',
    ],
  },
  {
    heading: 'Contact',
    body: [
      `If anything here is unclear, or you want to ask about these terms, email us at ${site.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="The terms that apply when you use this website. Project work is governed separately by the agreement we sign with you."
      />

      <Section spacing="default">
        <Container>
          {/* `max-w-2xl` — long-form legal text needs a readable measure. */}
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
                          {/* Plain dot, matching /privacy — a check mark would
                              read as "benefit", wrong for a list of restrictions. */}
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
