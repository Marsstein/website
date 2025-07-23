import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { PainPointsSection } from '@/components/PainPointsSection';
import { SolutionSection } from '@/components/SolutionSection';
import { FeaturesShowcase } from '@/components/FeaturesShowcase';
import { TrustIndicators } from '@/components/TrustIndicators';
import { CTASection } from '@/components/CTASection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <FeaturesShowcase />
        <TrustIndicators />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
