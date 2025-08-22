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
import { ShieldCheck, Lock, Shield, Code, BookOpen, ChevronDown, Layers, Bot, CheckSquare, Scale, Network, Gauge, GitBranch, Sparkles, Eye, Lightbulb, CheckCircle2, AlertTriangle, ArrowRight, Settings, Target, ThumbsUp, X, Activity, Search, Zap, Square, Users, FileText, FileCheck, Wrench, Heart, CreditCard, Building2, Car, Award, Download } from "lucide-react";
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
const PrivacyPreservingAI = () => {
  useEffect(() => {
    document.title = "Privacy-Preserving AI – Datenschutzfreundliche KI-Lösungen";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "6 Privacy-Preserving AI Technologien: Differential Privacy bis Homomorphic Encryption. Praxis-Guide für datenschutzkonforme KI-Systeme.");
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = "6 Privacy-Preserving AI Technologien: Differential Privacy bis Homomorphic Encryption. Praxis-Guide für datenschutzkonforme KI-Systeme.";
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
  const [implementationProgress, setImplementationProgress] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const tabs = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "technologies", label: "Technologien", icon: ShieldCheck },
    { id: "implementation", label: "Implementation", icon: Code },
    { id: "frameworks", label: "Frameworks", icon: Layers },
    { id: "use-cases", label: "Use Cases", icon: Bot },
    { id: "compliance", label: "Compliance", icon: CheckSquare }
  ];
  const privacyTechnologies = [
    {
      name: "Differential Privacy",
      category: "Mathematische Privatheit",
      description: "Mathematisch bewiesene Privatheitsgarantien durch kontrollierten Rausch",
      mechanisms: [
        "Laplace Mechanism",
        "Gaussian Mechanism",
        "Exponential Mechanism",
        "Composition Theorems"
      ],
      useCases: [
        "Statistische Auswertungen",
        "Modelltraining mit Privatheit",
        "Syndatische Datengenerierung",
        "Query-Response Systeme"
      ],
      advantages: [
        "Mathematische Garantien",
        "Quantifizierbare Privacy Loss",
        "Kompositionsfähigkeit",
        "Robustheit gegen Angriffe"
      ],
      challenges: [
        "Utility-Privacy Trade-off",
        "Parameter-Tuning komplex",
        "Erklärbarkeit schwierig",
        "Skalierungsprobleme"
      ],
      maturityLevel: "Production Ready",
      icon: Gauge,
      color: "from-blue-500 to-cyan-500",
      compliance: ["DSGVO Art. 25", "EU AI Act", "CCPA"]
    },
    {
      name: "Homomorphic Encryption",
      category: "Verschlüsselung",
      description: "Berechnungen auf verschlüsselten Daten ohne Entschlüsselung",
      mechanisms: [
        "Partially Homomorphic (PHE)",
        "Somewhat Homomorphic (SHE)",
        "Fully Homomorphic (FHE)",
        "Leveled FHE"
      ],
      useCases: [
        "Sichere Cloud-Computing",
        "Private Set Intersection",
        "Sichere Multi-Party Computation",
        "Encrypted Search"
      ],
      advantages: [
        "Daten bleiben verschlüsselt",
        "Starke Sicherheitsgarantien",
        "Flexible Berechnungen",
        "Vertrauenslose Umgebungen"
      ],
      challenges: [
        "Hohe Rechenkosten",
        "Komplexe Implementation",
        "Begrenzte Operationen",
        "Noise Management"
      ],
      maturityLevel: "Research/Early Production",
      icon: Lock,
      color: "from-purple-500 to-pink-500",
      compliance: ["DSGVO Art. 32", "ISO 27001", "FIPS 140-2"]
    },
    {
      name: "Secure Multi-Party Computation",
      category: "Verteilte Berechnung",
      description: "Gemeinsame Berechnungen ohne Preisgabe privater Inputs",
      mechanisms: [
        "Secret Sharing",
        "Garbled Circuits",
        "Oblivious Transfer",
        "Zero-Knowledge Proofs"
      ],
      useCases: [
        "Federated Learning",
        "Private Benchmarking",
        "Sichere Auktionen",
        "Joint Data Analysis"
      ],
      advantages: [
        "Keine zentrale Vertrauensinstanz",
        "Mathematische Sicherheit",
        "Flexible Protokolle",
        "Skalierbare Lösungen"
      ],
      challenges: [
        "Kommunikationsoverhead",
        "Komplexe Koordination",
        "Semi-honest Assumptions",
        "Fault Tolerance"
      ],
      maturityLevel: "Production Ready",
      icon: Network,
      color: "from-green-500 to-teal-500",
      compliance: ["GDPR Art. 28", "EU AI Act", "SOC 2"]
    },
    {
      name: "Federated Learning",
      category: "Dezentrales Lernen",
      description: "Modelltraining ohne zentrale Datensammlung",
      mechanisms: [
        "Horizontal Federation",
        "Vertical Federation",
        "Federated Transfer Learning",
        "Secure Aggregation"
      ],
      useCases: [
        "Mobile Keyboard Prediction",
        "Healthcare Collaboration",
        "Financial Risk Modeling",
        "Cross-Silo Analytics"
      ],
      advantages: [
        "Daten bleiben lokal",
        "Reduzierte Datenübertragung",
        "Personalisierte Modelle",
        "Regulatory Compliance"
      ],
      challenges: [
        "Non-IID Daten",
        "Communication Bottlenecks",
        "Model Poisoning",
        "Convergence Issues"
      ],
      maturityLevel: "Production Ready",
      icon: GitBranch,
      color: "from-orange-500 to-red-500",
      compliance: ["DSGVO Art. 5", "HIPAA", "PCI DSS"]
    },
    {
      name: "Synthetic Data Generation",
      category: "Datenersatz",
      description: "Künstlich generierte Daten mit statistischen Eigenschaften der Originaldaten",
      mechanisms: [
        "Generative Adversarial Networks",
        "Variational Autoencoders",
        "Bayesian Networks",
        "Diffusion Models"
      ],
      useCases: [
        "ML Model Training",
        "Testing und Development",
        "Data Sharing",
        "Augmentation"
      ],
      advantages: [
        "Keine echten Personendaten",
        "Unbegrenzte Verfügbarkeit",
        "Bias Reduction möglich",
        "Flexible Generierung"
      ],
      challenges: [
        "Utility Preservation",
        "Membership Inference",
        "Mode Collapse",
        "Evaluation Schwierigkeiten"
      ],
      maturityLevel: "Production Ready",
      icon: Sparkles,
      color: "from-indigo-500 to-purple-500",
      compliance: ["DSGVO Art. 6", "EU AI Act", "Medical Device Regulation"]
    },
    {
      name: "Zero-Knowledge Proofs",
      category: "Kryptographische Beweise",
      description: "Nachweis von Wissen ohne Preisgabe der Information selbst",
      mechanisms: [
        "zk-SNARKs",
        "zk-STARKs",
        "Bulletproofs",
        "Interactive Proofs"
      ],
      useCases: [
        "Identity Verification",
        "Compliance Nachweise",
        "Private Credentials",
        "Blockchain Privacy"
      ],
      advantages: [
        "Vollständige Privatheit",
        "Verifizierbare Nachweise",
        "Skalierbare Verification",
        "Composability"
      ],
      challenges: [
        "Setup Komplexität",
        "Trusted Setup Requirements",
        "Proof Generation Costs",
        "Limited Expressiveness"
      ],
      maturityLevel: "Research/Early Production",
      icon: Eye,
      color: "from-yellow-500 to-orange-500",
      compliance: ["eIDAS", "GDPR Art. 12", "Know Your Customer"]
    }
  ];
  const implementationGuide = [
    {
      phase: "Assessment & Planning",
      duration: "2-4 Wochen",
      description: "Analyse der Anforderungen und Technologieauswahl",
      tasks: [
        "Privacy Requirements Analysis",
        "Threat Modeling durchführen",
        "Technologie-Evaluation",
        "ROI und Feasibility Assessment",
        "Roadmap und Budget Planning"
      ],
      deliverables: [
        "Privacy Requirements Document",
        "Technology Assessment Report",
        "Implementation Roadmap",
        "Budget und Resource Plan"
      ],
      tools: [
        "LINDDUN Methodology",
        "Privacy Impact Assessment Tools",
        "Technology Comparison Matrix",
        "Cost-Benefit Analysis Templates"
      ],
      icon: Search,
      stakeholders: ["Privacy Officer", "Security Team", "ML Engineers", "Legal"]
    },
    {
      phase: "Proof of Concept",
      duration: "4-8 Wochen",
      description: "Prototypische Implementation der gewählten Technologie",
      tasks: [
        "Development Environment Setup",
        "Core Algorithm Implementation",
        "Initial Testing mit Testdaten",
        "Performance Benchmarking",
        "Privacy Metrics Validation"
      ],
      deliverables: [
        "Working Prototype",
        "Performance Benchmarks",
        "Privacy Analysis Report",
        "Technical Documentation"
      ],
      tools: [
        "PySyft Framework",
        "TensorFlow Privacy",
        "Microsoft SEAL",
        "OpenMined Tools"
      ],
      icon: Code,
      stakeholders: ["ML Engineers", "Security Researchers", "Data Scientists"]
    },
    {
      phase: "Security & Privacy Validation",
      duration: "3-6 Wochen",
      description: "Umfassende Sicherheits- und Privatheitsvalidierung",
      tasks: [
        "Security Penetration Testing",
        "Privacy Attack Simulation",
        "Formal Verification (falls möglich)",
        "Compliance Gap Analysis",
        "Third-party Security Audit"
      ],
      deliverables: [
        "Security Assessment Report",
        "Privacy Analysis Results",
        "Compliance Certification",
        "Audit Findings und Recommendations"
      ],
      tools: [
        "Privacy Meter",
        "ML Privacy Meter",
        "Adversarial Testing Frameworks",
        "Formal Verification Tools"
      ],
      icon: Shield,
      stakeholders: ["Security Auditors", "Privacy Experts", "Compliance Team"]
    },
    {
      phase: "Production Implementation",
      duration: "8-16 Wochen",
      description: "Vollständige Integration in Produktionsumgebung",
      tasks: [
        "Scalable Architecture Design",
        "Production-grade Implementation",
        "Monitoring und Logging Setup",
        "Deployment Pipeline Integration",
        "User Training und Documentation"
      ],
      deliverables: [
        "Production System",
        "Monitoring Dashboard",
        "Deployment Documentation",
        "User Training Materials"
      ],
      tools: [
        "Kubernetes Deployment",
        "Container Orchestration",
        "CI/CD Pipelines",
        "Monitoring Solutions"
      ],
      icon: Zap,
      stakeholders: ["DevOps Team", "ML Engineers", "Product Teams"]
    },
    {
      phase: "Monitoring & Optimization",
      duration: "Ongoing",
      description: "Kontinuierliche Überwachung und Verbesserung",
      tasks: [
        "Privacy Metrics Monitoring",
        "Performance Optimization",
        "Regular Security Reviews",
        "Compliance Monitoring",
        "Technology Updates und Patches"
      ],
      deliverables: [
        "Monitoring Reports",
        "Optimization Recommendations",
        "Compliance Status Updates",
        "Technology Roadmap Updates"
      ],
      tools: [
        "Privacy Monitoring Tools",
        "Performance Analytics",
        "Compliance Dashboards",
        "Automated Testing Suites"
      ],
      icon: Activity,
      stakeholders: ["Operations Team", "Privacy Officer", "Security Team"]
    }
  ];
  const practicalUseCases = [
    {
      title: "Healthcare Data Collaboration",
      industry: "Healthcare",
      challenge: "Krankenhaus-übergreifende KI-Modelle ohne Patientendaten-Sharing",
      solution: "Federated Learning mit Differential Privacy",
      technologies: ["Federated Learning", "Differential Privacy", "Secure Aggregation"],
      benefits: [
        "HIPAA/DSGVO konforme Zusammenarbeit",
        "Bessere Modellqualität durch mehr Daten",
        "Lokale Datenkontrolle bleibt erhalten",
        "Reduzierte Regulatory Risks"
      ],
      challenges: [
        "Heterogene IT-Infrastrukturen",
        "Verschiedene Datenformate",
        "Unterschiedliche Compliance-Anforderungen"
      ],
      outcome: "15% bessere Diagnosegenauigkeit bei vollem Datenschutz",
      icon: Heart,
      roi: "High",
      timeframe: "6-12 Monate"
    },
    {
      title: "Financial Fraud Detection",
      industry: "Financial Services",
      challenge: "Bank-übergreifende Betrugserkennung ohne Kundendaten-Austausch",
      solution: "Secure Multi-Party Computation für gemeinsame Risikomodelle",
      technologies: ["Secure Multi-Party Computation", "Zero-Knowledge Proofs", "Homomorphic Encryption"],
      benefits: [
        "Verbesserte Betrugserkennung",
        "Keine Preisgabe von Kundendaten",
        "Regulatory Compliance",
        "Branchenweite Collaboration"
      ],
      challenges: [
        "Hohe Rechenkosten",
        "Komplexe Koordination zwischen Banken",
        "Regulatory Approval Prozesse"
      ],
      outcome: "40% Reduktion von False Positives bei 25% besserer Detection Rate",
      icon: CreditCard,
      roi: "Very High",
      timeframe: "12-18 Monate"
    },
    {
      title: "Smart City Analytics",
      industry: "Public Sector",
      challenge: "Bürger-freundliche Datenanalyse für Stadtplanung",
      solution: "Differential Privacy für aggregierte Statistiken",
      technologies: ["Differential Privacy", "Synthetic Data Generation", "Local Differential Privacy"],
      benefits: [
        "Transparente Datennutzung",
        "Bürgerdaten bleiben privat",
        "Bessere Stadtplanung durch Datenanalyse",
        "Öffentliches Vertrauen"
      ],
      challenges: [
        "Balancing Utility vs Privacy",
        "Öffentliche Akzeptanz",
        "Legacy System Integration"
      ],
      outcome: "Öffentliche Akzeptanz von 85% für datenbasierte Stadtplanung",
      icon: Building2,
      roi: "Medium",
      timeframe: "6-9 Monate"
    },
    {
      title: "Automotive Data Sharing",
      industry: "Automotive",
      challenge: "Fahrzeugdaten für autonomes Fahren ohne Privacy-Verletzung",
      solution: "Federated Learning mit Edge Computing",
      technologies: ["Federated Learning", "Edge Computing", "Differential Privacy"],
      benefits: [
        "Bessere autonome Fahrfunktionen",
        "Lokale Datenverarbeitung",
        "Reduzierte Datenübertragung",
        "Privacy-by-Design"
      ],
      challenges: [
        "Edge Computing Constraints",
        "Heterogene Fahrzeugflotten",
        "Real-time Requirements"
      ],
      outcome: "30% Verbesserung der Fahrfunktionen bei vollständiger Lokalisierung",
      icon: Car,
      roi: "High",
      timeframe: "9-15 Monate"
    }
  ];
  const complianceFramework = [
    {
      regulation: "DSGVO/GDPR",
      relevantArticles: ["Art. 5 (Datenminimierung)", "Art. 25 (Privacy by Design)", "Art. 32 (Sicherheit)"],
      requirements: [
        "Datenminimierung implementieren",
        "Privacy by Design Principles",
        "Angemessene technische Maßnahmen",
        "Nachweis der Compliance"
      ],
      ppaiSolutions: [
        "Differential Privacy für Minimierung",
        "PETs als Privacy by Design",
        "Verschlüsselung und Secure Computation",
        "Auditable Privacy Mechanisms"
      ],
      complianceLevel: "Full Compliance"
    },
    {
      regulation: "EU AI Act",
      relevantArticles: ["Art. 10 (Datenqualität)", "Art. 15 (Genauigkeit)", "Art. 9 (Risikomanagement)"],
      requirements: [
        "Robuste Datenverarbeitung",
        "Bias Detection und Mitigation",
        "Kontinuierliches Risikomanagement",
        "Transparenz über Systemfunktionen"
      ],
      ppaiSolutions: [
        "Privacy-Preserving Data Quality Checks",
        "Federated Bias Testing",
        "Private Risk Assessment",
        "Explainable Privacy Mechanisms"
      ],
      complianceLevel: "Enables Compliance"
    },
    {
      regulation: "CCPA/CPRA",
      relevantArticles: ["Sec. 1798.100 (Consumer Rights)", "Sec. 1798.130 (Business Obligations)"],
      requirements: [
        "Transparenz über Datenverarbeitung",
        "Consumer Choice und Control",
        "Secure Data Processing",
        "Right to Delete"
      ],
      ppaiSolutions: [
        "Private Analytics mit Transparency",
        "User-controlled Privacy Parameters",
        "Secure Multi-Party Computation",
        "Cryptographic Deletion"
      ],
      complianceLevel: "Enhanced Compliance"
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
    const totalTasks = implementationGuide.reduce((acc, phase) => acc + phase.tasks.length, 0);
    setImplementationProgress(newChecked.size / totalTasks * 100);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white", style: {
    fontSize: "16px",
    lineHeight: "1.6"
  }, children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { ref: heroRef, className: "relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-teal-900", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          style: { y, opacity },
          className: "absolute inset-0",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/grid.svg')] opacity-10" }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl opacity-30" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl opacity-20" })
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
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-br from-green-600 to-teal-600 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "w-16 h-16 text-white" }) }) }),
            /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-white mb-6", children: "Privacy-Preserving AI Technologien Guide" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto mb-8", children: "Moderne Technologien für datenschutzfreundliche KI-Entwicklung: Von Differential Privacy bis Homomorphic Encryption - Ihr Guide für sichere und DSGVO-konforme AI-Systeme." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Lock, { className: "w-4 h-4 mr-2" }),
                "6 Core Technologies"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 mr-2" }),
                "Production Ready"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 mr-2" }),
                "Implementation Guides"
              ] })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-6 border", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => toggleExpanded("toc"),
          className: "flex items-center gap-2 w-full text-left md:cursor-default",
          children: [
            /* @__PURE__ */ jsxs("h2", { id: "inhaltsverzeichnis", className: "text-2xl font-bold flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "w-6 h-6 text-green-600" }),
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
        /* @__PURE__ */ jsxs("a", { href: "#ppai-ueberblick", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-green-500 flex-shrink-0" }),
          "PPAI Überblick"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#ppai-technologien", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(ShieldCheck, { className: "w-4 h-4 text-blue-500 flex-shrink-0" }),
          "6 Core Technologien"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#implementation-roadmap", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 text-purple-500 flex-shrink-0" }),
          "Implementation Guide"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#ppai-frameworks", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(Layers, { className: "w-4 h-4 text-orange-500 flex-shrink-0" }),
          "Frameworks & Tools"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#real-world-use-cases", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(Bot, { className: "w-4 h-4 text-red-500 flex-shrink-0" }),
          "Real-World Use Cases"
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#regulatory-compliance", className: "flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]", children: [
          /* @__PURE__ */ jsx(CheckSquare, { className: "w-4 h-4 text-indigo-500 flex-shrink-0" }),
          "Regulatory Compliance"
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
        /* @__PURE__ */ jsxs("div", { id: "ppai-ueberblick", className: "text-center mb-12", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Privacy-Preserving AI (PPAI)" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Technologien und Methoden, die es ermöglichen, KI-Systeme zu entwickeln und zu betreiben, ohne dabei die Privatsphäre der zugrundeliegenden Daten zu kompromittieren." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-green-100 bg-gradient-to-br from-green-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-green-500" }),
              "Datenschutz"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Mathematisch bewiesene Privatheitsgarantien bei vollem Funktionsumfang der KI-Anwendungen." }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-blue-500" }),
              "Compliance"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Erfüllung von DSGVO, EU AI Act und anderen Datenschutz- regulierungen durch technische Maßnahmen." }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Network, { className: "w-5 h-5 text-purple-500" }),
              "Collaboration"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Sichere Datenkooperation zwischen Organisationen ohne Preisgabe sensibler Informationen." }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Layers, { className: "w-5 h-5" }),
            "PPAI Technology Landscape"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: privacyTechnologies.map((tech, index) => /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded-lg hover:shadow-md transition-shadow", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "p-2 rounded-lg bg-gradient-to-br",
                tech.color
              ), children: /* @__PURE__ */ jsx(tech.icon, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: tech.maturityLevel })
            ] }),
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-1", children: tech.name }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mb-2", children: tech.category }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700", children: tech.description })
          ] }, tech.name)) }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Lightbulb, { className: "w-5 h-5 text-yellow-500" }),
            "Wann sollten Sie PPAI einsetzen?"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-700", children: "Starke Indikatoren:" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Sensible Personendaten (Gesundheit, Finanzen)" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Multi-Party Datenkooperation erforderlich" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Strenge Regulatory Requirements" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Öffentlicher Sektor / kritische Infrastruktur" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-orange-700", children: "Zu berücksichtigen:" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Erhöhte Komplexität in Development" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Performance Trade-offs möglich" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Höhere Implementierungskosten" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Spezialisierte Expertise erforderlich" })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxs("a", { href: "#inhaltsverzeichnis", className: "inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-green-600 transition-colors", children: [
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 rotate-[-90deg]" }),
          "Zurück zum Inhaltsverzeichnis"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "technologies", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "ppai-technologien", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Core PPAI Technologies" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Detaillierte Übersicht der wichtigsten Privacy-Preserving AI Technologien" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: privacyTechnologies.map((tech, index) => {
          const Icon = tech.icon;
          return /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: cn(
                      "p-3 rounded-xl bg-gradient-to-br text-white",
                      tech.color
                    ), children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                        /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: tech.name }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", children: tech.maturityLevel })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: tech.description }),
                      /* @__PURE__ */ jsx(Badge, { className: "mt-2", children: tech.category })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => toggleExpanded(`tech-${index}`),
                      children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "w-4 h-4 transition-transform",
                        expandedSection === `tech-${index}` && "rotate-180"
                      ) })
                    }
                  )
                ] }) }),
                expandedSection === `tech-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Settings, { className: "w-4 h-4" }),
                        "Mechanismen"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: tech.mechanisms.map((mechanism, idx) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: mechanism }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Target, { className: "w-4 h-4" }),
                        "Use Cases"
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: tech.useCases.map((useCase, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" }),
                        useCase
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4" }),
                        "Compliance"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: tech.compliance.map((comp, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: comp }, idx)) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(ThumbsUp, { className: "w-4 h-4 text-green-500" }),
                        "Vorteile"
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: tech.advantages.map((advantage, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-green-500 mt-1 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: advantage })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                        "Herausforderungen"
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: tech.challenges.map((challenge, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(X, { className: "w-3 h-3 text-orange-500 mt-1 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: challenge })
                      ] }, idx)) })
                    ] })
                  ] })
                ] }) })
              ] })
            },
            tech.name
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "implementation-roadmap", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Implementation Roadmap" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "5-Phasen Ansatz für erfolgreiche PPAI Implementation" })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-6", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5" }),
            "Implementation Progress"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                /* @__PURE__ */ jsx("span", { children: "Gesamt-Fortschritt" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  Math.round(implementationProgress),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: implementationProgress, className: "h-3" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
              checkedItems.size,
              " von ",
              implementationGuide.reduce((acc, phase) => acc + phase.tasks.length, 0),
              " Tasks abgeschlossen"
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: implementationGuide.map((phase, index) => {
          const Icon = phase.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-100 rounded-xl", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8 text-blue-600" }) }),
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
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckSquare, { className: "w-4 h-4" }),
                    "Tasks"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.tasks.map((task, taskIndex) => {
                    const taskId = `${index}-${taskIndex}`;
                    return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          onClick: () => toggleChecked(taskId),
                          className: "flex-shrink-0 mt-0.5",
                          children: checkedItems.has(taskId) ? /* @__PURE__ */ jsx(CheckSquare, { className: "w-4 h-4 text-green-500" }) : /* @__PURE__ */ jsx(Square, { className: "w-4 h-4 text-gray-400" })
                        }
                      ),
                      /* @__PURE__ */ jsx("span", { className: cn(
                        "text-sm",
                        checkedItems.has(taskId) ? "line-through text-gray-500" : "text-gray-700"
                      ), children: task })
                    ] }, taskIndex);
                  }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "w-4 h-4" }),
                    "Stakeholders"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: phase.stakeholders.map((stakeholder, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: stakeholder }, idx)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }),
                    "Deliverables"
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.deliverables.map((deliverable, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(FileCheck, { className: "w-3 h-3 text-blue-500 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: deliverable })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Wrench, { className: "w-4 h-4" }),
                    "Tools"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: phase.tools.map((tool, idx) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: tool }, idx)) })
                ] })
              ] })
            ] }) })
          ] }, phase.phase);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "use-cases", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "real-world-use-cases", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Real-World Use Cases" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Erfolgreiche PPAI Implementierungen aus verschiedenen Branchen" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: practicalUseCases.map((useCase, index) => {
          const Icon = useCase.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "mb-2", children: useCase.industry }),
                  /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 text-sm", children: /* @__PURE__ */ jsxs(Badge, { variant: useCase.roi === "Very High" ? "default" : useCase.roi === "High" ? "secondary" : "outline", children: [
                    "ROI: ",
                    useCase.roi
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-2", children: useCase.title }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 mb-4", children: [
                /* @__PURE__ */ jsx("strong", { children: "Challenge:" }),
                " ",
                useCase.challenge
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700 mb-4", children: [
                /* @__PURE__ */ jsx("strong", { children: "Solution:" }),
                " ",
                useCase.solution
              ] })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 text-sm flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Code, { className: "w-4 h-4" }),
                  "Technologien"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: useCase.technologies.map((tech, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: tech }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 text-sm flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(ThumbsUp, { className: "w-4 h-4 text-green-500" }),
                  "Benefits"
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: useCase.benefits.slice(0, 3).map((benefit, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: benefit })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "pt-2 border-t", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-gray-600", children: "Timeline:" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: useCase.timeframe })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-2 p-3 bg-green-50 rounded-lg", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-green-600" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-800", children: "Outcome:" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: useCase.outcome })
                ] })
              ] })
            ] }) })
          ] }, useCase.title);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "compliance", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { id: "regulatory-compliance", className: "text-center mb-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Regulatory Compliance" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Wie PPAI bei der Erfüllung regulatorischer Anforderungen hilft" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: complianceFramework.map((regulation, index) => /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-2", children: regulation.regulation }),
              /* @__PURE__ */ jsx(Badge, { className: cn(
                regulation.complianceLevel === "Full Compliance" ? "bg-green-500" : regulation.complianceLevel === "Enhanced Compliance" ? "bg-blue-500" : "bg-orange-500"
              ), children: regulation.complianceLevel })
            ] }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "sm",
                onClick: () => toggleExpanded(`compliance-${index}`),
                children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                  "w-4 h-4 transition-transform",
                  expandedSection === `compliance-${index}` && "rotate-180"
                ) })
              }
            )
          ] }) }),
          expandedSection === `compliance-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Relevante Artikel:" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-4", children: regulation.relevantArticles.map((article, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "mr-2 mb-2", children: article }, idx)) }),
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Anforderungen:" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: regulation.requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: req })
              ] }, idx)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "PPAI Lösungsansätze:" }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: regulation.ppaiSolutions.map((solution, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: solution })
              ] }, idx)) })
            ] })
          ] }) })
        ] }, regulation.regulation)) }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" }),
            "Nächste Schritte"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("p", { className: "text-gray-600", children: [
              "Bereit für den Einstieg in Privacy-Preserving AI? Nutzen Sie zusätzlich unsere ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/risikoklassifizierung", className: "text-blue-600 hover:underline", children: "Risikoklassifizierung" }),
              " und das ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/algorithmic-impact-assessment", className: "text-green-600 hover:underline", children: "Impact Assessment" }),
              ". Hier sind Ihre nächsten Schritte:"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-blue-600 to-purple-600", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                "PPAI Assessment Tool"
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                /* @__PURE__ */ jsx(BookOpen, { className: "w-4 h-4 mr-2" }),
                "Implementation Guide"
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 mr-2" }),
                "Expert Consultation"
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 mr-2" }),
                "Technical Workshop"
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  PrivacyPreservingAI as default
};
