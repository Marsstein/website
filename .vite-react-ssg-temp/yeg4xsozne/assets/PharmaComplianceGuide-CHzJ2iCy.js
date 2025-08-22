import { jsxs, jsx } from "react/jsx-runtime";
import React__default, { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Pill, CheckCircle2, ArrowRight, Download, Shield, FlaskConical, Microscope, Activity, BarChart3, Code, AlertTriangle, Globe, FileText, Lightbulb, ChevronDown, Zap, Target, Star, ShieldCheck, Clipboard, FileCheck, Clock, CheckSquare, Square, Award, ExternalLink } from "lucide-react";
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
const PharmaComplianceGuide = () => {
  React__default.useEffect(() => {
    document.title = "Pharma Compliance GxP Standards – DSGVO Leitfaden";
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement("meta");
    metaDescription.setAttribute("name", "description");
    metaDescription.setAttribute("content", "GxP-konforme Pharma Compliance für GMP, GDP & GCP. Praxisnahe Implementierung von ICH Guidelines & EMA/FDA Standards. Jetzt Pharma-Beratung anfragen!");
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    canonical.setAttribute("href", "https://www.dataprivacyframework.com/wissen/branchen/pharma-compliance");
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }
    return () => {
      document.title = "Data Privacy Framework";
    };
  }, []);
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [activeSection, setActiveSection] = useState("overview");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const navigationItems = [
    { id: "ueberblick", label: "Überblick", icon: Shield },
    { id: "gxp-compliance", label: "GxP Compliance", icon: FlaskConical },
    { id: "klinische-studien", label: "Klinische Studien", icon: Microscope },
    { id: "pharmakovigilanz", label: "Pharmakovigilanz", icon: Activity },
    { id: "serialisierung", label: "Serialisierung", icon: BarChart3 },
    { id: "praxis-implementation", label: "Praxis-Implementation", icon: Code }
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
  const complianceStats = [
    { label: "GMP Compliance", value: 98, color: "text-blue-600", trend: "+3%" },
    { label: "GDP Fulfillment", value: 96, color: "text-green-600", trend: "+5%" },
    { label: "GCP Standards", value: 94, color: "text-purple-600", trend: "+8%" },
    { label: "ICH Guidelines", value: 92, color: "text-orange-500", trend: "+6%" },
    { label: "EMA Compliance", value: 95, color: "text-red-500", trend: "+4%" },
    { label: "FDA Ready", value: 93, color: "text-cyan-600", trend: "+7%" }
  ];
  const gxpRequirements = [
    {
      title: "Good Manufacturing Practice (GMP)",
      description: "Umfassende Qualitätssicherung in der pharmazeutischen Produktion gemäß EU-GMP-Leitlinien und ICH Q7/Q10",
      examples: ["Validierte Herstellungsverfahren", "Saubere Produktionsräume", "Qualifiziertes Personal", "Kontinuierliche Überwachung"],
      risk: "Kritisch",
      fineExample: "Bis zu 5% des Jahresumsatzes + Produktionstopp",
      realWorldScenario: {
        title: "🏭 Praxis-Szenario: Pharmaproduktion mit IoT-Monitoring",
        context: "Ein Pharmaunternehmen implementiert IoT-basierte Echtzeit-Überwachung in seiner sterilen Produktionslinie für Injektionsarzneimittel.",
        challenge: "Wie kann das Unternehmen GMP-konforme Datenintegrität bei gleichzeitiger digitaler Transformation gewährleisten?",
        solution: {
          step1: {
            title: "📊 Validierte IoT-Infrastruktur",
            description: "Aufbau einer GMP-konformen digitalen Überwachungsinfrastruktur",
            modules: [
              {
                name: "Temperatur-Monitoring",
                purpose: "Kontinuierliche Überwachung kritischer Parameter",
                dataTypes: "Temperatur, Luftfeuchtigkeit, Druck",
                legal: "EU-GMP Annex 11 konform"
              },
              {
                name: "Partikelzählung",
                purpose: "Reinraumklassen-Überwachung",
                dataTypes: "Partikelgrößen, Konzentrationen",
                benefit: "Proaktive Qualitätskontrolle"
              },
              {
                name: "Personnell Tracking",
                purpose: "Nachverfolgung von Mitarbeiterbewegungen",
                dataTypes: "Zugriffszeiten, Verweildauer",
                incentive: "Compliance-Nachweis für Inspektionen"
              }
            ]
          },
          step2: {
            title: "🔐 Data Integrity Governance",
            description: "ALCOA+ konforme Datenerfassung und -speicherung",
            transparency: [
              "Attributable: Eindeutige Zuordnung aller Aktionen",
              "Legible: Lesbare und nachvollziehbare Daten",
              "Contemporaneous: Zeitgleiche Datenerfassung",
              "Original: Erhaltung der ursprünglichen Daten",
              "Accurate: Korrektheit aller Messungen",
              "Complete: Vollständigkeit der Dokumentation",
              "Consistent: Einheitliche Datenformate",
              "Enduring: Langzeitspeicherung und -verfügbarkeit",
              "Available: Verfügbarkeit für Inspektionen"
            ]
          },
          step3: {
            title: "⚡ Automated Compliance Reporting",
            description: "Automatisierte Berichterstattung für regulatorische Behörden",
            features: [
              "Real-time Deviation Alerts bei Grenzwertüberschreitungen",
              "Automatische Batch Records Generierung",
              "Audit Trail mit digitaler Signatur",
              "Electronic Batch Release mit QP-Freigabe"
            ]
          }
        },
        outcome: {
          productionBenefit: "30% Reduktion der Batch-Freigabezeit",
          complianceBenefit: "100% Data Integrity Score bei letzter Inspektion",
          operationalEfficiency: "25% weniger Papier-basierte Dokumentation"
        },
        keyLearnings: [
          "IoT-Integration erfordert umfassende CSV (Computer System Validation)",
          "Hybride Ansätze (digital + papierbasiert) in Übergangszeiten erfolgreich",
          "Frühzeitige Einbindung der QA-Abteilung reduziert spätere Validierungsaufwände",
          "Automatisierte Compliance führt zu höherer Datenqualität"
        ]
      }
    },
    {
      title: "Good Distribution Practice (GDP)",
      description: "Qualitätsstandards für die Verteilung von Arzneimitteln entlang der gesamten Lieferkette",
      examples: ["Temperaturkontrollierte Lagerung", "Serialisierungsnachweise", "Rückverfolgbarkeit", "Transportvalidierung"],
      risk: "Hoch",
      fineExample: "EMA Warning Letter + Distributionsverbot",
      realWorldScenario: {
        title: "🚛 Praxis-Szenario: Blockchain-basierte Lieferketten-Transparenz",
        context: "Ein Pharmagrossist implementiert eine blockchain-basierte Lösung zur lückenlosen Rückverfolgung von Arzneimitteln vom Hersteller bis zur Apotheke.",
        challenge: "Wie kann die GDP-konforme Dokumentation bei gleichzeitiger Effizienzsteigerung und Fälschungsschutz gewährleistet werden?",
        solution: {
          step1: {
            title: "⛓️ Distributed Ledger Implementation",
            description: "Aufbau einer privaten Blockchain für pharmazeutische Lieferketten",
            medicalWorld: {
              title: "Blockchain Layer (Vertrauensebene)",
              access: "Alle Lieferkettenpartner",
              purpose: "Unveränderliche Transaktionshistorie",
              data: ["Seriennummern", "Temperaturdaten", "Übergabezeitpunkte", "Qualitätszertifikate"]
            },
            administrativeWorld: {
              title: "API Layer (Integrationsebene)",
              access: "ERP- und WMS-Systeme",
              purpose: "Nahtlose Systemintegration",
              data: ["Bestandsdaten", "Liefertermine", "Qualitätsstatus"]
            }
          },
          step2: {
            title: "📱 Smart Contract Automation",
            description: "Automatisierte Compliance-Prüfungen durch intelligente Verträge",
            technicalImplementation: [
              {
                component: "Temperature Compliance Contract",
                security: "Automatische Warnung bei Temperaturabweichungen",
                access: "Alle berechtigten Lieferkettenpartner"
              },
              {
                component: "Authentication Smart Contract",
                security: "Automatische Prüfung der Serialisierungsdaten",
                access: "Nur verifizierte Handelspartner"
              },
              {
                component: "GDP Compliance Oracle",
                security: "Integration externer Compliance-Datenquellen",
                access: "Regulatorische Behörden für Inspektionen"
              }
            ]
          },
          step3: {
            title: "🔍 Transparency Dashboard",
            description: "Zentrale Übersicht über alle Lieferketten-Aktivitäten",
            medicalAssessment: {
              grossist: "Vollständige Rückverfolgbarkeit aller Arzneimittel mit Echtzeit-Temperaturmonitoring.",
              documentation: "Unveränderliche Blockchain-Records für alle Transaktionen"
            },
            hrCommunication: {
              apotheke: "Sofortige Verifizierung der Arzneimittel-Authentizität über QR-Code-Scan.",
              rationale: "Schutz vor Fälschungen und GDP-konforme Dokumentation"
            }
          }
        },
        outcome: {
          traceabilityBenefit: "Reduzierung der Rückverfolgungszeit von Tagen auf Sekunden",
          complianceBenefit: "Automatische GDP-Compliance-Berichterstattung",
          economicBenefit: "40% Reduktion der administrativen Aufwände"
        },
        keyLearnings: [
          "Blockchain erfordert Standardisierung zwischen allen Partnern",
          "Smart Contracts reduzieren manuellen Aufwand erheblich",
          "Transparenz schafft Vertrauen bei allen Stakeholdern",
          "Regulatorische Behörden begrüßen erhöhte Rückverfolgbarkeit"
        ]
      }
    },
    {
      title: "Good Clinical Practice (GCP)",
      description: "Internationale Standards für Design, Durchführung und Berichterstattung klinischer Prüfungen",
      examples: ["Informed Consent Management", "Source Data Verification", "Audit Trail Documentation", "Safety Reporting"],
      risk: "Kritisch",
      fineExample: "Studienabbruch + Behördliche Sanktionen",
      implementation: {
        requirements: [
          "ICH GCP E6(R2) Compliance",
          "EU Clinical Trial Regulation (CTR)",
          "CTMS (Clinical Trial Management System)",
          "eCRF (Electronic Case Report Forms)"
        ],
        template: `
// GCP-konforme Studienteilnehmer-Verwaltung
const clinicalTrialManagement = {
  studyId: generateStudyProtocolId(),
  regulatoryBasis: 'ICH GCP E6(R2)',
  consent: {
    type: 'informed_consent_electronic',
    verification: 'biometric_signature',
    withdrawal: 'immediate_data_anonymization',
    documentation: 'audit_trail_complete'
  },
  
  dataIntegrity: {
    sourceDataVerification: 'remote_monitoring_enabled',
    auditTrail: 'immutable_blockchain_records',
    dataLocks: 'progressive_database_freeze',
    signatureChain: 'electronic_signatures_validated'
  },
  
  safetyReporting: {
    adverseEvents: 'real_time_capture',
    seriousAE: 'immediate_notification',
    expeditedReporting: 'automated_regulatory_submission',
    periodicReports: 'ai_assisted_signal_detection'
  },
  
  qualityAssurance: {
    monitoring: 'risk_based_remote_monitoring',
    audits: 'predictive_quality_analytics',
    inspectionReadiness: 'continuous_compliance_scoring'
  }
};
        `
      }
    }
  ];
  const clinicalTrialCompliance = [
    {
      scenario: "Dezentrale Klinische Studien (DCT)",
      challenge: "Remote Patient Monitoring mit gleichzeitiger GCP-Compliance",
      solution: "Digitale Plattform für patientenzentrierte Studien",
      implementation: {
        modules: [
          "Electronic Patient Reported Outcomes (ePRO)",
          "Wearable Device Integration",
          "Virtual Site Monitoring",
          "Remote Consent Management"
        ],
        technical: `
// DCT Platform Architecture
const decentralizedClinicalTrial = {
  patientApp: {
    features: ['symptom_diary', 'medication_adherence', 'vitals_tracking'],
    compliance: 'FDA_21CFR11_validated',
    security: 'end_to_end_encryption',
    accessibility: 'WCAG_2.1_AA_compliant'
  },
  
  wearableIntegration: {
    devices: ['smartwatch', 'glucose_monitor', 'bp_cuff'],
    dataStandards: 'HL7_FHIR_R4',
    validation: 'clinical_grade_accuracy',
    privacy: 'on_device_processing'
  },
  
  virtualMonitoring: {
    scheduling: 'ai_optimized_visit_planning',
    documentation: 'automated_source_verification',
    communication: 'secure_video_consultation',
    oversight: 'real_time_data_quality_monitoring'
  }
};
        `
      }
    },
    {
      scenario: "Adaptive Clinical Trials",
      challenge: "Protokollanpassungen während laufender Studien",
      solution: "KI-gestützte adaptive Studiendesigns",
      implementation: {
        modules: [
          "Bayesian Statistical Modeling",
          "Real-time Efficacy Monitoring",
          "Automated Protocol Amendments",
          "Regulatory Communication Hub"
        ],
        technical: `
// Adaptive Trial Management
const adaptiveTrialSystem = {
  statisticalEngine: {
    methodology: 'bayesian_adaptive_design',
    interimAnalysis: 'automated_efficacy_boundaries',
    sampleSizeReestimation: 'conditional_power_analysis',
    dropout: 'missing_data_imputation'
  },
  
  protocolAdaptations: {
    doseOptimization: 'continual_reassessment_method',
    populationEnrichment: 'biomarker_driven_selection',
    endpointModification: 'regulatory_pre_approved_changes',
    studyTermination: 'futility_boundary_monitoring'
  },
  
  regulatoryInterface: {
    submissions: 'automated_amendment_preparation',
    communication: 'real_time_authority_updates',
    approval: 'expedited_review_pathways',
    transparency: 'public_trial_registry_sync'
  }
};
        `
      }
    }
  ];
  const pharmakovigilanceSystem = [
    {
      category: "Adverse Event Reporting",
      icon: AlertTriangle,
      measures: [
        "Automatisierte SAE-Erfassung aus EMR-Systemen",
        "KI-basierte Signal Detection aus Social Media",
        "Real-time Kausalitätsbewertung",
        "Globale Regulatory Submission Automation"
      ],
      pharmaSpecific: "ICH E2B(R3), EudraVigilance, FDA FAERS Integration",
      iso27001: "ICH E2E - Pharmacovigilance Planning",
      practicalImplementation: {
        title: "Intelligente Pharmakovigilanz-Pipeline",
        description: "End-to-end Automatisierung der Arzneimittelsicherheit",
        zones: [
          {
            name: "Signal Detection Layer",
            security: "Machine Learning Pipeline",
            access: "Strukturierte + unstrukturierte Daten",
            measures: "NLP für Freitext-Analyse medizinischer Berichte"
          },
          {
            name: "Case Processing Layer",
            security: "Automated Triage System",
            access: "Medizinische Fachkräfte + AI",
            measures: "Automatische Kausalitätsbewertung nach WHO-UMC"
          },
          {
            name: "Regulatory Submission Layer",
            security: "Gateway zu Behörden",
            access: "Qualified Person für PV",
            measures: "Automatische E2B(R3) Generierung"
          },
          {
            name: "Analytics Layer",
            security: "Business Intelligence",
            access: "Management Dashboard",
            measures: "Predictive Safety Analytics"
          }
        ]
      }
    },
    {
      category: "Risk Management",
      icon: ShieldCheck,
      measures: [
        "Risk Evaluation and Mitigation Strategies (REMS)",
        "Periodic Safety Update Reports (PSUR) Automation",
        "Benefit-Risk Assessment Kontinuum",
        "Post-Market Surveillance Integration"
      ],
      pharmaSpecific: "EMA PRAC Guidelines, FDA REMS Requirements",
      iso27001: "ICH E2E - Post-marketing Safety Studies",
      practicalImplementation: {
        title: "Proaktives Risikomanagement-Ökosystem",
        description: "Kontinuierliche Überwachung und Bewertung von Arzneimittelrisiken",
        roles: [
          {
            name: "🔬 Safety Scientists",
            permissions: "Vollzugriff auf Sicherheitsdaten",
            restrictions: "Nur für zugewiesene Produkte",
            security: "Two-factor Auth + Digital Signatures"
          },
          {
            name: "📊 Data Scientists",
            permissions: "Anonymisierte Daten für Analytics",
            restrictions: "Keine Patientenidentifikation",
            security: "Role-based Access + Audit Logging"
          },
          {
            name: "⚖️ Regulatory Affairs",
            permissions: "Submission Templates + Behördenkommunikation",
            restrictions: "Nur finale Berichte",
            security: "Qualified Electronic Signatures"
          },
          {
            name: "👩‍⚕️ Medical Directors",
            permissions: "Strategic Oversight + Benefit-Risk Decisions",
            restrictions: "Aggregierte Daten",
            security: "Executive Dashboard + Mobile Access"
          }
        ]
      }
    },
    {
      category: "Global Compliance",
      icon: Globe,
      measures: [
        "Multi-Region Regulatory Mapping",
        "Lokale Behördenanforderungen Integration",
        "Kulturelle Adaption von Safety Communications",
        "Harmonisierte Safety Database (GSDB)"
      ],
      pharmaSpecific: "FDA, EMA, PMDA, NMPA, Health Canada Requirements",
      iso27001: "ISO 27799 - Health informatics security",
      practicalImplementation: {
        title: "Globale Compliance-Orchestrierung",
        description: "Harmonisierung internationaler Pharmakovigilanz-Anforderungen",
        layers: [
          {
            name: "🌍 Regional Compliance Hub",
            protection: "Länderspezifische Anpassungen",
            benefit: "Lokale Compliance trotz globaler Effizienz",
            technology: "Rule Engine für regionale Variationen"
          },
          {
            name: "📡 API Gateway",
            protection: "Sichere Behördenkommunikation",
            benefit: "Direkte Integration mit Behördensystemen",
            technology: "REST APIs mit OAuth 2.0"
          },
          {
            name: "🏛️ Master Data Management",
            protection: "Einheitliche Produktdatenbank",
            benefit: "Konsistenz über alle Märkte",
            technology: "Blockchain für unveränderliche Product IDs"
          },
          {
            name: "📈 Analytics Engine",
            protection: "Cross-regional Signal Detection",
            benefit: "Früherkennung globaler Sicherheitssignale",
            technology: "Federated Learning zwischen Regionen"
          }
        ]
      }
    }
  ];
  const serializationRequirements = [
    {
      scenario: "EU FMD (Falsified Medicines Directive)",
      challenge: "Eindeutige Kennzeichnung und Rückverfolgbarkeit aller verschreibungspflichtigen Medikamente",
      solution: "End-to-End Serialisierung mit EMVS-Integration",
      implementation: {
        modules: [
          "Level 1: Primärverpackung Serialisierung",
          "Level 2: Sekundärverpackung Aggregation",
          "Level 3: Tertiärverpackung für Logistik",
          "Level 4: Paletten-Ebene für Supply Chain"
        ],
        technical: `
// FMD Compliance Architecture
const serializationSystem = {
  dataMatrix: {
    standard: 'GS1_DataMatrix_ECC200',
    content: {
      productCode: 'GTIN_14_digit',
      serialNumber: 'unique_alphanumeric_20_char',
      batchLot: 'manufacturer_batch_id',
      expiryDate: 'YYMMDD_format'
    },
    verification: 'ISO_IEC_15415_grading'
  },
  
  emvsIntegration: {
    uploadTiming: 'before_wholesale_distribution',
    dataFormat: 'EFPIA_EMVO_standard',
    verification: 'two_way_authentication',
    decommissioning: 'pharmacy_dispensing_event'
  },
  
  traceability: {
    aggregation: 'parent_child_relationships',
    commissioning: 'manufacturing_line_integration',
    trackAndTrace: 'supply_chain_visibility',
    authentication: 'consumer_verification_app'
  }
};
        `
      }
    },
    {
      scenario: "US DSCSA (Drug Supply Chain Security Act)",
      challenge: "Vollständige elektronische Rückverfolgbarkeit bis zum Verbraucher bis 2023",
      solution: "Blockchain-basierte Interoperable Exchange",
      implementation: {
        modules: [
          "EPCIS Event Capture",
          "ATP (Authorized Trading Partner) Verification",
          "VRS (Verification Router Service)",
          "Suspect Product Investigation"
        ],
        technical: `
// DSCSA Compliance Platform
const dscsaCompliance = {
  epcisEvents: {
    commissioning: 'manufacturing_completion',
    aggregation: 'packaging_hierarchy',
    shipping: 'trading_partner_transfer',
    receiving: 'custody_acknowledgment',
    dispensing: 'patient_delivery_final'
  },
  
  tradePartnerNetwork: {
    verification: 'FDA_registration_lookup',
    licensing: 'state_board_validation',
    reputation: 'blockchain_trust_score',
    compliance: 'automated_audit_trails'
  },
  
  productVerification: {
    trigger: 'suspect_product_identification',
    process: 'lot_level_investigation',
    resolution: 'quarantine_disposition',
    reporting: 'regulatory_notification'
  }
};
        `
      }
    }
  ];
  const riskScenarios = [
    {
      scenario: "GMP-Abweichung in kritischer Produktion",
      likelihood: "Mittel",
      impact: "Sehr Hoch",
      riskScore: 90,
      potentialFine: "5% Jahresumsatz + Produktionstopp",
      affectedProducts: "50+ Medikamente",
      mitigationMeasures: [
        "Kontinuierliche Prozessüberwachung mit IoT",
        "Predictive Quality Analytics",
        "Automatisierte Deviation Detection",
        "Real-time Quality Control Dashboard",
        "Supplier Quality Management Integration"
      ],
      complianceActions: [
        "Sofortige Behördenbenachrichtigung",
        "Root Cause Analysis innerhalb 48h",
        "Vorsorgeprüfung aller verwandten Chargen",
        "CAPA (Corrective Action Preventive Action)",
        "Externe Quality Audit Beauftragung"
      ]
    },
    {
      scenario: "Klinische Studie Protokollverletzung",
      likelihood: "Hoch",
      impact: "Hoch",
      riskScore: 85,
      potentialFine: "Studienabbruch + €2-10 Mio.",
      affectedPersons: "1.000+ Studienteilnehmer",
      mitigationMeasures: [
        "Elektronische Protokoll-Compliance-Checks",
        "Real-time Data Quality Monitoring",
        "Automated Informed Consent Tracking",
        "Remote Site Monitoring mit KI",
        "Predictive Protocol Deviation Analytics"
      ],
      complianceActions: [
        "Ethikkommission sofort informieren",
        "Regulatory Authority Notification",
        "Studienteilnehmer informieren",
        "Independent Data Monitoring Committee",
        "Protokoll-Amendment oder Studie beenden"
      ]
    },
    {
      scenario: "Pharmakovigilanz-Berichterstattungsfehler",
      likelihood: "Mittel",
      impact: "Hoch",
      riskScore: 80,
      potentialFine: "€1-5 Mio. + Marktrücknahme",
      affectedPersons: "10.000+ Patienten",
      mitigationMeasures: [
        "Automatisierte SAE-Detection aus EMRs",
        "KI-basierte Literature Mining",
        "Real-time Signal Detection",
        "Global Safety Database Integration",
        "Automated Regulatory Submission"
      ],
      complianceActions: [
        "Immediate Safety Review",
        "Expedited Regulatory Reporting",
        "Risk Communication zu Ärzten",
        "Produkt-Labeling Update",
        "Post-Market Safety Study initiation"
      ]
    }
  ];
  const implementationRoadmap = [
    {
      phase: "Regulatory Assessment",
      duration: "6-8 Wochen",
      color: "blue",
      tasks: [
        "GxP Gap-Analyse aller Systeme",
        "ICH Guidelines Compliance Review",
        "Regulatory Submission Strategy",
        "Quality Management System Audit",
        "Vendor Qualification Program"
      ],
      deliverables: ["Compliance Roadmap", "Risk Assessment Report", "Validation Master Plan"]
    },
    {
      phase: "System Implementation",
      duration: "12-16 Wochen",
      color: "green",
      tasks: [
        "LIMS/QMS System Deployment",
        "Clinical Trial Management System",
        "Pharmacovigilance Platform Setup",
        "Serialization Infrastructure",
        "Integration und Validation"
      ],
      deliverables: ["Validated Systems", "Integration Testing", "User Training"]
    },
    {
      phase: "Process Optimization",
      duration: "8-10 Wochen",
      color: "orange",
      tasks: [
        "Standard Operating Procedures",
        "Quality Assurance Processes",
        "Audit Trail Implementation",
        "Change Control Procedures",
        "Continuous Improvement Program"
      ],
      deliverables: ["SOP Library", "Quality Manual", "Training Records"]
    },
    {
      phase: "Regulatory Readiness",
      duration: "4-6 Wochen",
      color: "purple",
      tasks: [
        "Mock Regulatory Inspections",
        "Submission Document Preparation",
        "Global Compliance Validation",
        "Ongoing Monitoring Setup",
        "Regulatory Intelligence Integration"
      ],
      deliverables: ["Inspection Readiness", "Submission Files", "Monitoring Dashboard"]
    }
  ];
  const toggleChecklistItem = (itemId) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };
  const getCompletionPercentage = () => {
    const totalItems = 24;
    return Math.round(checkedItems.size / totalItems * 100);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative py-20 md:py-28", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: { y, opacity },
            className: "container px-4",
            children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -50 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.8 },
                  className: "space-y-6",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400", children: [
                      /* @__PURE__ */ jsx(Pill, { className: "h-4 w-4" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Pharma Compliance Excellence" })
                    ] }),
                    /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
                      "Pharma Compliance",
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2", children: "GxP Excellence Guide" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Meistern Sie die komplexesten regulatorischen Anforderungen der Pharmaindustrie. Von GMP über klinische Studien bis hin zur globalen Pharmakovigilanz." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "GMP, GDP, GCP konforme Implementierung" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "ICH Guidelines & EMA/FDA Compliance" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Serialisierung & Pharmakovigilanz Automation" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                      /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=pharma", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 group", children: [
                        /* @__PURE__ */ jsx(Pill, { className: "mr-2 h-5 w-5" }),
                        "Pharma Demo buchen",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                      ] }) }),
                      /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                        "GxP Compliance Checkliste"
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: 50 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className: "relative",
                  children: [
                    /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Pharma Compliance Center" }),
                        /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-700", children: [
                          getCompletionPercentage(),
                          "% Konform"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: complianceStats.slice(0, 6).map((stat, index) => /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          whileHover: { scale: 1.05 },
                          className: "p-3 bg-white dark:bg-gray-900 rounded-lg border text-center cursor-pointer",
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-600 dark:text-gray-400 mb-1", children: stat.label.split(" ")[0] }),
                            /* @__PURE__ */ jsxs("div", { className: cn("text-xl font-bold", stat.color), children: [
                              stat.value,
                              "%"
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600", children: stat.trend })
                          ]
                        },
                        index
                      )) }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: complianceStats.slice(0, 3).map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                          /* @__PURE__ */ jsx("span", { children: stat.label }),
                          /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                            stat.value,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx(Progress, { value: stat.value, className: "h-2" })
                      ] }, index)) })
                    ] }) }),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        animate: { y: [0, -10, 0] },
                        transition: { duration: 2, repeat: Infinity },
                        className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-blue-500",
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Pill, { className: "h-4 w-4 text-blue-500 animate-pulse" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "GxP Ready" })
                        ] })
                      }
                    )
                  ]
                }
              )
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: navigationItems.map((item, index) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            scrollToSection(item.id);
            setActiveSection(item.id);
          },
          className: cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
            activeSection === item.id ? "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800" : "hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-700 dark:hover:text-blue-400",
            "border",
            activeSection === item.id ? "border-blue-200 dark:border-blue-800" : "border-transparent hover:border-blue-200 dark:hover:border-blue-800"
          ),
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: cn(
              "h-4 w-4",
              activeSection === item.id && "text-blue-600 dark:text-blue-500"
            ) }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "text-sm font-medium",
              activeSection === item.id && "text-blue-700 dark:text-blue-400"
            ), children: item.label })
          ]
        },
        item.id
      )) }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
        /* @__PURE__ */ jsxs("section", { id: "ueberblick", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Pharma Compliance Überblick"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-blue-600" }),
                "GxP Standards - Good Practices"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: 'GxP umfasst alle "Good Practice" Standards in der Pharmaindustrie und stellt sicher, dass Produkte konsistent und kontrolliert hergestellt werden.' }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "GMP (Good Manufacturing Practice) für Produktion",
                  "GCP (Good Clinical Practice) für klinische Studien",
                  "GDP (Good Distribution Practice) für Vertrieb",
                  "GLP (Good Laboratory Practice) für Tests"
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-blue-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-800 dark:text-blue-400", children: "Regulatorische Relevanz" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 dark:text-blue-300", children: "Verstöße können zu Produktionsverboten, Marktrücknahmen und erheblichen Bußgeldern führen" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Microscope, { className: "h-6 w-6 text-purple-600" }),
                "ICH Guidelines & Global Harmonisierung"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Die International Council for Harmonisation (ICH) entwickelt global einheitliche Standards für Qualität, Sicherheit und Wirksamkeit von Arzneimitteln." }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "ICH Q-Series: Qualitätsstandards und analytische Verfahren",
                  "ICH E-Series: Efficacy Guidelines für klinische Studien",
                  "ICH S-Series: Safety Guidelines für präklinische Tests",
                  "ICH M-Series: Multidisziplinäre Guidelines"
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(Microscope, { className: "h-4 w-4 text-purple-600 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-purple-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-800 dark:text-purple-400", children: "Globale Anerkennung" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 dark:text-purple-300", children: "ICH-konforme Dossiers werden von EMA, FDA, PMDA und anderen Behörden akzeptiert" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "gxp-compliance", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "GxP Compliance Standards"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: gxpRequirements.map((requirement, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-blue-500", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-xl pr-4", children: requirement.title }),
                  /* @__PURE__ */ jsxs(
                    Badge,
                    {
                      variant: requirement.risk === "Kritisch" ? "destructive" : "secondary",
                      className: "flex-shrink-0",
                      children: [
                        requirement.risk,
                        " Risiko"
                      ]
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 leading-relaxed", children: requirement.description }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-blue-600" }),
                        "Anwendungsbeispiele"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: requirement.examples.map((example, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm", children: example })
                      ] }, i)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-600" }),
                        "Konsequenzen bei Verstößen"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-50 dark:bg-red-950/30 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 dark:text-red-300 font-medium", children: requirement.fineExample }) })
                    ] })
                  ] }),
                  requirement.realWorldScenario && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => setExpandedSection(expandedSection === `gxp-${index}` ? null : `gxp-${index}`),
                        className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                        children: [
                          /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4" }),
                          "Praxis-Szenario anzeigen",
                          /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                            "h-4 w-4 transition-transform",
                            expandedSection === `gxp-${index}` && "rotate-180"
                          ) })
                        ]
                      }
                    ),
                    expandedSection === `gxp-${index}` && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, height: 0 },
                        animate: { opacity: 1, height: "auto" },
                        className: "mt-4",
                        children: /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800", children: [
                          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-900 dark:text-blue-100 mb-2", children: requirement.realWorldScenario.title }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 dark:text-blue-300", children: requirement.realWorldScenario.context })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200", children: [
                            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
                              "Herausforderung"
                            ] }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700 dark:text-amber-300", children: requirement.realWorldScenario.challenge })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 dark:text-green-200 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
                              "Lösungsansatz"
                            ] }),
                            Object.values(requirement.realWorldScenario.solution).map((step, stepIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg border", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 dark:text-gray-100 mb-3", children: step.title }),
                              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: step.description }),
                              step.modules && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: step.modules.map((module, moduleIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                                /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-900 dark:text-blue-100 text-sm mb-1", children: module.name }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-700 dark:text-blue-300 mb-2", children: module.purpose }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: module.dataTypes }),
                                module.benefit && /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400 mt-1 font-medium", children: [
                                  "✓ ",
                                  module.benefit
                                ] })
                              ] }, moduleIndex)) }),
                              step.transparency && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: step.transparency.map((item, itemIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { children: item })
                              ] }, itemIndex)) }),
                              step.features && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3 text-purple-600 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { children: feature })
                              ] }, featureIndex)) })
                            ] }, stepIndex))
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200", children: [
                            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(Target, { className: "h-4 w-4" }),
                              "Ergebnis & Learnings"
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: Object.entries(requirement.realWorldScenario.outcome).map(([key, value]) => /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                              /* @__PURE__ */ jsxs("span", { className: "font-medium capitalize", children: [
                                key.replace(/([A-Z])/g, " $1").trim(),
                                ":"
                              ] }),
                              /* @__PURE__ */ jsx("br", {}),
                              /* @__PURE__ */ jsx("span", { className: "text-green-700 dark:text-green-300", children: value })
                            ] }, key)) }),
                            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-800 dark:text-green-200", children: "Key Learnings:" }),
                              requirement.realWorldScenario.keyLearnings.map((learning, learningIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 text-yellow-500 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { className: "text-green-700 dark:text-green-300", children: learning })
                              ] }, learningIndex))
                            ] })
                          ] })
                        ] })
                      }
                    )
                  ] }),
                  requirement.implementation && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => setExpandedSection(expandedSection === `implementation-${index}` ? null : `implementation-${index}`),
                        className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                        children: [
                          /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                          "Technische Implementation",
                          /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                            "h-4 w-4 transition-transform",
                            expandedSection === `implementation-${index}` && "rotate-180"
                          ) })
                        ]
                      }
                    ),
                    expandedSection === `implementation-${index}` && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, height: 0 },
                        animate: { opacity: 1, height: "auto" },
                        className: "mt-4",
                        children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-medium mb-3", children: "Anforderungen:" }),
                            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: requirement.implementation.requirements.map((req, reqIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded", children: [
                              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-blue-600 mt-1 flex-shrink-0" }),
                              /* @__PURE__ */ jsx("span", { children: req })
                            ] }, reqIndex)) })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: requirement.implementation.template }) })
                        ] })
                      }
                    )
                  ] })
                ] })
              ] })
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "klinische-studien", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Klinische Studien & GCP Compliance"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: clinicalTrialCompliance.map((trial, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Microscope, { className: "h-6 w-6 text-purple-600" }),
              trial.scenario
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-red-700", children: "Herausforderung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: trial.challenge })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-700", children: "Lösung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: trial.solution })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-blue-700", children: "Module" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: trial.implementation.modules.map((module, i) => /* @__PURE__ */ jsx("div", { className: "text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded", children: module }, i)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setExpandedSection(expandedSection === `trial-${index}` ? null : `trial-${index}`),
                    className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                    children: [
                      /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                      "Technische Implementation",
                      /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "h-4 w-4 transition-transform",
                        expandedSection === `trial-${index}` && "rotate-180"
                      ) })
                    ]
                  }
                ),
                expandedSection === `trial-${index}` && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    className: "mt-4",
                    children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: trial.implementation.technical }) })
                  }
                )
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "pharmakovigilanz", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Pharmakovigilanz & Safety Monitoring"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: pharmakovigilanceSystem.map((pv, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(pv.icon, { className: "h-6 w-6 text-orange-600" }),
              pv.category
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Technische Maßnahmen" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: pv.measures.map((measure, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: measure })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Pharma-spezifisch" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg", children: pv.pharmaSpecific }),
                /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: pv.iso27001 }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Praktische Umsetzung" }),
                /* @__PURE__ */ jsx("div", { className: "bg-orange-50 dark:bg-orange-950/30 rounded-lg p-4 border border-orange-200", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-orange-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium text-orange-800 dark:text-orange-200", children: pv.practicalImplementation.title })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-orange-700 dark:text-orange-300 mb-3", children: pv.practicalImplementation.description }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-3", children: [
                    pv.practicalImplementation.zones && pv.practicalImplementation.zones.map((zone, zoneIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 rounded border", children: [
                      /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: zone.name }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-orange-600 dark:text-orange-400 mb-1", children: zone.security }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                        /* @__PURE__ */ jsx("strong", { children: "Zugang:" }),
                        " ",
                        zone.access
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: zone.measures })
                    ] }, zoneIndex)),
                    pv.practicalImplementation.roles && pv.practicalImplementation.roles.map((role, roleIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 rounded border", children: [
                      /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: role.name }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-orange-600 dark:text-orange-400 mb-1", children: role.permissions }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                        /* @__PURE__ */ jsx("strong", { children: "Einschränkungen:" }),
                        " ",
                        role.restrictions
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: role.security })
                    ] }, roleIndex)),
                    pv.practicalImplementation.layers && pv.practicalImplementation.layers.map((layer, layerIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 rounded border", children: [
                      /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: layer.name }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-orange-600 dark:text-orange-400 mb-1", children: layer.protection }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                        /* @__PURE__ */ jsx("strong", { children: "Nutzen:" }),
                        " ",
                        layer.benefit
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: layer.technology })
                    ] }, layerIndex))
                  ] })
                ] }) })
              ] })
            ] }) })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "serialisierung", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Serialisierung & Track & Trace"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: serializationRequirements.map((serialization, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-cyan-600" }),
              serialization.scenario
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-red-700", children: "Herausforderung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: serialization.challenge })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-700", children: "Lösung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: serialization.solution })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-blue-700", children: "Module" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: serialization.implementation.modules.map((module, i) => /* @__PURE__ */ jsx("div", { className: "text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded", children: module }, i)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setExpandedSection(expandedSection === `serialization-${index}` ? null : `serialization-${index}`),
                    className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                    children: [
                      /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                      "Technische Implementation",
                      /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "h-4 w-4 transition-transform",
                        expandedSection === `serialization-${index}` && "rotate-180"
                      ) })
                    ]
                  }
                ),
                expandedSection === `serialization-${index}` && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    className: "mt-4",
                    children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: serialization.implementation.technical }) })
                  }
                )
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { className: "space-y-8", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Pharma-spezifische Risikoanalyse"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: riskScenarios.map((risk, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-600" }),
                risk.scenario
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(Badge, { variant: "destructive", children: [
                "Risiko-Score: ",
                risk.riskScore,
                "/100"
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-orange-700 dark:text-orange-400 mb-1", children: "Wahrscheinlichkeit" }),
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-orange-800 dark:text-orange-300", children: risk.likelihood })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 dark:bg-red-950/30 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-red-700 dark:text-red-400 mb-1", children: "Auswirkung" }),
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-red-800 dark:text-red-300", children: risk.impact })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-purple-700 dark:text-purple-400 mb-1", children: "Strafen" }),
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-purple-800 dark:text-purple-300", children: risk.potentialFine })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700 dark:text-blue-400 mb-1", children: "Betroffene" }),
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-blue-800 dark:text-blue-300", children: risk.affectedProducts || risk.affectedPersons })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-green-600" }),
                    "Schutzmaßnahmen"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: risk.mitigationMeasures.map((measure, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: measure })
                  ] }, i)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Clipboard, { className: "h-4 w-4 text-blue-600" }),
                    "Compliance-Maßnahmen"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: risk.complianceActions.map((action, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded", children: [
                    /* @__PURE__ */ jsx(FileCheck, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: action })
                  ] }, i)) })
                ] })
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "praxis-implementation", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Praxis-Implementation & Roadmap"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: implementationRoadmap.map((phase, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxs("div", { className: cn(
                    "inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3",
                    phase.color === "blue" && "bg-blue-100 text-blue-800",
                    phase.color === "green" && "bg-green-100 text-green-800",
                    phase.color === "orange" && "bg-orange-100 text-orange-800",
                    phase.color === "purple" && "bg-purple-100 text-purple-800"
                  ), children: [
                    "Phase ",
                    index + 1
                  ] }),
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: phase.phase }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsx("span", { children: phase.duration })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Aufgaben" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.tasks.map((task, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: task })
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Deliverables" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-1", children: phase.deliverables.map((deliverable, i) => /* @__PURE__ */ jsx("div", { className: "text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded", children: deliverable }, i)) })
                  ] })
                ] })
              ] })
            },
            index
          )) }),
          /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckSquare, { className: "h-6 w-6 text-green-600" }),
                "Interaktive Pharma Compliance-Checkliste"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
                "Fortschritt: ",
                getCompletionPercentage(),
                "% abgeschlossen"
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: getCompletionPercentage(), className: "h-2" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", children: [
              {
                category: "GxP Grundlagen",
                items: [
                  "GMP-konforme Produktionssysteme etabliert",
                  "GCP-Compliance für klinische Studien",
                  "GDP-Standards für Distribution implementiert",
                  "GLP-konforme Laborsysteme validiert"
                ]
              },
              {
                category: "Regulatory Affairs",
                items: [
                  "ICH Guidelines Implementation abgeschlossen",
                  "EMA/FDA Submission Templates erstellt",
                  "Pharmakovigilanz-System operational",
                  "Serialisierung EU FMD/US DSCSA konform"
                ]
              },
              {
                category: "Quality Assurance",
                items: [
                  "Computer System Validation (CSV) durchgeführt",
                  "Data Integrity Controls implementiert",
                  "Risk-based Quality Management etabliert",
                  "Continuous Process Verification aktiv"
                ]
              }
            ].map((section, sectionIndex) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: section.category }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: section.items.map((item, itemIndex) => {
                const itemId = `${sectionIndex}-${itemIndex}`;
                const isChecked = checkedItems.has(itemId);
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                    onClick: () => toggleChecklistItem(itemId),
                    children: [
                      isChecked ? /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-green-600" }) : /* @__PURE__ */ jsx(Square, { className: "h-5 w-5 text-gray-400" }),
                      /* @__PURE__ */ jsx("span", { className: cn(
                        "text-sm",
                        isChecked && "line-through text-gray-500"
                      ), children: item })
                    ]
                  },
                  itemIndex
                );
              }) })
            ] }, sectionIndex)) })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white overflow-hidden relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/pattern.svg')] opacity-10" }),
            /* @__PURE__ */ jsx(CardContent, { className: "relative p-8 md:p-12 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { scale: 0 },
                  whileInView: { scale: 1 },
                  transition: { type: "spring", duration: 0.8 },
                  children: /* @__PURE__ */ jsx(Pill, { className: "h-16 w-16 mx-auto mb-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Starten Sie Ihre Pharma Compliance Journey" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 max-w-3xl mx-auto", children: "Profitieren Sie von unserer langjährigen Expertise in pharmazeutischer Compliance. Von GxP über ICH Guidelines bis hin zur globalen Regulatory Intelligence." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=pharma", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-blue-600 hover:bg-gray-100 group shadow-lg",
                    children: [
                      /* @__PURE__ */ jsx(Pill, { className: "mr-2 h-5 w-5" }),
                      "Kostenlose Pharma-Beratung",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "bg-transparent text-white border-white hover:bg-white/10",
                    children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "Umfassender GxP Guide (PDF)"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-8", children: [
                { icon: Pill, title: "Pharma-Expertise", subtitle: "Spezialisiert auf pharmazeutische Industrie" },
                { icon: Shield, title: "GxP + ICH Konform", subtitle: "Vollständige regulatory compliance" },
                { icon: Award, title: "Global Standards", subtitle: "EMA, FDA, PMDA ready" }
              ].map((item, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "bg-white/20 p-3 rounded-lg", children: /* @__PURE__ */ jsx(item.icon, { className: "h-6 w-6" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                      /* @__PURE__ */ jsx("div", { className: "font-semibold", children: item.title }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-white/80", children: item.subtitle })
                    ] })
                  ]
                },
                index
              )) })
            ] }) })
          ] })
        }
      ) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-5 w-5 text-blue-600" }),
          "Weiterführende Pharma-Ressourcen"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/wissen/rechtsprechung/ich-guidelines", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Microscope, { className: "h-5 w-5 text-blue-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "ICH Guidelines" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Q, E, S & M Series Compliance" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/compliance/gxp-validation", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(FlaskConical, { className: "h-5 w-5 text-green-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "GxP Validation" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Computer System Validation" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement/drug-recall", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Drug Recall Management" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Notfall-Produktrückruf" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/branchen/pharma", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Pill, { className: "h-5 w-5 text-purple-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Pharma Solutions" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Unsere Produktlösungen" })
          ] }) })
        ] }) })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  PharmaComplianceGuide as default
};
