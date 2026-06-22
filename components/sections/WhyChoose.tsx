'use client';

import React from 'react';
import { ShieldCheck, Award, Ship, Handshake } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChoose() {
  const pillars = [
    {
      title: 'Expert Technicians',
      description: 'Marine HVAC & climate control specialists certified to diagnose, maintain, and overhaul complex refrigeration and air conditioning configurations.',
      icon: ShieldCheck,
      badge: 'Certified Pros',
    },
    {
      title: 'Premium Quality',
      description: 'We source exclusively high-grade copper brackets, maritime alloy condensators, and top-tier parts to guarantee longevity in marine conditions.',
      icon: Award,
      badge: 'Factory Parts',
    },
    {
      title: 'All types of Vessels',
      description: 'From 30-foot center consoles to multi-deck superyachts and heavy industrial marine vessels, our technical reach covers complete marine layouts.',
      icon: Ship,
      badge: 'Universal Service',
    },
    {
      title: 'Trusted & Reliable',
      description: 'Our dockside response team values your maritime timelines. We arrive prompt and complete projects with total transparency and care.',
      icon: Handshake,
      badge: '25+ Yrs Reputation',
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-16 md:py-24 bg-navy-brand relative overflow-hidden"
    >
      {/* Decorative ocean gradient blob */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] rounded-full bg-blue-electric/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-0 w-[300px] h-[300px] rounded-full bg-blue-ocean/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Subtle section structural header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="font-technical text-xs font-bold tracking-widest text-blue-ocean uppercase bg-blue-electric/10 px-3.5 py-1.5 rounded-full inline-block">
            Proven Dockside Excellence
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-pure-white tracking-tight uppercase mt-4">
            Why Signature Yacht Services Stands Apart
          </h2>
          <div className="w-20 h-1 bg-blue-electric mx-auto mt-4 rounded" />
          <p className="font-body text-gray-300 mt-4 text-base md:text-lg">
            Serving South Florida’s elite maritime community with combined decades of rigorous engineering expertise and uncompromised client care.
          </p>
        </div>

        {/* 4 Pillars Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" id="why-choose-grid">
          {pillars.map((pillar, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: idx * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              key={pillar.title}
              className="bg-navy-deep/60 hover:bg-navy-deep/80 border border-white/5 hover:border-blue-ocean/20 rounded-xl p-6 md:p-8 flex flex-col justify-between transition-all duration-300 group shadow-lg hover:shadow-2xl hover:-translate-y-1.5"
              id={`pillar-card-${idx}`}
            >
              <div>
                {/* Icon wrapper with animated backing */}
                <div className="w-14 h-14 rounded-xl bg-blue-electric/10 border border-blue-electric/15 text-blue-ocean flex items-center justify-center p-3 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-electric group-hover:text-pure-white">
                  <pillar.icon className="w-full h-full" />
                </div>

                <div className="font-technical text-[10px] tracking-widest text-blue-ocean uppercase font-semibold mb-2">
                  {pillar.badge}
                </div>
                
                <h3 className="font-display text-xl md:text-2xl font-bold text-pure-white uppercase tracking-wide">
                  {pillar.title}
                </h3>
                
                <p className="font-body text-sm text-gray-400 mt-3 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              {/* Small sleek bottom border accent */}
              <div className="w-full h-0.5 bg-transparent group-hover:bg-blue-electric transition-colors duration-300 mt-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
