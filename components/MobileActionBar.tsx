'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CalendarCheck } from 'lucide-react';
import { whatsappUrl, WHATSAPP_MESSAGES } from '@/lib/contact';
import { PLANS } from '@/lib/plans';
import Price from './Price';
import WhatsAppIcon from './WhatsAppIcon';

const LOWEST = PLANS.reduce((min, p) => (p.price < min.price ? p : min), PLANS[0]);

/**
 * Phone-only action bar. A floating chat bubble is an afterthought; on mobile
 * the two things a guest ever wants — a price and a way to talk to a human —
 * belong pinned within thumb reach. Appears once the hero is behind them, so
 * it never covers the hero's own call to action.
 */
export default function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 transition-transform duration-500 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="bg-ink-900/95 backdrop-blur-md border-t border-white/10 px-3 py-2.5 flex items-center gap-2.5">
        <div className="flex-shrink-0 pl-1">
          <p className="text-white/50 text-[10px] uppercase tracking-wider leading-none">From</p>
          <p className="text-white font-semibold text-base leading-tight mt-0.5">
            <Price planId={LOWEST.id} usd={LOWEST.price} hideCode />
          </p>
        </div>

        <a
          href={whatsappUrl(WHATSAPP_MESSAGES.general)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 flex-1 py-3 rounded-sm bg-[#25D366] text-ink-900 font-semibold text-sm"
        >
          <WhatsAppIcon className="w-4 h-4" />
          WhatsApp
        </a>

        <Link
          href="/book"
          className="flex items-center justify-center gap-2 flex-1 py-3 rounded-sm bg-gold-500 text-ink-900 font-semibold text-sm"
        >
          <CalendarCheck className="w-4 h-4" />
          Book
        </Link>
      </div>
    </div>
  );
}
