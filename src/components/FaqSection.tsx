import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInView, StaggerContainer, StaggerItem, editorialEasing } from './MotionWrappers';

interface FaqItem {
  id: string;
  category: 'SHG Model & 6Ls' | 'Finishing School & Craft' | 'CSR & Grants' | 'Governance & Audits';
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'SHG Model & 6Ls',
    question: 'How do Navya’s Self-Help Groups (SHGs) differ from commercial micro-finance loans?',
    answer:
      'Commercial MFIs often charge aggressive interest rates (24%–36%) and enforce rigid daily repayments. Navya is not a lender. We facilitate peer-governed solidarity circles of 10–15 contiguous women who pool their own doorstep thrift (₹20–₹50 weekly). Group members vote on internal loans at gentle rates (1% monthly). 100% of the interest earned returns directly to the collective fund. Once established, we link them to formal commercial banks under NABARD guidelines for low-interest priority sector credit.',
  },
  {
    id: 'faq-2',
    category: 'SHG Model & 6Ls',
    question: 'What are the six dimensions of the 6Ls Empowerment Framework?',
    answer:
      'The 6Ls framework addresses the complete ecosystem of rural women’s dignity: Life (maternal health emergency funds and bodily autonomy), Learning (functional numeracy, smartphone banking apps, and legal rights), Livelihood (transitioning from manual labor to asset-owning micro-enterprises), Lifestyle (smokeless solar cooking, household tap water, and sanitation), Leadership (representation in Gram Sabhas and public policy), and Landscape (community regenerative farming, native afforestation, and water table replenishment).',
  },
  {
    id: 'faq-3',
    category: 'Finishing School & Craft',
    question: 'What is the eligibility and curriculum structure for the Finishing School?',
    answer:
      'High-potential SHG clusters with at least six months of disciplined weekly thrift records and 98%+ repayment rates are eligible. The incubation program runs for 6 to 12 weeks across four specialized tracks: Agro-Processing & Packaging, Artisan Handloom & Natural Dyeing, Enterprise Bookkeeping & Digital Ops, and Brand Storytelling & B2B Negotiation. We provide industrial machinery (oil expellers, pneumatic frame looms) and guide enterprises through FSSAI and Handloom Mark accreditations.',
  },
  {
    id: 'faq-4',
    category: 'Finishing School & Craft',
    question: 'How does Shilp-Haat guarantee fair financial compensation to rural artisans?',
    answer:
      'Shilp-Haat completely eliminates local commission middlemen. Every handcrafted textile, cold-pressed oil bottle, and pottery piece has a transparent cost breakdown. 100% of the artisan labor and production margin is directly credited via digital banking into the registered collective account of the producer group. Payment disbursements are confirmed instantly via mobile audio soundboxes in their local dialect.',
  },
  {
    id: 'faq-5',
    category: 'CSR & Grants',
    question: 'Are contributions to Navya eligible for tax exemption and CSR compliance in India?',
    answer:
      'Yes. All donations by Indian taxpayers and corporate entities qualify for 50% tax deductions under Section 80G of the Indian Income Tax Act (receipts dispatched automatically with official 80G certification). Navya is also registered under Section 12A, holds Ministry of Corporate Affairs CSR-1 registration (CSR00039218), and maintains FCRA approval for verified international philanthropic foundations.',
  },
  {
    id: 'faq-6',
    category: 'CSR & Grants',
    question: 'Can corporate clients commission custom employee gifting hampers or bulk orders?',
    answer:
      'Yes. Our B2B Corporate Desk regularly coordinates bulk gifting for corporate Diwali, annual shareholder meetings, and sustainable hospitality clients. Hampers can feature certified organic forest honey, high-curcumin Lakadong turmeric, handloom silk stoles, and hand-woven river-cane presentation boxes with custom corporate logo engraving and individual artisan story cards.',
  },
  {
    id: 'faq-7',
    category: 'Governance & Audits',
    question: 'How does Navya ensure zero financial leakage across remote village hamlets?',
    answer:
      'Every savings deposit and loan disbursement is logged into our offline-first bilingual mobile application (Sanchay-Digi), generating auditable digital records and real-time SMS alerts. Passbooks are reconciled publicly during weekly village circles. At the cluster federation level, books are independently audited each financial quarter by certified chartered accountants and published for community inspection.',
  },
];

interface FaqSectionProps {
  onOpenContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedId, setExpandedId] = useState<string | null>('faq-1');

  const categories = [
    'All',
    'SHG Model & 6Ls',
    'Finishing School & Craft',
    'CSR & Grants',
    'Governance & Audits',
  ];

  const filteredFaqs =
    selectedCategory === 'All'
      ? FAQ_DATA
      : FAQ_DATA.filter((item) => item.category === selectedCategory);

  const toggleAccordion = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInView className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B94A28] mb-3">
            <span>Frequently Asked Questions</span>
            <span aria-hidden="true">·</span>
            <span>Institutional & Ground Clarity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-display leading-tight text-balance">
            Questions on Our Model, Governance & Partnerships
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            Clear, transparent answers regarding how our Self-Help Groups operate, how funds are audited, and how corporate and philanthropic allies can engage.
          </p>
        </FadeInView>

        {/* Category Filter Pills (Functional Buttons) */}
        <FadeInView delay={0.1} className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#184A3B] text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </FadeInView>

        {/* FAQs Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Accordion Column */}
          <div className="lg:col-span-8 space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = expandedId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-stone-200/90 shadow-2xs overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <div className="text-[11px] font-mono font-bold text-[#B94A28] uppercase tracking-wider">
                        {faq.category}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold font-display text-stone-900 leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`p-2 rounded-lg bg-stone-100 text-stone-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#B94A28] text-white' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: editorialEasing }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-sm text-stone-700 leading-relaxed border-t border-stone-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Supporting Sidebar Card */}
          <FadeInView delay={0.2} className="lg:col-span-4 space-y-4">
            <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-stone-200/90 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#184A3B] text-white flex items-center justify-center">
                <HelpCircle className="w-5 h-5" />
              </div>

              <div>
                <h4 className="text-base font-bold font-display text-stone-900 mb-1">
                  Have a specific question?
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Our institutional secretariat assists CSR committees, research scholars, and prospective artisan buyers with detailed documentation and cluster visitation arrangements.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenContact}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#B94A28] hover:bg-[#A03D1F] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Contact Our Secretariat</span>
                </button>
              </div>

              <div className="pt-2 border-t border-stone-200/80 text-[11px] text-stone-500">
                Average email response time: within 24 business hours.
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs text-stone-600 space-y-1">
              <div className="font-semibold text-stone-900">Direct Secretariat Inquiries:</div>
              <div className="font-mono text-[11px] text-[#184A3B]">secretariat@navya-impact.org</div>
              <div className="font-mono text-[11px] text-stone-500">+91 141 278 9400</div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};
