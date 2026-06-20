// Blog content — single source of truth shared by the blog index
// (`app/blog/page.tsx`), the per-post pages (`app/blog/[slug]/page.tsx`)
// and the sitemap. Keeping it here means the BlogPosting schema, the
// rendered article and the sitemap can never drift apart.
//
// `datePublished` is the original publish date (gives the content age /
// authority). `dateModified` is the last substantive edit — bump it when
// you change a post's body so the freshness signal stays honest.

export type ArticleBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  /** Used for cards, meta description and BlogPosting.description. */
  excerpt: string;
  /** One-line answer surfaced at the top of the article for AEO extraction. */
  quickAnswer: string;
  image: string;
  imageAlt: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  category: string;
  /** Optional FAQ block → FAQPage schema + visible Q&A. */
  faqs?: { question: string; answer: string }[];
  body: ArticleBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-time-to-photograph-taj-mahal',
    title: 'Best Time to Photograph the Taj Mahal: A Complete Guide',
    excerpt:
      'Sunrise, sunset, or monsoon season? Learn exactly when to visit the Taj Mahal for the most stunning photographs, including monthly lighting conditions and crowd levels.',
    quickAnswer:
      'Sunrise is the best time to photograph the Taj Mahal: the marble glows pink and gold, crowds are thinnest, and the light is soft. The second-best window is the hour before sunset. October to March gives the clearest skies. The monument is closed every Friday.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'The Taj Mahal at sunrise, white marble glowing pink and gold over the reflecting pool',
    datePublished: '2025-01-15',
    dateModified: '2026-06-20',
    readTime: '8 min read',
    category: 'Photography Tips',
    body: [
      { type: 'p', text: 'The Taj Mahal photographs differently depending on the hour, the season and even the day of the week. Get the timing right and the white marble turns into a canvas of shifting colour; get it wrong and you fight harsh shadows and dense crowds. This guide breaks down exactly when to shoot.' },
      { type: 'h2', text: 'Why sunrise wins' },
      { type: 'p', text: 'Sunrise is the single best window for Taj Mahal photography. As the first light hits the dome, the marble takes on warm pink, amber and gold tones that disappear within the first hour. Crowds are at their thinnest right at opening, so you can capture the symmetry of the gardens and the reflecting pool without dozens of visitors in frame.' },
      { type: 'p', text: 'Opening time tracks the sun, so it shifts through the year — roughly 6:00–6:30 AM in winter and as early as 5:30 AM in summer. Arriving before the gates open and being among the first inside is the difference between an empty foreground and a busy one.' },
      { type: 'h2', text: 'The second-best window: late afternoon' },
      { type: 'p', text: 'If you cannot make sunrise, aim for the last hour before the complex closes. The light softens again and the western face of the monument catches a warm glow. Crowds thin out as day-trippers leave, though they are still heavier than at dawn.' },
      { type: 'h2', text: 'Avoid midday' },
      { type: 'p', text: 'Between roughly 11 AM and 3 PM the sun sits high and the light goes flat and contrasty. The dome can look washed out, shadows are unflattering for portraits, and the crowds peak. If midday is your only option, shoot from the shaded arcades and use the gardens for diffused light.' },
      { type: 'h2', text: 'Best months of the year' },
      { type: 'ul', items: [
        'October to March: cool, clear skies and the most reliable light. Peak season — book early.',
        'July to September (monsoon): dramatic skies and lush green gardens, but rain and haze are a gamble.',
        'April to June: very hot and often hazy; sunrise is essential to beat both the heat and the white sky.',
      ] },
      { type: 'h2', text: 'One rule you cannot work around' },
      { type: 'p', text: 'The Taj Mahal is closed every Friday for prayers at the mosque inside the complex. Plan your shoot for any other day. For a deeper breakdown of access rules, see our guide to Taj Mahal photography rules.' },
    ],
    faqs: [
      { question: 'What time does the Taj Mahal open for sunrise?', answer: 'The Taj Mahal opens around sunrise, which shifts through the year — roughly 6:00–6:30 AM in winter and about 5:30 AM in summer. Arrive before the gates open to be among the first inside.' },
      { question: 'Is sunrise or sunset better for photography?', answer: 'Sunrise is better: the light is soft and warm and the crowds are far thinner. Sunset is a strong second choice but the complex is busier and you are working against the closing time.' },
    ],
  },
  {
    slug: 'what-to-wear-taj-mahal-photoshoot',
    title: 'What to Wear for a Taj Mahal Photoshoot: Outfit Guide',
    excerpt:
      'Your outfit choice matters against the white marble backdrop. Discover the best colors, fabrics, and styles that photograph beautifully at the Taj Mahal.',
    quickAnswer:
      'Wear bold, saturated colours — red, emerald green, royal blue or gold — which stand out against the white marble. Avoid pure white, which blends into the monument. Flowy fabrics like sarees, lehengas and maxi dresses add movement, and comfortable shoes matter because the complex is large.',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'A couple in colourful traditional outfits posing in the Taj Mahal gardens',
    datePublished: '2025-02-10',
    dateModified: '2026-06-20',
    readTime: '6 min read',
    category: 'Style Guide',
    body: [
      { type: 'p', text: 'Against a pure-white marble backdrop, your wardrobe does a lot of the work. The right colours and fabrics make your portraits pop; the wrong ones blend into the monument. Here is how to dress for a Taj Mahal photoshoot.' },
      { type: 'h2', text: 'Choose bold, saturated colours' },
      { type: 'p', text: 'Rich, deep colours read beautifully against white. Reds, emerald and bottle greens, royal and cobalt blues, mustard and gold, and jewel tones all create strong separation and draw the eye to you rather than the background.' },
      { type: 'h2', text: 'Avoid pure white and very pale tones' },
      { type: 'p', text: 'White, cream and pale pastels visually merge with the marble, flattening the image and losing definition. If you love a light palette, anchor it with a coloured dupatta, scarf or accessory so you do not disappear into the background.' },
      { type: 'h2', text: 'Pick fabrics that move' },
      { type: 'p', text: 'Flowing fabrics photograph wonderfully because they catch the breeze and add motion to otherwise static poses.' },
      { type: 'ul', items: [
        'Sarees, lehengas and long dupattas — the trailing fabric creates dramatic movement.',
        'Maxi dresses and gowns with a long train.',
        'Lightweight cottons and chiffons for the heat; avoid stiff, structured fabrics that do not flow.',
      ] },
      { type: 'h2', text: 'Coordinate, do not match' },
      { type: 'p', text: 'For couples and families, choose colours from the same palette rather than identical outfits. Complementary tones look intentional and modern; matching head-to-toe can look dated and busy.' },
      { type: 'h2', text: 'Practical details that matter' },
      { type: 'ul', items: [
        'Comfortable shoes — the complex is large and you will walk and stand a lot. Bring elegant shoes for close-up shots if you like.',
        'Modest coverage — shoulders and knees covered is respectful and avoids any issue at a place of worship.',
        'Minimal, considered accessories — a statement piece reads better on camera than lots of small ones.',
      ] },
    ],
    faqs: [
      { question: 'Can I wear white at the Taj Mahal?', answer: 'You can, but it is not ideal for photography — white clothing blends into the white marble. If you wear it, add a coloured accessory such as a dupatta or scarf for contrast.' },
      { question: 'Is there a dress code at the Taj Mahal?', answer: 'There is no strict dress code, but modest clothing that covers shoulders and knees is respectful at the monument, which includes a working mosque.' },
    ],
  },
  {
    slug: 'taj-mahal-photography-rules-2025',
    title: 'Taj Mahal Photography Rules: What Is and Isn\'t Allowed',
    excerpt:
      'A definitive guide to photography regulations at the Taj Mahal. Learn about permit requirements, prohibited items, restricted zones, and how to avoid security issues.',
    quickAnswer:
      'Casual phone and small-camera photography is allowed in the gardens and around the exterior, but photography is prohibited inside the main mausoleum. Professional gear — tripods, multiple lenses, large bags — requires a Ministry of Tourism photography permit, which licensed photographers hold.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'The Taj Mahal exterior with visitors photographing the facade from the gardens',
    datePublished: '2025-03-05',
    dateModified: '2026-06-20',
    readTime: '10 min read',
    category: 'Travel Guide',
    body: [
      { type: 'p', text: 'Photography at the Taj Mahal is governed by the Archaeological Survey of India (ASI) and enforced strictly at the gates. Knowing the rules before you arrive saves you from confiscated gear and a ruined shoot.' },
      { type: 'h2', text: 'Where photography is allowed' },
      { type: 'p', text: 'You are free to photograph the gardens, the reflecting pool, the main gateway and the entire exterior of the mausoleum. These are the iconic angles — the classic reflection shot, the symmetry of the charbagh gardens and the framed views from the side mosque and jawab.' },
      { type: 'h2', text: 'Where photography is prohibited' },
      { type: 'p', text: 'Photography is strictly forbidden inside the main mausoleum, where the cenotaphs of Shah Jahan and Mumtaz Mahal sit. Security actively enforces this. Respect it — it is both a rule and a matter of reverence at a tomb.' },
      { type: 'h2', text: 'Casual vs. professional photography' },
      { type: 'p', text: 'A phone or a small point-and-shoot is fine for any visitor. The line is professional equipment: tripods, monopods, external flashes, multiple lenses and large camera bags are treated as commercial photography and are stopped at security unless you are with a permit holder.' },
      { type: 'h3', text: 'Why the permit exists' },
      { type: 'p', text: 'The Ministry of Tourism issues photography permits to licensed professionals who have passed examinations on monument history, conservation and regulations. The permit is what lets professional gear through the gate legally — which is exactly why hiring a licensed photographer matters. See our permit guide for the full explanation.' },
      { type: 'h2', text: 'Prohibited items at security' },
      { type: 'ul', items: [
        'Tripods, monopods and stands (without a permit).',
        'Drones — banned across the entire area.',
        'Large bags, food, and most electronics beyond a phone and camera.',
        'Anything that could be considered commercial filming without authorisation.',
      ] },
      { type: 'h2', text: 'How to avoid problems' },
      { type: 'ol', items: [
        'Travel light — carry only what you genuinely need through security.',
        'Leave tripods and extra gear behind unless you are with a licensed photographer.',
        'Never attempt photos inside the mausoleum.',
        'For a professional shoot, book a government-licensed photographer who handles the permit for you.',
      ] },
    ],
    faqs: [
      { question: 'Do you need a permit to photograph the Taj Mahal?', answer: 'Casual phone or small-camera photography needs no permit. Professional photography with tripods, multiple lenses or large bags requires a Ministry of Tourism permit, which licensed photographers hold.' },
      { question: 'Can you take photos inside the Taj Mahal mausoleum?', answer: 'No. Photography is strictly prohibited inside the main mausoleum where the cenotaphs are located. It is allowed in the gardens and around the exterior.' },
      { question: 'Are drones allowed at the Taj Mahal?', answer: 'No. Drones are banned across the entire Taj Mahal area for security reasons.' },
    ],
  },
  {
    slug: 'pre-wedding-shoot-taj-mahal-planning',
    title: 'Planning a Pre-Wedding Shoot at the Taj Mahal',
    excerpt:
      'Everything couples need to know about planning a pre-wedding or engagement photoshoot at the Taj Mahal, from permits to poses to the perfect timeline.',
    quickAnswer:
      'Book a licensed photographer who arranges the permit, choose a sunrise slot for soft light and small crowds, plan two coordinated outfits, and allow about two hours. Booking two to three weeks ahead is wise because permits are limited to two shoots per day.',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'A couple posing for a pre-wedding photoshoot in front of the Taj Mahal at dawn',
    datePublished: '2025-04-20',
    dateModified: '2026-06-20',
    readTime: '7 min read',
    category: 'Pre-Wedding',
    body: [
      { type: 'p', text: 'A pre-wedding shoot at the monument of love is one of the most romantic backdrops on earth — but it takes planning to do well. Here is how couples get it right.' },
      { type: 'h2', text: 'Start with the permit and photographer' },
      { type: 'p', text: 'Professional pre-wedding photography needs the full kit — and that means a Ministry of Tourism permit. The simplest path is to book a government-licensed photographer who holds the permit and brings the gear through security legally. Our pre-wedding and couple package is built for exactly this.' },
      { type: 'h2', text: 'Pick the right time slot' },
      { type: 'p', text: 'Sunrise is ideal: the marble glows, the gardens are quiet, and you get clean frames without crowds behind you. Remember the Taj Mahal is closed on Fridays, so plan around that.' },
      { type: 'h2', text: 'Plan your outfits' },
      { type: 'ul', items: [
        'Two looks if time allows — one traditional (saree, lehenga, sherwani) and one editorial or western.',
        'Bold, coordinated colours that pop against the white marble; avoid matching white outfits.',
        'Flowy fabrics for movement, and comfortable shoes for the walking between locations.',
      ] },
      { type: 'h2', text: 'A typical timeline' },
      { type: 'ol', items: [
        'Arrive before gates open and clear security with your photographer.',
        'First-light couple portraits at the main viewpoint and reflecting pool.',
        'Garden and architectural frames as the light comes up.',
        'Outfit change and editorial sequence in the quieter corners.',
        'Wrap before crowds peak — about two hours total.',
      ] },
      { type: 'h2', text: 'Book ahead' },
      { type: 'p', text: 'Because permits are limited to two photography shoots per day, peak season (October to March) fills quickly. Reserve two to three weeks in advance to secure your preferred date and the sunrise slot.' },
    ],
    faqs: [
      { question: 'How long does a pre-wedding shoot at the Taj Mahal take?', answer: 'Plan for about two hours, which covers first-light portraits, garden and architectural frames, and one outfit change before crowds build.' },
      { question: 'How far in advance should we book a pre-wedding shoot?', answer: 'Two to three weeks ahead is recommended, especially in peak season (October to March), because photography permits are limited to two shoots per day.' },
    ],
  },
  {
    slug: 'agra-beyond-taj-mahal-photo-locations',
    title: '5 Stunning Photo Locations in Agra Beyond the Taj Mahal',
    excerpt:
      'Discover Agra Fort, Mehtab Bagh, Itimad-ud-Daulah, and other magnificent locations that complement your Taj Mahal photography experience.',
    quickAnswer:
      'Beyond the Taj Mahal, the best photo spots in Agra are Agra Fort, Mehtab Bagh (for the Taj across the river at sunset), Itimad-ud-Daulah (the "Baby Taj"), Mehtab Bagh\'s riverbank, and the local markets. A full-day or heritage-trail shoot can cover several in one visit.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Red sandstone architecture of Agra Fort with Mughal arches',
    datePublished: '2025-05-12',
    dateModified: '2026-06-20',
    readTime: '9 min read',
    category: 'Travel Guide',
    body: [
      { type: 'p', text: 'The Taj Mahal is the headline, but Agra is full of Mughal monuments that make extraordinary photographs — and several give you the Taj itself from unexpected angles. Here are five worth your lens.' },
      { type: 'h2', text: '1. Agra Fort' },
      { type: 'p', text: 'A UNESCO World Heritage red-sandstone fort with sweeping arches, marble palaces and the Musamman Burj — the tower where Shah Jahan was imprisoned, with a distant view of the Taj. Photography is allowed throughout most of the fort, making it a perfect pairing with a Taj shoot.' },
      { type: 'h2', text: '2. Mehtab Bagh' },
      { type: 'p', text: 'The "Moonlight Garden" sits directly across the Yamuna from the Taj Mahal. It is the classic spot for a sunset shot of the monument reflected in the river, with far fewer people than the main complex.' },
      { type: 'h2', text: '3. Itimad-ud-Daulah (the "Baby Taj")' },
      { type: 'p', text: 'This exquisite marble tomb predates the Taj and is often called its blueprint. Its intricate inlay work (pietra dura) and quiet grounds make it a favourite for detail and portrait photography without crowds.' },
      { type: 'h2', text: '4. The Yamuna riverbank' },
      { type: 'p', text: 'The riverbank views offer the Taj framed by water and open sky — beautiful in the soft light of early morning and late afternoon.' },
      { type: 'h2', text: '5. Agra\'s old-city markets' },
      { type: 'p', text: 'For colour and street character, the lanes around the old city deliver vivid, candid frames — spices, textiles and daily life that round out a travel story beyond the monuments.' },
      { type: 'h2', text: 'See several in one shoot' },
      { type: 'p', text: 'Our Heritage Trail and Full Day Agra packages are designed to cover the Taj Mahal plus Agra Fort and other sites in a single session, with the photographer handling logistics and permits.' },
    ],
    faqs: [
      { question: 'Where can you photograph the Taj Mahal from across the river?', answer: 'Mehtab Bagh, the garden directly across the Yamuna, offers the classic sunset view of the Taj Mahal reflected in the river with far fewer crowds.' },
      { question: 'Is photography allowed at Agra Fort?', answer: 'Yes. Professional photography is allowed throughout most of Agra Fort, including the palaces, the Diwan-i-Khas and the balconies that frame the Taj Mahal in the distance.' },
    ],
  },
  {
    slug: 'taj-mahal-camera-settings-tips',
    title: 'Camera Settings for Taj Mahal Photography: Pro Tips',
    excerpt:
      'Professional camera settings recommendations for photographing the Taj Mahal in different lighting conditions, from sunrise golden hour to harsh midday light.',
    quickAnswer:
      'Shoot in RAW, keep ISO low (100–200) at sunrise, use a small aperture (f/8–f/11) for sharp wide shots and a wide aperture (f/1.8–f/2.8) for portraits, and watch your exposure so the white marble does not blow out — meter for the highlights and lift shadows later.',
    image: 'https://images.unsplash.com/photo-1514222288957-49a4653e1073?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'A photographer composing a shot of the Taj Mahal in golden morning light',
    datePublished: '2025-06-18',
    dateModified: '2026-06-20',
    readTime: '11 min read',
    category: 'Photography Tips',
    body: [
      { type: 'p', text: 'White marble against a bright sky is a deceptively tricky subject. These settings will help you keep detail in the highlights and make the most of the light at every hour.' },
      { type: 'h2', text: 'Start with the fundamentals' },
      { type: 'ul', items: [
        'Shoot RAW — you will need the latitude to recover the bright marble and lift shadows.',
        'Keep ISO as low as conditions allow (100–200 at sunrise) for clean files.',
        'Use a lens hood; the open sky causes flare at low angles.',
      ] },
      { type: 'h2', text: 'Exposure: protect the marble' },
      { type: 'p', text: 'The biggest mistake is blowing out the white dome. Meter for the highlights, use your histogram, and dial in negative exposure compensation (around -0.3 to -1 EV) when the marble is brightest. It is far easier to lift shadows in post than to recover clipped highlights.' },
      { type: 'h2', text: 'Aperture by shot type' },
      { type: 'ul', items: [
        'Wide architectural and symmetry shots: f/8–f/11 for front-to-back sharpness.',
        'Couple and portrait shots: f/1.8–f/2.8 to separate subjects from the background.',
        'Avoid going past f/16 — diffraction starts to soften fine detail.',
      ] },
      { type: 'h2', text: 'Settings by time of day' },
      { type: 'h3', text: 'Sunrise / golden hour' },
      { type: 'p', text: 'Low ISO, f/8 for landscapes, and a slightly warm white balance to enhance the pink-gold tones. Bracket exposures if the sky is much brighter than the foreground.' },
      { type: 'h3', text: 'Harsh midday' },
      { type: 'p', text: 'Stop down, use the shaded arcades, and consider a polariser to cut glare off the marble and deepen the sky. Expose carefully — contrast is at its worst now.' },
      { type: 'h2', text: 'Composition tips' },
      { type: 'ol', items: [
        'Use the central watercourse and reflecting pool for symmetry and reflections.',
        'Frame the dome through the gateway arch or the side mosque for depth.',
        'Get low for foreground interest in the gardens.',
        'Arrive early — an empty foreground is impossible once crowds build.',
      ] },
      { type: 'p', text: 'Prefer to leave the technical side to a professional? A licensed photographer brings the gear and the permit and knows every angle — see our photography packages.' },
    ],
    faqs: [
      { question: 'What camera settings are best for the Taj Mahal at sunrise?', answer: 'Shoot RAW at low ISO (100–200), use f/8 for wide shots, a warm white balance, and slight negative exposure compensation so the bright marble keeps its detail.' },
      { question: 'How do I stop the white marble from overexposing?', answer: 'Meter for the highlights, watch your histogram, and apply around -0.3 to -1 EV of exposure compensation. Recover shadow detail later in post from the RAW file.' },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
