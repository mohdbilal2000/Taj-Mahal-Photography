import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#14110F',
          color: '#C9A227',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ fontSize: 86, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>TM</div>
        <div style={{ fontSize: 15, letterSpacing: '0.2em', color: '#8D8578', marginTop: 10 }}>AGRA</div>
      </div>
    ),
    size
  );
}
