# 01 — Design System

> Single source of truth for visual language. If a value is not here, it does not belong in a component.

## Visual direction

**Technical and precise, with warm brand accents.**

| Reference | What we take |
|-----------|--------------|
| [linear.app](https://linear.app) | Overall finish — compact type, dark canvas, minimal motion, high precision |
| [vercel.com](https://vercel.com) | Semantic theming + a true light/dark toggle with no layout shift |
| [stripe.com](https://stripe.com) | Gradient as brand signature; typographic rhythm and whitespace |
| [resend.com](https://resend.com) | Scope and page count — a small site that feels expensive |

**Explicitly not** the WebGL/scroll-hijack school (lusion.co, active-theory.com) — it breaks the
performance budget.

Practical consequences:
- Type is **compact and tight**, not oversized — `tracking-tight`, restrained heading sizes
- Structure is **grid-led and disciplined**; whitespace does the work
- Colour is mostly **neutral**; the `#ff3131 → #ff914c` gradient is an *accent*, used sparingly
  on CTAs, active states and key headline fragments — never as large background fills
- Motion is **brief and subtle** — short fades/rises, no parallax

## Golden rule

**Components never use raw colors.** No `bg-neutral-900`, no `text-orange-500`, no `#ff3131`.
Only **semantic tokens** — `bg-surface`, `text-muted`, `border-subtle`, `from-brand`.

This is what makes light/dark mode a data change instead of a rewrite.

---

## Brand colors (from the logo)

| Role | Hex | Notes |
|------|-----|-------|
| Primary (`brand`) | `#ff3131` | Logo red-orange |
| Secondary (`accent`) | `#ff914c` | Logo warm orange |

**Signature gradient:** `#ff3131 → #ff914c` (`from-brand to-accent`).

> Legacy note: the old site used `orange-500 → red-700`, which was **off-brand** (muddy/brown).
> And `globals.css` used a third, different gradient. Both are replaced by the single token above.

### Scales
`brand-50…950` (500 = `#ff3131`) and `accent-50…950` (400 = `#ff914c`) are generated in
`tailwind.config.cjs`. Prefer the semantic aliases over numeric steps.

---

## Semantic tokens

Defined as **space-separated RGB channels** in `app/globals.css` so Tailwind can apply opacity
(`bg-surface/50`). Swapped by the `data-theme` attribute on `<html>`.

| Token | Purpose |
|-------|---------|
| `bg` | Page background |
| `surface` | Cards, panels |
| `surface-2` | Raised / hover surface |
| `border-subtle` | Hairline dividers |
| `border-strong` | Emphasised borders |
| `fg` | Primary text |
| `fg-muted` | Secondary text |
| `fg-subtle` | Tertiary / captions |
| `brand` / `accent` | Brand gradient + interactive accents |

Usage: `bg-bg`, `bg-surface`, `text-fg`, `text-fg-muted`, `border-border-subtle`,
`bg-gradient-to-r from-brand to-accent`.

---

## Theming

- `<html data-theme="dark">` is the default.
- A blocking inline script in `app/layout.jsx` reads `localStorage.theme` (falling back to
  `prefers-color-scheme`) **before paint** to prevent a flash of the wrong theme.
- Toggling = set `document.documentElement.dataset.theme`. No component changes, ever.

---

## Typography

| Role | Font | Loaded as |
|------|------|-----------|
| Display / headings | **Sora** | `next/font/google` → `--font-display` |
| Body / UI | **Inter** | `next/font/google` → `--font-sans` |

Removed: **Lora** (editorial serif — wrong signal for a tech firm) and
**Hanken Grotesk** (was declared in Tailwind but never actually loaded).
All fonts go through `next/font` — **never** a CSS `@import`, which blocks rendering.

### Scale
Headings use `font-display` + `tracking-tight`. Body uses `font-sans` + `leading-relaxed`.
Section H2: `text-3xl sm:text-4xl lg:text-5xl`. Page H1: `text-4xl sm:text-5xl lg:text-6xl`.

---

## Primitives (`components/ui/`)

Live preview: **`/styleguide`** — every primitive in both themes on one screen.
Not linked in navigation and `noindex`ed.

| Component | Purpose | Key props |
|-----------|---------|-----------|
| `Container` | Page gutter + max width | `size`: `prose` \| `narrow` \| `default` |
| `Section` | Vertical rhythm + background tone | `spacing`, `tone`, `container` |
| `SectionHeading` | Eyebrow + title + description | `eyebrow`, `title`, `description`, `align`, `as` |
| `Eyebrow` | Small uppercase section label | — |
| `Button` | Action or link | `variant`: `primary` \| `secondary` \| `ghost`, `size`, `href` |
| `Card` | Surface panel, optionally clickable | `href`, `interactive` |
| `Badge` | Inline tag | `tone`: `default` \| `brand` |
| `Icon` | Resolves a string icon name | `name` |
| `Reveal` | The only entrance animation | `delay`, `y`, `as` |

Notes:
- `Button` renders `<a>` when `href` is present, `<button>` otherwise — correct semantics
  for navigation vs. actions, from one component.
- `Card` hover is border + background only. The old site used `hover:-translate-y-2` with
  large coloured shadows on every card: busy, and expensive to paint.
- `Reveal` is the **only** `'use client'` motion component. Keeping it a leaf means parent
  sections stay Server Components and ship no JavaScript.

## Tailwind gotcha

Tailwind scans source files as **plain text**, so constructed class names are never
generated:

```jsx
<div className={`bg-${token}`} />        // ✗ silently unstyled
<div className={bgClass} />              // ✓ full class string stored in data
```

## Layout rhythm

- Page container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` — via the `Container` primitive
- Section padding: `py-20 lg:py-28` — via the `Section` primitive
- Radii: `rounded-lg` (controls), `rounded-2xl` (cards)

---

## Motion rules (performance first)

1. Animate **only** `transform` and `opacity`. Never `width`, `height`, `top`, `box-shadow`.
2. Entrance animations run **once** (`viewport={{ once: true }}`) — no re-trigger on scroll-back.
3. Durations 0.3–0.6s, subtle easing. No parallax, no scroll-hijacking, no 3D.
4. **Always** honour `prefers-reduced-motion` — handled centrally by the `Reveal` primitive.
5. No GSAP / Three.js / Lenis. Framer Motion + CSS only.

> Motion should make the site feel *considered*, never *busy*. Speed is the premium signal.
