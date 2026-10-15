import React, { useState } from 'react';
import { CHAPTER_CONTACTS } from '../data/navyaContent';
import { MapPin, Send, CheckCircle2, Building } from 'lucide-react';
import { FadeInView, StaggerContainer, StaggerItem } from './MotionWrappers';

interface ContactSectionProps {
  onNotify: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNotify }) => {
  const [activeIntent, setActiveIntent] = useState<'csr' | 'procure' | 'fellowship' | 'visit'>('csr');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    budgetOrScope: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const intents = [
    { id: 'csr', label: 'CSR & Institutional Grant' },
    { id: 'procure', label: 'Bulk Artisan Procurement' },
    { id: 'fellowship', label: 'Fellowship & Volunteer' },
    { id: 'visit', label: 'Visit a Rural Chapter' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setSubmitted(true);
    setTimeout(() => {
      onNotify('Your partnership inquiry has been dispatched to the Navya Institutional Secretariat. A coordinator will connect within 24 hours.');
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        budgetOrScope: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInView className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B94A28] mb-3">
            <span>08. Institutional Contact</span>
            <span aria-hidden="true">·</span>
            <span>Partnership & Chapter Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-display leading-tight text-balance">
            Partner With the Navya Movement
          </h2>
          <p className="mt-4 text-lg text-stone-700 leading-relaxed">
            Whether you represent a corporate CSR foundation looking to sponsor a block-level Finishing School or a design house seeking ethical handloom sourcing, we welcome your collaboration.
          </p>
        </FadeInView>

        {/* 2-Column Grid: Interactive Engagement Form + Chapter Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Columns: Form with FadeInView */}
          <FadeInView delay={0.1} className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-6 sm:p-10 shadow-xs">
            {/* Intent Selector Tabs */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wider mb-2">
                Select Inquiry Intent:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {intents.map((item) => {
                  const isSelected = activeIntent === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveIntent(item.id as any)}
                      className={`py-2 px-2.5 text-xs font-medium rounded-lg border transition-colors cursor-pointer text-center leading-tight ${
                        isSelected
                          ? 'bg-[#B94A28] text-white border-[#B94A28] shadow-2xs'
                          : 'bg-[#FAF7F2] text-stone-700 border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {submitted ? (
              <div className="p-8 bg-emerald-50 rounded-xl text-center space-y-3 text-[#184A3B]">
                <CheckCircle2 className="w-10 h-10 mx-auto" />
                <h4 className="text-lg font-bold font-display">Inquiry Registered</h4>
                <p className="text-xs text-stone-700 max-w-md mx-auto leading-relaxed">
                  Thank you. Your message has been routed to our Partnerships Lead. We maintain an SLA of 24 hours for official communications.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ananya Roy"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28] focus:border-[#B94A28]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ananya@foundation.org"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28] focus:border-[#B94A28]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Organization / Entity
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Global CSR Trust / Retail Co."
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28] focus:border-[#B94A28]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone / Mobile
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98123 45678"
                      className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28] focus:border-[#B94A28]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Estimated Scope / Grant Size (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.budgetOrScope}
                    onChange={(e) => setFormData({ ...formData, budgetOrScope: e.target.value })}
                    placeholder="e.g. ₹15 Lakhs CSR Grant / 500 Gift Hampers / 3-Month Fellowship"
                    className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28] focus:border-[#B94A28]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Message / Objectives
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share specific details about how you would like to collaborate with our women collectives..."
                    className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28] focus:border-[#B94A28]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 text-xs font-semibold tracking-wide text-white bg-[#B94A28] hover:bg-[#A03D1F] rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Official Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </FadeInView>

          {/* Right 5 Columns: Chapter Offices Directory with StaggerContainer */}
          <div className="lg:col-span-5 space-y-4">
            <FadeInView delay={0.15} className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
              <span className="text-xs font-mono font-bold text-[#B94A28] block mb-1">
                REGIONAL SECRETARIATS
              </span>
              <h3 className="text-lg font-bold font-display text-stone-900 mb-4">
                Field Headquarters & Hubs
              </h3>

              <div className="space-y-4">
                {CHAPTER_CONTACTS.map((chapter, i) => (
                  <div
                    key={i}
                    className="p-4 bg-[#FAF7F2] rounded-xl border border-stone-200/70 text-xs space-y-1.5"
                  >
                    <div className="font-bold font-display text-stone-900 text-sm">
                      {chapter.city}
                    </div>
                    <div className="flex items-start gap-1.5 text-stone-600">
                      <MapPin className="w-3.5 h-3.5 text-[#B94A28] shrink-0 mt-0.5" />
                      <span>{chapter.location}</span>
                    </div>
                    <div className="flex items-center gap-3 pt-1 text-[11px] text-stone-500 font-mono">
                      <span>{chapter.phone}</span>
                      <span>·</span>
                      <a href={`mailto:${chapter.email}`} className="text-[#184A3B] hover:underline">
                        {chapter.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInView>

            {/* Statutory Compliance Transparency Ribbon */}
            <FadeInView delay={0.2} className="p-4 bg-[#184A3B]/10 rounded-xl border border-[#184A3B]/20 text-xs text-stone-700 flex items-start gap-2.5">
              <Building className="w-4 h-4 text-[#184A3B] shrink-0 mt-0.5" />
              <div>
                <strong className="text-stone-900 font-semibold block">Statutory Non-Profit Registrations</strong>
                <span>Section 12A & 80G Certified · FCRA Compliant · CSR-1 Registration No. CSR00039218</span>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
};
