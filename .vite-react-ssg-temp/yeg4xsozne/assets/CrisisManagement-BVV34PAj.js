import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { AlertTriangle, Shield, FileCheck, MessageSquare, Building2, Scale, Rocket, FileText, Home, ChevronRight, List, Clock, Phone, Download, Flag, Timer, Calendar, Star, CheckCircle2, ArrowRight, ExternalLink, Users, Lock } from "lucide-react";
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
import "react-helmet-async";
const CrisisManagement = () => {
  const [selectedUrgency, setSelectedUrgency] = useState("all");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  useEffect(() => {
    document.title = "Krisenmanagement Datenschutz – DSGVO Notfallpläne 72h";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "DSGVO-Notfallpläne für Datenschutzverletzungen: 72h Data Breach Response, Behördenprüfungen & Compliance-Krisen. Jetzt vorbereiten!");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "DSGVO-Notfallpläne für Datenschutzverletzungen: 72h Data Breach Response, Behördenprüfungen & Compliance-Krisen. Jetzt vorbereiten!";
      document.head.appendChild(meta);
    }
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://marsstein.de/wissen/krisenmanagement");
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://marsstein.de/wissen/krisenmanagement";
      document.head.appendChild(link);
    }
    const ogTags = [
      { property: "og:title", content: "Krisenmanagement Datenschutz – DSGVO Notfallpläne 72h" },
      { property: "og:description", content: "DSGVO-Notfallpläne für Datenschutzverletzungen: 72h Data Breach Response, Behördenprüfungen & Compliance-Krisen." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://marsstein.de/wissen/krisenmanagement" }
    ];
    ogTags.forEach((tag) => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute("content", tag.content);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Krisenmanagement im Datenschutz",
      description: "Umfassende Notfallpläne und Krisenmanagement-Strategien für Datenschutzverletzungen und Compliance-Krisen.",
      datePublished: "2024-01-01",
      dateModified: (/* @__PURE__ */ new Date()).toISOString(),
      author: {
        "@type": "Organization",
        name: "MarsStein"
      },
      publisher: {
        "@type": "Organization",
        name: "MarsStein",
        logo: {
          "@type": "ImageObject",
          url: "https://marsstein.de/logo.png"
        }
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://marsstein.de/wissen/krisenmanagement"
      }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (scriptTag) {
        scriptTag.remove();
      }
    };
  }, []);
  const urgencyCategories = [
    { id: "all", name: "Alle Situationen", icon: AlertTriangle, count: 8 },
    { id: "critical", name: "Kritisch (0-1h)", icon: Flag, count: 3 },
    { id: "urgent", name: "Dringend (1-24h)", icon: Timer, count: 3 },
    { id: "important", name: "Wichtig (1-7 Tage)", icon: Calendar, count: 2 }
  ];
  const crisisScenarios = [
    {
      id: "data-breach-72h",
      title: "72h Data Breach Response",
      description: "Sofortige Maßnahmen bei Datenschutzverletzungen nach DSGVO Artikel 33/34",
      icon: AlertTriangle,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-red-900 to-slate-900",
      urgency: "critical",
      timeframe: "0-72 Stunden",
      difficulty: "Kritisch",
      link: "/wissen/krisenmanagement/data-breach-72h",
      urgent: true,
      steps: 8,
      stakeholders: ["IT-Team", "Datenschutzbeauftragte", "Geschäftsführung", "Rechtsabteilung"],
      featured: [
        "Sofortmaßnahmen (0-1h)",
        "Behördenmeldung (bis 72h)",
        "Betroffenen-Information",
        "Dokumentation & Analyse"
      ]
    },
    {
      id: "security-incident",
      title: "IT-Sicherheitsvorfall Management",
      description: "Strukturierte Reaktion auf Cyberangriffe und Sicherheitsverletzungen",
      icon: Shield,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900",
      urgency: "critical",
      timeframe: "0-4 Stunden",
      difficulty: "Kritisch",
      link: "/wissen/krisenmanagement/security-incident",
      urgent: true,
      steps: 6,
      stakeholders: ["CISO", "IT-Security", "Management", "External Experts"],
      featured: [
        "Incident Detection & Analysis",
        "Containment Strategies",
        "Evidence Preservation",
        "Communication Protocol"
      ]
    },
    {
      id: "compliance-audit-emergency",
      title: "Compliance Audit Notfall",
      description: "Schnelle Vorbereitung auf unangekündigte Behördenprüfungen",
      icon: FileCheck,
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900",
      urgency: "urgent",
      timeframe: "1-24 Stunden",
      difficulty: "Hoch",
      link: "/wissen/krisenmanagement/compliance-audit-emergency",
      steps: 5,
      stakeholders: ["Compliance Officer", "Legal Team", "IT-Team", "HR"],
      featured: [
        "Dokumenten-Sammlung",
        "Team-Koordination",
        "Kommunikationsstrategie",
        "Rechte & Pflichten"
      ]
    },
    {
      id: "media-crisis",
      title: "Media Crisis Management",
      description: "Professionelle Kommunikation bei öffentlicher Datenschutz-Krise",
      icon: MessageSquare,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
      urgency: "urgent",
      timeframe: "1-12 Stunden",
      difficulty: "Hoch",
      link: "/wissen/krisenmanagement/media-crisis",
      steps: 7,
      stakeholders: ["PR-Team", "Management", "Legal", "Communications"],
      featured: [
        "Erste Stellungnahme",
        "Stakeholder-Kommunikation",
        "Social Media Management",
        "Reputation Recovery"
      ]
    },
    {
      id: "vendor-data-breach",
      title: "Vendor Data Breach Response",
      description: "Reaktion auf Datenverletzungen bei Dienstleistern und Lieferanten",
      icon: Building2,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900",
      urgency: "urgent",
      timeframe: "2-48 Stunden",
      difficulty: "Hoch",
      link: "/wissen/krisenmanagement/vendor-data-breach",
      steps: 6,
      stakeholders: ["Procurement", "Legal", "Data Protection", "Vendor Management"],
      featured: [
        "Vendor Impact Assessment",
        "Contractual Rights Enforcement",
        "Customer Communication",
        "Recovery Planning"
      ]
    },
    {
      id: "gdpr-fine-response",
      title: "DSGVO-Bußgeld Verfahren",
      description: "Strukturierte Reaktion auf Bußgeldverfahren und behördliche Sanktionen",
      icon: Scale,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900",
      urgency: "important",
      timeframe: "1-7 Tage",
      difficulty: "Experte",
      link: "/wissen/krisenmanagement/gdpr-fine-response",
      steps: 8,
      stakeholders: ["Legal Counsel", "Data Protection Officer", "Management", "External Lawyers"],
      featured: [
        "Rechtsmittel-Strategie",
        "Evidence Collection",
        "Defense Preparation",
        "Settlement Negotiation"
      ]
    },
    {
      id: "business-continuity",
      title: "Business Continuity Planning",
      description: "Aufrechterhaltung des Geschäftsbetriebs während Compliance-Krisen",
      icon: Rocket,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900",
      urgency: "important",
      timeframe: "1-14 Tage",
      difficulty: "Fortgeschritten",
      link: "/wissen/krisenmanagement/business-continuity",
      steps: 9,
      stakeholders: ["Operations", "IT", "Risk Management", "Leadership"],
      featured: [
        "Risk Assessment Update",
        "Alternative Processes",
        "Stakeholder Management",
        "Recovery Roadmap"
      ]
    },
    {
      id: "crisis-communication-templates",
      title: "Krisenkommunikations-Vorlagen",
      description: "Vorgefertigte Templates für verschiedene Krisensituationen",
      icon: FileText,
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900",
      urgency: "all",
      timeframe: "Sofort verfügbar",
      difficulty: "Alle Level",
      link: "/wissen/krisenmanagement/communication-templates",
      popular: true,
      steps: 12,
      stakeholders: ["All Teams"],
      featured: [
        "Behörden-Meldungen",
        "Kunden-Information",
        "Mitarbeiter-Kommunikation",
        "Press Statements"
      ]
    }
  ];
  const filteredScenarios = selectedUrgency === "all" ? crisisScenarios : crisisScenarios.filter((scenario) => scenario.urgency === selectedUrgency);
  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "critical":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse";
      case "urgent":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100";
      case "important":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
    }
  };
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Alle Level":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
      case "Fortgeschritten":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
      case "Hoch":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100";
      case "Experte":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100";
      case "Kritisch":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("nav", { className: "bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("ol", { className: "flex items-center py-3 text-sm", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "text-slate-400 hover:text-red-400 transition-colors flex items-center", children: [
        /* @__PURE__ */ jsx(Home, { className: "h-4 w-4 mr-1" }),
        "Home"
      ] }) }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 mx-2 text-slate-600" }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen", className: "text-slate-400 hover:text-red-400 transition-colors", children: "Wissen" }) }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 mx-2 text-slate-600" }),
      /* @__PURE__ */ jsx("li", { className: "text-red-400 font-semibold", children: "Krisenmanagement" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8", children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/60 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsx(List, { className: "h-5 w-5 text-red-400" }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-white", children: "Inhaltsverzeichnis" })
      ] }),
      /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#crisis-response-overview", className: "text-slate-300 hover:text-red-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
          "Krisenmanagement Überblick"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#urgency-categories", className: "text-slate-300 hover:text-red-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
          "Dringlichkeitskategorien"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#crisis-scenarios", className: "text-slate-300 hover:text-red-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
          "Notfallszenarien"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#emergency-support", className: "text-slate-300 hover:text-red-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
          "Notfall-Unterstützung"
        ] }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        id: "crisis-response-overview",
        ref: heroRef,
        style: { y, opacity },
        className: "relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24",
        children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "text-center mb-20",
              children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { delay: 0.2, type: "spring", stiffness: 200 },
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 backdrop-blur-sm rounded-full mb-8 border border-red-500/20",
                    children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400 animate-pulse" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-red-300", children: "Emergency Response" }),
                      /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-orange-400" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.4, duration: 0.8 },
                    className: "text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Krisen" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent", children: "Management" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "im" }),
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent", children: "Datenschutz" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.6, duration: 0.8 },
                    className: "text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-300", children: "Sofortmaßnahmen" }),
                      " und strukturierte Notfallpläne für Datenschutzverletzungen, Behördenprüfungen und Compliance-Krisen."
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
                      /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "mr-2 h-5 w-5" }),
                        "72h Data Breach Plan"
                      ] }) }),
                      /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-red-500/30 hover:border-red-400 text-red-300 hover:bg-red-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                        "Notfall-Checklisten"
                      ] }) })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1, duration: 0.8 },
              className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto",
              children: [
                { value: "72h", label: "DSGVO Meldefrist", sublabel: "An Aufsichtsbehörden", icon: Clock, color: "from-red-500 to-orange-500" },
                { value: "€20M", label: "Max. DSGVO-Bußgeld", sublabel: "Oder 4% Jahresumsatz", icon: Scale, color: "from-orange-500 to-red-500" },
                { value: "24/7", label: "Response Bereitschaft", sublabel: "Für kritische Vorfälle", icon: Shield, color: "from-red-500 to-pink-500" },
                { value: "8", label: "Notfallszenarien", sublabel: "Praxiserprobte Pläne", icon: FileText, color: "from-pink-500 to-red-500" }
              ].map((stat, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 1.2 + index * 0.1, duration: 0.6 },
                  className: "relative group",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300` }),
                    /* @__PURE__ */ jsxs("div", { className: "relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300", children: [
                      /* @__PURE__ */ jsx("div", { className: `inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`, children: /* @__PURE__ */ jsx(stat.icon, { className: "h-6 w-6 text-white" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-bold text-white mb-1", children: stat.value }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-slate-200 mb-1", children: stat.label }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: stat.sublabel })
                    ] })
                  ]
                },
                index
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("section", { id: "urgency-categories", className: "py-8 px-4 sm:px-6 lg:px-8 scroll-mt-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "flex flex-wrap justify-center gap-4 mb-12",
        children: urgencyCategories.map((category, index) => /* @__PURE__ */ jsxs(
          motion.button,
          {
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { delay: index * 0.1, duration: 0.4 },
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            onClick: () => setSelectedUrgency(category.id),
            className: cn(
              "flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border-2",
              selectedUrgency === category.id ? "bg-gradient-to-r from-red-500 to-orange-500 text-white border-red-500 shadow-xl" : "bg-slate-800/60 text-slate-300 border-slate-700/50 hover:border-red-500/50 hover:text-red-300"
            ),
            children: [
              /* @__PURE__ */ jsx(category.icon, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsx("span", { children: category.name }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-slate-700 text-slate-200 border-0 text-xs", children: category.count })
            ]
          },
          category.id
        ))
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { id: "crisis-scenarios", className: "py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 xl:grid-cols-3 gap-8", children: filteredScenarios.map((scenario, index) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { delay: index * 0.1, duration: 0.6 },
        whileHover: { y: -10 },
        className: "group relative",
        children: [
          /* @__PURE__ */ jsx("div", { className: cn(
            "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
            `bg-gradient-to-r ${scenario.color}`,
            "opacity-0 group-hover:opacity-30"
          ) }),
          /* @__PURE__ */ jsxs(Card, { className: "relative h-full border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: cn("absolute inset-0", scenario.bgColor) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "relative p-8 h-full flex flex-col", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    whileHover: { rotate: 360 },
                    transition: { duration: 0.6 },
                    className: cn(
                      "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                      scenario.color
                    ),
                    children: /* @__PURE__ */ jsx(scenario.icon, { className: "h-8 w-8 text-white" })
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 items-end", children: [
                  scenario.popular && /* @__PURE__ */ jsxs(Badge, { className: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30", children: [
                    /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 mr-1" }),
                    "Beliebt"
                  ] }),
                  scenario.urgent && /* @__PURE__ */ jsxs(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30 animate-pulse", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 mr-1" }),
                    "Kritisch"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6 flex-grow", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3 text-white group-hover:text-red-300 transition-colors", children: scenario.title }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6 leading-relaxed", children: scenario.description }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-800/60 rounded-xl backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-red-400", children: scenario.steps }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "Schritte" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-orange-400", children: scenario.timeframe }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: "Zeitrahmen" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mb-6", children: [
                  /* @__PURE__ */ jsx(Badge, { className: getUrgencyColor(scenario.urgency), children: scenario.urgency === "critical" ? "Kritisch" : scenario.urgency === "urgent" ? "Dringend" : "Wichtig" }),
                  /* @__PURE__ */ jsx(Badge, { className: getDifficultyColor(scenario.difficulty), children: scenario.difficulty })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Beteiligte Teams:" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: scenario.stakeholders.map((stakeholder, idx) => /* @__PURE__ */ jsx(Badge, { className: "bg-slate-700 text-slate-200 text-xs", children: stakeholder }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Wichtige Schritte:" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: scenario.featured.map((step, idx) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: -20 },
                      whileInView: { opacity: 1, x: 0 },
                      transition: { delay: idx * 0.1, duration: 0.4 },
                      className: "flex items-center gap-2",
                      children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-red-400 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: step })
                      ]
                    },
                    idx
                  )) })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  className: "mt-auto",
                  children: /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
                    "w-full bg-gradient-to-r text-white border-0 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300",
                    scenario.color
                  ), children: /* @__PURE__ */ jsxs(Link, { to: scenario.link, className: "flex items-center justify-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { children: "Notfallplan öffnen" }),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" }),
                    /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 opacity-60" })
                  ] }) })
                }
              )
            ] })
          ] })
        ]
      },
      scenario.id
    )) }) }) }),
    /* @__PURE__ */ jsxs("section", { id: "emergency-support", className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-800/50 via-red-900/30 to-slate-800/50" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent", children: "Notfall-Unterstützung" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-300", children: "Professionelle Hilfe in kritischen Situationen" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
          {
            title: "24/7 Hotline",
            description: "Sofortige Beratung bei kritischen Datenschutzvorfällen",
            icon: Phone,
            action: "Jetzt anrufen",
            color: "from-red-500 to-orange-500",
            urgent: true
          },
          {
            title: "Expert Consultation",
            description: "Schnelle Einschätzung durch Datenschutz-Experten",
            icon: Users,
            action: "Termin buchen",
            color: "from-orange-500 to-red-500"
          },
          {
            title: "Legal Support",
            description: "Rechtliche Unterstützung bei Bußgeldverfahren",
            icon: Scale,
            action: "Kontakt aufnehmen",
            color: "from-red-500 to-pink-500"
          }
        ].map((service, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.2, duration: 0.6 },
            whileHover: { y: -5 },
            className: "group",
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6 shadow-lg",
                service.color
              ), children: /* @__PURE__ */ jsx(service.icon, { className: "h-8 w-8 text-white" }) }),
              service.urgent && /* @__PURE__ */ jsxs(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30 mb-4 animate-pulse", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 mr-1" }),
                "Verfügbar 24/7"
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3 text-white", children: service.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: service.description }),
              /* @__PURE__ */ jsxs(Button, { className: cn(
                "w-full bg-gradient-to-r text-white",
                service.color
              ), children: [
                service.action,
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] })
            ] }) })
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/10 to-red-900/20" }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl relative z-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-black mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "Bereit für den" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent", children: "Ernstfall?" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed", children: [
              "Laden Sie alle ",
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-300", children: "Notfallpläne und Checklisten" }),
              " herunter und bereiten Sie sich optimal vor."
            ] }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { delay: 0.4, duration: 0.6 },
                className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
                children: [
                  /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300",
                      children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-3 h-6 w-6" }),
                        "Alle Notfallpläne laden",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-3 h-6 w-6" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-red-500/30 hover:border-red-400 text-red-300 hover:bg-red-500/10 px-10 py-4 text-lg font-bold backdrop-blur-sm", children: [
                    /* @__PURE__ */ jsx(Phone, { className: "mr-3 h-6 w-6" }),
                    "Notfall-Kontakt"
                  ] }) })
                ]
              }
            )
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "Verwandte" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent", children: "Themen" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300", children: "Weitere wichtige Datenschutz-Bereiche für Ihr Unternehmen" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: 0.1, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 text-white", children: "DSGVO Grundlagen" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Verstehen Sie die rechtlichen Anforderungen und Pflichten der DSGVO." }),
              /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/dsgvo-grundlagen", children: [
                "Mehr erfahren",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: 0.2, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-4", children: /* @__PURE__ */ jsx(FileCheck, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 text-white", children: "Audit Management" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Systematische Prüfung und Optimierung Ihrer Datenschutz-Compliance." }),
              /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/audit-management", children: [
                "Mehr erfahren",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: 0.3, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4", children: /* @__PURE__ */ jsx(Lock, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 text-white", children: "Datensicherheit" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Technische und organisatorische Maßnahmen zum Schutz Ihrer Daten." }),
              /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/technische-massnahmen/verschluesselung", children: [
                "Mehr erfahren",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] }) })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  CrisisManagement as default
};
