/**
 * Route-change loading indicator.
 *
 * Previously a client component using styled-jsx with a hardcoded `#f97316`
 * (Tailwind orange-500 — the *old* brand colour, wrong since Phase 0). It is
 * now a server component using the brand gradient and the shared `marquee`
 * keyframe from tailwind.config.cjs.
 *
 * No 'use client', so this ships zero JavaScript.
 */
export default function Loading() {
  return (
    <div
      className="h-0.5 w-full overflow-hidden bg-surface-2"
      role="status"
      aria-label="Loading page"
    >
      <div className="h-full w-1/3 animate-loading-bar bg-gradient-brand" />
    </div>
  );
}
