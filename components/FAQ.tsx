'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do photographers need a permit inside the Taj Mahal?",
    answer: "Yes, professional photography inside the Taj Mahal requires a specific government permit. Unlicensed photographers are not allowed to bring professional equipment (like tripods or multiple lenses) and are often stopped by security. As a licensed photographer, I have the authorized access needed."
  },
  {
    question: "Is photography allowed inside the Taj Mahal?",
    answer: "Photography is allowed in the gardens and exterior areas of the Taj Mahal. However, photography is strictly prohibited inside the main mausoleum (where the tombs are located). I will guide you to all the best legal spots for stunning photos."
  },
  {
    question: "What is the best time for Taj Mahal photography?",
    answer: "Sunrise is universally considered the best time. The lighting is soft and magical, the marble reflects beautiful pink and golden hues, and the crowds are significantly smaller. Late afternoon before sunset is the second best option."
  },
  {
    question: "How do I book your services?",
    answer: "You can book by filling out the inquiry form on this website or contacting me directly via WhatsApp. Due to limited daily permits, I recommend booking at least 2-3 weeks in advance, especially during peak tourist season (October to March)."
  },
  {
    question: "When will we receive our photos?",
    answer: "You will receive a link to a private online gallery with your high-resolution, professionally edited photos within 48-72 hours after the shoot."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-marble-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-ink-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about photography at the Taj Mahal.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-marble-200 rounded-sm overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-ink-900 pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
