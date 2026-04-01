'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowRight, FaSearch, FaPlus, FaFilter, 
  FaCoffee, FaTshirt, FaFlag, FaIdCard, FaFileAlt, FaTags, FaGift, FaBox, FaCubes 
} from 'react-icons/fa';

const categoryIcons: Record<string, React.ComponentType<{ size?: number; className?: string; color?: string }>> = {
  'mugs-drinkware': FaCoffee,
  'apparel-tshirts': FaTshirt,
  'banners-signage': FaFlag,
  'visiting-cards': FaIdCard,
  'brochures-flyers': FaFileAlt,
  'stickers-labels': FaTags,
  'corporate-gifts': FaGift,
  'packaging': FaBox,
};

type Product = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
  startingPrice: number | null;
  moq: number | null;
  leadTime: string | null;
  images: string | null;
};

type Category = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  imageUrl: string | null;
  products: Product[];
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const categoryColors: Record<string, string> = {
  'mugs-drinkware': '#FF6B2B',
  'apparel-tshirts': '#7B61FF',
  'banners-signage': '#00BFA5',
  'visiting-cards': '#FFD700',
  'brochures-flyers': '#00E5C8',
  'stickers-labels': '#FF4D8D',
  'corporate-gifts': '#FF8A00',
  'packaging': '#8E44AD',
};

