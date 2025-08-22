import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { B as Breadcrumb, a as BreadcrumbList, b as BreadcrumbItem, c as BreadcrumbLink, d as BreadcrumbSeparator, e as BreadcrumbPage } from "./breadcrumb-DSl7nM0Z.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Home, CheckCircle2, Building, ArrowRight, Download, Cpu, UserCheck, BrainCircuit, Construction, Shield, AlertTriangle, Lightbulb, FileText, Euro, ChevronDown, Smartphone, Target, Star, Code, Mail, Bot, Key, Clock, CheckSquare, Square, Award, ExternalLink, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "react-helmet-async";
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
const PropTechCompliance = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [activeSection, setActiveSection] = useState("overview");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const navigationItems = [
    { id: "overview", label: "Überblick", icon: Home },
    { id: "smart-building", label: "Smart Building Compliance", icon: Building },
    { id: "iot-security", label: "IoT & Sensorik", icon: Cpu },
    { id: "tenant-privacy", label: "Mieterdaten-Schutz", icon: UserCheck },
    { id: "ai-automation", label: "KI & Automation", icon: BrainCircuit },
    { id: "implementation", label: "Praxis-Umsetzung", icon: Construction }
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
    { label: "Smart Building DSGVO", value: 96, color: "text-cyan-600", trend: "+8%" },
    { label: "IoT Security Standards", value: 94, color: "text-blue-600", trend: "+12%" },
    { label: "Mieterdaten-Schutz", value: 98, color: "text-teal-600", trend: "+5%" },
    { label: "AI-Compliance Score", value: 92, color: "text-purple-600", trend: "+15%" },
    { label: "ESG Integration", value: 89, color: "text-green-600", trend: "+10%" },
    { label: "Audit Readiness", value: 95, color: "text-indigo-600", trend: "+7%" }
  ];
  const smartBuildingRequirements = [
    {
      title: "Datenminimierung in Smart Buildings",
      description: "Nur die für den jeweiligen Zweck erforderlichen Daten dürfen erhoben werden - keine präventive Vollüberwachung",
      examples: ["Bewegungssensoren statt Kameras in Gemeinschaftsräumen", "Anonymisierte Heatmaps statt personenbezogener Tracking", "Aggregierte Energiedaten statt Einzelverbrauch", "Presence Detection ohne Identifikation"],
      risk: "Hoch",
      fineExample: "Bis zu 20 Mio. € bei systematischen Verstößen",
      realWorldScenario: {
        title: "🏢 Praxis-Szenario: Smart Office Implementation",
        context: "Ein modernes Bürogebäude mit 5.000 Arbeitsplätzen will ein umfassendes Smart Building System implementieren, das Energieeffizienz, Raumnutzung und Mitarbeiterkomfort optimiert.",
        challenge: "Wie können wertvolle Gebäudedaten gesammelt werden, ohne die Privatsphäre der Mitarbeiter zu verletzen?",
        solution: {
          step1: {
            title: "📊 Privacy-by-Design Architektur",
            description: "Implementierung eines mehrstufigen Datenschutzkonzepts mit klarer Trennung zwischen technischen und personenbezogenen Daten",
            modules: [
              {
                name: "Anonyme Präsenzerkennung",
                purpose: "Raumauslastung optimieren",
                dataTypes: "Anzahl Personen, Bewegungsmuster (anonymisiert)",
                technology: "Infrarot-Sensoren, keine Kameras"
              },
              {
                name: "Smart Energy Management",
                purpose: "Energieeffizienz steigern",
                dataTypes: "Aggregierte Verbrauchsdaten pro Etage",
                benefit: "32% Energieeinsparung ohne Einzeltracking"
              },
              {
                name: "Intelligent Workplace",
                purpose: "Arbeitsplatzoptimierung",
                dataTypes: "Desk-Booking mit Pseudonymisierung",
                privacy: "Keine Bewegungsprofile möglich"
              }
            ]
          },
          step2: {
            title: "🔒 Technische Schutzmaßnahmen",
            description: "Umfassende Sicherheitsarchitektur für alle IoT-Komponenten",
            layers: [
              {
                level: "Sensor-Ebene",
                protection: "Edge Computing mit lokaler Anonymisierung",
                benefit: "Rohdaten verlassen nie den Sensor"
              },
              {
                level: "Netzwerk-Ebene",
                protection: "Segregierte VLANs für Building Automation",
                benefit: "Isolation von Office-IT und Gebäudetechnik"
              },
              {
                level: "Platform-Ebene",
                protection: "Zero-Trust Architecture mit Mikrosegmentierung",
                benefit: "Minimale Angriffsfläche bei Kompromittierung"
              }
            ]
          },
          step3: {
            title: "📱 Nutzer-Transparenz und Kontrolle",
            description: "Mitarbeiter-App mit vollständiger Dateneinsicht und Kontrollmöglichkeiten",
            features: [
              "Live-Dashboard aller erfassten Daten pro Arbeitsplatz",
              "Opt-Out Möglichkeit für nicht-essenzielle Services",
              "Anonymisierungsgrad selbst wählbar",
              "Datenexport und Löschfunktion jederzeit verfügbar"
            ]
          }
        },
        outcome: {
          buildingBenefit: "35% Energieeinsparung und optimierte Raumnutzung",
          employeeBenefit: "Volle Transparenz und Kontrolle über persönliche Daten",
          complianceLevel: "100% DSGVO-konform mit Privacy-by-Design"
        },
        keyLearnings: [
          "Anonymisierung direkt am Sensor reduziert Datenschutzrisiken um 89%",
          "Transparenz-Dashboard erhöht Akzeptanz bei Mitarbeitern um 67%",
          "Edge Computing vermeidet zentrale Datenspeicherung sensibler Informationen",
          "Opt-In statt Opt-Out für erweiterte Features steigert Vertrauen"
        ]
      }
    },
    {
      title: "Videoüberwachung und Access Control",
      description: "Strenge Anforderungen an Videoüberwachung in und um Immobilien - berechtigtes Interesse muss nachgewiesen werden",
      examples: ["Eingangsbereiche mit Hinweisschildern", "Zeitlich begrenzte Speicherung (max. 72h)", "Keine Dauerüberwachung von Mietern", "Gesichtsunkenntlichmachung in Gemeinschaftsbereichen"],
      risk: "Kritisch",
      fineExample: "LG München: 1,1 Mio. € für illegale Mitarbeiterüberwachung",
      realWorldScenario: {
        title: "🏠 Praxis-Szenario: Intelligente Zugangskontrolle im Wohnkomplex",
        context: "Ein Premium-Wohnkomplex mit 200 Einheiten möchte ein modernes Sicherheitssystem mit Gesichtserkennung, digitalen Schlüsseln und Besuchermanagement implementieren.",
        challenge: "Wie kann hohe Sicherheit gewährleistet werden, ohne das Recht auf Privatsphäre der Bewohner zu verletzen?",
        solution: {
          step1: {
            title: "🚪 Mehrstufiges Zugangskonzept",
            description: "Verschiedene Sicherheitslevel mit angepassten Datenschutzmaßnahmen",
            zones: [
              {
                area: "Haupteingang",
                technology: "Intercom mit temporärer Videoaufzeichnung",
                retention: "Max. 24h, automatische Löschung",
                privacy: "Nur bei konkretem Sicherheitsvorfall abrufbar"
              },
              {
                area: "Tiefgarage",
                technology: "Kennzeichenerkennung mit Hashing",
                retention: "Nur Ein-/Ausfahrtszeiten, keine Bewegungsprofile",
                privacy: "Automatische Pseudonymisierung nach 7 Tagen"
              },
              {
                area: "Wohnbereiche",
                technology: "Digitale Schlüssel ohne Tracking",
                retention: "Keine Bewegungsdaten, nur Berechtigungsprüfung",
                privacy: "Dezentrale Verarbeitung am Türschloss"
              }
            ]
          },
          step2: {
            title: "📹 Datenschutzkonforme Videoüberwachung",
            description: "Innovative Technologien für Sicherheit ohne Totalüberwachung",
            features: [
              {
                name: "AI-basierte Anomalieerkennung",
                function: "Erkennt ungewöhnliche Situationen ohne Personenidentifikation",
                privacy: "Personen werden als anonyme Objekte verarbeitet"
              },
              {
                name: "Privacy Masking",
                function: "Automatische Verpixelung von Gesichtern und Fenstern",
                privacy: "Nur autorisiertes Personal kann bei Bedarf demaskieren"
              },
              {
                name: "Event-basierte Aufzeichnung",
                function: "Aufnahme nur bei definierten Sicherheitsereignissen",
                privacy: "Reduziert Datenmenge um 95%"
              }
            ]
          },
          step3: {
            title: "🔐 Bewohner-Empowerment",
            description: "Volle Kontrolle und Transparenz für alle Bewohner",
            controls: [
              "Persönliches Privacy-Dashboard in der Bewohner-App",
              "Einsicht in alle gespeicherten Daten auf Knopfdruck",
              "Individuell einstellbare Datenschutzpräferenzen",
              "Monatlicher Transparenzbericht über Systemnutzung"
            ]
          }
        },
        outcome: {
          securityBenefit: "Reduzierung von Einbrüchen um 78%",
          privacyBenefit: "Keine anlasslose Massenüberwachung",
          residentSatisfaction: "92% Zufriedenheit mit Privacy-First Ansatz"
        },
        keyLearnings: [
          "Privacy Masking ermöglicht Sicherheit ohne Totalüberwachung",
          "Transparenz schafft Vertrauen - 87% nutzen das Privacy-Dashboard",
          "Event-basierte Aufzeichnung reduziert Speicherbedarf und Datenschutzrisiken",
          "Klare Kennzeichnung und Information verhindert rechtliche Probleme"
        ]
      }
    },
    {
      title: "ESG-Datenverarbeitung und Reporting",
      description: 'Nachhaltigkeitsdaten müssen <Link to="/dsgvo-compliance" className="text-cyan-600 hover:text-cyan-700 underline">DSGVO-konform</Link> erhoben werden, besonders wenn sie Rückschlüsse auf Einzelpersonen zulassen',
      examples: ["Anonymisierte Verbrauchsdaten", "Aggregierte CO2-Bilanzen", "Datenschutzkonforme ESG-Reports", "Pseudonymisierte Mobilitätsdaten"],
      risk: "Mittel",
      fineExample: "Noch keine Präzedenzfälle, aber hohes Risiko",
      implementation: {
        requirements: [
          "Klare Trennung zwischen technischen und personenbezogenen ESG-Daten",
          "Transparente Information über ESG-Datenerhebung",
          "Rechtsgrundlage für personenbezogene Nachhaltigkeitsdaten",
          "Anonymisierung vor der Weitergabe an ESG-Ratingagenturen"
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
      scenario: "Umfassende IoT-Sensor-Infrastruktur",
      challenge: "Tausende Sensoren sammeln kontinuierlich Daten über Gebäudenutzung",
      solution: "Edge Computing mit dezentraler Datenverarbeitung",
      implementation: {
        architecture: [
          "Lokale Datenverarbeitung direkt am Sensor",
          "Nur aggregierte Daten an zentrale Systeme",
          "Ende-zu-Ende Verschlüsselung aller Übertragungen",
          "Regelmäßige Security-Updates Over-the-Air"
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
      scenario: "Smart Metering und Verbrauchsanalyse",
      challenge: "Detaillierte Verbrauchsdaten können Rückschlüsse auf Lebensgewohnheiten zulassen",
      solution: "Granulare Datenschutzeinstellungen mit Nutzerkontrollen",
      implementation: {
        privacy_levels: [
          "Basis: Monatliche Gesamtverbräuche",
          "Standard: Tägliche aggregierte Werte",
          "Erweitert: Stündliche Daten (Opt-In)",
          "Detailliert: Echtzeitdaten (explizite Zustimmung)"
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
      category: "Digitale Mieterkommunikation",
      icon: Mail,
      measures: [
        "Ende-zu-Ende verschlüsselte Kommunikationsplattform",
        "Datenschutzkonforme Mieter-Apps",
        "Sichere Dokumentenverwaltung",
        "Anonyme Feedback-Kanäle"
      ],
      propTechSpecific: "Mieterportale, Schadensmeldungen, Nebenkostenabrechnungen, Community-Features",
      iso27001: "A.13.2.1 - Informationsübertragung",
      practicalImplementation: {
        title: "Privacy-First Mieterplattform",
        description: 'Vollständig <Link to="/dsgvo-compliance" className="text-cyan-600 hover:text-cyan-700 underline">DSGVO-konforme</Link> digitale Services für moderne Mietverhältnisse',
        features: [
          {
            name: "📱 Mieter-App",
            function: "Zentrale Kommunikation und Services",
            privacy: "Verschlüsselte Chats, keine Metadaten-Analyse",
            benefit: "Schnelle Kommunikation ohne Datenschutzrisiken"
          },
          {
            name: "📄 Dokumenten-Safe",
            function: "Sichere Ablage aller Mietunterlagen",
            privacy: "Client-seitige Verschlüsselung",
            benefit: "Jederzeit Zugriff, volle Kontrolle"
          },
          {
            name: "🔧 Service-Requests",
            function: "Digitale Schadensmeldungen",
            privacy: "Minimale Datenerfassung, automatische Löschung",
            benefit: "Schnelle Bearbeitung, transparenter Status"
          },
          {
            name: "👥 Community-Features",
            function: "Nachbarschaftsvernetzung",
            privacy: "Opt-In, Pseudonyme möglich",
            benefit: "Gemeinschaft ohne Privatsphäreverlust"
          }
        ]
      }
    },
    {
      category: "Automatisierte Verwaltungsprozesse",
      icon: Bot,
      measures: [
        "KI-gestützte Nebenkostenabrechnung mit Datenschutz",
        "Automatische Vertragsverarbeitung DSGVO-konform",
        "Predictive Maintenance ohne Bewegungsprofile",
        "Anonymisierte Marktanalysen"
      ],
      propTechSpecific: "Mietpreisberechnung, Bonitätsprüfung, Vertragserstellung, Kündigungsmanagement",
      iso27001: "A.12.1.1 - Dokumentierte Betriebsverfahren",
      practicalImplementation: {
        title: "Intelligente Prozessautomatisierung",
        description: "KI-Unterstützung bei voller DSGVO-Compliance",
        processes: [
          {
            name: "💰 Nebenkostenabrechnung",
            automation: "ML-basierte Plausibilitätsprüfung",
            privacy: "Verbrauchsdaten bleiben anonymisiert",
            accuracy: "99.8% Genauigkeit, 75% Zeitersparnis"
          },
          {
            name: "🏠 Mietpreisoptimierung",
            automation: "Marktanalyse mit Differential Privacy",
            privacy: "Keine individuellen Mieterdaten verwendet",
            fairness: "Bias-freie Algorithmen, transparent dokumentiert"
          },
          {
            name: "🔍 Bonitätsprüfung",
            automation: "Minimaldatenansatz, automatische Löschung",
            privacy: "Nur notwendige Daten, verschlüsselte Übertragung",
            compliance: 'SCHUFA-Auskunft nur mit <Link to="/tools/consent-generator" className="text-cyan-600 hover:text-cyan-700 underline">rechtssicherer Einwilligung</Link>'
          },
          {
            name: "🛠️ Predictive Maintenance",
            automation: "Sensorbasierte Wartungsvorhersage",
            privacy: "Keine personenbezogenen Nutzungsmuster",
            efficiency: "40% weniger Ausfälle, keine Privacy-Verletzung"
          }
        ]
      }
    },
    {
      category: "Zutrittssysteme und digitale Schlüssel",
      icon: Key,
      measures: [
        "Biometriefreie Zugangslösungen bevorzugen",
        "Temporäre Zugangscodes für Dienstleister",
        "Audit-Logs mit automatischer Pseudonymisierung",
        "Dezentrale Schlüsselverwaltung"
      ],
      propTechSpecific: "Smart Locks, Mobile Keys, Besuchermanagement, Paketboxen",
      iso27001: "A.9.1.2 - Zugang zu Netzen und Netzdiensten",
      practicalImplementation: {
        title: "Privacy-by-Design Zutrittslösungen",
        description: "Moderne Sicherheit ohne Überwachung",
        solutions: [
          {
            name: "🔑 Mobile Keys",
            technology: "Bluetooth LE mit Rolling Codes",
            privacy: "Keine zentrale Bewegungserfassung",
            convenience: "Schlüssel teilen ohne Datenweitergabe"
          },
          {
            name: "📦 Smart Parcel Boxes",
            technology: "Einmalcodes für Lieferanten",
            privacy: "Automatische Code-Löschung nach Nutzung",
            security: "Keine dauerhafte Zutrittsberechtigung"
          },
          {
            name: "🚪 Visitor Management",
            technology: "QR-Codes mit Zeitbegrenzung",
            privacy: 'Minimale Besucherdaten, <Link to="/dsgvo-compliance" className="text-cyan-600 hover:text-cyan-700 underline">DSGVO-konform</Link>',
            efficiency: "Kontaktloser Check-In, automatische Löschung"
          },
          {
            name: "📊 Access Analytics",
            technology: "Aggregierte Nutzungsstatistiken",
            privacy: "Keine individuellen Bewegungsprofile",
            insights: "Optimierung ohne Privatsphäreverletzung"
          }
        ]
      }
    }
  ];
  const aiAutomationScenarios = [
    {
      scenario: "KI-basierte Energieoptimierung",
      challenge: "Machine Learning Modelle benötigen große Datenmengen für präzise Vorhersagen",
      solution: "Federated Learning und Differential Privacy",
      riskLevel: "Hoch",
      implementation: {
        approach: "Dezentrales Training ohne zentrale Datenspeicherung",
        benefits: [
          "30% Energieeinsparung durch präzise Vorhersagen",
          "Keine Rohdaten verlassen das Gebäude",
          "Modelltraining auf verschlüsselten Daten",
          "Automatische Bias-Erkennung und -Korrektur"
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
      scenario: "Intelligente Raumnutzungsanalyse",
      challenge: "Workspace Analytics ohne Mitarbeiterüberwachung",
      solution: "Privacy-preserving Analytics mit aggregierten Metriken",
      riskLevel: "Kritisch",
      implementation: {
        approach: "Anonymisierung am Sensor mit intelligenter Aggregation",
        benefits: [
          "45% bessere Raumauslastung",
          "Keine individuellen Bewegungsprofile",
          "Heatmaps ohne Personenbezug",
          "Opt-In für personalisierte Features"
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
      phase: "Assessment & Strategie",
      duration: "4-6 Wochen",
      color: "blue",
      tasks: [
        "PropTech-Systemlandschaft analysieren",
        "DSGVO-Gap-Analyse für IoT/Smart Building",
        'Datenschutz-Folgenabschätzung (siehe <Link to="/dsgvo-compliance" className="text-cyan-600 hover:text-cyan-700 underline">DSGVO-Leitfaden</Link>)',
        "Stakeholder-Alignment (Mieter, Eigentümer, Dienstleister)",
        "Compliance-Roadmap erstellen"
      ],
      deliverables: ["PropTech Compliance Audit", "DSFA Dokumentation", "Umsetzungsplan"]
    },
    {
      phase: "Technische Härtung",
      duration: "8-10 Wochen",
      color: "green",
      tasks: [
        "IoT-Security-Architektur implementieren",
        "Edge Computing Setup",
        "Verschlüsselung End-to-End",
        "Privacy-by-Design Integration",
        "Penetration Testing"
      ],
      deliverables: ["Secure IoT Infrastructure", "Security Zertifikate", "Test Reports"]
    },
    {
      phase: "Prozess-Integration",
      duration: "6-8 Wochen",
      color: "orange",
      tasks: [
        "Mieter-Onboarding digitalisieren",
        'Consent Management implementieren (siehe <Link to="/tools/consent-generator" className="text-cyan-600 hover:text-cyan-700 underline">Consent Generator</Link>)',
        "Automatisierte Löschkonzepte",
        "Transparenz-Dashboard aufbauen",
        "Mitarbeiterschulungen"
      ],
      deliverables: ["Digital Processes", "Training Materials", "User Guides"]
    },
    {
      phase: "Launch & Optimization",
      duration: "4-6 Wochen",
      color: "purple",
      tasks: [
        "Pilotphase mit ausgewählten Objekten",
        "Feedback-Integration",
        "Performance-Optimierung",
        "Compliance-Monitoring aktivieren",
        "Kontinuierliche Verbesserung"
      ],
      deliverables: ["Live System", "KPI Dashboard", "Optimization Report"]
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
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "PropTech Compliance DSGVO - Smart Building Datenschutz",
        description: "PropTech DSGVO-Guide: ✓ Smart Buildings ✓ IoT-Sicherheit ✓ Mieterdaten. Praxisleitfaden für digitale Immobilien. Jetzt lesen!",
        canonical: "/wissen/branchen/proptech-compliance",
        keywords: "PropTech Compliance, Smart Building DSGVO, IoT Immobilien, Mieterdaten Datenschutz, PropTech Datenschutz, Smart Home DSGVO, Gebäudeautomation Compliance",
        structuredData: {
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
          "dateModified": (/* @__PURE__ */ new Date()).toISOString()
        }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "container px-4 py-4", children: /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: "/", children: "Home" }) }),
      /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: "/wissen", children: "Wissen" }) }),
      /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: "/wissen/branchen", children: "Branchen" }) }),
      /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: "PropTech Compliance" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative py-20 md:py-28", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
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
                    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400", children: [
                      /* @__PURE__ */ jsx(Home, { className: "h-4 w-4" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "PropTech Compliance Excellence" })
                    ] }),
                    /* @__PURE__ */ jsxs("h1", { className: "text-3xl md:text-5xl font-bold tracking-tight", children: [
                      "PropTech & Smart Buildings",
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent block mt-2", children: "DSGVO-Compliance Guide" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed", children: "Meistern Sie die Datenschutz-Herausforderungen moderner Immobilientechnologie. Von IoT-Sensoren über KI-basierte Gebäudeautomation bis zu digitalen Mieterprozessen." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Privacy-by-Design für Smart Building Systeme" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "DSGVO-konforme IoT-Infrastruktur und Sensorik" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Datenschutz bei ESG-Reporting und Nachhaltigkeit" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                      /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=proptech", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:opacity-90 group min-h-[48px] px-6", children: [
                        /* @__PURE__ */ jsx(Building, { className: "mr-2 h-5 w-5" }),
                        "PropTech Demo buchen",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                      ] }) }),
                      /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group min-h-[48px] px-6", children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                        "Smart Building Checkliste"
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
                    /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-cyan-200 dark:border-cyan-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "PropTech Compliance Center" }),
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
                        className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-cyan-500",
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Building, { className: "h-4 w-4 text-cyan-500 animate-pulse" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Smart Compliant" })
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
            "flex items-center gap-2 px-4 py-3 rounded-lg transition-all duration-200 whitespace-nowrap min-h-[48px]",
            activeSection === item.id ? "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800" : "hover:bg-cyan-50 dark:hover:bg-cyan-950/30 hover:text-cyan-700 dark:hover:text-cyan-400",
            "border",
            activeSection === item.id ? "border-cyan-200 dark:border-cyan-800" : "border-transparent hover:border-cyan-200 dark:hover:border-cyan-800"
          ),
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: cn(
              "h-4 w-4",
              activeSection === item.id && "text-cyan-600 dark:text-cyan-500"
            ) }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "text-sm font-medium",
              activeSection === item.id && "text-cyan-700 dark:text-cyan-400"
            ), children: item.label })
          ]
        },
        item.id
      )) }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
        /* @__PURE__ */ jsxs("section", { id: "overview", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "PropTech Compliance Überblick"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-cyan-600" }),
                "Smart Building Datenschutz"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
                  "Moderne Gebäudetechnologie sammelt kontinuierlich Daten. Die Herausforderung: Effizienz und Komfort maximieren, ohne die Privatsphäre zu verletzen. Ähnlich wie bei der ",
                  /* @__PURE__ */ jsx(Link, { to: "/dsgvo-compliance", className: "text-cyan-600 hover:text-cyan-700 underline", children: "DSGVO-Compliance" }),
                  "müssen auch hier strenge Datenschutzstandards eingehalten werden."
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "Privacy-by-Design von der Planung bis zum Betrieb",
                  "Minimale Datenerfassung bei maximaler Funktionalität",
                  "Transparente Information aller Gebäudenutzer",
                  "Sichere IoT-Infrastruktur gegen Cyberangriffe"
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg border border-cyan-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-cyan-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-cyan-800 dark:text-cyan-400", children: "PropTech-Risiko" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-cyan-700 dark:text-cyan-300", children: "Tausende IoT-Sensoren = Tausende potenzielle Datenlecks. Proaktiver Schutz ist essentiell." })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(BrainCircuit, { className: "h-6 w-6 text-purple-600" }),
                "KI & Automation Compliance"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
                  "Künstliche Intelligenz revolutioniert die Gebäudeverwaltung - aber nur mit rechtskonformen und ethischen Algorithmen. Die Compliance-Anforderungen ähneln denen in anderen Branchen wie",
                  /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/insurtech-compliance", className: "text-cyan-600 hover:text-cyan-700 underline", children: "InsurTech" }),
                  " oder",
                  /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/travel-compliance", className: "text-cyan-600 hover:text-cyan-700 underline", children: "Travel" }),
                  "."
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "Transparente und erklärbare KI-Entscheidungen",
                  "Bias-freie Algorithmen für faire Behandlung",
                  "Federated Learning ohne zentrale Datenspeicherung",
                  "Human-in-the-Loop für kritische Entscheidungen"
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(BrainCircuit, { className: "h-4 w-4 text-purple-600 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4 text-purple-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-800 dark:text-purple-400", children: "Best Practice" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 dark:text-purple-300", children: "Edge AI: Intelligenz direkt am Sensor verhindert Datenschutzprobleme" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "smart-building", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Smart Building Compliance"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: smartBuildingRequirements.map((requirement, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-cyan-500", children: [
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
                        /* @__PURE__ */ jsx(Euro, { className: "h-4 w-4 text-red-600" }),
                        "Bußgeldrisiko"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-50 dark:bg-red-950/30 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 dark:text-red-300 font-medium", children: requirement.fineExample }) })
                    ] })
                  ] }),
                  requirement.realWorldScenario && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => setExpandedSection(expandedSection === `scenario-${index}` ? null : `scenario-${index}`),
                        className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                        children: [
                          /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4" }),
                          "Praxis-Szenario anzeigen",
                          /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                            "h-4 w-4 transition-transform",
                            expandedSection === `scenario-${index}` && "rotate-180"
                          ) })
                        ]
                      }
                    ),
                    expandedSection === `scenario-${index}` && /* @__PURE__ */ jsx(
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
                              step.modules && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: step.modules.map((module, moduleIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-cyan-50 dark:bg-cyan-950/30 rounded-lg", children: [
                                /* @__PURE__ */ jsx("div", { className: "font-medium text-cyan-900 dark:text-cyan-100 text-sm mb-1", children: module.name }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-cyan-700 dark:text-cyan-300 mb-2", children: module.purpose }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: module.dataTypes }),
                                module.benefit && /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400 mt-1 font-medium", children: [
                                  "✓ ",
                                  module.benefit
                                ] }),
                                module.technology && /* @__PURE__ */ jsxs("div", { className: "text-xs text-blue-600 dark:text-blue-400 mt-1", children: [
                                  "Tech: ",
                                  module.technology
                                ] }),
                                module.privacy && /* @__PURE__ */ jsxs("div", { className: "text-xs text-purple-600 dark:text-purple-400 mt-1", children: [
                                  "Privacy: ",
                                  module.privacy
                                ] })
                              ] }, moduleIndex)) }),
                              step.layers && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: step.layers.map((layer, layerIndex) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-cyan-500 pl-4", children: [
                                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: layer.level }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: layer.protection }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600", children: [
                                  "Benefit: ",
                                  layer.benefit
                                ] })
                              ] }, layerIndex)) }),
                              step.features && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(Smartphone, { className: "h-3 w-3 text-purple-600 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { children: feature })
                              ] }, featureIndex)) }),
                              step.zones && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.zones.map((zone, zoneIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 dark:bg-gray-700 rounded", children: [
                                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm mb-1", children: zone.area }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: [
                                  "Tech: ",
                                  zone.technology
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-orange-600 dark:text-orange-400 mb-1", children: [
                                  "Speicherung: ",
                                  zone.retention
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400", children: [
                                  "Privacy: ",
                                  zone.privacy
                                ] })
                              ] }, zoneIndex)) }),
                              step.controls && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: step.controls.map((control, controlIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { children: control })
                              ] }, controlIndex)) })
                            ] }, stepIndex))
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200", children: [
                            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(Target, { className: "h-4 w-4" }),
                              "Ergebnis & Learnings"
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", children: Object.entries(requirement.realWorldScenario.outcome).map(([key, value]) => /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
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
                  requirement.implementation && /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => setExpandedSection(expandedSection === `impl-${index}` ? null : `impl-${index}`),
                        className: "flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium",
                        children: [
                          /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                          "Technische Implementation",
                          /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                            "h-4 w-4 transition-transform",
                            expandedSection === `impl-${index}` && "rotate-180"
                          ) })
                        ]
                      }
                    ),
                    expandedSection === `impl-${index}` && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, height: 0 },
                        animate: { opacity: 1, height: "auto" },
                        className: "mt-4",
                        children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: requirement.implementation.template }) })
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
        /* @__PURE__ */ jsxs("section", { id: "iot-security", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "IoT-Sicherheit & Sensorik"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: iotSecurityMeasures.map((measure, index) => {
            var _a, _b;
            return /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Cpu, { className: "h-6 w-6 text-blue-600" }),
                measure.scenario
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-red-700", children: "Herausforderung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: measure.challenge })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-700", children: "Lösung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: measure.solution })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-blue-700", children: "Architektur" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: ((_a = measure.implementation.architecture) == null ? void 0 : _a.map((arch, i) => /* @__PURE__ */ jsx("div", { className: "text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded", children: arch }, i))) || ((_b = measure.implementation.privacy_levels) == null ? void 0 : _b.map((level, i) => /* @__PURE__ */ jsx("div", { className: "text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded", children: level }, i))) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setExpandedSection(expandedSection === `iot-${index}` ? null : `iot-${index}`),
                      className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                      children: [
                        /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                        "Technische Implementation",
                        /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                          "h-4 w-4 transition-transform",
                          expandedSection === `iot-${index}` && "rotate-180"
                        ) })
                      ]
                    }
                  ),
                  expandedSection === `iot-${index}` && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      className: "mt-4",
                      children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: measure.implementation.technical }) })
                    }
                  )
                ] })
              ] })
            ] }, index);
          }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "tenant-privacy", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Mieterdaten-Schutz & Digitale Services"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: tenantPrivacyMeasures.map((measure, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(measure.icon, { className: "h-6 w-6 text-teal-600" }),
              measure.category
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Schutzmaßnahmen" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: measure.measures.map((m, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: m })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "PropTech-spezifisch" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 p-3 bg-teal-50 dark:bg-teal-950/30 rounded-lg", children: measure.propTechSpecific }),
                /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: measure.iso27001 }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Praktische Umsetzung" }),
                /* @__PURE__ */ jsx("div", { className: "bg-cyan-50 dark:bg-cyan-950/30 rounded-lg p-4 border border-cyan-200", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-cyan-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium text-cyan-800 dark:text-cyan-200", children: measure.practicalImplementation.title })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-cyan-700 dark:text-cyan-300 mb-3", children: measure.practicalImplementation.description }),
                  measure.practicalImplementation.features && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: measure.practicalImplementation.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 rounded border", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: feature.name }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-cyan-600 dark:text-cyan-400 mb-1", children: feature.function }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                      "Privacy: ",
                      feature.privacy
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: feature.benefit })
                  ] }, featureIndex)) }),
                  measure.practicalImplementation.processes && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: measure.practicalImplementation.processes.map((process, processIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 rounded border", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: process.name }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: process.automation }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                      "Privacy: ",
                      process.privacy
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: process.accuracy || process.fairness || process.compliance || process.efficiency })
                  ] }, processIndex)) }),
                  measure.practicalImplementation.solutions && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: measure.practicalImplementation.solutions.map((solution, solutionIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 rounded border", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: solution.name }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: [
                      "Tech: ",
                      solution.technology
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                      "Privacy: ",
                      solution.privacy
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: solution.convenience || solution.security || solution.efficiency || solution.insights })
                  ] }, solutionIndex)) })
                ] }) })
              ] })
            ] }) })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "ai-automation", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "KI & Automation im PropTech"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: aiAutomationScenarios.map((scenario, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(BrainCircuit, { className: "h-6 w-6 text-purple-600" }),
                scenario.scenario
              ] }),
              /* @__PURE__ */ jsxs(
                Badge,
                {
                  variant: scenario.riskLevel === "Kritisch" ? "destructive" : "secondary",
                  children: [
                    scenario.riskLevel,
                    " Risiko"
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-red-700", children: "Herausforderung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: scenario.challenge }),
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-700", children: "Lösung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: scenario.solution })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-blue-700", children: "Benefits" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: scenario.implementation.benefits.map((benefit, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: benefit })
                  ] }, i)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setExpandedSection(expandedSection === `ai-${index}` ? null : `ai-${index}`),
                    className: "flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium",
                    children: [
                      /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                      "Technische Implementation",
                      /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "h-4 w-4 transition-transform",
                        expandedSection === `ai-${index}` && "rotate-180"
                      ) })
                    ]
                  }
                ),
                expandedSection === `ai-${index}` && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    className: "mt-4",
                    children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: scenario.implementation.technical }) })
                  }
                )
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "implementation", className: "space-y-8 scroll-mt-32", children: [
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
                "Interaktive PropTech Compliance-Checkliste"
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
                category: "Smart Building Grundlagen",
                items: [
                  "Privacy-by-Design Konzept erstellt",
                  "IoT-Sicherheitsarchitektur definiert",
                  "Datenschutz-Folgenabschätzung durchgeführt",
                  "Sensor-Inventar und Datenflüsse dokumentiert"
                ]
              },
              {
                category: "Technische Sicherheit",
                items: [
                  "Edge Computing implementiert",
                  "Ende-zu-Ende Verschlüsselung aktiv",
                  "Netzwerksegmentierung umgesetzt",
                  "Security Monitoring eingerichtet"
                ]
              },
              {
                category: "Mieter & Nutzer",
                items: [
                  "Transparenz-Dashboard verfügbar",
                  'Consent Management integriert (mit <Link to="/tools/consent-generator" className="text-cyan-600 hover:text-cyan-700 underline">Consent Generator</Link>)',
                  "Datenschutzerklärung aktualisiert",
                  "Nutzer-Schulungen durchgeführt"
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
          children: /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 text-white overflow-hidden relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/pattern.svg')] opacity-10" }),
            /* @__PURE__ */ jsx(CardContent, { className: "relative p-8 md:p-12 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { scale: 0 },
                  whileInView: { scale: 1 },
                  transition: { type: "spring", duration: 0.8 },
                  children: /* @__PURE__ */ jsx(Building, { className: "h-16 w-16 mx-auto mb-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-4xl font-bold", children: "Machen Sie Ihre Immobilien smart & compliant" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 max-w-3xl mx-auto", children: "Profitieren Sie von unserer Expertise in PropTech Compliance. Von IoT-Security über Privacy-by-Design bis zu KI-gestützter Gebäudeautomation." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=proptech", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-cyan-600 hover:bg-gray-100 group shadow-lg",
                    children: [
                      /* @__PURE__ */ jsx(Building, { className: "mr-2 h-5 w-5" }),
                      "Kostenlose PropTech-Beratung",
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
                      "Smart Building Compliance Guide (PDF)"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-8", children: [
                { icon: Building, title: "PropTech-Expertise", subtitle: "Spezialisiert auf Smart Buildings" },
                { icon: Shield, title: "Privacy-by-Design", subtitle: "Datenschutz von Anfang an" },
                { icon: Award, title: "ISO 27001 Certified", subtitle: "Höchste Sicherheitsstandards" }
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
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-5 w-5 text-cyan-600" }),
          "Weiterführende PropTech-Ressourcen"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/wissen/technologie/iot-security", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Cpu, { className: "h-5 w-5 text-cyan-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "IoT Security Guide" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Sicherheit für Smart Devices" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/compliance/eu-ai-act", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(BrainCircuit, { className: "h-5 w-5 text-purple-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "EU AI Act" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "KI-Compliance für Buildings" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/technologie/edge-computing", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Network, { className: "h-5 w-5 text-green-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Edge Computing" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Dezentrale Datenverarbeitung" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/branchen/immobilien", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Home, { className: "h-5 w-5 text-blue-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Immobilien Solutions" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Unsere PropTech-Produkte" })
          ] }) })
        ] }) })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  PropTechCompliance as default
};
