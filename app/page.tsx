import React from 'react';
import Header from '@/components/shared/Header';
import Hero from '@/components/sections/Hero';
import WhyChoose from '@/components/sections/WhyChoose';
import Services from '@/components/sections/Services';
import GroundSupport from '@/components/sections/GroundSupport';
import Contact from '@/components/sections/Contact';
import FAQ from '@/components/sections/FAQ';
import Footer from '@/components/sections/Footer';
import FloatingCTA from '@/components/shared/FloatingCTA';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-navy-deep antialiased overflow-x-hidden">
      
      {/* Sticky Header Navigation bar */}
      <Header />

      {/* Main Single Page Layout Content */}
      <main id="main-content">
        {/* S1: High-Impact Hero System */}
        <Hero />

        {/* S2: The 4 Pillars of Trust */}
        <WhyChoose />

        {/* S3: Comprehensive Services Catalog */}
        <Services />

        {/* S4: Standalone Ground Support Unit Rental Container */}
        <GroundSupport />

        {/* S7: Marine Climate FAQ Block - Render here preceding Form per user instruction */}
        <FAQ />

        {/* S6: High-Conversion Lead Intake Engine Form */}
        <Contact />
      </main>

      {/* S8: Editorial Footer Module */}
      <Footer />

      {/* Mobile-Priority Floating Navigation bar - Fixed Bottom */}
      <FloatingCTA />

    </div>
  );
}
