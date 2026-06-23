'use client';

import React from 'react';
import Image from 'next/image';
import { Phone, Calendar, Clock, ShieldCheck, Compass, MapPin } from 'lucide-react';

const trustMetrics = [
  { value: '24/7', label: 'Emergency Dispatch', icon: Clock },
  { value: '25+', label: 'Years Experience', icon: ShieldCheck },
  { value: 'All', label: 'Vessel Classes', icon: Compass },
  { value: 'South FL', label: 'Dockside Service', icon: MapPin },
];

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero — Signature Yacht Services"
      className="relative min-h-[100svh] lg:h-screen lg:min-h-[750px] flex flex-col bg-navy-deep overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <Image
          src="https://picsum.photos/seed/yacht-dockside-miami/1920/1080"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/80 to-navy-deep" />
      </div>

      {/* Main content — occupies the entire viewport fold on mobile */}
      <div className="relative z-10 flex flex-col justify-center min-h-[100svh] lg:min-h-0 lg:flex-1 px-5 sm:px-8 max-w-5xl mx-auto w-full pt-32 pb-16 lg:pt-28 lg:pb-10">
        <div>
          {/* Live badge */}
          <div
            className="inline-flex items-center gap-2.5 self-start px-3.5 py-1.5 rounded-full bg-navy-brand/70 border border-white/10 backdrop-blur-sm mb-6 sm:mb-8"
            aria-label="Service status: available within 24 hours"
          >
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-technical text-[10px] sm:text-[11px] font-semibold tracking-widest text-pure-white uppercase">
              Available Within 24 Hrs
            </span>
          </div>

          {/* Headline — styled bigger and punchier */}
          <h1 className="font-display font-black text-pure-white uppercase tracking-tighter leading-[0.9] text-[3rem] xs:text-[4rem] sm:text-[4.75rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] break-words">
            Maximum Comfort.<br />
            <span className="text-gradient-electric">Cooler Experiences.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-body text-gray-300 leading-relaxed mt-6 max-w-xl text-sm sm:text-base md:text-lg">
            Premium Marine HVAC, refrigeration systems, and chilled water support for yachts and commercial vessels across Fort Lauderdale and South Florida.
          </p>

          {/* CTAs — always visible above fold */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full sm:w-auto">
            <a
              href="tel:954-701-0752"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-electric text-pure-white font-technical font-bold text-sm rounded-xl border border-blue-ocean/30 shadow-[0_4px_20px_rgba(30,144,255,0.4)] hover:brightness-110 active:scale-[0.98] transition-all"
              aria-label="Call us at 954-701-0752"
            >
              <Phone className="w-4 h-4 text-blue-ocean" aria-hidden="true" />
              <span>Call (954) 701-0752</span>
            </a>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/20 text-pure-white font-technical font-bold text-sm rounded-xl hover:bg-white/10 hover:border-blue-ocean/40 active:scale-[0.98] transition-all"
              aria-label="Scroll to contact form to request a free quote"
            >
              <Calendar className="w-4 h-4 text-blue-ocean" aria-hidden="true" />
              <span>Request Free Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Trust strip — below fold on mobile (follows min-h-[100svh]), docked at bottom on desktop */}
      <div
        className="relative z-10 w-full lg:mt-auto border-t border-white/10 bg-navy-brand/40 backdrop-blur-sm"
        aria-label="Key service stats"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {trustMetrics.map(({ value, label, icon: Icon }, idx) => (
            <div
              key={label}
              className={`flex items-center gap-3 px-5 py-5 hover:bg-navy-brand/80 transition-colors
                ${idx % 2 === 0 ? 'border-r border-white/5' : 'border-r-0'}
                ${idx < 2 ? 'border-b border-white/5 lg:border-b-0' : 'border-b-0'}
                ${idx !== 3 ? 'lg:border-r lg:border-white/5' : 'lg:border-r-0'}
              `}
            >
              <div
                className="w-10 h-10 rounded-lg bg-blue-electric/10 border border-blue-electric/20 flex items-center justify-center text-blue-ocean shrink-0"
                aria-hidden="true"
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-display text-lg sm:text-xl font-bold text-pure-white leading-none">{value}</div>
                <div className="font-technical text-[10px] uppercase tracking-widest text-gray-400 mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
