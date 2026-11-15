import type { BlogPost } from './blog';

/**
 * The world guides.
 *
 * The Agra articles answer "how do I photograph the Taj Mahal". These answer
 * the questions a photographer asks *before* they have ever heard of us:
 * where to shoot in their own country, why their pictures feel flat, what a
 * trip to India involves. Each one is useful on its own terms and only at
 * the very end introduces the studio.
 *
 * Honesty rules for the destination guides: we shoot in Agra, so they are
 * written as planning guides by the studio team, never as "I stood here at
 * dawn". Access rules (reservations, guided-only areas, permits) change, so
 * every one tells the reader to confirm with the official source.
 */

const DATE = '2026-11-15';
const TEAM = 'Taj Mahal Photography editorial team';

const wa = (text: string) => text;

function pitch(heading: string, intro: string, whatsappText: string) {
  return {
    heading,
    body: [
      intro,
      'We are a Ministry of Tourism licensed photography team in Agra. Professional equipment at the Taj Mahal needs a permit that only a licensed photographer can hold, so we handle it, meet you at your hotel, and deliver edited photos within 48 to 72 hours. Tell us your dates and we reply on WhatsApp with a fixed price.',
    ],
    whatsappText: wa(whatsappText),
  };
}

const visitedNote =
  'A note on how this guide was made: we photograph in Agra, not here. This is a planning guide built from what each place is known for and how access works, not a diary of our own shoots. Reservations, closures and fees change, so confirm every rule with the official source before you travel.';

