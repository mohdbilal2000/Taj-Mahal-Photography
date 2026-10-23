'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import ScarcityBanner from './ScarcityBanner';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappUrl, WHATSAPP_MESSAGES } from '@/lib/contact';

/**
 * Nineteen guides and a portfolio were unreachable from the bar: it listed
 * four links and neither Guides nor About was one of them. `wide` holds back
 * the two least-urgent until there is room, so the row never crowds the
 * booking button at tablet width.
 */
const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Guides', href: '/blog' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Permit Guide', href: '/permit-guide', wide: true },
  { label: 'About', href: '/about', wide: true },
];

/**
 * `onLight` is for pages whose banner is paper rather than a dark
 * photograph — the home page since the collage hero. Without it the bar
 * renders white type on cream and disappears.
 */
export default function Header({ onLight = false }: { onLight?: boolean } = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dark = isScrolled || onLight;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // A menu left open across a navigation covers the page you just asked for.
  useEffect(() => setIsMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  /**
   * Clicking the wordmark means "take me back to the start". Next does not
   * re-navigate when the path is already current, so on the home page the
   * click would do nothing and leave you wherever you had scrolled to —
   * and with a #hash in the bar it could leave you mid-page anywhere.
   */
  const goHome = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      setIsMenuOpen(false);
      if (pathname !== '/') return;
      event.preventDefault();
      if (window.location.hash) {
        window.history.replaceState(null, '', '/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [pathname],
  );

  const isCurrent = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <ScarcityBanner />

      <div
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="shell">
          <div className="flex h-20 items-center justify-between gap-4">
            <Link
              href="/"
              onClick={goHome}
              aria-label="Taj Mahal Photography — home"
              className="flex shrink-0 flex-col items-center"
            >
              <span
                className={`font-serif text-2xl font-bold uppercase tracking-tight transition-colors duration-300 ${
                  dark ? 'text-ink-900' : 'text-white'
                }`}
              >
                Taj Mahal
              </span>
              <span
                className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  dark ? 'text-ink-800' : 'text-white'
                }`}
              >
                Photography
              </span>
            </Link>

            <nav aria-label="Main" className="hidden md:flex md:gap-6 lg:gap-8">
              {NAV.map((item) => {
                const current = isCurrent(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? 'page' : undefined}
                    className={`relative py-1 text-sm transition-colors duration-300 ${
                      item.wide ? 'hidden lg:inline-block' : ''
                    } ${current ? 'font-semibold' : 'font-medium'} ${
                      dark ? 'text-ink-800 hover:text-ink-900' : 'text-white hover:text-gold-400'
                    }`}
                  >
                    {item.label}
                    {/* The current page is marked, not guessed at. */}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-px bg-gold-500 transition-opacity duration-300 ${
                        current ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="hidden shrink-0 md:flex md:items-center md:gap-3">
              <Link href="/book" className="btn btn-gold btn-sm">
                Book Now
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-sm transition-colors duration-300 md:hidden ${
                dark ? 'text-ink-800 hover:text-ink-900' : 'text-white hover:text-gold-400'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-marble-200 bg-white md:hidden"
          >
            <nav aria-label="Mobile" className="shell py-3">
              {/* Same set as the desktop bar — a phone menu that is missing
                  the guides is a phone visitor who never sees them. */}
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isCurrent(item.href) ? 'page' : undefined}
                  className={`flex min-h-[48px] items-center border-b border-marble-100 text-base transition-colors last:border-b-0 ${
                    isCurrent(item.href) ? 'font-semibold text-gold-700' : 'font-medium text-ink-800'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div className="mt-4 flex flex-col gap-2 pb-2">
                <Link href="/book" className="btn btn-gold btn-block">
                  Book Now
                </Link>
                <a
                  href={whatsappUrl(WHATSAPP_MESSAGES.general)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-block"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Ask on WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
