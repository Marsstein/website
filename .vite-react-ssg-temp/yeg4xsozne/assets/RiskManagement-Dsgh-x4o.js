import { jsxs, jsx } from "react/jsx-runtime";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Target, AlertTriangle, Eye, FileCheck, Shield, Building2, Clock, ArrowRight, UserCheck, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
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
import "react-helmet-async";
const RiskManagement = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const riskTools = [
    {
      id: "dsfa",
      title: "Datenschutz-Folgenabschätzung (DSFA)",
      description: "Systematische Analyse und Bewertung von Datenschutzrisiken bei neuen Verarbeitungstätigkeiten",
      icon: FileCheck,
      color: "from-blue-500 to-indigo-600",
      difficulty: "Fortgeschritten",
      duration: "2-4 Stunden",
      link: "/wissen/leitfaden/dsfa-durchfuehrung",
      steps: [
        "Notwendigkeit der DSFA prüfen",
        "Verarbeitungstätigkeiten beschreiben",
        "Risiken identifizieren und bewerten",
        "Schutzmaßnahmen definieren"
      ]
    },
    {
      id: "tom-bewertung",
      title: "TOM Bewertung & Audit",
      description: "Bewertung technischer und organisatorischer Maßnahmen für angemessenen Datenschutz",
      icon: Shield,
      color: "from-emerald-500 to-teal-600",
      difficulty: "Mittel",
      duration: "1-2 Stunden",
      link: "/wissen/leitfaden/tom-massnahmen",
      steps: [
        "Aktuelle TOM dokumentieren",
        "Schutzniveau bewerten",
        "Schwachstellen identifizieren",
        "Verbesserungsmaßnahmen planen"
      ]
    },
    {
      id: "vendor-risk",
      title: "Vendor Risk Assessment",
      description: "Systematische Bewertung von Datenschutzrisiken bei Auftragsverarbeitern und Partnern",
      icon: Building2,
      color: "from-orange-500 to-red-600",
      difficulty: "Fortgeschritten",
      duration: "3-5 Stunden",
      link: "/wissen/risk-management/vendor-assessment",
      steps: [
        "Lieferanten kategorisieren",
        "Datenschutz-Fragebögen versenden",
        "Verträge und Zertifikate prüfen",
        "Risikobewertung dokumentieren"
      ]
    },
    {
      id: "incident-response",
      title: "Incident Response Plan",
      description: "Vorbereitung und Durchführung von Notfallmaßnahmen bei Datenschutzverletzungen",
      icon: AlertTriangle,
      color: "from-red-500 to-pink-600",
      difficulty: "Kritisch",
      duration: "30 Min - 72h",
      link: "/wissen/leitfaden/data-breach-notfall",
      steps: [
        "Vorfall identifizieren und bewerten",
        "72h-Meldung vorbereiten",
        "Betroffene informieren",
        "Schadensbegrenzung einleiten"
      ]
    }
  ];
  const complianceMonitoring = [
    {
      title: "Kontinuierliche Überwachung",
      description: "Automatisierte Monitoring-Tools für laufende Compliance-Kontrolle",
      icon: Eye,
      metrics: ["98% Automatisierung", "24/7 Monitoring", "Real-time Alerts"]
    },
    {
      title: "Risiko-Dashboards",
      description: "Zentrale Übersicht über alle identifizierten Datenschutzrisiken",
      icon: Target,
      metrics: ["Live Updates", "Risk Scoring", "Trend Analysis"]
    },
    {
      title: "Audit-Vorbereitung",
      description: "Systematische Vorbereitung auf externe Datenschutz-Audits",
      icon: UserCheck,
      metrics: ["Checklisten", "Dokumentation", "Mock Audits"]
    }
  ];
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Mittel":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
      case "Fortgeschritten":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100";
      case "Kritisch":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-spin-slow" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        ref: heroRef,
        style: { y, opacity },
        className: "relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl relative z-10", children: /* @__PURE__ */ jsxs(
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
                  className: "inline-flex items-center gap-3 px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full mb-8 border border-orange-500/20",
                  children: [
                    /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-orange-400 animate-spin-slow" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-orange-300", children: "Risk Management" }),
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400 animate-pulse" })
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
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: "Risk" }),
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent", children: "Management" }),
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: "für" }),
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent", children: "Compliance" })
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
                    "Professionelle Tools und Methoden für ",
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-orange-300", children: "systematische Risikoanalyse" }),
                    "und kontinuierliches Compliance-Monitoring."
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
                    /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300", children: [
                      /* @__PURE__ */ jsx(Target, { className: "mr-2 h-5 w-5" }),
                      "DSFA starten"
                    ] }) }),
                    /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-orange-500/30 hover:border-orange-400 text-orange-300 hover:bg-orange-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: [
                      /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-5 w-5" }),
                      "Risk Dashboard"
                    ] }) })
                  ]
                }
              )
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent", children: "Risk Assessment Tools" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300 max-w-3xl mx-auto", children: "Professionelle Werkzeuge für systematische Risikoanalyse und Compliance-Bewertung" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: riskTools.map((tool, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          whileHover: { y: -10 },
          className: "group relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
              `bg-gradient-to-r ${tool.color}`,
              "opacity-0 group-hover:opacity-30"
            ) }),
            /* @__PURE__ */ jsxs(Card, { className: "relative h-full border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" }),
              /* @__PURE__ */ jsxs(CardContent, { className: "relative p-8 h-full flex flex-col", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      whileHover: { rotate: 360 },
                      transition: { duration: 0.6 },
                      className: cn(
                        "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                        tool.color
                      ),
                      children: /* @__PURE__ */ jsx(tool.icon, { className: "h-8 w-8 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 items-end", children: [
                    /* @__PURE__ */ jsx(Badge, { className: getDifficultyColor(tool.difficulty), children: tool.difficulty }),
                    /* @__PURE__ */ jsxs(Badge, { className: "bg-slate-700 text-slate-200", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3 mr-1" }),
                      tool.duration
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-6 flex-grow", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3 text-white group-hover:text-orange-300 transition-colors", children: tool.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6 leading-relaxed", children: tool.description }),
                  /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Arbeitsschritte:" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: tool.steps.map((step, idx) => /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        initial: { opacity: 0, x: -20 },
                        whileInView: { opacity: 1, x: 0 },
                        transition: { delay: idx * 0.1, duration: 0.4 },
                        className: "flex items-center gap-2",
                        children: [
                          /* @__PURE__ */ jsx("div", { className: cn(
                            "w-6 h-6 rounded-full bg-gradient-to-r flex items-center justify-center text-xs font-bold text-white",
                            tool.color
                          ), children: idx + 1 }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: step })
                        ]
                      },
                      idx
                    )) })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: "mt-auto",
                    children: /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
                      "w-full bg-gradient-to-r text-white border-0 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300",
                      tool.color
                    ), children: /* @__PURE__ */ jsxs(Link, { to: tool.link, className: "flex items-center justify-center gap-2", children: [
                      /* @__PURE__ */ jsx("span", { children: "Tool starten" }),
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
                    ] }) })
                  }
                )
              ] })
            ] })
          ]
        },
        tool.id
      )) })
    ] }) }),
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
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent", children: "Compliance Monitoring" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: "Kontinuierliche Überwachung und Bewertung Ihrer Compliance-Performance" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: complianceMonitoring.map((item, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.2, duration: 0.6 },
            whileHover: { y: -5 },
            className: "group",
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-4 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 mb-6 shadow-lg", children: /* @__PURE__ */ jsx(item.icon, { className: "h-8 w-8 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 text-white", children: item.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: item.description }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: item.metrics.map((metric, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-orange-400 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: metric })
              ] }, idx)) })
            ] }) })
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  RiskManagement as default
};
