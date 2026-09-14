/**
 * Renders the rate PDFs into public/pdf/ from lib/packages.json.
 *
 *   npm run pdfs
 *
 * Output: one big-type sheet per package, plus all-rates.pdf covering every
 * category — photography tours, guide + photo tours, and transport + guide.
 * Every page carries USD and INR together, so one file works for any guest.
 *
 * Rendering uses the Chromium that Playwright installs; set CHROME_PATH to
 * override the binary.
 */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, mkdirSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'public', 'pdf');
const DATA = JSON.parse(readFileSync(path.join(ROOT, 'lib', 'packages.json'), 'utf8'));

const CONTACT = {
  whatsapp: '+91 83930 10125',
  email: 'booking@tajmahalphotography.com',
  site: 'tajmahalphotography.com',
};

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  '/usr/bin/chromium',
  '/usr/bin/google-chrome',
].filter(Boolean);

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** INR is a straight conversion of the USD rate, rounded to a clean figure. */
export function toInr(usd) {
  const { usdToInr, inrRoundTo } = DATA.meta;
  return Math.round((usd * usdToInr) / inrRoundTo) * inrRoundTo;
}

const usdText = (p) => `$${p.usd.toLocaleString('en-US')}`;
const inrText = (p) => `₹${toInr(p.usd).toLocaleString('en-IN')}`;
const fromLabel = (p) => (p.fromPrice ? 'From' : 'Price');

