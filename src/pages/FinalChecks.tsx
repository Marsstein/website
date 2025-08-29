import React, { useState } from 'react';

interface ChecklistItem {
  id: string;
  title: string;
  completed: boolean;
}

interface PageCheck {
  title: string;
  url: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  available: boolean;
  mobileReady: ChecklistItem;
  seoOptimized: ChecklistItem;
  contentReady: ChecklistItem;
  performanceOptimized: ChecklistItem;
  accessibilityCompliant: ChecklistItem;
  titleTag?: string;
  metaDescription?: string;
  indexStatus?: 'index' | 'noindex' | 'noindex,nofollow';
}

interface CheckCategory {
  id: string;
  icon: string;
  title: string;
  pages: PageCheck[];
}

const FinalChecks = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  // Helper function to create check items for a page
  const createCheckItems = (pageId: string, isFirstFive: boolean = false) => ({
    mobileReady: { id: `${pageId}-mobile`, title: 'Mobile Responsive Design', completed: isFirstFive },
    seoOptimized: { id: `${pageId}-seo`, title: 'SEO Meta Tags & Struktur', completed: isFirstFive },
    contentReady: { id: `${pageId}-content`, title: 'Inhalte vollständig & aktuell', completed: false },
    performanceOptimized: { id: `${pageId}-perf`, title: 'Performance optimiert', completed: false },
    accessibilityCompliant: { id: `${pageId}-a11y`, title: 'Barrierefreiheit geprüft', completed: false }
  });

  const [pageChecks, setPageChecks] = useState<CheckCategory[]>([
    {
      id: 'main-pages',
      icon: '🏠',
      title: 'Hauptseiten',
      pages: [
        {
          title: 'Startseite',
          url: '/',
          description: 'Die Hauptseite der Marsstein Compliance Platform. Hier finden Sie einen Überblick über alle unsere Compliance-Lösungen, Tools und Services für DSGVO, ISO 27001, EU AI Act und mehr.',
          priority: 'high',
          available: true,
          titleTag: 'DSGVO, ISO 27001, EU AI Act – Compliance Plattform',
          metaDescription: 'Automatisierte Compliance-Management Plattform für DSGVO, ISO 27001, EU AI Act. ✓ Framework-übergreifend ✓ KI-gestützt ✓ Enterprise-ready. Jetzt Demo buchen!',
          indexStatus: 'index',
          ...createCheckItems('home', true)
        },
        {
          title: 'Preise',
          url: '/pricing',
          description: 'Transparente Preisübersicht für alle Marsstein-Pakete. Vergleichen Sie unsere Starter-, Professional- und Enterprise-Lösungen mit detaillierten Feature-Listen und finden Sie das passende Paket für Ihr Unternehmen.',
          priority: 'high',
          available: true,
          titleTag: 'Preise – Compliance Management Software',
          metaDescription: 'Transparente Preise für Compliance Management Software. Verschiedene Pakete für jede Unternehmensgröße. ✓ Kostenlose Demo ✓ Keine Einrichtungsgebühr.',
          indexStatus: 'index',
          ...createCheckItems('pricing', true)
        },
        {
          title: 'Kontakt',
          url: '/contact',
          description: 'Nehmen Sie Kontakt mit unserem Expertenteam auf. Nutzen Sie unser Kontaktformular für individuelle Beratung oder vereinbaren Sie einen kostenlosen Erstberatungstermin für Ihre Compliance-Herausforderungen.',
          priority: 'medium',
          available: true,
          titleTag: 'Kontakt – Compliance-Experten erreichen',
          metaDescription: 'Kontaktieren Sie unsere Compliance-Experten. ✓ Kostenlose Erstberatung ✓ Individuelle Lösungen ✓ Schnelle Antwortzeiten. Jetzt anfragen!',
          indexStatus: 'index',
          ...createCheckItems('contact', true)
        },
        {
          title: 'Academy',
          url: '/academy',
          description: 'Umfassende Lernplattform für Compliance-Themen. Erweitern Sie Ihr Wissen mit interaktiven Kursen, Webinaren und Zertifizierungen zu DSGVO, ISO-Standards und KI-Compliance.',
          priority: 'medium',
          available: true,
          titleTag: 'Academy – Compliance Schulungen & Zertifizierungen',
          metaDescription: 'Compliance Academy: Interaktive Kurse zu DSGVO, ISO 27001, EU AI Act. ✓ Zertifizierungen ✓ Praxisnah ✓ Von Experten. Jetzt weiterbilden!',
          indexStatus: 'noindex',
          ...createCheckItems('academy', true)
        },
        {
          title: 'Dashboard',
          url: '/dashboard',
          description: 'Ihr persönliches Compliance-Dashboard. Verwalten Sie alle Compliance-Aktivitäten, überwachen Sie KPIs, erstellen Sie Reports und behalten Sie den Überblick über Ihre Compliance-Status in Echtzeit.',
          priority: 'medium',
          available: true,
          titleTag: 'Dashboard – Compliance Status in Echtzeit',
          metaDescription: 'Compliance Dashboard: Überwachen Sie DSGVO, ISO 27001 & EU AI Act Status in Echtzeit. ✓ KPI-Tracking ✓ Automatisierte Reports. Jetzt einloggen!',
          indexStatus: 'noindex',
          ...createCheckItems('dashboard', true)
        },
        {
          title: 'Danke',
          url: '/thank-you',
          description: 'Bestätigungsseite nach erfolgreicher Formularübermittlung. Sie erhalten hier wichtige Informationen zu den nächsten Schritten und unserem Follow-up-Prozess.',
          priority: 'low',
          available: true,
          titleTag: 'Danke – Ihre Anfrage wurde erfolgreich übermittelt',
          metaDescription: 'Vielen Dank für Ihre Anfrage. Unser Compliance-Team meldet sich innerhalb von 24 Stunden bei Ihnen. Entdecken Sie jetzt unsere Demo oder weitere Ressourcen.',
          indexStatus: 'noindex',
          ...createCheckItems('thank-you', true)
        }
      ]
    },
    {
      id: 'regulations',
      icon: '⚖️',
      title: 'Regulierungen',
      pages: [
        {
          title: 'DSGVO',
          url: '/dsgvo',
          description: 'Umfassender Guide zur Datenschutz-Grundverordnung (GDPR). Erfahren Sie alles über Betroffenenrechte, Verarbeitungsverzeichnisse, TOMs, Meldepflichten und praktische Umsetzungstipps für Ihr Unternehmen.',
          priority: 'high',
          available: true,
          titleTag: 'DSGVO Guide – Datenschutz-Grundverordnung erklärt',
          metaDescription: 'DSGVO/GDPR kompakt erklärt: Betroffenenrechte, Verarbeitungsverzeichnis, TOMs, Meldepflichten. ✓ Praxis-Checklisten ✓ Umsetzungshilfen. Jetzt DSGVO-konform werden!',
          indexStatus: 'index',
          ...createCheckItems('dsgvo-reg', true)
        },
        {
          title: 'EU AI Act',
          url: '/eu-ai-act',
          description: 'Kompletter Leitfaden zur EU-Verordnung über Künstliche Intelligenz. Verstehen Sie Risikoklassen, Konformitätsbewertungen, Transparenzpflichten und technische Dokumentationsanforderungen für KI-Systeme.',
          priority: 'high',
          available: true,
          titleTag: 'EU AI Act – KI-Verordnung Compliance Guide',
          metaDescription: 'EU AI Act verstehen: Risikoklassen, Konformitätsbewertung, Transparenzpflichten für KI-Systeme. ✓ Praxisleitfaden ✓ Checklisten. Jetzt KI-konform werden!',
          indexStatus: 'index',
          ...createCheckItems('ai-act-reg', true)
        },
        {
          title: 'NIS-2',
          url: '/nis2',
          description: 'Detaillierte Informationen zur Network and Information Security Directive 2.0. Prüfen Sie Ihre Betroffenheit, verstehen Sie Meldepflichten und implementieren Sie erforderliche Cybersecurity-Maßnahmen.',
          priority: 'medium',
          available: true,
          titleTag: 'NIS-2 Richtlinie – Cybersecurity Anforderungen',
          metaDescription: 'NIS-2 Directive: Betroffenheit prüfen, Meldepflichten verstehen, Cybersecurity umsetzen. ✓ Compliance-Checkliste ✓ Maßnahmenplan. Jetzt NIS-2 ready werden!',
          indexStatus: 'index',
          ...createCheckItems('nis2-reg', true)
        },
        {
          title: 'Hinweisgeberschutzgesetz',
          url: '/hinweisgeberschutzgesetz',
          description: 'Vollständiger Guide zum Whistleblower-Schutz in Deutschland. Erfahren Sie alles über interne Meldekanäle, Vertraulichkeitsanforderungen und Schutzmaßnahmen für Hinweisgeber nach HinSchG.',
          priority: 'medium',
          available: true,
          titleTag: 'HinSchG – Whistleblower-Schutz richtig umsetzen',
          metaDescription: 'Hinweisgeberschutzgesetz (HinSchG): Interne Meldekanäle, Vertraulichkeit, Compliance-Pflichten. ✓ Umsetzungsleitfaden ✓ Mustervorlagen. Jetzt HinSchG-konform!',
          indexStatus: 'index',
          ...createCheckItems('hinweisgeberschutz-reg', true)
        },
        {
          title: 'Geldwäschegesetz',
          url: '/geldwaeschegesetz',
          description: 'Praxisorientierter Leitfaden zu Anti-Geldwäsche-Bestimmungen (AML). Verstehen Sie Sorgfaltspflichten, Risikomanagement, Verdachtsmeldungen und interne Sicherungsmaßnahmen nach GwG.',
          titleTag: 'GwG – Geldwäschegesetz Compliance Guide',
          metaDescription: 'Geldwäschegesetz (GwG) Compliance: Sorgfaltspflichten, KYC, Verdachtsmeldungen, Risikomanagement. ✓ AML-Leitfaden ✓ Praxistipps. Jetzt GwG-konform werden!',
          indexStatus: 'index',
          priority: 'medium',
          available: true,
          ...createCheckItems('geldwaeschegesetz-reg', true)
        }
      ]
    },
    {
      id: 'certifications',
      icon: '🏆',
      title: 'Zertifizierungen',
      pages: [
        {
          title: 'ISO 27001',
          url: '/iso-27001-zertifizierung',
          description: 'Der internationale Standard für Informationssicherheits-Managementsysteme (ISMS). Schritt-für-Schritt-Anleitung zur Implementierung, Zertifizierungsvorbereitung und kontinuierlichen Verbesserung Ihrer IT-Sicherheit.',
          priority: 'high',
          available: true,
          titleTag: 'ISO 27001 – ISMS Zertifizierung Leitfaden',
          metaDescription: 'ISO 27001 Zertifizierung: ISMS implementieren, IT-Sicherheit systematisieren, Audit vorbereiten. ✓ Schritt-für-Schritt ✓ Praxiserprobt. Jetzt ISO 27001 ready!',
          indexStatus: 'index',
          ...createCheckItems('iso27001-cert', true)
        },
        {
          title: 'SOC 2',
          url: '/soc2-zertifizierung',
          description: 'System and Organization Controls 2 für Service-Provider. Meistern Sie die fünf Trust Service Principles (Sicherheit, Verfügbarkeit, Vertraulichkeit, Verarbeitungsintegrität, Datenschutz) für Ihre Cloud-Services.',
          priority: 'high',
          available: true,
          titleTag: 'SOC 2 – Trust Services Compliance für SaaS',
          metaDescription: 'SOC 2 Type II Compliance: Trust Service Principles für Cloud & SaaS. Sicherheit, Verfügbarkeit, Vertraulichkeit. ✓ Audit-Ready ✓ Enterprise Trust. Jetzt starten!',
          indexStatus: 'index',
          ...createCheckItems('soc2-cert', true)
        },
        {
          title: 'ISO 27017',
          url: '/iso-27017-zertifizierung',
          description: 'Spezifische Sicherheitskontrollen für Cloud-Services. Erweitern Sie Ihr ISO 27001 ISMS um Cloud-spezifische Controls für Provider und Nutzer von Cloud-Diensten.',
          priority: 'medium',
          available: true,
          titleTag: 'ISO 27017 – Cloud Security Zertifizierung',
          metaDescription: 'ISO 27017 Cloud-Sicherheit: Erweiterte Controls für Cloud-Provider & Nutzer. ISO 27001 Ergänzung für Cloud-Services. ✓ Best Practices ✓ Zertifizierung. Jetzt umsetzen!',
          indexStatus: 'index',
          ...createCheckItems('iso27017-cert', true)
        },
        {
          title: 'ISO 27018',
          url: '/iso-27018-zertifizierung',
          description: 'Datenschutz in der Cloud für personenbezogene Daten. Implementieren Sie spezielle Privacy-Controls für Public Cloud PII (Personally Identifiable Information) Prozessoren.',
          priority: 'medium',
          available: true,
          titleTag: 'ISO 27018 – Cloud Privacy Zertifizierung',
          metaDescription: 'ISO 27018 Cloud-Datenschutz: Privacy Controls für personenbezogene Daten in der Cloud. PII-Schutz für Cloud-Provider. ✓ DSGVO-aligned ✓ Best Practices. Jetzt starten!',
          indexStatus: 'index',
          ...createCheckItems('iso27018-cert', true)
        },
        {
          title: 'TISAX',
          url: '/tisax-zertifizierung',
          description: 'Trusted Information Security Assessment Exchange für die Automobilindustrie. Erfüllen Sie die spezifischen Anforderungen der Automobilhersteller an Informationssicherheit und Datenschutz.',
          priority: 'medium',
          available: true,
          titleTag: 'TISAX – Automotive Security Assessment',
          metaDescription: 'TISAX Zertifizierung für Automotive: VDA ISA konforme Informationssicherheit für Zulieferer. ✓ Assessment Levels ✓ ENX-Anbindung. Jetzt TISAX-konform werden!',
          indexStatus: 'index',
          ...createCheckItems('tisax-cert', true)
        },
        {
          title: 'DSG-EKD',
          url: '/dsg-ekd',
          description: 'Datenschutzgesetz der Evangelischen Kirche in Deutschland: Kirchenspezifische Datenschutz-Bestimmungen, Besonderheiten zur DSGVO und kirchliche Aufsicht.',
          priority: 'medium',
          available: true,
          titleTag: 'DSG-EKD – Evangelische Kirche Datenschutz',
          metaDescription: 'DSG-EKD Compliance: Kirchlicher Datenschutz, evangelische Kirche, DSGVO-Besonderheiten. ✓ Kirchenrecht ✓ Religionsausübung ✓ Seelsorgegeheimnis.',
          indexStatus: 'index',
          ...createCheckItems('dsg-ekd')
        },
        {
          title: 'KDG',
          url: '/kdg',
          description: 'Kirchliches Datenschutzgesetz der katholischen Kirche: KDG-Anordnung, katholische Datenschutz-Aufsicht und kirchenrechtliche Besonderheiten.',
          priority: 'medium',
          available: true,
          titleTag: 'KDG – Katholische Kirche Datenschutz',
          metaDescription: 'KDG Compliance: Katholisches Datenschutzgesetz, Kirchenrecht, Beichtgeheimnis. ✓ KDG-Anordnung ✓ Kirchliche Aufsicht ✓ Seelsorgedatenschutz.',
          indexStatus: 'index',
          ...createCheckItems('kdg')
        }
      ]
    },
    {
      id: 'industries',
      icon: '🏭',
      title: 'Branchen',
      pages: [
        {
          title: 'Branchen Übersicht',
          url: '/branchen',
          description: 'Entdecken Sie maßgeschneiderte Compliance-Lösungen für Ihre Branche. Von Healthcare über FinTech bis zur Industrie 4.0 - finden Sie spezifische Anforderungen und Best Practices.',
          priority: 'medium',
          available: true,
          titleTag: 'Branchen – Compliance-Lösungen nach Industrie',
          metaDescription: 'Branchenspezifische Compliance: Healthcare, FinTech, E-Commerce, SaaS. Maßgeschneiderte Lösungen für Ihre Industrie. ✓ Best Practices ✓ Experten. Jetzt entdecken!',
          indexStatus: 'index',
          ...createCheckItems('branchen-overview', true)
        },
        {
          title: 'Gesundheitswesen',
          url: '/branchen/gesundheitswesen',
          description: 'Spezielle Compliance-Anforderungen für Healthcare. Patientendatenschutz nach DSGVO, Gesundheitsdatenverarbeitung, Telemedizin-Compliance und Zusammenarbeit mit Krankenkassen.',
          priority: 'medium',
          available: true,
          titleTag: 'Gesundheitswesen – DSGVO & E-Health Compliance',
          metaDescription: 'Healthcare Compliance: Patientendatenschutz nach DSGVO Art. 9, E-Health-Gesetz, Telemedizin. ✓ Spezialwissen ✓ Praxiserprobt. Jetzt beraten lassen!',
          indexStatus: 'index',
          ...createCheckItems('healthcare-industry', true)
        },
        {
          title: 'Finanzdienstleister',
          url: '/branchen/finanzdienstleister',
          description: 'Compliance für Banken, Versicherungen und FinTechs. MaRisk, BAIT, PSD2, AML-Compliance und spezielle Anforderungen der BaFin für den Finanzsektor.',
          priority: 'medium',
          available: true,
          titleTag: 'Finanzdienstleister – BaFin & DSGVO Compliance',
          metaDescription: 'FinTech Compliance: MaRisk, BAIT, PSD2 & DSGVO für Banken und Versicherungen. ✓ BaFin-konform ✓ Expertenwissen. Jetzt beraten lassen!',
          indexStatus: 'index',
          ...createCheckItems('fintech-industry', true)
        },
        {
          title: 'E-Commerce',
          url: '/branchen/e-commerce',
          description: 'Online-Handel compliant gestalten. Cookie-Management, Kundendatenschutz, grenzüberschreitender Datenverkehr, Newsletter-Marketing und Plattform-Compliance.',
          priority: 'medium',
          available: true,
          titleTag: 'E-Commerce – DSGVO & Cookie-Compliance für Shops',
          metaDescription: 'E-Commerce DSGVO: Cookie-Banner, Kundendatenschutz, Cross-Border-Handel. ✓ Abmahnsicher ✓ Conversion-optimiert. Jetzt compliant werden!',
          indexStatus: 'index',
          ...createCheckItems('ecommerce-industry', true)
        },
        {
          title: 'SaaS Unternehmen',
          url: '/branchen/saas-unternehmen',
          description: 'Software-as-a-Service Compliance Excellence. Auftragsverarbeitung, Privacy by Design, internationale Datentransfers, SLAs und Multi-Tenant-Architekturen.',
          priority: 'medium',
          available: true,
          titleTag: 'SaaS-Unternehmen – Multi-Tenant DSGVO & SOC 2',
          metaDescription: 'SaaS Compliance: Multi-Tenant DSGVO, SOC 2 Type II, EU AI Act für Enterprise SaaS. ✓ API-Security ✓ Global Compliance. Jetzt Enterprise-ready werden!',
          indexStatus: 'index',
          ...createCheckItems('saas-industry', true)
        },
        {
          title: 'Produktion',
          url: '/branchen/produktion',
          description: 'Manufacturing und Industrie 4.0 Compliance. IoT-Sicherheit, Maschinendaten-Schutz, Supply Chain Security und OT-Sicherheit in vernetzten Produktionsumgebungen.',
          priority: 'medium',
          available: true,
          titleTag: 'Produktion – Industrie 4.0 & IoT-Sicherheit',
          metaDescription: 'Manufacturing Compliance: Industrie 4.0, IoT-Sicherheit, Smart Factory DSGVO, OT-Security. ✓ Produktionsschutz ✓ Supply Chain Security. Jetzt beraten lassen!',
          indexStatus: 'index',
          ...createCheckItems('manufacturing-industry', true)
        },
        {
          title: 'Automotive',
          url: '/branchen/automotive',
          description: 'Automobilindustrie-spezifische Compliance. TISAX-Anforderungen, Connected Car Datenschutz, Lieferanten-Management und Prototypenschutz.',
          priority: 'medium',
          available: true,
          titleTag: 'Automotive – TISAX & Connected Car Compliance',
          metaDescription: 'Automotive Compliance: TISAX-Zertifizierung, Connected Car DSGVO, Autonomous Vehicle AI Act. ✓ VDA-Standards ✓ Cyber Security. Jetzt automotive-ready!',
          indexStatus: 'index',
          ...createCheckItems('automotive-industry', true)
        },
        {
          title: 'Energie',
          url: '/branchen/energie',
          description: 'Energiesektor und kritische Infrastrukturen. Smart Meter Datenschutz, KRITIS-Anforderungen, IT-Sicherheitskatalog und Netzbetreiber-Compliance.',
          priority: 'medium',
          available: true,
          titleTag: 'Energie – KRITIS & Smart Grid Compliance',
          metaDescription: 'Energiesektor Compliance: KRITIS-Anforderungen, Smart Grid DSGVO, NIS2 kritische Infrastrukturen. ✓ Netzbetreiber-Expertise ✓ Smart Meter. Jetzt sicher!',
          indexStatus: 'index',
          ...createCheckItems('energy-industry', true)
        },
        {
          title: 'Lebensmittel',
          url: '/branchen/lebensmittel',
          description: 'Food Industry Compliance und Rückverfolgbarkeit. Lieferketten-Transparenz, Kundendaten in Loyalty-Programmen und HACCP-Integration.',
          priority: 'medium',
          available: true,
          titleTag: 'Lebensmittel – HACCP & Rückverfolgbarkeit DSGVO',
          metaDescription: 'Food Industry Compliance: HACCP-Integration, Rückverfolgbarkeit DSGVO, Lebensmittelsicherheit. ✓ Farm-to-Fork ✓ Traceability. Jetzt food-safe!',
          indexStatus: 'index',
          ...createCheckItems('food-industry', true)
        },
        {
          title: 'Logistik',
          url: '/branchen/logistik',
          description: 'Transport und Logistik Compliance. Tracking-Daten, Fahrerdatenschutz, internationale Warenströme und Supply Chain Visibility.',
          priority: 'medium',
          available: true,
          titleTag: 'Logistik – GPS-Tracking & Supply Chain DSGVO',
          metaDescription: 'Transport & Logistik Compliance: GPS-Tracking DSGVO, Supply Chain Security, Fahrerdatenschutz. ✓ Sendungsverfolgung ✓ Fleet Management. Jetzt compliant!',
          indexStatus: 'index',
          ...createCheckItems('logistics-industry', true)
        }
      ]
    },
    {
      id: 'tools',
      icon: '🛠️',
      title: 'Tools',
      pages: [
        {
          title: 'Tools Übersicht',
          url: '/tools',
          description: 'Entdecken Sie unsere Suite von Compliance-Tools. Von KI-Assistenten über Cookie-Management bis zu Whistleblower-Systemen - alle Tools für effiziente Compliance.',
          priority: 'medium',
          available: true,
          titleTag: 'Tools – Compliance-Werkzeuge & Automatisierung',
          metaDescription: 'Compliance-Tools Suite: DSGVO-Check, Cookie-Scanner, Whistleblower-System, KI-Assistent. ✓ Automatisierung ✓ Rechtssicher ✓ Enterprise-ready. Jetzt testen!',
          indexStatus: 'index',
          ...createCheckItems('tools-overview', true)
        },
        {
          title: 'Compliance AI Assistant',
          url: '/tools/compliance-ai-assistant',
          description: 'Ihr KI-gestützter Compliance-Berater. Stellen Sie Fragen zu DSGVO, ISO 27001 oder EU AI Act und erhalten Sie sofort fundierte, praxisnahe Antworten und Handlungsempfehlungen.',
          priority: 'high',
          available: true,
          titleTag: 'AI Assistant – Compliance-Berater mit KI-Power',
          metaDescription: 'Compliance AI Assistant: KI-gestützter Berater für DSGVO, ISO 27001, EU AI Act. ✓ 24/7 verfügbar ✓ Voice AI ✓ Instant Antworten. Jetzt kostenlos testen!',
          indexStatus: 'index',
          ...createCheckItems('ai-assistant-tool', true)
        },
        {
          title: 'Cookie Management',
          url: '/tools/cookie-management',
          description: 'Professionelles Cookie-Consent Management Tool. DSGVO-konforme Cookie-Banner, granulare Einwilligungsverwaltung und automatische Cookie-Scans für Ihre Website.',
          priority: 'medium',
          available: true,
          titleTag: 'Cookie Management – DSGVO-konforme Cookie-Banner',
          metaDescription: 'Cookie Management Tool: DSGVO-konforme Cookie-Banner, Consent-Verwaltung, TCF 2.2, Google Consent Mode v2. ✓ Rechtssicher ✓ Conversion-optimiert. Jetzt testen!',
          indexStatus: 'index',
          ...createCheckItems('cookie-mgmt-tool', true)
        },
        {
          title: 'Whistleblower System',
          url: '/tools/whistleblower-system',
          description: 'Sicheres digitales Hinweisgebersystem nach HinSchG. Anonyme Meldungen, verschlüsselte Kommunikation und revisionssichere Dokumentation für gesetzeskonforme Meldeprozesse.',
          priority: 'medium',
          available: true,
          titleTag: 'Whistleblower System – HinSchG-konforme Meldekanäle',
          metaDescription: 'Whistleblower System: HinSchG-konforme anonyme Meldekanäle, verschlüsselte Kommunikation, Compliance-Management. ✓ Rechtssicher ✓ Anonym. Jetzt implementieren!',
          indexStatus: 'index',
          ...createCheckItems('whistleblower-tool', true)
        },
        {
          title: 'Cookie Management Tool',
          url: '/tools/cookie-management-tool',
          description: 'Enterprise Cookie Management Lösung. Erweiterte Features wie Cookie-Kategorisierung, Consent-Analytics, Multi-Domain-Support und API-Integration.',
          priority: 'medium',
          available: true,
          titleTag: 'Cookie Management Tool – Enterprise Lösung',
          metaDescription: 'Enterprise Cookie Management: Multi-Domain-Support, Consent-Analytics, API-Integration, Cookie-Kategorisierung. ✓ Enterprise-Grade ✓ Skalierbar. Jetzt upgraden!',
          indexStatus: 'index',
          ...createCheckItems('cookie-mgmt-enterprise', true)
        },
        {
          title: 'Whistleblower System Tool',
          url: '/tools/whistleblower-system-tool',
          description: 'Professionelles Hinweisgebersystem mit Case Management. Workflow-Automatisierung, Mehrsprachigkeit und Integration in bestehende Compliance-Prozesse.',
          priority: 'medium',
          available: true,
          titleTag: 'Whistleblower System Tool – Enterprise Lösung',
          metaDescription: 'Enterprise Whistleblower System: Case Management, Workflow-Automatisierung, Mehrsprachigkeit, Integration. ✓ HinSchG-konform ✓ Skalierbar. Jetzt upgraden!',
          indexStatus: 'index',
          ...createCheckItems('whistleblower-enterprise', true)
        },
        {
          title: 'DSGVO E-Mail Templates',
          url: '/tools/dsgvo-email-template-generator',
          description: 'Generator für DSGVO-konforme E-Mail-Vorlagen. Erstellen Sie rechtssichere Antworten für Auskunftsersuchen, Löschanfragen und andere Betroffenenrechte.',
          priority: 'medium',
          available: true,
          titleTag: 'DSGVO E-Mail Templates – Rechtssichere Vorlagen',
          metaDescription: 'DSGVO E-Mail Template Generator: Rechtssichere Vorlagen für Auskunftsersuchen, Löschanfragen, Betroffenenrechte. ✓ Anwaltlich geprüft ✓ Sofort einsetzbar. Jetzt generieren!',
          indexStatus: 'index',
          ...createCheckItems('email-templates', true)
        },
        {
          title: 'DSGVO Compliance Scorecard',
          url: '/tools/dsgvo-compliance-scorecard',
          description: 'Bewerten Sie Ihren DSGVO-Compliance-Status. Interaktive Scorecard mit Benchmarking, Gap-Analyse und priorisierten Handlungsempfehlungen für Verbesserungen.',
          priority: 'medium',
          available: true,
          titleTag: 'DSGVO Scorecard – Compliance-Status bewerten',
          metaDescription: 'DSGVO Compliance Scorecard: Bewerten Sie Ihren Datenschutz-Status interaktiv. Gap-Analyse, Benchmarking, Handlungsempfehlungen. ✓ 15 Min Assessment. Jetzt bewerten!',
          indexStatus: 'index',
          ...createCheckItems('compliance-scorecard', true)
        }
      ]
    },
    {
      id: 'assessments',
      icon: '📊',
      title: 'Assessment Center',
      pages: [
        {
          title: 'Assessment Center',
          url: '/assessment-center',
          description: 'Zentrale Anlaufstelle für alle Self-Assessments. Prüfen Sie Ihre Compliance-Readiness mit interaktiven Tools und erhalten Sie detaillierte Auswertungen mit Handlungsempfehlungen.',
          priority: 'high',
          available: true,
          titleTag: 'Assessment Center – Compliance-Readiness prüfen',
          metaDescription: 'Assessment Center: Self-Assessments für DSGVO, ISO 27001, EU AI Act. Interaktive Tools, detaillierte Auswertungen, Handlungsempfehlungen. ✓ Kostenlos. Jetzt prüfen!',
          indexStatus: 'noindex',
          ...createCheckItems('assessment-center', true)
        },
        {
          title: 'DSGVO Compliance Checklist',
          url: '/assessment-center/dsgvo-compliance-checklist',
          description: 'Umfassende DSGVO-Checkliste mit über 100 Prüfpunkten. Systematische Überprüfung aller DSGVO-Anforderungen von Rechtsgrundlagen bis zu technischen Maßnahmen.',
          priority: 'high',
          available: true,
          titleTag: 'DSGVO Checkliste – 100+ Prüfpunkte komplett',
          metaDescription: 'DSGVO Compliance Checkliste: 100+ Prüfpunkte, systematische Überprüfung aller Anforderungen. Von Rechtsgrundlagen bis TOMs. ✓ Vollständig. Jetzt prüfen!',
          indexStatus: 'noindex',
          ...createCheckItems('dsgvo-checklist', true)
        },
        {
          title: 'Datenschutz Readiness Assessment',
          url: '/assessment-center/datenschutz-readiness-assessment',
          description: 'Bewerten Sie Ihre Datenschutz-Bereitschaft. Analysieren Sie Prozesse, Dokumentation, technische Maßnahmen und organisatorische Strukturen für optimalen Datenschutz.',
          priority: 'high',
          available: true,
          titleTag: 'Datenschutz Readiness Assessment – DSGVO-Bereitschaft prüfen',
          metaDescription: 'Bewerten Sie Ihre Datenschutz-Bereitschaft interaktiv. Analysieren Sie Prozesse, Dokumentation & TOMs für optimalen Datenschutz. ✓ Kostenlos ✓ Sofortige Auswertung. Jetzt testen!',
          indexStatus: 'noindex',
          ...createCheckItems('privacy-readiness', true)
        },
        {
          title: 'Breach Response Checklist',
          url: '/assessment-center/breach-response-checklist',
          description: 'Notfall-Checkliste für Datenpannen. Schritt-für-Schritt-Anleitung für die ersten 72 Stunden, Meldepflichten, Kommunikation und Schadensbegrenzung.',
          priority: 'high',
          available: true,
          titleTag: 'Breach Response Checklist – 72-Stunden DSGVO Notfallplan',
          metaDescription: 'Notfall-Checkliste für Datenpannen: Schritt-für-Schritt in 72h. Meldepflichten, Kommunikation, Schadensbegrenzung. ✓ DSGVO-konform ✓ Sofort einsetzbar. Jetzt downloaden!',
          indexStatus: 'noindex',
          ...createCheckItems('breach-response', true)
        },
        {
          title: 'Cookie Compliance Audit',
          url: '/assessment-center/cookie-compliance-audit',
          description: 'Detaillierte Überprüfung Ihrer Cookie-Compliance. Analyse von Cookie-Typen, Einwilligungsprozessen, Speicherdauer und Drittanbieter-Integration.',
          priority: 'medium',
          available: true,
          titleTag: 'Cookie Compliance Audit – DSGVO Cookie-Scanner & Analyse',
          metaDescription: 'Detaillierte Cookie-Compliance Überprüfung: Cookie-Scanner, Einwilligungsprozesse, TCF 2.2. ✓ Automatische Analyse ✓ DSGVO-konform ✓ Sofortige Ergebnisse. Jetzt Website scannen!',
          indexStatus: 'noindex',
          ...createCheckItems('cookie-audit', true)
        },
        {
          title: 'Vendor Assessment Template',
          url: '/assessment-center/vendor-assessment-template',
          description: 'Strukturierte Bewertung von Lieferanten und Auftragsverarbeitern. Prüfen Sie Datenschutz, Sicherheit und Compliance Ihrer Partner systematisch.',
          priority: 'medium',
          available: true,
          titleTag: 'Vendor Assessment Template – Lieferanten DSGVO-Bewertung',
          metaDescription: 'Strukturierte Lieferanten-Bewertung: Datenschutz, IT-Sicherheit, Compliance systematisch prüfen. ✓ Bewertungsmatrix ✓ Risiko-Scoring ✓ Vorlagen. Jetzt Partner bewerten!',
          indexStatus: 'noindex',
          ...createCheckItems('vendor-assessment', true)
        },
        {
          title: 'ISO 27001 Maturity Assessment',
          url: '/assessment-center/isms-maturity-assessment',
          description: 'Umfassendes Reifegradmodell für Ihr Information Security Management System (ISMS). Bewerten Sie Ihre ISMS-Reife nach CMMI-Modell.',
          priority: 'high',
          available: true,
          titleTag: 'ISO 27001 Maturity Assessment – ISMS Reifegrad prüfen',
          metaDescription: 'ISO 27001 ISMS Maturity Assessment: Bewerten Sie den Reifegrad Ihres Information Security Management Systems. ✓ CMMI-basiert ✓ Benchmarks ✓ Roadmap. Jetzt testen!',
          indexStatus: 'noindex',
          ...createCheckItems('isms-maturity', true)
        },
        {
          title: 'SOC 2 Readiness Assessment',
          url: '/assessment-center/soc2-readiness-assessment',
          description: 'Überprüfen Sie Ihre Bereitschaft für SOC 2 Type II Zertifizierung. Evaluieren Sie alle fünf Trust Service Principles systematisch.',
          priority: 'high',
          available: true,
          titleTag: 'SOC 2 Readiness Assessment – Zertifizierungsbereitschaft',
          metaDescription: 'SOC 2 Readiness Assessment: Prüfen Sie Ihre Bereitschaft für die SOC 2 Zertifizierung. ✓ Trust Services ✓ Gap-Analyse ✓ Audit-Roadmap. Jetzt testen!',
          indexStatus: 'noindex',
          ...createCheckItems('soc2-readiness', true)
        },
        {
          title: 'AI Risk Assessment',
          url: '/assessment-center/ai-risk-assessment',
          description: 'Bewerten Sie Risiken Ihrer KI-Systeme nach EU AI Act. Klassifizierung, Risikobewertung und Maßnahmenplanung für konforme KI-Implementierung.',
          priority: 'high',
          available: true,
          titleTag: 'KI-Risiko Assessment – EU AI Act Bewertung',
          metaDescription: 'EU AI Act Risk Assessment: Bewerten Sie das Risiko Ihres KI-Systems nach EU AI Act. ✓ Risikoeinstufung ✓ Compliance-Check ✓ Handlungsempfehlungen. Jetzt testen!',
          indexStatus: 'noindex',
          ...createCheckItems('ai-risk-assessment', true)
        },
        {
          title: 'Algorithmic Impact Assessment',
          url: '/assessment-center/algorithmic-impact-assessment',
          description: 'Folgenabschätzung für algorithmische Entscheidungssysteme. Analysieren Sie Auswirkungen auf Betroffene, Fairness und potenzielle Diskriminierungsrisiken.',
          priority: 'high',
          available: true,
          titleTag: 'Algorithmic Impact Assessment – Folgenabschätzung',
          metaDescription: 'Algorithmic Impact Assessment: Bewerten Sie gesellschaftliche Auswirkungen algorithmischer Systeme. ✓ Bias-Prüfung ✓ Fairness ✓ Transparenz. Jetzt testen!',
          indexStatus: 'noindex',
          ...createCheckItems('algorithmic-impact', true)
        },
        {
          title: 'AI Governance Check',
          url: '/assessment-center/ai-governance-check',
          description: 'Überprüfen Sie Ihre KI-Governance-Strukturen. Von Richtlinien über Verantwortlichkeiten bis zu Monitoring-Prozessen für verantwortungsvolle KI.',
          priority: 'high',
          available: true,
          titleTag: 'KI-Governance Check – Reifegrad-Bewertung',
          metaDescription: 'AI Governance Check: Bewerten Sie Ihre KI-Governance-Strukturen. ✓ Verantwortungsvolle KI ✓ Reifegrad-Analyse ✓ Handlungsempfehlungen. Jetzt testen!',
          indexStatus: 'noindex',
          ...createCheckItems('ai-governance', true)
        }
      ]
    },
    {
      id: 'knowledge',
      icon: '📚',
      title: 'Wissen',
      pages: [
        {
          title: 'Wissen Übersicht',
          url: '/wissen',
          description: 'Ihre zentrale Compliance-Wissensdatenbank. Zugriff auf Guides, Best Practices, Vorlagen und aktuelle Informationen zu allen relevanten Compliance-Themen.',
          priority: 'high',
          available: true,
          titleTag: 'Wissen – Compliance-Wissensdatenbank & Guides',
          metaDescription: 'Compliance-Wissensdatenbank: DSGVO, ISO 27001, EU AI Act Guides. ✓ Best Practices ✓ Vorlagen ✓ Aktuelle Informationen. Jetzt Wissen erweitern!',
          indexStatus: 'index',
          ...createCheckItems('knowledge-overview', true)
        },
        {
          title: 'DSGVO Wissen',
          url: '/wissen/dsgvo',
          description: 'Umfassendes DSGVO-Kompendium. Von Grundlagen über Betroffenenrechte bis zu komplexen Themen wie internationale Datentransfers und Auftragsverarbeitung.',
          priority: 'high',
          available: true,
          titleTag: 'DSGVO Wissen – Kompendium & Praxis-Guide',
          metaDescription: 'DSGVO-Wissen kompakt: Grundlagen, Betroffenenrechte, Verarbeitungsverzeichnis, TOMs. ✓ Praxisnahe Guides ✓ Vorlagen ✓ Aktuelle Rechtsprechung. Jetzt lernen!',
          indexStatus: 'index',
          ...createCheckItems('dsgvo-knowledge', true)
        },
        {
          title: 'KI Compliance',
          url: '/wissen/ki-compliance',
          description: 'Alles zu KI und Datenschutz. EU AI Act, algorithmische Transparenz, Bias-Vermeidung und ethische KI-Entwicklung für compliant AI-Systeme.',
          priority: 'high',
          available: true,
          titleTag: 'KI Compliance – EU AI Act & Datenschutz Guide',
          metaDescription: 'KI-Compliance Wissen: EU AI Act, algorithmische Transparenz, Bias-Vermeidung, ethische KI. ✓ Praxisguides ✓ Checklisten ✓ Expertenrat. Jetzt KI-konform werden!',
          indexStatus: 'index',
          ...createCheckItems('ki-compliance-knowledge', true)
        },
        {
          title: 'Cybersecurity',
          url: '/wissen/cybersecurity',
          description: 'IT-Sicherheit trifft Compliance. Verbinden Sie technische Sicherheitsmaßnahmen mit rechtlichen Anforderungen für ganzheitlichen Schutz.',
          priority: 'medium',
          available: true,
          titleTag: 'Cybersecurity – IT-Sicherheit & Compliance Wissen',
          metaDescription: 'Cybersecurity & Compliance: IT-Sicherheit, ISO 27001, NIS-2, Incident Response. ✓ Technische Maßnahmen ✓ Standards ✓ Best Practices. Jetzt sicher werden!',
          indexStatus: 'index',
          ...createCheckItems('cybersecurity-knowledge', true)
        },
        {
          title: 'DSGVO Leitfäden',
          url: '/wissen/dsgvo-leitfaeden',
          description: 'Praktische DSGVO-Guides für den Alltag. Schritt-für-Schritt-Anleitungen für häufige Compliance-Herausforderungen und bewährte Umsetzungsstrategien.',
          priority: 'medium',
          available: true,
          titleTag: 'DSGVO Leitfäden – Praktische Anleitungen & How-Tos',
          metaDescription: 'DSGVO-Leitfäden für die Praxis: Schritt-für-Schritt-Anleitungen, Checklisten, Vorlagen. ✓ DSGVO in 30 Tagen ✓ Verarbeitungsverzeichnis ✓ TOMs. Jetzt umsetzen!',
          indexStatus: 'index',
          ...createCheckItems('dsgvo-guides-knowledge', true)
        },
        {
          title: 'Zertifizierungen',
          url: '/wissen/zertifizierungen',
          description: 'Übersicht über alle Zertifizierungsstandards: ISO 27001, SOC 2, TISAX, DSG-EKD, KDG. Anforderungen, Vorbereitungsschritte und Best Practices.',
          priority: 'medium',
          available: true,
          titleTag: 'Zertifizierungen – Compliance Standards & Frameworks',
          metaDescription: 'Zertifizierungen Übersicht: ISO 27001, SOC 2, TISAX, DSG-EKD, KDG. ✓ Anforderungen ✓ Vorbereitung ✓ Best Practices ✓ Audit-ready. Jetzt zertifizieren!',
          indexStatus: 'index',
          ...createCheckItems('zertifizierungen-knowledge', true)
        },
        {
          title: 'Risk Management',
          url: '/wissen/risk-management',
          description: 'Systematisches Risikomanagement für Compliance. Identifikation, Bewertung und Behandlung von Datenschutz- und Sicherheitsrisiken.',
          priority: 'medium',
          available: true,
          titleTag: 'Risk Management – Compliance-Risiken systematisch managen',
          metaDescription: 'Risk Management für Compliance: Risiken identifizieren, bewerten, behandeln. ✓ ISO 31000 ✓ DSFA ✓ Risk Assessment ✓ KPIs. Jetzt Risiken beherrschen!',
          indexStatus: 'index',
          ...createCheckItems('risk-mgmt-knowledge', true)
        },
        {
          title: 'Compliance Frameworks',
          url: '/wissen/compliance-frameworks',
          description: 'Überblick über alle relevanten Compliance-Rahmenwerke. Vergleichen Sie Anforderungen, finden Sie Synergien und optimieren Sie Ihre Compliance-Strategie.',
          priority: 'medium',
          available: true,
          titleTag: 'Compliance Frameworks – Standards & Gesetze im Vergleich',
          metaDescription: 'Compliance-Frameworks im Überblick: ISO 27001, SOC 2, TISAX, DSGVO, EU AI Act. ✓ Anforderungen vergleichen ✓ Synergien nutzen ✓ Strategie optimieren. Jetzt informieren!',
          indexStatus: 'index',
          ...createCheckItems('frameworks-knowledge', true)
        }
      ]
    },
    {
      id: 'dsgvo-guides',
      icon: '📖',
      title: 'DSGVO Leitfäden',
      pages: [
        {
          title: 'DSGVO Grundlagen',
          url: '/wissen/leitfaden/dsgvo-grundlagen',
          description: 'Fundamentales DSGVO-Basiswissen verständlich erklärt. Prinzipien, Rechtsgrundlagen, Verantwortlichkeiten und die wichtigsten Konzepte der Datenschutz-Grundverordnung.',
          priority: 'high',
          available: true,
          titleTag: 'DSGVO Grundlagen – Basiswissen verständlich erklärt',
          metaDescription: 'DSGVO-Grundlagen für Einsteiger: 7 Grundsätze, Rechtsgrundlagen, Verantwortlichkeiten, Betroffenenrechte. ✓ Verständlich ✓ Praxisnah ✓ Mit Beispielen. Jetzt lernen!',
          indexStatus: 'index',
          ...createCheckItems('dsgvo-basics-guide', true)
        },
        {
          title: 'Website DSGVO',
          url: '/wissen/leitfaden/website-dsgvo',
          description: 'DSGVO-Compliance für Websites und Online-Dienste. Datenschutzerklärung, Cookie-Banner, Kontaktformulare und Tracking rechtssicher gestalten.',
          priority: 'high',
          available: true,
          titleTag: 'Website DSGVO-konform – 7 Schritte Anleitung',
          metaDescription: 'Website DSGVO-konform machen: 7-Schritte Anleitung. ✓ Datenschutzerklärung ✓ Cookie-Banner ✓ Kontaktformulare ✓ Analytics. Jetzt rechtssicher werden!',
          indexStatus: 'index',
          ...createCheckItems('website-dsgvo-guide', true)
        },
        {
          title: 'Data Breach Notfall',
          url: '/wissen/leitfaden/data-breach-notfall',
          description: 'Notfallplan für Datenschutzverletzungen. 72-Stunden-Frist, Meldewege, Dokumentation und Kommunikation bei Datenpannen professionell managen.',
          priority: 'high',
          available: true,
          titleTag: 'Data Breach Notfallplan – 72-Stunden Leitfaden DSGVO',
          metaDescription: 'Data Breach Notfallplan: Schritt-für-Schritt bei Datenpannen. ✓ 72-Stunden-Frist ✓ Meldepflichten ✓ Sofortmaßnahmen ✓ Kommunikation. DSGVO-konform handeln!',
          indexStatus: 'index',
          ...createCheckItems('data-breach-guide', true)
        },
        {
          title: 'DSGVO in 30 Tagen',
          url: '/wissen/leitfaden/dsgvo-30-tage',
          description: 'Express-Guide zur DSGVO-Compliance in einem Monat. Priorisierter Aktionsplan mit täglichen Aufgaben für schnelle Basis-Compliance.',
          priority: 'medium',
          available: true,
          titleTag: 'DSGVO in 30 Tagen – Express-Guide zur Compliance',
          metaDescription: 'DSGVO-Compliance in 30 Tagen erreichen: Priorisierter Aktionsplan mit täglichen Aufgaben. ✓ Express-Guide ✓ Sofort umsetzbar ✓ Basis-Compliance. Jetzt starten!',
          indexStatus: 'index',
          ...createCheckItems('dsgvo-30-days-guide', true)
        },
        {
          title: 'Verarbeitungsverzeichnis',
          url: '/wissen/leitfaden/verarbeitungsverzeichnis',
          description: 'Anleitung zur Erstellung eines rechtssicheren Verarbeitungsverzeichnisses. Vorlagen, Beispiele und Tipps für die vollständige Dokumentation aller Verarbeitungstätigkeiten.',
          priority: 'medium',
          available: true,
          titleTag: 'Verarbeitungsverzeichnis – DSGVO Anleitung & Vorlagen',
          metaDescription: 'Verarbeitungsverzeichnis nach Art. 30 DSGVO erstellen: Schritt-für-Schritt Anleitung, Vorlagen & Beispiele. ✓ Rechtssicher ✓ Vollständig ✓ Sofort einsetzbar. Jetzt umsetzen!',
          indexStatus: 'index',
          ...createCheckItems('processing-record-guide', true)
        },
        {
          title: 'Betroffenenrechte',
          url: '/wissen/leitfaden/betroffenenrechte',
          description: 'Umgang mit Rechten betroffener Personen. Auskunft, Löschung, Berichtigung, Datenportabilität - Prozesse und Fristen professionell managen.',
          priority: 'medium',
          available: true,
          titleTag: 'Betroffenenrechte – DSGVO Leitfaden für den Umgang',
          metaDescription: 'Betroffenenrechte nach DSGVO professionell managen: Auskunft, Löschung, Berichtigung, Datenportabilität. ✓ Prozesse ✓ Fristen ✓ Vorlagen. Jetzt rechtssicher umsetzen!',
          indexStatus: 'index',
          ...createCheckItems('data-subject-rights-guide', true)
        },
        {
          title: 'TOM Maßnahmen',
          url: '/wissen/leitfaden/tom-massnahmen',
          description: 'Technische und organisatorische Maßnahmen nach Art. 32 DSGVO. Verschlüsselung, Zugangskontrollen, Pseudonymisierung und weitere Schutzmaßnahmen implementieren.',
          priority: 'medium',
          available: true,
          titleTag: 'TOM Maßnahmen – DSGVO Art. 32 Technische & Organisatorische Maßnahmen',
          metaDescription: 'TOM-Maßnahmen nach Art. 32 DSGVO implementieren: Verschlüsselung, Zugangskontrollen, Pseudonymisierung. ✓ Schritt-für-Schritt ✓ Checklisten ✓ Vorlagen. Jetzt umsetzen!',
          indexStatus: 'index',
          ...createCheckItems('tom-measures-guide', true)
        },
        {
          title: 'DSFA Durchführung',
          url: '/wissen/leitfaden/dsfa-durchfuehrung',
          description: 'Datenschutz-Folgenabschätzung professionell durchführen. Wann ist sie nötig, wie läuft sie ab und welche Dokumentation ist erforderlich.',
          priority: 'medium',
          available: true,
          titleTag: 'DSFA Durchführung – Datenschutz-Folgenabschätzung Leitfaden',
          metaDescription: 'Datenschutz-Folgenabschätzung (DSFA) professionell durchführen: Wann nötig, wie umsetzen, Dokumentation. ✓ Schritt-für-Schritt ✓ Vorlagen ✓ Praxisbeispiele. Jetzt DSFA starten!',
          indexStatus: 'index',
          ...createCheckItems('dpia-guide', true)
        }
      ]
    },
    {
      id: 'branchen-wissen',
      icon: '🏢',
      title: 'Branchen Wissen',
      pages: [
        {
          title: 'Gesundheitswesen DSGVO',
          url: '/wissen/branchen/gesundheitswesen-dsgvo',
          description: 'DSGVO-Compliance im Gesundheitswesen: Patientendaten, Schweigepflicht, Forschung und digitale Gesundheitsdienste rechtssicher umsetzen.',
          priority: 'high',
          available: true,
          titleTag: 'Gesundheitswesen DSGVO – Patientendaten rechtssicher verarbeiten',
          metaDescription: 'DSGVO im Gesundheitswesen: Patientendatenschutz, Schweigepflicht, Forschung, eHealth. ✓ Praxisnahe Lösungen ✓ Rechtssicherheit ✓ Compliance-Checklisten.',
          indexStatus: 'index',
          ...createCheckItems('healthcare-dsgvo', true)
        },
        {
          title: 'Healthcare AI Compliance',
          url: '/wissen/branchen/healthcare-ai-compliance',
          description: 'KI-Systeme im Gesundheitswesen compliant einsetzen: Medizinische KI, EU AI Act, FDA-Regularien und Patientensicherheit.',
          priority: 'high',
          available: true,
          titleTag: 'Healthcare AI Compliance – Medizinische KI rechtssicher einsetzen',
          metaDescription: 'Healthcare AI Compliance: Medizinische KI, EU AI Act, FDA-Regularien, Patientensicherheit. ✓ Risikobewertung ✓ Zulassung ✓ Post-Market Surveillance.',
          indexStatus: 'index',
          ...createCheckItems('healthcare-ai', true)
        },
        {
          title: 'EdTech Privacy',
          url: '/wissen/branchen/edtech-privacy',
          description: 'Datenschutz in Bildungseinrichtungen: Schülerdaten, COPPA/FERPA-Compliance, Lernplattformen und digitale Bildungstools.',
          priority: 'medium',
          available: true,
          titleTag: 'EdTech Privacy – Bildungssektor Datenschutz',
          metaDescription: 'EdTech Datenschutz: Schülerdaten, COPPA/FERPA, Lernplattformen, digitale Bildung. ✓ Consent Management ✓ Age Verification ✓ Data Minimization.',
          indexStatus: 'index',
          ...createCheckItems('edtech-privacy', true)
        },
        {
          title: 'FinTech Compliance',
          url: '/wissen/branchen/fintech-compliance',
          description: 'Compliance in FinTech: PCI-DSS, PSD2, MiFID II, Geldwäschegesetz und Open Banking rechtssicher umsetzen.',
          priority: 'high',
          available: true,
          titleTag: 'FinTech Compliance – PCI DSS, PSD2 & Crypto Assets',
          metaDescription: 'Komplette FinTech Compliance-Lösungen: PCI DSS Level 1, PSD2-konforme APIs & sichere Crypto-Asset-Verwaltung. 99.99% Uptime, < 15 Min Incident Response.',
          indexStatus: 'index',
          ...createCheckItems('fintech-compliance', true)
        },
        {
          title: 'E-Commerce Privacy',
          url: '/wissen/branchen/ecommerce-privacy',
          description: 'Online-Shop Datenschutz: Kundendaten, Cookies, Newsletter-Marketing, Payment Processing und Cross-Border-Commerce.',
          priority: 'high',
          available: true,
          titleTag: 'E-Commerce Privacy – Cookie Consent & DSGVO Online-Shop',
          metaDescription: 'DSGVO-konforme E-Commerce Lösungen: Advanced Cookie Consent, Zahlungsdaten-Sicherheit & Customer Analytics. 78% mehr Conversions durch Privacy-by-Design.',
          indexStatus: 'index',
          ...createCheckItems('ecommerce-privacy', true)
        },
        {
          title: 'SaaS Privacy Design',
          url: '/wissen/branchen/saas-privacy-design',
          description: 'Privacy by Design für SaaS: Multi-Tenancy, Data Residency, Cloud Security und internationale Compliance.',
          priority: 'high',
          available: true,
          titleTag: 'SaaS Privacy by Design – DSGVO-native Development',
          metaDescription: 'Privacy-by-Design für SaaS: Zero-Trust Architecture, Data Minimization & GDPR-native APIs. 87% weniger Compliance-Kosten durch Privacy-First Development.',
          indexStatus: 'index',
          ...createCheckItems('saas-privacy', true)
        },
        {
          title: 'Industrie 4.0 Datenschutz',
          url: '/wissen/branchen/industrie-40-datenschutz',
          description: 'Datenschutz in der Smart Factory: IoT-Sensorik, Maschinendaten, Predictive Maintenance und Worker Privacy.',
          priority: 'medium',
          available: true,
          titleTag: 'Industrie 4.0 Datenschutz – Smart Factory Privacy',
          metaDescription: 'Industrie 4.0 Datenschutz: IoT-Sensorik, Maschinendaten, Predictive Maintenance, Worker Privacy. ✓ Edge Computing ✓ OT Security ✓ Data Anonymization.',
          indexStatus: 'index',
          ...createCheckItems('industrie40-privacy'),
          seoOptimized: { id: 'industrie40-privacy-seo', title: 'SEO Meta Tags & Struktur', completed: true }
        },
        {
          title: 'Automotive Datenschutz',
          url: '/wissen/branchen/automotive-datenschutz',
          description: 'Connected Car Compliance: Fahrzeugdaten, Telematics, UNECE WP.29, Over-the-Air Updates und autonomes Fahren.',
          priority: 'medium',
          available: true,
          titleTag: 'Automotive Datenschutz – Connected Car Compliance',
          metaDescription: 'Automotive Datenschutz: Fahrzeugdaten, Telematics, UNECE WP.29, OTA-Updates, autonomes Fahren. ✓ In-Vehicle Privacy ✓ V2X Compliance ✓ Cybersecurity.',
          indexStatus: 'index',
          ...createCheckItems('automotive-privacy'),
          seoOptimized: { id: 'automotive-privacy-seo', title: 'SEO Meta Tags & Struktur', completed: true }
        },
        {
          title: 'Smart Grid Compliance',
          url: '/wissen/branchen/smart-grid-compliance',
          description: 'Energiesektor Compliance: Smart Meter, Verbrauchsdaten, Netzstabilität und kritische Infrastruktur.',
          priority: 'medium',
          available: true,
          titleTag: 'Smart Grid Compliance – Energiesektor Datenschutz',
          metaDescription: 'Smart Grid Compliance: Smart Meter, Verbrauchsdaten, Netzstabilität, kritische Infrastruktur. ✓ NIS-2 Compliance ✓ Data Minimization ✓ Grid Security.',
          indexStatus: 'index',
          ...createCheckItems('smart-grid'),
          seoOptimized: { id: 'smart-grid-seo', title: 'SEO Meta Tags & Struktur', completed: true }
        },
        {
          title: 'Pharma Compliance',
          url: '/wissen/branchen/pharma-compliance',
          description: 'Pharmaceutical Compliance: GxP, 21 CFR Part 11, EU GMP, Clinical Trial Data und Pharmacovigilance.',
          priority: 'medium',
          available: true,
          titleTag: 'Pharma Compliance – Pharmaceutical Data Governance',
          metaDescription: 'Pharma Compliance: GxP, 21 CFR Part 11, EU GMP, Clinical Trials, Pharmacovigilance. ✓ Data Integrity ✓ Electronic Records ✓ Audit Trail.',
          indexStatus: 'index',
          ...createCheckItems('pharma-compliance'),
          seoOptimized: { id: 'pharma-compliance-seo', title: 'SEO Meta Tags & Struktur', completed: true }
        },
        {
          title: 'Produktion Datenschutz',
          url: '/wissen/branchen/produktion',
          description: 'Datenschutz in der Produktion: Mitarbeiterdaten, Qualitätssicherung, Supply Chain und Fertigungsdaten.',
          priority: 'medium',
          available: true,
          titleTag: 'Produktion Datenschutz – Manufacturing Privacy',
          metaDescription: 'Produktion Datenschutz: Mitarbeiterdaten, Qualitätssicherung, Supply Chain, Fertigungsdaten. ✓ Worker Monitoring ✓ Quality Data ✓ Supplier Compliance.',
          indexStatus: 'index',
          ...createCheckItems('manufacturing-privacy'),
          seoOptimized: { id: 'manufacturing-privacy-seo', title: 'SEO Meta Tags & Struktur', completed: true }
        },
        {
          title: 'Travel Compliance',
          url: '/wissen/branchen/travel-compliance',
          description: 'Reisebranche Compliance: Buchungsdaten, PNR-Datensätze, Hotel-Guest Privacy und Cross-Border Data Flows.',
          priority: 'medium',
          available: true,
          titleTag: 'Travel Compliance DSGVO - Datenschutz für Reiseplattformen',
          metaDescription: 'DSGVO-konforme Lösungen für Travel & Tourism: ✓ Buchungsdaten ✓ Location Tracking ✓ Payment Compliance. Jetzt Guide lesen!',
          indexStatus: 'index',
          ...createCheckItems('travel-compliance', {
            titleTag: true,
            metaTag: true,
            h1: true,
            headingStructure: true,
            internalLinks: true,
            mobileOptimization: true,
            breadcrumbs: true,
            contentQuality: true,
            schemaMarkup: true
          })
        },
        {
          title: 'InsurTech Compliance',
          url: '/wissen/branchen/insurtech-compliance',
          description: 'Versicherungstech Compliance: Telematics, Usage-Based Insurance, Claims Processing und Actuarial Data.',
          priority: 'medium',
          available: true,
          titleTag: 'InsurTech Compliance DSGVO - KI & Digitale Versicherung',
          metaDescription: 'InsurTech DSGVO Guide: ✓ KI-Compliance ✓ IDD-Konformität ✓ AI Act. Praxisleitfaden für digitale Versicherer. Jetzt lesen!',
          indexStatus: 'index',
          ...createCheckItems('insurtech-compliance', {
            titleTag: true,
            metaTag: true,
            h1: true,
            headingStructure: true,
            internalLinks: true,
            mobileOptimization: true,
            breadcrumbs: true,
            contentQuality: true,
            schemaMarkup: true
          })
        },
        {
          title: 'PropTech Compliance',
          url: '/wissen/branchen/proptech-compliance',
          description: 'Immobilien-Tech Compliance: Mieter-Screening, Smart Building Data, Property Management und Facility Data.',
          priority: 'medium',
          available: true,
          titleTag: 'PropTech Compliance DSGVO - Smart Building Datenschutz',
          metaDescription: 'PropTech DSGVO-Guide: ✓ Smart Buildings ✓ IoT-Sicherheit ✓ Mieterdaten. Praxisleitfaden für digitale Immobilien. Jetzt lesen!',
          indexStatus: 'index',
          ...createCheckItems('proptech-compliance', {
            titleTag: true,
            metaTag: true,
            h1: true,
            headingStructure: true,
            internalLinks: true,
            mobileOptimization: true,
            breadcrumbs: true,
            contentQuality: true,
            schemaMarkup: true
          })
        },
        {
          title: 'Logistics Compliance',
          url: '/wissen/branchen/logistics-compliance',
          description: 'Logistik Compliance: GPS-Tracking, Supply Chain Visibility, Driver Privacy und Last-Mile Delivery.',
          priority: 'medium',
          available: true,
          titleTag: 'Logistics Compliance DSGVO – Supply Chain Datenschutz 2024',
          metaDescription: 'DSGVO-konforme Logistik: Real-Time Tracking, internationale Datentransfers & Supply Chain Compliance. ✓ Praktische Lösungen ✓ TOM-Checklisten ✓ Sofort umsetzbar',
          indexStatus: 'index',
          ...{
            mobileReady: { id: 'logistics-compliance-mobile', title: 'Mobile Responsive Design', completed: true },
            seoOptimized: { id: 'logistics-compliance-seo', title: 'SEO Meta Tags & Struktur', completed: true },
            contentReady: { id: 'logistics-compliance-content', title: 'Inhalte vollständig & aktuell', completed: true },
            performanceOptimized: { id: 'logistics-compliance-perf', title: 'Performance optimiert', completed: true },
            accessibilityCompliant: { id: 'logistics-compliance-a11y', title: 'Barrierefreiheit geprüft', completed: true }
          }
        },
        {
          title: 'Datenschutz Pflege',
          url: '/wissen/branchen/datenschutz-pflege',
          description: 'Datenschutz in Pflegeeinrichtungen: Bewohnerdaten, Pflegedokumentation, Angehörigen-Info und digitale Pflegesysteme.',
          priority: 'medium',
          available: true,
          titleTag: 'Datenschutz Pflege DSGVO – Praxis-Guide für Pflegeheime 2024',
          metaDescription: 'DSGVO für Pflegeeinrichtungen: ✓ Bewohnerdaten sicher verwalten ✓ Digitale Pflegedokumentation ✓ TOM-Checklisten ✓ Einwilligung bei Demenz. Jetzt Guide lesen!',
          indexStatus: 'index',
          ...{
            mobileReady: { id: 'pflege-privacy-mobile', title: 'Mobile Responsive Design', completed: true },
            seoOptimized: { id: 'pflege-privacy-seo', title: 'SEO Meta Tags & Struktur', completed: true },
            contentReady: { id: 'pflege-privacy-content', title: 'Inhalte vollständig & aktuell', completed: true },
            performanceOptimized: { id: 'pflege-privacy-perf', title: 'Performance optimiert', completed: true },
            accessibilityCompliant: { id: 'pflege-privacy-a11y', title: 'Barrierefreiheit geprüft', completed: true }
          }
        },
        {
          title: 'Datenschutz Arztpraxis',
          url: '/wissen/branchen/datenschutz-arztpraxis',
          description: 'DSGVO in der Arztpraxis: Patientendaten, Praxisverwaltung, Terminbuchung und Telematikinfrastruktur.',
          priority: 'medium',
          available: true,
          titleTag: 'Datenschutz Arztpraxis DSGVO – Praxis-Guide für Ärzte 2024',
          metaDescription: 'DSGVO für Arztpraxen: ✓ Patientendaten sicher verwalten ✓ Einwilligungen korrekt ✓ TOM-Checklisten ✓ Schweigepflicht digital. Jetzt Praxis-Guide lesen!',
          indexStatus: 'index',
          ...{
            mobileReady: { id: 'arztpraxis-privacy-mobile', title: 'Mobile Responsive Design', completed: true },
            seoOptimized: { id: 'arztpraxis-privacy-seo', title: 'SEO Meta Tags & Struktur', completed: true },
            contentReady: { id: 'arztpraxis-privacy-content', title: 'Inhalte vollständig & aktuell', completed: true },
            performanceOptimized: { id: 'arztpraxis-privacy-perf', title: 'Performance optimiert', completed: true },
            accessibilityCompliant: { id: 'arztpraxis-privacy-a11y', title: 'Barrierefreiheit geprüft', completed: true }
          }
        },
        {
          title: 'Datenschutz Kindergarten',
          url: '/wissen/branchen/datenschutz-kindergarten',
          description: 'DSGVO im Kindergarten: Kinderdaten, Eltern-Consent, Foto-/Videoaufnahmen und pädagogische Dokumentation.',
          priority: 'medium',
          available: true,
          titleTag: 'Datenschutz Kindergarten DSGVO – Kita-Guide 2024',
          metaDescription: 'DSGVO für Kindergärten: ✓ Kinderdaten schützen ✓ Foto-Einwilligungen ✓ Elternkommunikation ✓ Praktische Checklisten. Jetzt Kita DSGVO-konform machen!',
          indexStatus: 'index',
          ...{
            mobileReady: { id: 'kindergarten-privacy-mobile', title: 'Mobile Responsive Design', completed: true },
            seoOptimized: { id: 'kindergarten-privacy-seo', title: 'SEO Meta Tags & Struktur', completed: true },
            contentReady: { id: 'kindergarten-privacy-content', title: 'Inhalte vollständig & aktuell', completed: true },
            performanceOptimized: { id: 'kindergarten-privacy-perf', title: 'Performance optimiert', completed: true },
            accessibilityCompliant: { id: 'kindergarten-privacy-a11y', title: 'Barrierefreiheit geprüft', completed: true }
          }
        },
        {
          title: 'DSGVO Vermieter',
          url: '/wissen/branchen/dsgvo-vermieter',
          description: 'DSGVO für Vermieter: Mieter-Screening, Mieterdaten, Hausverwaltung und Immobilienbewirtschaftung.',
          priority: 'medium',
          available: true,
          titleTag: 'DSGVO Vermieter – Datenschutz Immobilien Guide 2024',
          metaDescription: 'DSGVO für Vermieter: ✓ Mieterdaten sicher verwalten ✓ Datenschutzerklärung ✓ TOM-Checklisten ✓ Bußgelder vermeiden. Jetzt DSGVO-konform vermieten!',
          indexStatus: 'index',
          ...{
            mobileReady: { id: 'vermieter-dsgvo-mobile', title: 'Mobile Responsive Design', completed: true },
            seoOptimized: { id: 'vermieter-dsgvo-seo', title: 'SEO Meta Tags & Struktur', completed: true },
            contentReady: { id: 'vermieter-dsgvo-content', title: 'Inhalte vollständig & aktuell', completed: true },
            performanceOptimized: { id: 'vermieter-dsgvo-perf', title: 'Performance optimiert', completed: true },
            accessibilityCompliant: { id: 'vermieter-dsgvo-a11y', title: 'Barrierefreiheit geprüft', completed: true }
          }
        },
        {
          title: 'DSGVO Vereine',
          url: '/wissen/branchen/dsgvo-vereine',
          description: 'DSGVO für Vereine: Mitgliederdaten, Veranstaltungen, Newsletter und ehrenamtliche Tätigkeit.',
          priority: 'medium',
          available: true,
          titleTag: 'DSGVO Vereine – Datenschutz im Vereinswesen 2024',
          metaDescription: 'DSGVO für Vereine: ✓ Mitgliederdaten verwalten ✓ Newsletter rechtssicher ✓ Veranstaltungsfotos ✓ Praktische Checklisten. Jetzt Verein DSGVO-konform machen!',
          indexStatus: 'index',
          ...{
            mobileReady: { id: 'vereine-dsgvo-mobile', title: 'Mobile Responsive Design', completed: true },
            seoOptimized: { id: 'vereine-dsgvo-seo', title: 'SEO Meta Tags & Struktur', completed: true },
            contentReady: { id: 'vereine-dsgvo-content', title: 'Inhalte vollständig & aktuell', completed: true },
            performanceOptimized: { id: 'vereine-dsgvo-perf', title: 'Performance optimiert', completed: true },
            accessibilityCompliant: { id: 'vereine-dsgvo-a11y', title: 'Barrierefreiheit geprüft', completed: true }
          }
        },
        {
          title: 'Datenschutz Betriebsrat',
          url: '/wissen/branchen/datenschutz-betriebsrat',
          description: 'Datenschutz im Betriebsrat: Mitarbeiterdaten, Mitbestimmung, Beratungsgespräche und interne Kommunikation.',
          priority: 'medium',
          available: true,
          titleTag: 'Datenschutz für Betriebsräte – BetrVG & DSGVO Compliance',
          metaDescription: 'Rechtssichere Betriebsratsarbeit: BetrVG-Mitbestimmung datenschutzkonform umsetzen & Compliance sichern. Jetzt beraten lassen!',
          indexStatus: 'index',
          mobileReady: { id: 'betriebsrat-privacy-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'betriebsrat-privacy-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'betriebsrat-privacy-content', title: 'Inhalte vollständig & aktuell', completed: true },
          performanceOptimized: { id: 'betriebsrat-privacy-perf', title: 'Performance optimiert', completed: true },
          accessibilityCompliant: { id: 'betriebsrat-privacy-a11y', title: 'Barrierefreiheit geprüft', completed: true }
        },
        {
          title: 'Datenschutz Homeoffice',
          url: '/wissen/branchen/datenschutz-homeoffice',
          description: 'Homeoffice Datenschutz: Remote Work Security, BYOD-Policy, Monitoring und Work-Life-Balance.',
          priority: 'high',
          available: true,
          titleTag: 'Datenschutz Homeoffice – DSGVO-konforme Remote Work Lösungen',
          metaDescription: 'DSGVO-konformes Homeoffice: Sichere Remote-Arbeit mit Datenschutz-Compliance. Technische & organisatorische Maßnahmen. Jetzt informieren!',
          indexStatus: 'index',
          mobileReady: { id: 'homeoffice-privacy-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'homeoffice-privacy-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'homeoffice-privacy-content', title: 'Inhalte vollständig & aktuell', completed: true },
          performanceOptimized: { id: 'homeoffice-privacy-perf', title: 'Performance optimiert', completed: true },
          accessibilityCompliant: { id: 'homeoffice-privacy-a11y', title: 'Barrierefreiheit geprüft', completed: true }
        }
      ]
    },
    {
      id: 'ki-datenschutz',
      icon: '🤖',
      title: 'KI Datenschutz',
      pages: [
        {
          title: 'KI Risikoklassifizierung',
          url: '/wissen/ki-datenschutz/risikoklassifizierung',
          description: 'EU AI Act Risikoklassifizierung: High-Risk AI, Limited Risk, Minimal Risk und verbotene KI-Praktiken systematisch bewerten.',
          priority: 'high',
          available: true,
          titleTag: 'KI-Risikoklassifizierung nach EU AI Act – Compliance Guide',
          metaDescription: 'Verstehen Sie die 4 Risikokategorien des EU AI Acts. Praktischer Guide für Compliance-Anforderungen Ihres KI-Systems.',
          indexStatus: 'index',
          mobileReady: { id: 'ki-risk-classification-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'ki-risk-classification-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'ki-risk-classification-content', title: 'Inhalte vollständig & aktuell', completed: true },
          performanceOptimized: { id: 'ki-risk-classification-perf', title: 'Performance optimiert', completed: true },
          accessibilityCompliant: { id: 'ki-risk-classification-a11y', title: 'Barrierefreiheit geprüft', completed: true }
        },
        {
          title: 'Algorithmic Impact Assessment',
          url: '/wissen/ki-datenschutz/algorithmic-impact-assessment',
          description: 'Systematische Bewertung von KI-Auswirkungen: Fairness, Transparenz, Verantwortlichkeit und gesellschaftliche Folgen.',
          priority: 'high',
          available: true,
          titleTag: 'Algorithmic Impact Assessment – DSGVO & EU AI Act Toolkit',
          metaDescription: 'Systematische Bewertung von KI-Algorithmen nach DSGVO Art. 35 und EU AI Act. Templates und Frameworks für Ihr Impact Assessment.',
          indexStatus: 'index',
          mobileReady: { id: 'algorithmic-impact-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'algorithmic-impact-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'algorithmic-impact-content', title: 'Inhalte vollständig & aktuell', completed: true },
          performanceOptimized: { id: 'algorithmic-impact-perf', title: 'Performance optimiert', completed: true },
          accessibilityCompliant: { id: 'algorithmic-impact-a11y', title: 'Barrierefreiheit geprüft', completed: true }
        },
        {
          title: 'Privacy Preserving AI',
          url: '/wissen/ki-datenschutz/privacy-preserving-ai',
          description: 'Datenschutzfreundliche KI-Entwicklung: Differential Privacy, Homomorphic Encryption und Secure Multi-Party Computation.',
          priority: 'high',
          available: true,
          titleTag: 'Privacy-Preserving AI – Datenschutzfreundliche KI-Lösungen',
          metaDescription: '6 Privacy-Preserving AI Technologien: Differential Privacy bis Homomorphic Encryption. Praxis-Guide für datenschutzkonforme KI-Systeme.',
          indexStatus: 'index',
          mobileReady: { id: 'privacy-preserving-ai-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'privacy-preserving-ai-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'privacy-preserving-ai-content', title: 'Inhalte vollständig & aktuell', completed: true },
          performanceOptimized: { id: 'privacy-preserving-ai-perf', title: 'Performance optimiert', completed: true },
          accessibilityCompliant: { id: 'privacy-preserving-ai-a11y', title: 'Barrierefreiheit geprüft', completed: true }
        },
        {
          title: 'Federated Learning',
          url: '/wissen/ki-datenschutz/federated-learning',
          description: 'Federated Learning für Privacy: Dezentrales Lernen ohne zentrale Datenspeicherung und Edge AI Deployment.',
          priority: 'medium',
          available: true,
          titleTag: 'Federated Learning – Dezentrales Machine Learning',
          metaDescription: 'Federated Learning: Dezentrales ML ohne zentrale Datenspeicherung. ✓ Edge AI ✓ Privacy by Design ✓ On-Device Learning ✓ Model Aggregation.',
          indexStatus: 'index',
          mobileReady: { id: 'federated-learning-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'federated-learning-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'federated-learning-content', title: 'Inhalte vollständig & aktuell', completed: true },
          performanceOptimized: { id: 'federated-learning-perf', title: 'Performance optimiert', completed: true },
          accessibilityCompliant: { id: 'federated-learning-a11y', title: 'Barrierefreiheit geprüft', completed: true }
        },
        {
          title: 'Financial AI Compliance',
          url: '/wissen/ki-datenschutz/financial-ai-compliance',
          description: 'KI im Finanzsektor: Model Risk Management, Explainable AI für Kreditentscheidungen und algorithmische Transparenz.',
          priority: 'high',
          available: true,
          titleTag: 'Financial AI Compliance – Finanz-KI Regulierung',
          metaDescription: 'Financial AI Compliance: Model Risk Management, Explainable AI, Kreditentscheidungen, algorithmische Transparenz. ✓ Fair Lending ✓ Model Validation ✓ Bias Testing.',
          indexStatus: 'index',
          mobileReady: { id: 'financial-ai-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'financial-ai-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'financial-ai-content', title: 'Inhalte vollständig & aktuell', completed: true },
          performanceOptimized: { id: 'financial-ai-perf', title: 'Performance optimiert', completed: false },
          accessibilityCompliant: { id: 'financial-ai-a11y', title: 'Barrierefreiheit geprüft', completed: false }
        },
        {
          title: 'HR AI Compliance',
          url: '/wissen/ki-datenschutz/hr-ai-compliance',
          description: 'KI im Personalwesen: Recruiting AI, Performance Monitoring, Bias-freie Personalentscheidungen und Mitarbeiter-Privacy.',
          priority: 'high',
          available: true,
          titleTag: 'HR AI Compliance – Personalwesen KI-Compliance',
          metaDescription: 'HR AI Compliance: Recruiting AI, Performance Monitoring, Bias-freie Entscheidungen, Mitarbeiter-Privacy. ✓ Fair Hiring ✓ Employee Rights ✓ Algorithmic Transparency.',
          indexStatus: 'index',
          mobileReady: { id: 'hr-ai-compliance-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'hr-ai-compliance-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'hr-ai-compliance-content', title: 'Inhalte vollständig & aktuell', completed: true },
          performanceOptimized: { id: 'hr-ai-compliance-perf', title: 'Performance optimiert', completed: false },
          accessibilityCompliant: { id: 'hr-ai-compliance-a11y', title: 'Barrierefreiheit geprüft', completed: false }
        },
        {
          title: 'Model Privacy Attacks',
          url: '/wissen/ki-datenschutz/model-privacy-attacks',
          description: 'KI-Modell Sicherheit: Membership Inference, Model Inversion, Property Inference und Abwehrstrategien.',
          priority: 'medium',
          available: true,
          titleTag: 'Model Privacy Attacks – KI-Modell Sicherheit',
          metaDescription: 'Model Privacy Attacks: Membership Inference, Model Inversion, Property Inference. ✓ Attack Vectors ✓ Defense Strategies ✓ Privacy Testing ✓ Model Hardening.',
          indexStatus: 'index',
          ...createCheckItems('model-privacy-attacks', true)
        },
        {
          title: 'Data Minimization Guide',
          url: '/wissen/ki-datenschutz/data-minimization',
          description: 'Datenminimierung in KI: Feature Selection, Synthetic Data, Data Reduction und Privacy-Utility Trade-offs.',
          priority: 'high',
          available: true,
          titleTag: 'Data Minimization – KI-Datenminimierung Guide',
          metaDescription: 'Data Minimization für KI: Feature Selection, Synthetic Data, Data Reduction, Privacy-Utility Balance. ✓ DSGVO Compliance ✓ Efficient ML ✓ Privacy Enhancement.',
          indexStatus: 'index',
          ...createCheckItems('data-minimization', true)
        },
        {
          title: 'Explainable AI',
          url: '/wissen/ki-datenschutz/explainable-ai',
          description: 'Erklärbare KI: LIME, SHAP, Model Interpretability und algorithmische Transparenz für Compliance.',
          priority: 'high',
          available: true,
          titleTag: 'Explainable AI – Erklärbare KI für Compliance',
          metaDescription: 'Explainable AI: LIME, SHAP, Model Interpretability, algorithmische Transparenz. ✓ AI Explainability ✓ Decision Transparency ✓ Regulatory Compliance.',
          indexStatus: 'index',
          ...createCheckItems('explainable-ai', true)
        },
        {
          title: 'Privacy by Design AI',
          url: '/wissen/ki-datenschutz/privacy-by-design-ai',
          description: 'Privacy by Design für KI-Systeme: Proaktiver Datenschutz, Privacy Engineering und Built-in Privacy.',
          priority: 'high',
          available: true,
          titleTag: 'Privacy by Design AI – Datenschutz in KI-Architektur',
          metaDescription: 'Privacy by Design AI: Proaktiver Datenschutz, Privacy Engineering, Built-in Privacy. ✓ Privacy Patterns ✓ Secure Architecture ✓ Data Protection by Default.',
          indexStatus: 'index',
          ...createCheckItems('privacy-by-design-ai'),
          seoOptimized: { id: 'privacy-by-design-ai-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          mobileReady: { id: 'privacy-by-design-ai-mobile', title: 'Mobile Responsive Design', completed: true }
        },
        {
          title: 'KI Einwilligungsmanagement',
          url: '/wissen/ki-datenschutz/ki-einwilligungsmanagement',
          description: 'Consent Management für KI: Granulare Einwilligung, Dynamic Consent und KI-spezifische Aufklärung.',
          priority: 'high',
          available: true,
          titleTag: 'KI Einwilligungsmanagement – AI Consent Management',
          metaDescription: 'KI Einwilligungsmanagement: Granulare Einwilligung, Dynamic Consent, KI-Aufklärung. ✓ AI-specific Consent ✓ Transparent Information ✓ User Control.',
          indexStatus: 'index',
          ...createCheckItems('ki-consent-management'),
          seoOptimized: { id: 'ki-consent-management-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          mobileReady: { id: 'ki-consent-management-mobile', title: 'Mobile Responsive Design', completed: true }
        },
        {
          title: 'Automated Decision Making',
          url: '/wissen/ki-datenschutz/automated-decision-making',
          description: 'Automatisierte Entscheidungsfindung: Art. 22 DSGVO, Human-in-the-Loop, Widerspruchsrechte und Profiling.',
          priority: 'high',
          available: true,
          titleTag: 'Automated Decision Making – Art. 22 DSGVO Compliance',
          metaDescription: 'Automated Decision Making: Art. 22 DSGVO, Human-in-the-Loop, Widerspruchsrechte, Profiling. ✓ ADM Compliance ✓ Human Oversight ✓ Contestability.',
          indexStatus: 'index',
          ...createCheckItems('automated-decision-making'),
          seoOptimized: { id: 'automated-decision-making-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          mobileReady: { id: 'automated-decision-making-mobile', title: 'Mobile Responsive Design', completed: true }
        }
      ]
    },
    {
      id: 'crisis-management',
      icon: '🚨',
      title: 'Krisenmanagement',
      pages: [
        {
          title: 'Data Breach 72h Guide',
          url: '/wissen/krisenmanagement/data-breach-72h',
          description: 'Data Breach Response in 72 Stunden: Sofortmaßnahmen, Meldepflichten, Betroffenenbenachrichtigung und Schadensbegrenzung.',
          priority: 'high',
          available: true,
          titleTag: 'Data Breach 72h – DSGVO Datenpanne Meldung',
          metaDescription: 'Data Breach 72h Response: Sofortmaßnahmen, DSGVO-Meldung, Betroffenenbenachrichtigung, Schadensbegrenzung. ✓ Incident Response ✓ Notification Templates ✓ Legal Compliance.',
          indexStatus: 'index',
          ...createCheckItems('data-breach-72h', true)
        },
        {
          title: 'Security Incident Guide',
          url: '/wissen/krisenmanagement/security-incident',
          description: 'IT-Sicherheitsvorfälle managen: Incident Response, Forensik, Business Continuity und Stakeholder-Kommunikation.',
          priority: 'high',
          available: true,
          titleTag: 'Security Incident – IT-Sicherheitsvorfall Response',
          metaDescription: 'Security Incident Management: Incident Response, Forensik, Business Continuity, Kommunikation. ✓ CSIRT Processes ✓ Evidence Preservation ✓ Recovery Planning.',
          indexStatus: 'index',
          ...createCheckItems('security-incident', true)
        },
        {
          title: 'Communication Templates',
          url: '/wissen/krisenmanagement/communication-templates',
          description: 'Krisenkommunikation: Vorlagen für Datenpannen, interne Kommunikation, Pressemitteilungen und Kundenkommunikation.',
          priority: 'medium',
          available: true,
          titleTag: 'Communication Templates – Krisenkommunikation Vorlagen',
          metaDescription: 'Krisenkommunikation Templates: Datenpanne-Meldung, interne Kommunikation, Presse, Kunden. ✓ Ready-to-use Templates ✓ Multi-Channel ✓ Stakeholder-specific.',
          indexStatus: 'index',
          ...createCheckItems('communication-templates', true)
        },
        {
          title: 'Compliance Audit Emergency',
          url: '/wissen/krisenmanagement/compliance-audit-emergency',
          description: 'Notfall-Audit-Response: Aufsichtsbehörden-Anfragen, Dokumentenvorbereitung und rechtliche Verteidigung.',
          priority: 'high',
          available: true,
          titleTag: 'Compliance Audit Emergency – Aufsichtsbehörden Response',
          metaDescription: 'Compliance Audit Emergency: Aufsichtsbehörden-Anfragen, Dokumentenvorbereitung, rechtliche Verteidigung. ✓ Regulatory Response ✓ Document Preparation ✓ Legal Strategy.',
          indexStatus: 'index',
          mobileReady: { id: 'audit-emergency-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'audit-emergency-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'audit-emergency-content', title: 'Inhalte vollständig & aktuell', completed: false },
          performanceOptimized: { id: 'audit-emergency-perf', title: 'Performance optimiert', completed: false },
          accessibilityCompliant: { id: 'audit-emergency-a11y', title: 'Barrierefreiheit geprüft', completed: false }
        },
        {
          title: 'Media Crisis Guide',
          url: '/wissen/krisenmanagement/media-crisis',
          description: 'Medien-Krisenkommunikation: Pressestrategie, Social Media Response, Reputationsmanagement und Thought Leadership.',
          priority: 'medium',
          available: true,
          titleTag: 'Media Crisis – Medien-Krisenkommunikation Guide',
          metaDescription: 'Media Crisis Management: Pressestrategie, Social Media Response, Reputationsmanagement, Thought Leadership. ✓ PR Strategy ✓ Crisis Communication ✓ Brand Protection.',
          indexStatus: 'index',
          mobileReady: { id: 'media-crisis-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'media-crisis-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'media-crisis-content', title: 'Inhalte vollständig & aktuell', completed: false },
          performanceOptimized: { id: 'media-crisis-perf', title: 'Performance optimiert', completed: false },
          accessibilityCompliant: { id: 'media-crisis-a11y', title: 'Barrierefreiheit geprüft', completed: false }
        },
        {
          title: 'Vendor Data Breach',
          url: '/wissen/krisenmanagement/vendor-data-breach',
          description: 'Lieferanten-Datenpannen: Third-Party Incident Response, Vertragsmanagement und Supply Chain Security.',
          priority: 'high',
          available: true,
          titleTag: 'Vendor Data Breach – Lieferanten-Datenpanne Response',
          metaDescription: 'Vendor Data Breach: Third-Party Incident Response, Vertragsmanagement, Supply Chain Security. ✓ Vendor Management ✓ Contract Enforcement ✓ Risk Assessment.',
          indexStatus: 'index',
          mobileReady: { id: 'vendor-data-breach-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'vendor-data-breach-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'vendor-data-breach-content', title: 'Inhalte vollständig & aktuell', completed: false },
          performanceOptimized: { id: 'vendor-data-breach-perf', title: 'Performance optimiert', completed: false },
          accessibilityCompliant: { id: 'vendor-data-breach-a11y', title: 'Barrierefreiheit geprüft', completed: false }
        },
        {
          title: 'GDPR Fine Response',
          url: '/wissen/krisenmanagement/gdpr-fine-response',
          description: 'DSGVO-Bußgeld Response: Rechtsmittel, Verfahrensstrategie, Schadensbegrenzung und Compliance-Verbesserung.',
          priority: 'high',
          available: true,
          titleTag: 'GDPR Fine Response – DSGVO-Bußgeld Verteidigung',
          metaDescription: 'GDPR Fine Response: Rechtsmittel, Verfahrensstrategie, Schadensbegrenzung, Compliance-Verbesserung. ✓ Legal Defense ✓ Appeal Process ✓ Remediation Planning.',
          indexStatus: 'index',
          mobileReady: { id: 'gdpr-fine-response-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'gdpr-fine-response-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'gdpr-fine-response-content', title: 'Inhalte vollständig & aktuell', completed: false },
          performanceOptimized: { id: 'gdpr-fine-response-perf', title: 'Performance optimiert', completed: false },
          accessibilityCompliant: { id: 'gdpr-fine-response-a11y', title: 'Barrierefreiheit geprüft', completed: false }
        },
        {
          title: 'Business Continuity',
          url: '/wissen/krisenmanagement/business-continuity',
          description: 'Business Continuity Planning: Notfallpläne, Disaster Recovery, Remote Work Continuity und Stakeholder Management.',
          priority: 'medium',
          available: true,
          titleTag: 'Business Continuity – Geschäftskontinuität planen',
          metaDescription: 'Business Continuity: Notfallpläne, Disaster Recovery, Remote Work, Stakeholder Management. ✓ BCP Templates ✓ Recovery Strategies ✓ Crisis Leadership.',
          indexStatus: 'index',
          mobileReady: { id: 'business-continuity-mobile', title: 'Mobile Responsive Design', completed: true },
          seoOptimized: { id: 'business-continuity-seo', title: 'SEO Meta Tags & Struktur', completed: true },
          contentReady: { id: 'business-continuity-content', title: 'Inhalte vollständig & aktuell', completed: false },
          performanceOptimized: { id: 'business-continuity-perf', title: 'Performance optimiert', completed: false },
          accessibilityCompliant: { id: 'business-continuity-a11y', title: 'Barrierefreiheit geprüft', completed: false }
        }
      ]
    },
    {
      id: 'rechtsprechung',
      icon: '⚖️',
      title: 'Rechtsprechung',
      pages: [
        {
          title: 'Schrems II Case',
          url: '/wissen/rechtsprechung/schrems-ii',
          description: 'Schrems II Urteil: Auswirkungen auf internationale Datentransfers, Privacy Shield Invalidierung und SCCs.',
          priority: 'high',
          available: true,
          titleTag: 'Schrems II – Internationale Datentransfers nach EuGH',
          metaDescription: 'Schrems II Urteil: Privacy Shield ungültig, SCC-Anforderungen, US-Datentransfers, TIA-Bewertung. ✓ Legal Analysis ✓ Compliance Impact ✓ Practical Guidance.',
          indexStatus: 'index',
          ...createCheckItems('schrems-ii-case', true)
        },
        {
          title: 'Meta Irland 2024',
          url: '/wissen/rechtsprechung/meta-irland-2024',
          description: 'Meta Irland Entscheidung 2024: Facebook-Datenverarbeitung, Rechtsgrundlagen und Plattform-Compliance.',
          priority: 'high',
          available: true,
          titleTag: 'Meta Irland 2024 – Facebook DSGVO-Entscheidung',
          metaDescription: 'Meta Irland 2024: Facebook-Datenverarbeitung, Rechtsgrundlagen, Plattform-Compliance. ✓ DPC Decision ✓ Legal Basis Analysis ✓ Social Media Compliance.',
          indexStatus: 'index',
          ...createCheckItems('meta-ireland-2024', true)
        },
        {
          title: 'Cookie Law Guide',
          url: '/wissen/rechtsprechung/cookie-law',
          description: 'Cookie-Rechtsprechung: ePrivacy-Richtlinie, Consent-Anforderungen und aktuelle Gerichtsentscheidungen.',
          priority: 'high',
          available: true,
          titleTag: 'Cookie Law – ePrivacy & DSGVO Cookie-Recht',
          metaDescription: 'Cookie Law: ePrivacy-Richtlinie, Consent-Anforderungen, Gerichtsentscheidungen. ✓ Cookie Consent ✓ Legal Requirements ✓ Court Decisions ✓ Compliance Guide.',
          indexStatus: 'index',
          ...createCheckItems('cookie-law', true)
        },
        {
          title: 'Facebook Fanpage Case',
          url: '/wissen/rechtsprechung/facebook-fanpage',
          description: 'Facebook Fanpage Urteil: Gemeinsame Verantwortlichkeit, Page Insights und Social Media Compliance.',
          priority: 'medium',
          available: true,
          titleTag: 'Facebook Fanpage – EuGH Urteil gemeinsame Verantwortlichkeit',
          metaDescription: 'Facebook Fanpage EuGH-Urteil: Gemeinsame Verantwortlichkeit, Page Insights, Social Media Compliance. ✓ Joint Controllership ✓ Liability ✓ Practical Implications.',
          indexStatus: 'index',
          ...createCheckItems('facebook-fanpage', true)
        },
        {
          title: 'Google Analytics Austria',
          url: '/wissen/rechtsprechung/google-analytics-austria',
          description: 'Google Analytics Österreich Entscheidung: US-Tool-Verbot, Datenschutzbehörde und Alternative Analytics.',
          priority: 'high',
          available: true,
          titleTag: 'Google Analytics Austria – DSB Entscheidung US-Tools',
          metaDescription: 'Google Analytics Austria DSB-Entscheidung: US-Tool-Verbot, Schrems II Auswirkungen, Analytics-Alternativen. ✓ Regulatory Decision ✓ Tool Assessment ✓ Compliance Strategy.',
          indexStatus: 'index',
          ...createCheckItems('google-analytics-austria', true)
        },
        {
          title: 'Amazon Luxemburg 2021',
          url: '/wissen/rechtsprechung/amazon-luxemburg-2021',
          description: 'Amazon Luxemburg Bußgeld 2021: CNPD-Entscheidung, Datenverarbeitungs-Verletzungen und E-Commerce Compliance.',
          priority: 'medium',
          available: true,
          titleTag: 'Amazon Luxemburg 2021 – CNPD Bußgeld-Entscheidung',
          metaDescription: 'Amazon Luxemburg 2021 CNPD-Bußgeld: Datenverarbeitungs-Verletzungen, E-Commerce Compliance, DSGVO-Enforcement. ✓ Fine Analysis ✓ Compliance Lessons ✓ Enforcement Trends.',
          indexStatus: 'index',
          ...createCheckItems('amazon-luxembourg-2021', true)
        },
        {
          title: 'WhatsApp Irland 2021',
          url: '/wissen/rechtsprechung/whatsapp-irland-2021',
          description: 'WhatsApp Irland Bußgeld 2021: Transparenz-Verletzungen, Messenger-Compliance und Informationspflichten.',
          priority: 'medium',
          available: true,
          titleTag: 'WhatsApp Irland DSGVO Bußgeld €225 Mio – Messaging Compliance',
          metaDescription: 'WhatsApp Ireland €225 Mio Bußgeld wegen Transparenz-Verstößen. Messaging-Apps DSGVO-konform gestalten & Compliance umsetzen.',
          indexStatus: 'index',
          ...createCheckItems('whatsapp-ireland-2021', true)
        },
        {
          title: 'Planet49 Cookie Case',
          url: '/wissen/rechtsprechung/planet49-cookie',
          description: 'Planet49 EuGH Cookie-Urteil: Vorab-aktivierte Checkboxen, Consent-Anforderungen und Gewinnspiel-Compliance.',
          priority: 'high',
          available: true,
          titleTag: 'Planet49 EuGH Cookie Urteil C-673/17 – Consent Banner DSGVO-konform',
          metaDescription: 'Planet49 Cookie Urteil EuGH: Keine voreingestellten Checkboxen! DSGVO-konforme Cookie Banner & Consent-Mechanismen implementieren.',
          indexStatus: 'index',
          ...createCheckItems('planet49-cookie', true)
        },
        {
          title: 'Google Fonts München',
          url: '/wissen/rechtsprechung/google-fonts-muenchen',
          description: 'Google Fonts München Urteil: IP-Adressen-Übertragung, Web Fonts DSGVO-Compliance und lokale Alternativen.',
          priority: 'medium',
          available: true,
          titleTag: 'Google Fonts DSGVO Urteil München €100 – Lokales Font Hosting',
          metaDescription: 'Google Fonts DSGVO-Urteil München: IP-Übertragung illegal! Lokales Font-Hosting implementieren & €100 Schadensersatz vermeiden.',
          indexStatus: 'index',
          ...createCheckItems('google-fonts-munich', true)
        }
      ]
    },
    {
      id: 'sonstiges',
      icon: '📋',
      title: 'Sonstiges',
      pages: [
        {
          title: 'Sitemap SEO',
          url: '/sitemap-seo',
          description: 'SEO-optimierte Sitemap-Übersicht mit strukturierter Navigation und Metadaten für Suchmaschinen.',
          priority: 'medium',
          available: true,
          titleTag: 'Sitemap – SEO Navigation & Struktur',
          metaDescription: 'SEO-optimierte Sitemap der Marsstein Compliance Platform. Vollständige Navigation, alle Seiten & Tools. ✓ Strukturiert ✓ Suchmaschinenfreundlich.',
          indexStatus: 'index',
          ...createCheckItems('sitemap-seo')
        },
        {
          title: 'Design Test Separator',
          url: '/design-separator-test',
          description: 'Test-Seite für Design-Separatoren und Layout-Komponenten.',
          priority: 'low',
          available: false,
          titleTag: 'Design Separator Test',
          metaDescription: 'Test-Seite für Design-Komponenten.',
          indexStatus: 'noindex',
          ...createCheckItems('design-separator-test')
        },
        {
          title: 'Simple Test',
          url: '/simple-test',
          description: 'Einfache Test-Seite für grundlegende Funktionalitätstests.',
          priority: 'low',
          available: false,
          titleTag: 'Simple Test Page',
          metaDescription: 'Test-Seite für grundlegende Funktionen.',
          indexStatus: 'noindex',
          ...createCheckItems('simple-test')
        },
        {
          title: 'Footer Test',
          url: '/test-footer',
          description: 'Test-Seite für Footer-Komponenten und Layout-Tests.',
          priority: 'low',
          available: false,
          titleTag: 'Footer Test Page',
          metaDescription: 'Test-Seite für Footer-Komponenten.',
          indexStatus: 'noindex',
          ...createCheckItems('test-footer')
        },
        {
          title: 'Test Index',
          url: '/tests',
          description: 'Übersichtsseite für alle verfügbaren Test-Seiten und Entwicklungstools.',
          priority: 'low',
          available: false,
          titleTag: 'Test Index Page',
          metaDescription: 'Übersicht aller Test-Seiten.',
          indexStatus: 'noindex',
          ...createCheckItems('tests')
        },
        {
          title: 'Test 1',
          url: '/test1',
          description: 'Test-Seite 1 für Entwicklungszwecke.',
          priority: 'low',
          available: false,
          titleTag: 'Test 1',
          metaDescription: 'Test-Seite 1.',
          indexStatus: 'noindex',
          ...createCheckItems('test1')
        },
        {
          title: 'Test 2',
          url: '/test2',
          description: 'Test-Seite 2 für Entwicklungszwecke.',
          priority: 'low',
          available: false,
          titleTag: 'Test 2',
          metaDescription: 'Test-Seite 2.',
          indexStatus: 'noindex',
          ...createCheckItems('test2')
        },
        {
          title: 'Test 3',
          url: '/test3',
          description: 'Test-Seite 3 für Entwicklungszwecke.',
          priority: 'low',
          available: false,
          titleTag: 'Test 3',
          metaDescription: 'Test-Seite 3.',
          indexStatus: 'noindex',
          ...createCheckItems('test3')
        },
        {
          title: 'Test Fixed',
          url: '/test-fixed',
          description: 'Test-Seite für Fixed-Layout-Tests.',
          priority: 'low',
          available: false,
          titleTag: 'Test Fixed',
          metaDescription: 'Test-Seite für Fixed-Layout.',
          indexStatus: 'noindex',
          ...createCheckItems('test-fixed')
        },
        {
          title: 'Test Perfect',
          url: '/test-perfect',
          description: 'Test-Seite für perfektionierte Layouts.',
          priority: 'low',
          available: false,
          titleTag: 'Test Perfect',
          metaDescription: 'Test-Seite für perfekte Layouts.',
          indexStatus: 'noindex',
          ...createCheckItems('test-perfect')
        },
        {
          title: 'Test Bidirectional',
          url: '/test-bidirectional',
          description: 'Test-Seite für bidirektionale Layouts.',
          priority: 'low',
          available: false,
          titleTag: 'Test Bidirectional',
          metaDescription: 'Test-Seite für bidirektionale Features.',
          indexStatus: 'noindex',
          ...createCheckItems('test-bidirectional')
        },
        {
          title: 'Test Final',
          url: '/test-final',
          description: 'Finale Test-Seite für Abschlusstests.',
          priority: 'low',
          available: false,
          titleTag: 'Test Final',
          metaDescription: 'Finale Test-Seite.',
          indexStatus: 'noindex',
          ...createCheckItems('test-final')
        },
        {
          title: 'Test Perfected',
          url: '/test-perfected',
          description: 'Perfektionierte Test-Seite.',
          priority: 'low',
          available: false,
          titleTag: 'Test Perfected',
          metaDescription: 'Perfektionierte Test-Seite.',
          indexStatus: 'noindex',
          ...createCheckItems('test-perfected')
        },
        {
          title: 'Test Approach 1',
          url: '/approach1',
          description: 'Test-Ansatz 1 für verschiedene Implementierungen.',
          priority: 'low',
          available: false,
          titleTag: 'Test Approach 1',
          metaDescription: 'Test-Ansatz 1.',
          indexStatus: 'noindex',
          ...createCheckItems('approach1')
        },
        {
          title: 'Test Approach 2',
          url: '/approach2',
          description: 'Test-Ansatz 2 für verschiedene Implementierungen.',
          priority: 'low',
          available: false,
          titleTag: 'Test Approach 2',
          metaDescription: 'Test-Ansatz 2.',
          indexStatus: 'noindex',
          ...createCheckItems('approach2')
        },
        {
          title: 'Test Approach 3',
          url: '/approach3',
          description: 'Test-Ansatz 3 für verschiedene Implementierungen.',
          priority: 'low',
          available: false,
          titleTag: 'Test Approach 3',
          metaDescription: 'Test-Ansatz 3.',
          indexStatus: 'noindex',
          ...createCheckItems('approach3')
        },
        {
          title: 'Test Diagnostic',
          url: '/diagnostic',
          description: 'Diagnose-Test-Seite für Debugging.',
          priority: 'low',
          available: false,
          titleTag: 'Test Diagnostic',
          metaDescription: 'Diagnose-Test-Seite.',
          indexStatus: 'noindex',
          ...createCheckItems('diagnostic')
        },
        {
          title: 'Test Ultimate Diagnostic',
          url: '/ultimate-diagnostic',
          description: 'Erweiterte Diagnose-Test-Seite.',
          priority: 'low',
          available: false,
          titleTag: 'Test Ultimate Diagnostic',
          metaDescription: 'Erweiterte Diagnose-Tests.',
          indexStatus: 'noindex',
          ...createCheckItems('ultimate-diagnostic')
        },
        {
          title: 'Test Robust',
          url: '/robust',
          description: 'Robuste Test-Implementierung.',
          priority: 'low',
          available: false,
          titleTag: 'Test Robust',
          metaDescription: 'Robuste Test-Seite.',
          indexStatus: 'noindex',
          ...createCheckItems('robust')
        },
        {
          title: 'Test Simple Final',
          url: '/simple-final',
          description: 'Einfache finale Test-Seite.',
          priority: 'low',
          available: false,
          titleTag: 'Test Simple Final',
          metaDescription: 'Einfache finale Tests.',
          indexStatus: 'noindex',
          ...createCheckItems('simple-final')
        },
        {
          title: 'Test Optimized',
          url: '/optimized',
          description: 'Optimierte Test-Seite für Performance-Tests.',
          priority: 'low',
          available: false,
          titleTag: 'Test Optimized',
          metaDescription: 'Optimierte Test-Seite.',
          indexStatus: 'noindex',
          ...createCheckItems('optimized')
        },
        {
          title: 'ISO 27001 Compliance Guide',
          url: '/compliance/iso-27001',
          description: 'Detaillierter Compliance-Guide für ISO 27001 Implementierung.',
          priority: 'high',
          available: true,
          titleTag: 'ISO 27001 Compliance Guide – Schritt für Schritt',
          metaDescription: 'ISO 27001 Compliance Guide: Implementierung, Zertifizierung, Best Practices. ✓ Schritt-für-Schritt Anleitung ✓ Vorlagen. Jetzt ISO 27001 umsetzen!',
          indexStatus: 'index',
          ...createCheckItems('compliance-iso-27001')
        },
        {
          title: 'SOC 2 Compliance Guide',
          url: '/compliance/soc-2',
          description: 'Umfassender Guide für SOC 2 Type II Compliance.',
          priority: 'high',
          available: true,
          titleTag: 'SOC 2 Compliance Guide – Trust Principles umsetzen',
          metaDescription: 'SOC 2 Type II Compliance Guide: Trust Service Principles, Audit-Vorbereitung, Kontrollen. ✓ Praxisnah ✓ Enterprise-ready. Jetzt SOC 2 ready werden!',
          indexStatus: 'index',
          ...createCheckItems('compliance-soc-2')
        },
        {
          title: 'EU AI Act Compliance Guide',
          url: '/compliance/eu-ai-act',
          description: 'Praxisleitfaden zur Umsetzung der EU AI Act Anforderungen.',
          priority: 'high',
          available: true,
          titleTag: 'EU AI Act Compliance Guide – KI-Verordnung umsetzen',
          metaDescription: 'EU AI Act Compliance Guide: Risikoklassen, Konformität, Dokumentation für KI-Systeme. ✓ Praktische Umsetzung ✓ Checklisten. Jetzt AI Act konform!',
          indexStatus: 'index',
          ...createCheckItems('compliance-eu-ai-act')
        },
        {
          title: 'NIS-2 Compliance Guide',
          url: '/compliance/nis2',
          description: 'Leitfaden zur Umsetzung der NIS-2 Richtlinie.',
          priority: 'medium',
          available: true,
          titleTag: 'NIS-2 Compliance Guide – Cybersecurity-Richtlinie',
          metaDescription: 'NIS-2 Compliance Guide: Betroffenheit, Meldepflichten, Cybersecurity-Maßnahmen. ✓ Schritt-für-Schritt ✓ Praxistipps. Jetzt NIS-2 umsetzen!',
          indexStatus: 'index',
          ...createCheckItems('compliance-nis2')
        },
        {
          title: 'ISO 27017 Compliance Guide',
          url: '/compliance/iso-27017',
          description: 'Cloud-Security-Standard ISO 27017 implementieren.',
          priority: 'medium',
          available: true,
          titleTag: 'ISO 27017 Compliance Guide – Cloud Security Standard',
          metaDescription: 'ISO 27017 Compliance Guide: Cloud-Security-Kontrollen, Best Practices, Zertifizierung. ✓ Cloud-Provider ✓ Cloud-Nutzer. Jetzt ISO 27017 umsetzen!',
          indexStatus: 'index',
          ...createCheckItems('compliance-iso-27017')
        },
        {
          title: 'ISO 27018 Compliance Guide',
          url: '/compliance/iso-27018',
          description: 'Datenschutz in der Cloud nach ISO 27018.',
          priority: 'medium',
          available: true,
          titleTag: 'ISO 27018 Compliance Guide – Cloud-Datenschutz',
          metaDescription: 'ISO 27018 Compliance Guide: Datenschutz für Cloud-Services, PII-Schutz, Transparenz. ✓ DSGVO-konform ✓ Best Practices. Jetzt ISO 27018 umsetzen!',
          indexStatus: 'index',
          ...createCheckItems('compliance-iso-27018')
        },
        {
          title: 'Hinweisgeberschutzgesetz Compliance',
          url: '/compliance/hinweisgeberschutzgesetz',
          description: 'Compliance-Guide zum Hinweisgeberschutzgesetz.',
          priority: 'medium',
          available: true,
          titleTag: 'HinSchG Compliance Guide – Whistleblower-Schutz',
          metaDescription: 'Hinweisgeberschutzgesetz Compliance: Meldekanäle, Vertraulichkeit, Umsetzung. ✓ Rechtssicher ✓ Praxisnah. Jetzt HinSchG-konform werden!',
          indexStatus: 'index',
          ...createCheckItems('compliance-hinschg')
        },
        {
          title: 'TISAX Compliance Guide',
          url: '/compliance/tisax',
          description: 'Automotive Security Assessment nach TISAX.',
          priority: 'medium',
          available: true,
          titleTag: 'TISAX Compliance Guide – Automotive Security',
          metaDescription: 'TISAX Compliance Guide: Informationssicherheit in der Automobilindustrie. ✓ Assessment-Levels ✓ VDA ISA. Jetzt TISAX-Label erreichen!',
          indexStatus: 'index',
          ...createCheckItems('compliance-tisax')
        },
        {
          title: 'Geldwäschegesetz Compliance',
          url: '/compliance/geldwaeschegesetz',
          description: 'GwG-Compliance für verpflichtete Unternehmen.',
          priority: 'medium',
          available: true,
          titleTag: 'GwG Compliance Guide – Anti-Geldwäsche umsetzen',
          metaDescription: 'Geldwäschegesetz Compliance: Sorgfaltspflichten, KYC, Verdachtsmeldungen. ✓ AML-konform ✓ Risikomanagement. Jetzt GwG umsetzen!',
          indexStatus: 'index',
          ...createCheckItems('compliance-gwg')
        },
        {
          title: 'DSGVO Compliance Guide',
          url: '/compliance/dsgvo',
          description: 'Umfassender DSGVO-Compliance-Leitfaden.',
          priority: 'high',
          available: true,
          titleTag: 'DSGVO Compliance Guide – Datenschutz umsetzen',
          metaDescription: 'DSGVO Compliance Guide: Betroffenenrechte, TOMs, Verarbeitungsverzeichnis. ✓ Rechtssicher ✓ Praxiserprobt. Jetzt DSGVO-konform werden!',
          indexStatus: 'index',
          ...createCheckItems('compliance-dsgvo')
        },
        // Crisis Management Pages
        {
          title: 'Krisenmanagement Übersicht',
          url: '/wissen/krisenmanagement',
          description: 'Compliance-Krisenmanagement und Notfallpläne. Strukturierte Reaktion auf Datenpannen, Sicherheitsvorfälle und Compliance-Verstöße.',
          priority: 'medium',
          available: true,
          titleTag: 'Krisenmanagement – Compliance-Notfallpläne & Response',
          metaDescription: 'Compliance-Krisenmanagement: Notfallpläne für Datenpannen, Sicherheitsvorfälle, Compliance-Verstöße. ✓ Strukturiert ✓ Praxiserprobt. Jetzt vorbereitet sein!',
          indexStatus: 'index',
          ...createCheckItems('crisis-mgmt-overview', true)
        },
        {
          title: 'Data Breach Response Plan',
          url: '/wissen/krisenmanagement/data-breach-response',
          description: 'Detaillierter Notfallplan für Datenschutzverletzungen. Schritt-für-Schritt-Anleitung für die ersten 72 Stunden inklusive Meldeverfahren.',
          priority: 'medium',
          available: true,
          titleTag: 'Data Breach Response – 72-Stunden Notfallplan',
          metaDescription: 'Data Breach Response Plan: Strukturiertes Vorgehen bei Datenpannen. ✓ 72-Stunden-Plan ✓ Meldepflichten ✓ Krisenkommunikation. Jetzt vorbereiten!',
          indexStatus: 'index',
          ...createCheckItems('data-breach-response-crisis')
        },
        {
          title: 'Incident Response Management',
          url: '/wissen/krisenmanagement/incident-response',
          description: 'Systematisches Incident Response Management. Von der Erkennung über die Eindämmung bis zur Wiederherstellung und Nachbereitung.',
          priority: 'medium',
          available: true,
          titleTag: 'Incident Response – Sicherheitsvorfälle managen',
          metaDescription: 'Incident Response Management: Sicherheitsvorfälle erkennen, eindämmen, beheben. ✓ NIST Framework ✓ Playbooks ✓ Best Practices. Jetzt Prozesse etablieren!',
          indexStatus: 'index',
          ...createCheckItems('incident-response-crisis')
        },
        {
          title: 'Krisenkommunikation',
          url: '/wissen/krisenmanagement/krisenkommunikation',
          description: 'Effektive Krisenkommunikation bei Compliance-Vorfällen. Interne und externe Kommunikationsstrategien, Stakeholder-Management und Medienarbeit.',
          priority: 'medium',
          available: true,
          titleTag: 'Krisenkommunikation – Compliance-Vorfälle kommunizieren',
          metaDescription: 'Krisenkommunikation bei Compliance-Vorfällen: Strategien, Stakeholder-Management, Medienarbeit. ✓ Praxiserprobt ✓ Vorlagen. Jetzt vorbereiten!',
          indexStatus: 'index',
          ...createCheckItems('crisis-communication')
        },
        // Legal/Rechtsprechung Pages
        {
          title: 'Rechtsprechung Übersicht',
          url: '/wissen/rechtsprechung',
          description: 'Aktuelle Rechtsprechung zu Datenschutz und Compliance. Wichtige Urteile, Bußgeldentscheidungen und deren Auswirkungen auf die Praxis.',
          priority: 'medium',
          available: true,
          titleTag: 'Rechtsprechung – DSGVO & Compliance Urteile',
          metaDescription: 'Aktuelle Rechtsprechung zu DSGVO & Compliance: Wichtige Urteile, Bußgelder, Praxisauswirkungen. ✓ Aktuell ✓ Praxisrelevant. Jetzt informieren!',
          indexStatus: 'index',
          ...createCheckItems('legal-overview')
        },
        {
          title: 'DSGVO Bußgeldkatalog',
          url: '/wissen/rechtsprechung/dsgvo-bussgeldkatalog',
          description: 'Übersicht über DSGVO-Bußgelder und Sanktionen. Bußgeldberechnung, wichtige Fälle und Vermeidungsstrategien.',
          priority: 'medium',
          available: true,
          titleTag: 'DSGVO Bußgeldkatalog – Strafen & Sanktionen',
          metaDescription: 'DSGVO Bußgeldkatalog: Bußgeldberechnung, wichtige Fälle, Vermeidungsstrategien. Bis zu 20 Mio € oder 4% Umsatz. ✓ Aktuell ✓ Praxisbeispiele. Jetzt informieren!',
          indexStatus: 'index',
          ...createCheckItems('dsgvo-fines')
        },
        {
          title: 'Wichtige Datenschutzurteile',
          url: '/wissen/rechtsprechung/wichtige-urteile',
          description: 'Landmark-Entscheidungen im Datenschutzrecht. EuGH-Urteile, BGH-Entscheidungen und deren Bedeutung für Ihre Compliance.',
          priority: 'medium',
          available: true,
          titleTag: 'Datenschutzurteile – Wichtige Entscheidungen & Analyse',
          metaDescription: 'Wichtige Datenschutzurteile: EuGH Schrems II, BGH Cookie-Urteile, mehr. ✓ Praxisauswirkungen ✓ Handlungsempfehlungen. Jetzt verstehen!',
          indexStatus: 'index',
          ...createCheckItems('important-rulings')
        },
        {
          title: 'Aufsichtsbehörden Praxis',
          url: '/wissen/rechtsprechung/aufsichtsbehoerden',
          description: 'Praxis der Datenschutz-Aufsichtsbehörden. Prüfverfahren, Bescheide und Zusammenarbeit mit Behörden optimieren.',
          priority: 'medium',
          available: true,
          titleTag: 'Aufsichtsbehörden – Praxis & Zusammenarbeit',
          metaDescription: 'Datenschutz-Aufsichtsbehörden: Prüfverfahren verstehen, Zusammenarbeit optimieren, Bescheide vermeiden. ✓ Insider-Tipps ✓ Best Practices. Jetzt vorbereiten!',
          indexStatus: 'index',
          ...createCheckItems('regulatory-authorities')
        },
        // Branchen Wissen Pages
        {
          title: 'Branchenwissen Übersicht',
          url: '/wissen/branchen',
          description: 'Branchenspezifisches Compliance-Wissen. Sektorspezifische Anforderungen, Best Practices und regulatorische Besonderheiten.',
          priority: 'medium',
          available: true,
          titleTag: 'Branchenwissen – Sektorspezifische Compliance',
          metaDescription: 'Branchenspezifisches Compliance-Wissen: Healthcare, FinTech, E-Commerce, mehr. ✓ Sektoranforderungen ✓ Best Practices. Jetzt branchengerecht!',
          indexStatus: 'index',
          ...createCheckItems('industry-knowledge-overview')
        },
        {
          title: 'Healthcare Compliance Wissen',
          url: '/wissen/branchen/healthcare-ai-compliance',
          description: 'Spezialwissen für Gesundheitswesen-Compliance. Patientendatenschutz, E-Health-Gesetz, Forschungsdaten und Krankenkassen-Schnittstellen.',
          priority: 'medium',
          available: true,
          titleTag: 'Healthcare Compliance – Gesundheitsdaten & E-Health',
          metaDescription: 'Healthcare Compliance Wissen: Patientendatenschutz, E-Health, DSGVO Art. 9. ✓ Spezialwissen ✓ Praxislösungen. Jetzt Healthcare-konform!',
          indexStatus: 'index',
          ...createCheckItems('healthcare-knowledge')
        },
        {
          title: 'FinTech Compliance Wissen',
          url: '/wissen/branchen/fintech-compliance',
          description: 'Finanzsektor-Compliance verstehen. MaRisk, BAIT, PSD2 und die Schnittstelle zwischen Finanzregulierung und Datenschutz.',
          priority: 'medium',
          available: true,
          titleTag: 'FinTech Compliance – Finanzregulierung & DSGVO',
          metaDescription: 'FinTech Compliance Wissen: MaRisk, BAIT, PSD2 meets DSGVO. ✓ BaFin-Anforderungen ✓ Best Practices. Jetzt Finanz-compliant!',
          indexStatus: 'index',
          ...createCheckItems('fintech-knowledge')
        },
        {
          title: 'E-Commerce Compliance Wissen',
          url: '/wissen/branchen/ecommerce-privacy',
          description: 'Online-Handel rechtssicher gestalten. Von Cookie-Compliance über Kundendatenschutz bis zu grenzüberschreitendem Datenverkehr.',
          priority: 'medium',
          available: true,
          titleTag: 'E-Commerce Compliance – Online-Handel & DSGVO',
          metaDescription: 'E-Commerce Compliance Wissen: Cookie-Management, Kundendaten, Cross-Border. ✓ Conversion-optimiert ✓ Rechtssicher. Jetzt Shop-compliant!',
          indexStatus: 'index',
          ...createCheckItems('ecommerce-knowledge')
        },
        {
          title: 'SaaS Compliance Wissen',
          url: '/wissen/branchen/saas-privacy-design',
          description: 'Cloud-Service Compliance meistern. Multi-Tenancy, Auftragsverarbeitung, SLAs und internationale Compliance für SaaS-Anbieter.',
          priority: 'medium',
          available: true,
          titleTag: 'SaaS Compliance – Cloud-Services & Multi-Tenancy',
          metaDescription: 'SaaS Compliance Wissen: Multi-Tenant DSGVO, SOC 2, internationale Compliance. ✓ Enterprise-ready ✓ Skalierbar. Jetzt SaaS-compliant!',
          indexStatus: 'index',
          ...createCheckItems('saas-knowledge')
        },
        // KI Datenschutz Pages
        {
          title: 'KI Datenschutz Übersicht',
          url: '/wissen/ki-compliance',
          description: 'Künstliche Intelligenz und Datenschutz vereinen. EU AI Act, algorithmische Transparenz, Bias-Vermeidung und ethische KI-Entwicklung.',
          priority: 'medium',
          available: true,
          titleTag: 'KI Datenschutz – AI Act & DSGVO für KI-Systeme',
          metaDescription: 'KI Datenschutz: EU AI Act meets DSGVO. Algorithmische Transparenz, Bias-Vermeidung, ethische KI. ✓ Praxisguide ✓ Compliance. Jetzt KI-konform!',
          indexStatus: 'index',
          ...createCheckItems('ai-privacy-overview')
        },
        {
          title: 'EU AI Act Umsetzung',
          url: '/wissen/ki-datenschutz/eu-ai-act-umsetzung',
          description: 'Praktische Umsetzung des EU AI Act. Risikoklassifizierung, Konformitätsbewertung und technische Dokumentation für KI-Systeme.',
          priority: 'medium',
          available: true,
          titleTag: 'EU AI Act Umsetzung – KI-Verordnung praktisch',
          metaDescription: 'EU AI Act praktisch umsetzen: Risikoklassen, Konformität, Dokumentation. ✓ Schritt-für-Schritt ✓ Checklisten. Jetzt AI Act ready!',
          indexStatus: 'index',
          ...createCheckItems('ai-act-implementation')
        },
        {
          title: 'Algorithmische Transparenz',
          url: '/wissen/ki-datenschutz/algorithmische-transparenz',
          description: 'Transparenz in KI-Systemen gewährleisten. Erklärbarkeit, Nachvollziehbarkeit und Dokumentation algorithmischer Entscheidungen.',
          priority: 'medium',
          available: true,
          titleTag: 'Algorithmische Transparenz – Erklärbare KI & DSGVO',
          metaDescription: 'Algorithmische Transparenz: Erklärbare KI, DSGVO Art. 22, Dokumentation. ✓ Best Practices ✓ Tools. Jetzt transparente KI entwickeln!',
          indexStatus: 'index',
          ...createCheckItems('algorithmic-transparency')
        },
        {
          title: 'Bias Detection & Fairness',
          url: '/wissen/ki-datenschutz/bias-detection',
          description: 'Diskriminierung in KI-Systemen erkennen und vermeiden. Bias-Detection-Methoden, Fairness-Metriken und Mitigation-Strategien.',
          priority: 'medium',
          available: true,
          titleTag: 'Bias Detection – Faire KI-Systeme entwickeln',
          metaDescription: 'Bias Detection in KI: Diskriminierung erkennen, Fairness messen, Bias vermeiden. ✓ Methoden ✓ Tools ✓ Best Practices. Jetzt faire KI!',
          indexStatus: 'index',
          ...createCheckItems('bias-detection')
        },
        {
          title: 'KI Governance Framework',
          url: '/wissen/ki-datenschutz/ki-governance',
          description: 'Governance-Strukturen für verantwortungsvolle KI. Richtlinien, Prozesse und Kontrollen für ethische KI-Entwicklung und -Nutzung.',
          priority: 'medium',
          available: true,
          titleTag: 'KI Governance – Framework für verantwortungsvolle AI',
          metaDescription: 'KI Governance Framework: Richtlinien, Prozesse, Kontrollen für ethische KI. ✓ Best Practices ✓ Templates. Jetzt KI-Governance etablieren!',
          indexStatus: 'index',
          ...createCheckItems('ai-governance-framework')
        },
        // Additional Assessment Center Pages
        {
          title: 'Privacy by Design Assessment',
          url: '/assessment-center/privacy-by-design',
          description: 'Bewerten Sie die Integration von Datenschutz in Ihre Systeme. Privacy by Design und by Default Prinzipien systematisch prüfen.',
          priority: 'medium',
          available: true,
          titleTag: 'Privacy by Design Assessment – Datenschutz integriert',
          metaDescription: 'Privacy by Design Assessment: Datenschutz von Anfang an integrieren. ✓ 7 Prinzipien ✓ Checkliste ✓ Best Practices. Jetzt Assessment starten!',
          indexStatus: 'noindex',
          ...createCheckItems('privacy-by-design-assessment')
        },
        {
          title: 'Third Party Risk Assessment',
          url: '/assessment-center/third-party-risk',
          description: 'Risikobewertung für Drittanbieter und Auftragsverarbeiter. Systematische Prüfung von Partnern und Lieferanten.',
          priority: 'medium',
          available: true,
          titleTag: 'Third Party Risk Assessment – Lieferanten prüfen',
          metaDescription: 'Third Party Risk Assessment: Auftragsverarbeiter & Lieferanten systematisch prüfen. ✓ Risikomatrix ✓ Due Diligence. Jetzt Partner bewerten!',
          indexStatus: 'noindex',
          ...createCheckItems('third-party-risk-assessment')
        },
        {
          title: 'Compliance Maturity Model',
          url: '/assessment-center/compliance-maturity',
          description: 'Bewerten Sie den Reifegrad Ihres Compliance-Managements. Von reaktiv bis optimiert - wo steht Ihre Organisation?',
          priority: 'medium',
          available: true,
          titleTag: 'Compliance Maturity Model – Reifegrad bewerten',
          metaDescription: 'Compliance Maturity Assessment: Reifegrad Ihres Compliance-Managements bewerten. ✓ 5 Level ✓ Roadmap ✓ Benchmarks. Jetzt Reifegrad prüfen!',
          indexStatus: 'noindex',
          ...createCheckItems('compliance-maturity-assessment')
        },
        {
          title: 'Data Governance Assessment',
          url: '/assessment-center/data-governance',
          description: 'Evaluieren Sie Ihre Data Governance Strukturen. Datenqualität, Verantwortlichkeiten und Prozesse systematisch bewerten.',
          priority: 'medium',
          available: true,
          titleTag: 'Data Governance Assessment – Datenmanagement prüfen',
          metaDescription: 'Data Governance Assessment: Datenqualität, Prozesse, Verantwortlichkeiten bewerten. ✓ Framework ✓ KPIs ✓ Handlungsempfehlungen. Jetzt testen!',
          indexStatus: 'noindex',
          ...createCheckItems('data-governance-assessment')
        },
        {
          title: 'Security Awareness Check',
          url: '/assessment-center/security-awareness',
          description: 'Prüfen Sie das Sicherheitsbewusstsein Ihrer Organisation. Mitarbeiterschulung, Awareness-Programme und Sicherheitskultur bewerten.',
          priority: 'low',
          available: true,
          titleTag: 'Security Awareness Check – Sicherheitskultur bewerten',
          metaDescription: 'Security Awareness Check: Sicherheitsbewusstsein der Mitarbeiter prüfen. ✓ Schulungsbedarf ✓ Awareness-Level. Jetzt Kultur bewerten!',
          indexStatus: 'noindex',
          ...createCheckItems('security-awareness-check')
        },
        {
          title: 'Impressum',
          url: '/impressum',
          description: 'Rechtliche Informationen und Anbieterkennzeichnung der Marsstein Compliance Platform gemäß § 5 TMG.',
          priority: 'low',
          available: true,
          titleTag: 'Impressum – Marsstein GmbH',
          metaDescription: 'Impressum der Marsstein GmbH. Anbieterkennzeichnung, Kontaktdaten, Verantwortliche Personen, Handelsregister und rechtliche Hinweise.',
          indexStatus: 'noindex',
          ...createCheckItems('impressum')
        },
        {
          title: 'Datenschutzerklärung',
          url: '/datenschutz',
          description: 'Datenschutzerklärung der Marsstein Platform. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
          priority: 'low',
          available: true,
          titleTag: 'Datenschutzerklärung – Marsstein',
          metaDescription: 'Datenschutzerklärung: Wie wir Ihre personenbezogenen Daten verarbeiten, schützen und Ihre Rechte wahren. DSGVO-konform und transparent.',
          indexStatus: 'noindex',
          ...createCheckItems('datenschutz')
        }
      ]
    }
  ]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleCheckItem = (categoryId: string, pageIndex: number, checkType: keyof PageCheck) => {
    setPageChecks(prev =>
      prev.map(category =>
        category.id === categoryId
          ? {
              ...category,
              pages: category.pages.map((page, index) =>
                index === pageIndex
                  ? {
                      ...page,
                      [checkType]: {
                        ...page[checkType] as ChecklistItem,
                        completed: !(page[checkType] as ChecklistItem).completed
                      }
                    }
                  : page
              )
            }
          : category
      )
    );
  };

  const isExpanded = (categoryId: string) => expandedCategories.includes(categoryId);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500';
      case 'medium': return 'border-yellow-500';
      case 'low': return 'border-green-500';
      default: return 'border-gray-500';
    }
  };

  const calculatePageCompletion = (page: PageCheck) => {
    const checks = [page.mobileReady, page.seoOptimized, page.contentReady, page.performanceOptimized, page.accessibilityCompliant];
    const completed = checks.filter(check => check.completed).length;
    return Math.round((completed / checks.length) * 100);
  };

  const calculateCategoryCompletion = (category: CheckCategory) => {
    const totalChecks = category.pages.length * 5; // 5 checks per page
    const completedChecks = category.pages.reduce((acc, page) => {
      return acc + [page.mobileReady, page.seoOptimized, page.contentReady, page.performanceOptimized, page.accessibilityCompliant]
        .filter(check => check.completed).length;
    }, 0);
    return Math.round((completedChecks / totalChecks) * 100);
  };

  const totalPages = pageChecks.reduce((acc, cat) => acc + cat.pages.length, 0);
  const totalChecks = totalPages * 5;
  const completedChecks = pageChecks.reduce((acc, cat) => 
    acc + cat.pages.reduce((pageAcc, page) => 
      pageAcc + [page.mobileReady, page.seoOptimized, page.contentReady, page.performanceOptimized, page.accessibilityCompliant]
        .filter(check => check.completed).length, 0
    ), 0
  );
  const overallCompletion = Math.round((completedChecks / totalChecks) * 100);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-100 rounded-lg p-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-600 pb-2">
                🎯 Final Checks - Launch Readiness
              </h1>
              <p className="text-gray-600 mt-2">Mobile Freundlichkeit, SEO Optimierung & Content Readiness Checkliste</p>
            </div>
            <div className="mt-4 lg:mt-0">
              <div className="bg-white p-4 rounded-lg shadow">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{overallCompletion}%</div>
                  <div className="text-sm text-gray-600">Gesamt-Fortschritt</div>
                  <div className="text-xs text-gray-500">{completedChecks}/{totalChecks} Checks</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg mb-8">
            <h3 className="font-semibold text-blue-900 mb-2">📋 Checkliste pro Seite:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 text-sm">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded mr-2"></span>
                📱 Mobile Responsive
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded mr-2"></span>
                🔍 SEO Optimiert
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded mr-2"></span>
                📝 Content Ready
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-orange-500 rounded mr-2"></span>
                ⚡ Performance
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-pink-500 rounded mr-2"></span>
                ♿ Barrierefreiheit
              </div>
            </div>
          </div>

          {pageChecks.map((category) => {
            const categoryCompletion = calculateCategoryCompletion(category);
            
            return (
              <div key={category.id} className="mb-6 border border-gray-300 rounded-lg bg-white">
                <div
                  className="bg-gray-100 p-4 rounded-t-lg flex justify-between items-center font-semibold text-gray-800"
                >
                  <span className="flex items-center">
                    {category.icon} {category.title}
                    <span className="ml-3 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                      {categoryCompletion}% Complete
                    </span>
                    <span className="ml-2 text-sm font-normal text-gray-600">
                      ({category.pages.length} Seiten)
                    </span>
                  </span>
                </div>
                <div>
                  <div className="p-4">
                    {category.pages.map((page, pageIndex) => {
                      const pageCompletion = calculatePageCompletion(page);
                      
                      return (
                        <div key={pageIndex} className={`mb-6 p-4 rounded-lg border-l-4 ${getPriorityColor(page.priority)} bg-gray-50`}>
                          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <a
                                  href={page.url}
                                  className="text-lg font-medium text-blue-600 hover:text-blue-800 hover:underline"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {page.title}
                                </a>
                                <span className="ml-2 px-2 py-1 text-xs rounded-full bg-white border">
                                  {pageCompletion}% ✓
                                </span>
                              </div>
                              <div className="text-xs text-gray-500 mb-1">
                                URL: <code className="bg-gray-200 px-1 rounded break-all text-xs">{page.url}</code>
                              </div>
                              <div className="text-sm text-gray-600 mb-2 break-words leading-relaxed">{page.description}</div>
                              {page.titleTag && (
                                <div className="mt-2 p-3 bg-blue-50 rounded border border-blue-200 overflow-hidden">
                                  <div className="text-xs font-semibold text-blue-800 mb-1">Title Tag ({page.titleTag.length} Zeichen):</div>
                                  <div className="text-xs text-blue-700 break-words whitespace-normal leading-relaxed">{page.titleTag}</div>
                                </div>
                              )}
                              {page.metaDescription && (
                                <div className="mt-2 p-3 bg-green-50 rounded border border-green-200 overflow-hidden">
                                  <div className="text-xs font-semibold text-green-800 mb-1">Meta Description ({page.metaDescription.length} Zeichen):</div>
                                  <div className="text-xs text-green-700 break-words whitespace-normal leading-relaxed">{page.metaDescription}</div>
                                </div>
                              )}
                              {page.indexStatus && (
                                <div className="mt-2 p-3 bg-purple-50 rounded border border-purple-200 overflow-hidden">
                                  <div className="text-xs font-semibold text-purple-800 mb-1">Index Status:</div>
                                  <div className="text-xs text-purple-700 font-mono">
                                    {page.indexStatus === 'index' ? '✅ ' : '🚫 '}{page.indexStatus}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                            {[
                              { key: 'mobileReady', icon: '📱', color: 'blue' },
                              { key: 'seoOptimized', icon: '🔍', color: 'green' },
                              { key: 'contentReady', icon: '📝', color: 'purple' },
                              { key: 'performanceOptimized', icon: '⚡', color: 'orange' },
                              { key: 'accessibilityCompliant', icon: '♿', color: 'pink' }
                            ].map(({ key, icon, color }) => {
                              const checkItem = page[key as keyof PageCheck] as ChecklistItem;
                              return (
                                <div
                                  key={key}
                                  className={`p-3 rounded border cursor-pointer transition-all ${
                                    checkItem.completed
                                      ? 'bg-green-50 border-green-200 hover:bg-green-100'
                                      : 'bg-white border-gray-200 hover:bg-gray-50'
                                  }`}
                                  onClick={() => toggleCheckItem(category.id, pageIndex, key as keyof PageCheck)}
                                >
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-lg">{icon}</span>
                                    <span className={`text-lg ${checkItem.completed ? 'text-green-500' : 'text-gray-300'}`}>
                                      {checkItem.completed ? '✅' : '⭕'}
                                    </span>
                                  </div>
                                  <div className="text-xs text-gray-600 leading-tight break-words">
                                    {checkItem.title}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 Launch Readiness Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{totalPages}</div>
                <div className="text-sm text-gray-600">Seiten gesamt</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-green-600">{completedChecks}</div>
                <div className="text-sm text-gray-600">Checks abgeschlossen</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{totalChecks - completedChecks}</div>
                <div className="text-sm text-gray-600">Checks verbleibend</div>
              </div>
            </div>
            
            {overallCompletion === 100 && (
              <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-lg text-center">
                <div className="text-green-800 font-semibold">
                  🎉 Glückwunsch! Alle Checks sind abgeschlossen. Die Website ist launch-ready!
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-900 mb-2">💡 Verwendung:</h4>
            <div className="text-sm text-yellow-800 space-y-1">
              <p>• Kategorie aufklappen → Seite über Link öffnen → Prüfungen durchführen → Checkbox abhaken</p>
              <p>• Jede Seite hat 5 Checks: Mobile Responsive, SEO, Content, Performance, Barrierefreiheit</p>
              <p>• Der Fortschritt wird automatisch berechnet und gespeichert während der Session</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalChecks;