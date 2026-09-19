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
