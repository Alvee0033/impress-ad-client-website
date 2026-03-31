'use client';

import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function WhatsAppFAB() {
    return (
        <motion.a
            href="https://wa.me/8801974330594?text=Hi%20Impress%20Ad!%20I%27m%20interested%20in%20your%20printing%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform duration-200 animate-pulse-glow"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={28} />
        </motion.a>
    );
}
