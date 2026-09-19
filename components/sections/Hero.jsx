import { site, clients } from '@/data';
import { Button, Container, Icon } from '@/components/ui';

/**
 * Home hero.
 *
 * No video. The previous hero autoplayed an unoptimised MP4 with no poster and
 * no reduced-motion path, which dominated load time on the most important
 * screen of the site. The atmosphere here is a pure-CSS gradient wash: zero
 * bytes, no main-thread cost, and it adapts to both themes.
 *
 * This is a Server Component — the whole hero ships no JavaScript.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 lg:pt-48 lg:pb-28">
      {/* Decorative background. aria-hidden + pointer-events-none so it is
          invisible to assistive tech and never intercepts clicks. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* Warm brand glow, centred above the headline */}
        <div className="absolute left-1/2 top-[-12rem] h-[34rem] w-[64rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(var(--color-brand)/0.14),transparent_62%)]" />
        <div className="absolute left-1/2 top-[-4rem] h-[26rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgb(var(--color-accent)/0.10),transparent_60%)]" />
        {/* Hairline grid, fading out toward the bottom */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--color-fg)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--color-fg)/0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-3.5 py-1.5 text-xs font-medium text-fg-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            Every discipline. One accountable team.
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            One partner.{' '}
            <span className="text-gradient">Every layer</span>{' '}
            of your digital stack.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">
            Otical designs, builds and runs software end to end — web and mobile
            products, intelligent systems, and the cloud and security foundations
            underneath them.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" size="lg">
              Book a consultation
              <Icon name="ArrowRight" size={16} />
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              See our work
            </Button>
          </div>

          <p className="mt-6 text-sm text-fg-subtle">
            {/* Derived from the data so it can never go stale. */}
            Trusted by {clients.length}+ organisations.
          </p>
        </div>
      </Container>
    </section>
  );
}
