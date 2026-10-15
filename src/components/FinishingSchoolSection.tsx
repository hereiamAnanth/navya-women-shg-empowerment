import React, { useState } from 'react';
import { FINISHING_SCHOOL_TRACKS, FinishingSchoolTrack } from '../data/navyaContent';
import { CheckCircle2, Cpu, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInView, ScaleInView, StaggerContainer, StaggerItem, editorialEasing } from './MotionWrappers';

interface FinishingSchoolSectionProps {
  onSponsorCohort: () => void;
}

export const FinishingSchoolSection: React.FC<FinishingSchoolSectionProps> = ({ onSponsorCohort }) => {
  const [selectedTrackId, setSelectedTrackId] = useState(FINISHING_SCHOOL_TRACKS[0].id);
  const selectedTrack: FinishingSchoolTrack =
    FINISHING_SCHOOL_TRACKS.find((t) => t.id === selectedTrackId) || FINISHING_SCHOOL_TRACKS[0];

  return (
    <section id="finishing-school" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInView className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B94A28] mb-3">
            <span>05. The Finishing School</span>
            <span aria-hidden="true">·</span>
            <span>Enterprise Incubation Academy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-display leading-tight text-balance">
            Where Subsistence Savings Become Competitive Enterprises
          </h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            Most SHG programs stall at small doorstep savings because members lack product design, food hygiene licenses, or export quality standards. Navya’s Finishing School provides intensive 6-to-12 week professional immersion.
          </p>
        </FadeInView>

        {/* Narrative & Visual Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <ScaleInView className="lg:col-span-6 relative group">
            <div className="relative overflow-hidden rounded-2xl bg-stone-200 border border-stone-300 shadow-md aspect-4/3">
              <img
                src="/assets/images/finishing_school_1791487476738.jpg"
                alt="Women entrepreneurs in the Finishing School testing barcode scanners and product packaging"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-[#EFE9DF] flex flex-col items-center justify-center p-8 text-center text-stone-700">
                        <span class="text-xs uppercase tracking-widest font-semibold text-[#B94A28] mb-2">Finishing School Lab</span>
                        <h4 class="font-display text-xl font-bold text-stone-900 mb-2">Hands-on Enterprise Incubation</h4>
                        <p class="text-xs text-stone-600 max-w-xs">Equipping 410+ graduated women-owned businesses with machinery, packaging, and digital tools.</p>
                      </div>
                    `;
                  }
                }}
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white">
                <div className="text-[11px] uppercase tracking-wider text-stone-300 font-medium">
                  Udaipur Rural Incubation Campus
                </div>
                <p className="text-xs font-serif-quote italic text-stone-200 mt-1">
                  "We learned barcode printing, shelf-life testing, and how to price our mustard oil for Mumbai supermarkets."
                </p>
              </div>
            </div>
          </ScaleInView>

          <FadeInView delay={0.15} className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-900">
              The Four Pillars of Institutional Rigor
            </h3>
            <p className="text-base text-stone-700 leading-relaxed">
              Each Finishing School cohort brings together 25 women leaders from selected high-performing SHGs. Through a blend of machine labs, commercial trial runs, and real buyer interactions, participants emerge as accredited enterprise directors.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <div className="text-2xl font-bold font-display text-[#B94A28] tabular-nums">410+</div>
                <div className="text-xs font-semibold text-stone-800">Graduated Collectives</div>
                <div className="text-[11px] text-stone-500 mt-0.5">Legally registered Producer Companies</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-stone-200">
                <div className="text-2xl font-bold font-display text-[#184A3B] tabular-nums">+340%</div>
                <div className="text-xs font-semibold text-stone-800">Revenue Growth</div>
                <div className="text-[11px] text-stone-500 mt-0.5">Average lift in household income</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onSponsorCohort}
                className="px-5 py-3 text-xs font-semibold tracking-wide text-white bg-[#184A3B] hover:bg-[#12382c] rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Sponsor a Women's Enterprise Cohort</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </FadeInView>
        </div>

        {/* Specialized Tracks Interactive Explorer */}
        <div className="space-y-6">
          <FadeInView delay={0.1} className="flex items-center justify-between">
            <div className="text-xs font-semibold tracking-wider uppercase text-stone-500">
              Explore Incubation Tracks:
            </div>
          </FadeInView>

          <StaggerContainer delay={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {FINISHING_SCHOOL_TRACKS.map((track) => {
              const isSelected = track.id === selectedTrackId;
              return (
                <StaggerItem key={track.id}>
                  <button
                    onClick={() => setSelectedTrackId(track.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#B94A28] shadow-sm ring-1 ring-[#B94A28]'
                        : 'bg-[#FAF7F2] border-stone-200/80 hover:bg-white hover:border-stone-300'
                    }`}
                  >
                    <div
                      className={`text-xs font-mono font-bold mb-1 ${
                        isSelected ? 'text-[#B94A28]' : 'text-stone-400'
                      }`}
                    >
                      {track.duration.split(' ')[0]} {track.duration.split(' ')[1]}
                    </div>
                    <h4 className="text-sm font-bold font-display text-stone-900 mb-1 line-clamp-1">
                      {track.title}
                    </h4>
                    <div className="text-[11px] text-stone-500 line-clamp-2">
                      {track.focusArea}
                    </div>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Active Track Deep Dive Panel with AnimatePresence */}
          <FadeInView delay={0.2}>
            <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTrack.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: editorialEasing }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-2 text-xs font-semibold text-stone-500">
                      <span className="font-mono text-[#B94A28] font-bold">{selectedTrack.duration}</span>
                      <span aria-hidden="true">·</span>
                      <span>{selectedTrack.focusArea}</span>
                    </div>

                    <h3 className="text-2xl font-bold font-display text-stone-900">
                      {selectedTrack.title}
                    </h3>

                    <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                      {selectedTrack.description}
                    </p>

                    {/* Modules breakdown */}
                    <div className="space-y-2.5 pt-2">
                      <div className="text-xs font-semibold tracking-wider uppercase text-stone-500">
                        Syllabus Modules:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {selectedTrack.modules.map((mod, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs text-stone-800 bg-[#FAF7F2] p-2.5 rounded-lg border border-stone-200/60"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#184A3B] shrink-0 mt-0.5" />
                            <span>{mod}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Equipment & Outcome Metrics */}
                  <div className="lg:col-span-5 bg-[#FAF7F2] p-6 rounded-xl border border-stone-200/80 space-y-5">
                    <div className="space-y-2">
                      <div className="text-xs font-semibold tracking-wider uppercase text-stone-500 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-[#B94A28]" />
                        <span>Machinery & Tools Provided</span>
                      </div>
                      <div className="space-y-1.5">
                        {selectedTrack.equipmentProvided.map((eq, idx) => (
                          <div key={idx} className="text-xs text-stone-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
                            <span>{eq}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-stone-200 space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-stone-500">Graduated Businesses:</span>
                        <span className="font-bold text-stone-900 font-mono tabular-nums">{selectedTrack.graduatedEnterprises} Enterprises</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-stone-500">Revenue Impact:</span>
                        <span className="font-bold text-[#184A3B] font-mono tabular-nums">{selectedTrack.avgRevenueIncrease}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={onSponsorCohort}
                        className="w-full py-2.5 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors text-center cursor-pointer"
                      >
                        Request Cohort Syllabus PDF
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};
