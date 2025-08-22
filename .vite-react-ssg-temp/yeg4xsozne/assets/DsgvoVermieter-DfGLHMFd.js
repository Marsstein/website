import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { ArrowRight, AlertOctagon, Euro, Clock, TrendingUp, BookOpen, Home, Scale, Database, Shield, Laptop, AlertTriangle, FileText, Target, Award, ChevronRight, Calendar, Users, Smartphone, Building, UserCheck, CheckCircle2, XCircle, Lock, Settings, Video, Download, FileCode, ClipboardCheck, Brain, Rocket, ExternalLink } from "lucide-react";
import { c as cn } from "../main.mjs";
import { Link } from "react-router-dom";
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
const DsgvoVermieter = () => {
  const pageTitle = "DSGVO Vermieter – Datenschutz Immobilien Guide 2024";
  const pageDescription = "DSGVO für Vermieter: ✓ Mieterdaten sicher verwalten ✓ Datenschutzerklärung ✓ TOM-Checklisten ✓ Bußgelder vermeiden. Jetzt DSGVO-konform vermieten!";
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState("ueberblick");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const navigationItems = [
    { id: "ueberblick", label: "Überblick", icon: Home },
    { id: "rechtlicher-rahmen", label: "Rechtlicher Rahmen", icon: Scale },
    { id: "datenverarbeitung", label: "Datenverarbeitung", icon: Database },
    { id: "technische-massnahmen", label: "TOM für Vermieter", icon: Shield },
    { id: "digitale-tools", label: "Digitale Tools", icon: Laptop },
    { id: "herausforderungen", label: "Herausforderungen", icon: AlertTriangle },
    { id: "vorlagen", label: "Vorlagen", icon: FileText },
    { id: "datenpannen", label: "Datenpannen", icon: AlertOctagon },
    { id: "bussgeld", label: "Bußgeldrisiken", icon: Euro },
    { id: "aktionsplan", label: "10-Punkte-Plan", icon: Target },
    { id: "best-practices", label: "Best Practices", icon: Award },
    { id: "zukunft", label: "Zukunftstrends", icon: TrendingUp }
  ];
  const scrollToSection = (sectionId) => {
    window.history.pushState(null, "", `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      h2[id], h3[id], section[id] {
        scroll-margin-top: 96px;
      }
      
      /* Mobile-optimierungen */
      @media (max-width: 768px) {
        body {
          font-size: 16px;
          line-height: 1.5;
        }
        
        .tap-target {
          min-height: 48px;
          min-width: 48px;
        }
        
        p, li {
          max-width: 45ch;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          if (window.location.hash.slice(1) !== section.id) {
            window.history.replaceState(null, "", `#${section.id}`);
          }
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "dsgvo vermieter, datenschutz vermieter, dsgvo immobilien, dsgvo hausverwaltung, dsgvo compliance vermieter" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.example.com/wissen/branchen/dsgvo-vermieter" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: pageTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.example.com/wissen/branchen/dsgvo-vermieter" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": pageTitle,
        "description": pageDescription,
        "author": {
          "@type": "Organization",
          "name": "DSGVO Compliance Team"
        },
        "datePublished": "2024-01-01",
        "dateModified": (/* @__PURE__ */ new Date()).toISOString()
      }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { ref: containerRef, className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { className: "relative overflow-hidden", children: [
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            style: { y: heroY, opacity: heroOpacity },
            className: "relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16",
            children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-background to-purple-900/20" }),
              /* @__PURE__ */ jsx("div", { className: "relative z-10 container mx-auto px-4 text-center", children: /* @__PURE__ */ jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, children: [
                /* @__PURE__ */ jsx(Badge, { className: "mb-4 px-4 py-1", variant: "secondary", children: "DSGVO für Vermieter & Hausverwaltungen" }),
                /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-bold mb-6", children: [
                  /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "DSGVO für Vermieter" }),
                  /* @__PURE__ */ jsx("br", {}),
                  /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl", children: "Der komplette Praxisleitfaden 2025" })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto", children: [
                  "Die Datenschutz-Grundverordnung hat die Immobilienbranche fundamental verändert. Ein Verstoß kann bis zu 20 Millionen Euro oder 4% des Jahresumsatzes kosten. Erfahren Sie mehr über ",
                  /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo-artikel", className: "text-indigo-600 dark:text-indigo-400 hover:underline", children: "DSGVO-Regelungen" }),
                  "."
                ] }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-gradient-to-r from-indigo-600 to-purple-600 mb-12 min-h-[48px] min-w-[48px]",
                    onClick: () => scrollToSection("ueberblick"),
                    children: [
                      "Leitfaden starten",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto", children: [
                  { icon: AlertOctagon, label: "Compliance", value: "87%", desc: "nicht konform 2024" },
                  { icon: Euro, label: "Bußgeld Ø", value: "42.000€", desc: "in Immobilienbranche" },
                  { icon: Clock, label: "Auskunft", value: "15 Min", desc: "Bearbeitungszeit" },
                  { icon: TrendingUp, label: "Beschwerden", value: "+300%", desc: "seit 2018" }
                ].map((stat, index) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.2 + index * 0.1 },
                    className: "bg-card/50 backdrop-blur-sm rounded-lg p-4 border",
                    children: [
                      /* @__PURE__ */ jsx(stat.icon, { className: "h-8 w-8 text-indigo-500 mb-2 mx-auto" }),
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: stat.value }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: stat.desc })
                    ]
                  },
                  index
                )) })
              ] }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx("section", { className: "py-8 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5 text-indigo-600" }),
            "Inhaltsverzeichnis"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3", children: navigationItems.map((item) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => scrollToSection(item.id),
              className: "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left tap-target",
              children: [
                /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5 text-indigo-600 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: item.label })
              ]
            },
            item.id
          )) })
        ] }) }) }) }),
        /* @__PURE__ */ jsx("style", { children: `
          h2[id], h3[id], section[id] {
            scroll-margin-top: 96px;
          }
        ` }),
        /* @__PURE__ */ jsx("nav", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 py-3 overflow-x-auto scrollbar-hide", children: navigationItems.map((item) => {
          const isActive = activeSection === item.id;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => {
                scrollToSection(item.id);
                setActiveSection(item.id);
              },
              className: cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",
                "transition-all duration-200 whitespace-nowrap",
                isActive ? "bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950/50 dark:to-purple-950/50 text-indigo-700 dark:text-indigo-300 shadow-sm border border-indigo-200 dark:border-indigo-800" : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-800/50 text-gray-600 dark:text-gray-400 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              ),
              children: [
                /* @__PURE__ */ jsx(item.icon, { className: cn(
                  "h-4 w-4",
                  isActive ? "text-indigo-600 dark:text-indigo-400" : ""
                ) }),
                /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: item.label })
              ]
            },
            item.id
          );
        }) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-12 space-y-24", children: [
          /* @__PURE__ */ jsx("div", { className: "lg:hidden mb-8", children: /* @__PURE__ */ jsx(Card, { className: "border-indigo-200 dark:border-indigo-800", children: /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
            /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center justify-between", children: [
              /* @__PURE__ */ jsx("span", { children: "Schnellnavigation" }),
              /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 rotate-90" })
            ] }),
            /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis Mobil", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: navigationItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => scrollToSection(item.id),
                className: "w-full text-left px-3 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/30 flex items-center gap-2 text-sm",
                children: [
                  /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 text-indigo-600 dark:text-indigo-400" }),
                  item.label
                ]
              }
            ) }, item.id)) }) })
          ] }) }) }),
          /* @__PURE__ */ jsx("section", { id: "ueberblick", className: "scroll-mt-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
            /* @__PURE__ */ jsx("h2", { id: "warum-datenschutz-kritisch", className: "text-4xl font-bold mb-8 text-center", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "Warum ist Datenschutz für Vermieter so kritisch?" }) }),
            /* @__PURE__ */ jsxs(Card, { className: "p-8 mb-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800", children: [
              /* @__PURE__ */ jsxs("h3", { id: "besonderheiten-branche", className: "text-2xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertOctagon, { className: "h-6 w-6 text-amber-600" }),
                "Die Besonderheiten Ihrer Branche"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
                {
                  icon: Database,
                  title: "Hochsensible Daten",
                  items: ["Einkommensnachweise", "Schufa-Auskünfte", "Bankdaten", "Gesundheitsdaten"]
                },
                {
                  icon: Calendar,
                  title: "Lange Speicherfristen",
                  items: ["Mietverträge", "Nebenkostenabrechnungen", "Zahlungsbelege", "Korrespondenz"]
                },
                {
                  icon: Users,
                  title: "Viele Beteiligte",
                  items: ["Mieter", "Interessenten", "Handwerker", "Behörden"]
                },
                {
                  icon: Smartphone,
                  title: "Digitale Transformation",
                  items: ["Online-Bewerbungen", "Cloud-Speicher", "Verwaltungssoftware", "Smart Home"]
                }
              ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5 text-amber-600" }),
                  /* @__PURE__ */ jsx("div", { className: "font-semibold text-lg", children: item.title })
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1 ml-7", children: item.items.map((point, idx) => /* @__PURE__ */ jsxs("li", { className: "text-sm flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: point })
                ] }, idx)) })
              ] }, index)) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("section", { id: "rechtlicher-rahmen", className: "max-w-6xl mx-auto scroll-mt-32", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-8", children: "Rechtlicher Rahmen: Was Sie wissen müssen" }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-8 overflow-x-auto", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-6", children: "Relevante DSGVO-Artikel für Vermieter" }),
              /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
                  /* @__PURE__ */ jsx("th", { className: "text-left p-3", children: "Artikel" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left p-3", children: "Inhalt" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left p-3", children: "Bedeutung für Sie" })
                ] }) }),
                /* @__PURE__ */ jsx("tbody", { children: [
                  { artikel: "Art. 6", inhalt: "Rechtmäßigkeit der Verarbeitung", bedeutung: /* @__PURE__ */ jsxs(Fragment, { children: [
                    "Basis für jede Datenverarbeitung. Mehr zu ",
                    /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo-artikel", className: "text-indigo-600 dark:text-indigo-400 hover:underline", children: "Art. 6 DSGVO" })
                  ] }) },
                  { artikel: "Art. 9", inhalt: "Besondere Datenkategorien", bedeutung: /* @__PURE__ */ jsxs(Fragment, { children: [
                    "Gesundheitsdaten bei barrierefreiem Wohnen. Siehe ",
                    /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo-artikel", className: "text-indigo-600 dark:text-indigo-400 hover:underline", children: "Art. 9 DSGVO" })
                  ] }) },
                  { artikel: "Art. 13/14", inhalt: "Informationspflichten", bedeutung: "Transparenz bei Datenerhebung" },
                  { artikel: "Art. 17", inhalt: "Recht auf Löschung", bedeutung: "Löschkonzept erforderlich" },
                  { artikel: "Art. 32", inhalt: "Sicherheit der Verarbeitung", bedeutung: "Technische Schutzmaßnahmen" }
                ].map((row, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-muted/50", children: [
                  /* @__PURE__ */ jsx("td", { className: "p-3 font-medium", children: row.artikel }),
                  /* @__PURE__ */ jsx("td", { className: "p-3", children: row.inhalt }),
                  /* @__PURE__ */ jsx("td", { className: "p-3", children: row.bedeutung })
                ] }, index)) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-8", children: [
              /* @__PURE__ */ jsxs("h3", { id: "rechtliche-grundlagen-daten", className: "text-2xl font-semibold mb-6 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Scale, { className: "h-6 w-6 text-indigo-600" }),
                "Rechtliche Grundlagen für Datenverarbeitung"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
                {
                  title: "Vertragserfüllung",
                  artikel: "Art. 6 Abs. 1 lit. b DSGVO",
                  desc: "Hauptgrundlage für Mietvertragsdaten",
                  icon: FileText
                },
                {
                  title: "Berechtigtes Interesse",
                  artikel: "Art. 6 Abs. 1 lit. f DSGVO",
                  desc: "Bonitätsprüfung, Videoüberwachung",
                  icon: Shield
                },
                {
                  title: "Rechtliche Verpflichtung",
                  artikel: "Art. 6 Abs. 1 lit. c DSGVO",
                  desc: "Aufbewahrung für Finanzbehörden",
                  icon: Building
                },
                {
                  title: "Einwilligung",
                  artikel: "Art. 6 Abs. 1 lit. a DSGVO",
                  desc: "Zusätzliche Services, Newsletter",
                  icon: UserCheck
                }
              ].map((item, index) => /* @__PURE__ */ jsx(Card, { className: "p-4 border bg-muted/20", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5 text-indigo-600 mt-1" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-1", children: item.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-2", children: item.artikel }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm", children: item.desc })
                ] })
              ] }) }, index)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { id: "datenverarbeitung", className: "max-w-6xl mx-auto scroll-mt-32", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-8", children: "Typische Datenverarbeitungen im Vermietungsalltag" }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-6", children: "1. Bewerbungsphase" }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-4 flex items-center gap-2 text-green-600", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
                    "Erlaubte Daten"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                    "Name, Anschrift, Geburtsdatum",
                    "Beruf und Arbeitgeber",
                    "Einkommensnachweise (letzte 3 Monate)",
                    "Schufa-Auskunft (Mieter-Bonitätsauskunft)",
                    "Mietschuldenfreiheitsbescheinigung"
                  ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-4 flex items-center gap-2 text-red-600", children: [
                    /* @__PURE__ */ jsx(XCircle, { className: "h-5 w-5" }),
                    "Verbotene Daten"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                    "Religionszugehörigkeit",
                    "Sexuelle Orientierung",
                    "Parteizugehörigkeit",
                    "Gesundheitsdaten (Ausnahme: barrierefreies Wohnen)",
                    "Schwangerschaft"
                  ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                  ] }, idx)) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-6", children: "2. Mietverhältnis" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-muted/30 rounded-lg p-4 mb-4", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Notwendige Dokumentation:" }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: [
                  "Mietvertrag und Zusatzvereinbarungen",
                  "Übergabeprotokolle",
                  "Nebenkostenabrechnungen",
                  "Korrespondenz zu Mängeln",
                  "Zahlungseingänge",
                  "Mahnungen (falls vorhanden)"
                ].map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-indigo-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, idx)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-6", children: "3. Nach Vertragsende - Aufbewahrungsfristen" }),
              /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b bg-muted/50", children: [
                  /* @__PURE__ */ jsx("th", { className: "text-left p-3", children: "Dokument" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left p-3", children: "Aufbewahrungsfrist" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left p-3", children: "Rechtsgrundlage" })
                ] }) }),
                /* @__PURE__ */ jsx("tbody", { children: [
                  { dok: "Mietvertrag", frist: "3 Jahre nach Ende", grund: "BGB Verjährung" },
                  { dok: "Nebenkostenabrechnungen", frist: "10 Jahre", grund: "Steuerrecht" },
                  { dok: "Zahlungsbelege", frist: "10 Jahre", grund: "AO, HGB" },
                  { dok: "Bewerbungsunterlagen (abgelehnt)", frist: "6 Monate", grund: "AGG" }
                ].map((row, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-muted/30", children: [
                  /* @__PURE__ */ jsx("td", { className: "p-3", children: row.dok }),
                  /* @__PURE__ */ jsx("td", { className: "p-3 font-medium", children: row.frist }),
                  /* @__PURE__ */ jsx("td", { className: "p-3 text-muted-foreground", children: row.grund })
                ] }, index)) })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { id: "technische-massnahmen", className: "max-w-6xl mx-auto scroll-mt-32", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-8", children: "Technische und organisatorische Maßnahmen (TOMs)" }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
              /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5 text-indigo-600" }),
                  "Technische Sicherheit"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Zugangskontrolle:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-muted-foreground ml-4", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Sichere Passwörter (min. 12 Zeichen)" }),
                      /* @__PURE__ */ jsx("li", { children: "• 2-Faktor-Authentifizierung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Passwortänderungen" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Zugriffskontrolle:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-muted-foreground ml-4", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Berechtigungskonzept" }),
                      /* @__PURE__ */ jsx("li", { children: "• Rollenbasierte Zugriffe" }),
                      /* @__PURE__ */ jsx("li", { children: "• Protokollierung von Zugriffen" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Verschlüsselung:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-muted-foreground ml-4", children: [
                      /* @__PURE__ */ jsx("li", { children: "• E-Mail-Verschlüsselung für sensible Daten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Verschlüsselte Datenbanken" }),
                      /* @__PURE__ */ jsx("li", { children: "• Sichere Cloud-Speicher" })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-indigo-600" }),
                  "Organisatorische Maßnahmen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  { text: "Datenschutzbeauftragter (ab 20 Mitarbeitern)", done: false },
                  { text: "Verarbeitungsverzeichnis führen", done: false },
                  { text: "Mitarbeiterschulungen (jährlich)", done: false },
                  { text: "Datenschutz-Folgenabschätzung", done: false },
                  { text: "Auftragsverarbeitungsverträge", done: false },
                  { text: "Löschkonzept implementiert", done: false }
                ].map((item, idx) => /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded", children: [
                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "h-4 w-4 text-indigo-600" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item.text })
                ] }, idx)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { id: "digitale-tools", className: "max-w-6xl mx-auto scroll-mt-32", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-8", children: "Digitale Tools und Datenschutz" }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-6", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Laptop, { className: "h-6 w-6 text-indigo-600" }),
                "Immobilienverwaltungssoftware"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 mb-4", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Anforderungen an DSGVO-konforme Software:" }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: [
                  { label: "Serverstandort", value: "Idealerweise in Deutschland/EU" },
                  { label: "Zertifizierungen", value: "ISO 27001, BSI-Grundschutz" },
                  { label: "Auftragsverarbeitungsvertrag", value: "Muss vorhanden sein" },
                  { label: "Datentrennung", value: "Mandantenfähigkeit" },
                  { label: "Exportfunktion", value: "Für Datenportabilität" }
                ].map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("span", { className: "font-medium text-sm", children: [
                      item.label,
                      ":"
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground ml-1", children: item.value })
                  ] })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-red-50 dark:bg-red-900/20 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2 text-red-600", children: [
                  /* @__PURE__ */ jsx(AlertOctagon, { className: "h-5 w-5" }),
                  "Vorsicht bei:"
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                  "WhatsApp für Mieterkommunikation",
                  "Private E-Mail-Accounts",
                  "Unverschlüsselte Cloud-Speicher",
                  "Automatische Backups auf US-Server"
                ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                  /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4 text-red-500" }),
                  /* @__PURE__ */ jsx("span", { children: item })
                ] }, idx)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { id: "herausforderungen", className: "max-w-6xl mx-auto scroll-mt-32", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-8", children: "Besondere Herausforderungen" }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-6", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Video, { className: "h-6 w-6 text-indigo-600" }),
                "Videoüberwachung"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-green-50 dark:bg-green-900/20 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-700 dark:text-green-400", children: "Zulässig wenn:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Berechtigtes Interesse überwiegt" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Kennzeichnung vorhanden" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Nur öffentlich zugängliche Bereiche" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Löschung nach 72 Stunden" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-red-50 dark:bg-red-900/20 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-red-700 dark:text-red-400", children: "Verboten:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4 text-red-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Überwachung von Mietwohnungen" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4 text-red-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Dauerhafte Speicherung" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4 text-red-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Verdeckte Kameras" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4 text-red-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Tonaufzeichnungen" })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-6", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Home, { className: "h-6 w-6 text-indigo-600" }),
                "Wohnungsbesichtigungen"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Best Practices:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                  "Interessentenbogen mit Datenschutzhinweis",
                  "Keine Kopien von Ausweisen anfertigen",
                  "Gruppentermine anonymisiert durchführen",
                  "Daten nach 6 Monaten löschen"
                ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-blue-600" }),
                  /* @__PURE__ */ jsx("span", { children: item })
                ] }, idx)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { id: "vorlagen", className: "max-w-6xl mx-auto scroll-mt-32", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-8", children: "Muster und Vorlagen" }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-6", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-indigo-600" }),
                "Datenschutzerklärung für Mietinteressenten"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bg-gray-50 dark:bg-gray-900 rounded-lg p-6 font-mono text-sm", children: /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap", children: `Information zur Datenverarbeitung gemäß Art. 13 DSGVO

1. Verantwortlicher:
   [Ihr Name/Firma]
   [Adresse]
   [Kontaktdaten]

2. Zweck der Datenverarbeitung:
   - Prüfung Ihrer Bewerbung
   - Bonitätsprüfung
   - Vertragsanbahnung

3. Rechtsgrundlage:
   Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)

4. Speicherdauer:
   - Bei Vertragsabschluss: Dauer des Mietverhältnisses + gesetzliche Fristen
   - Bei Ablehnung: 6 Monate (AGG)

5. Ihre Rechte:
   - Auskunft (Art. 15 DSGVO)
   - Berichtigung (Art. 16 DSGVO)
   - Löschung (Art. 17 DSGVO)
   - Beschwerderecht bei Aufsichtsbehörde` }) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-2", children: [
                /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
                  /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                  "Als Word herunterladen"
                ] }),
                /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", children: [
                  /* @__PURE__ */ jsx(FileCode, { className: "h-4 w-4 mr-2" }),
                  "Als PDF speichern"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-6", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ClipboardCheck, { className: "h-6 w-6 text-indigo-600" }),
                "Einwilligung Schufa-Auskunft"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bg-gray-50 dark:bg-gray-900 rounded-lg p-6 font-mono text-sm", children: /* @__PURE__ */ jsx("pre", { className: "whitespace-pre-wrap", children: `Einwilligungserklärung Bonitätsprüfung

