import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { AlertTriangle, Shield, Target, FileText, Users, Rocket, BarChart3, Activity, Clock, Pause, Timer, Download, Phone, BookOpen, ArrowRight, CheckCircle2, Circle, CheckCircle, Scale, Gavel, FileCheck, ArrowLeft } from "lucide-react";
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
const DataBreach72hGuide = () => {
  const tableOfContents = [
    { id: "critical-timeline", title: "Kritische DSGVO-Fristen", level: 2 },
    { id: "step-0", title: "Sofort-Assessment (0-15 Min)", level: 2 },
    { id: "step-1", title: "Containment & Forensik (15 Min - 2h)", level: 2 },
    { id: "step-2", title: "Risikobewertung & Klassifizierung (2-6h)", level: 2 },
    { id: "step-3", title: "Behördenmeldung (6-24h)", level: 2 },
    { id: "step-4", title: "Betroffenen-Benachrichtigung (24-72h)", level: 2 },
    { id: "step-5", title: "Recovery & Härtung (24-72h)", level: 2 },
    { id: "step-6", title: "Post-Incident Analysis (48-168h)", level: 2 },
    { id: "step-7", title: "Langzeit-Monitoring (1-4 Wochen)", level: 2 },
    { id: "emergency-resources", title: "Emergency Resources", level: 2 }
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const heroRef = useRef(null);
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
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1e3);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };
  const toggleStep = (stepId) => {
    setCompletedSteps(
      (prev) => prev.includes(stepId) ? prev.filter((id) => id !== stepId) : [...prev, stepId]
    );
  };
  const progressPercentage = completedSteps.length / steps.length * 100;
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Data Breach 72h Response Guide – DSGVO Notfall-Leitfaden | Marsstein" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Strukturierte Schritt-für-Schritt Anleitung für DSGVO-konforme Data Breach Response. 8 kritische Phasen in 72h. Jetzt kostenlos nutzen!" }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "Data Breach, DSGVO, Datenschutzverletzung, 72 Stunden, Incident Response, Behördenmeldung, EU-DSGVO Art. 33" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Data Breach 72h Response Guide – DSGVO Notfall-Leitfaden" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Strukturierte Schritt-für-Schritt Anleitung für DSGVO-konforme Data Breach Response. 8 kritische Phasen in 72h." }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://marsstein.de/wissen/krisenmanagement/data-breach-72h" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Data Breach 72h Response Guide – DSGVO Notfall-Leitfaden" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Strukturierte Schritt-für-Schritt Anleitung für DSGVO-konforme Data Breach Response. 8 kritische Phasen in 72h." }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://marsstein.de/wissen/krisenmanagement/data-breach-72h" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Data Breach 72h Response Guide – DSGVO Notfall-Leitfaden",
        "description": "Strukturierte Schritt-für-Schritt Anleitung für DSGVO-konforme Data Breach Response. 8 kritische Phasen in 72h.",
        "author": {
          "@type": "Organization",
          "name": "Marsstein"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Marsstein",
          "logo": {
            "@type": "ImageObject",
            "url": "https://marsstein.de/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://marsstein.de/wissen/krisenmanagement/data-breach-72h"
        },
        "articleSection": "Krisenmanagement",
        "keywords": "Data Breach, DSGVO, Datenschutzverletzung, 72 Stunden, Incident Response"
      }) }),
      /* @__PURE__ */ jsx("style", { children: `
            html {
              scroll-behavior: smooth;
            }
            h1, h2, h3, h4, h5, h6 {
              scroll-margin-top: 120px;
            }
            .toc-nav a {
              -webkit-tap-highlight-color: rgba(59, 130, 246, 0.1);
            }
            @media (max-width: 768px) {
              .toc-nav {
                max-height: 400px;
                overflow-y: auto;
              }
              h1, h2, h3, h4, h5, h6 {
                scroll-margin-top: 140px;
              }
            }
          ` })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("div", { className: "fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-slate-300", children: "Data Breach Response Progress" }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30", children: [
              completedSteps.length,
              "/",
              steps.length,
              " Schritte"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-slate-400" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-400", children: formatTime(timeElapsed) })
            ] }),
            /* @__PURE__ */ jsxs(
              Button,
              {
                size: "sm",
                variant: isTimerRunning ? "destructive" : "default",
                onClick: () => setIsTimerRunning(!isTimerRunning),
                children: [
                  isTimerRunning ? /* @__PURE__ */ jsx(Pause, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Timer, { className: "h-4 w-4" }),
                  isTimerRunning ? "Pause" : "Start"
                ]
              }
            )
          ] })
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
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 backdrop-blur-sm rounded-full mb-8 border border-red-500/20",
                    children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400 animate-pulse" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-red-300", children: "DSGVO Notfall-Leitfaden" }),
                      /* @__PURE__ */ jsx(Timer, { className: "h-5 w-5 text-orange-400" })
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
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Data Breach 72h Response Guide" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent", children: "DSGVO Notfall-Leitfaden" })
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
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-300", children: "Schritt-für-Schritt Anleitung" }),
                      " für die DSGVO-konforme Reaktion auf Datenschutzverletzungen. Folgen Sie unserem strukturierten",
                      /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement", className: "text-red-300 hover:text-red-200 font-semibold underline", children: "Krisenmanagement-Leitfaden" }),
                      " für optimale Vorbereitung."
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
                      /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold", children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                        "Notfall-Checkliste laden"
                      ] }),
                      /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-red-500/30 hover:border-red-400 text-red-300 hover:bg-red-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: [
                        /* @__PURE__ */ jsx(Phone, { className: "mr-2 h-5 w-5" }),
                        "24/7 Hotline"
                      ] })
                    ]
                  }
                )
              ]
            }
          ) })
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          className: "bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-4 sm:p-8",
          children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "toc-nav", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-white mb-6 flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "h-6 w-6 text-blue-400" }),
              "Inhaltsverzeichnis"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4", children: tableOfContents.map((item, index) => /* @__PURE__ */ jsxs(
              motion.a,
              {
                href: `#${item.id}`,
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { delay: index * 0.05 },
                className: "flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white transition-all duration-200 no-underline group text-sm sm:text-base min-h-[48px]",
                children: [
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-blue-400 group-hover:text-blue-300" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: item.title })
                ]
              },
              item.id
            )) })
          ] })
        }
      ) }) }),
      /* @__PURE__ */ jsx("section", { id: "critical-timeline", className: "py-8 px-4 sm:px-6 lg:px-8", style: { scrollMarginTop: "96px" }, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          className: "bg-gradient-to-r from-red-500/10 to-orange-500/10 border-2 border-red-500/30 rounded-2xl p-8 backdrop-blur-sm",
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-8 w-8 text-red-400 animate-pulse flex-shrink-0 mt-1" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", children: "Kritische DSGVO-Fristen" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center p-3 sm:p-4 bg-slate-800/30 rounded-xl", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl font-black text-red-400 mb-2", children: "72h" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs sm:text-sm font-semibold text-slate-300", children: "Behördenmeldung" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "DSGVO Art. 33" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center p-3 sm:p-4 bg-slate-800/30 rounded-xl", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-xl sm:text-2xl md:text-3xl font-black text-orange-400 mb-2", children: "Unverzüglich" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs sm:text-sm font-semibold text-slate-300", children: "Betroffenen-Info" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "DSGVO Art. 34" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center p-3 sm:p-4 bg-slate-800/30 rounded-xl", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl font-black text-pink-400 mb-2", children: "€20M" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs sm:text-sm font-semibold text-slate-300", children: "Max. Bußgeld" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "4% Jahresumsatz" })
                ] })
              ] })
            ] })
          ] })
        }
      ) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: steps.map((step, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          className: cn(
            "relative group",
            currentStep === step.id && "ring-2 ring-red-500/50"
          ),
          children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
              `bg-gradient-to-r ${step.color}`,
              completedSteps.includes(step.id) ? "opacity-30" : "opacity-0 group-hover:opacity-20"
            ) }),
            /* @__PURE__ */ jsx(Card, { id: `step-${step.id}`, className: cn(
              "border-2 transition-all duration-500 group-hover:shadow-2xl overflow-hidden",
              completedSteps.includes(step.id) ? "border-green-500/50 bg-gradient-to-br from-slate-800/90 to-green-900/20" : "border-slate-700/50 bg-slate-800/80"
            ), style: { scrollMarginTop: "120px" }, children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      whileHover: { scale: 1.1 },
                      className: cn(
                        "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                        step.color
                      ),
                      children: /* @__PURE__ */ jsx(step.icon, { className: "h-8 w-8 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white", children: step.title }),
                      /* @__PURE__ */ jsx(Badge, { className: getPriorityColor(step.priority), children: step.priority })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-2", children: step.description }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-400", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                        step.timeframe
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }),
                        step.stakeholders.length,
                        " Teams"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: () => toggleStep(step.id),
                    size: "sm",
                    variant: completedSteps.includes(step.id) ? "default" : "outline",
                    className: cn(
                      "transition-all duration-300",
                      completedSteps.includes(step.id) ? "bg-green-600 hover:bg-green-700 text-white" : "border-slate-600 text-slate-300"
                    ),
                    children: completedSteps.includes(step.id) ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-400" }),
                    "Aufgaben"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: step.tasks.map((task, idx) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { delay: idx * 0.1, duration: 0.4 },
                      className: "flex items-start gap-3 p-3 bg-slate-700/50 rounded-xl",
                      children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: task })
                      ]
                    },
                    idx
                  )) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400" }),
                    "Checkliste"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: step.checklist.map((item, idx) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { delay: idx * 0.1, duration: 0.4 },
                      className: "flex items-start gap-3 p-3 bg-slate-700/50 rounded-xl",
                      children: [
                        /* @__PURE__ */ jsx(Circle, { className: "w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: item })
                      ]
                    },
                    idx
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-6 border-t border-slate-700/50", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }),
                    "Beteiligte Teams"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: step.stakeholders.map((stakeholder, idx) => /* @__PURE__ */ jsx(Badge, { className: "bg-slate-700 text-slate-200 text-xs", children: stakeholder }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4" }),
                    "Rechtliche Anforderungen"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: step.legalRequirements.map((req, idx) => /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400 flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Gavel, { className: "h-3 w-3 text-purple-400 flex-shrink-0 mt-0.5" }),
                    req
                  ] }, idx)) })
                ] })
              ] })
            ] }) })
          ]
        },
        step.id
      )) }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-800/50 via-red-900/30 to-slate-800/50" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent", children: "Emergency Resources" }) }),
                /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-300", children: "Sofortige Hilfe und Downloads für den Notfall" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8", children: [
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
                  /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
                  resource.action
                ] })
              ] }) })
            },
            index
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-slate-700 text-slate-300 hover:bg-slate-800", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
          "Zurück zu Krisenmanagement"
        ] }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-gradient-to-r from-red-500 to-orange-500 text-white", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement/security-incident", children: [
          "Security Incident Guide",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  DataBreach72hGuide as default
};
