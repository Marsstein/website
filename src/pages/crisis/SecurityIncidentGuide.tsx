import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  Download,
  AlertTriangle,
  FileText,
  Users,
  Lock,
  Eye,
  Database,
  Server,
  Wifi,
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
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const SecurityIncidentGuide: React.FC = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const phases = [
    {
      id: 0,
      title: "Detection & Analysis",
      timeframe: "0-30 Minuten",
      priority: "KRITISCH",
      icon: Search,
      color: "from-red-500 to-orange-500",
      description: "Erkennung, Bewertung und initiale Analyse des Sicherheitsvorfalls",
      objectives: [
        "Incident Detection bestätigen",
        "Erste Schadensbewertung durchführen",
        "Incident Response Team aktivieren",
        "Incident kategorisieren und priorisieren"
      ],
      tasks: [
        {
          id: "detect-confirm",
          title: "Vorfall bestätigen und dokumentieren",
          description: "Alert validieren und ersten Incident Record erstellen",
          critical: true
        },
        {
          id: "team-notify",
          title: "IR-Team und Management benachrichtigen",
          description: "Sofortige Aktivierung des Incident Response Teams",
          critical: true
        },
        {
          id: "initial-scope",
          title: "Ersten Scope-Assessment durchführen",
          description: "Betroffene Systeme und potentielle Auswirkungen bewerten",
          critical: true
        },
        {
          id: "incident-category",
          title: "Incident kategorisieren",
          description: "Typ, Schwere und Priorität des Vorfalls bestimmen",
          critical: false
        },
        {
          id: "timeline-establish",
          title: "Initiale Timeline erstellen",
          description: "Erste Chronologie der Ereignisse dokumentieren",
          critical: false
        },
        {
          id: "stakeholder-id",
          title: "Key Stakeholder identifizieren",
          description: "Relevante interne und externe Parteien bestimmen",
          critical: false
        }
      ],
      stakeholders: ["SOC Analyst", "CISO", "IR Team Lead", "Network Admin"],
      tools: ["SIEM", "EDR", "Network Monitoring", "Log Analysis Tools"],
      deliverables: ["Incident Record", "Initial Assessment", "Team Notification"]
    },
    {
      id: 1,
      title: "Containment",
      timeframe: "30 Minuten - 2 Stunden",
      priority: "KRITISCH",
      icon: Lock,
      color: "from-orange-500 to-red-500",
      description: "Sofortige Eindämmung zur Verhinderung weiterer Schäden",
      objectives: [
        "Weitere Ausbreitung stoppen",
        "Systeme isolieren und sichern",
        "Kritische Daten schützen",
        "Angreifer-Zugang unterbinden"
      ],
      tasks: [
        {
          id: "isolate-systems",
          title: "Betroffene Systeme isolieren",
          description: "Netzwerk-Segmentierung und System-Isolation durchführen",
          critical: true
        },
        {
          id: "disable-accounts",
          title: "Kompromittierte Accounts deaktivieren",
          description: "Sofortige Sperrung aller verdächtigen Benutzerkonten",
          critical: true
        },
        {
          id: "patch-vulnerabilities",
          title: "Kritische Schwachstellen schließen",
          description: "Sofortige Patches für bekannte Exploits anwenden",
          critical: true
        },
        {
          id: "backup-protect",
          title: "Backup-Systeme sichern",
          description: "Backup-Infrastruktur vor Kompromittierung schützen",
          critical: true
        },
        {
          id: "network-monitor",
          title: "Enhanced Monitoring aktivieren",
          description: "Verstärkte Überwachung kritischer Systeme einrichten",
          critical: false
        },
        {
          id: "communication-secure",
          title: "Sichere Kommunikationskanäle etablieren",
          description: "Out-of-band Kommunikation für IR-Team einrichten",
          critical: false
        }
      ],
      stakeholders: ["Network Security", "System Admins", "IT Operations", "Security Team"],
      tools: ["Firewalls", "Network Segmentation", "EDR", "Access Management"],
      deliverables: ["Containment Report", "Isolated Systems List", "Security Updates"]
    },
    {
      id: 2,
      title: "Eradication",
      timeframe: "2-8 Stunden",
      priority: "HOCH",
      icon: Target,
      color: "from-yellow-500 to-orange-500",
      description: "Vollständige Entfernung der Bedrohung aus der Umgebung",
      objectives: [
        "Malware komplett entfernen",
        "Backdoors identifizieren und schließen",
        "Kompromittierte Systeme bereinigen",
        "Root Cause beheben"
      ],
      tasks: [
        {
          id: "malware-remove",
          title: "Malware und Artefakte entfernen",
          description: "Vollständige Bereinigung aller Schadsoftware",
          critical: true
        },
        {
          id: "backdoor-hunt",
          title: "Persistence-Mechanismen aufspüren",
          description: "Systematische Suche nach Backdoors und Persistenz",
          critical: true
        },
        {
          id: "system-rebuild",
          title: "Kompromittierte Systeme neu aufsetzen",
          description: "Clean Rebuild kritischer Systeme von vertrauenswürdigen Backups",
          critical: true
        },
        {
          id: "vulnerability-fix",
          title: "Root Cause Vulnerabilities beheben",
          description: "Ursprüngliche Schwachstellen dauerhaft schließen",
          critical: true
        },
        {
          id: "ioc-cleanup",
          title: "IOCs aus der Umgebung entfernen",
          description: "Alle Indicators of Compromise systematisch beseitigen",
          critical: false
        },
        {
          id: "hardening-apply",
          title: "Zusätzliche Härtungsmaßnahmen implementieren",
          description: "Enhanced Security Controls auf betroffenen Systemen",
          critical: false
        }
      ],
      stakeholders: ["Malware Analysts", "System Engineers", "Security Architects"],
      tools: ["Anti-Malware", "Forensic Tools", "System Imaging", "Vulnerability Scanners"],
      deliverables: ["Eradication Report", "Cleaned Systems", "Hardening Documentation"]
    },
    {
      id: 3,
      title: "Recovery",
      timeframe: "4-24 Stunden",
      priority: "MITTEL",
      icon: Activity,
      color: "from-blue-500 to-indigo-500",
      description: "Sichere Wiederherstellung des Normalbetriebs",
      objectives: [
        "Systeme sicher wieder online bringen",
        "Business Operations wiederherstellen",
        "Enhanced Monitoring implementieren",
        "Validation der Sicherheit durchführen"
      ],
      tasks: [
        {
          id: "systems-restore",
          title: "Systeme schrittweise wiederherstellen",
          description: "Kontrollierte Wiederherstellung der IT-Services",
          critical: true
        },
        {
          id: "security-validate",
          title: "Security Posture validieren",
          description: "Umfassende Sicherheitsprüfung vor Go-Live",
          critical: true
        },
        {
          id: "monitoring-enhance",
          title: "Enhanced Monitoring implementieren",
          description: "Verbesserte Überwachung und Alerting einrichten",
          critical: true
        },
        {
          id: "user-access-restore",
          title: "Benutzer-Zugriffe kontrolliert wiederherstellen",
          description: "Schrittweise Wiederherstellung von User Access",
          critical: true
        },
        {
          id: "business-validate",
          title: "Business Functions testen",
          description: "Validierung kritischer Geschäftsprozesse",
          critical: false
        },
        {
          id: "performance-monitor",
          title: "System Performance überwachen",
          description: "Kontinuierliche Überwachung der Systemleistung",
          critical: false
        }
      ],
      stakeholders: ["IT Operations", "Business Units", "Quality Assurance", "Security Team"],
      tools: ["Monitoring Systems", "Testing Tools", "Access Management", "Performance Tools"],
      deliverables: ["Recovery Plan", "System Validation", "Go-Live Approval"]
    },
    {
      id: 4,
      title: "Post-Incident Activities",
      timeframe: "1-2 Wochen",
      priority: "WICHTIG",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      description: "Analyse, Dokumentation und Verbesserung der Incident Response",
      objectives: [
        "Umfassende Lessons Learned erstellen",
        "Incident Response verbessern",
        "Prozesse und Tools optimieren",
        "Team Training anpassen"
      ],
      tasks: [
        {
          id: "incident-analysis",
          title: "Comprehensive Incident Analysis",
          description: "Detaillierte Analyse von Ursachen und Response-Effektivität",
          critical: true
        },
        {
          id: "timeline-complete",
          title: "Vollständige Timeline erstellen",
          description: "Genaue Chronologie aller Ereignisse und Maßnahmen",
          critical: true
        },
        {
          id: "lessons-learned",
          title: "Lessons Learned Workshop durchführen",
          description: "Team-Workshop zur Identifikation von Verbesserungen",
          critical: true
        },
        {
          id: "process-improve",
          title: "IR-Prozesse verbessern",
          description: "Updates der Incident Response Procedures",
          critical: true
        },
        {
          id: "training-update",
          title: "Training-Programme anpassen",
          description: "Schulungsinhalte basierend auf Erkenntnissen aktualisieren",
          critical: false
        },
        {
          id: "metrics-review",
          title: "IR-Metriken evaluieren",
          description: "Response-Zeiten und Effektivität messen",
          critical: false
        }
      ],
      stakeholders: ["IR Team", "Management", "Training Team", "Process Owners"],
      tools: ["Documentation Tools", "Analysis Software", "Training Platforms"],
      deliverables: ["Final Incident Report", "Lessons Learned", "Process Improvements"]
    }
  ];

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const getTotalTasks = () => phases.reduce((total, phase) => total + phase.tasks.length, 0);
  const progressPercentage = (completedTasks.length / getTotalTasks()) * 100;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'KRITISCH': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse';
      case 'HOCH': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'MITTEL': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'WICHTIG': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <Header />
      
      {/* Fixed Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <Shield className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold text-slate-300">Security Incident Response Progress</span>
              <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30">
                {completedTasks.length}/{getTotalTasks()} Tasks
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-slate-700 text-slate-200">
                Phase {currentPhase + 1}/5
              </Badge>
            </div>
          </div>
          <Progress value={progressPercentage} className="h-2" />
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full mb-8 border border-orange-500/20"
            >
              <Shield className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">Security Incident Response</span>
              <Target className="h-5 w-5 text-red-400" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Security</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Incident
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
              Strukturierte <span className="font-semibold text-orange-300">5-Phasen Methodik</span> für 
              professionelle Reaktion auf IT-Sicherheitsvorfälle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold">
                <Play className="mr-2 h-5 w-5" />
                Incident Response starten
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-orange-500/30 hover:border-orange-400 text-orange-300 hover:bg-orange-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                <Download className="mr-2 h-5 w-5" />
                Playbook herunterladen
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* NIST Framework Overview */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">NIST Incident Response Framework</h3>
              <p className="text-slate-300">Bewährte 4-Phasen Methodik für effektive Incident Response</p>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { phase: "Preparation", icon: Settings, description: "Tools, Prozesse, Training" },
                { phase: "Detection & Analysis", icon: Search, description: "Erkennung und Bewertung" },
                { phase: "Containment, Eradication & Recovery", icon: Shield, description: "Eindämmung und Bereinigung" },
                { phase: "Post-Incident Activity", icon: Brain, description: "Lessons Learned" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{item.phase}</h4>
                  <p className="text-sm text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={cn(
                  "relative group",
                  currentPhase === phase.id && "ring-2 ring-orange-500/50"
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
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {phase.stakeholders.length} Teams
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
                            ? "bg-orange-600 hover:bg-orange-700 text-white" 
                            : "border-slate-600 text-slate-300"
                        )}
                      >
                        {currentPhase === phase.id ? "Aktiv" : "Aktivieren"}
                      </Button>
                    </div>

                    {/* Objectives */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-orange-400" />
                        Ziele dieser Phase
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.objectives.map((objective, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                            <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
                            <span className="text-sm text-slate-300">{objective}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tasks */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-400" />
                        Aufgaben ({phase.tasks.filter(t => completedTasks.includes(t.id)).length}/{phase.tasks.length})
                      </h4>
                      <div className="space-y-3">
                        {phase.tasks.map((task, idx) => (
                          <motion.div 
                            key={task.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            className={cn(
                              "flex items-start gap-3 p-4 rounded-xl border transition-all duration-300",
                              completedTasks.includes(task.id)
                                ? "bg-green-500/10 border-green-500/30"
                                : "bg-slate-700/50 border-slate-600/50 hover:border-slate-500/50",
                              task.critical && "border-l-4 border-l-red-500"
                            )}
                          >
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => toggleTask(task.id)}
                              className="p-1 h-auto"
                            >
                              {completedTasks.includes(task.id) ? (
                                <CheckCircle className="w-5 h-5 text-green-400" />
                              ) : (
                                <Circle className="w-5 h-5 text-slate-400" />
                              )}
                            </Button>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className={cn(
                                  "font-semibold",
                                  completedTasks.includes(task.id) ? "text-green-300" : "text-white"
                                )}>
                                  {task.title}
                                </span>
                                {task.critical && (
                                  <Badge className="bg-red-500/20 text-red-300 border-red-500/30 text-xs">
                                    Kritisch
                                  </Badge>
                                )}
                              </div>
                              <p className="text-sm text-slate-400">{task.description}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Resources */}
                    <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-slate-700/50">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Stakeholder
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.stakeholders.map((stakeholder, idx) => (
                            <Badge key={idx} className="bg-slate-700 text-slate-200 text-xs">
                              {stakeholder}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          Tools & Systeme
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {phase.tools.map((tool, idx) => (
                            <Badge key={idx} className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                          <FileText className="h-4 w-4" />
                          Deliverables
                        </h4>
                        <div className="space-y-2">
                          {phase.deliverables.map((deliverable, idx) => (
                            <div key={idx} className="text-xs text-slate-400 flex items-center gap-2">
                              <CheckCircle2 className="h-3 w-3 text-green-400 flex-shrink-0" />
                              {deliverable}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
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
                Quick Reference
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300">
              Sofort verfügbare Tools und Kontakte
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Incident Response Playbook",
                description: "Detaillierte Anweisungen für jeden Incident-Typ",
                icon: FileText,
                action: "Playbook öffnen",
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Emergency Contacts",
                description: "24/7 Kontakte für Security Incidents",
                icon: Phone,
                action: "Kontakte anzeigen",
                color: "from-red-500 to-orange-500"
              },
              {
                title: "Forensic Toolkit",
                description: "Tools und Scripts für die Incident Analysis",
                icon: Database,
                action: "Toolkit herunterladen",
                color: "from-orange-500 to-pink-500"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className={cn(
                      "inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6 shadow-lg",
                      resource.color
                    )}>
                      <resource.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{resource.title}</h3>
                    <p className="text-slate-300 mb-6">{resource.description}</p>
                    
                    <Button className={cn(
                      "w-full bg-gradient-to-r text-white",
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
              <Link to="/wissen/krisenmanagement/data-breach-72h">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Data Breach 72h Guide
              </Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
              <Link to="/wissen/krisenmanagement/compliance-audit-emergency">
                Compliance Audit Emergency
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

export default SecurityIncidentGuide;