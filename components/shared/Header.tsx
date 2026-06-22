'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Anchor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Ground Support', href: '#ground-support' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        id="global-header"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-navy-deep/95 backdrop-blur-md border-b border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Logo Brand Typography */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            onClick={(e) => handleLinkClick(e, '#')}
            id="header-logo"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-electric flex items-center justify-center text-pure-white transition-transform duration-300 group-hover:scale-110">
              <Anchor className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl font-bold tracking-wider leading-none text-pure-white">
                SIGNATURE
              </span>
              <span className="font-technical text-[9px] md:text-[10px] tracking-widest text-blue-ocean font-semibold">
                YACHT SERVICES
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav id="desktop-navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="font-technical text-sm text-gray-300 hover:text-blue-ocean transition-colors duration-200 tracking-wide focus:outline-none focus:text-blue-ocean"
                id={`nav-${link.name.toLowerCase().replace(' ', '-')}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Click-To-Call */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:954-701-0752"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-electric text-pure-white font-technical text-sm font-bold rounded-lg border border-blue-ocean/30 shadow-[0_4px_14px_rgba(30,144,255,0.4)] hover:bg-opacity-90 hover:scale-[1.02] hover:-translate-y-[1px] active:translate-y-0 active:scale-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-ocean"
              id="header-call-button"
            >
              <Phone className="w-4 h-4 animate-pulse text-blue-ocean" />
              <span>954-701-0752</span>
            </a>
          </div>

          {/* Mobile Hamburguer Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-pure-white hover:bg-white/5 active:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-ocean"
            aria-label="Toggle navigation menu"
            id="mobile-menu-trigger"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-navy-deep/98 flex flex-col justify-between pt-24 pb-8 px-6 md:hidden"
            id="mobile-nav-panel"
          >
            {/* Nav list */}
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-display text-3xl font-semibold tracking-wider text-pure-white hover:text-blue-ocean transition-colors focus:outline-none"
                  id={`mobile-nav-${link.name.toLowerCase().replace(' ', '-')}`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Huge CTA list at bottom of screen */}
            <div className="flex flex-col gap-4">
              <div className="text-center">
                <p className="font-technical text-xs text-blue-ocean uppercase tracking-widest mb-1">
                  24/7 Rapid Emergency Dispatch
                </p>
                <p className="font-body text-sm text-gray-400">
                  Fort Lauderdale, Florida
                </p>
              </div>
              
              <a
                href="tel:954-701-0752"
                className="w-full py-4 bg-blue-electric text-pure-white flex items-center justify-center gap-3 font-technical font-bold text-lg rounded-xl border border-blue-ocean/30 shadow-[0_4px_14px_rgba(30,144,255,0.4)] focus:outline-none active:scale-[0.98] transition-transform"
                id="mobile-menu-call-cta"
              >
                <Phone className="w-5 h-5 text-blue-ocean" />
                <span>954-701-0752</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full py-3.5 bg-navy-brand text-pure-white text-center font-technical font-semibold text-sm rounded-xl border border-white/10 focus:outline-none"
                id="mobile-menu-quote-cta"
              >
                Request Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
