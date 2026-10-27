import { planById } from './plans';

/**
 * The blog.
 *
 * It existed as six teaser cards that linked nowhere — six high-intent
 * queries, no pages to answer them. These are the articles behind those
 * cards: written to answer the question in the first paragraph, because
 * that is what gets quoted in an AI answer or a featured snippet, with the
 * detail underneath for the reader who stays.
 *
 * Every post names the packages it relates to, so a reader who arrives from
 * a search for "what to wear" leaves on a booking page rather than the back
 * button.
 */

export type Section = {
  heading: string;
  /** Paragraphs. */
  body?: string[];
  /** Rendered as a checked list under the paragraphs. */
  list?: string[];
  /** Rendered as a two-column table. */
  table?: { head: [string, string]; rows: [string, string][] };
};

export type BlogPost = {
  slug: string;
  title: string;
  /** Shown on the card and used as the meta description. */
  excerpt: string;
  /** The direct answer, first thing on the page — the snippet candidate. */
  answer: string;
  published: string;
  updated: string;
  readingMinutes: number;
  image: string;
  imageAlt: string;
  category: 'Planning' | 'Rules & permits' | 'Technique' | 'Locations';
  keywords: string[];
  /** Packages this article should send a reader to. */
  planIds: string[];
  sections: Section[];
  faqs: { question: string; answer: string }[];
};

