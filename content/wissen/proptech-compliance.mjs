export default {
  route: '/wissen/branchen/proptech-compliance',
  title: 'Proptech Compliance',
  description: 'Meistern Sie die Datenschutz-Herausforderungen moderner Immobilientechnologie.                      Von IoT-Sensoren über KI-basierte Gebäudeautomation bis zu d',
  content: `) => window.removeEventListener('scroll', handleScroll);
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
              ,
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
      description: 'Nachhaltigkeitsdaten müssen <Link>DSGVO-konform</Link> erhoben werden, besonders wenn sie Rückschlüsse auf Einzelpersonen zulassen',
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
        template: \`
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
        \`
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
        technical: \`
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
        \`
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
        technical: \`
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
        \`
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
        description: 'Vollständig <Link>DSGVO-konforme</Link> digitale Services für moderne Mietverhältnisse',
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
            compliance: 'SCHUFA-Auskunft nur mit <Link>rechtssicherer Einwilligung</Link>'
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
            privacy: 'Minimale Besucherdaten, <Link>DSGVO-konform</Link>',
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
        technical: \`
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
        \`
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
        technical: \`
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
        \`
      }
    }
  ];

  const implementationRoadmap = [
    ,
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
    ,
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
    if (newCheckedItems.has(itemId))  else 
    setCheckedItems(newCheckedItems);
  };

  const getCompletionPercentage = () => ;

  return (
    <div>
      <SEOHead>
      <Header ></Header>
      
      {/* Breadcrumb Navigation */}
      <div class="container px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator ></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/wissen">Wissen</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator ></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/wissen/branchen">Branchen</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator ></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>PropTech Compliance</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      <main class="overflow-hidden">
        {/* Hero Section with Parallax */}
        <section>
          <div class="absolute inset-0 -z-10">
            <div class="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" ></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" ></div>
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
                    <Home class="h-4 w-4" ></Home>
                    <span class="text-sm font-medium">PropTech Compliance Excellence</span>
                  </div>
                  
                  <h1>
                    PropTech & Smart Buildings
                    <span class="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent block mt-2">
                      DSGVO-Compliance Guide
                    </span>
                  </h1>
                  
                  <p>
                    Meistern Sie die Datenschutz-Herausforderungen moderner Immobilientechnologie. 
                    Von IoT-Sensoren über KI-basierte Gebäudeautomation bis zu digitalen Mieterprozessen.
                  </p>

                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>Privacy-by-Design für Smart Building Systeme</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>DSGVO-konforme IoT-Infrastruktur und Sensorik</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>Datenschutz bei ESG-Reporting und Nachhaltigkeit</span>
                    </div>
                  </div>

                  <div>
                    <a href="/contact?demo=true&industry=proptech">
                      <Button>
                        <Building class="mr-2 h-5 w-5" ></Building>
                        PropTech Demo buchen
                        <ArrowRight>
                      </Button>
                    </a>
                    <Button size="lg" variant="outline" class="group min-h-[48px] px-6">
                      <Download class="mr-2 h-5 w-5" ></Download>
                      Smart Building Checkliste
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
                        <h3 class="font-bold text-lg">PropTech Compliance Center</h3>
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
                    class="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-cyan-500"
                  >
                    <div class="flex items-center gap-2">
                      <Building class="h-4 w-4 text-cyan-500 animate-pulse" ></Building>
                      <span class="text-sm font-medium">Smart Compliant</span>
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

              {/* Overview Section */}
              <section id="overview" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  PropTech Compliance Überblick
                </motion.h2>
                  <div>
                    <Card class="p-6">
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <Shield class="h-6 w-6 text-cyan-600" ></Shield>
                          Smart Building Datenschutz
                        </CardTitle>
                      </CardHeader>
                      <CardContent class="space-y-4">
                        <p>
                          Moderne Gebäudetechnologie sammelt kontinuierlich Daten. Die Herausforderung: 
                          Effizienz und Komfort maximieren, ohne die Privatsphäre zu verletzen. 
                          Ähnlich wie bei der <Link>DSGVO-Compliance</Link> 
                          müssen auch hier strenge Datenschutzstandards eingehalten werden.
                        </p>
                        
                        <div class="space-y-3">
                          {[
                            'Privacy-by-Design von der Planung bis zum Betrieb',
                            'Minimale Datenerfassung bei maximaler Funktionalität',
                            'Transparente Information aller Gebäudenutzer',
                            'Sichere IoT-Infrastruktur gegen Cyberangriffe'
                          ].map((item, i) => (
                            <div key={i} class="flex items-start gap-3">
                              <CheckCircle2 class="h-4 w-4 text-green-600 flex-shrink-0 mt-1" ></CheckCircle2>
                              <span class="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <div class="flex items-center gap-2 mb-2">
                            <AlertTriangle class="h-4 w-4 text-cyan-600" ></AlertTriangle>
                            <span>
                              PropTech-Risiko
                            </span>
                          </div>
                          <p>
                            Tausende IoT-Sensoren = Tausende potenzielle Datenlecks. Proaktiver Schutz ist essentiell.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card class="p-6">
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <BrainCircuit class="h-6 w-6 text-purple-600" ></BrainCircuit>
                          KI & Automation Compliance
                        </CardTitle>
                      </CardHeader>
                      <CardContent class="space-y-4">
                        <p>
                          Künstliche Intelligenz revolutioniert die Gebäudeverwaltung - 
                          aber nur mit rechtskonformen und ethischen Algorithmen. 
                          Die Compliance-Anforderungen ähneln denen in anderen Branchen wie 
                          <Link>InsurTech</Link> oder 
                          <Link>Travel</Link>.
                        </p>
                        
                        <div class="space-y-3">
                          {[
                            'Transparente und erklärbare KI-Entscheidungen',
                            'Bias-freie Algorithmen für faire Behandlung', 
                            'Federated Learning ohne zentrale Datenspeicherung',
                            'Human-in-the-Loop für kritische Entscheidungen'
                          ].map((item, i) => (
                            <div key={i} class="flex items-start gap-3">
                              <BrainCircuit class="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" ></BrainCircuit>
                              <span class="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <div class="flex items-center gap-2 mb-2">
                            <Lightbulb class="h-4 w-4 text-purple-600" ></Lightbulb>
                            <span>
                              Best Practice
                            </span>
                          </div>
                          <p>
                            Edge AI: Intelligenz direkt am Sensor verhindert Datenschutzprobleme
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
              </section>

              {/* Divider */}
              <div>

              {/* Smart Building Section */}
              <section id="smart-building" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Smart Building Compliance
                </motion.h2>
                  <div class="space-y-8">
                    {smartBuildingRequirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card class="border-l-4 border-cyan-500">
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
                                  <Euro class="h-4 w-4 text-red-600" ></Euro>
                                  Bußgeldrisiko
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
                                 \` ? null : \`scenario-\${index}\`)}
                                  class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                                >
                                  <Lightbulb class="h-4 w-4" ></Lightbulb>
                                  Praxis-Szenario anzeigen
                                  <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                    expandedSection === \`scenario-\${index}\` && "rotate-180")} ></ChevronDown>
                                </button>
                                
                                {expandedSection === \`scenario-\${index}\` && (
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
                                                    {module.technology && (
                                                      <div>
                                                        Tech: {module.technology}
                                                      </div>
                                                    )}
                                                    {module.privacy && (
                                                      <div>
                                                        Privacy: {module.privacy}
                                                      </div>
                                                    )}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.layers && (
                                              <div class="space-y-3">
                                                {step.layers.map((layer, layerIndex) => (
                                                  <div key={layerIndex} class="border-l-4 border-cyan-500 pl-4">
                                                    <div class="font-medium text-sm">{layer.level}</div>
                                                    <div>{layer.protection}</div>
                                                    <div class="text-xs text-green-600">Benefit: {layer.benefit}</div>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.features && (
                                              <div>
                                                {step.features.map((feature, featureIndex) => (
                                                  <div key={featureIndex} class="flex items-start gap-2 text-sm">
                                                    <Smartphone class="h-3 w-3 text-purple-600 mt-1 flex-shrink-0" ></Smartphone>
                                                    <span>{feature}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.zones && (
                                              <div>
                                                {step.zones.map((zone, zoneIndex) => (
                                                  <div>
                                                    <div class="font-medium text-sm mb-1">{zone.area}</div>
                                                    <div>Tech: {zone.technology}</div>
                                                    <div>Speicherung: {zone.retention}</div>
                                                    <div>Privacy: {zone.privacy}</div>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.controls && (
                                              <div class="space-y-2">
                                                {step.controls.map((control, controlIndex) => (
                                                  <div key={controlIndex} class="flex items-start gap-2 text-sm">
                                                    <Shield class="h-3 w-3 text-green-600 mt-1 flex-shrink-0" ></Shield>
                                                    <span>{control}</span>
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
                              <div>
                                <button
                                 \` ? null : \`impl-\${index}\`)}
                                  class="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
                                >
                                  <Code class="h-4 w-4" ></Code>
                                  Technische Implementation
                                  <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                    expandedSection === \`impl-\${index}\` && "rotate-180")} ></ChevronDown>
                                </button>
                                
                                {expandedSection === \`impl-\${index}\` && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    class="mt-4"
                                  >
                                    <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                      <pre class="text-green-400 text-xs">
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
              <div>

              {/* IoT Security Section */}
              <section id="iot-security" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  IoT-Sicherheit & Sensorik
                </motion.h2>
                  <div class="space-y-8">
                    {iotSecurityMeasures.map((measure, index) => (
                      <Card key={index} class="p-6">
                        <CardHeader>
                          <CardTitle class="flex items-center gap-2">
                            <Cpu class="h-6 w-6 text-blue-600" ></Cpu>
                            {measure.scenario}
                          </CardTitle>
                        </CardHeader>
                        <CardContent class="space-y-6">
                          <div>
                            <div>
                              <h4 class="font-semibold mb-3 text-red-700">Herausforderung</h4>
                              <p>
                                {measure.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 class="font-semibold mb-3 text-green-700">Lösung</h4>
                              <p>
                                {measure.solution}
                              </p>
                            </div>
                            <div>
                              <h4 class="font-semibold mb-3 text-blue-700">Architektur</h4>
                              <div class="space-y-2">
                                {measure.implementation.architecture?.map((arch, i) => (
                                  <div>
                                    {arch}
                                  </div>
                                )) || measure.implementation.privacy_levels?.map((level, i) => (
                                  <div>
                                    {level}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <button
                             \` ? null : \`iot-\${index}\`)}
                              class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code class="h-4 w-4" ></Code>
                              Technische Implementation
                              <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                expandedSection === \`iot-\${index}\` && "rotate-180")} ></ChevronDown>
                            </button>
                            
                            {expandedSection === \`iot-\${index}\` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                class="mt-4"
                              >
                                <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre class="text-green-400 text-xs">
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
              <div>

              {/* Tenant Privacy Section */}
              <section id="tenant-privacy" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Mieterdaten-Schutz & Digitale Services
                </motion.h2>
                  <div class="space-y-8">
                    {tenantPrivacyMeasures.map((measure, index) => (
                      <Card key={index} class="p-6">
                        <CardHeader>
                          <CardTitle class="flex items-center gap-2">
                            <measure.icon class="h-6 w-6 text-teal-600" ></measure>
                            {measure.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent class="space-y-6">
                          <div>
                            <div>
                              <h4 class="font-semibold mb-3">Schutzmaßnahmen</h4>
                              <div class="space-y-2">
                                {measure.measures.map((m, i) => (
                                  <div key={i} class="flex items-start gap-2">
                                    <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                    <span class="text-sm">{m}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 class="font-semibold mb-3">PropTech-spezifisch</h4>
                              <p>
                                {measure.propTechSpecific}
                              </p>
                              <div class="mt-3">
                                <Badge variant="outline" class="text-xs">
                                  {measure.iso27001}
                                </Badge>
                              </div>
                            </div>
                            
                            <div>
                              <h4 class="font-semibold mb-3">Praktische Umsetzung</h4>
                              <div>
                                <div class="space-y-3">
                                  <div class="flex items-center gap-2 mb-2">
                                    <Shield class="h-4 w-4 text-cyan-600" ></Shield>
                                    <span>{measure.practicalImplementation.title}</span>
                                  </div>
                                  <div>
                                    {measure.practicalImplementation.description}
                                  </div>
                                  {measure.practicalImplementation.features && (
                                    <div class="grid grid-cols-1 gap-3">
                                      {measure.practicalImplementation.features.map((feature, featureIndex) => (
                                        <div>
                                          <div>
                                            {feature.name}
                                          </div>
                                          <div>
                                            {feature.function}
                                          </div>
                                          <div>
                                            Privacy: {feature.privacy}
                                          </div>
                                          <div>
                                            {feature.benefit}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  {measure.practicalImplementation.processes && (
                                    <div>
                                      {measure.practicalImplementation.processes.map((process, processIndex) => (
                                        <div>
                                          <div>
                                            {process.name}
                                          </div>
                                          <div>
                                            {process.automation}
                                          </div>
                                          <div>
                                            Privacy: {process.privacy}
                                          </div>
                                          <div>
                                            {process.accuracy || process.fairness || process.compliance || process.efficiency}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  {measure.practicalImplementation.solutions && (
                                    <div>
                                      {measure.practicalImplementation.solutions.map((solution, solutionIndex) => (
                                        <div>
                                          <div>
                                            {solution.name}
                                          </div>
                                          <div>
                                            Tech: {solution.technology}
                                          </div>
                                          <div>
                                            Privacy: {solution.privacy}
                                          </div>
                                          <div>
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
              <div>

              {/* AI & Automation Section */}
              <section id="ai-automation" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  KI & Automation im PropTech
                </motion.h2>
                  <div class="space-y-8">
                    {aiAutomationScenarios.map((scenario, index) => (
                      <Card key={index} class="p-6">
                        <CardHeader>
                          <div class="flex items-center justify-between">
                            <CardTitle class="flex items-center gap-2">
                              <BrainCircuit class="h-6 w-6 text-purple-600" ></BrainCircuit>
                              {scenario.scenario}
                            </CardTitle>
                            <Badge 
                              variant={scenario.riskLevel === 'Kritisch' ? 'destructive' : 'secondary'}
                            >
                              {scenario.riskLevel} Risiko
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent class="space-y-6">
                          <div>
                            <div>
                              <h4 class="font-semibold mb-3 text-red-700">Herausforderung</h4>
                              <p>
                                {scenario.challenge}
                              </p>
                              <h4 class="font-semibold mb-3 text-green-700">Lösung</h4>
                              <p>
                                {scenario.solution}
                              </p>
                            </div>
                            
                            <div>
                              <h4 class="font-semibold mb-3 text-blue-700">Benefits</h4>
                              <div class="space-y-2">
                                {scenario.implementation.benefits.map((benefit, i) => (
                                  <div key={i} class="flex items-start gap-2">
                                    <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                    <span class="text-sm">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <button
                             \` ? null : \`ai-\${index}\`)}
                              class="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium"
                            >
                              <Code class="h-4 w-4" ></Code>
                              Technische Implementation
                              <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                expandedSection === \`ai-\${index}\` && "rotate-180")} ></ChevronDown>
                            </button>
                            
                            {expandedSection === \`ai-\${index}\` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                class="mt-4"
                              >
                                <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre class="text-green-400 text-xs">
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
              <div>

              {/* Implementation Section */}
              <section id="implementation" class="space-y-8 scroll-mt-32">
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
                        Interaktive PropTech Compliance-Checkliste
                      </CardTitle>
                      <div class="text-sm text-gray-600">
                        Fortschritt: % abgeschlossen
                      </div>
                      <Progress value= class="h-2" ></Progress>
                    </CardHeader>
                    <CardContent class="space-y-6">
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
                <Card class="bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600 text-white overflow-hidden relative">
                  <div class="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" ></div>
                  <CardContent>
                    <div class="max-w-4xl mx-auto space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <Building class="h-16 w-16 mx-auto mb-6 text-white" ></Building>
                      </motion.div>
                      
                      <h2>
                        Machen Sie Ihre Immobilien smart & compliant
                      </h2>
                      <p class="text-xl text-white/90 max-w-3xl mx-auto">
                        Profitieren Sie von unserer Expertise in PropTech Compliance. 
                        Von IoT-Security über Privacy-by-Design bis zu KI-gestützter Gebäudeautomation.
                      </p>
                      
                      <div>
                        <a href="/contact?demo=true&industry=proptech">
                          <Button>
                            <Building class="mr-2 h-5 w-5" ></Building>
                            Kostenlose PropTech-Beratung
                            <ArrowRight>
                          </Button>
                        </a>
                        <Button>
                          <Download class="mr-2 h-5 w-5" ></Download>
                          Smart Building Compliance Guide (PDF)
                        </Button>
                      </div>

                      <div>
                        {[
                          { icon: Building, title: 'PropTech-Expertise', subtitle: 'Spezialisiert auf Smart Buildings' },
                          { icon: Shield, title: 'Privacy-by-Design', subtitle: 'Datenschutz von Anfang an' },
                          { icon: Award, title: 'ISO 27001 Certified', subtitle: 'Höchste Sicherheitsstandards' }
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
                    <ExternalLink class="h-5 w-5 text-cyan-600" ></ExternalLink>
                    Weiterführende PropTech-Ressourcen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <a href="/wissen/technologie/iot-security" class="block group">
                      <div>
                        <Cpu class="h-5 w-5 text-cyan-600 mb-2" ></Cpu>
                        <div class="font-medium">IoT Security Guide</div>
                        <div class="text-sm text-gray-600">Sicherheit für Smart Devices</div>
                      </div>
                    </a>
                    <a href="/wissen/compliance/eu-ai-act" class="block group">
                      <div>
                        <BrainCircuit class="h-5 w-5 text-purple-600 mb-2" ></BrainCircuit>
                        <div class="font-medium">EU AI Act</div>
                        <div class="text-sm text-gray-600">KI-Compliance für Buildings</div>
                      </div>
                    </a>
                    <a href="/wissen/technologie/edge-computing" class="block group">
                      <div>
                        <Network class="h-5 w-5 text-green-600 mb-2" ></Network>
                        <div class="font-medium">Edge Computing</div>
                        <div class="text-sm text-gray-600">Dezentrale Datenverarbeitung</div>
                      </div>
                    </a>
                    <a href="/branchen/immobilien" class="block group">
                      <div>
                        <Home class="h-5 w-5 text-blue-600 mb-2" ></Home>
                        <div class="font-medium">Immobilien Solutions</div>
                        <div class="text-sm text-gray-600">Unsere PropTech-Produkte</div>
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