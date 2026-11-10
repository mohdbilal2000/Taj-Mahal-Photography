'use client';

/**
 * Owner-only quote builder (/quote). Pick packages, adjust prices, and save the
 * paper preview as a PDF through the browser's own print dialog — no PDF
 * library, so the output is real selectable text and the bundle stays small.
 * Rates come from lib/packages.json, the same source as the rest of the site.
 */

import { useEffect, useMemo, useState } from 'react';
import packagesData from '@/lib/packages.json';
import { INR_RATE } from '@/lib/currency';
import { SITE, DELIVERY } from '@/lib/seo';

type Item = { key: string; name: string; detail: string; includes: string; usd: number; qty: number };
type Mode = 'USD' | 'INR' | 'BOTH';
type Quote = {
  number: string;
  issued: string;
  validUntil: string;
  client: string;
  contact: string;
  shootDate: string;
  guests: string;
  pickup: string;
  mode: Mode;
  rate: number;
  discount: number;
  discountLabel: string;
  advancePct: number;
  items: Item[];
  notes: string;
  preparedBy: string;
};

type Pkg = { id: string; name: string; usd: number; duration?: string; subtitle?: string; short?: string; includes?: unknown[] };
const PACKAGES: Pkg[] = [
  ...(packagesData.packages as Pkg[]),
  ...(((packagesData as { otherPackages?: Pkg[] }).otherPackages ?? []) as Pkg[]),
];

const STORAGE_KEY = 'tmp:quote-draft';
const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
const uid = () => Math.random().toString(36).slice(2, 9);

function itemFromPackage(p: Pkg): Item {
  return {
    key: uid(),
    name: p.name,
    detail: [p.duration, p.subtitle || p.short].filter(Boolean).join(' · '),
    includes: (p.includes ?? []).map((x) => (typeof x === 'string' ? x : '')).filter(Boolean).join('\n'),
    usd: p.usd,
    qty: 1,
  };
}

const DEFAULT_NOTES = [
  ...(packagesData.terms as string[]),
  `Edited photos are delivered ${DELIVERY.phrase} by private online gallery.`,
  String(packagesData.tickets),
].join('\n');

function freshQuote(): Quote {
  const now = new Date();
  const valid = new Date(now.getTime() + 7 * 864e5);
  return {
    number: `TMP-${iso(now).slice(2).replace(/-/g, '')}-${String(now.getHours()).padStart(2, '0')}${String(now.getMinutes()).padStart(2, '0')}`,
    issued: iso(now),
    validUntil: iso(valid),
    client: '',
    contact: '',
    shootDate: '',
    guests: '2',
    pickup: '',
    mode: 'BOTH',
    rate: INR_RATE,
    discount: 0,
    discountLabel: 'Discount',
    advancePct: 20,
    items: [itemFromPackage(PACKAGES[0])],
    notes: DEFAULT_NOTES,
    preparedBy: 'Danish Iqbal',
  };
}

const prettyDate = (s: string) => {
  if (!s) return '—';
  const d = new Date(`${s}T00:00:00`);
  return Number.isNaN(d.getTime()) ? s : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
};

const field =
  'w-full rounded-lg border border-ink-900/15 bg-white px-3 py-2.5 text-[15px] text-ink-900 outline-none focus:border-gold-600 focus:ring-2 focus:ring-gold-400/40';
const label = 'block text-[11px] font-bold uppercase tracking-[0.14em] text-ink-500 mb-1';

