'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { CalendarCheck, Sunrise } from 'lucide-react';
import { QUICK_BOOK_IDS, planById } from '@/lib/plans';
import { whatsappUrl } from '@/lib/contact';
import WhatsAppIcon from './WhatsAppIcon';
import Price from './Price';

export type QuickBookLabels = {
  eyebrow: string;
  title: string;
  note: string;
  packageLabel: string;
  dateLabel: string;
  guestsLabel: string;
  submit: string;
  tomorrow: string;
  formLink: string;
  /** Opening line of the WhatsApp message, before the date. */
  opener: string;
};

export const EN_QUICK_BOOK: QuickBookLabels = {
  eyebrow: 'Book in under a minute',
  title: 'Three taps and it is on WhatsApp',
  note: 'No deposit to ask. We reply with availability, usually within ten minutes.',
  packageLabel: 'Package',
  dateLabel: 'Date',
  guestsLabel: 'Guests',
  submit: 'Send on WhatsApp',
  tomorrow: 'Tomorrow at sunrise',
  formLink: 'Rather fill a form?',
  opener: 'Hi! I would like to book a Taj Mahal photoshoot.',
};

/** yyyy-mm-dd for an offset in days, in the visitor's own timezone. */
function isoDay(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const GUEST_OPTIONS = ['1', '2', '3–5', '6–12', '12+'];

/**
 * The booking path, compressed to what a guest can answer without thinking:
 * which package, which day, how many people. Everything else — the deposit,
 * the meeting point, the ticket count — is a reply away, and asking for it
 * up front is what makes a form get abandoned.
 *
 * The output is a WhatsApp message that already contains the answer, so the
 * first reply can be "yes, that morning is free" instead of "which date?".
 * Names come from `planNames` when a locale supplies them, so the message
 * arrives in the language the guest was reading.
 */
export default function QuickBook({
  labels = EN_QUICK_BOOK,
  planNames,
  defaultPlanId = 'sunrise',
  className = '',
}: {
  labels?: QuickBookLabels;
  /** Localized plan names, keyed by plan id. */
  planNames?: Record<string, string>;
  defaultPlanId?: string;
  className?: string;
}) {
  const plans = useMemo(
    () => QUICK_BOOK_IDS.map(planById).filter((p): p is NonNullable<typeof p> => Boolean(p)),
    [],
  );

  const [planId, setPlanId] = useState(defaultPlanId);
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState('2');

  const plan = planById(planId) ?? plans[0];
  const planName = planNames?.[plan.id] ?? plan.name;

  const message = [
    labels.opener,
    `${labels.packageLabel}: ${planName}`,
    date ? `${labels.dateLabel}: ${date}` : null,
    `${labels.guestsLabel}: ${guests}`,
  ]
    .filter(Boolean)
    .join('\n');

  const href = whatsappUrl(message);

  return (
    <div
      className={`rounded-sm border hairline bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6 ${className}`}
    >
      <p className="eyebrow text-gold-700">{labels.eyebrow}</p>
      <h2 className="mt-2 font-serif text-xl font-semibold text-ink-900 sm:text-2xl text-balance">
        {labels.title}
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-[1.4fr_1fr_0.8fr]">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-400">
            {labels.packageLabel}
          </span>
          <select
            value={planId}
            onChange={(e) => setPlanId(e.target.value)}
            className="w-full min-h-[48px] rounded-sm border hairline bg-marble-50 px-3 text-sm text-ink-900"
          >
            {plans.map((p) => (
              <option key={p.id} value={p.id}>
                {planNames?.[p.id] ?? p.name}
              </option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-400">
            {labels.dateLabel}
          </span>
          <input
            type="date"
            value={date}
            min={isoDay()}
            onChange={(e) => setDate(e.target.value)}
            className="w-full min-h-[48px] rounded-sm border hairline bg-marble-50 px-3 text-sm text-ink-900"
          />
        </label>

        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-400">
            {labels.guestsLabel}
          </span>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full min-h-[48px] rounded-sm border hairline bg-marble-50 px-3 text-sm text-ink-900"
          >
            {GUEST_OPTIONS.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-sm bg-[#25D366] px-5 font-semibold text-ink-900 transition-transform hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="h-5 w-5" />
          {labels.submit}
        </a>

        <button
          type="button"
          onClick={() => {
            setPlanId('sunrise');
            setDate(isoDay(1));
          }}
          className="inline-flex min-h-[52px] items-center gap-2 rounded-sm border border-gold-500/50 px-4 text-sm font-semibold text-gold-700 transition-colors hover:bg-gold-500/10"
        >
          <Sunrise className="h-4 w-4" />
          {labels.tomorrow}
        </button>
      </div>

      <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-500">
        <span className="font-semibold text-ink-900">
          <Price usd={plan.price} fromPrice={plan.fromPrice} hideCode />
        </span>
        <span>· {labels.note}</span>
        <Link
          href={`/book?plan=${plan.id}${date ? `&date=${date}` : ''}`}
          className="link-sweep inline-flex min-h-[24px] items-center gap-1 py-1 font-semibold text-gold-700"
        >
          <CalendarCheck className="h-3.5 w-3.5" />
          {labels.formLink}
        </Link>
      </p>
    </div>
  );
}
