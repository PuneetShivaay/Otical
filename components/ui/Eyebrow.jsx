import { cn } from '@/lib/utils';

/**
 * Small uppercase label that sits above a section heading ("Our Work",
 * "Services"). Gives each section a consistent entry point.
 */
export default function Eyebrow({ className, children }) {
  return (
    <span
      className={cn(
        'inline-block text-xs font-medium uppercase tracking-[0.14em] text-brand',
        className
      )}
    >
      {children}
    </span>
  );
}
