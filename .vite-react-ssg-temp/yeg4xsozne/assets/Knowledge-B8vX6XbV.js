import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Shield, Award, Scale, Target, Building2, AlertTriangle, BookOpen, Brain, Search, FileText, Settings, Star, AlertOctagon, CheckCircle2, ArrowRight, ExternalLink, Lightbulb, Calendar, Clock, Download } from "lucide-react";
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
const Knowledge = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const categories = [
    { id: "all", name: "Alle Bereiche", icon: BookOpen, count: 24 },
    { id: "dsgvo", name: "DSGVO & Datenschutz", icon: Shield, count: 12 },
    { id: "implementation", name: "Implementierung", icon: Settings, count: 8 },
    { id: "crisis", name: "Krisenmanagement", icon: AlertTriangle, count: 4 }
  ];
  const knowledgeAreas = [
    {
      id: "dsgvo-guides",
      title: "DSGVO-Leitfäden",
      description: "Umfassende Schritt-für-Schritt Anleitungen für die DSGVO-Implementierung",
      icon: Shield,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",
      category: "dsgvo",
      guides: 8,
      difficulty: "Alle Level",
      link: "/wissen/dsgvo",
      popular: true,
      featured: [
        "DSGVO in 10 Minuten verstehen",
        "DSGVO in 30 Tagen umsetzen",
        "Website DSGVO-konform gestalten",
        "Data Breach Notfallplan"
      ]
    },
    {
      id: "compliance-frameworks",
      title: "Compliance Frameworks",
      description: "Detaillierte Guides zu ISO 27001, SOC2, EU AI Act und anderen Standards",
      icon: Award,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900",
      category: "implementation",
      guides: 6,
      difficulty: "Fortgeschritten",
      link: "/wissen/compliance-frameworks",
      featured: [
        "ISO 27001 Zertifizierung",
        "SOC2 Type II Audit",
        "EU AI Act Compliance",
        "TISAX Assessment"
      ]
    },
    {
      id: "legal-updates",
      title: "Rechtsprechung & Updates",
      description: "Aktuelle Gerichtsurteile, neue Regelungen und deren praktische Auswirkungen",
      icon: Scale,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
      category: "dsgvo",
      guides: 5,
      difficulty: "Experte",
      link: "/wissen/rechtsprechung",
      featured: [
        "Schrems II Urteil Analyse",
        "Neue EDSA Guidelines",
        "Bußgeld-Trends 2024",
        "Cookie-Banner Rechtsprechung"
      ]
    },
    {
      id: "risk-management",
      title: "Risk Management",
      description: "Tools und Methoden für Risikoanalyse und Compliance-Monitoring",
      icon: Target,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900",
      category: "implementation",
      guides: 4,
      difficulty: "Fortgeschritten",
      link: "/wissen/risk-management",
      featured: [
        "DSFA durchführen",
        "TOM bewerten",
        "Vendor Risk Assessment",
        "Incident Response Plan"
      ]
    },
    {
      id: "industry-specific",
      title: "Branchenspezifische Guides",
      description: "Maßgeschneiderte Compliance-Lösungen für verschiedene Industrien",
      icon: Building2,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900",
      category: "dsgvo",
      guides: 7,
      difficulty: "Mittel",
      link: "/wissen/branchen",
      featured: [
        "Fintech Compliance",
        "Healthcare DSGVO",
        "E-Commerce Privacy",
        "SaaS Data Protection"
      ]
    },
    {
      id: "crisis-management",
      title: "Krisenmanagement",
      description: "Notfallpläne und Sofortmaßnahmen bei Datenschutzverletzungen",
      icon: AlertTriangle,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-red-900 to-slate-900",
      category: "crisis",
      guides: 4,
      difficulty: "Kritisch",
      link: "/wissen/krisenmanagement",
      urgent: true,
      featured: [
        "72h Data Breach Response",
        "Behörden-Kommunikation",
        "Media Crisis Management",
        "Legal Damage Control"
      ]
    }
  ];
  const filteredAreas = selectedCategory === "all" ? knowledgeAreas : knowledgeAreas.filter((area) => area.category === selectedCategory);
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Alle Level":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
      case "Mittel":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
      case "Fortgeschritten":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100";
      case "Experte":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
      case "Kritisch":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
    }
  };
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
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20",
                    children: [
                      /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5 text-blue-400 animate-spin-slow" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-blue-300", children: "Compliance Wissen" }),
                      /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-indigo-400 animate-pulse" })
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
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Compliance" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent", children: "Wissen" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "für" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent", children: "Experten" })
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
                      "Praxiserprobte Leitfäden, aktuelle Rechtsprechung und ",
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-300", children: "Schritt-für-Schritt Anleitungen" }),
                      "für erfolgreiche Compliance-Implementierung."
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
                        /* @__PURE__ */ jsx(BookOpen, { className: "mr-2 h-5 w-5" }),
                        "DSGVO-Leitfäden entdecken"
                      ] }) }),
                      /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-blue-500/30 hover:border-blue-400 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: [
                        /* @__PURE__ */ jsx(Search, { className: "mr-2 h-5 w-5" }),
                        "Wissen durchsuchen"
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
              className: "grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto",
              children: [
                { value: "24+", label: "Leitfäden", sublabel: "Praxiserprobte Guides", icon: FileText, color: "from-blue-500 to-indigo-500" },
                { value: "98%", label: "Erfolgsrate", sublabel: "Bei Implementierung", icon: Target, color: "from-purple-500 to-pink-500" }
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
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "flex flex-wrap justify-center gap-4 mb-12",
        children: categories.map((category, index) => /* @__PURE__ */ jsxs(
          motion.button,
          {
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { delay: index * 0.1, duration: 0.4 },
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            onClick: () => setSelectedCategory(category.id),
            className: cn(
              "flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border-2",
              selectedCategory === category.id ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-blue-500 shadow-xl" : "bg-slate-800/60 text-slate-300 border-slate-700/50 hover:border-blue-500/50 hover:text-blue-300"
            ),
            children: [
              /* @__PURE__ */ jsx(category.icon, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsx("span", { children: category.name }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-slate-700 text-slate-200 border-0 text-xs", children: category.count })
            ]
          },
          category.id
        ))
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-8", children: filteredAreas.map((area, index) => /* @__PURE__ */ jsxs(
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
            `bg-gradient-to-r ${area.color}`,
            "opacity-0 group-hover:opacity-30"
          ) }),
          /* @__PURE__ */ jsxs(Card, { className: "relative h-full border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: cn("absolute inset-0", area.bgColor) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "relative p-8 h-full flex flex-col", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    whileHover: { rotate: 360 },
                    transition: { duration: 0.6 },
                    className: cn(
                      "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                      area.color
                    ),
                    children: /* @__PURE__ */ jsx(area.icon, { className: "h-8 w-8 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 items-end", children: [
                  area.popular && /* @__PURE__ */ jsxs(Badge, { className: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30", children: [
                    /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 mr-1" }),
                    "Beliebt"
                  ] }),
                  area.urgent && /* @__PURE__ */ jsxs(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30 animate-pulse", children: [
                    /* @__PURE__ */ jsx(AlertOctagon, { className: "h-3 w-3 mr-1" }),
                    "Urgent"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6 flex-grow", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors", children: area.title }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6 leading-relaxed", children: area.description }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-800/60 rounded-xl backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-blue-400", children: area.guides }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "Guides" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Badge, { className: getDifficultyColor(area.difficulty), children: area.difficulty }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Featured Guides:" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: area.featured.map((guide, idx) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { delay: idx * 0.1, duration: 0.4 },
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-blue-400 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: guide })
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
                    area.color
                  ), children: /* @__PURE__ */ jsxs(Link, { to: area.link, className: "flex items-center justify-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { children: "Bereich erkunden" }),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" }),
                    /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 opacity-60" })
                  ] }) })
                }
              )
            ] })
          ] })
        ]
      },
      area.id
    )) }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-800/50 via-blue-900/30 to-slate-800/50" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent", children: "Schnellzugriff" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-300", children: "Die wichtigsten Guides für den sofortigen Einstieg" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
          {
            title: "DSGVO Grundlagen",
            description: "In 10 Minuten die wichtigsten Prinzipien verstehen",
            icon: Lightbulb,
            link: "/wissen/leitfaden/dsgvo-grundlagen",
            color: "from-green-500 to-emerald-500",
            time: "10 Min",
            level: "Einsteiger"
          },
          {
            title: "30-Tage Implementation",
            description: "Komplette DSGVO-Umsetzung in einem Monat",
            icon: Calendar,
            link: "/wissen/leitfaden/dsgvo-30-tage",
            color: "from-blue-500 to-indigo-500",
            time: "45 Min",
            level: "Fortgeschritten"
          },
          {
            title: "Data Breach Notfall",
            description: "72h-Notfallplan bei Datenschutzverletzungen",
            icon: AlertTriangle,
            link: "/wissen/leitfaden/data-breach-notfall",
            color: "from-red-500 to-pink-500",
            time: "20 Min",
            level: "Kritisch"
          }
        ].map((guide, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.2, duration: 0.6 },
            whileHover: { y: -5 },
            className: "group",
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6 shadow-lg",
                guide.color
              ), children: /* @__PURE__ */ jsx(guide.icon, { className: "h-8 w-8 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 text-white", children: guide.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: guide.description }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsxs(Badge, { className: "bg-slate-700 text-slate-200", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3 mr-1" }),
                  guide.time
                ] }),
                /* @__PURE__ */ jsx(Badge, { className: getDifficultyColor(guide.level), children: guide.level })
              ] }),
              /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
                "w-full bg-gradient-to-r text-white",
                guide.color
              ), children: /* @__PURE__ */ jsxs(Link, { to: guide.link, children: [
                "Jetzt lesen",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] }) })
          },
          index
        )) })
      ] })
    ] }),
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
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent", children: "Compliance-Exzellenz?" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed", children: [
              "Nutzen Sie unser gesamtes Wissen für Ihre ",
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-300", children: "erfolgreiche Compliance-Transformation" }),
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
                        /* @__PURE__ */ jsx(BookOpen, { className: "mr-3 h-6 w-6" }),
                        "Alle Leitfäden erkunden",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-3 h-6 w-6" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-blue-500/30 hover:border-blue-400 text-blue-300 hover:bg-blue-500/10 px-10 py-4 text-lg font-bold backdrop-blur-sm", children: [
                    /* @__PURE__ */ jsx(Download, { className: "mr-3 h-6 w-6" }),
                    "PDF Downloads"
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
  Knowledge as default
};
