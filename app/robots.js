import { site } from '@/data/site';

/**
 * Generated robots.txt — replaces the hand-maintained public/robots.txt so the
 * sitemap URL can never drift from the real domain.
 *
 * /styleguide is disallowed: it is an internal reference page, and indexing it
 * would put a page of colour swatches into search results for the brand.
 */
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/styleguide', '/api/'],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
