import type { BlogPost } from './blog';

/**
 * Guías en español, escritas para quien viaja desde México y Latinoamérica.
 *
 * They live outside POSTS on purpose: POSTS drives the English blog, its
 * index, its related-reading and its feeds, and a Spanish guide appearing
 * in those would be noise. Each one names its English twin (`enSlug`) so the
 * two pages can point at each other with hreflang. Sources and the studio
 * pitch follow the English twin; the words are written for the reader, not
 * translated line by line.
 */

export type EsGuide = BlogPost & { enSlug: string };

const FECHA = '2026-11-27';
const EQUIPO = 'Equipo editorial de Taj Mahal Photography';

const pitch = (heading: string, intro: string, whatsappText: string) => ({
  heading,
  body: [
    intro,
    'Somos un equipo de fotografía con licencia del Ministerio de Turismo en Agra. El equipo profesional dentro del Taj Mahal necesita un permiso que solo puede tener un fotógrafo con licencia, así que nosotros lo gestionamos, te recibimos en tu hotel y entregamos las fotos editadas en 48 a 72 horas. Escríbenos tus fechas y te respondemos por WhatsApp con un precio fijo.',
  ],
  whatsappText,
});

export const ES_GUIDES: EsGuide[] = [
  {
    enSlug: 'india-photography-trip-from-mexico',
    slug: 'viaje-fotografico-a-la-india-desde-mexico',
    title: 'Viaje de fotografía a la India desde México: guía completa',
    seoTitle: 'Viaje a la India desde México: guía para fotografiar el Taj Mahal',
    seoDescription:
      'Vuelos con escala, diferencia horaria, mejor época, reglas del Taj Mahal y cómo contratar un fotógrafo con licencia. Guía para viajeros de México y Latinoamérica.',
    excerpt:
      'Vuelos con escala, diferencia horaria, mejor época, reglas del Taj Mahal y cómo reservar un fotógrafo con licencia, pensado para quien viaja desde México.',
    answer:
      'No hay vuelo directo de la Ciudad de México a Delhi, así que planea al menos una escala y unas 21 horas o más de viaje en total. La India va unas 11 horas y media por delante de la Ciudad de México, por eso conviene llegar un día antes. La mejor temporada para el Taj Mahal es de octubre a marzo, el monumento cierra los viernes y el equipo profesional de fotografía necesita un permiso que solo puede tener un fotógrafo con licencia. Revisa los requisitos de visa en el portal oficial del gobierno de la India antes de reservar.',
    published: FECHA,
    updated: FECHA,
    readingMinutes: 7,
    image: '/photos/gallery/05.jpg',
    imageAlt: 'Una pareja en el césped con el Taj Mahal detrás, el tipo de foto que piden los viajeros mexicanos',
    category: 'India from abroad',
    byline: EQUIPO,
    keywords: [
      'viaje a la india desde mexico',
      'fotografo taj mahal en español',
      'sesion de fotos taj mahal',
      'taj mahal desde mexico',
      'como llegar al taj mahal desde mexico',
    ],
    planIds: ['sunrise', 'romantic-couple-shoot', 'pre-wedding'],
    sections: [
      {
        heading: 'Cómo llegar',
        body: [
          'Hoy no hay vuelo sin escalas entre la Ciudad de México y Delhi, así que tendrás al menos una conexión, normalmente por Europa, el Golfo o Norteamérica. El viaje suele durar unas 21 horas o más según la escala. Compara el tiempo total y no solo el precio.',
          'De Delhi a Agra hay unos 200 a 230 kilómetros. Lo más cómodo es un coche privado (tres a cuatro horas) o el tren rápido (alrededor de dos horas). Después de un viaje largo, que te recojan en el hotel es lo más fácil.',
        ],
      },
      {
        heading: 'Diferencia horaria',
        body: [
          'La India usa la hora estándar UTC+5:30 y no cambia con las estaciones. La Ciudad de México está en UTC−6 todo el año desde que se eliminó el horario de verano, así que la India va unas 11 horas y media adelante. Los primeros días cuestan. Llega al menos un día antes de cualquier sesión al amanecer.',
        ],
      },
      {
        heading: 'Cuándo ir',
        body: [
          'De octubre a marzo es la temporada buena: más fresco, mañanas despejadas y mejores condiciones para fotografiar. En diciembre y enero puede haber niebla en el norte de la India. De abril a junio hace mucho calor y de julio a septiembre es temporada de lluvias.',
          'El Taj Mahal cierra los viernes. Tenlo en cuenta al elegir fechas.',
        ],
      },
      {
        heading: 'Lo que te va a resultar familiar',
        body: [
          'Muchos viajeros mexicanos notan algo conocido en la India: las guirnaldas de caléndula que recuerdan al cempasúchil del Día de Muertos, el color saturado, las familias reunidas para celebrar. Quizá por eso la India se siente menos lejana de lo que uno espera.',
        ],
      },
      {
        heading: 'Visa, dinero y revisiones prácticas',
        list: [
          'Revisa los requisitos de visa y de entrada para tu pasaporte en el portal oficial del gobierno de la India. Los requisitos, las tarifas y los tiempos cambian.',
          'Aceptamos UPI, transferencia, tarjeta o PayPal para reservar, y el saldo se puede pagar en rupias, dólares, euros o libras.',
          'Reserva tu sesión al amanecer antes de volar. Las semanas de más demanda se llenan primero.',
          'Escríbenos en español por WhatsApp: tenemos una página en español en tajmahalphotography.com/es.',
        ],
      },
      {
        heading: 'Fotografiar el Taj Mahal: reglas básicas',
        body: [
          'Con el celular o una cámara pequeña no necesitas permiso. Los trípodes, varios lentes y el flash externo cuentan como equipo profesional y requieren un permiso del Ministerio de Turismo, que solo puede tener un fotógrafo con licencia. Dentro del mausoleo principal no se puede fotografiar, y las entradas al monumento no están incluidas en nuestros paquetes.',
        ],
      },
    ],
    faqs: [
      { question: '¿Hay vuelos directos de México a la India?', answer: 'Hoy no hay vuelo sin escalas entre la Ciudad de México y Delhi. Planea al menos una conexión y compara el tiempo total de viaje.' },
      { question: '¿Necesito visa para viajar a la India desde México?', answer: 'Revisa el portal oficial del gobierno de la India para tu pasaporte, porque los requisitos y las tarifas cambian.' },
      { question: '¿Cuál es la mejor época para fotografiar el Taj Mahal?', answer: 'De octubre a marzo hay mejor clima y mejor luz. En diciembre y enero puede haber niebla por la mañana.' },
      { question: '¿Puedo contratar un fotógrafo que hable español?', answer: 'Nos comunicamos en inglés y tenemos una página en español. Escríbenos por WhatsApp y te ayudamos a planear tu viaje.' },
    ],
    pitch: pitch(
      'Tu sesión de fotos en el Taj Mahal, bien planeada',
      'Damos la bienvenida a viajeros de México y Latinoamérica. Planeamos el amanecer, gestionamos el permiso y te entregamos las fotos editadas en 48 a 72 horas.',
      'Hola, viajo desde México a la India y quiero una sesión de fotos en el Taj Mahal. Mis fechas son:',
    ),
  },
  {
    enSlug: 'best-photography-locations-mexico',
    slug: 'mejores-lugares-para-fotografiar-en-mexico',
    title: 'Los mejores lugares para fotografiar en México: color, ruinas y cenotes',
    seoTitle: 'Mejores lugares para fotografiar en México: guía por temporada',
    seoDescription:
      'Guanajuato, San Miguel de Allende, Chichén Itzá, cenotes, Oaxaca y Día de Muertos: dónde y cuándo fotografiar cada lugar y qué reglas confirmar antes de ir.',
    excerpt:
      'Ocho lugares de México que los fotógrafos buscan una y otra vez, desde las casas de colores de Guanajuato hasta los cenotes cerca de Valladolid, y cómo captarlos con la mejor luz.',
    answer:
      'Lo mejor de México para fotografiar es el color y el contraste: las calles de Guanajuato, la parroquia rosa de San Miguel de Allende, Chichén Itzá a la hora de apertura, los cenotes cerca de Valladolid, Hierve el Agua en Oaxaca, los canales de Xochimilco, Palenque entre la niebla de la selva y el Día de Muertos en Pátzcuaro. Para las ruinas ve a la hora de apertura y planea el Día de Muertos (1 y 2 de noviembre) con meses de anticipación.',
    published: FECHA,
    updated: FECHA,
    readingMinutes: 7,
    image: '/photos/gallery/07.jpg',
    imageAlt: 'Una pareja con ropa tradicional frente al Taj Mahal, el color que los fotógrafos mexicanos reconocen',
    category: 'World locations',
    byline: EQUIPO,
    keywords: [
      'mejores lugares para fotografiar en mexico',
      'fotografia de viaje mexico',
      'chichen itza fotografia',
      'dia de muertos fotografia',
      'cenotes fotografia',
    ],
    planIds: ['sunrise', 'romantic-couple-shoot'],
    sections: [
      {
        heading: 'Cómo se hizo esta guía',
        body: [
          'Una nota honesta: nosotros fotografiamos en Agra, no aquí. Esta es una guía de planeación basada en lo que cada lugar ofrece y en cómo funciona el acceso, no un diario de nuestras sesiones. Las reservas, los cierres y las tarifas cambian, así que confirma cada regla con la fuente oficial antes de viajar.',
        ],
      },
      {
        heading: 'Los lugares',
        table: {
          head: ['Lugar', 'Qué debes saber'],
          rows: [
            ['Guanajuato', 'Casas de colores apiladas en la ladera y callejones angostos. Sube a un mirador antes del amanecer y baja a los callejones mientras la luz es suave.'],
            ['San Miguel de Allende', 'La parroquia neogótica contra calles de piedra cálida. De madrugada hay menos gente; la hora azul da la mejor imagen.'],
            ['Chichén Itzá (Yucatán)', 'La pirámide de El Castillo. Llega a la hora de apertura: hay menos gente y la luz es más suave. No se puede subir a la pirámide, y el equipo profesional puede requerir autorización.'],
            ['Cenotes cerca de Valladolid y Tulum', 'Cenotes con rayos de luz al mediodía y agua turquesa oscura. Revisa las reglas de cada sitio sobre trípodes y cámaras profesionales.'],
            ['Hierve el Agua (Oaxaca)', 'Cascadas petrificadas y vistas del valle. Ve temprano o al final de la tarde para evitar la multitud.'],
            ['Xochimilco y Coyoacán (Ciudad de México)', 'Las trajineras de colores y la Casa Azul. Entre semana por la mañana hay más calma.'],
            ['Palenque (Chiapas)', 'Templos mayas en plena selva, mejores con la neblina temprana. Lleva un paño para el lente.'],
            ['Pátzcuaro y Janitzio (Michoacán)', 'Día de Muertos, el 1 y 2 de noviembre: velas, cempasúchil y velaciones nocturnas. Sé respetuoso, pide permiso antes de fotografiar a las personas y planea el viaje con meses de anticipación.'],
          ],
        },
      },
      {
        heading: 'Cómo conseguir la foto y no la postal',
        list: [
          'Usa el color, pero déjalo respirar. Un color fuerte en el encuadre funciona mejor que una pared llena de colores.',
          'Fotografía las ruinas a la hora de apertura, antes de la calina y de la multitud.',
          'En las fiestas, pide permiso y pasa un rato sin sacar la cámara. La confianza es la foto.',
          'Protege el equipo de la humedad y el polvo. Una bolsa sellada y gel de sílice salvan más viajes que un lente nuevo.',
        ],
      },
      {
        heading: 'Temporadas y planeación',
        list: [
          'De noviembre a abril es la temporada más seca y cómoda en gran parte del país.',
          'El Día de Muertos es el 1 y 2 de noviembre: reserva hospedaje con tiempo.',
          'En verano hay tormentas por la tarde en muchas regiones: dan luz dramática, pero piden planes flexibles.',
        ],
      },
      {
        heading: 'Reglas que debes confirmar antes de ir',
        list: [
          'Algunas zonas arqueológicas cobran aparte por video o equipo profesional. Revisa las reglas del propio sitio.',
          'Respeta las costumbres locales, sobre todo en eventos religiosos y familiares.',
          'El uso de drones está restringido en muchos sitios y requiere permiso.',
        ],
      },
      {
        heading: 'Si tu ruta continúa hacia la India',
        body: [
          'Quien conoce el color de México suele reconocerlo en la India: las guirnaldas de caléndula, la fiesta, las familias. Si planeas ir, el Taj Mahal al amanecer es un primer encuadre natural.',
        ],
      },
    ],
    faqs: [
      { question: '¿Cuáles son los mejores lugares para fotografiar en México?', answer: 'Guanajuato, San Miguel de Allende, Chichén Itzá, los cenotes de Yucatán, Hierve el Agua, Xochimilco, Palenque y Pátzcuaro durante el Día de Muertos están entre los más fotografiados.' },
      { question: '¿Necesito permiso para fotografiar en Chichén Itzá?', answer: 'Con el celular o una cámara casual no. Los trípodes, el equipo profesional y el trabajo comercial pueden requerir autorización, así que consulta las reglas vigentes del sitio.' },
      { question: '¿Cuándo es el mejor momento para fotografiar el Día de Muertos?', answer: 'Las noches principales son el 1 y 2 de noviembre. Llega unos días antes para adaptarte y pide permiso antes de fotografiar a las personas.' },
    ],
    pitch: pitch(
      '¿Viajas a la India? Fotografía el Taj Mahal con nosotros',
      'Si tu viaje incluye la India, planeamos el amanecer y gestionamos el permiso por ti.',
      'Hola, viajo desde México y quiero una sesión de fotos en el Taj Mahal. Mis fechas son:',
    ),
  },
  {
    enSlug: 'taj-mahal-photographer-cost',
    slug: 'cuanto-cuesta-un-fotografo-en-el-taj-mahal',
    title: '¿Cuánto cuesta un fotógrafo en el Taj Mahal en 2026?',
    seoTitle: 'Cuánto cuesta un fotógrafo en el Taj Mahal 2026: desde 99 USD',
    seoDescription:
      'Precios reales de una sesión de fotos en el Taj Mahal en 2026: de 89 a 499 USD, qué incluye cada paquete, qué se paga aparte y cómo evitar el presupuesto barato que sale caro.',
    excerpt:
      'Los precios reales de cada tipo de sesión, qué incluyen, qué se cobra aparte y las tres formas en que un presupuesto barato sale caro en la puerta.',
    answer:
      'Un fotógrafo profesional en el Taj Mahal cuesta entre 89 y 499 USD según el paquete. Una sesión individual de una hora cuesta desde 99 USD, la sesión al amanecer son 120 USD con más de 120 fotos, una sesión romántica de pareja son 200 USD, la de preboda parte de 199 USD, guía y fotógrafo juntos desde 89 USD para hasta cinco personas, y un día completo en el Taj Mahal, el Fuerte de Agra y el atardecer son 499 USD. Las entradas al monumento siempre se pagan aparte y las fija el Archaeological Survey of India, no el fotógrafo.',
    published: FECHA,
    updated: FECHA,
    readingMinutes: 7,
    image: '/photos/gallery/03.jpg',
    imageAlt: 'Una persona fotografiada sobre la plataforma de mármol del Taj Mahal con la luz de la mañana',
    category: 'Planning',
    byline: EQUIPO,
    keywords: [
      'cuanto cuesta un fotografo en el taj mahal',
      'precio sesion de fotos taj mahal',
      'fotografo taj mahal precio',
      'sesion de fotos en agra',
      'paquete fotografico taj mahal',
    ],
    planIds: ['solo-photoshoot', 'sunrise', 'romantic-couple-shoot'],
    sections: [
      {
        heading: 'Cuánto cuesta cada paquete',
        body: [
          'Estos son los precios publicados, los mismos que damos por WhatsApp. Están en dólares porque es lo que la mayoría de los huéspedes pregunta; el precio en rupias aparece en cada página al tipo de cambio del momento y puedes pagar en cualquiera de las dos monedas.',
        ],
        table: {
          head: ['Paquete', 'Precio y qué incluye'],
          rows: [
            ['Sesión individual · 1 hora', 'Desde 99 USD: 60+ fotos editadas y 2 reels, el fotógrafo te recibe en tu hotel'],
            ['Sesión al amanecer · 1.5–2 horas', '120 USD: más de 120 fotos en alta resolución, 3–5 reels, el fotógrafo te recibe en tu hotel'],
            ['Sesión romántica de pareja · 2 horas', '200 USD: 150+ fotos editadas y 5 reels'],
            ['Pareja / preboda · 2+ horas', 'Desde 199 USD: 200+ fotos, 30 editadas a tu elección y un video cinematográfico'],
            ['Guía + fotógrafo · 1–5 personas', 'Desde 89 USD: guía con licencia y fotógrafo, 40 fotos, 5 reels, medio día'],
            ['Guía + fotógrafo · 6–12 personas', 'Desde 119 USD: 60 fotos, 7 reels, retratos de grupo e individuales'],
            ['Transporte + guía, sin fotografía', 'Desde 99 USD: coche privado con A/C, chofer y guía con licencia todo el día'],
            ['Taj Mahal + Fuerte de Agra · 5 horas', '399 USD: los dos sitios de la UNESCO, 250+ fotos, transporte incluido'],
            ['Día completo en Agra · 8–10 horas', '499 USD: Taj Mahal, Fuerte de Agra y el atardecer por detrás, 350+ fotos'],
          ],
        },
      },
      {
        heading: 'Qué incluye la tarifa',
        body: [
          'Todos los paquetes de fotografía incluyen lo más difícil de conseguir: un fotógrafo con el permiso del Ministerio de Turismo, que es lo que permite pasar el equipo profesional por el control de seguridad. Sin él, un trípode y un segundo lente se quedan en la banda de rayos X sin importar quién los lleve.',
        ],
        list: [
          'El tiempo del fotógrafo durante la duración indicada',
          'El permiso oficial de fotografía y el equipo que lo acompaña',
          'Edición y entrega del set completo en 48 a 72 horas',
          'Recortes verticales para reels, porque es lo primero que la mayoría publica',
          'Dirección de poses durante toda la sesión: nadie se queda sin saber qué hacer con las manos',
        ],
      },
      {
        heading: 'Qué se cobra aparte y por qué',
        body: [
          'Las entradas al monumento no están en el precio, y ningún operador honesto las incluye en una tarifa fija: el Archaeological Survey of India cobra montos distintos a ciudadanos indios, a nacionales de SAARC y a todos los demás, y hace falta una entrada adicional para subir a la plataforma del mausoleo principal.',
          'El transporte es aparte en la sesión al amanecer. El fotógrafo te recibe en la recepción de tu hotel y tú recorres la corta distancia hasta la puerta; la mayoría de los hoteles de Taj Ganj están a pie o a pocos minutos en auto-rickshaw. Los paquetes que incluyen vehículo lo dicen.',
        ],
        list: [
          'La entrada al Taj Mahal: depende de tu nacionalidad y se confirma antes de reservar',
          'La entrada adicional al mausoleo, si quieres fotos sobre la plataforma',
          'Las entradas al Fuerte de Agra y a otros monumentos en los paquetes de varios sitios',
          'El vehículo, solo en la sesión al amanecer',
        ],
      },
      {
        heading: 'Cómo un presupuesto barato sale caro',
        body: ['En Agra sobran las ofertas de 20 dólares fuera de la puerta. Cuestan más de lo que parecen, de tres maneras predecibles.'],
        list: [
          'Sin permiso: el equipo es rechazado en seguridad, así que recibes fotos de celular a precio de profesional o la sesión se hace fuera del complejo',
          'Vistas previas con marca de agua: la cotización cubre unas pocas imágenes y el set completo se vende después, casi siempre por más que la tarifa original',
          'Entrada inflada: la entrada va "incluida" al doble o triple de la tarifa del ASI, que es donde estaba el margen desde el principio',
        ],
      },
      {
        heading: 'Cómo es una reserva justa',
        body: [
          'El 20 % confirma la fecha y el saldo se paga después de la sesión, en efectivo o por transferencia, en dólares o rupias. Antes de pagar nada deberías tener el número de licencia del fotógrafo, el monto exacto de la entrada para tu nacionalidad y una confirmación por escrito de cuántas fotos recibirás y cuándo.',
          'Si cualquiera de esas tres cosas es vaga, es lo que hay que resolver antes del depósito, no después.',
        ],
      },
    ],
    faqs: [
      { question: '¿El precio es por persona o por grupo?', answer: 'Es por reserva, no por persona. Una sesión al amanecer de 120 USD cubre a un viajero solo, a una pareja o a una familia por el mismo precio. Los paquetes de guía y fotógrafo cambian a partir de seis personas porque los retratos de grupo requieren más tiempo.' },
      { question: '¿Cobran más por una sesión de preboda?', answer: 'Sí, y la razón es lo que se entrega, no la ocasión: una sesión de pareja dura más, incluye 30 fotos editadas a tu elección y un video cinematográfico, y suele cubrir un segundo cambio de ropa.' },
      { question: '¿Puedo pagar en rupias?', answer: 'Sí. Todos los precios del sitio pueden verse en rupias al tipo de cambio del momento, y puedes pagar por UPI, transferencia o efectivo en cualquiera de las dos monedas.' },
      { question: '¿Hay una opción más barata si solo quiero unas pocas fotos?', answer: 'La sesión individual desde 99 USD es el punto de entrada. Por debajo de eso, la respuesta honesta es un celular y buena luz, y para eso sirve la guía de horarios de este sitio.' },
    ],
    pitch: pitch(
      'Un precio fijo, sin sorpresas en la puerta',
      'Cuéntanos tus fechas y qué tipo de sesión quieres. Te respondemos por WhatsApp con un precio fijo, el monto exacto de la entrada para tu nacionalidad y el número de licencia del fotógrafo.',
      'Hola, quiero cotizar una sesión de fotos en el Taj Mahal. Mis fechas son:',
    ),
  },
  {
    enSlug: 'what-to-wear-taj-mahal-photoshoot',
    slug: 'que-ponerse-en-el-taj-mahal-sesion-de-fotos',
    title: 'Qué ponerse para una sesión de fotos en el Taj Mahal',
    seoTitle: 'Qué ponerse en el Taj Mahal: mejores colores y código de vestimenta',
    seoDescription:
      'Los mejores colores para tus fotos en el Taj Mahal, qué evitar frente al mármol blanco y qué debes saber sobre el código de vestimenta y los cubrezapatos.',
    excerpt:
      'El mármol es blanco, la luz es fuerte y la caminata es larga. Qué se ve precioso frente al Taj Mahal y qué arruina la foto sin que lo notes.',
    answer:
      'El color fuerte y saturado se ve mejor contra el mármol blanco del Taj Mahal: rojo intenso, mostaza, esmeralda, azul rey. Evita el blanco y el crema claro, que desaparecen en el monumento, y los estampados pequeños y recargados, que se vuelven ruido a distancia. Una tela con caída que capte el movimiento vale más en estas fotos que cualquier logotipo o adorno.',
    published: FECHA,
    updated: FECHA,
    readingMinutes: 5,
    image: '/photos/gallery/07.jpg',
    imageAlt: 'Una pareja con ropa tradicional fotografiada frente al Taj Mahal',
    category: 'Planning',
    byline: EQUIPO,
    keywords: [
      'que ponerse en el taj mahal',
      'ropa para sesion de fotos taj mahal',
      'mejores colores para el taj mahal',
      'codigo de vestimenta taj mahal',
      'outfit taj mahal',
    ],
    planIds: ['romantic-couple-shoot', 'sunrise'],
    sections: [
      {
        heading: 'El color lo decide todo',
        body: [
          'Todo lo que hay detrás de ti es blanco y el cielo de la mañana es pálido. Cualquier prenda clara compite con eso y pierde: la ropa crema y blanca se ve como una mancha contra el mármol, por bonita que sea en persona.',
          'El color saturado hace lo contrario. El rojo, la mostaza, el esmeralda, el azul rey y el negro se separan limpiamente del fondo, y por eso aparecen en casi todas las fotos de este sitio que la gente quiere repetir.',
        ],
      },
      {
        heading: 'Qué funciona y por qué',
        list: [
          'Rojo intenso o granate: el favorito en el Taj por una razón',
          'Mostaza y ocre: cálidos y preciosos con la luz de la mañana',
          'Esmeralda, verde azulado y azul rey: mucho contraste, sin chocar con el mármol',
          'Tela con caída: un dupatta, una falda larga, la punta de un sari que capte el viento',
          'Un color fuerte por persona en lugar de dos que compitan',
        ],
      },
      {
        heading: 'Qué dejar en la maleta',
        list: [
          'Blanco, marfil y crema claro: desaparecen en el monumento',
          'Estampados pequeños y recargados: se vuelven ruido visual a pocos metros',
          'Logotipos grandes, que fechan una foto al instante',
          'Zapatos nuevos: el complejo implica una caminata larga sobre mármol y piedra',
        ],
      },
      {
        heading: 'Lo práctico que nadie cuenta',
        body: [
          'En la plataforma de mármol se usan cubrezapatos, y van encima de lo que lleves puesto, así que los tacones son peor idea de lo que parece. Las mañanas de noviembre a febrero son realmente frías antes de que salga el sol, y un chal que puedas soltar fuera del encuadre se agradece.',
          'El cambio de ropa se hace fuera de las puertas, no dentro. Si planeas dos looks, incluye ese trayecto en tus tiempos en lugar de descubrirlo el día de la sesión.',
        ],
      },
    ],
    faqs: [
      { question: '¿Qué color debo llevar para una sesión de fotos en el Taj Mahal?', answer: 'Un color fuerte y saturado: rojo intenso, mostaza, esmeralda o azul rey. Se separan limpiamente del mármol blanco. Evita el blanco y el crema claro, que desaparecen en el monumento.' },
      { question: '¿Puedo cambiarme de ropa en el Taj Mahal?', answer: 'No dentro del complejo. El cambio de ropa se hace fuera de las puertas, así que incluye ese trayecto en tus tiempos si quieres más de un look.' },
      { question: '¿Hay código de vestimenta en el Taj Mahal?', answer: 'No hay un código estricto, pero es un mausoleo y se recomienda vestir con recato. En la plataforma principal de mármol se usan cubrezapatos.' },
    ],
    pitch: pitch(
      'Llega vestido para la foto, el resto lo hacemos nosotros',
      'Si nos cuentas tus fechas y tus colores, te ayudamos a elegir el mejor look y la mejor hora de luz para tu sesión.',
      'Hola, quiero una sesión de fotos en el Taj Mahal y me gustaría que me ayuden con el outfit. Mis fechas son:',
    ),
  },
];

export const esGuideBySlug = (slug: string) => ES_GUIDES.find((g) => g.slug === slug);
export const esTwinOf = (enSlug: string) => ES_GUIDES.find((g) => g.enSlug === enSlug);

/** Spanish labels for the English category names the shared type uses. */
export const ES_CATEGORY: Record<string, string> = {
  'India from abroad': 'Viajar a la India',
  'World locations': 'Lugares del mundo',
  Planning: 'Planeación',
};
