import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const productLinks = [
    { href: '/products?category=mugs-drinkware', label: 'Mugs & Drinkware' },
    { href: '/products?category=apparel-tshirts', label: 'Apparel & T-Shirts' },
    { href: '/products?category=banners-signage', label: 'Banners & Signage' },
    { href: '/products?category=visiting-cards', label: 'Visiting Cards' },
    { href: '/products?category=brochures-flyers', label: 'Brochures & Flyers' },
    { href: '/products?category=stickers-labels', label: 'Stickers & Labels' },
    { href: '/products?category=corporate-gifts', label: 'Corporate Gifts' },
    { href: '/products?category=packaging', label: 'Packaging' },
];

const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
    return (
        <footer className="bg-primary-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-700 to-accent-orange flex items-center justify-center text-white font-bold text-lg">
                                PA
                            </div>
                            <div>
                                <span className="font-heading font-bold text-xl text-white">Prokash</span>
                                <span className="font-heading font-bold text-xl text-accent-orange"> Ad</span>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Chittagong&apos;s trusted printing & branding partner. From mugs to banners, we bring your brand to life with quality and precision.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-orange flex items-center justify-center transition-all duration-200 hover:scale-110"
                            >
                                <FaFacebookF size={16} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-orange flex items-center justify-center transition-all duration-200 hover:scale-110"
                            >
                                <FaInstagram size={16} />
                            </a>
                            <a
                                href="https://wa.me/8801974330594"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent-teal flex items-center justify-center transition-all duration-200 hover:scale-110"
                            >
                                <FaWhatsapp size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4">Our Products</h3>
                        <ul className="space-y-2">
                            {productLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-accent-orange text-sm transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-accent-orange text-sm transition-colors duration-200"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-heading font-bold text-lg mb-4">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <FaMapMarkerAlt size={14} className="text-accent-orange" />
                                </div>
                                <p className="text-white/70 text-sm">
                                    Wireless Moor, Chittagong,<br />Bangladesh
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <FaPhone size={14} className="text-accent-orange" />
                                </div>
                                <a href="tel:+8801974330594" className="text-white/70 hover:text-accent-orange text-sm transition-colors">
                                    +880 1974-330594
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                                    <FaEnvelope size={14} className="text-accent-orange" />
                                </div>
                                <a href="mailto:info@impressad.com" className="text-white/70 hover:text-accent-orange text-sm transition-colors">
                                    info@impressad.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} Prokash Ad. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
