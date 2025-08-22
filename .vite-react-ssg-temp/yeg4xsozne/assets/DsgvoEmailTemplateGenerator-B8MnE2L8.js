import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { useInView, useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Mail, Shield, Globe, Trash2, AlertOctagon, Briefcase, Sparkles, Rocket, PlayCircle, FileText, Zap, Brain, RefreshCw, UserCheck, Users, CheckCircle2, ArrowRight, Copy, Download, Clock, Euro, FileCheck, Calendar, Award } from "lucide-react";
import { c as cn } from "../main.mjs";
import "react-helmet-async";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "react-router-dom";
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
const DsgvoEmailTemplateGenerator = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DSGVO E-Mail Template Generator",
    "description": "Generator für DSGVO-konforme E-Mail-Vorlagen: Auskunftsersuchen, Löschanfragen, Betroffenenrechte",
    "applicationCategory": "Privacy Tool",
    "url": "https://marsstein.com/tools/dsgvo-email-template-generator"
  };
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isGenerating, setIsGenerating] = useState(false);
  const heroRef = useRef(null);
  useInView(heroRef, { once: true });
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  const templateCategories = [
    {
      id: "consent",
      name: "Einwilligungen & Opt-ins",
      icon: UserCheck,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-900",
      templates: 42,
      popular: ["Newsletter Double-Opt-in", "Marketing Consent", "Cookie Banner Consent"],
      description: "Rechtssichere Einwilligungen für alle Marketing-Aktivitäten",
      compliance: ["Art. 6 DSGVO", "Art. 7 DSGVO", "ePrivacy"],
      useCases: [
        { name: "Newsletter Anmeldung", time: "2 min" },
        { name: "Gewinnspiel Teilnahme", time: "3 min" },
        { name: "Webinar Registration", time: "2 min" }
      ]
    },
    {
      id: "rights",
      name: "Betroffenenrechte",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-900",
      templates: 38,
      popular: ["Auskunftsersuchen", "Löschungsanfrage", "Datenportabilität"],
      description: "Professionelle Antworten auf Betroffenenanfragen",
      compliance: ["Art. 15-22 DSGVO", "Art. 12 DSGVO"],
      useCases: [
        { name: "Auskunft erteilen", time: "5 min" },
        { name: "Löschung bestätigen", time: "2 min" },
        { name: "Daten exportieren", time: "3 min" }
      ]
    },
    {
      id: "breach",
      name: "Datenschutzverletzungen",
      icon: AlertOctagon,
      color: "from-red-500 to-pink-600",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-200 dark:border-red-900",
      templates: 24,
      popular: ["Breach Notification", "Aufsichtsbehörde Meldung", "Betroffene Information"],
      description: "Krisenkommunikation bei Datenschutzvorfällen",
      compliance: ["Art. 33 DSGVO", "Art. 34 DSGVO"],
      useCases: [
        { name: "Behördenmeldung", time: "10 min" },
        { name: "Kundeninformation", time: "5 min" },
        { name: "Interne Eskalation", time: "3 min" }
      ]
    },
    {
      id: "vendor",
      name: "Auftragsverarbeitung",
      icon: Briefcase,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-900",
      templates: 31,
      popular: ["AV-Vertrag Anfrage", "TOM Dokumentation", "Subunternehmer Info"],
      description: "Kommunikation mit Dienstleistern und Partnern",
      compliance: ["Art. 28 DSGVO", "Art. 32 DSGVO"],
      useCases: [
        { name: "AV-Vertrag anfordern", time: "3 min" },
        { name: "TOM nachfragen", time: "4 min" },
        { name: "Audit ankündigen", time: "5 min" }
      ]
    },
    {
      id: "hr",
      name: "HR & Mitarbeiter",
      icon: Users,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-900",
      templates: 28,
      popular: ["Mitarbeiter Datenschutz", "Home Office DSGVO", "Exit Prozess"],
      description: "Datenschutzkonforme HR-Kommunikation",
      compliance: ["Art. 88 DSGVO", "BDSG §26"],
      useCases: [
        { name: "Onboarding Info", time: "4 min" },
        { name: "Policy Updates", time: "2 min" },
        { name: "Exit Checkliste", time: "3 min" }
      ]
    },
    {
      id: "international",
      name: "International & Drittländer",
      icon: Globe,
      color: "from-indigo-500 to-purple-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/20",
      borderColor: "border-indigo-200 dark:border-indigo-900",
      templates: 19,
      popular: ["Drittland Transfer", "SCC Information", "Brexit Anpassung"],
      description: "Grenzüberschreitende Datenübermittlung",
      compliance: ["Art. 44-49 DSGVO", "Schrems II"],
      useCases: [
        { name: "US-Transfer Info", time: "6 min" },
        { name: "SCC Abschluss", time: "8 min" },
        { name: "TIA durchführen", time: "10 min" }
      ]
    }
  ];
  const [demoFormData, setDemoFormData] = useState({
    company: "Marsstein GmbH",
    purpose: "Newsletter-Versand",
    dataTypes: ["E-Mail", "Name", "Präferenzen"],
    retention: "24 Monate",
    legalBasis: "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)"
  });
  const keyBenefits = [
    {
      icon: Clock,
      title: "Zeit sparen",
      description: "Erstellen Sie rechtssichere Templates in Minuten statt Stunden",
      benefit: "Bis zu 90% Zeitersparnis",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Rechtssicherheit",
      description: "Anwaltlich geprüfte Formulierungen für alle DSGVO-Szenarien",
      benefit: "Minimiertes Abmahnrisiko",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Euro,
      title: "Kosten senken",
      description: "Keine teuren Rechtsberatungen für Standard-Templates mehr",
      benefit: "ROI in wenigen Wochen",
      color: "from-purple-500 to-pink-600"
    }
  ];
  const complianceFeatures = [
    {
      title: "Automatische Rechts-Updates",
      description: "Templates werden bei Gesetzesänderungen automatisch aktualisiert",
      icon: RefreshCw,
      updates: ["DSGVO Updates", "ePrivacy Anpassungen", "Rechtsprechung"]
    },
    {
      title: "Multi-Jurisdiktional",
      description: "Berücksichtigung länderspezifischer Datenschutzgesetze",
      icon: Globe,
      updates: ["DACH Region", "EU-27", "UK GDPR", "Schweizer DSG"]
    },
    {
      title: "Audit-Trail",
      description: "Vollständige Dokumentation aller generierten Templates",
      icon: FileCheck,
      updates: ["Versionierung", "Änderungshistorie", "Export-Funktion"]
    }
  ];
  const [tickerTemplates] = useState([
    { type: "Newsletter Double-Opt-in", category: "Einwilligung", icon: Mail },
    { type: "Auskunftsanfrage Antwort", category: "Betroffenenrecht", icon: Shield },
    { type: "Cookie Banner Text", category: "Consent", icon: Globe },
    { type: "Löschbestätigung", category: "DSGVO Art. 17", icon: Trash2 },
    { type: "Datenschutzverletzung Info", category: "Breach Notification", icon: AlertOctagon },
    { type: "AV-Vertrag Anfrage", category: "B2B", icon: Briefcase }
  ]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "DSGVO E-Mail Templates – Rechtssichere Vorlagen",
        description: "DSGVO E-Mail Template Generator: Rechtssichere Vorlagen für Auskunftsersuchen, Löschanfragen, Betroffenenrechte. ✓ Anwaltlich geprüft ✓ Sofort einsetzbar. Jetzt generieren!",
        canonical: "/tools/dsgvo-email-template-generator",
        keywords: "DSGVO E-Mail Templates, Auskunftsersuchen, Löschanfragen, Betroffenenrechte, DSGVO Vorlagen",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs(
        motion.section,
        {
          ref: heroRef,
          className: "relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
          style: { opacity: heroOpacity, scale: heroScale },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20" }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl",
                  animate: {
                    x: [0, 100, 0],
                    y: [0, -50, 0]
                  },
                  transition: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl",
                  animate: {
                    x: [0, -100, 0],
                    y: [0, 50, 0]
                  },
                  transition: {
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl relative z-10", children: /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "text-center",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                children: [
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-8",
                      initial: { opacity: 0, scale: 0.9 },
                      animate: { opacity: 1, scale: 1 },
                      transition: { delay: 0.2 },
                      children: [
                        /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-blue-400" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-blue-300", children: "KI-gestützte DSGVO Templates" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.h1,
                    {
                      className: "text-5xl md:text-7xl font-bold mb-6",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.3 },
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "text-white", children: "Rechtssichere" }),
                        /* @__PURE__ */ jsx("br", {}),
                        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent", children: "Email-Templates" }),
                        /* @__PURE__ */ jsx("br", {}),
                        /* @__PURE__ */ jsx("span", { className: "text-white", children: "in Sekunden" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    motion.p,
                    {
                      className: "text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.4 },
                      children: "KI-generierte, anwaltlich geprüfte Email-Vorlagen für jeden DSGVO-Anwendungsfall. Sparen Sie 90% Zeit und 100% Rechtsrisiko."
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "flex flex-col sm:flex-row gap-4 justify-center mb-16",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.5 },
                      children: [
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            size: "lg",
                            className: "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300",
                            children: [
                              /* @__PURE__ */ jsx(Rocket, { className: "mr-2 h-5 w-5" }),
                              "Template Generator starten"
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxs(
                          Button,
                          {
                            size: "lg",
                            variant: "outline",
                            className: "border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-xl",
                            children: [
                              /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                              "Live Demo ansehen"
                            ]
                          }
                        )
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto",
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.6 },
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "180+" }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Template-Varianten" }),
                          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center text-green-400 text-xs", children: [
                            /* @__PURE__ */ jsx(FileText, { className: "h-3 w-3 mr-1" }),
                            "Alle DSGVO-Szenarien"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "5 Min" }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Setup-Zeit" }),
                          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center text-blue-400 text-xs", children: [
                            /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3 mr-1" }),
                            "Sofort einsatzbereit"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "KI" }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Powered" }),
                          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center text-purple-400 text-xs", children: [
                            /* @__PURE__ */ jsx(Brain, { className: "h-3 w-3 mr-1" }),
                            "Smart Generation"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: "24/7" }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400", children: "Updates" }),
                          /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center text-yellow-400 text-xs", children: [
                            /* @__PURE__ */ jsx(RefreshCw, { className: "h-3 w-3 mr-1" }),
                            "Immer aktuell"
                          ] })
                        ] })
                      ]
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10 py-4 overflow-hidden",
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.8 },
                children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-12 animate-scroll-x", children: [...tickerTemplates, ...tickerTemplates].map((template, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 text-sm whitespace-nowrap", children: [
                  /* @__PURE__ */ jsx(template.icon, { className: "h-4 w-4 text-blue-400" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: template.type }),
                  /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs border-gray-600 text-gray-300", children: template.category })
                ] }, index)) })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-12",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "180+ rechtssichere Templates" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Für jeden DSGVO-Anwendungsfall die perfekte Vorlage" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: templateCategories.map((category, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            children: /* @__PURE__ */ jsxs(
              Card,
              {
                className: cn(
                  "group relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer",
                  category.borderColor,
                  selectedCategory === category.id && "ring-2 ring-primary"
                ),
                onClick: () => setSelectedCategory(category.id),
                children: [
                  /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: cn(
                        "p-3 rounded-xl bg-gradient-to-br",
                        category.color
                      ), children: /* @__PURE__ */ jsx(category.icon, { className: "h-6 w-6 text-white" }) }),
                      /* @__PURE__ */ jsxs(Badge, { variant: "secondary", children: [
                        category.templates,
                        " Templates"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: category.name }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: category.description })
                  ] }),
                  /* @__PURE__ */ jsxs(CardContent, { children: [
                    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-2", children: "Beliebte Templates:" }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-1", children: category.popular.map((template, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { children: template })
                        ] }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-2", children: "Rechtsgrundlagen:" }),
                        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: category.compliance.map((law, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: law }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold mb-2", children: "Zeiteinsparung:" }),
                        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: category.useCases.map((useCase, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: useCase.name }),
                          /* @__PURE__ */ jsx("span", { className: "font-medium text-green-600", children: useCase.time })
                        ] }, idx)) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-primary", children: "Templates erkunden" }),
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" })
                    ] })
                  ] })
                ]
              }
            )
          },
          category.id
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-12",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-4", children: "Live Template Generator" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300", children: "Sehen Sie, wie schnell Sie rechtssichere Templates erstellen" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8",
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "Template konfigurieren" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-300 mb-2 block", children: "Unternehmensname" }),
                    /* @__PURE__ */ jsx(
                      "input",
                      {
                        type: "text",
                        value: demoFormData.company,
                        onChange: (e) => setDemoFormData({ ...demoFormData, company: e.target.value }),
                        className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-300 mb-2 block", children: "Verarbeitungszweck" }),
                    /* @__PURE__ */ jsxs(
                      "select",
                      {
                        value: demoFormData.purpose,
                        onChange: (e) => setDemoFormData({ ...demoFormData, purpose: e.target.value }),
                        className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500",
                        children: [
                          /* @__PURE__ */ jsx("option", { value: "Newsletter-Versand", children: "Newsletter-Versand" }),
                          /* @__PURE__ */ jsx("option", { value: "Kundenkommunikation", children: "Kundenkommunikation" }),
                          /* @__PURE__ */ jsx("option", { value: "Marketing-Kampagnen", children: "Marketing-Kampagnen" }),
                          /* @__PURE__ */ jsx("option", { value: "Vertragserfüllung", children: "Vertragserfüllung" })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-300 mb-2 block", children: "Verarbeitete Daten" }),
                    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: ["E-Mail", "Name", "Telefon", "Adresse", "Präferenzen", "Kaufhistorie"].map((dataType) => /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 text-sm text-gray-300", children: [
                      /* @__PURE__ */ jsx(
                        "input",
                        {
                          type: "checkbox",
                          checked: demoFormData.dataTypes.includes(dataType),
                          onChange: (e) => {
                            if (e.target.checked) {
                              setDemoFormData({ ...demoFormData, dataTypes: [...demoFormData.dataTypes, dataType] });
                            } else {
                              setDemoFormData({ ...demoFormData, dataTypes: demoFormData.dataTypes.filter((t) => t !== dataType) });
                            }
                          },
                          className: "rounded border-gray-600 bg-white/10"
                        }
                      ),
                      dataType
                    ] }, dataType)) })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      onClick: () => setIsGenerating(true),
                      disabled: isGenerating,
                      className: "w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white",
                      children: isGenerating ? /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(RefreshCw, { className: "mr-2 h-4 w-4 animate-spin" }),
                        "Template wird generiert..."
                      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(Sparkles, { className: "mr-2 h-4 w-4" }),
                        "Template generieren"
                      ] })
                    }
                  )
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8",
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: "Generiertes Template" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", className: "text-gray-300 border-gray-600", children: /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" }) }),
                    /* @__PURE__ */ jsx(Button, { size: "sm", variant: "outline", className: "text-gray-300 border-gray-600", children: /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "bg-white/5 border border-white/10 rounded-lg p-6 font-mono text-sm text-gray-300 leading-relaxed", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: isGenerating ? /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    className: "space-y-3",
                    children: [...Array(8)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsx("div", { className: `h-4 bg-gray-700 rounded animate-pulse`, style: { width: `${Math.random() * 60 + 40}%` } }) }, i))
                  },
                  "generating"
                ) : /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    className: "whitespace-pre-wrap",
                    children: `Betreff: Ihre Einwilligung für ${demoFormData.purpose} bei ${demoFormData.company}

Sehr geehrte/r Dateninhaber/in,

hiermit bitten wir Sie um Ihre Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten für ${demoFormData.purpose}.

Verarbeitete Daten:
${demoFormData.dataTypes.map((type) => `• ${type}`).join("\n")}

Rechtsgrundlage: ${demoFormData.legalBasis}
Speicherdauer: ${demoFormData.retention}

Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen...

[Einwilligung erteilen] [Ablehnen]

Mit freundlichen Grüßen
${demoFormData.company}`
                  },
                  "template"
                ) }) }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6 grid grid-cols-3 gap-4 text-center", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400", children: "100%" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400", children: "DSGVO-konform" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-400", children: "2.3s" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400", children: "Generierungszeit" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400", children: "A+" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400", children: "Compliance Score" })
                  ] })
                ] })
              ]
            }
          )
        ] }),
        useEffect(() => {
          if (isGenerating) {
            const timer = setTimeout(() => setIsGenerating(false), 2300);
            return () => clearTimeout(timer);
          }
        }, [isGenerating])
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-12",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Ihre Vorteile auf einen Blick" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "So profitiert Ihr Unternehmen von automatisierten Templates" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: keyBenefits.map((benefit, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20",
                "bg-gradient-to-br",
                benefit.color
              ) }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br",
                  benefit.color
                ), children: /* @__PURE__ */ jsx(benefit.icon, { className: "h-8 w-8 text-white" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-3", children: benefit.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-4", children: benefit.description }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-medium", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600" }),
                  /* @__PURE__ */ jsx("span", { className: cn(
                    "bg-gradient-to-r bg-clip-text text-transparent",
                    benefit.color
                  ), children: benefit.benefit })
                ] })
              ] })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-12",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-4", children: "Immer auf dem neuesten Stand" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground", children: "Automatische Updates bei Rechtsänderungen" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-8", children: complianceFeatures.map((feature, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300",
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl", children: /* @__PURE__ */ jsx(feature.icon, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: feature.title })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: feature.description }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: feature.updates.map((update, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: update })
              ] }, idx)) })
            ]
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl text-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Nie wieder unsichere Email-Texte" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 mb-12", children: "Starten Sie jetzt mit rechtssicheren Templates und sparen Sie Zeit, Geld und Nerven. 14 Tage kostenlos testen - keine Kreditkarte erforderlich." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  className: "bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300",
                  children: [
                    /* @__PURE__ */ jsx(Rocket, { className: "mr-2 h-5 w-5" }),
                    "Kostenlos starten"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl",
                  children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                    "Demo vereinbaren"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-white", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsx("span", { children: "100% DSGVO-konform" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsx("span", { children: "Setup in 5 Minuten" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsx(Award, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsx("span", { children: "Anwaltlich geprüft" })
              ] })
            ] })
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  DsgvoEmailTemplateGenerator as default
};
