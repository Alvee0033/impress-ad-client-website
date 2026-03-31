'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaSearch, FaCoffee, FaTshirt, FaFlag, FaIdCard, FaFileAlt, FaTags, FaGift, FaBox } from 'react-icons/fa';

const categoryIcons: Record<string, React.ComponentType<{ size?: number }>> = {
    'mugs-drinkware': FaCoffee,
    'apparel-tshirts': FaTshirt,
    'banners-signage': FaFlag,
    'visiting-cards': FaIdCard,
    'brochures-flyers': FaFileAlt,
    'stickers-labels': FaTags,
    'corporate-gifts': FaGift,
    'packaging': FaBox,
};

const gradients: Record<string, string> = {
    'mugs-drinkware': 'from-orange-400 to-red-500',
    'apparel-tshirts': 'from-violet-500 to-purple-600',
    'banners-signage': 'from-teal-400 to-green-500',
    'visiting-cards': 'from-blue-500 to-indigo-600',
    'brochures-flyers': 'from-pink-400 to-rose-500',
    'stickers-labels': 'from-amber-400 to-orange-500',
    'corporate-gifts': 'from-emerald-400 to-teal-500',
    'packaging': 'from-sky-400 to-blue-500',
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProductsClient({ categories }: { categories: Category[] }) {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [search, setSearch] = useState('');

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
        <>
            {/* Hero */}
            <section className="relative pt-32 pb-16 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-900">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)',
                    backgroundSize: '32px 32px',
                }} />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <h1 className="text-4xl sm:text-5xl font-heading font-extrabold text-white mb-4">Our Products</h1>
                        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                            Browse our complete catalog of printing and branding solutions
                        </p>
                        {/* Search */}
                        <div className="max-w-md mx-auto relative">
                            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent-orange backdrop-blur-sm"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Category Grid/Scroller */}
            <section className="py-8 bg-white border-b border-border-200 sticky top-16 lg:top-20 z-40 backdrop-blur-lg bg-white/95">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between lg:hidden">
                            <span className="text-xs font-bold text-text-400 uppercase tracking-widest">Categories</span>
                            <span className="text-[10px] text-text-400 flex items-center gap-1">Swipe <FaArrowRight size={8} /></span>
                        </div>
                        <div className="flex gap-3 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 xl:grid-cols-9 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`flex flex-col items-center justify-center p-3 rounded-2xl min-w-[100px] lg:min-w-0 transition-all border-2 ${!selectedCategory
                                    ? 'bg-primary-900 border-primary-900 text-white shadow-lg scale-105'
                                    : 'bg-bg-50 border-transparent text-text-600 hover:bg-white hover:border-primary-100 hover:shadow-md'
                                    }`}
                            >
                                <span className="text-2xl mb-1">🔍</span>
                                <span className="text-xs font-bold whitespace-nowrap">All Items</span>
                            </button>
                            {categories.map((cat) => (
                                <button
                                    key={cat.slug}
                                    onClick={() => setSelectedCategory(cat.slug === selectedCategory ? null : cat.slug)}
                                    className={`flex flex-col items-center justify-center p-3 rounded-2xl min-w-[100px] lg:min-w-0 transition-all border-2 ${selectedCategory === cat.slug
                                        ? 'bg-primary-900 border-primary-900 text-white shadow-lg scale-105'
                                        : 'bg-bg-50 border-transparent text-text-600 hover:bg-white hover:border-primary-100 hover:shadow-md'
                                        }`}
                                >
                                    <div className="w-8 h-8 mb-1 flex items-center justify-center">
                                        {cat.imageUrl ? (
                                            <img src={cat.imageUrl} alt="" className={`w-full h-full object-contain ${selectedCategory === cat.slug ? 'brightness-0 invert' : ''}`} />
                                        ) : (
                                            <span className="text-2xl">{cat.icon}</span>
                                        )}
                                    </div>
                                    <span className="text-xs font-bold whitespace-nowrap">{cat.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Grid */}
            <section className="py-16 bg-bg-50 section-pattern min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredCategories.map((cat) => (
                        <div key={cat.id} className="mb-16 last:mb-0">
                            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex items-center gap-4 mb-8">
                                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${gradients[cat.slug] || 'from-gray-400 to-gray-500'} flex items-center justify-center text-white text-xl overflow-hidden`}>
                                    {cat.imageUrl ? (
                                        <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover" />
                                    ) : (
                                        (() => {
                                            const Icon = categoryIcons[cat.slug];
                                            return Icon ? <Icon size={22} /> : <span>{cat.icon}</span>;
                                        })()
                                    )}
                                </div>
                                <div>
                                    <h2 className="text-2xl font-heading font-bold text-primary-900">{cat.name}</h2>
                                    <p className="text-text-600 text-sm">{cat.description}</p>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {cat.products.map((product) => (
                                    <motion.div key={product.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                                        <Link href={`/products/${product.slug}`}>
                                            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border-200 hover:border-transparent h-full flex flex-col">
                                                <div className={`h-40 bg-gradient-to-br ${gradients[cat.slug] || 'from-gray-400 to-gray-500'} flex items-center justify-center overflow-hidden`}>
                                                    {product.images ? (
                                                        <img src={product.images} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    ) : (
                                                        (() => {
                                                            const Icon = categoryIcons[cat.slug];
                                                            return Icon ? <Icon size={40} /> : <span className="text-4xl opacity-50">{cat.icon}</span>;
                                                        })()
                                                    )}
                                                </div>
                                                <div className="p-5 flex-1 flex flex-col">
                                                    <h3 className="font-heading font-bold text-primary-900 mb-1 group-hover:text-primary-700 transition-colors">
                                                        {product.name}
                                                    </h3>
                                                    <p className="text-text-600 text-sm mb-4 flex-1">{product.shortDescription}</p>
                                                    <div className="flex items-center justify-between">
                                                        {product.startingPrice && (
                                                            <span className="text-accent-orange font-bold">
                                                                ৳{product.startingPrice.toLocaleString()}
                                                            </span>
                                                        )}
                                                        {product.moq && (
                                                            <span className="text-text-600 text-xs bg-bg-50 px-2 py-1 rounded-lg">
                                                                MOQ: {product.moq}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {filteredCategories.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-text-600 text-lg">No products found matching your search.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-primary-900 to-primary-700">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">Can&apos;t Find What You Need?</h2>
                    <p className="text-white/80 mb-8">We offer custom solutions! Contact us with your requirements.</p>
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
