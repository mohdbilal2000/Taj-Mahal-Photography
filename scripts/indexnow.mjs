/**
 * Tells Bing, Yandex and the other IndexNow participants that pages changed,
 * instead of waiting for them to re-crawl. Google does not take part, but it
 * reads the sitemap, which the same deploy updates.
 *
 *   node scripts/indexnow.mjs            # everything in the sitemap
 *   node scripts/indexnow.mjs /blog/x    # just these paths
 */
const KEY = 'ce8062adf85dabd47d63e75f526e0724';
const HOST = 'www.tajmahalphotography.com';
const ORIGIN = `https://${HOST}`;

const args = process.argv.slice(2);
let urls = args.map((p) => (p.startsWith('http') ? p : `${ORIGIN}${p}`));

if (urls.length === 0) {
  const xml = await (await fetch(`${ORIGIN}/sitemap.xml`)).text();
  urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

if (urls.length === 0) {
  console.error('No URLs to submit.');
  process.exit(1);
}

const res = await fetch('https://api.indexnow.org/IndexNow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `${ORIGIN}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`IndexNow: ${res.status} ${res.statusText} for ${urls.length} URL(s)`);
if (!res.ok) process.exit(1);
