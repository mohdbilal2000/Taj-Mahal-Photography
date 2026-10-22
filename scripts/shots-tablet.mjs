const PORT = process.argv[2] || '3000';
const OUT = process.argv[3];
const WIDTH = Number(process.argv[4] || 768);
const targets = process.argv.slice(5);
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
await send('Emulation.setDeviceMetricsOverride', { width: WIDTH, height: 1024, deviceScaleFactor: 1, mobile: WIDTH < 1024 });
for (const target of targets) {
  const [route, scrolls = '0'] = target.split('@');
  await send('Page.navigate', { url: `http://localhost:${PORT}${route}` });
  await new Promise((r) => setTimeout(r, 2800));
  for (const scroll of scrolls.split(',')) {
    await send('Runtime.evaluate', { expression: `window.scrollTo({top:${scroll},behavior:'instant'})` });
    await new Promise((r) => setTimeout(r, 900));
    const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 72 });
    await fs.writeFile(`${OUT}/${WIDTH}_${route.replace(/[^a-z0-9]+/gi, '-') || 'home'}_${scroll}.jpg`, Buffer.from(shot.data, 'base64'));
    console.log(WIDTH, route, scroll);
  }
}
ws.close();
