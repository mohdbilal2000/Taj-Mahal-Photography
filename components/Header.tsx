'use client';

import Link from 'next/link';
import { Menu, X, Camera, Phone, Calendar } from 'lucide-react';
import { useState } from 'react';
import ScarcityBanner from './ScarcityBanner';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-marble-200">
      <ScarcityBanner />
      <div className="bg-ink-900 text-white text-xs py-2 px-4 text-center tracking-wider font-medium">
        <span className="text-gold-400">★</span> OFFICIAL GOVERNMENT LICENSED PHOTOGRAPHER <span className="text-gold-400">★</span>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col items-center">
              <span className="font-serif text-2xl font-bold tracking-tight text-ink-900 uppercase">Taj Mahal</span>
              <span className="text-[10px] tracking-[0.2em] text-ink-800 uppercase">Photography</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/services" className="text-sm font-medium text-ink-800 hover:text-gold-500 transition-colors">Services</Link>
            <Link href="/permit-guide" className="text-sm font-medium text-ink-800 hover:text-gold-500 transition-colors">Permit Guide</Link>
            <Link href="/portfolio" className="text-sm font-medium text-ink-800 hover:text-gold-500 transition-colors">Portfolio</Link>
            <Link href="/faq" className="text-sm font-medium text-ink-800 hover:text-gold-500 transition-colors">FAQ</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/book" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-sm text-white bg-ink-900 hover:bg-ink-800 transition-colors">
              Book Now
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-ink-800 hover:text-ink-900 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-marble-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/services" className="block px-3 py-2 text-base font-medium text-ink-800 hover:bg-marble-50">Services</Link>
            <Link href="/permit-guide" className="block px-3 py-2 text-base font-medium text-ink-800 hover:bg-marble-50">Permit Guide</Link>
            <Link href="/portfolio" className="block px-3 py-2 text-base font-medium text-ink-800 hover:bg-marble-50">Portfolio</Link>
            <Link href="/faq" className="block px-3 py-2 text-base font-medium text-ink-800 hover:bg-marble-50">FAQ</Link>
            <Link href="/book" className="block px-3 py-2 text-base font-medium text-gold-600 hover:bg-marble-50">Book Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
