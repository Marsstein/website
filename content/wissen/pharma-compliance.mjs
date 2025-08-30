export default {
  route: '/wissen/branchen/pharma-compliance',
  title: 'Pharma Compliance',
  description: 'Meistern Sie die komplexesten regulatorischen Anforderungen der Pharmaindustrie.                      Von GMP über klinische Studien bis hin zur globalen Pharma',
  content: `) => {
      document.title = 'Data Privacy Framework';
    };
  }, []);
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
    window.history.pushState(null, '', \`#\${sectionId}\`);
    
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
      setTimeout(() => , 100);
    }
  }, []);
  
  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ());
      
      const scrollPosition = window.scrollY + 150; // Offset for sticky nav
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) 
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
            medicalWorld: ,
            administrativeWorld: 
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
        template: \`
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
        \`
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
        technical: \`
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
        \`
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
        technical: \`
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
        \`
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
          ,
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
        technical: \`
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
        \`
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
        technical: \`
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
        \`
      }
    }
  ];

  const riskScenarios = [
    ,
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
    if (newCheckedItems.has(itemId))  else 
    setCheckedItems(newCheckedItems);
  };

  const getCompletionPercentage = () => ;

  return (
    <div>
      <Header ></Header>
      
      <main class="overflow-hidden">
        {/* Hero Section with Parallax */}
        <section>
          <div class="absolute inset-0 -z-10">
            <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" ></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" ></div>
          </div>

          <motion.div 
            style={{ y, opacity }}
            class="container px-4"
          >
            <div class="max-w-7xl mx-auto">
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  class="space-y-6"
                >
                  <div>
                    <Pill class="h-4 w-4" ></Pill>
                    <span class="text-sm font-medium">Pharma Compliance Excellence</span>
                  </div>
                  
                  <h1>
                    Pharma Compliance
                    <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                      GxP Excellence Guide
                    </span>
                  </h1>
                  
                  <p>
                    Meistern Sie die komplexesten regulatorischen Anforderungen der Pharmaindustrie. 
                    Von GMP über klinische Studien bis hin zur globalen Pharmakovigilanz.
                  </p>

                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>GMP, GDP, GCP konforme Implementierung</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>ICH Guidelines & EMA/FDA Compliance</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>Serialisierung & Pharmakovigilanz Automation</span>
                    </div>
                  </div>

                  <div>
                    <a href="/contact?demo=true&industry=pharma">
                      <Button>
                        <Pill class="mr-2 h-5 w-5" ></Pill>
                        Pharma Demo buchen
                        <ArrowRight>
                      </Button>
                    </a>
                    <Button size="lg" variant="outline" class="group">
                      <Download class="mr-2 h-5 w-5" ></Download>
                      GxP Compliance Checkliste
                    </Button>
                  </div>
                </motion.div>

                {/* Interactive Compliance Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  class="relative"
                >
                  <Card>
                    <div class="space-y-4">
                      <div class="flex items-center justify-between">
                        <h3 class="font-bold text-lg">Pharma Compliance Center</h3>
                        <Badge class="bg-green-100 text-green-700">
                          % Konform
                        </Badge>
                      </div>

                      <div>
                        {complianceStats.slice(0, 6).map((stat, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            class="p-3 bg-white dark:bg-gray-900 rounded-lg border text-center cursor-pointer"
                          >
                            <div>
                              
                            </div>
                            <div class=>
                              {stat.value}%
                            </div>
                            <div class="text-xs text-green-600">
                              {stat.trend}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div class="space-y-3">
                        {complianceStats.slice(0, 3).map((stat, index) => (
                          <div key={index} class="space-y-2">
                            <div class="flex items-center justify-between text-sm">
                              <span>{stat.label}</span>
                              <span class="font-semibold">{stat.value}%</span>
                            </div>
                            <Progress value={stat.value} class="h-2" ></Progress>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    class="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-blue-500"
                  >
                    <div class="flex items-center gap-2">
                      <Pill class="h-4 w-4 text-blue-500 animate-pulse" ></Pill>
                      <span class="text-sm font-medium">GxP Ready</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Sticky Navigation */}
        <div>
          <div class="container px-4">
            <div class="max-w-7xl mx-auto">
              <nav>
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                   }
                    class=
                  >
                    <item.icon class= ></item>
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div class="py-20">
          <div class="container px-4">
            <div class="max-w-7xl mx-auto space-y-20">

              {/* Overview Section with proper scroll margin */}
              <section id="ueberblick" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Pharma Compliance Überblick
                </motion.h2>
                  <div>
                    <Card class="p-6">
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <Shield class="h-6 w-6 text-blue-600" ></Shield>
                          GxP Standards - Good Practices
                        </CardTitle>
                      </CardHeader>
                      <CardContent class="space-y-4">
                        <p>
                          GxP umfasst alle "Good Practice" Standards in der Pharmaindustrie und stellt 
                          sicher, dass Produkte konsistent und kontrolliert hergestellt werden.
                        </p>
                        
                        <div class="space-y-3">
                          {[
                            'GMP (Good Manufacturing Practice) für Produktion',
                            'GCP (Good Clinical Practice) für klinische Studien',
                            'GDP (Good Distribution Practice) für Vertrieb',
                            'GLP (Good Laboratory Practice) für Tests'
                          ].map((item, i) => (
                            <div key={i} class="flex items-start gap-3">
                              <CheckCircle2 class="h-4 w-4 text-green-600 flex-shrink-0 mt-1" ></CheckCircle2>
                              <span class="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <div class="flex items-center gap-2 mb-2">
                            <AlertTriangle class="h-4 w-4 text-blue-600" ></AlertTriangle>
                            <span>
                              Regulatorische Relevanz
                            </span>
                          </div>
                          <p>
                            Verstöße können zu Produktionsverboten, Marktrücknahmen und erheblichen Bußgeldern führen
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card class="p-6">
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <Microscope class="h-6 w-6 text-purple-600" ></Microscope>
                          ICH Guidelines & Global Harmonisierung
                        </CardTitle>
                      </CardHeader>
                      <CardContent class="space-y-4">
                        <p>
                          Die International Council for Harmonisation (ICH) entwickelt global einheitliche 
                          Standards für Qualität, Sicherheit und Wirksamkeit von Arzneimitteln.
                        </p>
                        
                        <div class="space-y-3">
                          {[
                            'ICH Q-Series: Qualitätsstandards und analytische Verfahren',
                            'ICH E-Series: Efficacy Guidelines für klinische Studien', 
                            'ICH S-Series: Safety Guidelines für präklinische Tests',
                            'ICH M-Series: Multidisziplinäre Guidelines'
                          ].map((item, i) => (
                            <div key={i} class="flex items-start gap-3">
                              <Microscope class="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" ></Microscope>
                              <span class="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <div class="flex items-center gap-2 mb-2">
                            <Globe class="h-4 w-4 text-purple-600" ></Globe>
                            <span>
                              Globale Anerkennung
                            </span>
                          </div>
                          <p>
                            ICH-konforme Dossiers werden von EMA, FDA, PMDA und anderen Behörden akzeptiert
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
              </section>

              {/* Divider */}
              <div>

              {/* GxP Section with proper scroll margin */}
              <section id="gxp-compliance" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  GxP Compliance Standards
                </motion.h2>
                  <div class="space-y-8">
                    {gxpRequirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card class="border-l-4 border-blue-500">
                          <CardHeader>
                            <div class="flex items-start justify-between">
                              <CardTitle class="text-xl pr-4">{requirement.title}</CardTitle>
                              <Badge 
                                variant={requirement.risk === 'Kritisch' ? 'destructive' : 'secondary'}
                                class="flex-shrink-0"
                              >
                                {requirement.risk} Risiko
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent class="space-y-6">
                            <p>
                              {requirement.description}
                            </p>
                            
                            <div>
                              <div>
                                <h4 class="font-semibold mb-3 flex items-center gap-2">
                                  <FileText class="h-4 w-4 text-blue-600" ></FileText>
                                  Anwendungsbeispiele
                                </h4>
                                <div class="space-y-2">
                                  {requirement.examples.map((example, i) => (
                                    <div key={i} class="flex items-start gap-2">
                                      <CheckCircle2 class="h-3 w-3 text-green-600 mt-1 flex-shrink-0" ></CheckCircle2>
                                      <span class="text-sm">{example}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 class="font-semibold mb-3 flex items-center gap-2">
                                  <AlertTriangle class="h-4 w-4 text-red-600" ></AlertTriangle>
                                  Konsequenzen bei Verstößen
                                </h4>
                                <div>
                                  <p>
                                    {requirement.fineExample}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {requirement.realWorldScenario && (
                              <div class="space-y-6">
                                <button
                                 \` ? null : \`gxp-\${index}\`)}
                                  class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                                >
                                  <Lightbulb class="h-4 w-4" ></Lightbulb>
                                  Praxis-Szenario anzeigen
                                  <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                    expandedSection === \`gxp-\${index}\` && "rotate-180")} ></ChevronDown>
                                </button>
                                
                                {expandedSection === \`gxp-\${index}\` && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    class="mt-4"
                                  >
                                    <div>
                                      <div class="text-center">
                                        <h3>
                                          {requirement.realWorldScenario.title}
                                        </h3>
                                        <p>
                                          {requirement.realWorldScenario.context}
                                        </p>
                                      </div>
                                      
                                      <div>
                                        <h4>
                                          <AlertTriangle class="h-4 w-4" ></AlertTriangle>
                                          Herausforderung
                                        </h4>
                                        <p>
                                          {requirement.realWorldScenario.challenge}
                                        </p>
                                      </div>
                                      
                                      <div class="space-y-4">
                                        <h4>
                                          <CheckCircle2 class="h-4 w-4" ></CheckCircle2>
                                          Lösungsansatz
                                        </h4>
                                        {Object.values(requirement.realWorldScenario.solution).map((step, stepIndex) => (
                                          <div>
                                            <h5>
                                              {step.title}
                                            </h5>
                                            <p>
                                              {step.description}
                                            </p>
                                            {step.modules && (
                                              <div>
                                                {step.modules.map((module, moduleIndex) => (
                                                  <div>
                                                    <div>
                                                      {module.name}
                                                    </div>
                                                    <div>
                                                      {module.purpose}
                                                    </div>
                                                    <div>
                                                      {module.dataTypes}
                                                    </div>
                                                    {module.benefit && (
                                                      <div>
                                                        ✓ {module.benefit}
                                                      </div>
                                                    )}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.transparency && (
                                              <div>
                                                {step.transparency.map((item, itemIndex) => (
                                                  <div key={itemIndex} class="flex items-start gap-2 text-sm">
                                                    <CheckCircle2 class="h-3 w-3 text-green-600 mt-1 flex-shrink-0" ></CheckCircle2>
                                                    <span>{item}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.features && (
                                              <div>
                                                {step.features.map((feature, featureIndex) => (
                                                  <div key={featureIndex} class="flex items-start gap-2 text-sm">
                                                    <Zap class="h-3 w-3 text-purple-600 mt-1 flex-shrink-0" ></Zap>
                                                    <span>{feature}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                      
                                      <div>
                                        <h4>
                                          <Target class="h-4 w-4" ></Target>
                                          Ergebnis & Learnings
                                        </h4>
                                        <div>
                                          {Object.entries(requirement.realWorldScenario.outcome).map(([key, value]) => (
                                            <div key={key} class="text-sm">
                                              <span class="font-medium capitalize">:</span>
                                              <br />
                                              <span>{value}</span>
                                            </div>
                                          ))}
                                        </div>
                                        <div class="space-y-2">
                                          <h5>Key Learnings:</h5>
                                          {requirement.realWorldScenario.keyLearnings.map((learning, learningIndex) => (
                                            <div key={learningIndex} class="flex items-start gap-2 text-sm">
                                              <Star class="h-3 w-3 text-yellow-500 mt-1 flex-shrink-0" ></Star>
                                              <span>{learning}</span>
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
                              <div class="space-y-6">
                                <button
                                 \` ? null : \`implementation-\${index}\`)}
                                  class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                                >
                                  <Code class="h-4 w-4" ></Code>
                                  Technische Implementation
                                  <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                    expandedSection === \`implementation-\${index}\` && "rotate-180")} ></ChevronDown>
                                </button>
                                
                                {expandedSection === \`implementation-\${index}\` && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    class="mt-4"
                                  >
                                    <div class="space-y-4">
                                      <div>
                                        <h5 class="font-medium mb-3">Anforderungen:</h5>
                                        <div>
                                          {requirement.implementation.requirements.map((req, reqIndex) => (
                                            <div>
                                              <CheckCircle2 class="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" ></CheckCircle2>
                                              <span>{req}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                      <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <pre class="text-green-400 text-xs">
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
              <div>

              {/* Clinical Trials Section with proper scroll margin */}
              <section id="klinische-studien" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Klinische Studien & GCP Compliance
                </motion.h2>
                  <div class="space-y-8">
                    {clinicalTrialCompliance.map((trial, index) => (
                      <Card key={index} class="p-6">
                        <CardHeader>
                          <CardTitle class="flex items-center gap-2">
                            <Microscope class="h-6 w-6 text-purple-600" ></Microscope>
                            {trial.scenario}
                          </CardTitle>
                        </CardHeader>
                        <CardContent class="space-y-6">
                          <div>
                            <div>
                              <h4 class="font-semibold mb-3 text-red-700">Herausforderung</h4>
                              <p>
                                {trial.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 class="font-semibold mb-3 text-green-700">Lösung</h4>
                              <p>
                                {trial.solution}
                              </p>
                            </div>
                            <div>
                              <h4 class="font-semibold mb-3 text-blue-700">Module</h4>
                              <div class="space-y-2">
                                {trial.implementation.modules.map((module, i) => (
                                  <div>
                                    {module}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <button
                             \` ? null : \`trial-\${index}\`)}
                              class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code class="h-4 w-4" ></Code>
                              Technische Implementation
                              <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                expandedSection === \`trial-\${index}\` && "rotate-180")} ></ChevronDown>
                            </button>
                            
                            {expandedSection === \`trial-\${index}\` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                class="mt-4"
                              >
                                <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre class="text-green-400 text-xs">
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
              <div>

              {/* Pharmacovigilance Section with proper scroll margin */}
              <section id="pharmakovigilanz" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Pharmakovigilanz & Safety Monitoring
                </motion.h2>
                  <div class="space-y-8">
                    {pharmakovigilanceSystem.map((pv, index) => (
                      <Card key={index} class="p-6">
                        <CardHeader>
                          <CardTitle class="flex items-center gap-2">
                            <pv.icon class="h-6 w-6 text-orange-600" ></pv>
                            {pv.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent class="space-y-6">
                          <div>
                            <div>
                              <h4 class="font-semibold mb-3">Technische Maßnahmen</h4>
                              <div class="space-y-2">
                                {pv.measures.map((measure, i) => (
                                  <div key={i} class="flex items-start gap-2">
                                    <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                    <span class="text-sm">{measure}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 class="font-semibold mb-3">Pharma-spezifisch</h4>
                              <p>
                                {pv.pharmaSpecific}
                              </p>
                              <div class="mt-3">
                                <Badge variant="outline" class="text-xs">
                                  {pv.iso27001}
                                </Badge>
                              </div>
                            </div>
                            
                            <div>
                              <h4 class="font-semibold mb-3">Praktische Umsetzung</h4>
                              <div>
                                <div class="space-y-3">
                                  <div class="flex items-center gap-2 mb-2">
                                    <Activity class="h-4 w-4 text-orange-600" ></Activity>
                                    <span>{pv.practicalImplementation.title}</span>
                                  </div>
                                  <div>
                                    {pv.practicalImplementation.description}
                                  </div>
                                  <div class="grid grid-cols-1 gap-3">
                                    {pv.practicalImplementation.zones && pv.practicalImplementation.zones.map((zone, zoneIndex) => (
                                      <div>
                                        <div>
                                          {zone.name}
                                        </div>
                                        <div>
                                          {zone.security}
                                        </div>
                                        <div>
                                          <strong>Zugang:</strong> {zone.access}
                                        </div>
                                        <div>
                                          {zone.measures}
                                        </div>
                                      </div>
                                    ))}
                                    {pv.practicalImplementation.roles && pv.practicalImplementation.roles.map((role, roleIndex) => (
                                      <div>
                                        <div>
                                          {role.name}
                                        </div>
                                        <div>
                                          {role.permissions}
                                        </div>
                                        <div>
                                          <strong>Einschränkungen:</strong> {role.restrictions}
                                        </div>
                                        <div>
                                          {role.security}
                                        </div>
                                      </div>
                                    ))}
                                    {pv.practicalImplementation.layers && pv.practicalImplementation.layers.map((layer, layerIndex) => (
                                      <div>
                                        <div>
                                          {layer.name}
                                        </div>
                                        <div>
                                          {layer.protection}
                                        </div>
                                        <div>
                                          <strong>Nutzen:</strong> {layer.benefit}
                                        </div>
                                        <div>
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
              <div>

              {/* Serialization Section with proper scroll margin */}
              <section id="serialisierung" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Serialisierung & Track & Trace
                </motion.h2>
                  <div class="space-y-8">
                    {serializationRequirements.map((serialization, index) => (
                      <Card key={index} class="p-6">
                        <CardHeader>
                          <CardTitle class="flex items-center gap-2">
                            <BarChart3 class="h-6 w-6 text-cyan-600" ></BarChart3>
                            {serialization.scenario}
                          </CardTitle>
                        </CardHeader>
                        <CardContent class="space-y-6">
                          <div>
                            <div>
                              <h4 class="font-semibold mb-3 text-red-700">Herausforderung</h4>
                              <p>
                                {serialization.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 class="font-semibold mb-3 text-green-700">Lösung</h4>
                              <p>
                                {serialization.solution}
                              </p>
                            </div>
                            <div>
                              <h4 class="font-semibold mb-3 text-blue-700">Module</h4>
                              <div class="space-y-2">
                                {serialization.implementation.modules.map((module, i) => (
                                  <div>
                                    {module}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <button
                             \` ? null : \`serialization-\${index}\`)}
                              class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code class="h-4 w-4" ></Code>
                              Technische Implementation
                              <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                expandedSection === \`serialization-\${index}\` && "rotate-180")} ></ChevronDown>
                            </button>
                            
                            {expandedSection === \`serialization-\${index}\` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                class="mt-4"
                              >
                                <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre class="text-green-400 text-xs">
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
              <div>

              {/* Risk Analysis Section */}
              <section class="space-y-8">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Pharma-spezifische Risikoanalyse
                </motion.h2>
                  <div class="space-y-8">
                    {riskScenarios.map((risk, index) => (
                      <Card key={index} class="p-6">
                        <CardHeader>
                          <div class="flex items-center justify-between">
                            <CardTitle class="flex items-center gap-2">
                              <AlertTriangle class="h-6 w-6 text-red-600" ></AlertTriangle>
                              {risk.scenario}
                            </CardTitle>
                            <div class="flex items-center gap-2">
                              <Badge variant="destructive">
                                Risiko-Score: {risk.riskScore}/100
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent class="space-y-6">
                          <div>
                            <div>
                              <div>
                                Wahrscheinlichkeit
                              </div>
                              <div>
                                {risk.likelihood}
                              </div>
                            </div>
                            <div>
                              <div>
                                Auswirkung
                              </div>
                              <div>
                                {risk.impact}
                              </div>
                            </div>
                            <div>
                              <div>
                                Strafen
                              </div>
                              <div>
                                {risk.potentialFine}
                              </div>
                            </div>
                            <div>
                              <div>
                                Betroffene
                              </div>
                              <div>
                                {risk.affectedProducts || risk.affectedPersons}
                              </div>
                            </div>
                          </div>

                          <div>
                            <div>
                              <h4 class="font-semibold mb-3 flex items-center gap-2">
                                <Shield class="h-4 w-4 text-green-600" ></Shield>
                                Schutzmaßnahmen
                              </h4>
                              <div class="space-y-2">
                                {risk.mitigationMeasures.map((measure, i) => (
                                  <div>
                                    <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                    <span class="text-sm">{measure}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 class="font-semibold mb-3 flex items-center gap-2">
                                <Clipboard class="h-4 w-4 text-blue-600" ></Clipboard>
                                Compliance-Maßnahmen
                              </h4>
                              <div class="space-y-2">
                                {risk.complianceActions.map((action, i) => (
                                  <div>
                                    <FileCheck class="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" ></FileCheck>
                                    <span class="text-sm">{action}</span>
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
              <div>

              {/* Implementation Section with proper scroll margin */}
              <section id="praxis-implementation" class="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Praxis-Implementation & Roadmap
                </motion.h2>
                  <div>
                    {implementationRoadmap.map((phase, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card class="h-full">
                          <CardHeader>
                            <div class=>
                              Phase {index + 1}
                            </div>
                            <CardTitle class="text-lg">{phase.phase}</CardTitle>
                            <div class="flex items-center gap-2 text-sm text-gray-600">
                              <Clock class="w-4 h-4" ></Clock>
                              <span>{phase.duration}</span>
                            </div>
                          </CardHeader>
                          <CardContent class="space-y-4">
                            <div>
                              <h4 class="font-semibold mb-3">Aufgaben</h4>
                              <div class="space-y-2">
                                {phase.tasks.map((task, i) => (
                                  <div key={i} class="flex items-start gap-2">
                                    <CheckCircle2 class="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                    <span class="text-sm">{task}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 class="font-semibold mb-3">Deliverables</h4>
                              <div class="space-y-1">
                                {phase.deliverables.map((deliverable, i) => (
                                  <div>
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
                  <Card class="p-6">
                    <CardHeader>
                      <CardTitle class="flex items-center gap-2">
                        <CheckSquare class="h-6 w-6 text-green-600" ></CheckSquare>
                        Interaktive Pharma Compliance-Checkliste
                      </CardTitle>
                      <div class="text-sm text-gray-600">
                        Fortschritt: % abgeschlossen
                      </div>
                      <Progress value= class="h-2" ></Progress>
                    </CardHeader>
                    <CardContent class="space-y-6">
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
                        
                      ].map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 class="font-semibold mb-3">{section.category}</h4>
                          <div>
                            {section.items.map((item, itemIndex) => {
                              const itemId = \`\${sectionIndex}-\${itemIndex}\`;
                              const isChecked = checkedItems.has(itemId);
                              return (
                                <div> toggleChecklistItem(itemId)}
                                >
                                  
                                  <span class=>
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
        <section>
          <div class="container px-4">
            <div class="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card class="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white overflow-hidden relative">
                  <div class="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" ></div>
                  <CardContent>
                    <div class="max-w-4xl mx-auto space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <Pill class="h-16 w-16 mx-auto mb-6 text-white" ></Pill>
                      </motion.div>
                      
                      <h2>
                        Starten Sie Ihre Pharma Compliance Journey
                      </h2>
                      <p class="text-xl text-white/90 max-w-3xl mx-auto">
                        Profitieren Sie von unserer langjährigen Expertise in pharmazeutischer Compliance. 
                        Von GxP über ICH Guidelines bis hin zur globalen Regulatory Intelligence.
                      </p>
                      
                      <div>
                        <a href="/contact?demo=true&industry=pharma">
                          <Button>
                            <Pill class="mr-2 h-5 w-5" ></Pill>
                            Kostenlose Pharma-Beratung
                            <ArrowRight>
                          </Button>
                        </a>
                        <Button>
                          <Download class="mr-2 h-5 w-5" ></Download>
                          Umfassender GxP Guide (PDF)
                        </Button>
                      </div>

                      <div>
                        {[
                          { icon: Pill, title: 'Pharma-Expertise', subtitle: 'Spezialisiert auf pharmazeutische Industrie' },
                          { icon: Shield, title: 'GxP + ICH Konform', subtitle: 'Vollständige regulatory compliance' },
                          { icon: Award, title: 'Global Standards', subtitle: 'EMA, FDA, PMDA ready' }
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            class="flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                          >
                            <div class="bg-white/20 p-3 rounded-lg">
                              <item.icon class="h-6 w-6" ></item>
                            </div>
                            <div class="text-left">
                              <div class="font-semibold">{item.title}</div>
                              <div class="text-sm text-white/80">{item.subtitle}</div>
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
        <section class="py-20">
          <div class="container px-4">
            <div class="max-w-7xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle class="flex items-center gap-2">
                    <ExternalLink class="h-5 w-5 text-blue-600" ></ExternalLink>
                    Weiterführende Pharma-Ressourcen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <a href="/wissen/rechtsprechung/ich-guidelines" class="block group">
                      <div>
                        <Microscope class="h-5 w-5 text-blue-600 mb-2" ></Microscope>
                        <div class="font-medium">ICH Guidelines</div>
                        <div class="text-sm text-gray-600">Q, E, S & M Series Compliance</div>
                      </div>
                    </a>
                    <a href="/wissen/compliance/gxp-validation" class="block group">
                      <div>
                        <FlaskConical class="h-5 w-5 text-green-600 mb-2" ></FlaskConical>
                        <div class="font-medium">GxP Validation</div>
                        <div class="text-sm text-gray-600">Computer System Validation</div>
                      </div>
                    </a>
                    <a href="/wissen/krisenmanagement/drug-recall" class="block group">
                      <div>
                        <AlertTriangle class="h-5 w-5 text-orange-600 mb-2" ></AlertTriangle>
                        <div class="font-medium">Drug Recall Management</div>
                        <div class="text-sm text-gray-600">Notfall-Produktrückruf</div>
                      </div>
                    </a>
                    <a href="/branchen/pharma" class="block group">
                      <div>
                        <Pill class="h-5 w-5 text-purple-600 mb-2" ></Pill>
                        <div class="font-medium">Pharma Solutions</div>
                        <div class="text-sm text-gray-600">Unsere Produktlösungen</div>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer ></Footer>
    </div>`
};