import Link from 'next/link';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { site, navItems, services, serviceHref, socialLinks } from '@/data';
import { Container } from '@/components/ui';

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
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={28} height={28} className="h-7 w-7" />
              <span className="text-lg font-semibold tracking-tight text-fg">{site.name}</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">
              {site.positioning}
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${social.label}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
                >
                  <Linkedin size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-sm font-semibold text-fg">Services</h2>
            <ul className="mt-4 space-y-2.5">
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

          {/* Company + contact */}
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

            <h2 className="mt-8 text-sm font-semibold text-fg">Get in touch</h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-border-subtle pt-8">
          <p className="text-sm text-fg-subtle">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
