/**
 * Screenshots a list of routes at phone and desktop width, at given scroll
 * depths, so a visual change can be reviewed rather than assumed.
 *
 *   node scripts/shots.mjs <port> <outDir> <route>[@scroll,scroll] ...
 */
const [PORT, OUT, ...targets] = process.argv.slice(2);
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
const VIEWPORTS = [
  { name: 'phone', width: 390, height: 844, mobile: true },
  { name: 'desktop', width: 1440, height: 900, mobile: false },
];

for (const vp of VIEWPORTS) {
  await send('Emulation.setDeviceMetricsOverride', {
    width: vp.width, height: vp.height, deviceScaleFactor: 1, mobile: vp.mobile,
  });
  for (const target of targets) {
    const [route, scrolls = '0'] = target.split('@');
    await send('Page.navigate', { url: `http://localhost:${PORT}${route}` });
    await new Promise((r) => setTimeout(r, 2600));
    for (const scroll of scrolls.split(',')) {
      await send('Runtime.evaluate', { expression: `window.scrollTo({top:${scroll},behavior:'instant'})` });
      await new Promise((r) => setTimeout(r, 900));
      const shot = await send('Page.captureScreenshot', { format: 'jpeg', quality: 72 });
      const name = `${vp.name}_${route.replace(/[^a-z0-9]+/gi, '-') || 'home'}_${scroll}.jpg`;
      await fs.writeFile(`${OUT}/${name}`, Buffer.from(shot.data, 'base64'));
      console.log(name);
    }
  }
}
ws.close();
