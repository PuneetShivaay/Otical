/**
 * Barrel for UI primitives.
 *
 * Rule (docs/02-ARCHITECTURE.md): nothing in this folder may import from
 * `data/`. Primitives stay context-free so they can be reused anywhere.
 */

export { default as Badge } from './Badge';
export { default as Button } from './Button';
export { default as Card } from './Card';
export { default as Container } from './Container';
export { default as Eyebrow } from './Eyebrow';
export { default as Icon } from './Icon';
export { default as PageHeader } from './PageHeader';
export { default as Reveal } from './Reveal';
export { default as Section } from './Section';
export { default as SectionHeading } from './SectionHeading';
