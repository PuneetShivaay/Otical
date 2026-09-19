/**
 * Barrel file for the data layer.
 *
 * Import from here (`import { services } from '@/data'`) or from the specific
 * file — both work. Keeping a barrel means consumers don't need to know which
 * file a given entity lives in.
 *
 * See docs/02-ARCHITECTURE.md for the rules governing this folder.
 */

export { site, navItems, socialLinks, contactInfo, companyStory, processSteps } from './site';
export { services, servicePillars, getServiceBySlug, serviceHref } from './services';
export { clients } from './clients';
export { caseStudies, featuredCaseStudies, getCaseStudyBySlug, caseStudyHref } from './caseStudies';
export { team } from './team';
export { testimonials } from './testimonials';
