// one-off: a 320px pass over the sections that were revamped
const PORT = process.argv[2] || '3000';
const OUT = process.argv[3];
const CDP = 'http://127.0.0.1:9231';
const fs = await import('node:fs/promises');
await fs.mkdir(OUT, { recursive: true });
const t = await (await fetch(`${CDP}/json/new?${encodeURIComponent('about:blank')}`, { method: 'PUT' })).json();
const ws = new WebSocket(t.webSocketDebuggerUrl);
await new Promise((r) => (ws.onopen = r));
let id = 0; const pending = new Map();
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) pending.get(m.id)(m.result); };
const send = (method, params = {}) => new Promise((res) => { const i = ++id; pending.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 320, height: 640, deviceScaleFactor: 1, mobile: true });
await send('Page.navigate', { url: `http://localhost:${PORT}/` });
await new Promise((r) => setTimeout(r, 3000));
// scroll to each section by id/selector text
for (const [name, selector] of [
  ['hero', 'h1'],
  ['licence', 'section.section.bg-white h2'],
  ['film', 'section.grain h2'],
]) {
  await send('Runtime.evaluate', {
    expression: `(() => { const el = document.querySelector(${JSON.stringify(selector)}); if (el) el.scrollIntoView({block:'start',behavior:'instant'}); window.scrollBy(0,-90); })()`,
  });
  await new Promise((r) => setTimeout(r, 1200));
  const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 75 });
  await fs.writeFile(`${OUT}/320_${name}.jpg`, Buffer.from(shot.data, 'base64'));
  console.log(name);
}
ws.close();
