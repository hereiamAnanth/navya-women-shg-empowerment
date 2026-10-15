import React, { useState } from 'react';
import { NAVYA_PLATFORMS, PlatformItem } from '../data/navyaContent';
import { ShoppingBag, Sprout, Smartphone, Scale, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInView, StaggerContainer, StaggerItem, editorialEasing } from './MotionWrappers';

export const PlatformsSection: React.FC = () => {
  const [selectedPlatformId, setSelectedPlatformId] = useState(NAVYA_PLATFORMS[0].id);
  const selectedPlatform =
    NAVYA_PLATFORMS.find((p) => p.id === selectedPlatformId) || NAVYA_PLATFORMS[0];

  const platformIcons: Record<string, React.ReactNode> = {
    'shilp-haat': <ShoppingBag className="w-5 h-5" />,
    'kisan-sahay': <Sprout className="w-5 h-5" />,
    'sanchay-digi': <Smartphone className="w-5 h-5" />,
    'nari-nyaya': <Scale className="w-5 h-5" />,
  };

  return (
    <section id="platforms" className="py-20 lg:py-28 bg-[#F4EFE6]/50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInView className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B94A28] mb-3">
            <span>04. Platforms Ecosystem</span>
            <span aria-hidden="true">·</span>
            <span>Digital & Grassroots Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-display leading-tight text-balance">
            Four Specialized Engines Driving Collective Scale
          </h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            Grassroots empowerment requires institutional backbone. Navya operates four proprietary platforms linking rural women directly to fair markets, collective input procurement, mobile finance, and legal defense.
          </p>
        </FadeInView>

        {/* 4 Platform Grid Cards with StaggerContainer */}
        <StaggerContainer delay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {NAVYA_PLATFORMS.map((platform) => {
            const isSelected = platform.id === selectedPlatformId;
            return (
              <StaggerItem key={platform.id}>
                <button
                  onClick={() => setSelectedPlatformId(platform.id)}
                  className={`w-full text-left p-6 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#B94A28] shadow-sm ring-1 ring-[#B94A28]'
                      : 'bg-[#FAF7F2] border-stone-200/80 hover:bg-white hover:border-stone-300'
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                      isSelected
                        ? 'bg-[#B94A28] text-white'
                        : 'bg-stone-200/70 text-stone-700'
                    }`}
                  >
                    {platformIcons[platform.id]}
                  </div>
                  <div className="text-xs font-mono font-bold text-[#B94A28] mb-1">
                    {platform.codeName}
                  </div>
                  <h3 className="text-lg font-bold font-display text-stone-900 mb-1">
                    {platform.title}
                  </h3>
                  <p className="text-xs text-stone-500 mb-3">{platform.role}</p>
                  <div className="pt-3 border-t border-stone-200/60 text-xs font-medium text-stone-700">
                    {platform.usersActive}
                  </div>
                </button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Selected Platform Detailed Bento Presentation with AnimatePresence */}
        <FadeInView delay={0.15}>
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPlatform.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.45, ease: editorialEasing }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase text-stone-500">
                    <span className="font-mono text-[#B94A28] font-bold">{selectedPlatform.codeName}</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedPlatform.role}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-900">
                    {selectedPlatform.title}
                  </h3>

                  <p className="text-base text-stone-700 leading-relaxed">
                    {selectedPlatform.description}
                  </p>

                  {/* Verified Platform Capabilities */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-semibold tracking-wider uppercase text-stone-500">
                      Architectural Pillars:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedPlatform.keyFeatures.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-stone-800 bg-[#FAF7F2] p-3 rounded-lg border border-stone-200/70"
                        >
                          <Check className="w-4 h-4 text-[#184A3B] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Platform Metrics Column */}
                <div className="lg:col-span-5 bg-[#FAF7F2] p-8 rounded-xl border border-stone-200/80 space-y-6">
                  <div className="space-y-1">
                    <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                      Active Participant Base
                    </div>
                    <div className="text-3xl font-bold font-display text-stone-900 tabular-nums">
                      {selectedPlatform.usersActive}
                    </div>
                    <p className="text-xs text-stone-600">
                      Regular weekly active transactions recorded through mobile logs.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200 space-y-1">
                    <div className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                      Cumulative Value Channelled
                    </div>
                    <div className="text-3xl font-bold font-display text-[#184A3B] tabular-nums">
                      {selectedPlatform.volumeProcessed}
                    </div>
                    <p className="text-xs text-stone-600">
                      100% credited directly into registered collective accounts with zero leakages.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
                    <span>Enterprise SLA: 99.9% Uptime</span>
                    <span className="font-semibold text-stone-700">Open-Source Protocol</span>
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