Hiermit willige ich ein, dass [Vermieter] zum Zweck der Bonitätsprüfung
eine Schufa-Auskunft über mich einholt.

Diese Einwilligung erfolgt freiwillig und kann jederzeit widerrufen werden.
Ein Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten
Verarbeitung.

_______________________     _______________________
Ort, Datum                  Unterschrift` }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { id: "datenpannen", className: "max-w-6xl mx-auto scroll-mt-32", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-8", children: "Datenpannen richtig handhaben" }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-6", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-semibold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-amber-600" }),
                "Sofortmaßnahmen bei Datenverlust"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 mb-6", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                { step: "1", title: "Datenpanne erkannt", action: "Dokumentieren Sie den Vorfall sofort" },
                { step: "2", title: "Risikobewertung", action: "Prüfen Sie das Risiko für Betroffene" },
                { step: "3", title: "Bei hohem Risiko", action: "Binnen 72h an Behörde melden" },
                { step: "4", title: "Betroffene informieren", action: "Unverzüglich bei hohem Risiko" },
                { step: "5", title: "Maßnahmen ergreifen", action: "Schaden begrenzen und Wiederholung verhindern" }
              ].map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold", children: item.step }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: item.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: item.action })
                ] })
              ] }, idx)) }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Meldepflichtige Vorfälle:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                  "Einbruch mit Aktendiebstahl",
                  "Hack der Verwaltungssoftware",
                  "Versehentlicher E-Mail-Verteiler",
                  "Verlust von USB-Stick mit Mieterdaten",
                  "Unrechtmäßige Datenweitergabe"
                ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                  /* @__PURE__ */ jsx(AlertOctagon, { className: "h-4 w-4 text-amber-600" }),
                  /* @__PURE__ */ jsx("span", { children: item })
                ] }, idx)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { id: "bussgeld", className: "max-w-6xl mx-auto scroll-mt-32", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-8", children: "Bußgeldrisiken und Vermeidung" }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-6", children: "Häufige Bußgeldgründe" }),
              /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b bg-muted/50", children: [
                  /* @__PURE__ */ jsx("th", { className: "text-left p-3", children: "Verstoß" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left p-3", children: "Bußgeldrahmen" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left p-3", children: "Prävention" })
                ] }) }),
                /* @__PURE__ */ jsx("tbody", { children: [
                  { verstoss: "Fehlende Datenschutzerklärung", rahmen: "5.000-50.000€", praevention: "Vorlagen nutzen" },
                  { verstoss: "Unrechtmäßige Videoüberwachung", rahmen: "10.000-100.000€", praevention: "Rechtsberatung" },
                  { verstoss: "Keine Löschung nach Fristende", rahmen: "5.000-30.000€", praevention: "Löschkonzept" },
                  { verstoss: "Auskunft verweigert", rahmen: "5.000-20.000€", praevention: "Prozess etablieren" },
                  { verstoss: "Datenpanne nicht gemeldet", rahmen: "10.000-200.000€", praevention: "Notfallplan" }
                ].map((row, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-muted/30", children: [
                  /* @__PURE__ */ jsx("td", { className: "p-3", children: row.verstoss }),
                  /* @__PURE__ */ jsx("td", { className: "p-3 font-medium text-red-600", children: row.rahmen }),
                  /* @__PURE__ */ jsx("td", { className: "p-3 text-muted-foreground", children: row.praevention })
                ] }, index)) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-6", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-semibold mb-6 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-600" }),
                "Reale Bußgeldfälle aus der Immobilienbranche"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: [
                {
                  title: "Fall 1: Großvermieter (2023)",
                  verstoss: "Videoüberwachung ohne Rechtsgrundlage",
                  bussgeld: "125.000€",
                  details: "Kameras in Hausfluren ohne Hinweisschilder",
                  loesung: "Rechtliche Prüfung, Kennzeichnung, Löschkonzept"
                },
                {
                  title: "Fall 2: Hausverwaltung (2024)",
                  verstoss: "Massenmail mit sichtbaren E-Mail-Adressen",
                  bussgeld: "15.000€",
                  details: "CC statt BCC bei Mieterinformation",
                  loesung: "BCC verwenden, Mitarbeiterschulung"
                },
                {
                  title: "Fall 3: Immobilienmakler (2023)",
                  verstoss: "Bewerberdaten zu lange gespeichert",
                  bussgeld: "35.000€",
                  details: "Interessentendaten 3 Jahre aufbewahrt",
                  loesung: "Automatische Löschung nach 6 Monaten"
                },
                {
                  title: "Fall 4: Wohnungsgenossenschaft (2024)",
                  verstoss: "Datenpanne nicht gemeldet",
                  bussgeld: "200.000€",
                  details: "Hackerangriff erst nach 6 Wochen gemeldet",
                  loesung: "Schnelle Meldekette, IT-Sicherheitskonzept"
                }
              ].map((fall, idx) => /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-red-50 dark:bg-red-900/20 border-red-200", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: fall.title }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Verstoß:" }),
                    " ",
                    fall.verstoss
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-red-600 font-semibold", children: [
                    "Bußgeld: ",
                    fall.bussgeld
                  ] }),
                  /* @__PURE__ */ jsxs("p", { children: [
                    /* @__PURE__ */ jsx("strong", { children: "Details:" }),
                    " ",
                    fall.details
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-green-600", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Lösung:" }),
                    " ",
                    fall.loesung
                  ] })
                ] })
              ] }, idx)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { id: "aktionsplan", className: "max-w-6xl mx-auto scroll-mt-32", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-8", children: "10-Punkte-Aktionsplan für Vermieter" }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-8", children: [
              /* @__PURE__ */ jsxs(Card, { className: "p-6 border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4 flex items-center gap-2 text-green-600", children: [
                  /* @__PURE__ */ jsx(Target, { className: "h-5 w-5" }),
                  "Sofort umsetzen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "1. Bestandsaufnahme: Welche Daten verarbeiten Sie?",
                  "2. Rechtsgrundlagen prüfen: Für jede Verarbeitung",
                  "3. Datenschutzerklärung: Erstellen und aushändigen",
                  "4. Verarbeitungsverzeichnis: Anlegen und pflegen",
                  "5. Technische Sicherheit: Passwörter, Verschlüsselung"
                ].map((item, idx) => /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "h-4 w-4 text-green-600 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "p-6 border-amber-200 dark:border-amber-800", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4 flex items-center gap-2 text-amber-600", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5" }),
                  "Binnen 30 Tagen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "6. Auftragsverarbeiter: Verträge prüfen/abschließen",
                  "7. Löschkonzept: Fristen definieren und umsetzen",
                  "8. Mitarbeiterschulung: Sensibilisierung durchführen"
                ].map((item, idx) => /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "h-4 w-4 text-amber-600 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "p-6 border-blue-200 dark:border-blue-800", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4 flex items-center gap-2 text-blue-600", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5" }),
                  "Binnen 90 Tagen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "9. Prozesse dokumentieren: Handbuch erstellen",
                  "10. Notfallplan: Für Datenpannen vorbereiten"
                ].map((item, idx) => /* @__PURE__ */ jsxs("label", { className: "flex items-start gap-3 cursor-pointer", children: [
                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "h-4 w-4 text-blue-600 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, idx)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { id: "best-practices", className: "max-w-6xl mx-auto scroll-mt-32", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-8", children: "Best Practices erfolgreicher Vermieter" }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
              {
                icon: Brain,
                title: "Automatisierung mit Datenschutz",
                items: [
                  "Digitale Selbstauskunft mit integrierter Einwilligung",
                  "Automatische Löschung nach Fristen",
                  "Verschlüsselte Kommunikationsportale"
                ]
              },
              {
                icon: Award,
                title: "Transparenz als Wettbewerbsvorteil",
                items: [
                  "Datenschutz-Siegel auf Website",
                  "Klare Kommunikation der Datenverarbeitung",
                  "Schnelle Auskunftserteilung (< 48h)"
                ]
              },
              {
                icon: Rocket,
                title: "Effizienz durch Standardisierung",
                items: [
                  "Einheitliche Formulare",
                  "Checklisten für Mitarbeiter",
                  "Digitale Unterschriften"
                ]
              }
            ].map((practice, idx) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(practice.icon, { className: "h-8 w-8 text-indigo-600 mb-3" }),
              /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold mb-3", children: practice.title }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: practice.items.map((item, itemIdx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-500 mt-0.5" }),
                /* @__PURE__ */ jsx("span", { children: item })
              ] }, itemIdx)) })
            ] }, idx)) })
          ] }),
          /* @__PURE__ */ jsxs("section", { id: "zukunft", className: "max-w-6xl mx-auto scroll-mt-32", children: [
            /* @__PURE__ */ jsx("h2", { id: "zukunftstrends-vorbereitung", className: "text-4xl font-bold mb-8", children: "Zukunftstrends und Vorbereitung" }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 mb-6", children: [
              /* @__PURE__ */ jsx("h3", { id: "was-kommt-auf-vermieter", className: "text-2xl font-semibold mb-4", children: "Was kommt auf Vermieter zu?" }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-indigo-600" }),
                    "Neue Technologien"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                    "KI-basierte Mieterauswahl: Neue Datenschutzanforderungen",
                    "Smart Home Daten: Klare Regelungen erforderlich",
                    "Blockchain-Mietverträge: Unveränderbarkeit vs. Löschpflicht",
                    "Automatisierte Bonitätsprüfung: Transparenzpflichten"
                  ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-indigo-500 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: item })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5 text-indigo-600" }),
                    "Zeitplan"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 dark:bg-indigo-900/20 rounded p-3", children: [
                      /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "2025:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-sm mt-1 space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• ePrivacy-Verordnung beachten" }),
                        /* @__PURE__ */ jsx("li", { children: "• KI-Verordnung implementieren" }),
                        /* @__PURE__ */ jsx("li", { children: "• Digitale Identitäten integrieren" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 dark:bg-purple-900/20 rounded p-3", children: [
                      /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "2026:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-sm mt-1 space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Volldigitale Mietprozesse" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automatisierte Compliance" }),
                        /* @__PURE__ */ jsx("li", { children: "• Predictive Analytics (datenschutzkonform)" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Verwandte Compliance-Themen" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-kindergarten", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline mb-2", children: "Datenschutz Kindergarten" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "DSGVO-Compliance für Kitas" })
              ] }) }) }),
              /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/dsgvo-vereine", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline mb-2", children: "DSGVO für Vereine" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Datenschutz im Vereinswesen" })
              ] }) }) }),
              /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-pflege", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline mb-2", children: "Datenschutz in der Pflege" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "DSGVO für Pflegeeinrichtungen" })
              ] }) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "p-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white", children: [
            /* @__PURE__ */ jsx("h3", { id: "ihr-weg-compliance", className: "text-3xl font-bold mb-4", children: "Ihr Weg zur DSGVO-Compliance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl mb-6 max-w-2xl mx-auto", children: "Die DSGVO ist kein Hindernis, sondern eine Chance für professionelles Immobilienmanagement. Mit den richtigen Prozessen und Tools wird Datenschutz zum Wettbewerbsvorteil." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
              /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "secondary", className: "min-h-[48px] min-w-[48px]", children: [
                "Kostenlose Vermieter-Beratung",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
              ] }),
              /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", className: "text-white border-white hover:bg-white/20 min-h-[48px] min-w-[48px]", children: "DSGVO-Audit anfordern" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("section", { className: "max-w-6xl mx-auto mt-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "weiterfuehrende-ressourcen", className: "text-4xl font-bold mb-8 text-center", children: "Weiterführende Ressourcen" }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Building, { className: "h-5 w-5 text-indigo-600" }),
                  "Aufsichtsbehörden"
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                  { name: "Bayern", behorde: "BayLDA", website: "datenschutz-bayern.de" },
                  { name: "NRW", behorde: "LDI NRW", website: "ldi.nrw.de" },
                  { name: "Baden-Württemberg", behorde: "LfDI BW", website: "baden-wuerttemberg.datenschutz.de" }
                ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center justify-between text-sm", children: [
                  /* @__PURE__ */ jsxs("span", { children: [
                    /* @__PURE__ */ jsxs("strong", { children: [
                      item.name,
                      ":"
                    ] }),
                    " ",
                    item.behorde
                  ] }),
                  /* @__PURE__ */ jsxs("a", { href: `https://${item.website}`, className: "text-indigo-600 hover:underline flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" }),
                    "Website"
                  ] })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5 text-indigo-600" }),
                  "Empfohlene Tools"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-sm mb-1", children: "Immobilienverwaltung:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Haufe Axera, DOMUS, objego" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-sm mb-1", children: "Kommunikation:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Element/Matrix, Threema Work" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-sm mb-1", children: "E-Mail-Verschlüsselung:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "ProtonMail, Tutanota, GPG4Win" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  DsgvoVermieter as default
};
