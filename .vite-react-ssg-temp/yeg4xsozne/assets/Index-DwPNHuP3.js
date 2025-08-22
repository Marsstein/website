import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { H as Header } from "./Header-DH34VBbs.js";
import { H as HeroSection, D as DACHCompliance } from "./DACHCompliance-BMtsHU8V.js";
import { useState, useRef, useEffect } from "react";
import { C as Card } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { AlertTriangle, Shield, Euro, Zap, Clock, Brain, TrendingUp, Database, FileCheck, CheckCircle2, Sparkles, Rocket, ArrowRight, Eye, Users, Lock, Settings, Network, AlertCircle, Scale, Activity, BarChart3, Play, Server, Award, Globe, HelpCircle, BookOpen, MessageSquare, ChevronUp, ChevronDown, Bell, Calendar, Mail } from "lucide-react";
import { c as cn } from "../main.mjs";
import { B as Button } from "./button-BRnNKcuh.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { I as Input } from "./input-6XZgwDxx.js";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "@radix-ui/react-slot";
const transformationCards = [
  {
    id: "fines",
    problem: {
      icon: Euro,
      title: "Massive Bußgelder",
      description: "DSGVO-Verstöße können bis zu 4% des Jahresumsatzes oder 20 Millionen Euro kosten.",
      impact: "Bis zu 20 Mio. €",
      color: "text-red-600",
      bgGradient: "from-red-500/10 to-orange-500/10"
    },
    solution: {
      icon: Shield,
      title: "KI-gestützte Automatisierung",
      description: "Vollautomatische Compliance-Überwachung und Dokumentation",
      benefit: "Ziel: 85% Zeitersparnis",
      color: "text-emerald-600",
      bgGradient: "from-emerald-500/10 to-green-500/10"
    }
  },
  {
    id: "time",
    problem: {
      icon: Clock,
      title: "Zeitaufwändige Prozesse",
      description: "Manuelle Compliance-Vorbereitung verschwendet wertvolle Arbeitszeit und Ressourcen.",
      impact: "120+ Stunden/Audit",
      color: "text-orange-600",
      bgGradient: "from-orange-500/10 to-red-500/10"
    },
    solution: {
      icon: Zap,
      title: "Proaktive Compliance",
      description: "Frühzeitige Warnung vor Verstößen und automatische Korrekturmaßnahmen",
      benefit: "Ziel: Umfassende Abdeckung",
      color: "text-blue-600",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    }
  },
  {
    id: "complexity",
    problem: {
      icon: TrendingUp,
      title: "Regulatorische Komplexität",
      description: "EU AI Act, NIS2, DORA - die Anzahl der Vorschriften wächst exponentiell.",
      impact: "12+ neue Gesetze/Jahr",
      color: "text-amber-600",
      bgGradient: "from-amber-500/10 to-orange-500/10"
    },
    solution: {
      icon: Brain,
      title: "Kontinuierliche Verbesserung",
      description: "Machine Learning optimiert Ihre Compliance-Prozesse kontinuierlich",
      benefit: "Kontinuierliche Verbesserung",
      color: "text-purple-600",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    }
  },
  {
    id: "documentation",
    problem: {
      icon: FileCheck,
      title: "Inkonsistente Dokumentation",
      description: "Veraltete Richtlinien und fehlende Nachweise erschweren Audits erheblich.",
      impact: "67% unvollständig",
      color: "text-red-600",
      bgGradient: "from-red-500/10 to-pink-500/10"
    },
    solution: {
      icon: Database,
      title: "Multi-Standard Support",
      description: "DSGVO, ISO 27001, SOC 2, EU AI Act - alles in einer Plattform",
      benefit: "Roadmap: 15+ Standards",
      color: "text-indigo-600",
      bgGradient: "from-indigo-500/10 to-blue-500/10"
    }
  }
];
const ScrollTransformation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      const headerHeight = 64;
      const shouldBeSticky = rect.top <= headerHeight && rect.bottom > headerHeight;
      setIsSticky(shouldBeSticky);
      let progress = 0;
      if (shouldBeSticky && rect.bottom > headerHeight) {
        const scrolledIntoSection = headerHeight - rect.top;
        const availableScrollDistance = sectionHeight - windowHeight;
        const animationStartPoint = availableScrollDistance * 0.2;
        const animationDistance = availableScrollDistance * 0.75;
        if (scrolledIntoSection > animationStartPoint) {
          const adjustedScroll = scrolledIntoSection - animationStartPoint;
          progress = Math.max(0, Math.min(1, adjustedScroll / animationDistance));
        }
      }
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsx(
    "section",
    {
      ref: sectionRef,
      className: "relative",
      style: { height: "200vh" },
      children: /* @__PURE__ */ jsx("div", { className: cn(
        "w-full transition-all duration-300",
        isSticky ? "fixed top-16 left-0 right-0 h-[calc(100vh-4rem)]" : "relative h-screen"
      ), children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 py-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-6 space-y-3", children: [
          /* @__PURE__ */ jsxs(Badge, { className: cn(
            "transition-all duration-500 text-sm",
            scrollProgress > 0.5 ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-red-500/10 text-red-600 border-red-500/20"
          ), children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 mr-1" }),
            scrollProgress > 0.5 ? "Lösungen verfügbar" : "Compliance Herausforderungen"
          ] }),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold text-gray-900 leading-tight", children: scrollProgress < 0.5 ? /* @__PURE__ */ jsxs(Fragment, { children: [
            "Compliance kostet deutsche Unternehmen ",
            /* @__PURE__ */ jsx("span", { className: "text-red-600", children: "Milliarden" })
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "KI-gestützte ",
            /* @__PURE__ */ jsx("span", { className: "text-emerald-600", children: "Compliance" }),
            "-Transformation"
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-base text-gray-600 max-w-2xl mx-auto", children: scrollProgress < 0.5 ? "Manuelle Prozesse, zeitaufwändige Audits und Regulierungs-Chaos verschlingen jährlich Milliardenbeträge" : "Automatisierte Lösungen verwandeln Compliance-Herausforderungen in Wettbewerbsvorteile" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-2 bg-gray-200 rounded-full mb-6 max-w-md mx-auto", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-300",
            style: { width: `${scrollProgress * 100}%` }
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8", children: transformationCards.map((card, cardIndex) => {
          const cardStartProgress = cardIndex * 0.2 + 0.1;
          const cardEndProgress = cardStartProgress + 0.25;
          let cardProgress = 0;
          if (scrollProgress > cardStartProgress) {
            cardProgress = Math.max(0, Math.min(1, (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress)));
          }
          const showSolution = cardProgress > 0.4;
          const morphProgress = Math.max(0, Math.min(1, (cardProgress - 0.2) / 0.4));
          return /* @__PURE__ */ jsxs("div", { className: "relative h-[140px]", children: [
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 transition-all duration-700",
                style: {
                  opacity: showSolution ? 0 : 1,
                  transform: `scale(${showSolution ? 0.95 : 1}) translateY(${morphProgress * -10}px)`,
                  pointerEvents: showSolution ? "none" : "auto"
                },
                children: /* @__PURE__ */ jsxs(Card, { className: cn(
                  "w-full h-full p-3 border-2 flex flex-col",
                  `bg-gradient-to-br ${card.problem.bgGradient}`,
                  "border-red-200 hover:border-red-300 shadow-md hover:shadow-lg transition-all duration-300"
                ), children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-1.5 rounded bg-red-500/20 shrink-0", children: /* @__PURE__ */ jsx(card.problem.icon, { className: cn("h-4 w-4", card.problem.color) }) }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-red-500/10 text-red-600 border-red-500/20 text-xs", children: "Problem" })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-gray-900 mb-1", children: card.problem.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 flex-1 line-clamp-2", children: card.problem.description }),
                  /* @__PURE__ */ jsx("div", { className: "mt-2 pt-2 border-t border-red-200", children: /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-red-600", children: card.problem.impact }) })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              "div",
              {
                className: "absolute inset-0 transition-all duration-700",
                style: {
                  opacity: showSolution ? 1 : 0,
                  transform: `scale(${showSolution ? 1 : 0.95}) translateY(${showSolution ? 0 : morphProgress * 10}px)`,
                  pointerEvents: showSolution ? "auto" : "none"
                },
                children: /* @__PURE__ */ jsxs(Card, { className: cn(
                  "w-full h-full p-3 border-2 flex flex-col",
                  `bg-gradient-to-br ${card.solution.bgGradient}`,
                  "border-emerald-200 hover:border-emerald-300 shadow-md hover:shadow-lg transition-all duration-300"
                ), children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-1.5 rounded bg-emerald-500/20 shrink-0", children: /* @__PURE__ */ jsx(card.solution.icon, { className: cn("h-4 w-4", card.solution.color) }) }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-xs", children: "Lösung" })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-gray-900 mb-1", children: card.solution.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 flex-1 line-clamp-2", children: card.solution.description }),
                  /* @__PURE__ */ jsx("div", { className: "mt-2 pt-2 border-t border-emerald-200", children: /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-emerald-600", children: card.solution.benefit }) })
                ] })
              }
            )
          ] }, card.id);
        }) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mb-6", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-500",
              scrollProgress > 0.5 ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" : "bg-red-500/10 text-red-600 border border-red-500/20"
            ),
            children: scrollProgress > 0.5 ? /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "Probleme gelöst mit Marsstein" })
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold", children: "Typische DACH-Probleme" })
            ] })
          }
        ) })
      ] }) }) })
    }
  );
};
const TransformationCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const shouldShow = rect.top <= windowHeight * 0.3;
      setIsVisible(shouldShow);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "py-16 relative z-10",
      style: {
        marginTop: "50vh",
        backgroundColor: "#ffffff"
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 overflow-hidden bg-gradient-to-r from-transparent via-gray-50/30 to-transparent", style: { top: "-10%", height: "120%" }, children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 1200 176", preserveAspectRatio: "none", children: [
          /* @__PURE__ */ jsxs("defs", { children: [
            /* @__PURE__ */ jsxs("radialGradient", { id: "neuronGlow", cx: "50%", cy: "50%", r: "50%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#e24e1b", stopOpacity: "0.8" }),
              /* @__PURE__ */ jsx("stop", { offset: "70%", stopColor: "#ff6b3d", stopOpacity: "0.3" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#e24e1b", stopOpacity: "0" })
            ] }),
            /* @__PURE__ */ jsxs("linearGradient", { id: "synapseGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#e24e1b", stopOpacity: "0.2" }),
              /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#e24e1b", stopOpacity: "0.8" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#e24e1b", stopOpacity: "0.2" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("g", { stroke: "url(#synapseGrad)", strokeWidth: "1.5", fill: "none", className: "animate-pulse", children: [
            /* @__PURE__ */ jsx("path", { d: "M100,88 Q200,60 300,88 Q400,116 500,88" }),
            /* @__PURE__ */ jsx("path", { d: "M200,70 Q350,100 500,70 Q650,40 800,70" }),
            /* @__PURE__ */ jsx("path", { d: "M300,106 Q450,80 600,106 Q750,132 900,106" }),
            /* @__PURE__ */ jsx("path", { d: "M500,50 Q650,88 800,50 Q950,12 1100,50" }),
            /* @__PURE__ */ jsx("path", { d: "M600,126 Q750,98 900,126 Q1050,154 1100,126" })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("circle", { cx: "100", cy: "88", r: "12", fill: "url(#neuronGlow)", className: "animate-ping", children: /* @__PURE__ */ jsx("animate", { attributeName: "r", values: "12;18;12", dur: "2.5s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("circle", { cx: "300", cy: "88", r: "10", fill: "#e24e1b", opacity: "0.7" }),
            /* @__PURE__ */ jsx("circle", { cx: "500", cy: "88", r: "14", fill: "url(#neuronGlow)", className: "animate-ping", style: { animationDelay: "0.8s" }, children: /* @__PURE__ */ jsx("animate", { attributeName: "r", values: "14;20;14", dur: "3s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("circle", { cx: "700", cy: "88", r: "10", fill: "#e24e1b", opacity: "0.7" }),
            /* @__PURE__ */ jsx("circle", { cx: "900", cy: "88", r: "12", fill: "url(#neuronGlow)", className: "animate-ping", style: { animationDelay: "1.6s" }, children: /* @__PURE__ */ jsx("animate", { attributeName: "r", values: "12;18;12", dur: "2.2s", repeatCount: "indefinite" }) }),
            /* @__PURE__ */ jsx("circle", { cx: "1100", cy: "88", r: "10", fill: "#e24e1b", opacity: "0.7" })
          ] }),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx("circle", { cx: "150", cy: "74", r: "2", fill: "#e24e1b", className: "animate-bounce", children: /* @__PURE__ */ jsx("animateMotion", { dur: "4s", repeatCount: "indefinite", children: /* @__PURE__ */ jsx("mpath", { href: "#path1" }) }) }),
            /* @__PURE__ */ jsx("circle", { cx: "400", cy: "100", r: "2", fill: "#ff6b3d", className: "animate-bounce", style: { animationDelay: "1s" }, children: /* @__PURE__ */ jsx("animateMotion", { dur: "5s", repeatCount: "indefinite", children: /* @__PURE__ */ jsx("mpath", { href: "#path2" }) }) })
          ] }),
          /* @__PURE__ */ jsxs("defs", { children: [
            /* @__PURE__ */ jsx("path", { id: "path1", d: "M100,88 Q200,60 300,88 Q400,116 500,88", fill: "none" }),
            /* @__PURE__ */ jsx("path", { id: "path2", d: "M300,106 Q450,80 600,106 Q750,132 900,106", fill: "none" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl px-4 relative z-10", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-2xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: cn(
          "p-8 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl shadow-lg transition-all duration-1000",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        ), children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6", children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-emerald-600 text-white border-0 font-semibold mx-auto w-fit", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 mr-1" }),
            "Transformation starten"
          ] }),
          /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900", children: [
            "Bereit für die ",
            /* @__PURE__ */ jsx("span", { className: "text-emerald-600", children: "Compliance-Innovation?" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 max-w-xl mx-auto", children: "Lassen Sie uns Ihre Compliance-Herausforderungen in effiziente, automatisierte Lösungen verwandeln." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center pt-4", children: [
            /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-brand-red to-orange-500 hover:from-brand-red/90 hover:to-orange-500/90 text-white px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto group hover:scale-105 transform relative overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
              /* @__PURE__ */ jsx(Rocket, { className: "mr-2 h-5 w-5 relative z-10" }),
              /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Kostenlose Demo" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/tools", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "px-8 py-3 text-base font-semibold border-2 border-brand-red/50 bg-white hover:bg-brand-red/10 hover:border-brand-red w-full sm:w-auto group hover:scale-105 transform relative overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-red/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
              /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-5 w-5 text-brand-red relative z-10" }),
              /* @__PURE__ */ jsx("span", { className: "text-brand-red relative z-10", children: "Tools entdecken" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 pt-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-500" }),
              /* @__PURE__ */ jsx("span", { children: "Keine Kreditkarte" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-500" }),
              /* @__PURE__ */ jsx("span", { children: "Sofort einsatzbereit" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-500" }),
              /* @__PURE__ */ jsx("span", { children: "DACH-optimiert" })
            ] })
          ] })
        ] }) }) }) })
      ]
    }
  );
};
const iso27001Domains = [
  {
    id: "information-security-policies",
    domain: "A.5",
    title: "Informationssicherheitsrichtlinien",
    description: "Managementrichtlinien für Informationssicherheit",
    controls: 2,
    implementation: "Vollständig implementiert",
    icon: FileCheck
  },
  {
    id: "organization-information-security",
    domain: "A.6",
    title: "Organisation der Informationssicherheit",
    description: "Interne Organisation und mobile Geräte",
    controls: 8,
    implementation: "Vollständig implementiert",
    icon: Users
  },
  {
    id: "human-resource-security",
    domain: "A.7",
    title: "Personalsicherheit",
    description: "Vor, während und nach der Beschäftigung",
    controls: 6,
    implementation: "Vollständig implementiert",
    icon: Shield
  },
  {
    id: "asset-management",
    domain: "A.8",
    title: "Asset Management",
    description: "Verantwortlichkeit für Assets und Medienhandhabung",
    controls: 10,
    implementation: "Vollständig implementiert",
    icon: Database
  },
  {
    id: "access-control",
    domain: "A.9",
    title: "Zugriffskontrolle",
    description: "Geschäftsanforderungen und Benutzerzugriffsmanagement",
    controls: 14,
    implementation: "Vollständig implementiert",
    icon: Lock
  },
  {
    id: "cryptography",
    domain: "A.10",
    title: "Kryptografie",
    description: "Kryptografische Kontrollen",
    controls: 2,
    implementation: "Vollständig implementiert",
    icon: Settings
  },
  {
    id: "physical-security",
    domain: "A.11",
    title: "Physische und umgebungsbezogene Sicherheit",
    description: "Sichere Bereiche und Geräteschutz",
    controls: 15,
    implementation: "Vollständig implementiert",
    icon: Shield
  },
  {
    id: "operations-security",
    domain: "A.12",
    title: "Betriebssicherheit",
    description: "Betriebsverfahren und Systemsicherheit",
    controls: 14,
    implementation: "Vollständig implementiert",
    icon: Settings
  },
  {
    id: "communications-security",
    domain: "A.13",
    title: "Kommunikationssicherheit",
    description: "Netzwerksicherheitsmanagement",
    controls: 7,
    implementation: "Vollständig implementiert",
    icon: Network
  },
  {
    id: "system-acquisition",
    domain: "A.14",
    title: "Systembeschaffung, -entwicklung und -wartung",
    description: "Sicherheitsanforderungen von Informationssystemen",
    controls: 13,
    implementation: "Vollständig implementiert",
    icon: Settings
  },
  {
    id: "supplier-relationships",
    domain: "A.15",
    title: "Lieferantenbeziehungen",
    description: "Informationssicherheit in Lieferantenbeziehungen",
    controls: 5,
    implementation: "Vollständig implementiert",
    icon: Users
  },
  {
    id: "incident-management",
    domain: "A.16",
    title: "Informationssicherheitsvorfälle",
    description: "Management von Informationssicherheitsvorfällen",
    controls: 7,
    implementation: "Vollständig implementiert",
    icon: AlertCircle
  },
  {
    id: "business-continuity",
    domain: "A.17",
    title: "Informationssicherheitsaspekte des Business Continuity Managements",
    description: "Informationssicherheit bei Unterbrechungen",
    controls: 4,
    implementation: "Vollständig implementiert",
    icon: Shield
  },
  {
    id: "compliance",
    domain: "A.18",
    title: "Compliance",
    description: "Einhaltung gesetzlicher und vertraglicher Anforderungen",
    controls: 7,
    implementation: "Vollständig implementiert",
    icon: FileCheck
  }
];
const ISO27001Section = () => {
  const [selectedDomain, setSelectedDomain] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  const totalControls = iso27001Domains.reduce((sum, domain) => sum + domain.controls, 0);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "py-12 bg-gradient-to-br from-white via-gray-50/50 to-white relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(226,78,27,0.03)_0%,transparent_50%)]" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:40px_40px]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-6xl", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "text-center mb-8 space-y-4",
              initial: { y: 20, opacity: 0 },
              animate: isVisible ? { y: 0, opacity: 1 } : {},
              transition: { duration: 0.6 },
              children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#e24e1b]/20 shadow-sm",
                    initial: { scale: 0.9, opacity: 0 },
                    animate: isVisible ? { scale: 1, opacity: 1 } : {},
                    transition: { duration: 0.5, delay: 0.1 },
                    children: [
                      /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-[#e24e1b]" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-gray-700", children: "ISO 27001 Zertifizierung" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-[#e24e1b] text-white text-xs px-2 py-0.5", children: "2024" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.h2,
                  {
                    className: "text-3xl md:text-4xl font-black text-gray-900",
                    initial: { y: 20, opacity: 0 },
                    animate: isVisible ? { y: 0, opacity: 1 } : {},
                    transition: { duration: 0.6, delay: 0.2 },
                    children: [
                      "ISO 27001 ",
                      /* @__PURE__ */ jsx("span", { className: "text-[#e24e1b]", children: "Compliance" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.p,
                  {
                    className: "text-base text-gray-600 max-w-2xl mx-auto",
                    initial: { y: 20, opacity: 0 },
                    animate: isVisible ? { y: 0, opacity: 1 } : {},
                    transition: { duration: 0.6, delay: 0.3 },
                    children: [
                      "Vollständige Umsetzung aller ",
                      /* @__PURE__ */ jsx("span", { className: "font-bold text-[#e24e1b]", children: "114 Kontrollen" }),
                      " für maximale Informationssicherheit im DACH-Raum."
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: [
            { label: "Kontrollen", value: totalControls.toString(), icon: FileCheck, gradient: "from-emerald-500 to-green-600" },
            { label: "Domains", value: "14", icon: Settings, gradient: "from-blue-500 to-cyan-600" },
            { label: "Implementierung", value: "Geplant", icon: CheckCircle2, gradient: "from-emerald-500 to-green-600" },
            { label: "Zertifiziert", value: "2024", icon: Shield, gradient: "from-[#e24e1b] to-orange-500" }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { scale: 0.8, opacity: 0 },
                animate: isVisible ? { scale: 1, opacity: 1 } : {},
                transition: { duration: 0.5, delay: index * 0.1 },
                whileHover: { scale: 1.02, y: -2 },
                className: "group cursor-pointer",
                children: /* @__PURE__ */ jsx(Card, { className: "p-4 text-center bg-white/60 backdrop-blur-sm border-white/60 shadow-sm hover:shadow-md transition-all duration-300 h-full", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("div", { className: `inline-flex p-2 rounded-xl bg-gradient-to-br ${stat.gradient} text-white`, children: /* @__PURE__ */ jsx(StatIcon, { className: "h-5 w-5" }) }),
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-black text-gray-900", children: isVisible && /* @__PURE__ */ jsx(
                    CountUp,
                    {
                      end: stat.value.includes("%") ? 100 : parseInt(stat.value),
                      duration: 1.5,
                      suffix: stat.value.includes("%") ? "%" : ""
                    }
                  ) }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-gray-600", children: stat.label })
                ] }) })
              },
              stat.label
            );
          }) }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "mb-8",
              initial: { y: 20, opacity: 0 },
              animate: isVisible ? { y: 0, opacity: 1 } : {},
              transition: { duration: 0.6, delay: 0.4 },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6 bg-white/70 backdrop-blur-sm border-white/60 shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
                  /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-[#e24e1b]" }),
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900", children: "ISO 27001:2022 Kontrollen" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 text-xs", children: iso27001Domains.map((domain, index) => /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { scale: 0.8, opacity: 0 },
                    animate: isVisible ? { scale: 1, opacity: 1 } : {},
                    transition: { duration: 0.3, delay: 0.5 + index * 0.02 },
                    whileHover: { scale: 1.05 },
                    className: "group cursor-pointer",
                    children: /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-gradient-to-br from-gray-50 to-white border border-gray-200/50 hover:border-[#e24e1b]/20 transition-all duration-200 hover:shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20 text-xs px-2 py-0.5 font-mono", children: domain.domain }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xs font-semibold text-gray-700 text-center leading-tight", children: [
                        domain.controls,
                        " Kontrollen"
                      ] }),
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-emerald-500" })
                    ] }) })
                  },
                  domain.id
                )) }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 pt-2 text-xs text-gray-600", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-emerald-500" }),
                    /* @__PURE__ */ jsx("span", { children: "Vollständig implementiert" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3 text-blue-500" }),
                    /* @__PURE__ */ jsx("span", { children: "Extern validiert & zertifiziert" })
                  ] })
                ] })
              ] }) })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "text-center",
              initial: { y: 20, opacity: 0 },
              animate: isVisible ? { y: 0, opacity: 1 } : {},
              transition: { duration: 0.6, delay: 0.5 },
              children: /* @__PURE__ */ jsx(Card, { className: "inline-block p-6 bg-white/70 backdrop-blur-sm border-white/60 shadow-sm max-w-2xl relative overflow-hidden group hover:shadow-md transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e24e1b]/10 border border-[#e24e1b]/20", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-[#e24e1b]" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-[#e24e1b]", children: "ISO 27001 Ready" }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-[#e24e1b] text-white text-xs px-2 py-0.5", children: "2024" })
                ] }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900", children: "ISO 27001 Zertifizierung starten?" }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 max-w-lg mx-auto", children: [
                  "Lassen Sie uns eine kostenlose Analyse Ihrer aktuellen Informationssicherheit durchführen.",
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: " Vollständig automatisiert und DACH-optimiert." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
                  /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true", children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      className: "bg-gradient-to-r from-[#e24e1b] to-orange-500 hover:from-[#e24e1b]/90 hover:to-orange-500/90 text-white px-6 py-2 font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]",
                      children: [
                        /* @__PURE__ */ jsx(Shield, { className: "mr-2 h-4 w-4" }),
                        "ISO 27001 Analyse",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(Link, { to: "/iso-27001-zertifizierung", children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      variant: "outline",
                      className: "px-6 py-2 font-semibold border border-gray-300 hover:bg-white hover:border-[#e24e1b] hover:text-[#e24e1b] transition-all duration-200",
                      children: [
                        /* @__PURE__ */ jsx(Eye, { className: "mr-2 h-4 w-4" }),
                        "Details ansehen"
                      ]
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 text-xs text-gray-600", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-emerald-500" }),
                    /* @__PURE__ */ jsx("span", { children: "Kostenlos" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-emerald-500" }),
                    /* @__PURE__ */ jsx("span", { children: "DACH-optimiert" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-emerald-500" }),
                    /* @__PURE__ */ jsx("span", { children: "Sofort verfügbar" })
                  ] })
                ] })
              ] }) })
            }
          )
        ] })
      ]
    }
  );
};
const NeuralNetwork = ({ intensity = 1 }) => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  useEffect(() => {
    const newNodes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      active: false
    }));
    const newConnections = [];
    for (let i = 0; i < newNodes.length; i++) {
      for (let j = i + 1; j < newNodes.length; j++) {
        if (Math.random() < 0.3) {
          newConnections.push({
            from: i,
            to: j,
            strength: Math.random()
          });
        }
      }
    }
    setNodes(newNodes);
    setConnections(newConnections);
    const interval = setInterval(() => {
      setNodes((prev) => prev.map((node) => ({
        ...node,
        active: Math.random() < 0.3 * intensity
      })));
    }, 800);
    return () => clearInterval(interval);
  }, [intensity]);
  return /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-20", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 100 100", preserveAspectRatio: "none", children: [
    connections.map((conn, i) => {
      const fromNode = nodes[conn.from];
      const toNode = nodes[conn.to];
      if (!fromNode || !toNode) return null;
      return /* @__PURE__ */ jsx(
        "line",
        {
          x1: fromNode.x,
          y1: fromNode.y,
          x2: toNode.x,
          y2: toNode.y,
          stroke: "rgba(147, 51, 234, 0.3)",
          strokeWidth: conn.strength * 0.5,
          className: "animate-pulse",
          style: { animationDelay: `${i * 0.1}s` }
        },
        i
      );
    }),
    nodes.map((node) => /* @__PURE__ */ jsx(
      "circle",
      {
        cx: node.x,
        cy: node.y,
        r: node.active ? "1.5" : "1",
        fill: node.active ? "#8B5CF6" : "#E0E7FF",
        className: "transition-all duration-300"
      },
      node.id
    ))
  ] }) });
};
const RiskThermometer = ({ level, animated = true }) => {
  const [displayLevel, setDisplayLevel] = useState(0);
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayLevel(level);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setDisplayLevel(level);
    }
  }, [level, animated]);
  const getColor = (level2) => {
    if (level2 >= 90) return "from-red-500 to-red-600";
    if (level2 >= 70) return "from-orange-500 to-red-500";
    if (level2 >= 40) return "from-yellow-500 to-orange-500";
    return "from-green-500 to-yellow-500";
  };
  return /* @__PURE__ */ jsxs("div", { className: "relative w-6 h-32 bg-gray-200 rounded-full overflow-hidden", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "absolute bottom-0 w-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-t",
          getColor(displayLevel)
        ),
        style: { height: `${displayLevel}%` }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 rounded-full" })
  ] });
};
const AIBrain = ({ active = false }) => {
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      Brain,
      {
        className: cn(
          "h-8 w-8 transition-all duration-1000",
          active ? "text-purple-500 scale-110" : "text-purple-400"
        )
      }
    ),
    active && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-purple-500/20 rounded-full animate-ping" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-purple-500/30 rounded-full animate-pulse" })
    ] })
  ] });
};
const aiRiskCategories = [
  {
    id: "unacceptable",
    level: "unacceptable",
    title: "Unannehmbares Risiko",
    description: "KI-Systeme, die vollständig verboten sind",
    examples: [
      "Soziale Bewertung durch öffentliche Stellen",
      "Biometrische Identifizierung in Echtzeit im öffentlichen Raum",
      "Manipulation von Verhalten durch unterschwellige Techniken"
    ],
    requirements: [
      "Vollständiges Verbot",
      "Keine Ausnahmen"
    ],
    riskScore: 100,
    color: {
      bg: "bg-red-500/10",
      text: "text-red-600",
      border: "border-red-500/30",
      gradient: "from-red-500/20 to-red-600/30"
    }
  },
  {
    id: "high",
    level: "high",
    title: "Hohes Risiko",
    description: "KI-Systeme mit strengen Compliance-Auflagen",
    examples: [
      "Biometrische Identifizierung und Kategorisierung",
      "Management kritischer Infrastruktur",
      "Bildung und Berufsausbildung",
      "Beschäftigung und Personalmanagement",
      "Kreditwürdigkeit und Versicherungen"
    ],
    requirements: [
      "Konformitätsbewertung",
      "CE-Kennzeichnung",
      "Risikomanagementsystem",
      "Datenqualität und -governance",
      "Dokumentation und Aufzeichnungen",
      "Transparenz und Bereitstellung von Informationen",
      "Menschliche Aufsicht",
      "Genauigkeit, Robustheit und Cybersicherheit"
    ],
    riskScore: 85,
    color: {
      bg: "bg-orange-500/10",
      text: "text-orange-600",
      border: "border-orange-500/30",
      gradient: "from-orange-500/20 to-red-500/30"
    }
  },
  {
    id: "limited",
    level: "limited",
    title: "Begrenztes Risiko",
    description: "KI-Systeme mit Transparenzpflichten",
    examples: [
      "Chatbots und Sprachassistenten",
      "Emotionserkennungssysteme",
      "Biometrische Kategorisierungssysteme",
      "KI-generierte Inhalte (Deepfakes)"
    ],
    requirements: [
      "Transparenzpflichten",
      "Nutzerinformation über KI-Einsatz",
      "Klare Kennzeichnung von KI-generierten Inhalten"
    ],
    riskScore: 45,
    color: {
      bg: "bg-yellow-500/10",
      text: "text-yellow-600",
      border: "border-yellow-500/30",
      gradient: "from-yellow-500/20 to-orange-500/30"
    }
  },
  {
    id: "minimal",
    level: "minimal",
    title: "Minimales Risiko",
    description: "KI-Systeme ohne spezielle Auflagen",
    examples: [
      "KI-gestützte Videospiele",
      "Spam-Filter",
      "Inventarverwaltungssysteme"
    ],
    requirements: [
      "Freiwillige Verhaltenskodizes",
      "Keine gesetzlichen Verpflichtungen"
    ],
    riskScore: 15,
    color: {
      bg: "bg-green-500/10",
      text: "text-green-600",
      border: "border-green-500/30",
      gradient: "from-green-500/20 to-yellow-500/30"
    }
  }
];
const EUAIActSection = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [brainActive, setBrainActive] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setBrainActive(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (isVisible) {
      setBrainActive(true);
    }
  }, [isVisible]);
  const selectedRisk = aiRiskCategories[selectedCategory];
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx(NeuralNetwork, { intensity: isVisible ? 0.5 : 0 }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-100/30 to-indigo-100/30 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-100/25 to-purple-100/25 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 space-y-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-4", children: /* @__PURE__ */ jsx(AIBrain, { active: brainActive }) }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-500/10 text-purple-600 border-purple-500/20 text-sm backdrop-blur-sm", children: [
              /* @__PURE__ */ jsx(Brain, { className: "w-4 h-4 mr-1" }),
              "EU AI Act Compliance"
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900", children: [
              "KI-Risiko ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent", children: "Klassifizierung" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed", children: "Vollständige Unterstützung für die EU-Verordnung über Künstliche Intelligenz. Automatische Risikoklassifizierung und Compliance-Management für KI-Systeme." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12", children: [
            /* @__PURE__ */ jsx("div", { className: "lg:col-span-2 space-y-4", children: /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-white/80 backdrop-blur-sm border-white/60 shadow-xl", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx(Scale, { className: "h-6 w-6 text-purple-600" }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900", children: "KI-Risikoklassifizierung" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: aiRiskCategories.map((category, index) => {
                const isActive = selectedCategory === index;
                return /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "p-4 rounded-lg border-2 transition-all duration-500 cursor-pointer",
                      isActive ? `bg-gradient-to-r ${category.color.gradient} ${category.color.border} shadow-lg scale-105` : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                    ),
                    onClick: () => setSelectedCategory(index),
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx(RiskThermometer, { level: category.riskScore, animated: isActive }) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                          category.level === "unacceptable" && /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400" }),
                          category.level === "high" && /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-400" }),
                          category.level === "limited" && /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5 text-yellow-400" }),
                          category.level === "minimal" && /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-400" }),
                          /* @__PURE__ */ jsxs(Badge, { className: cn(
                            "text-xs px-2 py-1",
                            isActive ? "bg-white/90 text-gray-900" : category.color.bg + " " + category.color.text
                          ), children: [
                            category.riskScore,
                            "% RISK"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("h4", { className: cn(
                          "font-semibold mb-1",
                          isActive ? "text-gray-900" : "text-gray-900"
                        ), children: category.title }),
                        /* @__PURE__ */ jsx("p", { className: cn(
                          "text-sm",
                          isActive ? "text-gray-700" : "text-gray-600"
                        ), children: category.description })
                      ] })
                    ] })
                  },
                  category.id
                );
              }) })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx(Card, { className: "p-6 bg-white/80 backdrop-blur-sm border-white/60 shadow-xl", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: cn(
                    "p-2 rounded-lg",
                    selectedRisk.color.bg
                  ), children: [
                    selectedRisk.level === "unacceptable" && /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-600" }),
                    selectedRisk.level === "high" && /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-600" }),
                    selectedRisk.level === "limited" && /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5 text-yellow-600" }),
                    selectedRisk.level === "minimal" && /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600" })
                  ] }),
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-gray-900", children: selectedRisk.title })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-purple-600 mb-2", children: "Beispiele:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: selectedRisk.examples.slice(0, 3).map((example, i) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-gray-600 flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-purple-500 rounded-full mt-2 flex-shrink-0" }),
                      example
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-purple-600 mb-2", children: "Anforderungen:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: selectedRisk.requirements.slice(0, 3).map((req, i) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-gray-600 flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" }),
                      req
                    ] }, i)) })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-white/80 backdrop-blur-sm border-white/60 shadow-xl", children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-purple-600" }),
                  "EU AI Act Zeitplan"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: [
                  { date: "Feb 2025", event: "Verbotene KI-Systeme", status: "active" },
                  { date: "Aug 2026", event: "Hochrisiko-KI-Systeme", status: "upcoming" },
                  { date: "Aug 2027", event: "Vollständige Anwendung", status: "upcoming" }
                ].map((milestone, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "w-2 h-2 rounded-full",
                    milestone.status === "active" ? "bg-purple-500" : "bg-gray-400"
                  ) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-gray-900", children: milestone.date }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: milestone.event })
                  ] })
                ] }, i)) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Card, { className: "inline-block p-8 bg-white/80 backdrop-blur-sm border-white/60 shadow-xl max-w-3xl relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50" }),
            /* @__PURE__ */ jsxs("div", { className: "relative space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
                /* @__PURE__ */ jsx(AIBrain, { active: true }),
                /* @__PURE__ */ jsx(Badge, { className: "bg-purple-500/10 text-purple-600 border-purple-500/20 text-sm", children: "EU AI Act Ready 2025" })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900", children: "Bereit für KI-Compliance?" }),
              /* @__PURE__ */ jsxs("p", { className: "text-gray-600 max-w-2xl mx-auto", children: [
                "Lassen Sie uns eine kostenlose Bewertung Ihrer KI-Systeme nach EU AI Act Kriterien durchführen.",
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: " Automatische Risikoklassifizierung inklusive." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-600/90 hover:to-pink-600/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group", children: [
                  /* @__PURE__ */ jsx(Brain, { className: "mr-2 h-5 w-5" }),
                  "KI-Risiko Bewertung",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                ] }) }),
                /* @__PURE__ */ jsx(Link, { to: "/ki/ki-risikoklassifizierung", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "px-8 py-3 text-lg font-semibold border-2 border-purple-500 text-purple-600 hover:bg-purple-50 hover:border-purple-600 transition-all duration-300", children: [
                  /* @__PURE__ */ jsx(Scale, { className: "mr-2 h-5 w-5" }),
                  "Mehr Details"
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-6 text-sm text-gray-600", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-500" }),
                  /* @__PURE__ */ jsx("span", { children: "Kostenlos" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-500" }),
                  /* @__PURE__ */ jsx("span", { children: "Automatisiert" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-500" }),
                  /* @__PURE__ */ jsx("span", { children: "EU-konform" })
                ] })
              ] })
            ] })
          ] }) })
        ] })
      ]
    }
  );
};
const CTASection = () => {
  return null;
};
const showcaseData = [
  {
    metric: "Demo Score",
    value: "Preview",
    change: "Mode",
    icon: Shield,
    color: "text-green-600"
  },
  {
    metric: "Automatisierung",
    value: "89%",
    change: "+45.2%",
    icon: Zap,
    color: "text-blue-600"
  },
  {
    metric: "Beta Community",
    value: "Early",
    change: "Adopter",
    icon: Users,
    color: "text-purple-600"
  },
  {
    metric: "Zeit Ersparnis",
    value: "127h",
    change: "+67.8%",
    icon: Clock,
    color: "text-orange-600"
  }
];
const benefits$1 = [
  {
    title: "KI-gestützte Automatisierung",
    description: "Intelligente Workflows zur Reduzierung manueller Arbeit (in Entwicklung)",
    href: "/tools/compliance-ai-assistant"
  },
  {
    title: "Echtzeit-Monitoring",
    description: "Monitoring-System mit Benachrichtigungen (Roadmap 2025)",
    href: "/dashboard"
  },
  {
    title: "Multi-Framework Support",
    description: "DSGVO, ISO 27001, SOC 2, TISAX und weitere in einer Plattform",
    href: "/wissen/zertifizierungen"
  },
  {
    title: "Europäische Datensicherheit",
    description: "DSGVO-konforme Datenverarbeitung in europäischen Rechenzentren",
    href: "/branchen"
  }
];
const InteractiveShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [counters, setCounters] = useState({});
  const sectionRef = useRef(null);
  const intervalRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            startCounterAnimations();
            startMetricRotation();
          }
        });
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);
  const startCounterAnimations = () => {
    showcaseData.forEach((item, index) => {
      const numericValue = parseFloat(item.value.replace(/[^\d.]/g, ""));
      let currentValue = 0;
      const increment = numericValue / 50;
      const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= numericValue) {
          currentValue = numericValue;
          clearInterval(counter);
        }
        setCounters((prev) => ({
          ...prev,
          [item.metric]: currentValue
        }));
      }, 40);
    });
  };
  const startMetricRotation = () => {
    intervalRef.current = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % showcaseData.length);
    }, 3e3);
  };
  const formatValue = (metric, value) => {
    var _a;
    const originalValue = ((_a = showcaseData.find((item) => item.metric === metric)) == null ? void 0 : _a.value) || "";
    if (originalValue.includes("%")) {
      return `${value.toFixed(1)}%`;
    } else if (originalValue.includes("K")) {
      return `${(value / 1e3).toFixed(1)}K`;
    } else if (originalValue.includes("h")) {
      return `${Math.round(value)}h`;
    }
    return Math.round(value).toString();
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "py-12 bg-gradient-to-b from-white via-[#E6F2FF]/20 to-white relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.02)_0%,transparent_50%)]" }) }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary border-primary/20", children: [
                /* @__PURE__ */ jsx(BarChart3, { className: "w-4 h-4 mr-1" }),
                "Live Dashboard"
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-foreground", children: [
                "Compliance in ",
                /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Echtzeit" }),
                " verfolgen"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground", children: "Behalten Sie den Überblick über alle Compliance-Metriken mit unserem interaktiven Dashboard und KI-gestützten Insights." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-3", children: showcaseData.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeMetric === index;
              const currentValue = counters[item.metric] || 0;
              return /* @__PURE__ */ jsx(
                Card,
                {
                  className: cn(
                    "p-3 bg-white/60 backdrop-blur-sm border-white/60 shadow-sm cursor-pointer transition-all duration-300 relative overflow-hidden hover:shadow-md",
                    isActive && "ring-2 ring-primary/50 scale-102"
                  ),
                  onClick: () => setActiveMetric(index),
                  children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx(Icon, { className: cn("h-4 w-4", item.color) }),
                      /* @__PURE__ */ jsx("span", { className: "text-xs text-green-600 font-medium", children: item.change })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-card-foreground", children: isVisible ? formatValue(item.metric, currentValue) : "0" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: item.metric })
                  ] })
                },
                item.metric
              );
            }) }),
            /* @__PURE__ */ jsx("div", { className: "pt-2", children: /* @__PURE__ */ jsx(Link, { to: "/dashboard", children: /* @__PURE__ */ jsxs(Button, { className: "bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]", children: [
              /* @__PURE__ */ jsx(Play, { className: "mr-2 h-4 w-4" }),
              "Live Demo ansehen",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            benefits$1.map((benefit, index) => /* @__PURE__ */ jsx(
              Card,
              {
                className: "p-4 bg-white/60 backdrop-blur-sm border-white/60 shadow-sm group cursor-pointer hover:shadow-md transition-all duration-200",
                children: /* @__PURE__ */ jsx(Link, { to: benefit.href, className: "block", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-primary" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200", children: benefit.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-sm", children: benefit.description })
                  ] }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" })
                ] }) })
              },
              benefit.title
            )),
            /* @__PURE__ */ jsx(Card, { className: "p-4 bg-primary/5 border-primary/20 mt-4", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center space-x-2", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "Entwickelt für moderne EU-Unternehmen" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-primary", children: "Gestalten Sie Compliance-Innovation mit" })
            ] }) })
          ] })
        ] }) })
      ]
    }
  );
};
const useIntersectionObserver = (elementRef, options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px"
      }
    );
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options.threshold, options.rootMargin, hasAnimated]);
  return { isVisible, hasAnimated };
};
const securityFeatures = [
  {
    id: "encryption",
    title: "End-to-End Verschlüsselung",
    description: "AES-256 Verschlüsselung für alle Daten im Transit und at Rest mit Hardware Security Modules.",
    icon: Lock,
    gradient: "from-blue-500/20 to-cyan-600/20",
    metrics: [
      { label: "Verschlüsselung", value: "AES-256" },
      { label: "Key Management", value: "HSM" },
      { label: "Rotation", value: "Automatisch" }
    ]
  },
  {
    id: "infrastructure",
    title: "EU-Infrastruktur",
    description: "Ausschließlich europäische Rechenzentren mit DSGVO-konformer Datenverarbeitung.",
    icon: Server,
    gradient: "from-green-500/20 to-emerald-600/20",
    metrics: [
      { label: "Standorte", value: "EU-Only" },
      { label: "Verfügbarkeit", value: "99.9%" },
      { label: "Latenz", value: "<50ms" }
    ]
  },
  {
    id: "monitoring",
    title: "24/7 Security Monitoring",
    description: "Kontinuierliche Überwachung mit KI-gestützter Anomalieerkennung und Incident Response.",
    icon: Eye,
    gradient: "from-purple-500/20 to-indigo-600/20",
    metrics: [
      { label: "Monitoring", value: "24/7" },
      { label: "Response Time", value: "<5 Min." },
      { label: "Detection Rate", value: "99.8%" }
    ]
  },
  {
    id: "access",
    title: "Zero-Trust Architektur",
    description: "Multi-Faktor-Authentifizierung und rollenbasierte Zugriffskontrolle für maximale Sicherheit.",
    icon: Shield,
    gradient: "from-red-500/20 to-rose-600/20",
    metrics: [
      { label: "Auth Faktoren", value: "Multi-FA" },
      { label: "Sessions", value: "Temporal" },
      { label: "Audit Trail", value: "100%" }
    ]
  }
];
const certifications = [
  {
    id: "iso27001",
    name: "ISO 27001",
    description: "Informationssicherheits-Managementsystem",
    icon: Award,
    status: "certified",
    level: "Enterprise"
  },
  {
    id: "soc2",
    name: "SOC 2 Type II",
    description: "Service Organization Control Bericht",
    icon: FileCheck,
    status: "certified",
    level: "Type II"
  },
  {
    id: "gdpr",
    name: "DSGVO Konform",
    description: "Vollständige DSGVO-Compliance",
    icon: Globe,
    status: "certified",
    level: "EU-Weit"
  },
  {
    id: "tisax",
    name: "TISAX",
    description: "Automotive Security Standard",
    icon: Shield,
    status: "in-progress",
    level: "AL3"
  }
];
const statusColors = {
  certified: { bg: "bg-green-500/10", text: "text-green-600", border: "border-green-500/20" },
  "in-progress": { bg: "bg-blue-500/10", text: "text-blue-600", border: "border-blue-500/20" },
  planned: { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-500/20" }
};
const statusLabels = {
  certified: "Zertifiziert",
  "in-progress": "In Arbeit",
  planned: "Geplant"
};
const TrustSecurity = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [visibleElements, setVisibleElements] = useState(/* @__PURE__ */ new Set());
  const sectionRef = useRef(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  useEffect(() => {
    if (isVisible) {
      securityFeatures.forEach((feature, index) => {
        setTimeout(() => {
          setVisibleElements((prev) => /* @__PURE__ */ new Set([...prev, feature.id]));
        }, index * 150);
      });
      certifications.forEach((cert, index) => {
        setTimeout(() => {
          setVisibleElements((prev) => /* @__PURE__ */ new Set([...prev, cert.id]));
        }, (securityFeatures.length + index) * 150);
      });
      const interval = setInterval(() => {
        setActiveFeature((prev) => (prev + 1) % securityFeatures.length);
      }, 4e3);
      return () => clearInterval(interval);
    }
  }, [isVisible]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "py-12 bg-gradient-to-b from-white via-[#E6F2FF]/20 to-white relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(34,197,94,0.02)_0%,transparent_50%)]" }) }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 space-y-4", children: [
            /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary border-primary/20", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 mr-1" }),
              "Sicherheit & Vertrauen"
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-foreground", children: [
              "Enterprise-Grade ",
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Sicherheit" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground max-w-2xl mx-auto", children: "Ihre Daten sind bei uns in sicheren Händen. Mit höchsten Sicherheitsstandards und europäischen Rechenzentren gewährleisten wir maximalen Schutz." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsx(Card, { className: "p-6 bg-white/70 backdrop-blur-sm border-white/60 shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-card-foreground mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-primary" }),
                "Security Dashboard"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: [
                { label: "Uptime", value: "99.99%", icon: TrendingUp, color: "text-green-600" },
                { label: "Threats Blocked", value: "1.2M+", icon: Shield, color: "text-blue-600" },
                { label: "Data Centers", value: "5 EU", icon: Server, color: "text-purple-600" },
                { label: "Compliance Score", value: "100%", icon: CheckCircle2, color: "text-green-600" }
              ].map((metric, index) => {
                const MetricIcon = metric.icon;
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "p-3 rounded-lg bg-white/80 border border-gray-200/50 text-center hover:shadow-sm transition-all duration-200",
                    children: [
                      /* @__PURE__ */ jsx(MetricIcon, { className: cn("h-4 w-4 mx-auto mb-1", metric.color) }),
                      /* @__PURE__ */ jsx("div", { className: "text-base font-bold text-card-foreground", children: metric.value }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: metric.label })
                    ]
                  },
                  metric.label
                );
              }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-base font-semibold text-card-foreground mb-3", children: "Security Features" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "p-3 rounded-lg bg-white/80 border border-gray-200/50 hover:shadow-sm transition-all duration-200",
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-1.5 rounded-lg bg-primary/10", children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4 text-primary" }) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-1", children: [
                        /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-card-foreground", children: feature.title }),
                        /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
                          feature.description.split(".")[0],
                          "."
                        ] })
                      ] })
                    ] })
                  },
                  feature.id
                );
              }) })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsx(Card, { className: "p-6 bg-white/70 backdrop-blur-sm border-white/60 shadow-sm", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground mb-4", children: "Zertifizierungen & Standards" }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: certifications.map((cert, index) => {
              const Icon = cert.icon;
              const statusStyle = statusColors[cert.status];
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "p-3 text-center bg-white/80 border border-gray-200/50 rounded-lg hover:shadow-sm transition-all duration-200",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-primary/10 w-fit mx-auto mb-2", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-card-foreground mb-1", children: cert.name }),
                    /* @__PURE__ */ jsx(
                      Badge,
                      {
                        className: cn(
                          "text-xs",
                          statusStyle.bg,
                          statusStyle.text,
                          statusStyle.border
                        ),
                        children: statusLabels[cert.status]
                      }
                    ),
                    cert.level && /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground mt-1", children: cert.level })
                  ]
                },
                cert.id
              );
            }) })
          ] }) }) }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Card, { className: "inline-block p-6 bg-white/70 backdrop-blur-sm border-white/60 shadow-sm max-w-2xl hover:shadow-md transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-primary/10", children: /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-primary" }) }),
              /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-secondary/10", children: /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-secondary" }) }),
              /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-accent/10", children: /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5 text-accent" }) })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-card-foreground", children: "Vertrauen durch Transparenz" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-lg mx-auto", children: "Bei Marsstein setzen wir auf höchste Sicherheitsstandards und vollständige Transparenz. Ihre Daten bleiben in Europa, sind verschlüsselt und werden niemals für andere Zwecke verwendet." }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-secondary" }),
                "EU-DSGVO konform"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-secondary" }),
                "Open Source Audit"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-secondary" }),
                "Penetration Tests"
              ] })
            ] })
          ] }) }) })
        ] })
      ]
    }
  );
};
const faqs = [
  {
    id: "1",
    question: "Wie soll die KI-gestützte Compliance-Automatisierung funktionieren?",
    answer: "Unsere Vision: KI, die Datenflüsse und Prozesse analysiert. Das Ziel ist die automatische Identifikation von Compliance-Lücken und Standards-konforme Empfehlungen. Status: Beta-Phase mit ausgewählten Partnern zur Entwicklung des Machine Learning Algorithmus.",
    category: "technical",
    relatedLink: { text: "KI-Roadmap entdecken", href: "/tools/compliance-ai-assistant" },
    isPopular: true
  },
  {
    id: "2",
    question: "Welche Compliance-Standards sollen unterstützt werden?",
    answer: "Roadmap: Entwicklung für DSGVO, EU AI Act, ISO 27001, SOC 2 und weitere Standards. MVP startet mit DSGVO-Grundlagen. Vision: Automatische Anpassung an lokale Gesetze und branchenspezifische Anforderungen. Timeline: Schrittweise Erweiterung 2025.",
    category: "compliance",
    relatedLink: { text: "Standards-Roadmap ansehen", href: "/wissen/zertifizierungen" },
    isPopular: true
  },
  {
    id: "3",
    question: "Wie sicher werden meine Daten bei Marsstein sein?",
    answer: "Sicherheitskonzept: AES-256 Verschlüsselung und ausschließlich europäische Rechenzentren. Ziel: ISO 27001 und SOC 2 Konformität mit Zero-Trust Architektur. Roadmap: Kontinuierliches Security Monitoring. Alle Entwicklungsprozesse folgen höchsten Sicherheitsstandards.",
    category: "security",
    relatedLink: { text: "Sicherheitskonzept", href: "/branchen" },
    isPopular: true
  },
  {
    id: "4",
    question: "Wie soll die Implementierung ablaufen?",
    answer: "Geplante Implementierung: 2-4 Wochen für MVP-Features. Vision: KI-gestützte Datenanalyse und vorkonfigurierte Templates für schnelle erste Audits. Beta-Phase: Erprobung mit ausgewählten Partnern. Enterprise-Roadmap: Dedizierte Onboarding-Unterstützung.",
    category: "technical",
    relatedLink: { text: "Beta-Zugang anfragen", href: "/contact?demo=true" }
  },
  {
    id: "5",
    question: "Welche Kostenersparnis ist das Ziel?",
    answer: "Vision: Signifikante Kostenreduktion bei Compliance-Prozessen durch Automatisierung. Ziel: Deutliche Zeitersparnis bei Routine-Audits. Potenzial: Reduzierte externe Beratungskosten. Status: Konzeptstudien in Vorbereitung.",
    category: "pricing",
    relatedLink: { text: "Potenzial-Rechner", href: "/pricing" }
  },
  {
    id: "6",
    question: "Wird Marsstein Multi-Tenant Szenarien unterstützen?",
    answer: "Roadmap: Vollständige Multi-Tenant Architektur mit granularer Rechteverwaltung. Ziel: Separate Verwaltung für Geschäftsbereiche und Tochtergesellschaften. Vision: Zentrale Compliance-Übersicht für Konzerne. Status: Entwicklung für Enterprise-Features.",
    category: "technical",
    relatedLink: { text: "Enterprise-Roadmap", href: "/branchen" }
  },
  {
    id: "7",
    question: "Wie aktuell werden die Compliance-Informationen sein?",
    answer: "Vision: KI-Überwachung von Gesetzesänderungen aus europäischen Ländern. Ziel: Automatische Integration regulatorischer Updates. Geplant: Proaktive Benachrichtigungen für relevante Änderungen. Status: Legal-Team Aufbau für Update-Validierung.",
    category: "compliance",
    relatedLink: { text: "Legal-Roadmap", href: "/wissen/rechtsprechung" }
  },
  {
    id: "8",
    question: "Wird es eine mobile App geben?",
    answer: "Roadmap: Mobile App für Compliance-Management unterwegs. Geplante Features: Audit-Durchführung, Benachrichtigungen und Dokumentation. Vision: Offline-Workflows mit automatischer Synchronisation. Timeline: Mobile App-Entwicklung nach MVP-Launch.",
    category: "technical",
    relatedLink: { text: "Mobile Roadmap", href: "/tools" }
  }
];
const categories = [
  { id: "all", name: "Alle", icon: HelpCircle, color: "text-primary", count: faqs.length },
  { id: "technical", name: "Technisch", icon: Zap, color: "text-blue-600", count: faqs.filter((f) => f.category === "technical").length },
  { id: "compliance", name: "Compliance", icon: BookOpen, color: "text-green-600", count: faqs.filter((f) => f.category === "compliance").length },
  { id: "security", name: "Sicherheit", icon: Brain, color: "text-purple-600", count: faqs.filter((f) => f.category === "security").length },
  { id: "pricing", name: "Preise", icon: MessageSquare, color: "text-orange-600", count: faqs.filter((f) => f.category === "pricing").length }
];
const SmartFAQ = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [visibleFAQs, setVisibleFAQs] = useState(/* @__PURE__ */ new Set());
  const sectionRef = useRef(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const filteredFAQs = activeCategory === "all" ? faqs : faqs.filter((faq) => faq.category === activeCategory);
  useEffect(() => {
    if (isVisible) {
      filteredFAQs.forEach((faq, index) => {
        setTimeout(() => {
          setVisibleFAQs((prev) => /* @__PURE__ */ new Set([...prev, faq.id]));
        }, index * 100);
      });
    }
  }, [isVisible, filteredFAQs]);
  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "py-12 bg-gradient-to-b from-white via-[#E6F2FF]/10 to-white relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.02)_0%,transparent_50%)]" }) }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8 space-y-4", children: [
            /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary border-primary/20", children: [
              /* @__PURE__ */ jsx(HelpCircle, { className: "w-4 h-4 mr-1" }),
              "Häufige Fragen"
            ] }),
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold text-foreground", children: [
              "Antworten auf Ihre ",
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "wichtigsten Fragen" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-base text-muted-foreground max-w-2xl mx-auto", children: "Alles was Sie über Marsstein wissen müssen - von technischen Details bis hin zu Compliance-Anforderungen." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-8", children: categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return /* @__PURE__ */ jsxs(
              Button,
              {
                onClick: () => setActiveCategory(category.id),
                variant: isActive ? "default" : "outline",
                size: "sm",
                className: cn(
                  "transition-all duration-200",
                  isActive ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm" : "border-gray-300 hover:border-primary hover:text-primary"
                ),
                children: [
                  /* @__PURE__ */ jsx(Icon, { className: "w-3 h-3 mr-1" }),
                  category.name,
                  /* @__PURE__ */ jsx(
                    Badge,
                    {
                      variant: "secondary",
                      className: "ml-1 text-xs px-1.5 py-0.5",
                      children: category.count
                    }
                  )
                ]
              },
              category.id
            );
          }) }),
          /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto space-y-3 mb-8", children: filteredFAQs.map((faq, index) => {
            var _a;
            const isOpen = openFAQ === faq.id;
            visibleFAQs.has(faq.id);
            return /* @__PURE__ */ jsxs(
              Card,
              {
                className: cn(
                  "bg-white/70 backdrop-blur-sm border-white/60 shadow-sm transition-all duration-200 overflow-hidden hover:shadow-md",
                  isOpen && "ring-2 ring-primary/50"
                ),
                children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: () => toggleFAQ(faq.id),
                      className: "w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg",
                      children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex-1 pr-4", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                            faq.isPopular && /* @__PURE__ */ jsxs(Badge, { className: "bg-secondary/10 text-secondary border-secondary/20 text-xs px-2 py-0.5", children: [
                              /* @__PURE__ */ jsx(Sparkles, { className: "w-2 h-2 mr-1" }),
                              "Beliebt"
                            ] }),
                            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase font-medium", children: (_a = categories.find((c) => c.id === faq.category)) == null ? void 0 : _a.name })
                          ] }),
                          /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-card-foreground", children: faq.question })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: cn(
                          "p-1.5 rounded-full bg-primary/10 transition-all duration-200",
                          isOpen && "bg-primary text-primary-foreground rotate-180"
                        ), children: isOpen ? /* @__PURE__ */ jsx(ChevronUp, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "w-4 h-4" }) })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  ), children: /* @__PURE__ */ jsxs("div", { className: "px-4 pb-4 space-y-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-border to-transparent" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: faq.answer }),
                    faq.relatedLink && /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: faq.relatedLink.href,
                        className: "inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium group",
                        children: [
                          faq.relatedLink.text,
                          /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3 group-hover:translate-x-1 transition-transform" })
                        ]
                      }
                    )
                  ] }) })
                ]
              },
              faq.id
            );
          }) }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Card, { className: "inline-block p-6 bg-white/70 backdrop-blur-sm border-white/60 shadow-sm max-w-2xl hover:shadow-md transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-primary/10", children: /* @__PURE__ */ jsx(MessageSquare, { className: "h-5 w-5 text-primary" }) }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-secondary/10 text-secondary border-secondary/20 text-xs px-2 py-0.5", children: "Beta Support" })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-card-foreground", children: "Ihre Frage nicht dabei?" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground max-w-lg mx-auto", children: "Unser Entwicklungsteam hilft Ihnen gerne weiter. Kontaktieren Sie uns für eine persönliche Beta-Beratung oder Roadmap-Demo." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
              /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(Button, { className: "bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]", children: [
                /* @__PURE__ */ jsx(MessageSquare, { className: "mr-2 h-4 w-4" }),
                "Frage stellen"
              ] }) }),
              /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "px-6 py-2 font-semibold border border-gray-300 hover:bg-white hover:border-primary hover:text-primary transition-all duration-200", children: [
                "Persönliche Demo",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] })
          ] }) }) })
        ] })
      ]
    }
  );
};
const benefits = [
  {
    id: "ai-insights",
    icon: Brain,
    title: "KI-Powered Insights",
    description: "Personalisierte Compliance-Trends und Empfehlungen basierend auf Ihrer Branche.",
    gradient: "from-purple-500/20 to-indigo-600/20"
  },
  {
    id: "regulatory-updates",
    icon: Bell,
    title: "Regulatorische Updates",
    description: "Sofortige Benachrichtigungen über neue Gesetze und Änderungen in der EU.",
    gradient: "from-blue-500/20 to-cyan-600/20"
  },
  {
    id: "market-trends",
    icon: TrendingUp,
    title: "Markt-Trends",
    description: "Exklusive Analysen zu Compliance-Entwicklungen und Best Practices.",
    gradient: "from-green-500/20 to-emerald-600/20"
  },
  {
    id: "expert-content",
    icon: BookOpen,
    title: "Experten-Content",
    description: "Tiefgehende Guides und Tutorials von unseren Compliance-Experten.",
    gradient: "from-amber-500/20 to-orange-600/20"
  }
];
const contentPreviews = [
  {
    id: "weekly-digest",
    type: "insight",
    title: "Wöchentlicher Compliance-Digest",
    description: "Die wichtigsten Entwicklungen der Woche, kuratiert für Ihre Branche.",
    frequency: "Jeden Montag",
    icon: Calendar
  },
  {
    id: "regulatory-alerts",
    type: "alert",
    title: "Regulatory Flash Alerts",
    description: "Sofortige Updates bei kritischen Gesetzesänderungen oder neuen Vorschriften.",
    frequency: "Bei Bedarf",
    icon: Bell
  },
  {
    id: "deep-dive",
    type: "guide",
    title: "Deep Dive Guides",
    description: "Detaillierte Implementierungsleitfäden für neue Compliance-Anforderungen.",
    frequency: "Monatlich",
    icon: BookOpen
  },
  {
    id: "security-briefing",
    type: "update",
    title: "Security Briefings",
    description: "Aktuelle Bedrohungen und Sicherheitsempfehlungen für Ihr Unternehmen.",
    frequency: "2x monatlich",
    icon: Shield
  }
];
const typeColors = {
  insight: { bg: "bg-purple-500/10", text: "text-purple-600", border: "border-purple-500/20" },
  update: { bg: "bg-blue-500/10", text: "text-blue-600", border: "border-blue-500/20" },
  guide: { bg: "bg-green-500/10", text: "text-green-600", border: "border-green-500/20" },
  alert: { bg: "bg-red-500/10", text: "text-red-600", border: "border-red-500/20" }
};
const typeLabels = {
  insight: "Insights",
  update: "Updates",
  guide: "Guides",
  alert: "Alerts"
};
const IntelligentNewsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activePreview, setActivePreview] = useState(0);
  const [visibleElements, setVisibleElements] = useState(/* @__PURE__ */ new Set());
  const sectionRef = useRef(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  useEffect(() => {
    if (isVisible) {
      const allIds = benefits.map((b) => b.id);
      setVisibleElements(new Set(allIds));
      const interval = setInterval(() => {
        setActivePreview((prev) => (prev + 1) % contentPreviews.length);
      }, 4e3);
      return () => clearInterval(interval);
    }
  }, [isVisible]);
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubscribed(true);
    setIsLoading(false);
  };
  if (isSubscribed) {
    return /* @__PURE__ */ jsx("section", { className: "py-24 bg-gradient-to-b from-[#E6F2FF] to-white relative overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Card, { className: "inline-flex items-center p-12 neomorphism bg-gradient-to-r from-card to-muted/30 hover-lift max-w-2xl", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-6", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center gap-4 mb-6", children: /* @__PURE__ */ jsx("div", { className: "p-4 rounded-full bg-secondary/10 animate-bounce-in", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-12 w-12 text-secondary" }) }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-card-foreground", children: "Willkommen im Marsstein Newsletter!" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: "Vielen Dank für Ihr Interesse. Sie erhalten in Kürze eine Bestätigungs-E-Mail und dann wöchentlich die neuesten Compliance-Insights direkt in Ihr Postfach." }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-6 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-secondary" }),
          "KI-Powered Insights"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-secondary" }),
          "Jederzeit abmeldbar"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-secondary" }),
          "DSGVO-konform"
        ] })
      ] })
    ] }) }) }) }) });
  }
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "py-24 bg-gradient-to-b from-[#E6F2FF] to-white relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-aurora" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-gentle" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-[0.01]", style: {
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23003366' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M20 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15S28.284 5 20 5zm-5 12h10l-5 4-5-4z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "40px 40px"
          } })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary border-primary/20 animate-pulse", children: [
                /* @__PURE__ */ jsx(Brain, { className: "w-3 h-3 mr-1" }),
                "KI-Newsletter"
              ] }),
              /* @__PURE__ */ jsxs("h2", { className: cn(
                "text-4xl md:text-5xl font-bold text-foreground",
                isVisible && "animate-text-reveal"
              ), children: [
                "Smarte Compliance-",
                /* @__PURE__ */ jsx("span", { className: "block animate-gradient-flow bg-clip-text text-transparent", children: "Insights für Sie" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "Erhalten Sie personalisierte Compliance-Updates, KI-gestützte Analysen und exklusive Einblicke direkt in Ihr Postfach." })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              visibleElements.has(benefit.id);
              return /* @__PURE__ */ jsxs(
                Card,
                {
                  className: "p-6 neomorphism card-hover relative overflow-hidden",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 hover:opacity-50 transition-opacity duration-200",
                      benefit.gradient
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "relative z-10 space-y-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-primary/10 w-fit", children: /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 text-primary" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-card-foreground", children: benefit.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: benefit.description })
                    ] })
                  ]
                },
                benefit.id
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxs(Card, { className: "p-8 neomorphism bg-gradient-to-br from-card to-muted/30 relative overflow-hidden", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-gradient-wave opacity-50" }),
              /* @__PURE__ */ jsxs("div", { className: "relative z-10 space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-primary/10", children: /* @__PURE__ */ jsx(Mail, { className: "h-8 w-8 text-primary" }) }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-secondary/10 text-secondary border-secondary/20", children: "Kostenlos" })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-card-foreground", children: "Newsletter abonnieren" }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Verpassen Sie keine wichtigen Compliance-Updates mehr." })
                ] }),
                /* @__PURE__ */ jsxs("form", { onSubmit: handleSubscribe, className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx(
                      Input,
                      {
                        type: "email",
                        placeholder: "Ihre E-Mail-Adresse",
                        value: email,
                        onChange: (e) => setEmail(e.target.value),
                        className: "pr-12 h-12 text-lg interactive-border",
                        required: true
                      }
                    ),
                    /* @__PURE__ */ jsx(Mail, { className: "absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      type: "submit",
                      disabled: isLoading,
                      className: "w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground btn-modern text-lg",
                      children: isLoading ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" }),
                        "Wird abonniert..."
                      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                        /* @__PURE__ */ jsx(Sparkles, { className: "mr-2 h-5 w-5" }),
                        "Jetzt abonnieren",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-center", children: "DSGVO-konform • Jederzeit abmeldbar • Keine Weitergabe" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx(Card, { className: "p-6 neomorphism card-hover", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-card-foreground", children: "Newsletter Preview" }),
                /* @__PURE__ */ jsx(Badge, { className: "bg-primary/10 text-primary border-primary/20 text-xs", children: "Live Content" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4", children: contentPreviews.map((preview, index) => {
                const Icon = preview.icon;
                const isActive = activePreview === index;
                const typeStyle = typeColors[preview.type];
                return /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: cn(
                      "transition-all duration-500 transform",
                      isActive ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-4 absolute"
                    ),
                    children: /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg bg-muted/30 space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsx("div", { className: "p-2 rounded-lg bg-primary/10", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
                          /* @__PURE__ */ jsx(
                            Badge,
                            {
                              className: cn(
                                "text-xs",
                                typeStyle.bg,
                                typeStyle.text,
                                typeStyle.border
                              ),
                              children: typeLabels[preview.type]
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: preview.frequency })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-card-foreground mb-1", children: preview.title }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: preview.description })
                      ] })
                    ] })
                  },
                  preview.id
                );
              }) }),
              /* @__PURE__ */ jsx("div", { className: "flex justify-center gap-2", children: contentPreviews.map((_, index) => /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setActivePreview(index),
                  className: cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activePreview === index ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                  )
                },
                index
              )) })
            ] }) })
          ] })
        ] }) })
      ]
    }
  );
};
const KIActivationSeparator = () => {
  return /* @__PURE__ */ jsx("div", { className: "relative h-32 overflow-hidden mt-10 -mb-16 z-10", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 1200 128", preserveAspectRatio: "none", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("radialGradient", { id: "kiActivation", cx: "50%", cy: "50%", r: "40%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#e24e1b", stopOpacity: "1", children: /* @__PURE__ */ jsx("animate", { attributeName: "stopOpacity", values: "1;0.3;1", dur: "3s", repeatCount: "indefinite" }) }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#ff6b3d", stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ jsx("g", { stroke: "#e24e1b", strokeWidth: "2", fill: "none", opacity: "0.6", children: /* @__PURE__ */ jsx("path", { d: "M600,64 L400,30 M600,64 L800,30 M600,64 L350,64 M600,64 L850,64 M600,64 L400,98 M600,64 L800,98", className: "animate-pulse" }) }),
    /* @__PURE__ */ jsx("circle", { cx: "600", cy: "64", r: "20", fill: "url(#kiActivation)", className: "animate-ping" }),
    /* @__PURE__ */ jsxs("g", { fill: "#e24e1b", opacity: "0.8", children: [
      /* @__PURE__ */ jsx("circle", { cx: "400", cy: "30", r: "6", className: "animate-pulse" }),
      /* @__PURE__ */ jsx("circle", { cx: "800", cy: "30", r: "6", className: "animate-pulse", style: { animationDelay: "0.5s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "350", cy: "64", r: "6", className: "animate-pulse", style: { animationDelay: "1s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "850", cy: "64", r: "6", className: "animate-pulse", style: { animationDelay: "1.5s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "400", cy: "98", r: "6", className: "animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "800", cy: "98", r: "6", className: "animate-pulse", style: { animationDelay: "2.5s" } })
    ] })
  ] }) });
};
const RegulatoryBridgeSeparator = () => {
  return /* @__PURE__ */ jsx("div", { className: "relative h-32 overflow-hidden -my-16 z-10", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 1200 128", preserveAspectRatio: "none", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "regulatoryBridgeGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#e24e1b", stopOpacity: "0.4" }),
      /* @__PURE__ */ jsx("stop", { offset: "33%", stopColor: "#dc2626", stopOpacity: "0.8" }),
      /* @__PURE__ */ jsx("stop", { offset: "66%", stopColor: "#dc2626", stopOpacity: "0.8" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#e24e1b", stopOpacity: "0.4" })
    ] }) }),
    /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("rect", { x: "350", y: "30", width: "12", height: "68", rx: "6", fill: "url(#regulatoryBridgeGrad)", className: "animate-pulse" }),
      /* @__PURE__ */ jsx("rect", { x: "594", y: "30", width: "12", height: "68", rx: "6", fill: "url(#regulatoryBridgeGrad)", className: "animate-pulse", style: { animationDelay: "0.7s" } }),
      /* @__PURE__ */ jsx("rect", { x: "838", y: "30", width: "12", height: "68", rx: "6", fill: "url(#regulatoryBridgeGrad)", className: "animate-pulse", style: { animationDelay: "1.4s" } })
    ] }),
    /* @__PURE__ */ jsxs("g", { stroke: "#e24e1b", strokeWidth: "4", fill: "none", opacity: "0.6", children: [
      /* @__PURE__ */ jsx("path", { d: "M362,64 Q478,54 594,64", className: "animate-pulse" }),
      /* @__PURE__ */ jsx("path", { d: "M606,64 Q722,54 838,64", className: "animate-pulse", style: { animationDelay: "0.5s" } })
    ] }),
    /* @__PURE__ */ jsxs("g", { fill: "#e24e1b", opacity: "0.8", children: [
      /* @__PURE__ */ jsx("circle", { cx: "356", cy: "20", r: "6", className: "animate-ping" }),
      /* @__PURE__ */ jsx("circle", { cx: "600", cy: "20", r: "6", className: "animate-ping", style: { animationDelay: "0.7s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "844", cy: "20", r: "6", fill: "#e24e1b", className: "animate-ping", style: { animationDelay: "1.4s" } })
    ] }),
    /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx("circle", { cx: "400", cy: "64", r: "2", fill: "#dc2626", className: "animate-bounce", children: /* @__PURE__ */ jsx("animateMotion", { dur: "6s", repeatCount: "indefinite", children: /* @__PURE__ */ jsx("mpath", { href: "#regulatoryBridgePath" }) }) }) }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { id: "regulatoryBridgePath", d: "M356,64 Q478,54 600,64 Q722,54 844,64", fill: "none" }) })
  ] }) });
};
const SecurityStandardsMatrixSeparator = () => {
  return /* @__PURE__ */ jsx("div", { className: "relative h-42 overflow-hidden -my-20 z-10 bg-gradient-to-r from-transparent via-indigo-50/20 to-transparent", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 1200 168", preserveAspectRatio: "none", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("radialGradient", { id: "isoControlGlow", cx: "50%", cy: "50%", r: "50%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#e24e1b", stopOpacity: "0.8" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#e24e1b", stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("circle", { cx: "200", cy: "84", r: "15", fill: "url(#isoControlGlow)", className: "animate-ping" }),
      /* @__PURE__ */ jsx("circle", { cx: "200", cy: "84", r: "8", fill: "#e24e1b", opacity: "0.9" }),
      /* @__PURE__ */ jsx("text", { x: "200", y: "110", fontSize: "10", textAnchor: "middle", fill: "#e24e1b", opacity: "0.7", children: "A.5" }),
      /* @__PURE__ */ jsx("text", { x: "200", y: "122", fontSize: "8", textAnchor: "middle", fill: "#e24e1b", opacity: "0.5", children: "2 Controls" }),
      /* @__PURE__ */ jsx("circle", { cx: "400", cy: "84", r: "18", fill: "url(#isoControlGlow)", className: "animate-ping", style: { animationDelay: "0.3s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "400", cy: "84", r: "10", fill: "#e24e1b", opacity: "0.9" }),
      /* @__PURE__ */ jsx("text", { x: "400", y: "110", fontSize: "10", textAnchor: "middle", fill: "#e24e1b", opacity: "0.7", children: "A.8" }),
      /* @__PURE__ */ jsx("text", { x: "400", y: "122", fontSize: "8", textAnchor: "middle", fill: "#e24e1b", opacity: "0.5", children: "10 Controls" }),
      /* @__PURE__ */ jsx("circle", { cx: "600", cy: "84", r: "20", fill: "url(#isoControlGlow)", className: "animate-ping", style: { animationDelay: "0.6s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "600", cy: "84", r: "12", fill: "#e24e1b", opacity: "0.9" }),
      /* @__PURE__ */ jsx("text", { x: "600", y: "110", fontSize: "10", textAnchor: "middle", fill: "#e24e1b", opacity: "0.7", children: "A.12" }),
      /* @__PURE__ */ jsx("text", { x: "600", y: "122", fontSize: "8", textAnchor: "middle", fill: "#e24e1b", opacity: "0.5", children: "14 Controls" }),
      /* @__PURE__ */ jsx("circle", { cx: "800", cy: "84", r: "16", fill: "url(#isoControlGlow)", className: "animate-ping", style: { animationDelay: "0.9s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "800", cy: "84", r: "9", fill: "#e24e1b", opacity: "0.9" }),
      /* @__PURE__ */ jsx("text", { x: "800", y: "110", fontSize: "10", textAnchor: "middle", fill: "#e24e1b", opacity: "0.7", children: "A.13" }),
      /* @__PURE__ */ jsx("text", { x: "800", y: "122", fontSize: "8", textAnchor: "middle", fill: "#e24e1b", opacity: "0.5", children: "7 Controls" }),
      /* @__PURE__ */ jsx("circle", { cx: "1000", cy: "84", r: "16", fill: "url(#isoControlGlow)", className: "animate-ping", style: { animationDelay: "1.2s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "1000", cy: "84", r: "9", fill: "#e24e1b", opacity: "0.9" }),
      /* @__PURE__ */ jsx("text", { x: "1000", y: "110", fontSize: "10", textAnchor: "middle", fill: "#e24e1b", opacity: "0.7", children: "A.18" }),
      /* @__PURE__ */ jsx("text", { x: "1000", y: "122", fontSize: "8", textAnchor: "middle", fill: "#e24e1b", opacity: "0.5", children: "7 Controls" })
    ] }),
    /* @__PURE__ */ jsxs("g", { stroke: "#e24e1b", strokeWidth: "2", fill: "none", opacity: "0.4", children: [
      /* @__PURE__ */ jsx("path", { d: "M215,84 L385,84", className: "animate-pulse" }),
      /* @__PURE__ */ jsx("path", { d: "M418,84 L582,84", className: "animate-pulse", style: { animationDelay: "0.2s" } }),
      /* @__PURE__ */ jsx("path", { d: "M620,84 L784,84", className: "animate-pulse", style: { animationDelay: "0.4s" } }),
      /* @__PURE__ */ jsx("path", { d: "M816,84 L984,84", className: "animate-pulse", style: { animationDelay: "0.6s" } })
    ] }),
    /* @__PURE__ */ jsxs("g", { transform: "translate(580, 40)", children: [
      /* @__PURE__ */ jsx("rect", { x: "0", y: "0", width: "40", height: "20", rx: "4", fill: "#e24e1b", opacity: "0.2", className: "animate-pulse" }),
      /* @__PURE__ */ jsx("text", { x: "20", y: "13", fontSize: "8", textAnchor: "middle", fill: "#e24e1b", fontWeight: "bold", children: "ISO 27001" })
    ] }),
    /* @__PURE__ */ jsxs("g", { fill: "#e24e1b", opacity: "0.3", children: [
      /* @__PURE__ */ jsx("circle", { cx: "150", cy: "50", r: "3", className: "animate-pulse" }),
      /* @__PURE__ */ jsx("circle", { cx: "250", cy: "50", r: "3", className: "animate-pulse", style: { animationDelay: "0.5s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "350", cy: "50", r: "3", className: "animate-pulse", style: { animationDelay: "1s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "450", cy: "50", r: "3", className: "animate-pulse", style: { animationDelay: "1.5s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "550", cy: "50", r: "3", className: "animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "650", cy: "50", r: "3", className: "animate-pulse", style: { animationDelay: "2.5s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "750", cy: "50", r: "3", className: "animate-pulse", style: { animationDelay: "3s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "850", cy: "50", r: "3", className: "animate-pulse", style: { animationDelay: "3.5s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "950", cy: "50", r: "3", className: "animate-pulse", style: { animationDelay: "4s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "1050", cy: "50", r: "3", className: "animate-pulse", style: { animationDelay: "4.5s" } })
    ] })
  ] }) });
};
const AIRiskSpectrumSeparator = () => {
  return /* @__PURE__ */ jsx("div", { className: "relative h-40 overflow-hidden -my-20 z-10", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 1200 160", preserveAspectRatio: "none", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "aiRiskSpectrum", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#dc2626", stopOpacity: "0.9" }),
      /* @__PURE__ */ jsx("stop", { offset: "25%", stopColor: "#ea580c", stopOpacity: "0.8" }),
      /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#e24e1b", stopOpacity: "0.7" }),
      /* @__PURE__ */ jsx("stop", { offset: "75%", stopColor: "#f59e0b", stopOpacity: "0.6" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#16a34a", stopOpacity: "0.5" })
    ] }) }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M0,80 Q300,40 600,80 Q900,120 1200,80",
        stroke: "url(#aiRiskSpectrum)",
        strokeWidth: "8",
        fill: "none",
        className: "animate-pulse"
      }
    ),
    /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("rect", { x: "100", y: "60", width: "180", height: "40", rx: "20", fill: "#dc2626", opacity: "0.3", className: "animate-pulse" }),
      /* @__PURE__ */ jsx("rect", { x: "320", y: "65", width: "140", height: "30", rx: "15", fill: "#ea580c", opacity: "0.3", className: "animate-pulse", style: { animationDelay: "0.5s" } }),
      /* @__PURE__ */ jsx("rect", { x: "500", y: "70", width: "100", height: "20", rx: "10", fill: "#e24e1b", opacity: "0.3", className: "animate-pulse", style: { animationDelay: "1s" } }),
      /* @__PURE__ */ jsx("rect", { x: "640", y: "75", width: "60", height: "10", rx: "5", fill: "#16a34a", opacity: "0.3", className: "animate-pulse", style: { animationDelay: "1.5s" } })
    ] }),
    /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("circle", { cx: "190", cy: "80", r: "8", fill: "#dc2626", className: "animate-ping" }),
      /* @__PURE__ */ jsx("circle", { cx: "390", cy: "80", r: "6", fill: "#ea580c", className: "animate-ping", style: { animationDelay: "0.3s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "550", cy: "80", r: "7", fill: "#e24e1b", className: "animate-ping", style: { animationDelay: "0.6s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "670", cy: "80", r: "5", fill: "#16a34a", className: "animate-ping", style: { animationDelay: "0.9s" } })
    ] }),
    /* @__PURE__ */ jsxs("g", { fill: "#e24e1b", opacity: "0.6", children: [
      /* @__PURE__ */ jsx("rect", { x: "898", y: "120", width: "2", height: "20", className: "animate-pulse" }),
      /* @__PURE__ */ jsx("rect", { x: "998", y: "120", width: "2", height: "20", className: "animate-pulse", style: { animationDelay: "0.5s" } }),
      /* @__PURE__ */ jsx("rect", { x: "1098", y: "120", width: "2", height: "20", className: "animate-pulse", style: { animationDelay: "1s" } })
    ] })
  ] }) });
};
const GestureFlowSeparator = () => {
  return /* @__PURE__ */ jsx("div", { className: "relative h-32 overflow-hidden -my-16 z-10", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 1200 128", preserveAspectRatio: "none", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "gestureFlowGrad", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
      /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#06b6d4", stopOpacity: "0" }),
      /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#06b6d4", stopOpacity: "0.8" }),
      /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#06b6d4", stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ jsx("g", { stroke: "url(#gestureFlowGrad)", strokeWidth: "3", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M100,64 Q300,44 500,64 Q700,84 900,64 Q1050,44 1100,64", children: /* @__PURE__ */ jsx("animate", { attributeName: "stroke-dasharray", values: "0,1200;600,600;1200,0", dur: "4s", repeatCount: "indefinite" }) }) }),
    /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsx("circle", { cx: "100", cy: "64", r: "4", fill: "#06b6d4", opacity: "0.8", children: /* @__PURE__ */ jsx("animateMotion", { dur: "4s", repeatCount: "indefinite", children: /* @__PURE__ */ jsx("mpath", { href: "#gestureFlowPath" }) }) }),
      /* @__PURE__ */ jsx("circle", { cx: "300", cy: "44", r: "3", fill: "#e24e1b", opacity: "0.6", children: /* @__PURE__ */ jsx("animateMotion", { dur: "4s", repeatCount: "indefinite", begin: "1s", children: /* @__PURE__ */ jsx("mpath", { href: "#gestureFlowPath" }) }) }),
      /* @__PURE__ */ jsx("circle", { cx: "700", cy: "84", r: "3", fill: "#06b6d4", opacity: "0.6", children: /* @__PURE__ */ jsx("animateMotion", { dur: "4s", repeatCount: "indefinite", begin: "2s", children: /* @__PURE__ */ jsx("mpath", { href: "#gestureFlowPath" }) }) })
    ] }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("path", { id: "gestureFlowPath", d: "M100,64 Q300,44 500,64 Q700,84 900,64 Q1050,44 1100,64", fill: "none" }) })
  ] }) });
};
const QuantumShieldWaveSeparator = () => {
  return /* @__PURE__ */ jsx("div", { className: "relative h-24 overflow-hidden", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 1200 96", children: [
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsxs("linearGradient", { id: "quantumWave", x1: "0%", y1: "0%", x2: "100%", y2: "0%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#6366f1", stopOpacity: "0" }),
        /* @__PURE__ */ jsx("stop", { offset: "20%", stopColor: "#e24e1b", stopOpacity: "0.3" }),
        /* @__PURE__ */ jsx("stop", { offset: "40%", stopColor: "#6366f1", stopOpacity: "0.6" }),
        /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#e24e1b", stopOpacity: "0.8" }),
        /* @__PURE__ */ jsx("stop", { offset: "60%", stopColor: "#6366f1", stopOpacity: "0.6" }),
        /* @__PURE__ */ jsx("stop", { offset: "80%", stopColor: "#e24e1b", stopOpacity: "0.3" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#6366f1", stopOpacity: "0" })
      ] }),
      /* @__PURE__ */ jsxs("radialGradient", { id: "lockGlow", cx: "50%", cy: "50%", r: "50%", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#e24e1b", stopOpacity: "0.8" }),
        /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "#e24e1b", stopOpacity: "0.4" }),
        /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#e24e1b", stopOpacity: "0" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M0,48 Q200,20 400,48 T800,48 T1200,48",
        fill: "none",
        stroke: "url(#quantumWave)",
        strokeWidth: "2",
        opacity: "0.8",
        className: "animate-pulse"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M0,48 Q200,76 400,48 T800,48 T1200,48",
        fill: "none",
        stroke: "url(#quantumWave)",
        strokeWidth: "2",
        opacity: "0.8",
        className: "animate-pulse"
      }
    ),
    /* @__PURE__ */ jsxs("g", { children: [
      /* @__PURE__ */ jsxs("circle", { cx: "100", cy: "38", r: "2", fill: "#e24e1b", opacity: "0.6", children: [
        /* @__PURE__ */ jsx("animate", { attributeName: "cy", values: "38;58;38", dur: "1.5s", repeatCount: "indefinite" }),
        /* @__PURE__ */ jsx("animateTransform", { attributeName: "transform", type: "translate", values: "0,0;1100,0", dur: "10s", repeatCount: "indefinite" })
      ] }),
      /* @__PURE__ */ jsxs("circle", { cx: "300", cy: "58", r: "2", fill: "#6366f1", opacity: "0.6", children: [
        /* @__PURE__ */ jsx("animate", { attributeName: "cy", values: "58;38;58", dur: "2s", repeatCount: "indefinite" }),
        /* @__PURE__ */ jsx("animateTransform", { attributeName: "transform", type: "translate", values: "0,0;900,0", dur: "8s", repeatCount: "indefinite" })
      ] }),
      /* @__PURE__ */ jsxs("circle", { cx: "500", cy: "38", r: "2", fill: "#e24e1b", opacity: "0.6", children: [
        /* @__PURE__ */ jsx("animate", { attributeName: "cy", values: "38;58;38", dur: "1.8s", repeatCount: "indefinite" }),
        /* @__PURE__ */ jsx("animateTransform", { attributeName: "transform", type: "translate", values: "0,0;700,0", dur: "9s", repeatCount: "indefinite" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("g", { transform: "translate(600,48)", children: [
      /* @__PURE__ */ jsx("circle", { cx: "0", cy: "0", r: "25", fill: "url(#lockGlow)", className: "animate-pulse" }),
      /* @__PURE__ */ jsxs("g", { transform: "scale(1.2)", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M0,-10 C-6,-10 -10,-6 -10,0 L-10,3 L-8,3 L-8,0 C-8,-5 -5,-8 0,-8 C5,-8 8,-5 8,0 L8,3 L10,3 L10,0 C10,-6 6,-10 0,-10 Z",
            fill: "#e24e1b",
            opacity: "0.9"
          }
        ),
        /* @__PURE__ */ jsx("rect", { x: "-8", y: "3", width: "16", height: "12", rx: "2", fill: "#e24e1b", opacity: "0.8" }),
        /* @__PURE__ */ jsx("circle", { cx: "0", cy: "8", r: "2", fill: "#fff", opacity: "0.9" }),
        /* @__PURE__ */ jsx("rect", { x: "-1", y: "8", width: "2", height: "4", fill: "#fff", opacity: "0.9" })
      ] })
    ] })
  ] }) });
};
const KnowledgeConstellationSeparator = () => {
  return /* @__PURE__ */ jsx("div", { className: "relative h-32 overflow-hidden -my-16 z-10 bg-gradient-to-r from-transparent via-amber-50/10 to-transparent", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 1200 128", preserveAspectRatio: "none", children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("filter", { id: "knowledgeStarGlow", children: [
      /* @__PURE__ */ jsx("feGaussianBlur", { stdDeviation: "1", result: "coloredBlur" }),
      /* @__PURE__ */ jsxs("feMerge", { children: [
        /* @__PURE__ */ jsx("feMergeNode", { in: "coloredBlur" }),
        /* @__PURE__ */ jsx("feMergeNode", { in: "SourceGraphic" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("g", { stroke: "#fbbf24", strokeWidth: "1", fill: "none", opacity: "0.3", strokeDasharray: "2,4", children: /* @__PURE__ */ jsx("path", { d: "M150,80 L280,50 L400,70 L520,40 L650,65 L780,45 L900,75 L1050,55" }) }),
    /* @__PURE__ */ jsxs("g", { fill: "#fbbf24", filter: "url(#knowledgeStarGlow)", children: [
      /* @__PURE__ */ jsx("circle", { cx: "150", cy: "80", r: "3", opacity: "0.9", className: "animate-pulse" }),
      /* @__PURE__ */ jsx("circle", { cx: "280", cy: "50", r: "4", opacity: "1", className: "animate-pulse", style: { animationDelay: "0.2s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "400", cy: "70", r: "3", opacity: "0.8", className: "animate-pulse", style: { animationDelay: "0.4s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "520", cy: "40", r: "5", opacity: "1", className: "animate-pulse", style: { animationDelay: "0.6s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "650", cy: "65", r: "3", opacity: "0.8", className: "animate-pulse", style: { animationDelay: "0.8s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "780", cy: "45", r: "4", opacity: "0.9", className: "animate-pulse", style: { animationDelay: "1s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "900", cy: "75", r: "3", opacity: "0.8", className: "animate-pulse", style: { animationDelay: "1.2s" } }),
      /* @__PURE__ */ jsx("circle", { cx: "1050", cy: "55", r: "4", opacity: "0.9", className: "animate-pulse", style: { animationDelay: "1.4s" } })
    ] }),
    /* @__PURE__ */ jsxs("g", { fill: "#fff", opacity: "0.8", children: [
      /* @__PURE__ */ jsx("circle", { cx: "520", cy: "40", r: "1", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0;0.8;0", dur: "2s", repeatCount: "indefinite" }) }),
      /* @__PURE__ */ jsx("circle", { cx: "780", cy: "45", r: "1", children: /* @__PURE__ */ jsx("animate", { attributeName: "opacity", values: "0;0.8;0", dur: "2s", repeatCount: "indefinite", begin: "1s" }) })
    ] })
  ] }) });
};
const Index = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(KIActivationSeparator, {}),
      /* @__PURE__ */ jsx("div", { className: "py-8" }),
      /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-b from-transparent to-orange-50/20", children: /* @__PURE__ */ jsx(ScrollTransformation, {}) }),
      /* @__PURE__ */ jsx(TransformationCTA, {}),
      /* @__PURE__ */ jsx("div", { className: "py-12" }),
      /* @__PURE__ */ jsx(RegulatoryBridgeSeparator, {}),
      /* @__PURE__ */ jsx("div", { className: "py-8" }),
      /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-b from-orange-50/20 via-white to-red-50/10", children: /* @__PURE__ */ jsx(DACHCompliance, {}) }),
      /* @__PURE__ */ jsx(SecurityStandardsMatrixSeparator, {}),
      /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-b from-red-50/10 to-orange-50/15", children: /* @__PURE__ */ jsx(ISO27001Section, {}) }),
      /* @__PURE__ */ jsx(AIRiskSpectrumSeparator, {}),
      /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-b from-orange-50/15 via-white to-gray-50", children: /* @__PURE__ */ jsx(EUAIActSection, {}) }),
      /* @__PURE__ */ jsx(GestureFlowSeparator, {}),
      /* @__PURE__ */ jsx(InteractiveShowcase, {}),
      /* @__PURE__ */ jsx(QuantumShieldWaveSeparator, {}),
      /* @__PURE__ */ jsx(TrustSecurity, {}),
      /* @__PURE__ */ jsx(KnowledgeConstellationSeparator, {}),
      /* @__PURE__ */ jsx(SmartFAQ, {}),
      /* @__PURE__ */ jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" }),
      /* @__PURE__ */ jsx(IntelligentNewsletter, {}),
      /* @__PURE__ */ jsx("div", { className: "h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent" }),
      /* @__PURE__ */ jsx(CTASection, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Index as default
};
