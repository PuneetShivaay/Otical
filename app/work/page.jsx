import { caseStudies, caseStudyHref, getServiceBySlug } from '@/data';
import { CTABanner } from '@/components/sections';
import {
  Badge,
  Card,
  Container,
  Icon,
  Reveal,
  Section,
  SectionHeading,
} from '@/components/ui';

export const metadata = {
  title: 'Work',
  description:
    'Selected projects from Otical — web and mobile products, design, and the infrastructure behind them.',
};

export default function WorkPage() {
  return (
    <>
      <Container className="pt-32 pb-4 sm:pt-40">
        <SectionHeading
          as="h1"
          eyebrow="Work"
          title="Projects we've delivered"
          description="A selection of the products we've designed, built and continue to support."
        />
      </Container>

      <Section spacing="default">
        {caseStudies.length === 0 ? (
          <p className="text-fg-muted">Case studies are on the way.</p>
        ) : (
          <div className="grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study, index) => (
              <Reveal key={study.slug} delay={index * 0.06}>
                <Card href={caseStudyHref(study.slug)} className="group h-full">
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((slug) => (
                      <Badge key={slug}>{getServiceBySlug(slug)?.title ?? slug}</Badge>
                    ))}
                  </div>
                  <h2 className="mt-4 text-xl font-semibold text-fg">{study.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {study.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Read the case study
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
        )}
      </Section>

      <CTABanner />
    </>
  );
}
