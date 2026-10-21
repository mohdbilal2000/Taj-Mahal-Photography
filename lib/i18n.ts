import { QUICK_BOOK_IDS } from './plans';

/**
 * Translated landing pages.
 *
 * Roughly four in five enquiries arrive from outside India, and most of
 * those visitors search in their own language first. The English site stays
 * canonical; each locale below gets one real page — not a machine-mangled
 * mirror of twenty — that answers the question a traveller actually types,
 * lists the same packages at the same prices, and hands them to the same
 * WhatsApp thread.
 *
 * Prices are never translated: they come from lib/plans.ts, so a rate change
 * moves every language at once.
 */

export type LocaleCode = 'fr' | 'es' | 'de' | 'it' | 'pt' | 'ja' | 'zh' | 'ru' | 'ar' | 'hi';

export type PlanLabel = { name: string; tagline: string };

export type LocaleContent = {
  code: LocaleCode;
  /** hreflang / <html lang> value. */
  hreflang: string;
  /** Open Graph locale. */
  ogLocale: string;
  /** The language's own name for itself — what a visitor recognises. */
  endonym: string;
  dir: 'ltr' | 'rtl';
  title: string;
  description: string;
  keywords: string[];
  eyebrow: string;
  headline: string;
  subline: string;
  /** The direct answer paragraph — the snippet and AI-quote candidate. */
  answer: string;
  trustTitle: string;
  trust: { title: string; body: string }[];
  stepsTitle: string;
  steps: { title: string; body: string }[];
  packagesTitle: string;
  packagesIntro: string;
  /** Keyed by plan id — only the five quick-book packages are shown. */
  planLabels: Record<string, PlanLabel>;
  priceNote: string;
  perPerson: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaBody: string;
  whatsappLabel: string;
  bookLabel: string;
  /** Link back to the full English site. */
  englishLabel: string;
  /** The WhatsApp opener, pre-written in their language. */
  whatsappMessage: string;
};

const PLAN_IDS = [...QUICK_BOOK_IDS];

