import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { BarChart3, Sparkles, Shield, BookOpen, ChevronDown, Layers, Wrench, Bot, CheckSquare, Scale, Users, AlertTriangle, CheckCircle2, Lightbulb, ArrowRight, Search, Activity, Target, FileText, Eye, UserCheck, Clipboard, Code, Download, Play, CreditCard, Heart, Car, Gauge, ThumbsUp, Square, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
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
const AlgorithmicImpactAssessment = () => {
  useEffect(() => {
    document.title = "Algorithmic Impact Assessment – DSGVO & EU AI Act Toolkit";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Systematische Bewertung von KI-Algorithmen nach DSGVO Art. 35 und EU AI Act. Templates und Frameworks für Ihr Impact Assessment.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Systematische Bewertung von KI-Algorithmen nach DSGVO Art. 35 und EU AI Act. Templates und Frameworks für Ihr Impact Assessment.";
      document.head.appendChild(newMeta);
    }
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const newViewport = document.createElement("meta");
      newViewport.name = "viewport";
      newViewport.content = "width=device-width, initial-scale=1";
      document.head.appendChild(newViewport);
    }
    return () => {
    };
  }, []);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [assessmentProgress, setAssessmentProgress] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const tabs = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "methodology", label: "Methodik", icon: BarChart3 },
    { id: "framework", label: "Assessment Framework", icon: Layers },
    { id: "tools", label: "Tools & Templates", icon: Wrench },
    { id: "examples", label: "Praxisbeispiele", icon: Bot },
    { id: "compliance", label: "Compliance Check", icon: CheckSquare }
  ];
  const assessmentPhases = [
    {
      phase: "Scoping & Preparation",
      duration: "1-2 Wochen",
      description: "Definition des Bewertungsumfangs und Vorbereitung",
      objectives: [
        "System und Anwendungsbereich definieren",
        "Stakeholder identifizieren",
        "Datenquellen und -typen erfassen",
        "Rechtliche Grundlagen analysieren"
      ],
      deliverables: [
        "Scoping Document",
        "Stakeholder Map",
        "Data Inventory",
        "Legal Baseline"
      ],
      icon: Search,
      color: "from-blue-500 to-cyan-500"
    },
    {
      phase: "Impact Analysis",
      duration: "2-3 Wochen",
      description: "Systematische Bewertung der algorithmischen Auswirkungen",
      objectives: [
        "Betroffene Grundrechte identifizieren",
        "Fairness und Diskriminierungsrisiken bewerten",
        "Transparenz und Erklärbarkeit prüfen",
        "Autonomie und menschliche Kontrolle analysieren"
      ],
      deliverables: [
        "Rights Impact Matrix",
        "Fairness Assessment",
        "Transparency Report",
        "Human Agency Analysis"
      ],
      icon: BarChart3,
      color: "from-purple-500 to-pink-500"
    },
    {
      phase: "Risk Assessment",
      duration: "1-2 Wochen",
      description: "Quantifizierung und Priorisierung identifizierter Risiken",
      objectives: [
        "Wahrscheinlichkeit von Schäden bewerten",
        "Schwere potentieller Auswirkungen einschätzen",
        "Vulnerable Gruppen identifizieren",
        "Risikomatrix erstellen"
      ],
      deliverables: [
        "Risk Register",
        "Vulnerability Analysis",
        "Risk Matrix",
        "Priority Rankings"
      ],
      icon: AlertTriangle,
      color: "from-orange-500 to-red-500"
    },
    {
      phase: "Mitigation Planning",
      duration: "2-4 Wochen",
      description: "Entwicklung von Schutzmaßnahmen und Kontrollen",
      objectives: [
        "Technische Schutzmaßnahmen definieren",
        "Organisatorische Kontrollen etablieren",
        "Monitoring und Audit-Prozesse entwerfen",
        "Incident Response Pläne entwickeln"
      ],
      deliverables: [
        "Mitigation Strategy",
        "Control Framework",
        "Monitoring Plan",
        "Response Procedures"
      ],
      icon: Shield,
      color: "from-green-500 to-teal-500"
    },
    {
      phase: "Implementation & Monitoring",
      duration: "Ongoing",
      description: "Umsetzung der Maßnahmen und kontinuierliche Überwachung",
      objectives: [
        "Schutzmaßnahmen implementieren",
        "Monitoring-Systeme einrichten",
        "Regular Reviews durchführen",
        "Stakeholder Communication"
      ],
      deliverables: [
        "Implementation Plan",
        "Monitoring Dashboard",
        "Review Schedule",
        "Communication Plan"
      ],
      icon: Activity,
      color: "from-indigo-500 to-purple-500"
    }
  ];
  const assessmentFramework = [
    {
      dimension: "Grundrechte-Impact",
      description: "Bewertung der Auswirkungen auf fundamentale Rechte",
      criteria: [
        "Recht auf Privatsphäre und Datenschutz",
        "Recht auf Nicht-Diskriminierung",
        "Recht auf faire Verfahren",
        "Meinungsfreiheit und Information",
        "Versammlungsfreiheit",
        "Recht auf Arbeit und faire Beschäftigung"
      ],
      assessmentMethod: "Qualitative Bewertung mit Stakeholder-Input",
      scale: "Niedrig → Mittel → Hoch → Sehr Hoch",
      icon: Scale,
      color: "bg-blue-50 border-blue-200"
    },
    {
      dimension: "Fairness & Bias",
      description: "Analyse von Verzerrungen und Diskriminierungspotential",
      criteria: [
        "Statistische Parität",
        "Gleichheit der Chancen",
        "Kalibrierung zwischen Gruppen",
        "Individuelle Fairness",
        "Kontextuelle Fairness",
        "Dynamische Fairness über Zeit"
      ],
      assessmentMethod: "Quantitative Metriken + qualitative Analyse",
      scale: "Bias-frei → Gering → Moderat → Signifikant",
      icon: Users,
      color: "bg-green-50 border-green-200"
    },
    {
      dimension: "Transparenz & Erklärbarkeit",
      description: "Bewertung der Nachvollziehbarkeit und Transparenz",
      criteria: [
        "Algorithmische Transparenz",
        "Entscheidungsbegründungen",
        "Datennutzung und -quellen",
        "Modellerklärungen",
        "Prozess-Transparenz",
        "Kommunikation an Betroffene"
      ],
      assessmentMethod: "Technische Tests + User Experience Bewertung",
      scale: "Transparent → Teilweise → Undurchsichtig → Black Box",
      icon: Eye,
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      dimension: "Menschliche Kontrolle",
      description: "Grad der menschlichen Aufsicht und Interventionsmöglichkeiten",
      criteria: [
        "Meaningful Human Control",
        "Human-in-the-Loop Integration",
        "Override-Mechanismen",
        "Eskalationsverfahren",
        "Qualifikation der Entscheider",
        "Verantwortungsverteilung"
      ],
      assessmentMethod: "Prozessanalyse + Stakeholder-Interviews",
      scale: "Vollautomatisch → Unterstützt → Überwacht → Kontrolliert",
      icon: UserCheck,
      color: "bg-purple-50 border-purple-200"
    },
    {
      dimension: "Robustheit & Sicherheit",
      description: "Widerstandsfähigkeit gegen Manipulationen und Ausfälle",
      criteria: [
        "Adversariale Robustheit",
        "Datenqualität und -integrität",
        "Modellstabilität",
        "Cybersecurity-Maßnahmen",
        "Fail-Safe Mechanismen",
        "Recovery-Prozesse"
      ],
      assessmentMethod: "Technische Tests + Penetration Testing",
      scale: "Robust → Stabil → Anfällig → Kritisch",
      icon: Shield,
      color: "bg-red-50 border-red-200"
    },
    {
      dimension: "Proportionalität",
      description: "Verhältnismäßigkeit zwischen Nutzen und Risiken",
      criteria: [
        "Zweck-Mittel-Verhältnis",
        "Geeignetheit der Maßnahme",
        "Erforderlichkeit des Systems",
        "Angemessenheit der Eingriffe",
        "Alternative Lösungsansätze",
        "Kosten-Nutzen-Verhältnis"
      ],
      assessmentMethod: "Multi-Kriterien-Analyse",
      scale: "Verhältnismäßig → Grenzwertig → Unverhältnismäßig",
      icon: Scale,
      color: "bg-orange-50 border-orange-200"
    }
  ];
  const practicalExamples = [
    {
      title: "HR Recruiting-KI Assessment",
      sector: "Human Resources",
      system: "Automatisierte Bewerbungsvorauswahl",
      keyFindings: [
        "Erhöhtes Bias-Risiko bei unterrepräsentierten Gruppen",
        "Limitierte Transparenz der Auswahlkriterien",
        "Fehlende menschliche Überprüfung bei Ablehnungen"
      ],
      mitigations: [
        "Bias-Detection Algorithmen implementiert",
        "Explainable AI Features hinzugefügt",
        "Mandatory Human Review für finale Entscheidungen"
      ],
      outcome: "Risiko von Hoch auf Mittel reduziert",
      icon: Users,
      riskLevel: "Mittel",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Kredit-Scoring Assessment",
      sector: "Financial Services",
      system: "Automatisierte Kreditwürdigkeitsprüfung",
      keyFindings: [
        "Potentielle sozioökonomische Diskriminierung",
        "Intransparente Scoring-Faktoren",
        "Hohe Auswirkung auf Lebensqualität"
      ],
      mitigations: [
        "Fairness-Constraints in Modelltraining",
        "Detaillierte Scorekarten für Antragsteller",
        "Beschwerdemechanismus etabliert"
      ],
      outcome: "Compliance mit regulatorischen Anforderungen",
      icon: CreditCard,
      riskLevel: "Hoch",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Healthcare Diagnostic AI",
      sector: "Healthcare",
      system: "KI-unterstützte Diagnosestellung",
      keyFindings: [
        "Kritische Auswirkungen auf Patientengesundheit",
        "Bias in Trainingsdaten verschiedener Populationen",
        "Bedarf an medizinischer Supervision"
      ],
      mitigations: [
        "Diverse Trainingsdaten integriert",
        "Uncertainty Quantification implementiert",
        "Ärztliche Endkontrolle verpflichtend"
      ],
      outcome: "Erfolgreiche Zulassung als Medizinprodukt",
      icon: Heart,
      riskLevel: "Sehr Hoch",
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Smart City Traffic Management",
      sector: "Public Services",
      system: "Verkehrssteuerung und -überwachung",
      keyFindings: [
        "Überwachung öffentlicher Räume",
        "Potentielle Bewegungsprofile",
        "Auswirkungen auf Mobilitätsrechte"
      ],
      mitigations: [
        "Privacy-by-Design Prinzipien",
        "Anonymisierung von Bewegungsdaten",
        "Transparente Datennutzungsrichtlinien"
      ],
      outcome: "Öffentliche Akzeptanz durch Transparenz",
      icon: Car,
      riskLevel: "Mittel",
      color: "from-green-500 to-blue-500"
    }
  ];
  const complianceChecklist = [
    {
      category: "Legal Compliance",
      items: [
        "DSGVO Artikel 35 Datenschutz-Folgenabschätzung durchgeführt",
        "EU AI Act Risikoklassifizierung dokumentiert",
        "Nationale Gesetze und Regelungen berücksichtigt",
        "Branchenspezifische Regulierungen eingehalten",
        "Internationale Standards (ISO/IEC) angewendet"
      ]
    },
    {
      category: "Technical Assessment",
      items: [
        "Bias-Testing mit repräsentativen Datensätzen",
        "Robustheit gegen adversarielle Angriffe geprüft",
        "Explainability Features implementiert",
        "Performance Monitoring eingerichtet",
        "Fail-Safe Mechanismen getestet"
      ]
    },
    {
      category: "Stakeholder Engagement",
      items: [
        "Betroffene Gruppen konsultiert",
        "Expertenreviews durchgeführt",
        "Öffentliche Konsultation (falls erforderlich)",
        "Interne Stakeholder-Workshops",
        "Continuous Feedback Mechanismen"
      ]
    },
    {
      category: "Documentation",
      items: [
        "Assessment Report erstellt",
        "Risk Register dokumentiert",
        "Mitigation Plan ausgearbeitet",
        "Monitoring Procedures definiert",
        "Review Schedule etabliert"
      ]
    },
    {
      category: "Governance",
      items: [
        "Verantwortlichkeiten klar definiert",
        "Approval Processes etabliert",
        "Incident Response Procedures",
        "Regular Review Cycles",
        "Audit Trail Mechanisms"
      ]
    }
  ];
  const toggleExpanded = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const toggleChecked = (itemId) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
    const totalItems = complianceChecklist.reduce((acc, cat) => acc + cat.items.length, 0);
    setAssessmentProgress(newChecked.size / totalItems * 100);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white", style: {
    fontSize: "16px",
    lineHeight: "1.6"
  }, children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { ref: heroRef, className: "relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          style: { y, opacity },
          className: "absolute inset-0",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/grid.svg')] opacity-10" }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsx(BarChart3, { className: "w-16 h-16 text-white" }) }) }),
            /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-white mb-6", children: "Algorithmic Impact Assessment Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto mb-8", children: "Systematische Bewertung der Auswirkungen algorithmischer Systeme auf Grundrechte, Fairness und gesellschaftliche Teilhabe nach EU AI Act und DSGVO Art. 35." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 mr-2" }),
                "DSGVO Art. 35 Ready"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 mr-2" }),
                "6 Assessment Dimensionen"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(BarChart3, { className: "w-4 h-4 mr-2" }),
                "Praxis-Templates"
              ] })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => toggleExpanded("toc"),
          className: "flex items-center gap-2 w-full text-left md:cursor-default",
          children: [
            /* @__PURE__ */ jsxs("h2", { id: "inhaltsverzeichnis", className: "text-2xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "w-6 h-6 text-blue-600" }),
              "Inhaltsverzeichnis"
            ] }),
            /* @__PURE__ */ jsx(ChevronDown, { className: cn(
              "w-5 h-5 text-gray-500 transition-transform md:hidden",
              expandedSection === "toc" && "rotate-180"
            ) })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: cn(
        "mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
        "md:block",
        expandedSection === "toc" ? "block" : "hidden md:grid"
      ), children: [
        /* @__PURE__ */ jsxs("a", { href: "#aia-ueberblick", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-blue-500 flex-shrink-0" }),
          "AIA Überblick"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#aia-methodik", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(BarChart3, { className: "w-4 h-4 text-purple-500 flex-shrink-0" }),
          "5-Phasen Methodik"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#assessment-framework", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(Layers, { className: "w-4 h-4 text-green-500 flex-shrink-0" }),
          "Assessment Framework"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#tools-templates", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(Wrench, { className: "w-4 h-4 text-orange-500 flex-shrink-0" }),
          "Tools & Templates"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#aia-praxisbeispiele", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(Bot, { className: "w-4 h-4 text-red-500 flex-shrink-0" }),
          "Praxisbeispiele"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#compliance-checklist", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(CheckSquare, { className: "w-4 h-4 text-indigo-500 flex-shrink-0" }),
          "Compliance Check"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b", style: { scrollMarginTop: "96px" }, children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: /* @__PURE__ */ jsx(TabsList, { className: "grid w-full grid-cols-6 h-auto p-1", children: tabs.map((tab) => {
      const Icon = tab.icon;
      return /* @__PURE__ */ jsxs(
        TabsTrigger,
        {
          value: tab.id,
          className: "flex flex-col items-center gap-2 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium hidden sm:inline", children: tab.label })
          ]
        },
        tab.id
      );
    }) }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsxs(TabsContent, { value: "overview", className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { id: "aia-ueberblick", className: "text-center mb-12", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Algorithmic Impact Assessment (AIA)" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Ein systematischer Ansatz zur Bewertung der gesellschaftlichen und individuellen Auswirkungen algorithmischer Entscheidungssysteme." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-blue-500" }),
              "Risikomanagement"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
              "Frühzeitige Identifikation und Minderung von Risiken für Grundrechte und gesellschaftliche Teilhabe. Nutzen Sie auch unsere ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/risikoklassifizierung", className: "text-blue-600 hover:underline", children: "KI-Risikoklassifizierung" }),
              "."
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-green-100 bg-gradient-to-br from-green-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-green-500" }),
              "Compliance"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
              "Erfüllung rechtlicher Anforderungen nach EU AI Act, DSGVO und branchenspezifischen Regelungen. Implementieren Sie ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/privacy-preserving-ai", className: "text-green-600 hover:underline", children: "Privacy-Preserving AI" }),
              "."
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-purple-500" }),
              "Stakeholder Trust"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Aufbau von Vertrauen durch Transparenz und verantwortungsvolle KI-Entwicklung." }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 text-orange-500" }),
            "Wann ist ein AIA erforderlich?"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Rechtliche Verpflichtungen:" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "High-Risk AI Systeme nach EU AI Act" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "DSGVO Art. 35 Datenschutz-Folgenabschätzung" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Branchenspezifische Regulierungen" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Best Practice Empfehlungen:" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Lightbulb, { className: "w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Automatisierte Entscheidungen mit hohem Impact" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Lightbulb, { className: "w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "KI-Systeme mit Bias-Potential" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Lightbulb, { className: "w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Public Sector AI Deployments" })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxs("a", { href: "#inhaltsverzeichnis", className: "inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors", children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 rotate-[-90deg]" }),
          "Zurück zum Inhaltsverzeichnis"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "methodology", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "aia-methodik", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "5-Phasen Methodik" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Strukturierter Ansatz für umfassende Impact Assessments" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: assessmentPhases.map((phase, index) => {
          const Icon = phase.icon;
          return /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: cn(
                      "p-3 rounded-xl bg-gradient-to-br text-white",
                      phase.color
                    ), children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                        /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                          "Phase ",
                          index + 1
                        ] }),
                        /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: phase.duration })
                      ] }),
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: phase.phase }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: phase.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => toggleExpanded(`phase-${index}`),
                      children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "w-4 h-4 transition-transform",
                        expandedSection === `phase-${index}` && "rotate-180"
                      ) })
                    }
                  )
                ] }) }),
                expandedSection === `phase-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Target, { className: "w-4 h-4" }),
                      "Ziele"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: phase.objectives.map((objective, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: objective })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }),
                      "Deliverables"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: phase.deliverables.map((deliverable, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: deliverable }, idx)) })
                  ] })
                ] }) })
              ] })
            },
            phase.phase
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "framework", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "assessment-framework", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Assessment Framework" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "6 Schlüsseldimensionen für umfassende Impact Bewertung" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: assessmentFramework.map((dimension, index) => {
          const Icon = dimension.icon;
          return /* @__PURE__ */ jsxs(Card, { className: cn("h-full", dimension.color), children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-white rounded-lg shadow-sm", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-gray-700" }) }),
                /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                  index + 1,
                  "/6"
                ] })
              ] }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-2", children: dimension.dimension }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: dimension.description })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Bewertungskriterien:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
                  dimension.criteria.slice(0, 3).map((criterion, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1 h-1 rounded-full bg-gray-400 mt-1.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: criterion })
                  ] }, idx)),
                  dimension.criteria.length > 3 && /* @__PURE__ */ jsxs("li", { className: "text-xs text-gray-500", children: [
                    "+",
                    dimension.criteria.length - 3,
                    " weitere..."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-gray-700", children: "Methodik:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: dimension.assessmentMethod })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-medium text-gray-700", children: "Bewertungsskala:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: dimension.scale })
                ] })
              ] })
            ] }) })
          ] }, dimension.dimension);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "tools", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "tools-templates", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Tools & Templates" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Praktische Hilfsmittel für Ihr Assessment" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          {
            title: "AIA Questionnaire",
            description: "Strukturierter Fragebogen für systematische Bewertung",
            type: "Excel Template",
            icon: Clipboard,
            color: "from-blue-500 to-cyan-500"
          },
          {
            title: "Risk Assessment Matrix",
            description: "Quantitative Risikobewertung und Priorisierung",
            type: "Excel Template",
            icon: BarChart3,
            color: "from-orange-500 to-red-500"
          },
          {
            title: "Stakeholder Mapping",
            description: "Identifikation und Analyse relevanter Stakeholder",
            type: "Visio Template",
            icon: Users,
            color: "from-green-500 to-teal-500"
          },
          {
            title: "Bias Testing Framework",
            description: "Strukturierte Tests für Fairness und Diskriminierung",
            type: "Python Toolkit",
            icon: Code,
            color: "from-purple-500 to-pink-500"
          },
          {
            title: "Legal Compliance Checker",
            description: "Automatisierte Prüfung rechtlicher Anforderungen",
            type: "Web Tool",
            icon: Scale,
            color: "from-indigo-500 to-blue-500"
          },
          {
            title: "Impact Report Generator",
            description: "Automatische Generierung strukturierter Reports",
            type: "Word Template",
            icon: FileText,
            color: "from-yellow-500 to-orange-500"
          }
        ].map((tool, index) => {
          const Icon = tool.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "cursor-pointer hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "p-3 rounded-xl bg-gradient-to-br text-white w-fit mb-3",
                tool.color
              ), children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: tool.title }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: tool.description })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: tool.type }),
              /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                "Download"
              ] })
            ] }) })
          ] }, tool.title);
        }) }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Play, { className: "w-5 h-5" }),
            "Interactive Assessment Demo"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-4", children: [
              "Testen Sie unser Assessment-Framework mit einem interaktiven Demo-System. Für die Risikoklassifizierung Ihres Systems nutzen Sie unsere ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/risikoklassifizierung", className: "text-blue-600 hover:underline", children: "Risikoklassifizierung" }),
              "."
            ] }),
            /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-purple-600 to-blue-600", children: [
              /* @__PURE__ */ jsx(Play, { className: "w-4 h-4 mr-2" }),
              "Demo starten"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "examples", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "aia-praxisbeispiele", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Praxisbeispiele" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Reale Assessment-Fallstudien aus verschiedenen Branchen" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: practicalExamples.map((example, index) => {
          const Icon = example.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "p-3 rounded-xl bg-gradient-to-br text-white",
                  example.color
                ), children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "mb-2", children: example.sector }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx(Gauge, { className: "w-3 h-3" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: example.riskLevel })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-2", children: example.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: example.system })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 text-sm flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                  "Hauptbefunde"
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: example.keyFindings.map((finding, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: finding })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 text-sm flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-green-500" }),
                  "Maßnahmen"
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: example.mitigations.map((mitigation, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: mitigation })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "pt-2 border-t", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ThumbsUp, { className: "w-4 h-4 text-blue-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-blue-700", children: example.outcome })
              ] }) })
            ] }) })
          ] }, example.title);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "compliance", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "compliance-checklist", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Compliance Checklist" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Überprüfen Sie die Vollständigkeit Ihres Assessments" })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-6", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5" }),
            "Assessment Fortschritt"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                /* @__PURE__ */ jsx("span", { children: "Gesamt-Compliance" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  Math.round(assessmentProgress),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: assessmentProgress, className: "h-3" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
              checkedItems.size,
              " von ",
              complianceChecklist.reduce((acc, cat) => acc + cat.items.length, 0),
              " Punkten abgeschlossen"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: complianceChecklist.map((category, categoryIndex) => /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: category.category }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: category.items.map((item, itemIndex) => {
            const itemId = `${categoryIndex}-${itemIndex}`;
            return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => toggleChecked(itemId),
                  className: "flex-shrink-0 mt-0.5",
                  children: checkedItems.has(itemId) ? /* @__PURE__ */ jsx(CheckSquare, { className: "w-5 h-5 text-green-500" }) : /* @__PURE__ */ jsx(Square, { className: "w-5 h-5 text-gray-400" })
                }
              ),
              /* @__PURE__ */ jsx("span", { className: cn(
                "text-sm",
                checkedItems.has(itemId) ? "line-through text-gray-500" : "text-gray-700"
              ), children: item })
            ] }, itemIndex);
          }) }) })
        ] }, category.category)) }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
            "Assessment Report Export"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Exportieren Sie Ihr vollständiges Assessment als strukturierten Report." }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 mr-2" }),
                "PDF Report"
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 mr-2" }),
                "JSON Export"
              ] }),
              /* @__PURE__ */ jsxs(Button, { children: [
                /* @__PURE__ */ jsx(Save, { className: "w-4 h-4 mr-2" }),
                "Speichern"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  AlgorithmicImpactAssessment as default
};
