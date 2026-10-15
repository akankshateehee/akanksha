import React from 'react';
import { BRANDS } from '../data/brandsData';

export default function BrandLogos({ 
  headline = "Industry & Studio Experience",
  tagline = "Professional design engagements across global consultancies, appliances, luxury home goods, and industrial engineering."
}) {
  return (
    <section className="max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-24 md:pb-32">
      <div className="border-t border-neutomni-border pt-16 md:pt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-neutomni-red" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-neutomni-red font-mono">
                Studio Track Record
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutomni-text">
              {headline}
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutomni-textSecondary max-w-lg font-light leading-relaxed">
            {tagline}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="group relative flex flex-col justify-between bg-white hover:bg-white border border-neutomni-border hover:border-neutomni-red/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-neutomni-surfaceMuted border border-neutomni-borderSubtle flex items-center justify-center p-2 overflow-hidden">
                  <img
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    loading="lazy"
                    className="w-full h-full object-contain filter contrast-125"
                  />
                </div>
                <span className="text-[10px] font-mono text-neutomni-red font-bold tracking-wider uppercase">
                  {brand.period}
                </span>
              </div>
              
              <div>
                <h3 className="text-base font-bold text-neutomni-text mb-1 group-hover:text-neutomni-red transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs font-mono text-neutomni-textSecondary mb-2 font-medium">
                  {brand.role}
                </p>
                <p className="text-[11px] text-neutomni-textMuted leading-relaxed font-light">
                  {brand.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
