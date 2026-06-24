'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ScarcityBanner from './ScarcityBanner';

const NAV = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Permit Guide', href: '/permit-guide' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Only the homepage has a full-bleed dark hero to bleed into; everywhere
  // else the bar stays solid so the ivory nav text keeps its contrast.
  const isHome = pathname === '/';
  const solid = isScrolled || isMenuOpen || !isHome;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on Escape (a11y), on resize up to desktop, and lock
  // body scroll while the full-screen panel is open.
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize, { passive: true });
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <ScarcityBanner />

      <motion.div
        className={`transition-colors duration-500 ${
          solid
            ? 'bg-night/85 backdrop-blur-xl border-b border-line'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-[72px]">
            {/* Wordmark */}
            <Link href="/" className="group flex items-baseline gap-2.5 z-10">
              <span className="font-display text-xl sm:text-2xl font-medium tracking-tight text-ivory leading-none">
                Taj&nbsp;Mahal
              </span>
              <span className="hidden sm:block font-mono text-[9px] tracking-[0.3em] uppercase text-accent pb-0.5">
                Photography
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-9">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-underline font-mono text-[11px] uppercase tracking-[0.18em] text-muted hover:text-ivory transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <Link
                href="/book"
                className="group inline-flex items-center gap-2 border border-line-strong hover:border-accent px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ivory hover:text-accent transition-colors duration-300"
              >
                Book a session
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile controls */}
            <div className="flex items-center gap-2 md:hidden z-10">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-4 min-h-[42px] font-mono text-[11px] uppercase tracking-[0.16em] border border-accent text-accent"
              >
                Book
              </Link>
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] text-ivory"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 top-0 bg-night/98 backdrop-blur-xl pt-[120px] px-6"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-baseline gap-4 border-b border-line py-5"
                  >
                    <span className="font-mono text-[11px] text-accent">
                      0{i + 1}
                    </span>
                    <span className="font-display text-3xl text-ivory">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + NAV.length * 0.05, duration: 0.4 }}
                className="mt-8"
              >
                <Link
                  href="/book"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-accent text-night py-4 font-mono text-xs uppercase tracking-[0.2em] font-semibold"
                >
                  Book a session
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