export default function ProductsClient({ categories }: { categories: Category[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const filteredCategories = categories
    .map((cat) => ({
      ...cat,
      products: cat.products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((cat) =>
      (!selectedCategory || cat.slug === selectedCategory) &&
      (search === '' || cat.products.length > 0)
    );

  return (
    <div className="bg-white min-h-screen">
      {/* ═══════ COMPACT SEARCH HERO (Fixed Contrast) ═══════ */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-primary-950 border-b border-white/5">
        <div className="absolute inset-0 bg-[url('/images/dots.png')] opacity-10 pointer-events-none" />
        
        <div className="max-w-xl mx-auto px-5 sm:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* COMPACT STUNNING SEARCH */}
            <div className="relative group">
              <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-primary-900 group-focus-within:text-accent-orange transition-colors z-20" size={16} />
              <input
                type="text"
                placeholder="Search printing services..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-bg-50/95 border-2 border-white/10 rounded-2xl text-primary-900 placeholder-primary-900/40 focus:outline-none focus:ring-2 focus:ring-accent-teal shadow-2xl transition-all font-bold text-sm tracking-tight"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ COMPACT COLORFUL FILTER EMBLEMS (Mobile Collapsible) ═══════ */}
      <nav className="sticky top-20 z-50 bg-white border-b border-bg-100 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center text-primary-900">
          
          {/* Mobile Filter Toggle */}
          <button 
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="lg:hidden flex items-center justify-center gap-3 w-full py-2 mb-3 bg-bg-50 rounded-xl border border-bg-100 text-[10px] font-black uppercase tracking-[0.2em]"
          >
            <FaFilter size={10} className={isFiltersOpen ? 'text-accent-orange' : ''} /> 
            {isFiltersOpen ? 'Hide Categories' : 'Browse Categories'}
            {selectedCategory && <span className="w-1.5 h-1.5 rounded-full bg-accent-teal animate-pulse" />}
          </button>

          <div className={`${isFiltersOpen ? 'flex' : 'hidden'} lg:flex flex-wrap justify-center gap-2.5 transition-all duration-500`}>
            <button
              onClick={() => { setSelectedCategory(null); setIsFiltersOpen(false); }}
              className={`flex items-center gap-3 px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-300 border-2 ${
                !selectedCategory 
                ? 'bg-primary-900 border-primary-900 text-white shadow-xl' 
                : 'bg-white border-bg-100 text-primary-900'
              }`}
            >
              <FaFilter size={12} /> ALL
            </button>
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.slug] || FaCubes;
              const iconColor = categoryColors[cat.slug] || '#2D1B8E';
              const isSelected = selectedCategory === cat.slug;

              return (
                <button
                  key={cat.slug}
                  onClick={() => { setSelectedCategory(cat.slug); setIsFiltersOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-[0.1em] transition-all duration-300 border-2 shadow-sm ${
                    isSelected 
                    ? 'bg-primary-900 border-primary-900 text-white scale-105' 
                    : 'bg-white border-bg-100 text-primary-900 hover:bg-bg-50'
                  }`}
                >
                  <Icon size={14} color={isSelected ? '#fff' : iconColor} />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ═══════ PRODUCTS GRID (PROFESSIONAL ITEM PANEL) ═══════ */}
      <main className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => (
              <motion.div 
                key={cat.id} 
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mb-24 last:mb-0"
              >
                {/* Clean Category Label */}
                <div className="flex items-center justify-between mb-10 border-l-4 border-primary-900 pl-6">
                  <div>
                    <h2 className="text-2xl font-heading font-black text-primary-900 tracking-tight uppercase">{cat.name}</h2>
                    <p className="text-text-400 text-xs font-medium uppercase tracking-widest mt-1">{cat.description}</p>
                  </div>
                </div>

                {/* Structured Professional Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {cat.products.map((product) => (
                    <motion.div key={product.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      <Link href={`/products/${product.slug}`} className="group block h-full">
                        <div className="relative bg-white border border-bg-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-accent-orange/20 transition-all duration-500 h-full flex flex-col">
                          
                          {/* PRODUCT IMAGE FRAME (Square-ish, Styled) */}
                          <div className="aspect-[4/3] w-full bg-bg-50/50 p-1 relative group-hover:bg-bg-50 transition-colors">
                            <div className="w-full h-full rounded-2xl overflow-hidden bg-white border border-bg-50 relative">
                              {product.images ? (
                                <img 
                                  src={product.images} 
                                  alt={product.name} 
                                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115" 
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center opacity-5">
                                  <FaCubes size={60} />
                                </div>
                              )}
                              
                              {/* Minimal Badge */}
                              {product.moq && (
                                <div className="absolute bottom-4 left-4 flex gap-2">
                                  <span className="px-2 py-1 rounded bg-primary-900/5 text-primary-900 text-[8px] font-black uppercase tracking-widest border border-primary-900/10">
                                    MOQ: {product.moq}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* DETAILS (Minimal Professional Typography) */}
                          <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-base font-heading font-black text-primary-900 mb-1 group-hover:text-accent-orange transition-colors uppercase tracking-tight">
                              {product.name}
                            </h3>
                            <div className="flex items-center gap-2 mb-6">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                              <span className="text-[9px] font-black text-text-400 uppercase tracking-widest leading-none">Premium Finish</span>
                            </div>
                            
                            <div className="mt-auto pt-6 border-t border-bg-50 flex items-center justify-between">
                              <div className="flex flex-col">
                                <span className="text-[8px] font-bold text-text-300 uppercase tracking-widest mb-0.5">EST. RATE</span>
                                <span className="text-xl font-heading font-black text-primary-900 tracking-tighter">
                                  ৳{product.startingPrice?.toLocaleString() || 'POA'}
                                </span>
                              </div>
                              <div className="w-10 h-10 rounded-xl bg-bg-50 text-primary-900 flex items-center justify-center transition-all group-hover:bg-accent-orange group-hover:text-white shadow-sm">
                                <FaPlus size={14} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredCategories.length === 0 && (
            <div className="text-center py-32 bg-bg-50/50 rounded-[3rem] border border-dashed border-bg-100">
              <h3 className="text-xl font-heading font-black text-primary-800 mb-2 uppercase">No matches found</h3>
              <p className="text-text-400 text-sm font-medium">Try another search term or browse by category.</p>
            </div>
          )}
        </div>
      </main>

      {/* ═══════ MINIMAL PROFESSIONAL CTA ═══════ */}
      <section className="py-24 bg-primary-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-accent-orange/5 blur-3xl rounded-full translate-x-1/2" />
        <div className="max-w-4xl mx-auto px-5 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl font-heading font-black mb-6 tracking-tight uppercase">
            Custom Professional Branding
          </h2>
          <p className="text-white/40 text-lg mb-10 max-w-xl mx-auto font-medium">
            High-volume corporate projects are our specialty. Contact our team for bespoke quotations and lead-time guarantees.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 px-10 py-5 bg-accent-orange text-white rounded-2xl font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 transition-all"
            >
              Contact Specialist <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
