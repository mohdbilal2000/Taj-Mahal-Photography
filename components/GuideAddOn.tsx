import Link from 'next/link';
import { UserRoundCheck } from 'lucide-react';
import { GUIDE_ADDON_USD, offersGuideAddOn } from '@/lib/plans';

/**
 * "Add a licensed guide for $22", on the plans that do not already include
 * one. The Taj Mahal does not allow a guide alongside a photographer inside
 * the complex, so the line says where the guide is with you; promising
 * more would be promising something the monument does not permit.
 *
 * `compact` is the one-line version for plan cards.
 */
export default function GuideAddOn({
  planId,
  compact = false,
  className = '',
}: {
  planId: string;
  compact?: boolean;
  className?: string;
}) {
  if (!offersGuideAddOn(planId)) return null;
  const href = `/book?plan=${planId}&guide=1`;

  if (compact) {
    return (
      <p className={`flex items-start gap-2 text-xs leading-snug text-ink-700 ${className}`}>
        <UserRoundCheck className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold-600" />
        <span>
          Add a licensed guide for +${GUIDE_ADDON_USD} per booking.{' '}
          <Link href={href} className="font-semibold text-gold-700 underline-offset-2 hover:underline">
            Add when booking
          </Link>
        </span>
      </p>
    );
  }

  return (
    <div className={`rounded-sm border border-gold-500/50 bg-[#fbf7ec] p-5 ${className}`}>
      <div className="flex items-start gap-3">
        <UserRoundCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold-600" />
        <div>
          <p className="mb-1.5 text-xs font-bold uppercase tracking-widest text-gold-700">
            Optional · +${GUIDE_ADDON_USD} per booking
          </p>
          <p className="leading-relaxed text-ink-800">
            Add a Ministry of Tourism licensed guide to this booking for a flat ${GUIDE_ADDON_USD}, once,
            not per guest. The guide is with you at Agra Fort, Mehtab Bagh and Itmad-ud-Daulah. Inside
            the Taj Mahal a guide is not permitted alongside a photographer, so there your photographer
            takes you through.
          </p>
          <p className="mt-3 text-sm text-ink-700">
            Your photos and details stay private: delivered in a private gallery and never sold to third
            parties. <Link href="/privacy" className="font-semibold text-gold-700 underline-offset-2 hover:underline">Privacy policy</Link>
          </p>
          <Link href={href} className="btn btn-gold btn-sm mt-4">
            Book with a guide
          </Link>
        </div>
      </div>
    </div>
  );
}
