/**
 * Interface wording for the translated guide pages (Spanish, Hindi). One
 * entry per language; the shared components in components/guides read from
 * here, so adding a language is data, not another page.
 */
export type GuideLang = 'es' | 'hi';

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
  hi: {
    lang: 'hi',
    ogLocale: 'hi_IN',
    dateLocale: 'hi-IN',
    base: '/hi/guides',
    home: '/hi',
    plansHref: '/plans',
    homeLabel: 'होम',
    guidesLabel: 'गाइड',
    navLabel: 'मुख्य मेनू',
    crumbLabel: 'रास्ता',
    english: 'English',
    whatsappText: 'नमस्ते, मुझे ताजमहल पर फोटोशूट बुक करना है। मेरी तारीखें:',
    footerLine: 'Taj Mahal Photography · आगरा, भारत · पर्यटन मंत्रालय से लाइसेंस प्राप्त फोटोग्राफर',
    italicHeadings: false,
    updated: (d) => `अपडेट: ${d}`,
    readTime: (n) => `${n} मिनट में पढ़ें`,
    captionMinutes: (n) => `${n} मिनट, शुरू से आख़िर तक`,
    shortAnswer: 'सीधा जवाब',
    tocTitle: 'इस गाइड में',
    tocSections: 'हिस्से',
    faqHeading: 'अक्सर पूछे जाने वाले सवाल',
    beforeYouGo: 'जाने से पहले',
    sourcesAria: 'स्रोत',
    sourcesEyebrow: 'जानकारी कहाँ से है',
    sourcesHeading: 'ये आधिकारिक पेज सेव कर लें',
    sourcesIntro: 'नियम, शुल्क और समय बदलते रहते हैं। यात्रा से पहले ये आधिकारिक पेज (अंग्रेज़ी में) ज़रूर देख लें।',
    studioAria: 'स्टूडियो के बारे में',
    studioCaption: 'स्टूडियो की ओर से',
    studioWhatsapp: 'WhatsApp पर लिखें',
    studioPlans: 'सेशन और कीमतें देखें',
    bookAria: 'बुकिंग',
    bookHeading: 'एक मिनट में बुक करें',
    moreAria: 'और पढ़ें',
    moreHeading: 'आगे पढ़ें',
    category: { 'India from abroad': 'भारत यात्रा', 'World locations': 'दुनिया की जगहें', Planning: 'प्लानिंग', 'Rules & permits': 'नियम और परमिट' },
    index: {
      eyebrow: 'हिंदी गाइड',
      h1: 'ताजमहल जाने से पहले जो जानना ज़रूरी है',
      lead: 'असली रेट, क्या पहनें, स्मारक के नियम, टिकट और रास्ते की पूरी जानकारी, सीधे और सरल हिंदी में।',
      metaTitle: 'ताजमहल फोटोशूट गाइड: रेट, नियम, टिकट और प्लानिंग',
      metaDescription: 'ताजमहल पर फोटोशूट का खर्च, प्री-वेडिंग के नियम, क्या पहनें, टिकट-समय और जयपुर से आगरा की दूरी, हिंदी में पूरी गाइड।',
      ogTitle: 'ताजमहल फोटोशूट गाइड हिंदी में',
      crumb: 'गाइड',
    },
    strip: { aria: 'हिंदी गाइड', heading: 'ताजमहल की हिंदी गाइड', intro: 'रेट, नियम, टिकट और प्लानिंग, सब एक जगह।', all: 'सारी गाइड' },
  },
};
