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

  {
    slug: 'udaratva',
    client: 'Udaratva',
    title: 'A credibility-first site for a solar EPC contractor',
    summary:
      'A website for an EPC business working across solar power, microgrids, LT transmission and distribution, and off-grid installations.',
    services: ['web-development', 'ui-ux-design'],
    industry: 'Renewable Energy / EPC',
    year: '2024',
    liveUrl: 'https://udaratva.com',
    // TODO(client): confirm the narrative below. Written from the brief only —
    // scope, dates and any commercial outcome still need checking with Udaratva.
    challenge:
      'Udaratva works across four related but distinct areas — solar EPC, microgrids and minigrids, LT transmission and distribution, and off-grid solar. Tenders and industrial buyers judge capability quickly, so the breadth had to read as depth rather than as an unfocused list.',
    solution:
      'Otical built a site that leads with capability. Each service area is presented on its own terms, with the technical detail a procurement team looks for, and contact routes that make enquiry straightforward.',
    approach: [
      'Structured the four service areas so each is findable on its own',
      'Presented technical scope in the language industrial buyers use',
      'Built a responsive site that holds up on site-office hardware',
      'Made enquiry routes obvious from every page',
    ],
    results: [],
    techStack: [],
    cover: '/images/clients/UdaratvaLogo.png',
    images: [],
    featured: true,
  },

  {
    slug: 'mohak-the-vibe',
    client: 'Mohak The Vibe',
    title: 'Brand and storefront for a marketplace jewellery label',
    summary:
      'Logo design and an ecommerce website for an artificial jewellery brand selling through Flipkart, Meesho and Amazon.',
    services: ['web-development', 'ui-ux-design'],
    industry: 'Ecommerce / Fashion',
    year: '2024',
    liveUrl: 'https://mohak-the-vibe.web.app',
    // TODO(client): confirm the narrative below. Written from the brief only —
    // scope, dates and any commercial outcome still need checking with the client.
    challenge:
      'Mohak The Vibe was selling well across Flipkart, Meesho and Amazon, but a brand that exists only inside marketplace listings has no identity of its own. Customers had nowhere to go to find out who they were buying from.',
    solution:
      'Otical designed the brand identity and built a storefront that gives the label a home of its own — somewhere the range can be presented properly, and somewhere marketplace buyers can be pointed to.',
    approach: [
      'Designed a logo and visual identity for the label',
      'Built a product-led site that shows jewellery at the detail it deserves',
      'Kept presentation consistent with the marketplace listings',
      'Designed mobile-first, matching how the audience actually shops',
    ],
    results: [],
    techStack: [],
    cover: '/images/clients/Mohak.png',
    images: [],
    featured: true,
  },

  {
    slug: 'guruphoria',
    client: 'Guruphoria',
    title: 'Identity, website and social presence for a growing brand',
    summary:
      'An engagement spanning logo design, website build and ongoing social media management.',
    services: ['web-development', 'ui-ux-design'],
    industry: 'Education / Community',
    year: '2024',
    // TODO(client): confirm industry above, and the narrative below — written
    // from the brief only. Also confirm whether social media management is
    // ongoing, since that changes how this study should be written.
    liveUrl: 'https://guruphoria.netlify.app',
    challenge:
      'Guruphoria needed to launch with a coherent presence rather than assembling one piece by piece — an identity, a site to send people to, and active social channels that matched both.',
    solution:
      'Otical handled all three together. Because the same team designed the logo, built the site and ran the social channels, the brand stayed consistent instead of drifting between vendors.',
    approach: [
      'Designed the logo and core brand identity',
      'Built the website on that identity from the start',
      'Set up and ran social channels in the same visual language',
      'Kept design, site and social aligned as the brand evolved',
    ],
    results: [],
    techStack: [],
    cover: '/images/clients/Guruphoria.png',
    images: [],
    featured: false,
  },
];

export const getCaseStudyBySlug = (slug) => caseStudies.find((c) => c.slug === slug);

export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export const caseStudyHref = (slug) => `/work/${slug}`;
