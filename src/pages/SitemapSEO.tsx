import React, { useState } from 'react';

interface SitemapItem {
  title: string;
  url: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  available: boolean;
}

interface SitemapCategory {
  id: string;
  icon: string;
  title: string;
  items: SitemapItem[];
}

const SitemapSEO = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const isExpanded = (categoryId: string) => expandedCategories.includes(categoryId);

  const sitemapCategories: SitemapCategory[] = [
    {
      id: 'main-pages',
      icon: '🏠',
      title: 'Hauptseiten',
      items: [
        { 
          title: 'Startseite', 
          url: '/', 
          description: 'Die Hauptseite der Marsstein Compliance Platform. Hier finden Sie einen Überblick über alle unsere Compliance-Lösungen, Tools und Services für DSGVO, ISO 27001, EU AI Act und mehr.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Preise', 
          url: '/pricing', 
          description: 'Transparente Preisübersicht für alle Marsstein-Pakete. Vergleichen Sie unsere Starter-, Professional- und Enterprise-Lösungen mit detaillierten Feature-Listen und finden Sie das passende Paket für Ihr Unternehmen.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Kontakt', 
          url: '/contact', 
          description: 'Nehmen Sie Kontakt mit unserem Expertenteam auf. Nutzen Sie unser Kontaktformular für individuelle Beratung oder vereinbaren Sie einen kostenlosen Erstberatungstermin für Ihre Compliance-Herausforderungen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Academy', 
          url: '/academy', 
          description: 'Umfassende Lernplattform für Compliance-Themen. Erweitern Sie Ihr Wissen mit interaktiven Kursen, Webinaren und Zertifizierungen zu DSGVO, ISO-Standards und KI-Compliance.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Dashboard', 
          url: '/dashboard', 
          description: 'Ihr persönliches Compliance-Dashboard. Verwalten Sie alle Compliance-Aktivitäten, überwachen Sie KPIs, erstellen Sie Reports und behalten Sie den Überblick über Ihre Compliance-Status in Echtzeit.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Danke', 
          url: '/thank-you', 
          description: 'Bestätigungsseite nach erfolgreicher Formularübermittlung. Sie erhalten hier wichtige Informationen zu den nächsten Schritten und unserem Follow-up-Prozess.', 
          priority: 'low',
          available: true 
        },
      ]
    },
    {
      id: 'regulations',
      icon: '⚖️',
      title: 'Regulierungen',
      items: [
        { 
          title: 'DSGVO', 
          url: '/dsgvo', 
          description: 'Premium DSGVO-Compliance Service. Umfassender Guide zur Datenschutz-Grundverordnung (GDPR). Erfahren Sie alles über Betroffenenrechte, Verarbeitungsverzeichnisse, TOMs, Meldepflichten und praktische Umsetzungstipps für Ihr Unternehmen.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'EU AI Act', 
          url: '/eu-ai-act', 
          description: 'Premium EU AI Act Compliance Service. Kompletter Leitfaden zur EU-Verordnung über Künstliche Intelligenz. Verstehen Sie Risikoklassen, Konformitätsbewertungen, Transparenzpflichten und technische Dokumentationsanforderungen für KI-Systeme.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'NIS-2 Compliance', 
          url: '/nis2-compliance', 
          description: 'NIS-2 Compliance Service. Detaillierte Informationen zur Network and Information Security Directive 2.0. Prüfen Sie Ihre Betroffenheit, verstehen Sie Meldepflichten und implementieren Sie erforderliche Cybersecurity-Maßnahmen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Hinweisgeberschutzgesetz', 
          url: '/hinweisgeberschutzgesetz', 
          description: 'Hinweisgeberschutz-Service. Vollständiger Guide zum Whistleblower-Schutz in Deutschland. Erfahren Sie alles über interne Meldekanäle, Vertraulichkeitsanforderungen und Schutzmaßnahmen für Hinweisgeber nach HinSchG.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Geldwäschegesetz', 
          url: '/geldwaeschegesetz', 
          description: 'Anti-Geldwäsche-Service. Praxisorientierter Leitfaden zu Anti-Geldwäsche-Bestimmungen (AML). Verstehen Sie Sorgfaltspflichten, Risikomanagement, Verdachtsmeldungen und interne Sicherungsmaßnahmen nach GwG.', 
          priority: 'medium',
          available: true 
        },
      ]
    },
    {
      id: 'certifications',
      icon: '🏆',
      title: 'Zertifizierungen',
      items: [
        { 
          title: 'ISO 27001 Zertifizierung', 
          url: '/iso-27001-zertifizierung', 
          description: 'Professionelle ISO 27001 Zertifizierungsberatung. Der internationale Standard für Informationssicherheits-Managementsysteme (ISMS). Schritt-für-Schritt-Anleitung zur Implementierung, Zertifizierungsvorbereitung und kontinuierlichen Verbesserung Ihrer IT-Sicherheit.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'SOC 2 Zertifizierung', 
          url: '/soc2-zertifizierung', 
          description: 'Professionelle SOC 2 Zertifizierungsberatung. System and Organization Controls 2 für Service-Provider. Meistern Sie die fünf Trust Service Principles (Sicherheit, Verfügbarkeit, Vertraulichkeit, Verarbeitungsintegrität, Datenschutz) für Ihre Cloud-Services.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'ISO 27017 Zertifizierung', 
          url: '/iso-27017-zertifizierung', 
          description: 'Cloud Security Zertifizierungsberatung. Spezifische Sicherheitskontrollen für Cloud-Services. Erweitern Sie Ihr ISO 27001 ISMS um Cloud-spezifische Controls für Provider und Nutzer von Cloud-Diensten.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'ISO 27018 Zertifizierung', 
          url: '/iso-27018-zertifizierung', 
          description: 'Cloud Privacy Zertifizierungsberatung. Datenschutz in der Cloud für personenbezogene Daten. Implementieren Sie spezielle Privacy-Controls für Public Cloud PII (Personally Identifiable Information) Prozessoren.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'TISAX Zertifizierung', 
          url: '/tisax-zertifizierung', 
          description: 'Automotive Security Zertifizierungsberatung. Trusted Information Security Assessment Exchange für die Automobilindustrie. Erfüllen Sie die spezifischen Anforderungen der Automobilhersteller an Informationssicherheit und Datenschutz.', 
          priority: 'medium',
          available: true 
        },
      ]
    },
    {
      id: 'industries',
      icon: '🏭',
      title: 'Branchen',
      items: [
        { 
          title: 'Branchen Übersicht', 
          url: '/branchen', 
          description: 'Entdecken Sie maßgeschneiderte Compliance-Lösungen für Ihre Branche. Von Healthcare über FinTech bis zur Industrie 4.0 - finden Sie spezifische Anforderungen und Best Practices.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Gesundheitswesen', 
          url: '/branchen/gesundheitswesen', 
          description: 'Spezielle Compliance-Anforderungen für Healthcare. Patientendatenschutz nach DSGVO, Gesundheitsdatenverarbeitung, Telemedizin-Compliance und Zusammenarbeit mit Krankenkassen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Finanzdienstleister', 
          url: '/branchen/finanzdienstleister', 
          description: 'Compliance für Banken, Versicherungen und FinTechs. MaRisk, BAIT, PSD2, AML-Compliance und spezielle Anforderungen der BaFin für den Finanzsektor.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'E-Commerce', 
          url: '/branchen/e-commerce', 
          description: 'Online-Handel compliant gestalten. Cookie-Management, Kundendatenschutz, grenzüberschreitender Datenverkehr, Newsletter-Marketing und Plattform-Compliance.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'SaaS Unternehmen', 
          url: '/branchen/saas-unternehmen', 
          description: 'Software-as-a-Service Compliance Excellence. Auftragsverarbeitung, Privacy by Design, internationale Datentransfers, SLAs und Multi-Tenant-Architekturen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Produktion', 
          url: '/branchen/produktion', 
          description: 'Manufacturing und Industrie 4.0 Compliance. IoT-Sicherheit, Maschinendaten-Schutz, Supply Chain Security und OT-Sicherheit in vernetzten Produktionsumgebungen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Automotive', 
          url: '/branchen/automotive', 
          description: 'Automobilindustrie-spezifische Compliance. TISAX-Anforderungen, Connected Car Datenschutz, Lieferanten-Management und Prototypenschutz.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Energie', 
          url: '/branchen/energie', 
          description: 'Energiesektor und kritische Infrastrukturen. Smart Meter Datenschutz, KRITIS-Anforderungen, IT-Sicherheitskatalog und Netzbetreiber-Compliance.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Lebensmittel', 
          url: '/branchen/lebensmittel', 
          description: 'Food Industry Compliance und Rückverfolgbarkeit. Lieferketten-Transparenz, Kundendaten in Loyalty-Programmen und HACCP-Integration.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Logistik', 
          url: '/branchen/logistik', 
          description: 'Transport und Logistik Compliance. Tracking-Daten, Fahrerdatenschutz, internationale Warenströme und Supply Chain Visibility.', 
          priority: 'medium',
          available: true 
        },
      ]
    },
    {
      id: 'tools',
      icon: '🛠️',
      title: 'Tools',
      items: [
        { 
          title: 'Tools Übersicht', 
          url: '/tools', 
          description: 'Entdecken Sie unsere Suite von Compliance-Tools. Von KI-Assistenten über Cookie-Management bis zu Whistleblower-Systemen - alle Tools für effiziente Compliance.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Compliance AI Assistant', 
          url: '/tools/compliance-ai-assistant', 
          description: 'Ihr KI-gestützter Compliance-Berater. Stellen Sie Fragen zu DSGVO, ISO 27001 oder EU AI Act und erhalten Sie sofort fundierte, praxisnahe Antworten und Handlungsempfehlungen.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Cookie Management', 
          url: '/tools/cookie-management', 
          description: 'Professionelles Cookie-Consent Management Tool. DSGVO-konforme Cookie-Banner, granulare Einwilligungsverwaltung und automatische Cookie-Scans für Ihre Website.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Whistleblower System', 
          url: '/tools/whistleblower-system', 
          description: 'Sicheres digitales Hinweisgebersystem nach HinSchG. Anonyme Meldungen, verschlüsselte Kommunikation und revisionssichere Dokumentation für gesetzeskonforme Meldeprozesse.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Cookie Management Tool', 
          url: '/tools/cookie-management-tool', 
          description: 'Enterprise Cookie Management Lösung. Erweiterte Features wie Cookie-Kategorisierung, Consent-Analytics, Multi-Domain-Support und API-Integration.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Whistleblower System Tool', 
          url: '/tools/whistleblower-system-tool', 
          description: 'Professionelles Hinweisgebersystem mit Case Management. Workflow-Automatisierung, Mehrsprachigkeit und Integration in bestehende Compliance-Prozesse.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'DSGVO E-Mail Templates', 
          url: '/tools/dsgvo-email-template-generator', 
          description: 'Generator für DSGVO-konforme E-Mail-Vorlagen. Erstellen Sie rechtssichere Antworten für Auskunftsersuchen, Löschanfragen und andere Betroffenenrechte.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'DSGVO Compliance Scorecard', 
          url: '/tools/dsgvo-compliance-scorecard', 
          description: 'Bewerten Sie Ihren DSGVO-Compliance-Status. Interaktive Scorecard mit Benchmarking, Gap-Analyse und priorisierten Handlungsempfehlungen für Verbesserungen.', 
          priority: 'medium',
          available: true 
        },
      ]
    },
    {
      id: 'assessments',
      icon: '📊',
      title: 'Assessment Center',
      items: [
        { 
          title: 'Assessment Center', 
          url: '/assessment-center', 
          description: 'Zentrale Anlaufstelle für alle Self-Assessments. Prüfen Sie Ihre Compliance-Readiness mit interaktiven Tools und erhalten Sie detaillierte Auswertungen mit Handlungsempfehlungen.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'DSGVO Compliance Checklist', 
          url: '/assessment-center/dsgvo-compliance-checklist', 
          description: 'Umfassende DSGVO-Checkliste mit über 100 Prüfpunkten. Systematische Überprüfung aller DSGVO-Anforderungen von Rechtsgrundlagen bis zu technischen Maßnahmen.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Datenschutz Readiness Assessment', 
          url: '/assessment-center/datenschutz-readiness-assessment', 
          description: 'Bewerten Sie Ihre Datenschutz-Bereitschaft. Analysieren Sie Prozesse, Dokumentation, technische Maßnahmen und organisatorische Strukturen für optimalen Datenschutz.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Breach Response Checklist', 
          url: '/assessment-center/breach-response-checklist', 
          description: 'Notfall-Checkliste für Datenpannen. Schritt-für-Schritt-Anleitung für die ersten 72 Stunden, Meldepflichten, Kommunikation und Schadensbegrenzung.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Cookie Compliance Audit', 
          url: '/assessment-center/cookie-compliance-audit', 
          description: 'Detaillierte Überprüfung Ihrer Cookie-Compliance. Analyse von Cookie-Typen, Einwilligungsprozessen, Speicherdauer und Drittanbieter-Integration.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Vendor Assessment Template', 
          url: '/assessment-center/vendor-assessment-template', 
          description: 'Strukturierte Bewertung von Lieferanten und Auftragsverarbeitern. Prüfen Sie Datenschutz, Sicherheit und Compliance Ihrer Partner systematisch.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'AI Risk Assessment', 
          url: '/assessment-center/ai-risk-assessment', 
          description: 'Bewerten Sie Risiken Ihrer KI-Systeme nach EU AI Act. Klassifizierung, Risikobewertung und Maßnahmenplanung für konforme KI-Implementierung.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Algorithmic Impact Assessment', 
          url: '/assessment-center/algorithmic-impact-assessment', 
          description: 'Folgenabschätzung für algorithmische Entscheidungssysteme. Analysieren Sie Auswirkungen auf Betroffene, Fairness und potenzielle Diskriminierungsrisiken.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'AI Governance Check', 
          url: '/assessment-center/ai-governance-check', 
          description: 'Überprüfen Sie Ihre KI-Governance-Strukturen. Von Richtlinien über Verantwortlichkeiten bis zu Monitoring-Prozessen für verantwortungsvolle KI.', 
          priority: 'high',
          available: true 
        },
      ]
    },
    {
      id: 'knowledge',
      icon: '📚',
      title: 'Wissen',
      items: [
        { 
          title: 'Wissen Übersicht', 
          url: '/wissen', 
          description: 'Ihre zentrale Compliance-Wissensdatenbank. Zugriff auf Guides, Best Practices, Vorlagen und aktuelle Informationen zu allen relevanten Compliance-Themen.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'DSGVO Wissen', 
          url: '/wissen/dsgvo', 
          description: 'Umfassendes DSGVO-Kompendium. Von Grundlagen über Betroffenenrechte bis zu komplexen Themen wie internationale Datentransfers und Auftragsverarbeitung.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'KI Compliance', 
          url: '/wissen/ki-compliance', 
          description: 'Alles zu KI und Datenschutz. EU AI Act, algorithmische Transparenz, Bias-Vermeidung und ethische KI-Entwicklung für compliant AI-Systeme.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Cybersecurity', 
          url: '/wissen/cybersecurity', 
          description: 'IT-Sicherheit trifft Compliance. Verbinden Sie technische Sicherheitsmaßnahmen mit rechtlichen Anforderungen für ganzheitlichen Schutz.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'DSGVO Leitfäden', 
          url: '/wissen/dsgvo-leitfaeden', 
          description: 'Praktische DSGVO-Guides für den Alltag. Schritt-für-Schritt-Anleitungen für häufige Compliance-Herausforderungen und bewährte Umsetzungsstrategien.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Risk Management', 
          url: '/wissen/risk-management', 
          description: 'Systematisches Risikomanagement für Compliance. Identifikation, Bewertung und Behandlung von Datenschutz- und Sicherheitsrisiken.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Compliance Frameworks', 
          url: '/wissen/compliance-frameworks', 
          description: 'Überblick über alle relevanten Compliance-Rahmenwerke. Vergleichen Sie Anforderungen, finden Sie Synergien und optimieren Sie Ihre Compliance-Strategie.', 
          priority: 'medium',
          available: true 
        },
      ]
    },
    {
      id: 'dsgvo-guides',
      icon: '📖',
      title: 'DSGVO Leitfäden',
      items: [
        { 
          title: 'DSGVO Grundlagen', 
          url: '/wissen/leitfaden/dsgvo-grundlagen', 
          description: 'Fundamentales DSGVO-Basiswissen verständlich erklärt. Prinzipien, Rechtsgrundlagen, Verantwortlichkeiten und die wichtigsten Konzepte der Datenschutz-Grundverordnung.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Website DSGVO', 
          url: '/wissen/leitfaden/website-dsgvo', 
          description: 'DSGVO-Compliance für Websites und Online-Dienste. Datenschutzerklärung, Cookie-Banner, Kontaktformulare und Tracking rechtssicher gestalten.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Data Breach Notfall', 
          url: '/wissen/leitfaden/data-breach-notfall', 
          description: 'Notfallplan für Datenschutzverletzungen. 72-Stunden-Frist, Meldewege, Dokumentation und Kommunikation bei Datenpannen professionell managen.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'DSGVO in 30 Tagen', 
          url: '/wissen/leitfaden/dsgvo-30-tage', 
          description: 'Express-Guide zur DSGVO-Compliance in einem Monat. Priorisierter Aktionsplan mit täglichen Aufgaben für schnelle Basis-Compliance.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Verarbeitungsverzeichnis', 
          url: '/wissen/leitfaden/verarbeitungsverzeichnis', 
          description: 'Anleitung zur Erstellung eines rechtssicheren Verarbeitungsverzeichnisses. Vorlagen, Beispiele und Tipps für die vollständige Dokumentation aller Verarbeitungstätigkeiten.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Betroffenenrechte', 
          url: '/wissen/leitfaden/betroffenenrechte', 
          description: 'Umgang mit Rechten betroffener Personen. Auskunft, Löschung, Berichtigung, Datenportabilität - Prozesse und Fristen professionell managen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'TOM Maßnahmen', 
          url: '/wissen/leitfaden/tom-massnahmen', 
          description: 'Technische und organisatorische Maßnahmen nach Art. 32 DSGVO. Verschlüsselung, Zugangskontrollen, Pseudonymisierung und weitere Schutzmaßnahmen implementieren.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'DSFA Durchführung', 
          url: '/wissen/leitfaden/dsfa-durchfuehrung', 
          description: 'Datenschutz-Folgenabschätzung professionell durchführen. Wann ist sie nötig, wie läuft sie ab und welche Dokumentation ist erforderlich.', 
          priority: 'medium',
          available: true 
        },
      ]
    },
    {
      id: 'compliance-guides',
      icon: '📋',
      title: 'Compliance Guides',
      items: [
        { 
          title: 'DSGVO Guide', 
          url: '/compliance/dsgvo', 
          description: 'Der ultimative DSGVO-Compliance-Guide. Komplette Abdeckung aller Artikel, praktische Umsetzungshilfen und branchenspezifische Besonderheiten.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'EU AI Act Guide', 
          url: '/compliance/eu-ai-act', 
          description: 'Vollständiger Leitfaden zur KI-Verordnung der EU. Risikoklassifizierung, Konformitätsbewertung, CE-Kennzeichnung und Marktüberwachung für KI-Systeme.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'ISO 27001 Guide', 
          url: '/compliance/iso-27001', 
          description: 'Praxisguide zur ISO 27001 Implementierung. ISMS-Aufbau, Risikoanalyse, Controls-Implementierung und Zertifizierungsvorbereitung Schritt für Schritt.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'SOC 2 Guide', 
          url: '/compliance/soc-2', 
          description: 'SOC 2 Compliance für Service Provider. Trust Service Criteria verstehen, Controls implementieren und erfolgreich auditieren lassen.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'NIS-2 Guide', 
          url: '/compliance/nis2', 
          description: 'NIS-2 Richtlinie verstehen und umsetzen. Anwendungsbereich, Cybersicherheitsmaßnahmen, Meldepflichten und Sanktionen im Detail erklärt.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'ISO 27017 Guide', 
          url: '/compliance/iso-27017', 
          description: 'Cloud Security nach ISO 27017. Spezifische Controls für Cloud-Provider und Cloud-Nutzer zur Absicherung von Cloud-Services.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'ISO 27018 Guide', 
          url: '/compliance/iso-27018', 
          description: 'Datenschutz in der Public Cloud. PII-Schutz, Transparenzanforderungen und spezielle Privacy-Controls für Cloud-Prozessoren.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Hinweisgeberschutz Guide', 
          url: '/compliance/hinweisgeberschutzgesetz', 
          description: 'HinSchG compliant umsetzen. Interne Meldestellen einrichten, Vertraulichkeit gewährleisten und Hinweisgeber wirksam schützen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'TISAX Guide', 
          url: '/compliance/tisax', 
          description: 'TISAX Assessment erfolgreich bestehen. VDA ISA Anforderungen, Assessment-Level, ENX-Anbindung und Zertifikatsverwaltung.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Geldwäschegesetz Guide', 
          url: '/compliance/geldwaeschegesetz', 
          description: 'GwG-Compliance sicherstellen. Risikoanalyse, Sorgfaltspflichten, Verdachtsmeldungen und interne Sicherungsmaßnahmen implementieren.', 
          priority: 'medium',
          available: true 
        },
      ]
    },
    {
      id: 'crisis-management',
      icon: '🚨',
      title: 'Krisenmanagement',
      items: [
        { 
          title: 'Krisenmanagement', 
          url: '/wissen/krisenmanagement', 
          description: 'Krisenmanagement-Zentrale für Compliance-Notfälle. Sofortmaßnahmen, Kommunikationsstrategien und Schadensbegrenzung bei Compliance-Vorfällen.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Data Breach 72h', 
          url: '/wissen/krisenmanagement/data-breach-72h', 
          description: 'Die kritischen ersten 72 Stunden nach einer Datenpanne. Meldung an Aufsichtsbehörde, Betroffeneninformation und Schadensbegrenzung unter Zeitdruck.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'DSGVO Bußgeld Response', 
          url: '/wissen/krisenmanagement/gdpr-fine-response', 
          description: 'Professioneller Umgang mit DSGVO-Bußgeldbescheiden. Rechtsmittel, Stellungnahmen, Verhandlungsstrategien und Schadensbegrenzung.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Security Incident', 
          url: '/wissen/krisenmanagement/security-incident', 
          description: 'IT-Sicherheitsvorfälle managen. Incident Response, forensische Analyse, Wiederherstellung und Kommunikation bei Cyberangriffen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Communication Templates', 
          url: '/wissen/krisenmanagement/communication-templates', 
          description: 'Krisenkommunikation vorbereitet. Vorlagen für Behördenmeldungen, Betroffeneninformation, Pressemitteilungen und interne Kommunikation.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Compliance Audit Emergency', 
          url: '/wissen/krisenmanagement/compliance-audit-emergency', 
          description: 'Notfall-Audit-Vorbereitung. Wenn die Aufsichtsbehörde vor der Tür steht - Sofortmaßnahmen und Dokumentenvorbereitung.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Vendor Data Breach', 
          url: '/wissen/krisenmanagement/vendor-data-breach', 
          description: 'Datenpanne beim Dienstleister. Verantwortlichkeiten klären, Meldepflichten erfüllen und Haftungsrisiken minimieren.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Business Continuity', 
          url: '/wissen/krisenmanagement/business-continuity', 
          description: 'Geschäftskontinuität bei Compliance-Krisen. Notfallpläne, Ausweichprozesse und Wiederanlauf nach schweren Vorfällen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Media Crisis', 
          url: '/wissen/krisenmanagement/media-crisis', 
          description: 'Medienkrisen bei Datenschutzvorfällen. Reputationsschutz, Krisenkommunikation und proaktives Medienmanagement.', 
          priority: 'low',
          available: true 
        },
      ]
    },
    {
      id: 'legal-cases',
      icon: '⚖️',
      title: 'Rechtsprechung',
      items: [
        { 
          title: 'Rechtsprechung', 
          url: '/wissen/rechtsprechung', 
          description: 'Wichtige Urteile und ihre Auswirkungen. Bleiben Sie informiert über wegweisende Gerichtsentscheidungen zu Datenschutz und Compliance.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Schrems II', 
          url: '/wissen/rechtsprechung/schrems-ii', 
          description: 'Das wegweisende EuGH-Urteil zu internationalen Datentransfers. Privacy Shield ungültig, SCCs unter Auflagen - was das für Ihr Unternehmen bedeutet.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Meta Irland 2024', 
          url: '/wissen/rechtsprechung/meta-irland-2024', 
          description: 'Rekord-Bußgeld gegen Meta Ireland. 1,2 Milliarden Euro wegen illegaler Datentransfers - Lehren für internationale Datenverarbeitung.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Cookie Law', 
          url: '/wissen/rechtsprechung/cookie-law', 
          description: 'Aktuelle Cookie-Rechtsprechung im Überblick. Von Planet49 bis zu aktuellen Urteilen - was gilt für Cookie-Consent.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Facebook Fanpage', 
          url: '/wissen/rechtsprechung/facebook-fanpage', 
          description: 'Gemeinsame Verantwortlichkeit bei Facebook-Fanpages. Was Seitenbetreiber beachten müssen und welche Pflichten entstehen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Google Analytics Austria', 
          url: '/wissen/rechtsprechung/google-analytics-austria', 
          description: 'Österreichisches Urteil zu Google Analytics. Warum die DSB Google Analytics für rechtswidrig hält und Alternativen gefragt sind.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Amazon Luxemburg 2021', 
          url: '/wissen/rechtsprechung/amazon-luxemburg-2021', 
          description: '746 Millionen Euro Bußgeld gegen Amazon. Targetierte Werbung ohne ausreichende Einwilligung - ein Präzedenzfall.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'WhatsApp Irland 2021', 
          url: '/wissen/rechtsprechung/whatsapp-irland-2021', 
          description: '225 Millionen Euro wegen Transparenzverletzungen. WhatsApp-Urteil zeigt Bedeutung klarer Datenschutzinformationen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Planet49 Cookie', 
          url: '/wissen/rechtsprechung/planet49-cookie', 
          description: 'EuGH-Grundsatzurteil zu Cookie-Einwilligungen. Opt-in statt Opt-out, keine vorangekreuzten Checkboxen - neue Standards.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Google Fonts München', 
          url: '/wissen/rechtsprechung/google-fonts-muenchen', 
          description: 'LG München zu Google Fonts Einbindung. Schadensersatz wegen dynamischer IP-Übertragung - Folgen für Webseitenbetreiber.', 
          priority: 'medium',
          available: true 
        },
      ]
    },
    {
      id: 'industry-knowledge',
      icon: '🏢',
      title: 'Branchen-Wissen',
      items: [
        { 
          title: 'Branchen-Wissen Übersicht', 
          url: '/wissen/branchen', 
          description: 'Branchenspezifisches Compliance-Wissen. Verstehen Sie die besonderen Anforderungen Ihrer Industrie und lernen Sie von Best Practices.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Gesundheitswesen DSGVO', 
          url: '/wissen/branchen/gesundheitswesen-dsgvo', 
          description: 'DSGVO im Healthcare-Sektor. Patientendaten, Forschungsprivileg, eHealth-Anwendungen und Zusammenarbeit mit Kostenträgern compliant gestalten.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Fintech Compliance', 
          url: '/wissen/branchen/fintech-compliance', 
          description: 'Compliance-Herausforderungen für FinTechs. PSD2, KYC/AML, Open Banking und Datenschutz in der digitalen Finanzwelt meistern.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'E-Commerce Privacy', 
          url: '/wissen/branchen/ecommerce-privacy', 
          description: 'Datenschutz im Online-Handel optimieren. Kundendatenmanagement, Profilbildung, Retargeting und Cross-Border-Commerce rechtssicher.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'SaaS Privacy Design', 
          url: '/wissen/branchen/saas-privacy-design', 
          description: 'Privacy by Design für SaaS-Lösungen. Multi-Tenancy, Datenportabilität, internationale Kunden und Subprozessoren managen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Industrie 4.0 Datenschutz', 
          url: '/wissen/branchen/industrie-40-datenschutz', 
          description: 'Datenschutz in der vernetzten Produktion. IoT-Sicherheit, Predictive Maintenance, Digital Twins und Mitarbeiterdatenschutz.', 
          priority: 'medium',
          available: true 
        },
      ]
    },
    {
      id: 'ai-compliance',
      icon: '🤖',
      title: 'KI & Datenschutz',
      items: [
        { 
          title: 'KI Risikoklassifizierung', 
          url: '/wissen/ki-datenschutz/risikoklassifizierung', 
          description: 'EU AI Act Risikoklassen verstehen. Minimal, begrenzt, hoch oder inakzeptabel - klassifizieren Sie Ihre KI-Systeme korrekt.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Algorithmic Impact Assessment', 
          url: '/wissen/ki-datenschutz/algorithmic-impact-assessment', 
          description: 'Algorithmische Folgenabschätzung durchführen. Bias-Erkennung, Fairness-Metriken und gesellschaftliche Auswirkungen systematisch bewerten.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Privacy by Design AI', 
          url: '/wissen/ki-datenschutz/privacy-by-design-ai', 
          description: 'Datenschutz von Anfang an in KI-Systeme integrieren. Datenminimierung, Zweckbindung und Transparenz in Machine Learning Projekten.', 
          priority: 'high',
          available: true 
        },
        { 
          title: 'Privacy-Preserving AI', 
          url: '/wissen/ki-datenschutz/privacy-preserving-ai', 
          description: 'Datenschutzfreundliche KI-Technologien. Differential Privacy, Homomorphe Verschlüsselung und Secure Multi-Party Computation.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Federated Learning', 
          url: '/wissen/ki-datenschutz/federated-learning', 
          description: 'Dezentrales Machine Learning für Datenschutz. Modelle trainieren ohne Rohdatenaustausch - Konzepte und Implementierung.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Explainable AI', 
          url: '/wissen/ki-datenschutz/explainable-ai', 
          description: 'Erklärbare KI für Transparenzpflichten. LIME, SHAP und andere XAI-Methoden für nachvollziehbare algorithmic decisions.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Financial AI Compliance', 
          url: '/wissen/ki-datenschutz/financial-ai-compliance', 
          description: 'KI-Compliance im Finanzsektor. Automated decision-making, Kreditscoring, Betrugserkennung und regulatorische Anforderungen.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'HR AI Compliance', 
          url: '/wissen/ki-datenschutz/hr-ai-compliance', 
          description: 'KI im Personalwesen compliant einsetzen. Bewerbermanagement, Performance-Analysen und Mitarbeiter-Profiling rechtssicher.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Model Privacy Attacks', 
          url: '/wissen/ki-datenschutz/model-privacy-attacks', 
          description: 'Datenschutzrisiken in ML-Modellen. Model Inversion, Membership Inference und Schutzmaßnahmen gegen Privacy-Angriffe.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Data Minimization AI', 
          url: '/wissen/ki-datenschutz/data-minimization', 
          description: 'Datenminimierung in KI-Projekten. Synthetic Data, Data Augmentation und sparsame Trainingsstrategien für DSGVO-Compliance.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'KI Einwilligungsmanagement', 
          url: '/wissen/ki-datenschutz/ki-einwilligungsmanagement', 
          description: 'Einwilligungen für KI-Verarbeitung. Transparente Information, granulare Consent-Optionen und Widerrufsmöglichkeiten.', 
          priority: 'medium',
          available: true 
        },
        { 
          title: 'Automated Decision Making', 
          url: '/wissen/ki-datenschutz/automated-decision-making', 
          description: 'Art. 22 DSGVO und automatisierte Entscheidungen. Wann ist menschliche Überprüfung nötig, welche Rechte haben Betroffene.', 
          priority: 'medium',
          available: true 
        },
      ]
    },
    {
      id: 'legacy-routes',
      icon: '🔗',
      title: 'Legacy Routes',
      items: [
        { 
          title: 'DSGVO Compliance (Legacy)', 
          url: '/dsgvo-compliance', 
          description: 'Alte URL für DSGVO-Compliance-Seite. Bitte nutzen Sie die neue URL /regulierung/dsgvo für aktuelle Inhalte.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'ISO 27001 Compliance (Legacy)', 
          url: '/iso-27001-compliance', 
          description: 'Alte URL für ISO 27001 Seite. Bitte nutzen Sie die neue URL /zertifizierung/iso-27001 für aktuelle Inhalte.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'EU AI Act Compliance (Legacy)', 
          url: '/eu-ai-act-compliance', 
          description: 'Alte URL für EU AI Act Seite. Bitte nutzen Sie die neue URL /regulierung/eu-ai-act für aktuelle Inhalte.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'SOC2 Compliance (Legacy)', 
          url: '/soc2-compliance', 
          description: 'Alte URL für SOC 2 Seite. Bitte nutzen Sie die neue URL /zertifizierung/soc2 für aktuelle Inhalte.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'ISO 27017 Compliance (Legacy)', 
          url: '/iso-27017-compliance', 
          description: 'Alte URL für ISO 27017 Seite. Bitte nutzen Sie die neue URL /zertifizierung/iso-27017 für aktuelle Inhalte.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'ISO 27018 Compliance (Legacy)', 
          url: '/iso-27018-compliance', 
          description: 'Alte URL für ISO 27018 Seite. Bitte nutzen Sie die neue URL /zertifizierung/iso-27018 für aktuelle Inhalte.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'TISAX Compliance (Legacy)', 
          url: '/tisax-compliance', 
          description: 'Alte URL für TISAX Seite. Bitte nutzen Sie die neue URL /zertifizierung/tisax für aktuelle Inhalte.', 
          priority: 'low',
          available: true 
        },
      ]
    },
    {
      id: 'unlinked',
      icon: '🧪',
      title: 'Test-Seiten (Entwicklung)',
      items: [
        { 
          title: 'Design Separator Test', 
          url: '/design-separator-test', 
          description: 'Testseite für verschiedene Design-Separatoren und visuelle Elemente. Wird für UI/UX-Experimente genutzt.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Simple Test', 
          url: '/simple-test', 
          description: 'Einfache Testseite für grundlegende Funktionalitäten und Component-Tests.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Tests Übersicht', 
          url: '/tests', 
          description: 'Übersicht aller Test-Seiten für interne Entwicklung und Quality Assurance.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Test 1', 
          url: '/test1', 
          description: 'Erste Test-Implementation für Scroll-Animationen und Interaktionen.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Test 2', 
          url: '/test2', 
          description: 'Zweite Iteration der Scroll-Animation Tests mit verbesserten Transitions.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Test 3', 
          url: '/test3', 
          description: 'Dritte Test-Version mit erweiterten Animation-Features.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Test Fixed', 
          url: '/test-fixed', 
          description: 'Fehlerbereinigte Version der Scroll-Animationen.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Test Perfect', 
          url: '/test-perfect', 
          description: 'Optimierte Version mit perfektionierten Animations-Timings.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Test Bidirectional', 
          url: '/test-bidirectional', 
          description: 'Test für bidirektionale Scroll-Animationen und Reverse-Effekte.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Test Final', 
          url: '/test-final', 
          description: 'Finale Test-Version vor Production-Release.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Test Perfected', 
          url: '/test-perfected', 
          description: 'Perfektionierte Implementation aller Animation-Features.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Approach 1', 
          url: '/approach1', 
          description: 'Erster Ansatz für neue Animation-Strategie.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Approach 2', 
          url: '/approach2', 
          description: 'Zweiter Ansatz mit alternativer Implementation.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Approach 3', 
          url: '/approach3', 
          description: 'Dritter Ansatz mit hybrider Lösung.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Diagnostic', 
          url: '/diagnostic', 
          description: 'Diagnose-Tool für Performance-Analyse der Animationen.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Ultimate Diagnostic', 
          url: '/ultimate-diagnostic', 
          description: 'Erweiterte Diagnose mit detaillierten Performance-Metriken.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Robust', 
          url: '/robust', 
          description: 'Robuste Implementation mit Fallback-Mechanismen.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Simple Final', 
          url: '/simple-final', 
          description: 'Vereinfachte finale Version für bessere Performance.', 
          priority: 'low',
          available: true 
        },
        { 
          title: 'Optimized', 
          url: '/optimized', 
          description: 'Performance-optimierte Version mit minimalen Ressourcen.', 
          priority: 'low',
          available: true 
        },
      ]
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-red-500';
      case 'medium': return 'border-yellow-500';
      case 'low': return 'border-green-500';
      default: return 'border-gray-500';
    }
  };

  const totalPages = sitemapCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  const availablePages = sitemapCategories.reduce((acc, cat) => 
    acc + cat.items.filter(item => item.available).length, 0
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-100 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 border-b-4 border-blue-600 pb-2 mb-6">
            🗺️ Marsstein Compliance Platform - Sitemap
          </h1>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-8 text-center">
            <strong className="text-blue-900">Gesamt: {totalPages} Seiten</strong>
            <span className="text-blue-700"> | Verfügbar: {availablePages} | Hauptkategorien: {sitemapCategories.length}</span>
          </div>

          {sitemapCategories.map((category) => {
            const categoryAvailable = category.items.filter(item => item.available).length;
            const categoryTotal = category.items.length;
            
            return (
              <div key={category.id} className="mb-6 border border-gray-300 rounded-lg bg-white">
                <div 
                  className="bg-gray-100 p-4 cursor-pointer rounded-t-lg flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-200 transition-colors"
                  onClick={() => toggleCategory(category.id)}
                >
                  <span>
                    {category.icon} {category.title} 
                    <span className="text-sm font-normal ml-2">({categoryAvailable}/{categoryTotal} verfügbar)</span>
                  </span>
                  <span className={`transition-transform duration-300 ${isExpanded(category.id) ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded(category.id) ? 'max-h-[3000px]' : 'max-h-0'}`}>
                  <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.items.map((item, index) => (
                      <div 
                        key={index} 
                        className={`p-3 rounded bg-gray-50 border-l-4 ${getPriorityColor(item.priority)} ${!item.available ? 'opacity-50' : ''}`}
                      >
                        <a 
                          href={item.available ? item.url : '#'} 
                          className={`font-medium block ${item.available ? 'text-blue-600 hover:text-blue-800 hover:underline' : 'text-gray-400 cursor-not-allowed'}`}
                          onClick={!item.available ? (e) => e.preventDefault() : undefined}
                        >
                          {item.title}
                          {!item.available && <span className="text-red-500 ml-2">(Nicht verfügbar)</span>}
                        </a>
                        <div className="text-xs text-gray-500 mt-1">
                          URL: <code className="bg-gray-200 px-1 rounded">{item.url}</code>
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{item.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold mb-2">Prioritäts-Legende:</h3>
            <div className="flex gap-6 flex-wrap">
              <span className="flex items-center">
                <span className="w-4 h-4 bg-red-500 mr-2"></span> Hoch (Kritische Seiten)
              </span>
              <span className="flex items-center">
                <span className="w-4 h-4 bg-yellow-500 mr-2"></span> Mittel (Wichtige Seiten)
              </span>
              <span className="flex items-center">
                <span className="w-4 h-4 bg-green-500 mr-2"></span> Niedrig (Zusätzliche Seiten)
              </span>
            </div>
          </div>

          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <h3 className="font-semibold mb-2 text-yellow-900">⚠️ Hinweis zu nicht verfügbaren Seiten:</h3>
            <p className="text-yellow-800">
              Einige Seiten sind derzeit noch in Entwicklung. Die als "Nicht verfügbar" markierten Seiten werden in Kürze hinzugefügt.
              Alle verfügbaren Seiten sind voll funktionsfähig und bieten umfassende Compliance-Informationen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitemapSEO;