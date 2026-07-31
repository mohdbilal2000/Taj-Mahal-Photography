// ─── Site-wide SEO / AEO / GEO constants ───

/** Dynamic freshness signal. Updated on every build. */
export const LAST_UPDATED = new Date().toISOString().slice(0, 10);

/** Default offer validity — 18 months out, recomputed at build/request time. */
export const DEFAULT_PRICE_VALID_UNTIL = new Date(
  Date.now() + 18 * 30 * 24 * 60 * 60 * 1000,
)
  .toISOString()
  .slice(0, 10);

export const SITE = {
  name: 'Taj Mahal Photography',
  url: 'https://tajmahalphotography.com',
  domain: 'tajmahalphotography.com',
  title: 'Official Government Licensed Taj Mahal Photographer | Agra, India',
  description:
    'Book an official government-licensed Taj Mahal photographer in Agra, India. Authorized permit holder for professional photography inside the Taj Mahal. Sunrise, couple, pre-wedding, family & proposal photoshoots with 48-hour delivery.',
  phone: '+918393010125',
  phoneDisplay: '+91 83930 10125',
  email: 'booking@tajmahalphotography.com',
  whatsapp: '918393010125',
  instagram: 'https://www.instagram.com/taj.mahal.photography',
  linkedin: 'https://www.linkedin.com/in/taj-mahal-photography-3a9ab0296/',
  facebook: 'https://www.facebook.com/share/19m7nwKSSQ/?mibextid=wwXIfr',
  address: {
    street: 'Taj Mahal East Gate Road',
    city: 'Agra',
    state: 'Uttar Pradesh',
    zip: '282001',
    country: 'IN',
  },
  geo: { lat: 27.1751, lng: 78.0421 },
  locale: 'en_US',
  currency: 'USD',
  image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop',
  /** @deprecated use DEFAULT_PRICE_VALID_UNTIL (dynamic). Kept for backwards compat. */
  priceValidUntil: DEFAULT_PRICE_VALID_UNTIL,
} as const;

// ─── Entity references (Wikidata / Wikipedia) for sameAs graph ───
// Wikidata Q-IDs give AI rerankers a verifiable entity edge.
export const ENTITIES = {
  tajMahal: {
    name: 'Taj Mahal',
    wikidata: 'https://www.wikidata.org/wiki/Q9141',
    wikipedia: 'https://en.wikipedia.org/wiki/Taj_Mahal',
    geo: { lat: 27.1751, lng: 78.0421 },
  },
  agraFort: {
    name: 'Agra Fort',
    wikidata: 'https://www.wikidata.org/wiki/Q43473',
    wikipedia: 'https://en.wikipedia.org/wiki/Agra_Fort',
    geo: { lat: 27.1795, lng: 78.0211 },
  },
  agra: {
    name: 'Agra',
    wikidata: 'https://www.wikidata.org/wiki/Q42941',
    wikipedia: 'https://en.wikipedia.org/wiki/Agra',
  },
  delhi: {
    name: 'Delhi',
    wikidata: 'https://www.wikidata.org/wiki/Q1353',
    wikipedia: 'https://en.wikipedia.org/wiki/Delhi',
  },
  ministryOfTourism: {
    name: 'Ministry of Tourism, Government of India',
    wikidata: 'https://www.wikidata.org/wiki/Q6868810',
    url: 'https://tourism.gov.in/',
  },
} as const;

