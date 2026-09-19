# 03 — Progress & Decision Log

Branch: `devdeploy/future` · Started: 2026-09-19

---

## Phase plan

| Phase | Scope | Status |
|-------|-------|--------|
| **0** | Foundation — docs, brand tokens, theming, fonts, config, data migration | ✅ Done |
| **1** | UI primitives — Container, Section, Button, Card, Reveal, Icon | ✅ Done |
| **2** | Home page redesign + Navbar/Footer + theme toggle | ✅ Done |
| **3** | Case studies engine — `/work/[slug]` detail template | ✅ Done |
| **4** | Services — index + deep service template | ✅ Done |
| **5** | About + Contact (qualified form, hardened API) | ✅ Done |
| **6** | SEO + performance pass (metadata, OG, JSON-LD, Lighthouse 95+) | ⬜ Next |

---

## Phase 0 checklist

- [x] `docs/` created (brief, design system, architecture, progress)
- [x] Brand tokens + semantic theming in `globals.css` / `tailwind.config.cjs`
- [x] Fonts: Sora + Inter via `next/font`; removed blocking `@import`
- [x] `next.config.mjs` — image formats + `/projects` → `/work` redirect
- [x] No-flash theme script (`components/layout/ThemeScript.jsx`)
- [x] `npm run build` passes (it did **not** before — see below)
- [x] Migrated `constants/index.jsx` → `data/*.js`; old folder deleted
- [x] `@/` path alias added (`jsconfig.json`)

**Phase 0 is complete.**

---

## Phase 1 checklist — UI primitives

- [x] `lib/utils.js` — `cn()` class joiner (no clsx/tailwind-merge dependency)
- [x] `Container`, `Section` — layout rhythm
- [x] `SectionHeading`, `Eyebrow` — consistent section headers
- [x] `Button` (renders `<a>` or `<button>`), `Card`, `Badge`
- [x] `Reveal` — the single motion component, reduced-motion aware
- [x] `ThemeToggle` — hydration-safe, no theme flash
- [x] `/styleguide` — internal preview, `noindex`
- [x] `npm run build` passes — shared JS unchanged at 87.3 kB

**Review it at `/styleguide` with `npm run dev`, and toggle the theme.**

### Tailwind gotcha hit during this phase

The styleguide first built swatch classes as `` `bg-${token}` ``. Tailwind scans source as
plain text, so those classes were never generated and the swatches rendered unstyled.
Full class strings are now stored in the data. **Never construct Tailwind class names.**

---

## Phase 2 checklist — Home page

- [x] `Navbar` — renders `navItems` from data, transparent→solid on scroll, active state,
      mobile menu closes on navigation, theme toggle
- [x] `Footer` — every link points somewhere real (was three columns of `#`)
- [x] `Hero` — **no video**; CSS radial gradients + grid mask, zero JS
- [x] `ClientMarquee` — 24 logos, transform-only loop, duplicate copy `aria-hidden`
- [x] `ServicesOverview` — grouped by the 4 pillars
- [x] `FeaturedWork` — renders from `caseStudies`; hides itself when empty
- [x] `Process` — ordered list, semantic `<ol>`
- [x] `Testimonials` — **the 6 real quotes**, fabricated ones deleted
- [x] `CTABanner` — reusable closing CTA
- [x] `/work` index route added
- [x] Legacy deleted: `components/{Navbar,Footer,Home,Projects,User}`, `app/projects`
- [x] Dependencies removed: `@emailjs/browser`, `@material-tailwind/react`, `@next/font`,
      `react-slick`, `slick-carousel`; `firebase.json` deleted
- [x] `.vscode/settings.json` silences the false `@tailwind`/`@apply` CSS validator errors

Home page First Load JS: **147 kB → 142 kB**, with far more content on the page.

---

## Phase 3 checklist — Case studies

- [x] `PageHeader` primitive — consistent page openings
- [x] `/work/[slug]` detail template — narrative, results, tech stack, gallery,
      next-study link, CTA
- [x] `generateStaticParams` — case studies pre-render as static HTML (`/work/petmets`)
- [x] `generateMetadata` — per-study title, description, canonical, OpenGraph
- [x] Every optional block hides when its data is empty
- [x] `docs/04-CONTENT-GUIDE.md` — how to add content without touching components

