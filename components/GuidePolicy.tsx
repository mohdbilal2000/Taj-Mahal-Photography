import { SITE } from '@/lib/seo';
import { GUIDE_POLICY } from '@/lib/guide-policy';

const waAgree = (quote?: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    `Hi, I have read the guide policy and I agree that our day in Agra will run with your licensed guide only.${quote ? ` Quote number: ${quote}.` : ''} My name:`,
  )}`;

/** The client-facing page body. */
export function GuidePolicyPage() {
  const p = GUIDE_POLICY;
  return (
    <div className="shell-narrow py-12 md:py-16">
      <span className="collage-label eyebrow text-gold-700">Please read first</span>
      <h1 className="h1-fluid mt-5 font-serif font-medium italic text-ink-900 text-balance">{p.title}</h1>
      <p className="lead mt-6 text-ink-700 text-pretty">{p.lead}</p>

      <div className="mt-10 rounded-2xl border border-gold-500/40 bg-[#FBF5EA] p-6 sm:p-8">
        <p className="collage-caption text-2xl text-gold-700">the policy in one line</p>
        <p className="mt-3 font-serif text-xl font-semibold leading-snug text-ink-900 text-pretty sm:text-2xl">{p.oneLine}</p>
      </div>

      <h2 className="h3-fluid mt-14 font-serif font-semibold text-ink-900">Why we ask</h2>
      <div className="mt-6 space-y-4">
        {p.reasons.map((r, i) => (
          <section key={r.heading} className="rounded-2xl border hairline bg-white p-5 sm:p-6">
            <div className="flex items-baseline gap-4">
              <span aria-hidden="true" className="font-serif text-3xl italic leading-none text-gold-500">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-serif text-xl font-semibold text-ink-900">{r.heading}</h3>
            </div>
            <p className="mt-3 leading-relaxed text-ink-700 text-pretty">{r.body}</p>
          </section>
        ))}
      </div>

      <h2 className="h3-fluid mt-14 font-serif font-semibold text-ink-900">What this means for you</h2>
      <ul className="mt-5 space-y-1 rounded-2xl border hairline bg-white p-3 sm:p-4">
        {p.forYou.map((t) => (
          <li key={t.slice(0, 30)} className="flex gap-3 rounded-lg px-2 py-2.5 leading-relaxed text-ink-700">
            <span aria-hidden="true" className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400/25 text-[11px] font-bold text-gold-700">✓</span>
            <span className="text-pretty">{t}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-2xl border hairline bg-marble-100 p-5 sm:p-6">
        <p className="eyebrow text-ink-500">Already have a guide?</p>
        <p className="mt-2 leading-relaxed text-ink-700 text-pretty">{p.alreadyArranged}</p>
      </div>

      <h2 className="h3-fluid mt-14 font-serif font-semibold text-ink-900">Questions</h2>
      <div className="mt-5 divide-y hairline rounded-2xl border hairline bg-white px-5">
        {p.faqs.map((f) => (
          <details key={f.question} className="group py-4">
            <summary className="flex min-h-[2.75rem] cursor-pointer list-none items-center justify-between gap-4 font-medium text-ink-900">
              <span className="text-pretty">{f.question}</span>
              <span aria-hidden="true" className="shrink-0 text-xl text-gold-600 transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-2 pb-2 leading-relaxed text-ink-700 text-pretty">{f.answer}</p>
          </details>
        ))}
      </div>

      <div className="collage-card taped relative mt-14" style={{ ['--tilt' as string]: '-0.6deg' }}>
        <div className="collage-body">
          <p className="collage-caption text-2xl text-gold-700">happy with this?</p>
          <h2 className="mt-2 font-serif text-xl font-semibold text-ink-900">Confirm, and we’ll hold your quote</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-700 text-pretty">
            One tap opens WhatsApp with a short confirmation already written. Have a question first? Ask it there too.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="btn btn-whatsapp" href={waAgree()} target="_blank" rel="noopener noreferrer">I have read this and agree</a>
            <a
              className="btn btn-outline"
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi, I have a question about the guide policy:')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              I have a question
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/** The one-page version printed as the first page of a PDF quote. */
export function GuidePolicyPaper({ quoteNumber, client }: { quoteNumber: string; client: string }) {
  const p = GUIDE_POLICY;
  return (
    <article className="quote-paper mx-auto w-full max-w-[820px] min-w-0 bg-white px-5 py-7 text-ink-900 shadow-[0_20px_60px_-25px_rgba(20,17,15,0.45)] ring-1 ring-ink-900/10 sm:px-10 sm:py-10 print:max-w-none print:p-0 print:shadow-none print:ring-0 print:break-after-page">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-gold-500 pb-5">
        <div>
          <p className="font-serif text-[28px] italic leading-none">{SITE.name}</p>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-700">Please read before you confirm</p>
        </div>
        <p className="text-right text-xs text-ink-700">
          {client ? <>For <b>{client}</b><br /></> : null}Quote <b>{quoteNumber}</b>
        </p>
      </div>

      <h2 className="mt-6 font-serif text-3xl italic leading-tight text-balance">{p.title}</h2>
      <p className="mt-3 text-sm leading-relaxed text-ink-700">{p.lead}</p>

      <div className="mt-5 rounded-md border border-gold-500/40 bg-[#FBF5EA] px-4 py-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold-700">The policy</p>
        <p className="mt-1 font-serif text-lg font-semibold leading-snug">{p.oneLine}</p>
      </div>

      <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">Why we ask</p>
      <ol className="mt-2 space-y-3">
        {p.reasons.map((r, i) => (
          <li key={r.heading} className="flex gap-3 break-inside-avoid text-[13px] leading-relaxed text-ink-700">
            <span className="font-serif text-xl italic leading-none text-gold-600">{i + 1}</span>
            <span><b className="text-ink-900">{r.heading}.</b> {r.body}</span>
          </li>
        ))}
      </ol>

      <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-500">What this means for you</p>
      <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-ink-700">
        {p.forYou.map((t) => (
          <li key={t.slice(0, 30)} className="flex gap-2"><span className="text-gold-600" aria-hidden>✓</span><span>{t}</span></li>
        ))}
      </ul>

      <p className="mt-5 text-[13px] leading-relaxed text-ink-700"><b className="text-ink-900">Already have a guide?</b> {p.alreadyArranged}</p>

      <div className="mt-6 break-inside-avoid rounded-md bg-marble-100 px-4 py-3 text-[13px] text-ink-800">
        To accept: reply <b>AGREED</b> on WhatsApp ({SITE.phoneDisplay}), or tap <b>{SITE.url}/guide-policy</b>. The quote that follows is valid on that basis.
      </div>
    </article>
  );
}

export { waAgree };
