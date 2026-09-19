import Image from 'next/image';
import { team } from '@/data';
import { Reveal, Section } from '@/components/ui';

/**
 * The team grid.
 *
 * Uses next/image rather than a raw <img>: these are nine 32×32 avatars, and
 * unoptimised originals were the last remaining build warning. `sizes` is set
 * so the browser never downloads a 1200px file for a 128px circle.
 *
 * Only LinkedIn is shown. The old data pointed the Twitter and GitHub icons at
 * LinkedIn URLs as well, which misled visitors.
 */
export default function Team() {
  if (team.length === 0) return null;

  return (
    <Section spacing="default" tone="surface">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        The people you&apos;ll work with
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-fg-muted">
        No account managers relaying messages — you talk to the people doing the work.
      </p>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <Reveal key={member.name} delay={(index % 3) * 0.05}>
            <article className="flex h-full items-center gap-4 rounded-2xl border border-border-subtle bg-bg p-5 transition-colors hover:border-border-strong">
              <Image
                src={member.image}
                alt=""
                width={64}
                height={64}
                sizes="64px"
                className="h-16 w-16 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0">
                <h3 className="truncate font-semibold text-fg">{member.name}</h3>
                <p className="truncate text-sm text-fg-muted">{member.role}</p>
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-medium text-brand hover:underline"
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
    </Section>
  );
}
