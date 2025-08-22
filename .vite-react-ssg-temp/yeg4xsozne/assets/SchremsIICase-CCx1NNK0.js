import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { ArrowLeft, Scale, Star, AlertTriangle, Calendar, Globe, Download, Target, Building2, Shield, CheckCircle2, Clock, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const SchremsIICase = () => {
  useEffect(() => {
    document.title = "Schrems II – Internationale Datentransfers nach EuGH";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Schrems II Urteil: Privacy Shield ungültig, SCC-Anforderungen, US-Datentransfers, TIA-Bewertung. ✓ Legal Analysis ✓ Compliance Impact ✓ Practical Guidance.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Schrems II Urteil: Privacy Shield ungültig, SCC-Anforderungen, US-Datentransfers, TIA-Bewertung. ✓ Legal Analysis ✓ Compliance Impact ✓ Practical Guidance.";
      document.head.appendChild(meta);
    }
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1";
      document.head.appendChild(meta);
    }
  }, []);
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      h2[id], h3[id] { 
        scroll-margin-top: 96px; 
      }
      @media (max-width: 768px) {
        h2[id], h3[id] { 
          scroll-margin-top: 80px; 
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [activeTab, setActiveTab] = useState("overview");
  const [copySuccess, setCopySuccess] = useState("");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const keyFindings = [
    {
      title: "Privacy Shield ungültig",
      description: "Das EU-US Privacy Shield Framework wurde für ungültig erklärt",
      impact: "KRITISCH",
      details: "Sofortiger Stopp aller Datenübertragungen in die USA unter Privacy Shield"
    },
    {
      title: "Standardvertragsklauseln weiterhin gültig",
      description: "SCCs können weiterhin verwendet werden, aber mit zusätzlichen Garantien",
      impact: "HOCH",
      details: "Case-by-case Bewertung des Schutzniveaus im Drittland erforderlich"
    },
    {
      title: "Zusätzliche Schutzmaßnahmen erforderlich",
      description: "Ergänzende Maßnahmen bei unzureichendem Schutzniveau",
      impact: "HOCH",
      details: "Technische und organisatorische Maßnahmen zur Kompensation"
    },
    {
      title: "Kontinuierliche Überwachung",
      description: "Laufende Bewertung der Rechtslage in Drittländern",
      impact: "MITTEL",
      details: "Regelmäßige Neubewertung der Übertragungsgrundlagen"
    }
  ];
  const practicalImpacts = [
    {
      category: "Cloud Services",
      icon: Globe,
      color: "from-blue-500 to-indigo-500",
      impacts: [
        "Bewertung US-amerikanischer Cloud-Anbieter",
        "Implementierung zusätzlicher Verschlüsselung",
        "Geografische Datenlokalisierung prüfen",
        "Alternative EU-Anbieter evaluieren"
      ]
    },
    {
      category: "Marketing Tools",
      icon: Target,
      color: "from-purple-500 to-pink-500",
      impacts: [
        "Google Analytics konfigurieren oder ersetzen",
        "Social Media Plugins überprüfen",
        "Newsletter-Tools auf EU-Server migrieren",
        "Tracking-Pixel und Cookies anpassen"
      ]
    },
    {
      category: "Business Operations",
      icon: Building2,
      color: "from-emerald-500 to-teal-500",
      impacts: [
        "Internationale Geschäftstätigkeiten bewerten",
        "Personalverwaltung in Drittländern",
        "Kundensupport-Systeme prüfen",
        "Backup-Strategien überdenken"
      ]
    },
    {
      category: "Compliance Management",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      impacts: [
        "Transfer Impact Assessments durchführen",
        "Neue Verträge mit Drittland-Anbietern",
        "Datenschutzerklärungen aktualisieren",
        "Mitarbeiterschulungen erweitern"
      ]
    }
  ];
  const actionItems = [
    {
      phase: "Sofortmaßnahmen (0-30 Tage)",
      urgency: "KRITISCH",
      color: "from-red-500 to-pink-500",
      tasks: [
        "Inventar aller US-Datenübertragungen erstellen",
        "Privacy Shield Vereinbarungen identifizieren",
        "Kritische Systeme auf EU-Server migrieren",
        "Rechtliche Bewertung durch Experten einholen"
      ]
    },
    {
      phase: "Mittelfristige Maßnahmen (1-3 Monate)",
      urgency: "HOCH",
      color: "from-orange-500 to-red-500",
      tasks: [
        "Transfer Impact Assessments für alle Drittland-Übertragungen",
        "Neue Standardvertragsklauseln implementieren",
        "Zusätzliche technische Schutzmaßnahmen einführen",
        "Alternative Anbieter evaluieren und migrieren"
      ]
    },
    {
      phase: "Langfristige Strategie (3-12 Monate)",
      urgency: "MITTEL",
      color: "from-blue-500 to-indigo-500",
      tasks: [
        "Kontinuierliches Monitoring der Rechtslage",
        "Regelmäßige Bewertung der Schutzmaßnahmen",
        "Schulungsprogramme für Mitarbeiter",
        "Governance-Strukturen für internationale Transfers"
      ]
    }
  ];
  const timeline = [
    {
      date: "16. Juli 2020",
      event: "EuGH Urteil Schrems II",
      description: "Privacy Shield wird für ungültig erklärt",
      type: "critical"
    },
    {
      date: "August 2020",
      event: "Erste Behörden-Stellungnahmen",
      description: "Nationale Datenschutzbehörden reagieren",
      type: "important"
    },
    {
      date: "November 2020",
      event: "EDSA Empfehlungen 01/2020",
      description: "Leitlinien für ergänzende Maßnahmen",
      type: "guidance"
    },
    {
      date: "Juni 2021",
      event: "Neue Standardvertragsklauseln",
      description: "EU-Kommission verabschiedet neue SCCs",
      type: "update"
    },
    {
      date: "2021-2024",
      event: "Kontinuierliche Entwicklung",
      description: "Weitere Urteile und Leitlinien",
      type: "ongoing"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        ref: heroRef,
        style: { y, opacity },
        className: "relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "mb-8",
              children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-purple-500/30 text-purple-300 hover:bg-purple-500/10", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/rechtsprechung", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
                "Zurück zur Rechtsprechung"
              ] }) })
            }
          ),
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
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20",
                    children: [
                      /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-purple-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-purple-300", children: "Landmark Case" }),
                      /* @__PURE__ */ jsx(Star, { className: "h-5 w-5 text-pink-400 animate-pulse" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8", children: /* @__PURE__ */ jsxs(
                  motion.span,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.4, duration: 0.8 },
                    className: "block",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Schrems" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent", children: "II" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent", children: "EuGH C-311/18" })
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
                      "Das wegweisende Urteil zu internationalen Datentransfers und die",
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-300", children: " Ungültigkeit des Privacy Shield" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.8, duration: 0.8 },
                    className: "flex flex-wrap justify-center gap-4 mb-12",
                    children: [
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 mr-2" }),
                        "Kritisches Urteil"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                        "16. Juli 2020"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 mr-2" }),
                        "EU-weit bindend"
                      ] })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 lg:p-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white mb-4", children: "Inhaltsverzeichnis" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm lg:text-base", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#overview", className: "text-purple-300 hover:text-purple-400 transition-colors", children: "1. Überblick" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#findings", className: "text-purple-300 hover:text-purple-400 transition-colors", children: "2. Kernurteile" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#impact", className: "text-purple-300 hover:text-purple-400 transition-colors", children: "3. Praktische Auswirkungen" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#actions", className: "text-purple-300 hover:text-purple-400 transition-colors", children: "4. Maßnahmenplan" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#timeline", className: "text-purple-300 hover:text-purple-400 transition-colors", children: "5. Timeline" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#resources", className: "text-purple-300 hover:text-purple-400 transition-colors", children: "6. Verwandte Ressourcen" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", id: "content", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mb-12",
          children: /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-5 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl", children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "overview", className: "data-[state=active]:bg-purple-500 data-[state=active]:text-white", children: "Überblick" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "findings", className: "data-[state=active]:bg-purple-500 data-[state=active]:text-white", children: "Kernurteile" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "impact", className: "data-[state=active]:bg-purple-500 data-[state=active]:text-white", children: "Auswirkungen" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "actions", className: "data-[state=active]:bg-purple-500 data-[state=active]:text-white", children: "Maßnahmen" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "timeline", className: "data-[state=active]:bg-purple-500 data-[state=active]:text-white", children: "Timeline" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(TabsContent, { value: "overview", className: "space-y-8", id: "overview", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-purple-500/30", children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Urteilsübersicht" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-300 leading-relaxed", children: [
                /* @__PURE__ */ jsx("p", { children: 'Am 16. Juli 2020 fällte der Europäische Gerichtshof (EuGH) ein wegweisendes Urteil in der Rechtssache C-311/18 (Data Protection Commissioner gegen Facebook Ireland Limited und Maximilian Schrems), bekannt als "Schrems II".' }),
                /* @__PURE__ */ jsx("p", { children: "Das Gericht erklärte das EU-US Privacy Shield Framework für ungültig und bestätigte gleichzeitig die Gültigkeit der Standardvertragsklauseln (SCCs) unter bestimmten Bedingungen." }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "Diese Entscheidung hatte massive Auswirkungen auf internationale Datentransfers und zwang Unternehmen weltweit zur Überprüfung ihrer ",
                  /* @__PURE__ */ jsx(Link, { to: "/services/compliance-management", className: "text-purple-300 hover:text-purple-400 underline", children: "Compliance-Strategien" }),
                  "."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-4", children: "Fakten" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Aktenzeichen:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "C-311/18" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Datum:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "16.07.2020" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Gericht:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "EuGH" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Kläger:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "M. Schrems" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Beklagte:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Facebook Ireland" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white", children: [
                /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                "Volltext herunterladen"
              ] }) })
            ] })
          ] }) }) })
        }
      ) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "findings", className: "space-y-8", id: "findings", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: keyFindings.map((finding, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-colors", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "px-3 py-1 rounded-full text-xs font-bold",
              finding.impact === "KRITISCH" ? "bg-red-500/20 text-red-300" : finding.impact === "HOCH" ? "bg-orange-500/20 text-orange-300" : "bg-yellow-500/20 text-yellow-300"
            ), children: finding.impact }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: finding.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-3", children: finding.description }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: finding.details })
            ] })
          ] }) }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "impact", className: "space-y-8", id: "impact", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: practicalImpacts.map((category, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                category.color
              ), children: /* @__PURE__ */ jsx(category.icon, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: category.category })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: category.impacts.map((impact, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: impact })
            ] }, idx)) })
          ] }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "actions", className: "space-y-8", id: "actions", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: actionItems.map((phase, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r text-white",
                phase.color
              ), children: phase.urgency }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: phase.phase })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: phase.tasks.map((task, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: task })
            ] }, idx)) })
          ] }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "timeline", className: "space-y-8", id: "timeline", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-purple-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Schrems II Timeline" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-6", children: timeline.map((event, index) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -30 },
                whileInView: { opacity: 1, x: 0 },
                transition: { delay: index * 0.1, duration: 0.6 },
                className: "flex gap-6 relative",
                children: [
                  index < timeline.length - 1 && /* @__PURE__ */ jsx("div", { className: "absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-purple-500 to-transparent" }),
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                    event.type === "critical" ? "bg-red-500" : event.type === "important" ? "bg-orange-500" : event.type === "guidance" ? "bg-blue-500" : event.type === "update" ? "bg-green-500" : "bg-purple-500"
                  ), children: /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-white" }) }),
                  /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                      /* @__PURE__ */ jsx(Badge, { className: "bg-slate-600 text-slate-200", children: event.date }),
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: event.event })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: event.description })
                  ] }) })
                ]
              },
              index
            )) })
          ] }) })
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50", id: "resources", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent", children: "Verwandte Ressourcen" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: "Weitere wichtige Urteile und praktische Leitfäden" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
        {
          title: "Transfer Impact Assessment",
          description: "Praktischer Leitfaden zur Bewertung von Drittlandtransfers",
          icon: Target,
          link: "/wissen/leitfaden/transfer-impact-assessment",
          color: "from-blue-500 to-indigo-500"
        },
        {
          title: "Neue SCCs 2021",
          description: "Implementierung der neuen Standardvertragsklauseln",
          icon: FileText,
          link: "/wissen/rechtsprechung/neue-sccs-2021",
          color: "from-emerald-500 to-teal-500"
        },
        {
          title: "Meta Ireland 2024",
          description: "Aktuelles Urteil zu Datentransfers in sozialen Medien",
          icon: Scale,
          link: "/wissen/rechtsprechung/meta-irland-2024",
          color: "from-orange-500 to-red-500"
        }
      ].map((resource, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          whileHover: { y: -5 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
              resource.color
            ), children: /* @__PURE__ */ jsx(resource.icon, { className: "h-6 w-6 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors", children: resource.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: resource.description }),
            /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
              "w-full bg-gradient-to-r text-white",
              resource.color
            ), children: /* @__PURE__ */ jsxs(Link, { to: resource.link, className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { children: "Mehr erfahren" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) })
          ] }) })
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  SchremsIICase as default
};
