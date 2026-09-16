import { ImageResponse } from 'next/og';
import { SITE } from '@/lib/seo';
import { PLANS } from '@/lib/plans';

export const alt = 'Taj Mahal Photography — government-licensed photographer in Agra, India';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const LOWEST = PLANS.reduce((min, p) => (p.price < min.price ? p : min), PLANS[0]);

/**
 * The share card. This business runs on WhatsApp, so this image is often the
 * first thing a guest ever sees of the brand — it was previously a hotlinked
 * stock photo with no name, price or licence on it.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#14110F',
          padding: '64px 72px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: 64, height: 4, background: '#C9A227' }} />
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: '0.24em',
              color: '#8D8578',
              marginTop: 26,
              textTransform: 'uppercase',
            }}
          >
            Government licensed · Agra, India
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: 20 }}>
            <div style={{ fontSize: 76, color: '#FFFFFF', lineHeight: 1.05 }}>Taj Mahal</div>
            <div style={{ fontSize: 76, color: '#C9A227', lineHeight: 1.05, fontStyle: 'italic' }}>
              Photography
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 27, color: '#DDD7CD', marginTop: 26, maxWidth: 820 }}>
            The official permit, the quiet hour after sunrise, and photographs you are actually in.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', fontSize: 18, color: '#8D8578', letterSpacing: '0.18em' }}>
              SESSIONS FROM
            </div>
            <div style={{ display: 'flex', fontSize: 52, color: '#FFFFFF', marginTop: 6 }}>
              ${LOWEST.price} USD
            </div>
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#C9A227' }}>{SITE.domain}</div>
        </div>
      </div>
    ),
    size
  );
}
