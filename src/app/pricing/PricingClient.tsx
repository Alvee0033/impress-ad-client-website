'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaArrowRight, FaWhatsapp, FaCheckCircle, FaCalculator,
  FaCoffee, FaTshirt, FaFlag, FaIdCard, FaTags, FaBox, FaArrowUp
} from 'react-icons/fa';
import Link from 'next/link';

const pricingData = [
  { id: 'mugs', icon: FaCoffee, name: 'Mugs', minPrice: 250, tiers: [{ q: 1, p: 350 }, { q: 10, p: 250 }, { q: 50, p: 180 }], note: 'Premium Sublimation' },
  { id: 'tshirts', icon: FaTshirt, name: 'Shirts', minPrice: 400, tiers: [{ q: 1, p: 600 }, { q: 50, p: 400 }, { q: 200, p: 320 }], note: '180gsm Cotton' },
  { id: 'banners', icon: FaFlag, name: 'Banners', minPrice: 2500, tiers: [{ q: 1, p: 3000 }, { q: 5, p: 2500 }, { q: 20, p: 2200 }], note: 'Aluminum X-Stand' },
  { id: 'cards', icon: FaIdCard, name: 'Cards', minPrice: 3.5, tiers: [{ q: 200, p: 5.0 }, { q: 500, p: 4.0 }, { q: 1000, p: 3.5 }], note: 'Spot UV Finish' },
];

