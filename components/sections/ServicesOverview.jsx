import { services, servicePillars, serviceHref } from '@/data';
import {
  Button,
  Card,
  Icon,
  Reveal,
  Section,
  SectionHeading,
} from '@/components/ui';

/**
 * Capabilities grid, grouped by pillar.
 *
 * The grouping is the point: nine services listed flat read as "unfocused",
 * while four pillars read as integrated capability. See docs/00-PROJECT-BRIEF.md.
 */
export default function ServicesOverview() {
  return (
    <Section tone="surface" id="services">
      <SectionHeading
        eyebrow="Capabilities"
        title="Everything you need, under one roof"
        description="Most teams stitch together a designer, an agency and a cloud consultant. We cover the whole stack, so nothing falls between the gaps."
      />

      <div className="mt-16 space-y-14">
        {servicePillars.map((pillar) => {
          const pillarServices = services.filter((s) => s.pillar === pillar.id);

          return (
            <div key={pillar.id}>
              <div className="flex items-baseline gap-3 border-b border-border-subtle pb-4">
                <h3 className="text-lg font-semibold text-fg">{pillar.title}</h3>
                <p className="text-sm text-fg-subtle">{pillar.description}</p>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {pillarServices.map((service, index) => (
                  <Reveal key={service.slug} delay={index * 0.05}>
                    <Card href={serviceHref(service.slug)} className="group h-full">
                      {/*
                        Icons are `accent` (orange), links are `brand` (red).
                        Both are logo colours — the split exists so the two
                        stop competing: orange labels the category, red marks
                        the thing you can click. See docs/03-PROGRESS.md.
                      */}
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface-2 text-accent">
                        <Icon name={service.icon} size={18} />
                      </div>
                      <h4 className="mt-4 font-semibold text-fg">{service.title}</h4>
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

      <div className="mt-14 flex justify-center">
        <Button href="/services" variant="secondary">
          Explore all services
        </Button>
      </div>
    </Section>
  );
}
