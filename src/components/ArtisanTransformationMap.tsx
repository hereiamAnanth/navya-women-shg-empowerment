import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldAlert, Award, DollarSign, Store, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInView, ScaleInView, StaggerContainer, StaggerItem, editorialEasing } from './MotionWrappers';

interface TrajectoryData {
  name: string;
  craft: string;
  location: string;
  initialState: string;
  finalState: string;
  incomeProgression: { month: string; income: number; debtFree: number; margin: number }[];
  breakthroughQuote: string;
  image: string;
}

const ARTISAN_CASE_TRAJECTORIES: TrajectoryData[] = [
  {
    name: 'Kamla Meena',
    craft: 'Single-Ikat Handloom Weaver',
    location: 'Chanderi, Madhya Pradesh',
    initialState: 'Casual brick kiln laborer & distressed loom weaver selling to middlemen at ₹180/stole',
    finalState: 'Registered Weavers Guild Director with 4 pneumatic frame looms & direct Mumbai boutique contracts',
    breakthroughQuote: 'Earlier, the contractor dictated my price while my children went hungry. Today, I set our export rate with dignity.',
    image: '/assets/images/artisan_entrepreneur_1791525508149.jpg',
    incomeProgression: [
      { month: 'Month 0', income: 1800, debtFree: 15, margin: 12 },
      { month: 'Month 3', income: 3200, debtFree: 38, margin: 24 },
      { month: 'Month 6', income: 5100, debtFree: 62, margin: 40 },
      { month: 'Month 9', income: 8600, debtFree: 85, margin: 68 },
      { month: 'Month 12', income: 12400, debtFree: 95, margin: 82 },
      { month: 'Month 18', income: 14200, debtFree: 100, margin: 92 },
    ],
  },
  {
    name: 'Savitri Bai',
    craft: 'Cold-Pressed Mustard Oil Miller',
    location: 'Barabanki, Uttar Pradesh',
    initialState: 'Smallholder selling raw harvested mustard seeds at distressed harvest glut prices',
    finalState: 'Solar wooden ghani micro-mill co-owner bottling 800L monthly with FSSAI lab certification',
    breakthroughQuote: 'We stopped giving our seeds to the traders. We bottle our own purity and our women collective keeps every rupee.',
    image: '/assets/images/finishing_school_1791487476738.jpg',
    incomeProgression: [
      { month: 'Month 0', income: 2400, debtFree: 20, margin: 15 },
      { month: 'Month 3', income: 4100, debtFree: 45, margin: 30 },
      { month: 'Month 6', income: 6400, debtFree: 70, margin: 52 },
      { month: 'Month 9', income: 9100, debtFree: 88, margin: 74 },
      { month: 'Month 12', income: 11200, debtFree: 96, margin: 85 },
      { month: 'Month 18', income: 11800, debtFree: 100, margin: 90 },
    ],
  },
  {
    name: 'Bimla Soren',
    craft: 'Indigenous Forest Honey Specialist',
    location: 'Similipal Buffer Belt, Odisha',
    initialState: 'Dangerous tree climbs and destructive hive burning selling crude wax at ₹60/kg',
    finalState: 'Scientific box apiarist harvesting multi-flora unheated honey tested for international purity',
    breakthroughQuote: 'The forest bees are our partners now. The finishing school gave us stainless steel extractors and digital refractometers.',
    image: '/assets/images/artisan_weaving_1791487453796.jpg',
    incomeProgression: [
      { month: 'Month 0', income: 1500, debtFree: 10, margin: 10 },
      { month: 'Month 3', income: 2800, debtFree: 32, margin: 25 },
      { month: 'Month 6', income: 4900, debtFree: 58, margin: 48 },
      { month: 'Month 9', income: 7200, debtFree: 80, margin: 66 },
      { month: 'Month 12', income: 8900, debtFree: 92, margin: 80 },
      { month: 'Month 18', income: 9600, debtFree: 100, margin: 88 },
    ],
  },
];