**Adding a case study is now one object in `data/caseStudies.js`.**

The template is deliberately tolerant of missing data, because real narrative and
metrics arrive from clients later. `results: []` hides the metrics band entirely
rather than showing zeros — we never invent numbers.


### Bundle-size lesson (worth remembering)

`components/ui/Icon.jsx` first used `import * as LucideIcons from 'lucide-react'`.
That defeats tree-shaking and pulled the **entire** icon library into the client bundle:
home First Load JS jumped **147 kB → 308 kB**. Replaced with an explicit import map;
back to 147 kB. **Never wildcard-import an icon or utility library.**

### Build fixes required along the way

The build was **already broken on `main`** before any redesign work:

1. `Testimonials.jsx` — unescaped quotes/apostrophes failed `react/no-unescaped-entities`.
2. `app/api/send/route.js` — `new Resend(...)` ran at **module scope**, so `next build`
   crashed with "Missing API key" on any machine or CI without `RESEND_API_KEY`.
   Now lazily constructed inside the handler, and it returns real 500 status codes
   instead of the old HTTP 200-on-failure.

Baseline after Phase 0: 9 static pages, **87.3 kB shared JS**, home at 147 kB First Load.

---

## Phase 4 checklist — Services

- [x] `data/services.js` rewritten with a deep schema — each service now carries
      `summary`, `description`, `pillar`, `outcomes[]`, `capabilities[]`, `stack[]`, `faqs[]`
- [x] `/services` index — grouped by the 4 pillars, plus the shared engagement process
- [x] `/services/[service]` — outcomes, capabilities, process, stack, related work,
      FAQs and CTA; every block hides when its data is empty
- [x] `generateStaticParams` + `generateMetadata` — **all 9 service pages prerender as static HTML**
- [x] Legacy `components/Services/` deleted
- [x] `npm run build` passes — shared JS still 87.3 kB, services pages 142 kB First Load

⚠️ **The service copy is an Otical-written first draft and is marked as pending client
review in `data/services.js`.** Outcomes and capabilities are qualitative on purpose —
no invented metrics, same rule as case studies.

### Why FAQs use `<details>`

The accordions are native `<details>/<summary>` elements: no state, no client component,
no JS, and they are open-by-default for search engines and for `Ctrl+F`. An accordion is
one of the few UI patterns the platform already solves properly.


---

## Decision log

Format: **Decision** — reason — date

