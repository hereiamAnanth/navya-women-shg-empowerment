import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GALLERY_ITEMS, GalleryItem } from '../data/navyaContent';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  MapPin,
  Play,
  Pause,
  Calendar,
  Layers,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInView, editorialEasing } from './MotionWrappers';

// Slide transition variants for direction-aware sliding
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { duration: 0.55, ease: editorialEasing },
      opacity: { duration: 0.45 },
      scale: { duration: 0.55, ease: editorialEasing },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.98,
    transition: {
      x: { duration: 0.55, ease: editorialEasing },
      opacity: { duration: 0.35 },
    },
  }),
};

export const GallerySection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const carouselContainerRef = useRef<HTMLDivElement>(null);

  const filters = ['All', 'Artisans', 'Finishing School', 'Field & Harvest', 'Assemblies'];

  const filteredItems: GalleryItem[] =
    selectedFilter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedFilter);

  // Safely clamp index if filter changes
  useEffect(() => {
    setCurrentIndex(0);
    setDirection(0);
  }, [selectedFilter]);

  const totalSlides = filteredItems.length;
  const currentSlide = filteredItems[currentIndex] || filteredItems[0];

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex((prevIndex) => {
        let nextIndex = prevIndex + newDirection;
        if (nextIndex < 0) {
          nextIndex = totalSlides - 1;
        } else if (nextIndex >= totalSlides) {
          nextIndex = 0;
        }
        return nextIndex;
      });
    },
    [totalSlides]
  );

  const goToSlide = (targetIndex: number) => {
    if (targetIndex === currentIndex) return;
    setDirection(targetIndex > currentIndex ? 1 : -1);
    setCurrentIndex(targetIndex);
  };

  // Autoplay timer with pause on hover or when lightbox is open
  useEffect(() => {
    if (!isPlaying || isHovered || activeLightboxItem !== null || totalSlides <= 1) {
      return;
    }

    const interval = setInterval(() => {
      paginate(1);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPlaying, isHovered, activeLightboxItem, totalSlides, paginate]);

  // Keyboard navigation for carousel and lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxItem) {
        if (e.key === 'Escape') {
          setActiveLightboxItem(null);
        } else if (e.key === 'ArrowRight') {
          // Navigate inside lightbox
          const currentInFiltered = filteredItems.findIndex(
            (item) => item.id === activeLightboxItem.id
          );
          if (currentInFiltered !== -1) {
            const nextIdx = (currentInFiltered + 1) % filteredItems.length;
            setActiveLightboxItem(filteredItems[nextIdx]);
          }
        } else if (e.key === 'ArrowLeft') {
          const currentInFiltered = filteredItems.findIndex(
            (item) => item.id === activeLightboxItem.id
          );
          if (currentInFiltered !== -1) {
            const prevIdx =
              (currentInFiltered - 1 + filteredItems.length) % filteredItems.length;
            setActiveLightboxItem(filteredItems[prevIdx]);
          }
        }
      } else {
        // When carousel is on screen
        if (e.key === 'ArrowRight') {
          paginate(1);
        } else if (e.key === 'ArrowLeft') {
          paginate(-1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxItem, filteredItems, paginate]);

  return (
    <section
      id="gallery"
      className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-stone-200 relative overflow-hidden"
      aria-label="Field Documentary Gallery"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInView className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B94A28] mb-3">
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#B94A28]" />
                07. Archival Gallery
              </span>
              <span aria-hidden="true">·</span>
              <span>Interactive Carousel</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-display leading-tight text-balance">
              Portraits of Dignity, Craft & Collective Power
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
              An unvarnished documentary archive tracing our village clusters across Madhya Pradesh,
              Bihar, Rajasthan, and Odisha. Explore each record through the curated carousel below.
            </p>
          </div>

          {/* Top Carousel Navigation Bar */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {/* Monospace Slide Counter */}
            <div className="px-3.5 py-1.5 bg-white border border-stone-200 rounded-lg shadow-2xs text-xs font-mono font-semibold text-stone-700 flex items-center gap-2">
              <span className="text-[#B94A28]">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span className="text-stone-300">/</span>
              <span>{String(totalSlides).padStart(2, '0')}</span>
            </div>

            {/* Autoplay Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
              className="p-2 bg-white hover:bg-stone-50 border border-stone-200 rounded-lg text-stone-700 hover:text-stone-900 transition-colors cursor-pointer shadow-2xs flex items-center gap-1.5 text-xs font-medium"
              title={isPlaying ? 'Pause autoplay' : 'Resume autoplay'}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 text-[#B94A28]" />
                  <span className="hidden sm:inline text-stone-600">Autoplay On</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 text-stone-500" />
                  <span className="hidden sm:inline text-stone-600">Paused</span>
                </>
              )}
            </button>

            {/* Prev / Next Circular Arrows */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous slide"
                className="p-2.5 bg-white hover:bg-[#184A3B] text-stone-700 hover:text-white border border-stone-200 hover:border-[#184A3B] rounded-lg transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => paginate(1)}
                aria-label="Next slide"
                className="p-2.5 bg-white hover:bg-[#184A3B] text-stone-700 hover:text-white border border-stone-200 hover:border-[#184A3B] rounded-lg transition-all cursor-pointer shadow-2xs active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </FadeInView>

        {/* Filter Tabs */}
        <FadeInView
          delay={0.1}
          className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 no-scrollbar"
        >
          {filters.map((filter) => {
            const isSelected = selectedFilter === filter;
            const count =
              filter === 'All'
                ? GALLERY_ITEMS.length
                : GALLERY_ITEMS.filter((i) => i.category === filter).length;

            return (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#184A3B] text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                <span>{filter}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </FadeInView>

        {/* Main Featured Carousel Stage */}
        <div
          ref={carouselContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden"
        >
          {/* Autoplay Progress Line Indicator (top border) */}
          {isPlaying && !isHovered && totalSlides > 1 && (
            <div className="absolute top-0 left-0 right-0 h-1 bg-stone-100 z-20 overflow-hidden">
              <motion.div
                key={currentIndex}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 5.5, ease: 'linear' }}
                className="h-full bg-[#B94A28]"
              />
            </div>
          )}

          {/* Carousel Viewport Container */}
          <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-end overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              {currentSlide && (
                <motion.div
                  key={currentSlide.id}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 w-full h-full"
                >
                  {/* Background Documentary Image */}
                  <img
                    src={currentSlide.image}
                    alt={currentSlide.title}
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim for high legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Overlaid Badges & Controls Header (Top Bar) */}
            <div className="relative z-10 p-5 sm:p-7 flex items-center justify-between pointer-events-none mb-auto">
              <div className="flex flex-wrap items-center gap-2 pointer-events-auto">
                <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-md text-xs font-bold text-[#B94A28] border border-white/40 shadow-sm">
                  {currentSlide?.category}
                </span>

                <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-md text-xs text-stone-200 border border-white/20 flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#E07A5F]" />
                  <span>{currentSlide?.location}</span>
                </span>

                <span className="hidden sm:inline-flex px-2.5 py-1 bg-black/50 backdrop-blur-md rounded-md text-xs text-stone-300 border border-white/15 items-center gap-1">
                  <Calendar className="w-3 h-3 text-stone-400" />
                  <span>Record {currentSlide?.year}</span>
                </span>
              </div>

              {/* Fullscreen Lightbox Trigger Button */}
              <button
                onClick={() => setActiveLightboxItem(currentSlide)}
                aria-label="View photo in high-resolution lightbox"
                className="pointer-events-auto p-2.5 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white rounded-xl border border-white/20 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95 flex items-center gap-2 text-xs font-medium"
                title="Expand to Fullscreen Lightbox"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden sm:inline">Expand View</span>
              </button>
            </div>

            {/* Editorial Caption Card (Bottom Overlay) */}
            <div className="relative z-10 p-6 sm:p-8 lg:p-10 max-w-4xl text-white">
              <div className="flex items-center gap-2 text-xs text-[#E07A5F] font-mono uppercase tracking-wider mb-2 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-[#E07A5F]" />
                <span>Field Documentary Archive · Series {currentSlide?.id.toUpperCase()}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white tracking-tight leading-tight mb-3 text-balance">
                {currentSlide?.title}
              </h3>

              <p className="text-sm sm:text-base text-stone-200 font-serif-quote italic leading-relaxed max-w-3xl mb-4 text-balance">
                "{currentSlide?.caption}"
              </p>

              {/* Bottom Quick Action & Metadata */}
              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/15 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Cluster Verified by Navya Field Secretariat</span>
                </div>
                <span aria-hidden="true" className="text-stone-500">·</span>
                <button
                  onClick={() => setActiveLightboxItem(currentSlide)}
                  className="text-stone-200 hover:text-white underline underline-offset-4 decoration-stone-400 hover:decoration-white transition-colors cursor-pointer"
                >
                  View Full Archival Detail
                </button>
              </div>
            </div>

            {/* Desktop Left/Right In-Slide Hover Arrows */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none z-10">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous slide"
                className="pointer-events-auto p-3 bg-black/40 hover:bg-black/75 backdrop-blur-md text-white rounded-full border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 sm:opacity-80"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none z-10">
              <button
                onClick={() => paginate(1)}
                aria-label="Next slide"
                className="pointer-events-auto p-3 bg-black/40 hover:bg-black/75 backdrop-blur-md text-white rounded-full border border-white/20 transition-all cursor-pointer shadow-lg hover:scale-110 active:scale-95 opacity-0 group-hover:opacity-100 sm:opacity-80"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Filmstrip & Navigation Scrubber */}
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              Archival Slide Filmstrip ({filteredItems.length} records)
            </span>
            <span className="text-xs text-stone-500">
              Click thumbnail or press Left / Right arrows to navigate
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
            {filteredItems.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => goToSlide(idx)}
                  className={`group relative text-left rounded-xl overflow-hidden transition-all cursor-pointer border ${
                    isActive
                      ? 'border-[#B94A28] ring-2 ring-[#B94A28]/30 shadow-md scale-[1.02] bg-white'
                      : 'border-stone-200 hover:border-stone-400 bg-white hover:bg-stone-50 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                        isActive ? 'scale-105' : ''
                      }`}
                      referrerPolicy="no-referrer"
                    />

                    {/* Active Ribbon */}
                    {isActive && (
                      <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 bg-[#B94A28] text-white rounded text-[10px] font-mono font-bold">
                        NOW
                      </div>
                    )}

                    <div className="absolute bottom-1 right-1.5 px-1.5 py-0.5 bg-black/60 backdrop-blur-xs text-white rounded text-[10px] font-mono">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="p-2.5">
                    <p
                      className={`text-[11px] font-bold line-clamp-1 font-display ${
                        isActive ? 'text-[#B94A28]' : 'text-stone-800'
                      }`}
                    >
                      {item.title}
                    </p>
                    <p className="text-[10px] text-stone-500 line-clamp-1 mt-0.5">
                      {item.location}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* High-Resolution Lightbox Modal */}
        <AnimatePresence>
          {activeLightboxItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: editorialEasing }}
                className="relative w-full max-w-5xl bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-700 max-h-[92vh] flex flex-col"
              >
                {/* Modal Top Bar */}
                <div className="p-4 sm:p-5 bg-stone-900/90 border-b border-stone-800 flex items-center justify-between text-stone-200">
                  <div className="flex items-center gap-2 text-xs sm:text-sm">
                    <span className="font-bold text-[#E07A5F] uppercase tracking-wide">
                      {activeLightboxItem.category}
                    </span>
                    <span aria-hidden="true" className="text-stone-600">·</span>
                    <span className="flex items-center gap-1 text-stone-400">
                      <MapPin className="w-3.5 h-3.5 text-[#E07A5F]" />
                      <span>{activeLightboxItem.location}</span>
                    </span>
                    <span aria-hidden="true" className="text-stone-600 hidden sm:inline">·</span>
                    <span className="text-stone-400 hidden sm:inline">
                      Field Record {activeLightboxItem.year}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Lightbox internal prev / next */}
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          const curr = filteredItems.findIndex(
                            (i) => i.id === activeLightboxItem.id
                          );
                          const prev =
                            (curr - 1 + filteredItems.length) % filteredItems.length;
                          setActiveLightboxItem(filteredItems[prev]);
                        }}
                        aria-label="Previous image in lightbox"
                        className="p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white rounded-lg transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => {
                          const curr = filteredItems.findIndex(
                            (i) => i.id === activeLightboxItem.id
                          );
                          const next = (curr + 1) % filteredItems.length;
                          setActiveLightboxItem(filteredItems[next]);
                        }}
                        aria-label="Next image in lightbox"
                        className="p-1.5 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white rounded-lg transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => setActiveLightboxItem(null)}
                      className="p-1.5 text-stone-400 hover:text-white bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer ml-1"
                      aria-label="Close lightbox"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Modal Main Image Display */}
                <div className="relative flex-1 bg-stone-950 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[440px]">
                  <img
                    src={activeLightboxItem.image}
                    alt={activeLightboxItem.title}
                    className="max-h-[64vh] w-auto max-w-full object-contain mx-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Modal Footer Caption & Description */}
                <div className="p-5 sm:p-7 bg-stone-900 border-t border-stone-800 space-y-2 text-stone-200">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-serif-quote italic">
                    "{activeLightboxItem.caption}"
                  </p>
                  <div className="pt-2 flex items-center justify-between text-xs text-stone-500">
                    <span>Cluster Habitation Registry: {activeLightboxItem.location}</span>
                    <span>Use Left/Right arrow keys to cycle images</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
