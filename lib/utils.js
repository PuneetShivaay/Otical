/**
 * Tiny class-name joiner.
 *
 * Filters out falsy values so conditional classes read cleanly:
 *   cn('btn', isActive && 'btn-active', className)
 *
 * We deliberately avoid pulling in `clsx` / `tailwind-merge` — this is a few
 * bytes and covers every case we have. Keep the dependency list short.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
