import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Car, CheckCircle, ArrowRight, FileCheck, Shield, Brain, Lock, Zap, Radio, Battery } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "react-helmet-async";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "react";
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
const Automotive = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutomotiveOrganization",
    "name": "Automotive Compliance Lösungen",
    "description": "Automotive Compliance: TISAX, Connected Car DSGVO, Autonomous Vehicle AI Act",
    "url": "https://marsstein.com/branchen/automotive"
  };
  const painPoints = [
    {
      icon: Brain,
      title: "Autonome Fahrsysteme",
      description: "EU AI Act klassifiziert selbstfahrende Autos als Hochrisiko-KI-Systeme",
      framework: "EU AI Act",
      impact: "Kritisch",
      example: "Autopilot-Systeme, Fahrassistenten, Verkehrserkennung"
    },
    {
      icon: Radio,
      title: "Connected Car Daten",
      description: "DSGVO-konforme Verarbeitung von Fahrzeug- und Nutzerdaten",
      framework: "DSGVO",
      impact: "Hoch",
      example: "Standortdaten, Fahrmuster, Infotainment-Nutzung"
    },
    {
      icon: Shield,
      title: "Automotive Cybersecurity",
      description: "ISO 27001 und UN-R155 Standards für vernetzte Fahrzeuge",
      framework: "ISO 27001",
      impact: "Kritisch",
      example: "OTA-Updates, V2X-Kommunikation, Backend-Systeme"
    },
    {
      icon: Battery,
      title: "Produktionsdaten-Schutz",
      description: "Industrie 4.0 Datenschutz in der Automobilproduktion",
      framework: "DSGVO",
      impact: "Hoch",
      example: "Fertigungsdaten, Qualitätskontrolle, Lieferketten-Daten"
    }
  ];
  const solutions = [
    {
      title: "DSGVO-Konforme Fahrzeugdaten",
      description: "Rechtsichere Verarbeitung von Connected Car und Produktionsdaten",
      features: [
        "Privacy by Design für Connected Cars",
        "Fahrzeugdaten-Minimierung und Anonymisierung",
        "Nutzer-Consent für Infotainment und Telematik",
        "Cross-Border Data Transfer für globale OEMs"
      ],
      icon: Lock,
      color: "from-blue-500 to-indigo-600",
      framework: "DSGVO"
    },
    {
      title: "Automotive AI Compliance",
      description: "EU AI Act konforme Entwicklung autonomer Fahrsysteme",
      features: [
        "Risikoklassifizierung von Fahrzeug-KI",
        "Transparenz und Erklärbarkeit von Autopilot-Entscheidungen",
        "Bias-Monitoring für Verkehrserkennung",
        "Kontinuierliche Überwachung im Fahrbetrieb"
      ],
      icon: Brain,
      color: "from-green-500 to-teal-600",
      framework: "EU AI Act"
    },
    {
      title: "Automotive Cyber Security",
      description: "ISO 27001 konforme Sicherheit für Connected Cars und Produktion",
      features: [
        "Cybersecurity Management System (CSMS)",
        "Sichere OTA-Update-Infrastruktur",
        "V2X-Kommunikationssicherheit",
        "Supply Chain Security für Tier-1/2/3"
      ],
      icon: Shield,
      color: "from-orange-500 to-red-600",
      framework: "ISO 27001"
    }
  ];
  const useCases = [
    {
      title: "Autonomes Fahrzeug-Programm",
      challenge: "EU AI Act konforme Entwicklung von Level 3+ Autopilot-Systemen",
      solution: "KI-Transparenz + Risikomanagement + kontinuierliche Überwachung",
      frameworks: ["EU AI Act", "ISO 27001"],
      outcome: "Marktzulassung für autonome Fahrzeuge in der EU"
    },
    {
      title: "Connected Car Plattform",
      challenge: "DSGVO-konforme Fahrzeugdaten-Verarbeitung für Services",
      solution: "Privacy by Design + Nutzer-Consent + sichere Datenübertragung",
      frameworks: ["DSGVO", "ISO 27001"],
      outcome: "Vertrauensvolle Connected Car Services"
    },
    {
      title: "Smart Factory Automotive",
      challenge: "Industrie 4.0 Compliance in der Automobilproduktion",
      solution: "Produktionsdaten-Schutz + Cybersecurity + KI-Transparenz",
      frameworks: ["DSGVO", "EU AI Act", "ISO 27001"],
      outcome: "Sichere, intelligente Fahrzeugproduktion"
    }
  ];
  const complianceAreas = [
    { name: "Autonome Fahrsysteme", coverage: 96, framework: "EU AI Act" },
    { name: "Connected Car Datenschutz", coverage: 98, framework: "DSGVO" },
    { name: "Automotive Cybersecurity", coverage: 99, framework: "ISO 27001" },
    { name: "Produktionsdaten-Schutz", coverage: 94, framework: "DSGVO" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Automotive – TISAX & Connected Car Compliance",
        description: "Automotive Compliance: TISAX-Zertifizierung, Connected Car DSGVO, Autonomous Vehicle AI Act. ✓ VDA-Standards ✓ Cyber Security. Jetzt automotive-ready!",
        canonical: "/branchen/automotive",
        keywords: "TISAX Zertifizierung, Automotive DSGVO, Connected Car, Autonomous Vehicle, VDA Standards",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400", children: [
                /* @__PURE__ */ jsx(Car, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Automotive" })
              ] }),
              /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
                "Compliance für die",
                /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2", children: "Automobilbranche" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Meistern Sie DSGVO, EU AI Act und ISO 27001 für zukunftssichere Connected Cars und autonome Fahrzeuge." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "EU AI Act konforme autonome Fahrsysteme" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "DSGVO-konforme Connected Car Datenverarbeitung" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "ISO 27001 Automotive Cybersecurity (UN-R155)" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=automotive", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 group", children: [
                  /* @__PURE__ */ jsx(Car, { className: "mr-2 h-5 w-5" }),
                  "Automotive Demo",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                ] }) }),
                /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                  /* @__PURE__ */ jsx(FileCheck, { className: "mr-2 h-5 w-5" }),
                  "Connected Car Guide"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Automotive Compliance Center" }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "Road-Ready" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
                  /* @__PURE__ */ jsxs(Card, { className: "p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 text-center", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-600 mx-auto mb-1" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-blue-700", children: "DSGVO" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-600", children: "Privacy Ready" })
                  ] }),
                  /* @__PURE__ */ jsxs(Card, { className: "p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 text-center", children: [
                    /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-green-600 mx-auto mb-1" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-green-700", children: "AI Act" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-green-600", children: "High-Risk Ready" })
                  ] }),
                  /* @__PURE__ */ jsxs(Card, { className: "p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 text-center", children: [
                    /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5 text-orange-600 mx-auto mb-1" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-orange-700", children: "ISO 27001" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-orange-600", children: "UN-R155 Ready" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: complianceAreas.map((area, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                    /* @__PURE__ */ jsx("span", { children: area.name }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: area.framework }),
                      /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                        area.coverage,
                        "%"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: area.coverage, className: "h-2" })
                ] }, index)) })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-blue-500 animate-pulse", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4 text-blue-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Auto-Ready" })
              ] }) })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Automotive Compliance Herausforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Connected Cars und autonome Fahrzeuge erfordern spezialisierte Compliance-Lösungen" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: painPoints.map((point, index) => /* @__PURE__ */ jsx(
            Card,
            {
              className: "p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
              children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(point.icon, { className: "h-6 w-6 text-blue-600" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-bold", children: point.title }),
                      /* @__PURE__ */ jsx(Badge, { className: "text-xs mt-1", children: point.framework })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Badge,
                    {
                      variant: point.impact === "Kritisch" ? "destructive" : "secondary",
                      className: "text-xs",
                      children: point.impact
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: point.description }),
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Anwendungen:" }),
                  " ",
                  point.example
                ] }) })
              ] })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Framework-spezialisierte Lösungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Spezialisierte Compliance-Tools für jedes der drei Hauptframeworks" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: solutions.map((solution, index) => /* @__PURE__ */ jsx(
            Card,
            {
              className: "p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2",
              children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "inline-flex p-3 rounded-xl bg-gradient-to-r text-white",
                    solution.color
                  ), children: /* @__PURE__ */ jsx(solution.icon, { className: "h-6 w-6" }) }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-gray-100 text-gray-700 text-xs", children: solution.framework })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: solution.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: solution.description }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2 pt-2", children: solution.features.map((feature, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: feature })
                ] }, i)) })
              ] })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Automotive Use Cases" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Wie unsere Framework-Expertise in realen Automotive-Szenarien hilft" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: useCases.map((useCase, index) => /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6 items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: useCase.title }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Herausforderung:" }),
                " ",
                useCase.challenge
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium text-green-700", children: "Lösung:" }),
              " ",
              useCase.solution
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: useCase.frameworks.map((framework, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: framework }, i)) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-blue-700", children: useCase.outcome }) })
          ] }) }, index)) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-blue-600 to-indigo-600", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center text-white", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Zukunftssichere Automotive Compliance" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90", children: "Entwickeln Sie vertrauensvolle Connected Cars mit DSGVO, EU AI Act und ISO 27001 Compliance von Anfang an." }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=automotive", children: /* @__PURE__ */ jsxs(
            Button,
            {
              size: "lg",
              className: "bg-white text-blue-600 hover:bg-gray-100 group",
              children: [
                /* @__PURE__ */ jsx(Car, { className: "mr-2 h-5 w-5" }),
                "Automotive Beratung",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
              ]
            }
          ) }) })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  Automotive as default
};