export const LOCALES: LocaleContent[] = [
  {
    code: 'fr',
    hreflang: 'fr',
    ogLocale: 'fr_FR',
    endonym: 'Français',
    dir: 'ltr',
    title: 'Photographe au Taj Mahal | Séance photo à Agra avec guide agréé',
    description:
      'Photographe officiel agréé par le ministère du Tourisme au Taj Mahal, à Agra. Séance au lever du soleil dès 120 $, photos de couple, guide et transport privé. Réponse sur WhatsApp en quelques minutes.',
    keywords: [
      'photographe taj mahal',
      'séance photo taj mahal',
      'photographe agra',
      'photo lever du soleil taj mahal',
      'photographe couple inde',
      'guide francophone agra',
    ],
    eyebrow: 'Agra · Inde',
    headline: 'Votre séance photo au Taj Mahal, par un photographe agréé',
    subline:
      'Dix ans au pied du monument, un permis officiel du ministère du Tourisme, et la connaissance exacte de l’endroit où se tenir à 6 h du matin.',
    answer:
      'Une séance photo professionnelle au Taj Mahal coûte à partir de 120 $ US et dure environ deux heures, au lever du soleil. Seul un photographe titulaire d’un permis officiel peut faire entrer du matériel professionnel dans le complexe ; le trépied et le flash sont refusés aux visiteurs. La photographie est interdite dans la chambre funéraire, et un guide ne peut pas accompagner le photographe à l’intérieur du Taj Mahal — c’est une règle du site, pas la nôtre.',
    trustTitle: 'Pourquoi passer par nous',
    trust: [
      {
        title: 'Permis officiel vérifiable',
        body: 'Licence du ministère du Tourisme de l’Inde. Nous entrons par le contrôle de sécurité avec le matériel, sans discussion ni supplément à la porte.',
      },
      {
        title: 'Vous récupérez tout',
        body: 'Toutes les photos en haute résolution, sans filigrane, livrées sous 48 heures par Google Drive ou WeTransfer. Les retouches sont incluses.',
      },
      {
        title: 'Prix annoncé, prix payé',
        body: 'Le tarif comprend le photographe et les retouches. Les billets d’entrée au monument sont indiqués séparément et ne sont jamais majorés.',
      },
      {
        title: 'Un seul interlocuteur',
        body: 'Vous écrivez sur WhatsApp au photographe lui-même, en direct, avant et pendant la séance. Pas d’agence intermédiaire.',
      },
    ],
    stepsTitle: 'Comment ça se passe',
    steps: [
      {
        title: 'Vous écrivez votre date',
        body: 'Un message WhatsApp suffit. Nous confirmons la disponibilité et l’heure exacte du lever du soleil pour ce jour-là.',
      },
      {
        title: 'Rendez-vous à votre hôtel',
        body: 'Le photographe vous retrouve à la réception avant l’ouverture des portes, puis vous accompagne au contrôle de sécurité.',
      },
      {
        title: 'Vos photos sous 48 h',
        body: 'Lien de téléchargement privé, fichiers pleine résolution, sélection retouchée et quelques formats verticaux prêts à publier.',
      },
    ],
    packagesTitle: 'Tarifs',
    packagesIntro:
      'Les mêmes prix que sur le site anglais, en dollars américains ou en roupies indiennes. Billets d’entrée au monument non compris.',
    planLabels: {
      sunrise: {
        name: 'Séance au lever du soleil',
        tagline: '120 photos et plus, 3 à 5 reels — le photographe vient à votre hôtel',
      },
      'pre-wedding': {
        name: 'Couple et pré-mariage',
        tagline: '200 photos haute résolution, 30 clichés retouchés et une vidéo cinématographique',
      },
      'guided-photo-tour-small': {
        name: 'Guide + photographe · 1 à 5 personnes',
        tagline: 'Guide agréé et photographe, 40 photos naturelles et 5 reels',
      },
      'guided-photo-tour-large': {
        name: 'Guide + photographe · 6 à 12 personnes',
        tagline: 'La même formule pour les groupes — 60 photos et 7 reels',
      },
      'transport-guide': {
        name: 'Transport + guide, sans photographe',
        tagline: 'Journée à Agra en voiture climatisée privée avec guide agréé, votre appareil',
      },
    },
    priceNote: 'Taux de change indicatif, mis à jour régulièrement. Le paiement se fait en dollars ou en roupies.',
    perPerson: 'à partir de',
    faqTitle: 'Questions fréquentes',
    faqs: [
      {
        question: 'Parlez-vous français ?',
        answer:
          'Le photographe travaille en anglais et en hindi. Pour une visite commentée en français, nous faisons appel à un guide francophone agréé ; précisez-le lors de la réservation.',
      },
      {
        question: 'Peut-on avoir un guide pendant la séance photo au Taj Mahal ?',
        answer:
          'Non. À l’intérieur du Taj Mahal, le règlement interdit qu’un guide accompagne un photographe au travail. Le guide vous retrouve à la sortie, ou vous accompagne à Agra Fort et sur les autres sites.',
      },
      {
        question: 'Le Taj Mahal est-il ouvert tous les jours ?',
        answer:
          'Il est fermé le vendredi. Les autres jours, il ouvre environ quarante minutes avant le lever du soleil et ferme au coucher du soleil.',
      },
      {
        question: 'Comment régler ?',
        answer:
          'Un acompte par virement ou lien de paiement confirme la date ; le solde se règle sur place, en espèces ou par virement, en dollars ou en roupies.',
      },
    ],
    ctaTitle: 'Écrivez-nous votre date',
    ctaBody:
      'Réponse en quelques minutes, du lever du soleil à la nuit, heure de l’Inde. Dites-nous la date, le nombre de personnes et votre hôtel.',
    whatsappLabel: 'Écrire sur WhatsApp',
    bookLabel: 'Formulaire de réservation',
    englishLabel: 'Voir le site complet en anglais',
    whatsappMessage:
      'Bonjour, je souhaite réserver une séance photo au Taj Mahal. Ma date :',
  },
  {
    code: 'es',
    hreflang: 'es',
    ogLocale: 'es_ES',
    endonym: 'Español',
    dir: 'ltr',
    title: 'Fotógrafo en el Taj Mahal | Sesión de fotos en Agra con permiso oficial',
    description:
      'Fotógrafo con licencia del Ministerio de Turismo en el Taj Mahal, Agra. Sesión al amanecer desde 120 USD, fotos de pareja, guía y coche privado. Respondemos por WhatsApp en minutos.',
    keywords: [
      'fotógrafo taj mahal',
      'sesión de fotos taj mahal',
      'fotógrafo agra',
      'fotos amanecer taj mahal',
      'fotógrafo de parejas india',
      'guía en español agra',
    ],
    eyebrow: 'Agra · India',
    headline: 'Tu sesión de fotos en el Taj Mahal, con fotógrafo autorizado',
    subline:
      'Diez años trabajando frente al monumento, licencia oficial del Ministerio de Turismo y la certeza de dónde colocarse a las seis de la mañana.',
    answer:
      'Una sesión de fotos profesional en el Taj Mahal cuesta desde 120 USD y dura unas dos horas, al amanecer. Solo un fotógrafo con permiso oficial puede entrar equipo profesional al recinto: el trípode y el flash se rechazan en el control de seguridad. No se permite fotografiar dentro de la cámara funeraria, y un guía no puede acompañar al fotógrafo dentro del Taj Mahal — es norma del monumento, no nuestra.',
    trustTitle: 'Por qué con nosotros',
    trust: [
      {
        title: 'Licencia oficial comprobable',
        body: 'Autorización del Ministerio de Turismo de la India. Pasamos el control con el equipo sin discusiones ni pagos extra en la puerta.',
      },
      {
        title: 'Te llevas todo',
        body: 'Todas las fotos en alta resolución y sin marca de agua, entregadas en 48 horas por Google Drive o WeTransfer. Edición incluida.',
      },
      {
        title: 'El precio es el precio',
        body: 'La tarifa incluye fotógrafo y edición. Las entradas al monumento se indican aparte y nunca se recargan.',
      },
      {
        title: 'Hablas con el fotógrafo',
        body: 'Escribes por WhatsApp directamente a quien va a hacer las fotos, antes y durante la sesión. Sin agencias de por medio.',
      },
    ],
    stepsTitle: 'Cómo funciona',
    steps: [
      {
        title: 'Nos escribes tu fecha',
        body: 'Un mensaje de WhatsApp basta. Confirmamos disponibilidad y la hora exacta del amanecer de ese día.',
      },
      {
        title: 'Te recogemos en el hotel',
        body: 'El fotógrafo te espera en recepción antes de que abran las puertas y te acompaña hasta el control de seguridad.',
      },
      {
        title: 'Fotos en 48 horas',
        body: 'Enlace privado de descarga, archivos a resolución completa, selección editada y varios formatos verticales listos para publicar.',
      },
    ],
    packagesTitle: 'Tarifas',
    packagesIntro:
      'Los mismos precios que en la web en inglés, en dólares o en rupias. Las entradas al monumento no están incluidas.',
    planLabels: {
      sunrise: {
        name: 'Sesión al amanecer',
        tagline: 'Más de 120 fotos y 3–5 reels — el fotógrafo va a tu hotel',
      },
      'pre-wedding': {
        name: 'Parejas y preboda',
        tagline: '200 fotos en alta resolución, 30 editadas y un vídeo cinematográfico',
      },
      'guided-photo-tour-small': {
        name: 'Guía + fotógrafo · 1 a 5 personas',
        tagline: 'Guía autorizado y fotógrafo, 40 fotos naturales y 5 reels',
      },
      'guided-photo-tour-large': {
        name: 'Guía + fotógrafo · 6 a 12 personas',
        tagline: 'Lo mismo para grupos grandes — 60 fotos y 7 reels',
      },
      'transport-guide': {
        name: 'Transporte + guía, sin fotógrafo',
        tagline: 'Día en Agra con coche privado con aire y guía autorizado, tú traes la cámara',
      },
    },
    priceNote: 'Tipo de cambio aproximado, actualizado con regularidad. Puedes pagar en dólares o en rupias.',
    perPerson: 'desde',
    faqTitle: 'Preguntas frecuentes',
    faqs: [
      {
        question: '¿Hablan español?',
        answer:
          'El fotógrafo trabaja en inglés e hindi. Si quieres la visita explicada en español, contratamos un guía autorizado hispanohablante; indícalo al reservar.',
      },
      {
        question: '¿Puede acompañarnos un guía durante la sesión en el Taj Mahal?',
        answer:
          'No. Dentro del Taj Mahal el reglamento no permite que un guía acompañe a un fotógrafo trabajando. El guía te espera a la salida, o te acompaña en Agra Fort y el resto de la ciudad.',
      },
      {
        question: '¿Abre todos los días el Taj Mahal?',
        answer:
          'Cierra los viernes. El resto de la semana abre unos cuarenta minutos antes del amanecer y cierra al atardecer.',
      },
      {
        question: '¿Cómo se paga?',
        answer:
          'Una señal por transferencia o enlace de pago reserva la fecha; el resto se abona allí, en efectivo o por transferencia, en dólares o rupias.',
      },
    ],
    ctaTitle: 'Dinos tu fecha',
    ctaBody:
      'Contestamos en minutos, desde el amanecer hasta la noche, hora de India. Cuéntanos la fecha, cuántos sois y tu hotel.',
    whatsappLabel: 'Escribir por WhatsApp',
    bookLabel: 'Formulario de reserva',
    englishLabel: 'Ver la web completa en inglés',
    whatsappMessage: 'Hola, quiero reservar una sesión de fotos en el Taj Mahal. Mi fecha:',
  },
  {
    code: 'de',
    hreflang: 'de',
    ogLocale: 'de_DE',
    endonym: 'Deutsch',
    dir: 'ltr',
    title: 'Fotograf am Taj Mahal | Fotoshooting in Agra mit offizieller Lizenz',
    description:
      'Vom indischen Tourismusministerium lizenzierter Fotograf am Taj Mahal in Agra. Sonnenaufgang-Shooting ab 120 USD, Paarfotos, Guide und Privatwagen. Antwort per WhatsApp in Minuten.',
    keywords: [
      'fotograf taj mahal',
      'fotoshooting taj mahal',
      'fotograf agra',
      'taj mahal sonnenaufgang fotos',
      'paarshooting indien',
      'deutschsprachiger guide agra',
    ],
    eyebrow: 'Agra · Indien',
    headline: 'Ihr Fotoshooting am Taj Mahal — mit lizenziertem Fotografen',
    subline:
      'Zehn Jahre direkt vor dem Monument, eine offizielle Lizenz des Tourismusministeriums und das Wissen, wo man um sechs Uhr morgens stehen muss.',
    answer:
      'Ein professionelles Fotoshooting am Taj Mahal kostet ab 120 USD und dauert rund zwei Stunden, zum Sonnenaufgang. Nur ein Fotograf mit offizieller Lizenz darf Profiausrüstung in die Anlage bringen — Stativ und Blitz werden an der Sicherheitskontrolle abgewiesen. Im Grabraum ist Fotografieren verboten, und ein Guide darf den Fotografen im Inneren des Taj Mahal nicht begleiten. Das ist eine Vorschrift des Monuments, nicht unsere.',
    trustTitle: 'Warum wir',
    trust: [
      {
        title: 'Nachprüfbare Lizenz',
        body: 'Genehmigung des indischen Tourismusministeriums. Wir kommen mit der Ausrüstung durch die Kontrolle — ohne Diskussion, ohne Aufpreis am Tor.',
      },
      {
        title: 'Sie bekommen alles',
        body: 'Alle Aufnahmen in voller Auflösung, ohne Wasserzeichen, innerhalb von 48 Stunden über Google Drive oder WeTransfer. Bearbeitung inklusive.',
      },
      {
        title: 'Der Preis bleibt der Preis',
        body: 'Honorar und Bildbearbeitung sind enthalten. Eintrittskarten werden separat ausgewiesen und nie mit Aufschlag berechnet.',
      },
      {
        title: 'Direkter Kontakt',
        body: 'Sie schreiben per WhatsApp mit dem Fotografen selbst — vorher und während des Shootings. Keine Agentur dazwischen.',
      },
    ],
    stepsTitle: 'So läuft es ab',
    steps: [
      {
        title: 'Datum schreiben',
        body: 'Eine WhatsApp-Nachricht genügt. Wir bestätigen den Termin und die genaue Sonnenaufgangszeit für diesen Tag.',
      },
      {
        title: 'Treffpunkt Hotel',
        body: 'Der Fotograf holt Sie an der Rezeption ab, bevor die Tore öffnen, und begleitet Sie durch die Sicherheitskontrolle.',
      },
      {
        title: 'Bilder in 48 Stunden',
        body: 'Privater Download-Link, Dateien in voller Auflösung, bearbeitete Auswahl und einige Hochformate für Social Media.',
      },
    ],
    packagesTitle: 'Preise',
    packagesIntro:
      'Dieselben Preise wie auf der englischen Seite, in US-Dollar oder indischen Rupien. Eintrittskarten sind nicht enthalten.',
    planLabels: {
      sunrise: {
        name: 'Sonnenaufgang-Shooting',
        tagline: '120+ Fotos und 3–5 Reels — der Fotograf kommt zu Ihrem Hotel',
      },
      'pre-wedding': {
        name: 'Paare und Pre-Wedding',
        tagline: '200 Fotos in voller Auflösung, 30 bearbeitet, dazu ein cineastisches Video',
      },
      'guided-photo-tour-small': {
        name: 'Guide + Fotograf · 1 bis 5 Personen',
        tagline: 'Lizenzierter Guide und Fotograf, 40 natürliche Aufnahmen und 5 Reels',
      },
      'guided-photo-tour-large': {
        name: 'Guide + Fotograf · 6 bis 12 Personen',
        tagline: 'Dasselbe für größere Gruppen — 60 Aufnahmen und 7 Reels',
      },
      'transport-guide': {
        name: 'Transport + Guide, ohne Fotograf',
        tagline: 'Tagestour Agra mit privatem Klimawagen und lizenziertem Guide, eigene Kamera',
      },
    },
    priceNote: 'Richtwert für den Wechselkurs, regelmäßig aktualisiert. Zahlung in Dollar oder Rupien möglich.',
    perPerson: 'ab',
    faqTitle: 'Häufige Fragen',
    faqs: [
      {
        question: 'Sprechen Sie Deutsch?',
        answer:
          'Der Fotograf arbeitet auf Englisch und Hindi. Für eine Führung auf Deutsch buchen wir einen lizenzierten deutschsprachigen Guide dazu — bitte bei der Anfrage angeben.',
      },
      {
        question: 'Darf ein Guide beim Shooting im Taj Mahal dabei sein?',
        answer:
          'Nein. Im Taj Mahal ist es nicht erlaubt, dass ein Guide einen arbeitenden Fotografen begleitet. Der Guide erwartet Sie am Ausgang oder begleitet Sie zum Agra Fort und den übrigen Orten.',
      },
      {
        question: 'Ist das Taj Mahal täglich geöffnet?',
        answer:
          'Freitags geschlossen. An den anderen Tagen öffnet es etwa vierzig Minuten vor Sonnenaufgang und schließt bei Sonnenuntergang.',
      },
      {
        question: 'Wie wird bezahlt?',
        answer:
          'Eine Anzahlung per Überweisung oder Zahlungslink sichert das Datum; der Rest wird vor Ort bezahlt, in bar oder per Überweisung, in Dollar oder Rupien.',
      },
    ],
    ctaTitle: 'Schreiben Sie uns Ihr Datum',
    ctaBody:
      'Antwort innerhalb von Minuten, von Sonnenaufgang bis spät am Abend indischer Zeit. Nennen Sie Datum, Personenzahl und Hotel.',
    whatsappLabel: 'Über WhatsApp schreiben',
    bookLabel: 'Buchungsformular',
    englishLabel: 'Zur vollständigen englischen Seite',
    whatsappMessage: 'Hallo, ich möchte ein Fotoshooting am Taj Mahal buchen. Mein Datum:',
  },
  {
    code: 'it',
    hreflang: 'it',
    ogLocale: 'it_IT',
    endonym: 'Italiano',
    dir: 'ltr',
    title: 'Fotografo al Taj Mahal | Servizio fotografico ad Agra con permesso',
    description:
      'Fotografo autorizzato dal Ministero del Turismo indiano al Taj Mahal, ad Agra. Servizio all’alba da 120 USD, foto di coppia, guida e auto privata. Rispondiamo su WhatsApp in pochi minuti.',
    keywords: [
      'fotografo taj mahal',
      'servizio fotografico taj mahal',
      'fotografo agra',
      'foto alba taj mahal',
      'fotografo coppie india',
      'guida italiana agra',
    ],
    eyebrow: 'Agra · India',
    headline: 'Il vostro servizio fotografico al Taj Mahal, con fotografo autorizzato',
    subline:
      'Dieci anni davanti al monumento, una licenza ufficiale del Ministero del Turismo e la certezza di dove mettersi alle sei del mattino.',
    answer:
      'Un servizio fotografico professionale al Taj Mahal costa a partire da 120 USD e dura circa due ore, all’alba. Solo un fotografo con permesso ufficiale può portare attrezzatura professionale dentro il complesso: cavalletto e flash vengono respinti ai controlli. È vietato fotografare all’interno della camera funeraria e una guida non può accompagnare il fotografo dentro il Taj Mahal: è una regola del monumento, non nostra.',
    trustTitle: 'Perché noi',
    trust: [
      {
        title: 'Licenza ufficiale verificabile',
        body: 'Autorizzazione del Ministero del Turismo indiano. Passiamo i controlli con l’attrezzatura senza discussioni né sovrapprezzi al cancello.',
      },
      {
        title: 'Vi portate via tutto',
        body: 'Tutte le foto in alta risoluzione, senza filigrana, consegnate entro 48 ore via Google Drive o WeTransfer. Post-produzione inclusa.',
      },
      {
        title: 'Il prezzo è quello',
        body: 'La tariffa comprende fotografo e ritocco. I biglietti del monumento sono indicati a parte e non vengono mai ricaricati.',
      },
      {
        title: 'Parlate col fotografo',
        body: 'Scrivete su WhatsApp direttamente a chi scatterà le foto, prima e durante il servizio. Nessuna agenzia di mezzo.',
      },
    ],
    stepsTitle: 'Come funziona',
    steps: [
      {
        title: 'Ci scrivete la data',
        body: 'Basta un messaggio WhatsApp. Confermiamo la disponibilità e l’ora esatta dell’alba di quel giorno.',
      },
      {
        title: 'Appuntamento in hotel',
        body: 'Il fotografo vi aspetta alla reception prima dell’apertura dei cancelli e vi accompagna ai controlli di sicurezza.',
      },
      {
        title: 'Foto in 48 ore',
        body: 'Link privato per il download, file a piena risoluzione, selezione ritoccata e alcuni formati verticali pronti da pubblicare.',
      },
    ],
    packagesTitle: 'Tariffe',
    packagesIntro:
      'Gli stessi prezzi del sito in inglese, in dollari o in rupie. I biglietti d’ingresso al monumento non sono inclusi.',
    planLabels: {
      sunrise: {
        name: 'Servizio all’alba',
        tagline: 'Oltre 120 foto e 3–5 reel — il fotografo viene in hotel',
      },
      'pre-wedding': {
        name: 'Coppie e pre-matrimonio',
        tagline: '200 foto in alta risoluzione, 30 ritoccate e un video cinematografico',
      },
      'guided-photo-tour-small': {
        name: 'Guida + fotografo · 1–5 persone',
        tagline: 'Guida autorizzata e fotografo, 40 foto naturali e 5 reel',
      },
      'guided-photo-tour-large': {
        name: 'Guida + fotografo · 6–12 persone',
        tagline: 'La stessa formula per gruppi più grandi — 60 foto e 7 reel',
      },
      'transport-guide': {
        name: 'Trasporto + guida, senza fotografo',
        tagline: 'Giornata ad Agra con auto privata climatizzata e guida autorizzata, macchina vostra',
      },
    },
    priceNote: 'Cambio indicativo, aggiornato regolarmente. Si paga in dollari o in rupie.',
    perPerson: 'da',
    faqTitle: 'Domande frequenti',
    faqs: [
      {
        question: 'Parlate italiano?',
        answer:
          'Il fotografo lavora in inglese e hindi. Per una visita raccontata in italiano aggiungiamo una guida autorizzata italofona: segnalatelo in fase di prenotazione.',
      },
      {
        question: 'La guida può restare con noi durante il servizio al Taj Mahal?',
        answer:
          'No. Dentro il Taj Mahal il regolamento non consente a una guida di accompagnare un fotografo al lavoro. La guida vi attende all’uscita oppure vi accompagna ad Agra Fort e negli altri siti.',
      },
      {
        question: 'Il Taj Mahal è aperto ogni giorno?',
        answer:
          'È chiuso il venerdì. Negli altri giorni apre circa quaranta minuti prima dell’alba e chiude al tramonto.',
      },
      {
        question: 'Come si paga?',
        answer:
          'Un acconto con bonifico o link di pagamento blocca la data; il saldo si versa sul posto, in contanti o con bonifico, in dollari o rupie.',
      },
    ],
    ctaTitle: 'Scriveteci la vostra data',
    ctaBody:
      'Rispondiamo in pochi minuti, dall’alba a tarda sera, ora indiana. Diteci data, numero di persone e hotel.',
    whatsappLabel: 'Scrivi su WhatsApp',
    bookLabel: 'Modulo di prenotazione',
    englishLabel: 'Vedi il sito completo in inglese',
    whatsappMessage: 'Buongiorno, vorrei prenotare un servizio fotografico al Taj Mahal. La mia data:',
  },
  {
    code: 'pt',
    hreflang: 'pt',
    ogLocale: 'pt_BR',
    endonym: 'Português',
    dir: 'ltr',
    title: 'Fotógrafo no Taj Mahal | Ensaio fotográfico em Agra com licença oficial',
    description:
      'Fotógrafo licenciado pelo Ministério do Turismo da Índia no Taj Mahal, em Agra. Ensaio ao amanhecer a partir de 120 USD, fotos de casal, guia e carro privativo. Resposta no WhatsApp em minutos.',
    keywords: [
      'fotógrafo taj mahal',
      'ensaio fotográfico taj mahal',
      'fotógrafo agra',
      'fotos amanhecer taj mahal',
      'ensaio de casal índia',
      'guia em português agra',
    ],
    eyebrow: 'Agra · Índia',
    headline: 'Seu ensaio no Taj Mahal, com fotógrafo licenciado',
    subline:
      'Dez anos em frente ao monumento, licença oficial do Ministério do Turismo e a certeza de onde ficar às seis da manhã.',
    answer:
      'Um ensaio fotográfico profissional no Taj Mahal custa a partir de 120 USD e dura cerca de duas horas, ao amanhecer. Só um fotógrafo com licença oficial pode levar equipamento profissional para dentro do complexo — tripé e flash são barrados na segurança. É proibido fotografar dentro da câmara funerária, e um guia não pode acompanhar o fotógrafo dentro do Taj Mahal: é regra do monumento, não nossa.',
    trustTitle: 'Por que com a gente',
    trust: [
      {
        title: 'Licença oficial verificável',
        body: 'Autorização do Ministério do Turismo da Índia. Passamos pela segurança com o equipamento sem discussão e sem taxa extra no portão.',
      },
      {
        title: 'Você leva tudo',
        body: 'Todas as fotos em alta resolução, sem marca d’água, entregues em 48 horas por Google Drive ou WeTransfer. Tratamento incluído.',
      },
      {
        title: 'O preço é o preço',
        body: 'A diária inclui fotógrafo e edição. Os ingressos do monumento são informados separadamente e nunca com acréscimo.',
      },
      {
        title: 'Você fala com o fotógrafo',
        body: 'O WhatsApp é com quem vai fazer as fotos, antes e durante o ensaio. Sem agência no meio.',
      },
    ],
    stepsTitle: 'Como funciona',
    steps: [
      {
        title: 'Você manda a data',
        body: 'Uma mensagem no WhatsApp basta. Confirmamos a disponibilidade e o horário exato do amanhecer naquele dia.',
      },
      {
        title: 'Encontro no hotel',
        body: 'O fotógrafo espera na recepção antes de os portões abrirem e acompanha você até a inspeção de segurança.',
      },
      {
        title: 'Fotos em 48 horas',
        body: 'Link privado de download, arquivos em resolução máxima, seleção tratada e alguns formatos verticais prontos para postar.',
      },
    ],
    packagesTitle: 'Preços',
    packagesIntro:
      'Os mesmos preços do site em inglês, em dólares ou rupias. Ingressos do monumento não incluídos.',
    planLabels: {
      sunrise: {
        name: 'Ensaio ao amanhecer',
        tagline: 'Mais de 120 fotos e 3–5 reels — o fotógrafo vai ao seu hotel',
      },
      'pre-wedding': {
        name: 'Casais e pré-wedding',
        tagline: '200 fotos em alta resolução, 30 tratadas e um vídeo cinematográfico',
      },
      'guided-photo-tour-small': {
        name: 'Guia + fotógrafo · 1 a 5 pessoas',
        tagline: 'Guia licenciado e fotógrafo, 40 fotos naturais e 5 reels',
      },
      'guided-photo-tour-large': {
        name: 'Guia + fotógrafo · 6 a 12 pessoas',
        tagline: 'O mesmo pacote para grupos maiores — 60 fotos e 7 reels',
      },
      'transport-guide': {
        name: 'Transporte + guia, sem fotógrafo',
        tagline: 'Dia em Agra com carro privativo com ar e guia licenciado, câmera sua',
      },
    },
    priceNote: 'Câmbio aproximado, atualizado com frequência. O pagamento pode ser em dólares ou rupias.',
    perPerson: 'a partir de',
    faqTitle: 'Perguntas frequentes',
    faqs: [
      {
        question: 'Vocês falam português?',
        answer:
          'O fotógrafo trabalha em inglês e hindi. Para a visita explicada em português, contratamos um guia licenciado que fale o idioma — avise na reserva.',
      },
      {
        question: 'O guia pode ficar com a gente durante o ensaio no Taj Mahal?',
        answer:
          'Não. Dentro do Taj Mahal o regulamento não permite que um guia acompanhe um fotógrafo trabalhando. O guia espera na saída ou acompanha você no Agra Fort e nos outros pontos.',
      },
      {
        question: 'O Taj Mahal abre todos os dias?',
        answer:
          'Fecha às sextas-feiras. Nos outros dias abre cerca de quarenta minutos antes do amanhecer e fecha ao pôr do sol.',
      },
      {
        question: 'Como é o pagamento?',
        answer:
          'Um sinal por transferência ou link de pagamento garante a data; o restante é pago no local, em dinheiro ou transferência, em dólares ou rupias.',
      },
    ],
    ctaTitle: 'Mande sua data',
    ctaBody:
      'Respondemos em minutos, do amanhecer até a noite, horário da Índia. Diga a data, quantas pessoas e o hotel.',
    whatsappLabel: 'Falar no WhatsApp',
    bookLabel: 'Formulário de reserva',
    englishLabel: 'Ver o site completo em inglês',
    whatsappMessage: 'Olá, quero reservar um ensaio fotográfico no Taj Mahal. Minha data:',
  },
  {
    code: 'ru',
    hreflang: 'ru',
    ogLocale: 'ru_RU',
    endonym: 'Русский',
    dir: 'ltr',
    title: 'Фотограф у Тадж-Махала | Фотосессия в Агре с официальным разрешением',
    description:
      'Фотограф с лицензией Министерства туризма Индии у Тадж-Махала в Агре. Съёмка на рассвете от 120 USD, парные фото, гид и личный автомобиль. Ответ в WhatsApp за минуты.',
    keywords: [
      'фотограф тадж махал',
      'фотосессия тадж махал',
      'фотограф агра',
      'тадж махал рассвет фото',
      'парная фотосессия индия',
      'русскоговорящий гид агра',
    ],
    eyebrow: 'Агра · Индия',
    headline: 'Фотосессия у Тадж-Махала с лицензированным фотографом',
    subline:
      'Десять лет работы у самого монумента, официальная лицензия Министерства туризма и точное знание, где стоять в шесть утра.',
    answer:
      'Профессиональная фотосессия у Тадж-Махала стоит от 120 USD и занимает около двух часов — на рассвете. Пронести профессиональную технику на территорию может только фотограф с официальным разрешением: штатив и вспышку на досмотре не пропускают. Съёмка внутри усыпальницы запрещена, а гид не имеет права сопровождать фотографа внутри комплекса — это правило монумента, а не наше.',
    trustTitle: 'Почему мы',
    trust: [
      {
        title: 'Проверяемая лицензия',
        body: 'Разрешение Министерства туризма Индии. Проходим досмотр с техникой без споров и без доплат на входе.',
      },
      {
        title: 'Вы получаете всё',
        body: 'Все кадры в полном разрешении, без водяных знаков, в течение 48 часов через Google Drive или WeTransfer. Обработка включена.',
      },
      {
        title: 'Цена не меняется',
        body: 'В стоимость входят работа фотографа и обработка. Входные билеты указываются отдельно и без наценки.',
      },
      {
        title: 'Общение напрямую',
        body: 'В WhatsApp вы пишете самому фотографу — до съёмки и во время неё. Без агентств-посредников.',
      },
    ],
    stepsTitle: 'Как это работает',
    steps: [
      {
        title: 'Вы пишете дату',
        body: 'Достаточно сообщения в WhatsApp. Подтверждаем свободное время и точный час рассвета на этот день.',
      },
      {
        title: 'Встреча в отеле',
        body: 'Фотограф ждёт вас на ресепшен до открытия ворот и проводит через досмотр.',
      },
      {
        title: 'Фото за 48 часов',
        body: 'Приватная ссылка на скачивание, файлы в полном разрешении, обработанная подборка и несколько вертикальных кадров для соцсетей.',
      },
    ],
    packagesTitle: 'Цены',
    packagesIntro:
      'Те же цены, что и на английской версии сайта, в долларах или рупиях. Входные билеты не включены.',
    planLabels: {
      sunrise: {
        name: 'Съёмка на рассвете',
        tagline: '120+ кадров и 3–5 рилсов — фотограф приезжает к вашему отелю',
      },
      'pre-wedding': {
        name: 'Пары и предсвадебная съёмка',
        tagline: '200 кадров в высоком разрешении, 30 обработанных и кинематографичное видео',
      },
      'guided-photo-tour-small': {
        name: 'Гид + фотограф · 1–5 человек',
        tagline: 'Лицензированный гид и фотограф, 40 естественных кадров и 5 рилсов',
      },
      'guided-photo-tour-large': {
        name: 'Гид + фотограф · 6–12 человек',
        tagline: 'То же для больших групп — 60 кадров и 7 рилсов',
      },
      'transport-guide': {
        name: 'Транспорт + гид, без фотографа',
        tagline: 'День в Агре: личный автомобиль с кондиционером и лицензированный гид, камера ваша',
      },
    },
    priceNote: 'Курс указан ориентировочно и регулярно обновляется. Оплата в долларах или рупиях.',
    perPerson: 'от',
    faqTitle: 'Частые вопросы',
    faqs: [
      {
        question: 'Вы говорите по-русски?',
        answer:
          'Фотограф работает на английском и хинди. Для экскурсии на русском мы добавляем лицензированного русскоговорящего гида — укажите это при бронировании.',
      },
      {
        question: 'Может ли гид быть с нами во время съёмки у Тадж-Махала?',
        answer:
          'Нет. Внутри комплекса правила запрещают гиду сопровождать работающего фотографа. Гид встретит вас на выходе или проведёт экскурсию по Агра-Форту и остальным местам.',
      },
      {
        question: 'Тадж-Махал открыт каждый день?',
        answer:
          'По пятницам закрыт. В остальные дни открывается примерно за сорок минут до рассвета и закрывается на закате.',
      },
      {
        question: 'Как происходит оплата?',
        answer:
          'Предоплата переводом или по платёжной ссылке закрепляет дату; остальное — на месте, наличными или переводом, в долларах или рупиях.',
      },
    ],
    ctaTitle: 'Напишите вашу дату',
    ctaBody:
      'Отвечаем за несколько минут, с рассвета до позднего вечера по индийскому времени. Напишите дату, число человек и отель.',
    whatsappLabel: 'Написать в WhatsApp',
    bookLabel: 'Форма бронирования',
    englishLabel: 'Полная версия сайта на английском',
    whatsappMessage: 'Здравствуйте! Хочу забронировать фотосессию у Тадж-Махала. Моя дата:',
  },
  {
    code: 'ja',
    hreflang: 'ja',
    ogLocale: 'ja_JP',
    endonym: '日本語',
    dir: 'ltr',
    title: 'タージ・マハルの公認カメラマン｜アーグラでの撮影プラン',
    description:
      'インド政府観光省公認のカメラマンがタージ・マハルで撮影します。日の出の撮影は120米ドルから。カップル撮影、ガイド、専用車もご用意。WhatsAppで数分以内に返信します。',
    keywords: [
      'タージマハル 撮影',
      'タージマハル カメラマン',
      'アーグラ 写真撮影',
      'タージマハル 日の出',
      'インド カップル フォト',
      'アーグラ 日本語ガイド',
    ],
    eyebrow: 'インド・アーグラ',
    headline: 'タージ・マハルでの撮影を、公認カメラマンと',
    subline:
      '記念堂の前で十年。観光省の正式な許可証と、朝六時にどこに立つべきかという経験があります。',
    answer:
      'タージ・マハルでのプロ撮影は120米ドルから、所要時間は日の出の時間帯におよそ2時間です。敷地内にプロ用機材を持ち込めるのは、正式な許可証を持つカメラマンだけで、三脚とフラッシュは手荷物検査で持ち込めません。墓室内での撮影は禁止されており、ガイドがカメラマンに同行して敷地内に入ることもできません。これは記念堂の規則で、当社の方針ではありません。',
    trustTitle: '選ばれる理由',
    trust: [
      {
        title: '確認できる公式許可証',
        body: 'インド政府観光省の認可。機材を持って検査を通過できるため、入口でのやり取りも追加料金もありません。',
      },
      {
        title: '全データをお渡し',
        body: '透かしなしの高解像度データを48時間以内にGoogle DriveまたはWeTransferでお届け。補正込みです。',
      },
      {
        title: '表示価格のまま',
        body: '料金には撮影と写真補正が含まれます。入場券は別途明記し、上乗せはしません。',
      },
      {
        title: '撮影者と直接やり取り',
        body: '撮影前も当日も、WhatsAppで撮影するカメラマン本人とやり取りします。代理店は入りません。',
      },
    ],
    stepsTitle: 'ご予約の流れ',
    steps: [
      {
        title: '日付をお知らせください',
        body: 'WhatsAppのメッセージ一通で結構です。空き状況とその日の日の出時刻をお返事します。',
      },
      {
        title: 'ホテルでお待ち合わせ',
        body: '開門前にホテルのロビーでお迎えし、手荷物検査までご案内します。',
      },
      {
        title: '48時間でお届け',
        body: '非公開のダウンロードリンク、フル解像度のデータ、補正済みのセレクト、そしてSNS用の縦構図を数点。',
      },
    ],
    packagesTitle: '料金',
    packagesIntro:
      '英語サイトと同じ料金です。米ドルまたはインドルピーで表示。入場券は含まれません。',
    planLabels: {
      sunrise: {
        name: '日の出の撮影',
        tagline: '120枚以上とリール3〜5本。カメラマンがホテルまで伺います',
      },
      'pre-wedding': {
        name: 'カップル・前撮り',
        tagline: '高解像度200枚、補正済み30枚、シネマティック動画付き',
      },
      'guided-photo-tour-small': {
        name: 'ガイド＋撮影・1〜5名',
        tagline: '公認ガイドとカメラマン、自然な写真40枚とリール5本',
      },
      'guided-photo-tour-large': {
        name: 'ガイド＋撮影・6〜12名',
        tagline: '大人数向けの同じ内容。写真60枚とリール7本',
      },
      'transport-guide': {
        name: '専用車＋ガイド（撮影なし）',
        tagline: 'アーグラ日帰り。エアコン付き専用車と公認ガイド、撮影はご自身のカメラで',
      },
    },
    priceNote: '為替レートは目安で、随時更新しています。お支払いは米ドルまたはルピーで可能です。',
    perPerson: '〜',
    faqTitle: 'よくあるご質問',
    faqs: [
      {
        question: '日本語は話せますか。',
        answer:
          'カメラマンは英語とヒンディー語で対応します。日本語での解説をご希望の場合は、公認の日本語ガイドを手配しますので、ご予約時にお知らせください。',
      },
      {
        question: 'タージ・マハルの撮影中にガイドも同行できますか。',
        answer:
          'できません。敷地内では、ガイドが撮影中のカメラマンに同行することが規則で認められていません。ガイドは出口でお待ちするか、アーグラ城などをご案内します。',
      },
      {
        question: 'タージ・マハルは毎日開いていますか。',
        answer:
          '金曜は閉館です。その他の日は日の出の約40分前に開門し、日没に閉門します。',
      },
      {
        question: '支払い方法は。',
        answer:
          '送金または決済リンクでのお預かり金で日程を確定し、残額は現地で現金または送金にて、米ドルまたはルピーでお支払いいただきます。',
      },
    ],
    ctaTitle: 'ご希望の日付をお送りください',
    ctaBody:
      'インド時間の日の出から夜まで、数分で返信します。日付、人数、滞在ホテルをお知らせください。',
    whatsappLabel: 'WhatsAppで相談',
    bookLabel: '予約フォーム',
    englishLabel: '英語版サイトを見る',
    whatsappMessage: 'こんにちは。タージ・マハルでの撮影を予約したいです。希望日：',
  },
  {
    code: 'zh',
    hreflang: 'zh',
    ogLocale: 'zh_CN',
    endonym: '中文',
    dir: 'ltr',
    title: '泰姬陵持证摄影师｜阿格拉拍摄预约',
    description:
      '印度旅游部持证摄影师在泰姬陵为您拍摄。日出拍摄120美元起，情侣写真、导游与专车可选。WhatsApp 几分钟内回复。',
    keywords: [
      '泰姬陵 摄影',
      '泰姬陵 摄影师',
      '阿格拉 拍照',
      '泰姬陵 日出',
      '印度 情侣写真',
      '阿格拉 中文导游',
    ],
    eyebrow: '印度·阿格拉',
    headline: '泰姬陵拍摄，由持证摄影师完成',
    subline:
      '在陵墓前工作十年，持旅游部正式许可证，清楚早上六点该站在哪里。',
    answer:
      '泰姬陵的专业拍摄费用从120美元起，日出时段约两小时。只有持官方许可证的摄影师才能把专业器材带入园区，三脚架和闪光灯在安检处会被拦下。主墓室内禁止拍摄；导游也不能陪同摄影师进入泰姬陵——这是景区规定，不是我们的规定。',
    trustTitle: '为什么选择我们',
    trust: [
      {
        title: '可查验的官方许可',
        body: '由印度旅游部签发。我们带着器材过安检，无需交涉，门口也不会另收费用。',
      },
      {
        title: '照片全部给您',
        body: '全部高清原图，无水印，48小时内通过 Google Drive 或 WeTransfer 发送，含修图。',
      },
      {
        title: '报价就是最终价',
        body: '费用含摄影与修图。门票单独列出，绝不加价。',
      },
      {
        title: '直接联系摄影师',
        body: '拍摄前和拍摄中，您在 WhatsApp 上联系的就是为您拍照的人，没有中介。',
      },
    ],
    stepsTitle: '流程',
    steps: [
      {
        title: '告诉我们日期',
        body: '一条 WhatsApp 消息即可。我们确认档期，并告知当天准确的日出时间。',
      },
      {
        title: '酒店会合',
        body: '开门前摄影师在酒店大厅等您，并陪同通过安检。',
      },
      {
        title: '48小时交片',
        body: '私密下载链接、全分辨率原图、精修精选，另附几张适合社交平台的竖构图。',
      },
    ],
    packagesTitle: '价格',
    packagesIntro: '与英文站相同的价格，可按美元或印度卢比查看。门票不含在内。',
    planLabels: {
      sunrise: {
        name: '日出拍摄',
        tagline: '120张以上照片与3–5条短视频，摄影师到酒店与您会合',
      },
      'pre-wedding': {
        name: '情侣与婚纱写真',
        tagline: '200张高清照片、30张精修，另含一条电影感视频',
      },
      'guided-photo-tour-small': {
        name: '导游＋摄影·1至5人',
        tagline: '持证导游与摄影师，40张自然抓拍与5条短视频',
      },
      'guided-photo-tour-large': {
        name: '导游＋摄影·6至12人',
        tagline: '同样内容，适合大团——60张照片与7条短视频',
      },
      'transport-guide': {
        name: '用车＋导游（不含摄影）',
        tagline: '阿格拉一日游：私家空调车与持证导游，自带相机',
      },
    },
    priceNote: '汇率为参考值，会定期更新。可用美元或卢比付款。',
    perPerson: '起',
    faqTitle: '常见问题',
    faqs: [
      {
        question: '你们说中文吗？',
        answer:
          '摄影师使用英语和印地语。若需要中文讲解，我们可以加配一位持证中文导游，预订时告知即可。',
      },
      {
        question: '在泰姬陵拍摄时导游可以陪同吗？',
        answer:
          '不可以。园区规定不允许导游陪同正在工作的摄影师。导游会在出口等您，或带您游览阿格拉堡等其他景点。',
      },
      {
        question: '泰姬陵每天都开放吗？',
        answer: '周五闭园。其他日子大约在日出前四十分钟开门，日落时关门。',
      },
      {
        question: '如何付款？',
        answer:
          '通过转账或支付链接付定金锁定日期，余款在现场以现金或转账支付，美元或卢比均可。',
      },
    ],
    ctaTitle: '把您的日期发给我们',
    ctaBody: '印度时间从日出到深夜，几分钟内回复。请告知日期、人数和酒店。',
    whatsappLabel: '用 WhatsApp 联系',
    bookLabel: '预约表单',
    englishLabel: '查看完整英文网站',
    whatsappMessage: '你好，我想预约泰姬陵的拍摄。我的日期：',
  },
  {
    code: 'ar',
    hreflang: 'ar',
    ogLocale: 'ar_AE',
    endonym: 'العربية',
    dir: 'rtl',
    title: 'مصوّر مرخّص في تاج محل | جلسة تصوير في أجرا',
    description:
      'مصوّر مرخّص من وزارة السياحة الهندية في تاج محل بأجرا. جلسة شروق الشمس من 120 دولارًا، تصوير للأزواج، مرشد سياحي وسيارة خاصة. نرد على واتساب في دقائق.',
    keywords: [
      'مصور تاج محل',
      'جلسة تصوير تاج محل',
      'مصور في أجرا',
      'تصوير شروق الشمس تاج محل',
      'تصوير أزواج الهند',
      'مرشد عربي أجرا',
    ],
    eyebrow: 'أجرا · الهند',
    headline: 'جلسة تصويرك في تاج محل مع مصوّر مرخّص',
    subline:
      'عشر سنوات أمام الضريح، ترخيص رسمي من وزارة السياحة، ومعرفة دقيقة بالمكان الذي تقف فيه في السادسة صباحًا.',
    answer:
      'تبدأ جلسة التصوير الاحترافية في تاج محل من 120 دولارًا أمريكيًا وتستمر نحو ساعتين وقت شروق الشمس. لا يُسمح بإدخال معدات التصوير الاحترافية إلى الموقع إلا لمصوّر يحمل ترخيصًا رسميًا؛ أما الحامل الثلاثي والفلاش فيُمنعان عند التفتيش. التصوير ممنوع داخل حجرة الضريح، ولا يُسمح للمرشد السياحي بمصاحبة المصوّر داخل تاج محل — وهذه قاعدة الموقع لا قاعدتنا.',
    trustTitle: 'لماذا نحن',
    trust: [
      {
        title: 'ترخيص رسمي قابل للتحقق',
        body: 'تصريح من وزارة السياحة الهندية. ندخل من نقطة التفتيش بالمعدات دون جدال ودون رسوم إضافية على البوابة.',
      },
      {
        title: 'تحصل على كل الصور',
        body: 'جميع الصور بدقة كاملة وبدون علامة مائية، تُسلَّم خلال 48 ساعة عبر Google Drive أو WeTransfer، والتعديل مشمول.',
      },
      {
        title: 'السعر المعلن هو السعر',
        body: 'تشمل القيمة أجر المصوّر والتعديل. تذاكر الدخول تُذكر على حدة ولا تُحمَّل بأي زيادة.',
      },
      {
        title: 'تتحدث مع المصوّر نفسه',
        body: 'تتواصل على واتساب مباشرة مع من سيصوّرك، قبل الجلسة وخلالها. لا وسيط ولا وكالة.',
      },
    ],
    stepsTitle: 'كيف تسير الأمور',
    steps: [
      {
        title: 'أرسل لنا التاريخ',
        body: 'رسالة واتساب واحدة تكفي. نؤكد التوافر ووقت الشروق بدقة في ذلك اليوم.',
      },
      {
        title: 'نلتقي في فندقك',
        body: 'ينتظرك المصوّر في الاستقبال قبل فتح الأبواب، ويرافقك حتى نقطة التفتيش.',
      },
      {
        title: 'الصور خلال 48 ساعة',
        body: 'رابط تحميل خاص، ملفات بالدقة الكاملة، مجموعة معدّلة، وبعض الصور العمودية الجاهزة للنشر.',
      },
    ],
    packagesTitle: 'الأسعار',
    packagesIntro:
      'نفس أسعار الموقع الإنجليزي، بالدولار الأمريكي أو بالروبية الهندية. تذاكر الدخول غير مشمولة.',
    planLabels: {
      sunrise: {
        name: 'جلسة شروق الشمس',
        tagline: 'أكثر من 120 صورة و3 إلى 5 مقاطع قصيرة — المصوّر يأتي إلى فندقك',
      },
      'pre-wedding': {
        name: 'الأزواج وما قبل الزفاف',
        tagline: '200 صورة بدقة عالية، 30 صورة معدّلة، وفيديو سينمائي',
      },
      'guided-photo-tour-small': {
        name: 'مرشد + مصوّر · من 1 إلى 5 أشخاص',
        tagline: 'مرشد مرخّص ومصوّر، 40 صورة طبيعية و5 مقاطع قصيرة',
      },
      'guided-photo-tour-large': {
        name: 'مرشد + مصوّر · من 6 إلى 12 شخصًا',
        tagline: 'نفس الباقة للمجموعات الأكبر — 60 صورة و7 مقاطع',
      },
      'transport-guide': {
        name: 'سيارة + مرشد بدون تصوير',
        tagline: 'يوم في أجرا بسيارة خاصة مكيفة ومرشد مرخّص، والكاميرا كاميرتك',
      },
    },
    priceNote: 'سعر الصرف تقديري ويُحدَّث بانتظام. الدفع بالدولار أو بالروبية.',
    perPerson: 'من',
    faqTitle: 'أسئلة متكررة',
    faqs: [
      {
        question: 'هل تتحدثون العربية؟',
        answer:
          'يعمل المصوّر بالإنجليزية والهندية. وإذا رغبت في شرح بالعربية نضيف مرشدًا مرخّصًا يتحدث العربية؛ اذكر ذلك عند الحجز.',
      },
      {
        question: 'هل يمكن أن يبقى المرشد معنا أثناء التصوير في تاج محل؟',
        answer:
          'لا. داخل تاج محل لا تسمح اللوائح بمصاحبة المرشد لمصوّر يعمل. ينتظرك المرشد عند المخرج، أو يرافقك إلى قلعة أجرا وبقية المواقع.',
      },
      {
        question: 'هل تاج محل مفتوح كل يوم؟',
        answer:
          'مغلق يوم الجمعة. وفي بقية الأيام يفتح نحو أربعين دقيقة قبل الشروق ويغلق عند الغروب.',
      },
      {
        question: 'كيف يتم الدفع؟',
        answer:
          'عربون بتحويل بنكي أو رابط دفع يثبّت التاريخ، والباقي يُدفع في الموقع نقدًا أو بتحويل، بالدولار أو بالروبية.',
      },
    ],
    ctaTitle: 'أرسل لنا تاريخك',
    ctaBody:
      'نرد في دقائق، من الشروق حتى وقت متأخر بتوقيت الهند. اذكر التاريخ وعدد الأشخاص والفندق.',
    whatsappLabel: 'تواصل على واتساب',
    bookLabel: 'نموذج الحجز',
    englishLabel: 'تصفّح الموقع الكامل بالإنجليزية',
    whatsappMessage: 'مرحبًا، أريد حجز جلسة تصوير في تاج محل. التاريخ:',
  },
  {
    code: 'hi',
    hreflang: 'hi',
    ogLocale: 'hi_IN',
    endonym: 'हिन्दी',
    dir: 'ltr',
    title: 'ताजमहल फोटोग्राफर | आगरा में लाइसेंसी फोटो शूट',
    description:
      'आगरा के ताजमहल पर पर्यटन मंत्रालय से लाइसेंस प्राप्त फोटोग्राफर। सनराइज़ शूट $120 से, कपल और प्री-वेडिंग शूट, गाइड और प्राइवेट कार। WhatsApp पर कुछ मिनटों में जवाब।',
    keywords: [
      'ताजमहल फोटोग्राफर',
      'ताजमहल फोटो शूट',
      'आगरा फोटोग्राफर',
      'ताजमहल सनराइज फोटो',
      'प्री वेडिंग शूट ताजमहल',
      'आगरा गाइड',
    ],
    eyebrow: 'आगरा · भारत',
    headline: 'ताजमहल पर आपका फोटो शूट, लाइसेंसी फोटोग्राफर के साथ',
    subline:
      'स्मारक के सामने दस साल का काम, पर्यटन मंत्रालय का आधिकारिक लाइसेंस, और सुबह छह बजे कहाँ खड़ा होना है इसकी पक्की जानकारी।',
    answer:
      'ताजमहल पर प्रोफेशनल फोटो शूट $120 (लगभग) से शुरू होता है और सूर्योदय के समय करीब दो घंटे चलता है। परिसर में प्रोफेशनल कैमरा उपकरण केवल आधिकारिक परमिट वाला फोटोग्राफर ले जा सकता है — ट्राइपॉड और फ्लैश सुरक्षा जाँच पर रोक दिए जाते हैं। मुख्य मक़बरे के अंदर फोटोग्राफी मना है, और ताजमहल के भीतर गाइड फोटोग्राफर के साथ नहीं जा सकता — यह नियम स्मारक का है, हमारा नहीं।',
    trustTitle: 'हमारे साथ क्यों',
    trust: [
      {
        title: 'जाँचा जा सकने वाला लाइसेंस',
        body: 'भारत सरकार के पर्यटन मंत्रालय से मान्यता। उपकरण के साथ जाँच से निकलते हैं — गेट पर न बहस, न अतिरिक्त पैसा।',
      },
      {
        title: 'सारी फोटो आपकी',
        body: 'पूरी रेज़ोल्यूशन में, बिना वॉटरमार्क, 48 घंटे में Google Drive या WeTransfer पर। एडिटिंग शामिल।',
      },
      {
        title: 'जो रेट बताया, वही लगेगा',
        body: 'फीस में फोटोग्राफर और एडिटिंग शामिल है। स्मारक के टिकट अलग से बताए जाते हैं, उन पर कोई कमीशन नहीं।',
      },
      {
        title: 'सीधी बात फोटोग्राफर से',
        body: 'WhatsApp पर आप उसी से बात करते हैं जो शूट करेगा — पहले भी और शूट के दौरान भी। बीच में कोई एजेंसी नहीं।',
      },
    ],
    stepsTitle: 'तरीका',
    steps: [
      {
        title: 'तारीख़ भेजिए',
        body: 'एक WhatsApp मैसेज काफ़ी है। हम उपलब्धता और उस दिन सूर्योदय का सही समय बता देते हैं।',
      },
      {
        title: 'होटल पर मुलाक़ात',
        body: 'गेट खुलने से पहले फोटोग्राफर होटल रिसेप्शन पर मिलता है और सुरक्षा जाँच तक साथ चलता है।',
      },
      {
        title: '48 घंटे में फोटो',
        body: 'प्राइवेट डाउनलोड लिंक, फुल रेज़ोल्यूशन फाइलें, एडिट किया हुआ सेलेक्शन और रील्स के लिए कुछ वर्टिकल फ्रेम।',
      },
    ],
    packagesTitle: 'रेट',
    packagesIntro:
      'अंग्रेज़ी साइट वाले ही रेट, डॉलर या रुपये में। स्मारक के टिकट इसमें शामिल नहीं हैं।',
    planLabels: {
      sunrise: {
        name: 'सनराइज़ शूट',
        tagline: '120+ फोटो और 3–5 रील — फोटोग्राफर आपके होटल पर मिलेगा',
      },
      'pre-wedding': {
        name: 'कपल और प्री-वेडिंग',
        tagline: '200+ हाई-रेज़ोल्यूशन फोटो, 30 एडिटेड फोटो और एक सिनेमैटिक वीडियो',
      },
      'guided-photo-tour-small': {
        name: 'गाइड + फोटो · 1 से 5 लोग',
        tagline: 'लाइसेंसी गाइड और फोटोग्राफर, 40 नैचुरल फोटो और 5 रील',
      },
      'guided-photo-tour-large': {
        name: 'गाइड + फोटो · 6 से 12 लोग',
        tagline: 'बड़े ग्रुप के लिए वही पैकेज — 60 फोटो और 7 रील',
      },
      'transport-guide': {
        name: 'गाड़ी + गाइड (फोटोग्राफी नहीं)',
        tagline: 'आगरा का एक दिन — प्राइवेट AC कार और लाइसेंसी गाइड, कैमरा आपका',
      },
    },
    priceNote: 'डॉलर-रुपये की दर अनुमानित है और समय-समय पर अपडेट होती है। भुगतान डॉलर या रुपये में।',
    perPerson: 'से',
    faqTitle: 'आम सवाल',
    faqs: [
      {
        question: 'क्या ताजमहल में शूट के साथ गाइड भी रह सकता है?',
        answer:
          'नहीं। ताजमहल के अंदर नियम के मुताबिक गाइड काम कर रहे फोटोग्राफर के साथ नहीं जा सकता। गाइड बाहर निकलने पर मिलता है, या आगरा फोर्ट और बाकी जगहें घुमाता है।',
      },
      {
        question: 'ताजमहल किस दिन बंद रहता है?',
        answer:
          'शुक्रवार को बंद रहता है। बाकी दिनों में सूर्योदय से करीब चालीस मिनट पहले खुलता है और सूर्यास्त पर बंद हो जाता है।',
      },
      {
        question: 'भारतीय मेहमानों के लिए भी वही रेट है?',
        answer:
          'हाँ, रेट एक ही है — आप डॉलर या रुपये में देख और दे सकते हैं। स्मारक के टिकट भारतीय नागरिकों के लिए काफ़ी कम होते हैं और अलग से लगते हैं।',
      },
      {
        question: 'पेमेंट कैसे होता है?',
        answer:
          'UPI, बैंक ट्रांसफर या पेमेंट लिंक से एडवांस देकर तारीख़ पक्की होती है; बाकी मौके पर नकद या ट्रांसफर से।',
      },
    ],
    ctaTitle: 'अपनी तारीख़ भेजिए',
    ctaBody:
      'सुबह सूर्योदय से रात तक, कुछ मिनटों में जवाब। तारीख़, कितने लोग और होटल का नाम लिख दीजिए।',
    whatsappLabel: 'WhatsApp पर बात करें',
    bookLabel: 'बुकिंग फॉर्म',
    englishLabel: 'पूरी अंग्रेज़ी साइट देखें',
    whatsappMessage: 'नमस्ते, मुझे ताजमहल पर फोटो शूट बुक करना है। मेरी तारीख़:',
  },
];

export const LOCALE_CODES = LOCALES.map((l) => l.code);

export function localeByCode(code: string): LocaleContent | undefined {
  return LOCALES.find((l) => l.code === code);
}

export { PLAN_IDS as LOCALE_PLAN_IDS };

/**
 * hreflang map, shared by the root layout and every locale page so that
 * each language declares all the others and English stays x-default.
 */
export function localeAlternates(base: string): Record<string, string> {
  return Object.fromEntries(LOCALES.map((l) => [l.hreflang, `${base}/${l.code}`]));
}
