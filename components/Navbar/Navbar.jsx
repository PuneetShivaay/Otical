'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950/80 backdrop-blur-lg border-b border-glass-border">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-gradient">Otical</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-neutral-300 hover:text-orange-500 transition-colors duration-300">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link href="/contact" className="px-6 py-2.5 rounded-md font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300">
              Get a Quote
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-300 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-neutral-950/90 backdrop-blur-sm">
          <div className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-neutral-300 hover:text-orange-500 transition-colors duration-300 text-lg" onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-4 px-8 py-3 rounded-md font-semibold text-white bg-orange-600 hover:bg-orange-700 transition-all duration-300">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
