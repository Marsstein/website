import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardDescription } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-J8wFYQQL.js";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, FileText, Users, Activity, BarChart3, CheckCircle, AlertCircle, TrendingUp, ArrowRight, PlayCircle, CheckCircle2, Clock, Euro, Building2, Globe, XCircle, CheckSquare, ChevronRight, Zap, Sparkles, Bot, Database, FileCheck, Rocket, Award, Phone, Mail, Calendar } from "lucide-react";
import { c as cn } from "../main.mjs";
import { Link } from "react-router-dom";
import "react-helmet-async";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
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
const MetricCard = ({ title, value, change, status, icon: Icon }) => {
  const getStatusColor = () => {
    switch (status) {
      case "success":
        return "text-green-500 bg-green-50 border-green-200";
      case "warning":
        return "text-yellow-500 bg-yellow-50 border-yellow-200";
      case "danger":
        return "text-red-500 bg-red-50 border-red-200";
    }
  };
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      whileHover: { scale: 1.02 },
      className: `relative overflow-hidden rounded-lg border p-4 ${getStatusColor()}`,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsxs("div", { className: `flex items-center text-xs ${change > 0 ? "text-green-600" : "text-red-600"}`, children: [
            /* @__PURE__ */ jsx(TrendingUp, { className: `h-3 w-3 mr-1 ${change < 0 ? "rotate-180" : ""}` }),
            Math.abs(change),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-gray-600", children: title }),
          /* @__PURE__ */ jsxs("p", { className: "text-2xl font-bold text-gray-900", children: [
            value,
            "%"
          ] })
        ] })
      ]
    }
  );
};
const CompactDsgvoDashboard = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setComplianceScore(94);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  const metrics = [
    { title: "Dokumentation", value: 92, change: 5, status: "success", icon: FileText },
    { title: "TOM-Maßnahmen", value: 88, change: -2, status: "warning", icon: Shield },
    { title: "Anfragen", value: 95, change: 8, status: "success", icon: Users },
    { title: "Überwachung", value: 91, change: 3, status: "success", icon: Activity }
  ];
  const activities = [
    { name: "Kundendaten", status: "compliant", risk: "low" },
    { name: "Marketing", status: "review", risk: "medium" },
    { name: "HR-Daten", status: "action", risk: "high" }
  ];
  return /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-xl", children: [
    /* @__PURE__ */ jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-xl", children: [
      /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-full bg-[#a1251b] flex items-center justify-center", children: /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-white" }) }),
      "DSGVO Dashboard"
    ] }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "relative w-32 h-32", children: [
        /* @__PURE__ */ jsxs("svg", { className: "w-full h-full transform -rotate-90", children: [
          /* @__PURE__ */ jsx(
            "circle",
            {
              cx: "64",
              cy: "64",
              r: "56",
              stroke: "rgba(229, 231, 235, 0.5)",
              strokeWidth: "8",
              fill: "none"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.circle,
            {
              cx: "64",
              cy: "64",
              r: "56",
              stroke: "#a1251b",
              strokeWidth: "8",
              fill: "none",
              strokeDasharray: `${2 * Math.PI * 56}`,
              strokeDashoffset: 2 * Math.PI * 56 * (1 - complianceScore / 100),
              initial: { strokeDashoffset: 2 * Math.PI * 56 },
              animate: { strokeDashoffset: 2 * Math.PI * 56 * (1 - complianceScore / 100) },
              transition: { duration: 1.5, ease: "easeOut" },
              strokeLinecap: "round"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-gray-900", children: [
            complianceScore,
            "%"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Compliance" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: metrics.map((metric, index) => /* @__PURE__ */ jsx(MetricCard, { ...metric }, index)) }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold text-gray-700 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4" }),
          "Verarbeitungsverzeichnis"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: activities.map((activity, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -10 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.2 + index * 0.1 },
            className: "flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg border",
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: activity.name }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(
                  Badge,
                  {
                    variant: activity.risk === "low" ? "secondary" : activity.risk === "medium" ? "outline" : "destructive",
                    className: "text-xs px-2 py-0.5",
                    children: activity.risk === "low" ? "Niedrig" : activity.risk === "medium" ? "Mittel" : "Hoch"
                  }
                ),
                activity.status === "compliant" && /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-500" }),
                activity.status === "review" && /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-yellow-500" }),
                activity.status === "action" && /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-500" })
              ] })
            ]
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 pt-4 border-t border-gray-200", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-green-600", children: "24" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Dokumente" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-blue-600", children: "3" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Offene Anfragen" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-orange-600", children: "7" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Tage bis Audit" })
        ] })
      ] })
    ] })
  ] });
};
const DsgvoCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const scoreInterval = setInterval(() => {
        setComplianceScore((prev) => {
          if (prev >= 25) {
            clearInterval(scoreInterval);
            return 25;
          }
          return prev + 1;
        });
      }, 30);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DSGVO Compliance Service",
    "description": "Automatisierte DSGVO-Compliance-Lösung mit KI-Unterstützung",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Compliance Management",
    "areaServed": "DE"
  };
  const HeroSection = () => /* @__PURE__ */ jsxs("section", { className: "relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#e24e1b]/5 via-transparent to-[#ea580c]/5" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-[#e24e1b]/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-[#ea580c]/10 rounded-full blur-3xl animate-pulse delay-700" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container relative z-10 px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20 px-4 py-1.5", children: [
          /* @__PURE__ */ jsx(Shield, { className: "h-3.5 w-3.5 mr-2" }),
          "DSGVO-Konform seit 2018"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight text-[#232323]", children: [
          "DSGVO-Compliance",
          /* @__PURE__ */ jsx("span", { className: "block bg-gradient-to-r from-[#e24e1b] to-[#ea580c] bg-clip-text text-transparent", children: "Automatisiert & Rechtssicher" })
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-xl text-[#474747] leading-relaxed", children: [
          "Schützen Sie Ihr Unternehmen vor DSGVO-Bußgeldern. Unsere Vision: KI-gestützte Lösung für Standards-konforme DSGVO-Compliance.",
          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "ml-2 text-xs", children: "Beta Phase" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-[#e24e1b] hover:bg-[#f97316] text-white px-8", children: [
            "Kostenlose Demo starten",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ] }),
          /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
            /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5 group-hover:text-[#e24e1b]" }),
            "Video ansehen (2 Min)"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 pt-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-[#39B37B]" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "30 Tage kostenlos testen" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-[#39B37B]" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Keine Kreditkarte erforderlich" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs(Card, { className: "border-2 border-[#e24e1b]/20 shadow-2xl", children: [
        /* @__PURE__ */ jsx(CardHeader, { className: "text-center pb-8", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl text-[#232323]", children: "Ihr DSGVO-Compliance Score" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "relative h-48 flex items-center justify-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-5xl font-bold text-[#e24e1b]", children: "Beta Phase" }),
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxs("svg", { className: "w-48 h-48 transform -rotate-90", children: [
              /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: "96",
                  cy: "96",
                  r: "88",
                  stroke: "currentColor",
                  strokeWidth: "8",
                  fill: "none",
                  className: "text-[#474747]/20"
                }
              ),
              /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: "96",
                  cy: "96",
                  r: "88",
                  stroke: "currentColor",
                  strokeWidth: "8",
                  fill: "none",
                  strokeDasharray: `${2 * Math.PI * 88}`,
                  strokeDashoffset: `${2 * Math.PI * 88 * (1 - complianceScore / 100)}`,
                  className: "text-[#e24e1b] transition-all duration-1000 ease-out"
                }
              )
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-[#39B37B]/10 rounded-lg", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-[#39B37B]" }),
                "Datenschutzerklärung"
              ] }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-[#39B37B] text-white", children: "Konform" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-[#39B37B]/10 rounded-lg", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-[#39B37B]" }),
                "Verarbeitungsverzeichnis"
              ] }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-[#39B37B] text-white", children: "Aktuell" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-[#F57C00]/10 rounded-lg", children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-[#F57C00]" }),
                "TOM-Dokumentation"
              ] }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-[#F57C00] text-white", children: "In Prüfung" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Button, { className: "w-full bg-[#e24e1b] hover:bg-[#f97316]", children: [
            "Vollständige Analyse starten",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
  const TrustSection = () => /* @__PURE__ */ jsx("section", { className: "py-16 bg-[#F5F6F8] dark:bg-gray-900/50", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-[#474747] mb-2", children: "Entwickelt für moderne Unternehmen in Deutschland" }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60", children: ["Technology", "Automotive", "Engineering", "Manufacturing", "Finance", "Aviation"].map((sector) => /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-lg font-medium text-gray-400", children: sector }) }, sector)) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mt-16", children: [
      { number: "Standards", label: "DSGVO-konforme Entwicklung", icon: Shield },
      { number: "Beta", label: "Entwicklungsphase", icon: Clock },
      { number: "Security", label: "First Approach", icon: Euro },
      { number: "Community", label: "Beta-Support", icon: Users }
    ].map((stat, index) => /* @__PURE__ */ jsxs(Card, { className: "text-center p-6 border-[#e24e1b]/20", children: [
      /* @__PURE__ */ jsx(stat.icon, { className: "h-8 w-8 text-[#e24e1b] mx-auto mb-4" }),
      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-[#e24e1b] mb-2", children: stat.number }),
      /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: stat.label })
    ] }, index)) })
  ] }) });
  const IndustrySection = () => {
    const [activeIndustry, setActiveIndustry] = useState(0);
    const [hoveredIndustry, setHoveredIndustry] = useState(null);
    const industries = [
      {
        id: "ecommerce",
        name: "E-Commerce",
        icon: "🛒",
        description: "Online-Handel & Webshops",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-[#e24e1b]/5",
        borderColor: "border-blue-200 dark:border-blue-800",
        textColor: "text-[#232323]",
        challenges: [
          "Cookie-Management & Tracking",
          "Kundendaten-Verarbeitung",
          "Newsletter & Marketing",
          "Zahlungsdienstleister-Integration"
        ],
        realWorldExample: "Ein mittelständischer Online-Shop sammelt täglich Tausende von Kundendaten, nutzt Marketing-Cookies und verarbeitet Zahlungsinformationen über verschiedene Dienstleister.",
        complianceSteps: [
          "Cookie-Consent-Management implementieren",
          "Datenschutzerklärung für alle Datenverarbeitungen",
          "Auftragsverarbeitungsverträge mit Payment-Providern",
          "Betroffenenrechte-Management einrichten"
        ],
        marsteinSolution: "Automatische Cookie-Compliance, integrierte Datenschutzerklärung und AVV-Generator für alle gängigen Payment-Provider.",
        realFines: [
          {
            description: "Online-Händler wegen unzureichender Cookie-Einverständnisse",
            source: "Berliner Datenschutzbeauftragte",
            url: "https://www.datenschutz-berlin.de/fileadmin/user_upload/pdf/pressemitteilungen/2021/20211216-PM-Cookie-Banner.pdf"
          },
          {
            description: "E-Commerce-Unternehmen für fehlende Rechtsgrundlagen bei Newsletter-Marketing",
            source: "LfDI Baden-Württemberg",
            url: "https://www.baden-wuerttemberg.datenschutz.de/lfdi-verhaengt-bussgeld-gegen-unternehmen-wegen-unzulaessiger-newsletter-versendung/"
          }
        ]
      },
      {
        id: "healthcare",
        name: "Gesundheitswesen",
        icon: "🏥",
        description: "Praxen, Kliniken & Gesundheits-IT",
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
        borderColor: "border-emerald-200 dark:border-emerald-800",
        textColor: "text-emerald-900 dark:text-emerald-100",
        challenges: [
          "Patientendaten-Schutz",
          "Telematikinfrastruktur-Compliance",
          "Externe Dienstleister (Labor, Radiologie)",
          "Digitale Gesundheitsanwendungen"
        ],
        realWorldExample: "Eine Arztpraxis nutzt digitale Patientenakten, tauscht Daten mit Laboren aus und bietet Online-Terminbuchung an - alles unter strengsten Datenschutzanforderungen.",
        complianceSteps: [
          "Patientendaten-Verarbeitungsverzeichnis erstellen",
          "TOM für sensible Gesundheitsdaten definieren",
          "Schweigepflicht-konforme AVVs mit Dienstleistern",
          "Patientenrechte-Management implementieren"
        ],
        marsteinSolution: "Spezialisierte Gesundheitsdaten-Templates, automatische TOM-Dokumentation und rechtssichere AVV-Vorlagen für Gesundheitsdienstleister.",
        realFines: [
          {
            description: "Krankenhaus wegen unzureichender Patientendaten-Sicherung",
            source: "LfDI Baden-Württemberg",
            url: "https://www.baden-wuerttemberg.datenschutz.de/lfdi-verhaengt-rekordbussgeld-von-4-25-millionen-euro-gegen-suedwestdeutsche-klinikgruppe/"
          },
          {
            description: "Arztpraxis für fehlerhafte Patientendaten-Übermittlung",
            source: "BayLDA",
            url: "https://www.lda.bayern.de/media/pm2020_05.pdf"
          }
        ]
      },
      {
        id: "fintech",
        name: "Finanzdienstleistung",
        icon: "🏦",
        description: "Banken, Versicherungen & FinTech",
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-50 dark:bg-amber-950/20",
        borderColor: "border-amber-200 dark:border-amber-800",
        textColor: "text-amber-900 dark:text-amber-100",
        challenges: [
          "PCI-DSS & DSGVO-Harmonisierung",
          "Kreditscoring & Profilbildung",
          "Geldwäsche-Prävention vs. Datenschutz",
          "Open Banking APIs"
        ],
        realWorldExample: "Eine FinTech-App verarbeitet Kontodaten für automatisches Budgeting, erstellt Kreditscores und muss dabei sowohl Finanzregulierung als auch DSGVO einhalten.",
        complianceSteps: [
          "Rechtliche Grundlagen für Scoring definieren",
          "Transparenz bei automatisierten Entscheidungen",
          "Datenschutz-Folgenabschätzung für Profilbildung",
          "Sichere API-Dokumentation für Third-Party-Zugriffe"
        ],
        marsteinSolution: "FinTech-spezifische DSFA-Templates, automatisierte Transparenz-Berichte und PCI-DSS-konforme Datenschutz-Dokumentation.",
        realFines: [
          {
            description: "Deutsche Bank wegen unzureichender Kundendaten-Verarbeitung",
            source: "Hessischer Datenschutzbeauftragter",
            url: "https://datenschutz.hessen.de/pressemitteilungen/der-hessische-beauftragte-fuer-datenschutz-und-informationsfreiheit-7"
          },
          {
            description: "Versicherung für intransparente Scoring-Verfahren",
            source: "LfDI Rheinland-Pfalz",
            url: "https://www.datenschutz.rlp.de/de/aktuelles/detail/news/detail/News/bussgeldverfahren-gegen-versicherungsunternehmen-abgeschlossen/"
          }
        ]
      },
      {
        id: "saas",
        name: "SaaS & Tech",
        icon: "💻",
        description: "Software-Unternehmen & Cloud-Services",
        color: "from-[#e24e1b] to-[#ea580c]",
        bgColor: "bg-[#ea580c]/5",
        borderColor: "border-[#e24e1b]/20",
        textColor: "text-[#232323]",
        challenges: [
          "International Data Transfers",
          "Processor vs. Controller-Status",
          "API-Security & Access-Logs",
          "Multi-Tenant-Datenschutz"
        ],
        realWorldExample: "Ein SaaS-Anbieter verarbeitet Kundendaten in der EU und USA, bietet APIs für Drittanbieter und muss dabei zwischen eigener und Kunden-Datenverarbeitung unterscheiden.",
        complianceSteps: [
          "Data Processing Agreements (DPA) standardisieren",
          "International Transfer-Mechanismen implementieren",
          "Subprocessor-Management aufbauen",
          "Technical Safeguards für Multi-Tenancy dokumentieren"
        ],
        marsteinSolution: "Automatische DPA-Generierung, Standard Contractual Clauses (SCC) Integration und Subprocessor-Notification-System.",
        realFines: [
          {
            description: "SaaS-Anbieter wegen unzulässiger Drittland-Übermittlungen",
            source: "CNIL (Frankreich)",
            url: "https://www.cnil.fr/en/cookies-google-analytics-and-data-transfers-united-states-cnil-orders-website-operator-comply"
          },
          {
            description: "Cloud-Provider für fehlende Auftragsverarbeiter-Verträge",
            source: "Österreichische Datenschutzbehörde",
            url: "https://www.dsb.gv.at/download/DSB-D123.270/0003-DSB/2019/DSB.pdf"
          }
        ]
      },
      {
        id: "marketing",
        name: "Marketing & Werbung",
        icon: "📢",
        description: "Agenturen & Marketing-Services",
        color: "from-pink-500 to-rose-500",
        bgColor: "bg-pink-50 dark:bg-pink-950/20",
        borderColor: "border-pink-200 dark:border-pink-800",
        textColor: "text-pink-900 dark:text-pink-100",
        challenges: [
          "Tracking & Attribution-Modelle",
          "Personalisierte Werbung",
          "Lead-Generierung & Nurturing",
          "Social Media Management"
        ],
        realWorldExample: "Eine Marketing-Agentur sammelt Leads über verschiedene Kanäle, nutzt Marketing-Automation und erstellt personalisierte Kampagnen basierend auf Nutzerdaten.",
        complianceSteps: [
          "Consent-Management für alle Tracking-Tools",
          "Transparente Datennutzung in Marketing-Kommunikation",
          "Opt-In-Prozesse für Lead-Nurturing optimieren",
          "Cookie-less Marketing-Strategien entwickeln"
        ],
        marsteinSolution: "Marketing-Tech-Stack Compliance-Checker, automatische Consent-Integration und DSGVO-konforme Lead-Scoring-Dokumentation.",
        realFines: [
          {
            description: "Marketing-Agentur wegen unerlaubter E-Mail-Werbung",
            source: "LfDI Niedersachsen",
            url: "https://lfd.niedersachsen.de/startseite/infothek/presseinformationen/100-000-euro-bussgeld-wegen-unerlaubter-e-mail-werbung-199019.html"
          },
          {
            description: "Werbeunternehmen für Tracking ohne Einwilligung",
            source: "Berliner Datenschutzbeauftragte",
            url: "https://www.datenschutz-berlin.de/fileadmin/user_upload/pdf/pressemitteilungen/2022/20220331-PM_Bussgeld_Tracking.pdf"
          }
        ]
      },
      {
        id: "hr",
        name: "HR & Personal",
        icon: "👥",
        description: "Personalabteilungen & HR-Services",
        color: "from-teal-500 to-cyan-500",
        bgColor: "bg-teal-50 dark:bg-teal-950/20",
        borderColor: "border-teal-200 dark:border-teal-800",
        textColor: "text-teal-900 dark:text-teal-100",
        challenges: [
          "Bewerberdaten-Management",
          "Mitarbeiter-Monitoring",
          "Gehaltsabrechnung & Benefits",
          "Performance-Tracking"
        ],
        realWorldExample: "Ein HR-Team verwaltet Bewerberdatenbanken, überwacht Arbeitszeiten digital und nutzt Performance-Management-Tools - alles unter Berücksichtigung von Arbeitnehmerrechten.",
        complianceSteps: [
          "Bewerber-Einverständniserklärungen standardisieren",
          "Mitarbeiter-Monitoring rechtlich absichern",
          "Löschfristen für HR-Daten definieren und automatisieren",
          "Arbeitnehmervertretung in Datenschutz einbeziehen"
        ],
        marsteinSolution: "HR-spezifische Einverständnis-Templates, automatische Löschfristen-Verwaltung und Betriebsrat-konforme Datenschutz-Dokumentation.",
        realFines: [
          {
            description: "Unternehmen wegen übermäßiger Mitarbeiter-Überwachung",
            source: "Berliner Datenschutzbeauftragte",
            url: "https://www.datenschutz-berlin.de/fileadmin/user_upload/pdf/pressemitteilungen/2019/20190930-PM-Mitarbeiterueberwachung.pdf"
          },
          {
            description: "HR-Dienstleister für unsichere Bewerberdaten-Verarbeitung",
            source: "LfDI Baden-Württemberg",
            url: "https://www.baden-wuerttemberg.datenschutz.de/lfdi-verhaengt-bussgeld-wegen-datenschutzverstoessen-bei-bewerbungsverfahren/"
          }
        ]
      }
    ];
    return /* @__PURE__ */ jsxs("section", { className: "relative py-12 md:py-16 overflow-hidden min-h-[90vh] flex items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 w-full h-full overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 rounded-full",
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
              className: "absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full",
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
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(161,37,27,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(161,37,27,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container relative z-10 px-4 w-full", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-8 space-y-3",
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
                  children: /* @__PURE__ */ jsxs(Badge, { className: "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white border-0 px-4 py-1.5 text-sm font-medium shadow-lg", children: [
                    /* @__PURE__ */ jsx(Building2, { className: "h-3.5 w-3.5 mr-2" }),
                    "Branchenspezifische DSGVO-Lösungen"
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                motion.h2,
                {
                  className: "text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#ea580c] bg-clip-text text-transparent",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.3 },
                  children: "DSGVO-Compliance für Ihre Branche"
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  className: "text-lg text-[#474747] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.4 },
                  children: "Branchenspezifische Lösungen, reale Bußgeld-Fälle und konkrete Compliance-Schritte."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "flex flex-wrap justify-center gap-2 mb-8",
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.5 },
            children: industries.map((industry, index) => /* @__PURE__ */ jsxs(
              motion.button,
              {
                onClick: () => setActiveIndustry(index),
                onMouseEnter: () => setHoveredIndustry(index),
                onMouseLeave: () => setHoveredIndustry(null),
                className: cn(
                  "group relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-500 backdrop-blur-sm border",
                  activeIndustry === index ? "bg-gradient-to-r from-[#a1251b] to-purple-600 text-white shadow-lg shadow-[#a1251b]/25 border-[#e24e1b]/50 scale-105" : "bg-white/70 dark:bg-gray-800/70 text-[#474747] dark:text-gray-300 hover:bg-white/90 dark:hover:bg-gray-800/90 border-gray-200/50 dark:border-gray-700/50 hover:shadow-md hover:scale-105"
                ),
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.3, delay: index * 0.1 },
                children: [
                  /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      className: "text-lg filter",
                      animate: {
                        scale: hoveredIndustry === index ? 1.1 : 1,
                        rotate: hoveredIndustry === index ? 5 : 0
                      },
                      transition: { type: "spring", stiffness: 300, damping: 10 },
                      children: industry.icon
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: "relative z-10", children: industry.name }),
                  hoveredIndustry === index && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "absolute inset-0 bg-gradient-to-r from-[#a1251b]/20 to-purple-600/20 rounded-xl blur-lg",
                      initial: { opacity: 0, scale: 0.8 },
                      animate: { opacity: 1, scale: 1.1 },
                      exit: { opacity: 0, scale: 0.8 },
                      transition: { duration: 0.3 }
                    }
                  )
                ]
              },
              industry.id
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
              /* @__PURE__ */ jsxs(CardHeader, { className: `relative bg-gradient-to-r ${industries[activeIndustry].color} text-white overflow-hidden py-4`, children: [
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
                          className: "text-3xl filter drop-shadow-lg",
                          animate: {
                            scale: [1, 1.05, 1],
                            rotate: [0, 3, 0]
                          },
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                          },
                          children: industries[activeIndustry].icon
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-bold text-white drop-shadow-md", children: industries[activeIndustry].name }),
                        /* @__PURE__ */ jsx(CardDescription, { className: "text-white/90 text-sm font-medium", children: industries[activeIndustry].description })
                      ] })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(CardContent, { className: "p-6 space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: `${industries[activeIndustry].bgColor} rounded-xl p-4 border ${industries[activeIndustry].borderColor} shadow-sm lg:col-span-3`,
                      initial: { opacity: 0, scale: 0.95 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { duration: 0.3, delay: 0.2 },
                      children: [
                        /* @__PURE__ */ jsxs("h3", { className: `text-lg font-bold ${industries[activeIndustry].textColor} mb-2 flex items-center gap-2`, children: [
                          /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4" }),
                          "Praxisbeispiel"
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: `${industries[activeIndustry].textColor} leading-relaxed text-sm`, children: industries[activeIndustry].realWorldExample })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "space-y-3",
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.3, delay: 0.3 },
                      children: [
                        /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold flex items-center gap-2 text-[#232323] dark:text-gray-100", children: [
                          /* @__PURE__ */ jsx("div", { className: "p-1.5 bg-[#DC2626]/10 rounded-lg", children: /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-[#DC2626]" }) }),
                          "Herausforderungen"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: industries[activeIndustry].challenges.slice(0, 3).map((challenge, idx) => /* @__PURE__ */ jsxs(
                          motion.div,
                          {
                            className: "flex items-center gap-2 p-2 bg-[#DC2626]/5 rounded-lg border border-[#DC2626]/20",
                            initial: { opacity: 0, x: -10 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.2, delay: 0.4 + idx * 0.05 },
                            whileHover: { scale: 1.02 },
                            children: [
                              /* @__PURE__ */ jsx(XCircle, { className: "h-3 w-3 text-[#DC2626] flex-shrink-0" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-[#232323] dark:text-gray-200", children: challenge })
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
                      className: "space-y-3",
                      initial: { opacity: 0, x: 20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.3, delay: 0.3 },
                      children: [
                        /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold flex items-center gap-2 text-[#232323] dark:text-gray-100", children: [
                          /* @__PURE__ */ jsx("div", { className: "p-1.5 bg-[#39B37B]/10 rounded-lg", children: /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 text-[#39B37B]" }) }),
                          "Lösungsschritte"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: industries[activeIndustry].complianceSteps.slice(0, 3).map((step, idx) => /* @__PURE__ */ jsxs(
                          motion.div,
                          {
                            className: "flex items-center gap-2 p-2 bg-[#39B37B]/5 rounded-lg border border-[#39B37B]/20",
                            initial: { opacity: 0, x: 10 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.2, delay: 0.4 + idx * 0.05 },
                            whileHover: { scale: 1.02 },
                            children: [
                              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-[#39B37B] flex-shrink-0" }),
                              /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-[#232323] dark:text-gray-200", children: step })
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
                      className: "space-y-3",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.3, delay: 0.4 },
                      children: [
                        /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold flex items-center gap-2 text-[#DC2626]", children: [
                          /* @__PURE__ */ jsx("div", { className: "p-1.5 bg-[#DC2626]/10 rounded-lg", children: /* @__PURE__ */ jsx(Euro, { className: "h-4 w-4 text-[#DC2626]" }) }),
                          "Reale Strafen"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: industries[activeIndustry].realFines.slice(0, 2).map((fine, idx) => /* @__PURE__ */ jsxs(
                          motion.div,
                          {
                            className: "p-3 bg-[#DC2626]/5 rounded-lg border border-[#DC2626]/20",
                            initial: { opacity: 0, y: 10 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.2, delay: 0.5 + idx * 0.1 },
                            whileHover: { scale: 1.02 },
                            children: [
                              /* @__PURE__ */ jsx("p", { className: "text-[#DC2626] font-semibold text-xs mb-1", children: fine.description }),
                              /* @__PURE__ */ jsxs(
                                motion.a,
                                {
                                  href: fine.url,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "inline-flex items-center gap-1 text-xs text-[#DC2626] hover:text-[#DC2626]/80 font-medium hover:underline",
                                  whileHover: { x: 2 },
                                  children: [
                                    /* @__PURE__ */ jsxs("span", { children: [
                                      "📄 ",
                                      fine.source
                                    ] }),
                                    /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3" })
                                  ]
                                }
                              )
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
                    className: "bg-gradient-to-r from-[#a1251b]/10 via-purple-600/10 to-[#a1251b]/10 rounded-xl p-4 border border-[#e24e1b]/20 shadow-sm relative overflow-hidden",
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.3, delay: 0.5 },
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#a1251b]/5 to-purple-600/5 animate-pulse" }),
                      /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                        /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-[#e24e1b] mb-2 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx("div", { className: "p-1.5 bg-[#e24e1b]/10 rounded-lg", children: /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4" }) }),
                          "Marsstein-Lösung für ",
                          industries[activeIndustry].name
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-[#474747] dark:text-gray-300 leading-relaxed text-sm", children: industries[activeIndustry].marsteinSolution })
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
                    transition: { duration: 0.3, delay: 0.6 },
                    children: /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        whileHover: { scale: 1.05 },
                        whileTap: { scale: 0.95 },
                        children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#f97316] hover:to-[#ea580c] text-white px-8 py-3 text-base font-semibold shadow-lg shadow-[#e24e1b]/25 border-0", children: [
                          "Branchenspezifische Demo anfragen",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ] })
                      }
                    )
                  }
                )
              ] })
            ] })
          },
          activeIndustry
        ) }) })
      ] })
    ] });
  };
  const BenefitsSection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
      /* @__PURE__ */ jsxs(Badge, { className: "bg-[#ea580c]/10 text-[#ea580c]", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5 mr-2" }),
        "Ihre Vorteile"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Warum Marsstein für DSGVO-Compliance?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-2xl mx-auto", children: "Reduzieren Sie Risiken, sparen Sie Zeit und schaffen Sie Vertrauen bei Ihren Kunden" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
      {
        icon: Shield,
        title: "Standards-konforme Entwicklung",
        description: "Von Compliance-Experten entwickelt nach DSGVO-Standards. Kontinuierliche rechtliche Validierung geplant.",
        benefits: ["Geplante Updates", "Legal-Review-Prozess", "Standards-Konformität"]
      },
      {
        icon: Clock,
        title: "Zeitersparnis durch Automatisierung",
        description: "Vision: Automatisierung repetitiver Aufgaben für Fokus auf Kerngeschäft.",
        benefits: ["Geplant: KI-Dokumentation", "Roadmap: Workflows", "Vision: One-Click Reports"]
      },
      {
        icon: Euro,
        title: "Risiko-Minimierung",
        description: "Ziel: Schutz vor DSGVO-Strafen durch Standards-konforme Prozesse.",
        benefits: ["Roadmap: Warnsystem", "Geplant: Audit-Trail", "Vision: Behörden-konform"]
      },
      {
        icon: Bot,
        title: "KI-Assistent Vision",
        description: "Roadmap: DSGVO-Experte für sofortige, präzise Antworten.",
        benefits: ["Geplant: Multilingual", "Vision: Rechtsberatung", "Beta: Basis-Antworten"]
      },
      {
        icon: Database,
        title: "Sichere Datenverwaltung",
        description: "Konzept: Zentrale, sichere Dokumenten- und Prozessverwaltung.",
        benefits: ["Ziel: Ende-zu-Ende Verschlüsselung", "Geplant: Cloud-Backup", "Vision: Versionierung"]
      },
      {
        icon: BarChart3,
        title: "Transparentes Reporting",
        description: "Vision: Compliance-Nachweis gegenüber Auditoren mit einem Klick.",
        benefits: ["Roadmap: Export-Funktionen", "Geplant: Dashboards", "Vision: Audit-Reports"]
      }
    ].map((benefit, index) => /* @__PURE__ */ jsxs(Card, { className: "group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#e24e1b]/20", children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-lg bg-gradient-to-br from-[#a1251b] to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform", children: /* @__PURE__ */ jsx(benefit.icon, { className: "h-6 w-6 text-white" }) }),
        /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: benefit.title }),
        /* @__PURE__ */ jsx(CardDescription, { className: "text-base", children: benefit.description })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: benefit.benefits.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { children: item })
      ] }, i)) }) })
    ] }, index)) })
  ] }) });
  const FeaturesShowcase = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 to-gray-950", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
      /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
        /* @__PURE__ */ jsx(Zap, { className: "h-3.5 w-3.5 mr-2" }),
        "Funktionen im Detail"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Alles was Sie für DSGVO-Compliance brauchen" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: [
        {
          icon: FileCheck,
          title: "Automatisches Verarbeitungsverzeichnis",
          description: "Erstellen und pflegen Sie Ihr Verzeichnis von Verarbeitungstätigkeiten mit KI-Unterstützung.",
          status: "Live"
        },
        {
          icon: Shield,
          title: "TOM-Generator",
          description: "Technische und organisatorische Maßnahmen automatisch dokumentiert und immer aktuell.",
          status: "Live"
        },
        {
          icon: Users,
          title: "Betroffenenanfragen-Management",
          description: "Bearbeiten Sie Auskunfts-, Lösch- und Korrekturanfragen DSGVO-konform in Minuten.",
          status: "Live"
        },
        {
          icon: FileText,
          title: "Datenschutzerklärung-Generator",
          description: "Rechtssichere Datenschutzerklärungen für Website, App und Offline-Prozesse.",
          status: "Beta"
        }
      ].map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4 p-6 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-[#e24e1b]/30 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-lg bg-[#e24e1b]/10 flex items-center justify-center", children: /* @__PURE__ */ jsx(feature.icon, { className: "h-6 w-6 text-[#e24e1b]" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg", children: feature.title }),
            /* @__PURE__ */ jsx(Badge, { variant: feature.status === "Live" ? "default" : "secondary", className: "text-xs", children: feature.status })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-[#474747]", children: feature.description })
        ] })
      ] }, index)) }),
      /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-24", children: /* @__PURE__ */ jsx(CompactDsgvoDashboard, {}) })
    ] })
  ] }) });
  const HowItWorksSection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
      /* @__PURE__ */ jsxs(Badge, { className: "bg-[#39B37B]/10 text-[#39B37B]", children: [
        /* @__PURE__ */ jsx(Rocket, { className: "h-3.5 w-3.5 mr-2" }),
        "So funktioniert's"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Roadmap zu DSGVO-Standards-konformer Compliance" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-2xl mx-auto", children: "Unser geplanter Prozess: Schritt für Schritt zur Standards-konformen Compliance" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      {
        step: "1",
        title: "Beta-Analyse",
        description: "Geplant: KI-gestützte Analyse Ihrer Datenschutz-Situation",
        duration: "Phase 1",
        icon: BarChart3
      },
      {
        step: "2",
        title: "Standards-Dokumentation",
        description: "Vision: Automatisierte Erstellung DSGVO-konformer Dokumente",
        duration: "Phase 2",
        icon: FileText
      },
      {
        step: "3",
        title: "Workflow-Integration",
        description: "Roadmap: Integration der Prozesse in bestehende Systeme",
        duration: "Phase 3",
        icon: Zap
      },
      {
        step: "4",
        title: "Compliance-Validierung",
        description: "Ziel: Standards-konforme Prüfung und Dokumentation",
        duration: "Phase 4",
        icon: Award
      }
    ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      index < 3 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#a1251b] to-transparent" }),
      /* @__PURE__ */ jsxs(Card, { className: "relative h-full border-2 hover:border-[#e24e1b]/30 transition-colors", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-full bg-[#e24e1b] text-white flex items-center justify-center font-bold text-xl", children: step.step }),
            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: step.duration })
          ] }),
          /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-2", children: step.title }),
          /* @__PURE__ */ jsx(CardDescription, { children: step.description })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(step.icon, { className: "h-8 w-8 text-[#e24e1b] opacity-20" }) })
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-[#e24e1b] hover:bg-[#f97316]", children: [
      "Jetzt starten",
      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
    ] }) })
  ] }) });
  const DsgvoToolsSection = () => {
    const tools = [
      {
        title: "DSGVO-Compliance-Checkliste 2025",
        description: "Umfassende Checkliste mit allen wichtigen DSGVO-Anforderungen für das Jahr 2025",
        icon: CheckSquare,
        features: ["174 Prüfpunkte", "Rechtssicher", "Sofort einsetzbar"],
        color: "from-[#a1251b] to-red-600",
        bgColor: "bg-[#DC2626]/5",
        borderColor: "border-red-200 dark:border-red-800",
        href: "/resources#dsgvo-checkliste"
      },
      {
        title: "Datenschutz-Readiness-Assessment",
        description: "Bewerten Sie Ihren aktuellen Datenschutz-Status und identifizieren Sie Verbesserungspotentiale",
        icon: BarChart3,
        features: ["Automatische Bewertung", "Handlungsempfehlungen", "PDF-Report"],
        color: "from-blue-600 to-indigo-600",
        bgColor: "bg-[#e24e1b]/5",
        borderColor: "border-blue-200 dark:border-blue-800",
        href: "/resources#readiness-assessment"
      },
      {
        title: "Cookie-Compliance-Audit",
        description: "Prüfen Sie Ihre Website auf Cookie-Compliance und erhalten Sie konkrete Verbesserungsvorschläge",
        icon: Globe,
        features: ["Website-Analyse", "Compliance-Check", "Umsetzungsplan"],
        color: "from-emerald-600 to-teal-600",
        bgColor: "bg-emerald-50 dark:bg-emerald-950/20",
        borderColor: "border-emerald-200 dark:border-emerald-800",
        href: "/resources#cookie-audit"
      }
    ];
    return /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#a1251b]/10 to-blue-600/10 rounded-full blur-3xl",
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
              className: "absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-emerald-600/10 rounded-full blur-3xl",
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
                  children: /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 backdrop-blur-sm text-[#e24e1b] border-[#e24e1b]/20 px-6 py-2.5 text-sm font-medium", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
                    "DSGVO Tools & Resources"
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                motion.h2,
                {
                  className: "text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-[#a1251b] to-blue-800 bg-clip-text text-transparent",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.3 },
                  children: "Kostenlose DSGVO-Tools für sofortige Compliance"
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  className: "text-xl text-[#474747] dark:text-gray-300 max-w-4xl mx-auto leading-relaxed",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.4 },
                  children: "Nutzen Sie unsere professionellen Tools und Assessments, um Ihre DSGVO-Compliance zu überprüfen und zu verbessern."
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8 mb-12", children: tools.map((tool, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "group relative",
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.1 * index },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsxs(Card, { className: `
                  relative overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 
                  border-2 ${tool.borderColor} hover:shadow-2xl 
                  transition-all duration-500 group-hover:scale-[1.02] h-full
                `, children: [
              /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500` }),
              /* @__PURE__ */ jsxs(CardHeader, { className: "relative z-10 pb-4", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: `h-16 w-16 rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg mb-4`,
                    whileHover: { rotate: 5, scale: 1.1 },
                    transition: { type: "spring", stiffness: 300, damping: 10 },
                    children: /* @__PURE__ */ jsx(tool.icon, { className: "h-8 w-8 text-white" })
                  }
                ),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-bold text-[#232323] dark:text-gray-100 mb-3 group-hover:text-[#e24e1b] transition-colors", children: tool.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747] dark:text-gray-400 leading-relaxed mb-4", children: tool.description })
              ] }),
              /* @__PURE__ */ jsxs(CardContent, { className: "relative z-10 space-y-4", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: tool.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "flex items-center gap-2",
                    initial: { opacity: 0, x: -10 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.3, delay: 0.1 * featureIndex },
                    children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-[#474747] dark:text-gray-300", children: feature })
                    ]
                  },
                  featureIndex
                )) }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "pt-4",
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    children: /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: tool.href,
                        className: `
                          inline-flex items-center justify-center w-full px-4 py-3 
                          bg-gradient-to-r ${tool.color} text-white font-medium rounded-lg 
                          hover:shadow-lg transition-all duration-300 group/btn
                        `,
                        children: [
                          /* @__PURE__ */ jsx("span", { children: "Tool verwenden" }),
                          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" })
                        ]
                      }
                    )
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
            children: /* @__PURE__ */ jsx(
              motion.div,
              {
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
                children: /* @__PURE__ */ jsxs(
                  Link,
                  {
                    to: "/resources",
                    className: "inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 group",
                    children: [
                      /* @__PURE__ */ jsx("span", { children: "Alle Tools & Resources anzeigen" }),
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          animate: { x: [0, 5, 0] },
                          transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                          children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-6 w-6" })
                        }
                      )
                    ]
                  }
                )
              }
            )
          }
        )
      ] })
    ] });
  };
  const FAQSection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-[#F5F6F8] dark:bg-gray-900/50", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
      /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "h-3.5 w-3.5 mr-2" }),
        "Häufige Fragen"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Fragen zu DSGVO-Compliance?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-2xl mx-auto", children: "Hier finden Sie Antworten auf die wichtigsten Fragen" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: [
      {
        question: "Wie schnell kann ich mit Marsstein DSGVO-konform werden?",
        answer: "Der Zeitrahmen für DSGVO-Compliance hängt von der Größe und Komplexität Ihres Unternehmens ab. Unsere geplante KI-gestützte Analyse soll dabei helfen, die wichtigsten Handlungsfelder schnell zu identifizieren."
      },
      {
        question: "Was passiert, wenn sich die DSGVO-Gesetze ändern?",
        answer: "Unser Team von Datenschutzexperten überwacht kontinuierlich alle Gesetzesänderungen. Sobald sich etwas ändert, werden Ihre Dokumente und Prozesse automatisch aktualisiert. Sie erhalten eine Benachrichtigung über die Änderungen und welche Maßnahmen erforderlich sind. So bleiben Sie immer compliant ohne zusätzlichen Aufwand."
      },
      {
        question: "Ist meine Unternehmensdaten bei Marsstein sicher?",
        answer: "Sicherheit hat für uns höchste Priorität. Wir planen die Implementierung von Ende-zu-Ende-Verschlüsselung und die Nutzung zertifizierter Rechenzentren in Deutschland. DSGVO-Konformität ist unser Ziel."
      },
      {
        question: "Kann ich Marsstein auch für internationale Compliance nutzen?",
        answer: "Ja! Während unser Fokus auf der DSGVO liegt, unterstützt Marsstein auch internationale Datenschutzgesetze wie CCPA (Kalifornien), LGPD (Brasilien) und weitere. Unsere Enterprise-Lösung kann an spezifische Anforderungen verschiedener Jurisdiktionen angepasst werden."
      },
      {
        question: "Was ist, wenn ich bereits einen Datenschutzbeauftragten habe?",
        answer: "Marsstein soll Datenschutzbeauftragte unterstützen. Geplant sind Features zur Automatisierung zeitaufwändiger Aufgaben und Report-Erstellung, um mehr Zeit für strategische Aufgaben zu schaffen."
      },
      {
        question: "Gibt es eine Mindestvertragslaufzeit?",
        answer: "Nein, alle unsere Pläne sind monatlich kündbar. Wir glauben an die Qualität unserer Lösung und möchten, dass Sie aus Überzeugung bei uns bleiben, nicht aus vertraglichen Zwängen. Sie können jederzeit upgraden, downgraden oder kündigen."
      },
      {
        question: "Wie funktioniert der kostenlose Test?",
        answer: "Sie erhalten 30 Tage vollen Zugang zu allen Features des Professional-Plans - keine Kreditkarte erforderlich. Ein Onboarding-Spezialist hilft Ihnen bei der Einrichtung und Sie können sofort mit der Compliance-Analyse beginnen. Nach 30 Tagen entscheiden Sie, ob Sie weitermachen möchten."
      },
      {
        question: "Bieten Sie auch Schulungen für meine Mitarbeiter an?",
        answer: "Ja! Jeder Plan beinhaltet Zugang zu unserer DSGVO-Academy mit Video-Kursen, Webinaren und Zertifizierungen. Für Enterprise-Kunden bieten wir auch maßgeschneiderte Vor-Ort-Schulungen an. Alle Inhalte sind praxisnah und werden regelmäßig aktualisiert."
      }
    ].map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${index}`, className: "bg-white dark:bg-gray-900 px-6 rounded-lg border-2", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left hover:text-[#e24e1b]", children: faq.question }),
      /* @__PURE__ */ jsx(AccordionContent, { className: "text-[#474747]", children: faq.answer })
    ] }, index)) }) }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[#474747] mb-4", children: "Noch Fragen? Wir sind für Sie da!" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "group", children: [
          /* @__PURE__ */ jsx(Phone, { className: "mr-2 h-4 w-4 group-hover:text-[#e24e1b]" }),
          "+49 30 12345678"
        ] }),
        /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "group", children: [
          /* @__PURE__ */ jsx(Mail, { className: "mr-2 h-4 w-4 group-hover:text-[#e24e1b]" }),
          "compliance@marsstein.de"
        ] }),
        /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "group", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-4 w-4 group-hover:text-[#e24e1b]" }),
          "Demo buchen"
        ] })
      ] })
    ] })
  ] }) });
  const FinalCTASection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs(Card, { className: "relative overflow-hidden border-2 border-[#e24e1b]/20 bg-gradient-to-br from-[#a1251b]/5 to-purple-600/5", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-grid-black/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" }),
    /* @__PURE__ */ jsxs(CardContent, { className: "relative z-10 p-12 md:p-20 text-center space-y-8", children: [
      /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b] text-white px-6 py-2 text-base", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 mr-2" }),
        "Beta-Phase Zugang"
      ] }),
      /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-semibold tracking-tight", children: [
        "Schützen Sie Ihr Unternehmen",
        /* @__PURE__ */ jsx("span", { className: "block text-[#e24e1b]", children: "noch heute" })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-[#474747] max-w-2xl mx-auto", children: "Jeden Tag ohne vollständige DSGVO-Compliance ist ein Risiko. Starten Sie jetzt und schlafen Sie ruhiger." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 justify-center", children: [
        /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-[#e24e1b] hover:bg-[#f97316] text-white px-10 py-6 text-lg", children: [
          "Jetzt kostenlos starten",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
        ] }),
        /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "px-10 py-6 text-lg group", children: [
          /* @__PURE__ */ jsx(Phone, { className: "mr-2 h-5 w-5 group-hover:text-[#e24e1b]" }),
          "Experten-Beratung"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto", children: [
        { icon: CheckCircle2, text: "30 Tage kostenlos testen" },
        { icon: XCircle, text: "Keine Kreditkarte erforderlich" },
        { icon: Users, text: "Persönlicher Onboarding-Support" }
      ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3", children: [
        /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5 text-green-600" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: item.text })
      ] }, index)) })
    ] })
  ] }) }) });
  const HelpCircle = AlertCircle;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "DSGVO Compliance Software – Automatisiert & Rechtssicher",
        description: "DSGVO-Compliance leicht gemacht: KI-gestützte Lösung für Datenschutz. ✓ Automatisierte Prozesse ✓ Bis zu 80% Zeitersparnis. Jetzt testen!",
        canonical: "/dsgvo",
        keywords: "DSGVO Compliance, Datenschutz Software, GDPR Compliance, Datenschutz-Grundverordnung",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white dark:bg-gray-950", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsx(HeroSection, {}),
        /* @__PURE__ */ jsx(TrustSection, {}),
        /* @__PURE__ */ jsx(IndustrySection, {}),
        /* @__PURE__ */ jsx(BenefitsSection, {}),
        /* @__PURE__ */ jsx(FeaturesShowcase, {}),
        /* @__PURE__ */ jsx(HowItWorksSection, {}),
        /* @__PURE__ */ jsx(DsgvoToolsSection, {}),
        /* @__PURE__ */ jsx(FAQSection, {}),
        /* @__PURE__ */ jsx(FinalCTASection, {})
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  DsgvoCompliance as default
};
