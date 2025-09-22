import React from 'react';
import { motion } from 'framer-motion';
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
import SEOHead from '@/components/SEOHead';
import { useSmoothHomepage } from '@/hooks/useSmoothHomepage';

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
import { QuantumShieldWaveSeparator } from '@/components/separators/QuantumShieldWaveSeparator';
import { KnowledgeConstellationSeparator } from '@/components/separators/KnowledgeConstellationSeparator';

const Index = () => {
  const {
    scrollState,
    isLoaded,
    getComponentAnimationProps,
    getParallaxTransform,
    getSectionTransition,
    getLoadingStyles,
  } = useSmoothHomepage({
    enableParallax: true,
    enableStaggeredAnimations: true,
    optimizeForMobile: true,
    reduceMotionCompliance: true,
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Marsstein",
    "url": "https://marsstein.ai",
    "logo": "https://marsstein.ai/logomarsstein.png",
    "sameAs": [
      "https://www.linkedin.com/company/marsstein"
    ],
    "description": "Marsstein ist Ihr Partner für Compliance, Datenschutz und KI-Governance. Wir unterstützen Sie bei DSGVO, ISO 27001, NIS2 und EU AI Act."
  };

  return (
    <>
      <SEOHead
        title="Compliance & Datenschutz Lösungen für Unternehmen"
        description="Marsstein - Ihr Partner für DSGVO, ISO 27001, NIS2 & EU AI Act Compliance. Automatisierte Lösungen für Datenschutz und KI-Governance. Jetzt beraten lassen!"
        canonical="/"
        structuredData={structuredData}
      />
      <motion.div 
        className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-gray-50 dark:from-gray-950 dark:to-gray-900 smooth-homepage gpu-accelerate"
        style={getLoadingStyles()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Header />
        </motion.div>
        <main className="overflow-hidden">
        <motion.div
          className="smooth-section"
          data-component-id="hero-section"
          {...getComponentAnimationProps('hero-section', 0)}
          style={getSectionTransition('hero-section')}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <HeroSection />
        </motion.div>
        
        {/* 1. Hero → ScrollTransformation: KI-Activation Network */}
        <motion.div
          className="smooth-parallax"
          data-component-id="ki-separator"
          {...getComponentAnimationProps('ki-separator', 0.1)}
          style={{ transform: getParallaxTransform(0.2) }}
        >
          <KIActivationSeparator />
        </motion.div>
        
        <motion.div 
          className="py-8"
          {...getComponentAnimationProps('spacer-1', 0.15)}
          style={{ opacity: scrollState.isScrolling ? 0.8 : 1 }}
        />
        
        <motion.div 
          className="bg-gradient-to-b from-transparent to-orange-50/20 smooth-section"
          data-component-id="scroll-transformation"
          {...getComponentAnimationProps('scroll-transformation', 0.2)}
          style={getSectionTransition('scroll-transformation')}
        >
          <ScrollTransformation />
        </motion.div>
        
        <motion.div
          className="smooth-section"
          data-component-id="transformation-cta"
          {...getComponentAnimationProps('transformation-cta', 0.3)}
          style={getSectionTransition('transformation-cta')}
        >
          <TransformationCTA />
        </motion.div>
        
        <motion.div 
          className="py-12"
          {...getComponentAnimationProps('spacer-2', 0.35)}
          style={{ opacity: scrollState.isScrolling ? 0.8 : 1 }}
        />
        
        {/* 2. TransformationCTA → DACH: Regulatory Bridge */}
        <motion.div
          className="smooth-parallax"
          data-component-id="regulatory-separator"
          {...getComponentAnimationProps('regulatory-separator', 0.4)}
          style={{ transform: getParallaxTransform(0.3) }}
        >
          <RegulatoryBridgeSeparator />
        </motion.div>
        
        <motion.div 
          className="py-8"
          {...getComponentAnimationProps('spacer-3', 0.45)}
          style={{ opacity: scrollState.isScrolling ? 0.8 : 1 }}
        />
        
        <motion.div 
          className="bg-gradient-to-b from-orange-50/20 via-white to-red-50/10 smooth-section"
          data-component-id="dach-compliance"
          {...getComponentAnimationProps('dach-compliance', 0.5)}
          style={getSectionTransition('dach-compliance')}
        >
          <DACHCompliance />
        </motion.div>
        
        {/* 3. DACH → ISO: Security Standards Matrix */}
        <motion.div
          className="smooth-parallax"
          data-component-id="security-separator"
          {...getComponentAnimationProps('security-separator', 0.6)}
          style={{ transform: getParallaxTransform(0.25) }}
        >
          <SecurityStandardsMatrixSeparator />
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-b from-red-50/10 to-orange-50/15 smooth-section"
          data-component-id="iso-section"
          {...getComponentAnimationProps('iso-section', 0.7)}
          style={getSectionTransition('iso-section')}
        >
          <ISO27001Section />
        </motion.div>
        
        {/* 4. ISO → AI Act: AI Risk Spectrum */}
        <motion.div
          className="smooth-parallax"
          data-component-id="ai-risk-separator"
          {...getComponentAnimationProps('ai-risk-separator', 0.8)}
          style={{ transform: getParallaxTransform(0.15) }}
        >
          <AIRiskSpectrumSeparator />
        </motion.div>
        
        <motion.div 
          className="bg-gradient-to-b from-orange-50/15 via-white to-gray-50 smooth-section"
          data-component-id="eu-ai-act"
          {...getComponentAnimationProps('eu-ai-act', 0.9)}
          style={getSectionTransition('eu-ai-act')}
        >
          <EUAIActSection />
        </motion.div>
        
        {/* 5. AI Act → Interactive: Gesture Flow */}
        <motion.div
          className="smooth-parallax"
          data-component-id="gesture-separator"
          {...getComponentAnimationProps('gesture-separator', 1.0)}
          style={{ transform: getParallaxTransform(0.1) }}
        >
          <GestureFlowSeparator />
        </motion.div>
        
        <motion.div
          className="smooth-section"
          data-component-id="interactive-showcase"
          {...getComponentAnimationProps('interactive-showcase', 1.1)}
          style={getSectionTransition('interactive-showcase')}
        >
          <InteractiveShowcase />
        </motion.div>
        
        {/* 6. Interactive → Security: Quantum Shield Wave */}
        <motion.div
          className="smooth-parallax"
          data-component-id="quantum-separator"
          {...getComponentAnimationProps('quantum-separator', 1.2)}
          style={{ transform: getParallaxTransform(0.2) }}
        >
          <QuantumShieldWaveSeparator />
        </motion.div>
        
        <motion.div
          className="smooth-section"
          data-component-id="trust-security"
          {...getComponentAnimationProps('trust-security', 1.3)}
          style={getSectionTransition('trust-security')}
        >
          <TrustSecurity />
        </motion.div>
        
        {/* 7. Security → FAQ: Knowledge Constellation */}
        <motion.div
          className="smooth-parallax"
          data-component-id="knowledge-separator"
          {...getComponentAnimationProps('knowledge-separator', 1.4)}
          style={{ transform: getParallaxTransform(0.05) }}
        >
          <KnowledgeConstellationSeparator />
        </motion.div>
        
        <motion.div
          className="smooth-section"
          data-component-id="smart-faq"
          {...getComponentAnimationProps('smart-faq', 1.5)}
          style={getSectionTransition('smart-faq')}
        >
          <SmartFAQ />
        </motion.div>

        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"
          {...getComponentAnimationProps('divider-1', 1.6)}
        />

        <motion.div
          className="smooth-section"
          data-component-id="newsletter"
          {...getComponentAnimationProps('newsletter', 1.7)}
          style={getSectionTransition('newsletter')}
        >
          <IntelligentNewsletter />
        </motion.div>

        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent"
          {...getComponentAnimationProps('divider-2', 1.8)}
        />
        
        <motion.div
          className="smooth-section"
          data-component-id="cta-section"
          {...getComponentAnimationProps('cta-section', 1.9)}
          style={getSectionTransition('cta-section')}
        >
          <CTASection />
        </motion.div>
      </main>
      <Footer />
    </motion.div>
    </>
  );
};

export default Index;
