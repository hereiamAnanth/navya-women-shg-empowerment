import React from 'react';
import { NAVYA_ABOUT } from '../data/navyaContent';
import { CheckCircle2 } from 'lucide-react';
import { FadeInView, StaggerContainer, StaggerItem } from './MotionWrappers';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with FadeInView */}
        <FadeInView className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B94A28] mb-3">
            <span>01. About Navya</span>
            <span aria-hidden="true">·</span>
            <span>The SHG Model</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-display leading-tight text-balance">
            Dismantling Predatory Debt Through Collective Sisterhood
          </h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            <strong className="text-stone-900 font-semibold">NAVYA</strong> is a women’s empowerment programme that helps rural women and young women gain business skills, improve well-being, access markets, earn sustainable income, and become confident community leaders.
          </p>
        </FadeInView>

        {/* 2-Column Asymmetric Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <FadeInView delay={0.1} className="lg:col-span-7 space-y-6 text-stone-800 leading-relaxed">
            <p className="text-base sm:text-lg">
              A Self-Help Group (SHG) is not merely a micro-loan club. It is a sovereign democratic institution. Between 10 and 15 women from contiguous households meet every week. They sit on a shared coir mat, deposit ₹20 to ₹50 in doorstep thrift, and review collective needs.
            </p>
            <p className="text-base">
              Because loans are decided collectively, repayment rates are extraordinary: <strong className="font-semibold text-stone-900">98.6% on-time repayment across 2,480 groups</strong>. As the internal fund grows, Navya connects the group directly with public sector commercial banks under the NABARD framework, unlocking formal low-interest credit lines.
            </p>
            <p className="text-base">
              Once financial security takes root, the conversation naturally expands to health rights, education for girl children, clean energy, and electing women to the Gram Panchayat.
            </p>

            {/* Operating Principles Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {[
                'Doorstep weekly meetings with zero middleman presence',
                'Digitized transparent ledgers with SMS audio alerts',
                '100% women-elected rotating governing councils',
                'Direct fair-trade linkage bypassing commission agents',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-stone-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#184A3B] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </FadeInView>

          {/* Right Column: 3 Pillars Bento Box with StaggerContainer */}
          <StaggerContainer delay={0.15} className="lg:col-span-5 space-y-4">
            {NAVYA_ABOUT.foundingEthos.map((ethos, index) => (
              <StaggerItem
                key={index}
                className="p-6 bg-white rounded-xl border border-stone-200/90 shadow-xs hover:border-stone-300 transition-colors"
              >
                <div className="text-xs font-mono font-semibold text-[#B94A28] mb-1.5">
                  PILLAR 0{index + 1}
                </div>
                <h3 className="text-lg font-bold font-display text-stone-900 mb-2">
                  {ethos.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {ethos.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Quote Block with FadeInView */}
        <FadeInView delay={0.2} className="relative p-8 sm:p-10 rounded-2xl bg-[#F4EFE6] border border-stone-200/80">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#B94A28] block mb-2">
              Voice of the Federation
            </span>
            <blockquote className="text-xl sm:text-2xl font-serif-quote italic text-stone-900 leading-relaxed">
              "When an individual woman stands before the bank manager or the contractor, she is easily dismissed. When thirty federated SHGs walk into the branch together with audited ledgers, the doors open."
            </blockquote>
            <div className="mt-4 flex items-center gap-2 text-xs text-stone-600">
              <span className="font-semibold text-stone-900">Sharda Bai</span>
              <span aria-hidden="true">·</span>
              <span>President, Narmada Valley Women’s Federation (2,100 Members)</span>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};
