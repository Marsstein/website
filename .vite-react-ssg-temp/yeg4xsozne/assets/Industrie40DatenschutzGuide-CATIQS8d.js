import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { motion } from "framer-motion";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Factory, BookOpen, ArrowRight, Download, FileText, Shield, Radio, Cog, Cpu, Users, Code, Cloud, AlertTriangle, ChevronUp, CheckCircle2, Scan, Bluetooth, Network, Monitor, Gauge, Database, Server, CircuitBoard, Camera, Smartphone, Scale, Clock, Construction, Wrench, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
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
const Industrie40DatenschutzGuide = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeSection, setActiveSection] = useState("ueberblick");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigationItems = [
    { id: "ueberblick", label: "Überblick", icon: Shield },
    { id: "iot-sensoren", label: "IoT & Sensoren", icon: Radio },
    { id: "maschinendaten", label: "Maschinendaten", icon: Cog },
    { id: "edge-computing", label: "Edge Computing", icon: Cpu },
    { id: "mitarbeiterschutz", label: "Mitarbeiterschutz", icon: Users },
    { id: "umsetzung", label: "Umsetzung", icon: Code }
  ];
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
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const industrie40Frameworks = [
    {
      name: "DSGVO für Produktionsdaten",
      category: "Data Protection",
      requirements: [
        "Anonymisierung von Maschinendaten",
        "Zweckbindung für Produktionsoptimierung",
        "Minimale Datenerfassung in Smart Factory",
        "Sichere Datenübertragung in IIoT-Netzen"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "Cybersecurity Act & NIS2",
      category: "Cybersecurity",
      requirements: [
        "Kritische Infrastrukturen absichern",
        "Incident Response für OT-Systeme",
        "Supply Chain Cybersecurity",
        "OT/IT-Konvergenz Security"
      ],
      color: "bg-red-50 border-red-200"
    },
    {
      name: "Machinery Directive & CE",
      category: "Product Safety",
      requirements: [
        "Safety by Design für vernetzte Maschinen",
        "Cybersecurity in Maschinenrichtlinie",
        "Risikobeurteilung für Smart Manufacturing",
        "Dokumentation vernetzter Systeme"
      ],
      color: "bg-green-50 border-green-200"
    }
  ];
  const iotChallenges = [
    {
      category: "Sensor Networks",
      icon: Radio,
      challenges: [
        "Massendatenerfassung ohne explizite Einwilligung",
        "Edge-basierte Echtzeitverarbeitung",
        "Verschlüsselung bei begrenzten Ressourcen",
        "Device Identity & Authentication"
      ]
    },
    {
      category: "Machine Learning",
      icon: Cpu,
      challenges: [
        "Personenbezogene Produktionsdaten in ML-Modellen",
        "Biometrische Daten für Zugangskontrollen",
        "Predictive Analytics vs. Privacy",
        "Federated Learning in der Produktion"
      ]
    },
    {
      category: "Human-Machine Interface",
      icon: Monitor,
      challenges: [
        "Tracking von Mitarbeiteraktivitäten",
        "Augmented Reality mit Gesichtserkennung",
        "Voice Commands mit Spracherkennung",
        "Wearables in der Arbeitssicherheit"
      ]
    }
  ];
  const renderOverview = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Factory, { className: "w-8 h-8 text-gray-600" }),
        "Industrie 4.0 Datenschutz Excellence"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-6", children: "Implementieren Sie umfassende Datenschutz-Standards für Ihre Smart Factory. Von IoT-Sensornetzen über Edge Computing bis hin zu KI-gestützter Produktion - navigieren Sie sicher durch die regulatorischen Anforderungen der vernetzten Industrie." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: ["DSGVO-konforme IoT", "NIS2-ready Infrastructure", "Privacy by Design"].map((feature, index) => /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg p-4 text-center border border-gray-200", children: /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-gray-700", children: feature }) }, index)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: industrie40Frameworks.map((framework, index) => /* @__PURE__ */ jsxs(Card, { className: cn("p-6 border-2", framework.color), children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: framework.name }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "w-fit", children: framework.category })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: framework.requirements.map((req, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: req })
      ] }, i)) })
    ] }, index)) })
  ] });
  const renderIoTDevices = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Radio, { className: "w-8 h-8 text-indigo-600" }),
        "IoT & Sensor Privacy Management"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-6", children: "Entwickeln Sie datenschutzkonforme IoT-Architekturen für industrielle Sensornetzwerke mit Privacy by Design Prinzipien und minimaler Datenerfassung." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Scan, { className: "w-5 h-5 text-blue-600" }),
          "Smart Sensor Privacy Architecture"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-3", children: "Sensor Data Classification" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Technische Daten (Temperatur, Druck, Vibration)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-600" }),
                /* @__PURE__ */ jsx("span", { children: "Standortdaten mit potenziellem Personenbezug" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-600" }),
                /* @__PURE__ */ jsx("span", { children: "Biometrische Daten für Zugangskontrollen" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-600" }),
                /* @__PURE__ */ jsx("span", { children: "Verhaltensdaten von Mitarbeitern" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "IoT Privacy Configuration" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// IoT Device Privacy Configuration
{
  "deviceId": "sensor_temp_001",
  "dataClassification": "technical_non_personal",
  "privacySettings": {
    "dataMinimization": true,
    "localProcessingOnly": true,
    "encryptionAtRest": "AES-256",
    "encryptionInTransit": "TLS-1.3",
    "retentionPeriod": "30_days",
    "pseudonymization": {
      "enabled": true,
      "method": "hmac_sha256",
      "saltRotation": "weekly"
    }
  },
  "dataFlow": {
    "collection": {
      "frequency": "1_minute",
      "batchSize": 100,
      "compressionEnabled": true
    },
    "processing": {
      "location": "edge_gateway",
      "aggregationWindow": "5_minutes",
      "anomalyDetection": true
    },
    "storage": {
      "location": "local_edge",
      "cloudBackup": false,
      "automaticDeletion": true
    }
  },
  "compliance": {
    "gdprApplicable": false,
    "legalBasis": "legitimate_interest_technical_optimization",
    "dataSubjectRights": "not_applicable",
    "auditTrail": true
  }
}` })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Bluetooth, { className: "w-5 h-5 text-purple-600" }),
          "Edge-to-Cloud Privacy Pipeline"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Edge Processing Layer" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Real-time Anonymisierung" }),
                /* @__PURE__ */ jsx("li", { children: "• Data Aggregation & Compression" }),
                /* @__PURE__ */ jsx("li", { children: "• Anomaly Detection ohne Cloud" }),
                /* @__PURE__ */ jsx("li", { children: "• Local AI Inference" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Gateway Privacy Controls" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Data Classification Enforcement" }),
                /* @__PURE__ */ jsx("li", { children: "• Policy-based Filtering" }),
                /* @__PURE__ */ jsx("li", { children: "• Encryption Key Management" }),
                /* @__PURE__ */ jsx("li", { children: "• Compliance Rule Engine" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Edge Gateway Implementation" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Edge Gateway Privacy Processor
class EdgePrivacyGateway {
  constructor(config) {
    this.privacyRules = new PrivacyRuleEngine(config);
    this.encryptionService = new EdgeEncryption();
    this.anonymizer = new DataAnonymizer();
    this.complianceLogger = new ComplianceLogger();
  }

  async processSensorData(deviceData) {
    // 1. Klassifiziere eingehende Daten
    const classification = await this.privacyRules
      .classifyData(deviceData);
    
    // 2. Wende Privacy-Transformationen an
    let processedData = deviceData;
    
    if (classification.containsPersonalData) {
      // Anonymisierung erforderlich
      processedData = await this.anonymizer
        .anonymize(deviceData, classification.level);
      
      // Logge Verarbeitung für Audit
      await this.complianceLogger.log({
        action: 'personal_data_anonymization',
        deviceId: deviceData.deviceId,
        dataTypes: classification.dataTypes,
        method: 'edge_processing',
        timestamp: Date.now()
      });
    }
    
    // 3. Komprimierung und Aggregation
    const aggregatedData = await this.aggregateData(
      processedData,
      classification.aggregationRules
    );
    
    // 4. Verschlüsselung für Cloud-Transport
    if (classification.allowCloudTransfer) {
      const encryptedData = await this.encryptionService
        .encrypt(aggregatedData);
      
      return {
        data: encryptedData,
        metadata: {
          classification: classification.level,
          processed: true,
          cloudReady: true
        }
      };
    }
    
    // 5. Lokale Speicherung für sensitive Daten
    await this.storeLocally(aggregatedData, classification);
    
    return {
      data: null,
      metadata: {
        classification: classification.level,
        processed: true,
        localOnly: true
      }
    };
  }
}` })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Network, { className: "w-5 h-5 text-green-600" }),
        "Industrial IoT Network Security"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: iotChallenges.map((challenge, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(challenge.icon, { className: "w-5 h-5 text-green-600" }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: challenge.category })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: challenge.challenges.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: item })
        ] }, i)) })
      ] }, index)) }) })
    ] })
  ] });
  const renderMachineData = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 border border-green-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Cog, { className: "w-8 h-8 text-green-600" }),
        "Maschinendaten-Datenschutz"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Verwalten Sie Produktions- und Maschinendaten DSGVO-konform, auch wenn diese indirekt Rückschlüsse auf Personen zulassen könnten." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Gauge, { className: "w-5 h-5 text-blue-600" }),
          "Machine Learning Privacy"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-3", children: "Privacy-Preserving ML" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Federated Learning für verteilte Fabriken" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Differential Privacy für Produktionsdaten" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Homomorphic Encryption für Cloud-ML" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Secure Multi-party Computation" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Federated Learning Implementation" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Federated Learning für Industrie 4.0
