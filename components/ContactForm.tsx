'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { CheckCircle, MessageCircle, Clock, ArrowUpRight } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [waUrl, setWaUrl] = useState('');
  const [minDate, setMinDate] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Set the date floor to today on the client (avoids a hydration mismatch
  // and stops anyone requesting a shoot in the past). This is a deliberate
  // client-only value, so the set-state-in-effect lint rule doesn't apply.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMinDate(new Date().toISOString().split('T')[0]);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

    const url = `https://wa.me/918393010125?text=${encodeURIComponent(text)}`;
    setWaUrl(url);

    // Open WhatsApp synchronously inside the submit gesture so the browser
    // doesn't treat it as a blocked pop-up. A fallback link is shown on the
    // success screen in case the tab was still blocked.
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('success');
  };

  const inputClass =
    'w-full px-4 py-3 bg-night border border-line text-ivory placeholder:text-faint focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors';
  const labelClass =
    'block font-mono text-[10px] uppercase tracking-[0.16em] text-muted mb-2';

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 bg-night" id="book">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* LEFT — Info */}
          <div className="lg:col-span-5">
            <motion.span
              className="kicker flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="h-px w-8 bg-accent" />
              Secure Your Date
            </motion.span>

            <motion.h2
              className="display-tight text-ivory text-4xl md:text-5xl lg:text-6xl font-medium"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
            >
              Book your authorized{' '}
              <span className="italic font-light text-accent">photoshoot</span>
            </motion.h2>

            <motion.p
              className="mt-6 text-muted leading-relaxed text-lg max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            >
              Government regulations limit how many clients I can take each day.
              Please inquire early to secure your preferred date and time.
            </motion.p>

            <motion.div
              className="mt-10 border border-line bg-coal p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
            >
              <div className="flex items-center gap-3 mb-3">
                <MessageCircle className="w-4 h-4 text-accent" />
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  Limited Daily Permits
                </h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                To maintain quality and adhere to monument guidelines, I accept a
                maximum of 2 shoots per day (sunrise and sunset).
              </p>
            </motion.div>

            <motion.div
              className="mt-6 flex items-start gap-2 text-sm text-faint"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            >
              <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <p>
                We aim to respond to every inquiry within 10 minutes during
                business hours via WhatsApp.
              </p>
            </motion.div>
          </div>

          {/* RIGHT — Form */}
          <motion.div
            className="lg:col-span-7 border border-line bg-coal p-6 sm:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
          >
            {status === 'success' ? (
              <motion.div
                className="h-full flex flex-col items-center justify-center text-center py-12"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: EASE }}
              >
                <div className="w-16 h-16 border border-accent text-accent rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl text-ivory mb-2">
                  Inquiry received
                </h3>
                <p className="text-muted max-w-sm">
                  Thank you for reaching out. I&apos;ll contact you via WhatsApp
                  shortly to confirm availability.
                </p>
                {waUrl && (
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center gap-2 bg-accent text-night px-6 py-3 font-mono text-[11px] uppercase tracking-[0.16em] font-semibold hover:bg-accent-bright transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp didn&apos;t open? Tap here
                  </a>
                )}
                <button
                  onClick={() => setStatus('idle')}
                  className="link-underline mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-accent"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="nationality" className={labelClass}>
                      Nationality *
                    </label>
                    <input
                      type="text"
                      id="nationality"
                      name="nationality"
                      required
                      autoComplete="country-name"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="whatsapp" className={labelClass}>
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+1 234 567 8900"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="date" className={labelClass}>
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      min={minDate || undefined}
                      className={`${inputClass} [color-scheme:dark]`}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className={labelClass}>
                    Service Interested In
                  </label>
                  <select id="service" name="service" className={inputClass}>
                    <option>Quick Capture ($50)</option>
                    <option>Sunrise Photoshoot ($99)</option>
                    <option>Pre-Wedding &amp; Couple ($199)</option>
                    <option>Family Photography ($299)</option>
                    <option>Proposal Photography ($350)</option>
                    <option>Taj Mahal + Agra Fort Heritage Trail ($399)</option>
                    <option>Full Day Agra Experience ($499)</option>
                    <option>Guide + Photo Combo – Small Group ($50)</option>
                    <option>Guide + Photo Combo – Large Group ($80)</option>
                    <option>Sunrise Luxury Tour – Private Innova ($650)</option>
                    <option>Sunrise Luxury Urbania Tour – Group ($899)</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className={`${inputClass} resize-none`}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="group w-full bg-accent text-night py-4 px-4 font-mono text-[11px] uppercase tracking-[0.18em] font-semibold hover:bg-accent-bright transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                  whileTap={{ scale: 0.99 }}
                >
                  {status === 'submitting' ? (
                    <>
                      <motion.span
                        className="w-4 h-4 border-2 border-night/30 border-t-night rounded-full inline-block"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          ease: 'linear' as const,
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Check Availability
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
