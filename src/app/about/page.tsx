'use client';

import { motion } from 'framer-motion';
import { 
  FaPrint, FaTruck, FaPalette, FaCheckCircle, FaArrowRight, FaBuilding
} from 'react-icons/fa';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const differentiators = [
  { icon: FaPrint, title: 'Precision Print', desc: 'Japanese industrial accuracy.' },
  { icon: FaTruck, title: 'Rapid Delivery', desc: '48-hour turnarounds.' },
  { icon: FaPalette, title: 'Design Studio', desc: 'Print-ready perfection.' },
];

const pricingData = [
  { name: 'Ceramic Mugs', price: '250', moq: '10 pcs', note: 'Full Color' },
  { name: 'Branded T-Shirts', price: '400', moq: '50 pcs', note: 'Cotton' },
  { name: 'Business Cards', price: '3.5', moq: '200 pcs', note: 'Spot UV' },
  { name: 'Vinyl Stickers', price: '2.0', moq: '500 pcs', note: 'UV Print' },
];

export default function AboutPricingPage() {
  return (
    <div className="bg-white min-h-screen text-primary-900">
      {/* ═══════ COMPACT WHITE HERO ═══════ */}
      <section className="relative pt-32 pb-16 bg-white border-b border-bg-100 overflow-hidden text-center sm:text-left">
        <div className="absolute inset-0 bg-[url('/images/dots.png')] opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="inline-block bg-primary-950 text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 mb-6">
              Est. 2014 • Chittagong
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-black text-primary-950 mb-6 tracking-tighter leading-tight uppercase italic border-l-8 border-accent-orange pl-6">
              Legacy of <span className="text-accent-orange">Quality</span>
            </h1>
            <p className="text-text-500 text-lg font-bold leading-relaxed italic border-l-8 border-bg-100 pl-6">
              Industrial-grade print manufacturing with over 10 years of mastery in Bangladesh.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ COMPACT STORY (CLEAN WHITE) ═══════ */}
      <section className="py-20 bg-white border-b border-bg-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl font-heading font-black text-primary-950 mb-6 tracking-tighter uppercase italic underline decoration-4 underline-offset-8 decoration-accent-orange">
                A Brand Built on Precision
              </h2>
              <div className="space-y-6 text-text-500 text-base font-bold leading-relaxed">
                <p>
                  From a precision startup at Wireless Moor to Chittagong&apos;s leading print manufacturing house, our journey is defined by <span className="text-primary-950">Accuracy.</span>
                </p>
                <p>
                  Today, we serve over 5,000 corporate identities across Bangladesh, bridging creative vision and physical manifestation.
                </p>
              </div>
              
              <div className="mt-10 flex gap-10">
                <div>
                  <div className="text-4xl font-black text-primary-950 tracking-tighter italic"><span className="text-accent-orange">10</span>+</div>
                  <div className="text-[9px] font-black text-text-400 uppercase tracking-widest mt-1">Years Mastery</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary-950 tracking-tighter italic"><span className="text-accent-orange">5k</span>+</div>
                  <div className="text-[9px] font-black text-text-400 uppercase tracking-widest mt-1">Local Clients</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} className="relative">
              <div className="aspect-video rounded-3xl bg-bg-50/50 border border-bg-100 overflow-hidden relative group shadow-2xl">
                <img 
                  src="/images/brand/shop-front.png" 
                  alt="Prokash Ad Shop Front - Wireless Moor, CTG" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/80 backdrop-blur rounded-lg border border-white/10 shadow-2xl">
                   <div className="text-accent-orange font-black text-[8px] uppercase tracking-widest leading-none mb-1">Primary Studio</div>
                   <div className="text-white font-bold text-[9px] mt-1 italic">Wireless Moor, CTG</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════ COMPACT MASTER RATE CARD (WHITE TILES) ═══════ */}
      <section className="py-20 bg-bg-50/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 mb-12">
          <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
             <h2 className="text-3xl font-heading font-black text-primary-950 tracking-tighter uppercase italic">Rate Card</h2>
             <p className="text-text-400 text-sm font-bold mt-2 italic">Industrial standardized pricing for corporate excellence.</p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((item, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white border border-bg-100 rounded-2xl p-8 hover:border-accent-orange/50 hover:shadow-2xl transition-all duration-300 relative group">
              <div className="flex justify-between items-center mb-10">
                <div className="w-10 h-10 rounded-xl bg-primary-950 text-accent-orange flex items-center justify-center shadow-lg">
                   <FaCheckCircle size={18} />
                </div>
                <div className="bg-bg-50 text-text-400 px-3 py-1 rounded-full text-[7px] font-black uppercase tracking-widest border border-bg-100">
                  {item.note}
                </div>
              </div>

              <h3 className="text-xl font-heading font-black text-primary-950 mb-2 uppercase tracking-tighter italic">
                {item.name}
              </h3>
              <div className="text-[9px] font-black text-accent-orange uppercase tracking-widest mb-10 italic">MOQ: {item.moq}</div>
              
              <div className="pt-6 border-t border-bg-100 flex items-center justify-between">
                <div className="text-[10px] font-black text-text-300 uppercase tracking-widest italic">Rate</div>
                <div className="text-3xl font-heading font-black text-primary-950 tracking-tighter italic font-black">৳{item.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ COMPACT CORE VALUES (WHITE HIGHLIGHTS) ═══════ */}
      <section className="py-20 bg-white border-y border-bg-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {differentiators.map((d, i) => (
            <motion.div key={i} initial="hidden" whileInView="visible" variants={fadeUp} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-950 text-accent-orange flex items-center justify-center shadow-xl">
                <d.icon size={20} />
              </div>
              <div>
                <h3 className="text-[11px] font-black text-primary-950 mb-2 uppercase tracking-widest italic border-b border-accent-orange w-fit">{d.title}</h3>
                <p className="text-text-500 font-bold text-[10px] leading-relaxed italic">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════ MASTER CTA (WHITE BG) ═══════ */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-5">
           <h2 className="text-3xl font-heading font-black text-primary-950 tracking-tighter uppercase italic mb-10 border-b-4 border-accent-orange w-fit mx-auto pb-2">
              Manifest Vision
           </h2>
           <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-12 py-5 bg-accent-orange text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-2xl hover:scale-105 transition-all"
          >
            GET QUOTE <FaArrowRight />
          </Link>
          <div className="mt-12 text-text-300 text-[8px] font-black uppercase tracking-[0.4em] italic leading-none">Industrial Standard Ed. 2026</div>
        </div>
      </section>
    </div>
  );
}
