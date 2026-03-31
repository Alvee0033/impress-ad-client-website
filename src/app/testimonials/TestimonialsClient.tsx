'use client';

import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

type Testimonial = {
    id: string;
    clientName: string;
    businessName: string | null;
    reviewText: string;
    rating: number;
    photoUrl: string | null;
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TestimonialsClient({ testimonials }: { testimonials: Testimonial[] }) {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                    backgroundSize: '32px 32px',
                }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-4">Client Testimonials</h1>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">
                            What our happy customers say about us
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-20 bg-bg-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={t.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <div className="bg-white rounded-3xl p-8 border border-border-200 hover:shadow-lg hover:border-accent-orange/20 transition-all duration-300 h-full flex flex-col relative">
                                    <FaQuoteLeft className="absolute top-6 right-6 text-primary-700/10 text-4xl" />
                                    <div className="flex gap-1 mb-4">
                                        {Array.from({ length: 5 }).map((_, j) => (
                                            <FaStar key={j} className={j < t.rating ? 'text-yellow-400' : 'text-gray-200'} size={18} />
                                        ))}
                                    </div>
                                    <p className="text-text-900 leading-relaxed flex-1 mb-6 relative z-10">
                                        &ldquo;{t.reviewText}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-3 pt-4 border-t border-border-200">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-700 to-accent-orange flex items-center justify-center text-white font-bold text-lg">
                                            {t.clientName.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-heading font-bold text-primary-900">{t.clientName}</div>
                                            {t.businessName && (
                                                <div className="text-text-600 text-sm">{t.businessName}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
