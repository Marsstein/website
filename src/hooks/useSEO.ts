import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

const routeSEOConfig: Record<string, SEOConfig> = {
  '/': {
    title: 'Marsstein | DSGVO Compliance & Datenschutz Automatisierung',
    description: 'Revolutionieren Sie Ihr Compliance-Management mit Marsstein. Automatisierte DSGVO-, EU AI Act- und ISO 27001-Lösungen für deutsche Unternehmen.',
    keywords: 'DSGVO, Compliance, Datenschutz, EU AI Act, ISO 27001, Automatisierung, Deutschland, DACH',
    ogTitle: 'Marsstein | DSGVO Compliance & Datenschutz Automatisierung',
    ogDescription: 'Revolutionieren Sie Ihr Compliance-Management mit Marsstein. Automatisierte DSGVO-, EU AI Act- und ISO 27001-Lösungen für deutsche Unternehmen.',
    canonical: 'https://marsstein.ai'
  },
  '/dsgvo': {
    title: 'DSGVO Compliance Software | Automatisierte Datenschutz-Lösungen | Marsstein',
    description: 'DSGVO-konforme Datenschutz-Automatisierung für deutsche Unternehmen. Vollautomatische Compliance-Überwachung, Dokumentation und Audit-Vorbereitung.',
    keywords: 'DSGVO Software, Datenschutz Automatisierung, GDPR Compliance, Datenschutz-Folgenabschätzung, DSB Tools, Deutschland',
    ogTitle: 'DSGVO Compliance Software | Automatisierte Datenschutz-Lösungen',
    ogDescription: 'DSGVO-konforme Datenschutz-Automatisierung für deutsche Unternehmen. Vollautomatische Compliance-Überwachung und Dokumentation.',
    canonical: 'https://marsstein.ai/dsgvo'
  },
  '/pricing': {
    title: 'Preise & Pakete | DSGVO Compliance Software | Marsstein',
    description: 'Transparente Preise für DSGVO Compliance Software. Vom Starter-Paket bis Enterprise - passende Lösung für Ihr Unternehmen.',
    keywords: 'DSGVO Software Preise, Compliance Kosten, Datenschutz Software Pakete, Enterprise Compliance, Deutschland',
    ogTitle: 'Preise & Pakete | DSGVO Compliance Software',
    ogDescription: 'Transparente Preise für DSGVO Compliance Software. Vom Starter-Paket bis Enterprise. 30 Tage kostenlos testen.',
    canonical: 'https://marsstein.ai/pricing'
  },
  '/contact': {
    title: 'Kontakt & Demo | DSGVO Compliance Beratung | Marsstein',
    description: 'Vereinbaren Sie eine kostenlose Demo der Marsstein DSGVO Compliance Software. Persönliche Beratung für deutsche Unternehmen.',
    keywords: 'DSGVO Beratung, Compliance Demo, Datenschutz Kontakt, Marsstein Kontakt, Deutschland, Konstanz',
    ogTitle: 'Kontakt & Demo | DSGVO Compliance Beratung',
    ogDescription: 'Vereinbaren Sie eine kostenlose Demo der Marsstein DSGVO Compliance Software. Persönliche Beratung für deutsche Unternehmen.',
    canonical: 'https://marsstein.ai/contact'
  },
  '/academy': {
    title: 'DSGVO Academy | Compliance Training & Schulungen | Marsstein',
    description: 'Professionelle DSGVO-Schulungen und Compliance-Training für Ihr Team. Online-Kurse, Zertifizierungen und Schulungsmaterialien.',
    keywords: 'DSGVO Schulung, Compliance Training, Datenschutz Kurs, GDPR Academy, Online Schulung, Deutschland',
    ogTitle: 'DSGVO Academy | Compliance Training & Schulungen',
    ogDescription: 'Professionelle DSGVO-Schulungen und Compliance-Training für Ihr Team. Online-Kurse und Zertifizierungen.',
    canonical: 'https://marsstein.ai/academy'
  },
  '/tools': {
    title: 'DSGVO Tools & Ressourcen | Kostenlose Compliance Tools | Marsstein',
    description: 'Kostenlose DSGVO Tools und Compliance-Ressourcen. Checklisten, Templates, Datenschutz-Generatoren für deutsche Unternehmen.',
    keywords: 'DSGVO Tools, Compliance Checkliste, Datenschutz Generator, GDPR Tools, kostenlose Tools, Deutschland',
    ogTitle: 'DSGVO Tools & Ressourcen | Kostenlose Compliance Tools',
    ogDescription: 'Kostenlose DSGVO Tools und Compliance-Ressourcen. Checklisten, Templates und Datenschutz-Generatoren.',
    canonical: 'https://marsstein.ai/tools'
  },
  '/iso-27001-zertifizierung': {
    title: 'ISO 27001 Zertifizierung | Informationssicherheit Management | Marsstein',
    description: 'ISO 27001 Zertifizierung für deutsche Unternehmen. Automatisierte ISMS-Implementierung, Gap-Analyse und Audit-Vorbereitung.',
    keywords: 'ISO 27001 Zertifizierung, ISMS, Informationssicherheit, Management System, Deutschland, Audit',
    ogTitle: 'ISO 27001 Zertifizierung | Informationssicherheit Management',
    ogDescription: 'ISO 27001 Zertifizierung für deutsche Unternehmen. Automatisierte ISMS-Implementierung und Audit-Vorbereitung.',
    canonical: 'https://marsstein.ai/iso-27001-zertifizierung'
  },
  '/eu-ai-act': {
    title: 'EU AI Act Compliance | KI-Gesetz Implementierung | Marsstein',
    description: 'EU AI Act Compliance für KI-Systeme. Automatisierte Risikoklassifizierung, Dokumentation und Audit-Trails. Jetzt EU AI Act konform werden.',
    keywords: 'EU AI Act, KI Gesetz, AI Compliance, Künstliche Intelligenz, Risikoklassifizierung, Deutschland',
    ogTitle: 'EU AI Act Compliance | KI-Gesetz Implementierung',
    ogDescription: 'EU AI Act Compliance für KI-Systeme. Automatisierte Risikoklassifizierung und Dokumentation.',
    canonical: 'https://marsstein.ai/eu-ai-act'
  }
};

