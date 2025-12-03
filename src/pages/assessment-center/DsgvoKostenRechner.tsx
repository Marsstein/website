import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import {
  Calculator,
  Euro,
  Users,
  Building2,
  Shield,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Download,
  ArrowRight,
  Info
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

const DsgvoKostenRechner: React.FC = () => {
  const [employees, setEmployees] = useState<number>(25);
  const [dataProcessingComplexity, setDataProcessingComplexity] = useState<string>('medium');
  const [industry, setIndustry] = useState<string>('general');
  const [dsbModel, setDsbModel] = useState<string>('hybrid');
  const [hasExistingMeasures, setHasExistingMeasures] = useState<boolean>(false);
  const [needsTraining, setNeedsTraining] = useState<boolean>(true);

  const [initialCosts, setInitialCosts] = useState({ min: 0, max: 0 });
  const [annualCosts, setAnnualCosts] = useState({ min: 0, max: 0 });
  const [breakdown, setBreakdown] = useState<any>({});

  useEffect(() => {
    calculateCosts();
  }, [employees, dataProcessingComplexity, industry, dsbModel, hasExistingMeasures, needsTraining]);

  const calculateCosts = () => {
    let initialMin = 0;
    let initialMax = 0;
    let annualMin = 0;
    let annualMax = 0;

    const newBreakdown: any = {
      initial: {},
      annual: {}
    };

    const employeeFactor = employees <= 10 ? 1 : employees <= 50 ? 1.5 : employees <= 100 ? 2.5 : 4;
    const complexityMultiplier = dataProcessingComplexity === 'low' ? 0.7 : dataProcessingComplexity === 'medium' ? 1 : 1.4;
    const industryMultiplier = industry === 'general' ? 1 : industry === 'healthcare' ? 1.5 : industry === 'finance' ? 1.4 : 1.2;

    if (dsbModel === 'internal') {
      newBreakdown.initial.dsb = { min: 40000 * employeeFactor, max: 80000 * employeeFactor, label: 'Interner DSB (Jahresgehalt)' };
      newBreakdown.annual.dsb = { min: 50000 * employeeFactor, max: 90000 * employeeFactor, label: 'DSB Gehalt' };
    } else if (dsbModel === 'freelancer') {
      newBreakdown.initial.dsb = { min: 3000 * employeeFactor, max: 8000 * employeeFactor, label: 'Freiberuflicher DSB (Setup)' };
      newBreakdown.annual.dsb = { min: 4800 * employeeFactor, max: 14400 * employeeFactor, label: 'DSB jährlich' };
    } else if (dsbModel === 'agency') {
      newBreakdown.initial.dsb = { min: 5000 * employeeFactor, max: 12000 * employeeFactor, label: 'Datenschutz-Kanzlei (Setup)' };
      newBreakdown.annual.dsb = { min: 9600 * employeeFactor, max: 30000 * employeeFactor, label: 'Kanzlei jährlich' };
    } else {
      newBreakdown.initial.dsb = { min: 1500 * employeeFactor, max: 3000 * employeeFactor, label: 'Hybrid-Lösung (Setup)' };
      newBreakdown.annual.dsb = { min: 3588 * employeeFactor, max: 10788 * employeeFactor, label: 'Hybrid jährlich' };
    }

    const documentationReduction = hasExistingMeasures ? 0.5 : 1;
    newBreakdown.initial.documentation = {
      min: Math.round(2000 * employeeFactor * complexityMultiplier * documentationReduction),
      max: Math.round(10000 * employeeFactor * complexityMultiplier * documentationReduction),
      label: 'Dokumentation & VVT'
    };

    newBreakdown.initial.tom = {
      min: Math.round(1500 * employeeFactor * complexityMultiplier),
      max: Math.round(8000 * employeeFactor * complexityMultiplier),
      label: 'TOM Implementation'
    };

    if (needsTraining) {
      newBreakdown.initial.training = {
        min: 500 * Math.ceil(employees / 20),
        max: 1500 * Math.ceil(employees / 20),
        label: 'Mitarbeiterschulungen'
      };
      newBreakdown.annual.training = {
        min: 500 * Math.ceil(employees / 20),
        max: 1000 * Math.ceil(employees / 20),
        label: 'Jährliche Schulungen'
      };
    }

    newBreakdown.initial.tools = {
      min: Math.round(1000 * employeeFactor * 0.5),
      max: Math.round(5000 * employeeFactor * 0.5),
      label: 'Software & Tools'
    };

    newBreakdown.annual.maintenance = {
      min: Math.round(1000 * employeeFactor * 0.3),
      max: Math.round(5000 * employeeFactor * 0.3),
      label: 'Wartung & Updates'
    };

    newBreakdown.annual.tools = {
      min: Math.round(1200 * employeeFactor * 0.4),
      max: Math.round(6000 * employeeFactor * 0.4),
      label: 'Software-Lizenzen'
    };

    if (dataProcessingComplexity === 'high') {
      newBreakdown.initial.consulting = {
        min: Math.round(3000 * employeeFactor),
        max: Math.round(10000 * employeeFactor),
        label: 'Beratung & Gap-Analyse'
      };
    }

    if (industry !== 'general') {
      const industrySurcharge = Math.round((newBreakdown.initial.dsb.min + newBreakdown.initial.documentation.min) * (industryMultiplier - 1));
      newBreakdown.initial.industry = {
        min: industrySurcharge,
        max: industrySurcharge * 2,
        label: 'Branchen-Spezialisierung'
      };
    }

    Object.values(newBreakdown.initial).forEach((item: any) => {
      initialMin += item.min;
      initialMax += item.max;
    });

    Object.values(newBreakdown.annual).forEach((item: any) => {
      annualMin += item.min;
      annualMax += item.max;
    });

    setInitialCosts({ min: Math.round(initialMin), max: Math.round(initialMax) });
    setAnnualCosts({ min: Math.round(annualMin), max: Math.round(annualMax) });
    setBreakdown(newBreakdown);
  };

  const getEmployeeLabel = () => {
    if (employees <= 10) return 'Klein (1-10 MA)';
    if (employees <= 50) return 'Mittel (11-50 MA)';
    if (employees <= 100) return 'Groß (51-100 MA)';
    return 'Enterprise (100+ MA)';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <SEOHead
        title="DSGVO Kostenrechner 2025 - Compliance-Kosten berechnen"
        description="Interaktiver DSGVO Kostenrechner: Berechnen Sie Initial- und laufende Compliance-Kosten basierend auf Unternehmensgröße, Branche und Komplexität."
        canonical="/assessment-center/dsgvo-kosten-rechner"
        keywords="DSGVO Kostenrechner, Datenschutz Kosten berechnen, DSGVO Budget Calculator, Compliance Kosten Rechner"
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
              <BreadcrumbLink href="/assessment-center">Assessment Center</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>DSGVO Kostenrechner</BreadcrumbPage>
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20"
            >
              <Calculator className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">Kostenrechner</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-white">DSGVO-Kosten</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                präzise kalkulieren
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Berechnen Sie Ihre individuellen DSGVO-Compliance-Kosten basierend auf Ihrer Unternehmenssituation. Eine <Link to="/wissen/kosten/dsgvo-compliance-kosten" className="text-blue-400 hover:text-blue-300 underline font-semibold">detaillierte Aufschlüsselung aller DSGVO-Kosten</Link> inkl. versteckter Kostenfallen und Einsparpotenziale finden Sie in unserem Kostenguide.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-blue-500/30 bg-slate-800/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-400" />
                  Ihre Unternehmensdaten
                </h2>

                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-white font-semibold flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-400" />
                        Anzahl Mitarbeiter
                      </label>
                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                        {employees} MA - {getEmployeeLabel()}
                      </Badge>
                    </div>
                    <Slider
                      value={[employees]}
                      onValueChange={(value) => setEmployees(value[0])}
                      min={1}
                      max={200}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold mb-3 block flex items-center gap-2">
                      <Building2 className="h-5 w-5 text-purple-400" />
                      Datenverarbeitungs-Komplexität
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {['low', 'medium', 'high'].map((level) => (
                        <button
                          key={level}
                          onClick={() => setDataProcessingComplexity(level)}
                          className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                            dataProcessingComplexity === level
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                              : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                          }`}
                        >
                          {level === 'low' ? 'Gering' : level === 'medium' ? 'Mittel' : 'Hoch'}
                        </button>
                      ))}
                    </div>
                    <p className="text-slate-400 text-xs mt-2">
                      {dataProcessingComplexity === 'low' && 'Wenige Tools, einfache Prozesse, keine sensiblen Daten'}
                      {dataProcessingComplexity === 'medium' && 'Standard-Software, normale B2B/B2C-Prozesse'}
                      {dataProcessingComplexity === 'high' && 'Viele Tools, internationale Datenflüsse, KI-Systeme, sensible Daten'}
                    </p>
                  </div>

                  <div>
                    <label className="text-white font-semibold mb-3 block">Branche</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'general', label: 'Allgemein' },
                        { id: 'tech', label: 'Tech/SaaS' },
                        { id: 'healthcare', label: 'Gesundheit' },
                        { id: 'finance', label: 'Finanzen' }
                      ].map((ind) => (
                        <button
                          key={ind.id}
                          onClick={() => setIndustry(ind.id)}
                          className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                            industry === ind.id
                              ? 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg'
                              : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                          }`}
                        >
                          {ind.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-white font-semibold mb-3 block">DSB-Modell</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'hybrid', label: 'Hybrid (empfohlen)' },
                        { id: 'freelancer', label: 'Freiberufler' },
                        { id: 'agency', label: 'Kanzlei' },
                        { id: 'internal', label: 'Intern' }
                      ].map((model) => (
                        <button
                          key={model.id}
                          onClick={() => setDsbModel(model.id)}
                          className={`px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                            dsbModel === model.id
                              ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg'
                              : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                          }`}
                        >
                          {model.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={hasExistingMeasures}
                        onChange={(e) => setHasExistingMeasures(e.target.checked)}
                        className="w-5 h-5 rounded border-2 border-slate-600 bg-slate-700 checked:bg-blue-500 checked:border-blue-500 transition-all"
                      />
                      <span className="text-slate-300 group-hover:text-white transition-colors">
                        Bestehende DSGVO-Maßnahmen vorhanden
                      </span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={needsTraining}
                        onChange={(e) => setNeedsTraining(e.target.checked)}
                        className="w-5 h-5 rounded border-2 border-slate-600 bg-slate-700 checked:bg-blue-500 checked:border-blue-500 transition-all"
                      />
                      <span className="text-slate-300 group-hover:text-white transition-colors">
                        Mitarbeiterschulungen erforderlich
                      </span>
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="border-2 border-green-500/30 bg-gradient-to-br from-slate-800/60 to-green-900/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl">
                      <Euro className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">Initiale Kosten</h3>
                      <p className="text-sm text-slate-400">Einmalig im ersten Jahr</p>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <div className="text-5xl font-black text-green-400 mb-2">
                      {initialCosts.min.toLocaleString()}€ - {initialCosts.max.toLocaleString()}€
                    </div>
                    <p className="text-slate-300">Geschätzter Kostenbereich</p>
                  </div>

                  <div className="space-y-3">
                    {Object.entries(breakdown.initial || {}).map(([key, item]: [string, any]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-slate-900/30 rounded-lg">
                        <span className="text-slate-300 text-sm">{item.label}</span>
                        <span className="text-white font-bold text-sm">{item.min.toLocaleString()}€ - {item.max.toLocaleString()}€</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500/30 bg-gradient-to-br from-slate-800/60 to-blue-900/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">Jährliche Kosten</h3>
                      <p className="text-sm text-slate-400">Ab Jahr 2</p>
                    </div>
                  </div>

                  <div className="text-center mb-8">
                    <div className="text-5xl font-black text-blue-400 mb-2">
                      {annualCosts.min.toLocaleString()}€ - {annualCosts.max.toLocaleString()}€
                    </div>
                    <p className="text-slate-300">Laufende Kosten pro Jahr</p>
                  </div>

                  <div className="space-y-3">
                    {Object.entries(breakdown.annual || {}).map(([key, item]: [string, any]) => (
                      <div key={key} className="flex justify-between items-center p-3 bg-slate-900/30 rounded-lg">
                        <span className="text-slate-300 text-sm">{item.label}</span>
                        <span className="text-white font-bold text-sm">{item.min.toLocaleString()}€ - {item.max.toLocaleString()}€</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border-2 border-orange-500/30 bg-slate-800/40 backdrop-blur-sm mb-12">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Info className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Wichtige Hinweise zur Kostenkalkulation:</h4>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Die Berechnung basiert auf Durchschnittswerten aus über 500 DSGVO-Implementierungen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>Versteckte Kosten (Arbeitszeitaufwand intern, Opportunitätskosten) sind nicht enthalten</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Bei Hybrid-Modellen sind Software-Lizenzen meist im Preis inklusive</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span>Branchen mit sensiblen Daten (Gesundheit, Finanzen) haben 30-50% höhere Kosten</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Download className="h-5 w-5 text-blue-400" />
                  Detaillierte Kostenanalyse
                </h3>
                <p className="text-slate-300 mb-6">
                  Laden Sie eine ausführliche PDF-Analyse mit allen Kostenpositionen und Einsparmöglichkeiten herunter.
                </p>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white">
                  <Download className="mr-2 h-5 w-5" />
                  PDF herunterladen
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-400" />
                  Kostenlose Beratung
                </h3>
                <p className="text-slate-300 mb-6">
                  Lassen Sie sich von unseren Experten beraten und finden Sie die optimale DSGVO-Lösung für Ihr Budget.
                </p>
                <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white" asChild>
                  <Link to="/kontakt">
                    Jetzt Beratung vereinbaren
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default DsgvoKostenRechner;
