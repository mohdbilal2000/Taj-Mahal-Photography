/**
 * Search-result wording for the articles Search Console shows people already
 * find: the headline stays as written for the page, while the title and
 * description Google displays are written to the question people typed and
 * kept inside what Google shows without cutting (about 60 and 155 characters).
 * Keyed by slug and merged into POSTS in lib/blog.ts.
 */
export const SEO: Record<string, { seoTitle: string; seoDescription: string }> = {
  'what-to-wear-taj-mahal-photoshoot': {
    seoTitle: 'What to Wear to the Taj Mahal: Best Colours & Dress Code',
    seoDescription:
      'The best colours to wear for Taj Mahal photos, what to avoid against white marble, and the dress code. From a licensed Taj Mahal photographer.',
  },
  'taj-mahal-photographer-cost': {
    seoTitle: 'Taj Mahal Photographer Cost 2026: Real Prices from $89',
    seoDescription:
      'What a Taj Mahal photographer costs in 2026: sessions from $89 to $499 (about ₹8,500–₹47,500), what is included, and the extras that raise a cheap quote.',
  },
  'pre-wedding-shoot-taj-mahal-permission': {
    seoTitle: 'Is a Pre-Wedding Shoot Allowed at the Taj Mahal? 2026 Answer',
    seoDescription:
      'Is a pre-wedding shoot banned at the Taj Mahal? What is allowed, what needs a permit, and how a normal couple session works with a licensed photographer.',
  },
  'jaipur-to-agra-taj-mahal-photo-trip': {
    seoTitle: 'Jaipur to Taj Mahal Distance: 240 km, 4–5 Hours by Road',
    seoDescription:
      'Jaipur to Agra is about 240 km: 4–5 hours by road, roughly 4 by the fastest train. When to leave, where to stop, and how to reach the Taj for sunrise.',
  },
  'taj-mahal-tickets-timings-gates': {
    seoTitle: 'Taj Mahal Ticket Price 2026: Timings, Gates & Entry Fee',
    seoDescription:
      'Taj Mahal ticket price for Indians and foreigners, the real opening time at sunrise, which gate to use, and the extra mausoleum ticket most visitors miss.',
  },
};
