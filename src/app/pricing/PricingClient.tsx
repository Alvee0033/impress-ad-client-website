'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaInfoCircle } from 'react-icons/fa';

type PricingTier = {
    id: string;
    label: string;
    quantityRange: string;
    pricePerUnit: number;
    notes: string | null;
};

type Category = {
    id: string;
    name: string;
    slug: string;
    icon: string | null;
    pricingTiers: PricingTier[];
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const gradients = [
    'from-orange-400 to-red-500',
    'from-violet-500 to-purple-600',
    'from-teal-400 to-green-500',
    'from-blue-500 to-indigo-600',
    'from-pink-400 to-rose-500',
    'from-amber-400 to-orange-500',
    'from-emerald-400 to-teal-500',
    'from-sky-400 to-blue-500',
];

export default function PricingClient({ categories }: { categories: Category[] }) {
    const categoriesWithPricing = categories.filter(c => c.pricingTiers.length > 0);

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
                        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-4">Pricing</h1>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">
                            Transparent, competitive pricing with bulk discounts
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Note */}
            <section className="py-6 bg-accent-orange/5 border-b border-border-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3">
                    <FaInfoCircle className="text-accent-orange flex-shrink-0" />
                    <p className="text-text-600 text-sm">
                        <strong>Note:</strong> Final pricing depends on design complexity, quantity, and specific customization requirements. Prices shown are starting rates in BDT (৳). Contact us for a custom quote.
                    </p>
                </div>
            </section>

            {/* Pricing Blocks */}
            <section className="py-16 bg-bg-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {categoriesWithPricing.map((cat, i) => (
                            <motion.div
                                key={cat.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border-200 hover:shadow-lg transition-all h-full">
                                    <div className={`bg-gradient-to-r ${gradients[i % gradients.length]} px-6 py-4`}>
                                        <h3 className="text-white font-heading font-bold text-xl flex items-center gap-2">
                                            <span>{cat.icon}</span> {cat.name}
                                        </h3>
                                    </div>
                                    <div className="p-6">
                                        <table className="w-full">
                                            <thead>
                                                <tr className="border-b border-border-200">
                                                    <th className="text-left text-xs font-semibold text-text-600 uppercase tracking-wider pb-3">Product</th>
                                                    <th className="text-left text-xs font-semibold text-text-600 uppercase tracking-wider pb-3">Quantity</th>
                                                    <th className="text-right text-xs font-semibold text-text-600 uppercase tracking-wider pb-3">Rate (৳)</th>
                                                    <th className="text-right text-xs font-semibold text-text-600 uppercase tracking-wider pb-3">Notes</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {cat.pricingTiers.map((tier) => (
                                                    <tr key={tier.id} className="border-b border-border-200/50 last:border-0">
                                                        <td className="py-3 text-sm font-medium text-primary-900">{tier.label}</td>
                                                        <td className="py-3 text-sm text-text-600">{tier.quantityRange}</td>
                                                        <td className="py-3 text-sm text-accent-orange font-bold text-right">৳{tier.pricePerUnit}</td>
                                                        <td className="py-3 text-xs text-text-600 text-right">{tier.notes || '-'}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-700">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">Need a Custom Quote?</h2>
                    <p className="text-white/80 mb-8">Contact us with your specific requirements for personalized pricing.</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent-orange text-white rounded-2xl font-bold shadow-2xl hover:scale-105 transition-all"
                    >
                        Request Custom Quote <FaArrowRight />
                    </Link>
                </div>
            </section>
        </>
    );
}
