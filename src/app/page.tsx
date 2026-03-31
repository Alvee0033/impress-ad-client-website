'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaCoffee, FaTshirt, FaFlag, FaIdCard, FaFileAlt,
  FaTags, FaGift, FaBox, FaArrowRight, FaStar,
  FaCheckCircle, FaPalette, FaTruck, FaWhatsapp,
  FaUsers, FaCubes, FaClock, FaSmile
} from 'react-icons/fa';

/* ─────────── Animation variants ─────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─────────── Category data ─────────── */
const categories = [
  { img: '/images/categories/mugs-drinkware.png', label: 'Mugs', color: '#FF6B2B' },
  { img: '/images/categories/banners-signage.png', label: 'Banners', color: '#00BFA5' },
  { img: '/images/categories/visiting-cards.png', label: 'Visiting Cards', color: '#2D1B8E' },
  { img: '/images/categories/apparel-tshirts.png', label: 'Apparel', color: '#FF6B2B' },
  { img: '/images/categories/stickers-labels.png', label: 'Stickers', color: '#00BFA5' },
  { img: '/images/categories/brochures-flyers.png', label: 'Brochures', color: '#2D1B8E' },
  { img: '/images/categories/corporate-gifts.png', label: 'Gifts', color: '#FF6B2B' },
  { img: '/images/categories/packaging.png', label: 'Packaging', color: '#00BFA5' },
];

/* ─────────── Featured products ─────────── */
const featuredProducts = [
  { name: 'Custom Ceramic Mug', desc: 'Full-color sublimation on premium ceramic', price: 'From ৳250', category: 'Mugs & Drinkware', img: '/images/products/mug-standard.png' },
  { name: 'Round Neck T-Shirt', desc: 'Sublimation printed, vibrant colors', price: 'From ৳400', category: 'Apparel', img: '/images/products/tshirt-sublimation.png' },
  { name: 'Roll-Up Banner', desc: 'Portable retractable banner with stand', price: 'From ৳2,500', category: 'Banners', img: '/images/products/banner-rollup.png' },
  { name: 'Spot UV Business Card', desc: 'Selective UV coating for premium feel', price: 'From ৳3/pc', category: 'Visiting Cards', img: '/images/products/cards-spotuv.png' },
  { name: 'Custom Stickers', desc: 'Die-cut stickers in any shape', price: 'From ৳2/pc', category: 'Stickers', img: '/images/products/stickers-diecut.png' },
  { name: 'Corporate Gift Set', desc: 'Pen, diary, and mug branded combo', price: 'From ৳1,500', category: 'Corporate Gifts', img: '/images/portfolio/gift-1.png' },
];

/* ─────────── How it works ─────────── */
const steps = [
  { icon: FaCubes, title: 'Choose Product', desc: 'Browse our catalog and pick what you need' },
  { icon: FaPalette, title: 'Share Your Design', desc: 'Upload your design or let us help you create one' },
  { icon: FaCheckCircle, title: 'We Print It', desc: 'Our team prints with precision and quality control' },
  { icon: FaTruck, title: 'Fast Delivery', desc: 'Quick turnaround and reliable delivery' },
];

