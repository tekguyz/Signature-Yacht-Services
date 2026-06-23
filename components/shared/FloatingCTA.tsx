'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide bar on Hero section (scrolled less than 400px), then display on scroll down
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll height
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      
      // Auto-focus the first empty form input if possible
      const nameInput = document.getElementById('fullName') as HTMLInputElement | null;
      if (nameInput) {
        nameInput.focus();
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          id="floating-cta-dock"
          className="md:hidden fixed bottom-0 left-0 w-full bg-navy-brand/95 backdrop-blur-md border-t border-white/15 px-4 py-3 z-50 flex items-center gap-3 shadow-[0_-4px_24px_rgba(0,0,0,0.6)]"
        >
          {/* Phone Call Button */}
          <a
            href="tel:954-701-0752"
            id="floating-cta-call"
            className="flex-1 py-3 bg-white/10 hover:bg-white/15 active:scale-95 transition-transform text-pure-white font-technical text-sm font-bold rounded-lg border border-white/10 flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-blue-ocean" />
            <span>Call Now</span>
          </a>

          {/* Get Quote Button */}
          <button
            type="button"
            onClick={handleScrollToContact}
            id="floating-cta-quote"
            className="flex-1 py-3 bg-[#0066FF] hover:bg-opacity-95 active:scale-95 transition-transform text-pure-white font-technical text-sm font-bold rounded-lg border border-blue-ocean/30 shadow-[0_2px_10px_rgba(0,102,255,0.4)] flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-pure-white" />
            <span>Get Quote</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