export default function PricingClient() {
  const [activeProduct, setActiveProduct] = useState(pricingData[0]);
  const [quantity, setQuantity] = useState(10);

  const calculatePrice = () => {
    const tier = [...activeProduct.tiers].reverse().find(t => quantity >= t.q) || activeProduct.tiers[0];
    return { unit: tier.p, total: tier.p * quantity, savings: (activeProduct.tiers[0].p - tier.p) * quantity };
  };

  const results = calculatePrice();

  return (
    <div className="bg-white min-h-screen text-primary-950 pb-20 selection:bg-accent-orange selection:text-white">
      {/* ═══════ HERO ═══════ */}
      <section className="pt-24 pb-8 px-5 border-b border-bg-100 bg-bg-50/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-end gap-6">
          <div>
            <span className="inline-block bg-primary-950 text-white text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1 mb-4">
              Official Rate Card 2026
            </span>
            <h1 className="text-3xl lg:text-6xl font-heading font-black tracking-tighter uppercase italic border-l-8 border-accent-orange pl-6">
              Rate <span className="text-accent-orange">Center.</span>
            </h1>
          </div>
          <div className="hidden sm:block text-right">
             <div className="text-[10px] font-black text-text-300 uppercase tracking-widest mb-1 italic">Last Update</div>
             <div className="text-sm font-black text-primary-950 italic">April 1st, 2026</div>
          </div>
        </div>
      </section>

      <main className="py-12 max-w-7xl mx-auto px-5 lg:px-8">
        
        {/* ═══════ INTERACTIVE QUOTATION ENGINE ═══════ */}
        <div className="grid lg:grid-cols-6 gap-10 items-start mb-24">
          
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-black text-text-400 uppercase tracking-[0.4em] mb-6 flex items-center gap-3">
              <FaTags className="text-accent-orange" /> Print Category
            </h3>
            <div className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-visible gap-4 pb-6 lg:pb-0 scrollbar-hide">
              {pricingData.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveProduct(item); if(quantity < item.tiers[0].q) setQuantity(item.tiers[0].q); }}
                  className={`flex-shrink-0 flex flex-col items-center justify-center p-5 lg:p-8 rounded-[2.5rem] border-2 transition-all duration-700 ${
                    activeProduct.id === item.id 
                    ? 'bg-primary-950 border-primary-950 text-white shadow-2xl scale-110' 
                    : 'bg-white border-bg-50 text-text-400 hover:border-accent-orange/30'
                  }`}
                >
                  <item.icon size={26} className={activeProduct.id === item.id ? 'text-accent-orange' : 'text-text-200'} />
                  <span className="text-[11px] font-black uppercase tracking-widest mt-4 leading-none text-center italic">{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 bg-white border-4 border-primary-950 rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col sm:flex-row relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-orange/5 rounded-full pointer-events-none" />
            
            <div className="p-8 sm:p-12 flex-1 border-b sm:border-b-0 sm:border-r-4 border-primary-950">
              <div className="flex items-center gap-3 mb-10">
                 <FaCalculator className="text-accent-orange" size={20} />
                 <h2 className="text-xl font-heading font-black uppercase italic tracking-tighter text-primary-950">Draft Quote</h2>
              </div>
              
              <div className="space-y-10">
                <div>
                  <label className="block text-[10px] font-black text-text-300 uppercase tracking-widest mb-4 italic">Specify Quantity</label>
                  <div className="relative">
                    <input 
                      type="number" 
                      min={activeProduct.tiers[0].q}
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 0))}
                      className="w-full bg-bg-50 border-2 border-bg-100 rounded-3xl px-8 py-5 text-3xl font-heading font-black text-primary-950 focus:border-accent-orange outline-none transition-all"
                    />
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 text-text-300 italic font-black text-xs">UNIT(S)</div>
                  </div>
                  <p className="text-[10px] font-bold text-accent-orange mt-4 uppercase tracking-widest leading-none">* Minimum Threshold: {activeProduct.tiers[0].q}</p>
                </div>

                <div className="bg-bg-50/50 p-6 rounded-[2rem] border border-bg-100">
                   <div className="text-[10px] font-black text-text-400 uppercase tracking-widest mb-6 border-b border-bg-100 pb-2 italic">Standard Tiers</div>
                   <div className="space-y-3">
                      {activeProduct.tiers.map((t, i) => (
                        <div key={i} className={`flex justify-between items-center px-6 py-3 rounded-2xl transition-all duration-500 font-bold ${
                           quantity >= t.q ? 'bg-accent-orange text-white scale-105 shadow-xl' : 'text-text-400 bg-white/50 border border-bg-100'
                        }`}>
                           <span className="text-[11px]">{t.q}+ Units</span>
                           <span className="text-lg font-heading tracking-tighter">৳{t.p}</span>
                        </div>
                      ))}
                   </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-12 flex-1 bg-bg-50/30 flex flex-col justify-between">
               <div>
                 <div className="text-[10px] font-black text-text-300 uppercase tracking-widest mb-8 border-b border-bg-100 pb-2 italic text-center">Estimate Dashboard</div>
                 <div className="space-y-8">
                    <div className="text-center group">
                      <div className="text-[10px] font-black text-text-400 uppercase tracking-widest mb-2 underline decoration-accent-orange underline-offset-4 decoration-2">Applied Rate</div>
                      <div className="text-4xl lg:text-5xl font-heading font-black text-primary-950 tracking-tighter italic group-hover:scale-110 transition-transform">৳{results.unit}</div>
                    </div>
                    <div className="text-center group">
                      <div className="text-[10px] font-black text-accent-orange uppercase tracking-widest mb-2 underline decoration-primary-950 underline-offset-4 decoration-2">Projected Total</div>
                      <div className="text-5xl lg:text-7xl font-heading font-black text-primary-950 tracking-tighter italic leading-none group-hover:scale-110 transition-transform">
                         ৳{results.total.toLocaleString()}
                      </div>
                    </div>
                 </div>
               </div>

               <div className="mt-12 border-t-2 border-primary-950/10 pt-10">
                  <div className="text-[11px] items-center font-black text-text-500 flex justify-between mb-10 italic">
                     <span>Estimated Savings:</span>
                     <div className="flex items-center gap-2 text-accent-teal">
                        <FaArrowUp className="rotate-180" />
                        <span className="text-2xl font-black text-primary-950 tracking-tighter">-৳{results.savings.toLocaleString()}</span>
                     </div>
                  </div>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-4 px-10 py-6 bg-accent-orange text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.4em] shadow-2xl hover:scale-105 transition-all duration-300 ring-4 ring-accent-orange/10 italic"
                  >
                     PROCEED <FaArrowRight />
                  </Link>
               </div>
            </div>
          </div>
        </div>

        {/* ═══════ RESTORED INSTITUTIONAL BENCHMARKS ═══════ */}
        <section className="mt-20">
          <div className="text-center mb-16 relative">
             <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-bg-100" />
             <h2 className="relative inline-block bg-white px-10 text-[11px] font-black text-text-300 uppercase tracking-[0.6em] italic">
               Institutional <span className="text-primary-950 underline decoration-accent-orange underline-offset-8">Benchmarks</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingData.map((item, i) => (
              <motion.div key={i} whileHover={{ y: -12 }} className="bg-white border-2 border-bg-50 rounded-[3rem] p-10 hover:shadow-2xl hover:border-accent-orange transition-all duration-500 relative group">
                <div className="flex justify-between items-center mb-10 relative">
                  <div className="w-14 h-14 rounded-2xl bg-bg-50 text-primary-950 flex items-center justify-center group-hover:bg-primary-950 group-hover:text-accent-orange transition-all duration-500 shadow-sm overflow-hidden">
                     <item.icon size={24} />
                     <div className="absolute inset-0 bg-accent-orange/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black text-text-300 uppercase italic opacity-50">SKU: {item.id}</span>
                    <span className="text-[8px] font-bold text-accent-orange uppercase tracking-widest mt-1 italic">{item.note}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-black text-primary-950 mb-3 uppercase tracking-tighter italic underline decoration-primary-950/10 decoration-2 underline-offset-4">
                  {item.name}
                </h3>
                
                <div className="mt-8 pt-8 border-t-2 border-dashed border-bg-50">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[9px] font-black text-text-400 uppercase italic tracking-widest leading-none">Starting Rate</span>
                    <span className="text-2xl font-heading font-black text-primary-950 tracking-tighter italic">৳{item.minPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-black text-text-300 uppercase italic tracking-widest leading-none italic">Bulk Limit</span>
                    <span className="text-[10px] font-black text-accent-orange italic tracking-tighter uppercase">Unlimited Vol.</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </main>

      {/* MOBILE FIXED BOTTOM DOCK */}
      <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-bg-100 p-4 z-50 flex gap-4 lg:hidden shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
         <Link
            href="/contact"
            className="flex-[1.2] flex items-center justify-center gap-3 py-4 bg-[#128C7E] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl ring-4 ring-[#128C7E]/5"
          >
            <FaWhatsapp size={16} /> WHATSAPP
         </Link>
         <Link
            href="/contact"
            className="flex-1 flex items-center justify-center gap-3 py-4 bg-primary-950 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl ring-4 ring-black/5"
          >
            GET QUOTE
         </Link>
      </div>
    </div>
  );
}
