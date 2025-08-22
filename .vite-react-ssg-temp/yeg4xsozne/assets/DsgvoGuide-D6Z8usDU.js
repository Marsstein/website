import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Lock, BookOpen, ArrowRight, Download, Star, CheckCircle2, Clock, Eye, Calendar, Scale, Users, AlertTriangle, Settings, FileText, Search, Shield, Building2, Factory, Euro, TrendingUp, Database, CheckCircle, Globe, Info } from "lucide-react";
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
const DsgvoGuide = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [activeNavSection, setActiveNavSection] = useState("ueberblick");
  const [completedSections, setCompletedSections] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedControls, setExpandedControls] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [selectedTab, setSelectedTab] = useState("overview");
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });
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
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveNavSection(hash);
      }, 100);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      const scrollPosition = window.scrollY + 150;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveNavSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleSectionComplete = (sectionId) => {
    setCompletedSections(
      (prev) => prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };
  const sections = [
    { id: "ueberblick", title: "Überblick", icon: Eye, readTime: "8 Min" },
    { id: "geschichte", title: "Geschichte & Evolution", icon: Calendar, readTime: "12 Min" },
    { id: "grundlagen", title: "DSGVO-Grundlagen", icon: BookOpen, readTime: "15 Min" },
    { id: "rechtlicher-rahmen", title: "Rechtlicher Rahmen", icon: Scale, readTime: "10 Min" },
    { id: "grundprinzipien", title: "Grundprinzipien", icon: CheckCircle2, readTime: "18 Min" },
    { id: "betroffenenrechte", title: "Betroffenenrechte", icon: Users, readTime: "25 Min" },
    { id: "datenschutzfolgen", title: "Datenschutz-Folgenabschätzung", icon: AlertTriangle, readTime: "20 Min" },
    { id: "implementierung", title: "Implementierung", icon: Settings, readTime: "30 Min" },
    { id: "dokumentation", title: "Dokumentation", icon: FileText, readTime: "18 Min" },
    { id: "audit-bewertung", title: "Audit & Bewertung", icon: Search, readTime: "22 Min" },
    { id: "technische-massnahmen", title: "Technische Maßnahmen", icon: Shield, readTime: "25 Min" },
    { id: "organisatorische-massnahmen", title: "Organisatorische Maßnahmen", icon: Building2, readTime: "20 Min" },
    { id: "branchenspezifika", title: "Branchenspezifika", icon: Factory, readTime: "16 Min" },
    { id: "bussgelder-sanktionen", title: "Bußgelder & Sanktionen", icon: Euro, readTime: "14 Min" },
    { id: "vorteile-compliance", title: "Vorteile & Compliance", icon: TrendingUp, readTime: "12 Min" },
    { id: "fallstudien", title: "Fallstudien", icon: BookOpen, readTime: "20 Min" },
    { id: "tools-software", title: "Tools & Software", icon: Database, readTime: "10 Min" },
    { id: "ressourcen", title: "Ressourcen", icon: Download, readTime: "8 Min" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 origin-left z-50",
        style: { scaleX: scrollYProgress }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent opacity-40" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent opacity-40" }),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center py-20",
          children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                transition: { duration: 0.5 },
                className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 mb-8 backdrop-blur-sm",
                children: [
                  /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold uppercase tracking-wider", children: "DSGVO/GDPR Compliance Guide" }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30", children: "2024 Edition" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white relative z-10",
                children: [
                  /* @__PURE__ */ jsx("span", { className: "block", children: "Datenschutz-Grundverordnung" }),
                  /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent block mt-4", children: "DSGVO Excellence" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.4 },
                className: "text-xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed",
                children: "Der ultimative Leitfaden zur EU-Datenschutz-Grundverordnung mit praxisnahen Beispielen, detaillierten Checklisten und bewährten Implementierungsstrategien für maximale Compliance."
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.6 },
                className: "flex flex-col sm:flex-row gap-4 justify-center mb-12",
                children: [
                  /* @__PURE__ */ jsx(Link, { to: "/regulierung/dsgvo", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 group px-8 py-4 text-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300", children: [
                    /* @__PURE__ */ jsx(BookOpen, { className: "mr-3 h-5 w-5" }),
                    "DSGVO Produktseite",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" })
                  ] }) }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "lg",
                      variant: "outline",
                      className: "group border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-emerald-500/50 px-8 py-4 text-lg transition-all duration-300",
                      children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-3 h-5 w-5 group-hover:text-emerald-400 transition-colors" }),
                        "DSGVO-Checkliste (PDF)"
                      ]
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { duration: 0.8, delay: 0.8 },
                className: "flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400" }),
                    /* @__PURE__ */ jsx("span", { children: "18 detaillierte Abschnitte" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400" }),
                    /* @__PURE__ */ jsx("span", { children: "Praktische Checklisten" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 text-blue-400" }),
                    /* @__PURE__ */ jsx("span", { children: "PDF-Export verfügbar" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-purple-400" }),
                    /* @__PURE__ */ jsx("span", { children: "~6h Lesezeit" })
                  ] })
                ]
              }
            )
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "py-20", ref: contentRef, children: /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "hidden lg:block w-64 flex-shrink-0", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-32 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-4", children: "Inhaltsverzeichnis" }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: sections.map((section) => {
          const IconComponent = section.icon;
          return /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => scrollToSection(section.id),
              className: cn(
                "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-3 group",
                activeNavSection === section.id ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              ),
              children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "p-1.5 rounded-lg",
                  activeNavSection === section.id ? "bg-emerald-500/20" : "bg-slate-700/50 group-hover:bg-slate-600/50"
                ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "truncate font-medium", children: section.title }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-500", children: section.readTime })
                ] }),
                completedSections.includes(section.id) && /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 flex-shrink-0" })
              ]
            },
            section.id
          );
        }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "flex-1 lg:ml-8", children: /* @__PURE__ */ jsx("section", { id: "ueberblick", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "DSGVO Überblick" }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: () => handleSectionComplete("ueberblick"),
                  variant: "outline",
                  size: "sm",
                  className: "border-slate-600 hover:border-emerald-500/50",
                  children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }),
                    "Als gelesen markieren"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8", children: [
              {
                value: "99",
                label: "Artikel",
                sublabel: "in 11 Kapiteln",
                icon: FileText,
                color: "from-blue-500 to-indigo-600"
              },
              {
                value: "20M€",
                label: "Max. Bußgeld",
                sublabel: "oder 4% des Jahresumsatzes",
                icon: Euro,
                color: "from-red-500 to-pink-600"
              },
              {
                value: "27+1",
                label: "EU/EWR Länder",
                sublabel: "Einheitliche Regelung",
                icon: Globe,
                color: "from-purple-500 to-violet-600"
              },
              {
                value: "72h",
                label: "Meldepflicht",
                sublabel: "bei Datenschutzverletzungen",
                icon: Clock,
                color: "from-orange-500 to-amber-600"
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: 0.2 + index * 0.1 },
                  className: "bg-slate-900/50 rounded-lg p-4 hover:scale-[1.02] transition-transform",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: cn(
                      "p-3 rounded-xl bg-gradient-to-r mb-3 w-fit",
                      stat.color
                    ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-emerald-400 mb-1", children: stat.value }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-slate-300 mb-1", children: stat.label }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: stat.sublabel })
                  ]
                },
                stat.label
              );
            }) }),
            /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(Info, { className: "h-5 w-5 text-emerald-400 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Wichtige Information" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: "Die DSGVO gilt für alle Organisationen, die personenbezogene Daten von EU-Bürgern verarbeiten, unabhängig vom Standort der Organisation. Eine umfassende Compliance-Strategie ist essentiell." })
              ] })
            ] }) })
          ] }) })
        }
      ) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  DsgvoGuide as default
};
