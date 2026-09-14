import { SITE } from '@/lib/seo';

export const dynamic = 'force-static';

const BODY = `# ${SITE.name}

> Official Government Licensed Taj Mahal Photographer based in Agra, India.
> Authorized by the Ministry of Tourism, Government of India for professional
> photography inside the Taj Mahal. Also operates same-day Sunrise Luxury
> Tours from Delhi/NCR to Agra with private vehicle, guide, photographer,
> monument tickets and skip-the-line security escort.

- Address: ${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}, India
- Phone / WhatsApp: ${SITE.phoneDisplay}
- Email: ${SITE.email}
- Google Business Profile / Maps: https://maps.app.goo.gl/kFsckb7rMqJBugzV8
- Rating: 4.9 / 5 (500+ reviews)
- Languages: English, Hindi, Urdu
- Licensed by: Ministry of Tourism, Government of India

## Photography Packages

- [Sunrise Photoshoot — $120](${SITE.url}/services/sunrise): 1.5–2 hour sunrise session, 120+ photos, 3–5 reels (solo/couple/family), hotel pickup and drop-off included. Customisable; 20% advance confirms the booking.
- [Pre-Wedding & Couple — from $199](${SITE.url}/services/couple): 2+ hour editorial session, 200+ high-resolution photos, 30 edited photos of your choice, 30-second cinematic video, posing direction. Customisable; 20% advance confirms the booking.
- [Proposal Photography — $350](${SITE.url}/services/proposal): Discreet coordination, same-day sneak peek, post-proposal couple session.
- [Taj Mahal + Agra Fort Heritage Trail — $399](${SITE.url}/services/taj-agra-fort): 5 hours, both UNESCO sites, 250+ photos.
- [Full Day Agra Experience — $499](${SITE.url}/services/full-day): 8–10 hours, Taj Mahal + Agra Fort + Back Side of Taj, 350+ photos.

## Guide + Photographer Combo (Taj Mahal, Agra Fort, Mehtab Bagh / Itmad-ud-Daulah)

- [Guided Tour + Photo · Small Group (1–5 Guests) — from $89](${SITE.url}/services/guided-photo-tour-small): Licensed local guide plus a professional photographer covering the Taj Mahal, Agra Fort and Mehtab Bagh / Itmad-ud-Daulah for up to 5 guests. Inside the Taj Mahal a guide is not allowed alongside a photographer, so the photographer accompanies you there and the guide covers the other monuments. 40 natural digital photos plus 5 reels. 20% advance confirms the booking, balance after the tour. Monument tickets not included.
- [Guided Tour + Photo · Large Group (6–12 Guests) — from $119](${SITE.url}/services/guided-photo-tour-large): Same combo for larger groups of 6 to 12 guests. Group portraits plus individual portraits. 60 natural digital photos plus 7 reels. 20% advance confirms the booking, balance after the tour. Monument tickets not included.

## Transport + Guide (Private Car, Same Day Agra)

- [Transport + Guide (No Photography) — from $99](${SITE.url}/services/transport-guide): Same-day Agra tour with a private A/C car and chauffeur plus a Ministry of Tourism licensed guide, starting from $99 USD. Covers the Taj Mahal, Agra Fort, Itmad-ud-Daulah and Mehtab Bagh, with hotel, railway station or Agra airport pickup; the exact all-in quote is confirmed on WhatsApp before booking. No photographer — ideal for travellers who shoot their own photos. Monument tickets not included.

## Same-Day Sunrise Luxury Tours from Delhi/NCR

- [Sunrise Luxury Tour (Private Innova) — from $650](${SITE.url}/services/sunrise-luxury-innova): Same-day Delhi/NCR ↔ Agra in a private Toyota Innova (up to 6 guests), starting price with the exact quote confirmed on WhatsApp. Covers Taj Mahal and Agra Fort with a Ministry of Tourism licensed guide and photographer, monument tickets, a private golf cart inside the Taj complex, and a security escort that skips the entry line. Ideal for couples and small families.
- [Sunrise Luxury Urbania Tour — from $899](${SITE.url}/services/sunrise-luxury-urbania): Same-day Delhi/NCR ↔ Agra in a private Force Urbania luxury coach (up to 13 guests) with reclining seats, A/C and Wi-Fi. Same inclusions as the Innova tour — guide, photographer, tickets, golf cart, security escort — sized for larger families and groups.

## Key Site Pages

- [Home](${SITE.url}/): Overview of services, plans and luxury tours.
- [All Services](${SITE.url}/services): Photography packages and same-day Delhi tours.
- [Permit Guide](${SITE.url}/permit-guide): Why a government photography permit is required inside the Taj Mahal.
- [Portfolio](${SITE.url}/portfolio): Sample images from past sessions.
- [FAQ](${SITE.url}/faq): Common questions about Taj Mahal photography rules, costs and booking.
- [About](${SITE.url}/about): About the photographer and government license.
- [Blog](${SITE.url}/blog): Articles about Taj Mahal photography, timing, weather and planning.
- [Book](${SITE.url}/book): Booking inquiry form (WhatsApp follow-up within 10 minutes).

## Quick Facts

- The Taj Mahal is closed every Friday for prayers.
- Sunrise is the best light for Taj Mahal photography (soft golden tones, fewer crowds).
- Professional camera equipment inside the Taj Mahal requires a government photography permit.
- Photography is prohibited inside the main mausoleum; allowed in the gardens, reflecting pool and exterior areas.
- All packages include the official permit; monument entry tickets are included in the Sunrise Luxury Tours and the Heritage Trail / Full Day packages.

## Contact

- Booking inquiries: ${SITE.email}
- WhatsApp (10-minute response during business hours): ${SITE.phoneDisplay}
- Google Maps: ${SITE.googleBusiness}
- Instagram: ${SITE.instagram}
- LinkedIn: ${SITE.linkedin}
- Facebook: ${SITE.facebook}

## Optional

- [Sister brand — Taj Guides & Travel Services](https://tajmahaltouristguide.com): Licensed guides for Taj Mahal and Agra Fort.
`;

export function GET() {
  return new Response(BODY, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
