import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Target, 
  Shield, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  Clock,
  Users,
  Download,
  Eye,
  Calendar,
  Zap,
  AlertOctagon,
  ExternalLink,
  Database,
  Scale,
  Settings,
  UserCheck,
  FileCheck,
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const RiskManagement: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const riskTools = [
    {
      id: 'dsfa',
      title: 'Datenschutz-Folgenabschätzung (DSFA)',
      description: 'Systematische Analyse und Bewertung von Datenschutzrisiken bei neuen Verarbeitungstätigkeiten',
      icon: FileCheck,
      color: 'from-blue-500 to-indigo-600',
      difficulty: 'Fortgeschritten',
      duration: '2-4 Stunden',
      link: '/wissen/leitfaden/dsfa-durchfuehrung',
      steps: [
        'Notwendigkeit der DSFA prüfen',
        'Verarbeitungstätigkeiten beschreiben',
        'Risiken identifizieren und bewerten',
        'Schutzmaßnahmen definieren'
      ]
    },
    {
      id: 'tom-bewertung',
      title: 'TOM Bewertung & Audit',
      description: 'Bewertung technischer und organisatorischer Maßnahmen für angemessenen Datenschutz',
      icon: Shield,
      color: 'from-emerald-500 to-teal-600',
      difficulty: 'Mittel',
      duration: '1-2 Stunden',
      link: '/wissen/leitfaden/tom-massnahmen',
      steps: [
        'Aktuelle TOM dokumentieren',
        'Schutzniveau bewerten',
        'Schwachstellen identifizieren',
        'Verbesserungsmaßnahmen planen'
      ]
    },
    {
      id: 'vendor-risk',
      title: 'Vendor Risk Assessment',
      description: 'Systematische Bewertung von Datenschutzrisiken bei Auftragsverarbeitern und Partnern',
      icon: Building2,
      color: 'from-orange-500 to-red-600',
      difficulty: 'Fortgeschritten',
      duration: '3-5 Stunden',
      link: '/wissen/risk-management/vendor-assessment',
      steps: [
        'Lieferanten kategorisieren',
        'Datenschutz-Fragebögen versenden',
        'Verträge und Zertifikate prüfen',
        'Risikobewertung dokumentieren'
      ]
    },
    {
      id: 'incident-response',
      title: 'Incident Response Plan',
      description: 'Vorbereitung und Durchführung von Notfallmaßnahmen bei Datenschutzverletzungen',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-600',
      difficulty: 'Kritisch',
      duration: '30 Min - 72h',
      link: '/wissen/leitfaden/data-breach-notfall',
      steps: [
        'Vorfall identifizieren und bewerten',
        '72h-Meldung vorbereiten',
        'Betroffene informieren',
        'Schadensbegrenzung einleiten'
      ]
    }
  ];

  const complianceMonitoring = [
    {
      title: 'Kontinuierliche Überwachung',
      description: 'Automatisierte Monitoring-Tools für laufende Compliance-Kontrolle',
      icon: Eye,
      metrics: ['98% Automatisierung', '24/7 Monitoring', 'Real-time Alerts']
    },
    {
      title: 'Risiko-Dashboards',
      description: 'Zentrale Übersicht über alle identifizierten Datenschutzrisiken',
      icon: Target,
      metrics: ['Live Updates', 'Risk Scoring', 'Trend Analysis']
    },
    {
      title: 'Audit-Vorbereitung',
      description: 'Systematische Vorbereitung auf externe Datenschutz-Audits',
      icon: UserCheck,
      metrics: ['Checklisten', 'Dokumentation', 'Mock Audits']
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Mittel': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'Fortgeschritten': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'Kritisch': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y, opacity }}
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full mb-8 border border-orange-500/20"
            >
              <Target className="h-5 w-5 text-orange-400 animate-spin-slow" />
              <span className="text-sm font-semibold text-orange-300">Risk Management</span>
              <AlertTriangle className="h-5 w-5 text-red-400 animate-pulse" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Risk</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Management
              </span>
              <br />
              <span className="text-white">für</span>{' '}
              <span className="bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Compliance
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Professionelle Tools und Methoden für <span className="font-semibold text-orange-300">systematische Risikoanalyse</span> 
              und kontinuierliches Compliance-Monitoring.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Target className="mr-2 h-5 w-5" />
                  DSFA starten
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-orange-500/30 hover:border-orange-400 text-orange-300 hover:bg-orange-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                  <Eye className="mr-2 h-5 w-5" />
                  Risk Dashboard
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Risk Management Tools */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Risk Assessment Tools
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Professionelle Werkzeuge für systematische Risikoanalyse und Compliance-Bewertung
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {riskTools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={cn(
                  "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                  `bg-gradient-to-r ${tool.color}`,
                  "opacity-0 group-hover:opacity-30"
                )} />
                
                <Card className="relative h-full border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                  
                  <CardContent className="relative p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={cn(
                          "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                          tool.color
                        )}
                      >
                        <tool.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="flex flex-col gap-2 items-end">
                        <Badge className={getDifficultyColor(tool.difficulty)}>
                          {tool.difficulty}
                        </Badge>
                        <Badge className="bg-slate-700 text-slate-200">
                          <Clock className="h-3 w-3 mr-1" />
                          {tool.duration}
                        </Badge>
                      </div>
                    </div>

                    <div className="mb-6 flex-grow">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-orange-300 transition-colors">{tool.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {tool.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3">Arbeitsschritte:</h4>
                        <div className="space-y-2">
                          {tool.steps.map((step, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.4 }}
                              className="flex items-center gap-2"
                            >
                              <div className={cn(
                                "w-6 h-6 rounded-full bg-gradient-to-r flex items-center justify-center text-xs font-bold text-white",
                                tool.color
                              )}>
                                {idx + 1}
                              </div>
                              <span className="text-sm text-slate-300">{step}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-auto"
                    >
                      <Button asChild className={cn(
                        "w-full bg-gradient-to-r text-white border-0 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300",
                        tool.color
                      )}>
                        <Link to={tool.link} className="flex items-center justify-center gap-2">
                          <span>Tool starten</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Monitoring */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-orange-900/30 to-slate-800/50" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Compliance Monitoring
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Kontinuierliche Überwachung und Bewertung Ihrer Compliance-Performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {complianceMonitoring.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 mb-6 shadow-lg">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-slate-300 mb-6">{item.description}</p>
                    
                    <div className="space-y-2">
                      {item.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                          <span className="text-sm text-slate-300">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RiskManagement;