import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  AlertTriangle, 
  CheckCircle2, 
  CheckCircle,
  Circle,
  ArrowRight, 
  ArrowLeft,
  Clock,
  Star,
  Download,
  BookOpen,
  Target,
  Lightbulb,
  FileText,
  Users,
  Scale,
  Lock,
  Eye,
  Calendar,
  Share2,
  Bookmark,
  ExternalLink,
  Zap,
  Brain,
  Award,
  TrendingUp,
  Settings,
  Database,
  Building2,
  UserCheck,
  ShieldCheck,
  FileCheck,
  Gavel,
  Timer,
  Rocket,
  Flag,
  MapPin,
  Globe,
  Phone,
  MessageSquare,
  Bell,
  Shield,
  Search,
  Filter,
  Activity,
  RefreshCw,
  Plus,
  Minus,
  X,
  Check,
  Edit3,
  Copy,
  Save,
  Trash2,
  Upload,
  Mail,
  Send,
  CreditCard,
  Package,
  Truck,
  Building,
  Home,
  Wifi,
  Monitor,
  BarChart3,
  PieChart,
  LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DataBreach72hGuide: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const steps = [
    {
      id: 0,
      title: "Sofort-Assessment (0-15 Min)",
      timeframe: "0-15 Minuten",
      priority: "KRITISCH",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500",
      description: "Erste Bewertung des Vorfalls und Aktivierung des Incident Response Teams",
      tasks: [
        "Vorfall identifiziert und Alarmierung des IR-Teams",
        "Erste Einschätzung: Art, Umfang und Schwere des Vorfalls",
        "Betroffene Systeme und Datenarten identifizieren",
        "Sofortige Eindämmungsmaßnahmen einleiten",
        "Incident Response Plan aktivieren",
        "Erste Dokumentation beginnen (Incident Log)"
      ],
      checklist: [
        "IR-Team vollständig informiert und verfügbar?",
        "Betroffene Systeme isoliert oder abgeschaltet?",
        "Art der betroffenen personenbezogenen Daten bekannt?",
        "Ungefähre Anzahl betroffener Personen geschätzt?",
        "Ursache des Vorfalls bekannt oder vermutet?",
        "Dokumentation gestartet?"
      ],
      stakeholders: ["CISO", "Datenschutzbeauftragte", "IT-Team", "Management"],
      legalRequirements: [
        "DSGVO Art. 33: Vorbereitung der Behördenmeldung",
        "Bewertung der Meldepflicht binnen 72h"
      ]
    },
    {
      id: 1,
      title: "Containment & Forensik (15 Min - 2h)",
      timeframe: "15 Minuten - 2 Stunden",
      priority: "KRITISCH",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      description: "Eindämmung des Schadens und Sicherung der Beweise",
      tasks: [
        "Vollständige Isolation betroffener Systeme",
        "Forensische Sicherung kritischer Beweise",
        "Analyse der Angriffsvektoren und -methoden",
        "Bewertung der Datenexfiltration",
        "Sicherstellung der System-Integrität",
        "Detaillierte Impact-Analyse"
      ],
      checklist: [
        "Alle betroffenen Systeme vollständig isoliert?",
        "Forensische Images der kritischen Systeme erstellt?",
        "Angriffsvektoren und -zeitraum identifiziert?",
        "Umfang der Datenexfiltration bestimmt?",
        "Weitere kompromittierte Systeme ausgeschlossen?",
        "Beweiskette dokumentiert und gesichert?"
      ],
      stakeholders: ["IT-Security", "Forensik-Experten", "System-Administratoren"],
      legalRequirements: [
        "Beweissicherung für mögliche Strafverfahren",
        "Dokumentation für Aufsichtsbehörden"
      ]
    },
    {
      id: 2,
      title: "Risikobewertung & Klassifizierung (2-6h)",
      timeframe: "2-6 Stunden",
      priority: "HOCH",
      icon: Target,
      color: "from-yellow-500 to-orange-500",
      description: "Detaillierte Bewertung der Risiken für betroffene Personen",
      tasks: [
        "Risikoanalyse für Grundrechte der Betroffenen",
        "Bewertung des Schadenspotentials",
        "Klassifizierung nach DSGVO-Meldekategorien",
        "Entscheidung über Meldepflicht an Behörden",
        "Entscheidung über Benachrichtigung der Betroffenen",
        "Priorisierung der weiteren Maßnahmen"
      ],
      checklist: [
        "Risikoanalyse für betroffene Personen durchgeführt?",
        "Schwere des Risikos (niedrig/mittel/hoch) bestimmt?",
        "Kategorien betroffener Daten klassifiziert?",
        "Wahrscheinlichkeit und Schwere des Schadens bewertet?",
        "Meldepflicht an Aufsichtsbehörde festgestellt?",
        "Benachrichtigungspflicht der Betroffenen geprüft?"
      ],
      stakeholders: ["Datenschutzbeauftragte", "Rechtsabteilung", "Risikomanagement"],
      legalRequirements: [
        "DSGVO Art. 33 Abs. 1: Risikobewertung für Meldepflicht",
        "DSGVO Art. 34: Bewertung für Benachrichtigung der Betroffenen"
      ]
    },
    {
      id: 3,
      title: "Behördenmeldung (6-24h)",
      timeframe: "6-24 Stunden",
      priority: "HOCH",
      icon: FileText,
      color: "from-blue-500 to-indigo-500",
      description: "Offizielle Meldung an die zuständige Aufsichtsbehörde",
      tasks: [
        "Vorbereitung der Meldung nach DSGVO Art. 33",
        "Sammlung aller erforderlichen Informationen",
        "Kontaktaufnahme mit zuständiger Aufsichtsbehörde",
        "Einreichung der Meldung (innerhalb 72h)",
        "Bestätigung der Meldung durch Behörde",
        "Vorbereitung auf mögliche Nachfragen"
      ],
      checklist: [
        "Zuständige Aufsichtsbehörde identifiziert?",
        "Alle Pflichtangaben nach Art. 33 DSGVO enthalten?",
        "Meldung innerhalb 72h eingereicht?",
        "Bestätigung der Behörde erhalten?",
        "Kontaktdaten für Rückfragen bereitgestellt?",
        "Weitere Informationen für Nachreichung vorbereitet?"
      ],
      stakeholders: ["Datenschutzbeauftragte", "Rechtsabteilung", "Management"],
      legalRequirements: [
        "DSGVO Art. 33: Meldung an Aufsichtsbehörde binnen 72h",
        "Vollständige und wahrheitsgemäße Angaben"
      ]
    },
    {
      id: 4,
      title: "Betroffenen-Benachrichtigung (24-72h)",
      timeframe: "24-72 Stunden",
      priority: "MITTEL",
      icon: Users,
      color: "from-indigo-500 to-purple-500",
      description: "Information der betroffenen Personen über den Datenschutzvorfall",
      tasks: [
        "Entscheidung über Benachrichtigungspflicht",
        "Identifikation aller betroffenen Personen",
        "Erstellung der Benachrichtigung nach DSGVO Art. 34",
        "Versand der Benachrichtigungen",
        "Einrichtung einer Helpline/Hotline",
        "Bearbeitung von Anfragen der Betroffenen"
      ],
      checklist: [
        "Benachrichtigungspflicht abschließend bewertet?",
        "Alle betroffenen Personen identifiziert?",
        "Benachrichtigung gemäß Art. 34 DSGVO erstellt?",
        "Alle Betroffenen rechtzeitig informiert?",
        "Helpline für Betroffene eingerichtet?",
        "Beratung zu Schutzmaßnahmen bereitgestellt?"
      ],
      stakeholders: ["Customer Service", "Datenschutzbeauftragte", "Communications"],
      legalRequirements: [
        "DSGVO Art. 34: Benachrichtigung der Betroffenen",
        "Unverzügliche Information bei hohem Risiko"
      ]
    },
    {
      id: 5,
      title: "Recovery & Härtung (24-72h)",
      timeframe: "24-72 Stunden",
      priority: "MITTEL",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      description: "Wiederherstellung der Systeme und Verbesserung der Sicherheit",
      tasks: [
        "Bereinigung kompromittierter Systeme",
        "Sicherheits-Updates und Patches",
        "Verstärkung der Sicherheitsmaßnahmen",
        "Wiederherstellung des Normalbetriebs",
        "Monitoring verstärken",
        "Backup-Systeme validieren"
      ],
      checklist: [
        "Alle Malware/Schadsoftware entfernt?",
        "Sicherheitslücken geschlossen?",
        "Systeme vollständig wiederhergestellt?",
        "Zusätzliche Sicherheitsmaßnahmen implementiert?",
        "Monitoring und Alerting verstärkt?",
        "Backup-Systeme getestet und funktionsfähig?"
      ],
      stakeholders: ["IT-Team", "Cyber Security", "System-Administratoren"],
      legalRequirements: [
        "Sicherstellung der Datensicherheit",
        "Präventive Maßnahmen zur Risikoreduzierung"
      ]
    },
    {
      id: 6,
      title: "Post-Incident Analysis (48-168h)",
      timeframe: "48 Stunden - 1 Woche",
      priority: "WICHTIG",
      icon: BarChart3,
      color: "from-emerald-500 to-teal-500",
      description: "Umfassende Analyse des Vorfalls und Verbesserung der Prozesse",
      tasks: [
        "Vollständige Ursachenanalyse (Root Cause Analysis)",
        "Bewertung der Incident Response Effektivität",
        "Identifikation von Verbesserungsmöglichkeiten",
        "Update der Incident Response Procedures",
        "Schulung der beteiligten Teams",
        "Erstellung des finalen Incident Reports"
      ],
      checklist: [
        "Root Cause Analysis abgeschlossen?",
        "Incident Response Prozess bewertet?",
        "Lessons Learned dokumentiert?",
        "Verbesserungsmaßnahmen definiert und priorisiert?",
        "Team-Schulungen geplant/durchgeführt?",
        "Abschlussbericht erstellt und genehmigt?"
      ],
      stakeholders: ["Management", "Alle IR-Team Mitglieder", "Compliance"],
      legalRequirements: [
        "Vollständige Dokumentation für Compliance",
        "Nachweis der getroffenen Maßnahmen"
      ]
    },
    {
      id: 7,
      title: "Langzeit-Monitoring (1-4 Wochen)",
      timeframe: "1-4 Wochen",
      priority: "WICHTIG",
      icon: Activity,
      color: "from-teal-500 to-cyan-500",
      description: "Überwachung und Nachverfolgung der implementierten Maßnahmen",
      tasks: [
        "Kontinuierliches Monitoring der Systeme",
        "Verfolgung von Behördenanfragen",
        "Bearbeitung von Betroffenenanfragen",
        "Implementation der Verbesserungsmaßnahmen",
        "Regelmäßige Status-Updates an Management",
        "Vorbereitung auf mögliche rechtliche Schritte"
      ],
      checklist: [
        "Monitoring-Systeme optimal konfiguriert?",
        "Alle Behördenanfragen beantwortet?",
        "Betroffenenanfragen vollständig bearbeitet?",
        "Verbesserungsmaßnahmen umgesetzt?",
        "Management regelmäßig informiert?",
        "Rechtliche Risiken kontinuierlich bewertet?"
      ],
      stakeholders: ["Security Operations", "Legal", "Management", "Compliance"],
      legalRequirements: [
        "Kontinuierliche Compliance-Überwachung",
        "Bereitschaft für Behördenkooperation"
      ]
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleStep = (stepId: number) => {
    setCompletedSteps(prev => 
      prev.includes(stepId) 
        ? prev.filter(id => id !== stepId)
        : [...prev, stepId]
    );
  };

  const progressPercentage = (completedSteps.length / steps.length) * 100;

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Header />
      
      {/* Fixed Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <AlertTriangle className="h-5 w-5 text-red-400" />
              <span className="text-sm font-semibold text-slate-300">Data Breach Response Progress</span>
              <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                {completedSteps.length}/{steps.length} Schritte
              </Badge>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-400">{formatTime(timeElapsed)}</span>
              </div>
              <Button
                size="sm"
                variant={isTimerRunning ? "destructive" : "default"}
                onClick={() => setIsTimerRunning(!isTimerRunning)}
              >
                {isTimerRunning ? <Pause className="h-4 w-4" /> : <Timer className="h-4 w-4" />}
                {isTimerRunning ? 'Pause' : 'Start'}
              </Button>
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 backdrop-blur-sm rounded-full mb-8 border border-red-500/20"
            >
              <AlertTriangle className="h-5 w-5 text-red-400 animate-pulse" />
              <span className="text-sm font-semibold text-red-300">DSGVO Notfall-Leitfaden</span>
              <Timer className="h-5 w-5 text-orange-400" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8"
            >
              <span className="text-white">72-Stunden</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
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
              Strukturierte <span className="font-semibold text-red-300">Schritt-für-Schritt Anleitung</span> für die 
              DSGVO-konforme Reaktion auf Datenschutzverletzungen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold">
                <Download className="mr-2 h-5 w-5" />
                Notfall-Checkliste laden
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-red-500/30 hover:border-red-400 text-red-300 hover:bg-red-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                <Phone className="mr-2 h-5 w-5" />
                24/7 Hotline
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Critical Timeline Alert */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border-2 border-red-500/30 rounded-2xl p-8 backdrop-blur-sm"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-red-400 animate-pulse flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Kritische DSGVO-Fristen</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black text-red-400 mb-2">72h</div>
                    <div className="text-sm font-semibold text-slate-300">Behördenmeldung</div>
                    <div className="text-xs text-slate-400">DSGVO Art. 33</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-orange-400 mb-2">Unverzüglich</div>
                    <div className="text-sm font-semibold text-slate-300">Betroffenen-Info</div>
                    <div className="text-xs text-slate-400">DSGVO Art. 34</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-pink-400 mb-2">€20M</div>
                    <div className="text-sm font-semibold text-slate-300">Max. Bußgeld</div>
                    <div className="text-xs text-slate-400">4% Jahresumsatz</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={cn(
                  "relative group",
                  currentStep === step.id && "ring-2 ring-red-500/50"
                )}
              >
                {/* Glow Effect */}
                <div className={cn(
                  "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                  `bg-gradient-to-r ${step.color}`,
                  completedSteps.includes(step.id) ? "opacity-30" : "opacity-0 group-hover:opacity-20"
                )} />
                
                <Card className={cn(
                  "border-2 transition-all duration-500 group-hover:shadow-2xl overflow-hidden",
                  completedSteps.includes(step.id) 
                    ? "border-green-500/50 bg-gradient-to-br from-slate-800/90 to-green-900/20" 
                    : "border-slate-700/50 bg-slate-800/80"
                )}>
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-start gap-4">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className={cn(
                            "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                            step.color
                          )}
                        >
                          <step.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                            <Badge className={getPriorityColor(step.priority)}>
                              {step.priority}
                            </Badge>
                          </div>
                          <p className="text-slate-300 mb-2">{step.description}</p>
                          <div className="flex items-center gap-4 text-sm text-slate-400">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {step.timeframe}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              {step.stakeholders.length} Teams
                            </div>
                          </div>
                        </div>
                      </div>
                      <Button
                        onClick={() => toggleStep(step.id)}
                        size="sm"
                        variant={completedSteps.includes(step.id) ? "default" : "outline"}
                        className={cn(
                          "transition-all duration-300",
                          completedSteps.includes(step.id) 
                            ? "bg-green-600 hover:bg-green-700 text-white" 
                            : "border-slate-600 text-slate-300"
                        )}
                      >
                        {completedSteps.includes(step.id) ? (
                          <CheckCircle2 className="h-4 w-4" />
                        ) : (
                          <Circle className="h-4 w-4" />
                        )}
                      </Button>
                    </div>

                    {/* Tasks */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <FileText className="h-5 w-5 text-blue-400" />
                          Aufgaben
                        </h4>
                        <div className="space-y-3">
                          {step.tasks.map((task, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.4 }}
                              className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-xl"
                            >
                              <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-300">{task}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400" />
                          Checkliste
                        </h4>
                        <div className="space-y-3">
                          {step.checklist.map((item, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.4 }}
                              className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-xl"
                            >
                              <Circle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-300">{item}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stakeholders & Legal */}
                    <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-700/50">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Beteiligte Teams
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {step.stakeholders.map((stakeholder, idx) => (
                            <Badge key={idx} className="bg-slate-700 text-slate-200 text-xs">
                              {stakeholder}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2">
                          <Scale className="h-4 w-4" />
                          Rechtliche Anforderungen
                        </h4>
                        <div className="space-y-2">
                          {step.legalRequirements.map((req, idx) => (
                            <div key={idx} className="text-xs text-slate-400 flex items-start gap-2">
                              <Gavel className="h-3 w-3 text-purple-400 flex-shrink-0 mt-0.5" />
                              {req}
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

      {/* Emergency Resources */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-red-900/30 to-slate-800/50" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Emergency Resources
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300">
              Sofortige Hilfe und Downloads für den Notfall
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Incident Response Checkliste",
                description: "Druckbare Checkliste für den sofortigen Einsatz",
                icon: FileCheck,
                action: "PDF Download",
                color: "from-red-500 to-orange-500"
              },
              {
                title: "Behördenmeldung Template",
                description: "Vorgefertigte Meldung nach DSGVO Art. 33",
                icon: FileText,
                action: "Template laden",
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Emergency Contacts",
                description: "Wichtige Kontakte für Datenschutz-Notfälle",
                icon: Phone,
                action: "Kontakte anzeigen",
                color: "from-red-500 to-pink-500"
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
                      <Download className="mr-2 h-4 w-4" />
                      {resource.action}
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
              <Link to="/wissen/krisenmanagement">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Zurück zu Krisenmanagement
              </Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
              <Link to="/wissen/krisenmanagement/security-incident">
                Security Incident Guide
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

export default DataBreach72hGuide;