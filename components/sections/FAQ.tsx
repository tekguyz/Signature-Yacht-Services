'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-0');

  const faqs: FAQItem[] = [
    {
      id: 'faq-0',
      question: 'How fast can a technician arrive dockside?',
      answer: 'We provide exceptionally rapid service, dispatching certified marine technicians dockside within 24 hours across Fort Lauderdale and surrounding South Florida basins, including Broward, Dade, and Palm Beach county slipways.',
    },
    {
      id: 'faq-1',
      question: 'Do you service large-scale chilled water systems?',
      answer: 'Yes, our marine HVAC specialists hold comprehensive certifications for master-class chilled water systems, direct expansion (DX) packages, multi-stage compressors, and sea-water pumps for all vessel classes.',
    },
    {
      id: 'faq-2',
      question: 'What is included in the Ground Support Unit Rental?',
      answer: 'The rental rate is $250/week for our heavy-duty marine spot coolers. Custom ducting accessories, dock delivery, and direct shipyard structural installations can be packaged based on your project location and enclosure size.',
    },
    {
      id: 'faq-3',
      question: 'Do you offer annual or custom preventative maintenance plans?',
      answer: 'Absolutely. We design custom preventative maintenance agreements that include regular sea-cock flow tests, chemical condenser descaling, biological mold reviews, and electrical safety monitoring to keep systems running flawlessly.',
    },
  ];

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-navy-brand relative overflow-hidden"
    >
      {/* Blueprint Visual Overlay */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-blue-ocean/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header Title Block */}
        <div className="text-center mb-12 md:mb-16">
          <span className="font-technical text-xs font-bold tracking-widest text-blue-ocean uppercase bg-blue-electric/10 px-3.5 py-1.5 rounded-full inline-block">
            Resolve Conversion Bottlenecks
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-black text-pure-white uppercase tracking-tight mt-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-blue-electric mx-auto mt-4 rounded" />
        </div>

        {/* Custom Accordion Matrix */}
        <div className="space-y-4" id="faq-accordion-group">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-xl transition-all duration-300 ${
                  isOpen
                    ? 'bg-navy-deep/80 border-blue-ocean/40 shadow-xl'
                    : 'bg-navy-deep/40 border-white/5 hover:border-white/10'
                }`}
                id={`accordion-item-${idx}`}
              >
                {/* Trigger Button */}
                <button
                  type="button"
                  onClick={() => handleToggle(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                  id={`accordion-trigger-${idx}`}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-blue-ocean' : 'text-gray-400 group-hover:text-blue-electric'}`} />
                    <span className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-pure-white leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Rotating Chevron */}
                  <div
                    className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-all duration-300 shrink-0 ${
                      isOpen ? 'bg-blue-electric/20 text-blue-ocean rotate-180' : 'group-hover:text-pure-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Animated content expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                      id={`accordion-content-${idx}`}
                    >
                      <div className="px-6 pb-6 pt-1 text-gray-300 font-body text-sm md:text-base leading-relaxed border-t border-white/5">
                        <p>{faq.answer}</p>
                        
                        {/* Interactive spec link footnote */}
                        <div className="mt-4 flex items-center gap-2 text-xs text-blue-ocean font-technical font-semibold uppercase tracking-wider">
                          <ShieldCheck className="w-4 h-4" />
                          <span>Direct Dockside Dispatch Hotline: 954-701-0752</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
