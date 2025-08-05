import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ScrollTransformation } from '@/components/ScrollTransformation';
import { TransformationCTA } from '@/components/TransformationCTA';
import { DACHCompliance } from '@/components/DACHCompliance';
import { ISO27001Section } from '@/components/ISO27001Section';
import { EUAIActSection } from '@/components/EUAIActSection';
import { ModernFeaturesGrid } from '@/components/ModernFeaturesGrid';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

// Import components directly instead of lazy loading to fix the issue
import { InteractiveShowcase } from '@/components/InteractiveShowcase';
import { InnovationShowcase } from '@/components/InnovationShowcase';
import { TrustSecurity } from '@/components/TrustSecurity';
import { SmartFAQ } from '@/components/SmartFAQ';
import { IntelligentNewsletter } from '@/components/IntelligentNewsletter';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <ScrollTransformation />
        <TransformationCTA />
        <DACHCompliance />
        <ISO27001Section />
        <EUAIActSection />
        
        <InteractiveShowcase />
        <TrustSecurity />
        <SmartFAQ />
        <IntelligentNewsletter />
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
