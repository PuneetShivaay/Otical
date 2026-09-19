import { site } from '@/data/site';
import { services } from '@/data/services';
import { caseStudies } from '@/data/caseStudies';

/**
 * Generated sitemap.
 *
 * Replaces the hand-maintained public/sitemap.xml, which had gone stale in two
 * ways that actively hurt: it pointed at the wrong domain (otical.web.app), and
 * it listed /projects, which now 308s to /work. A hand-written sitemap is a
 * second copy of the routing table, and the copy always drifts.
 *
 * This derives from the same data the pages render from, so adding a service or
 * case study updates the sitemap with no extra step.
 *
 * /styleguide is deliberately excluded — it is an internal reference page.
 */
export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = [
    { path: '', priority: 1 },
    { path: '/services', priority: 0.9 },
    { path: '/work', priority: 0.9 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
    // Low priority, but included: search engines treat a reachable privacy
    // policy as a trust signal, and its absence as a negative one.
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
  ].map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route.priority,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${site.url}/work/${study.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes];
}
