import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  Euro,
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Building2,
  Shield,
  FileText,
  Users,
  Zap,
  Target,
  ArrowRight,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

const Iso27001Kosten: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string>('medium');

  const costBreakdown = {
    small: {
      label: '1-20 Mitarbeiter',
      total: '15.000 - 35.000€',
      duration: '6-9 Monate',
      annual: '3.000 - 8.000€',
      phases: {
        gap: { min: 2000, max: 5000, label: 'Gap-Analyse' },
        implementation: { min: 5000, max: 12000, label: 'ISMS Implementierung' },
        documentation: { min: 2000, max: 5000, label: 'Dokumentation' },
        audit: { min: 4000, max: 8000, label: 'Zertifizierungsaudit (Stage 1+2)' },
        certification: { min: 2000, max: 5000, label: 'Zertifizierungsgebühren' }
      },
      maintenance: {
        surveillance: { min: 2000, max: 4000, label: 'Überwachungsaudit (jährlich)' },
        internal: { min: 500, max: 2000, label: 'Interne Audits' },
        updates: { min: 500, max: 2000, label: 'Dokumentationspflege' }
      }
    },
    medium: {
      label: '21-100 Mitarbeiter',
      total: '30.000 - 70.000€',
      duration: '9-15 Monate',
      annual: '8.000 - 18.000€',
      phases: {
        gap: { min: 5000, max: 10000, label: 'Gap-Analyse' },
        implementation: { min: 12000, max: 30000, label: 'ISMS Implementierung' },
        documentation: { min: 5000, max: 10000, label: 'Dokumentation' },
        training: { min: 2000, max: 5000, label: 'Mitarbeiterschulungen' },
        audit: { min: 8000, max: 15000, label: 'Zertifizierungsaudit (Stage 1+2)' },
        certification: { min: 3000, max: 7000, label: 'Zertifizierungsgebühren' }
      },
      maintenance: {
        surveillance: { min: 4000, max: 8000, label: 'Überwachungsaudit (jährlich)' },
        internal: { min: 2000, max: 5000, label: 'Interne Audits' },
        updates: { min: 1000, max: 3000, label: 'Dokumentationspflege' },
        consulting: { min: 1000, max: 2000, label: 'Laufende Beratung' }
      }
    },
    large: {
      label: '100+ Mitarbeiter',
      total: '60.000 - 150.000€',
      duration: '12-24 Monate',
      annual: '15.000 - 40.000€',
      phases: {
        gap: { min: 10000, max: 20000, label: 'Gap-Analyse' },
        implementation: { min: 25000, max: 60000, label: 'ISMS Implementierung' },
        documentation: { min: 10000, max: 20000, label: 'Dokumentation' },
        training: { min: 5000, max: 15000, label: 'Mitarbeiterschulungen' },
        technical: { min: 5000, max: 15000, label: 'Technische Maßnahmen' },
        audit: { min: 12000, max: 25000, label: 'Zertifizierungsaudit (Stage 1+2)' },
        certification: { min: 5000, max: 10000, label: 'Zertifizierungsgebühren' }
      },
      maintenance: {
        surveillance: { min: 8000, max: 15000, label: 'Überwachungsaudit (jährlich)' },
        internal: { min: 3000, max: 10000, label: 'Interne Audits' },
        updates: { min: 2000, max: 8000, label: 'Dokumentationspflege' },
        consulting: { min: 2000, max: 7000, label: 'Laufende Beratung' }
      }
    }
  };

  const costDrivers = [
    {
      driver: 'Scope der Zertifizierung',
      impact: 'Sehr hoch',
      description: 'Gesamtes Unternehmen vs. einzelne Abteilungen/Produkte',
      range: '±30-70%',
      icon: Target,
      color: 'from-red-500 to-pink-500'
    },
    {
      driver: 'Bestehende Security-Maßnahmen',
      impact: 'Hoch',
      description: 'Je mehr bereits vorhanden, desto geringer der Implementierungsaufwand',
      range: '±20-50%',
      icon: Shield,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      driver: 'Komplexität der IT-Infrastruktur',
      impact: 'Hoch',
      description: 'Cloud, Multi-Tenant, Legacy-Systeme erhöhen Aufwand',
      range: '±25-60%',
      icon: Building2,
      color: 'from-orange-500 to-red-500'
    },
    {
      driver: 'Interne vs. Externe Ressourcen',
      impact: 'Sehr hoch',
      description: 'Eigene Security-Experten senken Beraterkosten drastisch',
      range: '±40-80%',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      driver: 'Zertifizierungsstelle',
      impact: 'Mittel',
      description: 'TÜV, BSI oder internationale Bodies haben unterschiedliche Preise',
      range: '±15-30%',
      icon: Award,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const timeline = [
    {
      phase: '1. Gap-Analyse',
      duration: '2-4 Wochen',
      activities: ['IST-Zustand erfassen', 'Lücken identifizieren', 'Roadmap erstellen'],
      cost: 'Klein: 2k-5k | Mittel: 5k-10k | Groß: 10k-20k'
    },
    {
      phase: '2. ISMS Implementierung',
      duration: '3-12 Monate',
      activities: ['Risikoanalyse', 'Security Controls umsetzen', 'Prozesse etablieren'],
      cost: 'Klein: 5k-12k | Mittel: 12k-30k | Groß: 25k-60k'
    },
    {
      phase: '3. Dokumentation',
      duration: '1-3 Monate',
      activities: ['ISMS-Handbuch', 'Richtlinien & Verfahren', 'Nachweisdokumentation'],
      cost: 'Klein: 2k-5k | Mittel: 5k-10k | Groß: 10k-20k'
    },
    {
      phase: '4. Interne Audits & Management Review',
      duration: '1-2 Monate',
      activities: ['Interne Audits durchführen', 'Findings beheben', 'Management Review'],
      cost: 'In Beratungskosten enthalten oder 1k-5k extra'
    },
    {
      phase: '5. Stage 1 Audit (Dokumentenprüfung)',
      duration: '1-2 Tage',
      activities: ['Zertifizierer prüft Dokumentation', 'Findings beheben'],
      cost: 'In Audit-Kosten enthalten (Teil 1/2)'
    },
    {
      phase: '6. Stage 2 Audit (Vor-Ort/Remote)',
      duration: '2-5 Tage',
      activities: ['Zertifizierer prüft Umsetzung', 'Minor/Major Findings beheben'],
      cost: 'In Audit-Kosten enthalten (Teil 2/2)'
    },
    {
      phase: '7. Zertifikat',
      duration: '2-4 Wochen',
      activities: ['Zertifikat ausgestellt', 'Gültig für 3 Jahre'],
      cost: 'Zertifizierungsgebühren (siehe oben)'
    }
  ];

  const hiddenCosts = [
    {
      item: 'Interne Arbeitszeitkosten',
      cost: '10.000 - 50.000€',
      description: 'Zeit von Geschäftsführung, IT, Security-Team für Projektarbeit'
    },
    {
      item: 'Software & Tools',
      cost: '2.000 - 15.000€',
      description: 'GRC-Software, Vulnerability Scanner, SIEM, Compliance-Tools'
    },
    {
      item: 'Technische Verbesserungen',
      cost: '5.000 - 50.000€',
      description: 'Neue Firewalls, Backup-Systeme, Verschlüsselung, MFA'
    },
    {
      item: 'Nachzertifizierung bei Nicht-Bestehen',
      cost: '3.000 - 10.000€',
      description: 'Wenn Major Findings nicht rechtzeitig behoben werden'
    },
    {
      item: 'Multi-Site Zertifizierung',
      cost: '+30-50% pro Standort',
      description: 'Jeder weitere Standort erhöht Audit-Aufwand'
    }
  ];

  const calculatePhaseTotal = () => {
    const costs = costBreakdown[selectedSize as keyof typeof costBreakdown].phases;
    const min = Object.values(costs).reduce((sum, item) => sum + item.min, 0);
    const max = Object.values(costs).reduce((sum, item) => sum + item.max, 0);
    return { min, max };
  };

  const calculateMaintenanceTotal = () => {
    const costs = costBreakdown[selectedSize as keyof typeof costBreakdown].maintenance;
    const min = Object.values(costs).reduce((sum, item) => sum + item.min, 0);
    const max = Object.values(costs).reduce((sum, item) => sum + item.max, 0);
    return { min, max };
  };

  const companySizes = [
    { id: 'small', label: '1-20 MA' },
    { id: 'medium', label: '21-100 MA' },
    { id: 'large', label: '100+ MA' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <SEOHead
        title="ISO 27001 Zertifizierung Kosten 2025 - Vollständige Preisübersicht"
        description="ISO 27001 Kosten: 15.000-150.000€ je nach Größe. Detaillierte Aufschlüsselung: Gap-Analyse, ISMS Implementation, Audit-Kosten & laufende Gebühren."
        canonical="/wissen/kosten/iso-27001-zertifizierung-kosten"
        keywords="ISO 27001 Kosten, ISO 27001 Preis, ISMS Kosten, Zertifizierung Kosten, ISO 27001 Budget, Informationssicherheit Kosten"
      />
      <Header />

      <div className="container px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/wissen">Wissen</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>ISO 27001 Kosten</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-500/10 backdrop-blur-sm rounded-full mb-8 border border-indigo-500/20"
            >
              <Award className="h-5 w-5 text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-300">ISO 27001 Kostenübersicht</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-white">ISO 27001:</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Was kostet die Zertifizierung?
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Vollständige Kostenaufschlüsselung von Gap-Analyse bis Zertifikat - inkl. versteckter Kosten und Zeitplan.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Wählen Sie Ihre Unternehmensgröße:</h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {companySizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    selectedSize === size.id
                      ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg scale-105'
                      : 'bg-slate-800/60 text-slate-300 hover:bg-slate-700/60'
                  }`}
                >
                  <div className="text-lg">{size.label}</div>
                  <div className="text-xs opacity-80">{costBreakdown[size.id as keyof typeof costBreakdown].total}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="border-2 border-indigo-500/30 bg-slate-800/40 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Euro className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                <div className="text-3xl font-black text-white mb-2">
                  {costBreakdown[selectedSize as keyof typeof costBreakdown].total}
                </div>
                <div className="text-sm text-slate-400">Gesamtkosten (Initial)</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-500/30 bg-slate-800/40 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-black text-white mb-2">
                  {costBreakdown[selectedSize as keyof typeof costBreakdown].duration}
                </div>
                <div className="text-sm text-slate-400">Projektdauer</div>
              </CardContent>
            </Card>
            <Card className="border-2 border-cyan-500/30 bg-slate-800/40 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-black text-white mb-2">
                  {costBreakdown[selectedSize as keyof typeof costBreakdown].annual}
                </div>
                <div className="text-sm text-slate-400">Jährliche Kosten</div>
              </CardContent>
            </Card>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-8">Kostenaufschlüsselung nach Projektphasen</h2>

            <Card className="border-2 border-indigo-500/30 bg-slate-800/40 backdrop-blur-sm mb-8">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-indigo-400" />
                  Initiale Zertifizierung
                </h3>

                <div className="space-y-4 mb-6">
                  {Object.entries(costBreakdown[selectedSize as keyof typeof costBreakdown].phases).map(([key, item]) => (
                    <div key={key} className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                      <span className="text-slate-300 font-medium">{item.label}</span>
                      <span className="text-white font-bold">{item.min.toLocaleString()}€ - {item.max.toLocaleString()}€</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">Gesamt (Initial)</span>
                    <span className="text-3xl font-black text-indigo-400">
                      {calculatePhaseTotal().min.toLocaleString()}€ - {calculatePhaseTotal().max.toLocaleString()}€
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500/30 bg-slate-800/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <TrendingUp className="h-6 w-6 text-blue-400" />
                  Jährliche Wartungskosten
                </h3>

                <div className="space-y-4 mb-6">
                  {Object.entries(costBreakdown[selectedSize as keyof typeof costBreakdown].maintenance).map(([key, item]) => (
                    <div key={key} className="flex justify-between items-center p-4 bg-slate-900/50 rounded-lg">
                      <span className="text-slate-300 font-medium">{item.label}</span>
                      <span className="text-white font-bold">{item.min.toLocaleString()}€ - {item.max.toLocaleString()}€</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-white">Gesamt (Jährlich)</span>
                    <span className="text-3xl font-black text-blue-400">
                      {calculateMaintenanceTotal().min.toLocaleString()}€ - {calculateMaintenanceTotal().max.toLocaleString()}€
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-500/10 rounded-lg border border-blue-500/30">
                  <p className="text-slate-300 text-sm">
                    <strong className="text-white">Hinweis:</strong> Nach 3 Jahren ist eine Re-Zertifizierung erforderlich (ca. 50-70% der initialen Audit-Kosten).
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              <Target className="inline-block mr-3 text-orange-400" />
              5 Hauptfaktoren für die Kosten
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Diese Variablen haben den größten Einfluss auf Ihre ISO 27001-Kosten:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {costDrivers.map((driver, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-r ${driver.color} rounded-xl flex-shrink-0`}>
                          <driver.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-bold text-white">{driver.driver}</h4>
                            <Badge variant="outline" className="border-indigo-500/50 text-indigo-300">
                              {driver.impact}
                            </Badge>
                          </div>
                          <p className="text-slate-300 text-sm mb-3">{driver.description}</p>
                          <div className="text-indigo-400 font-bold text-sm">{driver.range}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-8">Zeitplan & Phasen</h2>

            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-black text-lg">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-xl font-bold text-white">{phase.phase}</h4>
                            <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                              <Clock className="h-3 w-3 mr-1" />
                              {phase.duration}
                            </Badge>
                          </div>
                          <ul className="space-y-1 mb-3">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                          <div className="text-indigo-400 font-semibold text-sm">{phase.cost}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              <AlertCircle className="inline-block mr-3 text-orange-400" />
              Versteckte Zusatzkosten
            </h2>
            <p className="text-slate-300 mb-8 text-lg">
              Diese Kosten werden oft übersehen, können aber 30-80% zusätzlich ausmachen:
            </p>

            <div className="space-y-4">
              {hiddenCosts.map((cost, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex-grow">
                          <h4 className="text-lg font-bold text-white mb-1">{cost.item}</h4>
                          <p className="text-slate-400 text-sm">{cost.description}</p>
                        </div>
                        <div className="text-orange-400 font-black text-xl flex-shrink-0">{cost.cost}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="border-2 border-indigo-500/30 bg-gradient-to-br from-slate-800/60 to-indigo-900/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <Award className="h-16 w-16 text-indigo-400 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-white mb-4">
                  Finden Sie die richtige Zertifizierung
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Vergleichen Sie ISO 27001 mit SOC 2, TISAX und anderen Zertifizierungen in unserem interaktiven Auswahlratgeber.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold" asChild>
                  <Link to="/ratgeber/sicherheitszertifizierung-auswahl">
                    <Shield className="mr-2 h-5 w-5" />
                    Zum Zertifizierungs-Ratgeber
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Iso27001Kosten;
