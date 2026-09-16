import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

/**
 * The site had no favicon at all — a default globe in the tab on every visit.
 * Generated rather than shipped as a binary so the mark stays in sync with the
 * brand colours in one place.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#14110F',
          color: '#C9A227',
          fontSize: 38,
          fontWeight: 700,
          fontFamily: 'Georgia, serif',
          letterSpacing: '-0.04em',
        }}
      >
        TM
      </div>
    ),
    size
  );
}
