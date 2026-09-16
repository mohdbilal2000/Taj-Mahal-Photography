import { SITE } from './seo';

/**
 * WhatsApp is where this business actually closes bookings, so the link is
 * built in one place — with the message pre-filled from the page the guest
 * was reading, which is the difference between a reply and a dead "Hi".
 */
export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  general: 'Hi! I would like to book a Taj Mahal photoshoot. Could you share the available dates?',
  plan: (planName: string) =>
    `Hi! I am interested in the ${planName} package at the Taj Mahal. Could you confirm availability and the exact price?`,
} as const;
