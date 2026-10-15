import React, { useState } from 'react';
import { SIX_L_PILLARS, SixLPillar } from '../data/navyaContent';
import { Heart, BookOpen, Briefcase, Home, Shield, TreePine, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInView, editorialEasing } from './MotionWrappers';

export const SixLsSection: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState('life');
  const currentPillar: SixLPillar =
    SIX_L_PILLARS.find((p) => p.id === selectedPillarId) || SIX_L_PILLARS[0];

  const pillarIcons: Record<string, React.ReactNode> = {
    life: <Heart className="w-4 h-4" />,
    learning: <BookOpen className="w-4 h-4" />,
    livelihood: <Briefcase className="w-4 h-4" />,
    lifestyle: <Home className="w-4 h-4" />,
    leadership: <Shield className="w-4 h-4" />,
    landscape: <TreePine className="w-4 h-4" />,
  };

  return (
    <section id="6ls" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInView className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B94A28] mb-3">
            <span>03. The 6Ls Framework</span>
            <span aria-hidden="true">·</span>
            <span>Holistic Empowerment Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-display leading-tight text-balance">
            Six Pillars That Anchor Rural Women’s Sovereignty
          </h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            Economic loans fail if women lack bodily health, literacy, clean energy, or democratic authority. Navya’s integrated 6Ls framework addresses the full ecosystem of human dignity.
          </p>
        </FadeInView>

        {/* 6L Interactive Tabs */}
        <FadeInView delay={0.1} className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {SIX_L_PILLARS.map((pillar) => {
            const isSelected = pillar.id === selectedPillarId;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold whitespace-nowrap transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-[#184A3B] text-white border-[#184A3B] shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                <span className={isSelected ? 'text-[#EFE9DF]' : 'text-stone-400'}>
                  {pillarIcons[pillar.id]}
                </span>
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </FadeInView>

        {/* Active Pillar Detailed Workspace with AnimatePresence */}
        <FadeInView delay={0.15}>
          <div className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: editorialEasing }}
                className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-stone-200"
              >
                {/* Left 7 Columns: Core Philosophy, Initiatives & Metrics */}
                <div className="lg:col-span-7 p-6 sm:p-10 space-y-8">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B94A28] uppercase tracking-wider mb-2">
                      <span>Pillar {SIX_L_PILLARS.findIndex((p) => p.id === currentPillar.id) + 1} of 6</span>
                      <span aria-hidden="true">·</span>
                      <span>{currentPillar.kicker}</span>
                    </div>
                    <h3 className="text-3xl font-bold font-display text-stone-900 mb-3">
                      {currentPillar.title}: {currentPillar.kicker}
                    </h3>
                    <p className="text-base text-stone-700 leading-relaxed">
                      {currentPillar.summary}
                    </p>
                  </div>

                  {/* Core Metrics Strip */}
                  <div className="grid grid-cols-3 gap-4 p-5 bg-[#FAF7F2] rounded-xl border border-stone-200/80">
                    {currentPillar.coreMetrics.map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="text-2xl font-bold font-display text-[#184A3B] tabular-nums">
                          {metric.value}
                        </div>
                        <div className="text-xs text-stone-600 font-medium">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Initiatives */}
                  <div className="space-y-4">
                    <div className="text-xs font-semibold tracking-wider uppercase text-stone-500">
                      Operational Interventions:
                    </div>
                    <div className="space-y-3">
                      {currentPillar.keyInitiatives.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl border border-stone-200/70 hover:border-stone-300 transition-colors bg-white"
                        >
                          <h4 className="text-sm font-bold font-display text-stone-900 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-xs text-stone-600 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right 5 Columns: Oral Testimony & Field Case Narrative */}
                <div className="lg:col-span-5 p-6 sm:p-10 bg-[#FAF7F2]/60 flex flex-col justify-between space-y-8">
                  {/* Member Quote */}
                  <div className="p-6 bg-white rounded-xl border border-stone-200/90 shadow-2xs">
                    <Quote className="w-6 h-6 text-[#B94A28] mb-3 opacity-60" />
                    <p className="text-base font-serif-quote italic text-stone-800 leading-relaxed">
                      "{currentPillar.quote}"
                    </p>
                    <div className="mt-3 text-xs text-stone-500 font-medium">
                      Recorded in cluster audio diary
                    </div>
                  </div>

                  {/* Verified Field Story Card */}
                  <div className="space-y-3">
                    <div className="text-xs font-semibold tracking-wider uppercase text-[#B94A28]">
                      Ground Verification:
                    </div>
                    <div className="p-5 bg-white rounded-xl border border-stone-200/80">
                      <h4 className="text-base font-bold font-display text-stone-900 mb-1">
                        {currentPillar.fieldStory.title}
                      </h4>
                      <div className="text-xs text-stone-500 mb-3 flex items-center gap-1.5">
                        <span className="font-semibold text-stone-700">{currentPillar.fieldStory.person}</span>
                        <span aria-hidden="true">·</span>
                        <span>{currentPillar.fieldStory.location}</span>
                      </div>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {currentPillar.fieldStory.narrative}
                      </p>
                    </div>
                  </div>

                  {/* Quick Pillar Indicator */}
                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                    <span>Integrated in all 2,480 SHGs</span>
                    <span className="font-semibold text-[#184A3B]">Standard Operating Protocol</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};
