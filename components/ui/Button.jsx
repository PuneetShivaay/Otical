import Link from 'next/link';
import { cn } from '@/lib/utils';

/**
 * Button / link with shared styling.
 *
 * Renders an `<a>` (via next/link) when `href` is given, otherwise a `<button>`.
 * That matters for accessibility: navigation should be a link, actions should
 * be buttons. One component, correct semantics either way.
 *
 * Variants are intentionally few. A large variant list is how design systems
 * drift — add one only when a real need appears.
 */
const variants = {
  // Solid brand gradient — the single strongest call to action on a page.
  primary:
    'bg-gradient-brand text-white hover:opacity-90 shadow-sm',
  // Neutral, bordered — the default for everything else.
  secondary:
    'bg-surface text-fg border border-border-subtle hover:border-border-strong hover:bg-surface-2',
  // Chromeless, for tertiary actions and in-text links.
  ghost: 'text-fg-muted hover:text-fg',
};

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-12 px-7 text-base',
};

export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
    'transition-colors duration-200',
    // Disabled styling only applies to <button>, but is harmless on links.
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    // External links get a new tab plus the security attributes that must
    // accompany target="_blank".
    const isExternal = href.startsWith('http');
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
