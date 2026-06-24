'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ScarcityBanner from './ScarcityBanner';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close the mobile menu on Escape (a11y) and when resizing up to desktop.
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
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <ScarcityBanner />

      <div className="bg-ink-900 text-white text-xs py-2 px-4 text-center tracking-wider font-medium">
        <span className="text-gold-400">★</span> OFFICIAL GOVERNMENT LICENSED PHOTOGRAPHER <span className="text-gold-400">★</span>
      </div>

      <motion.div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex flex-col items-center">
                <span
                  className={`font-serif text-2xl font-bold tracking-tight uppercase transition-colors duration-300 ${
                    isScrolled ? 'text-ink-900' : 'text-white drop-shadow-md'
                  }`}
                >
                  Taj Mahal
                </span>
                <span
                  className={`text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 ${
                    isScrolled ? 'text-ink-800' : 'text-white drop-shadow-md'
                  }`}
                >
                  Photography
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              {['Services', 'Permit Guide', 'Portfolio', 'FAQ'].map((item) => {
                const href = `/${item.toLowerCase().replace(' ', '-')}`;
                return (
                  <Link
                    key={item}
                    href={href}
                    className={`text-sm font-medium hover:text-gold-500 transition-colors duration-300 ${
                      isScrolled ? 'text-ink-800' : 'text-white drop-shadow-md'
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-sm bg-gold-500 text-ink-900 hover:bg-gold-400 transition-colors duration-300"
              >
                Book Now
              </Link>
            </div>

            <div className="flex items-center gap-1 md:hidden">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-4 min-h-[44px] text-sm font-semibold rounded-sm bg-gold-500 text-ink-900 hover:bg-gold-400 transition-colors duration-300"
              >
                Book
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                className={`inline-flex items-center justify-center min-h-[44px] min-w-[44px] rounded-md transition-colors duration-300 ${
                  isScrolled ? 'text-ink-800 hover:text-ink-900' : 'text-white hover:text-gold-400'
                }`}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white border-b border-marble-200"
          >
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3" aria-label="Mobile">
              <Link href="/services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-ink-800 hover:bg-marble-50 rounded-md">Services</Link>
              <Link href="/permit-guide" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-ink-800 hover:bg-marble-50 rounded-md">Permit Guide</Link>
              <Link href="/portfolio" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-ink-800 hover:bg-marble-50 rounded-md">Portfolio</Link>
              <Link href="/faq" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-ink-800 hover:bg-marble-50 rounded-md">FAQ</Link>
              <Link href="/book" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-gold-600 hover:bg-marble-50 rounded-md">Book Now</Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
