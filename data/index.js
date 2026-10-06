/**
 * Barrel file for the data layer.
 *
 * Import from here (`import { services } from '@/data'`) or from the specific
 * file — both work. Keeping a barrel means consumers don't need to know which
 * file a given entity lives in.
 *
 * See docs/02-ARCHITECTURE.md for the rules governing this folder.
 */

export {
  site,
  navItems,
  socialLinks,
  contactInfo,
  companyStory,
  companyValues,
  credentials,
  enquiryBudgets,
  enquiryTimelines,
  processSteps,
} from './site';
export {
  services,
  servicePillars,
  getServiceBySlug,
  serviceHref,
  getDisplayedPillars,
  getServicesForPillar,
} from './services';
export { clients } from './clients';
export { caseStudies, featuredCaseStudies, getCaseStudyBySlug, caseStudyHref } from './caseStudies';
export { team, teamDepartments } from './team';
export { testimonials } from './testimonials';
export { tools, toolHref } from './tools';
