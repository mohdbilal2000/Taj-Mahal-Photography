'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'motion/react';
import { Send, CheckCircle, MessageCircle, Clock, Users, Sunrise, Sun, CloudSun, Sunset, MapPin, CalendarRange } from 'lucide-react';
import { PLANS, TIMING_SLOTS, TRAVEL_CITIES, TRAVEL_DAYS, planById } from '@/lib/plans';

const TIMING_ICONS: Record<string, typeof Sun> = {
  sunrise: Sunrise,
  forenoon: CloudSun,
  afternoon: Sun,
  sunset: Sunset,
};

const GUEST_OPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13+'];

/** Owner's personal WhatsApp — every inquiry is redirected here pre-filled. */
const OWNER_WHATSAPP = '918393010125';
/** Owner's inbox — a copy of every inquiry is emailed here via FormSubmit
 *  (no backend needed; the first submission triggers a one-time activation
 *  email from formsubmit.co that must be confirmed). */
const OWNER_EMAIL = 'mb9400900@gmail.com';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedPlan, setSelectedPlan] = useState('sunrise');
  const [timing, setTiming] = useState('sunrise');
  const [cities, setCities] = useState<string[]>(['Agra']);

  const toggleCity = (city: string) => {
    setCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city],
    );
  };
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Preselect the plan from /book?plan=<id> (set by the quick-book rail and
  // every "Check Availability" button). Read from location directly so the
  // component stays prerender-safe without a Suspense boundary.
  useEffect(() => {
    const planParam = new URLSearchParams(window.location.search).get('plan');
    // On /services/<slug> pages (form embedded below the fold) default to that service.
    const slugMatch = window.location.pathname.match(/^\/services\/([^/]+)\/?$/);
    const candidate = planParam ?? slugMatch?.[1];
    const plan = planById(candidate);
    if (plan) {
      setSelectedPlan(plan.id);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const nationality = formData.get('nationality') as string;
    const whatsapp = formData.get('whatsapp') as string;
    const email = formData.get('email') as string;
    const guests = formData.get('guests') as string;
    const ages = formData.get('ages') as string;
    const date = formData.get('date') as string;
    const message = formData.get('message') as string;
    const days = (formData.get('days') as string) || '';

    const plan = planById(selectedPlan);
    const timingSlot = TIMING_SLOTS.find((t) => t.id === timing);
    const needsRoute = Boolean(plan?.needsRoute);
    const routeCities = cities.length ? cities.join(', ') : 'Not specified';

    const text = [
      `*New Booking Inquiry – Taj Mahal Photography*`,
      ``,
      `*Package:* ${plan ? `${plan.name} (${plan.fromPrice ? 'from ' : ''}$${plan.price} USD)` : selectedPlan}`,
      `*Preferred Date:* ${date}`,
      `*Preferred Timing:* ${timingSlot?.label ?? timing} (exact hour flexible)`,
      `*Guests:* ${guests}`,
      `*Ages:* ${ages || 'Not specified'}`,
      ...(needsRoute
        ? [`*Cities of Travel:* ${routeCities}`, `*Number of Days:* ${days || 'Not specified'}`]
        : []),
      ``,
      `*Name:* ${name}`,
      `*Nationality:* ${nationality}`,
      `*WhatsApp:* ${whatsapp}`,
      `*Email:* ${email || 'Not provided'}`,
      `*Additional Details:* ${message || 'None'}`,
    ].join('\n');

    const waUrl = `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(text)}`;

    // Email a copy of the inquiry in the background (fire-and-forget so the
    // WhatsApp redirect is never delayed or blocked by email problems).
    fetch(`https://formsubmit.co/ajax/${OWNER_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        _subject: `New Booking Inquiry — ${plan ? plan.name : selectedPlan} — ${name}`,
        _template: 'table',
        Package: plan ? `${plan.name} (${plan.fromPrice ? 'from ' : ''}$${plan.price} USD)` : selectedPlan,
        'Preferred Date': date,
        'Preferred Timing': `${timingSlot?.label ?? timing} (exact hour flexible)`,
        Guests: guests,
        Ages: ages || 'Not specified',
        ...(needsRoute
          ? { 'Cities of Travel': routeCities, 'Number of Days': days || 'Not specified' }
          : {}),
        Name: name,
        Nationality: nationality,
        WhatsApp: whatsapp,
        Email: email || 'Not provided',
        'Additional Details': message || 'None',
        ...(email ? { _replyto: email } : {}),
      }),
    }).catch(() => {
      // Email copy is best-effort; WhatsApp remains the primary channel.
    });

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

  const inputClass =
    'w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors';

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
              className="bg-white/5 border border-white/10 backdrop-blur-sm p-6 rounded-lg mb-8"
              variants={leftColumnVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={4}
            >
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-gold-400" />
                <h3 className="font-serif text-xl font-semibold text-gold-400">
                  Why No Exact Hours?
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                Sunrise and sunset shift through the year, so you only pick a
                part of the day — sunrise, forenoon, afternoon or sunset. We
                confirm the exact meeting time on WhatsApp once your date is
                locked in.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-2 text-sm text-gray-400 italic"
              variants={leftColumnVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={5}
            >
              <MessageCircle className="w-4 h-4 text-gold-400 flex-shrink-0" />
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
                {/* Package */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Package *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className={`${inputClass} bg-white`}
                  >
                    {PLANS.map((plan) => (
                      <option key={plan.id} value={plan.id}>
                        {plan.name} — {plan.fromPrice ? 'from ' : ''}${plan.price} USD
                      </option>
                    ))}
                  </select>
                  {planById(selectedPlan) && (
                    <p className="text-xs text-gray-500 mt-1.5">
                      {planById(selectedPlan)!.tagline} · {planById(selectedPlan)!.duration}
                    </p>
                  )}
                </div>

                {/* Date + Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                      className={inputClass}
                    />
                    <p className="text-xs text-gray-400 mt-1">Taj Mahal is closed on Fridays</p>
                  </div>
                  <div>
                    <label
                      htmlFor="guests"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      <span className="inline-flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" /> Number of Guests *
                      </span>
                    </label>
                    <select id="guests" name="guests" required className={`${inputClass} bg-white`}>
                      {GUEST_OPTIONS.map((n) => (
                        <option key={n} value={n}>
                          {n} {n === '1' ? 'guest' : 'guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Timing chips */}
                <div>
                  <span className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Timing *
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" role="radiogroup" aria-label="Preferred timing">
                    {TIMING_SLOTS.map((slot) => {
                      const Icon = TIMING_ICONS[slot.id] ?? Sun;
                      const active = timing === slot.id;
                      return (
                        <button
                          key={slot.id}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => setTiming(slot.id)}
                          className={`flex flex-col items-center gap-1 px-2 py-3 rounded-lg border text-xs font-medium transition-all ${
                            active
                              ? 'border-gold-500 bg-gold-500/10 text-ink-900 ring-1 ring-gold-500'
                              : 'border-gray-200 text-gray-600 hover:border-gold-400 hover:bg-marble-50'
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${active ? 'text-gold-600' : 'text-gray-400'}`} />
                          {slot.label}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-gray-400 mt-1.5">
                    {TIMING_SLOTS.find((t) => t.id === timing)?.hint} — exact hour confirmed on
                    WhatsApp, since sunrise/sunset times change with the season.
                  </p>
                </div>

                {/* Route: cities + days (transport / multi-day plans only) */}
                {planById(selectedPlan)?.needsRoute && (
                  <div className="bg-marble-50 border border-marble-200 rounded-lg p-4 space-y-4">
                    <div>
                      <span className="block text-sm font-medium text-gray-700 mb-2">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> Cities of Travel *
                        </span>
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {TRAVEL_CITIES.map((city) => {
                          const active = cities.includes(city);
                          return (
                            <button
                              key={city}
                              type="button"
                              aria-pressed={active}
                              onClick={() => toggleCity(city)}
                              className={`px-3 py-2 rounded-full border text-xs font-medium transition-all ${
                                active
                                  ? 'border-gold-500 bg-gold-500/10 text-ink-900 ring-1 ring-gold-500'
                                  : 'border-gray-200 bg-white text-gray-600 hover:border-gold-400'
                              }`}
                            >
                              {city}
                            </button>
                          );
                        })}
                      </div>
                      <p className="text-xs text-gray-400 mt-1.5">
                        Tap all the cities you want covered — other cities can go in the details box.
                      </p>
                    </div>
                    <div>
                      <label
                        htmlFor="days"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        <span className="inline-flex items-center gap-1">
                          <CalendarRange className="w-3.5 h-3.5" /> Number of Days *
                        </span>
                      </label>
                      <select id="days" name="days" className={`${inputClass} bg-white`}>
                        {TRAVEL_DAYS.map((d) => (
                          <option key={d} value={d}>
                            {d} {d === '1' ? 'day' : 'days'}
                          </option>
                        ))}
                      </select>
                      <p className="text-xs text-gray-400 mt-1">
                        Starting from $100 for one day in Agra — we confirm the exact quote for
                        your cities and days on WhatsApp before you commit.
                      </p>
                    </div>
                  </div>
                )}

                {/* Name + Nationality */}
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
                      autoComplete="name"
                      className={inputClass}
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
                      autoComplete="country-name"
                      placeholder="e.g. United States"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* WhatsApp + Email */}
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
                      autoComplete="tel"
                      placeholder="+1 234 567 8900"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email <span className="text-gray-400">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Ages */}
                <div>
                  <label
                    htmlFor="ages"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Guest Ages <span className="text-gray-400">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="ages"
                    name="ages"
                    placeholder="e.g. 2 adults, children aged 5 and 8"
                    className={inputClass}
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Helps us pace the session — children under 15 enter the Taj Mahal free.
                  </p>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Details <span className="text-gray-400">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Special requests, outfit changes, accessibility needs, hotel name for pickup..."
                    className={`${inputClass} resize-none`}
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gold-500 text-ink-900 py-3.5 px-4 rounded-lg font-semibold hover:bg-gold-400 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
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
                      Check Availability on WhatsApp
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
                <p className="text-xs text-center text-gray-400">
                  Submitting opens WhatsApp with your inquiry pre-filled and also emails a
                  copy to our booking desk, so nothing gets missed. No payment is taken on
                  this website.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
