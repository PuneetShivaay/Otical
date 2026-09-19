import Link from 'next/link';
import Image from 'next/image';
import { site, navItems, services, serviceHref, socialLinks } from '@/data';
import { Container, Icon } from '@/components/ui';

/**
 * Site footer.
 *
 * Every link here points somewhere real. The previous footer had three columns
 * of links ("Getting Started", "API Reference", "Hackathons") that all pointed
 * at `#` — dead links read as an unfinished site.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle">
      <Container className="py-16">
        {/*
          Ratios changed with the restructure. Services was `1fr` while the
          brand column took `1.5fr` — but Services now runs two sub-columns and
          needs the most room, and the brand column is the narrowest content
          (a tagline, icons, two contact lines). Company is just five short nav
          links, so it takes the smallest share.
        */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr_0.7fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={28} height={28} className="h-7 w-7" />
              <span className="text-lg font-semibold tracking-tight text-fg">{site.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              {site.positioning}
            </p>
            {/*
              `flex-wrap` matters: seven icons at 36px plus gaps overflow the
              narrow brand column on small screens. Wrapping to a second row is
              correct here — the column is `max-w-sm`, so they never spread out
              far enough to stop reading as one group.
            */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${social.label}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
                >
                  {/*
                    Driven by `social.icon`. This used to hardcode <Linkedin />
                    for every entry, which was invisible while the list had one
                    item and would have rendered seven LinkedIn glyphs the
                    moment it grew.
                  */}
                  <Icon name={social.icon} size={16} />
                </a>
              ))}
            </div>

            {/*
              Contact lives in the brand column, not alongside the nav.

              The brand column was ~200px against the Services column's ~400px,
              leaving a large empty block beneath it; moving contact here fills
              that space with something real rather than invented filler. It
              also stops the Company column doing two unrelated jobs.

              Styled identically to every other footer link — same size, same
              colour, same hover. The footer is a calm, uniform block; making
              these louder than their neighbours drew the eye away from the
              page content sitting above it.
            */}
            <div className="mt-8 space-y-2.5">
              <a
                href={`mailto:${site.email}`}
                className="block text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, '')}`}
                className="block text-sm text-fg-muted transition-colors hover:text-fg"
              >
                {site.phone}
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-semibold text-fg">Services</h2>
            {/*
              Two sub-columns from `sm` up. Nine services in a single stack ran
              ~400px — nearly double the other columns — and since grid rows
              stretch to the tallest cell, that one list was what created the
              dead space. Wrapping to 2-up takes it to 5 rows and brings all
              three columns to roughly the same height.
            */}
            <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={serviceHref(service.slug)}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-sm font-semibold text-fg">Company</h2>
            <ul className="mt-4 space-y-2.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-fg-muted transition-colors hover:text-fg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*
          Legal links sit in the bottom bar, not in the Company column. They
          are obligations rather than things we want browsed, and every site
          puts them here — meeting that expectation is worth more than
          prominence.
        */}
        <div className="mt-14 flex flex-col gap-4 border-t border-border-subtle pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-fg-subtle">
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-fg-subtle transition-colors hover:text-fg"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-fg-subtle transition-colors hover:text-fg"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
