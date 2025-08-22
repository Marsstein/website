import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Euro, BookOpen, ArrowRight, Download, ChevronDown, Shield, Gavel, Building2, Eye, Zap, Users, AlertTriangle, FileText, CheckCircle2, Building, Home, Scale, Activity, ChevronRight, Target, GraduationCap, CheckCircle, BarChart3, Lightbulb, Award, Brain, Cpu, MessageSquare, Info, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
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
import "@radix-ui/react-slot";
import "@radix-ui/react-progress";
const GeldwaeschegesetzGuide = () => {
  const { scrollYProgress } = useScroll();
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("overview");
  const [openFAQs, setOpenFAQs] = useState([]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const AnimatedCounter = ({ value, duration = 2e3, prefix = "", suffix = "" }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const isInView = useInView(elementRef, { once: true });
    useEffect(() => {
      if (isInView) {
        const startTime = Date.now();
        const animateCount = () => {
          const now = Date.now();
          const progress = Math.min((now - startTime) / duration, 1);
          const percentage = progress * progress * (3 - 2 * progress);
          setCount(Math.floor(percentage * value));
          if (percentage < 1) {
            requestAnimationFrame(animateCount);
          }
        };
        requestAnimationFrame(animateCount);
      }
    }, [isInView, value, duration]);
    return /* @__PURE__ */ jsxs("span", { ref: elementRef, children: [
      prefix,
      count,
      suffix
    ] });
  };
  const toggleFAQ = (index) => {
    setOpenFAQs(
      (prev) => prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-pink-500 z-50",
        style: { scaleX }
      }
    ),
    /* @__PURE__ */ jsxs("main", { className: "relative", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "relative min-h-screen flex items-center justify-center overflow-hidden",
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 1 },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900" }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute inset-0",
                  initial: { opacity: 0 },
                  animate: { opacity: 0.1 },
                  transition: { duration: 2 },
                  children: [...Array(50)].map((_, i) => /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "absolute bg-rose-500/10 rounded-full",
                      style: {
                        width: Math.random() * 300 + 50,
                        height: Math.random() * 300 + 50,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      },
                      animate: {
                        y: [0, -30, 0],
                        x: [0, Math.random() * 30 - 15, 0],
                        scale: [1, 1.1, 1]
                      },
                      transition: {
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    },
                    i
                  ))
                }
              )
            ] }),
            /* @__PURE__ */ jsx("div", { className: "container px-4 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.2 },
                  className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-500/20 backdrop-blur-sm border border-rose-500/30 text-rose-300 mb-8",
                  children: [
                    /* @__PURE__ */ jsx(Euro, { className: "h-5 w-5" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Geldwäschegesetz Compliance" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-rose-500/30 text-rose-200 border-rose-400/30", children: "2024" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.h1,
                {
                  className: "text-5xl md:text-7xl font-bold mb-6",
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.3 },
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: "Geldwäschegesetz" }),
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent block mt-2", children: "(GwG) Compliance Guide" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.p,
                {
                  className: "text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed",
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 },
                  children: "Ihr umfassender Leitfaden zur rechtssicheren Implementierung des deutschen Geldwäschegesetzes und zur Erfüllung aller Anti-Money Laundering (AML) Anforderungen."
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-12",
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.5 },
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { value: 15, suffix: "+" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Betroffene Branchen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { value: 5, suffix: "M€" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Max. Bußgeld" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { value: 100, suffix: "%" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Compliance-Rate" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-white mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { value: 24, suffix: "/7" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Support" })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "flex flex-col sm:flex-row gap-4 justify-center",
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.6 },
                  children: [
                    /* @__PURE__ */ jsx(Link, { to: "/regulierung/geldwaeschegesetz", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:opacity-90 group shadow-xl", children: [
                      /* @__PURE__ */ jsx(BookOpen, { className: "mr-2 h-5 w-5" }),
                      "GwG Produktseite",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ] }) }),
                    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group border-white/20 text-white hover:bg-white/10", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "GwG Checkliste herunterladen"
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  className: "absolute bottom-8 left-1/2 transform -translate-x-1/2",
                  animate: { y: [0, 10, 0] },
                  transition: { duration: 2, repeat: Infinity },
                  children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-8 w-8 text-white/50" })
                }
              )
            ] }) })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "container px-4 py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs(Card, { className: "mb-12 bg-white/5 backdrop-blur-sm border-white/10", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-white", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-rose-400" }),
                "GwG Überblick"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "text-center p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20",
                    whileHover: { scale: 1.05 },
                    transition: { type: "spring", stiffness: 300 },
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-rose-400 mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { value: 15, suffix: "+" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Betroffene Branchen" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "text-center p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20",
                    whileHover: { scale: 1.05 },
                    transition: { type: "spring", stiffness: 300 },
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-rose-400 mb-2", children: /* @__PURE__ */ jsx(AnimatedCounter, { value: 5, suffix: "M€" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Max. Bußgeld" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "text-center p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20",
                    whileHover: { scale: 1.05 },
                    transition: { type: "spring", stiffness: 300 },
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-rose-400 mb-2", children: "BaFin" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Aufsichtsbehörde" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "text-center p-6 rounded-xl bg-gradient-to-br from-rose-500/10 to-pink-500/10 border border-rose-500/20",
                    whileHover: { scale: 1.05 },
                    transition: { type: "spring", stiffness: 300 },
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-rose-400 mb-2", children: "KYC" }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300", children: "Know Your Customer" })
                    ]
                  }
                )
              ] }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: "mb-20",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-12 text-center", children: "Die Entwicklung des Geldwäschegesetzes" }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-rose-500 to-pink-500" }),
                [
                  {
                    year: "1993",
                    title: "Erstes GwG",
                    description: "Umsetzung der ersten EU-Geldwäscherichtlinie in deutsches Recht",
                    icon: Gavel,
                    side: "left"
                  },
                  {
                    year: "2008",
                    title: "Erweiterung des Anwendungsbereichs",
                    description: "Integration weiterer Verpflichteter wie Immobilienmakler und Güterhändler",
                    icon: Building2,
                    side: "right"
                  },
                  {
                    year: "2017",
                    title: "Vierte EU-Geldwäscherichtlinie",
                    description: "Verschärfung der Sorgfaltspflichten und Einführung des Transparenzregisters",
                    icon: Eye,
                    side: "left"
                  },
                  {
                    year: "2020",
                    title: "Fünfte EU-Geldwäscherichtlinie",
                    description: "Erweiterung auf Kryptowährungen und verstärkte Transparenz",
                    icon: Shield,
                    side: "right"
                  },
                  {
                    year: "2024",
                    title: "Aktuelle Anforderungen",
                    description: "Kontinuierliche Anpassung an neue Risiken und Technologien",
                    icon: Zap,
                    side: "left"
                  }
                ].map((event, index) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: event.side === "left" ? -50 : 50 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { duration: 0.5, delay: index * 0.1 },
                    viewport: { once: true },
                    className: `relative flex items-center mb-12 ${event.side === "right" ? "justify-end" : ""}`,
                    children: [
                      /* @__PURE__ */ jsx("div", { className: `w-5/12 ${event.side === "right" ? "order-2 text-left pl-12" : "text-right pr-12"}`, children: /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6",
                          whileHover: { scale: 1.02 },
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                              /* @__PURE__ */ jsx(event.icon, { className: "h-6 w-6 text-rose-400" }),
                              /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-rose-400", children: event.year })
                            ] }),
                            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: event.title }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300", children: event.description })
                          ]
                        }
                      ) }),
                      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-rose-500 rounded-full border-4 border-slate-900" })
                    ]
                  },
                  index
                ))
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: "mb-20",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-12 text-center", children: "Kernpflichten des Geldwäschegesetzes" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                {
                  icon: Users,
                  title: "Kundensorgfaltspflichten (KYC)",
                  description: "Identifizierung und Überprüfung der Kundenidentität",
                  features: [
                    "Identitätsprüfung bei Geschäftsbeginn",
                    "Feststellung wirtschaftlich Berechtigter",
                    "Kontinuierliche Überwachung",
                    "Verstärkte Sorgfalt bei PEP"
                  ],
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: AlertTriangle,
                  title: "Verdachtsmeldungen",
                  description: "Meldung verdächtiger Transaktionen an die FIU",
                  features: [
                    "Unverzügliche Meldepflicht",
                    "Tipping-Off-Verbot",
                    "Transaktionsaussetzung möglich",
                    "Dokumentation der Analyse"
                  ],
                  color: "from-orange-500 to-red-500"
                },
                {
                  icon: FileText,
                  title: "Aufzeichnungspflichten",
                  description: "Dokumentation und Aufbewahrung für 5 Jahre",
                  features: [
                    "Vollständige Transaktionsdaten",
                    "Kundendokumentation",
                    "Risikoanalysen",
                    "Schulungsnachweise"
                  ],
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Shield,
                  title: "Compliance-Organisation",
                  description: "Aufbau einer robusten Compliance-Struktur",
                  features: [
                    "Geldwäschebeauftragter",
                    "Risikomanagement-System",
                    "Regelmäßige Schulungen",
                    "Interne Kontrollen"
                  ],
                  color: "from-green-500 to-emerald-500"
                }
              ].map((requirement, index) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: index * 0.1 },
                  viewport: { once: true },
                  children: /* @__PURE__ */ jsxs(Card, { className: "h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300", children: [
                    /* @__PURE__ */ jsxs(CardHeader, { children: [
                      /* @__PURE__ */ jsx("div", { className: `inline-flex p-3 rounded-xl bg-gradient-to-r ${requirement.color} mb-4`, children: /* @__PURE__ */ jsx(requirement.icon, { className: "h-6 w-6 text-white" }) }),
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-white", children: requirement.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: requirement.description })
                    ] }),
                    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: requirement.features.map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: feature })
                    ] }, idx)) }) })
                  ] })
                },
                index
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: "mb-20",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4 text-center", children: "Betroffene Branchen" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-center mb-12 max-w-3xl mx-auto", children: "Das Geldwäschegesetz betrifft eine Vielzahl von Branchen mit unterschiedlichen Anforderungen und Risikoprofilen. Klicken Sie auf eine Branche für Details." }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
                {
                  name: "Banken & Finanzdienstleister",
                  icon: Building,
                  riskLevel: "Sehr hoch",
                  requirements: ["Umfassende KYC-Prozesse", "Transaktionsmonitoring", "Sanktionslistenprüfung"],
                  description: "Vollumfängliche GwG-Pflichten mit strengsten Anforderungen"
                },
                {
                  name: "Versicherungen",
                  icon: Shield,
                  riskLevel: "Hoch",
                  requirements: ["Lebensversicherungen prüfen", "Rückversicherung beachten", "Prämienzahlungen überwachen"],
                  description: "Fokus auf Lebensversicherungen und kapitalbildende Produkte"
                },
                {
                  name: "Immobilienmakler",
                  icon: Home,
                  riskLevel: "Mittel-Hoch",
                  requirements: ["Käufer/Verkäufer identifizieren", "Bargeldschwelle 10.000€", "Herkunft der Mittel prüfen"],
                  description: "Sorgfaltspflichten bei Kauf- und Mietgeschäften"
                },
                {
                  name: "Rechtsanwälte & Notare",
                  icon: Scale,
                  riskLevel: "Mittel",
                  requirements: ["Bei Immobilientransaktionen", "Unternehmensgründungen", "Treuhandgeschäfte"],
                  description: "Spezifische Tätigkeiten unterliegen dem GwG"
                },
                {
                  name: "Kryptowährungen",
                  icon: Zap,
                  riskLevel: "Sehr hoch",
                  requirements: ["Wallet-Verifizierung", "Travel Rule beachten", "Cold Wallet Reporting"],
                  description: "Neue, strenge Anforderungen seit 2020"
                },
                {
                  name: "Glücksspiel",
                  icon: Activity,
                  riskLevel: "Hoch",
                  requirements: ["Spieleridentifikation", "Einzahlungslimits", "Auffällige Spielmuster"],
                  description: "Online und stationäre Anbieter betroffen"
                }
              ].map((industry, index) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  whileInView: { opacity: 1, scale: 1 },
                  transition: { delay: index * 0.1 },
                  viewport: { once: true },
                  whileHover: { y: -5 },
                  children: /* @__PURE__ */ jsxs(Card, { className: "h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer", children: [
                    /* @__PURE__ */ jsxs(CardHeader, { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                        /* @__PURE__ */ jsx(industry.icon, { className: "h-8 w-8 text-rose-400" }),
                        /* @__PURE__ */ jsx(
                          Badge,
                          {
                            className: `
                              ${industry.riskLevel === "Sehr hoch" ? "bg-red-500/20 text-red-300 border-red-500/30" : ""}
                              ${industry.riskLevel === "Hoch" ? "bg-orange-500/20 text-orange-300 border-orange-500/30" : ""}
                              ${industry.riskLevel === "Mittel-Hoch" ? "bg-yellow-500/20 text-yellow-300 border-yellow-500/30" : ""}
                              ${industry.riskLevel === "Mittel" ? "bg-blue-500/20 text-blue-300 border-blue-500/30" : ""}
                            `,
                            children: industry.riskLevel
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-white text-lg", children: industry.name }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-2", children: industry.description })
                    ] }),
                    /* @__PURE__ */ jsxs(CardContent, { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-gray-200 mb-3", children: "Hauptanforderungen:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: industry.requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-rose-400 flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: req })
                      ] }, idx)) })
                    ] })
                  ] })
                },
                index
              )) }),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.3 },
                  viewport: { once: true },
                  className: "mt-8 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10",
                  children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Weitere betroffene Branchen:" }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: [
                      "Steuerberater",
                      "Wirtschaftsprüfer",
                      "Edelmetallhändler",
                      "Kunsthändler",
                      "Güterhändler (>10.000€)",
                      "Factoring-Unternehmen",
                      "Leasing-Gesellschaften",
                      "Zahlungsdienstleister",
                      "E-Geld-Institute",
                      "Kapitalverwaltungsgesellschaften",
                      "Finanzunternehmen"
                    ].map((industry, index) => /* @__PURE__ */ jsx(
                      Badge,
                      {
                        className: "bg-rose-500/10 text-rose-300 border-rose-500/30 hover:bg-rose-500/20 transition-colors",
                        children: industry
                      },
                      index
                    )) })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: "mb-20",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-12 text-center", children: "Ihr Weg zur GwG-Compliance" }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-12 right-12 h-1 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hidden lg:block" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-8", children: [
                  {
                    step: 1,
                    title: "Risikoanalyse",
                    icon: Target,
                    description: "Bewertung Ihrer spezifischen ML/TF-Risiken",
                    tasks: ["Geschäftsmodell analysieren", "Kundenstruktur bewerten", "Geografische Risiken"],
                    duration: "2-4 Wochen"
                  },
                  {
                    step: 2,
                    title: "Organisation",
                    icon: Building2,
                    description: "Aufbau der Compliance-Struktur",
                    tasks: ["GwB bestellen", "Verantwortlichkeiten", "Reporting-Linien"],
                    duration: "3-6 Wochen"
                  },
                  {
                    step: 3,
                    title: "KYC-Prozesse",
                    icon: Users,
                    description: "Kundensorgfaltspflichten etablieren",
                    tasks: ["Onboarding-Prozess", "Dokumentation", "Risikoklassifizierung"],
                    duration: "4-8 Wochen"
                  },
                  {
                    step: 4,
                    title: "Monitoring",
                    icon: Activity,
                    description: "Überwachungssysteme implementieren",
                    tasks: ["Transaction Monitoring", "Sanktionslisten", "PEP-Screening"],
                    duration: "6-12 Wochen"
                  },
                  {
                    step: 5,
                    title: "Schulung",
                    icon: GraduationCap,
                    description: "Mitarbeiter sensibilisieren",
                    tasks: ["Trainingskonzept", "Regelmäßige Updates", "Erfolgskontrolle"],
                    duration: "Kontinuierlich"
                  }
                ].map((item, index) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    transition: { delay: index * 0.1 },
                    viewport: { once: true },
                    className: "relative",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-4", children: /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10", children: item.step }) }),
                      /* @__PURE__ */ jsxs(Card, { className: "h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300", children: [
                        /* @__PURE__ */ jsxs(CardHeader, { className: "text-center pb-2", children: [
                          /* @__PURE__ */ jsx(item.icon, { className: "h-8 w-8 text-rose-400 mx-auto mb-3" }),
                          /* @__PURE__ */ jsx(CardTitle, { className: "text-white text-lg", children: item.title }),
                          /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-2", children: item.description })
                        ] }),
                        /* @__PURE__ */ jsxs(CardContent, { children: [
                          /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-4", children: item.tasks.map((task, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" }),
                            /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-xs", children: task })
                          ] }, idx)) }),
                          /* @__PURE__ */ jsxs("div", { className: "text-center pt-2 border-t border-white/10", children: [
                            /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Dauer: " }),
                            /* @__PURE__ */ jsx("span", { className: "text-xs text-rose-300 font-semibold", children: item.duration })
                          ] })
                        ] })
                      ] })
                    ]
                  },
                  index
                )) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: "mb-20",
            children: /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-500/20", children: [
              /* @__PURE__ */ jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl text-white flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(BarChart3, { className: "h-8 w-8 text-rose-400" }),
                  "GwG-Risikoanalyse Tool"
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mt-2", children: "Bewerten Sie Ihr individuelles Geldwäscherisiko mit unserem interaktiven Tool" })
              ] }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold mb-4", children: "Risikofaktoren bewerten:" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                    { name: "Kundenstruktur", level: 65 },
                    { name: "Geografische Reichweite", level: 45 },
                    { name: "Produktkomplexität", level: 80 },
                    { name: "Transaktionsvolumen", level: 55 },
                    { name: "Bargeldintensität", level: 30 }
                  ].map((factor, index) => /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-300", children: factor.name }),
                      /* @__PURE__ */ jsxs("span", { className: "text-sm text-rose-300 font-semibold", children: [
                        factor.level,
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx(Progress, { value: factor.level, className: "h-2" })
                  ] }, index)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-white font-semibold mb-4", children: "Ihr Risikoprofil:" }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-5xl font-bold text-orange-400 mb-2", children: "Mittel-Hoch" }),
                    /* @__PURE__ */ jsx("div", { className: "text-gray-300", children: "Gesamtrisiko-Score: 55/100" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-400 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300", children: "Verstärkte Sorgfaltspflichten empfohlen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-400 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-300", children: "Fokus auf Transaktionsmonitoring" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(Button, { className: "w-full mt-6 bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:opacity-90", children: "Detaillierte Analyse starten" })
                ] })
              ] }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: "mb-20",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4 text-center", children: "Praxisbeispiele & Case Studies" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-center mb-12 max-w-3xl mx-auto", children: "Lernen Sie aus realen Fällen und Best Practices der GwG-Compliance. Diese Beispiele zeigen typische Herausforderungen und Lösungsansätze." }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
                {
                  title: "Fintech-Startup implementiert GwG-Compliance",
                  industry: "Zahlungsdienstleister",
                  challenge: "Ein junges Fintech musste innerhalb von 3 Monaten vollständige GwG-Compliance erreichen, um die BaFin-Lizenz zu erhalten.",
                  solution: [
                    "Implementierung automatisierter KYC-Prozesse mit KI-Unterstützung",
                    "Integration von Sanktionslisten-Screening in Echtzeit",
                    "Aufbau eines risikobasierten Ansatzes für Transaktionsmonitoring",
                    "Schulung aller 50 Mitarbeiter innerhalb von 4 Wochen"
                  ],
                  result: "Erfolgreiche BaFin-Lizenzierung und 95% Automatisierung der Compliance-Prozesse",
                  icon: Zap,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Immobilienmakler nach GwG-Prüfung",
                  industry: "Immobilien",
                  challenge: "Mittelständischer Immobilienmakler mit 20 Mitarbeitern wurde von der Aufsichtsbehörde geprüft und musste erhebliche Mängel abstellen.",
                  solution: [
                    "Nachholung von über 200 fehlenden Kundenidentifikationen",
                    "Einführung digitaler Dokumentationsprozesse",
                    "Bestellung eines externen Geldwäschebeauftragten",
                    "Implementierung monatlicher Compliance-Reviews"
                  ],
                  result: "Vermeidung eines Bußgelds von 150.000€ und nachhaltige Compliance-Struktur",
                  icon: Home,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  title: "Bank optimiert Verdachtsmeldeprozess",
                  industry: "Kreditinstitut",
                  challenge: "Regionalbank mit hohem Meldeaufkommen suchte nach Effizienzsteigerung bei gleichzeitiger Qualitätsverbesserung der Verdachtsmeldungen.",
                  solution: [
                    "Einführung von Machine Learning für Transaktionsanalyse",
                    "Standardisierung der Meldekriterien und -prozesse",
                    "Aufbau eines spezialisierten 5-köpfigen Compliance-Teams",
                    "Direkte Anbindung an goAML-System der FIU"
                  ],
                  result: "50% Reduktion von False Positives bei 30% höherer Trefferquote",
                  icon: Building,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Krypto-Börse meistert neue Anforderungen",
                  industry: "Kryptowährungen",
                  challenge: "Deutsche Krypto-Handelsplattform musste sich auf die verschärften Anforderungen der 5. EU-Geldwäscherichtlinie einstellen.",
                  solution: [
                    "Implementierung der Travel Rule für Krypto-Transaktionen",
                    "Entwicklung eines Wallet-Screening-Systems",
                    "Integration von Blockchain-Analyse-Tools",
                    "Aufbau einer 24/7 Transaction Monitoring Unit"
                  ],
                  result: "Erste deutsche Krypto-Börse mit vollständiger GwG-Compliance-Zertifizierung",
                  icon: Zap,
                  color: "from-orange-500 to-red-500"
                }
              ].map((caseStudy, index) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.95 },
                  whileInView: { opacity: 1, scale: 1 },
                  transition: { delay: index * 0.1 },
                  viewport: { once: true },
                  children: /* @__PURE__ */ jsxs(Card, { className: "h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300", children: [
                    /* @__PURE__ */ jsxs(CardHeader, { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                        /* @__PURE__ */ jsx("div", { className: `inline-flex p-3 rounded-xl bg-gradient-to-r ${caseStudy.color}`, children: /* @__PURE__ */ jsx(caseStudy.icon, { className: "h-6 w-6 text-white" }) }),
                        /* @__PURE__ */ jsx(Badge, { className: "bg-rose-500/20 text-rose-300 border-rose-500/30", children: caseStudy.industry })
                      ] }),
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-white text-xl mb-3", children: caseStudy.title }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-rose-400 mb-2", children: "Herausforderung:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: caseStudy.challenge })
                      ] }) })
                    ] }),
                    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-rose-400 mb-3", children: "Lösungsansatz:" }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: caseStudy.solution.map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { className: "text-gray-300 text-sm", children: item })
                        ] }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "pt-4 border-t border-white/10", children: [
                        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-rose-400 mb-2", children: "Ergebnis:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm font-medium", children: caseStudy.result })
                      ] })
                    ] }) })
                  ] })
                },
                index
              )) }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.3 },
                  viewport: { once: true },
                  className: "mt-12",
                  children: /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-500/20", children: [
                    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-white flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-rose-400" }),
                      "Best Practices aus der Praxis"
                    ] }) }),
                    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
                      {
                        title: "Automatisierung first",
                        description: "Setzen Sie von Anfang an auf automatisierte Prozesse für KYC und Transaktionsmonitoring",
                        icon: Brain
                      },
                      {
                        title: "Kontinuierliche Schulung",
                        description: "Etablieren Sie eine Kultur der kontinuierlichen Weiterbildung und Sensibilisierung",
                        icon: GraduationCap
                      },
                      {
                        title: "Dokumentation ist König",
                        description: "Dokumentieren Sie alle Prozesse, Entscheidungen und Maßnahmen lückenlos",
                        icon: FileText
                      },
                      {
                        title: "Risikobasierter Ansatz",
                        description: "Fokussieren Sie Ressourcen auf Hochrisikobereiche und -kunden",
                        icon: Target
                      },
                      {
                        title: "Technologie nutzen",
                        description: "Moderne RegTech-Lösungen können Compliance erheblich vereinfachen",
                        icon: Cpu
                      },
                      {
                        title: "Proaktive Kommunikation",
                        description: "Pflegen Sie einen offenen Dialog mit Aufsichtsbehörden",
                        icon: MessageSquare
                      }
                    ].map((practice, index) => /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        className: "bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10",
                        whileHover: { scale: 1.02 },
                        transition: { type: "spring", stiffness: 300 },
                        children: [
                          /* @__PURE__ */ jsx(practice.icon, { className: "h-8 w-8 text-rose-400 mb-3" }),
                          /* @__PURE__ */ jsx("h4", { className: "text-white font-semibold mb-2", children: practice.title }),
                          /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: practice.description })
                        ]
                      },
                      index
                    )) }) })
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: "mb-20",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-4 text-center", children: "Häufig gestellte Fragen zum Geldwäschegesetz" }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-center mb-12 max-w-3xl mx-auto", children: "Finden Sie Antworten auf die wichtigsten Fragen zur GwG-Compliance. Klicken Sie auf eine Frage, um die Antwort zu sehen." }),
              /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto space-y-4", children: [
                {
                  category: "Grundlagen",
                  icon: Info,
                  questions: [
                    {
                      q: "Was ist das Geldwäschegesetz und wen betrifft es?",
                      a: "Das Geldwäschegesetz (GwG) ist die deutsche Umsetzung der EU-Geldwäscherichtlinien. Es verpflichtet bestimmte Unternehmen und Berufsgruppen zur Prävention von Geldwäsche und Terrorismusfinanzierung. Betroffen sind u.a. Banken, Versicherungen, Immobilienmakler, Rechtsanwälte, Notare, Steuerberater und viele weitere Branchen."
                    },
                    {
                      q: "Was sind die Hauptpflichten nach dem GwG?",
                      a: "Die Hauptpflichten umfassen: 1) Kundensorgfaltspflichten (KYC) - Identifizierung und Verifizierung von Kunden, 2) Meldepflichten - Verdachtsmeldungen an die FIU, 3) Aufzeichnungspflichten - Dokumentation für mindestens 5 Jahre, 4) Interne Sicherungsmaßnahmen - Risikomanagement, Schulungen und Bestellung eines Geldwäschebeauftragten."
                    },
                    {
                      q: "Welche Strafen drohen bei Verstößen gegen das GwG?",
                      a: "Bei Verstößen drohen erhebliche Sanktionen: Bußgelder bis zu 5 Millionen Euro oder 10% des Jahresumsatzes (je nachdem, was höher ist), strafrechtliche Verfolgung mit Freiheitsstrafen bis zu 5 Jahren, Veröffentlichung der Verstöße ('Naming & Shaming') und möglicher Entzug der Geschäftserlaubnis."
                    }
                  ]
                },
                {
                  category: "Kundensorgfaltspflichten",
                  icon: Users,
                  questions: [
                    {
                      q: "Was bedeutet KYC (Know Your Customer)?",
                      a: "KYC bezeichnet die Pflicht zur Kundenidentifizierung und -verifizierung. Dies umfasst: Feststellung der Identität des Vertragspartners, Klärung ob für einen wirtschaftlich Berechtigten gehandelt wird, Abklärung des Geschäftszwecks und der Art der Geschäftsbeziehung, sowie kontinuierliche Überwachung der Geschäftsbeziehung."
                    },
                    {
                      q: "Wann muss eine verstärkte Sorgfaltspflicht angewendet werden?",
                      a: "Verstärkte Sorgfaltspflichten sind erforderlich bei: Geschäftsbeziehungen mit politisch exponierten Personen (PEP), Transaktionen mit Hochrisikoländern, komplexen oder ungewöhnlich großen Transaktionen, Ferngeschäftsbeziehungen ohne persönlichen Kontakt, und wenn Zweifel an der Richtigkeit der Kundenangaben bestehen."
                    },
                    {
                      q: "Was ist ein wirtschaftlich Berechtigter?",
                      a: "Ein wirtschaftlich Berechtigter ist die natürliche Person, die letztendlich Eigentümer oder Kontrollinhaber des Kunden ist. Bei Unternehmen sind dies Personen mit mehr als 25% der Anteile oder Stimmrechte. Die Identifizierung des wirtschaftlich Berechtigten ist essentieller Bestandteil der Kundensorgfaltspflichten."
                    }
                  ]
                },
                {
                  category: "Meldepflichten",
                  icon: AlertTriangle,
                  questions: [
                    {
                      q: "Wann muss eine Verdachtsmeldung abgegeben werden?",
                      a: "Eine Verdachtsmeldung ist erforderlich, wenn Tatsachen vorliegen, die darauf hindeuten, dass: Vermögensgegenstände aus strafbaren Handlungen stammen, eine Geschäftsbeziehung zur Terrorismusfinanzierung genutzt wird, oder der Vertragspartner falsche Angaben über seine Identität gemacht hat. Die Meldung muss unverzüglich an die Financial Intelligence Unit (FIU) erfolgen."
                    },
                    {
                      q: "Was ist das Tipping-Off-Verbot?",
                      a: "Das Tipping-Off-Verbot untersagt es, den Kunden oder Dritte über eine Verdachtsmeldung zu informieren. Dies soll verhindern, dass Verdächtige gewarnt werden und Beweise vernichten. Verstöße gegen das Tipping-Off-Verbot können mit Freiheitsstrafe bis zu einem Jahr oder Geldstrafe geahndet werden."
                    },
                    {
                      q: "Wie läuft das Meldeverfahren ab?",
                      a: "Das Meldeverfahren erfolgt elektronisch über das goAML-System der FIU. Nach Registrierung können Verdachtsmeldungen online übermittelt werden. Die FIU analysiert die Meldung und leitet sie bei Bedarf an die Strafverfolgungsbehörden weiter. Der Meldende erhält eine Eingangsbestätigung mit Aktenzeichen."
                    }
                  ]
                },
                {
                  category: "Organisation & Compliance",
                  icon: Building2,
                  questions: [
                    {
                      q: "Wann muss ein Geldwäschebeauftragter bestellt werden?",
                      a: "Ein Geldwäschebeauftragter muss bestellt werden von: Kreditinstituten, Finanzdienstleistungsinstituten, Versicherungsunternehmen, Kapitalverwaltungsgesellschaften, und anderen Verpflichteten, wenn die Art und der Umfang der Geschäftstätigkeit dies erfordern. Der Geldwäschebeauftragte muss der Geschäftsleitung direkt unterstellt sein."
                    },
                    {
                      q: "Welche Aufgaben hat ein Geldwäschebeauftragter?",
                      a: "Der Geldwäschebeauftragte ist zentraler Ansprechpartner für alle GwG-relevanten Themen. Zu seinen Aufgaben gehören: Entwicklung interner Grundsätze und Verfahren, Durchführung von Risikoanalysen, Bearbeitung von Verdachtsfällen und Meldungen, Schulung der Mitarbeiter, sowie Zusammenarbeit mit Behörden."
                    },
                    {
                      q: "Wie oft müssen Mitarbeiterschulungen durchgeführt werden?",
                      a: "Mitarbeiterschulungen müssen regelmäßig, mindestens jedoch jährlich durchgeführt werden. Neue Mitarbeiter müssen vor Aufnahme ihrer Tätigkeit geschult werden. Die Schulungen müssen dokumentiert werden und sollten aktuelle Entwicklungen, Typologien und interne Verfahren abdecken."
                    }
                  ]
                }
              ].map((category, categoryIndex) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: categoryIndex * 0.1 },
                  viewport: { once: true },
                  children: /* @__PURE__ */ jsxs(Card, { className: "bg-white/5 backdrop-blur-sm border-white/10", children: [
                    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-white flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(category.icon, { className: "h-6 w-6 text-rose-400" }),
                      category.category
                    ] }) }),
                    /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: category.questions.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 10 + faqIndex;
                      const isOpen = openFAQs.includes(globalIndex);
                      return /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          className: "border border-white/10 rounded-lg overflow-hidden",
                          initial: false,
                          children: [
                            /* @__PURE__ */ jsxs(
                              "button",
                              {
                                onClick: () => toggleFAQ(globalIndex),
                                className: "w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors",
                                children: [
                                  /* @__PURE__ */ jsx("span", { className: "text-white font-medium pr-4", children: faq.q }),
                                  /* @__PURE__ */ jsx(
                                    motion.div,
                                    {
                                      animate: { rotate: isOpen ? 180 : 0 },
                                      transition: { duration: 0.3 },
                                      children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-rose-400 flex-shrink-0" })
                                    }
                                  )
                                ]
                              }
                            ),
                            /* @__PURE__ */ jsx(
                              motion.div,
                              {
                                initial: { height: 0 },
                                animate: { height: isOpen ? "auto" : 0 },
                                transition: { duration: 0.3, ease: "easeInOut" },
                                className: "overflow-hidden",
                                children: /* @__PURE__ */ jsx("div", { className: "px-6 pb-4 pt-2", children: /* @__PURE__ */ jsx("p", { className: "text-gray-300 leading-relaxed", children: faq.a }) })
                              }
                            )
                          ]
                        },
                        faqIndex
                      );
                    }) })
                  ] })
                },
                categoryIndex
              )) }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { delay: 0.4 },
                  viewport: { once: true },
                  className: "mt-12 text-center",
                  children: /* @__PURE__ */ jsx(Card, { className: "bg-gradient-to-r from-rose-500/10 to-pink-500/10 border-rose-500/20 max-w-2xl mx-auto", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                    /* @__PURE__ */ jsx(HelpCircle, { className: "h-12 w-12 text-rose-400 mx-auto mb-4" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "Haben Sie weitere Fragen?" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: "Unsere GwG-Experten stehen Ihnen für eine individuelle Beratung zur Verfügung." }),
                    /* @__PURE__ */ jsx(Button, { className: "bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:opacity-90", children: "Kostenlose Erstberatung vereinbaren" })
                  ] }) })
                }
              )
            ]
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  GeldwaeschegesetzGuide as default
};
