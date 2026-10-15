import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDonateModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDonateModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'about',
        'journey',
        '6ls',
        'platforms',
        'finishing-school',
        'transformation-map',
        'artisan-showcase',
        'impact',
        'gallery',
        'faqs',
        'contact',
      ];

      const scrollPos = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: '6Ls', href: '#6ls', id: '6ls' },
    { label: 'Platforms', href: '#platforms', id: 'platforms' },
    { label: 'Finishing School', href: '#finishing-school', id: 'finishing-school' },
    { label: 'Transformation', href: '#transformation-map', id: 'transformation-map' },
    { label: 'Artisans', href: '#artisan-showcase', id: 'artisan-showcase' },
    { label: 'Impact', href: '#impact', id: 'impact' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'FAQs', href: '#faqs', id: 'faqs' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3.5'
          : 'bg-[#FAF7F2] border-b border-stone-200/50 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element Brand Wordmark strictly following Top Bar Contract */}
          <a
            href="#"
            className="text-2xl font-bold tracking-tight text-stone-900 font-display flex items-center gap-1.5 hover:text-[#B94A28] transition-colors"
          >
            NAVYA
          </a>

          {/* Zone 2: Clean 1-2 word Nav Links without pill boxes */}
          <nav className="hidden xl:flex items-center space-x-5 text-sm font-medium text-stone-600">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap py-1 border-b-2 ${
                    isActive
                      ? 'border-[#B94A28] text-stone-900 font-semibold'
                      : 'border-transparent hover:text-stone-900 hover:border-stone-400'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 Primary Actions */}
          <div className="flex items-center space-x-3">
            <button
              onClick={onOpenDonateModal}
              className="px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#B94A28] hover:bg-[#A03D1F] active:bg-[#8A3217] rounded-lg transition-colors shadow-xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>Support Our Groups</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FAF7F2] border-b border-stone-200 px-6 py-4 shadow-lg animate-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2.5 py-2 text-sm font-medium text-stone-700">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-1 transition-colors border-l-2 pl-3 ${
                  activeSection === link.id
                    ? 'border-[#B94A28] text-stone-900 font-semibold bg-stone-100/60'
                    : 'border-transparent hover:text-stone-900'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-stone-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDonateModal();
                }}
                className="w-full py-2.5 px-4 text-xs font-semibold tracking-wide text-white bg-[#B94A28] hover:bg-[#A03D1F] rounded-lg transition-colors text-center cursor-pointer"
              >
                Support Our Groups
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
