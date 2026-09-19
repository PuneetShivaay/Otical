import './globals.css';
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeScript from "@/components/layout/ThemeScript";
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

export const metadata = {
  metadataBase: new URL('https://otical.vercel.app'),
  title: {
    default: 'Otical — One partner. Every layer of your digital stack.',
    template: '%s | Otical',
  },
  description:
    'Otical is a full-service technology partner covering web, mobile, design, AI, cloud, blockchain and security — from idea to infrastructure.',
  icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }) {
  // suppressHydrationWarning: ThemeScript mutates data-theme before React
  // hydrates, so the server and client markup intentionally differ here.
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} ${sora.variable} font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

