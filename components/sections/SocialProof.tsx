'use client';

import React from 'react';
import { Star, Quote, Anchor, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export default function SocialProof() {
  const testimonials = [
    {
      quote: 'Signature saved our charter. A complete chiller failure in Fort Lauderdale was diagnosed and completely repaired within 6 hours. Absolute pros.',
      author: 'Captain M. Vance',
      vessel: 'MY Horizon (85ft)',
      role: 'Charter Master',
    },
    {
      quote: 'We use their Ground Support units for every yard refit. Keeps the crew efficient and the paint enclosures perfectly controlled.',
      author: 'Yacht Manager T. Ross',
      vessel: 'Fort Lauderdale Shipyard Alliance',
      role: 'Fleet Manager',
    },
    {
      quote: 'The only team we trust for complex watermaker overrides and mold remediation aboard our fleet.',
      author: 'Chief Engineer D. Faulkner',
      vessel: 'SY Thalassa (112ft)',
      role: 'Technical Chief',
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 bg-navy-brand relative overflow-hidden/50"
    >
      {/* Decorative Blueprint Circle */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/[0.025] rounded-full pointer-events-none hidden lg:block" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.015] rounded-full pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-technical text-xs font-bold tracking-widest text-blue-ocean uppercase bg-blue-electric/10 px-3.5 py-1.5 rounded-full inline-block">
            Proven Industrial Authority
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-pure-white tracking-tight uppercase mt-4">
            Dockside Reputation
          </h2>
          <div className="w-20 h-1 bg-blue-electric mx-auto mt-4 rounded" />
          <p className="font-body text-sm md:text-base text-gray-300 mt-4 leading-relaxed">
            Listen to the verified experiences of active South Florida captains, fleet managers, and chief engineers.
          </p>
        </div>

        {/* 3 Columns Testimonials Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" id="testimonials-grid">
          {testimonials.map((test, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.1, duration: 0.55, ease: 'easeOut' }}
              key={test.author}
              className="bg-navy-deep/80 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative shadow-xl hover:border-blue-ocean/20 transition-all duration-300 group"
              id={`quote-card-${idx}`}
            >
              {/* Floating Quote Icon decorative layer */}
              <div className="absolute top-6 right-6 text-white/[0.04] group-hover:text-blue-electric/10 transition-colors pointer-events-none">
                <Quote className="w-16 h-16 transform rotate-180" />
              </div>

              <div>
                {/* 5 Structural Trust Stars */}
                <div className="flex items-center gap-1 text-gold-accent mb-6" id={`stars-${idx}`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current text-gold-accent" />
                  ))}
                </div>

                {/* Primary Testimonial Text */}
                <p className="font-body text-sm md:text-base text-gray-200 italic leading-relaxed relative z-10 select-none">
                  “{test.quote}”
                </p>
              </div>

              {/* Author Attribution Meta Block */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-electric/10 border border-blue-electric/20 flex items-center justify-center text-blue-ocean shrink-0">
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold tracking-wider text-pure-white uppercase flex items-center gap-1.5">
                    <span>{test.author}</span>
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-ocean" />
                  </div>
                  <div className="font-technical text-[10px] text-gray-400 mt-0.5 tracking-wider uppercase">
                    {test.role} • <span className="text-gray-300">{test.vessel}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Emergency Dispatch Callout Bottom Banner */}
        <div
          id="testimonials-callout-panel"
          className="mt-12 md:mt-16 bg-navy-deep/40 rounded-xl border border-white/5 p-6 text-center max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-left">
            <h3 className="font-display text-lg font-bold uppercase tracking-wider text-pure-white">
              Need immediate technical dockside support?
            </h3>
            <p className="font-body text-xs text-gray-400 mt-1 max-w-xl">
              Our service technicians operate with full equipment payloads and are authorized to enter all Broward and Dade County marina basins 24 hours a day.
            </p>
          </div>
          <a
            href="tel:954-701-0752"
            className="px-6 py-3 bg-blue-electric hover:bg-opacity-90 text-pure-white font-technical text-xs font-bold rounded shadow-[0_4px_14px_rgba(30,144,255,0.3)] hover:scale-[1.02] transition-transform uppercase tracking-wider whitespace-nowrap shrink-0"
          >
            Immediate Assistance
          </a>
        </div>

      </div>
    </section>
  );
}
