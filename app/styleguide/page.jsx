import {
  Badge,
  Button,
  Card,
  Reveal,
  Section,
  SectionHeading,
  Icon,
} from '@/components/ui';
import ThemeToggle from '@/components/layout/ThemeToggle';

/**
 * Internal design-system preview — visit /styleguide.
 *
 * Purpose: see every primitive in both themes on one screen, so visual bugs are
 * caught here instead of on a real page. Not linked from the site navigation,
 * and excluded from search engines via the `robots` metadata below.
 */
export const metadata = {
  title: 'Style guide',
  robots: { index: false, follow: false },
};

// NOTE: the class strings are written out in full on purpose. Tailwind scans
// source files as plain text, so a constructed class like `bg-${token}` is
// never generated. Dynamic class names silently produce unstyled elements.
const swatches = [
  ['bg', 'Page background', 'bg-bg'],
  ['surface', 'Cards, panels', 'bg-surface'],
  ['surface-2', 'Raised / hover', 'bg-surface-2'],
  ['fg', 'Primary text', 'bg-fg'],
  ['fg-muted', 'Secondary text', 'bg-fg-muted'],
  ['fg-subtle', 'Tertiary text', 'bg-fg-subtle'],
  ['brand', 'Brand #ff3131', 'bg-brand'],
  ['accent', 'Accent #ff914c', 'bg-accent'],
];

export default function StyleGuidePage() {
  return (
    <div className="pt-24">
      <Section spacing="sm">
        <div className="flex items-start justify-between gap-6">
          <SectionHeading
            as="h1"
            eyebrow="Internal"
            title="Style guide"
            description="Every primitive in one place. Toggle the theme to verify both palettes."
          />
          <ThemeToggle />
        </div>
      </Section>

      {/* ---------------- Colour tokens ---------------- */}
      <Section spacing="sm" tone="bordered">
        <SectionHeading title="Colour tokens" description="Components use these names, never raw colours." />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {swatches.map(([token, label, bgClass]) => (
            <div key={token} className="rounded-xl border border-border-subtle p-4">
              <div className={`h-14 w-full rounded-lg border border-border-subtle ${bgClass}`} />
              <p className="mt-3 text-sm font-medium text-fg">{token}</p>
              <p className="text-xs text-fg-subtle">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------- Typography ---------------- */}
      <Section spacing="sm">
        <SectionHeading title="Typography" description="Sora for headings, Inter for body." />
        <div className="mt-10 space-y-6">
          <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">Display heading</h1>
          <h2 className="text-3xl font-semibold sm:text-4xl">Section heading</h2>
          <h3 className="text-xl font-semibold">Card heading</h3>
          <p className="max-w-2xl leading-relaxed text-fg-muted">
            Body copy uses Inter at a relaxed line height. The measure is capped so
            lines stay around 65–75 characters, which is the comfortable reading range.
          </p>
          <p className="text-sm text-fg-subtle">Small print and captions.</p>
          <p className="text-3xl font-semibold">
            Gradient <span className="text-gradient">headline fragment</span>
          </p>
        </div>
      </Section>

      {/* ---------------- Buttons ---------------- */}
      <Section spacing="sm" tone="bordered">
        <SectionHeading title="Buttons" />
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Button variant="primary">Book a consultation</Button>
          <Button variant="secondary">See our work</Button>
          <Button variant="ghost">Learn more</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="secondary" href="/">
            As a link <Icon name="ArrowRight" size={16} />
          </Button>
        </div>
      </Section>

      {/* ---------------- Cards & badges ---------------- */}
      <Section spacing="sm">
        <SectionHeading title="Cards & badges" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-fg">Static card</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              A plain surface panel with no hover behaviour.
            </p>
          </Card>

          <Card href="/styleguide">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-brand text-white">
              <Icon name="Cloud" size={18} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-fg">Linked card</h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-muted">
              The entire card is one click target.
            </p>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-fg">Badges</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge>Web Development</Badge>
              <Badge>UI/UX Design</Badge>
              <Badge tone="brand">Featured</Badge>
            </div>
          </Card>
        </div>
      </Section>

      {/* ---------------- Motion ---------------- */}
      <Section spacing="sm" tone="bordered">
        <SectionHeading
          title="Motion"
          description="Staggered reveal. Enable 'reduce motion' in your OS and these appear instantly."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 0.08}>
              <Card>
                <p className="text-sm text-fg-muted">Reveal with {i * 80}ms delay</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}
