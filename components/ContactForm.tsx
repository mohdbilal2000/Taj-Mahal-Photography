'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Send, CheckCircle, MessageCircle, Clock } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const nationality = formData.get('nationality') as string;
    const whatsapp = formData.get('whatsapp') as string;
    const date = formData.get('date') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    const text = [
      `*New Booking Inquiry – Taj Mahal Photography*`,
      ``,
      `*Name:* ${name}`,
      `*Nationality:* ${nationality}`,
      `*WhatsApp:* ${whatsapp}`,
      `*Preferred Date:* ${date}`,
      `*Service:* ${service}`,
      `*Additional Details:* ${message || 'None'}`,
    ].join('\n');

    const waUrl = `https://wa.me/918393010125?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setStatus('success');
      window.open(waUrl, '_blank');
    }, 800);
  };

  const leftColumnVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const rightColumnVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 bg-ink-900 text-white" id="book">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT COLUMN - Info Side */}
          <div>
            <motion.span
              className="text-gold-400 text-sm font-bold tracking-widest uppercase mb-2 block"
              variants={leftColumnVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={0}
            >
              Secure Your Date
            </motion.span>

            <motion.h2
              className="font-serif text-4xl md:text-5xl font-semibold mb-6"
              variants={leftColumnVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={1}
            >
              Book Your Authorized Photoshoot
            </motion.h2>

            <motion.p
              className="text-gray-300 mb-8 text-lg"
              variants={leftColumnVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={2}
            >
              Due to government regulations, I can only take a limited number of
              clients per day. Please inquire early to secure your preferred date
              and time.
            </motion.p>

            <motion.div
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg mb-8"
              variants={leftColumnVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={3}
            >
              <div className="flex items-center gap-3 mb-2">
                <MessageCircle className="w-5 h-5 text-gold-400" />
                <h3 className="font-serif text-xl font-semibold text-gold-400">
                  Limited Daily Permits
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                To maintain the quality of experience and adhere to monument
                guidelines, I accept maximum 2 shoots per day (Sunrise and
                Sunset).
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-sm text-gray-400 italic"
              variants={leftColumnVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={4}
            >
              <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <p>
                * We aim to respond to all inquiries within 10 minutes during
                business hours via WhatsApp.
              </p>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Form */}
          <motion.div
            className="bg-white text-ink-900 p-8 rounded-xl shadow-2xl"
            variants={rightColumnVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {status === 'success' ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.div
                  className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                    delay: 0.2,
                  }}
                >
                  <CheckCircle className="w-8 h-8" />
                </motion.div>
                <h3 className="font-serif text-2xl font-semibold mb-2">
                  Inquiry Received!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. I will contact you via WhatsApp
                  shortly to confirm availability.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-gold-600 font-medium hover:underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nationality"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nationality *
                    </label>
                    <input
                      type="text"
                      id="nationality"
                      name="nationality"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="whatsapp"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      placeholder="+1 234 567 8900"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors bg-white"
                  >
                    <option>Sunrise Photoshoot</option>
                    <option>Couple / Pre-Wedding</option>
                    <option>Family Photography</option>
                    <option>Proposal Shoot</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gold-500 text-ink-900 py-3 px-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {status === 'submitting' ? (
                    <>
                      <motion.span
                        className="w-5 h-5 border-2 border-ink-900/30 border-t-ink-900 rounded-full inline-block"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: "linear" as const,
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Check Availability
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
