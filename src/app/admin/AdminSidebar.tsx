'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    FaHome, FaBox, FaImages, FaStar, FaDollarSign,
    FaNewspaper, FaBriefcase, FaEnvelope, FaCog,
    FaTimes, FaTachometerAlt
} from 'react-icons/fa';

const navItems = [
    { href: '/admin', label: 'Dashboard', icon: FaTachometerAlt },
    { href: '/admin/products', label: 'Products', icon: FaBox },
    { href: '/admin/testimonials', label: 'Testimonials', icon: FaStar },
    { href: '/admin/pricing', label: 'Pricing', icon: FaDollarSign },
    { href: '/admin/blog', label: 'Blog', icon: FaNewspaper },
    { href: '/admin/careers', label: 'Careers', icon: FaBriefcase },
    { href: '/admin/leads', label: 'Leads / Quotes', icon: FaEnvelope },
    { href: '/admin/settings', label: 'Settings', icon: FaCog },
];

export default function AdminSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
    const pathname = usePathname();

    return (
        <>
            {/* Overlay */}
            {open && (
                <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
            )}

            <aside className={`fixed top-0 left-0 z-50 h-full w-64 bg-primary-900 text-white transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0`}>
                <div className="p-6 flex items-center justify-between">
                    <Link href="/admin" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                            <img src="/images/brand/logo.png" alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <div>
                            <span className="font-heading font-bold text-lg">Impress</span>
                            <span className="text-accent-orange font-bold text-lg"> Ad</span>
                        </div>
                    </Link>
                    <button onClick={onClose} className="lg:hidden text-white/60 hover:text-white">
                        <FaTimes size={20} />
                    </button>
                </div>

                <nav className="px-3 space-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive
                                    ? 'bg-accent-orange text-white shadow-lg'
                                    : 'text-white/70 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <item.icon size={18} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

            </aside>
        </>
    );
}
