export default {
  route: '/wissen/branchen/datenschutz-betriebsrat',
  title: 'Datenschutz Betriebsrat',
  description: 'Rechtssichere Betriebsratsarbeit zwischen BetrVG und DSGVO. 
                    Wir zeigen Ihnen, wie Sie Ihre Mitbestimmungsrechte datenschutzkonform ausüben.',
  content: `) => window.removeEventListener('scroll', handleScroll);
  }, []);

  const complianceStats = [
    { label: 'DSGVO Compliance', value: 96, color: 'text-red-600', trend: '+8%' },
    { label: 'BetrVG Konformität', value: 98, color: 'text-blue-600', trend: '+5%' },
    { label: 'Datensicherheit', value: 94, color: 'text-green-600', trend: '+12%' },
    { label: 'Prozess-Compliance', value: 92, color: 'text-purple-600', trend: '+7%' },
    { label: 'Schulungsstand', value: 89, color: 'text-orange-600', trend: '+15%' },
    { label: 'Audit Readiness', value: 97, color: 'text-pink-600', trend: '+3%' }
  ];

  const rechtsgrundlagen = [
    {
      title: 'Betriebsverfassungsgesetz (BetrVG)',
      description: 'Das BetrVG regelt die Grundlagen der Betriebsratsarbeit und definiert die Rechte und Pflichten bei der Verarbeitung von Beschäftigtendaten.',
      paragraphs: [
        { nr: '§ 79', content: 'Schutz der Arbeitnehmer' },
        { nr: '§ 80', content: 'Allgemeine Aufgaben des Betriebsrats' },
        { nr: '§ 94', content: 'Mitbestimmung bei personellen Einzelmaßnahmen' },
        { nr: '§ 95', content: 'Auskunftsrecht über Lohn und Gehalt' }
      ],
      risk: 'Kritisch',
      fineExample: 'Verletzung der Betriebsratsrechte: Bis zu 15.000 € Bußgeld',
      realWorldScenario: {
        title: '⚖️ Praxis-Szenario: Betriebsrat bei Umstrukturierung',
        context: 'Ein Unternehmen mit 500 Mitarbeitern plant eine Reorganisation. Der Betriebsrat muss seine Mitbestimmungsrechte wahrnehmen und benötigt Zugang zu personenbezogenen Daten.',
        challenge: 'Wie kann der Betriebsrat seine gesetzlichen Aufgaben erfüllen, ohne unnötig in die Privatsphäre der Beschäftigten einzugreifen?',
        solution: {
          step1: {
            title: '📊 Bedarfsgerechte Datenanfrage',
            description: 'Der Betriebsrat stellt eine strukturierte Anfrage für die erforderlichen Daten',
            modules: [
              ,
              {
                name: 'Sozialplan-relevante Daten',
                purpose: 'Ausgleichsmaßnahmen entwickeln',
                dataTypes: 'Betriebszugehörigkeit, Alter, Familienstatus',
                benefit: 'Faire Ausgleichsregelungen möglich'
              },
              {
                name: 'Qualifikationsprofile',
                purpose: 'Weiterbildungsmaßnahmen planen',
                dataTypes: 'Ausbildung, Fortbildungen, Kompetenzen',
                incentive: 'Erhalt von Arbeitsplätzen durch Umschulung'
              }
            ]
          },
          step2: {
            title: '🔐 Datenschutzkonforme Verarbeitung',
            description: 'Sichere Handhabung der übertragenen Personalinformationen',
            transparency: [
              'Zugriff nur durch geschulte Betriebsratsmitglieder',
              'Verschlüsselte Speicherung auf separaten Systemen',
              'Protokollierung aller Datenzugriffe',
              'Automatische Löschung nach Projektabschluss'
            ]
          },
          step3: 
        },
        outcome: {
          employeeBenefit: 'Schutz der Arbeitsplätze bei maximaler Privatsphäre',
          councilBenefit: 'Rechtssichere Wahrnehmung der Mitbestimmungsrechte',
          complianceLevel: '100% BetrVG und DSGVO-konform'
        },
        keyLearnings: [
          'Frühe Abstimmung mit Datenschutzbeauftragten spart Zeit',
          'Strukturierte Datenanfragen reduzieren Konfliktpotential',
          'Transparenz stärkt Vertrauen bei den Beschäftigten',
          'Dokumentierte Prozesse schützen vor rechtlichen Problemen'
        ]
      }
    },
    {
      title: 'DSGVO Art. 6 - Rechtmäßigkeit der Verarbeitung',
      description: 'Die DSGVO definiert, wann Betriebsräte personenbezogene Daten rechtmäßig verarbeiten dürfen.',
      paragraphs: [
        { nr: 'Art. 6 Abs. 1 lit. c', content: 'Verarbeitung zur Erfüllung rechtlicher Verpflichtung' },
        { nr: 'Art. 6 Abs. 1 lit. f', content: 'Verarbeitung zur Wahrung berechtigter Interessen' },
        { nr: 'Art. 9 Abs. 2 lit. b', content: 'Verarbeitung für arbeitsrechtliche Zwecke' }
      ],
      risk: 'Sehr Hoch',
      fineExample: 'Bis zu 20 Mio. € oder 4% des Jahresumsatzes',
      realWorldScenario: {
        title: '🏢 Praxis-Szenario: Arbeitsschutz-Kontrolle',
        context: 'Der Betriebsrat eines Produktionsunternehmens stellt fest, dass in einer Abteilung häufig Arbeitsunfälle auftreten und möchte Präventionsmaßnahmen einleiten.',
        challenge: 'Welche Gesundheitsdaten darf der Betriebsrat zur Verbesserung des Arbeitsschutzes einsehen?',
        solution: {
          step1: {
            title: '🏥 Gestufte Datenanalyse',
            description: 'Schrittweise Annäherung an die Ursachen ohne unnötige Datenpreisgabe',
            medicalWorld: {
              title: 'Stufe 1: Anonymisierte Statistiken',
              access: 'Unfallhäufigkeit nach Bereichen und Uhrzeiten',
              purpose: 'Muster erkennen ohne Personenbezug',
              data: ['Unfalltypen', 'Tageszeiten', 'Wochentage', 'Betriebsbereiche']
            },
            administrativeWorld: 
          },
          step2: {
            title: '👨‍⚕️ Zusammenarbeit mit Betriebsarzt',
            description: 'Rechtssichere Kooperation unter Wahrung der Schweigepflicht',
            technicalImplementation: [
              {
                component: 'Gemeinsame Arbeitsgruppe Arbeitssicherheit',
                security: 'Getrennte Datenhaltung mit abgestimmten Maßnahmen',
                access: 'Betriebsrat erhält nur arbeitsplatzbezogene Empfehlungen'
              },
              {
                component: 'Anonymisiertes Berichtswesen',
                security: 'Medizinische Details bleiben beim Betriebsarzt',
                access: 'Präventionsmaßnahmen ohne Personenbezug entwickeln'
              }
            ]
          },
          step3: {
            title: '📋 Praktische Umsetzung',
            description: 'Konkrete Arbeitsschutzmaßnahmen ohne Datenschutzverstöße',
            medicalAssessment: {
              betriebsrat: 'Abteilung X hat 40% mehr Unfälle als der Durchschnitt, besonders bei Nachtschichten.',
              documentation: 'Statistische Analyse ohne Personenbezug'
            },
            hrCommunication: {
              massnahmen: 'Zusätzliche Beleuchtung, Pausenregelung anpassen, Schulungen verstärken.',
              rationale: 'Präventive Maßnahmen für alle ohne Diskriminierung Einzelner'
            }
          }
        },
        outcome: {
          employeeBenefit: 'Verbesserte Arbeitssicherheit ohne Überwachungsgefühl',
          councilBenefit: 'Wirksamer Arbeitsschutz ohne rechtliche Risiken',
          legalCompliance: 'BetrVG § 89 + DSGVO Art. 6 vollständig erfüllt'
        },
        keyLearnings: [
          'Anonymisierte Daten sind oft ausreichend für Präventionsmaßnahmen',
          'Kooperation mit Betriebsarzt erweitert Handlungsspielraum',
          'Gestufte Herangehensweise vermeidet Datenschutz-Fallstricke',
          'Fokus auf Arbeitsplatz statt Person schützt Privatsphäre'
        ]
      }
    }
  ];

  const datenarten = [
    ,
    ,
    ,
    
  ];

  const tomMeasures = [
    {
      category: 'Zutrittskontrolle',
      icon: Building2,
      measures: [
        'Separater, abschließbarer Betriebsratsraum',
        'Schlüsselverwaltung nur für BR-Mitglieder',
        'Besucherprotokoll für externe Beratung',
        'Sichere Aufbewahrung vertraulicher Unterlagen'
      ],
      healthcareSpecific: 'Betriebsratsbüros, Besprechungsräume, Archivbereiche für BR-Unterlagen',
      iso27001: 'A.11.1.1 - Physische Sicherheitsbereiche',
      practicalImplementation: {
        title: 'Sichere Betriebsratsräume',
        description: 'Physische Sicherheit für vertrauliche Betriebsratsarbeit',
        zones: [
          {
            name: 'Betriebsratsbüro',
            security: 'Hohe Sicherheit',
            access: 'Nur gewählte Betriebsratsmitglieder',
            measures: 'Codeschloss + Alarmanlage, Feuerfeste Schränke'
          },
          {
            name: 'Beratungsraum',
            security: 'Mittlere Sicherheit',
            access: 'BR-Mitglieder + externe Berater',
            measures: 'Schallschutz, keine Abhörmöglichkeiten'
          },
          {
            name: 'Archiv/Lager',
            security: 'Maximale Sicherheit',
            access: 'BR-Vorsitzender + Stellvertreter',
            measures: 'Tresor, klimatisiert, Zugriffsprotokollierung'
          }
        ]
      }
    },
    {
      category: 'IT-Sicherheit für BR',
      icon: Lock,
      measures: [
        'Separate IT-Ausstattung für Betriebsratsarbeit',
        'Verschlüsselte E-Mail-Kommunikation',
        'Sichere Cloud-Lösungen oder lokale Server',
        'Regelmäßige Datensicherung'
      ],
      healthcareSpecific: 'BR-spezifische Software, Personalverwaltungssysteme, Kommunikationstools',
      iso27001: 'A.12.6.1 - Management technischer Schwachstellen',
      practicalImplementation: {
        title: 'IT-Infrastruktur für Betriebsräte',
        description: 'Sichere und rechtskonforme IT-Ausstattung',
        roles: [
          {
            name: '💻 BR-Computer',
            permissions: 'Getrennt von Unternehmens-IT betrieben',
            restrictions: 'Keine privaten oder betriebsfremden Daten',
            security: 'Vollverschlüsselung + Zwei-Faktor-Authentifizierung'
          },
          {
            name: '📧 E-Mail-System',
            permissions: 'Vertrauliche Kommunikation mit Beschäftigten',
            restrictions: 'Keine Weiterleitung an Unternehmensleitung',
            security: 'Ende-zu-Ende-Verschlüsselung'
          },
          {
            name: '☁️ Cloud-Speicher',
            permissions: 'Sichere Dokumentenablage',
            restrictions: 'Nur DSGVO-konforme Anbieter in der EU',
            security: 'AES-256-Verschlüsselung'
          },
          {
            name: '📱 Mobile Geräte',
            permissions: 'Flexible Betriebsratsarbeit',
            restrictions: 'Mobile Device Management',
            security: 'Remote Wipe bei Verlust'
          }
        ]
      }
    },
    {
      category: 'Datenschutz-Organisation',
      icon: FileCheck,
      measures: [
        'BR-spezifisches Datenschutzkonzept',
        'Schulung aller BR-Mitglieder',
        'Dokumentation der Datenverarbeitung',
        'Zusammenarbeit mit DSB des Unternehmens'
      ],
      healthcareSpecific: 'BR-Verzeichnis von Verarbeitungstätigkeiten, Einwilligungsmanagement',
      iso27001: 'A.18.1.1 - Identifikation anwendbarer Gesetzgebung',
      practicalImplementation: {
        title: 'Datenschutz-Management für BR',
        description: 'Systematischer Aufbau der Datenschutz-Organisation',
        layers: [
          {
            name: '📚 Schulungsebene',
            protection: 'Kontinuierliche Weiterbildung aller BR-Mitglieder',
            benefit: 'Rechtssicheres Handeln im BR-Alltag',
            technology: 'E-Learning + Präsenzschulungen + Updates'
          },
          {
            name: '📋 Prozessebene',
            protection: 'Standardisierte Abläufe für Datenverarbeitung',
            benefit: 'Einheitliche und rechtskonforme Bearbeitung',
            technology: 'Workflows + Checklisten + Vorlagen'
          },
          {
            name: '📊 Kontrollebene',
            protection: 'Regelmäßige Überprüfung der Datenschutz-Maßnahmen',
            benefit: 'Frühzeitige Erkennung von Compliance-Problemen',
            technology: 'Audit-Tools + Dashboards + Berichte'
          },
          {
            name: '⚖️ Rechtsebene',
            protection: 'Juristische Beratung bei komplexen Fällen',
            benefit: 'Rechtssicherheit bei schwierigen Entscheidungen',
            technology: 'Externe Beratung + Rechts-Datenbanken'
          }
        ]
      }
    }
  ];

  const betriebsratsProzesse = [
    {
      prozess: 'Mitbestimmung bei Kündigungen',
      challenge: 'Anhörung des BR vor Kündigung unter Datenschutz-Gesichtspunkten',
      solution: 'Strukturiertes Anhörungsverfahren mit minimaler Datenpreisgabe',
      implementation: {
        schritte: [
          'Anonymisierte Vorab-Information über geplante Kündigung',
          'Detaillierte Anhörung nur bei strittigen Fällen',
          'Getrennte Dokumentation von Person und Sachverhalt',
          'Fristgerechte Vernichtung nach Abschluss des Verfahrens'
        ],
        rechtsbasis: 'BetrVG § 102, DSGVO Art. 6 Abs. 1 lit. c',
        template: `
// Kündigungsanhörung datenschutzkonform
const terminationHearing = {
  case_id: generateAnonymizedId(),
  timestamp: new Date().toISOString(),
  legal_basis: 'BetrVG § 102',
  
  phase1_anonymous: {
    department: 'Abteilung A',
    position: 'Sachbearbeiter',
    reason_category: 'verhaltensbedingt',
    urgency: 'normal'
  },
  
  phase2_detailed: {
    triggered_only_if: 'works_council_objects',
    additional_data: {
      specific_incidents: 'only_relevant_facts',
      employment_history: 'summary_only',
      previous_warnings: 'documented_only'
    }
  },
  
  data_handling: {
    retention: '6_months_after_case_closure',
    access_restriction: 'works_council_members_only',
    documentation: 'separate_from_personnel_file',
    deletion: 'secure_shredding_digital_wiping'
  }
};
        `
      }
    },
    {
      prozess: 'Beteiligung bei Versetzungen',
      challenge: 'Prüfung der Sozialauswahl und Mitbestimmung bei Arbeitsplatzveränderungen',
      solution: 'Anonymisierte Vergleichsanalyse mit bedarfsgerechter Datenfreigabe',
      implementation: {
        schritte: [
          'Statistische Übersicht aller relevanten Mitarbeiter',
          'Anonymisierte Bewertungskriterien (Alter, Betriebszugehörigkeit, etc.)',
          'Personalisierte Daten nur bei Einspruch gegen Sozialauswahl',
          'Strukturierte Einigung oder Einigungsstellenverfahren'
        ],
        rechtsbasis: 'BetrVG § 95, § 99, DSGVO Art. 6 Abs. 1 lit. f',
        template: `
// Versetzungsverfahren mit Datenschutz
const transferProcedure = {
  procedure_id: generateSecureProcedureId(),
  initiated: new Date().toISOString(),
  legal_framework: 'BetrVG § 95, § 99',
  
  social_selection_data: {
    anonymized_comparison: {
      age_groups: ['<30', '30-45', '45-55', '>55'],
      tenure_groups: ['<2y', '2-10y', '10-20y', '>20y'],
      family_status: ['single', 'married', 'children'],
      disability_status: 'anonymized_count_only'
    },
    
    individual_review: {
      trigger: 'works_council_objection',
      data_scope: 'minimum_necessary_only',
      participants: ['employee', 'works_council', 'management'],
      documentation: 'anonymized_decision_rationale'
    }
  },
  
  compliance_measures: {
    data_minimization: 'only_selection_relevant_data',
    transparency: 'affected_employees_informed',
    retention_limit: '3_years_employment_law',
    appeal_process: 'documented_objection_procedure'
  }
};
        `
      }
    }
  ];

  const implementationRoadmap = [
    {
      phase: 'Analyse & Bestandsaufnahme',
      duration: '2-3 Wochen',
      color: 'blue',
      tasks: [
        'Betriebsratsstrukturen analysieren',
        'Bestehende Datenverarbeitungen erfassen',
        'Rechtliche Anforderungen definieren',
        'Gap-Analyse durchführen',
        'Risikobewertung erstellen'
      ],
      deliverables: ['BR-Datenschutz-Analyse', 'Rechtlicher Rahmenplan', 'Risikoregister']
    },
    {
      phase: 'Organisatorische Strukturen',
      duration: '3-4 Wochen',
      color: 'green',
      tasks: [
        'BR-Datenschutzkonzept entwickeln',
        'Prozessdefinitionen erstellen',
        'Verantwortlichkeiten festlegen',
        'Dokumentationssystem aufbauen',
        'Schulungsplan entwickeln'
      ],
      deliverables: ['BR-Datenschutzrichtlinie', 'Prozesshandbuch', 'Dokumentationsvorlagen']
    },
    {
      phase: 'Technische Umsetzung',
      duration: '4-6 Wochen',
      color: 'orange',
      tasks: [
        'IT-Infrastruktur für BR einrichten',
        'Sicherheitsmaßnahmen implementieren',
        'Verschlüsselungssysteme installieren',
        'Backup-Strategien etablieren',
        'Zugriffskontrollsystem aufbauen'
      ],
      deliverables: ['BR-IT-System', 'Sicherheitskonzept', 'Notfallhandbuch']
    },
    {
      phase: 'Schulung & Go-Live',
      duration: '2-3 Wochen',
      color: 'purple',
      tasks: [
        'BR-Mitglieder schulen',
        'Praxistest durchführen',
        'Prozesse optimieren',
        'Compliance-Checks etablieren',
        'Monitoring einrichten'
      ],
      deliverables: ['Geschulte BR-Mitglieder', 'Live-System', 'Compliance-Dashboard']
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
      <Helmet>
        <title>Datenschutz für Betriebsräte – BetrVG & DSGVO Compliance</title>
        <meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta>
        <meta>
        <meta>
        <meta>
        <link rel="canonical" href="https://marsstein.de/wissen/branchen/datenschutz-betriebsrat" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Datenschutz für Betriebsräte – BetrVG & DSGVO Compliance",
            "description": "Rechtssichere Betriebsratsarbeit: BetrVG-Mitbestimmung datenschutzkonform umsetzen & Compliance sichern",
            "author": {
              "@type": "Organization",
              "name": "Marsstein"
            },
            "publisher": {
              "@type": "Organization", 
              "name": "Marsstein"
            },
            "datePublished": "2024-01-01",
            "dateModified": "2024-12-01"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Wissen",
                "item": "https://marsstein.de/wissen"
              },
              {
                "@type": "ListItem", 
                "position": 2,
                "name": "Branchen",
                "item": "https://marsstein.de/wissen/branchen"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Datenschutz Betriebsrat",
                "item": "https://marsstein.de/wissen/branchen/datenschutz-betriebsrat"
              }
            ]
          })}
        </script>
      </Helmet>
      <Header ></Header>
      
      <main class="overflow-hidden">
        {/* Hero Section with Parallax */}
        <section>
          <div class="absolute inset-0 -z-10">
            <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" ></div>
            <div class="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" ></div>
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
                    <HandshakeIcon class="h-4 w-4" ></HandshakeIcon>
                    <span class="text-sm font-medium">Betriebsrat & Datenschutz</span>
                  </div>
                  
                  <h1>
                    Datenschutz für
                    <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
                      Betriebsräte
                    </span>
                  </h1>
                  
                  <p>
                    Rechtssichere Betriebsratsarbeit zwischen BetrVG und DSGVO. 
                    Wir zeigen Ihnen, wie Sie Ihre Mitbestimmungsrechte datenschutzkonform ausüben.
                  </p>

                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>BetrVG-konforme Datenverarbeitung</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>DSGVO-Compliance in der Betriebsratsarbeit</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>Sichere IT-Infrastruktur für Betriebsräte</span>
                    </div>
                  </div>

                  <div>
                    <a href="/contact?demo=true&industry=betriebsrat">
                      <Button>
                        <Users class="mr-2 h-5 w-5" ></Users>
                        Betriebsrat-Beratung buchen
                        <ArrowRight>
                      </Button>
                    </a>
                    <Button size="lg" variant="outline" class="group">
                      <Download class="mr-2 h-5 w-5" ></Download>
                      BR-Datenschutz Leitfaden
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
                        <h3 class="font-bold text-lg">Betriebsrat Compliance Center</h3>
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
                      <HandshakeIcon class="h-4 w-4 text-blue-500 animate-pulse" ></HandshakeIcon>
                      <span class="text-sm font-medium">BetrVG Ready</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Sticky Navigation */}
        <nav>
          <div class="container px-4">
            <div class="max-w-7xl mx-auto">
              <div>
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
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Sections */}
        <div class="py-20">
          <div class="container px-4">
            <div class="max-w-7xl mx-auto space-y-20">

              {/* Overview Section */}
              <section id="overview" class="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Betriebsrat & Datenschutz - Herausforderungen und Lösungen
                </motion.h2>
                  <div>
                    <Card class="p-6">
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <Shield class="h-6 w-6 text-blue-600" ></Shield>
                          Rechtliche Herausforderungen
                        </CardTitle>
                      </CardHeader>
                      <CardContent class="space-y-4">
                        <p>
                          Betriebsräte bewegen sich in einem komplexen rechtlichen Spannungsfeld zwischen 
                          Mitbestimmungsrechten aus dem BetrVG und Datenschutzanforderungen der DSGVO.
                        </p>
                        
                        <div class="space-y-3">
                          {[
                            'Zugang zu Personaldaten vs. Datenschutz',
                            'Informationsrechte vs. Datenminimierung',
                            'Vertretung der Belegschaft vs. Privatsphäre',
                            'Transparenz vs. Geschäftsgeheimnisse'
                          ].map((item, i) => (
                            <div key={i} class="flex items-start gap-3">
                              <AlertTriangle class="h-4 w-4 text-orange-600 flex-shrink-0 mt-1" ></AlertTriangle>
                              <span class="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <div class="flex items-center gap-2 mb-2">
                            <Gavel class="h-4 w-4 text-blue-600" ></Gavel>
                            <span>
                              Rechtslage
                            </span>
                          </div>
                          <p>
                            BetrVG und DSGVO sind gleichrangig - es bedarf einer Abwägung im Einzelfall
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card class="p-6">
                      <CardHeader>
                        <CardTitle class="flex items-center gap-2">
                          <Target class="h-6 w-6 text-green-600" ></Target>
                          Praktische Lösungsansätze
                        </CardTitle>
                      </CardHeader>
                      <CardContent class="space-y-4">
                        <p>
                          Durch systematische Herangehensweise und klare Prozesse lassen sich 
                          Betriebsratsrechte datenschutzkonform ausüben.
                        </p>
                        
                        <div class="space-y-3">
                          {[
                            'Gestufte Informationsverfahren entwickeln', 
                            'Datenminimierung bei BR-Anfragen beachten',
                            'Sichere IT-Infrastruktur für BR aufbauen',
                            'Schulung aller BR-Mitglieder durchführen'
                          ].map((item, i) => (
                            <div key={i} class="flex items-start gap-3">
                              <CheckCircle2 class="h-4 w-4 text-green-600 flex-shrink-0 mt-1" ></CheckCircle2>
                              <span class="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div>
                          <div class="flex items-center gap-2 mb-2">
                            <Lightbulb class="h-4 w-4 text-green-600" ></Lightbulb>
                            <span>
                              Best Practice
                            </span>
                          </div>
                          <p>
                            Frühe Einbindung des Datenschutzbeauftragten in BR-Verfahren verhindert Konflikte
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
              </section>

              {/* Divider */}
              <div>

              {/* Rechtsgrundlagen Section */}
              <section id="rechtsgrundlagen" class="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Rechtsgrundlagen für Betriebsratsdatenverarbeitung
                </motion.h2>
                  <div class="space-y-8">
                    {rechtsgrundlagen.map((rechtsgrundlage, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card class="border-l-4 border-blue-500">
                          <CardHeader>
                            <div class="flex items-start justify-between">
                              <CardTitle class="text-xl pr-4">{rechtsgrundlage.title}</CardTitle>
                              <Badge>
                                {rechtsgrundlage.risk} Risiko
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent class="space-y-6">
                            <p>
                              {rechtsgrundlage.description}
                            </p>
                            
                            <div>
                              <div>
                                <h4 class="font-semibold mb-3 flex items-center gap-2">
                                  <Scale class="h-4 w-4 text-blue-600" ></Scale>
                                  Relevante Bestimmungen
                                </h4>
                                <div class="space-y-2">
                                  {rechtsgrundlage.paragraphs.map((paragraph, i) => (
                                    <div>
                                      <Badge variant="outline" class="text-xs flex-shrink-0">
                                        {paragraph.nr}
                                      </Badge>
                                      <span class="text-sm">{paragraph.content}</span>
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
                                    {rechtsgrundlage.fineExample}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {rechtsgrundlage.realWorldScenario && (
                              <div class="space-y-6">
                                <button
                                 ` ? null : `rechtsgrund-${index}`)}
                                  class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                                >
                                  <Lightbulb class="h-4 w-4" ></Lightbulb>
                                  Praxis-Szenario anzeigen
                                  <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                    expandedSection === `rechtsgrund-${index}` && "rotate-180")} ></ChevronDown>
                                </button>
                                
                                {expandedSection === `rechtsgrund-${index}` && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    class="mt-4"
                                  >
                                    <div>
                                      <div class="text-center">
                                        <h3>
                                          {rechtsgrundlage.realWorldScenario.title}
                                        </h3>
                                        <p>
                                          {rechtsgrundlage.realWorldScenario.context}
                                        </p>
                                      </div>
                                      
                                      <div>
                                        <h4>
                                          <AlertTriangle class="h-4 w-4" ></AlertTriangle>
                                          Herausforderung
                                        </h4>
                                        <p>
                                          {rechtsgrundlage.realWorldScenario.challenge}
                                        </p>
                                      </div>
                                      
                                      <div class="space-y-4">
                                        <h4>
                                          <CheckCircle2 class="h-4 w-4" ></CheckCircle2>
                                          Lösungsansatz
                                        </h4>
                                        {Object.values(rechtsgrundlage.realWorldScenario.solution).map((step: any, stepIndex) => (
                                          <div>
                                            <h5>
                                              {step.title}
                                            </h5>
                                            <p>
                                              {step.description}
                                            </p>
                                            {step.modules && (
                                              <div>
                                                {step.modules.map((module: any, moduleIndex: number) => (
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
                                                    {module.legal && (
                                                      <div>
                                                        {module.legal}
                                                      </div>
                                                    )}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.transparency && (
                                              <div>
                                                {step.transparency.map((item: string, itemIndex: number) => (
                                                  <div key={itemIndex} class="flex items-start gap-2 text-sm">
                                                    <CheckCircle2 class="h-3 w-3 text-green-600 mt-1 flex-shrink-0" ></CheckCircle2>
                                                    <span>{item}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.features && (
                                              <div>
                                                {step.features.map((feature: string, featureIndex: number) => (
                                                  <div key={featureIndex} class="flex items-start gap-2 text-sm">
                                                    <MessageSquare class="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" ></MessageSquare>
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
                                          {Object.entries(rechtsgrundlage.realWorldScenario.outcome).map(([key, value]: [string, any]) => (
                                            <div key={key} class="text-sm">
                                              <span class="font-medium capitalize">:</span>
                                              <br />
                                              <span>{value}</span>
                                            </div>
                                          ))}
                                        </div>
                                        <div class="space-y-2">
                                          <h5>Key Learnings:</h5>
                                          {rechtsgrundlage.realWorldScenario.keyLearnings.map((learning: string, learningIndex: number) => (
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

              {/* Datenarten Section */}
              <section id="datenarten" class="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Datenarten in der Betriebsratsarbeit
                </motion.h2>
                  <div>
                    {datenarten.map((datenart, index) => (
                      <Card key={index} class="p-6">
                        <CardHeader>
                          <CardTitle class="flex items-center gap-2">
                            <datenart.icon class="h-6 w-6 text-blue-600" ></datenart>
                            {datenart.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent class="space-y-4">
                          <p>
                            {datenart.description}
                          </p>
                          
                          <div>
                            <h4 class="font-semibold mb-2">Typische Datentypen:</h4>
                            <div class="space-y-1">
                              {datenart.examples.map((example, i) => (
                                <div key={i} class="flex items-start gap-2 text-sm">
                                  <Database class="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" ></Database>
                                  <span>{example}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div class="space-y-3 pt-3 border-t">
                            <div>
                              <span class="text-sm font-medium">Rechtsgrundlage: </span>
                              <Badge variant="outline" class="text-xs">
                                {datenart.rechtsgrundlage}
                              </Badge>
                            </div>
                            <div>
                              <span class="text-sm font-medium">Speicherdauer: </span>
                              <span class="text-sm text-gray-600">{datenart.speicherdauer}</span>
                            </div>
                            <div>
                              <span>Besonderheiten: </span>
                              <span>{datenart.besonderheiten}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
              </section>

              {/* Divider */}
              <div>

              {/* TOM Section */}
              <section id="tom" class="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Technische und Organisatorische Maßnahmen für Betriebsräte
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
                              <h4 class="font-semibold mb-3">Maßnahmen</h4>
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
                              <h4 class="font-semibold mb-3">Anwendungsbereiche</h4>
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
                                  <div class="grid grid-cols-1 gap-3">
                                    {(tom.practicalImplementation.zones || tom.practicalImplementation.roles || tom.practicalImplementation.layers || []).map((item: any, itemIndex: number) => (
                                      <div>
                                        <div>
                                          {item.name}
                                        </div>
                                        <div>
                                          {item.security || item.permissions || item.protection}
                                        </div>
                                        <div>
                                          <strong>{item.access ? 'Zugang' : item.restrictions ? 'Einschränkungen' : 'Nutzen'}:</strong> {item.access || item.restrictions || item.benefit}
                                        </div>
                                        <div>
                                          {item.measures || item.security || item.technology}
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

              {/* Betriebsratsprozesse Section */}
              <section id="prozesse" class="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Datenschutzkonforme Betriebsratsprozesse
                </motion.h2>
                  <div class="space-y-8">
                    {betriebsratsProzesse.map((prozess, index) => (
                      <Card key={index} class="p-6">
                        <CardHeader>
                          <CardTitle class="flex items-center gap-2">
                            <Activity class="h-6 w-6 text-green-600" ></Activity>
                            {prozess.prozess}
                          </CardTitle>
                        </CardHeader>
                        <CardContent class="space-y-6">
                          <div>
                            <div>
                              <h4 class="font-semibold mb-3 text-red-700">Herausforderung</h4>
                              <p>
                                {prozess.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 class="font-semibold mb-3 text-green-700">Lösung</h4>
                              <p>
                                {prozess.solution}
                              </p>
                            </div>
                            <div>
                              <h4 class="font-semibold mb-3 text-blue-700">Rechtsbasis</h4>
                              <Badge variant="outline" class="text-sm">
                                {prozess.implementation.rechtsbasis}
                              </Badge>
                            </div>
                          </div>

                          <div>
                            <h4 class="font-semibold mb-3">Umsetzungsschritte</h4>
                            <div>
                              {prozess.implementation.schritte.map((schritt, i) => (
                                <div>
                                  <span>
                                    {i + 1}
                                  </span>
                                  <span class="text-sm">{schritt}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <button
                             ` ? null : `prozess-${index}`)}
                              class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <FileText class="h-4 w-4" ></FileText>
                              Code-Template anzeigen
                              <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                expandedSection === `prozess-${index}` && "rotate-180")} ></ChevronDown>
                            </button>
                            
                            {expandedSection === `prozess-${index}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                class="mt-4"
                              >
                                <div class="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre class="text-green-400 text-xs">
                                    {prozess.implementation.template}
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
              <section id="implementation" class="space-y-8 scroll-mt-32" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Umsetzungsfahrplan für datenschutzkonforme Betriebsratsarbeit
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
                        Interaktive Betriebsrat-Checkliste
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
                            'BetrVG-Rechte und DSGVO-Pflichten abgestimmt',
                            'Verzeichnis der BR-Verarbeitungstätigkeiten erstellt',
                            'Zusammenarbeit mit DSB etabliert',
                            'Rechtssichere Datenerhebungsverfahren definiert'
                          ]
                        },
                        {
                          category: 'Technische Infrastruktur', 
                          items: [
                            'Separate IT-Ausstattung für BR eingerichtet',
                            'Sichere Kommunikationskanäle implementiert',
                            'Verschlüsselte Datenspeicherung aktiviert',
                            'Zugriffskontrollsystem für BR-Räume installiert'
                          ]
                        },
                        {
                          category: 'Organisatorische Maßnahmen',
                          items: [
                            'Alle BR-Mitglieder zu Datenschutz geschult',
                            'BR-spezifische Datenschutzrichtlinie erstellt',
                            'Prozesse für Datenauskunft und -löschung definiert',
                            'Notfallplan für Datenschutzverletzungen entwickelt'
                          ]
                        }
                      ].map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                          <h4 class="font-semibold mb-3">{section.category}</h4>
                          <div>
                            {section.items.map((item, itemIndex) => {
                              const itemId = `${sectionIndex}-${itemIndex}`;
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
                <Card class="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden relative">
                  <div class="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" ></div>
                  <CardContent>
                    <div class="max-w-4xl mx-auto space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <HandshakeIcon class="h-16 w-16 mx-auto mb-6 text-white" ></HandshakeIcon>
                      </motion.div>
                      
                      <h2>
                        Rechtssichere Betriebsratsarbeit beginnt hier
                      </h2>
                      <p class="text-xl text-white/90 max-w-3xl mx-auto">
                        Vereinen Sie erfolgreich Mitbestimmungsrechte mit Datenschutz-Compliance. 
                        Unsere Experten unterstützen Sie bei der rechtssicheren Gestaltung Ihrer Betriebsratsarbeit.
                      </p>
                      
                      <div>
                        <a href="/contact?demo=true&industry=betriebsrat">
                          <Button>
                            <Users class="mr-2 h-5 w-5" ></Users>
                            Kostenlose Betriebsrat-Beratung
                            <ArrowRight>
                          </Button>
                        </a>
                        <Button>
                          <Download class="mr-2 h-5 w-5" ></Download>
                          Betriebsrat Datenschutz-Guide (PDF)
                        </Button>
                      </div>

                      <div>
                        {[
                          { icon: HandshakeIcon, title: 'Betriebsrat-Expertise', subtitle: 'Spezialisiert auf BR-Datenschutz' },
                          { icon: Shield, title: 'BetrVG + DSGVO konform', subtitle: 'Rechtssichere Prozesse' },
                          { icon: Award, title: 'TÜV-zertifizierte Beratung', subtitle: 'Höchste Qualitätsstandards' }
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
                    Weiterführende Ressourcen für Betriebsräte
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <a href="/wissen/branchen/datenschutz-homeoffice" class="block group">
                      <div>
                        <Shield class="h-5 w-5 text-blue-600 mb-2" ></Shield>
                        <div class="font-medium">Datenschutz Homeoffice</div>
                        <div class="text-sm text-gray-600">Sicheres Arbeiten im Homeoffice</div>
                      </div>
                    </a>
                    <a href="/wissen/compliance/audit-management" class="block group">
                      <div>
                        <CheckSquare class="h-5 w-5 text-green-600 mb-2" ></CheckSquare>
                        <div class="font-medium">Audit Management</div>
                        <div class="text-sm text-gray-600">DSGVO-Audits erfolgreich meistern</div>
                      </div>
                    </a>
                    <a href="/wissen/it-sicherheit/verschluesselung" class="block group">
                      <div>
                        <Lock class="h-5 w-5 text-purple-600 mb-2" ></Lock>
                        <div class="font-medium">Verschlüsselung</div>
                        <div class="text-sm text-gray-600">Sichere Datenkommunikation</div>
                      </div>
                    </a>
                    <a href="/wissen/recht/beschaeftigtendatenschutz" class="block group">
                      <div>
                        <Users class="h-5 w-5 text-orange-600 mb-2" ></Users>
                        <div class="font-medium">Beschäftigtendatenschutz</div>
                        <div class="text-sm text-gray-600">Rechtliche Grundlagen im HR</div>
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