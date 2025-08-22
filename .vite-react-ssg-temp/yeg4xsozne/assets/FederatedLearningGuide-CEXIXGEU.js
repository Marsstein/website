import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { Network, GitBranch, Lock, Code, Shield, Layers, Bot, BookOpen, CheckCircle2, Sparkles, Scale, TrendingUp, Link, Building2, ArrowRight, Users, Play, RotateCcw, BarChart, ChevronDown, Target, ThumbsUp, AlertTriangle, X, Globe, Smartphone, Shuffle, ThumbsDown, Server, Brain, Plus, Minus, Heart, CreditCard, Car, BarChart3, Award } from "lucide-react";
import { Link as Link$1 } from "react-router-dom";
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
const FederatedLearningGuide = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [simulationStep, setSimulationStep] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  useEffect(() => {
    document.title = "Federated Learning Guide – Dezentrale KI mit Privacy-by-Design";
    const metaDescription = "Praxisguide für Federated Learning & Differential Privacy: Sichere dezentrale KI-Kollaboration mit mathematischen Privatheitsgarantien.";
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement("meta");
      viewportMeta.setAttribute("name", "viewport");
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute("content", "width=device-width, initial-scale=1");
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute("content", metaDescription);
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", `${window.location.origin}/wissen/ki-datenschutz/federated-learning`);
    const ogTags = [
      { property: "og:title", content: "Federated Learning Guide – Dezentrale KI mit Privacy-by-Design" },
      { property: "og:description", content: metaDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${window.location.origin}/wissen/ki-datenschutz/federated-learning` }
    ];
    ogTags.forEach((tag) => {
      let ogMeta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement("meta");
        ogMeta.setAttribute("property", tag.property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute("content", tag.content);
    });
    const style = document.createElement("style");
    style.textContent = `
      h1, h2, h3, h4, h5, h6 {
        scroll-margin-top: 96px;
      }
      
      @media (max-width: 768px) {
        .mobile-toc-accordion {
          max-height: 300px;
          overflow-y: auto;
        }
        
        body {
          font-size: 16px;
          line-height: 1.6;
        }
        
        a, button {
          min-height: 48px;
          display: flex;
          align-items: center;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const tabs = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "federated-learning", label: "Federated Learning", icon: Network },
    { id: "differential-privacy", label: "Differential Privacy", icon: Lock },
    { id: "architecture", label: "Architektur", icon: Layers },
    { id: "implementation", label: "Implementation", icon: Code },
    { id: "use-cases", label: "Use Cases", icon: Bot }
  ];
  const federatedLearningTypes = [
    {
      type: "Horizontal Federated Learning",
      description: "Gleiche Features, unterschiedliche Nutzer/Samples",
      scenario: "Mehrere Organisationen mit ähnlichen Datenstrukturen",
      examples: [
        "Banken mit Kreditdaten",
        "Krankenhäuser mit Patientendaten",
        "Mobile Apps mit Nutzerdaten"
      ],
      advantages: [
        "Einfache Implementierung",
        "Effiziente Kommunikation",
        "Direkte Modell-Aggregation"
      ],
      challenges: [
        "Homogene Datenverteilung erforderlich",
        "Feature Alignment nötig",
        "Privacy Leakage durch Updates"
      ],
      icon: BarChart,
      color: "from-blue-500 to-cyan-500",
      complexity: "Niedrig"
    },
    {
      type: "Vertical Federated Learning",
      description: "Gleiche Nutzer, unterschiedliche Features",
      scenario: "Organisationen mit überlappenden Nutzerbasen",
      examples: [
        "Bank + E-Commerce (gleiche Kunden)",
        "Telco + Streaming Service",
        "Healthcare + Insurance"
      ],
      advantages: [
        "Reichere Feature-Sets",
        "Bessere Modellqualität",
        "Starke Privacy-Guarantien"
      ],
      challenges: [
        "Komplexe User-ID Alignment",
        "Private Set Intersection nötig",
        "Höhere Kommunikationskosten"
      ],
      icon: Layers,
      color: "from-green-500 to-teal-500",
      complexity: "Hoch"
    },
    {
      type: "Federated Transfer Learning",
      description: "Unterschiedliche Features und Nutzer",
      scenario: "Organisationen mit verwandten aber verschiedenen Domänen",
      examples: [
        "Computer Vision über Branchen",
        "NLP für verschiedene Sprachen",
        "IoT Sensor Data Fusion"
      ],
      advantages: [
        "Maximale Flexibilität",
        "Domain Adaptation möglich",
        "Weniger Daten-Alignment nötig"
      ],
      challenges: [
        "Komplexe Modellarchitektur",
        "Transfer Learning Expertise nötig",
        "Schwierige Konvergenz"
      ],
      icon: GitBranch,
      color: "from-purple-500 to-pink-500",
      complexity: "Sehr Hoch"
    }
  ];
  const differentialPrivacyMechanisms = [
    {
      mechanism: "Global Differential Privacy",
      description: "Zentrale DP-Garantien durch Server-seitige Noise Addition",
      implementation: [
        "Server sammelt Updates",
        "Noise wird zentral hinzugefügt",
        "Aggregation mit DP-Garantien",
        "Globales Modell wird verteilt"
      ],
      advantages: [
        "Einfache Implementation",
        "Starke theoretische Garantien",
        "Zentrale Privacy Budget Kontrolle"
      ],
      disadvantages: [
        "Server sieht rohe Updates",
        "Einzelne Updates nicht geschützt",
        "Vertrauen in Server erforderlich"
      ],
      epsilonRange: "0.1 - 10",
      useCases: ["Statistische Queries", "Model Training", "Federated Analytics"],
      icon: Globe,
      privacyLevel: "Mittel"
    },
    {
      mechanism: "Local Differential Privacy",
      description: "Client-seitige DP vor jeder Datenübertragung",
      implementation: [
        "Clients fügen lokalen Noise hinzu",
        "Nur verrauschte Daten verlassen Client",
        "Server aggregiert verrauschte Updates",
        "Starke lokale Privacy-Garantien"
      ],
      advantages: [
        "Stärkste Privacy-Garantien",
        "Kein Vertrauen in Server nötig",
        "Schutz vor Server Compromise"
      ],
      disadvantages: [
        "Höhere Noise Levels",
        "Schlechtere Model Utility",
        "Komplexere Client Logic"
      ],
      epsilonRange: "0.01 - 1",
      useCases: ["Sensitive Health Data", "Financial Records", "Personal Behavior"],
      icon: Smartphone,
      privacyLevel: "Sehr Hoch"
    },
    {
      mechanism: "Shuffle Differential Privacy",
      description: "Hybrid-Ansatz mit anonymer Shuffle-Phase",
      implementation: [
        "Clients erzeugen multiple Nachrichten",
        "Shuffle-Server mischt anonym",
        "Analytics-Server erhält gemischte Daten",
        "Amplified Privacy durch Anonymität"
      ],
      advantages: [
        "Bessere Utility als LDP",
        "Starke Privacy-Garantien",
        "Privacy Amplification"
      ],
      disadvantages: [
        "Zusätzliche Infrastruktur nötig",
        "Timing Attack Vulnerabilities",
        "Komplexere Protokolle"
      ],
      epsilonRange: "0.1 - 5",
      useCases: ["Large Scale Analytics", "Population Statistics", "Trend Analysis"],
      icon: Shuffle,
      privacyLevel: "Hoch"
    }
  ];
  const architectureComponents = [
    {
      component: "Federation Server",
      responsibilities: [
        "Koordination der Teilnehmer",
        "Modell-Aggregation",
        "Privacy Budget Management",
        "Convergence Monitoring"
      ],
      technologies: ["TensorFlow Federated", "FedML", "PySyft Server"],
      scalability: "Horizontal Scaling möglich",
      security: ["Secure Aggregation", "Byzantine Fault Tolerance", "Authentication"],
      icon: Server
    },
    {
      component: "Client Participants",
      responsibilities: [
        "Lokales Model Training",
        "Gradient/Update Berechnung",
        "Differential Privacy Application",
        "Local Data Management"
      ],
      technologies: ["TensorFlow Lite", "PyTorch Mobile", "Edge Computing"],
      scalability: "Tausende von Clients",
      security: ["Secure Enclaves", "Local DP", "Update Encryption"],
      icon: Smartphone
    },
    {
      component: "Aggregation Layer",
      responsibilities: [
        "Sichere Update-Sammlung",
        "Privacy-Preserving Aggregation",
        "Byzantine Robustness",
        "Fairness Enforcement"
      ],
      technologies: ["Secure Multi-Party Computation", "Homomorphic Encryption"],
      scalability: "Adapter an Teilnehmerzahl",
      security: ["Cryptographic Protocols", "Zero-Knowledge Proofs"],
      icon: Layers
    },
    {
      component: "Privacy Engine",
      responsibilities: [
        "Differential Privacy Mechanisms",
        "Privacy Budget Tracking",
        "Noise Calibration",
        "Privacy Loss Accounting"
      ],
      technologies: ["Google DP Library", "OpenDP", "TensorFlow Privacy"],
      scalability: "Per-Client und Global",
      security: ["Formal Privacy Guarantees", "Audit Trails"],
      icon: Lock
    }
  ];
  const implementationFrameworks = [
    {
      framework: "TensorFlow Federated (TFF)",
      vendor: "Google",
      language: "Python",
      features: [
        "High-level Federated Learning APIs",
        "Differential Privacy Integration",
        "Simulation Environment",
        "Production Deployment Support"
      ],
      advantages: [
        "Starke Community",
        "Umfassende Dokumentation",
        "Google Cloud Integration",
        "Research-grade Features"
      ],
      limitations: [
        "Steile Lernkurve",
        "TensorFlow Dependency",
        "Begrenzte Mobile Support"
      ],
      bestFor: ["Forschung", "Prototyping", "Google Cloud Deployments"],
      maturity: "Production Ready",
      license: "Apache 2.0",
      icon: Brain
    },
    {
      framework: "FedML",
      vendor: "FedML Inc",
      language: "Python",
      features: [
        "Cross-Platform Support",
        "MLOps Integration",
        "Auto-ML Capabilities",
        "Edge Computing Optimization"
      ],
      advantages: [
        "Benutzerfreundliche APIs",
        "Multi-Backend Support",
        "Mobile-First Design",
        "Commercial Support"
      ],
      limitations: [
        "Kleinere Community",
        "Weniger Research Features",
        "Kommerzielle Lizenz für Production"
      ],
      bestFor: ["Production", "Mobile Apps", "IoT Deployments"],
      maturity: "Production Ready",
      license: "Apache 2.0 / Commercial",
      icon: Smartphone
    },
    {
      framework: "PySyft",
      vendor: "OpenMined",
      language: "Python",
      features: [
        "Privacy-First Design",
        "Multi-Party Computation",
        "Homomorphic Encryption",
        "Blockchain Integration"
      ],
      advantages: [
        "Starker Privacy-Fokus",
        "Vielfältige PETs",
        "Open Source Community",
        "Flexible Architectures"
      ],
      limitations: [
        "Alpha/Beta Status",
        "Komplexe Setup",
        "Performance Overhead"
      ],
      bestFor: ["Research", "Privacy-Critical Apps", "Experimentation"],
      maturity: "Alpha/Beta",
      license: "Apache 2.0",
      icon: Shield
    },
    {
      framework: "FATE",
      vendor: "WeBank",
      language: "Python",
      features: [
        "Industrial-Grade Platform",
        "Financial Services Focus",
        "Heterogeneous Learning",
        "Compliance Features"
      ],
      advantages: [
        "Production-bewährt",
        "Financial Industry Expertise",
        "Regulatory Compliance",
        "Enterprise Features"
      ],
      limitations: [
        "Weniger Dokumentation",
        "Banking Domain Bias",
        "Komplexe Architektur"
      ],
      bestFor: ["Financial Services", "Enterprise", "Regulated Industries"],
      maturity: "Production Ready",
      license: "Apache 2.0",
      icon: Building2
    }
  ];
  const practicalUseCases = [
    {
      title: "Healthcare: COVID-19 Research Collaboration",
      industry: "Healthcare",
      participants: "50+ Krankenhäuser weltweit",
      challenge: "Entwicklung besserer COVID-19 Vorhersagemodelle ohne Patientendaten-Sharing",
      solution: {
        type: "Horizontal Federated Learning",
        privacy: "Differential Privacy (ε=1.0)",
        aggregation: "FedAvg with Secure Aggregation",
        technology: "TensorFlow Federated"
      },
      results: {
        modelAccuracy: "15% Verbesserung vs. lokale Modelle",
        privacyGarantees: "Formale DP-Garantien mit ε=1.0",
        dataProtection: "100% - keine Rohdaten verlassen Krankenhäuser",
        deploymentTime: "3 Monate vom Konzept bis Production"
      },
      challenges: [
        "Heterogene IT-Infrastrukturen",
        "Verschiedene EHR-Systeme",
        "Regulatorische Compliance (HIPAA, DSGVO)",
        "Qualitätssicherung der lokalen Daten"
      ],
      outcomes: [
        "Bessere Früherkennung von schweren Verläufen",
        "Reduzierte Hospitalisierungsraten",
        "Neue Insights durch größere Datengrundlage",
        "Etablierung nachhaltiger Forschungskollaboration"
      ],
      icon: Heart,
      roi: "Very High",
      complexity: "High"
    },
    {
      title: "Banking: Cross-Border Fraud Detection",
      industry: "Financial Services",
      participants: "12 europäische Banken",
      challenge: "Grenzüberschreitende Betrugserkennung ohne Kundendaten-Austausch",
      solution: {
        type: "Vertical Federated Learning",
        privacy: "Secure Multi-Party Computation + DP",
        aggregation: "Private Set Intersection + Secure Aggregation",
        technology: "Custom FATE Implementation"
      },
      results: {
        modelAccuracy: "40% weniger False Positives",
        privacyGarantees: "Cryptographic guarantees + DP (ε=0.5)",
        dataProtection: "100% - nur verschlüsselte Updates",
        deploymentTime: "8 Monate inklusive Regulatory Approval"
      },
      challenges: [
        "Komplexe Regulatory Landscape",
        "Private Set Intersection at Scale",
        "Real-time Performance Requirements",
        "Inter-bank Coordination"
      ],
      outcomes: [
        "Deutlich verbesserte Betrugserkennung",
        "Reduzierte False Positive Rates",
        "Schnellere Cross-Border Investigations",
        "Neue Betrugsmuster identifiziert"
      ],
      icon: CreditCard,
      roi: "Very High",
      complexity: "Very High"
    },
    {
      title: "Automotive: Autonomous Driving Improvement",
      industry: "Automotive",
      participants: "5 OEMs + Tier 1 Suppliers",
      challenge: "Verbesserung autonomer Fahrfunktionen ohne Sharing von Fahrzeugdaten",
      solution: {
        type: "Horizontal FL + Transfer Learning",
        privacy: "Local Differential Privacy (ε=0.8)",
        aggregation: "FedAvg with Model Compression",
        technology: "Custom Edge Computing Solution"
      },
      results: {
        modelAccuracy: "25% Verbesserung in Edge Cases",
        privacyGarantees: "Local DP mit ε=0.8 per Vehicle",
        dataProtection: "Vollständige Lokalisierung der Sensordaten",
        deploymentTime: "12 Monate für Production Rollout"
      },
      challenges: [
        "Edge Computing Constraints",
        "Heterogene Fahrzeugflotten",
        "Real-time Processing Requirements",
        "Over-the-Air Update Management"
      ],
      outcomes: [
        "Signifikant bessere Performance in Edge Cases",
        "Reduzierte Entwicklungszeiten",
        "Branchenweite Sicherheitsverbesserungen",
        "Neue Standards für Datenkooperation"
      ],
      icon: Car,
      roi: "High",
      complexity: "High"
    }
  ];
  const simulationSteps = [
    {
      step: "Initialization",
      description: "Globales Modell wird initialisiert und an alle Clients verteilt",
      participants: ["Federation Server"],
      action: "Model Distribution",
      privacy: "N/A"
    },
    {
      step: "Local Training",
      description: "Jeder Client trainiert das Modell auf seinen lokalen Daten",
      participants: ["Client 1", "Client 2", "Client 3", "..."],
      action: "Local SGD Training",
      privacy: "Local Data stays on Device"
    },
    {
      step: "Privacy Application",
      description: "Differential Privacy wird auf die lokalen Updates angewendet",
      participants: ["All Clients"],
      action: "Add Calibrated Noise",
      privacy: "DP with ε=1.0"
    },
    {
      step: "Secure Aggregation",
      description: "Updates werden sicher aggregiert ohne Preisgabe einzelner Updates",
      participants: ["Federation Server"],
      action: "Cryptographic Aggregation",
      privacy: "Individual Updates Protected"
    },
    {
      step: "Model Update",
      description: "Neues globales Modell wird berechnet und verteilt",
      participants: ["Federation Server"],
      action: "FedAvg Algorithm",
      privacy: "Only Aggregate Visible"
    },
    {
      step: "Convergence Check",
      description: "Prüfung ob weitere Runden nötig sind",
      participants: ["Federation Server"],
      action: "Evaluate Convergence",
      privacy: "Aggregate Metrics Only"
    }
  ];
  const toggleExpanded = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const nextSimulationStep = () => {
    setSimulationStep((prev) => (prev + 1) % simulationSteps.length);
  };
  const resetSimulation = () => {
    setSimulationStep(0);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white", children: [
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
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsx(Network, { className: "w-16 h-16 text-white" }) }) }),
            /* @__PURE__ */ jsx("h1", { id: "federated-learning-guide", className: "text-5xl font-bold text-white mb-6", children: "Federated Learning & Differential Privacy" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto mb-8", children: "Dezentrales maschinelles Lernen mit mathematischen Privatheitsgarantien: Ihr umfassender Guide für sichere und skalierbare KI-Kollaboration" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(GitBranch, { className: "w-4 h-4 mr-2" }),
                "3 FL Paradigmen"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Lock, { className: "w-4 h-4 mr-2" }),
                "Differential Privacy"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 mr-2" }),
                "4 Production Frameworks"
              ] })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: /* @__PURE__ */ jsx(TabsList, { className: "grid w-full grid-cols-6 h-auto p-1", children: tabs.map((tab) => {
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
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5" }),
        "Inhaltsverzeichnis"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: cn("space-y-2", "md:grid md:grid-cols-2 md:gap-6 md:space-y-0"), children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#ueberblick",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Überblick & Vorteile" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#federated-learning-paradigmen",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Network, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Federated Learning Paradigmen" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#differential-privacy-mechanismen",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Lock, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Differential Privacy Mechanismen" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#system-architektur",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Layers, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "FL+DP System Architektur" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#implementation-frameworks",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Implementation Frameworks" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#production-use-cases",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Bot, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Production Use Cases" })
              ]
            }
          )
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsxs(TabsContent, { value: "overview", className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { id: "ueberblick", className: "text-3xl font-bold mb-4", children: "Federated Learning & Differential Privacy" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Die Kombination von Federated Learning und Differential Privacy ermöglicht es, KI-Modelle zu trainieren ohne dabei sensible Daten zu zentralisieren oder die Privatsphäre zu kompromittieren." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Network, { className: "w-6 h-6 text-purple-500" }),
              "Federated Learning"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Dezentrales maschinelles Lernen, bei dem Modelle lokal trainiert und nur die Updates (nicht die Daten) geteilt werden." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Daten bleiben lokal" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Skalierbare Kooperation" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Bessere Modelle durch mehr Daten" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Lock, { className: "w-6 h-6 text-blue-500" }),
              "Differential Privacy"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Mathematisch bewiesene Privatheitsgarantien durch kontrollierten Rausch in den geteilten Modell-Updates." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Formale Privacy-Garantien" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Quantifizierbare Privacy Loss" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Schutz vor Inference Attacks" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "w-5 h-5 text-green-500" }),
            "Die Synergie: FL + DP"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-white rounded-lg shadow-sm w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-green-500" }) }),
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Maximaler Datenschutz" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Doppelter Schutz durch Lokalisierung + mathematische Privatheit" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-white rounded-lg shadow-sm w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Scale, { className: "w-8 h-8 text-blue-500" }) }),
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Regulatory Compliance" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Erfüllung strengster Datenschutzanforderungen (DSGVO, HIPAA)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-white rounded-lg shadow-sm w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-8 h-8 text-purple-500" }) }),
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Business Value" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Sichere Datenkooperation ermöglicht bessere AI-Modelle" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Link, { className: "w-5 h-5" }),
            "Verwandte KI-Compliance Ressourcen"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs(
              Link$1,
              {
                to: "/wissen/ki-datenschutz/financial-ai-compliance",
                className: "flex items-center gap-3 p-4 border rounded-lg hover:border-blue-300 hover:shadow-md transition-all min-h-[48px]",
                children: [
                  /* @__PURE__ */ jsx(Building2, { className: "w-5 h-5 text-blue-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800", children: "Financial AI Compliance" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Regulatorische Anforderungen für KI im Finanzsektor" })
                  ] }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-blue-600 flex-shrink-0" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link$1,
              {
                to: "/wissen/ki-datenschutz/hr-ai-compliance",
                className: "flex items-center gap-3 p-4 border rounded-lg hover:border-blue-300 hover:shadow-md transition-all min-h-[48px]",
                children: [
                  /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-blue-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800", children: "HR AI Compliance" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Compliance für KI-Systeme im Personalwesen" })
                  ] }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-blue-600 flex-shrink-0" })
                ]
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Play, { className: "w-5 h-5" }),
            "Federated Learning Simulation"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-gray-600 mb-4", children: [
              "Schritt ",
              simulationStep + 1,
              " von ",
              simulationSteps.length,
              ": ",
              simulationSteps[simulationStep].description
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 mb-4", children: [
              /* @__PURE__ */ jsxs(Button, { onClick: nextSimulationStep, className: "bg-gradient-to-r from-purple-600 to-blue-600", children: [
                /* @__PURE__ */ jsx(Play, { className: "w-4 h-4 mr-2" }),
                "Nächster Schritt"
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: resetSimulation, children: [
                /* @__PURE__ */ jsx(RotateCcw, { className: "w-4 h-4 mr-2" }),
                "Reset"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Aktion" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: simulationSteps[simulationStep].action })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Teilnehmer" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: simulationSteps[simulationStep].participants.join(", ") })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Privacy" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: simulationSteps[simulationStep].privacy })
              ] })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "federated-learning", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "federated-learning-paradigmen", className: "text-3xl font-bold mb-4", children: "Federated Learning Paradigmen" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Drei Hauptansätze für dezentrales maschinelles Lernen" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: federatedLearningTypes.map((flType, index) => {
          const Icon = flType.icon;
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
                      flType.color
                    ), children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                        /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: flType.type }),
                        /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                          "Komplexität: ",
                          flType.complexity
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: flType.description }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500 mt-1", children: flType.scenario })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => toggleExpanded(`fl-${index}`),
                      children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "w-4 h-4 transition-transform",
                        expandedSection === `fl-${index}` && "rotate-180"
                      ) })
                    }
                  )
                ] }) }),
                expandedSection === `fl-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Target, { className: "w-4 h-4" }),
                      "Beispiele"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: flType.examples.map((example, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" }),
                      example
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(ThumbsUp, { className: "w-4 h-4 text-green-500" }),
                      "Vorteile"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: flType.advantages.map((advantage, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-green-500 mt-1 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: advantage })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                      "Herausforderungen"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: flType.challenges.map((challenge, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(X, { className: "w-3 h-3 text-orange-500 mt-1 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: challenge })
                    ] }, idx)) })
                  ] })
                ] }) })
              ] })
            },
            flType.type
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "differential-privacy", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "differential-privacy-mechanismen", className: "text-3xl font-bold mb-4", children: "Differential Privacy Mechanismen" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Mathematische Privatheitsgarantien für Federated Learning" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: differentialPrivacyMechanisms.map((mechanism, index) => {
          const Icon = mechanism.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-100 rounded-xl", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8 text-blue-600" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                    /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: mechanism.mechanism }),
                    /* @__PURE__ */ jsxs(Badge, { variant: mechanism.privacyLevel === "Sehr Hoch" ? "default" : mechanism.privacyLevel === "Hoch" ? "secondary" : "outline", children: [
                      mechanism.privacyLevel,
                      " Privacy"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: mechanism.description })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleExpanded(`dp-${index}`),
                  children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                    "w-4 h-4 transition-transform",
                    expandedSection === `dp-${index}` && "rotate-180"
                  ) })
                }
              )
            ] }) }),
            expandedSection === `dp-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Implementation:" }),
                  /* @__PURE__ */ jsx("ol", { className: "space-y-2", children: mechanism.implementation.map((step, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
                    /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold", children: idx + 1 }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: step })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Epsilon Range:" }),
                  /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-sm", children: [
                    "ε = ",
                    mechanism.epsilonRange
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2 text-green-700", children: [
                    /* @__PURE__ */ jsx(ThumbsUp, { className: "w-4 h-4" }),
                    "Vorteile"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: mechanism.advantages.map((advantage, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-green-500 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: advantage })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2 text-orange-700", children: [
                    /* @__PURE__ */ jsx(ThumbsDown, { className: "w-4 h-4" }),
                    "Nachteile"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: mechanism.disadvantages.map((disadvantage, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(X, { className: "w-3 h-3 text-orange-500 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: disadvantage })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Typische Use Cases:" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: mechanism.useCases.map((useCase, idx) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: useCase }, idx)) })
                ] })
              ] })
            ] }) })
          ] }, mechanism.mechanism);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "architecture", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "system-architektur", className: "text-3xl font-bold mb-4", children: "FL+DP System Architektur" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Komponenten einer produktionstauglichen FL+DP Lösung" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: architectureComponents.map((component, index) => {
          const Icon = component.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: component.component })
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Verantwortlichkeiten:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: component.responsibilities.map((responsibility, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: responsibility })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Technologien:" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: component.technologies.map((tech, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: tech }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Skalierbarkeit:" }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: component.scalability })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Security Features:" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: component.security.map((feature, idx) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: feature }, idx)) })
              ] })
            ] }) })
          ] }, component.component);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "implementation-frameworks", className: "text-3xl font-bold mb-4", children: "Implementation Frameworks" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Production-ready Frameworks für FL+DP Deployment" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: implementationFrameworks.map((framework, index) => {
          const Icon = framework.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: framework.framework }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                    framework.vendor,
                    " • ",
                    framework.language
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsx(Badge, { variant: framework.maturity === "Production Ready" ? "default" : "secondary", children: framework.maturity }) })
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Key Features:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: framework.features.map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm text-green-700", children: "Vorteile:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: framework.advantages.slice(0, 2).map((advantage, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                    /* @__PURE__ */ jsx(Plus, { className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: advantage })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm text-orange-700", children: "Limitationen:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: framework.limitations.slice(0, 2).map((limitation, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                    /* @__PURE__ */ jsx(Minus, { className: "w-3 h-3 text-orange-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: limitation })
                  ] }, idx)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Best For:" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: framework.bestFor.map((use, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: use }, idx)) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "pt-2 border-t", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "License:" }),
                /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: framework.license })
              ] }) })
            ] }) })
          ] }, framework.framework);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "use-cases", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "production-use-cases", className: "text-3xl font-bold mb-4", children: "Production Use Cases" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Erfolgreiche FL+DP Implementierungen in der Praxis" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: practicalUseCases.map((useCase, index) => {
          const Icon = useCase.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                    /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: useCase.title }),
                    /* @__PURE__ */ jsx(Badge, { variant: "outline", children: useCase.industry })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-1", children: useCase.participants }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: useCase.challenge })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsxs(Badge, { className: cn(
                  useCase.roi === "Very High" ? "bg-green-500" : "bg-blue-500"
                ), children: [
                  "ROI: ",
                  useCase.roi
                ] }),
                /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "ml-2", children: [
                  useCase.complexity,
                  " Complexity"
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Code, { className: "w-4 h-4" }),
                    "Technical Solution"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3 bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Type:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: useCase.solution.type })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Privacy:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: useCase.solution.privacy })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Aggregation:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: useCase.solution.aggregation })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Technology:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: useCase.solution.technology })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(BarChart3, { className: "w-4 h-4" }),
                    "Results"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3 bg-green-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Model Accuracy:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: useCase.results.modelAccuracy })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Privacy Guarantees:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: useCase.results.privacyGarantees })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Data Protection:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: useCase.results.dataProtection })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Deployment Time:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: useCase.results.deploymentTime })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                    "Challenges"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: useCase.challenges.map((challenge, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(X, { className: "w-3 h-3 text-orange-500 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: challenge })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-green-500" }),
                    "Outcomes"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: useCase.outcomes.map((outcome, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-green-500 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: outcome })
                  ] }, idx)) })
                ] })
              ] })
            ] })
          ] }, useCase.title);
        }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  FederatedLearningGuide as default
};
