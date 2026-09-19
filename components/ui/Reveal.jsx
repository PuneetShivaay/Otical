/**
 * Entrance animation — CSS only, no JavaScript.
 *
 * ---------------------------------------------------------------------------
 * HISTORY: two bugs led here, both worth remembering
 * ---------------------------------------------------------------------------
 * v1 used Framer Motion `whileInView` with `initial={{ opacity: 0 }}`. The
 * server therefore shipped real content as:
 *
 *     <div style="opacity:0;transform:translateY(16px)">…</div>
 *
 * Content was INVISIBLE UNTIL JAVASCRIPT RAN. Observed live on
 * /services/cybersecurity, where the "What this includes" section rendered as
 * a tall blank gap — the text was in the DOM and in view-source the whole time.
 *
 * v2 kept scroll-triggering but flipped the default to visible and hid only
 * after mount. Safer, but content still *depended on JS to be revealed*, and
 * the hydration gap was visible as a delay on load.
 *
 * v3 (this one) removes the dependency completely. The animation is a plain
 * CSS keyframe that runs on load. No 'use client', no hydration, no observer,
 * no timers, no JS of any kind. If CSS loads, content is visible; if the
 * animation never runs, `animation-fill-mode` leaves it visible anyway.
 *
 * THE RULE: an entrance animation is decoration. Decoration must never gate
 * content. Never render content hidden-by-default.
 *
 * ---------------------------------------------------------------------------
 * TRADE-OFF
 * ---------------------------------------------------------------------------
 * Animations now trigger on page load rather than on scroll, so content far
 * down the page has finished animating before it is scrolled to. That is a
 * deliberate trade: a subtle 500ms fade is not worth a class of bug that can
 * blank a section, and it also removes ~34 kB of Framer Motion from the
 * client bundle.
 *
 * `prefers-reduced-motion` is handled globally in app/globals.css.
 *
 * @param {number} delay - stagger for siblings, in seconds. Keep under ~0.3s.
 */
export default function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}) {
  return (
    <Tag
      className={className ? `animate-reveal ${className}` : 'animate-reveal'}
      style={delay ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
