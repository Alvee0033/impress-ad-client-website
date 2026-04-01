import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us',
    description: 'Learn about Prokash Ad — Chittagong\'s trusted printing and branding partner. Over 10 years of experience, 5000+ happy customers.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
