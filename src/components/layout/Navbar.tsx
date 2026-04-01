'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaArrowRight } from 'react-icons/fa';

const navLinks = [
  { href: '/',             label: 'Home' },
  { href: '/about',        label: 'About Us' },
  { href: '/products',     label: 'Products' },
  { href: '/pricing',      label: 'Pricing' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog',         label: 'Blog' },
  { href: '/careers',      label: 'Careers' },
  { href: '/contact',      label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  const onDark = isHome && !scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || !isHome
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-border-100'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl overflow-hidden border border-white/20 bg-white/10 flex items-center justify-center shadow-md">
              <img src="/images/brand/logo.png" alt="Prokash Ad Logo" className="w-full h-full object-contain p-1" />
            </div>
            <div className="flex items-baseline">
              <span className={`font-heading font-extrabold text-xl ${onDark ? 'text-white' : 'text-primary-900'} transition-colors`}>
                Prokash
              </span>
              <span className="font-heading font-extrabold text-xl text-accent-orange ml-1">
                Ad
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? 'bg-accent-orange text-white shadow-md'
                    : onDark
                      ? 'text-white/80 hover:bg-white/10 hover:text-white'
                      : 'text-text-700 hover:bg-bg-50 hover:text-primary-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-3 inline-flex items-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-accent-orange to-orange-400 text-white rounded-xl font-bold text-sm shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
            >
              Get a Quote <FaArrowRight size={11} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              onDark
                ? 'text-white hover:bg-white/10'
                : 'text-primary-900 hover:bg-bg-50'
            }`}
            aria-label="Toggle navigation"
            id="mobile-menu-toggle"
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
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden border-t border-border-100 bg-white shadow-2xl"
          >
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    pathname === link.href
                      ? 'bg-gradient-to-r from-primary-700 to-primary-600 text-white shadow-md'
                      : 'text-text-900 hover:bg-bg-50 hover:text-primary-700'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && <FaArrowRight size={11} />}
                </Link>
              ))}

              {/* CTA in drawer */}
              <div className="pt-3 pb-1">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-accent-orange to-orange-400 text-white rounded-xl font-bold text-sm shadow-lg"
                >
                  Get a Free Quote <FaArrowRight size={12} />
                </Link>
              </div>

              {/* Quick info strip */}
              <div className="flex items-center justify-center gap-6 pt-2 pb-1 border-t border-border-100">
                <span className="text-xs text-text-600">📍 Chittagong</span>
                <span className="text-xs text-text-600">📞 01974-330594</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
