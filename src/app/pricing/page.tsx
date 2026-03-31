import { Metadata } from 'next';
import { DEMO_CATEGORIES, DEMO_PRICING } from '@/lib/demo-data';
import PricingClient from './PricingClient';

export const metadata: Metadata = {
    title: 'Pricing',
    description: 'View our transparent pricing tiers for printing products. Competitive rates with bulk discounts available.',
};

export default async function PricingPage() {
    const categoriesWithPricing = DEMO_CATEGORIES.map(cat => ({
        ...cat,
        pricingTiers: DEMO_PRICING.find(p => p.categoryId === cat.id)?.tiers || []
    })).filter(c => c.pricingTiers.length > 0);

    return <PricingClient categories={JSON.parse(JSON.stringify(categoriesWithPricing))} />;
}
