'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp, FaCheckCircle, FaPaperPlane } from 'react-icons/fa';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const productCategories = [
    'Mugs & Drinkware',
    'Apparel & T-Shirts',
    'Banners & Signage',
    'Visiting Cards',
    'Brochures & Flyers',
    'Stickers & Labels',
    'Corporate Gifts',
    'Packaging',
    'Other',
];

export default function ContactPage() {
    const [activeTab, setActiveTab] = useState<'contact' | 'quote'>('quote');
    const [contactForm, setContactForm] = useState({ fullName: '', email: '', phone: '', subject: '', message: '' });
    const [quoteForm, setQuoteForm] = useState({
        fullName: '', businessName: '', phone: '', email: '', productCategory: '',
        product: '', quantity: '', designReady: '', deliveryDate: '', notes: '',
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateContact = () => {
        const e: Record<string, string> = {};
        if (!contactForm.fullName || contactForm.fullName.length < 2) e.fullName = 'Name is required (min 2 characters)';
        if (!contactForm.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email)) e.email = 'Valid email required';
        if (!contactForm.phone) e.phone = 'Phone / WhatsApp is required';
        if (!contactForm.subject) e.subject = 'Subject is required';
        if (!contactForm.message) e.message = 'Message is required';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const validateQuote = () => {
        const e: Record<string, string> = {};
        if (!quoteForm.fullName) e.fullName = 'Name is required';
        if (!quoteForm.phone) e.phone = 'Phone / WhatsApp is required';
        if (!quoteForm.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(quoteForm.email)) e.email = 'Valid email required';
        if (!quoteForm.productCategory) e.productCategory = 'Select a category';
        if (!quoteForm.product) e.product = 'Specify the product';
        if (!quoteForm.quantity) e.quantity = 'Quantity is required';
        if (!quoteForm.designReady) e.designReady = 'Please select an option';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleContactSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateContact()) return;
        setSubmitting(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(contactForm),
            });
            if (res.ok) {
                setSuccess(true);
                setContactForm({ fullName: '', email: '', phone: '', subject: '', message: '' });
            }
        } catch {
            // handle error
        } finally {
            setSubmitting(false);
        }
    };

    const handleQuoteSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateQuote()) return;
        setSubmitting(true);
        try {
            const res = await fetch('/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(quoteForm),
            });
            if (res.ok) {
                setSuccess(true);
                setQuoteForm({
                    fullName: '', businessName: '', phone: '', email: '', productCategory: '',
                    product: '', quantity: '', designReady: '', deliveryDate: '', notes: '',
                });
            }
        } catch {
            // handle error
        } finally {
            setSubmitting(false);
        }
    };

    if (success) {
        return (
            <>
                <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900" />
                <section className="py-20 bg-bg-50">
                    <div className="max-w-lg mx-auto px-4 text-center">
                        <div className="bg-white rounded-3xl p-12 border border-border-200 shadow-lg">
                            <div className="w-20 h-20 rounded-full bg-accent-teal/10 flex items-center justify-center mx-auto mb-6">
                                <FaCheckCircle className="text-accent-teal" size={40} />
                            </div>
                            <h2 className="font-heading font-bold text-2xl text-primary-900 mb-3">Thank You!</h2>
                            <p className="text-text-600 mb-6">We&apos;ve received your submission. Our team will get back to you shortly.</p>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => setSuccess(false)}
                                    className="px-6 py-3 bg-primary-900 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                                >
                                    Send Another Message
                                </button>
                                <a
                                    href={`https://wa.me/8801XXXXXXXXX?text=Hi! I just submitted a ${activeTab === 'quote' ? 'quote request' : 'message'} on your website.`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
                                >
                                    <FaWhatsapp /> Continue on WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    const inputClass = (field: string) =>
        `w-full px-4 py-3 rounded-xl border ${errors[field] ? 'border-red-400 bg-red-50/50' : 'border-border-200'} focus:outline-none focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange transition-all text-text-900`;

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
                        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-4">Contact Us</h1>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto">
                            Get in touch or request a free quote
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 bg-bg-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                            <div className="space-y-6">
                                <h2 className="font-heading font-bold text-2xl text-primary-900 mb-6">Get In Touch</h2>
                                <div className="bg-white rounded-2xl p-6 border border-border-200 flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent-orange/10 flex items-center justify-center flex-shrink-0">
                                        <FaMapMarkerAlt className="text-accent-orange" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary-900 mb-1">Visit Us</h3>
                                        <p className="text-text-600 text-sm">Wireless Moor, Chittagong, Bangladesh</p>
                                    </div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-border-200 flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent-orange/10 flex items-center justify-center flex-shrink-0">
                                        <FaPhone className="text-accent-orange" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary-900 mb-1">Call Us</h3>
                                        <a href="tel:+8801XXXXXXXXX" className="text-text-600 text-sm hover:text-accent-orange transition-colors">
                                            +880 1XXX-XXXXXX
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-border-200 flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-accent-orange/10 flex items-center justify-center flex-shrink-0">
                                        <FaEnvelope className="text-accent-orange" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary-900 mb-1">Email Us</h3>
                                        <a href="mailto:info@impressad.com" className="text-text-600 text-sm hover:text-accent-orange transition-colors">
                                            info@impressad.com
                                        </a>
                                    </div>
                                </div>
                                <div className="bg-white rounded-2xl p-6 border border-border-200 flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                                        <FaWhatsapp className="text-[#25D366]" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-primary-900 mb-1">WhatsApp</h3>
                                        <a
                                            href="https://wa.me/8801XXXXXXXXX"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-text-600 text-sm hover:text-[#25D366] transition-colors"
                                        >
                                            Chat with us instantly
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Forms */}
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
                            <div className="bg-white rounded-3xl border border-border-200 shadow-sm overflow-hidden">
                                {/* Tabs */}
                                <div className="flex border-b border-border-200">
                                    <button
                                        onClick={() => { setActiveTab('quote'); setErrors({}); }}
                                        className={`flex-1 py-4 text-sm font-bold transition-all ${activeTab === 'quote'
                                                ? 'bg-accent-orange text-white'
                                                : 'text-text-600 hover:text-primary-900'
                                            }`}
                                    >
                                        🎯 Request a Quote
                                    </button>
                                    <button
                                        onClick={() => { setActiveTab('contact'); setErrors({}); }}
                                        className={`flex-1 py-4 text-sm font-bold transition-all ${activeTab === 'contact'
                                                ? 'bg-accent-orange text-white'
                                                : 'text-text-600 hover:text-primary-900'
                                            }`}
                                    >
                                        ✉️ General Inquiry
                                    </button>
                                </div>

                                <div className="p-8">
                                    {activeTab === 'quote' ? (
                                        <form onSubmit={handleQuoteSubmit} className="space-y-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-semibold text-primary-900 mb-1">Full Name *</label>
                                                    <input type="text" className={inputClass('fullName')} value={quoteForm.fullName} onChange={e => setQuoteForm({ ...quoteForm, fullName: e.target.value })} />
                                                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-primary-900 mb-1">Business / Company</label>
                                                    <input type="text" className={inputClass('businessName')} value={quoteForm.businessName} onChange={e => setQuoteForm({ ...quoteForm, businessName: e.target.value })} />
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-semibold text-primary-900 mb-1">Phone / WhatsApp *</label>
                                                    <input type="text" className={inputClass('phone')} value={quoteForm.phone} onChange={e => setQuoteForm({ ...quoteForm, phone: e.target.value })} />
                                                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-primary-900 mb-1">Email *</label>
                                                    <input type="email" className={inputClass('email')} value={quoteForm.email} onChange={e => setQuoteForm({ ...quoteForm, email: e.target.value })} />
                                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-semibold text-primary-900 mb-1">Product Category *</label>
                                                    <select className={inputClass('productCategory')} value={quoteForm.productCategory} onChange={e => setQuoteForm({ ...quoteForm, productCategory: e.target.value })}>
                                                        <option value="">Select category...</option>
                                                        {productCategories.map(c => <option key={c} value={c}>{c}</option>)}
                                                    </select>
                                                    {errors.productCategory && <p className="text-red-500 text-xs mt-1">{errors.productCategory}</p>}
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-primary-900 mb-1">Specific Product *</label>
                                                    <input type="text" className={inputClass('product')} placeholder="e.g. 11oz Ceramic Mug" value={quoteForm.product} onChange={e => setQuoteForm({ ...quoteForm, product: e.target.value })} />
                                                    {errors.product && <p className="text-red-500 text-xs mt-1">{errors.product}</p>}
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-semibold text-primary-900 mb-1">Quantity *</label>
                                                    <input type="number" className={inputClass('quantity')} min="1" value={quoteForm.quantity} onChange={e => setQuoteForm({ ...quoteForm, quantity: e.target.value })} />
                                                    {errors.quantity && <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>}
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-primary-900 mb-1">Target Delivery Date</label>
                                                    <input type="date" className={inputClass('deliveryDate')} value={quoteForm.deliveryDate} onChange={e => setQuoteForm({ ...quoteForm, deliveryDate: e.target.value })} />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-primary-900 mb-2">Custom Design Available? *</label>
                                                <div className="flex gap-4">
                                                    {['Yes', 'No', 'Need Help'].map(opt => (
                                                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                            <input
                                                                type="radio"
                                                                name="designReady"
                                                                value={opt}
                                                                checked={quoteForm.designReady === opt}
                                                                onChange={e => setQuoteForm({ ...quoteForm, designReady: e.target.value })}
                                                                className="w-4 h-4 text-accent-orange"
                                                            />
                                                            <span className="text-sm text-text-600">{opt}</span>
                                                        </label>
                                                    ))}
                                                </div>
                                                {errors.designReady && <p className="text-red-500 text-xs mt-1">{errors.designReady}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-primary-900 mb-1">Additional Notes</label>
                                                <textarea className={inputClass('notes')} rows={3} value={quoteForm.notes} onChange={e => setQuoteForm({ ...quoteForm, notes: e.target.value })} />
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={submitting}
                                                className="w-full py-4 bg-gradient-to-r from-accent-orange to-orange-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                            >
                                                {submitting ? 'Submitting...' : <><FaPaperPlane /> Submit Quote Request</>}
                                            </button>
                                        </form>
                                    ) : (
                                        <form onSubmit={handleContactSubmit} className="space-y-5">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                <div>
                                                    <label className="block text-sm font-semibold text-primary-900 mb-1">Full Name *</label>
                                                    <input type="text" className={inputClass('fullName')} value={contactForm.fullName} onChange={e => setContactForm({ ...contactForm, fullName: e.target.value })} />
                                                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-semibold text-primary-900 mb-1">Email *</label>
                                                    <input type="email" className={inputClass('email')} value={contactForm.email} onChange={e => setContactForm({ ...contactForm, email: e.target.value })} />
                                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-primary-900 mb-1">Phone / WhatsApp *</label>
                                                <input type="text" className={inputClass('phone')} value={contactForm.phone} onChange={e => setContactForm({ ...contactForm, phone: e.target.value })} />
                                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-primary-900 mb-1">Subject *</label>
                                                <input type="text" className={inputClass('subject')} value={contactForm.subject} onChange={e => setContactForm({ ...contactForm, subject: e.target.value })} />
                                                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-primary-900 mb-1">Message *</label>
                                                <textarea className={inputClass('message')} rows={5} value={contactForm.message} onChange={e => setContactForm({ ...contactForm, message: e.target.value })} />
                                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={submitting}
                                                className="w-full py-4 bg-gradient-to-r from-accent-orange to-orange-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                                            >
                                                {submitting ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
