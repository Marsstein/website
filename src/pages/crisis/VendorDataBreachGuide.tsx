import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, CheckCircle2, ArrowRight, ArrowLeft, Clock, AlertTriangle, Shield, Users, Scale, FileText, Download, Target, Brain, Settings, Phone, Bell, Timer, Circle, CheckCircle, Search, Flag, Eye, Database, Server, Activity, Briefcase, AlertOctagon, Info, ChevronRight, ChevronDown, Copy, Star, RefreshCw, UserCheck, ShieldCheck, BookOpen, Calendar, HelpCircle, Wifi, TrendingUp, BarChart3, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const VendorDataBreachGuide: React.FC = () => {
  // Add scroll-margin-top for sticky header
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      h2, h3, h4 { scroll-margin-top: 96px; }
      section[id] { scroll-margin-top: 80px; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [vendorStatus, setVendorStatus] = useState<Record<string, 'unknown' | 'contacted' | 'responsive' | 'unresponsive'>>({});
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const responsePhases = [
    {
      id: 0,
      title: "Vendor Impact Assessment",
      timeframe: "0-4 Stunden",
      priority: "KRITISCH",
      icon: Search,
      color: "from-red-500 to-orange-500",
      description: "Sofortige Bewertung des Vendor-Vorfalls und Auswirkungen auf eigene Organisation",
      keyActions: [
        "Vendor-Vorfall verifizieren und dokumentieren",
        "Vertragliche Beziehung und Datenflüsse analysieren",
        "Betroffene Systeme und Daten identifizieren",
        "Sofortige Risikobewertung durchführen",
        "Incident Response Team aktivieren"
      ],
      vendorTypes: [
        {
          type: "Cloud Service Provider",
          riskLevel: "KRITISCH",
          dataTypes: ["Kundendaten", "Anwendungsdaten", "Backups"],
          immediateActions: ["Service stoppen", "Daten-Export", "Alternative aktivieren"]
        },
        {
          type: "Payment Processor",
          riskLevel: "KRITISCH",
          dataTypes: ["Zahlungsdaten", "Transaktionshistorie", "PCI-Daten"],
          immediateActions: ["Zahlungen stoppen", "Kartenunternehmen informieren", "PCI-DSS Team"]
        },
        {
          type: "CRM/Marketing Tool",
          riskLevel: "HOCH",
          dataTypes: ["Kontaktdaten", "Verhaltensdaten", "Marketing-Preferences"],
          immediateActions: ["Datenexport", "Kampagnen stoppen", "Alternative nutzen"]
        },
        {
          type: "HR/Payroll System",
          riskLevel: "HOCH",
          dataTypes: ["Mitarbeiterdaten", "Gehaltsdaten", "Sozialversicherung"],
          immediateActions: ["Mitarbeiter informieren", "Monitoring aktivieren", "Support"]
        }
      ],
      assessmentMatrix: {
        dataVolume: ["<1K Datensätze", "1K-10K", "10K-100K", "100K+"],
        dataSensitivity: ["Öffentlich", "Intern", "Vertraulich", "Streng vertraulich"],
        businessImpact: ["Minimal", "Niedrig", "Mittel", "Hoch", "Kritisch"],
        regulatoryImpact: ["Keine", "Gering", "Mittel", "Hoch", "Sehr hoch"]
      }
    },
    {
      id: 1,
      title: "Vendor Communication & Coordination",
      timeframe: "2-8 Stunden",
      priority: "KRITISCH",
      icon: Phone,
      color: "from-orange-500 to-red-500",
      description: "Direkte Kommunikation mit betroffenem Vendor und Informationsbeschaffung",
      communicationProtocol: {
        immediate: [
          "Primary Contact über alle Kanäle erreichen",
          "Incident-Details und Timeline erfragen",
          "Betroffene Daten und Systeme abklären",
          "Vendor Response Plan erfragen",
          "Regelmäßige Updates vereinbaren"
        ],
        ongoing: [
          "Stündliche Status-Updates anfordern",
          "Forensic Reports anfordern",
          "Remediation Timeline erfragen",
          "Customer Communication Plan abgleichen",
          "Legal und Compliance einbeziehen"
        ]
      },
      escalationMatrix: [
        {
          level: "Primary Contact",
          role: "Account Manager/Support",
          sla: "30 Minuten",
          escalation: "Nicht erreichbar → Level 2"
        },
        {
          level: "Management",
          role: "VP/Director Customer Success",
          sla: "1 Stunde",
          escalation: "Keine Antwort → Level 3"
        },
        {
          level: "Executive",
          role: "C-Level/Founder",
          sla: "2 Stunden",
          escalation: "Unkooperativ → Legal"
        },
        {
          level: "Legal",
          role: "Contract Enforcement",
          sla: "4 Stunden",
          escalation: "Last Resort"
        }
      ],
      informationRequests: [
        "Genaue Art und Ursache des Vorfalls",
        "Zeitrahmen: Wann begonnen, entdeckt, behoben",
        "Betroffene Systeme und Datentypen",
        "Anzahl betroffener Kunden/Datensätze",
        "Bereits ergriffene Maßnahmen",
        "Geplante Schritte und Timeline",
        "Verfügbarkeit forensischer Berichte",
        "Customer Notification Plan",
        "Rechtliche und regulatorische Schritte"
      ]
    },
    {
      id: 2,
      title: "Contractual Rights & Legal Assessment",
      timeframe: "4-12 Stunden",
      priority: "HOCH",
      icon: Scale,
      color: "from-yellow-500 to-orange-500",
      description: "Analyse der vertraglichen Rechte und rechtlichen Optionen",
      contractualAspects: {
        dataProcessing: [
          "Auftragsverarbeitungsvertrag (AVV) prüfen",
          "Datenschutz-Klauseln analysieren",
          "Sub-Processor Agreements überprüfen",
          "Datenlokalisierung und -transfer prüfen",
          "Retention und Deletion Policies"
        ],
        security: [
          "Security Standards und Zertifizierungen",
          "Incident Response Verpflichtungen",
          "Notification Requirements",
          "Audit Rights und Compliance",
          "Business Continuity Pläne"
        ],
        liability: [
          "Haftungsausschlüsse und -begrenzungen",
          "Versicherungsschutz des Vendors",
          "Indemnification Klauseln",
          "Penalty Clauses für Breaches",
          "Termination Rights bei Incidents"
        ]
      },
      legalActions: [
        {
          action: "Contract Review",
          timeline: "Sofort",
          responsible: "Legal Counsel",
          outcome: "Rights Assessment"
        },
        {
          action: "Breach Notification",
          timeline: "24h",
          responsible: "Contract Manager",
          outcome: "Formal Notice"
        },
        {
          action: "Damage Assessment",
          timeline: "48h",
          responsible: "Finance + Legal",
          outcome: "Financial Impact"
        },
        {
          action: "Remedy Demand",
          timeline: "72h",
          responsible: "Legal Counsel",
          outcome: "Formal Demands"
        }
      ],
      riskMitigation: [
        "Sofortige Service-Suspension bewerten",
        "Alternative Vendor Activation",
        "Datenrückholung und -sicherung",
        "Customer Impact Minimierung",
        "Regulatory Compliance sicherstellen",
        "Reputation Management",
        "Future Contracting verbessern"
      ]
    },
    {
      id: 3,
      title: "Customer & Stakeholder Communication",
      timeframe: "6-24 Stunden",
      priority: "HOCH",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      description: "Transparente Kommunikation mit eigenen Kunden und Stakeholdern",
      communicationStrategy: {
        customers: {
          timing: "Innerhalb 24h nach Vendor-Bestätigung",
          channels: ["Email", "In-App Notification", "Website Banner"],
          messaging: "Transparent, beruhigend, lösungsorientiert",
          frequency: "Initial + Updates alle 48h"
        },
        internal: {
          timing: "Innerhalb 4h nach Assessment",
          channels: ["All-Hands", "Slack", "Email"],
          messaging: "Faktenbasiert, handlungsorientiert",
          frequency: "2x täglich während aktiver Phase"
        },
        regulators: {
          timing: "Nach rechtlicher Prüfung (max 72h)",
          channels: ["Offizielle Meldung", "Direct Contact"],
          messaging: "Formal, compliant, kooperativ",
          frequency: "Nach Anforderung"
        },
        partners: {
          timing: "Innerhalb 12h wenn betroffen",
          channels: ["Direct Contact", "Partner Portal"],
          messaging: "Professionell, unterstützend",
          frequency: "Täglich bis Resolution"
        }
      },
      messageTemplates: {
        customerEmail: "Wichtige Information zu Ihren Daten - Vendor-Vorfall",
        internalSlack: "🚨 VENDOR INCIDENT: [Vendor] Data Breach - Action Required",
        pressStatement: "[Company] Response zu [Vendor] Data Breach",
        regulatorMail: "Meldung gem. DSGVO Art. 33 - Vendor Data Breach"
      },
      stakeholderMatrix: [
        { group: "Betroffene Kunden", priority: "KRITISCH", eta: "24h" },
        { group: "Alle Mitarbeiter", priority: "HOCH", eta: "4h" },
        { group: "Management Team", priority: "KRITISCH", eta: "2h" },
        { group: "Partner/Reseller", priority: "MITTEL", eta: "12h" },
        { group: "Aufsichtsbehörden", priority: "HOCH", eta: "72h" },
        { group: "Versicherung", priority: "MITTEL", eta: "48h" }
      ]
    },
    {
      id: 4,
      title: "Business Continuity & Alternative Solutions",
      timeframe: "12-48 Stunden",
      priority: "MITTEL",
      icon: Briefcase,
      color: "from-indigo-500 to-purple-500",
      description: "Aufrechterhaltung der Geschäftstätigkeit durch alternative Lösungen",
      continuityPlanning: {
        assessment: [
          "Kritische vs. nicht-kritische Services identifizieren",
          "Alternative Vendor Optionen evaluieren",
          "Interne Workarounds prüfen",
          "Datenmigrationsaufwand bewerten",
          "Cost-Benefit Analyse durchführen"
        ],
        implementation: [
          "Emergency Vendor Onboarding",
          "Datenexport und -migration",
          "Service Redirects aktivieren",
          "Team Training für neue Tools",
          "Customer Migration Communication"
        ],
        monitoring: [
          "Service Availability überwachen",
          "Performance Metrics vergleichen",
          "Customer Satisfaction tracken",
          "Cost Impact analysieren",
          "Rollback-Bereitschaft sicherstellen"
        ]
      },
      alternativeStrategies: [
        {
          scenario: "Kurzer Ausfall (1-7 Tage)",
          approach: "Manual Workarounds",
          resources: "Interne Teams",
          impact: "Niedrig"
        },
        {
          scenario: "Mittlerer Ausfall (1-4 Wochen)",
          approach: "Temporary Alternative",
          resources: "Emergency Vendor",
          impact: "Mittel"
        },
        {
          scenario: "Langer Ausfall (1+ Monate)",
          approach: "Full Migration",
          resources: "New Primary Vendor",
          impact: "Hoch"
        },
        {
          scenario: "Vertrauensverlust",
          approach: "Permanent Switch",
          resources: "Strategic Alternative",
          impact: "Sehr hoch"
        }
      ],
      decisionCriteria: [
        "Sicherheit und Compliance des neuen Vendors",
        "Funktionale Parität mit bisherigem Service",
        "Migrationsdauer und -aufwand",
        "Kosten: Setup, Migration, laufend",
        "Langfristige Vertragsbedingungen",
        "Reputation und Marktposition",
        "Integration und API Kompatibilität"
      ]
    },
    {
      id: 5,
      title: "Recovery & Relationship Management",
      timeframe: "1-4 Wochen",
      priority: "WICHTIG",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      description: "Langfristige Erholung und Verbesserung der Vendor-Beziehungen",
      recoveryPhases: {
        immediate: [
          "Service Restoration validieren",
          "Data Integrity Checks durchführen",
          "Performance Monitoring verstärken",
          "Customer Satisfaction Survey",
          "Incident Documentation finalisieren"
        ],
        shortTerm: [
          "Vendor Relationship Review",
          "Contract Renegotiation",
          "Additional Security Requirements",
          "Enhanced SLAs vereinbaren",
          "Regular Audit Schedule"
        ],
        longTerm: [
          "Multi-Vendor Strategy entwickeln",
          "Vendor Diversification vorantreiben",
          "Internal Capabilities ausbauen",
          "Industry Best Practices adoptieren",
          "Incident Prevention Measures"
        ]
      },
      relationshipManagement: {
        vendorAccountability: [
          "Formelle Incident Review Session",
          "Root Cause Analysis einfordern",
          "Remediation Plan bewerten",
          "Compensation Verhandlungen",
          "Future Prevention Measures"
        ],
        trustRebuilding: [
          "Transparenz-Vereinbarungen",
          "Regular Security Updates",
          "Joint Security Initiatives",
          "Collaborative Incident Planning",
          "Executive Sponsor Assignment"
        ],
        contractualImprovements: [
          "Erweiterte Notification Requirements",
          "Härtere Penalty Clauses",
          "Right to Audit stärken",
          "Data Portability sicherstellen",
          "Termination Rights erweitern"
        ]
      },
      successMetrics: [
        {
          category: "Service Delivery",
          metrics: ["Uptime", "Performance", "Response Times"],
          target: "Pre-incident Level + 10%",
          timeline: "30 Tage"
        },
        {
          category: "Security Posture",
          metrics: ["Certifications", "Audit Scores", "Incident Frequency"],
          target: "Best-in-class Standards",
          timeline: "90 Tage"
        },
        {
          category: "Business Impact",
          metrics: ["Customer Retention", "Revenue Impact", "Operational Efficiency"],
          target: "Baseline wiederherstellen",
          timeline: "180 Tage"
        }
      ],
      lessonsLearned: [
        "Vendor Due Diligence Prozess verbessern",
        "Continuous Vendor Monitoring implementieren",
        "Incident Response Playbooks aktualisieren",
        "Business Continuity Plans stärken",
        "Stakeholder Communication optimieren"
      ]
    }
  ];

  const vendorRiskCategories = [
    { risk: "KRITISCH", color: "bg-red-500", vendors: ["Cloud Provider", "Payment", "Auth"] },
    { risk: "HOCH", color: "bg-orange-500", vendors: ["CRM", "Analytics", "Support"] },
    { risk: "MITTEL", color: "bg-yellow-500", vendors: ["Marketing", "HR", "Monitoring"] },
    { risk: "NIEDRIG", color: "bg-green-500", vendors: ["Documentation", "Internal Tools"] }
  ];

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const updateVendorStatus = (vendorId: string, status: 'unknown' | 'contacted' | 'responsive' | 'unresponsive') => {
    setVendorStatus(prev => ({ ...prev, [vendorId]: status }));
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'KRITISCH': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse';
      case 'HOCH': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'MITTEL': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'WICHTIG': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  const getVendorStatusColor = (status: string) => {
    switch (status) {
      case 'responsive': return 'text-green-500';
      case 'contacted': return 'text-yellow-500';
      case 'unresponsive': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>Vendor Data Breach – Lieferanten-Datenpanne Response</title>
        <meta name="description" content="Vendor Data Breach: Third-Party Incident Response, Vertragsmanagement, Supply Chain Security. ✓ Vendor Management ✓ Contract Enforcement ✓ Risk Assessment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://marsstein.ai/wissen/krisenmanagement/vendor-data-breach" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Vendor Data Breach – Lieferanten-Datenpanne Response" />
        <meta property="og:description" content="Vendor Data Breach: Third-Party Incident Response, Vertragsmanagement, Supply Chain Security. ✓ Vendor Management ✓ Contract Enforcement ✓ Risk Assessment." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://marsstein.ai/wissen/krisenmanagement/vendor-data-breach" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Vendor Data Breach Response Guide",
            "description": "Strukturierter Leitfaden für den Umgang mit Datenpannen bei Lieferanten und Dienstleistern",
            "step": [
              {
                "@type": "HowToStep",
                "name": "Vendor Impact Assessment",
                "text": "Sofortige Bewertung des Vendor-Vorfalls und Auswirkungen auf eigene Organisation"
              },
              {
                "@type": "HowToStep",
                "name": "Vendor Communication & Coordination",
                "text": "Direkte Kommunikation mit betroffenem Vendor und Informationsbeschaffung"
              },
              {
                "@type": "HowToStep",
                "name": "Contractual Rights & Legal Assessment",
                "text": "Analyse der vertraglichen Rechte und rechtlichen Optionen"
              },
              {
                "@type": "HowToStep",
                "name": "Customer & Stakeholder Communication",
                "text": "Transparente Kommunikation mit eigenen Kunden und Stakeholdern"
              },
              {
                "@type": "HowToStep",
                "name": "Long-term Vendor Management",
                "text": "Strategische Maßnahmen für zukünftige Vendor-Sicherheit"
              }
            ],
            "author": {
              "@type": "Organization",
              "name": "Marsstein"
            }
          })}
        </script>
      </Helmet>
      <Header />
      
      {/* Fixed Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Building2 className="h-5 w-5 text-indigo-400" />
              <span className="text-sm font-semibold text-slate-300">Vendor Data Breach Response</span>
              <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 text-xs">
                {completedTasks.length} Tasks completed
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-slate-700 text-slate-200">
                Phase {currentPhase + 1}/6
              </Badge>
            </div>
          </div>
        </div>
      </div>

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
              className="inline-flex items-center gap-3 px-6 py-3 bg-indigo-500/10 backdrop-blur-sm rounded-full mb-8 border border-indigo-500/20"
            >
              <Building2 className="h-5 w-5 text-indigo-400" />
              <span className="text-sm font-semibold text-indigo-300">Third-Party Risk</span>
              <AlertTriangle className="h-5 w-5 text-orange-400" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Vendor</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Data Breach
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
              <span className="font-semibold text-indigo-300">Strukturierte Reaktion</span> auf Datenschutzverletzungen 
              bei Dienstleistern und Lieferanten. Ergänzt unsere <Link to="/wissen/krisenmanagement" className="text-indigo-400 hover:text-indigo-300 underline">Krisenmanagement-Guides</Link> 
              und <Link to="/dsgvo/lieferanten" className="text-indigo-400 hover:text-indigo-300 underline">Lieferanten-Management</Link>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white px-8 py-4 text-lg font-semibold">
                <Link to="/contact">
                  <Search className="mr-2 h-5 w-5" />
                  Impact Assessment starten
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-indigo-500/30 hover:border-indigo-400 text-indigo-300 hover:bg-indigo-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                <Link to="/tools/vendor-assessment">
                  <Download className="mr-2 h-5 w-5" />
                  Vendor Response Toolkit
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Vendor Risk Matrix */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border-2 border-indigo-500/30 rounded-2xl p-8 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="h-6 w-6 text-indigo-400" />
              Vendor Risk Assessment Matrix
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-4">
              {vendorRiskCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/60 rounded-xl p-6 border border-slate-700"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={cn("w-4 h-4 rounded-full", category.color)} />
                    <h3 className="font-semibold text-white">{category.risk}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.vendors.map((vendor, idx) => (
                      <div key={idx} className="text-sm text-slate-300">
                        {vendor}
                      </div>
                    ))}
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
                className={cn(
                  "relative group",
                  currentPhase === phase.id && "ring-2 ring-indigo-500/50"
                )}
              >
                <Card className="border-2 border-slate-700/50 bg-slate-800/80 transition-all duration-500 group-hover:shadow-2xl overflow-hidden">
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className={cn(
                            "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                            phase.color
                          )}
                        >
                          <phase.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                            <Badge className={getPriorityColor(phase.priority)}>
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
                      <Button
                        onClick={() => setCurrentPhase(phase.id)}
                        size="sm"
                        variant={currentPhase === phase.id ? "default" : "outline"}
                        className={cn(
                          "transition-all duration-300",
                          currentPhase === phase.id 
                            ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                            : "border-slate-600 text-slate-300"
                        )}
                      >
                        {currentPhase === phase.id ? "Aktiv" : "Aktivieren"}
                      </Button>
                    </div>

                    {/* Key Actions */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-indigo-400" />
                        Wichtige Maßnahmen
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.keyActions?.map((action, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                            <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                            <span className="text-sm text-slate-300">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Phase-specific content - simplified for space */}
                    {phase.id === 0 && phase.vendorTypes && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white mb-4">Vendor-Kategorien</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          {phase.vendorTypes.map((vendor, idx) => (
                            <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-semibold text-white">{vendor.type}</h5>
                                <Badge className={cn(
                                  "text-xs",
                                  vendor.riskLevel === 'KRITISCH' 
                                    ? "bg-red-500/20 text-red-300 border-red-500/30"
                                    : "bg-orange-500/20 text-orange-300 border-orange-500/30"
                                )}>
                                  {vendor.riskLevel}
                                </Badge>
                              </div>
                              <p className="text-xs text-slate-400 mb-2">
                                Daten: {vendor.dataTypes.join(', ')}
                              </p>
                              <div className="space-y-1">
                                {vendor.immediateActions.map((action, actionIdx) => (
                                  <div key={actionIdx} className="text-xs text-slate-300 flex items-center gap-2">
                                    <Circle className="h-2 w-2" />
                                    {action}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Additional phase content would go here... */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-indigo-900/30 to-slate-800/50" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Vendor Response Tools
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300">
              Sofort verfügbare Templates und Checklisten
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              {
                title: "Impact Assessment",
                description: "Template zur Vendor-Risikobewertung",
                icon: Search,
                action: "Assessment starten",
                color: "from-indigo-500 to-blue-500"
              },
              {
                title: "Communication Scripts",
                description: "Gesprächsleitfäden für Vendor-Kontakt",
                icon: Phone,
                action: "Scripts laden",
                color: "from-blue-500 to-purple-500"
              },
              {
                title: "Legal Checklist",
                description: "Vertragliche Rechte und Optionen",
                icon: Scale,
                action: "Checklist öffnen",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Continuity Plan",
                description: "Business Continuity Templates",
                icon: Briefcase,
                action: "Plan erstellen",
                color: "from-pink-500 to-red-500"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={cn(
                      "inline-flex p-3 rounded-2xl bg-gradient-to-r mb-4 shadow-lg",
                      tool.color
                    )}>
                      <tool.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-white">{tool.title}</h3>
                    <p className="text-sm text-slate-300 mb-4">{tool.description}</p>
                    
                    <Button asChild className={cn(
                      "w-full bg-gradient-to-r text-white text-sm",
                      tool.color
                    )}>
                      <Link to={
                        tool.title === "Impact Assessment" ? "/tools/vendor-assessment" :
                        tool.title === "Communication Scripts" ? "/dsgvo/dokumentation/vorlagen" :
                        tool.title === "Legal Checklist" ? "/dsgvo/rechtliche-grundlagen" :
                        "/contact"
                      }>
                        {tool.action}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
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
              <Link to="/wissen/krisenmanagement/media-crisis">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Media Crisis Management
              </Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
              <Link to="/wissen/krisenmanagement/gdpr-fine-response">
                GDPR Fine Response
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

export default VendorDataBreachGuide;