// ─── Reusable JSON-LD generators ───

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'PhotographyBusiness'],
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: ['Taj Mahal Photographer', 'Official Taj Mahal Photographer Agra'],
    image: SITE.image,
    logo: SITE.image,
    description: SITE.description,
    slogan: 'Official Government Licensed Taj Mahal Photographer',
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '$$$',
    currenciesAccepted: 'USD, INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer',
    knowsLanguage: ['en', 'hi', 'ur'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    areaServed: [
      {
        '@type': 'City',
        name: ENTITIES.agra.name,
        sameAs: [ENTITIES.agra.wikipedia, ENTITIES.agra.wikidata],
      },
      {
        '@type': 'City',
        name: ENTITIES.delhi.name,
        sameAs: [ENTITIES.delhi.wikipedia, ENTITIES.delhi.wikidata],
      },
    ],
    knowsAbout: [
      { '@type': 'TouristAttraction', name: ENTITIES.tajMahal.name, sameAs: [ENTITIES.tajMahal.wikipedia, ENTITIES.tajMahal.wikidata] },
      { '@type': 'TouristAttraction', name: ENTITIES.agraFort.name, sameAs: [ENTITIES.agraFort.wikipedia, ENTITIES.agraFort.wikidata] },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
      opens: '05:30',
      closes: '19:00',
    },
    // AggregateRating intentionally omitted — Google policy requires the
    // aggregate to reflect Review nodes actually accessible on the page.
    // Re-enable once verifiable Google/TripAdvisor reviews are wired in.
    parentOrganization: {
      '@type': 'Organization',
      name: 'Taj Guides & Travel Services',
      url: 'https://tajmahaltouristguide.com',
      sameAs: ['https://tajmahaltouristguide.com'],
    },
    sameAs: [SITE.instagram, SITE.linkedin, SITE.facebook, 'https://tajmahaltouristguide.com', 'https://guideindiatours.com', 'https://www.asiabylocals.com'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Taj Mahal Photography & Tour Packages',
      itemListElement: [
        offerSchema('Quick Capture', 59, 'Budget-friendly Taj Mahal photoshoot. 30-minute session, 30 raw photos delivered as a digital album.', `${SITE.url}/services/quick-capture`),
        offerSchema('Taj Mahal Sunrise Photoshoot', 99, 'Avoid crowds, best light. 1-hour session, 50 high-resolution photos, skip-the-line guidance.', `${SITE.url}/services/sunrise`),
        offerSchema('Pre-Wedding & Couple Photography', 199, 'Editorial romance at the monument of love. 2+ hours, 100+ natural high-resolution photos, 50 raw physical photographs, 30-second cinematic video.', `${SITE.url}/services/couple`),
        offerSchema('Taj Mahal + Agra Fort Heritage Trail', 399, 'Both UNESCO sites in one day. 5 hours, 250+ natural high-resolution photos, transport included.', `${SITE.url}/services/taj-agra-fort`),
        offerSchema('Full Day Agra Experience', 499, 'Taj Mahal, Agra Fort & back side coverage. 8-10 hours, 350+ natural high-resolution photos, 48-hour delivery.', `${SITE.url}/services/full-day`),
        offerSchema('Guided Tour + Photo Combo (Small Group, 1–5 Guests)', 79, 'Licensed local guide plus professional photographer at Taj Mahal & Agra Fort for up to 5 guests. 30 natural digital photos + 30 premium printed copies. Monument tickets not included.', `${SITE.url}/services/guided-photo-tour-small`),
        offerSchema('Guided Tour + Photo Combo (Large Group, 6–12 Guests)', 99, 'Licensed local guide plus professional photographer at Taj Mahal & Agra Fort for groups of 6 to 12. Group + individual portraits, 30 digital photos + 30 printed copies. Monument tickets not included.', `${SITE.url}/services/guided-photo-tour-large`),
        offerSchema('Taj Mahal Sunrise Luxury Tour (Private Innova)', 650, 'Same-day sunrise tour from Delhi/NCR to Agra in a private Toyota Innova. Includes Ministry of Tourism licensed guide and photographer, Taj Mahal & Agra Fort tickets, private golf cart inside the complex, and skip-the-line security escort.', `${SITE.url}/services/sunrise-luxury-innova`),
        offerSchema('Taj Mahal Sunrise Luxury Urbania Tour', 899, 'Same-day sunrise tour from Delhi/NCR to Agra in a private Force Urbania luxury coach for families and groups (up to 13 guests). Includes guide, photographer, Taj Mahal & Agra Fort tickets, golf cart, and skip-the-line security escort.', `${SITE.url}/services/sunrise-luxury-urbania`),
      ],
    },
  };
}

