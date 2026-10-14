# Otical — AI agent guide

Marketing site for "Otical" built with **Next.js 14 App Router (JSX only, no TypeScript)**, Tailwind CSS, Framer Motion, Resend. Deployed to Vercel (`otical.vercel.app`). `firebase.json` and `VITE_*`/EmailJS references are legacy from the old Vite build — ignore them.

## Architecture (three rules)
1. `app/` pages contain **no markup**; they only compose `components/sections/`.
2. `components/ui/` primitives never import from `data/` (keep them context-free).
3. Content never lives in components; it lives in `data/`. Components render, data decides.

- `data/` is the single content source: `site.js` (nav, contact, social), `services.js`, `caseStudies.js`, `clients.js`, `team.js`, `testimonials.js`, `tools.js`. Import via the barrel `import { services } from '@/data'`.
- Data is plain, serializable `.js` with **no JSX**. Icons are string names (e.g. `icon: "BotMessageSquare"`) resolved by `components/ui/Icon.jsx`. To add an icon, import it from `lucide-react` and add it to that explicit map (a wildcard import breaks tree-shaking).
- Every entity has a stable `slug`; routes resolve by slug, never by index.
- Dynamic routes: `app/services/[service]/page.jsx` and `app/work/[slug]/page.jsx` use `generateStaticParams`, `dynamicParams = false`, and `notFound()` on miss. **Adding a service or case study = adding one object to its data file.**
- `/projects` → `/work` is a permanent redirect in `next.config.mjs`. Keep it when renaming routes.

## Conventions
- Server Components by default. Add `'use client'` only for state, handlers, or Framer Motion; keep client components as leaf nodes.
- Use `next/image`, never raw `<img>`. All images are local under `public/` (no `lh3.googleusercontent.com` links; they expire).
- Styling is Tailwind utilities inline. Dark theme with orange→red gradient accents; reuse the shared primitives in `components/ui/` (`Container`, `Section`, `SectionHeading`, `Button`, `Card`, `Badge`, `Reveal`) before inventing styles.
- Config files are `.cjs` (Tailwind/PostCSS) because `package.json` sets `"type": "module"`. Keep new config files `.cjs`.
- Every route exports `metadata` or `generateMetadata`; site-wide defaults live in `app/layout.jsx`.
- `app/sitemap.js` and `app/robots.js` generate SEO files. Do **not** hand-edit `public/sitemap.xml` or `public/robots.txt`.

## Contact / email flow
`components/sections/ContactForm.jsx` validates locally, then `POST`s to `/api/send`. `app/api/send/route.js` checks input, honeypot and rate limit, then sends via Resend using `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL` (from `.env.local`). Errors return real HTTP status codes. Email body is sanitized `html:`, not `react:` JSX.

## Workflows
- `npm run dev`, `npm run build` (must pass before merging), `npm run start`, `npm run lint`. No test suite exists.
- Static assets: `public/images/{clients,team,testimonials,work/<slug>}`, `public/gif/clients`.
- `docs/02-ARCHITECTURE.md` holds the fuller rationale; `docs/04-CONTENT-GUIDE.md` covers copy rules.

Unclear or missing (e.g. the `docs/` content rules, the `work/[slug]` gallery conventions, or deployment env vars)? Tell me and I'll refine.
