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
import { Shield, CheckCircle2, PlayCircle, ArrowRight, Download, Database, Star, UserCheck, Globe, Eye, Users, ShieldCheck, FileCheck, Calendar, Phone, Sparkles } from "lucide-react";
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
const Iso27018Compliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(95);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ISO 27018 Privacy Zertifizierung",
    "description": "ISO 27018 für Cloud-Datenschutz: Privacy Controls für personenbezogene Daten in der Cloud",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Cloud Privacy Certification",
    "areaServed": "DE"
  };
  const painPoints = [
    {
      icon: Database,
      title: "PII-Schutz in Public Cloud Services",
      description: "Personenbezogene Daten (PII) in öffentlichen Cloud-Umgebungen DSGVO-konform und nach ISO 27018 Standard schützen.",
      impact: "Kritisch",
      example: "Customer Data in SaaS, Employee Records in HR Cloud, Patient Data in Health Cloud"
    },
    {
      icon: UserCheck,
      title: "Cloud Processor Accountability",
      description: "Nachweis der Verantwortlichkeit und Compliance von Cloud-Service-Providern als Auftragsverarbeiter.",
      impact: "Kritisch",
      example: "Data Processing Agreements, Subprocessor Management, Audit Rights Implementation"
    },
    {
      icon: Globe,
      title: "Cross-Border Data Transfer Compliance",
      description: "Internationale Datenübertragungen in Cloud-Umgebungen unter Einhaltung verschiedener Datenschutzgesetze.",
      impact: "Hoch",
      example: "EU-US Data Transfers, Data Localization Requirements, Regional Privacy Laws"
    },
    {
      icon: Eye,
      title: "Transparenz und Data Subject Rights",
      description: "Vollständige Transparenz über Datenverarbeitung und Umsetzung von Betroffenenrechten in Cloud-Services.",
      impact: "Hoch",
      example: "Data Subject Access Requests, Right to Erasure, Data Portability in Cloud"
    }
  ];
  const solutions = [
    {
      title: "PII Protection Framework",
      description: "Umfassender Schutz personenbezogener Daten in Cloud-Umgebungen nach ISO 27018",
      features: [
        "Cloud PII Classification und Inventory",
        "Purpose-Bound Data Processing Controls",
        "Automated PII Discovery und Monitoring",
        "Cloud Data Minimization Strategies"
      ],
      icon: Shield,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Cloud Privacy Governance",
      description: "Strukturierte Privacy-Governance für Cloud-Service-Provider und -Nutzer",
      features: [
        "Data Processing Agreement Management",
        "Subprocessor Compliance Monitoring",
        "Privacy Impact Assessment Automation",
        "Consent Management in Cloud Services"
      ],
      icon: FileCheck,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Transparent Cloud Operations",
      description: "Vollständige Transparenz und Kontrolle über Datenverarbeitung in der Cloud",
      features: [
        "Data Processing Transparency Dashboard",
        "Automated Data Subject Rights Fulfillment",
        "Cloud Data Lineage Tracking",
        "Privacy-by-Design Cloud Architecture"
      ],
      icon: Eye,
      color: "from-purple-500 to-violet-600"
    }
  ];
  const useCases = [
    {
      title: "SaaS Provider ISO 27018 Certification",
      challenge: "SaaS-Anbieter benötigt ISO 27018 Zertifizierung für Enterprise-Kunden in der EU",
      solution: "Comprehensive PII Protection + Privacy Governance + Transparency Controls",
      outcome: "Erfolgreiche ISO 27018 Zertifizierung und 60% Umsatzsteigerung in EU-Markt",
      timeline: "8 Monate",
      complexity: "Hoch"
    },
    {
      title: "Global Cloud Migration mit PII-Schutz",
      challenge: "Internationale Konzern-Migration zu Multi-Cloud mit strikten Datenschutzanforderungen",
      solution: "Cross-Border Compliance Framework + Data Residency Controls + PII Governance",
      outcome: "DSGVO-konforme Global Cloud mit 99.95% Data Protection Compliance",
      timeline: "12 Monate",
      complexity: "Hoch"
    },
    {
      title: "Healthcare Cloud Privacy Compliance",
      challenge: "Gesundheitsdatenverarbeitung in der Cloud unter DSGVO und spezifischen Health Regulations",
      solution: "Healthcare PII Protection + Medical Data Governance + Patient Rights Management",
      outcome: "Vollständige Compliance mit 40% Effizienzsteigerung bei Patientenanfragen",
      timeline: "6 Monate",
      complexity: "Mittel"
    }
  ];
  const privacyControls = [
    {
      name: "PII Identification & Classification",
      description: "Systematische Identifikation und Klassifikation personenbezogener Daten",
      coverage: 98,
      controls: ["Data Discovery", "PII Classification", "Sensitive Data Tagging"],
      icon: Database,
      detail: "Automatisierte Erkennung und Kategorisierung aller PII-Datentypen in Cloud-Umgebungen"
    },
    {
      name: "Consent & Purpose Management",
      description: "Verwaltung von Einwilligungen und zweckgebundener Datenverarbeitung",
      coverage: 95,
      controls: ["Consent Capture", "Purpose Binding", "Consent Withdrawal"],
      icon: UserCheck,
      detail: "Granulare Kontrolle über Einwilligungen und deren Durchsetzung in Cloud-Services"
    },
    {
      name: "Data Subject Rights Implementation",
      description: "Umsetzung aller Betroffenenrechte in Cloud-Umgebungen",
      coverage: 92,
      controls: ["Access Rights", "Rectification", "Erasure", "Portability"],
      icon: Users,
      detail: "Automatisierte Bearbeitung von Auskunfts-, Berichtigungs- und Löschungsanfragen"
    },
    {
      name: "Cross-Border Transfer Controls",
      description: "Sichere internationale Datenübertragungen mit Rechtssicherheit",
      coverage: 94,
      controls: ["Transfer Impact Assessment", "Adequacy Decisions", "SCCs"],
      icon: Globe,
      detail: "Compliance mit verschiedenen Datenschutzgesetzen bei internationalen Transfers"
    },
    {
      name: "Processor Accountability",
      description: "Nachweis der Verantwortlichkeit und Compliance von Auftragsverarbeitern",
      coverage: 96,
      controls: ["DPA Management", "Subprocessor Oversight", "Audit Rights"],
      icon: ShieldCheck,
      detail: "Umfassende Dokumentation und Überwachung der Datenverarbeitung durch Dritte"
    }
  ];
  const benefits = [
    {
      title: "Regulatory Compliance",
      description: "Vollständige DSGVO und internationale Datenschutz-Compliance",
      metric: "100%",
      detail: "DSGVO Article 28 Compliance für Cloud Processors"
    },
    {
      title: "Risk Mitigation",
      description: "Drastische Reduktion von Datenschutz- und Compliance-Risiken",
      metric: "90%",
      detail: "weniger datenschutzrelevante Sicherheitsvorfälle"
    },
    {
      title: "Operational Efficiency",
      description: "Automatisierte Privacy-Prozesse und Betroffenenrechte",
      metric: "70%",
      detail: "schnellere Bearbeitung von Data Subject Requests"
    },
    {
      title: "Market Access",
      description: "Erschließung neuer Märkte durch Privacy-Compliance",
      metric: "+65%",
      detail: "Umsatzsteigerung durch Enterprise-Kunden-Akquisition"
    }
  ];
  const complianceAreas = [
    { name: "PII Protection Controls", coverage: 98, area: "Data Protection" },
    { name: "Consent Management", coverage: 95, area: "Privacy Rights" },
    { name: "Cross-Border Transfers", coverage: 94, area: "International Compliance" },
    { name: "Processor Accountability", coverage: 96, area: "Third-Party Risk" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "ISO 27018 – Cloud-Datenschutz für personenbezogene Daten",
        description: "ISO 27018 Privacy-Zertifizierung: PII-Schutz in der Cloud nach DSGVO. ✓ Public Cloud Privacy ✓ Compliance. Jetzt zertifizieren!",
        canonical: "/iso-27018",
        keywords: "ISO 27018, Cloud Privacy, Cloud Datenschutz, PII Protection, ISO 27018 Zertifizierung",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
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
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "ISO 27018 Compliance" })
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight", children: [
                    "ISO 27018 Cloud Privacy",
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block mt-2", children: "Protection" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Schützen Sie personenbezogene Daten in der Cloud mit ISO 27018. DSGVO-konforme Cloud-Privacy-Governance für Public Cloud Services." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "ISO 27018 PII Protection Framework" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "DSGVO Article 28 Cloud Processor Compliance" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Automated Data Subject Rights Management" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
                    /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&framework=iso27018", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90 group", children: [
                      /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                      "Cloud Privacy Assessment",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ] }) }),
                    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "ISO 27018 Implementation Guide"
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
                  /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-green-200 dark:border-green-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Cloud Privacy Center" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "ISO 27018 Certified" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-green-600" }),
                          /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-green-700", children: [
                            complianceScore,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Privacy Score" }),
                        /* @__PURE__ */ jsx("div", { className: "w-full bg-green-200 rounded-full h-2 mt-2", children: /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "bg-green-600 h-2 rounded-full",
                            initial: { width: 0 },
                            animate: { width: isVisible ? `${complianceScore}%` : 0 },
                            transition: { duration: 1.5, delay: 0.5 }
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-950/20 dark:to-emerald-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-emerald-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-emerald-700", children: "12.3M" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "PII Records Protected" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-emerald-600", children: "DSGVO Compliant" })
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
                          className: "bg-green-600 h-2 rounded-full",
                          initial: { width: 0 },
                          animate: { width: isVisible ? `${area.coverage}%` : 0 },
                          transition: { duration: 1, delay: 0.3 + index * 0.1 }
                        }
                      ) })
                    ] }, index)) })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-green-500 animate-bounce", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Privacy-Ready" })
                  ] }) })
                ]
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Cloud Privacy Herausforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Warum personenbezogener Datenschutz in Cloud-Umgebungen spezielle Aufmerksamkeit erfordert" })
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
                  /* @__PURE__ */ jsx(point.icon, { className: "h-6 w-6 text-green-600" }),
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "ISO 27018 Privacy Controls" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Comprehensive PII Protection Controls für Cloud-Umgebungen" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: privacyControls.map((control, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-8 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6 items-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-green-100 dark:bg-green-900/30 rounded-lg", children: /* @__PURE__ */ jsx(control.icon, { className: "h-6 w-6 text-green-600" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: control.name }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: control.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed", children: control.detail })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: control.controls.map((controlItem, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: controlItem }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Implementation" }),
                    /* @__PURE__ */ jsxs("span", { className: "font-semibold text-green-600", children: [
                      control.coverage,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full",
                      initial: { width: 0 },
                      whileInView: { width: `${control.coverage}%` },
                      transition: { duration: 1.2, delay: 0.3 },
                      viewport: { once: true }
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-700 text-sm px-4 py-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }),
                  "Active"
                ] }) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Cloud Privacy Implementation" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Strukturierte Umsetzung für DSGVO-konforme Cloud-Services" })
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
        /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Cloud Privacy Success Stories" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Typische Anwendungsfälle und Implementierungserfolge" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: useCases.map((useCase, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6 hover:shadow-lg transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6 items-center", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2 text-green-700", children: useCase.title }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Challenge:" }),
                    " ",
                    useCase.challenge
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-green-700", children: "Solution:" }),
                  " ",
                  useCase.solution
                ] }) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-emerald-700", children: useCase.outcome }) }),
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
                /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8 text-green-600 mx-auto" }) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Business Impact von ISO 27018" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Messbare Vorteile für Ihre Cloud-Privacy-Governance" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits.map((benefit, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsxs(Card, { className: "p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105", children: [
                /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-bold text-green-600 mb-2", children: benefit.metric }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: benefit.title }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: benefit.description }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 font-medium", children: benefit.detail })
              ] })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-green-600 to-emerald-600", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center text-white", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "DSGVO-konforme Cloud-Privacy mit ISO 27018" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90", children: "Schützen Sie personenbezogene Daten in Public Cloud Services nach höchsten Standards. Unsere Privacy-Experten implementieren ISO 27018 für vollständige DSGVO-Compliance." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&framework=iso27018", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-green-600 hover:bg-gray-100 group",
                    children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                      "Cloud Privacy Assessment buchen",
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
                      "Privacy-Expertenberatung anfordern"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-2 text-white/80", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Professionelle ISO 27018 Privacy-Expertise für Cloud-Service-Provider" })
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
  Iso27018Compliance as default
};
