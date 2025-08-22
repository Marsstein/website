import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Scale, Gavel, Download, ChevronDown, Euro, AlertTriangle, FileText, Users, TrendingUp, Clock, Target, CheckCircle2, Shield, Circle, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
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
const GdprFineResponseGuide = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const currentUrl = "https://marsstein.com/wissen/krisenmanagement/gdpr-fine-response";
  const responsePhases = [
    {
      id: 0,
      title: "Immediate Response & Assessment",
      timeframe: "0-24 Stunden",
      priority: "KRITISCH",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500",
      description: "Sofortige Reaktion auf Bußgeldbescheid und erste Bewertung",
      keyActions: [
        "Bußgeldbescheid vollständig analysieren",
        "Rechtsbeistand sofort kontaktieren",
        "Fristen für Einspruch/Stellungnahme notieren",
        "Interne Krisenkommunikation aktivieren",
        "Dokumentensicherung und -sammlung starten"
      ],
      fineCategories: [
        { range: "€0 - €20.000", severity: "Niedrig", response: "Interne Bearbeitung" },
        { range: "€20.000 - €100.000", severity: "Mittel", response: "Rechtsberatung empfohlen" },
        { range: "€100.000 - €1M", severity: "Hoch", response: "Spezialisierte Kanzlei" },
        { range: "€1M+", severity: "Kritisch", response: "Top-Tier Legal + PR" }
      ]
    },
    {
      id: 1,
      title: "Legal Strategy Development",
      timeframe: "1-7 Tage",
      priority: "KRITISCH",
      icon: Gavel,
      color: "from-orange-500 to-red-500",
      description: "Entwicklung der rechtlichen Verteidigungsstrategie",
      legalOptions: [
        "Vollständige Akzeptanz und Zahlung",
        "Teilweise Akzeptanz mit Verhandlung",
        "Einspruch mit Begründung",
        "Gerichtliche Anfechtung",
        "Außergerichtliche Verhandlung"
      ],
      defenseStrategies: [
        "Verfahrensfehler der Behörde",
        "Verhältnismäßigkeit der Strafe",
        "Kooperative Haltung betonen",
        "Schadensbegrenzung nachweisen",
        "Präventive Maßnahmen aufzeigen"
      ]
    },
    {
      id: 2,
      title: "Evidence Collection & Documentation",
      timeframe: "1-2 Wochen",
      priority: "HOCH",
      icon: FileText,
      color: "from-yellow-500 to-orange-500",
      description: "Sammlung von Beweisen und Dokumentation für die Verteidigung",
      evidenceTypes: [
        "Compliance-Bemühungen vor Vorfall",
        "Sofortmaßnahmen nach Vorfall",
        "Investitionen in Datenschutz",
        "Schulungsnachweis",
        "Externe Audits und Zertifikate"
      ]
    },
    {
      id: 3,
      title: "Negotiation & Settlement",
      timeframe: "2-8 Wochen",
      priority: "HOCH",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      description: "Verhandlungen mit der Aufsichtsbehörde",
      negotiationPoints: [
        "Reduzierung der Bußgeldhöhe",
        "Ratenzahlung vereinbaren",
        "Compliance-Programm als Milderung",
        "Zukunftsgerichtete Vereinbarungen",
        "Öffentlichkeitsarbeit koordinieren"
      ]
    },
    {
      id: 4,
      title: "Financial & Business Impact Management",
      timeframe: "Ongoing",
      priority: "WICHTIG",
      icon: Euro,
      color: "from-indigo-500 to-purple-500",
      description: "Management der finanziellen und geschäftlichen Auswirkungen",
      impactAreas: [
        "Cash Flow Management",
        "Versicherungsansprüche prüfen",
        "Investor Relations",
        "Kundenbeziehungen",
        "Reputation Recovery"
      ]
    },
    {
      id: 5,
      title: "Long-term Compliance Enhancement",
      timeframe: "3-12 Monate",
      priority: "WICHTIG",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      description: "Langfristige Verbesserung des Compliance-Programms",
      improvements: [
        "DSGVO-Managementsystem stärken",
        "Regelmäßige Compliance-Audits",
        "Mitarbeiterschulungen intensivieren",
        "Technische Maßnahmen ausbauen",
        "Behördenbeziehungen pflegen"
      ]
    }
  ];
  const fineFactors = [
    { factor: "Art der Verletzung", weight: "Hoch", examples: ["Einwilligung", "Datenübertragung", "Sicherheit"] },
    { factor: "Vorsatz/Fahrlässigkeit", weight: "Sehr hoch", examples: ["Absichtlich", "Grob fahrlässig", "Leicht fahrlässig"] },
    { factor: "Schadensbegrenzung", weight: "Mittel", examples: ["Sofortmaßnahmen", "Betroffenen-Info", "Behörden-Kooperation"] },
    { factor: "Unternehmensgröße", weight: "Hoch", examples: ["Jahresumsatz", "Mitarbeiterzahl", "Marktposition"] }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "DSGVO-Bußgeld Abwehr – Rechtliche Verteidigung & Strategie" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "DSGVO-Bußgeld erhalten? Strukturierte Verteidigung & Verhandlungsstrategien für Unternehmen. Jetzt professionelle Unterstützung sichern!" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: currentUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "DSGVO-Bußgeld Abwehr – Rechtliche Verteidigung & Strategie" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "DSGVO-Bußgeld erhalten? Strukturierte Verteidigung & Verhandlungsstrategien für Unternehmen. Jetzt professionelle Unterstützung sichern!" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: currentUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "DSGVO-Bußgeld Response Guide",
        "description": "Strukturierte Verteidigung gegen DSGVO-Bußgelder und -Sanktionen",
        "url": currentUrl,
        "publisher": {
          "@type": "Organization",
          "name": "MarsStein"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        }
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Wissen",
            "item": "https://marsstein.com/wissen"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Krisenmanagement",
            "item": "https://marsstein.com/wissen/krisenmanagement"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "DSGVO-Bußgeld Response",
            "item": currentUrl
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        h2, h3, h4 { scroll-margin-top: 96px; }
        
        @media (max-width: 768px) {
          .toc-mobile-toggle {
            display: flex;
          }
          .toc-desktop {
            display: none;
          }
        }
        
        @media (min-width: 768px) {
          .toc-mobile-toggle {
            display: none;
          }
          .toc-desktop {
            display: block;
          }
        }
      ` }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        ref: heroRef,
        style: { y },
        className: "relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl relative z-10", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { delay: 0.2, type: "spring", stiffness: 200 },
                  className: "inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20",
                  children: [
                    /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-purple-400" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-purple-300", children: "Legal Defense" }),
                    /* @__PURE__ */ jsx(Gavel, { className: "h-5 w-5 text-pink-400" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8", children: /* @__PURE__ */ jsxs(
                motion.span,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4, duration: 0.8 },
                  className: "block",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: "DSGVO-Bußgeld" }),
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent", children: "Abwehr-Strategien" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxs(
                motion.p,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6, duration: 0.8 },
                  className: "text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-300", children: "Strukturierte Verteidigung" }),
                    " gegen DSGVO-Bußgelder und -Sanktionen."
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.8, duration: 0.8 },
                  className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                  children: [
                    /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold", children: [
                      /* @__PURE__ */ jsx(Gavel, { className: "mr-2 h-5 w-5" }),
                      "Legal Response starten"
                    ] }),
                    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "Defense Toolkit"
                    ] })
                  ]
                }
              )
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx("div", { className: "toc-mobile-toggle mb-6", children: /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => setIsTocOpen(!isTocOpen),
          variant: "outline",
          className: "w-full border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10",
          children: /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
            "Inhaltsverzeichnis",
            /* @__PURE__ */ jsx(ChevronDown, { className: cn("h-4 w-4 transition-transform", isTocOpen && "rotate-180") })
          ] })
        }
      ) }),
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "toc-desktop bg-slate-800/60 rounded-xl p-6 mb-8 border border-slate-700/50", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white mb-4", children: "Inhaltsverzeichnis" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-slate-300", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#bussgeldbescheid", className: "hover:text-purple-400 transition-colors", children: "1. Bußgeldbescheid Assessment" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#rechtsstrategie", className: "hover:text-purple-400 transition-colors", children: "2. Rechtliche Verteidigungsstrategie" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#beweissicherung", className: "hover:text-purple-400 transition-colors", children: "3. Beweissicherung & Dokumentation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#verhandlung", className: "hover:text-purple-400 transition-colors", children: "4. Verhandlung & Settlement" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#finanzielle-auswirkungen", className: "hover:text-purple-400 transition-colors", children: "5. Finanzielle Auswirkungen" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#compliance-verbesserung", className: "hover:text-purple-400 transition-colors", children: "6. Langfristige Compliance" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#bussgeld-faktoren", className: "hover:text-purple-400 transition-colors", children: "7. Bußgeld-Faktoren" }) })
        ] })
      ] }),
      isTocOpen && /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "md:hidden bg-slate-800/60 rounded-xl p-6 mb-8 border border-slate-700/50", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white mb-4", children: "Inhaltsverzeichnis" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-slate-300", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#bussgeldbescheid", className: "hover:text-purple-400 transition-colors", onClick: () => setIsTocOpen(false), children: "1. Bußgeldbescheid Assessment" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#rechtsstrategie", className: "hover:text-purple-400 transition-colors", onClick: () => setIsTocOpen(false), children: "2. Rechtliche Verteidigungsstrategie" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#beweissicherung", className: "hover:text-purple-400 transition-colors", onClick: () => setIsTocOpen(false), children: "3. Beweissicherung & Dokumentation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#verhandlung", className: "hover:text-purple-400 transition-colors", onClick: () => setIsTocOpen(false), children: "4. Verhandlung & Settlement" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#finanzielle-auswirkungen", className: "hover:text-purple-400 transition-colors", onClick: () => setIsTocOpen(false), children: "5. Finanzielle Auswirkungen" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#compliance-verbesserung", className: "hover:text-purple-400 transition-colors", onClick: () => setIsTocOpen(false), children: "6. Langfristige Compliance" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#bussgeld-faktoren", className: "hover:text-purple-400 transition-colors", onClick: () => setIsTocOpen(false), children: "7. Bußgeld-Faktoren" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "bussgeldbescheid", className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        className: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm",
        children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-white mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Euro, { className: "h-6 w-6 text-purple-400" }),
            "DSGVO-Bußgeld Kategorien"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-4 gap-4", children: responsePhases[0].fineCategories.map((category, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, scale: 0.9 },
              whileInView: { opacity: 1, scale: 1 },
              transition: { delay: index * 0.1 },
              className: "bg-slate-800/60 rounded-xl p-6 border border-slate-700",
              children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-white mb-2", children: category.range }),
                /* @__PURE__ */ jsx(Badge, { className: cn(
                  "mb-3 text-xs",
                  category.severity === "Niedrig" ? "bg-green-500/20 text-green-300 border-green-500/30" : category.severity === "Mittel" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" : category.severity === "Hoch" ? "bg-orange-500/20 text-orange-300 border-orange-500/30" : "bg-red-500/20 text-red-300 border-red-500/30"
                ), children: category.severity }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: category.response })
              ] })
            },
            index
          )) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: responsePhases.map((phase, index) => {
      var _a;
      return /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "border-2 border-slate-700/50 bg-slate-800/80 transition-all duration-500 hover:shadow-2xl overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  whileHover: { scale: 1.1 },
                  className: cn(
                    "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                    phase.color
                  ),
                  children: /* @__PURE__ */ jsx(phase.icon, { className: "h-8 w-8 text-white" })
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                  /* @__PURE__ */ jsx("h3", { id: phase.id === 0 ? "bussgeldbescheid" : phase.id === 1 ? "rechtsstrategie" : phase.id === 2 ? "beweissicherung" : phase.id === 3 ? "verhandlung" : phase.id === 4 ? "finanzielle-auswirkungen" : "compliance-verbesserung", className: "text-2xl font-bold text-white", children: phase.title }),
                  /* @__PURE__ */ jsx(Badge, { className: cn(
                    phase.priority === "KRITISCH" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse" : phase.priority === "HOCH" ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100" : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                  ), children: phase.priority })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-2", children: phase.description }),
                /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 text-sm text-slate-400", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                  phase.timeframe
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-purple-400" }),
                "Wichtige Maßnahmen"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: (_a = phase.keyActions) == null ? void 0 : _a.map((action, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-purple-400 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: action === "Dokumentensicherung und -sammlung starten" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Link, { to: "/wissen/verschluesselung", className: "text-purple-400 hover:text-purple-300 underline", children: "Dokumentensicherung" }),
                  " und -sammlung starten"
                ] }) : action })
              ] }, idx)) })
            ] }),
            phase.legalOptions && /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Rechtliche Optionen" }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-3", children: phase.legalOptions.map((option, idx) => /* @__PURE__ */ jsx("div", { className: "bg-slate-700/50 rounded-xl p-3 text-center", children: /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: option }) }, idx)) })
            ] }),
            phase.defenseStrategies && /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Verteidigungsstrategien" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.defenseStrategies.map((strategy, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-blue-400 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: strategy })
              ] }, idx)) })
            ] }),
            phase.evidenceTypes && /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Beweisarten" }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: phase.evidenceTypes.map((type, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl", children: [
                /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-yellow-400 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: type === "Externe Audits und Zertifikate" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  "Externe ",
                  /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement/compliance-audit-emergency", className: "text-purple-400 hover:text-purple-300 underline", children: "Audits" }),
                  " und Zertifikate"
                ] }) : type === "Schulungsnachweis" ? /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-betriebsrat", className: "text-purple-400 hover:text-purple-300 underline", children: "Schulungsnachweis" }) }) : type })
              ] }, idx)) })
            ] }),
            phase.negotiationPoints && /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Verhandlungspunkte" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.negotiationPoints.map((point, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl", children: [
                /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-blue-400 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: point })
              ] }, idx)) })
            ] }),
            phase.impactAreas && /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Impact-Bereiche" }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: phase.impactAreas.map((area, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl", children: [
                /* @__PURE__ */ jsx(Euro, { className: "w-5 h-5 text-indigo-400 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: area })
              ] }, idx)) })
            ] }),
            phase.improvements && /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Verbesserungsmaßnahmen" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.improvements.map((improvement, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-green-400 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: improvement === "Regelmäßige Compliance-Audits" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  "Regelmäßige ",
                  /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement/compliance-audit-emergency", className: "text-purple-400 hover:text-purple-300 underline", children: "Compliance-Audits" })
                ] }) : improvement === "Mitarbeiterschulungen intensivieren" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-betriebsrat", className: "text-purple-400 hover:text-purple-300 underline", children: "Mitarbeiterschulungen" }),
                  " intensivieren"
                ] }) : improvement === "Technische Maßnahmen ausbauen" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  "Technische Maßnahmen ausbauen (",
                  /* @__PURE__ */ jsx(Link, { to: "/wissen/verschluesselung", className: "text-purple-400 hover:text-purple-300 underline", children: "Verschlüsselung" }),
                  ")"
                ] }) : improvement })
              ] }, idx)) })
            ] })
          ] }) })
        },
        phase.id
      );
    }) }) }) }),
    /* @__PURE__ */ jsx("section", { id: "bussgeld-faktoren", className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent", children: "Bußgeld-Faktoren" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: "Kriterien der Aufsichtsbehörden für Bußgeldbemessung" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-2 gap-8", children: fineFactors.map((factor, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1 },
          className: "bg-slate-800/60 rounded-xl p-6 border border-slate-700/50",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white", children: factor.factor }),
              /* @__PURE__ */ jsx(Badge, { className: cn(
                "text-xs",
                factor.weight === "Sehr hoch" ? "bg-red-500/20 text-red-300 border-red-500/30" : factor.weight === "Hoch" ? "bg-orange-500/20 text-orange-300 border-orange-500/30" : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
              ), children: factor.weight })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: factor.examples.map((example, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Circle, { className: "h-3 w-3 text-purple-400" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: example === "Sicherheit" ? /* @__PURE__ */ jsx(Link, { to: "/wissen/verschluesselung", className: "text-purple-400 hover:text-purple-300 underline", children: "Sicherheit" }) : example })
            ] }, idx)) })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-slate-700 text-slate-300 hover:bg-slate-800", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement/vendor-data-breach", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Vendor Data Breach Response" }),
        /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Zurück" })
      ] }) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement/business-continuity", children: [
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Business Continuity Planning" }),
        /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Weiter" }),
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  GdprFineResponseGuide as default
};
