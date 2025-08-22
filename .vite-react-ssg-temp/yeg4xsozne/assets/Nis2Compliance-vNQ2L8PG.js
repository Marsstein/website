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
import { ShieldAlert, CheckCircle2, PlayCircle, ArrowRight, Download, Bot, Activity, Star, Target, Scale, Building2, Shield, AlertTriangle, Network, Users, Lock, Monitor, Calendar, Phone, Sparkles } from "lucide-react";
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
const Nis2Compliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(92);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "NIS-2 Compliance Service",
    "description": "NIS-2 Richtlinie Compliance: Cybersecurity für kritische Infrastrukturen",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Cybersecurity Compliance",
    "areaServed": "EU"
  };
  const painPoints = [
    {
      icon: Target,
      title: "Erweiterte Berichtspflichten",
      description: "NIS2 erweitert die Meldepflichten erheblich - Cybersicherheitsvorfälle müssen binnen 24h initial und binnen 72h detailliert gemeldet werden.",
      impact: "Kritisch",
      example: "Incident Detection, Automated Reporting, Stakeholder Communication, Regulatory Notifications"
    },
    {
      icon: Scale,
      title: "Drastisch erhöhte Bußgelder",
      description: "Sanktionen bis zu 10 Mio. € oder 2% des weltweiten Jahresumsatzes - deutlich höher als unter der ursprünglichen NIS-Richtlinie.",
      impact: "Kritisch",
      example: "Compliance Violations, Risk Assessment Failures, Inadequate Security Measures"
    },
    {
      icon: Building2,
      title: "Erweiterte Sektorabdeckung",
      description: "NIS2 erfasst deutlich mehr Unternehmen: Energie, Verkehr, Banken, Gesundheit, digitale Infrastruktur, öffentliche Verwaltung und mehr.",
      impact: "Hoch",
      example: "Critical Infrastructure, Essential Services, Important Entities, Digital Service Providers"
    },
    {
      icon: ShieldAlert,
      title: "Supply Chain Cybersecurity",
      description: "Neue Anforderungen an das Cybersicherheits-Risikomanagement der gesamten Lieferkette und Drittanbieter.",
      impact: "Hoch",
      example: "Vendor Risk Assessment, Third-Party Security, Supply Chain Mapping, Contractor Compliance"
    }
  ];
  const solutions = [
    {
      title: "KI-gestützte NIS2 Compliance",
      description: "Intelligente Automatisierung für kontinuierliche NIS2-Compliance und Risikomanagement",
      features: [
        "Automated Incident Detection & Reporting",
        "AI-Powered Risk Assessment",
        "Intelligent Compliance Monitoring",
        "Predictive Threat Analysis"
      ],
      icon: Bot,
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Legal Expert Integration",
      description: "Direkter Zugang zu spezialisierten NIS2-Rechtsexperten und Compliance-Beratern",
      features: [
        "NIS2 Legal Advisory Services",
        "Regulatory Change Management",
        "Incident Response Legal Support",
        "Compliance Documentation Review"
      ],
      icon: Scale,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Real-time Compliance Dashboard",
      description: "Umfassendes Echtzeit-Monitoring für alle NIS2-Anforderungen und Compliance-Status",
      features: [
        "Live Compliance Status Tracking",
        "Automated Regulatory Reporting",
        "Risk Heatmap Visualization",
        "Executive Compliance Summaries"
      ],
      icon: Monitor,
      color: "from-green-500 to-teal-600"
    }
  ];
  const useCases = [
    {
      title: "Kritische Infrastruktur - Energieversorger",
      challenge: "Großer Energieversorger muss NIS2-Compliance bis Oktober 2024 implementieren",
      solution: "AI-Powered Risk Management + Legal Expert Support + Automated Incident Reporting",
      outcome: "Vollständige NIS2-Compliance mit 90% Automatisierung der Berichtsprozesse",
      timeline: "6 Monate",
      complexity: "Hoch"
    },
    {
      title: "Digitaler Dienstleister - Cloud Provider",
      challenge: 'Cloud-Service-Provider fällt unter neue NIS2-Kategorisierung als "Important Entity"',
      solution: "Supply Chain Risk Management + Continuous Monitoring + Legal Compliance Framework",
      outcome: "Erfolgreiche Registrierung und laufende Compliance mit 24/7 Monitoring",
      timeline: "4 Monate",
      complexity: "Mittel"
    },
    {
      title: "Gesundheitswesen - Krankenhaus-Kette",
      challenge: "Private Krankenhaus-Kette benötigt NIS2-Compliance für kritische Gesundheitsdienste",
      solution: "Healthcare-Specific Risk Assessment + Incident Response + Regulatory Reporting",
      outcome: "KRITIS-konforme Cybersecurity mit automatisierter NIS2-Berichterstattung",
      timeline: "8 Monate",
      complexity: "Hoch"
    }
  ];
  const nis2Requirements = [
    {
      name: "Cybersicherheits-Risikomanagement",
      description: "Umfassende Cybersicherheitsmaßnahmen und Risikomanagement-Verfahren",
      coverage: 95,
      requirements: ["Risk Assessment", "Security Policies", "Business Continuity", "Crisis Management"],
      icon: Shield,
      detail: "Systematische Identifikation, Bewertung und Behandlung von Cybersicherheitsrisiken"
    },
    {
      name: "Incident Response & Reporting",
      description: "Strukturierte Behandlung und Meldung von Cybersicherheitsvorfällen",
      coverage: 92,
      requirements: ["24h Initial Report", "72h Detailed Report", "Impact Assessment", "Stakeholder Communication"],
      icon: AlertTriangle,
      detail: "Schnelle Erkennung, Bewertung und Meldung von Cybersicherheitsvorfällen"
    },
    {
      name: "Supply Chain Security",
      description: "Cybersicherheit der Lieferkette und Risikobewertung von Drittanbietern",
      coverage: 88,
      requirements: ["Vendor Risk Assessment", "Third-Party Security", "Contract Security", "Continuous Monitoring"],
      icon: Network,
      detail: "Umfassende Sicherheitsbewertung und -überwachung der gesamten Lieferkette"
    },
    {
      name: "Governance & Oversight",
      description: "Unternehmensführung und Aufsicht über Cybersicherheitsmaßnahmen",
      coverage: 94,
      requirements: ["Management Accountability", "Security Training", "Regular Audits", "Continuous Improvement"],
      icon: Users,
      detail: "Klare Verantwortlichkeiten und Governance-Strukturen für Cybersicherheit"
    },
    {
      name: "Technical Security Measures",
      description: "Technische Cybersicherheitsmaßnahmen und Schutzkontrollen",
      coverage: 90,
      requirements: ["Access Controls", "Encryption", "Network Security", "Endpoint Protection"],
      icon: Lock,
      detail: "Implementierung und Wartung technischer Sicherheitsmaßnahmen"
    }
  ];
  const benefits = [
    {
      title: "Regulatory Compliance",
      description: "Vollständige NIS2-Compliance mit rechtlicher Sicherheit",
      metric: "100%",
      detail: "NIS2-konforme Implementierung aller Anforderungen"
    },
    {
      title: "Automated Reporting",
      description: "Automatisierte Incident-Meldungen und Compliance-Reports",
      metric: "90%",
      detail: "Reduktion manueller Berichterstattungsaufwände"
    },
    {
      title: "Risk Reduction",
      description: "Drastische Reduktion von Cybersecurity-Risiken",
      metric: "85%",
      detail: "weniger kritische Sicherheitsvorfälle durch Prävention"
    },
    {
      title: "Cost Savings",
      description: "Kostenersparnis durch effiziente Compliance-Prozesse",
      metric: "60%",
      detail: "Reduktion von Compliance-Kosten durch Automatisierung"
    }
  ];
  const entityTypes = [
    {
      type: "Essential Entities",
      description: "Kritische Einrichtungen mit höchsten Sicherheitsanforderungen",
      sectors: ["Energie", "Verkehr", "Banken", "Finanzmarktinfrastrukturen", "Gesundheitswesen", "Trinkwasser", "Abwasser", "Digitale Infrastruktur", "ICT Service Management", "Weltraum"],
      requirements: "Strengste Cybersicherheitsanforderungen und Aufsicht",
      icon: ShieldAlert,
      color: "from-red-500 to-red-600"
    },
    {
      type: "Important Entities",
      description: "Wichtige Einrichtungen mit erheblichen Sicherheitsanforderungen",
      sectors: ["Post und Kurierdienste", "Abfallwirtschaft", "Chemische Industrie", "Lebensmittelproduktion", "Verarbeitendes Gewerbe", "Digitale Anbieter", "Forschungseinrichtungen"],
      requirements: "Signifikante Cybersicherheitsmaßnahmen und Berichtspflichten",
      icon: Shield,
      color: "from-orange-500 to-orange-600"
    }
  ];
  const complianceAreas = [
    { name: "Risk Management Implementation", coverage: 95, area: "Governance" },
    { name: "Incident Response Procedures", coverage: 92, area: "Operations" },
    { name: "Supply Chain Security", coverage: 88, area: "Third-Party Risk" },
    { name: "Technical Security Controls", coverage: 90, area: "Technology" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "NIS-2 Compliance – Cybersecurity-Richtlinie umsetzen",
        description: "NIS-2 Richtlinie sicher erfüllen: Risikomanagement, Meldepflichten & Sicherheitsmaßnahmen. ✓ KRITIS-konform ✓ Automatisiert. Jetzt beraten lassen!",
        canonical: "/nis2",
        keywords: "NIS-2, NIS2 Richtlinie, Cybersecurity Compliance, KRITIS, Network Information Security",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
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
                    /* @__PURE__ */ jsx(ShieldAlert, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "NIS2-Richtlinie" })
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight", children: [
                    "NIS2 Compliance",
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent block mt-2", children: "mit KI & Legal Experts" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Meistern Sie die neue EU NIS2-Richtlinie mit unserer KI-gestützten SaaS-Lösung und direktem Zugang zu spezialisierten Rechtsexperten." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "KI-automatisierte Incident Detection & Reporting" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "24/7 Legal Expert Support für NIS2-Compliance" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Real-time Compliance Dashboard & Monitoring" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
                    /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&regulation=nis2", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 group", children: [
                      /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                      "NIS2 Readiness Assessment",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ] }) }),
                    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "NIS2 Implementation Guide"
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
                      /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "NIS2 Compliance Center" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "Ready for Oct 2024" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(ShieldAlert, { className: "h-5 w-5 text-purple-600" }),
                          /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-purple-700", children: [
                            complianceScore,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "NIS2 Score" }),
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
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/20 dark:to-indigo-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Bot, { className: "h-5 w-5 text-indigo-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-indigo-700", children: "24/7" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "AI Monitoring" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
                          /* @__PURE__ */ jsx(Activity, { className: "h-3 w-3 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-indigo-600", children: "Active" })
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
                          className: "bg-purple-600 h-2 rounded-full",
                          initial: { width: 0 },
                          animate: { width: isVisible ? `${area.coverage}%` : 0 },
                          transition: { duration: 1, delay: 0.3 + index * 0.1 }
                        }
                      ) })
                    ] }, index)) })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-purple-500 animate-bounce", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-purple-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "AI-Powered" })
                  ] }) })
                ]
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "NIS2 Compliance Herausforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Warum die neue NIS2-Richtlinie erhebliche Auswirkungen auf Unternehmen hat" })
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "NIS2 Anwendungsbereich" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Welche Unternehmen sind von der NIS2-Richtlinie betroffen?" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: entityTypes.map((entity, index) => /* @__PURE__ */ jsx(
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
                    entity.color
                  ), children: /* @__PURE__ */ jsx(entity.icon, { className: "h-6 w-6" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: entity.type }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: entity.description })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-2", children: "Betroffene Sektoren:" }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: entity.sectors.map((sector, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: sector }, i)) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: entity.requirements }) })
                ] })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "NIS2 Kernanforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Die fünf zentralen Säulen der NIS2-Compliance" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: nis2Requirements.map((requirement, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6 hover:shadow-lg transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6 items-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg", children: /* @__PURE__ */ jsx(requirement.icon, { className: "h-6 w-6 text-purple-600" }) }),
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
                      className: "bg-purple-600 h-2 rounded-full",
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "KI-gestützte NIS2 SaaS-Lösung" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Innovative Technologie kombiniert mit Rechtsexpertise für nachhaltige Compliance" })
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "NIS2 Success Stories" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Erfolgreiche NIS2-Implementierungen in verschiedenen Sektoren" })
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
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2 text-purple-700", children: useCase.title }),
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
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-indigo-700", children: useCase.outcome }) }),
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
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Business Impact von NIS2 Compliance" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Messbare Vorteile unserer KI-gestützten NIS2-Lösung" })
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
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-purple-600 to-indigo-600", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center text-white", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Bereit für NIS2? Jetzt starten!" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90", children: "Implementieren Sie die NIS2-Richtlinie mit unserer KI-gestützten SaaS-Lösung und profitieren Sie von direktem Legal Expert Support. Deadline: Oktober 2024." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&regulation=nis2", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-purple-600 hover:bg-gray-100 group",
                    children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                      "NIS2 Readiness Assessment buchen",
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
                      "Legal Expert Beratung"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-2 text-white/80", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Über 50 Unternehmen nutzen bereits unsere KI-gestützte NIS2 Compliance-Lösung" })
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
  Nis2Compliance as default
};
