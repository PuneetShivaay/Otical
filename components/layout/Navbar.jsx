'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navItems, site } from '@/data';
import { Button } from '@/components/ui';
import ThemeToggle from './ThemeToggle';
import { cn } from '@/lib/utils';

/**
 * Site header.
 *
 * Renders `navItems` from data/ — the old Navbar kept its own private copy of
 * the links, so the nav and the rest of the site could drift apart.
 *
 * Starts transparent over the hero and gains a background once scrolled, which
 * is the Linear/Vercel pattern: chrome appears only when it is needed.
 */
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    // `passive` tells the browser we never preventDefault, so scrolling is
    // never blocked waiting on this handler.
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation, otherwise it stays open over the new page.
  useEffect(() => setIsOpen(false), [pathname]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || isOpen
          ? 'border-b border-border-subtle bg-bg/80 backdrop-blur-lg'
          : 'border-b border-transparent'
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
          <Image src="/logo.png" alt="" width={28} height={28} className="h-7 w-7" priority />
          <span className="text-lg font-semibold tracking-tight text-fg">{site.name}</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={cn(
                'rounded-lg px-3 py-2 text-sm transition-colors',
                isActive(item.href)
                  ? 'text-fg'
                  : 'text-fg-muted hover:text-fg'
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="/contact" size="sm">
            Start a project
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-fg-muted hover:text-fg"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div id="mobile-menu" className="border-t border-border-subtle bg-bg md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'block rounded-lg px-3 py-2.5 text-sm',
                  isActive(item.href) ? 'bg-surface text-fg' : 'text-fg-muted'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-3 w-full">
              Start a project
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
