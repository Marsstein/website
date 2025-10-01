import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Shield, Award, Globe, DollarSign, Clock, CheckCircle2,
  XCircle, TrendingUp, FileCheck, Building2, Zap, Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ZertifizierungAuswahlratgeber = () => {
  const [selectedCert, setSelectedCert] = useState<'iso27001' | 'soc2' | 'tisax' | 'iso27017' | 'iso27018' | 'nis2'>('iso27001');
  const [branche, setBranche] = useState<'saas' | 'automotive' | 'healthcare' | 'finance' | 'cloud'>('saas');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sicherheitszertifizierung: Der komplette Entscheidungsratgeber 2025",
    "description": "ISO 27001, SOC 2, TISAX oder NIS2? Objektiver Vergleich aller Zertifizierungen mit Kosten, Dauer und Branchen-Empfehlungen.",
    "author": {
      "@type": "Organization",
      "name": "MARSSTEIN"
    },
    "datePublished": "2025-01-15"
  };

  const certifications = [
    {
      id: 'iso27001',
      name: 'ISO 27001',
      fullName: 'ISO/IEC 27001:2022',
      subtitle: 'Der Goldstandard für Informationssicherheit',
      icon: Shield,
      color: 'from-blue-600 to-blue-700',
      origin: '🌍 International (ISO)',
      kosten: '15.000 - 50.000€',
      dauer: '6-18 Monate',
      anerkennung: 'Weltweit',
      features: {
        overview: {
          typ: 'Management-System-Zertifizierung',
          fokus: 'Gesamtes Informationssicherheits-Management-System (ISMS)',
          controls: '93 Controls in Annex A',
          gueltigkeitsdauer: '3 Jahre (mit jährlichen Überwachungsaudits)',
          rezertifizierung: 'Alle 3 Jahre'
        },
        kosten: [
          { label: 'Zertifizierungsstelle', betrag: '8.000 - 15.000€' },
          { label: 'Beratung (optional)', betrag: '15.000 - 50.000€' },
          { label: 'Tools & Software', betrag: '3.000 - 12.000€/Jahr' },
          { label: 'Interner Aufwand', betrag: '500-800 Stunden' },
          { label: 'Schulungen', betrag: '2.000 - 8.000€' },
          { label: 'Jährliche Überwachung', betrag: '3.000 - 6.000€' }
        ],
        vorteile: [
          'Weltweit anerkannter Standard',
          'Pflicht bei vielen öffentlichen Ausschreibungen',
          'Reduziert Cyber-Versicherungsprämien um durchschnittlich 15%',
          'Nachweis systematischer Informationssicherheit',
          'Vertrauensbildung bei Kunden und Partnern',
          'Kombinierbar mit anderen ISO-Standards',
          'Branchenunabhängig einsetzbar'
        ],
        nachteile: [
          'Hoher initialer Aufwand (6-18 Monate)',
          'Relativ teuer in der Erstimplementierung',
          'Jährliche Audits erforderlich',
          'Kann als "zu theoretisch" empfunden werden',
          'Dokumentationslastig'
        ],
        geeignetFuer: [
          'B2B-SaaS-Unternehmen',
          'IT-Dienstleister',
          'Unternehmen mit internationalen Kunden',
          'Öffentliche Auftragnehmer',
          'Alle Branchen ab 50 Mitarbeitern'
        ],
        industryRequirement: [
          { industry: 'SaaS', required: '⭐⭐⭐⭐⭐', note: 'Standard-Erwartung bei Enterprise-Kunden' },
          { industry: 'Cloud', required: '⭐⭐⭐⭐⭐', note: 'Oft Mindestanforderung' },
          { industry: 'Automotive', required: '⭐⭐⭐', note: 'TISAX bevorzugt' },
          { industry: 'Healthcare', required: '⭐⭐⭐⭐', note: 'Zusätzlich zu branchenspezifischen Standards' },
          { industry: 'Finance', required: '⭐⭐⭐⭐⭐', note: 'De-facto Standard' }
        ]
      }
    },
    {
      id: 'soc2',
      name: 'SOC 2',
      fullName: 'Service Organization Control 2',
      subtitle: 'US-Standard für Service-Provider',
      icon: Building2,
      color: 'from-purple-600 to-purple-700',
      origin: '🇺🇸 USA (AICPA)',
      kosten: '20.000 - 80.000€',
      dauer: '3-12 Monate',
      anerkennung: 'USA & international',
      features: {
        overview: {
          typ: 'Attestierungs-Bericht',
          fokus: 'Trust Service Criteria (Security, Availability, Confidentiality, Processing Integrity, Privacy)',
          controls: 'Individuell je nach Trust Service Criteria',
          gueltigkeitsdauer: 'Type I: Zeitpunkt / Type II: 3-12 Monate Periode',
          rezertifizierung: 'Jährlich empfohlen'
        },
        kosten: [
          { label: 'Auditor (CPA-Firma)', betrag: '20.000 - 50.000€' },
          { label: 'Beratung', betrag: '15.000 - 40.000€' },
          { label: 'Compliance-Tools', betrag: '5.000 - 15.000€/Jahr' },
          { label: 'Interner Aufwand', betrag: '400-600 Stunden' },
          { label: 'Type II (verlängert)', betrag: '+30% zu Type I' }
        ],
        vorteile: [
          'Standard bei US-amerikanischen Kunden',
          'Flexibles Framework (wähle deine Trust Criteria)',
          'Type II zeigt Kontrollen über Zeitraum',
          'Oft Voraussetzung für Enterprise-Deals in USA',
          'Kombination mit ISO 27001 möglich',
          'Fokus auf tatsächliche Wirksamkeit von Controls'
        ],
        nachteile: [
          'In Europa weniger bekannt als ISO 27001',
          'Teurer als ISO 27001',
          'CPA-Firmen-Audit erforderlich (weniger Auswahl)',
          'Jährliche Erneuerung nötig',
          'Report oft vertraulich (nicht öffentlich)'
        ],
        geeignetFuer: [
          'SaaS mit US-Kunden',
          'Cloud-Service-Provider',
          'Fintech mit US-Expansion',
          'Unternehmen mit Enterprise-Sales in USA',
          'Datenverarbeitungsdienstleister'
        ],
        industryRequirement: [
          { industry: 'SaaS', required: '⭐⭐⭐⭐⭐', note: 'Pflicht bei US-Enterprise-Kunden' },
          { industry: 'Cloud', required: '⭐⭐⭐⭐⭐', note: 'Oft neben ISO 27001 gefordert' },
          { industry: 'Automotive', required: '⭐', note: 'Nicht relevant' },
          { industry: 'Healthcare', required: '⭐⭐⭐', note: 'Falls US-Kunden vorhanden' },
          { industry: 'Finance', required: '⭐⭐⭐⭐', note: 'Bei US-Geschäft Pflicht' }
        ]
      }
    },
    {
      id: 'tisax',
      name: 'TISAX',
      fullName: 'Trusted Information Security Assessment Exchange',
      subtitle: 'Automobilindustrie-Standard',
      icon: Award,
      color: 'from-slate-700 to-slate-800',
      origin: '🚗 Deutschland (ENX/VDA)',
      kosten: '10.000 - 35.000€',
      dauer: '4-12 Monate',
      anerkennung: 'Automotive-Branche weltweit',
      features: {
        overview: {
          typ: 'Assessment nach VDA ISA Katalog',
          fokus: 'Informationssicherheit für Automobilzulieferer',
          controls: 'Basiert auf ISO 27001 + branchenspezifisch',
          gueltigkeitsdauer: '3 Jahre',
          rezertifizierung: 'Alle 3 Jahre'
        },
        kosten: [
          { label: 'Assessment-Provider', betrag: '8.000 - 15.000€' },
          { label: 'Beratung', betrag: '10.000 - 25.000€' },
          { label: 'ENX-Portal-Gebühren', betrag: '500 - 1.500€' },
          { label: 'Interner Aufwand', betrag: '300-500 Stunden' },
          { label: 'Assessment Level', betrag: 'AL1 günstig, AL3 teuer' }
        ],
        vorteile: [
          'Pflicht für fast alle Automotive-Zulieferer',
          'In der Branche gegenseitig anerkannt (Exchange)',
          'Basiert auf ISO 27001, aber fokussierter',
          'Assessment-Levels (AL1-AL3) je nach Schutzbedarf',
          'Schneller als ISO 27001',
          'Einmaliges Assessment für viele OEMs'
        ],
        nachteile: [
          'Nur in Automotive-Branche relevant',
          'Außerhalb Automotive nicht anerkannt',
          'Keine "Zertifizierung" im klassischen Sinne',
          'ENX-Portal-Pflicht',
          'Weniger international als ISO 27001'
        ],
        geeignetFuer: [
          'Automotive-Zulieferer (Tier 1-3)',
          'Entwicklungsdienstleister für Automotive',
          'Logistik für Automotive',
          'IT-Dienstleister mit Automotive-Kunden',
          'Jedes Unternehmen mit OEM-Geschäft (VW, BMW, Daimler, etc.)'
        ],
        industryRequirement: [
          { industry: 'SaaS', required: '⭐', note: 'Nur falls Automotive-Kunden' },
          { industry: 'Cloud', required: '⭐', note: 'Nicht Standard' },
          { industry: 'Automotive', required: '⭐⭐⭐⭐⭐', note: 'De-facto Pflicht' },
          { industry: 'Healthcare', required: '⭐', note: 'Nicht relevant' },
          { industry: 'Finance', required: '⭐', note: 'Nicht relevant' }
        ]
      }
    },
    {
      id: 'iso27017',
      name: 'ISO 27017',
      fullName: 'ISO/IEC 27017:2015',
      subtitle: 'Cloud-Services-Spezialisierung',
      icon: Globe,
      color: 'from-cyan-600 to-cyan-700',
      origin: '☁️ International (ISO)',
      kosten: '5.000 - 15.000€ (zusätzlich zu ISO 27001)',
      dauer: '2-6 Monate (nach ISO 27001)',
      anerkennung: 'Cloud-Branche weltweit',
      features: {
        overview: {
          typ: 'Add-on zu ISO 27001',
          fokus: 'Cloud-Service-Provider & Cloud-Kunden',
          controls: '37 zusätzliche Cloud-spezifische Controls',
          gueltigkeitsdauer: '3 Jahre (mit ISO 27001)',
          rezertifizierung: 'Mit ISO 27001 zusammen'
        },
        kosten: [
          { label: 'Zusatz-Audit', betrag: '3.000 - 8.000€' },
          { label: 'Beratung', betrag: '5.000 - 12.000€' },
          { label: 'Voraussetzung', betrag: 'ISO 27001 bereits vorhanden' },
          { label: 'Interner Aufwand', betrag: '100-200 Stunden zusätzlich' }
        ],
        vorteile: [
          'Spezialisiert auf Cloud-Security',
          'Differenzierung gegenüber reiner ISO 27001',
          'Deckt Cloud-Provider- und Cloud-Kunden-Perspektive',
          'Relativ günstig als Add-on',
          'Zeigt Cloud-Expertise'
        ],
        nachteile: [
          'Setzt ISO 27001 voraus',
          'Weniger bekannt als SOC 2',
          'Nicht alle Auditoren bieten es an',
          'Zusätzlicher Audit-Aufwand'
        ],
        geeignetFuer: [
          'Cloud-Service-Provider (AWS, Azure-Konkurrenten)',
          'SaaS mit eigener Infrastruktur',
          'Managed-Service-Provider',
          'IaaS/PaaS-Anbieter',
          'Unternehmen, die Cloud-Security betonen wollen'
        ],
        industryRequirement: [
          { industry: 'SaaS', required: '⭐⭐⭐', note: 'Nice-to-have als Differenziator' },
          { industry: 'Cloud', required: '⭐⭐⭐⭐⭐', note: 'Empfohlen für Provider' },
          { industry: 'Automotive', required: '⭐', note: 'Nicht relevant' },
          { industry: 'Healthcare', required: '⭐⭐', note: 'Falls Cloud-Dienste angeboten' },
          { industry: 'Finance', required: '⭐⭐⭐', note: 'Bei Cloud-Banking relevant' }
        ]
      }
    },
    {
      id: 'iso27018',
      name: 'ISO 27018',
      fullName: 'ISO/IEC 27018:2019',
      subtitle: 'Privacy in der Cloud',
      icon: Shield,
      color: 'from-green-600 to-green-700',
      origin: '🔒 International (ISO)',
      kosten: '5.000 - 15.000€ (zusätzlich zu ISO 27001)',
      dauer: '2-6 Monate (nach ISO 27001)',
      anerkennung: 'Cloud & Privacy-fokussiert',
      features: {
        overview: {
          typ: 'Add-on zu ISO 27001 + ISO 27017',
          fokus: 'Schutz personenbezogener Daten in der Cloud',
          controls: 'Privacy-spezifische Cloud-Controls',
          gueltigkeitsdauer: '3 Jahre',
          rezertifizierung: 'Mit ISO 27001 zusammen'
        },
        kosten: [
          { label: 'Zusatz-Audit', betrag: '3.000 - 8.000€' },
          { label: 'Beratung', betrag: '5.000 - 15.000€' },
          { label: 'Voraussetzung', betrag: 'ISO 27001 + idealerweise 27017' },
          { label: 'Interner Aufwand', betrag: '80-150 Stunden' }
        ],
        vorteile: [
          'Fokus auf DSGVO-Compliance in Cloud',
          'Zeigt Verantwortung für Kundendaten',
          'Wichtig bei EU-Kunden',
          'Kombiniert Security + Privacy',
          'Add-on zu ISO 27001/27017'
        ],
        nachteile: [
          'Setzt ISO 27001 (idealerweise + 27017) voraus',
          'Wenig bekannt außerhalb Privacy-Community',
          'Oft durch DSGVO bereits abgedeckt',
          'Zusätzlicher Audit-Scope'
        ],
        geeignetFuer: [
          'Cloud-Provider mit EU-Kunden',
          'SaaS mit personenbezogenen Daten',
          'Unternehmen mit DSGVO-Fokus',
          'Cloud-Dienste im Healthcare/HR-Bereich'
        ],
        industryRequirement: [
          { industry: 'SaaS', required: '⭐⭐⭐', note: 'Falls viele EU-B2C-Kunden' },
          { industry: 'Cloud', required: '⭐⭐⭐⭐', note: 'Privacy-Differentiator' },
          { industry: 'Automotive', required: '⭐', note: 'Nicht üblich' },
          { industry: 'Healthcare', required: '⭐⭐⭐⭐', note: 'Patientendaten in Cloud' },
          { industry: 'Finance', required: '⭐⭐', note: 'DSGVO meist ausreichend' }
        ]
      }
    },
    {
      id: 'nis2',
      name: 'NIS2',
      fullName: 'NIS2-Richtlinie (EU) 2022/2555',
      subtitle: 'EU-Cybersecurity für kritische Infrastruktur',
      icon: Zap,
      color: 'from-red-600 to-red-700',
      origin: '🇪🇺 EU-Richtlinie',
      kosten: 'Keine Zertifizierung, Compliance-Pflicht',
      dauer: 'Ongoing Compliance',
      anerkennung: 'EU-weit verpflichtend für betroffene Sektoren',
      features: {
        overview: {
          typ: 'Gesetzliche Pflicht (keine Zertifizierung)',
          fokus: 'Cybersecurity-Mindestanforderungen',
          controls: '10 Mindestmaßnahmen + Meldepflichten',
          gueltigkeitsdauer: 'Permanente Compliance',
          rezertifizierung: 'Laufende Aufsicht'
        },
        kosten: [
          { label: 'Gap-Analyse', betrag: '5.000 - 15.000€' },
          { label: 'Implementierung', betrag: '20.000 - 100.000€+' },
          { label: 'Compliance-Tools', betrag: '10.000 - 30.000€/Jahr' },
          { label: 'Laufende Überwachung', betrag: '15.000 - 50.000€/Jahr' },
          { label: 'Incident-Response-Team', betrag: 'Personal-abhängig' }
        ],
        vorteile: [
          'Gesetzlich verpflichtend = keine Wahl',
          'Verbessert tatsächliche Cybersecurity',
          'Schützt vor Bußgeldern (bis 10 Mio. € oder 2% Umsatz)',
          'ISO 27001 deckt viel von NIS2 ab',
          'EU-weite Harmonisierung'
        ],
        nachteile: [
          'Sehr hohe Bußgelder bei Nichteinhaltung',
          'Persönliche Haftung der Geschäftsführung',
          'Komplexe Meldepflichten (24h-Vorwarnung)',
          'Nationale Umsetzung unterschiedlich',
          'Keine "Zertifizierung" möglich'
        ],
        geeignetFuer: [
          'Kritische Infrastrukturen (Energie, Wasser, Transport)',
          'Wesentliche/wichtige Einrichtungen nach NIS2-Katalog',
          'Gesundheitsversorgung',
          'Digitale Infrastruktur',
          'Unternehmen mit >50 MA und >10 Mio€ Umsatz in relevanten Sektoren'
        ],
        industryRequirement: [
          { industry: 'SaaS', required: '⭐⭐', note: 'Nur wenn kritische Dienste' },
          { industry: 'Cloud', required: '⭐⭐⭐⭐', note: 'Falls kritische Infra' },
          { industry: 'Automotive', required: '⭐⭐', note: 'Zulieferer teils betroffen' },
          { industry: 'Healthcare', required: '⭐⭐⭐⭐⭐', note: 'Krankenhäuser verpflichtet' },
          { industry: 'Finance', required: '⭐⭐⭐⭐⭐', note: 'Banken/Versicherungen Pflicht' }
        ]
      }
    }
  ];

  const selectedCertification = certifications.find(c => c.id === selectedCert);

  const getRecommendation = () => {
    const recommendations: Record<string, string[]> = {
      saas: ['iso27001', 'soc2', 'iso27017'],
      automotive: ['tisax', 'iso27001'],
      healthcare: ['iso27001', 'iso27018', 'nis2'],
      finance: ['iso27001', 'soc2', 'nis2'],
      cloud: ['iso27001', 'soc2', 'iso27017', 'iso27018']
    };
    return recommendations[branche] || [];
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Sicherheitszertifizierung Vergleich: ISO 27001, SOC 2, TISAX Entscheidungshilfe 2025"
        description="ISO 27001, SOC 2, TISAX, ISO 27017/27018 oder NIS2? Objektiver Vergleich mit Kosten, Dauer und Branchen-Empfehlungen für Ihre Zertifizierung."
        canonical="/ratgeber/sicherheitszertifizierung-auswahl"
        keywords="Zertifizierung auswählen, ISO 27001 vs SOC 2, TISAX Vergleich, Sicherheitszertifizierung, Compliance Zertifikat"
        structuredData={structuredData}
      />
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#e24e1b] text-white">
              <Award className="h-4 w-4 mr-2" />
              Entscheidungsratgeber 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#232323] bg-clip-text text-transparent">
              Welche Sicherheitszertifizierung<br />brauchen Sie wirklich?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ISO 27001, SOC 2, TISAX, ISO 27017/27018 oder NIS2-Compliance?
              Objektiver Vergleich mit Kosten, Zeitaufwand und Branchen-Empfehlungen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Card className="border-2 border-[#e24e1b]/20 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10">
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-[#e24e1b]" />
                  Welche Zertifizierung für Ihre Branche?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Wählen Sie Ihre Branche:
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    {[
                      { id: 'saas', label: 'SaaS / Software', icon: '💻' },
                      { id: 'automotive', label: 'Automotive', icon: '🚗' },
                      { id: 'healthcare', label: 'Healthcare', icon: '🏥' },
                      { id: 'finance', label: 'Finance', icon: '🏦' },
                      { id: 'cloud', label: 'Cloud Provider', icon: '☁️' }
                    ].map((b) => (
                      <button
                        key={b.id}
                        onClick={() => setBranche(b.id as any)}
                        className={`p-4 rounded-lg border-2 text-center transition-all ${
                          branche === b.id
                            ? 'border-[#e24e1b] bg-[#e24e1b]/10 font-bold'
                            : 'border-gray-200 hover:border-[#e24e1b]/50'
                        }`}
                      >
                        <div className="text-3xl mb-2">{b.icon}</div>
                        <div className="text-sm">{b.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#e24e1b]/20 to-[#ea580c]/20 rounded-lg p-6 border-2 border-[#e24e1b]">
                  <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <CheckCircle2 className="h-6 w-6 text-[#39B37B]" />
                    Empfohlene Zertifizierungen für {branche === 'saas' ? 'SaaS/Software' : branche === 'automotive' ? 'Automotive' : branche === 'healthcare' ? 'Healthcare' : branche === 'finance' ? 'Finance' : 'Cloud Provider'}:
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {getRecommendation().map((certId) => {
                      const cert = certifications.find(c => c.id === certId);
                      return cert ? (
                        <Badge
                          key={certId}
                          className="px-4 py-2 bg-white text-[#232323] border-2 border-[#e24e1b] hover:bg-[#e24e1b] hover:text-white cursor-pointer"
                          onClick={() => setSelectedCert(certId as any)}
                        >
                          <cert.icon className="h-4 w-4 mr-2" />
                          {cert.name}
                        </Badge>
                      ) : null;
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Alle Zertifizierungen im Überblick</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <button
                  key={cert.id}
                  onClick={() => setSelectedCert(cert.id as any)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    selectedCert === cert.id
                      ? 'bg-gradient-to-r ' + cert.color + ' text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <cert.icon className="inline h-5 w-5 mr-2" />
                  {cert.name}
                </button>
              ))}
            </div>
          </div>

          {selectedCertification && (
            <motion.div
              key={selectedCert}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <Card className="border-2 border-gray-200 shadow-xl">
                <CardHeader className={`bg-gradient-to-r ${selectedCertification.color} text-white`}>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-3xl flex items-center gap-3">
                        <selectedCertification.icon className="h-8 w-8" />
                        {selectedCertification.name}
                      </CardTitle>
                      <p className="text-white/90 mt-1">{selectedCertification.fullName}</p>
                      <p className="text-white font-semibold mt-2">{selectedCertification.subtitle}</p>
                    </div>
                    <div className="text-right bg-white/20 rounded-lg p-4">
                      <div className="text-sm opacity-90">Herkunft</div>
                      <div className="text-xl font-bold">{selectedCertification.origin}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <DollarSign className="h-8 w-8 mx-auto mb-2 text-[#e24e1b]" />
                      <div className="text-sm text-gray-600">Kosten</div>
                      <div className="font-bold text-[#232323]">{selectedCertification.kosten}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <Clock className="h-8 w-8 mx-auto mb-2 text-[#e24e1b]" />
                      <div className="text-sm text-gray-600">Dauer</div>
                      <div className="font-bold text-[#232323]">{selectedCertification.dauer}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <Globe className="h-8 w-8 mx-auto mb-2 text-[#e24e1b]" />
                      <div className="text-sm text-gray-600">Anerkennung</div>
                      <div className="font-bold text-[#232323]">{selectedCertification.anerkennung}</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <FileCheck className="h-8 w-8 mx-auto mb-2 text-[#e24e1b]" />
                      <div className="text-sm text-gray-600">Typ</div>
                      <div className="font-bold text-[#232323] text-sm">{selectedCertification.features.overview.typ}</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4">Überblick</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {Object.entries(selectedCertification.features.overview).map(([key, value]) => (
                        <div key={key} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="text-[#232323] font-semibold text-right ml-4">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                      <DollarSign className="h-6 w-6 text-[#e24e1b]" />
                      Detaillierte Kostenaufstellung
                    </h3>
                    <div className="bg-gray-50 rounded-lg p-6">
                      {selectedCertification.features.kosten.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                          <span className="text-gray-700">{item.label}</span>
                          <span className="font-bold text-[#232323]">{item.betrag}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-[#39B37B]">
                        <CheckCircle2 className="h-6 w-6" />
                        Vorteile
                      </h3>
                      <ul className="space-y-2">
                        {selectedCertification.features.vorteile.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-600">
                        <XCircle className="h-6 w-6" />
                        Nachteile
                      </h3>
                      <ul className="space-y-2">
                        {selectedCertification.features.nachteile.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <XCircle className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Branchen-Relevanz</h3>
                    <div className="space-y-3">
                      {selectedCertification.features.industryRequirement.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-semibold text-[#232323]">{item.industry}</div>
                            <div className="text-sm text-gray-600">{item.note}</div>
                          </div>
                          <div className="text-2xl">{item.required}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Target className="h-6 w-6 text-blue-600" />
                      Ideal geeignet für:
                    </h3>
                    <ul className="space-y-2">
                      {selectedCertification.features.geeignetFuer.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <Card className="border-2 border-[#e24e1b] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  MARSSTEIN unterstützt Sie bei allen Zertifizierungen
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="bg-[#e24e1b]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <FileCheck className="h-10 w-10 text-[#e24e1b]" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Gap-Analyse</h4>
                    <p className="text-gray-600 text-sm">
                      Automatischer Check Ihres aktuellen Stands gegen alle Standards
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#e24e1b]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-10 w-10 text-[#e24e1b]" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Dokumentation</h4>
                    <p className="text-gray-600 text-sm">
                      Alle Policies, Controls und Nachweise audit-ready
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-[#e24e1b]/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                      <Award className="h-10 w-10 text-[#e24e1b]" />
                    </div>
                    <h4 className="font-bold text-lg mb-2">Audit-Begleitung</h4>
                    <p className="text-gray-600 text-sm">
                      Experten-Support während des gesamten Zertifizierungsprozesses
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl px-8 py-6 text-lg"
                  >
                    <Link to="/contact">
                      <Award className="h-5 w-5 mr-2" />
                      Kostenlose Zertifizierungs-Beratung anfragen
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-600 mt-3">
                    Wir analysieren Ihren Bedarf und empfehlen die richtige Zertifizierung
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ZertifizierungAuswahlratgeber;
