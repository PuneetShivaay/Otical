import Image from 'next/image';
import { team, teamDepartments } from '@/data';
import { Badge, Reveal, Section } from '@/components/ui';

/**
 * The team grid.
 *
 * Uses next/image rather than a raw <img>: these are nine 32×32 avatars, and
 * unoptimised originals were the last remaining build warning. `sizes` is set
 * so the browser never downloads a 1200px file for a 128px circle.
 *
 * Grouped by `department` (Engineering / Design / Operations) — the same
 * pattern `ServicesOverview` uses for pillars — so the section reads as an
 * organised company roster, not a flat list of individual freelancer
 * profiles. Role is rendered as a Badge (not a plain subtitle) to match the
 * "title at a company" idiom used for services/capabilities elsewhere.
 *
 * Only LinkedIn is shown. The old data pointed the Twitter and GitHub icons at
 * LinkedIn URLs as well, which misled visitors.
 */
export default function Team() {
  if (team.length === 0) return null;

  return (
    <Section spacing="default" tone="surface">
      <div className="flex flex-wrap items-baseline gap-3">
        <Badge>Otical team</Badge>
      </div>
      <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
        The people behind Otical
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-fg-muted">
        No account managers relaying messages — you talk directly to the engineers and
        designers on your project.
      </p>

      <div className="mt-12 space-y-12">
        {teamDepartments.map((department) => {
          const members = team.filter((member) => member.department === department);
          if (members.length === 0) return null;

          return (
            <div key={department}>
              <div className="flex items-baseline gap-3 border-b border-border-subtle pb-3">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-fg-subtle">
                  {department}
                </h3>
                <span className="text-xs text-fg-subtle/70">
                  {members.length} {members.length === 1 ? 'person' : 'people'}
                </span>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {members.map((member, index) => (
                  <Reveal key={member.name} delay={(index % 3) * 0.05}>
                    <article className="group flex h-full items-center gap-4 rounded-2xl border border-border-subtle bg-bg p-5 transition-colors hover:border-border-strong">
                      <div className="relative shrink-0">
                        <Image
                          src={member.image}
                          alt=""
                          width={64}
                          height={64}
                          sizes="64px"
                          className="h-16 w-16 rounded-full object-cover ring-2 ring-border-subtle transition-colors group-hover:ring-accent/50"
                        />
                        {/* Small company mark anchors each avatar to Otical, rather than reading as an independent headshot. */}
                        <span
                          aria-hidden
                          className="absolute -bottom-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-bg bg-gradient-to-br from-orange-500 to-red-700 text-[9px] font-bold text-white"
                        >
                          O
                        </span>
                      </div>
                      <div className="min-w-0">
                        <h4 className="truncate font-semibold text-fg">{member.name}</h4>
                        <Badge className="mt-1">{member.role}</Badge>
                        {member.linkedin ? (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 block text-sm font-medium text-brand hover:underline"
                          >
                            LinkedIn
                            <span className="sr-only"> profile for {member.name}</span>
                          </a>
                        ) : null}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

