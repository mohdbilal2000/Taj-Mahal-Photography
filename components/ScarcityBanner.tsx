const TICKER = [
  'Ministry of Tourism — Licensed',
  'Only 2 photography permits per day',
  '10-minute WhatsApp response',
  'High-res gallery in 48 hours',
  'Authorized access inside the Taj Mahal',
];

export default function ScarcityBanner() {
  // A slim editorial ticker. Doubled content + 50% translate = seamless loop.
  const items = [...TICKER, ...TICKER];

  return (
    <div className="border-b border-line bg-night/80 backdrop-blur-sm">
      <div className="marquee-mask overflow-hidden">
        <div className="animate-marquee flex w-max whitespace-nowrap py-2">
          {items.map((item, i) => (
            <span
              key={i}
              className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted flex items-center"
            >
              <span className="mx-5 text-accent" aria-hidden="true">
                ✦
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
