import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation content
const translations = {
  en: {
    // Navigation
    nav_home: 'Home',
    nav_features: 'Features', 
    nav_pricing: 'Pricing',
    nav_academy: 'Academy',
    nav_login: 'Login',
    nav_contact: 'Contact',
    nav_demo: 'Request Demo',
    
    // Hero Section
    hero_headline: 'GDPR & ISO27001 Compliance Made Simple',
    hero_subheadline: 'Automated privacy audits, secure document management, and continuous compliance monitoring for Germany, Switzerland, and Europe.',
    hero_cta: 'Start Free Audit',
    hero_cta_secondary: 'Book Demo',
    hero_trust: 'Trusted by 500+ companies across Europe',
    
    // Features
    features_title: 'Everything you need for compliance',
    feature_audit_title: 'AI-Powered Privacy Audit',
    feature_audit_desc: 'Upload your policies and get instant GDPR compliance analysis with actionable recommendations.',
    feature_vault_title: 'Secure Document Vault',
    feature_vault_desc: 'EU/CH-hosted encrypted storage for all your compliance documents with role-based access control.',
    feature_academy_title: 'Compliance Academy',
    feature_academy_desc: 'Interactive learning platform to keep your team updated on privacy laws and best practices.',
    feature_reports_title: 'Expert-Reviewed Reports',
    feature_reports_desc: 'AI analysis backed by legal experts for comprehensive compliance reporting.',
    feature_teams_title: 'Team Collaboration',
    feature_teams_desc: 'Role-based access, multi-tenancy, and team workflows for enterprise compliance management.',
    feature_pricing_title: 'Transparent Pricing',
    feature_pricing_desc: 'Flexible plans with no hidden costs and no vendor lock-in. Scale as you grow.',
    
    // Benefits
    benefits_title: 'Why choose Marsstein?',
    benefit_risk_title: 'Minimize Risk',
    benefit_risk_desc: 'Proactive compliance monitoring reduces legal risks and potential fines.',
    benefit_certainty_title: 'Legal Certainty',
    benefit_certainty_desc: 'Expert-backed recommendations ensure compliance with current regulations.',
    benefit_consulting_title: 'Expert Consulting',
    benefit_consulting_desc: 'Access to certified privacy professionals when you need them most.',
    benefit_logs_title: 'Audit Trails',
    benefit_logs_desc: 'Complete audit logs for compliance documentation and regulatory reporting.',
    benefit_freedom_title: 'No Lock-in',
    benefit_freedom_desc: 'Export your data anytime. Your compliance journey, your control.',
    benefit_future_title: 'Future-Proof',
    benefit_future_desc: 'Stay ahead of evolving privacy regulations with automatic updates.',
    
    // How it works
    how_title: 'How it works',
    how_step1_title: 'Get to Know Us',
    how_step1_desc: 'Schedule a consultation to understand your specific compliance needs.',
    how_step2_title: 'Quick Website Check',
    how_step2_desc: 'Free initial scan of your website and privacy policies.',
    how_step3_title: 'AI Audit',
    how_step3_desc: 'Comprehensive AI-powered analysis of your compliance posture.',
    how_step4_title: 'Continuous Monitoring',
    how_step4_desc: 'Ongoing compliance monitoring and automatic updates.',
    
    // Testimonials
    testimonials_title: 'What our customers say',
    
    // FAQ
    faq_title: 'Frequently Asked Questions',
    faq_q1: 'What regulations does Marsstein cover?',
    faq_a1: 'We specialize in GDPR, ISO27001, Swiss DPA, and EU AI Act compliance across Germany, Switzerland, and Europe.',
    faq_q2: 'How secure is the document vault?',
    faq_a2: 'All documents are encrypted and stored exclusively in EU/CH data centers with enterprise-grade security measures.',
    faq_q3: 'Can I integrate with existing systems?',
    faq_a3: 'Yes, we offer APIs and integrations with popular business tools and document management systems.',
    faq_q4: 'What support do you provide?',
    faq_a4: 'We provide 24/7 technical support and access to certified privacy professionals for legal guidance.',
    
    // Newsletter
    newsletter_title: 'Stay Updated on Compliance',
    newsletter_desc: 'Get the latest updates on privacy regulations and compliance best practices.',
    newsletter_placeholder: 'Your email address',
    newsletter_cta: 'Subscribe',
    
    // Footer
    footer_product: 'Product',
    footer_company: 'Company',
    footer_support: 'Support',
    footer_legal: 'Legal',
  },
  de: {
    // Navigation
    nav_home: 'Startseite',
    nav_features: 'Funktionen',
    nav_pricing: 'Preise',
    nav_academy: 'Akademie',
    nav_login: 'Anmelden',
    nav_contact: 'Kontakt',
    nav_demo: 'Demo anfordern',
    
    // Hero Section
    hero_headline: 'DSGVO & ISO27001 Compliance leicht gemacht',
    hero_subheadline: 'Automatisierte Datenschutz-Audits, sichere Dokumentenverwaltung und kontinuierliche Compliance-Überwachung für Deutschland, Schweiz und Europa.',
    hero_cta: 'Kostenloses Audit starten',
    hero_cta_secondary: 'Demo buchen',
    hero_trust: 'Vertrauenswürdig für 500+ Unternehmen in Europa',
    
    // Features
    features_title: 'Alles was Sie für Compliance brauchen',
    feature_audit_title: 'KI-gestütztes Datenschutz-Audit',
    feature_audit_desc: 'Laden Sie Ihre Richtlinien hoch und erhalten Sie sofort eine DSGVO-Compliance-Analyse mit umsetzbaren Empfehlungen.',
    feature_vault_title: 'Sichere Dokumententresor',
    feature_vault_desc: 'EU/CH-gehostete verschlüsselte Speicherung für alle Compliance-Dokumente mit rollenbasierter Zugriffskontrolle.',
    feature_academy_title: 'Compliance-Akademie',
    feature_academy_desc: 'Interaktive Lernplattform, um Ihr Team über Datenschutzgesetze und Best Practices auf dem Laufenden zu halten.',
    feature_reports_title: 'Expertengeprüfte Berichte',
    feature_reports_desc: 'KI-Analyse unterstützt durch Rechtsexperten für umfassende Compliance-Berichterstattung.',
    feature_teams_title: 'Team-Zusammenarbeit',
    feature_teams_desc: 'Rollenbasierter Zugriff, Mandantenfähigkeit und Team-Workflows für Enterprise-Compliance-Management.',
    feature_pricing_title: 'Transparente Preise',
    feature_pricing_desc: 'Flexible Pläne ohne versteckte Kosten und ohne Vendor-Lock-in. Skalieren Sie nach Bedarf.',
    
    // Benefits
    benefits_title: 'Warum Marsstein wählen?',
    benefit_risk_title: 'Risiko minimieren',
    benefit_risk_desc: 'Proaktive Compliance-Überwachung reduziert Rechtsrisiken und potenzielle Bußgelder.',
    benefit_certainty_title: 'Rechtssicherheit',
    benefit_certainty_desc: 'Expertengestützte Empfehlungen gewährleisten Compliance mit aktuellen Vorschriften.',
    benefit_consulting_title: 'Expertenberatung',
    benefit_consulting_desc: 'Zugang zu zertifizierten Datenschutzfachleuten, wenn Sie sie am meisten brauchen.',
    benefit_logs_title: 'Audit-Protokolle',
    benefit_logs_desc: 'Vollständige Audit-Protokolle für Compliance-Dokumentation und behördliche Berichterstattung.',
    benefit_freedom_title: 'Keine Bindung',
    benefit_freedom_desc: 'Exportieren Sie Ihre Daten jederzeit. Ihre Compliance-Reise, Ihre Kontrolle.',
    benefit_future_title: 'Zukunftssicher',
    benefit_future_desc: 'Bleiben Sie den sich entwickelnden Datenschutzbestimmungen voraus mit automatischen Updates.',
    
    // How it works
    how_title: 'So funktioniert es',
    how_step1_title: 'Lernen Sie uns kennen',
    how_step1_desc: 'Terminieren Sie eine Beratung, um Ihre spezifischen Compliance-Anforderungen zu verstehen.',
    how_step2_title: 'Schneller Website-Check',
    how_step2_desc: 'Kostenloser Erstcheck Ihrer Website und Datenschutzrichtlinien.',
    how_step3_title: 'KI-Audit',
    how_step3_desc: 'Umfassende KI-gestützte Analyse Ihrer Compliance-Situation.',
    how_step4_title: 'Kontinuierliche Überwachung',
    how_step4_desc: 'Laufende Compliance-Überwachung und automatische Updates.',
    
    // Testimonials
    testimonials_title: 'Das sagen unsere Kunden',
    
    // FAQ
    faq_title: 'Häufig gestellte Fragen',
    faq_q1: 'Welche Vorschriften deckt Marsstein ab?',
    faq_a1: 'Wir spezialisieren uns auf DSGVO, ISO27001, Schweizer DSG und EU AI Act Compliance in Deutschland, der Schweiz und Europa.',
    faq_q2: 'Wie sicher ist der Dokumententresor?',
    faq_a2: 'Alle Dokumente sind verschlüsselt und werden ausschließlich in EU/CH-Rechenzentren mit Enterprise-Sicherheitsmaßnahmen gespeichert.',
    faq_q3: 'Kann ich mit bestehenden Systemen integrieren?',
    faq_a3: 'Ja, wir bieten APIs und Integrationen mit beliebten Business-Tools und Dokumentenmanagementsystemen.',
    faq_q4: 'Welchen Support bieten Sie?',
    faq_a4: 'Wir bieten 24/7 technischen Support und Zugang zu zertifizierten Datenschutzfachleuten für rechtliche Beratung.',
    
    // Newsletter
    newsletter_title: 'Bleiben Sie über Compliance informiert',
    newsletter_desc: 'Erhalten Sie die neuesten Updates zu Datenschutzbestimmungen und Compliance-Best-Practices.',
    newsletter_placeholder: 'Ihre E-Mail-Adresse',
    newsletter_cta: 'Abonnieren',
    
    // Footer
    footer_product: 'Produkt',
    footer_company: 'Unternehmen',
    footer_support: 'Support',
    footer_legal: 'Rechtliches',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};