/**
 * Renders the package PDFs into public/pdf/ — one single-page sheet per
 * package per audience, plus a combined brochure per audience.
 *
 *   node scripts/generate-pdfs.mjs
 *
 * Content and prices come from lib/packages.json, so the PDFs and the site
 * never drift apart. Rendering uses the Chromium that Playwright installs;
 * set CHROME_PATH to override the binary.
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

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** "$120" / "from ₹10,000" — grouped the way each currency is read locally. */
function money(pkg, audience) {
  const value = pkg[audience.priceKey];
  const grouped =
    audience.currency === 'INR'
      ? value.toLocaleString('en-IN')
      : value.toLocaleString('en-US');
  return `${audience.symbol}${grouped}`;
}

const CSS = `
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: "DejaVu Sans", "Helvetica Neue", Arial, sans-serif; color: #1a1a1a; background: #fff; }
  .page { width: 210mm; height: 297mm; padding: 13mm 15mm 12mm; position: relative; page-break-after: always; overflow: hidden; }
  .page:last-child { page-break-after: auto; }
  .masthead { background: #14110f; color: #fff; margin: -13mm -15mm 0; padding: 11mm 15mm 9mm; }
  .rule { width: 46px; height: 3px; background: #c9a227; }
  .eyebrow { font-size: 8pt; letter-spacing: 3pt; text-transform: uppercase; color: #c9a227; font-weight: 700; margin: 9px 0 6px; }
  .masthead h1 { font-size: 26pt; font-weight: 600; line-height: 1.12; letter-spacing: -0.3pt; }
  .masthead .sub { font-size: 10pt; color: #bdb4a6; margin-top: 5px; }
  .brandline { font-size: 8.5pt; letter-spacing: 2.4pt; text-transform: uppercase; color: #8d8578; }
  .brandline b { color: #fff; font-weight: 700; }
  .pricebar { display: flex; justify-content: space-between; align-items: flex-end; background: #1f1a16; color: #fff; margin: 0 -15mm; padding: 7mm 15mm; border-top: 2px solid #c9a227; }
  .pricebar .from { font-size: 8pt; letter-spacing: 2pt; text-transform: uppercase; color: #c9a227; display: block; margin-bottom: 2px; }
  .pricebar .val { font-size: 30pt; font-weight: 300; line-height: 1; }
  .pricebar .cur { font-size: 10pt; color: #bdb4a6; }
  .pricebar .facts { text-align: right; font-size: 9pt; line-height: 1.75; color: #ddd7cd; }
  .pricebar .facts b { color: #fff; }
  h2.sec { font-size: 9pt; letter-spacing: 2.4pt; text-transform: uppercase; color: #8d8578; margin: 8mm 0 4mm; padding-bottom: 5px; border-bottom: 1px solid #e3ded4; }
  ul.inc { list-style: none; display: grid; grid-template-columns: 1fr 1fr; gap: 5px 9mm; }
  ul.inc li { font-size: 10pt; line-height: 1.5; padding-left: 16px; position: relative; }
  ul.inc li::before { content: "✦"; position: absolute; left: 0; color: #c9a227; font-size: 8pt; top: 2px; }
  ul.exc { list-style: none; }
  ul.exc li { font-size: 9.6pt; line-height: 1.65; padding-left: 16px; position: relative; color: #5c554b; }
  ul.exc li::before { content: "×"; position: absolute; left: 1px; color: #b04a3a; font-weight: 700; }
  .cols { display: grid; grid-template-columns: 1fr 1fr; gap: 9mm; }
  .panel { background: #faf8f4; border: 1px solid #e3ded4; padding: 6mm 7mm; }
  .panel h3 { font-size: 8.5pt; letter-spacing: 2pt; text-transform: uppercase; color: #8d8578; margin-bottom: 6px; }
  .panel p { font-size: 9.4pt; line-height: 1.65; color: #3a352e; }
  .booking { border-left: 4px solid #c9a227; background: #faf8f4; padding: 5.5mm 7mm; margin-top: 5mm; font-size: 9.4pt; line-height: 1.65; color: #3a352e; }
  .booking b { color: #14110f; }
  .cta { position: absolute; left: 15mm; right: 15mm; bottom: 12mm; background: #14110f; color: #fff; padding: 6.5mm 8mm; display: flex; justify-content: space-between; align-items: center; }
  .cta h3 { font-size: 14pt; font-weight: 400; }
  .cta .c { text-align: right; font-size: 9.4pt; line-height: 1.7; color: #ddd7cd; }
  .cta .c b { color: #c9a227; }
  /* combined brochure */
  .pkg { border: 1px solid #e3ded4; border-left: 4px solid #c9a227; padding: 6.5mm 8mm 6mm; margin-bottom: 5.5mm; break-inside: avoid; }
  .pkg-top { display: flex; justify-content: space-between; align-items: flex-start; gap: 8mm; }
  .num { font-size: 8pt; font-weight: 700; color: #c9a227; letter-spacing: 2pt; }
  .pkg h2 { font-size: 16pt; font-weight: 600; line-height: 1.15; margin: 3px 0 4px; }
  .meta { font-size: 8.8pt; color: #6f675c; }
  .amount { text-align: right; white-space: nowrap; }
  .amount .from { font-size: 7.5pt; color: #8d8578; text-transform: uppercase; letter-spacing: 1.4pt; display: block; }
  .amount .val { font-size: 23pt; font-weight: 300; line-height: 1; }
  .pkg ul.inc { margin-top: 7px; }
  .pkg ul.inc li { font-size: 9.2pt; }
  .guideline { margin-top: 7px; padding-top: 6px; border-top: 1px dashed #e3ded4; font-size: 8.6pt; color: #6f675c; }
  .guideline b { color: #2c2823; }
  .head { display: flex; justify-content: space-between; align-items: baseline; border-bottom: 1px solid #e3ded4; padding-bottom: 8px; margin-bottom: 8mm; }
  .head .brand { font-size: 9.5pt; font-weight: 700; letter-spacing: 1.2pt; text-transform: uppercase; }
  .head .brand span { color: #c9a227; }
  .head .pg { font-size: 8pt; color: #8d8578; letter-spacing: 1.4pt; text-transform: uppercase; }
  .cover { background: #14110f; color: #fff; display: flex; flex-direction: column; justify-content: space-between; }
  .cover h1 { font-size: 40pt; font-weight: 300; line-height: 1.05; margin: 16px 0 8px; }
  .cover h1 b { display: block; color: #c9a227; font-weight: 700; }
  .cover .lede { font-size: 11.5pt; line-height: 1.65; color: #ddd7cd; max-width: 135mm; margin-top: 12px; }
  .badges { display: flex; gap: 7px; flex-wrap: wrap; margin-top: 18px; }
  .badges div { border: 1px solid #4a423a; color: #efe7d9; font-size: 8.5pt; padding: 5px 11px; }
  .strip { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; }
  .strip > div { background: #1f1a16; border-top: 2px solid #c9a227; padding: 10px 9px; }
  .strip .label { display: block; font-size: 7.2pt; color: #b9b0a2; line-height: 1.35; text-transform: uppercase; letter-spacing: 0.4pt; min-height: 20pt; }
  .strip .amt { font-size: 14pt; font-weight: 700; color: #fff; }
  .fineprint { font-size: 8.5pt; color: #8d8578; margin-top: 9px; line-height: 1.5; }
  .coverfoot { border-top: 1px solid #332d27; padding-top: 13px; display: flex; justify-content: space-between; font-size: 9pt; color: #bdb4a6; }
  .coverfoot b { color: #fff; }
  .foot { position: absolute; left: 15mm; right: 15mm; bottom: 9mm; border-top: 1px solid #e3ded4; padding-top: 6px; font-size: 7.6pt; color: #9a9184; display: flex; justify-content: space-between; }
`;

