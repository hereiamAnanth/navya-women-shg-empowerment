import React, { useState } from 'react';
import { X, Check, Heart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { editorialEasing } from './MotionWrappers';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount?: number;
  onSuccess: (message: string) => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  initialAmount = 7500,
  onSuccess,
}) => {
  const [selectedTier, setSelectedTier] = useState<number>(initialAmount);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPan, setDonorPan] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const tiers = [
    { amount: 2500, label: '6Ls Member Induction', desc: 'Passbooks, literacy tablet access & healthcare emergency corpus contribution for 1 woman.' },
    { amount: 7500, label: 'Finishing School Seat', desc: '12-week comprehensive business incubation, FSSAI compliance, and packaging training.' },
    { amount: 25000, label: 'Loom & Machine Grant', desc: 'Pneumatic fly-shuttle loom or low-RPM cold oil press machine for a 5-member guild.' },
    { amount: 50000, label: 'Village Agro-Solar Well', desc: 'Solar-powered drip irrigation check pump reviving 10 smallholder plots.' },
  ];

  const handleSupportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!donorName || !donorEmail) return;

    setIsCompleted(true);
    setTimeout(() => {
      onSuccess(`Thank you, ${donorName}! Your tax-deductible pledge of ₹${selectedTier.toLocaleString('en-IN')} has been credited to our Women Enterprise Corpus.`);
      setIsCompleted(false);
      onClose();
    }, 1800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-70 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.35, ease: editorialEasing }}
            className="relative w-full max-w-lg bg-white rounded-2xl border border-stone-200 shadow-2xl p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#B94A28] mb-1">
                <Heart className="w-3.5 h-3.5" />
                <span>DIRECT SOCIAL INVESTMENT</span>
              </div>
              <h3 className="text-2xl font-bold font-display text-stone-900">
                Sponsor Women's Collectives
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                All contributions qualify for 50% tax exemption under Section 80G of the Indian Income Tax Act.
              </p>
            </div>

            {isCompleted ? (
              <div className="p-8 bg-emerald-50 rounded-xl text-center space-y-3 text-[#184A3B]">
                <Check className="w-10 h-10 mx-auto" />
                <h4 className="text-lg font-bold font-display">Contribution Successfully Confirmed</h4>
                <p className="text-xs text-stone-700 leading-relaxed max-w-xs mx-auto">
                  Your 80G tax receipt and cluster allocation update have been queued to {donorEmail}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSupportSubmit} className="space-y-4">
                {/* Tiers */}
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-stone-700">
                    Choose Support Allocation:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {tiers.map((tier) => (
                      <button
                        key={tier.amount}
                        type="button"
                        onClick={() => setSelectedTier(tier.amount)}
                        className={`text-left p-3 rounded-xl border transition-all cursor-pointer ${
                          selectedTier === tier.amount
                            ? 'bg-[#FAF7F2] border-[#B94A28] ring-1 ring-[#B94A28]'
                            : 'bg-white border-stone-200 hover:border-stone-300'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="font-bold text-stone-900 font-display text-sm">
                            ₹{tier.amount.toLocaleString('en-IN')}
                          </span>
                          {selectedTier === tier.amount && (
                            <span className="w-2 h-2 rounded-full bg-[#B94A28]"></span>
                          )}
                        </div>
                        <div className="text-xs font-semibold text-stone-800">{tier.label}</div>
                        <div className="text-[10px] text-stone-500 mt-1 line-clamp-2 leading-tight">
                          {tier.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Donor / Entity Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="e.g. Rohini Nilambur"
                    className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email for 80G Receipt *
                    </label>
                    <input
                      type="email"
                      required
                      value={donorEmail}
                      onChange={(e) => setDonorEmail(e.target.value)}
                      placeholder="rohini@email.com"
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      PAN Number (Optional for Tax Exemption)
                    </label>
                    <input
                      type="text"
                      value={donorPan}
                      onChange={(e) => setDonorPan(e.target.value.toUpperCase())}
                      placeholder="ABCDE1234F"
                      className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28]"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-semibold tracking-wide text-white bg-[#B94A28] hover:bg-[#A03D1F] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Confirm Pledge of ₹{selectedTier.toLocaleString('en-IN')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
