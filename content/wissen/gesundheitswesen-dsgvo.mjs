export default {
  route: '/wissen/branchen/gesundheitswesen-dsgvo',
  title: 'Gesundheitswesen Dsgvo',
  description: 'Meistern Sie die komplexesten Datenschutz-Herausforderungen im Gesundheitswesen.                      Von Art. 9 DSGVO über MDR bis hin zu KI-basierten Diagnose',
  content: `) => window.removeEventListener('scroll', handleScroll);
  }, []);

  const complianceStats = [
    { label: 'Art. 9 DSGVO Erfüllung', value: 98, color: 'text-red-600', trend: '+5%' },
    { label: 'TOM Implementierung', value: 96, color: 'text-pink-600', trend: '+8%' },
    { label: 'Einwilligungsmanagement', value: 94, color: 'text-rose-600', trend: '+12%' },
    { label: 'DSFA Compliance', value: 92, color: 'text-red-500', trend: '+7%' },
    { label: 'MDR Integration', value: 89, color: 'text-orange-500', trend: '+15%' },
    { label: 'Audit Readiness', value: 97, color: 'text-purple-600', trend: '+3%' }
  ];

  const art9Requirements = [
    {
      title: 'Ausdrückliche Einwilligung (Art. 9 Abs. 2 lit. a)',
      description: 'Die betroffene Person hat in die Verarbeitung der genannten personenbezogenen Daten für einen oder mehrere festgelegte Zwecke ausdrücklich eingewilligt',
      examples: ['Behandlungseinwilligung für spezielle Therapien', 'Forschungsteilnahme mit Gesundheitsdaten', 'Telemedizin-Services', 'Genetische Untersuchungen'],
      risk: 'Kritisch',
      fineExample: 'Bis zu 20 Mio. € oder 4% des Jahresumsatzes',
      realWorldScenario: {
        title: '🏥 Praxis-Szenario: Digitale Patientenaufnahme',
        context: 'Ein 45-jähriger Patient kommt zur kardiologischen Erstuntersuchung. Das Krankenhaus nutzt ein digitales Einwilligungssystem.',
        challenge: 'Wie kann die Klinik rechtssicher verschiedene Datenverarbeitungen abfragen, ohne den Patienten zu überfordern?',
        solution: {
          step1: {
            title: '📋 Modularer Einwilligungsprozess',
            description: 'Das System präsentiert dem Patienten drei klar getrennte Einwilligungsmodule:',
            modules: [
              ,
              ,
              
            ]
          },
          step2: {
            title: '🔒 Transparente Datennutzung',
            description: 'Für jedes Modul wird klar erklärt:',
            transparency: [
              'Wer erhält Zugriff auf welche Daten?',
              'Wie lange werden die Daten gespeichert?',
              'Mit welchen Dritten werden Daten geteilt?',
              'Wie kann die Einwilligung widerrufen werden?'
            ]
          },
          step3: {
            title: '📱 Praktische Umsetzung',
            description: 'Der Patient erhält ein Tablet mit intuitiver Benutzeroberfläche',
            features: [
              'Visuell aufbereitete Einwilligungstexte mit Symbolen',
              'Kurze Erklärvideos für komplexe Sachverhalte',
              'Sofortige Auswirkungsvorschau bei jeder Auswahl',
              'Jederzeit änderbare Entscheidungen während des Aufenthalts'
            ]
          }
        },
        outcome: {
          patientBenefit: 'Vollständige Transparenz und Kontrolle über eigene Daten',
          clinicBenefit: 'Rechtssichere Datenverarbeitung mit höherer Einwilligungsrate',
          complianceLevel: '98% DSGVO-konforme Einwilligungen'
        },
        keyLearnings: [
          'Modulare Einwilligung erhöht Akzeptanz um 34%',
          'Visuelle Aufbereitung reduziert Verständnisfragen um 67%',
          'Granulare Kontrolle stärkt Vertrauen in die Einrichtung',
          'Proaktive Transparenz verhindert spätere Beschwerden'
        ]
      }
    },
    {
      title: 'Gesundheitsvorsorge & Arbeitsmedizin (Art. 9 Abs. 2 lit. h)',
      description: 'Verarbeitung für Zwecke der Gesundheitsvorsorge oder der Arbeitsmedizin, für die Beurteilung der Arbeitsfähigkeit des Beschäftigten',
      examples: ['Betriebsärztliche Untersuchungen', 'Vorsorgeuntersuchungen', 'Impfstatus-Verwaltung', 'Arbeitsplatz-Gesundheitsscreening'],
      risk: 'Hoch',
      fineExample: 'Meta Ireland: 1,2 Mrd. € (2023)',
      realWorldScenario: {
        title: '🏭 Praxis-Szenario: Betriebsärztlicher Dienst im Krankenhaus',
        context: 'Ein großes Universitätsklinikum führt arbeitsmedizinische Vorsorgeuntersuchungen für 3.500 Mitarbeiter durch. Der Betriebsarzt muss Gesundheitsdaten verarbeiten, ohne die Privatsphäre zu verletzen.',
        challenge: 'Wie können Gesundheitsdaten der Mitarbeiter verarbeitet werden, ohne dass die Personalstelle Zugang zu medizinischen Details erhält?',
        solution: {
          step1: {
            title: '👩‍⚕️ Strikte Datentrennung',
            description: 'Implementierung eines "Zwei-Welten-Modells"',
            medicalWorld: ,
            administrativeWorld: 
          },
          step2: {
            title: '🔒 Technische Umsetzung der Datentrennung',
            description: 'Innovative Lösung für maximalen Datenschutz',
            technicalImplementation: [
              {
                component: 'Medizinisches Dokumentationssystem',
                security: 'Separate Datenbank mit Berufsgeheimnis-Schutz',
                access: 'Nur medizinisches Personal mit Qualifikation'
              },
              {
                component: 'Arbeitsplatz-Bewertungssystem',
                security: 'Automatisierte Anonymisierung medizinischer Details',
                access: 'HR-Abteilung erhält nur arbeitsrelevante Bewertungen'
              },
              {
                component: 'Audit-Trail System',
                security: 'Lückenlose Dokumentation aller Datenzugriffe',
                access: 'Datenschutzbeauftragte für Compliance-Kontrolle'
              }
            ]
          },
          step3: {
            title: '📊 Praktisches Beispiel: Nachtschicht-Tauglichkeit',
            description: 'Wie arbeitsmedizinische Bewertungen datenschutzkonform kommuniziert werden',
            medicalAssessment: {
              betriebsarzt: 'Patient hat chronische Insomnie und Bluthochdruck. Nachtschichten erhöhen Gesundheitsrisiko erheblich.',
              documentation: 'Vollständige medizinische Begründung in separatem System'
            },
            hrCommunication: {
              personalstelle: 'Mitarbeiter für Nachtschichten nicht geeignet. Alternative Schichtzeiten empfohlen.',
              rationale: 'Keine medizinischen Details, nur arbeitsplatzrelevante Empfehlung'
            }
          }
        },
        outcome: {
          employeeBenefit: 'Optimaler Gesundheitsschutz ohne Diskriminierungsrisiko',
          employerBenefit: 'Arbeitsschutz-Compliance ohne Datenschutzverstöße',
          legalCompliance: 'Vollständige Art. 9 DSGVO Konformität + Arbeitsschutzrecht'
        },
        keyLearnings: [
          'Datentrennung schafft Vertrauen bei Mitarbeitern',
          'Betriebsärztliche Schweigepflicht bleibt vollständig gewahrt',
          'Automatisierte Anonymisierung verhindert menschliche Fehler',
          'Transparente Prozesse reduzieren Widerstand gegen Vorsorgeuntersuchungen'
        ]
      }
    },
    {
      title: 'Lebenswichtige Interessen (Art. 9 Abs. 2 lit. c)',
      description: 'Die Verarbeitung ist zum Schutz lebenswichtiger Interessen der betroffenen Person oder einer anderen natürlichen Person erforderlich',
      examples: ['Notfallbehandlung bewusstloser Patienten', 'Intensivmedizin', 'Rettungsdienst-Einsätze', 'Organspende-Koordination'],
      risk: 'Mittel',
      fineExample: 'Ausnahme: Notfallsituationen meist bußgeldfrei',
      implementation: {
        requirements: [
          'Unmittelbare Lebensgefahr oder schwerwiegende Gesundheitsgefährdung',
          'Nachträgliche Information sobald möglich',
          'Dokumentation der Notfallsituation',
          'Minimale erforderliche Datenverarbeitung'
        ],
        template: \`
// Notfall-Datenverarbeitung
const emergencyDataProcessing = {
  emergencyId: generateEmergencyId(),
  timestamp: new Date().toISOString(),
  legalBasis: 'Art. 9 Abs. 2 lit. c DSGVO',
  
  situation: {
    type: 'life_threatening_emergency',
    severity: 'critical',
    consentStatus: 'unable_to_consent',
    witnesses: 2
  },
  
  processedData: {
    vitalSigns: 'immediately_necessary_only',
    medicalHistory: 'emergency_relevant_only',
    allergies: 'life_threatening_allergies_only',
    medications: 'interaction_critical_only'
  },
  
  // Nachträgliche Compliance
  postEmergencyActions: {
    patientInformation: {
      required: true,
      deadline: '72_hours_after_emergency',
      method: 'written_and_verbal'
    },
    dataReview: {
      unnecessary_data_deletion: 'within_7_days',
      consent_regularization: 'as_soon_as_possible'
    },
    documentation: {
      emergency_justification: 'detailed_medical_report',
      legal_assessment: 'documented_necessity'
    }
  }
};
        \`
      }
    }
  ];

  const consentManagement = [
    {
      scenario: 'Digitale Erstanamnese',
      challenge: 'Umfassende Gesundheitsdatenerhebung bei Erstkontakt',
      solution: 'Granulares, modulares Einwilligungssystem',
      implementation: {
        modules: [
          'Basis-Gesundheitsdaten (Pflichtangaben)',
          'Erweiterte Anamnese (Optional)',
          'Forschungsteilnahme (Opt-in)',
          'Datenübermittlung an Fachärzte (Situativ)'
        ],
        technical: \`
// Modulares Consent Management
const consentModules = {
  basic_health_data: {
    required: true,
    legalBasis: 'Art. 9 Abs. 2 lit. h DSGVO',
    description: 'Grundlegende Gesundheitsdaten für Behandlung',
    dataTypes: ['current_symptoms', 'medication_list', 'allergies']
  },
  
  extended_anamnesis: {
    required: false,
    legalBasis: 'Art. 9 Abs. 2 lit. a DSGVO',
    description: 'Detaillierte Krankengeschichte für optimale Behandlung',
    dataTypes: ['family_history', 'lifestyle_factors', 'previous_surgeries'],
    benefits: 'Personalisierte Behandlungsempfehlungen'
  },
  
  research_participation: {
    required: false,
    legalBasis: 'Art. 9 Abs. 2 lit. a DSGVO',
    description: 'Anonymisierte Daten für medizinische Forschung',
    dataTypes: ['anonymized_diagnosis', 'treatment_outcomes'],
    withdrawal: 'jederzeit ohne Begründung'
  }
};
        \`
      }
    },
    {
      scenario: 'Telemedizin-Konsultation',
      challenge: 'Videoübertragung, Aufzeichnung, internationale Datenübertragung',
      solution: 'Privacy-by-Design Telemedizin-Plattform',
      implementation: {
        modules: [
          'Ende-zu-Ende Verschlüsselung',
          'Temporäre Session-Daten',
          'Aufzeichnungs-Kontrolle',
          'EU-Server Hosting'
        ],
        technical: \`
// Telemedizin Privacy Setup
const telemedicineSession = {
  sessionId: generateSecureSessionId(),
  encryption: {
    type: 'end_to_end_encryption',
    algorithm: 'AES-256-GCM',
    keyExchange: 'ECDH-P256'
  },
  
  dataProcessing: {
    video_audio: {
      storage: 'temporary_session_only',
      retention: '24_hours_max',
      recording: {
        allowed: false, // Default
        requires: 'explicit_consent_both_parties',
        purpose: 'medical_documentation_only'
      }
    },
    
    session_metadata: {
      stored: ['session_duration', 'connection_quality'],
      not_stored: ['ip_addresses', 'device_fingerprints'],
      anonymized: true
    }
  },
  
  infrastructure: {
    server_location: 'EU_only',
    data_residency: 'Germany_preferred',
    third_party_services: 'gdpr_compliant_only',
    subprocessors: 'documented_and_approved'
  }
};
        \`
      }
    }
  ];

  const tomMeasures = [
    {
      category: 'Zutrittskontrolle',
      icon: Building2,
      measures: [
        'Biometrische Zugangssysteme für Patientenbereiche',
        'Mehrstufige Besucherregistrierung',
        '24/7 Sicherheitsdienst mit Protokollierung',
        'Videoüberwachung mit automatischer Anonymisierung'
      ],
      healthcareSpecific: 'Patientenzimmer, Operationssäle, Datenverarbeitungsräume, Archivbereiche',
      iso27001: 'A.11.1.1 - Physische Sicherheitsbereiche',
      practicalImplementation: {
        title: 'Intelligente Sicherheitszonen',
        description: 'Automatische Anpassung der Sicherheitsmaßnahmen je nach Bereich und Tageszeit',
        zones: [
          {
            name: 'Öffentlicher Bereich',
            security: 'Grundsicherheit',
            access: 'Freier Zugang für Besucher',
            measures: 'Videoaufzeichnung, Notfallknöpfe'
          },
          {
            name: 'Patientenbereich',
            security: 'Mittlere Sicherheit',
            access: 'Mitarbeiterausweis + PIN',
            measures: 'Automatische Patientenanonymisierung bei Aufzeichnungen'
          },
          {
            name: 'OP/Intensivstation',
            security: 'Hohe Sicherheit',
            access: 'Biometrie + Mitarbeiterausweis',
            measures: 'Lückenlose Dokumentation, Reinraumstandards'
          },
          {
            name: 'Rechenzentrum',
            security: 'Maximale Sicherheit',
            access: 'Multi-Faktor + Begleitperson',
            measures: 'Faraday-Käfig, 24/7 Überwachung'
          }
        ]
      }
    },
    {
      category: 'Zugangskontrolle',
      icon: UserCheck,
      measures: [
        'Multi-Faktor-Authentifizierung für alle Systeme',
        'Rollenbasierte Berechtigungen nach Funktionsbereich',
        'Automatische Sperrung bei Inaktivität (5 Min)',
        'Privilegierte Konten mit zusätzlicher Überwachung'
      ],
      healthcareSpecific: 'KIS, PACS, Laborinformationssysteme, Patientenportale',
      iso27001: 'A.9.1.1 - Zugriffsrichtlinie',
      practicalImplementation: {
        title: 'Intelligente Rollenverwaltung',
        description: 'Automatische Rechtevergabe basierend auf Funktion, Schicht und Patientenzuordnung',
        roles: [
          {
            name: '👩‍⚕️ Ärzte',
            permissions: 'Vollzugriff auf zugewiesene Patienten',
            restrictions: 'Automatische Sperrung nach Schichtende',
            security: 'Biometrische Anmeldung + Smart Card'
          },
          {
            name: '👩‍⚕️ Pflegekräfte',
            permissions: 'Patientendaten + Vitalwerte erfassen',
            restrictions: 'Keine Diagnose-Änderungen',
            security: 'PIN + Fingerabdruck'
          },
          {
            name: '📈 Verwaltung',
            permissions: 'Terminplanung + Abrechnung',
            restrictions: 'Kein Zugriff auf medizinische Daten',
            security: 'Passwort + SMS-Code'
          },
          {
            name: '🔧 IT-Support',
            permissions: 'Systemwartung unter Aufsicht',
            restrictions: 'Keine Patientendaten sichtbar',
            security: 'Doppelte Bestätigung + Protokollierung'
          }
        ]
      }
    },
    {
      category: 'Verschlüsselung',
      icon: Shield,
      measures: [
        'Ende-zu-Ende Verschlüsselung aller Patientendaten',
        'Hardware Security Modules (HSM) für Schlüsselverwaltung',
        'Verschlüsselte Datenbanken mit Feld-Level Encryption',
        'Sichere Kommunikation zwischen allen Systemen'
      ],
      healthcareSpecific: 'Patientenakten, DICOM-Bilder, Laborbefunde, Verschreibungen',
      iso27001: 'A.10.1.1 - Kryptographische Kontrollen',
      practicalImplementation: {
        title: 'Mehrstufige Verschlüsselungsstrategie',
        description: 'Umfassender Schutz von der Dateneingabe bis zur langfristigen Archivierung',
        layers: [
          {
            name: '📱 Eingabeebene',
            protection: 'Verschlüsselung direkt bei der Dateneingabe',
            benefit: 'Schutz bereits während der Erfassung',
            technology: 'Client-seitige Verschlüsselung mit Hardware-Schlüsseln'
          },
          {
            name: '📊 Übertragungsebene',
            protection: 'Sichere Kanäle zwischen allen Systemen',
            benefit: 'Schutz vor Netzwerkangriffen',
            technology: 'TLS 1.3 mit Certificate Pinning'
          },
          {
            name: '📋 Speicherebene',
            protection: 'Verschlüsselte Datenbankfelder',
            benefit: 'Schutz auch bei Datenbankzugriff',
            technology: 'AES-256 mit HSM-verwalteten Schlüsseln'
          },
          {
            name: '📺 Archivebene',
            protection: 'Langzeitsichere Verschlüsselung',
            benefit: 'Schutz über Jahrzehnte garantiert',
            technology: 'Quantenresistente Algorithmen'
          }
        ]
      }
    }
  ];

  const riskScenarios = [
    ,
    {
      scenario: 'Unberechtigte Einsichtnahme durch Mitarbeiter',
      likelihood: 'Mittel',
      impact: 'Hoch',
      riskScore: 75,
      potentialFine: '500.000 - 2 Mio. €',
      affectedPersons: '50-500',
      mitigationMeasures: [
        'Umfassende Zugriffsprotokollierung',
        'Anomalie-Erkennung bei Datenzugriffen',
        'Regelmäßige Mitarbeiterschulungen',
        'Break-Glass Verfahren für Notfälle',
        'Whistleblower-System für Compliance-Verstöße'
      ],
      complianceActions: [
        'Interne Untersuchung und Dokumentation',
        'Arbeitsrechtliche Maßnahmen prüfen',
        'Betroffene Patienten informieren',
        'Zusätzliche Sicherheitsmaßnahmen',
        'Präventive Schulungsmaßnahmen'
      ]
    }
  ];

  const implementationRoadmap = [
    ,
    {
      phase: 'Technische Implementation',
      duration: '8-12 Wochen',
      color: 'green',
      tasks: [
        'Verschlüsselungsinfrastruktur aufbauen',
        'Consent Management System',
        'Zugriffskontrollsystem implementieren',
        'Monitoring und Alerting',
        'Backup und Recovery optimieren'
      ],
      deliverables: ['Technische Infrastruktur', 'Security Controls', 'Monitoring Dashboard']
    },
    {
      phase: 'Organisatorische Maßnahmen',
      duration: '6-8 Wochen',
      color: 'orange',
      tasks: [
        'Richtlinien und Verfahren aktualisieren',
        'Mitarbeiterschulungen durchführen',
        'Incident Response Prozesse',
        'Audit und Compliance Checks',
        'Dokumentation vervollständigen'
      ],
      deliverables: ['Compliance Dokumentation', 'Schulungsnachweis', 'Audit Reports']
    },
    {
      phase: 'Go-Live & Monitoring',
      duration: '2-4 Wochen',
      color: 'purple',
      tasks: [
        'Produktive Inbetriebnahme',
        'Continuous Monitoring einrichten',
        'User Acceptance Testing',
        'Performance Optimierung',
        'Compliance Validation'
      ],
      deliverables: ['Live System', 'Monitoring Setup', 'Compliance Certificate']
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
      
      <main class="overflow-hidden">
        {/* Hero Section with Parallax */}
        <section>
          <div class="absolute inset-0 -z-10">
            <div class="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" ></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" ></div>
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
                    <Heart class="h-4 w-4" ></Heart>
                    <span class="text-sm font-medium">Healthcare DSGVO Excellence</span>
                  </div>
                  
                  <h1>
                    Healthcare DSGVO
                    <span class="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                      Art. 9 Compliance Guide
                    </span>
                  </h1>
                  
                  <p>
                    Meistern Sie die komplexesten Datenschutz-Herausforderungen im Gesundheitswesen. 
                    Von Art. 9 DSGVO über MDR bis hin zu KI-basierten Diagnose-Systemen.
                  </p>

                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>DSGVO Art. 9 konforme Verarbeitung von Gesundheitsdaten</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>EU AI Act Compliance für medizinische KI-Systeme</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>MDR-Integration und Medizinprodukte-Compliance</span>
                    </div>
                  </div>

                  <div>
                    <a href="/contact?demo=true&industry=healthcare">
                      <Button>
                        <Stethoscope class="mr-2 h-5 w-5" ></Stethoscope>
                        Healthcare Demo buchen
                        <ArrowRight>
                      </Button>
                    </a>
                    <Button size="lg" variant="outline" class="group">
                      <Download class="mr-2 h-5 w-5" ></Download>
                      Art. 9 DSGVO Checkliste
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
                        <h3 class="font-bold text-lg">Healthcare Compliance Center</h3>
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
                    class="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-red-500"
                  >
                    <div class="flex items-center gap-2">
                      <Heart class="h-4 w-4 text-red-500 animate-pulse" ></Heart>
                      <span class="text-sm font-medium">DSGVO Ready</span>
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
                  class="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  Healthcare DSGVO Überblick
                </motion.h2>
                  <div>
                    <Card class="p-6">
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <Shield class="h-6 w-6 text-red-600" ></Shield>
                          DSGVO Art. 9 - Besondere Kategorien
                        </CardTitle>
                      </CardHeader>
                      <CardContent class="space-y-4">
                        <p>
                          Gesundheitsdaten gehören zu den besonderen Kategorien personenbezogener Daten 
                          und erfordern höchste Schutzstandards und spezielle Rechtsgrundlagen.
                        </p>
                        
                        <div class="space-y-3">
                          {[
                            'Explizite Einwilligung oder gesetzliche Erlaubnis',
                            'Erhöhte technische und organisatorische Maßnahmen',
                            'Besondere Transparenz- und Informationspflichten',
                            'Verschärfte Dokumentations- und Nachweispflichten'
                          ].map((item, i) => (
                            <div key={i} class="flex items-start gap-3">
                              <CheckCircle2 class="h-4 w-4 text-green-600 flex-shrink-0 mt-1" ></CheckCircle2>
                              <span class="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <div class="flex items-center gap-2 mb-2">
                            <AlertTriangle class="h-4 w-4 text-red-600" ></AlertTriangle>
                            <span>
                              Bußgeldrisiko
                            </span>
                          </div>
                          <p>
                            Bis zu 20 Mio. € oder 4% des weltweiten Jahresumsatzes bei Verstößen gegen Art. 9 DSGVO
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card class="p-6">
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <Brain class="h-6 w-6 text-purple-600" ></Brain>
                          EU AI Act & Healthcare KI
                        </CardTitle>
                      </CardHeader>
                      <CardContent class="space-y-4">
                        <p>
                          Medizinische KI-Systeme fallen unter die Hochrisiko-Kategorie des EU AI Act 
                          und erfordern umfassende Compliance-Maßnahmen.
                        </p>
                        
                        <div class="space-y-3">
                          {[
                            'Risikomanagementsystem für KI-Anwendungen',
                            'Transparenz und Erklärbarkeit der Algorithmen', 
                            'Menschliche Aufsicht bei kritischen Entscheidungen',
                            'Kontinuierliche Überwachung und Bias-Monitoring'
                          ].map((item, i) => (
                            <div key={i} class="flex items-start gap-3">
                              <Brain class="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" ></Brain>
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
                            Implementieren Sie "Human-in-the-Loop" Systeme für alle KI-gestützten Diagnosen
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
              </section>

              {/* Divider */}
              <div>

              {/* Art. 9 DSGVO Section */}
              <section id="art9" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  Art. 9 DSGVO - Besondere Kategorien personenbezogener Daten
                </motion.h2>
                  <div class="space-y-8">
                    {art9Requirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card class="border-l-4 border-red-500">
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
                                                    <Smartphone class="h-3 w-3 text-purple-600 mt-1 flex-shrink-0" ></Smartphone>
                                                    <span>{feature}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.actions && (
                                              <div class="space-y-3">
                                                {step.actions.map((action, actionIndex) => (
                                                  <div key={actionIndex} class="border-l-4 border-red-500 pl-4">
                                                    <div class="flex items-center gap-2 mb-2">
                                                      <Clock class="h-4 w-4 text-red-600" ></Clock>
                                                      <span class="font-medium text-sm">{action.time}</span>
                                                      <span class="text-sm text-gray-600">- {action.action}</span>
                                                    </div>
                                                    <div class="text-xs text-gray-600 mb-1">
                                                      <strong>Datenverarbeitung:</strong> {action.dataProcessing}
                                                    </div>
                                                    {action.legalBasis && (
                                                      <div class="text-xs text-green-600">
                                                        <strong>Rechtsgrundlage:</strong> {action.legalBasis}
                                                      </div>
                                                    )}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.documentation && (
                                              <div class="space-y-3">
                                                {step.documentation.map((doc, docIndex) => (
                                                  <div>
                                                    <div class="font-medium text-sm mb-1">{doc.aspect}</div>
                                                    <div>{doc.content}</div>
                                                    <div>{doc.evidence || doc.monitoring || doc.purpose}</div>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.postEmergencyActions && (
                                              <div class="space-y-3">
                                                {step.postEmergencyActions.map((action, actionIndex) => (
                                                  <div key={actionIndex} class="border-l-4 border-green-500 pl-4">
                                                    <div class="flex items-center gap-2 mb-2">
                                                      <Calendar class="h-4 w-4 text-green-600" ></Calendar>
                                                      <span class="font-medium text-sm">{action.timeline}</span>
                                                    </div>
                                                    <div>{action.action}</div>
                                                    <div>{action.method || action.scope || action.transparency}</div>
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
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
              </section>

              {/* Divider */}
              <div>

              {/* Consent Management Section */}
              <section id="consent" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  Einwilligungsmanagement im Gesundheitswesen
                </motion.h2>
                  <div class="space-y-8">
                    {consentManagement.map((consent, index) => (
                      <Card key={index} class="p-6">
                        <CardHeader>
                          <CardTitle class="flex items-center gap-2">
                            <UserCheck class="h-6 w-6 text-green-600" ></UserCheck>
                            {consent.scenario}
                          </CardTitle>
                        </CardHeader>
                        <CardContent class="space-y-6">
                          <div>
                            <div>
                              <h4 class="font-semibold mb-3 text-red-700">Herausforderung</h4>
                              <p>
                                {consent.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 class="font-semibold mb-3 text-green-700">Lösung</h4>
                              <p>
                                {consent.solution}
                              </p>
                            </div>
                            <div>
                              <h4 class="font-semibold mb-3 text-blue-700">Module</h4>
                              <div class="space-y-2">
                                {consent.implementation.modules.map((module, i) => (
                                  <div>
                                    {module}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <button
                             \` ? null : \`consent-\${index}\`)}
                              class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code class="h-4 w-4" ></Code>
                              Technische Implementation
                              <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                expandedSection === \`consent-\${index}\` && "rotate-180")} ></ChevronDown>
                            </button>
                            
                            {expandedSection === \`consent-\${index}\` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                class="mt-4"
                              >
                                <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre class="text-green-400 text-xs">
                                    {consent.implementation.technical}
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

              {/* TOM Healthcare Section */}
              <section id="tom" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  Technische und Organisatorische Maßnahmen (TOM) für Healthcare
                </motion.h2>
                  <div class="space-y-8">
                    {tomMeasures.map((tom, index) => (
                      <Card key={index} class="p-6">
                        <CardHeader>
                          <CardTitle class="flex items-center gap-2">
                            <tom.icon class="h-6 w-6 text-blue-600" ></tom>
                            {tom.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent class="space-y-6">
                          <div>
                            <div>
                              <h4 class="font-semibold mb-3">Technische Maßnahmen</h4>
                              <div class="space-y-2">
                                {tom.measures.map((measure, i) => (
                                  <div key={i} class="flex items-start gap-2">
                                    <CheckCircle2 class="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" ></CheckCircle2>
                                    <span class="text-sm">{measure}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 class="font-semibold mb-3">Healthcare-spezifisch</h4>
                              <p>
                                {tom.healthcareSpecific}
                              </p>
                              <div class="mt-3">
                                <Badge variant="outline" class="text-xs">
                                  {tom.iso27001}
                                </Badge>
                              </div>
                            </div>
                            
                            <div>
                              <h4 class="font-semibold mb-3">Praktische Umsetzung</h4>
                              <div>
                                <div class="space-y-3">
                                  <div class="flex items-center gap-2 mb-2">
                                    <Shield class="h-4 w-4 text-blue-600" ></Shield>
                                    <span>{tom.practicalImplementation.title}</span>
                                  </div>
                                  <div>
                                    {tom.practicalImplementation.description}
                                  </div>
                                  <div>
                                    {tom.practicalImplementation.zones && tom.practicalImplementation.zones.map((zone, zoneIndex) => (
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
                                    {tom.practicalImplementation.roles && tom.practicalImplementation.roles.map((role, roleIndex) => (
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
                                    {tom.practicalImplementation.layers && tom.practicalImplementation.layers.map((layer, layerIndex) => (
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

              {/* DSFA & Risk Analysis Section */}
              <section id="dsfa" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  Datenschutz-Folgenabschätzung & Risikoanalyse
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
                                Bußgeld
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
                                {risk.affectedPersons}
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

              {/* Implementation Section */}
              <section id="implementation" class="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8 scroll-mt-24"
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
                        Interaktive Compliance-Checkliste
                      </CardTitle>
                      <div class="text-sm text-gray-600">
                        Fortschritt: % abgeschlossen
                      </div>
                      <Progress value= class="h-2" ></Progress>
                    </CardHeader>
                    <CardContent class="space-y-6">
                      {[
                        {
                          category: 'Rechtliche Grundlagen',
                          items: [
                            'Datenschutzbeauftragte/r bestellt',
                            'Verzeichnis der Verarbeitungstätigkeiten erstellt',
                            'DSFA für Hochrisiko-Verarbeitungen durchgeführt',
                            'Auftragsverarbeitungsverträge aktualisiert'
                          ]
                        },
                        {
                          category: 'Technische Maßnahmen', 
                          items: [
                            'Ende-zu-Ende Verschlüsselung implementiert',
                            'Zugriffskontrollsystem eingerichtet',
                            'Backup und Recovery getestet',
                            'Monitoring und Alerting aktiv'
                          ]
                        },
                        {
                          category: 'Organisatorische Maßnahmen',
                          items: [
                            'Mitarbeiterschulungen durchgeführt',
                            'Incident Response Plan erstellt',
                            'Einwilligungsprozesse dokumentiert',
                            'Audit-Verfahren etabliert'
                          ]
                        }
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
                <Card class="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white overflow-hidden relative">
                  <div class="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" ></div>
                  <CardContent>
                    <div class="max-w-4xl mx-auto space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <Heart class="h-16 w-16 mx-auto mb-6 text-white" ></Heart>
                      </motion.div>
                      
                      <h2>
                        Starten Sie Ihre Healthcare DSGVO Journey
                      </h2>
                      <p class="text-xl text-white/90 max-w-3xl mx-auto">
                        Profitieren Sie von unserer 10+ Jahren Expertise in Healthcare Compliance. 
                        Von DSGVO Art. 9 über EU AI Act bis hin zu MDR – wir begleiten Sie zur vollständigen Compliance.
                      </p>
                      
                      <div>
                        <a href="/contact?demo=true&industry=healthcare">
                          <Button>
                            <Heart class="mr-2 h-5 w-5" ></Heart>
                            Kostenlose Healthcare-Beratung
                            <ArrowRight>
                          </Button>
                        </a>
                        <Button>
                          <Download class="mr-2 h-5 w-5" ></Download>
                          Umfassender Healthcare Guide (PDF)
                        </Button>
                      </div>

                      <div>
                        {[
                          { icon: Heart, title: 'Healthcare-Expertise', subtitle: 'Spezialisiert auf Gesundheitswesen' },
                          { icon: Shield, title: 'DSGVO + EU AI Act Ready', subtitle: 'Zukunftssichere Compliance' },
                          { icon: Award, title: 'MDR & ISO 27001 Certified', subtitle: 'Höchste Sicherheitsstandards' }
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
                    <ExternalLink class="h-5 w-5 text-red-600" ></ExternalLink>
                    Weiterführende Healthcare-Ressourcen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <a href="/wissen/rechtsprechung/meta-irland-2024" class="block group">
                      <div>
                        <Gavel class="h-5 w-5 text-red-600 mb-2" ></Gavel>
                        <div class="font-medium">Meta Ireland Urteil</div>
                        <div class="text-sm text-gray-600">1,2 Mrd. € Bußgeld-Analyse</div>
                      </div>
                    </a>
                    <a href="/wissen/compliance/eu-ai-act" class="block group">
                      <div>
                        <Brain class="h-5 w-5 text-purple-600 mb-2" ></Brain>
                        <div class="font-medium">EU AI Act Guide</div>
                        <div class="text-sm text-gray-600">KI-Compliance für Healthcare</div>
                      </div>
                    </a>
                    <a href="/wissen/krisenmanagement/data-breach-72h" class="block group">
                      <div>
                        <Timer class="h-5 w-5 text-orange-600 mb-2" ></Timer>
                        <div class="font-medium">Data Breach Response</div>
                        <div class="text-sm text-gray-600">72h Notfall-Leitfaden</div>
                      </div>
                    </a>
                    <a href="/branchen/gesundheitswesen" class="block group">
                      <div>
                        <Stethoscope class="h-5 w-5 text-blue-600 mb-2" ></Stethoscope>
                        <div class="font-medium">Healthcare Solutions</div>
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