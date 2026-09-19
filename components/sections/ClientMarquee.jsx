import Image from 'next/image';
import { clients } from '@/data';
import { Container } from '@/components/ui';

/**
 * Continuous client logo strip.
 *
 * Implementation notes:
 * - The list is rendered twice and the track moves by exactly -50%, so the
 *   second copy lands where the first began — a seamless loop with no JS.
 * - Animation is `transform` only (see tailwind.config.cjs `marquee`), so it
 *   runs on the compositor and never triggers layout.
 * - The duplicate copy is `aria-hidden`, so screen readers hear each client once.
 * - `motion-reduce:animate-none` stops the movement for users who ask for it;
 *   the logos simply sit still.
 */
export default function ClientMarquee() {
  return (
    <section className="border-y border-border-subtle py-12" aria-labelledby="clients-heading">
      <Container>
        <h2 id="clients-heading" className="text-center text-xs font-medium uppercase tracking-[0.14em] text-fg-subtle">
          Trusted by teams building real products
        </h2>
      </Container>

      {/* Full-bleed, with the edges faded out so logos don't hard-clip. */}
      <div className="relative mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee items-center gap-14 motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-14" aria-hidden={copy === 1}>
              {clients.map((client) => (
                <Image
                  key={`${copy}-${client.name}`}
                  src={client.logo}
                  alt={copy === 0 ? client.name : ''}
                  width={120}
                  height={40}
                  className="h-9 w-auto object-contain opacity-60 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
