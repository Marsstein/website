import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { ComplianceJourney } from '@/components/ComplianceJourney';
import { ComplianceAreas } from '@/components/ComplianceAreas';
import { TrustPlatformFeatures } from '@/components/TrustPlatformFeatures';
import { CTASection } from '@/components/CTASection';
import { TrustSecurity } from '@/components/TrustSecurity';
import { SmartFAQ } from '@/components/SmartFAQ';
import { IntelligentNewsletter } from '@/components/IntelligentNewsletter';

const Index = () => {
  const [sectionsVisible, setSectionsVisible] = React.useState(new Set());
  
  React.useEffect(() => {
    // Ultra-performance Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.sectionId;
            if (id) {
              setSectionsVisible(prev => new Set([...prev, id]));
              observer.unobserve(entry.target); // Stop observing once visible
            }
          }
        });
      },
      { 
        threshold: 0.05,
        rootMargin: '50px 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('[data-section-id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
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
      
      <div className="compliance-homepage">
        <Header />
        <main>
        <section
          className="compliance-section hero-section"
          data-section-id="hero"
          style={{
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'none'
          }}
        >
          <HeroSection />
        </section>

        <section
          className={`compliance-section ${sectionsVisible.has('features') ? 'visible' : ''}`}
          data-section-id="features"
        >
          <TrustPlatformFeatures />
        </section>

        <section
          className={`compliance-section ${sectionsVisible.has('scroll') ? 'visible' : ''}`}
          data-section-id="scroll"
        >
          <ComplianceJourney />
        </section>

        <section
          className={`compliance-section ${sectionsVisible.has('compliance-areas') ? 'visible' : ''}`}
          data-section-id="compliance-areas"
        >
          <ComplianceAreas />
        </section>

        <section
          className={`compliance-section ${sectionsVisible.has('trust') ? 'visible' : ''}`}
          data-section-id="trust"
        >
          <TrustSecurity />
        </section>
        
        <section 
          className={`compliance-section ${sectionsVisible.has('faq') ? 'visible' : ''}`}
          data-section-id="faq"
        >
          <SmartFAQ />
        </section>
        
        <section 
          className={`compliance-section ${sectionsVisible.has('newsletter') ? 'visible' : ''}`}
          data-section-id="newsletter"
        >
          <IntelligentNewsletter />
        </section>
        
        <section 
          className={`compliance-section ${sectionsVisible.has('cta') ? 'visible' : ''}`}
          data-section-id="cta"
        >
          <CTASection />
        </section>
      </main>
      <Footer />
    </div>
    </>
  );
};

export default Index;
