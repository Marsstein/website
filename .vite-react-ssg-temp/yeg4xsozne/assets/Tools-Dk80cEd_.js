import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Cookie, MessageSquare, FileText, Trophy, Brain, Sparkles, Rocket, PlayCircle, Shield, Clock, TrendingUp, Users, Filter, Grid3X3, Zap, BarChart3, Star, CheckCircle2, ArrowRight, ExternalLink, Calendar, Phone, Building2, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
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
const Tools = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedComplexity, setSelectedComplexity] = useState("all");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Compliance-Tools Suite",
    "description": "Umfassende Suite von Compliance-Tools: DSGVO-Tools, Cookie-Management, Whistleblower-Systeme",
    "numberOfItems": 12,
    "url": "https://marsstein.com/tools"
  };
  const categories = [
    { id: "all", name: "Alle Tools", icon: Grid3X3, count: 5 },
    { id: "cookie", name: "Cookie-Tools", icon: Cookie, count: 1 },
    { id: "compliance", name: "Compliance-Tools", icon: Shield, count: 2 },
    { id: "innovation", name: "KI-Tools", icon: Zap, count: 1 },
    { id: "communication", name: "Kommunikations-Tools", icon: MessageSquare, count: 1 }
  ];
  const complexityLevels = [
    { id: "all", name: "Alle Level", color: "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100" },
    { id: "basic", name: "Einfach", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100" },
    { id: "intermediate", name: "Mittel", color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100" },
    { id: "expert", name: "Experte", color: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100" }
  ];
  const tools = [
    {
      id: "cookie-management-tool",
      icon: Cookie,
      title: "Cookie Management Tool",
      subtitle: "Schluss mit Cookie-Chaos",
      description: "Ihre Website sammelt Cookies, aber Ihr Banner ist rechtlich unsicher? Unser Tool löst das DSGVO-Problem in 5 Minuten - ohne teure Anwälte.",
      challenges: ["Rechtsunsichere Cookie-Banner kosten Geld", "Nutzer klicken Banner weg = weniger Conversions", "Anwalt für Cookie-Policy kostet 3.000€+"],
      benefits: ["Rechtssicheres Banner in 5 Min", "Mehr Consent = mehr Daten = mehr Umsatz", "Keine Anwaltskosten mehr"],
      frameworkFocus: "DSGVO + ePrivacy",
      category: "cookie",
      status: "live",
      popularity: 95,
      complexity: "intermediate",
      color: "from-orange-500 to-red-600",
      link: "/tools/cookie-management-tool",
      stats: "Sofort einsetzbar",
      setupTime: "5 Min",
      roi: "Anwaltskosten sparen"
    },
    {
      id: "whistleblower-system-tool",
      icon: MessageSquare,
      title: "Hinweisgebersystem Tool",
      subtitle: "EU-Pflicht? Kein Problem!",
      description: "Ab 50 Mitarbeitern brauchen Sie ein Hinweisgebersystem. Bußgelder bis 100.000€ drohen. Unser Tool macht Sie in 24h compliant.",
      challenges: ["Bußgeld bis 100.000€ bei fehlender Umsetzung", "Komplizierte EU-Vorgaben verstehen", "Whistleblower-Anonymität sicherstellen"],
      benefits: ["Bußgeld-Risiko eliminiert", "EU-Vorgaben automatisch erfüllt", "Totale Anonymität garantiert"],
      frameworkFocus: "EU-Whistleblower-Richtlinie",
      category: "communication",
      status: "live",
      popularity: 88,
      complexity: "expert",
      color: "from-emerald-500 to-teal-600",
      link: "/tools/whistleblower-system-tool",
      stats: "Bußgeld-sicher",
      setupTime: "24h",
      roi: "Bußgeld vermeiden"
    },
    {
      id: "dsgvo-email-template-generator",
      icon: FileText,
      title: "DSGVO Email Template Generator",
      subtitle: "Nie wieder rechtsunsichere Emails",
      description: "Jede Email an Kunden kann eine DSGVO-Falle sein. Falsche Datenschutz-Texte = Abmahnungen. Unser Generator produziert sichere Templates in 2 Minuten.",
      challenges: ["Abmahnungen wegen falscher Email-Texte", "Jede Email-Kampagne rechtlich prüfen lassen", "Templates für jeden Fall selbst schreiben"],
      benefits: ["Abmahn-sicher emailen", "Keine Anwalts-Checks mehr nötig", "Templates für alle Fälle fertig"],
      frameworkFocus: "DSGVO + Email-Marketing",
      category: "communication",
      status: "beta",
      popularity: 92,
      complexity: "basic",
      color: "from-blue-500 to-indigo-600",
      link: "/tools/dsgvo-email-template-generator",
      stats: "Beta-Zugang",
      setupTime: "2 Min",
      roi: "Abmahnungen vermeiden"
    },
    {
      id: "dsgvo-compliance-scorecard",
      icon: Trophy,
      title: "DSGVO Compliance Check",
      subtitle: "Wo stehen Sie wirklich?",
      description: "Sie wissen nicht, ob Ihr Datenschutz ausreicht? Behörden-Prüfungen können teuer werden. Checken Sie Ihren Status in 15 Minuten - kostenlos.",
      challenges: ["Keine Ahnung vom eigenen Compliance-Status", "Behörden-Prüfung kann jederzeit kommen", "Branche ist schon weiter als Sie"],
      benefits: ["Schwachstellen sofort erkannt", "Prüfungs-bereit in Rekordzeit", "Konkurrenz-Vergleich inklusive"],
      frameworkFocus: "DSGVO Check",
      category: "compliance",
      status: "live",
      popularity: 87,
      complexity: "intermediate",
      color: "from-purple-500 to-pink-600",
      link: "/tools/dsgvo-compliance-scorecard",
      stats: "Sofort-Check",
      setupTime: "15 Min",
      roi: "Prüfungs-sicher"
    },
    {
      id: "compliance-ai-assistant",
      icon: Brain,
      title: "KI Compliance Berater",
      subtitle: "Ihr 24/7 Rechts-Experte",
      description: "Compliance-Fragen zur Unzeit? Anwalt nicht erreichbar? Stundensatz zu hoch? Unser KI-Berater gibt Ihnen sofort Antworten - rund um die Uhr.",
      challenges: ["Anwalt kostet 300€/h für einfache Fragen", "Compliance-Fragen kommen immer zur Unzeit", "Team hat keine Rechts-Expertise"],
      benefits: ["Sofort-Antworten statt teure Anwalt-Termine", "Nachts, Wochenende - immer verfügbar", "Team wird zum Compliance-Experten"],
      frameworkFocus: "KI Rechtsberatung",
      category: "innovation",
      status: "coming_soon",
      popularity: 96,
      complexity: "intermediate",
      color: "from-blue-500 to-indigo-600",
      link: "/tools/compliance-ai-assistant",
      stats: "KI-Powered",
      setupTime: "30s",
      roi: "Anwaltskosten sparen"
    }
  ];
  const filteredTools = tools.filter((tool) => {
    const categoryMatch = selectedCategory === "all" || tool.category === selectedCategory;
    const complexityMatch = selectedComplexity === "all" || tool.complexity === selectedComplexity;
    return categoryMatch && complexityMatch;
  });
  const getStatusBadge = (status) => {
    switch (status) {
      case "live":
        return /* @__PURE__ */ jsx(Badge, { className: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100", children: "Live" });
      case "beta":
        return /* @__PURE__ */ jsx(Badge, { className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100", children: "Beta" });
      case "coming_soon":
        return /* @__PURE__ */ jsx(Badge, { className: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-100", children: "Bald verfügbar" });
      default:
        return null;
    }
  };
  const getComplexityBadge = (complexity) => {
    const level = complexityLevels.find((l) => l.id === complexity);
    return level ? /* @__PURE__ */ jsx(Badge, { className: level.color, children: level.name }) : null;
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Tools – Compliance-Werkzeuge & Automatisierung",
        description: "Compliance-Tools Suite: DSGVO-Check, Cookie-Scanner, Whistleblower-System, KI-Assistent. ✓ Automatisierung ✓ Rechtssicher ✓ Enterprise-ready. Jetzt testen!",
        canonical: "/tools",
        keywords: "Compliance Tools, DSGVO Tools, Cookie Scanner, Whistleblower System, Compliance Automatisierung",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full blur-3xl animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-600/5 rounded-full blur-3xl animate-spin-slow" })
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
                      className: "inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20",
                      children: [
                        /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-blue-400 animate-spin-slow" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent", children: "Compliance Tools" }),
                        /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-emerald-400 animate-spin-slow", style: { animationDelay: "1s" } })
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
                        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent", children: "Compliance" }),
                        /* @__PURE__ */ jsx("br", {}),
                        /* @__PURE__ */ jsx("span", { className: "text-white", children: "leicht" }),
                        /* @__PURE__ */ jsx("br", {}),
                        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent", children: "gemacht" })
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
                        "Intelligente Tools, die Ihre Compliance-Herausforderungen lösen und aus komplexen Anforderungen",
                        /* @__PURE__ */ jsx("span", { className: "font-semibold text-emerald-400", children: " einfache Lösungen" }),
                        " machen."
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
                        /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-blue-500 to-emerald-500 hover:from-blue-600 hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105", children: [
                          /* @__PURE__ */ jsx(Rocket, { className: "mr-2 h-5 w-5" }),
                          "Tools entdecken"
                        ] }),
                        /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-emerald-400/30 hover:border-emerald-400 text-emerald-400 hover:bg-emerald-400/5 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: [
                          /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                          "Demo ansehen"
                        ] })
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
                className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
                children: [
                  { value: "DSGVO-konform", label: "Vollständige Compliance", icon: Shield, color: "from-emerald-500 to-teal-500" },
                  { value: "Schnell", label: "Setup in Minuten", icon: Clock, color: "from-amber-500 to-orange-500" },
                  { value: "Aktuell", label: "Immer auf dem neuesten Stand", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
                  { value: "Experten-Tools", label: "Von Datenschutz-Profis", icon: Users, color: "from-blue-500 to-cyan-500" }
                ].map((stat, index) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 1.2 + index * 0.1, duration: 0.6 },
                    className: "relative group",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300` }),
                      /* @__PURE__ */ jsxs("div", { className: "relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/20 hover:transform hover:scale-105 transition-all duration-300", children: [
                        /* @__PURE__ */ jsx("div", { className: `inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`, children: /* @__PURE__ */ jsx(stat.icon, { className: "h-6 w-6 text-white" }) }),
                        /* @__PURE__ */ jsx("div", { className: "text-lg md:text-xl font-bold text-white mb-1", children: stat.value }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 font-medium", children: stat.label })
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
      /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/20", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Filter, { className: "h-5 w-5 text-emerald-400" }),
            "Kategorien"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: categories.map((category) => /* @__PURE__ */ jsxs(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => setSelectedCategory(category.id),
              className: cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 border",
                selectedCategory === category.id ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50" : "bg-slate-700/40 text-slate-300 border-slate-600/40 hover:border-emerald-500/30 hover:text-emerald-400"
              ),
              children: [
                /* @__PURE__ */ jsx(category.icon, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: category.name }),
                /* @__PURE__ */ jsx(Badge, { className: "bg-slate-600/50 text-slate-300 text-xs", children: category.count })
              ]
            },
            category.id
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-emerald-400" }),
            "Komplexität"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: complexityLevels.map((level) => /* @__PURE__ */ jsx(
            motion.button,
            {
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              onClick: () => setSelectedComplexity(level.id),
              className: cn(
                "px-4 py-2 rounded-lg font-medium transition-all duration-300 border",
                selectedComplexity === level.id ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/50" : "bg-slate-700/40 text-slate-300 border-slate-600/40 hover:border-emerald-500/30 hover:text-emerald-400"
              ),
              children: level.name
            },
            level.id
          )) })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: { duration: 0.4 },
          className: "grid md:grid-cols-2 xl:grid-cols-3 gap-8",
          children: filteredTools.map((tool, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1, duration: 0.6 },
              whileHover: { y: -10 },
              className: "group relative",
              children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                  `bg-gradient-to-r ${tool.color}`,
                  "opacity-0 group-hover:opacity-20"
                ) }),
                /* @__PURE__ */ jsx(Card, { className: "relative overflow-hidden border-2 border-slate-700/40 transition-all duration-500 hover:shadow-2xl h-full backdrop-blur-sm bg-slate-800/60 group-hover:border-emerald-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8 h-full flex flex-col", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        whileHover: { rotate: 360 },
                        transition: { duration: 0.6 },
                        className: cn(
                          "p-4 rounded-2xl bg-gradient-to-br shadow-lg",
                          tool.color
                        ),
                        children: /* @__PURE__ */ jsx(tool.icon, { className: "h-8 w-8 text-white" })
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 items-end", children: [
                      getStatusBadge(tool.status),
                      getComplexityBadge(tool.complexity),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-amber-500 fill-current" }),
                        /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-slate-300", children: [
                          tool.popularity,
                          "%"
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mb-6 flex-grow", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 text-white group-hover:text-emerald-400 transition-colors", children: tool.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-3 font-medium", children: tool.subtitle }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 leading-relaxed", children: tool.description })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-700/20", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-emerald-400", children: tool.setupTime }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "Setup" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-blue-400", children: tool.roi }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "ROI" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-purple-400", children: [
                        tool.popularity,
                        "%"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "Beliebt" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: tool.benefits.slice(0, 3).map((benefit, idx) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { delay: idx * 0.1, duration: 0.4 },
                      className: "flex items-center gap-3",
                      children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-emerald-400 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-slate-300", children: benefit })
                      ]
                    },
                    idx
                  )) }) }),
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
                        /* @__PURE__ */ jsx("span", { children: "Tool nutzen" }),
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" }),
                        /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 opacity-60" })
                      ] }) })
                    }
                  )
                ] }) })
              ]
            },
            tool.id
          ))
        },
        `${selectedCategory}-${selectedComplexity}`
      ) }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-blue-500/5 to-teal-500/5" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-emerald-500/10 to-teal-600/10 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "1s" } })
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
                  className: "inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20",
                  children: [
                    /* @__PURE__ */ jsx(Rocket, { className: "h-5 w-5 text-emerald-400" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent", children: "Starten Sie jetzt durch" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-black mb-6", children: [
                /* @__PURE__ */ jsx("span", { className: "text-white", children: "Bereit für" }),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-emerald-400 via-teal-400 to-blue-400 bg-clip-text text-transparent", children: "smarte Tools?" })
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed", children: [
                "Machen Sie den ersten Schritt in eine Zukunft, in der",
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-emerald-400", children: "Tools Ihre Probleme lösen" }),
                " statt neue zu schaffen."
              ] }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.4, duration: 0.6 },
                  className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
                  children: [
                    /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300", children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "mr-3 h-6 w-6" }),
                      "Kostenlose Demo buchen",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-3 h-6 w-6" })
                    ] }) }),
                    /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-emerald-400/30 hover:border-emerald-400 text-emerald-400 hover:bg-emerald-400/5 px-10 py-4 text-lg font-bold backdrop-blur-sm", children: [
                      /* @__PURE__ */ jsx(Phone, { className: "mr-3 h-6 w-6" }),
                      "Sofort anrufen"
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
                  className: "mt-12 text-center",
                  children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-4", children: "Tools, die echte Probleme lösen" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-8 opacity-40", children: [
                      /* @__PURE__ */ jsx(Building2, { className: "h-8 w-8 text-slate-400" }),
                      /* @__PURE__ */ jsx(Users, { className: "h-8 w-8 text-slate-400" }),
                      /* @__PURE__ */ jsx(Shield, { className: "h-8 w-8 text-slate-400" }),
                      /* @__PURE__ */ jsx(Award, { className: "h-8 w-8 text-slate-400" }),
                      /* @__PURE__ */ jsx(Trophy, { className: "h-8 w-8 text-slate-400" })
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
  Tools as default
};
