// Single source of truth for bookable plans — consumed by the QuickBookRail,
// the booking form (plan preselection via /book?plan=<id>) and anywhere else
// a compact plan list is needed. IDs match the /services/[slug] routes.

export type Plan = {
  id: string;
  name: string;
  price: number;
  /** One-line hook shown in compact lists. */
  tagline: string;
  duration: string;
  /** Highlighted in the quick-book rail. */
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    id: 'quick-capture',
    name: 'Quick Capture',
    price: 49,
    tagline: '30 raw photos in 30 minutes — the fastest way to pro shots',
    duration: '30 Minutes',
  },
  {
    id: 'sunrise',
    name: 'Sunrise Photoshoot',
    price: 99,
    tagline: 'Best light, fewest crowds — our most-booked session',
    duration: '1 Hour',
    popular: true,
  },
  {
    id: 'pre-wedding',
    name: 'Couple & Pre-Wedding',
    price: 199,
    tagline: '100+ photos, 50 prints and a cinematic video at the monument of love',
    duration: '2+ Hours',
  },
  {
    id: 'family',
    name: 'Family Photography',
    price: 299,
    tagline: 'Group portraits at a child-friendly pace',
    duration: '1.5 Hours',
  },
  {
    id: 'proposal',
    name: 'Proposal Photography',
    price: 350,
    tagline: 'Discreet coordination and a same-day sneak peek',
    duration: '1.5 Hours',
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
    id: 'guided-photo-tour-small',
    name: 'Guide + Photo · Small Group (1–5)',
    price: 79,
    tagline: 'Licensed guide + photographer, 30 digital + 30 printed photos',
    duration: 'Half Day',
  },
  {
    id: 'guided-photo-tour-large',
    name: 'Guide + Photo · Large Group (6–12)',
    price: 99,
    tagline: 'Same combo for bigger groups, with group portraits',
    duration: 'Half Day',
  },
  {
    id: 'transport-photography',
    name: 'Transport + Photography',
    price: 129,
    tagline: 'Private A/C car + licensed photographer, 60+ photos',
    duration: 'Half Day (4–5 Hours)',
  },
  {
    id: 'transport-guide',
    name: 'Transport + Guide (No Photography)',
    price: 89,
    tagline: 'Private A/C car + licensed guide — shoot your own photos',
    duration: 'Half Day (4–5 Hours)',
  },
  {
    id: 'sunrise-luxury-innova',
    name: 'Sunrise Luxury Tour · Private Innova',
    price: 650,
    tagline: 'Same-day Delhi ↔ Agra, all-inclusive, up to 6 guests',
    duration: 'Same Day · 14–16 Hours',
  },
  {
    id: 'sunrise-luxury-urbania',
    name: 'Sunrise Luxury Tour · Urbania Coach',
    price: 899,
    tagline: 'Same-day Delhi ↔ Agra for groups up to 13, all-inclusive',
    duration: 'Same Day · 14–16 Hours',
  },
];

/** The 5 plans surfaced in the homepage quick-book rail. */
export const QUICK_BOOK_IDS = [
  'quick-capture',
  'sunrise',
  'pre-wedding',
  'transport-photography',
  'sunrise-luxury-innova',
] as const;

export const TIMING_SLOTS = [
  { id: 'sunrise', label: 'Sunrise', hint: 'Best light & fewest crowds' },
  { id: 'forenoon', label: 'Forenoon', hint: 'Soft morning light' },
  { id: 'afternoon', label: 'Afternoon', hint: 'Relaxed midday visit' },
  { id: 'sunset', label: 'Sunset', hint: 'Warm golden hour' },
] as const;

/** Alternate slugs that should resolve to a canonical plan. */
const PLAN_ALIASES: Record<string, string> = {
  couple: 'pre-wedding',
};

export function planById(id: string | null | undefined): Plan | undefined {
  if (!id) return undefined;
  const canonical = PLAN_ALIASES[id] ?? id;
  return PLANS.find((p) => p.id === canonical);
}
