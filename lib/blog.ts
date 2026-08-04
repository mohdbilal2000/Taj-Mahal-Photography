// Blog post content — shared between the listing page (app/blog/page.tsx)
// and the individual article pages (app/blog/[slug]/page.tsx).

export type BlogSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-time-to-photograph-taj-mahal',
    title: 'Best Time to Photograph the Taj Mahal: A Complete Guide',
    excerpt:
      'Sunrise, sunset, or monsoon season? Learn exactly when to visit the Taj Mahal for the most stunning photographs, including monthly lighting conditions and crowd levels.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800&auto=format&fit=crop',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Photography Tips',
    sections: [
      {
        paragraphs: [
          'Timing is the single biggest factor in how your Taj Mahal photos turn out. The same monument can look flat and hazy at noon, or glow pink and gold at sunrise — the difference is entirely about when you show up.',
        ],
      },
      {
        heading: 'Sunrise is the best time of day, and it isn\'t close',
        paragraphs: [
          'The Taj Mahal faces east, so sunrise light hits the white marble directly, giving it warm pink, amber and gold tones that shift by the minute. Crowds are also at their thinnest in the first hour after the gates open, which matters because the reflecting pool and the classic front-on angle get packed later in the day.',
          'Depending on the season, sunrise falls anywhere between roughly 5:30 AM (peak summer) and 7:00 AM (deep winter). Gates typically open around sunrise, so arriving right at opening is the move — the light window with the best color lasts only 20–30 minutes.',
        ],
      },
      {
        heading: 'Late afternoon is the strong second choice',
        paragraphs: [
          'About an hour before sunset, the light turns warm again and the marble takes on a softer glow than the harsh white of midday. It\'s a good backup if an early start isn\'t realistic, though the crowds are heavier than at sunrise since day-trippers from Delhi tend to arrive by early afternoon.',
        ],
      },
      {
        heading: 'What to avoid: midday',
        paragraphs: [
          'Between roughly 11 AM and 3 PM the sun is directly overhead, which flattens the marble\'s texture, washes out the dome in harsh white light, and creates unflattering shadows under eyes and chins in portraits. It\'s also when the complex is most crowded and, in summer, uncomfortably hot.',
        ],
      },
      {
        heading: 'Best months of the year',
        list: [
          'October to March — cool, clear air, best overall visibility and comfort',
          'November to February — occasional morning mist can add a dreamy, cinematic look to sunrise shots',
          'April to June — very hot (up to 45°C/113°F) but skies are usually clear; shoot sunrise only',
          'July to September (monsoon) — dramatic clouds and rain-washed marble, but visibility can be unpredictable',
        ],
      },
      {
        heading: 'One thing to plan around',
        paragraphs: [
          'The Taj Mahal is closed to visitors every Friday for prayers at the mosque inside the complex, so never schedule a shoot on a Friday.',
        ],
      },
    ],
  },
  {
    slug: 'what-to-wear-taj-mahal-photoshoot',
    title: 'What to Wear for a Taj Mahal Photoshoot: Outfit Guide',
    excerpt:
      'Your outfit choice matters against the white marble backdrop. Discover the best colors, fabrics, and styles that photograph beautifully at the Taj Mahal.',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=800&auto=format&fit=crop',
    date: '2025-02-10',
    readTime: '6 min read',
    category: 'Style Guide',
    sections: [
      {
        paragraphs: [
          'The Taj Mahal\'s white marble is a stunning backdrop, but it\'s also unforgiving — it photographs best when your outfit creates contrast against it rather than blending in.',
        ],
      },
      {
        heading: 'Colors that pop',
        list: [
          'Red and maroon — the classic choice, reads as bold and rich against white marble',
          'Emerald and forest green — striking without being overpowering',
          'Royal blue and cobalt — photographs beautifully in both harsh and soft light',
          'Mustard and gold — echoes the warm sunrise tones of the marble itself',
          'Blush pink and coral — softer, romantic option that still stands out',
        ],
      },
      {
        heading: 'Colors to avoid',
        paragraphs: [
          'Pure white and cream outfits blend directly into the marble and tend to look washed out or overexposed in photos, especially in bright midday light. Very pale pastels have the same problem to a lesser degree.',
        ],
      },
      {
        heading: 'Fabric matters as much as color',
        paragraphs: [
          'Flowy fabrics — sarees, lehengas, maxi dresses, dupattas and flowing gowns — add movement to photos, especially with the light morning breeze near the gardens. Stiff, structured fabrics tend to look static by comparison.',
        ],
      },
      {
        heading: 'Practical tips',
        list: [
          'Wear comfortable closed shoes — the complex covers a large area and involves walking on stone and marble surfaces',
          'Avoid heavy makeup that can look shiny or melt in the heat, especially for sunrise sessions that run into warmer late-morning light',
          'For couple and pre-wedding shoots, coordinate colors rather than matching exactly — complementary tones photograph better than identical outfits',
          'Bring a light jacket or shawl for sunrise sessions between November and February, when early mornings can be cold',
        ],
      },
    ],
  },
  {
    slug: 'taj-mahal-photography-rules-2025',
    title: 'Taj Mahal Photography Rules: What Is and Isn\'t Allowed',
    excerpt:
      'A definitive guide to photography regulations at the Taj Mahal. Learn about permit requirements, prohibited items, restricted zones, and how to avoid security issues.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop',
    date: '2025-03-05',
    readTime: '10 min read',
    category: 'Travel Guide',
    sections: [
      {
        paragraphs: [
          'The Taj Mahal is a UNESCO World Heritage Site and a protected monument under the Archaeological Survey of India (ASI), so photography inside its grounds is governed by clear rules. Here is exactly what\'s allowed, what isn\'t, and why hiring a licensed photographer avoids the most common problems visitors run into.',
        ],
      },
      {
        heading: 'Where photography is allowed',
        list: [
          'Gardens and lawns — freely allowed',
          'Near the reflecting pool and the elevated marble platform — freely allowed',
          'Exterior of the mausoleum, including close-up shots of the dome and minarets — freely allowed',
          'The mosque (west) and the guest house (jawab, east) that flank the main mausoleum — generally allowed',
        ],
      },
      {
        heading: 'Where photography is prohibited',
        paragraphs: [
          'Photography is strictly banned inside the main mausoleum, where the cenotaphs of Shah Jahan and Mumtaz Mahal are located. This is actively enforced by security guards stationed at the entrance, and phones/cameras must be put away before entering.',
        ],
      },
      {
        heading: 'Do you need a permit?',
        paragraphs: [
          'Tourists can bring smartphones and basic point-and-shoot cameras without any permit. Professional photography — meaning tripods, monopods, multiple lenses, large camera bags, or lighting equipment — requires a government-issued permit from the Ministry of Tourism. Security checks bags at the gate, and unlicensed photographers carrying this kind of equipment are turned away or have gear confiscated.',
        ],
      },
      {
        heading: 'Items prohibited at the gate',
        list: [
          'Tripods and monopods',
          'Drones and RC devices (banned across the entire complex, not just the monument)',
          'Food and tobacco products',
          'Knives and sharp objects',
          'Books and large bags',
          'Wireless speakers and audio devices',
          'Professional lighting equipment (without a permit)',
          'Selfie sticks (restricted at peak times)',
        ],
      },
      {
        heading: 'Entry basics',
        list: [
          'Open sunrise to sunset, approximately 6:00 AM–6:30 PM',
          'Closed every Friday for mosque prayers',
          'Foreign tourist entry fee: roughly ₹1,100–1,300 (~$13–15 USD), plus ₹200 for mausoleum entry',
          'Indian citizen entry fee: ₹50, plus ₹200 for mausoleum entry',
          'Two gates: East Gate and West Gate — East Gate is recommended for sunrise sessions',
        ],
      },
      {
        heading: 'Why hire a licensed photographer',
        paragraphs: [
          'A government-licensed photographer carries an official ID badge issued by the Ministry of Tourism, which lets them bring professional camera bodies, multiple lenses and a tripod through security without issue. Many unauthorized photographers approach tourists outside the gates, but they risk being stopped at security with your booking mid-shoot — always verify a license badge before booking.',
        ],
      },
    ],
  },
  {
    slug: 'pre-wedding-shoot-taj-mahal-planning',
    title: 'Planning a Pre-Wedding Shoot at the Taj Mahal',
    excerpt:
      'Everything couples need to know about planning a pre-wedding or engagement photoshoot at the Taj Mahal, from permits to poses to the perfect timeline.',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop',
    date: '2025-04-20',
    readTime: '7 min read',
    category: 'Pre-Wedding',
    sections: [
      {
        paragraphs: [
          'The Taj Mahal was built by Emperor Shah Jahan as a monument to his love for Mumtaz Mahal, which makes it one of the most symbolically fitting pre-wedding and engagement photoshoot locations in the world. Here\'s how to plan one properly.',
        ],
      },
      {
        heading: 'Book 2–3 weeks ahead in peak season',
        paragraphs: [
          'Photography permits limit licensed photographers to a maximum of two shoots per day (sunrise and sunset), so slots fill up fast during peak season (October–March). Book well ahead if you have a specific date in mind, especially for weekends.',
        ],
      },
      {
        heading: 'Pick sunrise for the best light — and the fewest strangers in frame',
        paragraphs: [
          'Beyond the golden light, sunrise sessions mean far fewer tourists walking through your shots at the reflecting pool and the main platform. A typical pre-wedding session runs 2+ hours, which is enough time to cover multiple angles: the classic front-on shot, side profiles from the gardens, and closer portrait work near the marble jali screens.',
        ],
      },
      {
        heading: 'What a good pre-wedding package should include',
        list: [
          '100+ high-resolution edited photos as a digital gallery',
          'A set of printed photographs (physical keepsakes, not just digital files)',
          'A short cinematic video — even 30 seconds of motion footage adds a lot to how the day is remembered',
          'Posing direction — most couples aren\'t professional models, and a good photographer directs poses rather than just clicking',
        ],
      },
      {
        heading: 'Outfit coordination',
        paragraphs: [
          'Coordinate rather than match — complementary colors (e.g. one partner in maroon, the other in deep gold) photograph better than identical outfits. Avoid white or cream, which blends into the marble. See our outfit guide for a full breakdown of colors that work best.',
        ],
      },
      {
        heading: 'The day-of timeline',
        list: [
          'Arrive at the gate 15–20 minutes before your scheduled entry to clear security with camera gear',
          'First 30 minutes: wide shots with the monument in full frame while the light is best',
          'Next hour: closer portraits, candid walking shots, and detail shots (rings, hands, fabric)',
          'Final 30 minutes: cover-up shots near the mosque or gardens as the crowd starts building',
        ],
      },
    ],
  },
  {
    slug: 'agra-beyond-taj-mahal-photo-locations',
    title: '5 Stunning Photo Locations in Agra Beyond the Taj Mahal',
    excerpt:
      'Discover Agra Fort, Mehtab Bagh, Itimad-ud-Daulah, and other magnificent locations that complement your Taj Mahal photography experience.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop',
    date: '2025-05-12',
    readTime: '9 min read',
    category: 'Travel Guide',
    sections: [
      {
        paragraphs: [
          'Agra has far more to photograph than the Taj Mahal alone. If you\'re already making the trip, these five locations are worth building into your itinerary — several pair naturally with a Taj Mahal session as part of a full-day or heritage-trail package.',
        ],
      },
      {
        heading: '1. Agra Fort',
        paragraphs: [
          'A UNESCO World Heritage Site in its own right, Agra Fort is a massive red sandstone Mughal fortress. Photography is allowed throughout most of the complex, including the Diwan-i-Khas, the Sheesh Mahal exteriors, and Musamman Burj — the tower where Shah Jahan was imprisoned by his son, with a balcony that frames a distant view of the Taj Mahal across the river.',
        ],
      },
      {
        heading: '2. Mehtab Bagh',
        paragraphs: [
          'A garden complex directly across the Yamuna River from the Taj Mahal, Mehtab Bagh gives you the monument\'s only unobstructed rear view. It\'s especially popular for sunset shots, since the Taj faces east and the light works differently from this angle than it does from the main gardens.',
        ],
      },
      {
        heading: '3. Itimad-ud-Daulah ("Baby Taj")',
        paragraphs: [
          'Often called the "Baby Taj," this smaller marble tomb predates the Taj Mahal and is considered a design precursor to it — many of the same inlay techniques (pietra dura) appear here first. It\'s far less crowded, which makes it a good option for detailed macro shots of the marble inlay work.',
        ],
      },
      {
        heading: '4. Fatehpur Sikri',
        paragraphs: [
          'A former Mughal capital about 40 km from Agra, Fatehpur Sikri is a well-preserved red sandstone city with dramatic courtyards, the Buland Darwaza (one of the largest gateways in the world), and the Panch Mahal. It requires a half-day trip but rewards it with architecture unlike anything in central Agra.',
        ],
      },
      {
        heading: '5. Sikandra (Akbar\'s Tomb)',
        paragraphs: [
          'The tomb of Emperor Akbar blends Hindu, Islamic, Christian and Jain architectural elements — a departure from the pure Mughal-Persian style of the Taj Mahal. Its symmetrical gardens and gateway are quieter and less touristy, good for a change of pace in a multi-location shoot.',
        ],
      },
    ],
  },
  {
    slug: 'taj-mahal-camera-settings-tips',
    title: 'Camera Settings for Taj Mahal Photography: Pro Tips',
    excerpt:
      'Professional camera settings recommendations for photographing the Taj Mahal in different lighting conditions, from sunrise golden hour to harsh midday light.',
    image: 'https://images.unsplash.com/photo-1514222288957-49a4653e1073?q=80&w=800&auto=format&fit=crop',
    date: '2025-06-18',
    readTime: '11 min read',
    category: 'Photography Tips',
    sections: [
      {
        paragraphs: [
          'These are the settings and techniques that work best for shooting the Taj Mahal in the lighting conditions you\'re most likely to encounter. Adjust to your specific camera, but the underlying logic holds across brands.',
        ],
      },
      {
        heading: 'Sunrise / golden hour',
        list: [
          'Aperture: f/8–f/11 for sharp architectural detail across the whole frame',
          'ISO: 100–400 — there\'s usually enough light without needing to push ISO higher',
          'Shutter speed: 1/125s or faster for handheld shots; use a remote or 2-second timer if permitted on a tripod for anything slower',
          'White balance: daylight or slightly warm — avoid auto white balance, which can over-correct the pink/gold tones and make them look duller',
          'Consider exposure bracketing (3 shots at different exposures) for the marble against a bright sky — HDR blending recovers detail in both without losing the sky',
        ],
      },
      {
        heading: 'Midday / harsh light',
        list: [
          'Aperture: f/11–f/16 to control the intensity of direct light and avoid blown highlights on the white marble',
          'Use a lens hood or angle away from direct flare — the marble\'s reflectivity makes lens flare more likely at midday',
          'Consider a polarizing filter — it cuts glare off the marble surface and deepens the blue of the sky, which otherwise looks washed out at midday',
          'For portraits, look for the shaded side of a structure or use fill flash to avoid harsh shadows under the eyes',
        ],
      },
      {
        heading: 'Sunset / silhouette shots',
        list: [
          'Meter for the sky, not the subject, to properly expose a silhouette',
          'Aperture: f/8–f/11, ISO 100–200',
          'Underexpose slightly (-0.3 to -0.7 EV) to deepen the silhouette effect and saturate sunset colors',
        ],
      },
      {
        heading: 'Composition tips specific to the Taj Mahal',
        list: [
          'The reflecting pool gives a symmetrical mirror shot — get low to the ground for maximum reflection',
          'Shoot through the marble jali (lattice screens) for framed detail shots',
          'Include a person for scale in wide shots — it\'s easy to lose the monument\'s actual size in a photo without a reference point',
          'A 24–70mm zoom covers most of what you\'ll need; a wider lens (16–35mm) helps for full-monument shots close to the platform',
        ],
      },
      {
        heading: 'A note on equipment and permits',
        paragraphs: [
          'Tripods, external flashes and multiple lenses require a government photography permit to bring past security. If you\'re not the permit holder, plan your shots around handheld techniques and available light — or book a licensed photographer who can bring the full kit in for you.',
        ],
      },
    ],
  },
];

export function blogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
