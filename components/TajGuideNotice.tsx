import { AlertTriangle, BadgeCheck } from 'lucide-react';
import packagesData from '@/lib/packages.json';

const ALIASES: Record<string, string> = {
  couple: 'pre-wedding',
  'transport-photography': 'transport-guide',
};

/**
 * Whether a guide comes with this package, headlined as such.
 *
 * The Taj Mahal does not allow a guide alongside a photographer, and stating
 * that rule alone on a tour sold as "Guide + Photo" reads as "no guide at
 * all" — the opposite of what is being sold. So a package that includes a
 * guide says so first, in gold, and only the photography-only sessions carry
 * the warning.
 */
export default function TajGuideNotice({
  planId,
  className = '',
}: {
  planId: string;
  className?: string;
}) {
  const id = ALIASES[planId] ?? planId;
  const pkg = packagesData.packages.find((p) => p.id === id);

  // Plans outside the five rate-card packages (heritage trail, full day,
  // proposal) are photographer-led, so they follow the no-guide wording.
  const included = pkg ? pkg.guideIncluded : false;
  const body = pkg ? pkg.guideNotice : packagesData.packages[0].guideNotice;
  const Icon = included ? BadgeCheck : AlertTriangle;

  return (
    <div
      className={`border-2 p-5 rounded-sm ${
        included ? 'border-gold-500 bg-[#fbf7ec]' : 'border-[#b04a3a] bg-[#fdf4f2]'
      } ${className}`}
    >
      <div className="flex items-start gap-3">
        <Icon
          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${included ? 'text-gold-600' : 'text-[#b04a3a]'}`}
        />
        <div>
          <p
            className={`text-xs font-bold uppercase tracking-widest mb-1.5 ${
              included ? 'text-gold-700' : 'text-[#b04a3a]'
            }`}
          >
            {included ? 'Guide included' : 'No guide in this package'}
          </p>
          <p className="text-ink-800 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  );
}