export function offerSchema(name: string, price: number, description: string, url: string) {
  return {
    '@type': 'Offer',
    name,
    price,
    priceCurrency: 'USD',
    description,
    url,
    availability: 'https://schema.org/LimitedAvailability',
    priceValidUntil: SITE.priceValidUntil,
    seller: { '@id': `${SITE.url}/#business` },
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#business` },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/services?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function serviceSchema(
  name: string,
  description: string,
  price: number,
  duration: string,
  url: string,
  image: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name,
    description,
    touristType: 'International Visitor',
    provider: { '@id': `${SITE.url}/#business` },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/LimitedAvailability',
      url,
    },
    image,
    itinerary: {
      '@type': 'ItemList',
      description: `Duration: ${duration}`,
    },
  };
}

export function articleSchema(
  title: string,
  description: string,
  url: string,
  datePublished: string,
  image: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    author: { '@id': `${SITE.url}/#business` },
    publisher: { '@id': `${SITE.url}/#business` },
    image,
    mainEntityOfPage: url,
  };
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE.url}/#photographer`,
    name: 'Taj Mahal Photography',
    jobTitle: 'Government-Licensed Taj Mahal Photographer',
    description: 'Official Ministry of Tourism certified photographer specializing in Taj Mahal photoshoots, pre-wedding photography, and heritage monument photography in Agra, India.',
    url: SITE.url,
    image: SITE.image,
    telephone: SITE.phone,
    email: SITE.email,
    knowsLanguage: ['en', 'hi', 'ur'],
    nationality: { '@type': 'Country', name: 'India' },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    workLocation: {
      '@type': 'Place',
      name: ENTITIES.tajMahal.name,
      sameAs: [ENTITIES.tajMahal.wikipedia, ENTITIES.tajMahal.wikidata],
    },
    knowsAbout: [
      'Taj Mahal Photography',
      'Mughal Architecture',
      'Heritage Monument Photography',
      'Pre-Wedding Photography',
      'Sunrise Photography',
      'Government Photography Permits India',
      'Agra Fort Photography',
      'Couple Portrait Photography',
      'Destination Wedding Photography',
      'Travel Photography India',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'License',
      name: 'Ministry of Tourism Photography License',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: ENTITIES.ministryOfTourism.name,
        sameAs: [ENTITIES.ministryOfTourism.url, ENTITIES.ministryOfTourism.wikidata],
      },
    },
    worksFor: { '@id': `${SITE.url}/#business` },
    sameAs: [SITE.instagram, SITE.linkedin, SITE.facebook, 'https://tajmahaltouristguide.com', 'https://guideindiatours.com', 'https://www.asiabylocals.com'],
  };
}

// ─── Schemas for AI answer engines (Perplexity, ChatGPT, Claude, AI Overviews) ───

/** TouristAttraction node for the Taj Mahal — explicit graph edge to the entity. */
export function tajMahalAttractionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${SITE.url}/#taj-mahal`,
    name: ENTITIES.tajMahal.name,
    alternateName: ['Crown of the Palace', 'Tāj Mahal'],
    description:
      'A 17th-century white-marble mausoleum on the south bank of the Yamuna in Agra, India, commissioned by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal. UNESCO World Heritage Site and one of the New Seven Wonders of the World.',
    image: SITE.image,
    sameAs: [ENTITIES.tajMahal.wikipedia, ENTITIES.tajMahal.wikidata],
    geo: { '@type': 'GeoCoordinates', latitude: ENTITIES.tajMahal.geo.lat, longitude: ENTITIES.tajMahal.geo.lng },
    isAccessibleForFree: false,
    publicAccess: true,
    tourBookingPage: `${SITE.url}/book`,
  };
}

