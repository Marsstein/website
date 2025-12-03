#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routeConfigs = {
  '/': {
    title: 'Compliance & Datenschutz Lösungen für Unternehmen',
    description: 'Marsstein - Ihr Partner für DSGVO, ISO 27001, NIS2 & EU AI Act Compliance. Automatisierte Lösungen für Datenschutz und KI-Governance. Jetzt beraten lassen!',
    keywords: 'DSGVO Automatisierung, Datenschutzbeauftragter Software, DSB Tool, VVT automatisch, TOMs Dokumentation, Compliance Software',
    canonical: 'https://marsstein.ai/'
  },
  '/eu-ai-act': {
    title: 'EU AI Act Compliance – KI-Regulierung sicher umsetzen',
    description: 'EU AI Act Compliance einfach gemacht: Risikoklassifizierung, CE-Kennzeichnung & Konformität. ✓ Automatisierte Prozesse ✓ Rechtssicher. Jetzt beraten lassen!',
    keywords: 'EU AI Act, KI-Regulierung, AI Compliance, Künstliche Intelligenz Gesetz, KI-Verordnung',
    canonical: 'https://marsstein.ai/eu-ai-act'
  },
  '/iso-27001-zertifizierung': {
    title: 'ISO 27001 Zertifizierung – ISMS erfolgreich aufbauen',
    description: 'ISO 27001 Zertifizierung meistern: ISMS-Implementierung, Gap-Analyse & Audit-Vorbereitung. ✓ Schritt-für-Schritt ✓ Praxisnah. Jetzt starten!',
    keywords: 'ISO 27001, ISMS, Informationssicherheit, ISO 27001 Zertifizierung, IT-Sicherheit',
    canonical: 'https://marsstein.ai/iso-27001-zertifizierung'
  },
  '/nis2-compliance': {
    title: 'NIS-2 Compliance – Cybersecurity-Richtlinie umsetzen',
    description: 'NIS-2 Richtlinie sicher erfüllen: Risikomanagement, Meldepflichten & Sicherheitsmaßnahmen. ✓ KRITIS-konform ✓ Automatisiert. Jetzt beraten lassen!',
    keywords: 'NIS-2, NIS2 Richtlinie, Cybersecurity Compliance, KRITIS, Network Information Security',
    canonical: 'https://marsstein.ai/nis2-compliance'
  },
  '/hinweisgeberschutzgesetz': {
    title: 'Hinweisgeberschutz – Whistleblower-System nach HinSchG',
    description: 'Hinweisgebersystem rechtssicher umsetzen: ✓ Digitale Meldestelle ✓ 100% anonym ✓ HinSchG-konform. Schützen Sie Whistleblower. Jetzt einrichten!',
    keywords: 'Hinweisgeberschutz, HinSchG, Whistleblower System, Hinweisgebersystem, Meldestelle',
    canonical: 'https://marsstein.ai/hinweisgeberschutzgesetz'
  },
  '/geldwaeschegesetz': {
    title: 'Geldwäschegesetz (GwG) – AML-Compliance automatisiert',
    description: 'GwG-Compliance leicht gemacht: KYC-Prüfung, Risikomanagement & Verdachtsmeldungen. ✓ KI-gestützt ✓ BaFin-konform. Jetzt digitalisieren!',
    keywords: 'Geldwäschegesetz, GwG, AML Compliance, Anti-Geldwäsche, KYC Prüfung',
    canonical: 'https://marsstein.ai/geldwaeschegesetz'
  },
  '/soc2-zertifizierung': {
    title: 'SOC 2 Zertifizierung – Trust Services für SaaS & Cloud',
    description: 'SOC 2 Type II Compliance für SaaS-Anbieter: 5 Trust Principles meistern. ✓ Audit-ready ✓ Automatisiert ✓ Kundenvertrauen. Jetzt vorbereiten!',
    keywords: 'SOC 2, Trust Services, SOC 2 Type II, SaaS Security, Audit',
    canonical: 'https://marsstein.ai/soc2-zertifizierung'
  },
  '/tisax': {
    title: 'TISAX – Automotive Security für Zulieferer & OEMs',
    description: 'TISAX-Zertifizierung für die Automobilindustrie: VDA ISA konform werden. ✓ Assessment-Level 2&3 ✓ ENX-Zugang. Jetzt vorbereiten!',
    keywords: 'TISAX, VDA ISA, Automotive Security, TISAX Zertifizierung, Automobilindustrie',
    canonical: 'https://marsstein.ai/tisax'
  },
  '/iso-27017': {
    title: 'ISO 27017 – Cloud-Security-Standard zertifizieren',
    description: 'ISO 27017 Zertifizierung für Cloud-Services: Spezifische Controls für AWS, Azure & GCP. ✓ Multi-Cloud ✓ Compliance. Jetzt beraten lassen!',
    keywords: 'ISO 27017, Cloud Security, Cloud Zertifizierung, ISO 27017 Controls, Cloud Compliance',
    canonical: 'https://marsstein.ai/iso-27017'
  },
  '/iso-27018': {
    title: 'ISO 27018 – Cloud-Datenschutz für personenbezogene Daten',
    description: 'ISO 27018 Privacy-Zertifizierung: PII-Schutz in der Cloud nach DSGVO. ✓ Public Cloud Privacy ✓ Compliance. Jetzt zertifizieren!',
    keywords: 'ISO 27018, Cloud Privacy, Cloud Datenschutz, PII Protection, ISO 27018 Zertifizierung',
    canonical: 'https://marsstein.ai/iso-27018'
  },
  '/eu-data-act': {
    title: 'EU Data Act – Datenzugang & Cloud-Switching Compliance',
    description: 'EU Data Act 2025: Datenzugangsrechte für IoT, Cloud-Switching & B2B Data Sharing. ✓ Connected Products ✓ FRAND. Jetzt compliant werden!',
    keywords: 'EU Data Act, Datenzugang, Cloud Switching, Connected Products, IoT Data Sharing, FRAND',
    canonical: 'https://marsstein.ai/eu-data-act'
  },
  '/features': {
    title: 'DSGVO-Compliance-Software: ROPA, DSFA & DSAR-Management | Marsstein',
    description: 'Vollständige DSGVO-Compliance-Lösung mit automatisiertem Verarbeitungsverzeichnis (ROPA/VVT), DSFA-Modul mit Risiko-Scoring, Betroffenenanfragen-Management und Multi-Entity-Support für externe DSBs. Jetzt kostenlos testen.',
    keywords: 'dsgvo compliance software, ropa software, verarbeitungsverzeichnis automatisiert, dsar management, betroffenenanfragen tool, dsfa software, datenschutz folgenabschätzung, multi entity dsgvo, externe dsb software, avv generator, dsgvo automatisierung',
    canonical: 'https://marsstein.ai/features'
  },
  '/preise': {
    title: 'Preise & Pakete – Compliance Software',
    description: 'Transparente Preise für Marsstein Compliance Software. Wählen Sie das passende Paket für Ihre Compliance-Anforderungen. Jetzt 30 Tage kostenlos testen!',
    keywords: 'Compliance Software Preise, DSGVO Software Kosten, ISO 27001 Software Preis',
    canonical: 'https://marsstein.ai/preise'
  },
  '/tools/dsgvo-compliance-scorecard': {
    title: 'DSGVO Scorecard – Compliance-Status bewerten',
    description: 'DSGVO Compliance Scorecard: Bewerten Sie Ihren Datenschutz-Status interaktiv. Gap-Analyse, Benchmarking, Handlungsempfehlungen. ✓ 15 Min Assessment. Jetzt bewerten!',
    keywords: 'DSGVO Scorecard, Compliance Assessment, DSGVO Bewertung, Gap-Analyse, Datenschutz Status',
    canonical: 'https://marsstein.ai/tools/dsgvo-compliance-scorecard'
  },
  '/compliance/dsg-ekd': {
    title: 'DSG-EKD – Kirchlicher Datenschutz der Evangelischen Kirche',
    description: 'DSG-EKD Compliance für kirchliche Einrichtungen: Datenschutzgesetz der EKD umsetzen. ✓ Seelsorgegeheimnis ✓ Gemeindedaten ✓ Kirchliche Autonomie',
    keywords: 'DSG-EKD, Kirchlicher Datenschutz, Evangelische Kirche, EKD Datenschutz, Kirchendatenschutz',
    canonical: 'https://marsstein.ai/compliance/dsg-ekd'
  },
  '/compliance/dsg-ekd-guide': {
    title: 'DSG-EKD Implementierungsleitfaden',
    description: 'Vollständiger Leitfaden zur Implementierung des Datenschutzgesetzes der Evangelischen Kirche in Deutschland (DSG-EKD). Schritt-für-Schritt Anleitung für kirchliche Einrichtungen.',
    keywords: 'DSG-EKD, Datenschutz, Evangelische Kirche, Kirchlicher Datenschutz, Seelsorgegeheimnis, Mitgliederdaten, Gemeindedaten',
    canonical: 'https://marsstein.ai/compliance/dsg-ekd-guide'
  },
  '/compliance/kdg': {
    title: 'KDG – Kirchlicher Datenschutz der Katholischen Kirche',
    description: 'KDG Compliance für katholische Einrichtungen: Kirchliches Datenschutzgesetz umsetzen. ✓ Beichtgeheimnis ✓ Sakramentenschutz ✓ Caritas-Datenschutz',
    keywords: 'KDG, Katholischer Datenschutz, Katholische Kirche, Kirchendatenschutz, Bistum Datenschutz',
    canonical: 'https://marsstein.ai/compliance/kdg'
  },
  '/compliance/kdg-guide': {
    title: 'KDG Leitfaden 2024 | Katholischer Datenschutz komplett erklärt',
    description: 'Umfassender KDG-Leitfaden für katholische Einrichtungen. ✓ Schritt-für-Schritt Anleitung ✓ Praxisbeispiele ✓ Vorlagen ✓ Checklisten. Jetzt KDG rechtssicher umsetzen!',
    keywords: 'KDG, Katholischer Datenschutz, KDG Leitfaden, Kirchendatenschutz, KDG Umsetzung, Beichtgeheimnis, Matrikelbücher, Sakramentenschutz',
    canonical: 'https://marsstein.ai/compliance/kdg-guide'
  },
  '/compliance/iso-27001-guide': {
    title: 'ISO 27001 Leitfaden 2024 – Zertifizierung Schritt für Schritt',
    description: 'ISO 27001 Zertifizierung verstehen: ISMS-Aufbau, Kontrollen, Audit-Prozess & Kosten. ✓ Praxisleitfaden ✓ Mit Checklisten. Jetzt durchstarten!',
    keywords: 'ISO 27001 Guide, ISMS Leitfaden, ISO 27001 Zertifizierung, Informationssicherheit',
    canonical: 'https://marsstein.ai/compliance/iso-27001-guide'
  },
  '/branchen': {
    title: 'Branchen – Compliance-Lösungen für jede Industrie',
    description: 'Branchenspezifische Compliance: Healthcare, FinTech, E-Commerce & mehr. ✓ Maßgeschneidert ✓ Best Practices ✓ Expertenwissen. Jetzt entdecken!',
    keywords: 'Branchenlösungen, Healthcare Compliance, FinTech Compliance, E-Commerce DSGVO, Industrie Compliance',
    canonical: 'https://marsstein.ai/branchen'
  },
  '/branchen/saas': {
    title: 'SaaS-Unternehmen – Multi-Tenant DSGVO & SOC 2',
    description: 'SaaS Compliance: Multi-Tenant DSGVO, SOC 2 Type II, EU AI Act für Enterprise SaaS. ✓ API-Security ✓ Global Compliance. Jetzt Enterprise-ready werden!',
    keywords: 'SaaS Compliance, Multi-Tenant DSGVO, SOC 2 Type II, Enterprise SaaS, SaaS Security',
    canonical: 'https://marsstein.ai/branchen/saas'
  },
  '/branchen/e-commerce': {
    title: 'E-Commerce – DSGVO & Cookie-Compliance für Shops',
    description: 'E-Commerce DSGVO: Cookie-Banner, Kundendatenschutz, Cross-Border-Handel. ✓ Abmahnsicher ✓ Conversion-optimiert. Jetzt compliant werden!',
    keywords: 'E-Commerce DSGVO, Cookie Compliance, Online Shop Datenschutz, E-Commerce Compliance, Cookie Banner',
    canonical: 'https://marsstein.ai/branchen/e-commerce'
  },
  '/branchen/logistik': {
    title: 'Logistik – GPS-Tracking & Supply Chain DSGVO',
    description: 'Transport & Logistik Compliance: GPS-Tracking DSGVO, Supply Chain Security, Fahrerdatenschutz. ✓ Sendungsverfolgung ✓ Fleet Management. Jetzt compliant!',
    keywords: 'Logistik DSGVO, GPS Tracking Datenschutz, Supply Chain Security, Transport Compliance',
    canonical: 'https://marsstein.ai/branchen/logistik'
  },
  '/branchen/energie': {
    title: 'Energie – KRITIS & Smart Grid Compliance',
    description: 'Energiesektor Compliance: KRITIS-Anforderungen, Smart Grid DSGVO, NIS2 kritische Infrastrukturen. ✓ Netzbetreiber-Expertise ✓ Smart Meter. Jetzt sicher!',
    keywords: 'KRITIS Compliance, Smart Grid DSGVO, Energiesektor NIS2, Smart Meter Datenschutz',
    canonical: 'https://marsstein.ai/branchen/energie'
  },
  '/branchen/gesundheitswesen': {
    title: 'Gesundheitswesen – DSGVO & E-Health Compliance',
    description: 'Healthcare Compliance: Patientendatenschutz nach DSGVO Art. 9, E-Health-Gesetz, Telemedizin. ✓ Spezialwissen ✓ Praxiserprobt. Jetzt beraten lassen!',
    keywords: 'Healthcare Compliance, Gesundheitsdaten DSGVO, E-Health, Telemedizin Datenschutz, Krankenhaus IT',
    canonical: 'https://marsstein.ai/branchen/gesundheitswesen'
  },
  '/branchen/gesundheitswesen-dsgvo': {
    title: 'Gesundheitswesen DSGVO – Patientendaten rechtssicher verarbeiten',
    description: 'DSGVO im Gesundheitswesen: Patientendatenschutz, Schweigepflicht, Forschung, eHealth. ✓ Praxisnahe Lösungen ✓ Rechtssicherheit ✓ Compliance-Checklisten.',
    keywords: 'DSGVO Gesundheitswesen, Patientendatenschutz, Schweigepflicht DSGVO, eHealth Datenschutz, medizinische Forschung DSGVO, Gesundheitsdaten Art. 9',
    canonical: 'https://marsstein.ai/branchen/gesundheitswesen-dsgvo'
  },
  '/branchen/healthcare-ai-compliance': {
    title: 'Healthcare AI Compliance – Medizinische KI rechtssicher einsetzen',
    description: 'Healthcare AI Compliance: Medizinische KI, EU AI Act, FDA-Regularien, Patientensicherheit. ✓ Risikobewertung ✓ Zulassung ✓ Post-Market Surveillance.',
    keywords: 'Healthcare AI Compliance, Medizinische KI, EU AI Act Healthcare, FDA AI Regularien, MDR Software, Patientensicherheit KI',
    canonical: 'https://marsstein.ai/branchen/healthcare-ai-compliance'
  },
  '/branchen/automotive': {
    title: 'Automotive – TISAX & Connected Car Compliance',
    description: 'Automotive Compliance: TISAX-Zertifizierung, Connected Car DSGVO, Autonomous Vehicle AI Act. ✓ VDA-Standards ✓ Cyber Security. Jetzt automotive-ready!',
    keywords: 'TISAX Zertifizierung, Automotive DSGVO, Connected Car, Autonomous Vehicle, VDA Standards',
    canonical: 'https://marsstein.ai/branchen/automotive'
  },
  '/branchen/finanzdienstleister': {
    title: 'Finanzdienstleister – BaFin & DSGVO Compliance',
    description: 'FinTech Compliance: MaRisk, BAIT, PSD2 & DSGVO für Banken und Versicherungen. ✓ BaFin-konform ✓ Expertenwissen. Jetzt beraten lassen!',
    keywords: 'FinTech Compliance, BaFin Anforderungen, MaRisk, BAIT, PSD2 Compliance, Banken DSGVO',
    canonical: 'https://marsstein.ai/branchen/finanzdienstleister'
  },
  '/branchen/lebensmittel': {
    title: 'Lebensmittel – HACCP & Rückverfolgbarkeit DSGVO',
    description: 'Food Industry Compliance: HACCP-Integration, Rückverfolgbarkeit DSGVO, Lebensmittelsicherheit. ✓ Farm-to-Fork ✓ Traceability. Jetzt food-safe!',
    keywords: 'HACCP Compliance, Lebensmittel DSGVO, Food Traceability, Rückverfolgbarkeit, Lebensmittelsicherheit',
    canonical: 'https://marsstein.ai/branchen/lebensmittel'
  },
  '/branchen/produktion': {
    title: 'Produktion – Industrie 4.0 & IoT-Sicherheit',
    description: 'Manufacturing Compliance: Industrie 4.0, IoT-Sicherheit, Smart Factory DSGVO, OT-Security. ✓ Produktionsschutz ✓ Supply Chain Security. Jetzt beraten lassen!',
    keywords: 'Industrie 4.0 Compliance, Manufacturing DSGVO, IoT Sicherheit, OT Security, Smart Factory',
    canonical: 'https://marsstein.ai/branchen/produktion'
  },
  '/branchen/insurtech-compliance': {
    title: 'InsurTech Compliance 2024 - DSGVO, AI Act & IDD Guide',
    description: 'InsurTech Compliance Guide 2024: DSGVO für Versicherungen ✓ AI Act Anforderungen ✓ IDD-Konformität. Praktische Checklisten & Sofortmaßnahmen. Jetzt starten!',
    keywords: 'InsurTech Compliance, DSGVO Versicherung, IDD Richtlinie, AI Act InsurTech, Solvency II, DORA Compliance, digitale Versicherung Datenschutz',
    canonical: 'https://marsstein.ai/branchen/insurtech-compliance'
  },
  '/branchen/proptech-compliance': {
    title: 'PropTech Compliance DSGVO - Smart Building Datenschutz',
    description: 'PropTech DSGVO-Guide: ✓ Smart Buildings ✓ IoT-Sicherheit ✓ Mieterdaten. Praxisleitfaden für digitale Immobilien. Jetzt lesen!',
    keywords: 'PropTech Compliance, Smart Building DSGVO, IoT Immobilien, Mieterdaten Datenschutz, PropTech Datenschutz, Smart Home DSGVO, Gebäudeautomation Compliance',
    canonical: 'https://marsstein.ai/branchen/proptech-compliance'
  },
  '/branchen/travel-compliance': {
    title: 'Travel Compliance DSGVO - Datenschutz für Reiseplattformen',
    description: 'DSGVO-konforme Lösungen für Travel & Tourism: ✓ Buchungsdaten ✓ Location Tracking ✓ Payment Compliance. Jetzt Guide lesen!',
    keywords: 'Travel Compliance, DSGVO Reisebranche, Tourism DSGVO, Buchungsplattform Datenschutz, Location Tracking DSGVO, Payment Compliance Travel, PCI DSS Tourism, Cross-Border Data Transfer',
    canonical: 'https://marsstein.ai/branchen/travel-compliance'
  },
  '/branchen/edtech-privacy': {
    title: 'EdTech Privacy – Bildungssektor Datenschutz',
    description: 'EdTech Datenschutz: Schülerdaten, COPPA/FERPA, Lernplattformen, digitale Bildung. ✓ Consent Management ✓ Age Verification ✓ Data Minimization.',
    keywords: 'EdTech Privacy, Bildungssektor Datenschutz, COPPA FERPA, Schülerdaten DSGVO, Lernplattformen Datenschutz, Age Verification',
    canonical: 'https://marsstein.ai/branchen/edtech-privacy'
  },
  '/wissen': {
    title: 'Wissen – Compliance-Wissensdatenbank & Guides',
    description: 'Compliance-Wissensdatenbank: DSGVO, ISO 27001, EU AI Act Guides. ✓ Best Practices ✓ Vorlagen ✓ Aktuelle Informationen. Jetzt Wissen erweitern!',
    keywords: 'Compliance Wissen, DSGVO Guide, ISO 27001 Wissen, EU AI Act Guide, Compliance Best Practices',
    canonical: 'https://marsstein.ai/wissen'
  },
  '/wissen/dsgvo': {
    title: 'DSGVO Wissen – Kompendium & Praxis-Guide',
    description: 'DSGVO-Wissen kompakt: Grundlagen, Betroffenenrechte, Verarbeitungsverzeichnis, TOMs. ✓ Praxisnahe Guides ✓ Vorlagen ✓ Aktuelle Rechtsprechung. Jetzt lernen!',
    keywords: 'DSGVO Wissen, GDPR Guide, Datenschutz Kompendium, DSGVO Grundlagen, Betroffenenrechte',
    canonical: 'https://marsstein.ai/wissen/dsgvo'
  },
  '/wissen/dsgvo-leitfaeden': {
    title: 'DSGVO Leitfäden 2024: Praktische Anleitungen | Marsstein',
    description: 'Praktische DSGVO-Leitfäden mit Schritt-für-Schritt-Anleitungen. ✓ In 30 Tagen compliant ✓ Vorlagen & Checklisten ✓ Für Einsteiger bis Experten. Jetzt starten!',
    keywords: 'DSGVO Leitfäden, DSGVO Anleitung, DSGVO How-To, DSGVO Praxis, DSGVO Umsetzung, Datenschutz Leitfaden',
    canonical: 'https://marsstein.ai/wissen/dsgvo-leitfaeden'
  },
  '/wissen/compliance-frameworks': {
    title: 'Compliance Frameworks – Standards & Gesetze im Vergleich',
    description: 'Compliance-Frameworks im Überblick: ISO 27001, SOC 2, TISAX, DSGVO, EU AI Act. ✓ Anforderungen vergleichen ✓ Synergien nutzen ✓ Strategie optimieren. Jetzt informieren!',
    keywords: 'Compliance Frameworks, ISO 27001, SOC 2, TISAX, DSGVO Compliance',
    canonical: 'https://marsstein.ai/wissen/compliance-frameworks'
  },
  '/wissen/ki-compliance': {
    title: 'KI Compliance – EU AI Act & Datenschutz Guide',
    description: 'KI-Compliance Wissen: EU AI Act, algorithmische Transparenz, Bias-Vermeidung, ethische KI. ✓ Praxisguides ✓ Checklisten ✓ Expertenrat. Jetzt KI-konform werden!',
    keywords: 'KI Compliance, EU AI Act, Algorithmic Transparency, Bias in AI, Responsible AI',
    canonical: 'https://marsstein.ai/wissen/ki-compliance'
  },
  '/wissen/cybersecurity': {
    title: 'Cybersecurity – IT-Sicherheit & Compliance Wissen',
    description: 'Cybersecurity & Compliance: IT-Sicherheit, ISO 27001, NIS-2, Incident Response. ✓ Technische Maßnahmen ✓ Standards ✓ Best Practices. Jetzt sicher werden!',
    keywords: 'Cybersecurity, IT-Sicherheit, ISO 27001, NIS-2, Incident Response',
    canonical: 'https://marsstein.ai/wissen/cybersecurity'
  },
  '/wissen/risk-management': {
    title: 'Risk Management für Compliance - ISO 31000 & DSFA Anleitung 2025',
    description: 'Risk Management systematisch umsetzen: Risiken identifizieren, bewerten & behandeln nach ISO 31000. ✓ DSFA-Vorlagen ✓ KPI-Dashboard ✓ Praxis-Tools',
    keywords: 'Risk Management, ISO 31000, DSFA, Risikobewertung, Compliance Risk',
    canonical: 'https://marsstein.ai/wissen/risk-management'
  },
  '/wissen/china-dsgvo': {
    title: 'DSGVO & Datenschutz China – Praxisguide für Unternehmen',
    description: '13 Praxisartikel zu DSGVO-Compliance im China-Geschäft: E-Commerce, Social Media, rechtliche Grundlagen und Investment. ✓ Amazon ✓ TikTok ✓ DeepSeek ✓ EU-Vertreter',
    keywords: 'China DSGVO, Datenschutz China, PIPL, EU-China Datentransfer',
    canonical: 'https://marsstein.ai/wissen/china-dsgvo'
  },
  '/wissen/kosten/dsgvo-compliance-kosten': {
    title: 'DSGVO Compliance Kosten 2025 - Was kostet Datenschutz wirklich?',
    description: 'DSGVO Kosten transparent: Initial-Setup 8.000-46.000€, jährlich 5.100-38.000€ je nach Unternehmensgröße. Inkl. versteckter Kosten & Spar-Strategien.',
    keywords: 'DSGVO Kosten, Compliance Kosten, Datenschutz Kosten, DSGVO Budget',
    canonical: 'https://marsstein.ai/wissen/kosten/dsgvo-compliance-kosten'
  },
  '/wissen/kosten/externer-datenschutzbeauftragter-kosten': {
    title: 'Externer Datenschutzbeauftragter Kosten 2025 - Preise & Vergleich',
    description: 'Externer DSB Kosten: 400-2.500€/Monat (4.800-30.000€/Jahr) je nach Modell. Freelancer vs. Kanzlei vs. Hybrid-Lösung im Detail verglichen.',
    keywords: 'Externer DSB Kosten, Datenschutzbeauftragter Preis, DSB monatlich, externer Datenschutz Kosten, DSB Stundensatz',
    canonical: 'https://marsstein.ai/wissen/kosten/externer-datenschutzbeauftragter-kosten'
  },
  '/wissen/kosten/iso-27001-zertifizierung-kosten': {
    title: 'ISO 27001 Zertifizierung Kosten 2025 - Vollständige Preisübersicht',
    description: 'ISO 27001 Kosten: 15.000-150.000€ je nach Größe. Detaillierte Aufschlüsselung: Gap-Analyse, ISMS Implementation, Audit-Kosten & laufende Gebühren.',
    keywords: 'ISO 27001 Kosten, ISO 27001 Preis, ISMS Kosten, Zertifizierung Kosten, ISO 27001 Budget, Informationssicherheit Kosten',
    canonical: 'https://marsstein.ai/wissen/kosten/iso-27001-zertifizierung-kosten'
  },
  '/wissen/dsgvo-compliance-luecken': {
    title: '7 Anzeichen dass Ihre DSGVO-Compliance unvollständig ist',
    description: 'Erkennen Sie kritische DSGVO-Lücken: Fehlendes VVT, keine TOM, fehlende AVV. 70% der Unternehmen haben diese Compliance-Gaps. Jetzt prüfen!',
    keywords: 'DSGVO Lücken, Compliance Gaps, DSGVO unvollständig, Datenschutz Risiken, DSGVO Fehler',
    canonical: 'https://marsstein.ai/wissen/dsgvo-compliance-luecken'
  },
  '/wissen/interner-dsb-scheitert': {
    title: 'Warum interne DSB scheitern - 6 Gründe & Alternativen',
    description: '80% der internen DSB scheitern an Zeitkonflikten, Interessenkonflikten und Überforderung. Kosten: 88.000-113.000€/Jahr. Alternativen im Vergleich.',
    keywords: 'Interner DSB Probleme, Datenschutzbeauftragter Nachteile, DSB Interessenkonflikt, DSB Kosten intern',
    canonical: 'https://marsstein.ai/wissen/interner-dsb-scheitert'
  },
  '/wissen/dsgvo-software-vs-manuell': {
    title: 'DSGVO Software vs. Manuelle Compliance - Was ist besser?',
    description: 'DSGVO-Software spart 80-90% Zeit und 50-70% Kosten vs. manuelle Excel/Word-Lösung. Detaillierter Vergleich: Zeitaufwand, Fehlerquote, Skalierbarkeit.',
    keywords: 'DSGVO Software, Compliance Software, manuelle DSGVO, Excel Datenschutz, DSGVO Tool Vergleich',
    canonical: 'https://marsstein.ai/wissen/dsgvo-software-vs-manuell'
  },
  '/wissen/leitfaden/dsgvo-grundlagen': {
    title: 'DSGVO Grundlagen 2024 – Verständlicher Leitfaden',
    description: 'DSGVO einfach erklärt: Grundprinzipien, Betroffenenrechte, Dokumentationspflichten & praktische Umsetzung. ✓ Anfängerfreundlich ✓ Mit Checklisten. Jetzt lernen!',
    keywords: 'DSGVO Grundlagen, Datenschutz-Grundverordnung, GDPR Basics, Datenschutz Leitfaden',
    canonical: 'https://marsstein.ai/wissen/leitfaden/dsgvo-grundlagen'
  },
  '/wissen/leitfaden/website-dsgvo': {
    title: 'Website DSGVO – Rechtssichere Website-Compliance',
    description: 'Website DSGVO-konform machen: Cookie-Banner, Datenschutzerklärung, Hosting, Tracking. ✓ Schritt-für-Schritt ✓ Vorlagen ✓ Checkliste. Jetzt umsetzen!',
    keywords: 'Website DSGVO, Cookie Banner, Datenschutzerklärung, Website Datenschutz',
    canonical: 'https://marsstein.ai/wissen/leitfaden/website-dsgvo'
  },
  '/wissen/leitfaden/dsfa-durchfuehrung': {
    title: 'DSFA Durchführung – Datenschutz-Folgenabschätzung Leitfaden',
    description: 'Datenschutz-Folgenabschätzung (DSFA) professionell durchführen: Wann nötig, wie umsetzen, Dokumentation. ✓ Schritt-für-Schritt ✓ Vorlagen ✓ Praxisbeispiele. Jetzt DSFA starten!',
    keywords: 'dsfa durchführung, datenschutz folgenabschätzung, dpia guide, art 35 dsgvo, risikobewertung datenschutz',
    canonical: 'https://marsstein.ai/wissen/leitfaden/dsfa-durchfuehrung'
  },
  '/wissen/leitfaden/betroffenenrechte': {
    title: 'Betroffenenrechte – DSGVO Leitfaden für den Umgang',
    description: 'Betroffenenrechte nach DSGVO professionell managen: Auskunft, Löschung, Berichtigung, Datenportabilität. ✓ Prozesse ✓ Fristen ✓ Vorlagen. Jetzt rechtssicher umsetzen!',
    keywords: 'betroffenenrechte dsgvo, auskunftsrecht, recht auf löschung, datenportabilität, dsgvo betroffenenanfragen',
    canonical: 'https://marsstein.ai/wissen/leitfaden/betroffenenrechte'
  },
  '/wissen/leitfaden/tom-massnahmen': {
    title: 'TOM Maßnahmen – DSGVO Art. 32 Technische & Organisatorische Maßnahmen',
    description: 'TOM-Maßnahmen nach Art. 32 DSGVO implementieren: Verschlüsselung, Zugangskontrollen, Pseudonymisierung. ✓ Schritt-für-Schritt ✓ Checklisten ✓ Vorlagen. Jetzt umsetzen!',
    keywords: 'tom maßnahmen dsgvo, art 32 dsgvo, technische organisatorische maßnahmen, verschlüsselung, zugangskontrollen',
    canonical: 'https://marsstein.ai/wissen/leitfaden/tom-massnahmen'
  },
  '/wissen/leitfaden/dsgvo-30-tage': {
    title: 'DSGVO in 30 Tagen – Express-Guide zur Compliance',
    description: 'DSGVO-Compliance in 30 Tagen erreichen: Priorisierter Aktionsplan mit täglichen Aufgaben. ✓ Express-Guide ✓ Sofort umsetzbar ✓ Basis-Compliance. Jetzt starten!',
    keywords: 'dsgvo 30 tage, datenschutz express, compliance schnell, dsgvo sofort umsetzen, datenschutz aktionsplan',
    canonical: 'https://marsstein.ai/wissen/leitfaden/dsgvo-30-tage'
  },
  '/wissen/leitfaden/verarbeitungsverzeichnis': {
    title: 'Verarbeitungsverzeichnis – DSGVO Anleitung & Vorlagen',
    description: 'Verarbeitungsverzeichnis nach Art. 30 DSGVO erstellen: Schritt-für-Schritt Anleitung, Vorlagen & Beispiele. ✓ Rechtssicher ✓ Vollständig ✓ Sofort einsetzbar. Jetzt umsetzen!',
    keywords: 'verarbeitungsverzeichnis dsgvo, art 30 dsgvo, verarbeitungstätigkeiten dokumentieren, dsgvo vorlage',
    canonical: 'https://marsstein.ai/wissen/leitfaden/verarbeitungsverzeichnis'
  },
  '/wissen/rechtsprechung/amazon-luxemburg-2021': {
    title: 'Amazon Luxemburg 2021 – CNPD Bußgeld-Entscheidung 746M€',
    description: 'Amazon Luxemburg 2021 CNPD-Bußgeld: Datenverarbeitungs-Verletzungen, E-Commerce Compliance, DSGVO-Enforcement. ✓ Fine Analysis ✓ Compliance Lessons ✓ Enforcement Trends.',
    keywords: 'Amazon, Luxemburg, CNPD, Bußgeld, DSGVO, E-Commerce, Compliance, Datenverarbeitung, 746 Millionen',
    canonical: 'https://marsstein.ai/wissen/rechtsprechung/amazon-luxemburg-2021'
  },
  '/wissen/rechtsprechung/facebook-fanpage': {
    title: 'Facebook Fanpage EuGH C-210/16 – Gemeinsame Verantwortlichkeit',
    description: 'Facebook Fanpage EuGH-Urteil: Gemeinsame Verantwortlichkeit, Page Insights, Social Media Compliance. ✓ Joint Controllership ✓ Liability ✓ Practical Implications.',
    keywords: 'Facebook Fanpage, EuGH, gemeinsame Verantwortlichkeit, Joint Controller, DSGVO, Page Insights, Social Media Compliance',
    canonical: 'https://marsstein.ai/wissen/rechtsprechung/facebook-fanpage'
  },
  '/wissen/rechtsprechung/schrems-ii': {
    title: 'Schrems II – Internationale Datentransfers nach EuGH',
    description: 'Schrems II Urteil: Privacy Shield ungültig, SCC-Anforderungen, US-Datentransfers, TIA-Bewertung. ✓ Legal Analysis ✓ Compliance Impact ✓ Practical Guidance.',
    keywords: 'Schrems II, Privacy Shield, SCC, US-Datentransfers, EuGH',
    canonical: 'https://marsstein.ai/wissen/rechtsprechung/schrems-ii'
  },
  '/wissen/rechtsprechung/google-analytics-austria': {
    title: 'Google Analytics Austria DSB – US-Tool-Verbot Entscheidung',
    description: 'Google Analytics Austria DSB-Entscheidung: US-Tool-Verbot, Schrems II Auswirkungen, Analytics-Alternativen. ✓ Regulatory Decision ✓ Tool Assessment ✓ Compliance Strategy.',
    keywords: 'Google Analytics, Austria, DSB, Datenschutzbehörde, US-Tools, Schrems II, Analytics-Alternativen, DSGVO',
    canonical: 'https://marsstein.ai/wissen/rechtsprechung/google-analytics-austria'
  },
  '/assessment-center/dsgvo-kosten-rechner': {
    title: 'DSGVO Kostenrechner 2025 - Compliance-Kosten berechnen',
    description: 'Interaktiver DSGVO Kostenrechner: Berechnen Sie Initial- und laufende Compliance-Kosten basierend auf Unternehmensgröße, Branche und Komplexität.',
    keywords: 'DSGVO Kostenrechner, Datenschutz Kosten berechnen, DSGVO Budget Calculator, Compliance Kosten Rechner',
    canonical: 'https://marsstein.ai/assessment-center/dsgvo-kosten-rechner'
  },
  '/assessment-center/ai-risk-assessment': {
    title: 'KI-Risiko Assessment – EU AI Act Bewertung',
    description: 'EU AI Act Risk Assessment: Bewerten Sie das Risiko Ihres KI-Systems nach EU AI Act. ✓ Risikoeinstufung ✓ Compliance-Check ✓ Handlungsempfehlungen. Jetzt testen!',
    keywords: 'EU AI Act Assessment, KI-Risiko Bewertung, AI Risk Assessment, KI Compliance, EU AI Act Risiko',
    canonical: 'https://marsstein.ai/assessment-center/ai-risk-assessment'
  },
  '/assessment-center/datenschutz-test': {
    title: 'DSGVO Datenschutz Test 2025 - Kostenloser Compliance Check',
    description: 'Testen Sie Ihre DSGVO-Compliance kostenlos in 5 Minuten. Unser Datenschutz Test analysiert Ihre Sicherheits-Lücken und gibt personalisierte Handlungsempfehlungen für 2025.',
    keywords: 'DSGVO Test, Datenschutz Test, Compliance Check, DSGVO Assessment',
    canonical: 'https://marsstein.ai/assessment-center/datenschutz-test'
  },
  '/assessment-center/nis2-compliance-check': {
    title: 'NIS2 Compliance Check – NIS2-Richtlinien prüfen',
    description: 'NIS2 Compliance Check: Überprüfen Sie Ihre NIS2-Compliance systematisch. ✓ Rechtliche Anforderungen ✓ Gap-Analyse ✓ Umsetzungsplan. Jetzt testen!',
    keywords: 'NIS2 Compliance, NIS2 Check, NIS2-Richtlinie, Cybersecurity Compliance, NIS2 Assessment',
    canonical: 'https://marsstein.ai/assessment-center/nis2-compliance-check'
  },
  '/assessment-center/soc2-readiness-assessment': {
    title: 'SOC 2 Readiness Assessment – Zertifizierungsbereitschaft',
    description: 'SOC 2 Readiness Assessment: Prüfen Sie Ihre Bereitschaft für die SOC 2 Zertifizierung. ✓ Trust Services ✓ Gap-Analyse ✓ Audit-Roadmap. Jetzt testen!',
    keywords: 'SOC 2 Assessment, SOC 2 Readiness, SOC 2 Zertifizierung, Trust Services, Audit Readiness',
    canonical: 'https://marsstein.ai/assessment-center/soc2-readiness-assessment'
  },
  '/assessment-center/security-controls-audit': {
    title: 'Security Controls Audit – ISO 27001 Sicherheitskontrollen prüfen',
    description: 'Security Controls Audit: Auditieren Sie Ihre ISO 27001 Sicherheitskontrollen systematisch. ✓ Annex A Controls ✓ Gap-Analyse ✓ Remediation-Plan. Jetzt testen!',
    keywords: 'Security Controls Audit, ISO 27001 Controls, Sicherheitskontrollen, Annex A, Controls Assessment',
    canonical: 'https://marsstein.ai/assessment-center/security-controls-audit'
  },
  '/assessment-center/algorithmic-impact-assessment': {
    title: 'Algorithmic Impact Assessment – Folgenabschätzung',
    description: 'Algorithmic Impact Assessment: Bewerten Sie gesellschaftliche Auswirkungen algorithmischer Systeme. ✓ Bias-Prüfung ✓ Fairness ✓ Transparenz. Jetzt testen!',
    keywords: 'Algorithmic Impact Assessment, AIA, Algorithmen Folgenabschätzung, KI Fairness, Bias Detection',
    canonical: 'https://marsstein.ai/assessment-center/algorithmic-impact-assessment'
  },
  '/assessment-center/ai-governance-check': {
    title: 'KI-Governance Check – Reifegrad-Bewertung',
    description: 'AI Governance Check: Bewerten Sie Ihre KI-Governance-Strukturen. ✓ Verantwortungsvolle KI ✓ Reifegrad-Analyse ✓ Handlungsempfehlungen. Jetzt testen!',
    keywords: 'AI Governance Check, KI-Governance, Responsible AI, KI-Ethik, KI-Management',
    canonical: 'https://marsstein.ai/assessment-center/ai-governance-check'
  },
  '/assessment-center/isms-maturity-assessment': {
    title: 'ISO 27001 Maturity Assessment – ISMS Reifegrad prüfen',
    description: 'ISO 27001 ISMS Maturity Assessment: Bewerten Sie den Reifegrad Ihres Information Security Management Systems. ✓ CMMI-basiert ✓ Benchmarks ✓ Roadmap. Jetzt testen!',
    keywords: 'ISO 27001 Assessment, ISMS Maturity, ISMS Reifegrad, ISO 27001 Bewertung, Maturity Assessment',
    canonical: 'https://marsstein.ai/assessment-center/isms-maturity-assessment'
  },
  '/assessment-center/iso-27001-readiness-check': {
    title: 'ISO 27001 Readiness Check – Zertifizierungs-Bereitschaft prüfen',
    description: 'ISO 27001 Readiness Check: Bewerten Sie Ihre Bereitschaft für ISO 27001 Zertifizierung. ✓ ISMS-Bewertung ✓ Gap-Analyse ✓ Implementierungs-Roadmap. Jetzt testen!',
    keywords: 'ISO 27001 Readiness, ISO 27001 Check, ISMS Bereitschaft, ISO 27001 Zertifizierung, Readiness Assessment',
    canonical: 'https://marsstein.ai/assessment-center/iso-27001-readiness-check'
  },
  '/assessment-center/dsgvo-compliance-checklist': {
    title: 'DSGVO Compliance Checklist 2024 - Vollständige Prüfliste',
    description: 'Kostenlose DSGVO-Compliance Checklist mit 50+ Prüfpunkten nach Art. 6-39 DSGVO. ✓ Sofort anwendbar ✓ Inkl. Handlungsempfehlungen ✓ PDF-Export.',
    keywords: 'DSGVO Checklist, Compliance Checklist, DSGVO Prüfliste, Datenschutz Checklist',
    canonical: 'https://marsstein.ai/assessment-center/dsgvo-compliance-checklist'
  }
};

