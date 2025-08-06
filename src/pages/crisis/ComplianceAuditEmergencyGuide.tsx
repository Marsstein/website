import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  FileCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  AlertTriangle,
  Shield,
  Users,
  Scale,
  Lock,
  Eye,
  Database,
  Server,
  Activity,
  Search,
  Target,
  Brain,
  Settings,
  Phone,
  MessageSquare,
  Bell,
  Zap,
  Flag,
  Timer,
  Circle,
  CheckCircle,
  Check,
  X,
  TrendingUp,
  FileText,
  FolderOpen,
  Download,
  Upload,
  Edit3,
  Copy,
  Star,
  RefreshCw,
  Archive,
  HardDrive,
  Cloud,
  Key,
  UserCheck,
  ShieldCheck,
  BookOpen,
  Calendar,
  Building2,
  Briefcase,
  ClipboardList,
  AlertOctagon,
  Info,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  MoreVertical,
  Filter,
  SortAsc,
  Trash2,
  Lightbulb,
  Award
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ComplianceAuditEmergencyGuide: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60); // 24 hours in seconds
  const [documentStatus, setDocumentStatus] = useState<Record<string, 'pending' | 'collected' | 'verified'>>({});
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const auditPhases = [
    {
      id: 0,
      title: "Sofort-Reaktion & Koordination",
      timeframe: "0-2 Stunden",
      priority: "KRITISCH",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500",
      description: "Aktivierung des Audit-Response Teams und erste Koordination",
      keyActivities: [
        "Audit-Ankündigung analysieren und Scope verstehen",
        "Crisis Response Team zusammenstellen",
        "Interne Kommunikation aktivieren",
        "Ressourcen und Verantwortlichkeiten zuweisen",
        "Erste Lagebeurteilung durchführen"
      ],
      criticalDocuments: [
        {
          id: "audit-notice",
          name: "Behördliche Ankündigung",
          category: "Legal",
          status: "required",
          location: "Email/Post"
        },
        {
          id: "dpa-appointment",
          name: "DSB-Benennung",
          category: "Governance",
          status: "required",
          location: "HR/Legal"
        },
        {
          id: "processing-register",
          name: "Verarbeitungsverzeichnis",
          category: "Documentation",
          status: "required",
          location: "DPO Office"
        }
      ],
      checklist: [
        {
          id: "team-activation",
          task: "Audit Response Team aktiviert",
          responsible: "C-Level",
          priority: "critical"
        },
        {
          id: "scope-analysis",
          task: "Audit-Scope und Timeline verstanden",
          responsible: "Legal/DPO",
          priority: "critical"
        },
        {
          id: "resource-allocation",
          task: "Ressourcen zugewiesen",
          responsible: "Management",
          priority: "high"
        },
        {
          id: "communication-setup",
          task: "Kommunikationskanäle etabliert",
          responsible: "IT/Comms",
          priority: "high"
        }
      ],
      tips: [
        "Keine Panik - strukturiertes Vorgehen ist entscheidend",
        "Vollständige Kooperation signalisieren",
        "Keine voreiligen Aussagen oder Zugeständnisse",
        "Externe Berater frühzeitig einbinden"
      ]
    },
    {
      id: 1,
      title: "Dokumenten-Sammlung & Vorbereitung",
      timeframe: "2-8 Stunden",
      priority: "KRITISCH",
      icon: FolderOpen,
      color: "from-orange-500 to-red-500",
      description: "Systematische Sammlung aller erforderlichen Dokumente und Nachweise",
      keyActivities: [
        "Zentrale Dokumentensammlung einrichten",
        "Alle DSGVO-relevanten Dokumente identifizieren",
        "Fehlende Dokumente priorisieren",
        "Quick-Wins identifizieren und umsetzen",
        "Dokumenten-Tracking System aufsetzen"
      ],
      documentCategories: [
        {
          category: "Datenschutz-Grundlagen",
          priority: "KRITISCH",
          documents: [
            "Datenschutzerklärung (aktuell)",
            "Cookie-Policy",
            "Verarbeitungsverzeichnis",
            "DSB-Benennung",
            "Datenschutz-Folgenabschätzungen",
            "TOM-Dokumentation"
          ]
        },
        {
          category: "Verträge & Vereinbarungen",
          priority: "HOCH",
          documents: [
            "Auftragsverarbeitungsverträge (AVV)",
            "Joint Controller Agreements",
            "Standardvertragsklauseln (SCCs)",
            "Binding Corporate Rules (BCRs)",
            "Mitarbeiter-Verpflichtungen"
          ]
        },
        {
          category: "Prozesse & Policies",
          priority: "HOCH",
          documents: [
            "Incident Response Plan",
            "Betroffenenrechte-Prozess",
            "Löschkonzept",
            "Datenschutz-Managementsystem",
            "Schulungsunterlagen",
            "Awareness-Nachweise"
          ]
        },
        {
          category: "Technische Dokumentation",
          priority: "MITTEL",
          documents: [
            "IT-Sicherheitskonzept",
            "Netzwerk-Diagramme",
            "System-Inventar",
            "Backup-Konzept",
            "Verschlüsselungs-Policies",
            "Access Control Matrix"
          ]
        }
      ],
      documentTracker: {
        totalRequired: 35,
        categories: 4,
        criticalMissing: 0
      },
      tips: [
        "Dokumenten-Verantwortliche klar benennen",
        "Versionskontrolle sicherstellen",
        "Lücken ehrlich dokumentieren",
        "Nachreichungen vorbereiten"
      ]
    },
    {
      id: 2,
      title: "Gap-Analyse & Quick Fixes",
      timeframe: "8-16 Stunden",
      priority: "HOCH",
      icon: Search,
      color: "from-yellow-500 to-orange-500",
      description: "Identifikation von Lücken und sofortige Behebung kritischer Mängel",
      keyActivities: [
        "Systematische Gap-Analyse durchführen",
        "Kritische Compliance-Lücken identifizieren",
        "Quick-Fix Maßnahmen priorisieren",
        "Sofort-Implementierungen starten",
        "Fortschritt dokumentieren"
      ],
      gapCategories: [
        {
          area: "Rechtsgrundlagen",
          gaps: [
            {
              issue: "Fehlende Einwilligungen",
              severity: "KRITISCH",
              quickFix: "Consent-Banner Update",
              timeToFix: "2-4h"
            },
            {
              issue: "Veraltete Datenschutzerklärung",
              severity: "HOCH",
              quickFix: "Template anpassen & publizieren",
              timeToFix: "1-2h"
            },
            {
              issue: "Fehlende AVVs",
              severity: "HOCH",
              quickFix: "Standard-AVV versenden",
              timeToFix: "4-6h"
            }
          ]
        },
        {
          area: "Technische Maßnahmen",
          gaps: [
            {
              issue: "Unverschlüsselte Datenübertragung",
              severity: "KRITISCH",
              quickFix: "SSL/TLS aktivieren",
              timeToFix: "1-2h"
            },
            {
              issue: "Fehlende Zugriffskontrollen",
              severity: "HOCH",
              quickFix: "2FA aktivieren",
              timeToFix: "2-4h"
            },
            {
              issue: "Keine Log-Aufzeichnung",
              severity: "MITTEL",
              quickFix: "Audit Logs aktivieren",
              timeToFix: "2-3h"
            }
          ]
        },
        {
          area: "Organisatorische Maßnahmen",
          gaps: [
            {
              issue: "Fehlende Schulungsnachweise",
              severity: "MITTEL",
              quickFix: "Online-Schulung durchführen",
              timeToFix: "4-8h"
            },
            {
              issue: "Kein Löschkonzept",
              severity: "HOCH",
              quickFix: "Template adaptieren",
              timeToFix: "3-4h"
            },
            {
              issue: "Unvollständiges VVT",
              severity: "KRITISCH",
              quickFix: "Prozesse dokumentieren",
              timeToFix: "6-8h"
            }
          ]
        }
      ],
      priorityMatrix: {
        immediate: ["Einwilligungen", "Verschlüsselung", "VVT"],
        urgent: ["AVVs", "Datenschutzerklärung", "Zugriffskontrollen"],
        important: ["Schulungen", "Dokumentation", "Policies"]
      }
    },
    {
      id: 3,
      title: "Audit-Vorbereitung & Briefing",
      timeframe: "16-20 Stunden",
      priority: "HOCH",
      icon: Briefcase,
      color: "from-blue-500 to-indigo-500",
      description: "Finale Vorbereitung des Teams und der Audit-Unterlagen",
      keyActivities: [
        "Audit-Raum vorbereiten",
        "Team-Briefing durchführen",
        "Dokumentation finalisieren",
        "Kommunikationsstrategie festlegen",
        "Eskalationspfade definieren"
      ],
      auditPreparation: {
        physical: [
          "Dedizierter Audit-Raum mit IT-Ausstattung",
          "Dokumenten-Ordner systematisch sortiert",
          "Zugang zu allen relevanten Systemen",
          "Backup-Kopien kritischer Dokumente",
          "Notfall-Kontaktliste"
        ],
        team: [
          {
            role: "Lead Auditor Interface",
            person: "DPO/Legal Lead",
            responsibilities: ["Hauptansprechpartner", "Dokumentenübergabe", "Eskalation"]
          },
          {
            role: "Technical Expert",
            person: "IT Security Lead",
            responsibilities: ["Technische Fragen", "System-Demonstrationen", "TOM-Erklärungen"]
          },
          {
            role: "Process Owner",
            person: "Operations Lead",
            responsibilities: ["Prozess-Erklärungen", "Praktische Umsetzung", "Mitarbeiter-Themen"]
          },
          {
            role: "Documentation Manager",
            person: "Compliance Officer",
            responsibilities: ["Dokumenten-Tracking", "Nachreichungen", "Protokollierung"]
          }
        ],
        communication: {
          dos: [
            "Höflich und kooperativ sein",
            "Präzise und wahrheitsgemäß antworten",
            "Bei Unsicherheit Rücksprache halten",
            "Alles schriftlich dokumentieren"
          ],
          donts: [
            "Spekulationen oder Vermutungen äußern",
            "Ungefragt zusätzliche Informationen geben",
            "Andere Abteilungen beschuldigen",
            "Dokumente ohne Protokoll übergeben"
          ]
        }
      },
      finalChecklist: [
        "Alle kritischen Dokumente verfügbar?",
        "Team gebrieft und vorbereitet?",
        "Audit-Raum eingerichtet?",
        "IT-Systeme zugänglich?",
        "Eskalationskette klar?",
        "Externe Berater standby?"
      ]
    },
    {
      id: 4,
      title: "Audit-Durchführung & Management",
      timeframe: "Tag der Prüfung",
      priority: "KRITISCH",
      icon: ClipboardList,
      color: "from-indigo-500 to-purple-500",
      description: "Professionelle Begleitung während der Audit-Durchführung",
      keyActivities: [
        "Auditor-Empfang und Einführung",
        "Strukturierte Dokumentenübergabe",
        "Aktive Audit-Begleitung",
        "Kontinuierliche Dokumentation",
        "Tägliche Team-Abstimmungen"
      ],
      auditDayProtocol: {
        morning: [
          "08:00 - Team-Briefing und letzte Vorbereitungen",
          "09:00 - Auditor-Empfang und Begrüßung",
          "09:30 - Agenda-Abstimmung und Zeitplan",
          "10:00 - Unternehmenspräsentation und DSGVO-Overview",
          "11:00 - Erste Dokumentenprüfung"
        ],
        ongoing: [
          "Kontinuierliche Verfügbarkeit des Kernteams",
          "Protokollierung aller Anfragen und Antworten",
          "Regelmäßige interne Abstimmungen",
          "Sofortige Eskalation bei kritischen Themen",
          "Nachreichung fehlender Dokumente"
        ],
        daily: [
          "17:00 - Tagesabschluss mit Auditor",
          "17:30 - Internes Debriefing",
          "18:00 - Vorbereitung Folgetag",
          "18:30 - Management Update"
        ]
      },
      responseStrategies: {
        questions: {
          technical: "IT-Experte hinzuziehen, praktische Demonstration anbieten",
          legal: "Rechtsgrundlage erläutern, Dokumentation zeigen",
          process: "Prozess live demonstrieren, Mitarbeiter einbeziehen",
          missing: "Ehrlich kommunizieren, Nachreichung anbieten"
        },
        findings: {
          minor: "Sofortige Korrektur zusagen, Timeline nennen",
          major: "Verständnis zeigen, Lösungsansatz präsentieren",
          critical: "Management einbeziehen, Sofortmaßnahmen diskutieren"
        }
      },
      documentation: [
        "Audit-Protokoll führen",
        "Alle übergebenen Dokumente notieren",
        "Zusagen und Timelines festhalten",
        "Findings sofort dokumentieren",
        "Follow-up Actions definieren"
      ]
    },
    {
      id: 5,
      title: "Post-Audit & Follow-Up",
      timeframe: "1-4 Wochen",
      priority: "WICHTIG",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      description: "Nachbereitung, Maßnahmenumsetzung und Relationship Management",
      keyActivities: [
        "Audit-Bericht analysieren",
        "Maßnahmenplan erstellen",
        "Umsetzung initiieren",
        "Regelmäßige Updates an Behörde",
        "Lessons Learned dokumentieren"
      ],
      postAuditActions: {
        immediate: [
          "Thank You Note an Auditor",
          "Internes Debriefing mit allen Beteiligten",
          "Quick Wins sofort umsetzen",
          "Kritische Findings priorisieren"
        ],
        shortTerm: [
          "Detaillierten Maßnahmenplan erstellen",
          "Ressourcen für Umsetzung allokieren",
          "Regelmäßige Fortschritts-Updates",
          "Dokumentation vervollständigen"
        ],
        longTerm: [
          "DSGVO-Managementsystem verbessern",
          "Regelmäßige interne Audits etablieren",
          "Kontinuierliche Schulungen",
          "Proaktive Behördenkommunikation"
        ]
      },
      communicationPlan: {
        internal: [
          "Management Report mit Findings und Actions",
          "Team Appreciation und Feedback",
          "Lessons Learned Workshop",
          "Process Improvements"
        ],
        external: [
          "Formelle Antwort auf Audit-Bericht",
          "Regelmäßige Status-Updates",
          "Nachweis der Umsetzung",
          "Proaktive Kommunikation"
        ]
      },
      successMetrics: [
        "Alle kritischen Findings adressiert",
        "Maßnahmenplan akzeptiert",
        "Positive Behördenbeziehung",
        "Verbesserte Compliance-Kultur",
        "Reduziertes Bußgeldrisiko"
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const toggleItem = (itemId: string) => {
    setCompletedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const updateDocumentStatus = (docId: string, status: 'pending' | 'collected' | 'verified') => {
    setDocumentStatus(prev => ({ ...prev, [docId]: status }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'text-green-500';
      case 'collected': return 'text-yellow-500';
      default: return 'text-red-500';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return CheckCircle;
      case 'collected': return Clock;
      default: return AlertOctagon;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900">
      <Header />
      
      {/* Fixed Timer Bar */}
      <div className="fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FileCheck className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-semibold text-slate-300">Compliance Audit Emergency Response</span>
              <Badge className={cn(
                "text-xs",
                timeRemaining < 3600 ? "bg-red-500/20 text-red-300 border-red-500/30 animate-pulse" :
                timeRemaining < 7200 ? "bg-orange-500/20 text-orange-300 border-orange-500/30" :
                "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
              )}>
                {formatTime(timeRemaining)} verbleibend
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-slate-700 text-slate-200">
                Phase {currentPhase + 1}/6
              </Badge>
              <Progress value={(completedItems.length / 25) * 100} className="w-32 h-2" />
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-500/10 backdrop-blur-sm rounded-full mb-8 border border-yellow-500/20"
            >
              <FileCheck className="h-5 w-5 text-yellow-400" />
              <span className="text-sm font-semibold text-yellow-300">Unangekündigte Prüfung</span>
              <Scale className="h-5 w-5 text-orange-400 animate-pulse" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Compliance</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Audit
              </span>
              <br />
              <span className="text-white">Emergency</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              <span className="font-semibold text-yellow-300">Strukturierte Vorbereitung</span> auf unangekündigte 
              Behördenprüfungen in nur 24 Stunden.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold">
                <Timer className="mr-2 h-5 w-5" />
                Emergency Response starten
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-yellow-500/30 hover:border-yellow-400 text-yellow-300 hover:bg-yellow-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                <Download className="mr-2 h-5 w-5" />
                Audit-Checkliste
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Critical Documents Alert */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/30 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <AlertOctagon className="h-8 w-8 text-yellow-400 animate-pulse flex-shrink-0 mt-1" />
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">Kritische Erst-Dokumente</h3>
                <p className="text-slate-300 mb-6">
                  Diese Dokumente werden mit hoher Wahrscheinlichkeit als erstes angefordert:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      doc: "Verarbeitungsverzeichnis",
                      location: "DPO/Legal",
                      status: "MUST HAVE",
                      icon: Database
                    },
                    {
                      doc: "DSB-Benennung",
                      location: "HR/Legal",
                      status: "MUST HAVE",
                      icon: UserCheck
                    },
                    {
                      doc: "TOM-Dokumentation",
                      location: "IT Security",
                      status: "MUST HAVE",
                      icon: Shield
                    },
                    {
                      doc: "Datenschutzerklärung",
                      location: "Website/Legal",
                      status: "KRITISCH",
                      icon: FileText
                    },
                    {
                      doc: "AVV-Übersicht",
                      location: "Procurement/Legal",
                      status: "KRITISCH",
                      icon: Briefcase
                    },
                    {
                      doc: "Löschkonzept",
                      location: "IT/DPO",
                      status: "KRITISCH",
                      icon: Trash2
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-slate-800/60 rounded-xl p-4 border border-slate-700"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <item.icon className="h-6 w-6 text-yellow-400" />
                        <Badge className={cn(
                          "text-xs",
                          item.status === "MUST HAVE" 
                            ? "bg-red-500/20 text-red-300 border-red-500/30" 
                            : "bg-orange-500/20 text-orange-300 border-orange-500/30"
                        )}>
                          {item.status}
                        </Badge>
                      </div>
                      <h4 className="font-semibold text-white mb-1">{item.doc}</h4>
                      <p className="text-xs text-slate-400">📍 {item.location}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audit Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-8">
            {auditPhases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={cn(
                  "relative group",
                  currentPhase === phase.id && "ring-2 ring-yellow-500/50"
                )}
              >
                {/* Glow Effect */}
                <div className={cn(
                  "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                  `bg-gradient-to-r ${phase.color}`,
                  "opacity-0 group-hover:opacity-20"
                )} />
                
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
                      <Button
                        onClick={() => setCurrentPhase(phase.id)}
                        size="sm"
                        variant={currentPhase === phase.id ? "default" : "outline"}
                        className={cn(
                          "transition-all duration-300",
                          currentPhase === phase.id 
                            ? "bg-yellow-600 hover:bg-yellow-700 text-white" 
                            : "border-slate-600 text-slate-300"
                        )}
                      >
                        {currentPhase === phase.id ? "Aktiv" : "Aktivieren"}
                      </Button>
                    </div>

                    {/* Key Activities */}
                    <div className="mb-6">
                      <Button
                        onClick={() => toggleSection(`activities-${phase.id}`)}
                        variant="ghost"
                        className="w-full justify-between p-0 h-auto hover:bg-transparent"
                      >
                        <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                          <Target className="h-5 w-5 text-yellow-400" />
                          Schlüsselaktivitäten
                        </h4>
                        {expandedSections.includes(`activities-${phase.id}`) ? (
                          <ChevronDown className="h-5 w-5 text-slate-400" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-slate-400" />
                        )}
                      </Button>
                      {expandedSections.includes(`activities-${phase.id}`) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 space-y-3"
                        >
                          {phase.keyActivities.map((activity, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                              <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                              <span className="text-sm text-slate-300">{activity}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Phase-specific content */}
                    {phase.id === 0 && phase.criticalDocuments && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <FileText className="h-5 w-5 text-blue-400" />
                          Kritische Dokumente
                        </h4>
                        <div className="space-y-3">
                          {phase.criticalDocuments.map((doc) => (
                            <div key={doc.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl">
                              <div className="flex items-center gap-3">
                                {React.createElement(
                                  getStatusIcon(documentStatus[doc.id] || 'pending'),
                                  { className: cn("h-5 w-5", getStatusColor(documentStatus[doc.id] || 'pending')) }
                                )}
                                <div>
                                  <p className="font-semibold text-white">{doc.name}</p>
                                  <p className="text-xs text-slate-400">{doc.category} • {doc.location}</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge className={cn(
                                  "text-xs",
                                  doc.status === 'required' 
                                    ? "bg-red-500/20 text-red-300 border-red-500/30"
                                    : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                                )}>
                                  {doc.status}
                                </Badge>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  onClick={() => {
                                    const statuses: Array<'pending' | 'collected' | 'verified'> = ['pending', 'collected', 'verified'];
                                    const currentStatus = documentStatus[doc.id] || 'pending';
                                    const currentIndex = statuses.indexOf(currentStatus);
                                    const nextStatus = statuses[(currentIndex + 1) % statuses.length];
                                    updateDocumentStatus(doc.id, nextStatus);
                                  }}
                                >
                                  <RefreshCw className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {phase.id === 1 && phase.documentCategories && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Archive className="h-5 w-5 text-green-400" />
                          Dokumenten-Kategorien
                        </h4>
                        <div className="space-y-4">
                          {phase.documentCategories.map((category, idx) => (
                            <div key={idx} className="border border-slate-700/50 rounded-xl p-4 bg-slate-800/40">
                              <div className="flex items-center justify-between mb-3">
                                <h5 className="font-semibold text-white">{category.category}</h5>
                                <Badge className={cn(
                                  "text-xs",
                                  category.priority === 'KRITISCH' 
                                    ? "bg-red-500/20 text-red-300 border-red-500/30"
                                    : category.priority === 'HOCH'
                                    ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                                    : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                                )}>
                                  {category.priority}
                                </Badge>
                              </div>
                              <div className="grid grid-cols-2 gap-2">
                                {category.documents.map((doc, docIdx) => (
                                  <div key={docIdx} className="flex items-center gap-2 text-sm">
                                    <Circle className="h-3 w-3 text-slate-500" />
                                    <span className="text-slate-300">{doc}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {phase.id === 2 && phase.gapCategories && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-orange-400" />
                          Gap-Analyse & Quick Fixes
                        </h4>
                        <div className="space-y-4">
                          {phase.gapCategories.map((category, idx) => (
                            <div key={idx} className="border border-slate-700/50 rounded-xl p-4 bg-slate-800/40">
                              <h5 className="font-semibold text-white mb-3">{category.area}</h5>
                              <div className="space-y-3">
                                {category.gaps.map((gap, gapIdx) => (
                                  <div key={gapIdx} className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg">
                                    <AlertOctagon className={cn(
                                      "h-5 w-5 flex-shrink-0 mt-0.5",
                                      gap.severity === 'KRITISCH' ? "text-red-400" :
                                      gap.severity === 'HOCH' ? "text-orange-400" : "text-yellow-400"
                                    )} />
                                    <div className="flex-1">
                                      <div className="flex items-center justify-between mb-1">
                                        <p className="font-semibold text-white">{gap.issue}</p>
                                        <Badge className={cn(
                                          "text-xs",
                                          gap.severity === 'KRITISCH' 
                                            ? "bg-red-500/20 text-red-300 border-red-500/30"
                                            : gap.severity === 'HOCH'
                                            ? "bg-orange-500/20 text-orange-300 border-orange-500/30"
                                            : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                                        )}>
                                          {gap.severity}
                                        </Badge>
                                      </div>
                                      <p className="text-sm text-slate-300 mb-1">
                                        Quick Fix: {gap.quickFix}
                                      </p>
                                      <p className="text-xs text-slate-400">
                                        ⏱ {gap.timeToFix}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {phase.id === 3 && phase.auditPreparation && (
                      <div className="space-y-6">
                        {/* Team Roles */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Users className="h-5 w-5 text-purple-400" />
                            Audit Team & Rollen
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {phase.auditPreparation.team.map((member, idx) => (
                              <div key={idx} className="bg-slate-700/50 rounded-xl p-4">
                                <div className="flex items-center justify-between mb-2">
                                  <h5 className="font-semibold text-white">{member.role}</h5>
                                  <UserCheck className="h-5 w-5 text-purple-400" />
                                </div>
                                <p className="text-sm text-slate-300 mb-2">{member.person}</p>
                                <div className="space-y-1">
                                  {member.responsibilities.map((resp, respIdx) => (
                                    <div key={respIdx} className="flex items-center gap-2 text-xs text-slate-400">
                                      <Circle className="h-2 w-2" />
                                      <span>{resp}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Communication Guidelines */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <MessageSquare className="h-5 w-5 text-blue-400" />
                            Kommunikations-Leitlinien
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                              <h5 className="font-semibold text-green-300 mb-3 flex items-center gap-2">
                                <CheckCircle className="h-5 w-5" />
                                DO's
                              </h5>
                              <div className="space-y-2">
                                {phase.auditPreparation.communication.dos.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-300">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                              <h5 className="font-semibold text-red-300 mb-3 flex items-center gap-2">
                                <X className="h-5 w-5" />
                                DON'Ts
                              </h5>
                              <div className="space-y-2">
                                {phase.auditPreparation.communication.donts.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-300">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {phase.id === 4 && phase.auditDayProtocol && (
                      <div className="space-y-6">
                        {/* Audit Day Timeline */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-indigo-400" />
                            Audit-Tag Protokoll
                          </h4>
                          <div className="space-y-4">
                            {Object.entries(phase.auditDayProtocol).map(([timeOfDay, activities]) => (
                              <div key={timeOfDay} className="bg-slate-700/50 rounded-xl p-4">
                                <h5 className="font-semibold text-white capitalize mb-3">
                                  {timeOfDay === 'morning' ? 'Vormittag' : 
                                   timeOfDay === 'ongoing' ? 'Laufend' : 'Tagesabschluss'}
                                </h5>
                                <div className="space-y-2">
                                  {activities.map((activity, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                      <Clock className="h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                                      <span className="text-sm text-slate-300">{activity}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Response Strategies */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Brain className="h-5 w-5 text-pink-400" />
                            Response-Strategien
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-slate-700/50 rounded-xl p-4">
                              <h5 className="font-semibold text-white mb-3">Fragen-Handling</h5>
                              {Object.entries(phase.responseStrategies.questions).map(([type, strategy]) => (
                                <div key={type} className="mb-2">
                                  <p className="text-sm font-semibold text-slate-300 capitalize">{type}:</p>
                                  <p className="text-xs text-slate-400">{strategy}</p>
                                </div>
                              ))}
                            </div>
                            <div className="bg-slate-700/50 rounded-xl p-4">
                              <h5 className="font-semibold text-white mb-3">Finding-Management</h5>
                              {Object.entries(phase.responseStrategies.findings).map(([severity, response]) => (
                                <div key={severity} className="mb-2">
                                  <p className="text-sm font-semibold text-slate-300 capitalize">{severity}:</p>
                                  <p className="text-xs text-slate-400">{response}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {phase.id === 5 && phase.postAuditActions && (
                      <div className="space-y-6">
                        {/* Post-Audit Timeline */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-green-400" />
                            Post-Audit Maßnahmen
                          </h4>
                          <div className="grid lg:grid-cols-3 gap-4">
                            {Object.entries(phase.postAuditActions).map(([timing, actions]) => (
                              <div key={timing} className="bg-slate-700/50 rounded-xl p-4">
                                <h5 className="font-semibold text-white mb-3 capitalize">
                                  {timing === 'immediate' ? 'Sofort' :
                                   timing === 'shortTerm' ? 'Kurzfristig' : 'Langfristig'}
                                </h5>
                                <div className="space-y-2">
                                  {actions.map((action, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                                      <span className="text-sm text-slate-300">{action}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Success Metrics */}
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Award className="h-5 w-5 text-yellow-400" />
                            Erfolgs-Metriken
                          </h4>
                          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {phase.successMetrics.map((metric, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg">
                                <Star className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                                <span className="text-sm text-slate-300">{metric}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tips Section (if present) */}
                    {phase.tips && (
                      <div className="mt-6 pt-6 border-t border-slate-700/50">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-yellow-400" />
                          Praktische Tipps
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {phase.tips.map((tip, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <Info className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
                              <span className="text-xs text-slate-400">{tip}</span>
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

      {/* Quick Actions & Resources */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-yellow-900/30 to-slate-800/50" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Sofort-Ressourcen
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300">
              Downloads und Tools für die schnelle Audit-Vorbereitung
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-6">
            {[
              {
                title: "Master-Checkliste",
                description: "Vollständige Audit-Vorbereitung Checkliste",
                icon: ClipboardList,
                action: "Download PDF",
                color: "from-yellow-500 to-orange-500",
                badge: "MUST HAVE"
              },
              {
                title: "Dokumenten-Tracker",
                description: "Excel-Template für Dokumentenverwaltung",
                icon: FileText,
                action: "Excel laden",
                color: "from-orange-500 to-red-500",
                badge: "EMPFOHLEN"
              },
              {
                title: "Audit-Protokoll",
                description: "Vorlage für Audit-Dokumentation",
                icon: BookOpen,
                action: "Template öffnen",
                color: "from-red-500 to-pink-500",
                badge: "HILFREICH"
              },
              {
                title: "Emergency Contacts",
                description: "Wichtige Kontakte für Audit-Notfälle",
                icon: Phone,
                action: "Kontakte anzeigen",
                color: "from-pink-500 to-purple-500",
                badge: "24/7"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={cn(
                        "inline-flex p-3 rounded-2xl bg-gradient-to-r shadow-lg",
                        resource.color
                      )}>
                        <resource.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className={cn(
                        "text-xs",
                        resource.badge === "MUST HAVE" 
                          ? "bg-red-500/20 text-red-300 border-red-500/30"
                          : resource.badge === "24/7"
                          ? "bg-green-500/20 text-green-300 border-green-500/30"
                          : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                      )}>
                        {resource.badge}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-white">{resource.title}</h3>
                    <p className="text-sm text-slate-300 mb-4">{resource.description}</p>
                    
                    <Button className={cn(
                      "w-full bg-gradient-to-r text-white text-sm",
                      resource.color
                    )}>
                      {resource.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
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
              <Link to="/wissen/krisenmanagement/security-incident">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Security Incident Guide
              </Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              <Link to="/wissen/krisenmanagement/media-crisis">
                Media Crisis Management
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

export default ComplianceAuditEmergencyGuide;