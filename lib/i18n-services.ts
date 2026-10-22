import type { LocaleCode, LocaleService } from './i18n';

/**
 * Translated service pages, keyed by locale.
 *
 * A single landing page per language ranks for the language's head term and
 * nothing else. These are the long-tail pages: one per package, with the
 * keyword in the slug, its own direct answer, and its own FAQs — the queries
 * that actually convert ("photographe taj mahal lever du soleil" rather than
 * "taj mahal").
 *
 * Prices are never written here. They come from lib/plans.ts through planId,
 * so a rate change moves every language at once.
 */
export const LOCALE_SERVICES: Partial<Record<LocaleCode, LocaleService[]>> = {
  fr: [
    {
      planId: 'sunrise',
      slug: 'photographe-taj-mahal-lever-du-soleil',
      title: 'Photographe au Taj Mahal au lever du soleil | Séance dès 120 $',
      description:
        'Séance photo au lever du soleil au Taj Mahal avec un photographe agréé : 120 photos et plus, 3 à 5 reels, livraison en 48 h. Le photographe vous retrouve à votre hôtel.',
      keywords: [
        'photographe taj mahal lever du soleil',
        'séance photo taj mahal matin',
        'photo taj mahal aube',
        'photographe agra lever du soleil',
      ],
      h1: 'Séance photo au lever du soleil au Taj Mahal',
      answer:
        'La séance au lever du soleil dure environ deux heures et commence avant l’ouverture des portes, quand le marbre passe du gris au rose puis à l’ambre. Vous repartez avec plus de 120 photos en haute résolution et 3 à 5 reels, livrés sous 48 heures. Le photographe vous retrouve à la réception de votre hôtel : aucun véhicule n’est inclus dans cette formule.',
      intro: [
        'C’est la formule la plus demandée, et pour une raison simple : pendant la première heure, le site est presque vide et la lumière est celle que l’on voit sur les photographies publiées. Une heure plus tard, le même cadre contient trois cents visiteurs et une lumière blanche et dure.',
        'Nous passons le contrôle de sécurité ensemble, puis nous suivons un itinéraire précis — le bassin, le banc, les arcades latérales, la vue depuis la mosquée — avant que la foule n’atteigne chaque emplacement. Vous n’avez rien à préparer : la pose est dirigée au fur et à mesure.',
      ],
      includes: [
        'Un photographe titulaire du permis officiel, matériel autorisé à l’entrée',
        'Plus de 120 photos en haute résolution, sans filigrane',
        '3 à 5 reels verticaux, prêts à publier',
        'Retouche incluse et livraison sous 48 h par Google Drive ou WeTransfer',
        'Rendez-vous à votre hôtel d’Agra avant l’ouverture',
      ],
      faqs: [
        {
          question: 'Les billets d’entrée sont-ils compris ?',
          answer:
            'Non. Le billet du Taj Mahal se paie séparément et son tarif dépend de votre nationalité ; nous vous indiquons le montant exact avant la réservation et nous vous aidons à le prendre.',
        },
        {
          question: 'À quelle heure commence la séance ?',
          answer:
            'Entre 5 h 15 et 6 h 15 selon la saison. Nous confirmons l’heure précise la veille, en fonction du lever du soleil de ce jour-là.',
        },
      ],
    },
    {
      planId: 'pre-wedding',
      slug: 'seance-photo-couple-taj-mahal',
      title: 'Séance photo de couple et pré-mariage au Taj Mahal | dès 199 $',
      description:
        'Séance de couple ou pré-mariage au Taj Mahal : 200 photos haute résolution, 30 clichés retouchés et une vidéo cinématographique. Photographe agréé, direction de pose incluse.',
      keywords: [
        'séance photo couple taj mahal',
        'pré-mariage taj mahal',
        'photo de fiançailles inde',
        'photographe mariage agra',
      ],
      h1: 'Séance de couple et pré-mariage au Taj Mahal',
      answer:
        'La séance de couple dure deux heures ou plus et donne plus de 200 photos en haute résolution, 30 clichés retouchés de votre choix et une courte vidéo cinématographique. Elle se fait au lever du soleil, avec direction de pose du début à la fin, et commence à 199 $ US selon la durée et les lieux retenus.',
      intro: [
        'Un couple qui n’a jamais posé devant un objectif a besoin d’être guidé, pas photographié de loin. La séance est donc dirigée : où regarder, où poser la main, quand marcher. Les images qui vous plairont le plus seront presque toujours celles prises entre deux poses.',
        'Si vous apportez une tenue de rechange — un sari, une robe longue, une sherwani — nous organisons la séance en deux temps, autour du bassin puis dans les arcades latérales, où la lumière reste douce plus longtemps.',
      ],
      includes: [
        'Plus de 200 photos en haute résolution, livrées intégralement',
        '30 clichés retouchés, choisis par vous',
        'Une vidéo cinématographique courte, montée pour les réseaux',
        'Direction de pose pendant toute la séance',
        'Deuxième tenue possible, itinéraire adapté en conséquence',
      ],
      faqs: [
        {
          question: 'Peut-on faire la séance au coucher du soleil ?',
          answer:
            'Oui, mais la lumière du matin est nettement meilleure et le site beaucoup moins fréquenté. Si le coucher du soleil est votre seule possibilité, nous privilégions Mehtab Bagh, en face du monument.',
        },
        {
          question: 'Combien de temps à l’avance faut-il réserver ?',
          answer:
            'Deux à trois semaines en haute saison, de octobre à mars. Un acompte de 20 % confirme la date.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-small',
      slug: 'visite-guidee-photos-taj-mahal-petit-groupe',
      title: 'Visite guidée + photos au Taj Mahal · 1 à 5 personnes | dès 89 $',
      description:
        'Guide agréé et photographe réunis : Taj Mahal, Agra Fort et Mehtab Bagh pour 1 à 5 personnes, 40 photos naturelles et 5 reels. À l’intérieur du Taj Mahal, le guide ne peut pas accompagner le photographe.',
      keywords: [
        'visite guidée taj mahal photos',
        'guide et photographe agra',
        'tour taj mahal petit groupe',
        'guide agréé taj mahal',
      ],
      h1: 'Visite guidée avec photographe · 1 à 5 personnes',
      answer:
        'Cette formule réunit un guide agréé et un photographe professionnel sur une demi-journée, à partir de 89 $ US pour un à cinq participants, et couvre le Taj Mahal, Agra Fort et Mehtab Bagh ou Itimad-ud-Daulah. À l’intérieur du Taj Mahal, le règlement interdit qu’un guide accompagne un photographe : c’est donc le photographe qui vous accompagne, et le guide vous rejoint sur tous les autres monuments.',
      intro: [
        'La plupart des visiteurs repartent d’Agra avec soit des explications, soit des photographies. Ici vous avez les deux, pour le prix d’un guide et d’un photographe pris séparément, et sans deux réservations à coordonner.',
        'Comptez quarante photos naturelles — pas de poses figées — et cinq reels. Le guide raconte la construction, les inscriptions et les détails que l’on ne remarque pas seul ; le photographe suit le groupe pendant ce temps.',
      ],
      includes: [
        'Un guide agréé par le ministère du Tourisme',
        'Un photographe professionnel avec permis officiel',
        '40 photos numériques naturelles et 5 reels',
        'Taj Mahal, Agra Fort et Mehtab Bagh ou Itimad-ud-Daulah',
        'Acompte de 20 %, solde après la visite',
      ],
      faqs: [
        {
          question: 'Pourquoi le guide ne peut-il pas entrer avec le photographe ?',
          answer:
            'C’est une règle du site : à l’intérieur du Taj Mahal, un guide n’est pas autorisé à accompagner un photographe au travail. Nous le signalons avant la réservation pour que personne ne soit surpris sur place.',
        },
        {
          question: 'Les billets des monuments sont-ils compris ?',
          answer:
            'Non, ils se paient séparément. Nous vous donnons le montant exact pour votre nationalité et le nombre de participants avant de confirmer.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-large',
      slug: 'visite-guidee-photos-taj-mahal-groupe',
      title: 'Visite guidée + photos au Taj Mahal · 6 à 12 personnes | dès 119 $',
      description:
        'Guide agréé et photographe pour les groupes de 6 à 12 personnes : 60 photos naturelles, 7 reels, portraits de groupe et portraits individuels. Taj Mahal, Agra Fort et Mehtab Bagh.',
      keywords: [
        'visite guidée groupe taj mahal',
        'photographe groupe agra',
        'tour famille taj mahal',
        'photo de groupe taj mahal',
      ],
      h1: 'Visite guidée avec photographe · 6 à 12 personnes',
      answer:
        'La même formule guide + photographe, dimensionnée pour six à douze participants, à partir de 119 $ US la demi-journée. Vous recevez 60 photos numériques naturelles et 7 reels, avec des portraits de groupe et des portraits individuels de chaque participant, sur le Taj Mahal, Agra Fort et Mehtab Bagh ou Itimad-ud-Daulah.',
      intro: [
        'Photographier douze personnes devant le Taj Mahal demande autre chose qu’un déclencheur : il faut connaître les deux ou trois emplacements où tout le groupe tient dans le cadre avec le monument entier derrière, et y arriver avant que la foule ne s’y installe.',
        'Nous commençons par les portraits de groupe, pendant que la lumière est encore basse et que les allées sont vides, puis nous passons aux portraits individuels et aux couples pendant que le guide raconte le site.',
      ],
      includes: [
        'Un guide agréé et un photographe professionnel',
        '60 photos numériques naturelles et 7 reels',
        'Portraits de groupe et portraits individuels',
        'Taj Mahal, Agra Fort et Mehtab Bagh ou Itimad-ud-Daulah',
        'Acompte de 20 %, solde après la visite',
      ],
      faqs: [
        {
          question: 'Au-delà de douze personnes ?',
          answer:
            'C’est possible, avec un deuxième photographe ou un deuxième guide selon la composition du groupe. Écrivez-nous le nombre exact et nous établissons le devis.',
        },
        {
          question: 'Le transport est-il inclus ?',
          answer:
            'Non, pas dans cette formule. Nous pouvons ajouter une voiture ou un minibus climatisé privé : indiquez votre hôtel et le nombre de personnes pour le tarif exact.',
        },
      ],
    },
    {
      planId: 'transport-guide',
      slug: 'voiture-privee-guide-agra',
      title: 'Voiture privée et guide agréé à Agra, sans photographe | dès 99 $',
      description:
        'Journée à Agra avec voiture climatisée privée, chauffeur et guide agréé par le ministère du Tourisme, à partir de 99 $. Taj Mahal, Agra Fort, Itimad-ud-Daulah, Mehtab Bagh. Vous photographiez vous-même.',
      keywords: [
        'voiture privée agra',
        'guide francophone agra',
        'excursion agra une journée',
        'chauffeur taj mahal',
      ],
      h1: 'Voiture privée et guide à Agra, sans photographe',
      answer:
        'Une journée complète à Agra avec une voiture climatisée privée, son chauffeur et un guide agréé par le ministère du Tourisme, à partir de 99 $ US. La formule couvre le Taj Mahal, Agra Fort, Itimad-ud-Daulah et Mehtab Bagh, avec prise en charge à votre hôtel, à la gare ou à l’aéroport d’Agra. Aucun photographe : vous faites vos photos vous-même.',
      intro: [
        'Beaucoup de voyageurs photographient très bien eux-mêmes et n’ont besoin que de deux choses : quelqu’un qui conduit et quelqu’un qui explique. C’est exactement cette formule, sans le poste photographie.',
        'Le guide connaît les horaires d’ouverture, les files et les angles que vous voudrez photographier ; le chauffeur attend à chaque site, de sorte qu’une journée à Agra ne se passe pas à chercher un rickshaw sous le soleil.',
      ],
      includes: [
        'Voiture climatisée privée avec chauffeur pour la journée',
        'Guide agréé par le ministère du Tourisme',
        'Taj Mahal, Agra Fort, Itimad-ud-Daulah et Mehtab Bagh',
        'Prise en charge à l’hôtel, à la gare ou à l’aéroport d’Agra',
        'Devis exact confirmé sur WhatsApp avant la réservation',
      ],
      faqs: [
        {
          question: 'Peut-on ajouter un photographe ensuite ?',
          answer:
            'Oui, à tout moment avant la date. Nous passons alors à la formule guide + photographe et nous ajustons le tarif.',
        },
        {
          question: 'Le départ peut-il se faire de Delhi ?',
          answer:
            'Oui, c’est une autre formule : la journée Delhi ↔ Agra tout compris, avec véhicule privé, guide, photographe et billets. Indiquez votre point de départ pour le devis.',
        },
      ],
    },
  ],
  es: [
    {
      planId: 'sunrise',
      slug: 'fotografo-taj-mahal-amanecer',
      title: 'Fotógrafo en el Taj Mahal al amanecer | Sesión desde 120 USD',
      description:
        'Sesión de fotos al amanecer en el Taj Mahal con fotógrafo con licencia: más de 120 fotos, 3–5 reels y entrega en 48 horas. El fotógrafo te recoge en tu hotel.',
      keywords: [
        'fotógrafo taj mahal amanecer',
        'sesión de fotos taj mahal mañana',
        'fotos taj mahal salida del sol',
        'fotógrafo agra amanecer',
      ],
      h1: 'Sesión de fotos al amanecer en el Taj Mahal',
      answer:
        'La sesión al amanecer dura unas dos horas y empieza antes de que abran las puertas, cuando el mármol pasa del gris al rosa y luego al ámbar. Te llevas más de 120 fotos en alta resolución y de 3 a 5 reels, entregados en 48 horas. El fotógrafo te espera en la recepción de tu hotel: este paquete no incluye vehículo.',
      intro: [
        'Es el paquete más pedido por una razón sencilla: durante la primera hora el recinto está casi vacío y la luz es la de las fotos que te hicieron querer venir. Una hora más tarde, el mismo encuadre tiene trescientas personas y una luz blanca y dura.',
        'Pasamos juntos el control de seguridad y seguimos un recorrido concreto —el estanque, el banco, las arcadas laterales, la vista desde la mezquita— llegando a cada punto antes que el grupo. No tienes que preparar nada: la pose se dirige sobre la marcha.',
      ],
      includes: [
        'Fotógrafo con permiso oficial y equipo autorizado en el control',
        'Más de 120 fotos en alta resolución, sin marca de agua',
        '3 a 5 reels verticales, listos para publicar',
        'Edición incluida y entrega en 48 horas por Google Drive o WeTransfer',
        'Encuentro en tu hotel de Agra antes de la apertura',
      ],
      faqs: [
        {
          question: '¿Están incluidas las entradas?',
          answer:
            'No. La entrada al Taj Mahal se paga aparte y su precio depende de tu nacionalidad; te decimos el importe exacto antes de reservar y te ayudamos a sacarla.',
        },
        {
          question: '¿A qué hora empieza la sesión?',
          answer:
            'Entre las 5:15 y las 6:15 según la época del año. Confirmamos la hora exacta el día anterior, según el amanecer de esa fecha.',
        },
      ],
    },
    {
      planId: 'pre-wedding',
      slug: 'sesion-fotos-pareja-taj-mahal',
      title: 'Sesión de pareja y preboda en el Taj Mahal | desde 199 USD',
      description:
        'Sesión de pareja o preboda en el Taj Mahal: 200 fotos en alta resolución, 30 editadas y un vídeo cinematográfico. Fotógrafo con licencia y dirección de poses incluida.',
      keywords: [
        'sesión de fotos pareja taj mahal',
        'preboda taj mahal',
        'fotos de compromiso india',
        'fotógrafo de bodas agra',
      ],
      h1: 'Sesión de pareja y preboda en el Taj Mahal',
      answer:
        'La sesión de pareja dura dos horas o más y entrega más de 200 fotos en alta resolución, 30 editadas a tu elección y un vídeo cinematográfico corto. Se hace al amanecer, con dirección de poses de principio a fin, y empieza en 199 USD según la duración y los lugares elegidos.',
      intro: [
        'Una pareja que nunca ha posado necesita que alguien la guíe, no que la fotografíen de lejos. Por eso la sesión es dirigida: dónde mirar, dónde poner la mano, cuándo caminar. Las fotos que más os gustarán casi siempre son las de entre pose y pose.',
        'Si traéis un cambio de ropa —un sari, un vestido largo, una sherwani— organizamos la sesión en dos partes: primero el estanque y después las arcadas laterales, donde la luz se mantiene suave más tiempo.',
      ],
      includes: [
        'Más de 200 fotos en alta resolución, todas entregadas',
        '30 fotos editadas, elegidas por vosotros',
        'Un vídeo cinematográfico corto, montado para redes',
        'Dirección de poses durante toda la sesión',
        'Posibilidad de un segundo cambio de ropa, con recorrido adaptado',
      ],
      faqs: [
        {
          question: '¿Se puede hacer al atardecer?',
          answer:
            'Sí, pero la luz de la mañana es claramente mejor y hay mucha menos gente. Si solo podéis por la tarde, preferimos Mehtab Bagh, enfrente del monumento.',
        },
        {
          question: '¿Con cuánta antelación hay que reservar?',
          answer:
            'Dos o tres semanas en temporada alta, de octubre a marzo. Un 20 % de señal fija la fecha.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-small',
      slug: 'tour-guiado-fotos-taj-mahal-grupo-pequeno',
      title: 'Tour guiado + fotos en el Taj Mahal · 1 a 5 personas | desde 89 USD',
      description:
        'Guía autorizado y fotógrafo juntos: Taj Mahal, Agra Fort y Mehtab Bagh para 1 a 5 personas, 40 fotos naturales y 5 reels. Dentro del Taj Mahal el guía no puede acompañar al fotógrafo.',
      keywords: [
        'tour guiado taj mahal fotos',
        'guía y fotógrafo agra',
        'tour taj mahal grupo pequeño',
        'guía autorizado taj mahal',
      ],
      h1: 'Tour guiado con fotógrafo · 1 a 5 personas',
      answer:
        'Este paquete reúne a un guía autorizado y a un fotógrafo profesional durante media jornada, desde 89 USD para una a cinco personas, y cubre el Taj Mahal, Agra Fort y Mehtab Bagh o Itimad-ud-Daulah. Dentro del Taj Mahal el reglamento no permite que un guía acompañe a un fotógrafo, así que allí te acompaña el fotógrafo y el guía se reúne contigo en los demás monumentos.',
      intro: [
        'La mayoría de los visitantes sale de Agra con explicaciones o con fotos, pero no con las dos cosas. Aquí tienes ambas por lo que costaría contratarlas por separado, y sin coordinar dos reservas.',
        'Son cuarenta fotos naturales —nada de posados rígidos— y cinco reels. El guía cuenta la construcción, las inscripciones y los detalles que no se ven solo; el fotógrafo sigue al grupo mientras tanto.',
      ],
      includes: [
        'Guía autorizado por el Ministerio de Turismo',
        'Fotógrafo profesional con permiso oficial',
        '40 fotos digitales naturales y 5 reels',
        'Taj Mahal, Agra Fort y Mehtab Bagh o Itimad-ud-Daulah',
        'Señal del 20 %, el resto al terminar el tour',
      ],
      faqs: [
        {
          question: '¿Por qué el guía no puede entrar con el fotógrafo?',
          answer:
            'Es una norma del monumento: dentro del Taj Mahal un guía no puede acompañar a un fotógrafo trabajando. Lo avisamos antes de reservar para que nadie se sorprenda allí.',
        },
        {
          question: '¿Están incluidas las entradas?',
          answer:
            'No, se pagan aparte. Te damos el importe exacto según tu nacionalidad y el número de personas antes de confirmar.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-large',
      slug: 'tour-guiado-fotos-taj-mahal-grupo-grande',
      title: 'Tour guiado + fotos en el Taj Mahal · 6 a 12 personas | desde 119 USD',
      description:
        'Guía autorizado y fotógrafo para grupos de 6 a 12 personas: 60 fotos naturales, 7 reels, retratos de grupo e individuales. Taj Mahal, Agra Fort y Mehtab Bagh.',
      keywords: [
        'tour guiado grupo taj mahal',
        'fotógrafo para grupos agra',
        'tour familiar taj mahal',
        'foto de grupo taj mahal',
      ],
      h1: 'Tour guiado con fotógrafo · 6 a 12 personas',
      answer:
        'El mismo paquete de guía y fotógrafo, dimensionado para seis a doce personas, desde 119 USD por media jornada. Incluye 60 fotos digitales naturales y 7 reels, con retratos de grupo y retratos individuales de cada persona, en el Taj Mahal, Agra Fort y Mehtab Bagh o Itimad-ud-Daulah.',
      intro: [
        'Fotografiar a doce personas delante del Taj Mahal no es cuestión de disparar: hay dos o tres sitios donde el grupo entero cabe en el encuadre con el monumento completo detrás, y hay que llegar antes de que se llenen.',
        'Empezamos por los retratos de grupo, mientras la luz sigue baja y los caminos están vacíos, y después hacemos los individuales y de pareja mientras el guía explica el sitio.',
      ],
      includes: [
        'Guía autorizado y fotógrafo profesional',
        '60 fotos digitales naturales y 7 reels',
        'Retratos de grupo y retratos individuales',
        'Taj Mahal, Agra Fort y Mehtab Bagh o Itimad-ud-Daulah',
        'Señal del 20 %, el resto al terminar el tour',
      ],
      faqs: [
        {
          question: '¿Y si somos más de doce?',
          answer:
            'Se puede, con un segundo fotógrafo o un segundo guía según cómo sea el grupo. Dinos el número exacto y preparamos el presupuesto.',
        },
        {
          question: '¿Incluye transporte?',
          answer:
            'En este paquete no. Podemos añadir coche o minibús privado con aire acondicionado: indícanos tu hotel y el número de personas para el precio exacto.',
        },
      ],
    },
    {
      planId: 'transport-guide',
      slug: 'coche-privado-guia-agra',
      title: 'Coche privado y guía autorizado en Agra, sin fotógrafo | desde 99 USD',
      description:
        'Día en Agra con coche privado con aire acondicionado, chófer y guía autorizado por el Ministerio de Turismo, desde 99 USD. Taj Mahal, Agra Fort, Itimad-ud-Daulah y Mehtab Bagh. Las fotos las haces tú.',
      keywords: [
        'coche privado agra',
        'guía en español agra',
        'excursión a agra un día',
        'chófer taj mahal',
      ],
      h1: 'Coche privado y guía en Agra, sin fotógrafo',
      answer:
        'Un día completo en Agra con coche privado con aire acondicionado y chófer más un guía autorizado por el Ministerio de Turismo, desde 99 USD. Cubre el Taj Mahal, Agra Fort, Itimad-ud-Daulah y Mehtab Bagh, con recogida en tu hotel, en la estación o en el aeropuerto de Agra. Sin fotógrafo: las fotos las haces tú.',
      intro: [
        'Mucha gente fotografía muy bien por su cuenta y solo necesita dos cosas: alguien que conduzca y alguien que explique. Este paquete es exactamente eso, sin la parte de fotografía.',
        'El guía conoce los horarios, las colas y los ángulos que vas a querer fotografiar; el chófer espera en cada monumento, así que un día en Agra no se te va buscando un rickshaw al sol.',
      ],
      includes: [
        'Coche privado con aire acondicionado y chófer todo el día',
        'Guía autorizado por el Ministerio de Turismo',
        'Taj Mahal, Agra Fort, Itimad-ud-Daulah y Mehtab Bagh',
        'Recogida en hotel, estación de tren o aeropuerto de Agra',
        'Presupuesto exacto confirmado por WhatsApp antes de reservar',
      ],
      faqs: [
        {
          question: '¿Se puede añadir fotógrafo después?',
          answer:
            'Sí, en cualquier momento antes de la fecha. Pasamos al paquete de guía + fotógrafo y ajustamos el precio.',
        },
        {
          question: '¿Se puede salir desde Delhi?',
          answer:
            'Sí, pero es otro paquete: el día Delhi ↔ Agra todo incluido, con vehículo privado, guía, fotógrafo y entradas. Dinos desde dónde sales para el presupuesto.',
        },
      ],
    },
  ],
  de: [
    {
      planId: 'sunrise',
      slug: 'taj-mahal-fotograf-sonnenaufgang',
      title: 'Taj Mahal Fotograf zum Sonnenaufgang | Shooting ab 120 USD',
      description:
        'Fotoshooting zum Sonnenaufgang am Taj Mahal mit lizenziertem Fotografen: über 120 Fotos, 3–5 Reels, Lieferung in 48 Stunden. Der Fotograf holt Sie am Hotel ab.',
      keywords: [
        'taj mahal fotograf sonnenaufgang',
        'fotoshooting taj mahal morgen',
        'taj mahal sonnenaufgang bilder',
        'fotograf agra sonnenaufgang',
      ],
      h1: 'Fotoshooting zum Sonnenaufgang am Taj Mahal',
      answer:
        'Das Sonnenaufgang-Shooting dauert etwa zwei Stunden und beginnt vor dem Öffnen der Tore, wenn der Marmor von Grau über Rosa zu Amber wechselt. Sie erhalten über 120 Fotos in voller Auflösung und 3 bis 5 Reels, geliefert innerhalb von 48 Stunden. Der Fotograf erwartet Sie an der Hotelrezeption; ein Fahrzeug ist in diesem Paket nicht enthalten.',
      intro: [
        'Das meistgebuchte Paket, aus einem einfachen Grund: In der ersten Stunde ist die Anlage fast leer und das Licht ist genau das, wegen dem Sie kommen. Eine Stunde später stehen im selben Bildausschnitt dreihundert Menschen, in hartem weißem Licht.',
        'Wir gehen gemeinsam durch die Sicherheitskontrolle und folgen einer festen Reihenfolge — Wasserbecken, Bank, Seitenarkaden, Blick von der Moschee — und sind an jedem Punkt vor der Menge. Vorbereiten müssen Sie nichts: Die Posen werden unterwegs angeleitet.',
      ],
      includes: [
        'Fotograf mit offizieller Genehmigung, Ausrüstung kommt durch die Kontrolle',
        'Über 120 Fotos in voller Auflösung, ohne Wasserzeichen',
        '3 bis 5 vertikale Reels, direkt verwendbar',
        'Bearbeitung inklusive, Lieferung in 48 Stunden per Google Drive oder WeTransfer',
        'Treffpunkt an Ihrem Hotel in Agra, vor der Öffnung',
      ],
      faqs: [
        {
          question: 'Sind die Eintrittskarten enthalten?',
          answer:
            'Nein. Der Eintritt zum Taj Mahal wird separat bezahlt und richtet sich nach Ihrer Staatsangehörigkeit; wir nennen den genauen Betrag vor der Buchung und helfen beim Kauf.',
        },
        {
          question: 'Wann beginnt das Shooting?',
          answer:
            'Je nach Jahreszeit zwischen 5:15 und 6:15 Uhr. Die genaue Zeit bestätigen wir am Vortag, passend zum Sonnenaufgang dieses Tages.',
        },
      ],
    },
    {
      planId: 'pre-wedding',
      slug: 'paar-fotoshooting-taj-mahal',
      title: 'Paar- und Pre-Wedding-Shooting am Taj Mahal | ab 199 USD',
      description:
        'Paar- oder Pre-Wedding-Shooting am Taj Mahal: 200 Fotos in voller Auflösung, 30 bearbeitet und ein cineastisches Video. Lizenzierter Fotograf, Posenführung inklusive.',
      keywords: [
        'paar fotoshooting taj mahal',
        'pre wedding shooting indien',
        'verlobungsfotos taj mahal',
        'hochzeitsfotograf agra',
      ],
      h1: 'Paar- und Pre-Wedding-Shooting am Taj Mahal',
      answer:
        'Das Paar-Shooting dauert zwei Stunden oder länger und liefert über 200 Fotos in voller Auflösung, 30 bearbeitete Aufnahmen nach Ihrer Wahl und ein kurzes cineastisches Video. Es findet zum Sonnenaufgang statt, mit durchgehender Posenführung, und beginnt bei 199 USD je nach Dauer und gewählten Orten.',
      intro: [
        'Ein Paar, das noch nie vor einer Kamera gestanden hat, braucht Anleitung und nicht jemanden, der aus der Ferne fotografiert. Deshalb wird geführt: wohin schauen, wohin die Hand, wann losgehen. Die Bilder, die Ihnen am Ende am liebsten sind, entstehen fast immer zwischen zwei Posen.',
        'Wenn Sie ein zweites Outfit mitbringen — einen Sari, ein langes Kleid, eine Sherwani — teilen wir das Shooting: erst das Wasserbecken, dann die Seitenarkaden, wo das Licht länger weich bleibt.',
      ],
      includes: [
        'Über 200 Fotos in voller Auflösung, vollständig übergeben',
        '30 bearbeitete Aufnahmen, von Ihnen ausgewählt',
        'Ein kurzes cineastisches Video, für Social Media geschnitten',
        'Posenführung während des gesamten Shootings',
        'Zweites Outfit möglich, Ablauf wird darauf abgestimmt',
      ],
      faqs: [
        {
          question: 'Geht das Shooting auch zum Sonnenuntergang?',
          answer:
            'Ja, aber das Morgenlicht ist deutlich besser und es sind viel weniger Menschen da. Wenn nur der Abend geht, bevorzugen wir Mehtab Bagh gegenüber dem Monument.',
        },
        {
          question: 'Wie früh sollte man buchen?',
          answer:
            'In der Hauptsaison von Oktober bis März zwei bis drei Wochen vorher. 20 % Anzahlung sichert das Datum.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-small',
      slug: 'gefuehrte-fototour-taj-mahal-kleine-gruppe',
      title: 'Geführte Tour + Fotos am Taj Mahal · 1 bis 5 Personen | ab 89 USD',
      description:
        'Lizenzierter Guide und Fotograf zusammen: Taj Mahal, Agra Fort und Mehtab Bagh für 1 bis 5 Personen, 40 natürliche Fotos und 5 Reels. Im Taj Mahal darf der Guide den Fotografen nicht begleiten.',
      keywords: [
        'geführte tour taj mahal fotos',
        'guide und fotograf agra',
        'taj mahal tour kleine gruppe',
        'lizenzierter guide taj mahal',
      ],
      h1: 'Geführte Tour mit Fotograf · 1 bis 5 Personen',
      answer:
        'Dieses Paket bringt einen lizenzierten Guide und einen professionellen Fotografen für einen halben Tag zusammen, ab 89 USD für eine bis fünf Personen, und umfasst Taj Mahal, Agra Fort sowie Mehtab Bagh oder Itimad-ud-Daulah. Im Taj Mahal selbst darf ein Guide einen Fotografen nicht begleiten — dort sind Sie mit dem Fotografen unterwegs, der Guide kommt an allen anderen Monumenten dazu.',
      intro: [
        'Die meisten Besucher verlassen Agra entweder mit Erklärungen oder mit Fotos. Hier bekommen Sie beides, für etwa den Preis beider Leistungen einzeln, und ohne zwei Buchungen zu koordinieren.',
        'Es werden vierzig natürliche Aufnahmen — keine steifen Posen — und fünf Reels. Der Guide erzählt von Bau, Inschriften und Details, die man allein übersieht; der Fotograf begleitet die Gruppe dabei.',
      ],
      includes: [
        'Guide mit Lizenz des Tourismusministeriums',
        'Professioneller Fotograf mit offizieller Genehmigung',
        '40 natürliche digitale Fotos und 5 Reels',
        'Taj Mahal, Agra Fort und Mehtab Bagh oder Itimad-ud-Daulah',
        '20 % Anzahlung, Restbetrag nach der Tour',
      ],
      faqs: [
        {
          question: 'Warum darf der Guide nicht mit dem Fotografen hinein?',
          answer:
            'Das ist eine Vorschrift des Monuments: Im Taj Mahal darf ein Guide einen arbeitenden Fotografen nicht begleiten. Wir sagen es vor der Buchung, damit es vor Ort keine Überraschung gibt.',
        },
        {
          question: 'Sind die Eintrittskarten enthalten?',
          answer:
            'Nein, sie werden separat bezahlt. Wir nennen den genauen Betrag für Ihre Staatsangehörigkeit und Personenzahl vor der Bestätigung.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-large',
      slug: 'gefuehrte-fototour-taj-mahal-gruppe',
      title: 'Geführte Tour + Fotos am Taj Mahal · 6 bis 12 Personen | ab 119 USD',
      description:
        'Lizenzierter Guide und Fotograf für Gruppen von 6 bis 12 Personen: 60 natürliche Fotos, 7 Reels, Gruppen- und Einzelporträts. Taj Mahal, Agra Fort und Mehtab Bagh.',
      keywords: [
        'geführte gruppentour taj mahal',
        'fotograf für gruppen agra',
        'familientour taj mahal',
        'gruppenfoto taj mahal',
      ],
      h1: 'Geführte Tour mit Fotograf · 6 bis 12 Personen',
      answer:
        'Dasselbe Paket aus Guide und Fotograf, ausgelegt für sechs bis zwölf Personen, ab 119 USD für einen halben Tag. Enthalten sind 60 natürliche digitale Fotos und 7 Reels, mit Gruppenporträts und Einzelporträts jeder Person, am Taj Mahal, Agra Fort und Mehtab Bagh oder Itimad-ud-Daulah.',
      intro: [
        'Zwölf Menschen vor dem Taj Mahal zu fotografieren ist keine Frage des Auslösers: Es gibt zwei oder drei Stellen, an denen die ganze Gruppe mit dem vollständigen Monument dahinter ins Bild passt — und dort muss man vor der Menge sein.',
        'Wir beginnen mit den Gruppenporträts, solange das Licht tief steht und die Wege leer sind, und machen danach Einzel- und Paarporträts, während der Guide erzählt.',
      ],
      includes: [
        'Lizenzierter Guide und professioneller Fotograf',
        '60 natürliche digitale Fotos und 7 Reels',
        'Gruppenporträts und Einzelporträts',
        'Taj Mahal, Agra Fort und Mehtab Bagh oder Itimad-ud-Daulah',
        '20 % Anzahlung, Restbetrag nach der Tour',
      ],
      faqs: [
        {
          question: 'Und wenn wir mehr als zwölf sind?',
          answer:
            'Das geht, mit einem zweiten Fotografen oder einem zweiten Guide, je nach Zusammensetzung. Nennen Sie die genaue Zahl, dann rechnen wir es aus.',
        },
        {
          question: 'Ist Transport enthalten?',
          answer:
            'In diesem Paket nicht. Wir können einen privaten Wagen oder Kleinbus mit Klimaanlage ergänzen — nennen Sie Hotel und Personenzahl für den genauen Preis.',
        },
      ],
    },
    {
      planId: 'transport-guide',
      slug: 'privatwagen-guide-agra',
      title: 'Privatwagen und lizenzierter Guide in Agra, ohne Fotograf | ab 99 USD',
      description:
        'Tag in Agra mit privatem Klimawagen, Fahrer und einem vom Tourismusministerium lizenzierten Guide, ab 99 USD. Taj Mahal, Agra Fort, Itimad-ud-Daulah und Mehtab Bagh. Fotografieren Sie selbst.',
      keywords: [
        'privatwagen agra',
        'deutschsprachiger guide agra',
        'tagesausflug agra',
        'fahrer taj mahal',
      ],
      h1: 'Privatwagen und Guide in Agra, ohne Fotograf',
      answer:
        'Ein ganzer Tag in Agra mit privatem Klimawagen samt Fahrer und einem vom Tourismusministerium lizenzierten Guide, ab 99 USD. Enthalten sind Taj Mahal, Agra Fort, Itimad-ud-Daulah und Mehtab Bagh, mit Abholung am Hotel, am Bahnhof oder am Flughafen Agra. Kein Fotograf — Sie fotografieren selbst.',
      intro: [
        'Viele Reisende fotografieren selbst sehr gut und brauchen nur zwei Dinge: jemanden, der fährt, und jemanden, der erklärt. Genau das ist dieses Paket, ohne den Posten Fotografie.',
        'Der Guide kennt Öffnungszeiten, Warteschlangen und die Blickwinkel, die Sie fotografieren wollen; der Fahrer wartet an jedem Monument, damit ein Tag in Agra nicht mit der Suche nach einer Rikscha in der Sonne vergeht.',
      ],
      includes: [
        'Privater Klimawagen mit Fahrer für den ganzen Tag',
        'Vom Tourismusministerium lizenzierter Guide',
        'Taj Mahal, Agra Fort, Itimad-ud-Daulah und Mehtab Bagh',
        'Abholung am Hotel, Bahnhof oder Flughafen Agra',
        'Genaues Angebot vor der Buchung per WhatsApp bestätigt',
      ],
      faqs: [
        {
          question: 'Kann man später einen Fotografen dazunehmen?',
          answer:
            'Ja, jederzeit vor dem Termin. Wir wechseln dann auf das Paket Guide + Fotograf und passen den Preis an.',
        },
        {
          question: 'Geht die Tour auch ab Delhi?',
          answer:
            'Ja, das ist ein eigenes Paket: der Tag Delhi ↔ Agra mit allem inklusive — privates Fahrzeug, Guide, Fotograf und Tickets. Nennen Sie Ihren Startpunkt für das Angebot.',
        },
      ],
    },
  ],
  it: [
    {
      planId: 'sunrise',
      slug: 'fotografo-taj-mahal-alba',
      title: 'Fotografo al Taj Mahal all’alba | Servizio da 120 USD',
      description:
        'Servizio fotografico all’alba al Taj Mahal con fotografo autorizzato: oltre 120 foto, 3–5 reel, consegna in 48 ore. Il fotografo vi aspetta in hotel.',
      keywords: [
        'fotografo taj mahal alba',
        'servizio fotografico taj mahal mattina',
        'foto taj mahal sorgere del sole',
        'fotografo agra alba',
      ],
      h1: 'Servizio fotografico all’alba al Taj Mahal',
      answer:
        'Il servizio all’alba dura circa due ore e inizia prima dell’apertura dei cancelli, quando il marmo passa dal grigio al rosa e poi all’ambra. Ricevete oltre 120 foto in alta risoluzione e da 3 a 5 reel, consegnati entro 48 ore. Il fotografo vi aspetta alla reception dell’hotel: questo pacchetto non comprende l’auto.',
      intro: [
        'È il pacchetto più richiesto per un motivo semplice: nella prima ora il complesso è quasi vuoto e la luce è quella delle fotografie che vi hanno fatto venire. Un’ora dopo, nella stessa inquadratura ci sono trecento persone e una luce bianca e dura.',
        'Passiamo insieme i controlli e seguiamo un percorso preciso — la vasca, la panchina, le arcate laterali, la vista dalla moschea — arrivando a ogni punto prima della folla. Non dovete preparare nulla: le pose si guidano strada facendo.',
      ],
      includes: [
        'Fotografo con permesso ufficiale, attrezzatura ammessa ai controlli',
        'Oltre 120 foto in alta risoluzione, senza filigrana',
        'Da 3 a 5 reel verticali, pronti da pubblicare',
        'Post-produzione inclusa e consegna in 48 ore via Google Drive o WeTransfer',
        'Appuntamento nel vostro hotel di Agra, prima dell’apertura',
      ],
      faqs: [
        {
          question: 'I biglietti sono compresi?',
          answer:
            'No. Il biglietto del Taj Mahal si paga a parte e il prezzo dipende dalla nazionalità; vi diciamo l’importo esatto prima della prenotazione e vi aiutiamo ad acquistarlo.',
        },
        {
          question: 'A che ora inizia?',
          answer:
            'Tra le 5:15 e le 6:15 secondo la stagione. Confermiamo l’ora esatta il giorno prima, in base all’alba di quella data.',
        },
      ],
    },
    {
      planId: 'pre-wedding',
      slug: 'servizio-fotografico-coppia-taj-mahal',
      title: 'Servizio di coppia e pre-matrimonio al Taj Mahal | da 199 USD',
      description:
        'Servizio di coppia o pre-matrimonio al Taj Mahal: 200 foto in alta risoluzione, 30 ritoccate e un video cinematografico. Fotografo autorizzato, guida alle pose inclusa.',
      keywords: [
        'servizio fotografico coppia taj mahal',
        'pre matrimonio taj mahal',
        'foto fidanzamento india',
        'fotografo matrimonio agra',
      ],
      h1: 'Servizio di coppia e pre-matrimonio al Taj Mahal',
      answer:
        'Il servizio di coppia dura due ore o più e consegna oltre 200 foto in alta risoluzione, 30 scatti ritoccati a vostra scelta e un breve video cinematografico. Si svolge all’alba, con guida alle pose dall’inizio alla fine, e parte da 199 USD secondo durata e luoghi scelti.',
      intro: [
        'Una coppia che non ha mai posato davanti a un obiettivo va guidata, non fotografata da lontano. Per questo il servizio è diretto: dove guardare, dove mettere la mano, quando camminare. Le immagini che vi piaceranno di più saranno quasi sempre quelle tra una posa e l’altra.',
        'Se portate un cambio d’abito — un sari, un vestito lungo, una sherwani — dividiamo il servizio in due parti: prima la vasca, poi le arcate laterali, dove la luce resta morbida più a lungo.',
      ],
      includes: [
        'Oltre 200 foto in alta risoluzione, consegnate tutte',
        '30 scatti ritoccati, scelti da voi',
        'Un breve video cinematografico, montato per i social',
        'Guida alle pose per tutta la durata',
        'Secondo cambio d’abito possibile, con percorso adattato',
      ],
      faqs: [
        {
          question: 'Si può fare al tramonto?',
          answer:
            'Sì, ma la luce del mattino è decisamente migliore e il sito molto meno affollato. Se potete solo di sera, preferiamo Mehtab Bagh, di fronte al monumento.',
        },
        {
          question: 'Quanto prima conviene prenotare?',
          answer:
            'Due o tre settimane in alta stagione, da ottobre a marzo. Un acconto del 20% blocca la data.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-small',
      slug: 'tour-guidato-foto-taj-mahal-piccolo-gruppo',
      title: 'Tour guidato + foto al Taj Mahal · 1 a 5 persone | da 89 USD',
      description:
        'Guida autorizzata e fotografo insieme: Taj Mahal, Agra Fort e Mehtab Bagh per 1 a 5 persone, 40 foto naturali e 5 reel. Dentro il Taj Mahal la guida non può accompagnare il fotografo.',
      keywords: [
        'tour guidato taj mahal foto',
        'guida e fotografo agra',
        'tour taj mahal piccolo gruppo',
        'guida autorizzata taj mahal',
      ],
      h1: 'Tour guidato con fotografo · 1 a 5 persone',
      answer:
        'Questo pacchetto unisce una guida autorizzata e un fotografo professionista per mezza giornata, da 89 USD per una a cinque persone, e copre Taj Mahal, Agra Fort e Mehtab Bagh o Itimad-ud-Daulah. Dentro il Taj Mahal il regolamento non consente a una guida di accompagnare un fotografo: là siete con il fotografo, mentre la guida vi raggiunge in tutti gli altri monumenti.',
      intro: [
        'La maggior parte dei visitatori lascia Agra con le spiegazioni oppure con le fotografie. Qui avete entrambe, a quanto costerebbero separatamente e senza coordinare due prenotazioni.',
        'Sono quaranta foto naturali — niente pose rigide — e cinque reel. La guida racconta la costruzione, le iscrizioni e i dettagli che da soli non si notano; nel frattempo il fotografo segue il gruppo.',
      ],
      includes: [
        'Guida autorizzata dal Ministero del Turismo',
        'Fotografo professionista con permesso ufficiale',
        '40 foto digitali naturali e 5 reel',
        'Taj Mahal, Agra Fort e Mehtab Bagh o Itimad-ud-Daulah',
        'Acconto del 20%, saldo dopo il tour',
      ],
      faqs: [
        {
          question: 'Perché la guida non può entrare con il fotografo?',
          answer:
            'È una regola del monumento: dentro il Taj Mahal una guida non può accompagnare un fotografo al lavoro. Lo diciamo prima della prenotazione, così non ci sono sorprese sul posto.',
        },
        {
          question: 'I biglietti sono compresi?',
          answer:
            'No, si pagano a parte. Vi diamo l’importo esatto per la vostra nazionalità e il numero di persone prima di confermare.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-large',
      slug: 'tour-guidato-foto-taj-mahal-gruppo',
      title: 'Tour guidato + foto al Taj Mahal · 6 a 12 persone | da 119 USD',
      description:
        'Guida autorizzata e fotografo per gruppi da 6 a 12 persone: 60 foto naturali, 7 reel, ritratti di gruppo e individuali. Taj Mahal, Agra Fort e Mehtab Bagh.',
      keywords: [
        'tour guidato gruppo taj mahal',
        'fotografo per gruppi agra',
        'tour famiglia taj mahal',
        'foto di gruppo taj mahal',
      ],
      h1: 'Tour guidato con fotografo · 6 a 12 persone',
      answer:
        'Lo stesso pacchetto guida più fotografo, dimensionato per sei a dodici persone, da 119 USD per mezza giornata. Comprende 60 foto digitali naturali e 7 reel, con ritratti di gruppo e ritratti individuali di ciascuno, al Taj Mahal, Agra Fort e Mehtab Bagh o Itimad-ud-Daulah.',
      intro: [
        'Fotografare dodici persone davanti al Taj Mahal non è questione di scatto: ci sono due o tre punti in cui tutto il gruppo entra nell’inquadratura con il monumento intero dietro, e bisogna arrivarci prima della folla.',
        'Iniziamo dai ritratti di gruppo, mentre la luce è ancora bassa e i vialetti sono vuoti, poi passiamo ai ritratti individuali e di coppia mentre la guida racconta.',
      ],
      includes: [
        'Guida autorizzata e fotografo professionista',
        '60 foto digitali naturali e 7 reel',
        'Ritratti di gruppo e ritratti individuali',
        'Taj Mahal, Agra Fort e Mehtab Bagh o Itimad-ud-Daulah',
        'Acconto del 20%, saldo dopo il tour',
      ],
      faqs: [
        {
          question: 'E se siamo più di dodici?',
          answer:
            'Si può fare, con un secondo fotografo o una seconda guida secondo la composizione del gruppo. Scriveteci il numero esatto e prepariamo il preventivo.',
        },
        {
          question: 'Il trasporto è incluso?',
          answer:
            'In questo pacchetto no. Possiamo aggiungere un’auto o un minibus privato climatizzato: indicate hotel e numero di persone per il prezzo esatto.',
        },
      ],
    },
    {
      planId: 'transport-guide',
      slug: 'auto-privata-guida-agra',
      title: 'Auto privata e guida autorizzata ad Agra, senza fotografo | da 99 USD',
      description:
        'Giornata ad Agra con auto privata climatizzata, autista e guida autorizzata dal Ministero del Turismo, da 99 USD. Taj Mahal, Agra Fort, Itimad-ud-Daulah e Mehtab Bagh. Le foto le fate voi.',
      keywords: [
        'auto privata agra',
        'guida italiana agra',
        'escursione agra un giorno',
        'autista taj mahal',
      ],
      h1: 'Auto privata e guida ad Agra, senza fotografo',
      answer:
        'Una giornata intera ad Agra con auto privata climatizzata e autista più una guida autorizzata dal Ministero del Turismo, da 99 USD. Copre Taj Mahal, Agra Fort, Itimad-ud-Daulah e Mehtab Bagh, con prelievo in hotel, alla stazione o all’aeroporto di Agra. Nessun fotografo: le fotografie le fate voi.',
      intro: [
        'Molti viaggiatori fotografano benissimo da sé e hanno bisogno di due cose soltanto: qualcuno che guidi e qualcuno che spieghi. Questo pacchetto è esattamente questo, senza la voce fotografia.',
        'La guida conosce gli orari, le file e le inquadrature che vorrete; l’autista aspetta a ogni monumento, così una giornata ad Agra non si consuma cercando un rickshaw sotto il sole.',
      ],
      includes: [
        'Auto privata climatizzata con autista per l’intera giornata',
        'Guida autorizzata dal Ministero del Turismo',
        'Taj Mahal, Agra Fort, Itimad-ud-Daulah e Mehtab Bagh',
        'Prelievo in hotel, stazione ferroviaria o aeroporto di Agra',
        'Preventivo esatto confermato su WhatsApp prima di prenotare',
      ],
      faqs: [
        {
          question: 'Si può aggiungere un fotografo in seguito?',
          answer:
            'Sì, in qualsiasi momento prima della data. Passiamo al pacchetto guida + fotografo e adeguiamo il prezzo.',
        },
        {
          question: 'Si può partire da Delhi?',
          answer:
            'Sì, è un altro pacchetto: la giornata Delhi ↔ Agra tutto compreso, con veicolo privato, guida, fotografo e biglietti. Indicate il punto di partenza per il preventivo.',
        },
      ],
    },
  ],
  pt: [
    {
      planId: 'sunrise',
      slug: 'fotografo-taj-mahal-amanhecer',
      title: 'Fotógrafo no Taj Mahal ao amanhecer | Ensaio a partir de 120 USD',
      description:
        'Ensaio fotográfico ao amanhecer no Taj Mahal com fotógrafo licenciado: mais de 120 fotos, 3–5 reels e entrega em 48 horas. O fotógrafo encontra você no hotel.',
      keywords: [
        'fotógrafo taj mahal amanhecer',
        'ensaio fotográfico taj mahal manhã',
        'fotos taj mahal nascer do sol',
        'fotógrafo agra amanhecer',
      ],
      h1: 'Ensaio fotográfico ao amanhecer no Taj Mahal',
      answer:
        'O ensaio ao amanhecer dura cerca de duas horas e começa antes de os portões abrirem, quando o mármore passa de cinza a rosa e depois a âmbar. Você recebe mais de 120 fotos em alta resolução e de 3 a 5 reels, entregues em 48 horas. O fotógrafo espera na recepção do seu hotel: este pacote não inclui carro.',
      intro: [
        'É o pacote mais procurado por um motivo simples: na primeira hora o complexo está quase vazio e a luz é a das fotos que fizeram você querer vir. Uma hora depois, o mesmo enquadramento tem trezentas pessoas e uma luz branca e dura.',
        'Passamos juntos pela segurança e seguimos um roteiro definido — o espelho d’água, o banco, as arcadas laterais, a vista da mesquita — chegando a cada ponto antes da multidão. Você não precisa preparar nada: a pose é conduzida no caminho.',
      ],
      includes: [
        'Fotógrafo com licença oficial e equipamento liberado na vistoria',
        'Mais de 120 fotos em alta resolução, sem marca d’água',
        '3 a 5 reels verticais, prontos para publicar',
        'Tratamento incluído e entrega em 48 horas por Google Drive ou WeTransfer',
        'Encontro no seu hotel em Agra, antes da abertura',
      ],
      faqs: [
        {
          question: 'Os ingressos estão incluídos?',
          answer:
            'Não. O ingresso do Taj Mahal é pago separadamente e o valor depende da sua nacionalidade; informamos a quantia exata antes da reserva e ajudamos na compra.',
        },
        {
          question: 'A que horas começa?',
          answer:
            'Entre 5h15 e 6h15, conforme a época do ano. Confirmamos o horário exato no dia anterior, de acordo com o amanhecer daquele dia.',
        },
      ],
    },
    {
      planId: 'pre-wedding',
      slug: 'ensaio-casal-taj-mahal',
      title: 'Ensaio de casal e pré-wedding no Taj Mahal | a partir de 199 USD',
      description:
        'Ensaio de casal ou pré-wedding no Taj Mahal: 200 fotos em alta resolução, 30 tratadas e um vídeo cinematográfico. Fotógrafo licenciado, direção de poses incluída.',
      keywords: [
        'ensaio casal taj mahal',
        'pré wedding taj mahal',
        'ensaio noivado índia',
        'fotógrafo casamento agra',
      ],
      h1: 'Ensaio de casal e pré-wedding no Taj Mahal',
      answer:
        'O ensaio de casal dura duas horas ou mais e entrega mais de 200 fotos em alta resolução, 30 tratadas à sua escolha e um vídeo cinematográfico curto. É feito ao amanhecer, com direção de poses do início ao fim, e começa em 199 USD conforme a duração e os locais escolhidos.',
      intro: [
        'Um casal que nunca posou precisa de direção, não de alguém fotografando de longe. Por isso o ensaio é conduzido: para onde olhar, onde pôr a mão, quando caminhar. As fotos de que vocês vão gostar mais são quase sempre as de entre uma pose e outra.',
        'Se levarem uma segunda roupa — um sári, um vestido longo, uma sherwani — dividimos o ensaio: primeiro o espelho d’água, depois as arcadas laterais, onde a luz continua suave por mais tempo.',
      ],
      includes: [
        'Mais de 200 fotos em alta resolução, todas entregues',
        '30 fotos tratadas, escolhidas por vocês',
        'Um vídeo cinematográfico curto, editado para redes sociais',
        'Direção de poses durante todo o ensaio',
        'Segunda troca de roupa possível, com roteiro ajustado',
      ],
      faqs: [
        {
          question: 'Dá para fazer ao pôr do sol?',
          answer:
            'Dá, mas a luz da manhã é bem melhor e há muito menos gente. Se só o fim do dia for possível, preferimos Mehtab Bagh, em frente ao monumento.',
        },
        {
          question: 'Com quanta antecedência reservar?',
          answer:
            'Duas a três semanas na alta temporada, de outubro a março. Um sinal de 20% garante a data.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-small',
      slug: 'tour-guiado-fotos-taj-mahal-grupo-pequeno',
      title: 'Tour guiado + fotos no Taj Mahal · 1 a 5 pessoas | a partir de 89 USD',
      description:
        'Guia licenciado e fotógrafo juntos: Taj Mahal, Agra Fort e Mehtab Bagh para 1 a 5 pessoas, 40 fotos naturais e 5 reels. Dentro do Taj Mahal o guia não pode acompanhar o fotógrafo.',
      keywords: [
        'tour guiado taj mahal fotos',
        'guia e fotógrafo agra',
        'tour taj mahal grupo pequeno',
        'guia licenciado taj mahal',
      ],
      h1: 'Tour guiado com fotógrafo · 1 a 5 pessoas',
      answer:
        'Este pacote reúne um guia licenciado e um fotógrafo profissional por meio período, a partir de 89 USD para uma a cinco pessoas, e cobre Taj Mahal, Agra Fort e Mehtab Bagh ou Itimad-ud-Daulah. Dentro do Taj Mahal o regulamento não permite que um guia acompanhe um fotógrafo: lá você fica com o fotógrafo, e o guia encontra vocês em todos os outros monumentos.',
      intro: [
        'A maioria dos visitantes sai de Agra com as explicações ou com as fotos. Aqui você tem as duas coisas, pelo que custaria contratar separado e sem coordenar duas reservas.',
        'São quarenta fotos naturais — nada de pose engessada — e cinco reels. O guia conta a construção, as inscrições e os detalhes que passam batido; o fotógrafo acompanha o grupo nesse tempo.',
      ],
      includes: [
        'Guia licenciado pelo Ministério do Turismo',
        'Fotógrafo profissional com licença oficial',
        '40 fotos digitais naturais e 5 reels',
        'Taj Mahal, Agra Fort e Mehtab Bagh ou Itimad-ud-Daulah',
        'Sinal de 20%, saldo após o tour',
      ],
      faqs: [
        {
          question: 'Por que o guia não pode entrar com o fotógrafo?',
          answer:
            'É regra do monumento: dentro do Taj Mahal um guia não pode acompanhar um fotógrafo trabalhando. Avisamos antes da reserva para não haver surpresa no local.',
        },
        {
          question: 'Os ingressos estão incluídos?',
          answer:
            'Não, são pagos à parte. Informamos o valor exato para a sua nacionalidade e o número de pessoas antes de confirmar.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-large',
      slug: 'tour-guiado-fotos-taj-mahal-grupo-grande',
      title: 'Tour guiado + fotos no Taj Mahal · 6 a 12 pessoas | a partir de 119 USD',
      description:
        'Guia licenciado e fotógrafo para grupos de 6 a 12 pessoas: 60 fotos naturais, 7 reels, retratos de grupo e individuais. Taj Mahal, Agra Fort e Mehtab Bagh.',
      keywords: [
        'tour guiado grupo taj mahal',
        'fotógrafo para grupos agra',
        'tour família taj mahal',
        'foto de grupo taj mahal',
      ],
      h1: 'Tour guiado com fotógrafo · 6 a 12 pessoas',
      answer:
        'O mesmo pacote de guia e fotógrafo, dimensionado para seis a doze pessoas, a partir de 119 USD por meio período. Inclui 60 fotos digitais naturais e 7 reels, com retratos de grupo e retratos individuais de cada pessoa, no Taj Mahal, Agra Fort e Mehtab Bagh ou Itimad-ud-Daulah.',
      intro: [
        'Fotografar doze pessoas na frente do Taj Mahal não é questão de apertar o botão: há dois ou três pontos em que o grupo inteiro cabe no enquadramento com o monumento completo atrás, e é preciso chegar antes da multidão.',
        'Começamos pelos retratos de grupo, enquanto a luz está baixa e os caminhos vazios, e depois fazemos os individuais e de casal enquanto o guia conta a história.',
      ],
      includes: [
        'Guia licenciado e fotógrafo profissional',
        '60 fotos digitais naturais e 7 reels',
        'Retratos de grupo e retratos individuais',
        'Taj Mahal, Agra Fort e Mehtab Bagh ou Itimad-ud-Daulah',
        'Sinal de 20%, saldo após o tour',
      ],
      faqs: [
        {
          question: 'E se formos mais de doze?',
          answer:
            'Dá, com um segundo fotógrafo ou um segundo guia, conforme a composição do grupo. Diga o número exato e preparamos o orçamento.',
        },
        {
          question: 'Inclui transporte?',
          answer:
            'Neste pacote não. Podemos acrescentar carro ou van privativa com ar: informe o hotel e o número de pessoas para o preço exato.',
        },
      ],
    },
    {
      planId: 'transport-guide',
      slug: 'carro-privativo-guia-agra',
      title: 'Carro privativo e guia licenciado em Agra, sem fotógrafo | a partir de 99 USD',
      description:
        'Dia em Agra com carro privativo com ar, motorista e guia licenciado pelo Ministério do Turismo, a partir de 99 USD. Taj Mahal, Agra Fort, Itimad-ud-Daulah e Mehtab Bagh. As fotos são suas.',
      keywords: [
        'carro privativo agra',
        'guia em português agra',
        'passeio agra um dia',
        'motorista taj mahal',
      ],
      h1: 'Carro privativo e guia em Agra, sem fotógrafo',
      answer:
        'Um dia inteiro em Agra com carro privativo com ar-condicionado e motorista mais um guia licenciado pelo Ministério do Turismo, a partir de 99 USD. Cobre Taj Mahal, Agra Fort, Itimad-ud-Daulah e Mehtab Bagh, com embarque no hotel, na estação ou no aeroporto de Agra. Sem fotógrafo: as fotos são feitas por você.',
      intro: [
        'Muita gente fotografa muito bem sozinha e precisa de duas coisas: alguém que dirija e alguém que explique. Este pacote é exatamente isso, sem a parte de fotografia.',
        'O guia conhece horários, filas e os ângulos que você vai querer registrar; o motorista espera em cada monumento, para que um dia em Agra não se perca procurando um rickshaw no sol.',
      ],
      includes: [
        'Carro privativo com ar-condicionado e motorista o dia inteiro',
        'Guia licenciado pelo Ministério do Turismo',
        'Taj Mahal, Agra Fort, Itimad-ud-Daulah e Mehtab Bagh',
        'Embarque no hotel, estação de trem ou aeroporto de Agra',
        'Orçamento exato confirmado no WhatsApp antes da reserva',
      ],
      faqs: [
        {
          question: 'Posso acrescentar fotógrafo depois?',
          answer:
            'Sim, a qualquer momento antes da data. Passamos para o pacote de guia + fotógrafo e ajustamos o valor.',
        },
        {
          question: 'Pode sair de Délhi?',
          answer:
            'Sim, mas é outro pacote: o dia Délhi ↔ Agra com tudo incluído — veículo privativo, guia, fotógrafo e ingressos. Diga o ponto de partida para o orçamento.',
        },
      ],
    },
  ],
  ru: [
    {
      planId: 'sunrise',
      slug: 'fotograf-tadzh-mahal-rassvet',
      title: 'Фотограф у Тадж-Махала на рассвете | Съёмка от 120 USD',
      description:
        'Фотосессия на рассвете у Тадж-Махала с лицензированным фотографом: более 120 кадров, 3–5 рилсов, готово за 48 часов. Фотограф встречает вас в отеле.',
      keywords: [
        'фотограф тадж махал рассвет',
        'фотосессия тадж махал утро',
        'тадж махал фото на рассвете',
        'фотограф агра рассвет',
      ],
      h1: 'Фотосессия на рассвете у Тадж-Махала',
      answer:
        'Съёмка на рассвете занимает около двух часов и начинается до открытия ворот, когда мрамор из серого становится розовым, а затем янтарным. Вы получаете более 120 кадров в полном разрешении и 3–5 рилсов в течение 48 часов. Фотограф ждёт вас на ресепшен отеля: автомобиль в этот пакет не входит.',
      intro: [
        'Самый востребованный пакет, и причина простая: в первый час на территории почти пусто, а свет — именно тот, из-за которого вы сюда и собрались. Через час в том же кадре триста человек и жёсткий белый свет.',
        'Досмотр проходим вместе, дальше идём по продуманному маршруту — бассейн, скамья, боковые аркады, вид от мечети — успевая к каждой точке раньше толпы. Готовиться не нужно: позы подсказываем по ходу.',
      ],
      includes: [
        'Фотограф с официальным разрешением, технику пропускают на досмотре',
        'Более 120 кадров в полном разрешении, без водяных знаков',
        '3–5 вертикальных рилсов, готовых к публикации',
        'Обработка включена, отправка за 48 часов через Google Drive или WeTransfer',
        'Встреча в вашем отеле в Агре до открытия',
      ],
      faqs: [
        {
          question: 'Входные билеты включены?',
          answer:
            'Нет. Билет в Тадж-Махал оплачивается отдельно, и его цена зависит от гражданства; точную сумму сообщаем до брони и помогаем с покупкой.',
        },
        {
          question: 'Во сколько начинаем?',
          answer:
            'Между 5:15 и 6:15 в зависимости от сезона. Точное время подтверждаем накануне, по рассвету этого дня.',
        },
      ],
    },
    {
      planId: 'pre-wedding',
      slug: 'fotosessiya-pary-tadzh-mahal',
      title: 'Парная и предсвадебная фотосессия у Тадж-Махала | от 199 USD',
      description:
        'Парная или предсвадебная съёмка у Тадж-Махала: 200 кадров в высоком разрешении, 30 обработанных и кинематографичное видео. Лицензированный фотограф, помощь с позами.',
      keywords: [
        'парная фотосессия тадж махал',
        'предсвадебная съёмка индия',
        'фото на годовщину тадж махал',
        'свадебный фотограф агра',
      ],
      h1: 'Парная и предсвадебная съёмка у Тадж-Махала',
      answer:
        'Парная съёмка длится два часа и более и даёт более 200 кадров в высоком разрешении, 30 обработанных по вашему выбору и короткое кинематографичное видео. Проходит на рассвете, с подсказками по позам от начала до конца, и начинается от 199 USD в зависимости от длительности и локаций.',
      intro: [
        'Паре, которая никогда не позировала, нужна не съёмка издалека, а режиссура: куда смотреть, куда положить руку, когда идти. Самыми любимыми почти всегда оказываются кадры между позами.',
        'Если берёте вторую смену одежды — сари, длинное платье, шервани — делим съёмку на две части: сначала бассейн, затем боковые аркады, где свет дольше остаётся мягким.',
      ],
      includes: [
        'Более 200 кадров в высоком разрешении, отдаём все',
        '30 обработанных кадров по вашему выбору',
        'Короткое кинематографичное видео, смонтированное для соцсетей',
        'Подсказки по позам в течение всей съёмки',
        'Возможна вторая смена одежды, маршрут подстраиваем',
      ],
      faqs: [
        {
          question: 'Можно на закате?',
          answer:
            'Можно, но утренний свет заметно лучше, а людей значительно меньше. Если подходит только вечер, предпочитаем Мехтаб Багх напротив монумента.',
        },
        {
          question: 'За сколько бронировать?',
          answer:
            'За две-три недели в высокий сезон, с октября по март. Предоплата 20% закрепляет дату.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-small',
      slug: 'ekskursiya-s-fotografom-tadzh-mahal-malaya-gruppa',
      title: 'Экскурсия с гидом и фотографом · 1–5 человек | от 89 USD',
      description:
        'Лицензированный гид и фотограф вместе: Тадж-Махал, Агра-Форт и Мехтаб Багх для 1–5 человек, 40 естественных кадров и 5 рилсов. Внутри Тадж-Махала гид не сопровождает фотографа.',
      keywords: [
        'экскурсия с фотографом тадж махал',
        'гид и фотограф агра',
        'тур тадж махал малая группа',
        'лицензированный гид тадж махал',
      ],
      h1: 'Экскурсия с гидом и фотографом · 1–5 человек',
      answer:
        'Пакет объединяет лицензированного гида и профессионального фотографа на полдня, от 89 USD на одного-пятерых человек, и включает Тадж-Махал, Агра-Форт и Мехтаб Багх или Итимад-уд-Даулу. Внутри Тадж-Махала правила не позволяют гиду сопровождать фотографа: там с вами фотограф, а гид присоединяется на всех остальных памятниках.',
      intro: [
        'Большинство уезжает из Агры либо с рассказом, либо с фотографиями. Здесь есть и то и другое — примерно за те же деньги, что обе услуги по отдельности, и без двух отдельных броней.',
        'Это сорок естественных кадров — без скованных поз — и пять рилсов. Гид рассказывает о строительстве, надписях и деталях, которые самому не заметить; фотограф в это время работает с группой.',
      ],
      includes: [
        'Гид с лицензией Министерства туризма',
        'Профессиональный фотограф с официальным разрешением',
        '40 естественных цифровых кадров и 5 рилсов',
        'Тадж-Махал, Агра-Форт и Мехтаб Багх или Итимад-уд-Даула',
        'Предоплата 20%, остальное после экскурсии',
      ],
      faqs: [
        {
          question: 'Почему гид не может войти вместе с фотографом?',
          answer:
            'Это правило монумента: внутри Тадж-Махала гиду нельзя сопровождать работающего фотографа. Мы говорим об этом до брони, чтобы на месте не было неожиданностей.',
        },
        {
          question: 'Билеты включены?',
          answer:
            'Нет, они оплачиваются отдельно. Точную сумму для вашего гражданства и количества человек сообщаем до подтверждения.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-large',
      slug: 'ekskursiya-s-fotografom-tadzh-mahal-gruppa',
      title: 'Экскурсия с гидом и фотографом · 6–12 человек | от 119 USD',
      description:
        'Лицензированный гид и фотограф для групп 6–12 человек: 60 естественных кадров, 7 рилсов, групповые и индивидуальные портреты. Тадж-Махал, Агра-Форт и Мехтаб Багх.',
      keywords: [
        'экскурсия группой тадж махал',
        'фотограф для группы агра',
        'семейный тур тадж махал',
        'групповое фото тадж махал',
      ],
      h1: 'Экскурсия с гидом и фотографом · 6–12 человек',
      answer:
        'Тот же пакет из гида и фотографа, рассчитанный на шесть-двенадцать человек, от 119 USD за полдня. Включает 60 естественных цифровых кадров и 7 рилсов, групповые портреты и индивидуальные портреты каждого, на Тадж-Махале, в Агра-Форте и Мехтаб Багхе или Итимад-уд-Дауле.',
      intro: [
        'Снять двенадцать человек перед Тадж-Махалом — вопрос не кнопки: есть две-три точки, где вся группа попадает в кадр вместе с целым монументом, и к ним нужно успеть раньше толпы.',
        'Начинаем с групповых портретов, пока свет низкий и дорожки пустые, затем переходим к индивидуальным и парным, пока гид рассказывает.',
      ],
      includes: [
        'Лицензированный гид и профессиональный фотограф',
        '60 естественных цифровых кадров и 7 рилсов',
        'Групповые портреты и индивидуальные портреты',
        'Тадж-Махал, Агра-Форт и Мехтаб Багх или Итимад-уд-Даула',
        'Предоплата 20%, остальное после экскурсии',
      ],
      faqs: [
        {
          question: 'А если нас больше двенадцати?',
          answer:
            'Возможно — со вторым фотографом или вторым гидом, в зависимости от состава группы. Напишите точное число, и мы посчитаем.',
        },
        {
          question: 'Транспорт входит?',
          answer:
            'В этот пакет нет. Можем добавить частный автомобиль или минивэн с кондиционером: напишите отель и число человек для точной цены.',
        },
      ],
    },
    {
      planId: 'transport-guide',
      slug: 'avtomobil-s-gidom-agra',
      title: 'Частный автомобиль и гид в Агре, без фотографа | от 99 USD',
      description:
        'День в Агре с частным автомобилем с кондиционером, водителем и лицензированным гидом Министерства туризма, от 99 USD. Тадж-Махал, Агра-Форт, Итимад-уд-Даула, Мехтаб Багх. Снимаете сами.',
      keywords: [
        'частный автомобиль агра',
        'русскоговорящий гид агра',
        'экскурсия в агру на день',
        'водитель тадж махал',
      ],
      h1: 'Частный автомобиль и гид в Агре, без фотографа',
      answer:
        'Полный день в Агре с частным автомобилем с кондиционером и водителем плюс лицензированный гид Министерства туризма, от 99 USD. Включает Тадж-Махал, Агра-Форт, Итимад-уд-Даулу и Мехтаб Багх, с выездом от отеля, вокзала или аэропорта Агры. Фотографа нет: снимаете сами.',
      intro: [
        'Многие прекрасно фотографируют сами, и им нужны только двое: тот, кто везёт, и тот, кто рассказывает. Этот пакет — ровно про это, без строки «фотосъёмка».',
        'Гид знает расписание, очереди и те ракурсы, которые вы захотите снять; водитель ждёт у каждого объекта, так что день в Агре не уходит на поиски рикши под солнцем.',
      ],
      includes: [
        'Частный автомобиль с кондиционером и водителем на весь день',
        'Гид с лицензией Министерства туризма',
        'Тадж-Махал, Агра-Форт, Итимад-уд-Даула и Мехтаб Багх',
        'Выезд от отеля, железнодорожного вокзала или аэропорта Агры',
        'Точная стоимость подтверждается в WhatsApp до брони',
      ],
      faqs: [
        {
          question: 'Можно добавить фотографа позже?',
          answer:
            'Да, в любой момент до даты. Переходим на пакет «гид + фотограф» и пересчитываем стоимость.',
        },
        {
          question: 'Можно стартовать из Дели?',
          answer:
            'Да, но это другой пакет: день Дели ↔ Агра «всё включено» — частный транспорт, гид, фотограф и билеты. Напишите точку выезда для расчёта.',
        },
      ],
    },
  ],
  ja: [
    {
      planId: 'sunrise',
      slug: 'taj-mahal-sunrise-satsuei',
      title: 'タージ・マハルの日の出撮影｜120米ドルから・公認カメラマン',
      description:
        '公認カメラマンによるタージ・マハルの日の出撮影。120枚以上の写真とリール3〜5本、48時間以内にお届け。カメラマンがホテルまで伺います。',
      keywords: [
        'タージマハル 日の出 撮影',
        'タージマハル 朝 写真',
        'アーグラ カメラマン 朝',
        'タージマハル フォトツアー',
      ],
      h1: 'タージ・マハルの日の出撮影',
      answer:
        '日の出の撮影は約2時間で、開門前から始まります。大理石が灰色から桃色、そして琥珀色へ変わる時間です。120枚以上のフル解像度写真とリール3〜5本を、48時間以内にお届けします。カメラマンはホテルのロビーでお待ちしますので、このプランに車は含まれません。',
      intro: [
        '最も多くご予約いただくプランです。理由は単純で、最初の一時間は敷地がほとんど無人で、光もまさに写真で見たとおりだからです。一時間後には同じ構図に三百人が入り、光は白く硬くなります。',
        '手荷物検査をご一緒に抜け、池、ベンチ、側廊、モスクからの眺めという順で、混雑が届く前に各地点へ向かいます。ご準備は不要です。ポーズはその場でご案内します。',
      ],
      includes: [
        '正式な許可証を持つカメラマン、検査を通る機材',
        'フル解像度の写真120枚以上、透かしなし',
        '縦構図のリール3〜5本、そのまま投稿可能',
        '補正込み、48時間以内にGoogle DriveまたはWeTransferでお届け',
        'アーグラのご滞在ホテルで、開門前にお待ち合わせ',
      ],
      faqs: [
        {
          question: '入場券は含まれますか。',
          answer:
            '含まれません。タージ・マハルの入場券は別途で、金額は国籍により異なります。ご予約前に正確な金額をお伝えし、購入もお手伝いします。',
        },
        {
          question: '開始時刻は何時ですか。',
          answer:
            '季節により5時15分から6時15分の間です。正確な時刻は前日に、その日の日の出に合わせてご連絡します。',
        },
      ],
    },
    {
      planId: 'pre-wedding',
      slug: 'taj-mahal-couple-maedori',
      title: 'タージ・マハルのカップル撮影・前撮り｜199米ドルから',
      description:
        'タージ・マハルでのカップル撮影・前撮り。高解像度200枚、補正済み30枚、シネマティック動画付き。公認カメラマンがポーズまでご案内します。',
      keywords: [
        'タージマハル カップル 撮影',
        'タージマハル 前撮り',
        'インド 前撮り ロケーション',
        'アーグラ ウェディングフォト',
      ],
      h1: 'タージ・マハルのカップル撮影・前撮り',
      answer:
        'カップル撮影は2時間以上で、高解像度の写真200枚以上、ご指定の補正済み30枚、短いシネマティック動画をお渡しします。日の出の時間帯に、最初から最後までポーズをご案内しながら進め、所要時間と撮影場所に応じて199米ドルからとなります。',
      intro: [
        'カメラの前に立ち慣れていないお二人に必要なのは、遠くから撮られることではなく、案内されることです。どこを見るか、手をどこに置くか、いつ歩き出すか。あとで一番気に入る一枚は、たいていポーズの合間に生まれます。',
        'お着替えをお持ちでしたら——サリー、ロングドレス、シェルワニ——撮影を二部に分けます。先に池、そのあと光が長くやわらかい側廊へ移ります。',
      ],
      includes: [
        '高解像度の写真200枚以上、すべてお渡し',
        'お選びいただいた補正済み30枚',
        'SNS用に編集した短いシネマティック動画',
        '撮影中ずっとポーズのご案内',
        '二着目のお着替えも可能、進行を合わせます',
      ],
      faqs: [
        {
          question: '夕方の撮影もできますか。',
          answer:
            '可能ですが、朝の光のほうが明らかに良く、人も大幅に少ないです。夕方しかご都合がつかない場合は、対岸のメヘターブ・バーグをおすすめします。',
        },
        {
          question: 'どれくらい前に予約すべきですか。',
          answer:
            '繁忙期の10月から3月は2〜3週間前が目安です。20%のお預かり金で日程が確定します。',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-small',
      slug: 'gaido-tsuki-foto-tour-shoninzu',
      title: 'ガイド付きフォトツアー・1〜5名｜89米ドルから',
      description:
        '公認ガイドとカメラマンが同行。タージ・マハル、アーグラ城、メヘターブ・バーグを1〜5名で。自然な写真40枚とリール5本。タージ・マハル内はガイドの同行が認められていません。',
      keywords: [
        'タージマハル ガイド 撮影',
        'アーグラ 日本語 ガイド',
        'タージマハル 少人数 ツアー',
        'アーグラ 公認ガイド',
      ],
      h1: 'ガイド付きフォトツアー・1〜5名',
      answer:
        'このプランは公認ガイドとプロのカメラマンが半日同行するもので、1〜5名で89米ドルから、タージ・マハル、アーグラ城、メヘターブ・バーグまたはイティマド・ウッダウラを巡ります。タージ・マハルの内部では規則によりガイドがカメラマンに同行できないため、そこはカメラマンがご案内し、他の史跡ではガイドが合流します。',
      intro: [
        '多くの旅行者は、解説か写真のどちらかを持ってアーグラを離れます。このプランでは両方が手に入り、別々に手配した場合とほぼ同じ費用で、予約もひとつにまとまります。',
        '自然な写真が四十枚——硬いポーズはありません——とリール五本。ガイドが建設の経緯や碑文、ひとりでは気づかない細部を語り、その間カメラマンが皆さまを追います。',
      ],
      includes: [
        '観光省公認のガイド',
        '正式な許可証を持つプロのカメラマン',
        '自然なデジタル写真40枚とリール5本',
        'タージ・マハル、アーグラ城、メヘターブ・バーグまたはイティマド・ウッダウラ',
        '20%のお預かり金、残額はツアー後',
      ],
      faqs: [
        {
          question: 'なぜガイドはカメラマンと一緒に入れないのですか。',
          answer:
            '史跡の規則です。タージ・マハルの内部では、ガイドが撮影中のカメラマンに同行することが認められていません。現地で驚かれないよう、ご予約前にお伝えしています。',
        },
        {
          question: '入場券は含まれますか。',
          answer:
            '含まれません。別途お支払いいただきます。ご国籍と人数に応じた正確な金額を、確定前にお伝えします。',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-large',
      slug: 'gaido-tsuki-foto-tour-group',
      title: 'ガイド付きフォトツアー・6〜12名｜119米ドルから',
      description:
        '6〜12名のグループ向け。公認ガイドとカメラマン、自然な写真60枚とリール7本、集合写真と個人写真。タージ・マハル、アーグラ城、メヘターブ・バーグ。',
      keywords: [
        'タージマハル グループ ツアー',
        'アーグラ 団体 撮影',
        'タージマハル 家族 写真',
        'タージマハル 集合写真',
      ],
      h1: 'ガイド付きフォトツアー・6〜12名',
      answer:
        '同じガイドとカメラマンのプランを、6〜12名向けにしたものです。半日で119米ドルから、自然なデジタル写真60枚とリール7本、集合写真とお一人ずつの写真が含まれ、タージ・マハル、アーグラ城、メヘターブ・バーグまたはイティマド・ウッダウラを巡ります。',
      intro: [
        '十二人をタージ・マハルの前で撮るのは、シャッターの問題ではありません。全員が入り、しかも背後に記念堂が丸ごと収まる場所は二、三か所しかなく、混雑より先に着く必要があります。',
        'まず光が低く通路が空いているうちに集合写真を撮り、そのあとガイドの解説の間に、お一人ずつとご夫婦の写真へ移ります。',
      ],
      includes: [
        '公認ガイドとプロのカメラマン',
        '自然なデジタル写真60枚とリール7本',
        '集合写真とお一人ずつの写真',
        'タージ・マハル、アーグラ城、メヘターブ・バーグまたはイティマド・ウッダウラ',
        '20%のお預かり金、残額はツアー後',
      ],
      faqs: [
        {
          question: '十二名を超える場合は。',
          answer:
            '可能です。グループの構成に応じて、カメラマンまたはガイドをもう一名追加します。正確な人数をお知らせいただければお見積りします。',
        },
        {
          question: '送迎は含まれますか。',
          answer:
            'このプランには含まれません。エアコン付きの専用車やミニバスを追加できますので、ホテルと人数をお知らせください。',
        },
      ],
    },
    {
      planId: 'transport-guide',
      slug: 'senyosha-gaido-agra',
      title: 'アーグラの専用車とガイド（撮影なし）｜99米ドルから',
      description:
        'エアコン付き専用車とドライバー、観光省公認ガイドでアーグラを一日。99米ドルから。タージ・マハル、アーグラ城、イティマド・ウッダウラ、メヘターブ・バーグ。撮影はご自身で。',
      keywords: [
        'アーグラ 専用車',
        'アーグラ ガイド 手配',
        'アーグラ 日帰り',
        'タージマハル 運転手',
      ],
      h1: 'アーグラの専用車とガイド（撮影なし）',
      answer:
        'エアコン付きの専用車とドライバー、観光省公認のガイドで、アーグラを一日。99米ドルからです。タージ・マハル、アーグラ城、イティマド・ウッダウラ、メヘターブ・バーグを巡り、ホテル、鉄道駅、アーグラ空港のいずれでもお迎えします。カメラマンは付かず、撮影はご自身で行います。',
      intro: [
        'ご自身でとても良い写真を撮られる方に必要なのは二つだけです。運転する人と、解説する人。このプランはまさにそれで、撮影の費用は入っていません。',
        'ガイドは開門時間、行列、そして撮りたくなる角度を知っています。ドライバーは各史跡で待機するので、炎天下でリクシャーを探して一日を使うことがありません。',
      ],
      includes: [
        'エアコン付き専用車とドライバー（終日）',
        '観光省公認のガイド',
        'タージ・マハル、アーグラ城、イティマド・ウッダウラ、メヘターブ・バーグ',
        'ホテル、鉄道駅、アーグラ空港でのお迎え',
        'ご予約前にWhatsAppで正確なお見積りを確定',
      ],
      faqs: [
        {
          question: 'あとからカメラマンを追加できますか。',
          answer:
            'はい、当日より前であればいつでも。ガイド＋撮影のプランに変更し、料金を調整します。',
        },
        {
          question: 'デリー発でも可能ですか。',
          answer:
            '可能ですが別のプランになります。デリー⇄アーグラの日帰りで、専用車、ガイド、カメラマン、入場券込みです。出発地をお知らせください。',
        },
      ],
    },
  ],
  zh: [
    {
      planId: 'sunrise',
      slug: 'taji-ling-richu-paishe',
      title: '泰姬陵日出拍摄｜120美元起·持证摄影师',
      description:
        '持证摄影师的泰姬陵日出拍摄：120张以上照片、3–5条短视频，48小时内交片。摄影师到酒店与您会合。',
      keywords: ['泰姬陵 日出 拍摄', '泰姬陵 早晨 照片', '阿格拉 摄影师 日出', '泰姬陵 摄影 行程'],
      h1: '泰姬陵日出拍摄',
      answer:
        '日出拍摄约两小时，在开门前开始——大理石从灰转粉、再转琥珀色的那段时间。您将拿到120张以上全分辨率照片和3–5条短视频，48小时内交付。摄影师在酒店大厅等您，本套餐不含用车。',
      intro: [
        '这是预约最多的套餐，原因很简单：第一个小时园区几乎无人，光线正是让您想来的那种。一小时之后，同样的构图里会有三百个人，光线白而硬。',
        '我们一起过安检，然后按既定路线走——水池、长椅、侧廊、清真寺这一侧的视角——在人群抵达之前到每个机位。您不需要准备什么，姿势我们一路告诉您。',
      ],
      includes: [
        '持官方许可证的摄影师，器材可以过安检',
        '120张以上全分辨率照片，无水印',
        '3–5条竖版短视频，可直接发布',
        '含修图，48小时内通过 Google Drive 或 WeTransfer 交付',
        '在您阿格拉的酒店会合，开门前出发',
      ],
      faqs: [
        {
          question: '门票包含吗？',
          answer:
            '不包含。泰姬陵门票单独支付，价格按国籍不同；预订前我们会告知确切金额，并协助购买。',
        },
        {
          question: '几点开始？',
          answer: '视季节在5:15至6:15之间。确切时间我们在前一天按当天日出时刻确认。',
        },
      ],
    },
    {
      planId: 'pre-wedding',
      slug: 'taji-ling-qinglv-hunsha',
      title: '泰姬陵情侣写真与婚纱前拍｜199美元起',
      description:
        '泰姬陵情侣写真或婚纱前拍：200张高清照片、30张精修、一条电影感视频。持证摄影师全程引导姿势。',
      keywords: ['泰姬陵 情侣 写真', '泰姬陵 婚纱 拍摄', '印度 婚纱 旅拍', '阿格拉 婚纱摄影'],
      h1: '泰姬陵情侣写真与婚纱前拍',
      answer:
        '情侣拍摄两小时以上，交付200张以上高清照片、由您挑选的30张精修，以及一条简短的电影感视频。在日出时段进行，全程引导姿势，依时长与取景地点，199美元起。',
      intro: [
        '没在镜头前站过的两个人需要的是引导，而不是被远远地拍。所以我们会说：看哪里、手放哪里、什么时候往前走。最后您最喜欢的那张，往往是两个姿势之间拍到的。',
        '如果带了换装——纱丽、长裙、谢尔瓦尼——我们把拍摄分成两段：先水池，再到侧廊，那里的光线柔和得更久。',
      ],
      includes: [
        '200张以上高清照片，全部交付',
        '由您挑选的30张精修',
        '一条为社交平台剪辑的电影感短视频',
        '全程姿势引导',
        '可换第二套服装，行程相应调整',
      ],
      faqs: [
        {
          question: '可以在日落时拍吗？',
          answer:
            '可以，但早晨的光线明显更好，人也少得多。如果只能傍晚，我们建议到对岸的月光花园（Mehtab Bagh）。',
        },
        {
          question: '要提前多久预订？',
          answer: '10月至次年3月旺季建议提前两到三周。支付20%定金即可锁定日期。',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-small',
      slug: 'daoyou-sheying-tuan-xiao',
      title: '导游＋摄影一日游·1至5人｜89美元起',
      description:
        '持证导游与摄影师同行：泰姬陵、阿格拉堡与月光花园，1至5人，40张自然抓拍与5条短视频。泰姬陵内不允许导游陪同摄影师。',
      keywords: ['泰姬陵 导游 拍照', '阿格拉 中文导游', '泰姬陵 小团', '阿格拉 持证导游'],
      h1: '导游＋摄影·1至5人',
      answer:
        '这个套餐让持证导游与专业摄影师同行半天，1至5人89美元起，涵盖泰姬陵、阿格拉堡以及月光花园或小泰姬陵。泰姬陵内部按规定导游不能陪同摄影师，因此园内由摄影师陪您，导游在其他景点与您会合。',
      intro: [
        '大多数游客离开阿格拉时，要么有讲解，要么有照片，很少两者都有。这个套餐两样都给，价格接近分别请两位，而且只需一次预订。',
        '四十张自然抓拍——不是僵硬的摆拍——加五条短视频。导游讲建造过程、铭文，以及一个人看不出的细节；摄影师在这段时间跟着您拍。',
      ],
      includes: [
        '印度旅游部持证导游',
        '持官方许可证的专业摄影师',
        '40张自然数码照片与5条短视频',
        '泰姬陵、阿格拉堡与月光花园或小泰姬陵',
        '20%定金，余款行程结束后支付',
      ],
      faqs: [
        {
          question: '为什么导游不能和摄影师一起进去？',
          answer:
            '这是景区规定：泰姬陵内部不允许导游陪同正在工作的摄影师。我们在预订前就说明，避免到现场才发现。',
        },
        {
          question: '门票包含吗？',
          answer: '不包含，需另付。确认前我们会按您的国籍和人数告知确切金额。',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-large',
      slug: 'daoyou-sheying-tuan-da',
      title: '导游＋摄影一日游·6至12人｜119美元起',
      description:
        '6至12人团队：持证导游与摄影师、60张自然照片、7条短视频，含合影与每人单独肖像。泰姬陵、阿格拉堡与月光花园。',
      keywords: ['泰姬陵 团队 拍照', '阿格拉 团队 摄影', '泰姬陵 家庭 合影', '泰姬陵 大团'],
      h1: '导游＋摄影·6至12人',
      answer:
        '同样的导游加摄影套餐，按六至十二人配置，半天119美元起。包含60张自然数码照片与7条短视频，既有团队合影，也有每位成员的单独肖像，涵盖泰姬陵、阿格拉堡与月光花园或小泰姬陵。',
      intro: [
        '在泰姬陵前拍十二个人，难点不在按快门：能把整团和完整主体一起装进画面的位置只有两三处，必须比人群先到。',
        '我们先在光线还低、步道还空的时候拍合影，之后在导游讲解期间拍单人与情侣照。',
      ],
      includes: [
        '持证导游与专业摄影师',
        '60张自然数码照片与7条短视频',
        '团队合影与每人单独肖像',
        '泰姬陵、阿格拉堡与月光花园或小泰姬陵',
        '20%定金，余款行程结束后支付',
      ],
      faqs: [
        {
          question: '超过十二人怎么办？',
          answer: '可以安排，视团队结构增加一名摄影师或一名导游。告知确切人数即可报价。',
        },
        {
          question: '含用车吗？',
          answer: '此套餐不含。可以加私家空调车或中巴，请告知酒店与人数以便报确切价格。',
        },
      ],
    },
    {
      planId: 'transport-guide',
      slug: 'siren-yongche-daoyou-agela',
      title: '阿格拉私家用车与持证导游（不含摄影）｜99美元起',
      description:
        '阿格拉一日：私家空调车与司机，加印度旅游部持证导游，99美元起。泰姬陵、阿格拉堡、小泰姬陵与月光花园。照片自己拍。',
      keywords: ['阿格拉 私家车', '阿格拉 导游 预约', '阿格拉 一日游', '泰姬陵 包车'],
      h1: '阿格拉私家用车与导游（不含摄影）',
      answer:
        '阿格拉一整天，私家空调车配司机，加一位印度旅游部持证导游，99美元起。涵盖泰姬陵、阿格拉堡、小泰姬陵与月光花园，可在酒店、火车站或阿格拉机场接您。不含摄影师，照片由您自己拍。',
      intro: [
        '很多旅客自己就拍得很好，需要的只有两件事：有人开车，有人讲解。这个套餐正是如此，没有摄影这一项。',
        '导游清楚开放时间、排队情况，以及您会想拍的角度；司机在每个景点等候，所以一天不会耗在烈日下找三轮车。',
      ],
      includes: [
        '私家空调车与司机，全天',
        '印度旅游部持证导游',
        '泰姬陵、阿格拉堡、小泰姬陵与月光花园',
        '酒店、火车站或阿格拉机场接送',
        '预订前在 WhatsApp 上确认确切报价',
      ],
      faqs: [
        {
          question: '之后可以加摄影师吗？',
          answer: '可以，出行日之前随时都行。我们改为导游＋摄影套餐并调整价格。',
        },
        {
          question: '可以从德里出发吗？',
          answer:
            '可以，但属于另一个套餐：德里⇄阿格拉当日全包，含私家车、导游、摄影师与门票。告知出发地即可报价。',
        },
      ],
    },
  ],
  ar: [
    {
      planId: 'sunrise',
      slug: 'musawwir-taj-mahal-shuruq',
      title: 'مصوّر في تاج محل عند الشروق | جلسة من 120 دولارًا',
      description:
        'جلسة تصوير عند شروق الشمس في تاج محل مع مصوّر مرخّص: أكثر من 120 صورة و3–5 مقاطع قصيرة، التسليم خلال 48 ساعة. المصوّر يلتقيك في الفندق.',
      keywords: [
        'مصور تاج محل الشروق',
        'تصوير تاج محل الصباح',
        'صور تاج محل شروق الشمس',
        'مصور أجرا الصباح',
      ],
      h1: 'جلسة تصوير عند الشروق في تاج محل',
      answer:
        'تستمر جلسة الشروق نحو ساعتين وتبدأ قبل فتح الأبواب، حين يتحوّل الرخام من الرمادي إلى الوردي ثم إلى العسلي. تحصل على أكثر من 120 صورة بدقة كاملة ومن 3 إلى 5 مقاطع قصيرة، تُسلَّم خلال 48 ساعة. يلتقيك المصوّر في استقبال فندقك، ولا تشمل هذه الباقة سيارة.',
      intro: [
        'هي الباقة الأكثر طلبًا لسبب بسيط: في الساعة الأولى يكون الموقع خاليًا تقريبًا والضوء هو الضوء الذي رأيته في الصور. بعد ساعة واحدة يصبح في اللقطة نفسها ثلاثمئة شخص وضوء أبيض قاسٍ.',
        'نمرّ معًا من نقطة التفتيش ثم نتبع مسارًا محددًا — البركة، المقعد، الأروقة الجانبية، المشهد من جهة المسجد — ونصل إلى كل موضع قبل الزحام. لا تحتاج إلى أي تحضير؛ نوجّهك في الوقوف خطوة بخطوة.',
      ],
      includes: [
        'مصوّر يحمل التصريح الرسمي، ومعدّات تمرّ من التفتيش',
        'أكثر من 120 صورة بدقة كاملة وبدون علامة مائية',
        'من 3 إلى 5 مقاطع رأسية جاهزة للنشر',
        'التعديل مشمول والتسليم خلال 48 ساعة عبر Google Drive أو WeTransfer',
        'اللقاء في فندقك بأجرا قبل فتح الأبواب',
      ],
      faqs: [
        {
          question: 'هل تذاكر الدخول مشمولة؟',
          answer:
            'لا. تُدفع تذكرة تاج محل على حدة ويختلف سعرها حسب الجنسية؛ نخبرك بالمبلغ بدقة قبل الحجز ونساعدك في شرائها.',
        },
        {
          question: 'في أي ساعة تبدأ الجلسة؟',
          answer:
            'بين 5:15 و6:15 حسب الموسم. نؤكد الوقت بدقة في اليوم السابق، بحسب شروق ذلك اليوم.',
        },
      ],
    },
    {
      planId: 'pre-wedding',
      slug: 'jalsat-taswir-azwaj-taj-mahal',
      title: 'جلسة تصوير للأزواج وما قبل الزفاف في تاج محل | من 199 دولارًا',
      description:
        'جلسة للأزواج أو ما قبل الزفاف في تاج محل: 200 صورة بدقة عالية، 30 صورة معدّلة وفيديو سينمائي. مصوّر مرخّص وتوجيه كامل للوقفات.',
      keywords: [
        'تصوير أزواج تاج محل',
        'تصوير ما قبل الزفاف الهند',
        'صور ذكرى زواج تاج محل',
        'مصور أعراس أجرا',
      ],
      h1: 'جلسة الأزواج وما قبل الزفاف في تاج محل',
      answer:
        'تستمر جلسة الأزواج ساعتين أو أكثر وتسلّم أكثر من 200 صورة بدقة عالية، و30 صورة معدّلة من اختيارك، وفيديو سينمائي قصير. تُنفَّذ عند الشروق مع توجيه للوقفات من البداية إلى النهاية، وتبدأ من 199 دولارًا حسب المدة والمواقع.',
      intro: [
        'الزوجان اللذان لم يقفا أمام كاميرا من قبل يحتاجان إلى توجيه، لا إلى من يصوّرهما من بعيد. لذلك تُدار الجلسة: إلى أين تنظر، وأين تضع يدك، ومتى تمشي. أحبّ الصور إليكما ستكون غالبًا تلك التي بين وقفة وأخرى.',
        'إن أحضرتما ملابس ثانية — ساري أو فستانًا طويلًا أو شيرواني — نقسم الجلسة إلى جزأين: البركة أولًا، ثم الأروقة الجانبية حيث يبقى الضوء ناعمًا وقتًا أطول.',
      ],
      includes: [
        'أكثر من 200 صورة بدقة عالية، تُسلَّم كاملة',
        '30 صورة معدّلة تختارونها بأنفسكم',
        'فيديو سينمائي قصير، مونتاج مناسب لوسائل التواصل',
        'توجيه للوقفات خلال الجلسة كلها',
        'إمكان تغيير ثانٍ للملابس مع تعديل المسار',
      ],
      faqs: [
        {
          question: 'هل يمكن التصوير عند الغروب؟',
          answer:
            'نعم، لكن ضوء الصباح أفضل بكثير والموقع أقل ازدحامًا. وإن كان الغروب وقتكم الوحيد، نفضّل حدائق مهتاب باغ المقابلة للضريح.',
        },
        {
          question: 'كم قبل الموعد يُفضّل الحجز؟',
          answer:
            'من أسبوعين إلى ثلاثة في الموسم المرتفع، من أكتوبر إلى مارس. عربون 20% يثبّت التاريخ.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-small',
      slug: 'jawla-murshid-wa-musawwir-taj-mahal-saghira',
      title: 'جولة بمرشد ومصوّر · من 1 إلى 5 أشخاص | من 89 دولارًا',
      description:
        'مرشد مرخّص ومصوّر معًا: تاج محل وقلعة أجرا ومهتاب باغ من 1 إلى 5 أشخاص، 40 صورة طبيعية و5 مقاطع. داخل تاج محل لا يُسمح للمرشد بمصاحبة المصوّر.',
      keywords: [
        'جولة مرشد تاج محل تصوير',
        'مرشد عربي أجرا',
        'جولة تاج محل مجموعة صغيرة',
        'مرشد مرخّص تاج محل',
      ],
      h1: 'جولة بمرشد ومصوّر · من 1 إلى 5 أشخاص',
      answer:
        'تجمع هذه الباقة مرشدًا مرخّصًا ومصوّرًا محترفًا لنصف يوم، من 89 دولارًا لشخص واحد حتى خمسة، وتغطي تاج محل وقلعة أجرا ومهتاب باغ أو إعتماد الدولة. داخل تاج محل لا تسمح اللوائح بمصاحبة المرشد لمصوّر يعمل، فيكون المصوّر معك هناك، ويلتقيك المرشد في بقية المعالم.',
      intro: [
        'يخرج معظم الزوار من أجرا بالشرح أو بالصور، لا بالأمرين. هنا تحصل على كليهما، بما يقارب تكلفة حجزهما منفصلين، وبحجز واحد فقط.',
        'أربعون صورة طبيعية — دون وقفات متكلّفة — وخمسة مقاطع قصيرة. يحدّثك المرشد عن البناء والنقوش والتفاصيل التي لا تُلاحَظ وحدك، ويتابعكم المصوّر في أثناء ذلك.',
      ],
      includes: [
        'مرشد مرخّص من وزارة السياحة',
        'مصوّر محترف يحمل التصريح الرسمي',
        '40 صورة رقمية طبيعية و5 مقاطع قصيرة',
        'تاج محل وقلعة أجرا ومهتاب باغ أو إعتماد الدولة',
        'عربون 20% والباقي بعد الجولة',
      ],
      faqs: [
        {
          question: 'لماذا لا يدخل المرشد مع المصوّر؟',
          answer:
            'هي قاعدة الموقع: داخل تاج محل لا يُسمح للمرشد بمصاحبة مصوّر يعمل. نذكرها قبل الحجز حتى لا تكون مفاجأة في المكان.',
        },
        {
          question: 'هل التذاكر مشمولة؟',
          answer:
            'لا، تُدفع على حدة. نخبرك بالمبلغ الدقيق حسب جنسيتك وعدد الأشخاص قبل التأكيد.',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-large',
      slug: 'jawla-murshid-wa-musawwir-taj-mahal-kabira',
      title: 'جولة بمرشد ومصوّر · من 6 إلى 12 شخصًا | من 119 دولارًا',
      description:
        'مرشد مرخّص ومصوّر للمجموعات من 6 إلى 12 شخصًا: 60 صورة طبيعية و7 مقاطع، صور جماعية وصور فردية. تاج محل وقلعة أجرا ومهتاب باغ.',
      keywords: [
        'جولة جماعية تاج محل',
        'مصور للمجموعات أجرا',
        'جولة عائلية تاج محل',
        'صورة جماعية تاج محل',
      ],
      h1: 'جولة بمرشد ومصوّر · من 6 إلى 12 شخصًا',
      answer:
        'الباقة نفسها من مرشد ومصوّر، مهيّأة لستة إلى اثني عشر شخصًا، من 119 دولارًا لنصف يوم. تشمل 60 صورة رقمية طبيعية و7 مقاطع قصيرة، مع صور جماعية وصور فردية لكل شخص، في تاج محل وقلعة أجرا ومهتاب باغ أو إعتماد الدولة.',
      intro: [
        'تصوير اثني عشر شخصًا أمام تاج محل ليس مسألة ضغط زر: هناك موضعان أو ثلاثة تدخل فيها المجموعة كاملة مع الضريح كله في الخلف، ويجب الوصول إليها قبل الزحام.',
        'نبدأ بالصور الجماعية والضوء لا يزال منخفضًا والمسارات خالية، ثم ننتقل إلى الصور الفردية وصور الأزواج في أثناء شرح المرشد.',
      ],
      includes: [
        'مرشد مرخّص ومصوّر محترف',
        '60 صورة رقمية طبيعية و7 مقاطع قصيرة',
        'صور جماعية وصور فردية',
        'تاج محل وقلعة أجرا ومهتاب باغ أو إعتماد الدولة',
        'عربون 20% والباقي بعد الجولة',
      ],
      faqs: [
        {
          question: 'وإن كنا أكثر من اثني عشر؟',
          answer:
            'ممكن، بمصوّر ثانٍ أو مرشد ثانٍ حسب تكوين المجموعة. أرسل العدد بدقة ونعدّ لك العرض.',
        },
        {
          question: 'هل المواصلات مشمولة؟',
          answer:
            'ليست مشمولة في هذه الباقة. يمكننا إضافة سيارة أو حافلة صغيرة خاصة مكيّفة: اذكر الفندق وعدد الأشخاص للسعر الدقيق.',
        },
      ],
    },
    {
      planId: 'transport-guide',
      slug: 'sayara-khassa-wa-murshid-agra',
      title: 'سيارة خاصة ومرشد مرخّص في أجرا بدون تصوير | من 99 دولارًا',
      description:
        'يوم في أجرا بسيارة خاصة مكيّفة وسائق ومرشد مرخّص من وزارة السياحة، من 99 دولارًا. تاج محل وقلعة أجرا وإعتماد الدولة ومهتاب باغ. التصوير عليك.',
      keywords: ['سيارة خاصة أجرا', 'مرشد عربي أجرا', 'رحلة يوم إلى أجرا', 'سائق تاج محل'],
      h1: 'سيارة خاصة ومرشد في أجرا بدون تصوير',
      answer:
        'يوم كامل في أجرا بسيارة خاصة مكيّفة مع سائق، ومرشد مرخّص من وزارة السياحة، من 99 دولارًا. تغطي تاج محل وقلعة أجرا وإعتماد الدولة ومهتاب باغ، مع الانطلاق من فندقك أو المحطة أو مطار أجرا. بلا مصوّر: الصور تصوّرها بنفسك.',
      intro: [
        'كثير من المسافرين يصوّرون جيدًا بأنفسهم ويحتاجون إلى أمرين فقط: من يقود ومن يشرح. هذه الباقة هي ذلك بالضبط، دون بند التصوير.',
        'يعرف المرشد مواعيد الفتح والصفوف والزوايا التي ستريد تصويرها؛ ويبقى السائق في انتظارك عند كل معلم، فلا يمضي يومك في البحث عن عربة تحت الشمس.',
      ],
      includes: [
        'سيارة خاصة مكيّفة مع سائق طوال اليوم',
        'مرشد مرخّص من وزارة السياحة',
        'تاج محل وقلعة أجرا وإعتماد الدولة ومهتاب باغ',
        'الانطلاق من الفندق أو محطة القطار أو مطار أجرا',
        'عرض سعر دقيق يُؤكَّد على واتساب قبل الحجز',
      ],
      faqs: [
        {
          question: 'هل يمكن إضافة مصوّر لاحقًا؟',
          answer:
            'نعم، في أي وقت قبل الموعد. ننتقل إلى باقة المرشد والمصوّر ونعدّل السعر.',
        },
        {
          question: 'هل يمكن الانطلاق من دلهي؟',
          answer:
            'نعم، لكنها باقة أخرى: يوم دلهي ↔ أجرا بكل شيء — سيارة خاصة ومرشد ومصوّر وتذاكر. اذكر نقطة الانطلاق لإعداد العرض.',
        },
      ],
    },
  ],
  hi: [
    {
      planId: 'sunrise',
      slug: 'tajmahal-sunrise-photoshoot',
      title: 'ताजमहल सनराइज़ फोटो शूट | $120 से, लाइसेंसी फोटोग्राफर',
      description:
        'लाइसेंसी फोटोग्राफर के साथ ताजमहल पर सूर्योदय का फोटो शूट: 120+ फोटो, 3–5 रील, 48 घंटे में डिलीवरी। फोटोग्राफर आपके होटल पर मिलेगा।',
      keywords: [
        'ताजमहल सनराइज फोटो शूट',
        'ताजमहल सुबह फोटोग्राफी',
        'आगरा फोटोग्राफर सुबह',
        'ताजमहल फोटो पैकेज',
      ],
      h1: 'ताजमहल पर सूर्योदय का फोटो शूट',
      answer:
        'सनराइज़ शूट करीब दो घंटे का होता है और गेट खुलने से पहले शुरू होता है — जब संगमरमर स्लेटी से गुलाबी और फिर सुनहरा होता है। आपको 120 से ज़्यादा फुल रेज़ोल्यूशन फोटो और 3–5 रील 48 घंटे में मिल जाती हैं। फोटोग्राफर आपके होटल की रिसेप्शन पर मिलता है; इस पैकेज में गाड़ी शामिल नहीं है।',
      intro: [
        'यह सबसे ज़्यादा बुक होने वाला पैकेज है, और वजह सीधी है: पहले एक घंटे में परिसर लगभग खाली रहता है और रोशनी वही होती है जो फोटो में दिखती है। एक घंटे बाद उसी फ्रेम में तीन सौ लोग और सपाट सफ़ेद रोशनी होती है।',
        'सिक्योरिटी चेक हम साथ पार करते हैं, फिर एक तय क्रम में चलते हैं — हौज़, बेंच, साइड के आर्च, मस्जिद की तरफ़ का व्यू — हर जगह भीड़ से पहले पहुँचते हुए। आपको कुछ तैयार नहीं करना; पोज़ वहीं बताते जाते हैं।',
      ],
      includes: [
        'आधिकारिक परमिट वाला फोटोग्राफर, उपकरण चेकिंग से निकलते हैं',
        '120+ फुल रेज़ोल्यूशन फोटो, बिना वॉटरमार्क',
        '3–5 वर्टिकल रील, सीधे पोस्ट करने लायक',
        'एडिटिंग शामिल, 48 घंटे में Google Drive या WeTransfer से',
        'आगरा में आपके होटल पर मुलाक़ात, गेट खुलने से पहले',
      ],
      faqs: [
        {
          question: 'टिकट शामिल हैं?',
          answer:
            'नहीं। ताजमहल का टिकट अलग लगता है और भारतीय नागरिकों के लिए यह काफ़ी कम होता है; बुकिंग से पहले हम सही रक़म बता देते हैं और लेने में मदद भी करते हैं।',
        },
        {
          question: 'शूट कितने बजे शुरू होता है?',
          answer:
            'मौसम के हिसाब से 5:15 से 6:15 के बीच। उस दिन के सूर्योदय के मुताबिक़ सही समय हम एक दिन पहले बता देते हैं।',
        },
      ],
    },
    {
      planId: 'pre-wedding',
      slug: 'tajmahal-couple-pre-wedding-shoot',
      title: 'ताजमहल कपल और प्री-वेडिंग शूट | $199 से',
      description:
        'ताजमहल पर कपल या प्री-वेडिंग शूट: 200+ हाई-रेज़ोल्यूशन फोटो, 30 एडिटेड फोटो और एक सिनेमैटिक वीडियो। लाइसेंसी फोटोग्राफर, पोज़ की पूरी गाइडेंस।',
      keywords: [
        'ताजमहल कपल शूट',
        'प्री वेडिंग शूट ताजमहल',
        'आगरा प्री वेडिंग फोटोग्राफर',
        'ताजमहल एनिवर्सरी शूट',
      ],
      h1: 'ताजमहल कपल और प्री-वेडिंग शूट',
      answer:
        'कपल शूट दो घंटे या उससे ज़्यादा का होता है और इसमें 200 से ज़्यादा हाई-रेज़ोल्यूशन फोटो, आपकी पसंद के 30 एडिटेड फोटो और एक छोटा सिनेमैटिक वीडियो मिलता है। यह सूर्योदय के समय होता है, शुरू से आख़िर तक पोज़ बताते हुए, और समय व लोकेशन के हिसाब से $199 से शुरू होता है।',
      intro: [
        'जिस जोड़े ने पहले कैमरे के सामने पोज़ नहीं दिया, उसे दूर से शूट किए जाने की नहीं, गाइडेंस की ज़रूरत होती है — कहाँ देखना है, हाथ कहाँ रखना है, कब चलना है। जो फोटो आपको सबसे ज़्यादा पसंद आएँगी, वो आम तौर पर दो पोज़ के बीच की होती हैं।',
        'अगर दूसरा आउटफिट लाते हैं — साड़ी, लहंगा, शेरवानी — तो शूट दो हिस्सों में करते हैं: पहले हौज़ की तरफ़, फिर साइड के आर्च में, जहाँ रोशनी देर तक नरम रहती है।',
      ],
      includes: [
        '200+ हाई-रेज़ोल्यूशन फोटो, सभी दी जाती हैं',
        'आपकी चुनी हुई 30 एडिटेड फोटो',
        'सोशल मीडिया के लिए कटा एक छोटा सिनेमैटिक वीडियो',
        'पूरे शूट में पोज़ की गाइडेंस',
        'दूसरा आउटफिट संभव, उसी हिसाब से रूट',
      ],
      faqs: [
        {
          question: 'सनसेट में शूट हो सकता है?',
          answer:
            'हो सकता है, पर सुबह की रोशनी साफ़ तौर पर बेहतर होती है और भीड़ बहुत कम। अगर शाम ही संभव है तो हम सामने वाले मेहताब बाग़ को चुनते हैं।',
        },
        {
          question: 'कितने पहले बुक करना चाहिए?',
          answer:
            'अक्टूबर से मार्च के सीज़न में दो-तीन हफ़्ते पहले। 20% एडवांस से तारीख़ पक्की हो जाती है।',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-small',
      slug: 'guide-photo-tour-tajmahal-chhota-group',
      title: 'गाइड + फोटो टूर · 1 से 5 लोग | $89 से',
      description:
        'लाइसेंसी गाइड और फोटोग्राफर साथ: ताजमहल, आगरा फोर्ट और मेहताब बाग़, 1 से 5 लोगों के लिए, 40 नैचुरल फोटो और 5 रील। ताजमहल के अंदर गाइड फोटोग्राफर के साथ नहीं जा सकता।',
      keywords: [
        'ताजमहल गाइड और फोटोग्राफर',
        'आगरा गाइड बुकिंग',
        'ताजमहल छोटा ग्रुप टूर',
        'लाइसेंसी गाइड ताजमहल',
      ],
      h1: 'गाइड + फोटोग्राफर टूर · 1 से 5 लोग',
      answer:
        'इस पैकेज में लाइसेंसी गाइड और प्रोफेशनल फोटोग्राफर दोनों आधे दिन के लिए साथ रहते हैं — 1 से 5 लोगों के लिए $89 से — और इसमें ताजमहल, आगरा फोर्ट और मेहताब बाग़ या इत्मादुद्दौला शामिल हैं। ताजमहल के अंदर नियम के मुताबिक गाइड फोटोग्राफर के साथ नहीं जा सकता, इसलिए वहाँ फोटोग्राफर आपके साथ रहता है और गाइड बाकी हर स्मारक पर मिलता है।',
      intro: [
        'ज़्यादातर लोग आगरा से या तो जानकारी लेकर लौटते हैं या फोटो लेकर। यहाँ दोनों मिलते हैं, लगभग उतने में जितना दोनों अलग-अलग लेने पर लगता, और दो बुकिंग संभालने की झंझट के बिना।',
        'चालीस नैचुरल फोटो — जमी हुई पोज़ नहीं — और पाँच रील। गाइड निर्माण, कलमकारी और वो बारीकियाँ बताता है जो अकेले नज़र नहीं आतीं; उसी दौरान फोटोग्राफर आपके साथ चलता रहता है।',
      ],
      includes: [
        'पर्यटन मंत्रालय से लाइसेंस प्राप्त गाइड',
        'आधिकारिक परमिट वाला प्रोफेशनल फोटोग्राफर',
        '40 नैचुरल डिजिटल फोटो और 5 रील',
        'ताजमहल, आगरा फोर्ट और मेहताब बाग़ या इत्मादुद्दौला',
        '20% एडवांस, बाकी टूर के बाद',
      ],
      faqs: [
        {
          question: 'गाइड फोटोग्राफर के साथ अंदर क्यों नहीं जा सकता?',
          answer:
            'यह स्मारक का नियम है: ताजमहल के अंदर काम कर रहे फोटोग्राफर के साथ गाइड नहीं जा सकता। हम यह बुकिंग से पहले बता देते हैं ताकि मौके पर हैरानी न हो।',
        },
        {
          question: 'स्मारक के टिकट शामिल हैं?',
          answer:
            'नहीं, वो अलग लगते हैं। आपकी नागरिकता और लोगों की संख्या के हिसाब से सही रक़म कन्फ़र्म करने से पहले बता देते हैं।',
        },
      ],
    },
    {
      planId: 'guided-photo-tour-large',
      slug: 'guide-photo-tour-tajmahal-bada-group',
      title: 'गाइड + फोटो टूर · 6 से 12 लोग | $119 से',
      description:
        '6 से 12 लोगों के ग्रुप के लिए लाइसेंसी गाइड और फोटोग्राफर: 60 नैचुरल फोटो, 7 रील, ग्रुप फोटो और हर व्यक्ति की अलग फोटो। ताजमहल, आगरा फोर्ट, मेहताब बाग़।',
      keywords: [
        'ताजमहल ग्रुप फोटो टूर',
        'आगरा ग्रुप फोटोग्राफर',
        'फैमिली टूर ताजमहल',
        'ताजमहल ग्रुप फोटो',
      ],
      h1: 'गाइड + फोटोग्राफर टूर · 6 से 12 लोग',
      answer:
        'वही गाइड और फोटोग्राफर वाला पैकेज, 6 से 12 लोगों के लिए — आधे दिन का $119 से। इसमें 60 नैचुरल डिजिटल फोटो और 7 रील मिलती हैं, ग्रुप फोटो के साथ हर व्यक्ति की अलग फोटो भी, और ताजमहल, आगरा फोर्ट तथा मेहताब बाग़ या इत्मादुद्दौला शामिल हैं।',
      intro: [
        'ताजमहल के सामने बारह लोगों को शूट करना शटर दबाने का मामला नहीं है: दो-तीन जगहें ही हैं जहाँ पूरा ग्रुप और पीछे पूरा स्मारक एक ही फ्रेम में आता है, और वहाँ भीड़ से पहले पहुँचना पड़ता है।',
        'पहले ग्रुप फोटो करते हैं, जब रोशनी नीची और रास्ते खाली होते हैं; उसके बाद गाइड की बातचीत के दौरान अलग-अलग और कपल फोटो।',
      ],
      includes: [
        'लाइसेंसी गाइड और प्रोफेशनल फोटोग्राफर',
        '60 नैचुरल डिजिटल फोटो और 7 रील',
        'ग्रुप फोटो और हर व्यक्ति की अलग फोटो',
        'ताजमहल, आगरा फोर्ट और मेहताब बाग़ या इत्मादुद्दौला',
        '20% एडवांस, बाकी टूर के बाद',
      ],
      faqs: [
        {
          question: 'बारह से ज़्यादा लोग हों तो?',
          answer:
            'हो जाता है — ग्रुप के हिसाब से दूसरा फोटोग्राफर या दूसरा गाइड जोड़ देते हैं। सही संख्या बता दीजिए, हम कोट बना देंगे।',
        },
        {
          question: 'गाड़ी शामिल है?',
          answer:
            'इस पैकेज में नहीं। प्राइवेट AC कार या मिनी बस जोड़ सकते हैं: होटल और लोगों की संख्या बता दें, सही रेट बता देंगे।',
        },
      ],
    },
    {
      planId: 'transport-guide',
      slug: 'private-car-guide-agra',
      title: 'आगरा में प्राइवेट कार और लाइसेंसी गाइड (फोटोग्राफी नहीं) | $99 से',
      description:
        'आगरा का एक दिन: प्राइवेट AC कार, ड्राइवर और पर्यटन मंत्रालय से लाइसेंस प्राप्त गाइड, $99 से। ताजमहल, आगरा फोर्ट, इत्मादुद्दौला और मेहताब बाग़। फोटो आप खुद खींचिए।',
      keywords: ['आगरा प्राइवेट कार', 'आगरा गाइड', 'आगरा एक दिन का टूर', 'ताजमहल ड्राइवर'],
      h1: 'आगरा में प्राइवेट कार और गाइड (फोटोग्राफी नहीं)',
      answer:
        'पूरे दिन के लिए प्राइवेट AC कार और ड्राइवर, साथ में पर्यटन मंत्रालय से लाइसेंस प्राप्त गाइड — $99 से। इसमें ताजमहल, आगरा फोर्ट, इत्मादुद्दौला और मेहताब बाग़ शामिल हैं, और होटल, रेलवे स्टेशन या आगरा एयरपोर्ट से पिकअप। फोटोग्राफर नहीं है: फोटो आप खुद खींचते हैं।',
      intro: [
        'बहुत लोग खुद अच्छी फोटो खींच लेते हैं और उन्हें दो ही चीज़ें चाहिए — कोई चलाने वाला और कोई बताने वाला। यह पैकेज बस वही है, फोटोग्राफी का ख़र्च हटाकर।',
        'गाइड को खुलने के समय, लाइन और वो एंगल पता हैं जो आप खींचना चाहेंगे; ड्राइवर हर स्मारक पर इंतज़ार करता है, तो आगरा का दिन धूप में रिक्शा ढूँढ़ने में नहीं जाता।',
      ],
      includes: [
        'पूरे दिन प्राइवेट AC कार और ड्राइवर',
        'पर्यटन मंत्रालय से लाइसेंस प्राप्त गाइड',
        'ताजमहल, आगरा फोर्ट, इत्मादुद्दौला और मेहताब बाग़',
        'होटल, रेलवे स्टेशन या आगरा एयरपोर्ट से पिकअप',
        'बुकिंग से पहले WhatsApp पर सही रेट कन्फ़र्म',
      ],
      faqs: [
        {
          question: 'बाद में फोटोग्राफर जोड़ सकते हैं?',
          answer:
            'हाँ, तारीख़ से पहले कभी भी। तब गाइड + फोटो पैकेज पर आ जाते हैं और रेट उसी हिसाब से बदल जाता है।',
        },
        {
          question: 'दिल्ली से भी हो सकता है?',
          answer:
            'हाँ, पर वो अलग पैकेज है: दिल्ली ↔ आगरा एक दिन, सब शामिल — प्राइवेट गाड़ी, गाइड, फोटोग्राफर और टिकट। कहाँ से चलेंगे, बता दीजिए।',
        },
      ],
    },
  ],
};

/** Services for one locale, or an empty list if that language has none yet. */
export function localeServices(code: LocaleCode): LocaleService[] {
  return LOCALE_SERVICES[code] ?? [];
}

export function localeServiceBySlug(code: LocaleCode, slug: string): LocaleService | undefined {
  return localeServices(code).find((s) => s.slug === slug);
}

/**
 * The same package in every language, for hreflang. Slugs differ per
 * language, so the pages are matched on planId rather than on the URL.
 */
export function serviceAlternates(planId: string, base: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const [code, services] of Object.entries(LOCALE_SERVICES)) {
    const match = services?.find((s) => s.planId === planId);
    if (match) out[code] = `${base}/${code}/${match.slug}`;
  }
  return out;
}