const baseHtmlPath = path.join(__dirname, '../dist/index.html');

if (!fs.existsSync(baseHtmlPath)) {
  console.error('Error: dist/index.html not found. Run npm run build first.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(baseHtmlPath, 'utf8');

function updateMetaTags(html, config) {
  let updatedHtml = html;

  updatedHtml = updatedHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${config.title}</title>`
  );

  updatedHtml = updatedHtml.replace(
    /<meta name="description" content=".*?".*?\/>/,
    `<meta name="description" content="${config.description}" />`
  );

  updatedHtml = updatedHtml.replace(
    /<meta name="keywords" content=".*?".*?\/>/,
    `<meta name="keywords" content="${config.keywords}" />`
  );

  updatedHtml = updatedHtml.replace(
    /<link rel="canonical" href=".*?".*?\/>/,
    `<link rel="canonical" href="${config.canonical}" />`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="og:title" content=".*?".*?\/>/,
    `<meta property="og:title" content="${config.title}" />`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="og:description" content=".*?".*?\/>/,
    `<meta property="og:description" content="${config.description}" />`
  );

  updatedHtml = updatedHtml.replace(
    /<meta property="og:url" content=".*?".*?\/>/,
    `<meta property="og:url" content="${config.canonical}" />`
  );

  updatedHtml = updatedHtml.replace(
    /<meta name="twitter:title" content=".*?".*?\/>/,
    `<meta name="twitter:title" content="${config.title}" />`
  );

  updatedHtml = updatedHtml.replace(
    /<meta name="twitter:description" content=".*?".*?\/>/,
    `<meta name="twitter:description" content="${config.description}" />`
  );

  return updatedHtml;
}

console.log('Generating static HTML files with proper SEO tags...\n');

Object.entries(routeConfigs).forEach(([route, config]) => {
  const updatedHtml = updateMetaTags(baseHtml, config);

  let outputPath;
  if (route === '/') {
    outputPath = path.join(__dirname, '../dist/index.html');
  } else {
    const routePath = route.replace(/^\//, '');
    const dirPath = path.join(__dirname, '../dist', routePath);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    outputPath = path.join(dirPath, 'index.html');
  }

  fs.writeFileSync(outputPath, updatedHtml);
  console.log(`✅ Generated: ${route} -> ${outputPath.replace(path.join(__dirname, '..'), '')}`);
});

console.log('\n✨ Static HTML generation complete!');
console.log(`📊 Total routes with SEO: ${Object.keys(routeConfigs).length}`);
console.log('Deploy the dist folder to see proper SEO tags on all routes.');
