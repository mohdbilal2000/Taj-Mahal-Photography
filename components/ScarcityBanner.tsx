'use client';

import { useEffect, useState } from 'react';
import { ShieldCheck, CalendarClock, Star } from 'lucide-react';
import CurrencyToggle from './CurrencyToggle';

/**
 * One slim bar carrying the three things that earn trust before the hero does:
 * the licence, scarcity, and reputation. It replaces the two stacked banners
 * that used to eat a quarter of the first mobile screen — on phones the three
 * facts rotate through a single line instead of wrapping to three.
 */
const FACTS = [
  { Icon: ShieldCheck, short: 'Govt. licensed photographer', text: 'Ministry of Tourism licensed photographer' },
  { Icon: CalendarClock, short: 'Only 2 permits per day', text: 'Only 2 photography permits issued per day' },
  { Icon: Star, short: 'Photos in 48 hours', text: 'Photos delivered in 48 hours' },
];

export default function ScarcityBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % FACTS.length), 4200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="bg-ink-900 text-white/90 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between gap-4">
        {/* Phones: one rotating fact. Desktop: all three, no motion needed. */}
        <div className="flex-1 min-w-0 md:hidden">
          {FACTS.map(({ Icon, short }, i) => (
            <span
              key={short}
              aria-hidden={i !== index}
              className={`items-center gap-2 text-[11px] tracking-wide ${i === index ? 'flex' : 'hidden'}`}
            >
              <Icon className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span className="truncate">{short}</span>
            </span>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6 text-[11px] tracking-wide">
          {FACTS.map(({ Icon, text }) => (
            <span key={text} className="flex items-center gap-2">
              <Icon className="w-3.5 h-3.5 text-gold-400" />
              {text}
            </span>
          ))}
        </div>

        <CurrencyToggle className="flex-shrink-0" />
      </div>
    </div>
  );
}
