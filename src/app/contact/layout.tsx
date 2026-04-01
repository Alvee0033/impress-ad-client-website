import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us & Request a Quote',
    description: 'Get in touch with Prokash Ad or request a free quote for custom printing. Located at Wireless Moor, Chittagong.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
