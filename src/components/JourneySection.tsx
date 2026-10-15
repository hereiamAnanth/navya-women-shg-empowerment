import React, { useState } from 'react';
import { SHG_JOURNEY, JourneyStage } from '../data/navyaContent';
import { CheckCircle2, ChevronRight, Clock, Target, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInView, editorialEasing } from './MotionWrappers';

export const JourneySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStage: JourneyStage = SHG_JOURNEY[activeStepIndex];

  return (
    <section id="journey" className="py-20 lg:py-28 bg-[#F4EFE6]/50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInView className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B94A28] mb-3">
            <span>02. The Journey</span>
            <span aria-hidden="true">·</span>
            <span>Five Progressive Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-display leading-tight text-balance">
            The Transformation Lifecycle of an SHG Member
          </h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            Women don’t transform into commercial entrepreneurs overnight. Navya shepherds each cohort through a structured 5-stage evolution over eighteen months.
          </p>
        </FadeInView>

        {/* Interactive Step Selector Rail */}
        <FadeInView delay={0.1} className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-10">
          {SHG_JOURNEY.map((stage, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={stage.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 text-left rounded-xl transition-all border cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#B94A28] shadow-sm ring-1 ring-[#B94A28]'
                    : 'bg-[#FAF7F2] border-stone-200/80 hover:bg-white hover:border-stone-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isSelected ? 'text-[#B94A28]' : 'text-stone-400'
                    }`}
                  >
                    STAGE {stage.step}
                  </span>
                  <span className="text-[11px] text-stone-500 font-medium">
                    {stage.duration.split(' ')[0]} {stage.duration.split(' ')[1]}
                  </span>
                </div>
                <div
                  className={`text-sm font-bold font-display line-clamp-1 ${
                    isSelected ? 'text-stone-900' : 'text-stone-700'
                  }`}
                >
                  {stage.title}
                </div>
                <div className="text-[11px] text-stone-500 mt-1 line-clamp-1">
                  {stage.phase}
                </div>
              </button>
            );
          })}
        </FadeInView>

        {/* Active Stage Detailed Stage Card with Animated Switcher */}
        <FadeInView delay={0.15}>
          <div className="bg-white rounded-2xl border border-stone-200 shadow-sm p-6 sm:p-10 transition-all overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStage.step}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: editorialEasing }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
              >
                {/* Left 7 cols: Stage Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500">
                    <span className="font-mono font-bold text-[#B94A28] text-sm">STAGE {currentStage.step}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 font-medium text-stone-700">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      {currentStage.duration}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 font-medium text-stone-700">
                      <Target className="w-3.5 h-3.5 text-stone-400" />
                      {currentStage.focus}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-900">
                    {currentStage.title}
                  </h3>

                  <p className="text-base text-stone-700 leading-relaxed">
                    {currentStage.description}
                  </p>

                  {/* Milestones Checklist */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs font-semibold tracking-wider uppercase text-stone-500">
                      Core Stage Milestones:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentStage.keyMilestones.map((milestone, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-stone-800 bg-[#FAF7F2] p-3 rounded-lg border border-stone-200/60"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#184A3B] shrink-0 mt-0.5" />
                          <span>{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right 5 cols: Testimonial & Stage Navigators */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-stone-200/80 lg:pl-8">
                  <div className="p-6 bg-[#FAF7F2] rounded-xl border border-stone-200/80">
                    <Quote className="w-6 h-6 text-[#B94A28] mb-3 opacity-60" />
                    <p className="text-base font-serif-quote italic text-stone-800 leading-relaxed">
                      "{currentStage.testimonial.quote}"
                    </p>
                    <div className="mt-4 pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs">
                      <span className="font-semibold text-stone-900">{currentStage.testimonial.author}</span>
                      <span className="text-stone-500">{currentStage.testimonial.cluster}</span>
                    </div>
                  </div>

                  {/* Sequential controls */}
                  <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                    <button
                      disabled={activeStepIndex === 0}
                      onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                      className={`text-xs font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                        activeStepIndex === 0
                          ? 'text-stone-300 cursor-not-allowed'
                          : 'text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      ← Previous Stage
                    </button>

                    <span className="text-xs font-mono text-stone-500">
                      {activeStepIndex + 1} of {SHG_JOURNEY.length}
                    </span>

                    <button
                      disabled={activeStepIndex === SHG_JOURNEY.length - 1}
                      onClick={() => setActiveStepIndex((prev) => Math.min(SHG_JOURNEY.length - 1, prev + 1))}
                      className={`text-xs font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                        activeStepIndex === SHG_JOURNEY.length - 1
                          ? 'text-stone-300 cursor-not-allowed'
                          : 'text-[#B94A28] hover:bg-stone-100 font-bold'
                      }`}
                    >
                      <span>Next Stage</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
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
