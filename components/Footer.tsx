import Link from 'next/link';
import { Instagram, Mail, Phone, MapPin, Linkedin, Facebook, ShieldCheck, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/seo';
import { LOCALES } from '@/lib/i18n';
import { whatsappUrl, WHATSAPP_MESSAGES } from '@/lib/contact';
import WhatsAppIcon from './WhatsAppIcon';

type FooterLink = { label: string; href: string; accent?: boolean };

const GROUPS: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Photoshoots',
    links: [
      { label: 'Sunrise Photoshoot', href: '/services/sunrise' },
      { label: 'Couple Photography', href: '/services/couple' },
      { label: 'Pre-Wedding Shoot', href: '/services/pre-wedding' },
      { label: 'Romantic Couple Shoot', href: '/services/romantic-couple-shoot' },
      { label: 'Solo Portrait Photoshoot', href: '/services/solo-photoshoot' },
      { label: 'All plans & prices', href: '/plans', accent: true },
    ],
  },
  {
    title: 'Tours',
    links: [
      { label: 'Guide + Photo · Small Group', href: '/services/guided-photo-tour-small' },
      { label: 'Guide + Photo · Large Group', href: '/services/guided-photo-tour-large' },
      { label: 'Transport + Guide', href: '/services/transport-guide' },
      { label: 'Sunrise Luxury Tour (Innova)', href: '/services/sunrise-luxury-innova' },
      { label: 'Sunrise Luxury Urbania Tour', href: '/services/sunrise-luxury-urbania' },
      { label: 'All services', href: '/services', accent: true },
    ],
  },
  {
    title: 'Plan your visit',
    links: [
      { label: 'Guides', href: '/blog' },
      { label: 'Permit Guide', href: '/permit-guide' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Portfolio', href: '/portfolio' },
      { label: 'Payment Methods', href: '/payment' },
      { label: 'About', href: '/about' },
    ],
  },
];

const SOCIALS = [
  { label: 'Follow on Instagram', href: 'https://www.instagram.com/taj.mahal.photography', Icon: Instagram },
  { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/taj-mahal-photography-3a9ab0296/', Icon: Linkedin },
  { label: 'Follow on Facebook', href: 'https://www.facebook.com/share/19m7nwKSSQ/?mibextid=wwXIfr', Icon: Facebook },
];

/**
 * The footer is the last thing a visitor reads before deciding, so it leads
 * with the one action that matters and then becomes a map of the site:
 * three short link groups (two-up on a phone, so the page does not end in a
 * forty-row list), how to reach the studio, and the languages.
 *
 * `cta` adds the booking band, for pages that do not already end in a
 * booking form or their own closing call to action.
 */
export default function Footer({ cta = false }: { cta?: boolean } = {}) {
  return (
    <footer className="bg-ink-900 text-white pb-action-bar lg:pb-0">
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      {cta && (
        <div className="border-b border-white/10">
          <div className="shell flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
            <div className="max-w-xl">
              <p className="eyebrow text-gold-400">Two shoots a day</p>
              <h2 className="h3-fluid mt-3 font-serif font-light text-white text-balance">
                Tell us your date. We reply on WhatsApp within minutes.
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
              <Link href="/book" className="btn btn-gold btn-lg group">
                Book your session
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappUrl(WHATSAPP_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-light btn-lg"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="shell py-12 md:py-16">
        <div className="grid gap-x-8 gap-y-12 lg:grid-cols-[1.1fr_2.7fr_1.3fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex flex-col items-start">
              <span className="font-serif text-2xl font-bold uppercase tracking-tight text-white">
                Taj Mahal
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-400">Photography</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-marble-300/80">
              Official Government Licensed Taj Mahal Photographer in Agra. Authorized for
              Photography Inside Taj Mahal. Trusted by International Visitors.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-marble-300">
              <ShieldCheck className="h-3.5 w-3.5 text-gold-400" />
              Ministry of Tourism licensed
            </p>
            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-marble-300 transition-colors hover:border-gold-400/60 hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups — two-up on a phone, three across from tablet. */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
            {GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="eyebrow text-gold-400">{group.title}</h3>
                <ul className="mt-2 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block py-2.5 leading-snug transition-colors hover:text-white ${
                          link.accent ? 'text-gold-400' : 'text-marble-300/80'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Contact */}
          <div>
            <h3 className="eyebrow text-gold-400">Contact</h3>
            <ul className="mt-4 space-y-4 text-sm text-marble-300/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold-400" />
                <span>
                  {SITE.address.street},
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}, India
                  <span className="mt-2 block text-xs text-ink-400">
                    Guests meet us at {SITE.meetingPoint}
                  </span>
                  <a
                    href={SITE.googleBusiness}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="mt-1 inline-flex min-h-[36px] items-center gap-1 text-gold-400 transition-colors hover:text-white"
                  >
                    Find us on Google Maps →
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-gold-400" />
                <a
                  href={`tel:${SITE.phone}`}
                  className="inline-flex min-h-[40px] items-center transition-colors hover:text-white"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-gold-400" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="inline-flex min-h-[40px] items-center break-all transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Languages — a visitor who searched in their own language can stay in it */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 md:flex-row md:items-center md:gap-6">
          <p className="shrink-0 text-xs text-ink-400">Also available in</p>
          <div className="-mx-2 flex flex-wrap items-center gap-x-1 gap-y-0 text-xs">
            {LOCALES.map((locale) => (
              <Link
                key={locale.code}
                href={`/${locale.code}`}
                hrefLang={locale.hreflang}
                lang={locale.hreflang}
                className="inline-flex min-h-[40px] items-center px-2 text-marble-300/80 transition-colors hover:text-white"
              >
                {locale.endonym}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-ink-400 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Taj Mahal Photography. All rights reserved.</p>
          <div className="-mx-2 flex">
            <Link href="/privacy" className="inline-flex min-h-[40px] items-center px-2 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="inline-flex min-h-[40px] items-center px-2 transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