/** TouristAttraction node for Agra Fort. */
export function agraFortAttractionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${SITE.url}/#agra-fort`,
    name: ENTITIES.agraFort.name,
    description:
      'A 16th-century red sandstone Mughal fort and UNESCO World Heritage Site in Agra, India. Built by Emperor Akbar between 1565 and 1573; the principal residence of the Mughal emperors until 1638.',
    sameAs: [ENTITIES.agraFort.wikipedia, ENTITIES.agraFort.wikidata],
    geo: { '@type': 'GeoCoordinates', latitude: ENTITIES.agraFort.geo.lat, longitude: ENTITIES.agraFort.geo.lng },
    isAccessibleForFree: false,
    publicAccess: true,
  };
}

/** Vehicle schema used inside TouristTrip for the Delhi luxury tours. */
export function vehicleSchema(model: 'innova' | 'urbania') {
  if (model === 'innova') {
    return {
      '@type': 'Vehicle',
      name: 'Toyota Innova',
      brand: { '@type': 'Brand', name: 'Toyota' },
      vehicleModelDate: '2024',
      vehicleConfiguration: 'Private chauffeur-driven SUV',
      bodyType: 'SUV',
      seatingCapacity: 6,
      fuelType: 'Diesel',
      vehicleInteriorColor: 'Beige',
    };
  }
  return {
    '@type': 'Vehicle',
    name: 'Force Urbania',
    brand: { '@type': 'Brand', name: 'Force Motors' },
    vehicleModelDate: '2024',
    vehicleConfiguration: 'Private chauffeur-driven luxury minibus',
    bodyType: 'Minibus',
    seatingCapacity: 13,
    fuelType: 'Diesel',
    vehicleInteriorFeatures: 'Reclining seats, A/C, Wi-Fi',
  };
}

/** Full TouristTrip schema for the two Delhi-to-Agra luxury tours. */
export function luxuryTourSchema(opts: {
  slug: 'sunrise-luxury-innova' | 'sunrise-luxury-urbania';
  name: string;
  description: string;
  price: number;
  image: string;
  vehicle: 'innova' | 'urbania';
  audience: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${SITE.url}/services/${opts.slug}#tour`,
    name: opts.name,
    description: opts.description,
    image: opts.image,
    url: `${SITE.url}/services/${opts.slug}`,
    touristType: ['International Visitor', 'Family Travel', 'Couple Travel'],
    audience: { '@type': 'Audience', audienceType: opts.audience },
    provider: { '@id': `${SITE.url}/#business` },
    offers: {
      '@type': 'Offer',
      price: opts.price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/LimitedAvailability',
      priceValidUntil: SITE.priceValidUntil,
      url: `${SITE.url}/services/${opts.slug}`,
      seller: { '@id': `${SITE.url}/#business` },
      validFrom: '2026-01-01',
      eligibleRegion: [
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'Australia' },
        { '@type': 'Country', name: 'Canada' },
        { '@type': 'Country', name: 'Germany' },
        { '@type': 'Country', name: 'France' },
        { '@type': 'Country', name: 'India' },
      ],
    },
    vehicle: vehicleSchema(opts.vehicle),
    departureLocation: {
      '@type': 'Place',
      name: 'Delhi / NCR (hotel pickup)',
      address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
      sameAs: [ENTITIES.delhi.wikipedia, ENTITIES.delhi.wikidata],
    },
    arrivalLocation: {
      '@type': 'Place',
      name: 'Delhi / NCR (hotel drop)',
      address: { '@type': 'PostalAddress', addressLocality: 'Delhi', addressCountry: 'IN' },
    },
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: 5,
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Place', name: 'Hotel pickup in Delhi/NCR (02:30 AM)' } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'TouristAttraction', '@id': `${SITE.url}/#taj-mahal`, name: ENTITIES.tajMahal.name, sameAs: [ENTITIES.tajMahal.wikipedia, ENTITIES.tajMahal.wikidata] } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'FoodEstablishment', name: 'Breakfast at heritage hotel in Agra' } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'TouristAttraction', '@id': `${SITE.url}/#agra-fort`, name: ENTITIES.agraFort.name, sameAs: [ENTITIES.agraFort.wikipedia, ENTITIES.agraFort.wikidata] } },
        { '@type': 'ListItem', position: 5, item: { '@type': 'Place', name: 'Return drop in Delhi/NCR (~7-8 PM)' } },
      ],
    },
    subjectOf: [
      { '@id': `${SITE.url}/#taj-mahal` },
      { '@id': `${SITE.url}/#agra-fort` },
    ],
  };
}

