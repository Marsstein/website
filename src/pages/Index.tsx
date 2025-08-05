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
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        <ScrollTransformation />
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        <TransformationCTA />
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        <DACHCompliance />
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        <ISO27001Section />
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        <EUAIActSection />
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        
        <InteractiveShowcase />
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        <TrustSecurity />
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        <SmartFAQ />
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        <IntelligentNewsletter />
        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"></div>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
