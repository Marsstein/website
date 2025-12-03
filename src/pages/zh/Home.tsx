import React from 'react';
import { Header } from '@/components/zh/Header';
import { HeroSection } from '@/components/zh/HeroSection';
import { Footer } from '@/components/zh/Footer';
import { Helmet } from 'react-helmet-async';
import { ComplianceJourney } from '@/components/zh/ComplianceJourney';
import { ComplianceAreas } from '@/components/zh/ComplianceAreas';
import { DiscoverMarsstein } from '@/components/zh/DiscoverMarsstein';
import { TrustPlatformFeatures } from '@/components/zh/TrustPlatformFeatures';
import { CTASection } from '@/components/zh/CTASection';
import { TrustSecurity } from '@/components/zh/TrustSecurity';
import { SmartFAQ } from '@/components/zh/SmartFAQ';

const Home = () => {
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
    "description": "Marsstein是您的合规、数据保护和AI治理合作伙伴。我们为您提供GDPR、ISO 27001、NIS2和欧盟AI法案的支持。",
    "inLanguage": "zh-CN"
  };

  return (
    <>
      <Helmet>
        <title>企业合规与数据保护解决方案 | Marsstein</title>
        <meta name="description" content="Marsstein - 您的GDPR、ISO 27001、NIS2和欧盟AI法案合规伙伴。为数据保护和AI治理提供自动化解决方案。立即咨询！" />
        <meta name="robots" content="noindex,nofollow" />
        <html lang="zh-CN" />
        <meta property="og:locale" content="zh_CN" />
        <meta property="og:title" content="企业合规与数据保护解决方案 | Marsstein" />
        <meta property="og:description" content="Marsstein - 您的GDPR、ISO 27001、NIS2和欧盟AI法案合规伙伴。" />
        <meta property="og:url" content="https://marsstein.ai/zh" />
        <link rel="alternate" hreflang="de" href="https://marsstein.ai/" />
        <link rel="alternate" hreflang="en" href="https://marsstein.ai/en" />
        <link rel="alternate" hreflang="zh-CN" href="https://marsstein.ai/zh" />
        <link rel="canonical" href="https://marsstein.ai/zh" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
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
          className={`compliance-section ${sectionsVisible.has('discover') ? 'visible' : ''}`}
          data-section-id="discover"
        >
          <DiscoverMarsstein />
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

export default Home;
