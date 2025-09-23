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
  },
  '/dsgvo-compliance': {
    title: 'DSGVO Compliance Lösung | Datenschutz-Management System | Marsstein',
    description: 'Vollautomatische DSGVO-Compliance für Ihr Unternehmen. KI-gestützte Überwachung, automatische Dokumentation und rechtssichere Prozesse.',
    keywords: 'DSGVO Compliance, Datenschutz-Management, GDPR Software, Compliance Automatisierung, Deutschland',
    ogTitle: 'DSGVO Compliance Lösung | Datenschutz-Management System',
    ogDescription: 'Vollautomatische DSGVO-Compliance für Ihr Unternehmen. KI-gestützte Überwachung und rechtssichere Prozesse.',
    canonical: 'https://marsstein.ai/dsgvo-compliance'
  },
  '/iso-27001-compliance': {
    title: 'ISO 27001 Compliance Software | ISMS Automatisierung | Marsstein',
    description: 'ISO 27001 Compliance-Management automatisiert. Gap-Analyse, Risikomanagement und kontinuierliche Überwachung für Ihr ISMS.',
    keywords: 'ISO 27001 Compliance, ISMS Software, Informationssicherheit, Risikomanagement, Zertifizierung',
    ogTitle: 'ISO 27001 Compliance Software | ISMS Automatisierung',
    ogDescription: 'ISO 27001 Compliance-Management automatisiert. Gap-Analyse und kontinuierliche ISMS-Überwachung.',
    canonical: 'https://marsstein.ai/iso-27001-compliance'
  },
  '/soc2-compliance': {
    title: 'SOC 2 Compliance | Trust Services Criteria | Marsstein',
    description: 'SOC 2 Type II Compliance automatisiert. Kontinuierliche Kontrollen, Audit-Readiness und automatische Berichtserstellung.',
    keywords: 'SOC 2 Compliance, Trust Services, Type II Audit, Compliance Automatisierung, Cloud Security',
    ogTitle: 'SOC 2 Compliance | Trust Services Criteria Automatisierung',
    ogDescription: 'SOC 2 Type II Compliance automatisiert. Kontinuierliche Kontrollen und Audit-Readiness.',
    canonical: 'https://marsstein.ai/soc2-compliance'
  },
  '/soc2-zertifizierung': {
    title: 'SOC 2 Zertifizierung | Type I & II Audit Vorbereitung | Marsstein',
    description: 'SOC 2 Zertifizierung für SaaS & Cloud-Anbieter. Automatisierte Kontrollen, Gap-Analyse und Audit-Trail Management.',
    keywords: 'SOC 2 Zertifizierung, Type II Audit, Trust Services, Cloud Compliance, SaaS Sicherheit',
    ogTitle: 'SOC 2 Zertifizierung | Type I & II Audit Vorbereitung',
    ogDescription: 'SOC 2 Zertifizierung für SaaS & Cloud-Anbieter. Automatisierte Kontrollen und Audit-Trail Management.',
    canonical: 'https://marsstein.ai/soc2-zertifizierung'
  },
  '/iso-27017-compliance': {
    title: 'ISO 27017 Cloud Security | Cloud-Sicherheitskontrollen | Marsstein',
    description: 'ISO 27017 Compliance für Cloud-Services. Spezifische Cloud-Sicherheitskontrollen, Shared Responsibility und Multi-Tenancy Management.',
    keywords: 'ISO 27017, Cloud Security, Cloud Compliance, Cloud-Sicherheit, Shared Responsibility',
    ogTitle: 'ISO 27017 Cloud Security | Cloud-Sicherheitskontrollen',
    ogDescription: 'ISO 27017 Compliance für Cloud-Services. Spezifische Cloud-Sicherheitskontrollen und Multi-Tenancy Management.',
    canonical: 'https://marsstein.ai/iso-27017-compliance'
  },
  '/iso-27017-zertifizierung': {
    title: 'ISO 27017 Zertifizierung | Cloud-Sicherheit Standard | Marsstein',
    description: 'ISO 27017 Zertifizierung für Cloud-Anbieter und -Nutzer. Cloud-spezifische Kontrollen, Audit-Vorbereitung und Compliance-Management.',
    keywords: 'ISO 27017 Zertifizierung, Cloud-Sicherheit, Cloud Zertifizierung, Cloud Provider, Cloud Security Standard',
    ogTitle: 'ISO 27017 Zertifizierung | Cloud-Sicherheit Standard',
    ogDescription: 'ISO 27017 Zertifizierung für Cloud-Anbieter und -Nutzer. Cloud-spezifische Kontrollen und Audit-Vorbereitung.',
    canonical: 'https://marsstein.ai/iso-27017-zertifizierung'
  },
  '/iso-27018-compliance': {
    title: 'ISO 27018 Datenschutz in der Cloud | PII Protection | Marsstein',
    description: 'ISO 27018 Compliance für Cloud-Datenschutz. Schutz personenbezogener Daten (PII) in Public Clouds gemäß internationalen Standards.',
    keywords: 'ISO 27018, Cloud Datenschutz, PII Protection, Cloud Privacy, Personenbezogene Daten Cloud',
    ogTitle: 'ISO 27018 Datenschutz in der Cloud | PII Protection',
    ogDescription: 'ISO 27018 Compliance für Cloud-Datenschutz. Schutz personenbezogener Daten in Public Clouds.',
    canonical: 'https://marsstein.ai/iso-27018-compliance'
  },
  '/iso-27018-zertifizierung': {
    title: 'ISO 27018 Zertifizierung | Cloud-Datenschutz Standard | Marsstein',
    description: 'ISO 27018 Zertifizierung für Cloud-Provider. Datenschutz-Kontrollen für PII in der Cloud, DSGVO-Alignment und Audit-Support.',
    keywords: 'ISO 27018 Zertifizierung, Cloud Datenschutz Zertifikat, PII Schutz, Cloud Privacy Standard',
    ogTitle: 'ISO 27018 Zertifizierung | Cloud-Datenschutz Standard',
    ogDescription: 'ISO 27018 Zertifizierung für Cloud-Provider. Datenschutz-Kontrollen für PII und DSGVO-Alignment.',
    canonical: 'https://marsstein.ai/iso-27018-zertifizierung'
  },
  '/tisax-compliance': {
    title: 'TISAX Compliance | Automotive Information Security | Marsstein',
    description: 'TISAX Assessment für die Automobilindustrie. VDA ISA Katalog, Information Security und Prototype Protection automatisiert.',
    keywords: 'TISAX, VDA ISA, Automotive Security, Information Security Assessment, Prototypenschutz',
    ogTitle: 'TISAX Compliance | Automotive Information Security',
    ogDescription: 'TISAX Assessment für die Automobilindustrie. VDA ISA Katalog und Prototype Protection automatisiert.',
    canonical: 'https://marsstein.ai/tisax-compliance'
  },
  '/tisax-zertifizierung': {
    title: 'TISAX Zertifizierung | Automotive Security Assessment | Marsstein',
    description: 'TISAX Zertifizierung für Automobilzulieferer. Assessment Level 1-3, VDA ISA Implementierung und ENX Portal Management.',
    keywords: 'TISAX Zertifizierung, Automotive Zertifikat, VDA ISA Assessment, ENX Portal, Automobilzulieferer',
    ogTitle: 'TISAX Zertifizierung | Automotive Security Assessment',
    ogDescription: 'TISAX Zertifizierung für Automobilzulieferer. Assessment Level 1-3 und VDA ISA Implementierung.',
    canonical: 'https://marsstein.ai/tisax-zertifizierung'
  },
  '/nis2-compliance': {
    title: 'NIS2 Richtlinie Compliance | Cybersecurity für kritische Sektoren | Marsstein',
    description: 'NIS2-Richtlinie Compliance für kritische und wichtige Einrichtungen. Risikomanagement, Incident Response und Meldepflichten automatisiert.',
    keywords: 'NIS2 Richtlinie, Cybersecurity Compliance, Kritische Infrastruktur, KRITIS, Incident Response',
    ogTitle: 'NIS2 Richtlinie Compliance | Cybersecurity für kritische Sektoren',
    ogDescription: 'NIS2-Richtlinie Compliance für kritische Einrichtungen. Risikomanagement und Meldepflichten automatisiert.',
    canonical: 'https://marsstein.ai/nis2-compliance'
  },
  '/hinweisgeberschutzgesetz': {
    title: 'Hinweisgeberschutzgesetz | Whistleblower-System | Marsstein',
    description: 'HinSchG-konforme Meldesysteme für Unternehmen. Sichere Whistleblower-Kanäle, anonyme Meldungen und rechtskonforme Fallbearbeitung.',
    keywords: 'Hinweisgeberschutzgesetz, HinSchG, Whistleblower System, Meldekanal, Compliance Deutschland',
    ogTitle: 'Hinweisgeberschutzgesetz | Whistleblower-System',
    ogDescription: 'HinSchG-konforme Meldesysteme. Sichere Whistleblower-Kanäle und rechtskonforme Fallbearbeitung.',
    canonical: 'https://marsstein.ai/hinweisgeberschutzgesetz'
  },
  '/geldwaeschegesetz': {
    title: 'Geldwäschegesetz Compliance | GwG & AML | Marsstein',
    description: 'GwG-Compliance und Anti-Money-Laundering automatisiert. KYC-Prozesse, Verdachtsmeldungen und Risikomanagement für Verpflichtete.',
    keywords: 'Geldwäschegesetz, GwG Compliance, AML, Anti-Money-Laundering, KYC, Verdachtsmeldung',
    ogTitle: 'Geldwäschegesetz Compliance | GwG & AML',
    ogDescription: 'GwG-Compliance und AML automatisiert. KYC-Prozesse und Risikomanagement für Verpflichtete.',
    canonical: 'https://marsstein.ai/geldwaeschegesetz'
  },
  '/eu-ai-act-compliance': {
    title: 'EU AI Act Compliance Platform | KI-Regulierung | Marsstein',
    description: 'Umfassende EU AI Act Compliance-Lösung. Risikoklassifizierung, Konformitätsbewertung und Dokumentation für KI-Systeme.',
    keywords: 'EU AI Act Compliance, KI Regulierung, AI Governance, High-Risk AI, Konformitätsbewertung',
    ogTitle: 'EU AI Act Compliance Platform | KI-Regulierung',
    ogDescription: 'Umfassende EU AI Act Compliance. Risikoklassifizierung und Konformitätsbewertung für KI-Systeme.',
    canonical: 'https://marsstein.ai/eu-ai-act-compliance'
  },
  '/dashboard': {
    title: 'Compliance Dashboard | Zentrale Überwachung | Marsstein',
    description: 'Zentrales Compliance-Dashboard für alle Ihre Regularien. Echtzeit-Monitoring, KPI-Tracking und automatisierte Reports.',
    keywords: 'Compliance Dashboard, Monitoring, KPI Tracking, Compliance Management, Reporting',
    ogTitle: 'Compliance Dashboard | Zentrale Überwachung',
    ogDescription: 'Zentrales Compliance-Dashboard. Echtzeit-Monitoring und automatisierte Reports.',
    canonical: 'https://marsstein.ai/dashboard'
  },
  '/resources': {
    title: 'Compliance Ressourcen | Vorlagen & Checklisten | Marsstein',
    description: 'Kostenlose Compliance-Ressourcen, Vorlagen und Checklisten. DSGVO-Templates, Audit-Checklisten und Best Practices.',
    keywords: 'Compliance Ressourcen, DSGVO Vorlagen, Checklisten, Templates, Best Practices, Kostenlos',
    ogTitle: 'Compliance Ressourcen | Vorlagen & Checklisten',
    ogDescription: 'Kostenlose Compliance-Ressourcen. DSGVO-Templates, Audit-Checklisten und Best Practices.',
    canonical: 'https://marsstein.ai/resources'
  },
  '/resources/dsgvo-compliance-checklist': {
    title: 'DSGVO Compliance Checkliste | Kostenloser Download | Marsstein',
    description: 'Umfassende DSGVO-Compliance-Checkliste zum kostenlosen Download. Schritt-für-Schritt Anleitung zur DSGVO-Konformität.',
    keywords: 'DSGVO Checkliste, Compliance Checklist, GDPR Checklist, Datenschutz Checkliste, Download',
    ogTitle: 'DSGVO Compliance Checkliste | Kostenloser Download',
    ogDescription: 'Umfassende DSGVO-Compliance-Checkliste. Schritt-für-Schritt zur DSGVO-Konformität.',
    canonical: 'https://marsstein.ai/resources/dsgvo-compliance-checklist'
  },
  '/resources/datenschutz-readiness-assessment': {
    title: 'Datenschutz Readiness Assessment | Reifegrad-Analyse | Marsstein',
    description: 'Bewerten Sie Ihren Datenschutz-Reifegrad. Kostenloses Assessment-Tool zur Identifikation von Compliance-Lücken.',
    keywords: 'Datenschutz Assessment, Readiness Check, Reifegrad-Analyse, Gap-Analyse, DSGVO Bewertung',
    ogTitle: 'Datenschutz Readiness Assessment | Reifegrad-Analyse',
    ogDescription: 'Bewerten Sie Ihren Datenschutz-Reifegrad. Kostenloses Assessment zur Gap-Identifikation.',
    canonical: 'https://marsstein.ai/resources/datenschutz-readiness-assessment'
  },
  '/resources/breach-response-checklist': {
    title: 'Data Breach Response Checkliste | 72-Stunden Plan | Marsstein',
    description: 'Notfall-Checkliste für Datenschutzverletzungen. 72-Stunden Aktionsplan, Meldepflichten und Kommunikationsvorlagen.',
    keywords: 'Data Breach Response, Datenpanne, Notfallplan, 72 Stunden, DSGVO Meldepflicht',
    ogTitle: 'Data Breach Response Checkliste | 72-Stunden Plan',
    ogDescription: 'Notfall-Checkliste für Datenschutzverletzungen. 72-Stunden Aktionsplan und Meldepflichten.',
    canonical: 'https://marsstein.ai/resources/breach-response-checklist'
  },
  '/resources/cookie-compliance-audit': {
    title: 'Cookie Compliance Audit | Cookie-Banner Check | Marsstein',
    description: 'Cookie-Compliance-Audit für Ihre Website. Prüfen Sie Cookie-Einwilligung, Kategorisierung und Dokumentation.',
    keywords: 'Cookie Audit, Cookie Compliance, Cookie Banner, TTDSG, ePrivacy, Cookie Consent',
    ogTitle: 'Cookie Compliance Audit | Cookie-Banner Check',
    ogDescription: 'Cookie-Compliance-Audit für Ihre Website. Prüfen Sie Einwilligung und Dokumentation.',
    canonical: 'https://marsstein.ai/resources/cookie-compliance-audit'
  },
  '/resources/vendor-assessment-template': {
    title: 'Vendor Assessment Template | Auftragsverarbeitung | Marsstein',
    description: 'Vorlage zur Bewertung von Auftragsverarbeitern. DSGVO-konforme Prüfung von Dienstleistern und Lieferanten.',
    keywords: 'Vendor Assessment, Auftragsverarbeitung, AVV, Dienstleister Prüfung, DSGVO Lieferanten',
    ogTitle: 'Vendor Assessment Template | Auftragsverarbeitung',
    ogDescription: 'Vorlage zur Bewertung von Auftragsverarbeitern. DSGVO-konforme Dienstleister-Prüfung.',
    canonical: 'https://marsstein.ai/resources/vendor-assessment-template'
  },
  '/branchen': {
    title: 'Branchenlösungen | Compliance für Ihre Industrie | Marsstein',
    description: 'Maßgeschneiderte Compliance-Lösungen für verschiedene Branchen. Gesundheitswesen, Finanz, E-Commerce, SaaS und mehr.',
    keywords: 'Branchenlösungen, Industry Compliance, Sektorspezifisch, Gesundheit, Finanz, E-Commerce',
    ogTitle: 'Branchenlösungen | Compliance für Ihre Industrie',
    ogDescription: 'Maßgeschneiderte Compliance-Lösungen für verschiedene Branchen.',
    canonical: 'https://marsstein.ai/branchen'
  },
  '/branchen/gesundheitswesen': {
    title: 'DSGVO für Gesundheitswesen | Patientendatenschutz | Marsstein',
    description: 'DSGVO-Compliance für Kliniken, Praxen und Gesundheitsdienstleister. Patientendatenschutz, Gesundheitsdaten und Schweigepflicht.',
    keywords: 'Gesundheitswesen DSGVO, Patientendatenschutz, Gesundheitsdaten, Krankenhaus Datenschutz, Arztpraxis',
    ogTitle: 'DSGVO für Gesundheitswesen | Patientendatenschutz',
    ogDescription: 'DSGVO-Compliance für Kliniken und Praxen. Patientendatenschutz und Gesundheitsdaten.',
    canonical: 'https://marsstein.ai/branchen/gesundheitswesen'
  },
  '/branchen/finanzdienstleister': {
    title: 'Compliance für Finanzdienstleister | DSGVO & MaRisk | Marsstein',
    description: 'Integrierte Compliance für Banken und Finanzdienstleister. DSGVO, MaRisk, BAIT und PSD2 automatisiert.',
    keywords: 'Finanzdienstleister Compliance, Banking DSGVO, MaRisk, BAIT, PSD2, Finanz Datenschutz',
    ogTitle: 'Compliance für Finanzdienstleister | DSGVO & MaRisk',
    ogDescription: 'Integrierte Compliance für Banken. DSGVO, MaRisk, BAIT und PSD2 automatisiert.',
    canonical: 'https://marsstein.ai/branchen/finanzdienstleister'
  },
  '/branchen/e-commerce': {
    title: 'E-Commerce Datenschutz | Online-Shop DSGVO | Marsstein',
    description: 'DSGVO-Compliance für Online-Shops und E-Commerce. Cookie-Management, Kundendaten und internationale Datentransfers.',
    keywords: 'E-Commerce DSGVO, Online-Shop Datenschutz, Cookie Compliance, Kundendaten, Shop Compliance',
    ogTitle: 'E-Commerce Datenschutz | Online-Shop DSGVO',
    ogDescription: 'DSGVO-Compliance für Online-Shops. Cookie-Management und Kundendatenschutz.',
    canonical: 'https://marsstein.ai/branchen/e-commerce'
  },
  '/branchen/saas-unternehmen': {
    title: 'SaaS Compliance | Cloud-Datenschutz für Software-Anbieter | Marsstein',
    description: 'Compliance für SaaS-Unternehmen. DSGVO, SOC 2, ISO 27001 und Privacy by Design für Cloud-Software.',
    keywords: 'SaaS Compliance, Cloud Datenschutz, Software DSGVO, Privacy by Design, Multi-Tenancy',
    ogTitle: 'SaaS Compliance | Cloud-Datenschutz für Software-Anbieter',
    ogDescription: 'Compliance für SaaS-Unternehmen. DSGVO, SOC 2 und Privacy by Design.',
    canonical: 'https://marsstein.ai/branchen/saas-unternehmen'
  },
  '/branchen/produktion': {
    title: 'Industrie 4.0 Datenschutz | Produktion & DSGVO | Marsstein',
    description: 'DSGVO-Compliance für Produktionsunternehmen. Mitarbeiterdaten, IoT-Security und Supply Chain Compliance.',
    keywords: 'Produktion DSGVO, Industrie 4.0 Datenschutz, IoT Compliance, Manufacturing, Supply Chain',
    ogTitle: 'Industrie 4.0 Datenschutz | Produktion & DSGVO',
    ogDescription: 'DSGVO-Compliance für Produktionsunternehmen. IoT-Security und Supply Chain Compliance.',
    canonical: 'https://marsstein.ai/branchen/produktion'
  },
  '/branchen/automotive': {
    title: 'Automotive Compliance | TISAX & Datenschutz | Marsstein',
    description: 'Compliance für die Automobilindustrie. TISAX, DSGVO und Cybersecurity für OEMs und Zulieferer.',
    keywords: 'Automotive Compliance, TISAX, Automobil Datenschutz, Connected Car, OEM Compliance',
    ogTitle: 'Automotive Compliance | TISAX & Datenschutz',
    ogDescription: 'Compliance für die Automobilindustrie. TISAX und Cybersecurity für OEMs.',
    canonical: 'https://marsstein.ai/branchen/automotive'
  },
  '/branchen/energie': {
    title: 'Energiesektor Compliance | KRITIS & Smart Grid | Marsstein',
    description: 'Compliance für Energieversorger und Netzbetreiber. KRITIS, Smart Meter Gateway und Datenschutz.',
    keywords: 'Energie Compliance, KRITIS, Smart Grid, Smart Meter, Energieversorger Datenschutz',
    ogTitle: 'Energiesektor Compliance | KRITIS & Smart Grid',
    ogDescription: 'Compliance für Energieversorger. KRITIS und Smart Meter Datenschutz.',
    canonical: 'https://marsstein.ai/branchen/energie'
  },
  '/branchen/lebensmittel': {
    title: 'Lebensmittelindustrie Datenschutz | HACCP & DSGVO | Marsstein',
    description: 'DSGVO-Compliance für die Lebensmittelbranche. Kundendaten, Lieferketten-Transparenz und Qualitätsmanagement.',
    keywords: 'Lebensmittel DSGVO, Food Compliance, HACCP Datenschutz, Lieferkette, QM System',
    ogTitle: 'Lebensmittelindustrie Datenschutz | HACCP & DSGVO',
    ogDescription: 'DSGVO-Compliance für die Lebensmittelbranche. Lieferketten-Transparenz und QM.',
    canonical: 'https://marsstein.ai/branchen/lebensmittel'
  },
  '/branchen/logistik': {
    title: 'Logistik Datenschutz | Transport & Supply Chain DSGVO | Marsstein',
    description: 'DSGVO-Compliance für Logistik und Transport. GPS-Tracking, Fahrerdaten und internationale Datentransfers.',
    keywords: 'Logistik DSGVO, Transport Datenschutz, GPS Tracking, Supply Chain, Spedition Compliance',
    ogTitle: 'Logistik Datenschutz | Transport & Supply Chain DSGVO',
    ogDescription: 'DSGVO-Compliance für Logistik. GPS-Tracking und internationale Datentransfers.',
    canonical: 'https://marsstein.ai/branchen/logistik'
  },
  '/wissen': {
    title: 'Compliance Wissen | Leitfäden & Best Practices | Marsstein',
    description: 'Umfangreiches Compliance-Wissen. Leitfäden, Best Practices und aktuelle Entwicklungen im Datenschutz.',
    keywords: 'Compliance Wissen, Datenschutz Leitfaden, Best Practices, DSGVO Guide, Knowledge Base',
    ogTitle: 'Compliance Wissen | Leitfäden & Best Practices',
    ogDescription: 'Umfangreiches Compliance-Wissen. Leitfäden und aktuelle Datenschutz-Entwicklungen.',
    canonical: 'https://marsstein.ai/wissen'
  },
  '/wissen/dsgvo-leitfaeden': {
    title: 'DSGVO Leitfäden | Praxishandbücher & Anleitungen | Marsstein',
    description: 'Praktische DSGVO-Leitfäden für Unternehmen. Schritt-für-Schritt Anleitungen zur Umsetzung der Datenschutzgrundverordnung.',
    keywords: 'DSGVO Leitfaden, Datenschutz Handbuch, GDPR Guide, Praxisleitfaden, Anleitung',
    ogTitle: 'DSGVO Leitfäden | Praxishandbücher & Anleitungen',
    ogDescription: 'Praktische DSGVO-Leitfäden. Schritt-für-Schritt zur Datenschutz-Compliance.',
    canonical: 'https://marsstein.ai/wissen/dsgvo-leitfaeden'
  },
  '/wissen/compliance-frameworks': {
    title: 'Compliance Frameworks | Standards & Normen | Marsstein',
    description: 'Übersicht wichtiger Compliance-Frameworks. ISO-Standards, EU-Regularien und branchenspezifische Normen erklärt.',
    keywords: 'Compliance Frameworks, ISO Standards, EU Regularien, Normen, Zertifizierungen',
    ogTitle: 'Compliance Frameworks | Standards & Normen',
    ogDescription: 'Übersicht wichtiger Compliance-Frameworks. ISO-Standards und EU-Regularien erklärt.',
    canonical: 'https://marsstein.ai/wissen/compliance-frameworks'
  },
  '/wissen/leitfaden/dsgvo-grundlagen': {
    title: 'DSGVO Grundlagen | Basiswissen Datenschutz | Marsstein',
    description: 'Die wichtigsten DSGVO-Grundlagen verständlich erklärt. Prinzipien, Rechtsgrundlagen und Betroffenenrechte.',
    keywords: 'DSGVO Grundlagen, Datenschutz Basics, GDPR Einführung, Rechtsgrundlagen, Prinzipien',
    ogTitle: 'DSGVO Grundlagen | Basiswissen Datenschutz',
    ogDescription: 'Die wichtigsten DSGVO-Grundlagen verständlich erklärt. Prinzipien und Rechtsgrundlagen.',
    canonical: 'https://marsstein.ai/wissen/leitfaden/dsgvo-grundlagen'
  },
  '/wissen/leitfaden/website-dsgvo': {
    title: 'Website DSGVO-konform | Online-Präsenz & Datenschutz | Marsstein',
    description: 'So machen Sie Ihre Website DSGVO-konform. Impressum, Datenschutzerklärung, Cookies und Tracking rechtssicher.',
    keywords: 'Website DSGVO, Datenschutzerklärung, Cookie Banner, Impressum, Website Compliance',
    ogTitle: 'Website DSGVO-konform | Online-Präsenz & Datenschutz',
    ogDescription: 'So machen Sie Ihre Website DSGVO-konform. Datenschutzerklärung und Cookies rechtssicher.',
    canonical: 'https://marsstein.ai/wissen/leitfaden/website-dsgvo'
  },
  '/wissen/leitfaden/dsgvo-30-tage': {
    title: 'DSGVO in 30 Tagen | Quick-Start Compliance | Marsstein',
    description: '30-Tage-Plan zur DSGVO-Compliance. Schneller Einstieg mit priorisierten Maßnahmen für kleine und mittlere Unternehmen.',
    keywords: 'DSGVO 30 Tage, Quick Start, Schnelleinstieg, KMU Datenschutz, Compliance Plan',
    ogTitle: 'DSGVO in 30 Tagen | Quick-Start Compliance',
    ogDescription: '30-Tage-Plan zur DSGVO-Compliance. Schneller Einstieg für KMU.',
    canonical: 'https://marsstein.ai/wissen/leitfaden/dsgvo-30-tage'
  },
  '/wissen/leitfaden/data-breach-notfall': {
    title: 'Data Breach Notfallplan | Datenpanne Management | Marsstein',
    description: 'Notfallplan bei Datenschutzverletzungen. 72-Stunden-Meldepflicht, Dokumentation und Schadensbegrenzung.',
    keywords: 'Data Breach, Datenpanne, Notfallplan, Meldepflicht, Incident Response',
    ogTitle: 'Data Breach Notfallplan | Datenpanne Management',
    ogDescription: 'Notfallplan bei Datenschutzverletzungen. 72-Stunden-Meldepflicht und Schadensbegrenzung.',
    canonical: 'https://marsstein.ai/wissen/leitfaden/data-breach-notfall'
  },
  '/tools/cookie-management': {
    title: 'Cookie Management Tool | Consent Management Platform | Marsstein',
    description: 'Professionelles Cookie-Management-Tool. DSGVO-konforme Cookie-Banner, Consent-Verwaltung und automatische Dokumentation.',
    keywords: 'Cookie Management, Consent Management, Cookie Tool, CMP, Cookie Banner Software',
    ogTitle: 'Cookie Management Tool | Consent Management Platform',
    ogDescription: 'Professionelles Cookie-Management. DSGVO-konforme Banner und Consent-Verwaltung.',
    canonical: 'https://marsstein.ai/tools/cookie-management'
  },
  '/tools/whistleblower-system': {
    title: 'Whistleblower System | HinSchG Meldekanal | Marsstein',
    description: 'Sicheres Whistleblower-System nach HinSchG. Anonyme Meldungen, verschlüsselte Kommunikation und rechtskonforme Fallbearbeitung.',
    keywords: 'Whistleblower System, HinSchG Software, Meldekanal, Hinweisgebersystem, Compliance Tool',
    ogTitle: 'Whistleblower System | HinSchG Meldekanal',
    ogDescription: 'Sicheres Whistleblower-System nach HinSchG. Anonyme Meldungen und Fallbearbeitung.',
    canonical: 'https://marsstein.ai/tools/whistleblower-system'
  },
  '/tools/dsgvo-email-template-generator': {
    title: 'DSGVO E-Mail Generator | Datenschutz-Vorlagen | Marsstein',
    description: 'Generator für DSGVO-konforme E-Mail-Vorlagen. Auskunftsersuchen, Löschanfragen und Betroffenenanfragen automatisch erstellen.',
    keywords: 'DSGVO E-Mail, Template Generator, Datenschutz Vorlagen, Auskunftsersuchen, Löschantrag',
    ogTitle: 'DSGVO E-Mail Generator | Datenschutz-Vorlagen',
    ogDescription: 'Generator für DSGVO-konforme E-Mail-Vorlagen. Betroffenenanfragen automatisch erstellen.',
    canonical: 'https://marsstein.ai/tools/dsgvo-email-template-generator'
  },
  '/tools/dsgvo-compliance-scorecard': {
    title: 'DSGVO Compliance Scorecard | Reifegrad-Bewertung | Marsstein',
    description: 'Bewerten Sie Ihre DSGVO-Compliance. Interaktive Scorecard zur Messung Ihres Datenschutz-Reifegrads.',
    keywords: 'DSGVO Scorecard, Compliance Bewertung, Reifegrad, Datenschutz Score, Assessment',
    ogTitle: 'DSGVO Compliance Scorecard | Reifegrad-Bewertung',
    ogDescription: 'Bewerten Sie Ihre DSGVO-Compliance. Interaktive Scorecard für Datenschutz-Reifegrad.',
    canonical: 'https://marsstein.ai/tools/dsgvo-compliance-scorecard'
  },
  '/tools/compliance-ai-assistant': {
    title: 'Compliance AI Assistant | KI-gestützter Datenschutz-Berater | Marsstein',
    description: 'KI-basierter Compliance-Assistent. Sofortige Antworten auf Datenschutz-Fragen, automatische Dokumentenerstellung und Compliance-Checks.',
    keywords: 'Compliance AI, KI Assistent, Datenschutz Chatbot, AI Berater, Automatisierung',
    ogTitle: 'Compliance AI Assistant | KI-gestützter Datenschutz-Berater',
    ogDescription: 'KI-basierter Compliance-Assistent. Sofortige Datenschutz-Beratung und Dokumentenerstellung.',
    canonical: 'https://marsstein.ai/tools/compliance-ai-assistant'
  },
  '/compliance/iso-27001': {
    title: 'ISO 27001 Guide | ISMS Implementierung | Marsstein',
    description: 'Umfassender ISO 27001 Implementierungs-Guide. Von der Gap-Analyse bis zur Zertifizierung - alle Schritte erklärt.',
    keywords: 'ISO 27001 Guide, ISMS Implementierung, Zertifizierung Anleitung, Security Management',
    ogTitle: 'ISO 27001 Guide | ISMS Implementierung',
    ogDescription: 'Umfassender ISO 27001 Guide. Von Gap-Analyse bis Zertifizierung.',
    canonical: 'https://marsstein.ai/compliance/iso-27001'
  },
  '/compliance/soc-2': {
    title: 'SOC 2 Guide | Trust Services Criteria erklärt | Marsstein',
    description: 'Detaillierter SOC 2 Compliance Guide. Type I vs Type II, Trust Services Criteria und Audit-Vorbereitung.',
    keywords: 'SOC 2 Guide, Trust Services, Type II Audit, Compliance Guide, Cloud Security',
    ogTitle: 'SOC 2 Guide | Trust Services Criteria erklärt',
    ogDescription: 'Detaillierter SOC 2 Guide. Trust Services Criteria und Audit-Vorbereitung.',
    canonical: 'https://marsstein.ai/compliance/soc-2'
  },
  '/compliance/eu-ai-act': {
    title: 'EU AI Act Guide | KI-Regulierung verstehen | Marsstein',
    description: 'Kompletter Guide zum EU AI Act. Risikoklassen, Anforderungen und Compliance-Strategien für KI-Systeme.',
    keywords: 'EU AI Act Guide, KI Regulierung, AI Governance, Risikoklassen, Compliance Strategie',
    ogTitle: 'EU AI Act Guide | KI-Regulierung verstehen',
    ogDescription: 'Kompletter Guide zum EU AI Act. Risikoklassen und Compliance-Strategien.',
    canonical: 'https://marsstein.ai/compliance/eu-ai-act'
  },
  '/compliance/nis2': {
    title: 'NIS2 Richtlinie Guide | Cybersecurity für KRITIS | Marsstein',
    description: 'NIS2-Richtlinie im Detail. Anwendungsbereich, Anforderungen und Umsetzung für betroffene Unternehmen.',
    keywords: 'NIS2 Guide, Cybersecurity Richtlinie, KRITIS, Kritische Infrastruktur, EU Directive',
    ogTitle: 'NIS2 Richtlinie Guide | Cybersecurity für KRITIS',
    ogDescription: 'NIS2-Richtlinie im Detail. Anforderungen und Umsetzung für betroffene Unternehmen.',
    canonical: 'https://marsstein.ai/compliance/nis2'
  },
  '/compliance/dsgvo': {
    title: 'DSGVO Komplett-Guide | Datenschutzgrundverordnung | Marsstein',
    description: 'Der ultimative DSGVO-Guide. Alle Artikel, Pflichten und praktische Umsetzungshilfen für Unternehmen.',
    keywords: 'DSGVO Guide, GDPR Komplett, Datenschutzgrundverordnung, Compliance Guide, EU DSGVO',
    ogTitle: 'DSGVO Komplett-Guide | Datenschutzgrundverordnung',
    ogDescription: 'Der ultimative DSGVO-Guide. Alle Artikel und praktische Umsetzungshilfen.',
    canonical: 'https://marsstein.ai/compliance/dsgvo'
  },
  '/impressum': {
    title: 'Impressum | Marsstein GmbH',
    description: 'Impressum der Marsstein GmbH. Angaben gemäß § 5 TMG, Kontaktdaten und Verantwortliche.',
    keywords: 'Impressum, Marsstein GmbH, Kontakt, Rechtliche Angaben',
    ogTitle: 'Impressum | Marsstein GmbH',
    ogDescription: 'Impressum der Marsstein GmbH. Angaben gemäß § 5 TMG.',
    canonical: 'https://marsstein.ai/impressum'
  },
  '/datenschutz': {
    title: 'Datenschutzerklärung | Marsstein GmbH',
    description: 'Datenschutzerklärung der Marsstein GmbH. Information zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
    keywords: 'Datenschutzerklärung, Privacy Policy, DSGVO, Marsstein',
    ogTitle: 'Datenschutzerklärung | Marsstein GmbH',
    ogDescription: 'Datenschutzerklärung der Marsstein GmbH gemäß DSGVO.',
    canonical: 'https://marsstein.ai/datenschutz'
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