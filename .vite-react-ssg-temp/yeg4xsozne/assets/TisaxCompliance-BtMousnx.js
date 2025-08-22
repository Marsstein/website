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
import { Car, CheckCircle2, PlayCircle, ArrowRight, Download, Award, Star, FileX, Network, Building2, Shield, ShieldCheck, ShieldAlert, Lock, Factory, Truck, Calendar, Phone, Sparkles } from "lucide-react";
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
const TisaxCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(88);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "TISAX Zertifizierung",
    "description": "TISAX für die Automobilindustrie: Informationssicherheit nach VDA ISA",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Automotive Security Certification",
    "areaServed": "DE"
  };
  const painPoints = [
    {
      icon: Car,
      title: "Automotive Supply Chain Security",
      description: "TISAX®-konforme Sicherheit für die komplexe Automotive-Lieferkette mit hunderten von Zulieferern und Partnern.",
      impact: "Kritisch",
      example: "OEM-Supplier Integration, Tier-1/2/3 Supplier Management, Connected Car Data Protection"
    },
    {
      icon: FileX,
      title: "Vertrauliche Automotive-Daten",
      description: "Schutz hochsensibler Fahrzeugdaten, Entwicklungsinformationen und Produktionsgeheimnisse nach VDA ISA Standards.",
      impact: "Kritisch",
      example: "Vehicle Development Data, Production Processes, Autonomous Driving Algorithms, Battery Technology"
    },
    {
      icon: Network,
      title: "Connected Vehicle Cybersecurity",
      description: "Cybersecurity für vernetzte Fahrzeuge, V2X-Kommunikation und Over-the-Air-Updates nach ISO/SAE 21434.",
      impact: "Hoch",
      example: "V2V/V2I Communication, OTA Update Security, In-Vehicle Network Security, Telematics Protection"
    },
    {
      icon: Building2,
      title: "Automotive Partnership Compliance",
      description: "TISAX®-Assessment und -Zertifizierung für Geschäftsbeziehungen mit deutschen OEMs und Tier-1-Suppliern.",
      impact: "Hoch",
      example: "OEM Vendor Assessments, Joint Venture Security, Cross-Border Automotive Partnerships"
    }
  ];
  const solutions = [
    {
      title: "TISAX® Assessment & Certification",
      description: "Vollständige TISAX®-Vorbereitung und -Zertifizierung nach VDA ISA 6.0 Standards",
      features: [
        "VDA ISA 6.0 Gap Analysis und Remediation",
        "TISAX® Assessment Vorbereitung und Begleitung",
        "Automotive-spezifische Security Controls",
        "Supplier Onboarding und Integration"
      ],
      icon: Award,
      color: "from-red-500 to-orange-600"
    },
    {
      title: "Automotive Cybersecurity Framework",
      description: "ISO/SAE 21434-konforme Cybersecurity für Connected Vehicles und Automotive-Systeme",
      features: [
        "Vehicle Cybersecurity Management System (CSMS)",
        "Cybersecurity Risk Assessment für Fahrzeuge",
        "Secure Development Lifecycle für Automotive",
        "Incident Response für Connected Vehicles"
      ],
      icon: Car,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Supply Chain Security Governance",
      description: "Umfassende Security Governance für die Automotive-Lieferkette",
      features: [
        "Multi-Tier Supplier Risk Management",
        "Automotive Data Protection Framework",
        "Cross-Border Compliance Management",
        "Continuous Supplier Monitoring"
      ],
      icon: Truck,
      color: "from-green-500 to-teal-600"
    }
  ];
  const useCases = [
    {
      title: "Tier-1 Supplier TISAX® Zertifizierung",
      challenge: "Großer Automobilzulieferer benötigt TISAX® AL3 für OEM-Partnerschaften",
      solution: "Comprehensive VDA ISA Implementation + Security Controls + Assessment Preparation",
      outcome: "Erfolgreiche TISAX® AL3 Zertifizierung und Zugang zu 5 neuen OEM-Partnerschaften",
      timeline: "9 Monate",
      complexity: "Hoch"
    },
    {
      title: "Connected Car Platform Security",
      challenge: "Automotive Software-Anbieter entwickelt Connected Car Platform für deutsche OEMs",
      solution: "ISO/SAE 21434 CSMS + V2X Security + OTA Security + TISAX® Compliance",
      outcome: "Sichere Markteinführung mit 3 deutschen OEMs und 200k Connected Vehicles",
      timeline: "12 Monate",
      complexity: "Hoch"
    },
    {
      title: "Global Automotive Supplier Integration",
      challenge: "Internationale Expansion eines Automotive-Zulieferers in den deutschen Markt",
      solution: "TISAX® Assessment + Cross-Border Data Protection + German Automotive Compliance",
      outcome: "Erfolgreiche Integration in deutsche Automotive-Lieferkette mit 40% Umsatzsteigerung",
      timeline: "6 Monate",
      complexity: "Mittel"
    }
  ];
  const tisaxControls = [
    {
      name: "Information Security Management",
      description: "Umfassendes ISMS nach VDA ISA für Automotive-Umgebungen",
      coverage: 94,
      controls: ["Security Policies", "Risk Management", "Incident Management"],
      icon: Shield,
      detail: "Automotive-spezifisches Informationssicherheits-Management nach VDA ISA 6.0"
    },
    {
      name: "Supplier Relationship Security",
      description: "Sichere Integration und Management von Automotive-Suppliern",
      coverage: 91,
      controls: ["Supplier Assessment", "Contract Security", "Third-Party Risk"],
      icon: Building2,
      detail: "Multi-Tier Supplier Security Management und TISAX®-konforme Partnerschaften"
    },
    {
      name: "Data Protection & Confidentiality",
      description: "Schutz vertraulicher Automotive-Daten und Entwicklungsinformationen",
      coverage: 96,
      controls: ["Data Classification", "Access Controls", "Encryption"],
      icon: Lock,
      detail: "Höchste Vertraulichkeit für Fahrzeugentwicklung und Produktionsgeheimnisse"
    },
    {
      name: "Vehicle Cybersecurity",
      description: "Cybersecurity für Connected Vehicles nach ISO/SAE 21434",
      coverage: 88,
      controls: ["CSMS", "Vehicle Security", "V2X Protection"],
      icon: Car,
      detail: "Umfassende Cybersecurity für vernetzte Fahrzeuge und Automotive-Systeme"
    },
    {
      name: "Physical & Environmental Security",
      description: "Physische Sicherheit für Produktionsstätten und Entwicklungszentren",
      coverage: 92,
      controls: ["Access Control", "Facility Security", "Equipment Protection"],
      icon: Factory,
      detail: "Schutz von Produktionsanlagen und sensiblen Automotive-Entwicklungsbereichen"
    }
  ];
  const benefits = [
    {
      title: "Market Access",
      description: "Zugang zum deutschen Automotive-Markt",
      metric: "100%",
      detail: "der deutschen OEMs erfordern TISAX® für Supplier"
    },
    {
      title: "Competitive Advantage",
      description: "Wettbewerbsvorsprung durch TISAX® Zertifizierung",
      metric: "65%",
      detail: "höhere Erfolgsrate bei Automotive-Ausschreibungen"
    },
    {
      title: "Risk Reduction",
      description: "Drastische Reduktion von Cybersecurity-Risiken",
      metric: "80%",
      detail: "weniger sicherheitsrelevante Vorfälle in der Supply Chain"
    },
    {
      title: "Operational Excellence",
      description: "Verbesserte Sicherheitsprozesse und -kultur",
      metric: "45%",
      detail: "Effizienzsteigerung bei Security Operations"
    }
  ];
  const assessmentLevels = [
    {
      level: "AL1",
      name: "Basic Assessment Level",
      description: "Grundlegende Sicherheitsanforderungen für Standard-Geschäftsbeziehungen",
      requirements: ["Basic Security Controls", "Standard Risk Assessment", "Basic Documentation"],
      suitableFor: "Standard Supplier Relationships, Low-Risk Data Processing",
      icon: Shield
    },
    {
      level: "AL2",
      name: "High Assessment Level",
      description: "Erhöhte Sicherheitsanforderungen für sensible Automotive-Daten",
      requirements: ["Enhanced Security Controls", "Detailed Risk Management", "Comprehensive Documentation"],
      suitableFor: "Sensitive Data Processing, Tier-1 Suppliers, Development Partnerships",
      icon: ShieldCheck
    },
    {
      level: "AL3",
      name: "Very High Assessment Level",
      description: "Höchste Sicherheitsanforderungen für hochvertrauliche Informationen",
      requirements: ["Advanced Security Controls", "Continuous Monitoring", "Maximum Protection"],
      suitableFor: "Highly Confidential Data, Strategic Partnerships, Future Vehicle Technology",
      icon: ShieldAlert
    }
  ];
  const complianceAreas = [
    { name: "VDA ISA 6.0 Implementation", coverage: 94, area: "Core Compliance" },
    { name: "Supplier Integration Security", coverage: 91, area: "Supply Chain" },
    { name: "Vehicle Cybersecurity (ISO/SAE 21434)", coverage: 88, area: "Connected Vehicles" },
    { name: "Data Protection & Confidentiality", coverage: 96, area: "Information Security" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "TISAX – Automotive Security für Zulieferer & OEMs",
        description: "TISAX-Zertifizierung für die Automobilindustrie: VDA ISA konform werden. ✓ Assessment-Level 2&3 ✓ ENX-Zugang. Jetzt vorbereiten!",
        canonical: "/tisax",
        keywords: "TISAX, VDA ISA, Automotive Security, TISAX Zertifizierung, Automobilindustrie",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
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
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400", children: [
                    /* @__PURE__ */ jsx(Car, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "TISAX® Compliance" })
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight", children: [
                    "TISAX® Automotive",
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent block mt-2", children: "Security Standard" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Werden Sie Teil der deutschen Automotive-Lieferkette mit TISAX®. VDA ISA 6.0-konforme Informationssicherheit für Automotive-Unternehmen." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "TISAX® Assessment Level 1-3 Zertifizierung" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "VDA ISA 6.0 konforme Implementierung" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "ISO/SAE 21434 Vehicle Cybersecurity" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
                    /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&framework=tisax", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-red-600 to-orange-600 text-white hover:opacity-90 group", children: [
                      /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                      "TISAX® Readiness Assessment",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ] }) }),
                    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "TISAX® Implementation Guide"
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
                  /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-red-200 dark:border-red-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Automotive Security Center" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-red-100 text-red-700", children: "TISAX® Ready" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-red-600" }),
                          /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-red-700", children: [
                            complianceScore,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "TISAX® Score" }),
                        /* @__PURE__ */ jsx("div", { className: "w-full bg-red-200 rounded-full h-2 mt-2", children: /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "bg-red-600 h-2 rounded-full",
                            initial: { width: 0 },
                            animate: { width: isVisible ? `${complianceScore}%` : 0 },
                            transition: { duration: 1.5, delay: 0.5 }
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Car, { className: "h-5 w-5 text-orange-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-orange-700", children: "AL3" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Assessment Level" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-orange-600", children: "Very High" })
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
                          className: "bg-red-600 h-2 rounded-full",
                          initial: { width: 0 },
                          animate: { width: isVisible ? `${area.coverage}%` : 0 },
                          transition: { duration: 1, delay: 0.3 + index * 0.1 }
                        }
                      ) })
                    ] }, index)) })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-red-500 animate-bounce", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-red-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Automotive-Ready" })
                  ] }) })
                ]
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Automotive Security Herausforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Warum TISAX® für die Automotive-Industrie unverzichtbar geworden ist" })
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
                  /* @__PURE__ */ jsx(point.icon, { className: "h-6 w-6 text-red-600" }),
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "TISAX® Assessment Levels" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Drei Sicherheitsstufen für unterschiedliche Automotive-Anforderungen" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: assessmentLevels.map((level, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: cn(
                "p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full",
                index === 2 ? "border-2 border-red-500 shadow-lg" : ""
              ), children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "inline-flex p-3 rounded-xl text-white",
                    index === 0 ? "bg-gradient-to-r from-green-500 to-teal-600" : index === 1 ? "bg-gradient-to-r from-orange-500 to-red-600" : "bg-gradient-to-r from-red-600 to-red-700"
                  ), children: /* @__PURE__ */ jsx(level.icon, { className: "h-6 w-6" }) }),
                  /* @__PURE__ */ jsx(
                    Badge,
                    {
                      className: cn(
                        "text-xs font-bold",
                        index === 0 ? "bg-green-100 text-green-700" : index === 1 ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"
                      ),
                      children: level.level
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: level.name }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm mb-4", children: level.description })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-2", children: "Anforderungen:" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-1", children: level.requirements.map((req, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-xs", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: req })
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "pt-2 border-t", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-2", children: "Geeignet für:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: level.suitableFor })
                  ] })
                ] })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "VDA ISA 6.0 Security Controls" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Comprehensive Automotive Security Controls nach TISAX® Standard" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: tisaxControls.map((control, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6 hover:shadow-lg transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6 items-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-100 dark:bg-red-900/30 rounded-lg", children: /* @__PURE__ */ jsx(control.icon, { className: "h-6 w-6 text-red-600" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold", children: control.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: control.description })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: control.controls.map((controlItem, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: controlItem }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                    /* @__PURE__ */ jsx("span", { children: "Implementation" }),
                    /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                      control.coverage,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "bg-red-600 h-2 rounded-full",
                      initial: { width: 0 },
                      whileInView: { width: `${control.coverage}%` },
                      transition: { duration: 1, delay: 0.2 },
                      viewport: { once: true }
                    }
                  ) }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: control.detail })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "Active" }) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "TISAX® Implementation Solutions" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Strukturierte Umsetzung für erfolgreiche TISAX® Zertifizierung" })
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
                /* @__PURE__ */ jsx("div", { className: "space-y-2 pt-2", children: solution.features.map((feature, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "TISAX® Success Stories" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Erfolgreiche TISAX® Implementierungen in der Automotive-Industrie" })
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
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2 text-red-700", children: useCase.title }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Challenge:" }),
                    " ",
                    useCase.challenge
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-red-700", children: "Solution:" }),
                  " ",
                  useCase.solution
                ] }) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-orange-700", children: useCase.outcome }) }),
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
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Business Impact von TISAX®" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Messbare Vorteile für Ihre Automotive-Geschäftsstrategie" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits.map((benefit, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsxs(Card, { className: "p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105", children: [
                /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-bold text-red-600 mb-2", children: benefit.metric }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: benefit.title }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: benefit.description }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-red-600 font-medium", children: benefit.detail })
              ] })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-red-600 to-orange-600", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center text-white", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Ihr Weg in die deutsche Automotive-Lieferkette" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90", children: "Werden Sie Teil der deutschen Automotive-Industrie mit TISAX® Zertifizierung. Unsere Automotive-Security-Experten begleiten Sie zur erfolgreichen VDA ISA 6.0 Compliance." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&framework=tisax", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-red-600 hover:bg-gray-100 group",
                    children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                      "TISAX® Readiness Assessment buchen",
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
                      "Automotive-Expertenberatung"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-2 text-white/80", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Professionelle TISAX® Expertise für die Automobilindustrie" })
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
  TisaxCompliance as default
};
