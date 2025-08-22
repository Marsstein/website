import { jsxs, jsx } from "react/jsx-runtime";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { H as HeroSection, D as DACHCompliance } from "./DACHCompliance-BMtsHU8V.js";
import { C as Card } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Link } from "react-router-dom";
import { TestTube, Target, ArrowRight, MousePointer, ScrollText, Info, GitBranch } from "lucide-react";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "react";
import "../main.mjs";
import "vite-react-ssg";
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
import "framer-motion";
import "react-countup";
import "@radix-ui/react-slot";
const TestIndex = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 space-y-6", children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/10 text-blue-600 border-blue-500/20 text-sm", children: [
            /* @__PURE__ */ jsx(TestTube, { className: "w-4 h-4 mr-1" }),
            "Scroll Animation Tests"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900", children: [
            "ComplianceTransformation ",
            /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "Test Suite" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed", children: "Teste verschiedene Ansätze für die Scroll-Animation der ComplianceTransformation Sektion. Jede Version implementiert eine andere Lösung für das bidirektionale Scroll-Verhalten." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-8 mb-12", children: [
          /* @__PURE__ */ jsx(Card, { className: "p-8 border-2 border-blue-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 rounded-full bg-blue-500/10 shrink-0", children: /* @__PURE__ */ jsx(Target, { className: "h-8 w-8 text-blue-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Test 1: Einheitliche Trigger-Points" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "Verwendet den gleichen Trigger-Point (headerHeight = 64px) für sowohl Sticky-Logik als auch Progress-Berechnung. Diese Lösung soll die Inkonsistenz zwischen Up- und Down-Scrolling beheben." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsx(Badge, { className: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-xs", children: "Einheitliche Trigger" }),
                /* @__PURE__ */ jsx(Badge, { className: "bg-orange-500/10 text-orange-600 border-orange-500/20 text-xs", children: "Simplified Logic" })
              ] }),
              /* @__PURE__ */ jsx(Link, { to: "/test1", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 font-semibold shadow hover:shadow-lg transition-all", children: [
                "Test 1 starten",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(Card, { className: "p-8 border-2 border-orange-200 hover:border-orange-300 shadow-lg hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 rounded-full bg-orange-500/10 shrink-0", children: /* @__PURE__ */ jsx(MousePointer, { className: "h-8 w-8 text-orange-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Test 2: Scroll-Richtungs-Detection" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "Erkennt die Scrollrichtung (up/down) und wendet unterschiedliche Logik für Sticky-Position und Progress-Berechnung an. Ziel ist es, das Verhalten beim Runterscrollen dem beim Hochscrollen anzugleichen." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsx(Badge, { className: "bg-purple-500/10 text-purple-600 border-purple-500/20 text-xs", children: "Direction Detection" }),
                /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/10 text-blue-600 border-blue-500/20 text-xs", children: "Dynamic Logic" })
              ] }),
              /* @__PURE__ */ jsx(Link, { to: "/test2", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 font-semibold shadow hover:shadow-lg transition-all", children: [
                "Test 2 starten",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(Card, { className: "p-8 border-2 border-purple-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 rounded-full bg-purple-500/10 shrink-0", children: /* @__PURE__ */ jsx(ScrollText, { className: "h-8 w-8 text-purple-600" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Test 3: Absolute Scroll Position" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "Berechnet absolute Scroll-Positionen beim Laden der Seite und verwendet diese für Sticky- und Progress-Logik. Diese Methode soll unabhängig von der Scrollrichtung funktionieren." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
                /* @__PURE__ */ jsx(Badge, { className: "bg-indigo-500/10 text-indigo-600 border-indigo-500/20 text-xs", children: "Absolute Positioning" }),
                /* @__PURE__ */ jsx(Badge, { className: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20 text-xs", children: "Pre-calculated" })
              ] }),
              /* @__PURE__ */ jsx(Link, { to: "/test3", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 font-semibold shadow hover:shadow-lg transition-all", children: [
                "Test 3 starten",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(Card, { className: "p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "p-2 rounded bg-blue-500/10 shrink-0", children: /* @__PURE__ */ jsx(Info, { className: "h-5 w-5 text-blue-600" }) }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Test-Hinweise" }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600 space-y-2", children: [
              /* @__PURE__ */ jsx("p", { children: "• Jeder Test zeigt ein Debug-Banner oben links mit der aktuellen Test-Nummer" }),
              /* @__PURE__ */ jsx("p", { children: "• Achte besonders auf das Verhalten beim Wechsel zwischen Up- und Down-Scrolling" }),
              /* @__PURE__ */ jsx("p", { children: '• Der "Progress" und "Sticky" Status wird unter dem Header angezeigt' }),
              /* @__PURE__ */ jsx("p", { children: "• Teste verschiedene Scroll-Geschwindigkeiten und -richtungen" })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "px-6 py-3 font-semibold border-2", children: [
          /* @__PURE__ */ jsx(GitBranch, { className: "mr-2 h-4 w-4" }),
          "Zurück zur Hauptseite"
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsx(DACHCompliance, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  TestIndex as default
};
