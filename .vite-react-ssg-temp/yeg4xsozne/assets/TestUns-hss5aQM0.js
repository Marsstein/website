import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { Target, Rocket, Zap, Lock, Brain } from "lucide-react";
import "./button-BRnNKcuh.js";
import "@radix-ui/react-slot";
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
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
const TestUns = () => {
  const [visibleSections, setVisibleSections] = useState(/* @__PURE__ */ new Set());
  const [activeTab, setActiveTab] = useState("vision");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => /* @__PURE__ */ new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
    };
  }, []);
  const AnimatedCard = ({ children, className = "", delay = 0, id }) => {
    const isVisible = id ? visibleSections.has(id) : true;
    return /* @__PURE__ */ jsx(
      "div",
      {
        id,
        "data-animate": true,
        className: `transform transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`,
        style: { transitionDelay: `${delay}ms` },
        children
      }
    );
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Vision & Mission Test - Marsstein" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Test verschiedener Designs für Vision & Mission" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-white", children: [
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-gradient-to-br from-[#e24e1b] to-[#f97316]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl text-center text-white", children: [
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-black mb-6", children: "Vision & Mission Design Tests" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl opacity-90 max-w-3xl mx-auto", children: "4 verschiedene visuelle Ansätze für unsere Vision und Mission" })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: [
            "Alternative 1: ",
            /* @__PURE__ */ jsx("span", { className: "text-[#e24e1b]", children: "Split-Screen mit Gradients" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Dramatische Farbkontraste mit Orange und Schwarz" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedCard, { delay: 200, id: "alt1", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-[#e24e1b] via-[#f97316] to-[#ea580c] p-12 text-white relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-yellow-300/10 rounded-full blur-2xl" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-10 -left-10 w-60 h-60 bg-red-500/5 rounded-full blur-3xl" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-white/25 rounded-3xl flex items-center justify-center mb-8 shadow-2xl animate-bounce", children: /* @__PURE__ */ jsx(Target, { className: "w-10 h-10 text-white drop-shadow-lg" }) }),
              /* @__PURE__ */ jsx("h4", { className: "text-4xl font-black mb-8 tracking-wider drop-shadow-lg", children: "VISION" }),
              /* @__PURE__ */ jsx("div", { className: "h-2 w-20 bg-white/60 mb-8 rounded-full shadow-lg" }),
              /* @__PURE__ */ jsxs("blockquote", { className: "text-3xl font-light italic leading-relaxed drop-shadow-md", children: [
                "„Compliance, die sich ",
                /* @__PURE__ */ jsx("span", { className: "font-black underline decoration-4 decoration-yellow-300 text-yellow-100", children: "einfach erledigt" }),
                '."'
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-gray-900 via-gray-800 to-black p-12 text-white relative overflow-hidden", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-36 h-36 bg-blue-500/15 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-28 h-28 bg-purple-500/15 rounded-full blur-2xl" }),
            /* @__PURE__ */ jsx("div", { className: "absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl animate-pulse", children: /* @__PURE__ */ jsx(Rocket, { className: "w-10 h-10 text-white drop-shadow-lg" }) }),
              /* @__PURE__ */ jsx("h4", { className: "text-4xl font-black mb-8 tracking-wider bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent", children: "MISSION" }),
              /* @__PURE__ */ jsx("div", { className: "h-2 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mb-8 rounded-full shadow-lg" }),
              /* @__PURE__ */ jsxs("p", { className: "text-xl leading-relaxed text-gray-100 drop-shadow-sm", children: [
                "Eine ",
                /* @__PURE__ */ jsx("span", { className: "text-blue-300 font-bold bg-blue-900/30 px-2 py-1 rounded-lg border border-blue-500/30", children: "EU-/CH-gehostete, KI-native Plattform" }),
                ", die Richtlinien analysiert, Lücken erklärt und Teams sicher zur Zertifizierung führt – mit ",
                /* @__PURE__ */ jsx("span", { className: "text-purple-300 font-bold bg-purple-900/30 px-2 py-1 rounded-lg border border-purple-500/30", children: "lückenloser Audit-Spur" }),
                "."
              ] })
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: [
            "Alternative 2: ",
            /* @__PURE__ */ jsx("span", { className: "text-[#e24e1b]", children: "Glassmorphism Cards" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Schwebende Karten mit Backdrop-Blur-Effekten" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedCard, { delay: 400, id: "alt2", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50 rounded-3xl" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-5 left-5 w-48 h-48 bg-gradient-to-r from-[#e24e1b]/30 to-[#f97316]/30 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-5 right-5 w-56 h-56 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse", style: { animationDelay: "1s" } }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 grid md:grid-cols-2 gap-8 p-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white/60 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:bg-white/70 group", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
                /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:animate-spin transition-all duration-300", children: /* @__PURE__ */ jsx(Target, { className: "w-12 h-12 text-white drop-shadow-lg" }) }),
                /* @__PURE__ */ jsx("h4", { className: "text-3xl font-black text-gray-900 tracking-widest drop-shadow-sm", children: "VISION" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-1 bg-gradient-to-r from-transparent via-[#e24e1b] to-transparent mb-8 rounded-full" }),
              /* @__PURE__ */ jsxs("blockquote", { className: "text-2xl text-gray-800 text-center italic font-medium leading-relaxed drop-shadow-sm", children: [
                "„Compliance, die sich ",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-3xl font-black text-[#e24e1b] not-italic bg-gradient-to-r from-orange-200 to-red-200 px-4 py-2 rounded-xl mx-2 shadow-lg", children: "einfach erledigt" }),
                '."'
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white/60 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:bg-white/70 group", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
                /* @__PURE__ */ jsx("div", { className: "w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:animate-bounce transition-all duration-300", children: /* @__PURE__ */ jsx(Rocket, { className: "w-12 h-12 text-white drop-shadow-lg" }) }),
                /* @__PURE__ */ jsx("h4", { className: "text-3xl font-black text-gray-900 tracking-widest drop-shadow-sm", children: "MISSION" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8 rounded-full" }),
              /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-700 leading-relaxed text-center drop-shadow-sm", children: [
                "Eine ",
                /* @__PURE__ */ jsx("span", { className: "font-black text-blue-600 bg-blue-100 px-3 py-2 rounded-xl shadow-lg border-2 border-blue-200", children: "EU-/CH-gehostete, KI-native Plattform" }),
                ", die Richtlinien analysiert, Lücken erklärt und Teams sicher zur Zertifizierung führt – mit ",
                /* @__PURE__ */ jsx("span", { className: "font-black text-purple-600 bg-purple-100 px-3 py-2 rounded-xl shadow-lg border-2 border-purple-200", children: "lückenloser Audit-Spur" }),
                "."
              ] })
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: [
            "Alternative 3: ",
            /* @__PURE__ */ jsx("span", { className: "text-[#e24e1b]", children: "Asymmetrisches Layout" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Große Vision-Karte mit kompakter Mission-Übersicht" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedCard, { delay: 600, id: "alt3", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 bg-gradient-to-br from-[#e24e1b] via-[#f97316] to-[#ea580c] rounded-3xl p-16 text-white relative overflow-hidden transform hover:scale-105 transition-all duration-700 shadow-2xl hover:shadow-orange-500/25", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-80 h-80 opacity-15", children: /* @__PURE__ */ jsx("svg", { viewBox: "0 0 100 100", className: "w-full h-full animate-spin", style: { animationDuration: "20s" }, children: /* @__PURE__ */ jsx("path", { d: "M50 10 L90 90 L10 90 Z", fill: "currentColor" }) }) }),
            /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -left-20 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" }),
            /* @__PURE__ */ jsxs("div", { className: "relative z-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 mb-12", children: [
                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse", children: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8 text-white drop-shadow-lg" }) }),
                /* @__PURE__ */ jsx("span", { className: "text-lg font-bold tracking-widest opacity-90 drop-shadow-md", children: "UNSERE VISION" })
              ] }),
              /* @__PURE__ */ jsxs("h3", { className: "text-6xl md:text-8xl font-black leading-tight mb-12 drop-shadow-2xl", children: [
                "Compliance,",
                /* @__PURE__ */ jsx("br", {}),
                "die sich",
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-yellow-100 drop-shadow-lg animate-pulse", children: "einfach" }),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-yellow-100 drop-shadow-lg animate-pulse", style: { animationDelay: "0.5s" }, children: "erledigt" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "w-12 h-1 bg-white/60 rounded-full shadow-lg" }),
                /* @__PURE__ */ jsx("span", { className: "text-xl font-medium opacity-90 drop-shadow-md", children: "Das ist unser Ziel" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-2xl border-2 border-gray-200 hover:shadow-3xl hover:border-blue-300 transition-all duration-500 transform hover:scale-105", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
              /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-bounce", children: /* @__PURE__ */ jsx(Rocket, { className: "w-10 h-10 text-white drop-shadow-lg" }) }),
              /* @__PURE__ */ jsx("h4", { className: "text-2xl font-black text-gray-900 tracking-widest drop-shadow-sm", children: "MISSION" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-base text-gray-700 leading-relaxed", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-3 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors", children: [
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0 shadow-lg" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "EU-/CH-gehostete, ",
                  /* @__PURE__ */ jsx("strong", { className: "text-blue-700", children: "KI-native Plattform" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-3 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors", children: [
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-lg" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "Richtlinien ",
                  /* @__PURE__ */ jsx("strong", { className: "text-green-700", children: "analysieren & erklären" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-3 bg-purple-50 rounded-xl border border-purple-200 hover:bg-purple-100 transition-colors", children: [
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0 shadow-lg" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "Teams sicher zur ",
                  /* @__PURE__ */ jsx("strong", { className: "text-purple-700", children: "Zertifizierung führen" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-3 bg-orange-50 rounded-xl border border-orange-200 hover:bg-orange-100 transition-colors", children: [
                /* @__PURE__ */ jsx("div", { className: "w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0 shadow-lg" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  "Mit ",
                  /* @__PURE__ */ jsx("strong", { className: "text-orange-700", children: "lückenloser Audit-Spur" })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: [
            "Alternative 4: ",
            /* @__PURE__ */ jsx("span", { className: "text-[#e24e1b]", children: "Interactive Tab-Cards" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Wechselbare Ansicht mit Tab-Navigation" })
        ] }),
        /* @__PURE__ */ jsx(AnimatedCard, { delay: 800, id: "alt4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex border-b border-gray-200", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveTab("vision"),
                className: `flex-1 px-8 py-6 font-bold text-lg transition-all ${activeTab === "vision" ? "bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`,
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3", children: [
                  /* @__PURE__ */ jsx(Target, { className: "w-6 h-6" }),
                  "VISION"
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => setActiveTab("mission"),
                className: `flex-1 px-8 py-6 font-bold text-lg transition-all ${activeTab === "mission" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`,
                children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-3", children: [
                  /* @__PURE__ */ jsx(Rocket, { className: "w-6 h-6" }),
                  "MISSION"
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-16", children: [
            activeTab === "vision" && /* @__PURE__ */ jsxs("div", { className: "text-center animate-fade-in", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
                /* @__PURE__ */ jsx("div", { className: "w-32 h-32 bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse transform hover:scale-110 transition-all duration-300", children: /* @__PURE__ */ jsx(Target, { className: "w-16 h-16 text-white drop-shadow-lg" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-6xl font-black text-gray-900 mb-6 drop-shadow-lg bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent", children: "Unsere Vision" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
                /* @__PURE__ */ jsxs("blockquote", { className: "text-4xl font-light text-gray-800 mb-12 leading-relaxed drop-shadow-md", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-8xl text-[#e24e1b] font-serif leading-none drop-shadow-xl animate-pulse", children: '"' }),
                  "Compliance, die sich",
                  /* @__PURE__ */ jsx("span", { className: "font-black text-[#e24e1b] bg-gradient-to-r from-orange-200 via-yellow-200 to-red-200 px-6 py-3 rounded-2xl mx-3 shadow-2xl border-2 border-orange-300 animate-pulse", children: "einfach erledigt" }),
                  /* @__PURE__ */ jsx("span", { className: "text-8xl text-[#e24e1b] font-serif leading-none drop-shadow-xl animate-pulse", style: { animationDelay: "0.5s" }, children: '"' })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-8 mt-12", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-orange-200", children: [
                    /* @__PURE__ */ jsx(Zap, { className: "w-12 h-12 text-[#e24e1b] mx-auto mb-4 drop-shadow-lg animate-bounce" }),
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-gray-700", children: "Schnell" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-orange-200", children: [
                    /* @__PURE__ */ jsx(Lock, { className: "w-12 h-12 text-[#e24e1b] mx-auto mb-4 drop-shadow-lg animate-bounce", style: { animationDelay: "0.2s" } }),
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-gray-700", children: "Sicher" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-orange-200", children: [
                    /* @__PURE__ */ jsx(Brain, { className: "w-12 h-12 text-[#e24e1b] mx-auto mb-4 drop-shadow-lg animate-bounce", style: { animationDelay: "0.4s" } }),
                    /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-gray-700", children: "Erklärbar" })
                  ] })
                ] })
              ] })
            ] }),
            activeTab === "mission" && /* @__PURE__ */ jsxs("div", { className: "text-center animate-fade-in", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
                /* @__PURE__ */ jsx("div", { className: "w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse transform hover:scale-110 transition-all duration-300", children: /* @__PURE__ */ jsx(Rocket, { className: "w-16 h-16 text-white drop-shadow-lg" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-6xl font-black text-gray-900 mb-6 drop-shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent", children: "Unsere Mission" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-2xl text-gray-700 leading-relaxed mb-12 drop-shadow-sm", children: [
                  "Eine ",
                  /* @__PURE__ */ jsx("span", { className: "font-black text-blue-600 bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-xl shadow-lg border-2 border-blue-300", children: "EU-/CH-gehostete, KI-native Plattform" }),
                  ", die Richtlinien analysiert, Lücken erklärt und Teams sicher zur Zertifizierung führt – mit ",
                  /* @__PURE__ */ jsx("span", { className: "font-black text-purple-600 bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 rounded-xl shadow-lg border-2 border-purple-300", children: "lückenloser Audit-Spur" }),
                  "."
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-200", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-black text-blue-600 mb-4 text-xl", children: "EU/CH-Hosted" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base text-gray-600", children: "Datenschutz by Design mit europäischen Standards" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-purple-200", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-black text-purple-600 mb-4 text-xl", children: "KI-Native" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base text-gray-600", children: "Intelligente Automatisierung mit Human-in-the-Loop" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-green-200", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-black text-green-600 mb-4 text-xl", children: "Analyse & Erklärung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base text-gray-600", children: "Komplexe Regulierungen verständlich aufbereitet" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-200", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-black text-orange-600 mb-4 text-xl", children: "Audit-Ready" }),
                    /* @__PURE__ */ jsx("p", { className: "text-base text-gray-600", children: "Lückenlose Dokumentation für Zertifizierungen" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl text-center text-white", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Welches Design gefällt am besten?" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl opacity-90 mb-8", children: "Jede Alternative hat ihren eigenen visuellen Charakter und Einsatzbereich" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white/20 backdrop-blur-sm p-4 rounded-xl", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "Alternative 1" }),
            /* @__PURE__ */ jsx("p", { className: "opacity-90", children: "Dramatisch & Kontrastreich" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/20 backdrop-blur-sm p-4 rounded-xl", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "Alternative 2" }),
            /* @__PURE__ */ jsx("p", { className: "opacity-90", children: "Modern & Schwebend" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/20 backdrop-blur-sm p-4 rounded-xl", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "Alternative 3" }),
            /* @__PURE__ */ jsx("p", { className: "opacity-90", children: "Asymmetrisch & Fokussiert" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/20 backdrop-blur-sm p-4 rounded-xl", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "Alternative 4" }),
            /* @__PURE__ */ jsx("p", { className: "opacity-90", children: "Interaktiv & Detailliert" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx("style", { jsx: true, children: `
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      ` })
  ] });
};
export {
  TestUns as default
};
