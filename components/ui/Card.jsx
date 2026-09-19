import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * Surface panel used for services, case studies, team members and testimonials.
 *
 * Becomes a link when `href` is passed, so the whole card is clickable — one
 * large target rather than a small "read more" link.
 *
 * The hover treatment is deliberately restrained (border + background only):
 * the old site used `hover:-translate-y-2` plus large coloured shadows on every
 * card, which reads as busy and costs paint performance. Precision over flash.
 */
export default function Card({
  href,
  interactive = false,
  className,
  children,
  ...props
}) {
  const isInteractive = interactive || Boolean(href);

  const classes = cn(
    'rounded-2xl border border-border-subtle bg-surface p-6',
    isInteractive &&
      'transition-colors duration-200 hover:border-border-strong hover:bg-surface-2',
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, 'block')} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
