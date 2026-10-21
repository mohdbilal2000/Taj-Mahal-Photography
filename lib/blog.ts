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
          'Delivery inside 48 hours, to a private gallery',
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
