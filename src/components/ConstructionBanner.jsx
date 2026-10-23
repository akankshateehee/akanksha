import React, { useState } from 'react';
import { Hammer, X, Sparkles, ArrowUpRight } from 'lucide-react';
import { BIO_DATA } from '../data/aboutData';

export default function ConstructionBanner() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <aside 
      aria-label="Site status notification"
      className="bg-[#fff1f2] border-b border-[#fecdd3] text-[#9f1239] text-xs font-mono py-2.5 px-4 sm:px-8 relative z-50 transition-all duration-300"
    >
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-neutomni-red text-white text-[10px] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
            
          </span>

        </div>

        <div className="flex items-center gap-4 shrink-0">
          <a
            href={BIO_DATA.portfolioDrive}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 underline font-semibold text-neutomni-red hover:text-neutomni-redHover"
          >
            <span>View Full Portfolio in PDF here</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss banner"
            className="text-neutral-400 hover:text-neutomni-text p-1 cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}