const TRANSFORMATION_STAGES = [
  {
    stageNumber: '01',
    phaseName: 'Subsistence Trap',
    timeline: 'Months 0 – 2',
    icon: ShieldAlert,
    tagline: 'Vulnerability & Middleman Monopoly',
    description:
      'The artisan works with outdated manual tools, reliant on local moneylenders charging 60%+ interest and aggressive contractors who retain over 75% of retail value.',
    incomeRange: '₹1,500 – ₹2,400 / mo',
    debtIndependence: '12%',
    marketAgency: 'Passive Price Taker',
    keyShift: 'High vulnerability, zero bargaining power, distress sales.',
  },
  {
    stageNumber: '02',
    phaseName: 'SHG Solidarity',
    timeline: 'Months 3 – 6',
    icon: DollarSign,
    tagline: 'Doorstep Thrift & Financial Sovereignty',
    description:
      'The woman joins a 12-member peer circle. Weekly thrift deposits replace exploitative debt. Basic bookkeeping and the 6Ls Life & Learning modules build self-belief.',
    incomeRange: '₹3,500 – ₹4,800 / mo',
    debtIndependence: '55%',
    marketAgency: 'Collective Savings Backing',
    keyShift: 'Emergency health corpus created, debt cycle broken.',
  },
  {
    stageNumber: '03',
    phaseName: 'Finishing School',
    timeline: 'Months 7 – 11',
    icon: Award,
    tagline: 'Technology, Machinery & Packaging',
    description:
      'Intensive incubation in machine maintenance, FSSAI hygiene standards, barcode labeling, tablet billing, and unit economics. Products undergo commercial trial runs.',
    incomeRange: '₹7,500 – ₹10,200 / mo',
    debtIndependence: '88%',
    marketAgency: 'Accredited Producer Group',
    keyShift: 'Value-addition replaces commodity sales; barcodes integrated.',
  },
  {
    stageNumber: '04',
    phaseName: 'Sovereign Enterprise',
    timeline: 'Months 12 – 18+',
    icon: Store,
    tagline: 'Fair-Trade Payouts & Civic Authority',
    description:
      'Direct B2B trade via Shilp-Haat and corporate procurement contracts. Direct UPI soundbox deposits. Member graduates to training younger cohorts and Gram Sabha leadership.',
    incomeRange: '₹12,500 – ₹16,800+ / mo',
    debtIndependence: '100%',
    marketAgency: 'Enterprise Board Member',
    keyShift: '+650% Income lift; elected Gram Panchayat representation.',
  },
];

