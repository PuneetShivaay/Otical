/** @type {import('tailwindcss').Config} */

// Helper: wires a Tailwind color name to a CSS variable holding RGB channels,
// while preserving opacity modifiers (e.g. `bg-surface/50`).
const token = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

module.exports = {
  // `data-theme` on <html> switches the token values. `darkMode` is declared so
  // any `dark:` utilities in un-migrated legacy components still behave.
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ---- Semantic tokens: USE THESE ---- */
        bg: token('bg'),
        surface: token('surface'),
        'surface-2': token('surface-2'),
        'border-subtle': token('border-subtle'),
        'border-strong': token('border-strong'),
        fg: token('fg'),
        'fg-muted': token('fg-muted'),
        'fg-subtle': token('fg-subtle'),
        brand: token('brand'),
        accent: token('accent'),

        /* ---- Raw brand scales ----
           Only for one-off tints. Prefer `brand` / `accent` above, which are
           theme-aware. brand-500 = #ff3131, accent-400 = #ff914c            */
        'brand-scale': {
          50: '#fff1f1',
          100: '#ffdfdf',
          200: '#ffc5c5',
          300: '#ff9d9d',
          400: '#ff6464',
          500: '#ff3131',
          600: '#ed1515',
          700: '#c80d0d',
          800: '#a50f0f',
          900: '#881414',
          950: '#4b0404',
        },
        'accent-scale': {
          50: '#fff6ed',
          100: '#ffead4',
          200: '#ffd1a8',
          300: '#ffb071',
          400: '#ff914c',
          500: '#fd6c13',
          600: '#ee5109',
          700: '#c53c09',
          800: '#9c3010',
          900: '#7e2a10',
          950: '#441206',
        },

        /* ---- LEGACY ----
           Kept so un-migrated components keep rendering during the phased
           redesign. Do NOT use in new code. Removed at the end of Phase 5. */
        'neutral': {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        'orange': {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            950: '#7c2d12',
        },
        'glass-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        // Both are injected by next/font in app/layout.jsx
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem',
        'lg': '0.5rem',
        'md': '0.375rem',
      },
      keyframes: {
        // Used by the client logo marquee (transform-only = GPU friendly)
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        // Used by components/ui/Reveal.jsx. `backwards` fill applies the
        // `from` state during animation-delay so staggered siblings do not
        // flash before their turn. Content ends visible no matter what.
        reveal: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        reveal: 'reveal 500ms cubic-bezier(0.22, 1, 0.36, 1) backwards',
      },
    },
  },
  plugins: [],
};
