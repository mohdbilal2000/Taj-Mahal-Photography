'use client';

import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappUrl, WHATSAPP_MESSAGES } from '@/lib/contact';

export default function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.a
      href={whatsappUrl(WHATSAPP_MESSAGES.general)}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18 }}
      className="hidden md:block fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp — replies within 10 minutes"
    >
      {/* Soft expanding halo behind the button */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping [animation-duration:2.5s]" />

      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] ring-2 ring-white/70 transition-shadow duration-300 group-hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)]">
        <WhatsAppIcon className="w-7 h-7 drop-shadow-sm" />

        {/* Online status dot */}
        <span className="absolute top-0.5 right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white" />
      </span>

      {/* Tooltip */}
      <span className="absolute right-full top-1/2 -translate-y-1/2 mr-4 flex flex-col items-end opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
        <span className="bg-ink-900 text-white text-xs font-medium pl-3 pr-4 py-2.5 rounded-xl rounded-br-none shadow-lg whitespace-nowrap">
          <span className="block font-semibold">Chat with us on WhatsApp</span>
          <span className="block text-white/60 mt-0.5">Replies within 10 minutes</span>
        </span>
      </span>
    </motion.a>
  );
}
