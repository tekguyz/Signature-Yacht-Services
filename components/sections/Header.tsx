'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Anchor } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Ground Support', href: '#ground-support' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

function scrollTo(href: string) {
  if (href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.querySelector(href);
  if (el) {
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 80,
      behavior: 'smooth',
    });
  }
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu is open; restore on close
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (menuOpen) {
      // Move focus into menu
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollTo(href);
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
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollTo('#'); }}
            className="flex items-center gap-2 group"
            aria-label="Signature Yacht Services — back to top"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-electric flex items-center justify-center text-pure-white transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
              <Anchor className="w-5 h-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl md:text-2xl font-bold tracking-wider text-pure-white">
                SIGNATURE
              </span>
              <span className="font-technical text-[9px] md:text-[10px] tracking-widest text-blue-ocean font-semibold mt-0.5">
                YACHT SERVICES
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav id="desktop-navigation" aria-label="Main navigation" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-technical text-sm text-gray-300 hover:text-blue-ocean transition-colors tracking-wide"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="tel:954-701-0752"
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-electric text-pure-white font-technical text-sm font-bold rounded-lg border border-blue-ocean/30 shadow-[0_4px_14px_rgba(30,144,255,0.35)] hover:brightness-110 hover:-translate-y-px active:translate-y-0 transition-all"
              aria-label="Call us at 954-701-0752"
            >
              <Phone className="w-4 h-4 text-blue-ocean" aria-hidden="true" />
              <span>954-701-0752</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            ref={menuButtonRef}
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-lg text-pure-white hover:bg-white/5 transition-colors"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-panel"
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-navy-deep flex flex-col md:hidden"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
              <div className="flex items-center gap-2" aria-hidden="true">
                <div className="w-8 h-8 rounded-lg bg-blue-electric flex items-center justify-center">
                  <Anchor className="w-4 h-4 text-pure-white" />
                </div>
                <span className="font-display text-lg font-bold tracking-wider text-pure-white uppercase">Signature</span>
              </div>
              <button
                ref={closeButtonRef}
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg text-pure-white hover:bg-white/5 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" aria-hidden="true" />
              </button>
            </div>

            {/* Nav links */}
            <nav aria-label="Mobile navigation" className="flex flex-col px-5 py-8 gap-1 flex-1">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  className="font-display text-3xl font-bold uppercase tracking-wide text-pure-white py-3 border-b border-white/5 hover:text-blue-ocean transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            {/* Bottom CTA */}
            <div className="px-5 pb-8 flex flex-col gap-3">
              <p className="font-technical text-[11px] text-blue-ocean uppercase tracking-widest text-center mb-1">
                24/7 Emergency Dispatch
              </p>
              <a
                href="tel:954-701-0752"
                className="w-full py-4 bg-blue-electric text-pure-white flex items-center justify-center gap-3 font-technical font-bold text-base rounded-xl border border-blue-ocean/30 shadow-[0_4px_14px_rgba(30,144,255,0.4)]"
                aria-label="Call 954-701-0752"
              >
                <Phone className="w-5 h-5 text-blue-ocean" aria-hidden="true" />
                <span>(954) 701-0752</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full py-3.5 bg-navy-brand text-pure-white text-center font-technical font-semibold text-sm rounded-xl border border-white/10"
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
