import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { H as HeroSection, D as DACHCompliance } from "./DACHCompliance-BMtsHU8V.js";
import { useState, useRef, useCallback, useEffect } from "react";
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
const ScrollTransformationUltimateDiagnostic = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [sessionData, setSessionData] = useState([]);
  const [scrollEvents, setScrollEvents] = useState([]);
  const [renderCount, setRenderCount] = useState(0);
  const sectionRef = useRef(null);
  const sessionId = useRef(0);
  const lastScrollDirection = useRef("none");
  const lastScrollY = useRef(0);
  const scrollSession = useRef([]);
  const trackScrollSession = useCallback((data) => {
    var _a, _b;
    const now = Date.now();
    const direction = data.scrollY > lastScrollY.current ? "down" : data.scrollY < lastScrollY.current ? "up" : "none";
    const isNewSession = now - (((_a = scrollSession.current[scrollSession.current.length - 1]) == null ? void 0 : _a.timestamp) || 0) > 500 || direction !== "none" && direction !== lastScrollDirection.current && lastScrollDirection.current !== "none";
    if (isNewSession) {
      sessionId.current++;
      if (scrollSession.current.length > 0) {
        setSessionData((prev) => {
          var _a2, _b2, _c, _d;
          return [...prev, {
            sessionId: sessionId.current - 1,
            events: [...scrollSession.current],
            summary: {
              direction: lastScrollDirection.current,
              startScrollY: ((_a2 = scrollSession.current[0]) == null ? void 0 : _a2.scrollY) || 0,
              endScrollY: ((_b2 = scrollSession.current[scrollSession.current.length - 1]) == null ? void 0 : _b2.scrollY) || 0,
              duration: (((_c = scrollSession.current[scrollSession.current.length - 1]) == null ? void 0 : _c.timestamp) || 0) - (((_d = scrollSession.current[0]) == null ? void 0 : _d.timestamp) || 0),
              stickyTransitions: scrollSession.current.filter((e) => e.stickyTransition).length,
              progressRange: {
                min: Math.min(...scrollSession.current.map((e) => e.progress)),
                max: Math.max(...scrollSession.current.map((e) => e.progress))
              }
            }
          }];
        });
      }
      scrollSession.current = [];
    }
    const eventData = {
      ...data,
      timestamp: now,
      direction,
      sessionId: sessionId.current,
      stickyTransition: data.isSticky !== (((_b = scrollSession.current[scrollSession.current.length - 1]) == null ? void 0 : _b.isSticky) || false)
    };
    scrollSession.current.push(eventData);
    setScrollEvents((prev) => [...prev.slice(-50), eventData]);
    lastScrollDirection.current = direction;
    lastScrollY.current = data.scrollY;
  }, []);
  useEffect(() => {
    setRenderCount((prev) => prev + 1);
  });
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const startTime = performance.now();
      const scrollY = window.scrollY;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      const headerHeight = 64;
      const parentChain = [];
      let currentElement = sectionRef.current.parentElement;
      let depth = 0;
      while (currentElement && depth < 10) {
        const style = window.getComputedStyle(currentElement);
        parentChain.push({
          tagName: currentElement.tagName,
          className: currentElement.className,
          position: style.position,
          overflow: style.overflow,
          overflowX: style.overflowX,
          overflowY: style.overflowY,
          transform: style.transform,
          zIndex: style.zIndex,
          height: style.height,
          maxHeight: style.maxHeight,
          offsetTop: currentElement.offsetTop,
          offsetHeight: currentElement.offsetHeight,
          clientHeight: currentElement.clientHeight,
          scrollTop: currentElement.scrollTop
        });
        currentElement = currentElement.parentElement;
        depth++;
      }
      const sectionTop = scrollY + rect.top;
      const sectionBottom = scrollY + rect.bottom;
      const method1_start = sectionTop - headerHeight;
      const method1_end = sectionTop + sectionHeight - windowHeight;
      const method1_sticky = rect.top <= headerHeight && rect.bottom > headerHeight;
      let method1_progress = 0;
      if (method1_sticky) {
        const scrolledPast = headerHeight - rect.top;
        const totalDistance = sectionHeight - windowHeight;
        method1_progress = totalDistance > 0 ? scrolledPast / totalDistance : 0;
      }
      const method2_start = sectionRef.current.offsetTop - headerHeight;
      const method2_end = method2_start + sectionHeight - windowHeight;
      const method2_sticky = scrollY >= method2_start && scrollY <= method2_end;
      const method2_progress = method2_sticky ? (scrollY - method2_start) / (method2_end - method2_start) : scrollY > method2_end ? 1 : 0;
      const viewportTop = scrollY;
      const viewportBottom = scrollY + windowHeight;
      const method3_sticky = sectionTop <= viewportTop + headerHeight && sectionBottom >= viewportBottom;
      const method3_progress = method3_sticky ? Math.max(0, Math.min(1, (viewportTop + headerHeight - sectionTop) / (sectionHeight - windowHeight))) : viewportTop + headerHeight > sectionBottom ? 1 : 0;
      const method4_sticky = rect.top <= headerHeight && rect.bottom >= windowHeight - headerHeight;
      const method4_progress = method4_sticky ? Math.max(0, Math.min(1, (headerHeight - rect.top) / (sectionHeight - windowHeight))) : rect.top < headerHeight - sectionHeight ? 1 : 0;
      setIsSticky(method1_sticky);
      setScrollProgress(Math.max(0, Math.min(1, method1_progress)));
      const endTime = performance.now();
      const diagnosticData = {
        // Basic measurements
        scrollY: Math.round(scrollY),
        windowHeight: Math.round(windowHeight),
        sectionHeight: Math.round(sectionHeight),
        sectionTop: Math.round(sectionTop),
        sectionBottom: Math.round(sectionBottom),
        rectTop: Math.round(rect.top),
        rectBottom: Math.round(rect.bottom),
        // Method comparisons
        method1: { sticky: method1_sticky, progress: Math.round(method1_progress * 100), start: Math.round(method1_start), end: Math.round(method1_end) },
        method2: { sticky: method2_sticky, progress: Math.round(method2_progress * 100), start: Math.round(method2_start), end: Math.round(method2_end) },
        method3: { sticky: method3_sticky, progress: Math.round(method3_progress * 100) },
        method4: { sticky: method4_sticky, progress: Math.round(method4_progress * 100) },
        // Performance
        calculationTime: Number((endTime - startTime).toFixed(2)),
        renderCount,
        // Element analysis
        elementData: {
          offsetTop: sectionRef.current.offsetTop,
          offsetLeft: sectionRef.current.offsetLeft,
          offsetWidth: sectionRef.current.offsetWidth,
          offsetHeight: sectionRef.current.offsetHeight,
          clientTop: sectionRef.current.clientTop,
          clientLeft: sectionRef.current.clientLeft,
          clientWidth: sectionRef.current.clientWidth,
          clientHeight: sectionRef.current.clientHeight,
          scrollTop: sectionRef.current.scrollTop,
          scrollLeft: sectionRef.current.scrollLeft,
          scrollWidth: sectionRef.current.scrollWidth,
          scrollHeight: sectionRef.current.scrollHeight
        },
        // CSS analysis
        computedStyle: {
          position: window.getComputedStyle(sectionRef.current).position,
          display: window.getComputedStyle(sectionRef.current).display,
          overflow: window.getComputedStyle(sectionRef.current).overflow,
          overflowX: window.getComputedStyle(sectionRef.current).overflowX,
          overflowY: window.getComputedStyle(sectionRef.current).overflowY,
          transform: window.getComputedStyle(sectionRef.current).transform,
          zIndex: window.getComputedStyle(sectionRef.current).zIndex,
          margin: window.getComputedStyle(sectionRef.current).margin,
          padding: window.getComputedStyle(sectionRef.current).padding,
          border: window.getComputedStyle(sectionRef.current).border,
          boxSizing: window.getComputedStyle(sectionRef.current).boxSizing
        },
        // Parent chain analysis
        parentChain,
        // State
        isSticky: method1_sticky,
        progress: Math.round(method1_progress * 100),
        // Disagreements
        stickyDisagreement: [method1_sticky, method2_sticky, method3_sticky, method4_sticky].filter((val, i, arr) => val !== arr[0]).length > 0,
        progressDisagreement: Math.max(
          Math.abs(method1_progress - method2_progress),
          Math.abs(method1_progress - method3_progress),
          Math.abs(method1_progress - method4_progress)
        ) > 0.1
      };
      trackScrollSession(diagnosticData);
    };
    let animationFrameId;
    const smoothScrollHandler = () => {
      handleScroll();
      animationFrameId = requestAnimationFrame(smoothScrollHandler);
    };
    smoothScrollHandler();
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [trackScrollSession, renderCount]);
  const latestEvent = scrollEvents[scrollEvents.length - 1];
  const latestSession = sessionData[sessionData.length - 1];
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "relative",
      style: { height: "300vh" },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "fixed top-4 left-4 z-50 bg-purple-900 text-white p-4 rounded text-xs max-w-2xl max-h-[80vh] overflow-y-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "font-bold mb-3 text-lg", children: "🔬 ULTIMATE DIAGNOSTIC" }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4 p-3 bg-purple-800 rounded", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: "Current State" }),
            latestEvent && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                "ScrollY: ",
                latestEvent.scrollY
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "Progress: ",
                latestEvent.progress,
                "%"
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "Sticky: ",
                latestEvent.isSticky ? "YES" : "NO"
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "Direction: ",
                latestEvent.direction
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "Session: #",
                latestEvent.sessionId
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "Renders: ",
                renderCount
              ] })
            ] })
          ] }),
          latestEvent && /* @__PURE__ */ jsxs("div", { className: "mb-4 p-3 bg-purple-800 rounded", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: "Method Comparison" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-2 text-xs", children: [
                /* @__PURE__ */ jsx("div", { children: "Method" }),
                /* @__PURE__ */ jsx("div", { children: "Sticky" }),
                /* @__PURE__ */ jsx("div", { children: "Progress" }),
                /* @__PURE__ */ jsx("div", { children: "Range" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-2", children: [
                /* @__PURE__ */ jsx("div", { children: "Rect-based" }),
                /* @__PURE__ */ jsx("div", { className: latestEvent.method1.sticky ? "text-green-300" : "text-red-300", children: latestEvent.method1.sticky ? "YES" : "NO" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  latestEvent.method1.progress,
                  "%"
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  latestEvent.method1.start,
                  "-",
                  latestEvent.method1.end
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-2", children: [
                /* @__PURE__ */ jsx("div", { children: "Absolute" }),
                /* @__PURE__ */ jsx("div", { className: latestEvent.method2.sticky ? "text-green-300" : "text-red-300", children: latestEvent.method2.sticky ? "YES" : "NO" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  latestEvent.method2.progress,
                  "%"
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  latestEvent.method2.start,
                  "-",
                  latestEvent.method2.end
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-2", children: [
                /* @__PURE__ */ jsx("div", { children: "Intersection" }),
                /* @__PURE__ */ jsx("div", { className: latestEvent.method3.sticky ? "text-green-300" : "text-red-300", children: latestEvent.method3.sticky ? "YES" : "NO" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  latestEvent.method3.progress,
                  "%"
                ] }),
                /* @__PURE__ */ jsx("div", { children: "-" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-2", children: [
                /* @__PURE__ */ jsx("div", { children: "Rect-relative" }),
                /* @__PURE__ */ jsx("div", { className: latestEvent.method4.sticky ? "text-green-300" : "text-red-300", children: latestEvent.method4.sticky ? "YES" : "NO" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  latestEvent.method4.progress,
                  "%"
                ] }),
                /* @__PURE__ */ jsx("div", { children: "-" })
              ] })
            ] }),
            latestEvent.stickyDisagreement && /* @__PURE__ */ jsx("div", { className: "mt-2 text-red-300", children: "🚨 STICKY METHODS DISAGREE!" }),
            latestEvent.progressDisagreement && /* @__PURE__ */ jsx("div", { className: "mt-2 text-orange-300", children: "⚠️ PROGRESS METHODS DIFFER SIGNIFICANTLY!" })
          ] }),
          latestEvent && /* @__PURE__ */ jsxs("div", { className: "mb-4 p-3 bg-purple-800 rounded", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: "Element Analysis" }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                "OffsetTop: ",
                latestEvent.elementData.offsetTop
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "ClientHeight: ",
                latestEvent.elementData.clientHeight
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "ScrollHeight: ",
                latestEvent.elementData.scrollHeight
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "Position: ",
                latestEvent.computedStyle.position
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "Overflow: ",
                latestEvent.computedStyle.overflow
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "Transform: ",
                latestEvent.computedStyle.transform !== "none" ? "YES" : "NO"
              ] })
            ] })
          ] }),
          latestEvent && latestEvent.parentChain && /* @__PURE__ */ jsxs("div", { className: "mb-4 p-3 bg-purple-800 rounded", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: "Parent Chain Issues" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-1 text-xs", children: latestEvent.parentChain.slice(0, 5).map((parent, i) => /* @__PURE__ */ jsxs("div", { className: parent.overflow !== "visible" ? "text-yellow-300" : "", children: [
              parent.tagName,
              ": ",
              parent.overflow !== "visible" ? `overflow:${parent.overflow}` : "OK"
            ] }, i)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4 p-3 bg-purple-800 rounded", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: "Session Analysis" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                "Total Sessions: ",
                sessionData.length
              ] }),
              latestSession && /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-xs", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  "Last: ",
                  latestSession.summary.direction,
                  " scroll"
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  "Duration: ",
                  latestSession.summary.duration,
                  "ms"
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  "Sticky Transitions: ",
                  latestSession.summary.stickyTransitions
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  "Progress: ",
                  latestSession.summary.progressRange.min,
                  "%-",
                  latestSession.summary.progressRange.max,
                  "%"
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-4 p-3 bg-purple-800 rounded", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: "Recent Events (Last 10)" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-1", children: scrollEvents.slice(-10).map((event, i) => /* @__PURE__ */ jsxs("div", { className: "text-xs grid grid-cols-5 gap-1", children: [
              /* @__PURE__ */ jsx("div", { children: event.direction }),
              /* @__PURE__ */ jsx("div", { children: event.scrollY }),
              /* @__PURE__ */ jsxs("div", { children: [
                event.progress,
                "%"
              ] }),
              /* @__PURE__ */ jsx("div", { className: event.isSticky ? "text-green-300" : "text-red-300", children: event.isSticky ? "S" : "N" }),
              /* @__PURE__ */ jsxs("div", { children: [
                "#",
                event.sessionId
              ] })
            ] }, i)) })
          ] }),
          latestEvent && /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-800 rounded", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: "Performance" }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                "Calc Time: ",
                latestEvent.calculationTime,
                "ms"
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                "Render Count: ",
                renderCount
              ] }),
              latestEvent.calculationTime > 5 && /* @__PURE__ */ jsx("div", { className: "text-yellow-300", children: "⚠️ Slow calculation!" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "fixed top-4 right-4 z-50 bg-red-600 text-white px-3 py-1 rounded text-sm", children: "🔬 ULTIMATE DIAGNOSTIC" }),
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
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 max-w-md mx-auto", children: "ULTIMATE DIAGNOSTIC: Deep pattern analysis with method comparison, session tracking, and root cause detection" }),
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
const TestUltimateDiagnostic = () => {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsx(HeroSection, {}),
      /* @__PURE__ */ jsx(ScrollTransformationUltimateDiagnostic, {}),
      /* @__PURE__ */ jsx(DACHCompliance, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  TestUltimateDiagnostic as default
};
