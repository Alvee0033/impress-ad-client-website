'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaArrowLeft, FaWhatsapp, FaBox, FaClock, FaLayerGroup } from 'react-icons/fa';

type Product = {
    id: string;
    name: string;
    slug: string;
    shortDescription: string | null;
    fullDescription: string | null;
    moq: number | null;
    leadTime: string | null;
    startingPrice: number | null;
    variants: string | null;
    category: { name: string; slug: string };
};

type RelatedProduct = {
    id: string;
    name: string;
    slug: string;
    shortDescription: string | null;
    startingPrice: number | null;
};

export default function ProductDetailClient({ product, related }: { product: Product; related: RelatedProduct[] }) {
    return (
        <>
            {/* Breadcrumb */}
            <section className="pt-24 pb-4 bg-bg-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 text-sm text-text-600">
                        <Link href="/products" className="hover:text-primary-700 transition-colors flex items-center gap-1">
                            <FaArrowLeft size={12} /> Products
                        </Link>
                        <span>/</span>
                        <Link href={`/products?category=${product.category.slug}`} className="hover:text-primary-700 transition-colors">
                            {product.category.name}
                        </Link>
                        <span>/</span>
                        <span className="text-primary-900 font-medium">{product.name}</span>
                    </div>
                </div>
            </section>

            {/* Product Detail */}
            <section className="py-12 bg-bg-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Image Area */}
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                            <div className="aspect-square bg-gradient-to-br from-primary-700/10 to-accent-orange/10 rounded-3xl border border-border-200 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-8xl mb-4">🖨️</div>
                                    <p className="text-text-600 text-sm">{product.name}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Product Info */}
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-orange/10 text-accent-orange text-sm font-semibold mb-4">
                                {product.category.name}
                            </div>
                            <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-primary-900 mb-4">{product.name}</h1>
                            <p className="text-text-600 text-lg leading-relaxed mb-6">
                                {product.shortDescription || product.fullDescription}
                            </p>

                            {product.startingPrice && (
                                <div className="mb-6">
                                    <span className="text-text-600 text-sm">Starting from</span>
                                    <div className="text-4xl font-heading font-extrabold text-accent-orange">
                                        ৳{product.startingPrice.toLocaleString()}
                                    </div>
                                </div>
                            )}

                            {/* Specs */}
                            <div className="grid grid-cols-3 gap-4 mb-8">
                                {product.moq && (
                                    <div className="bg-white rounded-2xl p-4 border border-border-200 text-center">
                                        <FaBox className="text-primary-700 mx-auto mb-2" size={20} />
                                        <div className="text-xs text-text-600">MOQ</div>
                                        <div className="font-bold text-primary-900">{product.moq} pcs</div>
                                    </div>
                                )}
                                {product.leadTime && (
                                    <div className="bg-white rounded-2xl p-4 border border-border-200 text-center">
                                        <FaClock className="text-primary-700 mx-auto mb-2" size={20} />
                                        <div className="text-xs text-text-600">Lead Time</div>
                                        <div className="font-bold text-primary-900">{product.leadTime}</div>
                                    </div>
                                )}
                                <div className="bg-white rounded-2xl p-4 border border-border-200 text-center">
                                    <FaLayerGroup className="text-primary-700 mx-auto mb-2" size={20} />
                                    <div className="text-xs text-text-600">Category</div>
                                    <div className="font-bold text-primary-900 text-sm">{product.category.name}</div>
                                </div>
                            </div>

                            {product.fullDescription && (
                                <div className="mb-8">
                                    <h3 className="font-heading font-bold text-primary-900 mb-2">Description</h3>
                                    <p className="text-text-600 leading-relaxed">{product.fullDescription}</p>
                                </div>
                            )}

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-orange to-orange-500 text-white rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all"
                                >
                                    Get a Quote <FaArrowRight />
                                </Link>
                                <a
                                    href={`https://wa.me/8801974330594?text=Hi! I'm interested in ${encodeURIComponent(product.name)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all"
                                >
                                    <FaWhatsapp size={22} /> WhatsApp
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            {related.length > 0 && (
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-heading font-bold text-primary-900 mb-8">Related Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {related.map((rp) => (
                                <Link key={rp.id} href={`/products/${rp.slug}`}>
                                    <div className="group bg-bg-50 rounded-2xl p-6 border border-border-200 hover:shadow-lg hover:border-accent-orange/20 transition-all h-full">
                                        <h3 className="font-heading font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">{rp.name}</h3>
                                        <p className="text-text-600 text-sm mb-3">{rp.shortDescription}</p>
                                        {rp.startingPrice && (
                                            <span className="text-accent-orange font-bold">৳{rp.startingPrice.toLocaleString()}</span>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
