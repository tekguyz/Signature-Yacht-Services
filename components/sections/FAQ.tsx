'use client';

import React, { useState, useId } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'How fast can a technician arrive dockside?',
    answer:
      'We dispatch certified marine technicians dockside within 24 hours across Fort Lauderdale and surrounding South Florida basins — Broward, Dade, and Palm Beach county slipways.',
  },
  {
    question: 'Do you service large-scale chilled water systems?',
    answer:
      'Yes. Our marine HVAC specialists hold comprehensive certifications for master-class chilled water systems, direct expansion (DX) packages, multi-stage compressors, and sea-water pumps for all vessel classes.',
  },
  {
    question: 'What is included in the Ground Support Unit Rental?',
    answer:
      'The rental rate is $250/week for heavy-duty marine spot coolers. Custom ducting accessories, dock delivery, and structural shipyard installations can be bundled based on your project location and enclosure size.',
  },
  {
    question: 'Do you offer annual or custom preventative maintenance plans?',
    answer:
      'Absolutely. We design custom maintenance agreements including regular sea-cock flow tests, chemical condenser descaling, biological mold reviews, and electrical safety monitoring to keep systems running without interruption.',
  },
];

export default function FAQ() {
  const uid = useId();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => setOpenIdx(openIdx === idx ? null : idx);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 md:py-24 bg-navy-brand relative overflow-hidden"
    >
      <div className="absolute right-0 top-0 w-80 h-80 bg-blue-ocean/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-technical text-[11px] font-bold tracking-widest text-blue-ocean uppercase bg-blue-electric/10 px-3.5 py-1.5 rounded-full inline-block">
            Common Questions
          </span>
          <h2
            id="faq-heading"
            className="font-display text-4xl md:text-5xl font-black text-pure-white uppercase tracking-tight mt-4"
          >
            Frequently Asked Questions
          </h2>
          <div className="w-14 h-1 bg-blue-electric mx-auto mt-4 rounded" aria-hidden="true" />
        </div>

        {/* Accordion */}
        <div role="list" className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            const triggerId = `${uid}-trigger-${idx}`;
            const panelId = `${uid}-panel-${idx}`;

            return (
              <div
                key={idx}
                role="listitem"
                className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                  isOpen
                    ? 'bg-navy-deep/80 border-blue-ocean/40'
                    : 'bg-navy-deep/30 border-white/5 hover:border-white/10'
                }`}
              >
                {/* Trigger */}
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full px-5 py-5 flex items-center justify-between text-left gap-4 group"
                  >
                    <span className="font-display text-lg font-bold uppercase tracking-wide text-pure-white leading-snug">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'bg-blue-electric/20 text-blue-ocean rotate-180'
                          : 'bg-white/5 text-gray-400 group-hover:text-pure-white'
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>
                </h3>

                {/* Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 border-t border-white/5">
                        <p className="font-body text-sm md:text-base text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-[11px] text-blue-ocean font-technical font-semibold uppercase tracking-wider">
                          <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Dockside Dispatch: (954) 701-0752</span>
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
