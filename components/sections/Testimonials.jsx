import { testimonials } from '@/data';
import { Card, Reveal, Section, SectionHeading } from '@/components/ui';

/**
 * Client testimonials.
 *
 * ⚠️ These come from data/testimonials.js and are the only approved quotes.
 * The component this replaces hardcoded invented quotes, invented job titles
 * ("CTO, TechLogistics Global") and invented metrics against real clients'
 * names, while the genuine testimonials sat unused in the data file.
 * Never hardcode a quote here.
 */
export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <Section>
      <SectionHeading
        eyebrow="Testimonials"
        title="What our clients say"
        align="center"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Reveal key={testimonial.name} delay={(index % 3) * 0.06}>
            <Card className="flex h-full flex-col">
              <blockquote className="flex-1 text-sm leading-relaxed text-fg-muted">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border-subtle pt-4">
                <p className="text-sm font-medium text-fg">{testimonial.name}</p>
                <p className="text-sm text-fg-subtle">{testimonial.company}</p>
              </figcaption>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
