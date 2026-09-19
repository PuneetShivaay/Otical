import { cn } from '@/lib/utils';
import Eyebrow from './Eyebrow';

/**
 * Standard section header: eyebrow + title + optional description.
 *
 * Every section using this means heading sizes, weights and spacing can never
 * drift apart — the old site had four different H2 treatments.
 *
 * `as` lets a page use <h1> for its main heading while keeping the same visual
 * style, so the document outline stays correct for screen readers and SEO.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  as: Tag = 'h2',
  className,
}) {
  const centered = align === 'center';

  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        centered && 'items-center text-center',
        // Caps the measure so headings never stretch into unreadable lines.
        centered ? 'mx-auto max-w-3xl' : 'max-w-3xl',
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

      <Tag className="text-3xl font-semibold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </Tag>

      {description && (
        <p className="text-base leading-relaxed text-fg-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