export const WORLD_POSTS: BlogPost[] = [
  /* ───────────────────────── Photographer mindset ───────────────────────── */
  {
    slug: 'why-photographers-fail-it-is-not-the-gear',
    title: 'Why Most Photographers Plateau (It Has Nothing to Do With Gear)',
    excerpt:
      'The photographers who keep improving are not the ones with the best cameras. They are the ones who care about the subject. Here is why attachment beats equipment, and what to do about it.',
    answer:
      'Most photographers stop improving because they never become emotionally attached to what they photograph. Attachment creates attention, attention creates anticipation, and anticipation is what puts you in the right place a second before the moment. A birdwatcher who has loved birds for ten years will, after a short technical learning curve, photograph birds better than a skilled wedding photographer who has never cared about them. Equipment and technique can be learned in months; knowing your subject takes years, and it cannot be bought.',
    published: DATE,
    updated: DATE,
    readingMinutes: 7,
    image: '/photos/gallery/02.jpg',
    imageAlt: 'The Taj Mahal mirrored in the reflecting pool in the hour before the crowds arrive',
    category: 'Photographer mindset',
    byline: TEAM,
    keywords: [
      'why photographers plateau',
      'how to become a better photographer',
      'photography is not about gear',
      'emotional connection photography',
      'improve photography skills',
      'photography mindset',
    ],
    planIds: ['sunrise'],
    sections: [
      {
        heading: 'The gear explanation is comfortable, and wrong',
        body: [
          'When a photographer stops growing, the usual diagnosis is equipment. A better body, a faster lens, a new bag. It is a comfortable answer because it can be solved with a purchase, and because it puts the problem outside the photographer.',
          'Look at who actually makes memorable pictures with modest cameras and the pattern is not equipment. It is that they are in the right place, at the right time, already waiting. That is not a technical skill. It is knowledge, and knowledge comes from caring.',
        ],
      },
      {
        heading: 'Attachment, attention, anticipation',
        body: [
          'Three things happen in order. When you care about a subject you pay attention to it without effort. When you have paid attention for long enough you begin to anticipate it: you know the bird will turn its head before it flies, the bride will look at her father when the music changes, the marble will go warm for about ten minutes after the sun clears the haze.',
          'Anticipation is the whole game. A photographer who reacts is always a fraction late. A photographer who anticipates is already composed and focused when it happens. The first looks lucky on a good day. The second looks lucky every day.',
        ],
      },
      {
        heading: 'The birdwatcher principle',
        body: [
          'Take two people. One is an excellent wedding photographer: fast, calm, technically complete. The other has watched birds for ten years and owns a camera that is two generations old. Send both to a wetland at dawn.',
          'The wedding photographer will take sharp, well-exposed pictures of birds. The birdwatcher will take pictures of birds doing things, because they know which reed the heron will strike from, and what a changing wind does to a flock. Give the wedding photographer a few seasons of caring about birds and they will overtake the birdwatcher, because the technique they already have becomes useful once they have the knowledge. It will take time. It will happen.',
          'The reverse does not work. You cannot hand a birdwatcher a better camera and get the same result, because the missing ingredient was never the camera.',
        ],
      },
      {
        heading: 'Technique is the cheap part',
        body: [
          'Exposure, focus, composition and editing can be taught in a few months of deliberate practice. They are finite and well documented. Everyone who is serious reaches roughly the same technical level, which is why technique alone stops being a differentiator.',
          'What cannot be copied is the depth of someone’s relationship with a place, a person or a subject. Two photographers with identical kit, standing in the same spot, produce different pictures because one of them knows the story and the other is looking at a view.',
        ],
      },
      {
        heading: 'What it looks like at one monument',
        body: [
          'The Taj Mahal is photographed millions of times a year and most of the pictures look the same, because most people arrive, find the famous bench, and leave. The photographers whose work stands out are the ones who return: who know where the first light falls on a Tuesday in November, which corner of the gardens is empty at 6:40, how the reflection behaves on a still morning compared with a windy one.',
          'None of that is on a map. It is built by standing there repeatedly, caring about the place, and noticing.',
        ],
      },
      {
        heading: 'How to build attachment on purpose',
        list: [
          'Choose a subject you would be happy to look at for five years, not one that looks impressive on a feed.',
          'Learn its history and its habits. Read about it, talk to the people who live with it, and find out what the locals notice that visitors do not.',
          'Return to the same place at different hours and seasons instead of collecting new places. Depth beats variety.',
          'Photograph less and look more. Spend the first twenty minutes of any shoot without raising the camera.',
          'Keep a short written note after each visit: what the light did, what surprised you, what you missed. The notebook is where anticipation is stored.',
          'Shoot for one person rather than an audience, someone you want to show what the place felt like.',
        ],
      },
      {
        heading: 'Why this matters if you are booking a photographer',
        body: [
          'The same principle applies when you hire someone. A photographer who is attached to the place and the people has already done the anticipation for you. They know where to stand, when to stop talking, and when the moment you actually want is about to happen. When you compare quotes, ask who knows the place, not who owns the most equipment.',
        ],
      },
    ],
    faqs: [
      {
        question: 'Does gear really not matter in photography?',
        answer:
          'It matters at the edges, such as low-light work, fast action and very large prints. For most photographers who feel stuck, it is not the limiting factor. Attention, anticipation and knowledge of the subject usually are.',
      },
      {
        question: 'How long does it take to get good at photographing a new subject?',
        answer:
          'Technique transfers quickly, often within a few months. Understanding the subject takes seasons or years, and that is what separates adequate pictures from memorable ones.',
      },
      {
        question: 'Should I specialise or stay a generalist?',
        answer:
          'Specialising in a subject you love produces faster growth than spreading yourself across everything, because attachment compounds. You can always widen later with a strong foundation.',
      },
      {
        question: 'How do I get better photos on a short trip to a famous place?',
        answer:
          'Do your research before you arrive, go at the quietest and best-lit hour, and spend the first minutes watching before shooting. Or work with someone who already knows the place, which is the fastest way to borrow years of attention.',
      },
    ],
    pitch: pitch(
      'Borrow years of attention for one morning',
      'If you only have one sunrise at the Taj Mahal, the quickest way to get the frames that take regulars years to learn is to shoot with someone who has been there every morning.',
      'Hi, I read your article on why photographers plateau and I would like a sunrise photoshoot at the Taj Mahal. My dates are:',
    ),
  },
  {
    slug: 'fall-in-love-with-a-place-before-you-photograph-it',
    title: 'How to Fall in Love With a Place Before You Photograph It',
    excerpt:
      'A practical method for turning a famous landmark into a place you actually know, so your pictures stop looking like everyone else’s.',
    answer:
      'To photograph a place well, learn it before you lift the camera. Read its history, return at different hours, spend your first visit looking instead of shooting, talk to the people who work there, and keep a short note after each visit. Five mornings at one location will give you better pictures than five locations in one morning, because the work of a photographer is mostly noticing.',
    published: DATE,
    updated: DATE,
    readingMinutes: 6,
    image: '/photos/gallery/16.jpg',
    imageAlt: 'A guest beside the reflecting pool at the Taj Mahal, taking in the view before the first photograph',
    category: 'Photographer mindset',
    byline: TEAM,
    keywords: [
      'how to photograph a landmark',
      'travel photography tips',
      'slow travel photography',
      'get better travel photos',
      'research before travel photography',
      'photographing famous places',
    ],
    planIds: ['sunrise', 'guided-photo-tour-small'],
    sections: [
      {
        heading: 'Why famous places produce forgettable photographs',
        body: [
          'A landmark has been photographed so many times that your brain already holds the picture. You arrive, recognise the view, shoot the one you expected, and leave with something you could have downloaded. The problem is not the place. It is that you met it for ten minutes.',
          'The cure is slower than most travel advice admits, but it is not complicated.',
        ],
      },
      {
        heading: 'A five-step method',
        list: [
          'Read before you go. Learn who built it, why, and what has happened there since. The details you notice later come from here.',
          'Look first. On your first visit, keep the camera away for twenty minutes and watch where people stand, where the light falls and what the place does when no one is photographing it.',
          'Go back at a different hour. A sunrise visit and a late-afternoon visit are two different places, and the second visit is where your own picture usually appears.',
          'Talk to someone who works there. Guards, gardeners, guides and shop owners know things no guidebook records, such as when the crowd disappears or which corner stays shaded.',
          'Write three lines after each visit: what the light did, what you noticed, what you want to try next time.',
        ],
      },
      {
        heading: 'Pick one subject within the place',
        body: [
          'Within a large site, choose one thing to follow. The way the light moves along a wall. The faces of the people who arrive at opening. The reflection when it is still. A single subject gives you a thread, and the thread is what makes a set of pictures feel like a point of view rather than a collection.',
        ],
      },
      {
        heading: 'What this looks like at the Taj Mahal',
        body: [
          'The monument was commissioned by the Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal, who died in 1631, and it was built over roughly two decades. Knowing that it is a tomb built from grief changes how you see the quiet hour, and the way people stand when they first see it.',
          'Visit twice if you can: once at first light, once in the late afternoon from the gardens. The marble reads differently each time, and by the second visit you know what you want. The practical rules, from permits to timing, are in our other guides.',
        ],
      },
      {
        heading: 'When you only have one morning',
        body: [
          'Not everyone can return five times. If your trip allows a single sunrise, the shortcut is to shoot with a local who has already done the repetition: someone who knows where the light will be at 6:15 and which gate has the shortest queue. It does not replace your own attachment to the place, but it protects your one chance from being wasted.',
        ],
      },
    ],
    faqs: [
      {
        question: 'How many visits does a landmark need to photograph well?',
        answer:
          'Two visits at different hours already change the result. Four or five visits across different light conditions give you pictures that feel personal rather than generic.',
      },
      {
        question: 'Should I research the place before or after shooting?',
        answer:
          'Before. Knowing the story gives you things to look for, and it changes what you choose to include in the frame.',
      },
      {
        question: 'What if I only have one day?',
        answer:
          'Arrive at the first light, spend the opening minutes watching, choose one theme, and shoot that. A single focused hour beats a rushed tour of ten spots.',
      },
    ],
    pitch: pitch(
      'One morning, shot properly',
      'If your trip gives you one sunrise at the Taj Mahal, we will plan it around the light and the hour so you leave with pictures that look like you were there for a week.',
      'Hi, I would like to plan a sunrise photoshoot at the Taj Mahal after reading your guide on photographing a place properly. My dates are:',
    ),
  },
  {
    slug: 'emotional-connection-couple-family-portraits',
    title: 'Why Couples’ Photos Feel Stiff, and How to Get Real Ones',
    excerpt:
      'Stiff couple and family portraits are a feeling problem, not a posing problem. Here is how to feel something in front of the lens, and what a good photographer does to help.',
    answer:
      'Stiff portraits happen when people are thinking about how they look instead of how they feel. The fix is to give the couple or family something real to do or remember: walk, talk about the day you met, whisper something only they know, laugh at a private joke. A good photographer directs emotion rather than poses, keeps the camera moving, and lets the first ten minutes be awkward. The photographs you want arrive after that.',
    published: DATE,
    updated: DATE,
    readingMinutes: 7,
    image: '/photos/gallery/08.jpg',
    imageAlt: 'A couple sharing a quiet moment on a bench with the Taj Mahal behind them',
    category: 'Photographer mindset',
    byline: TEAM,
    keywords: [
      'couple photoshoot tips',
      'natural couple photos',
      'how to pose for a couple photoshoot',
      'pre-wedding shoot tips',
      'family portrait tips',
      'stiff photos fix',
    ],
    planIds: ['pre-wedding', 'sunrise'],
    sections: [
      {
        heading: 'It is a feeling problem, not a posing problem',
        body: [
          'When a couple looks stiff, the instinct is to adjust the pose: chin down, hand here, turn a little. It rarely works. People hold a pose the way they hold their breath, and what you see in the picture is the holding.',
          'Real expression comes from feeling something. So the job, for the photographer and for the couple, is to produce the feeling first and let the picture follow.',
        ],
      },
      {
        heading: 'What actually helps in front of the camera',
        list: [
          'Talk to each other, not to the lens. Tell the story of the first time you met, or the worst date, or what you noticed about each other first.',
          'Move. Walking, turning, and stepping toward each other all look more natural than standing still, and they use up nervous energy.',
          'Pick one task. Whisper something only your partner would understand. Hold hands and say nothing for ten seconds. A small task gives the face something to do.',
          'Let the first ten minutes be awkward. Almost everyone is stiff at the start, and the best frames tend to come after people forget the camera.',
          'Wear things you are comfortable in. If you are adjusting your outfit, you are not feeling anything else.',
        ],
      },
      {
        heading: 'What a good photographer does',
        body: [
          'A photographer who has done this many times spends the first minutes talking, not shooting. They learn how you speak, which of you makes the other laugh, and what you are nervous about. Then they give small directions that sound like conversation, not instruction.',
          'They also keep moving around you so you do not feel pinned in one spot, and they shoot the in-between moments, the laugh after the pose, the glance when the pose ends, because those are often the frames couples choose.',
        ],
      },
      {
        heading: 'Why a place with meaning helps',
        body: [
          'A location that carries emotion gives you something to feel. The Taj Mahal was built by Shah Jahan in memory of Mumtaz Mahal, and many couples find that standing in front of a monument made for love changes the way they look at each other. The setting does a surprising share of the work.',
        ],
      },
      {
        heading: 'Families and groups',
        body: [
          'For families, the same principle applies with one adjustment: give each person a role. Let the children lead the walk, ask the grandparents to tell a story, give the youngest something to carry. People relax when they have a job, and relaxed people look like themselves.',
        ],
      },
    ],
    faqs: [
      {
        question: 'I hate being photographed. Will it still work?',
        answer:
          'Yes. Most people feel this way. A good photographer starts with conversation, keeps you moving, and shoots the in-between moments, so you are not holding a pose for the camera.',
      },
      {
        question: 'How long should a couple photoshoot take?',
        answer:
          'Plan for at least two hours. The first twenty to thirty minutes are for settling in, and the frames couples love tend to come in the second hour.',
      },
      {
        question: 'Should we plan poses beforehand?',
        answer:
          'Plan the feeling, not the poses. Think about a few stories to tell each other and let the photographer handle the rest.',
      },
    ],
    pitch: pitch(
      'A couple shoot at the Taj Mahal, built around the two of you',
      'We start every couple and pre-wedding session with conversation, not poses, and keep the camera moving so the pictures look like you.',
      'Hi, we would like a couple or pre-wedding photoshoot at the Taj Mahal. Our dates are:',
    ),
  },

  /* ───────────────────────── World locations ───────────────────────── */
  destination({
    slug: 'best-photography-locations-usa',
    place: 'the United States',
    title: 'Best Photography Locations in the USA: Where to Shoot and When',
    excerpt:
      'Seven American locations photographers plan whole trips around, with the light, the access rules and the mistakes to avoid at each.',
    answer:
      'The most photographed places in the USA reward planning more than gear: Yosemite’s Tunnel View for late light on the valley, Antelope Canyon for light beams (guided tours only), Monument Valley for sunrise, Acadia’s Cadillac Mountain for the first sunrise in the country in season (vehicle reservation needed), Grand Teton’s Schwabacher Landing for mirror reflections, Big Sur for coastline, and New York’s bridges for city light. Check each park’s current reservation and access rules before you go.',
    image: '/photos/gallery/04.jpg',
    imageAlt: 'A couple in the red sandstone colonnade at Agra Fort, a warm-toned frame for a photographer’s portfolio',
    keywords: [
      'best photography locations usa',
      'best places to photograph in america',
      'landscape photography usa',
      'national park photography spots',
      'travel photography united states',
    ],
    spots: [
      ['Yosemite, Tunnel View (California)', 'The classic valley view with El Capitan and Bridalveil Fall. Late afternoon light and clearing storms are the prize; the car park fills early.'],
      ['Antelope Canyon (Arizona)', 'Slot canyon with sculpted sandstone and light beams around midday in the warmer months. Access is by guided tour only, run by Navajo guides, and booking ahead matters.'],
      ['Monument Valley (Arizona and Utah)', 'Red buttes on Navajo Nation land. Sunrise at the Mittens is the standard frame; read the tribal park’s current access rules before you plan.'],
      ['Acadia, Cadillac Mountain (Maine)', 'A sunrise viewpoint over the coast. In season, driving the summit road needs a vehicle reservation; hikers do not need one. Check the National Park Service page for dates.'],
      ['Grand Teton, Schwabacher Landing (Wyoming)', 'Still-water reflections of the Teton range at first light. A calm morning decides everything.'],
      ['Big Sur, Highway 1 (California)', 'Cliffs, fog and Bixby Bridge. The road is subject to closures after storms, so confirm before driving.'],
      ['New York City bridges and skyline', 'Brooklyn Bridge from DUMBO at dawn, the skyline from the Brooklyn waterfront at blue hour. Quiet hours are early on weekdays.'],
    ],
    technique: [
      'Arrive in the dark and wait. The last ten minutes before sunrise and the first ten after often give the best colour.',
      'Use the weather rather than avoiding it. Clearing storm, fog and low cloud make better pictures than a clear blue sky.',
      'Shoot the person as well as the place. A small figure in the frame gives scale and a reason to look.',
      'Return to the same overlook on two mornings. The second morning is almost always better, because you know what to do.',
    ],
    seasons: [
      'Spring and autumn give the best balance of light, weather and crowds in most western parks.',
      'Summer is the busiest season; reserve access and accommodation early.',
      'Winter can be the best light and the emptiest overlooks, but check road and park closures.',
    ],
    rules: [
      'Many sites on tribal land require a permit or a guided tour. Always book through the official operator.',
      'National parks may use timed or vehicle reservations in season. Check the park’s own page, not a third-party blog.',
      'Drone rules are strict in national parks. Assume they are not allowed unless the park says otherwise.',
    ],
    faqs: [
      { question: 'Do I need a permit to take photographs in US national parks?', answer: 'Casual photography does not need one. Commercial shoots, and shoots with additional equipment or crew in some places, may require a permit. Check the specific park’s current rules.' },
      { question: 'What is the best time of year for landscape photography in the USA?', answer: 'It depends on the region, but spring and autumn are the most dependable across many western and eastern parks, with less crowding than summer and better light.' },
      { question: 'Is Antelope Canyon only accessible on a guided tour?', answer: 'Yes. Access to the canyon areas is by guided tour with authorised Navajo guides, so book early and confirm current photography rules with the operator.' },
    ],
    indiaLine:
      'If your travels ever take you east of Europe, the Taj Mahal at sunrise is the frame many photographers fly for, and it comes with its own rules about equipment and permits.',
    pitchHeading: 'Heading to India next? Shoot the Taj Mahal properly',
    pitchIntro:
      'We welcome American photographers and travellers in Agra. If India is on your list, we can plan the sunrise and handle the permit for you.',
    waText: 'Hi, I am traveling from the USA and would like a photoshoot at the Taj Mahal. My dates are:',
    planIds: ['sunrise', 'pre-wedding'],
  }),
  destination({
    slug: 'best-photography-locations-mexico',
    place: 'Mexico',
    title: 'Best Photography Locations in Mexico: Colour, Ruins and Cenotes',
    excerpt:
      'Eight places in Mexico that photographers return to, from Guanajuato’s hillside colour to the cenotes near Valladolid, and how to catch each in its best light.',
    answer:
      'Mexico’s strongest photography comes from colour and contrast: Guanajuato’s hillside streets, San Miguel de Allende’s pink parish church, Chichén Itzá at opening time, the cenotes near Valladolid, Oaxaca’s Hierve el Agua, Mexico City’s Xochimilco canals, Palenque in jungle mist, and Día de Muertos in Pátzcuaro. Go at opening time for ruins, and plan Día de Muertos (1–2 November) months ahead.',
    image: '/photos/gallery/07.jpg',
    imageAlt: 'A couple in traditional dress in front of the Taj Mahal, the kind of colour Mexican photographers recognise',
    keywords: [
      'best photography locations mexico',
      'fotografia mexico mejores lugares',
      'mexico travel photography',
      'chichen itza photography',
      'dia de muertos photography',
      'cenotes photography',
    ],
    spots: [
      ['Guanajuato (Guanajuato state)', 'Colour-stacked hillside houses and narrow alleys. Climb to a viewpoint before sunrise, then drop into the alleys while the light is soft.'],
      ['San Miguel de Allende', 'The neo-Gothic parish church against warm stone streets. Early morning is quietest; blue hour is the strongest frame.'],
      ['Chichén Itzá (Yucatán)', 'The pyramid of El Castillo. Arrive at opening time for lower crowds and softer light; climbing the pyramid is not permitted, and professional equipment may need authorisation.'],
      ['Cenotes near Valladolid and Tulum', 'Swimming sinkholes with light shafts at midday and dark turquoise water. Check each site’s rules on tripods and professional cameras.'],
      ['Hierve el Agua (Oaxaca)', 'Petrified waterfall formations and valley views. Go early or late to avoid crowds.'],
      ['Xochimilco and Coyoacán (Mexico City)', 'Colourful trajinera boats on the canals and the blue Casa Azul. Weekday mornings are calmer.'],
      ['Palenque (Chiapas)', 'Maya temples set in jungle, best in early mist. Bring a lens cloth.'],
      ['Pátzcuaro and Janitzio (Michoacán)', 'Día de Muertos on 1 and 2 November: candles, marigolds and night vigils. Be respectful, ask before photographing people, and plan the trip months ahead.'],
    ],
    technique: [
      'Use the colour, but let it breathe. One strong colour in a frame reads better than a wall of them.',
      'Shoot ruins at opening time, before the heat haze and the crowds.',
      'At festivals, ask permission and spend time before raising the camera. Trust is the picture.',
      'Protect gear from humidity and dust. A sealed bag and silica gel save more trips than a new lens.',
    ],
    seasons: [
      'November to April is the drier, more comfortable season across much of the country.',
      'Día de Muertos is 1–2 November; book accommodation early.',
      'Summer brings afternoon storms in many regions, which make dramatic light but need flexible plans.',
    ],
    rules: [
      'Some archaeological sites charge extra for video or professional equipment. Check the site’s own rules.',
      'Respect local customs, particularly at religious and family events.',
      'Drone use is restricted at many sites and requires permission.',
    ],
    faqs: [
      { question: '¿Cuáles son los mejores lugares para fotografiar en México?', answer: 'Guanajuato, San Miguel de Allende, Chichén Itzá, los cenotes de Yucatán, Hierve el Agua, Xochimilco, Palenque y Pátzcuaro durante el Día de Muertos son algunos de los más fotografiados.' },
      { question: 'Do I need a permit to photograph Chichén Itzá?', answer: 'Casual photography is allowed. Professional equipment, tripods and commercial work may require authorisation, so check the site’s current rules.' },
      { question: 'When is the best time to photograph Día de Muertos?', answer: 'The main nights are 1 and 2 November. Arrive days earlier to settle in and ask permission before photographing people.' },
    ],
    indiaLine:
      'Mexican photographers may notice something familiar in India: the marigold garlands, the colour, the way families gather for celebrations. If you are planning to visit, the Taj Mahal at sunrise is a natural first frame, and we also have a page in Spanish at tajmahalphotography.com/es.',
    pitchHeading: 'Viajando a la India? Fotografía el Taj Mahal con nosotros',
    pitchIntro:
      'We welcome guests from Mexico and Latin America at the Taj Mahal. If you are planning a trip to India, we can plan the sunrise and handle the permit.',
    waText: 'Hola, viajo desde México y quiero una sesión de fotos en el Taj Mahal. Mis fechas son:',
    planIds: ['sunrise', 'pre-wedding'],
  }),
  destination({
    slug: 'best-photography-locations-europe',
    place: 'Europe',
    title: 'Best Photography Locations in Europe: A Field Guide by Season',
    excerpt:
      'Eight European locations worth planning a trip around, with when to go, how to avoid the crowds and what to confirm before you travel.',
    answer:
      'Europe’s strongest photography locations combine light and access: the Dolomites’ Seceda ridge, Lago di Braies, Iceland’s waterfalls and coast, Santorini’s Oia at sunset, Cinque Terre’s villages, Paris’s Trocadéro for sunrise, Prague’s Charles Bridge at dawn and Switzerland’s Lauterbrunnen valley. Go at the edges of the day, avoid peak summer weekends where you can, and check cable-car hours and car-park reservations before you plan sunrise.',
    image: '/photos/gallery/12.jpg',
    imageAlt: 'Guests photographed with their guide in front of the Taj Mahal, a frame many European travellers add to the end of a Europe trip',
    keywords: [
      'best photography locations europe',
      'best places to photograph in europe',
      'europe landscape photography',
      'dolomites photography',
      'iceland photography locations',
    ],
    spots: [
      ['Seceda and the Dolomites (Italy)', 'The jagged Odle ridgeline above the Val Gardena pastures. Reached by cable car from Ortisei; confirm operating hours, since sunrise and sunset visits usually mean staying overnight nearby.'],
      ['Lago di Braies (Italy)', 'A turquoise alpine lake with wooden boats. Arrive at dawn: the crowds and the car-park rules both change quickly in summer.'],
      ['Iceland: waterfalls and south coast', 'Skógafoss, Seljalandsfoss and black-sand beaches. Weather changes quickly; leave buffer days.'],
      ['Oia, Santorini (Greece)', 'White-and-blue architecture over the caldera, best at dawn and blue hour; sunset is very crowded.'],
      ['Cinque Terre (Italy)', 'Five coastal villages stacked on cliffs. Shoot early morning and late afternoon; paths and train services are subject to closures.'],
      ['Trocadéro and Bir-Hakeim (Paris)', 'Eiffel Tower at sunrise without crowds. Rules on tripods and commercial shoots apply on some sites.'],
      ['Charles Bridge (Prague)', 'Statues in early fog and empty cobblestones at dawn. Be there before the tour groups.'],
      ['Lauterbrunnen valley (Switzerland)', 'Waterfalls and meadows below high cliffs. Best light in morning and after rain.'],
    ],
    technique: [
      'Shoot at the edges of the day. Europe’s famous places are crowded from mid-morning.',
      'Wait for weather. Fog, mist and moving cloud make the Alps and coasts far more dramatic.',
      'Look for small details: a doorway, a window, a boat. Not every picture needs to be the view.',
      'Use a circular polariser on water and wet rock, and watch for stray light on lenses near the sea.',
    ],
    seasons: [
      'Late spring and early autumn give the best balance of light, crowds and weather in most of southern and central Europe.',
      'Peak summer is busy; reserve parking, lifts and accommodation early.',
      'Winter works for Iceland, the Alps and city blue hours, but check road, trail and lift closures.',
    ],
    rules: [
      'Parking, lifts and some viewpoints use reservations or timed access in peak season.',
      'Drone rules vary by country and by site; check the local authority’s rules.',
      'Professional shoots at some city landmarks need permits. Casual photography generally does not.',
    ],
    faqs: [
      { question: 'What are the best photography locations in Europe?', answer: 'Popular choices include the Dolomites, Lago di Braies, Iceland’s south coast, Santorini, Cinque Terre, Paris, Prague and Lauterbrunnen. Each is best at the edges of the day.' },
      { question: 'When should I visit Europe for the best light?', answer: 'Late spring and early autumn are dependable across much of the continent, with softer light and fewer crowds than midsummer.' },
      { question: 'Is a drone allowed at European landmarks?', answer: 'Rules vary by country and site, and many city landmarks restrict or ban drones. Check the local authority before you fly.' },
    ],
    indiaLine:
      'Some European travellers add India after a long trip around their own continent. If that is your plan, the Taj Mahal at sunrise is the picture most people want to bring home.',
    pitchHeading: 'Adding India to your trip? Shoot the Taj Mahal with a local licensed team',
    pitchIntro:
      'We welcome European guests in Agra. If India is on your route, we can plan the shoot around your flights and hotel.',
    waText: 'Hi, I am traveling from Europe and would like a photoshoot at the Taj Mahal. My dates are:',
    planIds: ['sunrise', 'guided-photo-tour-small'],
  }),
  destination({
    slug: 'best-photography-locations-uk',
    place: 'the United Kingdom',
    title: 'Best Photography Locations in the UK: Coast, Moor and Mountain',
    excerpt:
      'Seven places across Britain that reward early starts and patience, from Skye to the Dorset coast, with the weather rules every UK photographer learns.',
    answer:
      'The UK’s best photography locations are weather-led: Skye’s Old Man of Storr and Fairy Pools, Glencoe in the Highlands, the Lake District’s Buttermere, Dorset’s Durdle Door, Northumberland’s Bamburgh Castle, the Peak District’s Mam Tor and London at dawn. Go at sunrise, check tide and weather the night before, and be ready to wait: British light changes in minutes.',
    image: '/photos/gallery/13.jpg',
    imageAlt: 'International guests with their guide in the Taj Mahal gardens',
    keywords: [
      'best photography locations uk',
      'best places to photograph in britain',
      'uk landscape photography',
      'scotland photography spots',
      'lake district photography',
    ],
    spots: [
      ['Isle of Skye (Scotland)', 'The Old Man of Storr and the Fairy Pools. Mist and moving cloud are the point; arrive before the car parks fill.'],
      ['Glencoe (Scottish Highlands)', 'Dramatic glens and peaks, best in autumn and winter light. Check mountain weather before any walk.'],
      ['Buttermere (Lake District)', 'A still lake and a short walk, ideal for sunrise reflections. Weekday mornings are quietest.'],
      ['Durdle Door (Dorset)', 'A limestone arch on the Jurassic Coast. Check tide times and local access notices.'],
      ['Bamburgh Castle (Northumberland)', 'A castle above a long beach, strongest at sunrise and in low light after storms.'],
      ['Mam Tor and the Peak District', 'Ridgeline views and inversions on cold, still mornings. Check the forecast the night before.'],
      ['London at dawn', 'Tower Bridge, the Thames and Primrose Hill skyline. Empty streets before 7am make the difference.'],
    ],
    technique: [
      'Plan around the weather, not the date. Cloud breaks and clearing storms produce the best British light.',
      'Check tides, sunrise times and the forecast the night before, and decide in the morning.',
      'Waterproof your kit and carry a lens cloth. Rain and spray are part of the work.',
      'Return to a location you love. The UK rewards repeat visits more than most countries.',
    ],
    seasons: [
      'Autumn and winter give the most dramatic light, with lower sun and longer shooting windows.',
      'Spring and early summer bring long evenings and fresh colour.',
      'August is the busiest month in popular areas; start earlier.',
    ],
    rules: [
      'Respect private land and follow the Countryside Code.',
      'Some locations have tide, wildlife or seasonal access restrictions.',
      'Drone rules apply nationwide; check the Civil Aviation Authority’s current guidance.',
    ],
    faqs: [
      { question: 'What are the best photography locations in the UK?', answer: 'Skye, Glencoe, the Lake District, the Dorset coast, Northumberland and London at dawn are among the most photographed. Each rewards an early start.' },
      { question: 'What is the best time of year to photograph in the UK?', answer: 'Autumn and winter offer the most dramatic light, while spring and early summer bring longer days and fresh colour.' },
      { question: 'Do I need a permit to take photographs in the UK?', answer: 'Casual photography in public places does not. Commercial shoots and some private or protected sites need permission.' },
    ],
    indiaLine:
      'British travellers have a long history with India, and the Taj Mahal is often the one place people want to see for themselves. If you are going, a sunrise session makes the most of one early morning.',
    pitchHeading: 'Travelling from the UK to India? Let us plan the Taj Mahal shoot',
    pitchIntro:
      'We welcome British guests in Agra. If you are planning India, we can organise the shoot around your itinerary.',
    waText: 'Hi, I am traveling from the UK and would like a photoshoot at the Taj Mahal. My dates are:',
    planIds: ['sunrise', 'pre-wedding'],
  }),
  destination({
    slug: 'best-photography-locations-canada',
    place: 'Canada',
    title: 'Best Photography Locations in Canada: Lakes, Coasts and Wildlife',
    excerpt:
      'Eight Canadian places photographers plan whole trips around, from Moraine Lake to Peggy’s Cove, with the access rules that catch people out.',
    answer:
      'Canada’s most photographed locations are the Rockies’ Moraine Lake, Lake Louise and Peyto Lake, Jasper’s Maligne Lake, Prince Edward Island’s red cliffs, Nova Scotia’s Peggy’s Cove, Quebec City’s Old Town, the Bay of Fundy’s Hopewell Rocks and Niagara Falls. Go at sunrise, check Parks Canada’s current access and shuttle rules for the Rockies, and leave margin for weather.',
    image: '/photos/gallery/02.jpg',
    imageAlt: 'The Taj Mahal mirrored in the reflecting pool, a still-water frame photographers from lake country know well',
    keywords: [
      'best photography locations canada',
      'banff photography spots',
      'moraine lake photography',
      'canada landscape photography',
      'nova scotia photography locations',
    ],
    spots: [
      ['Moraine Lake (Banff National Park)', 'Turquoise water beneath the Valley of the Ten Peaks. Access to the lake has been managed by Parks Canada shuttles and reservations; check current rules.'],
      ['Lake Louise (Banff National Park)', 'The classic lakeside view. Sunrise is the quiet window; summer crowds arrive early.'],
      ['Peyto Lake (Icefields Parkway)', 'A bright blue lake from an elevated viewpoint. Early morning avoids tour buses.'],
      ['Maligne Lake (Jasper National Park)', 'A long lake and Spirit Island, reached by boat in season. Check boat schedules.'],
      ['Prince Edward Island', 'Red cliffs, dunes and lighthouses. Soft light and long coastal walks.'],
      ['Peggy’s Cove (Nova Scotia)', 'A lighthouse on granite. Stay back from the wet rocks: waves can be dangerous.'],
      ['Old Quebec City (Quebec)', 'Cobbled streets and the Château Frontenac. Quietest at dawn; strongest in winter snow.'],
      ['Hopewell Rocks, Bay of Fundy (New Brunswick)', 'Some of the highest tides in the world. Check tide tables to plan walks on the sea floor.'],
    ],
    technique: [
      'Arrive before sunrise at the Rockies’ famous lakes; they are crowded by mid-morning.',
      'Use a polariser on lakes to control reflections and deepen the colour.',
      'Carry layers and warm batteries; cold drains power quickly.',
      'Respect wildlife distances. A long lens is safer than a close approach.',
    ],
    seasons: [
      'June to September is the main season for the Rockies, with early access and shuttle bookings needed.',
      'September and October bring autumn colour, especially in Quebec and the Maritimes.',
      'Winter is spectacular but needs careful planning for roads and daylight.',
    ],
    rules: [
      'Parks Canada manages access at the Rocky Mountain parks; check shuttle, parking and day-use rules.',
      'Keep clear of wildlife and follow ranger instructions.',
      'Drone use is prohibited in national parks without a permit.',
    ],
    faqs: [
      { question: 'What are the best photography locations in Canada?', answer: 'Moraine Lake, Lake Louise, Peyto Lake, Maligne Lake, Prince Edward Island, Peggy’s Cove, Old Quebec City and the Bay of Fundy are among the most photographed.' },
      { question: 'Can I drive to Moraine Lake?', answer: 'Access has been managed by Parks Canada through shuttles and reservations rather than private vehicles. Check the current rules before you go.' },
      { question: 'Are drones allowed in Canadian national parks?', answer: 'No. Drones are prohibited in national parks unless you hold a special permit.' },
    ],
    indiaLine:
      'Many Canadians have family or friends tied to India, and many more are drawn by the Taj Mahal. If you are planning a trip, a sunrise session is a good way to use a single early morning.',
    pitchHeading: 'Visiting India from Canada? We will plan the Taj Mahal shoot',
    pitchIntro:
      'We welcome Canadian guests in Agra. If you are travelling, we can plan the shoot around your flights, family or hotel.',
    waText: 'Hi, I am traveling from Canada and would like a photoshoot at the Taj Mahal. My dates are:',
    planIds: ['sunrise', 'guided-photo-tour-small'],
  }),
  destination({
    slug: 'best-photography-locations-australia',
    place: 'Australia',
    title: 'Best Photography Locations in Australia: Coast, Outback and City',
    excerpt:
      'Seven Australian locations photographers plan trips around, from the Twelve Apostles to Uluru, with the cultural and access rules to respect.',
    answer:
      'Australia’s best photography locations are the Twelve Apostles on the Great Ocean Road, Uluru-Kata Tjuta at sunrise and sunset, Sydney Harbour from Mrs Macquarie’s Chair, Whitehaven Beach in the Whitsundays, the Blue Mountains’ Three Sisters, Tasmania’s Cradle Mountain and Wineglass Bay, and Western Australia’s Wave Rock. Go early, respect cultural sites, and plan around distance: Australia is bigger than most itineraries allow for.',
    image: '/photos/gallery/18.jpg',
    imageAlt: 'A couple photographed on the lawns with the Taj Mahal behind them',
    keywords: [
      'best photography locations australia',
      'uluru photography',
      'great ocean road photography',
      'australia landscape photography',
      'tasmania photography locations',
    ],
    spots: [
      ['Twelve Apostles (Victoria)', 'Limestone stacks on the Great Ocean Road. Sunrise and sunset are best; summer afternoons are crowded.'],
      ['Uluru-Kata Tjuta (Northern Territory)', 'Sunrise and sunset colour on the rock. The climb has been closed since 2019 and the area has significant cultural meaning; follow all signage and park rules.'],
      ['Sydney Harbour from Mrs Macquarie’s Chair', 'The Opera House and Harbour Bridge together. Sunrise and blue hour give the cleanest light.'],
      ['Whitehaven Beach (Whitsundays)', 'White silica sand and swirling tidal water. Best from the air or from a hilltop lookout around low tide.'],
      ['Three Sisters (Blue Mountains)', 'Sandstone pillars above eucalypt valleys. Early morning mist helps.'],
      ['Cradle Mountain and Wineglass Bay (Tasmania)', 'Alpine lakes and a curved white bay. Weather changes fast; pack for four seasons.'],
      ['Wave Rock (Western Australia)', 'A granite wave formation. Soft, low light makes the texture pop.'],
    ],
    technique: [
      'Shoot at the edges of the day; the midday sun in much of Australia is harsh.',
      'Respect cultural sites and ask before photographing people.',
      'Protect gear from sand, salt and heat.',
      'Plan time for travel: distances are long, and a rushed itinerary produces rushed pictures.',
    ],
    seasons: [
      'The southern spring and autumn are comfortable for most of the country.',
      'The dry season in the north (roughly May to October) suits Outback and tropical locations.',
      'Summer brings heat and bushfire risk in some areas; check warnings.',
    ],
    rules: [
      'Uluru-Kata Tjuta is managed with its traditional owners; follow photography and access signage.',
      'National park fees and permits apply in many places.',
      'Drone rules are set by CASA and park authorities; check before you fly.',
    ],
    faqs: [
      { question: 'What are the best photography locations in Australia?', answer: 'The Twelve Apostles, Uluru, Sydney Harbour, the Whitsundays, the Blue Mountains, Tasmania and Wave Rock are among the most photographed.' },
      { question: 'Can you still climb Uluru?', answer: 'No. The climb has been closed since October 2019. Visitors can walk around the base and view it from designated areas.' },
      { question: 'Are drones allowed in Australian national parks?', answer: 'Often not without a permit. Check CASA rules and the specific park’s policy.' },
    ],
    indiaLine:
      'Some Australian travellers add India to a longer trip through Asia. If you are heading that way, the Taj Mahal at sunrise is a frame worth planning for.',
    pitchHeading: 'Coming to India from Australia? Plan the Taj Mahal shoot with us',
    pitchIntro:
      'We welcome guests from Australia in Agra. If India is on your list, we can plan the shoot around your arrival and hotel.',
    waText: 'Hi, I am traveling from Australia and would like a photoshoot at the Taj Mahal. My dates are:',
    planIds: ['sunrise', 'pre-wedding'],
  }),

  /* ───────────────────────── India from abroad ───────────────────────── */
  {
    slug: 'india-photography-trip-from-usa',
    title: 'Planning a Photography Trip to India From the USA (First-Timer’s Guide)',
    excerpt:
      'Flights, jet lag, timing, the Taj Mahal rules and what to book before you leave, written for American photographers and travellers visiting India for the first time.',
    answer:
      'From the US, plan roughly 14 to 17 hours on a nonstop flight to Delhi (several US cities have one), then a two- to four-hour road or rail trip to Agra. India is about 9.5 to 13.5 hours ahead of US time zones depending on region and season, so arrive a day early for jet lag. The best season for the Taj Mahal is October to March, the monument is closed on Fridays, and professional camera equipment needs a permit that only a licensed photographer can hold. Check visa rules on the official Indian government portal before booking.',
    published: DATE,
    updated: DATE,
    readingMinutes: 8,
    image: '/photos/gallery/13.jpg',
    imageAlt: 'International guests with their licensed guide in the Taj Mahal gardens after arriving from abroad',
    category: 'India from abroad',
    keywords: [
      'photography trip to india from usa',
      'taj mahal photographer for american tourists',
      'india travel from united states',
      'visiting taj mahal from usa',
      'india photography itinerary',
      'first time india photography trip',
    ],
    planIds: ['sunrise', 'guided-photo-tour-small', 'pre-wedding'],
    sections: [
      {
        heading: 'Getting there',
        body: [
          'Several US cities have nonstop flights to Delhi, usually 14 to 17 hours depending on route and direction. Many travellers connect through Europe or the Gulf instead, which adds time but can lower the price. Delhi is the usual gateway for Agra.',
          'From Delhi, the Taj Mahal is roughly 200 to 230 kilometres away. Most visitors travel by road in three to four hours, or by fast train in roughly two. A hotel pickup or a private car is the least stressful way to do it after a long flight.',
        ],
      },
      {
        heading: 'Jet lag and time difference',
        body: [
          'India Standard Time is UTC+5:30 and does not change with the seasons. That puts India roughly 9.5 to 10.5 hours ahead of US Eastern time and 12.5 to 13.5 hours ahead of Pacific time, depending on daylight saving. Sunrise bookings start very early, so arrive at least one full day before any dawn shoot.',
        ],
      },
      {
        heading: 'When to go',
        body: [
          'October to March is the main season: cooler air, clearer mornings and the best conditions for photography. December and January can bring morning fog in northern India, which can delay or soften sunrise; we cover that in our fog and monsoon guide. April to June is hot, and July to September is monsoon, which has its own moody light but unpredictable weather.',
          'The Taj Mahal is closed to visitors on Fridays. Plan around that when you set your dates.',
        ],
      },
      {
        heading: 'Visas, money and practical checks',
        list: [
          'Check the visa rules for your passport on the official Indian government e-Visa portal. Eligibility, fees and processing times change.',
          'Carry a card that works abroad and some cash for small purchases. We accept UPI, bank transfer, card or PayPal for bookings, and the balance can be paid in INR, USD, EUR or GBP.',
          'Confirm your phone plan or buy a local SIM at the airport so you can reach your driver and photographer on arrival.',
          'Book your sunrise slot and photographer before you leave. Peak weeks fill first.',
        ],
      },
      {
        heading: 'Photographing the Taj Mahal: what to know before you land',
        body: [
          'Casual photography with a phone or a small camera needs no permit. Professional equipment such as tripods, multiple lenses and external flash requires a permit issued by the Ministry of Tourism, and only a licensed photographer can hold it. Photography is not allowed inside the main mausoleum, and tickets for the monument are not included in our packages.',
          'If you want professional-quality pictures, the simplest route is to book a licensed photographer who handles the permit, the timing and the entry, and meets you at your hotel.',
        ],
      },
      {
        heading: 'A three-day photographer’s route',
        list: [
          'Day 1: Arrive in Delhi, rest, optional evening at a heritage site.',
          'Day 2: Early drive to Agra for a sunrise session at the Taj Mahal, then Agra Fort and a late lunch.',
          'Day 3: Back-side sunset view from the river bank, or continue to Jaipur on the Golden Triangle route.',
        ],
      },
    ],
    faqs: [
      { question: 'How long is the flight from the USA to India?', answer: 'Nonstop flights from US cities to Delhi are typically about 14 to 17 hours, depending on departure city and direction. Connecting flights take longer.' },
      { question: 'Do I need a visa to visit India from the USA?', answer: 'Most visitors need one. Check the official Indian government e-Visa portal for the current rules, eligibility and fees, as they change.' },
      { question: 'What is the best time of year to photograph the Taj Mahal?', answer: 'October to March offers the best mix of weather and light. December and January can bring morning fog.' },
      { question: 'Can I bring my own professional camera gear to the Taj Mahal?', answer: 'Small cameras and phones are fine. Tripods, flash and extra lenses count as professional equipment and need a permit held by a licensed photographer.' },
    ],
    pitch: pitch(
      'Book the Taj Mahal sunrise before you fly',
      'We welcome American guests at the Taj Mahal. We can meet you at your hotel, arrange the permit and keep the plan simple after a long flight.',
      'Hi, I am traveling from the USA to India and would like a Taj Mahal photoshoot. My dates are:',
    ),
  },
  {
    slug: 'india-photography-trip-from-mexico',
    title: 'Viaje de fotografía a la India desde México: guía completa (Mexico to India Photography Trip)',
    excerpt:
      'A practical guide for Mexican and Latin American travellers: connecting flights, time difference, timing, the Taj Mahal rules and how to book a licensed photographer.',
    answer:
      'There is no nonstop flight from Mexico City to Delhi, so plan at least one connection and roughly 21 hours or more of travel in total. India is about 11.5 hours ahead of Mexico City time, so arrive a day early. The best season for the Taj Mahal is October to March, the monument is closed on Fridays, and professional camera equipment needs a permit that only a licensed photographer can hold. Check visa and entry rules on the official Indian government portal before booking. Hablamos español: our Spanish page is at tajmahalphotography.com/es.',
    published: DATE,
    updated: DATE,
    readingMinutes: 7,
    image: '/photos/gallery/05.jpg',
    imageAlt: 'A couple on the lawns with the Taj Mahal behind them, the kind of frame Mexican travellers ask for',
    category: 'India from abroad',
    keywords: [
      'viaje a la india desde mexico',
      'fotografo taj mahal en español',
      'taj mahal fotografia mexicanos',
      'mexico to india photography trip',
      'sesion de fotos taj mahal',
      'india travel from mexico',
    ],
    planIds: ['sunrise', 'pre-wedding', 'guided-photo-tour-small'],
    sections: [
      {
        heading: 'Cómo llegar (getting there)',
        body: [
          'Search results currently show no nonstop flight between Mexico City and Delhi, so plan one connection, typically through Europe, the Gulf or North America. Total travel time is usually about 21 hours or more, depending on the layover. Compare total journey time, not just price.',
          'From Delhi, Agra is roughly 200 to 230 kilometres away. Most visitors take a private car (three to four hours) or a fast train (about two hours). A hotel pickup is the easiest way to do it after a long journey.',
        ],
      },
      {
        heading: 'Diferencia horaria (time difference)',
        body: [
          'India Standard Time is UTC+5:30 and does not change with the seasons. Mexico City is on UTC−6 year-round, so India is about 11.5 hours ahead. That makes the first day or two difficult. Arrive at least a day before any sunrise shoot.',
        ],
      },
      {
        heading: 'Cuándo ir (when to go)',
        body: [
          'October to March is the main season: cooler weather, clearer mornings and the most comfortable conditions for photography. December and January can bring fog in northern India. April to June is hot, and July to September is monsoon.',
          'The Taj Mahal is closed on Fridays.',
        ],
      },
      {
        heading: 'Lo que se siente familiar',
        body: [
          'Mexican travellers may notice something familiar in India: marigold garlands that echo cempasúchil at Día de Muertos, the saturated colour, the way families gather for celebrations. It may be one reason India feels less foreign than expected.',
        ],
      },
      {
        heading: 'Entry, money and practical checks',
        list: [
          'Check visa and entry rules for your passport on the official Indian government portal. Eligibility, fees and processing times change.',
          'We accept UPI, bank transfer, card or PayPal for bookings, and the balance can be paid in INR, USD, EUR or GBP.',
          'Book your sunrise slot before you fly. Peak weeks fill first.',
          'Tell us your language preference. We communicate in English, and we have a Spanish page at tajmahalphotography.com/es.',
        ],
      },
      {
        heading: 'Fotografiar el Taj Mahal: reglas básicas',
        body: [
          'Casual photography with a phone or a small camera needs no permit. Tripods, multiple lenses and external flash count as professional equipment and need a permit issued by the Ministry of Tourism, which only a licensed photographer can hold. Photography is not allowed inside the main mausoleum, and tickets for the monument are not included in our packages.',
        ],
      },
    ],
    faqs: [
      { question: '¿Hay vuelos directos de México a la India?', answer: 'Currently there is no nonstop flight between Mexico City and Delhi. Plan at least one connection and compare total travel time.' },
      { question: '¿Necesito visa para viajar a la India desde México?', answer: 'Check the official Indian government portal for the current rules for your passport, because eligibility and fees change.' },
      { question: '¿Cuál es la mejor época para fotografiar el Taj Mahal?', answer: 'October to March offers the best weather and light. December and January can bring morning fog.' },
      { question: 'Can I book a photographer who speaks Spanish?', answer: 'We communicate in English and have a Spanish page at tajmahalphotography.com/es. Send us a message and we will help you plan.' },
    ],
    pitch: pitch(
      'Tu sesión de fotos en el Taj Mahal, bien planeada',
      'Welcome to guests from Mexico and Latin America. We plan the sunrise, arrange the permit and deliver your edited photos within 48 to 72 hours.',
      'Hola, viajo desde México a la India y quiero una sesión de fotos en el Taj Mahal. Mis fechas son:',
    ),
  },
  {
    slug: 'india-photography-trip-from-europe-uk-australia',
    title: 'India Photography Trip From the UK, Europe or Australia: Plan It in One Page',
    excerpt:
      'Time difference, flights, season and the Taj Mahal rules for photographers coming from the UK, Europe, Australia and New Zealand.',
    answer:
      'From the UK and Europe, direct and one-stop flights reach Delhi in roughly 8 to 10 hours; from Australia plan a one-stop trip of around 14 to 18 hours. India is about 4.5 to 5.5 hours ahead of the UK, 3.5 to 4.5 ahead of central Europe, and 4.5 to 5.5 hours behind eastern Australia, depending on daylight saving. The best season for the Taj Mahal is October to March, it is closed on Fridays, and professional camera gear needs a permit that only a licensed photographer can hold. Check visa rules on the official Indian government portal before you book.',
    published: DATE,
    updated: DATE,
    readingMinutes: 7,
    image: '/photos/gallery/12.jpg',
    imageAlt: 'Guests photographed with their guide in front of the Taj Mahal after a flight from Europe',
    category: 'India from abroad',
    keywords: [
      'india photography trip from uk',
      'taj mahal photographer for european tourists',
      'visit taj mahal from australia',
      'india travel from europe',
      'india photography itinerary uk',
      'golden triangle photography',
    ],
    planIds: ['sunrise', 'guided-photo-tour-small', 'pre-wedding'],
    sections: [
      {
        heading: 'Flights and the first day',
        body: [
          'Direct and one-stop flights from the UK and western Europe reach Delhi in roughly 8 to 10 hours. From Australia, a one-stop journey takes around 14 to 18 hours depending on the connection. The short time difference from Europe makes jet lag manageable; from Australia, the difference is also moderate, so many travellers recover within a day.',
          'From Delhi, Agra is roughly 200 to 230 kilometres away: three to four hours by car or roughly two by fast train.',
        ],
      },
      {
        heading: 'Time difference at a glance',
        table: {
          head: ['Departing from', 'India is'],
          rows: [
            ['United Kingdom', 'About 5.5 hours ahead in winter, 4.5 in summer'],
            ['Central Europe', 'About 4.5 hours ahead in winter, 3.5 in summer'],
            ['Eastern Australia', 'About 4.5 to 5.5 hours behind, depending on daylight saving'],
          ],
        },
      },
      {
        heading: 'When to go',
        body: [
          'October to March is the main season, with cooler weather and clearer mornings. December and January can bring fog in the north; April to June is hot; July to September is monsoon. The Taj Mahal is closed on Fridays.',
        ],
      },
      {
        heading: 'Practical checks',
        list: [
          'Check visa rules for your passport on the official Indian government portal.',
          'We accept UPI, bank transfer, card or PayPal, and the balance can be paid in INR, USD, EUR or GBP.',
          'Book your sunrise photographer before you fly. Peak weeks fill first.',
          'Plan an extra day if you are continuing to Jaipur on the Golden Triangle route.',
        ],
      },
      {
        heading: 'Photographing the Taj Mahal',
        body: [
          'Casual photography with a phone or small camera needs no permit. Tripods, multiple lenses and flash count as professional equipment and need a permit issued by the Ministry of Tourism, which only a licensed photographer can hold. Photography is not allowed inside the main mausoleum, and monument tickets are not included in our packages.',
        ],
      },
    ],
    faqs: [
      { question: 'How long is the flight from the UK to India?', answer: 'Direct flights from London to Delhi take roughly 8 to 10 hours; one-stop routes take longer.' },
      { question: 'How far is Agra from Delhi?', answer: 'Roughly 200 to 230 kilometres, which is three to four hours by car or roughly two by fast train.' },
      { question: 'Do I need a visa to visit India?', answer: 'Most visitors do. Check the official Indian government portal for current rules and fees.' },
    ],
    pitch: pitch(
      'Plan the Taj Mahal shoot around your flights',
      'We welcome guests from Europe, the UK and Australia. We can plan the shoot around your arrival time and hotel.',
      'Hi, I am traveling from Europe, the UK or Australia and would like a Taj Mahal photoshoot. My dates are:',
    ),
  },

  /* ───────────────────────── Collaborations ───────────────────────── */
  {
    slug: 'photographers-influencers-visiting-india-collaborate',
    title: 'Photographers and Creators Visiting India: Collaborate With a Licensed Taj Mahal Team',
    excerpt:
      'How travel photographers, filmmakers and influencers can work with a Ministry of Tourism licensed team in Agra: access, local knowledge and co-created content.',
    answer:
      'If you are a photographer, filmmaker or creator coming to India, we are open to collaborations in Agra. We are a Ministry of Tourism licensed team who can explain the permit rules for professional equipment at the Taj Mahal, plan the light and the route, and co-create content with you. Terms are agreed case by case before anything is booked. Message us your audience, your dates and what you want to make.',
    published: DATE,
    updated: DATE,
    readingMinutes: 5,
    image: '/photos/gallery/04.jpg',
    imageAlt: 'A couple in the red sandstone colonnade at Agra Fort, a location creators ask about',
    category: 'Collaborations',
    byline: TEAM,
    keywords: [
      'collaborate taj mahal photographer',
      'influencer collaboration india',
      'travel creator india taj mahal',
      'photographers visiting india',
      'taj mahal content creation permit',
      'india fixer photographers',
    ],
    planIds: ['sunrise', 'taj-agra-fort'],
    sections: [
      {
        heading: 'Who we want to work with',
        list: [
          'Travel photographers and filmmakers planning a trip through India, Agra and the Golden Triangle.',
          'Creators whose audience cares about travel, culture, weddings or portraits.',
          'Photographers who want a local licensed partner for permits, timing and logistics.',
          'Couples and family creators who want a Taj Mahal story told well.',
        ],
      },
      {
        heading: 'What we can offer',
        list: [
          'Clear guidance on the permit rules for professional equipment at the Taj Mahal. Only a licensed photographer can hold the permit, so we explain which route fits your kit before you fly.',
          'Local knowledge of light, timing and quiet corners of the monument and Agra Fort.',
          'A local team that can meet you at your hotel and handle logistics on the day.',
          'Co-created content: we can plan a shoot together and share the results, with usage terms agreed up front.',
        ],
      },
      {
        heading: 'What we ask for',
        list: [
          'Who you are and where your work appears: a portfolio, a channel or a link.',
          'Your dates in India and what you want to make.',
          'The kit you plan to bring, so we can explain which permit applies.',
          'What you would like from a collaboration, so we can say honestly whether we are a good fit.',
        ],
      },
      {
        heading: 'How it works',
        list: [
          'You message us on WhatsApp with your plan and links.',
          'We reply with whether we can help, what the rules mean for your kit and what a plan could look like.',
          'We agree terms up front before anything is booked. We do not make blanket offers.',
          'On the day, we handle timing and access so you can focus on the work.',
        ],
      },
      {
        heading: 'A word on the rules',
        body: [
          'The Taj Mahal has strict rules for professional equipment. A permit issued by the Ministry of Tourism is needed for tripods, multiple lenses and flash, only a licensed photographer can hold it, and drones are not permitted. Photography is not allowed inside the main mausoleum. We would rather explain this before you fly than on the gate.',
        ],
      },
    ],
    faqs: [
      { question: 'Do you pay creators or offer free tours?', answer: 'We do not make blanket offers. Terms depend on the audience, the content and what we both want to make, and they are agreed up front before anything is booked.' },
      { question: 'Can I hold the Taj Mahal permit myself as a visiting photographer?', answer: 'Only a licensed photographer can hold the permit for professional equipment. Message us before you fly and we will explain which route fits your kit.' },
      { question: 'Can you help with places beyond the Taj Mahal?', answer: 'Yes. We can help plan Agra Fort, the river bank at sunset and the wider Golden Triangle route.' },
      { question: 'How do I start a conversation?', answer: 'Message us on WhatsApp with your portfolio or channel, your dates and what you want to make.' },
    ],
    pitch: pitch(
      'Let’s make something together in Agra',
      'We like working with people who care about the place as much as we do.',
      'Hi, I would like to discuss a collaboration in Agra. My name/channel, dates and idea are:',
    ),
  },
];

