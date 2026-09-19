import { site } from '@/data';
import { Button, Container, Icon } from '@/components/ui';

/**
 * Closing call to action.
 *
 * Reusable across pages — the final thing a visitor sees should always be an
 * obvious next step.
 */
export default function CTABanner() {
  return (
    <Container className="py-20 lg:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border-subtle bg-surface px-6 py-16 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgb(var(--color-brand)/0.12),transparent_66%)]"
        />

        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something that lasts
          </h2>
          <p className="mt-4 text-base leading-relaxed text-fg-muted sm:text-lg">
            Tell us what you&apos;re working on. We&apos;ll come back with a clear
            view of scope, timeline and what it will take.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" size="lg">
              Book a consultation
              <Icon name="ArrowRight" size={16} />
            </Button>
            <Button href={`mailto:${site.email}`} variant="secondary" size="lg">
              {site.email}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
