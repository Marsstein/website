import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check, ChevronDown, ChevronUp, Shield, Award, FileText,
  Clock, Users, Zap, CheckCircle2, AlertCircle, Star,
  Download, TrendingUp, Target, ArrowRight, Sparkles, HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DsgvoAudit: React.FC = () => {
  const [selectedAudit, setSelectedAudit] = useState<'self' | 'system' | 'full'>('system');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [checklist, setChecklist] = useState({
    employees: false,
    sensitiveData: false,
    website: false,
    cloudServices: false,
    customers: false
  });

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "MARSSTEIN DSGVO Audit & Zertifizierung",
    "description": "Professionelle DSGVO-Audits mit offizieller Zertifizierung in drei Stufen: Self-Assessment, System-Audit und Voll-Audit",
    "provider": {
      "@type": "Organization",
      "name": "MARSSTEIN"
    },
    "serviceType": "DSGVO Compliance Audit",
    "areaServed": "DE",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "DSGVO Audit Typen",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Self-Assessment Audit"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "System-Audit"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Voll-Audit"
          }
        }
      ]
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist ein DSGVO Audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein DSGVO Audit ist eine systematische Überprüfung Ihrer Datenschutz-Compliance gemäß DSGVO. Es prüft, ob Ihr Unternehmen alle gesetzlichen Anforderungen erfüllt und identifiziert Schwachstellen."
        }
      },
      {
        "@type": "Question",
        "name": "Ist ein DSGVO Audit Pflicht?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein DSGVO Audit ist nicht gesetzlich verpflichtend, wird aber dringend empfohlen. Bei Datenpannen oder Beschwerden können Sie mit einem Audit nachweisen, dass Sie Compliance-Maßnahmen ergriffen haben."
        }
      },
      {
        "@type": "Question",
        "name": "Was kostet ein DSGVO Audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Kosten hängen vom Audit-Typ ab: Self-Assessment (ab €69/Monat), System-Audit (ab €199/Monat) oder Voll-Audit (ab €449/Monat). Alle Audits sind in den MARSSTEIN Paketen enthalten."
        }
      }
    ]
  };

  const auditTypes = [
    {
      id: 'self' as const,
      name: 'Self-Assessment Audit',
      badge: 'VERIFIED',
      badgeColor: 'from-[#667eea] to-[#764ba2]',
      price: '€69',
      duration: 'Jederzeit',
      frequency: 'Jährlich',
      description: 'Automatisiertes Audit für kleine Unternehmen',
      icon: FileText,
      features: [
        'Automatischer Fragebogen',
        'KI-gestützte Auswertung',
        'Sofortige Ergebnisse',
        'Compliance-Score',
        'Handlungsempfehlungen',
        'VERIFIED Siegel'
      ],
      suitable: 'Kleinunternehmen, Selbstständige, Startups (<10 Mitarbeiter)',
      process: [
        { step: 'Online-Fragebogen ausfüllen', time: '15 Min.' },
        { step: 'Automatische Auswertung', time: 'Sofort' },
        { step: 'Compliance-Report erhalten', time: 'Sofort' },
        { step: 'Siegel herunterladen', time: 'Sofort' }
      ]
    },
    {
      id: 'system' as const,
      name: 'System-Audit',
      badge: 'CERTIFIED',
      badgeColor: 'from-[#e24e1b] to-[#ea580c]',
      price: '€199',
      duration: '2-3 Wochen',
      frequency: 'Halbjährlich',
      description: 'Professionelles Audit mit DSB-Prüfung',
      icon: Shield,
      popular: true,
      features: [
        'Detaillierter Fragebogen',
        'Dokumenten-Review durch DSB',
        'Technische Systemprüfung',
        'Persönliches Feedback-Gespräch',
        'Nachbesserungs-Support',
        'CERTIFIED Siegel'
      ],
      suitable: 'KMUs, wachsende Unternehmen (10-100 Mitarbeiter)',
      process: [
        { step: 'Kick-off & Datenerfassung', time: '1 Woche' },
        { step: 'Dokumentenprüfung durch DSB', time: '1 Woche' },
        { step: 'Feedback & Nachbesserung', time: '3-5 Tage' },
        { step: 'Zertifizierung & Siegel', time: '2 Tage' }
      ]
    },
    {
      id: 'full' as const,
      name: 'Voll-Audit',
      badge: 'EXCELLENCE',
      badgeColor: 'from-[#003366] to-[#1F1F24]',
      price: '€449',
      duration: '4-6 Wochen',
      frequency: 'Quartalsweise',
      description: 'Premium-Audit mit strategischer Beratung',
      icon: Award,
      features: [
        'Vollständige Dokumentenprüfung',
        'Risiko-Bewertung & Gap-Analyse',
        'C-Level Compliance Briefing',
        'IT-Security-Assessment',
        'Dedizierter Audit-Manager',
        'EXCELLENCE Siegel'
      ],
      suitable: 'Große Unternehmen, kritische Branchen (>100 Mitarbeiter)',
      process: [
        { step: 'Audit-Planung & Kick-off', time: '1 Woche' },
        { step: 'Dokumentenprüfung & Risiko-Analyse', time: '2 Wochen' },
        { step: 'IT-Security Assessment', time: '1 Woche' },
        { step: 'C-Level Briefing & Zertifikat', time: '1-2 Wochen' }
      ]
    }
  ];

  const checklistItems = [
    { id: 'employees', label: 'Mehr als 20 Mitarbeiter arbeiten mit personenbezogenen Daten', points: 3 },
    { id: 'sensitiveData', label: 'Verarbeitung sensibler Daten (Gesundheit, Religion, etc.)', points: 3 },
    { id: 'website', label: 'Website mit Kontaktformular, Newsletter oder Cookies', points: 1 },
    { id: 'cloudServices', label: 'Nutzung von Cloud-Diensten (AWS, Google, Microsoft, etc.)', points: 2 },
    { id: 'customers', label: 'Mehr als 1.000 Kundendaten gespeichert', points: 2 }
  ];

  const getRecommendation = () => {
    const score = checklistItems.reduce((sum, item) =>
      checklist[item.id as keyof typeof checklist] ? sum + item.points : sum, 0
    );

    if (score >= 8) return 'full';
    if (score >= 4) return 'system';
    return 'self';
  };

  const faqs = [
    {
      question: 'Was ist ein DSGVO Audit?',
      answer: 'Ein DSGVO Audit ist eine systematische Überprüfung Ihrer Datenschutz-Compliance gemäß DSGVO. Es prüft, ob Ihr Unternehmen alle gesetzlichen Anforderungen erfüllt – von der Datenschutzerklärung über Verarbeitungsverzeichnisse bis zu technischen Sicherheitsmaßnahmen. Das Audit identifiziert Schwachstellen und gibt konkrete Handlungsempfehlungen.'
    },
    {
      question: 'Ist ein DSGVO Audit Pflicht?',
      answer: 'Ein DSGVO Audit ist nicht gesetzlich verpflichtend, wird aber dringend empfohlen. Es hilft Ihnen, Bußgelder zu vermeiden und nachweislich compliant zu sein. Bei Datenpannen oder Beschwerden können Sie mit einem Audit-Zertifikat nachweisen, dass Sie Compliance-Maßnahmen ergriffen haben – das kann Bußgelder erheblich reduzieren.'
    },
    {
      question: 'Was kostet ein DSGVO Audit?',
      answer: 'Die Kosten hängen vom Audit-Typ ab: Self-Assessment Audits sind ab €69/Monat verfügbar, System-Audits ab €199/Monat und Voll-Audits ab €449/Monat. Bei MARSSTEIN sind alle Audits in den jeweiligen Paketen enthalten – keine zusätzlichen Kosten.'
    },
    {
      question: 'Wie lange dauert ein DSGVO Audit?',
      answer: 'Die Dauer variiert je nach Audit-Typ: Self-Assessments liefern sofortige Ergebnisse (ca. 15 Minuten), System-Audits dauern 2-3 Wochen, und Voll-Audits 4-6 Wochen. Die Timeline hängt auch davon ab, wie schnell Sie Dokumente bereitstellen können.'
    },
    {
      question: 'Was passiert nach dem Audit?',
      answer: 'Nach dem Audit erhalten Sie einen detaillierten Compliance-Report mit Ihrem Score, identifizierten Schwachstellen und konkreten Handlungsempfehlungen. Bei bestandenem Audit bekommen Sie ein offizielles MARSSTEIN-Siegel (VERIFIED, CERTIFIED oder EXCELLENCE), das Sie auf Ihrer Website und in Ausschreibungen verwenden können.'
    },
    {
      question: 'Welches Audit brauche ich?',
      answer: 'Das hängt von Ihrer Unternehmensgröße und Datenverarbeitung ab: Self-Assessment für Kleinunternehmen (<10 Mitarbeiter), System-Audit für KMUs (10-100 Mitarbeiter) und Voll-Audit für große Unternehmen oder kritische Branchen. Nutzen Sie unseren Audit-Checker oben für eine persönliche Empfehlung.'
    },
    {
      question: 'Ist das Siegel rechtlich anerkannt?',
      answer: 'MARSSTEIN-Siegel sind Qualitätsnachweise Ihrer DSGVO-Compliance, aber keine behördlich zertifizierten Siegel nach Art. 42 DSGVO. Sie dokumentieren, dass ein unabhängiger Datenschutzbeauftragter Ihre Compliance geprüft hat. In öffentlichen Ausschreibungen und B2B-Verträgen werden solche Nachweise häufig verlangt.'
    },
    {
      question: 'Wie oft muss ich ein Audit machen?',
      answer: 'Wir empfehlen: Self-Assessments jährlich, System-Audits halbjährlich und Voll-Audits quartalsweise. Bei MARSSTEIN sind regelmäßige Re-Audits automatisch in den Paketen enthalten, um Ihre Compliance kontinuierlich zu überprüfen.'
    }
  ];

  const currentAudit = auditTypes.find(a => a.id === selectedAudit)!;
  const recommendation = getRecommendation();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <SEOHead
        title="DSGVO Audit & Zertifizierung - Professionelle Datenschutzprüfung"
        description="DSGVO Audit ✓ Professionelle Zertifizierung in 3 Stufen ✓ Von Self-Assessment bis Voll-Audit ✓ Offizielles Marsstein-Siegel ✓ Jetzt starten!"
        canonical="/dsgvo-audit"
        structuredData={[structuredData, faqStructuredData]}
      />
      <Header />

      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 backdrop-blur-sm rounded-full mb-8 border border-[#e24e1b]/20"
            >
              <Shield className="h-5 w-5 text-[#e24e1b] animate-pulse" />
              <span className="text-sm font-semibold text-[#e24e1b]">DSGVO Compliance Audit</span>
              <Award className="h-5 w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#232323] bg-clip-text text-transparent bg-300% animate-gradient"
            >
              DSGVO Audit &<br />
              Zertifizierung
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-[#474747] max-w-4xl mx-auto leading-relaxed mb-8"
            >
              Professionelle DSGVO-Audits mit <span className="font-semibold text-[#e24e1b]">offizieller Zertifizierung</span>.<br />
              Von Self-Assessment bis Voll-Audit – <span className="font-semibold text-[#232323]">mit MARSSTEIN-Siegel</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="#audit-checker">
                <Button size="lg" className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-bold group">
                  <Target className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                  Kostenloses Audit starten
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="#audit-types">
                <Button size="lg" variant="outline" className="border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white transition-all duration-300 px-8 py-6 text-lg font-semibold">
                  <HelpCircle className="h-5 w-5 mr-2" />
                  Audit-Typ finden
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            id="audit-types"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                3 Audit-Typen – In Ihrem MARSSTEIN-Paket enthalten
              </h2>
              <p className="text-lg text-[#474747] max-w-3xl mx-auto mb-4">
                Je nach gewähltem Paket führen wir automatisch das passende DSGVO-Audit für Ihr Unternehmen durch
              </p>
              <div className="inline-flex items-center gap-2 bg-[#39B37B]/10 border border-[#39B37B]/30 rounded-full px-4 py-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                <span className="text-sm font-semibold text-[#39B37B]">Keine Extra-Kosten – Komplett im Paket inklusive</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {auditTypes.map((audit, index) => (
                <motion.div
                  key={audit.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="relative group"
                >
                  {audit.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white px-4 py-1 border-0 shadow-lg">
                        <Star className="h-4 w-4 mr-1 animate-pulse" />
                        BELIEBT
                      </Badge>
                    </div>
                  )}

                  <Card className={cn(
                    "relative h-full border-2 transition-all duration-500 overflow-hidden cursor-pointer",
                    audit.popular
                      ? "border-[#e24e1b] shadow-xl scale-105"
                      : "border-gray-200 hover:border-[#e24e1b]/50"
                  )}
                  onClick={() => setSelectedAudit(audit.id)}
                  >
                    <CardContent className="p-8">
                      <div className="text-center mb-6">
                        <div className={cn(
                          "w-16 h-16 rounded-full bg-gradient-to-br mx-auto mb-4 flex items-center justify-center",
                          audit.badgeColor
                        )}>
                          <audit.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#232323] mb-2">{audit.name}</h3>
                        <div className={cn(
                          "inline-block px-4 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r mb-4",
                          audit.badgeColor
                        )}>
                          {audit.badge}
                        </div>
                        <p className="text-[#474747] text-sm mb-4">{audit.description}</p>
                        <div className={cn(
                          "inline-block px-4 py-2 rounded-lg text-sm font-semibold",
                          audit.id === 'self' ? "bg-[#667eea]/10 text-[#667eea]" :
                          audit.id === 'system' ? "bg-[#e24e1b]/10 text-[#e24e1b]" :
                          "bg-[#003366]/10 text-[#003366]"
                        )}>
                          {audit.id === 'self' ? '✓ Im STARTER Paket' :
                           audit.id === 'system' ? '✓ Im PROFESSIONAL Paket' :
                           '✓ Im ENTERPRISE Paket'}
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-[#474747]">
                          <Clock className="h-4 w-4 mr-2 text-[#e24e1b]" />
                          <span>Dauer: {audit.duration}</span>
                        </div>
                        <div className="flex items-center text-sm text-[#474747]">
                          <TrendingUp className="h-4 w-4 mr-2 text-[#e24e1b]" />
                          <span>Frequenz: {audit.frequency}</span>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6 mb-6">
                        <h4 className="text-sm font-bold text-[#232323] mb-3">Leistungen:</h4>
                        <ul className="space-y-2">
                          {audit.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-[#474747]">
                              <Check className="h-4 w-4 text-[#39B37B] mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-xs font-semibold text-[#232323] mb-1">Geeignet für:</p>
                        <p className="text-xs text-[#474747]">{audit.suitable}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/preise">
                <Button size="lg" variant="outline" className="border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white">
                  Alle Pakete & Preise anzeigen
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                So läuft Ihr Audit ab
              </h2>
              <p className="text-lg text-[#474747] max-w-3xl mx-auto">
                Transparenter Prozess von der Anmeldung bis zur Zertifizierung
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-full p-1 border-2 border-[#e24e1b]/20 shadow-xl max-w-3xl mx-auto mb-12">
              <div className="flex items-center gap-2">
                {auditTypes.map((audit) => (
                  <button
                    key={audit.id}
                    onClick={() => setSelectedAudit(audit.id)}
                    className={cn(
                      "flex-1 px-4 py-3 rounded-full transition-all duration-300 font-medium text-sm",
                      selectedAudit === audit.id
                        ? "bg-[#e24e1b] text-white shadow-lg"
                        : "text-[#474747] hover:text-[#232323]"
                    )}
                  >
                    {audit.badge}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedAudit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="border-2 border-[#e24e1b]/20 shadow-lg">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className={cn(
                        "inline-block px-6 py-2 rounded-full text-lg font-bold text-white bg-gradient-to-r mb-4",
                        currentAudit.badgeColor
                      )}>
                        {currentAudit.name}
                      </div>
                      <p className="text-[#474747]">Gesamtdauer: {currentAudit.duration}</p>
                    </div>

                    <div className="space-y-6">
                      {currentAudit.process.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4"
                        >
                          <div className={cn(
                            "w-12 h-12 rounded-full bg-gradient-to-br flex items-center justify-center text-white font-bold text-lg flex-shrink-0",
                            currentAudit.badgeColor
                          )}>
                            {index + 1}
                          </div>
                          <div className="flex-1 pt-2">
                            <h4 className="text-lg font-semibold text-[#232323] mb-1">{step.step}</h4>
                            <div className="flex items-center text-sm text-[#474747]">
                              <Clock className="h-4 w-4 mr-1 text-[#e24e1b]" />
                              {step.time}
                            </div>
                          </div>
                          {index < currentAudit.process.length - 1 && (
                            <div className="absolute left-[23px] top-[60px] w-0.5 h-12 bg-gradient-to-b from-[#e24e1b] to-transparent" style={{ marginLeft: '1.5rem' }} />
                          )}
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-200">
                      <div className="bg-gradient-to-r from-[#39B37B]/10 to-[#39B37B]/5 rounded-lg p-6 flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-[#39B37B] flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-[#232323] mb-2">Nach erfolgreichem Audit erhalten Sie:</h4>
                          <ul className="space-y-1 text-sm text-[#474747]">
                            <li>✓ Detaillierten Compliance-Report mit Score</li>
                            <li>✓ Offizielles {currentAudit.badge} Siegel zum Download</li>
                            <li>✓ Empfehlungen zur Verbesserung</li>
                            <li>✓ Gültigkeit: {currentAudit.frequency === 'Jährlich' ? '12 Monate' : currentAudit.frequency === 'Halbjährlich' ? '6 Monate' : '3 Monate'}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            id="audit-checker"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <Card className="border-2 border-[#e24e1b]/30 shadow-2xl bg-gradient-to-br from-white to-[#F5F6F8]">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-full text-white text-sm font-bold mb-4">
                    <Zap className="h-4 w-4 animate-pulse" />
                    AUDIT-CHECKER
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                    Welches Audit passt zu Ihnen?
                  </h2>
                  <p className="text-lg text-[#474747]">
                    Beantworten Sie 5 kurze Fragen für eine persönliche Empfehlung
                  </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4 mb-8">
                  {checklistItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={cn(
                        "flex items-start gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer",
                        checklist[item.id as keyof typeof checklist]
                          ? "border-[#39B37B] bg-[#39B37B]/5"
                          : "border-gray-200 hover:border-[#e24e1b]/30 bg-white"
                      )}
                      onClick={() => setChecklist(prev => ({ ...prev, [item.id]: !prev[item.id as keyof typeof prev] }))}
                    >
                      <div className={cn(
                        "w-6 h-6 rounded border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all",
                        checklist[item.id as keyof typeof checklist]
                          ? "border-[#39B37B] bg-[#39B37B]"
                          : "border-gray-300"
                      )}>
                        {checklist[item.id as keyof typeof checklist] && (
                          <Check className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className="text-[#232323] font-medium">{item.label}</span>
                    </motion.div>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {Object.values(checklist).some(v => v) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="max-w-2xl mx-auto"
                    >
                      <div className={cn(
                        "p-6 rounded-xl bg-gradient-to-br text-white",
                        auditTypes.find(a => a.id === recommendation)?.badgeColor
                      )}>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold mb-2">Ihre Empfehlung:</h3>
                            <p className="text-2xl font-bold mb-3">
                              {auditTypes.find(a => a.id === recommendation)?.name}
                            </p>
                            <p className="mb-4 opacity-90">
                              Basierend auf Ihren Angaben empfehlen wir das {auditTypes.find(a => a.id === recommendation)?.badge} Siegel für Ihr Unternehmen.
                            </p>
                            <Link to="/preise">
                              <Button size="lg" className="bg-white text-[#e24e1b] hover:bg-gray-100">
                                Jetzt {auditTypes.find(a => a.id === recommendation)?.name} starten
                                <ArrowRight className="h-5 w-5 ml-2" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                MARSSTEIN DSGVO-Siegel
              </h2>
              <p className="text-lg text-[#474747] max-w-3xl mx-auto">
                Nach erfolgreichem Audit erhalten Sie ein offizielles Siegel für Ihre Website
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {auditTypes.map((audit, index) => (
                <motion.div
                  key={audit.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <Card className="border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all p-8">
                    <div className={cn(
                      "w-32 h-32 rounded-full bg-gradient-to-br mx-auto mb-6 flex items-center justify-center",
                      audit.badgeColor
                    )}>
                      <div className="text-center">
                        <Award className="h-12 w-12 text-white mx-auto mb-2" />
                        <div className="text-white font-bold text-sm">{audit.badge}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#232323] mb-2">{audit.name}</h3>
                    <p className="text-sm text-[#474747] mb-4">
                      Für Unternehmen mit {audit.id === 'self' ? 'Basis-' : audit.id === 'system' ? 'Standard-' : 'Premium-'}Compliance
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-[#474747]">
                      <Download className="h-4 w-4 text-[#e24e1b]" />
                      <span>SVG, PNG Format</span>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-[#232323] mb-2">
                    Siegel-Verifizierung auf marsstein.ai
                  </h3>
                  <p className="text-[#474747] text-sm leading-relaxed mb-4">
                    Jedes MARSSTEIN-Siegel ist mit einem einzigartigen Verifizierungslink versehen. Besucher Ihrer Website können
                    auf das Siegel klicken und werden zu einer offiziellen Zertifikatsseite auf marsstein.ai weitergeleitet.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <p className="text-xs font-mono text-gray-700 mb-2">Beispiel-URLs:</p>
                    <ul className="space-y-1 text-xs">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#667eea]" />
                        <Link
                          to="/dsgvo-audit/verified/demo-unternehmen"
                          className="text-[#e24e1b] hover:underline font-mono"
                        >
                          marsstein.ai/dsgvo-audit/verified/demo-unternehmen
                        </Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#e24e1b]" />
                        <Link
                          to="/dsgvo-audit/certified/demo-mittelstand"
                          className="text-[#e24e1b] hover:underline font-mono"
                        >
                          marsstein.ai/dsgvo-audit/certified/demo-mittelstand
                        </Link>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#003366]" />
                        <Link
                          to="/dsgvo-audit/excellence/demo-enterprise"
                          className="text-[#e24e1b] hover:underline font-mono"
                        >
                          marsstein.ai/dsgvo-audit/excellence/demo-enterprise
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <p className="text-[#474747] text-xs mt-4 leading-relaxed">
                    Auf der Verifizierungsseite werden alle Details des Audits angezeigt: Zertifikats-ID, Gültigkeitsdatum,
                    geprüfte Compliance-Bereiche und der verantwortliche Datenschutzbeauftrag te. Dies schafft maximales Vertrauen
                    bei Ihren Kunden und Geschäftspartnern.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-lg text-[#474747] max-w-3xl mx-auto">
                Alles, was Sie über DSGVO Audits wissen müssen
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className={cn(
                    "border-2 transition-all cursor-pointer",
                    expandedFaq === index ? "border-[#e24e1b] shadow-lg" : "border-gray-200 hover:border-[#e24e1b]/30"
                  )}
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold text-[#232323] flex-1">{faq.question}</h3>
                        <motion.div
                          animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className={cn(
                            "h-5 w-5 transition-colors",
                            expandedFaq === index ? "text-[#e24e1b]" : "text-[#474747]"
                          )} />
                        </motion.div>
                      </div>
                      <AnimatePresence>
                        {expandedFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p className="text-[#474747] mt-4 leading-relaxed">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="border-2 border-[#e24e1b]/30 bg-gradient-to-br from-white via-[#F5F6F8] to-white shadow-2xl overflow-hidden">
              <CardContent className="p-12">
                <Sparkles className="h-12 w-12 text-[#e24e1b] mx-auto mb-4 animate-pulse" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                  Bereit für Ihr DSGVO Audit?
                </h2>
                <p className="text-lg text-[#474747] mb-8 max-w-2xl mx-auto">
                  Starten Sie noch heute mit Ihrem Self-Assessment oder kontaktieren Sie uns für ein professionelles System-Audit
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/preise">
                    <Button size="lg" className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-bold">
                      <Target className="h-5 w-5 mr-2" />
                      Jetzt Audit starten
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white px-8 py-6 text-lg font-semibold">
                      <Users className="h-5 w-5 mr-2" />
                      Beratung anfragen
                    </Button>
                  </Link>
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

export default DsgvoAudit;
