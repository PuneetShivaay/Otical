import { processSteps } from '@/data';
import { Reveal, Section, SectionHeading } from '@/components/ui';

/**
 * How we work — a numbered timeline.
 *
 * Presented as an ordered list because the steps genuinely are sequential;
 * screen readers announce the count and position for free.
 */
export default function Process() {
  return (
    <Section tone="surface">
      <SectionHeading
        eyebrow="How we work"
        title="A process built for clarity"
        description="No black boxes. You see progress in short, reviewable increments from day one."
      />

      <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border-subtle bg-border-subtle sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <li key={step.title} className="bg-bg p-6">
            <Reveal delay={index * 0.06}>
              <span className="font-display text-sm font-semibold text-brand">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-semibold text-fg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                {step.description}
              </p>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