/* ───────────────────────── Builder for the country guides ───────────────────────── */

type DestinationInput = {
  slug: string;
  place: string;
  title: string;
  excerpt: string;
  answer: string;
  image: string;
  imageAlt: string;
  keywords: string[];
  spots: [string, string][];
  technique: string[];
  seasons: string[];
  rules: string[];
  faqs: { question: string; answer: string }[];
  indiaLine: string;
  pitchHeading: string;
  pitchIntro: string;
  waText: string;
  planIds: string[];
};

function destination(d: DestinationInput): BlogPost {
  return {
    slug: d.slug,
    title: d.title,
    excerpt: d.excerpt,
    answer: d.answer,
    published: DATE,
    updated: DATE,
    readingMinutes: 7,
    image: d.image,
    imageAlt: d.imageAlt,
    category: 'World locations',
    byline: TEAM,
    keywords: d.keywords,
    planIds: d.planIds,
    sections: [
      {
        heading: `How this guide for ${d.place} was made`,
        body: [
          visitedNote,
          'Each place below was chosen for the quality of its light, how repeatable a good result is, and how clear the access rules are. The best photographs in any of them come from arriving early, waiting for the light and returning more than once.',
        ],
      },
      {
        heading: 'The places',
        table: { head: ['Location', 'What to know'], rows: d.spots },
      },
      {
        heading: 'How to get the picture, not the postcard',
        list: d.technique,
      },
      {
        heading: 'Seasons and planning',
        list: d.seasons,
      },
      {
        heading: 'Rules to confirm before you go',
        list: d.rules,
      },
      {
        heading: 'Why attachment beats equipment',
        body: [
          'The photographers who return from these places with strong work are rarely the ones with the most equipment. They are the ones who learned the place first, went back at different hours and cared about the story. We wrote about this in our essay on why photographers plateau, and it applies at every location above.',
        ],
      },
      {
        heading: 'If your route continues to India',
        body: [d.indiaLine],
      },
    ],
    faqs: d.faqs,
    pitch: { heading: d.pitchHeading, body: [d.pitchIntro, 'We are a Ministry of Tourism licensed photography team in Agra. Professional equipment at the Taj Mahal needs a permit that only a licensed photographer can hold, so we handle it, meet you at your hotel, and deliver edited photos within 48 to 72 hours.'], whatsappText: d.waText },
  };
}
