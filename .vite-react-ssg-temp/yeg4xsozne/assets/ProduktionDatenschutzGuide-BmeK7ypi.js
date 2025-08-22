import { jsxs, jsx } from "react/jsx-runtime";
import React__default, { useState, useEffect } from "react";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { motion } from "framer-motion";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Factory, BookOpen, ArrowRight, Download, Shield, TestTube, Truck, Users, Code, AlertTriangle, Wrench, CheckCircle2, Database, Gauge, Container, HardDrive, Building2, Clock, ClipboardCheck, FileSearch, Package, Globe, Timer, UserCheck, Scale, Construction, FileCheck, RefreshCw } from "lucide-react";
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
import "react-helmet-async";
const ProduktionDatenschutzGuide = () => {
  React__default.useEffect(() => {
    document.title = "Produktion Datenschutz DSGVO – Compliance Guide";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", "DSGVO-konforme Produktion: Fertigungsdaten & Mitarbeiterschutz sicher umsetzen. ISO 27001 Standards für Ihre Fertigung. Jetzt Beratung anfordern!");
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", "https://www.dataprivacyframework.com/wissen/branchen/produktion");
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }
    return () => {
      document.title = "Data Privacy Framework";
    };
  }, []);
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeSection, setActiveSection] = useState("ueberblick");
  const navigationItems = [
    { id: "ueberblick", label: "Überblick", icon: Shield },
    { id: "produktionsdaten", label: "Produktionsdaten", icon: Factory },
    { id: "qualitaet", label: "Qualitätssicherung", icon: TestTube },
    { id: "lieferkette", label: "Lieferkette", icon: Truck },
    { id: "mitarbeiter", label: "Mitarbeiterdaten", icon: Users },
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const productionFrameworks = [
    {
      name: "DSGVO für Produktionsbetriebe",
      category: "Data Protection",
      requirements: [
        "Datenschutz in der Fertigung",
        "Mitarbeiterdaten & Schichtplanung",
        "Kunden- und Lieferantendaten",
        "Produktionsdatenerfassung"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "ISO 27001 & Informationssicherheit",
      category: "Security",
      requirements: [
        "IT-Sicherheit in der Produktion",
        "Schutz von Betriebsgeheimnissen",
        "Zugriffskontrolle & Berechtigungen",
        "Backup & Recovery Strategien"
      ],
      color: "bg-green-50 border-green-200"
    },
    {
      name: "Branchenspezifische Standards",
      category: "Industry Specific",
      requirements: [
        "ISO 9001 Qualitätsmanagement",
        "IATF 16949 für Automotive",
        "FDA Compliance für Medizinprodukte",
        "CE-Konformität & Produktsicherheit"
      ],
      color: "bg-purple-50 border-purple-200"
    }
  ];
  const productionChallenges = [
    {
      category: "Fertigungsdaten",
      icon: Factory,
      challenges: [
        "Maschinendaten & Produktionsparameter",
        "Qualitätsdaten & Prüfprotokolle",
        "Rückverfolgbarkeit & Chargen",
        "Produktionsfehler & Ausschuss"
      ]
    },
    {
      category: "Personenbezogene Daten",
      icon: Users,
      challenges: [
        "Schichtpläne & Zeiterfassung",
        "Leistungsdaten der Mitarbeiter",
        "Zugangskontrolle & Sicherheit",
        "Schulungsnachweise & Qualifikationen"
      ]
    },
    {
      category: "Geschäftsdaten",
      icon: Building2,
      challenges: [
        "Kundendaten & Aufträge",
        "Lieferantendaten & Bestellungen",
        "Kalkulationen & Preise",
        "Konstruktionsdaten & Zeichnungen"
      ]
    }
  ];
  const renderOverview = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Factory, { className: "w-8 h-8 text-gray-600" }),
        "Datenschutz in der Produktion"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-6", children: "Implementieren Sie umfassende Datenschutz-Standards für Ihren Produktionsbetrieb. Von der Fertigungsdatenerfassung über Qualitätssicherung bis hin zum Mitarbeiterdatenschutz - meistern Sie die regulatorischen Anforderungen in der modernen Produktion." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: ["DSGVO-konforme Fertigung", "ISO 27001 Sicherheit", "Mitarbeiterdatenschutz"].map((feature, index) => /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg p-4 text-center border border-gray-200", children: /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-gray-700", children: feature }) }, index)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: productionFrameworks.map((framework, index) => /* @__PURE__ */ jsxs(Card, { className: cn("p-6 border-2", framework.color), children: [
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
  const renderProductionData = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Database, { className: "w-8 h-8 text-indigo-600" }),
        "Produktionsdaten & Fertigungsinformationen"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-6", children: "Schützen Sie Ihre Produktionsdaten und implementieren Sie sichere Prozesse für die Erfassung, Verarbeitung und Speicherung von Fertigungsinformationen." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Gauge, { className: "w-5 h-5 text-blue-600" }),
          "Maschinendatenerfassung (MDE)"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-3", children: "Datenkategorien in der MDE" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Produktionszeiten & Maschinenauslastung" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Stückzahlen & Produktionsmengen" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-600" }),
                /* @__PURE__ */ jsx("span", { children: "Mitarbeiterbezogene Leistungsdaten" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-600" }),
                /* @__PURE__ */ jsx("span", { children: "Personalisierte Fehlerstatistiken" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Datenschutzkonforme MDE-Konfiguration" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// MDE Privacy Configuration
{
  "dataCollection": {
    "machineData": {
      "enabled": true,
      "anonymization": "none_required",
      "retention": "5_years",
      "purpose": "production_optimization"
    },
    "operatorData": {
      "enabled": true,
      "anonymization": "pseudonymization",
      "aggregation": "shift_level",
      "personalIdentifiers": {
        "employeeId": "hashed",
        "name": "removed",
        "performance": "aggregated"
      }
    },
    "qualityData": {
      "defectTracking": true,
      "operatorAssociation": "anonymous",
      "retention": "product_warranty_period"
    }
  },
  "accessControl": {
    "productionManager": ["view_all", "export_aggregated"],
    "shiftLeader": ["view_shift", "no_personal_data"],
    "operator": ["view_own_anonymized"],
    "quality": ["view_quality_anonymous"]
  }
}` })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Container, { className: "w-5 h-5 text-purple-600" }),
          "ERP & Produktionsplanung"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Auftragsdaten" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Kundendaten & Lieferadressen" }),
                /* @__PURE__ */ jsx("li", { children: "• Produktspezifikationen" }),
                /* @__PURE__ */ jsx("li", { children: "• Liefertermine & Prioritäten" }),
                /* @__PURE__ */ jsx("li", { children: "• Preise & Kalkulationen" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Ressourcenplanung" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Materialbedarfsplanung" }),
                /* @__PURE__ */ jsx("li", { children: "• Kapazitätsplanung" }),
                /* @__PURE__ */ jsx("li", { children: "• Personaleinsatzplanung" }),
                /* @__PURE__ */ jsx("li", { children: "• Maschinenbelegung" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "ERP Data Governance" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// ERP Privacy Policy Implementation
class ProductionDataGovernance {
  constructor() {
    this.dataClassifier = new DataClassificationEngine();
    this.accessController = new RoleBasedAccessControl();
    this.auditLogger = new ComplianceAuditLog();
  }

  async processProductionOrder(orderData) {
    // Klassifiziere Daten nach Sensitivität
    const classification = await this.dataClassifier
      .classify(orderData);
    
    // Anwenden von Datenschutzregeln
    const processedData = await this.applyPrivacyRules(
      orderData,
      classification
    );
    
    // Zugriffskontrolle basierend auf Rolle
    const accessLevel = await this.accessController
      .determineAccess(currentUser, classification);
    
    // Audit-Logging für Compliance
    await this.auditLogger.log({
      action: 'order_processing',
      dataTypes: classification.dataTypes,
      user: currentUser.id,
      purpose: 'production_planning',
      timestamp: new Date()
    });
    
    return {
      data: this.filterByAccessLevel(processedData, accessLevel),
      metadata: {
        classification: classification.level,
        retention: classification.retentionPeriod,
        gdprRelevant: classification.hasPersonalData
      }
    };
  }

  applyPrivacyRules(data, classification) {
    if (classification.hasPersonalData) {
      // Minimierung personenbezogener Daten
      data = this.minimizePersonalData(data);
      // Pseudonymisierung wo möglich
      data = this.pseudonymize(data);
    }
    
    if (classification.hasTradeSecrets) {
      // Verschlüsselung sensibler Geschäftsdaten
      data = this.encryptSensitiveFields(data);
    }
    
    return data;
  }
}` })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(HardDrive, { className: "w-5 h-5 text-green-600" }),
        "Datenaufbewahrung & Löschkonzepte"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: productionChallenges.map((challenge, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(challenge.icon, { className: "w-5 h-5 text-green-600" }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: challenge.category })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: challenge.challenges.map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: item })
        ] }, i)) })
      ] }, index)) }) })
    ] })
  ] });
  const renderQualityManagement = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 border border-green-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(TestTube, { className: "w-8 h-8 text-green-600" }),
        "Qualitätssicherung & Datenschutz"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Integrieren Sie Datenschutzprinzipien in Ihre Qualitätssicherungsprozesse und schützen Sie sensible Qualitätsdaten sowie Prüfprotokolle." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ClipboardCheck, { className: "w-5 h-5 text-blue-600" }),
          "Prüfdatenmanagement"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-3", children: "Qualitätsdaten-Kategorien" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Messwerte & Prüfergebnisse" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Produktspezifikationen & Toleranzen" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-600" }),
                /* @__PURE__ */ jsx("span", { children: "Prüfer-Identifikation & Zeitstempel" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-600" }),
                /* @__PURE__ */ jsx("span", { children: "Fehlerursachen mit Personenbezug" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Quality Data Privacy Framework" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Qualitätsdaten-Verwaltung mit Datenschutz
class QualityDataManager {
  constructor() {
    this.privacyEngine = new QualityPrivacyEngine();
    this.retentionManager = new DataRetentionManager();
    this.anonymizer = new QualityDataAnonymizer();
  }

  async recordQualityInspection(inspectionData) {
    // 1. Datenschutz-Klassifizierung
    const classification = await this.classifyInspectionData(
      inspectionData
    );
    
    // 2. Anonymisierung personenbezogener Daten
    if (classification.hasPersonalData) {
      inspectionData = await this.anonymizer.process({
        data: inspectionData,
        rules: {
          inspectorId: 'pseudonymize',
          inspectorName: 'remove',
          timestamp: 'generalize_to_shift',
          defectAssignment: 'anonymize'
        }
      });
    }
    
    // 3. Speicherung mit Aufbewahrungsfristen
    const storedData = await this.storeWithRetention({
      data: inspectionData,
      retention: {
        measurementData: '10_years', // Produkthaftung
        inspectorData: '30_days',    // Anonymisiert
        customerData: 'warranty_period_plus_1_year',
        calibrationData: '5_years'
      }
    });
    
    // 4. Audit Trail für Compliance
    await this.logQualityDataProcessing({
      action: 'quality_inspection_recorded',
      dataTypes: classification.dataTypes,
      anonymizationApplied: classification.hasPersonalData,
      retentionPeriods: storedData.retention,
      legalBasis: 'product_liability_compliance'
    });
    
    return {
      success: true,
      recordId: storedData.id,
      privacyCompliant: true
    };
  }

  async generateQualityReport(criteria) {
    // Aggregierte Berichte ohne Personenbezug
    const rawData = await this.fetchQualityData(criteria);
    
    return {
      overview: {
        totalInspections: rawData.length,
        defectRate: this.calculateDefectRate(rawData),
        trends: this.analyzeTrends(rawData)
      },
      // Keine individuellen Prüfer-Statistiken
      aggregatedMetrics: {
        byShift: this.aggregateByShift(rawData),
        byProductType: this.aggregateByProduct(rawData),
        byDefectType: this.aggregateByDefect(rawData)
      },
      // Anonymisierte Detaildaten
      details: rawData.map(record => ({
        timestamp: this.generalizeTimestamp(record.timestamp),
        result: record.result,
        measurements: record.measurements,
        // Keine Prüfer-Identifikation
        anonymousId: this.generateAnonymousId(record)
      }))
    };
  }
}` })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileSearch, { className: "w-5 h-5 text-purple-600" }),
          "Rückverfolgbarkeit & Compliance"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Traceability-Anforderungen" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Chargenrückverfolgung" }),
                /* @__PURE__ */ jsx("li", { children: "• Lieferantendokumentation" }),
                /* @__PURE__ */ jsx("li", { children: "• Prozessparameter-Historie" }),
                /* @__PURE__ */ jsx("li", { children: "• Änderungsmanagement" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Compliance-Dokumentation" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Konformitätserklärungen" }),
                /* @__PURE__ */ jsx("li", { children: "• Zertifikate & Prüfberichte" }),
                /* @__PURE__ */ jsx("li", { children: "• Audit-Protokolle" }),
                /* @__PURE__ */ jsx("li", { children: "• Schulungsnachweise" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Traceability System" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `# Rückverfolgbarkeits-Konfiguration
traceability:
  batch_tracking:
    enabled: true
    data_captured:
      - material_batch_numbers
      - supplier_certificates
      - production_parameters
      - quality_results
    privacy_measures:
      - operator_anonymization
      - timestamp_generalization
      - aggregated_reporting
  
  retention_policies:
    product_data:
      automotive: "15_years"
      medical: "10_years_plus_product_lifetime"
      consumer: "warranty_plus_2_years"
    
    personal_data:
      operator_logs: "30_days_then_anonymize"
      training_records: "employment_duration"
      access_logs: "1_year"
  
  data_access:
    internal_audit:
      - full_access_anonymized
      - personal_data_restricted
    
    customer_request:
      - product_specific_only
      - no_personal_data
      - aggregated_quality_metrics
    
    regulatory_inspection:
      - compliance_relevant_data
      - justified_personal_access
      - audit_trail_required` })
          ] })
        ] }) })
      ] })
    ] })
  ] });
  const renderSupplyChain = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Truck, { className: "w-8 h-8 text-orange-600" }),
        "Lieferkette & Datenaustausch"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Sicherer Datenaustausch mit Lieferanten und Kunden unter Einhaltung aller Datenschutzbestimmungen in der gesamten Lieferkette." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Package, { className: "w-5 h-5 text-blue-600" }),
          "Lieferantendatenmanagement"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-3", children: "Lieferantendaten-Kategorien" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Firmendaten & Kontaktinformationen" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Zertifikate & Qualifikationen" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-600" }),
                /* @__PURE__ */ jsx("span", { children: "Ansprechpartner & persönliche Daten" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-600" }),
                /* @__PURE__ */ jsx("span", { children: "Bewertungen & Leistungsdaten" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Supplier Data Exchange Protocol" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Sicherer Lieferantendatenaustausch
class SupplierDataExchange {
  constructor() {
    this.encryptionService = new E2EEncryption();
    this.dataValidator = new SupplierDataValidator();
    this.consentManager = new B2BConsentManager();
  }

  async exchangeProductionData(supplierId, dataPackage) {
    // 1. Überprüfe Datenaustausch-Vereinbarung
    const agreement = await this.consentManager
      .getDataSharingAgreement(supplierId);
    
    if (!agreement.isValid()) {
      throw new Error('No valid data sharing agreement');
    }
    
    // 2. Validiere und klassifiziere Daten
    const validation = await this.dataValidator.validate({
      data: dataPackage,
      allowedTypes: agreement.permittedDataTypes,
      privacyLevel: agreement.privacyLevel
    });
    
    // 3. Entferne nicht-autorisierte Daten
    const sanitizedData = this.sanitizeData(
      dataPackage,
      agreement.dataScope
    );
    
    // 4. Verschlüsselung für Übertragung
    const encryptedPackage = await this.encryptionService
      .encryptForRecipient(sanitizedData, supplierId);
    
    // 5. Audit Trail
    await this.logDataExchange({
      recipient: supplierId,
      dataTypes: validation.dataTypes,
      purpose: agreement.purpose,
      legalBasis: 'contractual_necessity',
      encryptionMethod: 'E2E_AES256',
      timestamp: new Date()
    });
    
    return {
      transmissionId: generateId(),
      encrypted: true,
      dataTypes: validation.dataTypes,
      expiresAt: agreement.dataRetentionEnd
    };
  }

  sanitizeData(data, allowedScope) {
    // Entferne personenbezogene Daten wenn nicht erlaubt
    if (!allowedScope.includes('personal_data')) {
      data = this.removePersonalIdentifiers(data);
    }
    
    // Entferne Geschäftsgeheimnisse wenn nicht erlaubt
    if (!allowedScope.includes('trade_secrets')) {
      data = this.removeConfidentialInfo(data);
    }
    
    return data;
  }
}` })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-5 h-5 text-purple-600" }),
          "EDI & Systemintegration"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "EDI-Datenschutz" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Sichere EDI-Verbindungen" }),
                /* @__PURE__ */ jsx("li", { children: "• Datenminimierung in Nachrichten" }),
                /* @__PURE__ */ jsx("li", { children: "• Verschlüsselte Übertragung" }),
                /* @__PURE__ */ jsx("li", { children: "• Protokollierung & Monitoring" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "API-Sicherheit" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• OAuth 2.0 Authentication" }),
                /* @__PURE__ */ jsx("li", { children: "• Rate Limiting & Quotas" }),
                /* @__PURE__ */ jsx("li", { children: "• Field-Level Encryption" }),
                /* @__PURE__ */ jsx("li", { children: "• API Gateway Security" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "EDI Privacy Configuration" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `# EDI Privacy & Security Setup
edi_configuration:
  communication:
    protocol: "AS2"
    encryption: "3DES"
    signing: "SHA-256"
    mdn_required: true
  
  data_handling:
    message_types:
      ORDERS:
        personal_data_fields:
          - "buyer_contact"
          - "delivery_contact"
        anonymization: "hash_personal_identifiers"
        retention: "order_completion_plus_1_year"
      
      INVOICES:
        personal_data_fields:
          - "contact_person"
          - "bank_details"
        encryption: "field_level_aes256"
        retention: "legal_requirement_10_years"
      
      DELIVERY_NOTES:
        personal_data_fields:
          - "driver_name"
          - "recipient_signature"
        handling: "minimal_retention_30_days"
  
  partner_agreements:
    data_processing_agreement: "required"
    privacy_addendum: "mandatory"
    audit_rights: "annual"
    breach_notification: "72_hours"
  
  monitoring:
    failed_transmissions: "alert_immediate"
    unauthorized_access: "block_and_alert"
    data_anomalies: "flag_for_review"
    retention_logs: "1_year"` })
          ] })
        ] }) })
      ] })
    ] })
  ] });
  const renderEmployeeData = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-teal-600" }),
        "Mitarbeiterdatenschutz in der Produktion"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Schützen Sie die Daten Ihrer Mitarbeiter in allen Produktionsprozessen und implementieren Sie transparente Datenschutzmaßnahmen." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Timer, { className: "w-5 h-5 text-blue-600" }),
          "Zeiterfassung & Schichtplanung"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg border border-blue-200", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-3", children: "Erfasste Mitarbeiterdaten" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Arbeitszeiten & Pausen" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Schichtzuteilungen" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-600" }),
                /* @__PURE__ */ jsx("span", { children: "Überstunden & Zuschläge" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-600" }),
                /* @__PURE__ */ jsx("span", { children: "Krankheits- & Urlaubsdaten" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Datenschutzkonforme Zeiterfassung" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Mitarbeiterdatenschutz in der Zeiterfassung
class PrivacyCompliantTimeTracking {
  constructor() {
    this.consentManager = new EmployeeConsentManager();
    this.dataMinimizer = new TimeDataMinimizer();
    this.accessController = new TimeDataAccessControl();
  }

  async recordTimeEntry(employeeId, timeData) {
    // 1. Überprüfe Mitarbeiter-Einwilligung
    const consent = await this.consentManager
      .getEmployeeConsent(employeeId, 'time_tracking');
    
    // 2. Datenminimierung
    const minimizedData = this.dataMinimizer.minimize({
      employeeId: employeeId,
      checkIn: timeData.checkIn,
      checkOut: timeData.checkOut,
      // Keine biometrischen Daten speichern
      biometricUsed: true, // Nur Flag, keine Rohdaten
      // Keine Standortdaten außer Werkszugang
      location: 'main_entrance'
    });
    
    // 3. Zweckbindung sicherstellen
    const purposes = ['payroll', 'legal_compliance'];
    
    // 4. Speicherung mit Zugriffskontrolle
    await this.storeTimeData({
      data: minimizedData,
      allowedPurposes: purposes,
      accessRoles: ['hr', 'payroll', 'direct_supervisor'],
      retention: {
        detailed: '3_months',
        aggregated: '3_years',
        payroll_relevant: '10_years'
      }
    });
    
    // 5. Transparenz für Mitarbeiter
    await this.notifyEmployee(employeeId, {
      dataRecorded: 'time_entry',
      purposes: purposes,
      accessRights: 'view_own_data_anytime',
      deletion: 'automatic_after_retention'
    });
  }

  async generateShiftReport(shiftId, requestor) {
    // Zugriffsberechtigung prüfen
    const authorized = await this.accessController
      .checkAuthorization(requestor, 'shift_reports');
    
    if (!authorized) {
      throw new Error('Unauthorized access to shift data');
    }
    
    // Aggregierte Daten ohne Personenbezug
    const shiftData = await this.getShiftData(shiftId);
    
    return {
      shiftSummary: {
        totalWorkers: shiftData.length,
        totalHours: this.sumHours(shiftData),
        efficiency: this.calculateEfficiency(shiftData)
      },
      // Keine individuellen Leistungsdaten
      anonymizedMetrics: {
        averageProductivity: this.avgProductivity(shiftData),
        qualityScore: this.avgQuality(shiftData)
      },
      // Audit Trail
      accessLog: await this.logDataAccess(requestor, 'shift_report')
    };
  }
}` })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(UserCheck, { className: "w-5 h-5 text-purple-600" }),
          "Leistungsdaten & Qualifikationen"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Leistungserfassung" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Produktivitätskennzahlen" }),
                /* @__PURE__ */ jsx("li", { children: "• Qualitätsmetriken" }),
                /* @__PURE__ */ jsx("li", { children: "• Fehlerquoten (anonymisiert)" }),
                /* @__PURE__ */ jsx("li", { children: "• Verbesserungsvorschläge" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Qualifikationsmanagement" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-purple-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Schulungsnachweise" }),
                /* @__PURE__ */ jsx("li", { children: "• Zertifikate & Berechtigungen" }),
                /* @__PURE__ */ jsx("li", { children: "• Kompetenzbewertungen" }),
                /* @__PURE__ */ jsx("li", { children: "• Weiterbildungsbedarf" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Performance Data Privacy" }),
            /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `# Leistungsdaten-Datenschutzrichtlinie
performance_data_policy:
  data_collection:
    allowed:
      - aggregated_team_metrics
      - anonymous_quality_scores
      - shift_level_productivity
      - machine_specific_output
    
    prohibited:
      - individual_piece_counting
      - continuous_monitoring
      - ranking_employees
      - public_performance_display
  
  processing_rules:
    anonymization:
      method: "k_anonymity"
      k_value: 5
      grouping: "by_shift_and_department"
    
    aggregation:
      minimum_group_size: 5
      time_window: "weekly"
      metrics: "average_only"
  
  access_control:
    employee:
      own_data: "full_access"
      team_data: "aggregated_only"
      comparison: "anonymous_percentiles"
    
    supervisor:
      team_data: "aggregated_metrics"
      individual_data: "exceptional_cases_only"
      purpose: "development_and_support"
    
    hr_department:
      access: "aggregated_reports"
      individual: "with_employee_consent"
      retention: "performance_review_cycle"
  
  employee_rights:
    information: "quarterly_transparency_report"
    objection: "opt_out_from_detailed_tracking"
    correction: "dispute_incorrect_data"
    deletion: "after_employment_ends"` })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-green-600" }),
        "Betriebsvereinbarung & Mitbestimmung"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Betriebsvereinbarung Datenschutz" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
            {
              topic: "Datenerfassung",
              content: "Transparente Regelung aller erfassten Mitarbeiterdaten",
              requirement: "Mitbestimmungspflichtig"
            },
            {
              topic: "Leistungskontrolle",
              content: "Klare Grenzen für Leistungsüberwachung",
              requirement: "Betriebsrat-Zustimmung"
            },
            {
              topic: "Datenzugriff",
              content: "Definierte Zugriffsrechte und Zweckbindung",
              requirement: "Schriftliche Vereinbarung"
            },
            {
              topic: "Löschfristen",
              content: "Verbindliche Aufbewahrungs- und Löschfristen",
              requirement: "DSGVO-konform"
            }
          ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-50 rounded-lg border border-green-200", children: [
            /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-800", children: item.topic }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 mt-1", children: item.content }),
            /* @__PURE__ */ jsxs("p", { className: "text-xs text-green-600 mt-1 font-medium", children: [
              "→ ",
              item.requirement
            ] })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Mitarbeiterschulung" }),
          /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-4 rounded-lg", children: /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Datenschutz-Schulungsprogramm
{
  "schulungsprogramm": {
    "neue_mitarbeiter": {
      "einführung": "Datenschutz-Grundlagen",
      "dauer": "2 Stunden",
      "inhalte": [
        "Umgang mit Kundendaten",
        "Produktionsdaten-Schutz",
        "Eigene Rechte als Mitarbeiter",
        "Meldewege bei Verstößen"
      ]
    },
    "produktionsmitarbeiter": {
      "fokus": "Praktischer Datenschutz",
      "themen": [
        "MDE-System Datenschutz",
        "Qualitätsdaten-Handling",
        "Besuchermanagement",
        "Mobile Geräte & Apps"
      ],
      "intervall": "jährlich"
    },
    "führungskräfte": {
      "spezialschulung": true,
      "themen": [
        "Mitarbeiterdaten-Verwaltung",
        "Leistungsbewertung & DSGVO",
        "Auskunftsrechte",
        "Datenschutz-Folgenabschätzung"
      ],
      "zertifizierung": "erforderlich"
    }
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
        "Datenschutz-Implementation für Produktionsbetriebe"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Schritt-für-Schritt Anleitung zur Implementierung eines umfassenden Datenschutzkonzepts in Ihrem Produktionsunternehmen." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: [
      {
        phase: "Phase 1",
        title: "Assessment & Analyse",
        duration: "2-3 Wochen",
        color: "blue",
        tasks: [
          "Bestandsaufnahme aller Datenflüsse",
          "Identifikation personenbezogener Daten",
          "Risikoanalyse Produktion",
          "Gap-Analyse DSGVO-Compliance"
        ]
      },
      {
        phase: "Phase 2",
        title: "Konzept & Design",
        duration: "3-4 Wochen",
        color: "green",
        tasks: [
          "Datenschutzkonzept erstellen",
          "Technische Maßnahmen planen",
          "Betriebsvereinbarung entwerfen",
          "Schulungskonzept entwickeln"
        ]
      },
      {
        phase: "Phase 3",
        title: "Umsetzung",
        duration: "4-6 Wochen",
        color: "orange",
        tasks: [
          "IT-Systeme anpassen",
          "Prozesse implementieren",
          "Mitarbeiter schulen",
          "Dokumentation erstellen"
        ]
      },
      {
        phase: "Phase 4",
        title: "Betrieb & Optimierung",
        duration: "Kontinuierlich",
        color: "purple",
        tasks: [
          "Monitoring & Audits",
          "Incident Management",
          "Kontinuierliche Verbesserung",
          "Compliance-Updates"
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
        "Technische Implementierung"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-yellow-700", children: "ERP-System Anpassungen" }),
            /* @__PURE__ */ jsx("div", { className: "bg-yellow-50 p-4 rounded-lg border border-yellow-200", children: /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `-- SQL: Datenschutz-Views für ERP
-- Anonymisierte Produktionsdaten
CREATE VIEW v_production_anonymous AS
SELECT 
  DATE_TRUNC('hour', timestamp) as time_slot,
  machine_id,
  product_type,
  COUNT(*) as quantity,
  AVG(cycle_time) as avg_cycle_time,
  -- Keine Operator-ID
  COUNT(DISTINCT 
    CASE WHEN operator_id IS NOT NULL 
    THEN 'operator' END
  ) as operator_count
FROM production_data
GROUP BY 1, 2, 3;

-- Mitarbeiterdaten mit Zugriffskontrolle
CREATE VIEW v_employee_restricted AS
SELECT 
  employee_id,
  department,
  -- Sensible Daten nur für HR
  CASE 
    WHEN current_user IN ('hr_user', 'payroll_user')
    THEN full_name 
    ELSE 'RESTRICTED' 
  END as name,
  CASE 
    WHEN current_user = 'hr_user'
    THEN salary_grade 
    ELSE NULL 
  END as salary_info
FROM employees;

-- Audit-Trigger für Datenzugriff
CREATE TRIGGER audit_sensitive_access
AFTER SELECT ON v_employee_restricted
FOR EACH STATEMENT
EXECUTE FUNCTION log_data_access();` }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-yellow-700", children: "MES-Integration" }),
            /* @__PURE__ */ jsx("div", { className: "bg-yellow-50 p-4 rounded-lg border border-yellow-200", children: /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `# MES Privacy Configuration
# /etc/mes/privacy-config.yaml

privacy_settings:
  operator_tracking:
    mode: "anonymous"
    session_based: true
    retain_identity: false
    
  quality_data:
    link_to_operator: false
    aggregate_level: "shift"
    
  performance_metrics:
    individual_tracking: false
    team_metrics: true
    minimum_group_size: 5
    
data_retention:
  real_time_data: "24_hours"
  aggregated_data: "1_year"
  quality_records: "product_lifetime"
  
api_security:
  authentication: "oauth2"
  encryption: "tls_1.3"
  rate_limiting:
    per_minute: 100
    per_hour: 1000
    
export_controls:
  customer_data:
    require_approval: true
    anonymize_operators: true
    audit_trail: true
    
  internal_reports:
    auto_anonymize: true
    watermark: "confidential"
    track_downloads: true` }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: "Implementierungs-Checkliste" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-800", children: "Technische Maßnahmen" }),
              [
                "Verschlüsselung aller Datenbanken",
                "Zugriffskontrolle implementiert",
                "Anonymisierung aktiviert",
                "Backup-Verschlüsselung",
                "Netzwerksegmentierung"
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, i))
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-800", children: "Organisatorische Maßnahmen" }),
              [
                "Datenschutzbeauftragter benannt",
                "Verfahrensverzeichnis erstellt",
                "Betriebsvereinbarung unterzeichnet",
                "Schulungen durchgeführt",
                "Notfallplan erstellt"
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(FileCheck, { className: "w-4 h-4 text-blue-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, i))
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-800", children: "Kontinuierliche Aufgaben" }),
              [
                "Monatliche Datenschutz-Audits",
                "Quartalweise Risikoanalyse",
                "Jährliche Mitarbeiterschulung",
                "Update der Dokumentation",
                "Lieferanten-Audits"
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(RefreshCw, { className: "w-4 h-4 text-purple-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, i))
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-950/30 text-gray-700 dark:text-gray-400 mb-6", children: [
            /* @__PURE__ */ jsx(Factory, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Datenschutz in der Produktion" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: [
            "Produktionsbranche Datenschutz",
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent block mt-2", children: "DSGVO-Compliance für Fertigungsbetriebe" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 mb-8", children: "Umfassender Leitfaden für datenschutzkonforme Produktionsprozesse. Von der Fertigungsdatenerfassung über Qualitätsmanagement bis zum Mitarbeiterdatenschutz." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-gray-600 to-blue-600 text-white hover:opacity-90 group", children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "mr-2 h-5 w-5" }),
              "Zurück zur Übersicht",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
            ] }) }),
            /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
              /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
              "Produktion Privacy Guide"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Card, { className: "mb-8", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "Produktion Datenschutz-Implementation" }),
            /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "95% Compliant" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-4", children: [
            { label: "Fertigung", progress: 94 },
            { label: "Qualität", progress: 96 },
            { label: "Lieferkette", progress: 92 },
            { label: "Mitarbeiter", progress: 98 },
            { label: "IT-Security", progress: 95 },
            { label: "Compliance", progress: 97 }
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
      /* @__PURE__ */ jsx("nav", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: navigationItems.map((item, index) => /* @__PURE__ */ jsxs(
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
                id: "datenschutz-produktion-ueberblick",
                children: "Datenschutz in der Produktion - Überblick"
              }
            ),
            renderOverview()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "produktionsdaten", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                id: "produktionsdaten-fertigungsinformationen",
                children: "Produktionsdaten & Fertigungsinformationen"
              }
            ),
            renderProductionData()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "qualitaet", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                id: "qualitaetssicherung-compliance",
                children: "Qualitätssicherung & Compliance"
              }
            ),
            renderQualityManagement()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "lieferkette", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                id: "lieferkette-datenaustausch",
                children: "Lieferkette & Datenaustausch"
              }
            ),
            renderSupplyChain()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "mitarbeiter", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                id: "mitarbeiterdatenschutz-produktion",
                children: "Mitarbeiterdatenschutz"
              }
            ),
            renderEmployeeData()
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
                id: "umsetzung-implementation",
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
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/industrie-40", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors", children: [
              /* @__PURE__ */ jsx(Factory, { className: "h-5 w-5 text-purple-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Industrie 4.0" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Smart Factory Datenschutz" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Krisenmanagement" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Data Breach Response" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/industries/manufacturing", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors", children: [
              /* @__PURE__ */ jsx(Wrench, { className: "h-5 w-5 text-green-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Manufacturing Solutions" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Unsere Produktlösungen" })
            ] }) })
          ] }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  ProduktionDatenschutzGuide as default
};