export default function QuoteMaker() {
  const [q, setQ] = useState<Quote | null>(null);

  // Dates and the quote number depend on "now", so build the first state on the
  // client only — the server renders a neutral shell and nothing can mismatch.
  useEffect(() => {
    let draft: Quote | null = null;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) draft = { ...freshQuote(), ...(JSON.parse(raw) as Partial<Quote>) };
    } catch {
      /* private mode or corrupt draft — start clean */
    }
    setQ(draft && Array.isArray(draft.items) ? draft : freshQuote());
  }, []);

  useEffect(() => {
    if (!q) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(q));
    } catch {
      /* ignore */
    }
    // The print dialog uses the page title as the suggested PDF file name.
    document.title = `Quote ${q.number}${q.client ? ` - ${q.client}` : ''} - ${SITE.name}`;
  }, [q]);

  const totals = useMemo(() => {
    if (!q) return { sub: 0, disc: 0, total: 0, advance: 0, balance: 0 };
    const sub = q.items.reduce((s, i) => s + (Number(i.usd) || 0) * (Number(i.qty) || 0), 0);
    const disc = Math.min(Math.max(Number(q.discount) || 0, 0), sub);
    const total = sub - disc;
    const advance = Math.round((total * (Number(q.advancePct) || 0)) / 100);
    return { sub, disc, total, advance, balance: total - advance };
  }, [q]);

  if (!q) return <main className="min-h-screen bg-[#F4EFE6]" />;

  const set = <K extends keyof Quote>(k: K, v: Quote[K]) => setQ((p) => (p ? { ...p, [k]: v } : p));
  const setItem = (key: string, patch: Partial<Item>) =>
    setQ((p) => (p ? { ...p, items: p.items.map((i) => (i.key === key ? { ...i, ...patch } : i)) } : p));
  const removeItem = (key: string) => setQ((p) => (p ? { ...p, items: p.items.filter((i) => i.key !== key) } : p));
  const addItem = (item: Item) => setQ((p) => (p ? { ...p, items: [...p.items, item] } : p));

  const rate = Number(q.rate) || INR_RATE;
  const inr = (usd: number) => `₹${(Math.round((usd * rate) / 5) * 5).toLocaleString('en-IN')}`;
  const usdStr = (usd: number) => `$${usd.toLocaleString('en-US')}`;
  const money = (usd: number) => (q.mode === 'USD' ? usdStr(usd) : q.mode === 'INR' ? inr(usd) : usdStr(usd));
  const sub2 = (usd: number) => (q.mode === 'BOTH' ? inr(usd) : null);

  const waText = [
    `*${SITE.name} — Quote ${q.number}*`,
    q.client && `For: ${q.client}`,
    q.shootDate && `Date: ${prettyDate(q.shootDate)}`,
    q.guests && `Guests: ${q.guests}`,
    '',
    ...q.items.map((i) => `• ${i.name}${i.qty > 1 ? ` × ${i.qty}` : ''} — ${money(i.usd * i.qty)}`),
    totals.disc > 0 && `${q.discountLabel || 'Discount'}: −${money(totals.disc)}`,
    `*Total: ${money(totals.total)}${q.mode === 'BOTH' ? ` (${inr(totals.total)})` : ''}*`,
    q.advancePct > 0 && `Advance to confirm (${q.advancePct}%): ${money(totals.advance)} · Balance after the tour: ${money(totals.balance)}`,
    `Valid until ${prettyDate(q.validUntil)}. Monument tickets are not included.`,
  ]
    .filter((l) => l !== false && l !== undefined && l !== null)
    .join('\n');

  const notes = q.notes.split('\n').map((s) => s.trim()).filter(Boolean);

  return (
    <main className="min-h-screen bg-[#F4EFE6] print:bg-white">
      <style>{`
        @page { size: A4; margin: 10mm 12mm; }
        @media print {
          html, body { background: #fff !important; }
          .quote-paper { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-4 py-6 lg:py-10 print:p-0 print:max-w-none">
        <header className="mb-6 flex flex-wrap items-end justify-between gap-4 print:hidden">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-700">Private · owner tool</p>
            <h1 className="font-serif text-3xl italic text-ink-900 sm:text-4xl">Quote maker</h1>
            <p className="mt-1 max-w-xl text-sm text-ink-700">
              Fill in the left side, check the page on the right, then press <b>Save as PDF</b> and choose
              “Save as PDF” as the printer. Your draft is kept on this device.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn btn-gold" onClick={() => window.print()}>Save as PDF</button>
            <a className="btn btn-whatsapp" href={`https://wa.me/?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer">Send summary on WhatsApp</a>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => {
                if (window.confirm('Start a new quote? The current one will be cleared.')) setQ(freshQuote());
              }}
            >
              New quote
            </button>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,460px)_minmax(0,1fr)] print:block">
          {/* ───────────── Form ───────────── */}
          <section className="space-y-5 print:hidden" aria-label="Quote details">
            <div className="rounded-2xl border border-ink-900/10 bg-white p-4 sm:p-5">
              <h2 className="mb-3 font-serif text-xl text-ink-900">Client</h2>
              <div className="grid grid-cols-2 gap-3">
                <label className="col-span-2"><span className={label}>Client name</span>
                  <input className={field} value={q.client} onChange={(e) => set('client', e.target.value)} placeholder="e.g. Sarah & James Miller" /></label>
                <label className="col-span-2"><span className={label}>Phone / email / country (optional)</span>
                  <input className={field} value={q.contact} onChange={(e) => set('contact', e.target.value)} placeholder="+44 … · United Kingdom" /></label>
                <label><span className={label}>Tour date</span>
                  <input type="date" className={field} value={q.shootDate} onChange={(e) => set('shootDate', e.target.value)} /></label>
                <label><span className={label}>Guests</span>
                  <input className={field} inputMode="numeric" value={q.guests} onChange={(e) => set('guests', e.target.value)} /></label>
                <label className="col-span-2"><span className={label}>Pickup / hotel (optional)</span>
                  <input className={field} value={q.pickup} onChange={(e) => set('pickup', e.target.value)} placeholder="Hotel name, Agra" /></label>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-900/10 bg-white p-4 sm:p-5">
              <h2 className="mb-3 font-serif text-xl text-ink-900">Packages &amp; prices</h2>
              <label className="block"><span className={label}>Add a package (current website rate)</span>
                <select
                  className={field}
                  value=""
                  onChange={(e) => {
                    const p = PACKAGES.find((x) => x.id === e.target.value);
                    if (p) addItem(itemFromPackage(p));
                  }}
                >
                  <option value="">Choose a package…</option>
                  {PACKAGES.map((p) => (
                    <option key={p.id} value={p.id}>{p.name} — ${p.usd}</option>
                  ))}
                </select>
              </label>

              <div className="mt-4 space-y-4">
                {q.items.map((i, n) => (
                  <div key={i.key} className="rounded-xl border border-ink-900/10 bg-[#FBF8F2] p-3">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-xs font-bold text-ink-500">Line {n + 1}</span>
                      <button type="button" className="min-h-[2.75rem] px-2 text-sm font-semibold text-red-700 underline" onClick={() => removeItem(i.key)}>Remove</button>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="col-span-2"><span className={label}>Name</span>
                        <input className={field} value={i.name} onChange={(e) => setItem(i.key, { name: e.target.value })} /></label>
                      <label className="col-span-2"><span className={label}>Short description</span>
                        <input className={field} value={i.detail} onChange={(e) => setItem(i.key, { detail: e.target.value })} /></label>
                      <label><span className={label}>Price (USD)</span>
                        <input type="number" min={0} className={field} value={i.usd} onChange={(e) => setItem(i.key, { usd: Number(e.target.value) })} /></label>
                      <label><span className={label}>Quantity</span>
                        <input type="number" min={1} className={field} value={i.qty} onChange={(e) => setItem(i.key, { qty: Number(e.target.value) })} /></label>
                      <label className="col-span-2"><span className={label}>What is included (one per line)</span>
                        <textarea rows={4} className={field} value={i.includes} onChange={(e) => setItem(i.key, { includes: e.target.value })} /></label>
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" className="btn btn-outline btn-block mt-4" onClick={() => addItem({ key: uid(), name: 'Custom item', detail: '', includes: '', usd: 0, qty: 1 })}>
                + Add a custom line
              </button>
            </div>

            <div className="rounded-2xl border border-ink-900/10 bg-white p-4 sm:p-5">
              <h2 className="mb-3 font-serif text-xl text-ink-900">Money</h2>
              <div className="grid grid-cols-2 gap-3">
                <label><span className={label}>Show prices in</span>
                  <select className={field} value={q.mode} onChange={(e) => set('mode', e.target.value as Mode)}>
                    <option value="BOTH">USD + ₹</option>
                    <option value="USD">USD only</option>
                    <option value="INR">₹ only</option>
                  </select></label>
                <label><span className={label}>₹ per $1</span>
                  <input type="number" min={1} className={field} value={q.rate} onChange={(e) => set('rate', Number(e.target.value))} /></label>
                <label><span className={label}>Discount (USD)</span>
                  <input type="number" min={0} className={field} value={q.discount} onChange={(e) => set('discount', Number(e.target.value))} /></label>
                <label><span className={label}>Discount label</span>
                  <input className={field} value={q.discountLabel} onChange={(e) => set('discountLabel', e.target.value)} /></label>
                <label className="col-span-2"><span className={label}>Advance to confirm (%) — 0 hides it</span>
                  <input type="number" min={0} max={100} className={field} value={q.advancePct} onChange={(e) => set('advancePct', Number(e.target.value))} /></label>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-900/10 bg-white p-4 sm:p-5">
              <h2 className="mb-3 font-serif text-xl text-ink-900">Quote details</h2>
              <div className="grid grid-cols-2 gap-3">
                <label className="col-span-2"><span className={label}>Quote number</span>
                  <input className={field} value={q.number} onChange={(e) => set('number', e.target.value)} /></label>
                <label><span className={label}>Issued</span>
                  <input type="date" className={field} value={q.issued} onChange={(e) => set('issued', e.target.value)} /></label>
                <label><span className={label}>Valid until</span>
                  <input type="date" className={field} value={q.validUntil} onChange={(e) => set('validUntil', e.target.value)} /></label>
                <label className="col-span-2"><span className={label}>Prepared by</span>
                  <input className={field} value={q.preparedBy} onChange={(e) => set('preparedBy', e.target.value)} /></label>
                <label className="col-span-2"><span className={label}>Terms &amp; notes (one per line)</span>
                  <textarea rows={9} className={field} value={q.notes} onChange={(e) => set('notes', e.target.value)} /></label>
              </div>
              <button type="button" className="mt-2 min-h-[2.75rem] text-sm font-semibold text-gold-700 underline" onClick={() => set('notes', DEFAULT_NOTES)}>
                Reset terms to the website’s standard terms
              </button>
            </div>

            <button type="button" className="btn btn-gold btn-lg btn-block" onClick={() => window.print()}>Save as PDF</button>
          </section>

          {/* ───────────── Paper ───────────── */}
          <section aria-label="Quote preview" className="lg:sticky lg:top-6 lg:self-start">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-500 print:hidden">Preview — this is the PDF</p>
            <div className="overflow-x-auto print:overflow-visible">
            <article className="quote-paper mx-auto w-full max-w-[820px] min-w-0 bg-white px-5 py-7 text-ink-900 shadow-[0_20px_60px_-25px_rgba(20,17,15,0.45)] ring-1 ring-ink-900/10 sm:px-10 sm:py-10 print:max-w-none print:p-0 print:shadow-none print:ring-0">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-gold-500 pb-5">
                <div>
                  <p className="font-serif text-[28px] italic leading-none">{SITE.name}</p>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-700">Official Government Licensed Photographer · Agra</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-2xl italic leading-none">Quotation</p>
                  <p className="mt-2 text-xs text-ink-700">No. <b>{q.number}</b></p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 text-[13px] sm:grid-cols-4">
                <div className="col-span-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">Prepared for</p>
                  <p className="mt-0.5 font-serif text-xl leading-tight">{q.client || 'Client name'}</p>
                  {q.contact && <p className="text-ink-700">{q.contact}</p>}
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">Issued</p>
                  <p className="mt-0.5 font-semibold">{prettyDate(q.issued)}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">Valid until</p>
                  <p className="mt-0.5 font-semibold">{prettyDate(q.validUntil)}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">Tour date</p>
                  <p className="mt-0.5 font-semibold">{q.shootDate ? prettyDate(q.shootDate) : 'To be confirmed'}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">Guests</p>
                  <p className="mt-0.5 font-semibold">{q.guests || '—'}</p>
                </div>
                {q.pickup && (
                  <div className="col-span-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">Pickup</p>
                    <p className="mt-0.5 font-semibold">{q.pickup}</p>
                  </div>
                )}
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between bg-ink-900 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                  <span>Package</span>
                  <span>Amount</span>
                </div>
                {q.items.length === 0 && <p className="px-3 py-6 text-sm text-ink-500">No packages added yet.</p>}
                {q.items.map((i) => {
                  const inc = i.includes.split('\n').map((s) => s.trim()).filter(Boolean);
                  const line = (Number(i.usd) || 0) * (Number(i.qty) || 0);
                  return (
                    <div key={i.key} className="break-inside-avoid border-b border-ink-900/10 px-3 py-4 print:py-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="font-serif text-lg leading-tight">{i.name}</p>
                          {i.detail && <p className="mt-0.5 text-xs text-ink-700">{i.detail}</p>}
                          {i.qty > 1 && <p className="mt-0.5 text-xs text-ink-700">{i.qty} × {money(Number(i.usd) || 0)}</p>}
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="text-base font-bold tabular-nums">{money(line)}</p>
                          {sub2(line) && <p className="text-xs text-ink-500 tabular-nums">{sub2(line)}</p>}
                        </div>
                      </div>
                      {inc.length > 0 && (
                        <ul className="mt-2 grid gap-x-6 gap-y-1 text-xs text-ink-700 sm:grid-cols-2 print:grid-cols-2">
                          {inc.map((t, k) => (
                            <li key={k} className="flex gap-2"><span className="text-gold-600" aria-hidden>✓</span><span>{t}</span></li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 flex justify-end break-inside-avoid">
                <div className="w-full max-w-[340px] text-sm">
                  {totals.disc > 0 && (
                    <>
                      <div className="flex justify-between py-1"><span className="text-ink-700">Subtotal</span><span className="tabular-nums">{money(totals.sub)}</span></div>
                      <div className="flex justify-between py-1"><span className="text-ink-700">{q.discountLabel || 'Discount'}</span><span className="tabular-nums">−{money(totals.disc)}</span></div>
                    </>
                  )}
                  <div className="mt-1 flex items-baseline justify-between border-t-2 border-ink-900 pt-2">
                    <span className="font-serif text-lg italic">Total</span>
                    <span className="text-right">
                      <span className="block text-2xl font-bold tabular-nums">{money(totals.total)}</span>
                      {sub2(totals.total) && <span className="block text-xs text-ink-500 tabular-nums">≈ {sub2(totals.total)} at $1 = ₹{rate}</span>}
                    </span>
                  </div>
                  {q.advancePct > 0 && (
                    <div className="mt-3 rounded-md bg-[#FBF5E2] px-3 py-2">
                      <div className="flex justify-between py-0.5"><span>Advance to confirm ({q.advancePct}%)</span><b className="tabular-nums">{money(totals.advance)}</b></div>
                      <div className="flex justify-between py-0.5"><span>Balance after the tour</span><b className="tabular-nums">{money(totals.balance)}</b></div>
                    </div>
                  )}
                </div>
              </div>

              {notes.length > 0 && (
                <div className="mt-7 print:mt-4 break-inside-avoid">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">Terms &amp; notes</p>
                  <ul className="mt-2 space-y-1 text-xs leading-relaxed text-ink-700">
                    {notes.map((t, k) => (
                      <li key={k} className="flex gap-2"><span className="text-gold-600" aria-hidden>•</span><span>{t}</span></li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 print:mt-4 flex flex-wrap items-end justify-between gap-4 border-t border-ink-900/15 pt-4 print:pt-3 text-xs text-ink-700 break-inside-avoid">
                <div>
                  <p className="font-semibold text-ink-900">{SITE.name}</p>
                  <p>{SITE.address.street}, Agra, India</p>
                  <p>WhatsApp / phone {SITE.phoneDisplay} · {SITE.email}</p>
                  <p>{SITE.domain}</p>
                </div>
                {q.preparedBy && (
                  <div className="text-right">
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">Prepared by</p>
                    <p className="font-serif text-lg italic text-ink-900">{q.preparedBy}</p>
                  </div>
                )}
              </div>
            </article>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
