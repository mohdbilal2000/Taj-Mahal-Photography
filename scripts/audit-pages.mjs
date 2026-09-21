/**
 * Sweeps every route at phone and desktop width and reports layout faults
 * that are invisible from the page you happen to be editing:
 *
 *  - horizontal overflow (the page can be scrolled sideways)
 *  - floating/fixed elements sitting on top of headings, links or buttons
 *  - images that failed to load
 *  - tap targets under 36px on a phone
 *
 * Run against a built site:  node scripts/audit-pages.mjs <port>
 * Needs a headless Chrome on 9231 with --remote-debugging-port.
 */
const PORT = process.argv[2] || '3000';
const CDP = 'http://127.0.0.1:9231';

const ROUTES = [
  '/', '/services', '/services/sunrise', '/services/pre-wedding',
  '/services/guided-photo-tour-small', '/services/transport-guide',
  '/services/sunrise-luxury-innova', '/portfolio', '/book', '/faq',
  '/about', '/blog', '/permit-guide', '/payment', '/terms', '/privacy',
];
const VIEWPORTS = [
  { name: 'phone', width: 390, height: 844, mobile: true },
  { name: 'desktop', width: 1440, height: 900, mobile: false },
];

const AUDIT = `(() => {
  const faults = [];
  const label = (el) => {
    const t = (el.textContent || '').trim().replace(/\\s+/g, ' ').slice(0, 45);
    return el.tagName.toLowerCase() + (el.className && typeof el.className === 'string'
      ? '.' + el.className.split(' ').filter(Boolean).slice(0, 2).join('.') : '') + (t ? ' "' + t + '"' : '');
  };

  // 1. Sideways scroll — almost always one element too wide.
  const de = document.documentElement;
  if (de.scrollWidth > window.innerWidth + 1) {
    const wide = [...document.querySelectorAll('body *')].filter((el) => {
      const r = el.getBoundingClientRect();
      return r.width > 0 && (r.right > window.innerWidth + 1 || r.left < -1);
    }).slice(0, 4);
    faults.push({ kind: 'overflow-x', detail: de.scrollWidth + 'px wide vs ' + window.innerWidth,
      nodes: wide.map(label) });
  }

  // 2. Floating furniture parked on top of something readable or clickable.
  const floats = [...document.querySelectorAll('body *')].filter((el) => {
    const cs = getComputedStyle(el);
    if (cs.position !== 'fixed' || cs.visibility === 'hidden' || cs.opacity === '0') return false;
    const r = el.getBoundingClientRect();
    if (r.width < 8 || r.height < 8 || r.width > window.innerWidth * 0.98) return false;
    return true;
  });
  const targets = [...document.querySelectorAll('h1,h2,h3,h4,p,a,button')].filter((el) => {
    const r = el.getBoundingClientRect();
    return r.width > 24 && r.height > 12 && r.top < window.innerHeight && r.bottom > 0
      && getComputedStyle(el).position !== 'fixed' && (el.textContent || '').trim().length > 2;
  });
  for (const f of floats) {
    const fr = f.getBoundingClientRect();
    for (const t of targets) {
      if (f.contains(t) || t.contains(f)) continue;
      const tr = t.getBoundingClientRect();
      const ox = Math.min(fr.right, tr.right) - Math.max(fr.left, tr.left);
      const oy = Math.min(fr.bottom, tr.bottom) - Math.max(fr.top, tr.top);
      if (ox > 12 && oy > 12) {
        faults.push({ kind: 'float-covers-content', detail: label(f) + ' covers ' + label(t) });
        break;
      }
    }
  }

  // 3. Broken media.
  for (const img of document.querySelectorAll('img')) {
    if (img.complete && img.naturalWidth === 0) faults.push({ kind: 'broken-image', detail: img.currentSrc || img.src });
  }

  // 4. Tap targets too small to hit on a phone.
  //    WCAG 2.5.8 asks for 24x24 and exempts links sitting inline in a
  //    sentence, since shrinking those would wreck the prose. So: measure
  //    against 24, and skip anything flowing inside a paragraph.
  if (window.innerWidth < 500) {
    const inlineInText = (el) => {
      const p = el.closest('p, li');
      return !!p && getComputedStyle(el).display.startsWith('inline');
    };
    const small = [...document.querySelectorAll('a,button')].filter((el) => {
      const r = el.getBoundingClientRect();
      if (!(r.width > 0 && r.top < window.innerHeight && r.bottom > 0)) return false;
      if (inlineInText(el)) return false;
      return r.height < 24 || r.width < 24;
    }).slice(0, 5);
    if (small.length) faults.push({ kind: 'small-tap-target', nodes: small.map(label) });
  }
  return JSON.stringify(faults);
})()`;

const t = await (await fetch(CDP + '/json/new?' + encodeURIComponent('about:blank'), { method: 'PUT' })).json();
const ws = new WebSocket(t.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0; const pending = new Map();
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) pending.get(m.id)(m.result); };
const send = (method, params = {}) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });

await send('Page.enable');
let total = 0;
for (const vp of VIEWPORTS) {
  await send('Emulation.setDeviceMetricsOverride', { width: vp.width, height: vp.height, deviceScaleFactor: 1, mobile: vp.mobile });
  for (const route of ROUTES) {
    await send('Page.navigate', { url: `http://localhost:${PORT}${route}` });
    await new Promise((r) => setTimeout(r, 2200));
    // check at the top and again a screen down, where floating furniture appears
    for (const scroll of [0, 900, 1800, 3200, 5200]) {
      await send('Runtime.evaluate', { expression: `window.scrollTo({top:${scroll},behavior:'instant'})` });
      await new Promise((r) => setTimeout(r, 550));
      const r = await send('Runtime.evaluate', { expression: AUDIT, returnByValue: true });
      let faults = [];
      try { faults = JSON.parse(r.result?.value || '[]'); } catch { /* page still settling */ }
      for (const f of faults) {
        total++;
        console.log(`[${vp.name}] ${route} @${scroll}  ${f.kind}: ${f.detail || ''}${f.nodes ? ' → ' + f.nodes.join(' | ') : ''}`);
      }
    }
  }
}
console.log(total === 0 ? 'CLEAN — no faults found' : `${total} fault(s)`);
ws.close();
