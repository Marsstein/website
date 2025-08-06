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
  const createCheckItems = (pageId: string) => ({
    mobileReady: { id: `${pageId}-mobile`, title: 'Mobile Responsive Design', completed: false },
    seoOptimized: { id: `${pageId}-seo`, title: 'SEO Meta Tags & Struktur', completed: false },
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
          ...createCheckItems('home')
        },
        {
          title: 'Preise',
          url: '/pricing',
          description: 'Transparente Preisübersicht für alle Marsstein-Pakete. Vergleichen Sie unsere Starter-, Professional- und Enterprise-Lösungen mit detaillierten Feature-Listen und finden Sie das passende Paket für Ihr Unternehmen.',
          priority: 'high',
          available: true,
          ...createCheckItems('pricing')
        },
        {
          title: 'Kontakt',
          url: '/contact',
          description: 'Nehmen Sie Kontakt mit unserem Expertenteam auf. Nutzen Sie unser Kontaktformular für individuelle Beratung oder vereinbaren Sie einen kostenlosen Erstberatungstermin für Ihre Compliance-Herausforderungen.',
          priority: 'medium',
          available: true,
          ...createCheckItems('contact')
        },
        {
          title: 'Academy',
          url: '/academy',
          description: 'Umfassende Lernplattform für Compliance-Themen. Erweitern Sie Ihr Wissen mit interaktiven Kursen, Webinaren und Zertifizierungen zu DSGVO, ISO-Standards und KI-Compliance.',
          priority: 'medium',
          available: true,
          ...createCheckItems('academy')
        },
        {
          title: 'Dashboard',
          url: '/dashboard',
          description: 'Ihr persönliches Compliance-Dashboard. Verwalten Sie alle Compliance-Aktivitäten, überwachen Sie KPIs, erstellen Sie Reports und behalten Sie den Überblick über Ihre Compliance-Status in Echtzeit.',
          priority: 'medium',
          available: true,
          ...createCheckItems('dashboard')
        },
        {
          title: 'Danke',
          url: '/thank-you',
          description: 'Bestätigungsseite nach erfolgreicher Formularübermittlung. Sie erhalten hier wichtige Informationen zu den nächsten Schritten und unserem Follow-up-Prozess.',
          priority: 'low',
          available: true,
          ...createCheckItems('thank-you')
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
          url: '/regulierung/dsgvo',
          description: 'Umfassender Guide zur Datenschutz-Grundverordnung (GDPR). Erfahren Sie alles über Betroffenenrechte, Verarbeitungsverzeichnisse, TOMs, Meldepflichten und praktische Umsetzungstipps für Ihr Unternehmen.',
          priority: 'high',
          available: true,
          ...createCheckItems('dsgvo-reg')
        },
        {
          title: 'EU AI Act',
          url: '/regulierung/eu-ai-act',
          description: 'Kompletter Leitfaden zur EU-Verordnung über Künstliche Intelligenz. Verstehen Sie Risikoklassen, Konformitätsbewertungen, Transparenzpflichten und technische Dokumentationsanforderungen für KI-Systeme.',
          priority: 'high',
          available: true,
          ...createCheckItems('ai-act-reg')
        },
        {
          title: 'NIS-2',
          url: '/regulierung/nis2',
          description: 'Detaillierte Informationen zur Network and Information Security Directive 2.0. Prüfen Sie Ihre Betroffenheit, verstehen Sie Meldepflichten und implementieren Sie erforderliche Cybersecurity-Maßnahmen.',
          priority: 'medium',
          available: true,
          ...createCheckItems('nis2-reg')
        },
        {
          title: 'Hinweisgeberschutzgesetz',
          url: '/regulierung/hinweisgeberschutzgesetz',
          description: 'Vollständiger Guide zum Whistleblower-Schutz in Deutschland. Erfahren Sie alles über interne Meldekanäle, Vertraulichkeitsanforderungen und Schutzmaßnahmen für Hinweisgeber nach HinSchG.',
          priority: 'medium',
          available: true,
          ...createCheckItems('hinweisgeberschutz-reg')
        },
        {
          title: 'Geldwäschegesetz',
          url: '/regulierung/geldwaeschegesetz',
          description: 'Praxisorientierter Leitfaden zu Anti-Geldwäsche-Bestimmungen (AML). Verstehen Sie Sorgfaltspflichten, Risikomanagement, Verdachtsmeldungen und interne Sicherungsmaßnahmen nach GwG.',
          priority: 'medium',
          available: true,
          ...createCheckItems('geldwaeschegesetz-reg')
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
          url: '/zertifizierung/iso-27001',
          description: 'Der internationale Standard für Informationssicherheits-Managementsysteme (ISMS). Schritt-für-Schritt-Anleitung zur Implementierung, Zertifizierungsvorbereitung und kontinuierlichen Verbesserung Ihrer IT-Sicherheit.',
          priority: 'high',
          available: true,
          ...createCheckItems('iso27001-cert')
        },
        {
          title: 'SOC 2',
          url: '/zertifizierung/soc2',
          description: 'System and Organization Controls 2 für Service-Provider. Meistern Sie die fünf Trust Service Principles (Sicherheit, Verfügbarkeit, Vertraulichkeit, Verarbeitungsintegrität, Datenschutz) für Ihre Cloud-Services.',
          priority: 'high',
          available: true,
          ...createCheckItems('soc2-cert')
        },
        {
          title: 'ISO 27017',
          url: '/zertifizierung/iso-27017',
          description: 'Spezifische Sicherheitskontrollen für Cloud-Services. Erweitern Sie Ihr ISO 27001 ISMS um Cloud-spezifische Controls für Provider und Nutzer von Cloud-Diensten.',
          priority: 'medium',
          available: true,
          ...createCheckItems('iso27017-cert')
        },
        {
          title: 'ISO 27018',
          url: '/zertifizierung/iso-27018',
          description: 'Datenschutz in der Cloud für personenbezogene Daten. Implementieren Sie spezielle Privacy-Controls für Public Cloud PII (Personally Identifiable Information) Prozessoren.',
          priority: 'medium',
          available: true,
          ...createCheckItems('iso27018-cert')
        },
        {
          title: 'TISAX',
          url: '/zertifizierung/tisax',
          description: 'Trusted Information Security Assessment Exchange für die Automobilindustrie. Erfüllen Sie die spezifischen Anforderungen der Automobilhersteller an Informationssicherheit und Datenschutz.',
          priority: 'medium',
          available: true,
          ...createCheckItems('tisax-cert')
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
          ...createCheckItems('branchen-overview')
        },
        {
          title: 'Gesundheitswesen',
          url: '/branchen/gesundheitswesen',
          description: 'Spezielle Compliance-Anforderungen für Healthcare. Patientendatenschutz nach DSGVO, Gesundheitsdatenverarbeitung, Telemedizin-Compliance und Zusammenarbeit mit Krankenkassen.',
          priority: 'medium',
          available: true,
          ...createCheckItems('healthcare-industry')
        },
        {
          title: 'Finanzdienstleister',
          url: '/branchen/finanzdienstleister',
          description: 'Compliance für Banken, Versicherungen und FinTechs. MaRisk, BAIT, PSD2, AML-Compliance und spezielle Anforderungen der BaFin für den Finanzsektor.',
          priority: 'medium',
          available: true,
          ...createCheckItems('fintech-industry')
        },
        {
          title: 'E-Commerce',
          url: '/branchen/e-commerce',
          description: 'Online-Handel compliant gestalten. Cookie-Management, Kundendatenschutz, grenzüberschreitender Datenverkehr, Newsletter-Marketing und Plattform-Compliance.',
          priority: 'medium',
          available: true,
          ...createCheckItems('ecommerce-industry')
        },
        {
          title: 'SaaS Unternehmen',
          url: '/branchen/saas-unternehmen',
          description: 'Software-as-a-Service Compliance Excellence. Auftragsverarbeitung, Privacy by Design, internationale Datentransfers, SLAs und Multi-Tenant-Architekturen.',
          priority: 'medium',
          available: true,
          ...createCheckItems('saas-industry')
        },
        {
          title: 'Produktion',
          url: '/branchen/produktion',
          description: 'Manufacturing und Industrie 4.0 Compliance. IoT-Sicherheit, Maschinendaten-Schutz, Supply Chain Security und OT-Sicherheit in vernetzten Produktionsumgebungen.',
          priority: 'medium',
          available: true,
          ...createCheckItems('manufacturing-industry')
        },
        {
          title: 'Automotive',
          url: '/branchen/automotive',
          description: 'Automobilindustrie-spezifische Compliance. TISAX-Anforderungen, Connected Car Datenschutz, Lieferanten-Management und Prototypenschutz.',
          priority: 'medium',
          available: true,
          ...createCheckItems('automotive-industry')
        },
        {
          title: 'Energie',
          url: '/branchen/energie',
          description: 'Energiesektor und kritische Infrastrukturen. Smart Meter Datenschutz, KRITIS-Anforderungen, IT-Sicherheitskatalog und Netzbetreiber-Compliance.',
          priority: 'medium',
          available: true,
          ...createCheckItems('energy-industry')
        },
        {
          title: 'Lebensmittel',
          url: '/branchen/lebensmittel',
          description: 'Food Industry Compliance und Rückverfolgbarkeit. Lieferketten-Transparenz, Kundendaten in Loyalty-Programmen und HACCP-Integration.',
          priority: 'medium',
          available: true,
          ...createCheckItems('food-industry')
        },
        {
          title: 'Logistik',
          url: '/branchen/logistik',
          description: 'Transport und Logistik Compliance. Tracking-Daten, Fahrerdatenschutz, internationale Warenströme und Supply Chain Visibility.',
          priority: 'medium',
          available: true,
          ...createCheckItems('logistics-industry')
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
          ...createCheckItems('tools-overview')
        },
        {
          title: 'Compliance AI Assistant',
          url: '/tools/compliance-ai-assistant',
          description: 'Ihr KI-gestützter Compliance-Berater. Stellen Sie Fragen zu DSGVO, ISO 27001 oder EU AI Act und erhalten Sie sofort fundierte, praxisnahe Antworten und Handlungsempfehlungen.',
          priority: 'high',
          available: true,
          ...createCheckItems('ai-assistant-tool')
        },
        {
          title: 'Cookie Management',
          url: '/tools/cookie-management',
          description: 'Professionelles Cookie-Consent Management Tool. DSGVO-konforme Cookie-Banner, granulare Einwilligungsverwaltung und automatische Cookie-Scans für Ihre Website.',
          priority: 'medium',
          available: true,
          ...createCheckItems('cookie-mgmt-tool')
        },
        {
          title: 'Whistleblower System',
          url: '/tools/whistleblower-system',
          description: 'Sicheres digitales Hinweisgebersystem nach HinSchG. Anonyme Meldungen, verschlüsselte Kommunikation und revisionssichere Dokumentation für gesetzeskonforme Meldeprozesse.',
          priority: 'medium',
          available: true,
          ...createCheckItems('whistleblower-tool')
        },
        {
          title: 'Cookie Management Tool',
          url: '/tools/cookie-management-tool',
          description: 'Enterprise Cookie Management Lösung. Erweiterte Features wie Cookie-Kategorisierung, Consent-Analytics, Multi-Domain-Support und API-Integration.',
          priority: 'medium',
          available: true,
          ...createCheckItems('cookie-mgmt-enterprise')
        },
        {
          title: 'Whistleblower System Tool',
          url: '/tools/whistleblower-system-tool',
          description: 'Professionelles Hinweisgebersystem mit Case Management. Workflow-Automatisierung, Mehrsprachigkeit und Integration in bestehende Compliance-Prozesse.',
          priority: 'medium',
          available: true,
          ...createCheckItems('whistleblower-enterprise')
        },
        {
          title: 'DSGVO E-Mail Templates',
          url: '/tools/dsgvo-email-template-generator',
          description: 'Generator für DSGVO-konforme E-Mail-Vorlagen. Erstellen Sie rechtssichere Antworten für Auskunftsersuchen, Löschanfragen und andere Betroffenenrechte.',
          priority: 'medium',
          available: true,
          ...createCheckItems('email-templates')
        },
        {
          title: 'DSGVO Compliance Scorecard',
          url: '/tools/dsgvo-compliance-scorecard',
          description: 'Bewerten Sie Ihren DSGVO-Compliance-Status. Interaktive Scorecard mit Benchmarking, Gap-Analyse und priorisierten Handlungsempfehlungen für Verbesserungen.',
          priority: 'medium',
          available: true,
          ...createCheckItems('compliance-scorecard')
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
          ...createCheckItems('assessment-center')
        },
        {
          title: 'DSGVO Compliance Checklist',
          url: '/assessment-center/dsgvo-compliance-checklist',
          description: 'Umfassende DSGVO-Checkliste mit über 100 Prüfpunkten. Systematische Überprüfung aller DSGVO-Anforderungen von Rechtsgrundlagen bis zu technischen Maßnahmen.',
          priority: 'high',
          available: true,
          ...createCheckItems('dsgvo-checklist')
        },
        {
          title: 'Datenschutz Readiness Assessment',
          url: '/assessment-center/datenschutz-readiness-assessment',
          description: 'Bewerten Sie Ihre Datenschutz-Bereitschaft. Analysieren Sie Prozesse, Dokumentation, technische Maßnahmen und organisatorische Strukturen für optimalen Datenschutz.',
          priority: 'high',
          available: true,
          ...createCheckItems('privacy-readiness')
        },
        {
          title: 'Breach Response Checklist',
          url: '/assessment-center/breach-response-checklist',
          description: 'Notfall-Checkliste für Datenpannen. Schritt-für-Schritt-Anleitung für die ersten 72 Stunden, Meldepflichten, Kommunikation und Schadensbegrenzung.',
          priority: 'high',
          available: true,
          ...createCheckItems('breach-response')
        },
        {
          title: 'Cookie Compliance Audit',
          url: '/assessment-center/cookie-compliance-audit',
          description: 'Detaillierte Überprüfung Ihrer Cookie-Compliance. Analyse von Cookie-Typen, Einwilligungsprozessen, Speicherdauer und Drittanbieter-Integration.',
          priority: 'medium',
          available: true,
          ...createCheckItems('cookie-audit')
        },
        {
          title: 'Vendor Assessment Template',
          url: '/assessment-center/vendor-assessment-template',
          description: 'Strukturierte Bewertung von Lieferanten und Auftragsverarbeitern. Prüfen Sie Datenschutz, Sicherheit und Compliance Ihrer Partner systematisch.',
          priority: 'medium',
          available: true,
          ...createCheckItems('vendor-assessment')
        },
        {
          title: 'AI Risk Assessment',
          url: '/assessment-center/ai-risk-assessment',
          description: 'Bewerten Sie Risiken Ihrer KI-Systeme nach EU AI Act. Klassifizierung, Risikobewertung und Maßnahmenplanung für konforme KI-Implementierung.',
          priority: 'high',
          available: true,
          ...createCheckItems('ai-risk-assessment')
        },
        {
          title: 'Algorithmic Impact Assessment',
          url: '/assessment-center/algorithmic-impact-assessment',
          description: 'Folgenabschätzung für algorithmische Entscheidungssysteme. Analysieren Sie Auswirkungen auf Betroffene, Fairness und potenzielle Diskriminierungsrisiken.',
          priority: 'high',
          available: true,
          ...createCheckItems('algorithmic-impact')
        },
        {
          title: 'AI Governance Check',
          url: '/assessment-center/ai-governance-check',
          description: 'Überprüfen Sie Ihre KI-Governance-Strukturen. Von Richtlinien über Verantwortlichkeiten bis zu Monitoring-Prozessen für verantwortungsvolle KI.',
          priority: 'high',
          available: true,
          ...createCheckItems('ai-governance')
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
          ...createCheckItems('knowledge-overview')
        },
        {
          title: 'DSGVO Wissen',
          url: '/wissen/dsgvo',
          description: 'Umfassendes DSGVO-Kompendium. Von Grundlagen über Betroffenenrechte bis zu komplexen Themen wie internationale Datentransfers und Auftragsverarbeitung.',
          priority: 'high',
          available: true,
          ...createCheckItems('dsgvo-knowledge')
        },
        {
          title: 'KI Compliance',
          url: '/wissen/ki-compliance',
          description: 'Alles zu KI und Datenschutz. EU AI Act, algorithmische Transparenz, Bias-Vermeidung und ethische KI-Entwicklung für compliant AI-Systeme.',
          priority: 'high',
          available: true,
          ...createCheckItems('ki-compliance-knowledge')
        },
        {
          title: 'Cybersecurity',
          url: '/wissen/cybersecurity',
          description: 'IT-Sicherheit trifft Compliance. Verbinden Sie technische Sicherheitsmaßnahmen mit rechtlichen Anforderungen für ganzheitlichen Schutz.',
          priority: 'medium',
          available: true,
          ...createCheckItems('cybersecurity-knowledge')
        },
        {
          title: 'DSGVO Leitfäden',
          url: '/wissen/dsgvo-leitfaeden',
          description: 'Praktische DSGVO-Guides für den Alltag. Schritt-für-Schritt-Anleitungen für häufige Compliance-Herausforderungen und bewährte Umsetzungsstrategien.',
          priority: 'medium',
          available: true,
          ...createCheckItems('dsgvo-guides-knowledge')
        },
        {
          title: 'Risk Management',
          url: '/wissen/risk-management',
          description: 'Systematisches Risikomanagement für Compliance. Identifikation, Bewertung und Behandlung von Datenschutz- und Sicherheitsrisiken.',
          priority: 'medium',
          available: true,
          ...createCheckItems('risk-mgmt-knowledge')
        },
        {
          title: 'Compliance Frameworks',
          url: '/wissen/compliance-frameworks',
          description: 'Überblick über alle relevanten Compliance-Rahmenwerke. Vergleichen Sie Anforderungen, finden Sie Synergien und optimieren Sie Ihre Compliance-Strategie.',
          priority: 'medium',
          available: true,
          ...createCheckItems('frameworks-knowledge')
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
          ...createCheckItems('dsgvo-basics-guide')
        },
        {
          title: 'Website DSGVO',
          url: '/wissen/leitfaden/website-dsgvo',
          description: 'DSGVO-Compliance für Websites und Online-Dienste. Datenschutzerklärung, Cookie-Banner, Kontaktformulare und Tracking rechtssicher gestalten.',
          priority: 'high',
          available: true,
          ...createCheckItems('website-dsgvo-guide')
        },
        {
          title: 'Data Breach Notfall',
          url: '/wissen/leitfaden/data-breach-notfall',
          description: 'Notfallplan für Datenschutzverletzungen. 72-Stunden-Frist, Meldewege, Dokumentation und Kommunikation bei Datenpannen professionell managen.',
          priority: 'high',
          available: true,
          ...createCheckItems('data-breach-guide')
        },
        {
          title: 'DSGVO in 30 Tagen',
          url: '/wissen/leitfaden/dsgvo-30-tage',
          description: 'Express-Guide zur DSGVO-Compliance in einem Monat. Priorisierter Aktionsplan mit täglichen Aufgaben für schnelle Basis-Compliance.',
          priority: 'medium',
          available: true,
          ...createCheckItems('dsgvo-30-days-guide')
        },
        {
          title: 'Verarbeitungsverzeichnis',
          url: '/wissen/leitfaden/verarbeitungsverzeichnis',
          description: 'Anleitung zur Erstellung eines rechtssicheren Verarbeitungsverzeichnisses. Vorlagen, Beispiele und Tipps für die vollständige Dokumentation aller Verarbeitungstätigkeiten.',
          priority: 'medium',
          available: true,
          ...createCheckItems('processing-record-guide')
        },
        {
          title: 'Betroffenenrechte',
          url: '/wissen/leitfaden/betroffenenrechte',
          description: 'Umgang mit Rechten betroffener Personen. Auskunft, Löschung, Berichtigung, Datenportabilität - Prozesse und Fristen professionell managen.',
          priority: 'medium',
          available: true,
          ...createCheckItems('data-subject-rights-guide')
        },
        {
          title: 'TOM Maßnahmen',
          url: '/wissen/leitfaden/tom-massnahmen',
          description: 'Technische und organisatorische Maßnahmen nach Art. 32 DSGVO. Verschlüsselung, Zugangskontrollen, Pseudonymisierung und weitere Schutzmaßnahmen implementieren.',
          priority: 'medium',
          available: true,
          ...createCheckItems('tom-measures-guide')
        },
        {
          title: 'DSFA Durchführung',
          url: '/wissen/leitfaden/dsfa-durchfuehrung',
          description: 'Datenschutz-Folgenabschätzung professionell durchführen. Wann ist sie nötig, wie läuft sie ab und welche Dokumentation ist erforderlich.',
          priority: 'medium',
          available: true,
          ...createCheckItems('dpia-guide')
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
                  className="bg-gray-100 p-4 cursor-pointer rounded-t-lg flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-200 transition-colors"
                  onClick={() => toggleCategory(category.id)}
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
                  <span className={`transition-transform duration-300 ${isExpanded(category.id) ? 'rotate-90' : ''}`}>
                    ▶
                  </span>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ${isExpanded(category.id) ? 'max-h-[5000px]' : 'max-h-0'}`}>
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
                                URL: <code className="bg-gray-200 px-1 rounded">{page.url}</code>
                              </div>
                              <div className="text-sm text-gray-600">{page.description}</div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
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
                                  <div className="text-xs text-gray-600 leading-tight">
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