/**
 * Individual Review JSON-LD (so AI engines can extract verbatim quotes).
 *
 * NOTE: Google's structured-data policy prohibits sites from publishing reviews
 * about themselves and surfacing them as rich results. These nodes are emitted
 * as plain customer testimonials (no `publisher`, no `aggregateRating`
 * cross-reference) so AI extractors can still cite the verbatim quotes, but
 * Google won't treat them as eligible for review rich results. Once external
 * Google/TripAdvisor URLs are available, pass them in `sourceUrl`.
 */
export function reviewSchema(opts: {
  author: string;
  country: string;
  body: string;
  rating: number;
  datePublished: string;
  sourceUrl?: string;
}) {
  return {
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: opts.author,
      nationality: { '@type': 'Country', name: opts.country },
    },
    datePublished: opts.datePublished,
    reviewBody: opts.body,
    reviewRating: {
      '@type': 'Rating',
      ratingValue: opts.rating,
      bestRating: 5,
      worstRating: 1,
    },
    ...(opts.sourceUrl ? { url: opts.sourceUrl } : {}),
  };
}

/** Speakable schema — marks extractable answer passages for voice/AI. */
export function speakableSpec(cssSelectors: string[]) {
  return {
    '@type': 'SpeakableSpecification',
    cssSelector: cssSelectors,
  };
}

/** HowTo schema for "How to book" / "How to plan" pages. */
export function howToSchema(opts: {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: { value: number; currency?: string };
  steps: { name: string; text: string; url?: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: opts.name,
    description: opts.description,
    ...(opts.totalTime ? { totalTime: opts.totalTime } : {}),
    ...(opts.estimatedCost
      ? {
          estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: opts.estimatedCost.currency ?? 'USD',
            value: opts.estimatedCost.value,
          },
        }
      : {}),
    step: opts.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.url ? { url: s.url } : {}),
    })),
  };
}

/** WebPage schema with `lastReviewed` — freshness signal AI engines reward. */
export function webPageSchema(opts: {
  url: string;
  name: string;
  description: string;
  image?: string;
  lastReviewed?: string;
  speakableSelectors?: string[];
  isPartOf?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    inLanguage: 'en-US',
    isPartOf: { '@id': opts.isPartOf ?? `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#business` },
    primaryImageOfPage: opts.image
      ? { '@type': 'ImageObject', url: opts.image }
      : undefined,
    lastReviewed: opts.lastReviewed,
    reviewedBy: { '@id': `${SITE.url}/#photographer` },
    publisher: { '@id': `${SITE.url}/#business` },
    speakable: opts.speakableSelectors
      ? speakableSpec(opts.speakableSelectors)
      : undefined,
  };
}

/** Wrap multiple schema objects into a single @graph — preferred by AI parsers. */
export function graphSchema(nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.map((n) => {
      const copy = { ...n };
      delete (copy as Record<string, unknown>)['@context'];
      return copy;
    }),
  };
}

/** Helper to render a JSON-LD script tag */
export function jsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(data);
}
