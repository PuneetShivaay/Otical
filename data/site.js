/**
 * Global site information — name, positioning, contact details, social links.
 * Single source of truth for anything that appears in more than one place.
 */

export const site = {
  name: 'Otical',
  // See docs/00-PROJECT-BRIEF.md
  positioning: 'One partner. Every layer of your digital stack.',
  tagline: 'Technology, end to end.',
  description:
    'Otical is a full-service technology partner covering web, mobile, design, AI, cloud, blockchain and security — from idea to infrastructure.',
  url: 'https://otical.vercel.app',
  email: 'oticalmail@gmail.com',
  phone: '+91 854 508 3648',
};

/** Primary navigation. Navbar must render THIS — never its own copy. */
export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Social profiles. `icon` is a lucide-react name — it must exist in the
 * iconMap in components/ui/Icon.jsx or nothing renders.
 *
 * Order is deliberate: LinkedIn and GitHub first because they carry the most
 * weight for a B2B technology buyer, then the audience channels, then Linktree
 * last as the catch-all.
 *
 * NOTE ON X: lucide ships `Twitter` (the old bird), not the X wordmark —
 * lucide's policy is to avoid brand marks it can't license cleanly. The label
 * says "X" so the accessible name is correct; only the glyph is dated. If that
 * bothers you, the fix is a hand-rolled inline SVG, not a different icon.
 *
 * Linktree has no lucide icon at all, so it uses the generic `Link2`.
 */
export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/oticalofficial', icon: 'Linkedin' },
  { label: 'GitHub', href: 'https://github.com/oticalofficial', icon: 'Github' },
  { label: 'YouTube', href: 'https://www.youtube.com/@oticalofficial', icon: 'Youtube' },
  { label: 'Instagram', href: 'https://www.instagram.com/oticalofficial', icon: 'Instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/otical', icon: 'Facebook' },
  { label: 'X', href: 'https://x.com/oticalofficial', icon: 'Twitter' },
  { label: 'Linktree', href: 'https://linktr.ee/otical', icon: 'Link2' },
];

/** Contact methods shown on the contact page. Icons are lucide-react names. */
export const contactInfo = [
  { title: 'Phone', value: site.phone, href: `tel:${site.phone.replace(/\s/g, '')}`, icon: 'Phone' },
  { title: 'Email', value: site.email, href: `mailto:${site.email}`, icon: 'Mail' },
];

/** Company mission & vision — used on the About page. */
export const companyStory = {
  mission:
    'Our mission is to empower businesses with innovative technology solutions, driving growth and success in the digital age. We are committed to delivering excellence and building long-lasting partnerships with our clients.',
  vision:
    'Our vision is to be a global leader in technology and innovation, creating a better future for businesses and society. We strive to be a trusted partner for our clients, delivering cutting-edge solutions that transform industries and drive positive change.',
};

/**
 * What working with Otical is actually like. Used on the About page.
 *
 * These are positioning claims, not credentials — they describe how the team
 * operates. Anything that is a *verifiable credential* (ISO certification,
 * registration numbers, awards) belongs in `credentials` below, so the two
 * never get confused.
 */
export const companyValues = [
  {
    title: 'One team, not a chain of vendors',
    description:
      'Design, engineering and infrastructure sit together. Nothing is lost in a handover between agencies, because there is no handover.',
    icon: 'Users',
  },
  {
    title: 'We say what we would not build',
    description:
      'If a simpler approach solves the problem, we will tell you — including when that means a smaller project for us.',
    icon: 'MessageSquare',
  },
  {
    title: 'Work you can take elsewhere',
    description:
      'Clear code, documented decisions and no artificial lock-in. You own what we build, and another team could pick it up.',
    icon: 'KeyRound',
  },
  {
    title: 'We stay after launch',
    description:
      'Launch is the start of the work, not the end of it. Most of our clients are still with us after the first release.',
    icon: 'LifeBuoy',
  },
];

/**
 * ⚠️ TODO(client): VERIFY BEFORE THIS GOES LIVE.
 *
 * The previous About page stated Otical is "an ISO-certified firm". That is a
 * verifiable legal claim, and publishing it when it is not current is a real
 * liability — not just a copy problem.
 *
 * It is kept here, isolated and flagged, rather than silently deleted (it may
 * well be true and is worth showing) or silently republished (if it is not).
 *
 * Set `verified: true` once the certificate is confirmed, and add the standard
 * and certificate number — an unqualified "ISO-certified" is close to
 * meaningless, since ISO 9001 and ISO 27001 say very different things.
 *
 * The About page renders NOTHING from this block while `verified` is false.
 */
export const credentials = {
  verified: false,
  items: [
    {
      label: 'ISO certified',
      detail: '', // e.g. 'ISO 9001:2015 — certificate no. XXXXX'
    },
  ],
};

/**
 * Options for the contact form's qualifying questions.
 *
 * ⚠️ TODO(client): CONFIRM THE BUDGET BANDS. These are placeholders. Bands that
 * are too high scare off good small projects; too low and you spend time on
 * enquiries you do not want. This is a commercial decision, not a design one.
 *
 * `value` is what gets emailed; `label` is what the visitor sees.
 */
export const enquiryBudgets = [
  { value: 'under-1l', label: 'Under ₹1,00,000' },
  { value: '1l-3l', label: '₹1,00,000 – ₹3,00,000' },
  { value: '3l-10l', label: '₹3,00,000 – ₹10,00,000' },
  { value: 'over-10l', label: 'Over ₹10,00,000' },
  { value: 'unsure', label: 'Not sure yet' },
];

export const enquiryTimelines = [
  { value: 'asap', label: 'As soon as possible' },
  { value: '1-3-months', label: 'In the next 1–3 months' },
  { value: '3-6-months', label: 'In 3–6 months' },
  { value: 'exploring', label: 'Just exploring' },
];


/** How we work — rendered as the process timeline. */
export const processSteps = [
  {
    title: 'Consultation & Discovery',
    description:
      'We start by understanding your business goals and requirements, conducting a thorough analysis of your needs to tailor the perfect solution.',
  },
  {
    title: 'Strategy & Proposal',
    description:
      'Based on our findings, we develop a strategic plan and a detailed proposal outlining the project scope, timeline, and deliverables.',
  },
  {
    title: 'Design & Development',
    description:
      'Our team designs and builds your solution with modern technologies, sharing progress in short, reviewable increments.',
  },
  {
    title: 'Launch & Support',
    description:
      'We rigorously test the solution to ensure it meets our quality standards, then deploy it and provide ongoing support and maintenance.',
  },
];
