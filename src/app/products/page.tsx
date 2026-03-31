import { Metadata } from 'next';
import { DEMO_CATEGORIES, DEMO_PRODUCTS } from '@/lib/demo-data';
import ProductsClient from './ProductsClient';

export const metadata: Metadata = {
    title: 'Products',
    description: 'Browse our full catalog of printing and branding products. Custom mugs, T-shirts, banners, visiting cards, brochures, stickers, corporate gifts, and more.',
};

export default async function ProductsPage() {
    // For demo: Combine categories with products from our static data
    const categoriesWithProducts = DEMO_CATEGORIES.map(cat => ({
        ...cat,
        products: DEMO_PRODUCTS.filter(p => p.categoryId === cat.id)
    }));

    return <ProductsClient categories={JSON.parse(JSON.stringify(categoriesWithProducts))} />;
}
