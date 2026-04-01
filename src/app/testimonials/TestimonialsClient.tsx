'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaCheckCircle, FaUserCircle } from 'react-icons/fa';

type Testimonial = {
    id: string;
    clientName: string;
    businessName: string | null;
    reviewText: string;
    rating: number;
    photoUrl: string | null;
};

export default function TestimonialsClient({ testimonials }: { testimonials: Testimonial[] }) {
    return (
        <div className="bg-bg-50 min-h-screen text-[#0a0a0a] pb-20 selection:bg-accent-orange selection:text-white overflow-hidden">
            {/* ═══════ COMPACT ROUNDED HERO ═══════ */}
            <section className="relative pt-24 pb-8 bg-white border-b-2 border-bg-100 rounded-b-[3.5rem] shadow-sm">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 flex flex-col sm:flex-row justify-between items-end gap-6 text-center sm:text-left">
                    <div className="border-l-8 border-accent-orange pl-6 mx-auto sm:mx-0">
                        <span className="inline-block bg-[#0a0a0a] text-white text-[7px] font-black uppercase tracking-[0.4em] px-2.5 py-1 mb-3 italic rounded-full shadow-lg">
                           ESTABLISHED • 2014
                        </span>
                        <h1 className="text-3xl lg:text-5xl font-heading font-black tracking-tighter uppercase italic leading-[0.85]">
                           The <br/>
                           <span className="text-accent-orange underline decoration-[6px] underline-offset-[12px] decoration-bg-100">Feedback.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* ═══════ TRUST METRICS ═══════ */}
            <section className="py-6 bg-transparent">
               <div className="max-w-4xl mx-auto px-6">
                  <div className="flex flex-wrap justify-center gap-6">
                     <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-bg-100 shadow-sm text-[9px] font-black uppercase tracking-widest italic">
                        <FaCheckCircle className="text-accent-orange" /> 5,000+ CLIENTS
                     </div>
                     <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-bg-100 shadow-sm text-[9px] font-black uppercase tracking-widest italic">
                        <FaStar className="text-accent-orange" /> 4.9/5 RATING
                     </div>
                     <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-bg-100 shadow-sm text-[9px] font-black uppercase tracking-widest italic text-accent-orange">
                        <FaQuoteLeft /> VERIFIED REVIEWS
                     </div>
                  </div>
               </div>
            </section>

            {/* ═══════ TESTIMONIALS GRID (ULTRA COMPACT) ═══════ */}
            <section className="py-6">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group bg-white border-2 border-[#0a0a0a]/5 rounded-[3rem] p-8 hover:border-accent-orange/30 hover:shadow-2xl transition-all duration-500 h-full flex flex-col relative"
                            >
                                <div className="absolute top-6 right-8 text-accent-orange/10 group-hover:text-accent-orange/30 transition-colors">
                                   <FaQuoteLeft size={40} />
                                </div>

                                <div className="flex gap-1 mb-6">
                                    {Array.from({ length: 5 }).map((_, j) => (
                                        <FaStar key={j} className={j < t.rating ? 'text-accent-orange' : 'text-bg-100'} size={12} />
                                    ))}
                                </div>

                                <p className="text-[#0a0a0a] font-bold text-sm leading-relaxed flex-1 mb-8 italic border-l-4 border-bg-100 pl-6 group-hover:border-accent-orange transition-all">
                                    &ldquo;{t.reviewText}&rdquo;
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-bg-100 mt-auto">
                                    <div className="w-12 h-12 rounded-full bg-[#0a0a0a] text-accent-orange flex items-center justify-center font-black text-lg shadow-xl group-hover:bg-accent-orange group-hover:text-white transition-all">
                                        {t.clientName.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-heading font-black text-[#0a0a0a] uppercase tracking-tighter italic text-base leading-none mb-1">{t.clientName}</div>
                                        {t.businessName && (
                                            <div className="text-text-400 text-[9px] font-black uppercase tracking-widest italic">{t.businessName}</div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* ═══════ SUBMIT CTA (ROUNDISH) ═══════ */}
            <section className="py-12">
               <div className="max-w-xl mx-auto px-6">
                  <div className="bg-white border-2 border-[#0a0a0a] p-8 rounded-[3.5rem] text-center shadow-xl">
                     <p className="text-[9px] font-black text-text-300 uppercase tracking-[0.4em] mb-3 italic">Client Satisfaction</p>
                     <h3 className="text-2xl font-heading font-black text-[#0a0a0a] uppercase tracking-tighter italic mb-6">Experience Excellence?</h3>
                     <button className="px-10 py-5 bg-[#0a0a0a] text-white rounded-full font-black text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-accent-orange hover:scale-105 transition-all duration-300 italic ring-4 ring-black/5">
                        SHARE YOUR FEEDBACK
                     </button>
                  </div>
               </div>
            </section>
        </div>
    );
}
