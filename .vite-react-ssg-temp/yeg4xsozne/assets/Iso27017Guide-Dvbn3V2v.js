import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { List, Eye, Target, Cloud, Users, Settings, Lock, AlertTriangle, BarChart3, Activity, Building2, RotateCcw, GraduationCap, Search, Route, Award, CheckCircle, Shield, Globe, X, Server, Network, FileText, ArrowRight, CheckCircle2, Circle, Info, Database, AlertCircle, Upload, Share2, Trash2, Scale, Lightbulb, Star, Clock, Bell, PieChart, Monitor, TrendingUp, Play, BookOpen, Mail, Euro, Calendar } from "lucide-react";
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
const Iso27017Guide = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [completedTasks, setCompletedTasks] = useState(/* @__PURE__ */ new Set());
  const [readingProgress, setReadingProgress] = useState(0);
  const [expandedSections, setExpandedSections] = useState(/* @__PURE__ */ new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const containerRef = useRef(null);
  const sections = [
    { id: "overview", title: "Überblick", icon: Eye, readTime: "8 Min" },
    { id: "scope", title: "Anwendungsbereich", icon: Target, readTime: "10 Min" },
    { id: "cloud-models", title: "Cloud-Modelle", icon: Cloud, readTime: "12 Min" },
    { id: "shared-responsibility", title: "Shared Responsibility", icon: Users, readTime: "15 Min" },
    { id: "cloud-controls", title: "Cloud-Controls", icon: Settings, readTime: "25 Min" },
    { id: "data-protection", title: "Datenschutz in der Cloud", icon: Lock, readTime: "18 Min" },
    { id: "incident-management", title: "Incident Management", icon: AlertTriangle, readTime: "16 Min" },
    { id: "risk-assessment", title: "Risk Assessment", icon: BarChart3, readTime: "20 Min" },
    { id: "compliance-monitoring", title: "Compliance Monitoring", icon: Activity, readTime: "18 Min" },
    { id: "vendor-management", title: "Vendor Management", icon: Building2, readTime: "22 Min" },
    { id: "business-continuity", title: "Business Continuity", icon: RotateCcw, readTime: "18 Min" },
    { id: "training-awareness", title: "Training & Awareness", icon: GraduationCap, readTime: "16 Min" },
    { id: "audit-assessment", title: "Audit & Assessment", icon: Search, readTime: "20 Min" },
    { id: "implementation", title: "Implementierungsroadmap", icon: Route, readTime: "30 Min" },
    { id: "certification", title: "Zertifizierungsprozess", icon: Award, readTime: "20 Min" }
  ];
  const toggleTaskCompletion = (taskId) => {
    setCompletedTasks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections2 = document.querySelectorAll("[data-section]");
      const scrollPosition = window.scrollY + 100;
      sections2.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.getAttribute("data-section"));
        }
      });
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight * 100;
      setReadingProgress(Math.min(progress, 100));
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
        let start = 0;
        const end = parseInt(value);
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-500 z-50",
        style: { scaleX }
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => setSidebarOpen(!sidebarOpen),
        className: "fixed top-20 left-4 z-40 lg:hidden bg-sky-600 hover:bg-sky-700",
        size: "sm",
        children: /* @__PURE__ */ jsx(List, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: `fixed left-0 top-16 h-screen w-80 bg-slate-800/95 backdrop-blur-sm border-r border-slate-700 z-30 overflow-y-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300`,
        children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white mb-6", children: "ISO 27017 Leitfaden" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: sections.map((section) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                scrollToSection(section.id);
                setSidebarOpen(false);
              },
              className: `w-full text-left p-3 rounded-lg transition-all duration-200 group ${activeSection === section.id ? "bg-sky-600 text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white"}`,
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(section.icon, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium", children: section.title }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs opacity-70", children: section.readTime })
                ] }),
                activeSection === section.id && /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400" })
              ] })
            },
            section.id
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-slate-700 rounded-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-300", children: "Lesefortschritt" }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm text-sky-400", children: [
                Math.round(readingProgress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx(Progress, { value: readingProgress, className: "h-2" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "lg:ml-80", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-8", ref: containerRef, children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          "data-section": "overview",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-sky-600/20 text-sky-400 px-4 py-2 rounded-full mb-6", children: [
              /* @__PURE__ */ jsx(Cloud, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "ISO/IEC 27017:2015" })
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-bold mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-sky-400 via-blue-400 to-sky-400 bg-clip-text text-transparent", children: "ISO 27017" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-white text-4xl md:text-5xl", children: "Cloud Security Guide" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed", children: "Umfassender Leitfaden zu ISO 27017 - Informationssicherheitskontrollen für Cloud-Computing-Services basierend auf ISO 27002" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: [
              /* @__PURE__ */ jsxs(Badge, { className: "bg-sky-600/20 text-sky-400 px-4 py-2", children: [
                /* @__PURE__ */ jsx(Cloud, { className: "h-4 w-4 mr-2" }),
                "Cloud Security Controls"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-600/20 text-blue-400 px-4 py-2", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 mr-2" }),
                "37 Zusätzliche Controls"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-600/20 text-purple-400 px-4 py-2", children: [
                /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 mr-2" }),
                "International Standard"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "bg-slate-800/50 p-6 rounded-xl border border-slate-700",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-sky-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: "37" }) }),
                    /* @__PURE__ */ jsx("div", { className: "text-gray-300", children: "Cloud-spezifische Controls" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "bg-slate-800/50 p-6 rounded-xl border border-slate-700",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: "7" }) }),
                    /* @__PURE__ */ jsx("div", { className: "text-gray-300", children: "Neue Control-Familien" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "bg-slate-800/50 p-6 rounded-xl border border-slate-700",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-purple-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: "3" }) }),
                    /* @__PURE__ */ jsx("div", { className: "text-gray-300", children: "Service-Modelle" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "bg-slate-800/50 p-6 rounded-xl border border-slate-700",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-green-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: "4" }) }),
                    /* @__PURE__ */ jsx("div", { className: "text-gray-300", children: "Deployment-Modelle" })
                  ]
                }
              )
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
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-sky-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Eye, { className: "h-6 w-6 text-sky-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Überblick" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Was ist ISO 27017?" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO/IEC 27017:2015 ist ein internationaler Standard, der Leitlinien für Informationssicherheitskontrollen speziell für Cloud-Computing-Services bereitstellt. Er erweitert ISO 27002 um cloud-spezifische Kontrollen." }),
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: "Hauptziele:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                    "Cloud-spezifische Sicherheitskontrollen definieren"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                    "Shared Responsibility Model klären"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                    "Vertrauen in Cloud-Services stärken"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                    "Compliance in Cloud-Umgebungen ermöglichen"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Beziehung zu anderen Standards" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-700/50 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "ISO 27001/27002" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Baut auf den Grundlagen auf und erweitert diese um Cloud-Kontrollen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-700/50 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-purple-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-400", children: "ISO 27018" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Komplementär für Datenschutz in öffentlichen Cloud-Services" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-700/50 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-green-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-400", children: "NIST Cybersecurity Framework" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Harmoniert mit US-amerikanischen Cloud-Sicherheitsstandards" })
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
          "data-section": "scope",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Target, { className: "h-6 w-6 text-green-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Anwendungsbereich" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Zielgruppen" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Cloud, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "Cloud Service Provider" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "IaaS-, PaaS- und SaaS-Anbieter, die ihre Sicherheitskontrollen implementieren" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-green-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-400", children: "Cloud Service Customer" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Unternehmen, die Cloud-Services nutzen und ihre Verantwortlichkeiten verstehen müssen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-purple-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-400", children: "Auditoren & Assessoren" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Prüfer, die Cloud-Sicherheitskontrollen bewerten und zertifizieren" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Nicht im Scope" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-gray-300", children: [
                    /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Technische Implementierungsdetails" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-gray-300", children: [
                    /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Produkt- oder anbieterspezifische Lösungen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-gray-300", children: [
                    /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Business Continuity Management (separate Standards)" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-gray-300", children: [
                    /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Rechtliche und regulatorische Anforderungen" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-400 mb-2", children: "Wichtiger Hinweis" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "ISO 27017 ist ein Leitfaden und keine zertifizierbare Norm. Zertifizierungen erfolgen gegen ISO 27001 mit ISO 27017 als Referenz." })
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
          "data-section": "cloud-models",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Cloud, { className: "h-6 w-6 text-blue-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Cloud-Modelle" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Service-Modelle" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    whileHover: { scale: 1.02 },
                    className: "bg-slate-700/30 rounded-lg p-6 border border-slate-600",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                        /* @__PURE__ */ jsx("div", { className: "p-2 bg-red-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Server, { className: "h-5 w-5 text-red-400" }) }),
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: "Infrastructure as a Service (IaaS)" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4", children: "Bereitstellung von IT-Infrastruktur wie VMs, Storage, Netzwerke" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-red-400 font-medium", children: "ANBIETER-VERANTWORTUNG:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Physische Infrastruktur" }),
                            /* @__PURE__ */ jsx("li", { children: "• Hypervisor-Sicherheit" }),
                            /* @__PURE__ */ jsx("li", { children: "• Netzwerk-Isolierung" }),
                            /* @__PURE__ */ jsx("li", { children: "• Storage-Verschlüsselung" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-400 font-medium", children: "KUNDEN-VERANTWORTUNG:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Betriebssystem-Security" }),
                            /* @__PURE__ */ jsx("li", { children: "• Anwendungssicherheit" }),
                            /* @__PURE__ */ jsx("li", { children: "• Daten-Klassifizierung" }),
                            /* @__PURE__ */ jsx("li", { children: "• Access Management" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "mt-4 pt-4 border-t border-slate-600", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Beispiele:" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                          /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/20 text-red-300 text-xs", children: "AWS EC2" }),
                          /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/20 text-red-300 text-xs", children: "Azure VMs" })
                        ] })
                      ] }) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    whileHover: { scale: 1.02 },
                    className: "bg-slate-700/30 rounded-lg p-6 border border-slate-600",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                        /* @__PURE__ */ jsx("div", { className: "p-2 bg-orange-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-orange-400" }) }),
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: "Platform as a Service (PaaS)" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4", children: "Entwicklungsplattformen und Runtime-Umgebungen" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-orange-400 font-medium", children: "ANBIETER-VERANTWORTUNG:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Runtime-Umgebung" }),
                            /* @__PURE__ */ jsx("li", { children: "• Middleware-Sicherheit" }),
                            /* @__PURE__ */ jsx("li", { children: "• Entwicklungstools" }),
                            /* @__PURE__ */ jsx("li", { children: "• Plattform-Updates" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-400 font-medium", children: "KUNDEN-VERANTWORTUNG:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Anwendungscode" }),
                            /* @__PURE__ */ jsx("li", { children: "• Daten-Management" }),
                            /* @__PURE__ */ jsx("li", { children: "• User Access Controls" }),
                            /* @__PURE__ */ jsx("li", { children: "• Konfigurationssicherheit" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "mt-4 pt-4 border-t border-slate-600", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Beispiele:" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                          /* @__PURE__ */ jsx(Badge, { className: "bg-orange-500/20 text-orange-300 text-xs", children: "Heroku" }),
                          /* @__PURE__ */ jsx(Badge, { className: "bg-orange-500/20 text-orange-300 text-xs", children: "Google App Engine" })
                        ] })
                      ] }) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    whileHover: { scale: 1.02 },
                    className: "bg-slate-700/30 rounded-lg p-6 border border-slate-600",
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                        /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-green-400" }) }),
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: "Software as a Service (SaaS)" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-4", children: "Vollständige Anwendungen als Service" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-green-400 font-medium", children: "ANBIETER-VERANTWORTUNG:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Gesamte Anwendung" }),
                            /* @__PURE__ */ jsx("li", { children: "• Daten-Residency" }),
                            /* @__PURE__ */ jsx("li", { children: "• Backup & Recovery" }),
                            /* @__PURE__ */ jsx("li", { children: "• Patch-Management" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-400 font-medium", children: "KUNDEN-VERANTWORTUNG:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• User Account Management" }),
                            /* @__PURE__ */ jsx("li", { children: "• Zugriffskontrollen" }),
                            /* @__PURE__ */ jsx("li", { children: "• Daten-Eingabe" }),
                            /* @__PURE__ */ jsx("li", { children: "• Compliance-Konfiguration" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "mt-4 pt-4 border-t border-slate-600", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Beispiele:" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex gap-1", children: [
                          /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300 text-xs", children: "Office 365" }),
                          /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300 text-xs", children: "Salesforce" })
                        ] })
                      ] }) })
                    ]
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Deployment-Modelle" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-blue-400" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: "Public Cloud" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Öffentlich verfügbare Cloud-Services" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "Vorteile:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 mt-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Kosteneffizient" }),
                        /* @__PURE__ */ jsx("li", { children: "• Hohe Skalierbarkeit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schnelle Bereitstellung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "Risiken:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 mt-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Geteilte Ressourcen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance-Herausforderungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vendor Lock-in" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5 text-purple-400" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: "Private Cloud" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Dedizierte Cloud-Infrastruktur" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "Vorteile:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 mt-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Vollständige Kontrolle" }),
                        /* @__PURE__ */ jsx("li", { children: "• Höhere Sicherheit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance-konform" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "Nachteile:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 mt-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Höhere Kosten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Begrenzte Skalierbarkeit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Wartungsaufwand" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsx(Network, { className: "h-5 w-5 text-orange-400" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: "Hybrid Cloud" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Kombination aus Public und Private" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "Vorteile:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 mt-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Flexibilität" }),
                        /* @__PURE__ */ jsx("li", { children: "• Optimierte Kosten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Risiko-Diversifizierung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-red-400", children: "Herausforderungen:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 mt-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Komplexe Integration" }),
                        /* @__PURE__ */ jsx("li", { children: "• Einheitliche Governance" }),
                        /* @__PURE__ */ jsx("li", { children: "• Daten-Synchronisation" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-green-400" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: "Community Cloud" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Geteilte Infrastruktur für spezifische Gruppen" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "Anwendung:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 mt-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Behörden-Clouds" }),
                        /* @__PURE__ */ jsx("li", { children: "• Branchen-Clouds" }),
                        /* @__PURE__ */ jsx("li", { children: "• Forschungs-Clouds" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-blue-400", children: "Charakteristika:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 mt-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Gemeinsame Compliance" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ähnliche Sicherheitsanforderungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kostenteilung" })
                      ] })
                    ] })
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
          "data-section": "shared-responsibility",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-purple-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Shared Responsibility Model" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Das Shared Responsibility Model ist ein fundamentales Konzept in ISO 27017, das klar definiert, welche Sicherheitsverantwortlichkeiten beim Cloud-Anbieter liegen und welche beim Kunden verbleiben." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Cloud, { className: "h-5 w-5 text-blue-400" }),
                    "Cloud Service Provider (CSP)"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Kernverantwortlichkeiten:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Sicherheit der Cloud-Infrastruktur"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Physische Sicherheit der Rechenzentren"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Netzwerk- und Host-Level-Schutz"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Service-Verfügbarkeit und -Resilienz"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Compliance mit relevanten Standards"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 mb-2", children: "Transparenzpflicht:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "CSPs müssen ihre Sicherheitsmaßnahmen dokumentieren und dem Kunden zugänglich machen (Audit-Berichte, Zertifizierungen, SLAs)." })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-green-400" }),
                    "Cloud Service Customer (CSC)"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Kernverantwortlichkeiten:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Sicherheit in der Cloud (Daten, Anwendungen)"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Identity & Access Management"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Konfigurationssicherheit"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Datenklassifizierung und -schutz"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Incident Response und Business Continuity"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-2", children: "Due Diligence:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Kunden müssen CSP-Sicherheitsmaßnahmen bewerten und ihre eigenen Schutzmaßnahmen entsprechend anpassen." })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Verantwortungsmatrix nach Service-Modell" }),
              /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border border-slate-600 rounded-lg overflow-hidden", children: [
                /* @__PURE__ */ jsx("thead", { className: "bg-slate-700", children: /* @__PURE__ */ jsxs("tr", { children: [
                  /* @__PURE__ */ jsx("th", { className: "p-4 text-left text-white font-medium border-b border-slate-600", children: "Sicherheitsbereich" }),
                  /* @__PURE__ */ jsx("th", { className: "p-4 text-center text-white font-medium border-b border-l border-slate-600", children: "IaaS" }),
                  /* @__PURE__ */ jsx("th", { className: "p-4 text-center text-white font-medium border-b border-l border-slate-600", children: "PaaS" }),
                  /* @__PURE__ */ jsx("th", { className: "p-4 text-center text-white font-medium border-b border-l border-slate-600", children: "SaaS" })
                ] }) }),
                /* @__PURE__ */ jsxs("tbody", { className: "bg-slate-800/50", children: [
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-300 border-b border-slate-600", children: "Physische Sicherheit" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-300 border-b border-slate-600", children: "Netzwerk-Infrastruktur" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-300 border-b border-slate-600", children: "Host-Betriebssystem" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-300 border-b border-slate-600", children: "Hypervisor" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-300 border-b border-slate-600", children: "Gast-Betriebssystem" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "CSC" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-300 border-b border-slate-600", children: "Runtime-Umgebung" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "CSC" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-300 border-b border-slate-600", children: "Anwendungen" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "CSC" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "CSC" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-300 border-b border-slate-600", children: "Daten" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "CSC" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "CSC" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "CSC" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-300 border-b border-slate-600", children: "Identity & Access Management" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "Geteilt" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "Geteilt" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-b border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "Geteilt" }) })
                  ] }),
                  /* @__PURE__ */ jsxs("tr", { children: [
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-gray-300", children: "Compliance & Governance" }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "Geteilt" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "Geteilt" }) }),
                    /* @__PURE__ */ jsx("td", { className: "p-4 text-center border-l border-slate-600", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "Geteilt" }) })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-4 text-sm", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "CSP" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Cloud Service Provider" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "CSC" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Cloud Service Customer" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "Geteilt" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Geteilte Verantwortung" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Praktische Umsetzung" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-white mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-400" }),
                    "Dokumentation & Kommunikation"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                      "Klare RACI-Matrix für alle Sicherheitsbereiche"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                      "Regelmäßige Reviews der Verantwortlichkeiten"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                      "Schnittstellen-Dokumentation für geteilte Bereiche"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                      "Incident-Eskalationsverfahren"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-white mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400" }),
                    "Kontrolle & Überwachung"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Kontinuierliches Monitoring der Schnittstellen"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Regelmäßige Audits und Assessments"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "SLA-Monitoring und -Reporting"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Third-Party Risk Management"
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg p-6 border border-orange-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-400" }),
                "Häufige Missverständnisse"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-2", children: "❌ Falsche Annahmen:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsx("li", { children: '• "Der CSP ist für alles verantwortlich"' }),
                    /* @__PURE__ */ jsx("li", { children: '• "Compliance wird automatisch übertragen"' }),
                    /* @__PURE__ */ jsx("li", { children: '• "Sicherheit ist nur CSP-Sache"' }),
                    /* @__PURE__ */ jsx("li", { children: '• "Geteilte Bereiche sind CSP-Verantwortung"' })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "✅ Korrekte Sichtweise:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Sicherheit ist eine gemeinsame Verantwortung" }),
                    /* @__PURE__ */ jsx("li", { children: "• Kunden müssen Due Diligence ausüben" }),
                    /* @__PURE__ */ jsx("li", { children: "• Klare Abgrenzung ist essentiell" }),
                    /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Kommunikation erforderlich" })
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
          "data-section": "cloud-controls",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-orange-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Settings, { className: "h-6 w-6 text-orange-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Cloud-Controls" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "ISO 27017 definiert 37 zusätzliche Sicherheitskontrollen, die spezifisch für Cloud-Computing-Umgebungen entwickelt wurden. Diese ergänzen die bestehenden ISO 27002 Controls um cloud-spezifische Anforderungen." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-orange-400 mb-2", children: "37" }),
                  /* @__PURE__ */ jsx("div", { className: "text-gray-300", children: "Zusätzliche Controls" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-400 mb-2", children: "7" }),
                  /* @__PURE__ */ jsx("div", { className: "text-gray-300", children: "Neue Control-Familien" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-green-400 mb-2", children: "14" }),
                  /* @__PURE__ */ jsx("div", { className: "text-gray-300", children: "Erweiterte Controls" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-400" }),
                  "A.5 - Informationssicherheitsrichtlinien"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "A.5.1.1 - Richtlinien für Cloud-Services" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Spezielle Sicherheitsrichtlinien für die Nutzung von Cloud-Computing-Services." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-400 font-medium", children: "IMPLEMENTATION:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Cloud-spezifische Sicherheitsrichtlinie entwickeln" }),
                          /* @__PURE__ */ jsx("li", { children: "• Rollenbasierte Zuständigkeiten definieren" }),
                          /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Überprüfung und Aktualisierung" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-400 font-medium", children: "EVIDENCE:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Dokumentierte Cloud-Sicherheitsrichtlinie" }),
                          /* @__PURE__ */ jsx("li", { children: "• Genehmigungsprotokoll der Geschäftsleitung" }),
                          /* @__PURE__ */ jsx("li", { children: "• Schulungsnachweise für Mitarbeiter" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-t border-slate-600", children: /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => toggleTaskCompletion("A.5.1.1"),
                        className: "flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors",
                        children: [
                          completedTasks.has("A.5.1.1") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" }),
                          "Als implementiert markieren"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "A.5.1.2 - Review Cloud-Service-Vereinbarungen" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Regelmäßige Überprüfung von Cloud-Service-Vereinbarungen auf Sicherheitsaspekte." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-400 font-medium", children: "IMPLEMENTATION:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• SLA-Review-Prozess etablieren" }),
                          /* @__PURE__ */ jsx("li", { children: "• Sicherheitsanforderungen validieren" }),
                          /* @__PURE__ */ jsx("li", { children: "• Vertragsänderungen bewerten" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-400 font-medium", children: "EVIDENCE:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Review-Protokolle" }),
                          /* @__PURE__ */ jsx("li", { children: "• Sicherheitsbewertungen" }),
                          /* @__PURE__ */ jsx("li", { children: "• Vertragsänderungsdokumentation" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-t border-slate-600", children: /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => toggleTaskCompletion("A.5.1.2"),
                        className: "flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors",
                        children: [
                          completedTasks.has("A.5.1.2") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" }),
                          "Als implementiert markieren"
                        ]
                      }
                    ) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5 text-purple-400" }),
                  "A.9 - Zugangssteuerung"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "A.9.5.1 - Cloud-Service-Zugang" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Kontrolle und Überwachung des Zugangs zu Cloud-Services." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-400 font-medium", children: "IMPLEMENTATION:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Multi-Faktor-Authentifizierung implementieren" }),
                          /* @__PURE__ */ jsx("li", { children: "• Rollenbasierte Zugriffskontrollen einrichten" }),
                          /* @__PURE__ */ jsx("li", { children: "• Privileged Access Management (PAM)" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-400 font-medium", children: "EVIDENCE:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• IAM-Konfigurationsdokumentation" }),
                          /* @__PURE__ */ jsx("li", { children: "• MFA-Implementierungsnachweis" }),
                          /* @__PURE__ */ jsx("li", { children: "• Zugriffsprotokolle und Audits" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-t border-slate-600", children: /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => toggleTaskCompletion("A.9.5.1"),
                        className: "flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors",
                        children: [
                          completedTasks.has("A.9.5.1") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" }),
                          "Als implementiert markieren"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "A.9.5.2 - Administrative Zugriffsrechte" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Verwaltung administrativer Zugriffsrechte in Cloud-Umgebungen." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-400 font-medium", children: "IMPLEMENTATION:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Prinzip der minimalen Berechtigung" }),
                          /* @__PURE__ */ jsx("li", { children: "• Just-in-Time Access Controls" }),
                          /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Berechtigunsreviews" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-400 font-medium", children: "EVIDENCE:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Berechtigungsmatrix" }),
                          /* @__PURE__ */ jsx("li", { children: "• Review-Berichte" }),
                          /* @__PURE__ */ jsx("li", { children: "• Admin-Aktivitätsprotokolle" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-t border-slate-600", children: /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => toggleTaskCompletion("A.9.5.2"),
                        className: "flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors",
                        children: [
                          completedTasks.has("A.9.5.2") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" }),
                          "Als implementiert markieren"
                        ]
                      }
                    ) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-green-400" }),
                  "A.10 - Kryptographie"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "A.10.1.1 - Kryptographische Controls" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Cloud-spezifische kryptographische Kontrollen und Schlüsselverwaltung." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-400 font-medium", children: "IMPLEMENTATION:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• End-to-End-Verschlüsselung implementieren" }),
                          /* @__PURE__ */ jsx("li", { children: "• Cloud HSM für Schlüsselverwaltung" }),
                          /* @__PURE__ */ jsx("li", { children: "• Bring Your Own Key (BYOK) Strategien" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-400 font-medium", children: "EVIDENCE:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Verschlüsselungsrichtlinie" }),
                          /* @__PURE__ */ jsx("li", { children: "• Schlüsselverwaltungsdokumentation" }),
                          /* @__PURE__ */ jsx("li", { children: "• Encryption-at-Rest/in-Transit Nachweis" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-t border-slate-600", children: /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => toggleTaskCompletion("A.10.1.1"),
                        className: "flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors",
                        children: [
                          completedTasks.has("A.10.1.1") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" }),
                          "Als implementiert markieren"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "A.10.1.2 - Schlüssel-Lebenszyklus" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Verwaltung des gesamten Lebenszyklus kryptographischer Schlüssel in der Cloud." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-400 font-medium", children: "IMPLEMENTATION:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Automatisierte Schlüsselrotation" }),
                          /* @__PURE__ */ jsx("li", { children: "• Sichere Schlüsselverteilung" }),
                          /* @__PURE__ */ jsx("li", { children: "• Schlüssel-Backup und -Recovery" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-400 font-medium", children: "EVIDENCE:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Schlüssel-Lifecycle-Policy" }),
                          /* @__PURE__ */ jsx("li", { children: "• Rotationsprotokolle" }),
                          /* @__PURE__ */ jsx("li", { children: "• Backup-/Recovery-Tests" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-t border-slate-600", children: /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => toggleTaskCompletion("A.10.1.2"),
                        className: "flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors",
                        children: [
                          completedTasks.has("A.10.1.2") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" }),
                          "Als implementiert markieren"
                        ]
                      }
                    ) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Server, { className: "h-5 w-5 text-red-400" }),
                  "A.12 - Betriebssicherheit"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "A.12.1.1 - Cloud-Service-Management" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Operative Verwaltung und Überwachung von Cloud-Services." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-red-400 font-medium", children: "IMPLEMENTATION:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• 24/7 Monitoring implementieren" }),
                          /* @__PURE__ */ jsx("li", { children: "• Automatisierte Alerting-Systeme" }),
                          /* @__PURE__ */ jsx("li", { children: "• Performance-Monitoring" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-400 font-medium", children: "EVIDENCE:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Monitoring-Dashboard" }),
                          /* @__PURE__ */ jsx("li", { children: "• Alert-Konfigurationsdokumentation" }),
                          /* @__PURE__ */ jsx("li", { children: "• Performance-Reports" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-t border-slate-600", children: /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => toggleTaskCompletion("A.12.1.1"),
                        className: "flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors",
                        children: [
                          completedTasks.has("A.12.1.1") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" }),
                          "Als implementiert markieren"
                        ]
                      }
                    ) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "A.12.6.1 - Virtualisierungssicherheit" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mb-3", children: "Sicherheitsmaßnahmen für virtualisierte Umgebungen und Container." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-red-400 font-medium", children: "IMPLEMENTATION:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• VM-Isolierung sicherstellen" }),
                          /* @__PURE__ */ jsx("li", { children: "• Container-Security implementieren" }),
                          /* @__PURE__ */ jsx("li", { children: "• Hypervisor-Härtung" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-400 font-medium", children: "EVIDENCE:" }),
                        /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs mt-1 space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Virtualisierungs-Sicherheitsrichtlinie" }),
                          /* @__PURE__ */ jsx("li", { children: "• Hypervisor-Konfiguration" }),
                          /* @__PURE__ */ jsx("li", { children: "• Container-Scanning-Berichte" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 pt-3 border-t border-slate-600", children: /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => toggleTaskCompletion("A.12.6.1"),
                        className: "flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors",
                        children: [
                          completedTasks.has("A.12.6.1") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" }),
                          "Als implementiert markieren"
                        ]
                      }
                    ) })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Info, { className: "h-5 w-5 text-blue-400" }),
                "Vollständige Control-Liste"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: "Die obigen Beispiele zeigen einen Auszug der wichtigsten ISO 27017 Controls. Der vollständige Standard umfasst 37 spezifische Cloud-Controls in 14 Kategorien." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-gray-300", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium text-white mb-1", children: "A.5 - Policies" }),
                  /* @__PURE__ */ jsx("div", { children: "2 Controls" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-gray-300", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium text-white mb-1", children: "A.6 - Organization" }),
                  /* @__PURE__ */ jsx("div", { children: "3 Controls" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-gray-300", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium text-white mb-1", children: "A.8 - Asset Management" }),
                  /* @__PURE__ */ jsx("div", { children: "4 Controls" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-gray-300", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium text-white mb-1", children: "A.9 - Access Control" }),
                  /* @__PURE__ */ jsx("div", { children: "6 Controls" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-gray-300", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium text-white mb-1", children: "A.10 - Cryptography" }),
                  /* @__PURE__ */ jsx("div", { children: "3 Controls" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-gray-300", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium text-white mb-1", children: "A.11 - Physical Security" }),
                  /* @__PURE__ */ jsx("div", { children: "2 Controls" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-gray-300", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium text-white mb-1", children: "A.12 - Operations" }),
                  /* @__PURE__ */ jsx("div", { children: "8 Controls" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-gray-300", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium text-white mb-1", children: "A.13-18 - Weitere" }),
                  /* @__PURE__ */ jsx("div", { children: "9 Controls" })
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
          "data-section": "data-protection",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Lock, { className: "h-6 w-6 text-green-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Data Protection in der Cloud" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Datenschutz in Cloud-Umgebungen erfordert spezielle Schutzmaßnahmen, die über traditionelle Sicherheitskonzepte hinausgehen. ISO 27017 definiert umfassende Anforderungen für den Schutz von Daten während des gesamten Cloud-Lebenszyklus." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-blue-400" }),
                    "Datenklassifizierung"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-2", children: "Streng Vertraulich" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                          "Personenbezogene Daten besonderer Kategorien"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                          "Geschäftsgeheimnisse und IP"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                          "Regulierte Finanzdaten"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-2", children: "Vertraulich" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                          "Interne Unternehmensdaten"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                          "Kundendaten ohne PII"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                          "Projektdokumentation"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Öffentlich" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Marketing-Materialien"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Öffentliche Dokumentation"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Anonymisierte Statistiken"
                        ] })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-purple-400" }),
                    "Schutzmaßnahmen nach Klassifizierung"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-2", children: "Höchste Schutzklasse:" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "End-to-End-Verschlüsselung" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Hardware Security Modules" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Multi-Faktor-Authentifizierung" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Zero-Trust-Zugriff" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-2", children: "Mittlere Schutzklasse:" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Standard-Verschlüsselung" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Rollenbasierte Zugriffskontrolle" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Audit-Logging" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Basis-Schutzklasse:" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Basis-Authentifizierung" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Standard-Backups" })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Data Protection Lifecycle" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Upload, { className: "h-6 w-6 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Erstellung/Import" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Datenklassifizierung" }),
                    /* @__PURE__ */ jsx("li", { children: "• Verschlüsselung at Rest" }),
                    /* @__PURE__ */ jsx("li", { children: "• Metadaten-Tagging" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Database, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Speicherung" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Geo-Redundanz" }),
                    /* @__PURE__ */ jsx("li", { children: "• Backup-Strategien" }),
                    /* @__PURE__ */ jsx("li", { children: "• Data Loss Prevention" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Share2, { className: "h-6 w-6 text-purple-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Übertragung" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Verschlüsselung in Transit" }),
                    /* @__PURE__ */ jsx("li", { children: "• VPN/Private Links" }),
                    /* @__PURE__ */ jsx("li", { children: "• Integritätsprüfung" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Trash2, { className: "h-6 w-6 text-red-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Löschung" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Sichere Löschung" }),
                    /* @__PURE__ */ jsx("li", { children: "• Kryptographische Löschung" }),
                    /* @__PURE__ */ jsx("li", { children: "• Retention Policies" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Spezielle Datenschutzanforderungen" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-blue-400" }),
                    "DSGVO-Compliance in der Cloud"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 mb-3", children: "Rechtmäßigkeit der Verarbeitung:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Einwilligung dokumentieren"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Vertragserfüllung nachweisen"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Berechtigte Interessen bewerten"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Gesetzliche Verpflichtungen beachten"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-3", children: "Betroffenenrechte gewährleisten:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Auskunftsrecht (Art. 15)"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Berichtigungsrecht (Art. 16)"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Löschungsrecht (Art. 17)"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Datenübertragbarkeit (Art. 20)"
                        ] })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-purple-400" }),
                    "Internationale Datentransfers"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 mb-3", children: "Angemessenheitsbeschlüsse:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• EU-US Data Privacy Framework" }),
                        /* @__PURE__ */ jsx("li", { children: "• UK Extension to Adequacy" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schweiz" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kanada (kommerzielle Org.)" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-3", children: "Standardvertragsklauseln:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• EU SCCs 2021/914" }),
                        /* @__PURE__ */ jsx("li", { children: "• UK International Data Transfer Agreement" }),
                        /* @__PURE__ */ jsx("li", { children: "• Transfer Impact Assessment" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-purple-400 mb-3", children: "Zusätzliche Schutzmaßnahmen:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Ende-zu-Ende-Verschlüsselung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Pseudonymisierung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Residency Controls" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-400" }),
                "Best Practices für Cloud Data Protection"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-3", children: "Technische Maßnahmen:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Zero-Knowledge-Architektur implementieren"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Client-seitige Verschlüsselung nutzen"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Data Loss Prevention (DLP) implementieren"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Continuous Data Discovery betreiben"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "Organisatorische Maßnahmen:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Data Governance Framework etablieren"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Privacy by Design umsetzen"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Regelmäßige Privacy Impact Assessments"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Vendor Risk Management betreiben"
                    ] })
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
          "data-section": "incident-management",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-red-600/20 rounded-lg", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Incident Management in der Cloud" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Cloud-Incident-Management erfordert spezielle Verfahren und Koordination zwischen Cloud Service Provider und Kunde. ISO 27017 definiert klare Rollen, Verantwortlichkeiten und Prozesse für die effektive Behandlung von Sicherheitsvorfällen in Cloud-Umgebungen." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-orange-400" }),
                    "Incident-Kategorien"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-medium text-red-400 mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
                        "Kritische Sicherheitsvorfälle"
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Datenverletzungen mit PII-Exposition" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kompromittierung von Produktionssystemen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ransomware-Angriffe" }),
                        /* @__PURE__ */ jsx("li", { children: "• DDoS-Angriffe auf kritische Services" }),
                        /* @__PURE__ */ jsx("li", { children: "• Unbefugter Zugriff auf Kundendaten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-medium text-yellow-400 mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
                        "Mittlere Sicherheitsvorfälle"
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Malware-Infektionen ohne Datenexposition" }),
                        /* @__PURE__ */ jsx("li", { children: "• Fehlkonfigurationen mit Sicherheitsrisiko" }),
                        /* @__PURE__ */ jsx("li", { children: "• Verdächtige Netzwerkaktivitäten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Accounts mit kompromittierten Credentials" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-medium text-blue-400 mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Info, { className: "h-4 w-4" }),
                        "Niedrige Sicherheitsvorfälle"
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Policy-Verletzungen ohne Sicherheitsimpact" }),
                        /* @__PURE__ */ jsx("li", { children: "• Fehlgeschlagene Login-Versuche" }),
                        /* @__PURE__ */ jsx("li", { children: "• Spam oder Phishing-Versuche" }),
                        /* @__PURE__ */ jsx("li", { children: "• Nicht-kritische Compliance-Abweichungen" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-green-400" }),
                    "Response Time Objectives"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-2", children: "Kritisch (P1)" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "Erstreaktion:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-red-400 font-medium", children: "15 Minuten" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "Status-Update:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-red-400 font-medium", children: "1 Stunde" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "Eskalation:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-red-400 font-medium", children: "30 Minuten" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-2", children: "Hoch (P2)" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "Erstreaktion:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-yellow-400 font-medium", children: "1 Stunde" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "Status-Update:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-yellow-400 font-medium", children: "4 Stunden" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Mittel/Niedrig (P3/P4)" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "Erstreaktion:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "8 Stunden" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "Status-Update:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "24 Stunden" })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Incident Response Lifecycle" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Detection" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• SIEM Alerts" }),
                    /* @__PURE__ */ jsx("li", { children: "• User Reports" }),
                    /* @__PURE__ */ jsx("li", { children: "• Automated Monitoring" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Eye, { className: "h-6 w-6 text-yellow-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Analysis" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Impact Assessment" }),
                    /* @__PURE__ */ jsx("li", { children: "• Root Cause Analysis" }),
                    /* @__PURE__ */ jsx("li", { children: "• Evidence Collection" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-red-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Containment" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Isolate Systems" }),
                    /* @__PURE__ */ jsx("li", { children: "• Prevent Spread" }),
                    /* @__PURE__ */ jsx("li", { children: "• Preserve Evidence" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Recovery" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• System Restoration" }),
                    /* @__PURE__ */ jsx("li", { children: "• Security Hardening" }),
                    /* @__PURE__ */ jsx("li", { children: "• Service Validation" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-purple-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Lessons Learned" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Post-Incident Review" }),
                    /* @__PURE__ */ jsx("li", { children: "• Process Improvement" }),
                    /* @__PURE__ */ jsx("li", { children: "• Documentation Update" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Rollen und Verantwortlichkeiten" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Cloud, { className: "h-5 w-5 text-blue-400" }),
                    "Cloud Service Provider Verantwortlichkeiten"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 mb-2", children: "Infrastruktur-Incidents:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Physische Sicherheitsvorfälle"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Netzwerk-Infrastruktur-Angriffe"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Hypervisor-Kompromittierungen"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Platform-Service-Ausfälle"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-2", children: "Kommunikationspflichten:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                          "Sofortige Benachrichtigung bei kritischen Incidents"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                          "Regelmäßige Status-Updates"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                          "Incident-Abschlussbericht"
                        ] })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-green-400" }),
                    "Customer Verantwortlichkeiten"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-2", children: "Anwendungs-Incidents:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Applikationssicherheitsvorfälle"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Datenbank-Kompromittierungen"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "IAM-Policy-Verletzungen"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "Data Loss Prevention"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 mb-2", children: "Kooperationspflichten:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" }),
                          "Logs und Forensic Data bereitstellen"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" }),
                          "Koordinierte Response-Maßnahmen"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" }),
                          "Joint Post-Incident Analysis"
                        ] })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Cloud-spezifische Herausforderungen" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400" }),
                    "Technische Herausforderungen"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Eingeschränkte Forensik:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Begrenzter Zugriff auf Low-Level-Systemlogs und Netzwerk-Traffic" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Multi-Tenancy-Komplexität:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Isolierung von Incidents zwischen verschiedenen Mandanten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Ephemere Infrastruktur:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Container und VMs können automatisch gelöscht werden" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Geografische Verteilung:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Koordination über mehrere Regionen und Rechenzentren" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-blue-400" }),
                    "Rechtliche Herausforderungen"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Meldepflichten:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "DSGVO Art. 33 - 72h-Frist für Aufsichtsbehörden" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Jurisdiktionale Konflikte:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Unterschiedliche Gesetze in verschiedenen Ländern" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Vertragliche Klarheit:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Eindeutige SLA-Definition für Incident Response" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Dokumentationspflichten:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Auditierbare Incident-Response-Dokumentation" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg border border-red-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-400" }),
                "Best Practices für Cloud Incident Management"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-3", children: "Vorbereitung & Prevention:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Automatisierte Threat Detection implementieren"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Incident Response Playbooks entwickeln"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Regelmäßige Tabletop-Exercises durchführen"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Forensic Readiness sicherstellen"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-orange-400 mb-3", children: "Koordination & Kommunikation:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Joint Incident Response Team etablieren"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Gemeinsame Kommunikationskanäle einrichten"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Eskalationsprozeduren definieren"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Post-Incident Review Process etablieren"
                    ] })
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
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-yellow-600/20 rounded-lg", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-yellow-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Cloud Risk Assessment" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Cloud-Risikobewertung erfordert spezielle Methoden zur Identifikation, Analyse und Bewertung von Risiken in virtualisierten und geteilten Umgebungen. ISO 27017 definiert systematische Ansätze für umfassende Cloud-Risikoanalysen." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-red-400" }),
                    "Cloud-spezifische Risikokategorien"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-2", children: "Technische Risiken" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Multi-Tenancy-Isolation-Failures" }),
                        /* @__PURE__ */ jsx("li", { children: "• Hypervisor-Vulnerabilities" }),
                        /* @__PURE__ */ jsx("li", { children: "• API-Security-Schwachstellen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Container-Escape-Szenarien" }),
                        /* @__PURE__ */ jsx("li", { children: "• Shared-Infrastructure-Angriffe" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-2", children: "Compliance-Risiken" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Jurisdiktionale Datenschutzverletzungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Audit-Trail-Inkonsistenzen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regulatory-Reporting-Gaps" }),
                        /* @__PURE__ */ jsx("li", { children: "• Certification-Scope-Mismatches" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Betriebsrisiken" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Service-Provider-Lock-in" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data-Portability-Limitations" }),
                        /* @__PURE__ */ jsx("li", { children: "• SLA-Performance-Degradation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Disaster-Recovery-Failures" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(PieChart, { className: "h-5 w-5 text-green-400" }),
                    "Risikobewertungsmatrix"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-lg border border-slate-600", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
                      /* @__PURE__ */ jsx("thead", { className: "bg-slate-700/50", children: /* @__PURE__ */ jsxs("tr", { children: [
                        /* @__PURE__ */ jsx("th", { className: "p-3 text-left text-white text-sm font-medium", children: "Wahrscheinlichkeit" }),
                        /* @__PURE__ */ jsx("th", { className: "p-3 text-center text-white text-sm font-medium", children: "Niedrig" }),
                        /* @__PURE__ */ jsx("th", { className: "p-3 text-center text-white text-sm font-medium", children: "Mittel" }),
                        /* @__PURE__ */ jsx("th", { className: "p-3 text-center text-white text-sm font-medium", children: "Hoch" })
                      ] }) }),
                      /* @__PURE__ */ jsxs("tbody", { className: "bg-slate-800/30", children: [
                        /* @__PURE__ */ jsxs("tr", { children: [
                          /* @__PURE__ */ jsx("td", { className: "p-3 text-gray-300 text-sm font-medium", children: "Hoch" }),
                          /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "Mittel" }) }),
                          /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/20 text-red-300", children: "Hoch" }) }),
                          /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/30 text-red-200", children: "Kritisch" }) })
                        ] }),
                        /* @__PURE__ */ jsxs("tr", { children: [
                          /* @__PURE__ */ jsx("td", { className: "p-3 text-gray-300 text-sm font-medium", children: "Mittel" }),
                          /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "Niedrig" }) }),
                          /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "Mittel" }) }),
                          /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/20 text-red-300", children: "Hoch" }) })
                        ] }),
                        /* @__PURE__ */ jsxs("tr", { children: [
                          /* @__PURE__ */ jsx("td", { className: "p-3 text-gray-300 text-sm font-medium", children: "Niedrig" }),
                          /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "Niedrig" }) }),
                          /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "Niedrig" }) }),
                          /* @__PURE__ */ jsx("td", { className: "p-3 text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "Mittel" }) })
                        ] })
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-2", children: "Akzeptabel (Niedrig):" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Standardkontrollmaßnahmen ausreichend" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-yellow-400 mb-2", children: "Überwacht (Mittel):" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Zusätzliche Schutzmaßnahmen erforderlich" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-400 mb-2", children: "Kritisch (Hoch):" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Sofortige Risikominderung notwendig" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-300 mb-2", children: "Inakzeptabel:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Service-Nutzung überdenken" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Risk Assessment Methodology" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Identifikation" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Asset Discovery" }),
                    /* @__PURE__ */ jsx("li", { children: "• Threat Modeling" }),
                    /* @__PURE__ */ jsx("li", { children: "• Vulnerability Scanning" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-yellow-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Analyse" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Impact Assessment" }),
                    /* @__PURE__ */ jsx("li", { children: "• Likelihood Evaluation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Risk Scoring" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Scale, { className: "h-6 w-6 text-purple-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Bewertung" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Risk Prioritization" }),
                    /* @__PURE__ */ jsx("li", { children: "• Tolerance Mapping" }),
                    /* @__PURE__ */ jsx("li", { children: "• Treatment Planning" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Treatment" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Control Implementation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Risk Transfer" }),
                    /* @__PURE__ */ jsx("li", { children: "• Acceptance Decisions" })
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
          "data-section": "compliance-monitoring",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Activity, { className: "h-6 w-6 text-purple-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Compliance Monitoring" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Kontinuierliches Compliance-Monitoring in Cloud-Umgebungen erfordert automatisierte Überwachungssysteme und regelmäßige Bewertungen. ISO 27017 definiert Frameworks für die laufende Überwachung der Einhaltung von Sicherheitsstandards." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Monitor, { className: "h-5 w-5 text-blue-400" }),
                    "Automatisierte Überwachung"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-900/20 border border-blue-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-1", children: "Configuration Drift Detection" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Erkennung von Abweichungen von Security Baselines" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-900/20 border border-green-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-1", children: "Policy Compliance Scanning" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Kontinuierliche Überprüfung von Compliance-Regeln" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-900/20 border border-purple-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-1", children: "Access Pattern Analysis" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Überwachung von Zugriffmustern und Anomalien" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-green-400" }),
                    "Audit und Reporting"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-900/20 border border-yellow-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-1", children: "Compliance Dashboards" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Real-time Compliance-Status-Visualisierung" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-900/20 border border-red-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400 mb-1", children: "Exception Reporting" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Automatische Benachrichtigung bei Verstößen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-900/20 border border-blue-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-1", children: "Regulatory Reports" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Automatisierte Compliance-Berichte für Auditoren" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-purple-400" }),
                    "KPIs und Metriken"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-400", children: "98.7%" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-300", children: "Control Effectiveness" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-400", children: "4.2h" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-300", children: "MTTR Compliance Issues" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400", children: "15" }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-300", children: "Open Findings" })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Monitoring Framework" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-white mb-4", children: "Technische Controls" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Encryption at Rest" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "✓ Active" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Network Segmentation" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "✓ Active" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Multi-Factor Auth" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "⚠ Partial" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Logging & Monitoring" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "✓ Active" })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium text-white mb-4", children: "Organisational Controls" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Security Policies" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "✓ Current" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Staff Training" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "✓ Complete" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Incident Response" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "⚠ Review Due" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Vendor Management" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "✓ Active" })
                    ] })
                  ] })
                ] }) })
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
          "data-section": "vendor-management",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Building2, { className: "h-6 w-6 text-blue-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Cloud Vendor Management" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Effektives Cloud-Vendor-Management ist entscheidend für die Aufrechterhaltung der Sicherheit und Compliance. ISO 27017 definiert umfassende Anforderungen für die Bewertung, Auswahl und laufende Überwachung von Cloud Service Providern." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Search, { className: "h-5 w-5 text-blue-400" }),
                    "Vendor Assessment Kriterien"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Sicherheitszertifizierungen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• ISO 27001/27017/27018 Zertifizierung" }),
                        /* @__PURE__ */ jsx("li", { children: "• SOC 2 Type II Reports" }),
                        /* @__PURE__ */ jsx("li", { children: "• Cloud Security Alliance (CSA) STAR" }),
                        /* @__PURE__ */ jsx("li", { children: "• FedRAMP Authorization (für US-Dienste)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Branchenspezifische Zertifizierungen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Datenschutz & Compliance" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• DSGVO-Compliance und Data Processing Agreements" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Residency und Transfer Mechanisms" }),
                        /* @__PURE__ */ jsx("li", { children: "• Privacy Impact Assessments" }),
                        /* @__PURE__ */ jsx("li", { children: "• Right to Audit Clauses" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Technische Sicherheit" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Encryption Standards (at rest/in transit)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Identity & Access Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Network Security Architecture" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vulnerability Management" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-purple-400" }),
                    "Vendor Risk Scoring"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400", children: "Low Risk (1-3)" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300", children: "Approved" })
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Vollständige Zertifizierungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Transparente Security Controls" }),
                        /* @__PURE__ */ jsx("li", { children: "• Etablierte Marktposition" }),
                        /* @__PURE__ */ jsx("li", { children: "• Umfassende SLAs" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400", children: "Medium Risk (4-6)" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "Conditional" })
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Teilweise Zertifizierungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Zusätzliche Controls erforderlich" }),
                        /* @__PURE__ */ jsx("li", { children: "• Enhanced Monitoring notwendig" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400", children: "High Risk (7-10)" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/20 text-red-300", children: "Restricted" })
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Fehlende Zertifizierungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Unklare Security Practices" }),
                        /* @__PURE__ */ jsx("li", { children: "• Nur für nicht-kritische Workloads" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Vendor Lifecycle Management" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Due Diligence" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Security Assessment" }),
                    /* @__PURE__ */ jsx("li", { children: "• Financial Stability" }),
                    /* @__PURE__ */ jsx("li", { children: "• Reference Checks" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Contracting" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• SLA Definition" }),
                    /* @__PURE__ */ jsx("li", { children: "• Data Processing Agreements" }),
                    /* @__PURE__ */ jsx("li", { children: "• Right to Audit" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Activity, { className: "h-6 w-6 text-purple-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Monitoring" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Performance Tracking" }),
                    /* @__PURE__ */ jsx("li", { children: "• Security Incidents" }),
                    /* @__PURE__ */ jsx("li", { children: "• Compliance Status" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-yellow-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Review" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Annual Assessments" }),
                    /* @__PURE__ */ jsx("li", { children: "• Risk Re-evaluation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Contract Renewals" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(X, { className: "h-6 w-6 text-red-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Termination" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Data Retrieval" }),
                    /* @__PURE__ */ jsx("li", { children: "• Secure Deletion" }),
                    /* @__PURE__ */ jsx("li", { children: "• Knowledge Transfer" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-400" }),
                "Best Practices für Cloud Vendor Management"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "Strategische Aspekte:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Multi-Vendor-Strategie zur Risikominimierung"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Regelmäßige Vendor Risk Assessments"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Exit-Strategien und Data Portability"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Continuous Security Monitoring"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-3", children: "Operative Umsetzung:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Automated Compliance Monitoring"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Vendor Performance Dashboards"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Incident Response Coordination"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Vendor Relationship Management"
                    ] })
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
          "data-section": "business-continuity",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-600/20 rounded-lg", children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-6 w-6 text-green-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Business Continuity in der Cloud" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Cloud-Business-Continuity erfordert spezielle Strategien für Disaster Recovery, Backup-Management und Service-Resilienz. ISO 27017 definiert umfassende Anforderungen für die Aufrechterhaltung kritischer Geschäftsprozesse in Cloud-Umgebungen." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-blue-400" }),
                    "Recovery Time Objectives (RTO)"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-900/20 border border-red-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-400", children: "Kritische Services" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/20 text-red-300", children: "Tier 1" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "RTO:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-red-400 font-medium", children: "< 1 Stunde" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "RPO:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-red-400 font-medium", children: "< 15 Minuten" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-xs mt-2", children: "Mission-kritische Systeme, die sofortige Wiederherstellung erfordern" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400", children: "Wichtige Services" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300", children: "Tier 2" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "RTO:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-yellow-400 font-medium", children: "< 4 Stunden" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "RPO:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-yellow-400 font-medium", children: "< 1 Stunde" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-xs mt-2", children: "Geschäftskritische Systeme mit moderater Toleranz" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400", children: "Standard Services" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: "Tier 3" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "RTO:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "< 24 Stunden" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                          /* @__PURE__ */ jsx("span", { children: "RPO:" }),
                          /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "< 8 Stunden" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-xs mt-2", children: "Unterstützende Systeme mit höherer Toleranz" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-green-400" }),
                    "Cloud-Backup-Strategien"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "3-2-1 Backup Rule" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "3 Kopien der Daten (Original + 2 Backups)"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "2 verschiedene Speichermedien"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                          "1 Offsite/Cloud-Backup"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Multi-Region Replication" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Cross-Region Disaster Recovery" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automated Failover Mechanisms" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Consistency Validation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Network Latency Optimization" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Immutable Backups" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Ransomware-Protection" }),
                        /* @__PURE__ */ jsx("li", { children: "• Legal Hold Capabilities" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance Retention Periods" }),
                        /* @__PURE__ */ jsx("li", { children: "• Write-Once-Read-Many (WORM)" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Disaster Recovery Planning" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Risk Assessment" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Threat Identification" }),
                    /* @__PURE__ */ jsx("li", { children: "• Impact Analysis" }),
                    /* @__PURE__ */ jsx("li", { children: "• Vulnerability Mapping" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "DR Strategy" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Recovery Procedures" }),
                    /* @__PURE__ */ jsx("li", { children: "• Failover Automation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Resource Allocation" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Play, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Testing" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• DR Simulations" }),
                    /* @__PURE__ */ jsx("li", { children: "• Failover Tests" }),
                    /* @__PURE__ */ jsx("li", { children: "• Recovery Validation" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-6 w-6 text-purple-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Improvement" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Lessons Learned" }),
                    /* @__PURE__ */ jsx("li", { children: "• Process Updates" }),
                    /* @__PURE__ */ jsx("li", { children: "• Continuous Enhancement" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Cloud-spezifische BC/DR Herausforderungen" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400" }),
                    "Technische Herausforderungen"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-900/20 border border-red-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-400 mb-1", children: "Service Dependencies" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Komplexe Abhängigkeiten zwischen Cloud-Services erschweren koordinierte Recovery" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-900/20 border border-yellow-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-yellow-400 mb-1", children: "Data Consistency" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Gewährleistung der Datenkonsistenz bei Multi-Region-Deployments" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-900/20 border border-blue-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 mb-1", children: "Network Connectivity" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Abhängigkeit von Internet-Konnektivität für Cloud-Zugriff" })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-blue-400" }),
                    "Organisatorische Herausforderungen"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-900/20 border border-purple-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-purple-400 mb-1", children: "Shared Responsibility" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Klare Abgrenzung der BC/DR-Verantwortlichkeiten zwischen CSP und Kunde" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-900/20 border border-green-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-1", children: "SLA Coordination" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Abstimmung eigener RTO/RPO mit CSP-Service-Level-Agreements" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-orange-900/20 border border-orange-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-orange-400 mb-1", children: "Testing Limitations" }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Eingeschränkte Möglichkeiten für realistische DR-Tests in Cloud-Umgebungen" })
                    ] })
                  ] })
                ] }) })
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
          "data-section": "training-awareness",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-orange-600/20 rounded-lg", children: /* @__PURE__ */ jsx(GraduationCap, { className: "h-6 w-6 text-orange-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Cloud Security Training & Awareness" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Effektive Cloud-Sicherheit erfordert umfassende Schulungs- und Awareness-Programme für alle Stakeholder. ISO 27017 definiert strukturierte Ansätze für die Entwicklung von Cloud-Security-Kompetenzen und die Förderung des Sicherheitsbewusstseins." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-blue-400" }),
                    "Zielgruppen-spezifische Programme"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-900/20 border border-blue-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-1", children: "IT-Administratoren" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Cloud-Architektur-Sicherheit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Identity & Access Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Security Monitoring Tools" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident Response Procedures" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-900/20 border border-green-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-1", children: "Entwickler" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Secure Coding Practices" }),
                        /* @__PURE__ */ jsx("li", { children: "• API Security" }),
                        /* @__PURE__ */ jsx("li", { children: "• Container Security" }),
                        /* @__PURE__ */ jsx("li", { children: "• DevSecOps Integration" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-900/20 border border-purple-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-1", children: "Management" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Cloud Risk Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance Requirements" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vendor Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Business Continuity" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-900/20 border border-yellow-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-1", children: "End Users" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Cloud Service Usage" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Classification" }),
                        /* @__PURE__ */ jsx("li", { children: "• Phishing Awareness" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident Reporting" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5 text-green-400" }),
                    "Trainingsmodule"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm", children: "Cloud Fundamentals" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-green-500/20 text-green-300 text-xs", children: "8h" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Grundlagen der Cloud-Sicherheit und Shared Responsibility" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm", children: "Data Protection" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300 text-xs", children: "6h" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Verschlüsselung, Klassifizierung und Datenschutz" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm", children: "Threat Landscape" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300 text-xs", children: "4h" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Cloud-spezifische Bedrohungen und Angriffsvektoren" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm", children: "Compliance & Audit" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-purple-500/20 text-purple-300 text-xs", children: "5h" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Regulatory Requirements und Audit-Vorbereitung" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-sm", children: "Incident Response" }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/20 text-red-300 text-xs", children: "6h" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs", children: "Cloud-Incident-Management und Forensik" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-purple-400" }),
                    "Zertifizierungen & Skills"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-900/20 border border-blue-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-1", children: "Cloud Security" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• CCSP (Certified Cloud Security Professional)" }),
                        /* @__PURE__ */ jsx("li", { children: "• AWS Certified Security - Specialty" }),
                        /* @__PURE__ */ jsx("li", { children: "• Azure Security Engineer Associate" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-900/20 border border-green-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-1", children: "Compliance & Risk" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• CISA (Certified Information Systems Auditor)" }),
                        /* @__PURE__ */ jsx("li", { children: "• CRISC (Certified in Risk and Information Systems Control)" }),
                        /* @__PURE__ */ jsx("li", { children: "• ISO 27001 Lead Auditor" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-900/20 border border-purple-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-1", children: "Technical Skills" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Container Security (CKS)" }),
                        /* @__PURE__ */ jsx("li", { children: "• DevSecOps Foundations" }),
                        /* @__PURE__ */ jsx("li", { children: "• Cloud Penetration Testing" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Continuous Awareness Programme" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Security Updates" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Monatliche Newsletter mit aktuellen Cloud-Security-Trends" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Phishing Simulations" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Quartalweise Cloud-fokussierte Phishing-Tests" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Lunch & Learn" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Wöchentliche kurze Sessions zu Cloud-Security-Topics" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Play, { className: "h-6 w-6 text-purple-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Tabletop Exercises" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Jährliche Cloud-Incident-Response-Simulationen" })
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
          "data-section": "audit-assessment",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-indigo-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6 text-indigo-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Cloud Security Audit & Assessment" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Cloud-Security-Audits erfordern spezialisierte Methoden und Tools für die Bewertung von virtualisierten Umgebungen. ISO 27017 definiert umfassende Audit-Frameworks für die systematische Evaluation von Cloud-Sicherheitskontrollen." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-400" }),
                    "Audit-Kategorien"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Compliance Audits" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• ISO 27001/27017 Zertifizierungsaudits" }),
                        /* @__PURE__ */ jsx("li", { children: "• SOC 2 Type II Assessments" }),
                        /* @__PURE__ */ jsx("li", { children: "• DSGVO-Compliance-Bewertungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Branchenspezifische Audits (PCI DSS, HIPAA)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Cloud Security Alliance (CSA) CAIQ" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-900/20 border border-green-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-2", children: "Technical Security Assessments" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Cloud Infrastructure Penetration Testing" }),
                        /* @__PURE__ */ jsx("li", { children: "• API Security Assessments" }),
                        /* @__PURE__ */ jsx("li", { children: "• Container Security Audits" }),
                        /* @__PURE__ */ jsx("li", { children: "• Identity & Access Management Reviews" }),
                        /* @__PURE__ */ jsx("li", { children: "• Data Encryption Validation" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Operational Audits" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Change Management Processes" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident Response Capabilities" }),
                        /* @__PURE__ */ jsx("li", { children: "• Backup & Recovery Procedures" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vendor Management Practices" }),
                        /* @__PURE__ */ jsx("li", { children: "• Security Monitoring Effectiveness" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-green-400" }),
                    "Cloud-spezifische Audit-Tools"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-600/30 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Automated Assessment Tools" }),
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "p-2 bg-blue-900/20 rounded text-center", children: [
                          /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-400", children: "AWS Config" }),
                          /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs", children: "Compliance Monitoring" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "p-2 bg-blue-900/20 rounded text-center", children: [
                          /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-400", children: "Azure Policy" }),
                          /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs", children: "Governance & Compliance" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "p-2 bg-green-900/20 rounded text-center", children: [
                          /* @__PURE__ */ jsx("div", { className: "font-medium text-green-400", children: "Cloud Custodian" }),
                          /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs", children: "Policy Engine" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "p-2 bg-purple-900/20 rounded text-center", children: [
                          /* @__PURE__ */ jsx("div", { className: "font-medium text-purple-400", children: "Prowler" }),
                          /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs", children: "Security Assessment" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-600/30 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Cloud Security Posture Management" }),
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "p-2 bg-yellow-900/20 rounded text-center", children: [
                          /* @__PURE__ */ jsx("div", { className: "font-medium text-yellow-400", children: "Prisma Cloud" }),
                          /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs", children: "Multi-Cloud Security" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "p-2 bg-red-900/20 rounded text-center", children: [
                          /* @__PURE__ */ jsx("div", { className: "font-medium text-red-400", children: "Dome9" }),
                          /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs", children: "Compliance Automation" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "p-2 bg-indigo-900/20 rounded text-center", children: [
                          /* @__PURE__ */ jsx("div", { className: "font-medium text-indigo-400", children: "CloudSploit" }),
                          /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs", children: "Security Scanning" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "p-2 bg-pink-900/20 rounded text-center", children: [
                          /* @__PURE__ */ jsx("div", { className: "font-medium text-pink-400", children: "Lacework" }),
                          /* @__PURE__ */ jsx("div", { className: "text-gray-400 text-xs", children: "Cloud Workload Protection" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-600/30 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Evidence Collection & Management" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Automated Screenshot & Log Collection" }),
                        /* @__PURE__ */ jsx("li", { children: "• Configuration Snapshots" }),
                        /* @__PURE__ */ jsx("li", { children: "• Audit Trail Preservation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Chain of Custody Documentation" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Audit Lifecycle Management" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Target, { className: "h-6 w-6 text-blue-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Planning" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Scope Definition" }),
                    /* @__PURE__ */ jsx("li", { children: "• Risk Assessment" }),
                    /* @__PURE__ */ jsx("li", { children: "• Resource Planning" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Database, { className: "h-6 w-6 text-green-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Execution" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Evidence Collection" }),
                    /* @__PURE__ */ jsx("li", { children: "• Control Testing" }),
                    /* @__PURE__ */ jsx("li", { children: "• Gap Analysis" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-yellow-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Analysis" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Finding Assessment" }),
                    /* @__PURE__ */ jsx("li", { children: "• Risk Evaluation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Impact Analysis" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-purple-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Reporting" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Executive Summary" }),
                    /* @__PURE__ */ jsx("li", { children: "• Detailed Findings" }),
                    /* @__PURE__ */ jsx("li", { children: "• Recommendations" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-4 text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(CheckCircle, { className: "h-6 w-6 text-red-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Follow-up" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-xs space-y-1", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Remediation Tracking" }),
                    /* @__PURE__ */ jsx("li", { children: "• Re-testing" }),
                    /* @__PURE__ */ jsx("li", { children: "• Closure Validation" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-400" }),
                "Best Practices für Cloud Security Audits"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-indigo-400 mb-3", children: "Audit Vorbereitung:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Kontinuierliche Audit-Readiness sicherstellen"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Automated Evidence Collection implementieren"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Clear Audit Trails etablieren"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Documentation Standards definieren"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-3", children: "Audit Durchführung:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Risk-basierte Audit-Ansätze nutzen"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Cloud-native Tools einsetzen"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Shared Responsibility Model berücksichtigen"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Continuous Monitoring etablieren"
                    ] })
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
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Route, { className: "h-6 w-6 text-green-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "ISO 27017 Implementierungsroadmap" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Die systematische Implementierung von ISO 27017 erfordert eine strukturierte Herangehensweise mit klaren Phasen, Meilensteinen und Erfolgsmessungen. Diese Roadmap bietet einen praktischen Leitfaden für die erfolgreiche Umsetzung." }),
              /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Implementierungsphasen" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-8", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-bold", children: "1" }) }),
                    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-blue-400" }),
                        "Vorbereitung und Planung (4-6 Wochen)"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-400 mb-2", children: "Hauptaktivitäten:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Management-Commitment sicherstellen"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Project Team und Steering Committee bilden"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Cloud-Infrastruktur-Inventar erstellen"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Gap-Analysis durchführen"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-2", children: "Deliverables:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Project Charter" }),
                            /* @__PURE__ */ jsx("li", { children: "• Cloud Asset Inventory" }),
                            /* @__PURE__ */ jsx("li", { children: "• Current State Assessment" }),
                            /* @__PURE__ */ jsx("li", { children: "• Implementation Roadmap" }),
                            /* @__PURE__ */ jsx("li", { children: "• Budget und Ressourcenplan" })
                          ] })
                        ] })
                      ] })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-8", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-purple-400 font-bold", children: "2" }) }),
                    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-purple-400" }),
                        "Policy und Governance (6-8 Wochen)"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium text-purple-400 mb-2", children: "Hauptaktivitäten:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Cloud Security Policy entwickeln"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Shared Responsibility Matrix definieren"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Vendor Management Framework"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Risk Management Prozesse"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-2", children: "Deliverables:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Cloud Security Policy" }),
                            /* @__PURE__ */ jsx("li", { children: "• Governance Framework" }),
                            /* @__PURE__ */ jsx("li", { children: "• Risk Assessment Methodology" }),
                            /* @__PURE__ */ jsx("li", { children: "• Vendor Assessment Criteria" }),
                            /* @__PURE__ */ jsx("li", { children: "• Incident Response Plan" })
                          ] })
                        ] })
                      ] })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-8", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-yellow-400 font-bold", children: "3" }) }),
                    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-yellow-400" }),
                        "Technische Implementierung (12-16 Wochen)"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium text-yellow-400 mb-2", children: "Hauptaktivitäten:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Cloud Controls implementieren"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Security Monitoring aufbauen"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Identity & Access Management"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Data Protection Maßnahmen"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-2", children: "Deliverables:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Implemented Security Controls" }),
                            /* @__PURE__ */ jsx("li", { children: "• Monitoring & Logging System" }),
                            /* @__PURE__ */ jsx("li", { children: "• IAM Configuration" }),
                            /* @__PURE__ */ jsx("li", { children: "• Encryption Implementation" }),
                            /* @__PURE__ */ jsx("li", { children: "• Backup & Recovery System" })
                          ] })
                        ] })
                      ] })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-8", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-green-400 font-bold", children: "4" }) }),
                    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(GraduationCap, { className: "h-5 w-5 text-green-400" }),
                        "Training und Awareness (4-6 Wochen)"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-2", children: "Hauptaktivitäten:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Schulungsprogramme entwickeln"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Team-spezifische Trainings"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Awareness-Kampagnen starten"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Tabletop Exercises durchführen"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-2", children: "Deliverables:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Training Materials" }),
                            /* @__PURE__ */ jsx("li", { children: "• Awareness Programme" }),
                            /* @__PURE__ */ jsx("li", { children: "• Competency Assessments" }),
                            /* @__PURE__ */ jsx("li", { children: "• Exercise Documentation" }),
                            /* @__PURE__ */ jsx("li", { children: "• Knowledge Base" })
                          ] })
                        ] })
                      ] })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx("span", { className: "text-red-400 font-bold", children: "5" }) }),
                    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-red-400" }),
                        "Testing und Zertifizierung (8-12 Wochen)"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-400 mb-2", children: "Hauptaktivitäten:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Internal Audit durchführen"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Gap-Remediation"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Certification Audit vorbereiten"
                            ] }),
                            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                              "Continuous Improvement etablieren"
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-400 mb-2", children: "Deliverables:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Internal Audit Report" }),
                            /* @__PURE__ */ jsx("li", { children: "• Corrective Action Plans" }),
                            /* @__PURE__ */ jsx("li", { children: "• Evidence Documentation" }),
                            /* @__PURE__ */ jsx("li", { children: "• Certification Readiness" }),
                            /* @__PURE__ */ jsx("li", { children: "• Improvement Roadmap" })
                          ] })
                        ] })
                      ] })
                    ] }) })
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Kritische Erfolgsfaktoren" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Star, { className: "h-5 w-5 text-yellow-400" }),
                    "Organisatorische Faktoren"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Executive Sponsorship:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Sichtbare Unterstützung und ausreichende Ressourcen vom Management" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Cross-functional Team:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Einbeziehung aller relevanten Stakeholder und Fachbereiche" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Change Management:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Strukturierte Begleitung der organisatorischen Veränderungen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Kompetenzaufbau:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Kontinuierliche Weiterbildung und Skill-Entwicklung" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-blue-400" }),
                    "Technische Faktoren"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-3 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Automation-First Ansatz:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Maximale Automatisierung von Security Controls und Monitoring" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Scalable Architecture:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Skalierbare und zukunftsfähige Sicherheitsarchitektur" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Integration Strategy:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Nahtlose Integration in bestehende IT-Landschaft" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Performance Monitoring:" }),
                        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 mt-1", children: "Kontinuierliche Überwachung und Optimierung der Performance" })
                      ] })
                    ] })
                  ] })
                ] }) })
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
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "ISO 27017 Zertifizierungsprozess" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Die ISO 27017 Zertifizierung ist ein strukturierter Prozess, der die Compliance mit Cloud-Security-Standards formal bestätigt. Diese Sektion führt durch den gesamten Zertifizierungsprozess von der Vorbereitung bis zur Aufrechterhaltung des Zertifikats." }),
              /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Zertifizierungsphasen" }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-blue-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-center mb-3", children: "Stage 1 Audit" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                        /* @__PURE__ */ jsx("span", { children: "Dauer:" }),
                        /* @__PURE__ */ jsx("span", { className: "text-blue-400", children: "1-2 Tage" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                        /* @__PURE__ */ jsx("span", { children: "Typ:" }),
                        /* @__PURE__ */ jsx("span", { className: "text-blue-400", children: "Remote/Onsite" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-xs mt-3", children: "Dokumentenprüfung und Bewertung der Audit-Bereitschaft" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6 text-green-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-center mb-3", children: "Stage 2 Audit" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                        /* @__PURE__ */ jsx("span", { children: "Dauer:" }),
                        /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "3-5 Tage" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                        /* @__PURE__ */ jsx("span", { children: "Typ:" }),
                        /* @__PURE__ */ jsx("span", { className: "text-green-400", children: "Onsite" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-xs mt-3", children: "Detaillierte Implementierungsprüfung und Control-Testing" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-purple-400" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white text-center mb-3", children: "Zertifikat" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                        /* @__PURE__ */ jsx("span", { children: "Gültigkeit:" }),
                        /* @__PURE__ */ jsx("span", { className: "text-purple-400", children: "3 Jahre" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-gray-300", children: [
                        /* @__PURE__ */ jsx("span", { children: "Surveillance:" }),
                        /* @__PURE__ */ jsx("span", { className: "text-purple-400", children: "Jährlich" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-xs mt-3", children: "Zertifikat-Ausstellung und jährliche Überwachungsaudits" })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Audit-Vorbereitung Checkliste" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-400" }),
                    "Dokumentation"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Information Security Policy aktualisiert" })
                    ] }),
                    /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Cloud Security Procedures dokumentiert" })
                    ] }),
                    /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Risk Assessment Reports vollständig" })
                    ] }),
                    /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Vendor Management Documentation" })
                    ] }),
                    /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Incident Response Plans aktuell" })
                    ] }),
                    /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Business Continuity Plans getestet" })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-green-400" }),
                    "Technische Evidenz"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Cloud Configuration Screenshots" })
                    ] }),
                    /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Monitoring und Logging Berichte" })
                    ] }),
                    /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Vulnerability Scan Results" })
                    ] }),
                    /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Backup und Recovery Tests" })
                    ] }),
                    /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Access Control Matrices" })
                    ] }),
                    /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-3 cursor-pointer", children: [
                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: "Encryption Implementation Proof" })
                    ] })
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-6", children: "Zertifizierungskosten und Timeline" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Euro, { className: "h-5 w-5 text-green-400" }),
                    "Kostenübersicht"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Stage 1 Audit" }),
                      /* @__PURE__ */ jsx("span", { className: "text-green-400 font-medium", children: "€5,000 - €8,000" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Stage 2 Audit" }),
                      /* @__PURE__ */ jsx("span", { className: "text-green-400 font-medium", children: "€12,000 - €18,000" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Jährliche Surveillance" }),
                      /* @__PURE__ */ jsx("span", { className: "text-green-400 font-medium", children: "€4,000 - €6,000" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-blue-900/20 border border-blue-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Gesamtkosten (3 Jahre)" }),
                      /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-bold", children: "€29,000 - €44,000" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "text-lg font-medium text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5 text-blue-400" }),
                    "Timeline"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Vorbereitung" }),
                      /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "6-12 Monate" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Stage 1 Audit" }),
                      /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "2-4 Wochen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Gap Remediation" }),
                      /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "4-8 Wochen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-slate-600/30 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300", children: "Stage 2 Audit" }),
                      /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "2-3 Wochen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-green-900/20 border border-green-700/50 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Zertifikat-Ausstellung" }),
                      /* @__PURE__ */ jsx("span", { className: "text-green-400 font-bold", children: "4-6 Wochen" })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-gradient-to-r from-yellow-900/20 to-green-900/20 rounded-lg border border-yellow-700/50", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-400" }),
                "Erfolgreiche Zertifizierung: Best Practices"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-yellow-400 mb-3", children: "Vor dem Audit:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Mock-Audits mit internen oder externen Auditoren durchführen"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Alle Evidenzen zentral sammeln und organisieren"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Key Personnel für Interviews vorbereiten"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Audit-Timeline und Logistik detailliert planen"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-green-400 mb-3", children: "Nach der Zertifizierung:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Continuous Monitoring System etablieren"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Regelmäßige interne Audits durchführen"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Management Review Meetings etablieren"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                      "Kontinuierliche Verbesserungen umsetzen"
                    ] })
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
  Iso27017Guide as default
};
