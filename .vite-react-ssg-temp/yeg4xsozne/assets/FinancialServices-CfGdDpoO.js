import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Building2, CheckCircle, ArrowRight, FileCheck, Shield, Brain, Lock, Scale, CreditCard, DollarSign } from "lucide-react";
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
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const FinancialServices = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Finanzdienstleister Compliance Lösungen",
    "description": "Compliance für Banken, Versicherungen und FinTechs: MaRisk, BAIT, PSD2",
    "serviceType": "Financial Compliance Solutions",
    "url": "https://marsstein.com/branchen/finanzdienstleister"
  };
  const painPoints = [
    {
      icon: Lock,
      title: "Kundendaten-Schutz",
      description: "DSGVO erfordert besonderen Schutz für Finanzdaten und Transaktionshistorien",
      framework: "DSGVO",
      impact: "Kritisch",
      example: "Kontodaten, Kredithistorie, Versicherungsverträge"
    },
    {
      icon: Brain,
      title: "KI-Kreditentscheidungen",
      description: "EU AI Act reguliert algorithmische Entscheidungen in der Kreditvergabe",
      framework: "EU AI Act",
      impact: "Kritisch",
      example: "Credit Scoring, Fraud Detection, Robo-Advisory"
    },
    {
      icon: Shield,
      title: "Cyber-Resilienz",
      description: "ISO 27001 und NIS2 fordern robuste IT-Sicherheitsarchitekturen",
      framework: "ISO 27001",
      impact: "Hoch",
      example: "Banking-Systeme, Payment-Infrastruktur, Cloud-Services"
    }
  ];
  const solutions = [
    {
      title: "Finanzdata-Governance",
      description: "DSGVO-konforme Verarbeitung von Finanz- und Kundendaten",
      features: [
        "Rechtmäßige Verarbeitungsgrundlagen für Finanzdaten",
        "Kundenrechte-Management (Portabilität, Löschung)",
        "Sichere Datenübertragung zwischen Instituten",
        "Compliance bei grenzüberschreitenden Transaktionen"
      ],
      icon: Lock,
      color: "from-blue-500 to-indigo-600",
      framework: "DSGVO"
    },
    {
      title: "Transparente KI-Finanzdienstleistungen",
      description: "EU AI Act konforme Algorithmen für Finanzentscheidungen",
      features: [
        "Erklärbare KI für Kreditentscheidungen",
        "Bias-freie Algorithmus-Entwicklung",
        "Menschliche Aufsicht bei automatisierten Entscheidungen",
        "Transparenz gegenüber Kunden bei KI-Nutzung"
      ],
      icon: Brain,
      color: "from-green-500 to-teal-600",
      framework: "EU AI Act"
    },
    {
      title: "Financial Cyber Security",
      description: "ISO 27001 konforme Sicherheit für Finanzinfrastruktur",
      features: [
        "Incident Response für Cyberattacken",
        "Sichere API-Entwicklung für FinTech",
        "Multi-Faktor-Authentifizierung",
        "Kontinuierliches Security Monitoring"
      ],
      icon: Shield,
      color: "from-orange-500 to-red-600",
      framework: "ISO 27001"
    }
  ];
  const useCases = [
    {
      title: "Digital Banking Platform",
      challenge: "Neue Banking-App mit KI-Features und DSGVO-Compliance",
      solution: "Privacy by Design + transparente KI + sichere Architektur",
      frameworks: ["DSGVO", "EU AI Act", "ISO 27001"],
      outcome: "Vertrauensvolle digitale Bankenerfahrung"
    },
    {
      title: "Insurance Tech Innovation",
      challenge: "KI-basierte Schadensbewertung mit Datenschutz-Anforderungen",
      solution: "Algorithmus-Transparenz + DSGVO-konforme Datenverarbeitung",
      frameworks: ["DSGVO", "EU AI Act"],
      outcome: "Effiziente, faire Schadensprozesse"
    },
    {
      title: "FinTech Payment Security",
      challenge: "Sichere Payment-Infrastruktur für europäische Expansion",
      solution: "ISO 27001 Sicherheitsstandards + DSGVO-Compliance",
      frameworks: ["DSGVO", "ISO 27001"],
      outcome: "Skalierbare, sichere Zahlungslösungen"
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Finanzdienstleister – BaFin & DSGVO Compliance",
        description: "FinTech Compliance: MaRisk, BAIT, PSD2 & DSGVO für Banken und Versicherungen. ✓ BaFin-konform ✓ Expertenwissen. Jetzt beraten lassen!",
        canonical: "/branchen/finanzdienstleister",
        keywords: "FinTech Compliance, BaFin Anforderungen, MaRisk, BAIT, PSD2 Compliance, Banken DSGVO",
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
                /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Finanzdienstleister" })
              ] }),
              /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
                "Compliance für",
                /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2", children: "Finanzdienstleister" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Meistern Sie DSGVO, EU AI Act und ISO 27001 für vertrauensvolle, innovative Finanzdienstleistungen in der digitalen Ära." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "DSGVO-konforme Verarbeitung von Finanzdaten" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "Transparente KI für Kreditentscheidungen (EU AI Act)" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "ISO 27001 Cyber-Sicherheit für Finanzinfrastruktur" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=financial", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 group", children: [
                  /* @__PURE__ */ jsx(Building2, { className: "mr-2 h-5 w-5" }),
                  "FinTech Demo",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                ] }) }),
                /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                  /* @__PURE__ */ jsx(FileCheck, { className: "mr-2 h-5 w-5" }),
                  "Financial Compliance Guide"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Financial Compliance Hub" }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "Secure" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
                  /* @__PURE__ */ jsxs(Card, { className: "p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 text-center", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-600 mx-auto mb-1" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-blue-700", children: "DSGVO" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-600", children: "Konform" })
                  ] }),
                  /* @__PURE__ */ jsxs(Card, { className: "p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 text-center", children: [
                    /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-green-600 mx-auto mb-1" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-green-700", children: "AI Act" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-green-600", children: "Transparent" })
                  ] }),
                  /* @__PURE__ */ jsxs(Card, { className: "p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 text-center", children: [
                    /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5 text-orange-600 mx-auto mb-1" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-orange-700", children: "ISO 27001" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-orange-600", children: "Certified" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4 text-blue-600" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: "KI-Kreditprüfung konform" })
                    ] }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: "EU AI Act" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4 text-green-600" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Payment Security aktiv" })
                    ] }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: "ISO 27001" })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-blue-500 animate-pulse", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(DollarSign, { className: "h-4 w-4 text-blue-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Trust-Ready" })
              ] }) })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "FinTech Compliance Herausforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Komplexe Regulierung erfordert spezialisierte Compliance-Expertise" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: painPoints.map((point, index) => /* @__PURE__ */ jsx(
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
          /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Framework-spezialisierte Lösungen" }) }),
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
          /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "FinTech Use Cases" }) }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: useCases.map((useCase, index) => /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6 items-center", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: useCase.title }),
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
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: useCase.frameworks.map((framework, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: framework }, i)) }),
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-blue-700", children: useCase.outcome }) })
          ] }) }, index)) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-blue-600 to-indigo-600", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center text-white", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Zukunftssichere FinTech Compliance" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90", children: "Entwickeln Sie vertrauensvolle Finanzprodukte mit DSGVO, EU AI Act und ISO 27001 Compliance von Anfang an." }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=financial", children: /* @__PURE__ */ jsxs(
            Button,
            {
              size: "lg",
              className: "bg-white text-blue-600 hover:bg-gray-100 group",
              children: [
                /* @__PURE__ */ jsx(Building2, { className: "mr-2 h-5 w-5" }),
                "FinTech Beratung",
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
  FinancialServices as default
};