| Decision | Reason | Date |
|---|---|---|
| Keep 9 services; no Graphic Design service | It's a team skill, shown under UI/UX Design | 2026-09-19 |
| Delete the `features` array | Duplicated `services` with drifted copy — guaranteed inconsistency | 2026-09-19 |
| Remove `pricingOptions` | SaaS boilerplate ("$19 / 10Gb Storage") — wrong business model for an agency | 2026-09-19 |
| Brand gradient = `#ff3131 → #ff914c` | Taken from the logo; old `orange-500 → red-700` was off-brand and muddy | 2026-09-19 |
| Semantic CSS-variable tokens, not raw Tailwind colors | Makes theming a data change, not a component rewrite | 2026-09-19 |
| Light + dark mode built from day one | ~1h now vs. days later; components are being written fresh regardless | 2026-09-19 |
| Sora (display) + Inter (body); drop Lora & Hanken Grotesk | Serif signalled "editorial/law firm"; Hanken was declared but never loaded. 3 families → 2 | 2026-09-19 |
| Remove hero video | Unoptimized MP4, no poster, no reduced-motion path; speed is the premium signal | 2026-09-19 |
| `/work` for case studies; 301 from `/projects` | Clearer intent + better SEO; redirect preserves inbound links | 2026-09-19 |
| Case study content is data-driven from the start | Real copy arrives later; schema + renderer can be built now | 2026-09-19 |
| Icons stored as string names, not JSX, in data | Keeps data serializable and portable to a CMS later | 2026-09-19 |
| No GSAP / Three.js / Lenis | Performance budget; Framer Motion + CSS is sufficient | 2026-09-19 |
| `constants/` → `data/`, split by domain | One 485-line file mixing content + JSX was unmaintainable | 2026-09-19 |
| Visual direction: technical/precise (Linear, Vercel) + warm gradient accents (Stripe), at Resend's scale | Client-approved; matches a 9-service engineering firm better than an expressive/creative style | 2026-09-19 |
| Icons stored as string names + explicit `iconMap` in `components/ui/Icon.jsx` | Keeps data serializable; explicit map avoids a 160 kB bundle regression | 2026-09-19 |
| Team cards show LinkedIn only | Old data pointed the Twitter and GitHub icons at LinkedIn URLs — misleading to visitors | 2026-09-19 |
| Services grouped into 4 pillars (build / design / intelligence / infrastructure) | Makes 9 services read as integrated capability instead of a scattered list | 2026-09-19 |
| Service pages carry outcomes + capabilities + stack + FAQs, not a feature list | A buyer decides on "what changes for us" and "can they actually do it"; also feeds long-tail SEO | 2026-09-19 |
| Service copy drafted in-house, flagged "pending client review" | Unblocks the build now; the marker prevents draft copy silently becoming final | 2026-09-19 |
| FAQs use native `<details>`, not a JS accordion | Zero JS, keyboard + `Ctrl+F` + crawler friendly by default | 2026-09-19 |
| `@/` path alias | Replaces `../../../` imports; standard Next.js convention | 2026-09-19 |
| `Reveal` is pure CSS; no Framer Motion, no scroll trigger | Scroll-triggered reveals shipped content at `opacity:0`, so a section could stay blank if JS failed. Decoration must never gate content. Also cut 41 kB | 2026-09-19 |
| Client components import modules directly, never barrels | A barrel re-export drags every sibling module into the client bundle — measured at 14 kB on every page | 2026-09-19 |
| Contact form options passed as props from the server | Keeps `data/services.js` (~28 kB) out of the browser; the client only needs the labels | 2026-09-19 |
| Contact form asks for service, budget and timeline (all optional) | "Hi, need a website" costs a round-trip before anyone knows if the project is real | 2026-09-19 |
| Inline `role="status"` instead of toast notifications | Announced to screen readers, cannot be missed, and removes a dependency | 2026-09-19 |
| "ISO-certified" claim pulled from the About page pending proof | A verifiable legal claim. Isolated in `data/site.js` behind `credentials.verified`, so it is neither silently deleted nor silently republished | 2026-09-19 |

---

## Bug: sections rendering blank (`Reveal`)

Reported on `/services/cybersecurity` — "What this includes" showed a heading
above a tall empty gap. Other services looked fine, which made it look like a
data problem. It was not: the data was complete and the text was present in
view-source the whole time.

The served HTML was:

```html
<div style="opacity:0;transform:translateY(16px)">
  <h3>Vulnerability assessment</h3>
```

`Reveal` used Framer Motion `whileInView` with `initial={{ opacity: 0 }}`, so
**content shipped invisible and required JavaScript to be revealed**. Cards that
happened to be in the viewport at load revealed immediately (Web Development);
cards further down did not when the observer never fired. It affected 8 pages.

Two attempts:

1. Keep scroll-triggering, but default to visible and hide only after mount.
   Safer, but content still depended on JS to be revealed and the hydration gap
   was visible as a delay on load. Rejected.
2. **Remove the JS dependency entirely.** `Reveal` is now a CSS keyframe
   (`animation-fill-mode: backwards`). No `'use client'`, no observer, no timers.
   If the animation never runs, content is visible anyway.

Trade-off accepted: animations run on load, not on scroll, so content low on the
page finishes animating before it is reached. A 500ms fade is not worth a bug
class that hides real content from clients and crawlers.

**Rule: never render content hidden-by-default.** First Load JS 142 kB → 101 kB.

---

## Phase 5 checklist — About + Contact

- [x] `/about` rebuilt on tokens — stats derived from the data files, mission and
      vision shown once (the old page printed the mission paragraph twice)
- [x] `components/sections/Team.jsx` — `next/image`, clearing the last build warning
- [x] `/contact` rebuilt — form plus direct contact details side by side
- [x] Qualified enquiry form — service, budget and timeline, all optional
- [x] Inline `role="status"` feedback replaces `react-hot-toast`
- [x] `/api/send` hardened — honeypot, validation, length caps, per-IP rate limit,
      header-injection stripping, and the Resend `error` field actually checked
