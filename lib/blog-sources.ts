export type Source = { label: string; url: string; note?: string };

/**
 * Two or three official sources per article — the pages a reader should check
 * before they travel, since rules, fees and timings change. Every URL here was
 * fetched and read before it was added; none are affiliate or commercial
 * pages. Keyed by article slug and merged into POSTS in lib/blog.ts.
 */
export const SOURCES: Record<string, Source[]> = {
  "taj-mahal-photography-permit": [
    {
      "label": "Taj Mahal official site (ASI/ADA) - tickets and rules",
      "url": "https://tajmahal.gov.in/",
      "note": "States drones banned and tripods need ASI permission"
    },
    {
      "label": "ASI Agra Circle - Taj Mahal visitor page",
      "url": "https://asiagracircle.in/tajmahal.html",
      "note": "ASI Agra Circle prohibited items and visitor rules"
    }
  ],
  "best-time-to-photograph-taj-mahal": [
    {
      "label": "Incredible India - Taj Mahal",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/taj-mahal",
      "note": "Taj Mahal opening hours (sunrise/sunset), Friday closure"
    },
    {
      "label": "Incredible India - Mehtab Bagh",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/mehtab-bagh",
      "note": "Mehtab Bagh hours, Taj views, monthly weather"
    },
    {
      "label": "India Meteorological Department",
      "url": "https://mausam.imd.gov.in/",
      "note": "Official national weather and forecast service (general reference)"
    }
  ],
  "what-to-wear-taj-mahal-photoshoot": [
    {
      "label": "ASI Agra Circle - Taj Mahal visitor page",
      "url": "https://asiagracircle.in/tajmahal.html",
      "note": "Lists prohibited items (big bags, mats, etc.) and visitor rules"
    },
    {
      "label": "Taj Mahal official site (ASI/ADA) - tickets and rules",
      "url": "https://tajmahal.gov.in/",
      "note": "Official entry rules and prohibited items"
    }
  ],
  "pre-wedding-shoot-taj-mahal-planning": [
    {
      "label": "Taj Mahal official site (ASI/ADA) - tickets and rules",
      "url": "https://tajmahal.gov.in/",
      "note": "Drone and tripod restrictions, timings, Friday closure"
    },
    {
      "label": "ASI Agra Circle - Taj Mahal visitor page",
      "url": "https://asiagracircle.in/tajmahal.html",
      "note": "ASI prohibited items list and night viewing rules"
    }
  ],
  "agra-beyond-taj-mahal-photo-locations": [
    {
      "label": "Incredible India - Mehtab Bagh",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/mehtab-bagh",
      "note": "Mehtab Bagh hours, Taj views, monthly weather"
    },
    {
      "label": "Incredible India - Itimad-ud-Daulah's Tomb",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/itimad-ud-daulahs-tomb",
      "note": "Tomb history, marble inlay work, opening hours"
    },
    {
      "label": "Incredible India - Fatehpur Sikri",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/fatehpur-sikri",
      "note": "Fatehpur Sikri landmarks and 6am-6pm visiting hours"
    }
  ],
  "taj-mahal-camera-settings-tips": [
    {
      "label": "Taj Mahal official site (ASI/ADA) - tickets and rules",
      "url": "https://tajmahal.gov.in/",
      "note": "Tripods need ASI permission; drones prohibited"
    },
    {
      "label": "ASI Agra Circle - Taj Mahal visitor page",
      "url": "https://asiagracircle.in/tajmahal.html",
      "note": "ASI list of items not allowed inside"
    }
  ],
  "delhi-to-agra-day-trip-taj-mahal": [
    {
      "label": "Airports Authority of India - Agra (Kheria) Airport",
      "url": "https://www.aai.aero/en/airports/agra",
      "note": "Official Agra airport details and nearby attractions"
    },
    {
      "label": "Incredible India - Taj Mahal",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/taj-mahal",
      "note": "Taj Mahal timings (closed Fridays)"
    },
    {
      "label": "Incredible India - Agra",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra",
      "note": "Agra attractions overview for a day itinerary"
    },
    {
      "label": "Taj Mahal official site (ASI/ADA) - visitor notes and fees",
      "url": "https://tajmahal.gov.in/",
      "note": "States the Taj Mahal is closed only on Fridays; fee table shows Friday as closed"
    }
  ],
  "taj-mahal-photographer-cost": [
    {
      "label": "Taj Mahal official site (ASI/ADA) - tickets and rules",
      "url": "https://tajmahal.gov.in/",
      "note": "Official ticket prices (Taj entry plus Rs 200 mausoleum fee)"
    },
    {
      "label": "Taj Mahal (ASI Agra Circle): Ticketing",
      "url": "https://tajmahal.gov.in/ticketing.aspx",
      "note": "Official ticket windows, mausoleum ticket and booking sites"
    }
  ],
  "taj-mahal-tickets-timings-gates": [
    {
      "label": "Taj Mahal official site (ASI/ADA) - tickets and rules",
      "url": "https://tajmahal.gov.in/",
      "note": "Ticket prices, timings, night viewing, Friday closure"
    },
    {
      "label": "ASI Agra Circle - Taj Mahal visitor page",
      "url": "https://asiagracircle.in/tajmahal.html",
      "note": "ASI Agra Circle timings, ticket booking, ADA ticket coverage"
    },
    {
      "label": "Incredible India - Taj Mahal",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/taj-mahal",
      "note": "Taj Mahal timings: 30 min before sunrise to before sunset"
    }
  ],
  "best-photo-spots-taj-mahal": [
    {
      "label": "Incredible India - Taj Mahal",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/taj-mahal",
      "note": "Taj Mahal overview and visiting information"
    },
    {
      "label": "Incredible India - Mehtab Bagh",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/mehtab-bagh",
      "note": "Mehtab Bagh hours, Taj views, monthly weather"
    },
    {
      "label": "Taj Mahal official site (ASI/ADA) - tickets and rules",
      "url": "https://tajmahal.gov.in/",
      "note": "Official rules affecting where and how you shoot"
    }
  ],
  "taj-mahal-drone-tripod-camera-rules": [
    {
      "label": "Taj Mahal official site (ASI/ADA) - tickets and rules",
      "url": "https://tajmahal.gov.in/",
      "note": "Drones strictly prohibited; tripods need ASI permission"
    },
    {
      "label": "ASI Agra Circle - Taj Mahal visitor page",
      "url": "https://asiagracircle.in/tajmahal.html",
      "note": "ASI prohibited items including drones"
    }
  ],
  "agra-one-day-itinerary": [
    {
      "label": "Incredible India: Taj Mahal",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/taj-mahal",
      "note": "Taj Mahal timings (sunrise to sunset), Friday closure, airports and station"
    },
    {
      "label": "Incredible India: Agra Fort",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/agra-fort",
      "note": "Agra Fort history, Mughal buildings, 6am to 6pm hours"
    },
    {
      "label": "Incredible India: Itimad-ud-Daulah's Tomb",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/itimad-ud-daulahs-tomb",
      "note": "Baby Taj, early white marble, inlay, open 6am to 6pm"
    }
  ],
  "taj-mahal-fog-monsoon-photography": [
    {
      "label": "Incredible India: Agra",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra",
      "note": "Agra climate table, hot months, best seasons, Taj colour changes"
    },
    {
      "label": "All India Radio: IMD dense fog forecast",
      "url": "https://www.newsonair.gov.in/dense-fog-to-grip-north-india-cold-wave-conditions-to-persist-says-imd",
      "note": "IMD forecast of dense fog over Uttar Pradesh and north India in winter"
    },
    {
      "label": "India Meteorological Department",
      "url": "https://mausam.imd.gov.in/",
      "note": "Official source for forecasts, fog warnings and monsoon progress"
    }
  ],
  "jaipur-to-agra-taj-mahal-photo-trip": [
    {
      "label": "Incredible India: Fatehpur Sikri",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/fatehpur-sikri",
      "note": "Fatehpur Sikri: Akbar's capital 1571-85, UNESCO site, hours"
    },
    {
      "label": "Incredible India: Agra",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra",
      "note": "Agra airport and rail station; Golden Triangle position"
    },
    {
      "label": "Incredible India: Jaipur",
      "url": "https://www.incredibleindia.gov.in/en/rajasthan/jaipur",
      "note": "Jaipur on the Golden Triangle; rail and road connections"
    }
  ],
  "golden-triangle-photography-itinerary": [
    {
      "label": "Incredible India: Jaipur",
      "url": "https://www.incredibleindia.gov.in/en/rajasthan/jaipur",
      "note": "Jaipur as a Golden Triangle point; Pink City history"
    },
    {
      "label": "Incredible India: Agra",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra",
      "note": "Agra's three UNESCO sites, Golden Triangle, season guidance"
    },
    {
      "label": "Incredible India: Delhi",
      "url": "https://www.incredibleindia.gov.in/en/delhi",
      "note": "Delhi monuments (Red Fort, Humayun's Tomb) and Oct-Mar best season"
    }
  ],
  "flying-to-agra-for-a-weekend-shoot": [
    {
      "label": "Incredible India: Agra",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra",
      "note": "Agra Airport (AGR), Delhi (DEL) nearby, Agra City station (AGA)"
    },
    {
      "label": "Incredible India: Taj Mahal",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra/taj-mahal",
      "note": "Nearest airports and railway station; opening hours, Friday closure"
    },
    {
      "label": "Incredible India: Delhi",
      "url": "https://www.incredibleindia.gov.in/en/delhi",
      "note": "Delhi airport (DEL) and New Delhi station as gateway"
    }
  ],
  "pre-wedding-shoot-taj-mahal-permission": [
    {
      "label": "Archaeological Survey of India: FAQ",
      "url": "https://asi.nic.in/HQ/faq/",
      "note": "ASI rules: still photos, tripods, filming licence, no roofed interiors"
    },
    {
      "label": "Taj Mahal (ASI Agra Circle): Ticketing",
      "url": "https://tajmahal.gov.in/ticketing.aspx",
      "note": "Official visitor page: drone ban, tickets, Friday closure"
    }
  ],
  "maternity-photoshoot-taj-mahal": [
    {
      "label": "Agra District (agra.nic.in): Taj Mahal",
      "url": "https://agra.nic.in/tourist-place/tajmahal/",
      "note": "Official hours, wheelchairs at entry gates, Friday closure"
    },
    {
      "label": "Taj Mahal (ASI Agra Circle): Ticketing",
      "url": "https://tajmahal.gov.in/ticketing.aspx",
      "note": "Ticket windows, mausoleum ticket, drone ban"
    },
    {
      "label": "US National Weather Service: Heat Safety",
      "url": "https://www.weather.gov/safety/heat",
      "note": "Pregnant women and children are higher heat risk; heat precautions"
    }
  ],
  "taj-mahal-family-photos-kids-grandparents": [
    {
      "label": "Agra District (agra.nic.in): Taj Mahal",
      "url": "https://agra.nic.in/tourist-place/tajmahal/",
      "note": "Wheelchairs at gates; under-15s free; hours and Friday closure"
    },
    {
      "label": "Taj Mahal (ASI Agra Circle): Ticketing",
      "url": "https://tajmahal.gov.in/ticketing.aspx",
      "note": "Children under 15 free; ticket prices and booking sites"
    },
    {
      "label": "US National Weather Service: Heat Safety",
      "url": "https://www.weather.gov/safety/heat",
      "note": "Heat risk for young children and older adults"
    }
  ],
  "fall-in-love-with-a-place-before-you-photograph-it": [
    {
      "label": "Incredible India: Agra",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra",
      "note": "Taj built by Shah Jahan for Mumtaz Mahal; colour shifts by hour (no 1632 date)"
    }
  ],
  "emotional-connection-couple-family-portraits": [
    {
      "label": "Incredible India: Agra",
      "url": "https://www.incredibleindia.gov.in/en/uttar-pradesh/agra",
      "note": "Taj built by Shah Jahan for Mumtaz Mahal (history context only)"
    }
  ],
  "best-photography-locations-usa": [
    {
      "label": "Navajo Nation Parks: Antelope Canyon operators",
      "url": "https://navajonationparks.org/guided-tour-operators/antelope-canyon-tour-operators/",
      "note": "Guided tours are mandatory at all Antelope Canyon locations"
    },
    {
      "label": "NPS Acadia: Cadillac Summit Road reservations",
      "url": "https://www.nps.gov/acad/planyourvisit/vehicle_reservations.htm",
      "note": "Timed vehicle reservations required for Cadillac Summit Road in season"
    },
    {
      "label": "NPS: Uncrewed aircraft in the national parks",
      "url": "https://www.nps.gov/articles/uncrewed-aircraft-in-the-national-parks.htm",
      "note": "NPS-wide ban on launching, landing or flying drones"
    }
  ],
  "best-photography-locations-mexico": [
    {
      "label": "INAH: Chichen Itza visitor information",
      "url": "https://lugares.inah.gob.mx/en/node/5663",
      "note": "Hours, fees, site rules and extra fee for professional cameras"
    },
    {
      "label": "INAH: Equinoccio de Primavera 2026 bulletin",
      "url": "https://www.inah.gob.mx//boletines/el-inah-implementara-operativo-equinoccio-de-primavera-2026-en-la-zona-arqueologica-de-chichen-itza",
      "note": "Professional photo/video gear needs prior INAH authorization; drones barred"
    },
    {
      "label": "Sectur (gob.mx): Pátzcuaro, Michoacán",
      "url": "https://www.gob.mx/sectur/articulos/patzcuaro-michoacan-211530",
      "note": "Official overview of Pátzcuaro and Día de Muertos dates (Nov 1-2)"
    }
  ],
  "best-photography-locations-europe": [
    {
      "label": "Seceda Cableways: Information",
      "url": "https://www.seceda.it/en/info",
      "note": "Operator info for the Ortisei-Seceda cable cars, access and parking"
    },
    {
      "label": "Visit South Tyrol: Lake Braies",
      "url": "https://www.suedtirol.info/en/en/experiences-and-events/nature/lakes-and-natural-pools/pragser-wildsee-lake",
      "note": "Summer daytime car restrictions, parking booking, shuttle buses"
    },
    {
      "label": "EASA: Open category drones",
      "url": "https://www.easa.europa.eu/en/domains/drones-air-mobility/operating-drone/open-category-low-risk-civil-drones",
      "note": "EU drone basics: subcategories, 120 m limit, registration"
    }
  ],
  "best-photography-locations-uk": [
    {
      "label": "GOV.UK: The Countryside Code",
      "url": "https://www.gov.uk/government/publications/the-countryside-code/the-countryside-code-advice-for-countryside-visitors",
      "note": "Official respect, protect, enjoy guidance for visitors"
    },
    {
      "label": "UK CAA: Where you can fly (Drone Code)",
      "url": "https://www.caa.co.uk/drones/open-category/drone-code/where-you-can-fly-points-3-to-9/",
      "note": "Height, distance from people and built-up areas, airport rules"
    },
    {
      "label": "Lake District NPA: Flying drones",
      "url": "https://www.lakedistrict.gov.uk/visiting/things-to-do/beyond-the-trails/flying-drones",
      "note": "Drones not allowed on nature reserves, SSSIs or National Trust land"
    }
  ],
  "best-photography-locations-canada": [
    {
      "label": "Parks Canada: Lake Louise and Moraine Lake",
      "url": "https://parks.canada.ca/pn-np/ab/banff/visit/parkbus/louise",
      "note": "Moraine Lake Road closed to personal vehicles; shuttle reservations"
    },
    {
      "label": "Parks Canada: Drones in Banff National Park",
      "url": "https://parks.canada.ca/pn-np/ab/banff/info/permis-permit/drone",
      "note": "Recreational drones prohibited at Parks Canada places; permit rules"
    },
    {
      "label": "Transport Canada: Basic drone operations",
      "url": "https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/drone-operation-categories-pilot-certificates/basic-operations",
      "note": "National drone certificate, registration and distance rules"
    }
  ],
  "best-photography-locations-australia": [
    {
      "label": "Uluru-Kata Tjuta: Uluru climb closure",
      "url": "https://uluru.gov.au/discover/culture/uluru-climb/",
      "note": "Climb closed 26 Oct 2019; Anangu cultural guidance (Parks Australia)"
    }
  ],
  "india-photography-trip-from-usa": [
    {
      "label": "Govt. of India e-Visa portal",
      "url": "https://indianvisaonline.gov.in/evisa/tvoa.html",
      "note": "Official e-Visa types, eligibility, passport validity and apply-ahead rules"
    },
    {
      "label": "ASI: Taj Mahal (World Heritage Sites, Agra)",
      "url": "https://asi.nic.in/pages/WorldHeritageAgra",
      "note": "Taj Mahal hours, fees and Friday closure (mosque prayer exception)"
    },
    {
      "label": "timeanddate: New Delhi time zone",
      "url": "https://www.timeanddate.com/worldclock/india/new-delhi",
      "note": "India Standard Time is UTC+5:30 with no daylight saving"
    }
  ],
  "india-photography-trip-from-mexico": [
    {
      "label": "Govt. of India e-Visa portal",
      "url": "https://indianvisaonline.gov.in/evisa/tvoa.html",
      "note": "Official e-Visa types, eligibility, passport validity and apply-ahead rules"
    },
    {
      "label": "SENER (gob.mx): Ya no hay Horario de Verano",
      "url": "https://www.gob.mx/sener/articulos/ya-no-hay-horario-de-verano-en-la-republica-mexicana",
      "note": "Mexico ended DST in Oct 2022 (northern border exceptions)"
    },
    {
      "label": "ASI: Taj Mahal (World Heritage Sites, Agra)",
      "url": "https://asi.nic.in/pages/WorldHeritageAgra",
      "note": "Taj Mahal hours, fees and Friday closure (mosque prayer exception)"
    }
  ],
  "india-photography-trip-from-europe-uk-australia": [
    {
      "label": "Govt. of India e-Visa portal",
      "url": "https://indianvisaonline.gov.in/evisa/tvoa.html",
      "note": "Official e-Visa types, eligibility, passport validity and apply-ahead rules"
    },
    {
      "label": "GOV.UK: Foreign travel advice India",
      "url": "https://www.gov.uk/foreign-travel-advice/india",
      "note": "UK FCDO safety and entry advice for India"
    },
    {
      "label": "ASI: Taj Mahal (World Heritage Sites, Agra)",
      "url": "https://asi.nic.in/pages/WorldHeritageAgra",
      "note": "Taj Mahal hours, fees and Friday closure (mosque prayer exception)"
    }
  ],
  "photographers-influencers-visiting-india-collaborate": [
    {
      "label": "ASI FAQ: photography and filming at monuments",
      "url": "https://asi.nic.in/HQ/faq/",
      "note": "Tripods/lights need written permission; filming licence from the DG"
    }
  ]
};
