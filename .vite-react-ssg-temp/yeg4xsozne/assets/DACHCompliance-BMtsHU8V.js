import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { C as Card } from "./card-OzTRm1Ua.js";
import { u as useLanguage } from "./useLanguage-BAIZ-FA5.js";
import { Shield, Building2, Clock, Activity, Sparkles, Play, ArrowRight, Brain, Globe, Award, CheckCircle2, MapPin, Target, ExternalLink, Scale, FileCheck, Flag, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import { motion } from "framer-motion";
import CountUp from "react-countup";
const HeroSection = () => {
  const { t } = useLanguage();
  const [activeMetric, setActiveMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const metrics = [
    { value: "Standards", label: "Compliance Ziel", icon: Shield, color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-500/30", suffix: "", isGoal: true, isNumeric: false },
    { value: "DACH", label: "Zielgruppe", icon: Building2, color: "text-blue-400", bgColor: "bg-blue-500/20", borderColor: "border-blue-500/30", suffix: "", isGoal: true, isNumeric: false },
    { value: "Auto", label: "Einsparziel", icon: Clock, color: "text-brand-red", bgColor: "bg-brand-red/20", borderColor: "border-brand-red/30", suffix: "", isGoal: true, isNumeric: false },
    { value: "Beta", label: "Verfügbarkeitsziel", icon: Activity, color: "text-purple-400", bgColor: "bg-purple-500/20", borderColor: "border-purple-500/30", suffix: "", isGoal: true, isNumeric: false }
  ];
  const features = [
    { icon: Brain, title: "KI-gestützte Analyse", desc: "Automatische Compliance-Bewertung", badge: "Beta" },
    { icon: Shield, title: "DSGVO Ready", desc: "EU-konform nach aktuellen Standards", badge: "Ready" },
    { icon: Globe, title: "Multi-Regional", desc: "DACH & EU-weit", badge: "Roadmap" },
    { icon: Award, title: "ISO 27001 Ready", desc: "Zertifizierung in Planung", badge: "Q3 2025" }
  ];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveMetric((prev) => (prev + 1) % metrics.length);
      }, 3e3);
      return () => clearInterval(interval);
    }
  }, [isVisible, metrics.length]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: heroRef,
      className: "relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/30 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-red/15 to-orange-500/15 rounded-full blur-3xl animate-pulse", style: { animationDelay: "4s" } }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 py-16 lg:py-24", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: cn(
            "space-y-8 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          ), children: [
            /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxs(Badge, { className: "bg-brand-red/20 text-brand-red border-brand-red/30 px-4 py-2 text-sm font-medium backdrop-blur-sm", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 mr-2" }),
                "KI-native Compliance Platform"
              ] }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-orange-500/20 text-orange-400 border-orange-500/30 px-3 py-2 text-xs font-medium backdrop-blur-sm", children: "Beta Preview" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight", children: [
                "Compliance",
                " ",
                /* @__PURE__ */ jsxs("span", { className: "relative", children: [
                  /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-brand-red to-orange-500 bg-clip-text text-transparent", children: "Revolutioniert" }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-2 -right-2 lg:-top-3 lg:-right-3", children: /* @__PURE__ */ jsx(Sparkles, { className: "h-6 w-6 lg:h-8 lg:w-8 text-brand-red animate-pulse" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed", children: "Die erste KI-native Compliance-Plattform für das digitale Zeitalter. Automatisieren Sie Ihre Compliance-Prozesse mit modernster Technologie." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
              /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true", children: /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  className: "bg-gradient-to-r from-brand-red to-brand-red/90 hover:from-brand-red/90 hover:to-brand-red/80 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 transform relative overflow-hidden",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
                    /* @__PURE__ */ jsx(Play, { className: "mr-2 h-5 w-5 relative z-10" }),
                    /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Kostenlose Demo" }),
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(Link, { to: "/pricing", children: /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "px-8 py-4 text-lg border-2 border-gray-600 text-gray-300 hover:bg-brand-red/10 hover:border-brand-red/50 hover:text-white transition-all duration-300 group hover:scale-105 transform relative overflow-hidden",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-brand-red/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
                    /* @__PURE__ */ jsx("span", { className: "relative z-10", children: "Preise ansehen" })
                  ]
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4 pt-8", children: features.map((feature, index) => {
              const Icon = feature.icon;
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: cn(
                    "flex items-start space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-brand-red/30 transition-all duration-500 hover:bg-white/20 hover:shadow-lg hover:border-brand-red/50 hover-lift group",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  ),
                  style: {
                    transitionDelay: `${(index + 2) * 150}ms`
                  },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 p-2 rounded-lg bg-brand-red/30 group-hover:bg-brand-red/40 transition-colors duration-300", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-brand-red group-hover:text-white transition-colors duration-300" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                        /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white text-sm group-hover:text-orange-100 transition-colors duration-300", children: feature.title }),
                        feature.badge && /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs px-1 py-0", children: feature.badge })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-xs group-hover:text-gray-200 transition-colors duration-300", children: feature.desc })
                    ] })
                  ]
                },
                feature.title
              );
            }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: cn(
            "space-y-6 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          ), style: { transitionDelay: "300ms" }, children: [
            /* @__PURE__ */ jsx(Card, { className: "p-6 bg-slate-900/60 backdrop-blur-sm border-blue-500/20 shadow-2xl", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white", children: "Demo Dashboard" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300", children: "Zukünftige Compliance Metriken" })
                ] }),
                /* @__PURE__ */ jsxs(Badge, { className: "bg-orange-500/20 text-orange-400 border-orange-500/30", children: [
                  /* @__PURE__ */ jsx(Activity, { className: "w-3 h-3 mr-1" }),
                  "Preview"
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: metrics.map((metric, index) => {
                const Icon = metric.icon;
                const isActive = activeMetric === index;
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: cn(
                      "p-4 rounded-lg border-2 transition-all duration-500 cursor-pointer",
                      isActive ? `${metric.bgColor} ${metric.borderColor} shadow-lg scale-105` : "bg-slate-800/40 border-blue-500/20 hover:bg-slate-800/60"
                    ),
                    onClick: () => setActiveMetric(index),
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsx(Icon, { className: cn("h-5 w-5", isActive ? metric.color : "text-gray-400") }),
                        metric.label === "Compliance Ziel" && /* @__PURE__ */ jsx("span", { className: "text-xs text-orange-400 font-medium", children: "Roadmap" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-white", children: metric.value }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-400", children: metric.label }),
                          metric.isGoal && /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs px-1 py-0", children: "Ziel" })
                        ] })
                      ] })
                    ]
                  },
                  metric.label
                );
              }) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-gray-400", children: "Compliance Ziel" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-white", children: "In Entwicklung" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs px-1 py-0", children: "Vision" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-700/50 rounded-full h-2", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "bg-gradient-to-r from-emerald-500 to-green-600 h-2 rounded-full transition-all duration-2000 ease-out",
                    style: {
                      width: isVisible ? "25%" : "0%",
                      transitionDelay: "1s"
                    }
                  }
                ) })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-slate-800/40 backdrop-blur-sm border-blue-500/20 text-center relative", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-6 w-6 text-green-400 mx-auto mb-2" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-white", children: "DSGVO" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-300", children: "Standards-konform" }),
                /* @__PURE__ */ jsx(Badge, { className: "absolute -top-1 -right-1 bg-green-500/20 text-green-400 border-green-500/30 text-xs px-1 py-0", children: "Ready" })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-slate-800/40 backdrop-blur-sm border-blue-500/20 text-center relative", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-orange-400 mx-auto mb-2" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-white", children: "ISO 27001" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-300", children: "In Vorbereitung" }),
                /* @__PURE__ */ jsx(Badge, { className: "absolute -top-1 -right-1 bg-orange-500/20 text-orange-400 border-orange-500/30 text-xs px-1 py-0", children: "Q3 2025" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-300 mb-2", children: [
                "Entwickelt für ",
                /* @__PURE__ */ jsx("strong", { className: "text-white", children: "EU-Unternehmen" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center space-x-2", children: [
                /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs px-2 py-1", children: "Beta-Programm" }),
                /* @__PURE__ */ jsx("div", { className: "flex space-x-1", children: [...Array(3)].map((_, i) => /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse", style: { animationDelay: `${i * 0.3}s` } }, i)) })
              ] })
            ] })
          ] })
        ] }) })
      ]
    }
  );
};
const dachCountries = [
  {
    id: "deutschland",
    country: "Deutschland",
    flag: "🇩🇪",
    laws: ["DSGVO", "BDSG", "GeschGehG", "BSI-Gesetz", "HinSchG", "TTDSG"],
    specialties: ["Betriebsrat-Mitbestimmung", "Bundesdatenschutzgesetz", "IT-Sicherheitsgesetz"],
    coverage: "100% deutsche Rechtsprechung",
    recentUpdates: "TTDSG-Novelle verschärft Cookie-Einwilligungen - Unternehmen müssen bis März 2025 compliant sein",
    updateSource: "Bundesnetzagentur",
    updateUrl: "https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/DE/2024/20241215_TTDSG.html",
    updateDate: "15.12.2024",
    complianceScore: 98,
    color: {
      from: "from-red-500",
      to: "to-yellow-500",
      bg: "bg-red-500/10",
      text: "text-red-600",
      gradient: "from-red-500/20 to-yellow-500/20"
    }
  },
  {
    id: "oesterreich",
    country: "Österreich",
    flag: "🇦🇹",
    laws: ["DSGVO", "DSG", "TKG", "ECG", "MedienG", "GlBG"],
    specialties: ["Österreichisches Datenschutzgesetz", "Telekommunikationsgesetz", "E-Commerce-Gesetz"],
    coverage: "100% österreichische Rechtsprechung",
    recentUpdates: "Österreich verhängt Rekordstrafe von €18M gegen Meta wegen DSGVO-Verstößen bei WhatsApp",
    updateSource: "Österreichische Datenschutzbehörde",
    updateUrl: "https://www.dsb.gv.at/documents/dsb/Pressemitteilungen/Pressemitteilung_DSB_Meta_WhatsApp_2024.pdf",
    updateDate: "22.11.2024",
    complianceScore: 96,
    color: {
      from: "from-red-600",
      to: "to-red-400",
      bg: "bg-red-600/10",
      text: "text-red-700",
      gradient: "from-red-600/20 to-red-400/20"
    }
  },
  {
    id: "schweiz",
    country: "Schweiz",
    flag: "🇨🇭",
    laws: ["nDSG", "FMedG", "FINMAG", "BGÖ", "StGB", "OR"],
    specialties: ["Neues Datenschutzgesetz", "Finanzmarktaufsicht", "Öffentlichkeitsgesetz"],
    coverage: "100% schweizerische Rechtsprechung",
    recentUpdates: "Schweizer Bundesrat beschließt verschärfte Bußgelder für nDSG-Verstöße ab Januar 2025",
    updateSource: "Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)",
    updateUrl: "https://www.edoeb.admin.ch/edoeb/de/home/dokumentation/medienmitteilungen/2024/mm_20241208.html",
    updateDate: "08.12.2024",
    complianceScore: 94,
    color: {
      from: "from-red-500",
      to: "to-white",
      bg: "bg-red-500/10",
      text: "text-red-600",
      gradient: "from-red-500/20 to-slate-300/20"
    }
  }
];
const complianceStats = [
  { label: "DACH-Länder", value: 3, icon: Flag, color: "text-[#e24e1b]" },
  { label: "Gesetze abgedeckt", value: 18, icon: FileCheck, color: "text-blue-500" },
  { label: "Compliance Rate", value: 99, icon: Target, color: "text-emerald-500" },
  { label: "Live Updates", value: 24, suffix: "/7", icon: Activity, color: "text-purple-500" }
];
const DACHCompliance = () => {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [updateTyped, setUpdateTyped] = useState(false);
  const sectionRef = useRef(null);
  const currentCountry = dachCountries[selectedCountry];
  const [currentText, setCurrentText] = useState("");
  const [showSource, setShowSource] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
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
  useEffect(() => {
    if (!isVisible) return;
    setCurrentText("");
    setShowSource(false);
    setTypingComplete(false);
    const text = currentCountry.recentUpdates;
    let index = 0;
    const timer = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setCurrentText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setTypingComplete(true);
          setTimeout(() => setShowSource(true), 300);
        }
      }, 30);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedCountry, isVisible, currentCountry.recentUpdates]);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      ref: sectionRef,
      className: "py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(226,78,27,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05)_0%,transparent_50%),radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.05)_0%,transparent_50%)]" }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#e24e1b]/8 to-red-500/8 rounded-full blur-3xl",
              animate: {
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8]
              },
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl",
              animate: {
                y: [-10, 10, -10],
                scale: [1, 1.1, 1]
              },
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute top-1/4 left-1/4 text-6xl opacity-5",
              animate: {
                y: [-10, 10, -10],
                rotate: [0, 5, -5, 0]
              },
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              },
              children: "🇩🇪"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute top-1/3 right-1/3 text-5xl opacity-5",
              animate: {
                y: [10, -10, 10],
                rotate: [0, -5, 5, 0]
              },
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              },
              children: "🇦🇹"
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "absolute bottom-1/3 left-1/3 text-7xl opacity-5",
              animate: {
                y: [-15, 15, -15],
                scale: [1, 1.1, 1]
              },
              transition: {
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              },
              children: "🇨🇭"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-6", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                className: "inline-flex items-center gap-4 px-8 py-4 rounded-full glassmorphism border border-[#e24e1b]/20",
                initial: { y: 20, opacity: 0 },
                animate: isVisible ? { y: 0, opacity: 1 } : {},
                transition: { duration: 0.6, ease: "easeOut" },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        animate: {
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        },
                        transition: {
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        },
                        children: /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 text-[#e24e1b]" })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "absolute inset-0 bg-[#e24e1b] rounded-full opacity-30",
                        animate: { scale: [1, 1.5, 1] },
                        transition: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent", children: "DACH-Spezialist" }),
                  /* @__PURE__ */ jsx(Badge, { className: "bg-gradient-to-r from-[#e24e1b] to-orange-500 text-white border-0 px-3", children: "Regional" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h2,
              {
                className: "text-5xl md:text-6xl lg:text-7xl font-black leading-tight",
                initial: { y: 30, opacity: 0 },
                animate: isVisible ? { y: 0, opacity: 1 } : {},
                transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "block text-gray-900", children: "DSGVO Compliance für den" }),
                  /* @__PURE__ */ jsx(
                    motion.span,
                    {
                      className: "block bg-gradient-to-r from-[#e24e1b] via-red-500 to-[#e24e1b] bg-clip-text text-transparent",
                      style: {
                        backgroundSize: "300% 300%"
                      },
                      animate: {
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                      },
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      },
                      children: "DACH-Raum"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.p,
              {
                className: "text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed",
                initial: { y: 30, opacity: 0 },
                animate: isVisible ? { y: 0, opacity: 1 } : {},
                transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
                children: [
                  "Maßgeschneiderte Compliance-Lösungen für",
                  /* @__PURE__ */ jsx("span", { className: "font-bold text-gray-900", children: " Deutschland, Österreich und die Schweiz." }),
                  /* @__PURE__ */ jsx("br", {}),
                  "Mit lokalen Rechtsexperten und automatischen Updates zu nationalen Gesetzen."
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "flex justify-center mb-12",
              initial: { y: 30, opacity: 0 },
              animate: isVisible ? { y: 0, opacity: 1 } : {},
              transition: { duration: 0.6, delay: 0.6, ease: "easeOut" },
              children: /* @__PURE__ */ jsx(Card, { className: "p-2 glassmorphism-card border-white/30", children: /* @__PURE__ */ jsx("div", { className: "flex rounded-lg", children: dachCountries.map((country, index) => /* @__PURE__ */ jsxs(
                motion.button,
                {
                  onClick: () => setSelectedCountry(index),
                  className: cn(
                    "flex items-center gap-4 px-8 py-4 rounded-lg transition-all duration-300 text-lg font-semibold relative overflow-hidden",
                    selectedCountry === index ? "bg-gradient-to-r from-[#e24e1b]/10 to-orange-500/10 text-gray-900 shadow-lg scale-105" : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  ),
                  whileHover: { scale: 1.02 },
                  whileTap: { scale: 0.98 },
                  children: [
                    selectedCountry === index && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "absolute inset-0 bg-gradient-to-r from-[#e24e1b]/5 to-orange-500/5 rounded-lg",
                        layoutId: "activeCountry",
                        transition: { type: "spring", bounce: 0.2, duration: 0.6 }
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        className: "text-2xl relative z-10",
                        animate: selectedCountry === index ? { scale: [1, 1.2, 1] } : {},
                        transition: { duration: 0.5 },
                        children: country.flag
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "relative z-10", children: country.country }),
                    selectedCountry === index && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "w-2 h-2 bg-[#e24e1b] rounded-full relative z-10",
                        animate: { scale: [1, 1.5, 1], opacity: [1, 0.5, 1] },
                        transition: { duration: 1, repeat: Infinity }
                      }
                    )
                  ]
                },
                country.id
              )) }) })
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "space-y-4",
                initial: { x: -50, opacity: 0 },
                animate: isVisible ? { x: 0, opacity: 1 } : {},
                transition: { duration: 0.8, delay: 0.8, ease: "easeOut" },
                children: /* @__PURE__ */ jsxs(Card, { className: "p-4 glassmorphism-card border-white/30 relative overflow-hidden group", children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: cn(
                        "absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-500",
                        currentCountry.color.gradient
                      ),
                      animate: {
                        opacity: [0.5, 0.7, 0.5]
                      },
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "relative space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          className: "text-4xl",
                          animate: {
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                          },
                          transition: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          },
                          children: currentCountry.flag
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900", children: currentCountry.country }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Rechtsprechung & Compliance" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        className: "flex items-center justify-between p-3 rounded-lg glassmorphism border border-white/20",
                        whileHover: { scale: 1.02 },
                        transition: { type: "spring", bounce: 0.3 },
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx(
                              motion.div,
                              {
                                animate: { rotate: [0, 360] },
                                transition: { duration: 2, repeat: Infinity, ease: "linear" },
                                children: /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-emerald-500" })
                              }
                            ),
                            /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900 text-sm", children: "Compliance Score" })
                          ] }),
                          /* @__PURE__ */ jsxs(
                            motion.div,
                            {
                              className: "text-2xl font-black text-emerald-500",
                              initial: { scale: 0 },
                              animate: isVisible ? { scale: 1 } : {},
                              transition: { delay: 1, type: "spring", bounce: 0.5 },
                              children: [
                                isVisible && /* @__PURE__ */ jsx(CountUp, { end: currentCountry.complianceScore, duration: 2 }),
                                "%"
                              ]
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "p-3 rounded-lg bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20",
                        whileHover: { scale: 1.02 },
                        transition: { type: "spring", bounce: 0.3 },
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(
                            motion.div,
                            {
                              animate: {
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360]
                              },
                              transition: {
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                              },
                              children: /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-emerald-600" })
                            }
                          ),
                          /* @__PURE__ */ jsx("span", { className: "font-semibold text-emerald-800 text-sm", children: currentCountry.coverage })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          className: "p-4 rounded-lg bg-white border border-gray-300 shadow-sm relative overflow-hidden",
                          whileHover: { scale: 1.02 },
                          transition: { type: "spring", bounce: 0.3 },
                          style: {
                            fontFamily: '"Courier New", "Liberation Mono", "Consolas", monospace'
                          },
                          children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b border-gray-200 pb-2", children: [
                              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                                /* @__PURE__ */ jsx(
                                  motion.div,
                                  {
                                    animate: {
                                      scale: [1, 1.3, 1],
                                      opacity: [1, 0.5, 1]
                                    },
                                    transition: {
                                      duration: 1.5,
                                      repeat: Infinity,
                                      ease: "easeInOut"
                                    },
                                    children: /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-blue-500" })
                                  }
                                ),
                                /* @__PURE__ */ jsx("span", { className: "font-bold text-gray-900 uppercase tracking-wide text-sm", children: "Aktuelle Updates" })
                              ] }),
                              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 font-mono", children: currentCountry.updateDate })
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "min-h-[3rem] flex items-start", children: /* @__PURE__ */ jsxs("div", { className: "text-sm text-black leading-relaxed font-mono", children: [
                              currentText,
                              !typingComplete && /* @__PURE__ */ jsx(
                                motion.span,
                                {
                                  className: "inline-block w-0.5 h-4 bg-black ml-1",
                                  animate: { opacity: [1, 0] },
                                  transition: { duration: 0.8, repeat: Infinity }
                                }
                              )
                            ] }) })
                          ] })
                        }
                      ),
                      showSource && /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.5 },
                          children: /* @__PURE__ */ jsxs(
                            "a",
                            {
                              href: currentCountry.updateUrl,
                              target: "_blank",
                              rel: "noopener noreferrer",
                              className: "flex items-center gap-2 text-xs text-blue-700 hover:text-blue-900 transition-colors font-mono underline",
                              children: [
                                /* @__PURE__ */ jsxs("span", { children: [
                                  "Quelle: ",
                                  currentCountry.updateSource
                                ] }),
                                /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3" })
                              ]
                            }
                          )
                        }
                      )
                    ] })
                  ] })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "space-y-4",
                initial: { x: 50, opacity: 0 },
                animate: isVisible ? { x: 0, opacity: 1 } : {},
                transition: { duration: 0.8, delay: 1, ease: "easeOut" },
                children: /* @__PURE__ */ jsx(Card, { className: "p-4 glassmorphism-card border-white/30", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "p-2 rounded-lg bg-gradient-to-br from-[#e24e1b] to-orange-500 text-white",
                        whileHover: {
                          scale: 1.1,
                          rotate: [0, -10, 10, 0]
                        },
                        transition: { duration: 0.3 },
                        children: /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4" })
                      }
                    ),
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-gray-900", children: "Relevante Gesetze & Vorschriften" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-3 gap-2", children: currentCountry.laws.map((law, index) => /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "group p-3 rounded-lg glassmorphism border border-white/20 hover:border-[#e24e1b]/30 cursor-pointer",
                      whileHover: {
                        scale: 1.05,
                        y: -2
                      },
                      initial: { opacity: 0, y: 20 },
                      animate: isVisible ? { opacity: 1, y: 0 } : {},
                      transition: {
                        duration: 0.5,
                        delay: 1.2 + index * 0.1,
                        type: "spring",
                        bounce: 0.3
                      },
                      children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "p-1 rounded bg-gradient-to-br from-gray-100 to-gray-50 group-hover:from-[#e24e1b]/10 group-hover:to-orange-500/10 transition-all duration-300",
                            whileHover: { rotate: 360 },
                            transition: { duration: 0.5 },
                            children: /* @__PURE__ */ jsx(FileCheck, { className: "h-3 w-3 text-gray-600 group-hover:text-[#e24e1b] transition-colors" })
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900 text-sm", children: law })
                      ] })
                    },
                    index
                  )) }),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "pt-4 border-t border-gray-200/50",
                      initial: { opacity: 0 },
                      animate: isVisible ? { opacity: 1 } : {},
                      transition: { duration: 0.6, delay: 1.8 },
                      children: [
                        /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm", children: [
                          /* @__PURE__ */ jsx(
                            motion.div,
                            {
                              animate: {
                                rotate: [0, 180, 360],
                                scale: [1, 1.2, 1]
                              },
                              transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              },
                              children: /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-[#e24e1b]" })
                            }
                          ),
                          "Besonderheiten"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: currentCountry.specialties.map((specialty, index) => /* @__PURE__ */ jsxs(
                          motion.div,
                          {
                            className: "flex items-start gap-2 p-2 rounded glassmorphism border border-white/10",
                            initial: { opacity: 0, x: -20 },
                            animate: isVisible ? { opacity: 1, x: 0 } : {},
                            transition: {
                              duration: 0.5,
                              delay: 2 + index * 0.2,
                              ease: "easeOut"
                            },
                            whileHover: { x: 5 },
                            children: [
                              /* @__PURE__ */ jsx(
                                motion.div,
                                {
                                  className: "w-1.5 h-1.5 rounded-full bg-[#e24e1b] mt-1.5 flex-shrink-0",
                                  animate: {
                                    scale: [1, 1.5, 1],
                                    opacity: [1, 0.5, 1]
                                  },
                                  transition: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.3
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsx("span", { className: "text-gray-700 text-sm", children: specialty })
                            ]
                          },
                          index
                        )) })
                      ]
                    }
                  )
                ] }) })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "mb-16",
              initial: { y: 50, opacity: 0 },
              animate: isVisible ? { y: 0, opacity: 1 } : {},
              transition: { duration: 0.8, delay: 1.4, ease: "easeOut" },
              children: /* @__PURE__ */ jsxs(Card, { className: "p-8 glassmorphism-premium border-white/30 relative overflow-hidden", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute inset-0 bg-gradient-to-r from-[#e24e1b]/5 via-transparent to-red-500/5",
                    animate: {
                      opacity: [0.5, 0.8, 0.5]
                    },
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "text-center mb-12",
                      initial: { y: 20, opacity: 0 },
                      animate: isVisible ? { y: 0, opacity: 1 } : {},
                      transition: { duration: 0.6, delay: 1.6 },
                      children: [
                        /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-4", children: "DACH-Compliance in Zahlen" }),
                        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Vollständige Abdeckung aller relevanten Gesetze und Vorschriften" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: complianceStats.map((stat, index) => {
                    const Icon = stat.icon;
                    const isHovered = hoveredStat === index;
                    return /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        className: "text-center group cursor-pointer",
                        onMouseEnter: () => setHoveredStat(index),
                        onMouseLeave: () => setHoveredStat(null),
                        initial: { y: 30, opacity: 0 },
                        animate: isVisible ? { y: 0, opacity: 1 } : {},
                        transition: {
                          duration: 0.6,
                          delay: 1.8 + index * 0.1,
                          ease: "easeOut"
                        },
                        whileHover: { y: -10 },
                        children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                          /* @__PURE__ */ jsx(
                            motion.div,
                            {
                              className: cn(
                                "inline-flex p-4 rounded-2xl transition-all duration-300",
                                isHovered ? "bg-gradient-to-br from-[#e24e1b]/10 to-orange-500/10 scale-110" : "bg-gradient-to-br from-gray-100 to-gray-50"
                              ),
                              whileHover: {
                                rotate: [0, -10, 10, 0],
                                scale: 1.15
                              },
                              transition: { duration: 0.5 },
                              children: /* @__PURE__ */ jsx(Icon, { className: cn("h-8 w-8 transition-colors duration-300", stat.color) })
                            }
                          ),
                          /* @__PURE__ */ jsx(
                            motion.div,
                            {
                              className: cn("text-5xl font-black transition-all duration-300", stat.color),
                              initial: { scale: 0 },
                              animate: isVisible ? { scale: 1 } : {},
                              transition: {
                                delay: 2 + index * 0.1,
                                type: "spring",
                                bounce: 0.6
                              },
                              children: isVisible && /* @__PURE__ */ jsx(
                                CountUp,
                                {
                                  end: stat.value,
                                  duration: 2.5,
                                  suffix: stat.suffix || (index === 0 ? "" : index === 1 ? "+" : "%")
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-gray-600", children: stat.label })
                        ] })
                      },
                      index
                    );
                  }) })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "text-center",
              initial: { y: 50, opacity: 0 },
              animate: isVisible ? { y: 0, opacity: 1 } : {},
              transition: { duration: 0.8, delay: 2.2, ease: "easeOut" },
              children: /* @__PURE__ */ jsxs(Card, { className: "inline-block p-12 glassmorphism-premium border-white/30 shadow-2xl max-w-4xl relative overflow-hidden group", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute inset-0 bg-gradient-to-r from-[#e24e1b]/5 via-red-500/5 to-[#e24e1b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    animate: {
                      opacity: [0, 0.5, 0]
                    },
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "relative space-y-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        className: "inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#e24e1b]/10 to-red-500/10 border border-[#e24e1b]/20",
                        whileHover: { scale: 1.05 },
                        transition: { type: "spring", bounce: 0.3 },
                        children: [
                          /* @__PURE__ */ jsx(
                            motion.div,
                            {
                              animate: {
                                scale: [1, 1.3, 1],
                                opacity: [1, 0.5, 1]
                              },
                              transition: {
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              },
                              children: /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5 text-[#e24e1b]" })
                            }
                          ),
                          /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#e24e1b]", children: "DACH-Analyse verfügbar" }),
                          /* @__PURE__ */ jsx(Badge, { className: "bg-gradient-to-r from-[#e24e1b] to-red-500 text-white border-0", children: "Kostenlos" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      motion.h3,
                      {
                        className: "text-3xl font-bold text-gray-900",
                        initial: { y: 20, opacity: 0 },
                        animate: isVisible ? { y: 0, opacity: 1 } : {},
                        transition: { duration: 0.6, delay: 2.4 },
                        children: "Bereit für DACH-Compliance?"
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      motion.p,
                      {
                        className: "text-xl text-gray-600 max-w-2xl mx-auto",
                        initial: { y: 20, opacity: 0 },
                        animate: isVisible ? { y: 0, opacity: 1 } : {},
                        transition: { duration: 0.6, delay: 2.6 },
                        children: [
                          "Starten Sie mit einer kostenlosen Analyse Ihrer aktuellen",
                          /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900", children: " Compliance-Situation im DACH-Raum." })
                        ]
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "flex flex-col sm:flex-row gap-6 justify-center",
                      initial: { y: 30, opacity: 0 },
                      animate: isVisible ? { y: 0, opacity: 1 } : {},
                      transition: { duration: 0.6, delay: 2.8 },
                      children: [
                        /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true", children: /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            whileHover: { scale: 1.05 },
                            whileTap: { scale: 0.95 },
                            children: /* @__PURE__ */ jsxs(
                              Button,
                              {
                                size: "lg",
                                className: "bg-gradient-to-r from-[#e24e1b] via-red-500 to-[#e24e1b] hover:from-[#e24e1b]/90 hover:via-red-500/90 hover:to-[#e24e1b]/90 text-white px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group",
                                children: [
                                  /* @__PURE__ */ jsx(
                                    motion.div,
                                    {
                                      className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12",
                                      initial: { x: "-100%" },
                                      whileHover: { x: "200%" },
                                      transition: { duration: 0.8 }
                                    }
                                  ),
                                  /* @__PURE__ */ jsx(MapPin, { className: "mr-3 h-6 w-6" }),
                                  "DACH-Analyse anfordern",
                                  /* @__PURE__ */ jsx(
                                    motion.div,
                                    {
                                      whileHover: { x: 5 },
                                      transition: { type: "spring", stiffness: 400 },
                                      children: /* @__PURE__ */ jsx(ArrowRight, { className: "ml-3 h-6 w-6" })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) }),
                        /* @__PURE__ */ jsx(Link, { to: "/branchen", children: /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            whileHover: { scale: 1.05 },
                            whileTap: { scale: 0.95 },
                            children: /* @__PURE__ */ jsxs(
                              Button,
                              {
                                size: "lg",
                                variant: "outline",
                                className: "px-12 py-4 text-lg font-semibold border-2 glassmorphism hover:bg-white/50 hover:border-[#e24e1b] hover:text-[#e24e1b] transition-all duration-300",
                                children: [
                                  /* @__PURE__ */ jsx(Globe, { className: "mr-3 h-6 w-6" }),
                                  "Branchen erkunden",
                                  /* @__PURE__ */ jsx(
                                    motion.div,
                                    {
                                      whileHover: { x: 5 },
                                      transition: { type: "spring", stiffness: 400 },
                                      children: /* @__PURE__ */ jsx(ArrowRight, { className: "ml-3 h-6 w-6" })
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      className: "flex items-center justify-center gap-8 pt-6 text-sm",
                      initial: { y: 20, opacity: 0 },
                      animate: isVisible ? { y: 0, opacity: 1 } : {},
                      transition: { duration: 0.6, delay: 3 },
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-600", children: [
                          /* @__PURE__ */ jsx(
                            motion.div,
                            {
                              className: "p-1 rounded-full bg-emerald-500/10",
                              animate: { scale: [1, 1.2, 1] },
                              transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                              children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-500" })
                            }
                          ),
                          /* @__PURE__ */ jsx("span", { children: "Kostenlose Analyse" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-600", children: [
                          /* @__PURE__ */ jsx(
                            motion.div,
                            {
                              className: "p-1 rounded-full bg-emerald-500/10",
                              animate: { scale: [1, 1.2, 1] },
                              transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 },
                              children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-500" })
                            }
                          ),
                          /* @__PURE__ */ jsx("span", { children: "DACH-Expertenwissen" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-600", children: [
                          /* @__PURE__ */ jsx(
                            motion.div,
                            {
                              className: "p-1 rounded-full bg-emerald-500/10",
                              animate: { scale: [1, 1.2, 1] },
                              transition: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
                              children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-emerald-500" })
                            }
                          ),
                          /* @__PURE__ */ jsx("span", { children: "Live-Updates" })
                        ] })
                      ]
                    }
                  )
                ] })
              ] })
            }
          )
        ] })
      ]
    }
  );
};
export {
  DACHCompliance as D,
  HeroSection as H
};