/* ─────────── Stats ─────────── */
const stats = [
  { icon: FaSmile, value: '5,000+', label: 'Happy Customers' },
  { icon: FaCubes, value: '50+', label: 'Product Types' },
  { icon: FaClock, value: '10+', label: 'Years Experience' },
  { icon: FaUsers, value: 'Same-Day', label: 'Estimates' },
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
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary-900">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="/images/hero-bg.png" alt="" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/40 to-primary-900/80" />
        </div>
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }} />
        </div>
        {/* Floating decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-accent-orange/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent-teal/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-sm mb-6">
                ✨ Chittagong&apos;s Trusted Printing Partner
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight mb-6">
                Your Brand,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-yellow-400">
                  Perfectly Printed
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl">
                From mugs and T-shirts to banners and visiting cards — we bring your brand to life with vibrant colors and premium quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-orange to-orange-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-accent-orange/30 hover:shadow-accent-orange/50 hover:scale-105 transition-all duration-300"
                >
                  Get a Free Quote <FaArrowRight />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Explore Products
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ WHAT WE DO STRIP ═══════ */}
      <Section className="py-16 bg-white border-b border-border-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-900 mb-3">What We Print</h2>
            <p className="text-text-600 text-lg">Everything your brand needs, all under one roof</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                variants={fadeUp}
                className="group flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-bg-50 transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 overflow-hidden border border-border-100"
                >
                  <img src={cat.img} alt={cat.label} className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-semibold text-text-900 text-center">{cat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════ FEATURED PRODUCTS ═══════ */}
      <Section className="py-20 bg-bg-50 section-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-900 mb-3">Featured Products</h2>
            <p className="text-text-600 text-lg">Our most popular printing & branding solutions</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-200 hover:border-transparent">
                  <div className="h-48 relative overflow-hidden">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-semibold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-bold text-lg text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-text-600 text-sm mb-4">{product.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-accent-orange font-bold text-lg">{product.price}</span>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-primary-900 text-white rounded-xl text-sm font-semibold hover:bg-primary-700 transition-colors"
                      >
                        Get Quote <FaArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary-700 text-primary-700 rounded-2xl font-bold hover:bg-primary-700 hover:text-white transition-all duration-300"
            >
              View All Products <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ═══════ HOW IT WORKS ═══════ */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-900 mb-3">How It Works</h2>
            <p className="text-text-600 text-lg">Simple 4-step process to get your products printed</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center group">
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center text-white text-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 mx-auto">
                    <step.icon />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-orange text-white text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-primary-900 mb-2">{step.title}</h3>
                <p className="text-text-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>


      {/* ═══════ STATS ═══════ */}
      <Section className="py-16 bg-gradient-to-r from-primary-900 via-primary-700 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent-orange mx-auto mb-4">
                  <stat.icon size={24} />
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <Section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeUp} className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-900 mb-3">What Our Clients Say</h2>
            <p className="text-text-600 text-lg">Trusted by businesses and individuals across Chittagong</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Rafiq Ahmed', biz: 'Ahmed Traders', text: 'Impress Ad delivered 500 custom mugs for our corporate event in just 3 days. The print quality was outstanding!', rating: 5 },
              { name: 'Nasreen Begum', biz: 'Fashionista Boutique', text: 'We ordered custom T-shirts and shopping bags for our boutique launch. The attention to detail was impressive.', rating: 5 },
              { name: 'Mohammad Karim', biz: 'Karim & Associates', text: 'Our visiting cards from Impress Ad always impress our clients. Great premium feel and excellent pricing.', rating: 5 },
            ].map((t, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="bg-bg-50 rounded-3xl p-8 border border-border-200 hover:shadow-lg hover:border-accent-orange/20 transition-all duration-300 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <FaStar key={j} className="text-yellow-400" size={18} />
                    ))}
                  </div>
                  <p className="text-text-900 leading-relaxed flex-1 mb-6">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-700 to-accent-orange flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-primary-900 text-sm">{t.name}</div>
                      <div className="text-text-600 text-xs">{t.biz}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUp} className="text-center mt-10">
            <Link
              href="/testimonials"
              className="text-primary-700 font-semibold hover:text-accent-orange transition-colors inline-flex items-center gap-1"
            >
              Read All Reviews <FaArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ═══════ WHATSAPP CTA BAND ═══════ */}
      <section className="py-16 bg-gradient-to-r from-[#25D366] to-[#128C7E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">Order via WhatsApp — Fast & Easy</h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Skip the forms! Send us your design on WhatsApp and get an instant quote. We reply within minutes.
          </p>
          <a
            href="https://wa.me/8801974330594?text=Hi%20Impress%20Ad!%20I%27d%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-white text-[#25D366] rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp size={28} /> Chat with Us Now
          </a>
        </div>
      </section>
    </>
  );
}
