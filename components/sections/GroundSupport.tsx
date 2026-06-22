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
      className="py-16 md:py-24 bg-navy-deep relative overflow-hidden"
    >
      {/* Structural blueprint visual decorations */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] rounded-full bg-blue-electric/5 -translate-x-1/2 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Dual Layout: Headline left, Pricing Feature right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: Narrative & Focus Use Cases (Col span 7) */}
          <div className="lg:col-span-7" id="gs-narrative-container">
            <span className="font-technical text-xs font-bold tracking-widest text-blue-ocean uppercase bg-blue-electric/10 px-3.5 py-1.5 rounded-full inline-block">
              Premium Yard & Dockside Support
            </span>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-pure-white tracking-tight uppercase mt-4">
              Ground Support Unit Rental
            </h2>
            
            <p className="font-body text-base text-gray-300 mt-4 leading-relaxed max-w-2xl">
              Powerful cooling. Reliable performance. Built specifically for demanding shipyard schedules, painting enclosures, and refit projects in South Florida. We supply robust, ultra-reliable portable marine spot coolers and climate control payloads.
            </p>

            {/* Inner Use Cases Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10" id="gs-usecase-grid">
              {useCases.map((uc, idx) => (
                <div
                  key={uc.title}
                  className="bg-navy-brand/40 border border-white/5 rounded-xl p-5 hover:bg-navy-brand/60 transition-all duration-300 flex gap-4"
                  id={`use-case-${idx}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-electric/15 text-blue-ocean flex items-center justify-center shrink-0">
                    <uc.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-pure-white uppercase tracking-wide">
                      {uc.title}
                    </h3>
                    <p className="font-body text-xs text-gray-400 mt-1 leading-relaxed">
                      {uc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: High-Revenue Pricing Widget (Col span 5) */}
          <div className="lg:col-span-5" id="gs-pricing-widget">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-navy-brand border border-white/10 rounded-2xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden"
            >
              {/* Premium Glow Accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-electric/25 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -left-10 -bottom-10 w-24 h-24 bg-blue-ocean/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2 text-gold-accent font-technical text-xs font-bold uppercase tracking-widest mb-4">
                <span className="w-2 h-2 rounded-full bg-gold-accent animate-pulse" />
                Featured Yard Service
              </div>

              <h3 className="font-display text-2xl font-bold uppercase text-pure-white">
                HEAVY-DUTY SPOT-COOLER PACK
              </h3>
              
              <p className="font-body text-sm text-gray-300 mt-2">
                High-capacity climate payloads delivering dry, ice-cold air. Rugged housing, marine corrosion coatings, and integrated drip trays.
              </p>

              {/* High-Impact Electric Blue Pricing Box */}
              <div
                id="pricing-badge"
                className="my-8 p-6 bg-gradient-to-r from-blue-electric/90 to-blue-electric bg-blue-electric rounded-xl border border-blue-ocean/45 text-center relative shadow-[0_8px_25px_rgba(30,144,255,0.4)]"
              >
                <span className="font-technical text-xs tracking-widest text-blue-ocean font-bold uppercase block mb-1">
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
              <div className="space-y-2.5 font-body text-xs text-gray-300 mb-8" id="gs-specs-list">
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
                className="w-full py-4 bg-transparent border-2 border-blue-electric hover:bg-blue-electric text-pure-white hover:text-pure-white font-technical font-bold text-sm rounded-lg uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[0_4px_14px_rgba(30,144,255,0.4)]"
              >
                <span>Reserve Rental Unit</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="font-technical text-[10px] text-gray-400 text-center mt-3 tracking-wide">
                *Installation & custom dockside materials are calculated separately.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
