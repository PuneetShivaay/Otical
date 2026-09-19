import { cn } from '@/lib/utils';

/**
 * Horizontal page gutter + max width. Every full-width section puts its content
 * inside one of these, so every page lines up on the same vertical edges.
 *
 * `size` exists because long-form reading (a case study body) wants a narrower
 * measure than a card grid — roughly 65–75 characters per line reads best.
 */
const sizes = {
  prose: 'max-w-3xl', // long-form text
  narrow: 'max-w-5xl',
  default: 'max-w-7xl',
};

export default function Container({
  as: Tag = 'div',
  size = 'default',
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', sizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
