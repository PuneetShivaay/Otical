import {
  ClientMarquee,
  CTABanner,
  FeaturedWork,
  Hero,
  Process,
  ServicesOverview,
  Testimonials,
} from '@/components/sections';

/**
 * Home page.
 *
 * Pages contain no markup — they only compose sections. See docs/02-ARCHITECTURE.md.
 *
 * The order tells a deliberate story:
 *   who we are -> proof -> what we do -> evidence -> how we work -> trust -> next step
 */

/**
 * The home page inherits its title from the layout's `default`, but needs its
 * own canonical so `/` never competes with a duplicate URL.
 */
export const metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <ServicesOverview />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <CTABanner />
    </>
  );
}
