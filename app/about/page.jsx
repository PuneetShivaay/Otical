import {
  companyStory,
  companyValues,
  credentials,
  caseStudies,
  clients,
  services,
} from '@/data';
import Team from '@/components/sections/Team';
import { CTABanner } from '@/components/sections';
import { Card, Icon, PageHeader, Reveal, Section } from '@/components/ui';

export const metadata = {
  title: 'About',
  description:
    'Otical is a technology partner covering design, engineering and infrastructure in one team — so nothing is lost between vendors.',
};

/**
 * About page.
 *
 * Figures are DERIVED from the data files (services.length, clients.length)
 * rather than typed in. The old page hardcoded copy that drifted out of date
 * the moment a service or client was added.
 */
export default function AboutPage() {
  const stats = [
    { value: `${clients.length}+`, label: 'Clients delivered for' },
    { value: services.length, label: 'Disciplines in house' },
    { value: caseStudies.length, label: 'Case studies published' },
  ];

  return (
    <>
      <PageHeader
        eyebrow="About"
        title="One team across design, engineering and infrastructure"
        description="Most projects need more than one discipline. Otical keeps them under one roof, so strategy, design, build and the infrastructure underneath stay joined up."
      />

      <Section spacing="sm">
        <dl className="grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg p-6 text-center">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="font-display text-3xl font-semibold text-gradient">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-fg-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Mission and vision come from data/site.js — shown once, not repeated.
          The old page printed the mission paragraph twice on the same screen. */}
      <Section spacing="default">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-fg-subtle">
              Our mission
            </h2>
            <p className="mt-4 leading-relaxed text-fg-muted">{companyStory.mission}</p>
          </Card>
          <Card>
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-fg-subtle">
              Our vision
            </h2>
            <p className="mt-4 leading-relaxed text-fg-muted">{companyStory.vision}</p>
          </Card>
        </div>
      </Section>

      <Section spacing="default" tone="surface">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          How we work
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {companyValues.map((value, index) => (
            <Reveal key={value.title} delay={(index % 2) * 0.05}>
              <Card className="h-full bg-bg">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface-2 text-accent">
                  <Icon name={value.icon} size={18} />
                </div>
                <h3 className="mt-4 font-semibold text-fg">{value.title}</h3>
                <p className="mt-2 leading-relaxed text-fg-muted">{value.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/*
        Credentials render ONLY when verified. The previous About page claimed
        "ISO-certified" in body copy; that is a verifiable legal claim, so it
        stays hidden until confirmed. See the note in data/site.js.
      */}
      {credentials.verified && credentials.items.length > 0 ? (
        <Section spacing="sm">
          <div className="rounded-2xl border border-border-subtle bg-surface p-8">
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-fg-subtle">
              Credentials
            </h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {credentials.items.map((item) => (
                <li
                  key={item.label}
                  className="rounded-lg border border-border-subtle bg-surface-2 px-3 py-2 text-sm text-fg-muted"
                >
                  <span className="font-medium text-fg">{item.label}</span>
                  {item.detail ? ` — ${item.detail}` : null}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      <Team />

      <CTABanner />
    </>
  );
}
