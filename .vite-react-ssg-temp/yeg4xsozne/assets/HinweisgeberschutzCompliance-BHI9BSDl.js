import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { c as cn } from "../main.mjs";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2, PlayCircle, ArrowRight, Download, MessageSquare, Star, Scale, FileCheck, Timer, Building2, Globe, FileText, Shield, Bot, Gavel, Calendar, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "react-helmet-async";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const HinweisgeberschutzCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(89);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hinweisgeberschutz Compliance Service",
    "description": "Whistleblower-System nach HinSchG: Digitale Meldestelle mit Vertraulichkeitsschutz",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Whistleblower Protection System",
    "areaServed": "DE"
  };
  const painPoints = [
    {
      icon: Scale,
      title: "Komplexe rechtliche Anforderungen",
      description: "Das HinSchG erfordert strukturierte interne Meldestellen mit strikten Vertraulichkeits- und Fristenvorgaben (7/3-Monats-Regel).",
      impact: "Kritisch",
      example: "Internal Reporting Systems, Confidentiality Protocols, Investigation Procedures, Documentation Requirements"
    },
    {
      icon: ShieldCheck,
      title: "Schutz vor Vergeltungsmaßnahmen",
      description: "Absolute Vertraulichkeit und Schutz der Hinweisgeber vor Repressalien - rechtlich bindend und durchsetzbar.",
      impact: "Kritisch",
      example: "Whistleblower Identity Protection, Anti-Retaliation Measures, Anonymous Reporting Channels"
    },
    {
      icon: FileCheck,
      title: "Sichere Fallbearbeitung",
      description: "Strukturierte Aufnahme, Bearbeitung und Dokumentation von Hinweisen unter Einhaltung aller Datenschutzbestimmungen.",
      impact: "Hoch",
      example: "Case Management Workflows, DSGVO-compliant Processing, Audit Trail Documentation"
    },
    {
      icon: Timer,
      title: "Strikte Bearbeitungsfristen",
      description: "Gesetzlich vorgeschriebene Fristen: Eingangsbestätigung binnen 7 Tagen, Abschluss der Nachforschungen binnen 3 Monaten.",
      impact: "Hoch",
      example: "Automated Acknowledgments, Deadline Tracking, Progress Monitoring, Status Communication"
    }
  ];
  const solutions = [
    {
      title: "KI-gestützte Hinweisaufnahme",
      description: "Intelligente Kategorisierung und Priorisierung eingehender Hinweise mit automatischer Compliance-Prüfung",
      features: [
        "Automated Case Classification & Routing",
        "AI-Powered Risk Assessment",
        "Intelligent Content Analysis",
        "Multi-Channel Input Processing"
      ],
      icon: Bot,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Legal Expert Integration",
      description: "Direkter Zugang zu spezialisierten Arbeitsrechts- und Compliance-Experten für komplexe Fälle",
      features: [
        "Specialist Legal Advisory",
        "Case-specific Legal Analysis",
        "Retaliation Risk Assessment",
        "Investigation Support & Guidance"
      ],
      icon: Gavel,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Sichere Compliance Platform",
      description: "End-to-End verschlüsselte Plattform mit vollständiger Anonymität und DSGVO-Compliance",
      features: [
        "End-to-End Encryption",
        "Anonymous Reporting Channels",
        "DSGVO-compliant Data Processing",
        "Secure Case Documentation"
      ],
      icon: Shield,
      color: "from-purple-500 to-violet-600"
    }
  ];
  const useCases = [
    {
      title: "Großkonzern - Compliance Transformation",
      challenge: "DAX-Unternehmen benötigt HinSchG-konforme interne Meldestelle für 50.000+ Mitarbeiter",
      solution: "Multi-Channel Platform + AI Case Management + Legal Expert Support + Anonymous Reporting",
      outcome: "Vollständige HinSchG-Compliance mit 95% automatisierter Fallbearbeitung",
      timeline: "4 Monate",
      complexity: "Hoch"
    },
    {
      title: "Mittelständisches Unternehmen - Erste Implementierung",
      challenge: "Familienunternehmen (500 MA) implementiert erstmals strukturierte Whistleblowing-Prozesse",
      solution: "Turnkey Solution + Legal Framework Setup + Employee Training + Process Documentation",
      outcome: "Erfolgreiche Implementierung mit 100% rechtlicher Compliance und Mitarbeiterakzeptanz",
      timeline: "6 Wochen",
      complexity: "Mittel"
    },
    {
      title: "Öffentlicher Sektor - Verwaltungsmodernisierung",
      challenge: "Landesverwaltung modernisiert Hinweisgebersysteme unter strikten Datenschutzvorgaben",
      solution: "Government-Grade Security + DSGVO Excellence + Multi-Language Support + Accessibility",
      outcome: "Rechts-sichere Modernisierung mit 40% mehr eingegangenen Hinweisen",
      timeline: "3 Monate",
      complexity: "Hoch"
    }
  ];
  const hinschgRequirements = [
    {
      name: "Interne Meldestellen",
      description: "Einrichtung und Betrieb strukturierter interner Hinweisgebersysteme",
      coverage: 94,
      requirements: ["Secure Reporting Channels", "Multi-Channel Access", "Anonymous Options", "24/7 Availability"],
      icon: MessageSquare,
      detail: "Sichere, vertrauliche und zugängliche Meldekanäle für alle Mitarbeiter und externe Personen"
    },
    {
      name: "Vertraulichkeit & Anonymität",
      description: "Absoluter Schutz der Identität von Hinweisgebern und vertrauliche Behandlung",
      coverage: 96,
      requirements: ["Identity Protection", "Anonymous Processing", "Access Controls", "Data Encryption"],
      icon: ShieldCheck,
      detail: "Technische und organisatorische Maßnahmen zum Schutz der Hinweisgeber-Identität"
    },
    {
      name: "Fristenmanagement",
      description: "Einhaltung gesetzlicher Bearbeitungs- und Kommunikationsfristen",
      coverage: 92,
      requirements: ["7-Day Acknowledgment", "3-Month Investigation", "Progress Updates", "Final Reports"],
      icon: Timer,
      detail: "Automatisierte Fristenverfolgung und rechtzeitige Kommunikation mit Hinweisgebern"
    },
    {
      name: "Fallbearbeitung & Dokumentation",
      description: "Strukturierte Aufnahme, Untersuchung und Dokumentation von Hinweisen",
      coverage: 90,
      requirements: ["Case Management", "Investigation Workflows", "Evidence Documentation", "Decision Tracking"],
      icon: FileText,
      detail: "Vollständige Dokumentation aller Bearbeitungsschritte für Compliance-Nachweise"
    },
    {
      name: "Schutz vor Vergeltung",
      description: "Wirksame Maßnahmen gegen Benachteiligung und Vergeltungsmaßnahmen",
      coverage: 88,
      requirements: ["Anti-Retaliation Policies", "Monitoring Systems", "Support Measures", "Legal Protection"],
      icon: Shield,
      detail: "Proaktive Überwachung und Schutzmaßnahmen gegen Repressalien gegenüber Hinweisgebern"
    }
  ];
  const benefits = [
    {
      title: "Legal Compliance",
      description: "Vollständige HinSchG-Compliance mit rechtlicher Sicherheit",
      metric: "100%",
      detail: "Rechtssichere Implementierung aller Gesetzesanforderungen"
    },
    {
      title: "Process Automation",
      description: "Automatisierte Fallbearbeitung und Fristenüberwachung",
      metric: "85%",
      detail: "Reduktion manueller Bearbeitungsaufwände"
    },
    {
      title: "Risk Mitigation",
      description: "Früherkennung und Prävention von Compliance-Verstößen",
      metric: "75%",
      detail: "Reduktion kritischer Compliance-Risiken durch frühzeitige Erkennung"
    },
    {
      title: "Employee Trust",
      description: "Erhöhtes Vertrauen durch sichere Meldekanäle",
      metric: "+50%",
      detail: "Steigerung der Meldungsbereitschaft durch Vertrauensaufbau"
    }
  ];
  const applicationScope = [
    {
      category: "Unternehmen",
      threshold: "50+ Beschäftigte",
      description: "Alle Unternehmen mit mindestens 50 Beschäftigten müssen interne Meldestellen einrichten",
      sectors: ["Privatwirtschaft", "Alle Branchen", "Konzerne", "Mittelstand"],
      requirements: "Interne Meldestelle, Vertraulichkeit, Fristenmanagement",
      icon: Building2,
      color: "from-blue-500 to-blue-600"
    },
    {
      category: "Öffentlicher Sektor",
      threshold: "Alle Behörden",
      description: "Behörden, Kommunen und öffentliche Einrichtungen unabhängig von der Mitarbeiterzahl",
      sectors: ["Bundesbehörden", "Landesbehörden", "Kommunen", "Öffentliche Unternehmen"],
      requirements: "Erhöhte Transparenz, Zugänglichkeit, Bürgerschutz",
      icon: Globe,
      color: "from-green-500 to-green-600"
    }
  ];
  const complianceAreas = [
    { name: "Internal Reporting System Setup", coverage: 94, area: "Infrastructure" },
    { name: "Confidentiality & Anonymity Measures", coverage: 96, area: "Data Protection" },
    { name: "Legal Deadline Management", coverage: 92, area: "Process Management" },
    { name: "Anti-Retaliation Protection", coverage: 88, area: "Employee Protection" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Hinweisgeberschutz – Whistleblower-System nach HinSchG",
        description: "Hinweisgebersystem rechtssicher umsetzen: ✓ Digitale Meldestelle ✓ 100% anonym ✓ HinSchG-konform. Schützen Sie Whistleblower. Jetzt einrichten!",
        canonical: "/hinweisgeberschutzgesetz",
        keywords: "Hinweisgeberschutz, HinSchG, Whistleblower System, Hinweisgebersystem, Meldestelle",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400", children: [
                    /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Hinweisgeberschutzgesetz" })
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight", children: [
                    "HinSchG Compliance",
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent block mt-2", children: "mit KI & Legal Experts" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Implementieren Sie das Hinweisgeberschutzgesetz rechtssicher mit unserer KI-gestützten SaaS-Lösung und direktem Legal Expert Support." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "KI-automatisierte Hinweisaufnahme & Kategorisierung" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "24/7 Legal Expert Support für Arbeitsrecht" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "End-to-End verschlüsselte Whistleblowing-Platform" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
                    /* @__PURE__ */ jsx(Link, { to: "/compliance/hinweisgeberschutzgesetz", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:opacity-90 group", children: [
                      /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                      "HinSchG Readiness Check",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ] }) }),
                    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "HinSchG Implementation Guide"
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                className: "relative",
                children: [
                  /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-emerald-200 dark:border-emerald-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Whistleblowing Center" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "HinSchG Compliant" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/20 dark:to-emerald-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(ShieldCheck, { className: "h-5 w-5 text-emerald-600" }),
                          /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-emerald-700", children: [
                            complianceScore,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "HinSchG Score" }),
                        /* @__PURE__ */ jsx("div", { className: "w-full bg-emerald-200 rounded-full h-2 mt-2", children: /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "bg-emerald-600 h-2 rounded-full",
                            initial: { width: 0 },
                            animate: { width: isVisible ? `${complianceScore}%` : 0 },
                            transition: { duration: 1.5, delay: 0.5 }
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(MessageSquare, { className: "h-5 w-5 text-teal-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-teal-700", children: "147" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Cases Processed" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-teal-600", children: "Anonymous" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: complianceAreas.map((area, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                        /* @__PURE__ */ jsx("span", { children: area.name }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: area.area }),
                          /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                            area.coverage,
                            "%"
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          className: "bg-emerald-600 h-2 rounded-full",
                          initial: { width: 0 },
                          animate: { width: isVisible ? `${area.coverage}%` : 0 },
                          transition: { duration: 1, delay: 0.3 + index * 0.1 }
                        }
                      ) })
                    ] }, index)) })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-emerald-500 animate-bounce", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-emerald-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Secure" })
                  ] }) })
                ]
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "HinSchG Compliance Herausforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Warum das Hinweisgeberschutzgesetz komplexe neue Anforderungen für Unternehmen schafft" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: painPoints.map((point, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(point.icon, { className: "h-6 w-6 text-emerald-600" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-bold", children: point.title }),
                    /* @__PURE__ */ jsx(
                      Badge,
                      {
                        variant: point.impact === "Kritisch" ? "destructive" : point.impact === "Hoch" ? "default" : "secondary",
                        className: "text-xs mt-1",
                        children: point.impact
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: point.description }),
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Beispiele:" }),
                  " ",
                  point.example
                ] }) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "HinSchG Anwendungsbereich" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Welche Organisationen sind vom Hinweisgeberschutzgesetz betroffen?" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: applicationScope.map((scope, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.2 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6 h-full hover:shadow-2xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "inline-flex p-3 rounded-xl bg-gradient-to-r text-white",
                    scope.color
                  ), children: /* @__PURE__ */ jsx(scope.icon, { className: "h-6 w-6" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: scope.category }),
                    /* @__PURE__ */ jsx(Badge, { className: "mt-1 bg-emerald-100 text-emerald-700", children: scope.threshold })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: scope.description }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-2", children: "Betroffene Bereiche:" }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: scope.sectors.map((sector, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: sector }, i)) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Anforderungen:" }),
                    " ",
                    scope.requirements
                  ] }) })
                ] })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "HinSchG Kernanforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Die fünf zentralen Säulen des Hinweisgeberschutzes" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: hinschgRequirements.map((requirement, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6 hover:shadow-lg transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6 items-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg", children: /* @__PURE__ */ jsx(requirement.icon, { className: "h-6 w-6 text-emerald-600" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: requirement.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: requirement.description })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: requirement.requirements.map((req, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: req }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                    /* @__PURE__ */ jsx("span", { children: "Implementation" }),
                    /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                      requirement.coverage,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "bg-emerald-600 h-2 rounded-full",
                      initial: { width: 0 },
                      whileInView: { width: `${requirement.coverage}%` },
                      transition: { duration: 1, delay: 0.2 },
                      viewport: { once: true }
                    }
                  ) }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: requirement.detail })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "Active" }) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "KI-gestützte HinSchG SaaS-Lösung" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Innovative Technologie kombiniert mit Arbeitsrechts-Expertise für sichere Compliance" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: solutions.map((solution, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "inline-flex p-3 rounded-xl bg-gradient-to-r text-white",
                  solution.color
                ), children: /* @__PURE__ */ jsx(solution.icon, { className: "h-6 w-6" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: solution.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: solution.description }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-2", children: solution.features.map((feature, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: feature })
                ] }, i)) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "HinSchG Success Stories" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Erfolgreiche Implementierungen des Hinweisgeberschutzgesetzes" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: useCases.map((useCase, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6 items-center", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2 text-emerald-700", children: useCase.title }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Challenge:" }),
                    " ",
                    useCase.challenge
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-emerald-700", children: "Solution:" }),
                  " ",
                  useCase.solution
                ] }) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-teal-700", children: useCase.outcome }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: useCase.timeline }),
                  /* @__PURE__ */ jsx(
                    Badge,
                    {
                      variant: useCase.complexity === "Hoch" ? "destructive" : useCase.complexity === "Mittel" ? "default" : "secondary",
                      className: "text-xs",
                      children: useCase.complexity
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8 text-green-600" }) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Business Impact von HinSchG Compliance" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Messbare Vorteile unserer KI-gestützten Whistleblowing-Lösung" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits.map((benefit, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsxs(Card, { className: "p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105", children: [
                /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-bold text-emerald-600 mb-2", children: benefit.metric }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: benefit.title }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: benefit.description }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-emerald-600 font-medium", children: benefit.detail })
              ] })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-emerald-600 to-teal-600", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center text-white", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Rechtssichere HinSchG-Implementierung" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90", children: "Implementieren Sie das Hinweisgeberschutzgesetz mit unserer KI-gestützten SaaS-Lösung und profitieren Sie von direktem Arbeitsrechts-Expert Support." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/compliance/hinweisgeberschutzgesetz", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-emerald-600 hover:bg-gray-100 group",
                    children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                      "HinSchG Readiness Check buchen",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "bg-transparent text-white border-white hover:bg-white/10",
                    children: [
                      /* @__PURE__ */ jsx(Phone, { className: "mr-2 h-5 w-5" }),
                      "Arbeitsrechts-Expert Beratung"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-2 text-white/80", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Über 120 Unternehmen nutzen bereits unsere sichere HinSchG Whistleblowing-Lösung" })
              ] })
            ]
          }
        ) }) }) })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  HinweisgeberschutzCompliance as default
};
