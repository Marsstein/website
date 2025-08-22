import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Rocket, CheckCircle2, ArrowRight, ArrowLeft, Clock, AlertTriangle, Shield, Users, FileText, Download, Target, Phone, Timer, Circle, BookOpen, Calendar, Building2, Briefcase, AlertOctagon, Info, Copy, Star, UserCheck, TrendingUp, BarChart3, Award, Activity, Database, Server, Wifi, RefreshCw, Zap, Settings, Eye, Flag, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BusinessContinuityGuide: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const currentUrl = "https://marsstein.com/wissen/krisenmanagement/business-continuity";

  const continuityPhases = [
    {
      id: 0,
      title: "Crisis Impact Assessment",
      timeframe: "0-4 Stunden",
      priority: "KRITISCH",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500",
      description: "Bewertung der Auswirkungen der Compliance-Krise auf Geschäftsprozesse",
      assessmentAreas: [
        "Kritische Geschäftsprozesse identifizieren",
        "Abhängigkeiten und Risiken bewerten",
        "Compliance-Ausfälle kategorisieren",
        "Zeitkritische Entscheidungen treffen",
        "Stakeholder-Prioritäten festlegen"
      ],
      impactMatrix: [
        { process: "Kundenservice", impact: "HOCH", mitigation: "Alternative Kanäle" },
        { process: "Datenverarbeitung", impact: "KRITISCH", mitigation: "Manual Backup" },
        { process: "Zahlungsabwicklung", impact: "KRITISCH", mitigation: "Notfall-Provider" },
        { process: "Reporting", impact: "MITTEL", mitigation: "Verzögerung akzeptabel" }
      ]
    },
    {
      id: 1,
      title: "Alternative Process Activation",
      timeframe: "2-12 Stunden",
      priority: "KRITISCH",
      icon: RefreshCw,
      color: "from-orange-500 to-red-500",
      description: "Aktivierung alternativer Prozesse und Notfallsysteme",
      alternativeStrategies: [
        "Manual Workarounds implementieren",
        "Backup-Systeme aktivieren",
        "Notfall-Dienstleister einschalten",
        "Prozess-Vereinfachungen umsetzen",
        "Temporäre Lösungen etablieren"
      ],
      activationSteps: [
        "Backup-Systeme Status prüfen",
        "Notfall-Zugänge aktivieren",
        "Teams über Prozessänderungen informieren",
        "Monitoring für alternative Prozesse",
        "Performance-Tracking etablieren"
      ]
    },
    {
      id: 2,
      title: "Stakeholder Communication & Management",
      timeframe: "Ongoing",
      priority: "HOCH",
      icon: Users,
      color: "from-yellow-500 to-orange-500",
      description: "Kontinuierliche Kommunikation mit allen Stakeholder-Gruppen",
      stakeholderGroups: [
        {
          group: "Kunden",
          frequency: "Stündlich",
          channels: ["Email", "Website", "Support"],
          messaging: "Service-Updates, Alternative, ETA"
        },
        {
          group: "Mitarbeiter",
          frequency: "Alle 4h",
          channels: ["Intranet", "Meetings", "Slack"],
          messaging: "Prozessänderungen, Prioritäten, Support"
        },
        {
          group: "Partner",
          frequency: "Täglich",
          channels: ["Direct Contact", "Portal"],
          messaging: "Impact, Workarounds, Timeline"
        },
        {
          group: "Regulatoren",
          frequency: "Nach Bedarf",
          channels: ["Official Channels"],
          messaging: "Compliance-Status, Maßnahmen"
        }
      ]
    },
    {
      id: 3,
      title: "Resource Reallocation & Scaling",
      timeframe: "6-48 Stunden",
      priority: "HOCH",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      description: "Umverteilung von Ressourcen für kritische Prozesse",
      resourceTypes: [
        {
          type: "Personal",
          actions: ["Cross-Training aktivieren", "Externe Unterstützung", "Prioritäten neu setzen"],
          timeline: "Sofort"
        },
        {
          type: "Technologie",
          actions: ["Cloud-Scaling", "Backup-Systeme", "Manual Tools"],
          timeline: "2-6h"
        },
        {
          type: "Finanzen",
          actions: ["Notfall-Budget", "Beschaffung beschleunigen", "Externe Services"],
          timeline: "4-12h"
        },
        {
          type: "Infrastruktur",
          actions: ["Alternative Standorte", "Remote-Arbeit", "Externe Kapazitäten"],
          timeline: "12-24h"
        }
      ]
    },
    {
      id: 4,
      title: "Performance Monitoring & Optimization",
      timeframe: "Ongoing",
      priority: "MITTEL",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500",
      description: "Überwachung und Optimierung der Notfall-Prozesse",
      monitoringMetrics: [
        {
          category: "Service Level",
          metrics: ["Response Time", "Availability", "Quality Score"],
          targets: ["<2x Normal", ">95%", ">80% Normal"],
          frequency: "Real-time"
        },
        {
          category: "Customer Impact",
          metrics: ["Satisfaction", "Complaints", "Churn Rate"],
          targets: [">3.5/5", "<2x Normal", "<5% Extra"],
          frequency: "Daily"
        },
        {
          category: "Operational",
          metrics: ["Cost", "Efficiency", "Error Rate"],
          targets: ["Budget+50%", ">60% Normal", "<10%"],
          frequency: "Daily"
        },
        {
          category: "Compliance",
          metrics: ["Regulatory Status", "Risk Level", "Audit Readiness"],
          targets: ["Green", "Medium", "Prepared"],
          frequency: "Weekly"
        }
      ]
    },
    {
      id: 5,
      title: "Recovery Planning & Implementation",
      timeframe: "1-4 Wochen",
      priority: "WICHTIG",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      description: "Planung und Umsetzung der vollständigen Wiederherstellung",
      recoveryPhases: [
        {
          phase: "Stabilisierung",
          timeline: "Woche 1",
          focus: "Notfall-Prozesse optimieren",
          success: "Stabile Service-Level"
        },
        {
          phase: "Normalisierung",
          timeline: "Woche 2-3",
          focus: "Schrittweise Rückkehr zu Standard-Prozessen",
          success: "80% normale Kapazität"
        },
        {
          phase: "Verbesserung",
          timeline: "Woche 4+",
          focus: "Lessons Learned implementieren",
          success: "Resilience gestärkt"
        }
      ],
      successCriteria: [
        "Alle kritischen Services wiederhergestellt",
        "Compliance-Status vollständig",
        "Customer Satisfaction normalisiert",
        "Team-Moral und -Produktivität stabil",
        "Finanzielle Auswirkungen minimiert"
      ]
    }
  ];

  const businessProcesses = [
    { process: "Customer Onboarding", criticality: "HOCH", rto: "4h", backup: "Manual Processing" },
    { process: "Payment Processing", criticality: "KRITISCH", rto: "1h", backup: "Alternative PSP" },
    { process: "Data Analytics", criticality: "MITTEL", rto: "24h", backup: "Delayed Reporting" },
    { process: "Support Ticketing", criticality: "HOCH", rto: "2h", backup: "Email + Phone" },
    { process: "Compliance Reporting", criticality: "HOCH", rto: "8h", backup: "Manual Reports" }
  ];

  const riskCategories = [
    { risk: "Service Disruption", probability: "Hoch", impact: "Hoch", mitigation: "Redundancy" },
    { risk: "Data Loss", probability: "Mittel", impact: "Kritisch", mitigation: "Backups" },
    { risk: "Regulatory Fine", probability: "Hoch", impact: "Hoch", mitigation: "Legal Support" },
    { risk: "Customer Churn", probability: "Mittel", impact: "Hoch", mitigation: "Communication" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <Helmet>
        <title>Business Continuity in Compliance-Krisen – BCP Strategien</title>
        <meta name="description" content="Geschäftskontinuität während Compliance-Krisen sichern. Notfallpläne & Alternative Prozesse für Unternehmen. Jetzt Resilienz stärken!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={currentUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content="Business Continuity in Compliance-Krisen – BCP Strategien" />
        <meta property="og:description" content="Geschäftskontinuität während Compliance-Krisen sichern. Notfallpläne & Alternative Prozesse für Unternehmen. Jetzt Resilienz stärken!" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Business Continuity Planning Guide",
            "description": "Geschäftskontinuität während Compliance-Krisen sicherstellen",
            "url": currentUrl,
            "publisher": {
              "@type": "Organization",
              "name": "MarsStein"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": currentUrl
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Wissen",
                "item": "https://marsstein.com/wissen"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Krisenmanagement",
                "item": "https://marsstein.com/wissen/krisenmanagement"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Business Continuity",
                "item": currentUrl
              }
            ]
          })}
        </script>
      </Helmet>
      
      <style>{`
        h2, h3, h4 { scroll-margin-top: 96px; }
        
        @media (max-width: 768px) {
          .toc-mobile-toggle {
            display: flex;
          }
          .toc-desktop {
            display: none;
          }
        }
        
        @media (min-width: 768px) {
          .toc-mobile-toggle {
            display: none;
          }
          .toc-desktop {
            display: block;
          }
        }
      `}</style>
      
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20"
            >
              <Rocket className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-300">Business Resilience</span>
              <TrendingUp className="h-5 w-5 text-green-400" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="block"
              >
                <span className="text-white">Business Continuity</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                  in Compliance-Krisen
                </span>
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              <span className="font-semibold text-emerald-300">Geschäftskontinuität</span> während 
              Compliance-Krisen sicherstellen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold">
                <Rocket className="mr-2 h-5 w-5" />
                Continuity Plan starten
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:bg-emerald-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                <Download className="mr-2 h-5 w-5" />
                BCP Templates
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Table of Contents */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Mobile ToC Toggle */}
          <div className="toc-mobile-toggle mb-6">
            <Button
              onClick={() => setIsTocOpen(!isTocOpen)}
              variant="outline"
              className="w-full border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:bg-emerald-500/10"
            >
              <span className="flex items-center justify-center gap-2">
                Inhaltsverzeichnis
                <ChevronDown className={cn("h-4 w-4 transition-transform", isTocOpen && "rotate-180")} />
              </span>
            </Button>
          </div>
          
          {/* Desktop ToC */}
          <nav aria-label="Inhaltsverzeichnis" className="toc-desktop bg-slate-800/60 rounded-xl p-6 mb-8 border border-slate-700/50">
            <h2 className="text-xl font-bold text-white mb-4">Inhaltsverzeichnis</h2>
            <ol className="space-y-2 text-slate-300">
              <li><a href="#kritische-prozesse" className="hover:text-emerald-400 transition-colors">1. Kritische Geschäftsprozesse</a></li>
              <li><a href="#impact-assessment" className="hover:text-emerald-400 transition-colors">2. Crisis Impact Assessment</a></li>
              <li><a href="#alternative-prozesse" className="hover:text-emerald-400 transition-colors">3. Alternative Prozesse</a></li>
              <li><a href="#stakeholder-kommunikation" className="hover:text-emerald-400 transition-colors">4. Stakeholder Management</a></li>
              <li><a href="#ressourcen-management" className="hover:text-emerald-400 transition-colors">5. Ressourcen-Reallokation</a></li>
              <li><a href="#monitoring" className="hover:text-emerald-400 transition-colors">6. Performance Monitoring</a></li>
              <li><a href="#recovery" className="hover:text-emerald-400 transition-colors">7. Recovery Planning</a></li>
              <li><a href="#risk-assessment" className="hover:text-emerald-400 transition-colors">8. Risk Assessment Matrix</a></li>
            </ol>
          </nav>
          
          {/* Mobile ToC Content */}
          {isTocOpen && (
            <nav aria-label="Inhaltsverzeichnis" className="md:hidden bg-slate-800/60 rounded-xl p-6 mb-8 border border-slate-700/50">
              <h2 className="text-xl font-bold text-white mb-4">Inhaltsverzeichnis</h2>
              <ol className="space-y-2 text-slate-300">
                <li><a href="#kritische-prozesse" className="hover:text-emerald-400 transition-colors" onClick={() => setIsTocOpen(false)}>1. Kritische Geschäftsprozesse</a></li>
                <li><a href="#impact-assessment" className="hover:text-emerald-400 transition-colors" onClick={() => setIsTocOpen(false)}>2. Crisis Impact Assessment</a></li>
                <li><a href="#alternative-prozesse" className="hover:text-emerald-400 transition-colors" onClick={() => setIsTocOpen(false)}>3. Alternative Prozesse</a></li>
                <li><a href="#stakeholder-kommunikation" className="hover:text-emerald-400 transition-colors" onClick={() => setIsTocOpen(false)}>4. Stakeholder Management</a></li>
                <li><a href="#ressourcen-management" className="hover:text-emerald-400 transition-colors" onClick={() => setIsTocOpen(false)}>5. Ressourcen-Reallokation</a></li>
                <li><a href="#monitoring" className="hover:text-emerald-400 transition-colors" onClick={() => setIsTocOpen(false)}>6. Performance Monitoring</a></li>
                <li><a href="#recovery" className="hover:text-emerald-400 transition-colors" onClick={() => setIsTocOpen(false)}>7. Recovery Planning</a></li>
                <li><a href="#risk-assessment" className="hover:text-emerald-400 transition-colors" onClick={() => setIsTocOpen(false)}>8. Risk Assessment Matrix</a></li>
              </ol>
            </nav>
          )}
        </div>
      </section>

      {/* Business Process Matrix */}
      <section id="kritische-prozesse" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-2 border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Activity className="h-6 w-6 text-emerald-400" />
              Kritische Geschäftsprozesse
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left text-slate-300 pb-3">Prozess</th>
                    <th className="text-left text-slate-300 pb-3">Kritikalität</th>
                    <th className="text-left text-slate-300 pb-3">RTO</th>
                    <th className="text-left text-slate-300 pb-3">Backup-Lösung</th>
                  </tr>
                </thead>
                <tbody>
                  {businessProcesses.map((process, index) => (
                    <tr key={index} className="border-b border-slate-800">
                      <td className="py-3 text-white font-semibold">{process.process}</td>
                      <td className="py-3">
                        <Badge className={cn(
                          "text-xs",
                          process.criticality === 'KRITISCH' ? "bg-red-500/20 text-red-300 border-red-500/30" :
                          process.criticality === 'HOCH' ? "bg-orange-500/20 text-orange-300 border-orange-500/30" :
                          "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                        )}>
                          {process.criticality}
                        </Badge>
                      </td>
                      <td className="py-3 text-slate-300">{process.rto}</td>
                      <td className="py-3 text-slate-400">{process.backup}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Continuity Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-8">
            {continuityPhases.map((phase, index) => (
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
                          <h3 id={phase.id === 0 ? "impact-assessment" : phase.id === 1 ? "alternative-prozesse" : phase.id === 2 ? "stakeholder-kommunikation" : phase.id === 3 ? "ressourcen-management" : phase.id === 4 ? "monitoring" : "recovery"} className="text-2xl font-bold text-white">{phase.title}</h3>
                          <Badge className={cn(
                            phase.priority === 'KRITISCH' 
                              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse"
                              : phase.priority === 'HOCH'
                              ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
                              : phase.priority === 'MITTEL'
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
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

                    {/* Phase-specific content */}
                    {phase.assessmentAreas && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Assessment Bereiche</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {phase.assessmentAreas.map((area, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                              <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                              <span className="text-sm text-slate-300">
                                {area === "Compliance-Ausfälle kategorisieren" ? (
                                  <>
                                    <Link to="/wissen/krisenmanagement/compliance-audit-emergency" className="text-emerald-400 hover:text-emerald-300 underline">Compliance-Ausfälle</Link> kategorisieren
                                  </>
                                ) : (
                                  area
                                )}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {phase.impactMatrix && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Impact Matrix</h4>
                        <div className="space-y-3">
                          {phase.impactMatrix.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl">
                              <div>
                                <p className="font-semibold text-white">
                                  {item.process === "Datenverarbeitung" ? (
                                    <Link to="/wissen/verschluesselung" className="text-white hover:text-emerald-300 underline">Datenverarbeitung</Link>
                                  ) : (
                                    item.process
                                  )}
                                </p>
                                <p className="text-sm text-slate-400">Mitigation: {item.mitigation}</p>
                              </div>
                              <Badge className={cn(
                                "text-xs",
                                item.impact === 'KRITISCH' ? "bg-red-500/20 text-red-300 border-red-500/30" :
                                item.impact === 'HOCH' ? "bg-orange-500/20 text-orange-300 border-orange-500/30" :
                                "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                              )}>
                                {item.impact}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {phase.stakeholderGroups && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Stakeholder Kommunikation</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {phase.stakeholderGroups.map((stakeholder, idx) => (
                            <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                              <h5 className="font-semibold text-white mb-2">
                                {stakeholder.group === "Mitarbeiter" ? (
                                  <Link to="/wissen/branchen/datenschutz-betriebsrat" className="text-white hover:text-emerald-300 underline">Mitarbeiter</Link>
                                ) : (
                                  stakeholder.group
                                )}
                              </h5>
                              <div className="space-y-1 text-sm">
                                <p className="text-slate-300">Frequenz: {stakeholder.frequency}</p>
                                <p className="text-slate-300">Kanäle: {stakeholder.channels.join(', ')}</p>
                                <p className="text-slate-400">{stakeholder.messaging}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {phase.resourceTypes && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Ressourcen-Reallokation</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {phase.resourceTypes.map((resource, idx) => (
                            <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                              <div className="flex items-center justify-between mb-3">
                                <h5 className="font-semibold text-white">{resource.type}</h5>
                                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                                  {resource.timeline}
                                </Badge>
                              </div>
                              <div className="space-y-2">
                                {resource.actions.map((action, actionIdx) => (
                                  <div key={actionIdx} className="flex items-center gap-2">
                                    <Circle className="h-3 w-3 text-emerald-400" />
                                    <span className="text-sm text-slate-300">{action}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {phase.monitoringMetrics && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Monitoring Metriken</h4>
                        <div className="space-y-4">
                          {phase.monitoringMetrics.map((metric, idx) => (
                            <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                              <div className="flex items-center justify-between mb-3">
                                <h5 className="font-semibold text-white">{metric.category}</h5>
                                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                                  {metric.frequency}
                                </Badge>
                              </div>
                              <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div>
                                  <p className="text-slate-400 mb-1">Metriken:</p>
                                  <div className="space-y-1">
                                    {metric.metrics.map((m, mIdx) => (
                                      <p key={mIdx} className="text-slate-300">{m}</p>
                                    ))}
                                  </div>
                                </div>
                                <div>
                                  <p className="text-slate-400 mb-1">Ziele:</p>
                                  <div className="space-y-1">
                                    {metric.targets.map((t, tIdx) => (
                                      <p key={tIdx} className="text-emerald-300">{t}</p>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {phase.recoveryPhases && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Recovery Phasen</h4>
                        <div className="space-y-3">
                          {phase.recoveryPhases.map((recovery, idx) => (
                            <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-semibold text-white">{recovery.phase}</h5>
                                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs">
                                  {recovery.timeline}
                                </Badge>
                              </div>
                              <div className="grid md:grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="text-slate-400">Focus:</p>
                                  <p className="text-slate-300">{recovery.focus}</p>
                                </div>
                                <div>
                                  <p className="text-slate-400">Success:</p>
                                  <p className="text-emerald-300">{recovery.success}</p>
                                </div>
                              </div>
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

      {/* Risk Assessment */}
      <section id="risk-assessment" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
                Risk Assessment Matrix
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Bewertung und Mitigation kritischer Geschäftsrisiken
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {riskCategories.map((risk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50"
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  {risk.risk === "Data Loss" ? (
                    <Link to="/wissen/krisenmanagement/vendor-data-breach" className="text-white hover:text-emerald-300 underline">Data Loss</Link>
                  ) : risk.risk === "Regulatory Fine" ? (
                    <Link to="/wissen/krisenmanagement/gdpr-fine-response" className="text-white hover:text-emerald-300 underline">Regulatory Fine</Link>
                  ) : (
                    risk.risk
                  )}
                </h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-slate-400 mb-1">Wahrscheinlichkeit:</p>
                    <Badge className={cn(
                      "text-xs",
                      risk.probability === 'Hoch' ? "bg-red-500/20 text-red-300 border-red-500/30" :
                      "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                    )}>
                      {risk.probability}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1">Impact:</p>
                    <Badge className={cn(
                      "text-xs",
                      risk.impact === 'Kritisch' ? "bg-red-500/20 text-red-300 border-red-500/30" :
                      "bg-orange-500/20 text-orange-300 border-orange-500/30"
                    )}>
                      {risk.impact}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1">Mitigation:</p>
                    <p className="text-emerald-300">{risk.mitigation}</p>
                  </div>
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
              <Link to="/wissen/krisenmanagement/gdpr-fine-response">
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">GDPR Fine Response</span>
                <span className="sm:hidden">Zurück</span>
              </Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-emerald-500 to-green-500 text-white">
              <Link to="/wissen/krisenmanagement">
                <span className="hidden sm:inline">Zurück zur Übersicht</span>
                <span className="sm:hidden">Weiter</span>
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

export default BusinessContinuityGuide;