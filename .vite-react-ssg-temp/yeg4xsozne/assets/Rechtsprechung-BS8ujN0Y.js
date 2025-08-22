import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { Globe, Users, BarChart3, Scale, Gavel, TrendingUp, Euro, FileText, Star, Target, Shield, Database, Clock, Calendar, ChevronDown, ChevronRight, Lightbulb, CheckCircle2, AlertTriangle, Check, Download, BookOpen, Share2, Bookmark, ArrowRight, PieChart, Flag, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const Rechtsprechung = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [selectedCourt, setSelectedCourt] = useState("all");
  const [expandedCase, setExpandedCase] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const categories = [
    { id: "all", name: "Alle Bereiche", icon: Scale, count: 28 },
    { id: "dsgvo", name: "DSGVO & Datenschutz", icon: Shield, count: 18 },
    { id: "cookies", name: "Cookie-Rechtsprechung", icon: Database, count: 6 },
    { id: "bussgeld", name: "Bußgeld-Verfahren", icon: Euro, count: 4 }
  ];
  const courts = [
    { id: "all", name: "Alle Gerichte", count: 28 },
    { id: "eugh", name: "EuGH", count: 8 },
    { id: "bgh", name: "BGH", count: 5 },
    { id: "vg", name: "Verwaltungsgerichte", count: 7 },
    { id: "lg", name: "Landgerichte", count: 8 }
  ];
  const years = ["2024", "2023", "2022", "2021"];
  const landmarkCases = [
    {
      id: "schrems-ii",
      title: "Schrems II (EuGH)",
      subtitle: "Privacy Shield für ungültig erklärt",
      date: "16. Juli 2020",
      court: "EuGH",
      caseNumber: "C-311/18",
      category: "dsgvo",
      impact: "SEHR HOCH",
      relevance: "Fundamental",
      icon: Globe,
      color: "from-red-500 to-orange-500",
      description: "Der EuGH hat das Privacy Shield-Abkommen für ungültig erklärt und strengere Anforderungen für Datenübertragungen in die USA gestellt.",
      keyFindings: [
        "Privacy Shield bietet kein angemessenes Schutzniveau",
        "Standardvertragsklauseln bleiben gültig, aber mit Auflagen",
        "Einzelfallprüfung bei Drittlandtransfers erforderlich",
        "US-Überwachungsgesetze problematisch für EU-Bürger"
      ],
      practicalImpact: [
        "Stopp aller Privacy Shield-basierten Transfers",
        "Neubewertung aller US-Dienstleister erforderlich",
        "Verstärkte Due Diligence bei SCCs",
        "Mögliche Lokalisierung von Daten in EU"
      ],
      affectedCompanies: ["Facebook", "Google", "Microsoft", "Amazon", "Alle US-Cloud-Provider"],
      complianceActions: [
        "Transfer Impact Assessment durchführen",
        "Standardvertragsklauseln implementieren",
        "Zusätzliche Schutzmaßnahmen evaluieren",
        "Lokale Alternativen prüfen"
      ],
      timeline: [
        { date: "2020-07-16", event: "EuGH Urteil verkündet" },
        { date: "2020-08-24", event: "Irish DPC beginnt Facebook-Untersuchung" },
        { date: "2021-06-04", event: "Neue Standard-Vertragsklauseln" },
        { date: "2022-09-12", event: "Irish DPC stoppt Meta-Transfers" }
      ],
      relatedCases: ["Facebook Ireland vs DPC", "Google Analytics Entscheidungen"],
      downloadLinks: [
        { title: "Volltext Urteil (DE)", url: "#" },
        { title: "Transfer Impact Assessment Tool", url: "#" },
        { title: "SCC Implementation Guide", url: "#" }
      ]
    },
    {
      id: "facebook-fanpage",
      title: "Facebook Fanpage (EuGH)",
      subtitle: "Gemeinsame Verantwortlichkeit bei Fanpages",
      date: "5. Juni 2018",
      court: "EuGH",
      caseNumber: "C-210/16",
      category: "dsgvo",
      impact: "HOCH",
      relevance: "Grundlegend",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      description: "Fanpage-Betreiber sind gemeinsam mit Facebook für die Datenverarbeitung verantwortlich.",
      keyFindings: [
        "Fanpage-Betreiber sind Joint Controller",
        "Mitverantwortung trotz begrenzter Einflussmöglichkeiten",
        "Behörden können Fanpage-Betreiber direkt belangen",
        "Joint Controller Agreement erforderlich"
      ],
      practicalImpact: [
        "Alle Fanpage-Betreiber rechtlich verantwortlich",
        "Joint Controller Agreements notwendig",
        "Erweiterte Informationspflichten",
        "Mögliche Bußgelder für Fanpage-Betreiber"
      ],
      affectedCompanies: ["Alle Unternehmen mit Facebook Fanpages"],
      complianceActions: [
        "Joint Controller Agreement abschließen",
        "Datenschutzerklärung anpassen",
        "Page Insights Nutzung dokumentieren",
        "Alternative Kanäle evaluieren"
      ]
    },
    {
      id: "google-analytics-austria",
      title: "Google Analytics (Österreich)",
      subtitle: "GA4 verstößt gegen DSGVO",
      date: "22. Dezember 2021",
      court: "Österreichische DSB",
      caseNumber: "DSB-D155.027",
      category: "dsgvo",
      impact: "HOCH",
      relevance: "Aktuell",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      description: "Österreichische Datenschutzbehörde erklärt Google Analytics für DSGVO-widrig.",
      keyFindings: [
        "Datenübertragung in USA unzulässig",
        "IP-Anonymisierung unzureichend",
        "Keine angemessenen Schutzmaßnahmen",
        "Verstoß gegen DSGVO Art. 44 ff."
      ],
      practicalImpact: [
        "Google Analytics Nutzung risikobehaftet",
        "Ähnliche Entscheidungen in anderen EU-Ländern",
        "Notwendigkeit für EU-Alternativen",
        "Verstärkte Behördenprüfungen"
      ],
      affectedCompanies: ["Alle GA-Nutzer in der EU"],
      complianceActions: [
        "Risk Assessment für GA durchführen",
        "EU-basierte Alternativen evaluieren",
        "Server-side Tracking implementieren",
        "Consent Management verstärken"
      ]
    }
  ];
  const recentDecisions = [
    {
      id: "meta-irland-2024",
      title: "Meta Irland - €1.2 Mrd Bußgeld",
      date: "22. Mai 2023",
      court: "Irish DPC",
      amount: "€1.2 Milliarden",
      category: "bussgeld",
      severity: "KRITISCH",
      description: "Höchstes DSGVO-Bußgeld der Geschichte für rechtswidrige Datenübertragungen in die USA.",
      violations: ["Art. 46 DSGVO - Rechtswidrige Drittlandübertragung"],
      impact: "Präzedenzfall für US-Transfers",
      link: "/wissen/rechtsprechung/meta-irland-2024"
    },
    {
      id: "amazon-luxemburg-2021",
      title: "Amazon - €746 Mio Bußgeld",
      date: "30. Juli 2021",
      court: "CNPD Luxemburg",
      amount: "€746 Millionen",
      category: "bussgeld",
      severity: "KRITISCH",
      description: "Bußgeld wegen Verstößen bei der Verarbeitung personenbezogener Daten für Werbezwecke.",
      violations: ["Art. 6 DSGVO - Rechtsgrundlage für Werbung"],
      impact: "Verschärfte Regeln für Targeted Advertising",
      link: "/wissen/rechtsprechung/amazon-luxemburg-2021"
    },
    {
      id: "whatsapp-irland-2021",
      title: "WhatsApp - €225 Mio Bußgeld",
      date: "2. September 2021",
      court: "Irish DPC",
      amount: "€225 Millionen",
      category: "bussgeld",
      severity: "HOCH",
      description: "Bußgeld wegen mangelnder Transparenz bei der Datenverarbeitung.",
      violations: ["Art. 12-14 DSGVO - Informationspflichten"],
      impact: "Strengere Anforderungen an Transparenz",
      link: "/wissen/rechtsprechung/whatsapp-irland-2021"
    }
  ];
  const cookieDecisions = [
    {
      id: "planet49-eugh",
      title: "Planet49 - Cookie Consent",
      date: "1. Oktober 2019",
      court: "EuGH",
      caseNumber: "C-673/17",
      impact: "Fundamental für Cookie-Rechtsprechung",
      description: "Voreingestellte Checkboxen für Cookies sind unzulässig - aktive Einwilligung erforderlich.",
      requirements: [
        "Aktive Einwilligung ohne vorausgefüllte Checkboxen",
        "Spezifische Information über Cookie-Zwecke",
        "Unterscheidung zwischen technisch notwendigen und anderen Cookies",
        "Widerrufsmöglichkeit der Einwilligung"
      ],
      practicalChanges: [
        "Redesign aller Cookie-Banner",
        "Granulare Einwilligungsoptionen",
        "Verbesserte Cookie-Dokumentation",
        "Regelmäßige Consent-Audits"
      ]
    },
    {
      id: "google-fonts-lg-muenchen",
      title: "Google Fonts - LG München",
      date: "20. Januar 2022",
      court: "LG München I",
      caseNumber: "3 O 17493/20",
      impact: "Praxisrelevant für Webentwicklung",
      description: "Einbindung von Google Fonts ohne Einwilligung verstößt gegen DSGVO.",
      technicalIssues: [
        "Automatische IP-Übertragung an Google",
        "Keine Einwilligung der Website-Besucher",
        "Drittlandtransfer ohne angemessene Garantien",
        "Verstoß gegen Prinzip der Datenminimierung"
      ],
      solutions: [
        "Lokale Hosting von Webfonts",
        "Self-hosted Font-Lösungen",
        "Consent-Management für externe Fonts",
        "Privacy-by-Design Webentwicklung"
      ]
    }
  ];
  const trendAnalysis = {
    2024: {
      totalFines: "€2.1 Milliarden",
      casesCount: 847,
      avgFine: "€2.5 Millionen",
      trends: [
        "Verstärkte Verfolgung von US-Transfers",
        "Höhere Bußgelder bei Wiederholungstätern",
        "Fokus auf Cookie-Compliance",
        "KI/AI-Regulierung beginnt"
      ],
      topViolations: [
        { violation: "Drittlandtransfers", percentage: 35, cases: 296 },
        { violation: "Mangelnde Transparenz", percentage: 28, cases: 237 },
        { violation: "Fehlende Rechtsgrundlage", percentage: 22, cases: 186 },
        { violation: "Unzureichende TOM", percentage: 15, cases: 127 }
      ]
    }
  };
  const upcomingCases = [
    {
      title: "Google vs. CNIL (Frankreich)",
      expectedDate: "Q2 2024",
      court: "EuGH",
      topic: "Right to be Forgotten global scope",
      description: "Entscheidung über weltweite Gültigkeit des Rechts auf Vergessenwerden",
      implications: "Global vs. EU-only delisting"
    },
    {
      title: "Meta AI Training Case",
      expectedDate: "Q3 2024",
      court: "Irish DPC",
      topic: "AI Training ohne Consent",
      description: "Rechtmäßigkeit von KI-Training mit User-Generated Content",
      implications: "Grundlagen für AI/DSGVO Compliance"
    }
  ];
  const filteredCases = landmarkCases.filter((case_) => {
    const categoryMatch = selectedCategory === "all" || case_.category === selectedCategory;
    const courtMatch = selectedCourt === "all" || case_.court.toLowerCase().includes(selectedCourt);
    return categoryMatch && courtMatch;
  });
  const getImpactColor = (impact) => {
    switch (impact) {
      case "SEHR HOCH":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
      case "HOCH":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100";
      case "MITTEL":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
      case "NIEDRIG":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
    }
  };
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "KRITISCH":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse";
      case "HOCH":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100";
      case "MITTEL":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100";
    }
  };
  const toggleCaseExpansion = (caseId) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        ref: heroRef,
        style: { y, opacity },
        className: "relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "text-center mb-20",
              children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { delay: 0.2, type: "spring", stiffness: 200 },
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20",
                    children: [
                      /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-purple-400 animate-spin-slow" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-purple-300", children: "Legal Intelligence" }),
                      /* @__PURE__ */ jsx(Gavel, { className: "h-5 w-5 text-pink-400 animate-pulse" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.4, duration: 0.8 },
                    className: "text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Rechtsprechung" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent", children: "& Updates" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.6, duration: 0.8 },
                    className: "text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12",
                    children: [
                      "Aktuelle ",
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-300", children: "Gerichtsurteile" }),
                      ", neue Regelungen und deren",
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-pink-300", children: " praktische Auswirkungen" }),
                      " für Ihr Unternehmen."
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.8, duration: 0.8 },
                    className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                    children: [
                      /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300", children: [
                        /* @__PURE__ */ jsx(Scale, { className: "mr-2 h-5 w-5" }),
                        "Aktuelle Urteile entdecken"
                      ] }) }),
                      /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: [
                        /* @__PURE__ */ jsx(TrendingUp, { className: "mr-2 h-5 w-5" }),
                        "Trend-Analyse ansehen"
                      ] }) })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 1, duration: 0.8 },
              className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto",
              children: [
                { value: "€2.1B", label: "Bußgelder 2024", sublabel: "DSGVO Gesamt", icon: Euro, color: "from-red-500 to-orange-500" },
                { value: "847", label: "Neue Fälle", sublabel: "EU-weit 2024", icon: FileText, color: "from-orange-500 to-yellow-500" },
                { value: "28", label: "Landmark Cases", sublabel: "Fundamental wichtig", icon: Star, color: "from-yellow-500 to-green-500" },
                { value: "96%", label: "Erfolgsquote", sublabel: "Bei Umsetzung", icon: Target, color: "from-green-500 to-blue-500" }
              ].map((stat, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 1.2 + index * 0.1, duration: 0.6 },
                  className: "relative group",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300` }),
                    /* @__PURE__ */ jsxs("div", { className: "relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300", children: [
                      /* @__PURE__ */ jsx("div", { className: `inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`, children: /* @__PURE__ */ jsx(stat.icon, { className: "h-6 w-6 text-white" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-bold text-white mb-1", children: stat.value }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-slate-200 mb-1", children: stat.label }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-slate-400", children: stat.sublabel })
                    ] })
                  ]
                },
                index
              ))
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Rechtsgebiet" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: categories.map((category) => /* @__PURE__ */ jsxs(
          motion.button,
          {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            onClick: () => setSelectedCategory(category.id),
            className: cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300",
              selectedCategory === category.id ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
            ),
            children: [
              /* @__PURE__ */ jsx(category.icon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: category.name }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-slate-600 text-slate-200 border-0 text-xs", children: category.count })
            ]
          },
          category.id
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Gericht" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: courts.map((court) => /* @__PURE__ */ jsxs(
          motion.button,
          {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            onClick: () => setSelectedCourt(court.id),
            className: cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300",
              selectedCourt === court.id ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
            ),
            children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm", children: court.name }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-slate-600 text-slate-200 border-0 text-xs", children: court.count })
            ]
          },
          court.id
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-slate-300 mb-3", children: "Jahr" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: years.map((year) => /* @__PURE__ */ jsx(
          motion.button,
          {
            whileHover: { scale: 1.05 },
            whileTap: { scale: 0.95 },
            onClick: () => setSelectedYear(year),
            className: cn(
              "px-4 py-2 rounded-lg font-medium transition-all duration-300",
              selectedYear === year ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg" : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
            ),
            children: /* @__PURE__ */ jsx("span", { className: "text-sm", children: year })
          },
          year
        )) })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "landmark", className: "space-y-8", children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "grid grid-cols-2 lg:grid-cols-4 bg-slate-800/60 p-1 rounded-xl", children: [
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "landmark", className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500", children: [
          /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 mr-2" }),
          "Landmark Cases"
        ] }),
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "recent", className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 mr-2" }),
          "Aktuelle Urteile"
        ] }),
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "trends", className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500", children: [
          /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 mr-2" }),
          "Trend-Analyse"
        ] }),
        /* @__PURE__ */ jsxs(TabsTrigger, { value: "upcoming", className: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500", children: [
          /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
          "Anstehende Fälle"
        ] })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "landmark", className: "space-y-8", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: filteredCases.map((case_, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          className: "group relative",
          children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
              `bg-gradient-to-r ${case_.color}`,
              "opacity-0 group-hover:opacity-20"
            ) }),
            /* @__PURE__ */ jsx(Card, { className: "border-2 border-slate-700/50 bg-slate-800/80 transition-all duration-500 group-hover:shadow-2xl overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      whileHover: { rotate: 360 },
                      transition: { duration: 0.6 },
                      className: cn(
                        "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                        case_.color
                      ),
                      children: /* @__PURE__ */ jsx(case_.icon, { className: "h-8 w-8 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white group-hover:text-purple-300 transition-colors", children: case_.title }),
                      /* @__PURE__ */ jsx(Badge, { className: getImpactColor(case_.impact), children: case_.impact })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg text-purple-300 font-semibold mb-2", children: case_.subtitle }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-400", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
                        case_.date
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4" }),
                        case_.court
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
                        case_.caseNumber
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: () => toggleCaseExpansion(case_.id),
                    variant: "ghost",
                    size: "sm",
                    className: "text-slate-400 hover:text-white",
                    children: expandedCase === case_.id ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6 leading-relaxed", children: case_.description }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-400" }),
                  "Zentrale Erkenntnisse"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: case_.keyFindings.map((finding, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { delay: idx * 0.1, duration: 0.4 },
                    className: "flex items-start gap-3 p-3 bg-slate-700/50 rounded-xl",
                    children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: finding })
                    ]
                  },
                  idx
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-red-400" }),
                  "Praktische Auswirkungen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: case_.practicalImpact.map((impact, idx) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, x: -20 },
                    whileInView: { opacity: 1, x: 0 },
                    transition: { delay: idx * 0.1, duration: 0.4 },
                    className: "flex items-start gap-3 p-3 bg-red-500/10 rounded-xl border border-red-500/30",
                    children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: impact })
                    ]
                  },
                  idx
                )) })
              ] }),
              expandedCase === case_.id && /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, height: 0 },
                  animate: { opacity: 1, height: "auto" },
                  exit: { opacity: 0, height: 0 },
                  className: "space-y-6 pt-6 border-t border-slate-700",
                  children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-green-400" }),
                        "Compliance-Maßnahmen"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: case_.complianceActions.map((action, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-green-500/10 rounded-xl border border-green-500/30", children: [
                        /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: action })
                      ] }, idx)) })
                    ] }),
                    case_.timeline && /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-blue-400" }),
                        "Timeline"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: case_.timeline.map((event, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 p-3 bg-slate-700/50 rounded-xl", children: [
                        /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs", children: event.date }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: event.event })
                      ] }, idx)) })
                    ] }),
                    case_.downloadLinks && /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Download, { className: "h-5 w-5 text-purple-400" }),
                        "Dokumente & Ressourcen"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: case_.downloadLinks.map((link, idx) => /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "border-purple-500/30 text-purple-300", children: [
                        /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                        link.title
                      ] }, idx)) })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mt-6 pt-6 border-t border-slate-700", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    asChild: true,
                    className: cn(
                      "bg-gradient-to-r text-white border-0 font-semibold",
                      case_.color
                    ),
                    children: /* @__PURE__ */ jsxs(Link, { to: `/wissen/rechtsprechung/${case_.id}`, children: [
                      /* @__PURE__ */ jsx(BookOpen, { className: "mr-2 h-4 w-4" }),
                      "Detailanalyse lesen"
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "border-slate-600 text-slate-300", children: [
                  /* @__PURE__ */ jsx(Share2, { className: "h-4 w-4 mr-2" }),
                  "Teilen"
                ] }),
                /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "border-slate-600 text-slate-300", children: [
                  /* @__PURE__ */ jsx(Bookmark, { className: "h-4 w-4 mr-2" }),
                  "Merken"
                ] })
              ] })
            ] }) })
          ]
        },
        case_.id
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "recent", className: "space-y-8", children: /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-2 gap-8", children: recentDecisions.map((decision, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          whileHover: { y: -5 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: decision.title }),
                /* @__PURE__ */ jsx(Badge, { className: getSeverityColor(decision.severity), children: decision.severity })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-400 mb-3", children: [
                /* @__PURE__ */ jsx("span", { children: decision.date }),
                /* @__PURE__ */ jsx("span", { children: decision.court })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-red-400 mb-3", children: decision.amount })
            ] }) }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: decision.description }),
            /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-slate-300 mb-2", children: "Verstöße:" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-1", children: decision.violations.map((violation, idx) => /* @__PURE__ */ jsx("div", { className: "text-xs text-red-300 bg-red-500/10 px-2 py-1 rounded", children: violation }, idx)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-slate-300 mb-2", children: "Auswirkungen:" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: decision.impact })
            ] }),
            /* @__PURE__ */ jsx(Button, { asChild: true, className: "w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white", children: /* @__PURE__ */ jsxs(Link, { to: decision.link, children: [
              "Vollständige Analyse",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
            ] }) })
          ] }) })
        },
        decision.id
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "trends", className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-purple-400" }),
            "DSGVO Trends 2024"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Gesamt-Bußgelder:" }),
              /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-red-400", children: trendAnalysis[2024].totalFines })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Anzahl Fälle:" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-white", children: trendAnalysis[2024].casesCount })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: "Ø Bußgeld:" }),
              /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-orange-400", children: trendAnalysis[2024].avgFine })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Haupt-Trends" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: trendAnalysis[2024].trends.map((trend, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl", children: [
              /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-green-400 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: trend })
            ] }, idx)) })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(PieChart, { className: "h-6 w-6 text-red-400" }),
            "Häufigste Verstöße"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: trendAnalysis[2024].topViolations.map((violation, idx) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { className: "text-slate-300 font-medium", children: violation.violation }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-white font-bold", children: [
                  violation.percentage,
                  "%"
                ] }),
                /* @__PURE__ */ jsxs(Badge, { className: "bg-slate-700 text-slate-200 text-xs", children: [
                  violation.cases,
                  " Fälle"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-700 rounded-full h-2", children: /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full",
                initial: { width: 0 },
                whileInView: { width: `${violation.percentage}%` },
                transition: { duration: 1, delay: idx * 0.1 }
              }
            ) })
          ] }, idx)) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "upcoming", className: "space-y-8", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: upcomingCases.map((case_, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: case_.title }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-400 mb-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
                    case_.expectedDate
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4" }),
                    case_.court
                  ] })
                ] }),
                /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-3", children: case_.topic })
              ] }),
              /* @__PURE__ */ jsx(Flag, { className: "h-6 w-6 text-yellow-400" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: case_.description }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
              /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-slate-300 mb-2", children: "Mögliche Auswirkungen:" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400", children: case_.implications })
            ] })
          ] }) })
        },
        index
      )) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent", children: "Cookie-Rechtsprechung" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-300", children: "Wichtige Urteile zur Website-Compliance" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-2 gap-8", children: cookieDecisions.map((decision, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.2, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx(Database, { className: "h-8 w-8 text-purple-400" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: decision.title }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-slate-400", children: [
                    /* @__PURE__ */ jsx("span", { children: decision.date }),
                    /* @__PURE__ */ jsx("span", { children: decision.court })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4", children: decision.impact }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: decision.description }),
              decision.requirements && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: "Anforderungen:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: decision.requirements.map((req, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: req })
                ] }, idx)) })
              ] }),
              decision.technicalIssues && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: "Technische Probleme:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: decision.technicalIssues.map((issue, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: issue })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: "Lösungsansätze:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: (decision.practicalChanges || decision.solutions).map((solution, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: solution })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs(Button, { className: "w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white", children: [
                /* @__PURE__ */ jsx(BookOpen, { className: "mr-2 h-4 w-4" }),
                "Detailanalyse lesen"
              ] })
            ] }) })
          },
          decision.id
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-purple-900/20" }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-5xl relative z-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-6xl font-black mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "Immer" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent", children: "rechtsicher" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed", children: [
              "Bleiben Sie ",
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-300", children: "immer auf dem neuesten Stand" }),
              "der Rechtsprechung und setzen Sie Urteile proaktiv um."
            ] }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { delay: 0.4, duration: 0.6 },
                className: "flex flex-col sm:flex-row gap-6 justify-center items-center",
                children: [
                  /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300",
                      children: [
                        /* @__PURE__ */ jsx(Bell, { className: "mr-3 h-6 w-6" }),
                        "Legal Updates abonnieren",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-3 h-6 w-6" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-10 py-4 text-lg font-bold backdrop-blur-sm", children: [
                    /* @__PURE__ */ jsx(Download, { className: "mr-3 h-6 w-6" }),
                    "Urteilssammlung"
                  ] }) })
                ]
              }
            )
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Rechtsprechung as default
};
