/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { JourneySection } from './components/JourneySection';
import { SixLsSection } from './components/SixLsSection';
import { PlatformsSection } from './components/PlatformsSection';
import { FinishingSchoolSection } from './components/FinishingSchoolSection';
import { ArtisanTransformationMap } from './components/ArtisanTransformationMap';
import { ArtisanShowcase } from './components/ArtisanShowcase';
import { ImpactSection } from './components/ImpactSection';
import { GallerySection } from './components/GallerySection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SupportModal } from './components/SupportModal';
import { CheckCircle2, X } from 'lucide-react';

export default function App() {
  const [supportModalOpen, setSupportModalOpen] = useState(false);
  const [supportInitialAmount, setSupportInitialAmount] = useState<number>(7500);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePledgeFromCalculator = (amount: number) => {
    setSupportInitialAmount(amount);
    setSupportModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 font-sans-custom selection:bg-[#B94A28] selection:text-white flex flex-col">
      {/* Top Navigation */}
      <Navbar onOpenDonateModal={() => setSupportModalOpen(true)} />

      {/* Main Narrative Flow */}
      <main className="flex-1">
        {/* Editorial Hero */}
        <Hero
          onExplore6Ls={() => scrollToSection('6ls')}
          onExploreArtisans={() => scrollToSection('artisan-showcase')}
        />

        {/* 01. About */}
        <AboutSection />

        {/* 02. Journey */}
        <JourneySection />

        {/* 03. 6Ls Framework */}
        <SixLsSection />

        {/* 04. Platforms Ecosystem */}
        <PlatformsSection />

        {/* 05. Finishing School */}
        <FinishingSchoolSection
          onSponsorCohort={() => {
            setSupportInitialAmount(25000);
            setSupportModalOpen(true);
          }}
        />

        {/* Visual Journey Mapping: Transformation of Artisans into Entrepreneurs */}
        <ArtisanTransformationMap />

        {/* Primary Interactive Feature: Artisan Showcase & Story Viewer */}
        <ArtisanShowcase onNotify={showToast} />

        {/* 06. Impact */}
        <ImpactSection onPledgeSupport={handlePledgeFromCalculator} />

        {/* 07. Archival Gallery */}
        <GallerySection />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenContact={() => scrollToSection('contact')} />

        {/* 08. Contact */}
        <ContactSection onNotify={showToast} />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Interactive Support & Pledge Modal */}
      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
        initialAmount={supportInitialAmount}
        onSuccess={showToast}
      />

      {/* Floating Interactive Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-80 max-w-md bg-stone-900 text-white px-5 py-3.5 rounded-xl shadow-xl border border-stone-700 flex items-start gap-3 animate-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="flex-1 text-xs leading-relaxed text-stone-200">
            {toastMessage}
          </div>
          <button
            onClick={() => setToastMessage(null)}
            className="text-stone-400 hover:text-white p-0.5 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
