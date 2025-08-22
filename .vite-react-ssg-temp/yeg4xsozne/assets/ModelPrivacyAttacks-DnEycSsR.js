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
import { ShieldX, ShieldCheck, TestTube, Shield, Code, Eye, List, Skull, AlertTriangle, Users, Camera, Heart, Download, Briefcase, Euro, UserCheck, CheckCircle2, Lightbulb, Link as Link$1, MapPin, BarChart3, Biohazard, ChevronDown, Gauge, Network, GitBranch, Zap, Shuffle, Activity, Info, CheckSquare, Square, Radar, TrendingUp, ShieldAlert, Server, ArrowRight } from "lucide-react";
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
const ModelPrivacyAttacks = () => {
  useEffect(() => {
    document.title = "Model Privacy Attacks & Defense – DSGVO ML-Schutz";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Schützen Sie Ihre KI vor Privacy Attacks: Membership Inference, Model Inversion & mehr. Praktische Defense-Strategien. Jetzt absichern!");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Schützen Sie Ihre KI vor Privacy Attacks: Membership Inference, Model Inversion & mehr. Praktische Defense-Strategien. Jetzt absichern!";
      document.head.appendChild(meta);
    }
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1";
      document.head.appendChild(meta);
    }
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://dataguard.de/wissen/ki-datenschutz/model-privacy-attacks";
      document.head.appendChild(link);
    }
    const ogTags = [
      { property: "og:title", content: "Model Privacy Attacks & Defense – DSGVO ML-Schutz" },
      { property: "og:description", content: "Schützen Sie Ihre KI vor Privacy Attacks: Membership Inference, Model Inversion & mehr. Praktische Defense-Strategien. Jetzt absichern!" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://dataguard.de/wissen/ki-datenschutz/model-privacy-attacks" }
    ];
    ogTags.forEach((tag) => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!existingTag) {
        const meta = document.createElement("meta");
        meta.setAttribute("property", tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Model Privacy Attacks & Defense – DSGVO ML-Schutz",
      "description": "Schützen Sie Ihre KI vor Privacy Attacks: Membership Inference, Model Inversion & mehr. Praktische Defense-Strategien. Jetzt absichern!",
      "author": {
        "@type": "Organization",
        "name": "DataGuard"
      },
      "datePublished": "2024-01-15",
      "dateModified": (/* @__PURE__ */ new Date()).toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://dataguard.de/wissen/ki-datenschutz/model-privacy-attacks"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dataguard.de/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Wissen",
            "item": "https://dataguard.de/wissen"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "KI-Datenschutz",
            "item": "https://dataguard.de/wissen/ki-datenschutz"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Model Privacy Attacks",
            "item": "https://dataguard.de/wissen/ki-datenschutz/model-privacy-attacks"
          }
        ]
      }
    };
    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.text = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);
    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [attackSimulation, setAttackSimulation] = useState(null);
  const [defenseScore, setDefenseScore] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const tabs = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "attack-vectors", label: "Angriffsvektoren", icon: ShieldX },
    { id: "defense-strategies", label: "Verteidigungsstrategien", icon: ShieldCheck },
    { id: "testing-framework", label: "Testing Framework", icon: TestTube },
    { id: "implementation", label: "Implementation", icon: Code },
    { id: "monitoring", label: "Monitoring & Detection", icon: Eye }
  ];
  const attackVectors = [
    {
      attack: "Membership Inference Attack",
      severity: "Hoch",
      description: "Bestimmt, ob ein bestimmter Datenpunkt im Trainingsdatensatz enthalten war",
      targetData: ["Medizinische Aufzeichnungen", "Finanzielle Transaktionen", "Persönliche Präferenzen", "Biometrische Daten"],
      attackMethod: [
        "Shadow Model Training mit bekannten Member/Non-Member Daten",
        "Statistical Analysis der Model Confidence Scores",
        "Query-basierte Membership Inference",
        "Model Inversion mit Membership Testing",
        "Threshold-basierte Membership Detection",
        "Ensemble-based Membership Inference"
      ],
      realWorldScenario: {
        scenario: "Healthcare AI für Krankheitsdiagnose",
        attacker: "Versicherungsunternehmen oder Arbeitgeber",
        goal: "Bestimmen, ob bestimmte Personen in medizinischen Studien waren",
        impact: "Diskriminierung bei Versicherung oder Beschäftigung",
        example: "Angreifer fragt ML-Modell mit Patientendaten ab und kann durch Confidence-Score-Analyse bestimmen, ob Patient an HIV-Studie teilgenommen hat"
      },
      technicalDetails: {
        prerequisites: ["Query Access zum Target Model", "Auxiliary Dataset verfügbar", "Grundwissen über Model Architecture"],
        complexity: "Mittel",
        detectionDifficulty: "Schwer",
        scalability: "Hoch",
        costToAttacker: "Niedrig"
      },
      gdprImplications: [
        "Verletzung des Rechts auf informationelle Selbstbestimmung",
        "Unzulässige Verarbeitung sensitiver Daten",
        "Verstoß gegen Zweckbindung der Datenverarbeitung",
        "Fehlende Transparenz über Datennutzung"
      ],
      mitigationStrategies: [
        "Differential Privacy Integration",
        "Model Confidence Calibration",
        "Query Budget Limitations",
        "Adversarial Training gegen Membership Inference"
      ],
      icon: UserCheck,
      color: "from-red-500 to-orange-500"
    },
    {
      attack: "Model Inversion Attack",
      severity: "Sehr Hoch",
      description: "Rekonstruiert sensible Features oder komplette Trainingssamples aus Modellvorhersagen",
      targetData: ["Gesichtsbilder", "Medizinische Scans", "Biometrische Templates", "Persönliche Attribute"],
      attackMethod: [
        "Gradient-based Feature Reconstruction",
        "Generative Model Training für Inversion",
        "Optimization-based Sample Reconstruction",
        "Class-conditional Sample Generation",
        "Multi-task Learning für bessere Inversion",
        "Federated Learning Model Inversion"
      ],
      realWorldScenario: {
        scenario: "Gesichtserkennung in Smart Building System",
        attacker: "Malicious Insider oder External Hacker",
        goal: "Rekonstruktion von Gesichtsbildern der Gebäudenutzer",
        impact: "Identitätsdiebstahl und Stalking-Risiko",
        example: "Angreifer nutzt API-Zugang zu Gesichtserkennungsmodell und rekonstruiert hochauflösende Gesichtsbilder von Personen, die das Gebäude betreten haben"
      },
      technicalDetails: {
        prerequisites: ["Model Access (white-box oder extensive black-box)", "Computing Resources für Optimization", "Domain Knowledge"],
        complexity: "Hoch",
        detectionDifficulty: "Sehr Schwer",
        scalability: "Mittel",
        costToAttacker: "Hoch"
      },
      gdprImplications: [
        "Schwere Verletzung der Datensicherheit",
        "Unerlaubte Rekonstruktion biometrischer Daten",
        "Verstoß gegen Art. 32 DSGVO (Technische Sicherheit)",
        "Potentielle Meldepflicht als Data Breach"
      ],
      mitigationStrategies: [
        "Feature Anonymization und Aggregation",
        "Secure Multi-party Computation",
        "Homomorphic Encryption für Inference",
        "Selective Feature Sharing"
      ],
      icon: Eye,
      color: "from-purple-500 to-red-500"
    },
    {
      attack: "Property Inference Attack",
      severity: "Mittel",
      description: "Ableitung globaler Eigenschaften des Trainingsdatensatzes ohne Zugang zu individuellen Samples",
      targetData: ["Demographische Verteilungen", "Klassenverhältnisse", "Datenqualität Metriken", "Statistical Properties"],
      attackMethod: [
        "Statistical Analysis der Model Outputs",
        "Meta-Learning über Dataset Properties",
        "Activation Pattern Analysis",
        "Transfer Learning-based Property Inference",
        "Ensemble Model Property Extraction",
        "Federated Learning Gradient Analysis"
      ],
      realWorldScenario: {
        scenario: "HR Recruiting AI mit Bias-sensitive Data",
        attacker: "Competitor oder Regulatorbehörde",
        goal: "Bestimmung der demographischen Zusammensetzung der Trainingsdaten",
        impact: "Aufdeckung von Bias oder Compliance-Verstößen",
        example: "Angreifer analysiert Hiring-AI und kann bestimmen, dass Trainingsdaten zu 80% männliche Kandidaten enthielten, was AGG-Verstöße aufdeckt"
      },
      technicalDetails: {
        prerequisites: ["Limited Query Access", "Statistical Analysis Knowledge", "Multiple Model Queries"],
        complexity: "Niedrig-Mittel",
        detectionDifficulty: "Mittel",
        scalability: "Sehr Hoch",
        costToAttacker: "Sehr Niedrig"
      },
      gdprImplications: [
        "Indirekte Verletzung der Datenminimierung",
        "Potentielle Aufdeckung von Compliance-Gaps",
        "Risiko für Business Reputation",
        "Regulatory Investigation Trigger"
      ],
      mitigationStrategies: [
        "Output Perturbation Mechanisms",
        "Query Rate Limiting",
        "Federated Learning mit Secure Aggregation",
        "Regular Bias Auditing"
      ],
      icon: BarChart3,
      color: "from-yellow-500 to-orange-500"
    },
    {
      attack: "Model Extraction Attack",
      severity: "Hoch",
      description: "Reverse Engineering eines Machine Learning Models durch strategische Queries",
      targetData: ["Model Architecture", "Hyperparameter", "Training Algorithms", "Feature Engineering"],
      attackMethod: [
        "Active Learning-based Query Selection",
        "Transfer Learning für Model Replication",
        "Gradient-based Model Extraction",
        "Ensemble Distillation Attacks",
        "Adversarial Sample Generation für Extraction",
        "Federated Learning Model Stealing"
      ],
      realWorldScenario: {
        scenario: "Proprietäres KI-System für Finanz-Trading",
        attacker: "Konkurrierendes Fintech-Unternehmen",
        goal: "Kopierung des wertvollen Trading-Algorithmus",
        impact: "Intellectual Property Theft im Millionenwert",
        example: "Startup nutzt systematische API-Calls um Trading-KI zu klonen und eigenes konkurrierendes Produkt zu entwickeln"
      },
      technicalDetails: {
        prerequisites: ["API Access", "ML Expertise", "Computational Resources", "Strategic Query Planning"],
        complexity: "Hoch",
        detectionDifficulty: "Mittel",
        scalability: "Niedrig-Mittel",
        costToAttacker: "Mittel"
      },
      gdprImplications: [
        "Weniger direkte DSGVO-Relevanz",
        "IP-Schutz und Trade Secret Issues",
        "Potentielle Wettbewerbsrechtliche Probleme",
        "Risk für Business Model"
      ],
      mitigationStrategies: [
        "API Rate Limiting und Query Monitoring",
        "Watermarking von ML Models",
        "Adversarial Examples als Honeypots",
        "Legal Protection durch Patents"
      ],
      icon: Download,
      color: "from-blue-500 to-purple-500"
    },
    {
      attack: "Poisoning Attack",
      severity: "Sehr Hoch",
      description: "Manipulation des Trainingsprozesses durch Einschleusung schädlicher Daten",
      targetData: ["Training Datasets", "Model Parameters", "Feature Representations", "Decision Boundaries"],
      attackMethod: [
        "Clean-label Poisoning für Stealth",
        "Backdoor Attacks mit Trigger Patterns",
        "Adversarial Training Data Injection",
        "Federated Learning Poisoning",
        "Transfer Learning Poisoning",
        "Gradient-based Poisoning Optimization"
      ],
      realWorldScenario: {
        scenario: "Autonomous Vehicle Vision System",
        attacker: "Nation-state Actor oder Terrorist",
        goal: "Einbau von Backdoors für gezielte Angriffe",
        impact: "Potentielle Lebensgefahr durch manipulierte Verkehrserkennung",
        example: "Angreifer manipuliert öffentliche Verkehrszeichendatensets so, dass spezielle Sticker auf Stopschildern diese als Vorfahrtschilder klassifizieren lassen"
      },
      technicalDetails: {
        prerequisites: ["Access to Training Pipeline", "Dataset Manipulation Capability", "ML Security Knowledge"],
        complexity: "Sehr Hoch",
        detectionDifficulty: "Sehr Schwer",
        scalability: "Niedrig",
        costToAttacker: "Sehr Hoch"
      },
      gdprImplications: [
        "Severe Data Integrity Violations",
        "Manipulation der Datenverarbeitung",
        "Art. 32 DSGVO Verletzung (Integrität)",
        "Meldepflichtige Sicherheitsverletzung"
      ],
      mitigationStrategies: [
        "Robust Training Algorithms",
        "Data Sanitization und Validation",
        "Anomaly Detection in Training Data",
        "Multi-source Data Verification"
      ],
      icon: Biohazard,
      color: "from-red-600 to-black"
    }
  ];
  const defenseStrategies = [
    {
      category: "Differential Privacy",
      description: "Mathematisch bewiesene Privatheitsgarantien durch kontrollierten Rausch",
      mechanisms: [
        "ε-Differential Privacy für Training",
        "Local Differential Privacy für Input",
        "Smooth Sensitivity Methods",
        "Composition Theorems für Multi-Stage Privacy"
      ],
      implementation: {
        trainingTime: [
          "DP-SGD (Differentially Private Stochastic Gradient Descent)",
          "Private Aggregation of Teacher Ensembles (PATE)",
          "Gaussian Mechanism für Gradient Perturbation",
          "Moments Accountant für Privacy Budget Tracking"
        ],
        inferenceTime: [
          "Output Perturbation mit Calibrated Noise",
          "Private Prediction Mechanisms",
          "Smooth Sensitivity-based Response",
          "Local DP für User Queries"
        ]
      },
      effectiveness: {
        membershipInference: "Sehr Hoch",
        modelInversion: "Hoch",
        propertyInference: "Hoch",
        modelExtraction: "Mittel",
        poisoning: "Niedrig"
      },
      tradeoffs: {
        privacy: "Sehr Hoch",
        utility: "Mittel-Hoch",
        performance: "Mittel",
        complexity: "Hoch",
        computationalCost: "Mittel"
      },
      practicalConsiderations: [
        "Privacy Budget Management über Model Lifecycle",
        "Utility-Privacy Trade-off Optimization",
        "Hyperparameter Tuning für ε-δ Values",
        "Composition Analysis bei Multiple Releases"
      ],
      icon: Gauge,
      maturity: "Production Ready"
    },
    {
      category: "Secure Multi-Party Computation",
      description: "Sichere Berechnung ohne Preisgabe privater Inputs",
      mechanisms: [
        "Secret Sharing-based ML Training",
        "Homomorphic Encryption für Inference",
        "Garbled Circuits für Model Evaluation",
        "Oblivious Transfer Protocols"
      ],
      implementation: {
        trainingTime: [
          "Distributed Training mit Secret Sharing",
          "Secure Gradient Aggregation",
          "Private Model Parameter Updates",
          "Secure Loss Function Computation"
        ],
        inferenceTime: [
          "Homomorphic Encrypted Prediction",
          "Secure Multi-party Inference",
          "Private Set Intersection für Features",
          "Oblivious Neural Network Evaluation"
        ]
      },
      effectiveness: {
        membershipInference: "Sehr Hoch",
        modelInversion: "Sehr Hoch",
        propertyInference: "Hoch",
        modelExtraction: "Sehr Hoch",
        poisoning: "Mittel"
      },
      tradeoffs: {
        privacy: "Sehr Hoch",
        utility: "Hoch",
        performance: "Niedrig",
        complexity: "Sehr Hoch",
        computationalCost: "Sehr Hoch"
      },
      practicalConsiderations: [
        "Network Latency Impact auf Performance",
        "Trust Assumptions zwischen Parties",
        "Scalability Challenges bei Large Models",
        "Integration mit Existing ML Pipelines"
      ],
      icon: Network,
      maturity: "Research/Early Production"
    },
    {
      category: "Federated Learning",
      description: "Dezentrales Training ohne zentrale Datensammlung",
      mechanisms: [
        "Client-side Model Updates",
        "Secure Aggregation Protocols",
        "Byzantine-robust Aggregation",
        "Personalized Federated Learning"
      ],
      implementation: {
        trainingTime: [
          "FedAvg Algorithm mit Secure Aggregation",
          "Differential Privacy für Client Updates",
          "Client Selection Strategies",
          "Communication-efficient Updates"
        ],
        inferenceTime: [
          "Local Model Inference",
          "Ensemble Predictions",
          "Personalized Model Adaptation",
          "Collaborative Filtering"
        ]
      },
      effectiveness: {
        membershipInference: "Hoch",
        modelInversion: "Hoch",
        propertyInference: "Mittel",
        modelExtraction: "Mittel",
        poisoning: "Niedrig-Mittel"
      },
      tradeoffs: {
        privacy: "Hoch",
        utility: "Mittel-Hoch",
        performance: "Mittel",
        complexity: "Hoch",
        computationalCost: "Mittel"
      },
      practicalConsiderations: [
        "Non-IID Data Distribution Challenges",
        "Client Dropout und Reliability",
        "Communication Bandwidth Constraints",
        "Incentive Mechanisms für Participation"
      ],
      icon: GitBranch,
      maturity: "Production Ready"
    },
    {
      category: "Adversarial Training",
      description: "Training gegen spezifische Privacy Attacks",
      mechanisms: [
        "Min-Max Game Setup für Privacy",
        "Adversarial Regularization",
        "Privacy-preserving GANs",
        "Robust Feature Learning"
      ],
      implementation: {
        trainingTime: [
          "Adversarial Loss Integration",
          "Multi-task Learning mit Privacy Objectives",
          "Generator-Discriminator Architecture",
          "Regularization Term Optimization"
        ],
        inferenceTime: [
          "Robust Prediction Mechanisms",
          "Confidence Calibration",
          "Ensemble Voting",
          "Uncertainty Quantification"
        ]
      },
      effectiveness: {
        membershipInference: "Hoch",
        modelInversion: "Mittel-Hoch",
        propertyInference: "Mittel",
        modelExtraction: "Hoch",
        poisoning: "Sehr Hoch"
      },
      tradeoffs: {
        privacy: "Mittel-Hoch",
        utility: "Hoch",
        performance: "Hoch",
        complexity: "Mittel",
        computationalCost: "Hoch"
      },
      practicalConsiderations: [
        "Attack-specific Defense Design",
        "Generalization zu Unknown Attacks",
        "Computational Overhead während Training",
        "Hyperparameter Sensitivity"
      ],
      icon: Zap,
      maturity: "Research/Production"
    },
    {
      category: "Model Obfuscation",
      description: "Verschleierung der Modellstruktur und -parameter",
      mechanisms: [
        "Neural Network Obfuscation",
        "Knowledge Distillation",
        "Model Compression",
        "Architecture Randomization"
      ],
      implementation: {
        trainingTime: [
          "Teacher-Student Distillation",
          "Noise Injection in Parameters",
          "Pruning und Quantization",
          "Architecture Search Randomization"
        ],
        inferenceTime: [
          "Ensemble Predictions",
          "Output Randomization",
          "Query Response Delays",
          "Fake Response Injection"
        ]
      },
      effectiveness: {
        membershipInference: "Mittel",
        modelInversion: "Mittel",
        propertyInference: "Niedrig",
        modelExtraction: "Hoch",
        poisoning: "Niedrig"
      },
      tradeoffs: {
        privacy: "Mittel",
        utility: "Mittel-Hoch",
        performance: "Hoch",
        complexity: "Niedrig-Mittel",
        computationalCost: "Niedrig"
      },
      practicalConsiderations: [
        "Security through Obscurity Limitations",
        "Reverse Engineering Resistance",
        "Performance Impact Assessment",
        "Legal IP Protection Compliance"
      ],
      icon: Shuffle,
      maturity: "Production Ready"
    }
  ];
  const testingFramework = [
    {
      testCategory: "Membership Inference Testing",
      description: "Systematische Tests zur Bewertung der Membership Inference Vulnerabilities",
      testMethods: [
        "Shadow Model Attack Simulation",
        "Statistical Inference Testing",
        "Confidence Score Analysis",
        "Threshold-based Membership Detection"
      ],
      implementation: {
        dataRequirements: [
          "Separate Training/Test Split für Shadow Models",
          "Known Member/Non-member Ground Truth",
          "Representative Dataset Distribution",
          "Sufficient Sample Size (>1000 per class)"
        ],
        metrics: [
          "Attack Accuracy (Precision/Recall)",
          "AUC-ROC für Membership Classification",
          "Advantage over Random Guessing",
          "Statistical Significance Tests"
        ],
        tools: [
          "Privacy Meter Framework",
          "TensorFlow Privacy Testing",
          "Custom Attack Implementation",
          "ML Privacy Meter"
        ]
      },
      automationLevel: "Hoch",
      executionTime: "2-4 Stunden",
      skillLevel: "Mittel",
      reportingFormat: [
        "Vulnerability Score (0-100)",
        "Attack Success Rate",
        "Confidence Intervals",
        "Remediation Recommendations"
      ],
      icon: UserCheck
    },
    {
      testCategory: "Model Inversion Testing",
      description: "Tests zur Bewertung der Feature/Sample Reconstruction Risks",
      testMethods: [
        "Gradient-based Reconstruction",
        "Optimization-based Inversion",
        "GAN-based Sample Generation",
        "Class-conditional Reconstruction"
      ],
      implementation: {
        dataRequirements: [
          "Access to Model Gradients (white-box)",
          "Representative Input Samples",
          "Ground Truth für Reconstruction Quality",
          "Computational Resources für Optimization"
        ],
        metrics: [
          "Reconstruction Quality (SSIM, PSNR)",
          "Semantic Similarity Scores",
          "Identifiability Assessment",
          "Privacy Leakage Quantification"
        ],
        tools: [
          "Deep Leakage from Gradients (DLG)",
          "Inverting Gradients (iDLG)",
          "Custom Inversion Frameworks",
          "FedML Privacy Testing"
        ]
      },
      automationLevel: "Mittel",
      executionTime: "4-8 Stunden",
      skillLevel: "Hoch",
      reportingFormat: [
        "Reconstruction Quality Scores",
        "Visual Comparison Results",
        "Identifiability Risk Assessment",
        "Technical Mitigation Recommendations"
      ],
      icon: Eye
    },
    {
      testCategory: "Property Inference Testing",
      description: "Bewertung der Risiken für Dataset Property Leakage",
      testMethods: [
        "Statistical Property Inference",
        "Meta-Learning Attacks",
        "Distribution Analysis",
        "Class Balance Inference"
      ],
      implementation: {
        dataRequirements: [
          "Multiple Query Access to Model",
          "Knowledge über Expected Properties",
          "Statistical Analysis Capabilities",
          "Diverse Query Strategies"
        ],
        metrics: [
          "Property Inference Accuracy",
          "Statistical Significance",
          "Information Leakage Quantification",
          "Attack Efficiency Metrics"
        ],
        tools: [
          "Custom Statistical Frameworks",
          "Property Inference Libraries",
          "ML Audit Tools",
          "Privacy Analysis Scripts"
        ]
      },
      automationLevel: "Hoch",
      executionTime: "1-2 Stunden",
      skillLevel: "Mittel",
      reportingFormat: [
        "Property Leakage Score",
        "Statistical Confidence",
        "Business Impact Assessment",
        "Compliance Risk Rating"
      ],
      icon: BarChart3
    },
    {
      testCategory: "Model Extraction Testing",
      description: "Evaluation der Model Stealing Vulnerabilities",
      testMethods: [
        "Active Learning-based Extraction",
        "Transfer Learning Attacks",
        "Functionally Equivalent Model Creation",
        "API-based Model Cloning"
      ],
      implementation: {
        dataRequirements: [
          "Query Budget für API Calls",
          "Auxiliary Dataset für Training",
          "Computing Resources für Model Training",
          "Architecture Search Capabilities"
        ],
        metrics: [
          "Functional Equivalence Score",
          "Query Efficiency",
          "Model Fidelity Assessment",
          "IP Protection Effectiveness"
        ],
        tools: [
          "Model Extraction Frameworks",
          "Active Learning Libraries",
          "Custom Stealing Implementations",
          "API Monitoring Tools"
        ]
      },
      automationLevel: "Mittel",
      executionTime: "8-24 Stunden",
      skillLevel: "Hoch",
      reportingFormat: [
        "Extraction Success Rate",
        "Query Efficiency Analysis",
        "IP Risk Assessment",
        "Legal Protection Recommendations"
      ],
      icon: Download
    }
  ];
  const monitoringFramework = [
    {
      monitoringType: "Real-time Attack Detection",
      description: "Kontinuierliche Überwachung für aktive Privacy Attacks",
      detectionMethods: [
        "Query Pattern Anomaly Detection",
        "Statistical Analysis der API Calls",
        "Confidence Score Distribution Monitoring",
        "Adversarial Input Detection"
      ],
      implementation: {
        infrastructure: [
          "Real-time Stream Processing",
          "Anomaly Detection ML Models",
          "API Gateway Integration",
          "Alert Management System"
        ],
        metrics: [
          "False Positive Rate < 5%",
          "Detection Latency < 100ms",
          "Attack Coverage > 90%",
          "System Availability > 99.9%"
        ],
        alerting: [
          "Real-time Slack/Email Notifications",
          "Automatic API Rate Limiting",
          "Security Team Escalation",
          "Incident Response Triggering"
        ]
      },
      businessValue: [
        "Früherkennung von Privacy Breaches",
        "Automatic Threat Response",
        "Compliance Documentation",
        "Customer Trust Protection"
      ],
      icon: Radar
    },
    {
      monitoringType: "Privacy Drift Detection",
      description: "Überwachung der Privacy-Eigenschaften über Zeit",
      detectionMethods: [
        "Periodic Privacy Metric Calculation",
        "Model Performance vs Privacy Trade-off Tracking",
        "Training Data Distribution Monitoring",
        "Differential Privacy Budget Tracking"
      ],
      implementation: {
        infrastructure: [
          "Scheduled Privacy Testing",
          "Model Version Comparison",
          "Metric Trend Analysis",
          "Dashboard und Reporting"
        ],
        metrics: [
          "Privacy Score Trends",
          "Attack Success Rate Changes",
          "Model Utility Degradation",
          "Compliance Metric Evolution"
        ],
        alerting: [
          "Weekly Privacy Reports",
          "Threshold-based Warnings",
          "Quarterly Executive Summary",
          "Regulatory Compliance Updates"
        ]
      },
      businessValue: [
        "Proactive Privacy Management",
        "Compliance Kontinuität",
        "Risk Trend Identification",
        "Strategic Decision Support"
      ],
      icon: TrendingUp
    },
    {
      monitoringType: "Model Integrity Monitoring",
      description: "Überwachung auf Manipulation und Poisoning Attacks",
      detectionMethods: [
        "Training Data Integrity Checks",
        "Model Parameter Anomaly Detection",
        "Prediction Behavior Analysis",
        "Backdoor Trigger Detection"
      ],
      implementation: {
        infrastructure: [
          "Data Pipeline Monitoring",
          "Model Checksum Verification",
          "Behavioral Testing Framework",
          "Forensic Analysis Tools"
        ],
        metrics: [
          "Data Corruption Detection Rate",
          "Model Behavior Consistency",
          "Trigger Detection Accuracy",
          "Recovery Time Objectives"
        ],
        alerting: [
          "Immediate Security Alerts",
          "Model Rollback Procedures",
          "Incident Investigation",
          "Legal Team Notification"
        ]
      },
      businessValue: [
        "Protection gegen Model Poisoning",
        "Business Continuity Assurance",
        "Legal Liability Reduction",
        "Brand Reputation Protection"
      ],
      icon: ShieldAlert
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
    const totalDefenseItems = defenseStrategies.length * 4;
    setDefenseScore(newChecked.size / totalDefenseItems * 100);
  };
  const simulateAttack = (attackType) => {
    const mockResults = {
      membership_inference: {
        success_rate: Math.random() * 0.4 + 0.6,
        confidence: Math.random() * 0.3 + 0.7,
        vulnerability_level: "High",
        affected_records: Math.floor(Math.random() * 1e3) + 100
      },
      model_inversion: {
        success_rate: Math.random() * 0.3 + 0.4,
        confidence: Math.random() * 0.4 + 0.5,
        vulnerability_level: "Medium",
        affected_records: Math.floor(Math.random() * 500) + 50
      }
    };
    setAttackSimulation({
      attack: attackType,
      result: mockResults[attackType] || mockResults.membership_inference,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleString(),
      recommendations: [
        "Implement Differential Privacy with ε < 1.0",
        "Add output noise to model predictions",
        "Implement query rate limiting",
        "Regular privacy audits empfohlen"
      ]
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white", itemScope: true, itemType: "https://schema.org/Article", children: [
    /* @__PURE__ */ jsx("meta", { itemProp: "name", content: "Model Privacy Attacks & Defense – DSGVO ML-Schutz" }),
    /* @__PURE__ */ jsx("meta", { itemProp: "description", content: "Schützen Sie Ihre KI vor Privacy Attacks: Membership Inference, Model Inversion & mehr. Praktische Defense-Strategien. Jetzt absichern!" }),
    /* @__PURE__ */ jsx("meta", { itemProp: "author", content: "DataGuard Experts" }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative overflow-hidden bg-gradient-to-br from-gray-900 via-red-900 to-orange-900", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          style: { y, opacity },
          className: "absolute inset-0",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/grid.svg')] opacity-10" }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-30" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20" })
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
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "p-3 sm:p-4 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsx(ShieldX, { className: "w-12 h-12 sm:w-16 sm:h-16 text-white" }) }) }),
            /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6", children: "Model Privacy Attacks & Defense" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 px-4", children: "Umfassender Guide zu Angriffsvektoren auf ML-Modelle und effektive Verteidigungsstrategien: Von Membership Inference bis Model Extraction - Schützen Sie Ihre KI-Systeme proaktiv" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-2 sm:gap-4", children: [
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-3 py-1.5 sm:px-4 sm:py-2 text-white border-white/30 bg-white/10 text-xs sm:text-sm", children: [
                /* @__PURE__ */ jsx(ShieldX, { className: "w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" }),
                "5 Attack Vectors"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-3 py-1.5 sm:px-4 sm:py-2 text-white border-white/30 bg-white/10 text-xs sm:text-sm", children: [
                /* @__PURE__ */ jsx(ShieldCheck, { className: "w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" }),
                "5 Defense Strategies"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-3 py-1.5 sm:px-4 sm:py-2 text-white border-white/30 bg-white/10 text-xs sm:text-sm", children: [
                /* @__PURE__ */ jsx(TestTube, { className: "w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" }),
                "Testing Framework"
              ] })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b", "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: /* @__PURE__ */ jsx(TabsList, { className: "grid w-full grid-cols-3 sm:grid-cols-6 h-auto p-1", children: tabs.map((tab) => {
      const Icon = tab.icon;
      return /* @__PURE__ */ jsxs(
        TabsTrigger,
        {
          value: tab.id,
          id: `tab-${tab.id}`,
          className: "flex flex-col items-center gap-2 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] sm:text-xs font-medium hidden sm:inline", children: tab.label })
          ]
        },
        tab.id
      );
    }) }) }) }) }),
    /* @__PURE__ */ jsxs("main", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "mb-8", children: /* @__PURE__ */ jsxs("ol", { className: "flex items-center space-x-2 text-sm text-gray-600", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-blue-600", children: "Home" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen", className: "hover:text-blue-600", children: "Wissen" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz", className: "hover:text-blue-600", children: "KI-Datenschutz" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }) }),
        /* @__PURE__ */ jsx("li", { className: "text-gray-900 font-medium", children: "Model Privacy Attacks" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:hidden mb-8", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(List, { className: "w-5 h-5" }),
          "Inhaltsverzeichnis"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#overview-section", className: "text-blue-600 hover:underline", children: "Überblick" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#attack-vectors-section", className: "text-blue-600 hover:underline", children: "Angriffsvektoren" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#defense-strategies-section", className: "text-blue-600 hover:underline", children: "Verteidigungsstrategien" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#testing-framework-section", className: "text-blue-600 hover:underline", children: "Testing Framework" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#implementation-section", className: "text-blue-600 hover:underline", children: "Implementation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#monitoring-section", className: "text-blue-600 hover:underline", children: "Monitoring & Detection" }) })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
        /* @__PURE__ */ jsxs(TabsContent, { value: "overview", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "overview-section", className: "text-3xl font-bold mb-4 scroll-mt-24", children: "Model Privacy: Angriffe verstehen, Verteidigung stärken" }),
            /* @__PURE__ */ jsxs("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: [
              "Machine Learning Modelle sind anfällig für sophisticated Privacy-Attacks, die sensible Trainingsdaten rekonstruieren oder Membership-Information preisgeben können. Lernen Sie, wie Sie Ihre KI-Systeme effektiv schützen. Ergänzend empfehlen wir unseren Guide zu ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/privacy-preserving-ai", className: "text-blue-600 hover:underline", children: "Privacy-Preserving AI" }),
              " und ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/federated-learning", className: "text-blue-600 hover:underline", children: "Federated Learning" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: [
            /* @__PURE__ */ jsxs(Card, { className: "border-2 border-red-100 bg-gradient-to-br from-red-50 to-white", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Skull, { className: "w-5 h-5 text-red-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-base sm:text-lg", children: "Membership Inference" })
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: "Bestimmung ob spezifische Daten im Training verwendet wurden" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "DSGVO Verletzung" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 text-blue-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Identitätsrisiko" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5 text-purple-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-base sm:text-lg", children: "Model Inversion" })
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: "Rekonstruktion sensibler Features aus Modellvorhersagen" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Camera, { className: "w-4 h-4 text-purple-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Biometric Leak" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4 text-red-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Medical Data" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-white", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 text-orange-500" }),
                /* @__PURE__ */ jsx("span", { className: "text-base sm:text-lg", children: "Model Extraction" })
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-3", children: "Reverse Engineering proprietärer ML-Algorithmen" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Briefcase, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "IP Theft" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Euro, { className: "w-4 h-4 text-blue-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Economic Loss" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(TestTube, { className: "w-5 h-5" }),
              "Interactive Attack Simulation"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Simulieren Sie Privacy Attacks gegen ein Beispiel-Modell und verstehen Sie die Risiken" }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                /* @__PURE__ */ jsxs(Button, { onClick: () => simulateAttack("membership_inference"), children: [
                  /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4 mr-2" }),
                  "Membership Inference Test"
                ] }),
                /* @__PURE__ */ jsxs(Button, { onClick: () => simulateAttack("model_inversion"), variant: "outline", children: [
                  /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 mr-2" }),
                  "Model Inversion Test"
                ] })
              ] }),
              attackSimulation && /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 border rounded-lg bg-red-50", children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500" }),
                  "Attack Simulation: ",
                  attackSimulation.attack
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Success Rate:" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Progress, { value: attackSimulation.result.success_rate * 100, className: "flex-1" }),
                      /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
                        (attackSimulation.result.success_rate * 100).toFixed(1),
                        "%"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Vulnerability Level:" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "ml-2", children: attackSimulation.result.vulnerability_level })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Empfohlene Maßnahmen:" }),
                  /* @__PURE__ */ jsx("ul", { className: "mt-2 space-y-1", children: attackSimulation.recommendations.map((rec, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { children: rec })
                  ] }, idx)) })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Lightbulb, { className: "w-5 h-5 text-blue-500" }),
              "Warum Model Privacy entscheidend ist"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-700", children: "Business Impact:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Schutz wertvoller IP und Trainingsdaten" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Vertrauensaufbau bei Kunden und Partnern" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Competitive Advantage durch sichere AI" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsxs("span", { className: "text-sm", children: [
                      "Regulatory Compliance (",
                      /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo-grundlagen", className: "text-blue-600 hover:underline", children: "DSGVO" }),
                      ", ",
                      /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/eu-ai-act-compliance", className: "text-blue-600 hover:underline", children: "AI Act" }),
                      ")"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-red-700", children: "Risk Scenarios:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Healthcare: Rekonstruktion von Patientendaten" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Finance: Trading-Algorithmus Diebstahl" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "HR: Bias-Detection durch Property Inference" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Biometrics: Gesichtserkennung Reconstruction" })
                  ] })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "mb-8 bg-gradient-to-br from-gray-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Link$1, { className: "w-5 h-5" }),
              "Weiterführende Ressourcen"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Verwandte Themen:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/privacy-by-design-ai", className: "text-blue-600 hover:underline text-sm", children: "Privacy by Design für AI" }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/differential-privacy", className: "text-blue-600 hover:underline text-sm", children: "Differential Privacy Guide" }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/secure-multi-party-computation", className: "text-blue-600 hover:underline text-sm", children: "Secure Multi-Party Computation" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Compliance & Governance:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/algorithmic-impact-assessment", className: "text-blue-600 hover:underline text-sm", children: "Algorithmic Impact Assessment" }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/ai-risk-classification", className: "text-blue-600 hover:underline text-sm", children: "KI-Risikoklassifizierung" }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/explainable-ai", className: "text-blue-600 hover:underline text-sm", children: "Explainable AI Guide" }) })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5" }),
              "Navigation durch diesen Guide"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: tabs.slice(1).map((tab, index) => {
              const Icon = tab.icon;
              return /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setActiveTab(tab.id),
                  className: "p-4 border rounded-lg hover:shadow-md transition-shadow text-left",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-2 bg-red-100 rounded-lg", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-red-600" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: tab.label })
                    ] }),
                    /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                      index === 0 && "5 kritische Attack Vectors mit Real-World Scenarios",
                      index === 1 && "5 effektive Defense Strategies mit Implementation Guides",
                      index === 2 && "Praktisches Testing Framework für Vulnerability Assessment",
                      index === 3 && "Step-by-Step Implementation Roadmap",
                      index === 4 && "Real-time Monitoring und Attack Detection"
                    ] })
                  ]
                },
                tab.id
              );
            }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "attack-vectors", className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsx("h2", { id: "attack-vectors-section", className: "text-3xl font-bold mb-4 scroll-mt-24", children: "Privacy Attack Vectors" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Detaillierte Analyse der 5 kritischsten Angriffsmethoden auf ML-Modelle" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: attackVectors.map((attack, index) => {
            const Icon = attack.icon;
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
                        "p-2 sm:p-3 rounded-xl bg-gradient-to-br text-white",
                        attack.color
                      ), children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                          /* @__PURE__ */ jsx(CardTitle, { className: "text-xl sm:text-2xl", children: attack.attack }),
                          /* @__PURE__ */ jsxs(Badge, { variant: attack.severity === "Sehr Hoch" ? "destructive" : attack.severity === "Hoch" ? "default" : "secondary", children: [
                            attack.severity,
                            " Risk"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: attack.description })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        onClick: () => toggleExpanded(`attack-${index}`),
                        children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                          "w-4 h-4 transition-transform",
                          expandedSection === `attack-${index}` && "rotate-180"
                        ) })
                      }
                    )
                  ] }) }),
                  expandedSection === `attack-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "scenario", className: "w-full", children: [
                    /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-5", children: [
                      /* @__PURE__ */ jsx(TabsTrigger, { value: "scenario", children: "Real-World" }),
                      /* @__PURE__ */ jsx(TabsTrigger, { value: "method", children: "Methodik" }),
                      /* @__PURE__ */ jsx(TabsTrigger, { value: "technical", children: "Technisch" }),
                      /* @__PURE__ */ jsx(TabsTrigger, { value: "gdpr", children: "DSGVO Impact" }),
                      /* @__PURE__ */ jsx(TabsTrigger, { value: "mitigation", children: "Mitigation" })
                    ] }),
                    /* @__PURE__ */ jsx(TabsContent, { value: "scenario", className: "mt-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-3", children: "Real-World Scenario:" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Szenario:" }),
                          " ",
                          attack.realWorldScenario.scenario
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Angreifer:" }),
                          " ",
                          attack.realWorldScenario.attacker
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Ziel:" }),
                          " ",
                          attack.realWorldScenario.goal
                        ] }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Impact:" }),
                          " ",
                          attack.realWorldScenario.impact
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "mt-3 p-3 bg-red-50 rounded border-l-4 border-red-500", children: [
                          /* @__PURE__ */ jsx("strong", { children: "Beispiel:" }),
                          " ",
                          attack.realWorldScenario.example
                        ] })
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsx(TabsContent, { value: "method", className: "mt-4", children: /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-3", children: "Attack Methoden:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: attack.attackMethod.map((method, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: method })
                      ] }, idx)) }),
                      /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", children: "Target Data:" }),
                        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: attack.targetData.map((data, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: data }, idx)) })
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsx(TabsContent, { value: "technical", className: "mt-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", children: "Prerequisites:" }),
                        /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm", children: attack.technicalDetails.prerequisites.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" }),
                          req
                        ] }, idx)) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", children: "Attack Properties:" }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsx("span", { children: "Complexity:" }),
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", children: attack.technicalDetails.complexity })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsx("span", { children: "Detection:" }),
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", children: attack.technicalDetails.detectionDifficulty })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsx("span", { children: "Scalability:" }),
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", children: attack.technicalDetails.scalability })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                            /* @__PURE__ */ jsx("span", { children: "Cost:" }),
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", children: attack.technicalDetails.costToAttacker })
                          ] })
                        ] })
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsx(TabsContent, { value: "gdpr", className: "mt-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-3 text-red-800", children: "DSGVO Implications:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: attack.gdprImplications.map((implication, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-red-700", children: implication })
                      ] }, idx)) })
                    ] }) }),
                    /* @__PURE__ */ jsx(TabsContent, { value: "mitigation", className: "mt-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-3 text-green-800", children: "Mitigation Strategies:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: attack.mitigationStrategies.map((strategy, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-green-700", children: strategy })
                      ] }, idx)) })
                    ] }) })
                  ] }) })
                ] })
              },
              attack.attack
            );
          }) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "defense-strategies", className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsx("h2", { id: "defense-strategies-section", className: "text-3xl font-bold mb-4 scroll-mt-24", children: "Defense Strategies" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "5 bewährte Verteidigungsstrategien gegen Privacy Attacks" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: defenseStrategies.map((defense, index) => {
            const Icon = defense.icon;
            return /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-2 sm:p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: defense.category }),
                      /* @__PURE__ */ jsx(Badge, { variant: "outline", children: defense.maturity })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: defense.description })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => toggleExpanded(`defense-${index}`),
                    children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                      "w-4 h-4 transition-transform",
                      expandedSection === `defense-${index}` && "rotate-180"
                    ) })
                  }
                )
              ] }) }),
              expandedSection === `defense-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "mechanisms", className: "w-full", children: [
                /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
                  /* @__PURE__ */ jsx(TabsTrigger, { value: "mechanisms", children: "Mechanismen" }),
                  /* @__PURE__ */ jsx(TabsTrigger, { value: "implementation", children: "Implementation" }),
                  /* @__PURE__ */ jsx(TabsTrigger, { value: "effectiveness", children: "Effectiveness" }),
                  /* @__PURE__ */ jsx(TabsTrigger, { value: "considerations", children: "Considerations" })
                ] }),
                /* @__PURE__ */ jsx(TabsContent, { value: "mechanisms", className: "mt-4", children: /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-3", children: "Core Mechanisms:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: defense.mechanisms.map((mechanism, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: mechanism })
                  ] }, idx)) })
                ] }) }),
                /* @__PURE__ */ jsx(TabsContent, { value: "implementation", className: "mt-4", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-3", children: "Training Time:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: defense.implementation.trainingTime.map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: item })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-3", children: "Inference Time:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: defense.implementation.inferenceTime.map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(Activity, { className: "w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: item })
                    ] }, idx)) })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(TabsContent, { value: "effectiveness", className: "mt-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold", children: "Attack Effectiveness:" }),
                  Object.entries(defense.effectiveness).map(([attack, level]) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm capitalize", children: attack.replace(/([A-Z])/g, " $1") }),
                    /* @__PURE__ */ jsx(Badge, { variant: level === "Sehr Hoch" ? "default" : level === "Hoch" ? "secondary" : level === "Mittel" ? "outline" : "destructive", children: level })
                  ] }, attack))
                ] }) }),
                /* @__PURE__ */ jsx(TabsContent, { value: "considerations", className: "mt-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-3", children: "Trade-offs:" }),
                    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-4", children: Object.entries(defense.tradeoffs).map(([aspect, level]) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm capitalize", children: aspect }),
                      /* @__PURE__ */ jsx(Progress, { value: level === "Sehr Hoch" ? 100 : level === "Hoch" ? 80 : level === "Mittel-Hoch" ? 70 : level === "Mittel" ? 50 : level === "Niedrig-Mittel" ? 30 : 20, className: "w-20 h-2" })
                    ] }, aspect)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-3", children: "Practical Considerations:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: defense.practicalConsiderations.map((consideration, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(Info, { className: "w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: consideration })
                    ] }, idx)) })
                  ] })
                ] }) })
              ] }) })
            ] }, defense.category);
          }) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "testing-framework", className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsx("h2", { id: "testing-framework-section", className: "text-3xl font-bold mb-4 scroll-mt-24", children: "Privacy Testing Framework" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Systematische Tests zur Bewertung von Privacy Vulnerabilities" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: testingFramework.map((test, index) => {
            const Icon = test.icon;
            return /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
              /* @__PURE__ */ jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-2 sm:p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: test.testCategory }),
                    /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mt-1", children: [
                      /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                        test.automationLevel,
                        " Automation"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
                        test.skillLevel,
                        " Skill"
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: test.description })
              ] }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Test Methods:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
                    test.testMethods.slice(0, 2).map((method, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                      /* @__PURE__ */ jsx(TestTube, { className: "w-3 h-3 text-purple-500 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: method })
                    ] }, idx)),
                    test.testMethods.length > 2 && /* @__PURE__ */ jsxs("li", { className: "text-xs text-gray-500", children: [
                      "+",
                      test.testMethods.length - 2,
                      " weitere Methods..."
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Execution Time:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: test.executionTime })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Automation:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: test.automationLevel })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Key Metrics:" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: test.implementation.metrics.slice(0, 2).map((metric, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: metric }, idx)) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "pt-3 border-t", children: /* @__PURE__ */ jsxs(Button, { className: "w-full", size: "sm", children: [
                  /* @__PURE__ */ jsx(TestTube, { className: "w-4 h-4 mr-2" }),
                  "Start Test"
                ] }) })
              ] }) })
            ] }, test.testCategory);
          }) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsx("h2", { id: "implementation-section", className: "text-3xl font-bold mb-4 scroll-mt-24", children: "Implementation Roadmap" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Schritt-für-Schritt Anleitung für Model Privacy Protection" })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "mb-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5" }),
              "Defense Implementation Progress"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                  /* @__PURE__ */ jsx("span", { children: "Defense Score" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    Math.round(defenseScore),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsx(Progress, { value: defenseScore, className: "h-3" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "text-2xl font-bold",
                    defenseScore >= 80 ? "text-green-600" : defenseScore >= 60 ? "text-yellow-600" : "text-red-600"
                  ), children: defenseScore >= 80 ? "Strong" : defenseScore >= 60 ? "Moderate" : "Vulnerable" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Defense Level" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: checkedItems.size }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Implemented" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-600", children: defenseStrategies.length * 4 - checkedItems.size }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Remaining" })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: defenseStrategies.map((defense, categoryIndex) => /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(defense.icon, { className: "w-5 h-5" }),
              defense.category
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm", children: "Implementation Tasks:" }),
              defense.implementation.trainingTime.map((task, taskIndex) => {
                const itemId = `${categoryIndex}-${taskIndex}`;
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
                  ), children: task })
                ] }, taskIndex);
              })
            ] }) })
          ] }, defense.category)) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "monitoring", className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
            /* @__PURE__ */ jsx("h2", { id: "monitoring-section", className: "text-3xl font-bold mb-4 scroll-mt-24", children: "Monitoring & Detection" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Kontinuierliche Überwachung für Privacy Attacks und Model Integrity" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: monitoringFramework.map((monitoring, index) => {
            const Icon = monitoring.icon;
            return /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 sm:p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: monitoring.monitoringType }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: monitoring.description })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Detection Methods:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: monitoring.detectionMethods.map((method, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(Radar, { className: "w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: method })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Key Metrics:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: monitoring.implementation.metrics.map((metric, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(BarChart3, { className: "w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: metric })
                    ] }, idx)) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Business Value:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: monitoring.businessValue.map((value, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: value })
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Infrastructure:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: monitoring.implementation.infrastructure.slice(0, 2).map((infra, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(Server, { className: "w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: infra })
                    ] }, idx)) })
                  ] })
                ] })
              ] }) })
            ] }, monitoring.monitoringType);
          }) }),
          /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" }),
              "Bereit für Model Privacy Protection?"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Starten Sie Ihre Model Privacy Initiative mit unseren spezialisierten Tools und Services." }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-red-600 to-orange-600", children: [
                  /* @__PURE__ */ jsx(TestTube, { className: "w-4 h-4 mr-2" }),
                  "Privacy Testing Suite"
                ] }),
                /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 mr-2" }),
                  "Defense Framework"
                ] }),
                /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                  /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 mr-2" }),
                  "Monitoring Setup"
                ] }),
                /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                  /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 mr-2" }),
                  "Expert Consulting"
                ] })
              ] })
            ] }) })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  ModelPrivacyAttacks as default
};
