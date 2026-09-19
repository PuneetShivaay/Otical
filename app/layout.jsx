import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ThemeScript from '@/components/layout/ThemeScript';
import { site, socialLinks } from '@/data/site';
import { Inter, Sora } from 'next/font/google';

/*
 * Fonts are loaded through next/font, which self-hosts them, preloads them and
 * avoids layout shift. Previously globals.css ALSO pulled fonts via an @import
 * from Google — a render-blocking request for a third family. That is gone.
 *
 * display face = Sora, body/UI = Inter. See docs/01-DESIGN-SYSTEM.md.
 */
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

/**
 * Site-wide metadata defaults. Individual pages override `title` and
 * `description`; everything else here is inherited.
 *
 * `metadataBase` comes from data/site.js rather than being written twice —
 * two copies of a domain is exactly how the old sitemap ended up pointing at
 * a domain that no longer existed.
 */
export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.positioning}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'web development',
    'mobile app development',
    'UI UX design',
    'AI and machine learning',
    'cloud and DevOps',
    'cybersecurity',
    'technology partner',
    'Lucknow',
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  icons: { icon: '/logo.png' },
  // Lets Google show the full rich preview rather than a truncated snippet.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.positioning}`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.positioning}`,
    description: site.description,
  },
  alternates: { canonical: '/' },
};

export const viewport = {
  // Matches --color-bg in globals.css, so the mobile browser chrome blends
  // with the page instead of showing a white bar above a dark site.
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#08080a' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
};

export default function RootLayout({ children }) {
  /*
   * Organization structured data.
   *
   * This is what lets Google show a knowledge panel and associate the brand
   * with its logo, contact details and social profiles. It is emitted once,
   * in the layout, rather than repeated per page.
   *
   * Everything here is derived from data/site.js — no hardcoded duplicates.
   */
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo.png`,
    description: site.description,
    email: site.email,
    telephone: site.phone,
    sameAs: socialLinks.map((link) => link.href),
  };

  // suppressHydrationWarning: ThemeScript mutates data-theme before React
  // hydrates, so the server and client markup intentionally differ here.
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <script
          type="application/ld+json"
          // Safe: the content is built from our own data file, not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-sans`}>
        {/*
          Skip link — the first thing a keyboard user reaches. Without it they
          must tab through the whole nav on every page. Visually hidden until
          focused.
        */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:font-medium focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
