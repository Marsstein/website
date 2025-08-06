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

// Import separator components
import { KIActivationSeparator } from '@/components/separators/KIActivationSeparator';
import { RegulatoryBridgeSeparator } from '@/components/separators/RegulatoryBridgeSeparator';
import { SecurityStandardsMatrixSeparator } from '@/components/separators/SecurityStandardsMatrixSeparator';
import { AIRiskSpectrumSeparator } from '@/components/separators/AIRiskSpectrumSeparator';
import { GestureFlowSeparator } from '@/components/separators/GestureFlowSeparator';
import { TrustShieldNetworkSeparator } from '@/components/separators/TrustShieldNetworkSeparator';
import { KnowledgeConstellationSeparator } from '@/components/separators/KnowledgeConstellationSeparator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        
        {/* 1. Hero → ScrollTransformation: KI-Activation Network */}
        <KIActivationSeparator />
        
        <div className="py-8"></div>
        
        <div className="bg-gradient-to-b from-transparent to-orange-50/20">
          <ScrollTransformation />
        </div>
        
        <TransformationCTA />
        
        <div className="py-12"></div>
        
        {/* 2. TransformationCTA → DACH: Regulatory Bridge */}
        <RegulatoryBridgeSeparator />
        
        <div className="py-8"></div>
        
        <div className="bg-gradient-to-b from-orange-50/20 via-white to-red-50/10">
          <DACHCompliance />
        </div>
        
        {/* 3. DACH → ISO: Security Standards Matrix */}
        <SecurityStandardsMatrixSeparator />
        
        <div className="bg-gradient-to-b from-red-50/10 to-orange-50/15">
          <ISO27001Section />
        </div>
        
        {/* 4. ISO → AI Act: AI Risk Spectrum */}
        <AIRiskSpectrumSeparator />
        
        <div className="bg-gradient-to-b from-orange-50/15 via-white to-gray-50">
          <EUAIActSection />
        </div>
        
        {/* 5. AI Act → Interactive: Gesture Flow */}
        <GestureFlowSeparator />
        
        <InteractiveShowcase />
        
        {/* 6. Interactive → Security: Trust Shield Network */}
        <TrustShieldNetworkSeparator />
        
        <TrustSecurity />
        
        {/* 7. Security → FAQ: Knowledge Constellation */}
        <KnowledgeConstellationSeparator />
        
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