const shell = (title, inner) =>
  `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(title)}</title><style>${CSS}</style></head><body>${inner}</body></html>`;

/** One-page sheet for a single package, written for one audience. */
function sheet(pkg, audience) {
  const price = money(pkg, audience);
  return shell(
    `${pkg.name} — ${audience.label}`,
    `<section class="page">
      <div class="masthead">
        <div class="brandline">Taj Mahal <b>Photography</b> · Agra, India</div>
        <div class="rule" style="margin-top:9px"></div>
        <div class="eyebrow">Package ${esc(pkg.num)} · ${esc(audience.label)}</div>
        <h1>${esc(pkg.name)}</h1>
        <div class="sub">${esc(pkg.subtitle)}</div>
      </div>

      <div class="pricebar">
        <div>
          <span class="from">${pkg.fromPrice ? 'Starting from' : 'Package price'}</span>
          <span class="val">${esc(price)}</span> <span class="cur">${esc(audience.currency)}</span>
        </div>
        <div class="facts">
          <b>Duration:</b> ${esc(pkg.duration)}<br>
          <b>Guide:</b> ${esc(pkg.guide)}<br>
          <b>Photographer:</b> ${esc(pkg.photographer)}
        </div>
      </div>

      <h2 class="sec">What is included</h2>
      <ul class="inc">${pkg.includes.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>

      <h2 class="sec">Not included</h2>
      <ul class="exc">${pkg.excludes.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>

      <h2 class="sec">Good to know</h2>
      <div class="cols">
        <div class="panel">
          <h3>Monument tickets</h3>
          <p>${esc(audience.tickets)}</p>
        </div>
        <div class="panel">
          <h3>Language</h3>
          <p>${esc(audience.language)}</p>
        </div>
      </div>

      <div class="booking">
        <b>Booking &amp; payment.</b> ${esc(audience.payment)} Every package is customisable — tell us what you want changed and we will re-quote.<br>
        <b>Best for.</b> ${esc(pkg.bestFor)}<br>
        <span style="color:#6f675c">${audience.extras.map((e) => esc(e)).join(' · ')}</span>
      </div>

      <div class="cta">
        <h3>Book your date</h3>
        <div class="c">WhatsApp <b>${esc(CONTACT.whatsapp)}</b> · replies within 10 minutes<br>${esc(CONTACT.email)} · <b>${esc(CONTACT.site)}</b></div>
      </div>
    </section>`
  );
}

