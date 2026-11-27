/**
 * Interface wording for the translated guide pages (Spanish). One
 * entry per language; the shared components in components/guides read from
 * here, so adding a language is data, not another page.
 */
export type GuideLang = 'es';

export type GuideUi = {
  lang: GuideLang;
  ogLocale: string;
  dateLocale: string;
  base: string;
  home: string;
  /** Where "see sessions and prices" goes. */
  plansHref: string;
  homeLabel: string;
  guidesLabel: string;
  navLabel: string;
  crumbLabel: string;
  english: string;
  whatsappText: string;
  footerLine: string;
  /** Devanagari has no true italic, so Hindi headings stay upright. */
  italicHeadings: boolean;
  updated: (date: string) => string;
  readTime: (n: number) => string;
  captionMinutes: (n: number) => string;
  shortAnswer: string;
  tocTitle: string;
  tocSections: string;
  faqHeading: string;
  beforeYouGo: string;
  sourcesAria: string;
  sourcesEyebrow: string;
  sourcesHeading: string;
  sourcesIntro: string;
  studioAria: string;
  studioCaption: string;
  studioWhatsapp: string;
  studioPlans: string;
  bookAria: string;
  bookHeading: string;
  moreAria: string;
  moreHeading: string;
  category: Record<string, string>;
  index: { eyebrow: string; h1: string; lead: string; metaTitle: string; metaDescription: string; ogTitle: string; crumb: string };
  strip: { aria: string; heading: string; intro: string; all: string };
};

export const GUIDE_UI: Record<GuideLang, GuideUi> = {
  es: {
    lang: 'es',
    ogLocale: 'es_ES',
    dateLocale: 'es-MX',
    base: '/es/guias',
    home: '/es',
    plansHref: '/es',
    homeLabel: 'Inicio',
    guidesLabel: 'Guías',
    navLabel: 'Principal',
    crumbLabel: 'Ruta',
    english: 'English',
    whatsappText: 'Hola, quiero una sesión de fotos en el Taj Mahal. Mis fechas son:',
    footerLine: 'Taj Mahal Photography · Agra, India · Fotógrafo con licencia del Ministerio de Turismo',
    italicHeadings: true,
    updated: (d) => `Actualizado el ${d}`,
    readTime: (n) => `${n} min de lectura`,
    captionMinutes: (n) => `${n} minutos, de principio a fin`,
    shortAnswer: 'la respuesta corta',
    tocTitle: 'En esta guía',
    tocSections: 'secciones',
    faqHeading: 'Preguntas frecuentes',
    beforeYouGo: 'Antes de irte',
    sourcesAria: 'Fuentes',
    sourcesEyebrow: 'De dónde sale esto',
    sourcesHeading: 'Fuentes para guardar',
    sourcesIntro: 'Las reglas, tarifas y horarios cambian. Estas son las páginas oficiales que conviene revisar antes de viajar (en inglés).',
    studioAria: 'Sobre el estudio',
    studioCaption: 'del estudio',
    studioWhatsapp: 'Escríbenos por WhatsApp',
    studioPlans: 'Ver sesiones y precios',
    bookAria: 'Reservar',
    bookHeading: 'Reserva en un minuto',
    moreAria: 'Seguir leyendo',
    moreHeading: 'Sigue leyendo',
    category: { 'India from abroad': 'Viajar a la India', 'World locations': 'Lugares del mundo', Planning: 'Planeación', 'Rules & permits': 'Reglas y permisos' },
    index: {
      eyebrow: 'Guías en español',
      h1: 'Fotografía y viaje: lo que conviene saber antes de ir al Taj Mahal',
      lead: 'Precios reales, qué ponerse, reglas del monumento y cómo planear tu viaje a la India desde México.',
      metaTitle: 'Guías del Taj Mahal y fotografía de viaje en español',
      metaDescription: 'Guías en español para fotografiar el Taj Mahal y planear tu viaje a la India desde México: precios, qué ponerse, mejores lugares y reglas del monumento.',
      ogTitle: 'Guías del Taj Mahal en español',
      crumb: 'Guías',
    },
    strip: { aria: 'Guías en español', heading: 'Guías para tu viaje', intro: 'Precios reales, qué ponerse y cómo planear tu viaje a la India desde México.', all: 'Todas las guías' },
  },
};
