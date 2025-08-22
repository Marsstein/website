import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { List, Eye, Target, Database, CheckCircle, Settings, Info, Users, Globe, Share2, AlertTriangle, Search, Shield, BarChart3, Route, Award, Lock, Scale, UserCheck, Cloud, Building2, X, Server, Layers, Monitor, Activity, Lightbulb, Plus, Code, FileText, Upload, Clock, Zap, Network, Gavel, Brain, AlertCircle, Bell, Calendar, TrendingUp, Euro } from "lucide-react";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "../main.mjs";
import "vite-react-ssg";
import "react-router-dom";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-progress";
const Iso27018Guide = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [completedTasks, setCompletedTasks] = useState(/* @__PURE__ */ new Set());
  const [readingProgress, setReadingProgress] = useState(0);
  const [expandedSections, setExpandedSections] = useState(/* @__PURE__ */ new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  useRef(null);
  const sections = [
    { id: "overview", title: "Überblick", icon: Eye, readTime: "8 Min" },
    { id: "scope", title: "Anwendungsbereich", icon: Target, readTime: "10 Min" },
    { id: "pii-classification", title: "PII-Klassifizierung", icon: Database, readTime: "15 Min" },
    { id: "consent-management", title: "Consent Management", icon: CheckCircle, readTime: "12 Min" },
    { id: "data-processing", title: "Datenverarbeitung", icon: Settings, readTime: "18 Min" },
    { id: "transparency", title: "Transparenz & Information", icon: Info, readTime: "14 Min" },
    { id: "data-subject-rights", title: "Betroffenenrechte", icon: Users, readTime: "16 Min" },
    { id: "cross-border", title: "Grenzüberschreitende Übertragung", icon: Globe, readTime: "20 Min" },
    { id: "subprocessing", title: "Unterauftragsverarbeitung", icon: Share2, readTime: "14 Min" },
    { id: "incident-notification", title: "Incident Notification", icon: AlertTriangle, readTime: "12 Min" },
    { id: "audit-compliance", title: "Audit & Compliance", icon: Search, readTime: "16 Min" },
    { id: "technical-measures", title: "Technische Maßnahmen", icon: Shield, readTime: "22 Min" },
    { id: "risk-assessment", title: "Privacy Risk Assessment", icon: BarChart3, readTime: "18 Min" },
    { id: "implementation", title: "Implementierungsroadmap", icon: Route, readTime: "25 Min" },
    { id: "certification", title: "Zertifizierungsprozess", icon: Award, readTime: "20 Min" }
  ];
  useEffect(() => {
    const handleScroll = () => {
      const sections2 = document.querySelectorAll("[data-section]");
      const scrollPosition = window.scrollY + 100;
      sections2.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("data-section");
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const pctScrolled = Math.floor(scrollTop / trackLength * 100);
      setReadingProgress(pctScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const CounterAnimation = ({ value, duration = 2e3 }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const isInView = useInView(elementRef, { once: true });
    useEffect(() => {
      if (isInView) {
        let startTime;
        const animateCount = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const percentage = Math.min(progress / duration, 1);
          setCount(Math.floor(percentage * value));
          if (percentage < 1) {
            requestAnimationFrame(animateCount);
          }
        };
        requestAnimationFrame(animateCount);
      }
    }, [isInView, value, duration]);
    return /* @__PURE__ */ jsx("span", { ref: elementRef, children: count });
  };
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50",
        style: { scaleX }
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => setSidebarOpen(!sidebarOpen),
        className: "fixed top-20 left-4 z-40 lg:hidden bg-purple-600 hover:bg-purple-700",
        size: "sm",
        children: /* @__PURE__ */ jsx(List, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: `fixed left-0 top-16 h-screen w-80 bg-slate-800/95 backdrop-blur-sm border-r border-slate-700 z-30 overflow-y-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300`,
        children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white mb-6", children: "ISO 27018 Leitfaden" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: sections.map((section) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                scrollToSection(section.id);
                setSidebarOpen(false);
              },
              className: `w-full text-left p-3 rounded-lg transition-all duration-200 group ${activeSection === section.id ? "bg-purple-600 text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white"}`,
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(section.icon, { className: `h-4 w-4 ${activeSection === section.id ? "text-white" : "text-purple-400"}` }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: section.title }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs opacity-70", children: section.readTime })
                ] })
              ] })
            },
            section.id
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-8 p-4 bg-purple-900/20 rounded-lg border border-purple-700/50", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium text-white mb-2", children: "Lesefortschritt" }),
            /* @__PURE__ */ jsx(Progress, { value: readingProgress, className: "h-2" }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-400 mt-1", children: [
              readingProgress,
              "% abgeschlossen"
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "lg:ml-80", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 py-8", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm mb-6", children: [
              /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4" }),
              "Privacy in Public Clouds"
            ] }),
            /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-white mb-6", children: "ISO 27018 Compliance Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-8 max-w-3xl mx-auto", children: "Umfassender Leitfaden für den Schutz personenbezogener Daten in Public Cloud Services. Von der PII-Klassifizierung bis zur vollständigen Zertifizierung." }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-6 border border-slate-700", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 43 }) }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "PII Protection Controls" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-6 border border-slate-700", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-pink-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 15 }) }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Detaillierte Kapitel" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-6 border border-slate-700", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 7 }) }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "DSGVO-Synergien" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-6 border border-slate-700", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-green-400 mb-2", children: [
                  /* @__PURE__ */ jsx(CounterAnimation, { value: 98 }),
                  "%"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Praxistauglichkeit" })
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "overview",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Eye, { className: "h-6 w-6 text-purple-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "ISO 27018 Überblick" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO/IEC 27018:2019 ist der internationale Code of Practice für den Schutz personenbezogener Daten (PII) in Public Clouds. Als Ergänzung zu ISO 27002 und ISO 27017 definiert er spezifische Kontrollen und Leitlinien für Cloud Service Provider, die als PII-Auftragsverarbeiter fungieren." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-purple-400" }),
                    "Kernziele von ISO 27018"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-300", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "PII-Schutz in Public Clouds:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-sm text-gray-400 mt-1", children: "Spezifische Kontrollen für personenbezogene Daten in öffentlichen Cloud-Umgebungen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Transparenz & Accountability:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-sm text-gray-400 mt-1", children: "Klare Rechenschaftspflichten und Transparenzanforderungen für CSPs" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Consent Management:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-sm text-gray-400 mt-1", children: "Strukturierte Verfahren für Einwilligungsmanagement und Betroffenenrechte" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Cross-Border Protection:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-sm text-gray-400 mt-1", children: "Schutz bei grenzüberschreitenden Datenübertragungen und internationalen Deployments" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-blue-400" }),
                    "Beziehung zu anderen Standards"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "ISO 27001/27002" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Baut auf den Grundkontrollen von ISO 27002 auf und erweitert diese um PII-spezifische Anforderungen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "ISO 27017" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Ergänzt Cloud-Security-Kontrollen um spezifische Datenschutz- und Privacy-Aspekte" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "DSGVO/GDPR" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Direkte Unterstützung bei der Umsetzung von DSGVO-Anforderungen in Cloud-Umgebungen" })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Was macht ISO 27018 besonders?" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(UserCheck, { className: "h-6 w-6 text-purple-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "PII-Fokus" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Erster internationaler Standard speziell für den Schutz personenbezogener Daten in Public Clouds" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Globe, { className: "h-6 w-6 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Global Anwendbar" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Harmonisiert verschiedene Datenschutzgesetze und ermöglicht globale Cloud-Deployments" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Praxisorientiert" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Konkrete Implementierungsleitlinien und Best Practices für Cloud Service Provider" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Info, { className: "h-5 w-5 text-blue-400" }),
                "Wichtige Begriffe und Definitionen"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-3", children: "PII (Personally Identifiable Information):" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4", children: "Informationen, die zur Identifikation einer natürlichen Person verwendet werden können, einschließlich direkter und indirekter Identifikatoren." }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "PII Principal:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: 'Die natürliche Person, auf die sich die personenbezogenen Daten beziehen (entspricht der "betroffenen Person" in der DSGVO).' })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-3", children: "PII Controller:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4", children: 'Die Organisation, die Zweck und Mittel der PII-Verarbeitung bestimmt (entspricht dem "Verantwortlichen" in der DSGVO).' }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-3", children: "PII Processor:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: 'Der Cloud Service Provider, der PII im Auftrag des Controllers verarbeitet (entspricht dem "Auftragsverarbeiter" in der DSGVO).' })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "scope",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Target, { className: "h-6 w-6 text-blue-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Anwendungsbereich" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO 27018 gilt für Cloud Service Provider, die als PII-Auftragsverarbeiter fungieren und Public Cloud Services anbieten. Der Standard definiert klare Grenzen und Anwendungsbereiche für verschiedene Cloud-Deployment-Modelle und Service-Typen." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400" }),
                    "Anwendbar auf"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-300", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Cloud, { className: "h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Public Cloud Services:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-sm text-gray-400 mt-1", children: "IaaS, PaaS, SaaS und alle Hybrid-Modelle mit Public Cloud-Komponenten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "PII-Auftragsverarbeiter:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-sm text-gray-400 mt-1", children: "CSPs, die personenbezogene Daten im Auftrag von Kunden verarbeiten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Grenzüberschreitende Services:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-sm text-gray-400 mt-1", children: "Cloud-Services mit internationaler Datenverarbeitung und -speicherung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Multi-Tenant-Umgebungen:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-sm text-gray-400 mt-1", children: "Geteilte Infrastrukturen mit mehreren Kunden und PII-Controllern" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(X, { className: "h-5 w-5 text-red-400" }),
                    "Nicht anwendbar auf"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-300", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Private Clouds:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-sm text-gray-400 mt-1", children: "Ausschließlich interne, nicht-öffentliche Cloud-Infrastrukturen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "On-Premises-Lösungen:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-sm text-gray-400 mt-1", children: "Lokale Installationen ohne Cloud-Komponenten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(UserCheck, { className: "h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "PII-Controller:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-sm text-gray-400 mt-1", children: "Organisationen, die selbst die Zwecke der Datenverarbeitung bestimmen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Nicht-PII-Daten:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-sm text-gray-400 mt-1", children: "Reine Business-Daten ohne Personenbezug oder anonymisierte Daten" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Service-Modell-spezifische Anwendung" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-blue-900/20 border border-blue-700/50 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Server, { className: "h-6 w-6 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-3 text-center", children: "Infrastructure as a Service" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Virtual Machines mit PII-Speicherung" }),
                    /* @__PURE__ */ jsx("li", { children: "• Block- und Object-Storage für PII" }),
                    /* @__PURE__ */ jsx("li", { children: "• Backup- und Disaster Recovery-Services" }),
                    /* @__PURE__ */ jsx("li", { children: "• Network-Services mit PII-Transit" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-purple-900/20 border border-purple-700/50 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Layers, { className: "h-6 w-6 text-purple-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-3 text-center", children: "Platform as a Service" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Datenbank-Services mit PII" }),
                    /* @__PURE__ */ jsx("li", { children: "• Application Runtime Environments" }),
                    /* @__PURE__ */ jsx("li", { children: "• Integration und API-Plattformen" }),
                    /* @__PURE__ */ jsx("li", { children: "• Development und Testing Environments" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-green-900/20 border border-green-700/50 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Monitor, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-3 text-center", children: "Software as a Service" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• CRM und HR-Systeme" }),
                    /* @__PURE__ */ jsx("li", { children: "• Collaboration-Plattformen" }),
                    /* @__PURE__ */ jsx("li", { children: "• E-Mail und Communication Services" }),
                    /* @__PURE__ */ jsx("li", { children: "• Business Applications mit PII" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg border border-yellow-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-yellow-400" }),
                "Wichtige Abgrenzungen und Besonderheiten"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-3", children: "Shared Responsibility Model:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4", children: "ISO 27018 erkennt das Shared Responsibility Model an und definiert klare Verantwortlichkeiten zwischen CSP und Kunden für verschiedene Service-Modelle." }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "Multi-Jurisdictional Compliance:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Besondere Beachtung grenzüberschreitender Datenverarbeitung und unterschiedlicher nationaler Datenschutzgesetze." })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-3", children: "Sub-Processing:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4", children: "Explizite Regelungen für die Einbindung von Sub-Prozessoren und die Weitergabe von Verantwortlichkeiten in der Supply Chain." }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-3", children: "Incident Response:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Spezifische Anforderungen für die Meldung von Privacy-Incidents und Datenschutzverletzungen in Cloud-Umgebungen." })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "pii-classification",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Database, { className: "h-6 w-6 text-green-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "PII-Klassifizierung" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Die korrekte Klassifizierung von personenbezogenen Daten ist fundamental für die Implementierung angemessener Schutzmaßnahmen. ISO 27018 definiert detaillierte Kategorien und Schutzlevel für verschiedene Arten von PII." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-blue-400" }),
                    "Direkte Identifikatoren"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-2", children: "Hochsensible PII" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Sozialversicherungsnummern" }),
                        /* @__PURE__ */ jsx("li", { children: "• Personalausweisnummern" }),
                        /* @__PURE__ */ jsx("li", { children: "• Reisepassnummern" }),
                        /* @__PURE__ */ jsx("li", { children: "• Führerscheinnummern" }),
                        /* @__PURE__ */ jsx("li", { children: "• Steuerliche Identifikationsnummern" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-orange-400 mb-2", children: "Sensible PII" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Vollständiger Name" }),
                        /* @__PURE__ */ jsx("li", { children: "• E-Mail-Adressen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Telefonnummern" }),
                        /* @__PURE__ */ jsx("li", { children: "• Physische Adressen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Geburtsdaten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-2", children: "Standard PII" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Benutzernamen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Öffentliche Profile" }),
                        /* @__PURE__ */ jsx("li", { children: "• Arbeitgeberdaten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Präferenzen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Nicht-sensitive Kontaktdaten" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Activity, { className: "h-5 w-5 text-purple-400" }),
                    "Indirekte Identifikatoren"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Verhaltensdaten" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• IP-Adressen und Geolocation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Browser Fingerprints" }),
                        /* @__PURE__ */ jsx("li", { children: "• Clickstream-Daten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Session-Tokens" }),
                        /* @__PURE__ */ jsx("li", { children: "• Device-Identifikatoren" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Analytische Daten" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Nutzungsstatistiken" }),
                        /* @__PURE__ */ jsx("li", { children: "• Performance-Metriken" }),
                        /* @__PURE__ */ jsx("li", { children: "• Aggregierte Profile" }),
                        /* @__PURE__ */ jsx("li", { children: "• Machine Learning Features" }),
                        /* @__PURE__ */ jsx("li", { children: "• Inferenzen und Vorhersagen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Metadaten" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Zeitstempel" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dateimetadaten" }),
                        /* @__PURE__ */ jsx("li", { children: "• System-Logs" }),
                        /* @__PURE__ */ jsx("li", { children: "• Netzwerk-Informationen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Konfigurationsdaten" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Klassifizierungsmatrix und Schutzlevel" }),
              /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-600", children: [
                  /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-gray-300 font-medium", children: "PII-Kategorie" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-gray-300 font-medium", children: "Risiko-Level" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-gray-300 font-medium", children: "Verschlüsselung" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-gray-300 font-medium", children: "Zugriffskontrolle" }),
                  /* @__PURE__ */ jsx("th", { className: "text-left p-4 text-gray-300 font-medium", children: "Aufbewahrung" })
                ] }) }),
                /* @__PURE__ */ jsxs("tbody", { className: "text-gray-300 text-sm", children: [
                  /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-red-500 rounded-full" }),
                      "Hochsensible PII"
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { className: "bg-red-900/20 text-red-400 border-red-700/50", children: "Kritisch" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: "AES-256 + HSM" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: "MFA + RBAC + Audit" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: "< 2 Jahre" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-orange-500 rounded-full" }),
                      "Sensible PII"
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { className: "bg-orange-900/20 text-orange-400 border-orange-700/50", children: "Hoch" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: "AES-256" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: "MFA + RBAC" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: "< 5 Jahre" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-yellow-500 rounded-full" }),
                      "Standard PII"
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-900/20 text-yellow-400 border-yellow-700/50", children: "Mittel" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: "AES-128/256" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: "RBAC + Logging" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: "< 7 Jahre" })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-blue-500 rounded-full" }),
                      "Indirekte PII"
                    ] }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-900/20 text-blue-400 border-blue-700/50", children: "Niedrig" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: "TLS + Optional" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: "Standard RBAC" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4", children: "Nach Bedarf" })
                  ] })
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg border border-blue-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-cyan-400" }),
                "Implementierungsleitfaden für PII-Klassifizierung"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-cyan-400 mb-3", children: "Automatisierte Klassifizierung:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Data Loss Prevention (DLP) Tools" }),
                    /* @__PURE__ */ jsx("li", { children: "• Machine Learning-basierte Erkennung" }),
                    /* @__PURE__ */ jsx("li", { children: "• Regex-Pattern für Identifikatoren" }),
                    /* @__PURE__ */ jsx("li", { children: "• Content-Analyse und Metadaten-Scanning" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-3", children: "Governance und Prozesse:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Klassifizierungs-Reviews" }),
                    /* @__PURE__ */ jsx("li", { children: "• Data Steward Rollen und Verantwortlichkeiten" }),
                    /* @__PURE__ */ jsx("li", { children: "• Ausnahmemanagement und Eskalation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Training und Awareness Programme" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "consent-management",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-600/20 rounded-lg", children: /* @__PURE__ */ jsx(CheckCircle, { className: "h-6 w-6 text-green-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Consent Management" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO 27018 definiert spezifische Anforderungen für das Management von Einwilligungen in Cloud-Umgebungen. Als PII-Processor müssen CSPs die Einwilligungsgrundlagen ihrer Kunden respektieren und entsprechende technische Mechanismen bereitstellen." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(UserCheck, { className: "h-5 w-5 text-green-400" }),
                    "Consent-Prinzipien nach ISO 27018"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Informed Consent:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Kunden müssen vollständig über die Art der Datenverarbeitung, Zwecke und potenzielle Risiken informiert werden." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Specific Consent:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Einwilligungen müssen für spezifische Verarbeitungszwecke und -aktivitäten granular erfasst werden." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Revocable Consent:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Benutzer müssen jederzeit ihre Einwilligung widerrufen können, ohne negative Konsequenzen für den Service." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Demonstrable Consent:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "CSPs müssen nachweisen können, dass und wann Einwilligungen erteilt wurden." })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-blue-400" }),
                    "Technische Implementierung"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Consent Management Platform" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Zentralisierte Consent-Datenbank" }),
                        /* @__PURE__ */ jsx("li", { children: "• API-basierte Consent-Prüfung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Versionierung von Consent-Policies" }),
                        /* @__PURE__ */ jsx("li", { children: "• Real-time Consent-Updates" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Privacy Preference Center" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Granulare Einstellungsmöglichkeiten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Benutzerfreundliche Interfaces" }),
                        /* @__PURE__ */ jsx("li", { children: "• Multi-Channel Verfügbarkeit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Consent-Historie und -Analytics" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Enforcement Mechanisms" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Automatisierte Policy Enforcement" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Processing Gates" }),
                        /* @__PURE__ */ jsx("li", { children: "• Consent-basierte Access Controls" }),
                        /* @__PURE__ */ jsx("li", { children: "• Violation Detection und Alerting" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Consent-Lebenszyklus in der Cloud" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Plus, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "1. Erfassung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Initial consent collection beim Service-Onboarding mit klarer Zweckbindung" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Database, { className: "h-6 w-6 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "2. Speicherung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Sichere, verschlüsselte Speicherung mit Versionierung und Audit-Trail" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Activity, { className: "h-6 w-6 text-purple-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "3. Durchsetzung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Real-time enforcement bei jeder Datenverarbeitungsaktivität" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(X, { className: "h-6 w-6 text-red-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "4. Widerruf" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Sofortige Datenverarbeitungsstopps bei Consent-Widerruf" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-lg border border-green-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-teal-400" }),
                "Best Practices für Cloud-Consent-Management"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-teal-400 mb-3", children: "Architektur:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Microservices-basierte Consent Services" }),
                    /* @__PURE__ */ jsx("li", { children: "• Event-driven Consent Propagation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Multi-region Consent Synchronisation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Fallback-Mechanismen bei Ausfällen" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "Integration:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• SDK für Kundenanwendungen" }),
                    /* @__PURE__ */ jsx("li", { children: "• Webhook-basierte Notifications" }),
                    /* @__PURE__ */ jsx("li", { children: "• Standard-APIs (OpenAPI/REST)" }),
                    /* @__PURE__ */ jsx("li", { children: "• Third-party System Connectors" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-3", children: "Monitoring:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Consent Compliance Dashboards" }),
                    /* @__PURE__ */ jsx("li", { children: "• Automated Consent Auditing" }),
                    /* @__PURE__ */ jsx("li", { children: "• Performance und Availability Metrics" }),
                    /* @__PURE__ */ jsx("li", { children: "• Regulatory Reporting Features" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "data-processing",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Settings, { className: "h-6 w-6 text-blue-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Datenverarbeitung" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO 27018 definiert strenge Kontrollen für die Verarbeitung personenbezogener Daten in Cloud-Umgebungen. CSPs müssen sicherstellen, dass PII nur entsprechend den Anweisungen des Controllers und innerhalb der vereinbarten Zweckbindung verarbeitet wird." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5 text-blue-400" }),
                    "Verarbeitungsgrundsätze"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Zweckbindung:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "PII darf nur für die explizit vereinbarten Zwecke verarbeitet werden. Keine sekundäre Nutzung ohne zusätzliche Einwilligung." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Datenminimierung:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Nur die für den Service notwendigen PII werden erfasst, verarbeitet und gespeichert." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Vertraulichkeit:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Umfassende technische und organisatorische Maßnahmen zum Schutz vor unbefugtem Zugriff." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Integrität:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Schutz vor unbefugter oder unbeabsichtigter Änderung, Löschung oder Zerstörung von PII." })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-green-400" }),
                    "Verarbeitungskontrollen"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Zugriffskontrolle" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Role-based Access Control (RBAC)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Attribute-based Access Control (ABAC)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Multi-Factor Authentication" }),
                        /* @__PURE__ */ jsx("li", { children: "• Privileged Access Management" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Verschlüsselung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Encryption at Rest (AES-256)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Encryption in Transit (TLS 1.3)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Encryption in Use (Confidential Computing)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Key Management und HSM Integration" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Monitoring" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Real-time Data Access Monitoring" }),
                        /* @__PURE__ */ jsx("li", { children: "• Anomaly Detection" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance Dashboards" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Incident Response" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Verarbeitungsaktivitäten und Kontrollen" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-blue-400" }),
                    "Datenerfassung und -eingabe"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 mb-2", children: "Input Validation" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Schema-basierte Validierung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Quality Checks" }),
                        /* @__PURE__ */ jsx("li", { children: "• Format und Type Validation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Boundary Value Testing" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-2", children: "Data Sanitization" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Input Sanitization" }),
                        /* @__PURE__ */ jsx("li", { children: "• XSS Prevention" }),
                        /* @__PURE__ */ jsx("li", { children: "• SQL Injection Protection" }),
                        /* @__PURE__ */ jsx("li", { children: "• NoSQL Injection Prevention" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-purple-400 mb-2", children: "Audit Logging" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Input Data Logging" }),
                        /* @__PURE__ */ jsx("li", { children: "• Source Attribution" }),
                        /* @__PURE__ */ jsx("li", { children: "• Timestamp Recording" }),
                        /* @__PURE__ */ jsx("li", { children: "• User Activity Tracking" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Activity, { className: "h-5 w-5 text-green-400" }),
                    "Datenverarbeitung und -transformation"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-orange-400 mb-2", children: "Processing Controls" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Business Logic Validation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Transformation Rules" }),
                        /* @__PURE__ */ jsx("li", { children: "• Error Handling Procedures" }),
                        /* @__PURE__ */ jsx("li", { children: "• Rollback Mechanisms" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-teal-900/20 border border-teal-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-teal-400 mb-2", children: "Privacy Preserving" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Differential Privacy" }),
                        /* @__PURE__ */ jsx("li", { children: "• K-Anonymity" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Masking" }),
                        /* @__PURE__ */ jsx("li", { children: "• Pseudonymization" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-400 mb-2", children: "Quality Assurance" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Data Lineage Tracking" }),
                        /* @__PURE__ */ jsx("li", { children: "• Processing Verification" }),
                        /* @__PURE__ */ jsx("li", { children: "• Output Quality Checks" }),
                        /* @__PURE__ */ jsx("li", { children: "• Consistency Validation" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Share2, { className: "h-5 w-5 text-purple-400" }),
                    "Datenübertragung und -freigabe"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-indigo-900/20 border border-indigo-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-indigo-400 mb-2", children: "Transfer Security" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• End-to-End Encryption" }),
                        /* @__PURE__ */ jsx("li", { children: "• Certificate Pinning" }),
                        /* @__PURE__ */ jsx("li", { children: "• Perfect Forward Secrecy" }),
                        /* @__PURE__ */ jsx("li", { children: "• Transfer Protocol Validation" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-pink-900/20 border border-pink-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-pink-400 mb-2", children: "Authorization" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Data Sharing Agreements" }),
                        /* @__PURE__ */ jsx("li", { children: "• Purpose Limitation Checks" }),
                        /* @__PURE__ */ jsx("li", { children: "• Recipient Validation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Transfer Approval Workflows" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-emerald-900/20 border border-emerald-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-emerald-400 mb-2", children: "Compliance" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Cross-Border Transfer Rules" }),
                        /* @__PURE__ */ jsx("li", { children: "• Adequacy Decision Compliance" }),
                        /* @__PURE__ */ jsx("li", { children: "• Standard Contractual Clauses" }),
                        /* @__PURE__ */ jsx("li", { children: "• Transfer Impact Assessments" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Code, { className: "h-5 w-5 text-pink-400" }),
                "Technische Implementierungsrichtlinien"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-pink-400 mb-3", children: "API Design für Privacy:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Privacy-by-Design API Patterns" }),
                    /* @__PURE__ */ jsx("li", { children: "• Granulare Consent-Parameter" }),
                    /* @__PURE__ */ jsx("li", { children: "• Purpose-bound API Endpoints" }),
                    /* @__PURE__ */ jsx("li", { children: "• Data Minimization in Responses" }),
                    /* @__PURE__ */ jsx("li", { children: "• Automated Privacy Policy Enforcement" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-cyan-400 mb-3", children: "Infrastructure Security:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Zero-Trust Network Architecture" }),
                    /* @__PURE__ */ jsx("li", { children: "• Micro-segmentation for PII workloads" }),
                    /* @__PURE__ */ jsx("li", { children: "• Container Security und Image Scanning" }),
                    /* @__PURE__ */ jsx("li", { children: "• Serverless Function Isolation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Hardware Security Module Integration" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "transparency",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-cyan-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Info, { className: "h-6 w-6 text-cyan-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Transparenz & Information" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO 27018 verlangt umfassende Transparenz über die Verarbeitung personenbezogener Daten in Cloud-Umgebungen. CSPs müssen ihre Kunden proaktiv und verständlich über alle relevanten Aspekte der PII-Verarbeitung informieren." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-cyan-400" }),
                    "Informationspflichten"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Verarbeitungszwecke:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Klare Dokumentation aller Zwecke, für die PII verarbeitet wird, einschließlich Service-Bereitstellung und Support-Aktivitäten." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Datenarten:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Vollständige Auflistung der verarbeiteten PII-Kategorien mit Klassifizierung und Sensitivitätslevel." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Speicherorte:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Geografische Angaben zu Rechenzentren und Backup-Standorten mit Jurisdiktionshinweisen." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Aufbewahrungszeiten:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Spezifische Retention-Richtlinien für verschiedene PII-Kategorien und Löschungsverfahren." })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-blue-400" }),
                    "Transparenz-Mechanismen"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Privacy Dashboard" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Real-time Datenverarbeitungs-Übersicht" }),
                        /* @__PURE__ */ jsx("li", { children: "• Interaktive Privacy-Einstellungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Audit-Log für PII-Aktivitäten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance-Status-Anzeige" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Automatisierte Benachrichtigungen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Policy-Änderungsmitteilungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Datenverarbeitungs-Alerts" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident-Notifications" }),
                        /* @__PURE__ */ jsx("li", { children: "• Consent-Erinnerungen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Dokumentation & Reporting" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Maschinell lesbare Privacy-Policies" }),
                        /* @__PURE__ */ jsx("li", { children: "• Standardisierte Compliance-Reports" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Flow-Diagramme" }),
                        /* @__PURE__ */ jsx("li", { children: "• Third-party Audit-Berichte" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Privacy Notice Framework" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Eye, { className: "h-6 w-6 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-3 text-center", children: "Layered Privacy Notice" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Kurze Übersichts-Notice" }),
                    /* @__PURE__ */ jsx("li", { children: "• Detaillierte Vollversion" }),
                    /* @__PURE__ */ jsx("li", { children: "• Kontextuelle Just-in-Time-Notices" }),
                    /* @__PURE__ */ jsx("li", { children: "• Multi-Language Support" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Settings, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-3 text-center", children: "Machine-Readable Formats" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• JSON-LD Privacy Policies" }),
                    /* @__PURE__ */ jsx("li", { children: "• OpenAPI Privacy Specifications" }),
                    /* @__PURE__ */ jsx("li", { children: "• GDPR-XML Compliance Exports" }),
                    /* @__PURE__ */ jsx("li", { children: "• P3P Policy References" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-purple-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-3 text-center", children: "Zielgruppen-spezifisch" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• B2B Customer Portals" }),
                    /* @__PURE__ */ jsx("li", { children: "• End-User Interfaces" }),
                    /* @__PURE__ */ jsx("li", { children: "• Regulatory Authority Views" }),
                    /* @__PURE__ */ jsx("li", { children: "• Developer Documentation" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-cyan-400" }),
                "Implementierungsstrategien für maximale Transparenz"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-cyan-400 mb-3", children: "Proaktive Kommunikation:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Automatisierte Privacy Impact Notifications" }),
                    /* @__PURE__ */ jsx("li", { children: "• Service-Update Transparency Reports" }),
                    /* @__PURE__ */ jsx("li", { children: "• Monthly Data Processing Summaries" }),
                    /* @__PURE__ */ jsx("li", { children: "• Breach Prevention Communication" }),
                    /* @__PURE__ */ jsx("li", { children: "• Regulatory Change Updates" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "Self-Service Transparency:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• API-basierte Privacy-Queries" }),
                    /* @__PURE__ */ jsx("li", { children: "• Real-time Data Location Tracking" }),
                    /* @__PURE__ */ jsx("li", { children: "• Self-Service Compliance Reporting" }),
                    /* @__PURE__ */ jsx("li", { children: "• Interactive Privacy Policy Builder" }),
                    /* @__PURE__ */ jsx("li", { children: "• Audit Trail Self-Service Access" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "data-subject-rights",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-green-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Betroffenenrechte" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO 27018 verpflichtet CSPs, umfassende technische und organisatorische Maßnahmen zur Unterstützung der Betroffenenrechte zu implementieren. Dies umfasst sowohl automatisierte Self-Service-Funktionen als auch strukturierte Prozesse für komplexe Anfragen." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-green-400" }),
                    "Kernrechte nach ISO 27018"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Recht auf Auskunft" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "Vollständige Informationen über gespeicherte PII, Verarbeitungszwecke und Empfänger." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Automatisierte Datenexporte" }),
                        /* @__PURE__ */ jsx("li", { children: "• Structured Data Formats (JSON, XML)" }),
                        /* @__PURE__ */ jsx("li", { children: "• < 30 Tage Bearbeitungszeit" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Recht auf Berichtigung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "Korrektur unrichtiger oder unvollständiger personenbezogener Daten." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Self-Service Korrektur-Interfaces" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Data Validation" }),
                        /* @__PURE__ */ jsx("li", { children: "• < 72 Stunden Umsetzung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-2", children: "Recht auf Löschung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "Vollständige und nachweisbare Entfernung von PII aus allen Systemen." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Cryptographic Erasure" }),
                        /* @__PURE__ */ jsx("li", { children: "• Multi-System Deletion Orchestration" }),
                        /* @__PURE__ */ jsx("li", { children: "• Deletion Verification Certificates" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Recht auf Datenportabilität" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "Strukturierte Übertragung von PII an andere Service Provider." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Standardisierte Export-Formate" }),
                        /* @__PURE__ */ jsx("li", { children: "• API-to-API Direct Transfer" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Integrity Verification" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-blue-400" }),
                    "Technische Implementierung"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-indigo-900/20 border border-indigo-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-indigo-400 mb-2", children: "Data Subject Request Platform" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Multi-Channel Request Interfaces" }),
                        /* @__PURE__ */ jsx("li", { children: "• Identity Verification Systems" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Request Routing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Progress Tracking Dashboards" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-teal-900/20 border border-teal-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-teal-400 mb-2", children: "Privacy Rights Management" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Centralized Rights Database" }),
                        /* @__PURE__ */ jsx("li", { children: "• Cross-System Data Discovery" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Impact Assessment" }),
                        /* @__PURE__ */ jsx("li", { children: "• Legal Basis Validation" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-orange-400 mb-2", children: "Process Automation" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Machine Learning Request Classification" }),
                        /* @__PURE__ */ jsx("li", { children: "• Workflow-based Processing" }),
                        /* @__PURE__ */ jsx("li", { children: "• SLA Monitoring und Alerting" }),
                        /* @__PURE__ */ jsx("li", { children: "• Quality Assurance Checks" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Rechte-Erfüllungsprozess" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-slate-700/30 rounded-lg p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Upload, { className: "h-6 w-6 text-blue-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "1. Eingang" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Automatische Erfassung und Kategorisierung der Anfrage" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(UserCheck, { className: "h-6 w-6 text-green-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "2. Verifikation" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Multi-Faktor Identitätsprüfung des Antragstellers" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6 text-purple-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "3. Discovery" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Systemweite Suche nach relevanten Daten" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Settings, { className: "h-6 w-6 text-yellow-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "4. Verarbeitung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Automatisierte oder manuelle Ausführung der Anfrage" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(CheckCircle, { className: "h-6 w-6 text-red-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "5. Abschluss" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Benachrichtigung und Dokumentation der Erledigung" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-blue-400" }),
                      "Service Level Agreements"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-blue-900/20 rounded-lg", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Auskunftserteilung" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-blue-600/20 text-blue-400", children: "30 Tage" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-green-900/20 rounded-lg", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Datenberichtigung" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-green-600/20 text-green-400", children: "72 Stunden" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-red-900/20 rounded-lg", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Datenlöschung" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-red-600/20 text-red-400", children: "7 Tage" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-purple-900/20 rounded-lg", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Datenportabilität" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-purple-600/20 text-purple-400", children: "14 Tage" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-green-400" }),
                      "Qualitätssicherung"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-300 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "4-Augen-Prinzip bei sensiblen Anfragen" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Automated Completeness Verification" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Customer Satisfaction Tracking" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Regulatory Compliance Audits" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-green-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5 text-emerald-400" }),
                "Advanced Privacy Rights Features"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-emerald-400 mb-3", children: "AI-Powered Processing:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Natural Language Request Processing" }),
                    /* @__PURE__ */ jsx("li", { children: "• Intelligent Data Discovery" }),
                    /* @__PURE__ */ jsx("li", { children: "• Automated Legal Basis Assessment" }),
                    /* @__PURE__ */ jsx("li", { children: "• Predictive SLA Management" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "Blockchain Integration:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Immutable Audit Trails" }),
                    /* @__PURE__ */ jsx("li", { children: "• Cryptographic Request Verification" }),
                    /* @__PURE__ */ jsx("li", { children: "• Decentralized Identity Verification" }),
                    /* @__PURE__ */ jsx("li", { children: "• Smart Contract Enforcement" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-3", children: "Real-time Capabilities:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Live Data Processing Visualization" }),
                    /* @__PURE__ */ jsx("li", { children: "• Instant Consent Revocation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Real-time Data Portability" }),
                    /* @__PURE__ */ jsx("li", { children: "• Dynamic Privacy Preferences" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "cross-border",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-orange-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Globe, { className: "h-6 w-6 text-orange-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Grenzüberschreitende Übertragung" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO 27018 adressiert die komplexen rechtlichen und technischen Herausforderungen bei grenzüberschreitenden Datenübertragungen in Cloud-Umgebungen. CSPs müssen robuste Mechanismen implementieren, um verschiedene Datenschutzgesetze zu harmonisieren." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-orange-400" }),
                    "Rechtliche Transfermechanismen"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Angemessenheitsbeschluss" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "Automatische Transfers in Länder mit anerkannt adäquatem Datenschutzniveau." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Dynamische Jurisdictional Mapping" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Adequacy Decision Updates" }),
                        /* @__PURE__ */ jsx("li", { children: "• Real-time Compliance Monitoring" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Standardvertragsklauseln" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "EU-Kommission SCCs für Transfers in Drittländer ohne Angemessenheitsbeschluss." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Automated SCC Generation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Multi-party Agreement Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Transfer Impact Assessments" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Binding Corporate Rules" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "Interne Datenschutzregeln für konzerninterne Datenübertragungen." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Global Privacy Policy Frameworks" }),
                        /* @__PURE__ */ jsx("li", { children: "• Intra-group Transfer Automation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Centralized BCR Compliance" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-2", children: "Zusätzliche Schutzmaßnahmen" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "Technische und organisatorische Maßnahmen bei unzureichendem lokalen Schutz." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• End-to-End Encryption" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Localization Options" }),
                        /* @__PURE__ */ jsx("li", { children: "• Government Access Transparency" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Network, { className: "h-5 w-5 text-blue-400" }),
                    "Technische Implementierung"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-indigo-900/20 border border-indigo-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-indigo-400 mb-2", children: "Geolocation Engine" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Real-time Data Location Tracking" }),
                        /* @__PURE__ */ jsx("li", { children: "• Multi-region Compliance Routing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Jurisdiction Detection" }),
                        /* @__PURE__ */ jsx("li", { children: "• Cross-border Impact Assessment" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-teal-900/20 border border-teal-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-teal-400 mb-2", children: "Policy Enforcement Engine" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Dynamic Transfer Rules" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Compliance Checks" }),
                        /* @__PURE__ */ jsx("li", { children: "• Exception Handling Workflows" }),
                        /* @__PURE__ */ jsx("li", { children: "• Audit Trail Generation" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-orange-400 mb-2", children: "Encryption Gateway" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Border-Crossing Encryption" }),
                        /* @__PURE__ */ jsx("li", { children: "• Key Escrow Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Jurisdiction-specific Algorithms" }),
                        /* @__PURE__ */ jsx("li", { children: "• Quantum-safe Preparations" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Transfer Impact Assessment Framework" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "1. Risikobewertung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Systematische Analyse von Datenschutzrisiken im Zielland" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Settings, { className: "h-6 w-6 text-yellow-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "2. Schutzmaßnahmen" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Definition zusätzlicher technischer und organisatorischer Maßnahmen" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(CheckCircle, { className: "h-6 w-6 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "3. Wirksamkeitstest" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Kontinuierliche Überprüfung der Schutzmaßnahmen-Effektivität" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "4. Dokumentation" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Vollständige Dokumentation für Aufsichtsbehörden" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg border border-orange-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-orange-400" }),
                "Emerging Challenges und Future-Proofing"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-orange-400 mb-3", children: "Regulatory Fragmentation:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Multi-jurisdictional Compliance Engines" }),
                    /* @__PURE__ */ jsx("li", { children: "• Dynamic Regulatory Change Management" }),
                    /* @__PURE__ */ jsx("li", { children: "• Automated Legal Basis Adaptation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Cross-border Incident Coordination" }),
                    /* @__PURE__ */ jsx("li", { children: "• Sovereignty-aware Data Residency" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-3", children: "Technical Innovation:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Zero-Knowledge Transfer Protocols" }),
                    /* @__PURE__ */ jsx("li", { children: "• Homomorphic Encryption für Processing" }),
                    /* @__PURE__ */ jsx("li", { children: "• Federated Learning Architectures" }),
                    /* @__PURE__ */ jsx("li", { children: "• Quantum-safe Cryptographic Transitions" }),
                    /* @__PURE__ */ jsx("li", { children: "• Decentralized Identity Verification" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "subprocessing",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Share2, { className: "h-6 w-6 text-purple-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Unterauftragsverarbeitung" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO 27018 definiert strenge Kontrollen für die Einbindung von Subprozessoren in die PII-Verarbeitung. CSPs müssen umfassende Due Diligence, Vertragsmanagement und kontinuierliche Überwachung ihrer gesamten Supply Chain implementieren." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-purple-400" }),
                    "Subprozessor-Governance"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Due Diligence:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Umfassende Sicherheits- und Datenschutzbewertung vor Beauftragung, einschließlich Zertifizierungs- und Audit-Nachweise." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Vertragsgestaltung:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Bindende Datenschutzvereinbarungen mit denselben Schutzstandards wie der Hauptvertrag mit dem Controller." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Genehmigungsverfahren:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Strukturierte Prozesse für die Einholung von Controller-Genehmigungen bei neuen oder geänderten Subprozessor-Beziehungen." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Kontinuierliche Überwachung:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Regelmäßige Compliance-Assessments und Performance-Monitoring aller aktiven Subprozessor-Beziehungen." })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Network, { className: "h-5 w-5 text-blue-400" }),
                    "Supply Chain Management"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Vendor Management Platform" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Centralized Subprozessor Database" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Compliance Tracking" }),
                        /* @__PURE__ */ jsx("li", { children: "• Contract Lifecycle Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Risk Scoring und Monitoring" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Data Flow Mapping" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• End-to-End PII Flow Visualization" }),
                        /* @__PURE__ */ jsx("li", { children: "• Multi-tier Subprozessor Tracking" }),
                        /* @__PURE__ */ jsx("li", { children: "• Cross-border Transfer Mapping" }),
                        /* @__PURE__ */ jsx("li", { children: "• Purpose Limitation Enforcement" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Compliance Automation" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Automated SLA Monitoring" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance Dashboard Integration" }),
                        /* @__PURE__ */ jsx("li", { children: "• Exception Alerting Systems" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regulatory Change Propagation" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Subprozessor-Lebenszyklus" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-slate-700/30 rounded-lg p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Search, { className: "h-5 w-5 text-blue-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm mb-1", children: "Identifikation" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Vendor Discovery und Initial Assessment" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-green-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm mb-1", children: "Bewertung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Security & Privacy Due Diligence" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Gavel, { className: "h-5 w-5 text-purple-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm mb-1", children: "Vertragsschluss" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "DPA Negotiation & Execution" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-yellow-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm mb-1", children: "Genehmigung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Controller Approval Process" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Activity, { className: "h-5 w-5 text-orange-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm mb-1", children: "Betrieb" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Ongoing Monitoring & Management" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5 text-red-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm mb-1", children: "Beendigung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Secure Data Return/Deletion" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-yellow-400" }),
                      "Risikomanagement"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-400 text-sm mb-1", children: "Hochrisiko-Faktoren" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Zugriff auf hochsensible PII" }),
                          /* @__PURE__ */ jsx("li", { children: "• Operations in Drittländern" }),
                          /* @__PURE__ */ jsx("li", { children: "• Neue oder ungetestete Anbieter" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-yellow-400 text-sm mb-1", children: "Mittelrisiko-Faktoren" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Limitierter PII-Zugang" }),
                          /* @__PURE__ */ jsx("li", { children: "• Etablierte Compliance-History" }),
                          /* @__PURE__ */ jsx("li", { children: "• Standard-Zertifizierungen" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 text-sm mb-1", children: "Niedrigrisiko-Faktoren" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Kein direkter PII-Zugang" }),
                          /* @__PURE__ */ jsx("li", { children: "• Premium-Zertifizierungen" }),
                          /* @__PURE__ */ jsx("li", { children: "• Langfristige Partnerschaft" })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-blue-400" }),
                      "Monitoring & KPIs"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-blue-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "SLA Compliance Rate" }),
                        /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "99.8%" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-green-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Security Audit Score" }),
                        /* @__PURE__ */ jsx("span", { className: "text-green-400 font-medium", children: "A+" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-purple-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Contract Renewal Rate" }),
                        /* @__PURE__ */ jsx("span", { className: "text-purple-400 font-medium", children: "95%" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-yellow-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Incident Response Time" }),
                        /* @__PURE__ */ jsx("span", { className: "text-yellow-400 font-medium", children: "< 2h" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-lg border border-purple-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-indigo-400" }),
                "Advanced Subprozessor Management"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-indigo-400 mb-3", children: "AI-Driven Insights:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Predictive Risk Assessment" }),
                    /* @__PURE__ */ jsx("li", { children: "• Automated Vendor Scoring" }),
                    /* @__PURE__ */ jsx("li", { children: "• Contract Optimization Recommendations" }),
                    /* @__PURE__ */ jsx("li", { children: "• Supply Chain Vulnerability Detection" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-3", children: "Blockchain Integration:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Immutable Vendor Compliance Records" }),
                    /* @__PURE__ */ jsx("li", { children: "• Smart Contract Automation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Decentralized Reputation Systems" }),
                    /* @__PURE__ */ jsx("li", { children: "• Cross-industry Vendor Sharing" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "Zero Trust Architecture:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Continuous Vendor Verification" }),
                    /* @__PURE__ */ jsx("li", { children: "• Dynamic Access Controls" }),
                    /* @__PURE__ */ jsx("li", { children: "• Real-time Behavior Monitoring" }),
                    /* @__PURE__ */ jsx("li", { children: "• Automatic Incident Isolation" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "incident-notification",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-red-600/20 rounded-lg", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Incident Notification" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO 27018 verlangt von CSPs die Implementierung robuster Incident Response-Mechanismen mit speziellem Fokus auf Privacy-Incidents. Dies umfasst sowohl technische Erkennungssysteme als auch strukturierte Kommunikationsprozesse." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-red-400" }),
                    "Privacy Incident Kategorien"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-2", children: "Datenschutzverletzung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "Unbefugter Zugriff, Offenlegung oder Verlust von personenbezogenen Daten." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Notification innerhalb 72 Stunden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Betroffene Information bei hohem Risiko" }),
                        /* @__PURE__ */ jsx("li", { children: "• Umfassende Incident Documentation" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-orange-400 mb-2", children: "System Kompromittierung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "Sicherheitsincidents mit potenziellem PII-Impact in Cloud-Infrastrukturen." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Sofortige Controller-Benachrichtigung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Impact Assessment" }),
                        /* @__PURE__ */ jsx("li", { children: "• Coordinated Response Planning" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-2", children: "Compliance Violation" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "Verstöße gegen Datenschutzrichtlinien oder vertragliche Vereinbarungen." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Root Cause Analysis" }),
                        /* @__PURE__ */ jsx("li", { children: "• Corrective Action Implementation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Process Improvement Documentation" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Service Disruption" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "Verfügbarkeitsincidents mit Auswirkungen auf PII-Verarbeitungssysteme." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Business Continuity Activation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Alternative Processing Arrangements" }),
                        /* @__PURE__ */ jsx("li", { children: "• Recovery Time Communication" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Activity, { className: "h-5 w-5 text-blue-400" }),
                    "Incident Response Architecture"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-indigo-900/20 border border-indigo-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-indigo-400 mb-2", children: "Detection Systems" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• AI-powered Anomaly Detection" }),
                        /* @__PURE__ */ jsx("li", { children: "• Real-time PII Access Monitoring" }),
                        /* @__PURE__ */ jsx("li", { children: "• Behavioral Analytics Engine" }),
                        /* @__PURE__ */ jsx("li", { children: "• Multi-source Threat Intelligence" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-teal-900/20 border border-teal-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-teal-400 mb-2", children: "Automated Response" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Immediate Containment Actions" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Stakeholder Notification" }),
                        /* @__PURE__ */ jsx("li", { children: "• Evidence Collection Orchestration" }),
                        /* @__PURE__ */ jsx("li", { children: "• Recovery Process Initiation" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-emerald-900/20 border border-emerald-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-emerald-400 mb-2", children: "Communication Hub" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Multi-channel Notification System" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regulatory Authority Interfaces" }),
                        /* @__PURE__ */ jsx("li", { children: "• Customer Communication Portals" }),
                        /* @__PURE__ */ jsx("li", { children: "• Media Relations Coordination" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Incident Response Workflow" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-slate-700/30 rounded-lg p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "1. Detection" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Automatische Erkennung und Klassifizierung von Privacy-Incidents" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-red-900/20 text-red-400 text-xs mt-2", children: "< 15 min" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-orange-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "2. Containment" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Sofortige Schutzmaßnahmen zur Schadensbegrenzung" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-orange-900/20 text-orange-400 text-xs mt-2", children: "< 1 hour" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Bell, { className: "h-6 w-6 text-blue-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "3. Notification" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Strukturierte Benachrichtigung aller relevanten Stakeholder" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-blue-900/20 text-blue-400 text-xs mt-2", children: "< 72 hours" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Settings, { className: "h-6 w-6 text-green-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "4. Recovery" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Wiederherstellung normaler Betriebszustände" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-green-900/20 text-green-400 text-xs mt-2", children: "Variable" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-purple-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "5. Lessons Learned" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Post-Incident-Analyse und Prozessverbesserungen" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-purple-900/20 text-purple-400 text-xs mt-2", children: "30 days" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-green-400" }),
                      "Stakeholder Matrix"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 text-sm mb-1", children: "Internal Teams" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Security Operations, Legal, Customer Support, Executive Management" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 text-sm mb-1", children: "Customers (Controllers)" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Primary contacts, DPOs, Technical teams, Legal departments" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-400 text-sm mb-1", children: "Regulatory Bodies" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Data Protection Authorities, Sector-specific regulators" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-purple-400 text-sm mb-1", children: "Data Subjects" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Betroffene Personen bei high-risk Incidents" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-blue-400" }),
                      "Incident Metrics"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-green-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Mean Time to Detection" }),
                        /* @__PURE__ */ jsx("span", { className: "text-green-400 font-medium", children: "8.5 min" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-blue-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Mean Time to Containment" }),
                        /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "42 min" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-orange-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Mean Time to Notification" }),
                        /* @__PURE__ */ jsx("span", { className: "text-orange-400 font-medium", children: "4.2 hours" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-purple-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "False Positive Rate" }),
                        /* @__PURE__ */ jsx("span", { className: "text-purple-400 font-medium", children: "2.3%" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg border border-red-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5 text-orange-400" }),
                "Next-Generation Incident Response"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-orange-400 mb-3", children: "AI-Enhanced Detection:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Predictive Incident Modeling" }),
                    /* @__PURE__ */ jsx("li", { children: "• Natural Language Processing für Logs" }),
                    /* @__PURE__ */ jsx("li", { children: "• Cross-correlation Attack Pattern Recognition" }),
                    /* @__PURE__ */ jsx("li", { children: "• Automated Threat Hunting" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-3", children: "Orchestrated Response:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• SOAR Integration für Automation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Dynamic Playbook Execution" }),
                    /* @__PURE__ */ jsx("li", { children: "• Cross-platform Response Coordination" }),
                    /* @__PURE__ */ jsx("li", { children: "• Intelligent Escalation Management" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-3", children: "Continuous Learning:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Machine Learning Feedback Loops" }),
                    /* @__PURE__ */ jsx("li", { children: "• Industry Threat Intelligence Sharing" }),
                    /* @__PURE__ */ jsx("li", { children: "• Behavioral Pattern Evolution" }),
                    /* @__PURE__ */ jsx("li", { children: "• Adaptive Response Strategies" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "audit-compliance",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6 text-blue-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Audit & Compliance" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO 27018 verlangt regelmäßige und umfassende Audit-Aktivitäten zur Sicherstellung der kontinuierlichen Compliance. CSPs müssen sowohl interne als auch externe Prüfungsverfahren implementieren und eine lückenlose Nachweisführung gewährleisten." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-blue-400" }),
                    "Audit-Framework"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Kontinuierliche Überwachung:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Automatisierte Compliance-Monitoring-Systeme mit Real-time-Dashboards und proaktiven Alerting-Mechanismen." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Risiko-basierte Audits:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Fokussierte Prüfungen basierend auf Risikobewertungen, Incident-Historie und regulatorischen Änderungen." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Multi-Stakeholder-Ansatz:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Koordinierte Audits mit internen Teams, externen Prüfern und Aufsichtsbehörden für ganzheitliche Bewertungen." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Evidence-based Reporting:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Automatisierte Evidenz-Sammlung und -Aufbereitung für regulatorische und Compliance-Berichte." })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-green-400" }),
                    "Compliance Management System"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Policy Engine" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Automated Policy Distribution" }),
                        /* @__PURE__ */ jsx("li", { children: "• Version Control und Change Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance Rule Engine" }),
                        /* @__PURE__ */ jsx("li", { children: "• Exception Management Workflows" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Control Assessment Platform" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Automated Control Testing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Evidence Collection Automation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Risk und Control Maturity Scoring" }),
                        /* @__PURE__ */ jsx("li", { children: "• Remediation Tracking" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Reporting & Analytics" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Executive Compliance Dashboards" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regulatory Report Generation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Trend Analysis und Predictions" }),
                        /* @__PURE__ */ jsx("li", { children: "• Benchmark und Industry Comparisons" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Audit-Lifecycle Management" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-slate-700/30 rounded-lg p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-6 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5 text-blue-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm mb-1", children: "Planung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Risk Assessment & Scope Definition" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-green-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm mb-1", children: "Vorbereitung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Evidence Collection & Documentation" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Search, { className: "h-5 w-5 text-purple-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm mb-1", children: "Durchführung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Control Testing & Assessment" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-yellow-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm mb-1", children: "Bewertung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Finding Analysis & Risk Rating" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-orange-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm mb-1", children: "Remediation" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Corrective Action Implementation" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-red-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm mb-1", children: "Follow-up" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Verification & Closure" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-blue-400" }),
                      "Compliance KPIs"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-green-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Control Effectiveness" }),
                        /* @__PURE__ */ jsx("span", { className: "text-green-400 font-medium", children: "96.8%" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-blue-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Audit Coverage" }),
                        /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "100%" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-purple-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Finding Closure Rate" }),
                        /* @__PURE__ */ jsx("span", { className: "text-purple-400 font-medium", children: "94.2%" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-yellow-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Time to Remediation" }),
                        /* @__PURE__ */ jsx("span", { className: "text-yellow-400 font-medium", children: "12 days" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-green-400" }),
                      "Audit Teams"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 text-sm mb-1", children: "Internal Audit" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Privacy Officers, Security Teams, Compliance Specialists" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 text-sm mb-1", children: "External Auditors" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Certified Public Accountants, ISO 27018 Specialists" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-purple-400 text-sm mb-1", children: "Subject Matter Experts" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Legal Counsel, Technical Architects, Business Analysts" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-purple-400" }),
                      "Audit Schedule"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-400 text-sm mb-1", children: "Jährlich" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Comprehensive ISO 27018 Certification Audit" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-orange-900/20 border border-orange-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-orange-400 text-sm mb-1", children: "Halbjährlich" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Privacy Controls Assessment & Risk Review" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-yellow-400 text-sm mb-1", children: "Quartalsweise" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Process Audits & Compliance Validation" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 text-sm mb-1", children: "Kontinuierlich" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Automated Monitoring & Real-time Assessment" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg border border-blue-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-indigo-400" }),
                "Advanced Audit Technologies"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-indigo-400 mb-3", children: "AI-Powered Analytics:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Automated Anomaly Detection in Controls" }),
                    /* @__PURE__ */ jsx("li", { children: "• Natural Language Processing für Evidence" }),
                    /* @__PURE__ */ jsx("li", { children: "• Predictive Risk Modeling" }),
                    /* @__PURE__ */ jsx("li", { children: "• Intelligent Finding Correlation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Machine Learning Control Optimization" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "Continuous Auditing:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Real-time Control Monitoring" }),
                    /* @__PURE__ */ jsx("li", { children: "• Automated Testing Frameworks" }),
                    /* @__PURE__ */ jsx("li", { children: "• Event-driven Audit Triggers" }),
                    /* @__PURE__ */ jsx("li", { children: "• Dynamic Risk Assessment Updates" }),
                    /* @__PURE__ */ jsx("li", { children: "• Instantaneous Compliance Reporting" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-3", children: "Blockchain Audit Trails:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Immutable Evidence Repository" }),
                    /* @__PURE__ */ jsx("li", { children: "• Cryptographic Audit Chain" }),
                    /* @__PURE__ */ jsx("li", { children: "• Decentralized Compliance Verification" }),
                    /* @__PURE__ */ jsx("li", { children: "• Smart Contract Audit Automation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Cross-organizational Audit Sharing" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "technical-measures",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-green-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Technische Maßnahmen" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO 27018 definiert umfassende technische Schutzmaßnahmen für PII in Cloud-Umgebungen. CSPs müssen moderne Verschlüsselungs-, Zugriffskontroll- und Monitoring-Technologien implementieren, um höchste Sicherheitsstandards zu gewährleisten." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5 text-green-400" }),
                    "Cryptographic Protection"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Encryption at Rest" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "AES-256 Verschlüsselung für alle gespeicherten PII mit Hardware Security Modules." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Database-level Encryption (TDE)" }),
                        /* @__PURE__ */ jsx("li", { children: "• File System Encryption (LUKS/BitLocker)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Application-level Field Encryption" }),
                        /* @__PURE__ */ jsx("li", { children: "• HSM-based Key Management" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Encryption in Transit" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "TLS 1.3+ für alle Datenübertragungen mit Perfect Forward Secrecy." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• API Gateway TLS Termination" }),
                        /* @__PURE__ */ jsx("li", { children: "• Inter-Service mTLS Communication" }),
                        /* @__PURE__ */ jsx("li", { children: "• VPN-encrypted Admin Access" }),
                        /* @__PURE__ */ jsx("li", { children: "• Certificate Pinning für Mobile Apps" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Encryption in Use" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-2", children: "Confidential Computing für PII-Verarbeitung in verschlüsselten Enclaves." }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Intel SGX Secure Enclaves" }),
                        /* @__PURE__ */ jsx("li", { children: "• AMD SEV Memory Protection" }),
                        /* @__PURE__ */ jsx("li", { children: "• Homomorphic Encryption für Analytics" }),
                        /* @__PURE__ */ jsx("li", { children: "• Secure Multi-party Computation" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(UserCheck, { className: "h-5 w-5 text-blue-400" }),
                    "Access Control Systems"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-indigo-900/20 border border-indigo-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-indigo-400 mb-2", children: "Zero Trust Architecture" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Identity-centric Security Model" }),
                        /* @__PURE__ */ jsx("li", { children: "• Continuous Verification Principles" }),
                        /* @__PURE__ */ jsx("li", { children: "• Least Privilege Access Enforcement" }),
                        /* @__PURE__ */ jsx("li", { children: "• Micro-segmentation Implementation" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-teal-900/20 border border-teal-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-teal-400 mb-2", children: "Multi-Factor Authentication" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Hardware Security Keys (FIDO2)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Biometric Authentication" }),
                        /* @__PURE__ */ jsx("li", { children: "• Risk-based Adaptive MFA" }),
                        /* @__PURE__ */ jsx("li", { children: "• Certificate-based Authentication" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-orange-400 mb-2", children: "Privileged Access Management" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Just-in-Time Access Provisioning" }),
                        /* @__PURE__ */ jsx("li", { children: "• Session Recording und Monitoring" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Access Reviews" }),
                        /* @__PURE__ */ jsx("li", { children: "• Break-glass Emergency Procedures" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Advanced Security Technologies" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Activity, { className: "h-6 w-6 text-red-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-3 text-center", children: "Behavioral Analytics" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• User Entity Behavior Analytics (UEBA)" }),
                    /* @__PURE__ */ jsx("li", { children: "• Anomaly Detection Algorithms" }),
                    /* @__PURE__ */ jsx("li", { children: "• Risk Scoring Models" }),
                    /* @__PURE__ */ jsx("li", { children: "• Automated Threat Response" }),
                    /* @__PURE__ */ jsx("li", { children: "• Machine Learning Baselines" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Database, { className: "h-6 w-6 text-yellow-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-3 text-center", children: "Data Loss Prevention" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Content-aware DLP Policies" }),
                    /* @__PURE__ */ jsx("li", { children: "• Endpoint Protection Agents" }),
                    /* @__PURE__ */ jsx("li", { children: "• Network Traffic Analysis" }),
                    /* @__PURE__ */ jsx("li", { children: "• Cloud App Security Brokers" }),
                    /* @__PURE__ */ jsx("li", { children: "• Optical Character Recognition" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Network, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-3 text-center", children: "Network Security" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Software-Defined Perimeters" }),
                    /* @__PURE__ */ jsx("li", { children: "• Next-Generation Firewalls" }),
                    /* @__PURE__ */ jsx("li", { children: "• Intrusion Detection Systems" }),
                    /* @__PURE__ */ jsx("li", { children: "• DNS Security und Filtering" }),
                    /* @__PURE__ */ jsx("li", { children: "• DDoS Protection Services" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Privacy-Enhancing Technologies" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-purple-400" }),
                    "Differential Privacy Implementation"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-purple-400 mb-3", children: "Core Principles:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Mathematical Privacy Guarantees" }),
                        /* @__PURE__ */ jsx("li", { children: "• Noise Injection Algorithms" }),
                        /* @__PURE__ */ jsx("li", { children: "• Privacy Budget Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Composition Theorem Application" }),
                        /* @__PURE__ */ jsx("li", { children: "• Query Sensitivity Analysis" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 mb-3", children: "Implementation:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Laplace Mechanism für Numeric Queries" }),
                        /* @__PURE__ */ jsx("li", { children: "• Exponential Mechanism für Non-numeric" }),
                        /* @__PURE__ */ jsx("li", { children: "• Local vs. Global Privacy Models" }),
                        /* @__PURE__ */ jsx("li", { children: "• Privacy Accounting Frameworks" }),
                        /* @__PURE__ */ jsx("li", { children: "• Real-time Privacy Loss Monitoring" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Code, { className: "h-5 w-5 text-green-400" }),
                    "Anonymization & Pseudonymization"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-3", children: "K-Anonymity:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Generalization Techniques" }),
                        /* @__PURE__ */ jsx("li", { children: "• Suppression Strategies" }),
                        /* @__PURE__ */ jsx("li", { children: "• Optimal K-value Selection" }),
                        /* @__PURE__ */ jsx("li", { children: "• Quality Metrics Assessment" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 mb-3", children: "L-Diversity:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Sensitive Attribute Protection" }),
                        /* @__PURE__ */ jsx("li", { children: "• Diversity Constraints" }),
                        /* @__PURE__ */ jsx("li", { children: "• Entropy-based Measures" }),
                        /* @__PURE__ */ jsx("li", { children: "• Recursive Partitioning" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-yellow-400 mb-3", children: "T-Closeness:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Distribution Similarity" }),
                        /* @__PURE__ */ jsx("li", { children: "• Earth Mover's Distance" }),
                        /* @__PURE__ */ jsx("li", { children: "• Hierarchical Distance Metrics" }),
                        /* @__PURE__ */ jsx("li", { children: "• Semantic Closeness Models" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-lg border border-green-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5 text-teal-400" }),
                "Emerging Technologies & Future Trends"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-teal-400 mb-3", children: "Quantum-Safe Cryptography:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Post-Quantum Cryptographic Algorithms" }),
                    /* @__PURE__ */ jsx("li", { children: "• Lattice-based Encryption Schemes" }),
                    /* @__PURE__ */ jsx("li", { children: "• Hash-based Digital Signatures" }),
                    /* @__PURE__ */ jsx("li", { children: "• Code-based und Multivariate Systems" }),
                    /* @__PURE__ */ jsx("li", { children: "• Hybrid Classical-Quantum Approaches" }),
                    /* @__PURE__ */ jsx("li", { children: "• Crypto-Agility Implementation Strategies" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-3", children: "AI-Powered Privacy:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Federated Learning für Distributed AI" }),
                    /* @__PURE__ */ jsx("li", { children: "• Secure Aggregation Protocols" }),
                    /* @__PURE__ */ jsx("li", { children: "• Privacy-Preserving Machine Learning" }),
                    /* @__PURE__ */ jsx("li", { children: "• Synthetic Data Generation Models" }),
                    /* @__PURE__ */ jsx("li", { children: "• Automated Privacy Policy Generation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Intelligent Consent Management" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "risk-assessment",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-orange-600/20 rounded-lg", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-orange-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Privacy Risk Assessment" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO 27018 verlangt systematische und kontinuierliche Privacy Risk Assessments. CSPs müssen strukturierte Risikobewertungsverfahren implementieren, die sowohl technische als auch rechtliche Aspekte des PII-Schutzes berücksichtigen." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-400" }),
                    "Risk Assessment Framework"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Data Flow Analysis:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Umfassende Kartierung aller PII-Datenströme mit Identifikation von Verarbeitungspunkten und Risikozonen." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Threat Modeling:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Systematische Identifikation von Privacy-Bedrohungen basierend auf STRIDE und PASTA-Methodologien." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Impact Assessment:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Bewertung potenzieller Auswirkungen auf Betroffene bei Datenschutzverletzungen oder Compliance-Verstößen." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Residual Risk Evaluation:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Kontinuierliche Bewertung verbleibender Risiken nach Implementierung von Schutzmaßnahmen." })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-blue-400" }),
                    "Risk Management Platform"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Automated Risk Detection" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• ML-based Pattern Recognition" }),
                        /* @__PURE__ */ jsx("li", { children: "• Anomaly Detection Engines" }),
                        /* @__PURE__ */ jsx("li", { children: "• Continuous Monitoring Systems" }),
                        /* @__PURE__ */ jsx("li", { children: "• Real-time Risk Scoring" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Risk Quantification" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Monte Carlo Simulations" }),
                        /* @__PURE__ */ jsx("li", { children: "• Value at Risk (VaR) Models" }),
                        /* @__PURE__ */ jsx("li", { children: "• Expected Loss Calculations" }),
                        /* @__PURE__ */ jsx("li", { children: "• ROI Analysis für Maßnahmen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Risk Treatment Planning" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Automated Mitigation Recommendations" }),
                        /* @__PURE__ */ jsx("li", { children: "• Cost-Benefit Analysis" }),
                        /* @__PURE__ */ jsx("li", { children: "• Implementation Roadmaps" }),
                        /* @__PURE__ */ jsx("li", { children: "• Treatment Effectiveness Tracking" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Risk Assessment Methodology" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-red-400" }),
                    "Privacy Risk Matrix"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
                    /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-600", children: [
                      /* @__PURE__ */ jsx("th", { className: "text-left p-3 text-gray-300 font-medium", children: "Impact Level" }),
                      /* @__PURE__ */ jsx("th", { className: "text-center p-3 text-gray-300 font-medium", children: "Niedrig (1)" }),
                      /* @__PURE__ */ jsx("th", { className: "text-center p-3 text-gray-300 font-medium", children: "Mittel (2)" }),
                      /* @__PURE__ */ jsx("th", { className: "text-center p-3 text-gray-300 font-medium", children: "Hoch (3)" }),
                      /* @__PURE__ */ jsx("th", { className: "text-center p-3 text-gray-300 font-medium", children: "Kritisch (4)" })
                    ] }) }),
                    /* @__PURE__ */ jsxs("tbody", { className: "text-sm", children: [
                      /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 font-medium text-white", children: "Sehr hoch (4)" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-900/20 text-yellow-400 border-yellow-700/50", children: "Mittel" }) }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-orange-900/20 text-orange-400 border-orange-700/50", children: "Hoch" }) }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-red-900/20 text-red-400 border-red-700/50", children: "Kritisch" }) }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-red-900/20 text-red-400 border-red-700/50", children: "Kritisch" }) })
                      ] }),
                      /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 font-medium text-white", children: "Hoch (3)" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-900/20 text-green-400 border-green-700/50", children: "Niedrig" }) }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-900/20 text-yellow-400 border-yellow-700/50", children: "Mittel" }) }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-orange-900/20 text-orange-400 border-orange-700/50", children: "Hoch" }) }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-red-900/20 text-red-400 border-red-700/50", children: "Kritisch" }) })
                      ] }),
                      /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 font-medium text-white", children: "Mittel (2)" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-900/20 text-green-400 border-green-700/50", children: "Niedrig" }) }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-900/20 text-green-400 border-green-700/50", children: "Niedrig" }) }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-900/20 text-yellow-400 border-yellow-700/50", children: "Mittel" }) }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-orange-900/20 text-orange-400 border-orange-700/50", children: "Hoch" }) })
                      ] }),
                      /* @__PURE__ */ jsxs("tr", { children: [
                        /* @__PURE__ */ jsx("td", { className: "p-3 font-medium text-white", children: "Niedrig (1)" }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-900/20 text-green-400 border-green-700/50", children: "Niedrig" }) }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-900/20 text-green-400 border-green-700/50", children: "Niedrig" }) }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-900/20 text-green-400 border-green-700/50", children: "Niedrig" }) }),
                        /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-900/20 text-yellow-400 border-yellow-700/50", children: "Mittel" }) })
                      ] })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-blue-400" }),
                      "Datenklassifizierung"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-400 text-sm mb-1", children: "Besonders sensible PII" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Gesundheitsdaten, biometrische Daten, Finanzdaten" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-orange-900/20 border border-orange-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-orange-400 text-sm mb-1", children: "Sensible PII" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Ausweisnummern, Kontaktdaten, Standortdaten" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-yellow-400 text-sm mb-1", children: "Standard PII" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Namen, E-Mail-Adressen, Präferenzen" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 text-sm mb-1", children: "Pseudonyme Daten" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Anonymisierte oder pseudonymisierte Datensätze" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-yellow-400" }),
                      "Bedrohungsquellen"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-400 text-sm mb-1", children: "Externe Angreifer" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Cyberkriminelle, Nationalstaaten, Hacktivisten" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-orange-900/20 border border-orange-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-orange-400 text-sm mb-1", children: "Insider Threats" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Böswillige oder nachlässige Mitarbeiter" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-yellow-400 text-sm mb-1", children: "Systemfehler" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Software-Bugs, Konfigurationsfehler" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 text-sm mb-1", children: "Externe Faktoren" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Naturkatastrophen, Infrastrukturausfälle" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-green-400" }),
                      "Risikoindikatoren"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-green-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Privacy Score" }),
                        /* @__PURE__ */ jsx("span", { className: "text-green-400 font-medium", children: "94/100" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-blue-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Kontrollen-Abdeckung" }),
                        /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "98.5%" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-purple-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Incident-Rate" }),
                        /* @__PURE__ */ jsx("span", { className: "text-purple-400 font-medium", children: "0.02%" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-2 bg-yellow-900/20 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Compliance-Level" }),
                        /* @__PURE__ */ jsx("span", { className: "text-yellow-400 font-medium", children: "96.8%" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg border border-orange-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-red-400" }),
                "AI-Enhanced Risk Assessment"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-3", children: "Predictive Analytics:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Machine Learning Risk Models" }),
                    /* @__PURE__ */ jsx("li", { children: "• Threat Intelligence Integration" }),
                    /* @__PURE__ */ jsx("li", { children: "• Behavioral Pattern Analysis" }),
                    /* @__PURE__ */ jsx("li", { children: "• Emerging Risk Identification" }),
                    /* @__PURE__ */ jsx("li", { children: "• Dynamic Risk Scoring Updates" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-orange-400 mb-3", children: "Automated Assessment:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Real-time Risk Calculation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Continuous Control Monitoring" }),
                    /* @__PURE__ */ jsx("li", { children: "• Automated Compliance Checking" }),
                    /* @__PURE__ */ jsx("li", { children: "• Impact Simulation Models" }),
                    /* @__PURE__ */ jsx("li", { children: "• Self-healing Risk Mitigation" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-3", children: "Decision Support:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Risk Treatment Optimization" }),
                    /* @__PURE__ */ jsx("li", { children: "• Resource Allocation Guidance" }),
                    /* @__PURE__ */ jsx("li", { children: "• Investment Priority Ranking" }),
                    /* @__PURE__ */ jsx("li", { children: "• Scenario Planning Tools" }),
                    /* @__PURE__ */ jsx("li", { children: "• Executive Risk Dashboards" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "implementation",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Route, { className: "h-6 w-6 text-purple-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Implementierungsroadmap" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Die erfolgreiche Implementierung von ISO 27018 erfordert eine strukturierte, phasenweise Herangehensweise. Diese Roadmap bietet eine praxiserprobte Anleitung für die systematische Umsetzung aller Anforderungen." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-bold", children: "1" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white", children: "Assessment & Planung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Dauer: 4-6 Wochen" })
                    ] }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-blue-900/20 text-blue-400 border-blue-700/50 ml-auto", children: "Foundation" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "Gap Analysis:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Current State Assessment" }),
                        /* @__PURE__ */ jsx("li", { children: "• ISO 27018 Requirements Mapping" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance Gap Identification" }),
                        /* @__PURE__ */ jsx("li", { children: "• Resource Requirements Analysis" }),
                        /* @__PURE__ */ jsx("li", { children: "• Risk Assessment Baseline" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-3", children: "Project Setup:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Stakeholder Identification" }),
                        /* @__PURE__ */ jsx("li", { children: "• Project Governance Structure" }),
                        /* @__PURE__ */ jsx("li", { children: "• Budget und Timeline Planning" }),
                        /* @__PURE__ */ jsx("li", { children: "• Communication Strategy" }),
                        /* @__PURE__ */ jsx("li", { children: "• Success Metrics Definition" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-3", children: "Documentation:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Data Flow Mapping" }),
                        /* @__PURE__ */ jsx("li", { children: "• Current Policy Review" }),
                        /* @__PURE__ */ jsx("li", { children: "• Asset Inventory Creation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Process Documentation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Baseline Metrics Collection" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-green-400 font-bold", children: "2" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white", children: "Policy & Governance" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Dauer: 6-8 Wochen" })
                    ] }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-green-900/20 text-green-400 border-green-700/50 ml-auto", children: "Framework" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-3", children: "Policy Development:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Privacy Policy Framework" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Processing Procedures" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident Response Playbooks" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vendor Management Policies" }),
                        /* @__PURE__ */ jsx("li", { children: "• Employee Training Protocols" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "Governance Structure:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Data Protection Officer Appointment" }),
                        /* @__PURE__ */ jsx("li", { children: "• Privacy Steering Committee" }),
                        /* @__PURE__ */ jsx("li", { children: "• Roles und Responsibilities Matrix" }),
                        /* @__PURE__ */ jsx("li", { children: "• Escalation Procedures" }),
                        /* @__PURE__ */ jsx("li", { children: "• Decision-Making Frameworks" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-3", children: "Compliance Framework:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Control Catalog Development" }),
                        /* @__PURE__ */ jsx("li", { children: "• Monitoring Procedures" }),
                        /* @__PURE__ */ jsx("li", { children: "• Audit Planning Framework" }),
                        /* @__PURE__ */ jsx("li", { children: "• Exception Management Process" }),
                        /* @__PURE__ */ jsx("li", { children: "• Continuous Improvement Cycle" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-purple-400 font-bold", children: "3" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white", children: "Technical Implementation" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Dauer: 12-16 Wochen" })
                    ] }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-purple-900/20 text-purple-400 border-purple-700/50 ml-auto", children: "Technology" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-3", children: "Security Controls:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Encryption Implementation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Access Control Systems" }),
                        /* @__PURE__ */ jsx("li", { children: "• Network Security Measures" }),
                        /* @__PURE__ */ jsx("li", { children: "• Monitoring und Logging" }),
                        /* @__PURE__ */ jsx("li", { children: "• Backup und Recovery" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-orange-400 mb-3", children: "Privacy Technologies:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Data Classification Tools" }),
                        /* @__PURE__ */ jsx("li", { children: "• Anonymization Solutions" }),
                        /* @__PURE__ */ jsx("li", { children: "• Consent Management Platform" }),
                        /* @__PURE__ */ jsx("li", { children: "• Rights Management System" }),
                        /* @__PURE__ */ jsx("li", { children: "• Privacy-Enhancing Technologies" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-teal-400 mb-3", children: "Integration & Testing:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• System Integration Testing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Security Testing Program" }),
                        /* @__PURE__ */ jsx("li", { children: "• Privacy Impact Assessments" }),
                        /* @__PURE__ */ jsx("li", { children: "• Performance Optimization" }),
                        /* @__PURE__ */ jsx("li", { children: "• User Acceptance Testing" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-yellow-400 font-bold", children: "4" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white", children: "Training & Awareness" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Dauer: 4-6 Wochen" })
                    ] }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-900/20 text-yellow-400 border-yellow-700/50 ml-auto", children: "People" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-3", children: "Training Programme:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• General Privacy Awareness" }),
                        /* @__PURE__ */ jsx("li", { children: "• Role-specific Training" }),
                        /* @__PURE__ */ jsx("li", { children: "• Technical Training Sessions" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident Response Drills" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regular Refresher Courses" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-3", children: "Communication:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Launch Communication Strategy" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regular Updates und Newsletters" }),
                        /* @__PURE__ */ jsx("li", { children: "• Success Stories Sharing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Feedback Collection Mechanisms" }),
                        /* @__PURE__ */ jsx("li", { children: "• Continuous Engagement Activities" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "Competency Building:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Certification Programs" }),
                        /* @__PURE__ */ jsx("li", { children: "• Expert Network Development" }),
                        /* @__PURE__ */ jsx("li", { children: "• Knowledge Management Systems" }),
                        /* @__PURE__ */ jsx("li", { children: "• Communities of Practice" }),
                        /* @__PURE__ */ jsx("li", { children: "• External Training Partnerships" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-red-400 font-bold", children: "5" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white", children: "Monitoring & Optimization" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: "Kontinuierlich" })
                    ] }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-red-900/20 text-red-400 border-red-700/50 ml-auto", children: "Operations" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-3", children: "Continuous Monitoring:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Real-time Compliance Dashboards" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Control Testing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Performance Metrics Tracking" }),
                        /* @__PURE__ */ jsx("li", { children: "• Risk Indicator Monitoring" }),
                        /* @__PURE__ */ jsx("li", { children: "• Trend Analysis und Reporting" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-orange-400 mb-3", children: "Process Optimization:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Efficiency Improvement Initiatives" }),
                        /* @__PURE__ */ jsx("li", { children: "• Process Automation Opportunities" }),
                        /* @__PURE__ */ jsx("li", { children: "• Cost Optimization Measures" }),
                        /* @__PURE__ */ jsx("li", { children: "• Technology Upgrade Planning" }),
                        /* @__PURE__ */ jsx("li", { children: "• Best Practice Integration" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-3", children: "Continuous Improvement:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Regular Assessment Cycles" }),
                        /* @__PURE__ */ jsx("li", { children: "• Feedback Integration Processes" }),
                        /* @__PURE__ */ jsx("li", { children: "• Innovation und R&D Programs" }),
                        /* @__PURE__ */ jsx("li", { children: "• Industry Benchmark Comparisons" }),
                        /* @__PURE__ */ jsx("li", { children: "• Strategic Planning Updates" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-lg border border-purple-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-indigo-400" }),
                "Success Factors & Best Practices"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-indigo-400 mb-3", children: "Critical Success Factors:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Executive Leadership und Commitment" }),
                    /* @__PURE__ */ jsx("li", { children: "• Cross-functional Team Collaboration" }),
                    /* @__PURE__ */ jsx("li", { children: "• Adequate Resource Allocation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Clear Communication und Change Management" }),
                    /* @__PURE__ */ jsx("li", { children: "• Phased Implementation Approach" }),
                    /* @__PURE__ */ jsx("li", { children: "• Continuous Stakeholder Engagement" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-3", children: "Common Pitfalls to Avoid:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Underestimating Implementation Complexity" }),
                    /* @__PURE__ */ jsx("li", { children: "• Insufficient Training und Awareness" }),
                    /* @__PURE__ */ jsx("li", { children: "• Lack of Integration with Existing Systems" }),
                    /* @__PURE__ */ jsx("li", { children: "• Inadequate Testing und Validation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Poor Documentation und Knowledge Transfer" }),
                    /* @__PURE__ */ jsx("li", { children: "• Neglecting Continuous Improvement" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "certification",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-gold-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-yellow-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Zertifizierungsprozess" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Die ISO 27018-Zertifizierung ist ein formaler Nachweis der Compliance mit den internationalen Standards für PII-Schutz in Public Clouds. Der Zertifizierungsprozess erfordert umfassende Vorbereitung und professionelle Auditierung." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-yellow-400" }),
                    "Zertifizierungsvoraussetzungen"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "ISO 27001 Basis-Zertifizierung:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Gültige ISO 27001-Zertifizierung als Grundlage für die ISO 27018-Erweiterung erforderlich." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Scope Definition:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Klare Abgrenzung der zu zertifizierenden Cloud-Services und PII-Verarbeitungsprozesse." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Dokumentationsreife:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Vollständige und aktuelle Dokumentation aller Privacy-Kontrollen und -Verfahren." })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: "Operational Readiness:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: "Nachweis der operativen Wirksamkeit aller implementierten Kontrollen über mindestens 3 Monate." })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Search, { className: "h-5 w-5 text-blue-400" }),
                    "Audit-Vorbereitung"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Pre-Assessment" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Gap Analysis durchführen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Control Testing validieren" }),
                        /* @__PURE__ */ jsx("li", { children: "• Documentation Review" }),
                        /* @__PURE__ */ jsx("li", { children: "• Internal Audit abschließen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Evidence Collection" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Audit Evidence Repository" }),
                        /* @__PURE__ */ jsx("li", { children: "• Process Documentation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Control Effectiveness Evidence" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident und Exception Records" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Team Preparation" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Audit Response Team Training" }),
                        /* @__PURE__ */ jsx("li", { children: "• Interview Preparation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Technical Demonstration Setup" }),
                        /* @__PURE__ */ jsx("li", { children: "• Communication Protocol" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Certification Audit Process" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx("div", { className: "bg-slate-700/30 rounded-lg p-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-blue-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Stage 1: Documentation Review" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Remote oder On-site Review der Dokumentation und Policies" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-blue-900/20 text-blue-400 text-xs", children: "2-3 Tage" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6 text-green-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Stage 2: Implementation Audit" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Detailprüfung der implementierten Kontrollen und Prozesse" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-green-900/20 text-green-400 text-xs", children: "3-5 Tage" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-yellow-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Finding Resolution" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Bearbeitung von Audit-Findings und Corrective Actions" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-900/20 text-yellow-400 text-xs", children: "2-4 Wochen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-purple-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Certificate Issuance" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Finale Bewertung und Zertifikatsausstellung" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-purple-900/20 text-purple-400 text-xs", children: "1-2 Wochen" })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-green-400" }),
                      "Accredited Bodies"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 text-sm mb-1", children: "DEKRA" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Deutsche Akkreditierungsstelle für ISO 27018" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 text-sm mb-1", children: "TÜV" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Technischer Überwachungsverein für Cloud-Zertifizierungen" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-purple-400 text-sm mb-1", children: "BSI" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Bundesamt für Sicherheit in der Informationstechnik" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-blue-400" }),
                      "Certificate Lifecycle"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 text-sm mb-1", children: "Initial Certificate" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "3 Jahre Gültigkeit mit jährlichen Surveillance Audits" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 text-sm mb-1", children: "Surveillance Audits" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Jährliche Überprüfungen zur Aufrechterhaltung" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-purple-400 text-sm mb-1", children: "Recertification" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Vollständige Re-Zertifizierung alle 3 Jahre" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Euro, { className: "h-5 w-5 text-yellow-400" }),
                      "Investment & ROI"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-400 text-sm mb-1", children: "Initial Costs" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "€50,000 - €200,000 für Implementierung und Zertifizierung" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-yellow-400 text-sm mb-1", children: "Annual Maintenance" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "€20,000 - €50,000 für Surveillance und Maintenance" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 text-sm mb-1", children: "Business Value" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Competitive Advantage, Trust, Compliance, Risk Mitigation" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg border border-yellow-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-orange-400" }),
                "Post-Certification Excellence"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-orange-400 mb-3", children: "Continuous Compliance:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Automated Compliance Monitoring" }),
                    /* @__PURE__ */ jsx("li", { children: "• Regular Internal Assessments" }),
                    /* @__PURE__ */ jsx("li", { children: "• Proactive Risk Management" }),
                    /* @__PURE__ */ jsx("li", { children: "• Continuous Improvement Programs" }),
                    /* @__PURE__ */ jsx("li", { children: "• Industry Best Practice Integration" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-3", children: "Market Positioning:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Competitive Differentiation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Customer Trust Enhancement" }),
                    /* @__PURE__ */ jsx("li", { children: "• Premium Service Positioning" }),
                    /* @__PURE__ */ jsx("li", { children: "• Global Market Access" }),
                    /* @__PURE__ */ jsx("li", { children: "• Partner Ecosystem Expansion" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-3", children: "Future Roadmap:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-2", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Multi-Standard Integration (SOC 2, PCI DSS)" }),
                    /* @__PURE__ */ jsx("li", { children: "• Advanced Privacy Technologies" }),
                    /* @__PURE__ */ jsx("li", { children: "• AI und Machine Learning Integration" }),
                    /* @__PURE__ */ jsx("li", { children: "• Quantum-Safe Cryptography Preparation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Sustainability und ESG Integration" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Iso27018Guide as default
};
