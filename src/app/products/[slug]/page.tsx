import { DEMO_PRODUCTS, DEMO_CATEGORIES } from '@/lib/demo-data';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    return DEMO_PRODUCTS.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const product = DEMO_PRODUCTS.find(p => p.slug === slug);
    if (!product) return {};
    return {
        title: product.name,
        description: product.shortDescription || `${product.name} - Custom printed by Impress Ad, Chittagong`,
    };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = DEMO_PRODUCTS.find(p => p.slug === slug);
    if (!product) notFound();

    // Map category
    const category = DEMO_CATEGORIES.find(c => c.id === product.categoryId);
    const productWithCategory = { ...product, category };

    const relatedProducts = DEMO_PRODUCTS.filter(
        p => p.categoryId === product.categoryId && p.id !== product.id && p.status === 'active'
    ).slice(0, 4);

    return <ProductDetailClient product={JSON.parse(JSON.stringify(productWithCategory))} related={JSON.parse(JSON.stringify(relatedProducts))} />;
}
