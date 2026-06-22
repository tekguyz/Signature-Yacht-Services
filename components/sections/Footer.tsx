'use client';

import React from 'react';
import { Phone, Mail, Anchor, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
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
    <footer
      id="global-footer"
      className="bg-navy-deep border-t border-white/10 pt-16 pb-24 md:pb-12 text-gray-400 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Core 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12 border-b border-white/5" id="footer-columns">
          
          {/* Column 1: Brand & Urgent Support */}
          <div className="flex flex-col gap-4 text-left" id="footer-brand-col">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-blue-electric flex items-center justify-center text-pure-white shadow-md">
                <Anchor className="w-4 h-4" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-pure-white uppercase">
                Signature Yacht Services
              </span>
            </div>
            
            <p className="font-body text-xs leading-relaxed max-w-sm text-gray-400">
              Fort Lauderdale’s luxury marine HVAC, chiller diagnostics, and custom refrigeration professionals. Providing high-standard technical expertise dockside for South Florida’s elite vessels.
            </p>

            <div className="mt-2 space-y-2">
              <a
                href="tel:954-701-0752"
                className="flex items-center gap-2 text-sm font-technical font-bold text-blue-ocean hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-electric" />
                <span>📞 Call 954-701-0752 (24/7 Dispatch)</span>
              </a>
              <a
                href="mailto:signatureyachtservices@gmail.com"
                className="flex items-center gap-2 text-xs font-body text-gray-300 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-electric" />
                <span>signatureyachtservices@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Structural Navigation Directory */}
          <div className="flex flex-col gap-4 text-left" id="footer-navigation-col">
            <h3 className="font-technical text-xs font-bold uppercase text-pure-white tracking-widest border-l-2 border-blue-electric pl-2.5">
              Site Navigation
            </h3>
            
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs font-body" id="footer-nav-list">
              <li>
                <a
                  href="#hero"
                  onClick={(e) => handleLinkClick(e, '#hero')}
                  className="hover:text-blue-electric transition-colors"
                >
                  Return to Top
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-blue-electric transition-colors"
                >
                  Core Services
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  onClick={(e) => handleLinkClick(e, '#why-choose-us')}
                  className="hover:text-blue-electric transition-colors"
                >
                  Our Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#ground-support"
                  onClick={(e) => handleLinkClick(e, '#ground-support')}
                  className="hover:text-blue-electric transition-colors"
                >
                  Ground Support
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleLinkClick(e, '#testimonials')}
                  className="hover:text-blue-electric transition-colors"
                >
                  Social Proof
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, '#faq')}
                  className="hover:text-blue-electric transition-colors"
                >
                  Client FAQ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="hover:text-blue-electric transition-colors"
                >
                  Get Quote
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Support Units */}
          <div className="flex flex-col gap-4 text-left" id="footer-special-col">
            <h3 className="font-technical text-xs font-bold uppercase text-pure-white tracking-widest border-l-2 border-blue-electric pl-2.5">
              Regional Services Registry
            </h3>

            <p className="font-body text-xs text-gray-400 leading-relaxed">
              Serving key South Florida marinas: Fort Lauderdale City Marina, Bahia Mar Yachting Center, Lauderdale Marine Center (LMC), Pier Sixty-Six, and marina facilities in Miami, Palm Beach, and beyond.
            </p>

            <div className="flex items-center gap-2 mt-1 text-xs font-technical uppercase font-semibold text-blue-ocean">
              <ShieldCheck className="w-4 h-4 text-blue-electric" />
              <span>25+ Years Experience</span>
            </div>
          </div>

        </div>

        {/* Localized Bottom Meta Alignment */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-body" id="footer-meta-baseline">
          
          {/* Logo credits */}
          <div className="flex items-center gap-1">
            <span>© 2026</span>
            <span className="font-semibold text-pure-white">Signature Yacht Services</span>
            <span>• All rights reserved.</span>
          </div>

          {/* Location details */}
          <div>
            <span>Fort Lauderdale, Florida</span>
          </div>

          {/* Layout Scroll to top */}
          <button
            onClick={handleScrollToTop}
            id="scroll-to-top"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 border border-white/10 hover:border-blue-electric hover:text-pure-white transition-all text-gray-400 text-[11px] font-technical uppercase font-bold cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