class IndustrialFederatedLearning {
  constructor(factoryId, privacyConfig) {
    this.factoryId = factoryId;
    this.privacyBudget = privacyConfig.differentialPrivacy.budget;
    this.localModel = new ProductionOptimizationModel();
    this.federationClient = new SecureFederationClient();
  }

  async trainLocalModel(productionData) {
    // 1. Daten-Preprocessing mit Privacy
    const preprocessedData = await this.preprocessWithPrivacy(
      productionData
    );
    
    // 2. Lokales Training mit Differential Privacy
    const gradients = await this.localModel.train(
      preprocessedData,
      {
        differentialPrivacy: {
          epsilon: this.privacyBudget.epsilon,
          delta: this.privacyBudget.delta,
          mechanism: 'gaussian_noise'
        },
        batchSize: 32,
        epochs: 5
      }
    );
    
    // 3. Gradient Compression für Übertragung
    const compressedGradients = await this.compressGradients(
      gradients,
      0.1 // 10% sparsity
    );
    
    return compressedGradients;
  }

  async participateInFederation() {
    try {
      // Lokale Daten trainieren (nie die Fabrik verlassen)
      const localGradients = await this.trainLocalModel(
        this.getLocalProductionData()
      );
      
      // Sichere Übertragung zum Federation Server
      const encryptedGradients = await this.encryptGradients(
        localGradients
      );
      
      // Empfange aggregierte Updates
      const globalUpdate = await this.federationClient
        .exchangeUpdates(encryptedGradients);
      
      // Aktualisiere lokales Modell
      await this.localModel.applyGlobalUpdate(globalUpdate);
      
      return {
        success: true,
        modelVersion: this.localModel.version,
        privacyBudgetUsed: this.calculatePrivacyBudgetUsage()
      };
    } catch (error) {
      console.error('Federation participation failed:', error);
      return { success: false, error: error.message };
    }
  }

