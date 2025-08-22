import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, motion, useInView } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { BrainCircuit, Eye, Target, Gauge, ShieldOff, AlertTriangle, ClipboardCheck, BadgeCheck, Building2, FileText, Calendar, Gavel, Rocket, Wrench, Sparkles, Award, Download, Bookmark, Flag, Play, CheckCircle, CheckCircle2, Share2, Circle, Users, Globe, Info, ChevronDown, Package, CircleDot, Fingerprint, Server, GraduationCap, Briefcase, Heart, Shield, Search, Code, AlertOctagon, Zap, X, Lock, Database, BrainCog, Settings, AlertCircle, Lightbulb, ExternalLink } from "lucide-react";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "react-router-dom";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-progress";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const EuAiActGuide = () => {
  const [activeSection, setActiveSection] = useState("ueberblick");
  const [completedSections, setCompletedSections] = useState([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedRiskLevel, setExpandedRiskLevel] = useState({});
  const [checkedItems, setCheckedItems] = useState({});
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });
  const sections = [
    { id: "ueberblick", title: "Überblick", icon: Eye, readTime: "12 Min" },
    { id: "anwendungsbereich", title: "Anwendungsbereich", icon: Target, readTime: "15 Min" },
    { id: "risikostufen", title: "Risikostufen", icon: Gauge, readTime: "25 Min" },
    { id: "verbotene-praktiken", title: "Verbotene Praktiken", icon: ShieldOff, readTime: "18 Min" },
    { id: "hochrisiko-ki", title: "Hochrisiko-KI", icon: AlertTriangle, readTime: "30 Min" },
    { id: "general-purpose-ai", title: "General Purpose AI", icon: BrainCircuit, readTime: "20 Min" },
    { id: "anforderungen", title: "Anforderungen", icon: ClipboardCheck, readTime: "35 Min" },
    { id: "konformitaet", title: "Konformitätsbewertung", icon: BadgeCheck, readTime: "25 Min" },
    { id: "transparenz", title: "Transparenzpflichten", icon: Eye, readTime: "20 Min" },
    { id: "governance", title: "AI Governance", icon: Building2, readTime: "22 Min" },
    { id: "dokumentation", title: "Dokumentation", icon: FileText, readTime: "18 Min" },
    { id: "zeitplan", title: "Zeitplan", icon: Calendar, readTime: "15 Min" },
    { id: "bussgelder", title: "Bußgelder", icon: Gavel, readTime: "12 Min" },
    { id: "implementierung", title: "Implementierung", icon: Rocket, readTime: "30 Min" },
    { id: "technische-standards", title: "Technische Standards", icon: Wrench, readTime: "25 Min" },
    { id: "innovation", title: "Innovation & Sandboxes", icon: Sparkles, readTime: "18 Min" },
    { id: "zertifizierung", title: "Zertifizierung", icon: Award, readTime: "20 Min" },
    { id: "ressourcen", title: "Ressourcen", icon: Download, readTime: "10 Min" }
  ];
  const riskCategories = [
    {
      level: "Minimal Risk",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-600",
      description: "Geringe oder keine Risiken für Grundrechte",
      requirements: "Minimale Anforderungen",
      examples: [
        "AI-gestützte Videospiele",
        "Spam-Filter",
        "AI-generierte Kunstwerke",
        "Inventory Management Systeme",
        "Predictive Maintenance"
      ],
      obligations: [
        "Freiwillige Verhaltenskodizes",
        "Keine spezifischen rechtlichen Anforderungen",
        "Best Practices empfohlen",
        "Transparenz bei Interaktion"
      ]
    },
    {
      level: "Limited Risk",
      icon: Info,
      color: "from-yellow-500 to-orange-600",
      description: "Systeme mit spezifischen Transparenzpflichten",
      requirements: "Transparenzpflichten",
      examples: [
        "Chatbots und virtuelle Assistenten",
        "Emotion Recognition Systems",
        "Biometrische Kategorisierungssysteme",
        "Deepfakes (Audio/Video)",
        "AI-generierte Inhalte"
      ],
      obligations: [
        "Nutzer informieren, dass sie mit KI interagieren",
        "Kennzeichnung von KI-generierten Inhalten",
        "Opt-out Möglichkeiten bereitstellen",
        "Klare Erkennbarkeit von Deepfakes",
        "Emotionserkennung offenlegen"
      ]
    },
    {
      level: "High Risk",
      icon: AlertTriangle,
      color: "from-orange-500 to-red-600",
      description: "Erhebliche Risiken für Gesundheit, Sicherheit oder Grundrechte",
      requirements: "Umfassende Compliance-Anforderungen",
      examples: [
        "Biometrische Identifikation",
        "Kritische Infrastrukturen",
        "Bildung und Berufsausbildung",
        "Beschäftigung und Arbeitnehmerverwaltung",
        "Zugang zu wesentlichen Dienstleistungen",
        "Strafverfolgung",
        "Migration und Grenzkontrollen",
        "Rechtspflege"
      ],
      obligations: [
        "Risikomanagementsystem",
        "Datenqualität und -governance",
        "Technische Dokumentation",
        "Aufzeichnungspflichten (Logging)",
        "Transparenz und Nutzerinformation",
        "Menschliche Aufsicht",
        "Genauigkeit, Robustheit und Cybersicherheit",
        "Konformitätsbewertung",
        "CE-Kennzeichnung"
      ]
    },
    {
      level: "Unacceptable Risk",
      icon: ShieldOff,
      color: "from-red-500 to-pink-600",
      description: "Verbotene AI-Praktiken",
      requirements: "Vollständiges Verbot",
      examples: [
        "Social Scoring durch Behörden",
        "Unterschwellige Manipulation",
        "Ausnutzung von Schwächen vulnerabler Gruppen",
        "Biometrische Echtzeit-Fernidentifizierung im öffentlichen Raum",
        "Predictive Policing basierend auf Profiling",
        "Emotionserkennung am Arbeitsplatz/Bildung",
        "Ungezielte Scraping für Gesichtsdatenbanken",
        "AI-basierte Ableitung sensibler Merkmale"
      ],
      obligations: [
        "Sofortige Einstellung",
        "Keine Entwicklung oder Vermarktung",
        "Ausnahmen nur für Strafverfolgung unter strengen Bedingungen",
        "Hohe Strafen bei Verstößen (bis 35 Mio € oder 7% Umsatz)"
      ]
    }
  ];
  const complianceTimeline = [
    {
      date: "2. August 2024",
      milestone: "Inkrafttreten",
      description: "EU AI Act tritt offiziell in Kraft",
      status: "completed",
      requirements: []
    },
    {
      date: "2. Februar 2025",
      milestone: "Verbotene Praktiken",
      description: "Verbot unannehmbarer KI-Praktiken wird wirksam",
      status: "upcoming",
      requirements: [
        "Einstellung verbotener AI-Systeme",
        "Compliance-Check bestehender Systeme",
        "Dokumentation der Einstellung"
      ]
    },
    {
      date: "2. August 2025",
      milestone: "General Purpose AI",
      description: "Pflichten für GPAI-Modelle treten in Kraft",
      status: "upcoming",
      requirements: [
        "Technische Dokumentation",
        "Urheberrechts-Compliance",
        "Modell-Evaluierung",
        "Systemische Risiken (>10^25 FLOPS)"
      ]
    },
    {
      date: "2. August 2026",
      milestone: "Annex III Hochrisiko-KI",
      description: "Anforderungen für bestehende Hochrisiko-KI-Systeme",
      status: "upcoming",
      requirements: [
        "Konformitätsbewertung",
        "CE-Kennzeichnung",
        "Registrierung in EU-Datenbank",
        "Benannte Stellen einbeziehen"
      ]
    },
    {
      date: "2. August 2027",
      milestone: "Vollständige Anwendung",
      description: "Alle Bestimmungen des AI Act gelten",
      status: "upcoming",
      requirements: [
        "Volle Compliance für alle AI-Systeme",
        "Marktüberwachung aktiv",
        "Alle Durchführungsrechtsakte anwendbar"
      ]
    },
    {
      date: "2. August 2030",
      milestone: "Erste Überprüfung",
      description: "Kommission überprüft und bewertet AI Act",
      status: "future",
      requirements: [
        "Evaluierungsbericht",
        "Mögliche Gesetzesanpassungen",
        "Neue technische Standards"
      ]
    }
  ];
  const implementationSteps = [
    {
      phase: "Phase 1: AI Inventory & Gap Analysis",
      duration: "2-3 Monate",
      icon: Search,
      color: "from-blue-500 to-indigo-600",
      tasks: [
        "Bestandsaufnahme aller AI-Systeme im Unternehmen",
        "Klassifizierung nach Risikostufen",
        "Use Case Dokumentation",
        "Gap-Analyse gegen AI Act Anforderungen",
        "Risikobewertung durchführen",
        "Compliance-Roadmap erstellen"
      ],
      deliverables: ["AI System Inventory", "Risk Classification Report", "Gap Analysis", "Compliance Roadmap"]
    },
    {
      phase: "Phase 2: Governance & Organisation",
      duration: "2-4 Monate",
      icon: Building2,
      color: "from-emerald-500 to-teal-600",
      tasks: [
        "AI Governance Board etablieren",
        "Verantwortlichkeiten definieren (RACI)",
        "AI Ethics Committee gründen",
        "Policies und Procedures entwickeln",
        "Training Programme aufsetzen",
        "Incident Response Plan erstellen"
      ],
      deliverables: ["AI Governance Framework", "Policy Suite", "Training Materials", "Org Chart"]
    },
    {
      phase: "Phase 3: Technical Implementation",
      duration: "6-9 Monate",
      icon: Code,
      color: "from-purple-500 to-pink-600",
      tasks: [
        "Risikomanagementsystem implementieren",
        "Data Governance Framework",
        "Logging und Monitoring aufsetzen",
        "Human Oversight Mechanismen",
        "Bias Detection und Mitigation",
        "Security und Robustness Testing"
      ],
      deliverables: ["Technical Documentation", "Risk Management System", "Monitoring Dashboard"]
    },
    {
      phase: "Phase 4: Documentation & Testing",
      duration: "3-4 Monate",
      icon: FileText,
      color: "from-orange-500 to-red-600",
      tasks: [
        "Technische Dokumentation vervollständigen",
        "Conformity Assessment vorbereiten",
        "Testing und Validierung",
        "Audit Trail etablieren",
        "Transparency Reports erstellen",
        "User Information Materials"
      ],
      deliverables: ["Complete Documentation Set", "Test Reports", "Audit Trails", "User Guides"]
    },
    {
      phase: "Phase 5: Certification & Go-Live",
      duration: "2-3 Monate",
      icon: Award,
      color: "from-cyan-500 to-blue-600",
      tasks: [
        "Notified Body Engagement",
        "Conformity Assessment durchführen",
        "CE Marking Prozess",
        "EU Database Registration",
        "Market Surveillance Vorbereitung",
        "Continuous Monitoring Setup"
      ],
      deliverables: ["CE Certificate", "EU Database Entry", "Surveillance Plan", "Compliance Dashboard"]
    }
  ];
  const handleSectionComplete = (sectionId) => {
    setCompletedSections(
      (prev) => prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };
  const toggleRiskLevel = (level) => {
    setExpandedRiskLevel((prev) => ({
      ...prev,
      [level]: !prev[level]
    }));
  };
  const handleItemCheck = (itemId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };
  const scrollToSection = (sectionId) => {
    window.history.pushState(null, "", `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrolled / maxScroll * 100;
        setReadingProgress(Math.min(progress, 100));
      }
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id)
      }));
      const scrollPosition = window.scrollY + 150;
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);
  const CounterAnimation = ({ value, suffix = "", prefix = "", duration = 2e3 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
      if (isInView) {
        let startTime;
        const startValue = 0;
        const endValue = value;
        const animate = (currentTime) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
          setCount(currentValue);
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [isInView, value, duration]);
    return /* @__PURE__ */ jsxs("span", { ref, children: [
      prefix,
      count,
      suffix
    ] });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl px-4 py-3", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30", children: [
            /* @__PURE__ */ jsx(BrainCircuit, { className: "h-3 w-3 mr-1" }),
            "EU AI Act Guide"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-400", children: [
            "Abschnitt ",
            sections.findIndex((s) => s.id === activeSection) + 1,
            " von ",
            sections.length
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-sm text-slate-400", children: [
            Math.round(readingProgress),
            "% gelesen"
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: () => setBookmarked(!bookmarked),
              variant: "ghost",
              size: "sm",
              className: "text-slate-400 hover:text-yellow-400",
              children: /* @__PURE__ */ jsx(Bookmark, { className: cn("h-4 w-4", bookmarked && "fill-current text-yellow-400") })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(Progress, { value: readingProgress, className: "h-1" })
    ] }) }),
    /* @__PURE__ */ jsxs(
      motion.section,
      {
        className: "relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5" }),
          /* @__PURE__ */ jsx("div", { className: "relative container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl", children: /* @__PURE__ */ jsx(BrainCircuit, { className: "h-8 w-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white", children: "EU AI Act" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-400", children: "Regulation (EU) 2024/1689" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300 mb-8 leading-relaxed", children: "Die weltweit erste umfassende KI-Regulierung. Risikobasierter Ansatz zum Schutz von Grundrechten bei gleichzeitiger Förderung von Innovation und Vertrauen in KI-Systeme." }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mb-8", children: [
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-blue-500/10 border-blue-500/20 text-blue-300", children: [
                      /* @__PURE__ */ jsx(Flag, { className: "h-4 w-4 mr-2" }),
                      "EU-Verordnung"
                    ] }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300", children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                      "In Kraft seit 2.8.2024"
                    ] }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "bg-purple-500/10 border-purple-500/20 text-purple-300", children: [
                      /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 mr-2" }),
                      "Alle KI-Anbieter & -Nutzer"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                    /* @__PURE__ */ jsxs(
                      Button,
                      {
                        onClick: () => setActiveSection("risk-levels"),
                        className: "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600",
                        children: [
                          /* @__PURE__ */ jsx(Play, { className: "h-4 w-4 mr-2" }),
                          "Guide starten"
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "border-slate-600 text-slate-300 hover:bg-slate-700", children: [
                      /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                      "PDF herunterladen"
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 0.4 },
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 4 }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Risikostufen" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-emerald-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 113 }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Artikel" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-purple-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 35, prefix: "€", suffix: "M" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Max. Bußgeld" })
                    ] }) }),
                    /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-orange-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: 7, suffix: "%" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "vom Jahresumsatz" })
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsx(Card, { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-4", children: "Was Sie in diesem Guide lernen" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                      "Risikobasierter Ansatz und Klassifizierung",
                      "Verbotene KI-Praktiken verstehen",
                      "Anforderungen für Hochrisiko-KI",
                      "General Purpose AI Regelungen",
                      "Konformitätsbewertung und CE-Kennzeichnung",
                      "Implementierungs-Roadmap und Timeline"
                    ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: item })
                    ] }, index)) })
                  ] }) })
                ]
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: sections.map((item) => {
      const IconComponent = item.icon;
      return /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            scrollToSection(item.id);
            setActiveSection(item.id);
          },
          className: cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
            activeSection === item.id ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800" : "hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-400",
            "border",
            activeSection === item.id ? "border-red-200 dark:border-red-800" : "border-transparent hover:border-red-200 dark:hover:border-red-800"
          ),
          children: [
            /* @__PURE__ */ jsx(IconComponent, { className: cn(
              "h-4 w-4",
              activeSection === item.id && "text-red-600 dark:text-red-500"
            ) }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "text-sm font-medium",
              activeSection === item.id && "text-red-700 dark:text-red-400"
            ), children: item.title })
          ]
        },
        item.id
      );
    }) }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 py-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-4 gap-6 lg:gap-8", children: [
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsxs("div", { className: "lg:sticky lg:top-32 space-y-6", children: [
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Inhaltsverzeichnis" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: sections.map((section, index) => {
            const IconComponent = section.icon;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => {
                  scrollToSection(section.id);
                  setActiveSection(section.id);
                },
                className: cn(
                  "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
                  activeSection === section.id ? "bg-blue-500/20 border border-blue-500/50 text-blue-300" : "border border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300"
                ),
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(IconComponent, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: section.title }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs opacity-70", children: section.readTime })
                    ] })
                  ] }),
                  completedSections.includes(section.id) && /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400" })
                ]
              },
              section.id
            );
          }) })
        ] }) }),
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Schnellaktionen" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "w-full justify-start", children: [
              /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
              "Risk Assessment Template"
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "w-full justify-start", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
              "Compliance Checklist"
            ] }),
            /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "w-full justify-start", children: [
              /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4 mr-2" }),
              "Guide teilen"
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("div", { ref: contentRef, className: "space-y-20", children: [
        /* @__PURE__ */ jsx("section", { id: "ueberblick", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Überblick" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("ueberblick"),
                    variant: completedSections.includes("ueberblick") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("ueberblick") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "prose prose-invert prose-slate max-w-none", children: [
                /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300 leading-relaxed mb-6", children: "Die Verordnung (EU) 2024/1689 über künstliche Intelligenz (AI Act) ist die weltweit erste umfassende horizontale Regulierung für KI-Systeme. Sie verfolgt einen risikobasierten Ansatz und zielt darauf ab, ein Gleichgewicht zwischen dem Schutz der Grundrechte und der Förderung von Innovation zu schaffen." }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-blue-300 mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Target, { className: "h-5 w-5" }),
                      "Hauptziele"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Schutz von Grundrechten und Sicherheit" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Rechtssicherheit für KI-Entwickler" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Förderung von vertrauenswürdiger KI" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Harmonisierung des EU-Binnenmarkts" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-emerald-300 mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5" }),
                      "Geltungsbereich"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-slate-300", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Anbieter von KI-Systemen" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Betreiber/Nutzer von KI" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Importeure und Händler" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Drittländer mit EU-Auswirkung" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "Kernprinzipien des AI Act" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-500 rounded-xl w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Gauge, { className: "h-6 w-6 text-white" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Risikobasiert" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: "Anforderungen proportional zum Risiko" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-emerald-500 rounded-xl w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-white" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Human-Centric" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: "Mensch im Mittelpunkt der KI-Nutzung" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-purple-500 rounded-xl w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Globe, { className: "h-6 w-6 text-white" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-2", children: "Technologieneutral" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: "Anwendbar auf alle KI-Technologien" })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "risikostufen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Risikostufen" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("risikostufen"),
                    variant: completedSections.includes("risikostufen") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("risikostufen") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-300 mb-3", children: "Risikobasierter Ansatz" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Der EU AI Act klassifiziert KI-Systeme in vier Risikostufen. Je höher das Risiko für Grundrechte und Sicherheit, desto strenger die Anforderungen. Diese Pyramide zeigt die Verteilung und jeweiligen Compliance-Anforderungen." }),
                /* @__PURE__ */ jsx("div", { className: "relative h-64 flex items-end justify-center", children: /* @__PURE__ */ jsxs("svg", { className: "w-full h-full", viewBox: "0 0 400 200", children: [
                  /* @__PURE__ */ jsx("path", { d: "M200 20 L320 180 L80 180 Z", fill: "url(#pyramidGradient)", stroke: "rgba(255,255,255,0.2)", strokeWidth: "2" }),
                  /* @__PURE__ */ jsx("line", { x1: "120", y1: "60", x2: "280", y2: "60", stroke: "rgba(255,255,255,0.3)", strokeWidth: "1" }),
                  /* @__PURE__ */ jsx("line", { x1: "140", y1: "100", x2: "260", y2: "100", stroke: "rgba(255,255,255,0.3)", strokeWidth: "1" }),
                  /* @__PURE__ */ jsx("line", { x1: "160", y1: "140", x2: "240", y2: "140", stroke: "rgba(255,255,255,0.3)", strokeWidth: "1" }),
                  /* @__PURE__ */ jsx("text", { x: "200", y: "45", textAnchor: "middle", fill: "#ef4444", className: "text-xs font-semibold", children: "Verboten" }),
                  /* @__PURE__ */ jsx("text", { x: "200", y: "85", textAnchor: "middle", fill: "#f97316", className: "text-xs font-semibold", children: "Hochrisiko" }),
                  /* @__PURE__ */ jsx("text", { x: "200", y: "125", textAnchor: "middle", fill: "#eab308", className: "text-xs font-semibold", children: "Begrenzt" }),
                  /* @__PURE__ */ jsx("text", { x: "200", y: "165", textAnchor: "middle", fill: "#22c55e", className: "text-xs font-semibold", children: "Minimal" }),
                  /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "pyramidGradient", x1: "0%", y1: "0%", x2: "0%", y2: "100%", children: [
                    /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#ef4444", stopOpacity: "0.8" }),
                    /* @__PURE__ */ jsx("stop", { offset: "33%", stopColor: "#f97316", stopOpacity: "0.6" }),
                    /* @__PURE__ */ jsx("stop", { offset: "66%", stopColor: "#eab308", stopOpacity: "0.4" }),
                    /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#22c55e", stopOpacity: "0.2" })
                  ] }) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4", children: riskCategories.map((category, index) => {
                const IconComponent = category.icon;
                const isExpanded = expandedRiskLevel[category.level];
                return /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: index * 0.05 },
                    className: "border border-slate-700 rounded-xl overflow-hidden",
                    children: [
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          onClick: () => toggleRiskLevel(category.level),
                          className: "w-full p-6 bg-slate-800/50 hover:bg-slate-800/70 transition-colors flex items-center justify-between",
                          children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                              /* @__PURE__ */ jsx("div", { className: cn(
                                "p-3 rounded-xl bg-gradient-to-r",
                                category.color
                              ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                              /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: category.level }),
                                /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: category.description })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                              /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: category.requirements }),
                              /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                                "h-5 w-5 text-slate-400 transition-transform duration-200",
                                isExpanded && "rotate-180"
                              ) })
                            ] })
                          ]
                        }
                      ),
                      isExpanded && /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          initial: { height: 0 },
                          animate: { height: "auto" },
                          exit: { height: 0 },
                          transition: { duration: 0.3 },
                          className: "border-t border-slate-700 bg-slate-900/50",
                          children: /* @__PURE__ */ jsx("div", { className: "p-6 space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h4", { className: "text-md font-semibold text-white mb-3 flex items-center gap-2", children: [
                                /* @__PURE__ */ jsx(Package, { className: "h-4 w-4 text-blue-400" }),
                                "Beispiele"
                              ] }),
                              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: category.examples.map((example, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(CircleDot, { className: "h-3 w-3 text-slate-400 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: example })
                              ] }, idx)) })
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsxs("h4", { className: "text-md font-semibold text-white mb-3 flex items-center gap-2", children: [
                                /* @__PURE__ */ jsx(ClipboardCheck, { className: "h-4 w-4 text-emerald-400" }),
                                "Anforderungen"
                              ] }),
                              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: category.obligations.map((obligation, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-emerald-400 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: obligation })
                              ] }, idx)) })
                            ] })
                          ] }) })
                        }
                      )
                    ]
                  },
                  category.level
                );
              }) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "hochrisiko-ki", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Hochrisiko-KI-Systeme" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("hochrisiko-ki"),
                    variant: completedSections.includes("hochrisiko-ki") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("hochrisiko-ki") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-orange-300 mb-6", children: "Annex III - Hochrisiko-Bereiche" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    {
                      category: "Biometrische Systeme",
                      icon: Fingerprint,
                      examples: [
                        "Fernbiometrische Identifikation",
                        "Emotionserkennung am Arbeitsplatz",
                        "Biometrische Kategorisierung"
                      ]
                    },
                    {
                      category: "Kritische Infrastruktur",
                      icon: Server,
                      examples: [
                        "Verkehrssteuerung",
                        "Wasser- und Stromversorgung",
                        "Digitale Infrastruktur"
                      ]
                    },
                    {
                      category: "Bildung & Ausbildung",
                      icon: GraduationCap,
                      examples: [
                        "Zulassung zu Bildungseinrichtungen",
                        "Bewertung von Prüfungen",
                        "Lernfortschrittsüberwachung"
                      ]
                    },
                    {
                      category: "Beschäftigung",
                      icon: Briefcase,
                      examples: [
                        "Recruiting und Auswahl",
                        "Leistungsbewertung",
                        "Kündigungsentscheidungen"
                      ]
                    },
                    {
                      category: "Wesentliche Dienste",
                      icon: Heart,
                      examples: [
                        "Sozialleistungen",
                        "Notfalldienste",
                        "Kreditwürdigkeit"
                      ]
                    },
                    {
                      category: "Rechtsdurchsetzung",
                      icon: Gavel,
                      examples: [
                        "Risikoanalyse Straftaten",
                        "Polygraph-ähnliche Tools",
                        "Beweisbewertung"
                      ]
                    }
                  ].map((area) => {
                    const IconComponent = area.icon;
                    return /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                        /* @__PURE__ */ jsx("div", { className: "p-2 bg-orange-500 rounded-lg", children: /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5 text-white" }) }),
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: area.category })
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: area.examples.map((example, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-orange-400 mt-1" }),
                        /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: example })
                      ] }, idx)) })
                    ] }, area.category);
                  }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-400" }),
                      "Technische Anforderungen"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      "Risikomanagementsystem etablieren",
                      "Datenqualität und -governance sicherstellen",
                      "Technische Dokumentation erstellen",
                      "Automatische Aufzeichnung (Logging)",
                      "Transparenz für Nutzer gewährleisten",
                      "Menschliche Aufsicht ermöglichen",
                      "Genauigkeit, Robustheit, Cybersicherheit"
                    ].map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: req })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-emerald-400" }),
                      "Compliance-Prozess"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                      "Konformitätsbewertung durchführen",
                      "EU-Konformitätserklärung erstellen",
                      "CE-Kennzeichnung anbringen",
                      "Registrierung in EU-Datenbank",
                      "Post-Market Monitoring",
                      "Schwerwiegende Vorfälle melden",
                      "Dokumentation 10 Jahre aufbewahren"
                    ].map((proc, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-400 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: proc })
                    ] }, idx)) })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "zeitplan", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Compliance Timeline" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("zeitplan"),
                    variant: completedSections.includes("zeitplan") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("zeitplan") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-300 mb-3", children: "Stufenweise Einführung" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: "Der EU AI Act wird schrittweise über mehrere Jahre eingeführt. Die Timeline zeigt die wichtigsten Meilensteine und wann welche Anforderungen in Kraft treten." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-6", children: complianceTimeline.map((milestone, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.5, delay: index * 0.1 },
                  className: cn(
                    "relative bg-slate-800/50 rounded-xl p-6 border-2",
                    milestone.status === "completed" && "border-green-500/50",
                    milestone.status === "upcoming" && "border-blue-500/50",
                    milestone.status === "future" && "border-slate-700"
                  ),
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                      /* @__PURE__ */ jsx("div", { className: cn(
                        "w-4 h-4 rounded-full mt-2",
                        milestone.status === "completed" && "bg-green-500",
                        milestone.status === "upcoming" && "bg-blue-500 animate-pulse",
                        milestone.status === "future" && "bg-slate-600"
                      ) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-3", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: milestone.milestone }),
                          /* @__PURE__ */ jsx(Badge, { variant: milestone.status === "completed" ? "default" : "outline", className: "text-xs", children: milestone.date })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: milestone.description }),
                        milestone.requirements.length > 0 && /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-2", children: "Wichtige Anforderungen:" }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: milestone.requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400 mt-0.5 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: req })
                          ] }, idx)) })
                        ] })
                      ] })
                    ] }),
                    index < complianceTimeline.length - 1 && /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 left-6 w-0.5 h-6 bg-slate-600" })
                  ]
                },
                milestone.date
              )) })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "implementierung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Implementierungs-Roadmap" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("implementierung"),
                    variant: completedSections.includes("implementierung") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("implementierung") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-purple-300 mb-4", children: "EU AI Act Compliance Journey" }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Eine strukturierte Herangehensweise ist entscheidend für erfolgreiche AI Act Compliance. Diese Roadmap führt Sie durch alle notwendigen Schritte von der ersten Bestandsaufnahme bis zur Zertifizierung." }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4 text-center", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-400", children: "12-18 Monate" }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Typische Implementierungsdauer" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-pink-400", children: "5 Phasen" }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Strukturierter Ansatz" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-indigo-400", children: "€200k-500k" }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Typische Kosten (High-Risk)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-6", children: implementationSteps.map((step, index) => {
                const IconComponent = step.icon;
                return /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.5, delay: index * 0.1 },
                    className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700",
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                      /* @__PURE__ */ jsx("div", { className: cn(
                        "p-3 rounded-xl bg-gradient-to-r flex-shrink-0",
                        step.color
                      ), children: /* @__PURE__ */ jsx(IconComponent, { className: "h-6 w-6 text-white" }) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                          /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: step.phase }),
                          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: step.duration })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Hauptaufgaben:" }),
                            /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: step.tasks.map((task, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                              /* @__PURE__ */ jsx(
                                "input",
                                {
                                  type: "checkbox",
                                  id: `impl-task-${index}-${idx}`,
                                  checked: checkedItems[`impl-task-${index}-${idx}`] || false,
                                  onChange: () => handleItemCheck(`impl-task-${index}-${idx}`),
                                  className: "mt-1 text-blue-500"
                                }
                              ),
                              /* @__PURE__ */ jsx(
                                "label",
                                {
                                  htmlFor: `impl-task-${index}-${idx}`,
                                  className: cn(
                                    "text-sm text-slate-300 cursor-pointer",
                                    checkedItems[`impl-task-${index}-${idx}`] && "line-through opacity-60"
                                  ),
                                  children: task
                                }
                              )
                            ] }, idx)) })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Deliverables:" }),
                            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: step.deliverables.map((deliverable) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: deliverable }, deliverable)) })
                          ] })
                        ] })
                      ] })
                    ] })
                  },
                  step.phase
                );
              }) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Sparkles, { className: "h-5 w-5 text-yellow-400" }),
                    "Success Factors"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                    "Executive Sponsorship und Budget-Commitment",
                    "Cross-funktionales AI Governance Board",
                    "Frühzeitige Einbindung von Legal & Compliance",
                    "Pragmatischer, risikobasierter Ansatz",
                    "Automatisierung wo möglich",
                    "Kontinuierliche Schulung aller Stakeholder",
                    "Enge Zusammenarbeit mit Notified Bodies"
                  ].map((factor, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: factor })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertOctagon, { className: "h-5 w-5 text-red-400" }),
                    "Typische Herausforderungen"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: [
                    "Unklarheit bei Risiko-Klassifizierung",
                    "Fehlende harmonisierte Standards",
                    "Begrenzte Verfügbarkeit von Notified Bodies",
                    "Komplexität bei GPAI-Modellen",
                    "Dokumentationsaufwand unterschätzt",
                    "Supply Chain Transparency",
                    "Technische Schulden in Legacy-Systemen"
                  ].map((challenge, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: challenge })
                  ] }, idx)) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "verbotene-praktiken", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Verbotene KI-Praktiken" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("verbotene-praktiken"),
                    variant: completedSections.includes("verbotene-praktiken") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("verbotene-praktiken") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-red-300 mb-6 text-center", children: "Artikel 5 - Verbotene KI-Praktiken" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
                    {
                      article: "5(1)(a)",
                      title: "Unterschwellige Techniken",
                      description: "KI-Systeme, die unterschwellige Techniken jenseits des Bewusstseins einer Person einsetzen oder diese täuschen",
                      purpose: "mit dem Ziel oder der Wirkung, das Verhalten einer Person erheblich zu beeinträchtigen",
                      examples: [
                        "Unterschwellige Werbung in Apps oder Websites",
                        "Voice assistants die unbewusst Kaufverhalten beeinflussen",
                        "Gaming Apps mit versteckten Manipulationstechniken",
                        "Social Media Algorithmen die suchterzeugende Patterns nutzen",
                        "Dark Patterns in User Interfaces"
                      ],
                      legalConsequences: [
                        "Bis zu 35 Mio. EUR oder 7% des weltweiten Jahresumsatzes",
                        "Sofortige Einstellung der Praktiken erforderlich",
                        "Mögliche strafrechtliche Konsequenzen",
                        "Reputationsschäden und Kundenvertrauen"
                      ],
                      complianceActions: [
                        "Audit aller User Interface Designs",
                        "Review von Algorithmus-Designs",
                        "Ethik Board für UX Decisions",
                        "User consent und Transparency",
                        "Regular ethical impact assessments"
                      ]
                    },
                    {
                      article: "5(1)(b)",
                      title: "Ausnutzung von Schwächen",
                      description: "KI-Systeme, die Schwächen einer bestimmten Gruppe von Personen aufgrund ihres Alters, ihrer Behinderung oder ihrer besonderen sozialen oder wirtschaftlichen Lage ausnutzen",
                      purpose: "um das Verhalten einer Person aus dieser Gruppe erheblich zu beeinträchtigen",
                      examples: [
                        "Predatory lending algorithms targeting vulnerable populations",
                        "Gaming apps specifically designed for children addiction",
                        "Insurance pricing algorithms discriminating against disabled",
                        "Credit scoring that penalizes low-income individuals",
                        "Educational apps exploiting children's psychological vulnerabilities"
                      ],
                      legalConsequences: [
                        "Bis zu 35 Mio. EUR oder 7% des weltweiten Jahresumsatzes",
                        "Zivilrechtliche Schadenersatzansprüche",
                        "Aufsichtsbehördliche Maßnahmen",
                        "Mögliche class-action lawsuits"
                      ],
                      complianceActions: [
                        "Vulnerability Impact Assessments",
                        "Special protection measures for vulnerable groups",
                        "Enhanced consent mechanisms",
                        "Regular algorithmic audits for bias",
                        "Stakeholder engagement with advocacy groups"
                      ]
                    },
                    {
                      article: "5(1)(c)",
                      title: "Social Scoring",
                      description: "KI-Systeme zur Bewertung oder Klassifizierung der Vertrauenswürdigkeit natürlicher Personen über einen bestimmten Zeitraum hinweg",
                      purpose: "aufgrund ihres sozialen Verhaltens oder bekannter, abgeleiteter oder vorhergesagter persönlicher oder Persönlichkeitsmerkmale",
                      examples: [
                        "Umfassende Social Credit Systeme durch Behörden",
                        "Employee scoring based on social media activity",
                        "Tenant screening using social behavior data",
                        "Insurance premiums based on lifestyle scoring",
                        "Dating app algorithms creating social hierarchy"
                      ],
                      legalConsequences: [
                        "Vollständiges Verbot für öffentliche Behörden",
                        "Strenge Beschränkungen für private Anbieter",
                        "Bis zu 35 Mio. EUR Bußgeld",
                        "Aufsichtsbehördliche Durchsetzung"
                      ],
                      complianceActions: [
                        "Review aller scoring algorithms",
                        "Eliminate broad social scoring systems",
                        "Implement purpose limitation principles",
                        "Ensure transparent scoring criteria",
                        "Provide individual appeal mechanisms"
                      ]
                    },
                    {
                      article: "5(1)(d)",
                      title: "Biometrische Echtzeit-Fernidentifizierung",
                      description: "Biometrische Echtzeit-Fernidentifizierungssysteme in öffentlich zugänglichen Räumen zu Strafverfolgungszwecken",
                      purpose: "es sei denn, sie werden für spezifische Strafverfolgungszwecke unter strengen Bedingungen verwendet",
                      examples: [
                        "Gesichtserkennung in öffentlichen Räumen ohne Verdacht",
                        "Massenüberwachung durch biometrische Systeme",
                        "Real-time identification ohne richterliche Anordnung",
                        "Predictive policing mit biometrischer Identifikation",
                        "Automated border control ohne menschliche Aufsicht"
                      ],
                      legalConsequences: [
                        "Verbot außerhalb spezifischer Ausnahmen",
                        "Strenge gerichtliche Kontrolle erforderlich",
                        "Hohe Bußgelder bei Verstößen",
                        "Datenschutzrechtliche Konsequenzen"
                      ],
                      complianceActions: [
                        "Audit existing biometric systems",
                        "Implement strict access controls",
                        "Establish judicial oversight mechanisms",
                        "Document legitimate law enforcement purposes",
                        "Implement privacy by design"
                      ]
                    }
                  ].map((prohibition) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border-2 border-red-500/30", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/50", children: [
                        "Art. ",
                        prohibition.article
                      ] }),
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: prohibition.title })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxs("p", { className: "text-slate-300 mb-2 text-sm italic", children: [
                      '"',
                      prohibition.description,
                      " ",
                      prohibition.purpose,
                      '"'
                    ] }) }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("h5", { className: "text-sm font-semibold text-red-300 mb-3 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(AlertOctagon, { className: "h-4 w-4" }),
                          "Beispiele"
                        ] }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: prohibition.examples.map((example, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(ShieldOff, { className: "h-3 w-3 text-red-400 mt-1 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: example })
                        ] }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("h5", { className: "text-sm font-semibold text-orange-300 mb-3 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Gavel, { className: "h-4 w-4" }),
                          "Rechtliche Konsequenzen"
                        ] }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: prohibition.legalConsequences.map((consequence, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-orange-400 mt-1 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: consequence })
                        ] }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("h5", { className: "text-sm font-semibold text-green-300 mb-3 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4" }),
                          "Compliance Maßnahmen"
                        ] }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: prohibition.complianceActions.map((action, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: action })
                        ] }, idx)) })
                      ] })
                    ] })
                  ] }, prohibition.article)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Durchsetzungsmechanismen" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-white mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-blue-400" }),
                        "Aufsichtsbehörden"
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { className: "text-slate-300", children: "• Nationale AI-Behörden" }),
                        /* @__PURE__ */ jsx("li", { className: "text-slate-300", children: "• Marktüberwachungsbehörden" }),
                        /* @__PURE__ */ jsx("li", { className: "text-slate-300", children: "• Datenschutzbehörden" }),
                        /* @__PURE__ */ jsx("li", { className: "text-slate-300", children: "• Europäisches AI Board" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-white mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Search, { className: "h-5 w-5 text-emerald-400" }),
                        "Überwachungsmaßnahmen"
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { className: "text-slate-300", children: "• Regelmäßige Inspektionen" }),
                        /* @__PURE__ */ jsx("li", { className: "text-slate-300", children: "• Technische Tests" }),
                        /* @__PURE__ */ jsx("li", { className: "text-slate-300", children: "• Dokumentenprüfungen" }),
                        /* @__PURE__ */ jsx("li", { className: "text-slate-300", children: "• Whistleblower-Programme" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-white mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Gavel, { className: "h-5 w-5 text-purple-400" }),
                        "Sanktionsmaßnahmen"
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { className: "text-slate-300", children: "• Verwarnungen" }),
                        /* @__PURE__ */ jsx("li", { className: "text-slate-300", children: "• Anordnungen zur Einstellung" }),
                        /* @__PURE__ */ jsx("li", { className: "text-slate-300", children: "• Marktverbot" }),
                        /* @__PURE__ */ jsx("li", { className: "text-slate-300", children: "• Bußgelder bis 35 Mio. €" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "general-purpose", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "General Purpose AI Models (GPAI)" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("general-purpose-ai"),
                    variant: completedSections.includes("general-purpose-ai") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("general-purpose-ai") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-purple-300 mb-6", children: "GPAI Model Definition & Kategorien" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(BrainCircuit, { className: "h-5 w-5 text-purple-400" }),
                        "Standard GPAI Models"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-purple-500/10 border border-purple-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-300 mb-2", children: "Definition (Art. 3 Nr. 44a)" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: "KI-Modell, das mit einer erheblichen Menge von Multimodal-Daten mittels selbstüberwachten, unüberwachten oder verstärkenden Lernverfahren trainiert wurde und eine Vielzahl charakteristischer Aufgaben erfüllen kann." })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white mb-2", children: "Anforderungen:" }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                            "Technische Dokumentation bereitstellen",
                            "Informationen über Training und Testing",
                            "Urheberrechts-Compliance dokumentieren",
                            "Öffentliche Zusammenfassung verfügbar machen",
                            "Policy gegen missbräuchliche Nutzung",
                            "Robustheit und Cybersicherheit gewährleisten"
                          ].map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-purple-400 mt-1 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: req })
                          ] }, idx)) })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5 text-orange-400" }),
                        "Systemic Risk GPAI (>10²⁵ FLOPS)"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-orange-500/10 border border-orange-500/20 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-300 mb-2", children: "Schwellenwert" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: "Modelle mit mehr als 10²⁵ FLOPS (Floating Point Operations) für das Training gelten als systemische Risiko-Modelle." })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white mb-2", children: "Zusätzliche Anforderungen:" }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                            "Model evaluation gemäß EU Codes of Practice",
                            "Adversarial testing durchführen",
                            "Systemic risk assessment",
                            "Red teaming exercises",
                            "Incident reporting an AI Office",
                            "Cybersecurity measures dokumentieren",
                            "Access restrictions implementieren",
                            "Energy consumption reporting"
                          ].map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-orange-400 mt-1 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: req })
                          ] }, idx)) })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "FLOPS Calculation & Model Assessment" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "FLOPS Berechnung" }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4 mb-4", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-300 mb-2", children: "Formel:" }),
                        /* @__PURE__ */ jsx("div", { className: "bg-slate-800 rounded p-3 font-mono text-blue-300 text-sm", children: "FLOPS = 6 × N × D" }),
                        /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400 mt-2", children: [
                          "N = Anzahl Parameter",
                          /* @__PURE__ */ jsx("br", {}),
                          "D = Anzahl Training Tokens"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-slate-300", children: "Beispiele bekannter Modelle:" }),
                        [
                          { model: "GPT-3", params: "175B", flops: "~3.1 × 10²³", risk: "Standard" },
                          { model: "GPT-4", params: "~1.7T", flops: "~2.4 × 10²⁵", risk: "Systemic" },
                          { model: "PaLM", params: "540B", flops: "~2.5 × 10²⁴", risk: "Standard" },
                          { model: "Claude-3", params: "Unknown", flops: "Estimated >10²⁵", risk: "Likely Systemic" }
                        ].map((example) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/30 rounded p-3", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                            /* @__PURE__ */ jsx("span", { className: "font-medium text-white", children: example.model }),
                            /* @__PURE__ */ jsx(Badge, { className: cn(
                              example.risk === "Systemic" && "bg-orange-500/20 text-orange-300",
                              example.risk.includes("Systemic") && "bg-orange-500/20 text-orange-300",
                              example.risk === "Standard" && "bg-blue-500/20 text-blue-300"
                            ), children: example.risk })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "text-xs text-slate-400", children: [
                            example.params,
                            " params • ",
                            example.flops,
                            " FLOPS"
                          ] })
                        ] }, example.model))
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Assessment Framework" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                        {
                          category: "Technical Documentation",
                          items: [
                            "Model architecture details",
                            "Training methodologies",
                            "Dataset information",
                            "Performance benchmarks",
                            "Limitation documentation"
                          ]
                        },
                        {
                          category: "Risk Assessment",
                          items: [
                            "Systemic risk evaluation",
                            "Dual-use potential analysis",
                            "Societal impact assessment",
                            "Bias und fairness testing",
                            "Environmental impact"
                          ]
                        },
                        {
                          category: "Governance Measures",
                          items: [
                            "Access control mechanisms",
                            "Usage monitoring systems",
                            "Incident response procedures",
                            "Model update protocols",
                            "Stakeholder engagement"
                          ]
                        }
                      ].map((framework) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white mb-3", children: framework.category }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: framework.items.map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }),
                          item
                        ] }, idx)) })
                      ] }, framework.category)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Downstream Provider Verpflichtungen" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    {
                      role: "Model Provider",
                      icon: BrainCircuit,
                      responsibilities: [
                        "Technical documentation maintenance",
                        "Copyright compliance verification",
                        "Model evaluation und testing",
                        "Incident reporting to authorities",
                        "Cybersecurity measures implementation"
                      ]
                    },
                    {
                      role: "Application Developer",
                      icon: Code,
                      responsibilities: [
                        "GPAI model capabilities assessment",
                        "Application-specific risk evaluation",
                        "User safety measures implementation",
                        "Misuse prevention mechanisms",
                        "Transparency und user information"
                      ]
                    },
                    {
                      role: "Deployer/User",
                      icon: Users,
                      responsibilities: [
                        "Use case appropriateness evaluation",
                        "Human oversight implementation",
                        "Output monitoring und quality control",
                        "Incident detection und response",
                        "End-user protection measures"
                      ]
                    }
                  ].map((stakeholder) => {
                    const IconComponent = stakeholder.icon;
                    return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                        /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5 text-blue-400" }),
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: stakeholder.role })
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: stakeholder.responsibilities.map((resp, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-300", children: resp })
                      ] }, idx)) })
                    ] }, stakeholder.role);
                  }) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "anwendungsbereich", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Anwendungsbereich" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("anwendungsbereich"),
                    variant: completedSections.includes("anwendungsbereich") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("anwendungsbereich") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-300 mb-6", children: "Materieller Anwendungsbereich" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "KI-Systeme (Art. 3 Nr. 1)" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "bg-slate-900/50 rounded-lg p-4", children: /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-sm", children: '"Ein maschinenbasiertes System, das für explizite oder implizite Ziele entwickelt wurde und das aus den erhaltenen Eingaben ableitet, wie es Ausgaben wie Vorhersagen, Inhalte, Empfehlungen oder Entscheidungen generiert, die physische oder virtuelle Umgebungen beeinflussen können."' }) }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                          "Machine Learning Systeme",
                          "Logic- und knowledge-based Ansätze",
                          "Statistische Ansätze",
                          "Bayesian estimation",
                          "Search und optimization Methoden"
                        ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-slate-300", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400" }),
                          item
                        ] }, idx)) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Ausnahmen" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                        "KI für ausschließlich militärische Zwecke",
                        "KI für nationale Sicherheit",
                        "KI nur für Forschung und Entwicklung",
                        "KI nur für persönliche, nicht-berufliche Zwecke",
                        "Open Source Software (mit Einschränkungen)"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm text-slate-300", children: [
                        /* @__PURE__ */ jsx(X, { className: "h-3 w-3 text-red-400" }),
                        item
                      ] }, idx)) }) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-emerald-300 mb-6", children: "Räumlicher Anwendungsbereich" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-300 mb-3", children: "Anbieter in der EU" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "Alle Anbieter mit Sitz in der EU, unabhängig davon, wo das KI-System eingesetzt wird." })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-300 mb-3", children: "Verwendung in der EU" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "KI-Systeme von Drittlandanbietern, die in der EU verwendet werden." })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-300 mb-3", children: "Output in der EU" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "KI-Systeme, deren Output in der EU verwendet wird, auch wenn das System selbst außerhalb betrieben wird." })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Betroffene Akteure" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    {
                      role: "Anbieter (Provider)",
                      definition: "Natürliche oder juristische Person, die ein KI-System entwickelt oder entwickeln lässt",
                      responsibilities: [
                        "CE-Kennzeichnung",
                        "Konformitätsbewertung",
                        "Technische Dokumentation",
                        "Post-Market-Monitoring"
                      ]
                    },
                    {
                      role: "Betreiber (Deployer)",
                      definition: "Person, die ein KI-System unter ihrer Autorität verwendet",
                      responsibilities: [
                        "Zweckbestimmung beachten",
                        "Menschliche Aufsicht",
                        "Eingabedaten überwachen",
                        "Incident Reporting"
                      ]
                    },
                    {
                      role: "Importeur",
                      definition: "Person mit Sitz in der EU, die KI-System aus Drittland in Verkehr bringt",
                      responsibilities: [
                        "Konformitätsprüfung",
                        "CE-Kennzeichnung verifizieren",
                        "Technische Dokumentation prüfen",
                        "Marktüberwachung unterstützen"
                      ]
                    },
                    {
                      role: "Händler (Distributor)",
                      definition: "Person in der Lieferkette, die KI-System verfügbar macht",
                      responsibilities: [
                        "Konformität überprüfen",
                        "Lagerungsbedingungen einhalten",
                        "Behörden informieren",
                        "Zusammenarbeit mit Marktüberwachung"
                      ]
                    }
                  ].map((actor, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-2", children: actor.role }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: actor.definition }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: actor.responsibilities.map((resp, ridx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-emerald-400" }),
                      resp
                    ] }, ridx)) })
                  ] }, idx)) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "anforderungen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Anforderungen" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("anforderungen"),
                    variant: completedSections.includes("anforderungen") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("anforderungen") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-red-300 mb-6", children: "Anforderungen für Hochrisiko-KI-Systeme" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    {
                      requirement: "Risikomanagementsystem",
                      article: "Art. 9",
                      description: "Kontinuierlicher Prozess zur Identifikation, Analyse und Bewertung von Risiken",
                      details: [
                        "Risiko-Identifikation und -Analyse",
                        "Risikobewertung und -bewältigung",
                        "Dokumentation aller Risikomanagement-Aktivitäten",
                        "Regelmäßige Überprüfung und Aktualisierung"
                      ]
                    },
                    {
                      requirement: "Datenqualität und -governance",
                      article: "Art. 10",
                      description: "Sicherstellung hoher Datenqualität für Training, Validierung und Test",
                      details: [
                        "Relevante, repräsentative und fehlerfrei Daten",
                        "Angemessene statistische Eigenschaften",
                        "Bias-Minimierung",
                        "Datenqualitätskontrolle"
                      ]
                    },
                    {
                      requirement: "Technische Dokumentation",
                      article: "Art. 11",
                      description: "Umfassende Dokumentation des KI-Systems und seiner Eigenschaften",
                      details: [
                        "Allgemeine Beschreibung des KI-Systems",
                        "Detaillierte Entwicklungsdokumentation",
                        "Risikomanagement-Dokumentation",
                        "Konformitätsbewertungsverfahren"
                      ]
                    },
                    {
                      requirement: "Automatische Protokollierung",
                      article: "Art. 12",
                      description: "Automatische Aufzeichnung von Ereignissen während des Betriebs",
                      details: [
                        "Funktionsdauer und -häufigkeit",
                        "Eingabedaten und deren Referenz",
                        "Zeitstempel aller Aktivitäten",
                        "Systemleistung und -verhalten"
                      ]
                    },
                    {
                      requirement: "Transparenz und Information",
                      article: "Art. 13",
                      description: "Klare und verständliche Informationen für Betreiber",
                      details: [
                        "Zweckbestimmung und Verwendungszweck",
                        "Genauigkeitsgrad und Robustheit",
                        "Bekannte Einschränkungen",
                        "Erwartete Systemlebensdauer"
                      ]
                    },
                    {
                      requirement: "Menschliche Aufsicht",
                      article: "Art. 14",
                      description: "Sicherstellung angemessener menschlicher Kontrolle",
                      details: [
                        "Human-in-the-loop Design",
                        "Human-on-the-loop Überwachung",
                        "Human-in-command Kontrolle",
                        "Interpretierbare Outputs"
                      ]
                    }
                  ].map((req, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: req.article }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: req.requirement })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: req.description }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: req.details.map((detail, didx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400 flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-emerald-400 mt-1 flex-shrink-0" }),
                      detail
                    ] }, didx)) })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-300 mb-6", children: "Genauigkeit, Robustheit und Cybersicherheit" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-3", children: "Genauigkeit" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Angemessenes Genauigkeitsniveau",
                        "Konsistente Leistung",
                        "Messbare Metriken",
                        "Benchmark-Vergleiche"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Target, { className: "h-3 w-3 text-blue-400" }),
                        item
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-300 mb-3", children: "Robustheit" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Resilienz gegen Fehler",
                        "Umgang mit Anomalien",
                        "Stabile Performance",
                        "Graceful Degradation"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3 text-emerald-400" }),
                        item
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-300 mb-3", children: "Cybersicherheit" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Schutz vor Angriffen",
                        "Sichere Datenübertragung",
                        "Zugriffskontrollen",
                        "Incident Response"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Lock, { className: "h-3 w-3 text-red-400" }),
                        item
                      ] }, idx)) })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "konformitaet", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Konformitätsbewertung" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("konformitaet"),
                    variant: completedSections.includes("konformitaet") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("konformitaet") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-purple-300 mb-6", children: "Konformitätsbewertungsverfahren" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-300 mb-3", children: "Internes Qualitätsmanagement (Anhang VI)" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-300", children: [
                          /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
                            /* @__PURE__ */ jsx("strong", { children: "Anwendbar für:" }),
                            " Die meisten Hochrisiko-KI-Systeme"
                          ] }),
                          /* @__PURE__ */ jsxs("p", { className: "mb-3", children: [
                            /* @__PURE__ */ jsx("strong", { children: "Ausnahmen:" }),
                            " Biometrische Identifikationssysteme"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                          "Qualitätsmanagementsystem implementieren",
                          "Technische Dokumentation erstellen",
                          "Automatische Protokollierung einrichten",
                          "EU-Konformitätserklärung ausstellen",
                          "CE-Kennzeichnung anbringen",
                          "Post-Market-Monitoring durchführen"
                        ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400 flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-emerald-400 mt-1 flex-shrink-0" }),
                          item
                        ] }, idx)) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-pink-300 mb-3", children: "Beteiligung Notifizierter Stellen (Anhang VII)" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-300", children: [
                          /* @__PURE__ */ jsxs("p", { className: "mb-2", children: [
                            /* @__PURE__ */ jsx("strong", { children: "Anwendbar für:" }),
                            " Biometrische Identifikationssysteme"
                          ] }),
                          /* @__PURE__ */ jsxs("p", { className: "mb-3", children: [
                            /* @__PURE__ */ jsx("strong", { children: "Zusätzlich zu:" }),
                            " Internem Qualitätsmanagement"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: [
                          "Technische Dokumentation prüfen lassen",
                          "Qualitätsmanagementsystem bewerten",
                          "Konformitätszertifikat erhalten",
                          "Jährliche Überwachung durchführen",
                          "Änderungen melden und bewerten lassen"
                        ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400 flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-pink-400 mt-1 flex-shrink-0" }),
                          item
                        ] }, idx)) })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-300 mb-6", children: "CE-Kennzeichnung" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-3", children: "Anbringung" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Sichtbar, lesbar und dauerhaft",
                        "Auf dem KI-System oder Verpackung",
                        "Mindesthöhe 5 mm",
                        "Bei digitalen Systemen: elektronisch"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400" }),
                        item
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-cyan-300 mb-3", children: "Bedeutung" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Konformität mit AI Act",
                        "Freier Verkehr in der EU",
                        "Herstellerverantwortung",
                        "Marktüberwachung ermöglichen"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Award, { className: "h-3 w-3 text-cyan-400" }),
                        item
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-300 mb-3", children: "Dokumentation" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "EU-Konformitätserklärung",
                        "Technische Dokumentation",
                        "Qualitätsmanagement-Unterlagen",
                        "10 Jahre aufbewahren"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-3 w-3 text-emerald-400" }),
                        item
                      ] }, idx)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Notifizierte Stellen" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Rolle und Aufgaben" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-3", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-300 mb-2", children: "Bewertungsaufgaben" }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm", children: [
                            "Technische Dokumentation prüfen",
                            "Qualitätsmanagementsystem bewerten",
                            "Konformitätszertifikate ausstellen",
                            "Überwachungsaudits durchführen"
                          ].map((task, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-blue-400" }),
                            task
                          ] }, idx)) })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-3", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-emerald-300 mb-2", children: "Qualifikationen" }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm", children: [
                            "Fachkompetenz in KI-Technologien",
                            "Unabhängigkeit und Unparteilichkeit",
                            "Akkreditierung nach ISO/IEC 17065",
                            "Regelmäßige Schulungen"
                          ].map((qual, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx(Award, { className: "h-2 w-2 text-emerald-400" }),
                            qual
                          ] }, idx)) })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Verfahren" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg", children: [
                          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm", children: "1" }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("p", { className: "font-semibold text-white text-sm", children: "Antragstellung" }),
                            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Vollständige Unterlagen einreichen" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg", children: [
                          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm", children: "2" }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("p", { className: "font-semibold text-white text-sm", children: "Bewertung" }),
                            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Technische Prüfung und Audit" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg", children: [
                          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm", children: "3" }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("p", { className: "font-semibold text-white text-sm", children: "Zertifizierung" }),
                            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Konformitätszertifikat ausstellen" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg", children: [
                          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm", children: "4" }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("p", { className: "font-semibold text-white text-sm", children: "Überwachung" }),
                            /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: "Jährliche Surveillance-Audits" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "transparenz", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Transparenzpflichten" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("transparenz"),
                    variant: completedSections.includes("transparenz") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("transparenz") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-yellow-300 mb-6", children: "Limited Risk AI-Systeme (Art. 50)" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-yellow-300 mb-3", children: "Betroffene Systeme" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Chatbots und virtuelle Assistenten",
                        "Emotionserkennungssysteme",
                        "Biometrische Kategorisierungssysteme",
                        "KI-Systeme zur Inhaltsgenerierung (Deepfakes)",
                        "KI-Systeme zur Bilderkennung"
                      ].map((system, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Eye, { className: "h-3 w-3 text-yellow-400" }),
                        system
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-300 mb-3", children: "Transparenzpflichten" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Nutzer über KI-Interaktion informieren",
                        "Klare und verständliche Informationen",
                        "Rechtzeitige Information vor Nutzung",
                        "KI-generierte Inhalte kennzeichnen",
                        "Opt-out Möglichkeiten bereitstellen"
                      ].map((obligation, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Info, { className: "h-3 w-3 text-orange-400" }),
                        obligation
                      ] }, idx)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-red-300 mb-6", children: "Deepfakes & Synthetische Inhalte" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-300 mb-3", children: "Audio-Deepfakes" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: "KI-generierte oder manipulierte Audioinhalte müssen eindeutig als solche gekennzeichnet werden." }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-xs", children: [
                          "Maschinenlesbare Kennzeichnung",
                          "Menschenlesbare Warnung",
                          "Metadaten-Einbettung",
                          "Watermarking-Technologien"
                        ].map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-400 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-red-400" }),
                          req
                        ] }, idx)) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-pink-300 mb-3", children: "Video-Deepfakes" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: "Manipulierte oder synthetische Videoinhalte erfordern besondere Kennzeichnung." }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-xs", children: [
                          "Visuelle Kennzeichnung im Video",
                          "Blockchain-basierte Verifikation",
                          "Digitale Signaturen",
                          "Provenance-Tracking"
                        ].map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-400 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-pink-400" }),
                          req
                        ] }, idx)) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-300 mb-3", children: "Text-Generierung" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: "KI-generierte Texte und Artikel müssen als maschinell erstellt erkennbar sein." }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-xs", children: [
                          "Disclaimer am Textanfang",
                          "Strukturierte Daten-Markup",
                          "API-Header für KI-Inhalte",
                          "Publishing-Standards einhalten"
                        ].map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-400 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-purple-400" }),
                          req
                        ] }, idx)) })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Best Practices für Transparenz" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Nutzerinformation" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        {
                          practice: "Proaktive Offenlegung",
                          description: "Nutzer vor der ersten Interaktion über KI-Einsatz informieren",
                          implementation: "Pop-up, Banner oder Disclaimer verwenden"
                        },
                        {
                          practice: "Verständliche Sprache",
                          description: "Technische Details in einfache Sprache übersetzen",
                          implementation: "Laienverständliche Erklärungen und Beispiele"
                        },
                        {
                          practice: "Granulare Kontrolle",
                          description: "Nutzer können spezifische KI-Features deaktivieren",
                          implementation: "Detaillierte Einstellungsoptionen anbieten"
                        }
                      ].map((practice, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-3", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-300 text-sm mb-1", children: practice.practice }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300 mb-2", children: practice.description }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 italic", children: practice.implementation })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Technische Umsetzung" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        {
                          tech: "Maschinenlesbare Labels",
                          description: "Strukturierte Metadaten für automatische Erkennung",
                          examples: "JSON-LD, RDFa, Dublin Core"
                        },
                        {
                          tech: "Digital Watermarking",
                          description: "Unsichtbare Kennzeichnung in Medieninhalten",
                          examples: "C2PA, Project Origin, Content Authenticity"
                        },
                        {
                          tech: "Provenance Tracking",
                          description: "Nachverfolgung der Entstehungsgeschichte",
                          examples: "Blockchain, Hash-Chains, Digital Certificates"
                        }
                      ].map((tech, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-3", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-emerald-300 text-sm mb-1", children: tech.tech }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300 mb-2", children: tech.description }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 italic", children: tech.examples })
                      ] }, idx)) })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "technische-standards", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Technische Standards & Normen" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("technische-standards"),
                    variant: completedSections.includes("technische-standards") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("technische-standards") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-300 mb-6", children: "Harmonisierte Normen für AI Act" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    {
                      standard: "ISO/IEC 23053:2022",
                      title: "Framework for AI systems using ML",
                      scope: "Allgemeiner Rahmen für KI-Systeme",
                      relevance: "Grundlage für alle AI Act Compliance",
                      status: "Published",
                      keyAspects: [
                        "AI system lifecycle management",
                        "Risk management frameworks",
                        "Quality assurance processes",
                        "Documentation requirements",
                        "Stakeholder identification"
                      ]
                    },
                    {
                      standard: "ISO/IEC 23894:2023",
                      title: "AI risk management",
                      scope: "Spezifische Risikomanagement-Prozesse",
                      relevance: "Hochrisiko-KI Compliance",
                      status: "Published",
                      keyAspects: [
                        "Risk identification methodologies",
                        "Risk assessment procedures",
                        "Risk mitigation strategies",
                        "Continuous monitoring",
                        "Risk communication"
                      ]
                    },
                    {
                      standard: "ISO/IEC 25059:2023",
                      title: "AI system quality measurement",
                      scope: "Qualitätsmessung und -bewertung",
                      relevance: "Performance und Robustheit",
                      status: "Published",
                      keyAspects: [
                        "Quality characteristics definition",
                        "Measurement frameworks",
                        "Evaluation methodologies",
                        "Performance benchmarking",
                        "Quality reporting"
                      ]
                    },
                    {
                      standard: "ISO/IEC 23090-24:2024",
                      title: "AI fairness and bias assessment",
                      scope: "Fairness und Bias-Bewertung",
                      relevance: "Non-discrimination requirements",
                      status: "Draft",
                      keyAspects: [
                        "Bias detection methods",
                        "Fairness metrics definition",
                        "Assessment procedures",
                        "Mitigation strategies",
                        "Monitoring frameworks"
                      ]
                    }
                  ].map((standard) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: standard.standard }),
                      /* @__PURE__ */ jsx(Badge, { className: cn(
                        standard.status === "Published" && "bg-green-500/20 text-green-300",
                        standard.status === "Draft" && "bg-yellow-500/20 text-yellow-300"
                      ), children: standard.status })
                    ] }),
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-300 mb-2", children: standard.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: standard.scope }),
                    /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400 mb-4", children: [
                      "Relevanz: ",
                      standard.relevance
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h6", { className: "text-sm font-semibold text-slate-300 mb-2", children: "Kernaspekte:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: standard.keyAspects.map((aspect, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }),
                        aspect
                      ] }, idx)) })
                    ] })
                  ] }, standard.standard)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Technical Implementation Guidelines" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    {
                      category: "Data Governance",
                      icon: Database,
                      standards: ["ISO/IEC 25012", "ISO 8000", "FAIR Principles"],
                      requirements: [
                        "Data quality management systems",
                        "Data lineage and provenance tracking",
                        "Bias detection in training data",
                        "Data minimization principles",
                        "Privacy-preserving techniques"
                      ]
                    },
                    {
                      category: "Model Development",
                      icon: BrainCog,
                      standards: ["MLOps Standards", "IEEE 2857", "ISO/IEC 25010"],
                      requirements: [
                        "Reproducible training processes",
                        "Version control for models",
                        "Automated testing pipelines",
                        "Performance monitoring",
                        "Model validation frameworks"
                      ]
                    },
                    {
                      category: "Deployment & Operations",
                      icon: Server,
                      standards: ["ISO/IEC 27001", "NIST AI RMF", "ISO 9001"],
                      requirements: [
                        "Secure deployment practices",
                        "Runtime monitoring systems",
                        "Incident response procedures",
                        "Change management processes",
                        "Business continuity planning"
                      ]
                    }
                  ].map((guideline) => {
                    const IconComponent = guideline.icon;
                    return /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                        /* @__PURE__ */ jsx(IconComponent, { className: "h-5 w-5 text-blue-400" }),
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: guideline.category })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                        /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-2", children: "Applicable Standards:" }),
                        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: guideline.standards.map((standard) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: standard }, standard)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "text-sm font-semibold text-slate-300 mb-2", children: "Key Requirements:" }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: guideline.requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }),
                          req
                        ] }, idx)) })
                      ] })
                    ] }, guideline.category);
                  }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Konformitätsbewertungsverfahren" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Internal Quality Management (Annex VI)" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-emerald-300 mb-2", children: "Applicability" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "For high-risk AI systems listed in Annex III, except biometric systems" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-300 mb-2", children: "Requirements" }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm", children: [
                            "Quality management system implementation",
                            "Technical documentation preparation",
                            "Automatic logging system setup",
                            "EU conformity declaration",
                            "CE marking application",
                            "Post-market monitoring system"
                          ].map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-emerald-400" }),
                            req
                          ] }, idx)) })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Notified Body Assessment (Annex VII)" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-300 mb-2", children: "Applicability" }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300", children: "For biometric identification and categorization systems" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-300 mb-2", children: "Process" }),
                          /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm", children: [
                            "Technical documentation submission",
                            "Quality management system audit",
                            "Design examination by notified body",
                            "Testing and validation procedures",
                            "EU type examination certificate",
                            "Annual surveillance audits"
                          ].map((step, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-purple-400" }),
                            step
                          ] }, idx)) })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "governance", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "AI Governance" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("governance"),
                    variant: completedSections.includes("governance") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("governance") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-indigo-300 mb-6", children: "AI Governance Framework" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-indigo-300 mb-3", children: "Strategische Ebene" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "AI-Strategie und -Vision",
                        "Board-Level Oversight",
                        "Risikotoleranz definieren",
                        "Ethische Leitlinien",
                        "Business Impact Assessment"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Target, { className: "h-3 w-3 text-indigo-400" }),
                        item
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-300 mb-3", children: "Operative Ebene" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "AI-Governance-Komitee",
                        "Cross-funktionale Teams",
                        "Prozesse und Verfahren",
                        "KPI-Monitoring",
                        "Incident Management"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Settings, { className: "h-3 w-3 text-purple-400" }),
                        item
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-pink-300 mb-3", children: "Technische Ebene" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "MLOps und DevOps",
                        "Model Lifecycle Management",
                        "Continuous Monitoring",
                        "Automated Testing",
                        "Version Control"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Code, { className: "h-3 w-3 text-pink-400" }),
                        item
                      ] }, idx)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Rollen und Verantwortlichkeiten" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    {
                      role: "Chief AI Officer (CAIO)",
                      responsibilities: [
                        "AI-Strategie entwickeln und umsetzen",
                        "Risikomanagement überwachen",
                        "Compliance sicherstellen",
                        "Stakeholder-Management"
                      ],
                      skills: ["Technische Expertise", "Business Acumen", "Regulatory Knowledge"]
                    },
                    {
                      role: "AI Ethics Officer",
                      responsibilities: [
                        "Ethische Richtlinien entwickeln",
                        "Bias Detection und Mitigation",
                        "Fairness Assessments",
                        "Stakeholder Engagement"
                      ],
                      skills: ["Ethik und Philosophie", "AI Fairness", "Kommunikation"]
                    },
                    {
                      role: "AI Risk Manager",
                      responsibilities: [
                        "Risikoidentifikation und -bewertung",
                        "Mitigation Strategies",
                        "Incident Response",
                        "Regulatory Reporting"
                      ],
                      skills: ["Risk Management", "Regulatory Compliance", "Data Analysis"]
                    },
                    {
                      role: "AI Compliance Manager",
                      responsibilities: [
                        "Regulatory Mapping",
                        "Audit Coordination",
                        "Documentation Management",
                        "Training und Awareness"
                      ],
                      skills: ["Legal Expertise", "Process Management", "Audit Skills"]
                    }
                  ].map((role, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-3", children: role.role }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-2", children: "Verantwortlichkeiten" }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: role.responsibilities.map((resp, ridx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-300 flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-emerald-400 mt-1 flex-shrink-0" }),
                          resp
                        ] }, ridx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white text-sm mb-2", children: "Schlüssel-Skills" }),
                        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: role.skills.map((skill, sidx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs px-2 py-1", children: skill }, sidx)) })
                      ] })
                    ] })
                  ] }, idx)) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "dokumentation", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Dokumentation" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("dokumentation"),
                    variant: completedSections.includes("dokumentation") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("dokumentation") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-green-300 mb-6", children: "Technische Dokumentation (Anhang IV)" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-300 mb-3", children: "Allgemeine Informationen" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Name und Kontaktdaten des Anbieters",
                        "Name und Kontaktdaten des Bevollmächtigten",
                        "Beschreibung des KI-Systems",
                        "Zweckbestimmung des Systems",
                        "EU-Konformitätserklärung"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-3 w-3 text-green-400 mt-1 flex-shrink-0" }),
                        item
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-teal-300 mb-3", children: "Technische Spezifikationen" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Detaillierte Beschreibung der Systemarchitektur",
                        "Entwicklungsmethodik und -verfahren",
                        "Verwendete Algorithmen und Techniken",
                        "Datenquellen und Trainingsverfahren",
                        "Systemintegration und Schnittstellen"
                      ].map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Database, { className: "h-3 w-3 text-teal-400 mt-1 flex-shrink-0" }),
                        item
                      ] }, idx)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Dokumentations-Templates" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    {
                      template: "System Overview Document",
                      description: "Comprehensive overview of the AI system",
                      sections: [
                        "Executive Summary",
                        "System Architecture",
                        "Key Components",
                        "Performance Metrics",
                        "Risk Assessment"
                      ]
                    },
                    {
                      template: "Data Management Plan",
                      description: "Documentation of data handling procedures",
                      sections: [
                        "Data Sources",
                        "Data Quality Measures",
                        "Privacy Protection",
                        "Bias Mitigation",
                        "Data Lifecycle"
                      ]
                    },
                    {
                      template: "Risk Management Report",
                      description: "Comprehensive risk analysis and mitigation",
                      sections: [
                        "Risk Identification",
                        "Risk Assessment",
                        "Mitigation Strategies",
                        "Monitoring Plan",
                        "Incident Response"
                      ]
                    }
                  ].map((template, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-2", children: template.template }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: template.description }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: template.sections.map((section, sidx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-emerald-400" }),
                      section
                    ] }, sidx)) })
                  ] }, idx)) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "bussgelder", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Bußgelder" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("bussgelder"),
                    variant: completedSections.includes("bussgelder") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("bussgelder") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-red-300 mb-6", children: "Bußgeld-Kategorien nach Art. 99" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-300 mb-3", children: "Höchste Stufe" }),
                      /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-red-400", children: "€35 Mio" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-300", children: "oder 7% des Jahresumsatzes" })
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Verbotene KI-Praktiken (Art. 5)",
                        "Nichteinhaltung Datenqualität",
                        "Mangelhafte menschliche Aufsicht"
                      ].map((violation, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-red-400 mt-1 flex-shrink-0" }),
                        violation
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-300 mb-3", children: "Mittlere Stufe" }),
                      /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-orange-400", children: "€15 Mio" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-300", children: "oder 3% des Jahresumsatzes" })
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Verstöße gegen Hochrisiko-Anforderungen",
                        "Mangelhafte CE-Kennzeichnung",
                        "Unzureichende Dokumentation"
                      ].map((violation, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(AlertCircle, { className: "h-3 w-3 text-orange-400 mt-1 flex-shrink-0" }),
                        violation
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-yellow-300 mb-3", children: "Niedrigste Stufe" }),
                      /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-400", children: "€7,5 Mio" }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-300", children: "oder 1,5% des Jahresumsatzes" })
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Verstöße gegen Transparenzpflichten",
                        "Unzureichende Kennzeichnung",
                        "Mangelhafte Kooperation"
                      ].map((violation, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Info, { className: "h-3 w-3 text-yellow-400 mt-1 flex-shrink-0" }),
                        violation
                      ] }, idx)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Enforcement und Marktüberwachung" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Zuständige Behörden" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        {
                          authority: "Nationale Marktüberwachungsbehörden",
                          responsibilities: [
                            "Marktüberwachung und Kontrollen",
                            "Bußgeldverfahren einleiten",
                            "Produktrückrufe anordnen",
                            "Verkaufsverbote verhängen"
                          ]
                        },
                        {
                          authority: "Europäisches AI Office",
                          responsibilities: [
                            "Koordination zwischen Mitgliedstaaten",
                            "Harmonisierte Standards",
                            "Guidance Documents",
                            "Internationale Kooperation"
                          ]
                        }
                      ].map((auth, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-3", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-300 text-sm mb-2", children: auth.authority }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: auth.responsibilities.map((resp, ridx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400 flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-emerald-400 mt-1 flex-shrink-0" }),
                          resp
                        ] }, ridx)) })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Compliance-Maßnahmen" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        {
                          measure: "Proaktive Compliance",
                          description: "Vorbeugende Maßnahmen implementieren",
                          actions: ["Regular Compliance Audits", "Staff Training", "Process Documentation"]
                        },
                        {
                          measure: "Incident Response",
                          description: "Schnelle Reaktion auf Compliance-Verstöße",
                          actions: ["Sofortige Korrekturmaßnahmen", "Behörden informieren", "Root Cause Analysis"]
                        },
                        {
                          measure: "Legal Defense",
                          description: "Vorbereitung auf Enforcement-Verfahren",
                          actions: ["Legal Counsel", "Evidence Preservation", "Mitigation Strategies"]
                        }
                      ].map((measure, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-3", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-emerald-300 text-sm mb-1", children: measure.measure }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300 mb-2", children: measure.description }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: measure.actions.map((action, aidx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-2 w-2 text-emerald-400" }),
                          action
                        ] }, aidx)) })
                      ] }, idx)) })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "innovation", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Innovation & Sandboxes" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("innovation"),
                    variant: completedSections.includes("innovation") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("innovation") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-cyan-300 mb-6", children: "AI Regulatory Sandboxes (Art. 57)" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-cyan-300 mb-3", children: "Zweck und Vorteile" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Kontrollierte Testumgebung für innovative KI",
                        "Reduzierte regulatorische Unsicherheit",
                        "Enge Zusammenarbeit mit Aufsichtsbehörden",
                        "Proof-of-Concept für neue KI-Anwendungen",
                        "Learning und Best Practice Development"
                      ].map((benefit, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Lightbulb, { className: "h-3 w-3 text-cyan-400 mt-1 flex-shrink-0" }),
                        benefit
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-3", children: "Teilnahme-Voraussetzungen" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "Innovative KI-Systeme entwickeln",
                        "Hohe Komplexität oder Neuartigkeit",
                        "Potenzial für Marktreife",
                        "Bereitschaft zur Kooperation",
                        "Ausreichende Ressourcen für Tests"
                      ].map((requirement, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-3 w-3 text-blue-400 mt-1 flex-shrink-0" }),
                        requirement
                      ] }, idx)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Unterstützungsmaßnahmen für Innovation" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    {
                      measure: "Codes of Practice",
                      description: "Freiwillige Verhaltenskodizes für innovative Ansätze",
                      features: [
                        "Industry-led Standards",
                        "Best Practice Sharing",
                        "Continuous Improvement",
                        "Market Recognition"
                      ]
                    },
                    {
                      measure: "Testing Framework",
                      description: "Strukturierte Testverfahren für neue KI-Systeme",
                      features: [
                        "Standardized Benchmarks",
                        "Safety Testing Protocols",
                        "Performance Metrics",
                        "Risk Assessment Tools"
                      ]
                    },
                    {
                      measure: "Innovation Hubs",
                      description: "Zentren für KI-Innovation und Compliance",
                      features: [
                        "Expert Consultation",
                        "Regulatory Guidance",
                        "Technology Transfer",
                        "Startup Support"
                      ]
                    }
                  ].map((measure, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-300 mb-2", children: measure.measure }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: measure.description }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: measure.features.map((feature, fidx) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-slate-400 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Sparkles, { className: "h-2 w-2 text-emerald-400" }),
                      feature
                    ] }, fidx)) })
                  ] }, idx)) })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "zertifizierung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Zertifizierung" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("zertifizierung"),
                    variant: completedSections.includes("zertifizierung") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("zertifizierung") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-purple-300 mb-6", children: "Zertifizierungsprozess" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                    {
                      step: 1,
                      title: "Vorbereitung",
                      description: "Vollständige Dokumentation und interne Audits",
                      duration: "2-4 Wochen",
                      activities: ["Gap Analysis", "Dokumentation vervollständigen", "Interne Reviews", "Team Training"]
                    },
                    {
                      step: 2,
                      title: "Antragstellung",
                      description: "Formale Einreichung bei notifizierter Stelle",
                      duration: "1-2 Wochen",
                      activities: ["Notified Body auswählen", "Antragsformulare", "Unterlagen einreichen", "Erstbewertung"]
                    },
                    {
                      step: 3,
                      title: "Assessment",
                      description: "Technische Prüfung und Audit vor Ort",
                      duration: "4-8 Wochen",
                      activities: ["Dokumentenprüfung", "Site Audit", "Technical Testing", "Compliance Verification"]
                    },
                    {
                      step: 4,
                      title: "Zertifikat",
                      description: "Ausstellung des Konformitätszertifikats",
                      duration: "1-2 Wochen",
                      activities: ["Final Report", "Certificate Issuance", "CE Marking", "Market Entry"]
                    }
                  ].map((step, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0", children: step.step }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: step.title }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: step.duration })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-3", children: step.description }),
                      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: step.activities.map((activity, aidx) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs px-2 py-1", children: activity }, aidx)) })
                    ] })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Zertifizierungs-Optionen" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "AI Act Compliance Zertifizierung" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        {
                          type: "Hochrisiko-System Zertifizierung",
                          scope: "Vollständige AI Act Compliance für Hochrisiko-KI",
                          standards: ["AI Act Art. 8-15", "Anhang III/IV", "ISO/IEC 23053"],
                          validity: "3 Jahre"
                        },
                        {
                          type: "General Purpose AI Zertifizierung",
                          scope: "Spezielle Anforderungen für Foundation Models",
                          standards: ["AI Act Art. 51", "Systemic Risk Assessment", "Safety Measures"],
                          validity: "2 Jahre"
                        }
                      ].map((cert, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-300 text-sm", children: cert.type }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: cert.validity })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300 mb-2", children: cert.scope }),
                        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: cert.standards.map((standard, sidx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: standard }, sidx)) })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Zusätzliche Zertifizierungen" }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                        {
                          cert: "ISO/IEC 27001",
                          purpose: "Information Security Management",
                          benefit: "Credibility für Cybersecurity-Maßnahmen"
                        },
                        {
                          cert: "ISO/IEC 23053",
                          purpose: "AI Systems Framework",
                          benefit: "Internationale AI-Standards Compliance"
                        },
                        {
                          cert: "SOC 2 Type II",
                          purpose: "Service Organization Controls",
                          benefit: "Vertrauen bei B2B-Kunden"
                        },
                        {
                          cert: "GDPR Compliance",
                          purpose: "Data Protection Compliance",
                          benefit: "EU-weite Datenschutz-Compliance"
                        }
                      ].map((cert, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-3", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-emerald-300 text-sm mb-1", children: cert.cert }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-300 mb-1", children: cert.purpose }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 italic", children: cert.benefit })
                      ] }, idx)) })
                    ] })
                  ] })
                ] })
              ] })
            ] }) })
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsx("section", { id: "ressourcen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Ressourcen" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => handleSectionComplete("ressourcen"),
                    variant: completedSections.includes("ressourcen") ? "default" : "outline",
                    size: "sm",
                    children: [
                      completedSections.includes("ressourcen") ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4 mr-2" }),
                      "Als gelesen markieren"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-blue-300 mb-6", children: "Offizielle Ressourcen" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-300 mb-3", children: "EU-Quellen" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "EU AI Act (Regulation 2024/1689)",
                        "AI Office (European Commission)",
                        "ENISA AI Guidelines",
                        "European AI Alliance",
                        "AI Standardization Roadmap"
                      ].map((resource, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(ExternalLink, { className: "h-3 w-3 text-blue-400" }),
                        resource
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-indigo-300 mb-3", children: "Standards & Guidelines" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2 text-sm", children: [
                        "ISO/IEC 23053:2022 (AI Framework)",
                        "ISO/IEC 23894:2023 (Risk Management)",
                        "CEN-CENELEC Standards",
                        "IEEE AI Ethics Standards",
                        "NIST AI Risk Management Framework"
                      ].map((standard, idx) => /* @__PURE__ */ jsxs("li", { className: "text-slate-300 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-3 w-3 text-indigo-400" }),
                        standard
                      ] }, idx)) })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-800/50 rounded-xl p-6 border border-slate-700", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-6", children: "Tools & Templates" }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                    {
                      category: "Assessment Tools",
                      tools: [
                        "AI Act Self-Assessment",
                        "Risk Classification Tool",
                        "Compliance Checklist",
                        "Gap Analysis Template"
                      ]
                    },
                    {
                      category: "Documentation Templates",
                      tools: [
                        "Technical Documentation",
                        "Risk Management Plan",
                        "Data Management Plan",
                        "EU Declaration of Conformity"
                      ]
                    },
                    {
                      category: "Implementation Guides",
                      tools: [
                        "Hochrisiko Implementation",
                        "Transparency Requirements",
                        "CE Marking Guide",
                        "Audit Preparation Checklist"
                      ]
                    }
                  ].map((category, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-900/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-300 mb-3", children: category.category }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: category.tools.map((tool, tidx) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-slate-300 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Download, { className: "h-3 w-3 text-emerald-400" }),
                      tool
                    ] }, tidx)) })
                  ] }, idx)) })
                ] })
              ] })
            ] }) })
          }
        ) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  EuAiActGuide as default
};
