'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * The ONLY entrance animation in the project.
 *
 * Centralising motion here means:
 *   - `prefers-reduced-motion` is honoured in exactly one place, so it can
 *     never be forgotten in a section,
 *   - timing and easing stay consistent site-wide,
 *   - `'use client'` stays at the leaf, so parent sections remain Server
 *     Components and ship no JS.
 *
 * Rules it enforces (docs/01-DESIGN-SYSTEM.md):
 *   - animates only `transform` and `opacity` — never layout properties,
 *   - runs once; it does not replay when scrolling back up,
 *   - short and subtle. Motion should feel considered, not busy.
 *
 * `delay` is for staggering siblings — keep it under ~0.3s so nothing feels slow.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = 'div',
}) {
  const prefersReducedMotion = useReducedMotion();

  const MotionTag = motion[as] ?? motion.div;

  // Render a plain, immediately-visible element for reduced-motion users.
  if (prefersReducedMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
