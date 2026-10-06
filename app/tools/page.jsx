import { tools, toolHref } from '@/data';
import { CTABanner } from '@/components/sections';
import { Badge, Icon, PageHeader, Reveal, Section } from '@/components/ui';

export const metadata = {
  title: 'Free Tools',
  description:
    'Free, open-source tools built by Otical — text utilities, a password generator and a client-side compute lab. No signup required.',
};

/**
 * Tools showcase.
 *
 * These are standalone products on their own domains, not part of this
 * Next.js app — cards link out with target="_blank". Content comes entirely
 * from data/tools.js, so adding a tool is one object, no new files.
 */
export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tools"
        title="Free tools, built in the open"
        description="Small products we've built and use ourselves — free for anyone, with no signup wall."
      />

      <Section spacing="default">
        {tools.length === 0 ? (
          <p className="text-fg-muted">Tools are on the way.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <Reveal key={tool.slug} delay={(index % 3) * 0.06}>
                <a
                  href={toolHref(tool)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-border-subtle bg-surface p-6 transition-colors duration-200 hover:border-border-strong hover:bg-surface-2"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-subtle bg-surface-2 text-accent">
                    <Icon name={tool.icon} size={18} />
                  </div>

                  <h2 className="mt-4 font-semibold text-fg">{tool.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {tool.description}
                  </p>

                  {tool.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tool.tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                      ))}
                    </div>
                  ) : null}

                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Open tool
                    <Icon
                      name="ExternalLink"
                      size={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </Section>

      <CTABanner />
    </>
  );
}
