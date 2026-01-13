import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check, X, Star, Shield, Zap, ChevronDown, ChevronRight,
  Sparkles, FileText, UserCheck, Award, Bot, BarChart3,
  Headphones, Heart, TrendingUp, Rocket, Target, Info, ArrowRight,
  Building2, Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { PackageFinder } from '@/components/PackageFinder';

const Preise: React.FC = () => {
  const [audienceType, setAudienceType] = useState<'unternehmen' | 'dsb'>('unternehmen');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['pflichtdokumente']);
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<'starter' | 'professional' | 'enterprise'>('professional');
  const [selectedSpecial, setSelectedSpecial] = useState<'kleinunternehmer' | 'neugruender' | 'gemeinnuetzig'>('kleinunternehmer');
  const [showPackageFinder, setShowPackageFinder] = useState(false);

  // Zielgruppen-spezifisches Messaging
  const audienceContent = {
    unternehmen: {
      badge: 'Für Unternehmen',
      headline: 'DSGVO-Compliance ohne eigenes Team',
      subheadline: 'Externer Datenschutzbeauftragter + Software in einem Paket',
      description: 'Wählen Sie das passende Paket für Ihre DSGVO-Compliance. Monatlich kündbar, keine versteckten Kosten.',
      packageFinderText: 'Finden Sie Ihr perfektes Paket in 60 Sekunden',
    },
    dsb: {
      badge: 'Für Datenschutzbeauftragte',
      headline: 'Ihre Expertise bleibt unersetzlich',
      subheadline: 'Die Routine-Arbeit verschwindet – automatisiert durch KI',
      description: 'Multi-Mandanten-Management, automatisierte Dokumentation und KI-Unterstützung für Ihre tägliche Arbeit.',
      packageFinderText: 'Finden Sie das richtige Tool für Ihre Mandanten',
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "MARSSTEIN DSGVO-Compliance Software",
    "description": "KI-gestützte DSGVO-Compliance Software mit externem Datenschutzbeauftragten",
    "brand": {
      "@type": "Brand",
      "name": "MARSSTEIN"
    },
    "offers": {
      "@type": "AggregateOffer",
      "offerCount": 3,
      "lowPrice": 69,
      "highPrice": 449,
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "priceValidUntil": "2025-12-31"
    }
  };

  const calculatePrice = (basePrice: string, cycle: 'monthly' | 'yearly') => {
    const price = parseInt(basePrice);
    if (cycle === 'yearly') {
      return Math.round(price * 0.8);
    }
    return price;
  };

  const calculateYearlySavings = (basePrice: string) => {
    const monthly = parseInt(basePrice);
    const yearlyMonthly = Math.round(monthly * 0.8);
    return (monthly - yearlyMonthly) * 12;
  };

  // Zielgruppen-spezifische Paket-Konfiguration
  const getPackages = (audience: 'unternehmen' | 'dsb') => {
    if (audience === 'unternehmen') {
      return [
        {
          name: 'STARTER',
          basePrice: '69',
          color: 'from-[#474747] to-[#232323]',
          popular: false,
          subtitle: 'Für kleine Unternehmen',
          features: {
            highlights: [
              'Alle DSGVO-Pflichtdokumente',
              'MARS-AI Compliance Chat',
              'DSGVO-Siegel VERIFIED',
              'E-Mail Support'
            ]
          },
          cta: 'Paket wählen',
          ctaLink: '/contact'
        },
        {
          name: 'PROFESSIONAL',
          basePrice: '199',
          color: 'from-[#e24e1b] to-[#ea580c]',
          popular: true,
          subtitle: 'Komplettpaket mit externem DSB',
          features: {
            highlights: [
              'Externer Datenschutzbeauftragter',
              'Lawyer-in-the-Loop',
              'Datenschutzmanagement Einrichtung',
              'Halbjährliche Audits'
            ]
          },
          cta: 'Jetzt DSB beauftragen',
          ctaLink: '/externer-datenschutzbeauftragter'
        },
        {
          name: 'ENTERPRISE',
          basePrice: '449',
          color: 'from-[#003366] to-[#1F1F24]',
          popular: false,
          subtitle: 'Für Konzerne & kritische Daten',
          features: {
            highlights: [
              '24/7 DSB-Hotline',
              'Multi-Standort Support',
              'Quartalsweise Voll-Audits',
              'Dedizierter Success Manager'
            ]
          },
          cta: 'Beratung anfragen',
          ctaLink: '/contact'
        }
      ];
    } else {
      // DSB-Perspektive
      return [
        {
          name: 'INTERN',
          basePrice: '49',
          color: 'from-[#474747] to-[#232323]',
          popular: false,
          subtitle: 'Für interne Datenschutzbeauftragte',
          features: {
            highlights: [
              '1 Unternehmen',
              'Automatisiertes ROPA/VVT',
              '200 KI-Anfragen/Monat',
              'DSAR-Management'
            ]
          },
          cta: 'Kostenlos testen',
          ctaLink: '/dsgvo-compliance-software'
        },
        {
          name: 'PROFESSIONAL',
          basePrice: '149',
          color: 'from-[#e24e1b] to-[#ea580c]',
          popular: true,
          subtitle: 'Für externe DSBs',
          features: {
            highlights: [
              'Bis zu 25 Mandanten',
              'Multi-Client Dashboard',
              '1.000 KI-Anfragen/Monat',
              'MARSSTEIN Netzwerk & Kundenvermittlung'
            ]
          },
          cta: 'Jetzt starten',
          ctaLink: '/dsgvo-compliance-software'
        },
        {
          name: 'AGENCY',
          basePrice: '349',
          color: 'from-[#003366] to-[#1F1F24]',
          popular: false,
          subtitle: 'Für DSB-Kanzleien',
          features: {
            highlights: [
              'Unbegrenzte Mandanten',
              'Team-Verwaltung',
              'Unbegrenzte KI-Anfragen',
              'Priorisierte Kundenvermittlung'
            ]
          },
          cta: 'Demo anfragen',
          ctaLink: '/contact'
        }
      ];
    }
  };

  const packages = getPackages(audienceType);

  const featureToLinkMap: Record<string, string> = {
    'Lawyer-in-the-Loop': '/features/human-in-the-loop',
    'Verarbeitungsverzeichnis (Art. 30)': '/features#verarbeitungsverzeichnis-ropa',
    'TOMs (Technische & Org. Maßnahmen)': '/features#avv-generator-tom-dokumentation',
    'Löschkonzept': '/wissen/leitfaden/loeschkonzept',
    'AVV-Verträge': '/features#avv-generator-tom-dokumentation',
    'Betroffenenrechte-Prozesse': '/features#betroffenenanfragen-dsar',
    'Externer DSB': '/externer-datenschutzbeauftragter',
    'DSB-Haftungsübernahme': '/externer-datenschutzbeauftragter',
    'DSB-Zertifikat': '/externer-datenschutzbeauftragter',
    'DSB-Hotline': '/externer-datenschutzbeauftragter',
    'MARS-AI COMPLIANCE AGENT': '/features',
    'Gesetzesänderungs-Alerts': '/features#automatische-compliance-updates',
    'Automatische Policy-Updates': '/features#automatische-compliance-updates'
  };

  // Feature-Kategorien für Unternehmen
  const featureCategoriesUnternehmen = [
    {
      id: 'pflichtdokumente',
      title: 'PFLICHTDOKUMENTE',
      icon: FileText,
      features: [
        { label: 'Lawyer-in-the-Loop', starter: false, professional: true, enterprise: true },
        { label: 'Verarbeitungsverzeichnis (Art. 30)', starter: true, professional: true, enterprise: true },
        { label: 'TOMs (Technische & Org. Maßnahmen)', starter: true, professional: true, enterprise: true },
        { label: 'Löschkonzept', starter: true, professional: true, enterprise: true },
        { label: 'Datenschutzerklärung Website', starter: '1', professional: '10', enterprise: 'Unbegrenzt' },
        { label: 'Datenschutzerklärung App', starter: '1', professional: '5', enterprise: 'Unbegrenzt' },
        { label: 'Cookie-Banner & Policy', starter: true, professional: true, enterprise: true },
        { label: 'AVV-Verträge', starter: true, professional: true, enterprise: true },
        { label: 'Datenpannen-Management', starter: true, professional: true, enterprise: true },
        { label: 'Mitarbeiter-Verpflichtungen', starter: true, professional: true, enterprise: true },
        { label: 'Betroffenenrechte-Prozesse', starter: true, professional: true, enterprise: true },
        { label: 'DSGVO-konforme E-Mail-Signaturen', starter: true, professional: true, enterprise: true },
        { label: 'DSFA', starter: false, professional: true, enterprise: true }
      ]
    },
    {
      id: 'dsb',
      title: 'DATENSCHUTZBEAUFTRAGTER (Optional)',
      icon: UserCheck,
      features: [
        { label: 'Externer DSB', starter: false, professional: true, enterprise: true },
        { label: 'Einrichtung des Datenschutzmanagement Systems', starter: false, professional: true, enterprise: true },
        { label: 'DSB-Haftungsübernahme', starter: false, professional: true, enterprise: true },
        { label: 'DSB-Zertifikat', starter: false, professional: true, enterprise: true }
      ]
    },
    {
      id: 'audit',
      title: 'MARSSTEIN AUDIT & SIEGEL',
      icon: Award,
      features: [
        { label: 'Audit-Typ', starter: 'Self-Assessment', professional: 'System-Audit', enterprise: 'Voll-Audit' },
        { label: 'Audit-Frequenz', starter: 'Jährlich', professional: 'Halbjährlich', enterprise: 'Quartalsweise' },
        { label: 'DSGVO-Siegel', starter: '✅ VERIFIED', professional: '✅ CERTIFIED', enterprise: '✅ EXCELLENCE' },
        { label: 'Eignung für Ausschreibungen', starter: 'Kleinaufträge', professional: 'Standard-Aufträge', enterprise: 'Alle inkl. kritisch' }
      ]
    },
    {
      id: 'ai',
      title: 'MARS-AI COMPLIANCE AGENT',
      icon: Bot,
      features: [
        { label: 'Allgemeine DSGVO-Informationen', starter: true, professional: true, enterprise: true },
        { label: 'Kennt Ihre Unternehmensdaten', starter: false, professional: true, enterprise: true },
        { label: 'Individuelle Compliance-Analyse', starter: false, professional: true, enterprise: true },
        { label: 'Multi-Standort Support', starter: false, professional: true, enterprise: true },
        { label: 'Persönliche Workflows', starter: false, professional: true, enterprise: true },
        { label: 'MCP', starter: false, professional: false, enterprise: true },
        { label: 'API Zugang', starter: false, professional: false, enterprise: true }
      ]
    },
    {
      id: 'monitoring',
      title: 'COMPLIANCE-MONITORING',
      icon: BarChart3,
      features: [
        { label: 'Live Compliance-Score', starter: true, professional: true, enterprise: true },
        { label: 'Aufgaben-Tracker', starter: true, professional: true, enterprise: true },
        { label: 'Fristenmanagement', starter: true, professional: true, enterprise: true },
        { label: 'Gesetzesänderungs-Alerts', starter: true, professional: true, enterprise: true },
        { label: 'Automatische Policy-Updates', starter: false, professional: true, enterprise: true },
        { label: 'Compliance-Reports', starter: 'Monatlich', professional: 'Wöchentlich', enterprise: 'Täglich' },
        { label: 'Export-Formate', starter: 'PDF', professional: 'PDF, Excel', enterprise: 'PDF, Excel, API' },
        { label: 'E-Mail Integration', starter: false, professional: true, enterprise: true }
      ]
    },
    {
      id: 'support',
      title: 'SUPPORT',
      icon: Headphones,
      features: [
        { label: 'E-Mail Support', starter: true, professional: true, enterprise: true },
        { label: 'Telefon Support', starter: false, professional: true, enterprise: true },
        { label: 'Reaktionszeit', starter: '48h', professional: '24h', enterprise: '4h' },
        { label: 'Priority Support', starter: false, professional: false, enterprise: true },
        { label: 'Dedizierter Success Manager', starter: false, professional: false, enterprise: true },
        { label: 'Onboarding-Session', starter: 'Self-Service', professional: 'Begleitet', enterprise: 'Begleitet' }
      ]
    }
  ];

  // Feature-Kategorien für Datenschutzbeauftragte
  const featureCategoriesDSB = [
    {
      id: 'mandanten',
      title: 'UNTERNEHMEN & MANDANTEN',
      icon: Users,
      features: [
        { label: 'Unternehmen / Mandanten', starter: '1 Unternehmen', professional: 'Bis zu 25', enterprise: 'Unbegrenzt' },
        { label: 'Zentrales Dashboard', starter: true, professional: true, enterprise: true },
        { label: 'Multi-Client Übersicht', starter: false, professional: true, enterprise: true },
        { label: 'Getrennte Dokumentation', starter: true, professional: true, enterprise: true },
        { label: 'Mandanten-übergreifende Suche', starter: false, professional: true, enterprise: true },
        { label: 'White-Label Reports', starter: false, professional: true, enterprise: true },
        { label: 'Team-Mitglieder', starter: '1', professional: '3', enterprise: 'Unbegrenzt' }
      ]
    },
    {
      id: 'dokumentation',
      title: 'AUTOMATISIERTE DOKUMENTATION',
      icon: FileText,
      features: [
        { label: 'Verarbeitungsverzeichnis (ROPA/VVT)', starter: true, professional: true, enterprise: true },
        { label: 'Automatische Vorbefüllung', starter: true, professional: true, enterprise: true },
        { label: 'TOM-Dokumentation', starter: true, professional: true, enterprise: true },
        { label: 'AVV-Generator', starter: true, professional: true, enterprise: true },
        { label: 'DSFA-Modul mit Risiko-Scoring', starter: false, professional: true, enterprise: true },
        { label: 'Löschkonzept-Generator', starter: false, professional: true, enterprise: true },
        { label: 'Custom Templates', starter: false, professional: false, enterprise: true },
        { label: 'Persönliche Workflows', starter: false, professional: true, enterprise: true }
      ]
    },
    {
      id: 'betroffene',
      title: 'BETROFFENENANFRAGEN (DSAR)',
      icon: UserCheck,
      features: [
        { label: 'DSAR-Management', starter: true, professional: true, enterprise: true },
        { label: 'Automatisches Fristenmanagement', starter: true, professional: true, enterprise: true },
        { label: 'Antwort-Vorlagen Art. 15-22', starter: true, professional: true, enterprise: true },
        { label: 'E-Mail-Integration', starter: false, professional: true, enterprise: true },
        { label: 'Automatische Benachrichtigungen', starter: false, professional: true, enterprise: true },
        { label: 'Audit-Trail', starter: false, professional: true, enterprise: true }
      ]
    },
    {
      id: 'ai',
      title: 'KI-UNTERSTÜTZUNG',
      icon: Bot,
      features: [
        { label: 'KI-Anfragen pro Monat', starter: '200', professional: '1.000', enterprise: 'Unbegrenzt' },
        { label: 'DSGVO-Recherche', starter: true, professional: true, enterprise: true },
        { label: 'Mandanten-Kontext', starter: false, professional: true, enterprise: true },
        { label: 'Dokument-Analyse', starter: false, professional: true, enterprise: true },
        { label: 'Gesetzesänderungs-Alerts', starter: true, professional: true, enterprise: true },
        { label: 'API-Zugang', starter: false, professional: false, enterprise: true }
      ]
    },
    {
      id: 'netzwerk',
      title: 'MARSSTEIN NETZWERK',
      icon: Users,
      features: [
        { label: 'Experten-Verzeichnis Listung', starter: false, professional: true, enterprise: true },
        { label: 'Human-in-the-Loop Aufträge', starter: false, professional: true, enterprise: true },
        { label: 'Neue Mandanten über DSB-Verzeichnis', starter: false, professional: true, enterprise: true },
        { label: 'Priorisierte Vermittlung', starter: false, professional: false, enterprise: true },
        { label: 'Branchenspezifisches Matching', starter: false, professional: true, enterprise: true },
        { label: 'Netzwerk-Events & Webinare', starter: false, professional: true, enterprise: true }
      ]
    },
    {
      id: 'support',
      title: 'SUPPORT & ONBOARDING',
      icon: Headphones,
      features: [
        { label: 'E-Mail Support', starter: true, professional: true, enterprise: true },
        { label: 'Telefon Support', starter: false, professional: true, enterprise: true },
        { label: 'Reaktionszeit', starter: '48h', professional: '24h', enterprise: '4h' },
        { label: 'Onboarding-Session', starter: 'Self-Service', professional: '1h Call', enterprise: 'Dedicated Setup' },
        { label: 'Daten-Migration', starter: false, professional: 'Assisted', enterprise: 'Full-Service' }
      ]
    }
  ];

  // Dynamische Feature-Kategorien basierend auf Zielgruppe
  const featureCategories = audienceType === 'unternehmen' ? featureCategoriesUnternehmen : featureCategoriesDSB;

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };


  const shouldShowFeature = (feature: any) => {
    if (!showOnlyDifferences) return true;
    return feature.starter !== feature.professional ||
           feature.professional !== feature.enterprise;
  };

  const getValue = (value: any, featureLabel?: string) => {
    if (value === true) return <Check className="h-5 w-5 text-[#39B37B] mx-auto" />;
    if (value === false) return <X className="h-4 w-4 text-gray-300 mx-auto" />;

    if (featureLabel === 'DSGVO-Siegel') {
      const sealLinks: Record<string, string> = {
        '✅ VERIFIED': '/dsgvo-audit/verified/demo-unternehmen',
        '✅ CERTIFIED': '/dsgvo-audit/certified/demo-mittelstand',
        '✅ EXCELLENCE': '/dsgvo-audit/excellence/demo-enterprise'
      };

      const link = sealLinks[value];
      if (link) {
        return (
          <Link to={link} className="text-sm font-medium text-[#e24e1b] hover:underline inline-flex items-center gap-1">
            {value}
          </Link>
        );
      }
    }

    return <span className="text-sm font-medium text-[#232323]">{value}</span>;
  };

  const getMobileValue = (value: any, featureLabel?: string) => {
    if (featureLabel === 'DSGVO-Siegel' && typeof value === 'string') {
      const sealLinks: Record<string, string> = {
        '✅ VERIFIED': '/dsgvo-audit/verified/demo-unternehmen',
        '✅ CERTIFIED': '/dsgvo-audit/certified/demo-mittelstand',
        '✅ EXCELLENCE': '/dsgvo-audit/excellence/demo-enterprise'
      };

      const link = sealLinks[value];
      if (link) {
        return (
          <Link to={link} className="text-[9px] font-medium text-[#e24e1b] hover:underline leading-[1.2] break-words px-0.5">
            {value}
          </Link>
        );
      }
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      <SEOHead
        title="Preise - MARSSTEIN DSGVO-Compliance Pakete"
        description="Transparente Preise für DSGVO-Compliance Software. Von €69 bis €449 monatlich. Mit externem Datenschutzbeauftragten und KI-Support."
        canonical="/preise"
        structuredData={structuredData}
      />
      <Header />

      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Zielgruppen-Toggle */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-sm text-[#474747] mb-3 font-medium">Ich bin...</p>
              <div className="inline-flex bg-white/80 backdrop-blur-md rounded-2xl p-1.5 border-2 border-[#e24e1b]/20 shadow-xl">
                <button
                  onClick={() => setAudienceType('unternehmen')}
                  className={cn(
                    "flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 font-medium",
                    audienceType === 'unternehmen'
                      ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg"
                      : "text-[#474747] hover:text-[#232323] hover:bg-gray-100"
                  )}
                >
                  <Building2 className="h-5 w-5" />
                  <span className="hidden sm:inline">Unternehmen</span>
                  <span className="sm:hidden">Firma</span>
                </button>
                <button
                  onClick={() => setAudienceType('dsb')}
                  className={cn(
                    "flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 font-medium",
                    audienceType === 'dsb'
                      ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg"
                      : "text-[#474747] hover:text-[#232323] hover:bg-gray-100"
                  )}
                >
                  <Users className="h-5 w-5" />
                  <span className="hidden sm:inline">Datenschutzbeauftragter</span>
                  <span className="sm:hidden">DSB</span>
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 backdrop-blur-sm rounded-full mb-8 border border-[#e24e1b]/20"
            >
              <Sparkles className="h-5 w-5 text-[#e24e1b] animate-pulse" />
              <span className="text-sm font-semibold text-[#e24e1b]">{audienceContent[audienceType].badge}</span>
              <Shield className="h-5 w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={audienceType}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <motion.h1
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#232323] bg-clip-text text-transparent bg-300% animate-gradient"
                >
                  {audienceContent[audienceType].headline}
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-[#e24e1b] font-semibold max-w-3xl mx-auto mb-4"
                >
                  {audienceContent[audienceType].subheadline}
                </motion.p>

                <motion.p
                  className="text-lg md:text-xl text-[#474747] max-w-4xl mx-auto leading-relaxed mb-8"
                >
                  {audienceContent[audienceType].description}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="inline-flex items-start gap-3 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 max-w-2xl mx-auto mb-8"
            >
              <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div className="text-left">
                <p className="text-sm text-blue-900 dark:text-blue-100 font-semibold mb-1">
                  Early Bird Launch
                </p>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  Sichern Sie sich jetzt den Early Bird Preis. Kontaktieren Sie uns für ein individuelles Angebot.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8"
            >
              <Button
                onClick={() => setShowPackageFinder(!showPackageFinder)}
                size="lg"
                className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-bold group"
              >
                <Target className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform duration-300" />
                {showPackageFinder ? 'Alle Pakete anzeigen' : audienceContent[audienceType].packageFinderText}
                <Sparkles className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </motion.div>
          </motion.div>

          <AnimatePresence mode="wait">
            {showPackageFinder ? (
              <motion.div
                key="finder"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
                className="mb-20"
              >
                <PackageFinder />
              </motion.div>
            ) : (
              <motion.div
                key="packages"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-16 gap-4 relative"
                >
            <div className="bg-white/80 backdrop-blur-md rounded-full p-1 border-2 border-[#e24e1b]/20 shadow-xl">
              <div className="flex items-center gap-2 sm:gap-4">
                <button
                  onClick={() => setBillingCycle('monthly')}
                  className={cn(
                    "px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 font-medium text-sm sm:text-base",
                    billingCycle === 'monthly'
                      ? "bg-[#e24e1b] text-white shadow-lg"
                      : "text-[#474747] hover:text-[#232323]"
                  )}
                >
                  Monatlich
                </button>
                <button
                  onClick={() => setBillingCycle('yearly')}
                  className={cn(
                    "px-6 py-3 rounded-full transition-all duration-300 font-medium relative",
                    billingCycle === 'yearly'
                      ? "bg-[#e24e1b] text-white shadow-lg"
                      : "text-[#474747] hover:text-[#232323]"
                  )}
                >
                  Jährlich
                  <Badge className={cn(
                    "absolute -top-3 -right-3 bg-[#39B37B] text-white border-0",
                    billingCycle === 'yearly' && "animate-bounce"
                  )}>
                    -20%
                  </Badge>
                </button>
              </div>
            </div>
            {billingCycle === 'yearly' && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[#39B37B] font-semibold text-sm sm:text-base"
              >
                <Sparkles className="inline-block h-4 w-4 mr-1" />
                2 Monate gratis!
              </motion.div>
            )}
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white px-4 py-1 border-0 shadow-lg">
                      <Star className="h-4 w-4 mr-1 animate-pulse" />
                      BELIEBT
                    </Badge>
                  </div>
                )}

                <Card className={cn(
                  "relative h-full border-2 transition-all duration-500 overflow-hidden",
                  pkg.popular
                    ? "border-[#e24e1b] shadow-xl scale-105"
                    : "border-gray-200 hover:border-[#e24e1b]/50"
                )}>

                  <CardContent className="relative p-4 sm:p-6 lg:p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold text-[#232323] mb-1">{pkg.name}</h3>
                      {'subtitle' in pkg && (
                        <p className="text-sm text-[#474747] mb-3">{pkg.subtitle}</p>
                      )}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={billingCycle}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-baseline justify-center mb-4"
                        >
                          {(pkg.name === 'ENTERPRISE' || pkg.name === 'AGENCY') && (
                            <span className="text-lg text-[#474747] mr-1">ab</span>
                          )}
                          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#232323]">
                            €{calculatePrice(pkg.basePrice, billingCycle)}
                          </span>
                          <span className="text-[#232323] ml-2">/Monat</span>
                        </motion.div>
                      </AnimatePresence>
                      <p className="text-sm text-[#232323]">
                        {billingCycle === 'yearly'
                          ? `Sie sparen €${calculateYearlySavings(pkg.basePrice)}/Jahr`
                          : 'monatlich kündbar'
                        }
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xs font-bold text-[#e24e1b] uppercase tracking-wider mb-3 flex items-center">
                          <Sparkles className="h-3 w-3 mr-1" />
                          Highlights
                        </h4>
                        <ul className="space-y-2">
                          {pkg.features.highlights.map((feature, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + idx * 0.1 }}
                              className="flex items-center text-sm text-[#232323]"
                            >
                              <Check className="h-4 w-4 text-[#39B37B] mr-2 flex-shrink-0" />
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        className={cn(
                          "w-full font-medium group/btn relative overflow-hidden",
                          pkg.popular
                            ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl"
                            : "bg-white border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white"
                        )}
                        asChild
                      >
                        <Link to={'ctaLink' in pkg ? pkg.ctaLink : '/contact'}>
                          <span className="relative z-10">{'cta' in pkg ? pkg.cta : 'Paket wählen'}</span>
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                        </Link>
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
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="relative -mx-4 sm:mx-0"
                >
            <div className="sm:hidden sticky top-0 z-30 bg-white border-b-2 border-gray-200 shadow-md">
              <div className="flex gap-1 p-2 bg-gray-50">
                {packages.map((pkg) => (
                  <div
                    key={pkg.name}
                    className={cn(
                      "flex-1 text-center py-2",
                      pkg.popular && "bg-[#e24e1b]/10 rounded-lg relative"
                    )}
                  >
                    {pkg.popular && (
                      <Star className="h-3 w-3 absolute top-1 right-1 text-[#e24e1b]" />
                    )}
                    <div className={cn(
                      "text-[10px] font-bold",
                      pkg.popular ? "text-[#e24e1b]" : "text-[#474747]"
                    )}>
                      {pkg.name.substring(0, 3).toUpperCase()}
                    </div>
                    <div className="text-xs text-[#232323] font-semibold">
                      €{calculatePrice(pkg.basePrice, billingCycle)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative bg-white sm:rounded-2xl border-t sm:border border-gray-200 shadow-lg">
              <div className="p-4 sm:p-6 border-b border-gray-200 hidden sm:block">
                <h2 className="text-lg sm:text-2xl font-bold text-[#232323]">
                  Detaillierte Feature-Übersicht
                </h2>
              </div>

              {/* Desktop Table View */}
              <div className="hidden sm:block overflow-x-auto">
                <table className="w-full">
                  <thead className="border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-[#e24e1b]">Features</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-[#232323]">STARTER</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-[#232323] bg-[#e24e1b]/5">PROFESSIONAL</th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-[#232323]">ENTERPRISE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featureCategories.map((category) => {
                      const isExpanded = expandedCategories.includes(category.id);
                      const filteredFeatures = category.features.filter(shouldShowFeature);

                      return (
                        <React.Fragment key={category.id}>
                          <tr
                            className="border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors"
                            onClick={() => toggleCategory(category.id)}
                          >
                            <td className="px-6 py-4 font-semibold text-[#232323] flex items-center gap-2">
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="h-5 w-5 text-[#474747]" />
                              </motion.div>
                              <category.icon className="h-5 w-5 text-[#e24e1b]" />
                              <span>{category.title}</span>
                              {filteredFeatures.length > 0 && (
                                <Badge className="ml-auto bg-gray-100 text-[#474747] border-0">
                                  {filteredFeatures.length}
                                </Badge>
                              )}
                            </td>
                            <td colSpan={3} />
                          </tr>
                          <AnimatePresence>
                            {isExpanded && filteredFeatures.map((feature, idx) => (
                              <motion.tr
                                key={feature.label}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                              >
                                <td className="px-12 py-3 text-sm font-medium text-[#232323]">
                                  {featureToLinkMap[feature.label] ? (
                                    <Link
                                      to={featureToLinkMap[feature.label]}
                                      className="text-[#e24e1b] hover:text-[#ea580c] hover:underline transition-colors"
                                    >
                                      {feature.label}
                                    </Link>
                                  ) : (
                                    feature.label
                                  )}
                                </td>
                                <td className="px-6 py-3 text-center">{getValue(feature.starter, feature.label)}</td>
                                <td className="px-6 py-3 text-center bg-gray-50/50">{getValue(feature.professional, feature.label)}</td>
                                <td className="px-6 py-3 text-center">{getValue(feature.enterprise, feature.label)}</td>
                              </motion.tr>
                            ))}
                          </AnimatePresence>
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card View */}
              <div className="sm:hidden">
                <div className="space-y-2 p-2">
                  {featureCategories.map((category) => {
                    const isExpanded = expandedCategories.includes(category.id);
                    const filteredFeatures = category.features.filter(shouldShowFeature);

                    return (
                      <div key={category.id} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleCategory(category.id)}
                          className="w-full px-3 py-2 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center gap-1.5">
                            <category.icon className="h-4 w-4 text-[#e24e1b] flex-shrink-0" />
                            <span className="font-semibold text-[10px] text-[#232323] text-left leading-tight">{category.title}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Badge className="bg-gray-100 text-[#474747] border-0 text-[9px] px-1.5 py-0.5">
                              {filteredFeatures.length}
                            </Badge>
                            <motion.div
                              animate={{ rotate: isExpanded ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="h-4 w-4 text-[#474747]" />
                            </motion.div>
                          </div>
                        </button>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="bg-white">
                                {filteredFeatures.map((feature, idx) => (
                                  <motion.div
                                    key={idx}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: idx * 0.02 }}
                                    className="border-b border-gray-100 last:border-0 px-2 py-2"
                                  >
                                    <div className="text-[10px] font-medium text-[#232323] mb-1.5 leading-tight">
                                      {featureToLinkMap[feature.label] ? (
                                        <Link
                                          to={featureToLinkMap[feature.label]}
                                          className="text-[#e24e1b] hover:text-[#ea580c] hover:underline transition-colors"
                                        >
                                          {feature.label}
                                        </Link>
                                      ) : (
                                        feature.label
                                      )}
                                    </div>
                                    <div className="grid grid-cols-3 gap-0.5">
                                      <div className="text-center p-1.5 bg-gray-50 rounded flex items-center justify-center min-h-[28px]">
                                        {feature.starter === true && <Check className="h-4 w-4 text-[#39B37B]" />}
                                        {feature.starter === false && <X className="h-3 w-3 text-gray-300" />}
                                        {typeof feature.starter === 'string' && (
                                          getMobileValue(feature.starter, feature.label) ||
                                          <span className="text-[9px] font-medium text-[#232323] leading-[1.2] break-words px-0.5">{feature.starter}</span>
                                        )}
                                      </div>
                                      <div className="text-center p-1.5 bg-[#e24e1b]/5 rounded border border-[#e24e1b]/20 flex items-center justify-center min-h-[28px]">
                                        {feature.professional === true && <Check className="h-4 w-4 text-[#39B37B]" />}
                                        {feature.professional === false && <X className="h-3 w-3 text-gray-300" />}
                                        {typeof feature.professional === 'string' && (
                                          getMobileValue(feature.professional, feature.label) ||
                                          <span className="text-[9px] font-medium text-[#232323] leading-[1.2] break-words px-0.5">{feature.professional}</span>
                                        )}
                                      </div>
                                      <div className="text-center p-1.5 bg-gray-50 rounded flex items-center justify-center min-h-[28px]">
                                        {feature.enterprise === true && <Check className="h-4 w-4 text-[#39B37B]" />}
                                        {feature.enterprise === false && <X className="h-3 w-3 text-gray-300" />}
                                        {typeof feature.enterprise === 'string' && (
                                          getMobileValue(feature.enterprise, feature.label) ||
                                          <span className="text-[9px] font-medium text-[#232323] leading-[1.2] break-words px-0.5">{feature.enterprise}</span>
                                        )}
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12 pb-8"
        >
          <Link to="/features">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white transition-all duration-300 px-8 py-6 text-lg font-semibold group"
            >
              <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Alle Features im Detail entdecken
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-3">
            Erfahren Sie mehr über ROPA, DSFA, DSAR-Management und weitere Module
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-12 mb-8"
        >
          <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-600 rounded-lg">
                <UserCheck className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Warum brauche ich einen Datenschutzbeauftragten?
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ab <strong>20 Mitarbeitern</strong>, die mit personenbezogenen Daten arbeiten, benötigen Sie nach DSGVO einen Datenschutzbeauftragten. Ein externer DSB bietet Ihnen <strong>unabhängige Beratung</strong>, überwacht Ihre DSGVO-Compliance und ist direkter Ansprechpartner bei Behördenanfragen – ohne die Kosten und den Kündigungsschutz eines internen Mitarbeiters.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/wissen/leitfaden/datenschutzbeauftragter" className="text-sm">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                      <FileText className="mr-2 h-4 w-4" />
                      Mehr über DSB-Pflichten & Aufgaben
                    </Button>
                  </Link>
                  <Link to="/externer-datenschutzbeauftragter" className="text-sm">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Jetzt externen DSB beauftragen
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Specials-Sektion nur für Unternehmen anzeigen */}
      {audienceType === 'unternehmen' && (
      <section className="relative py-12 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#F5F6F8] via-white to-[#F5F6F8]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#e24e1b]/5 to-transparent pointer-events-none" />

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
              className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 backdrop-blur-xl rounded-full mb-4 sm:mb-8 border border-[#e24e1b]/20 shadow-lg"
            >
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-[#e24e1b] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold text-[#e24e1b]">NEU: MARSSTEIN SPECIALS 2025</span>
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap items-center justify-center mb-8 gap-3"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-full p-1 border-2 border-[#e24e1b]/20 shadow-xl">
                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    onClick={() => setSelectedSpecial('kleinunternehmer')}
                    className={cn(
                      "px-3 sm:px-5 py-2 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm flex items-center gap-1.5",
                      selectedSpecial === 'kleinunternehmer'
                        ? "bg-[#e24e1b] text-white shadow-lg"
                        : "text-[#474747] hover:text-[#232323]"
                    )}
                  >
                    <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Kleinunternehmer</span>
                    <span className="sm:hidden">Klein</span>
                  </button>
                  <button
                    onClick={() => setSelectedSpecial('neugruender')}
                    className={cn(
                      "px-3 sm:px-5 py-2 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm flex items-center gap-1.5",
                      selectedSpecial === 'neugruender'
                        ? "bg-[#e24e1b] text-white shadow-lg"
                        : "text-[#474747] hover:text-[#232323]"
                    )}
                  >
                    <Rocket className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Neugründer</span>
                    <span className="sm:hidden">Neu</span>
                  </button>
                  <button
                    onClick={() => setSelectedSpecial('gemeinnuetzig')}
                    className={cn(
                      "px-3 sm:px-5 py-2 rounded-full transition-all duration-300 font-medium text-xs sm:text-sm flex items-center gap-1.5",
                      selectedSpecial === 'gemeinnuetzig'
                        ? "bg-[#e24e1b] text-white shadow-lg"
                        : "text-[#474747] hover:text-[#232323]"
                    )}
                  >
                    <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Gemeinnützig</span>
                    <span className="sm:hidden">NGO</span>
                  </button>
                </div>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedSpecial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#e24e1b] via-[#232323] to-[#e24e1b] bg-clip-text text-transparent bg-300% animate-gradient">
                  MARSSTEIN
                  <br className="sm:hidden" />
                  <span className="text-xl sm:text-4xl md:text-6xl">
                    {selectedSpecial === 'kleinunternehmer' && 'KLEINUNTERNEHMER-SPECIAL'}
                    {selectedSpecial === 'neugruender' && 'NEUGRÜNDER-SPECIAL'}
                    {selectedSpecial === 'gemeinnuetzig' && 'GEMEINNÜTZIG-SPECIAL'}
                  </span>
                  <br />
                  2025
                </h2>

                <p className="text-base sm:text-xl md:text-2xl text-[#474747] italic px-4 sm:px-0">
                  {selectedSpecial === 'kleinunternehmer' && '"Datenschutz für alle - weil jedes Unternehmen Schutz verdient"'}
                  {selectedSpecial === 'neugruender' && '"Wir waren auch mal jung - Profi-Schutz zum Gründerpreis"'}
                  {selectedSpecial === 'gemeinnuetzig' && '"Gemeinsam Gutes tun - Vollschutz zum Selbstkostenpreis"'}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedSpecial}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#e24e1b] via-[#ea580c] to-[#e24e1b] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-pulse" />

              <Card className="relative border-2 border-[#e24e1b]/50 shadow-2xl bg-white/95 backdrop-blur-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#e24e1b]/5 via-transparent to-[#003366]/5 pointer-events-none" />

                <CardContent className="relative p-4 sm:p-8 md:p-12">
                  {selectedSpecial === 'kleinunternehmer' && (
                    <>
                      <div className="text-center mb-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-full text-white text-sm font-bold mb-4 shadow-lg"
                        >
                          <Zap className="h-4 w-4 animate-pulse" />
                          KLEIN-STARTER
                          <Zap className="h-4 w-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </motion.div>

                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#232323] mb-3">
                          Der absolute No-Brainer für Kleinunternehmen
                        </h3>

                        <div className="flex items-baseline justify-center mb-4">
                          <span className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#e24e1b] to-[#ea580c] bg-clip-text text-transparent">
                            €29
                          </span>
                          <span className="text-xl text-[#232323] ml-2">/Monat</span>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                          <span className="text-[#232323]">✓ Keine Einrichtungsgebühr</span>
                          <span className="text-[#232323]">✓ Monatlich kündbar</span>
                          <span className="text-[#232323]">✓ Keine versteckten Kosten</span>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedSpecial === 'neugruender' && (
                    <>
                      <div className="text-center mb-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-full text-white text-sm font-bold mb-4 shadow-lg"
                        >
                          <Rocket className="h-4 w-4 animate-pulse" />
                          NEUGRÜNDER-PROFESSIONAL
                          <Rocket className="h-4 w-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </motion.div>

                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#232323] mb-3">
                          Das €199 PROFESSIONAL-Paket zum halben Preis
                        </h3>

                        <div className="flex items-baseline justify-center mb-4">
                          <span className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#e24e1b] to-[#ea580c] bg-clip-text text-transparent">
                            €99
                          </span>
                          <span className="text-xl text-[#232323] ml-2">/Monat</span>
                          <span className="text-sm text-[#474747] ml-2">für 2 Jahre</span>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm mb-4">
                          <span className="text-[#232323]">✓ 50% Gründerrabatt</span>
                          <span className="text-[#232323]">✓ Monatlich kündbar</span>
                          <span className="text-[#232323]">✓ Externer DSB inklusive</span>
                        </div>

                        <div className="bg-[#e24e1b]/10 rounded-lg p-4 border border-[#e24e1b]/20">
                          <p className="text-sm text-[#232323] font-semibold">
                            💪 UNSERE PHILOSOPHIE:
                          </p>
                          <p className="text-xs sm:text-sm text-[#474747] mt-2">
                            "Die ersten zwei Jahre entscheiden über Erfolg oder Scheitern. Datenschutz-Abmahnungen gehören nicht zu den Herausforderungen, mit denen sich junge Unternehmen beschäftigen sollten. Wir übernehmen das - Sie konzentrieren sich aufs Wachstum."
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedSpecial === 'gemeinnuetzig' && (
                    <>
                      <div className="text-center mb-10">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-full text-white text-sm font-bold mb-4 shadow-lg"
                        >
                          <Heart className="h-4 w-4 animate-pulse" />
                          GEMEINNÜTZIG-STARTER
                          <Heart className="h-4 w-4 animate-pulse" style={{ animationDelay: '0.5s' }} />
                        </motion.div>

                        <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-[#232323] mb-3">
                          Das komplette STARTER-Paket für Vereine & NGOs
                        </h3>

                        <div className="flex items-baseline justify-center mb-4">
                          <span className="text-4xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-[#e24e1b] to-[#ea580c] bg-clip-text text-transparent">
                            €15
                          </span>
                          <span className="text-xl text-[#232323] ml-2">/Monat</span>
                          <span className="text-sm text-[#474747] ml-2 line-through">€69</span>
                        </div>

                        <div className="flex flex-wrap items-center justify-center gap-3 text-sm mb-4">
                          <span className="text-[#232323]">✓ 78% Vereinsrabatt dauerhaft</span>
                          <span className="text-[#232323]">✓ Monatlich kündbar</span>
                          <span className="text-[#232323]">✓ Keine versteckten Kosten</span>
                        </div>

                        <div className="bg-[#e24e1b]/10 rounded-lg p-4 border border-[#e24e1b]/20">
                          <p className="text-sm text-[#232323] font-semibold">
                            🤝 UNSER VERSPRECHEN:
                          </p>
                          <p className="text-xs sm:text-sm text-[#474747] mt-2">
                            "Wer sich für andere einsetzt, verdient unsere volle Unterstützung. Deshalb erhalten alle gemeinnützigen Organisationen unseren kompletten STARTER-Schutz zum Selbstkostenpreis."
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {selectedSpecial === 'kleinunternehmer' && (
                    <div className="border-t border-gray-200 pt-10">
                      <h4 className="text-base sm:text-xl font-bold text-[#232323] mb-4 sm:mb-8 flex items-center justify-center gap-2">
                        <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" />
                        WAS SIE BEKOMMEN:
                        <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </h4>

                      <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                        >
                          <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            DSGVO-GRUNDSCHUTZ KOMPLETT
                          </h5>
                          <ul className="space-y-3">
                            {[
                              'Alle DSGVO-Pflichtdokumente fertig vorbereitet',
                              'Datenschutzerklärung für Ihre Website (inkl. Updates)',
                              'Cookie-Banner rechtssicher & abmahnsicher',
                              'Verarbeitungsverzeichnis (Art. 30 DSGVO)',
                              'TOMs (Technische & Organisatorische Maßnahmen)',
                              'AVV-Verträge für alle gängigen Dienstleister',
                              'Mitarbeiter-Verpflichtungen als Vorlage'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-[#232323]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="bg-gradient-to-br from-white to-[#F5F6F8] p-6 rounded-xl border border-gray-100 mb-6">
                            <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                              <Zap className="h-5 w-5" />
                              MARSSTEIN KI-ASSISTENT
                            </h5>
                            <ul className="space-y-3">
                              {[
                                '50 KI-Anfragen/Monat für Ihre DSGVO-Fragen',
                                '24/7 verfügbar - immer eine Antwort parat',
                                'In einfacher Sprache - kein Juristendeutsch'
                              ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-[#232323]">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-gradient-to-br from-white to-[#F5F6F8] p-6 rounded-xl border border-gray-100">
                            <h5 className="text-sm sm:text-lg font-bold text-[#003366] mb-3 sm:mb-4 flex items-center gap-2">
                              <Shield className="h-5 w-5" />
                              COMPLIANCE-DASHBOARD
                            </h5>
                            <ul className="space-y-3">
                              {[
                                'Live Compliance-Score - Sehen Sie Ihren Status',
                                'Einfache Checklisten - Schritt für Schritt',
                                'Automatische Erinnerungen bei wichtigen Fristen',
                                'Gesetzesänderungs-Alerts - immer aktuell'
                              ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-[#232323]">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 text-center"
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#ea580c] hover:to-[#e24e1b] text-white px-12 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                        >
                          <Zap className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                          Jetzt KLEIN-STARTER sichern
                        </Button>

                        <p className="mt-4 text-sm text-[#474747]">
                          Keine Kreditkarte erforderlich • 14 Tage kostenlos testen • Jederzeit kündbar
                        </p>
                      </motion.div>
                    </div>
                  )}

                  {selectedSpecial === 'neugruender' && (
                    <div className="border-t border-gray-200 pt-10">
                      <h4 className="text-base sm:text-xl font-bold text-[#232323] mb-4 sm:mb-8 flex items-center justify-center gap-2">
                        <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" />
                        WAS IHRE NEUGRÜNDUNG BEKOMMT:
                        <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </h4>

                      <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mb-6">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                        >
                          <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                            <UserCheck className="h-5 w-5" />
                            EXTERNER DATENSCHUTZBEAUFTRAGTER
                          </h5>
                          <ul className="space-y-3">
                            {[
                              'Zertifizierter DSB offiziell benannt',
                              '€100.000 Haftungsübernahme inklusive',
                              'DSB-Hotline während Geschäftszeiten',
                              'Spart €3.000+/Monat Personalkosten'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-[#232323]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                        >
                          <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                            <Sparkles className="h-5 w-5" />
                            ENTERPRISE-FEATURES
                          </h5>
                          <ul className="space-y-3">
                            {[
                              '10 Datenschutzerklärungen für Websites/Apps',
                              '1.000 KI-Anfragen/Monat mit Firmen-Kontext',
                              'API-Integration für Ihre Tools',
                              'Dark Web Monitoring für Firmendaten',
                              'Penetrationstest 1x jährlich'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-[#232323]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-white to-[#F5F6F8] p-6 rounded-xl border border-gray-100 mb-8"
                      >
                        <h5 className="text-sm sm:text-lg font-bold text-[#003366] mb-3 sm:mb-4 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5" />
                          WACHSTUMS-BEREIT
                        </h5>
                        <ul className="grid sm:grid-cols-2 gap-3">
                          {[
                            'Trust-Badge für mehr Conversions',
                            'Incident-Response-Plan vorbereitet',
                            'Automatische Dokumenten-Updates',
                            'Notfall-Anwalt-Vermittlung inklusive'
                          ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-[#232323]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#e24e1b]/10 rounded-lg p-4 border border-[#e24e1b]/20 mb-8"
                      >
                        <p className="text-sm text-[#232323] font-semibold mb-2">
                          QUALIFIKATION:
                        </p>
                        <ul className="space-y-2">
                          {[
                            '✓ Gründung vor weniger als 24 Monaten',
                            '✓ GmbH, UG, AG oder GbR',
                            '✓ Handelsregisterauszug genügt'
                          ].map((item, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-[#474747]">{item}</li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-center"
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#ea580c] hover:to-[#e24e1b] text-white px-12 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                        >
                          <Rocket className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                          Jetzt mit Code NEUSTART99 durchstarten
                        </Button>

                        <p className="mt-4 text-sm text-[#474747]">
                          14 Tage kostenlos testen • Keine Kreditkarte nötig • In 3 Minuten startklar
                        </p>
                      </motion.div>
                    </div>
                  )}

                  {selectedSpecial === 'gemeinnuetzig' && (
                    <div className="border-t border-gray-200 pt-10">
                      <h4 className="text-base sm:text-xl font-bold text-[#232323] mb-4 sm:mb-8 flex items-center justify-center gap-2">
                        <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" />
                        WAS IHR VEREIN BEKOMMT:
                        <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
                      </h4>

                      <div className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                        >
                          <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                            <Shield className="h-5 w-5" />
                            KOMPLETTER DSGVO-SCHUTZ
                          </h5>
                          <ul className="space-y-2">
                            {[
                              'Alle DSGVO-Pflichtdokumente für Vereine',
                              '2 Datenschutzerklärungen für Websites',
                              'Mitgliederverwaltung DSGVO-konform',
                              'Einwilligungen für Veranstaltungsfotos',
                              'Spendendaten-Management Vorlagen',
                              'Newsletter-Einwilligungen rechtssicher',
                              'Ehrenamtlichen-Vereinbarungen'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-[#232323]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                        >
                          <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                            <Bot className="h-5 w-5" />
                            MARS-AI ASSISTENT
                          </h5>
                          <ul className="space-y-2">
                            {[
                              '100 KI-Anfragen/Monat',
                              'Speziell geschult auf Vereinsthemen',
                              'Verständliche Antworten ohne Juristendeutsch'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-[#232323]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200"
                        >
                          <h5 className="text-sm sm:text-lg font-bold text-[#e24e1b] mb-3 sm:mb-4 flex items-center gap-2">
                            <Award className="h-5 w-5" />
                            MARSSTEIN-SIEGEL
                          </h5>
                          <ul className="space-y-2">
                            {[
                              '"DSGVO-VERIFIED" Siegel für Vertrauen',
                              'Jährliches Audit inklusive',
                              'Wichtig für Förderanträge & Spender'
                            ].map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                                <span className="text-xs text-[#232323]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-[#e24e1b]/10 rounded-lg p-4 border border-[#e24e1b]/20 mb-8"
                      >
                        <p className="text-sm text-[#232323] font-semibold mb-2">
                          EINFACHE QUALIFIKATION:
                        </p>
                        <ul className="space-y-2">
                          {[
                            '✓ Eingetragener e.V. oder anerkannte NGO',
                            '✓ Gültiger Freistellungsbescheid',
                            '✓ 24h Schnell-Verifikation'
                          ].map((item, idx) => (
                            <li key={idx} className="text-xs sm:text-sm text-[#474747]">{item}</li>
                          ))}
                        </ul>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-center"
                      >
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#ea580c] hover:to-[#e24e1b] text-white px-12 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                        >
                          <Heart className="mr-2 h-6 w-6 group-hover:animate-pulse" />
                          Jetzt mit Code GEMEIN2025 registrieren
                        </Button>

                        <p className="mt-4 text-sm text-[#474747]">
                          Upload Freistellungsbescheid • Sofort starten • 30 Tage Geld-zurück-Garantie
                        </p>
                      </motion.div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      )}

      {/* DSB-spezifische Vorteile-Sektion */}
      {audienceType === 'dsb' && (
        <section className="relative py-12 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#F5F6F8] via-white to-[#F5F6F8]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#e24e1b]/5 to-transparent pointer-events-none" />

          <div className="container mx-auto max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 backdrop-blur-xl rounded-full mb-4 sm:mb-8 border border-[#e24e1b]/20 shadow-lg"
              >
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-[#e24e1b] animate-pulse" />
                <span className="text-xs sm:text-sm font-bold text-[#e24e1b]">EXKLUSIV FÜR DSBs</span>
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
              </motion.div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#e24e1b] via-[#232323] to-[#e24e1b] bg-clip-text text-transparent bg-300% animate-gradient">
                Warum DSBs MARSSTEIN lieben
              </h2>

              <p className="text-base sm:text-xl text-[#474747] max-w-2xl mx-auto">
                Entwickelt von DSBs für DSBs – wir verstehen Ihre täglichen Herausforderungen
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: <TrendingUp className="h-8 w-8" />,
                  title: "Mehr Mandanten, weniger Aufwand",
                  description: "Automatisierte Dokumentation spart Ihnen 10+ Stunden pro Woche. Zeit, die Sie in neue Mandanten investieren können."
                },
                {
                  icon: <Shield className="h-8 w-8" />,
                  title: "Audit-ready in Minuten",
                  description: "Vollständige Dokumentation auf Knopfdruck. Behördenanfragen beantworten Sie mit einem Klick."
                },
                {
                  icon: <Bot className="h-8 w-8" />,
                  title: "KI, die Ihre Arbeit kennt",
                  description: "Unser KI-Agent kennt Ihre Mandanten und gibt Ihnen sofort die richtigen Antworten – keine endlose Recherche mehr."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all hover:shadow-xl">
                    <CardContent className="p-6 sm:p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#e24e1b] to-[#ea580c] rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#232323] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#474747]">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-12 text-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg font-bold"
                asChild
              >
                <Link to="/dsgvo-compliance-software">
                  <Rocket className="h-5 w-5 mr-2" />
                  Jetzt kostenlos testen
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <p className="mt-4 text-sm text-[#474747]">
                Keine Kreditkarte erforderlich • Setup in 5 Minuten
              </p>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Preise;