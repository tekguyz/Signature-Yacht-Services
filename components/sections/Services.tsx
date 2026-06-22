'use client';

import React from 'react';
import { Wind, Snowflake, Layers, RefreshCw, Droplet, ShieldCheck, HelpCircle, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';
import { WaveDivider } from './WaveDivider';

export default function Services() {
  const serviceCatalog = [
    {
      title: 'Marine Air Conditioning',
      subtitle: 'Chilled Water Loops & Direct Expansion',
      description: 'Expert planning, installation, preventative maintenance, and repair for complex chilled water marine air loop topologies and direct expansion (DX) condensing hardware.',
      icon: Wind,
      bullet: 'Emergency compressors & retrofits',
    },
    {
      title: 'Refrigeration Systems',
      subtitle: 'Freezer Cabinets & Livewell Cooling',
      description: 'Custom maritime walk-in ice makers, galley refrigeration boxes, provision chambers, and bait well chillers calibrated for continuous high-salinity sea tours.',
      icon: Snowflake,
      bullet: 'Tailored temperature bounds',
    },
    {
      title: 'Chilled Water Pipe Insulation',
      subtitle: 'Efficiency Boost & Condensation Shield',
      description: 'Marine-grade insulation wraps applied to high-output chilled plumbing. Eliminates sweating, prevents hull or locker mold, and yields substantial compressor power savings.',
      icon: Layers,
      bullet: 'Zero sweating guarantee',
    },
    {
      title: 'Mold Cleaning & Preventative Measures',
      subtitle: 'Pure Air & Marine Sanitization',
      description: 'Duct sterilizations, blower cabin cleanings, filter retrofits, and state-of-the-art germicidal remedies to safeguard breathing air for captains and crew.',
      icon: ShieldCheck,
      bullet: 'Full pathogen remediation',
    },
    {
      title: 'Watermaker Services & Repairs',
      subtitle: 'Desalination & High-Pressure Pumps',
      description: 'Complete maintenance, membranes purification, winterizations, and custom controller replacements across all leading marine reverse osmosis systems.',
      icon: Droplet,
      bullet: '99.9% Salt rejection tuning',
    },
    {
      title: 'Preventative Maintenance',
      subtitle: 'Peak Maritime Protection',
      description: 'Seasonal dockside checkups, water-flow diagnostics, chemical coil flushing, anode swaps, and electrical contact safety audits to preempt mid-voyage failures.',
      icon: RefreshCw,
      bullet: 'Scheduled dockside checkups',
    },
    {
      title: 'Diagnostics & Repair',
      subtitle: '24/7 Rapid Action Response',
      description: 'Prompt dockside electrical, thermodynamic, and mechanical troubleshooting. Equipped with top OEM replacement components for zero-delay repairs.',
      icon: HelpCircle,
      bullet: 'Fast troubleshooting response',
    },
  ];

  return (
    <div id="services-block" className="relative bg-navy-deep">
      
      {/* Decorative Wave Divider Transition - From dark navy deep to ice white background */}
      <div className="text-ice-white relative z-10 -mb-1 bg-navy-deep">
        <WaveDivider className="text-ice-white bg-navy-deep" />
      </div>

      <section
        id="services"
        className="bg-ice-white py-16 md:py-24 relative"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          {/* Framed Editorial Section Header */}
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <span className="font-technical text-xs font-bold tracking-widest text-blue-electric uppercase bg-blue-electric/15 px-4 py-1.5 rounded-full inline-block">
              Full Marine Comfort Services
            </span>
            
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px bg-blue-electric/35 w-12 hidden md:block" />
              <h2 className="font-display text-4xl md:text-5xl font-black text-navy-deep tracking-tight uppercase">
                Our Services
              </h2>
              <div className="h-px bg-blue-electric/35 w-12 hidden md:block" />
            </div>
            
            <p className="font-body text-slate-700 mt-4 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              All-in-one comprehensive marine HVAC and refrigeration management. Providing expert technician expertise for Fort Lauderdale’s finest vessel classes.
            </p>
          </div>

          {/* 7 Services Grid Frame with safe color contrasts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" id="services-grid-container">
            {serviceCatalog.map((svc, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.5, ease: 'easeOut' }}
                key={svc.title}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(27,58,107,0.06)] hover:shadow-[0_15px_45px_rgba(27,58,107,0.12)] hover:-translate-y-1.5 transition-all duration-300 group"
                id={`service-card-${idx}`}
              >
                <div>
                  {/* Service Icon with soft ocean layout */}
                  <div className="w-12 h-12 rounded-xl bg-navy-brand/5 border border-navy-brand/10 text-navy-brand flex items-center justify-center p-3 mb-6 transition-all duration-300 group-hover:bg-blue-electric group-hover:text-pure-white group-hover:border-transparent">
                    <svc.icon className="w-full h-full" />
                  </div>

                  <div className="text-[11px] font-technical font-semibold tracking-wider text-blue-electric uppercase mb-1">
                    {svc.subtitle}
                  </div>

                  <h3 className="font-display text-2xl font-bold text-navy-deep uppercase tracking-wide">
                    {svc.title}
                  </h3>

                  <p className="font-body text-slate-600 text-sm mt-3.5 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-technical text-[11px] font-medium text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-electric" />
                    {svc.bullet}
                  </span>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const contactForm = document.getElementById('contact');
                      const serviceSelect = document.getElementById('serviceType') as HTMLSelectElement | null;
                      if (contactForm) {
                        const offsetTop = contactForm.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                      }
                      if (serviceSelect) {
                        serviceSelect.value = svc.title;
                        // Fire change event to update local state hooks in form if they exist
                        serviceSelect.dispatchEvent(new Event('change', { bubbles: true }));
                      }
                    }}
                    className="font-technical text-[11px] font-bold text-blue-electric hover:text-navy-brand uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    Request →
                  </a>
                </div>
              </motion.div>
            ))}

            {/* Exclusive CTA Card inside the catalog to lock in the 7th block alignment */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-navy-brand text-pure-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-[0_10px_35px_rgba(10,22,40,0.2)] border border-white/5 relative overflow-hidden group"
              id="service-card-cta"
            >
              {/* Highlight backing glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-electric/25 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-electric flex items-center justify-center p-3 mb-6">
                  <PhoneCall className="w-full h-full text-pure-white" />
                </div>
                
                <h3 className="font-display text-2xl font-extrabold uppercase tracking-wide text-pure-white">
                  Custom Maritime Layouts Needed?
                </h3>
                
                <p className="font-body text-gray-300 text-xs mt-3 leading-relaxed">
                  We specialize in complex custom cooling engineering, watermaker diagnostics, and preventative contracts customized for commercial vessels and large fleets. Let we handle your peace of mind.
                </p>
                
                <div className="mt-6 flex flex-col gap-2 font-technical text-xs text-blue-ocean font-semibold">
                  <p>✔ Comprehensive Service Agreements</p>
                  <p>✔ Superyacht Refit Specialists</p>
                  <p>✔ Mobile Fleet Support Systems</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="tel:954-701-0752"
                  className="w-full py-3 bg-blue-electric hover:bg-opacity-95 transition-all text-pure-white font-technical text-xs font-bold rounded-lg uppercase tracking-wider text-center block shadow-md hover:scale-[1.02] active:scale-100"
                >
                  Call Out Emergency
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wave bottom transition - Back to deep navy background */}
      <div className="text-ice-white relative z-10 -mt-1 bg-navy-deep">
        <WaveDivider flip className="text-ice-white bg-navy-deep" />
      </div>
    </div>
  );
}
