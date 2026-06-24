import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';

const services = [
  { label: 'Sunrise Photoshoot', href: '/services/sunrise' },
  { label: 'Couple Photography', href: '/services/couple' },
  { label: 'Pre-Wedding Shoot', href: '/services/pre-wedding' },
  { label: 'Family Photography', href: '/services/family' },
  { label: 'Proposal Shoot', href: '/services/proposal' },
  { label: 'Guide + Photo · Small Group ($50)', href: '/services/guided-photo-tour-small' },
  { label: 'Guide + Photo · Large Group ($80)', href: '/services/guided-photo-tour-large' },
  { label: 'Sunrise Luxury Tour (Innova)', href: '/services/sunrise-luxury-innova' },
  { label: 'Sunrise Luxury Urbania Tour', href: '/services/sunrise-luxury-urbania' },
];

const info = [
  { label: 'Permit Guide', href: '/permit-guide' },
  { label: 'FAQ', href: '/faq' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Payment Methods', href: '/payment' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-night border-t border-line">
      {/* Oversized wordmark band */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 pt-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-16 border-b border-line">
          <div>
            <span className="kicker">Agra · India</span>
            <h2 className="display-tight text-ivory text-4xl sm:text-5xl lg:text-6xl font-medium mt-4 max-w-xl">
              Let&apos;s photograph your{' '}
              <span className="italic font-light text-accent">Taj Mahal story</span>
            </h2>
          </div>
          <Link
            href="/book"
            className="group inline-flex items-center gap-2 bg-accent text-night px-7 py-4 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-accent-bright transition-colors shrink-0"
          >
            Book a session
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          <div>
            <Link href="/" className="flex items-baseline gap-2 mb-5">
              <span className="font-display text-2xl font-medium text-ivory">Taj&nbsp;Mahal</span>
              <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-accent">Photography</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6 max-w-xs">
              Official government-licensed Taj Mahal photographer in Agra,
              authorized for photography inside the monument. Trusted by
              international visitors.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/taj.mahal.photography" target="_blank" rel="me noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="Follow on Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/taj-mahal-photography-3a9ab0296/" target="_blank" rel="me noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="Connect on LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/share/19m7nwKSSQ/?mibextid=wwXIfr" target="_blank" rel="me noopener noreferrer" className="text-muted hover:text-accent transition-colors" aria-label="Follow on Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-muted hover:text-ivory transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-6">Information</h3>
            <ul className="space-y-3 text-sm">
              {info.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-muted hover:text-ivory transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start text-muted">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 flex-shrink-0 text-accent" />
                <span>Taj Mahal East Gate Road,<br />Agra, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center text-muted">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0 text-accent" />
                <a href="tel:+918393010125" className="hover:text-ivory transition-colors">+91 83930 10125</a>
              </li>
              <li className="flex items-center text-muted">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0 text-accent" />
                <a href="mailto:booking@tajmahalphotography.com" className="hover:text-ivory transition-colors break-all">booking@tajmahalphotography.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sister brand */}
        <div className="border-t border-line pt-8 pb-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
            <span>Part of Taj Guides &amp; Travel Services</span>
            <span className="text-line-strong hidden sm:inline">/</span>
            <a href="https://tajmahaltouristguide.com" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-ivory transition-colors">TajMahalTouristGuide.com</a>
            <a href="https://guideindiatours.com" target="_blank" rel="noopener noreferrer" className="hover:text-ivory transition-colors">Guide India Tours</a>
            <a href="https://www.asiabylocals.com/" target="_blank" rel="noopener noreferrer" className="hover:text-ivory transition-colors">Asia By Locals</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-line py-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-[0.14em] text-faint">
          <p>&copy; {new Date().getFullYear()} Taj Mahal Photography</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-ivory transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-ivory transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
