import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyWhatsApp from '@/components/StickyWhatsApp';
import ContactForm from '@/components/ContactForm';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  breadcrumbSchema,
  serviceSchema,
  luxuryTourSchema,
  faqSchema,
  speakableSpec,
  webPageSchema,
  graphSchema,
  jsonLd,
  SITE,
  LAST_UPDATED,
} from '@/lib/seo';

type ServiceData = {
  title: string;
  description: string;
  quickAnswer: string;
  longDescription: string;
  image: string;
  features: string[];
  price: number;
  duration: string;
  bestFor: string;
  tourSlug?: 'sunrise-luxury-innova' | 'sunrise-luxury-urbania';
  itinerary?: { time: string; title: string; detail: string }[];
  faqs: { question: string; answer: string }[];
  audience?: string;
};

const servicesData: Record<string, ServiceData> = {
  'quick-capture': {
    title: 'Quick Capture | 30-Minute Taj Mahal Photoshoot',
    description: 'A 30-minute Taj Mahal photoshoot with 30 raw photos delivered as a digital album — ideal for budget travellers.',
    quickAnswer:
      'A 30-minute Taj Mahal photoshoot by a government-licensed photographer. $49 USD, includes 30 raw photos delivered as a digital album. No physical prints. Ideal for budget travellers and short visits who still want professional shots without the long session.',
    longDescription:
      'Quick Capture is the most affordable way to get professional Taj Mahal photographs. In 30 focused minutes the licensed photographer takes you to the iconic vantage points — the reflecting pool, the elevated platform, and a couple of garden angles — and captures 30 raw, high-resolution images. The album is delivered digitally. Best for solo travellers and couples who are short on time but still want photographs that smartphones cannot match.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1920&auto=format&fit=crop',
    features: ['30 Minute Session', '30 Raw Photos (Digital Album)', 'Official Photography Permit', 'No Physical Prints', 'Instant Digital Delivery'],
    price: 49,
    duration: '30 Minutes',
    bestFor: 'Budget travellers, quick visits, short layovers',
    faqs: [
      { question: 'How long is the Quick Capture session?', answer: 'The session is 30 minutes inside the Taj Mahal complex with a government-licensed photographer.' },
      { question: 'How many photos do I receive?', answer: '30 raw, high-resolution photos delivered digitally. No printed photos.' },
      { question: 'Is the photography permit included?', answer: 'Yes. The official Ministry of Tourism photography permit is included in the $49 price. Monument entry tickets are separate.' },
    ],
  },
  couple: {
    title: 'Couple & Pre-Wedding Photography',
    description: 'Editorial-style romantic portraits celebrating your love story against the ultimate monument of love.',
    quickAnswer:
      'A 2+ hour editorial couple or pre-wedding photoshoot at the Taj Mahal in Agra. $199 USD, includes 100+ high-resolution photos, 50 printed photographs, a 30-second cinematic video, posing direction, and an official government photography permit. Government-licensed photographer authorized to bring professional equipment inside the monument.',
    longDescription:
      'The Taj Mahal is the greatest monument to love ever built, making it the perfect backdrop for couple and pre-wedding photography. Our editorial-style sessions combine natural posing with creative direction to capture authentic emotion. We guide couples through the best angles, manage crowd movement for clean backgrounds, and utilize the changing light to create a diverse, magazine-worthy gallery.',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1920&auto=format&fit=crop',
    features: ['2+ Hour Session', '100+ Natural High-Resolution Photos', '50 Raw Physical Photographs', '30 Second Cinematic Video', 'Outfit Change Guidance (Outside Gates)', 'Posing Direction & Creative Styling'],
    price: 199,
    duration: '2+ Hours',
    bestFor: 'Engagements, Pre-Weddings, Anniversaries',
    faqs: [
      { question: 'How much does a couple photoshoot at the Taj Mahal cost?', answer: 'The Couple & Pre-Wedding package is $199 USD for a 2+ hour editorial session including 100+ high-resolution photos, 50 printed photographs, and a 30-second cinematic video.' },
      { question: 'Can we change outfits during the shoot?', answer: 'Yes. Outfit changes are allowed outside the monument gates. We plan the outfit sequence in advance so you maximise the session time inside the Taj Mahal complex.' },
      { question: 'When will we receive our photos?', answer: 'A private online gallery with your high-resolution photos is delivered within 48 to 72 hours. Printed photographs follow by courier or hand-off.' },
    ],
  },
  'pre-wedding': {
    title: 'Pre-Wedding Photography at the Taj Mahal',
    description: 'Editorial-style romantic portraits celebrating your upcoming wedding at the monument of love.',
    quickAnswer:
      'A pre-wedding photoshoot at the Taj Mahal in Agra by a government-licensed photographer. $199 USD for a 2+ hour session, 100+ high-resolution photos, 50 printed photographs, and a 30-second cinematic video. Authorized to bring professional photo equipment inside the complex.',
    longDescription:
      'A pre-wedding photoshoot at the Taj Mahal creates timeless images for your wedding invitations, save-the-dates, and personal collection. We specialize in creating diverse looks within a single session, guiding you through formal portraits, candid interactions, and creative compositions that tell your unique story. Our knowledge of the monument ensures we capture every iconic angle while avoiding crowds.',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1920&auto=format&fit=crop',
    features: ['2+ Hour Session', '100+ Natural High-Resolution Photos', '50 Raw Physical Photographs', '30 Second Cinematic Video', 'Outfit Change Guidance (Outside Gates)', 'Posing Direction & Creative Styling'],
    price: 199,
    duration: '2+ Hours',
    bestFor: 'Couples planning their wedding',
    faqs: [
      { question: 'Is the Taj Mahal a good location for pre-wedding photos?', answer: 'Yes. The Taj Mahal is the most iconic monument-to-love in the world. Sunrise gives you soft golden light, fewer crowds, and a clean backdrop ideal for editorial pre-wedding portraits.' },
      { question: 'Do we need a permit for a pre-wedding shoot?', answer: 'Yes — professional photography inside the Taj Mahal requires a permit issued by the Ministry of Tourism. The permit is included in this package.' },
    ],
  },
  family: {
    title: 'Family Vacation Photography at the Taj Mahal',
    description: 'Preserve your family memories with beautiful group portraits and candid shots at the Taj Mahal.',
    quickAnswer:
      'A 1.5-hour family photoshoot at the Taj Mahal in Agra. $299 USD, includes 40+ high-resolution photos, group and individual portraits, and a child-friendly pace. Official photography permit and government-licensed photographer included.',
    longDescription:
      'Family trips to the Taj Mahal deserve more than smartphone snapshots. Our family photography sessions are designed with a relaxed, child-friendly pace that keeps everyone comfortable while we capture beautiful group portraits and spontaneous moments. We know exactly where to position groups for the best compositions and how to keep young children engaged for natural expressions.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1920&auto=format&fit=crop',
    features: ['1.5 Hour Session', '40+ High-Res Photos', 'Group and Individual Portraits', 'Child-Friendly Pacing', 'Private Online Gallery (48hr delivery)'],
    price: 299,
    duration: '1.5 Hours',
    bestFor: 'Families with children, Multi-generational groups',
    faqs: [
      { question: 'Is the Taj Mahal good for family photos with young children?', answer: 'Yes. The gardens are wide and stroller-friendly, and a sunrise visit avoids the busiest crowds. Our family sessions are paced for children with short breaks built in.' },
      { question: 'How many photos do we get?', answer: '40+ high-resolution photos delivered within 48 hours via a private online gallery.' },
    ],
  },
  'taj-agra-fort': {
    title: 'Taj Mahal + Agra Fort Heritage Trail Photography',
    description: 'A 5-hour photography trail covering both UNESCO World Heritage sites — Taj Mahal at sunrise and Agra Fort in morning light.',
    quickAnswer:
      'A 5-hour Heritage Trail photography session covering the Taj Mahal at sunrise and Agra Fort in morning light. $399 USD, includes 250+ high-resolution photos, photography permits for both monuments, transport between them, historical context during the shoot, and 48-hour gallery delivery. Monument entry tickets not included.',
    longDescription:
      'The Heritage Trail combines the two most iconic Mughal monuments in Agra into one visual story. We start at the Taj Mahal east gate for sunrise, capturing the changing colours on the marble for about two hours, then move to Agra Fort while the morning light is still soft. The licensed photographer is authorised at both monuments and knows the angles that frame the Taj Mahal from the fort balconies — the same view from which Shah Jahan reportedly gazed at the mausoleum during his imprisonment. 250+ high-resolution photos delivered within 48 hours.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1920&auto=format&fit=crop',
    features: ['5 Hour Session', '250+ High-Resolution Photos', 'Permits for Taj Mahal AND Agra Fort', 'Sunrise at Taj, Morning at Fort', 'Transport between monuments', 'Historical context during the shoot', '48-Hour Gallery Delivery'],
    price: 399,
    duration: '5 Hours',
    bestFor: 'History enthusiasts, architecture lovers, couples wanting more than just the Taj',
    faqs: [
      { question: 'Are tickets to both monuments included?', answer: 'Monument entry tickets are not included in the Heritage Trail package; only the photography permits for both Taj Mahal and Agra Fort are included. Tickets can be purchased on the day, or upgrade to a Sunrise Luxury Tour from Delhi which bundles tickets.' },
      { question: 'How long is the gap between Taj Mahal and Agra Fort?', answer: 'Roughly 15 minutes by car. We aim to finish the Taj Mahal session by 8:30 AM and begin Agra Fort by 9:00 AM so the light is still soft.' },
      { question: 'Can we add Mehtab Bagh (back side of the Taj)?', answer: 'Mehtab Bagh is included in the Full Day Agra Experience ($499). For the Heritage Trail, focus is on the two UNESCO sites.' },
    ],
  },
  'full-day': {
    title: 'Full Day Agra Photography Experience',
    description: 'Complete photographic coverage of Agra — Taj Mahal, Agra Fort, and Mehtab Bagh (back side of Taj) — in a single 8–10 hour day.',
    quickAnswer:
      'A full-day Agra photography experience covering the Taj Mahal at sunrise, Agra Fort in the morning, and Mehtab Bagh (back side of the Taj Mahal) at sunset. $499 USD for 8–10 hours, 350+ high-resolution photos, monument permits, multiple outfit changes, dedicated A/C transport, and 48-hour gallery delivery.',
    longDescription:
      'The Full Day Agra Experience is our most comprehensive photography package for visitors based in Agra. Beginning at the Taj Mahal east gate for sunrise, the day moves through Agra Fort in the morning, an optional lunch break, and ends at Mehtab Bagh across the Yamuna river for the famous back-side sunset shot. The licensed photographer brings professional equipment to all three monuments. Multiple outfit changes are accommodated between locations, dedicated A/C transport handles the logistics, and 350+ high-resolution photos are delivered within 48 hours.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1920&auto=format&fit=crop',
    features: ['8–10 Hour Session', '350+ High-Resolution Photos', 'All Monument Photography Permits', 'Taj Mahal + Agra Fort + Mehtab Bagh', 'Multiple Outfit Changes', 'Dedicated A/C Transport', '48-Hour Gallery Delivery'],
    price: 499,
    duration: '8–10 Hours',
    bestFor: 'Influencers, content creators, VIPs, full-portfolio visits',
    faqs: [
      { question: 'What is Mehtab Bagh and why is it included?', answer: 'Mehtab Bagh is the garden complex directly opposite the Taj Mahal across the Yamuna river, originally part of the same Mughal landscape design. It is the best sunset vantage point for the Taj Mahal and provides the famous "back side" view.' },
      { question: 'Can we add a pre-wedding component to the full day?', answer: 'Yes. The Pre-Wedding & Couple package ($199) can be combined with the Full Day Experience for a customised quote. Contact us on WhatsApp to discuss.' },
      { question: 'Is transport included between locations?', answer: 'Yes. Dedicated A/C transport with a driver is included for the day, covering the three monuments and any lunch/refreshment stops.' },
    ],
  },
  'guided-photo-tour-small': {
    title: 'Guided Tour + Photo Combo · Small Group (1–5 Guests)',
    description: 'A licensed local guide plus a professional photographer at the Taj Mahal and Agra Fort, with 30 digital and 30 printed photos. $79 total for up to 5 guests.',
    quickAnswer:
      'A budget-friendly guide + photographer combo at the Taj Mahal and Agra Fort for 1 to 5 guests. $79 USD total. Includes a licensed local guide, a professional photographer, 30 natural high-resolution digital photos and 30 premium printed photo copies. Monument entry tickets are not included.',
    longDescription:
      'This combo package pairs a licensed local guide with a professional photographer for a single fixed price across the Taj Mahal and Agra Fort. The guide narrates the Mughal history of both monuments while the photographer captures you at every iconic vantage point — the reflecting pool, the elevated platform, the gardens at the Taj, the Diwan-i-Khas, Sheesh Mahal and the famous balcony view of the Taj from Agra Fort. You receive 30 natural high-resolution digital photos and 30 premium printed copies. Best for couples, solo travellers and small families up to 5 guests. Monument entry tickets are separate.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1920&auto=format&fit=crop',
    features: [
      'Licensed local guide for Taj Mahal & Agra Fort',
      'Professional photographer alongside',
      '30 natural high-resolution digital photos',
      '30 premium printed photo copies',
      'Best photo locations & pose assistance',
      'Personalised pacing for couples and small families',
      'Up to 5 guests in the package',
    ],
    price: 79,
    duration: 'Half day',
    bestFor: 'Couples, solo travellers, small families (1–5 guests)',
    faqs: [
      { question: 'How many people does the $79 small-group package cover?', answer: 'The $79 USD price is for up to 5 guests in total. For groups of 6 or more, the $99 large-group package is the right choice.' },
      { question: 'Are monument entry tickets included?', answer: 'No. Taj Mahal and Agra Fort entry tickets are not included and must be purchased separately. Photography permits ARE included.' },
      { question: 'Do I get both digital and printed photos?', answer: 'Yes — 30 natural high-resolution digital photos delivered to a private gallery, plus 30 premium printed photo copies.' },
      { question: 'Does the package cover Agra Fort as well?', answer: 'Yes. Both the Taj Mahal and Agra Fort are covered with the same guide and photographer.' },
    ],
  },
  'guided-photo-tour-large': {
    title: 'Guided Tour + Photo Combo · Large Group (6–12 Guests)',
    description: 'The same guide + photographer combo at the Taj Mahal and Agra Fort, scaled up for groups of 6 to 12 guests. Group portraits plus individual portraits. $99 total.',
    quickAnswer:
      'A guide + photographer combo at the Taj Mahal and Agra Fort for groups of 6 to 12 guests. $99 USD total. Includes a licensed local guide, a professional photographer, group portraits and individual portraits, 30 natural high-resolution digital photos and 30 premium printed photo copies. Monument entry tickets are not included.',
    longDescription:
      'Built for larger families and friend groups visiting Agra together, this package covers up to 12 guests for a single fixed price. The licensed local guide narrates the Mughal history of the Taj Mahal and Agra Fort while the photographer captures group portraits alongside individual portraits at every iconic spot. You receive 30 natural high-resolution digital photos and 30 premium printed copies for the group. Monument entry tickets are separate. For groups of 5 or fewer, the $79 small-group package is the right pick.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1920&auto=format&fit=crop',
    features: [
      'Licensed local guide for Taj Mahal & Agra Fort',
      'Professional photographer alongside',
      '30 natural high-resolution digital photos',
      '30 premium printed photo copies',
      'Group portraits AND individual portraits',
      'Best photo locations & pose assistance',
      'Up to 12 guests in the package',
    ],
    price: 99,
    duration: 'Half day',
    bestFor: 'Families and groups travelling together (6–12 guests)',
    faqs: [
      { question: 'How many people does the $99 large-group package cover?', answer: 'Up to 12 guests in total. Larger groups can be split into multiple packages — message us on WhatsApp for a tailored quote.' },
      { question: 'Do we get group portraits and individual portraits?', answer: 'Yes. The photographer captures group portraits of everyone together AND individual portraits during the walk through the Taj Mahal and Agra Fort.' },
      { question: 'Are monument tickets included?', answer: 'No. Taj Mahal and Agra Fort entry tickets are purchased separately. The photography permits and the guide are included.' },
      { question: 'How is this different from the Heritage Trail ($399)?', answer: 'This $99 combo focuses on a guided walk plus 30+30 photographs. The Heritage Trail is a 5-hour dedicated photography session with 250+ high-resolution photos and a fully managed schedule — more output, no group cap.' },
    ],
  },
  proposal: {
    title: 'Surprise Proposal Photography at the Taj Mahal',
    description: 'Capture the exact moment she says yes with the Taj Mahal as your backdrop.',
    quickAnswer:
      'A discreet surprise-proposal photoshoot at the Taj Mahal. $350 USD for a 1.5-hour session, includes secret coordination, 50+ high-resolution photos, a same-day sneak peek (3–5 photos), and a post-proposal couple session. The photographer poses as a casual tourist until the proposal moment.',
    longDescription:
      'Planning a proposal at the Taj Mahal? We help coordinate every detail discreetly. We position ourselves as casual tourists while you lead your partner to the perfect spot. The moment you get down on one knee, we capture every expression, tear, and embrace in high resolution. After the proposal, we transition into a celebratory couple session to capture the joy of your new engagement.',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1920&auto=format&fit=crop',
    features: ['1.5 Hour Session', 'Secret Coordination & Planning', '50+ High-Res Photos', 'Same-Day Sneak Peek (3-5 photos)', 'Post-Proposal Couple Session'],
    price: 350,
    duration: '1.5 Hours',
    bestFor: 'Proposals, Surprise engagements',
    faqs: [
      { question: 'Will my partner know there is a photographer?', answer: 'No. We position ourselves as casual tourists with a camera and only step into the scene once the proposal moment begins. We coordinate signals over WhatsApp the morning of.' },
      { question: 'Can you send a few photos right after the proposal?', answer: 'Yes. A same-day sneak peek of 3 to 5 edited photos is delivered within hours so you can share the news with family and on social media.' },
    ],
  },
  'transport-photography': {
    title: 'Transport + Photography | Private Car & Licensed Photographer in Agra',
    description: 'A private A/C car with chauffeur plus a government-licensed photographer covering the Taj Mahal and Agra Fort. $129 total, half day, 60+ high-resolution photos.',
    quickAnswer:
      'A half-day (4–5 hour) combo in Agra: a private air-conditioned car with a professional chauffeur plus a government-licensed photographer. $129 USD total. Pickup from any Agra hotel or Agra Cantt railway station, the Taj Mahal and Agra Fort covered in one loop, and 60+ natural high-resolution photos delivered to a private gallery within 48 hours. Monument entry tickets are not included.',
    longDescription:
      'Transport + Photography removes the two biggest headaches of an Agra visit at once: getting between the monuments, and coming home with photos worth keeping. A private air-conditioned car with a professional chauffeur collects you from your hotel in Agra or from Agra Cantt railway station, and a government-licensed photographer rides along for the whole loop. At the Taj Mahal the photographer walks you through the reflecting pool, the elevated platform and the garden angles; at Agra Fort you are photographed at the Diwan-i-Khas, Sheesh Mahal and the famous balcony that frames the Taj Mahal in the distance. Between monuments you relax in the car instead of negotiating taxis or tuk-tuks in the heat. You receive 60+ natural high-resolution photos in a private online gallery within 48 hours. Monument entry tickets are separate.',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1920&auto=format&fit=crop',
    features: [
      'Private A/C car with professional chauffeur',
      'Pickup from any Agra hotel or Agra Cantt railway station',
      'Government-licensed photographer throughout',
      '60+ natural high-resolution digital photos',
      'Taj Mahal + Agra Fort in one relaxed loop',
      'Best photo locations & pose assistance',
      'Private online gallery within 48 hours',
    ],
    price: 129,
    duration: 'Half Day (4–5 Hours)',
    bestFor: 'Travellers arriving by train or staying in Agra who want transport and photography handled together',
    itinerary: [
      { time: 'Pickup', title: 'Hotel or railway station pickup', detail: 'The private A/C car collects you from any hotel in Agra or from Agra Cantt railway station at your chosen time — sunrise slots recommended.' },
      { time: 'Stop 1', title: 'Taj Mahal photoshoot', detail: 'The licensed photographer guides you through the reflecting pool, elevated platform and garden vantage points, directing poses at each.' },
      { time: 'Stop 2', title: 'Agra Fort photoshoot', detail: 'Portraits at the Diwan-i-Khas, Sheesh Mahal exteriors and the balcony view that frames the Taj Mahal in the distance.' },
      { time: 'Drop', title: 'Return drop anywhere in Agra', detail: 'The car drops you back at your hotel, the railway station, or a restaurant of your choice.' },
      { time: '+48 hrs', title: 'Gallery delivery', detail: '60+ natural high-resolution photos arrive in your private online gallery within 48 hours.' },
    ],
    faqs: [
      { question: 'How much does the Transport + Photography package cost?', answer: 'The package is $129 USD total for a half day (4–5 hours). It includes a private A/C car with chauffeur, a government-licensed photographer, and 60+ high-resolution digital photos. Monument entry tickets are not included.' },
      { question: 'Where does the pickup happen?', answer: 'We pick up from any hotel in Agra or from Agra Cantt railway station — convenient if you arrive on the Gatimaan or Shatabdi Express from Delhi.' },
      { question: 'How many photos do I receive?', answer: '60+ natural high-resolution digital photos covering both the Taj Mahal and Agra Fort, delivered to a private online gallery within 48 hours.' },
      { question: 'Are monument entry tickets included?', answer: 'No. Taj Mahal and Agra Fort entry tickets are purchased separately. The photography permit and all transport within Agra ARE included.' },
      { question: 'How is this different from the Heritage Trail ($399)?', answer: 'The Heritage Trail is a 5-hour dedicated photography session with 250+ photos. Transport + Photography at $129 is a lighter combo focused on comfort — fewer photos, same private car, ideal for shorter visits.' },
    ],
  },
  'transport-guide': {
    title: 'Transport + Guide | Private Car & Licensed Guide in Agra (No Photography)',
    description: 'A private A/C car with chauffeur plus a Ministry of Tourism licensed guide for the Taj Mahal and Agra Fort. $89 total, half day. No photographer — shoot your own photos.',
    quickAnswer:
      'A half-day (4–5 hour) combo in Agra: a private air-conditioned car with a professional chauffeur plus a Ministry of Tourism licensed guide who narrates the history of the Taj Mahal and Agra Fort. $89 USD total. No photographer is included — ideal if you prefer shooting on your own phone or camera. Pickup from any Agra hotel or Agra Cantt railway station. Monument entry tickets are not included.',
    longDescription:
      'Transport + Guide is built for independent travellers who want the comfort and the storytelling, but prefer to take their own photos. A private air-conditioned car with a professional chauffeur handles all the logistics — hotel or railway station pickup, parking, and the transfer between monuments — while a Ministry of Tourism licensed guide brings the Mughal era to life: Shah Jahan and Mumtaz Mahal at the Taj Mahal, then the Diwan-i-Khas, Sheesh Mahal and Musamman Burj at Agra Fort. The guide also knows every good phone-photo and selfie spot and will happily take a few shots of you on your own device. Because there is no photographer in the package, it is our most affordable private combo. Monument entry tickets are separate.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1920&auto=format&fit=crop',
    features: [
      'Private A/C car with professional chauffeur',
      'Pickup from any Agra hotel or Agra Cantt railway station',
      'Ministry of Tourism licensed local guide',
      'Full historical narration at Taj Mahal + Agra Fort',
      'Flexible pacing — linger where you like',
      'Tips on the best selfie and phone-photo spots',
      'No photographer included — bring your own camera',
    ],
    price: 89,
    duration: 'Half Day (4–5 Hours)',
    bestFor: 'Independent travellers who want comfort and context but take their own photos',
    itinerary: [
      { time: 'Pickup', title: 'Hotel or railway station pickup', detail: 'The private A/C car collects you from any hotel in Agra or from Agra Cantt railway station at your chosen time.' },
      { time: 'Stop 1', title: 'Taj Mahal guided walk', detail: 'The licensed guide narrates the story of Shah Jahan and Mumtaz Mahal while walking you to the best vantage points at your own pace.' },
      { time: 'Stop 2', title: 'Agra Fort guided walk', detail: 'The Mughal story continues through the Diwan-i-Khas, Sheesh Mahal and Musamman Burj — the balcony from which Shah Jahan gazed at the Taj Mahal.' },
      { time: 'Drop', title: 'Return drop anywhere in Agra', detail: 'The car drops you back at your hotel, the railway station, or a restaurant of your choice.' },
    ],
    faqs: [
      { question: 'How much does the Transport + Guide package cost?', answer: 'The package is $89 USD total for a half day (4–5 hours). It includes a private A/C car with chauffeur and a Ministry of Tourism licensed guide for the Taj Mahal and Agra Fort. Monument entry tickets are not included.' },
      { question: 'Is a photographer included?', answer: 'No — this package deliberately excludes the photographer, which is what makes it our most affordable private combo. If you want professional photos, choose Transport + Photography ($129) or a Guided Tour + Photo combo ($79 / $99).' },
      { question: 'Can the guide take photos of us?', answer: 'The guide will happily take casual photos of you on your own phone or camera at the best spots, but professional photography with pro equipment requires a licensed photographer package.' },
      { question: 'Where does the pickup happen?', answer: 'From any hotel in Agra or from Agra Cantt railway station — convenient for same-day train visitors from Delhi.' },
      { question: 'Are monument entry tickets included?', answer: 'No. Taj Mahal and Agra Fort entry tickets are purchased separately at the gate or online.' },
    ],
  },
  'sunrise-luxury-innova': {
    title: 'Taj Mahal Sunrise Luxury Tour (Private Innova) | Delhi to Agra Same Day',
    description: 'A same-day private sunrise tour from Delhi/NCR to Agra in a Toyota Innova — guide, photographer, monument tickets and golf cart all included.',
    quickAnswer:
      'A same-day private sunrise tour from Delhi/NCR to Agra in a Toyota Innova for couples and small families (up to 6 guests). $650 USD all-inclusive. Includes a Ministry of Tourism licensed guide and photographer, Taj Mahal and Agra Fort monument tickets, a private golf cart inside the Taj Mahal complex, and a security escort that skips the entry line. Pickup at ~2:30 AM, drop in Delhi by ~7-8 PM.',
    longDescription:
      'Leave your Delhi/NCR hotel before dawn and watch the first light hit the Taj Mahal a few hours later — all from the comfort of a private Toyota Innova driven by a professional chauffeur. Our team handles every detail of the day: a Ministry of Tourism licensed guide narrates the history of Shah Jahan and Mumtaz Mahal, a licensed photographer captures your family at the iconic sunrise vantage points, and a private golf cart whisks you from the gate to the mausoleum inside the Taj Mahal complex. A security escort moves you past the queue at both the Taj Mahal and Agra Fort. Monument tickets are included, so the price you see is the price you pay. Pickup and drop are available across Delhi, Noida, Gurugram, Ghaziabad and Faridabad.',
    image: 'https://images.unsplash.com/photo-1585506942812-e72b29cef752?q=80&w=1920&auto=format&fit=crop',
    features: [
      'Round-trip private Toyota Innova from Delhi/NCR',
      'Ministry of Tourism licensed guide (Government of India)',
      'Ministry of Tourism licensed photographer (Government of India)',
      'Private golf cart inside the Taj Mahal complex',
      'Skip-the-line entry with security escort',
      'Taj Mahal & Agra Fort monument tickets included',
      'Sunrise arrival, full-day same-day return',
    ],
    price: 650,
    duration: 'Same Day · 14–16 Hours',
    bestFor: 'Couples and families (up to 6 guests)',
    tourSlug: 'sunrise-luxury-innova',
    audience: 'Couples and families up to 6 guests',
    itinerary: [
      { time: '02:30 AM', title: 'Hotel pickup in Delhi/NCR', detail: 'Private Toyota Innova collects you from your hotel in Delhi, Noida, Gurugram, Ghaziabad or Faridabad.' },
      { time: '02:45 AM', title: 'Yamuna Expressway to Agra', detail: 'Smooth 3 to 3.5-hour drive on the Yamuna Expressway with a short refreshment stop.' },
      { time: '06:00 AM', title: 'Sunrise at the Taj Mahal', detail: 'Skip the line with our security escort. Private golf cart ferries you inside the complex. The licensed photographer captures sunrise portraits.' },
      { time: '09:00 AM', title: 'Breakfast at a heritage hotel', detail: 'Optional breakfast at a heritage hotel in Agra (own account).' },
      { time: '10:30 AM', title: 'Agra Fort tour', detail: 'Licensed guide narrates the Mughal history at the Diwan-i-Khas, Sheesh Mahal and Musamman Burj — the famous balcony view of the Taj Mahal.' },
      { time: '01:00 PM', title: 'Lunch & return drive', detail: 'Lunch in Agra (own account), then the Innova drives you back via the Yamuna Expressway.' },
      { time: '07:00–08:00 PM', title: 'Hotel drop in Delhi/NCR', detail: 'Comfortable evening drop at your starting hotel.' },
    ],
    faqs: [
      { question: 'How much does the Sunrise Luxury Tour from Delhi cost?', answer: 'The Sunrise Luxury Tour in a private Toyota Innova is $650 USD all-inclusive for up to 6 guests. Includes vehicle, guide, photographer, Taj Mahal and Agra Fort tickets, golf cart inside the Taj complex, and security escort to skip the line.' },
      { question: 'What time does the tour pick up from Delhi?', answer: 'Pickup is around 2:30 AM from your hotel in Delhi/NCR (Delhi, Noida, Gurugram, Ghaziabad or Faridabad). The drive to Agra on the Yamuna Expressway takes about 3 to 3.5 hours, so you arrive in time for sunrise at the Taj Mahal.' },
      { question: 'Are Taj Mahal entry tickets included?', answer: 'Yes. The price includes monument tickets for both the Taj Mahal and Agra Fort, so the $650 you book is the all-in price for up to 6 guests.' },
      { question: 'How many people fit in the Innova?', answer: 'The Toyota Innova seats up to 6 guests comfortably. For larger families or groups, choose the Sunrise Luxury Urbania ($899) which carries up to 13 guests.' },
      { question: 'Is there a security escort?', answer: 'Yes. We are accompanied by a security escort who allows our group to bypass the regular ticket queue at both the Taj Mahal east gate and Agra Fort.' },
      { question: 'Is the Taj Mahal open on Fridays?', answer: 'No — the Taj Mahal is closed every Friday for prayers. We schedule the sunrise tour for any other day of the week.' },
    ],
  },
  'sunrise-luxury-urbania': {
    title: 'Taj Mahal Sunrise Luxury Urbania Tour | Delhi to Agra for Groups',
    description: 'Our flagship same-day sunrise tour from Delhi/NCR to Agra in a private Force Urbania luxury coach for larger families and groups.',
    quickAnswer:
      'A same-day private sunrise tour from Delhi/NCR to Agra in a Force Urbania luxury coach for larger families and groups (up to 13 guests). $899 USD all-inclusive. Includes a Ministry of Tourism licensed guide and photographer, Taj Mahal and Agra Fort tickets, a private golf cart inside the Taj Mahal complex, and a security escort to skip the entry line. Reclining seats, A/C and Wi-Fi onboard.',
    longDescription:
      'Built for larger families and travel groups, the Sunrise Luxury Urbania tour takes up to 13 guests from Delhi/NCR to Agra and back in a single day in a private Force Urbania — a premium luxury coach with reclining seats, climate control and Wi-Fi. The structure of the day mirrors our private Innova tour: a sunrise arrival at the Taj Mahal east gate, a private golf cart inside the complex, a Ministry of Tourism licensed guide for the historical narration, a licensed photographer to document the visit, monument tickets to both the Taj Mahal and Agra Fort, and a security escort that lets everyone skip the queue. Because the coach has the capacity, families travelling together no longer need to split across multiple vehicles. Pickup and drop are available across Delhi, Noida, Gurugram, Ghaziabad and Faridabad.',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1920&auto=format&fit=crop',
    features: [
      'Round-trip private Force Urbania luxury coach',
      'Capacity for up to 13 guests',
      'Ministry of Tourism licensed guide (Government of India)',
      'Ministry of Tourism licensed photographer (Government of India)',
      'Private golf cart inside the Taj Mahal complex',
      'Skip-the-line entry with security escort',
      'Taj Mahal & Agra Fort monument tickets included',
      'Reclining seats, A/C and Wi-Fi onboard',
    ],
    price: 899,
    duration: 'Same Day · 14–16 Hours',
    bestFor: 'Families and groups travelling together (up to 13 guests)',
    tourSlug: 'sunrise-luxury-urbania',
    audience: 'Families and groups up to 13 guests',
    itinerary: [
      { time: '02:30 AM', title: 'Hotel pickup in Delhi/NCR', detail: 'Private Force Urbania luxury coach collects your group from one hotel in Delhi, Noida, Gurugram, Ghaziabad or Faridabad.' },
      { time: '02:45 AM', title: 'Yamuna Expressway to Agra', detail: 'Relax in reclining seats with A/C and Wi-Fi during the 3 to 3.5-hour drive.' },
      { time: '06:00 AM', title: 'Sunrise at the Taj Mahal', detail: 'Security escort moves the group past the entry line. A private golf cart takes everyone from the gate to the mausoleum platform. The licensed photographer captures group and individual portraits.' },
      { time: '09:00 AM', title: 'Breakfast in Agra', detail: 'Optional breakfast at a heritage hotel (own account).' },
      { time: '10:30 AM', title: 'Agra Fort tour', detail: 'Licensed guide tells the Mughal story across the Diwan-i-Khas, Sheesh Mahal and the famous Taj Mahal view from the fort balconies.' },
      { time: '01:00 PM', title: 'Lunch & return', detail: 'Lunch in Agra (own account). The Urbania drives the group back to Delhi.' },
      { time: '07:00–08:00 PM', title: 'Hotel drop in Delhi/NCR', detail: 'Group drop at your starting hotel.' },
    ],
    faqs: [
      { question: 'How much does the Sunrise Luxury Urbania tour cost?', answer: 'The Sunrise Luxury Urbania tour from Delhi/NCR to Agra is $899 USD all-inclusive for up to 13 guests in a private Force Urbania luxury coach.' },
      { question: 'Why choose the Urbania over the Innova?', answer: 'The Force Urbania seats up to 13 guests in reclining seats with A/C and Wi-Fi, so larger families and friend groups stay together in one vehicle instead of splitting across multiple Innovas. The inclusions (guide, photographer, golf cart, tickets, security escort) are identical.' },
      { question: 'How many people can the Urbania carry?', answer: 'Up to 13 guests. For couples or families under 6 guests, the $650 Sunrise Luxury Tour in a private Toyota Innova is the better fit.' },
      { question: 'Are tickets included in the $899 price?', answer: 'Yes. Taj Mahal and Agra Fort monument tickets are included in the all-inclusive $899 USD price.' },
      { question: 'Where does the tour pick up from?', answer: 'We pick up from any hotel in Delhi, Noida, Gurugram, Ghaziabad or Faridabad. Pickup is around 2:30 AM to reach the Taj Mahal for sunrise.' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return {};
  return {
    title: `${service.title} | From $${service.price}`,
    description: service.description,
    alternates: { canonical: `${SITE.url}/services/${slug}` },
    openGraph: {
      title: `${service.title} | Taj Mahal Photography`,
      description: service.description,
      url: `${SITE.url}/services/${slug}`,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const pageUrl = `${SITE.url}/services/${slug}`;
  const isLuxuryTour = Boolean(service.tourSlug);

  const tripOrService = isLuxuryTour && service.tourSlug
    ? luxuryTourSchema({
        slug: service.tourSlug,
        name: service.title,
        description: service.description,
        price: service.price,
        image: service.image,
        vehicle: service.tourSlug === 'sunrise-luxury-innova' ? 'innova' : 'urbania',
        audience: service.audience ?? service.bestFor,
      })
    : serviceSchema(service.title, service.description, service.price, service.duration, pageUrl, service.image);

  const graph = graphSchema([
    breadcrumbSchema([
      { name: 'Home', url: SITE.url },
      { name: 'Services', url: `${SITE.url}/services` },
      { name: service.title, url: pageUrl },
    ]),
    webPageSchema({
      url: pageUrl,
      name: service.title,
      description: service.description,
      image: service.image,
      lastReviewed: LAST_UPDATED,
      speakableSelectors: ['.quick-answer', '.faq-answer', 'h1', 'h2'],
    }),
    tripOrService,
    {
      ...faqSchema(service.faqs),
      speakable: speakableSpec(['.faq-answer']),
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />
      <main className="flex-grow bg-white">
        <div className="relative h-[60vh] min-h-[500px]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <span className="text-gold-400 font-bold tracking-widest uppercase mb-4 block">{isLuxuryTour ? 'Same-Day Luxury Tour' : 'Premium Service'}</span>
              <h1 className="font-serif text-5xl md:text-6xl font-semibold text-white mb-6">{service.title}</h1>
              <p className="text-xl text-white/90">{service.description}</p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Quick Answer block — direct-answer text that AI engines preferentially extract */}
          <div className="bg-marble-50 border-l-4 border-gold-500 p-6 mb-12 rounded-sm">
            <p className="text-xs uppercase tracking-widest text-gold-600 font-bold mb-2">Quick Answer</p>
            <p className="quick-answer text-ink-900 text-lg leading-relaxed">{service.quickAnswer}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-serif text-3xl font-semibold text-ink-900 mb-6">About This {isLuxuryTour ? 'Tour' : 'Session'}</h2>
              <div className="prose prose-lg prose-slate max-w-none text-gray-600">
                <p>{service.longDescription}</p>
                <h3 className="font-serif text-2xl text-ink-900 mt-10 mb-4">What&apos;s Included</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i}><strong>{feature}</strong></li>
                  ))}
                </ul>
                <p className="mt-6"><strong>Best For:</strong> {service.bestFor}</p>
              </div>

              {service.itinerary && (
                <div className="mt-12">
                  <h3 className="font-serif text-2xl text-ink-900 mb-6">Same-Day Itinerary</h3>
                  <ol className="space-y-4 border-l-2 border-gold-500 pl-6">
                    {service.itinerary.map((step, i) => (
                      <li key={i} className="relative">
                        <span className="absolute -left-[34px] top-0 inline-flex w-6 h-6 items-center justify-center rounded-full bg-gold-500 text-ink-900 text-xs font-bold">
                          {i + 1}
                        </span>
                        <p className="text-xs uppercase tracking-widest text-gold-600 font-bold">{step.time}</p>
                        <p className="font-serif text-lg font-semibold text-ink-900">{step.title}</p>
                        <p className="text-gray-600 text-sm">{step.detail}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {isLuxuryTour && (
                <div className="mt-12 bg-ink-900 text-white p-6 rounded-sm">
                  <p className="text-xs uppercase tracking-widest text-gold-400 font-bold mb-2">Compare</p>
                  <p className="text-sm text-gray-200 mb-4">
                    Looking for a different group size? The {service.tourSlug === 'sunrise-luxury-innova' ? 'Sunrise Luxury Urbania ($899)' : 'Sunrise Luxury Tour in a private Innova ($650)'} covers the same itinerary {service.tourSlug === 'sunrise-luxury-innova' ? 'in a 13-seat Force Urbania luxury coach for larger groups' : 'in a 6-seat private Toyota Innova for couples and small families'}.
                  </p>
                  <Link
                    href={`/services/${service.tourSlug === 'sunrise-luxury-innova' ? 'sunrise-luxury-urbania' : 'sunrise-luxury-innova'}`}
                    className="inline-block text-gold-400 underline hover:text-gold-300 text-sm"
                  >
                    See the other tour →
                  </Link>
                </div>
              )}

              {service.faqs.length > 0 && (
                <div className="mt-12">
                  <h3 className="font-serif text-2xl text-ink-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    {service.faqs.map((f, i) => (
                      <div key={i}>
                        <p className="font-semibold text-ink-900 mb-1">{f.question}</p>
                        <p className="faq-answer text-gray-600">{f.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <p className="mt-12 text-xs text-gray-400">Last updated: {LAST_UPDATED}</p>
            </div>

            <div>
              <div className="bg-marble-50 p-8 border border-marble-200 rounded-sm sticky top-32">
                <h3 className="font-serif text-2xl font-semibold text-ink-900 mb-2">{isLuxuryTour ? 'Tour Details' : 'Package Details'}</h3>
                <div className="text-3xl font-light text-ink-900 mb-1">${service.price} <span className="text-sm text-gray-500">USD</span></div>
                <p className="text-sm text-gray-500 mb-6">Duration: {service.duration}</p>
                <ul className="space-y-3 mb-8 text-sm text-gray-600">
                  {isLuxuryTour ? (
                    <>
                      <li className="flex items-start"><span className="text-gold-500 mr-3">✓</span> Private vehicle (Delhi/NCR ↔ Agra)</li>
                      <li className="flex items-start"><span className="text-gold-500 mr-3">✓</span> Govt. licensed guide</li>
                      <li className="flex items-start"><span className="text-gold-500 mr-3">✓</span> Govt. licensed photographer</li>
                      <li className="flex items-start"><span className="text-gold-500 mr-3">✓</span> Taj Mahal + Agra Fort tickets</li>
                      <li className="flex items-start"><span className="text-gold-500 mr-3">✓</span> Private golf cart inside complex</li>
                      <li className="flex items-start"><span className="text-gold-500 mr-3">✓</span> Skip-the-line security escort</li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-center"><span className="text-gold-500 mr-3">✓</span> Official Photography Permit</li>
                      <li className="flex items-center"><span className="text-gold-500 mr-3">✓</span> Professional Equipment</li>
                      <li className="flex items-center"><span className="text-gold-500 mr-3">✓</span> 48-Hour Photo Delivery</li>
                    </>
                  )}
                </ul>
                <a href={`/book?plan=${slug}`} className="block w-full text-center px-6 py-3 bg-ink-900 text-white font-medium rounded-sm hover:bg-ink-800 transition-colors">
                  Check Availability
                </a>
                {!isLuxuryTour && (
                  <p className="text-xs text-center text-gray-500 mt-4">* Monument entry tickets are not included.</p>
                )}
              </div>
            </div>
          </div>
        </div>
        <ContactForm />
      </main>
      <Footer />
      <StickyWhatsApp />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(graph) }} />
    </div>
  );
}
