import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              className="text-2xl font-bold font-display tracking-tight text-white hover:text-[#B94A28] transition-colors inline-block"
            >
              NAVYA
            </a>
            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              A women’s empowerment programme that helps rural women and young women gain business skills, improve well-being, access markets, earn sustainable income, and become confident community leaders.
            </p>
            <div className="text-xs text-stone-500 space-y-1">
              <div>Registered under Indian Societies Registration Act, 1860</div>
              <div>FCRA, 12A & 80G Tax-Exempt Status</div>
            </div>
          </div>

          {/* Quick Pillars Mirror */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
              Information Architecture
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-white transition-colors">01. About & The SHG Model</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-white transition-colors">02. 5-Stage Member Journey</a>
              </li>
              <li>
                <a href="#6ls" className="hover:text-white transition-colors">03. The 6Ls Framework</a>
              </li>
              <li>
                <a href="#platforms" className="hover:text-white transition-colors">04. Platforms Ecosystem</a>
              </li>
              <li>
                <a href="#finishing-school" className="hover:text-white transition-colors">05. The Finishing School</a>
              </li>
            </ul>
          </div>

          {/* Next Pillars Mirror */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-stone-400">
              Enterprises & Governance
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#transformation-map" className="hover:text-white transition-colors">Artisan Transformation Map</a>
              </li>
              <li>
                <a href="#artisan-showcase" className="hover:text-white transition-colors">Artisan Showcase & Stories</a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">06. Audited Longitudinal Impact</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">07. Archival Field Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">08. Institutional Contact</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">Frequently Asked Questions</a>
              </li>
            </ul>
          </div>

          {/* Back to top button */}
          <div className="lg:col-span-2 flex flex-col justify-between items-start lg:items-end">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 text-xs font-semibold text-stone-300 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <div className="text-[11px] text-stone-500 mt-6 lg:mt-0 lg:text-right">
              <div>NABARD Partner Agency</div>
              <div>National Rural Livelihoods Mission (NRLM) Node</div>
            </div>
          </div>
        </div>

        {/* Quiet Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} Navya Rural Development Society. All rights reserved.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <a href="#faqs" className="hover:text-stone-300 transition-colors">Knowledge Base</a>
            <a href="#contact" className="hover:text-stone-300 transition-colors">Annual Financial Filings</a>
            <a href="#contact" className="hover:text-stone-300 transition-colors">Child & Gender Safety Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
