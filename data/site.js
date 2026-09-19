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

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/oticalofficial', icon: 'Linkedin' },
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
