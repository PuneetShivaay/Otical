import {
  contactInfo,
  enquiryBudgets,
  enquiryTimelines,
  services,
  site,
  socialLinks,
} from '@/data';
import ContactForm from '@/components/sections/ContactForm';
import { Card, Icon, PageHeader, Section } from '@/components/ui';

export const metadata = {
  title: 'Contact',
  description:
    'Tell us about your project. We reply within one working day — web, mobile, design, AI, cloud, blockchain and security.',
};

/**
 * Contact page.
 *
 * Two columns: the form carries the weight, with direct contact details
 * alongside it. Some people will never fill in a form, and hiding the email
 * address behind one loses those enquiries.
 */
export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you're building"
        description="A few details about the project help us give you a useful answer first time, rather than a round of questions."
      />

      <Section spacing="default">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
          <div>
            {/*
              Options are derived HERE, on the server, and passed down as plain
              string arrays. ContactForm is a client component, so importing the
              data there would ship all of data/services.js to the browser.
            */}
            <ContactForm
              serviceOptions={services.map((service) => service.title)}
              budgetOptions={enquiryBudgets.map((budget) => budget.label)}
              timelineOptions={enquiryTimelines.map((timeline) => timeline.label)}
            />
          </div>

          <aside className="space-y-4">
            {contactInfo.map((item) => (
              <Card key={item.title} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-subtle bg-surface-2 text-accent">
                  <Icon name={item.icon} size={18} />
                </span>
                <div className="min-w-0">
                  <h2 className="text-sm font-medium text-fg-subtle">{item.title}</h2>
                  <a
                    href={item.href}
                    className="mt-1 block break-words font-medium text-fg transition-colors hover:text-brand"
                  >
                    {item.value}
                  </a>
                </div>
              </Card>
            ))}

            {socialLinks.length > 0 ? (
              <Card>
                <h2 className="text-sm font-medium text-fg-subtle">Elsewhere</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-border-subtle bg-surface-2 px-3 py-2 text-sm text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
                    >
                      <Icon name={link.icon} size={16} />
                      {link.label}
                    </a>
                  ))}
                </div>
              </Card>
            ) : null}

            <Card>
              <h2 className="text-sm font-medium text-fg-subtle">Prefer email?</h2>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                Write to us directly at{' '}
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-brand hover:underline"
                >
                  {site.email}
                </a>
                . No form required.
              </p>
            </Card>
          </aside>
        </div>
      </Section>
    </>
  );
}
