import { SITE } from './seo';

/**
 * The people behind the business.
 *
 * Until now the site never named a human: the Person schema carried the
 * company name, and the pages alternated between "I" and "we". An answer
 * engine asked to recommend a photographer needs a person it can verify —
 * a name, a role, a credential and somewhere that name appears off-site.
 * That is the single biggest gap in this site's authority signals, and it
 * is not something markup alone can paper over.
 */
export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  /** One line, used on cards and as the meta description seed. */
  summary: string;
  /** The direct-answer paragraph on the profile page. */
  answer: string;
  bio: string[];
  knowsAbout: string[];
  languages: { code: string; label: string }[];
  /** Shown as a credential block, and emitted as hasCredential. */
  credential?: { name: string; issuer: string; issuerUrl: string };
  image: string;
  imageAlt: string;
  sameAs: string[];
};

export const TEAM: TeamMember[] = [
  {
    slug: 'danish-iqbal',
    name: 'Danish Iqbal',
    role: 'Lead photographer',
    summary:
      'Shoots every session at the Taj Mahal, holding the Ministry of Tourism permit that allows professional equipment inside the complex.',
    answer:
      'Danish Iqbal is the lead photographer at Taj Mahal Photography in Agra. He holds the Ministry of Tourism photography permit that allows professional camera equipment through security at the Taj Mahal, and he photographs the sunrise, couple, pre-wedding and group sessions himself rather than subcontracting them.',
    bio: [
      'Danish is at the East Gate before it opens most mornings of the year, which is the only way to know what the light does in a given week — when the fog lifts in January, when the marble turns amber rather than pink, which positions are already taken by seven.',
      'He works handheld and close, directing as he goes, because most guests have never been photographed professionally and need to be told where to look and when to walk. The frames people end up framing are usually the ones taken between poses.',
      'The permit he holds is what lets a tripod and a second lens through the security belt at all. Without it the equipment goes in the cloakroom, whoever is carrying it.',
    ],
    knowsAbout: [
      'Taj Mahal photography',
      'Sunrise and low-light photography',
      'Pre-wedding and couple portraiture',
      'Group and family portraiture',
      'Mughal architecture',
      'Archaeological Survey of India monument rules',
    ],
    languages: [
      { code: 'en', label: 'English' },
      { code: 'hi', label: 'Hindi' },
      { code: 'ur', label: 'Urdu' },
    ],
    credential: {
      name: 'Photography permit, Ministry of Tourism, Government of India',
      issuer: 'Ministry of Tourism, Government of India',
      issuerUrl: 'https://tourism.gov.in/',
    },
    image: '/photos/gallery/13.jpg',
    imageAlt: 'Danish Iqbal photographing guests in the Taj Mahal gardens',
    sameAs: [SITE.instagram, SITE.googleBusiness],
  },
  {
    slug: 'mohd-bilal',
    name: 'Mohd Bilal',
    role: 'Co-founder · technology and operations',
    summary:
      'Co-founded the studio and runs everything that is not a camera: the booking system, this website, pricing and the WhatsApp desk guests reach.',
    answer:
      'Mohd Bilal is a co-founder of Taj Mahal Photography in Agra and runs the technical side of the business — the booking flow, this website, the published rate card and the WhatsApp desk that answers enquiries. He also runs the software studio Techleaf.',
    bio: [
      'Bilal built and maintains this site, the rate card that drives every price on it, and the booking path that puts a date, a package and a guest count into a WhatsApp message before anyone has to type a sentence.',
      'He is usually the one who answers first when an enquiry arrives, which is why the quoted price and the price on the page are the same number: both come from the same file.',
      'Outside the studio he runs Techleaf, a software practice, and handles the search and AI-visibility work for the group.',
    ],
    knowsAbout: [
      'Taj Mahal photography packages and pricing',
      'Monument ticketing and permits',
      'Booking operations',
      'Web engineering',
      'Search and answer-engine optimisation',
    ],
    languages: [
      { code: 'en', label: 'English' },
      { code: 'hi', label: 'Hindi' },
      { code: 'ur', label: 'Urdu' },
    ],
    image: '/photos/gallery/12.jpg',
    imageAlt: 'Guests photographed with the team in front of the Taj Mahal',
    sameAs: ['https://techleaf.us', SITE.linkedin],
  },
];

export function memberBySlug(slug: string) {
  return TEAM.find((m) => m.slug === slug);
}

/** Person JSON-LD for one team member. */
export function personNode(member: TeamMember) {
  const id =
    member.slug === 'danish-iqbal' ? `${SITE.url}/#photographer` : `${SITE.url}/#${member.slug}`;

  return {
    '@type': 'Person',
    '@id': id,
    name: member.name,
    jobTitle: member.role,
    description: member.answer,
    url: `${SITE.url}/team/${member.slug}`,
    image: `${SITE.url}${member.image}`,
    worksFor: { '@id': `${SITE.url}/#business` },
    knowsAbout: member.knowsAbout,
    knowsLanguage: member.languages.map((l) => l.code),
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: SITE.address.country,
    },
    ...(member.credential
      ? {
          hasCredential: {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'License',
            name: member.credential.name,
            recognizedBy: {
              '@type': 'GovernmentOrganization',
              name: member.credential.issuer,
              url: member.credential.issuerUrl,
            },
          },
        }
      : {}),
    sameAs: member.sameAs,
  };
}
