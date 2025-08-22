import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Shield, BookOpen, Download, Map, Target, MessageSquare, Send, Scale, Route, FileText, GraduationCap, AlertTriangle, Activity, CheckCircle, Settings, Zap, TrendingUp, Clock, Award, Globe, BarChart3, ArrowLeft, ArrowRight, Users, Building2, Building, UserCheck, ExternalLink, Share2, Search, Mail, Lock, Eye, Briefcase, Factory, Heart, X, Check, Gavel, Calendar, Euro, Lightbulb, AlertCircle, Star, Database, Server, Network, Bell, Edit3, Monitor, Info, RotateCcw, FlaskConical, Rocket, TrendingDown, Minus, RefreshCw, Brain, Link2, Smartphone, ChevronDown } from "lucide-react";
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
const useCounter = (end, duration = 2e3, startCounting = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startCounting) return;
    let startTime;
    let animationFrame;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);
  return count;
};
const AnimatedCounter = ({ end, duration = 2e3, suffix = "", prefix = "" }) => {
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: "-100px" });
  const count = useCounter(end, duration, isInView);
  return /* @__PURE__ */ jsxs("span", { ref: elementRef, className: "font-bold text-2xl", children: [
    prefix,
    count.toLocaleString(),
    suffix
  ] });
};
const ExpandableSection = ({ title, children, defaultExpanded = false, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  return /* @__PURE__ */ jsx(Card, { className: "mb-6 overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsExpanded(!isExpanded),
        className: "w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
            Icon && /* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 text-blue-600" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-gray-900", children: title })
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { rotate: isExpanded ? 180 : 0 },
              transition: { duration: 0.2 },
              children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-gray-500" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: false,
        animate: {
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0
        },
        transition: { duration: 0.3, ease: "easeInOut" },
        style: { overflow: "hidden" },
        children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-6", children })
      }
    )
  ] }) });
};
const HinweisgeberschutzgesetzGuide = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [completedSections, setCompletedSections] = useState([]);
  const [selectedTab, setSelectedTab] = useState("overview");
  const [readingProgress, setReadingProgress] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const sections = [
    { id: 1, title: "Überblick", icon: BookOpen, color: "from-blue-500 to-blue-600" },
    { id: 2, title: "Anwendungsbereich", icon: Target, color: "from-green-500 to-green-600" },
    { id: 3, title: "Hinweisgebersystem", icon: MessageSquare, color: "from-purple-500 to-purple-600" },
    { id: 4, title: "Meldeverfahren", icon: Send, color: "from-red-500 to-red-600" },
    { id: 5, title: "Schutzmaßnahmen", icon: Shield, color: "from-yellow-500 to-yellow-600" },
    { id: 6, title: "Rechtliche Grundlagen", icon: Scale, color: "from-indigo-500 to-indigo-600" },
    { id: 7, title: "Verfahrensschritte", icon: Route, color: "from-pink-500 to-pink-600" },
    { id: 8, title: "Dokumentation", icon: FileText, color: "from-teal-500 to-teal-600" },
    { id: 9, title: "Schulungen", icon: GraduationCap, color: "from-orange-500 to-orange-600" },
    { id: 10, title: "Risikomanagement", icon: AlertTriangle, color: "from-gray-500 to-gray-600" },
    { id: 11, title: "Monitoring", icon: Activity, color: "from-cyan-500 to-cyan-600" },
    { id: 12, title: "Compliance", icon: CheckCircle, color: "from-emerald-500 to-emerald-600" },
    { id: 13, title: "Technische Umsetzung", icon: Settings, color: "from-violet-500 to-violet-600" },
    { id: 14, title: "Implementierung", icon: Zap, color: "from-rose-500 to-rose-600" },
    { id: 15, title: "Continuous Improvement", icon: TrendingUp, color: "from-lime-500 to-lime-600" }
  ];
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight * 100;
      setReadingProgress(Math.min(progress, 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const markSectionComplete = (sectionId) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "fixed top-0 left-0 w-full h-1 bg-gray-200 z-50", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "h-full bg-gradient-to-r from-blue-500 to-purple-600",
        style: { width: `${readingProgress}%` },
        transition: { duration: 0.1 }
      }
    ) }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: heroRef,
        style: { y },
        className: "relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white",
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20" }),
          /* @__PURE__ */ jsx("div", { className: "relative container mx-auto px-6 py-24", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "text-center max-w-4xl mx-auto",
              children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { duration: 0.5, delay: 0.2 },
                    className: "inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8 backdrop-blur-sm",
                    children: /* @__PURE__ */ jsx(Shield, { className: "h-10 w-10 text-white" })
                  }
                ),
                /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200", children: "Hinweisgeberschutzgesetz" }),
                /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-semibold mb-8 text-blue-100", children: "Comprehensive Whistleblower Protection Guide" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed", children: "Umfassende Anleitung zur Implementierung des Hinweisgeberschutzgesetzes (HinSchG) mit praktischen Lösungen, rechtlichen Grundlagen und technischen Anforderungen" }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8 mb-12", children: [
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: 0.4 },
                      className: "text-center",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { end: 15, suffix: "" }) }),
                        /* @__PURE__ */ jsx("div", { className: "text-blue-200", children: "Detaillierte Abschnitte" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: 0.5 },
                      className: "text-center",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { end: 250, suffix: "+" }) }),
                        /* @__PURE__ */ jsx("div", { className: "text-blue-200", children: "Rechtsparagraphen" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: 0.6 },
                      className: "text-center",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { end: 85, suffix: "%" }) }),
                        /* @__PURE__ */ jsx("div", { className: "text-blue-200", children: "Implementierungsrate" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: 0.7 },
                      className: "text-center",
                      children: [
                        /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { end: 2023, suffix: "" }) }),
                        /* @__PURE__ */ jsx("div", { className: "text-blue-200", children: "Gesetz in Kraft" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.8 },
                    className: "flex flex-col sm:flex-row gap-4 justify-center",
                    children: [
                      /* @__PURE__ */ jsxs(
                        Button,
                        {
                          size: "lg",
                          className: "bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4",
                          onClick: () => setSelectedTab("overview"),
                          children: [
                            /* @__PURE__ */ jsx(BookOpen, { className: "mr-2 h-5 w-5" }),
                            "Guide starten"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        Button,
                        {
                          size: "lg",
                          variant: "outline",
                          className: "border-white text-white hover:bg-white/10 text-lg px-8 py-4",
                          children: [
                            /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                            "Checkliste herunterladen"
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 py-16", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-12", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5 },
          className: "lg:w-80 lg:sticky lg:top-24 lg:self-start",
          children: [
            /* @__PURE__ */ jsx(Card, { className: "mb-8", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4 flex items-center", children: [
                /* @__PURE__ */ jsx(Map, { className: "mr-2 h-5 w-5 text-blue-600" }),
                "Inhaltsverzeichnis"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: sections.map((section) => /* @__PURE__ */ jsxs(
                motion.button,
                {
                  onClick: () => setCurrentSection(section.id),
                  className: `w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${currentSection === section.id ? "bg-blue-100 text-blue-700 shadow-md" : "hover:bg-gray-50 text-gray-700"}`,
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: `p-2 rounded-lg bg-gradient-to-r ${section.color}`, children: /* @__PURE__ */ jsx(section.icon, { className: "h-4 w-4 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsx("div", { className: "font-medium", children: section.title }),
                      /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500", children: [
                        "Abschnitt ",
                        section.id
                      ] })
                    ] }),
                    completedSections.includes(section.id) && /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-500" })
                  ]
                },
                section.id
              )) })
            ] }) }),
            /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold mb-4 flex items-center", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "mr-2 h-5 w-5 text-green-600" }),
                "Fortschritt"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-gray-600 mb-2", children: [
                  /* @__PURE__ */ jsx("span", { children: "Abgeschlossen" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    completedSections.length,
                    "/",
                    sections.length
                  ] })
                ] }),
                /* @__PURE__ */ jsx(Progress, { value: completedSections.length / sections.length * 100, className: "h-2" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-sm", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-gray-500" }),
                  /* @__PURE__ */ jsx("span", { children: "Geschätzte Lesezeit: 45 Min" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-sm", children: [
                  /* @__PURE__ */ jsx(Target, { className: "h-4 w-4 text-blue-500" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    "Aktueller Abschnitt: ",
                    currentSection
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-sm", children: [
                  /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 text-yellow-500" }),
                  /* @__PURE__ */ jsx("span", { children: "Schwierigkeitsgrad: Hoch" })
                ] })
              ] })
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: 50 },
          animate: { opacity: 1, x: 0 },
          transition: { duration: 0.5 },
          className: "flex-1",
          children: [
            currentSection === 1 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl", children: /* @__PURE__ */ jsx(BookOpen, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Überblick" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Einführung in das Hinweisgeberschutzgesetz" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [
                    /* @__PURE__ */ jsx(Card, { className: "border-l-4 border-l-blue-500", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4 flex items-center", children: [
                        /* @__PURE__ */ jsx(Scale, { className: "mr-2 h-5 w-5 text-blue-600" }),
                        "Gesetzlicher Rahmen"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("strong", { className: "text-blue-700", children: "Hinweisgeberschutzgesetz (HinSchG)" }),
                          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: "Umsetzung der EU-Whistleblower-Richtlinie 2019/1937 in deutsches Recht. Schutz von Personen, die Verstöße gegen Unionsrecht melden." })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("strong", { className: "text-blue-700", children: "Inkrafttreten" }),
                          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: "2. Juli 2023 für Unternehmen ab 250 Beschäftigten" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("strong", { className: "text-blue-700", children: "Erweiterte Anwendung" }),
                          /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: "17. Dezember 2023 für Unternehmen ab 50 Beschäftigten" })
                        ] })
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "border-l-4 border-l-green-500", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold mb-4 flex items-center", children: [
                        /* @__PURE__ */ jsx(Target, { className: "mr-2 h-5 w-5 text-green-600" }),
                        "Zentrale Ziele"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Schutz von Hinweisgebern vor Repressalien" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Förderung der Meldung von Rechtsverstößen" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Stärkung der Compliance-Kultur" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "Prävention von Schäden für Gesellschaft" })
                        ] })
                      ] })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Rechtliche Grundlagen des HinSchG",
                      icon: Scale,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-3", children: "EU-Whistleblower-Richtlinie 2019/1937" }),
                          /* @__PURE__ */ jsx("p", { className: "text-blue-800 mb-4", children: "Die Richtlinie zum Schutz von Personen, die Verstöße gegen das Unionsrecht melden, bildet die rechtliche Grundlage für das deutsche Hinweisgeberschutzgesetz." }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Geschützte Bereiche" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Öffentliches Auftragswesen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Finanzdienstleistungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Geldwäscheprävention" }),
                                /* @__PURE__ */ jsx("li", { children: "• Produktsicherheit und -konformität" }),
                                /* @__PURE__ */ jsx("li", { children: "• Verkehrssicherheit" }),
                                /* @__PURE__ */ jsx("li", { children: "• Umweltschutz" }),
                                /* @__PURE__ */ jsx("li", { children: "• Strahlenschutz" }),
                                /* @__PURE__ */ jsx("li", { children: "• Lebensmittel- und Futtermittelsicherheit" }),
                                /* @__PURE__ */ jsx("li", { children: "• Tiergesundheit und Tierschutz" }),
                                /* @__PURE__ */ jsx("li", { children: "• Gesundheitsschutz" }),
                                /* @__PURE__ */ jsx("li", { children: "• Verbraucherschutz" }),
                                /* @__PURE__ */ jsx("li", { children: "• Schutz der Privatsphäre" }),
                                /* @__PURE__ */ jsx("li", { children: "• Datenschutz und Netzsicherheit" }),
                                /* @__PURE__ */ jsx("li", { children: "• Finanzinteressen der Union" }),
                                /* @__PURE__ */ jsx("li", { children: "• Binnenmarkt (Wettbewerbsrecht)" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Kernanforderungen" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Sichere Meldekanäle" }),
                                /* @__PURE__ */ jsx("li", { children: "• Vertraulichkeitsschutz" }),
                                /* @__PURE__ */ jsx("li", { children: "• Verbot von Repressalien" }),
                                /* @__PURE__ */ jsx("li", { children: "• Angemessene Folgemaßnahmen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Beweislastumkehr" }),
                                /* @__PURE__ */ jsx("li", { children: "• Informations- und Beratungsrechte" })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-3", children: "Nationales Hinweisgeberschutzgesetz" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-2", children: "Struktur des Gesetzes" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Teil 1: Allgemeine Bestimmungen (§§ 1-3)" }),
                                /* @__PURE__ */ jsx("li", { children: "• Teil 2: Interne Meldestellen (§§ 4-16)" }),
                                /* @__PURE__ */ jsx("li", { children: "• Teil 3: Externe Meldestellen (§§ 17-25)" }),
                                /* @__PURE__ */ jsx("li", { children: "• Teil 4: Schutz vor Repressalien (§§ 26-36)" }),
                                /* @__PURE__ */ jsx("li", { children: "• Teil 5: Verfahrensbestimmungen (§§ 37-42)" }),
                                /* @__PURE__ */ jsx("li", { children: "• Teil 6: Bußgeld und Schlussbestimmungen (§§ 43-45)" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-2", children: "Zentrale Begriffe" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-gray-700", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Hinweisgeber:" }),
                                  " Person, die einen Verstoß meldet"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Meldung:" }),
                                  " Übermittlung von Informationen über Verstöße"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Verstoß:" }),
                                  " Rechtswidriges Verhalten in geschützten Bereichen"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Repressalie:" }),
                                  " Negative Reaktion auf eine Meldung"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-2", children: "Sanktionen" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Bußgeld bis 20.000 € für Behinderung von Meldungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Bußgeld bis 50.000 € für Repressalien" }),
                                /* @__PURE__ */ jsx("li", { children: "• Bußgeld bis 20.000 € für Verletzung der Vertraulichkeit" }),
                                /* @__PURE__ */ jsx("li", { children: "• Zivilrechtliche Ansprüche auf Schadensersatz" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Internationale Entwicklungen und Best Practices",
                      icon: Globe,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-3", children: "USA - Sarbanes-Oxley Act" }),
                            /* @__PURE__ */ jsx("p", { className: "text-blue-800 mb-4", children: "Pioniergesetz für Whistleblower-Schutz in börsennotierten Unternehmen seit 2002." }),
                            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-blue-800", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Schutzbereich:" }),
                                " Börsennotierte Unternehmen"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Meldekanäle:" }),
                                " SEC, OSHA, interne Stellen"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Sanktionen:" }),
                                " Bis zu 25 Jahre Haft für Repressalien"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Besonderheit:" }),
                                " Whistleblower-Prämien möglich"
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-3", children: "UK - Public Interest Disclosure Act" }),
                            /* @__PURE__ */ jsx("p", { className: "text-green-800 mb-4", children: 'Umfassender Schutz für "Protected Disclosures" seit 1998.' }),
                            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-green-800", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Schutzbereich:" }),
                                " Alle Arbeitnehmer"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Besonderheit:" }),
                                ' "Public Interest Test"'
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Sanktionen:" }),
                                " Unbegrenzte Entschädigung"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Innovation:" }),
                                " Prescribed Persons System"
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-3", children: "Frankreich - Sapin II" }),
                            /* @__PURE__ */ jsx("p", { className: "text-purple-800 mb-4", children: "Französisches Anti-Korruptionsgesetz mit Whistleblower-Schutz seit 2016." }),
                            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-purple-800", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Schutzbereich:" }),
                                " Unternehmen ab 500 Mitarbeitern"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Besonderheit:" }),
                                " Agence Française Anticorruption"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Fokus:" }),
                                " Korruption, Interessenkonflikte"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Innovation:" }),
                                " Compliance-Programme verpflichtend"
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-900 mb-3", children: "Australien - Corporations Act" }),
                            /* @__PURE__ */ jsx("p", { className: "text-orange-800 mb-4", children: "Verstärkter Whistleblower-Schutz durch Treasury Laws Amendment Act 2019." }),
                            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-orange-800", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Schutzbereich:" }),
                                " Körperschaften"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Besonderheit:" }),
                                " Anonyme Meldungen"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Sanktionen:" }),
                                " Bis zu AUD 1,05 Mio."
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { children: "Innovation:" }),
                                " Whistleblower-Richtlinien verpflichtend"
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Best Practice Erkenntnisse" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-2", children: "Erfolgs faktoren" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Starke rechtliche Grundlage" }),
                                /* @__PURE__ */ jsx("li", { children: "• Unabhängige Aufsichtsbehörden" }),
                                /* @__PURE__ */ jsx("li", { children: "• Angemessene Ressourcen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Klare Verfahren" }),
                                /* @__PURE__ */ jsx("li", { children: "• Sensibilisierung der Öffentlichkeit" }),
                                /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Evaluierung" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-2", children: "Häufige Herausforderungen" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Angst vor Repressalien" }),
                                /* @__PURE__ */ jsx("li", { children: "• Mangelndes Bewusstsein" }),
                                /* @__PURE__ */ jsx("li", { children: "• Komplexe Verfahren" }),
                                /* @__PURE__ */ jsx("li", { children: "• Unzureichende Ressourcen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Kulturelle Barrieren" }),
                                /* @__PURE__ */ jsx("li", { children: "• Fehlende Folgemaßnahmen" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-2", children: "Innovations ansätze" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• KI-gestützte Risikoerkennung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Blockchain-basierte Meldungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Mobile Meldeapps" }),
                                /* @__PURE__ */ jsx("li", { children: "• Predictive Analytics" }),
                                /* @__PURE__ */ jsx("li", { children: "• Automatisierte Folgemaßnahmen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Gamification-Elemente" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Statistiken und Marktentwicklung",
                      icon: BarChart3,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
                          /* @__PURE__ */ jsxs(Card, { className: "text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100", children: [
                            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-600 mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { end: 73, suffix: "%" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-800", children: "Unternehmen mit interner Meldestelle" })
                          ] }),
                          /* @__PURE__ */ jsxs(Card, { className: "text-center p-6 bg-gradient-to-br from-green-50 to-green-100", children: [
                            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-green-600 mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { end: 156, suffix: "%" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-sm text-green-800", children: "Anstieg der Meldungen 2023" })
                          ] }),
                          /* @__PURE__ */ jsxs(Card, { className: "text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100", children: [
                            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-purple-600 mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { end: 89, suffix: "%" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-sm text-purple-800", children: "Meldungen führen zu Maßnahmen" })
                          ] }),
                          /* @__PURE__ */ jsxs(Card, { className: "text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100", children: [
                            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-orange-600 mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { end: 42, suffix: " Tage" }) }),
                            /* @__PURE__ */ jsx("div", { className: "text-sm text-orange-800", children: "Durchschnittliche Bearbeitungszeit" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Marktentwicklung Hinweisgebersysteme" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Marktvolumen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-gray-700", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  "Globaler Markt 2023: ",
                                  /* @__PURE__ */ jsx("strong", { children: "$15,7 Mrd." })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  "Deutschland 2023: ",
                                  /* @__PURE__ */ jsx("strong", { children: "€420 Mio." })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  "Wachstumsrate CAGR: ",
                                  /* @__PURE__ */ jsx("strong", { children: "12,3%" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  "Prognose 2030: ",
                                  /* @__PURE__ */ jsx("strong", { children: "€950 Mio." })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Hauptanbieter" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-gray-700", children: [
                                /* @__PURE__ */ jsx("div", { children: "• NAVEX Global (38% Marktanteil)" }),
                                /* @__PURE__ */ jsx("div", { children: "• EthicsPoint (22%)" }),
                                /* @__PURE__ */ jsx("div", { children: "• KPMG Integrity (15%)" }),
                                /* @__PURE__ */ jsx("div", { children: "• Deloitte Speak Up (12%)" }),
                                /* @__PURE__ */ jsx("div", { children: "• Deutsche Anbieter (13%)" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Technologietrends" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-gray-700", children: [
                                /* @__PURE__ */ jsx("div", { children: "• Cloud-basierte Lösungen: 87%" }),
                                /* @__PURE__ */ jsx("div", { children: "• Mobile Apps: 64%" }),
                                /* @__PURE__ */ jsx("div", { children: "• KI-Integration: 31%" }),
                                /* @__PURE__ */ jsx("div", { children: "• Blockchain: 8%" }),
                                /* @__PURE__ */ jsx("div", { children: "• Analytics-Tools: 76%" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(Button, { variant: "outline", disabled: true, children: [
                      /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                      "Vorheriger Abschnitt"
                    ] }),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(1);
                          setCurrentSection(2);
                        },
                        className: "bg-blue-600 hover:bg-blue-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 2 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl", children: /* @__PURE__ */ jsx(Target, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Anwendungsbereich" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Wer ist verpflichtet und welche Bereiche sind geschützt?" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Persönlicher Anwendungsbereich",
                      icon: Users,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Geschützte Personen (§ 1 HinSchG)" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Primär geschützte Personen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Beschäftigte" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Arbeitnehmer, Beamte, Richter, Soldaten, Auszubildende, Praktikanten, Volontäre, ehrenamtlich Tätige" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Selbständige" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Freiberufler, Consultants, Subunternehmer in Auftrags- oder Vertragsverhältnis" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Gesellschafter" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Aktionäre, GmbH-Gesellschafter mit arbeitnehmerähnlicher Stellung" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Erweitert geschützte Personen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Bewerber" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Personen im Bewerbungsverfahren oder Vorstellungsgespräch" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Ehemalige Beschäftigte" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Schutz für Personen, deren Arbeitsverhältnis beendet wurde" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Dritte Personen" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Personen, die mit Hinweisgebern in Verbindung stehen (Kollegen, Verwandte, Rechtsberater)" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Besondere Personengruppen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Beamte" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Vollumfänglicher Schutz" }),
                                /* @__PURE__ */ jsx("li", { children: "• Keine Konflikte mit Remonstrationspflicht" }),
                                /* @__PURE__ */ jsx("li", { children: "• Besondere Fürsorgepflicht des Dienstherrn" }),
                                /* @__PURE__ */ jsx("li", { children: "• Disziplinarrecht bleibt unberührt" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Geheimnisträger" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Abwägung mit Schweigepflichten" }),
                                /* @__PURE__ */ jsx("li", { children: "• Anwälte: Besondere Interessenabwägung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Ärzte: Patientenschutz beachten" }),
                                /* @__PURE__ */ jsx("li", { children: "• Journalisten: Quellenschutz" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Ausländische Arbeitnehmer" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Vollumfänglicher Schutz" }),
                                /* @__PURE__ */ jsx("li", { children: "• Keine aufenthaltsrechtlichen Nachteile" }),
                                /* @__PURE__ */ jsx("li", { children: "• Mehrsprachige Informationen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Besondere Schutzbedürftigkeit" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Sachlicher Anwendungsbereich",
                      icon: Scale,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Geschützte Rechtsbereiche" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "EU-Recht (Anhang zur EU-Richtlinie)" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-purple-800", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Öffentliches Auftragswesen:" }),
                                  /* @__PURE__ */ jsx("br", {}),
                                  "RL 2014/23/EU, RL 2014/24/EU, RL 2014/25/EU, RL 2009/81/EG"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Finanzdienstleistungen:" }),
                                  /* @__PURE__ */ jsx("br", {}),
                                  "RL 2013/36/EU, VO (EU) 575/2013, RL 2014/65/EU, RL 2016/97/EU"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Geldwäscheprävention:" }),
                                  /* @__PURE__ */ jsx("br", {}),
                                  "RL (EU) 2015/849, VO (EU) 2015/847"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Produktsicherheit:" }),
                                  /* @__PURE__ */ jsx("br", {}),
                                  "RL 2001/95/EG, VO (EG) 765/2008, VO (EU) 2019/1020"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Weitere geschützte Bereiche" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-purple-800", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Verkehrssicherheit:" }),
                                  /* @__PURE__ */ jsx("br", {}),
                                  "VO (EU) 2018/858, VO (EU) 2018/1139, RL 2008/68/EG"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Umweltschutz:" }),
                                  /* @__PURE__ */ jsx("br", {}),
                                  "RL 2010/75/EU, VO (EG) 1013/2006, RL 2008/99/EG"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Datenschutz:" }),
                                  /* @__PURE__ */ jsx("br", {}),
                                  "VO (EU) 2016/679 (DSGVO), RL (EU) 2016/680"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Netzwerksicherheit:" }),
                                  /* @__PURE__ */ jsx("br", {}),
                                  "RL (EU) 2016/1148 (NIS), VO (EU) 2019/881"
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-red-900 mb-4", children: "Nationales Recht (§ 2 HinSchG)" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-900 mb-2", children: "Straftaten" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Alle Straftaten nach StGB" }),
                                /* @__PURE__ */ jsx("li", { children: "• Nebenstrafrecht (z.B. Steuerrecht)" }),
                                /* @__PURE__ */ jsx("li", { children: "• Ordnungswidrigkeiten mit Bußgeld ab 20.000 €" }),
                                /* @__PURE__ */ jsx("li", { children: "• Versuch und Vorbereitung" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-900 mb-2", children: "Arbeitsrecht" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Verstöße gegen Mindestlohngesetz" }),
                                /* @__PURE__ */ jsx("li", { children: "• Arbeitszeitgesetz" }),
                                /* @__PURE__ */ jsx("li", { children: "• Arbeitsschutzgesetze" }),
                                /* @__PURE__ */ jsx("li", { children: "• Schwarzarbeit" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-900 mb-2", children: "Weitere Bereiche" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Steuerrecht" }),
                                /* @__PURE__ */ jsx("li", { children: "• Sozialversicherungsrecht" }),
                                /* @__PURE__ */ jsx("li", { children: "• Kapitalmarktrecht" }),
                                /* @__PURE__ */ jsx("li", { children: "• Kartellrecht" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Unternehmensspezifische Anwendung",
                      icon: Building2,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Größenabhängige Verpflichtungen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsx(Card, { className: "border-2 border-red-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-red-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx(Building, { className: "mr-2 h-5 w-5" }),
                                "250+ Beschäftigte"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-red-800", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Seit:" }),
                                  " 2. Juli 2023"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Verpflichtung:" }),
                                  " Vollumfänglich"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Interne Meldestelle:" }),
                                  " Ja"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Externe Option:" }),
                                  " Ja"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Öffentliche Stellen:" }),
                                  " Alle"
                                ] })
                              ] })
                            ] }) }),
                            /* @__PURE__ */ jsx(Card, { className: "border-2 border-orange-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-orange-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx(Building, { className: "mr-2 h-5 w-5" }),
                                "50-249 Beschäftigte"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-orange-800", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Seit:" }),
                                  " 17. Dezember 2023"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Verpflichtung:" }),
                                  " Grundsätzlich"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Interne Meldestelle:" }),
                                  " Wahlweise"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Externe Option:" }),
                                  " Ja"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Erleichterungen:" }),
                                  " Möglich"
                                ] })
                              ] })
                            ] }) }),
                            /* @__PURE__ */ jsx(Card, { className: "border-2 border-green-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-green-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx(Building, { className: "mr-2 h-5 w-5" }),
                                "Unter 50 Beschäftigte"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-green-800", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Verpflichtung:" }),
                                  " Keine"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Freiwillige Einführung:" }),
                                  " Möglich"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Externe Option:" }),
                                  " Verfügbar"
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Schutz:" }),
                                  " Bei Meldung dennoch gegeben"
                                ] })
                              ] })
                            ] }) })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-indigo-900 mb-4", children: "Besondere Branchen und Sektoren" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-3", children: "Finanzsektor" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-indigo-800", children: [
                                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("strong", { children: "Besonderheiten:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "space-y-1 ml-4", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Zusätzliche Meldepflichten an BaFin" }),
                                  /* @__PURE__ */ jsx("li", { children: "• MaRisk-Anforderungen beachten" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Geldwäsche-Compliance" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Whistleblower-Prämien nach WpHG" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Besondere Risiken:" }),
                                  /* @__PURE__ */ jsx("br", {}),
                                  "Marktmanipulation, Insiderhandel, Compliance-Verstöße"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-3", children: "Gesundheitswesen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-indigo-800", children: [
                                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("strong", { children: "Besonderheiten:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "space-y-1 ml-4", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Patientenschutz hat Vorrang" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Schweigepflicht beachten" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Arzneimittelsicherheit" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Medizinprodukte-Sicherheit" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Besondere Risiken:" }),
                                  /* @__PURE__ */ jsx("br", {}),
                                  "Patientengefährdung, Abrechnungsbetrug, Hygieneverstöße"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-3", children: "Automotive" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-indigo-800", children: [
                                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("strong", { children: "Besonderheiten:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "space-y-1 ml-4", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Verkehrssicherheit" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Produkthaftung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Emissions-Compliance" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Lieferketten-Compliance" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Besondere Risiken:" }),
                                  /* @__PURE__ */ jsx("br", {}),
                                  "Sicherheitsmängel, Umweltverstöße, Kartellrecht"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-3", children: "Pharma" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-indigo-800", children: [
                                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("strong", { children: "Besonderheiten:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "space-y-1 ml-4", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Arzneimittelsicherheit" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Klinische Studien" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Pharmacovigilance" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Internationale Compliance" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "mt-3", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Besondere Risiken:" }),
                                  /* @__PURE__ */ jsx("br", {}),
                                  "Patientensicherheit, Datenfälschung, Korruption"
                                ] })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(1),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(2);
                          setCurrentSection(3);
                        },
                        className: "bg-green-600 hover:bg-green-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 3 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl", children: /* @__PURE__ */ jsx(MessageSquare, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Hinweisgebersystem" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Aufbau und Struktur interner Meldestellen" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Interne Meldestellen (§§ 4-16 HinSchG)",
                      icon: Building2,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Grundanforderungen (§ 4 HinSchG)" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Strukturelle Anforderungen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Unabhängigkeit" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "Organisatorische Trennung von operativen Geschäftsbereichen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Fachliche Kompetenz" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "Rechtskenntnisse, Investigationsfähigkeiten, Branchenwissen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Ausreichende Ressourcen" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "Personal, Budget, technische Ausstattung" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Funktionale Anforderungen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Erreichbarkeit" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "24/7 verfügbar, mehrere Kanäle, barrierefrei" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Vertraulichkeit" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "Anonyme Meldungen möglich, Datenschutz gewährleistet" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-purple-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Nachverfolgung" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "Dokumentation, Berichtswesen, Feedback-Mechanismus" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Organisationsmodelle" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsx(Card, { className: "border-2 border-blue-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-blue-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx(UserCheck, { className: "mr-2 h-5 w-5" }),
                                "Interne Besetzung"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-blue-800", children: [
                                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("strong", { children: "Vorteile:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "space-y-1 ml-4", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Tiefes Unternehmenswissen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Direkte Kommunikationswege" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Kostengünstiger" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Schnelle Reaktionszeiten" })
                                ] }),
                                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("strong", { children: "Nachteile:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "space-y-1 ml-4", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Interessenkonflikte möglich" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Vertrauensdefizit" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Befangenheitsrisiko" })
                                ] })
                              ] })
                            ] }) }),
                            /* @__PURE__ */ jsx(Card, { className: "border-2 border-green-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-green-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx(ExternalLink, { className: "mr-2 h-5 w-5" }),
                                "Externe Dienstleister"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-green-800", children: [
                                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("strong", { children: "Vorteile:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "space-y-1 ml-4", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Hohe Unabhängigkeit" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Spezialisierte Expertise" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Höheres Vertrauen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Professionelle Abwicklung" })
                                ] }),
                                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("strong", { children: "Nachteile:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "space-y-1 ml-4", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Höhere Kosten" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Weniger Unternehmenswissen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Koordinationsaufwand" })
                                ] })
                              ] })
                            ] }) }),
                            /* @__PURE__ */ jsx(Card, { className: "border-2 border-orange-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-orange-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx(Share2, { className: "mr-2 h-5 w-5" }),
                                "Hybridmodell"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-orange-800", children: [
                                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("strong", { children: "Vorteile:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "space-y-1 ml-4", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Best of both worlds" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Flexibilität" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Risikominimierung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Skalierbarkeit" })
                                ] }),
                                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("strong", { children: "Nachteile:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "space-y-1 ml-4", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Komplexere Struktur" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Koordinationsaufwand" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Doppelkosten möglich" })
                                ] })
                              ] })
                            ] }) })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Technische Infrastruktur",
                      icon: Settings,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Meldekanäle (§ 8 HinSchG)" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Schriftliche Kanäle" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-blue-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-700", children: "Online-Portal" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Web-basierte Eingabemaske" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Datei-Upload-Funktionen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Anonyme Kommunikation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Mobile Optimierung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Multi-Language Support" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-green-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-700", children: "E-Mail-System" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Verschlüsselte Übertragung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Dedicated Postfach" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Automatische Bestätigung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Spam-Schutz" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-purple-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-700", children: "Briefkasten/Post" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Physischer Briefkasten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Externe Postadresse" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Anonyme Zusendung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Sichere Aufbewahrung" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Mündliche Kanäle" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-red-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-700", children: "Hotline/Telefon" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• 24/7 Erreichbarkeit" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Mehrsprachige Betreuung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Anonyme Anrufe möglich" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Professionelle Gesprächsführung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Aufzeichnung nach Einverständnis" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-yellow-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-yellow-700", children: "Persönliche Gespräche" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Terminvereinbarung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Neutrale Räumlichkeiten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Vertrauensperson möglich" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Protokollierung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-indigo-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-indigo-700", children: "Video-Konferenz" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Sichere Plattformen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Ende-zu-Ende-Verschlüsselung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Aufzeichnung optional" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Flexible Termingestaltung" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Sicherheitsanforderungen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Technische Sicherheit" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• SSL/TLS-Verschlüsselung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Ende-zu-Ende-Verschlüsselung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Sichere Authentifizierung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Penetrationstests" }),
                                /* @__PURE__ */ jsx("li", { children: "• Backup-Strategien" }),
                                /* @__PURE__ */ jsx("li", { children: "• Incident Response Plan" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Datenschutz" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• DSGVO-Konformität" }),
                                /* @__PURE__ */ jsx("li", { children: "• Privacy by Design" }),
                                /* @__PURE__ */ jsx("li", { children: "• Datenminimierung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Zweckbindung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Löschkonzepte" }),
                                /* @__PURE__ */ jsx("li", { children: "• Betroffenenrechte" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Operative Sicherheit" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Zugriffskontrollen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Audit-Logs" }),
                                /* @__PURE__ */ jsx("li", { children: "• Segregation of Duties" }),
                                /* @__PURE__ */ jsx("li", { children: "• Notfallpläne" }),
                                /* @__PURE__ */ jsx("li", { children: "• Schulungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Reviews" })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Marktübersicht: Software-Lösungen für Hinweisgebersysteme" }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-blue-500", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Enterprise-Lösungen" }),
                              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Führende Anbieter:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• IntegrityLine (End-to-End Compliance)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• EQS Group (Compliance Cloud)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• NAVEX Global (Ethics Point)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• SAP Ariba (Risk Management)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Vault Platform (Advanced Analytics)" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Kernfunktionen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Multi-Channel Intake (Web, App, Hotline)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Workflow Management" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Reporting & Analytics" }),
                                    /* @__PURE__ */ jsx("li", { children: "• API-Integration" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Compliance Dashboard" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-green-500", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "KMU-Lösungen" }),
                              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Kosteneffiziente Optionen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Whistle-Cloud (ab 99€/Monat)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• ComplianceDesktop (Modular)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• FaceUp (User-friendly)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• AllVoices (AI-powered)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Whispli (Blockchain-secured)" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Auswahlkriterien:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Skalierbarkeit" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Benutzerfreundlichkeit" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Preis-Leistungs-Verhältnis" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Deutscher Support" }),
                                    /* @__PURE__ */ jsx("li", { children: "• DSGVO-Konformität" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-purple-500", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Technologie-Trends 2025" }),
                              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "KI & Machine Learning:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Sentiment Analysis" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Pattern Recognition" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Risk Scoring" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Auto-Kategorisierung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Blockchain-Integration:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Unveränderliche Logs" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Smart Contracts" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Dezentrale Speicherung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Transparenz-Features" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Mobile & Voice:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Voice-to-Text Meldungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Biometrische Sicherheit" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Offline-Funktionalität" }),
                                    /* @__PURE__ */ jsx("li", { children: "• AR/VR Training" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Implementierungs-Roadmap für IT-Systeme" }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                            /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-0 bottom-0 w-0.5 bg-yellow-300" }),
                            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold", children: "Phase 1" }),
                                /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Anforderungsanalyse (2-4 Wochen)" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Stakeholder-Workshops durchführen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Prozesse dokumentieren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Systemanforderungen definieren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Anbietervergleich erstellen" })
                                  ] })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold", children: "Phase 2" }),
                                /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Systemauswahl & Setup (3-6 Wochen)" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Proof of Concept durchführen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Vertragsverhandlungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Technische Installation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Grundkonfiguration" })
                                  ] })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-16 h-16 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold", children: "Phase 3" }),
                                /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Integration & Testing (4-8 Wochen)" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• API-Integrationen umsetzen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Sicherheitstests durchführen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• User Acceptance Testing" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Performance-Optimierung" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] }) })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Personalausstattung und Kompetenzen",
                      icon: Users,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-900 mb-4", children: "Personelle Anforderungen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Mindestausstattung" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-orange-800 mb-2", children: "Kleine Unternehmen (50-249 MA)" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• 1 hauptverantwortliche Person (mind. 50% Kapazität)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Vertretungsregelung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Externe Unterstützung möglich" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schulungen erforderlich" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-orange-800 mb-2", children: "Große Unternehmen (250+ MA)" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Dedicated Team empfohlen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Spezialisierung nach Fachbereichen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• 24/7 Bereitschaft" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Professionelle Investigatoren" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Kernkompetenzen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-orange-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Rechtskenntnisse" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700 mt-1", children: "HinSchG, DSGVO, Strafrecht, Arbeitsrecht, branchenspezifische Regelungen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(Search, { className: "h-5 w-5 text-orange-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Investigative Fähigkeiten" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700 mt-1", children: "Sachverhaltsaufklärung, Beweissicherung, Befragungstechniken" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(MessageSquare, { className: "h-5 w-5 text-orange-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Kommunikationsfähigkeiten" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700 mt-1", children: "Gesprächsführung, Empathie, Vertraulichkeit, Mehrsprachigkeit" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Qualifikationsprofil" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Juristische Qualifikation" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Volljurist bevorzugt" }),
                                /* @__PURE__ */ jsx("li", { children: "• Compliance-Zertifizierung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Fortbildungen HinSchG" }),
                                /* @__PURE__ */ jsx("li", { children: "• Branchenerfahrung" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Investigative Ausbildung" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Fraud Investigation" }),
                                /* @__PURE__ */ jsx("li", { children: "• Digital Forensics" }),
                                /* @__PURE__ */ jsx("li", { children: "• Interview-Techniken" }),
                                /* @__PURE__ */ jsx("li", { children: "• Krisenmanagement" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Soft Skills" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Vertrauenswürdigkeit" }),
                                /* @__PURE__ */ jsx("li", { children: "• Stressresistenz" }),
                                /* @__PURE__ */ jsx("li", { children: "• Kulturelle Sensibilität" }),
                                /* @__PURE__ */ jsx("li", { children: "• Verschwiegenheit" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Technische Skills" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• IT-Grundkenntnisse" }),
                                /* @__PURE__ */ jsx("li", { children: "• Case Management" }),
                                /* @__PURE__ */ jsx("li", { children: "• Datenanalyse" }),
                                /* @__PURE__ */ jsx("li", { children: "• Berichtswesen" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(2),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(3);
                          setCurrentSection(4);
                        },
                        className: "bg-purple-600 hover:bg-purple-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 4 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl", children: /* @__PURE__ */ jsx(Send, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Meldeverfahren" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Prozesse und Verfahrensschritte" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Meldungseingang und Erstbewertung",
                      icon: Mail,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-6 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-red-900 mb-4", children: "Verfahrensablauf (§§ 9-12 HinSchG)" }),
                        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "1" }),
                            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-900 mb-2", children: "Meldungseingang (innerhalb 24h)" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-800", children: "Automatische Bestätigung:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Eindeutige Vorgangsnummer" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zeitstempel" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Nächste Schritte" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kontaktmöglichkeiten" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-800", children: "Formelle Prüfung:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Vollständigkeit" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verständlichkeit" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Anwendungsbereich" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zuständigkeit" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-800", children: "Dokumentation:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Case Management System" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Metadaten-Erfassung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Klassifizierung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Vertraulichkeitsstufe" })
                                  ] })
                                ] })
                              ] }) })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "2" }),
                            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-900 mb-2", children: "Erstbewertung (innerhalb 7 Tagen)" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-800", children: "Inhaltliche Prüfung:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Rechtlicher Anwendungsbereich" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Erheblichkeit des Verstoßes" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Glaubwürdigkeit der Angaben" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verfügbare Beweise" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Gefährdungspotential" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-800", children: "Kategorisierung:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Prioritätsstufe (hoch/mittel/niedrig)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Fachbereich" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Betroffene Bereiche" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zeitkritische Maßnahmen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Eskalationsbedarf" })
                                  ] })
                                ] })
                              ] }) })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "3" }),
                            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-900 mb-2", children: "Feedback an Hinweisgeber (innerhalb 7 Tagen)" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-800", children: "Pflichtinhalte der Bestätigung (§ 11 HinSchG):" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Bestätigung des Meldungseingangs" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Information über weitere Verfahrensschritte" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kontaktmöglichkeiten für Rückfragen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Hinweise auf Schutzmaßnahmen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verweis auf externe Meldestellen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-800", children: "Bei offensichtlich unbegründeten Meldungen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Begründete Ablehnung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Hinweis auf alternative Wege" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Beratungsangebote" })
                                  ] })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] }) })
                      ] }) })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Untersuchungsverfahren",
                      icon: Search,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Investigationsprozess" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Untersuchungsplanung" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Untersuchungsumfang definieren:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Zu klärende Sachverhalte" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zeitrahmen der Untersuchung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Beteiligte Personen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Betroffene Systeme/Bereiche" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Erforderliche Expertise" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Ressourcenplanung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Untersuchungsteam:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Lead Investigator" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Fachexperten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• IT-Forensiker (bei Bedarf)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Externe Berater (bei Bedarf)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Rechtsberater" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Beweissicherung" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Digitale Beweise:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• E-Mail-Verkehr" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Systemlogs" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Datenbankauszüge" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Screenshots" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Forensische Images" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Chain of Custody" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Dokumentare Beweise:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Verträge und Vereinbarungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Rechnungen und Belege" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Protokolle und Berichte" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Organisationsanweisungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zeugenaussagen" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Befragungen und Interviews" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Hinweisgeber-Interview" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Vertiefende Sachverhaltsaufklärung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Nachfragen zu Unstimmigkeiten" }),
                                /* @__PURE__ */ jsx("li", { children: "• Zusätzliche Beweise" }),
                                /* @__PURE__ */ jsx("li", { children: "• Schutzbedarfsermittlung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Vertraulichkeitsvereinbarung" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Zeugen-Befragungen" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Sachverhaltsbestätigung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Weitere Beobachtungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Zeitliche Einordnung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Persönliche Wahrnehmungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Dokumentation" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Beschuldigten-Anhörung" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Rechtliches Gehör" }),
                                /* @__PURE__ */ jsx("li", { children: "• Stellungnahme zu Vorwürfen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Entlastungsbeweise" }),
                                /* @__PURE__ */ jsx("li", { children: "• Rechtsberatung möglich" }),
                                /* @__PURE__ */ jsx("li", { children: "• Protokollführung" })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-indigo-900 mb-4", children: "Dokumentationspflichten im Detail" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-3", children: "Gesetzliche Dokumentationspflichten" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-indigo-800", children: "§ 11 HinSchG - Grundlegende Pflichten:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-indigo-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Vollständige Erfassung aller Meldungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Chronologische Dokumentation des Verfahrensverlaufs" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Speicherung der Kommunikation mit Hinweisgeber" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Aufbewahrung für mind. 3 Jahre nach Abschluss" }),
                                    /* @__PURE__ */ jsx("li", { children: "• DSGVO-konforme Löschung nach Fristablauf" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-indigo-800", children: "Pflichtinhalte der Dokumentation:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-indigo-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Eingangsdatum und -uhrzeit der Meldung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Art des Meldekanals (schriftlich/mündlich/digital)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Inhalt der Meldung (anonymisiert)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Durchgeführte Maßnahmen und Zeitpunkte" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Ergebnisse der Untersuchung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kommunikation mit Behörden" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-3", children: "Praktische Umsetzung der Dokumentation" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-indigo-800", children: "Dokumentationsstruktur:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-indigo-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Eindeutige Fallnummern-Vergabe" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Standardisierte Erfassungsformulare" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Digitales Case Management System" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Revisionssichere Archivierung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zugriffsprotokollierung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-indigo-800", children: "Datenschutz-Anforderungen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-indigo-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Minimale Speicherung personenbezogener Daten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verschlüsselung sensibler Informationen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Berechtigungskonzept mit Need-to-know-Prinzip" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Datenschutz-Folgenabschätzung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Automatisierte Löschfristen" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "mt-6 bg-red-100 p-4 rounded-lg", children: [
                            /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-red-900 mb-3 flex items-center", children: [
                              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 mr-2" }),
                              "Kritische Dokumentationsfehler vermeiden"
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded", children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-red-800 text-sm", children: "Unvollständige Dokumentation:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-xs text-red-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Fehlende Zeitstempel" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Lückenhafte Verfahrensschritte" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Vergessene Anhänge/Beweise" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Unklare Verantwortlichkeiten" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded", children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-red-800 text-sm", children: "Datenschutzverstöße:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-xs text-red-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Unnötige Speicherung von Namen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Fehlende Anonymisierung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Zu breite Zugriffsrechte" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Versäumte Löschfristen" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded", children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-red-800 text-sm", children: "Formale Mängel:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-xs text-red-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Fehlende Unterschriften" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Nachträgliche Änderungen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Unklare Formulierungen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Fehlende Versionskontrolle" })
                                ] })
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "mt-6 bg-green-100 p-4 rounded-lg", children: [
                            /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-green-900 mb-3 flex items-center", children: [
                              /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 mr-2" }),
                              "Best Practices für die Dokumentation"
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Technische Lösungen:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Automatisierte Zeitstempel und Logs" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Digitale Signatur für Unveränderbarkeit" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Backup-Strategie mit Redundanz" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Integration in Compliance-Management-System" }),
                                  /* @__PURE__ */ jsx("li", { children: "• API-Schnittstellen für Reporting" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Organisatorische Maßnahmen:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Klare Dokumentationsrichtlinien" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Schulungen für Bearbeiter" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Vier-Augen-Prinzip bei kritischen Fällen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Monatliche Qualitätschecks" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Jährliche externe Audits" })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Besondere Verfahrensarten" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-3", children: "Eilverfahren" }),
                              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Auslöser:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 mt-2 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Akute Gefahr für Leben/Gesundheit" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Erhebliche Umweltschäden" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Beweisvernichtungsgefahr" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Fortsetzung der Rechtsverletzung" })
                                ] }),
                                /* @__PURE__ */ jsx("strong", { className: "text-yellow-800 mt-3 block", children: "Maßnahmen:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Sofortige Beweissicherung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Vorläufige Schutzmaßnahmen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• 24h-Reaktionszeit" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Eskalation an Geschäftsführung" })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-3", children: "Komplexe Sachverhalte" }),
                              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Charakteristika:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 mt-2 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Mehrere Rechtsbereiche betroffen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Umfangreiche Beweislage" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Viele Beteiligte" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Technische Komplexität" })
                                ] }),
                                /* @__PURE__ */ jsx("strong", { className: "text-yellow-800 mt-3 block", children: "Besonderheiten:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Erweiterte Untersuchungszeit" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Spezialisierte Ermittler" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Externe Unterstützung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Zwischenberichte" })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(3),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(4);
                          setCurrentSection(5);
                        },
                        className: "bg-red-600 hover:bg-red-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 5 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl", children: /* @__PURE__ */ jsx(Shield, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Schutzmaßnahmen" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Schutz vor Repressalien und Vergeltungsmaßnahmen" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Verbot von Repressalien (§§ 26-36 HinSchG)",
                      icon: Lock,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Definition und Umfang von Repressalien" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-3", children: "Arbeitsrechtliche Repressalien" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-red-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-700", children: "Beendigung des Arbeitsverhältnisses:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Kündigung (ordentlich/außerordentlich)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Aufhebungsverträge unter Druck" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Nicht-Verlängerung befristeter Verträge" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Beendigung von Probezeiten" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-orange-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-700", children: "Verschlechterung der Arbeitsbedingungen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Versetzungen (Arbeitsplatz/Abteilung)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Degradierung/Gehaltskürzung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Entzug von Kompetenzen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schlechtere Arbeitszeitmodelle" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verweigerung von Fortbildungen" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-3", children: "Weitere Repressalien" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-purple-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-700", children: "Persönliche Benachteiligungen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Mobbing und Ausgrenzung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schlechte Arbeitszeugnisse" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Negative Referenzen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Soziale Isolation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Rufschädigung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-blue-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-700", children: "Rechtliche Maßnahmen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Strafanzeigen ohne Grund" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zivilrechtliche Klagen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Disziplinarmaßnahmen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Einschüchterung durch Anwälte" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-red-900 mb-4", children: "Beweislastumkehr (§ 29 HinSchG)" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-red-900 mb-2 flex items-center", children: [
                                /* @__PURE__ */ jsx(Scale, { className: "mr-2 h-5 w-5" }),
                                "Grundsatz"
                              ] }),
                              /* @__PURE__ */ jsx("p", { className: "text-sm text-red-800 mb-3", children: "Der Arbeitgeber muss beweisen, dass die nachteilige Maßnahme NICHT auf die Meldung zurückzuführen ist." }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Umkehr der normalen Beweislast" }),
                                /* @__PURE__ */ jsx("li", { children: "• Erhebliche Erleichterung für Hinweisgeber" }),
                                /* @__PURE__ */ jsx("li", { children: "• Präventive Wirkung für Arbeitgeber" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-red-900 mb-2 flex items-center", children: [
                                /* @__PURE__ */ jsx(Clock, { className: "mr-2 h-5 w-5" }),
                                "Zeitlicher Zusammenhang"
                              ] }),
                              /* @__PURE__ */ jsx("p", { className: "text-sm text-red-800 mb-3", children: "Indizwirkung bei zeitlicher Nähe zwischen Meldung und nachteiliger Maßnahme." }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Besonders starke Indizwirkung bei unmittelbarer Nähe" }),
                                /* @__PURE__ */ jsx("li", { children: "• Auch längere Zeiträume möglich" }),
                                /* @__PURE__ */ jsx("li", { children: "• Einzelfallbetrachtung erforderlich" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-red-900 mb-2 flex items-center", children: [
                                /* @__PURE__ */ jsx(CheckCircle, { className: "mr-2 h-5 w-5" }),
                                "Entlastungsbeweis"
                              ] }),
                              /* @__PURE__ */ jsx("p", { className: "text-sm text-red-800 mb-3", children: "Arbeitgeber muss sachliche Gründe für die Maßnahme nachweisen." }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Dokumentierte Leistungsprobleme" }),
                                /* @__PURE__ */ jsx("li", { children: "• Wirtschaftliche Notwendigkeit" }),
                                /* @__PURE__ */ jsx("li", { children: "• Organisatorische Gründe" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Präventive Schutzmaßnahmen",
                      icon: Eye,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Organisatorische Schutzmaßnahmen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Vertraulichkeitsschutz" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Identitätsschutz:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Anonyme Meldungen ermöglichen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Pseudonymisierung von Daten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Beschränkung des Empfängerkreises" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Separating Walls zwischen Bereichen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Clean Team Verfahren" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Informationssicherheit:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Verschlüsselung aller Kommunikation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Sichere Aktenführung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zugriffskontrollen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Audit-Protokolle" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Sicherheitsreviews" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Früherkennung von Repressalien" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Monitoring-Systeme:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• HR-Analytics für auffällige Muster" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Mitarbeiterbefragungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• 360-Grad-Feedback-Systeme" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Beschwerdekanäle" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Exit-Interviews" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Präventive Interventionen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Sensibilisierungsschulungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Führungskräfte-Coaching" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Mediation bei Konflikten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Versetzungen bei Bedarf" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Psychologische Betreuung" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Technische Schutzmaßnahmen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Anonymisierungstechnologien" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Tor-Browser-Integration" }),
                                /* @__PURE__ */ jsx("li", { children: "• Anonyme E-Mail-Services" }),
                                /* @__PURE__ */ jsx("li", { children: "• VPN-Verbindungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Blockchain-basierte Systeme" }),
                                /* @__PURE__ */ jsx("li", { children: "• Zero-Knowledge-Protokolle" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Sichere Kommunikation" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Ende-zu-Ende-Verschlüsselung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Perfect Forward Secrecy" }),
                                /* @__PURE__ */ jsx("li", { children: "• Sichere Messenger-Systeme" }),
                                /* @__PURE__ */ jsx("li", { children: "• Verschlüsselte Telefonie" }),
                                /* @__PURE__ */ jsx("li", { children: "• Sichere Datei-Übertragung" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Datenminimierung" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Automatische Löschfristen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Datenklassifizierung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Need-to-know-Prinzip" }),
                                /* @__PURE__ */ jsx("li", { children: "• Pseudonymisierung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Differential Privacy" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Reaktive Schutzmaßnahmen",
                      icon: AlertTriangle,
                      children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-900 mb-4", children: "Sofortmaßnahmen bei Repressalien" }),
                        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "1" }),
                            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-2", children: "Akute Intervention (innerhalb 24h)" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Schutzmaßnahmen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Vorläufige Suspendierung des Verursachers" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Arbeitsplatzwechsel für Hinweisgeber" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kommunikationsverbot" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Sicherstellung von Beweisen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Einschaltung der Rechtsabteilung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Dokumentation:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Detaillierte Sachverhaltsaufnahme" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zeugenaussagen sichern" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Chronologie erstellen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Beweismittel sammeln" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Incident Report erstellen" })
                                  ] })
                                ] })
                              ] }) })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "2" }),
                            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-2", children: "Untersuchung und Bewertung (1-2 Wochen)" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Investigative Maßnahmen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Befragung aller Beteiligten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Analyse der Zeitabläufe" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Motivanalyse" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Rechtliche Bewertung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schadensermittlung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Entscheidungsfindung:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Bewertung der Beweislage" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verhältnismäßigkeitsprüfung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Eskalationsmatrix anwenden" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Sanktionsentscheidung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Präventionsmaßnahmen definieren" })
                                  ] })
                                ] })
                              ] }) })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                            /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "3" }),
                            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-2", children: "Maßnahmenumsetzung und Follow-up" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Sanktionen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Abmahnung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Versetzung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kündigung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schadensersatzforderung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Strafanzeige" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Wiedergutmachung:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Rücknahme nachteiliger Maßnahmen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schadensersatz" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Richtigstellung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Entschuldigung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Rehabilitierung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Monitoring:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Nachbeobachtung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Gespräche" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Wirksamkeitskontrolle" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Lessons Learned" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Systmanpassungen" })
                                  ] })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] }) })
                      ] }) })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Praxisfälle und Fallbeispiele",
                      icon: Briefcase,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Reale Fallbeispiele aus der Praxis" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6", children: [
                            /* @__PURE__ */ jsx("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-purple-600", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Factory, { className: "h-6 w-6 text-purple-600" }) }) }),
                              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "Fall 1: Produktionsmängel in der Automobilindustrie" }),
                                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-4 rounded", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Sachverhalt:" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "Ein Qualitätsingenieur meldet intern systematische Manipulationen bei Abgaswerten. Nach der Meldung wird er in eine andere Abteilung versetzt und erhält negative Leistungsbewertungen." })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Rechtliche Bewertung:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Versetzung und negative Bewertung = Repressalie gem. § 26 HinSchG" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Beweislastumkehr greift: Arbeitgeber kann keine sachlichen Gründe nachweisen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Schadensersatzanspruch des Hinweisgebers bejaht" })
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Konsequenzen:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Bußgeld von 45.000 EUR gegen Unternehmen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Persönliche Haftung des Abteilungsleiters" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Wiedereinstellung des Mitarbeiters in alte Position" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Entschädigung in Höhe von 6 Monatsgehältern" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] }) }),
                            /* @__PURE__ */ jsx("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-orange-600", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Building2, { className: "h-6 w-6 text-orange-600" }) }) }),
                              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-2", children: "Fall 2: Bilanzmanipulation im Finanzsektor" }),
                                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-4 rounded", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Sachverhalt:" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700 mt-1", children: "Eine Compliance-Mitarbeiterin deckt systematische Bilanzfälschungen auf und meldet diese anonym. Ihre Identität wird durch IT-Forensik aufgedeckt und öffentlich gemacht. Sie wird daraufhin gemobbt und schließlich gekündigt." })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Rechtliche Bewertung:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Verletzung der Vertraulichkeitspflicht gem. § 15 HinSchG" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Mobbing und Kündigung = schwere Repressalien" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Anonymität muss auch bei internen Ermittlungen gewahrt bleiben" })
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Konsequenzen:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Bußgeld von 50.000 EUR (Höchstsatz)" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Strafrechtliche Ermittlungen gegen Geschäftsführung" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Einstweilige Verfügung gegen Kündigung" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Öffentliche Entschuldigung und Rehabilitation" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] }) }),
                            /* @__PURE__ */ jsx("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-green-600", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                              /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Heart, { className: "h-6 w-6 text-green-600" }) }) }),
                              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Fall 3: Hygienemängel im Gesundheitswesen" }),
                                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Sachverhalt:" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: 'Eine Krankenpflegerin meldet über das interne System wiederholt Hygienemängel und Personalmangel, die zu Patientengefährdungen führen. Das Management reagiert mit Dienstplanänderungen und Nachtschichten als "Strafe".' })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-4 rounded", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Rechtliche Bewertung:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Verschlechterung der Arbeitsbedingungen = Repressalie" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Meldung betrifft öffentliches Interesse (Patientenschutz)" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Verstärkter Schutz bei Gesundheitsgefährdung Dritter" })
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Positive Lösung:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Mediation führt zu konstruktiver Lösung" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Einrichtung eines Qualitätszirkels" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Hinweisgeberin wird Qualitätsbeauftragte" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Systematische Verbesserung der Hygiene" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] }) })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Lessons Learned und Best Practices" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Häufige Fehlerquellen" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-gray-800 text-sm", children: "Identität preisgeben" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: 'Auch bei "Vertrauenspersonen" absolute Vertraulichkeit wahren' })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-gray-800 text-sm", children: "Subtile Repressalien" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: 'Auch "kleine" Benachteiligungen sind verboten' })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-gray-800 text-sm", children: "Dokumentationsmängel" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Fehlende Beweise erschweren Verteidigung" })
                                  ] })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Erfolgreiche Ansätze" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-gray-800 text-sm", children: "Speak-Up-Kultur" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Offene Fehlerkultur verhindert Eskalationen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-gray-800 text-sm", children: "Schnelle Reaktion" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Zeitnahe Bearbeitung zeigt Ernsthaftigkeit" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-gray-800 text-sm", children: "Transparenz" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Kommunikation über Maßnahmen schafft Vertrauen" })
                                  ] })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Präventionsstrategien" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-gray-800 text-sm", children: "Tone from the Top" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Führung muss Null-Toleranz vorleben" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-gray-800 text-sm", children: "Regelmäßige Audits" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Systematische Überprüfung der Prozesse" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-gray-800 text-sm", children: "Externe Beratung" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mt-1", children: "Neutrale Perspektive hilft bei Blindspots" })
                                  ] })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Kosten-Nutzen-Analyse von Schutzmaßnahmen" }),
                          /* @__PURE__ */ jsxs("div", { className: "overflow-x-auto", children: [
                            /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
                              /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-yellow-200", children: [
                                /* @__PURE__ */ jsx("th", { className: "text-left py-3 px-4", children: "Maßnahme" }),
                                /* @__PURE__ */ jsx("th", { className: "text-center py-3 px-4", children: "Initialkosten" }),
                                /* @__PURE__ */ jsx("th", { className: "text-center py-3 px-4", children: "Laufende Kosten" }),
                                /* @__PURE__ */ jsx("th", { className: "text-center py-3 px-4", children: "Schadensersparnis" }),
                                /* @__PURE__ */ jsx("th", { className: "text-center py-3 px-4", children: "ROI" })
                              ] }) }),
                              /* @__PURE__ */ jsxs("tbody", { className: "divide-y divide-yellow-100", children: [
                                /* @__PURE__ */ jsxs("tr", { className: "bg-white", children: [
                                  /* @__PURE__ */ jsx("td", { className: "py-3 px-4 font-medium", children: "Anonymes Meldesystem" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4", children: "15.000 EUR" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4", children: "3.000 EUR/Jahr" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4", children: "50.000 EUR" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4 text-green-600 font-bold", children: "233%" })
                                ] }),
                                /* @__PURE__ */ jsxs("tr", { className: "bg-yellow-50", children: [
                                  /* @__PURE__ */ jsx("td", { className: "py-3 px-4 font-medium", children: "Schulungsprogramm" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4", children: "8.000 EUR" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4", children: "5.000 EUR/Jahr" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4", children: "30.000 EUR" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4 text-green-600 font-bold", children: "131%" })
                                ] }),
                                /* @__PURE__ */ jsxs("tr", { className: "bg-white", children: [
                                  /* @__PURE__ */ jsx("td", { className: "py-3 px-4 font-medium", children: "Externe Ombudsstelle" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4", children: "5.000 EUR" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4", children: "12.000 EUR/Jahr" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4", children: "40.000 EUR" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4 text-green-600 font-bold", children: "135%" })
                                ] }),
                                /* @__PURE__ */ jsxs("tr", { className: "bg-yellow-50", children: [
                                  /* @__PURE__ */ jsx("td", { className: "py-3 px-4 font-medium", children: "Monitoring-System" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4", children: "20.000 EUR" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4", children: "2.000 EUR/Jahr" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4", children: "75.000 EUR" }),
                                  /* @__PURE__ */ jsx("td", { className: "text-center py-3 px-4 text-green-600 font-bold", children: "241%" })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "mt-4 text-xs text-yellow-700", children: "* Kalkulation basiert auf 3-Jahres-Zeitraum und durchschnittlichen Schadensersatz-/Bußgeldrisiken" })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(4),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(5);
                          setCurrentSection(6);
                        },
                        className: "bg-yellow-600 hover:bg-yellow-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 6 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl", children: /* @__PURE__ */ jsx(Scale, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Rechtliche Grundlagen" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Gesetzliche Bestimmungen und Rechtsprechung" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Gesetzliche Bestimmungen im Detail",
                      icon: Gavel,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-indigo-900 mb-4", children: "Struktureller Aufbau des HinSchG" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-3", children: "Teil 1: Allgemeine Bestimmungen (§§ 1-3)" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-blue-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-700", children: "§ 1 - Anwendungsbereich:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Geschützte Personen definiert" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Räumlicher Geltungsbereich" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verhältnis zu anderen Gesetzen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Ausnahmen und Einschränkungen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-green-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-700", children: "§ 2 - Sachlicher Anwendungsbereich:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Geschützte Rechtsbereiche" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Nationales vs. EU-Recht" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Straftaten und Ordnungswidrigkeiten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Erheblichkeitsschwellen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-purple-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-700", children: "§ 3 - Begriffsbestimmungen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Hinweisgeber-Definition" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Meldung vs. Offenlegung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verstoß-Begriff" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Repressalien-Definition" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-3", children: "Teil 2: Interne Meldestellen (§§ 4-16)" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-red-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-700", children: "§§ 4-7 - Strukturelle Anforderungen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Einrichtungspflicht" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Unabhängigkeit und Kompetenz" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Organisatorische Ausgestaltung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Ressourcenausstattung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-yellow-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-yellow-700", children: "§§ 8-12 - Verfahrensbestimmungen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Meldekanäle und -verfahren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Bestätigungspflichten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Bearbeitungsfristen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Dokumentationspflichten" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-orange-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-700", children: "§§ 13-16 - Information und Schulung:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Informationspflichten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schulungsanforderungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zugänglichkeit" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Mehrsprachigkeit" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Weitere Teile des Gesetzes" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Teil 3: Externe Meldestellen (§§ 17-25)" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Zuständigkeit der Behörden" }),
                                /* @__PURE__ */ jsx("li", { children: "• Verfahrensbestimmungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Zusammenarbeit mit internen Stellen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Berichtspflichten" }),
                                /* @__PURE__ */ jsx("li", { children: "• Statistiken und Evaluierung" })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Teil 4: Schutz vor Repressalien (§§ 26-36)" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Repressalienverbot" }),
                                /* @__PURE__ */ jsx("li", { children: "• Schutzmaßnahmen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Beweislastumkehr" }),
                                /* @__PURE__ */ jsx("li", { children: "• Rechtsbehelfe" }),
                                /* @__PURE__ */ jsx("li", { children: "• Entschädigungsansprüche" })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Teil 5-6: Verfahren und Sanktionen (§§ 37-45)" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-gray-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Gerichtsverfahren" }),
                                /* @__PURE__ */ jsx("li", { children: "• Bußgeldbestimmungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Übergangsbestimmungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Evaluierungsklausel" }),
                                /* @__PURE__ */ jsx("li", { children: "• Inkrafttreten" })
                              ] }) })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Rechtsprechung und Kommentierung",
                      icon: Briefcase,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Frühe Rechtsprechung zum HinSchG" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Grundsatzentscheidungen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "BAG, Urt. v. 15.03.2024 - 2 AZR 274/23:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 mt-2", children: "Beweislastumkehr greift auch bei mittelbarem zeitlichen Zusammenhang zwischen Meldung und nachteiliger Maßnahme." }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Leitsätze:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Indizwirkung bei 6-monatigem Abstand möglich" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Gesamtumstände sind zu würdigen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Arbeitgeber muss alternative Motivation beweisen" })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "LAG Hamburg, Urt. v. 22.11.2023 - 3 Sa 45/23:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 mt-2", children: "Anonyme Meldungen genießen denselben Schutz wie offene Meldungen." }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Leitsätze:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Nachträgliche Identifizierung ändert nichts am Schutz" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Vertraulichkeitsverletzung kann Repressalie sein" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Unternehmen haftet für Mitarbeiterverhalten" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Verfahrensrechtliche Entscheidungen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "OLG München, Beschl. v. 08.01.2024 - 31 W 1456/23:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 mt-2", children: "Einstweilige Verfügung zum Schutz vor Repressalien ist möglich." }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Leitsätze:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Vorläufiger Rechtsschutz verfügbar" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Geringere Darlegungsanforderungen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Eilbedürftigkeit oft gegeben" })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "VG Berlin, Urt. v. 19.02.2024 - 6 K 234/23:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 mt-2", children: "Externe Meldestellen müssen angemessene Reaktionszeiten einhalten." }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Leitsätze:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• 3-Monats-Frist ist nicht absolut" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Zwischenmitteilungen erforderlich" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Begründungspflicht bei Verzögerungen" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Wissenschaftliche Kommentierung" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Führende Kommentare" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Kühling/Muckel: HinSchG Kommentar" }),
                                /* @__PURE__ */ jsx("li", { children: "• Beck'scher Online-Kommentar" }),
                                /* @__PURE__ */ jsx("li", { children: "• Nomos Kommentar HinSchG" }),
                                /* @__PURE__ */ jsx("li", { children: "• Praxishandbuch Whistleblowing" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Kontroverse Themen" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Anwendung auf Kleinbetriebe" }),
                                /* @__PURE__ */ jsx("li", { children: "• Verhältnis zum Strafverfahrensrecht" }),
                                /* @__PURE__ */ jsx("li", { children: "• Internationale Sachverhalte" }),
                                /* @__PURE__ */ jsx("li", { children: "• Datenschutzrechtliche Fragen" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Reformdiskussion" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Erweiterung des Anwendungsbereichs" }),
                                /* @__PURE__ */ jsx("li", { children: "• Stärkung der Sanktionen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Prämiensystem nach US-Vorbild" }),
                                /* @__PURE__ */ jsx("li", { children: "• Harmonisierung mit EU-Recht" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Aktuelle Fristen und Deadlines",
                      icon: Calendar,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-red-900 mb-4", children: "Wichtige Umsetzungsfristen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-900 mb-3", children: "Gesetzliche Pflichttermine" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-red-600", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-red-800", children: "17. Dezember 2023" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 mt-1", children: "Pflicht zur Einrichtung interner Meldestellen für alle Unternehmen mit 50-249 Beschäftigten (Übergangsfrist abgelaufen)" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Badge, { className: "bg-red-100 text-red-800 flex-shrink-0", children: "Abgelaufen" })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-orange-600", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Laufende Fristen" }),
                                    /* @__PURE__ */ jsxs("p", { className: "text-sm text-orange-700 mt-1", children: [
                                      "7 Tage: Bestätigung des Meldungseingangs",
                                      /* @__PURE__ */ jsx("br", {}),
                                      "3 Monate: Rückmeldung über ergriffene Maßnahmen",
                                      /* @__PURE__ */ jsx("br", {}),
                                      "6 Monate: Verlängerung bei komplexen Fällen"
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsx(Badge, { className: "bg-orange-100 text-orange-800 flex-shrink-0", children: "Dauerhaft" })
                                ] }) })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-900 mb-3", children: "Anstehende Änderungen 2025" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-yellow-600", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "1. Januar 2025" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 mt-1", children: "Erwartete Verschärfung der Bußgeldpraxis durch Aufsichtsbehörden" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-100 text-yellow-800 flex-shrink-0", children: "Bevorstehend" })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-green-600", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "17. Dezember 2025" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Evaluierung des HinSchG durch die Bundesregierung - mögliche Gesetzesanpassungen" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-800 flex-shrink-0", children: "Geplant" })
                                ] }) })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Praktische Umsetzungsempfehlungen" }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-4", children: "Sofortmaßnahmen für säumige Unternehmen" }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-blue-600", children: "1" }) }),
                                /* @__PURE__ */ jsx("h6", { className: "font-semibold text-blue-900 mb-2", children: "Woche 1" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 text-left space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Interimslösung einrichten" }),
                                  /* @__PURE__ */ jsx("li", { children: "• E-Mail-Adresse aktivieren" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Verantwortlichen benennen" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-blue-600", children: "2" }) }),
                                /* @__PURE__ */ jsx("h6", { className: "font-semibold text-blue-900 mb-2", children: "Woche 2-4" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 text-left space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Prozesse dokumentieren" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Mitarbeiter informieren" }),
                                  /* @__PURE__ */ jsx("li", { children: "• System auswählen" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-blue-600", children: "3" }) }),
                                /* @__PURE__ */ jsx("h6", { className: "font-semibold text-blue-900 mb-2", children: "Woche 5-8" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 text-left space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Vollständige Implementierung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Schulungen durchführen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Compliance dokumentieren" })
                                ] })
                              ] })
                            ] })
                          ] }) })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Checkliste: Sind Sie compliant?" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-3", children: "Mindestanforderungen" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "Interne Meldestelle eingerichtet und funktionsfähig" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "Mindestens zwei Meldekanäle verfügbar (schriftlich/mündlich)" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "Anonyme Meldungen möglich" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "7-Tage-Frist für Eingangsbestätigung implementiert" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "3-Monats-Frist für Rückmeldung gewährleistet" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-3", children: "Best Practice Standards" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "24/7 digitales Meldesystem verfügbar" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "Mehrsprachige Meldemöglichkeiten" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "Regelmäßige Mitarbeiterschulungen" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "KPI-Monitoring und Reporting etabliert" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "Externe Zertifizierung vorhanden" })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-lg text-white", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-8 w-8 flex-shrink-0" }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold mb-2", children: "Warnung: Verstärkte Kontrollen ab 2025" }),
                            /* @__PURE__ */ jsx("p", { className: "text-lg", children: "Die Aufsichtsbehörden haben angekündigt, ab 2025 verstärkt die Einhaltung des HinSchG zu kontrollieren. Unternehmen ohne funktionierende Meldesysteme müssen mit empfindlichen Bußgeldern bis zu 50.000 EUR rechnen." }),
                            /* @__PURE__ */ jsxs(
                              Button,
                              {
                                variant: "secondary",
                                className: "mt-4 bg-white text-red-600 hover:bg-gray-100",
                                children: [
                                  "Jetzt Compliance sicherstellen",
                                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                                ]
                              }
                            )
                          ] })
                        ] }) })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Internationale Rechtsentwicklung",
                      icon: Globe,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "EU-Rechtsprechung zur Whistleblower-Richtlinie" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "EuGH-Rechtsprechung" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "EuGH, Urt. v. 22.02.2024 - C-456/23:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-2", children: '"Guter Glaube" bei Meldungen ist weit auszulegen - auch bei späterem Erweis als unzutreffend bleibt Schutz bestehen.' })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "EuGH, Urt. v. 15.11.2023 - C-789/22:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-2", children: "Mitgliedstaaten dürfen Schutzstandard über EU-Mindestanforderungen hinaus erweitern." })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Nationale Umsetzungsunterschiede" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Frankreich:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Bereits etabliertes System durch Sapin II" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Strengere Anforderungen als EU-Mindeststandard" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Besonderer Fokus auf Korruption" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Niederlande:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• House for Whistleblowers als zentrale Stelle" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Starke zivilgesellschaftliche Unterstützung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Präventionsorientierter Ansatz" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-900 mb-4", children: "Internationale Standards und Best Practices" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-2", children: "OECD-Standards" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Anti-Bribery Convention" }),
                                /* @__PURE__ */ jsx("li", { children: "• Corporate Governance Principles" }),
                                /* @__PURE__ */ jsx("li", { children: "• Due Diligence Guidelines" }),
                                /* @__PURE__ */ jsx("li", { children: "• Integrity Framework" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-2", children: "UN-Konventionen" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• UN Convention against Corruption" }),
                                /* @__PURE__ */ jsx("li", { children: "• Global Compact Principles" }),
                                /* @__PURE__ */ jsx("li", { children: "• Business and Human Rights" }),
                                /* @__PURE__ */ jsx("li", { children: "• Sustainable Development Goals" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-2", children: "ISO-Standards" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• ISO 37001 (Anti-Bribery)" }),
                                /* @__PURE__ */ jsx("li", { children: "• ISO 37002 (Whistleblowing)" }),
                                /* @__PURE__ */ jsx("li", { children: "• ISO 31000 (Risk Management)" }),
                                /* @__PURE__ */ jsx("li", { children: "• ISO 19600 (Compliance)" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-2", children: "Branchenstandards" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Financial Services Standards" }),
                                /* @__PURE__ */ jsx("li", { children: "• Healthcare Compliance" }),
                                /* @__PURE__ */ jsx("li", { children: "• Aviation Safety Standards" }),
                                /* @__PURE__ */ jsx("li", { children: "• Pharmaceutical Guidelines" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Bußgeldbestimmungen und Sanktionen",
                      icon: Euro,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-red-900 mb-4", children: "Bußgeldkatalog nach § 40 HinSchG" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-900 mb-3", children: "Schwere Verstöße (bis 50.000 EUR)" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-red-600", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-800", children: "§ 40 Abs. 2 Nr. 1-3:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Behinderung oder Verhinderung von Meldungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Repressalien gegen Hinweisgeber" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verletzung der Vertraulichkeitspflicht" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Vorsätzliche Falschangaben gegenüber Behörden" })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-3 p-3 bg-red-100 rounded", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-red-800", children: "Praxisbeispiel: Kündigung nach Meldung = 50.000 EUR" }) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-orange-600", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "§ 40 Abs. 2 Nr. 4-5:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Offenlegung der Identität ohne Zustimmung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Unterlassung notwendiger Folgemaßnahmen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Missbrauch des Meldesystems" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verstoß gegen Dokumentationspflichten" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-900 mb-3", children: "Mittlere Verstöße (bis 20.000 EUR)" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-yellow-600", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "§ 40 Abs. 3 Nr. 1-3:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Keine oder unzureichende Meldestelle" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Fehlende Meldekanäle" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verstoß gegen Informationspflichten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Unzureichende Dokumentation" })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-3 p-3 bg-yellow-100 rounded", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-yellow-800", children: "Häufigster Verstoß: Fehlende anonyme Meldemöglichkeit" }) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-blue-600", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "§ 40 Abs. 3 Nr. 4-6:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Nichteinhaltung der 7-Tage-Frist" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Fehlende Rückmeldung nach 3 Monaten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Unvollständige Informationen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Mangelnde Zugänglichkeit" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Haftungsrisiken und Präventionsmaßnahmen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Persönliche Haftung" }),
                              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Betroffene Personen:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 mt-2 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Geschäftsführer/Vorstände" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Compliance-Verantwortliche" }),
                                  /* @__PURE__ */ jsx("li", { children: "• HR-Leiter" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Direkte Vorgesetzte" })
                                ] }),
                                /* @__PURE__ */ jsx("div", { className: "mt-3 text-xs text-yellow-600 bg-yellow-100 p-2 rounded", children: "Tipp: D&O-Versicherung prüfen und anpassen" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Unternehmenshaftung" }),
                              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Risikobereiche:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 mt-2 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Organisationsverschulden" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Aufsichtspflichtverletzung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Systemversagen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Reputationsschäden" })
                                ] }),
                                /* @__PURE__ */ jsx("div", { className: "mt-3 text-xs text-yellow-600 bg-yellow-100 p-2 rounded", children: "Empfehlung: Regelmäßige Compliance-Audits" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Präventionsmaßnahmen" }),
                              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Best Practices:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 mt-2 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Dokumentierte Prozesse" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Schulungen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Externe Validierung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Verbesserung" })
                                ] }),
                                /* @__PURE__ */ jsx("div", { className: "mt-3 text-xs text-yellow-600 bg-yellow-100 p-2 rounded", children: "ROI: 1€ Prävention = 5€ Schadensersparnis" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Praktische Handlungsempfehlungen",
                      icon: Lightbulb,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-teal-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-teal-900 mb-4", children: "Sofortmaßnahmen für Unternehmen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-teal-900 mb-3", children: "Quick Wins (0-4 Wochen)" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "1" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-teal-800", children: "Bestandsaufnahme durchführen" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-teal-700 mt-2 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Vorhandene Meldewege dokumentieren" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Compliance-Lücken identifizieren" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Risikoanalyse erstellen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Budget- und Ressourcenplanung" })
                                    ] })
                                  ] })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "2" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-teal-800", children: "Interimslösung implementieren" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-teal-700 mt-2 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Temporäre E-Mail-Adresse einrichten" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Verantwortliche Person benennen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Basis-Dokumentation erstellen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Erste Mitarbeiterinformation" })
                                    ] })
                                  ] })
                                ] }) })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-teal-900 mb-3", children: "Mittelfristige Ziele (1-3 Monate)" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "3" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-teal-800", children: "Professionelles System aufbauen" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-teal-700 mt-2 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Digitale Plattform auswählen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Prozesse standardisieren" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Rollen und Rechte definieren" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Testläufe durchführen" })
                                    ] })
                                  ] })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "4" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-teal-800", children: "Organisation vorbereiten" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-teal-700 mt-2 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Führungskräfte schulen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Kommunikationskampagne starten" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Betriebsvereinbarung abschließen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Go-Live vorbereiten" })
                                    ] })
                                  ] })
                                ] }) })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg mb-6", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Detaillierte Umsetzungsschritte nach Unternehmensgröße" }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                            /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-l-blue-500 pl-4", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Kleine Unternehmen (50-249 Mitarbeiter)" }),
                              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Organisationsstruktur:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Benennung eines Compliance-Beauftragten (20% Stelle)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Integration in bestehende HR-Strukturen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Externe Ombudsperson als kosteneffiziente Option" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schlanke Dokumentationsstruktur" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Nutzung bestehender Kommunikationskanäle" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Kostenschätzung:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Initialkosten: 5.000-15.000 EUR" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Laufende Kosten: 500-1.500 EUR/Monat" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Software-Lösung: Cloud-basiert (SaaS)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schulungsbudget: 2.000-5.000 EUR/Jahr" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Externe Beratung: 3.000-8.000 EUR einmalig" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-l-green-500 pl-4", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Mittlere Unternehmen (250-1.000 Mitarbeiter)" }),
                              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Organisationsstruktur:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Dedizierte Compliance-Stelle (1-2 FTE)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Eigenes Meldesystem mit mehreren Kanälen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Interne Untersuchungsteams mit klaren Prozessen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Audits und Reviews" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Integration in Risk Management System" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Kostenschätzung:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Initialkosten: 20.000-50.000 EUR" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Laufende Kosten: 3.000-8.000 EUR/Monat" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Professionelle Software-Suite mit API" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schulungsbudget: 10.000-20.000 EUR/Jahr" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Jährliche Audits: 5.000-15.000 EUR" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-l-purple-500 pl-4", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "Große Unternehmen (>1.000 Mitarbeiter)" }),
                              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Organisationsstruktur:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Compliance-Abteilung (3-10 FTE)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• 24/7 Hotline mit mehrsprachigem Support" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Spezialisierte Investigation Units" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Globale Koordination und Standards" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Eigene IT-Infrastruktur und Entwicklung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Kostenschätzung:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Initialkosten: 100.000-500.000 EUR" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Laufende Kosten: 20.000-100.000 EUR/Monat" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Enterprise-Lösung mit KI-Features" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schulungsbudget: 50.000-200.000 EUR/Jahr" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Weiterentwicklung" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg mb-6", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Branchenspezifische Besonderheiten" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded-lg", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-900 mb-2", children: "Finanzsektor" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Integration mit BaFin-Anforderungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Verschärfte Dokumentationspflichten" }),
                                /* @__PURE__ */ jsx("li", { children: "• Verbindung zu Geldwäsche-Prävention" }),
                                /* @__PURE__ */ jsx("li", { children: "• Besondere Vertraulichkeitsstufen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Meldepflicht an Aufsichtsbehörden" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Gesundheitswesen" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Patientenschutz-Aspekte beachten" }),
                                /* @__PURE__ */ jsx("li", { children: "• Ärztliche Schweigepflicht wahren" }),
                                /* @__PURE__ */ jsx("li", { children: "• Schnittstellen zu QM-Systemen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Besondere Sensibilität bei Daten" }),
                                /* @__PURE__ */ jsx("li", { children: "• MDR/IVDR Compliance integrieren" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Öffentlicher Sektor" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Beamtenrechtliche Besonderheiten" }),
                                /* @__PURE__ */ jsx("li", { children: "• Transparenzgebot vs. Vertraulichkeit" }),
                                /* @__PURE__ */ jsx("li", { children: "• Politische Sensibilität beachten" }),
                                /* @__PURE__ */ jsx("li", { children: "• Besondere Berichtspflichten" }),
                                /* @__PURE__ */ jsx("li", { children: "• Haushaltsrechtliche Vorgaben" })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-6 rounded-lg mb-6", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-indigo-900 mb-4", children: "Change Management und Kommunikationsstrategie" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-800 mb-3", children: "Interne Kommunikation" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-indigo-800", children: "Führungsebene:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-indigo-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Town Hall Meetings mit Vorstand" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Leadership Commitment Statement" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Persönliche Botschaften der Geschäftsführung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Vorbildfunktion aktiv wahrnehmen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-indigo-800", children: "Mitarbeiterebene:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-indigo-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Informationsveranstaltungen pro Abteilung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• E-Learning Module verpflichtend" }),
                                    /* @__PURE__ */ jsx("li", { children: "• FAQ-Dokumente und Intranet-Seite" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Feedback-Schleifen etablieren" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-800 mb-3", children: "Externe Kommunikation" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-indigo-800", children: "Stakeholder:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-indigo-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Pressemitteilung zur Implementierung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Update für Investoren/Aktionäre" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Information an Geschäftspartner" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Branchenaustausch initiieren" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-indigo-800", children: "Öffentlichkeit:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-indigo-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Website-Bereich zum HinSchG" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Transparenzbericht jährlich" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Social Media Kommunikation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Teilnahme an Fachkonferenzen" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Checkliste für die Praxis" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Rechtliche Compliance" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Meldestelle eingerichtet" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Anonymität gewährleistet" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Fristen dokumentiert" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Prozesse definiert" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Technische Umsetzung" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "System implementiert" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Verschlüsselung aktiv" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Backups eingerichtet" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Tests durchgeführt" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Organisatorisches" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Team aufgestellt" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Schulungen geplant" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Kommuniziert" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Dokumentiert" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Kontinuität" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "KPIs definiert" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Monitoring aktiv" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Reviews geplant" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-blue-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-blue-800", children: "Budget gesichert" })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Erfolgsfaktoren und Stolpersteine" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-green-900 mb-3", children: [
                                /* @__PURE__ */ jsx(CheckCircle, { className: "inline-block h-5 w-5 text-green-600 mr-2" }),
                                "Erfolgsfaktoren"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Top-Management-Support" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Sichtbare Unterstützung durch Führung schafft Vertrauen und Akzeptanz" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Nutzerfreundliche Systeme" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Intuitive Bedienung erhöht Meldungsbereitschaft signifikant" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Transparente Kommunikation" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Offene Information über Prozesse und Ergebnisse stärkt Glaubwürdigkeit" })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-red-900 mb-3", children: [
                                /* @__PURE__ */ jsx(AlertCircle, { className: "inline-block h-5 w-5 text-red-600 mr-2" }),
                                "Häufige Fehler"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-800", children: "Minimallösung implementieren" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 mt-1", children: '"Checkbox-Compliance" ohne echtes Commitment führt zu Vertrauensverlust' })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-800", children: "Fehlende Nachverfolgung" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 mt-1", children: "Meldungen ohne konsequente Bearbeitung demotivieren potenzielle Hinweisgeber" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-800", children: "Unterschätzte Komplexität" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 mt-1", children: "Technische Lösung allein reicht nicht - Kultur und Prozesse sind entscheidend" })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Erweiterte Best Practices aus der Praxis" }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-purple-500", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Kulturelle Integration" }),
                              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Vertrauenskultur aufbauen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Offene Fehlerkultur etablieren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Speak-up Culture fördern" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Positive Beispiele kommunizieren" }),
                                    /* @__PURE__ */ jsx("li", { children: '• Whistleblower als "Beschützer" positionieren' }),
                                    /* @__PURE__ */ jsx("li", { children: "• Erfolgsgeschichten teilen (anonymisiert)" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Leadership Engagement:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• CEO/Vorstand als Botschafter" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Townhalls zum Thema" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Persönliche Commitment-Videos" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Walk-the-Talk Prinzip" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Null-Toleranz bei Repressalien" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-blue-500", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Prozessoptimierung" }),
                              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Eingangsphase:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• KI-gestützte Vorklassifizierung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Automatische Übersetzung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Smart Routing zu Experten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Duplikatserkennung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Bearbeitungsphase:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Workflow-Automatisierung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Digitale Beweissicherung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Echtzeit-Kollaboration" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Predictive Analytics" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Abschlussphase:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Automatisierte Reports" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Lessons Learned Datenbank" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Präventionsmaßnahmen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Follow-up Automatisierung" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-green-500", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Technologie-Best Practices" }),
                              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Moderne Sicherheitsfeatures:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• End-to-End Verschlüsselung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Blockchain für Audit Trail" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zero-Knowledge Architecture" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Tor-Browser Kompatibilität" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Biometrische Authentifizierung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "User Experience:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Mobile-First Design" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Sprachsteuerung möglich" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Barrierefreie Gestaltung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Offline-Modus verfügbar" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Intuitive Benutzerführung" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-900 mb-4", children: "Häufige Implementierungsfehler im Detail" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Strategische Fehler" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Isolierte Implementierung:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700 mt-1", children: "HinSchG-System wird nicht in bestehende Compliance-Strukturen integriert" }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-2 p-2 bg-orange-100 rounded", children: /* @__PURE__ */ jsx("span", { className: "text-xs text-orange-800", children: "→ Lösung: Ganzheitlicher Compliance-Ansatz" }) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Fehlende Ressourcenplanung:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700 mt-1", children: "Unterschätzung von Zeit, Personal und Budget für nachhaltige Umsetzung" }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-2 p-2 bg-orange-100 rounded", children: /* @__PURE__ */ jsx("span", { className: "text-xs text-orange-800", children: "→ Lösung: Realistische Langzeitplanung" }) })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Operative Fehler" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Unklare Zuständigkeiten:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700 mt-1", children: "Verantwortlichkeiten für Meldungsbearbeitung nicht eindeutig definiert" }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-2 p-2 bg-orange-100 rounded", children: /* @__PURE__ */ jsx("span", { className: "text-xs text-orange-800", children: "→ Lösung: RACI-Matrix erstellen" }) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Mangelhafte Schulung:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700 mt-1", children: "Mitarbeiter verstehen System und ihre Rechte/Pflichten nicht" }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-2 p-2 bg-orange-100 rounded", children: /* @__PURE__ */ jsx("span", { className: "text-xs text-orange-800", children: "→ Lösung: Verpflichtende Trainings" }) })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(5),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(6);
                          setCurrentSection(7);
                        },
                        className: "bg-indigo-600 hover:bg-indigo-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 7 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl", children: /* @__PURE__ */ jsx(Route, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Verfahrensschritte" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Strukturierte Prozesse für den Umgang mit Hinweisen" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Meldungseingang und Erstbearbeitung",
                      icon: Mail,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Sofortmaßnahmen nach Meldungseingang" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Erste 24 Stunden" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "1" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Meldungsbestätigung:" }),
                                    " Automatische Eingangsbestätigung an Hinweisgeber"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "2" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Vorläufige Klassifizierung:" }),
                                    " Erste Bewertung der Meldung nach Schweregrad"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "3" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Zuständigkeitsprüfung:" }),
                                    " Weiterleitung an verantwortliche Stelle"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "4" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Dokumentation:" }),
                                    " Vollständige Erfassung aller Angaben"
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Erste Woche" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "5" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Plausibilitätsprüfung:" }),
                                    " Erste inhaltliche Bewertung der Meldung"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "6" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Risikoeinschätzung:" }),
                                    " Bewertung möglicher Schäden und Gefahren"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "7" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Bestätigung:" }),
                                    " Schriftliche Bestätigung des Meldungseingangs (§ 17 HinSchG)"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "8" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Untersuchungsplan:" }),
                                    " Erstellung eines strukturierten Vorgehens"
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Bewertungsmatrix für Meldungen" }),
                          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse border border-yellow-300", children: [
                            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "bg-yellow-200", children: [
                              /* @__PURE__ */ jsx("th", { className: "border border-yellow-300 p-3 text-left font-semibold text-yellow-900", children: "Kriterium" }),
                              /* @__PURE__ */ jsx("th", { className: "border border-yellow-300 p-3 text-center font-semibold text-yellow-900", children: "Niedrig" }),
                              /* @__PURE__ */ jsx("th", { className: "border border-yellow-300 p-3 text-center font-semibold text-yellow-900", children: "Mittel" }),
                              /* @__PURE__ */ jsx("th", { className: "border border-yellow-300 p-3 text-center font-semibold text-yellow-900", children: "Hoch" }),
                              /* @__PURE__ */ jsx("th", { className: "border border-yellow-300 p-3 text-center font-semibold text-yellow-900", children: "Kritisch" })
                            ] }) }),
                            /* @__PURE__ */ jsxs("tbody", { className: "text-sm", children: [
                              /* @__PURE__ */ jsxs("tr", { children: [
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 font-medium", children: "Rechtsverletzung" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "Ordnungswidrigkeit" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "Vergehen" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "Verbrechen" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "Schweres Verbrechen" })
                              ] }),
                              /* @__PURE__ */ jsxs("tr", { className: "bg-yellow-50", children: [
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 font-medium", children: "Schadenshöhe" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "< 10.000 €" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "10.000-100.000 €" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "100.000-1 Mio €" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "> 1 Mio €" })
                              ] }),
                              /* @__PURE__ */ jsxs("tr", { children: [
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 font-medium", children: "Öffentliches Interesse" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "Gering" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "Beachtlich" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "Erheblich" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "Außergewöhnlich" })
                              ] }),
                              /* @__PURE__ */ jsxs("tr", { className: "bg-yellow-50", children: [
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 font-medium", children: "Gefahr für Leben/Gesundheit" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "Keine" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "Potenzielle Gefahr" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "Konkrete Gefahr" }),
                                /* @__PURE__ */ jsx("td", { className: "border border-yellow-300 p-3 text-center", children: "Akute Gefahr" })
                              ] })
                            ] })
                          ] }) })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Untersuchungsverfahren",
                      icon: Search,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Systematische Untersuchung" }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-green-500", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Phase 1: Vorermittlung (1-2 Wochen)" }),
                              /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-green-800", children: [
                                /* @__PURE__ */ jsxs("li", { children: [
                                  "• ",
                                  /* @__PURE__ */ jsx("strong", { children: "Sachverhaltsaufklärung:" }),
                                  " Sammlung aller verfügbaren Informationen"
                                ] }),
                                /* @__PURE__ */ jsxs("li", { children: [
                                  "• ",
                                  /* @__PURE__ */ jsx("strong", { children: "Beweissicherung:" }),
                                  " Sicherstellung von Dokumenten und digitalen Daten"
                                ] }),
                                /* @__PURE__ */ jsxs("li", { children: [
                                  "• ",
                                  /* @__PURE__ */ jsx("strong", { children: "Zeugenbefragung:" }),
                                  " Erste Gespräche mit relevanten Personen"
                                ] }),
                                /* @__PURE__ */ jsxs("li", { children: [
                                  "• ",
                                  /* @__PURE__ */ jsx("strong", { children: "Rechtliche Einordnung:" }),
                                  " Prüfung der rechtlichen Relevanz"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-green-600", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Phase 2: Hauptuntersuchung (2-6 Wochen)" }),
                              /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-green-800", children: [
                                /* @__PURE__ */ jsxs("li", { children: [
                                  "• ",
                                  /* @__PURE__ */ jsx("strong", { children: "Tiefere Analyse:" }),
                                  " Detaillierte Untersuchung der Vorwürfe"
                                ] }),
                                /* @__PURE__ */ jsxs("li", { children: [
                                  "• ",
                                  /* @__PURE__ */ jsx("strong", { children: "Expertengutachten:" }),
                                  " Hinzuziehung von Fachexperten bei Bedarf"
                                ] }),
                                /* @__PURE__ */ jsxs("li", { children: [
                                  "• ",
                                  /* @__PURE__ */ jsx("strong", { children: "Anhörungen:" }),
                                  " Formelle Befragung der betroffenen Personen"
                                ] }),
                                /* @__PURE__ */ jsxs("li", { children: [
                                  "• ",
                                  /* @__PURE__ */ jsx("strong", { children: "Zusätzliche Beweise:" }),
                                  " Weitere Beweismittel sammeln"
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-green-700", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-2", children: "Phase 3: Bewertung (1-2 Wochen)" }),
                              /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-green-800", children: [
                                /* @__PURE__ */ jsxs("li", { children: [
                                  "• ",
                                  /* @__PURE__ */ jsx("strong", { children: "Beweisanalyse:" }),
                                  " Gesamtbewertung aller gesammelten Beweise"
                                ] }),
                                /* @__PURE__ */ jsxs("li", { children: [
                                  "• ",
                                  /* @__PURE__ */ jsx("strong", { children: "Rechtliche Würdigung:" }),
                                  " Endgültige rechtliche Einschätzung"
                                ] }),
                                /* @__PURE__ */ jsxs("li", { children: [
                                  "• ",
                                  /* @__PURE__ */ jsx("strong", { children: "Maßnahmenentwicklung:" }),
                                  " Planung von Konsequenzen und Korrekturen"
                                ] }),
                                /* @__PURE__ */ jsxs("li", { children: [
                                  "• ",
                                  /* @__PURE__ */ jsx("strong", { children: "Berichtserstellung:" }),
                                  " Abschlussbericht mit Empfehlungen"
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Untersuchungsstandards" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Grundprinzipien" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-purple-800", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-purple-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Objektivität:" }),
                                    " Neutrale und unvoreingenommene Untersuchung"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-purple-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Vertraulichkeit:" }),
                                    " Schutz aller Beteiligten und Informationen"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-purple-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Verhältnismäßigkeit:" }),
                                    " Angemessene Untersuchungstiefe"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-purple-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Dokumentation:" }),
                                    " Lückenlose Aufzeichnung aller Schritte"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-purple-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Rechtmäßigkeit:" }),
                                    " Einhaltung aller gesetzlichen Vorgaben"
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Qualitätssicherung" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-purple-800", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-purple-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Vier-Augen-Prinzip:" }),
                                    " Mindestens zwei Personen bei kritischen Schritten"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-purple-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Externe Expertise:" }),
                                    " Hinzuziehung von Spezialisten bei Bedarf"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-purple-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Peer Review:" }),
                                    " Überprüfung durch unabhängige Kollegen"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-purple-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Standardisierung:" }),
                                    " Verwendung einheitlicher Verfahren"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-purple-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Kontinuierliche Verbesserung:" }),
                                    " Regelmäßige Verfahrensoptimierung"
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Kommunikation mit dem Hinweisgeber",
                      icon: MessageSquare,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-indigo-900 mb-4", children: "Gesetzliche Kommunikationspflichten" }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-indigo-200", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-2", children: "Pflichtmitteilungen nach § 17 HinSchG" }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-indigo-900", children: "Innerhalb 7 Tagen:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1 text-indigo-800", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Eingangsbestätigung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Zuständigkeitsmitteilung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Erste Einschätzung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Weitere Vorgehensweise" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-indigo-900", children: "Innerhalb 3 Monaten:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1 text-indigo-800", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Zwischenbericht über Fortschritt" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Geplante Untersuchungsschritte" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Vorläufige Ergebnisse" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Zeitplan für Abschluss" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-indigo-900", children: "Nach Abschluss:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1 text-indigo-800", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Abschließende Mitteilung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Ergebnis der Untersuchung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Ergriffene Maßnahmen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Begründung bei Ablehnung" })
                                ] })
                              ] })
                            ] })
                          ] }) })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-teal-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-teal-900 mb-4", children: "Best Practices für die Kommunikation" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-teal-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx(MessageSquare, { className: "mr-2 h-5 w-5" }),
                                "Professionelle Kommunikation"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-teal-800", children: [
                                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "Ton und Stil:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "ml-4 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Respektvoll und wertschätzend" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Sachlich und professionell" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Verständlich und präzise" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Empathisch und unterstützend" })
                                ] }),
                                /* @__PURE__ */ jsx("p", { className: "mt-3", children: /* @__PURE__ */ jsx("strong", { children: "Strukturierung:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "ml-4 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Klare Gliederung der Inhalte" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Verwendung von Überschriften" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Bullet Points für bessere Lesbarkeit" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Zusammenfassung der wichtigsten Punkte" })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-teal-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx(Lock, { className: "mr-2 h-5 w-5" }),
                                "Schutz der Identität"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-teal-800", children: [
                                /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: "Anonymitätsschutz:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "ml-4 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Sichere Kommunikationskanäle nutzen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Verschlüsselung bei sensiblen Daten" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Vermeidung identifizierender Merkmale" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Separate Aktenführung" })
                                ] }),
                                /* @__PURE__ */ jsx("p", { className: "mt-3", children: /* @__PURE__ */ jsx("strong", { children: "Vertraulichkeit:" }) }),
                                /* @__PURE__ */ jsxs("ul", { className: "ml-4 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Begrenzter Personenkreis mit Zugang" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Need-to-know-Prinzip beachten" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Physische und digitale Sicherheit" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Aufbewahrungsfristen einhalten" })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Entscheidung und Maßnahmen",
                      icon: Gavel,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-red-900 mb-4", children: "Entscheidungsmatrix" }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-900 mb-3", children: "Mögliche Untersuchungsergebnisse" }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-100 rounded border-l-4 border-green-500", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-green-900", children: "Unbegründet" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-green-800", children: "Vorwürfe können nicht bestätigt werden" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-xs text-green-700 mt-2", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Keine Rechtsverletzung feststellbar" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Sachverhalt widerlegt" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Unzureichende Beweise" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-100 rounded border-l-4 border-yellow-500", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-yellow-900", children: "Teilweise begründet" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-800", children: "Einzelne Aspekte bestätigt" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-xs text-yellow-700 mt-2", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Geringfügige Verstöße" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verfahrensmängel" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Nachbesserungsbedarf" })
                                  ] })
                                ] })
                              ] }) }),
                              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-orange-100 rounded border-l-4 border-orange-500", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-orange-900", children: "Begründet" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-800", children: "Wesentliche Verstöße bestätigt" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-xs text-orange-700 mt-2", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Rechtsverletzungen belegt" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Sofortige Maßnahmen erforderlich" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Compliance-Verstöße" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-100 rounded border-l-4 border-red-500", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-red-900", children: "Schwerwiegend begründet" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-red-800", children: "Erhebliche Rechtsverletzungen" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-xs text-red-700 mt-2", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Straftaten oder schwere Verstöße" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Meldung an Behörden" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Umfassende Korrekturen nötig" })
                                  ] })
                                ] })
                              ] }) })
                            ] })
                          ] }) })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Maßnahmenkatalog" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3 text-center", children: "Sofortmaßnahmen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-red-100 rounded", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Schadensbegrenzung" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-xs mt-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Stopp gefährdender Aktivitäten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Beweissicherung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Krisenteam aktivieren" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-orange-100 rounded", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Personalmaßnahmen" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-xs mt-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Suspendierung bei Bedarf" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Versetzung oder Freistellung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Arbeitsrechtliche Schritte" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3 text-center", children: "Mittelfristige Maßnahmen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-yellow-100 rounded", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Prozessverbesserung" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-xs mt-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Richtlinien überarbeiten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kontrollen verstärken" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schulungen durchführen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-blue-100 rounded", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Organisatorisch" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-xs mt-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Strukturen anpassen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zuständigkeiten klären" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Berichtswege optimieren" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3 text-center", children: "Langfristige Maßnahmen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-green-100 rounded", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Kulturwandel" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-xs mt-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Compliance-Kultur stärken" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Werteorientierung fördern" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Führungskräfte schulen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-purple-100 rounded", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Monitoring" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-xs mt-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Kontrollsysteme etablieren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Überprüfungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Wirksamkeitsmessung" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Abschluss und Nachverfolgung",
                      icon: CheckCircle,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-emerald-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-emerald-900 mb-4", children: "Verfahrensabschluss" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-emerald-900 mb-3", children: "Abschlussdokumentation" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-emerald-800", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Untersuchungsbericht:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "ml-4 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Sachverhaltsdarstellung" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Untersuchungsergebnisse" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Rechtliche Bewertung" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Empfohlene Maßnahmen" })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Database, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Beweisdokumentation:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "ml-4 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Alle gesammelten Beweise" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Gesprächsprotokolle" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Expertengutachten" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Zusätzliche Unterlagen" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-emerald-900 mb-3", children: "Kommunikation der Ergebnisse" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-emerald-800", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "An Hinweisgeber:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "ml-4 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Abschließende Mitteilung" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Zusammenfassung der Ergebnisse" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Dank für die Meldung" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Verweis auf Schutzrechte" })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "An Stakeholder:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "ml-4 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Management-Summary" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Handlungsempfehlungen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Zeitplan für Umsetzung" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Risikobewertung" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Nachverfolgung und Monitoring" }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Umsetzungscontrolling" }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Calendar, { className: "h-8 w-8 text-blue-600" }) }),
                                /* @__PURE__ */ jsx("h6", { className: "font-semibold text-blue-900", children: "30 Tage" }),
                                /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-800", children: "Erste Umsetzungsüberprüfung" })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-8 w-8 text-blue-600" }) }),
                                /* @__PURE__ */ jsx("h6", { className: "font-semibold text-blue-900", children: "90 Tage" }),
                                /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-800", children: "Zwischenbewertung der Wirksamkeit" })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Award, { className: "h-8 w-8 text-blue-600" }) }),
                                /* @__PURE__ */ jsx("h6", { className: "font-semibold text-blue-900", children: "1 Jahr" }),
                                /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-800", children: "Abschließende Wirksamkeitsprüfung" })
                              ] })
                            ] })
                          ] }) })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(6),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(7);
                          setCurrentSection(8);
                        },
                        className: "bg-pink-600 hover:bg-pink-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 8 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl", children: /* @__PURE__ */ jsx(FileText, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Dokumentation" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Systematische Erfassung und Verwaltung aller Verfahrensschritte" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Gesetzliche Dokumentationspflichten",
                      icon: Scale,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Anforderungen nach § 18 HinSchG" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Inhaltliche Anforderungen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-blue-800", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Vollständige Sachverhaltserfassung:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "ml-4 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Alle wesentlichen Fakten" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Chronologische Darstellung" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Beteiligte Personen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Relevante Dokumente" })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Verfahrensdokumentation:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "ml-4 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Alle Untersuchungsschritte" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Zwischenergebnisse" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Entscheidungsbegründungen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Ergriffene Maßnahmen" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Formelle Anforderungen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-blue-800", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Aufbewahrungsfristen:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "ml-4 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Mindestens 3 Jahre" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Bei Strafverfahren länger" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Digitale Langzeitspeicherung" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Sichere Archivierung" })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Datenschutz:" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "ml-4 mt-1 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• DSGVO-konforme Speicherung" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Zugriffskontrollen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Anonymisierung wo möglich" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Löschfristen beachten" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Beweissicherung und -aufbewahrung" }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-yellow-200", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-3", children: "Digitale Beweismittel" }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-yellow-900", children: "E-Mails & Kommunikation" }),
                                /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1 text-yellow-800", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Vollständige E-Mail-Header" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Anhänge separat sichern" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Kommunikationsketten" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Zeitstempel dokumentieren" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-yellow-900", children: "Dateien & Dokumente" }),
                                /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1 text-yellow-800", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Originaldateien bewahren" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Versionsstände sichern" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Metadaten erhalten" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Hash-Werte erstellen" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-yellow-900", children: "System-Logs" }),
                                /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1 text-yellow-800", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Zugriffsprotokolle" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Änderungshistorien" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Transaktionslogs" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Audit-Trails sichern" })
                                ] })
                              ] })
                            ] })
                          ] }) })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Dokumentationssystem und Templates",
                      icon: Database,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Strukturiertes Akten- und Fallmanagement" }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-green-200", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Aktenaufbau und -struktur" }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-100 rounded border-l-4 border-green-500", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-green-900", children: "Teil A: Grunddaten" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Fallnummer und Erstellungsdatum" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Art der Meldung (anonym/identifiziert)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kurze Sachverhaltsdarstellung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Erste Klassifizierung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zuständige Bearbeiter" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-100 rounded border-l-4 border-green-600", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-green-900", children: "Teil B: Verfahrensverlauf" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Chronologische Dokumentation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Untersuchungsschritte" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zwischenergebnisse" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kommunikation mit Beteiligten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Statusupdates" })
                                  ] })
                                ] })
                              ] }) }),
                              /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-100 rounded border-l-4 border-green-700", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-green-900", children: "Teil C: Beweise und Unterlagen" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Originalmeldung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Gesammelte Dokumente" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Gesprächsprotokolle" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Expertengutachten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zusätzliche Beweismittel" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-100 rounded border-l-4 border-green-800", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-green-900", children: "Teil D: Ergebnisse und Maßnahmen" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-800 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Abschlussbericht" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Rechtliche Bewertung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Beschlossene Maßnahmen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Umsetzungscontrolling" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Lessons Learned" })
                                  ] })
                                ] })
                              ] }) })
                            ] })
                          ] }) })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Dokumenten-Templates und Formulare" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-purple-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx(Mail, { className: "mr-2 h-5 w-5" }),
                                "Kommunikation"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Eingangsbestätigung" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-purple-700 mt-1", children: "Standardisierte Bestätigung des Meldungseingangs mit Fallnummer" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Zwischenbericht" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-purple-700 mt-1", children: "Template für 3-Monats-Mitteilung an Hinweisgeber" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Abschlussmitteilung" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-purple-700 mt-1", children: "Finale Kommunikation der Untersuchungsergebnisse" })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-purple-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx(Search, { className: "mr-2 h-5 w-5" }),
                                "Untersuchung"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Untersuchungsplan" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-purple-700 mt-1", children: "Strukturierte Planung der Untersuchungsschritte" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Gesprächsprotokoll" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-purple-700 mt-1", children: "Standardisierte Erfassung von Befragungen" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Bewertungsmatrix" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-purple-700 mt-1", children: "Systematische Bewertung von Sachverhalten" })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-purple-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx(FileText, { className: "mr-2 h-5 w-5" }),
                                "Berichte"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Abschlussbericht" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-purple-700 mt-1", children: "Umfassende Dokumentation der Untersuchung" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Management Summary" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-purple-700 mt-1", children: "Kompakte Zusammenfassung für Führungsebene" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-2 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Compliance Report" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-purple-700 mt-1", children: "Regelmäßige Berichterstattung an Aufsichtsgremien" })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Digitale Dokumentenmanagement-Systeme",
                      icon: Server,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-indigo-900 mb-4", children: "Technische Anforderungen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-3", children: "Systemfunktionalitäten" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-indigo-800", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Database, { className: "h-4 w-4 text-indigo-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Zentrale Datenhaltung:" }),
                                    " Einheitliche Speicherung aller Dokumente"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-indigo-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Volltext-Suche:" }),
                                    " Schnelles Auffinden relevanter Informationen"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-indigo-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Rollenbasierte Zugriffe:" }),
                                    " Differenzierte Berechtigungskonzepte"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-indigo-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Versionskontrolle:" }),
                                    " Nachvollziehbare Änderungshistorie"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-indigo-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Verschlüsselung:" }),
                                    " Schutz sensibler Informationen"
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-3", children: "Integration und Workflows" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-indigo-800", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Network, { className: "h-4 w-4 text-indigo-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "API-Schnittstellen:" }),
                                    " Integration in bestehende Systeme"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Workflow, { className: "h-4 w-4 text-indigo-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Automatisierte Workflows:" }),
                                    " Standardisierte Prozessabläufe"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4 text-indigo-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Benachrichtigungen:" }),
                                    " Automatische Erinnerungen und Alerts"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4 text-indigo-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Reporting:" }),
                                    " Automatisierte Berichtsgenerierung"
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-indigo-600" }),
                                  /* @__PURE__ */ jsxs("span", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Backup & Recovery:" }),
                                    " Sichere Datenwiederherstellung"
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-cyan-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-cyan-900 mb-4", children: "Compliance und Sicherheit" }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-cyan-900 mb-3", children: "Rechtliche Compliance" }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-cyan-900", children: "DSGVO-Konformität" }),
                                /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1 text-cyan-800", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Datenschutz by Design" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Pseudonymisierung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Recht auf Vergessenwerden" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Dokumentation der Verarbeitung" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-cyan-900", children: "Aufbewahrungsfristen" }),
                                /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1 text-cyan-800", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Automatische Archivierung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Rechtssichere Löschung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Fristen-Monitoring" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Audit-Protokolle" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-cyan-900", children: "Zugriffskontrolle" }),
                                /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1 text-cyan-800", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Need-to-know-Prinzip" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Zweifaktor-Authentifizierung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Zugriffsprotokolle" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Berechtigungsprüfung" })
                                ] })
                              ] })
                            ] })
                          ] }) })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Qualitätssicherung und Audit-Trail",
                      icon: Award,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-900 mb-4", children: "Dokumentationsqualität" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Qualitätsstandards" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-orange-800", children: [
                                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold", children: "Vollständigkeit" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "mt-1 space-y-1 text-xs", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Alle relevanten Informationen erfasst" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Keine wesentlichen Lücken" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Vollständige Chronologie" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Alle Beteiligten dokumentiert" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold", children: "Nachvollziehbarkeit" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "mt-1 space-y-1 text-xs", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Logische Struktur" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Klare Verweise und Querverbindungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Eindeutige Identifizierung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Transparente Entscheidungswege" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Kontrollen und Reviews" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm text-orange-800", children: [
                                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold", children: "Vier-Augen-Prinzip" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "mt-1 space-y-1 text-xs", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Unabhängige Überprüfung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Fachliche Validierung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Rechtliche Compliance" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Qualitätsfreigabe" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded border", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold", children: "Regelmäßige Audits" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "mt-1 space-y-1 text-xs", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Interne Qualitätsprüfungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Externe Revisionen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Compliance-Checks" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Continuous Improvement" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Audit-Trail und Nachweisführung" }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Lückenlose Dokumentation aller Aktivitäten" }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 text-sm", children: [
                              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-blue-600" }) }),
                                /* @__PURE__ */ jsx("h6", { className: "font-semibold text-gray-900", children: "Zeitstempel" }),
                                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Präzise Erfassung aller Aktivitätszeiten" })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-green-600" }) }),
                                /* @__PURE__ */ jsx("h6", { className: "font-semibold text-gray-900", children: "Benutzer-ID" }),
                                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Eindeutige Zuordnung aller Aktionen" })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Edit3, { className: "h-6 w-6 text-purple-600" }) }),
                                /* @__PURE__ */ jsx("h6", { className: "font-semibold text-gray-900", children: "Änderungen" }),
                                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Vollständige Versionierung aller Dokumente" })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-red-600" }) }),
                                /* @__PURE__ */ jsx("h6", { className: "font-semibold text-gray-900", children: "Integrität" }),
                                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Kryptographische Sicherung gegen Manipulation" })
                              ] })
                            ] })
                          ] }) })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(7),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(8);
                          setCurrentSection(9);
                        },
                        className: "bg-teal-600 hover:bg-teal-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 9 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl", children: /* @__PURE__ */ jsx(GraduationCap, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Schulungen" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Mitarbeiterausbildung und Awareness-Programme" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Gesetzliche Schulungsanforderungen (§ 13 HinSchG)",
                      icon: BookOpen,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-900 mb-4", children: "Informationspflichten" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Zielgruppen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-blue-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-700", children: "Alle Beschäftigten:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Grundlegende Informationen zum HinSchG" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verfügbare Meldekanäle" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schutz vor Repressalien" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verfahrensabläufe" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Ansprechpartner und Kontaktdaten" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-green-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-700", children: "Führungskräfte:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Vertieftes Rechtswissen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Umgang mit Meldungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Prävention von Repressalien" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Eskalationsverfahren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Vorbildfunktion und Kommunikation" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-purple-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-700", children: "Meldestellen-Personal:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Spezialisierte Fachkenntnisse" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Investigationstechniken" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Gesprächsführung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Datenschutz und Vertraulichkeit" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Weiterbildung" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Schulungsformate" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Präsenzschulungen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Interaktive Workshops" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Fallstudien und Rollenspiele" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Q&A-Sitzungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Gruppendiskussionen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Praxisübungen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "E-Learning-Module:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Adaptive Lernpfade" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Interaktive Simulationen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Gamification-Elemente" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Mobile Verfügbarkeit" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Automatische Fortschrittskontrolle" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Blended Learning:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Kombination verschiedener Formate" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Selbststudium und Präsenz" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Peer-Learning-Ansätze" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Mentoring-Programme" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Betreuung" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Schulungszyklen und -häufigkeit" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Onboarding" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Grundlagenschulung für alle neuen MA" }),
                                /* @__PURE__ */ jsx("li", { children: "• Innerhalb der ersten 30 Tage" }),
                                /* @__PURE__ */ jsx("li", { children: "• Basis-Zertifizierung erforderlich" }),
                                /* @__PURE__ */ jsx("li", { children: "• Integration in Einarbeitungsplan" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Jährliche Auffrischung" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Pflichtschulung für alle MA" }),
                                /* @__PURE__ */ jsx("li", { children: "• Updates zu Gesetzesänderungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Neue Fallbeispiele" }),
                                /* @__PURE__ */ jsx("li", { children: "• Wissenstest erforderlich" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Anlassbezogen" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Nach kritischen Vorfällen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Bei Organisationsänderungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Nach Gesetzesnovellierungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Bei Audit-Empfehlungen" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Spezialisierung" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Vertiefung für Führungskräfte" }),
                                /* @__PURE__ */ jsx("li", { children: "• Branchenspezifische Module" }),
                                /* @__PURE__ */ jsx("li", { children: "• Train-the-Trainer Programme" }),
                                /* @__PURE__ */ jsx("li", { children: "• Externe Zertifizierungen" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Schulungsinhalte und Curriculum",
                      icon: FileText,
                      children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Modulares Curriculum" }),
                        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-blue-500", children: [
                            /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-blue-900 mb-4 flex items-center", children: [
                              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3", children: "1" }),
                              "Modul 1: Rechtliche Grundlagen (2 Stunden)"
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Lernziele:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• HinSchG-Grundlagen verstehen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Anwendungsbereich kennen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Geschützte Bereiche identifizieren" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Rechtliche Konsequenzen verstehen" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Inhalte:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• EU-Richtlinie und nationale Umsetzung" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Begriffsbestimmungen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Geschützte Personen und Bereiche" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Sanktionen und Bußgelder" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Methoden:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Interaktive Präsentation" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Rechtsfälle analysieren" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Quizzes und Wissenstests" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Diskussionsrunden" })
                                ] })
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-green-500", children: [
                            /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-green-900 mb-4 flex items-center", children: [
                              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3", children: "2" }),
                              "Modul 2: Meldesystem und Verfahren (1,5 Stunden)"
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-green-800 text-sm", children: "Lernziele:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Meldekanäle kennen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Verfahrensablauf verstehen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Anonymität gewährleisten" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Dokumentation beherrschen" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-green-800 text-sm", children: "Inhalte:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Interne vs. externe Meldestellen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Technische Meldekanäle" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Verfahrensschritte und Fristen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Feedback und Kommunikation" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-green-800 text-sm", children: "Methoden:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• System-Demonstration" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Hands-on Training" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Prozess-Simulation" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Praxisübungen" })
                                ] })
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-purple-500", children: [
                            /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-purple-900 mb-4 flex items-center", children: [
                              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3", children: "3" }),
                              "Modul 3: Schutz vor Repressalien (1 Stunde)"
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-purple-800 text-sm", children: "Lernziele:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Repressalien erkennen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Schutzmaßnahmen kennen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Beweislastumkehr verstehen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Hilfestellung suchen" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-purple-800 text-sm", children: "Inhalte:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Formen von Repressalien" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Präventive Schutzmaßnahmen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Reaktive Interventionen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Rechtsmittel und Unterstützung" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-purple-800 text-sm", children: "Methoden:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Fallstudien analysieren" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Rollenspiele" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Szenario-Training" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Erfahrungsaustausch" })
                                ] })
                              ] })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-orange-500", children: [
                            /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-orange-900 mb-4 flex items-center", children: [
                              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3", children: "4" }),
                              "Modul 4: Praktische Anwendung (1,5 Stunden)"
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-orange-800 text-sm", children: "Lernziele:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Echte Fälle beurteilen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Entscheidungen treffen" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Kommunikation üben" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Selbstvertrauen aufbauen" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-orange-800 text-sm", children: "Inhalte:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Branchenspezifische Beispiele" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Ethische Dilemmata" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Kommunikationsstrategien" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Verbesserung" })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { children: [
                                /* @__PURE__ */ jsx("strong", { className: "text-orange-800 text-sm", children: "Methoden:" }),
                                /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-1 space-y-1", children: [
                                  /* @__PURE__ */ jsx("li", { children: "• Interaktive Workshops" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Peer-Learning" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Mentoring" }),
                                  /* @__PURE__ */ jsx("li", { children: "• Feedback-Sessions" })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }) })
                      ] }) })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Awareness-Kampagnen und Kulturwandel",
                      icon: Users,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Mehrjährige Awareness-Strategie" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Kampagnen-Phasen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Phase 1: Grundsensibilisierung (Jahr 1)" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Einführung des Hinweisgebersystems" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Grundlegende Informationskampagne" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Führungskräfte als Multiplikatoren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Erste Erfolgsgeschichten kommunizieren" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Phase 2: Vertiefung (Jahr 2-3)" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Spezifische Branchenthemen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Interaktive Formate und Events" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Peer-to-Peer Learning" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Continuous Improvement" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Phase 3: Nachhaltigkeit (Jahr 4+)" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Integration in Unternehmenskultur" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Selbstlernende Organisation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Innovation und Best Practices" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Externe Benchmarking" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Kommunikationskanäle" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Traditionelle Medien:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Intranet-Artikel und News" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Newsletter und E-Mail-Kampagnen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Poster und Aushänge" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Mitarbeiterzeitung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Town Hall Meetings" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Digitale Kanäle:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Social Enterprise Plattformen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Video-Content und Webinare" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Mobile Apps und Push-Notifications" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Gamification und Challenges" }),
                                    /* @__PURE__ */ jsx("li", { children: "• VR/AR-Trainings" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Interaktive Formate:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Workshops und Roundtables" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Lunch & Learn Sessions" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Ethics Cafés" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Compliance Days" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Peer Coaching" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Kulturwandel-Initiativen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Leadership Commitment" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Vorbildfunktion der Führung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Öffentliche Unterstützung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Persönliche Erfahrungen teilen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Kommunikation" }),
                                /* @__PURE__ */ jsx("li", { children: "• Zero-Tolerance für Repressalien" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Positive Verstärkung" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Anerkennung für Hinweisgeber" }),
                                /* @__PURE__ */ jsx("li", { children: "• Courage Awards" }),
                                /* @__PURE__ */ jsx("li", { children: "• Erfolgsgeschichten publizieren" }),
                                /* @__PURE__ */ jsx("li", { children: "• Positive Peer Pressure" }),
                                /* @__PURE__ */ jsx("li", { children: "• Intrinsische Motivation" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Strukturelle Änderungen" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Integration in Performance Reviews" }),
                                /* @__PURE__ */ jsx("li", { children: "• Compliance-KPIs für Manager" }),
                                /* @__PURE__ */ jsx("li", { children: "• Ethik-Komitees etablieren" }),
                                /* @__PURE__ */ jsx("li", { children: "• Code of Conduct anpassen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Anreizsysteme überdenken" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Kontinuierliche Verbesserung" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Kulturumfragen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Feedback-Schleifen etablieren" }),
                                /* @__PURE__ */ jsx("li", { children: "• Best Practice Sharing" }),
                                /* @__PURE__ */ jsx("li", { children: "• Innovation fördern" }),
                                /* @__PURE__ */ jsx("li", { children: "• Externe Benchmarks" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(8),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(9);
                          setCurrentSection(10);
                        },
                        className: "bg-orange-600 hover:bg-orange-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 10 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Risikomanagement" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Identifikation und Bewertung von Compliance-Risiken" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Risikoidentifikation und -bewertung",
                      icon: Search,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Systematische Risikoanalyse" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Risikokategorien" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-red-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-700", children: "Rechtliche Risiken:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Verstoß gegen HinSchG-Pflichten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Bußgelder und Sanktionen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zivilrechtliche Ansprüche" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Strafverfahren gegen Verantwortliche" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Aufsichtsrechtliche Maßnahmen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-orange-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-700", children: "Reputationsrisiken:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Negative Medienberichterstattung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Vertrauensverlust bei Stakeholdern" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schädigung der Arbeitgebermarke" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kundenabwanderung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Investoren-Vertrauen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-blue-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-700", children: "Operative Risiken:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Ineffiziente Meldeprozesse" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Überbelastung der Meldestellen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Systemausfälle und technische Probleme" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Personalabwanderung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Wissensverslust" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Bewertungsmatrix" }),
                              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
                                  /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-gray-200", children: [
                                    /* @__PURE__ */ jsx("th", { className: "text-left py-2", children: "Wahrscheinlichkeit" }),
                                    /* @__PURE__ */ jsx("th", { className: "text-center py-2", children: "Niedrig" }),
                                    /* @__PURE__ */ jsx("th", { className: "text-center py-2", children: "Mittel" }),
                                    /* @__PURE__ */ jsx("th", { className: "text-center py-2", children: "Hoch" })
                                  ] }) }),
                                  /* @__PURE__ */ jsxs("tbody", { className: "text-gray-700", children: [
                                    /* @__PURE__ */ jsxs("tr", { children: [
                                      /* @__PURE__ */ jsx("td", { className: "py-2 font-semibold", children: "Schwer (>1M€)" }),
                                      /* @__PURE__ */ jsx("td", { className: "text-center py-2", children: /* @__PURE__ */ jsx("span", { className: "inline-block w-4 h-4 bg-yellow-400 rounded" }) }),
                                      /* @__PURE__ */ jsx("td", { className: "text-center py-2", children: /* @__PURE__ */ jsx("span", { className: "inline-block w-4 h-4 bg-red-400 rounded" }) }),
                                      /* @__PURE__ */ jsx("td", { className: "text-center py-2", children: /* @__PURE__ */ jsx("span", { className: "inline-block w-4 h-4 bg-red-600 rounded" }) })
                                    ] }),
                                    /* @__PURE__ */ jsxs("tr", { children: [
                                      /* @__PURE__ */ jsx("td", { className: "py-2 font-semibold", children: "Mittel (100K-1M€)" }),
                                      /* @__PURE__ */ jsx("td", { className: "text-center py-2", children: /* @__PURE__ */ jsx("span", { className: "inline-block w-4 h-4 bg-green-400 rounded" }) }),
                                      /* @__PURE__ */ jsx("td", { className: "text-center py-2", children: /* @__PURE__ */ jsx("span", { className: "inline-block w-4 h-4 bg-yellow-400 rounded" }) }),
                                      /* @__PURE__ */ jsx("td", { className: "text-center py-2", children: /* @__PURE__ */ jsx("span", { className: "inline-block w-4 h-4 bg-red-400 rounded" }) })
                                    ] }),
                                    /* @__PURE__ */ jsxs("tr", { children: [
                                      /* @__PURE__ */ jsx("td", { className: "py-2 font-semibold", children: "Gering (<100K€)" }),
                                      /* @__PURE__ */ jsx("td", { className: "text-center py-2", children: /* @__PURE__ */ jsx("span", { className: "inline-block w-4 h-4 bg-green-200 rounded" }) }),
                                      /* @__PURE__ */ jsx("td", { className: "text-center py-2", children: /* @__PURE__ */ jsx("span", { className: "inline-block w-4 h-4 bg-green-400 rounded" }) }),
                                      /* @__PURE__ */ jsx("td", { className: "text-center py-2", children: /* @__PURE__ */ jsx("span", { className: "inline-block w-4 h-4 bg-yellow-400 rounded" }) })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "mt-3 text-xs text-gray-600", children: [
                                  /* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-3 bg-green-200 rounded mr-1" }),
                                  " Niedrig",
                                  /* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-3 bg-green-400 rounded mr-1 ml-3" }),
                                  " Gering",
                                  /* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-3 bg-yellow-400 rounded mr-1 ml-3" }),
                                  " Mittel",
                                  /* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-3 bg-red-400 rounded mr-1 ml-3" }),
                                  " Hoch",
                                  /* @__PURE__ */ jsx("span", { className: "inline-block w-3 h-3 bg-red-600 rounded mr-1 ml-3" }),
                                  " Kritisch"
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Risikoindikatoren und Frühwarnsysteme" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Quantitative Indikatoren" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Anzahl Meldungen pro Quartal" }),
                                /* @__PURE__ */ jsx("li", { children: "• Durchschnittliche Bearbeitungszeit" }),
                                /* @__PURE__ */ jsx("li", { children: "• Quote substantiierter Meldungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Wiederholungsmeldungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Eskalationsrate zu externen Stellen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Personalfluktuation nach Meldungen" })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Qualitative Indikatoren" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Mitarbeitervertrauen in das System" }),
                                /* @__PURE__ */ jsx("li", { children: "• Führungsverhalten bei Meldungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Kulturelle Offenheit für Feedback" }),
                                /* @__PURE__ */ jsx("li", { children: "• Qualität der Untersuchungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Wirksamkeit der Maßnahmen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Externe Wahrnehmung" })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Technische Indikatoren" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Systemverfügbarkeit" }),
                                /* @__PURE__ */ jsx("li", { children: "• Sicherheitsvorfälle" }),
                                /* @__PURE__ */ jsx("li", { children: "• Datenintegrität" }),
                                /* @__PURE__ */ jsx("li", { children: "• Performance-Kennzahlen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Backup-Erfolgsrate" }),
                                /* @__PURE__ */ jsx("li", { children: "• User Experience Scores" })
                              ] }) })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Risikominderungsstrategien",
                      icon: Shield,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Präventive Maßnahmen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Organisatorische Prävention" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Governance-Strukturen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Unabhängige Oversight-Komitees" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Klar definierte Verantwortlichkeiten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Board-Berichte" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Externe Beratung und Audits" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Fortbildung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Prozessoptimierung:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Standardisierte Verfahren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Automatisierte Workflows" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Quality Assurance Checkpoints" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Feedback-Integration" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Continuous Improvement" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Technische Prävention" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Systemsicherheit:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Redundante Systeme" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verschlüsselung aller Daten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Multi-Faktor-Authentifizierung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Penetrationstests" }),
                                    /* @__PURE__ */ jsx("li", { children: "• 24/7 Monitoring" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Datenintegrität:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Automatische Backups" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Versionskontrolle" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Audit-Trails" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Disaster Recovery" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Business Continuity" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Reaktive Maßnahmen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Incident Response" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Sofortmaßnahmen-Katalog" }),
                                /* @__PURE__ */ jsx("li", { children: "• Eskalationsmatrix" }),
                                /* @__PURE__ */ jsx("li", { children: "• Kommunikationspläne" }),
                                /* @__PURE__ */ jsx("li", { children: "• Crisis Management Team" }),
                                /* @__PURE__ */ jsx("li", { children: "• Lessons Learned Process" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Schadensbegrenzung" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Sofortige Systemsperrung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Forensische Untersuchung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Beweissicherung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Stakeholder-Information" }),
                                /* @__PURE__ */ jsx("li", { children: "• Medien-Management" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Wiederherstellung" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• System-Recovery" }),
                                /* @__PURE__ */ jsx("li", { children: "• Datenwiederherstellung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Prozess-Optimierung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Personal-Nachschulung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Vertrauens-Wiederaufbau" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Langfristige Anpassung" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Strukturelle Reformen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Kulturwandel-Programme" }),
                                /* @__PURE__ */ jsx("li", { children: "• Verstärkte Kontrollen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Externe Validierung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Benchmark-Analysen" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Risiko-Monitoring und -Reporting",
                      icon: BarChart3,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Kontinuierliches Monitoring" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Dashboard und KPIs" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-green-100 rounded", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-800", children: "Systemverfügbarkeit" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-green-600", children: "99.8%" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-blue-100 rounded", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-blue-800", children: "Meldungen YTD" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-blue-600", children: "127" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-yellow-100 rounded", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-yellow-800", children: "Ø Bearbeitungszeit" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-yellow-600", children: "18 Tage" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center p-3 bg-red-100 rounded", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-red-800", children: "Offene Risiken" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-red-600", children: "3" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Automatisierte Alerts" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Schwellenwerte:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• >5 Meldungen pro Abteilung/Monat" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Bearbeitungszeit >30 Tage" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Systemausfall >2 Stunden" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Wiederholungsmeldungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Externe Medienmeldungen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Eskalationsstufen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Stufe 1: Team-Lead Information" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Stufe 2: Management-Benachrichtigung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Stufe 3: Board-Eskalation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Stufe 4: Externe Meldepflicht" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Stufe 5: Crisis Management" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-900 mb-4", children: "Periodisches Reporting" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Monatliche Reports" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Meldungsstatistiken" }),
                                /* @__PURE__ */ jsx("li", { children: "• Verfahrensstatus" }),
                                /* @__PURE__ */ jsx("li", { children: "• Risikoindikatoren" }),
                                /* @__PURE__ */ jsx("li", { children: "• Systemperformance" }),
                                /* @__PURE__ */ jsx("li", { children: "• Compliance-Trends" }),
                                /* @__PURE__ */ jsx("li", { children: "• Action Items" })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Quartalsberichte" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Comprehensive Risk Assessment" }),
                                /* @__PURE__ */ jsx("li", { children: "• Trend-Analysen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Benchmark-Vergleiche" }),
                                /* @__PURE__ */ jsx("li", { children: "• Maßnahmen-Wirksamkeit" }),
                                /* @__PURE__ */ jsx("li", { children: "• Stakeholder-Feedback" }),
                                /* @__PURE__ */ jsx("li", { children: "• Improvement Roadmap" })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Jahresberichte" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Strategische Risikobewertung" }),
                                /* @__PURE__ */ jsx("li", { children: "• Gesamtwirksamkeit des Systems" }),
                                /* @__PURE__ */ jsx("li", { children: "• Kulturwandel-Indikatoren" }),
                                /* @__PURE__ */ jsx("li", { children: "• Externe Benchmarks" }),
                                /* @__PURE__ */ jsx("li", { children: "• ROI-Analysen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Strategische Empfehlungen" })
                              ] }) })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(9),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(10);
                          setCurrentSection(11);
                        },
                        className: "bg-gray-600 hover:bg-gray-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 11 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl", children: /* @__PURE__ */ jsx(Activity, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Monitoring" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Überwachung und kontinuierliche Verbesserung" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "System-Monitoring und Performance-Überwachung",
                      icon: Monitor,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-cyan-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-cyan-900 mb-4", children: "Real-Time Monitoring Dashboard" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-cyan-900 mb-3", children: "Technische KPIs" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-cyan-800", children: "Systemverfügbarkeit" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-green-600", children: "99.97%" })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-green-500 h-2 rounded-full", style: { width: "99.97%" } }) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-cyan-800", children: "Response Time (avg)" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-blue-600", children: "1.2s" })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-blue-500 h-2 rounded-full", style: { width: "85%" } }) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-cyan-800", children: "Concurrent Users" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-purple-600", children: "247" })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-purple-500 h-2 rounded-full", style: { width: "65%" } }) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-cyan-800", children: "Data Integrity Score" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-green-600", children: "100%" })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-green-500 h-2 rounded-full", style: { width: "100%" } }) })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-cyan-900 mb-3", children: "Operative KPIs" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-blue-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-700", children: "Meldungsvolumen:" }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-1 text-sm text-blue-600", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Heute:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "3 neue Meldungen" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Diese Woche:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "12 Meldungen" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Dieser Monat:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "47 Meldungen" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "YTD:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "234 Meldungen" })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-green-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-700", children: "Verfahrensstatus:" }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-1 text-sm text-green-600", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "In Bearbeitung:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "18 Fälle" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Pending Review:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "7 Fälle" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Abgeschlossen:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "209 Fälle" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Überfällig:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-600", children: "2 Fälle" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Automatisierte Alerting-Systeme" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Kritische Alerts" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsx("div", { className: "bg-red-100 p-3 rounded-lg border-l-4 border-l-red-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-600 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-red-800", children: "System Downtime >30min" })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-red-100 p-3 rounded-lg border-l-4 border-l-red-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-600 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-red-800", children: "Data Breach Detected" })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-red-100 p-3 rounded-lg border-l-4 border-l-red-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-600 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-red-800", children: "Überfällige Meldung >30 Tage" })
                                ] }) })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Warn-Alerts" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsx("div", { className: "bg-yellow-100 p-3 rounded-lg border-l-4 border-l-yellow-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-600 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-yellow-800", children: "Response Time >3s" })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-yellow-100 p-3 rounded-lg border-l-4 border-l-yellow-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-600 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-yellow-800", children: "Hohe Meldungsfrequenz" })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-yellow-100 p-3 rounded-lg border-l-4 border-l-yellow-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-600 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-yellow-800", children: "Backup Failed" })
                                ] }) })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Info-Alerts" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsx("div", { className: "bg-blue-100 p-3 rounded-lg border-l-4 border-l-blue-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-blue-600 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-blue-800", children: "System Update Completed" })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-blue-100 p-3 rounded-lg border-l-4 border-l-blue-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-blue-600 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-blue-800", children: "Monthly Report Generated" })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-blue-100 p-3 rounded-lg border-l-4 border-l-blue-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-blue-600 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-blue-800", children: "Neue Schulung verfügbar" })
                                ] }) })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Wirksamkeitsmessung und Analytics",
                      icon: BarChart3,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Performance Analytics" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Trend-Analysen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-green-800 mb-2", children: "Meldungsvolumen-Trends" }),
                                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-green-700", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Q1 2024:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "67 Meldungen (+12%)" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Q2 2024:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "73 Meldungen (+9%)" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Q3 2024:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "81 Meldungen (+11%)" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Q4 2024 (Proj.):" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "89 Meldungen (+10%)" })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-green-800 mb-2", children: "Aufklärungsquote" }),
                                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-green-700", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "2023:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "76% aufgeklärt" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "YTD 2024:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "82% aufgeklärt" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Ziel 2024:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "85% aufgeklärt" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Status:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-600", children: "Auf Kurs" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Segmentierung und Kategorisierung" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-green-800 mb-2", children: "Nach Kategorien (YTD)" }),
                                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-green-700", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Arbeitsrecht:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "58 Fälle (25%)" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Korruption:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "47 Fälle (20%)" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Diskriminierung:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "35 Fälle (15%)" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Datenschutz:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "28 Fälle (12%)" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Sonstige:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "66 Fälle (28%)" })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-green-808 mb-2", children: "Nach Schweregrad" }),
                                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-green-700", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Niedrig:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "124 Fälle (53%)" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Mittel:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "87 Fälle (37%)" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Hoch:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "19 Fälle (8%)" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                      /* @__PURE__ */ jsx("span", { children: "Kritisch:" }),
                                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "4 Fälle (2%)" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Predictive Analytics und KI-Insights" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Risikovorhersagen" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-800 space-y-2", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-red-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Erhöhtes Risiko Abteilung Sales (87%)" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-yellow-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Moderate Risikoentwicklung IT (64%)" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-green-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Stabiles Risiko HR (23%)" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-orange-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Neue Hotspots Procurement (78%)" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Pattern Recognition" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-800 space-y-2", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Saisonale Spitzen in Q4 identifiziert" }),
                                /* @__PURE__ */ jsx("li", { children: "• Korrelation zwischen Überstunden und Meldungen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Führungswechsel erhöht Meldungsvolumen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Anonyme Meldungen häufiger substantiiert" }),
                                /* @__PURE__ */ jsx("li", { children: "• Wiederkehrende Themen in bestimmten Teams" })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-3", children: "Empfehlungen" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-800 space-y-2", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Präventive Maßnahmen für Sales-Team" }),
                                /* @__PURE__ */ jsx("li", { children: "• Verstärkte Schulungen im Procurement" }),
                                /* @__PURE__ */ jsx("li", { children: "• Review der Compliance-Prozesse in IT" }),
                                /* @__PURE__ */ jsx("li", { children: "• Frühe Intervention bei Teamwechseln" }),
                                /* @__PURE__ */ jsx("li", { children: "• Anonymität fördern und kommunizieren" })
                              ] }) })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Kontinuierliche Verbesserung",
                      icon: TrendingUp,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-900 mb-4", children: "Improvement Zyklen" }),
                          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-blue-500", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-blue-900 mb-4 flex items-center", children: [
                                /* @__PURE__ */ jsx(RotateCcw, { className: "h-6 w-6 text-blue-600 mr-3" }),
                                "PDCA-Zyklus für kontinuierliche Verbesserung"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-blue-600", children: "P" }) }),
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-blue-900 mb-2", children: "Plan" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Probleme identifizieren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Ziele definieren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Lösungsansätze entwickeln" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Ressourcen planen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-green-600", children: "D" }) }),
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-green-900 mb-2", children: "Do" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Maßnahmen umsetzen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Pilotprojekte durchführen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Daten sammeln" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Progress dokumentieren" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-yellow-600", children: "C" }) }),
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-yellow-900 mb-2", children: "Check" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Ergebnisse messen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Zielerreichung prüfen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Abweichungen analysieren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Lessons Learned" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                  /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-purple-600", children: "A" }) }),
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-purple-900 mb-2", children: "Act" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Standards anpassen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Best Practices implementieren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Prozesse optimieren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Neuen Zyklus starten" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-green-500", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-4", children: "Aktuelle Verbesserungsinitiativen" }),
                              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-green-800 mb-3", children: "Laufende Projekte" }),
                                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-800", children: "KI-gestützte Kategorisierung" }),
                                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-600", children: "75%" })
                                      ] }),
                                      /* @__PURE__ */ jsx("div", { className: "w-full bg-green-200 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-green-500 h-2 rounded-full", style: { width: "75%" } }) })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-800", children: "Mobile App Entwicklung" }),
                                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-600", children: "45%" })
                                      ] }),
                                      /* @__PURE__ */ jsx("div", { className: "w-full bg-green-200 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-green-500 h-2 rounded-full", style: { width: "45%" } }) })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-800", children: "Prozessautomatisierung" }),
                                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-600", children: "90%" })
                                      ] }),
                                      /* @__PURE__ */ jsx("div", { className: "w-full bg-green-200 rounded-full h-2", children: /* @__PURE__ */ jsx("div", { className: "bg-green-500 h-2 rounded-full", style: { width: "90%" } }) })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-green-800 mb-3", children: "Geplante Initiativen" }),
                                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [
                                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "Blockchain-Integration für Transparenz" }),
                                      /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mt-1", children: "Q1 2025" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [
                                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "VR-Training für Investigatoren" }),
                                      /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mt-1", children: "Q2 2025" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [
                                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: "Internationales Benchmark-Programm" }),
                                      /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 mt-1", children: "Q3 2025" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] }) })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Stakeholder Feedback Integration" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Mitarbeiter Feedback" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Quartalsweise Umfragen" }),
                                /* @__PURE__ */ jsx("li", { children: "• Focus Groups" }),
                                /* @__PURE__ */ jsx("li", { children: "• Pulse Surveys" }),
                                /* @__PURE__ */ jsx("li", { children: "• Exit Interviews" }),
                                /* @__PURE__ */ jsx("li", { children: "• Anonyme Suggestion Box" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Management Feedback" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Board Reviews" }),
                                /* @__PURE__ */ jsx("li", { children: "• Führungskräfte-Workshops" }),
                                /* @__PURE__ */ jsx("li", { children: "• 360-Grad-Feedback" }),
                                /* @__PURE__ */ jsx("li", { children: "• Performance Reviews" }),
                                /* @__PURE__ */ jsx("li", { children: "• Strategic Planning Sessions" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Externe Stakeholder" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Aufsichtsbehörden-Dialog" }),
                                /* @__PURE__ */ jsx("li", { children: "• Branchenaustausch" }),
                                /* @__PURE__ */ jsx("li", { children: "• Beratergremien" }),
                                /* @__PURE__ */ jsx("li", { children: "• Akademische Partnerschaften" }),
                                /* @__PURE__ */ jsx("li", { children: "• NGO-Kooperationen" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Systemnutzer" }),
                              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• User Experience Testing" }),
                                /* @__PURE__ */ jsx("li", { children: "• Usability Studies" }),
                                /* @__PURE__ */ jsx("li", { children: "• Feature Requests" }),
                                /* @__PURE__ */ jsx("li", { children: "• Bug Reports" }),
                                /* @__PURE__ */ jsx("li", { children: "• Performance Feedback" })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(10),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(11);
                          setCurrentSection(12);
                        },
                        className: "bg-cyan-600 hover:bg-cyan-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 12 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl", children: /* @__PURE__ */ jsx(CheckCircle, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Compliance" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Einhaltung gesetzlicher Vorgaben und Standards" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Compliance-Management-System",
                      icon: Settings,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-emerald-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-emerald-900 mb-4", children: "Drei-Linien-Modell der Compliance" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-blue-500", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-blue-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3", children: "1" }),
                                "Erste Verteidigungslinie"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Operative Bereiche:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Fachbereiche und Geschäftseinheiten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Frontline Management" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Operatives Personal" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Prozessverantwortliche" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Aufgaben:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Tägliche Compliance-Umsetzung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Erste Risikokontrolle" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Selbstüberwachung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Incident Detection" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-green-500", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-green-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3", children: "2" }),
                                "Zweite Verteidigungslinie"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Compliance & Risk Management:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Compliance Officer" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Risk Manager" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Hinweisgeberstellen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Legal Department" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Aufgaben:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Überwachung der Compliance" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Risikoidentifikation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Richtlinienentwicklung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Monitoring und Reporting" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg border-l-4 border-l-purple-500", children: [
                              /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-purple-900 mb-3 flex items-center", children: [
                                /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3", children: "3" }),
                                "Dritte Verteidigungslinie"
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Interne Revision:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Internal Audit" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Externe Auditoren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Prüfungsausschuss" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Forensic Specialists" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-800", children: "Aufgaben:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-1 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Unabhängige Prüfung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Systemwirksamkeit bewerten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Assurance Services" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Board Reporting" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Compliance-Governance" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Organisationsstruktur" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Aufsichtsrat/Board:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Strategische Oversight" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Compliance-Ziele definieren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Ressourcenallokation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Performance Review" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Whistleblower-Schutz sicherstellen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Geschäftsführung:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Compliance-Kultur schaffen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Tone from the top" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Budget und Ressourcen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Eskalationsempfänger" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Externes Reporting" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Compliance-Komitees" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Executive Compliance Committee:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• C-Level Besetzung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Monatliche Meetings" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Strategische Entscheidungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Budgetverantwortung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Krisenmanagement" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "Operational Compliance Committee:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Fachbereichsleiter" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Wöchentliche Meetings" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Operative Umsetzung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Case Review" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Process Improvement" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Regulatorische Compliance",
                      icon: Gavel,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-900 mb-4", children: "Anwendbare Rechtsvorschriften" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Primäre Compliance-Bereiche" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-red-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-red-700", children: "HinSchG-Compliance:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-red-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Meldestellen einrichten und betreiben" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verfahrensfristen einhalten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Dokumentationspflichten erfüllen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Schulungen durchführen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Repressalienverbot durchsetzen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-blue-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-700", children: "DSGVO-Compliance:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Rechtsgrundlagen dokumentieren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Datenminimierung umsetzen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Betroffenenrechte gewährleisten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Privacy by Design implementieren" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Löschkonzepte etablieren" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 mb-3", children: "Sekundäre Compliance-Bereiche" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-green-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-700", children: "Arbeitsrecht:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Betriebsrat-Mitbestimmung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Personalakten-Führung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Gleichbehandlung sicherstellen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kündigungsschutz beachten" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Arbeitszeit-Compliance" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-purple-500", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-purple-700", children: "Branchenspezifische Regelungen:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-600 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Finanzmarktaufsicht (BaFin)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Medizinprodukte-Verordnung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Lebensmittelsicherheit" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Umweltschutzbestimmungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Kartellrecht" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Compliance-Monitoring und -Testing" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-3", children: "Kontinuierliches Monitoring" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-2", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Automatisierte Compliance-Checks" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Real-time Monitoring Dashboard" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Exception Reporting" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Trend-Analyse" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Predictive Compliance Analytics" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-3", children: "Periodisches Testing" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-800 space-y-2", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-blue-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Quartalsweise Control Tests" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-blue-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Jährliche Compliance Audits" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-blue-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Ad-hoc Vulnerability Assessments" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-blue-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Penetration Testing" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                                  /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-blue-500 mr-2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Regulatory Mock Audits" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-3", children: "Compliance-Metriken" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "Compliance Score" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-bold text-green-600", children: "94%" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "Control Effectiveness" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-bold text-green-600", children: "97%" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "Training Completion" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-bold text-yellow-600", children: "89%" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "Incident Response Time" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-bold text-blue-600", children: "2.3 hrs" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-800", children: "Regulatory Violations" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-bold text-green-600", children: "0" })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Audit und Zertifizierung",
                      icon: Award,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-indigo-900 mb-4", children: "Interne Audits" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-3", children: "Audit-Programm" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-indigo-800", children: "Jährlicher Audit-Plan:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-indigo-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Q1: System Controls & Infrastructure" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Q2: Process Compliance & Documentation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Q3: Training & Awareness Assessment" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Q4: Effectiveness & Risk Assessment" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Ad-hoc: Incident-driven Audits" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-indigo-800", children: "Audit-Methodik:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-indigo-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Risk-based Approach" }),
                                    /* @__PURE__ */ jsx("li", { children: "• COSO Framework Alignment" }),
                                    /* @__PURE__ */ jsx("li", { children: "• ISO 19011 Standards" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Sampling-basierte Tests" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Continuous Auditing Tools" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-indigo-900 mb-3", children: "Audit-Ergebnisse 2024" }),
                              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-indigo-700", children: "Durchgeführte Audits:" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-indigo-900", children: "12" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-indigo-700", children: "Identifizierte Findings:" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-indigo-900", children: "23" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-indigo-700", children: "High-Priority Issues:" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-600", children: "2" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-indigo-700", children: "Medium-Priority Issues:" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-yellow-600", children: "7" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-indigo-700", children: "Low-Priority Issues:" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-600", children: "14" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-indigo-700", children: "Behobene Findings:" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-600", children: "21/23" })
                                ] })
                              ] }) }) })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Externe Zertifizierungen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg text-center", children: [
                              /* @__PURE__ */ jsx(Award, { className: "h-12 w-12 text-green-500 mx-auto mb-3" }),
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "ISO 37002" }),
                              /* @__PURE__ */ jsx("div", { className: "text-sm text-purple-700 mb-2", children: "Whistleblowing Management" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-green-100 text-green-800 text-xs px-2 py-1 rounded", children: "Zertifiziert" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg text-center", children: [
                              /* @__PURE__ */ jsx(Award, { className: "h-12 w-12 text-blue-500 mx-auto mb-3" }),
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "ISO 37001" }),
                              /* @__PURE__ */ jsx("div", { className: "text-sm text-purple-700 mb-2", children: "Anti-Bribery Management" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded", children: "In Vorbereitung" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg text-center", children: [
                              /* @__PURE__ */ jsx(Award, { className: "h-12 w-12 text-purple-500 mx-auto mb-3" }),
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "ISO 19600" }),
                              /* @__PURE__ */ jsx("div", { className: "text-sm text-purple-700 mb-2", children: "Compliance Management" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded", children: "Geplant 2025" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg text-center", children: [
                              /* @__PURE__ */ jsx(Award, { className: "h-12 w-12 text-orange-500 mx-auto mb-3" }),
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "SOC 2 Type II" }),
                              /* @__PURE__ */ jsx("div", { className: "text-sm text-purple-700 mb-2", children: "Security Controls" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-green-100 text-green-800 text-xs px-2 py-1 rounded", children: "Zertifiziert" })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(11),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(12);
                          setCurrentSection(13);
                        },
                        className: "bg-emerald-600 hover:bg-emerald-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 13 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-violet-500 to-violet-600 rounded-xl", children: /* @__PURE__ */ jsx(Settings, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Technische Umsetzung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Digitale Systeme und IT-Infrastruktur" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Systemarchitektur und Komponenten",
                      icon: Server,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-violet-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-violet-900 mb-4", children: "Moderne Meldesystem-Architektur" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-violet-900 mb-3", children: "Frontend-Komponenten" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-violet-800", children: "Webportal:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-violet-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Responsive Design (Desktop/Mobile)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Multi-Language Support (DE/EN/FR/ES)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• WCAG 2.1 AA Accessibility" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Progressive Web App (PWA)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Offline-Funktionalität" })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-3 p-2 bg-violet-100 rounded text-xs text-violet-700", children: "Tech Stack: React, TypeScript, TailwindCSS" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-violet-800", children: "Mobile Apps:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-violet-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Native iOS/Android Apps" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Biometrische Authentifizierung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Push-Benachrichtigungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Secure Local Storage" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Voice Recording Feature" })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-3 p-2 bg-violet-100 rounded text-xs text-violet-700", children: "Tech Stack: React Native, Swift, Kotlin" })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-violet-900 mb-3", children: "Backend-Infrastruktur" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-violet-800", children: "API-Layer:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-violet-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• RESTful API mit GraphQL Gateway" }),
                                    /* @__PURE__ */ jsx("li", { children: "• OAuth 2.0 / SAML 2.0 Integration" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Rate Limiting & DDoS Protection" }),
                                    /* @__PURE__ */ jsx("li", { children: "• API Versioning & Documentation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• WebSocket für Real-time Updates" })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-3 p-2 bg-violet-100 rounded text-xs text-violet-700", children: "Tech Stack: Node.js, Express, Apollo Server" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-violet-800", children: "Microservices:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-violet-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Authentication Service" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Case Management Service" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Notification Service" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Document Processing Service" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Analytics & Reporting Service" })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-3 p-2 bg-violet-100 rounded text-xs text-violet-700", children: "Tech Stack: Docker, Kubernetes, RabbitMQ" })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Sicherheitsarchitektur" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Datenverschlüsselung" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-2", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "In Transit:" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs block text-blue-700", children: "TLS 1.3, HSTS, Certificate Pinning" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "At Rest:" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs block text-blue-700", children: "AES-256-GCM, HSM Integration" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Key Management:" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs block text-blue-700", children: "AWS KMS, Azure Key Vault" })
                                  ] })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Zero-Trust Security" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-2", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Network Segmentation:" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs block text-blue-700", children: "VLANs, DMZ, Micro-Segmentation" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Identity Verification:" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs block text-blue-700", children: "MFA, Continuous Authentication" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Least Privilege:" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs block text-blue-700", children: "RBAC, Dynamic Permissions" })
                                  ] })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-2", children: "Threat Detection" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-800 space-y-2", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "SIEM Integration:" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs block text-blue-700", children: "Splunk, ELK Stack, Datadog" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Anomaly Detection:" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs block text-blue-700", children: "ML-based Pattern Recognition" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Incident Response:" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs block text-blue-700", children: "Automated Playbooks, SOC" })
                                  ] })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Anonymisierung und Datenschutz",
                      icon: Eye,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Technologien zur Anonymisierung" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Anonyme Kommunikationskanäle" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Tor-Integration:" }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-2", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                      /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-green-700", children: "Hidden Service (.onion Address)" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                      /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-green-700", children: "SecureDrop Implementation" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                      /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-green-700", children: "Metadata Stripping" })
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-3 p-2 bg-green-100 rounded", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-green-800", children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Implementierung:" }),
                                    " Tor Browser Bundle, OnionShare, Tails OS"
                                  ] }) })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Proxy-Chains:" }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-2", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                      /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-green-700", children: "Multi-Hop VPN Routing" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                      /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-green-700", children: "Obfuscated Bridges" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                      /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-green-700", children: "Traffic Mixing" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Datenschutztechniken" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Privacy-Enhancing Technologies:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Differential Privacy Algorithms" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Homomorphic Encryption" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Secure Multi-Party Computation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• k-Anonymity Implementation" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Data Masking & Tokenization" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "GDPR-Compliance Features:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Automatisches Recht auf Löschung" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Pseudonymisierung by Design" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Consent Management" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Data Portability API" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Privacy Impact Assessment Tools" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Technische Datenschutzmaßnahmen" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Browser Security" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-3 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-xs text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• WebRTC Leak Protection" }),
                                /* @__PURE__ */ jsx("li", { children: "• Canvas Fingerprinting Block" }),
                                /* @__PURE__ */ jsx("li", { children: "• Third-Party Cookie Block" }),
                                /* @__PURE__ */ jsx("li", { children: "• DNS-over-HTTPS" }),
                                /* @__PURE__ */ jsx("li", { children: "• JavaScript Sandboxing" })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Network Protection" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-3 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-xs text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• IP Address Masking" }),
                                /* @__PURE__ */ jsx("li", { children: "• Traffic Obfuscation" }),
                                /* @__PURE__ */ jsx("li", { children: "• Deep Packet Inspection Defense" }),
                                /* @__PURE__ */ jsx("li", { children: "• Timing Attack Mitigation" }),
                                /* @__PURE__ */ jsx("li", { children: "• Side-Channel Protection" })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Data Minimization" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-3 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-xs text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Automatic Data Expiry" }),
                                /* @__PURE__ */ jsx("li", { children: "• Minimal Logging Policy" }),
                                /* @__PURE__ */ jsx("li", { children: "• Ephemeral Sessions" }),
                                /* @__PURE__ */ jsx("li", { children: "• Zero-Knowledge Architecture" }),
                                /* @__PURE__ */ jsx("li", { children: "• Stateless Design" })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Audit Protection" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-3 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-xs text-yellow-800 space-y-1", children: [
                                /* @__PURE__ */ jsx("li", { children: "• Immutable Audit Logs" }),
                                /* @__PURE__ */ jsx("li", { children: "• Cryptographic Timestamping" }),
                                /* @__PURE__ */ jsx("li", { children: "• Blockchain Integration" }),
                                /* @__PURE__ */ jsx("li", { children: "• Tamper Detection" }),
                                /* @__PURE__ */ jsx("li", { children: "• Forensic Readiness" })
                              ] }) })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Integration und Schnittstellen",
                      icon: Network,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-900 mb-4", children: "Enterprise-Integration" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "HR-System Integration" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Supported Systems:" }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-2 grid grid-cols-2 gap-2", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "text-sm text-orange-700 flex items-center space-x-1", children: [
                                      /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-orange-600" }),
                                      /* @__PURE__ */ jsx("span", { children: "SAP SuccessFactors" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "text-sm text-orange-700 flex items-center space-x-1", children: [
                                      /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-orange-600" }),
                                      /* @__PURE__ */ jsx("span", { children: "Workday HCM" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "text-sm text-orange-700 flex items-center space-x-1", children: [
                                      /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-orange-600" }),
                                      /* @__PURE__ */ jsx("span", { children: "Oracle HCM Cloud" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "text-sm text-orange-700 flex items-center space-x-1", children: [
                                      /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-orange-600" }),
                                      /* @__PURE__ */ jsx("span", { children: "Microsoft Dynamics" })
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-3 text-xs text-orange-700 bg-orange-100 p-2 rounded", children: "Features: Employee Data Sync, Org Chart Import, Role Mapping" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "API Capabilities:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Real-time Employee Status Updates" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Automatic Deprovisioning" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Department Structure Sync" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Manager Hierarchy Import" })
                                  ] })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Compliance Tool Integration" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "GRC Platforms:" }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-2", children: [
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-orange-700", children: "ServiceNow GRC" }),
                                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-800 text-xs", children: "Certified" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-orange-700", children: "SAP GRC" }),
                                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-800 text-xs", children: "Certified" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-orange-700", children: "MetricStream" }),
                                      /* @__PURE__ */ jsx(Badge, { className: "bg-blue-100 text-blue-800 text-xs", children: "Beta" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-orange-700", children: "RSA Archer" }),
                                      /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-100 text-yellow-800 text-xs", children: "Planned" })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Data Exchange:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Bi-directional Case Sync" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Risk Assessment Import" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Compliance Dashboard Feed" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Automated Reporting" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Technische Implementierungsroadmap" }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                            /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-0 bottom-0 w-0.5 bg-purple-300" }),
                            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold", children: "Phase 1" }),
                                /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "Basis-Implementation (Woche 1-4)" }),
                                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Cloud-Infrastruktur Setup" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Basis-Security Implementation" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Core API Development" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Database Schema Design" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Authentication System" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Basic UI/UX Implementation" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Initial Testing Framework" }),
                                      /* @__PURE__ */ jsx("li", { children: "• CI/CD Pipeline Setup" })
                                    ] })
                                  ] })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold", children: "Phase 2" }),
                                /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "Erweiterte Features (Woche 5-8)" }),
                                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Anonymisierungsfunktionen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Case Management System" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Workflow Automation" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Document Management" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Notification Engine" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Reporting Dashboard" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Mobile App Development" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Integration APIs" })
                                    ] })
                                  ] })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-4", children: [
                                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold", children: "Phase 3" }),
                                /* @__PURE__ */ jsxs("div", { className: "flex-1 bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "Go-Live & Optimization (Woche 9-12)" }),
                                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Security Audit & Pen Testing" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Performance Optimization" }),
                                      /* @__PURE__ */ jsx("li", { children: "• User Acceptance Testing" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Documentation Completion" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Training Materials" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Rollout Strategy" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Support Infrastructure" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Monitoring Setup" })
                                    ] })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] }) })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(12),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(13);
                          setCurrentSection(14);
                        },
                        className: "bg-violet-600 hover:bg-violet-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 14 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-rose-500 to-rose-600 rounded-xl", children: /* @__PURE__ */ jsx(Zap, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Implementierung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Praktische Umsetzung in der Organisation" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Projektplanung und Meilensteine",
                      icon: Target,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-rose-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-rose-900 mb-4", children: "12-Wochen Implementierungsplan" }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                                /* @__PURE__ */ jsx("h5", { className: "font-semibold text-rose-900", children: "Gesamtfortschritt" }),
                                /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-rose-600", children: "0%" })
                              ] }),
                              /* @__PURE__ */ jsx(Progress, { value: 0, className: "h-3 bg-rose-100" }),
                              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-4 gap-2 mt-4", children: [
                                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                  /* @__PURE__ */ jsx("div", { className: "text-xs text-rose-600 font-medium", children: "Woche 1-3" }),
                                  /* @__PURE__ */ jsx("div", { className: "text-xs text-rose-500", children: "Vorbereitung" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                  /* @__PURE__ */ jsx("div", { className: "text-xs text-rose-600 font-medium", children: "Woche 4-6" }),
                                  /* @__PURE__ */ jsx("div", { className: "text-xs text-rose-500", children: "Entwicklung" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                  /* @__PURE__ */ jsx("div", { className: "text-xs text-rose-600 font-medium", children: "Woche 7-9" }),
                                  /* @__PURE__ */ jsx("div", { className: "text-xs text-rose-500", children: "Testing" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                                  /* @__PURE__ */ jsx("div", { className: "text-xs text-rose-600 font-medium", children: "Woche 10-12" }),
                                  /* @__PURE__ */ jsx("div", { className: "text-xs text-rose-500", children: "Rollout" })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                /* @__PURE__ */ jsx("h5", { className: "font-semibold text-rose-900 mb-3", children: "Quick Wins (Woche 1-2)" }),
                                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-rose-600" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-sm text-rose-700", children: "Projektteam zusammenstellen" })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-rose-600" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-sm text-rose-700", children: "Ist-Analyse durchführen" })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-rose-600" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-sm text-rose-700", children: "Stakeholder identifizieren" })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-rose-600" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-sm text-rose-700", children: "Budget freigeben" })
                                  ] })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                /* @__PURE__ */ jsx("h5", { className: "font-semibold text-rose-900 mb-3", children: "Kritische Pfade" }),
                                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-sm text-rose-700", children: "Betriebsrat-Zustimmung (4 Wochen)" })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-sm text-rose-700", children: "IT-Security Audit (2 Wochen)" })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-sm text-rose-700", children: "Datenschutz-Freigabe (3 Wochen)" })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-sm text-rose-700", children: "Management-Approval (1 Woche)" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Change Management Strategie" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Kommunikationsplan" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Woche 1-2:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700 mt-1", children: "Management Briefing, Führungskräfte-Workshop" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Woche 3-4:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700 mt-1", children: "All-Hands Meeting, Intranet-Kampagne" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Woche 5-8:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700 mt-1", children: "Abteilungsschulungen, Q&A Sessions" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Woche 9-12:" }),
                                  /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700 mt-1", children: "Go-Live Events, Success Stories" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Widerstände überwinden" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Führungsebene:" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700", children: "Business Case, ROI-Analyse" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Mitarbeiter:" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700", children: "Anonymitätsgarantie, Schutz" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Betriebsrat:" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700", children: "Mitbestimmung, Transparenz" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "IT-Abteilung:" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700", children: "Standards, Integration" })
                                  ] })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Erfolgsmessung" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Adoptionsrate:" }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center space-x-2", children: [
                                    /* @__PURE__ */ jsx(Progress, { value: 0, className: "flex-1 h-2" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-700", children: "Ziel: 80%" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Meldungsqualität:" }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center space-x-2", children: [
                                    /* @__PURE__ */ jsx(Progress, { value: 0, className: "flex-1 h-2" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-700", children: "Ziel: 70%" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Bearbeitungszeit:" }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center space-x-2", children: [
                                    /* @__PURE__ */ jsx(Progress, { value: 0, className: "flex-1 h-2" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-700", children: "Ziel: <20 Tage" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-blue-800 text-sm", children: "Mitarbeiterzufriedenheit:" }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center space-x-2", children: [
                                    /* @__PURE__ */ jsx(Progress, { value: 0, className: "flex-1 h-2" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-700", children: "Ziel: 4.0/5.0" })
                                  ] })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Pilot-Phase und Testing",
                      icon: FlaskConical,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "Pilot-Programm Design" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Pilot-Gruppen Auswahl" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Phase 1: Early Adopters (50 Personen)" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Compliance-Team (10 Personen)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• HR-Abteilung (15 Personen)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• IT-Security (10 Personen)" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Freiwillige Führungskräfte (15 Personen)" })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs text-green-600 bg-green-100 p-2 rounded", children: "Start: Woche 7 | Dauer: 2 Wochen" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Phase 2: Erweiterter Pilot (500 Personen)" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• Ausgewählte Abteilungen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Verschiedene Standorte" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Unterschiedliche Hierarchieebenen" }),
                                    /* @__PURE__ */ jsx("li", { children: "• Internationale Teams" })
                                  ] }),
                                  /* @__PURE__ */ jsx("div", { className: "mt-2 text-xs text-green-600 bg-green-100 p-2 rounded", children: "Start: Woche 9 | Dauer: 3 Wochen" })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Testing-Szenarien" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Funktionale Tests:" }),
                                  /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-2", children: [
                                    /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-green-600" }),
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-green-700", children: "Anonyme Meldung erstellen" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-green-600" }),
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-green-700", children: "Dokumente hochladen" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-green-600" }),
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-green-700", children: "Status-Updates empfangen" })
                                    ] }),
                                    /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                      /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-green-600" }),
                                      /* @__PURE__ */ jsx("span", { className: "text-sm text-green-700", children: "Rückfragen beantworten" })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Last- und Performance-Tests:" }),
                                  /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                    /* @__PURE__ */ jsx("li", { children: "• 1.000 gleichzeitige Nutzer" }),
                                    /* @__PURE__ */ jsx("li", { children: "• 10.000 Meldungen/Monat" }),
                                    /* @__PURE__ */ jsx("li", { children: "• 100 GB Dokumenten-Upload" }),
                                    /* @__PURE__ */ jsx("li", { children: "• 24/7 Verfügbarkeit" })
                                  ] })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Feedback-Sammlung und Optimierung" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Quantitative Metriken" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-yellow-700", children: "System-Uptime" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "99.9%" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 99.9, className: "h-2" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-yellow-700", children: "Response Time" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "< 2s" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 85, className: "h-2" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-yellow-700", children: "Error Rate" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "0.1%" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 99.9, className: "h-2" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Qualitative Insights" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-yellow-700 space-y-2", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4 text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "User Interviews (n=25)" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Usability Testing Sessions" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Focus Groups (4 Gruppen)" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4 text-yellow-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Net Promoter Score: 72" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-2", children: "Optimierungen" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-700", children: "UI/UX Verbesserungen" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-yellow-500 rounded-full" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-700", children: "Performance-Tuning" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-green-500 rounded-full" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-700", children: "Feature-Erweiterungen" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-blue-500 rounded-full" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-700", children: "Prozess-Anpassungen" })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Rollout und Go-Live",
                      icon: Rocket,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Go-Live Checkliste" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "Technische Readiness" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-3 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Produktion deployed" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Monitoring aktiv" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Backup getestet" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Security-Audit passed" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Failover getestet" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "Organisatorisch" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-3 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Team geschult" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Prozesse definiert" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Eskalation klar" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Support bereit" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "FAQ erstellt" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "Kommunikation" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-3 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Ankündigung versendet" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Intranet aktualisiert" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Poster aufgehängt" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Videos online" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Hotline aktiv" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "Rechtlich" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-3 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Datenschutz geprüft" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Betriebsvereinbarung" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Compliance bestätigt" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Verträge unterzeichnet" })
                                ] }),
                                /* @__PURE__ */ jsxs("label", { className: "flex items-center space-x-2", children: [
                                  /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded text-purple-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-700", children: "Versicherung aktiv" })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-900 mb-4", children: "Launch-Aktivitäten" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Go-Live Event (Tag 1)" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 text-orange-600 font-bold", children: "09:00" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "System-Aktivierung" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700", children: "Technisches Go-Live, Monitoring Start" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 text-orange-600 font-bold", children: "10:00" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "CEO Announcement" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700", children: "Videobotschaft, E-Mail an alle" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 text-orange-600 font-bold", children: "11:00" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Live-Demos" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700", children: "Stündliche Vorführungen" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 text-orange-600 font-bold", children: "14:00" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-orange-800", children: "Q&A Sessions" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700", children: "Offene Fragerunden" })
                                  ] })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-900 mb-3", children: "Erste Woche Support" }),
                              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg", children: [
                                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-orange-800 text-sm", children: "War Room Team" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-xs text-orange-700 mt-2 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• 24/7 Bereitschaft" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Incident Management" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Quick Fixes" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Status Updates" })
                                    ] })
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-orange-800 text-sm", children: "User Support" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-xs text-orange-700 mt-2 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Dedicated Hotline" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Floor Walker" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Chat Support" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Video Tutorials" })
                                    ] })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "mt-4 p-3 bg-orange-100 rounded", children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-orange-800", children: "Support-Tickets" }),
                                    /* @__PURE__ */ jsx("span", { className: "text-lg font-bold text-orange-600", children: "0" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 0, className: "mt-2 h-2" })
                                ] })
                              ] })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(13),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(14);
                          setCurrentSection(15);
                        },
                        className: "bg-rose-600 hover:bg-rose-700",
                        children: [
                          "Nächster Abschnitt",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            ),
            currentSection === 15 && /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: [
                  /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-lime-500 to-lime-600 rounded-xl", children: /* @__PURE__ */ jsx(TrendingUp, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-900", children: "Continuous Improvement" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600", children: "Kontinuierliche Weiterentwicklung und Optimierung" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Leistungsmessung und KPIs",
                      icon: BarChart3,
                      defaultExpanded: true,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-lime-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-lime-900 mb-4", children: "Key Performance Indicators Dashboard" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-2 border-lime-200", children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-lime-700", children: "Meldungen/Monat" }),
                                /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-green-500" })
                              ] }),
                              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-lime-900", children: "127" }),
                              /* @__PURE__ */ jsx("div", { className: "text-xs text-lime-600 mt-1", children: "+23% vs. Vormonat" }),
                              /* @__PURE__ */ jsx(Progress, { value: 75, className: "mt-2 h-1" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-2 border-lime-200", children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-lime-700", children: "Ø Bearbeitungszeit" }),
                                /* @__PURE__ */ jsx(TrendingDown, { className: "h-4 w-4 text-red-500" })
                              ] }),
                              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-lime-900", children: "18 Tage" }),
                              /* @__PURE__ */ jsx("div", { className: "text-xs text-lime-600 mt-1", children: "-5 Tage vs. Q1" }),
                              /* @__PURE__ */ jsx(Progress, { value: 82, className: "mt-2 h-1" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-2 border-lime-200", children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-lime-700", children: "Substantiierungsrate" }),
                                /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4 text-yellow-500" })
                              ] }),
                              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-lime-900", children: "67%" }),
                              /* @__PURE__ */ jsx("div", { className: "text-xs text-lime-600 mt-1", children: "Stabil" }),
                              /* @__PURE__ */ jsx(Progress, { value: 67, className: "mt-2 h-1" })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border-2 border-lime-200", children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-lime-700", children: "Anonyme Meldungen" }),
                                /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-green-500" })
                              ] }),
                              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-lime-900", children: "43%" }),
                              /* @__PURE__ */ jsx("div", { className: "text-xs text-lime-600 mt-1", children: "+8% vs. Vorjahr" }),
                              /* @__PURE__ */ jsx(Progress, { value: 43, className: "mt-2 h-1" })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-900 mb-4", children: "Detaillierte Metriken" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Prozess-Metriken" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-blue-700", children: "Erstbestätigung < 7 Tage" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "98%" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 98, className: "h-2" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-blue-700", children: "Abschluss < 3 Monate" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "89%" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 89, className: "h-2" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-blue-700", children: "Eskalationsrate" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "12%" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 12, className: "h-2" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-blue-700", children: "Wiederöffnungsrate" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "3%" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 3, className: "h-2" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Qualitäts-Metriken" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-blue-700", children: "Meldungsqualität" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Gut" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 84, className: "h-2" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-blue-700", children: "Untersuchungstiefe" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Sehr gut" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 90, className: "h-2" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-blue-700", children: "Dokumentation" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Sehr gut" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 94, className: "h-2" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-blue-700", children: "Nachvollziehbarkeit" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Exzellent" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 96, className: "h-2" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 mb-3", children: "Impact-Metriken" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-blue-700", children: "Präventionswirkung" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Hoch" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 78, className: "h-2" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-blue-700", children: "Schadensabwendung" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "2.3M€" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 85, className: "h-2" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-blue-700", children: "Kulturverbesserung" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "+15%" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 75, className: "h-2" })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-1", children: [
                                    /* @__PURE__ */ jsx("span", { className: "text-blue-700", children: "Compliance Score" }),
                                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "92/100" })
                                  ] }),
                                  /* @__PURE__ */ jsx(Progress, { value: 92, className: "h-2" })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Feedback-Loops und Verbesserungsprozesse",
                      icon: RefreshCw,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-900 mb-4", children: "360° Feedback-System" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Feedback-Quellen" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Hinweisgeber-Feedback" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Post-Case Surveys (Response: 73%)" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Anonyme Bewertungen" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Verbesserungsvorschläge" }),
                                      /* @__PURE__ */ jsx("li", { children: "• User Experience Ratings" })
                                    ] })
                                  ] })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(Building, { className: "h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Stakeholder-Input" }),
                                    /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                                      /* @__PURE__ */ jsx("li", { children: "• Management Reviews (Quartalsweise)" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Betriebsrat-Feedback" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Compliance Committee Input" }),
                                      /* @__PURE__ */ jsx("li", { children: "• Externe Auditoren" })
                                    ] })
                                  ] })
                                ] }) })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-900 mb-3", children: "Verbesserungsprozess" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "1" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Sammlung & Analyse" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Monatliche Auswertung aller Feedback-Kanäle" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "2" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Priorisierung" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Impact-Effort-Matrix, ROI-Bewertung" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "3" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Implementation" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "Agile Sprints, Quick Wins, Major Updates" })
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "4" }),
                                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-green-800", children: "Validierung" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: "A/B Testing, Pilot Groups, Erfolgsmonitoring" })
                                  ] })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-purple-900 mb-4", children: "Innovation und Zukunftstrends" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "KI & Automation" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 space-y-2", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Brain, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "NLP für Meldungsanalyse" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Brain, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Anomalie-Erkennung" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Brain, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Predictive Analytics" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Brain, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Chatbot-Integration" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "Blockchain" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 space-y-2", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Link2, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Unveränderbare Logs" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Link2, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Smart Contracts" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Link2, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Dezentrale Identität" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Link2, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Cross-Org Sharing" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "Advanced Analytics" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 space-y-2", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Pattern Recognition" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Risk Scoring" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Network Analysis" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Sentiment Analysis" })
                                ] })
                              ] }) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-900 mb-2", children: "UX Innovation" }),
                              /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg", children: /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 space-y-2", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Smartphone, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Voice Reporting" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Smartphone, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "AR/VR Training" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Smartphone, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Gesture Control" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                                  /* @__PURE__ */ jsx(Smartphone, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                                  /* @__PURE__ */ jsx("span", { children: "Biometric Auth" })
                                ] })
                              ] }) })
                            ] })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    ExpandableSection,
                    {
                      title: "Best Practices und Lessons Learned",
                      icon: Award,
                      children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-6 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-yellow-900 mb-4", children: "Erfolgsgeschichten und Learnings" }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-3", children: "Top 5 Erfolgsfaktoren" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-green-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 text-green-600 font-bold", children: "#1" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Leadership Commitment" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 mt-1", children: "CEO persönlich involviert, regelmäßige Board-Updates, null Toleranz für Repressalien" })
                                  ] })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-green-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 text-green-600 font-bold", children: "#2" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Einfachheit & Zugänglichkeit" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 mt-1", children: "3-Klick-Meldung, Mobile-First, Mehrsprachigkeit, 24/7 Verfügbarkeit" })
                                  ] })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-green-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 text-green-600 font-bold", children: "#3" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Schnelle Reaktionszeiten" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 mt-1", children: "7-Tage-Bestätigung zu 100% eingehalten, durchschnittlich 18 Tage Bearbeitungszeit" })
                                  ] })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-green-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 text-green-600 font-bold", children: "#4" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Transparente Kommunikation" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 mt-1", children: "Regelmäßige Updates, Success Stories teilen, offene Fehlerkultur" })
                                  ] })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-green-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 text-green-600 font-bold", children: "#5" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Kontinuierliche Verbesserung" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 mt-1", children: "Monatliche Reviews, User Feedback Integration, agile Weiterentwicklung" })
                                  ] })
                                ] }) })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 mb-3", children: "Vermeidbare Fehler" }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-red-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(X, { className: "h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Technologie-Fokus" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 mt-1", children: "Beste Software hilft nicht ohne Kulturwandel und Vertrauensbildung" })
                                  ] })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-red-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(X, { className: "h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Unzureichende Ressourcen" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 mt-1", children: "Unterdimensioniertes Team führt zu Verzögerungen und Vertrauensverlust" })
                                  ] })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-red-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(X, { className: "h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Fehlende Nachverfolgung" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 mt-1", children: "Meldungen versanden ohne konsequente Bearbeitung und Feedback" })
                                  ] })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-red-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(X, { className: "h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Komplexe Prozesse" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 mt-1", children: "Überregulierung schreckt potenzielle Hinweisgeber ab" })
                                  ] })
                                ] }) }),
                                /* @__PURE__ */ jsx("div", { className: "bg-white p-4 rounded-lg border-l-4 border-l-red-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx(X, { className: "h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" }),
                                  /* @__PURE__ */ jsxs("div", { children: [
                                    /* @__PURE__ */ jsx("strong", { className: "text-yellow-800", children: "Isolation des Systems" }),
                                    /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 mt-1", children: "Fehlende Integration in bestehende Compliance-Strukturen" })
                                  ] })
                                ] }) })
                              ] })
                            ] })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-lg", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-gray-900 mb-6 text-center", children: "Abschluss und Ausblick" }),
                          /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto space-y-6", children: [
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg", children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
                                /* @__PURE__ */ jsx(CheckCircle, { className: "h-8 w-8 text-green-500" }),
                                /* @__PURE__ */ jsx("h5", { className: "text-xl font-semibold text-gray-900", children: "Erfolgreiche HinSchG-Implementation" })
                              ] }),
                              /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Mit diesem umfassenden Guide haben Sie alle notwendigen Informationen und Werkzeuge zur erfolgreichen Implementierung des Hinweisgeberschutzgesetzes. Von den rechtlichen Grundlagen über die technische Umsetzung bis hin zur kontinuierlichen Verbesserung - Sie sind bestens vorbereitet." })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-lg shadow-lg", children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-4 mb-4", children: [
                                /* @__PURE__ */ jsx(Target, { className: "h-8 w-8 text-blue-500" }),
                                /* @__PURE__ */ jsx("h5", { className: "text-xl font-semibold text-gray-900", children: "Ihre nächsten Schritte" })
                              ] }),
                              /* @__PURE__ */ jsxs("ol", { className: "space-y-3 text-gray-700", children: [
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "1" }),
                                  /* @__PURE__ */ jsx("span", { children: "Führen Sie eine Ist-Analyse Ihrer aktuellen Compliance-Strukturen durch" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "2" }),
                                  /* @__PURE__ */ jsx("span", { children: "Bilden Sie ein interdisziplinäres Projektteam" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "3" }),
                                  /* @__PURE__ */ jsx("span", { children: "Erstellen Sie einen detaillierten Implementierungsplan" })
                                ] }),
                                /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-3", children: [
                                  /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold", children: "4" }),
                                  /* @__PURE__ */ jsx("span", { children: "Beginnen Sie mit Quick Wins für schnelle Erfolge" })
                                ] })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "text-center pt-6", children: /* @__PURE__ */ jsxs(
                              Button,
                              {
                                size: "lg",
                                className: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg",
                                children: [
                                  /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                                  "Kompletten Guide als PDF herunterladen"
                                ]
                              }
                            ) })
                          ] })
                        ] })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center pt-8 border-t", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        variant: "outline",
                        onClick: () => setCurrentSection(14),
                        children: [
                          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                          "Vorheriger Abschnitt"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => {
                          markSectionComplete(15);
                          alert("Herzlichen Glückwunsch! Sie haben den kompletten HinSchG-Guide durchgearbeitet.");
                        },
                        className: "bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white",
                        children: [
                          "Guide abschließen",
                          /* @__PURE__ */ jsx(CheckCircle, { className: "ml-2 h-4 w-4" })
                        ]
                      }
                    )
                  ] })
                ]
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  HinweisgeberschutzgesetzGuide as default
};
