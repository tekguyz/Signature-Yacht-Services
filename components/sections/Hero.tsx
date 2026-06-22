'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Calendar, Compass, ShieldCheck, Clock, ShieldAlert } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const trustMetrics = [
    { value: '24/7', label: 'Emergency Dispatch', icon: Clock },
    { value: '25+', label: 'Yrs Combined Exp', icon: ShieldCheck },
    { value: 'ALL', label: 'Vessel Classes', icon: Compass },
    { value: 'SOUTH FL', label: 'Dockside Service', icon: ShieldAlert },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] md:min-h-screen bg-navy-deep flex flex-col justify-between pt-28 pb-12 overflow-hidden"
    >
      {/* Premium Marine Yacht Background Image utilizing Next.js Optimization */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://picsum.photos/seed/yacht-dockside-miami/1920/1080"
          alt="Luxury yacht cruising Fort Lauderdale high waters - Signature Yacht Services"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 mix-blend-luminosity scale-102 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Double-layered vignette linear gradients for extreme text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-transparent to-navy-deep/40" />
      </div>

      {/* Decorative hairline grid lines echoing elite yacht blueprints */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-7xl mx-auto h-full px-8 relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-white/[0.03]" />
          <div className="absolute right-8 top-0 bottom-0 w-px bg-white/[0.03]" />
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/[0.015]" />
          <div className="absolute right-1/4 top-0 bottom-0 w-px bg-white/[0.015]" />
        </div>
      </div>

      {/* Core Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 md:px-8 my-auto flex flex-col items-start gap-6">
        
        {/* Active Dispatch Pulsing Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy-brand/80 border border-white/10 backdrop-blur-md shadow-lg"
          id="hero-dispatch-badge"
        >
          <span className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
          </span>
          <span className="font-technical text-xs font-semibold tracking-wider text-pure-white uppercase">
            Service Available Within 24 Hrs
          </span>
        </motion.div>

        {/* Master Heading System */}
        <div className="max-w-4xl" id="hero-headline-group">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-8xl font-black text-pure-white tracking-tighter uppercase leading-[0.9] select-none"
          >
            Maximum Comfort. <br/>
            <span className="text-gradient-electric">Cooler Experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 font-body text-base md:text-xl text-gray-300 leading-relaxed max-w-2xl"
          >
            Premium Marine HVAC, custom refrigeration systems, and chilled water support units for yachts, private charters, and commercial vessels dockside in Fort Lauderdale and surrounding areas.
          </motion.p>
        </div>

        {/* Actions Button Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          id="hero-action-layout"
        >
          <a
            href="tel:954-701-0752"
            id="hero-primary-cta"
            className="px-6 py-4 bg-blue-electric text-pure-white font-technical font-bold text-sm sm:text-base rounded-lg border border-blue-ocean/30 shadow-[0_4px_20px_rgba(30,144,255,0.45)] hover:bg-opacity-95 hover:scale-[1.03] transition-all duration-200 text-center flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Phone className="w-5 h-5 text-blue-ocean" />
            <span>Call (954) 701-0752</span>
          </a>

          <button
            onClick={handleScrollToContact}
            id="hero-secondary-cta"
            className="px-6 py-4 bg-transparent border border-white/20 hover:border-blue-ocean hover:bg-white/[0.02] text-pure-white font-technical font-bold text-sm sm:text-base rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-100 text-center flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-5 h-5 text-blue-ocean" />
            <span>Request Free Quote</span>
          </button>
        </motion.div>
      </div>

      {/* Trust Stats Ribbon at bottom */}
      <div className="relative z-10 w-full mt-12 md:mt-16" id="trust-metrics-ribbon">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-white/10 backdrop-blur-md"
          >
            {trustMetrics.map((stat, idx) => (
              <div
                key={stat.label}
                className="bg-navy-brand/85 p-6 md:p-8 flex items-center gap-4 hover:bg-navy-brand/95 transition-all duration-300"
                id={`trust-stat-${idx}`}
              >
                <div className="w-12 h-12 rounded-lg bg-blue-electric/10 border border-blue-electric/20 flex items-center justify-center text-blue-ocean shrink-0">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display text-2xl md:text-3xl font-bold tracking-wider text-pure-white leading-none">
                    {stat.value}
                  </div>
                  <div className="font-technical text-[11px] uppercase tracking-widest text-gray-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
