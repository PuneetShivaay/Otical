import Image from 'next/image';
import { clients } from '@/data';
import { Container } from '@/components/ui';

/**
 * Continuous client logo strip.
 *
 * ---------------------------------------------------------------------------
 * THE -50% LOOP, AND THE BUG THAT BROKE IT
 * ---------------------------------------------------------------------------
 * A seamless CSS marquee works by rendering the list twice and translating the
 * track by exactly -50%: the second copy arrives precisely where the first
 * started, so the reset is invisible.
 *
 * That only holds if the track is EXACTLY two identical halves. The first
 * version put `gap-14` on the outer flex container as well, so the track was:
 *
 *     [ copy ] + gap + [ copy ]
 *
 * making -50% equal to `copy + gap/2` — half a gap too far. Every cycle drifted
 * by 28px and the mismatch showed up as empty space part-way through the loop.
 *
 * Fix: the outer track has NO gap. Spacing lives inside each copy, and each
 * copy carries a trailing `pr-14` so the seam between copies matches the
 * spacing between logos. The two halves are then byte-for-byte identical.
 *
 * ---------------------------------------------------------------------------
 * WHY FOUR COPIES, NOT TWO
 * ---------------------------------------------------------------------------
 * Two copies only fill the screen if a single copy is wider than the viewport.
 * With few logos, or on a very wide display, a gap can appear at the end of the
 * cycle. Rendering the set four times and translating -50% keeps two copies'
 * worth of logos on screen at all times, so there is no empty space at any
 * viewport width. The duplicates are cheap: the same images, already cached.
 *
 * Other notes:
 * - Animation is `transform` only, so it runs on the compositor, never layout.
 * - Only the first copy is exposed to screen readers; the rest are aria-hidden.
 * - `motion-reduce:animate-none` stops movement for users who ask for it.
 * - Hover pauses the animation, so a logo can actually be looked at.
 */

// Rendering the list this many times guarantees the track overflows any
// viewport. Must be EVEN, or the -50% translation lands mid-set.
const TRACK_COPIES = 4;

export default function ClientMarquee() {
  return (
    <section className="border-y border-border-subtle py-12" aria-labelledby="clients-heading">
      <Container>
        <h2
          id="clients-heading"
          className="text-center text-xs font-medium uppercase tracking-[0.14em] text-fg-subtle"
        >
          Trusted by teams building real products
        </h2>
      </Container>

      {/* Full-bleed, with the edges faded out so logos don't hard-clip. */}
      <div className="group relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {/* No `gap` on this element — see the note above. */}
        <div className="flex w-max animate-marquee items-center motion-reduce:animate-none group-hover:[animation-play-state:paused]">
          {Array.from({ length: TRACK_COPIES }).map((_, copy) => (
            <div
              key={copy}
              className="flex shrink-0 items-center gap-14 pr-14"
              aria-hidden={copy !== 0}
            >
              {clients.map((client) => (
                <Image
                  key={`${copy}-${client.name}`}
                  src={client.logo}
                  alt={copy === 0 ? client.name : ''}
                  width={120}
                  height={40}
                  className="h-9 w-auto max-w-none object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