export const ArtisanTransformationMap: React.FC = () => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);
  const [activeMetricTab, setActiveMetricTab] = useState<'income' | 'debtFree' | 'margin'>('income');
  const [hoveredPointIdx, setHoveredPointIdx] = useState<number | null>(null);

  const activeCase = ARTISAN_CASE_TRAJECTORIES[selectedCaseIdx];

  // SVG Chart calculation helpers
  const dataPoints = activeCase.incomeProgression;
  const chartWidth = 640;
  const chartHeight = 220;
  const paddingX = 45;
  const paddingY = 30;

  const getMetricValue = (point: (typeof dataPoints)[0]) => {
    if (activeMetricTab === 'income') return point.income;
    if (activeMetricTab === 'debtFree') return point.debtFree;
    return point.margin;
  };

  const getMetricMax = () => {
    if (activeMetricTab === 'income') return 16000;
    return 100; // percentages
  };

  const maxVal = getMetricMax();

  const coordinates = dataPoints.map((pt, i) => {
    const x = paddingX + (i / (dataPoints.length - 1)) * (chartWidth - paddingX * 2);
    const val = getMetricValue(pt);
    const y = chartHeight - paddingY - (val / maxVal) * (chartHeight - paddingY * 2);
    return { x, y, pt, val };
  });

  const pathD = coordinates.reduce((acc, curr, idx) => {
    if (idx === 0) return `M ${curr.x} ${curr.y}`;
    // Smooth bezier curve control point
    const prev = coordinates[idx - 1];
    const cpX1 = prev.x + (curr.x - prev.x) / 2;
    const cpY1 = prev.y;
    const cpX2 = prev.x + (curr.x - prev.x) / 2;
    const cpY2 = curr.y;
    return `${acc} C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${curr.x} ${curr.y}`;
  }, '');

  const areaD = `${pathD} L ${coordinates[coordinates.length - 1].x} ${
    chartHeight - paddingY
  } L ${coordinates[0].x} ${chartHeight - paddingY} Z`;

  return (
    <section id="transformation-map" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInView className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B94A28] mb-3">
            <span>Visual Journey Mapping</span>
            <span aria-hidden="true">·</span>
            <span>Transformation Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-display leading-tight text-balance">
            Mapping the Transformation: From Rural Artisan to Enterprise Leader
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            How does an impoverished village maker burdened by predatory debt transform into an independent, asset-owning business owner? Here is the audited, step-by-step transformation trajectory.
          </p>
        </FadeInView>

        {/* 4-Stage Visual Transformation Pipeline */}
        <div className="mb-20">
          <div className="text-xs font-mono font-bold text-[#B94A28] uppercase tracking-wider mb-4">
            The 4-Stage Institutional Pipeline (18-Month Horizon)
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {TRANSFORMATION_STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <FadeInView
                  key={stage.stageNumber}
                  delay={idx * 0.1}
                  className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow relative overflow-hidden"
                >
                  {/* Top hairline indicator */}
                  <div
                    className={`absolute top-0 inset-x-0 h-1 ${
                      idx === 3
                        ? 'bg-[#184A3B]'
                        : idx === 2
                        ? 'bg-[#B94A28]'
                        : idx === 1
                        ? 'bg-amber-600'
                        : 'bg-stone-400'
                    }`}
                  />

                  <div>
                    <div className="flex items-center justify-between mb-3 pt-1">
                      <span className="font-mono text-xs font-bold text-stone-400">
                        PHASE {stage.stageNumber}
                      </span>
                      <span className="text-[11px] font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
                        {stage.timeline}
                      </span>
                    </div>

                    <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-stone-200 flex items-center justify-center text-stone-800 mb-3">
                      <Icon className="w-5 h-5 text-[#B94A28]" />
                    </div>

                    <h3 className="text-lg font-bold font-display text-stone-900 leading-snug">
                      {stage.phaseName}
                    </h3>
                    <div className="text-xs font-semibold text-[#B94A28] mt-0.5 mb-2">
                      {stage.tagline}
                    </div>

                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {stage.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-100 space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-stone-500 text-[11px]">Net Income:</span>
                      <span className="font-mono font-bold text-stone-900 tabular-nums">
                        {stage.incomeRange}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stone-500 text-[11px]">Debt Freedom:</span>
                      <span className="font-mono font-semibold text-[#184A3B] tabular-nums">
                        {stage.debtIndependence}
                      </span>
                    </div>
                    <div className="pt-2 text-[11px] text-stone-700 italic border-t border-stone-100">
                      <strong>Milestone: </strong>
                      {stage.keyShift}
                    </div>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>

        {/* Interactive Growth Trajectory Graph Section */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 pb-6 border-b border-stone-200">
            <div>
              <span className="text-xs font-mono font-bold text-[#B94A28] uppercase tracking-wider block mb-1">
                Interactive Metric Analytics
              </span>
              <h3 className="text-2xl font-bold font-display text-stone-900">
                Growth Curve of Case Cohort: {activeCase.name}
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                {activeCase.craft} · {activeCase.location}
              </p>
            </div>

            {/* Case Selector Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-stone-500 mr-1 font-medium">Select Artisan:</span>
              {ARTISAN_CASE_TRAJECTORIES.map((item, idx) => (
                <button
                  key={item.name}
                  onClick={() => {
                    setSelectedCaseIdx(idx);
                    setHoveredPointIdx(null);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                    selectedCaseIdx === idx
                      ? 'bg-stone-900 text-white border-stone-900 shadow-2xs'
                      : 'bg-[#FAF7F2] text-stone-700 border-stone-200 hover:border-stone-400'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 8 Columns: Dynamic SVG Graph */}
            <div className="lg:col-span-8 space-y-4">
              {/* Metric Selector Tabs */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveMetricTab('income')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer border ${
                    activeMetricTab === 'income'
                      ? 'bg-[#B94A28] text-white border-[#B94A28]'
                      : 'bg-[#FAF7F2] text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  Monthly Income (₹ INR)
                </button>

                <button
                  onClick={() => setActiveMetricTab('debtFree')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer border ${
                    activeMetricTab === 'debtFree'
                      ? 'bg-[#184A3B] text-white border-[#184A3B]'
                      : 'bg-[#FAF7F2] text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  Debt Freedom (% Autonomous)
                </button>

                <button
                  onClick={() => setActiveMetricTab('margin')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer border ${
                    activeMetricTab === 'margin'
                      ? 'bg-stone-800 text-white border-stone-800'
                      : 'bg-[#FAF7F2] text-stone-700 border-stone-200 hover:bg-stone-100'
                  }`}
                >
                  Direct Retained Margin (%)
                </button>
              </div>

              {/* The SVG Line Graph */}
              <div className="relative p-4 bg-[#FAF7F2] rounded-xl border border-stone-200/80 overflow-hidden">
                <div className="h-64 sm:h-72 w-full">
                  <svg
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                    className="w-full h-full overflow-visible"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor={activeMetricTab === 'income' ? '#B94A28' : '#184A3B'}
                          stopOpacity="0.25"
                        />
                        <stop
                          offset="100%"
                          stopColor={activeMetricTab === 'income' ? '#B94A28' : '#184A3B'}
                          stopOpacity="0.0"
                        />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Reference Grid lines */}
                    {[0.25, 0.5, 0.75, 1].map((pct, idx) => {
                      const y = chartHeight - paddingY - pct * (chartHeight - paddingY * 2);
                      const displayVal =
                        activeMetricTab === 'income'
                          ? `₹${Math.round(maxVal * pct).toLocaleString('en-IN')}`
                          : `${Math.round(maxVal * pct)}%`;
                      return (
                        <g key={idx}>
                          <line
                            x1={paddingX}
                            y1={y}
                            x2={chartWidth - paddingX}
                            y2={y}
                            stroke="#E7E2D9"
                            strokeDasharray="4 4"
                            strokeWidth="1"
                          />
                          <text
                            x={paddingX - 8}
                            y={y + 3}
                            fill="#8C827A"
                            fontSize="9"
                            textAnchor="end"
                            fontFamily="monospace"
                          >
                            {displayVal}
                          </text>
                        </g>
                      );
                    })}

                    {/* Base Axis Line */}
                    <line
                      x1={paddingX}
                      y1={chartHeight - paddingY}
                      x2={chartWidth - paddingX}
                      y2={chartHeight - paddingY}
                      stroke="#D4CDC3"
                      strokeWidth="1.5"
                    />

                    {/* Filled Area */}
                    <path d={areaD} fill="url(#curveGradient)" />

                    {/* Main Curved Line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={activeMetricTab === 'income' ? '#B94A28' : '#184A3B'}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* Data Points */}
                    {coordinates.map((coord, idx) => {
                      const isHovered = hoveredPointIdx === idx;
                      return (
                        <g
                          key={idx}
                          onMouseEnter={() => setHoveredPointIdx(idx)}
                          onMouseLeave={() => setHoveredPointIdx(null)}
                          className="cursor-pointer"
                        >
                          <circle
                            cx={coord.x}
                            cy={coord.y}
                            r={isHovered ? 6 : 4.5}
                            fill="white"
                            stroke={activeMetricTab === 'income' ? '#B94A28' : '#184A3B'}
                            strokeWidth="2.5"
                            className="transition-all duration-200"
                          />

                          {/* X-axis labels */}
                          <text
                            x={coord.x}
                            y={chartHeight - 10}
                            fill="#57534E"
                            fontSize="10"
                            fontWeight="600"
                            textAnchor="middle"
                          >
                            {coord.pt.month}
                          </text>

                          {/* Hover tooltip or label */}
                          {isHovered && (
                            <g>
                              <rect
                                x={coord.x - 45}
                                y={coord.y - 32}
                                width="90"
                                height="22"
                                rx="4"
                                fill="#1C1917"
                              />
                              <text
                                x={coord.x}
                                y={coord.y - 18}
                                fill="#FFFFFF"
                                fontSize="10"
                                fontWeight="bold"
                                textAnchor="middle"
                                fontFamily="monospace"
                              >
                                {activeMetricTab === 'income'
                                  ? `₹${coord.val.toLocaleString('en-IN')}`
                                  : `${coord.val}%`}
                              </text>
                            </g>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-stone-500 px-2 pt-2 border-t border-stone-200/70">
                  <span>Hover over nodes to inspect month-by-month verified gains</span>
                  <span className="font-semibold text-[#184A3B]">
                    Overall Lift: +
                    {Math.round(
                      ((dataPoints[dataPoints.length - 1].income - dataPoints[0].income) /
                        dataPoints[0].income) *
                        100
                    )}
                    %
                  </span>
                </div>
              </div>
            </div>

            {/* Right 4 Columns: Artisan Photographic Transformation Profile */}
            <div className="lg:col-span-4 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 aspect-4/3 shadow-xs">
                <img
                  src={activeCase.image}
                  alt={activeCase.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-4 text-white">
                  <div className="text-[11px] uppercase tracking-wider text-stone-300 font-semibold">
                    {activeCase.craft}
                  </div>
                  <div className="text-sm font-bold font-display text-white">
                    {activeCase.name}
                  </div>
                </div>
              </div>

              {/* Before vs After Card */}
              <div className="p-4 bg-[#FAF7F2] rounded-xl border border-stone-200/90 space-y-3 text-xs">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 block">
                    Before NAVYA (Month 0):
                  </span>
                  <p className="text-stone-700 mt-0.5 line-clamp-2">
                    {activeCase.initialState}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-200">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#184A3B] block">
                    Today (Month 18):
                  </span>
                  <p className="text-stone-900 font-medium mt-0.5 line-clamp-2">
                    {activeCase.finalState}
                  </p>
                </div>
              </div>

              {/* Artisan Quote */}
              <div className="p-4 bg-white rounded-xl border border-stone-200/80">
                <p className="text-xs font-serif-quote italic text-stone-800 leading-relaxed">
                  "{activeCase.breakthroughQuote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
