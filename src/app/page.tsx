'use client';

import Link from 'next/link';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  FaCoffee, FaFlag, FaIdCard, FaTags, FaGift, FaBox, 
  FaArrowRight, FaStar, FaCheckCircle, FaPalette, FaTruck, 
  FaWhatsapp, FaUsers, FaCubes, FaClock, FaSmile, FaTshirt, FaFileAlt, FaCartPlus, FaPlus
} from 'react-icons/fa';

/* ─────────── Animation variants ─────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─────────── Category data with Icons ─────────── */
const categories = [
  { icon: FaCoffee, label: 'Mugs', color: '#FF6B2B', bg: '#FFF3EE' },
  { icon: FaFlag, label: 'Banners', color: '#7B61FF', bg: '#F1EEFF' },
  { icon: FaIdCard, label: 'Visiting Cards', color: '#00BFA5', bg: '#E6FAF8' },
  { icon: FaTshirt, label: 'Apparel', color: '#FF6B2B', bg: '#FFF3EE' },
  { icon: FaTags, label: 'Stickers', color: '#7B61FF', bg: '#F1EEFF' },
  { icon: FaFileAlt, label: 'Brochures', color: '#00BFA5', bg: '#E6FAF8' },
  { icon: FaGift, label: 'Gifts', color: '#FF6B2B', bg: '#FFF3EE' },
  { icon: FaBox, label: 'Packaging', color: '#7B61FF', bg: '#F1EEFF' },
];

/* ─────────── Carousel data ─────────── */
const carouselItems = [
  { img: '/images/products/mug-standard.png', title: 'Premium Mugs', price: 'From ৳250', glow: '#FF6B2B' },
  { img: '/images/products/tshirt-sublimation.png', title: 'Custom T-Shirts', price: 'From ৳400', glow: '#7B61FF' },
  { img: '/images/products/banner-rollup.png', title: 'Event Banners', price: 'From ৳2,500', glow: '#00E5C8' },
  { img: '/images/products/cards-spotuv.png', title: 'Business Cards', price: 'From ৳3/pc', glow: '#FFD700' },
];

/* ─────────── Featured products (Compact Gallery) ─────────── */
const featuredProducts = [
  { name: 'Ceramic Mug', desc: 'Custom printed ceramic', price: '৳250', category: 'Drinkware', img: '/images/products/mug-standard.png', badge: 'Hot' },
  { name: 'Crewneck Tee', desc: 'Stretch-proof print', price: '৳400', category: 'Apparel', img: '/images/products/tshirt-sublimation.png', badge: 'Popular' },
  { name: 'X-Banner', desc: 'Lightweight & portable', price: '৳2,500', category: 'Banners', img: '/images/products/banner-rollup.png', badge: null },
  { name: 'Premium Card', desc: '350gsm Spot UV finish', price: '৳3.5/pc', category: 'Business', img: '/images/products/cards-spotuv.png', badge: 'Top' },
  { name: 'Vinyl Sticker', desc: 'Waterproof die-cut', price: '৳2/pc', category: 'Labels', img: '/images/products/stickers-diecut.png', badge: 'Best' },
  { name: 'Gift Combo', desc: 'Luxury branded bundle', price: '৳1,500', category: 'Corporate', img: '/images/portfolio/gift-1.png', badge: 'New' },
];

/* ─────────── Stats ─────────── */
const stats = [
  { icon: FaSmile,  value: '5,000+',   label: 'Clients',   color: '#FF6B2B' },
  { icon: FaCubes,  value: '50+',      label: 'Products',  color: '#7B61FF' },
  { icon: FaClock,  value: '10+',      label: 'Years',     color: '#00BFA5' },
  { icon: FaUsers,  value: '24hr',     label: 'Support',   color: '#FFD700' },
];

