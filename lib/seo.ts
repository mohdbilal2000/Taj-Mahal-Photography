// ─── Site-wide SEO / AEO / GEO constants ───

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
} as const;

// ─── Reusable JSON-LD generators ───

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService', 'PhotographyBusiness'],
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    image: SITE.image,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '$$$',
    currenciesAccepted: 'USD, INR',
    paymentAccepted: 'Cash, UPI, Bank Transfer',
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
    areaServed: {
      '@type': 'City',
      name: 'Agra',
      sameAs: 'https://en.wikipedia.org/wiki/Agra',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday'],
      opens: '05:30',
      closes: '19:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Taj Guides & Travel Services',
      url: 'https://tajmahaltouristguide.com',
      sameAs: ['https://tajmahaltouristguide.com'],
    },
    sameAs: [SITE.instagram, SITE.linkedin, SITE.facebook, 'https://tajmahaltouristguide.com', 'https://guideindiatours.com', 'https://www.asiabylocals.com'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Taj Mahal Photography Packages',
      itemListElement: [
        offerSchema('Quick Capture', 50, 'Budget-friendly Taj Mahal photoshoot. 30-minute session, 20 raw photos delivered as a digital album.', `${SITE.url}/services/quick-capture`),
        offerSchema('Taj Mahal Sunrise Photoshoot', 99, 'Avoid crowds, best light. 1.5-hour session, 50 high-resolution photos, skip-the-line guidance.', `${SITE.url}/services/sunrise`),
        offerSchema('Pre-Wedding & Couple Photography', 199, 'Editorial romance at the monument of love. 2+ hours, 100+ natural high-resolution photos, 50 raw physical photographs, 30-second cinematic video.', `${SITE.url}/services/couple`),
        offerSchema('Taj Mahal + Agra Fort Heritage Trail', 399, 'Both UNESCO sites in one day. 5 hours, 250+ natural high-resolution photos, transport included.', `${SITE.url}/services/taj-agra-fort`),
        offerSchema('Full Day Agra Experience', 499, 'Taj Mahal, Agra Fort & back side coverage. 8-10 hours, 350+ natural high-resolution photos, 48-hour delivery.', `${SITE.url}/services/full-day`),
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
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    knowsAbout: [
      'Taj Mahal Photography',
      'Mughal Architecture',
      'Heritage Monument Photography',
      'Pre-Wedding Photography',
      'Sunrise Photography',
      'Government Photography Permits India',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'License',
      name: 'Ministry of Tourism Photography License',
      recognizedBy: {
        '@type': 'GovernmentOrganization',
        name: 'Ministry of Tourism, Government of India',
      },
    },
    worksFor: { '@id': `${SITE.url}/#business` },
    sameAs: [SITE.instagram, SITE.linkedin, SITE.facebook, 'https://tajmahaltouristguide.com', 'https://guideindiatours.com', 'https://www.asiabylocals.com'],
  };
}

/** Helper to render a JSON-LD script tag */
export function jsonLd(data: Record<string, unknown> | Record<string, unknown>[]) {
  return JSON.stringify(data);
}
