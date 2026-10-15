import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NAVYA_ABOUT } from '../data/navyaContent';
import { motion } from 'framer-motion';
import { editorialEasing } from './MotionWrappers';

interface HeroProps {
  onExplore6Ls: () => void;
  onExploreArtisans: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore6Ls, onExploreArtisans }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden border-b border-stone-200">
      {/* Subtle organic background wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F4EFE6]/60 via-[#FAF7F2] to-[#FAF7F2] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow with smooth fade */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: editorialEasing }}
          className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B94A28] mb-4"
        >
          <span>Grassroots Women Sovereignty</span>
          <span aria-hidden="true">·</span>
          <span>Self-Help Group Federation</span>
          <span aria-hidden="true">·</span>
          <span>Verified Social Impact</span>
        </motion.div>

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: editorialEasing }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 font-display leading-[1.08] text-balance"
            >
              From Village Circles to <span className="text-[#B94A28]">Sovereign</span> Economic Collectives
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: editorialEasing }}
              className="text-lg sm:text-xl text-stone-700 font-normal leading-relaxed max-w-2xl"
            >
              <strong className="font-semibold text-stone-900">NAVYA</strong> is a women’s empowerment programme that helps rural women and young women gain business skills, improve well-being, access markets, earn sustainable income, and become confident community leaders.
            </motion.p>

            {/* CTAs with strict single-line restraint */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: editorialEasing }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                onClick={onExplore6Ls}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-[#B94A28] hover:bg-[#A03D1F] active:bg-[#8A3217] rounded-lg transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Explore the 6Ls Framework</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreArtisans}
                className="px-6 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <span>Browse Artisan Showcase</span>
              </button>
            </motion.div>

            {/* Adjacent Quantitative Proof Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: editorialEasing }}
              className="pt-6 border-t border-stone-200/80"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {NAVYA_ABOUT.verifiedNumbers.map((num, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-bold font-display text-stone-900 tabular-nums">
                      {num.value}
                    </div>
                    <div className="text-xs font-semibold text-stone-700">{num.label}</div>
                    <div className="text-[11px] text-stone-500 leading-snug">{num.detail}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Asset with subtle scale-in */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: editorialEasing }}
              className="relative group"
            >
              {/* Outer decorative offset hairline frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#B94A28]/10 via-[#184A3B]/10 to-transparent rounded-2xl -z-10 blur-xs" />

              <div className="relative overflow-hidden rounded-xl bg-stone-200 border border-stone-300 shadow-md aspect-4/3 sm:aspect-16/10 lg:aspect-4/3">
                <img
                  src="/src/assets/images/hero_women_collective_1791487435923.jpg"
                  alt="Women leaders of Mahila Pragati SHG reviewing group passbooks under a village banyan tree"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.innerHTML = `
                        <div class="w-full h-full bg-[#EFE9DF] flex flex-col items-center justify-center p-8 text-center text-stone-700">
                          <span class="text-xs uppercase tracking-widest font-semibold text-[#B94A28] mb-2">Mahila Pragati SHG</span>
                          <h4 class="font-display text-xl font-bold text-stone-900 mb-2">Weekly Passbook Review</h4>
                          <p class="text-xs text-stone-600 max-w-xs">38,400+ women actively leading peer savings circles and micro-enterprises.</p>
                        </div>
                      `;
                    }
                  }}
                />

                {/* Editorial Caption Scrim */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white">
                  <div className="flex items-center gap-2 text-[11px] text-stone-300 uppercase tracking-wider font-medium">
                    <span>Sitamarhi Cluster</span>
                    <span aria-hidden="true">·</span>
                    <span>Mahila Pragati SHG</span>
                  </div>
                  <p className="text-xs font-serif-quote italic text-stone-200 mt-1 line-clamp-2">
                    "Sitting in that circle was the first time anyone asked me what I thought about money."
                  </p>
                </div>
              </div>

              {/* Verified Trust Badge below image */}
              <div className="mt-3 flex items-center justify-between text-xs text-stone-500 px-1">
                <span className="flex items-center gap-1.5 font-medium text-stone-700">
                  <span className="w-2 h-2 rounded-full bg-[#184A3B]"></span>
                  NABARD Certified & Bank Linked
                </span>
                <span>Active in 650+ Hamlets</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
