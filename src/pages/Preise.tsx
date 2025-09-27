import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check, X, Star, Shield, Zap, ChevronDown, ChevronUp,
  Sparkles, FileText, UserCheck, Award, Bot, BarChart3,
  Lock, Headphones, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Preise: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['pflichtdokumente']);
  const [showOnlyDifferences, setShowOnlyDifferences] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "MARSSTEIN DSGVO-Compliance Software",
    "description": "KI-gestützte DSGVO-Compliance Software mit externem Datenschutzbeauftragten",
    "brand": {
      "@type": "Brand",
      "name": "MARSSTEIN"
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

  const packages = [
    {
      name: 'STARTER',
      basePrice: '69',
      color: 'from-[#474747] to-[#232323]',
      popular: false,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: {
        highlights: [
          'Alle DSGVO-Pflichtdokumente',
          '100 KI-Anfragen/Monat',
          'DSGVO-Siegel VERIFIED'
        ]
      }
    },
    {
      name: 'PROFESSIONAL',
      basePrice: '199',
      color: 'from-[#e24e1b] to-[#ea580c]',
      popular: true,
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      features: {
        highlights: [
          'Externer Datenschutzbeauftragter',
          '€100.000 DSB-Haftung',
          '1.000 KI-Anfragen/Monat',
          'API-Integration'
        ]
      }
    },
    {
      name: 'ENTERPRISE',
      basePrice: '449',
      color: 'from-[#003366] to-[#1F1F24]',
      popular: false,
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      features: {
        highlights: [
          '24/7 DSB-Hotline',
          '€250.000 DSB-Haftung',
          'Unbegrenzte KI-Anfragen',
          'Dedizierter Success Manager'
        ]
      }
    }
  ];

  const featureCategories = [
    {
      id: 'pflichtdokumente',
      title: 'PFLICHTDOKUMENTE',
      icon: FileText,
      features: [
        { label: 'Verarbeitungsverzeichnis (Art. 30)', starter: true, professional: true, enterprise: true },
        { label: 'TOMs (Technische & Org. Maßnahmen)', starter: true, professional: true, enterprise: true },
        { label: 'Löschkonzept', starter: true, professional: true, enterprise: true },
        { label: 'Datenschutz-Handbuch', starter: true, professional: true, enterprise: true },
        { label: 'Datenschutzerklärung Website', starter: '2', professional: '10', enterprise: 'Unbegrenzt' },
        { label: 'Datenschutzerklärung App', starter: '1', professional: '5', enterprise: 'Unbegrenzt' },
        { label: 'Cookie-Banner & Policy', starter: true, professional: true, enterprise: true },
        { label: 'AVV-Verträge', starter: true, professional: true, enterprise: true },
        { label: 'Datenpannen-Management', starter: true, professional: true, enterprise: true },
        { label: 'Mitarbeiter-Verpflichtungen', starter: true, professional: true, enterprise: true },
        { label: 'Betroffenenrechte-Prozesse', starter: true, professional: true, enterprise: true },
        { label: 'DSGVO-konforme E-Mail-Signaturen', starter: true, professional: true, enterprise: true }
      ]
    },
    {
      id: 'dsb',
      title: 'DATENSCHUTZBEAUFTRAGTER',
      icon: UserCheck,
      features: [
        { label: 'Externer DSB', starter: false, professional: true, enterprise: true },
        { label: 'DSB-Haftungsübernahme', starter: false, professional: '€100.000', enterprise: '€250.000' },
        { label: 'DSB-Zertifikat', starter: false, professional: true, enterprise: true },
        { label: 'DSB-Hotline', starter: false, professional: 'Geschäftszeiten', enterprise: '24/7' }
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
      title: 'MARS-AI COMPLIANCE ASSISTANT',
      icon: Bot,
      features: [
        { label: 'KI-Anfragen pro Monat', starter: '100', professional: '1.000', enterprise: 'Unbegrenzt' },
        { label: 'Allgemeine DSGVO-Informationen', starter: true, professional: true, enterprise: true },
        { label: 'Kennt Ihre Unternehmensdaten', starter: false, professional: true, enterprise: true },
        { label: 'Individuelle Compliance-Analyse', starter: false, professional: true, enterprise: true },
        { label: 'Dokumenten-Prüfassistent', starter: 'Basis', professional: 'Erweitert', enterprise: 'Premium' }
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
        { label: 'Export-Formate', starter: 'PDF', professional: 'PDF, Excel', enterprise: 'PDF, Excel, API' }
      ]
    },
    {
      id: 'security',
      title: 'SECURITY & MONITORING',
      icon: Lock,
      features: [
        { label: 'Penetrationstest', starter: false, professional: '1x/Jahr', enterprise: '2x/Jahr' },
        { label: 'SSL/TLS-Überwachung', starter: 'Basis', professional: 'Erweitert', enterprise: 'Premium' },
        { label: 'Phishing-Simulation', starter: '1x/Jahr', professional: 'Halbjährlich', enterprise: 'Quartalsweise' },
        { label: 'Passwort-Leak-Check', starter: 'Basis (5 Accounts)', professional: 'Erweitert (50 Accounts)', enterprise: 'Unlimited + Monitoring' },
        { label: 'Email Breach Monitor', starter: '3 E-Mails', professional: '25 E-Mails', enterprise: 'Unbegrenzt' },
        { label: 'Dark Web Monitoring', starter: false, professional: 'Firmendaten', enterprise: '+ Executive Protection' },
        { label: 'Vulnerability Scan', starter: false, professional: 'Monatlich', enterprise: 'Wöchentlich' },
        { label: 'Cookie-Scanner', starter: 'Monatlich', professional: 'Wöchentlich', enterprise: 'Täglich' }
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
        { label: 'Onboarding-Session', starter: 'Self-Service', professional: '2h Assisted', enterprise: '8h Full-Service' }
      ]
    }
  ];

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

  const getValue = (value: any) => {
    if (value === true) return <Check className="h-5 w-5 text-[#39B37B] mx-auto" />;
    if (value === false) return <X className="h-4 w-4 text-gray-300 mx-auto" />;
    return <span className="text-sm font-medium text-[#232323]">{value}</span>;
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 backdrop-blur-sm rounded-full mb-8 border border-[#e24e1b]/20"
            >
              <Sparkles className="h-5 w-5 text-[#e24e1b] animate-pulse" />
              <span className="text-sm font-semibold text-[#e24e1b]">Transparente Preise</span>
              <Shield className="h-5 w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#232323] bg-clip-text text-transparent bg-300% animate-gradient"
            >
              <span>MARSSTEIN</span>
              <br />
              <span>DSGVO-Compliance</span>
              <br />
              <span>Pakete</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-[#474747] max-w-4xl mx-auto leading-relaxed"
            >
              Wählen Sie das passende Paket für Ihre <span className="font-semibold text-[#e24e1b]">DSGVO-Compliance</span>.
              Monatlich kündbar, <span className="font-semibold text-[#232323]">keine versteckten Kosten</span>.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
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
                  {billingCycle === 'yearly' && (
                    <Badge className="absolute -top-3 -right-3 bg-[#39B37B] text-white border-0 animate-bounce">
                      20% sparen
                    </Badge>
                  )}
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
                      <h3 className="text-xl sm:text-2xl font-bold text-[#232323] mb-2">{pkg.name}</h3>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={billingCycle}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-baseline justify-center mb-4"
                        >
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
                      >
                        <span className="relative z-10">Paket wählen</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
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
            className="relative"
          >

            <div className="relative bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-200">
                <h2 className="text-lg sm:text-2xl font-bold text-[#232323]">
                  Detaillierte Feature-Übersicht
                </h2>
                <p className="text-xs text-[#474747] mt-1 sm:hidden">Nach links/rechts wischen für alle Pakete</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead className="border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
                    <tr>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-bold text-[#e24e1b] sticky left-0 bg-gray-50 z-20">Features</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-bold text-[#232323] min-w-[100px]">STARTER</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-bold text-[#232323] bg-[#e24e1b]/5 min-w-[120px]">PROFESSIONAL</th>
                      <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-bold text-[#232323] min-w-[100px]">ENTERPRISE</th>
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
                            <td className="px-3 sm:px-6 py-3 sm:py-4 font-semibold text-xs sm:text-base text-[#232323] flex items-center gap-1 sm:gap-2 sticky left-0 bg-white z-10">
                              <motion.div
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-[#474747]" />
                              </motion.div>
                              <category.icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#e24e1b]" />
                              <span className="hidden sm:inline">{category.title}</span>
                              <span className="sm:hidden">{category.title.split(' ')[0]}</span>
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
                                <td className="px-3 sm:px-12 py-2 sm:py-3 text-xs sm:text-sm font-medium text-[#232323] sticky left-0 bg-white z-10">{feature.label}</td>
                                <td className="px-3 sm:px-6 py-2 sm:py-3 text-center">{getValue(feature.starter)}</td>
                                <td className="px-3 sm:px-6 py-2 sm:py-3 text-center bg-gray-50/50">{getValue(feature.professional)}</td>
                                <td className="px-3 sm:px-6 py-2 sm:py-3 text-center">{getValue(feature.enterprise)}</td>
                              </motion.tr>
                            ))}
                          </AnimatePresence>
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              <span className="text-xs sm:text-sm font-bold text-[#e24e1b]">NEU: KLEINUNTERNEHMER-SPECIAL 2025</span>
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
            </motion.div>

            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#e24e1b] via-[#232323] to-[#e24e1b] bg-clip-text text-transparent bg-300% animate-gradient">
              MARSSTEIN
              <br className="sm:hidden" />
              <span className="text-xl sm:text-4xl md:text-6xl">KLEINUNTERNEHMER-SPECIAL</span>
              <br />
              2025
            </h2>

            <p className="text-base sm:text-xl md:text-2xl text-[#474747] italic px-4 sm:px-0">
              "Datenschutz für alle - weil jedes Unternehmen Schutz verdient"
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#e24e1b] via-[#ea580c] to-[#e24e1b] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity animate-pulse" />

            <Card className="relative border-2 border-[#e24e1b]/50 shadow-2xl bg-white/95 backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e24e1b]/5 via-transparent to-[#003366]/5 pointer-events-none" />

              <CardContent className="relative p-4 sm:p-8 md:p-12">
                <div className="text-center mb-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
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

                <div className="border-t border-gray-200 pt-10">
                  <h4 className="text-base sm:text-xl font-bold text-[#232323] mb-4 sm:mb-8 flex items-center justify-center gap-2">
                    <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" />
                    WAS SIE BEKOMMEN:
                    <Star className="h-5 w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </h4>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-gray-50 p-4 sm:p-6 rounded-xl border border-gray-200">
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
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + idx * 0.05 }}
                            className="flex items-start gap-2"
                          >
                            <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-[#232323]">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
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
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + idx * 0.05 }}
                              className="flex items-start gap-2"
                            >
                              <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-[#232323]">{item}</span>
                            </motion.li>
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
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 + idx * 0.05 }}
                              className="flex items-start gap-2"
                            >
                              <Check className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-[#232323]">{item}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
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