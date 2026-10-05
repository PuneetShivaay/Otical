# Otical — Next.js Marketing Site

Production site: https://otical.vercel.app/

Old Version : https://otical.web.app/

 Otical TextUtils App : https://oticaltextutils.web.app/

This repository contains the current Otical website built with **Next.js 14 App Router** (JSX, no TypeScript), Tailwind CSS and Framer Motion.

> Firebase hosting links are legacy from the old Vite version and are not part of this deployment flow.

## Tech stack

- Next.js 14 (App Router)
- React (JSX)
- Tailwind CSS
- Framer Motion
- Resend (contact form email delivery)

## Project structure (high-level)

- `app/` — route shells and route handlers
- `components/ui/` — reusable UI primitives
- `components/sections/` — page sections composed from data
- `data/` — single source of site content
- `public/` — static media
- `docs/` — architecture/content/progress documentation

## Contact form + email flow

- `components/sections/ContactForm.jsx` posts to `POST /api/send`
- `app/api/send/route.js` validates input + honeypot + rate limit, then sends email via Resend
- Error responses use real HTTP status codes
- Email payload is sent as sanitized `html` (not `react` JSX) for production runtime stability

Required environment variables:

- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_TO_EMAIL`

Use `.env.local` for local development. Do not commit secrets.

## Content model

Most content is data-driven from `data/`:

- Services: `data/services.js`
- Case studies: `data/caseStudies.js`
- Testimonials: `data/testimonials.js`
- Team: `data/team.js`
- Site/nav/contact info: `data/site.js`

Adding a service or case study is generally adding one object in data (routes resolve by slug).

## Media conventions

- Work screenshots: `public/images/work/<slug>/`
- Animated work covers (GIF): `public/gif/clients/`
- Client logos: `public/images/clients/`

## Local development

- `npm run dev` — start dev server
- `npm run lint` — run ESLint
- `npm run build` — production build check
- `npm run start` — run built app

## Deployment

Primary deployment target is **Vercel**.
