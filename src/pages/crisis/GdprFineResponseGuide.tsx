import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Scale, CheckCircle2, ArrowRight, ArrowLeft, Clock, AlertTriangle, Shield, Users, FileText, Download, Target, Phone, Timer, Circle, BookOpen, Calendar, Building2, Briefcase, AlertOctagon, Info, Copy, Star, UserCheck, TrendingUp, BarChart3, Award, Euro, Gavel, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const GdprFineResponseGuide: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const responsePhases = [
    {
      id: 0,
      title: "Immediate Response & Assessment",
      timeframe: "0-24 Stunden",
      priority: "KRITISCH",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500",
      description: "Sofortige Reaktion auf Bußgeldbescheid und erste Bewertung",
      keyActions: [
        "Bußgeldbescheid vollständig analysieren",
        "Rechtsbeistand sofort kontaktieren",
        "Fristen für Einspruch/Stellungnahme notieren",
        "Interne Krisenkommunikation aktivieren",
        "Dokumentensicherung und -sammlung starten"
      ],
      fineCategories: [
        { range: "€0 - €20.000", severity: "Niedrig", response: "Interne Bearbeitung" },
        { range: "€20.000 - €100.000", severity: "Mittel", response: "Rechtsberatung empfohlen" },
        { range: "€100.000 - €1M", severity: "Hoch", response: "Spezialisierte Kanzlei" },
        { range: "€1M+", severity: "Kritisch", response: "Top-Tier Legal + PR" }
      ]
    },
    {
      id: 1,
      title: "Legal Strategy Development",
      timeframe: "1-7 Tage",
      priority: "KRITISCH",
      icon: Gavel,
      color: "from-orange-500 to-red-500",
      description: "Entwicklung der rechtlichen Verteidigungsstrategie",
      legalOptions: [
        "Vollständige Akzeptanz und Zahlung",
        "Teilweise Akzeptanz mit Verhandlung",
        "Einspruch mit Begründung",
        "Gerichtliche Anfechtung",
        "Außergerichtliche Verhandlung"
      ],
      defenseStrategies: [
        "Verfahrensfehler der Behörde",
        "Verhältnismäßigkeit der Strafe",
        "Kooperative Haltung betonen",
        "Schadensbegrenzung nachweisen",
        "Präventive Maßnahmen aufzeigen"
      ]
    },
    {
      id: 2,
      title: "Evidence Collection & Documentation",
      timeframe: "1-2 Wochen",
      priority: "HOCH",
      icon: FileText,
      color: "from-yellow-500 to-orange-500",
      description: "Sammlung von Beweisen und Dokumentation für die Verteidigung",
      evidenceTypes: [
        "Compliance-Bemühungen vor Vorfall",
        "Sofortmaßnahmen nach Vorfall",
        "Investitionen in Datenschutz",
        "Schulungsnachweis",
        "Externe Audits und Zertifikate"
      ]
    },
    {
      id: 3,
      title: "Negotiation & Settlement",
      timeframe: "2-8 Wochen",
      priority: "HOCH",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      description: "Verhandlungen mit der Aufsichtsbehörde",
      negotiationPoints: [
        "Reduzierung der Bußgeldhöhe",
        "Ratenzahlung vereinbaren",
        "Compliance-Programm als Milderung",
        "Zukunftsgerichtete Vereinbarungen",
        "Öffentlichkeitsarbeit koordinieren"
      ]
    },
    {
      id: 4,
      title: "Financial & Business Impact Management",
      timeframe: "Ongoing",
      priority: "WICHTIG",
      icon: Euro,
      color: "from-indigo-500 to-purple-500",
      description: "Management der finanziellen und geschäftlichen Auswirkungen",
      impactAreas: [
        "Cash Flow Management",
        "Versicherungsansprüche prüfen",
        "Investor Relations",
        "Kundenbeziehungen",
        "Reputation Recovery"
      ]
    },
    {
      id: 5,
      title: "Long-term Compliance Enhancement",
      timeframe: "3-12 Monate",
      priority: "WICHTIG",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      description: "Langfristige Verbesserung des Compliance-Programms",
      improvements: [
        "DSGVO-Managementsystem stärken",
        "Regelmäßige Compliance-Audits",
        "Mitarbeiterschulungen intensivieren",
        "Technische Maßnahmen ausbauen",
        "Behördenbeziehungen pflegen"
      ]
    }
  ];

  const fineFactors = [
    { factor: "Art der Verletzung", weight: "Hoch", examples: ["Einwilligung", "Datenübertragung", "Sicherheit"] },
    { factor: "Vorsatz/Fahrlässigkeit", weight: "Sehr hoch", examples: ["Absichtlich", "Grob fahrlässig", "Leicht fahrlässig"] },
    { factor: "Schadensbegrenzung", weight: "Mittel", examples: ["Sofortmaßnahmen", "Betroffenen-Info", "Behörden-Kooperation"] },
    { factor: "Unternehmensgröße", weight: "Hoch", examples: ["Jahresumsatz", "Mitarbeiterzahl", "Marktposition"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y }}
        className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
            >
              <Scale className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Legal Defense</span>
              <Gavel className="h-5 w-5 text-pink-400" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8"
            >
              <span className="text-white">DSGVO</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Bußgeld
              </span>
              <br />
              <span className="text-white">Response</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              <span className="font-semibold text-purple-300">Strukturierte Verteidigung</span> gegen 
              DSGVO-Bußgelder und -Sanktionen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold">
                <Gavel className="mr-2 h-5 w-5" />
                Legal Response starten
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                <Download className="mr-2 h-5 w-5" />
                Defense Toolkit
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Fine Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Euro className="h-6 w-6 text-purple-400" />
              DSGVO-Bußgeld Kategorien
            </h3>
            
            <div className="grid lg:grid-cols-4 gap-4">
              {responsePhases[0].fineCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/60 rounded-xl p-6 border border-slate-700"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-white mb-2">{category.range}</div>
                    <Badge className={cn(
                      "mb-3 text-xs",
                      category.severity === 'Niedrig' ? "bg-green-500/20 text-green-300 border-green-500/30" :
                      category.severity === 'Mittel' ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" :
                      category.severity === 'Hoch' ? "bg-orange-500/20 text-orange-300 border-orange-500/30" :
                      "bg-red-500/20 text-red-300 border-red-500/30"
                    )}>
                      {category.severity}
                    </Badge>
                    <div className="text-sm text-slate-400">{category.response}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Response Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-8">
            {responsePhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="border-2 border-slate-700/50 bg-slate-800/80 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <motion.div 
                        whileHover={{ scale: 1.1 }}
                        className={cn(
                          "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                          phase.color
                        )}
                      >
                        <phase.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                          <Badge className={cn(
                            phase.priority === 'KRITISCH' 
                              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse"
                              : phase.priority === 'HOCH'
                              ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                              : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                          )}>
                            {phase.priority}
                          </Badge>
                        </div>
                        <p className="text-slate-300 mb-2">{phase.description}</p>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {phase.timeframe}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Actions */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-purple-400" />
                        Wichtige Maßnahmen
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.keyActions?.map((action, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                            <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
                            <span className="text-sm text-slate-300">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Phase-specific content */}
                    {phase.legalOptions && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Rechtliche Optionen</h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          {phase.legalOptions.map((option, idx) => (
                            <div key={idx} className="bg-slate-700/50 rounded-xl p-3 text-center">
                              <span className="text-sm text-slate-300">{option}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {phase.defenseStrategies && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Verteidigungsstrategien</h4>
                        <div className="space-y-2">
                          {phase.defenseStrategies.map((strategy, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                              <Shield className="w-5 h-5 text-blue-400 flex-shrink-0" />
                              <span className="text-sm text-slate-300">{strategy}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fine Factors */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Bußgeld-Faktoren
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Kriterien der Aufsichtsbehörden für Bußgeldbemessung
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {fineFactors.map((factor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{factor.factor}</h3>
                  <Badge className={cn(
                    "text-xs",
                    factor.weight === 'Sehr hoch' ? "bg-red-500/20 text-red-300 border-red-500/30" :
                    factor.weight === 'Hoch' ? "bg-orange-500/20 text-orange-300 border-orange-500/30" :
                    "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                  )}>
                    {factor.weight}
                  </Badge>
                </div>
                <div className="space-y-2">
                  {factor.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Circle className="h-3 w-3 text-purple-400" />
                      <span className="text-sm text-slate-300">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex justify-between items-center">
            <Button asChild variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
              <Link to="/wissen/krisenmanagement/vendor-data-breach">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Vendor Data Breach Response
              </Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
              <Link to="/wissen/krisenmanagement/business-continuity">
                Business Continuity Planning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GdprFineResponseGuide;