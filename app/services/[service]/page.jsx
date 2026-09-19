import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  services,
  getServiceBySlug,
  serviceHref,
  servicePillars,
  processSteps,
  caseStudies,
  caseStudyHref,
  site,
} from '@/data';
import { CTABanner } from '@/components/sections';
import {
  Badge,
  Button,
  Card,
  Container,
  Icon,
  Reveal,
  Section,
} from '@/components/ui';

/**
 * Service detail page.
 *
 * Replaces the previous version, which rendered one heading and one sentence —
 * the deepest page on the site was two lines long.
 *
 * Everything comes from data/services.js, and every block hides when its data
 * is empty (e.g. IT Consulting has no `stack`).
 */

export function generateStaticParams() {
  return services.map((service) => ({ service: service.slug }));
}

/**
 * Unknown slugs must be a real 404, not a soft 404 (HTTP 200 with an error
 * page). See the fuller note in app/work/[slug]/page.jsx.
 */
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const service = getServiceBySlug(params.service);
  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: serviceHref(service.slug) },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.description,
      url: `${site.url}${serviceHref(service.slug)}`,
    },
  };
}

export default function ServicePage({ params }) {
  const service = getServiceBySlug(params.service);

  if (!service) notFound();

  const pillar = servicePillars.find((p) => p.id === service.pillar);

  // Other services in the same pillar — a natural next step for the reader.
  const related = services
    .filter((s) => s.pillar === service.pillar && s.slug !== service.slug)
    .slice(0, 3);

  // Case studies that used this service.
  const relatedWork = caseStudies.filter((study) =>
    study.services.includes(service.slug)
  );

  return (
    <>
      {/* ---------------- Header ---------------- */}
      <Container className="pt-32 sm:pt-40">
        <Link
          href="/services"
          className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <Icon name="ArrowLeft" size={14} />
          All services
        </Link>

        <div className="mt-8 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-surface text-brand">
              <Icon name={service.icon} size={20} />
            </span>
            {pillar && <Badge tone="brand">{pillar.title}</Badge>}
          </div>

          <h1 className="mt-6 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            {service.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">
              Discuss your project
              <Icon name="ArrowRight" size={16} />
            </Button>
            {relatedWork.length > 0 && (
              <Button href="/work" variant="secondary">
                See related work
              </Button>
            )}
          </div>
        </div>
      </Container>

      {/* ---------------- Outcomes ---------------- */}
      {service.outcomes?.length > 0 && (
        <Section spacing="default">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2">
            {service.outcomes.map((outcome) => (
              <div key={outcome} className="flex gap-3 bg-bg p-6">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon name="Check" size={12} />
                </span>
                <p className="leading-relaxed text-fg-muted">{outcome}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* ---------------- Capabilities ---------------- */}
      {service.capabilities?.length > 0 && (
        <Section spacing="default" tone="surface">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What this includes
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((capability, index) => (
              <Reveal key={capability.title} delay={(index % 3) * 0.05}>
                <Card className="h-full bg-bg">
                  <h3 className="font-semibold text-fg">{capability.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {capability.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ---------------- Process ---------------- */}
      <Section spacing="default">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">How we work</h2>
        <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.title} className="bg-surface p-6">
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
      </Section>

      {/* ---------------- Stack ---------------- */}
      {service.stack?.length > 0 && (
        <Section spacing="sm">
          <div className="rounded-2xl border border-border-subtle bg-surface p-8">
            <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-fg-subtle">
              Tools we reach for
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.stack.map((tool) => (
                <Badge key={tool}>{tool}</Badge>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* ---------------- Related work ---------------- */}
      {relatedWork.length > 0 && (
        <Section spacing="default">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Related work</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {relatedWork.map((study) => (
              <Card key={study.slug} href={caseStudyHref(study.slug)} className="group">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-fg-subtle">
                  {study.client}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-fg">{study.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{study.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                  Read the case study
                  <Icon
                    name="ArrowRight"
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </span>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* ---------------- FAQs ---------------- */}
      {service.faqs?.length > 0 && (
        <Section spacing="default" tone="surface" containerSize="narrow">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Common questions
          </h2>
          <div className="mt-8 divide-y divide-border-subtle border-y border-border-subtle">
            {service.faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-fg">
                  {faq.question}
                  <Icon
                    name="ArrowRight"
                    size={16}
                    className="shrink-0 text-fg-subtle transition-transform duration-200 group-open:rotate-90"
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-fg-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Section>
      )}

      {/* ---------------- Related services ---------------- */}
      {related.length > 0 && (
        <Section spacing="default">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Often paired with
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {related.map((item) => (
              <Card key={item.slug} href={serviceHref(item.slug)} className="h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface-2 text-brand">
                  <Icon name={item.icon} size={18} />
                </div>
                <h3 className="mt-4 font-semibold text-fg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{item.summary}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}

      <CTABanner />
    </>
  );
}