export const POSTS: BlogPost[] = [
  {
    slug: 'taj-mahal-photography-permit',
    title: 'Taj Mahal Photography Permit: What You Actually Need in 2026',
    excerpt:
      'Who needs a permit, what it costs, what equipment is refused at the gate, and the one rule that surprises almost every couple.',
    answer:
      'Casual photography with a phone or a small camera needs no permit at the Taj Mahal. A permit issued by the Ministry of Tourism is required to bring professional equipment — tripods, external flash, multiple lenses — through security, and only a licensed photographer can hold one. Photography is never permitted inside the main mausoleum chamber, and a guide is not allowed to accompany a photographer inside the complex.',
    published: '2026-01-14',
    updated: '2026-10-21',
    readingMinutes: 6,
    image: '/photos/gallery/02.jpg',
    imageAlt: 'The Taj Mahal mirrored in the central reflecting pool at first light',
    category: 'Rules & permits',
    keywords: [
      'taj mahal photography permit',
      'taj mahal camera rules',
      'professional photography taj mahal',
      'tripod taj mahal',
      'taj mahal photo permission cost',
    ],
    planIds: ['sunrise', 'pre-wedding'],
    sections: [
      {
        heading: 'The line between a tourist and a professional',
        body: [
          'Security at the Taj Mahal does not care what you paid for your camera. It cares about shape. A body with one lens attached reads as a tourist. A tripod, a light stand, a flash head, or a bag of three lenses reads as a production, and a production needs paperwork.',
          'That distinction is why couples who arrive with a friend "who shoots weddings" are turned back at the gate while the family behind them walks in with the same camera. The friend is not refused for being good. They are refused for carrying the kit that makes them good.',
        ],
      },
      {
        heading: 'What the permit actually covers',
        list: [
          'Professional camera bodies and more than one lens',
          'Tripods and monopods inside the complex',
          'External flash and reflectors',
          'Working as a paid photographer rather than shooting your own trip',
        ],
        body: [
          'The permit is issued to the photographer, not to you. You cannot buy one at the gate on the morning, and there is no counter that sells them to visitors. Booking a licensed photographer is the only practical route for most guests, which is why the permit is included in every photography package on this site rather than billed separately.',
        ],
      },
      {
        heading: 'What is refused no matter who you are',
        list: [
          'Photography inside the main mausoleum chamber — no exceptions, licensed or not',
          'Drones anywhere over or near the complex',
          'Food, tobacco and large bags through security',
          'Commercial filming without a separate, much longer approval',
        ],
      },
      {
        heading: 'The rule that surprises people',
        body: [
          'Inside the Taj Mahal, a guide is not permitted alongside a photographer. Guests who book a guided tour and a photoshoot together often expect both people with them all morning, and that is not how the monument works.',
          'In practice it means your photographer takes you through the Taj itself, and your guide covers Agra Fort, Mehtab Bagh and Itmad-ud-Daulah, where both are allowed. It is worth knowing before you book rather than at the security line.',
        ],
      },
      {
        heading: 'Tickets are separate from the permit',
        table: {
          head: ['Ticket', 'Approximate cost'],
          rows: [
            ['Indian national', '₹50'],
            ['Foreign national', '₹1,300'],
            ['Main mausoleum entry (anyone)', '₹200'],
            ['Agra Fort, foreign national', '₹650'],
          ],
        },
        body: [
          'These are set by the Archaeological Survey of India and change without much notice, so treat them as a guide rather than a quote. The photography permit is a separate thing entirely and is not sold alongside a ticket.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need a permit to photograph the Taj Mahal?',
        answer:
          'Not for a phone or a single small camera. A Ministry of Tourism permit is required to bring professional equipment — tripods, external flash, multiple lenses — through security, and it is issued to licensed photographers rather than to visitors.',
      },
      {
        question: 'Can I bring a tripod into the Taj Mahal?',
        answer:
          'Only under a photography permit. Tripods are refused at security for ordinary visitors.',
      },
      {
        question: 'Can I photograph inside the Taj Mahal mausoleum?',
        answer:
          'No. Photography inside the main mausoleum chamber is prohibited for everyone, including licensed photographers with a permit.',
      },
      {
        question: 'How much does a Taj Mahal photography permit cost?',
        answer:
          'It is not sold to visitors, so there is no counter price. Booking a licensed photographer is the practical route — the permit is included in the package price rather than charged separately.',
      },
    ],
  },
  {
    slug: 'best-time-to-photograph-taj-mahal',
    title: 'The Best Time to Photograph the Taj Mahal, Month by Month',
    excerpt:
      'Sunrise beats every other hour of the day, and not by a small margin. Here is why, plus what each month actually looks like through a lens.',
    answer:
      'Sunrise is the best time to photograph the Taj Mahal. The marble takes warm colour for roughly forty minutes after the gates open, the crowds are a fraction of midday, and the light is soft enough to hold detail in both the white marble and the sky. October to March gives the clearest air; April and May are harsh and hot; July and August bring dramatic monsoon skies but unreliable mornings.',
    published: '2026-02-03',
    updated: '2026-10-21',
    readingMinutes: 7,
    image: '/photos/gallery/16.jpg',
    imageAlt: 'A guest in a red saree beside the reflecting pool at the Taj Mahal',
    category: 'Planning',
    keywords: [
      'best time to photograph taj mahal',
      'taj mahal sunrise',
      'taj mahal photography timings',
      'when to visit taj mahal for photos',
      'taj mahal weather by month',
    ],
    planIds: ['sunrise', 'pre-wedding'],
    sections: [
      {
        heading: 'Why sunrise is not just a nice idea',
        body: [
          'Three things happen at once in the first hour. The marble, which is flat and glaring at noon, picks up pink and gold and shows the inlay work that midday light destroys. The crowd that fills the central walkway by nine is still queuing outside. And the sun is low enough to light faces without forcing a choice between a blown-out sky and a dark subject.',
          'By ten in the morning you are fighting all three. The photographs are still of the Taj Mahal, but they are the photographs everyone else has.',
        ],
      },
      {
        heading: 'What each month gives you',
        table: {
          head: ['Months', 'What to expect'],
          rows: [
            ['October – November', 'The best of the year. Clear air after the monsoon, warm light, comfortable mornings.'],
            ['December – January', 'Beautiful light, but fog can hide the monument entirely until mid-morning. Build in a spare day if you can.'],
            ['February – March', 'Reliable and clear, gardens at their best. Busy, so sunrise matters more.'],
            ['April – June', 'Harsh light and real heat. Sunrise is not a preference here, it is the only sensible hour.'],
            ['July – September', 'Monsoon. Dramatic cloud and saturated greens when it breaks, washed-out mornings when it does not.'],
          ],
        },
      },
      {
        heading: 'Fog in winter is the one real risk',
        body: [
          'December and January mornings in Agra can open with fog thick enough that the monument is invisible from the gate. It usually lifts between nine and eleven. If your trip falls in those months and the photographs matter, give yourself two mornings rather than one — the second is almost always clear, and nobody has ever regretted the spare day.',
        ],
      },
      {
        heading: 'Sunset and the fifth option most people miss',
        body: [
          'Sunset inside the complex is warm but crowded, and you are shooting into the light for the classic view. Mehtab Bagh, the garden directly across the Yamuna, faces the monument from behind and catches the last light on the dome with almost nobody in the frame.',
          'There is also full-moon night viewing, open on five nights each month and ticketed separately. It is a remarkable thing to see and a difficult thing to photograph — long exposures only, no tripod without a permit.',
        ],
      },
      {
        heading: 'A practical sunrise timeline',
        list: [
          'Thirty minutes before sunrise: be at the East Gate, not leaving the hotel',
          'Gates open: straight to the central pool before the walkway fills',
          'First forty minutes: the colour you came for — this is the window',
          'After that: the platform, the gardens, the side angles, the detail',
        ],
      },
    ],
    faqs: [
      {
        question: 'What is the best time of day to photograph the Taj Mahal?',
        answer:
          'Sunrise. The marble takes warm colour for about forty minutes after the gates open, and the crowds are a fraction of what they are by mid-morning.',
      },
      {
        question: 'What is the best month to visit the Taj Mahal for photography?',
        answer:
          'October and November, for clear air after the monsoon and comfortable mornings. February and March are a close second.',
      },
      {
        question: 'Is the Taj Mahal foggy in winter?',
        answer:
          'Often, in December and January. Fog can hide the monument until mid-morning, so allow a spare day if your trip falls in those months.',
      },
      {
        question: 'Is the Taj Mahal closed on Fridays?',
        answer: 'Yes. The Taj Mahal is closed to visitors every Friday.',
      },
    ],
  },
  {
    slug: 'what-to-wear-taj-mahal-photoshoot',
    title: 'What to Wear for a Taj Mahal Photoshoot',
    excerpt:
      'The marble is white, the light is bright, and the walk is long. What photographs beautifully against the Taj Mahal, and what quietly ruins the frame.',
    answer:
      'Strong, saturated colour photographs best against the white marble of the Taj Mahal — deep red, mustard, emerald, royal blue. Avoid white and pale cream, which disappear into the monument, and avoid small busy prints, which turn to noise at a distance. Flowing fabric that catches movement is worth more in these photographs than any logo or embellishment.',
    published: '2026-03-11',
    updated: '2026-10-21',
    readingMinutes: 5,
    image: '/photos/gallery/07.jpg',
    imageAlt: 'A couple in traditional dress photographed in front of the Taj Mahal',
    category: 'Planning',
    keywords: [
      'what to wear taj mahal photoshoot',
      'taj mahal outfit ideas',
      'best colours to wear taj mahal',
      'taj mahal photoshoot dress',
      'saree taj mahal photos',
    ],
    planIds: ['pre-wedding', 'sunrise'],
    sections: [
      {
        heading: 'Colour is the whole decision',
        body: [
          'Everything behind you is white, and the sky in the morning is pale. Anything light you wear competes with that and loses — cream and white outfits read as a smudge against the marble, however beautiful they are in person.',
          'Saturated colour does the opposite. Red, mustard, emerald, royal blue and black all separate cleanly from the background, which is why they appear in almost every photograph on this site that people ask to recreate.',
        ],
      },
      {
        heading: 'What works, and why',
        list: [
          'Deep red or maroon — the most photographed choice at the Taj for a reason',
          'Mustard and ochre — warm, and beautiful against morning light',
          'Emerald, teal and royal blue — strong separation, no clash with the marble',
          'Flowing fabric: a dupatta, a long skirt, a saree pallu that catches wind',
          'One strong colour per person rather than two competing ones',
        ],
      },
      {
        heading: 'What to leave in the suitcase',
        list: [
          'White, ivory and pale cream — they vanish into the monument',
          'Small busy prints — they turn to visual noise beyond a few metres',
          'Large logos, which date a photograph instantly',
          'Brand-new shoes: the complex involves a long walk on marble and stone',
        ],
      },
      {
        heading: 'Practical things nobody mentions',
        body: [
          'Shoe covers are required on the marble platform, and they go over whatever you are wearing — so heels are a worse idea than they look. Mornings between November and February are genuinely cold before the sun is up, and a shawl that you can drop out of frame earns its place.',
          'Outfit changes happen outside the gates, not inside. If you are planning two looks, build the walk back into your timing rather than discovering it on the day.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What colour should I wear for a Taj Mahal photoshoot?',
        answer:
          'Strong saturated colour — deep red, mustard, emerald or royal blue. They separate cleanly from the white marble. Avoid white and pale cream, which disappear into the monument.',
      },
      {
        question: 'Can I change outfits at the Taj Mahal?',
        answer:
          'Not inside the complex. Outfit changes happen outside the gates, so plan the walk into your timing if you want more than one look.',
      },
      {
        question: 'Is there a dress code at the Taj Mahal?',
        answer:
          'There is no strict dress code, but it is a mausoleum and modest dress is appropriate. Shoe covers are required on the main marble platform.',
      },
    ],
  },
  {
    slug: 'pre-wedding-shoot-taj-mahal-planning',
    title: 'Planning a Pre-Wedding Shoot at the Taj Mahal',
    excerpt:
      'Permits, timing, outfit changes, and the realistic schedule for a couple who want the photographs without spending the whole day on them.',
    answer:
      'A pre-wedding shoot at the Taj Mahal takes a 2+ hour session starting before sunrise, a licensed photographer who holds the permit, and outfit changes planned outside the gates. Book the date at least two weeks ahead in peak season, allow a spare morning between December and February for fog, and expect the strongest frames in the first forty minutes after the gates open.',
    published: '2026-04-02',
    updated: '2026-10-21',
    readingMinutes: 6,
    image: '/photos/gallery/11.jpg',
    imageAlt: 'A couple silhouetted in the great gateway arch, reflected in the water below',
    category: 'Planning',
    keywords: [
      'pre wedding shoot taj mahal',
      'taj mahal pre wedding photography',
      'couple photoshoot taj mahal',
      'engagement shoot agra',
      'taj mahal pre wedding cost',
    ],
    planIds: ['pre-wedding', 'taj-agra-fort'],
    sections: [
      {
        heading: 'Start earlier than feels reasonable',
        body: [
          'Every good pre-wedding frame at the Taj Mahal happens in the first hour. That means being at the gate thirty minutes before sunrise, which means leaving your hotel in the dark, which means a 4:30am alarm in winter.',
          'Couples who treat this as negotiable end up with the same photographs as the day-trippers: flat light, a crowded walkway, and someone else in every frame.',
        ],
      },
      {
        heading: 'A schedule that actually works',
        table: {
          head: ['Time', 'What happens'],
          rows: [
            ['Sunrise − 40 min', 'Meet at the East Gate, security, straight in'],
            ['First 40 min', 'The reflecting pool and the central walkway while they are empty'],
            ['Next 40 min', 'The marble platform, the side arches, the detail work'],
            ['Final stretch', 'Gardens and candid frames as the light hardens'],
            ['After', 'Outfit change outside, then Agra Fort or Mehtab Bagh if booked'],
          ],
        },
      },
      {
        heading: 'What a permit does and does not buy you',
        body: [
          'The permit lets your photographer bring professional equipment through security. It does not buy privacy, it does not close the monument, and it does not allow photography inside the mausoleum chamber.',
          'It also does not let a guide walk with you inside the Taj Mahal — guides are not permitted alongside a photographer. If you want the history as well as the photographs, that part happens at Agra Fort or Mehtab Bagh.',
        ],
      },
      {
        heading: 'Weather, and the spare morning',
        body: [
          'Between December and February, fog can hide the monument until the middle of the morning. There is no way to plan around it except to hold a second morning in reserve. Couples who do almost never need it, and the ones who do not are the ones who tell the story afterwards.',
        ],
      },
      {
        heading: 'What you leave with',
        list: [
          'A 2+ hour session with a licensed photographer',
          '200+ high-resolution photographs from the morning',
          '30 edited photographs, the ones you choose',
          'A 30-second cinematic edit and reels for the way you post',
          'Delivery inside 48 to 72 hours, to a private gallery',
        ],
      },
    ],
    faqs: [
      {
        question: 'How much does a pre-wedding shoot at the Taj Mahal cost?',
        answer:
          'Our Couple & Pre-Wedding package starts from $199 USD for a 2+ hour session with 200+ photographs, 30 edited images and a 30-second cinematic video. The photography permit is included; monument tickets are separate.',
      },
      {
        question: 'How far in advance should I book a pre-wedding shoot?',
        answer:
          'At least two weeks in peak season, October to March. Only two photography permits are issued per day, so dates go before people expect.',
      },
      {
        question: 'Can we change outfits during the shoot?',
        answer:
          'Yes, but outside the gates — there is no changing facility inside the complex. Plan the walk back into your schedule.',
      },
    ],
  },
  {
    slug: 'agra-beyond-taj-mahal-photo-locations',
    title: 'Five Photo Locations in Agra That Are Not the Taj Mahal',
    excerpt:
      'Agra Fort, Mehtab Bagh, Itmad-ud-Daulah and two more — where to shoot when the monument is closed, crowded, or simply photographed already.',
    answer:
      'The strongest photography locations in Agra besides the Taj Mahal are Agra Fort for red sandstone colonnades and the balcony view of the Taj, Mehtab Bagh for sunset from across the river, Itmad-ud-Daulah for intricate marble inlay without crowds, Fatehpur Sikri for scale, and the Yamuna riverbank behind the Taj for the view most visitors never see.',
    published: '2026-05-20',
    updated: '2026-10-21',
    readingMinutes: 6,
    image: '/photos/gallery/04.jpg',
    imageAlt: 'A couple in the red sandstone colonnade at Agra Fort',
    category: 'Locations',
    keywords: [
      'photo locations agra',
      'agra fort photography',
      'mehtab bagh sunset',
      'itmad ud daulah baby taj',
      'things to photograph in agra',
    ],
    planIds: ['guided-photo-tour-small', 'taj-agra-fort', 'full-day'],
    sections: [
      {
        heading: 'Agra Fort — the colour the Taj does not have',
        body: [
          'Red sandstone against white marble is the whole reason Agra Fort photographs so differently. The colonnades throw long repeating shadows in the morning, the Diwan-i-Khas and Sheesh Mahal give you interiors, and from the eastern balconies you get the Taj Mahal at a distance, framed by arches.',
          'It is also open on Fridays, when the Taj Mahal is not.',
        ],
      },
      {
        heading: 'Mehtab Bagh — the sunset nobody is standing in',
        body: [
          'Directly across the Yamuna from the monument, this garden faces the Taj Mahal from behind and catches the last light on the dome. The crowd is a fraction of the main complex and the frame is clean. If you only add one location to a Taj Mahal morning, make it this one in the evening.',
        ],
      },
      {
        heading: 'Itmad-ud-Daulah — the Baby Taj',
        body: [
          'Smaller, older, and covered in inlay work finer than anything on the Taj Mahal itself. Barely any crowd, which means you can photograph architecture rather than people photographing architecture. The light is best mid-morning when it reaches into the carved screens.',
        ],
      },
      {
        heading: 'Fatehpur Sikri — if you have the day',
        body: [
          'Forty kilometres out, an entire abandoned Mughal city in red sandstone. It takes a half day to do properly and rewards a wide lens. Worth it on a full-day itinerary, not worth squeezing into a morning.',
        ],
      },
      {
        heading: 'The riverbank behind the Taj',
        body: [
          'The view from the Yamuna bank beside the monument is the one most visitors never see, because it is not inside the ticketed complex. Flat light early, warm light late, and the complete silhouette with the river in front of it.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where can I photograph the Taj Mahal from outside?',
        answer:
          'Mehtab Bagh, the garden directly across the Yamuna, gives the cleanest view from outside the complex — especially at sunset. The riverbank beside the monument is the other option.',
      },
      {
        question: 'What is open in Agra on a Friday?',
        answer:
          'Agra Fort, Mehtab Bagh, Itmad-ud-Daulah and Fatehpur Sikri are all open on Fridays. The Taj Mahal is closed.',
      },
      {
        question: 'Is Agra Fort worth photographing?',
        answer:
          'Yes. The red sandstone colonnades and the balcony view of the Taj Mahal make it the strongest location in Agra after the monument itself.',
      },
    ],
  },
  {
    slug: 'taj-mahal-camera-settings-tips',
    title: 'Camera Settings for the Taj Mahal: What Actually Matters',
    excerpt:
      'White marble against a bright sky breaks most automatic exposure. The settings that hold detail in both, through the morning.',
    answer:
      'Expose for the marble, not the scene. Automatic metering sees a bright subject against a bright sky and underexposes faces or blows out the monument. Shoot one stop under in the first light, use a mid aperture around f/8 for architecture and f/2.8 for portraits, keep ISO at base while the light allows, and shoot RAW — the dynamic range between white marble and a dawn sky is where JPEGs fall apart.',
    published: '2026-06-18',
    updated: '2026-10-21',
    readingMinutes: 5,
    image: '/photos/gallery/05.jpg',
    imageAlt: 'A couple photographed on the lawns with the Taj Mahal behind them',
    category: 'Technique',
    keywords: [
      'taj mahal camera settings',
      'how to photograph taj mahal',
      'taj mahal photography tips',
      'exposure white marble',
      'taj mahal raw settings',
    ],
    planIds: ['transport-guide', 'sunrise'],
    sections: [
      {
        heading: 'The exposure problem, stated plainly',
        body: [
          'A white marble building under a pale sky is close to the worst case for an automatic meter. The camera averages the scene, decides it is too bright, and pulls the exposure down — which leaves faces dark. Correct for the faces and the monument blows out instead.',
          'The fix is to decide which one you are protecting and expose for that deliberately. For architecture, protect the marble and lift the shadows later. For portraits, protect the face and let the sky go bright.',
        ],
      },
      {
        heading: 'A starting point for each hour',
        table: {
          head: ['When', 'Where to start'],
          rows: [
            ['Before sunrise', 'f/8, ISO 400–800, tripod or a steady rail, long exposure for the pool'],
            ['First light', 'f/5.6–f/8, ISO 200, exposure compensation −2/3 to protect the marble'],
            ['Golden hour portraits', 'f/2.8–f/4, ISO 100, meter on the face'],
            ['Mid-morning', 'f/8–f/11, ISO 100, polariser if you have one'],
          ],
        },
      },
      {
        heading: 'Three things that matter more than settings',
        list: [
          'Be there before the gates open — no setting recovers a crowded walkway',
          'Shoot RAW: the marble-to-sky range is where JPEG detail dies',
          'Watch the horizon, not the subject — the symmetry makes a tilt obvious',
        ],
      },
      {
        heading: 'If you are shooting it yourself',
        body: [
          'A phone or a single camera body needs no permission at all. The restriction is on professional kit: tripods, external flash and multiple lenses need a permit through security, and the permit goes to licensed photographers rather than visitors.',
          'If you want a car, a licensed guide and the freedom to shoot it all yourself, that is exactly what the Transport + Guide day is for — no photographer, bring your own camera.',
        ],
      },
    ],
    faqs: [
      {
        question: 'What camera settings should I use at the Taj Mahal?',
        answer:
          'Start around f/8, ISO 100–200 in daylight, and dial exposure compensation down about two-thirds of a stop to protect the white marble. Shoot RAW — the range between marble and sky is wider than a JPEG holds.',
      },
      {
        question: 'Can I take my own camera into the Taj Mahal?',
        answer:
          'Yes. A phone or a single camera body is fine without any permission. Tripods, external flash and multiple lenses need a photography permit.',
      },
      {
        question: 'Do I need a tripod at the Taj Mahal?',
        answer:
          'Only for long exposures before sunrise, and only with a permit — tripods are refused at security without one.',
      },
    ],
  },
  {
    slug: 'delhi-to-agra-day-trip-taj-mahal',
    title: 'Delhi to Agra in a Day: The Honest Version',
    excerpt:
      'A same-day Taj Mahal trip from Delhi is a sixteen-hour day. What it involves, what it costs, and when it is worth doing anyway.',
    answer:
      'A same-day Taj Mahal trip from Delhi means leaving around 2:30am, reaching Agra for sunrise, and returning to Delhi by early evening — roughly sixteen hours, of which four to five are driving each way on the Yamuna Expressway. It works if you want the monument at its best without moving hotels, and it is genuinely hard if you are jet-lagged.',
    published: '2026-07-09',
    updated: '2026-10-21',
    readingMinutes: 6,
    image: '/photos/gallery/15.jpg',
    imageAlt: 'A couple standing together at the end of the reflecting pool',
    category: 'Planning',
    keywords: [
      'delhi to agra day trip',
      'same day taj mahal tour from delhi',
      'taj mahal tour from delhi',
      'delhi agra distance',
      'yamuna expressway agra',
    ],
    planIds: ['sunrise-luxury-innova', 'sunrise-luxury-urbania', 'transport-guide'],
    sections: [
      {
        heading: 'The real shape of the day',
        table: {
          head: ['Time', 'Where you are'],
          rows: [
            ['02:30', 'Picked up in Delhi, Noida or Gurugram'],
            ['06:00', 'Agra, at the gate before sunrise'],
            ['06:00 – 09:00', 'The Taj Mahal in its best light, before the crowd'],
            ['09:30 – 13:00', 'Agra Fort, breakfast, Mehtab Bagh if there is time'],
            ['14:00', 'Back on the expressway'],
            ['19:00 – 20:00', 'Delhi'],
          ],
        },
      },
      {
        heading: 'Why so early is not negotiable',
        body: [
          'The drive is three and a half to four hours in good conditions on the Yamuna Expressway. Leaving at a civilised hour means arriving at ten, which means the flat light and the full walkway — the version of the Taj Mahal that disappoints people.',
          'The 2:30am start is what buys the morning. It is the entire point of the trip.',
        ],
      },
      {
        heading: 'What a managed day includes',
        list: [
          'A private vehicle with a chauffeur, Delhi to Agra and back',
          'A Ministry of Tourism licensed guide',
          'A licensed photographer at the monument',
          'Taj Mahal and Agra Fort tickets',
          'A golf cart inside the complex and a security escort past the queue',
        ],
      },
      {
        heading: 'When to stay the night instead',
        body: [
          'If you are arriving in India within a day or two, do not do this trip. Jet lag plus a 2:30am start produces photographs of people who look exactly as tired as they are.',
          'A night in Agra costs you a hotel and buys you a second sunrise, a relaxed Agra Fort, and Mehtab Bagh at sunset. For anyone travelling for the photographs rather than the tick, it is the better call.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How long is the drive from Delhi to Agra?',
        answer:
          'Three and a half to four hours each way on the Yamuna Expressway in good conditions, which is why a same-day trip starts around 2:30am.',
      },
      {
        question: 'Is a same-day Taj Mahal trip from Delhi worth it?',
        answer:
          'Yes if you want the monument at sunrise without changing hotels, and you are not freshly jet-lagged. It is roughly a sixteen-hour day.',
      },
      {
        question: 'How much does a Delhi to Agra day tour cost?',
        answer:
          'Our same-day Sunrise Luxury Tour starts from $650 USD in a private Innova for up to 6 guests, including vehicle, guide, photographer, monument tickets, golf cart and skip-the-line escort.',
      },
    ],
  },
  {
    slug: 'taj-mahal-photographer-cost',
    title: 'How Much Does a Taj Mahal Photographer Cost in 2026?',
    excerpt:
      'Real numbers for every kind of shoot, what is bundled into them, what is charged separately, and the three ways a cheap quote gets expensive at the gate.',
    answer:
      'A professional photographer at the Taj Mahal costs between $89 and $499 USD depending on the package. A two-hour sunrise session is $120 and includes 120+ edited photos; a couple or pre-wedding session starts at $199; a guide and photographer together start at $89 for up to five guests; a full day covering the Taj Mahal, Agra Fort and the sunset view is $499. Monument entry tickets are always separate and are set by the Archaeological Survey of India, not by the photographer.',
    published: '2026-02-02',
    updated: '2026-10-22',
    readingMinutes: 7,
    image: '/photos/gallery/03.jpg',
    imageAlt: 'A couple photographed on the marble plinth of the Taj Mahal in early morning light',
    category: 'Planning',
    keywords: [
      'taj mahal photographer cost',
      'taj mahal photoshoot price',
      'how much is a photographer at the taj mahal',
      'agra photographer rates',
      'taj mahal photography package price',
    ],
    planIds: ['sunrise', 'pre-wedding', 'guided-photo-tour-small'],
    sections: [
      {
        heading: 'What each package actually costs',
        body: [
          'These are the published rates, the same ones quoted on WhatsApp. Prices are in US dollars because that is what most guests ask in; the rupee amount is shown on every page at the current rate and you can pay in either.',
        ],
        table: {
          head: ['Package', 'Price and what you get'],
          rows: [
            ['Sunrise session · 1.5–2 hours', '$120 — 120+ high-resolution photos, 3–5 reels, photographer meets you at your hotel'],
            ['Couple / pre-wedding · 2+ hours', 'From $199 — 200+ photos, 30 edited to your choice, a cinematic video'],
            ['Guide + photographer · 1–5 guests', 'From $89 — licensed guide and photographer, 40 photos, 5 reels, half day'],
            ['Guide + photographer · 6–12 guests', 'From $119 — 60 photos, 7 reels, group and individual portraits'],
            ['Transport + guide, no photography', 'From $99 — private A/C car, driver and licensed guide for the day'],
            ['Taj Mahal + Agra Fort · 5 hours', '$399 — both UNESCO sites, 250+ photos, transport included'],
            ['Full day Agra · 8–10 hours', '$499 — Taj Mahal, Agra Fort and the back-side sunset, 350+ photos'],
          ],
        },
      },
      {
        heading: 'What is included in the fee',
        body: [
          'Every photography package includes the thing that is hardest to get: a photographer who holds the Ministry of Tourism permit, which is what lets professional equipment through the security gate at all. Without it, a tripod and a second lens are turned back at the X-ray belt regardless of who is carrying them.',
        ],
        list: [
          'The photographer’s time for the stated duration',
          'The official photography permit and the equipment that comes with it',
          'Editing, and delivery of the full set within 48 to 72 hours',
          'Vertical crops for reels, because that is what most guests post first',
          'Posing direction throughout — nobody is left to work out what to do with their hands',
        ],
      },
      {
        heading: 'What is charged separately, and why',
        body: [
          'Monument entry tickets are not in the price, and no honest operator includes them in a flat fee: the Archaeological Survey of India charges different amounts for Indian nationals, SAARC nationals and everyone else, and a second ticket is needed to step onto the main mausoleum plinth. Bundling them would mean either overcharging Indian guests or underquoting foreign ones.',
          'Transport is separate on the sunrise session specifically. The photographer meets you at your hotel reception and you travel the short distance to the gate yourself — most hotels in Taj Ganj are within walking distance or a few minutes by auto. Packages that do include a vehicle say so.',
        ],
        list: [
          'Taj Mahal entry ticket — rate depends on your nationality, confirmed before booking',
          'The additional mausoleum ticket, if you want photographs on the plinth',
          'Agra Fort and other monument tickets on multi-site packages',
          'A vehicle, on the sunrise session only',
        ],
      },
      {
        heading: 'How a cheap quote gets expensive',
        body: [
          'Agra has no shortage of $20 offers outside the gate. They cost more than they look, in three predictable ways.',
        ],
        list: [
          'No permit: the equipment is refused at security, so you get phone photos at a professional price, or the shoot happens outside the complex entirely',
          'Watermarked previews: the quote covers a handful of images and the full-resolution set is sold afterwards, usually at more than the original fee',
          'Ticket markup: the entry ticket is "included" at two or three times the ASI rate, which is where the margin was all along',
        ],
      },
      {
        heading: 'What a fair booking looks like',
        body: [
          'Twenty per cent confirms a date and the balance is paid after the shoot, in cash or by transfer, in dollars or rupees. Before you pay anything, you should have the photographer’s licence number, the exact ticket amount for your nationality, and a written confirmation of how many photographs you will receive and when.',
          'If any of those three is vague, that is the thing to resolve before the deposit, not after.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is the price per person or for the whole group?',
        answer:
          'For the whole booking, not per person. A sunrise session at $120 covers a solo traveller, a couple or a family at the same price. The guide-and-photographer packages change at six guests because group portraits need more time and more coverage.',
      },
      {
        question: 'Do you charge more for a pre-wedding shoot than a regular one?',
        answer:
          'Yes, and the reason is the deliverable, not the occasion: a couple session runs longer, includes 30 photographs edited to your own selection and a cinematic video, and usually covers a second outfit change.',
      },
      {
        question: 'Can I pay in Indian rupees?',
        answer:
          'Yes. Every price on this site can be shown in rupees at the current rate, and you can pay by UPI, bank transfer or cash in either currency.',
      },
      {
        question: 'Is there a cheaper option if I only want a few photos?',
        answer:
          'The sunrise session at $120 is the entry point, and it is already the lowest-cost way to get permitted professional coverage inside the complex. Below that, the honest answer is a phone and good light — which is what the timing guide on this site is for.',
      },
    ],
  },
  {
    slug: 'taj-mahal-tickets-timings-gates',
    title: 'Taj Mahal Tickets, Timings and Gates: The Practical Guide',
    excerpt:
      'Ticket prices by nationality, the real opening time at sunrise, which of the three gates to use, and the extra ticket most visitors do not know about.',
    answer:
      'The Taj Mahal opens about 40 minutes before sunrise and closes at sunset, and is closed every Friday. Tickets are ₹50 for Indian nationals, ₹540 for SAARC and BIMSTEC nationals and ₹1,100 for other foreign nationals, plus ₹200 for the separate ticket that allows you onto the main mausoleum plinth. The East Gate has the shortest sunrise queue; the South Gate does not open until 8 a.m.',
    published: '2026-02-20',
    updated: '2026-10-22',
    readingMinutes: 6,
    image: '/photos/gallery/06.jpg',
    imageAlt: 'The great gateway of the Taj Mahal complex with the mausoleum framed in its arch',
    category: 'Rules & permits',
    keywords: [
      'taj mahal ticket price',
      'taj mahal opening time sunrise',
      'taj mahal east gate or west gate',
      'taj mahal closed friday',
      'taj mahal mausoleum ticket',
    ],
    planIds: ['sunrise', 'transport-guide'],
    sections: [
      {
        heading: 'Ticket prices, and the one most people miss',
        body: [
          'There are two tickets, not one. The entry ticket admits you to the complex and the gardens. A second ₹200 ticket admits you onto the raised marble plinth and into the mausoleum itself — and that is where most of the photographs you have seen were taken.',
        ],
        table: {
          head: ['Visitor', 'Entry ticket'],
          rows: [
            ['Indian nationals', '₹50'],
            ['SAARC and BIMSTEC nationals', '₹540'],
            ['Other foreign nationals', '₹1,100'],
            ['Children under 15', 'Free (ID may be asked for)'],
            ['Mausoleum plinth, any nationality', '₹200 extra'],
          ],
        },
      },
      {
        heading: 'What time it really opens',
        body: [
          'Published hours are "sunrise to sunset", which in practice means the gates open roughly 40 minutes before sunrise — between 5:15 and 6:15 depending on the month — and close at sunset. There is no fixed clock time, and it moves through the year.',
          'The gate opening is not the moment to arrive. Security, the bag check and the walk through the forecourt take time, and the light that is worth being there for lasts about forty minutes. Arriving as the gate opens means you are inside for it; arriving at the published sunrise time means you are queuing through it.',
        ],
      },
      {
        heading: 'Friday, and the other closures',
        body: [
          'The complex is closed all day every Friday for prayers at the mosque inside, with no exceptions for ticket holders. Night viewing is a separate arrangement available on five nights around each full moon, with tickets sold in advance from the ASI office and no tripods permitted.',
          'If your trip includes only one morning in Agra and it falls on a Friday, the practical options are Mehtab Bagh across the river, which looks directly at the monument, or Agra Fort, which has the view from Khas Mahal.',
        ],
      },
      {
        heading: 'Which gate to use',
        body: [
          'Three gates serve the complex, and they are not interchangeable.',
        ],
        list: [
          'East Gate — the shortest sunrise queue and the one to use if you are staying in Taj Ganj. Buy the ticket at the counter near Shilpgram, not at the gate itself',
          'West Gate — the busiest, with the longest queue by 7 a.m.; fine later in the day',
          'South Gate — the closest to the Taj Ganj hotels but it does not open until 8 a.m., which rules it out for sunrise',
        ],
      },
      {
        heading: 'What security will not let through',
        list: [
          'Tripods, drones and external flash — refused for visitors; only a permit holder may bring professional equipment',
          'Food, large bags, and anything sharp, including the tiny scissors on a penknife',
          'Books, notebooks and playing cards, oddly enough — leave them in the car',
          'A phone and one camera are fine, and a bottle of water is allowed',
        ],
        body: [
          'There is a cloakroom at each gate, and it is free, but the queue for it at 6 a.m. is longer than the queue for security. Carry as little as you can.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I buy Taj Mahal tickets online?',
        answer:
          'Yes, from the ASI’s own portal, and it saves the counter queue. Keep the QR code offline — the signal at the East Gate at 5:30 a.m. is unreliable.',
      },
      {
        question: 'How long is the ticket valid?',
        answer:
          'Three hours from entry. It is enough for an unhurried visit, and it is the reason a sunrise session is scheduled to finish before the main crowd arrives.',
      },
      {
        question: 'Is there a separate queue for foreign nationals?',
        answer:
          'Yes, at each gate, and it is usually faster. Ticket holders with the ₹1,100 ticket also get a bottle of water and shoe covers.',
      },
      {
        question: 'Do I need the ₹200 mausoleum ticket for photographs?',
        answer:
          'For photographs on the plinth, yes. Photography is not allowed inside the burial chamber itself under any ticket, but the plinth is where the architecture is at its best anyway.',
      },
    ],
  },
  {
    slug: 'best-photo-spots-taj-mahal',
    title: 'The Nine Best Photo Spots at the Taj Mahal, in Order',
    excerpt:
      'The exact positions worth your first hour, the order to walk them in, and which ones are empty at 6 a.m. and unusable by 8.',
    answer:
      'The nine positions worth shooting are, in the order to walk them: the Great Gate arch, the central reflecting pool, the Diana bench, the long side canal, the plinth steps, the marble inlay detail on the mausoleum wall, the mosque arches to the west, the jawab arches to the east, and the river-side wall behind the monument. Walking them in that order keeps you ahead of the crowd, which fills the central axis first.',
    published: '2026-03-08',
    updated: '2026-10-22',
    readingMinutes: 8,
    image: '/photos/gallery/09.jpg',
    imageAlt: 'The Taj Mahal seen through a side arch of the mosque at dawn',
    category: 'Locations',
    keywords: [
      'best photo spots taj mahal',
      'taj mahal diana bench',
      'where to take photos taj mahal',
      'taj mahal instagram spots',
      'taj mahal photo locations',
    ],
    planIds: ['sunrise', 'pre-wedding', 'guided-photo-tour-small'],
    sections: [
      {
        heading: 'Walk them in this order, not the obvious one',
        body: [
          'Almost everyone enters, walks straight down the central path and stops at the pool. Which means the central axis is the first place to fill and the last to clear. The order below runs slightly against the flow: it takes the crowded positions while they are still empty and leaves the quiet ones for later, when the light is harder but the frames are wider.',
        ],
        list: [
          '1. The Great Gate — stand inside the arch and let it frame the monument. Two minutes of work, and it is empty for the first ten minutes only',
          '2. The central reflecting pool — the symmetrical shot. Get it before 6:30 or not at all',
          '3. The Diana bench — the marble seat on the raised platform. A queue forms here by 7 a.m. and never shortens',
          '4. The long side canal — the same reflection from the side, with nobody in it, because the crowd stays on the axis',
          '5. The plinth steps — needs the ₹200 ticket; the scale of the building only reads from here',
          '6. The inlay detail — the pietra dura flowers on the wall, shot close. The one frame that proves you were actually there',
          '7. The mosque arches, west side — layered red sandstone arches with the white dome beyond. Best in the first hour, when the sun is behind it',
          '8. The jawab arches, east side — the mirror building, almost always empty, and better lit later in the morning',
          '9. The river wall behind the mausoleum — the Yamuna, the far bank, and no visitors at all',
        ],
      },
      {
        heading: 'What the crowd does, hour by hour',
        table: {
          head: ['Time', 'Where people are'],
          rows: [
            ['Gate opening to +20 min', 'Spread thin between gate and pool. Everything is available'],
            ['+20 to +50 min', 'Central axis and Diana bench filling; sides still clear'],
            ['7:00 to 8:00', 'Axis solid, bench queued, plinth busy. Work the arches'],
            ['After 8:00', 'Tour groups arrive. Only detail shots and the river wall still work'],
          ],
        },
      },
      {
        heading: 'Three spots outside the complex that are worth a morning',
        body: [
          'If you have a second day, or a Friday, the best frames are not inside at all.',
        ],
        list: [
          'Mehtab Bagh — directly across the river, the classic reflection at sunset, and the only place to photograph the monument with the Yamuna in front of it',
          'Agra Fort, from Khas Mahal — the view Shah Jahan had while imprisoned, with the monument small and far off across the bend',
          'A Taj Ganj rooftop — the dome over the rooftops at first light, and the frame that says Agra rather than postcard',
        ],
      },
      {
        heading: 'The one position that is not allowed',
        body: [
          'Inside the burial chamber, photography is prohibited — not discouraged, prohibited, and guards enforce it. The chamber is dim, the real tombs are in the crypt below and closed to visitors anyway, and the architecture that makes the building worth photographing is all on the outside. Put the camera away at the threshold and look up instead.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Where exactly is the Diana bench?',
        answer:
          'On the raised platform halfway down the central path, on the right-hand side as you face the monument — the marble seat where the Princess of Wales was photographed in 1992. It is the most queued-for position in the complex.',
      },
      {
        question: 'Can I use a tripod at any of these spots?',
        answer:
          'Not as a visitor. Tripods are refused at security; only a photographer holding the Ministry of Tourism permit may bring one in, which is one practical reason to book a permitted photographer rather than carry your own kit.',
      },
      {
        question: 'Which spot works best for a group photo?',
        answer:
          'The long side canal and the mosque arches. The central pool looks like the obvious choice but it is too narrow for more than four people before someone is cropped or someone else walks through the frame.',
      },
    ],
  },
  {
    slug: 'taj-mahal-drone-tripod-camera-rules',
    title: 'Drones, Tripods and GoPros at the Taj Mahal: What Is Allowed',
    excerpt:
      'A straight list of what passes security, what is confiscated, what needs a permit, and what carries a criminal penalty rather than a refusal.',
    answer:
      'Drones are completely banned at the Taj Mahal: the complex sits inside a no-fly zone and flying one is an offence, not merely a refused item. Tripods, monopods, external flash and professional lighting are refused at security for visitors and permitted only to a photographer holding a Ministry of Tourism permit. A phone, a single handheld camera and a GoPro without a stabiliser or pole are allowed, and photography is prohibited inside the main mausoleum chamber regardless of equipment.',
    published: '2026-03-26',
    updated: '2026-10-22',
    readingMinutes: 5,
    image: '/photos/gallery/12.jpg',
    imageAlt: 'Detail of the pietra dura inlay on the white marble wall of the Taj Mahal',
    category: 'Rules & permits',
    keywords: [
      'taj mahal drone rules',
      'tripod allowed taj mahal',
      'gopro taj mahal',
      'taj mahal camera rules',
      'professional camera taj mahal permit',
    ],
    planIds: ['sunrise', 'guided-photo-tour-small'],
    sections: [
      {
        heading: 'The list, without the hedging',
        table: {
          head: ['Equipment', 'Status'],
          rows: [
            ['Phone', 'Allowed'],
            ['One handheld camera, one lens', 'Allowed'],
            ['GoPro, handheld', 'Allowed without pole or gimbal'],
            ['Tripod or monopod', 'Refused at security; permit holders only'],
            ['External flash, LED panel, reflector', 'Refused at security; permit holders only'],
            ['Multiple lenses, camera bag', 'Usually refused; permit holders only'],
            ['Drone', 'Banned. No-fly zone — an offence, not a refusal'],
            ['Inside the mausoleum chamber', 'No photography, any equipment'],
          ],
        },
      },
      {
        heading: 'Why the drone rule is different in kind',
        body: [
          'A tripod at the X-ray belt is a refused item: you leave it in the cloakroom and collect it on the way out. A drone is not in that category. The airspace over and around the complex is restricted, and launching one there is treated as an offence under aviation and heritage rules, with the aircraft seized.',
          'Every aerial view of the Taj Mahal you have seen in the last decade is either archive footage, shot from across the river well outside the zone, or made under a specific government authorisation that is not available to visitors. There is no permit a tourist can buy for this.',
        ],
      },
      {
        heading: 'What the permit actually changes',
        body: [
          'The Ministry of Tourism photography permit is held by the photographer, not sold per visit, and it is what allows professional equipment through the gate. It does not override the two rules that apply to everyone: no photography inside the burial chamber, and no drones.',
          'It also has one consequence that surprises couples: inside the Taj Mahal, a guide is not permitted alongside a working photographer. If you book a guide and a photographer together, the guide meets you at the exit or accompanies you at Agra Fort and the other monuments instead.',
        ],
        list: [
          'Tripod, multiple lenses and lighting pass security',
          'The photographer knows which positions are permitted and which draw a guard',
          'No separate per-visit photography fee at the gate',
          'Still no drone, and still no photography in the chamber',
        ],
      },
      {
        heading: 'If you are shooting it yourself',
        list: [
          'Take one body and one lens — a 24–70mm covers everything except the inlay detail',
          'Leave the bag at the hotel, not the cloakroom; the cloakroom queue at dawn is longer than security',
          'Brace against the marble rather than carrying a monopod you will have to check in',
          'Shoot the arches in the first hour; the dynamic range after 8 a.m. is unkind to white marble',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I fly a drone from outside the complex and photograph the monument?',
        answer:
          'The restricted airspace extends beyond the walls, so launching from Mehtab Bagh or a nearby rooftop does not put you in the clear. Treat the whole area around the monument as a no-fly zone.',
      },
      {
        question: 'Will security really stop a small travel tripod?',
        answer:
          'Yes. Size is not the test — a tripod is a tripod, and it goes in the cloakroom. Gorillapods and phone tripods are refused on the same basis.',
      },
      {
        question: 'Is a GoPro on a selfie stick allowed?',
        answer:
          'The camera is fine; the stick is treated as a monopod and refused. Hand-held works, and so does a chest mount.',
      },
    ],
  },
  {
    slug: 'agra-one-day-itinerary',
    title: 'One Day in Agra: A Photographer’s Itinerary, Hour by Hour',
    excerpt:
      'A schedule built around light rather than opening times — sunrise at the Taj, the fort when the walls go warm, and the river view at dusk.',
    answer:
      'A photographer’s day in Agra runs: Taj Mahal at gate opening for the first ninety minutes of light, breakfast while the midday haze builds, Agra Fort from 10 a.m. for the Khas Mahal view across to the monument, a break through the hard light of early afternoon, Itimad-ud-Daulah at 4 p.m. for the carved marble, and Mehtab Bagh across the river for sunset. The Taj Mahal is closed on Fridays, which reverses the whole order.',
    published: '2026-04-12',
    updated: '2026-10-22',
    readingMinutes: 7,
    image: '/photos/gallery/14.jpg',
    imageAlt: 'The red sandstone walls of Agra Fort in late morning light',
    category: 'Planning',
    keywords: [
      'one day in agra itinerary',
      'agra sightseeing plan',
      'agra fort and taj mahal same day',
      'mehtab bagh sunset',
      'agra photography itinerary',
    ],
    planIds: ['full-day', 'transport-guide', 'taj-agra-fort'],
    sections: [
      {
        heading: 'The schedule',
        table: {
          head: ['Time', 'Where, and why then'],
          rows: [
            ['Gate opening (05:15–06:15)', 'Taj Mahal, East Gate. The only hour the complex is both empty and beautifully lit'],
            ['07:45', 'Leave the complex. The light is gone and the groups have arrived'],
            ['08:00–09:30', 'Breakfast in Taj Ganj, ideally on a rooftop with the dome in view'],
            ['10:00–12:00', 'Agra Fort. Red sandstone takes hard light far better than white marble, and Khas Mahal looks across to the Taj'],
            ['12:00–15:30', 'Rest. Nothing photographs well in this window and the heat is real from March onwards'],
            ['16:00–17:00', 'Itimad-ud-Daulah, the "Baby Taj" — carved marble, almost no visitors'],
            ['17:30–sunset', 'Mehtab Bagh, across the river. The monument, the Yamuna and the only unobstructed sunset view'],
          ],
        },
      },
      {
        heading: 'Why not the other way round',
        body: [
          'The common plan — fort in the morning, Taj Mahal in the afternoon — gets both wrong. White marble at 3 p.m. is a flat, blown-out white; the same marble forty minutes after the gate opens is pink, then gold, then finally white. Red sandstone, meanwhile, holds up perfectly at 11 a.m. and looks dull at dawn.',
          'The schedule above is simply the order that gives each building the light it was built for.',
        ],
      },
      {
        heading: 'If your day is a Friday',
        body: [
          'The Taj Mahal is closed. The day still works, inverted: Agra Fort at opening, Itimad-ud-Daulah late morning, the Taj Mahal from Mehtab Bagh in the afternoon — which is a genuinely good frame rather than a consolation — and Sikandra, Akbar’s tomb, if there is time.',
        ],
      },
      {
        heading: 'Getting between the sites',
        body: [
          'Everything above is within twenty minutes of everything else, but an auto-rickshaw negotiated fresh at each stop costs more in time than in money, especially at midday. A private car with a driver for the day is around $99 with a licensed guide included, and the difference it makes is not the comfort — it is that the car waits, so a plan built around light survives contact with the day.',
        ],
      },
      {
        heading: 'If you only have one morning',
        list: [
          'Do the Taj Mahal at gate opening and nothing else before breakfast',
          'Add Agra Fort if your train leaves after 2 p.m.',
          'Skip the marble emporium stops that get added to cheap tours; they are commission stops, not sights',
          'Mehtab Bagh is worth more than a second monument if the weather is clear',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is one day enough for Agra?',
        answer:
          'For the three major monuments, yes, if the day is planned around the light rather than the map. Two days lets you have both a sunrise and a sunset at the Taj Mahal, which is the real argument for staying over.',
      },
      {
        question: 'Can I do this as a day trip from Delhi?',
        answer:
          'Yes, and it means leaving Delhi at about 2 a.m. to reach the gate for opening. The same-day Delhi tours exist for exactly this and include the vehicle, guide, photographer and tickets.',
      },
      {
        question: 'Which months are best?',
        answer:
          'October to March for clear mornings and workable temperatures. December and January bring fog that can hide the monument entirely until 9 a.m.; July to September give dramatic monsoon skies and the fewest crowds of the year.',
      },
    ],
  },
  {
    slug: 'taj-mahal-fog-monsoon-photography',
    title: 'Fog, Monsoon and Haze: Photographing the Taj Mahal in Bad Weather',
    excerpt:
      'What December fog actually does to a sunrise slot, why July is underrated, and how to get a frame worth keeping when the monument is barely visible.',
    answer:
      'Winter fog in Agra, heaviest from mid-December to late January, can hide the Taj Mahal completely until 9 or 10 a.m., which removes the sunrise window rather than softening it. Monsoon months from July to September bring dramatic cloud, saturated reflections and the lowest visitor numbers of the year, with rain usually falling in short bursts rather than all day. Both conditions are workable, but they call for different frames: fog rewards the gate arch and silhouettes, monsoon rewards wide skies and the reflecting pool.',
    published: '2026-05-04',
    updated: '2026-10-22',
    readingMinutes: 6,
    image: '/photos/gallery/17.jpg',
    imageAlt: 'The Taj Mahal softened by early morning mist above the gardens',
    category: 'Technique',
    keywords: [
      'taj mahal fog december',
      'taj mahal monsoon photography',
      'taj mahal winter visibility',
      'best weather taj mahal photos',
      'taj mahal in rain',
    ],
    planIds: ['sunrise', 'pre-wedding'],
    sections: [
      {
        heading: 'What each season actually gives you',
        table: {
          head: ['Season', 'Conditions and what to expect'],
          rows: [
            ['October–November', 'The best of the year: clear air, soft sunrise, comfortable temperature'],
            ['Mid-December–January', 'Heavy morning fog. The monument may be invisible until 9–10 a.m.'],
            ['February–March', 'Clear and warm, crowds heavy, light excellent'],
            ['April–June', 'Harsh, 40°C and up, white haze by 9 a.m. Shoot the first hour or not at all'],
            ['July–September', 'Monsoon: dramatic cloud, deep reflections, fewest visitors, short heavy showers'],
          ],
        },
      },
      {
        heading: 'Fog removes the slot rather than softening it',
        body: [
          'A light mist over the gardens is one of the best things that can happen to a photograph of this building. Agra’s December fog is a different phenomenon: dense enough that from the Great Gate the mausoleum is simply not there, and it often does not lift until mid-morning, by which time the light has gone flat.',
          'If your trip falls in that window, build in a second morning. Fog is local and inconsistent — the same week can give one blank morning and one of the clearest sunrises of the year.',
        ],
        list: [
          'Shoot the gate arch with the fog as the subject, not the obstruction',
          'Work close: the inlay detail, the marble, the mosque arches — none of them need the dome',
          'Wait rather than leave; the ticket is valid for three hours and fog can clear in twenty minutes',
          'Silhouettes of visitors on the central path read beautifully in flat white air',
        ],
      },
      {
        heading: 'Monsoon is the underrated season',
        body: [
          'Most guides tell you to avoid July to September. For photographs, that advice is backwards. Monsoon cloud gives the sky texture it does not have the rest of the year, rain leaves standing water that doubles as a reflecting surface, and the complex is as close to empty as it ever gets.',
          'Rain here arrives in short, heavy bursts rather than settling in for the day. A session planned for the gate opening usually finds a dry window; what it will not find is a queue.',
        ],
        list: [
          'Standing water on the marble paths reflects the whole building — the shot of the season',
          'Cloud acts as a softbox: portraits work later into the morning than in winter',
          'Carry a cloth, not an umbrella; umbrellas are awkward at security and useless in wind',
          'The gardens are green in a way they never are in February',
        ],
      },
      {
        heading: 'Summer haze, and why the first hour is the whole day',
        body: [
          'From April the issue is not cloud but dust and heat haze: by 9 a.m. the air itself is white, contrast collapses and the building reads as a pale shape against a pale sky. Nothing in post-processing recovers that.',
          'In those months the sunrise session is not a preference, it is the only usable light, and it is also the only part of the day when standing on marble is comfortable.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Should I cancel a sunrise shoot if the forecast says fog?',
        answer:
          'No — move it if you can, but do not cancel on a forecast. Agra fog is hyper-local and lifts unpredictably, and a session that starts blank often ends in the clearest light of the week. If your date is fixed, we reshape the route around close work and the gate arch.',
      },
      {
        question: 'Is the monsoon dangerous for camera gear?',
        answer:
          'Not with basic care. Showers are short, the risk is condensation rather than rain, and a plastic bag plus a cloth handles it. The permitted equipment we bring is weather-sealed.',
      },
      {
        question: 'Which single month would you choose?',
        answer:
          'October. The monsoon has just washed the dust out of the air, the heat has broken, the gardens are still green, and the morning haze has not yet become fog.',
      },
    ],
  },
  {
    slug: 'jaipur-to-agra-taj-mahal-photo-trip',
    title: 'Jaipur to Agra: Planning the Drive Around the Light',
    excerpt:
      'The 240km drive, what time you actually have to leave for a sunrise shoot, the two stops worth breaking the journey for, and when to stay the night instead.',
    answer:
      'Jaipur to Agra is about 240 kilometres and takes four to five hours by road on the Jaipur–Agra highway (NH21), or roughly two hours by train on the Gatimaan Express. To photograph the Taj Mahal at sunrise you cannot do it as a same-day drive from Jaipur: the gates open around 6 a.m. and leaving Jaipur at 1 a.m. buys you a sleepless shoot. Either drive in the afternoon before and stay one night in Agra, or take the morning train and shoot the following dawn.',
    published: '2026-06-02',
    updated: '2026-10-23',
    readingMinutes: 7,
    image: '/photos/gallery/04.jpg',
    imageAlt: 'A couple photographed in the red sandstone colonnade at Agra Fort',
    category: 'Planning',
    keywords: [
      'jaipur to agra',
      'jaipur to agra distance by road',
      'jaipur agra taj mahal trip',
      'golden triangle jaipur agra leg',
      'jaipur to agra photo tour',
    ],
    planIds: ['sunrise', 'transport-guide', 'taj-agra-fort'],
    sections: [
      {
        heading: 'The three ways to cover the distance',
        table: {
          head: ['Option', 'What it costs you'],
          rows: [
            ['Private car, 4–5 hours', 'Most flexible. You can stop at Abhaneri and Fatehpur Sikri on the way and arrive in Agra by evening'],
            ['Gatimaan Express, ~2 hours', 'Fastest and cheapest, but it runs Agra-bound in the morning, which puts you in Agra after the good light'],
            ['Bus, 5–6 hours', 'Cheapest. No stops you would want, and no control over arrival time'],
          ],
        },
        body: [
          'Most people reach for the train because it is quick, and then discover that the quick train arrives at the wrong end of the day. If you want the monument at first light, the drive the afternoon before is the plan that works.',
        ],
      },
      {
        heading: 'Two stops that earn the drive',
        list: [
          'Abhaneri — the Chand Baori stepwell, about 95km from Jaipur and a 20-minute detour. Thirteen storeys of geometry; mid-morning light rakes across the steps and gives them depth',
          'Fatehpur Sikri — Akbar’s abandoned capital, 40km before Agra. Red sandstone at late-afternoon takes colour the way white marble never does, and the Buland Darwaza is the widest frame on the route',
        ],
        body: [
          'Both are on the highway rather than off it, and together they add about two hours. Leaving Jaipur at 11 a.m. gets you to Fatehpur Sikri for the good afternoon light and into your Agra hotel by eight.',
        ],
      },
      {
        heading: 'What the next morning looks like',
        body: [
          'Your photographer meets you at your hotel reception before the gates open — Taj Ganj hotels are minutes from the East Gate. The session runs about two hours, finishing as the first tour groups arrive, and you are back at the hotel for breakfast by half past eight.',
          'If you are driving on to Delhi the same day, that still leaves the whole afternoon: Agra Fort at eleven, lunch, and on the road by two.',
        ],
      },
      {
        heading: 'When to stay a second night',
        body: [
          'One night is enough for a sunrise. A second night is worth it for one reason: Mehtab Bagh at sunset, across the river, which is the only place to photograph the monument with the Yamuna in front of it — and the only frame that cannot be taken from inside the complex.',
          'From December to January, a second morning also insures you against fog, which can hide the building entirely until nine.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Can I do Jaipur to Agra and back in one day?',
        answer:
          'You can, but not with a sunrise shoot in it. A same-day return means arriving around midday, photographing in flat white light and driving back tired. If the photographs matter, stay the night.',
      },
      {
        question: 'Is the Jaipur–Agra highway safe to drive at night?',
        answer:
          'It is a good road, but night driving in this region means unlit trucks and stray cattle. We schedule arrivals before dark, and the same-day Delhi tours exist precisely so nobody has to drive at 2 a.m.',
      },
      {
        question: 'Do you cover Jaipur as well?',
        answer:
          'Our licence and permit are for Agra, so the photography packages are Agra-based. We arrange the car and a licensed guide for the Jaipur leg when you want the whole route handled.',
      },
    ],
  },
  {
    slug: 'golden-triangle-photography-itinerary',
    title: 'The Golden Triangle, Planned Around Light Instead of Distance',
    excerpt:
      'Delhi, Agra and Jaipur in five days, scheduled so each monument gets the hour it was built for — and the two days most itineraries waste.',
    answer:
      'A five-day Golden Triangle works best as: two nights in Delhi, the drive to Agra on day three with Fatehpur Sikri on the way, sunrise at the Taj Mahal on day four, then Jaipur by evening for two nights. The usual itinerary reverses Agra and Jaipur and puts the Taj Mahal in the middle of the afternoon, which is the one hour of the day white marble photographs worst.',
    published: '2026-06-20',
    updated: '2026-10-23',
    readingMinutes: 8,
    image: '/photos/gallery/13.jpg',
    imageAlt: 'International guests with their licensed guide in the Taj Mahal gardens',
    category: 'Planning',
    keywords: [
      'golden triangle itinerary',
      'delhi agra jaipur itinerary 5 days',
      'golden triangle photography tour',
      'india golden triangle plan',
      'best golden triangle route',
    ],
    planIds: ['sunrise', 'transport-guide', 'sunrise-luxury-innova'],
    sections: [
      {
        heading: 'The schedule',
        table: {
          head: ['Day', 'Where, and why then'],
          rows: [
            ['1 — Delhi', 'Humayun’s Tomb at opening, Lodhi Gardens late afternoon. Both are soft-light buildings'],
            ['2 — Delhi', 'Old Delhi in the morning while the lanes are still cool, Qutub Minar at golden hour'],
            ['3 — Delhi → Agra', 'Leave at ten, Fatehpur Sikri at three when the sandstone is warm, Agra by seven'],
            ['4 — Agra', 'Taj Mahal at gate opening, Agra Fort at eleven, Mehtab Bagh at sunset. Drive to Jaipur after, or the next morning'],
            ['5 — Jaipur', 'Amber Fort at opening, Panna Meena ka Kund mid-morning, Hawa Mahal from the café opposite at first light if you have a sixth day'],
          ],
        },
      },
      {
        heading: 'Why most itineraries put the Taj Mahal in the wrong hour',
        body: [
          'Tour operators route the Golden Triangle by driving distance, which makes Agra a lunch stop between two cities. That lands you at the monument between noon and three, when the marble is a flat blown-out white, the queues are longest and the temperature from March onwards makes standing on that platform genuinely unpleasant.',
          'Moving Agra to a morning costs you nothing but a hotel booking, and it is the single change that improves the photographs from the whole trip.',
        ],
      },
      {
        heading: 'What to cut',
        list: [
          'The marble inlay "factory" visits added to cheap tours — they are commission stops, not sights',
          'Akshardham, unless you specifically want it: no cameras are allowed inside at all',
          'A second Delhi monument on day three; the drive is four hours and arriving in daylight matters more',
          'Elephant rides at Amber Fort, on welfare grounds alone — the jeep goes to the same gate',
        ],
      },
      {
        heading: 'Where the photographer fits',
        body: [
          'A photographer is worth it where the permit matters and the light is short — which on this route means Agra. Inside the Taj Mahal complex, professional equipment only passes security with a Ministry of Tourism permit, and the usable light lasts about forty minutes.',
          'Delhi and Jaipur are different: the monuments there allow ordinary cameras without special permission, so most travellers shoot those themselves and book the photographer for the Agra morning.',
        ],
      },
      {
        heading: 'If you only have three days',
        body: [
          'Delhi evening, Agra at sunrise on day two, Jaipur on day three. It is tight but it keeps the one fixed point — the monument at first light — and gives up the parts of Delhi and Jaipur that photograph well in any light anyway.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Which direction should I travel, Delhi → Agra → Jaipur or the reverse?',
        answer:
          'Delhi → Agra → Jaipur. It puts the drive from Delhi in the middle of the day and the Taj Mahal on a morning you have slept before, and it leaves you in Jaipur for the flight home.',
      },
      {
        question: 'Can I do the Golden Triangle by train?',
        answer:
          'Delhi–Agra and Agra–Jaipur both have good trains, but the timetable decides your day rather than the light. A car costs more and buys the schedule back.',
      },
      {
        question: 'How many days is enough?',
        answer:
          'Five is comfortable, four works, three is the minimum that still gives you a sunrise in Agra. Anything less and Agra becomes a lunch stop again.',
      },
    ],
  },
  {
    slug: 'flying-to-agra-for-a-weekend-shoot',
    title: 'Flying In for the Weekend: Mumbai, Bengaluru or Hyderabad to the Taj Mahal',
    excerpt:
      'A 36-hour plan that gets you from a Friday evening flight to a sunrise session and home by Sunday night, with the connection times that actually work.',
    answer:
      'From Mumbai, Bengaluru or Hyderabad, a weekend at the Taj Mahal works as a Friday evening flight to Delhi, a three-hour transfer to Agra that night, a sunrise session on Saturday, and a Sunday flight home from Delhi. Agra has its own airport with limited flights, so most travellers fly into Delhi and drive. Do not plan the shoot for Friday: the Taj Mahal is closed every Friday.',
    published: '2026-07-08',
    updated: '2026-10-23',
    readingMinutes: 6,
    image: '/photos/gallery/15.jpg',
    imageAlt: 'A couple standing together at the end of the reflecting pool at the Taj Mahal',
    category: 'Planning',
    keywords: [
      'mumbai to agra trip',
      'bangalore to taj mahal weekend',
      'hyderabad to agra flight',
      'weekend trip taj mahal from mumbai',
      'agra airport flights',
    ],
    planIds: ['sunrise', 'pre-wedding', 'transport-guide'],
    sections: [
      {
        heading: 'The 36 hours',
        table: {
          head: ['When', 'What happens'],
          rows: [
            ['Friday, 18:00–20:30', 'Flight from Mumbai, Bengaluru or Hyderabad into Delhi'],
            ['Friday, 21:30', 'Private car from the airport; Agra by half past midnight on the Yamuna Expressway'],
            ['Saturday, 05:45', 'Photographer meets you at the hotel; session at gate opening'],
            ['Saturday, 08:30', 'Breakfast, sleep, then Agra Fort or Mehtab Bagh in the afternoon'],
            ['Sunday, 10:00', 'Drive back to Delhi, afternoon or evening flight home'],
          ],
        },
        body: [
          'The late-night transfer is the part people hesitate over, and it is the part that makes the weekend work: the Yamuna Expressway is a good road and it is empty at that hour.',
        ],
      },
      {
        heading: 'Why not fly into Agra',
        body: [
          'Agra does have a civil terminal, with a handful of flights that change by season and get suspended without much notice. It can be excellent when the schedule lines up with yours — and it strands you when a single daily flight is cancelled. Delhi has fifty alternatives on the same evening.',
          'Check Agra flights by all means; plan the trip so it still works from Delhi.',
        ],
      },
      {
        heading: 'The Friday problem',
        body: [
          'The complex closes every Friday for prayers at the mosque inside. A Friday-night arrival and a Saturday-morning shoot is the natural shape of this trip anyway, but it does mean a Thursday-night arrival gives you a wasted Friday unless you spend it at Agra Fort, Fatehpur Sikri or Mehtab Bagh.',
        ],
      },
      {
        heading: 'What to carry for one night',
        list: [
          'The outfit you want to be photographed in, ready to wear — there is nowhere to change at the monument',
          'Something with sleeves and covered shoulders if you want the mosque interior as a backdrop',
          'Shoes you can slip off: they come off to step onto the marble plinth, and covers are given with the foreign-national ticket',
          'A warm layer from November to February — the gardens at 6 a.m. are colder than the forecast suggests',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is one night in Agra really enough?',
        answer:
          'For a sunrise session, yes. The shoot finishes by half past eight and the rest of the day is yours. A second night only becomes worth it if you want Mehtab Bagh at sunset as well, or insurance against December fog.',
      },
      {
        question: 'Can you arrange the airport transfer?',
        answer:
          'Yes — the transport-and-guide package covers the Delhi airport pickup and the drive both ways, with the exact quote confirmed on WhatsApp before you book.',
      },
      {
        question: 'Is the night drive from Delhi safe?',
        answer:
          'The Yamuna Expressway is a modern toll road and the drivers we use do it several times a week. We will not put you on a 2 a.m. departure for a 6 a.m. shoot, though — that is how people end up photographed exhausted.',
      },
    ],
  },
  {
    slug: 'pre-wedding-shoot-taj-mahal-permission',
    title: 'Can You Really Do a Pre-Wedding Shoot at the Taj Mahal? The Honest Answer',
    excerpt:
      'Half the internet says yes, half says it is banned. Both are describing different things. Here is where the line actually falls, and which side of it a normal couple session sits on.',
    answer:
      'A couple can be photographed together at the Taj Mahal by a photographer holding the Ministry of Tourism permit, dressed as they like, as ordinary visitors — that is what most people mean by a pre-wedding shoot and it happens every morning. What is not allowed without separate written permission from the Archaeological Survey of India is a commercial production: lighting rigs, props, sets, crews, drones, or an outfit change on site. The two are confused constantly, which is why you will read that it is both freely allowed and completely banned.',
    published: '2026-07-26',
    updated: '2026-10-23',
    readingMinutes: 7,
    image: '/photos/gallery/07.jpg',
    imageAlt: 'A couple in traditional dress photographed in front of the Taj Mahal',
    category: 'Rules & permits',
    keywords: [
      'pre wedding shoot taj mahal allowed',
      'taj mahal pre wedding permission',
      'is pre wedding shoot banned taj mahal',
      'asi permission taj mahal shoot',
      'couple photoshoot taj mahal rules',
    ],
    planIds: ['pre-wedding', 'sunrise'],
    sections: [
      {
        heading: 'Why the internet contradicts itself',
        body: [
          'Search this question and you will find photography studios promising full pre-wedding productions at the monument, travel blogs insisting pre-wedding shoots are banned outright, and guides calling it "yes and no". They are all describing something real; they are just describing different activities under the same words.',
          'The monument treats photography as two separate things. One is a visitor being photographed. The other is a production using the monument as a location. The first needs a permit only for the equipment; the second needs written permission from the Archaeological Survey of India, applied for in advance, with fees.',
        ],
      },
      {
        heading: 'Where the line falls in practice',
        table: {
          head: ['This is a visitor being photographed', 'This is a production'],
          rows: [
            ['A couple in their own clothes, arriving dressed', 'Changing outfits on site, or a wardrobe assistant'],
            ['A photographer with a permit, handheld camera and tripod', 'Lighting rigs, reflector stands, a crew'],
            ['Posing on the paths, the plinth, the benches', 'Props, furniture, staged sets, confetti'],
            ['Handheld video alongside the stills', 'A video production with its own equipment'],
            ['Staying within the visitor areas and the three-hour ticket', 'Closing an area, or shooting outside visiting hours'],
          ],
        },
        body: [
          'A normal couple session is firmly in the left column. Everything we deliver — the 200+ photographs, the edited selection, the short cinematic cut — is made inside those limits, with a permit that covers the equipment and nothing that needs an area closed.',
        ],
      },
      {
        heading: 'What this means for your plan',
        list: [
          'Arrive dressed. There is no changing room, and attempting one is the fastest way to be stopped',
          'A second outfit means a second location — the fort, Mehtab Bagh, a hotel terrace — not a change inside the complex',
          'Heavy lehengas and long trains are fine to wear; they are not fine to have assistants arranging on the marble',
          'No drones, under any arrangement. The airspace is restricted and that is an offence rather than a refusal',
          'No photography inside the burial chamber, whatever permit anyone holds',
        ],
      },
      {
        heading: 'If you do want the full production',
        body: [
          'It exists, and it is a different undertaking: a written application to the ASI, a fee schedule that depends on what you are bringing, lead time measured in weeks rather than days, and no guarantee. If that is what you are planning, tell us at the enquiry stage and we will give you the real cost and timeline rather than take a deposit and find out later.',
          'Most couples, once they see what a permitted session produces in the quiet hour, do not need it.',
        ],
      },
      {
        heading: 'The rule that surprises everyone',
        body: [
          'Inside the Taj Mahal, a guide is not allowed to accompany a working photographer. If you have booked both, the photographer is with you in the complex and the guide meets you at the exit or at the other monuments. We say this before you book, because finding out at the gate has ruined more than one morning for people who booked elsewhere.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Do I need to apply for permission myself?',
        answer:
          'Not for an ordinary couple session. The permit that matters is the photographer’s, and it is held year-round. You buy the normal entry tickets, and the ₹200 ticket if you want photographs on the marble plinth.',
      },
      {
        question: 'Can we wear a lehenga and sherwani?',
        answer:
          'Yes. Wear what you like and arrive in it. The only practical limits are stairs, marble that gets hot from March, and the fact that nobody can help you carry a train through a security queue.',
      },
      {
        question: 'Is a cinematic video allowed?',
        answer:
          'Handheld video alongside the stills is part of the couple session and is shot within the same permit. A separate video production with its own crew and equipment is the commercial route and needs ASI permission.',
      },
      {
        question: 'What happens if we are stopped?',
        answer:
          'With a permitted photographer, you are not — that is the point of the permit. The sessions that get stopped are the ones where someone brought a tripod on a visitor ticket, or tried to change clothes in the gardens.',
      },
    ],
  },
  {
    slug: 'maternity-photoshoot-taj-mahal',
    title: 'A Maternity Shoot at the Taj Mahal: What to Plan For',
    excerpt:
      'The walk is longer than it looks, the marble gets hot, and the best light is at an hour nobody wants to wake for. How to make it comfortable and still get the photographs.',
    answer:
      'A maternity shoot at the Taj Mahal is best done at sunrise, when the temperature is lowest and the complex is empty. Plan for about 1.5 kilometres of walking on flat paths from the gate to the plinth and back, with benches throughout and a wheelchair available free at the gate. Photography follows the ordinary visitor rules: arrive dressed, no props or lighting, and no photography inside the burial chamber.',
    published: '2026-08-14',
    updated: '2026-10-23',
    readingMinutes: 5,
    image: '/photos/gallery/03.jpg',
    imageAlt: 'A solo guest photographed beside the reflecting pool at the Taj Mahal',
    category: 'Planning',
    keywords: [
      'maternity photoshoot taj mahal',
      'babymoon agra photoshoot',
      'pregnancy photos taj mahal',
      'maternity shoot agra',
      'babymoon india taj mahal',
    ],
    planIds: ['sunrise', 'pre-wedding'],
    sections: [
      {
        heading: 'Why sunrise is not negotiable here',
        body: [
          'From March to October the marble plinth is genuinely hot by nine in the morning, and shoes come off to stand on it. At the gate opening it is cool, the paths are empty, and you are not queuing anywhere.',
          'The session is about two hours, and the part that involves standing is maybe twenty minutes of it. The rest is walking slowly between four or five positions and sitting while the light moves.',
        ],
      },
      {
        heading: 'The walking, honestly',
        table: {
          head: ['Leg', 'Distance and surface'],
          rows: [
            ['East Gate to the forecourt', '~400m, paved, flat, slight incline at the gate'],
            ['Great Gate to the reflecting pool', '~250m, flat marble and sandstone paths'],
            ['Pool to the plinth steps', '~300m, flat, then a short flight of steps'],
            ['Return', 'The same, or a golf cart for the outer stretch'],
          ],
        },
        list: [
          'Benches along the central path and in the side gardens, all in shade by seven',
          'Golf carts run the outer stretch between the ticket area and the Great Gate for a small fee',
          'A wheelchair is available free at the gate and the paths take it comfortably',
          'Toilets are at the gate complex, not inside — worth knowing before you walk in',
        ],
      },
      {
        heading: 'What photographs well at this stage',
        list: [
          'Flowing fabric: a saree pallu, a long dress, a dupatta held out — movement reads better than a fixed pose',
          'Side light in the first thirty minutes, which shapes a bump without flattening it',
          'The side arcades rather than the central axis: softer background, no crowd behind you',
          'Hands, and the two of you together — the frames people keep are rarely the wide ones',
        ],
      },
      {
        heading: 'Pace and timing',
        body: [
          'Tell us at booking and we build in stops rather than improvising them. We also shorten the route: the same photographs come from the pool, the bench, the side arcades and the plinth, and skipping the far corners costs nothing visually.',
          'October to March is the comfortable window. April to June, a sunrise session is the only part of the day worth being outside for, and even then bring water — it is allowed through security.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Is the Taj Mahal wheelchair accessible?',
        answer:
          'Largely, yes. The paths and gardens are flat and a wheelchair is available free at the gate. The raised plinth is reached by steps, so that part of the complex is not accessible — we photograph from the garden level instead, which is where the full building fits in frame anyway.',
      },
      {
        question: 'Can I bring a chair or a prop?',
        answer:
          'No. Props and furniture put the shoot into the commercial-permission category. Benches in the gardens are available and we use them.',
      },
      {
        question: 'How far in advance should we book?',
        answer:
          'Two to three weeks in high season. If you are travelling late in a pregnancy, tell us the week and we will keep the date flexible rather than hold you to it.',
      },
    ],
  },
  {
    slug: 'taj-mahal-family-photos-kids-grandparents',
    title: 'Family Photographs at the Taj Mahal, Three Generations at Once',
    excerpt:
      'Where twelve people actually fit in frame, how to keep grandparents comfortable and children interested, and the twenty minutes that decide whether you get the group shot.',
    answer:
      'For a family group at the Taj Mahal, book the gate opening and take the group photograph in the first twenty minutes — there are only two or three positions where a group of eight to twelve fits with the whole monument behind, and they fill with visitors by seven. Golf carts cover the outer stretch, wheelchairs are free at the gate, and children under fifteen enter free. Individual and couple portraits are made afterwards, while a guide takes the rest of the family through the site.',
    published: '2026-09-04',
    updated: '2026-10-23',
    readingMinutes: 6,
    image: '/photos/gallery/01.jpg',
    imageAlt: 'A group of guests in saris walking together at the monument',
    category: 'Planning',
    keywords: [
      'family photoshoot taj mahal',
      'group photo taj mahal',
      'taj mahal with kids',
      'taj mahal with elderly parents',
      'multigenerational family trip india',
    ],
    planIds: ['guided-photo-tour-large', 'guided-photo-tour-small', 'full-day'],
    sections: [
      {
        heading: 'The group photograph is a twenty-minute window',
        body: [
          'A group of ten needs width, and the monument needs height — there are only a few places in the complex where both work at once. All of them are on the central axis, which is the first part to fill.',
          'So the order is: through security, straight to the position, group photographs while the paths are still empty, and only then the wandering, the individual portraits and the history.',
        ],
      },
      {
        heading: 'Grandparents',
        list: [
          'Golf carts run between the ticket area and the Great Gate — worth taking in both directions',
          'Wheelchairs are free at the gate; the garden paths are flat and take them easily',
          'The plinth is reached by steps. We photograph the family at garden level, which frames the whole building better anyway',
          'Shoes come off for the plinth; shoe covers come with the foreign-national ticket',
          'Benches in shade along the central path and in the side gardens',
        ],
      },
      {
        heading: 'Children',
        list: [
          'Under fifteen enter free, though ID may be asked for',
          'Food is not allowed through security — feed them before, and carry water, which is',
          'The first hour is the cool hour; by ten, a child on hot marble is a short visit',
          'The photographs families keep are the running, the pointing and the being carried — not the posed line-up, which we take first precisely so the rest of the morning can be loose',
        ],
      },
      {
        heading: 'How the morning is usually arranged',
        body: [
          'For six to twelve guests, a licensed guide and a photographer together works best: group portraits first, then the guide walks everyone through the inscriptions and the inlay while the photographer picks off individual and couple portraits in the side arcades.',
          'Inside the Taj Mahal itself a guide cannot accompany a working photographer, so the guide joins you at Agra Fort and the other monuments. It is a site rule, and we say it in advance.',
        ],
      },
      {
        heading: 'What it costs',
        body: [
          'The guide-and-photographer package starts at $89 for up to five guests and $119 for six to twelve, covering the Taj Mahal, Agra Fort and Mehtab Bagh or Itimad-ud-Daulah, with 60 photographs and seven reels for the larger group. Monument tickets are separate and are much cheaper for Indian nationals.',
          'Above twelve, we add a second photographer rather than stretch one across the group.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many people can be in one photograph with the whole monument?',
        answer:
          'Comfortably eight to ten; twelve is possible at the widest position on the central path. Beyond that the monument shrinks behind the group, and two photographs read better than one.',
      },
      {
        question: 'Can we do this with a baby or a toddler?',
        answer:
          'Yes, and the sunrise slot is the one that works — cool, quiet and over before a nap is due. Prams are allowed through security.',
      },
      {
        question: 'Can we add a hotel or heritage-site session afterwards?',
        answer:
          'Yes. The full-day package covers the Taj Mahal, Agra Fort and the back-side sunset view, which gives the family three settings in one day without rushing any of them.',
      },
    ],
  },
];

export function postBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Packages to show at the foot of an article. */
export function postPlans(post: BlogPost) {
  return post.planIds.map(planById).filter(Boolean);
}

/** Other posts worth reading, nearest category first. */
export function relatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const others = POSTS.filter((p) => p.slug !== post.slug);
  return [
    ...others.filter((p) => p.category === post.category),
    ...others.filter((p) => p.category !== post.category),
  ].slice(0, limit);
}
