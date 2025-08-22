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
import { Cloud, CheckCircle2, PlayCircle, ArrowRight, Download, Shield, Activity, FileCheck, Star, Database, Users, AlertTriangle, Lock, Building2, Bot, Calendar, Phone, Sparkles } from "lucide-react";
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
const Iso27017Compliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(91);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ISO 27017 Cloud Security Zertifizierung",
    "description": "ISO 27017 für Cloud-Security: Spezifische Sicherheitskontrollen für Cloud-Services",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Cloud Security Certification",
    "areaServed": "DE"
  };
  const painPoints = [
    {
      icon: Cloud,
      title: "Multi-Cloud Security Governance",
      description: "Einheitliche Sicherheitsstandards über verschiedene Cloud-Provider hinweg implementieren und überwachen.",
      impact: "Kritisch",
      example: "AWS, Azure, GCP Security Posture Management, Cross-Cloud Policy Enforcement"
    },
    {
      icon: Database,
      title: "Cloud Data Protection & Residency",
      description: "Datenschutz und -souveränität in hybriden und Multi-Cloud-Umgebungen gewährleisten.",
      impact: "Kritisch",
      example: "Data Sovereignty, Cross-Border Cloud Transfers, Cloud Encryption Management"
    },
    {
      icon: Users,
      title: "Cloud Identity & Access Management",
      description: "Sichere Identitäts- und Zugriffsverwaltung für Cloud-Services und geteilte Verantwortungsmodelle.",
      impact: "Hoch",
      example: "Multi-Cloud SSO, Privileged Access Management, Cloud Service Accounts"
    },
    {
      icon: AlertTriangle,
      title: "Cloud Vendor Risk Management",
      description: "Bewertung und Management von Sicherheitsrisiken bei Cloud-Service-Providern.",
      impact: "Hoch",
      example: "Vendor Security Assessments, SLA Compliance Monitoring, Exit Strategy Planning"
    }
  ];
  const solutions = [
    {
      title: "Cloud Security Architecture",
      description: "Umfassende Cloud-Sicherheitsarchitektur nach ISO 27017 Best Practices",
      features: [
        "Multi-Cloud Security Framework Design",
        "Cloud-Native Security Controls Implementation",
        "Shared Responsibility Model Governance",
        "Cloud Security Posture Management (CSPM)"
      ],
      icon: Cloud,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Automated Cloud Compliance",
      description: "Kontinuierliche Überwachung und Compliance-Validierung in Cloud-Umgebungen",
      features: [
        "Real-time Cloud Security Monitoring",
        "Automated Compliance Reporting",
        "Cloud Configuration Drift Detection",
        "Policy-as-Code Implementation"
      ],
      icon: Bot,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Cloud Risk & Governance",
      description: "Strategisches Cloud-Risk-Management und Governance-Framework",
      features: [
        "Cloud Risk Assessment Methodologies",
        "Vendor Management Program",
        "Cloud Security Incident Response",
        "Multi-Cloud Governance Framework"
      ],
      icon: Shield,
      color: "from-purple-500 to-indigo-600"
    }
  ];
  const useCases = [
    {
      title: "Enterprise Cloud Migration",
      challenge: "Sichere Migration kritischer Workloads in Multi-Cloud-Umgebung",
      solution: "ISO 27017 Migration Framework + Cloud Security Assessment + Risk Management",
      outcome: "Erfolgreiche Migration mit 99.9% Uptime und vollständiger Compliance",
      timeline: "6 Monate",
      complexity: "Hoch"
    },
    {
      title: "FinTech Cloud-First Strategy",
      challenge: "Regulatorische Compliance bei vollständiger Cloud-Transformation",
      solution: "Cloud-Native Security Architecture + Automated Compliance + Data Residency",
      outcome: "40% Kostenreduktion bei erhöhter Sicherheit und Compliance",
      timeline: "9 Monate",
      complexity: "Hoch"
    },
    {
      title: "Global SaaS Platform Security",
      challenge: "Multi-Region Cloud Security für internationale SaaS-Plattform",
      solution: "Global Cloud Security Framework + Regional Compliance + Vendor Management",
      outcome: "Globale Expansion in 15 Länder mit einheitlicher Security Governance",
      timeline: "4 Monate",
      complexity: "Mittel"
    }
  ];
  const cloudControls = [
    {
      name: "Cloud Architecture Security",
      description: "Sichere Design-Prinzipien für Cloud-Infrastrukturen",
      coverage: 94,
      controls: ["Secure Cloud Design", "Network Segmentation", "Data Flow Controls"],
      icon: Cloud
    },
    {
      name: "Identity & Access Management",
      description: "Cloud-spezifische IAM-Controls und Privileged Access",
      coverage: 97,
      controls: ["Multi-Cloud SSO", "PAM", "Service Account Management"],
      icon: Users
    },
    {
      name: "Data Protection in Cloud",
      description: "Verschlüsselung und Datenschutz in Cloud-Umgebungen",
      coverage: 93,
      controls: ["Encryption at Rest/Transit", "Key Management", "Data Residency"],
      icon: Lock
    },
    {
      name: "Cloud Operations Security",
      description: "Sichere Cloud-Operations und Monitoring",
      coverage: 91,
      controls: ["Security Monitoring", "Incident Response", "Vulnerability Management"],
      icon: Activity
    },
    {
      name: "Vendor & Supplier Management",
      description: "Cloud-Provider-Risikomanagement und Vertragsgestaltung",
      coverage: 89,
      controls: ["Vendor Assessments", "SLA Monitoring", "Exit Strategies"],
      icon: Building2
    }
  ];
  const benefits = [
    {
      title: "Cloud Security Excellence",
      description: "Branchenführende Cloud-Sicherheitsstandards",
      metric: "99.9%",
      detail: "Cloud Service Availability mit Security"
    },
    {
      title: "Compliance Automatisierung",
      description: "Kontinuierliche Compliance-Überwachung",
      metric: "75%",
      detail: "weniger manuelle Compliance-Audits"
    },
    {
      title: "Multi-Cloud Effizienz",
      description: "Optimierte Multi-Cloud-Operations",
      metric: "50%",
      detail: "schnellere Cloud-Service-Onboardings"
    },
    {
      title: "Risk Mitigation",
      description: "Proaktives Cloud-Risikomanagement",
      metric: "85%",
      detail: "Reduktion cloud-spezifischer Sicherheitsvorfälle"
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "ISO 27017 – Cloud-Security-Standard zertifizieren",
        description: "ISO 27017 Zertifizierung für Cloud-Services: Spezifische Controls für AWS, Azure & GCP. ✓ Multi-Cloud ✓ Compliance. Jetzt beraten lassen!",
        canonical: "/iso-27017",
        keywords: "ISO 27017, Cloud Security, Cloud Zertifizierung, ISO 27017 Controls, Cloud Compliance",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
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
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400", children: [
                    /* @__PURE__ */ jsx(Cloud, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "ISO 27017 Compliance" })
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight", children: [
                    "ISO 27017 Cloud Security",
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block mt-2", children: "Compliance" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Sichere Cloud-Transformation mit ISO 27017. Implementieren Sie Cloud-spezifische Sicherheitskontrollen für Multi-Cloud-Umgebungen." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "ISO 27017 Cloud Security Framework" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Multi-Cloud Security Governance" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Automated Cloud Compliance Monitoring" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
                    /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&framework=iso27017", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-90 group", children: [
                      /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                      "Cloud Security Assessment",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ] }) }),
                    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "ISO 27017 Implementation Guide"
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
                  /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Cloud Security Center" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "ISO 27017 Compliant" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Cloud, { className: "h-5 w-5 text-blue-600" }),
                          /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-blue-700", children: [
                            complianceScore,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Cloud Security Score" }),
                        /* @__PURE__ */ jsx("div", { className: "w-full bg-blue-200 rounded-full h-2 mt-2", children: /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "bg-blue-600 h-2 rounded-full",
                            initial: { width: 0 },
                            animate: { width: isVisible ? `${complianceScore}%` : 0 },
                            transition: { duration: 1.5, delay: 0.5 }
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/20 dark:to-cyan-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-cyan-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-cyan-700", children: "5/5" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Control Domains" }),
                        /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 mt-2", children: [1, 2, 3, 4, 5].map((i) => /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600" }, i)) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Multi-Cloud Monitoring aktiv" })
                        ] }),
                        /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: "24/7" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsx(FileCheck, { className: "h-4 w-4 text-blue-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Cloud Compliance Check läuft" })
                        ] }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-500", children: "Live" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-blue-500 animate-bounce", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-blue-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Cloud-Ready" })
                  ] }) })
                ]
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Cloud Security Herausforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Warum Cloud-spezifische Sicherheitsstandards kritisch für moderne Unternehmen sind" })
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
                  /* @__PURE__ */ jsx(point.icon, { className: "h-6 w-6 text-blue-600" }),
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "ISO 27017 Cloud Security Controls" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Comprehensive Coverage aller cloud-spezifischen Sicherheitskontrollen" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: cloudControls.map((control, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6 items-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg", children: /* @__PURE__ */ jsx(control.icon, { className: "h-6 w-6 text-blue-600" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: control.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: control.description })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: control.controls.map((controlItem, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: controlItem }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                    /* @__PURE__ */ jsx("span", { children: "Coverage" }),
                    /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                      control.coverage,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "bg-blue-600 h-2 rounded-full",
                      initial: { width: 0 },
                      whileInView: { width: `${control.coverage}%` },
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Cloud Security Implementation" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Strukturierte Umsetzung für sichere Cloud-Transformation" })
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Cloud Security Success Stories" }),
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
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-blue-700", children: "Solution:" }),
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
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Business Impact von ISO 27017" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Messbare Vorteile für Ihre Cloud-Transformation" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits.map((benefit, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsxs(Card, { className: "p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105", children: [
                /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-bold text-blue-600 mb-2", children: benefit.metric }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: benefit.title }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: benefit.description }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-600 font-medium", children: benefit.detail })
              ] })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-blue-600 to-cyan-600", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center text-white", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Sichere Cloud-Transformation mit ISO 27017" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90", children: "Implementieren Sie cloud-spezifische Sicherheitsstandards für Multi-Cloud-Umgebungen. Unsere Experten begleiten Sie zur ISO 27017-konformen Cloud-Architektur." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&framework=iso27017", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-blue-600 hover:bg-gray-100 group",
                    children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                      "Cloud Security Assessment buchen",
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
                      "Cloud-Expertenberatung anfordern"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-2 text-white/80", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Professionelle ISO 27017 Cloud Security Expertise für Unternehmen" })
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
  Iso27017Compliance as default
};
