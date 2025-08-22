import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Heart, CheckCircle, Stethoscope, ArrowRight, FileCheck, Shield, Brain, Lock, UserCheck, Sparkles } from "lucide-react";
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
const Healthcare = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Healthcare Compliance Lösungen",
    "description": "Compliance-Lösungen für das Gesundheitswesen: DSGVO Art. 9, E-Health, Telemedizin",
    "medicalSpecialty": "Health Information Technology",
    "url": "https://marsstein.com/branchen/gesundheitswesen"
  };
  const painPoints = [
    {
      icon: Lock,
      title: "Sensible Gesundheitsdaten",
      description: "DSGVO Art. 9 erfordert besonderen Schutz für Gesundheitsdaten",
      framework: "DSGVO",
      impact: "Kritisch",
      example: "Patientenakten, Diagnosen, Behandlungsdaten"
    },
    {
      icon: Brain,
      title: "KI-Diagnosesysteme",
      description: "EU AI Act klassifiziert medizinische KI als Hochrisiko-Anwendung",
      framework: "EU AI Act",
      impact: "Kritisch",
      example: "Radiologie-KI, Diagnose-Assistenten, Behandlungsempfehlungen"
    },
    {
      icon: Shield,
      title: "IT-Sicherheit in Kliniken",
      description: "ISO 27001 Standards für kritische Gesundheitsinfrastruktur",
      framework: "ISO 27001",
      impact: "Hoch",
      example: "Krankenhausinformationssysteme, Medizingeräte-Vernetzung"
    },
    {
      icon: UserCheck,
      title: "Einwilligungsmanagement",
      description: "Komplexe Consent-Prozesse für Behandlung und Forschung",
      framework: "DSGVO",
      impact: "Hoch",
      example: "Behandlungseinwilligung, Forschungsteilnahme, Datenübertragung"
    }
  ];
  const solutions = [
    {
      title: "DSGVO-konforme Datenverarbeitung",
      description: "Sichere Verarbeitung sensibler Gesundheitsdaten nach höchsten Standards",
      features: [
        "Art. 9 DSGVO Compliance für Gesundheitsdaten",
        "Pseudonymisierung und Anonymisierung",
        "Rechtmäßige Verarbeitungsgrundlagen",
        "Patientenrechte-Management (Auskunft, Löschung, Portabilität)"
      ],
      icon: Lock,
      color: "from-blue-500 to-purple-600",
      framework: "DSGVO"
    },
    {
      title: "KI-Systeme Compliance",
      description: "EU AI Act konforme Entwicklung und Betrieb medizinischer KI",
      features: [
        "Risikoklassifizierung von KI-Systemen",
        "Transparenz und Erklärbarkeit medizinischer KI",
        "Bias-Monitoring und Fairness-Tests",
        "Kontinuierliche Überwachung im Betrieb"
      ],
      icon: Brain,
      color: "from-green-500 to-teal-600",
      framework: "EU AI Act"
    },
    {
      title: "Informationssicherheit",
      description: "ISO 27001 konforme Sicherheitsarchitektur für Gesundheitseinrichtungen",
      features: [
        "Sicherheitsrichtlinien für Gesundheitswesen",
        "Incident Response für Cyberattacken",
        "Sichere Vernetzung von Medizingeräten",
        "Backup und Business Continuity"
      ],
      icon: Shield,
      color: "from-orange-500 to-red-600",
      framework: "ISO 27001"
    }
  ];
  const useCases = [
    {
      title: "Krankenhaus-Digitalisierung",
      challenge: "Digitale Patientenakte mit KI-Unterstützung einführen",
      solution: "DSGVO-konforme Datenhaltung + EU AI Act konforme Diagnose-KI",
      frameworks: ["DSGVO", "EU AI Act", "ISO 27001"],
      outcome: "Sichere, intelligente Patientenversorgung"
    },
    {
      title: "Telemedizin-Plattform",
      challenge: "Fernbehandlung mit Videosprechstunde und KI-Triage",
      solution: "Ende-zu-Ende Verschlüsselung + transparente KI-Algorithmen",
      frameworks: ["DSGVO", "EU AI Act"],
      outcome: "Vertrauensvolle digitale Gesundheitsversorgung"
    },
    {
      title: "Medizinische Forschung",
      challenge: "Big Data Analysen mit Patientendaten für Forschungszwecke",
      solution: "Anonymisierung + Einwilligungsmanagement + sichere Datenräume",
      frameworks: ["DSGVO", "ISO 27001"],
      outcome: "Ethische, datenschutzkonforme Forschung"
    }
  ];
  const complianceAreas = [
    { name: "Patientendatenschutz", coverage: 98, framework: "DSGVO" },
    { name: "KI-Transparenz", coverage: 95, framework: "EU AI Act" },
    { name: "IT-Sicherheit", coverage: 97, framework: "ISO 27001" },
    { name: "Einwilligungsmanagement", coverage: 96, framework: "DSGVO" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Gesundheitswesen – DSGVO & E-Health Compliance",
        description: "Healthcare Compliance: Patientendatenschutz nach DSGVO Art. 9, E-Health-Gesetz, Telemedizin. ✓ Spezialwissen ✓ Praxiserprobt. Jetzt beraten lassen!",
        canonical: "/branchen/gesundheitswesen",
        keywords: "Healthcare Compliance, Gesundheitsdaten DSGVO, E-Health, Telemedizin Datenschutz, Krankenhaus IT",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400", children: [
                /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Gesundheitswesen" })
              ] }),
              /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
                "Compliance für das",
                /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block mt-2", children: "Gesundheitswesen" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Navigieren Sie sicher durch DSGVO, EU AI Act und ISO 27001 – für vertrauensvolle digitale Gesundheitsversorgung." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "DSGVO Art. 9 konforme Verarbeitung von Gesundheitsdaten" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "EU AI Act Compliance für medizinische KI-Systeme" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: "ISO 27001 Sicherheitsstandards für Gesundheitseinrichtungen" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=healthcare", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-red-600 to-pink-600 text-white hover:opacity-90 group", children: [
                  /* @__PURE__ */ jsx(Stethoscope, { className: "mr-2 h-5 w-5" }),
                  "Healthcare Demo",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                ] }) }),
                /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                  /* @__PURE__ */ jsx(FileCheck, { className: "mr-2 h-5 w-5" }),
                  "Framework-Guide downloaden"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-red-200 dark:border-red-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Healthcare Compliance Center" }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "Konform" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-3", children: [
                  /* @__PURE__ */ jsxs(Card, { className: "p-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 text-center", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-600 mx-auto mb-1" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-blue-700", children: "DSGVO" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-600", children: "Art. 9 konform" })
                  ] }),
                  /* @__PURE__ */ jsxs(Card, { className: "p-3 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 text-center", children: [
                    /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-green-600 mx-auto mb-1" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-green-700", children: "AI Act" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-green-600", children: "High-Risk Ready" })
                  ] }),
                  /* @__PURE__ */ jsxs(Card, { className: "p-3 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 text-center", children: [
                    /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5 text-orange-600 mx-auto mb-1" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-orange-700", children: "ISO 27001" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-orange-600", children: "Zertifiziert" })
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
              /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-red-500 animate-bounce", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4 text-red-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Patient-Safe" })
              ] }) })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Healthcare Compliance Herausforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Spezifische Anforderungen im Gesundheitswesen erfordern maßgeschneiderte Lösungen" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: painPoints.map((point, index) => /* @__PURE__ */ jsx(
            Card,
            {
              className: "p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
              children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(point.icon, { className: "h-6 w-6 text-red-600" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-bold", children: point.title }),
                      /* @__PURE__ */ jsx(
                        Badge,
                        {
                          variant: point.impact === "Kritisch" ? "destructive" : "default",
                          className: "text-xs mt-1",
                          children: point.framework
                        }
                      )
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
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Beispiele:" }),
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Framework-basierte Lösungen" }),
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
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Praxis-Anwendungsfälle" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Wie unsere Framework-Expertise in realen Szenarien hilft" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: useCases.map((useCase, index) => /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6 items-center", children: [
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
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-red-600 to-pink-600", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center text-white", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Starten Sie Ihre Healthcare Compliance Journey" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90", children: "Vereinbaren Sie ein Beratungsgespräch und erfahren Sie, wie DSGVO, EU AI Act und ISO 27001 in Ihrem Gesundheitssystem umgesetzt werden können." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=healthcare", children: /* @__PURE__ */ jsxs(
              Button,
              {
                size: "lg",
                className: "bg-white text-red-600 hover:bg-gray-100 group",
                children: [
                  /* @__PURE__ */ jsx(Heart, { className: "mr-2 h-5 w-5" }),
                  "Framework-Beratung buchen",
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
                  /* @__PURE__ */ jsx(FileCheck, { className: "mr-2 h-5 w-5" }),
                  "Healthcare Compliance Guide"
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-2 text-white/80", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Gesetzeskonforme digitale Transformation im Gesundheitswesen" })
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  Healthcare as default
};