export const useSEO = (customConfig?: Partial<SEOConfig>) => {
  const location = useLocation();

  useEffect(() => {
    const config = routeSEOConfig[location.pathname] || routeSEOConfig['/'];
    const finalConfig = { ...config, ...customConfig };

    // Update document title
    document.title = finalConfig.title;

    // Update meta description
    updateMetaTag('name', 'description', finalConfig.description);

    // Update keywords if provided
    if (finalConfig.keywords) {
      updateMetaTag('name', 'keywords', finalConfig.keywords);
    }

    // Update canonical URL
    if (finalConfig.canonical) {
      updateLinkTag('canonical', finalConfig.canonical);
    }

    // Update Open Graph tags
    if (finalConfig.ogTitle) {
      updateMetaTag('property', 'og:title', finalConfig.ogTitle);
    }
    if (finalConfig.ogDescription) {
      updateMetaTag('property', 'og:description', finalConfig.ogDescription);
    }
    if (finalConfig.ogImage) {
      updateMetaTag('property', 'og:image', finalConfig.ogImage);
    }
    
    // Update og:url to current page
    updateMetaTag('property', 'og:url', `https://marsstein.ai${location.pathname}`);

    // Update Twitter Card tags
    if (finalConfig.ogTitle) {
      updateMetaTag('name', 'twitter:title', finalConfig.ogTitle);
    }
    if (finalConfig.ogDescription) {
      updateMetaTag('name', 'twitter:description', finalConfig.ogDescription);
    }

  }, [location.pathname, customConfig]);
};

// Helper function to update meta tags
const updateMetaTag = (attribute: 'name' | 'property', value: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${value}"]`);
  
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

// Helper function to update link tags
const updateLinkTag = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (element) {
    element.href = href;
  } else {
    element = document.createElement('link');
    element.rel = rel;
    element.href = href;
    document.head.appendChild(element);
  }
};