/**
 * Renders the review QR as an SVG committed to public/. Generated at build
 * time by hand rather than at runtime so the page ships no QR library and no
 * third-party image call — a QR that depends on an external service is a QR
 * that breaks on a poster in a hotel lobby.
 *
 *   node scripts/generate-qr.mjs
 */
import QRCode from 'qrcode';
import { writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// The canonical profile link — a CID can only ever resolve to this business.
const REVIEW_URL = 'https://maps.google.com/?cid=9101268072152291089';

const svg = await QRCode.toString(REVIEW_URL, {
  type: 'svg',
  errorCorrectionLevel: 'H', // survives a logo punched into the middle, and print wear
  margin: 1,
  color: { dark: '#14110F', light: '#0000' },
});

mkdirSync(path.join(ROOT, 'public'), { recursive: true });
writeFileSync(path.join(ROOT, 'public', 'review-qr.svg'), svg);
console.log('public/review-qr.svg →', REVIEW_URL);
