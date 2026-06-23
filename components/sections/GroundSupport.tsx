'use client';

import React from 'react';
import { ShieldCheck, Snowflake, Settings, ArrowRight, ShieldAlert, Sparkles, Droplets } from 'lucide-react';
import { motion } from 'motion/react';

export default function GroundSupport() {
  const useCases = [
    {
      title: 'Yacht Refits',
      description: 'Maintains ideal interior timber moisture levels and protects electronic suites during long shipyard periods.',
      icon: Settings,
    },
    {
      title: 'Precision Paint Jobs',
      description: 'Stabilizes climate bounds, absolute humidity level, and temperatures within custom yacht tents to ensure mirror finishes.',
      icon: Sparkles,
    },
    {
      title: 'Complex Repairs',
      description: 'Keeps engine rooms, mechanical docks, and utility quarters cool and breathable for engineering crews.',
      icon: ShieldAlert,
    },
    {
      title: 'Enclosure Cooling',
      description: 'Circulates reliable high-volume climate cooling into temporarily sealed scaffolding, deck shells, or companionways.',
      icon: Snowflake,
    },
  ];

  const handleGroundRentalSelect = () => {
    const contactForm = document.getElementById('contact');
    const serviceSelect = document.getElementById('serviceType') as HTMLSelectElement | null;
    
    if (contactForm) {
      const offsetTop = contactForm.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }

    if (serviceSelect) {
      serviceSelect.value = 'Ground Support Unit Rental';
      serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  return (
    <section
      id="ground-support"
      className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100"
    >
      {/* Light slate glowing effect */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] rounded-full bg-blue-electric/5 -translate-x-1/2 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Dual Layout: Headline left, Pricing Feature right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Block: Narrative & Focus Use Cases (Col span 7) */}
          <div className="lg:col-span-7 animate-fade-in" id="gs-narrative-container">
            <span className="font-technical text-xs font-bold tracking-widest text-[#0066FF] uppercase bg-blue-electric/10 px-3.5 py-1.5 rounded-full inline-block">
              Premium Yard & Dockside Support
            </span>
            
            <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-black text-navy-brand tracking-tight uppercase mt-3 mb-1">
              Ground Support Unit Rental
            </h2>
            
            <p className="font-body text-xs sm:text-base text-slate-700 mt-2 leading-relaxed max-w-2xl">
              Powerful cooling. Reliable performance. Built specifically for demanding shipyard schedules, painting enclosures, and refit projects in South Florida. We supply robust, ultra-reliable portable marine spot coolers and climate control payloads.
            </p>

            {/* Inner Use Cases Grid (Sleek bright white cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6" id="gs-usecase-grid">
              {useCases.map((uc, idx) => (
                <div
                  key={uc.title}
                  className="bg-white border border-slate-200/60 rounded-xl p-4 sm:p-5 hover:border-blue-electric/30 hover:shadow-md transition-all duration-300 flex gap-3 sm:gap-4 text-left"
                  id={`use-case-${idx}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-electric/10 text-blue-ocean flex items-center justify-center shrink-0">
                    <uc.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm sm:text-base font-bold text-navy-brand uppercase tracking-wide">
                      {uc.title}
                    </h3>
                    <p className="font-body text-[11px] sm:text-xs text-slate-600 mt-0.5 leading-relaxed">
                      {uc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: High-Revenue Pricing Widget (Col span 5) */}
          {/* Fulfills visual flyer instructions with a solid yacht-blue high contrast card */}
          <div className="lg:col-span-5" id="gs-pricing-widget">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-navy-brand border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative overflow-hidden text-left"
            >
              {/* Premium Glow Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-electric/25 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-blue-ocean/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 text-[#FFA500] font-technical text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-[#FFA500] animate-pulse" />
                Featured Yard Service
              </div>

              <h3 className="font-display text-2xl font-bold uppercase text-pure-white">
                HEAVY-DUTY SPOT-COOLER PACK
              </h3>
              
              <p className="font-body text-xs sm:text-sm text-gray-300 mt-2">
                High-capacity climate payloads delivering dry, ice-cold air. Rugged housing, marine corrosion coatings, and integrated drip trays.
              </p>

              {/* High-Impact Electric Blue Pricing Box matching Instagram flyer */}
              <div
                id="pricing-badge"
                className="my-6 p-5 bg-[#0066FF] rounded-xl border border-blue-ocean/45 text-center relative shadow-[0_8px_25px_rgba(0,102,255,0.45)]"
              >
                <span className="font-technical text-[10px] tracking-widest text-[#E0EFFF] font-bold uppercase block mb-1">
                  EXCLUSIVE WEEKLY RATE
                </span>
                <span className="font-display text-5xl md:text-6xl font-black text-pure-white tracking-tighter">
                  $250
                </span>
                <span className="font-technical text-base text-pure-white font-semibold uppercase tracking-wider ml-2">
                  / Week
                </span>
              </div>

              {/* Service specs checklist */}
              <div className="space-y-2.5 font-body text-xs text-gray-300 mb-6" id="gs-specs-list">
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-ocean shrink-0" />
                  <span>Heavy-duty moisture water removal</span>
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-ocean shrink-0" />
                  <span>Flexible ducting accessories compatible</span>
                </p>
                <p className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-ocean shrink-0" />
                  <span>24-Hour prompt emergency setup available</span>
                </p>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={handleGroundRentalSelect}
                id="ground-support-rental-action"
                className="w-full py-4 bg-transparent border-2 border-blue-electric hover:bg-blue-electric text-pure-white hover:text-pure-white font-technical font-bold text-xs sm:text-sm rounded-lg uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_4px_14px_rgba(30,144,255,0.4)]"
              >
                <span>Reserve Rental Unit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="font-technical text-[9px] sm:text-[10px] text-gray-400 text-center mt-3 tracking-wide">
                *Installation & custom dockside materials are calculated separately.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Brand highlights footer bar reflecting the flyer guidelines */}
        <div className="mt-16 pt-12 border-t border-slate-200" id="ground-support-flyer-highlights">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-electric/15 text-blue-ocean flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-display text-xs font-bold text-navy-brand uppercase tracking-wider">
                  Powerful Cooling
                </h4>
                <p className="font-body text-[11px] text-slate-600 mt-0.5">
                  High-performance cooling payloads designed for harsh summer weather control.
                </p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-electric/15 text-blue-ocean flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-display text-xs font-bold text-navy-brand uppercase tracking-wider">
                  Built For Marine Use
                </h4>
                <p className="font-body text-[11px] text-slate-600 mt-0.5">
                  Rugged housings with industrial-grade anti-corrosive heat exchangers.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-electric/15 text-blue-ocean flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-display text-xs font-bold text-navy-brand uppercase tracking-wider">
                  Easy To Connect
                </h4>
                <p className="font-body text-[11px] text-slate-600 mt-0.5">
                  Universal slide-and-lock connections for flexible air ducts.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-blue-electric/15 text-blue-ocean flex items-center justify-center shrink-0 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 className="font-display text-xs font-bold text-navy-brand uppercase tracking-wider">
                  Weekly Rentals
                </h4>
                <p className="font-body text-[11px] text-slate-600 mt-0.5">
                  Flexible flat rates starting at $250 without complex lock-in contracts.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
