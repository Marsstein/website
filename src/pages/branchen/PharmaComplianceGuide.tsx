import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Pill,
  Shield, 
  FileText, 
  Users,
  Building2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Euro,
  Calendar,
  Activity,
  Microscope,
  Brain,
  Lock,
  Database,
  Eye,
  UserCheck,
  Clipboard,
  FileCheck,
  Zap,
  Settings,
  Globe,
  TrendingUp,
  Clock,
  Star,
  Target,
  Lightbulb,
  Smartphone,
  Wifi,
  Server,
  Code,
  Award,
  Scale,
  Fingerprint,
  Key,
  Monitor,
  Tablet,
  Headphones,
  Mail,
  Phone,
  Thermometer,
  Syringe,
  Pulse,
  X,
  ChevronDown,
  ExternalLink,
  Gavel,
  AlertCircle,
  Timer,
  BarChart3,
  PieChart,
  LineChart,
  Layers,
  Network,
  ShieldCheck,
  FileX,
  UserX,
  Ban,
  CheckSquare,
  Square,
  Beaker,
  FlaskConical,
  TestTube,
  FileSpreadsheet,
  Search,
  Crosshair,
  Factory
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const PharmaComplianceGuide = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>('overview');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Navigation items for sticky navigation
  const navigationItems = [
    { id: 'ueberblick', label: 'Überblick', icon: Shield },
    { id: 'gxp-compliance', label: 'GxP Compliance', icon: FlaskConical },
    { id: 'klinische-studien', label: 'Klinische Studien', icon: Microscope },
    { id: 'pharmakovigilanz', label: 'Pharmakovigilanz', icon: Activity },
    { id: 'serialisierung', label: 'Serialisierung', icon: BarChart3 },
    { id: 'praxis-implementation', label: 'Praxis-Implementation', icon: Code }
  ];
  
  const scrollToSection = (sectionId: string) => {
    // Update URL with hash
    window.history.pushState(null, '', `#${sectionId}`);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Offset for sticky navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle initial load with hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);
  
  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      
      const scrollPosition = window.scrollY + 150; // Offset for sticky nav
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const complianceStats = [
    { label: 'GMP Compliance', value: 98, color: 'text-blue-600', trend: '+3%' },
    { label: 'GDP Fulfillment', value: 96, color: 'text-green-600', trend: '+5%' },
    { label: 'GCP Standards', value: 94, color: 'text-purple-600', trend: '+8%' },
    { label: 'ICH Guidelines', value: 92, color: 'text-orange-500', trend: '+6%' },
    { label: 'EMA Compliance', value: 95, color: 'text-red-500', trend: '+4%' },
    { label: 'FDA Ready', value: 93, color: 'text-cyan-600', trend: '+7%' }
  ];

  const gxpRequirements = [
    {
      title: 'Good Manufacturing Practice (GMP)',
      description: 'Umfassende Qualitätssicherung in der pharmazeutischen Produktion gemäß EU-GMP-Leitlinien und ICH Q7/Q10',
      examples: ['Validierte Herstellungsverfahren', 'Saubere Produktionsräume', 'Qualifiziertes Personal', 'Kontinuierliche Überwachung'],
      risk: 'Kritisch',
      fineExample: 'Bis zu 5% des Jahresumsatzes + Produktionstopp',
      realWorldScenario: {
        title: '🏭 Praxis-Szenario: Pharmaproduktion mit IoT-Monitoring',
        context: 'Ein Pharmaunternehmen implementiert IoT-basierte Echtzeit-Überwachung in seiner sterilen Produktionslinie für Injektionsarzneimittel.',
        challenge: 'Wie kann das Unternehmen GMP-konforme Datenintegrität bei gleichzeitiger digitaler Transformation gewährleisten?',
        solution: {
          step1: {
            title: '📊 Validierte IoT-Infrastruktur',
            description: 'Aufbau einer GMP-konformen digitalen Überwachungsinfrastruktur',
            modules: [
              {
                name: 'Temperatur-Monitoring',
                purpose: 'Kontinuierliche Überwachung kritischer Parameter',
                dataTypes: 'Temperatur, Luftfeuchtigkeit, Druck',
                legal: 'EU-GMP Annex 11 konform'
              },
              {
                name: 'Partikelzählung',
                purpose: 'Reinraumklassen-Überwachung',
                dataTypes: 'Partikelgrößen, Konzentrationen',
                benefit: 'Proaktive Qualitätskontrolle'
              },
              {
                name: 'Personnell Tracking',
                purpose: 'Nachverfolgung von Mitarbeiterbewegungen',
                dataTypes: 'Zugriffszeiten, Verweildauer',
                incentive: 'Compliance-Nachweis für Inspektionen'
              }
            ]
          },
          step2: {
            title: '🔐 Data Integrity Governance',
            description: 'ALCOA+ konforme Datenerfassung und -speicherung',
            transparency: [
              'Attributable: Eindeutige Zuordnung aller Aktionen',
              'Legible: Lesbare und nachvollziehbare Daten',
              'Contemporaneous: Zeitgleiche Datenerfassung',
              'Original: Erhaltung der ursprünglichen Daten',
              'Accurate: Korrektheit aller Messungen',
              'Complete: Vollständigkeit der Dokumentation',
              'Consistent: Einheitliche Datenformate',
              'Enduring: Langzeitspeicherung und -verfügbarkeit',
              'Available: Verfügbarkeit für Inspektionen'
            ]
          },
          step3: {
            title: '⚡ Automated Compliance Reporting',
            description: 'Automatisierte Berichterstattung für regulatorische Behörden',
            features: [
              'Real-time Deviation Alerts bei Grenzwertüberschreitungen',
              'Automatische Batch Records Generierung',
              'Audit Trail mit digitaler Signatur',
              'Electronic Batch Release mit QP-Freigabe'
            ]
          }
        },
        outcome: {
          productionBenefit: '30% Reduktion der Batch-Freigabezeit',
          complianceBenefit: '100% Data Integrity Score bei letzter Inspektion',
          operationalEfficiency: '25% weniger Papier-basierte Dokumentation'
        },
        keyLearnings: [
          'IoT-Integration erfordert umfassende CSV (Computer System Validation)',
          'Hybride Ansätze (digital + papierbasiert) in Übergangszeiten erfolgreich',
          'Frühzeitige Einbindung der QA-Abteilung reduziert spätere Validierungsaufwände',
          'Automatisierte Compliance führt zu höherer Datenqualität'
        ]
      }
    },
    {
      title: 'Good Distribution Practice (GDP)',
      description: 'Qualitätsstandards für die Verteilung von Arzneimitteln entlang der gesamten Lieferkette',
      examples: ['Temperaturkontrollierte Lagerung', 'Serialisierungsnachweise', 'Rückverfolgbarkeit', 'Transportvalidierung'],
      risk: 'Hoch',
      fineExample: 'EMA Warning Letter + Distributionsverbot',
      realWorldScenario: {
        title: '🚛 Praxis-Szenario: Blockchain-basierte Lieferketten-Transparenz',
        context: 'Ein Pharmagrossist implementiert eine blockchain-basierte Lösung zur lückenlosen Rückverfolgung von Arzneimitteln vom Hersteller bis zur Apotheke.',
        challenge: 'Wie kann die GDP-konforme Dokumentation bei gleichzeitiger Effizienzsteigerung und Fälschungsschutz gewährleistet werden?',
        solution: {
          step1: {
            title: '⛓️ Distributed Ledger Implementation',
            description: 'Aufbau einer privaten Blockchain für pharmazeutische Lieferketten',
            medicalWorld: {
              title: 'Blockchain Layer (Vertrauensebene)',
              access: 'Alle Lieferkettenpartner',
              purpose: 'Unveränderliche Transaktionshistorie',
              data: ['Seriennummern', 'Temperaturdaten', 'Übergabezeitpunkte', 'Qualitätszertifikate']
            },
            administrativeWorld: {
              title: 'API Layer (Integrationsebene)',
              access: 'ERP- und WMS-Systeme',
              purpose: 'Nahtlose Systemintegration',
              data: ['Bestandsdaten', 'Liefertermine', 'Qualitätsstatus']
            }
          },
          step2: {
            title: '📱 Smart Contract Automation',
            description: 'Automatisierte Compliance-Prüfungen durch intelligente Verträge',
            technicalImplementation: [
              {
                component: 'Temperature Compliance Contract',
                security: 'Automatische Warnung bei Temperaturabweichungen',
                access: 'Alle berechtigten Lieferkettenpartner'
              },
              {
                component: 'Authentication Smart Contract',
                security: 'Automatische Prüfung der Serialisierungsdaten',
                access: 'Nur verifizierte Handelspartner'
              },
              {
                component: 'GDP Compliance Oracle',
                security: 'Integration externer Compliance-Datenquellen',
                access: 'Regulatorische Behörden für Inspektionen'
              }
            ]
          },
          step3: {
            title: '🔍 Transparency Dashboard',
            description: 'Zentrale Übersicht über alle Lieferketten-Aktivitäten',
            medicalAssessment: {
              grossist: 'Vollständige Rückverfolgbarkeit aller Arzneimittel mit Echtzeit-Temperaturmonitoring.',
              documentation: 'Unveränderliche Blockchain-Records für alle Transaktionen'
            },
            hrCommunication: {
              apotheke: 'Sofortige Verifizierung der Arzneimittel-Authentizität über QR-Code-Scan.',
              rationale: 'Schutz vor Fälschungen und GDP-konforme Dokumentation'
            }
          }
        },
        outcome: {
          traceabilityBenefit: 'Reduzierung der Rückverfolgungszeit von Tagen auf Sekunden',
          complianceBenefit: 'Automatische GDP-Compliance-Berichterstattung',
          economicBenefit: '40% Reduktion der administrativen Aufwände'
        },
        keyLearnings: [
          'Blockchain erfordert Standardisierung zwischen allen Partnern',
          'Smart Contracts reduzieren manuellen Aufwand erheblich',
          'Transparenz schafft Vertrauen bei allen Stakeholdern',
          'Regulatorische Behörden begrüßen erhöhte Rückverfolgbarkeit'
        ]
      }
    },
    {
      title: 'Good Clinical Practice (GCP)',
      description: 'Internationale Standards für Design, Durchführung und Berichterstattung klinischer Prüfungen',
      examples: ['Informed Consent Management', 'Source Data Verification', 'Audit Trail Documentation', 'Safety Reporting'],
      risk: 'Kritisch',
      fineExample: 'Studienabbruch + Behördliche Sanktionen',
      implementation: {
        requirements: [
          'ICH GCP E6(R2) Compliance',
          'EU Clinical Trial Regulation (CTR)',
          'CTMS (Clinical Trial Management System)',
          'eCRF (Electronic Case Report Forms)'
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
      scenario: 'Dezentrale Klinische Studien (DCT)',
      challenge: 'Remote Patient Monitoring mit gleichzeitiger GCP-Compliance',
      solution: 'Digitale Plattform für patientenzentrierte Studien',
      implementation: {
        modules: [
          'Electronic Patient Reported Outcomes (ePRO)',
          'Wearable Device Integration',
          'Virtual Site Monitoring',
          'Remote Consent Management'
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
      scenario: 'Adaptive Clinical Trials',
      challenge: 'Protokollanpassungen während laufender Studien',
      solution: 'KI-gestützte adaptive Studiendesigns',
      implementation: {
        modules: [
          'Bayesian Statistical Modeling',
          'Real-time Efficacy Monitoring',
          'Automated Protocol Amendments',
          'Regulatory Communication Hub'
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
      category: 'Adverse Event Reporting',
      icon: AlertTriangle,
      measures: [
        'Automatisierte SAE-Erfassung aus EMR-Systemen',
        'KI-basierte Signal Detection aus Social Media',
        'Real-time Kausalitätsbewertung',
        'Globale Regulatory Submission Automation'
      ],
      pharmaSpecific: 'ICH E2B(R3), EudraVigilance, FDA FAERS Integration',
      iso27001: 'ICH E2E - Pharmacovigilance Planning',
      practicalImplementation: {
        title: 'Intelligente Pharmakovigilanz-Pipeline',
        description: 'End-to-end Automatisierung der Arzneimittelsicherheit',
        zones: [
          {
            name: 'Signal Detection Layer',
            security: 'Machine Learning Pipeline',
            access: 'Strukturierte + unstrukturierte Daten',
            measures: 'NLP für Freitext-Analyse medizinischer Berichte'
          },
          {
            name: 'Case Processing Layer',
            security: 'Automated Triage System',
            access: 'Medizinische Fachkräfte + AI',
            measures: 'Automatische Kausalitätsbewertung nach WHO-UMC'
          },
          {
            name: 'Regulatory Submission Layer',
            security: 'Gateway zu Behörden',
            access: 'Qualified Person für PV',
            measures: 'Automatische E2B(R3) Generierung'
          },
          {
            name: 'Analytics Layer',
            security: 'Business Intelligence',
            access: 'Management Dashboard',
            measures: 'Predictive Safety Analytics'
          }
        ]
      }
    },
    {
      category: 'Risk Management',
      icon: ShieldCheck,
      measures: [
        'Risk Evaluation and Mitigation Strategies (REMS)',
        'Periodic Safety Update Reports (PSUR) Automation',
        'Benefit-Risk Assessment Kontinuum',
        'Post-Market Surveillance Integration'
      ],
      pharmaSpecific: 'EMA PRAC Guidelines, FDA REMS Requirements',
      iso27001: 'ICH E2E - Post-marketing Safety Studies',
      practicalImplementation: {
        title: 'Proaktives Risikomanagement-Ökosystem',
        description: 'Kontinuierliche Überwachung und Bewertung von Arzneimittelrisiken',
        roles: [
          {
            name: '🔬 Safety Scientists',
            permissions: 'Vollzugriff auf Sicherheitsdaten',
            restrictions: 'Nur für zugewiesene Produkte',
            security: 'Two-factor Auth + Digital Signatures'
          },
          {
            name: '📊 Data Scientists',
            permissions: 'Anonymisierte Daten für Analytics',
            restrictions: 'Keine Patientenidentifikation',
            security: 'Role-based Access + Audit Logging'
          },
          {
            name: '⚖️ Regulatory Affairs',
            permissions: 'Submission Templates + Behördenkommunikation',
            restrictions: 'Nur finale Berichte',
            security: 'Qualified Electronic Signatures'
          },
          {
            name: '👩‍⚕️ Medical Directors',
            permissions: 'Strategic Oversight + Benefit-Risk Decisions',
            restrictions: 'Aggregierte Daten',
            security: 'Executive Dashboard + Mobile Access'
          }
        ]
      }
    },
    {
      category: 'Global Compliance',
      icon: Globe,
      measures: [
        'Multi-Region Regulatory Mapping',
        'Lokale Behördenanforderungen Integration',
        'Kulturelle Adaption von Safety Communications',
        'Harmonisierte Safety Database (GSDB)'
      ],
      pharmaSpecific: 'FDA, EMA, PMDA, NMPA, Health Canada Requirements',
      iso27001: 'ISO 27799 - Health informatics security',
      practicalImplementation: {
        title: 'Globale Compliance-Orchestrierung',
        description: 'Harmonisierung internationaler Pharmakovigilanz-Anforderungen',
        layers: [
          {
            name: '🌍 Regional Compliance Hub',
            protection: 'Länderspezifische Anpassungen',
            benefit: 'Lokale Compliance trotz globaler Effizienz',
            technology: 'Rule Engine für regionale Variationen'
          },
          {
            name: '📡 API Gateway',
            protection: 'Sichere Behördenkommunikation',
            benefit: 'Direkte Integration mit Behördensystemen',
            technology: 'REST APIs mit OAuth 2.0'
          },
          {
            name: '🏛️ Master Data Management',
            protection: 'Einheitliche Produktdatenbank',
            benefit: 'Konsistenz über alle Märkte',
            technology: 'Blockchain für unveränderliche Product IDs'
          },
          {
            name: '📈 Analytics Engine',
            protection: 'Cross-regional Signal Detection',
            benefit: 'Früherkennung globaler Sicherheitssignale',
            technology: 'Federated Learning zwischen Regionen'
          }
        ]
      }
    }
  ];

  const serializationRequirements = [
    {
      scenario: 'EU FMD (Falsified Medicines Directive)',
      challenge: 'Eindeutige Kennzeichnung und Rückverfolgbarkeit aller verschreibungspflichtigen Medikamente',
      solution: 'End-to-End Serialisierung mit EMVS-Integration',
      implementation: {
        modules: [
          'Level 1: Primärverpackung Serialisierung',
          'Level 2: Sekundärverpackung Aggregation',
          'Level 3: Tertiärverpackung für Logistik',
          'Level 4: Paletten-Ebene für Supply Chain'
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
      scenario: 'US DSCSA (Drug Supply Chain Security Act)',
      challenge: 'Vollständige elektronische Rückverfolgbarkeit bis zum Verbraucher bis 2023',
      solution: 'Blockchain-basierte Interoperable Exchange',
      implementation: {
        modules: [
          'EPCIS Event Capture',
          'ATP (Authorized Trading Partner) Verification',
          'VRS (Verification Router Service)',
          'Suspect Product Investigation'
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
      scenario: 'GMP-Abweichung in kritischer Produktion',
      likelihood: 'Mittel',
      impact: 'Sehr Hoch',
      riskScore: 90,
      potentialFine: '5% Jahresumsatz + Produktionstopp',
      affectedProducts: '50+ Medikamente',
      mitigationMeasures: [
        'Kontinuierliche Prozessüberwachung mit IoT',
        'Predictive Quality Analytics',
        'Automatisierte Deviation Detection',
        'Real-time Quality Control Dashboard',
        'Supplier Quality Management Integration'
      ],
      complianceActions: [
        'Sofortige Behördenbenachrichtigung',
        'Root Cause Analysis innerhalb 48h',
        'Vorsorgeprüfung aller verwandten Chargen',
        'CAPA (Corrective Action Preventive Action)',
        'Externe Quality Audit Beauftragung'
      ]
    },
    {
      scenario: 'Klinische Studie Protokollverletzung',
      likelihood: 'Hoch',
      impact: 'Hoch',
      riskScore: 85,
      potentialFine: 'Studienabbruch + €2-10 Mio.',
      affectedPersons: '1.000+ Studienteilnehmer',
      mitigationMeasures: [
        'Elektronische Protokoll-Compliance-Checks',
        'Real-time Data Quality Monitoring',
        'Automated Informed Consent Tracking',
        'Remote Site Monitoring mit KI',
        'Predictive Protocol Deviation Analytics'
      ],
      complianceActions: [
        'Ethikkommission sofort informieren',
        'Regulatory Authority Notification',
        'Studienteilnehmer informieren',
        'Independent Data Monitoring Committee',
        'Protokoll-Amendment oder Studie beenden'
      ]
    },
    {
      scenario: 'Pharmakovigilanz-Berichterstattungsfehler',
      likelihood: 'Mittel',
      impact: 'Hoch',
      riskScore: 80,
      potentialFine: '€1-5 Mio. + Marktrücknahme',
      affectedPersons: '10.000+ Patienten',
      mitigationMeasures: [
        'Automatisierte SAE-Detection aus EMRs',
        'KI-basierte Literature Mining',
        'Real-time Signal Detection',
        'Global Safety Database Integration',
        'Automated Regulatory Submission'
      ],
      complianceActions: [
        'Immediate Safety Review',
        'Expedited Regulatory Reporting',
        'Risk Communication zu Ärzten',
        'Produkt-Labeling Update',
        'Post-Market Safety Study initiation'
      ]
    }
  ];

  const implementationRoadmap = [
    {
      phase: 'Regulatory Assessment',
      duration: '6-8 Wochen',
      color: 'blue',
      tasks: [
        'GxP Gap-Analyse aller Systeme',
        'ICH Guidelines Compliance Review',
        'Regulatory Submission Strategy',
        'Quality Management System Audit',
        'Vendor Qualification Program'
      ],
      deliverables: ['Compliance Roadmap', 'Risk Assessment Report', 'Validation Master Plan']
    },
    {
      phase: 'System Implementation',
      duration: '12-16 Wochen',
      color: 'green',
      tasks: [
        'LIMS/QMS System Deployment',
        'Clinical Trial Management System',
        'Pharmacovigilance Platform Setup',
        'Serialization Infrastructure',
        'Integration und Validation'
      ],
      deliverables: ['Validated Systems', 'Integration Testing', 'User Training']
    },
    {
      phase: 'Process Optimization',
      duration: '8-10 Wochen',
      color: 'orange',
      tasks: [
        'Standard Operating Procedures',
        'Quality Assurance Processes',
        'Audit Trail Implementation',
        'Change Control Procedures',
        'Continuous Improvement Program'
      ],
      deliverables: ['SOP Library', 'Quality Manual', 'Training Records']
    },
    {
      phase: 'Regulatory Readiness',
      duration: '4-6 Wochen',
      color: 'purple',
      tasks: [
        'Mock Regulatory Inspections',
        'Submission Document Preparation',
        'Global Compliance Validation',
        'Ongoing Monitoring Setup',
        'Regulatory Intelligence Integration'
      ],
      deliverables: ['Inspection Readiness', 'Submission Files', 'Monitoring Dashboard']
    }
  ];

  const toggleChecklistItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const getCompletionPercentage = () => {
    const totalItems = 24; // Beispiel: Gesamtanzahl der Checklist-Items
    return Math.round((checkedItems.size / totalItems) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <motion.div 
            style={{ y, opacity }}
            className="container px-4"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400">
                    <Pill className="h-4 w-4" />
                    <span className="text-sm font-medium">Pharma Compliance Excellence</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Pharma Compliance
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                      GxP Excellence Guide
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Meistern Sie die komplexesten regulatorischen Anforderungen der Pharmaindustrie. 
                    Von GMP über klinische Studien bis hin zur globalen Pharmakovigilanz.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>GMP, GDP, GCP konforme Implementierung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>ICH Guidelines & EMA/FDA Compliance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Serialisierung & Pharmakovigilanz Automation</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=pharma">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 group">
                        <Pill className="mr-2 h-5 w-5" />
                        Pharma Demo buchen
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      GxP Compliance Checkliste
                    </Button>
                  </div>
                </motion.div>

                {/* Interactive Compliance Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Pharma Compliance Center</h3>
                        <Badge className="bg-green-100 text-green-700">
                          {getCompletionPercentage()}% Konform
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {complianceStats.slice(0, 6).map((stat, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="p-3 bg-white dark:bg-gray-900 rounded-lg border text-center cursor-pointer"
                          >
                            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                              {stat.label.split(' ')[0]}
                            </div>
                            <div className={cn("text-xl font-bold", stat.color)}>
                              {stat.value}%
                            </div>
                            <div className="text-xs text-green-600">
                              {stat.trend}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="space-y-3">
                        {complianceStats.slice(0, 3).map((stat, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>{stat.label}</span>
                              <span className="font-semibold">{stat.value}%</span>
                            </div>
                            <Progress value={stat.value} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-blue-500"
                  >
                    <div className="flex items-center gap-2">
                      <Pill className="h-4 w-4 text-blue-500 animate-pulse" />
                      <span className="text-sm font-medium">GxP Ready</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Sticky Navigation */}
        <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <nav className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setActiveSection(item.id);
                    }}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
                      activeSection === item.id
                        ? "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                        : "hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-700 dark:hover:text-blue-400",
                      "border",
                      activeSection === item.id
                        ? "border-blue-200 dark:border-blue-800"
                        : "border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                    )}
                  >
                    <item.icon className={cn(
                      "h-4 w-4",
                      activeSection === item.id && "text-blue-600 dark:text-blue-500"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      activeSection === item.id && "text-blue-700 dark:text-blue-400"
                    )}>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="py-20">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto space-y-20">

              {/* Overview Section */}
              <section id="ueberblick" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Pharma Compliance Überblick
                </motion.h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-6 w-6 text-blue-600" />
                          GxP Standards - Good Practices
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          GxP umfasst alle "Good Practice" Standards in der Pharmaindustrie und stellt 
                          sicher, dass Produkte konsistent und kontrolliert hergestellt werden.
                        </p>
                        
                        <div className="space-y-3">
                          {[
                            'GMP (Good Manufacturing Practice) für Produktion',
                            'GCP (Good Clinical Practice) für klinische Studien',
                            'GDP (Good Distribution Practice) für Vertrieb',
                            'GLP (Good Laboratory Practice) für Tests'
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="h-4 w-4 text-blue-600" />
                            <span className="font-semibold text-blue-800 dark:text-blue-400">
                              Regulatorische Relevanz
                            </span>
                          </div>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            Verstöße können zu Produktionsverboten, Marktrücknahmen und erheblichen Bußgeldern führen
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Microscope className="h-6 w-6 text-purple-600" />
                          ICH Guidelines & Global Harmonisierung
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Die International Council for Harmonisation (ICH) entwickelt global einheitliche 
                          Standards für Qualität, Sicherheit und Wirksamkeit von Arzneimitteln.
                        </p>
                        
                        <div className="space-y-3">
                          {[
                            'ICH Q-Series: Qualitätsstandards und analytische Verfahren',
                            'ICH E-Series: Efficacy Guidelines für klinische Studien', 
                            'ICH S-Series: Safety Guidelines für präklinische Tests',
                            'ICH M-Series: Multidisziplinäre Guidelines'
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Microscope className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Globe className="h-4 w-4 text-purple-600" />
                            <span className="font-semibold text-purple-800 dark:text-purple-400">
                              Globale Anerkennung
                            </span>
                          </div>
                          <p className="text-sm text-purple-700 dark:text-purple-300">
                            ICH-konforme Dossiers werden von EMA, FDA, PMDA und anderen Behörden akzeptiert
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* GxP Section */}
              <section id="gxp-compliance" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  GxP Compliance Standards
                </motion.h2>
                  <div className="space-y-8">
                    {gxpRequirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="border-l-4 border-blue-500">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-xl pr-4">{requirement.title}</CardTitle>
                              <Badge 
                                variant={requirement.risk === 'Kritisch' ? 'destructive' : 'secondary'}
                                className="flex-shrink-0"
                              >
                                {requirement.risk} Risiko
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {requirement.description}
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                  <FileText className="h-4 w-4 text-blue-600" />
                                  Anwendungsbeispiele
                                </h4>
                                <div className="space-y-2">
                                  {requirement.examples.map((example, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                      <CheckCircle2 className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                                      <span className="text-sm">{example}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                  <AlertTriangle className="h-4 w-4 text-red-600" />
                                  Konsequenzen bei Verstößen
                                </h4>
                                <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                                  <p className="text-sm text-red-700 dark:text-red-300 font-medium">
                                    {requirement.fineExample}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {requirement.realWorldScenario && (
                              <div className="space-y-6">
                                <button
                                  onClick={() => setExpandedSection(expandedSection === `gxp-${index}` ? null : `gxp-${index}`)}
                                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                                >
                                  <Lightbulb className="h-4 w-4" />
                                  Praxis-Szenario anzeigen
                                  <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                    expandedSection === `gxp-${index}` && "rotate-180")} />
                                </button>
                                
                                {expandedSection === `gxp-${index}` && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mt-4"
                                  >
                                    <div className="space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
                                      <div className="text-center">
                                        <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
                                          {requirement.realWorldScenario.title}
                                        </h3>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                          {requirement.realWorldScenario.context}
                                        </p>
                                      </div>
                                      
                                      <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200">
                                        <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2">
                                          <AlertTriangle className="h-4 w-4" />
                                          Herausforderung
                                        </h4>
                                        <p className="text-sm text-amber-700 dark:text-amber-300">
                                          {requirement.realWorldScenario.challenge}
                                        </p>
                                      </div>
                                      
                                      <div className="space-y-4">
                                        <h4 className="font-semibold text-green-800 dark:text-green-200 flex items-center gap-2">
                                          <CheckCircle2 className="h-4 w-4" />
                                          Lösungsansatz
                                        </h4>
                                        {Object.values(requirement.realWorldScenario.solution).map((step, stepIndex) => (
                                          <div key={stepIndex} className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                            <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                                              {step.title}
                                            </h5>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                              {step.description}
                                            </p>
                                            {step.modules && (
                                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {step.modules.map((module, moduleIndex) => (
                                                  <div key={moduleIndex} className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                                    <div className="font-medium text-blue-900 dark:text-blue-100 text-sm mb-1">
                                                      {module.name}
                                                    </div>
                                                    <div className="text-xs text-blue-700 dark:text-blue-300 mb-2">
                                                      {module.purpose}
                                                    </div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400">
                                                      {module.dataTypes}
                                                    </div>
                                                    {module.benefit && (
                                                      <div className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">
                                                        ✓ {module.benefit}
                                                      </div>
                                                    )}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.transparency && (
                                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {step.transparency.map((item, itemIndex) => (
                                                  <div key={itemIndex} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle2 className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                                                    <span>{item}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.features && (
                                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {step.features.map((feature, featureIndex) => (
                                                  <div key={featureIndex} className="flex items-start gap-2 text-sm">
                                                    <Zap className="h-3 w-3 text-purple-600 mt-1 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                      
                                      <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                                        <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                                          <Target className="h-4 w-4" />
                                          Ergebnis & Learnings
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                          {Object.entries(requirement.realWorldScenario.outcome).map(([key, value]) => (
                                            <div key={key} className="text-sm">
                                              <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                              <br />
                                              <span className="text-green-700 dark:text-green-300">{value}</span>
                                            </div>
                                          ))}
                                        </div>
                                        <div className="space-y-2">
                                          <h5 className="font-medium text-green-800 dark:text-green-200">Key Learnings:</h5>
                                          {requirement.realWorldScenario.keyLearnings.map((learning, learningIndex) => (
                                            <div key={learningIndex} className="flex items-start gap-2 text-sm">
                                              <Star className="h-3 w-3 text-yellow-500 mt-1 flex-shrink-0" />
                                              <span className="text-green-700 dark:text-green-300">{learning}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            )}

                            {requirement.implementation && (
                              <div className="space-y-6">
                                <button
                                  onClick={() => setExpandedSection(expandedSection === `implementation-${index}` ? null : `implementation-${index}`)}
                                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                                >
                                  <Code className="h-4 w-4" />
                                  Technische Implementation
                                  <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                    expandedSection === `implementation-${index}` && "rotate-180")} />
                                </button>
                                
                                {expandedSection === `implementation-${index}` && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mt-4"
                                  >
                                    <div className="space-y-4">
                                      <div>
                                        <h5 className="font-medium mb-3">Anforderungen:</h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                          {requirement.implementation.requirements.map((req, reqIndex) => (
                                            <div key={reqIndex} className="flex items-start gap-2 text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                                              <CheckCircle2 className="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" />
                                              <span>{req}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <pre className="text-green-400 text-xs">
                                          {requirement.implementation.template}
                                        </pre>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Clinical Trials Section */}
              <section id="klinische-studien" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Klinische Studien & GCP Compliance
                </motion.h2>
                  <div className="space-y-8">
                    {clinicalTrialCompliance.map((trial, index) => (
                      <Card key={index} className="p-6">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Microscope className="h-6 w-6 text-purple-600" />
                            {trial.scenario}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 text-red-700">Herausforderung</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {trial.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-green-700">Lösung</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {trial.solution}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-blue-700">Module</h4>
                              <div className="space-y-2">
                                {trial.implementation.modules.map((module, i) => (
                                  <div key={i} className="text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                                    {module}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <button
                              onClick={() => setExpandedSection(expandedSection === `trial-${index}` ? null : `trial-${index}`)}
                              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code className="h-4 w-4" />
                              Technische Implementation
                              <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                expandedSection === `trial-${index}` && "rotate-180")} />
                            </button>
                            
                            {expandedSection === `trial-${index}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4"
                              >
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre className="text-green-400 text-xs">
                                    {trial.implementation.technical}
                                  </pre>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Pharmacovigilance Section */}
              <section id="pharmakovigilanz" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Pharmakovigilanz & Safety Monitoring
                </motion.h2>
                  <div className="space-y-8">
                    {pharmakovigilanceSystem.map((pv, index) => (
                      <Card key={index} className="p-6">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <pv.icon className="h-6 w-6 text-orange-600" />
                            {pv.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Technische Maßnahmen</h4>
                              <div className="space-y-2">
                                {pv.measures.map((measure, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{measure}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Pharma-spezifisch</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg">
                                {pv.pharmaSpecific}
                              </p>
                              <div className="mt-3">
                                <Badge variant="outline" className="text-xs">
                                  {pv.iso27001}
                                </Badge>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Praktische Umsetzung</h4>
                              <div className="bg-orange-50 dark:bg-orange-950/30 rounded-lg p-4 border border-orange-200">
                                <div className="space-y-3">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Activity className="h-4 w-4 text-orange-600" />
                                    <span className="font-medium text-orange-800 dark:text-orange-200">{pv.practicalImplementation.title}</span>
                                  </div>
                                  <div className="text-sm text-orange-700 dark:text-orange-300 mb-3">
                                    {pv.practicalImplementation.description}
                                  </div>
                                  <div className="grid grid-cols-1 gap-3">
                                    {pv.practicalImplementation.zones && pv.practicalImplementation.zones.map((zone, zoneIndex) => (
                                      <div key={zoneIndex} className="p-3 bg-white dark:bg-gray-800 rounded border">
                                        <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                          {zone.name}
                                        </div>
                                        <div className="text-xs text-orange-600 dark:text-orange-400 mb-1">
                                          {zone.security}
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                          <strong>Zugang:</strong> {zone.access}
                                        </div>
                                        <div className="text-xs text-green-600 dark:text-green-400">
                                          {zone.measures}
                                        </div>
                                      </div>
                                    ))}
                                    {pv.practicalImplementation.roles && pv.practicalImplementation.roles.map((role, roleIndex) => (
                                      <div key={roleIndex} className="p-3 bg-white dark:bg-gray-800 rounded border">
                                        <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                          {role.name}
                                        </div>
                                        <div className="text-xs text-orange-600 dark:text-orange-400 mb-1">
                                          {role.permissions}
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                          <strong>Einschränkungen:</strong> {role.restrictions}
                                        </div>
                                        <div className="text-xs text-green-600 dark:text-green-400">
                                          {role.security}
                                        </div>
                                      </div>
                                    ))}
                                    {pv.practicalImplementation.layers && pv.practicalImplementation.layers.map((layer, layerIndex) => (
                                      <div key={layerIndex} className="p-3 bg-white dark:bg-gray-800 rounded border">
                                        <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                          {layer.name}
                                        </div>
                                        <div className="text-xs text-orange-600 dark:text-orange-400 mb-1">
                                          {layer.protection}
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                          <strong>Nutzen:</strong> {layer.benefit}
                                        </div>
                                        <div className="text-xs text-green-600 dark:text-green-400">
                                          {layer.technology}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Serialization Section */}
              <section id="serialisierung" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Serialisierung & Track & Trace
                </motion.h2>
                  <div className="space-y-8">
                    {serializationRequirements.map((serialization, index) => (
                      <Card key={index} className="p-6">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <BarChart3 className="h-6 w-6 text-cyan-600" />
                            {serialization.scenario}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 text-red-700">Herausforderung</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {serialization.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-green-700">Lösung</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {serialization.solution}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-blue-700">Module</h4>
                              <div className="space-y-2">
                                {serialization.implementation.modules.map((module, i) => (
                                  <div key={i} className="text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                                    {module}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <button
                              onClick={() => setExpandedSection(expandedSection === `serialization-${index}` ? null : `serialization-${index}`)}
                              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code className="h-4 w-4" />
                              Technische Implementation
                              <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                expandedSection === `serialization-${index}` && "rotate-180")} />
                            </button>
                            
                            {expandedSection === `serialization-${index}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4"
                              >
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre className="text-green-400 text-xs">
                                    {serialization.implementation.technical}
                                  </pre>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Risk Analysis Section */}
              <section className="space-y-8">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Pharma-spezifische Risikoanalyse
                </motion.h2>
                  <div className="space-y-8">
                    {riskScenarios.map((risk, index) => (
                      <Card key={index} className="p-6">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                              <AlertTriangle className="h-6 w-6 text-red-600" />
                              {risk.scenario}
                            </CardTitle>
                            <div className="flex items-center gap-2">
                              <Badge variant="destructive">
                                Risiko-Score: {risk.riskScore}/100
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div className="p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg text-center">
                              <div className="text-sm text-orange-700 dark:text-orange-400 mb-1">
                                Wahrscheinlichkeit
                              </div>
                              <div className="font-bold text-orange-800 dark:text-orange-300">
                                {risk.likelihood}
                              </div>
                            </div>
                            <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg text-center">
                              <div className="text-sm text-red-700 dark:text-red-400 mb-1">
                                Auswirkung
                              </div>
                              <div className="font-bold text-red-800 dark:text-red-300">
                                {risk.impact}
                              </div>
                            </div>
                            <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg text-center">
                              <div className="text-sm text-purple-700 dark:text-purple-400 mb-1">
                                Strafen
                              </div>
                              <div className="font-bold text-purple-800 dark:text-purple-300">
                                {risk.potentialFine}
                              </div>
                            </div>
                            <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-center">
                              <div className="text-sm text-blue-700 dark:text-blue-400 mb-1">
                                Betroffene
                              </div>
                              <div className="font-bold text-blue-800 dark:text-blue-300">
                                {risk.affectedProducts || risk.affectedPersons}
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Shield className="h-4 w-4 text-green-600" />
                                Schutzmaßnahmen
                              </h4>
                              <div className="space-y-2">
                                {risk.mitigationMeasures.map((measure, i) => (
                                  <div key={i} className="flex items-start gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded">
                                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{measure}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Clipboard className="h-4 w-4 text-blue-600" />
                                Compliance-Maßnahmen
                              </h4>
                              <div className="space-y-2">
                                {risk.complianceActions.map((action, i) => (
                                  <div key={i} className="flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                                    <FileCheck className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{action}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Implementation Section */}
              <section id="praxis-implementation" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Praxis-Implementation & Roadmap
                </motion.h2>
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {implementationRoadmap.map((phase, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="h-full">
                          <CardHeader>
                            <div className={cn(
                              "inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3",
                              phase.color === 'blue' && "bg-blue-100 text-blue-800",
                              phase.color === 'green' && "bg-green-100 text-green-800",
                              phase.color === 'orange' && "bg-orange-100 text-orange-800",
                              phase.color === 'purple' && "bg-purple-100 text-purple-800"
                            )}>
                              Phase {index + 1}
                            </div>
                            <CardTitle className="text-lg">{phase.phase}</CardTitle>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span>{phase.duration}</span>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-3">Aufgaben</h4>
                              <div className="space-y-2">
                                {phase.tasks.map((task, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{task}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Deliverables</h4>
                              <div className="space-y-1">
                                {phase.deliverables.map((deliverable, i) => (
                                  <div key={i} className="text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded">
                                    {deliverable}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  {/* Interactive Checklist */}
                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckSquare className="h-6 w-6 text-green-600" />
                        Interaktive Pharma Compliance-Checkliste
                      </CardTitle>
                      <div className="text-sm text-gray-600">
                        Fortschritt: {getCompletionPercentage()}% abgeschlossen
                      </div>
                      <Progress value={getCompletionPercentage()} className="h-2" />
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[
                        {
                          category: 'GxP Grundlagen',
                          items: [
                            'GMP-konforme Produktionssysteme etabliert',
                            'GCP-Compliance für klinische Studien',
                            'GDP-Standards für Distribution implementiert',
                            'GLP-konforme Laborsysteme validiert'
                          ]
                        },
                        {
                          category: 'Regulatory Affairs', 
                          items: [
                            'ICH Guidelines Implementation abgeschlossen',
                            'EMA/FDA Submission Templates erstellt',
                            'Pharmakovigilanz-System operational',
                            'Serialisierung EU FMD/US DSCSA konform'
                          ]
                        },
                        {
                          category: 'Quality Assurance',
                          items: [
                            'Computer System Validation (CSV) durchgeführt',
                            'Data Integrity Controls implementiert',
                            'Risk-based Quality Management etabliert',
                            'Continuous Process Verification aktiv'
                          ]
                        }
                      ].map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 className="font-semibold mb-3">{section.category}</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {section.items.map((item, itemIndex) => {
                              const itemId = `${sectionIndex}-${itemIndex}`;
                              const isChecked = checkedItems.has(itemId);
                              return (
                                <div
                                  key={itemIndex}
                                  className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                  onClick={() => toggleChecklistItem(itemId)}
                                >
                                  {isChecked ? (
                                    <CheckSquare className="h-5 w-5 text-green-600" />
                                  ) : (
                                    <Square className="h-5 w-5 text-gray-400" />
                                  )}
                                  <span className={cn(
                                    "text-sm",
                                    isChecked && "line-through text-gray-500"
                                  )}>
                                    {item}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
              </section>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
                  <CardContent className="relative p-8 md:p-12 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <Pill className="h-16 w-16 mx-auto mb-6 text-white" />
                      </motion.div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold">
                        Starten Sie Ihre Pharma Compliance Journey
                      </h2>
                      <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Profitieren Sie von unserer langjährigen Expertise in pharmazeutischer Compliance. 
                        Von GxP über ICH Guidelines bis hin zur globalen Regulatory Intelligence.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact?demo=true&industry=pharma">
                          <Button 
                            size="lg" 
                            className="bg-white text-blue-600 hover:bg-gray-100 group shadow-lg"
                          >
                            <Pill className="mr-2 h-5 w-5" />
                            Kostenlose Pharma-Beratung
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="bg-transparent text-white border-white hover:bg-white/10"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Umfassender GxP Guide (PDF)
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        {[
                          { icon: Pill, title: 'Pharma-Expertise', subtitle: 'Spezialisiert auf pharmazeutische Industrie' },
                          { icon: Shield, title: 'GxP + ICH Konform', subtitle: 'Vollständige regulatory compliance' },
                          { icon: Award, title: 'Global Standards', subtitle: 'EMA, FDA, PMDA ready' }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                          >
                            <div className="bg-white/20 p-3 rounded-lg">
                              <item.icon className="h-6 w-6" />
                            </div>
                            <div className="text-left">
                              <div className="font-semibold">{item.title}</div>
                              <div className="text-sm text-white/80">{item.subtitle}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-blue-600" />
                    Weiterführende Pharma-Ressourcen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link to="/wissen/rechtsprechung/ich-guidelines" className="block group">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md">
                        <Microscope className="h-5 w-5 text-blue-600 mb-2" />
                        <div className="font-medium">ICH Guidelines</div>
                        <div className="text-sm text-gray-600">Q, E, S & M Series Compliance</div>
                      </div>
                    </Link>
                    <Link to="/wissen/compliance/gxp-validation" className="block group">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-md">
                        <FlaskConical className="h-5 w-5 text-green-600 mb-2" />
                        <div className="font-medium">GxP Validation</div>
                        <div className="text-sm text-gray-600">Computer System Validation</div>
                      </div>
                    </Link>
                    <Link to="/wissen/krisenmanagement/drug-recall" className="block group">
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md">
                        <AlertTriangle className="h-5 w-5 text-orange-600 mb-2" />
                        <div className="font-medium">Drug Recall Management</div>
                        <div className="text-sm text-gray-600">Notfall-Produktrückruf</div>
                      </div>
                    </Link>
                    <Link to="/branchen/pharma" className="block group">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group-hover:shadow-md">
                        <Pill className="h-5 w-5 text-purple-600 mb-2" />
                        <div className="font-medium">Pharma Solutions</div>
                        <div className="text-sm text-gray-600">Unsere Produktlösungen</div>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PharmaComplianceGuide;