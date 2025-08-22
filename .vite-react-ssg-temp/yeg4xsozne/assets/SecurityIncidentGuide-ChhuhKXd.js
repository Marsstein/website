import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Search, Lock, Target, Activity, Brain, Home, ChevronRight, List, Shield, AlertTriangle, FileText, CheckCircle2, Play, Download, Settings, Clock, Users, CheckCircle, Circle, Phone, Database, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-progress";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const SecurityIncidentGuide = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const toggleTask = (taskId) => {
    setCompletedTasks(
      (prev) => prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "KRITISCH":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse";
      case "HOCH":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100";
      case "MITTEL":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
      case "WICHTIG":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
    }
  };
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
  const getTotalTasks = () => phases.reduce((total, phase) => total + phase.tasks.length, 0);
  const progressPercentage = completedTasks.length / getTotalTasks() * 100;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("nav", { className: "bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("ol", { className: "flex items-center py-3 text-sm", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "text-slate-400 hover:text-orange-400 transition-colors flex items-center", children: [
        /* @__PURE__ */ jsx(Home, { className: "h-4 w-4 mr-1" }),
        "Home"
      ] }) }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 mx-2 text-slate-600" }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen", className: "text-slate-400 hover:text-orange-400 transition-colors", children: "Wissen" }) }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 mx-2 text-slate-600" }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement", className: "text-slate-400 hover:text-orange-400 transition-colors", children: "Krisenmanagement" }) }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 mx-2 text-slate-600" }),
      /* @__PURE__ */ jsx("li", { className: "text-orange-400 font-semibold", children: "Security Incident Response" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8", children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/60 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsx(List, { className: "h-5 w-5 text-orange-400" }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-white", children: "Inhaltsverzeichnis" })
      ] }),
      /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#incident-overview", className: "text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
          "Incident Response Überblick"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#response-phases", className: "text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4" }),
          "Response Phasen"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#critical-actions", className: "text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
          "Kritische Maßnahmen"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#documentation", className: "text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
          "Dokumentation & Compliance"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#post-incident", className: "text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
          "Post-Incident Activities"
        ] }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 py-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-orange-400" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-slate-300", children: "Security Incident Response Progress" }),
          /* @__PURE__ */ jsxs(Badge, { className: "bg-orange-500/20 text-orange-300 border-orange-500/30", children: [
            completedTasks.length,
            "/",
            getTotalTasks(),
            " Tasks"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(Badge, { className: "bg-slate-700 text-slate-200", children: [
          "Phase ",
          currentPhase + 1,
          "/5"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(Progress, { value: progressPercentage, className: "h-2" })
    ] }) }),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        ref: heroRef,
        style: { y },
        className: "relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl relative z-10", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { delay: 0.2, type: "spring", stiffness: 200 },
                  className: "inline-flex items-center gap-3 px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full mb-8 border border-orange-500/20",
                  children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-orange-400" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-orange-300", children: "Security Incident Response" }),
                    /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-red-400" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4, duration: 0.8 },
                  className: "text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: "Security" }),
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent", children: "Incident" }),
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: "Response" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.p,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6, duration: 0.8 },
                  className: "text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12",
                  children: [
                    "Strukturierte ",
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-orange-300", children: "5-Phasen Methodik" }),
                    " für professionelle Reaktion auf IT-Sicherheitsvorfälle."
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.8, duration: 0.8 },
                  className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                  children: [
                    /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold", children: [
                      /* @__PURE__ */ jsx(Play, { className: "mr-2 h-5 w-5" }),
                      "Incident Response starten"
                    ] }),
                    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-orange-500/30 hover:border-orange-400 text-orange-300 hover:bg-orange-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "Playbook herunterladen"
                    ] })
                  ]
                }
              )
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        className: "bg-gradient-to-r from-orange-500/10 to-red-500/10 border-2 border-orange-500/30 rounded-2xl p-8 backdrop-blur-sm",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "NIST Incident Response Framework" }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: "Bewährte 4-Phasen Methodik für effektive Incident Response" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-6", children: [
            { phase: "Preparation", icon: Settings, description: "Tools, Prozesse, Training" },
            { phase: "Detection & Analysis", icon: Search, description: "Erkennung und Bewertung" },
            { phase: "Containment, Eradication & Recovery", icon: Shield, description: "Eindämmung und Bereinigung" },
            { phase: "Post-Incident Activity", icon: Brain, description: "Lessons Learned" }
          ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex p-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 mb-4", children: /* @__PURE__ */ jsx(item.icon, { className: "h-6 w-6 text-white" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: item.phase }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: item.description })
          ] }, index)) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: phases.map((phase, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { delay: index * 0.1, duration: 0.6 },
        className: cn(
          "relative group",
          currentPhase === phase.id && "ring-2 ring-orange-500/50"
        ),
        children: [
          /* @__PURE__ */ jsx("div", { className: cn(
            "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
            `bg-gradient-to-r ${phase.color}`,
            "opacity-0 group-hover:opacity-20"
          ) }),
          /* @__PURE__ */ jsx(Card, { className: "border-2 border-slate-700/50 bg-slate-800/80 transition-all duration-500 group-hover:shadow-2xl overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    whileHover: { scale: 1.1 },
                    className: cn(
                      "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                      phase.color
                    ),
                    children: /* @__PURE__ */ jsx(phase.icon, { className: "h-8 w-8 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: phase.title }),
                    /* @__PURE__ */ jsx(Badge, { className: getPriorityColor(phase.priority), children: phase.priority })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-2", children: phase.description }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-400", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                      phase.timeframe
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }),
                      phase.stakeholders.length,
                      " Teams"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  onClick: () => setCurrentPhase(phase.id),
                  size: "sm",
                  variant: currentPhase === phase.id ? "default" : "outline",
                  className: cn(
                    "transition-all duration-300",
                    currentPhase === phase.id ? "bg-orange-600 hover:bg-orange-700 text-white" : "border-slate-600 text-slate-300"
                  ),
                  children: currentPhase === phase.id ? "Aktiv" : "Aktivieren"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-orange-400" }),
                "Ziele dieser Phase"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: phase.objectives.map((objective, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-orange-400 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: objective })
              ] }, idx)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-400" }),
                "Aufgaben (",
                phase.tasks.filter((t) => completedTasks.includes(t.id)).length,
                "/",
                phase.tasks.length,
                ")"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: phase.tasks.map((task, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { delay: idx * 0.1, duration: 0.4 },
                  className: cn(
                    "flex items-start gap-3 p-4 rounded-xl border transition-all duration-300",
                    completedTasks.includes(task.id) ? "bg-green-500/10 border-green-500/30" : "bg-slate-700/50 border-slate-600/50 hover:border-slate-500/50",
                    task.critical && "border-l-4 border-l-red-500"
                  ),
                  children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "ghost",
                        onClick: () => toggleTask(task.id),
                        className: "p-1 h-auto",
                        children: completedTasks.includes(task.id) ? /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-green-400" }) : /* @__PURE__ */ jsx(Circle, { className: "w-5 h-5 text-slate-400" })
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                        /* @__PURE__ */ jsx("span", { className: cn(
                          "font-semibold",
                          completedTasks.includes(task.id) ? "text-green-300" : "text-white"
                        ), children: task.title }),
                        task.critical && /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30 text-xs", children: "Kritisch" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: task.description })
                    ] })
                  ]
                },
                task.id
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 pt-6 border-t border-slate-700/50", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }),
                  "Stakeholder"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: phase.stakeholders.map((stakeholder, idx) => /* @__PURE__ */ jsx(Badge, { className: "bg-slate-700 text-slate-200 text-xs", children: stakeholder }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4" }),
                  "Tools & Systeme"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: phase.tools.map((tool, idx) => /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs", children: tool }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
                  "Deliverables"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.deliverables.map((deliverable, idx) => /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-400 flex-shrink-0" }),
                  deliverable
                ] }, idx)) })
              ] })
            ] })
          ] }) })
        ]
      },
      phase.id
    )) }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-800/50 via-orange-900/30 to-slate-800/50" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent", children: "Quick Reference" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-300", children: "Sofort verfügbare Tools und Kontakte" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
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
        ].map((resource, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.2, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6 shadow-lg",
                resource.color
              ), children: /* @__PURE__ */ jsx(resource.icon, { className: "h-8 w-8 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 text-white", children: resource.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: resource.description }),
              /* @__PURE__ */ jsxs(Button, { className: cn(
                "w-full bg-gradient-to-r text-white",
                resource.color
              ), children: [
                resource.action,
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] })
            ] }) })
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "post-incident", className: "py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-slate-700 text-slate-300 hover:bg-slate-800", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement/data-breach-72h", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        "Data Breach 72h Guide"
      ] }) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-gradient-to-r from-orange-500 to-red-500 text-white", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement/compliance-audit-emergency", children: [
        "Compliance Audit Emergency",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "Verwandte" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent", children: "Ressourcen" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300", children: "Weitere wichtige Krisenmanagement-Themen" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: 0.1, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 mb-4", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 text-white", children: "72h Data Breach Response" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Strukturierter Notfallplan für Datenschutzverletzungen nach DSGVO Artikel 33/34." }),
              /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement/data-breach-72h", children: [
                "Mehr erfahren",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: 0.2, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 text-white", children: "Krisenmanagement Übersicht" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Alle Notfallpläne und Krisenszenarien für Datenschutz-Compliance im Überblick." }),
              /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement", children: [
                "Mehr erfahren",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: 0.3, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-4", children: /* @__PURE__ */ jsx(Lock, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 text-white", children: "Technische Maßnahmen" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Präventive Sicherheitsmaßnahmen zur Vermeidung von Security Incidents." }),
              /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/technische-massnahmen/verschluesselung", children: [
                "Mehr erfahren",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] }) })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  SecurityIncidentGuide as default
};
