import { cn } from '@/lib/utils';
import Container from './Container';
import SectionHeading from './SectionHeading';

/**
 * Standard top-of-page header.
 *
 * Every non-home page opens with this, so page starts feel identical. The
 * padding clears the fixed navbar (h-16) with breathing room beneath it.
 *
 * `children` is for anything that belongs under the description — metadata
 * rows, action buttons, tags.
 */
export default function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}) {
  return (
    <Container className={cn('pt-32 sm:pt-40', className)}>
      <SectionHeading
        as="h1"
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      {children}
    </Container>
  );
}