/* ─────────── Testimonials ─────────── */
const testimonials = [
  { name: 'Rafiq Ahmed',    biz: 'Ahmed Traders',         text: '500 custom mugs delivered in 3 days. The print quality was outstanding and every client loved them!', rating: 5 },
  { name: 'Nasreen Begum',  biz: 'Fashionista Boutique',  text: 'Our custom T-shirts and shopping bags for the boutique launch were impeccable — exactly as designed.', rating: 5 },
  { name: 'Mohammad Karim', biz: 'Karim & Associates',    text: 'Our Spot UV visiting cards always impress. Premium feel, sharp detail, and unbeatable pricing!', rating: 5 },
];

/* ─────────── Section wrapper ─────────── */
function Section({ children, className = '', id = '' }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ═══════ HERO (RESTORED TO FULL FRAME) ═══════ */}
      <section className="relative min-h-screen lg:min-h-[100vh] flex items-center overflow-hidden hero-bg">
        {/* Background Blobs */}
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary-600/20 blur-[120px] animate-float" />
        <div className="absolute bottom-[0%] right-[5%] w-[400px] h-[400px] rounded-full bg-accent-orange/15 blur-[100px] animate-float-delay" />
        
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-32 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Top Badge on Mobile */}
            <div className="lg:contents">
              <div className="order-0 lg:col-span-2 mb-4 lg:mb-0">
                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass border border-white/20 shadow-[0_8px_40px_rgba(0,229,200,0.15)] group relative overflow-hidden"
                >
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-accent-teal shadow-[0_0_12px_#00E5C8]" />
                    <span className="absolute inset-0 w-2 h-2 rounded-full bg-accent-teal animate-ping opacity-40" />
                  </div>
                  
                  <span className="text-white font-black text-[10px] lg:text-xs uppercase tracking-[0.3em] flex items-center gap-2 relative z-10">
                    Chittagong&apos;s <span className="text-accent-teal">Premium</span> Print Partner
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Header Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-[1.1] mb-4 tracking-tighter">
                Your Brand, <br />
                <span className="shimmer-text">Perfectly Printed</span>
              </h1>
              <p className="text-base lg:text-xl text-white/70 mb-6 lg:mb-10 leading-relaxed max-w-xl">
                Experience the fusion of art and technology. From bespoke mugs to high-impact banners, we deliver excellence in every pixel and print.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-8 py-3 lg:px-10 lg:py-5 bg-accent-orange text-white rounded-xl lg:rounded-2xl font-black text-base lg:text-lg shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Get A Quote <FaArrowRight />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-3 px-8 py-3 lg:px-10 lg:py-5 glass text-white rounded-xl lg:rounded-2xl font-bold text-base lg:text-lg hover:bg-white/15 transition-all duration-300"
                >
                  View Catalog
                </Link>
              </div>
            </motion.div>

            {/* Carousel (Restored Full Frame) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center w-full max-w-[240px] lg:max-w-[480px] mx-auto mt-4 lg:mt-0 order-1 lg:order-2"
            >
              <div className="relative w-full aspect-[4/5] sm:aspect-[4/5]">
                <AnimatePresence mode="popLayout">
                  <motion.div 
                    key={`glow-${index}`}
                    className="absolute inset-[10%] -z-10 opacity-70 blur-[100px] rounded-full"
                    style={{ backgroundColor: carouselItems[index].glow }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.7 }}
                    exit={{ opacity: 0 }}
                  />

                  <motion.div
                    key={`bg-${(index + 1) % carouselItems.length}`}
                    initial={{ opacity: 0, rotate: 5, x: 20, scale: 0.9 }}
                    animate={{ opacity: 0.8, rotate: 10, x: 40, y: 30, scale: 0.95 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-primary-900 rounded-[40px] sm:rounded-[60px] border border-white/10 overflow-hidden filter grayscale opacity-40 shadow-xl"
                  >
                    <img
                      src={carouselItems[(index + 1) % carouselItems.length].img}
                      alt="Next"
                      className="w-full h-full object-cover opacity-30"
                    />
                  </motion.div>

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 300, rotate: 12 }}
                    animate={{ opacity: 1, x: 0, rotate: -3 }}
                    exit={{ opacity: 0, x: -300, rotate: -20 }}
                    transition={{ duration: 0.85, ease: [0.34, 1.56, 0.64, 1] }}
                    className="absolute inset-0 bg-primary-950 rounded-[40px] sm:rounded-[60px] border border-white/20 shadow-[0_50px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10 group"
                  >
                    <div className="h-[60%] sm:h-[420px] w-full overflow-hidden bg-white/10 rounded-b-[30px] sm:rounded-b-[40px] relative">
                      <motion.img
                        src={carouselItems[index].img}
                        alt={carouselItems[index].title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        initial={{ scale: 1.2 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1 }}
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-950 to-transparent" />
                    </div>
                    
                    <div className="p-4 sm:p-10 pt-4 relative z-20 flex flex-col flex-1 bg-primary-950">
                      <h3 className="text-xl sm:text-4xl font-heading font-black text-white leading-tight mb-2 sm:mb-4 tracking-tighter">
                        {carouselItems[index].title}
                      </h3>
                      
                      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                        <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-1">From</span>
                          <span className="text-accent-teal font-black text-2xl sm:text-4xl tracking-tighter">{carouselItems[index].price}</span>
                        </div>
                        
                        <motion.div 
                          whileHover={{ scale: 1.1, x: 5 }}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-[2rem] bg-accent-orange text-white flex items-center justify-center shadow-2xl group-hover:bg-white group-hover:text-primary-900 transition-all duration-300"
                        >
                          <FaArrowRight size={24} />
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>

        {/* WAVY BOTTOM */}
        <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full" preserveAspectRatio="none">
            <path d="M0 120L1440 120L1440 40C1200 120 960 0 720 40C480 80 240 120 0 40L0 120Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-white py-6 border-b border-bg-100 relative z-10">
        <div className="ticker-wrap">
          <div className="ticker-inner animate-ticker">
            {[...categories, ...categories].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 mx-10 text-xs font-black text-text-700 uppercase tracking-[0.3em]">
                {item.label}
                <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* OUR SERVICES */}
      <Section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div variants={fadeUp} className="text-center mb-20">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-accent-orange mb-4 block">Our Service</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary-900 tracking-tighter">Everything Your Brand Needs</h2>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat, i) => (
              <motion.div key={i} variants={fadeUp} className="group cursor-pointer">
                <div className="p-8 rounded-[40px] bg-bg-50 border border-bg-100 group-hover:bg-white group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: cat.bg, color: cat.color }}>
                    <cat.icon size={28} />
                  </div>
                  <h3 className="text-sm font-black text-primary-900 group-hover:text-accent-orange transition-colors uppercase tracking-widest">{cat.label}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FEATURED PRODUCTS */}
      <Section className="py-24 bg-bg-50 dot-pattern" id="featured">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-accent-orange mb-3 block">Gallery Showcase</span>
              <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary-900 tracking-tighter leading-none">Featured Collections</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-500 border border-bg-100 hover:border-accent-orange/30 flex flex-col h-full card-hover">
                  <div className="h-64 w-full relative overflow-hidden bg-bg-50">
                    <motion.img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    {product.badge && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary-900 text-white text-[8px] font-black uppercase tracking-widest shadow-lg">
                        {product.badge}
                      </span>
                    )}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 rounded-lg glass-light text-[8px] font-black uppercase tracking-widest text-primary-900 border border-white/40 shadow-sm backdrop-blur-md">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-lg font-heading font-black text-primary-900 mb-2 group-hover:text-accent-orange transition-colors line-clamp-1 tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-text-400 text-[11px] mb-6 leading-relaxed line-clamp-2">{product.desc}</p>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-bg-50">
                      <div className="flex flex-col">
                        <span className="text-[8px] font-bold uppercase tracking-widest text-text-300 mb-0.5">Price</span>
                        <span className="text-xl font-black text-primary-900 tracking-tighter uppercase">{product.price}</span>
                      </div>
                      
                      <Link
                        href="/contact"
                        className="w-10 h-10 rounded-xl bg-bg-50 text-primary-900 flex items-center justify-center group-hover:bg-accent-orange group-hover:text-white transition-all duration-300 shadow-sm"
                      >
                        <FaPlus size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={fadeUp} className="text-center mt-20">
            <Link href="/products" className="inline-flex items-center gap-3 px-8 py-4 border-2 border-primary-900/5 rounded-2xl font-black text-sm uppercase tracking-widest text-primary-900 hover:bg-primary-900 hover:text-white transition-all duration-500">
              Browse Entire Collection <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* STATS */}
      <Section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative flex flex-col items-center text-center">
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-bg-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
                  <stat.icon 
                    className="absolute top-0 right-0 text-primary-100 -rotate-12 transition-all duration-700 group-hover:rotate-12 group-hover:scale-150 group-hover:opacity-20" 
                    size={64} 
                  />
                  <div 
                    className="w-16 h-16 rounded-[24px] bg-white shadow-sm border border-bg-100 flex items-center justify-center relative z-10 transition-all duration-500 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] group-hover:-translate-y-2 group-hover:rotate-3"
                    style={{ color: stat.color }}
                  >
                    <stat.icon size={28} />
                  </div>
                </div>
                <div className="text-5xl font-heading font-black text-primary-900 mb-2 tracking-tighter" style={{ color: stat.color }}>
                  {stat.value}
                </div>
                <div className="text-text-400 font-bold uppercase tracking-[0.4em] text-[8px] whitespace-nowrap">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="py-24 bg-bg-50/50" id="testimonials">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <motion.div variants={fadeUp} className="text-center mb-20">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-accent-orange mb-3 block">Success Stories</span>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-primary-900 tracking-tighter">Client Success</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <motion.div key={i} variants={fadeUp} className="relative group h-full">
                <span className="absolute -top-10 left-6 text-[200px] font-black text-primary-900/5 select-none pointer-events-none group-hover:text-accent-orange/10 transition-colors duration-700 leading-none">&ldquo;</span>
                <div className="bg-white rounded-[40px] p-12 border border-bg-100 hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 h-full flex flex-col relative z-10 card-hover">
                  <div className="flex gap-1 mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                    {[...Array(t.rating)].map((_, j) => (
                      <FaStar key={j} className="text-accent-orange" size={14} />
                    ))}
                  </div>
                  <blockquote className="text-text-700 text-lg font-medium leading-relaxed mb-12 flex-1 relative">
                    &ldquo;{t.text}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-5 pt-8 border-t border-bg-50">
                    <div className="relative w-14 h-14 flex items-center justify-center">
                      <div className="absolute inset-0 bg-primary-900 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-10" />
                      <div className="w-12 h-12 rounded-2xl bg-primary-900 text-white flex items-center justify-center text-lg font-black shadow-lg relative z-10 -rotate-3 group-hover:rotate-0 transition-all duration-300">
                        {t.name.charAt(0)}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-black text-primary-900 text-sm uppercase tracking-tight truncate">{t.name}</span>
                        <FaCheckCircle className="text-accent-teal text-xs flex-shrink-0" title="Verified Customer" />
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-400 truncate">{t.biz}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* WHATSAPP CTA */}
      <section className="py-24 bg-gradient-to-br from-[#128C7E] to-[#25D366] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex p-6 rounded-3xl bg-white shadow-2xl mb-8">
              <FaWhatsapp size={48} className="text-[#25D366]" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-heading font-black text-white mb-6 tracking-tighter">Order via WhatsApp</h2>
            <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto italic">
              Send your design, get a quote, and confirm your order in minutes.
            </p>
            <a href="https://wa.me/8801974330594" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 px-12 py-5 bg-white text-[#128C7E] rounded-2xl font-black text-xl shadow-2xl hover:scale-105 transition-all">
              <FaWhatsapp size={32} /> GET STARTED
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
