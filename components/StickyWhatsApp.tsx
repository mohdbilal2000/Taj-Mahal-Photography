'use client';

import { MessageCircle } from 'lucide-react';

export default function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20inquire%20about%20a%20Taj%20Mahal%20photoshoot."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full mr-4 bg-white text-ink-900 text-xs font-medium px-3 py-1.5 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </a>
  );
}
