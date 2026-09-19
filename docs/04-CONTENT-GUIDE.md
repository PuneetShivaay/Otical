# 04 — Content Guide

> How to add or edit content without touching component code.
> Everything here is a change to a file in `data/`.

---

## Add a case study

1. Open `data/caseStudies.js` and add one object to the array.
2. Put images in `public/images/work/<slug>/`.
3. Done — `/work` and `/work/<slug>` pick it up automatically, and the page is
   pre-rendered as static HTML at build time.

```js
{
  slug: 'acme-platform',          // URL: /work/acme-platform — never change once live
  client: 'Acme',                 // must match a name in data/clients.js
  title: 'A logistics platform rebuilt for scale',
  summary: 'One or two sentences. Used on cards and as the SEO description.',
  services: ['web-development'],  // slugs from data/services.js
  industry: 'Logistics',
  year: '2025',
  liveUrl: 'https://acme.com',    // omit or null if not public
  challenge: 'The problem in the client\'s terms.',
  solution: 'What we actually delivered.',
  approach: ['Discovery', 'Design system', 'Build', 'Launch'],
  results: [                      // LEAVE EMPTY until real numbers exist
    { metric: '42%', label: 'Faster checkout' },
  ],
  techStack: ['Next.js', 'PostgreSQL'],
  cover: '/images/work/acme-platform/cover.png',
  images: ['/images/work/acme-platform/1.png'],
  featured: true,                 // true = also appears on the home page
}
```

### Rules

- **Never invent metrics, quotes or job titles.** An empty `results: []` is fine —
  the block hides itself. Fabricated numbers are a legal and credibility risk.
  (The old site shipped invented testimonials attributed to real clients.)
- `slug` is permanent. Changing it breaks every existing link and its search ranking.
- Every optional block (`results`, `techStack`, `images`, `liveUrl`) hides when empty,
  so a partially-filled study still looks finished.
- Keep `summary` under ~160 characters — it doubles as the meta description.

---

## Add or edit a service

Edit `data/services.js`. The set of 9 is fixed — adding a tenth is a positioning
decision, so record it in `docs/03-PROGRESS.md` first.

```js
{
  slug: 'web-development',        // URL: /services/web-development
  title: 'Web Development',
  icon: 'Globe',                  // see "Icons" below
  summary: 'One line. Used on cards.',
  description: 'Full paragraph. Used on the service page.',
  pillar: 'build',                // build | design | intelligence | infrastructure
}
```

---

## Icons

`icon` is a **string**, not JSX, so data files stay plain and serializable.

To use a new icon:
1. Find its name at [lucide.dev](https://lucide.dev).
2. Add it to both the import and the `iconMap` in `components/ui/Icon.jsx`.

> Do **not** switch to `import * as Icons`. It defeats tree-shaking and pulled
> 160 kB of unused icons into the bundle when tried. See `docs/03-PROGRESS.md`.

---

## Other content

| Change | File |
|--------|------|
| Company name, tagline, phone, email | `data/site.js` |
| Navigation links | `data/site.js` → `navItems` |
| Mission / vision | `data/site.js` → `companyStory` |
| Process steps | `data/site.js` → `processSteps` |
| Client logos | `data/clients.js` |
| Team members | `data/team.js` |
| Testimonials | `data/testimonials.js` |

**Testimonials:** only real, client-approved quotes. If it is not in
`data/testimonials.js`, it does not go on the site.

---

## Images

- Put files under `public/images/…` and reference them by path string.
- Always rendered with `next/image`, which handles sizing, lazy loading and
  AVIF/WebP conversion.
- **Never** reference a remote URL you do not control. The old site used
  temporary `lh3.googleusercontent.com/aida-…` links that expire and break.

---

## After any content change

```bash
npm run build   # must pass
```

If you added a route, also check `app/sitemap.js` still covers it.
