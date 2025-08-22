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
import { Gauge, Sparkles, Shield, BarChart3, BookOpen, ChevronDown, FileCheck, Bot, Code, PieChart, Ban, AlertTriangle, Eye, CheckCircle2, Target, Scale, ArrowRight, FileText, CheckSquare, Search, Download, X, Users, MessageSquare, Euro, Package, Square, Activity } from "lucide-react";
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
const KiRisikoklassifizierung = () => {
  useEffect(() => {
    document.title = "KI-Risikoklassifizierung nach EU AI Act – Compliance Guide";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Verstehen Sie die 4 Risikokategorien des EU AI Acts. Praktischer Guide für Compliance-Anforderungen Ihres KI-Systems.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "Verstehen Sie die 4 Risikokategorien des EU AI Acts. Praktischer Guide für Compliance-Anforderungen Ihres KI-Systems.";
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
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const tabs = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "categories", label: "Risikokategorien", icon: Gauge },
    { id: "assessment", label: "Bewertungsmethodik", icon: BarChart3 },
    { id: "compliance", label: "Compliance-Pflichten", icon: FileCheck },
    { id: "examples", label: "Praxisbeispiele", icon: Bot },
    { id: "implementation", label: "Implementation", icon: Code }
  ];
  const riskCategories = [
    {
      level: "Unannehmbares Risiko",
      color: "from-red-600 to-red-500",
      borderColor: "border-red-500",
      bgColor: "bg-red-50",
      textColor: "text-red-900",
      percentage: 5,
      description: "KI-Systeme, die eine klare Bedrohung für Sicherheit, Existenzgrundlagen und Rechte darstellen",
      examples: [
        "Biometrische Echtzeit-Fernidentifikation in öffentlichen Räumen",
        "Social Scoring durch öffentliche Behörden",
        "Manipulation des menschlichen Verhaltens (Dark Patterns)",
        "Ausnutzung von Schwächen bestimmter Gruppen"
      ],
      prohibitions: [
        "Vollständiges Verbot der Inverkehrbringung",
        "Keine Ausnahmen für Forschung oder Entwicklung",
        "Sofortige Einstellung bei laufenden Systemen",
        "Hohe Bußgelder bei Verstößen (bis zu 35 Mio. € oder 7% des Jahresumsatzes)"
      ],
      icon: Ban
    },
    {
      level: "Hohes Risiko",
      color: "from-orange-600 to-orange-500",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-900",
      percentage: 15,
      description: "KI-Systeme in kritischen Bereichen mit hohem Risiko für Grundrechte",
      examples: [
        "Biometrische Identifikation und Kategorisierung",
        "Kritische Infrastrukturen (Verkehr, Energie)",
        "Bildung und Berufsausbildung",
        "Beschäftigung, Personalmanagement",
        "Wesentliche private und öffentliche Dienstleistungen",
        "Strafverfolgung und Rechtspflege",
        "Migration, Asyl und Grenzkontrolle",
        "Demokratie-relevante Prozesse"
      ],
      requirements: [
        "Konfromitätsbewertung vor Inverkehrbringung",
        "CE-Kennzeichnung erforderlich",
        "Risikomanagements- und Qualitätsmanagementsysteme",
        "Umfassende Dokumentation und Aufzeichnungen",
        "Transparenz und Bereitstellung von Informationen",
        "Menschliche Aufsicht während des gesamten Lebenszyklus",
        "Robustheit, Genauigkeit und Cybersecurity",
        "Registrierung in EU-Datenbank"
      ],
      icon: AlertTriangle
    },
    {
      level: "Begrenztes Risiko",
      color: "from-yellow-600 to-yellow-500",
      borderColor: "border-yellow-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-900",
      percentage: 25,
      description: "KI-Systeme mit spezifischen Transparenzrisiken",
      examples: [
        "Chatbots und virtuelle Assistenten",
        "Emotionserkennungssysteme",
        "Biometrische Kategorisierung",
        "KI-generierte Inhalte (Deep Fakes)",
        "KI-Systeme zur Interaktion mit natürlichen Personen"
      ],
      requirements: [
        "Transparenzpflichten gegenüber Nutzern",
        "Kennzeichnung von KI-generierten Inhalten",
        "Information über KI-Interaktion",
        "Erkennbarkeit von Deep Fakes",
        "Aufklärung über Emotionserkennung"
      ],
      icon: Eye
    },
    {
      level: "Minimales Risiko",
      color: "from-green-600 to-green-500",
      borderColor: "border-green-500",
      bgColor: "bg-green-50",
      textColor: "text-green-900",
      percentage: 55,
      description: "KI-Systeme mit geringem Risiko für Grundrechte und Sicherheit",
      examples: [
        "Spam-Filter und E-Mail-Sortierung",
        "Videoempfehlungssysteme",
        "Einfache Chatbots ohne kritische Entscheidungen",
        "Inventarverwaltung und Logistik",
        "Wettervorhersagen und -analysen"
      ],
      requirements: [
        "Keine besonderen rechtlichen Verpflichtungen",
        "Freiwillige Anwendung von Verhaltenskodizes",
        "Empfohlene Best Practices",
        "Selbstregulierung durch Branche"
      ],
      icon: CheckCircle2
    }
  ];
  const assessmentMethodology = [
    {
      phase: "Systemanalyse",
      description: "Identifikation und Charakterisierung des KI-Systems",
      steps: [
        "Zweck und beabsichtigte Verwendung definieren",
        "Eingabedaten und Datenverarbeitungslogik analysieren",
        "Ausgaben und Entscheidungslogik verstehen",
        "Einsatzbereich und Zielgruppen identifizieren"
      ],
      deliverables: ["Systemspezifikation", "Use-Case-Dokumentation"],
      icon: Search
    },
    {
      phase: "Risikobewertung",
      description: "Bewertung potenzieller Risiken und Auswirkungen",
      steps: [
        "Betroffene Grundrechte identifizieren",
        "Wahrscheinlichkeit von Schäden bewerten",
        "Schwere potenzieller Auswirkungen einschätzen",
        "Vulnerable Gruppen identifizieren"
      ],
      deliverables: ["Risikoregister", "Impact Assessment"],
      icon: BarChart3
    },
    {
      phase: "Kategorisierung",
      description: "Zuordnung zu Risikokategorie nach EU AI Act",
      steps: [
        "Abgleich mit Anhang I-III der Verordnung",
        "Prüfung auf Verbotstatbestände",
        "Bewertung der Anwendungsdomäne",
        "Finale Klassifizierung dokumentieren"
      ],
      deliverables: ["Klassifizierungsreport", "Compliance-Matrix"],
      icon: Gauge
    },
    {
      phase: "Maßnahmenplanung",
      description: "Ableitung erforderlicher Compliance-Maßnahmen",
      steps: [
        "Rechtliche Anforderungen ableiten",
        "Technische Schutzmaßnahmen definieren",
        "Organisatorische Prozesse etablieren",
        "Monitoring und Review-Zyklen planen"
      ],
      deliverables: ["Compliance-Plan", "Implementierungsroadmap"],
      icon: Target
    }
  ];
  const complianceMatrix = [
    {
      requirement: "Risikomanagement",
      minimal: false,
      limited: false,
      high: true,
      unacceptable: false,
      description: "Kontinuierlicher Prozess zur Identifikation, Analyse und Minderung von Risiken"
    },
    {
      requirement: "Datenqualität",
      minimal: false,
      limited: false,
      high: true,
      unacceptable: false,
      description: "Sicherstellung repräsentativer, fehlerfreier und vollständiger Trainingsdaten"
    },
    {
      requirement: "Dokumentation",
      minimal: false,
      limited: false,
      high: true,
      unacceptable: false,
      description: "Umfassende technische Dokumentation und Nachvollziehbarkeit"
    },
    {
      requirement: "Transparenz",
      minimal: false,
      limited: true,
      high: true,
      unacceptable: false,
      description: "Aufklärung der Nutzer über KI-Einsatz und Funktionsweise"
    },
    {
      requirement: "Menschliche Aufsicht",
      minimal: false,
      limited: false,
      high: true,
      unacceptable: false,
      description: "Sinnvolle menschliche Kontrolle über KI-Entscheidungen"
    },
    {
      requirement: "Genauigkeit",
      minimal: false,
      limited: false,
      high: true,
      unacceptable: false,
      description: "Robustheit und Zuverlässigkeit des Systems"
    },
    {
      requirement: "Cybersecurity",
      minimal: false,
      limited: false,
      high: true,
      unacceptable: false,
      description: "Schutz vor Cyberangriffen und Manipulation"
    }
  ];
  const practicalExamples = [
    {
      title: "Bewerbungsmanagement-KI",
      sector: "HR Technology",
      classification: "Hohes Risiko",
      reasoning: "Beschäftigung und Personalmanagement (Anhang III)",
      requirements: [
        "Konformitätsbewertung durchführen",
        "Risikomanagement implementieren",
        "Bias-Detection und -Mitigation",
        "Menschliche Überprüfung bei Ablehnungen",
        "Dokumentation aller Entscheidungskriterien"
      ],
      icon: Users,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Kunden-Chatbot",
      sector: "Customer Service",
      classification: "Begrenztes Risiko",
      reasoning: "Interaktion mit natürlichen Personen",
      requirements: [
        "Transparenz über KI-Nutzung",
        "Kennzeichnung als Chatbot",
        "Möglichkeit zur menschlichen Übernahme",
        "Keine kritischen Entscheidungen automatisiert"
      ],
      icon: MessageSquare,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Kreditscoring-System",
      sector: "Financial Services",
      classification: "Hohes Risiko",
      reasoning: "Wesentliche private Dienstleistungen",
      requirements: [
        "Algorithmic Impact Assessment",
        "Diskriminierungsfreie Modellierung",
        "Erklärbarkeit der Kreditentscheidungen",
        "Regelmäßige Modellvalidierung",
        "Beschwerdemechanismen"
      ],
      icon: Euro,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Produktempfehlungen",
      sector: "E-Commerce",
      classification: "Minimales Risiko",
      reasoning: "Keine kritischen Entscheidungen oder Grundrechtseingriffe",
      requirements: [
        "Freiwillige Best Practices",
        "Transparenz über Personalisierung",
        "Datenminimierung beachten",
        "Nutzerrechte gemäß DSGVO"
      ],
      icon: Package,
      color: "from-green-500 to-blue-500"
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
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white", style: {
    fontSize: "16px",
    lineHeight: "1.6"
  }, children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { ref: heroRef, className: "relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          style: { y, opacity },
          className: "absolute inset-0",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/grid.svg')] opacity-10" }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" })
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
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsx(Gauge, { className: "w-16 h-16 text-white" }) }) }),
            /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-white mb-6", children: "KI-Risikoklassifizierung nach EU AI Act" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto mb-8", children: "Verstehen Sie die vier Risikokategorien des EU AI Acts und deren spezifische Compliance-Anforderungen für Ihr KI-System. Praktischer Guide mit Templates und Checklisten." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 mr-2" }),
                "EU AI Act 2024"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 mr-2" }),
                "4 Risikokategorien"
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
        // Always show on desktop
        expandedSection === "toc" ? "block" : "hidden md:grid"
        // Collapsible on mobile
      ), children: [
        /* @__PURE__ */ jsxs("a", { href: "#risikoklassifizierung-ueberblick", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-blue-500 flex-shrink-0" }),
          "Überblick Risikoklassifizierung"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#vier-risikokategorien", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(Gauge, { className: "w-4 h-4 text-orange-500 flex-shrink-0" }),
          "Vier Risikokategorien"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#bewertungsmethodik", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(BarChart3, { className: "w-4 h-4 text-green-500 flex-shrink-0" }),
          "Bewertungsmethodik"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#compliance-pflichten", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(FileCheck, { className: "w-4 h-4 text-purple-500 flex-shrink-0" }),
          "Compliance-Pflichten"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#praxisbeispiele", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(Bot, { className: "w-4 h-4 text-red-500 flex-shrink-0" }),
          "Praxisbeispiele"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#implementation", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 text-indigo-500 flex-shrink-0" }),
          "Implementation"
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
        /* @__PURE__ */ jsxs("div", { id: "risikoklassifizierung-ueberblick", className: "text-center mb-12", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "EU AI Act Risikoklassifizierung" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Der EU AI Act kategorisiert KI-Systeme in vier Risikostufen, die jeweils unterschiedliche rechtliche Anforderungen und Compliance-Pflichten mit sich bringen." })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(PieChart, { className: "w-5 h-5" }),
            "Verteilung der KI-Systeme nach Risikokategorien"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: riskCategories.map((category) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: cn("rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center", category.bgColor), children: /* @__PURE__ */ jsxs("span", { className: cn("text-2xl font-bold", category.textColor), children: [
              category.percentage,
              "%"
            ] }) }),
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-sm", children: category.level })
          ] }, category.level)) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-blue-500" }),
              "Risikoorientiert"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
              "Regulierung richtet sich nach dem Risiko für Grundrechte und Sicherheit, nicht nach der Technologie selbst. Für eine detaillierte Bewertung nutzen Sie unser ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/algorithmic-impact-assessment", className: "text-blue-600 hover:underline", children: "Algorithmic Impact Assessment" }),
              "."
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 text-green-500" }),
              "Anwendungsbezogen"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
              "Klassifizierung erfolgt nach dem Verwendungszweck und Einsatzbereich, nicht nach der zugrundeliegenden KI-Technologie. Implementierung mit ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/privacy-preserving-ai", className: "text-green-600 hover:underline", children: "Privacy-Preserving AI Technologien" }),
              " empfohlen."
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-purple-500" }),
              "Verhältnismäßig"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Compliance-Anforderungen steigen proportional zum Risiko. Low-Risk Systeme bleiben weitgehend unreguliert." }) })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxs("a", { href: "#inhaltsverzeichnis", className: "inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors", children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 rotate-[-90deg]" }),
          "Zurück zum Inhaltsverzeichnis"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "categories", className: "space-y-6", children: [
        /* @__PURE__ */ jsx("div", { id: "vier-risikokategorien", style: { scrollMarginTop: "96px" } }),
        riskCategories.map((category, index) => {
          const Icon = category.icon;
          return /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: cn("border-2", category.borderColor), children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: cn("p-3 rounded-xl bg-gradient-to-br", category.color), children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: category.level }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: category.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { className: cn("text-lg px-4 py-2", category.color), children: [
                    category.percentage,
                    "%"
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }),
                      "Beispielanwendungen"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: category.examples.map((example, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: example })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckSquare, { className: "w-4 h-4" }),
                      category.level === "Unannehmbares Risiko" ? "Verbote" : category.level === "Hohes Risiko" ? "Anforderungen" : "Pflichten"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: (category.prohibitions || category.requirements).map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: item })
                    ] }, idx)) })
                  ] })
                ] }) })
              ] })
            },
            category.level
          );
        })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "assessment", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "bewertungsmethodik", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Bewertungsmethodik" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Systematischer Ansatz zur Klassifizierung Ihres KI-Systems" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: assessmentMethodology.map((phase, index) => {
          const Icon = phase.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-100 rounded-lg", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-blue-600" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "mb-2", children: [
                    "Phase ",
                    index + 1
                  ] }),
                  /* @__PURE__ */ jsx(CardTitle, { children: phase.phase })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: phase.description })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Schritte:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.steps.map((step, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" }),
                  step
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Deliverables:" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: phase.deliverables.map((deliverable, idx) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: deliverable }, idx)) })
              ] })
            ] }) })
          ] }, phase.phase);
        }) }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
            "Assessment Template"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-4", children: [
              "Nutzen Sie unsere strukturierte Vorlage für die Risikoklassifizierung Ihres KI-Systems. Für umfassendere Bewertungen empfehlen wir unser ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/algorithmic-impact-assessment", className: "text-blue-600 hover:underline", children: "Algorithmic Impact Assessment" }),
              "."
            ] }),
            /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-blue-600 to-purple-600", children: [
              /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
              "Template herunterladen"
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "compliance", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "compliance-pflichten", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Compliance-Pflichten Matrix" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Überblick über Anforderungen je Risikokategorie" })
        ] }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
          /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b bg-gray-50", children: [
            /* @__PURE__ */ jsx("th", { className: "text-left p-4 font-semibold", children: "Anforderung" }),
            /* @__PURE__ */ jsx("th", { className: "text-center p-4 font-semibold text-green-700", children: "Minimal" }),
            /* @__PURE__ */ jsx("th", { className: "text-center p-4 font-semibold text-yellow-700", children: "Begrenzt" }),
            /* @__PURE__ */ jsx("th", { className: "text-center p-4 font-semibold text-orange-700", children: "Hoch" }),
            /* @__PURE__ */ jsx("th", { className: "text-center p-4 font-semibold text-red-700", children: "Unerlaubt" })
          ] }) }),
          /* @__PURE__ */ jsx("tbody", { children: complianceMatrix.map((row, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b hover:bg-gray-50", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4", children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: row.requirement }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: row.description })
            ] }) }),
            /* @__PURE__ */ jsx("td", { className: "text-center p-4", children: row.minimal ? /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-green-500 mx-auto" }) : /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-gray-300 mx-auto" }) }),
            /* @__PURE__ */ jsx("td", { className: "text-center p-4", children: row.limited ? /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-yellow-500 mx-auto" }) : /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-gray-300 mx-auto" }) }),
            /* @__PURE__ */ jsx("td", { className: "text-center p-4", children: row.high ? /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-orange-500 mx-auto" }) : /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-gray-300 mx-auto" }) }),
            /* @__PURE__ */ jsx("td", { className: "text-center p-4", children: row.unacceptable ? /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-red-500 mx-auto" }) : /* @__PURE__ */ jsx(Ban, { className: "w-5 h-5 text-red-500 mx-auto" }) })
          ] }, row.requirement)) })
        ] }) }) }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "examples", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "praxisbeispiele", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Praxisbeispiele" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Konkrete Klassifizierungen realer KI-Systeme" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: practicalExamples.map((example, index) => {
          const Icon = example.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: cn("p-3 rounded-xl bg-gradient-to-br", example.color), children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-white" }) }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", children: example.sector })
              ] }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: example.title }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Gauge, { className: "w-4 h-4 text-gray-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: example.classification })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 text-gray-500 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: example.reasoning })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Erforderliche Maßnahmen:" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: example.requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: req })
              ] }, idx)) })
            ] })
          ] }, example.title);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "implementation", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Implementation Roadmap" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Schrittweise Umsetzung der Compliance-Anforderungen" })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckSquare, { className: "w-5 h-5" }),
            "Implementierungs-Checkliste"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
            "Initiale Systemanalyse durchführen",
            "Risikobewertung nach EU AI Act",
            "Compliance-Gap-Analyse erstellen",
            "Implementierungsplan entwickeln",
            "Technische Maßnahmen umsetzen",
            "Organisatorische Prozesse etablieren",
            "Dokumentation vervollständigen",
            "Internes Audit durchführen",
            "Externe Zertifizierung beantragen",
            "Kontinuierliches Monitoring einrichten"
          ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => toggleChecked(`impl-${index}`),
                className: "flex-shrink-0",
                children: checkedItems.has(`impl-${index}`) ? /* @__PURE__ */ jsx(CheckSquare, { className: "w-5 h-5 text-green-500" }) : /* @__PURE__ */ jsx(Square, { className: "w-5 h-5 text-gray-400" })
              }
            ),
            /* @__PURE__ */ jsx("span", { className: cn(
              "text-sm",
              checkedItems.has(`impl-${index}`) ? "line-through text-gray-500" : ""
            ), children: item })
          ] }, index)) }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5" }),
            "Fortschritt"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
              /* @__PURE__ */ jsx("span", { children: "Compliance-Implementierung" }),
              /* @__PURE__ */ jsxs("span", { children: [
                Math.round(checkedItems.size / 10 * 100),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx(Progress, { value: checkedItems.size / 10 * 100, className: "h-2" })
          ] }) }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  KiRisikoklassifizierung as default
};
