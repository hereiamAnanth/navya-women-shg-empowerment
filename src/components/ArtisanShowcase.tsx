import React, { useState } from 'react';
import { ARTISAN_PRODUCTS, ArtisanProduct } from '../data/navyaContent';
import { ArrowUpRight, X, MapPin, Check, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInView, StaggerContainer, StaggerItem, editorialEasing } from './MotionWrappers';

interface ArtisanShowcaseProps {
  onNotify: (msg: string) => void;
}

export const ArtisanShowcase: React.FC<ArtisanShowcaseProps> = ({ onNotify }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStoryProduct, setActiveStoryProduct] = useState<ArtisanProduct | null>(null);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    organization: '',
    quantity: '50-200 Units (Corporate Gifting)',
    notes: '',
  });

  const categories = ['All', 'Handloom & Textiles', 'Organic Foods', 'Natural Crafts', 'Eco Living'];

  const filteredProducts =
    selectedCategory === 'All'
      ? ARTISAN_PRODUCTS
      : ARTISAN_PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.email) return;

    setInquirySuccess(true);
    setTimeout(() => {
      setInquirySuccess(false);
      setInquiryModalOpen(false);
      onNotify(`Inquiry received for ${activeStoryProduct?.title || 'Artisan Goods'}. Cluster coordinator will contact within 24 hours.`);
    }, 1800);
  };

  return (
    <section id="artisan-showcase" className="py-20 lg:py-28 bg-[#FAF7F2] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInView className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#B94A28] mb-3">
              <span>Interactive Showcase</span>
              <span aria-hidden="true">·</span>
              <span>Direct-to-Artisan Goods</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 font-display leading-tight text-balance">
              The Sovereign Artisan Showcase & Story Viewer
            </h2>
            <p className="mt-4 text-base sm:text-lg text-stone-700 leading-relaxed">
              Every handcrafted piece below directly represents a rural woman who transitioned from predatory debt to enterprise leadership. Click any product to explore her craft provenance, biography, and income transformation.
            </p>
          </div>

          <div className="shrink-0 text-xs text-stone-500 font-medium">
            <span>Showing {filteredProducts.length} certified artisan products</span>
          </div>
        </FadeInView>

        {/* Category Filter Tabs */}
        <FadeInView delay={0.1} className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? 'bg-[#B94A28] text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-stone-200 hover:border-stone-300 hover:bg-stone-50'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </FadeInView>

        {/* Product Cards Grid with StaggerContainer */}
        <StaggerContainer delay={0.15} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <StaggerItem key={product.id}>
              <div
                onClick={() => setActiveStoryProduct(product)}
                className="group bg-white rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden cursor-pointer hover:border-stone-400 h-full"
              >
                {/* Product Visual Container */}
                <div className="relative overflow-hidden bg-stone-100 aspect-4/3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div class="w-full h-full bg-[#EFE9DF] flex flex-col items-center justify-center p-6 text-center text-stone-700">
                            <span class="text-xs uppercase tracking-wider font-semibold text-[#B94A28] mb-1">${product.category}</span>
                            <h5 class="font-display text-sm font-bold text-stone-900">${product.title}</h5>
                          </div>
                        `;
                      }
                    }}
                  />

                  {/* Quiet Top Overlay Tag */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-semibold text-stone-800 border border-stone-200/60 shadow-2xs">
                    {product.category}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                    {product.priceDisplay}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5">
                      <MapPin className="w-3 h-3 text-[#B94A28]" />
                      <span>{product.village}, {product.state}</span>
                    </div>

                    <h3 className="text-base font-bold font-display text-stone-900 group-hover:text-[#B94A28] transition-colors line-clamp-1">
                      {product.title}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                      {product.backstory}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-stone-500 text-[11px]">Crafted by </span>
                      <span className="font-semibold text-stone-900">{product.artisanName}</span>
                    </div>

                    <span className="font-semibold text-[#B94A28] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>View Story</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Interactive Story Viewer Modal with AnimatePresence */}
        <AnimatePresence>
          {activeStoryProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.35, ease: editorialEasing }}
                className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl border border-stone-200 shadow-2xl p-6 sm:p-10"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveStoryProduct(null)}
                  className="absolute top-5 right-5 p-2 rounded-full text-stone-500 hover:text-stone-900 hover:bg-stone-100 transition-colors cursor-pointer"
                  aria-label="Close story modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  {/* Left 5 Cols: Visual and Quick Credentials */}
                  <div className="md:col-span-5 space-y-4">
                    <div className="relative overflow-hidden rounded-xl bg-stone-100 border border-stone-200 aspect-4/3 sm:aspect-1/1">
                      <img
                        src={activeStoryProduct.image}
                        alt={activeStoryProduct.title}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Maker Credentials Definition */}
                    <div className="p-4 bg-[#FAF7F2] rounded-xl border border-stone-200/80 space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-stone-500">Master Artisan:</span>
                        <span className="font-bold text-stone-900">{activeStoryProduct.artisanName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">SHG Collective:</span>
                        <span className="font-medium text-stone-800">{activeStoryProduct.shgGroup}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Village & Cluster:</span>
                        <span className="font-medium text-stone-800">{activeStoryProduct.village}, {activeStoryProduct.state}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">Retail Value:</span>
                        <span className="font-mono font-bold text-stone-900">{activeStoryProduct.priceDisplay}</span>
                      </div>
                    </div>

                    {/* Sustainability Indicators */}
                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                        Verified Credentials
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {activeStoryProduct.sustainabilityTags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[11px] text-stone-700 bg-stone-100 px-2 py-0.5 rounded border border-stone-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right 7 Cols: Narrative & Income Transformation */}
                  <div className="md:col-span-7 space-y-6">
                    <div>
                      <div className="text-xs font-mono font-bold text-[#B94A28] mb-1">
                        {activeStoryProduct.category}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-stone-900">
                        {activeStoryProduct.title}
                      </h3>
                    </div>

                    {/* Spoken Quote */}
                    <div className="p-5 bg-[#FAF7F2] rounded-xl border border-stone-200/90">
                      <p className="text-base font-serif-quote italic text-stone-800 leading-relaxed">
                        "{activeStoryProduct.storyQuote}"
                      </p>
                      <div className="mt-2 text-xs text-stone-500 font-medium">
                        — {activeStoryProduct.artisanName}, {activeStoryProduct.artisanRole}
                      </div>
                    </div>

                    {/* Story Narrative */}
                    <div className="space-y-3 text-sm text-stone-700 leading-relaxed">
                      <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-500">
                        Her Heritage Journey
                      </h4>
                      <p>{activeStoryProduct.backstory}</p>
                      <p>
                        <strong className="font-semibold text-stone-900">Technique: </strong>
                        {activeStoryProduct.craftTechnique}
                      </p>
                      <p>
                        <strong className="font-semibold text-stone-900">Materials: </strong>
                        {activeStoryProduct.materials}
                      </p>
                    </div>

                    {/* Income Transformation Quantitative Bar */}
                    <div className="p-5 bg-white rounded-xl border-2 border-[#184A3B]/30 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#184A3B]">
                          Verified Income Transformation
                        </span>
                        <span className="text-xs font-mono text-stone-500">
                          {activeStoryProduct.incomeTransformation.timeline}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-1">
                        <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                          <div className="text-[11px] text-stone-500">Before SHG Collective:</div>
                          <div className="text-sm font-bold text-stone-700 line-through">
                            {activeStoryProduct.incomeTransformation.before}
                          </div>
                        </div>

                        <div className="p-3 bg-[#184A3B]/10 rounded-lg border border-[#184A3B]/30">
                          <div className="text-[11px] text-[#184A3B] font-semibold">After Finishing School:</div>
                          <div className="text-sm font-bold text-[#184A3B]">
                            {activeStoryProduct.incomeTransformation.after}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs text-stone-600 italic">
                        <strong className="font-semibold text-stone-900">Household Impact: </strong>
                        {activeStoryProduct.incomeTransformation.familyImpact}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <button
                        onClick={() => setInquiryModalOpen(true)}
                        className="px-5 py-3 text-xs font-semibold tracking-wide text-white bg-[#B94A28] hover:bg-[#A03D1F] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <span>Inquire for Corporate / Bulk Orders</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => {
                          onNotify(`Sponsor pledge for ${activeStoryProduct.artisanName}'s cluster recorded.`);
                          setActiveStoryProduct(null);
                        }}
                        className="px-5 py-3 text-xs font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors cursor-pointer"
                      >
                        Sponsor Raw Materials (₹2,500)
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Corporate / Bulk Order Inquiry Modal */}
        <AnimatePresence>
          {inquiryModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.35, ease: editorialEasing }}
                className="relative w-full max-w-lg bg-white rounded-2xl border border-stone-200 shadow-2xl p-6 sm:p-8"
              >
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-700 rounded-full cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="mb-6">
                  <span className="text-xs font-mono font-bold text-[#B94A28]">SHILP-HAAT B2B DESK</span>
                  <h3 className="text-xl font-bold font-display text-stone-900 mt-1">
                    Order Sample / Bulk Inquiry
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    Inquiring for: <strong className="text-stone-900">{activeStoryProduct?.title}</strong>
                  </p>
                </div>

                {inquirySuccess ? (
                  <div className="p-6 bg-emerald-50 rounded-xl text-center space-y-2 text-[#184A3B]">
                    <Check className="w-8 h-8 mx-auto" />
                    <div className="text-sm font-bold">Inquiry Dispatched Directly to Cluster Desk</div>
                    <p className="text-xs text-stone-600">
                      A cluster enterprise manager will send the catalogue sample kit and invoice within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryData.name}
                        onChange={(e) => setInquiryData({ ...inquiryData, name: e.target.value })}
                        placeholder="e.g. Radhika Sen"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28] focus:border-[#B94A28]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Organization / Company Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({ ...inquiryData, email: e.target.value })}
                        placeholder="radhika@conscious-retail.in"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28] focus:border-[#B94A28]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Organization / CSR Entity
                      </label>
                      <input
                        type="text"
                        value={inquiryData.organization}
                        onChange={(e) => setInquiryData({ ...inquiryData, organization: e.target.value })}
                        placeholder="e.g. FabIndia / Tata Consumer / Private Buyer"
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28] focus:border-[#B94A28]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Expected Order Volume
                      </label>
                      <select
                        value={inquiryData.quantity}
                        onChange={(e) => setInquiryData({ ...inquiryData, quantity: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28] focus:border-[#B94A28]"
                      >
                        <option>1-5 Samples (Evaluation Kit)</option>
                        <option>50-200 Units (Corporate Gifting)</option>
                        <option>200-1,000 Units (Seasonal Retail)</option>
                        <option>1,000+ Units (Institutional Contract)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Customization Notes
                      </label>
                      <textarea
                        rows={2}
                        value={inquiryData.notes}
                        onChange={(e) => setInquiryData({ ...inquiryData, notes: e.target.value })}
                        placeholder="e.g. Custom fabric swatch colors or eco-box logo embossing..."
                        className="w-full px-3.5 py-2 text-xs bg-[#FAF7F2] border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#B94A28] focus:border-[#B94A28]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 text-xs font-semibold text-white bg-[#B94A28] hover:bg-[#A03D1F] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Submit Inbound Inquiry to Cluster</span>
                      </button>
                    </div>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
