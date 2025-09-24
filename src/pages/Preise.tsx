import React from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Preise: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "MARSSTEIN DSGVO-Compliance Software",
    "description": "KI-gestützte DSGVO-Compliance Software mit externem Datenschutzbeauftragten",
    "brand": {
      "@type": "Brand",
      "name": "MARSSTEIN"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "STARTER",
        "price": "69",
        "priceCurrency": "EUR",
        "priceValidUntil": "2025-12-31"
      },
      {
        "@type": "Offer",
        "name": "PROFESSIONAL",
        "price": "199",
        "priceCurrency": "EUR",
        "priceValidUntil": "2025-12-31"
      },
      {
        "@type": "Offer",
        "name": "ENTERPRISE",
        "price": "449",
        "priceCurrency": "EUR",
        "priceValidUntil": "2025-12-31"
      }
    ]
  };

  const packages = [
    {
      name: 'STARTER',
      price: '69',
      color: 'from-slate-500 to-slate-600',
      popular: false,
      features: {
        pflichtdokumente: {
          verarbeitungsverzeichnis: true,
          toms: true,
          loeschkonzept: true,
          handbuch: true,
          datenschutzerklaerungWebsite: '2',
          datenschutzerklaerungApp: '1',
          cookieBanner: true,
          avvVertraege: true,
          datenpannen: true,
          mitarbeiterVerpflichtungen: true,
          betroffenenrechte: true,
          emailSignaturen: true,
        },
        dsb: {
          externerDsb: false,
          haftung: false,
          zertifikat: false,
          hotline: false,
        },
        audit: {
          typ: 'Self-Assessment',
          frequenz: 'Jährlich',
          siegel: 'VERIFIED',
          eignung: 'Kleinaufträge',
        },
        ai: {
          anfragen: '100',
          allgemeineInfo: true,
          kenntUnternehmen: false,
          individuelleAnalyse: false,
          dokumentenPruefung: 'Basis',
        },
        monitoring: {
          complianceScore: true,
          aufgabenTracker: true,
          fristenmanagement: true,
          gesetzesaenderungen: true,
          automatischeUpdates: false,
          reports: 'Monatlich',
          exportFormate: 'PDF',
        },
        erweitert: {
          dsfa: '1/Jahr',
          vendorRisk: '10 Vendor',
          multiWebsite: '2',
          multiEntity: false,
          api: false,
          datenfluss: false,
          risikobewertung: 'Basis',
        },
        team: {
          benutzer: '2 Benutzer',
          rollen: 'Basis (3 Rollen)',
          aktivitaetsLog: '30 Tage',
          auditTrail: true,
        },
        security: {
          penetrationstest: false,
          sslMonitoring: 'Basis',
          phishingSimulation: '1x/Jahr',
          passwortLeak: 'Basis (5 Accounts)',
          emailBreach: '3 E-Mails',
          darkWeb: false,
          vulnerability: false,
          cookieScanner: 'Monatlich',
        },
        support: {
          email: true,
          telefon: false,
          reaktionszeit: '48h',
          priority: false,
          successManager: false,
          onboarding: 'Self-Service',
        },
        sprachen: {
          deutsch: true,
          englisch: false,
          weitere: false,
        },
      },
    },
    {
      name: 'PROFESSIONAL',
      price: '199',
      color: 'from-emerald-500 to-teal-500',
      popular: true,
      features: {
        pflichtdokumente: {
          verarbeitungsverzeichnis: true,
          toms: true,
          loeschkonzept: true,
          handbuch: true,
          datenschutzerklaerungWebsite: '10',
          datenschutzerklaerungApp: '5',
          cookieBanner: true,
          avvVertraege: true,
          datenpannen: true,
          mitarbeiterVerpflichtungen: true,
          betroffenenrechte: true,
          emailSignaturen: true,
        },
        dsb: {
          externerDsb: true,
          haftung: '€100.000',
          zertifikat: true,
          hotline: 'Geschäftszeiten',
        },
        audit: {
          typ: 'System-Audit',
          frequenz: 'Halbjährlich',
          siegel: 'CERTIFIED',
          eignung: 'Standard-Aufträge',
        },
        ai: {
          anfragen: '1.000',
          allgemeineInfo: true,
          kenntUnternehmen: true,
          individuelleAnalyse: true,
          dokumentenPruefung: 'Erweitert',
        },
        monitoring: {
          complianceScore: true,
          aufgabenTracker: true,
          fristenmanagement: true,
          gesetzesaenderungen: true,
          automatischeUpdates: true,
          reports: 'Wöchentlich',
          exportFormate: 'PDF, Excel',
        },
        erweitert: {
          dsfa: '6/Jahr',
          vendorRisk: '50 Vendor',
          multiWebsite: '10',
          multiEntity: false,
          api: true,
          datenfluss: true,
          risikobewertung: 'Erweitert',
        },
        team: {
          benutzer: '10 Benutzer',
          rollen: 'Standard (10 Rollen)',
          aktivitaetsLog: '90 Tage',
          auditTrail: true,
        },
        security: {
          penetrationstest: '1x/Jahr',
          sslMonitoring: 'Erweitert',
          phishingSimulation: 'Halbjährlich',
          passwortLeak: 'Erweitert (50 Accounts)',
          emailBreach: '25 E-Mails',
          darkWeb: 'Firmendaten',
          vulnerability: 'Monatlich',
          cookieScanner: 'Wöchentlich',
        },
        support: {
          email: true,
          telefon: true,
          reaktionszeit: '24h',
          priority: false,
          successManager: false,
          onboarding: '2h Assisted',
        },
        sprachen: {
          deutsch: true,
          englisch: true,
          weitere: false,
        },
      },
    },
    {
      name: 'ENTERPRISE',
      price: '449',
      color: 'from-blue-500 to-indigo-600',
      popular: false,
      features: {
        pflichtdokumente: {
          verarbeitungsverzeichnis: true,
          toms: true,
          loeschkonzept: true,
          handbuch: true,
          datenschutzerklaerungWebsite: 'Unbegrenzt',
          datenschutzerklaerungApp: 'Unbegrenzt',
          cookieBanner: true,
          avvVertraege: true,
          datenpannen: true,
          mitarbeiterVerpflichtungen: true,
          betroffenenrechte: true,
          emailSignaturen: true,
        },
        dsb: {
          externerDsb: true,
          haftung: '€250.000',
          zertifikat: true,
          hotline: '24/7',
        },
        audit: {
          typ: 'Voll-Audit',
          frequenz: 'Quartalsweise',
          siegel: 'EXCELLENCE',
          eignung: 'Alle inkl. kritisch',
        },
        ai: {
          anfragen: 'Unbegrenzt',
          allgemeineInfo: true,
          kenntUnternehmen: true,
          individuelleAnalyse: true,
          dokumentenPruefung: 'Premium',
        },
        monitoring: {
          complianceScore: true,
          aufgabenTracker: true,
          fristenmanagement: true,
          gesetzesaenderungen: true,
          automatischeUpdates: true,
          reports: 'Täglich',
          exportFormate: 'PDF, Excel, API',
        },
        erweitert: {
          dsfa: 'Unbegrenzt',
          vendorRisk: 'Unbegrenzt',
          multiWebsite: 'Unbegrenzt',
          multiEntity: true,
          api: true,
          datenfluss: true,
          risikobewertung: 'KI-gestützt',
        },
        team: {
          benutzer: 'Unbegrenzt',
          rollen: 'Custom (unbegrenzt)',
          aktivitaetsLog: 'Unbegrenzt',
          auditTrail: true,
        },
        security: {
          penetrationstest: '2x/Jahr',
          sslMonitoring: 'Premium',
          phishingSimulation: 'Quartalsweise',
          passwortLeak: 'Unlimited + Monitoring',
          emailBreach: 'Unbegrenzt',
          darkWeb: '+ Executive Protection',
          vulnerability: 'Wöchentlich',
          cookieScanner: 'Täglich',
        },
        support: {
          email: true,
          telefon: true,
          reaktionszeit: '4h',
          priority: true,
          successManager: true,
          onboarding: '8h Full-Service',
        },
        sprachen: {
          deutsch: true,
          englisch: true,
          weitere: '5 Sprachen',
        },
      },
    },
  ];

  const FeatureRow = ({ label, starter, professional, enterprise, section = '' }: any) => {
    const getValue = (value: any) => {
      if (value === true) return <Check className="h-5 w-5 text-emerald-400" />;
      if (value === false) return <X className="h-5 w-5 text-slate-500" />;
      return <span className="text-sm text-slate-300">{value}</span>;
    };

    return (
      <tr className={cn("border-b border-slate-700/50", section && "bg-slate-800/30")}>
        <td className={cn("px-6 py-4 text-sm text-slate-300", section && "font-semibold text-emerald-400")}>
          {label}
        </td>
        <td className="px-6 py-4 text-center">{getValue(starter)}</td>
        <td className="px-6 py-4 text-center bg-emerald-900/10">{getValue(professional)}</td>
        <td className="px-6 py-4 text-center">{getValue(enterprise)}</td>
      </tr>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <SEOHead
        title="Preise - MARSSTEIN DSGVO-Compliance Pakete"
        description="Transparente Preise für DSGVO-Compliance Software. Von €69 bis €449 monatlich. Mit externem Datenschutzbeauftragten und KI-Support."
        canonical="/preise"
        structuredData={structuredData}
      />
      <Header />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20"
            >
              <Zap className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-300">Transparente Preise</span>
              <Shield className="h-5 w-5 text-teal-400" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-black tracking-tight mb-8"
            >
              <span className="text-white">MARSSTEIN</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                DSGVO-Compliance
              </span>
              <br />
              <span className="text-white">Pakete</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Wählen Sie das passende Paket für Ihre <span className="font-semibold text-emerald-300">DSGVO-Compliance</span>.
              Monatlich kündbar, <span className="font-semibold text-teal-300">keine versteckten Kosten</span>.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      BELIEBT
                    </Badge>
                  </div>
                )}

                <Card className={cn(
                  "relative h-full border-2 transition-all duration-500",
                  pkg.popular
                    ? "border-emerald-500/50 shadow-2xl shadow-emerald-500/20"
                    : "border-slate-700/50"
                )}>
                  <div className={cn("absolute inset-0 rounded-lg bg-gradient-to-br", pkg.color, "opacity-10")} />

                  <CardContent className="relative p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                      <div className="flex items-baseline justify-center mb-4">
                        <span className="text-5xl font-black text-white">€{pkg.price}</span>
                        <span className="text-slate-400 ml-2">/Monat</span>
                      </div>
                      <p className="text-sm text-slate-400">monatlich kündbar</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-3">Highlights</h4>
                        <ul className="space-y-2">
                          {pkg.name === 'STARTER' && (
                            <>
                              <li className="flex items-center text-sm text-slate-300">
                                <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                                Alle DSGVO-Pflichtdokumente
                              </li>
                              <li className="flex items-center text-sm text-slate-300">
                                <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                                100 KI-Anfragen/Monat
                              </li>
                              <li className="flex items-center text-sm text-slate-300">
                                <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                                DSGVO-Siegel VERIFIED
                              </li>
                            </>
                          )}
                          {pkg.name === 'PROFESSIONAL' && (
                            <>
                              <li className="flex items-center text-sm text-slate-300">
                                <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                                Externer Datenschutzbeauftragter
                              </li>
                              <li className="flex items-center text-sm text-slate-300">
                                <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                                €100.000 DSB-Haftung
                              </li>
                              <li className="flex items-center text-sm text-slate-300">
                                <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                                1.000 KI-Anfragen/Monat
                              </li>
                              <li className="flex items-center text-sm text-slate-300">
                                <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                                API-Integration
                              </li>
                            </>
                          )}
                          {pkg.name === 'ENTERPRISE' && (
                            <>
                              <li className="flex items-center text-sm text-slate-300">
                                <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                                24/7 DSB-Hotline
                              </li>
                              <li className="flex items-center text-sm text-slate-300">
                                <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                                €250.000 DSB-Haftung
                              </li>
                              <li className="flex items-center text-sm text-slate-300">
                                <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                                Unbegrenzte KI-Anfragen
                              </li>
                              <li className="flex items-center text-sm text-slate-300">
                                <Check className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                                Dedizierter Success Manager
                              </li>
                            </>
                          )}
                        </ul>
                      </div>

                      <Button
                        className={cn(
                          "w-full font-semibold",
                          pkg.popular
                            ? "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                            : "bg-slate-700 hover:bg-slate-600 text-white"
                        )}
                      >
                        Paket wählen
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="overflow-x-auto rounded-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm"
          >
            <table className="w-full text-left">
              <thead className="border-b border-slate-700">
                <tr>
                  <th className="px-6 py-4 text-sm font-bold text-emerald-400">Features</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-white">STARTER</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-white bg-emerald-900/10">PROFESSIONAL</th>
                  <th className="px-6 py-4 text-center text-sm font-bold text-white">ENTERPRISE</th>
                </tr>
              </thead>
              <tbody>
                <FeatureRow label="── DSGVO-KERN ──" section={true} starter="" professional="" enterprise="" />

                <FeatureRow label="📋 PFLICHTDOKUMENTE" section={true} starter="" professional="" enterprise="" />
                <FeatureRow label="Verarbeitungsverzeichnis (Art. 30)" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="TOMs (Technische & Org. Maßnahmen)" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Löschkonzept" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Datenschutz-Handbuch" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Datenschutzerklärung Website" starter="2" professional="10" enterprise="Unbegrenzt" />
                <FeatureRow label="Datenschutzerklärung App" starter="1" professional="5" enterprise="Unbegrenzt" />
                <FeatureRow label="Cookie-Banner & Policy" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="AVV-Verträge" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Datenpannen-Management" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Mitarbeiter-Verpflichtungen" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Betroffenenrechte-Prozesse" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="DSGVO-konforme E-Mail-Signaturen" starter={true} professional={true} enterprise={true} />

                <FeatureRow label="👤 DATENSCHUTZBEAUFTRAGTER" section={true} starter="" professional="" enterprise="" />
                <FeatureRow label="Externer DSB" starter={false} professional={true} enterprise={true} />
                <FeatureRow label="DSB-Haftungsübernahme" starter={false} professional="€100.000" enterprise="€250.000" />
                <FeatureRow label="DSB-Zertifikat" starter={false} professional={true} enterprise={true} />
                <FeatureRow label="DSB-Hotline" starter={false} professional="Geschäftszeiten" enterprise="24/7" />

                <FeatureRow label="🏆 MARSSTEIN AUDIT & SIEGEL" section={true} starter="" professional="" enterprise="" />
                <FeatureRow label="Audit-Typ" starter="Self-Assessment" professional="System-Audit" enterprise="Voll-Audit" />
                <FeatureRow label="Audit-Frequenz" starter="Jährlich" professional="Halbjährlich" enterprise="Quartalsweise" />
                <FeatureRow label="DSGVO-Siegel" starter="✅ VERIFIED" professional="✅ CERTIFIED" enterprise="✅ EXCELLENCE" />
                <FeatureRow label="Eignung für Ausschreibungen" starter="Kleinaufträge" professional="Standard-Aufträge" enterprise="Alle inkl. kritisch" />

                <FeatureRow label="── INTELLIGENTE UNTERSTÜTZUNG ──" section={true} starter="" professional="" enterprise="" />

                <FeatureRow label="🤖 MARS-AI COMPLIANCE ASSISTANT" section={true} starter="" professional="" enterprise="" />
                <FeatureRow label="KI-Anfragen pro Monat" starter="100" professional="1.000" enterprise="Unbegrenzt" />
                <FeatureRow label="Allgemeine DSGVO-Informationen" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Kennt Ihre Unternehmensdaten" starter={false} professional={true} enterprise={true} />
                <FeatureRow label="Individuelle Compliance-Analyse" starter={false} professional={true} enterprise={true} />
                <FeatureRow label="Dokumenten-Prüfassistent" starter="Basis" professional="Erweitert" enterprise="Premium" />

                <FeatureRow label="📊 COMPLIANCE-MONITORING" section={true} starter="" professional="" enterprise="" />
                <FeatureRow label="Live Compliance-Score" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Aufgaben-Tracker" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Fristenmanagement" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Gesetzesänderungs-Alerts" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Automatische Policy-Updates" starter={false} professional={true} enterprise={true} />
                <FeatureRow label="Compliance-Reports" starter="Monatlich" professional="Wöchentlich" enterprise="Täglich" />
                <FeatureRow label="Export-Formate" starter="PDF" professional="PDF, Excel" enterprise="PDF, Excel, API" />

                <FeatureRow label="🔍 ERWEITERTE FEATURES" section={true} starter="" professional="" enterprise="" />
                <FeatureRow label="Datenschutz-Folgenabschätzung" starter="1/Jahr" professional="6/Jahr" enterprise="Unbegrenzt" />
                <FeatureRow label="Vendor Risk Management" starter="10 Vendor" professional="50 Vendor" enterprise="Unbegrenzt" />
                <FeatureRow label="Multi-Website Support" starter="2" professional="10" enterprise="Unbegrenzt" />
                <FeatureRow label="Multi-Entity Management" starter={false} professional={false} enterprise={true} />
                <FeatureRow label="API-Integration" starter={false} professional={true} enterprise={true} />
                <FeatureRow label="Datenfluss-Visualisierung" starter={false} professional={true} enterprise={true} />
                <FeatureRow label="Automatische Risikobewertung" starter="Basis" professional="Erweitert" enterprise="KI-gestützt" />

                <FeatureRow label="── ORGANISATION & SICHERHEIT ──" section={true} starter="" professional="" enterprise="" />

                <FeatureRow label="👥 TEAM & ZUGRIFFSVERWALTUNG" section={true} starter="" professional="" enterprise="" />
                <FeatureRow label="Benutzer-Accounts" starter="2 Benutzer" professional="10 Benutzer" enterprise="Unbegrenzt" />
                <FeatureRow label="Rollen-Management" starter="Basis (3 Rollen)" professional="Standard (10 Rollen)" enterprise="Custom (unbegrenzt)" />
                <FeatureRow label="Aktivitäts-Log" starter="30 Tage" professional="90 Tage" enterprise="Unbegrenzt" />
                <FeatureRow label="Audit-Trail" starter={true} professional={true} enterprise={true} />

                <FeatureRow label="🔒 SECURITY & MONITORING" section={true} starter="" professional="" enterprise="" />
                <FeatureRow label="Penetrationstest" starter={false} professional="1x/Jahr" enterprise="2x/Jahr" />
                <FeatureRow label="SSL/TLS-Überwachung" starter="Basis" professional="Erweitert" enterprise="Premium" />
                <FeatureRow label="Phishing-Simulation" starter="1x/Jahr" professional="Halbjährlich" enterprise="Quartalsweise" />
                <FeatureRow label="Passwort-Leak-Check" starter="Basis (5 Accounts)" professional="Erweitert (50 Accounts)" enterprise="Unlimited + Monitoring" />
                <FeatureRow label="Email Breach Monitor" starter="3 E-Mails" professional="25 E-Mails" enterprise="Unbegrenzt" />
                <FeatureRow label="Dark Web Monitoring" starter={false} professional="Firmendaten" enterprise="+ Executive Protection" />
                <FeatureRow label="Vulnerability Scan" starter={false} professional="Monatlich" enterprise="Wöchentlich" />
                <FeatureRow label="Cookie-Scanner" starter="Monatlich" professional="Wöchentlich" enterprise="Täglich" />

                <FeatureRow label="── SERVICE ──" section={true} starter="" professional="" enterprise="" />

                <FeatureRow label="💬 SUPPORT" section={true} starter="" professional="" enterprise="" />
                <FeatureRow label="E-Mail Support" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Telefon Support" starter={false} professional={true} enterprise={true} />
                <FeatureRow label="Reaktionszeit" starter="48h" professional="24h" enterprise="4h" />
                <FeatureRow label="Priority Support" starter={false} professional={false} enterprise={true} />
                <FeatureRow label="Dedizierter Success Manager" starter={false} professional={false} enterprise={true} />
                <FeatureRow label="Onboarding-Session" starter="Self-Service" professional="2h Assisted" enterprise="8h Full-Service" />

                <FeatureRow label="🌐 SPRACHEN" section={true} starter="" professional="" enterprise="" />
                <FeatureRow label="Deutsch" starter={true} professional={true} enterprise={true} />
                <FeatureRow label="Englisch" starter={false} professional={true} enterprise={true} />
                <FeatureRow label="Weitere EU-Sprachen" starter={false} professional={false} enterprise="5 Sprachen" />
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-emerald-900/20" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/30"
            >
              <Star className="h-5 w-5 text-emerald-400 animate-pulse" />
              <span className="text-sm font-bold text-emerald-300">NEU: KLEINUNTERNEHMER-SPECIAL 2025</span>
              <Star className="h-5 w-5 text-teal-400 animate-pulse" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                MARSSTEIN
              </span>
              <br />
              <span className="text-white">KLEINUNTERNEHMER-SPECIAL</span>
              <br />
              <span className="text-3xl md:text-5xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                2025
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-300 italic">
              "Datenschutz für alle - weil jedes Unternehmen Schutz verdient"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-30 animate-pulse" />

            <Card className="relative border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/20 bg-slate-900/90 backdrop-blur-sm">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 opacity-5" />

              <CardContent className="relative p-8 md:p-12">
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full text-white text-sm font-bold mb-4"
                  >
                    <Zap className="h-4 w-4" />
                    KLEIN-STARTER
                    <Zap className="h-4 w-4" />
                  </motion.div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Der absolute No-Brainer für Kleinunternehmen
                  </h3>

                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                      €29
                    </span>
                    <span className="text-xl text-slate-400 ml-2">/Monat</span>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                    <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 px-3 py-1">
                      Keine Einrichtungsgebühr
                    </Badge>
                    <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 px-3 py-1">
                      Monatlich kündbar
                    </Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-3 py-1">
                      Keine versteckten Kosten
                    </Badge>
                  </div>
                </div>

                <div className="border-t border-slate-700/50 pt-10">
                  <h4 className="text-xl font-bold text-white mb-8 flex items-center justify-center gap-2">
                    <Star className="h-5 w-5 text-emerald-400" />
                    WAS SIE BEKOMMEN:
                    <Star className="h-5 w-5 text-emerald-400" />
                  </h4>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        DSGVO-GRUNDSCHUTZ KOMPLETT
                      </h5>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Alle DSGVO-Pflichtdokumente fertig vorbereitet</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Datenschutzerklärung für Ihre Website (inkl. Updates)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Cookie-Banner rechtssicher & abmahnsicher</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Verarbeitungsverzeichnis (Art. 30 DSGVO)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">TOMs (Technische & Organisatorische Maßnahmen)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">AVV-Verträge für alle gängigen Dienstleister</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Mitarbeiter-Verpflichtungen als Vorlage</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-bold text-teal-400 mb-4 flex items-center gap-2">
                        <Zap className="h-5 w-5" />
                        MARSSTEIN KI-ASSISTENT
                      </h5>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">50 KI-Anfragen/Monat für Ihre DSGVO-Fragen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">24/7 verfügbar - immer eine Antwort parat</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">In einfacher Sprache - kein Juristendeutsch</span>
                        </li>
                      </ul>

                      <h5 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        COMPLIANCE-DASHBOARD
                      </h5>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Live Compliance-Score - Sehen Sie Ihren Status</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Einfache Checklisten - Schritt für Schritt</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Automatische Erinnerungen bei wichtigen Fristen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Gesetzesänderungs-Alerts - immer aktuell</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h5 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5" />
                        SICHERHEITS-BASICS
                      </h5>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">E-Mail Breach Check für 3 Firmen-E-Mails</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Passwort-Leak-Check für 3 Accounts</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Cookie-Scanner monatlich</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">SSL-Check Ihrer Website</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-bold text-teal-400 mb-4 flex items-center gap-2">
                        <Star className="h-5 w-5" />
                        MARSSTEIN-SIEGEL
                      </h5>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">"DSGVO-GESCHÜTZT" Siegel für Ihre Website</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Vertrauensbonus bei Ihren Kunden</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-300">Jährliches Basis-Audit inklusive</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-12 text-center"
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-12 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                    >
                      <Zap className="mr-2 h-6 w-6" />
                      Jetzt KLEIN-STARTER sichern
                    </Button>

                    <p className="mt-4 text-sm text-slate-400">
                      Keine Kreditkarte erforderlich • 14 Tage kostenlos testen • Jederzeit kündbar
                    </p>
                  </motion.div>
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

export default Preise;