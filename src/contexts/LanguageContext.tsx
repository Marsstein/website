import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export { LanguageContext };

// Translation content
const translations = {
  en: {
    // Navigation
    nav_home: 'Home',
    nav_frameworks: 'Frameworks',
    nav_features: 'Features',
    nav_pricing: 'Pricing',
    nav_academy: 'Academy',
    nav_dsgvo: 'GDPR Compliance',
    nav_iso27001: 'ISO 27001',
    nav_ai_act: 'EU AI Act',
    nav_tools: 'Tools',
    nav_resources: 'Assessment Center',
    nav_industries: 'Industries',
    nav_login: 'Login',
    nav_contact: 'Contact',
    nav_demo: 'Request Demo',

    // Contact Page
    contact_title: 'Your reliable partner for Compliance and Cybersecurity',
    contact_subtitle: 'Thank you for considering Marsstein - the comprehensive compliance solution trusted by over 1,500 companies across Europe.',
    contact_form_title: 'Contact Information',
    contact_first_name: 'First Name',
    contact_last_name: 'Last Name',
    contact_email: 'Business Email',
    contact_phone: 'Phone',
    contact_company_info: 'Company Information',
    contact_company: 'Company',
    contact_job_title: 'Job Title',
    contact_employees: 'Number of Employees',
    contact_employees_placeholder: 'Please select',
    contact_message: 'Message',
    contact_message_placeholder: 'Tell us more about your compliance challenges...',
    contact_newsletter: 'I would like to receive the Marsstein newsletter with compliance news, new blog articles and updates about Marsstein and its products. I can unsubscribe at any time.',
    contact_privacy: 'Marsstein contacts me to provide me with an offer. Our privacy policy applies.',
    contact_submit: 'Send Request',
    contact_success: 'Successfully sent!',
    contact_success_message: 'Thank you for your inquiry. We will get back to you shortly.',
    contact_error: 'Error',
    contact_privacy_required: 'Please agree to the privacy policy.',
    contact_why_marsstein: 'Why Marsstein?',
    contact_benefit_1_title: 'All-in-One Compliance Solutions for GDPR, NIS2, ISO 27001 and more',
    contact_benefit_1_desc: 'Comprehensive compliance coverage in a single platform',
    contact_benefit_2_title: 'Save Time and Money',
    contact_benefit_2_desc: 'With modern, efficient compliance management tools',
    contact_benefit_3_title: 'Avoid Penalties and Build Trust',
    contact_benefit_3_desc: 'By getting expert advice and acting legally compliant',
    contact_address: 'Konstanz, Germany',
    contact_hours: 'Mon-Fri 9:00-18:00',

    // Academy Page
    academy_title: 'Marsstein Academy',
    academy_subtitle: 'Expand your knowledge of data protection, compliance and cybersecurity with our expert courses and certifications.',
    academy_cta: 'Request Early Access',
    academy_feature_1_title: 'Expert Courses',
    academy_feature_1_desc: 'Courses developed by industry experts',
    academy_feature_2_title: 'Team Training',
    academy_feature_2_desc: 'Training for entire teams and organizations',
    academy_feature_3_title: 'Certifications',
    academy_feature_3_desc: 'Recognized compliance certifications',
    academy_feature_4_title: 'Flexible Learning',
    academy_feature_4_desc: 'Learn at your own pace',
    academy_coming_soon: 'Coming Soon',
    academy_coming_soon_desc: 'Our Academy is under development. Sign up to be notified first.',
    academy_notify_me: 'Notify Me',

    // Pricing Page
    pricing_title: 'Transparent pricing, flexible plans',
    pricing_subtitle: 'Choose the plan that best fits your business. All plans include our world-class support.',
    pricing_popular: 'Popular',
    pricing_coming_soon_price: 'Coming Soon',
    pricing_coming_soon_desc: 'Pricing will be announced shortly',
    pricing_request_info: 'Request Information',
    pricing_starter_feature_1: 'Basic features to get started with compliance',
    pricing_starter_feature_2: 'Limited legal support',
    pricing_starter_feature_3: 'Creation of initial documents',
    pricing_pro_feature_1: 'Everything in Starter plus data protection training',
    pricing_pro_feature_2: 'Fast legal support',
    pricing_pro_feature_3: 'Documentation always up to date',
    pricing_pro_feature_4: 'Advanced compliance tools',
    pricing_enterprise_feature_1: 'All Professional features plus Vendor Risk Management',
    pricing_enterprise_feature_2: 'Unlimited top-tier legal support',
    pricing_enterprise_feature_3: 'All administrative features',
    pricing_enterprise_feature_4: 'Dedicated account manager',
    pricing_enterprise_feature_5: 'Custom SLAs and agreements',
    pricing_custom_title: 'Need a custom solution?',
    pricing_custom_desc: 'Contact our sales team for a tailored enterprise solution.',
    pricing_contact_sales: 'Contact Sales',

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
    faq_a1: 'We specialize in GDPR, ISO27001 and EU AI Act compliance across Germany, Switzerland, and Europe.',
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

    // Thank You Page
    thank_you_title: 'Thank You for Your Interest!',
    thank_you_subtitle: 'We have received your request and will contact you within 24 hours.',
    thank_you_next_steps: 'What happens next?',
    thank_you_step_1: 'Our compliance experts will review your request',
    thank_you_step_2: 'We will contact you within 24 hours to schedule a consultation',
    thank_you_step_3: 'You will receive a personalized compliance assessment proposal',
    thank_you_demo_question: 'Would you like to see a demo of our dashboard?',
    thank_you_demo_description: 'Experience our compliance management platform with interactive demo featuring real compliance scenarios.',
    thank_you_view_demo: 'View Interactive Demo',
    thank_you_back_home: 'Back to Home',
    thank_you_contact_info: 'Need immediate assistance?',
    thank_you_response_time: 'Response time: Within 24 hours',

    // Dashboard Navigation
    dashboard_nav_dashboard: 'Dashboard',
    dashboard_nav_documents: 'Documents',
    dashboard_nav_ai_check: 'AI Compliance Check',
    dashboard_nav_audits: 'Audits & Reports',
    dashboard_nav_policies: 'Policies',
    dashboard_nav_frameworks: 'Frameworks',
    dashboard_nav_integrations: 'Integrations',
    dashboard_nav_teams: 'Teams',
    dashboard_nav_settings: 'Settings',
    dashboard_nav_help: 'Help',

    // Dashboard Main
    dashboard_compliance_score: 'Overall Compliance Score',
    dashboard_compliant: 'Compliant',
    dashboard_at_risk: 'At Risk',
    dashboard_warning: 'Warning',
    dashboard_framework_compliance: 'Framework Compliance',
    dashboard_ai_compliance_check: 'AI Compliance Check',
    dashboard_no_critical_issues: 'No critical issues found',
    dashboard_run_check: 'Run Check',
    dashboard_documents_evidence: 'Documents & Evidence',
    dashboard_recent_uploads: 'Recent Uploads',
    dashboard_quick_upload: 'Quick Upload',
    dashboard_upcoming_audits: 'Upcoming Audits & Tasks',
    dashboard_next_audit: 'Next Audit',
    dashboard_risk_monitoring: 'Risk Monitoring',
    dashboard_open_risks: 'Open Risks by Severity',
    dashboard_integrations_health: 'Integrations Health',
    dashboard_user_team_overview: 'User/Team Overview',
    dashboard_active_users: 'Active Users',
    dashboard_recent_activity: 'Recent Activity',
    dashboard_approved: 'Approved',
    dashboard_pending: 'Pending',
    dashboard_missing: 'Missing',
    dashboard_download_dpia: 'Download DPIA',
    dashboard_export_report: 'Export Compliance Report',
    dashboard_legal_basis: 'Legal Basis Overview',
    dashboard_critical: 'Critical',
    dashboard_high: 'High',
    dashboard_medium: 'Medium',
    dashboard_low: 'Low',
    dashboard_controls_passed: 'controls passed',
    dashboard_warnings: 'warnings',
    dashboard_issues: 'issues',
  },
  de: {
    // Navigation
    nav_home: 'Startseite',
    nav_frameworks: 'Rahmenwerke',
    nav_features: 'Funktionen',
    nav_pricing: 'Preise',
    nav_academy: 'Akademie',
    nav_dsgvo: 'DSGVO Compliance',
    nav_iso27001: 'ISO 27001',
    nav_ai_act: 'EU AI Act',
    nav_tools: 'Tools',
    nav_resources: 'Assessment-Center',
    nav_industries: 'Branchen',
    nav_login: 'Anmelden',
    nav_contact: 'Kontakt',
    nav_demo: 'Demo anfordern',

    // Contact Page
    contact_title: 'Dein zuverlässiger Partner für Compliance und Cybersicherheit',
    contact_subtitle: 'Vielen Dank, dass du dich mit Marsstein auseinandersetzen möchtest - der umfassenden Compliance-Lösung, der über 1.500 Unternehmen in ganz Europa vertrauen.',
    contact_form_title: 'Kontaktinfos',
    contact_first_name: 'Vorname',
    contact_last_name: 'Nachname',
    contact_email: 'Geschäftliche E-Mail',
    contact_phone: 'Telefon',
    contact_company_info: 'Firmeninformationen',
    contact_company: 'Firma',
    contact_job_title: 'Jobtitel',
    contact_employees: 'Anzahl der Mitarbeiter',
    contact_employees_placeholder: 'Bitte auswählen',
    contact_message: 'Nachricht',
    contact_message_placeholder: 'Erzählen Sie uns mehr über Ihre Compliance-Herausforderungen...',
    contact_newsletter: 'Ich möchte den Newsletter von Marsstein mit Compliance-News, neuen Blog-Artikeln und Neuigkeiten über Marsstein und seine Produkte erhalten. Ich kann mich jederzeit wieder abmelden.',
    contact_privacy: 'Marsstein kontaktiert mich, um mir ein Angebot zu unterbreiten. Unsere Datenschutzbestimmungen finden Anwendung.',
    contact_submit: 'Anfrage senden',
    contact_success: 'Erfolgreich gesendet!',
    contact_success_message: 'Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.',
    contact_error: 'Fehler',
    contact_privacy_required: 'Bitte stimmen Sie den Datenschutzbestimmungen zu.',
    contact_why_marsstein: 'Warum Marsstein?',
    contact_benefit_1_title: 'All-in-One-Compliance-Lösungen für DSGVO, NIS2, ISO 27001 und mehr',
    contact_benefit_1_desc: 'Umfassende Compliance-Abdeckung in einer einzigen Plattform',
    contact_benefit_2_title: 'Spare Zeit und Geld',
    contact_benefit_2_desc: 'Mit modernen, effizienten Tools zur Compliance-Verwaltung',
    contact_benefit_3_title: 'Vermeide Strafen und baue Vertrauen auf',
    contact_benefit_3_desc: 'Indem du dich von Experten beraten lässt und rechtssicher agierst',
    contact_address: 'Bodensee, Deutschland',
    contact_hours: 'Mo-Fr 9:00-18:00',

    // Academy Page
    academy_title: 'Marsstein Akademie',
    academy_subtitle: 'Erweitere dein Wissen über Datenschutz, Compliance und Cybersicherheit mit unseren Expertenkursen und Zertifizierungen.',
    academy_cta: 'Frühzugang anfordern',
    academy_feature_1_title: 'Expertenkurse',
    academy_feature_1_desc: 'Von Branchenexperten entwickelte Kurse',
    academy_feature_2_title: 'Team-Training',
    academy_feature_2_desc: 'Schulungen für ganze Teams und Organisationen',
    academy_feature_3_title: 'Zertifizierungen',
    academy_feature_3_desc: 'Anerkannte Compliance-Zertifizierungen',
    academy_feature_4_title: 'Flexibles Lernen',
    academy_feature_4_desc: 'Lerne in deinem eigenen Tempo',
    academy_coming_soon: 'Bald verfügbar',
    academy_coming_soon_desc: 'Unsere Academy befindet sich in der Entwicklung. Melde dich an, um als Erster benachrichtigt zu werden.',
    academy_notify_me: 'Benachrichtigen',

    // Pricing Page
    pricing_title: 'Transparente Preise, flexible Pläne',
    pricing_subtitle: 'Wähle den Plan, der am besten zu deinem Unternehmen passt. Alle Pläne beinhalten unseren erstklassigen Support.',
    pricing_popular: 'Beliebt',
    pricing_coming_soon_price: 'Bald verfügbar',
    pricing_coming_soon_desc: 'Preise werden in Kürze bekannt gegeben',
    pricing_request_info: 'Informationen anfordern',
    pricing_starter_feature_1: 'Grundlegende Features, um mit Compliance zu starten',
    pricing_starter_feature_2: 'Begrenzte rechtliche Unterstützung',
    pricing_starter_feature_3: 'Erstellung initialer Dokumente',
    pricing_pro_feature_1: 'Alles aus Starter plus Datenschutz-Schulungen',
    pricing_pro_feature_2: 'Schnelle rechtliche Unterstützung',
    pricing_pro_feature_3: 'Dokumentation stets auf dem neuesten Stand',
    pricing_pro_feature_4: 'Erweiterte Compliance-Tools',
    pricing_enterprise_feature_1: 'Alle Features aus Professional plus Vendor Risk Management',
    pricing_enterprise_feature_2: 'Unbegrenzter rechtlicher Support auf Spitzenniveau',
    pricing_enterprise_feature_3: 'Alle administrativen Features',
    pricing_enterprise_feature_4: 'Dedizierter Account Manager',
    pricing_enterprise_feature_5: 'Individuelle SLAs und Vereinbarungen',
    pricing_custom_title: 'Individuelle Lösung benötigt?',
    pricing_custom_desc: 'Kontaktiere unser Sales-Team für eine maßgeschneiderte Enterprise-Lösung.',
    pricing_contact_sales: 'Sales kontaktieren',

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
    faq_a1: 'Wir spezialisieren uns auf DSGVO, ISO27001 und EU AI Act Compliance in Deutschland, der Schweiz und Europa.',
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

    // Thank You Page
    thank_you_title: 'Vielen Dank für Ihr Interesse!',
    thank_you_subtitle: 'Wir haben Ihre Anfrage erhalten und werden Sie innerhalb von 24 Stunden kontaktieren.',
    thank_you_next_steps: 'Was passiert als nächstes?',
    thank_you_step_1: 'Unsere Compliance-Experten werden Ihre Anfrage prüfen',
    thank_you_step_2: 'Wir kontaktieren Sie innerhalb von 24 Stunden, um eine Beratung zu vereinbaren',
    thank_you_step_3: 'Sie erhalten einen personalisierten Compliance-Assessment-Vorschlag',
    thank_you_demo_question: 'Möchten Sie eine Demo unseres Dashboards sehen?',
    thank_you_demo_description: 'Erleben Sie unsere Compliance-Management-Plattform mit einer interaktiven Demo mit echten Compliance-Szenarien.',
    thank_you_view_demo: 'Interaktive Demo ansehen',
    thank_you_back_home: 'Zurück zur Startseite',
    thank_you_contact_info: 'Benötigen Sie sofortige Hilfe?',
    thank_you_response_time: 'Antwortzeit: Innerhalb von 24 Stunden',

    // Dashboard Navigation
    dashboard_nav_dashboard: 'Dashboard',
    dashboard_nav_documents: 'Dokumente',
    dashboard_nav_ai_check: 'KI Compliance Prüfung',
    dashboard_nav_audits: 'Audits & Berichte',
    dashboard_nav_policies: 'Richtlinien',
    dashboard_nav_frameworks: 'Frameworks',
    dashboard_nav_integrations: 'Integrationen',
    dashboard_nav_teams: 'Teams',
    dashboard_nav_settings: 'Einstellungen',
    dashboard_nav_help: 'Hilfe',

    // Dashboard Main
    dashboard_compliance_score: 'Gesamt Compliance Score',
    dashboard_compliant: 'Konform',
    dashboard_at_risk: 'Risiko',
    dashboard_warning: 'Warnung',
    dashboard_framework_compliance: 'Framework Compliance',
    dashboard_ai_compliance_check: 'KI Compliance Prüfung',
    dashboard_no_critical_issues: 'Keine kritischen Probleme gefunden',
    dashboard_run_check: 'Prüfung starten',
    dashboard_documents_evidence: 'Dokumente & Nachweise',
    dashboard_recent_uploads: 'Aktuelle Uploads',
    dashboard_quick_upload: 'Schnell-Upload',
    dashboard_upcoming_audits: 'Anstehende Audits & Aufgaben',
    dashboard_next_audit: 'Nächstes Audit',
    dashboard_risk_monitoring: 'Risiko-Überwachung',
    dashboard_open_risks: 'Offene Risiken nach Schweregrad',
    dashboard_integrations_health: 'Integration Status',
    dashboard_user_team_overview: 'Benutzer/Team Übersicht',
    dashboard_active_users: 'Aktive Benutzer',
    dashboard_recent_activity: 'Letzte Aktivitäten',
    dashboard_approved: 'Genehmigt',
    dashboard_pending: 'Ausstehend',
    dashboard_missing: 'Fehlend',
    dashboard_download_dpia: 'DSFA herunterladen',
    dashboard_export_report: 'Compliance-Bericht exportieren',
    dashboard_legal_basis: 'Rechtsgrundlagen Übersicht',
    dashboard_critical: 'Kritisch',
    dashboard_high: 'Hoch',
    dashboard_medium: 'Mittel',
    dashboard_low: 'Niedrig',
    dashboard_controls_passed: 'Kontrollen bestanden',
    dashboard_warnings: 'Warnungen',
    dashboard_issues: 'Probleme',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize language from localStorage or default to 'en'
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('marsstein-language');
      return (saved === 'en' || saved === 'de') ? saved : 'en';
    }
    return 'en';
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('marsstein-language', language);
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
