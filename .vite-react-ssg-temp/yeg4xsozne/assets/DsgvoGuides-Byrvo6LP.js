import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Shield, FileText, Play, Download, Target, Filter, Lightbulb, Settings, Globe, AlertTriangle, Star, TrendingUp, AlertOctagon, Sparkles, BookOpen, CheckCircle2, Zap, ArrowRight, Bookmark, Calendar, Rocket } from "lucide-react";
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
const DsgvoGuides = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedTopic, setSelectedTopic] = useState("all");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const difficulties = [
    { id: "all", name: "Alle Level", count: 10 },
    { id: "beginner", name: "Einsteiger", count: 1 },
    { id: "intermediate", name: "Fortgeschritten", count: 7 },
    { id: "expert", name: "Experte", count: 2 }
  ];
  const topics = [
    { id: "all", name: "Alle Themen", icon: Shield },
    { id: "basics", name: "Grundlagen", icon: Lightbulb },
    { id: "implementation", name: "Implementierung", icon: Settings },
    { id: "website", name: "Website", icon: Globe },
    { id: "crisis", name: "Krisenmanagement", icon: AlertTriangle }
  ];
  const guides = [
    {
      id: "dsgvo-grundlagen",
      title: "DSGVO in 10 Minuten verstehen",
      subtitle: "Die wichtigsten Prinzipien und Grundlagen",
      description: "Ein kompakter Überblick über die DSGVO-Grundlagen, Rechtsgrundlagen und die wichtigsten Prinzipien für Einsteiger.",
      readTime: "10 Min",
      difficulty: "beginner",
      topic: "basics",
      popular: true,
      featured: true,
      completions: 2847,
      rating: 4.9,
      lastUpdated: "2024-01-15",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-green-900 to-slate-900",
      link: "/wissen/leitfaden/dsgvo-grundlagen",
      chapters: [
        "Was ist die DSGVO?",
        "Die 7 Grundprinzipien",
        "Rechtsgrundlagen Art. 6",
        "Betroffenenrechte",
        "Sanktionen & Bußgelder"
      ],
      keyTakeaways: [
        "Vollständiger DSGVO-Überblick",
        "Praktische Beispiele",
        "Sofort anwendbares Wissen"
      ],
      achievements: [
        "DSGVO-Grundverständnis aufbauen",
        "Rechtliche Risiken erkennen",
        "Erste Schritte zur Compliance"
      ]
    },
    {
      id: "dsgvo-30-tage",
      title: "DSGVO in 30 Tagen umsetzen",
      subtitle: "Schritt-für-Schritt Implementation Plan",
      description: "Ein detaillierter 30-Tage-Plan zur vollständigen DSGVO-Implementierung mit Checklisten, Templates und Zeitplänen.",
      readTime: "45 Min",
      difficulty: "intermediate",
      topic: "implementation",
      featured: true,
      completions: 1923,
      rating: 4.8,
      lastUpdated: "2024-01-20",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",
      link: "/wissen/leitfaden/dsgvo-30-tage",
      chapters: [
        "Woche 1: Bestandsaufnahme",
        "Woche 2: Rechtsgrundlagen",
        "Woche 3: TOM & Dokumentation",
        "Woche 4: Schulung & Testing"
      ],
      keyTakeaways: [
        "Strukturierter Implementierungsplan",
        "Praxiserprobte Templates",
        "Compliance in 30 Tagen"
      ],
      achievements: [
        "Vollständige DSGVO-Compliance",
        "Audit-sichere Dokumentation",
        "Prozesse rechtssicher aufsetzen"
      ]
    },
    {
      id: "website-dsgvo",
      title: "Website DSGVO-konform gestalten",
      subtitle: "Cookie, Privacy Policy & Consent Management",
      description: "Vollständige Anleitung zur DSGVO-konformen Gestaltung Ihrer Website inkl. Cookie-Banner, Datenschutzerklärung und Consent Management.",
      readTime: "35 Min",
      difficulty: "intermediate",
      topic: "website",
      popular: true,
      completions: 3156,
      rating: 4.7,
      lastUpdated: "2024-01-18",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
      link: "/wissen/leitfaden/website-dsgvo",
      chapters: [
        "Cookie-Banner Design",
        "Datenschutzerklärung",
        "Consent Management",
        "Analytics & Tracking",
        "Drittanbieter-Tools"
      ],
      keyTakeaways: [
        "Rechtssichere Website",
        "DSGVO-konforme Tools",
        "Praktische Umsetzung"
      ],
      achievements: [
        "Cookie-Banner rechtssicher gestalten",
        "Datenschutzerklärung aktualisieren",
        "Tracking DSGVO-konform einrichten"
      ]
    },
    {
      id: "data-breach-notfall",
      title: "Data Breach Notfallplan",
      subtitle: "72-Stunden-Response-Guide",
      description: "Kritischer Notfallplan für Datenschutzverletzungen mit Sofortmaßnahmen, Meldepflichten und Schadensbegrenzung.",
      readTime: "25 Min",
      difficulty: "expert",
      topic: "crisis",
      urgent: true,
      completions: 1456,
      rating: 4.9,
      lastUpdated: "2024-01-22",
      color: "from-red-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-red-900 to-slate-900",
      link: "/wissen/leitfaden/data-breach-notfall",
      chapters: [
        "Erste 30 Minuten",
        "Behördenmeldung",
        "Betroffeneninformation",
        "Schadensbegrenzung",
        "Post-Incident Review"
      ],
      keyTakeaways: [
        "72h-Compliance garantiert",
        "Rechtssichere Kommunikation",
        "Schadenminimierung"
      ],
      achievements: [
        "Meldepflichten erfüllen",
        "Krisenkommunikation beherrschen",
        "Bußgelder vermeiden"
      ]
    },
    {
      id: "verarbeitungsverzeichnis",
      title: "Verarbeitungsverzeichnis erstellen",
      subtitle: "Art. 30 DSGVO praktisch umsetzen",
      description: "Detaillierte Anleitung zur Erstellung und Pflege eines DSGVO-konformen Verarbeitungsverzeichnisses mit Templates.",
      readTime: "30 Min",
      difficulty: "intermediate",
      topic: "implementation",
      completions: 2134,
      rating: 4.6,
      lastUpdated: "2024-01-16",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900",
      link: "/wissen/leitfaden/verarbeitungsverzeichnis",
      chapters: [
        "Was gehört ins VVT?",
        "Datenfluss-Mapping",
        "Template-Nutzung",
        "Kontinuierliche Pflege"
      ],
      keyTakeaways: [
        "DSGVO Art. 30 konform",
        "Praxiserprobte Templates",
        "Effiziente Umsetzung"
      ],
      achievements: [
        "VVT Art. 30 konform erstellen",
        "Datenflüsse dokumentieren",
        "Behörden-ready in 7 Tagen"
      ]
    },
    {
      id: "betroffenenrechte",
      title: "Betroffenenrechte umsetzen",
      subtitle: "Art. 15-22 DSGVO in der Praxis",
      description: "Komplette Anleitung zur Implementierung aller Betroffenenrechte mit Prozessen, Templates und Fristen.",
      readTime: "40 Min",
      difficulty: "intermediate",
      topic: "implementation",
      completions: 1789,
      rating: 4.7,
      lastUpdated: "2024-01-19",
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900",
      link: "/wissen/leitfaden/betroffenenrechte",
      chapters: [
        "Auskunftsrecht Art. 15",
        "Löschung Art. 17",
        "Datenportabilität",
        "Widerspruchsrecht",
        "Automatisierte Entscheidungen"
      ],
      keyTakeaways: [
        "Alle Rechte abgedeckt",
        "Prozess-Templates",
        "Fristenmanagement"
      ],
      achievements: [
        "Anfragen rechtssicher beantworten",
        "Fristen automatisiert einhalten",
        "Prozesse dokumentieren"
      ]
    },
    {
      id: "tom-technische-massnahmen",
      title: "TOM - Technische & organisatorische Maßnahmen",
      subtitle: "Art. 32 DSGVO Security Framework",
      description: "Umfassender Guide zu technischen und organisatorischen Maßnahmen für angemessene Datensicherheit.",
      readTime: "50 Min",
      difficulty: "expert",
      topic: "implementation",
      completions: 1234,
      rating: 4.8,
      lastUpdated: "2024-01-21",
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900",
      link: "/wissen/leitfaden/tom-massnahmen",
      chapters: [
        "Technische Maßnahmen",
        "Organisatorische Maßnahmen",
        "Angemessenheit bewerten",
        "Dokumentation",
        "Kontinuierliche Verbesserung"
      ],
      keyTakeaways: [
        "Comprehensive Security",
        "Risk-based Approach",
        "Audit-ready Documentation"
      ],
      achievements: [
        "Sicherheitskonzept implementieren",
        "ISO 27001 Alignment",
        "Audit-Nachweis erbringen"
      ]
    },
    {
      id: "verarbeitungsverzeichnis",
      title: "Verarbeitungsverzeichnis erstellen",
      subtitle: "Art. 30 DSGVO praktisch umsetzen",
      description: "Detaillierte Anleitung zur Erstellung und Pflege eines DSGVO-konformen Verarbeitungsverzeichnisses mit Templates und Compliance-Checklisten.",
      readTime: "30 Min",
      difficulty: "intermediate",
      topic: "implementation",
      completions: 2134,
      rating: 4.6,
      lastUpdated: "2024-01-24",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900",
      link: "/wissen/leitfaden/verarbeitungsverzeichnis",
      chapters: [
        "Einführung & Rechtliche Grundlagen",
        "Pflichtangaben für Verantwortliche",
        "Praktische Umsetzung",
        "Häufige Fehler vermeiden",
        "Tools und Vorlagen"
      ],
      keyTakeaways: [
        "DSGVO Art. 30 konform",
        "Praxiserprobte Templates",
        "Effiziente Umsetzung"
      ],
      achievements: [
        "VVT Art. 30 konform erstellen",
        "Datenflüsse dokumentieren",
        "Behörden-ready in 7 Tagen"
      ]
    },
    {
      id: "betroffenenrechte",
      title: "Betroffenenrechte umsetzen",
      subtitle: "Art. 15-22 DSGVO in der Praxis",
      description: "Komplette Anleitung zur Implementierung aller 8 Betroffenenrechte mit Prozessen, Templates und Fristen-Management.",
      readTime: "40 Min",
      difficulty: "intermediate",
      topic: "implementation",
      completions: 1789,
      rating: 4.7,
      lastUpdated: "2024-01-24",
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900",
      link: "/wissen/leitfaden/betroffenenrechte",
      chapters: [
        "Übersicht & Grundlagen",
        "Informationsrecht Art. 13 & 14",
        "Auskunftsrecht Art. 15",
        "Löschung & Berichtigung",
        "Weitere Betroffenenrechte",
        "Praktische Umsetzung"
      ],
      keyTakeaways: [
        "Alle 8 Rechte abgedeckt",
        "Prozess-Templates",
        "Fristenmanagement"
      ]
    },
    {
      id: "dsfa-durchfuehrung",
      title: "Datenschutz-Folgenabschätzung (DSFA)",
      subtitle: "Art. 35 DSGVO Step-by-Step",
      description: "Detaillierte Anleitung zur Durchführung einer DSFA mit Kriterien, Methodik und praktischen Beispielen.",
      readTime: "55 Min",
      difficulty: "expert",
      topic: "implementation",
      completions: 987,
      rating: 4.9,
      lastUpdated: "2024-01-17",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900",
      link: "/wissen/leitfaden/dsfa-durchfuehrung",
      chapters: [
        "DSFA-Pflicht prüfen",
        "Risiko-Assessment",
        "Maßnahmen definieren",
        "Konsultation DPO",
        "Behörden-Konsultation"
      ],
      keyTakeaways: [
        "Strukturierte DSFA-Methodik",
        "Risiko-Management",
        "Behörden-konforme Dokumentation"
      ],
      achievements: [
        "Hochrisiko-Verarbeitung absichern",
        "DSFA professionell durchführen",
        "Behörden-Konsultation vorbereiten"
      ]
    }
  ];
  const filteredGuides = guides.filter((guide) => {
    const difficultyMatch = selectedDifficulty === "all" || guide.difficulty === selectedDifficulty;
    const topicMatch = selectedTopic === "all" || guide.topic === selectedTopic;
    return difficultyMatch && topicMatch;
  });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-spin-slow" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        ref: heroRef,
        style: { y },
        className: "relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "text-center mb-20",
              children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { delay: 0.2, type: "spring", stiffness: 200 },
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20",
                    children: [
                      /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-400 animate-pulse" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-blue-300", children: "DSGVO-Leitfäden" }),
                      /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-indigo-400 animate-bounce" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.4, duration: 0.8 },
                    className: "text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "DSGVO" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent", children: "Leitfäden" })
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
                      "Praxiserprobte ",
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-300", children: "Schritt-für-Schritt Anleitungen" }),
                      "für erfolgreiche DSGVO-Implementierung - von Grundlagen bis Expertenwissen."
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
                      /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300", children: [
                        /* @__PURE__ */ jsx(Play, { className: "mr-2 h-5 w-5" }),
                        "Mit Grundlagen starten"
                      ] }) }),
                      /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-blue-500/30 hover:border-blue-400 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                        "Alle PDFs herunterladen"
                      ] }) })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1, duration: 0.8 },
              className: "flex justify-center max-w-5xl mx-auto",
              children: [
                { value: "10", label: "Detaillierte Leitfäden", sublabel: "Von Basics bis Expert", icon: FileText, color: "from-blue-500 to-indigo-500" }
              ].map((stat, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 1.2 + index * 0.1, duration: 0.6 },
                  className: "relative group",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300` }),
                    /* @__PURE__ */ jsxs("div", { className: "relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300", children: [
                      /* @__PURE__ */ jsx("div", { className: `inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`, children: /* @__PURE__ */ jsx(stat.icon, { className: "h-6 w-6 text-white" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-bold text-white mb-1", children: stat.value }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-slate-200 mb-1", children: stat.label }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: stat.sublabel })
                    ] })
                  ]
                },
                index
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "space-y-6",
        children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-blue-400" }),
              "Schwierigkeitsgrad"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: difficulties.map((difficulty, index) => /* @__PURE__ */ jsxs(
              motion.button,
              {
                initial: { opacity: 0, scale: 0.8 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { delay: index * 0.1, duration: 0.4 },
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                onClick: () => setSelectedDifficulty(difficulty.id),
                className: cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border",
                  selectedDifficulty === difficulty.id ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-blue-500 shadow-lg" : "bg-slate-800/60 text-slate-300 border-slate-700/50 hover:border-blue-500/50 hover:text-blue-300"
                ),
                children: [
                  /* @__PURE__ */ jsx("span", { children: difficulty.name }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-slate-700 text-slate-200 border-0 text-xs", children: difficulty.count })
                ]
              },
              difficulty.id
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Filter, { className: "h-5 w-5 text-blue-400" }),
              "Themenbereich"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: topics.map((topic, index) => /* @__PURE__ */ jsxs(
              motion.button,
              {
                initial: { opacity: 0, scale: 0.8 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { delay: index * 0.1, duration: 0.4 },
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                onClick: () => setSelectedTopic(topic.id),
                className: cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border",
                  selectedTopic === topic.id ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-indigo-500 shadow-lg" : "bg-slate-800/60 text-slate-300 border-slate-700/50 hover:border-indigo-500/50 hover:text-indigo-300"
                ),
                children: [
                  /* @__PURE__ */ jsx(topic.icon, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: topic.name })
                ]
              },
              topic.id
            )) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-2 gap-8", children: filteredGuides.map((guide, index) => {
      var _a;
      return /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          whileHover: { y: -5 },
          className: "group relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
              `bg-gradient-to-r ${guide.color}`,
              "opacity-0 group-hover:opacity-30"
            ) }),
            /* @__PURE__ */ jsxs(Card, { className: "relative h-full border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: cn("absolute inset-0", guide.bgColor) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "relative p-8 h-full flex flex-col", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-6", children: /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    guide.featured && /* @__PURE__ */ jsxs(Badge, { className: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 mr-1" }),
                      "Featured"
                    ] }),
                    guide.popular && /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30", children: [
                      /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3 mr-1" }),
                      "Beliebt"
                    ] }),
                    guide.urgent && /* @__PURE__ */ jsxs(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30 animate-pulse", children: [
                      /* @__PURE__ */ jsx(AlertOctagon, { className: "h-3 w-3 mr-1" }),
                      "Urgent"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 text-white group-hover:text-blue-300 transition-colors", children: guide.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-lg text-blue-300 mb-3", children: guide.subtitle }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 leading-relaxed", children: guide.description })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "mb-6 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-white/10", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-sm font-bold text-white mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-yellow-400" }),
                    "Was Sie erreichen"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: ((_a = guide.achievements) == null ? void 0 : _a.map((achievement, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: `w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${idx === 0 ? "bg-blue-400" : idx === 1 ? "bg-purple-400" : "bg-emerald-400"}` }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-200", children: achievement })
                  ] }, idx))) || /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-200", children: "DSGVO-konforme Prozesse" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-200", children: "Rechtssichere Dokumentation" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-200", children: [
                        "Audit-ready in ",
                        guide.difficulty === "beginner" ? "7 Tagen" : "30 Tagen"
                      ] })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4" }),
                    "Kapitel Übersicht:"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    guide.chapters.slice(0, 3).map((chapter, idx) => /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { delay: idx * 0.1, duration: 0.4 },
                        className: "flex items-center gap-2",
                        children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-blue-400 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: chapter })
                        ]
                      },
                      idx
                    )),
                    guide.chapters.length > 3 && /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-400 ml-6", children: [
                      "+",
                      guide.chapters.length - 3,
                      " weitere Kapitel"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Target, { className: "h-4 w-4" }),
                    "Key Takeaways:"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: guide.keyTakeaways.map((takeaway, idx) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { delay: idx * 0.1, duration: 0.4 },
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 text-yellow-400 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: takeaway })
                      ]
                    },
                    idx
                  )) })
                ] }),
                guide.popular && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: "Community Progress" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-400", children: "78% abgeschlossen" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 78, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-auto flex gap-3", children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      className: "flex-grow",
                      children: /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
                        "w-full bg-gradient-to-r text-white border-0 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300",
                        guide.color
                      ), children: /* @__PURE__ */ jsxs(Link, { to: guide.link, className: "flex items-center justify-center gap-2", children: [
                        /* @__PURE__ */ jsx("span", { children: "Leitfaden lesen" }),
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
                      ] }) })
                    }
                  ),
                  /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", className: "px-3 border-slate-600 text-slate-300 hover:bg-slate-700", children: /* @__PURE__ */ jsx(Bookmark, { className: "h-4 w-4" }) }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4 text-xs text-slate-400 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "h-3 w-3" }),
                  "Zuletzt aktualisiert: ",
                  new Date(guide.lastUpdated).toLocaleDateString("de-DE")
                ] })
              ] })
            ] })
          ]
        },
        guide.id
      );
    }) }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-blue-900/20" }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl relative z-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-black mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "Bereit für" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent", children: "DSGVO-Exzellenz?" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed", children: [
              "Starten Sie mit unseren bewährten Leitfäden und werden Sie zum ",
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-300", children: "DSGVO-Experten" }),
              "."
            ] }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { delay: 0.4, duration: 0.6 },
                className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
                children: [
                  /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300",
                      children: [
                        /* @__PURE__ */ jsx(Rocket, { className: "mr-3 h-6 w-6" }),
                        "Jetzt starten mit Grundlagen",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-3 h-6 w-6" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-blue-500/30 hover:border-blue-400 text-blue-300 hover:bg-blue-500/10 px-10 py-4 text-lg font-bold backdrop-blur-sm", children: [
                    /* @__PURE__ */ jsx(Download, { className: "mr-3 h-6 w-6" }),
                    "PDF Bundle herunterladen"
                  ] }) })
                ]
              }
            )
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  DsgvoGuides as default
};
