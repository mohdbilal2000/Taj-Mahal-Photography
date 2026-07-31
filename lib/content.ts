// Shared content data — kept in a non-'use client' module so both server
// components (page JSON-LD) and client components (interactive UI) can import.

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: 'Do photographers need a permit inside the Taj Mahal?',
    answer:
      'Yes. Professional photography inside the Taj Mahal requires a permit issued by the Ministry of Tourism, Government of India. Unlicensed photographers are not allowed to bring professional equipment (such as tripods, external flashes or multiple lenses) past the security gates. As a licensed photographer, I hold the authorized access to shoot inside the complex.',
  },
  {
    question: 'Is photography allowed inside the Taj Mahal?',
    answer:
      'Photography is allowed in the gardens, near the reflecting pool, and around the exterior of the main mausoleum. Photography is strictly prohibited inside the main mausoleum where the cenotaphs of Shah Jahan and Mumtaz Mahal are located. A licensed photographer will guide you to all the legal vantage points for the best shots.',
  },
  {
    question: 'What is the best time of day for Taj Mahal photography?',
    answer:
      'Sunrise is universally the best time. The first golden rays paint the white marble in pink, gold and amber tones, and the crowds are at their thinnest. Late afternoon, about an hour before sunset, is the second best window for warm light. Midday produces harsh shadows and the dome can look washed out.',
  },
  {
    question: 'How much does a Taj Mahal photoshoot cost?',
    answer:
      'Packages start at $49 USD for a 30-minute Quick Capture (30 raw photos). The Sunrise Photoshoot is $99 for a 1-hour session with 50 high-resolution photos. Pre-Wedding and Couple sessions are $199. Family is $299. Heritage Trail (Taj + Agra Fort) is $399. Full Day Agra is $499. The customisable Transport + Guide combo (private car + licensed guide, no photography) starts from $100 depending on your cities and days. Same-day Sunrise Luxury Tours from Delhi start from $650 (private Innova) and from $899 (Force Urbania luxury coach); exact quotes are confirmed on WhatsApp. All photography packages include the official permit; the luxury tours additionally include monument tickets and a private golf cart.',
  },
  {
    question: 'How do I book a Taj Mahal photographer?',
    answer:
      'Submit the inquiry form on this website or message us on WhatsApp at +91 83930 10125. We confirm availability within 10 minutes during business hours. Because permits are limited to 2 shoots per day, we recommend booking 2 to 3 weeks ahead for peak season (October to March).',
  },
  {
    question: 'When will we receive our photos?',
    answer:
      'A private online gallery with your high-resolution photos is delivered within 48 to 72 hours after the session. Pre-Wedding packages also include 50 printed photographs and a 30-second cinematic video.',
  },
  {
    question: 'What should I wear for a Taj Mahal photoshoot?',
    answer:
      'Bold, saturated colors such as red, emerald green, royal blue and gold photograph best against the white marble. Avoid pure white outfits — they blend with the monument. Flowy fabrics like sarees, lehengas, maxi dresses and dupattas add motion. Comfortable shoes are essential because the complex covers a large area.',
  },
  {
    question: 'Is the Taj Mahal open on Fridays?',
    answer:
      'No. The Taj Mahal is closed to visitors every Friday for prayers at the mosque inside the complex. Plan your photography session for any other day of the week.',
  },
  {
    question: 'Can you do a same-day Taj Mahal tour from Delhi?',
    answer:
      'Yes. Our Sunrise Luxury Tour (from $650 in a private Toyota Innova for up to 6 guests) and Sunrise Luxury Urbania Tour (from $899 in a private Force Urbania luxury coach for up to 13 guests) both depart from Delhi/NCR around 2:30 AM, reach Agra for sunrise at the Taj Mahal, cover the Agra Fort, include monument tickets, a Ministry of Tourism licensed guide and photographer, a private golf cart inside the Taj complex, and a security escort to skip the entry line. Drop-off in Delhi/NCR is around 7–8 PM.',
  },
  {
    question: 'What is included in the Sunrise Luxury Tour from Delhi?',
    answer:
      'Round-trip private vehicle from Delhi/NCR, a Ministry of Tourism licensed tour guide, a Ministry of Tourism licensed photographer, Taj Mahal and Agra Fort monument tickets, a private golf cart inside the Taj Mahal complex, and a security escort that lets you skip the queue. Pickup and drop are available from Delhi, Noida, Gurugram, Ghaziabad and Faridabad.',
  },
  {
    question: 'How many people can join the Force Urbania luxury tour?',
    answer:
      'The Force Urbania is a 13-seater luxury coach with reclining seats, A/C and Wi-Fi, so the Sunrise Luxury Urbania tour (from $899) comfortably accommodates families and groups of up to 13 guests.',
  },
  {
    question: 'How far is Delhi from the Taj Mahal in Agra?',
    answer:
      'Agra is about 230 km (143 miles) south-east of Delhi. On the Yamuna Expressway the drive takes roughly 3 to 3.5 hours each way, which is why a same-day sunrise tour leaves Delhi at around 2:30 AM and returns by early evening.',
  },
  {
    question: 'Is photography allowed at Agra Fort?',
    answer:
      'Yes. Professional photography is allowed throughout most of Agra Fort, including the Diwan-i-Khas, Sheesh Mahal exteriors, Musamman Burj (where Shah Jahan was imprisoned), and the famous balconies that frame the Taj Mahal in the distance.',
  },
  {
    question: 'What camera equipment do you use?',
    answer:
      'I shoot with full-frame mirrorless and DSLR bodies paired with professional prime lenses (35mm, 50mm and 85mm) plus a versatile 24-70mm zoom. As a licensed photographer I am authorized to bring this equipment inside the Taj Mahal — unlicensed photographers are stopped at the gate for the same gear.',
  },
  {
    question: 'Are monument entry tickets included in the photography packages?',
    answer:
      'Monument entry tickets are not included in the standalone photography packages ($49 to $499). They ARE included in both Sunrise Luxury Tours from Delhi (from $650 and from $899). Foreign-national tickets to the Taj Mahal currently cost ₹1,300 plus ₹200 for the main mausoleum.',
  },
  {
    question: 'Do you offer pre-wedding photography at the Taj Mahal?',
    answer:
      'Yes. Our Pre-Wedding and Couple package ($199) is a 2+ hour editorial-style session that includes 100+ high-resolution natural photos, 50 printed photographs, a 30-second cinematic video, and posing direction. It is one of our most popular packages alongside the sunrise session.',
  },
  {
    question: 'Do you have a budget package that combines a guide and a photographer?',
    answer:
      'Yes. Our Guided Tour + Photo combo covers both the Taj Mahal and Agra Fort with a licensed local guide and a professional photographer at a single fixed price. The small-group package is $79 USD for up to 5 guests (couples or small families), and the large-group package is $99 USD for groups of 6 to 12 guests. Both include 30 natural high-resolution digital photos plus 30 premium printed photo copies. Monument entry tickets are not included.',
  },
  {
    question: 'Do you provide transport within Agra with a photographer or guide?',
    answer:
      'Yes. Our Transport + Guide combo pairs a private air-conditioned car and chauffeur with a Ministry of Tourism licensed guide, starting from $100 USD. You choose the cities — Agra, Delhi, Jaipur, Mathura-Vrindavan — and the number of days, and we confirm one clear all-in quote on WhatsApp before you book. No photographer is included, so it suits travellers who shoot their own photos; if you want professional photos, choose a Guided Tour + Photo combo ($79 / $99) instead. Monument entry tickets are not included.',
  },
];

export type Testimonial = {
  name: string;
  country: string;
  text: string;
  rating: number;
  datePublished: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah & James',
    country: 'United Kingdom',
    text: 'Booking a licensed photographer was the best decision we made. He knew exactly where to go to avoid the crowds and the photos are breathtaking. Security checked his badge at the gate and we walked right in with all the gear.',
    rating: 5,
    datePublished: '2026-02-12',
  },
  {
    name: 'Elena Rossi',
    country: 'Italy',
    text: 'Absolutely professional and highly skilled. The sunrise shoot was magical. He guided us on poses and made us feel so comfortable. The final edited pictures were delivered the next day!',
    rating: 5,
    datePublished: '2026-01-28',
  },
  {
    name: 'Michael Chen',
    country: 'United States',
    text: "I was worried about the strict photography rules I read about online. Having an official permit holder meant zero stress. He's a true artist and captured our proposal perfectly.",
    rating: 5,
    datePublished: '2025-12-19',
  },
];
