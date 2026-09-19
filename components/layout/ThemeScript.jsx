/**
 * Runs before React hydrates, and before first paint, to set the theme on
 * <html>. Without this the browser paints the default theme first and then
 * snaps to the stored one — the classic "theme flash".
 *
 * It must be a blocking inline script, which is why it is a raw string
 * injected via dangerouslySetInnerHTML rather than a normal component.
 */
export const THEME_STORAGE_KEY = 'otical-theme';

const script = `
(function () {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = stored || (prefersLight ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    /* localStorage can throw in private mode — fall back to the dark default */
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