- [x] Legacy `components/{About,Contact}` deleted
- [x] `framer-motion` and `react-hot-toast` removed from dependencies
- [x] Abuse protections verified against a running server, not assumed:
      empty body 400 · bad email 400 · honeypot 200 (silent) · 4th request 429 ·
      6 000-char message 400

### The barrel-import trap (cost 14 kB, found by measuring)

Phase 5 first built at **115 kB**, up from 101 kB, on *every* page. Three separate
causes, each found by measuring rather than guessing — the first two hypotheses
were wrong:

1. `Navbar` (a client component in the root layout) imported `Button` from the
   `@/components/ui` barrel. A barrel re-exports everything, so `Icon` and its
   whole lucide list joined the client bundle on every page.
2. The same file imported from the `@/data` barrel, dragging every data file in.
3. **The real cost:** `ContactForm` imported `services` to populate a `<select>`.
   That pulled all of `data/services.js` — descriptions, capabilities, FAQs,
   stacks, ~28 kB — into a client chunk webpack then shared across all pages.

Fix: client components import **directly**, never via a barrel; and the contact
page derives the option labels on the server and passes plain string arrays down
as props. Verified with a grep for `OWASP` across `.next/static/chunks` — no
service data reaches the browser.

**Rule: in a client component, import the module, not the barrel.** Server
components may use barrels freely.

Result: 115 kB → **106 kB**, with `/about` and `/contact` now fully rebuilt.

---

## Known issues inherited from the old site

- [x] ~~Fabricated testimonials~~ — deleted in Phase 2; only `data/testimonials.js` is used
- [x] ~~`Navbar` duplicating its own `navLinks`~~ — now renders `navItems`
- [x] ~~Expiring `lh3.googleusercontent.com/aida-...` image URLs~~ — components deleted
- [x] ~~Footer links pointing to `#`~~ — rebuilt with real links
- [x] ~~Dead weight: `firebase.json`, `@emailjs/browser`, slick, material-tailwind~~ — removed
- [x] ~~Raw `<img>` in `components/About/Team.jsx`~~ — `next/image` in Phase 5
- [x] ~~`/api/send` has no spam / rate-limit protection~~ — hardened in Phase 5
- [x] ~~Not yet migrated to tokens: `components/{About,Contact}`~~ — rebuilt in Phase 5
- [x] ~~`framer-motion` only used by the legacy ContactForm~~ — dependency removed
- [ ] Per-page SEO metadata still missing on a few routes (Phase 6)
- [ ] `public/sitemap.xml` is hand-maintained and now stale — replace with `app/sitemap.js` (Phase 6)
- [ ] `VITE_*` keys still in `.env` — legacy from the Vite build (Phase 6)
- [ ] `app/loading.jsx` still hardcodes `#f97316` (old orange) and uses `styled-jsx`
      rather than tokens (Phase 6)
- [ ] `/work/[slug]` and `/services/[service]` correctly 404 on unknown slugs, but
      render the **stock Next.js 404 body**. Needs a branded `app/not-found.jsx`
      with routes back into the site (Phase 6)
- [ ] `sharp` not installed — `next start` warns that production image
      optimisation will be slower. Vercel provides it, so this only affects local
      production runs; install if self-hosting (Phase 6)
- [ ] **Rate limiting is per-instance, not global.** Serverless instances do not
      share memory, so a distributed attacker exceeds the limit. Fine for casual
      abuse; move to Upstash/Vercel KV if this endpoint is ever targeted

---

## ⚠️ Awaiting client confirmation

These are flagged in code with `TODO(client)` and must be resolved before launch:

| Item | Where | Why it matters |
|---|---|---|
| **ISO certification** | `data/site.js` → `credentials` | The old site claimed "ISO-certified". Verifiable legal claim — needs the standard and certificate number, or it stays hidden |
| **Budget bands** | `data/site.js` → `enquiryBudgets` | Placeholder figures. Too high scares off good small projects; too low wastes your time |
| **Service copy** | `data/services.js` | In-house draft, especially the `outcomes` arrays |
| **Case study narratives** | `data/caseStudies.js` | Written from brief only for Udaratva, Mohak, Guruphoria, MindPick |
| **Guruphoria scope** | `data/caseStudies.js` | Is the social media work ongoing? A retainer is a much stronger story |
| **Sending domain** | `app/api/send/route.js` | Still `onboarding@resend.dev`. A verified domain improves deliverability and looks professional |
