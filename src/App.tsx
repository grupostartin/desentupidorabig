import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ReviewsSection } from './components/ReviewsSection';
import { StatsBanner } from './components/StatsBanner';
import { FinalCtaSection } from './components/FinalCtaSection';
import { HydroJetSection } from './components/HydroJetSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuickDispatchModal } from './components/QuickDispatchModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#00255e] text-[#131b2e] antialiased selection:bg-[#25D366]/30 selection:text-[#002c71]">
      {/* Sticky Top Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenDispatchModal={() => setIsModalOpen(true)} />

        {/* 2. Curved White Body Container */}
        <div className="bg-white rounded-t-[40px] md:rounded-t-[56px] relative z-10 -mt-8 md:-mt-12 shadow-2xl overflow-hidden pt-8 pb-10">
          {/* A. Testimonials: 3 clean cards */}
          <ReviewsSection />

          {/* B. Navy Stats Banner: 3 Big Numbers */}
          <StatsBanner />
        </div>

        {/* 3. Hydro Jet Highlight Section */}
        <HydroJetSection />

        {/* 4. Final Emergency Action Banner */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 24h WhatsApp Action */}
      <FloatingWhatsApp />

      {/* Quick Dispatch Simulator Modal */}
      <QuickDispatchModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
