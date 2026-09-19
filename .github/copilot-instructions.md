# Otical — AI agent guide

Marketing site for "Otical" built with **Next.js 14 App Router (JSX only, no TypeScript)**, Tailwind CSS, Framer Motion. Deployed to Vercel (`otical.vercel.app`); `firebase.json` is a leftover from the old Vite build — ignore it (its `public: "dist"` does not match this project).

## Architecture
- `app/` holds only thin route shells. Every page composes presentational components from `components/<Domain>/<Name>.jsx`. Example: `app/page.jsx` renders `HeroSection → FeatureSection → Services → Workflow → Projects → Testimonials → Contact`; `app/about/page.jsx` just wraps `components/About/About.jsx`.
- `constants/index.jsx` is the **single source of content** (services, navItems, testimonials, team, features, workflow steps). It exports arrays of objects containing JSX (`icon: <BotMessageSquare />` from `lucide-react`) — hence `.jsx`, not `.js`. Add/edit copy here, not in components.
- Dynamic route `app/services/[service]/page.jsx` resolves content by matching `service.href === '/services/' + params.service` against `services` in constants, and calls `notFound()` on miss. **Adding a service = adding one entry with a unique `href` in constants; no new file needed.**
- `app/layout.jsx` is the only place fonts (`Inter`, `Lora` via `next/font/google` → CSS vars `--font-inter`, `--font-lora`), global CSS, slick-carousel CSS, `Navbar` and `Footer` are wired.

## Conventions
- Server Components by default; add `'use client'` only for interactivity (see `Navbar.jsx`, `ContactForm.jsx`, `Services.jsx`, `app/loading.jsx`). Framer Motion usage forces client components.
- Dark theme with orange→red gradient accents. Reuse the existing heading idiom rather than inventing styles:
  `className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text"` with `style={{ fontFamily: "'Lora', serif" }}`.
- Styling is Tailwind utility classes inline; custom `neutral`/`orange` scales and `glass-border` live in `tailwind.config.cjs`. PostCSS config is `.cjs` because `package.json` sets `"type": "module"` — keep new config files `.cjs`.
- Components are default-exported function components; no state management library, no tests, no `src/` directory.

## Contact / email flow
`ContactForm.jsx` validates locally (`validateForm` builds an `errors` map), then `POST`s `{ email, subject, message }` to `/api/send`, surfacing results via `react-hot-toast`. `app/api/send/route.js` is a Route Handler using **Resend** (`process.env.RESEND_API_KEY`, from `onboarding@resend.dev` → `oticalmail@gmail.com`) and returns `NextResponse.json(...)` — note it returns HTTP 200 even on failure with an `{ error }` body, so the client checks the payload. It embeds JSX in `react:` despite the `.js` extension; keep that pattern if editing.
`@emailjs/browser` and the `VITE_*` keys in `.env` are legacy from the Vite version — prefer the Resend route.

## Workflows
- `npm run dev` (Next dev server), `npm run build`, `npm run start`, `npm run lint` (eslint-config-next).
- SEO assets are hand-maintained: update `public/sitemap.xml` when adding a route; `public/robots.txt` alongside it.
- Static assets go under `public/images/{clients,team,testimonials}` and `public/videos`, referenced by path strings in `constants/index.jsx`.

Anything unclear or missing (e.g. deployment steps, Firebase status, SEO metadata conventions)? Tell me and I'll refine.
