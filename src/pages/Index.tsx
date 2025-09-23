import React, { lazy, Suspense } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { ScrollTransformationNew } from '@/components/ScrollTransformationNew';
import { TransformationCTA } from '@/components/TransformationCTA';
import { DACHCompliance } from '@/components/DACHCompliance';
import { ISO27001Section } from '@/components/ISO27001Section';
import { EUAIActSection } from '@/components/EUAIActSection';
import { CTASection } from '@/components/CTASection';
import { InteractiveShowcase } from '@/components/InteractiveShowcase';
import { TrustSecurity } from '@/components/TrustSecurity';
import { KIActivationSeparator } from '@/components/separators/KIActivationSeparator';
import { RegulatoryBridgeSeparator } from '@/components/separators/RegulatoryBridgeSeparator';
import { SecurityStandardsMatrixSeparator } from '@/components/separators/SecurityStandardsMatrixSeparator';
import { AIRiskSpectrumSeparator } from '@/components/separators/AIRiskSpectrumSeparator';
import { GestureFlowSeparator } from '@/components/separators/GestureFlowSeparator';
import { QuantumShieldWaveSeparator } from '@/components/separators/QuantumShieldWaveSeparator';
import { KnowledgeConstellationSeparator } from '@/components/separators/KnowledgeConstellationSeparator';

const SmartFAQ = lazy(() => import('@/components/SmartFAQ').then(m => ({ default: m.SmartFAQ })));
const IntelligentNewsletter = lazy(() => import('@/components/IntelligentNewsletter').then(m => ({ default: m.IntelligentNewsletter })));

const Index = () => {
  const [viewportHeight, setViewportHeight] = React.useState('100vh');
  const [isAboveFold, setIsAboveFold] = React.useState(true);
  
  React.useEffect(() => {
    const actualHeight = window.innerHeight;
    setViewportHeight(`${actualHeight}px`);
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsAboveFold(window.scrollY < window.innerHeight * 0.5);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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
      
      <style dangerouslySetInnerHTML={{ __html: `
        .smooth-section { 
          contain: layout style paint; 
          will-change: auto;
        }
        .section-fade {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .lazy-boundary { min-height: ${viewportHeight}; }
      ` }} />
      
      <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-gray-50">
        <Header />
        <main className="overflow-hidden">
        <div className="smooth-section section-fade">
          <HeroSection />
        </div>
        
        <div className={isAboveFold ? "section-fade" : ""}>
          <KIActivationSeparator />
        </div>
        
        <div className="smooth-section section-fade">
          <ScrollTransformationNew />
        </div>
        
        <div className="smooth-section section-fade">
          <TransformationCTA />
        </div>
        
        <div className="py-12" />
        
        <RegulatoryBridgeSeparator />
        
        <div className="py-8" />
        
        <div className="bg-gradient-to-b from-orange-50/20 via-white to-red-50/10 smooth-section section-fade">
          <DACHCompliance />
        </div>
        
        <SecurityStandardsMatrixSeparator />
        
        <div className="bg-gradient-to-b from-red-50/10 to-orange-50/15 smooth-section section-fade">
          <ISO27001Section />
        </div>
        
        <AIRiskSpectrumSeparator />
        
        <div className="bg-gradient-to-b from-orange-50/15 via-white to-gray-50 smooth-section section-fade">
          <EUAIActSection />
        </div>
        
        <GestureFlowSeparator />
        
        <div className="smooth-section section-fade">
          <InteractiveShowcase />
        </div>
        
        <QuantumShieldWaveSeparator />
        
        <div className="smooth-section section-fade">
          <TrustSecurity />
        </div>
        
        <KnowledgeConstellationSeparator />
        
        <Suspense fallback={<div className="h-20" />}>
          <div className="smooth-section section-fade">
            <SmartFAQ />
          </div>
        </Suspense>

        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />

        <Suspense fallback={<div className="h-20" />}>
          <div className="smooth-section section-fade">
            <IntelligentNewsletter />
          </div>
        </Suspense>

        <div className="h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" />
        
        <div className="smooth-section section-fade">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Index;
