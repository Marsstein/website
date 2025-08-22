import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Trophy, Gamepad2, Timer, PlayCircle, Clock, FileCheck, BarChart3, CheckCircle2, Target, Building2, Shield, Globe, Code, Settings, GraduationCap, TrendingUp, TrendingDown, ArrowRight, AlertTriangle, Calendar } from "lucide-react";
import { c as cn } from "../main.mjs";
import "react-helmet-async";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "react-router-dom";
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
const DsgvoComplianceScorecard = () => {
  var _a, _b, _c;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DSGVO Compliance Scorecard",
    "description": "Interaktive DSGVO-Compliance Bewertung mit Gap-Analyse und Handlungsempfehlungen",
    "applicationCategory": "Assessment Tool",
    "url": "https://marsstein.com/tools/dsgvo-compliance-scorecard"
  };
  const [isAssessing, setIsAssessing] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const assessmentQuestions = [
    {
      id: 1,
      category: "Rechtsgrundlagen",
      question: "Haben Sie eine rechtssichere Rechtsgrundlage für alle Datenverarbeitungen?",
      options: [
        { text: "Ja, vollständig dokumentiert", points: 10 },
        { text: "Teilweise dokumentiert", points: 6 },
        { text: "Nein, nicht dokumentiert", points: 0 }
      ],
      explanation: "Art. 6 DSGVO fordert eine Rechtsgrundlage für jede Verarbeitung personenbezogener Daten."
    },
    {
      id: 2,
      category: "Betroffenenrechte",
      question: "Können Sie Betroffenenrechte (Auskunft, Löschung, etc.) zeitgerecht erfüllen?",
      options: [
        { text: "Ja, automatisierte Prozesse vorhanden", points: 10 },
        { text: "Manuell möglich, aber zeitaufwändig", points: 6 },
        { text: "Schwierig umsetzbar", points: 0 }
      ],
      explanation: "Art. 15-22 DSGVO gewähren Betroffenen umfassende Rechte."
    },
    {
      id: 3,
      category: "Technische Maßnahmen",
      question: "Sind Ihre IT-Systeme durch angemessene technische Maßnahmen geschützt?",
      options: [
        { text: "Umfassende Sicherheitsmaßnahmen implementiert", points: 10 },
        { text: "Grundlegende Sicherheit vorhanden", points: 6 },
        { text: "Sicherheitsmaßnahmen unzureichend", points: 0 }
      ],
      explanation: "Art. 32 DSGVO fordert angemessene technische und organisatorische Maßnahmen."
    }
  ];
  const complianceLevels = [
    {
      level: 1,
      name: "DSGVO Novice",
      range: "0-25%",
      color: "from-red-500 to-red-600",
      bgColor: "bg-gradient-to-br from-red-900/20 to-red-800/30 dark:from-red-950/40 dark:to-red-900/60",
      badge: "🚨",
      description: "Grundlegende DSGVO-Kenntnisse erforderlich",
      risks: ["Hohe Bußgeldrisiken", "Rechtsunsicherheit", "Reputationsschäden"],
      actions: ["Datenschutzbeauftragten bestellen", "Verarbeitungsverzeichnis erstellen", "Rechtliche Beratung einholen"]
    },
    {
      level: 2,
      name: "Compliance Apprentice",
      range: "26-50%",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-900/20 to-red-800/30 dark:from-orange-950/40 dark:to-red-900/60",
      badge: "⚠️",
      description: "Erste Schritte unternommen, aber noch Lücken",
      risks: ["Mittlere Bußgeldrisiken", "Einzelne Schwachstellen", "Verbesserungsbedarf"],
      actions: ["TOM implementieren", "Mitarbeiterschulungen", "Prozesse dokumentieren"]
    },
    {
      level: 3,
      name: "Privacy Professional",
      range: "51-75%",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-900/20 to-orange-800/30 dark:from-yellow-950/40 dark:to-orange-900/60",
      badge: "🎯",
      description: "Solide Basis mit Optimierungspotential",
      risks: ["Geringe Risiken", "Einzelne Nachbesserungen", "Monitoring erforderlich"],
      actions: ["Regelmäßige Audits", "Kontinuierliche Schulungen", "Prozessoptimierung"]
    },
    {
      level: 4,
      name: "DSGVO Expert",
      range: "76-90%",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-gradient-to-br from-blue-900/20 to-indigo-800/30 dark:from-blue-950/40 dark:to-indigo-900/60",
      badge: "🏆",
      description: "Überdurchschnittliche Compliance",
      risks: ["Minimale Risiken", "Vereinzelte Anpassungen", "Vorbildcharakter"],
      actions: ["Best Practice Sharing", "Innovation fördern", "Benchmarking"]
    },
    {
      level: 5,
      name: "Privacy Champion",
      range: "91-100%",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-900/20 to-emerald-800/30 dark:from-green-950/40 dark:to-emerald-900/60",
      badge: "👑",
      description: "Exzellente Datenschutz-Governance",
      risks: ["Vernachlässigbare Risiken", "Branchenführer", "Compliance Excellence"],
      actions: ["Thought Leadership", "Mentoring anderer", "Innovation vorantreiben"]
    }
  ];
  const [demoScore, setDemoScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const startAssessment = () => {
    setIsAssessing(true);
    setCurrentQuestion(0);
    setDemoScore(0);
    setShowResults(false);
  };
  const answerQuestion = (points) => {
    const newScore = demoScore + points;
    setDemoScore(newScore);
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };
  const getComplianceLevel = (score) => {
    const percentage = score / 30 * 100;
    if (percentage >= 91) return complianceLevels[4];
    if (percentage >= 76) return complianceLevels[3];
    if (percentage >= 51) return complianceLevels[2];
    if (percentage >= 26) return complianceLevels[1];
    return complianceLevels[0];
  };
  const industryBenchmarks = [
    { industry: "Finanzdienstleistungen", averageScore: "78-85%", icon: Building2, trend: "up", color: "from-green-500 to-emerald-500" },
    { industry: "Gesundheitswesen", averageScore: "71-79%", icon: Shield, trend: "up", color: "from-blue-500 to-cyan-500" },
    { industry: "E-Commerce", averageScore: "65-73%", icon: Globe, trend: "stable", color: "from-purple-500 to-pink-500" },
    { industry: "SaaS & Tech", averageScore: "69-76%", icon: Code, trend: "up", color: "from-indigo-500 to-purple-500" },
    { industry: "Manufacturing", averageScore: "58-67%", icon: Settings, trend: "down", color: "from-orange-500 to-red-500" },
    { industry: "Bildung", averageScore: "62-71%", icon: GraduationCap, trend: "stable", color: "from-teal-500 to-green-500" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "DSGVO Scorecard – Compliance-Status bewerten",
        description: "DSGVO Compliance Scorecard: Bewerten Sie Ihren Datenschutz-Status interaktiv. Gap-Analyse, Benchmarking, Handlungsempfehlungen. ✓ 15 Min Assessment. Jetzt bewerten!",
        canonical: "/tools/dsgvo-compliance-scorecard",
        keywords: "DSGVO Scorecard, Compliance Assessment, DSGVO Bewertung, Gap-Analyse, Datenschutz Status",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin-slow" })
      ] }),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          ref: heroRef,
          style: { y, opacity },
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
                      className: "inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20",
                      children: [
                        /* @__PURE__ */ jsx(Trophy, { className: "h-5 w-5 text-purple-400 animate-spin-slow" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-purple-300", children: "Gamified DSGVO Assessment" }),
                        /* @__PURE__ */ jsx(Gamepad2, { className: "h-5 w-5 text-pink-400 animate-bounce" })
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
                        /* @__PURE__ */ jsx("span", { className: "text-white", children: "Ihr" }),
                        /* @__PURE__ */ jsx("br", {}),
                        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent", children: "DSGVO Score" }),
                        /* @__PURE__ */ jsx("br", {}),
                        /* @__PURE__ */ jsx("span", { className: "text-white", children: "in" }),
                        " ",
                        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent", children: "15 Minuten" })
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
                        "Interaktives Assessment mit ",
                        /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-300", children: "Gamification-Elementen" }),
                        ". Sammeln Sie Badges, vergleichen Sie sich mit der Branche und erhalten Sie konkrete Handlungsempfehlungen."
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
                        /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(
                          Button,
                          {
                            onClick: startAssessment,
                            size: "lg",
                            className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300",
                            children: [
                              /* @__PURE__ */ jsx(Timer, { className: "mr-2 h-5 w-5" }),
                              "Assessment starten (15 Min)"
                            ]
                          }
                        ) }),
                        /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: [
                          /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                          "Demo ansehen"
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
                className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto",
                children: [
                  { value: "15 Min", label: "Assessment-Dauer", sublabel: "Schnell & effizient", icon: Clock, color: "from-blue-500 to-cyan-500" },
                  { value: "36", label: "Compliance-Fragen", sublabel: "Wissenschaftlich fundiert", icon: FileCheck, color: "from-purple-500 to-pink-500" },
                  { value: "5", label: "Compliance-Level", sublabel: "Mit Badges & Rewards", icon: Trophy, color: "from-emerald-500 to-teal-500" },
                  { value: "6", label: "Branchen-Vergleich", sublabel: "Industry Benchmarks", icon: BarChart3, color: "from-orange-500 to-red-500" }
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
      isAssessing && /* @__PURE__ */ jsx(
        motion.section,
        {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
          className: "py-16 px-4 sm:px-6 lg:px-8",
          children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl", children: /* @__PURE__ */ jsxs(Card, { className: "border-2 border-purple-500/30 bg-slate-800/90 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxs(CardHeader, { className: "text-center pb-8", children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-bold mb-4 text-white", children: "Live Assessment Demo" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: "Erleben Sie unser interaktives DSGVO-Assessment" }),
              /* @__PURE__ */ jsx(Progress, { value: currentQuestion / assessmentQuestions.length * 100, className: "mt-4" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: !showResults ? /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 20 },
                animate: { opacity: 1, x: 0 },
                exit: { opacity: 0, x: -20 },
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
                    /* @__PURE__ */ jsxs(Badge, { className: "mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30", children: [
                      "Frage ",
                      currentQuestion + 1,
                      " von ",
                      assessmentQuestions.length
                    ] }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2 text-white", children: (_a = assessmentQuestions[currentQuestion]) == null ? void 0 : _a.category }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300", children: (_b = assessmentQuestions[currentQuestion]) == null ? void 0 : _b.question })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: (_c = assessmentQuestions[currentQuestion]) == null ? void 0 : _c.options.map((option, idx) => /* @__PURE__ */ jsx(
                    motion.button,
                    {
                      whileHover: { scale: 1.02 },
                      whileTap: { scale: 0.98 },
                      onClick: () => answerQuestion(option.points),
                      className: "w-full p-4 text-left border-2 border-slate-600 rounded-xl hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-200 text-white",
                      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: option.text }),
                        /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-slate-700 text-slate-200", children: [
                          option.points,
                          " Punkte"
                        ] })
                      ] })
                    },
                    idx
                  )) })
                ]
              },
              currentQuestion
            ) : /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                className: "text-center",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-6xl mb-4", children: getComplianceLevel(demoScore).badge }),
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 text-white", children: getComplianceLevel(demoScore).name }),
                    /* @__PURE__ */ jsxs("p", { className: "text-lg text-slate-300 mb-4", children: [
                      "Score: ",
                      demoScore,
                      "/30 Punkte (",
                      Math.round(demoScore / 30 * 100),
                      "%)"
                    ] }),
                    /* @__PURE__ */ jsxs(Badge, { className: `bg-gradient-to-r ${getComplianceLevel(demoScore).color} text-white`, children: [
                      "Level ",
                      getComplianceLevel(demoScore).level
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-4 text-left max-w-md mx-auto", children: /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-white", children: "Empfohlene Maßnahmen:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: getComplianceLevel(demoScore).actions.map((action, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: action })
                    ] }, idx)) })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      onClick: () => setIsAssessing(false),
                      className: "mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600",
                      children: "Vollständiges Assessment starten"
                    }
                  )
                ]
              }
            ) })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "text-white", children: "Ihre Vorteile" }),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent", children: "auf einen Blick" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto", children: "Warum unser Compliance Scorecard einzigartig ist" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
          {
            icon: Target,
            title: "Präzise Bewertung",
            description: "Detaillierte Analyse aller DSGVO-Anforderungen mit klaren Handlungsempfehlungen",
            subtitle: "Wissenschaftlich fundiert",
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-slate-800/60"
          },
          {
            icon: Gamepad2,
            title: "Gamified Experience",
            description: "Spielerische Compliance-Bewertung mit Badges, Level und Fortschritts-Tracking",
            subtitle: "Motivierend & interaktiv",
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-slate-800/60"
          },
          {
            icon: BarChart3,
            title: "Benchmarking",
            description: "Vergleichen Sie Ihre Compliance mit Branchenstandards und Best Practices",
            subtitle: "Marktvergleich inklusive",
            color: "from-emerald-500 to-teal-500",
            bgColor: "bg-slate-800/60"
          }
        ].map((feature, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.2, duration: 0.6 },
            whileHover: { y: -10 },
            onHoverStart: () => setHoveredFeature(feature.title),
            onHoverEnd: () => setHoveredFeature(null),
            className: "group relative",
            children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                `bg-gradient-to-r ${feature.color}`,
                hoveredFeature === feature.title ? "opacity-30" : "opacity-0"
              ) }),
              /* @__PURE__ */ jsxs(Card, { className: cn(
                "relative h-full p-8 rounded-3xl backdrop-blur-sm border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl",
                feature.bgColor
              ), children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    whileHover: { rotate: 360 },
                    transition: { duration: 0.6 },
                    className: cn(
                      "inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6 shadow-lg",
                      feature.color
                    ),
                    children: /* @__PURE__ */ jsx(feature.icon, { className: "h-8 w-8 text-white" })
                  }
                ),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors", children: feature.title }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4 leading-relaxed", children: feature.description }),
                /* @__PURE__ */ jsx(Badge, { className: cn(
                  "bg-gradient-to-r text-white border-0",
                  feature.color
                ), children: feature.subtitle })
              ] })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50" }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "text-center mb-16",
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent", children: "Branchenvergleich" }) }),
                /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-300", children: "Sehen Sie, wie Ihre Branche bei der DSGVO-Compliance abschneidet" })
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: industryBenchmarks.map((benchmark, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1, duration: 0.6 },
              whileHover: { y: -5 },
              className: "group",
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full p-6 bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "inline-flex p-3 rounded-xl bg-gradient-to-r",
                    benchmark.color
                  ), children: /* @__PURE__ */ jsx(benchmark.icon, { className: "h-6 w-6 text-white" }) }),
                  benchmark.trend === "up" && /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-green-400" }),
                  benchmark.trend === "down" && /* @__PURE__ */ jsx(TrendingDown, { className: "h-5 w-5 text-red-400" }),
                  benchmark.trend === "stable" && /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-slate-400" })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2 text-white", children: benchmark.industry }),
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white mb-1", children: benchmark.averageScore }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Durchschnittlicher Compliance-Score" })
              ] })
            },
            index
          )) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-24 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "text-white", children: "Compliance Level &" }),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent", children: "Badges" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-300", children: "Erreichen Sie das nächste Level und sammeln Sie Achievements" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: complianceLevels.map((level, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            whileHover: { scale: 1.02 },
            className: "group",
            children: /* @__PURE__ */ jsx(Card, { className: cn(
              "p-8 border-2 transition-all duration-500 group-hover:shadow-2xl backdrop-blur-sm border-slate-700/50",
              level.bgColor
            ), children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "text-4xl", children: level.badge }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold mb-1 text-white", children: [
                    "Level ",
                    level.level
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-lg font-semibold text-slate-200", children: level.name }),
                  /* @__PURE__ */ jsx(Badge, { className: "mt-2 bg-slate-700 text-slate-200", children: level.range })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: level.description }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-400 mb-2", children: "Hauptrisiken:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: level.risks.map((risk, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: risk })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-400 mb-2", children: "Empfohlene Maßnahmen:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: level.actions.map((action, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: action })
                    ] }, idx)) })
                  ] })
                ] })
              ] })
            ] }) })
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-purple-900/20" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "1s" } })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl relative z-10", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center",
            children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { scale: 0 },
                  whileInView: { scale: 1 },
                  transition: { delay: 0.2, type: "spring", stiffness: 200 },
                  className: "inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20",
                  children: [
                    /* @__PURE__ */ jsx(Trophy, { className: "h-5 w-5 text-purple-400" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-300", children: "Bereit für Ihr DSGVO-Assessment?" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-black mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "text-white", children: "Bereit für Ihr" }),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent", children: "DSGVO-Assessment?" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed", children: [
                "Ermitteln Sie Ihren Compliance-Score, sammeln Sie Badges und erhalten Sie",
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-300", children: " konkrete Handlungsempfehlungen" }),
                " für bessere DSGVO-Compliance."
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
                        onClick: startAssessment,
                        size: "lg",
                        className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300",
                        children: [
                          /* @__PURE__ */ jsx(Timer, { className: "mr-3 h-6 w-6" }),
                          "Assessment starten (15 Min)",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-3 h-6 w-6" })
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-10 py-4 text-lg font-bold backdrop-blur-sm", children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "mr-3 h-6 w-6" }),
                      "Demo vereinbaren"
                    ] }) })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  transition: { delay: 0.6, duration: 0.6 },
                  className: "mt-12 flex justify-center items-center gap-8 text-sm text-slate-400",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Gamepad2, { className: "h-5 w-5 text-purple-400" }),
                      /* @__PURE__ */ jsx("span", { children: "Gamified Experience" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-pink-400" }),
                      /* @__PURE__ */ jsx("span", { children: "Branchenvergleich" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-indigo-400" }),
                      /* @__PURE__ */ jsx("span", { children: "Wissenschaftlich fundiert" })
                    ] })
                  ]
                }
              )
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  DsgvoComplianceScorecard as default
};
