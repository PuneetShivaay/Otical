import { cn } from '@/lib/utils';

/**
 * Small inline label — service tags on a case study, tech stack chips, etc.
 */
const tones = {
  default: 'border-border-subtle bg-surface-2 text-fg-muted',
  brand: 'border-brand/20 bg-brand/10 text-brand',
};

export default function Badge({ tone = 'default', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
