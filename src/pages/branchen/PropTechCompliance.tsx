import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Home,
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
  Smartphone,
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
  Wifi,
  Server,
  Code,
  Award,
  Scale,
  Fingerprint,
  Key,
  Monitor,
  Camera,
  Thermometer,
  LockKeyhole,
  Radio,
  Gauge,
  Network,
  Cpu,
  Bot,
  ShieldCheck,
  FileX,
  UserX,
  Ban,
  CheckSquare,
  Square,
  ChevronDown,
  ExternalLink,
  Gavel,
  AlertCircle,
  Timer,
  BarChart3,
  PieChart,
  LineChart,
  Layers,
  CloudUpload,
  Radar,
  Zap as Energy,
  WifiOff,
  ScanLine,
  Cctv,
  DoorOpen,
  Building,
  MapPin,
  QrCode,
  Wrench,
  Package,
  HardDrive,
  BellRing,
  Tablet,
  Phone,
  Mail,
  BrainCircuit,
  Construction
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const PropTechCompliance = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>('overview');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Navigation items for sticky navigation
  const navigationItems = [
    { id: 'overview', label: 'Überblick', icon: Home },
    { id: 'smart-building', label: 'Smart Building Compliance', icon: Building },
    { id: 'iot-security', label: 'IoT & Sensorik', icon: Cpu },
    { id: 'tenant-privacy', label: 'Mieterdaten-Schutz', icon: UserCheck },
    { id: 'ai-automation', label: 'KI & Automation', icon: BrainCircuit },
    { id: 'implementation', label: 'Praxis-Umsetzung', icon: Construction }
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
    { label: 'Smart Building DSGVO', value: 96, color: 'text-cyan-600', trend: '+8%' },
    { label: 'IoT Security Standards', value: 94, color: 'text-blue-600', trend: '+12%' },
    { label: 'Mieterdaten-Schutz', value: 98, color: 'text-teal-600', trend: '+5%' },
    { label: 'AI-Compliance Score', value: 92, color: 'text-purple-600', trend: '+15%' },
    { label: 'ESG Integration', value: 89, color: 'text-green-600', trend: '+10%' },
    { label: 'Audit Readiness', value: 95, color: 'text-indigo-600', trend: '+7%' }
  ];

  const smartBuildingRequirements = [
    {
      title: 'Datenminimierung in Smart Buildings',
      description: 'Nur die für den jeweiligen Zweck erforderlichen Daten dürfen erhoben werden - keine präventive Vollüberwachung',
      examples: ['Bewegungssensoren statt Kameras in Gemeinschaftsräumen', 'Anonymisierte Heatmaps statt personenbezogener Tracking', 'Aggregierte Energiedaten statt Einzelverbrauch', 'Presence Detection ohne Identifikation'],
      risk: 'Hoch',
      fineExample: 'Bis zu 20 Mio. € bei systematischen Verstößen',
      realWorldScenario: {
        title: '🏢 Praxis-Szenario: Smart Office Implementation',
        context: 'Ein modernes Bürogebäude mit 5.000 Arbeitsplätzen will ein umfassendes Smart Building System implementieren, das Energieeffizienz, Raumnutzung und Mitarbeiterkomfort optimiert.',
        challenge: 'Wie können wertvolle Gebäudedaten gesammelt werden, ohne die Privatsphäre der Mitarbeiter zu verletzen?',
        solution: {
          step1: {
            title: '📊 Privacy-by-Design Architektur',
            description: 'Implementierung eines mehrstufigen Datenschutzkonzepts mit klarer Trennung zwischen technischen und personenbezogenen Daten',
            modules: [
              {
                name: 'Anonyme Präsenzerkennung',
                purpose: 'Raumauslastung optimieren',
                dataTypes: 'Anzahl Personen, Bewegungsmuster (anonymisiert)',
                technology: 'Infrarot-Sensoren, keine Kameras'
              },
              {
                name: 'Smart Energy Management',
                purpose: 'Energieeffizienz steigern',
                dataTypes: 'Aggregierte Verbrauchsdaten pro Etage',
                benefit: '32% Energieeinsparung ohne Einzeltracking'
              },
              {
                name: 'Intelligent Workplace',
                purpose: 'Arbeitsplatzoptimierung',
                dataTypes: 'Desk-Booking mit Pseudonymisierung',
                privacy: 'Keine Bewegungsprofile möglich'
              }
            ]
          },
          step2: {
            title: '🔒 Technische Schutzmaßnahmen',
            description: 'Umfassende Sicherheitsarchitektur für alle IoT-Komponenten',
            layers: [
              {
                level: 'Sensor-Ebene',
                protection: 'Edge Computing mit lokaler Anonymisierung',
                benefit: 'Rohdaten verlassen nie den Sensor'
              },
              {
                level: 'Netzwerk-Ebene',
                protection: 'Segregierte VLANs für Building Automation',
                benefit: 'Isolation von Office-IT und Gebäudetechnik'
              },
              {
                level: 'Platform-Ebene',
                protection: 'Zero-Trust Architecture mit Mikrosegmentierung',
                benefit: 'Minimale Angriffsfläche bei Kompromittierung'
              }
            ]
          },
          step3: {
            title: '📱 Nutzer-Transparenz und Kontrolle',
            description: 'Mitarbeiter-App mit vollständiger Dateneinsicht und Kontrollmöglichkeiten',
            features: [
              'Live-Dashboard aller erfassten Daten pro Arbeitsplatz',
              'Opt-Out Möglichkeit für nicht-essenzielle Services',
              'Anonymisierungsgrad selbst wählbar',
              'Datenexport und Löschfunktion jederzeit verfügbar'
            ]
          }
        },
        outcome: {
          buildingBenefit: '35% Energieeinsparung und optimierte Raumnutzung',
          employeeBenefit: 'Volle Transparenz und Kontrolle über persönliche Daten',
          complianceLevel: '100% DSGVO-konform mit Privacy-by-Design'
        },
        keyLearnings: [
          'Anonymisierung direkt am Sensor reduziert Datenschutzrisiken um 89%',
          'Transparenz-Dashboard erhöht Akzeptanz bei Mitarbeitern um 67%',
          'Edge Computing vermeidet zentrale Datenspeicherung sensibler Informationen',
          'Opt-In statt Opt-Out für erweiterte Features steigert Vertrauen'
        ]
      }
    },
    {
      title: 'Videoüberwachung und Access Control',
      description: 'Strenge Anforderungen an Videoüberwachung in und um Immobilien - berechtigtes Interesse muss nachgewiesen werden',
      examples: ['Eingangsbereiche mit Hinweisschildern', 'Zeitlich begrenzte Speicherung (max. 72h)', 'Keine Dauerüberwachung von Mietern', 'Gesichtsunkenntlichmachung in Gemeinschaftsbereichen'],
      risk: 'Kritisch',
      fineExample: 'LG München: 1,1 Mio. € für illegale Mitarbeiterüberwachung',
      realWorldScenario: {
        title: '🏠 Praxis-Szenario: Intelligente Zugangskontrolle im Wohnkomplex',
        context: 'Ein Premium-Wohnkomplex mit 200 Einheiten möchte ein modernes Sicherheitssystem mit Gesichtserkennung, digitalen Schlüsseln und Besuchermanagement implementieren.',
        challenge: 'Wie kann hohe Sicherheit gewährleistet werden, ohne das Recht auf Privatsphäre der Bewohner zu verletzen?',
        solution: {
          step1: {
            title: '🚪 Mehrstufiges Zugangskonzept',
            description: 'Verschiedene Sicherheitslevel mit angepassten Datenschutzmaßnahmen',
            zones: [
              {
                area: 'Haupteingang',
                technology: 'Intercom mit temporärer Videoaufzeichnung',
                retention: 'Max. 24h, automatische Löschung',
                privacy: 'Nur bei konkretem Sicherheitsvorfall abrufbar'
              },
              {
                area: 'Tiefgarage',
                technology: 'Kennzeichenerkennung mit Hashing',
                retention: 'Nur Ein-/Ausfahrtszeiten, keine Bewegungsprofile',
                privacy: 'Automatische Pseudonymisierung nach 7 Tagen'
              },
              {
                area: 'Wohnbereiche',
                technology: 'Digitale Schlüssel ohne Tracking',
                retention: 'Keine Bewegungsdaten, nur Berechtigungsprüfung',
                privacy: 'Dezentrale Verarbeitung am Türschloss'
              }
            ]
          },
          step2: {
            title: '📹 Datenschutzkonforme Videoüberwachung',
            description: 'Innovative Technologien für Sicherheit ohne Totalüberwachung',
            features: [
              {
                name: 'AI-basierte Anomalieerkennung',
                function: 'Erkennt ungewöhnliche Situationen ohne Personenidentifikation',
                privacy: 'Personen werden als anonyme Objekte verarbeitet'
              },
              {
                name: 'Privacy Masking',
                function: 'Automatische Verpixelung von Gesichtern und Fenstern',
                privacy: 'Nur autorisiertes Personal kann bei Bedarf demaskieren'
              },
              {
                name: 'Event-basierte Aufzeichnung',
                function: 'Aufnahme nur bei definierten Sicherheitsereignissen',
                privacy: 'Reduziert Datenmenge um 95%'
              }
            ]
          },
          step3: {
            title: '🔐 Bewohner-Empowerment',
            description: 'Volle Kontrolle und Transparenz für alle Bewohner',
            controls: [
              'Persönliches Privacy-Dashboard in der Bewohner-App',
              'Einsicht in alle gespeicherten Daten auf Knopfdruck',
              'Individuell einstellbare Datenschutzpräferenzen',
              'Monatlicher Transparenzbericht über Systemnutzung'
            ]
          }
        },
        outcome: {
          securityBenefit: 'Reduzierung von Einbrüchen um 78%',
          privacyBenefit: 'Keine anlasslose Massenüberwachung',
          residentSatisfaction: '92% Zufriedenheit mit Privacy-First Ansatz'
        },
        keyLearnings: [
          'Privacy Masking ermöglicht Sicherheit ohne Totalüberwachung',
          'Transparenz schafft Vertrauen - 87% nutzen das Privacy-Dashboard',
          'Event-basierte Aufzeichnung reduziert Speicherbedarf und Datenschutzrisiken',
          'Klare Kennzeichnung und Information verhindert rechtliche Probleme'
        ]
      }
    },
    {
      title: 'ESG-Datenverarbeitung und Reporting',
      description: 'Nachhaltigkeitsdaten müssen <Link to="/dsgvo-compliance" className="text-cyan-600 hover:text-cyan-700 underline">DSGVO-konform</Link> erhoben werden, besonders wenn sie Rückschlüsse auf Einzelpersonen zulassen',
      examples: ['Anonymisierte Verbrauchsdaten', 'Aggregierte CO2-Bilanzen', 'Datenschutzkonforme ESG-Reports', 'Pseudonymisierte Mobilitätsdaten'],
      risk: 'Mittel',
      fineExample: 'Noch keine Präzedenzfälle, aber hohes Risiko',
      implementation: {
        requirements: [
          'Klare Trennung zwischen technischen und personenbezogenen ESG-Daten',
          'Transparente Information über ESG-Datenerhebung',
          'Rechtsgrundlage für personenbezogene Nachhaltigkeitsdaten',
          'Anonymisierung vor der Weitergabe an ESG-Ratingagenturen'
        ],
        template: `
// ESG Data Privacy Compliance
const esgDataProcessing = {
  dataCategories: {
    technical: {
      energyConsumption: 'building_level_only',
      waterUsage: 'aggregated_per_floor',
      wasteManagement: 'total_building_metrics',
      carbonFootprint: 'anonymized_calculations'
    },
    
    personal: {
      mobilityPatterns: {
        processing: 'pseudonymized_only',
        retention: 'max_90_days',
        purpose: 'commute_optimization',
        legalBasis: 'legitimate_interest_with_opt_out'
      },
      
      homeOfficeData: {
        processing: 'voluntary_self_reporting',
        aggregation: 'department_level_minimum',
        consent: 'explicit_opt_in_required'
      }
    }
  },
  
  reportingCompliance: {
    internalReporting: 'full_transparency_to_stakeholders',
    externalReporting: 'anonymized_aggregates_only',
    certificationBodies: 'pseudonymized_with_agreements',
    publicDisclosure: 'statistical_data_only'
  }
};
        `
      }
    }
  ];

  const iotSecurityMeasures = [
    {
      scenario: 'Umfassende IoT-Sensor-Infrastruktur',
      challenge: 'Tausende Sensoren sammeln kontinuierlich Daten über Gebäudenutzung',
      solution: 'Edge Computing mit dezentraler Datenverarbeitung',
      implementation: {
        architecture: [
          'Lokale Datenverarbeitung direkt am Sensor',
          'Nur aggregierte Daten an zentrale Systeme',
          'Ende-zu-Ende Verschlüsselung aller Übertragungen',
          'Regelmäßige Security-Updates Over-the-Air'
        ],
        technical: `
// IoT Security Architecture
const iotSecurityFramework = {
  edgeProcessing: {
    sensorLevel: {
      dataCollection: 'raw_sensor_data',
      localProcessing: 'anonymization_at_source',
      encryption: 'AES-256-GCM',
      transmission: 'only_processed_metrics'
    },
    
    gatewayLevel: {
      aggregation: 'multi_sensor_correlation',
      filtering: 'pii_removal_before_cloud',
      caching: 'temporary_buffer_only',
      security: 'hardware_security_module'
    }
  },
  
  networkSecurity: {
    segmentation: {
      iot_vlan: 'isolated_sensor_network',
      management_vlan: 'separate_admin_access',
      data_vlan: 'encrypted_data_transport',
      dmz: 'external_api_access_only'
    },
    
    accessControl: {
      authentication: 'certificate_based_mutual_tls',
      authorization: 'role_based_with_least_privilege',
      monitoring: 'anomaly_detection_ml_based'
    }
  },
  
  updateManagement: {
    firmware: {
      signing: 'cryptographic_signature_verification',
      delivery: 'secure_ota_with_rollback',
      testing: 'staged_rollout_with_monitoring'
    }
  }
};
        `
      }
    },
    {
      scenario: 'Smart Metering und Verbrauchsanalyse',
      challenge: 'Detaillierte Verbrauchsdaten können Rückschlüsse auf Lebensgewohnheiten zulassen',
      solution: 'Granulare Datenschutzeinstellungen mit Nutzerkontrollen',
      implementation: {
        privacy_levels: [
          'Basis: Monatliche Gesamtverbräuche',
          'Standard: Tägliche aggregierte Werte',
          'Erweitert: Stündliche Daten (Opt-In)',
          'Detailliert: Echtzeitdaten (explizite Zustimmung)'
        ],
        technical: `
// Smart Metering Privacy Controls
const smartMeteringPrivacy = {
  dataGranularity: {
    basic: {
      resolution: 'monthly_totals_only',
      storage: 'aggregated_locally',
      sharing: 'utility_billing_only',
      retention: '24_months'
    },
    
    standard: {
      resolution: 'daily_aggregates',
      storage: 'pseudonymized_cloud',
      sharing: 'energy_optimization_tips',
      retention: '12_months',
      consent: 'implicit_with_opt_out'
    },
    
    advanced: {
      resolution: 'hourly_patterns',
      storage: 'encrypted_user_controlled',
      sharing: 'personalized_recommendations',
      retention: 'user_defined',
      consent: 'explicit_opt_in_required'
    },
    
    realtime: {
      resolution: '15_minute_intervals',
      storage: 'local_device_only',
      sharing: 'user_initiated_only',
      retention: '7_days_rolling',
      consent: 'granular_purpose_specific'
    }
  },
  
  privacyEnhancingTech: {
    differential_privacy: 'noise_injection_for_aggregates',
    homomorphic_encryption: 'computation_on_encrypted_data',
    secure_multiparty: 'collaborative_analysis_without_sharing'
  }
};
        `
      }
    }
  ];

  const tenantPrivacyMeasures = [
    {
      category: 'Digitale Mieterkommunikation',
      icon: Mail,
      measures: [
        'Ende-zu-Ende verschlüsselte Kommunikationsplattform',
        'Datenschutzkonforme Mieter-Apps',
        'Sichere Dokumentenverwaltung',
        'Anonyme Feedback-Kanäle'
      ],
      propTechSpecific: 'Mieterportale, Schadensmeldungen, Nebenkostenabrechnungen, Community-Features',
      iso27001: 'A.13.2.1 - Informationsübertragung',
      practicalImplementation: {
        title: 'Privacy-First Mieterplattform',
        description: 'Vollständig <Link to="/dsgvo-compliance" className="text-cyan-600 hover:text-cyan-700 underline">DSGVO-konforme</Link> digitale Services für moderne Mietverhältnisse',
        features: [
          {
            name: '📱 Mieter-App',
            function: 'Zentrale Kommunikation und Services',
            privacy: 'Verschlüsselte Chats, keine Metadaten-Analyse',
            benefit: 'Schnelle Kommunikation ohne Datenschutzrisiken'
          },
          {
            name: '📄 Dokumenten-Safe',
            function: 'Sichere Ablage aller Mietunterlagen',
            privacy: 'Client-seitige Verschlüsselung',
            benefit: 'Jederzeit Zugriff, volle Kontrolle'
          },
          {
            name: '🔧 Service-Requests',
            function: 'Digitale Schadensmeldungen',
            privacy: 'Minimale Datenerfassung, automatische Löschung',
            benefit: 'Schnelle Bearbeitung, transparenter Status'
          },
          {
            name: '👥 Community-Features',
            function: 'Nachbarschaftsvernetzung',
            privacy: 'Opt-In, Pseudonyme möglich',
            benefit: 'Gemeinschaft ohne Privatsphäreverlust'
          }
        ]
      }
    },
    {
      category: 'Automatisierte Verwaltungsprozesse',
      icon: Bot,
      measures: [
        'KI-gestützte Nebenkostenabrechnung mit Datenschutz',
        'Automatische Vertragsverarbeitung DSGVO-konform',
        'Predictive Maintenance ohne Bewegungsprofile',
        'Anonymisierte Marktanalysen'
      ],
      propTechSpecific: 'Mietpreisberechnung, Bonitätsprüfung, Vertragserstellung, Kündigungsmanagement',
      iso27001: 'A.12.1.1 - Dokumentierte Betriebsverfahren',
      practicalImplementation: {
        title: 'Intelligente Prozessautomatisierung',
        description: 'KI-Unterstützung bei voller DSGVO-Compliance',
        processes: [
          {
            name: '💰 Nebenkostenabrechnung',
            automation: 'ML-basierte Plausibilitätsprüfung',
            privacy: 'Verbrauchsdaten bleiben anonymisiert',
            accuracy: '99.8% Genauigkeit, 75% Zeitersparnis'
          },
          {
            name: '🏠 Mietpreisoptimierung',
            automation: 'Marktanalyse mit Differential Privacy',
            privacy: 'Keine individuellen Mieterdaten verwendet',
            fairness: 'Bias-freie Algorithmen, transparent dokumentiert'
          },
          {
            name: '🔍 Bonitätsprüfung',
            automation: 'Minimaldatenansatz, automatische Löschung',
            privacy: 'Nur notwendige Daten, verschlüsselte Übertragung',
            compliance: 'SCHUFA-Auskunft nur mit <Link to="/tools/consent-generator" className="text-cyan-600 hover:text-cyan-700 underline">rechtssicherer Einwilligung</Link>'
          },
          {
            name: '🛠️ Predictive Maintenance',
            automation: 'Sensorbasierte Wartungsvorhersage',
            privacy: 'Keine personenbezogenen Nutzungsmuster',
            efficiency: '40% weniger Ausfälle, keine Privacy-Verletzung'
          }
        ]
      }
    },
    {
      category: 'Zutrittssysteme und digitale Schlüssel',
      icon: Key,
      measures: [
        'Biometriefreie Zugangslösungen bevorzugen',
        'Temporäre Zugangscodes für Dienstleister',
        'Audit-Logs mit automatischer Pseudonymisierung',
        'Dezentrale Schlüsselverwaltung'
      ],
      propTechSpecific: 'Smart Locks, Mobile Keys, Besuchermanagement, Paketboxen',
      iso27001: 'A.9.1.2 - Zugang zu Netzen und Netzdiensten',
      practicalImplementation: {
        title: 'Privacy-by-Design Zutrittslösungen',
        description: 'Moderne Sicherheit ohne Überwachung',
        solutions: [
          {
            name: '🔑 Mobile Keys',
            technology: 'Bluetooth LE mit Rolling Codes',
            privacy: 'Keine zentrale Bewegungserfassung',
            convenience: 'Schlüssel teilen ohne Datenweitergabe'
          },
          {
            name: '📦 Smart Parcel Boxes',
            technology: 'Einmalcodes für Lieferanten',
            privacy: 'Automatische Code-Löschung nach Nutzung',
            security: 'Keine dauerhafte Zutrittsberechtigung'
          },
          {
            name: '🚪 Visitor Management',
            technology: 'QR-Codes mit Zeitbegrenzung',
            privacy: 'Minimale Besucherdaten, <Link to="/dsgvo-compliance" className="text-cyan-600 hover:text-cyan-700 underline">DSGVO-konform</Link>',
            efficiency: 'Kontaktloser Check-In, automatische Löschung'
          },
          {
            name: '📊 Access Analytics',
            technology: 'Aggregierte Nutzungsstatistiken',
            privacy: 'Keine individuellen Bewegungsprofile',
            insights: 'Optimierung ohne Privatsphäreverletzung'
          }
        ]
      }
    }
  ];

  const aiAutomationScenarios = [
    {
      scenario: 'KI-basierte Energieoptimierung',
      challenge: 'Machine Learning Modelle benötigen große Datenmengen für präzise Vorhersagen',
      solution: 'Federated Learning und Differential Privacy',
      riskLevel: 'Hoch',
      implementation: {
        approach: 'Dezentrales Training ohne zentrale Datenspeicherung',
        benefits: [
          '30% Energieeinsparung durch präzise Vorhersagen',
          'Keine Rohdaten verlassen das Gebäude',
          'Modelltraining auf verschlüsselten Daten',
          'Automatische Bias-Erkennung und -Korrektur'
        ],
        technical: `
// AI Privacy-Preserving Architecture
const aiEnergyOptimization = {
  federatedLearning: {
    localModel: {
      training: 'on_premise_edge_devices',
      data: 'never_leaves_building',
      updates: 'only_model_weights_shared',
      encryption: 'homomorphic_gradients'
    },
    
    globalModel: {
      aggregation: 'secure_averaging_protocol',
      validation: 'differential_privacy_applied',
      distribution: 'encrypted_model_updates',
      versioning: 'blockchain_audit_trail'
    }
  },
  
  privacyGuarantees: {
    epsilon: 1.0, // Differential privacy budget
    delta: 1e-5,  // Privacy loss probability
    noise_scale: 'adaptive_to_sensitivity',
    clipping_norm: 'gradient_bounded'
  },
  
  transparency: {
    explainability: 'shap_values_per_prediction',
    auditability: 'complete_decision_trail',
    contestability: 'human_override_always_possible',
    fairness: 'demographic_parity_monitored'
  }
};
        `
      }
    },
    {
      scenario: 'Intelligente Raumnutzungsanalyse',
      challenge: 'Workspace Analytics ohne Mitarbeiterüberwachung',
      solution: 'Privacy-preserving Analytics mit aggregierten Metriken',
      riskLevel: 'Kritisch',
      implementation: {
        approach: 'Anonymisierung am Sensor mit intelligenter Aggregation',
        benefits: [
          '45% bessere Raumauslastung',
          'Keine individuellen Bewegungsprofile',
          'Heatmaps ohne Personenbezug',
          'Opt-In für personalisierte Features'
        ],
        technical: `
// Workspace Analytics Privacy Framework
const workspaceAnalytics = {
  sensorProcessing: {
    raw_data: {
      capture: 'thermal_imaging_low_resolution',
      processing: 'edge_ai_people_counting',
      output: 'anonymous_occupancy_metrics',
      retention: 'none_raw_data_discarded'
    },
    
    analytics: {
      spatial: {
        heatmaps: 'gaussian_blur_applied',
        patterns: 'k_anonymity_minimum_5',
        temporal: 'hourly_aggregates_only'
      },
      
      insights: {
        utilization: 'space_efficiency_metrics',
        optimization: 'layout_recommendations',
        comfort: 'environmental_quality_index'
      }
    }
  },
  
  privacyControls: {
    user_preferences: {
      tracking_level: ['anonymous', 'pseudonymous', 'identified'],
      data_sharing: ['none', 'aggregated', 'detailed'],
      retention: ['session', 'day', 'week', 'month']
    },
    
    transparency: {
      dashboard: 'real_time_data_visibility',
      export: 'gdpr_data_portability',
      deletion: 'right_to_be_forgotten',
      correction: 'data_accuracy_controls'
    }
  }
};
        `
      }
    }
  ];

  const implementationRoadmap = [
    {
      phase: 'Assessment & Strategie',
      duration: '4-6 Wochen',
      color: 'blue',
      tasks: [
        'PropTech-Systemlandschaft analysieren',
        'DSGVO-Gap-Analyse für IoT/Smart Building',
        'Datenschutz-Folgenabschätzung (siehe <Link to="/dsgvo-compliance" className="text-cyan-600 hover:text-cyan-700 underline">DSGVO-Leitfaden</Link>)',
        'Stakeholder-Alignment (Mieter, Eigentümer, Dienstleister)',
        'Compliance-Roadmap erstellen'
      ],
      deliverables: ['PropTech Compliance Audit', 'DSFA Dokumentation', 'Umsetzungsplan']
    },
    {
      phase: 'Technische Härtung',
      duration: '8-10 Wochen',
      color: 'green',
      tasks: [
        'IoT-Security-Architektur implementieren',
        'Edge Computing Setup',
        'Verschlüsselung End-to-End',
        'Privacy-by-Design Integration',
        'Penetration Testing'
      ],
      deliverables: ['Secure IoT Infrastructure', 'Security Zertifikate', 'Test Reports']
    },
    {
      phase: 'Prozess-Integration',
      duration: '6-8 Wochen',
      color: 'orange',
      tasks: [
        'Mieter-Onboarding digitalisieren',
        'Consent Management implementieren (siehe <Link to="/tools/consent-generator" className="text-cyan-600 hover:text-cyan-700 underline">Consent Generator</Link>)',
        'Automatisierte Löschkonzepte',
        'Transparenz-Dashboard aufbauen',
        'Mitarbeiterschulungen'
      ],
      deliverables: ['Digital Processes', 'Training Materials', 'User Guides']
    },
    {
      phase: 'Launch & Optimization',
      duration: '4-6 Wochen',
      color: 'purple',
      tasks: [
        'Pilotphase mit ausgewählten Objekten',
        'Feedback-Integration',
        'Performance-Optimierung',
        'Compliance-Monitoring aktivieren',
        'Kontinuierliche Verbesserung'
      ],
      deliverables: ['Live System', 'KPI Dashboard', 'Optimization Report']
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
    const totalItems = 24; // Total number of checklist items
    return Math.round((checkedItems.size / totalItems) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <SEOHead 
        title="PropTech Compliance DSGVO - Smart Building Datenschutz"
        description="PropTech DSGVO-Guide: ✓ Smart Buildings ✓ IoT-Sicherheit ✓ Mieterdaten. Praxisleitfaden für digitale Immobilien. Jetzt lesen!"
        canonical="/wissen/branchen/proptech-compliance"
        keywords="PropTech Compliance, Smart Building DSGVO, IoT Immobilien, Mieterdaten Datenschutz, PropTech Datenschutz, Smart Home DSGVO, Gebäudeautomation Compliance"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Guide",
          "name": "PropTech Compliance Guide: DSGVO für Smart Buildings",
          "description": "Umfassender Compliance-Leitfaden für PropTech-Unternehmen mit Fokus auf Smart Buildings, IoT-Sicherheit und Mieterdatenschutz.",
          "audience": {
            "@type": "Audience",
            "audienceType": "PropTech Companies, Real Estate Tech, Smart Building Operators"
          },
          "keywords": "PropTech, Compliance, DSGVO, Smart Buildings, IoT, Datenschutz",
          "publisher": {
            "@type": "Organization",
            "name": "Marsstein",
            "url": "https://marsstein.com"
          },
          "datePublished": "2024-01-25",
          "dateModified": new Date().toISOString()
        }}
      />
      <Header />
      
      {/* Breadcrumb Navigation */}
      <div className="container px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/wissen">Wissen</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/wissen/branchen">Branchen</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>PropTech Compliance</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <main className="overflow-hidden">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400">
                    <Home className="h-4 w-4" />
                    <span className="text-sm font-medium">PropTech Compliance Excellence</span>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                    PropTech & Smart Buildings
                    <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent block mt-2">
                      DSGVO-Compliance Guide
                    </span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                    Meistern Sie die Datenschutz-Herausforderungen moderner Immobilientechnologie. 
                    Von IoT-Sensoren über KI-basierte Gebäudeautomation bis zu digitalen Mieterprozessen.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Privacy-by-Design für Smart Building Systeme</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>DSGVO-konforme IoT-Infrastruktur und Sensorik</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Datenschutz bei ESG-Reporting und Nachhaltigkeit</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=proptech">
                      <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:opacity-90 group min-h-[48px] px-6">
                        <Building className="mr-2 h-5 w-5" />
                        PropTech Demo buchen
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group min-h-[48px] px-6">
                      <Download className="mr-2 h-5 w-5" />
                      Smart Building Checkliste
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
                  <Card className="p-6 shadow-2xl border-2 border-cyan-200 dark:border-cyan-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">PropTech Compliance Center</h3>
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
                    className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-cyan-500"
                  >
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-cyan-500 animate-pulse" />
                      <span className="text-sm font-medium">Smart Compliant</span>
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
                      "flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap min-h-[48px]",
                      activeSection === item.id
                        ? "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800"
                        : "hover:bg-cyan-50 dark:hover:bg-cyan-950/30 hover:text-cyan-700 dark:hover:text-cyan-400",
                      "border",
                      activeSection === item.id
                        ? "border-cyan-200 dark:border-cyan-800"
                        : "border-transparent hover:border-cyan-200 dark:hover:border-cyan-800"
                    )}
                  >
                    <item.icon className={cn(
                      "h-4 w-4",
                      activeSection === item.id && "text-cyan-600 dark:text-cyan-500"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      activeSection === item.id && "text-cyan-700 dark:text-cyan-400"
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
              <section id="overview" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  PropTech Compliance Überblick
                </motion.h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-6 w-6 text-cyan-600" />
                          Smart Building Datenschutz
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Moderne Gebäudetechnologie sammelt kontinuierlich Daten. Die Herausforderung: 
                          Effizienz und Komfort maximieren, ohne die Privatsphäre zu verletzen. 
                          Ähnlich wie bei der <Link to="/dsgvo-compliance" className="text-cyan-600 hover:text-cyan-700 underline">DSGVO-Compliance</Link> 
                          müssen auch hier strenge Datenschutzstandards eingehalten werden.
                        </p>
                        
                        <div className="space-y-3">
                          {[
                            'Privacy-by-Design von der Planung bis zum Betrieb',
                            'Minimale Datenerfassung bei maximaler Funktionalität',
                            'Transparente Information aller Gebäudenutzer',
                            'Sichere IoT-Infrastruktur gegen Cyberangriffe'
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg border border-cyan-200">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="h-4 w-4 text-cyan-600" />
                            <span className="font-semibold text-cyan-800 dark:text-cyan-400">
                              PropTech-Risiko
                            </span>
                          </div>
                          <p className="text-sm text-cyan-700 dark:text-cyan-300">
                            Tausende IoT-Sensoren = Tausende potenzielle Datenlecks. Proaktiver Schutz ist essentiell.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <BrainCircuit className="h-6 w-6 text-purple-600" />
                          KI & Automation Compliance
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Künstliche Intelligenz revolutioniert die Gebäudeverwaltung - 
                          aber nur mit rechtskonformen und ethischen Algorithmen. 
                          Die Compliance-Anforderungen ähneln denen in anderen Branchen wie 
                          <Link to="/wissen/branchen/insurtech-compliance" className="text-cyan-600 hover:text-cyan-700 underline">InsurTech</Link> oder 
                          <Link to="/wissen/branchen/travel-compliance" className="text-cyan-600 hover:text-cyan-700 underline">Travel</Link>.
                        </p>
                        
                        <div className="space-y-3">
                          {[
                            'Transparente und erklärbare KI-Entscheidungen',
                            'Bias-freie Algorithmen für faire Behandlung', 
                            'Federated Learning ohne zentrale Datenspeicherung',
                            'Human-in-the-Loop für kritische Entscheidungen'
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <BrainCircuit className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="h-4 w-4 text-purple-600" />
                            <span className="font-semibold text-purple-800 dark:text-purple-400">
                              Best Practice
                            </span>
                          </div>
                          <p className="text-sm text-purple-700 dark:text-purple-300">
                            Edge AI: Intelligenz direkt am Sensor verhindert Datenschutzprobleme
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Smart Building Section */}
              <section id="smart-building" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Smart Building Compliance
                </motion.h2>
                  <div className="space-y-8">
                    {smartBuildingRequirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="border-l-4 border-cyan-500">
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
                                  <Euro className="h-4 w-4 text-red-600" />
                                  Bußgeldrisiko
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
                                  onClick={() => setExpandedSection(expandedSection === `scenario-${index}` ? null : `scenario-${index}`)}
                                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                                >
                                  <Lightbulb className="h-4 w-4" />
                                  Praxis-Szenario anzeigen
                                  <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                    expandedSection === `scenario-${index}` && "rotate-180")} />
                                </button>
                                
                                {expandedSection === `scenario-${index}` && (
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
                                                  <div key={moduleIndex} className="p-3 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg">
                                                    <div className="font-medium text-cyan-900 dark:text-cyan-100 text-sm mb-1">
                                                      {module.name}
                                                    </div>
                                                    <div className="text-xs text-cyan-700 dark:text-cyan-300 mb-2">
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
                                                    {module.technology && (
                                                      <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                                                        Tech: {module.technology}
                                                      </div>
                                                    )}
                                                    {module.privacy && (
                                                      <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                                                        Privacy: {module.privacy}
                                                      </div>
                                                    )}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.layers && (
                                              <div className="space-y-3">
                                                {step.layers.map((layer, layerIndex) => (
                                                  <div key={layerIndex} className="border-l-4 border-cyan-500 pl-4">
                                                    <div className="font-medium text-sm">{layer.level}</div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400">{layer.protection}</div>
                                                    <div className="text-xs text-green-600">Benefit: {layer.benefit}</div>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.features && (
                                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {step.features.map((feature, featureIndex) => (
                                                  <div key={featureIndex} className="flex items-start gap-2 text-sm">
                                                    <Smartphone className="h-3 w-3 text-purple-600 mt-1 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.zones && (
                                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {step.zones.map((zone, zoneIndex) => (
                                                  <div key={zoneIndex} className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                                                    <div className="font-medium text-sm mb-1">{zone.area}</div>
                                                    <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">Tech: {zone.technology}</div>
                                                    <div className="text-xs text-orange-600 dark:text-orange-400 mb-1">Speicherung: {zone.retention}</div>
                                                    <div className="text-xs text-green-600 dark:text-green-400">Privacy: {zone.privacy}</div>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.controls && (
                                              <div className="space-y-2">
                                                {step.controls.map((control, controlIndex) => (
                                                  <div key={controlIndex} className="flex items-start gap-2 text-sm">
                                                    <Shield className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                                                    <span>{control}</span>
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
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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
                              <div>
                                <button
                                  onClick={() => setExpandedSection(expandedSection === `impl-${index}` ? null : `impl-${index}`)}
                                  className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
                                >
                                  <Code className="h-4 w-4" />
                                  Technische Implementation
                                  <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                    expandedSection === `impl-${index}` && "rotate-180")} />
                                </button>
                                
                                {expandedSection === `impl-${index}` && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mt-4"
                                  >
                                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                      <pre className="text-green-400 text-xs">
                                        {requirement.implementation.template}
                                      </pre>
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

              {/* IoT Security Section */}
              <section id="iot-security" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  IoT-Sicherheit & Sensorik
                </motion.h2>
                  <div className="space-y-8">
                    {iotSecurityMeasures.map((measure, index) => (
                      <Card key={index} className="p-6">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Cpu className="h-6 w-6 text-blue-600" />
                            {measure.scenario}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 text-red-700">Herausforderung</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {measure.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-green-700">Lösung</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {measure.solution}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-blue-700">Architektur</h4>
                              <div className="space-y-2">
                                {measure.implementation.architecture?.map((arch, i) => (
                                  <div key={i} className="text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                                    {arch}
                                  </div>
                                )) || measure.implementation.privacy_levels?.map((level, i) => (
                                  <div key={i} className="text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                                    {level}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <button
                              onClick={() => setExpandedSection(expandedSection === `iot-${index}` ? null : `iot-${index}`)}
                              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code className="h-4 w-4" />
                              Technische Implementation
                              <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                expandedSection === `iot-${index}` && "rotate-180")} />
                            </button>
                            
                            {expandedSection === `iot-${index}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4"
                              >
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre className="text-green-400 text-xs">
                                    {measure.implementation.technical}
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

              {/* Tenant Privacy Section */}
              <section id="tenant-privacy" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Mieterdaten-Schutz & Digitale Services
                </motion.h2>
                  <div className="space-y-8">
                    {tenantPrivacyMeasures.map((measure, index) => (
                      <Card key={index} className="p-6">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <measure.icon className="h-6 w-6 text-teal-600" />
                            {measure.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Schutzmaßnahmen</h4>
                              <div className="space-y-2">
                                {measure.measures.map((m, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{m}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">PropTech-spezifisch</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 p-3 bg-teal-50 dark:bg-teal-950/30 rounded-lg">
                                {measure.propTechSpecific}
                              </p>
                              <div className="mt-3">
                                <Badge variant="outline" className="text-xs">
                                  {measure.iso27001}
                                </Badge>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Praktische Umsetzung</h4>
                              <div className="bg-cyan-50 dark:bg-cyan-950/30 rounded-lg p-4 border border-cyan-200">
                                <div className="space-y-3">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Shield className="h-4 w-4 text-cyan-600" />
                                    <span className="font-medium text-cyan-800 dark:text-cyan-200">{measure.practicalImplementation.title}</span>
                                  </div>
                                  <div className="text-sm text-cyan-700 dark:text-cyan-300 mb-3">
                                    {measure.practicalImplementation.description}
                                  </div>
                                  {measure.practicalImplementation.features && (
                                    <div className="grid grid-cols-1 gap-3">
                                      {measure.practicalImplementation.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="p-3 bg-white dark:bg-gray-800 rounded border">
                                          <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                            {feature.name}
                                          </div>
                                          <div className="text-xs text-cyan-600 dark:text-cyan-400 mb-1">
                                            {feature.function}
                                          </div>
                                          <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                            Privacy: {feature.privacy}
                                          </div>
                                          <div className="text-xs text-green-600 dark:text-green-400">
                                            {feature.benefit}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  {measure.practicalImplementation.processes && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                      {measure.practicalImplementation.processes.map((process, processIndex) => (
                                        <div key={processIndex} className="p-3 bg-white dark:bg-gray-800 rounded border">
                                          <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                            {process.name}
                                          </div>
                                          <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
                                            {process.automation}
                                          </div>
                                          <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                            Privacy: {process.privacy}
                                          </div>
                                          <div className="text-xs text-green-600 dark:text-green-400">
                                            {process.accuracy || process.fairness || process.compliance || process.efficiency}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  {measure.practicalImplementation.solutions && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                      {measure.practicalImplementation.solutions.map((solution, solutionIndex) => (
                                        <div key={solutionIndex} className="p-3 bg-white dark:bg-gray-800 rounded border">
                                          <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                            {solution.name}
                                          </div>
                                          <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
                                            Tech: {solution.technology}
                                          </div>
                                          <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                            Privacy: {solution.privacy}
                                          </div>
                                          <div className="text-xs text-green-600 dark:text-green-400">
                                            {solution.convenience || solution.security || solution.efficiency || solution.insights}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
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

              {/* AI & Automation Section */}
              <section id="ai-automation" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  KI & Automation im PropTech
                </motion.h2>
                  <div className="space-y-8">
                    {aiAutomationScenarios.map((scenario, index) => (
                      <Card key={index} className="p-6">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="flex items-center gap-2">
                              <BrainCircuit className="h-6 w-6 text-purple-600" />
                              {scenario.scenario}
                            </CardTitle>
                            <Badge 
                              variant={scenario.riskLevel === 'Kritisch' ? 'destructive' : 'secondary'}
                            >
                              {scenario.riskLevel} Risiko
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 text-red-700">Herausforderung</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {scenario.challenge}
                              </p>
                              <h4 className="font-semibold mb-3 text-green-700">Lösung</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {scenario.solution}
                              </p>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3 text-blue-700">Benefits</h4>
                              <div className="space-y-2">
                                {scenario.implementation.benefits.map((benefit, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <button
                              onClick={() => setExpandedSection(expandedSection === `ai-${index}` ? null : `ai-${index}`)}
                              className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
                            >
                              <Code className="h-4 w-4" />
                              Technische Implementation
                              <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                expandedSection === `ai-${index}` && "rotate-180")} />
                            </button>
                            
                            {expandedSection === `ai-${index}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4"
                              >
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre className="text-green-400 text-xs">
                                    {scenario.implementation.technical}
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

              {/* Implementation Section */}
              <section id="implementation" className="space-y-8 scroll-mt-32">
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
                        Interaktive PropTech Compliance-Checkliste
                      </CardTitle>
                      <div className="text-sm text-gray-600">
                        Fortschritt: {getCompletionPercentage()}% abgeschlossen
                      </div>
                      <Progress value={getCompletionPercentage()} className="h-2" />
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {[
                        {
                          category: 'Smart Building Grundlagen',
                          items: [
                            'Privacy-by-Design Konzept erstellt',
                            'IoT-Sicherheitsarchitektur definiert',
                            'Datenschutz-Folgenabschätzung durchgeführt',
                            'Sensor-Inventar und Datenflüsse dokumentiert'
                          ]
                        },
                        {
                          category: 'Technische Sicherheit', 
                          items: [
                            'Edge Computing implementiert',
                            'Ende-zu-Ende Verschlüsselung aktiv',
                            'Netzwerksegmentierung umgesetzt',
                            'Security Monitoring eingerichtet'
                          ]
                        },
                        {
                          category: 'Mieter & Nutzer',
                          items: [
                            'Transparenz-Dashboard verfügbar',
                            'Consent Management integriert (mit <Link to="/tools/consent-generator" className="text-cyan-600 hover:text-cyan-700 underline">Consent Generator</Link>)',
                            'Datenschutzerklärung aktualisiert',
                            'Nutzer-Schulungen durchgeführt'
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
                <Card className="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
                  <CardContent className="relative p-8 md:p-12 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <Building className="h-16 w-16 mx-auto mb-6 text-white" />
                      </motion.div>
                      
                      <h2 className="text-2xl md:text-4xl font-bold">
                        Machen Sie Ihre Immobilien smart & compliant
                      </h2>
                      <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Profitieren Sie von unserer Expertise in PropTech Compliance. 
                        Von IoT-Security über Privacy-by-Design bis zu KI-gestützter Gebäudeautomation.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact?demo=true&industry=proptech">
                          <Button 
                            size="lg" 
                            className="bg-white text-cyan-600 hover:bg-gray-100 group shadow-lg"
                          >
                            <Building className="mr-2 h-5 w-5" />
                            Kostenlose PropTech-Beratung
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="bg-transparent text-white border-white hover:bg-white/10"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Smart Building Compliance Guide (PDF)
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        {[
                          { icon: Building, title: 'PropTech-Expertise', subtitle: 'Spezialisiert auf Smart Buildings' },
                          { icon: Shield, title: 'Privacy-by-Design', subtitle: 'Datenschutz von Anfang an' },
                          { icon: Award, title: 'ISO 27001 Certified', subtitle: 'Höchste Sicherheitsstandards' }
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
                    <ExternalLink className="h-5 w-5 text-cyan-600" />
                    Weiterführende PropTech-Ressourcen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link to="/wissen/technologie/iot-security" className="block group">
                      <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors group-hover:shadow-md">
                        <Cpu className="h-5 w-5 text-cyan-600 mb-2" />
                        <div className="font-medium">IoT Security Guide</div>
                        <div className="text-sm text-gray-600">Sicherheit für Smart Devices</div>
                      </div>
                    </Link>
                    <Link to="/wissen/compliance/eu-ai-act" className="block group">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group-hover:shadow-md">
                        <BrainCircuit className="h-5 w-5 text-purple-600 mb-2" />
                        <div className="font-medium">EU AI Act</div>
                        <div className="text-sm text-gray-600">KI-Compliance für Buildings</div>
                      </div>
                    </Link>
                    <Link to="/wissen/technologie/edge-computing" className="block group">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-md">
                        <Network className="h-5 w-5 text-green-600 mb-2" />
                        <div className="font-medium">Edge Computing</div>
                        <div className="text-sm text-gray-600">Dezentrale Datenverarbeitung</div>
                      </div>
                    </Link>
                    <Link to="/branchen/immobilien" className="block group">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md">
                        <Home className="h-5 w-5 text-blue-600 mb-2" />
                        <div className="font-medium">Immobilien Solutions</div>
                        <div className="text-sm text-gray-600">Unsere PropTech-Produkte</div>
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

export default PropTechCompliance;