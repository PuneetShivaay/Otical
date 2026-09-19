'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { THEME_STORAGE_KEY } from './ThemeScript';

/**
 * Light / dark switch.
 *
 * The initial theme is applied by ThemeScript before paint. This component only
 * reads what is already on <html> and flips it — it never decides the theme on
 * first render, which is what avoids a flash.
 *
 * `mounted` guards against a hydration mismatch: the server cannot know the
 * user's stored preference, so we render a neutral placeholder of identical
 * size until the client takes over. Same size = no layout shift.
 */
export default function ThemeToggle({ className }) {
  const [theme, setTheme] = useState('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') || 'dark');
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* private mode — the choice simply won't persist */
    }
    setTheme(next);
  };

  if (!mounted) {
    return <div className={`h-9 w-9 ${className ?? ''}`} aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border-subtle text-fg-muted transition-colors hover:border-border-strong hover:text-fg ${className ?? ''}`}
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