const CSS = `
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: "DejaVu Sans", "Helvetica Neue", Arial, sans-serif; color: #14110f; background: #fff; }
  .page { width: 210mm; height: 297mm; padding: 13mm 15mm 12mm; position: relative; page-break-after: always; overflow: hidden; }
  .page:last-child { page-break-after: auto; }

  .masthead { background: #14110f; color: #fff; margin: -13mm -15mm 0; padding: 9mm 15mm 7mm; }
  .brandline { font-size: 8.5pt; letter-spacing: 2.4pt; text-transform: uppercase; color: #8d8578; }
  .brandline b { color: #fff; font-weight: 700; }
  .rule { width: 46px; height: 3px; background: #c9a227; }
  .eyebrow { font-size: 8.5pt; letter-spacing: 3pt; text-transform: uppercase; color: #c9a227; font-weight: 700; margin: 9px 0 6px; }
  .masthead h1 { font-size: 27pt; font-weight: 700; line-height: 1.08; letter-spacing: -0.4pt; }
  .masthead .sub { font-size: 11pt; color: #bdb4a6; margin-top: 6px; }

  /* Both currencies, equal billing. */
  .rates { display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin: 0 -15mm; padding: 5mm 15mm; background: #1f1a16; }
  .rates > div { background: #14110f; border-top: 3px solid #c9a227; padding: 5mm 6mm 4.5mm; }
  .rates .cur { font-size: 8.5pt; letter-spacing: 2.2pt; text-transform: uppercase; color: #c9a227; font-weight: 700; }
  .rates .amt { font-size: 37pt; font-weight: 700; color: #fff; line-height: 1.05; margin-top: 3px; }
  .rates .per { font-size: 9pt; color: #bdb4a6; margin-top: 3px; }
  .ratefoot { margin: 0 -15mm; padding: 0 15mm 5mm; background: #1f1a16; color: #8d8578; font-size: 8.5pt; }

  .facts { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm; margin-top: 5.5mm; }
  .fact { border: 1px solid #e3ded4; padding: 4.5mm 5mm; }
  .fact h4 { font-size: 8pt; letter-spacing: 2pt; text-transform: uppercase; color: #8d8578; margin-bottom: 3px; }
  .fact p { font-size: 10.5pt; font-weight: 600; line-height: 1.35; }

  /* The Taj guide rule is a deal-breaker, so it is a banner, not fine print. */
  .alert { margin-top: 5mm; border: 2px solid #b04a3a; background: #fdf4f2; padding: 4.5mm 6mm; }
  .alert h4 { font-size: 9.5pt; letter-spacing: 1.6pt; text-transform: uppercase; color: #b04a3a; font-weight: 700; margin-bottom: 4px; }
  .alert p { font-size: 10.5pt; line-height: 1.5; color: #3a352e; }
  .alert.ok { border-color: #c9a227; background: #fbf7ec; }
  .alert.ok h4 { color: #8a6f14; }

  h2.sec { font-size: 9pt; letter-spacing: 2.4pt; text-transform: uppercase; color: #8d8578; margin: 5.5mm 0 3.5mm; padding-bottom: 5px; border-bottom: 1px solid #e3ded4; }
  ul.inc { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 5px 9mm; }
  ul.inc li { font-size: 11pt; line-height: 1.45; padding-left: 17px; position: relative; }
  ul.inc li::before { content: "✦"; position: absolute; left: 0; color: #c9a227; font-size: 8.5pt; top: 2.5px; }
  ul.exc { list-style: none; }
  ul.exc li { font-size: 10.5pt; line-height: 1.6; padding-left: 17px; position: relative; color: #5c554b; }
  ul.exc li::before { content: "×"; position: absolute; left: 2px; color: #b04a3a; font-weight: 700; }
  .lower { display: grid; grid-template-columns: 1fr 1fr; gap: 9mm; align-items: start; }
  .lower .sec { margin-top: 5.5mm; }
  .terms { font-size: 9.2pt; line-height: 1.6; color: #5c554b; margin-top: 5mm; }
  .terms b { color: #14110f; }

  .cta { position: absolute; left: 15mm; right: 15mm; bottom: 10mm; background: #14110f; color: #fff; padding: 6.5mm 8mm; display: flex; justify-content: space-between; align-items: center; }
  .cta h3 { font-size: 15pt; font-weight: 600; }
  .cta .c { text-align: right; font-size: 9.6pt; line-height: 1.7; color: #ddd7cd; }
  .cta .c b { color: #c9a227; }

  /* all-rates.pdf */
  .cover { background: #14110f; color: #fff; display: flex; flex-direction: column; justify-content: space-between; }
  .cover h1 { font-size: 42pt; font-weight: 300; line-height: 1.05; margin: 16px 0 8px; }
  .cover h1 b { display: block; color: #c9a227; font-weight: 700; }
  .cover .lede { font-size: 12pt; line-height: 1.6; color: #ddd7cd; max-width: 140mm; margin-top: 12px; }
  .contents { margin-top: 10mm; }
  .contents div { display: flex; justify-content: space-between; border-top: 1px solid #332d27; padding: 3.5mm 0; font-size: 11pt; color: #efe7d9; }
  .contents div b { color: #c9a227; font-weight: 700; }
  .coverfoot { border-top: 1px solid #332d27; padding-top: 13px; display: flex; justify-content: space-between; font-size: 9.5pt; color: #bdb4a6; }
  .coverfoot b { color: #fff; }
  .head { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 2px solid #14110f; padding-bottom: 8px; margin-bottom: 7mm; }
  .head .brand { font-size: 9.5pt; font-weight: 700; letter-spacing: 1.2pt; text-transform: uppercase; }
  .head .brand span { color: #c9a227; }
  .head .pg { font-size: 8pt; color: #8d8578; letter-spacing: 1.4pt; text-transform: uppercase; }
  .cat h2 { font-size: 24pt; font-weight: 700; line-height: 1.1; }
  .cat .blurb { font-size: 11pt; color: #5c554b; margin-top: 5px; line-height: 1.5; }
  .row { border: 1px solid #e3ded4; border-left: 5px solid #c9a227; padding: 6mm 7mm; margin-top: 5mm; break-inside: avoid; }
  .row-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 8mm; }
  .row h3 { font-size: 17pt; font-weight: 700; line-height: 1.15; }
  .row .meta { font-size: 9.5pt; color: #6f675c; margin-top: 3px; }
  .row .price { text-align: right; white-space: nowrap; }
  .row .price .lab { font-size: 7.5pt; letter-spacing: 1.6pt; text-transform: uppercase; color: #8d8578; display: block; }
  .row .price .u { font-size: 24pt; font-weight: 700; line-height: 1.1; }
  .row .price .i { font-size: 14pt; font-weight: 600; color: #8a6f14; line-height: 1.2; }
  .row ul.inc { margin-top: 5mm; }
  .row ul.inc li { font-size: 10pt; }
  .row .guide { margin-top: 4mm; padding-top: 3.5mm; border-top: 1px dashed #e3ded4; font-size: 9.5pt; color: #5c554b; }
  .row .guide b { color: #b04a3a; }
  .termlist { list-style: none; }
  .termlist li { font-size: 10.5pt; line-height: 1.7; padding-left: 17px; position: relative; color: #3a352e; }
  .termlist li::before { content: "—"; position: absolute; left: 0; color: #c9a227; }
  .others { width: 100%; border-collapse: collapse; margin-top: 4mm; }
  .others th { text-align: left; font-size: 8pt; letter-spacing: 1.6pt; text-transform: uppercase; color: #8d8578; border-bottom: 1px solid #e3ded4; padding: 0 0 4px; }
  .others td { font-size: 10pt; padding: 3.5mm 0; border-bottom: 1px solid #f0ece4; vertical-align: top; }
  .others td.p { text-align: right; white-space: nowrap; font-weight: 700; }
  .others td.p span { display: block; font-size: 9pt; color: #8a6f14; font-weight: 600; }
  .foot { position: absolute; left: 15mm; right: 15mm; bottom: 9mm; border-top: 1px solid #e3ded4; padding-top: 6px; font-size: 7.6pt; color: #9a9184; display: flex; justify-content: space-between; }
`;

