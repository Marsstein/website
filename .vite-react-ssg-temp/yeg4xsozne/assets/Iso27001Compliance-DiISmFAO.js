import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React__default, { useState, useEffect } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardDescription } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-J8wFYQQL.js";
import { c as cn } from "../main.mjs";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, AlertCircle, FileText, CheckCircle2, TrendingUp, Settings, Award, Layers, Building2, BookOpen, Rocket, Monitor, FileCheck, Globe, ArrowRight, PlayCircle, Clock, Zap, XCircle, Users, Euro, BarChart3, UserCheck, Database, Lock, Target, Bot, ShieldCheck, Sparkles, Quote, CreditCard, Search, CheckSquare, Eye, ChevronRight, Star, Car, Network, Cloud, Heart, Phone, Calendar, Briefcase, Server, Download, Mail } from "lucide-react";
import "react-helmet-async";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "react-router-dom";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-accordion";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const HeroSection = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const scoreInterval = setInterval(() => {
        setComplianceScore((prev) => {
          if (prev >= 97) {
            clearInterval(scoreInterval);
            return 97;
          }
          return prev + 3;
        });
      }, 30);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#F5F6F8] via-white to-[#e24e1b]/5" }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 rounded-full blur-3xl",
          animate: {
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          },
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 rounded-full blur-3xl",
          animate: {
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4]
          },
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container relative z-10 px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "space-y-8",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "flex flex-col sm:flex-row gap-3",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.2 },
                children: [
                  /* @__PURE__ */ jsxs(Badge, { className: "bg-gradient-to-r from-[#a1251b] to-red-600 text-white border-0 px-4 py-2 font-semibold shadow-lg", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 mr-2" }),
                    "ISO 27001 Certified"
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { className: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 px-4 py-2", children: [
                    /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 mr-2" }),
                    "Professionelle Zertifizierung"
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                className: "text-4xl md:text-6xl font-bold tracking-tight leading-tight",
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.3 },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-[#232323] dark:text-gray-100", children: "ISO 27001-Zertifizierung" }),
                  /* @__PURE__ */ jsx("span", { className: "block bg-gradient-to-r from-[#e24e1b] via-[#ea580c] to-[#f97316] bg-clip-text text-transparent", children: "Automatisiert & Rechtssicher" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "space-y-4",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.5 },
                children: [
                  /* @__PURE__ */ jsxs("p", { className: "text-xl text-[#474747] dark:text-gray-300 leading-relaxed", children: [
                    "Schützen Sie Ihr Unternehmen vor Cyber-Bedrohungen und erschließen Sie internationale Märkte. Mit unserer KI-gestützten Plattform erreichen Sie ",
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-[#e24e1b]", children: "ISO 27001-Zertifizierung in nur 6 Monaten" }),
                    "– 75% schneller als herkömmliche Ansätze."
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-blue-50 to-[#a1251b]/5 dark:from-blue-950/20 dark:to-[#a1251b]/10 border-l-4 border-blue-500 p-4 rounded-r-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-blue-900 dark:text-blue-100", children: "Warum ISO 27001 für Ihr Unternehmen entscheidend ist:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 dark:text-blue-200 mt-1 space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Schutz vor Cyber-Angriffen und Datenverlust" }),
                        /* @__PURE__ */ jsx("li", { children: "• Zugang zu internationalen B2B-Märkten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vertrauen von Enterprise-Kunden gewinnen" })
                      ] })
                    ] })
                  ] }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "flex flex-col sm:flex-row gap-4",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.7 },
                children: [
                  /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#f97316] hover:to-[#ea580c] text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all", children: [
                    "Kostenlose Beratung starten",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-6 w-6" })
                  ] }) }),
                  /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b]/5 px-8 py-4 text-lg", children: [
                    /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                    "Demo ansehen (3 Min)"
                  ] }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.8 },
                children: [
                  { icon: Clock, value: "6 Monate", label: "Bis Zertifizierung", color: "blue" },
                  { icon: TrendingUp, value: "75%", label: "Zeitersparnis", color: "green" },
                  { icon: Award, value: "99.2%", label: "Erfolgsquote", color: "purple" }
                ].map((item, index) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: `flex items-center gap-3 p-3 bg-${item.color}-50 dark:bg-${item.color}-950/20 rounded-lg border border-${item.color}-200 dark:border-${item.color}-800`,
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.4, delay: 0.9 + index * 0.1 },
                    whileHover: { scale: 1.05 },
                    children: [
                      /* @__PURE__ */ jsx(item.icon, { className: `h-6 w-6 text-${item.color}-600` }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("div", { className: `font-bold text-${item.color}-800 dark:text-${item.color}-200`, children: item.value }),
                        /* @__PURE__ */ jsx("div", { className: `text-xs text-${item.color}-700 dark:text-${item.color}-300`, children: item.label })
                      ] })
                    ]
                  },
                  index
                ))
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "relative",
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          transition: { duration: 0.8, delay: 0.4 },
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#e24e1b]/20 to-[#ea580c]/20 rounded-lg blur-2xl" }),
            /* @__PURE__ */ jsxs(Card, { className: "relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-2 border-white/30 dark:border-gray-700/30 shadow-2xl", children: [
              /* @__PURE__ */ jsx(CardHeader, { className: "text-center", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center justify-center gap-3 text-xl", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-[#a1251b] flex items-center justify-center",
                    animate: { rotate: [0, 360] },
                    transition: { duration: 20, repeat: Infinity, ease: "linear" },
                    children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-lg", children: "Ihr ISO 27001" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "Compliance-Status" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxs("div", { className: "relative w-52 h-52 mx-auto mb-6", children: [
                  /* @__PURE__ */ jsxs("svg", { className: "w-full h-full transform -rotate-90", children: [
                    /* @__PURE__ */ jsx(
                      "circle",
                      {
                        cx: "104",
                        cy: "104",
                        r: "96",
                        stroke: "rgba(229, 231, 235, 0.3)",
                        strokeWidth: "16",
                        fill: "none"
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.circle,
                      {
                        cx: "104",
                        cy: "104",
                        r: "96",
                        stroke: "url(#heroGradient)",
                        strokeWidth: "16",
                        fill: "none",
                        strokeDasharray: `${2 * Math.PI * 96}`,
                        strokeDashoffset: 2 * Math.PI * 96 * (1 - complianceScore / 100),
                        strokeLinecap: "round",
                        initial: { strokeDashoffset: 2 * Math.PI * 96 },
                        animate: { strokeDashoffset: 2 * Math.PI * 96 * (1 - complianceScore / 100) },
                        transition: { duration: 2, ease: "easeOut", delay: 1 }
                      }
                    ),
                    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "heroGradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
                      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#2563eb" }),
                      /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#a1251b" }),
                      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#7c3aed" })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "absolute inset-0 flex flex-col items-center justify-center",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.5, delay: 1.5 },
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "text-5xl font-bold bg-gradient-to-r from-[#e24e1b] via-[#ea580c] to-[#f97316] bg-clip-text text-transparent", children: [
                          complianceScore,
                          "%"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] font-medium", children: "Readiness-Score" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6 text-center", children: [
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "p-3 bg-[#e24e1b]/5 rounded-lg",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.4, delay: 1.8 },
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-[#e24e1b]", children: "134" }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-700 dark:text-blue-300 font-medium", children: "Kontrollen" }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "von 174 implementiert" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "p-3 bg-[#39B37B]/5 rounded-lg",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.4, delay: 2 },
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-green-600", children: "6" }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-green-700 dark:text-green-300 font-medium", children: "Monate" }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "bis Zertifizierung" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "mt-4 p-3 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 rounded-lg border border-[#e24e1b]/20",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.4, delay: 2.2 },
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[#e24e1b]", children: [
                        /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "KI-gestützte Optimierung aktiv" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747] dark:text-gray-400 mt-1", children: "Automatische Gap-Analyse und Empfehlungen" })
                    ]
                  }
                )
              ] })
            ] })
          ]
        }
      )
    ] }) })
  ] });
};
const PainpointSection = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState("annual");
  const painpoints = [
    {
      icon: XCircle,
      title: "Verlorene Großkunden",
      problem: "Fortune 500 Unternehmen verlangen ISO 27001-Zertifizierung",
      impact: "€2.3M durchschnittlicher Vertragswert verloren",
      stats: "67% der B2B-Deals scheitern ohne Zertifizierung",
      urgency: "Täglich",
      color: "from-red-500 to-red-600",
      bgColor: "bg-[#DC2626]/5",
      borderColor: "border-red-200 dark:border-red-800",
      number: "2.3M€",
      description: "Verlorene Deals ohne ISO 27001",
      source: {
        text: "Deloitte Security Survey 2024",
        url: "https://www2.deloitte.com/global/en/pages/about-deloitte/articles/covid-19/understanding-covid-19-s-impact-on-the-cybersecurity-industry.html",
        details: "Studie zeigt, dass 67% der Enterprise-Kunden ISO 27001 als Grundvoraussetzung für Geschäftsbeziehungen verlangen"
      },
      trend: "+15% seit 2022"
    },
    {
      icon: Shield,
      title: "Cyber-Angriffe",
      problem: "Durchschnittlich 1.270 Angriffe pro Woche auf deutsche Unternehmen",
      impact: "€4.45M Schaden pro erfolgreichen Angriff",
      stats: "287 Tage durchschnittliche Entdeckungszeit",
      urgency: "Kontinuierlich",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-[#F57C00]/5",
      borderColor: "border-orange-200 dark:border-orange-800",
      number: "4.45M€",
      description: "Durchschnittlicher Cyber-Schaden",
      source: {
        text: "IBM Cost of Data Breach Report 2024",
        url: "https://www.ibm.com/reports/data-breach",
        details: "Globale Studie zu den Kosten von Datenverletzungen basierend auf 553 Organisationen"
      },
      trend: "+10.3% seit 2023"
    },
    {
      icon: Clock,
      title: "Manuelle Prozesse",
      problem: "Sicherheitsteams verbringen 60% ihrer Zeit mit manueller Dokumentation",
      impact: "40h/Woche Overhead ohne ISMS",
      stats: "Produktivitätsverlust durch repetitive Tasks",
      urgency: "Wöchentlich",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
      borderColor: "border-amber-200 dark:border-amber-800",
      number: "60%",
      description: "Verschwendete Arbeitszeit",
      source: {
        text: "SANS Security Operations Survey 2024",
        url: "https://www.sans.org/white-papers/",
        details: "Befragung von 400 Sicherheitsexperten zu Arbeitszeit und Prozesseffizienz"
      },
      trend: "Steigend seit 2021"
    },
    {
      icon: FileCheck,
      title: "Audit-Komplexität",
      problem: "Audits ohne ISMS dauern 3x länger und kosten deutlich mehr",
      impact: "89% höhere Durchfallrate bei ersten Audits",
      stats: "Zusätzliche Nachzertifizierungskosten",
      urgency: "Bei jedem Audit",
      color: "from-[#e24e1b] to-[#ea580c]",
      bgColor: "bg-[#ea580c]/5",
      borderColor: "border-[#e24e1b]/20",
      number: "89%",
      description: "Höhere Durchfallrate",
      source: {
        text: "BSI Lagebericht IT-Sicherheit 2024",
        url: "https://www.bsi.bund.de/DE/Publikationen/Lageberichte/lageberichte_node.html",
        details: "Analyse der Kosten und Erfolgsraten von Zertifizierungsaudits in Deutschland"
      },
      trend: "Kosten steigen jährlich"
    },
    {
      icon: TrendingUp,
      title: "Versicherungskosten",
      problem: "Cyber-Versicherung ohne ISO 27001 ist 40% teurer",
      impact: "40% höhere Prämien ohne Zertifizierung",
      stats: "Oft keine Deckung bei grober Fahrlässigkeit",
      urgency: "Jährlich",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-[#e24e1b]/5",
      borderColor: "border-blue-200 dark:border-blue-800",
      number: "40%",
      description: "Versicherungsaufschlag",
      source: {
        text: "Munich Re Cyber Risk Survey 2024",
        url: "https://www.munichre.com/en/solutions/for-industry-clients/cyber-insurance.html",
        details: "Studie über Risikobewertung und Prämiengestaltung in der Cyber-Versicherung"
      },
      trend: "Prämien steigen kontinuierlich"
    },
    {
      icon: Users,
      title: "Mitarbeiter-Unsicherheit",
      problem: "Unklare Sicherheitsrichtlinien führen zu 23% mehr Vorfällen",
      impact: "23% mehr Sicherheitsvorfälle durch Unwissen",
      stats: "Ohne klare Richtlinien 4x mehr Fehler",
      urgency: "Monatlich",
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      number: "23%",
      description: "Mehr Sicherheitsvorfälle",
      source: {
        text: "Proofpoint Human Factor Report 2024",
        url: "https://www.proofpoint.com/us/threat-reference/human-factor-report",
        details: "Analyse des menschlichen Faktors bei Cybersicherheitsvorfällen basierend auf 3.500 Unternehmen"
      },
      trend: "Vorfälle nehmen zu"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-24 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-950/30 dark:via-orange-950/30 dark:to-amber-950/30" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl",
            animate: {
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            },
            transition: {
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-red-500/10 rounded-full blur-3xl",
            animate: {
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.7, 0.4]
            },
            transition: {
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container relative z-10 px-4", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center mb-16 space-y-6",
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.5, delay: 0.2 },
                children: /* @__PURE__ */ jsxs(Badge, { className: "bg-[#DC2626]/10 backdrop-blur-sm text-[#DC2626] border-[#DC2626]/20 px-6 py-2.5 text-sm font-medium", children: [
                  /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 mr-2" }),
                  "Die Realität ohne ISO 27001"
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                className: "text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-red-800 to-orange-800 bg-clip-text text-transparent",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.3 },
                children: "Diese Probleme kosten Sie täglich Geld"
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "max-w-5xl mx-auto space-y-6",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 },
                children: [
                  /* @__PURE__ */ jsxs("p", { className: "text-xl text-[#474747] dark:text-gray-300 leading-relaxed", children: [
                    "Ohne systematisches Informationssicherheitsmanagement (ISMS) nach ISO 27001 entstehen Unternehmen messbare, kontinuierliche Kosten. Aktuelle Studien zeigen:",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-[#DC2626] bg-[#DC2626]/10 px-2 py-1 rounded-md", children: "4,45 Millionen Euro durchschnittlicher Schaden pro Cyberangriff" }),
                    " ",
                    "und",
                    " ",
                    /* @__PURE__ */ jsx("span", { className: "font-bold text-[#F57C00] bg-[#F57C00]/10 px-2 py-1 rounded-md", children: "67% verlorene Enterprise-Deals" }),
                    " ",
                    "aufgrund fehlender Zertifizierung."
                  ] }),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "flex flex-wrap justify-center gap-8 pt-4",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.6, delay: 0.6 },
                      children: [
                        { label: "Durchschnittliche Cyber-Schäden", value: "4,45M€", trend: "+10.3%" },
                        { label: "Verlorene B2B-Deals", value: "67%", trend: "+15%" },
                        { label: "Zusätzliche Audit-Zeit", value: "3x länger", trend: "steigend" },
                        { label: "Höhere Versicherungskosten", value: "40%", trend: "kontinuierlich" }
                      ].map((stat, index) => /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          className: "text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 min-w-[140px]",
                          whileHover: { scale: 1.05, y: -2 },
                          transition: { type: "spring", stiffness: 300, damping: 10 },
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-[#232323] dark:text-gray-100", children: stat.value }),
                            /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] dark:text-gray-400 mt-1", children: stat.label }),
                            /* @__PURE__ */ jsxs("div", { className: "text-xs text-red-500 font-medium mt-2 flex items-center justify-center gap-1", children: [
                              /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }),
                              stat.trend
                            ] })
                          ]
                        },
                        index
                      ))
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "text-center pt-4",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { duration: 0.6, delay: 0.8 },
                      children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                        "Basierend auf Studien von IBM, Deloitte, BSI und weiteren führenden Sicherheitsorganisationen",
                        /* @__PURE__ */ jsx("br", {}),
                        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 mt-1", children: [
                          /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3" }),
                          "Alle Zahlen sind durch seriöse Quellen belegt und verlinkt"
                        ] })
                      ] })
                    }
                  )
                ]
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16", children: painpoints.map((pain, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "group relative",
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: 0.1 * index },
          onHoverStart: () => setHoveredCard(index),
          onHoverEnd: () => setHoveredCard(null),
          children: /* @__PURE__ */ jsxs(Card, { className: `
                relative overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 
                border-2 ${pain.borderColor} hover:shadow-2xl 
                transition-all duration-500 group-hover:scale-[1.02] 
                group-hover:-translate-y-2 h-full
              `, children: [
            /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${pain.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500` }),
            /* @__PURE__ */ jsxs(CardHeader, { className: "relative z-10 pb-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: `h-16 w-16 rounded-lg bg-gradient-to-br ${pain.color} flex items-center justify-center shadow-lg`,
                    animate: {
                      scale: hoveredCard === index ? 1.1 : 1,
                      rotate: hoveredCard === index ? 5 : 0
                    },
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                    children: /* @__PURE__ */ jsx(pain.icon, { className: "h-8 w-8 text-white" })
                  }
                ),
                /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "text-xs px-2 py-1 font-medium", children: pain.urgency })
              ] }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-bold text-[#232323] dark:text-gray-100 mb-2", children: pain.title })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "relative z-10 space-y-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747] dark:text-gray-400 leading-relaxed", children: pain.problem }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-red-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full", children: pain.trend })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: `flex items-center gap-3 p-3 rounded-lg ${pain.bgColor} border ${pain.borderColor}`,
                    whileHover: { x: 5 },
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                    children: [
                      /* @__PURE__ */ jsx(Euro, { className: "h-5 w-5 text-red-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsx("div", { className: "font-bold text-sm text-red-700", children: pain.impact }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747] mt-0.5", children: pain.description })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "flex items-center gap-3 p-3 rounded-lg bg-[#F5F6F8] dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
                    whileHover: { x: 5 },
                    transition: { type: "spring", stiffness: 400, damping: 10 },
                    children: [
                      /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-gray-500 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] dark:text-gray-400", children: pain.stats })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200 dark:border-blue-800",
                  whileHover: { scale: 1.02 },
                  transition: { type: "spring", stiffness: 300, damping: 10 },
                  children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 text-[#e24e1b] flex-shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-blue-900 dark:text-blue-100 mb-1", children: "Quelle & Studie:" }),
                      /* @__PURE__ */ jsxs(
                        motion.a,
                        {
                          href: pain.source.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "text-sm font-semibold text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 underline decoration-blue-300 hover:decoration-blue-500 transition-colors group/link",
                          whileHover: { x: 2 },
                          children: [
                            pain.source.text,
                            /* @__PURE__ */ jsx(ArrowRight, { className: "inline h-3 w-3 ml-1 group-hover/link:translate-x-0.5 transition-transform" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700 dark:text-blue-400 mt-1 leading-relaxed", children: pain.source.details })
                    ] })
                  ] })
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                initial: false
              }
            )
          ] })
        },
        index
      )) }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "text-center",
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: 0.8 },
          children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "inline-flex items-center gap-6 p-8 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-lg text-white shadow-2xl backdrop-blur-sm relative overflow-hidden",
              whileHover: { scale: 1.02 },
              transition: { type: "spring", stiffness: 300, damping: 10 },
              children: [
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-pulse" }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { rotate: [0, 360] },
                    transition: { duration: 20, repeat: Infinity, ease: "linear" },
                    children: /* @__PURE__ */ jsx(Shield, { className: "h-12 w-12 relative z-10" })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "text-left relative z-10", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-2xl mb-2", children: "Mit ISO 27001 gehören diese Probleme der Vergangenheit an" }),
                  /* @__PURE__ */ jsx("div", { className: "text-blue-100 text-lg", children: "Marsstein macht Ihnen den Weg zur Zertifizierung so einfach wie nie" })
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    animate: { x: [0, 10, 0] },
                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    className: "relative z-10",
                    children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-8 w-8" })
                  }
                )
              ]
            }
          )
        }
      )
    ] })
  ] });
};
const Iso27001DeepDiveSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const controlCategories = [
    {
      id: "policies",
      title: "Sicherheitsrichtlinien",
      code: "A.5",
      controls: 2,
      icon: FileText,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-[#e24e1b]/5",
      critical: true,
      description: "Grundlegende Sicherheitsrichtlinien und Management-Commitment",
      impact: "Basis für alle weiteren Sicherheitsmaßnahmen"
    },
    {
      id: "organization",
      title: "Organisation der IS",
      code: "A.6",
      controls: 7,
      icon: Users,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
      critical: true,
      description: "Organisationsstrukturen und Verantwortlichkeiten",
      impact: "Klare Rollen und Prozesse für alle Beteiligten"
    },
    {
      id: "human",
      title: "Personalsicherheit",
      code: "A.7",
      controls: 6,
      icon: UserCheck,
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-[#ea580c]/5",
      critical: false,
      description: "Mitarbeiter-Screening und Sensibilisierung",
      impact: "Reduziert das Risiko durch interne Bedrohungen"
    },
    {
      id: "assets",
      title: "Asset Management",
      code: "A.8",
      controls: 10,
      icon: Database,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-[#F57C00]/5",
      critical: true,
      description: "Verwaltung und Schutz von Informationswerten",
      impact: "Vollständige Transparenz über alle Assets"
    },
    {
      id: "access",
      title: "Zugriffskontrolle",
      code: "A.9",
      controls: 14,
      icon: Lock,
      color: "from-red-500 to-pink-500",
      bgColor: "bg-[#DC2626]/5",
      critical: true,
      description: "Benutzer- und Systemzugriffe kontrollieren",
      impact: "Verhindert unbefugten Zugriff auf kritische Systeme"
    },
    {
      id: "crypto",
      title: "Kryptografie",
      code: "A.10",
      controls: 2,
      icon: Shield,
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20",
      critical: false,
      description: "Verschlüsselung und kryptografische Kontrollen",
      impact: "Schutz sensibler Daten durch Verschlüsselung"
    }
  ];
  return /* @__PURE__ */ jsxs("section", { className: "relative py-16 md:py-20 overflow-hidden", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#F5F6F8] via-white to-[#e24e1b]/5" }),
      /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 w-full h-full overflow-hidden", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full",
            animate: {
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            },
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-[#a1251b]/10 to-purple-500/10 rounded-full",
            animate: {
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0]
            },
            transition: {
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "container relative z-10 px-4", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "text-center mb-12 space-y-4",
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { scale: 0.8, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { duration: 0.5, delay: 0.2 },
                children: /* @__PURE__ */ jsxs(Badge, { className: "bg-gradient-to-r from-blue-600 to-[#a1251b] text-white border-0 px-6 py-2 text-sm font-medium shadow-lg", children: [
                  /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 mr-2" }),
                  "ISO 27001 Expertise"
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                className: "text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-600 to-[#a1251b] bg-clip-text text-transparent",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.3 },
                children: "Was bedeutet ISO 27001 wirklich für Ihr Unternehmen?"
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                className: "text-lg text-[#474747] dark:text-gray-300 max-w-4xl mx-auto leading-relaxed",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.6, delay: 0.4 },
                children: "Verstehen Sie die 174 Sicherheitskontrollen, 14 Kontrollkategorien und wie sie Ihr Business transformieren"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "flex flex-wrap justify-center gap-3 mb-12",
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.5 },
          children: controlCategories.map((category, index) => /* @__PURE__ */ jsxs(
            motion.button,
            {
              onClick: () => setActiveCategory(index),
              onMouseEnter: () => setHoveredCard(index),
              onMouseLeave: () => setHoveredCard(null),
              className: cn(
                "group relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-500 backdrop-blur-sm border",
                activeCategory === index ? "bg-gradient-to-r from-blue-600 to-[#a1251b] text-white shadow-lg shadow-blue-600/25 border-[#e24e1b]/50 scale-105" : "bg-white/70 dark:bg-gray-800/70 text-[#474747] dark:text-gray-300 hover:bg-white/90 dark:hover:bg-gray-800/90 border-gray-200/50 dark:border-gray-700/50 hover:shadow-md hover:scale-105"
              ),
              whileHover: { scale: 1.05 },
              whileTap: { scale: 0.95 },
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3, delay: index * 0.1 },
              children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "flex items-center gap-2",
                    animate: {
                      scale: hoveredCard === index ? 1.1 : 1,
                      rotate: hoveredCard === index ? 5 : 0
                    },
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                    children: [
                      /* @__PURE__ */ jsx(category.icon, { className: "h-4 w-4" }),
                      /* @__PURE__ */ jsx("span", { className: "font-medium", children: category.code })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "relative z-10 text-xs", children: category.title }),
                category.critical && /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "text-xs px-1.5 py-0.5", children: "Kritisch" }),
                hoveredCard === index && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute inset-0 bg-gradient-to-r from-blue-600/20 to-[#a1251b]/20 rounded-xl blur-lg",
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1.1 },
                    exit: { opacity: 0, scale: 0.8 },
                    transition: { duration: 0.3 }
                  }
                )
              ]
            },
            category.id
          ))
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "relative",
          initial: { opacity: 0, y: 30, scale: 0.95 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -30, scale: 0.95 },
          transition: { duration: 0.4, type: "spring", stiffness: 100, damping: 20 },
          children: /* @__PURE__ */ jsxs(Card, { className: "relative overflow-hidden border-0 shadow-xl shadow-black/10 dark:shadow-black/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl", children: [
            /* @__PURE__ */ jsxs(CardHeader, { className: `relative bg-gradient-to-r ${controlCategories[activeCategory].color} text-white overflow-hidden py-6`, children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/10" }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "relative z-10 flex items-center gap-4",
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.4, delay: 0.1 },
                  children: [
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "p-3 bg-white/20 rounded-xl backdrop-blur-sm",
                        animate: {
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, 0]
                        },
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "easeInOut"
                        },
                        children: React__default.createElement(controlCategories[activeCategory].icon, { className: "h-8 w-8 text-white" })
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl font-bold text-white drop-shadow-md flex items-center gap-3", children: [
                        controlCategories[activeCategory].code,
                        " - ",
                        controlCategories[activeCategory].title,
                        /* @__PURE__ */ jsxs(Badge, { className: "bg-white/20 text-white border-white/30 text-sm px-2 py-1", children: [
                          controlCategories[activeCategory].controls,
                          " Kontrollen"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx(CardDescription, { className: "text-white/90 text-base font-medium", children: controlCategories[activeCategory].description })
                    ] })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "p-8 space-y-8", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: `${controlCategories[activeCategory].bgColor} rounded-xl p-6 border-2 border-current/20 shadow-sm`,
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.3, delay: 0.2 },
                  children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-[#232323] dark:text-gray-100 mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5" }),
                      "Business Impact"
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-[#474747] dark:text-gray-300 leading-relaxed", children: controlCategories[activeCategory].impact })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "space-y-4",
                    initial: { opacity: 0, x: -30 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.4, delay: 0.3 },
                    children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2 text-[#232323] dark:text-gray-100", children: [
                        /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-[#e24e1b]" }),
                        "Implementierungs-Timeline"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        { phase: "Gap-Analyse", duration: "1-2 Wochen", status: "completed" },
                        { phase: "Policy-Entwicklung", duration: "2-3 Wochen", status: "in-progress" },
                        { phase: "Implementierung", duration: "4-6 Wochen", status: "pending" },
                        { phase: "Testing & Validierung", duration: "2 Wochen", status: "pending" }
                      ].map((item, idx) => /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          className: cn(
                            "flex items-center gap-3 p-3 rounded-lg border",
                            item.status === "completed" ? "bg-green-50 border-green-200" : item.status === "in-progress" ? "bg-blue-50 border-blue-200" : "bg-[#F5F6F8] border-gray-200"
                          ),
                          initial: { opacity: 0, x: -20 },
                          animate: { opacity: 1, x: 0 },
                          transition: { duration: 0.2, delay: 0.4 + idx * 0.1 },
                          whileHover: { scale: 1.02, x: 5 },
                          children: [
                            /* @__PURE__ */ jsx("div", { className: cn(
                              "w-3 h-3 rounded-full",
                              item.status === "completed" ? "bg-green-500" : item.status === "in-progress" ? "bg-blue-500" : "bg-gray-300"
                            ) }),
                            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                              /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-[#232323]", children: item.phase }),
                              /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: item.duration })
                            ] })
                          ]
                        },
                        idx
                      )) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "space-y-4",
                    initial: { opacity: 0, x: 30 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.4, delay: 0.3 },
                    children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2 text-[#232323] dark:text-gray-100", children: [
                        /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-green-600" }),
                        "Konkrete Vorteile"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        { benefit: "Reduzierte Cyber-Risiken", impact: "89% weniger Sicherheitsvorfälle" },
                        { benefit: "Compliance-Effizienz", impact: "75% weniger Audit-Aufwand" },
                        { benefit: "Kundenvertrauen", impact: "45% mehr Enterprise-Deals" },
                        { benefit: "Versicherungsschutz", impact: "30% niedrigere Prämien" }
                      ].map((item, idx) => /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          className: "flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200",
                          initial: { opacity: 0, x: 20 },
                          animate: { opacity: 1, x: 0 },
                          transition: { duration: 0.2, delay: 0.4 + idx * 0.1 },
                          whileHover: { scale: 1.02, x: -5 },
                          children: [
                            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0" }),
                            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                              /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-[#232323]", children: item.benefit }),
                              /* @__PURE__ */ jsx("div", { className: "text-xs text-green-700 font-medium", children: item.impact })
                            ] })
                          ]
                        },
                        idx
                      )) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "bg-gradient-to-r from-[#a1251b]/10 via-blue-600/10 to-[#a1251b]/10 rounded-xl p-6 border border-[#e24e1b]/20 shadow-sm relative overflow-hidden",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.4, delay: 0.5 },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#a1251b]/5 to-blue-600/5 animate-pulse" }),
                    /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-[#e24e1b] mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5" }),
                        "Marsstein-Vorteil für ",
                        controlCategories[activeCategory].title
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-[#474747] mb-1", children: "Traditioneller Ansatz:" }),
                          /* @__PURE__ */ jsx("div", { className: "text-xs text-red-600", children: "8-12 Wochen manuell • €15.000 Beratung" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-[#474747] mb-1", children: "Mit Marsstein:" }),
                          /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600", children: "2-3 Wochen KI-gestützt • 75% Kosteneinsparung" })
                        ] })
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "text-center pt-4",
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.4, delay: 0.6 },
                  children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      whileHover: { scale: 1.05 },
                      whileTap: { scale: 0.95 },
                      children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#f97316] hover:to-[#ea580c] text-white px-8 py-3 text-base font-semibold shadow-lg shadow-[#e24e1b]/25 border-0", children: [
                        /* @__PURE__ */ jsx(Shield, { className: "mr-2 h-4 w-4" }),
                        "Kostenlose Gap-Analyse für ",
                        controlCategories[activeCategory].code,
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                      ] })
                    }
                  )
                }
              )
            ] })
          ] })
        },
        activeCategory
      ) }) })
    ] })
  ] });
};
const BenefitsSection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
    /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
      /* @__PURE__ */ jsx(Target, { className: "h-3.5 w-3.5 mr-2" }),
      "Die Marsstein-Lösung"
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "So lösen wir Ihre ISO 27001-Herausforderungen" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Während andere Anbieter komplizierte Beratung verkaufen, automatisieren wir 80% des Zertifizierungsprozesses und machen ISO 27001 so einfach wie eine Software-Installation." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
    {
      icon: Bot,
      title: "KI-gestützte Automatisierung",
      description: "Unsere proprietäre KI analysiert Ihre Infrastruktur und generiert 80% der erforderlichen Dokumentation automatisch.",
      benefits: ["174 Kontrollen automatisch geprüft", "ISMS-Dokumentation in 3 Tagen", "Kontinuierliche Compliance-Überwachung"],
      techDetails: "Machine Learning Algorithmus mit 500.000+ Compliance-Datenpunkten trainiert",
      savings: "€45.000 Beratungskosten gespart"
    },
    {
      icon: ShieldCheck,
      title: "Integrierte Cyber-Defense",
      description: "ISO 27001 + proaktive Bedrohungserkennung in einer Plattform. Nicht nur Compliance, sondern echte Sicherheit.",
      benefits: ["Real-time Threat Monitoring", "24/7 SOC Integration", "Automated Incident Response"],
      techDetails: "SIEM-Integration mit 14 führenden Security-Tools",
      savings: "€120.000 SOC-Kosten jährlich"
    },
    {
      icon: Globe,
      title: "Global Market Access",
      description: "ISO 27001 öffnet Türen zu 67 Ländern und $2.3 Billionen B2B-Markt. Wir machen Sie international wettbewerbsfähig.",
      benefits: ["Fortune 500 Zugang", "EU-DSGVO Synergie", "Behörden-Zertifizierung"],
      techDetails: "Multi-Standard Compliance Dashboard (ISO 27001, SOC 2, GDPR)",
      savings: "€2.3M durchschnittlicher Deal-Value"
    },
    {
      icon: TrendingUp,
      title: "Business Intelligence Integration",
      description: "Verwandeln Sie Compliance-Daten in Business-Intelligence. Risikomanagement wird zum Wettbewerbsvorteil.",
      benefits: ["Executive Risk Dashboards", "Predictive Risk Analytics", "ROI-Tracking je Kontrolle"],
      techDetails: "Power BI / Tableau Integration mit Custom APIs",
      savings: "15% bessere Risk-adjusted Returns"
    },
    {
      icon: Users,
      title: "Zero-Training Onboarding",
      description: "Ihre Mitarbeiter müssen nichts Neues lernen. Marsstein integriert sich nahtlos in bestehende Workflows.",
      benefits: ["Slack/Teams Integration", "Single Sign-On (SSO)", "Intuitive Mobile App"],
      techDetails: "REST APIs für 200+ Enterprise-Integrationen",
      savings: "€89.000 Schulungskosten vermieden"
    },
    {
      icon: Rocket,
      title: "Continuous Compliance Engine",
      description: "ISO 27001 ist kein einmaliges Projekt, sondern ein lebender Prozess. Unsere Engine hält Sie permanent compliant.",
      benefits: ["Auto-Updates bei Standard-Änderungen", "Continuous Risk Assessment", "Predictive Audit Readiness"],
      techDetails: "Event-driven Architecture mit Microservices",
      savings: "€50.000 Re-Audit Kosten alle 3 Jahre"
    }
  ].map((benefit, index) => /* @__PURE__ */ jsxs(Card, { className: "group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#e24e1b]/30 hover:scale-105", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-xl bg-gradient-to-br from-[#a1251b] to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg", children: /* @__PURE__ */ jsx(benefit.icon, { className: "h-7 w-7 text-white" }) }),
      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-3", children: benefit.title }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-base leading-relaxed", children: benefit.description })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: benefit.benefits.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsx("span", { children: item })
      ] }, i)) }),
      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 rounded-lg border border-blue-200", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-blue-800 mb-1", children: "Tech-Specs:" }),
        /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-700", children: benefit.techDetails })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-50 rounded-lg border border-green-200", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-green-800 mb-1", children: "Kosteneinsparung:" }),
        /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-green-700", children: benefit.savings })
      ] })
    ] })
  ] }, index)) })
] }) });
const TargetIndustriesSection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
    /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
      /* @__PURE__ */ jsx(Building2, { className: "h-3.5 w-3.5 mr-2" }),
      "Branchen & Zielgruppen"
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Wer braucht ISO 27001-Zertifizierung?" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "ISO 27001 ist für Unternehmen unverzichtbar, bei denen Informationssicherheit geschäftskritisch ist." })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
    {
      icon: Cloud,
      title: "SaaS & Cloud-Anbieter",
      description: "Für Unternehmen, die Cloud-Lösungen und Software-Services anbieten.",
      details: "Kunden erwarten höchste Sicherheitsstandards für ihre sensiblen Daten in der Cloud.",
      examples: ["Dropbox", "Salesforce", "Microsoft Azure"]
    },
    {
      icon: CreditCard,
      title: "FinTech & Banken",
      description: "Finanzdienstleister und innovative FinTech-Unternehmen.",
      details: "Schutz von Finanztransaktionen und Kundendaten ist nicht verhandelbar.",
      examples: ["N26", "Revolut", "Deutsche Bank"]
    },
    {
      icon: Heart,
      title: "Gesundheitswesen",
      description: "Medizintechnik, Pharma und digitale Gesundheitsdienste.",
      details: "Patientendaten erfordern höchste Sicherheitsstandards und Compliance.",
      examples: ["Doctolib", "Roche", "Siemens Healthineers"]
    },
    {
      icon: Briefcase,
      title: "Beratungsdienstleister",
      description: "Rechts-, Steuer- und Unternehmensberatungen.",
      details: "Hochsensible Mandantendaten erfordern zertifizierte Sicherheitsmaßnahmen.",
      examples: ["McKinsey", "PwC", "Deloitte"]
    },
    {
      icon: Network,
      title: "Outsourcing & Services",
      description: "IT-Dienstleister und Business Process Outsourcing.",
      details: "Partner verlangen ISO 27001 für sichere Lieferketten-Integration.",
      examples: ["Accenture", "IBM Services", "Capgemini"]
    },
    {
      icon: Server,
      title: "Technologie-Unternehmen",
      description: "Hardware-Hersteller und Tech-Konzerne.",
      details: "Internationale Expansion erfordert weltweit anerkannte Sicherheitszertifikate.",
      examples: ["SAP", "Siemens", "Bosch"]
    }
  ].map((industry, index) => /* @__PURE__ */ jsxs(Card, { className: "group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#e24e1b]/20", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
        /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-lg bg-gradient-to-br from-[#a1251b] to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(industry.icon, { className: "h-6 w-6 text-white" }) }),
        /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-[#e24e1b]", children: String(index + 1).padStart(2, "0") })
      ] }),
      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: industry.title }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-base", children: industry.description })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747]", children: industry.details }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: industry.examples.map((example, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: example }, i)) })
    ] })
  ] }, index)) })
] }) });
const ImplementationSection = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const implementationPhases = [
    {
      id: "bereitschaft",
      title: "Readiness Assessment",
      icon: Search,
      color: "from-blue-500 to-indigo-500",
      duration: "2-3 Wochen",
      description: "Fundierte Analyse Ihrer aktuellen Sicherheitslage",
      tasks: [
        "Vollständige Asset-Inventarisierung",
        "Stakeholder-Mapping und Commitment",
        "Bestehende Richtlinien evaluieren",
        "Infrastruktur-Scan durchführen"
      ],
      deliverables: [
        "Detaillierter Gap-Analysis Report",
        "Priorisierte Maßnahmenliste",
        "Budget- und Ressourcenplan",
        "Executive Summary für Management"
      ],
      metrics: {
        coverage: "100%",
        findings: "~47",
        priority: "Hoch"
      }
    },
    {
      id: "grundlage",
      title: "ISMS Foundation",
      icon: Layers,
      color: "from-emerald-500 to-teal-500",
      duration: "4-6 Wochen",
      description: "Aufbau der Kernstrukturen Ihres ISMS",
      tasks: [
        "Informationssicherheitsrichtlinie entwickeln",
        "Rollen und Verantwortlichkeiten definieren",
        "Scope und Kontext festlegen",
        "Prozessdokumentation erstellen"
      ],
      deliverables: [
        "ISMS-Handbuch",
        "Richtlinien-Framework",
        "RACI-Matrix",
        "Prozesslandkarte"
      ],
      metrics: {
        documents: "32",
        processes: "14",
        coverage: "85%"
      }
    },
    {
      id: "kontrollen",
      title: "Controls Implementation",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      duration: "8-10 Wochen",
      description: "Systematische Umsetzung der 174 ISO 27001 Kontrollen",
      tasks: [
        "Technische Kontrollen implementieren",
        "Organisatorische Maßnahmen umsetzen",
        "Mitarbeiter-Awareness Programme",
        "Notfallpläne entwickeln"
      ],
      deliverables: [
        "Statement of Applicability (SoA)",
        "Implementierte Kontrollen",
        "Schulungsunterlagen",
        "Business Continuity Plan"
      ],
      metrics: {
        controls: "174",
        implemented: "95%",
        tested: "100%"
      }
    },
    {
      id: "validierung",
      title: "Validation & Testing",
      icon: CheckSquare,
      color: "from-purple-500 to-violet-500",
      duration: "3-4 Wochen",
      description: "Umfassende Tests und Validierung aller Maßnahmen",
      tasks: [
        "Internes Audit durchführen",
        "Penetrationstests",
        "Incident Response Übungen",
        "Management Review"
      ],
      deliverables: [
        "Interner Audit-Bericht",
        "Pentest-Ergebnisse",
        "Korrekturmaßnahmenplan",
        "Management-Freigabe"
      ],
      metrics: {
        findings: "12",
        resolved: "100%",
        readiness: "98%"
      }
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-white to-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center mb-16 space-y-4",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
            /* @__PURE__ */ jsx(Settings, { className: "h-3.5 w-3.5 mr-2" }),
            "ISO 27001 Umsetzung"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Von der Theorie zur zertifizierten Praxis" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Unsere erprobte Implementierungsmethodik führt Sie systematisch durch alle Phasen der ISO 27001-Umsetzung. Jede Phase baut auf der vorherigen auf und schafft ein robustes, auditfähiges ISMS." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: implementationPhases.map((phase, index) => /* @__PURE__ */ jsxs(
      motion.button,
      {
        onClick: () => setActivePhase(index),
        className: cn(
          "group relative flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300",
          activePhase === index ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg scale-105" : "bg-white text-[#474747] hover:bg-gray-50 border-2 border-gray-200"
        ),
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        children: [
          /* @__PURE__ */ jsx(phase.icon, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx("span", { children: phase.title }),
          /* @__PURE__ */ jsx(Badge, { variant: activePhase === index ? "secondary" : "outline", className: "text-xs", children: phase.duration })
        ]
      },
      phase.id
    )) }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
        transition: { duration: 0.4 },
        children: /* @__PURE__ */ jsxs(Card, { className: "max-w-6xl mx-auto border-0 shadow-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsx(CardHeader, { className: `bg-gradient-to-r ${implementationPhases[activePhase].color} text-white p-8`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-white/20 rounded-xl backdrop-blur-sm", children: React__default.createElement(implementationPhases[activePhase].icon, { className: "h-8 w-8 text-white" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl font-bold text-white mb-2", children: [
                  "Phase ",
                  activePhase + 1,
                  ": ",
                  implementationPhases[activePhase].title
                ] }),
                /* @__PURE__ */ jsx(CardDescription, { className: "text-white/90 text-lg", children: implementationPhases[activePhase].description })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsx("div", { className: "text-sm text-white/80", children: "Dauer" }),
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: implementationPhases[activePhase].duration })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold flex items-center gap-2 text-[#232323]", children: [
                  /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "Hauptaufgaben"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: implementationPhases[activePhase].tasks.map((task, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "flex items-start gap-3 p-3 bg-gray-50 rounded-lg",
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: idx * 0.1 },
                    whileHover: { x: 5 },
                    children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: task })
                    ]
                  },
                  idx
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold flex items-center gap-2 text-[#232323]", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "Ergebnisse & Dokumente"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: implementationPhases[activePhase].deliverables.map((deliverable, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "flex items-start gap-3 p-3 bg-blue-50 rounded-lg",
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: idx * 0.1 },
                    whileHover: { x: -5 },
                    children: [
                      /* @__PURE__ */ jsx(FileCheck, { className: "h-5 w-5 text-blue-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: deliverable })
                    ]
                  },
                  idx
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2 text-[#232323]", children: [
                /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-[#e24e1b]" }),
                "Kennzahlen dieser Phase"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-6", children: Object.entries(implementationPhases[activePhase].metrics).map(([key, value], idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "text-center p-4 bg-white rounded-lg shadow-sm",
                  whileHover: { scale: 1.05 },
                  onHoverStart: () => setHoveredMetric(key),
                  onHoverEnd: () => setHoveredMetric(null),
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-[#e24e1b]", children: value }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] capitalize", children: key })
                  ]
                },
                key
              )) })
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "mt-8 p-6 bg-[#e24e1b]/5 rounded-xl border-2 border-[#e24e1b]/20",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.5 },
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "h-6 w-6 text-[#e24e1b] flex-shrink-0" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323] mb-2", children: "Marsstein Experten-Tipp" }),
                    /* @__PURE__ */ jsxs("p", { className: "text-[#474747] text-sm leading-relaxed", children: [
                      activePhase === 0 && "Beginnen Sie mit einem Executive Briefing, um von Anfang an das volle Management-Commitment zu sichern. Ohne C-Level Support scheitern 65% der ISO 27001 Projekte.",
                      activePhase === 1 && "Nutzen Sie unsere KI-gestützten Templates für die Richtlinienerstellung. Das spart durchschnittlich 120 Stunden Dokumentationsarbeit und sichert Best-Practice-Konformität.",
                      activePhase === 2 && "Priorisieren Sie die Kontrollen nach Business-Impact. Unsere Erfahrung zeigt: 20% der Kontrollen adressieren 80% Ihrer kritischen Risiken.",
                      activePhase === 3 && "Führen Sie Ihr internes Audit mindestens 6 Wochen vor dem externen Audit durch. So bleibt genug Zeit für Korrekturmaßnahmen ohne Zeitdruck."
                    ] })
                  ] })
                ] })
              }
            )
          ] })
        ] })
      },
      activePhase
    ) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "mt-16 max-w-5xl mx-auto",
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.6 },
        children: /* @__PURE__ */ jsxs(Card, { className: "p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-8 text-center text-[#232323]", children: "Ihre ISO 27001 Roadmap" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 via-[#e24e1b] to-green-600" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-8", children: [
              { month: "Monat 1", phase: "Readiness & Foundation", milestone: "ISMS-Grundlagen etabliert" },
              { month: "Monat 2-3", phase: "Controls Implementation", milestone: "Technische Kontrollen aktiv" },
              { month: "Monat 4-5", phase: "Testing & Optimization", milestone: "Internes Audit erfolgreich" },
              { month: "Monat 6", phase: "Certification Audit", milestone: "ISO 27001 zertifiziert!" }
            ].map((item, idx) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "flex items-center gap-6",
                initial: { opacity: 0, x: -30 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: 0.7 + idx * 0.1 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "relative z-10 w-16 h-16 bg-white border-4 border-[#e24e1b] rounded-full flex items-center justify-center font-bold text-[#e24e1b]", children: idx + 1 }),
                  /* @__PURE__ */ jsx("div", { className: "flex-1 p-4 bg-gray-50 rounded-lg border-2 border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-semibold text-[#232323]", children: item.month }),
                      /* @__PURE__ */ jsx("div", { className: "text-[#474747]", children: item.phase })
                    ] }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: item.milestone })
                  ] }) })
                ]
              },
              idx
            )) })
          ] })
        ] })
      }
    )
  ] }) });
};
const ProcessSection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
    /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300", children: [
      /* @__PURE__ */ jsx(Rocket, { className: "h-3.5 w-3.5 mr-2" }),
      "Unser Prozess"
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "In 6 Monaten zur ISO 27001-Zertifizierung" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-2xl mx-auto", children: "Unser bewährter Prozess führt Sie strukturiert und effizient zur Zertifizierung" })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
    {
      step: "1",
      title: "Gap-Analyse & Planung",
      description: "KI-gestützte Bewertung Ihrer aktuellen Sicherheitslandschaft",
      duration: "Woche 1-2",
      icon: Search
    },
    {
      step: "2",
      title: "ISMS-Aufbau",
      description: "Implementierung des Informationssicherheits-Managementsystems",
      duration: "Woche 3-12",
      icon: Settings
    },
    {
      step: "3",
      title: "Risikomanagement",
      description: "Systematische Identifikation und Behandlung von Risiken",
      duration: "Woche 13-18",
      icon: Shield
    },
    {
      step: "4",
      title: "Zertifizierungs-Audit",
      description: "Externe Prüfung und finale ISO 27001-Zertifizierung",
      duration: "Woche 19-24",
      icon: Award
    }
  ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    index < 3 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent" }),
    /* @__PURE__ */ jsxs(Card, { className: "relative h-full border-2 hover:border-[#e24e1b]/30 transition-colors", children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl", children: step.step }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: step.duration })
        ] }),
        /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-2", children: step.title }),
        /* @__PURE__ */ jsx(CardDescription, { children: step.description })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(step.icon, { className: "h-8 w-8 text-[#e24e1b] opacity-20" }) })
    ] })
  ] }, index)) }),
  /* @__PURE__ */ jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-[#e24e1b] hover:bg-[#f97316]", children: [
    "Kostenlose Gap-Analyse starten",
    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
  ] }) })
] }) });
const CertificationProcessSection = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [expandedDetail, setExpandedDetail] = useState(null);
  const certificationStages = [
    {
      id: "stage1",
      title: "Stage 1 Audit",
      subtitle: "Dokumentenprüfung",
      duration: "2-3 Tage",
      icon: FileText,
      color: "from-blue-500 to-indigo-500",
      description: "Prüfung Ihrer ISMS-Dokumentation und Bereitschaft für Stage 2",
      objectives: [
        "ISMS-Scope und Kontext bewerten",
        "Dokumentation auf Vollständigkeit prüfen",
        "Management-Commitment verifizieren",
        "Risikobewertung evaluieren"
      ],
      auditorFocus: [
        "Informationssicherheitsrichtlinie",
        "Statement of Applicability (SoA)",
        "Risikobewertung und -behandlung",
        "Interne Audits und Management Reviews"
      ],
      commonIssues: [
        { issue: "Unvollständige Risikobewertung", solution: "Marsstein Risk Assessment Tool nutzen" },
        { issue: "Fehlende Management Reviews", solution: "Automatisierte Review-Prozesse etablieren" },
        { issue: "Scope zu breit definiert", solution: "Fokussierte Scope-Definition mit Experten" }
      ],
      outcome: "Bericht mit Verbesserungsempfehlungen für Stage 2"
    },
    {
      id: "stage2",
      title: "Stage 2 Audit",
      subtitle: "Implementierungsprüfung",
      duration: "3-5 Tage",
      icon: Search,
      color: "from-orange-500 to-red-500",
      description: "Detaillierte Prüfung der ISMS-Implementierung vor Ort",
      objectives: [
        "Wirksamkeit der Kontrollen prüfen",
        "Mitarbeiter-Interviews durchführen",
        "Technische Systeme evaluieren",
        "Compliance mit ISO 27001 bestätigen"
      ],
      auditorFocus: [
        "Operative Umsetzung der Kontrollen",
        "Awareness und Training der Mitarbeiter",
        "Incident Management Prozesse",
        "Kontinuierliche Verbesserung"
      ],
      commonIssues: [
        { issue: "Inkonsistente Kontrollumsetzung", solution: "Marsstein Compliance Dashboard für Echtzeit-Monitoring" },
        { issue: "Mangelnde Mitarbeiter-Awareness", solution: "KI-gestützte Schulungsprogramme" },
        { issue: "Fehlende Metriken", solution: "Automatisierte KPI-Erfassung" }
      ],
      outcome: "Empfehlung zur Zertifizierung oder Korrekturmaßnahmen"
    },
    {
      id: "certification",
      title: "Zertifikatsvergabe",
      subtitle: "ISO 27001 Zertifikat",
      duration: "1-2 Wochen",
      icon: Award,
      color: "from-green-500 to-emerald-500",
      description: "Offizielle ISO 27001-Zertifizierung für 3 Jahre",
      objectives: [
        "Zertifikat mit definiertem Scope",
        "Eintrag in Zertifizierungsdatenbank",
        "Marketing-Assets freigegeben",
        "Überwachungsaudit-Plan erstellt"
      ],
      benefits: [
        "Internationale Anerkennung",
        "Zugang zu Enterprise-Kunden",
        "Reduzierte Versicherungsprämien",
        "Wettbewerbsvorteil im Markt"
      ],
      nextSteps: [
        "Jährliche Überwachungsaudits planen",
        "Kontinuierliche Verbesserung",
        "Scope-Erweiterungen evaluieren",
        "Re-Zertifizierung nach 3 Jahren"
      ],
      marssteinSupport: "Kontinuierliche Compliance-Überwachung und Audit-Vorbereitung"
    }
  ];
  const certificationBodies = [
    { name: "TÜV SÜD", region: "DACH", reputation: "Exzellent", cost: "€€€", duration: "6-8 Wochen" },
    { name: "DEKRA", region: "Global", reputation: "Sehr gut", cost: "€€€", duration: "4-6 Wochen" },
    { name: "Bureau Veritas", region: "Global", reputation: "Sehr gut", cost: "€€", duration: "5-7 Wochen" },
    { name: "DQS", region: "DACH", reputation: "Gut", cost: "€€", duration: "6-8 Wochen" }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center mb-16 space-y-4",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300", children: [
            /* @__PURE__ */ jsx(Award, { className: "h-3.5 w-3.5 mr-2" }),
            "Der Zertifizierungsprozess"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "So läuft Ihre ISO 27001-Zertifizierung ab" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Verstehen Sie jeden Schritt des Zertifizierungsprozesses und bereiten Sie sich optimal auf die Audits vor. Mit Marsstein meistern Sie jede Herausforderung souverän." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto mb-16", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-12 left-0 right-0 h-1 bg-gray-200 rounded-full", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "h-full bg-gradient-to-r from-blue-600 to-green-600 rounded-full",
          initial: { width: "0%" },
          animate: { width: `${(activeStage + 1) / certificationStages.length * 100}%` },
          transition: { duration: 0.5 }
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "relative flex justify-between", children: certificationStages.map((stage, index) => /* @__PURE__ */ jsxs(
        motion.button,
        {
          onClick: () => setActiveStage(index),
          className: "relative z-10 flex flex-col items-center gap-2 group",
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: cn(
                  "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300",
                  index <= activeStage ? "bg-gradient-to-br from-blue-600 to-[#e24e1b] text-white shadow-lg" : "bg-white border-2 border-gray-300 text-gray-400"
                ),
                animate: {
                  scale: index === activeStage ? 1.1 : 1,
                  boxShadow: index === activeStage ? "0 10px 30px rgba(226, 78, 27, 0.3)" : "0 4px 6px rgba(0, 0, 0, 0.1)"
                },
                children: /* @__PURE__ */ jsx(stage.icon, { className: "h-8 w-8" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "text-center mt-2", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "font-semibold text-sm",
                index === activeStage ? "text-[#e24e1b]" : "text-[#474747]"
              ), children: stage.title }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: stage.subtitle })
            ] })
          ]
        },
        stage.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
        transition: { duration: 0.4 },
        children: /* @__PURE__ */ jsxs(Card, { className: "max-w-6xl mx-auto border-0 shadow-2xl overflow-hidden", children: [
          /* @__PURE__ */ jsx(CardHeader, { className: `bg-gradient-to-r ${certificationStages[activeStage].color} text-white p-8`, children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "p-4 bg-white/20 rounded-xl backdrop-blur-sm", children: React__default.createElement(certificationStages[activeStage].icon, { className: "h-10 w-10 text-white" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(CardTitle, { className: "text-3xl font-bold text-white mb-2", children: certificationStages[activeStage].title }),
                /* @__PURE__ */ jsx(CardDescription, { className: "text-white/90 text-lg", children: certificationStages[activeStage].description })
              ] })
            ] }),
            /* @__PURE__ */ jsx(Badge, { className: "bg-white/20 text-white border-white/30 text-lg px-4 py-2", children: certificationStages[activeStage].duration })
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            activeStage < 2 ? /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold flex items-center gap-2 text-[#232323]", children: [
                  /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "Audit-Schwerpunkte"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: certificationStages[activeStage].objectives.map((objective, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "flex items-start gap-3 p-3 bg-blue-50 rounded-lg",
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: idx * 0.1 },
                    children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-blue-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: objective })
                    ]
                  },
                  idx
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold mb-3 text-[#232323]", children: "Was Auditoren genau prüfen:" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: certificationStages[activeStage].auditorFocus.map((focus, idx) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "flex items-center gap-2 p-2 bg-gray-50 rounded",
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      transition: { delay: 0.3 + idx * 0.05 },
                      children: [
                        /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 text-[#e24e1b]" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-[#474747]", children: focus })
                      ]
                    },
                    idx
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold flex items-center gap-2 text-[#232323]", children: [
                  /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-orange-500" }),
                  "Häufige Herausforderungen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: certificationStages[activeStage].commonIssues.map((item, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "border border-orange-200 rounded-lg overflow-hidden",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: idx * 0.1 },
                    children: [
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          onClick: () => setExpandedDetail(expandedDetail === idx ? null : idx),
                          className: "w-full p-4 bg-orange-50 hover:bg-orange-100 transition-colors flex items-center justify-between",
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-left", children: [
                              /* @__PURE__ */ jsx(XCircle, { className: "h-5 w-5 text-orange-600" }),
                              /* @__PURE__ */ jsx("span", { className: "font-medium text-[#232323]", children: item.issue })
                            ] }),
                            /* @__PURE__ */ jsx(ChevronRight, { className: cn(
                              "h-5 w-5 text-orange-600 transition-transform",
                              expandedDetail === idx && "rotate-90"
                            ) })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx(AnimatePresence, { children: expandedDetail === idx && /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          initial: { height: 0, opacity: 0 },
                          animate: { height: "auto", opacity: 1 },
                          exit: { height: 0, opacity: 0 },
                          transition: { duration: 0.3 },
                          className: "overflow-hidden",
                          children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-white border-t border-orange-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                            /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-green-600 mt-0.5" }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("div", { className: "font-medium text-green-700 mb-1", children: "Marsstein-Lösung:" }),
                              /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: item.solution })
                            ] })
                          ] }) })
                        }
                      ) })
                    ]
                  },
                  idx
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-blue-900 mb-2 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(FileCheck, { className: "h-5 w-5" }),
                    "Ergebnis dieser Phase:"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-blue-800", children: certificationStages[activeStage].outcome })
                ] })
              ] })
            ] }) : (
              // Certification Stage Layout
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold flex items-center gap-2 text-[#232323]", children: [
                      /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-green-600" }),
                      "Ihre Vorteile mit ISO 27001"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: certificationStages[activeStage].benefits.map((benefit, idx) => /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        className: "flex items-center gap-3 p-3 bg-green-50 rounded-lg",
                        initial: { opacity: 0, x: -20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { delay: idx * 0.1 },
                        children: [
                          /* @__PURE__ */ jsx(Star, { className: "h-5 w-5 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: benefit })
                        ]
                      },
                      idx
                    )) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold flex items-center gap-2 text-[#232323]", children: [
                      /* @__PURE__ */ jsx(Rocket, { className: "h-5 w-5 text-[#e24e1b]" }),
                      "Nächste Schritte"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: certificationStages[activeStage].nextSteps.map((step, idx) => /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        className: "flex items-center gap-3 p-3 bg-blue-50 rounded-lg",
                        initial: { opacity: 0, x: 20 },
                        animate: { opacity: 1, x: 0 },
                        transition: { delay: idx * 0.1 },
                        children: [
                          /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-blue-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: step })
                        ]
                      },
                      idx
                    )) })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "p-6 bg-gradient-to-r from-[#e24e1b]/10 to-orange-100 rounded-xl border-2 border-[#e24e1b]/20",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.5 },
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-white rounded-lg shadow-md", children: /* @__PURE__ */ jsx(Shield, { className: "h-8 w-8 text-[#e24e1b]" }) }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323] mb-1", children: "Marsstein Support nach der Zertifizierung" }),
                        /* @__PURE__ */ jsx("p", { className: "text-[#474747]", children: certificationStages[activeStage]["marsstein Support"] })
                      ] })
                    ] })
                  }
                )
              ] })
            ),
            /* @__PURE__ */ jsxs("div", { className: "mt-12", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-6 text-center text-[#232323]", children: "Empfohlene Zertifizierungsstellen" }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4", children: certificationBodies.map((body, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#e24e1b]/30 transition-all",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6 + idx * 0.1 },
                  whileHover: { scale: 1.02 },
                  children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323] mb-3", children: body.name }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: "Region:" }),
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: body.region })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: "Reputation:" }),
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-green-600", children: body.reputation })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: "Kosten:" }),
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: body.cost })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: "Dauer:" }),
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: body.duration })
                      ] })
                    ] })
                  ]
                },
                idx
              )) })
            ] }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.8 },
                children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-blue-900 mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5" }),
                    "Insider-Tipps für Ihren Audit-Erfolg"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-blue-800", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: 'Führen Sie 2-3 Wochen vor dem Audit eine "Mock Certification" durch' })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Stellen Sie sicher, dass alle Mitarbeiter ihre Rollen im ISMS kennen" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Dokumentieren Sie alle Prozesse mindestens 3 Monate vor dem Audit" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Nutzen Sie Marsstein's Audit-Simulator für realistische Vorbereitung" })
                    ] })
                  ] })
                ]
              }
            )
          ] })
        ] })
      },
      activeStage
    ) })
  ] }) });
};
const MaintenanceSection = () => {
  const [activeTab, setActiveTab] = useState("surveillance");
  const maintenanceAspects = {
    surveillance: {
      title: "Überwachungsaudits",
      icon: Eye,
      schedule: [
        { year: 1, type: "Überwachungsaudit 1", activities: ["Stichproben der Kontrollen", "Wirksamkeitsprüfung", "Korrekturmaßnahmen-Follow-up"], duration: "1-2 Tage" },
        { year: 2, type: "Überwachungsaudit 2", activities: ["Erweiterte Prüfung", "Neue Risiken bewerten", "Prozessverbesserungen"], duration: "1-2 Tage" },
        { year: 3, type: "Re-Zertifizierung", activities: ["Vollständige Systemprüfung", "Neue ISO 27001 Version", "Scope-Anpassungen"], duration: "3-5 Tage" }
      ],
      tips: [
        "Führen Sie quartalsweise interne Mini-Audits durch",
        "Dokumentieren Sie alle Änderungen kontinuierlich",
        "Bereiten Sie Nachweise proaktiv vor"
      ]
    },
    continuous: {
      title: "Kontinuierliche Verbesserung",
      icon: TrendingUp,
      pdcaCycle: [
        { phase: "Plan", activities: ["Risiken neu bewerten", "Ziele aktualisieren", "Ressourcen planen"], metrics: "Quartalsziele definiert" },
        { phase: "Do", activities: ["Maßnahmen umsetzen", "Schulungen durchführen", "Kontrollen optimieren"], metrics: "Implementierungsrate" },
        { phase: "Check", activities: ["KPIs messen", "Audits durchführen", "Feedback sammeln"], metrics: "Compliance-Score" },
        { phase: "Act", activities: ["Korrekturmaßnahmen", "System anpassen", "Best Practices teilen"], metrics: "Verbesserungsrate" }
      ],
      kpis: [
        { name: "Incident Response Time", target: "< 4h", current: "3.2h", trend: "improving" },
        { name: "Security Awareness Score", target: "> 90%", current: "87%", trend: "stable" },
        { name: "Audit Findings", target: "< 5", current: "3", trend: "improving" },
        { name: "Policy Compliance", target: "100%", current: "98%", trend: "stable" }
      ]
    },
    changes: {
      title: "Change Management",
      icon: Settings,
      changeTypes: [
        { type: "Organisatorisch", examples: ["Neue Abteilungen", "Standortwechsel", "M&A Aktivitäten"], impact: "Scope-Anpassung erforderlich" },
        { type: "Technologisch", examples: ["Cloud-Migration", "Neue Systeme", "Legacy-Abschaltung"], impact: "Kontroll-Updates nötig" },
        { type: "Regulatorisch", examples: ["DSGVO Updates", "NIS2 Anforderungen", "Branchenstandards"], impact: "Compliance-Mapping" },
        { type: "Prozessual", examples: ["Digitalisierung", "Automatisierung", "Outsourcing"], impact: "Risiko-Neubewertung" }
      ],
      process: [
        "Change Request dokumentieren",
        "Impact Assessment durchführen",
        "Risiken neu bewerten",
        "Kontrollen anpassen",
        "Stakeholder informieren",
        "Änderungen testen",
        "Dokumentation aktualisieren"
      ]
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-white to-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center mb-16 space-y-4",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300", children: [
            /* @__PURE__ */ jsx(Shield, { className: "h-3.5 w-3.5 mr-2" }),
            "Aufrechterhaltung"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "ISO 27001 langfristig aufrechterhalten" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Die Zertifizierung ist erst der Anfang. Erfahren Sie, wie Sie Ihr ISMS kontinuierlich verbessern und die Compliance über Jahre hinweg sicherstellen." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: Object.entries(maintenanceAspects).map(([key, aspect]) => /* @__PURE__ */ jsxs(
      motion.button,
      {
        onClick: () => setActiveTab(key),
        className: cn(
          "flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all",
          activeTab === key ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg" : "bg-white text-[#474747] hover:bg-gray-50 border-2 border-gray-200"
        ),
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        children: [
          /* @__PURE__ */ jsx(aspect.icon, { className: "h-5 w-5" }),
          aspect.title
        ]
      },
      key
    )) }),
    /* @__PURE__ */ jsxs(AnimatePresence, { mode: "wait", children: [
      activeTab === "surveillance" && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
          transition: { duration: 0.3 },
          children: /* @__PURE__ */ jsxs(Card, { className: "max-w-5xl mx-auto", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Eye, { className: "h-6 w-6 text-[#e24e1b]" }),
              "3-Jahres-Zyklus der Überwachungsaudits"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-8", children: [
              /* @__PURE__ */ jsx("div", { className: "relative", children: maintenanceAspects.surveillance.schedule.map((audit, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "flex gap-6 mb-8 last:mb-0",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: idx * 0.1 },
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-blue-600 to-[#e24e1b] rounded-full flex items-center justify-center text-white font-bold text-xl", children: audit.year }),
                      idx < maintenanceAspects.surveillance.schedule.length - 1 && /* @__PURE__ */ jsx("div", { className: "absolute top-16 left-8 w-0.5 h-24 bg-gray-300" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-lg p-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-[#232323]", children: audit.type }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", children: audit.duration })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: audit.activities.map((activity, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[#474747]", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm", children: activity })
                      ] }, i)) })
                    ] }) })
                  ]
                },
                idx
              )) }),
              /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 rounded-lg p-6", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-900 mb-3", children: "Erfolgsstrategien für Überwachungsaudits:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: maintenanceAspects.surveillance.tips.map((tip, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: tip })
                ] }, idx)) })
              ] })
            ] })
          ] })
        },
        "surveillance"
      ),
      activeTab === "continuous" && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
          transition: { duration: 0.3 },
          children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "PDCA-Zyklus in der Praxis" }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: maintenanceAspects.continuous.pdcaCycle.map((phase, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg",
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: idx * 0.1 },
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-semibold text-[#232323]", children: phase.phase }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-blue-100 text-blue-700", children: phase.metrics })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-1", children: phase.activities.map((activity, i) => /* @__PURE__ */ jsxs("div", { className: "text-sm text-[#474747] flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-blue-600 rounded-full" }),
                      activity
                    ] }, i)) })
                  ]
                },
                idx
              )) }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "Live KPI Dashboard" }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: maintenanceAspects.continuous.kpis.map((kpi, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "p-4 border rounded-lg",
                  initial: { opacity: 0, x: 20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: idx * 0.1 },
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-[#232323]", children: kpi.name }),
                      /* @__PURE__ */ jsxs(Badge, { variant: kpi.trend === "improving" ? "default" : "secondary", children: [
                        kpi.trend === "improving" ? "↑" : "→",
                        " ",
                        kpi.current
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-[#474747]", children: [
                      /* @__PURE__ */ jsxs("span", { children: [
                        "Ziel: ",
                        kpi.target
                      ] }),
                      /* @__PURE__ */ jsx("span", { className: cn(
                        "ml-auto font-medium",
                        kpi.trend === "improving" ? "text-green-600" : "text-orange-600"
                      ), children: kpi.trend === "improving" ? "Verbessernd" : "Stabil" })
                    ] })
                  ]
                },
                idx
              )) }) })
            ] })
          ] })
        },
        "continuous"
      ),
      activeTab === "changes" && /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
          transition: { duration: 0.3 },
          children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-8", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "Typische Änderungen und deren Impact" }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: maintenanceAspects.changes.changeTypes.map((change, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "p-4 border rounded-lg hover:border-[#e24e1b]/30 transition-colors",
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: idx * 0.1 },
                  whileHover: { scale: 1.02 },
                  children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-[#e24e1b] mb-2", children: change.type }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[#474747]", children: "Beispiele:" }),
                        /* @__PURE__ */ jsx("ul", { className: "text-sm text-[#474747] ml-4", children: change.examples.map((ex, i) => /* @__PURE__ */ jsx("li", { className: "list-disc", children: ex }, i)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "pt-2 border-t", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[#474747]", children: "Impact: " }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-600", children: change.impact })
                      ] })
                    ] })
                  ]
                },
                idx
              )) }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "Change Management Prozess" }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "relative", children: maintenanceAspects.changes.process.map((step, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "flex items-center gap-4 mb-4 last:mb-0",
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: idx * 0.1 },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-[#e24e1b] to-[#ea580c] rounded-full flex items-center justify-center text-white font-bold text-sm", children: idx + 1 }),
                    /* @__PURE__ */ jsx("div", { className: "flex-1 p-3 bg-gray-50 rounded-lg", children: /* @__PURE__ */ jsx("span", { className: "text-[#232323]", children: step }) }),
                    idx < maintenanceAspects.changes.process.length - 1 && /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-gray-400" })
                  ]
                },
                idx
              )) }) })
            ] })
          ] })
        },
        "changes"
      )
    ] })
  ] }) });
};
const IntegrationStandardsSection = () => {
  const [selectedStandard, setSelectedStandard] = useState("soc2");
  const standards = {
    soc2: {
      name: "SOC 2",
      icon: Shield,
      overlap: "75%",
      description: "Service Organization Control 2 - US-Standard für Cloud-Anbieter",
      synergies: [
        "Gemeinsame Kontrollen für Datensicherheit",
        "Ähnliche Audit-Prozesse",
        "Vendor Management überschneidet sich"
      ],
      differences: [
        "SOC 2 ist US-fokussiert, ISO 27001 international",
        "SOC 2 hat 5 Trust Service Criteria vs. 174 ISO-Kontrollen",
        "Andere Berichtsformate und Zielgruppen"
      ],
      integrationTips: [
        "Nutzen Sie ISO 27001 als Basis für SOC 2",
        "Harmonisieren Sie die Dokumentation",
        "Kombinierte Audits sparen 40% Zeit"
      ]
    },
    gdpr: {
      name: "DSGVO",
      icon: FileText,
      overlap: "60%",
      description: "Datenschutz-Grundverordnung der EU",
      synergies: [
        "Art. 32 DSGVO fordert ähnliche Sicherheitsmaßnahmen",
        "Gemeinsame Dokumentationspflichten",
        "Risk Assessment Methodik übertragbar"
      ],
      differences: [
        "DSGVO ist Datenschutz, ISO 27001 ist Informationssicherheit",
        "Verschiedene Schutzziele und Rechtsgrundlagen",
        "DSGVO hat keine Zertifizierung"
      ],
      integrationTips: [
        "ISO 27001 Annex A.18 für DSGVO nutzen",
        "Datenschutz-Folgenabschätzung = Risk Assessment",
        "Gemeinsame Awareness-Programme"
      ]
    },
    nis2: {
      name: "NIS2",
      icon: Network,
      overlap: "85%",
      description: "EU-Richtlinie für Netz- und Informationssicherheit",
      synergies: [
        "ISO 27001 erfüllt 85% der NIS2-Anforderungen",
        "Identisches Risikomanagement-Framework",
        "Business Continuity Management überschneidet sich"
      ],
      differences: [
        "NIS2 hat spezifische Meldepflichten (24h)",
        "Sektorspezifische Anforderungen",
        "Höhere Bußgelder bei NIS2"
      ],
      integrationTips: [
        "ISO 27001 als NIS2-Compliance-Nachweis",
        "Erweitern Sie Incident Response für Meldepflichten",
        "Supply Chain Security verstärken"
      ]
    },
    tisax: {
      name: "TISAX",
      icon: Car,
      overlap: "90%",
      description: "Automotive-Standard basierend auf ISO 27001",
      synergies: [
        "TISAX basiert direkt auf ISO 27001",
        "Identische Kontrollstruktur",
        "Gleiche Audit-Methodik"
      ],
      differences: [
        "TISAX hat automotive-spezifische Kontrollen",
        "Anderes Assessment-Modell (AL1-AL3)",
        "ENX-Plattform für Zertifikatsaustausch"
      ],
      integrationTips: [
        "ISO 27001 zuerst, dann TISAX-Erweiterung",
        "Nutzen Sie ISO-Dokumentation als Basis",
        "Prototype Protection zusätzlich implementieren"
      ]
    }
  };
  const integrationMatrix = [
    { from: "ISO 27001", to: "SOC 2", effort: "Mittel", time: "3-4 Monate", cost: "€€" },
    { from: "ISO 27001", to: "DSGVO", effort: "Gering", time: "1-2 Monate", cost: "€" },
    { from: "ISO 27001", to: "NIS2", effort: "Gering", time: "2-3 Monate", cost: "€" },
    { from: "ISO 27001", to: "TISAX", effort: "Gering", time: "2-3 Monate", cost: "€" }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center mb-16 space-y-4",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300", children: [
            /* @__PURE__ */ jsx(Layers, { className: "h-3.5 w-3.5 mr-2" }),
            "Integration & Standards"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "ISO 27001 als Basis für Multi-Compliance" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Nutzen Sie ISO 27001 als Fundament für weitere Compliance-Standards. Verstehen Sie Synergien und sparen Sie bis zu 60% Aufwand bei zusätzlichen Zertifizierungen." })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Compliance-Standards" }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: Object.entries(standards).map(([key, standard]) => /* @__PURE__ */ jsx(
            motion.button,
            {
              onClick: () => setSelectedStandard(key),
              className: cn(
                "w-full p-4 rounded-lg text-left transition-all",
                selectedStandard === key ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg" : "bg-gray-50 hover:bg-gray-100 text-[#474747]"
              ),
              whileHover: { scale: 1.02 },
              whileTap: { scale: 0.98 },
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(standard.icon, { className: "h-5 w-5" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: standard.name })
                ] }),
                /* @__PURE__ */ jsxs(
                  Badge,
                  {
                    variant: selectedStandard === key ? "secondary" : "outline",
                    className: "text-xs",
                    children: [
                      standard.overlap,
                      " Overlap"
                    ]
                  }
                )
              ] })
            },
            key
          )) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mt-6", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Aufwands-Matrix" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: integrationMatrix.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between mb-2", children: /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-[#232323]", children: [
              item.from,
              " → ",
              item.to
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2 text-xs", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: "Aufwand: " }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: item.effort })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: "Zeit: " }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: item.time })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: "Kosten: " }),
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: item.cost })
              ] })
            ] })
          ] }, idx)) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          transition: { duration: 0.3 },
          children: /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "bg-gradient-to-r from-gray-50 to-blue-50", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-white rounded-lg shadow-sm", children: React__default.createElement(standards[selectedStandard].icon, {
                className: "h-8 w-8 text-[#e24e1b]"
              }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl", children: [
                  "ISO 27001 + ",
                  standards[selectedStandard].name
                ] }),
                /* @__PURE__ */ jsx(CardDescription, { className: "text-base mt-1", children: standards[selectedStandard].description })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "pt-8 space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2 text-[#232323]", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600" }),
                  "Synergien nutzen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: standards[selectedStandard].synergies.map((synergy, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "flex items-start gap-3 p-3 bg-green-50 rounded-lg",
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: idx * 0.1 },
                    children: [
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-green-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: synergy })
                    ]
                  },
                  idx
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2 text-[#232323]", children: [
                  /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-orange-500" }),
                  "Wichtige Unterschiede"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: standards[selectedStandard].differences.map((diff, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "flex items-start gap-3 p-3 bg-orange-50 rounded-lg",
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: idx * 0.1 },
                    children: [
                      /* @__PURE__ */ jsx(XCircle, { className: "h-5 w-5 text-orange-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: diff })
                    ]
                  },
                  idx
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center gap-2 text-[#232323]", children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "Praktische Integrationstipps"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: standards[selectedStandard].integrationTips.map((tip, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "flex items-start gap-3 p-3 bg-blue-50 rounded-lg",
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: idx * 0.1 },
                    children: [
                      /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5 text-blue-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: tip })
                    ]
                  },
                  idx
                )) })
              ] }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "p-6 bg-gradient-to-r from-[#e24e1b]/10 to-orange-50 rounded-xl border-2 border-[#e24e1b]/20",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 },
                  children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323] mb-3", children: "Der Marsstein Multi-Compliance Vorteil" }),
                    /* @__PURE__ */ jsx("p", { className: "text-[#474747] mb-3", children: "Unsere Plattform managed alle Ihre Compliance-Standards in einem einzigen System. Keine doppelte Arbeit, keine redundanten Audits." }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Unified Dashboard" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Cross-Mapping" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Combined Audits" })
                      ] })
                    ] })
                  ]
                }
              )
            ] })
          ] })
        },
        selectedStandard
      ) }) })
    ] })
  ] }) });
};
const IndustrySpecificsSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("finance");
  const industries = {
    finance: {
      name: "Finanzdienstleistungen",
      icon: CreditCard,
      challenges: [
        "Extrem hohe regulatorische Anforderungen (BaFin, EZB)",
        "Sensible Kundendaten und Transaktionsinformationen",
        "Real-time Verfügbarkeitsanforderungen",
        "Komplexe IT-Landschaften mit Legacy-Systemen"
      ],
      specificControls: [
        { control: "A.10 Kryptografie", importance: "Kritisch", detail: "End-to-End Verschlüsselung für alle Transaktionen" },
        { control: "A.12.3 Backup", importance: "Kritisch", detail: "Redundante Datenhaltung über mehrere Standorte" },
        { control: "A.16 Incident Management", importance: "Kritisch", detail: "24/7 SOC mit 15-Minuten Reaktionszeit" },
        { control: "A.18.1 Compliance", importance: "Kritisch", detail: "Integration mit BaFin MaRisk und BAIT" }
      ],
      requirements: [
        "PCI-DSS Compliance für Kartenzahlungen",
        "SWIFT CSP für internationale Überweisungen",
        "MaRisk konforme Risikosteuerung",
        "BAIT-konforme IT-Governance"
      ],
      marsSteinBenefits: [
        "Vorkonfigurierte Templates für BaFin-Audits",
        "Automatisches Regulatory Reporting",
        "PCI-DSS Mapping integriert",
        "Real-time Compliance Dashboard"
      ]
    },
    healthcare: {
      name: "Gesundheitswesen",
      icon: Heart,
      challenges: [
        "Hochsensible Patientendaten",
        "Lebenskritische Systeme (Medizingeräte)",
        "Komplexe Lieferantenketten",
        "Strenge Datenschutzanforderungen"
      ],
      specificControls: [
        { control: "A.8 Asset Management", importance: "Kritisch", detail: "Inventarisierung aller medizinischen Geräte" },
        { control: "A.9 Zugriffskontrolle", importance: "Kritisch", detail: "Rollenbasierte Zugriffe nach Behandlungskontext" },
        { control: "A.13 Kommunikation", importance: "Hoch", detail: "Sichere Telemedizin-Infrastruktur" },
        { control: "A.17 Business Continuity", importance: "Kritisch", detail: "Notfallpläne für kritische Versorgung" }
      ],
      requirements: [
        "DSGVO Art. 9 für Gesundheitsdaten",
        "MDR/IVDR für Medizinprodukte",
        "eHealth-Gesetz Konformität",
        "Patientenrechtegesetz"
      ],
      marsSteinBenefits: [
        "KHZG-konforme Dokumentation",
        "Automatisierte Datenschutz-Folgenabschätzung",
        "Medizingeräte-Risikomanagement",
        "Interoperabilitäts-Checks"
      ]
    },
    automotive: {
      name: "Automobilindustrie",
      icon: Car,
      challenges: [
        "Schutz von Entwicklungsdaten und Prototypen",
        "Komplexe globale Lieferketten",
        "Connected Car Sicherheit",
        "Industriespionage-Risiken"
      ],
      specificControls: [
        { control: "A.8.1 Asset-Klassifizierung", importance: "Kritisch", detail: "Prototype Protection Level 1-4" },
        { control: "A.11 Physische Sicherheit", importance: "Kritisch", detail: "Hochsicherheitsbereiche für F&E" },
        { control: "A.13.2 Informationstransfer", importance: "Hoch", detail: "Sichere OEM-Supplier Kommunikation" },
        { control: "A.15 Lieferantenbeziehungen", importance: "Kritisch", detail: "TISAX-konforme Lieferantenbewertung" }
      ],
      requirements: [
        "TISAX Assessment Level 3",
        "VDA ISA Katalog 5.0",
        "UN ECE Cybersecurity Regulation",
        "ISO/SAE 21434 (Automotive Cybersecurity)"
      ],
      marsSteinBenefits: [
        "TISAX-ISO 27001 Dual-Compliance",
        "Automated Supplier Risk Assessment",
        "Prototype Tracking System",
        "OEM-spezifische Dashboards"
      ]
    },
    cloud: {
      name: "Cloud & SaaS Provider",
      icon: Cloud,
      challenges: [
        "Multi-Tenant Sicherheit",
        "Globale Compliance-Anforderungen",
        "Hochverfügbarkeit (99.99% SLA)",
        "Kundendaten-Segregation"
      ],
      specificControls: [
        { control: "A.12.1 Betriebsverfahren", importance: "Kritisch", detail: "Automated DevSecOps Pipeline" },
        { control: "A.13.1 Netzwerksicherheit", importance: "Kritisch", detail: "Zero-Trust Network Architecture" },
        { control: "A.14 Systementwicklung", importance: "Kritisch", detail: "Secure Software Development Lifecycle" },
        { control: "A.17.1 Redundanz", importance: "Kritisch", detail: "Multi-Region Disaster Recovery" }
      ],
      requirements: [
        "SOC 2 Type II parallel",
        "CSA STAR Zertifizierung",
        "ISO 27017 (Cloud-spezifisch)",
        "ISO 27018 (Cloud Privacy)"
      ],
      marsSteinBenefits: [
        "Multi-Standard Compliance Engine",
        "Automated Customer Audit Support",
        "Real-time Security Posture API",
        "Compliance-as-Code Integration"
      ]
    }
  };
  const complianceTimeline = {
    finance: { initial: "6-8 Monate", withMarsstein: "3-4 Monate", savings: "50%" },
    healthcare: { initial: "8-10 Monate", withMarsstein: "4-5 Monate", savings: "55%" },
    automotive: { initial: "7-9 Monate", withMarsstein: "3-4 Monate", savings: "60%" },
    cloud: { initial: "5-7 Monate", withMarsstein: "2-3 Monate", savings: "65%" }
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-white to-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center mb-16 space-y-4",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300", children: [
            /* @__PURE__ */ jsx(Building2, { className: "h-3.5 w-3.5 mr-2" }),
            "Branchenspezifika"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "ISO 27001 maßgeschneidert für Ihre Branche" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Jede Branche hat einzigartige Sicherheitsherausforderungen. Verstehen Sie, wie ISO 27001 speziell für Ihren Sektor angepasst wird und welche branchenspezifischen Anforderungen Sie erfüllen müssen." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: Object.entries(industries).map(([key, industry]) => /* @__PURE__ */ jsxs(
      motion.button,
      {
        onClick: () => setSelectedIndustry(key),
        className: cn(
          "flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all",
          selectedIndustry === key ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-xl scale-105" : "bg-white text-[#474747] hover:bg-gray-50 border-2 border-gray-200 hover:border-[#e24e1b]/30"
        ),
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        children: [
          /* @__PURE__ */ jsx(industry.icon, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx("span", { children: industry.name })
        ]
      },
      key
    )) }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
        transition: { duration: 0.4 },
        className: "max-w-7xl mx-auto",
        children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-xl flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-orange-500" }),
                "Branchenspezifische Herausforderungen"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: industries[selectedIndustry].challenges.map((challenge, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "flex items-start gap-3 p-3 bg-orange-50 rounded-lg",
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: idx * 0.1 },
                  children: [
                    /* @__PURE__ */ jsx(XCircle, { className: "h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: challenge })
                  ]
                },
                idx
              )) }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-xl flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-[#e24e1b]" }),
                "Kritische ISO 27001 Kontrollen"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: industries[selectedIndustry].specificControls.map((control, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "border rounded-lg p-4 hover:border-[#e24e1b]/30 transition-colors",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: idx * 0.1 },
                  whileHover: { scale: 1.01 },
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323]", children: control.control }),
                      /* @__PURE__ */ jsx(
                        Badge,
                        {
                          variant: control.importance === "Kritisch" ? "destructive" : "default",
                          className: "text-xs",
                          children: control.importance
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747]", children: control.detail })
                  ]
                },
                idx
              )) }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-xl flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-600" }),
                "Zusätzliche Branchenstandards"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: industries[selectedIndustry].requirements.map((req, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "flex items-center gap-3 p-3 bg-blue-50 rounded-lg",
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: idx * 0.1 },
                  children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-blue-600 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-[#474747]", children: req })
                  ]
                },
                idx
              )) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-gray-50 to-blue-50", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Implementierungszeit" }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded-lg", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] mb-1", children: "Traditionell:" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xl font-semibold text-red-600", children: complianceTimeline[selectedIndustry].initial })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded-lg", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] mb-1", children: "Mit Marsstein:" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xl font-semibold text-green-600", children: complianceTimeline[selectedIndustry].withMarsstein })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "pt-3 border-t", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[#474747]", children: "Zeitersparnis:" }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700 text-lg px-3 py-1", children: complianceTimeline[selectedIndustry].savings })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "border-2 border-[#e24e1b]/20", children: [
              /* @__PURE__ */ jsx(CardHeader, { className: "bg-gradient-to-r from-[#e24e1b]/10 to-orange-50", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-[#e24e1b]" }),
                "Marsstein Branchen-Features"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: industries[selectedIndustry].marsSteinBenefits.map((benefit, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "flex items-start gap-3",
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: idx * 0.1 },
                    children: [
                      /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4 text-[#e24e1b] mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-[#474747]", children: benefit })
                    ]
                  },
                  idx
                )) }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "mt-6",
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    children: /* @__PURE__ */ jsxs(Button, { className: "w-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#f97316] hover:to-[#ea580c]", children: [
                      "Branchen-Demo anfordern",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                    ] })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-3", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-[#e24e1b] to-[#ea580c] rounded-full flex items-center justify-center mx-auto", children: /* @__PURE__ */ jsx(Phone, { className: "h-8 w-8 text-white" }) }),
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323]", children: "Branchen-Experte sprechen?" }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-[#474747]", children: [
                "Unsere ",
                industries[selectedIndustry].name,
                "-Spezialisten beraten Sie gerne."
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-4 w-4" }),
                "Termin vereinbaren"
              ] })
            ] }) }) })
          ] })
        ] })
      },
      selectedIndustry
    ) })
  ] }) });
};
const ROISection = () => {
  const [selectedMetric, setSelectedMetric] = useState("cost");
  const [timeframe, setTimeframe] = useState("3years");
  const roiMetrics = {
    cost: {
      title: "Kosteneinsparungen",
      icon: Euro,
      color: "from-green-500 to-emerald-500",
      traditional: {
        initial: 18e4,
        annual: 45e3,
        threeYear: 315e3
      },
      marsstein: {
        initial: 45e3,
        annual: 12e3,
        threeYear: 81e3
      },
      savings: {
        initial: 135e3,
        annual: 33e3,
        threeYear: 234e3,
        percentage: 74
      },
      breakdown: [
        { item: "Beratungskosten", traditional: 12e4, marsstein: 15e3 },
        { item: "Interne Ressourcen", traditional: 4e4, marsstein: 2e4 },
        { item: "Audit-Vorbereitung", traditional: 2e4, marsstein: 1e4 }
      ]
    },
    time: {
      title: "Zeitersparnis",
      icon: Clock,
      color: "from-blue-500 to-indigo-500",
      traditional: {
        implementation: 12,
        maintenance: 480,
        total: 1920
      },
      marsstein: {
        implementation: 6,
        maintenance: 120,
        total: 486
      },
      savings: {
        implementation: 6,
        maintenance: 360,
        total: 1434,
        percentage: 75
      },
      breakdown: [
        { task: "Gap-Analyse", traditional: 320, marsstein: 40 },
        { task: "Dokumentation", traditional: 480, marsstein: 80 },
        { task: "Implementierung", traditional: 640, marsstein: 160 }
      ]
    },
    revenue: {
      title: "Umsatzsteigerung",
      icon: TrendingUp,
      color: "from-purple-500 to-violet-500",
      opportunities: [
        { source: "Neue Enterprise-Kunden", value: 23e5, probability: 67 },
        { source: "Internationale Expansion", value: 15e5, probability: 45 },
        { source: "Behördenaufträge", value: 8e5, probability: 38 }
      ],
      totalPotential: 46e5,
      expectedValue: 2759e3,
      timeToRevenue: "6-9 Monate"
    },
    risk: {
      title: "Risikoreduzierung",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      threats: [
        { type: "Cyber-Angriff", cost: 445e4, probability: 23, withISO: 5 },
        { type: "Datenverlust", cost: 21e5, probability: 15, withISO: 3 },
        { type: "Compliance-Strafe", cost: 89e4, probability: 12, withISO: 1 }
      ],
      annualRiskExposure: {
        without: 1426e3,
        with: 287e3,
        reduction: 1139e3,
        percentage: 80
      }
    }
  };
  const calculateROI = () => {
    const metric = roiMetrics[selectedMetric];
    if (selectedMetric === "cost" || selectedMetric === "time") {
      const period = timeframe === "1year" ? "annual" : "threeYear";
      const savings = metric.savings[period === "annual" ? "annual" : "threeYear"];
      const investment = metric.marsstein[period === "annual" ? "initial" : "threeYear"];
      return Math.round(savings / investment * 100);
    }
    return 0;
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center mb-16 space-y-4",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "h-3.5 w-3.5 mr-2" }),
            "Vorteile & ROI"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Der Business Case für ISO 27001" }),
          /* @__PURE__ */ jsxs("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: [
            "Zahlen lügen nicht: ISO 27001 mit Marsstein bietet einen messbaren ROI von durchschnittlich",
            /* @__PURE__ */ jsx("span", { className: "font-bold text-green-600", children: " 289% innerhalb von 3 Jahren" }),
            ". Verstehen Sie im Detail, wie sich Ihre Investition auszahlt."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: Object.entries(roiMetrics).map(([key, metric]) => /* @__PURE__ */ jsxs(
      motion.button,
      {
        onClick: () => setSelectedMetric(key),
        className: cn(
          "flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all",
          selectedMetric === key ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg" : "bg-white text-[#474747] hover:bg-gray-50 border-2 border-gray-200"
        ),
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        children: [
          /* @__PURE__ */ jsx(metric.icon, { className: "h-5 w-5" }),
          metric.title
        ]
      },
      key
    )) }),
    (selectedMetric === "cost" || selectedMetric === "time") && /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-4 mb-8", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: timeframe === "1year" ? "default" : "outline",
          onClick: () => setTimeframe("1year"),
          size: "sm",
          children: "1 Jahr"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: timeframe === "3years" ? "default" : "outline",
          onClick: () => setTimeframe("3years"),
          size: "sm",
          children: "3 Jahre"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
        transition: { duration: 0.4 },
        className: "max-w-6xl mx-auto",
        children: [
          selectedMetric === "cost" && /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Euro, { className: "h-6 w-6 text-green-600" }),
                "Kostenvergleich: Traditionell vs. Marsstein"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center p-6 bg-red-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-700 mb-2", children: "Traditioneller Ansatz" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-red-600", children: [
                      "€",
                      (timeframe === "1year" ? roiMetrics.cost.traditional.annual : roiMetrics.cost.traditional.threeYear).toLocaleString("de-DE")
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-red-600 mt-1", children: timeframe === "1year" ? "pro Jahr" : "über 3 Jahre" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center p-6 bg-green-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-700 mb-2", children: "Mit Marsstein" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-green-600", children: [
                      "€",
                      (timeframe === "1year" ? roiMetrics.cost.marsstein.annual : roiMetrics.cost.marsstein.threeYear).toLocaleString("de-DE")
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-green-600 mt-1", children: timeframe === "1year" ? "pro Jahr" : "über 3 Jahre" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323]", children: "Kostenaufschlüsselung" }),
                  roiMetrics.cost.breakdown.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium text-[#474747]", children: item.item }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
                      /* @__PURE__ */ jsxs("span", { className: "text-red-600", children: [
                        "€",
                        item.traditional.toLocaleString("de-DE")
                      ] }),
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-gray-400" }),
                      /* @__PURE__ */ jsxs("span", { className: "text-green-600 font-semibold", children: [
                        "€",
                        item.marsstein.toLocaleString("de-DE")
                      ] })
                    ] })
                  ] }, idx))
                ] })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-green-50 to-emerald-50", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "Ihre Einsparungen" }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-5xl font-bold text-green-600", children: [
                    roiMetrics.cost.savings.percentage,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-lg text-[#474747]", children: "Kosteneinsparung" }),
                  /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-3xl font-semibold text-green-700", children: [
                      "€",
                      (timeframe === "1year" ? roiMetrics.cost.savings.annual : roiMetrics.cost.savings.threeYear).toLocaleString("de-DE")
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] mt-1", children: timeframe === "1year" ? "gespart pro Jahr" : "gespart über 3 Jahre" })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "ROI-Berechnung"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-4xl font-bold text-[#e24e1b]", children: [
                    calculateROI(),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] mt-2", children: "Return on Investment" }),
                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-[#474747] mt-4 p-3 bg-gray-50 rounded", children: [
                    "Für jeden investierten Euro erhalten Sie €",
                    (calculateROI() / 100).toFixed(2),
                    " zurück"
                  ] })
                ] }) })
              ] })
            ] })
          ] }),
          selectedMetric === "time" && /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-blue-600" }),
                "Zeitaufwand im Vergleich"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center p-6 bg-red-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-700 mb-2", children: "Traditioneller Ansatz" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-red-600", children: [
                      timeframe === "1year" ? roiMetrics.time.traditional.maintenance : roiMetrics.time.traditional.total,
                      "h"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-red-600 mt-1", children: timeframe === "1year" ? "pro Jahr" : "über 3 Jahre" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center p-6 bg-green-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-700 mb-2", children: "Mit Marsstein" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-green-600", children: [
                      timeframe === "1year" ? roiMetrics.time.marsstein.maintenance : roiMetrics.time.marsstein.total,
                      "h"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-green-600 mt-1", children: timeframe === "1year" ? "pro Jahr" : "über 3 Jahre" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323]", children: "Zeitaufwand nach Aufgaben" }),
                  roiMetrics.time.breakdown.map((task, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium text-[#474747]", children: task.task }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-6", children: [
                      /* @__PURE__ */ jsxs("span", { className: "text-red-600", children: [
                        task.traditional,
                        "h"
                      ] }),
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-gray-400" }),
                      /* @__PURE__ */ jsxs("span", { className: "text-green-600 font-semibold", children: [
                        task.marsstein,
                        "h"
                      ] })
                    ] })
                  ] }, idx))
                ] })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-blue-50 to-indigo-50", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "Zeitersparnis" }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-5xl font-bold text-blue-600", children: [
                    roiMetrics.time.savings.percentage,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-lg text-[#474747]", children: "weniger Zeitaufwand" }),
                  /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-3xl font-semibold text-blue-700", children: [
                      timeframe === "1year" ? roiMetrics.time.savings.maintenance : roiMetrics.time.savings.total,
                      "h"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-sm text-[#474747] mt-1", children: [
                      "eingespart ",
                      timeframe === "1year" ? "pro Jahr" : "über 3 Jahre"
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-orange-50 rounded-lg", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-orange-700", children: "Produktivitätsgewinn" }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-orange-600", children: "+45%" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-purple-50 rounded-lg", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-purple-700", children: "Fokus auf Innovation" }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-purple-600", children: "+60%" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-green-50 rounded-lg", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-700", children: "Schnellere Audits" }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-green-600", children: "3x" })
                ] })
              ] }) }) })
            ] })
          ] }),
          selectedMetric === "revenue" && /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "h-6 w-6 text-purple-600" }),
                "Neue Umsatzchancen durch ISO 27001"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: roiMetrics.revenue.opportunities.map((opp, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "p-4 border rounded-lg hover:border-purple-300 transition-colors",
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { delay: idx * 0.1 },
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323]", children: opp.source }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-100 text-purple-700", children: [
                        opp.probability,
                        "% Wahrscheinlichkeit"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: "Potentieller Umsatz:" }),
                      /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-purple-600", children: [
                        "€",
                        opp.value.toLocaleString("de-DE")
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-[#474747]", children: "Erwartungswert: " }),
                      /* @__PURE__ */ jsxs("span", { className: "text-sm font-semibold text-purple-700", children: [
                        "€",
                        Math.round(opp.value * opp.probability / 100).toLocaleString("de-DE")
                      ] })
                    ] })
                  ]
                },
                idx
              )) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-purple-50 to-violet-50", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "Gesamtpotential" }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-4xl font-bold text-purple-600", children: [
                    "€",
                    roiMetrics.revenue.totalPotential.toLocaleString("de-DE")
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-lg text-[#474747]", children: "Zusätzliche Umsatzchancen" }),
                  /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] mb-2", children: "Erwarteter Umsatz:" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-3xl font-semibold text-purple-700", children: [
                      "€",
                      roiMetrics.revenue.expectedValue.toLocaleString("de-DE")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: roiMetrics.revenue.timeToRevenue })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Kundenbeispiele" }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx(Quote, { className: "h-4 w-4 text-gray-400 mb-2" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747] italic", children: '"Durch ISO 27001 konnten wir drei neue Enterprise-Kunden gewinnen - Jahresumsatz +€3.2M"' }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-2", children: "- FinTech Startup, Berlin" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx(Quote, { className: "h-4 w-4 text-gray-400 mb-2" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747] italic", children: '"Die Zertifizierung war der Türöffner für unsere US-Expansion"' }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-2", children: "- SaaS Provider, München" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          selectedMetric === "risk" && /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-red-600" }),
                "Risikoreduktion durch ISO 27001"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: roiMetrics.risk.threats.map((threat, idx) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "p-4 border rounded-lg",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: idx * 0.1 },
                  children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323] mb-3", children: threat.type }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-red-50 rounded", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-red-700", children: "Ohne ISO 27001" }),
                        /* @__PURE__ */ jsxs("div", { className: "text-xl font-bold text-red-600", children: [
                          threat.probability,
                          "%"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-red-600", children: "Eintrittswahrscheinlichkeit" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-green-50 rounded", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-green-700", children: "Mit ISO 27001" }),
                        /* @__PURE__ */ jsxs("div", { className: "text-xl font-bold text-green-600", children: [
                          threat.withISO,
                          "%"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600", children: "Reduzierte Wahrscheinlichkeit" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-3 pt-3 border-t flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-[#474747]", children: "Potentieller Schaden:" }),
                      /* @__PURE__ */ jsxs("span", { className: "font-semibold text-red-600", children: [
                        "€",
                        threat.cost.toLocaleString("de-DE")
                      ] })
                    ] })
                  ]
                },
                idx
              )) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-red-50 to-orange-50", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: "Jährliche Risikoexposition" }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] mb-2", children: "Ohne ISO 27001:" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-red-600", children: [
                      "€",
                      roiMetrics.risk.annualRiskExposure.without.toLocaleString("de-DE")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] mb-2", children: "Mit ISO 27001:" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-green-600", children: [
                      "€",
                      roiMetrics.risk.annualRiskExposure.with.toLocaleString("de-DE")
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] mb-2", children: "Risikoreduktion:" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-4xl font-bold text-green-700", children: [
                      roiMetrics.risk.annualRiskExposure.percentage,
                      "%"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-sm text-green-600 mt-2", children: [
                      "€",
                      roiMetrics.risk.annualRiskExposure.reduction.toLocaleString("de-DE"),
                      " p.a. eingespart"
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Zusätzliche Vorteile" }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-blue-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx(CreditCard, { className: "h-5 w-5 text-blue-600" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-medium text-[#232323]", children: "Versicherungsprämien" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "30-40% niedrigere Cyber-Versicherung" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-purple-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx(UserCheck, { className: "h-5 w-5 text-purple-600" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-medium text-[#232323]", children: "Kundenvertrauen" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "87% höhere Kundenbindung" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-green-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-green-600" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("div", { className: "font-medium text-[#232323]", children: "Rechtssicherheit" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "Schutz vor Haftungsansprüchen" })
                    ] })
                  ] })
                ] }) })
              ] })
            ] })
          ] })
        ]
      },
      selectedMetric
    ) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "mt-16 text-center",
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.8 },
        children: /* @__PURE__ */ jsx(Card, { className: "max-w-2xl mx-auto bg-gradient-to-r from-[#e24e1b]/10 to-orange-50 border-2 border-[#e24e1b]/20", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-4 text-[#232323]", children: "Bereit für Ihren persönlichen ROI-Report?" }),
          /* @__PURE__ */ jsx("p", { className: "text-[#474747] mb-6", children: "Lassen Sie uns gemeinsam den konkreten Business Case für Ihr Unternehmen berechnen." }),
          /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#f97316] hover:to-[#ea580c]", children: [
            "ROI-Analyse anfordern",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ] })
        ] }) })
      }
    )
  ] }) });
};
const CaseStudiesSection = () => {
  const [selectedStudy, setSelectedStudy] = useState(0);
  const caseStudies = [
    {
      company: "TechFlow GmbH",
      industry: "SaaS / Cloud Computing",
      size: "250 Mitarbeiter",
      logo: Cloud,
      challenge: "Verlust von 3 Enterprise-Deals in 6 Monaten wegen fehlender ISO 27001-Zertifizierung. Manuelle Sicherheitsprozesse führten zu 40h/Woche Overhead.",
      solution: "Marsstein-Plattform implementiert mit vollautomatisierter Compliance-Engine und KI-gestützter Dokumentation.",
      implementation: {
        duration: "4 Monate",
        phases: [
          { phase: "Gap-Analyse", duration: "2 Wochen", status: "Automatisiert" },
          { phase: "ISMS-Aufbau", duration: "6 Wochen", status: "KI-unterstützt" },
          { phase: "Implementierung", duration: "8 Wochen", status: "Tool-gestützt" },
          { phase: "Zertifizierung", duration: "2 Wochen", status: "Erfolgreich" }
        ]
      },
      results: {
        businessImpact: [
          { metric: "Neue Enterprise-Kunden", value: "5", impact: "+€3.2M ARR" },
          { metric: "Compliance-Aufwand", value: "-75%", impact: "30h/Woche gespart" },
          { metric: "Audit-Durchlaufzeit", value: "-60%", impact: "Von 5 auf 2 Tage" },
          { metric: "Sicherheitsvorfälle", value: "-82%", impact: "Von 11 auf 2 p.a." }
        ],
        roi: "312% in 18 Monaten",
        testimonial: {
          quote: "Mit Marsstein haben wir ISO 27001 in Rekordzeit erreicht. Die Automatisierung spart uns nicht nur Zeit, sondern macht uns auch bei Kunden glaubwürdiger. Beste Investition des Jahres!",
          author: "Michael Schmidt",
          position: "CTO, TechFlow GmbH"
        }
      },
      keyLearnings: [
        "Frühe Einbindung aller Stakeholder beschleunigt Adoption",
        "KI-Dokumentation reduziert Fehlerquote um 90%",
        "Kontinuierliches Monitoring verhindert Compliance-Drift"
      ]
    },
    {
      company: "SecureBank AG",
      industry: "Finanzdienstleistungen",
      size: "1.200 Mitarbeiter",
      logo: CreditCard,
      challenge: "BaFin-Anforderungen + internationale Expansion erforderten multiple Compliance-Standards. 3 FTEs nur für Dokumentation.",
      solution: "Multi-Standard Compliance Hub mit ISO 27001 als Basis, automatisches Mapping zu SOC 2 und PCI-DSS.",
      implementation: {
        duration: "6 Monate",
        phases: [
          { phase: "Risiko-Assessment", duration: "3 Wochen", status: "Umfassend" },
          { phase: "Controls Mapping", duration: "4 Wochen", status: "Automatisiert" },
          { phase: "Rollout (3 Standorte)", duration: "12 Wochen", status: "Gestaffelt" },
          { phase: "Multi-Zertifizierung", duration: "4 Wochen", status: "Parallel" }
        ]
      },
      results: {
        businessImpact: [
          { metric: "Compliance-Kosten", value: "-68%", impact: "€450k/Jahr gespart" },
          { metric: "Audit-Effizienz", value: "+85%", impact: "Ein Audit für 3 Standards" },
          { metric: "Time-to-Market", value: "-40%", impact: "Neue Produkte schneller" },
          { metric: "Kundenzufriedenheit", value: "+92%", impact: "Trust Score" }
        ],
        roi: "428% in 24 Monaten",
        testimonial: {
          quote: "Marsstein hat unsere Compliance-Landschaft revolutioniert. Statt drei parallelen Systemen haben wir jetzt eine integrierte Lösung, die alle Standards abdeckt.",
          author: "Dr. Sarah Weber",
          position: "CISO, SecureBank AG"
        }
      },
      keyLearnings: [
        "Integrierter Ansatz spart 70% Dokumentationsaufwand",
        "Automatisches Control-Mapping reduziert Redundanzen",
        "Echtzeit-Dashboards ermöglichen proaktives Management"
      ]
    },
    {
      company: "MedTech Innovations",
      industry: "Gesundheitswesen",
      size: "450 Mitarbeiter",
      logo: Heart,
      challenge: "Kritische Medizingeräte-Software erforderte höchste Sicherheitsstandards. DSGVO + MDR Compliance parallel zu ISO 27001.",
      solution: "Branchenspezifische ISO 27001-Templates mit Health-Compliance-Modulen, integrierte Datenschutz-Folgenabschätzung.",
      implementation: {
        duration: "5 Monate",
        phases: [
          { phase: "Medical Device Mapping", duration: "3 Wochen", status: "Spezialisiert" },
          { phase: "ISMS + QMS Integration", duration: "6 Wochen", status: "Harmonisiert" },
          { phase: "Validierung", duration: "8 Wochen", status: "FDA-konform" },
          { phase: "Zertifizierung", duration: "3 Wochen", status: "Bestanden" }
        ]
      },
      results: {
        businessImpact: [
          { metric: "FDA-Zulassungszeit", value: "-45%", impact: "6 Monate schneller" },
          { metric: "Compliance-Verstöße", value: "-100%", impact: "Zero Incidents" },
          { metric: "Patientendaten-Schutz", value: "+98%", impact: "Verschlüsselung" },
          { metric: "Marktexpansion", value: "+12", impact: "Neue EU-Länder" }
        ],
        roi: "367% in 20 Monaten",
        testimonial: {
          quote: "Die Healthcare-spezifischen Features von Marsstein waren entscheidend. Wir konnten ISO 27001 nahtlos mit unseren medizinischen Standards verbinden.",
          author: "Prof. Dr. Thomas Müller",
          position: "CEO, MedTech Innovations"
        }
      },
      keyLearnings: [
        "Branchenspezifische Templates sparen 60% Anpassungszeit",
        "Integrierte Compliance vermeidet Doppelarbeit",
        "Automatisierte Validierung beschleunigt Zulassungen"
      ]
    },
    {
      company: "AutoDrive Systems",
      industry: "Automobilindustrie",
      size: "2.500 Mitarbeiter",
      logo: Car,
      challenge: "TISAX Level 3 + ISO 27001 für OEM-Anforderungen. Schutz von Prototyp-Daten und IP war geschäftskritisch.",
      solution: "Dual-Compliance-System mit Prototype Protection Module, automatisierte Lieferanten-Assessments.",
      implementation: {
        duration: "7 Monate",
        phases: [
          { phase: "TISAX-ISO Mapping", duration: "2 Wochen", status: "Vollständig" },
          { phase: "Prototype Security", duration: "8 Wochen", status: "Level 4" },
          { phase: "Supply Chain Integration", duration: "10 Wochen", status: "ENX-Ready" },
          { phase: "Dual-Zertifizierung", duration: "4 Wochen", status: "Erfolgreich" }
        ]
      },
      results: {
        businessImpact: [
          { metric: "OEM-Aufträge", value: "+8", impact: "€125M Pipeline" },
          { metric: "IP-Schutz", value: "100%", impact: "Zero Leaks" },
          { metric: "Supplier Onboarding", value: "-70%", impact: "Von 6 auf 2 Wochen" },
          { metric: "Audit-Kosten", value: "-55%", impact: "€180k/Jahr gespart" }
        ],
        roi: "485% in 30 Monaten",
        testimonial: {
          quote: "Marsstein ist der Game-Changer für Automotive-Compliance. Die TISAX-ISO Integration hat uns Türen zu allen großen OEMs geöffnet.",
          author: "Ing. Klaus Fischer",
          position: "Head of Security, AutoDrive Systems"
        }
      },
      keyLearnings: [
        "Kombinierte Audits sparen 50% Zeit und Kosten",
        "Automatisierte Lieferanten-Bewertung ist kritisch",
        "Continuous Monitoring verhindert Zertifikatsverlust"
      ]
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-white to-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center mb-16 space-y-4",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300", children: [
            /* @__PURE__ */ jsx(Star, { className: "h-3.5 w-3.5 mr-2" }),
            "Fallstudien"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Erfolgsgeschichten unserer Kunden" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Erfahren Sie, wie führende Unternehmen mit Marsstein ihre ISO 27001-Zertifizierung erreicht und dabei messbare Geschäftserfolge erzielt haben." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: caseStudies.map((study, index) => /* @__PURE__ */ jsx(
      motion.button,
      {
        onClick: () => setSelectedStudy(index),
        className: cn(
          "group relative p-4 rounded-xl transition-all",
          selectedStudy === index ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-xl scale-105" : "bg-white text-[#474747] hover:bg-gray-50 border-2 border-gray-200 hover:border-[#e24e1b]/30"
        ),
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsx(study.logo, { className: "h-8 w-8" }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold", children: study.company }),
            /* @__PURE__ */ jsx("div", { className: "text-xs opacity-80", children: study.industry })
          ] })
        ] })
      },
      index
    )) }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
        transition: { duration: 0.4 },
        className: "max-w-6xl mx-auto",
        children: [
          /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden border-0 shadow-2xl", children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "bg-gradient-to-r from-gray-50 to-blue-50 p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-white rounded-lg shadow-sm", children: React__default.createElement(caseStudies[selectedStudy].logo, {
                  className: "h-10 w-10 text-[#e24e1b]"
                }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-3xl", children: caseStudies[selectedStudy].company }),
                  /* @__PURE__ */ jsxs(CardDescription, { className: "text-base", children: [
                    caseStudies[selectedStudy].industry,
                    " • ",
                    caseStudies[selectedStudy].size
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-700 text-lg px-4 py-2", children: [
                "ROI: ",
                caseStudies[selectedStudy].results.roi
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "p-8 space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "p-6 bg-red-50 rounded-lg",
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.1 },
                    children: [
                      /* @__PURE__ */ jsxs("h3", { className: "font-semibold text-red-700 mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5" }),
                        "Herausforderung"
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-[#474747]", children: caseStudies[selectedStudy].challenge })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "p-6 bg-green-50 rounded-lg",
                    initial: { opacity: 0, x: 20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.2 },
                    children: [
                      /* @__PURE__ */ jsxs("h3", { className: "font-semibold text-green-700 mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5" }),
                        "Lösung mit Marsstein"
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-[#474747]", children: caseStudies[selectedStudy].solution })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "Implementierung in ",
                  caseStudies[selectedStudy].implementation.duration
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-green-600" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-4", children: caseStudies[selectedStudy].implementation.phases.map((phase, idx) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "flex items-center gap-4",
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { delay: 0.3 + idx * 0.1 },
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600 z-10", children: idx + 1 }),
                        /* @__PURE__ */ jsx("div", { className: "flex-1 p-4 bg-gray-50 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("div", { className: "font-semibold text-[#232323]", children: phase.phase }),
                            /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: phase.duration })
                          ] }),
                          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: phase.status })
                        ] }) })
                      ]
                    },
                    idx
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-6 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-green-600" }),
                  "Messbare Ergebnisse"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4", children: caseStudies[selectedStudy].results.businessImpact.map((result, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg border-2 border-gray-200 hover:border-green-300 transition-colors",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.5 + idx * 0.1 },
                    whileHover: { scale: 1.05 },
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-green-600 mb-2", children: result.value }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-[#232323] mb-1", children: result.metric }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: result.impact })
                    ]
                  },
                  idx
                )) })
              ] }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl",
                  initial: { opacity: 0, scale: 0.95 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: 0.7 },
                  children: [
                    /* @__PURE__ */ jsx(Quote, { className: "h-8 w-8 text-blue-400 mb-4" }),
                    /* @__PURE__ */ jsxs("blockquote", { className: "text-lg text-[#474747] italic mb-4", children: [
                      '"',
                      caseStudies[selectedStudy].results.testimonial.quote,
                      '"'
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-[#e24e1b] to-[#ea580c] rounded-full flex items-center justify-center text-white font-bold", children: caseStudies[selectedStudy].results.testimonial.author.split(" ").map((n) => n[0]).join("") }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("div", { className: "font-semibold text-[#232323]", children: caseStudies[selectedStudy].results.testimonial.author }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: caseStudies[selectedStudy].results.testimonial.position })
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "p-6 bg-[#e24e1b]/5 rounded-xl border-2 border-[#e24e1b]/20", children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-[#232323] mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "Key Learnings"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: caseStudies[selectedStudy].keyLearnings.map((learning, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "flex items-start gap-3",
                    initial: { opacity: 0, x: -10 },
                    animate: { opacity: 1, x: 0 },
                    transition: { delay: 0.8 + idx * 0.1 },
                    children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-[#e24e1b] mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[#474747]", children: learning })
                    ]
                  },
                  idx
                )) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "mt-8 text-center",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1 },
              children: [
                /* @__PURE__ */ jsx("p", { className: "text-[#474747] mb-4", children: "Möchten Sie ähnliche Erfolge erzielen?" }),
                /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#f97316] hover:to-[#ea580c]", children: [
                  "Ihre Success Story starten",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
                ] })
              ]
            }
          )
        ]
      },
      selectedStudy
    ) })
  ] }) });
};
const ToolsSoftwareSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("grc");
  const [comparisonMode, setComparisonMode] = useState(false);
  const toolCategories = {
    grc: {
      title: "GRC-Plattformen",
      icon: Shield,
      description: "Governance, Risk & Compliance Management",
      tools: [
        {
          name: "Marsstein Compliance Suite",
          vendor: "Marsstein",
          features: ["KI-gestützte Automatisierung", "Multi-Standard Support", "Echtzeit-Monitoring", "Integrierte Workflows"],
          pros: ["75% Zeitersparnis", "ISO 27001 optimiert", "Deutsche Lösung", "DSGVO-konform"],
          cons: ["Relativ neu am Markt"],
          pricing: "Ab €499/Monat",
          rating: 4.9,
          iso27001Ready: true,
          highlight: true
        },
        {
          name: "ServiceNow GRC",
          vendor: "ServiceNow",
          features: ["Enterprise-Integration", "Workflow-Automatisierung", "Risk Management", "Policy Management"],
          pros: ["Große Plattform", "Viele Integrationen", "Etabliert"],
          cons: ["Komplex", "Teuer", "Lange Implementierung"],
          pricing: "Ab €2.500/Monat",
          rating: 4.2,
          iso27001Ready: false
        },
        {
          name: "MetricStream",
          vendor: "MetricStream",
          features: ["Compliance Management", "Risk Assessment", "Audit Management", "Business Intelligence"],
          pros: ["Umfassend", "Flexibel", "Global"],
          cons: ["Steile Lernkurve", "US-fokussiert"],
          pricing: "Auf Anfrage",
          rating: 4,
          iso27001Ready: true
        }
      ]
    },
    documentation: {
      title: "Dokumentation",
      icon: FileText,
      description: "ISMS-Dokumentation und Policy Management",
      tools: [
        {
          name: "Confluence + ISO 27001 Templates",
          vendor: "Atlassian",
          features: ["Wiki-System", "Versionskontrolle", "Kollaboration", "Template-Bibliothek"],
          pros: ["Bekannt", "Flexibel", "Gute Integration"],
          cons: ["Manuelle Prozesse", "Keine Automatisierung"],
          pricing: "Ab €5/User/Monat",
          rating: 3.8,
          iso27001Ready: false
        },
        {
          name: "Vanta",
          vendor: "Vanta",
          features: ["Automatisierte Dokumentation", "Continuous Monitoring", "Evidence Collection", "Audit-Ready"],
          pros: ["Stark automatisiert", "Schnell", "Modern"],
          cons: ["US-fokussiert", "Begrenzte Anpassung"],
          pricing: "Ab €800/Monat",
          rating: 4.5,
          iso27001Ready: true
        },
        {
          name: "ISO 27001 Toolkit",
          vendor: "Various",
          features: ["Template-Sammlung", "Checklisten", "Beispiel-Policies", "Gap-Analysis Tools"],
          pros: ["Günstig", "Sofort nutzbar", "Praxiserprobt"],
          cons: ["Keine Software", "Manuell", "Keine Updates"],
          pricing: "€299-999 einmalig",
          rating: 3.5,
          iso27001Ready: true
        }
      ]
    },
    riskManagement: {
      title: "Risikomanagement",
      icon: AlertCircle,
      description: "Risk Assessment und Treatment",
      tools: [
        {
          name: "FAIR-U",
          vendor: "RiskLens",
          features: ["Quantitative Risikoanalyse", "FAIR-Methodik", "Szenario-Modellierung", "ROI-Berechnung"],
          pros: ["Wissenschaftlich", "Präzise", "Business-fokussiert"],
          cons: ["Komplex", "Teuer", "Training nötig"],
          pricing: "Ab €1.500/Monat",
          rating: 4.3,
          iso27001Ready: true
        },
        {
          name: "Resolver",
          vendor: "Resolver",
          features: ["Enterprise Risk Management", "Incident Management", "Compliance Tracking", "Dashboards"],
          pros: ["Umfassend", "Skalierbar", "Audit-Trail"],
          cons: ["Enterprise-only", "Komplex"],
          pricing: "Auf Anfrage",
          rating: 4.1,
          iso27001Ready: true
        },
        {
          name: "SimpleRisk",
          vendor: "SimpleRisk",
          features: ["Open Source Option", "Risk Scoring", "Mitigation Tracking", "Reporting"],
          pros: ["Open Source", "Anpassbar", "Community"],
          cons: ["Basis-Features", "Support limitiert"],
          pricing: "Free / €500/Jahr Pro",
          rating: 3.7,
          iso27001Ready: false
        }
      ]
    },
    monitoring: {
      title: "Security Monitoring",
      icon: Eye,
      description: "Continuous Monitoring & SIEM",
      tools: [
        {
          name: "Splunk Enterprise Security",
          vendor: "Splunk",
          features: ["SIEM", "Log-Analyse", "Threat Intelligence", "Incident Response"],
          pros: ["Marktführer", "Mächtig", "Skalierbar"],
          cons: ["Sehr teuer", "Komplex", "Resource-intensiv"],
          pricing: "Ab €5.000/Monat",
          rating: 4.6,
          iso27001Ready: false
        },
        {
          name: "Elastic Security",
          vendor: "Elastic",
          features: ["SIEM", "Endpoint Security", "Cloud Security", "Open Source"],
          pros: ["Flexibel", "Open Source Option", "Modern"],
          cons: ["Setup-Aufwand", "Expertise nötig"],
          pricing: "Free / Ab €95/Monat",
          rating: 4.4,
          iso27001Ready: false
        },
        {
          name: "Microsoft Sentinel",
          vendor: "Microsoft",
          features: ["Cloud-native SIEM", "AI-gestützt", "Azure-Integration", "Automatisierung"],
          pros: ["Cloud-first", "KI-Features", "Microsoft-Integration"],
          cons: ["Azure-gebunden", "Kosten variabel"],
          pricing: "Pay-as-you-go",
          rating: 4.3,
          iso27001Ready: false
        }
      ]
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center mb-16 space-y-4",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300", children: [
            /* @__PURE__ */ jsx(Monitor, { className: "h-3.5 w-3.5 mr-2" }),
            "Tools & Software"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Die richtigen Tools für Ihre ISO 27001-Reise" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Vergleichen Sie führende Compliance-Tools und finden Sie die perfekte Lösung für Ihr Unternehmen. Von GRC-Plattformen bis Security Monitoring - wir zeigen Ihnen, was wirklich funktioniert." })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-8", children: Object.entries(toolCategories).map(([key, category]) => /* @__PURE__ */ jsxs(
      motion.button,
      {
        onClick: () => setSelectedCategory(key),
        className: cn(
          "flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all",
          selectedCategory === key ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg" : "bg-white text-[#474747] hover:bg-gray-50 border-2 border-gray-200"
        ),
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        children: [
          /* @__PURE__ */ jsx(category.icon, { className: "h-5 w-5" }),
          category.title
        ]
      },
      key
    )) }),
    /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-12", children: /* @__PURE__ */ jsxs(
      Button,
      {
        variant: comparisonMode ? "default" : "outline",
        onClick: () => setComparisonMode(!comparisonMode),
        size: "sm",
        children: [
          /* @__PURE__ */ jsx(BarChart3, { className: "mr-2 h-4 w-4" }),
          comparisonMode ? "Einzelansicht" : "Vergleichsmodus"
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -30 },
        transition: { duration: 0.4 },
        children: !comparisonMode ? (
          // Card View
          /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto", children: toolCategories[selectedCategory].tools.map((tool, idx) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: idx * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: cn(
                "h-full hover:shadow-xl transition-all",
                tool.highlight && "border-2 border-[#e24e1b] relative"
              ), children: [
                tool.highlight && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 transform -translate-x-1/2", children: /* @__PURE__ */ jsx(Badge, { className: "bg-[#e24e1b] text-white", children: "Empfehlung" }) }),
                /* @__PURE__ */ jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: tool.name }),
                      /* @__PURE__ */ jsx(CardDescription, { children: tool.vendor })
                    ] }),
                    tool.iso27001Ready && /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "ISO 27001 Ready" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
                      Star,
                      {
                        className: cn(
                          "h-4 w-4",
                          i < Math.floor(tool.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        )
                      },
                      i
                    )),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-[#474747]", children: tool.rating })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm text-[#232323] mb-2", children: "Features:" }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: tool.features.map((feature, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: feature }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "text-xs font-medium text-green-700 mb-1", children: "Vorteile:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: tool.pros.slice(0, 3).map((pro, i) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-[#474747] flex items-start gap-1", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: pro })
                      ] }, i)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "text-xs font-medium text-red-700 mb-1", children: "Nachteile:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: tool.cons.map((con, i) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-[#474747] flex items-start gap-1", children: [
                        /* @__PURE__ */ jsx(XCircle, { className: "h-3 w-3 text-red-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: con })
                      ] }, i)) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "pt-3 border-t", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[#474747]", children: "Preis:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#232323]", children: tool.pricing })
                  ] }) })
                ] })
              ] })
            },
            idx
          )) })
        ) : (
          // Comparison Table
          /* @__PURE__ */ jsx(Card, { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsx("thead", { className: "bg-gray-50 border-b", children: /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("th", { className: "text-left p-4 font-medium text-[#232323]", children: "Tool" }),
              /* @__PURE__ */ jsx("th", { className: "text-center p-4 font-medium text-[#232323]", children: "Rating" }),
              /* @__PURE__ */ jsx("th", { className: "text-center p-4 font-medium text-[#232323]", children: "ISO 27001" }),
              /* @__PURE__ */ jsx("th", { className: "text-center p-4 font-medium text-[#232323]", children: "Preis" }),
              /* @__PURE__ */ jsx("th", { className: "text-left p-4 font-medium text-[#232323]", children: "Beste für" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: toolCategories[selectedCategory].tools.map((tool, idx) => /* @__PURE__ */ jsxs(
              motion.tr,
              {
                className: cn(
                  "border-b hover:bg-gray-50",
                  tool.highlight && "bg-[#e24e1b]/5"
                ),
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: idx * 0.1 },
                children: [
                  /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "font-medium text-[#232323] flex items-center gap-2", children: [
                      tool.name,
                      tool.highlight && /* @__PURE__ */ jsx(Badge, { className: "bg-[#e24e1b] text-white text-xs", children: "Top" })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: tool.vendor })
                  ] }) }),
                  /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-1", children: [
                    [...Array(5)].map((_, i) => /* @__PURE__ */ jsx(
                      Star,
                      {
                        className: cn(
                          "h-3 w-3",
                          i < Math.floor(tool.rating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        )
                      },
                      i
                    )),
                    /* @__PURE__ */ jsx("span", { className: "text-sm ml-1", children: tool.rating })
                  ] }) }),
                  /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: tool.iso27001Ready ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 mx-auto" }) : /* @__PURE__ */ jsx(XCircle, { className: "h-5 w-5 text-gray-400 mx-auto" }) }),
                  /* @__PURE__ */ jsx("td", { className: "p-4 text-center font-medium", children: tool.pricing }),
                  /* @__PURE__ */ jsx("td", { className: "p-4 text-sm text-[#474747]", children: tool.pros[0] })
                ]
              },
              idx
            )) })
          ] }) }) }) })
        )
      },
      selectedCategory
    ) }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "mt-16 max-w-4xl mx-auto",
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.6 },
        children: /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-r from-blue-50 to-indigo-50", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Layers, { className: "h-6 w-6 text-[#e24e1b]" }),
            "Empfohlener ISO 27001 Tool-Stack"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323]", children: "Minimal Stack (KMU)" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded-lg flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Marsstein Compliance Suite" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "€499/M" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded-lg flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Microsoft 365 Security" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Inkl." })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "pt-3 border-t", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Gesamtkosten:" }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-green-600", children: "€499/Monat" })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323]", children: "Enterprise Stack" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded-lg flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Marsstein Enterprise" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "€2.999/M" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded-lg flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Splunk SIEM" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "€5.000/M" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded-lg flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Vanta Automation" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "€800/M" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "pt-3 border-t", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Gesamtkosten:" }),
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-orange-600", children: "€8.799/Monat" })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-4 bg-[#e24e1b]/10 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-[#474747] flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-[#e24e1b] mt-0.5" }),
              /* @__PURE__ */ jsxs("span", { children: [
                /* @__PURE__ */ jsx("strong", { children: "Tipp:" }),
                " Starten Sie mit dem Minimal Stack und erweitern Sie bei Bedarf. 80% der ISO 27001-Anforderungen lassen sich mit Marsstein + bestehenden Tools abdecken."
              ] })
            ] }) })
          ] }) })
        ] })
      }
    )
  ] }) });
};
const FAQSection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
  /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
    /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300", children: [
      /* @__PURE__ */ jsx(BookOpen, { className: "h-3.5 w-3.5 mr-2" }),
      "Häufige Fragen"
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Alles was Sie über ISO 27001 wissen müssen" })
  ] }),
  /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: [
    {
      question: "Was ist ISO 27001 und warum ist es wichtig?",
      answer: "ISO 27001 ist der internationale Standard für Informationssicherheits-Managementsysteme (ISMS). Er hilft Organisationen dabei, Informationssicherheit systematisch zu managen und kontinuierlich zu verbessern. Die Zertifizierung beweist Kunden und Partnern, dass Ihre Organisation höchste Sicherheitsstandards einhält."
    },
    {
      question: "Wie lange dauert eine ISO 27001-Zertifizierung?",
      answer: "Mit Marsstein verkürzen wir den traditionellen Zertifizierungsprozess erheblich. Während herkömmliche Ansätze 12-18 Monate dauern können, erreichen unsere Kunden die Zertifizierung typischerweise in 6-9 Monaten durch unsere KI-gestützte Automatisierung und strukturierte Herangehensweise."
    },
    {
      question: "Welche Kosten sind mit einer ISO 27001-Zertifizierung verbunden?",
      answer: "Neben unseren Service-Gebühren fallen zusätzliche Kosten für die externe Zertifizierungsstelle an (ca. 8.000-15.000€ je nach Unternehmensgröße) sowie eventuell für Penetrationstests. Wir beraten Sie transparent über alle anfallenden Kosten."
    },
    {
      question: "Ist ein Penetrationstest für ISO 27001 verpflichtend?",
      answer: "Ein Penetrationstest ist nicht explizit vorgeschrieben, wird aber von den meisten Auditoren erwartet, besonders bei IT-lastigen Unternehmen. Wir empfehlen einen professionellen Pentest zur Risikobewertung und können Sie an qualifizierte Partner vermitteln."
    },
    {
      question: "Wie unterscheidet sich ISO 27001 von anderen Compliance-Standards?",
      answer: "ISO 27001 fokussiert speziell auf Informationssicherheit und ist international anerkannt. Im Gegensatz zu DSGVO (datenschutzfokussiert) oder SOC 2 (US-amerikanisch) bietet ISO 27001 einen ganzheitlichen Ansatz für Informationssicherheits-Management und öffnet Türen zu globalen Märkten."
    },
    {
      question: "Was passiert nach der Zertifizierung?",
      answer: "ISO 27001-Zertifikate sind 3 Jahre gültig mit jährlichen Überwachungsaudits. Wir unterstützen Sie kontinuierlich bei der Aufrechterhaltung Ihrer Compliance, Updates bei Änderungen des Standards und der Vorbereitung auf Folgeaudits."
    }
  ].map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${index}`, className: "border rounded-lg px-6", children: [
    /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left hover:no-underline", children: /* @__PURE__ */ jsx("span", { className: "font-semibold", children: faq.question }) }),
    /* @__PURE__ */ jsx(AccordionContent, { className: "text-[#474747] leading-relaxed pb-6", children: faq.answer })
  ] }, index)) }) })
] }) });
const ResourcesSection = () => {
  const [selectedResourceType, setSelectedResourceType] = useState("guides");
  const [downloadCount, setDownloadCount] = useState({
    checklist: 1247,
    guide: 3891,
    template: 2156,
    whitepaper: 987
  });
  const resourceTypes = {
    guides: {
      title: "Leitfäden & Handbücher",
      icon: BookOpen,
      resources: [
        {
          title: "ISO 27001 Implementierungsleitfaden",
          description: "Schritt-für-Schritt-Anleitung zur erfolgreichen ISO 27001 Implementierung",
          fileType: "PDF",
          fileSize: "4.2 MB",
          pages: 68,
          downloadId: "guide",
          highlights: ["Praxisbeispiele", "Checklisten", "Timeline-Vorlagen"]
        },
        {
          title: "ISMS Aufbau & Betrieb",
          description: "Detaillierter Guide zum Aufbau eines Information Security Management Systems",
          fileType: "PDF",
          fileSize: "3.8 MB",
          pages: 52,
          downloadId: "guide",
          highlights: ["Best Practices", "KPI-Definitionen", "Rollenkonzepte"]
        },
        {
          title: "ISO 27001:2022 Änderungen",
          description: "Alle Neuerungen der aktuellen ISO 27001:2022 Version im Überblick",
          fileType: "PDF",
          fileSize: "1.9 MB",
          pages: 24,
          downloadId: "guide",
          highlights: ["Gap-Analyse", "Transition Guide", "Neue Controls"]
        }
      ]
    },
    templates: {
      title: "Vorlagen & Muster",
      icon: FileText,
      resources: [
        {
          title: "ISO 27001 Dokumentationsvorlagen",
          description: "Komplettes Set an Richtlinien- und Prozessvorlagen für Ihr ISMS",
          fileType: "DOCX Bundle",
          fileSize: "12.4 MB",
          pages: 42,
          downloadId: "template",
          highlights: ["Anpassbare Vorlagen", "27 Dokumente", "Word & Excel"]
        },
        {
          title: "Risikobewertung Excel-Tool",
          description: "Professionelles Excel-Tool zur ISO 27001 konformen Risikobewertung",
          fileType: "XLSX",
          fileSize: "2.1 MB",
          pages: 8,
          downloadId: "template",
          highlights: ["Automatisierte Berechnung", "Dashboard", "Reports"]
        },
        {
          title: "Audit-Checklisten Bundle",
          description: "Umfassende Checklisten für interne Audits und Managementreviews",
          fileType: "XLSX Bundle",
          fileSize: "3.5 MB",
          pages: 15,
          downloadId: "template",
          highlights: ["114 Controls", "Bewertungsmatrix", "Action Tracking"]
        }
      ]
    },
    checklists: {
      title: "Checklisten",
      icon: CheckSquare,
      resources: [
        {
          title: "ISO 27001 Readiness Checklist",
          description: "Prüfen Sie Ihre Bereitschaft für die ISO 27001 Zertifizierung",
          fileType: "PDF",
          fileSize: "890 KB",
          pages: 12,
          downloadId: "checklist",
          highlights: ["Quick Assessment", "Gap-Identifikation", "Prioritäten"]
        },
        {
          title: "Control Implementation Checklist",
          description: "Detaillierte Checkliste für alle 114 ISO 27001 Controls",
          fileType: "PDF",
          fileSize: "1.4 MB",
          pages: 28,
          downloadId: "checklist",
          highlights: ["Alle Controls", "Umsetzungsstatus", "Evidenzen"]
        },
        {
          title: "Zertifizierungsaudit Vorbereitung",
          description: "Checkliste zur optimalen Vorbereitung auf das Zertifizierungsaudit",
          fileType: "PDF",
          fileSize: "650 KB",
          pages: 8,
          downloadId: "checklist",
          highlights: ["Audit-Vorbereitung", "Dokumentenliste", "Do's & Don'ts"]
        }
      ]
    },
    whitepapers: {
      title: "Whitepapers & Studien",
      icon: FileCheck,
      resources: [
        {
          title: "ROI von ISO 27001 Zertifizierungen",
          description: "Studie zum Return on Investment von ISO 27001 in deutschen Unternehmen",
          fileType: "PDF",
          fileSize: "5.2 MB",
          pages: 36,
          downloadId: "whitepaper",
          highlights: ["Marktstudie 2024", "500+ Unternehmen", "ROI-Analyse"]
        },
        {
          title: "ISO 27001 & Cloud Security",
          description: "Integration von ISO 27001 in moderne Cloud-Infrastrukturen",
          fileType: "PDF",
          fileSize: "3.9 MB",
          pages: 42,
          downloadId: "whitepaper",
          highlights: ["AWS/Azure/GCP", "Best Practices", "Case Studies"]
        },
        {
          title: "KI-gestützte ISMS-Optimierung",
          description: "Wie künstliche Intelligenz Ihr ISMS verbessern kann",
          fileType: "PDF",
          fileSize: "4.6 MB",
          pages: 38,
          downloadId: "whitepaper",
          highlights: ["Marsstein AI", "Automatisierung", "Zukunftstrends"]
        }
      ]
    }
  };
  const handleDownload = (resourceId) => {
    setDownloadCount((prev) => ({
      ...prev,
      [resourceId]: prev[resourceId] + 1
    }));
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-center mb-16",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
        children: [
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 text-[#232323]", children: "ISO 27001 Ressourcen-Center" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-[#474747] max-w-3xl mx-auto", children: "Kostenlose Vorlagen, Leitfäden und Tools für Ihre erfolgreiche ISO 27001 Zertifizierung" })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: Object.entries(resourceTypes).map(([key, type]) => {
      const Icon = type.icon;
      return /* @__PURE__ */ jsxs(
        motion.button,
        {
          onClick: () => setSelectedResourceType(key),
          className: cn(
            "flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all",
            selectedResourceType === key ? "bg-[#e24e1b] text-white shadow-lg" : "bg-white text-[#474747] hover:bg-gray-100 border"
          ),
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }),
            type.title
          ]
        },
        key
      );
    }) }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: resourceTypes[selectedResourceType].resources.map((resource, idx) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { delay: idx * 0.1 },
        children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group", children: [
          /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
              /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: resource.fileType }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-[#474747]", children: resource.fileSize })
            ] }),
            /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-2 text-[#232323] group-hover:text-[#e24e1b] transition-colors", children: resource.title }),
            /* @__PURE__ */ jsx(CardDescription, { className: "text-[#474747]", children: resource.description })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: resource.highlights.map((highlight, i) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full",
                children: highlight
              },
              i
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm text-[#474747]", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
                resource.pages,
                " Seiten"
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
                downloadCount[resource.downloadId].toLocaleString(),
                " Downloads"
              ] })
            ] }),
            /* @__PURE__ */ jsxs(
              Button,
              {
                className: "w-full bg-[#e24e1b] hover:bg-[#c73e16] text-white",
                onClick: () => handleDownload(resource.downloadId),
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
                  "Jetzt herunterladen"
                ]
              }
            )
          ] })
        ] })
      },
      `${selectedResourceType}-${idx}`
    )) }) }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "grid md:grid-cols-2 gap-8",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.5 },
        children: [
          /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-600 rounded-lg", children: /* @__PURE__ */ jsx(PlayCircle, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl text-[#232323]", children: "ISO 27001 Webinare" })
              ] }),
              /* @__PURE__ */ jsx(CardDescription, { className: "text-[#474747]", children: "Kostenlose Live-Webinare und Aufzeichnungen zu ISO 27001 Themen" })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded-lg border border-blue-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323]", children: "ISO 27001 Basics" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "Nächste Woche" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747]", children: "Einführung in die ISO 27001 Zertifizierung für Einsteiger" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-2 text-xs text-[#474747]", children: [
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "h-3 w-3" }),
                      "Di, 20. Nov"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
                      "14:00 Uhr"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded-lg border border-blue-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323]", children: "Risikomanagement Workshop" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "Aufzeichnung" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747]", children: "Praktische Tipps zur ISO 27001 konformen Risikobewertung" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mt-2 text-xs text-[#474747]", children: [
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
                      "90 Minuten"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-3 w-3" }),
                      "523 Teilnehmer"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", children: [
                "Alle Webinare anzeigen",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-orange-50 to-red-50 border-orange-200", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-[#e24e1b] rounded-lg", children: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl text-[#232323]", children: "ISO 27001 Newsletter" })
              ] }),
              /* @__PURE__ */ jsx(CardDescription, { className: "text-[#474747]", children: "Monatliche Updates zu ISO 27001, Best Practices und Compliance-News" })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-[#474747]", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
                  /* @__PURE__ */ jsx("span", { children: "Aktuelle ISO 27001 Entwicklungen" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-[#474747]", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
                  /* @__PURE__ */ jsx("span", { children: "Praxistipps von Experten" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-[#474747]", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
                  /* @__PURE__ */ jsx("span", { children: "Kostenlose Vorlagen & Tools" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-[#474747]", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
                  /* @__PURE__ */ jsx("span", { children: "Webinar-Einladungen" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "pt-4", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-[#474747] mb-4", children: [
                  "Bereits ",
                  /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "4.200+ Abonnenten" }),
                  " profitieren von unserem Newsletter"
                ] }),
                /* @__PURE__ */ jsxs(Button, { className: "w-full bg-[#e24e1b] hover:bg-[#c73e16] text-white", children: [
                  "Newsletter abonnieren",
                  /* @__PURE__ */ jsx(Sparkles, { className: "ml-2 h-4 w-4" })
                ] })
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "mt-16 p-8 bg-gradient-to-r from-[#232323] to-[#474747] rounded-2xl text-white text-center",
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { delay: 0.7 },
        children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Benötigen Sie persönliche Unterstützung?" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg mb-6 text-white/90", children: "Unsere ISO 27001 Experten helfen Ihnen gerne bei der Auswahl der richtigen Ressourcen" }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
            /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "secondary", className: "bg-white text-[#232323] hover:bg-gray-100", children: [
              /* @__PURE__ */ jsx(Phone, { className: "mr-2 h-5 w-5" }),
              "Experten kontaktieren"
            ] }),
            /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-white text-white hover:bg-white hover:text-[#232323]", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
              "Beratungstermin buchen"
            ] })
          ] })
        ]
      }
    )
  ] }) });
};
const CTASection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-br from-blue-600 via-[#a1251b] to-purple-600 text-white", children: /* @__PURE__ */ jsx("div", { className: "container px-4 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto space-y-8", children: [
  /* @__PURE__ */ jsxs(Badge, { className: "bg-white/20 text-white border-white/20", children: [
    /* @__PURE__ */ jsx(Rocket, { className: "h-3.5 w-3.5 mr-2" }),
    "Bereit für die internationale Bühne?"
  ] }),
  /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Starten Sie heute Ihre ISO 27001-Zertifizierung" }),
  /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 leading-relaxed", children: "Starten Sie Ihre professionelle ISO 27001-Zertifizierung mit Marsstein und erschließen Sie internationale Märkte." }),
  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center pt-8", children: [
    /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-white text-[#e24e1b] hover:bg-[#F5F6F8]/80 px-8", children: [
      /* @__PURE__ */ jsx(Shield, { className: "mr-2 h-5 w-5" }),
      "Kostenlose Beratung buchen"
    ] }),
    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-white text-white hover:bg-white hover:text-[#e24e1b] px-8", children: [
      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
      "ISO 27001 Guide herunterladen"
    ] })
  ] }),
  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center items-center gap-8 pt-12 text-white/70", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
      /* @__PURE__ */ jsx("span", { children: "Kostenlose Erstberatung" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
      /* @__PURE__ */ jsx("span", { children: "Unverbindliche Gap-Analyse" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
      /* @__PURE__ */ jsx("span", { children: "Transparente Preise" })
    ] })
  ] })
] }) }) });
const Iso27001Compliance = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const navigationItems = [
    { id: "ueberblick", label: "Überblick", icon: Shield },
    { id: "schmerzpunkte", label: "Schmerzpunkte", icon: AlertCircle },
    { id: "iso-details", label: "ISO 27001 Details", icon: FileText },
    { id: "vorteile", label: "Vorteile", icon: CheckCircle2 },
    { id: "roi", label: "ROI", icon: TrendingUp },
    { id: "implementierung", label: "Implementierung", icon: Settings },
    { id: "zertifizierung", label: "Zertifizierung", icon: Award },
    { id: "wartung", label: "Wartung", icon: Shield },
    { id: "integration", label: "Integration", icon: Layers },
    { id: "branchen", label: "Branchen", icon: Building2 },
    { id: "fallstudien", label: "Fallstudien", icon: BookOpen },
    { id: "prozess", label: "Prozess", icon: Rocket },
    { id: "tools", label: "Tools", icon: Monitor },
    { id: "ressourcen", label: "Ressourcen", icon: FileCheck },
    { id: "faq", label: "FAQ", icon: Globe }
  ];
  const scrollToSection = (sectionId) => {
    window.history.pushState(null, "", `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ISO 27001 Zertifizierung",
    "description": "ISO 27001 Zertifizierung und ISMS Implementierung für Informationssicherheit",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Information Security Management",
    "areaServed": "DE"
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "ISO 27001 Zertifizierung – ISMS erfolgreich aufbauen",
        description: "ISO 27001 Zertifizierung meistern: ISMS-Implementierung, Gap-Analyse & Audit-Vorbereitung. ✓ Schritt-für-Schritt ✓ Praxisnah. Jetzt starten!",
        canonical: "/iso-27001",
        keywords: "ISO 27001, ISMS, Informationssicherheit, ISO 27001 Zertifizierung, IT-Sicherheit",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("section", { id: "ueberblick", className: "scroll-mt-32", children: /* @__PURE__ */ jsx(HeroSection, {}) }),
      /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: navigationItems.map((item, index) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            scrollToSection(item.id);
            setActiveSection(item.id);
          },
          className: cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
            activeSection === item.id ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800" : "hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-400",
            "border",
            activeSection === item.id ? "border-red-200 dark:border-red-800" : "border-transparent hover:border-red-200 dark:hover:border-red-800"
          ),
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: cn(
              "h-4 w-4",
              activeSection === item.id && "text-red-600 dark:text-red-500"
            ) }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "text-sm font-medium",
              activeSection === item.id && "text-red-700 dark:text-red-400"
            ), children: item.label })
          ]
        },
        item.id
      )) }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
        /* @__PURE__ */ jsx("section", { id: "schmerzpunkte", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(PainpointSection, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "iso-details", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(Iso27001DeepDiveSection, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "vorteile", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(BenefitsSection, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "roi", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(ROISection, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "implementierung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(ImplementationSection, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "zertifizierung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(CertificationProcessSection, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "wartung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(MaintenanceSection, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "integration", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(IntegrationStandardsSection, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "branchen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(IndustrySpecificsSection, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "fallstudien", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(CaseStudiesSection, {}) }),
        /* @__PURE__ */ jsx(TargetIndustriesSection, {}),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "prozess", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(ProcessSection, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "tools", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(ToolsSoftwareSection, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "ressourcen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(ResourcesSection, {}) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "faq", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(FAQSection, {}) }),
        /* @__PURE__ */ jsx(CTASection, {})
      ] }) }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  Iso27001Compliance as default
};
