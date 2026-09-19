import { cn } from '@/lib/utils';
import Container from './Container';

/**
 * A page section: vertical rhythm + optional background treatment, with a
 * Container inside. Using this everywhere is what keeps spacing consistent
 * without each section inventing its own padding values.
 *
 * Pass `container={false}` when a section must bleed full-width (e.g. the logo
 * marquee) and will manage its own inner container.
 */
const spacings = {
  none: '',
  sm: 'py-12 lg:py-16',
  default: 'py-20 lg:py-28',
  lg: 'py-24 lg:py-36',
};

const tones = {
  default: '',
  surface: 'bg-surface',
  bordered: 'border-y border-border-subtle',
};

export default function Section({
  as: Tag = 'section',
  spacing = 'default',
  tone = 'default',
  container = true,
  containerSize = 'default',
  className,
  children,
  ...props
}) {
  const content = container ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <Tag className={cn(spacings[spacing], tones[tone], className)} {...props}>
      {content}
    </Tag>
  );
}