const shell = (title, inner) =>
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(title)}</title><style>${CSS}</style></head><body>${inner}</body></html>`;

/** The guide rule, styled by whether it restricts this package. */
function guideAlert(pkg) {
  const restricted = pkg.category !== 'transport';
  return `<div class="alert${restricted ? '' : ' ok'}">
    <h4>${restricted ? 'Important · Guide rule at the Taj Mahal' : 'Guide included'}</h4>
    <p>${restricted ? esc(DATA.notices.tajGuideShort) : esc(pkg.guide)}</p>
  </div>`;
}

/** One big-type page for a single package, both currencies. */
function sheet(pkg) {
  return shell(
    `${pkg.name} — rates`,
    `<section class="page">
      <div class="masthead">
        <div class="brandline">Taj Mahal <b>Photography</b> · Agra, India</div>
        <div class="rule" style="margin-top:9px"></div>
        <div class="eyebrow">Package ${esc(pkg.num)}</div>
        <h1>${esc(pkg.name)}</h1>
        <div class="sub">${esc(pkg.subtitle)} · ${esc(pkg.duration)}</div>
      </div>

      <div class="rates">
        <div>
          <span class="cur">${fromLabel(pkg)} · USD</span>
          <div class="amt">${esc(usdText(pkg))}</div>
          <div class="per">per package, not per person</div>
        </div>
        <div>
          <span class="cur">${fromLabel(pkg)} · INR</span>
          <div class="amt">${esc(inrText(pkg))}</div>
          <div class="per">per package, not per person</div>
        </div>
      </div>
      <div class="ratefoot">${esc(DATA.meta.inrNote)}</div>

      <div class="facts">
        <div class="fact"><h4>Duration</h4><p>${esc(pkg.duration)}</p></div>
        <div class="fact"><h4>Photographer</h4><p>${esc(pkg.photographerShort)}</p></div>
      </div>

      ${guideAlert(pkg)}

      <h2 class="sec">What is included</h2>
      <ul class="inc">${pkg.includes.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>

      <div class="lower">
        <div>
          <h2 class="sec">Not included</h2>
          <ul class="exc">${pkg.excludes.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
        </div>
        <div>
          <h2 class="sec">Booking &amp; tickets</h2>
          <div class="terms">
            <b>20% advance confirms the booking</b> — the balance is paid after the tour, and every package is customisable.<br>
            ${esc(DATA.ticketsShort)}
          </div>
        </div>
      </div>

      <div class="cta">
        <h3>Book your date</h3>
        <div class="c">WhatsApp <b>${esc(CONTACT.whatsapp)}</b> · replies within 10 minutes<br>${esc(CONTACT.email)} · <b>${esc(CONTACT.site)}</b></div>
      </div>
    </section>`
  );
}

/** Every rate we quote: one page per category, plus the wider tour list. */
function allRates() {
  const row = (pkg) => `
    <div class="row">
      <div class="row-top">
        <div>
          <h3>${esc(pkg.name)}</h3>
          <div class="meta">${esc(pkg.subtitle)} · ${esc(pkg.duration)}</div>
        </div>
        <div class="price">
          <span class="lab">${fromLabel(pkg)}</span>
          <div class="u">${esc(usdText(pkg))}</div>
          <div class="i">${esc(inrText(pkg))}</div>
        </div>
      </div>
      <ul class="inc">${pkg.includes.slice(0, 6).map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
      <div class="guide"><b>Guide:</b> ${esc(pkg.guideShort)}</div>
    </div>`;

  const categoryPage = (cat, index) => {
    const rows = DATA.packages.filter((p) => p.category === cat.id);
    const showAlert = cat.id !== 'transport';
    return `<section class="page">
      <div class="head">
        <div class="brand">Taj Mahal <span>Photography</span></div>
        <div class="pg">Rate card ${index + 1} of ${DATA.categories.length}</div>
      </div>
      <div class="cat">
        <h2>${esc(cat.title)}</h2>
        <p class="blurb">${esc(cat.blurb)}</p>
      </div>
      ${showAlert ? `<div class="alert"><h4>Important · Guide rule at the Taj Mahal</h4><p>${esc(DATA.notices.tajGuide)}</p></div>` : ''}
      ${rows.map(row).join('')}
      <div class="foot"><div>All prices per package · ${esc(DATA.meta.inrNote)}</div><div>WhatsApp ${esc(CONTACT.whatsapp)}</div></div>
    </section>`;
  };

  const otherRows = DATA.otherPackages
    .map(
      (o) => `<tr>
        <td><b>${esc(o.name)}</b><br><span style="color:#6f675c">${esc(o.summary)}</span></td>
        <td style="color:#6f675c;white-space:nowrap">${esc(o.duration)}</td>
        <td class="p">${o.fromPrice ? 'from ' : ''}$${o.usd.toLocaleString('en-US')}<span>₹${toInr(o.usd).toLocaleString('en-IN')}</span></td>
      </tr>`
    )
    .join('');

  const contents = DATA.categories
    .map((c) => {
      const rows = DATA.packages.filter((p) => p.category === c.id);
      const min = Math.min(...rows.map((p) => p.usd));
      const minPkg = rows.find((p) => p.usd === min);
      return `<div><span>${esc(c.title)}</span><b>from $${min} · ${esc(inrText(minPkg))}</b></div>`;
    })
    .join('');

  return shell(
    'Taj Mahal Photography — all rates',
    `<section class="page cover">
      <div>
        <div class="rule"></div>
        <h1>Taj Mahal<b>Photography</b></h1>
        <div class="eyebrow">All Rates · USD &amp; INR · 2026</div>
        <p class="lede">Photography tours, guide + photo tours and transport rates — every price we quote, in dollars and rupees, on one sheet.</p>
        <div class="contents">${contents}</div>
      </div>
      <div>
        <div class="alert" style="background:#1f1a16;border-color:#b04a3a;">
          <h4 style="color:#e08b7a">Important · Guide rule at the Taj Mahal</h4>
          <p style="color:#ddd7cd">${esc(DATA.notices.tajGuide)}</p>
        </div>
        <p style="font-size:9pt;color:#8d8578;margin-top:6mm;line-height:1.5;">${esc(DATA.meta.inrNote)} All prices are per package, not per person.</p>
      </div>
      <div class="coverfoot">
        <div>WhatsApp <b>${esc(CONTACT.whatsapp)}</b> · ${esc(CONTACT.email)}</div>
        <div><b>${esc(CONTACT.site)}</b></div>
      </div>
    </section>
    ${DATA.categories.map(categoryPage).join('')}
    <section class="page">
      <div class="head">
        <div class="brand">Taj Mahal <span>Photography</span></div>
        <div class="pg">Other tours &amp; terms</div>
      </div>
      <div class="cat"><h2>Other Tours</h2><p class="blurb">Longer photography days and same-day luxury tours from Delhi.</p></div>
      <table class="others">
        <thead><tr><th>Tour</th><th>Duration</th><th style="text-align:right">USD · INR</th></tr></thead>
        <tbody>${otherRows}</tbody>
      </table>
      <h2 class="sec">Terms every package shares</h2>
      <ul class="termlist">
        ${DATA.terms.map((t) => `<li>${esc(t)}</li>`).join('')}
      </ul>
      <p class="terms"><b>Tickets.</b> ${esc(DATA.tickets)}</p>
      <div class="cta">
        <h3>Ready to book your date?</h3>
        <div class="c">WhatsApp <b>${esc(CONTACT.whatsapp)}</b> · replies within 10 minutes<br>${esc(CONTACT.email)} · <b>${esc(CONTACT.site)}</b></div>
      </div>
    </section>`
  );
}

function findChrome() {
  for (const candidate of CHROME_CANDIDATES) {
    try {
      execFileSync(candidate, ['--version'], { stdio: 'ignore' });
      return candidate;
    } catch {
      /* try the next candidate */
    }
  }
  throw new Error(
    `No Chromium found. Tried:\n  ${CHROME_CANDIDATES.join('\n  ')}\nSet CHROME_PATH to a Chrome or Chromium binary.`
  );
}

function render(chrome, work, html, outFile) {
  const src = path.join(work, path.basename(outFile).replace(/\.pdf$/, '.html'));
  writeFileSync(src, html);
  execFileSync(
    chrome,
    ['--headless', '--disable-gpu', '--no-sandbox', '--no-pdf-header-footer', `--print-to-pdf=${outFile}`, `file://${src}`],
    { stdio: 'ignore' }
  );
}

if (process.env.PDF_DUMP_DIR) {
  // Debug hook: write the HTML instead of rendering, for screenshotting.
  const dir = process.env.PDF_DUMP_DIR;
  for (const pkg of DATA.packages) writeFileSync(path.join(dir, `${pkg.id}.html`), sheet(pkg));
  writeFileSync(path.join(dir, 'all-rates.html'), allRates());
} else {
  const chrome = findChrome();
  const work = mkdtempSync(path.join(tmpdir(), 'tmp-pdf-'));
  mkdirSync(OUT, { recursive: true });

  const built = [];
  for (const pkg of DATA.packages) {
    const file = path.join(OUT, `${pkg.id}.pdf`);
    render(chrome, work, sheet(pkg), file);
    built.push(path.relative(ROOT, file));
  }
  const all = path.join(OUT, 'all-rates.pdf');
  render(chrome, work, allRates(), all);
  built.push(path.relative(ROOT, all));
  rmSync(work, { recursive: true, force: true });

  console.log(`Rendered ${built.length} PDFs with ${chrome}:`);
  for (const f of built) console.log(`  ${f}`);
}