/** All five packages, written for one audience. */
function brochure(packages, audience) {
  const card = (pkg) => `
    <div class="pkg">
      <div class="pkg-top">
        <div>
          <div class="num">PACKAGE ${esc(pkg.num)}</div>
          <h2>${esc(pkg.name)}</h2>
          <div class="meta">${esc(pkg.duration)} · ${esc(pkg.subtitle)}</div>
        </div>
        <div class="amount">
          <span class="from">${pkg.fromPrice ? 'From' : 'Price'}</span>
          <span class="val">${esc(money(pkg, audience))}</span>
        </div>
      </div>
      <ul class="inc">${pkg.includes.slice(0, 6).map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
      <div class="guideline"><b>Guide:</b> ${esc(pkg.guide)}</div>
    </div>`;

  const strip = packages
    .map(
      (p) =>
        `<div><span class="label">${esc(p.short)}</span><span class="amt">${esc(money(p, audience))}${p.fromPrice ? '+' : ''}</span></div>`
    )
    .join('');

  return shell(
    `Taj Mahal Photography — Packages for ${audience.label}`,
    `<section class="page cover">
      <div>
        <div class="rule"></div>
        <h1>Taj Mahal<b>Photography</b></h1>
        <div class="eyebrow">Packages &amp; Pricing · ${esc(audience.label)} · 2026</div>
        <p class="lede">Government-licensed photography and guiding in Agra. Five packages, one honest price each — the permit, the planning and the pickup are handled, so all you do is turn up at sunrise.</p>
        <div class="badges">
          <div>Ministry of Tourism licensed</div>
          <div>Official photography permit included</div>
          <div>Every package customisable</div>
          <div>20% advance confirms the booking</div>
        </div>
      </div>
      <div>
        <div class="strip">${strip}</div>
        <p class="fineprint">All prices in ${esc(audience.currency)}, per package — not per person. ${esc(audience.tickets)}</p>
      </div>
      <div class="coverfoot">
        <div>WhatsApp <b>${esc(CONTACT.whatsapp)}</b> · ${esc(CONTACT.email)}</div>
        <div><b>${esc(CONTACT.site)}</b></div>
      </div>
    </section>
    <section class="page">
      <div class="head"><div class="brand">Taj Mahal <span>Photography</span></div><div class="pg">Packages 01–03 · ${esc(audience.label)}</div></div>
      ${packages.slice(0, 3).map(card).join('')}
      <div class="foot"><div>Taj Mahal Photography · Agra, India</div><div>Page 2</div></div>
    </section>
    <section class="page">
      <div class="head"><div class="brand">Taj Mahal <span>Photography</span></div><div class="pg">Packages 04–05 · ${esc(audience.label)}</div></div>
      ${packages.slice(3).map(card).join('')}
      <div class="panel" style="margin-top:6mm">
        <h3>Booking &amp; payment</h3>
        <p>${esc(audience.payment)} A 20% advance confirms the booking and the balance is paid after the tour. Every package is customisable.</p>
      </div>
      <div class="cta">
        <h3>Ready to book your date?</h3>
        <div class="c">WhatsApp <b>${esc(CONTACT.whatsapp)}</b> · replies within 10 minutes<br>${esc(CONTACT.email)} · <b>${esc(CONTACT.site)}</b></div>
      </div>
      <div class="foot" style="bottom:5mm"><div>Taj Mahal Photography · Agra, India</div><div>Page 3</div></div>
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
    [
      '--headless',
      '--disable-gpu',
      '--no-sandbox',
      '--no-pdf-header-footer',
      `--print-to-pdf=${outFile}`,
      `file://${src}`,
    ],
    { stdio: 'ignore' }
  );
}

const chrome = findChrome();
const work = mkdtempSync(path.join(tmpdir(), 'tmp-pdf-'));
mkdirSync(OUT, { recursive: true });

const built = [];
for (const [key, audience] of Object.entries(DATA.audiences)) {
  for (const pkg of DATA.packages) {
    const file = path.join(OUT, `${pkg.id}-${key}.pdf`);
    render(chrome, work, sheet(pkg, audience), file);
    built.push(path.relative(ROOT, file));
  }
  const all = path.join(OUT, `all-packages-${key}.pdf`);
  render(chrome, work, brochure(DATA.packages, audience), all);
  built.push(path.relative(ROOT, all));
}
rmSync(work, { recursive: true, force: true });

console.log(`Rendered ${built.length} PDFs with ${chrome}:`);
for (const f of built) console.log(`  ${f}`);
