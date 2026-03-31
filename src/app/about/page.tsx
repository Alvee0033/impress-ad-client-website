'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaPrint, FaHandshake, FaPalette, FaTruck, FaHeadset, FaUsers, FaStar } from 'react-icons/fa';
import Link from 'next/link';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const differentiators = [
    { icon: FaPrint, title: 'Premium Print Quality', desc: 'State-of-the-art printing technology ensuring vibrant colors and sharp details on every product.' },
    { icon: FaTruck, title: 'Fast Delivery', desc: 'Quick turnaround times with most orders delivered within 2-5 business days.' },
    { icon: FaPalette, title: 'Custom Design Support', desc: 'Our in-house design team can help create or refine your designs for optimal print results.' },
    { icon: FaHandshake, title: 'Affordable Pricing', desc: 'Competitive pricing with bulk discounts. Quality printing doesn\'t have to break the bank.' },
    { icon: FaHeadset, title: 'Dedicated Support', desc: 'Personal attention to every order with WhatsApp support for quick communication.' },
    { icon: FaStar, title: 'Trusted by 5000+ Clients', desc: 'A decade of experience serving businesses, event organizers, and individuals across Chittagong.' },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                    backgroundSize: '32px 32px',
                }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-4">About Impress Ad</h1>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">
                            Your one-stop printing and branding partner in Chittagong, Bangladesh
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Story */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-orange/10 text-accent-orange text-sm font-semibold mb-6">
                                🏢 Our Story
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-900 mb-6">
                                A Decade of Printing Excellence in Chittagong
                            </h2>
                            <div className="space-y-4 text-text-600 leading-relaxed">
                                <p>
                                    Founded over a decade ago at Wireless Moor, Chittagong, Impress Ad started with a simple mission: to provide affordable, high-quality printing services to local businesses and individuals.
                                </p>
                                <p>
                                    What began as a small print shop has grown into a full-service branding and promotional products company, serving over 5,000 happy customers — from small startups to large corporations and event organizers across Bangladesh.
                                </p>
                                <p>
                                    Today, we offer a comprehensive range of products including custom mugs, T-shirts, banners, visiting cards, brochures, stickers, corporate gifts, and branded packaging. Our commitment to quality, fast delivery, and customer satisfaction remains at the core of everything we do.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-700/10 to-accent-orange/10 border border-border-200 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="text-6xl mb-4">🖨️</div>
                                        <h3 className="font-heading font-bold text-2xl text-primary-900 mb-2">Impress Ad</h3>
                                        <p className="text-text-600">Wireless Moor, Chittagong</p>
                                        <p className="text-accent-orange font-semibold mt-2">Est. 2014</p>
                                    </div>
                                </div>
                                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-accent-orange flex items-center justify-center text-white shadow-xl">
                                    <div className="text-center">
                                        <div className="text-xl md:text-2xl font-bold">10+</div>
                                        <div className="text-[10px] md:text-xs">Years</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-16 bg-bg-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <h2 className="text-3xl font-heading font-bold text-primary-900 mb-6">Our Mission</h2>
                            <p className="text-lg text-text-600 leading-relaxed">
                                To empower businesses and individuals with high-quality, affordable printing and branding solutions that help them stand out, build trust, and grow their brand presence — all with fast delivery and exceptional customer service.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-900 mb-3">Why Choose Us</h2>
                        <p className="text-text-600 text-lg">What sets Impress Ad apart from the rest</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {differentiators.map((d, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="group bg-bg-50 rounded-3xl p-8 border border-border-200 hover:border-accent-orange/20 hover:shadow-lg transition-all duration-300 h-full">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                        <d.icon size={24} />
                                    </div>
                                    <h3 className="font-heading font-bold text-lg text-primary-900 mb-3">{d.title}</h3>
                                    <p className="text-text-600 text-sm leading-relaxed">{d.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-bg-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-900 mb-3">Our Team</h2>
                        <p className="text-text-600 text-lg">The people behind every perfect print</p>
                    </motion.div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: 'Md. Rahim Uddin', role: 'Founder & CEO', emoji: '👨‍💼' },
                            { name: 'Salma Khatun', role: 'Head of Design', emoji: '👩‍🎨' },
                            { name: 'Abdul Karim', role: 'Production Manager', emoji: '👨‍🔧' },
                            { name: 'Nusrat Jahan', role: 'Customer Relations', emoji: '👩‍💻' },
                        ].map((member, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                <div className="group text-center bg-white rounded-3xl p-8 border border-border-200 hover:shadow-lg transition-all duration-300">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-700/10 to-accent-orange/10 flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        {member.emoji}
                                    </div>
                                    <h3 className="font-heading font-bold text-primary-900">{member.name}</h3>
                                    <p className="text-text-600 text-sm">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-700">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">Ready to Get Started?</h2>
                    <p className="text-white/80 mb-8">Let&apos;s bring your brand to life. Contact us for a free quote today.</p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-accent-orange text-white rounded-2xl font-bold text-lg shadow-2xl hover:bg-orange-600 hover:scale-105 transition-all"
                    >
                        Get a Free Quote <FaRocket />
                    </Link>
                </div>
            </section>
        </>
    );
}
