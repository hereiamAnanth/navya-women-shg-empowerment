import React, { useState } from 'react';
import { IMPACT_METRICS } from '../data/navyaContent';
import { Calculator, ArrowRight } from 'lucide-react';
import { FadeInView, StaggerContainer, StaggerItem } from './MotionWrappers';

interface ImpactSectionProps {
  onPledgeSupport: (amount: number) => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onPledgeSupport }) => {
  const [pledgeAmount, setPledgeAmount] = useState<number>(25000);

  // Dynamic calculations based on real cost models of Navya's programs
  const calculatedWomenMobilized = Math.max(1, Math.round(pledgeAmount / 1250));
  const calculatedFinishingWeeks = Math.max(1, Math.round(pledgeAmount / 5000));
  const calculatedSeedPacks = Math.max(2, Math.round(pledgeAmount / 650));
  const calculatedAnnualIncomeGenerated = Math.round(pledgeAmount * 4.6);

  return (
    <section id="impact" className="py-20 lg:py-28 bg-[#F4EFE6]/50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInView className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B94A28] mb-3">
            <span>06. Verified Impact</span>
            <span aria-hidden="true">·</span>
            <span>Audited Grassroots Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-display leading-tight text-balance">
            Transparent Socio-Economic Transformation
          </h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            We measure impact not through arbitrary vanity numbers, but through audited household indicators: girls retained in secondary school, debt freedom, and audited enterprise revenues.
          </p>
        </FadeInView>

        {/* 4 Big Numbers with StaggerContainer */}
        <StaggerContainer delay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {IMPACT_METRICS.heroHighlights.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="p-6 bg-white rounded-xl border border-stone-200/90 shadow-2xs space-y-2 h-full">
                <div className="text-3xl sm:text-4xl font-bold font-display text-stone-900 tabular-nums">
                  {stat.num}
                </div>
                <div className="text-xs font-bold text-[#B94A28] uppercase tracking-wider">
                  {stat.label}
                </div>
                <div className="text-xs text-stone-500">
                  {stat.note}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* 2-Column: Baseline vs Outcome Audit Table + Regional Footprint */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Baseline vs Outcome Table */}
          <FadeInView delay={0.15} className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-[#B94A28]">LONGITUDINAL COHORT AUDIT</span>
                <h3 className="text-xl font-bold font-display text-stone-900 mt-0.5">
                  Pre-SHG Baseline vs. Post-Graduation
                </h3>
              </div>
              <span className="text-[11px] text-stone-500">Sample: 3,200 Households</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-stone-200 text-xs text-stone-500 uppercase tracking-wider">
                    <th className="py-3 pr-4 font-semibold">Development Indicator</th>
                    <th className="py-3 px-3 font-semibold text-stone-400">Pre-SHG</th>
                    <th className="py-3 px-3 font-semibold text-stone-900">Current Post-6L</th>
                    <th className="py-3 pl-3 font-semibold text-right text-[#184A3B]">Net Shift</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-xs sm:text-sm">
                  {IMPACT_METRICS.socioEconomicGains.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#FAF7F2]/60 transition-colors">
                      <td className="py-3.5 pr-4 font-medium text-stone-900">
                        {row.metric}
                      </td>
                      <td className="py-3.5 px-3 text-stone-500 tabular-nums font-mono">
                        {row.before}
                      </td>
                      <td className="py-3.5 px-3 font-bold text-stone-900 tabular-nums font-mono">
                        {row.after}
                      </td>
                      <td className="py-3.5 pl-3 text-right font-bold text-[#184A3B] tabular-nums font-mono">
                        {row.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <span>Third-party audited by Social Impact Evaluators</span>
              <span className="font-mono">NABARD / NRLM Compliant</span>
            </div>
          </FadeInView>

          {/* Regional Footprint */}
          <FadeInView delay={0.2} className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#B94A28]">REGIONAL CLUSTERS</span>
                <span className="text-xs text-stone-500">5 States · 28 Districts</span>
              </div>
              <h3 className="text-lg font-bold font-display text-stone-900 mb-4">
                Decentralized Federation Footprint
              </h3>

              <div className="space-y-3">
                {IMPACT_METRICS.regionalFootprint.map((reg, idx) => (
                  <div key={idx} className="p-3.5 bg-[#FAF7F2] rounded-xl border border-stone-200/60 text-xs">
                    <div className="flex items-center justify-between font-bold text-stone-900">
                      <span>{reg.state}</span>
                      <span className="font-mono text-[#184A3B] tabular-nums">{reg.members}</span>
                    </div>
                    <div className="flex items-center gap-2 text-stone-500 mt-1">
                      <span>{reg.districts}</span>
                      <span aria-hidden="true">·</span>
                      <span>{reg.shgs}</span>
                    </div>
                    <div className="text-[11px] text-[#B94A28] mt-1 font-medium">
                      Core Craft: {reg.keyCraft}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>

        {/* Interactive Impact Calculator Box */}
        <FadeInView delay={0.25} className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#B94A28] uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Simulator</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-900">
              Simulate the Direct Ripple Effect of Your Contribution
            </h3>
            <p className="mt-2 text-sm text-stone-600 leading-relaxed">
              Drag the allocation slider below to see how institutional grants or CSR funds translate directly into women trained, tools deployed, and new household wealth created.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Slider Column */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex justify-between items-center text-xs font-semibold text-stone-700 mb-2">
                  <span>Selected Allocation Level:</span>
                  <span className="text-xl font-bold font-display text-[#B94A28] tabular-nums">
                    ₹{pledgeAmount.toLocaleString('en-IN')}
                  </span>
                </div>

                <input
                  type="range"
                  min={5000}
                  max={200000}
                  step={5000}
                  value={pledgeAmount}
                  onChange={(e) => setPledgeAmount(Number(e.target.value))}
                  className="w-full h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-[#B94A28]"
                />

                <div className="flex justify-between text-[11px] text-stone-500 mt-2 font-mono">
                  <span>₹5,000 (Seed Loan)</span>
                  <span>₹50,000 (Group Mill)</span>
                  <span>₹2,00,000 (Village Federation)</span>
                </div>
              </div>

              {/* Preset buttons */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[10000, 25000, 50000, 100000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setPledgeAmount(amt)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                      pledgeAmount === amt
                        ? 'bg-stone-900 text-white border-stone-900'
                        : 'bg-[#FAF7F2] text-stone-700 border-stone-200 hover:border-stone-400'
                    }`}
                  >
                    ₹{amt.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onPledgeSupport(pledgeAmount)}
                  className="w-full py-3 text-xs font-semibold tracking-wide text-white bg-[#B94A28] hover:bg-[#A03D1F] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Pledge This Allocation (₹{pledgeAmount.toLocaleString('en-IN')})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Calculated Yield Outputs */}
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="p-5 bg-[#FAF7F2] rounded-xl border border-stone-200/80 space-y-1">
                <div className="text-3xl font-bold font-display text-stone-900 tabular-nums">
                  {calculatedWomenMobilized}
                </div>
                <div className="text-xs font-bold text-stone-800">Women Mobilized</div>
                <div className="text-[11px] text-stone-500">Inducted into weekly doorstep savings & passbooks</div>
              </div>

              <div className="p-5 bg-[#FAF7F2] rounded-xl border border-stone-200/80 space-y-1">
                <div className="text-3xl font-bold font-display text-[#184A3B] tabular-nums">
                  {calculatedFinishingWeeks} wks
                </div>
                <div className="text-xs font-bold text-stone-800">Finishing School Training</div>
                <div className="text-[11px] text-stone-500">Hands-on machinery, FSSAI, & digital ops labs</div>
              </div>

              <div className="p-5 bg-[#FAF7F2] rounded-xl border border-stone-200/80 space-y-1">
                <div className="text-3xl font-bold font-display text-[#B94A28] tabular-nums">
                  {calculatedSeedPacks}
                </div>
                <div className="text-xs font-bold text-stone-800">Bio-Seed & Loom Kits</div>
                <div className="text-[11px] text-stone-500">Heirloom seeds, botanical dyes & frame looms</div>
              </div>

              <div className="p-5 bg-[#184A3B]/10 rounded-xl border border-[#184A3B]/30 space-y-1">
                <div className="text-3xl font-bold font-display text-[#184A3B] tabular-nums">
                  ₹{calculatedAnnualIncomeGenerated.toLocaleString('en-IN')}
                </div>
                <div className="text-xs font-bold text-[#184A3B]">Estimated 1st-Year Revenue</div>
                <div className="text-[11px] text-stone-600">Calculated direct household earnings lift</div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
};
