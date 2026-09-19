import {
  services,
  servicePillars,
  serviceHref,
  processSteps,
} from '@/data';
import { CTABanner } from '@/components/sections';
import {
  Card,
  Container,
  Icon,
  PageHeader,
  Reveal,
  Section,
} from '@/components/ui';

export const metadata = {
  title: 'Services',
  description:
    'Web, mobile, design, AI, blockchain, IOT, cloud, security and consulting — every layer of your digital stack, delivered by one accountable team.',
};

/**
 * Services index.
 *
 * Grouped by pillar so breadth reads as coverage rather than clutter.
 * This page is a thin shell: all content comes from data/services.js.
 *
 * Copy here deliberately avoids stating a service count ("nine services"), so
 * adding or retiring a service never leaves stale marketing text behind.
 */
export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="One team across the whole stack"
        description="Most projects need more than one discipline. We cover every one of them, so strategy, design, engineering and infrastructure stay joined up instead of being handed between vendors."
      />

      <Section spacing="default">
        <div className="space-y-16">
          {servicePillars.map((pillar) => {
            const pillarServices = services.filter((s) => s.pillar === pillar.id);

            return (
              <div key={pillar.id}>
                <div className="flex flex-wrap items-baseline gap-3 border-b border-border-subtle pb-4">
                  <h2 className="text-xl font-semibold text-fg">{pillar.title}</h2>
                  <p className="text-sm text-fg-subtle">{pillar.description}</p>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {pillarServices.map((service, index) => (
                    <Reveal key={service.slug} delay={(index % 3) * 0.05}>
                      <Card href={serviceHref(service.slug)} className="group h-full">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface-2 text-brand">
                          <Icon name={service.icon} size={18} />
                        </div>
                        <h3 className="mt-4 font-semibold text-fg">{service.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                          {service.summary}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                          Learn more
                          <Icon
                            name="ArrowRight"
                            size={14}
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                          />
                        </span>
                      </Card>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Process — the same four steps regardless of which service you buy. */}
      <Section spacing="default" tone="surface">
        <Container className="px-0">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How an engagement runs
          </h2>
          <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.title} className="bg-bg p-6">
                <span className="font-display text-sm font-semibold text-brand">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 font-semibold text-fg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <CTABanner />
    </>
  );
}