  async preprocessWithPrivacy(data) {
    // Entferne potentiell personenbeziehbare Identifikatoren
    const anonymizedData = data.map(record => ({
      ...record,
      // Entferne Worker-IDs
      workerId: null,
      shiftId: null,
      // Anonymisiere Zeitstempel (nur Stunde)
      timestamp: this.roundToHour(record.timestamp),
      // Addiere Noise zu sensitiven Metriken
      efficiency: this.addDifferentialPrivacyNoise(
        record.efficiency,
        this.privacyBudget.epsilon / 100
      )
    }));
    
    return anonymizedData;
  }
}` })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Database, { className: "w-5 h-5 text-purple-600" }),
          "Production Data Governance"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Data Lineage Tracking" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "Vollständige Nachverfolgung aller Datenquellen und Verarbeitungsschritte" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Automated Data Classification" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "KI-basierte Klassifizierung nach Sensitivität und Personenbezug" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Purpose Limitation Enforcement" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "Technische Durchsetzung der Zweckbindung auf Datenbank-Ebene" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Data Governance Engine" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Production Data Governance
class ProductionDataGovernance {
  constructor() {
    this.dataClassifier = new AutomatedDataClassifier();
    this.purposeLimiter = new PurposeLimitationEngine();
    this.lineageTracker = new DataLineageTracker();
    this.retentionManager = new RetentionPolicyManager();
  }

  async processProductionData(data, context) {
    // 1. Automatische Datenklassifizierung
    const classification = await this.dataClassifier
      .classifyProductionData(data);
    
    // 2. Purpose Limitation Check
    const purposeCheck = await this.purposeLimiter
      .validatePurpose(classification, context.purpose);
    
    if (!purposeCheck.allowed) {
      throw new Error(\`Purpose limitation violation: \${purposeCheck.reason}\`);
    }
    
    // 3. Data Lineage Documentation
    await this.lineageTracker.recordDataFlow({
      sourceSystem: context.sourceSystem,
      dataTypes: classification.dataTypes,
      purpose: context.purpose,
      transformation: context.transformation,
      destination: context.destination,
      timestamp: Date.now(),
      complianceFlags: {
        gdprApplicable: classification.containsPersonalData,
        retentionPeriod: classification.retentionPeriod,
        legalBasis: context.legalBasis
      }
    });
    
    // 4. Retention Policy Application
    const processedData = await this.retentionManager
      .applyRetentionPolicy(data, classification);
    
    return {
      data: processedData,
      classification: classification,
      governance: {
        purposeValidated: true,
        lineageRecorded: true,
        retentionApplied: true
      }
    };
  }

  async generateComplianceReport(timeRange) {
    const lineageData = await this.lineageTracker
      .getDataFlows(timeRange);
    
    const report = {
      dataFlowSummary: {
        totalFlows: lineageData.length,
        byPurpose: this.groupBy(lineageData, 'purpose'),
        byDataType: this.groupBy(lineageData, 'dataTypes'),
        withPersonalData: lineageData.filter(
          flow => flow.complianceFlags.gdprApplicable
        ).length
      },
      retentionCompliance: await this.retentionManager
        .getComplianceStatus(),
      purposeLimitation: await this.purposeLimiter
        .getViolationReport(timeRange)
    };
    
    return report;
  }
}` })
          ] })
        ] }) })
      ] })
    ] })
  ] });
  const renderEdgeComputing = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Cpu, { className: "w-8 h-8 text-orange-600" }),
        "Edge Computing Privacy"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Implementieren Sie Privacy-by-Design in Ihrer Edge Computing Infrastruktur für Echtzeitverarbeitung ohne Kompromisse beim Datenschutz." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Server, { className: "w-5 h-5 text-blue-600" }),
          "Edge Privacy Architecture"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-3", children: "Edge Privacy Stack" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Hardware Security Modules (HSM)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Trusted Execution Environments (TEE)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Secure Boot & Attestation" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Edge-to-Edge Encryption" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Edge Privacy Container" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `# Docker Compose für Privacy-Edge
version: '3.8'

services:
  edge-privacy-processor:
    image: industry40/edge-privacy:latest
    privileged: true
    environment:
      - PRIVACY_LEVEL=strict
      - TEE_ENABLED=true
      - HSM_ENDPOINT=tcp://hsm-service:2345
    volumes:
      - /dev/tpmrm0:/dev/tpmrm0  # TPM access
      - ./privacy-policies:/app/policies:ro
      - edge-secure-storage:/secure-data
    deploy:
      resources:
        limits:
          memory: 2G
          cpus: '1.0'
      placement:
        constraints:
          - node.labels.security_level==high
          - node.labels.has_tpm==true

  data-anonymizer:
    image: industry40/data-anonymizer:latest
    environment:
      - ANONYMIZATION_STRENGTH=high
      - K_ANONYMITY_THRESHOLD=5
      - L_DIVERSITY_ENABLED=true
    depends_on:
      - edge-privacy-processor

  secure-gateway:
    image: industry40/secure-gateway:latest
    ports:
      - "8443:8443"
    environment:
      - TLS_VERSION=1.3
      - CIPHER_SUITES=TLS_AES_256_GCM_SHA384
      - CLIENT_CERT_REQUIRED=true
    volumes:
      - ./certs/edge-gateway.crt:/app/certs/server.crt:ro
      - ./certs/edge-gateway.key:/app/certs/server.key:ro
      - ./certs/ca-bundle.crt:/app/certs/ca.crt:ro

  local-ai-engine:
    image: industry40/privacy-ai:latest
    environment:
      - MODEL_ENCRYPTION=enabled
      - INFERENCE_ISOLATION=strict
      - NO_TELEMETRY=true
    volumes:
      - ai-models:/app/models
      - /tmp/ai-workspace:/tmp/workspace
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]

volumes:
  edge-secure-storage:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /encrypted/edge-data
  ai-models:
    driver: local
    driver_opts:
      type: none  
      o: bind
      device: /encrypted/ai-models

networks:
  edge-network:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16
    options:
      encrypted: "true"` })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CircuitBoard, { className: "w-5 h-5 text-purple-600" }),
          "Real-time Privacy Processing"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Stream Processing Privacy" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Real-time Anonymization Pipeline" }),
                /* @__PURE__ */ jsx("li", { children: "• Sliding Window Data Minimization" }),
                /* @__PURE__ */ jsx("li", { children: "• Event-driven Privacy Controls" }),
                /* @__PURE__ */ jsx("li", { children: "• Zero-latency Compliance Checks" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Edge AI Privacy" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• On-device Model Inference" }),
                /* @__PURE__ */ jsx("li", { children: "• Encrypted Neural Networks" }),
                /* @__PURE__ */ jsx("li", { children: "• Privacy-preserving Training" }),
                /* @__PURE__ */ jsx("li", { children: "• Secure Model Updates" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Real-time Privacy Stream" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Apache Kafka Stream Privacy Processor
class PrivacyStreamProcessor {
  constructor(kafkaConfig, privacyConfig) {
    this.kafka = kafka(kafkaConfig);
    this.consumer = this.kafka.consumer({
      groupId: 'privacy-processor-group'
    });
    this.producer = this.kafka.producer();
    this.privacyEngine = new RealTimePrivacyEngine(privacyConfig);
  }

  async processProductionStream() {
    await this.consumer.subscribe({
      topic: 'production-data-raw'
    });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        try {
          const rawData = JSON.parse(message.value.toString());
          
          // Real-time Privacy Processing
          const privacyResult = await this.privacyEngine
            .processInRealTime(rawData);
          
          if (privacyResult.shouldDrop) {
            // Lösche sensitive Daten ohne Weiterleitung
            await this.logPrivacyDecision(
              'data_dropped',
              privacyResult.reason
            );
            return;
          }
          
          // Transformed Data weiterleiten
          await this.producer.send({
            topic: privacyResult.outputTopic,
            messages: [{
              key: message.key,
              value: JSON.stringify(privacyResult.transformedData),
              headers: {
                'privacy-level': privacyResult.privacyLevel,
                'transformation-applied': privacyResult.transformation,
                'compliance-check': 'passed'
              }
            }]
          });
          
        } catch (error) {
          console.error('Privacy processing failed:', error);
          await this.handlePrivacyProcessingError(error, message);
        }
      }
    });
  }
}

