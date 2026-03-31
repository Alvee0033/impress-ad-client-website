'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || pathname !== '/'
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-border-100'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow flex items-center justify-center bg-white border border-border-100">
                            <img src="/images/brand/logo.png" alt="Impress Ad Logo" className="w-full h-full object-contain p-1" />
                        </div>
                        <div>
                            <span className={`font-heading font-bold text-xl ${scrolled || pathname !== '/' ? 'text-primary-900' : 'text-white'} transition-colors`}>
                                Impress
                            </span>
                            <span className="font-heading font-bold text-xl text-accent-orange">
                                {' '}Ad
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${pathname === link.href
                                    ? 'bg-accent-orange text-white shadow-md'
                                    : (scrolled || pathname !== '/')
                                        ? 'text-text-900 hover:bg-primary-700/10 hover:text-primary-700'
                                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="ml-2 px-5 py-2.5 bg-gradient-to-r from-accent-orange to-orange-500 text-white rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`lg:hidden p-2 rounded-lg ${(scrolled || pathname !== '/') ? 'text-primary-900' : 'text-white'}`}
                        aria-label="Toggle navigation"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-border-200 shadow-xl"
                    >
                        <div className="px-4 py-4 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all ${pathname === link.href
                                        ? 'bg-accent-orange text-white'
                                        : 'text-text-900 hover:bg-bg-50'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="block mt-3 px-4 py-3 bg-gradient-to-r from-accent-orange to-orange-500 text-white rounded-xl font-semibold text-sm text-center shadow-lg"
                            >
                                Get a Free Quote
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
