import Image from 'next/image';
import { featuredCaseStudies, caseStudyHref, getServiceBySlug } from '@/data';
import {
  Badge,
  Button,
  Icon,
  Reveal,
  Section,
  SectionHeading,
} from '@/components/ui';

/**
 * Selected case studies.
 *
 * Renders nothing when there are no featured studies — an empty "Our Work"
 * heading looks worse than no section at all. As real studies are added to
 * data/caseStudies.js they appear here automatically.
 */
export default function FeaturedWork() {
  if (featuredCaseStudies.length === 0) return null;

  return (
    <Section id="work">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Products we've shipped"
          description="A closer look at how we approach problems, and what we delivered."
        />
        <Button href="/work" variant="secondary">
          View all work
        </Button>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {featuredCaseStudies.map((study, index) => (
          <Reveal key={study.slug} delay={index * 0.06}>
            <article className="group h-full overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-colors hover:border-border-strong">
              <div className="flex aspect-[16/9] items-center justify-center border-b border-border-subtle bg-surface-2 p-10">
                <Image
                  src={study.cover}
                  alt={`${study.client} logo`}
                  width={320}
                  height={160}
                  className="max-h-24 w-auto object-contain"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2">
                  {study.services.map((slug) => (
                    <Badge key={slug}>{getServiceBySlug(slug)?.title ?? slug}</Badge>
                  ))}
                </div>

                <h3 className="mt-4 text-xl font-semibold text-fg">{study.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{study.summary}</p>

                <a
                  href={caseStudyHref(study.slug)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
                >
                  Read the case study
                  <Icon
                    name="ArrowRight"
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
