import { planImage } from './images';

// Single source of truth for bookable plans — consumed by the QuickBookRail,
// the booking form (plan preselection via /book?plan=<id>) and anywhere else
// a compact plan list is needed. IDs match the /services/[slug] routes.

export type Plan = {
  id: string;
  name: string;
  price: number;
  /** When true the price is a "From $X" starting price, not a fixed total. */
  fromPrice?: boolean;
  /** One-line hook shown in compact lists. */
  tagline: string;
  duration: string;
  /** Card image for tour-card grids (resolved from lib/images.ts). */
  image?: string;
  /** Short badge shown on tour cards, e.g. "Bestseller". */
  badge?: string;
  /** Highlighted in the quick-book rail. */
  popular?: boolean;
  /** Booking form should ask for cities of travel + number of days. */
  needsRoute?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: 'sunrise',
    name: 'Taj Mahal Sunrise Photoshoot',
    price: 120,
    tagline: '120+ photos and 3–5 reels — your photographer meets you at your hotel',
    duration: '1.5–2 Hours',
    badge: 'Bestseller',
    popular: true,
  },
  {
    id: 'pre-wedding',
    name: 'Couple & Pre-Wedding',
    price: 199,
    fromPrice: true,
    tagline: '200+ high-resolution photos, 30 edited photos and a cinematic video',
    duration: '2+ Hours',
    badge: 'Couples\u2019 Favourite',
  },
  {
    id: 'guided-photo-tour-small',
    name: 'Guide + Photo · Small Group (1–5)',
    price: 89,
    fromPrice: true,
    tagline: 'Licensed guide + photographer, 40 natural digital photos and 5 reels',
    duration: 'Half Day',
    badge: 'Best Value',
  },
  {
    id: 'guided-photo-tour-large',
    name: 'Guide + Photo · Large Group (6–12)',
    price: 119,
    fromPrice: true,
    tagline: 'Same combo for bigger groups — 60 natural digital photos and 7 reels',
    duration: 'Half Day',
  },
  {
    id: 'transport-guide',
    name: 'Transport + Guide (No Photography)',
    price: 99,
    fromPrice: true,
    tagline: 'Same-day Agra tour — private A/C car + licensed guide, bring your own camera',
    duration: 'Same Day · Agra',
    badge: 'Customisable',
  },
  {
    id: 'taj-agra-fort',
    name: 'Heritage Trail (Taj + Agra Fort)',
    price: 399,
    tagline: 'Both UNESCO sites, 250+ photos, transport included',
    duration: '5 Hours',
  },
  {
    id: 'full-day',
    name: 'Full Day Agra Experience',
    price: 499,
    tagline: 'Taj Mahal, Agra Fort and the back-side sunset — 350+ photos',
    duration: '8–10 Hours',
  },
  {
    id: 'sunrise-luxury-innova',
    name: 'Sunrise Luxury Tour · Private Innova',
    price: 650,
    fromPrice: true,
    tagline: 'Same-day Delhi ↔ Agra, all-inclusive, up to 6 guests',
    duration: 'Same Day · 14–16 Hours',
    badge: 'All-Inclusive',
  },
  {
    id: 'sunrise-luxury-urbania',
    name: 'Sunrise Luxury Tour · Urbania Coach',
    price: 899,
    fromPrice: true,
    tagline: 'Same-day Delhi ↔ Agra for groups up to 13, all-inclusive',
    duration: 'Same Day · 14–16 Hours',
  },
];

/** The 5 plans surfaced in the homepage quick-book rail. */
export const QUICK_BOOK_IDS = [
  'sunrise',
  'pre-wedding',
  'guided-photo-tour-small',
  'guided-photo-tour-large',
  'transport-guide',
] as const;

/** Deposit terms shown alongside every plan. */
export const DEPOSIT_NOTE =
  '20% advance confirms the booking — the balance is paid after the tour. Every package is customisable to your plans.';

export const TRAVEL_CITIES = ['Agra', 'Delhi', 'Jaipur', 'Mathura & Vrindavan'] as const;

export const TRAVEL_DAYS = ['1', '2', '3', '4', '5', '6', '7+'] as const;

export const TIMING_SLOTS = [
  { id: 'sunrise', label: 'Sunrise', hint: 'Best light & fewest crowds' },
  { id: 'forenoon', label: 'Forenoon', hint: 'Soft morning light' },
  { id: 'afternoon', label: 'Afternoon', hint: 'Relaxed midday visit' },
  { id: 'sunset', label: 'Sunset', hint: 'Warm golden hour' },
] as const;

/** Alternate slugs that should resolve to a canonical plan. */
const PLAN_ALIASES: Record<string, string> = {
  couple: 'pre-wedding',
  'transport-photography': 'transport-guide',
};

/** A plan's card image, from the shared photo map. */
export function imageForPlan(plan: Plan): string {
  return plan.image ?? planImage(plan.id);
}

export function planById(id: string | null | undefined): Plan | undefined {
  if (!id) return undefined;
  const canonical = PLAN_ALIASES[id] ?? id;
  return PLANS.find((p) => p.id === canonical);
}
