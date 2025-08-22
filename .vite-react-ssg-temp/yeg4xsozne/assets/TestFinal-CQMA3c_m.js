import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { H as HeroSection, D as DACHCompliance } from "./DACHCompliance-BMtsHU8V.js";
import { useState, useRef, useEffect } from "react";
import { C as Card } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Link } from "react-router-dom";
import { AlertTriangle, Shield, Euro, Zap, Clock, Brain, TrendingUp, Database, FileCheck, CheckCircle2, Sparkles, Rocket, ArrowRight } from "lucide-react";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "framer-motion";
import "react-countup";
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
      benefit: "85% Zeitersparnis",
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
      benefit: "99% Abdeckung",
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
      benefit: "300% Effizienz",
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
      benefit: "15+ Standards",
      color: "text-indigo-600",
      bgGradient: "from-indigo-500/10 to-blue-500/10"
    }
  }
];
const ScrollTransformationFinal = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [debugInfo, setDebugInfo] = useState("");
  const sectionRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      const headerHeight = 64;
      const sectionTopRelativeToViewport = rect.top;
      const sectionBottomRelativeToViewport = rect.bottom;
      const shouldBeSticky = sectionTopRelativeToViewport <= headerHeight && sectionBottomRelativeToViewport > windowHeight;
      setIsSticky(shouldBeSticky);
      let progress = 0;
      if (shouldBeSticky) {
        const scrolledPastHeader = Math.max(0, headerHeight - sectionTopRelativeToViewport);
        const maxStickyScroll = sectionHeight - windowHeight;
        progress = maxStickyScroll > 0 ? scrolledPastHeader / maxStickyScroll : 0;
      } else if (sectionTopRelativeToViewport > headerHeight) {
        progress = 0;
      } else {
        progress = 1;
      }
      setScrollProgress(Math.max(0, Math.min(1, progress)));
      const scrollY = Math.round(window.scrollY);
      const sectionTop = Math.round(sectionTopRelativeToViewport);
      const sectionBottom = Math.round(sectionBottomRelativeToViewport);
      const scrolledPast = Math.round(Math.max(0, headerHeight - sectionTopRelativeToViewport));
      const maxScroll = Math.round(sectionHeight - windowHeight);
      setDebugInfo(`ScrollY: ${scrollY} | SectionTop: ${sectionTop} | SectionBottom: ${sectionBottom} | ScrolledPast: ${scrolledPast}/${maxScroll}`);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "relative",
      style: { height: "300vh" },
      children: [
        /* @__PURE__ */ jsx("div", { className: "fixed top-4 left-4 z-50 bg-red-600 text-white px-3 py-1 rounded text-sm", children: "FINAL: Simplified Sticky" }),
        /* @__PURE__ */ jsx("div", { className: cn(
          "w-full transition-all duration-300",
          isSticky ? "fixed top-16 left-0 right-0 h-[calc(100vh-4rem)] z-30" : "relative h-screen"
        ), children: /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-white overflow-y-auto", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl px-4 py-8", children: [
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
              "KI-Revolution für ",
              /* @__PURE__ */ jsx("span", { className: "text-emerald-600", children: "Compliance" })
            ] }) }),
            /* @__PURE__ */ jsx("p", { className: "text-base text-gray-600 max-w-2xl mx-auto", children: scrollProgress < 0.5 ? "Manuelle Prozesse, zeitaufwändige Audits und Regulierungs-Chaos verschlingen jährlich Milliardenbeträge" : "Automatisierte Lösungen verwandeln Compliance-Herausforderungen in Wettbewerbsvorteile" }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500 max-w-3xl mx-auto", children: [
              "Progress: ",
              Math.round(scrollProgress * 100),
              "% | Sticky: ",
              isSticky ? "YES" : "NO",
              /* @__PURE__ */ jsx("br", {}),
              debugInfo
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-2 bg-gray-200 rounded-full mb-6 max-w-md mx-auto", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-300",
              style: { width: `${scrollProgress * 100}%` }
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8", children: transformationCards.map((card, cardIndex) => {
            const cardStartProgress = cardIndex / transformationCards.length;
            const cardEndProgress = (cardIndex + 1) / transformationCards.length;
            const cardProgress = Math.max(0, Math.min(1, (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress)));
            const showSolution = cardProgress > 0.3;
            return /* @__PURE__ */ jsxs("div", { className: "relative h-[140px]", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: cn(
                    "absolute inset-0 transition-all duration-500",
                    showSolution ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
                  ),
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
                  className: cn(
                    "absolute inset-0 transition-all duration-500",
                    showSolution ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                  ),
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
          ) }),
          /* @__PURE__ */ jsx("div", { className: cn(
            "transition-all duration-500",
            scrollProgress > 0.7 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          ), children: /* @__PURE__ */ jsx(Card, { className: "p-6 bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200 shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
            /* @__PURE__ */ jsxs(Badge, { className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "w-3 h-3 mr-1" }),
              "Transformation starten"
            ] }),
            /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-gray-900", children: [
              "Bereit für die ",
              /* @__PURE__ */ jsx("span", { className: "text-emerald-600", children: "Compliance-Revolution?" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 max-w-md mx-auto", children: "FINAL: Vereinfachte Sticky-Logik die in beide Richtungen funktioniert" }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col sm:flex-row gap-3 justify-center pt-2", children: /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2 text-sm font-semibold shadow hover:shadow-lg transition-all", children: [
              /* @__PURE__ */ jsx(Rocket, { className: "mr-2 h-4 w-4" }),
              "Kostenlose Demo",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ] }) }) })
          ] }) }) })
        ] }) }) })
      ]
    }
  );
};
const TestFinal = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(ScrollTransformationFinal, {}),
      /* @__PURE__ */ jsx(DACHCompliance, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  TestFinal as default
};
