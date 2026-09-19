import Link from 'next/link';
import { navItems } from '@/data/site';
import { Button, Container, Icon } from '@/components/ui';

export const metadata = {
  title: 'Page not found',
  // A 404 must never be indexed — it has no content worth ranking, and
  // indexing it competes with the real pages.
  robots: { index: false, follow: true },
};

/**
 * Branded 404.
 *
 * Replaces the stock Next.js "404 | This page could not be found", which
 * dropped the visual language of the site at exactly the moment a visitor is
 * already frustrated.
 *
 * A 404 has one job: get the visitor somewhere useful. So this offers the
 * primary routes rather than just apologising.
 */
export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-brand">
        404
      </p>

      <h1 className="mt-6 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
        We couldn&apos;t find that page
      </h1>

      <p className="mt-4 max-w-md leading-relaxed text-fg-muted">
        The link may be out of date, or the page may have moved. Here&apos;s
        where most people are heading.
      </p>

      <nav aria-label="Site sections" className="mt-10 flex flex-wrap justify-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-lg border border-border-subtle bg-surface px-4 py-2 text-sm font-medium text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-10">
        <Button href="/contact" size="lg">
          Tell us what you were looking for
          <Icon name="ArrowRight" size={16} />
        </Button>
      </div>
    </Container>
  );
}
