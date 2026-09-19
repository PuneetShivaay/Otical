/**
 * CASE STUDIES — the credibility engine of the site.
 *
 * Routes: /work (index) and /work/[slug] (detail), both resolved from this file.
 * Adding a case study = adding one object here. No new component files.
 *
 * SCHEMA
 * ------
 * slug          string   URL segment, stable forever
 * client        string   Client name (must match data/clients.js)
 * title         string   Headline for the study
 * summary       string   1–2 sentences, used on cards and meta description
 * services      string[] Service slugs from data/services.js
 * industry      string
 * year          string
 * liveUrl       string?  Public URL if the work is live
 * challenge     string   The problem
 * solution      string   What we built
 * approach      string[] Key steps / decisions
 * results       {metric,label}[]   Leave EMPTY until real numbers exist
 * techStack     string[]
 * cover         string   Path under /public
 * images        string[] Additional screenshots
 * featured      boolean  Show on the home page
 *
 * ⚠️ RULE: never invent metrics or testimonials. An empty `results` array is
 * fine — the renderer simply hides that block. Fabricated numbers are a
 * credibility risk. See docs/03-PROGRESS.md.
 */

export const caseStudies = [
  {
    slug: 'petmets',
    client: 'PetMets',
    title: 'A production pet-care platform, web and mobile',
    summary:
      'A live consumer platform for pet owners, delivered end to end — product design, web application and mobile app.',
    services: ['web-development', 'mobile-app-development', 'ui-ux-design'],
    industry: 'Consumer / Pet Care',
    year: '2024',
    liveUrl: 'https://petmets.in',
    // TODO(client): replace the placeholder narrative below with real copy.
    challenge:
      'PetMets needed a single platform that pet owners could trust for day-to-day care, with a consistent experience across web and mobile.',
    solution:
      'Otical delivered the product end to end: interface design, a responsive web application, and a companion mobile app sharing one design language.',
    approach: [
      'Product discovery and user-flow definition',
      'Design system and interface design',
      'Responsive web application build',
      'Companion mobile application',
      'Deployment and ongoing support',
    ],
    results: [], // Awaiting real metrics from the client.
    techStack: [],
    cover: '/images/clients/PetMets.png',
    images: [],
    featured: true,
  },
];

export const getCaseStudyBySlug = (slug) => caseStudies.find((c) => c.slug === slug);

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export const caseStudyHref = (slug) => `/work/${slug}`;
