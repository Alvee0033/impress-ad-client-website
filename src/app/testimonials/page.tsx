import { Metadata } from 'next';
import { DEMO_TESTIMONIALS } from '@/lib/demo-data';
import TestimonialsClient from './TestimonialsClient';

export const metadata: Metadata = {
    title: 'Testimonials',
    description: 'Read what our clients say about Impress Ad. Trusted by 5,000+ happy customers across Chittagong.',
};

export default async function TestimonialsPage() {
    // For demo: Use static testimonials
    const testimonials = DEMO_TESTIMONIALS;

    return <TestimonialsClient testimonials={JSON.parse(JSON.stringify(testimonials))} />;
}
