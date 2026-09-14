import { AlertTriangle } from 'lucide-react';
import packagesData from '@/lib/packages.json';

/**
 * The Taj Mahal does not allow a guide alongside a photographer. Guests book
 * expecting both, so the rule is stated up front on every affected package
 * rather than left to the small print.
 */
export default function TajGuideNotice({ className = '' }: { className?: string }) {
  return (
    <div className={`border-2 border-[#b04a3a] bg-[#fdf4f2] p-5 rounded-sm ${className}`}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-[#b04a3a] flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#b04a3a] mb-1.5">
            Important · Guide rule at the Taj Mahal
          </p>
          <p className="text-ink-800 leading-relaxed">{packagesData.notices.tajGuide}</p>
        </div>
      </div>
    </div>
  );
}
