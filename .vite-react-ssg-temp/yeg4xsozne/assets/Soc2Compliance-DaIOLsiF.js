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
import { Award, CheckCircle2, PlayCircle, ArrowRight, Download, Shield, Activity, FileCheck, Star, Building2, Lock, TrendingUp, Cpu, Eye, Users, Bot, Calendar, Phone, Sparkles } from "lucide-react";
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
const Soc2Compliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(87);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SOC 2 Compliance Service",
    "description": "SOC 2 Type II Zertifizierung für Cloud-Services und SaaS-Anbieter",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Security Compliance Certification",
    "areaServed": ["DE", "EU", "US"]
  };
  const painPoints = [
    {
      icon: Building2,
      title: "Kundenvertrauen und Vertragsforderungen",
      description: "Enterprise-Kunden fordern zunehmend SOC 2 Type II Zertifizierungen als Mindestanforderung für Geschäftsbeziehungen.",
      impact: "Kritisch",
      example: "Verlorene Deals aufgrund fehlender SOC 2 Compliance, langwierige Vendor Security Assessments"
    },
    {
      icon: Lock,
      title: "Komplexe Security Controls Implementation",
      description: "Die 5 Trust Service Criteria erfordern umfassende Kontrollen über Security, Availability, Processing Integrity, Confidentiality und Privacy.",
      impact: "Hoch",
      example: "Unklare Control-Mappings, manuelle Evidenz-Sammlung, inconsistente Policy-Umsetzung"
    },
    {
      icon: FileCheck,
      title: "Audit-Readiness und Evidenz-Management",
      description: "Kontinuierliche Dokumentation und Monitoring von Controls für erfolgreiche SOC 2 Type II Audits.",
      impact: "Hoch",
      example: "Fehlende Audit-Trails, unvollständige Dokumentation, manuelle Evidenz-Sammlung"
    },
    {
      icon: TrendingUp,
      title: "Skalierbare Compliance-Prozesse",
      description: "Wachsende SaaS-Unternehmen müssen Compliance-Prozesse automatisieren und standardisieren.",
      impact: "Mittel",
      example: "Manuelle Compliance-Checks, inkonsistente Prozesse across Teams, Scaling-Probleme"
    }
  ];
  const solutions = [
    {
      title: "SOC 2 Framework Implementation",
      description: "Strukturierte Umsetzung aller 5 Trust Service Criteria mit branchenspezifischen Best Practices",
      features: [
        "Security Controls Design und Implementation",
        "Availability Monitoring und Incident Response",
        "Processing Integrity für Datenverarbeitung",
        "Confidentiality Controls für sensible Daten",
        "Privacy Controls für personenbezogene Daten"
      ],
      icon: Shield,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Automated Evidence Collection",
      description: "Kontinuierliche Evidenz-Sammlung und Audit-Trail Generation für SOC 2 Type II Readiness",
      features: [
        "Automatisierte Control Testing",
        "Real-time Compliance Monitoring",
        "Audit-Trail Dokumentation",
        "Exception Management und Remediation"
      ],
      icon: Bot,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Vendor Security Program",
      description: "Effiziente Bearbeitung von Vendor Security Assessments und Kundenanfragen",
      features: [
        "Standardisierte Security Questionnaire Responses",
        "Trust Center und Public Certifications",
        "Customer Due Diligence Support",
        "Security Posture Communication"
      ],
      icon: Users,
      color: "from-purple-500 to-pink-600"
    }
  ];
  const useCases = [
    {
      title: "SaaS-Startup SOC 2 Erstimplementierung",
      challenge: "Schnelle SOC 2 Type II Zertifizierung für erste Enterprise-Kunden",
      solution: "Strukturierte 6-Monats-Implementierung mit automatisierter Evidence Collection",
      outcome: "Erfolgreiche Zertifizierung und 40% kürzere Sales Cycles",
      timeline: "6 Monate",
      complexity: "Mittel"
    },
    {
      title: "Scale-up Compliance Automation",
      challenge: "Manuelle SOC 2 Prozesse skalieren nicht mit Unternehmenswachstum",
      solution: "Automatisierte Control Monitoring und Self-Service Vendor Assessments",
      outcome: "80% weniger manuelle Arbeit bei Compliance-Teams",
      timeline: "3 Monate",
      complexity: "Hoch"
    },
    {
      title: "Enterprise Customer Onboarding",
      challenge: "Komplexe Vendor Security Reviews verzögern Deal-Closures",
      solution: "Standardisierte Trust Center und proaktive Security Documentation",
      outcome: "60% schnellere Enterprise-Onboardings",
      timeline: "2 Monate",
      complexity: "Niedrig"
    }
  ];
  const trustCriteria = [
    {
      name: "Security",
      description: "Schutz vor unautorisierten Zugriffen auf Systeme und Daten",
      coverage: 95,
      controls: ["Access Controls", "Network Security", "Vulnerability Management"],
      icon: Shield
    },
    {
      name: "Availability",
      description: "Gewährleistung der Systemverfügbarkeit gemäß SLA-Vereinbarungen",
      coverage: 98,
      controls: ["Backup & Recovery", "Monitoring", "Incident Response"],
      icon: Activity
    },
    {
      name: "Processing Integrity",
      description: "Vollständige und genaue Systemverarbeitung wie autorisiert",
      coverage: 92,
      controls: ["Data Validation", "Error Handling", "System Monitoring"],
      icon: Cpu
    },
    {
      name: "Confidentiality",
      description: "Schutz vertraulicher Informationen vor unbefugter Offenlegung",
      coverage: 96,
      controls: ["Data Classification", "Encryption", "Access Controls"],
      icon: Eye
    },
    {
      name: "Privacy",
      description: "Sammlung, Nutzung und Aufbewahrung personenbezogener Daten",
      coverage: 89,
      controls: ["Privacy Notices", "Consent Management", "Data Retention"],
      icon: Users
    }
  ];
  const benefits = [
    {
      title: "Kundenvertrauen und Umsatzwachstum",
      description: "SOC 2 Type II als Türöffner für Enterprise-Kunden",
      metric: "+40%",
      detail: "schnellere Enterprise Sales Cycles"
    },
    {
      title: "Operational Excellence",
      description: "Strukturierte Sicherheitsprozesse und Incident Response",
      metric: "99.9%",
      detail: "System Availability SLA"
    },
    {
      title: "Compliance Effizienz",
      description: "Automatisierte Evidence Collection und Audit Readiness",
      metric: "80%",
      detail: "weniger manuelle Compliance-Arbeit"
    },
    {
      title: "Risk Management",
      description: "Proaktive Identifikation und Mitigation von Security Risks",
      metric: "90%",
      detail: "schnellere Incident Response"
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "SOC 2 Zertifizierung – Trust Services für SaaS & Cloud",
        description: "SOC 2 Type II Compliance für SaaS-Anbieter: 5 Trust Principles meistern. ✓ Audit-ready ✓ Automatisiert ✓ Kundenvertrauen. Jetzt vorbereiten!",
        canonical: "/soc2",
        keywords: "SOC 2, SOC 2 Type II, Trust Services, Cloud Security, SaaS Compliance",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
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
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400", children: [
                    /* @__PURE__ */ jsx(Award, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "SOC 2 Compliance" })
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight", children: [
                    "SOC 2 Compliance",
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent block mt-2", children: "leicht gemacht" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Gewinnen Sie Kundenvertrauen mit SOC 2 Type II Zertifizierung. Strukturierte Implementation der 5 Trust Service Criteria für SaaS-Unternehmen." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "SOC 2 Type II Audit-Readiness in 6 Monaten" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Automatisierte Evidence Collection und Monitoring" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Enterprise-Ready Security Posture" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
                    /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&framework=soc2", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90 group", children: [
                      /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                      "SOC 2 Readiness Assessment",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ] }) }),
                    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "SOC 2 Implementation Guide"
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
                  /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-purple-200 dark:border-purple-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "SOC 2 Compliance Center" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "Type II Ready" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-purple-600" }),
                          /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-purple-700", children: [
                            complianceScore,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "SOC 2 Score" }),
                        /* @__PURE__ */ jsx("div", { className: "w-full bg-purple-200 rounded-full h-2 mt-2", children: /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "bg-purple-600 h-2 rounded-full",
                            initial: { width: 0 },
                            animate: { width: isVisible ? `${complianceScore}%` : 0 },
                            transition: { duration: 1.5, delay: 0.5 }
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-blue-700", children: "5/5" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Trust Criteria" }),
                        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 mt-2", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600" }, i)) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Automated Control Testing aktiv" })
                        ] }),
                        /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: "Live" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsx(FileCheck, { className: "h-4 w-4 text-blue-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Evidence Collection läuft" })
                        ] }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "24/7" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-purple-500 animate-bounce", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-purple-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Audit-Ready" })
                  ] }) })
                ]
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "SOC 2 Compliance Herausforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Warum SOC 2 für SaaS-Unternehmen kritisch, aber komplex ist" })
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
                  /* @__PURE__ */ jsx(point.icon, { className: "h-6 w-6 text-purple-600" }),
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "SOC 2 Trust Service Criteria" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Comprehensive Coverage aller 5 Trust Service Criteria" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: trustCriteria.map((criteria, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6 items-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg", children: /* @__PURE__ */ jsx(criteria.icon, { className: "h-6 w-6 text-purple-600" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: criteria.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: criteria.description })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: criteria.controls.map((control, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: control }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                    /* @__PURE__ */ jsx("span", { children: "Coverage" }),
                    /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                      criteria.coverage,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "bg-purple-600 h-2 rounded-full",
                      initial: { width: 0 },
                      whileInView: { width: `${criteria.coverage}%` },
                      transition: { duration: 1, delay: 0.2 },
                      viewport: { once: true }
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "Implemented" }) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "SOC 2 Implementation Lösungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Strukturierte Umsetzung für nachhaltige Compliance" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: solutions.map((solution, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "inline-flex p-3 rounded-xl bg-gradient-to-r text-white",
                  solution.color
                ), children: /* @__PURE__ */ jsx(solution.icon, { className: "h-6 w-6" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: solution.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: solution.description }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2 pt-2", children: solution.features.map((feature, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: feature })
                ] }, i)) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "SOC 2 Success Stories" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Typische Anwendungsfälle und Implementierungserfolge" })
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
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: useCase.title }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Challenge:" }),
                    " ",
                    useCase.challenge
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-purple-700", children: "Solution:" }),
                  " ",
                  useCase.solution
                ] }) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-green-700", children: useCase.outcome }) }),
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
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Business Impact von SOC 2 Compliance" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Messbare Vorteile für Ihr SaaS-Unternehmen" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits.map((benefit, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsxs(Card, { className: "p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105", children: [
                /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-bold text-purple-600 mb-2", children: benefit.metric }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: benefit.title }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: benefit.description }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-purple-600 font-medium", children: benefit.detail })
              ] })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-purple-600 to-blue-600", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center text-white", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Starten Sie Ihre SOC 2 Journey heute" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90", children: "Gewinnen Sie Kundenvertrauen mit professioneller SOC 2 Type II Implementierung. Unsere Experten begleiten Sie von der ersten Planung bis zur erfolgreichen Zertifizierung." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&framework=soc2", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-purple-600 hover:bg-gray-100 group",
                    children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                      "SOC 2 Readiness Assessment buchen",
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
                      "Expertenberatung anfordern"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-2 text-white/80", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Professionelle SOC 2 Compliance für SaaS-Unternehmen" })
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
  Soc2Compliance as default
};
