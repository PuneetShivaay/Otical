/**
 * Resolves an icon NAME (string) from the data layer into a lucide-react icon.
 *
 * Why not store JSX in the data files?
 *   - Data stays plain, serializable `.js` — it can cross the Server/Client
 *     boundary, or be swapped for a CMS/JSON API later, with no changes.
 *   - Presentation concerns (size, colour) stay in components, where they belong.
 *
 * ⚠️ WHY AN EXPLICIT MAP, NOT `import * as LucideIcons`:
 * A wildcard import defeats tree-shaking and pulls the entire icon library into
 * the bundle. Measured on this project: home page First Load JS went
 * 147 kB -> 308 kB. Listing icons explicitly keeps only what we use.
 *
 * Adding an icon: import it below and add it to the map. The key must match the
 * `icon` string used in data/.
 */
import {
  Globe,
  Smartphone,
  PenTool,
  BrainCircuit,
  Blocks,
  Cpu,
  Cloud,
  ShieldCheck,
  Compass,
  Mail,
  Phone,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Link2,
  ArrowRight,
  ArrowLeft,
  Check,
  Users,
  MessageSquare,
  KeyRound,
  LifeBuoy,
  TriangleAlert,
} from 'lucide-react';

const iconMap = {
  Globe,
  Smartphone,
  PenTool,
  BrainCircuit,
  Blocks,
  Cpu,
  Cloud,
  ShieldCheck,
  Compass,
  Mail,
  Phone,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Facebook,
  Twitter,
  Link2,
  ArrowRight,
  ArrowLeft,
  Check,
  Users,
  MessageSquare,
  KeyRound,
  LifeBuoy,
  TriangleAlert,
};

/** Usage: <Icon name={service.icon} className="h-5 w-5" /> */
export default function Icon({ name, ...props }) {
  const LucideIcon = iconMap[name];

  if (!LucideIcon) {
    // Loud in development, silent in production — a missing icon should never
    // blank out a page.
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[Icon] Unknown icon "${name}". Add it to components/ui/Icon.jsx.`);
    }
    return null;
  }

  return <LucideIcon aria-hidden="true" {...props} />;
}
