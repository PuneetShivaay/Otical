import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  caseStudies,
  getCaseStudyBySlug,
  caseStudyHref,
  getServiceBySlug,
  serviceHref,
  site,
} from '@/data';
import { CTABanner } from '@/components/sections';
import {
  Badge,
  Button,
  Container,
  Icon,
  Reveal,
  Section,
} from '@/components/ui';

/**
 * Case study detail page.
 *
 * Renders entirely from data/caseStudies.js — adding a study means adding one
 * object there, never a new file.
 *
 * Every optional block (results, tech stack, gallery, live link) hides itself
 * when the data is missing. That matters here: real narrative and metrics
 * arrive from clients later, and a half-filled template must still look
 * finished rather than broken.
 */

/**
 * Pre-renders every case study at build time, so these pages are static HTML
 * (fast, cacheable at the edge) instead of rendered per request.
 */
export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

/**
 * Only the slugs above exist. Without this, Next treats unknown slugs as
 * renderable-on-demand and serves them a streaming shell with HTTP 200 before
 * `notFound()` resolves — a "soft 404". The visitor sees an error page, but
 * search engines are told the URL is valid and index infinite junk URLs.
 *
 * `false` makes anything outside generateStaticParams a real 404.
 */
export const dynamicParams = false;

export function generateMetadata({ params }) {
  const study = getCaseStudyBySlug(params.slug);
  if (!study) return {};

  return {
    title: `${study.client} — ${study.title}`,
    description: study.summary,
    alternates: { canonical: caseStudyHref(study.slug) },
    openGraph: {
      title: `${study.client} — ${study.title}`,
      description: study.summary,
      url: `${site.url}${caseStudyHref(study.slug)}`,
      type: 'article',
    },
  };
}

export default function CaseStudyPage({ params }) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) notFound();

  const meta = [
    { label: 'Client', value: study.client },
    { label: 'Industry', value: study.industry },
    { label: 'Year', value: study.year },
  ].filter((item) => Boolean(item.value));

  // "Next" wraps around, so the last study still offers somewhere to go.
  const currentIndex = caseStudies.findIndex((c) => c.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
  const hasNext = caseStudies.length > 1;

  return (
    <>
      <Container className="pt-32 sm:pt-40">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
        >
          <Icon name="ArrowLeft" size={14} />
          All work
        </Link>

        <div className="mt-8 max-w-3xl">
          <div className="flex flex-wrap gap-2">
            {study.services.map((slug) => {
              const service = getServiceBySlug(slug);
              return service ? (
                <Link key={slug} href={serviceHref(slug)}>
                  <Badge>{service.title}</Badge>
                </Link>
              ) : null;
            })}
          </div>

          <h1 className="mt-5 text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
            {study.title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">
            {study.summary}
          </p>

          {study.liveUrl && (
            <Button href={study.liveUrl} variant="secondary" className="mt-8">
              Visit the live site
              <Icon name="ArrowRight" size={16} />
            </Button>
          )}
        </div>

        {/* Cover */}
        <div className="mt-12 flex aspect-[21/9] items-center justify-center rounded-2xl border border-border-subtle bg-surface p-12">
          <Image
            src={study.cover}
            alt={`${study.client} logo`}
            width={480}
            height={240}
            className="max-h-32 w-auto object-contain"
            priority
          />
        </div>

        {/* Key facts */}
        <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-3">
          {meta.map((item) => (
            <div key={item.label} className="bg-bg p-6">
              <dt className="text-xs font-medium uppercase tracking-[0.14em] text-fg-subtle">
                {item.label}
              </dt>
              <dd className="mt-2 font-medium text-fg">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Container>

      {/* Results — only when real numbers exist. Never invent these. */}
      {study.results?.length > 0 && (
        <Section spacing="default">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-3">
            {study.results.map((result) => (
              <div key={result.label} className="bg-surface p-8 text-center">
                <p className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
                  {result.metric}
                </p>
                <p className="mt-2 text-sm text-fg-muted">{result.label}</p>
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Narrative */}
      <Section spacing="default" containerSize="prose">
        <div className="space-y-14">
          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">The challenge</h2>
            <p className="mt-4 leading-relaxed text-fg-muted">{study.challenge}</p>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-semibold tracking-tight">What we did</h2>
            <p className="mt-4 leading-relaxed text-fg-muted">{study.solution}</p>
          </Reveal>

          {study.approach?.length > 0 && (
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight">Our approach</h2>
              <ul className="mt-6 space-y-3">
                {study.approach.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <Icon name="Check" size={12} />
                    </span>
                    <span className="leading-relaxed text-fg-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {study.techStack?.length > 0 && (
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight">Technology</h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {study.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </Section>

      {/* Gallery */}
      {study.images?.length > 0 && (
        <Section spacing="none" className="pb-20 lg:pb-28">
          <div className="grid gap-6 sm:grid-cols-2">
            {study.images.map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-2xl border border-border-subtle bg-surface"
              >
                <Image
                  src={image}
                  alt={`${study.client} screenshot`}
                  width={960}
                  height={600}
                  className="h-auto w-full object-cover"
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Next case study */}
      {hasNext && (
        <Section spacing="sm" tone="bordered">
          <Link href={caseStudyHref(nextStudy.slug)} className="group flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-fg-subtle">
                Next case study
              </p>
              <p className="mt-2 text-xl font-semibold text-fg">{nextStudy.title}</p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
              Read more
              <Icon
                name="ArrowRight"
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </Section>
      )}

      <CTABanner />
    </>
  );
}