class RealTimePrivacyEngine {
  constructor(config) {
    this.rules = new PrivacyRuleEngine(config.rules);
    this.anonymizer = new StreamAnonymizer(config.anonymization);
    this.classifier = new RealTimeDataClassifier();
  }

  async processInRealTime(data) {
    const startTime = Date.now();
    
    // 1. Schnelle Datenklassifizierung (< 1ms)
    const classification = await this.classifier
      .classifyFast(data);
    
    // 2. Privacy Rule Evaluation (< 2ms)
    const ruleResult = await this.rules
      .evaluate(data, classification);
    
    if (ruleResult.action === 'DROP') {
      return {
        shouldDrop: true,
        reason: ruleResult.reason,
        processingTime: Date.now() - startTime
      };
    }
    
    // 3. Datentransformation (< 5ms)
    const transformedData = await this.anonymizer
      .transformStream(data, ruleResult.transformations);
    
    return {
      shouldDrop: false,
      transformedData: transformedData,
      privacyLevel: classification.level,
      transformation: ruleResult.transformations,
      outputTopic: ruleResult.outputTopic,
      processingTime: Date.now() - startTime
    };
  }
}` })
          ] })
        ] }) })
      ] })
    ] })
  ] });
  const renderWorkerPrivacy = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-teal-600" }),
        "Mitarbeiterdatenschutz in Smart Factories"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Schützen Sie Mitarbeiterdaten in der vernetzten Produktion und implementieren Sie transparente Überwachungssysteme mit Respekt für die Privatsphäre." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Camera, { className: "w-5 h-5 text-blue-600" }),
          "Workplace Monitoring Privacy"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-3", children: "Privacy-First Monitoring" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Anonyme Bewegungsmuster-Analyse" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Gesichtsunschärfe in Videostreams" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Pseudonymisierte Leistungsmetriken" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Opt-in für erweiterte Analytics" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Privacy Video Analytics" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Privacy-Preserving Video Analytics
class WorkplaceVideoAnalytics {
  constructor(privacyConfig) {
    this.faceBlurrer = new RealTimeFaceBlurring();
    this.anonymizer = new PersonAnonymizer();
    this.safetyDetector = new SafetyViolationDetector();
    this.privacyConfig = privacyConfig;
  }

  async processVideoFrame(frame, metadata) {
    // 1. Privacy Pre-processing
    let processedFrame = frame;
    
    if (this.privacyConfig.blurFaces) {
      // Real-time Gesichtsunschärfe
      processedFrame = await this.faceBlurrer
        .blurFaces(processedFrame);
    }
    
    if (this.privacyConfig.anonymizePersons) {
      // Personen-Silhouetten statt Identifizierung
      processedFrame = await this.anonymizer
        .createSilhouettes(processedFrame);
    }
    
    // 2. Safety Analysis (ohne Personenidentifikation)
    const safetyAnalysis = await this.safetyDetector
      .analyzeWorkplaceSafety(processedFrame, {
        detectHazards: true,
        countPersons: true,
        identifyPersons: false,
        trackMovement: false
      });
    
    // 3. Aggregate Metrics (keine individuellen Daten)
    const aggregateMetrics = {
      timestamp: metadata.timestamp,
      location: metadata.location,
      personsPresent: safetyAnalysis.personCount,
      safetyViolations: safetyAnalysis.violations.map(v => ({
        type: v.type,
        severity: v.severity,
        area: v.boundingBox, // Ohne Personenbezug
        // Keine person_id oder tracking_id
      })),
      // Keine biometrischen Daten oder Gesichtserkennung
      anonymousMovementPatterns: this.extractAnonymousPatterns(
        safetyAnalysis.movements
      )
    };
    
    // 4. Lösche Original-Frame (nur Metriken behalten)
    if (this.privacyConfig.deleteOriginalFrames) {
      processedFrame = null;
    }
    
    return {
      processedFrame: processedFrame,
      metrics: aggregateMetrics,
      privacyCompliant: true
    };
  }

  extractAnonymousPatterns(movements) {
    // Extrahiere anonyme Bewegungsmuster ohne Tracking
    return movements.map(movement => ({
      direction: movement.direction,
      speed: movement.speed,
      area: movement.area,
      // Keine unique IDs oder Tracking
      anonymousId: this.generateSessionAnonymousId()
    }));
  }
}` })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Smartphone, { className: "w-5 h-5 text-purple-600" }),
          "Wearables & IoT Privacy"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Smart Wearables Data" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Health Monitoring mit lokaler Verarbeitung" }),
                /* @__PURE__ */ jsx("li", { children: "• Anonyme Stress-Level Aggregation" }),
                /* @__PURE__ */ jsx("li", { children: "• Standort-Tracking mit Zonen-basierter Privacy" }),
                /* @__PURE__ */ jsx("li", { children: "• Biometrische Daten nur auf Device" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Employee Consent Management" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Granulare Opt-in für verschiedene Sensoren" }),
                /* @__PURE__ */ jsx("li", { children: "• Dynamic Consent für Arbeitsbereiche" }),
                /* @__PURE__ */ jsx("li", { children: "• Anonyme vs. Personalisierte Modi" }),
                /* @__PURE__ */ jsx("li", { children: "• Einfacher Widerruf über App" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Employee Privacy Dashboard" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Employee Privacy Control Interface
class EmployeePrivacyDashboard {
  constructor(employeeId) {
    this.employeeId = employeeId;
    this.consentManager = new WorkplaceConsentManager();
    this.dataController = new PersonalDataController();
  }

  async renderPrivacyControls() {
    const currentConsent = await this.consentManager
      .getEmployeeConsent(this.employeeId);
    
    return {
      workplaceMonitoring: {
        videoAnalytics: {
          enabled: currentConsent.videoAnalytics,
          purpose: 'Workplace safety monitoring',
          dataTypes: ['Anonymous movement patterns', 'Safety violations'],
          retention: '30 days',
          control: 'Opt-in required'
        },
        audioMonitoring: {
          enabled: currentConsent.audioMonitoring,
          purpose: 'Noise level monitoring for health',
          dataTypes: ['Ambient noise levels', 'No speech recording'],
          retention: '7 days',
          control: 'Opt-in required'
        },
        locationTracking: {
          enabled: currentConsent.locationTracking,
          purpose: 'Emergency response and workflow optimization',
          dataTypes: ['Zone-based location', 'No GPS coordinates'],
          retention: '24 hours',
          control: 'Can be disabled by employee'
        }
      },
      wearableDevices: {
        healthMonitoring: {
          enabled: currentConsent.healthMonitoring,
          purpose: 'Occupational health and safety',
          dataTypes: ['Heart rate zones', 'Stress indicators', 'No medical diagnosis'],
          processing: 'Local device only',
          control: 'Full employee control'
        },
        performanceTracking: {
          enabled: currentConsent.performanceTracking,
          purpose: 'Workflow optimization',
          dataTypes: ['Task completion times', 'Movement efficiency'],
          anonymization: 'Aggregated with team data',
          control: 'Opt-in with granular options'
        }
      },
      dataRights: {
        viewMyData: () => this.dataController.exportEmployeeData(),
        deleteMyData: () => this.dataController.deleteEmployeeData(),
        correctMyData: () => this.dataController.correctEmployeeData(),
        withdrawConsent: (category) => this.consentManager.withdrawConsent(category)
      }
    };
  }

  async updatePrivacyPreferences(preferences) {
    // Sofortige Wirkung auf alle verbundenen Systeme
    await this.consentManager.updateConsent(
      this.employeeId,
      preferences
    );
    
    // Propagiere Änderungen an IoT-Geräte
    await this.propagateConsentToDevices(preferences);
    
    // Audit-Log für Compliance
    await this.logConsentChange(preferences);
    
    return {
      success: true,
      effectiveImmediately: true,
      devicesUpdated: await this.getConnectedDevices()
    };
  }
}` })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-green-600" }),
        "Legal Compliance Framework"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "DSGVO Art. 88 - Beschäftigtendatenschutz" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
            {
              requirement: "Interessenabwägung",
              description: "Berechtigte Interessen des Arbeitgebers vs. Mitarbeiterrechte",
              implementation: "Regelmäßige Privacy Impact Assessments"
            },
            {
              requirement: "Zweckbindung",
              description: "Monitoring nur für definierte Zwecke (Sicherheit, Qualität)",
              implementation: "Technische Purpose Limitation"
            },
            {
              requirement: "Verhältnismäßigkeit",
              description: "Minimale Überwachung für maximale Zielerreichung",
              implementation: "Privacy by Design in Monitoring-Systemen"
            },
            {
              requirement: "Transparenz",
              description: "Vollständige Information über Datenverarbeitung",
              implementation: "Employee Privacy Dashboard"
            }
          ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-50 rounded-lg border border-green-200", children: [
            /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-800", children: item.requirement }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: item.description }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-green-600 mt-1 font-medium", children: [
              "→ ",
              item.implementation
            ] })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Betriebsvereinbarung Template" }),
          /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-4 rounded-lg", children: /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Betriebsvereinbarung Template
{
  "title": "Betriebsvereinbarung Industrie 4.0 Datenschutz",
  "scope": "Smart Factory Überwachung und IoT-Systeme",
  "dataProcessing": {
    "permitted": [
      {
        "purpose": "Arbeitsschutz und Unfallprävention",
        "dataTypes": ["Anonyme Bewegungsmuster", "Sicherheitsverletzungen"],
        "legalBasis": "Art. 6 Abs. 1 lit. f DSGVO",
        "retention": "30 Tage"
      },
      {
        "purpose": "Qualitätssicherung Produktion",
        "dataTypes": ["Aggregierte Leistungsmetriken", "Fehlerhäufigkeit"],
        "legalBasis": "Art. 6 Abs. 1 lit. f DSGVO",
        "retention": "90 Tage"
      }
    ],
    "prohibited": [
      "Individuelle Leistungsbewertung über Sensordaten",
      "Gesichtserkennung zur Personenidentifikation",
      "Permanente Standortverfolgung außerhalb Arbeitszeit",
      "Emotionserkennung oder Stimmungsanalyse"
    ]
  },
  "employeeRights": {
    "information": "Monatliche Berichte über verarbeitete Daten",
    "objection": "Widerspruch gegen nicht-essenzielles Monitoring",
    "access": "Self-Service Portal für Dateneinsicht",
    "rectification": "Korrektur falscher Sensordaten"
  },
  "technicalMeasures": {
    "anonymization": "Automatische Anonymisierung nach 24h",
    "encryption": "Ende-zu-Ende Verschlüsselung aller IoT-Daten",
    "accessControl": "Role-based Access nur für autorisiertes Personal",
    "auditTrail": "Vollständige Protokollierung aller Datenzugriffe"
  },
  "governance": {
    "dataProtectionOfficer": "Überwachung und regelmäßige Audits",
    "worksCouncil": "Mitbestimmung bei neuen Monitoring-Systemen",
    "reviewCycle": "Jährliche Überprüfung und Anpassung"
  }
}` }) })
        ] })
      ] }) })
    ] })
  ] });
  const renderImplementation = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Code, { className: "w-8 h-8 text-purple-600" }),
        "Complete Industrie 4.0 Privacy Implementation"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Umfassende Implementierung einer DSGVO-konformen Smart Factory mit Privacy by Design, Edge Computing und Mitarbeiterdatenschutz." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: [
      {
        phase: "Phase 1",
        title: "Assessment & Design",
        duration: "3-4 Wochen",
        color: "blue",
        tasks: [
          "Privacy Impact Assessment für IoT",
          "Data Flow Mapping Smart Factory",
          "Regulatory Compliance Review",
          "Edge Privacy Architecture Design"
        ]
      },
      {
        phase: "Phase 2",
        title: "Edge Infrastructure",
        duration: "4-5 Wochen",
        color: "green",
        tasks: [
          "Edge Computing Privacy Setup",
          "IoT Device Security Configuration",
          "Real-time Anonymization Pipeline",
          "Secure Gateway Implementation"
        ]
      },
      {
        phase: "Phase 3",
        title: "Worker Privacy Systems",
        duration: "3-4 Wochen",
        color: "orange",
        tasks: [
          "Employee Consent Management",
          "Workplace Monitoring Privacy",
          "Wearables Privacy Controls",
          "Privacy Dashboard Development"
        ]
      },
      {
        phase: "Phase 4",
        title: "Compliance & Operations",
        duration: "2-3 Wochen",
        color: "purple",
        tasks: [
          "Betriebsvereinbarung Finalisierung",
          "Staff Training & Documentation",
          "Audit & Monitoring Setup",
          "Continuous Compliance Framework"
        ]
      }
    ].map((phase, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx("div", { className: cn(
          "inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3",
          phase.color === "blue" && "bg-blue-100 text-blue-800",
          phase.color === "green" && "bg-green-100 text-green-800",
          phase.color === "orange" && "bg-orange-100 text-orange-800",
          phase.color === "purple" && "bg-purple-100 text-purple-800"
        ), children: phase.phase }),
        /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: phase.title }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: phase.duration })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.tasks.map((task, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: task })
      ] }, i)) }) })
    ] }, index)) }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Construction, { className: "w-5 h-5 text-yellow-600" }),
        "Complete Technology Stack für Smart Factory"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-yellow-700", children: "Infrastructure Technology Stack" }),
            /* @__PURE__ */ jsx("div", { className: "bg-yellow-50 p-4 rounded-lg border border-yellow-200", children: /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `# Kubernetes Smart Factory Privacy Stack
apiVersion: v1
kind: Namespace
metadata:
  name: smart-factory-privacy
  labels:
    security.level: high
    privacy.compliance: gdpr-strict

---
# Edge Privacy Gateway
apiVersion: apps/v1
kind: Deployment
metadata:
  name: edge-privacy-gateway
  namespace: smart-factory-privacy
spec:
  replicas: 3
  selector:
    matchLabels:
      app: edge-privacy-gateway
  template:
    metadata:
      labels:
        app: edge-privacy-gateway
        security.level: high
    spec:
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        fsGroup: 1000
      containers:
      - name: privacy-gateway
        image: industry40/edge-privacy-gateway:latest
        env:
        - name: PRIVACY_MODE
          value: "strict"
        - name: REAL_TIME_ANONYMIZATION
          value: "enabled"
        - name: HSM_ENDPOINT
          valueFrom:
            secretKeyRef:
              name: hsm-config
              key: endpoint
        resources:
          limits:
            memory: "1Gi"
            cpu: "500m"
          requests:
            memory: "512Mi"
            cpu: "250m"
        ports:
        - containerPort: 8443
          name: https
        volumeMounts:
        - name: privacy-policies
          mountPath: /app/policies
          readOnly: true
        - name: tls-certs
          mountPath: /app/certs
          readOnly: true
      volumes:
      - name: privacy-policies
        configMap:
          name: privacy-policies
      - name: tls-certs
        secret:
          secretName: edge-gateway-tls

---
# IoT Data Anonymizer
apiVersion: apps/v1
kind: Deployment
metadata:
  name: iot-data-anonymizer
spec:
  replicas: 5
  selector:
    matchLabels:
      app: iot-data-anonymizer
  template:
    spec:
      containers:
      - name: anonymizer
        image: industry40/data-anonymizer:latest
        env:
        - name: ANONYMIZATION_STRENGTH
          value: "high"
        - name: K_ANONYMITY_THRESHOLD
          value: "5"
        - name: PROCESSING_MODE
          value: "real_time"
        resources:
          limits:
            memory: "2Gi"
            cpu: "1"

---
# Worker Privacy Dashboard
apiVersion: apps/v1
kind: Deployment
metadata:
  name: worker-privacy-dashboard
spec:
  replicas: 2
  selector:
    matchLabels:
      app: worker-privacy-dashboard
  template:
    spec:
      containers:
      - name: dashboard
        image: industry40/worker-privacy-dashboard:latest
        env:
        - name: CONSENT_MANAGEMENT_ENABLED
          value: "true"
        - name: GDPR_COMPLIANCE_MODE
          value: "strict"` }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-yellow-700", children: "IoT Edge Privacy Configuration" }),
            /* @__PURE__ */ jsx("div", { className: "bg-yellow-50 p-4 rounded-lg border border-yellow-200", children: /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `# IoT Edge Device Privacy Config
# /etc/iot-privacy/device-config.yaml

device:
  id: "smart-factory-sensor-001"
  type: "environmental_sensor"
  location: "production_line_a"
  
privacy:
  level: "strict"
  personal_data_detection: "enabled"
  auto_anonymization: "enabled"
  
data_collection:
  # Erlaubte Sensordaten
  temperature:
    enabled: true
    precision: 0.1  # Reduzierte Präzision für Privacy
    retention: "24h"
    
  humidity:
    enabled: true
    precision: 1
    retention: "24h"
    
  # Sensitive Daten mit besonderen Schutzmaßnahmen
  pressure:
    enabled: true
    anonymization: "differential_privacy"
    epsilon: 0.1
    retention: "12h"
    
  # Deaktivierte Sensoren für Privacy
  camera:
    enabled: false
    reason: "privacy_protection"
    
  microphone:
    enabled: false
    reason: "worker_privacy"

processing:
  edge_only: true
  cloud_sync: false
  real_time_anonymization: true
  
  pipelines:
    - name: "safety_monitoring"
      input: ["temperature", "pressure"]
      processing: "anomaly_detection"
      output: "safety_alerts"
      personal_data: false
      
    - name: "efficiency_analysis"
      input: ["all_sensors"]
      processing: "aggregation"
      anonymization: "k_anonymity"
      k_value: 5
      output: "efficiency_metrics"

security:
  encryption:
    at_rest: "AES-256-GCM"
    in_transit: "TLS-1.3"
    key_management: "hsm"
    
  authentication:
    device_certificate: true
    mutual_tls: true
    
  network:
    isolated_vlan: true
    firewall_rules: "strict"
    
compliance:
  gdpr:
    applicable: true
    legal_basis: "legitimate_interest"
    purpose_limitation: "safety_and_efficiency"
    data_minimization: "enabled"
    
  audit:
    enabled: true
    log_level: "detailed"
    retention: "7_years"
    
  worker_rights:
    consent_required: false  # Technical data only
    transparency: "enabled"
    access_rights: "aggregated_data_only"` }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: "Deployment & Compliance Checklist" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-800", children: "Pre-Production" }),
              [
                "Privacy Impact Assessment abgeschlossen",
                "Betriebsvereinbarung finalisiert",
                "IoT Security Hardening durchgeführt",
                "Employee Privacy Training abgeschlossen",
                "Data Flow Dokumentation vollständig"
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, i))
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-800", children: "Production Deployment" }),
              [
                "Edge Privacy Gateways konfiguriert",
                "Real-time Anonymization aktiv",
                "Worker Privacy Dashboard deployed",
                "IoT Device Security validiert",
                "Monitoring & Alerting setup"
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Wrench, { className: "w-4 h-4 text-blue-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, i))
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-800", children: "Ongoing Compliance" }),
              [
                "Monatliche Privacy Audits",
                "Quarterly Risk Assessments",
                "Employee Feedback Integration",
                "Technology Updates & Patches",
                "Regulatory Change Monitoring"
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 text-purple-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, i))
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Industrie 4.0 Datenschutz – Smart Factory DSGVO" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Umfassender Datenschutz-Leitfaden für Industrie 4.0. IoT-Sensoren, Edge Computing & Mitarbeiterschutz in der Smart Factory. DSGVO-konforme Umsetzung garantiert." }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://datenschutz-assistent.de/wissen/branchen/industrie-40-datenschutz" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-950/30 text-gray-700 dark:text-gray-400 mb-6", children: [
            /* @__PURE__ */ jsx(Factory, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Industrie 4.0 Datenschutz" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: [
            "Industrie 4.0 Datenschutz",
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent block mt-2", children: "Smart Factory Privacy Excellence" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 mb-8", children: "Umfassender Leitfaden für datenschutzkonforme Smart Factories. Von IoT-Sensoren über Edge Computing bis hin zu Mitarbeiterdatenschutz in der vernetzten Produktion." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-gray-600 to-blue-600 text-white hover:opacity-90 group", children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "mr-2 h-5 w-5" }),
              "Zurück zur Übersicht",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
            ] }) }),
            /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
              /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
              "Smart Factory Privacy Guide"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-gray-600" }),
            "Inhaltsverzeichnis"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: navigationItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => scrollToSection(item.id),
              className: "text-left w-full px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors flex items-center gap-2 group",
              children: [
                /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100", children: item.label })
              ]
            }
          ) }, item.id)) }) }) })
        ] }),
        /* @__PURE__ */ jsx(Card, { className: "mb-8", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Smart Factory Privacy Implementation" }),
            /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "97% Industry 4.0 Ready" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-4", children: [
            { label: "IoT Privacy", progress: 96 },
            { label: "Edge Computing", progress: 98 },
            { label: "Machine Data", progress: 94 },
            { label: "Worker Privacy", progress: 99 },
            { label: "Compliance", progress: 97 },
            { label: "Security", progress: 98 }
          ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-gray-600 mb-1", children: [
              item.progress,
              "%"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: item.label }),
            /* @__PURE__ */ jsx(Progress, { value: item.progress, className: "h-2 mt-2" })
          ] }, index)) })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: navigationItems.map((item, index) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            scrollToSection(item.id);
            setActiveSection(item.id);
          },
          className: cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
            activeSection === item.id ? "bg-gray-100 dark:bg-gray-950/50 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-800" : "hover:bg-gray-50 dark:hover:bg-gray-950/30 hover:text-gray-700 dark:hover:text-gray-400",
            "border",
            activeSection === item.id ? "border-gray-200 dark:border-gray-800" : "border-transparent hover:border-gray-200 dark:hover:border-gray-800"
          ),
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: cn(
              "h-4 w-4",
              activeSection === item.id && "text-gray-600 dark:text-gray-500"
            ) }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "text-sm font-medium",
              activeSection === item.id && "text-gray-700 dark:text-gray-400"
            ), children: item.label })
          ]
        },
        item.id
      )) }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto space-y-20", children: [
          /* @__PURE__ */ jsxs("section", { id: "ueberblick", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Industrie 4.0 Datenschutz Überblick"
              }
            ),
            renderOverview()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "iot-sensoren", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "IoT-Geräte & Sensoren Datenschutz"
              }
            ),
            renderIoTDevices()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "maschinendaten", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Maschinendaten & Produktionsdaten"
              }
            ),
            renderMachineData()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "edge-computing", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Edge Computing & Datenverarbeitung"
              }
            ),
            renderEdgeComputing()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "mitarbeiterschutz", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Mitarbeiterdatenschutz in der Smart Factory"
              }
            ),
            renderWorkerPrivacy()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "umsetzung", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Umsetzung & Implementation"
              }
            ),
            renderImplementation()
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mt-12", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-gray-600" }),
            "Weiterführende Ressourcen"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsx(Link, { to: "/wissen/compliance/dsgvo", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "DSGVO Compliance" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Umfassender DSGVO-Leitfaden" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/automotive-datenschutz", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors", children: [
              /* @__PURE__ */ jsx(Cloud, { className: "h-5 w-5 text-cyan-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Automotive Datenschutz" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Connected Cars & DSGVO" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Krisenmanagement" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Data Breach Response" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/industries/manufacturing", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors", children: [
              /* @__PURE__ */ jsx(Factory, { className: "h-5 w-5 text-green-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Manufacturing Solutions" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Unsere Produktlösungen" })
            ] }) })
          ] }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    showBackToTop && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "fixed bottom-8 right-8 z-50 p-3 bg-gray-700 dark:bg-gray-950 text-white rounded-full shadow-lg hover:bg-gray-800 dark:hover:bg-gray-900 transition-all",
        "aria-label": "Zurück nach oben",
        children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-5 w-5" })
      }
    )
  ] });
};
export {
  Industrie40DatenschutzGuide as default
};
