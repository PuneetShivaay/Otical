
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
          {/* Column 1: Brand & CTA */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img alt="Otical Logo" className="w-10 h-10 object-contain" src="https://lh3.googleusercontent.com/aida/AP1WRLtF79h-JvZ0n9LCXQNFwXfuuDn9C2lzdv5bv-OWymg8k2gaAXb1lH5m7xeURgfW5FZvEie7oSnhQwjRNSdaCXQeCkcBjb4fy_AoW86uk9tXcVKCKkw1g2J0xkMoxC-0hNBRoUyJmCe-Ay5_7p7s-YavpaRwWb29nSKRjlwTRK2TRErML2FEBqYxHxnwrK_pGgTr0d8JqASXxp_EbBCxOX0hx_4xkKDn7rYVfEKUf7Lmf22kCpKO3F98og"/>
              <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight">Otical</span>
            </div>
            <p className="text-text-muted mb-8 max-w-md">Transforming complex challenges into seamless digital experiences through cutting-edge AI integration and robust software architecture.</p>
            <button className="primary-gradient text-on-primary-fixed font-button text-button px-6 py-3 rounded-lg hover:opacity-90 transition-all active:scale-95 border border-primary/30 shadow-sm">
              Start a Project
            </button>
          </div>
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-button text-lg text-primary mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="#">Home</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="#">About Us</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="#">Services</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="#">Case Studies</Link></li>
            </ul>
          </div>
          {/* Column 3: Connect */}
          <div>
            <h4 className="font-button text-lg text-primary mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="#">Contact Us</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="#">LinkedIn</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="#">Twitter</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors" href="#">GitHub</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-20 pt-8 flex justify-between items-center font-label-mono text-sm text-text-muted">
          <p>&copy; {new Date().getFullYear()} Otical. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
