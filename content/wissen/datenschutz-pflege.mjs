export default {
  route: '/wissen/branchen/datenschutz-pflege',
  title: 'Datenschutz Pflege',
  description: 'Rechtssichere DSGVO-Compliance für Pflegeheime, ambulante Dienste und Betreuungseinrichtungen. 
                    Von der Einwilligung bis zur sicheren Pflege',
  content: `) => ;
  }, []);
  
  // Navigation items for sticky navigation
  const navigationItems = [
    { id: 'ueberblick', label: 'Überblick', icon: Shield },
    { id: 'rechtliche-grundlagen', label: 'Rechtliche Grundlagen', icon: Scale },
    { id: 'einwilligungsmanagement', label: 'Einwilligungsmanagement', icon: UserCheck },
    { id: 'tom-pflege', label: 'TOM Pflege', icon: Settings },
    { id: 'dsfa-risiken', label: 'DSFA & Risiken', icon: BarChart3 },
    { id: 'praxis-umsetzung', label: 'Praxis-Umsetzung', icon: Code }
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
    { label: 'Pflegedokumentation DSGVO', value: 89, color: 'text-red-600', trend: '+12%' },
    { label: 'Einwilligungsmanagement', value: 85, color: 'text-pink-600', trend: '+18%' },
    { label: 'Bewohnerschutz TOM', value: 92, color: 'text-rose-600', trend: '+9%' },
    { label: 'Angehörigen-Kommunikation', value: 87, color: 'text-red-500', trend: '+15%' },
    { label: 'Digitale Archivierung', value: 83, color: 'text-orange-500', trend: '+22%' },
    { label: 'Notfall-Compliance', value: 95, color: 'text-purple-600', trend: '+6%' }
  ];

  const legalRequirements = [
    {
      title: 'Art. 9 DSGVO - Gesundheitsdaten in der Pflege',
      description: 'Besondere Kategorien personenbezogener Daten erfordern spezielle Rechtsgrundlagen in Pflegeeinrichtungen',
      examples: ['Medizinische Diagnosen und Behandlungen', 'Pflegebedürftigkeitsstufen', 'Medikamentenpläne', 'Vitalwerte und Monitoring-Daten'],
      risk: 'Kritisch',
      fineExample: 'Bis zu 20 Mio. € oder 4% des Jahresumsatzes',
      realWorldScenario: {
        title: '🏠 Praxis-Szenario: Digitale Pflegedokumentation',
        context: 'Ein 150-Betten-Pflegeheim führt ein digitales Dokumentationssystem ein. Pflegekräfte dokumentieren täglich Medikamentengabe, Vitalwerte und Pflegehandlungen digital.',
        challenge: 'Wie kann das Pflegeheim die rechtssichere Dokumentation gewährleisten, während gleichzeitig der Datenschutz der Bewohner maximiert wird?',
        solution: {
          step1: {
            title: '📋 Rollenbasiertes Zugriffskonzept',
            description: 'Differenzierte Berechtigungen je nach Funktion im Pflegeteam',
            roles: [
              {
                name: 'Pflegefachkräfte',
                access: 'Vollzugriff auf zugewiesene Bewohner',
                restrictions: 'Nur während der Schicht aktiv',
                documentation: 'Alle Pflegehandlungen und Medikamentengabe'
              },
              {
                name: 'Betreuungskräfte',
                access: 'Basis-Informationen und Aktivitäten',
                restrictions: 'Keine medizinischen Daten',
                documentation: 'Soziale Betreuung und Wohlbefinden'
              },
              {
                name: 'Verwaltung',
                access: 'Abrechnungsrelevante Daten',
                restrictions: 'Keine Gesundheitsdaten sichtbar',
                documentation: 'Aufenthaltsdauer und Pflegestufen'
              },
              {
                name: 'Ärzte',
                access: 'Medizinische Daten bei Behandlung',
                restrictions: 'Nur bei aktiver Behandlung',
                documentation: 'Verordnungen und Diagnosen'
              }
            ]
          },
          step2: {
            title: '🔒 Technische Schutzmaßnahmen',
            description: 'Mehrstufige Sicherheitsarchitektur für Pflegedaten',
            measures: [
              {
                level: 'Eingabeebene',
                protection: 'Biometrische Anmeldung für Pflegekräfte',
                benefit: 'Eindeutige Zuordnung aller Dokumentationen',
                implementation: 'Fingerprint + PIN-Kombination'
              },
              {
                level: 'Übertragungsebene',
                protection: 'Ende-zu-Ende-Verschlüsselung zwischen Stationen',
                benefit: 'Schutz bei WLAN-Übertragung',
                implementation: 'WPA3 + zusätzliche VPN-Tunnel'
              },
              {
                level: 'Speicherebene',
                protection: 'Feld-level Encryption für Gesundheitsdaten',
                benefit: 'Granularer Schutz sensibler Informationen',
                implementation: 'AES-256 für alle Patientendaten'
              },
              {
                level: 'Archivebene',
                protection: 'Unveränderbare Langzeitarchivierung',
                benefit: 'Rechtssichere Aufbewahrung über 30 Jahre',
                implementation: 'Blockchain-basierte Integrität'
              }
            ]
          },
          step3: {
            title: '📱 Benutzerfreundliche Compliance',
            description: 'Einfache Handhabung trotz hoher Sicherheitsanforderungen',
            features: [
              'One-Click-Dokumentation häufiger Pflegehandlungen',
              'Automatische Zeitstempelung aller Einträge',
              'Spracherkennung für Notfall-Dokumentation',
              'Mobile Tablets für Dokumentation am Bewohnerzimmer'
            ]
          }
        },
        outcome: {
          efficiency: '35% weniger Dokumentationsaufwand bei höherer Qualität',
          compliance: '98% DSGVO-konforme Dokumentation durch Automation',
          satisfaction: 'Pflegekräfte-Zufriedenheit +40% durch vereinfachte Abläufe'
        },
        keyLearnings: [
          'Technische Lösungen müssen die Pflege-Realität berücksichtigen',
          'Automatisierung reduziert menschliche Fehler erheblich',
          'Biometrische Authentifizierung wird von Pflegekräften gut angenommen',
          'Mobile Dokumentation verbessert Bewohner-Pflegekraft-Interaktion'
        ]
      }
    },
    {
      title: 'Einwilligungsmanagement bei eingeschränkter Geschäftsfähigkeit',
      description: 'Besondere Herausforderungen bei Demenz, geistiger Behinderung oder rechtlicher Betreuung',
      examples: ['Betreuungsrechtliche Einwilligungen', 'Angehörigen-Vollmachten', 'Notfall-Situationen ohne Einwilligung', 'Widerruf bei fortschreitender Demenz'],
      risk: 'Hoch',
      fineExample: 'Bis zu 10 Mio. € bei fehlerhaftem Einwilligungsmanagement',
      realWorldScenario: {
        title: '🧠 Praxis-Szenario: Demenz-Station Einwilligungsmanagement',
        context: 'Eine spezialisierte Demenz-Station mit 40 Bewohnern muss verschiedene Einwilligungssituationen rechtssicher handhaben.',
        challenge: 'Wie können Einwilligungen bei fortschreitender Demenz rechtskonform verwaltet werden?',
        solution: {
          step1: {
            title: '📋 Gestuftes Einwilligungsmodell',
            description: 'Anpassung der Einwilligung an den Krankheitsverlauf',
            stages: [
              {
                stage: 'Frühe Demenz',
                capacity: 'Eingeschränkt einwilligungsfähig',
                approach: 'Assistierte Einwilligung mit vereinfachten Erklärungen',
                documentation: 'Video-dokumentierte Aufklärung und Einwilligung'
              },
              {
                stage: 'Mittlere Demenz',
                capacity: 'Situativ einwilligungsfähig',
                approach: 'Tagesform-abhängige Einwilligung mit Betreuer',
                documentation: 'Mehrfache Bestätigung in luciden Momenten'
              },
              {
                stage: 'Schwere Demenz',
                capacity: 'Nicht einwilligungsfähig',
                approach: 'Gesetzlicher Betreuer oder Vorsorgevollmacht',
                documentation: 'Stellvertretende Einwilligung mit Begründung'
              }
            ]
          },
          step2: {
            title: '👨‍👩‍👧‍👦 Angehörigen-Integration',
            description: 'Strukturierte Einbindung von Angehörigen und Betreuern',
            process: [
              'Regelmäßige Aufklärungs- und Einwilligungsrunden',
              'Transparente Kommunikation über Datenverarbeitung',
              'Dokumentation aller Beteiligten und ihrer Rollen',
              'Widerrufsrecht und dessen praktische Umsetzung'
            ]
          },
          step3: {
            title: '⚖️ Rechtliche Absicherung',
            description: 'Compliance mit Betreuungsrecht und DSGVO',
            measures: [
              'Enge Zusammenarbeit mit Betreuungsgerichten',
              'Regelmäßige juristische Prüfung der Einwilligungen',
              'Dokumentation der Einwilligungsfähigkeits-Bewertung',
              'Notfall-Prozeduren für dringende medizinische Situationen'
            ]
          }
        },
        outcome: {
          legalSecurity: 'Null Beanstandungen bei Heimaufsicht-Prüfungen',
          familySatisfaction: 'Angehörigen-Zufriedenheit +50% durch Transparenz',
          staffConfidence: 'Rechtssicherheit für Pflegekräfte bei schwierigen Entscheidungen'
        },
        keyLearnings: [
          'Frühzeitige Einwilligung solange möglich spart spätere Probleme',
          'Angehörigen-Kommunikation ist entscheidend für Akzeptanz',
          'Dokumentation muss den Krankheitsverlauf widerspiegeln',
          'Ethische Bewertung gehört zur rechtlichen Absicherung'
        ]
      }
    },
    {
      title: 'Notfallsituationen und lebenswichtige Interessen',
      description: 'Art. 9 Abs. 2 lit. c DSGVO ermöglicht Datenverarbeitung zum Schutz lebenswichtiger Interessen',
      examples: ['Medizinische Notfälle ohne Bewusstsein', 'Suizidgefahr und Eigen-/Fremdgefährdung', 'Epidemie-Schutzmaßnahmen', 'Notfall-Kontaktierung von Angehörigen'],
      risk: 'Mittel',
      fineExample: 'Rechtmäßig bei ordnungsgemäßer Dokumentation',
      implementation: {
        requirements: [
          'Unmittelbare Lebensgefahr oder schwere Gesundheitsgefährdung',
          'Dokumentation der Notfallsituation und Dringlichkeit',
          'Nachträgliche Information sobald möglich',
          'Beschränkung auf unbedingt erforderliche Daten'
        ],
        template: `
// Notfall-Datenverarbeitung in Pflegeeinrichtungen
const pflegeNotfallProtokoll = {
  notfallId: generateNotfallId(),
  timestamp: new Date().toISOString(),
  rechtslage: 'Art. 9 Abs. 2 lit. c DSGVO - Lebenswichtige Interessen',
  
  situation: {
    bewohner: 'Bewohner-ID verschlüsselt',
    notfallArt: 'herz_kreislauf_stillstand',
    bewusstsein: 'bewusstlos',
    vitalzeichen: 'kritisch',
    zeugen: ['Pflegekraft-ID-1', 'Pflegekraft-ID-2'],
    ersthelfer: 'Pflegekraft-ID-1'
  },
  
  datenverarbeitung: {
    verarbeiteteInfo: [
      'Vitalzeichen für Notarzt',
      'Medikamentenliste für Behandlung',
      'Bekannte Allergien und Vorerkrankungen',
      'Notfallkontakte für Information'
    ],
    nichtVerarbeitet: [
      'Nicht-medizinische Daten',
      'Angehörigen-Gespräche',
      'Finanzielle Informationen'
    ]
  },
  
  nachbearbeitung: {
    angehörigenInfo: {
      erforderlich: true,
      frist: 'innerhalb_24h',
      methode: 'telefonisch_und_schriftlich',
      status: 'ausstehend'
    },
    bewohnerInfo: {
      sobaldMöglich: true,
      bewusstseinWiederherstellung: 'abwarten',
      aufklärung: 'vollständig_über_datenverarbeitung'
    },
    dokumentation: {
      medizinischeBegründung: 'detaillierte_notfall_bewertung',
      datenschutzPrüfung: 'unvermeidbare_datenverarbeitung',
      legalBewertung: 'verhältnismäßig_und_erforderlich'
    }
  }
};
        `
      }
    }
  ];

  const consentManagement = [
    {
      scenario: 'Aufnahme ins Pflegeheim',
      challenge: 'Umfassende Datenerhebung bei Heimeinzug rechtssicher gestalten',
      solution: 'Gestuftes, transparentes Einwilligungsverfahren',
      implementation: {
        modules: [
          'Grundversorgung (Rechtlich erforderlich)',
          'Erweiterte Betreuung (Freiwillig)',
          'Angehörigen-Kommunikation (Opt-in)',
          'Qualitätssicherung (Anonymisiert)'
        ],
        technical: `
// Modulares Einwilligungsmanagement Pflegeheim
const pflegeheimEinwilligung = {
  grundversorgung: {
    erforderlich: true,
    rechtsgrundlage: 'Art. 6 Abs. 1 lit. b DSGVO + Art. 9 Abs. 2 lit. h',
    beschreibung: 'Pflegeleistungen gemäß Heimvertrag',
    datenarten: ['gesundheitszustand', 'pflegebedarf', 'medikamente', 'allergien'],
    speicherdauer: '30_jahre_nach_auszug'
  },
  
  erweiterteBeutreuung: {
    erforderlich: false,
    rechtsgrundlage: 'Art. 9 Abs. 2 lit. a DSGVO - Explizite Einwilligung',
    beschreibung: 'Zusätzliche Betreuungsangebote und -dokumentation',
    datenarten: ['soziale_kontakte', 'hobbys', 'lebensgeschichte', 'vorlieben'],
    nutzen: 'Personalisierte Betreuung und Aktivitäten',
    widerruf: 'jederzeit_ohne_auswirkung_grundversorgung'
  },
  
  angehörigenKommunikation: {
    erforderlich: false,
    rechtsgrundlage: 'Art. 9 Abs. 2 lit. a DSGVO',
    beschreibung: 'Regelmäßige Information über Befinden und Pflege',
    datenarten: ['pflegestatus', 'gesundheitsverlauf', 'aktivitäten'],
    kommunikationswege: ['telefon', 'email', 'app', 'persönlich'],
    widerruf: 'separate_steuerung_je_angehöriger'
  },
  
  qualitätssicherung: {
    erforderlich: false,
    rechtsgrundlage: 'Art. 9 Abs. 2 lit. a DSGVO',
    beschreibung: 'Anonymisierte Daten für Pflegequalitäts-Verbesserung',
    datenarten: ['anonymisierte_pflegeergebnisse', 'zufriedenheit'],
    nutzen: 'Verbesserung der Pflegequalität für alle Bewohner',
    anonymisierung: 'vollständig_nach_wissenschaftlichen_standards'
  }
};
        `
      }
    },
    {
      scenario: 'Digitale Angehörigen-App',
      challenge: 'Sichere Kommunikation zwischen Pflegeheim und Familien',
      solution: 'Ende-zu-Ende verschlüsselte Kommunikationsplattform',
      implementation: {
        modules: [
          'Basis-Informationen (Status-Updates)',
          'Detaillierte Berichte (Opt-in)',
          'Video-Calls (Terminbasiert)',
          'Notfall-Benachrichtigungen (Immer aktiv)'
        ],
        technical: `
// Sichere Angehörigen-Kommunikation
const angehörigenApp = {
  sessionManagement: {
    verschlüsselung: 'end_to_end_encryption',
    authentifizierung: 'zwei_faktor_mit_biometrie',
    sessionDauer: '30_minuten_inaktivität',
    geräteVerknüpfung: 'max_3_geräte_pro_angehöriger'
  },
  
  informationsLevel: {
    basis: {
      inhalt: ['allgemeines_befinden', 'termine', 'aktivitäten'],
      berechtigung: 'alle_angehörigen',
      speicherung: '90_tage'
    },
    detailliert: {
      inhalt: ['pflegeberichte', 'gesundheitsverlauf', 'medikamente'],
      berechtigung: 'nur_bevollmächtigte',
      speicherung: '30_tage',
      zusatzEinwilligung: 'erforderlich'
    },
    notfall: {
      inhalt: ['akute_ereignisse', 'arztbesuche', 'krankenhausaufenthalte'],
      berechtigung: 'automatisch_alle',
      speicherung: '180_tage',
      benachrichtigung: 'push_sms_email'
    }
  },
  
  datenschutzMaßnahmen: {
    serverStandort: 'Deutschland',
    datenMinimierung: 'nur_erforderliche_informationen',
    löschautomatik: 'nach_definierten_fristen',
    auditLog: 'alle_zugriffe_protokolliert',
    angehörigenKontrolle: 'granulare_einstellungen'
  }
};
        `
      }
    }
  ];

  const tomMeasures = [
    {
      category: 'Zutrittskontrolle Pflegeeinrichtung',
      icon: Building2,
      measures: [
        'Elektronische Schließsysteme mit Personalisierung',
        'Besuchermanagement mit Datenerfassung',
        'Demenz-sichere Türsysteme mit Notfall-Override',
        'Videoüberwachung der Eingangsbereiche'
      ],
      healthcareSpecific: 'Bewohnerzimmer, Pflegestützpunkte, Medikamentenlager, Verwaltungsbereiche',
      iso27001: 'A.11.1.1 - Physische Sicherheitsbereiche',
      practicalImplementation: {
        title: 'Bewohner-orientierte Sicherheitszonen',
        description: 'Balance zwischen Sicherheit und Lebensqualität in Pflegeeinrichtungen',
        zones: [
          {
            name: 'Öffentliche Bereiche',
            security: 'Grundschutz',
            access: 'Besucher mit Anmeldung',
            measures: 'Diskreter Schutz der Bewohnerdaten'
          },
          {
            name: 'Bewohnerzimmer',
            security: 'Privatsphären-Schutz',
            access: 'Bewohner + autorisierte Pflegekräfte',
            measures: 'Klopf-Protokoll + elektronische Zutrittskontrolle'
          },
          {
            name: 'Pflegestützpunkte',
            security: 'Mittlere Sicherheit',
            access: 'Nur Pflegepersonal',
            measures: 'RFID-Badges + PIN-Systeme'
          },
          {
            name: 'Verwaltung',
            security: 'Hohe Sicherheit',
            access: 'Leitungsebene + Verwaltung',
            measures: 'Biometrie + Zutritts-Protokollierung'
          }
        ]
      }
    },
    {
      category: 'Digitale Pflegedokumentation',
      icon: FileCheck,
      measures: [
        'Rollenbasierte Berechtigungen nach Qualifikation',
        'Elektronische Signatur für Pflegehandlungen',
        'Automatische Backup-Systeme mit Versionierung',
        'Audit-Trail für alle Dokumentationsänderungen'
      ],
      healthcareSpecific: 'Pflegeberichte, Medikamentengabe, Vitalwerte, Angehörigengespräche',
      iso27001: 'A.9.1.1 - Zugriffsrichtlinie',
      practicalImplementation: {
        title: 'Pflegekraft-zentrierte Dokumentation',
        description: 'Einfache und rechtssichere Dokumentation für alle Qualifikationsstufen',
        roles: [
          {
            name: '👩‍⚕️ Pflegefachkräfte',
            permissions: 'Vollständige Pflegedokumentation',
            restrictions: 'Schichtzeiten + zugewiesene Bewohner',
            security: 'Biometrie + PIN-Code'
          },
          {
            name: '🤝 Betreuungskräfte',
            permissions: 'Soziale Betreuung dokumentieren',
            restrictions: 'Keine medizinischen Einträge',
            security: 'RFID-Badge + PIN'
          },
          {
            name: '🏥 Gastärzte',
            permissions: 'Medizinische Anordnungen',
            restrictions: 'Nur während Visite-Zeiten',
            security: 'Temporäre Accounts + SMS-TAN'
          },
          {
            name: '📊 Heimleitung',
            permissions: 'Qualitätssicherung + Auswertungen',
            restrictions: 'Nur anonymisierte Auswertungen',
            security: 'Starke Authentifizierung + Audit'
          }
        ]
      }
    },
    {
      category: 'Sichere Kommunikation',
      icon: MessageSquare,
      measures: [
        'Ende-zu-Ende-Verschlüsselung für Angehörigen-Apps',
        'Sichere Telemedizin-Verbindungen zu Ärzten',
        'Verschlüsselte E-Mail für externe Kommunikation',
        'Datenschutzkonforme Video-Calls mit Angehörigen'
      ],
      healthcareSpecific: 'Arzt-Kommunikation, Angehörigen-Updates, Notfall-Benachrichtigungen',
      iso27001: 'A.10.1.1 - Kryptographische Kontrollen',
      practicalImplementation: {
        title: 'Ganzheitliche Kommunikationssicherheit',
        description: 'Nahtlose und sichere Kommunikation zwischen allen Beteiligten',
        layers: [
          {
            name: '📱 Angehörigen-App',
            protection: 'Mobile App mit biometrischer Anmeldung',
            benefit: 'Regelmäßige Updates über Bewohner-Befinden',
            technology: 'Flutter + End-to-End-Encryption'
          },
          {
            name: '🩺 Telemedizin',
            protection: 'DSGVO-konforme Video-Konsultationen',
            benefit: 'Ärztliche Betreuung ohne Ortswechsel',
            technology: 'HIPAA/DSGVO-zertifizierte Plattformen'
          },
          {
            name: '📧 E-Mail-Sicherheit',
            protection: 'Automatische Verschlüsselung sensibler Inhalte',
            benefit: 'Sichere Kommunikation mit externen Partnern',
            technology: 'S/MIME + automatische Klassifizierung'
          },
          {
            name: '🚨 Notfall-System',
            protection: 'Gesicherte Benachrichtigungsketten',
            benefit: 'Schnelle Information bei kritischen Situationen',
            technology: 'Redundante Kanäle + Bestätigungsschleifen'
          }
        ]
      }
    }
  ];

  const riskScenarios = [
    {
      scenario: 'Unbefugter Zugriff auf Bewohnerdaten',
      likelihood: 'Mittel',
      impact: 'Hoch',
      riskScore: 80,
      potentialFine: '2-10 Mio. €',
      affectedPersons: '150-300 Bewohner',
      mitigationMeasures: [
        'Biometrische Zutrittskontrolle zu allen IT-Systemen',
        'Automatische Bildschirm-Sperren nach 3 Min Inaktivität',
        'Rollenbasierte Berechtigungen nach Least-Privilege-Prinzip',
        'Regelmäßige Zugriffs-Audits und Mitarbeiterschulungen',
        'Anomalie-Erkennung bei ungewöhnlichen Datenzugriffen'
      ],
      complianceActions: [
        'Sofortige Sperrung verdächtiger Benutzerkonten',
        'Forensische Analyse aller betroffenen Daten',
        'Information der Aufsichtsbehörde binnen 72h',
        'Individuelle Benachrichtigung betroffener Bewohner/Angehörige',
        'Externe Datenschutz-Folgenabschätzung beauftragen'
      ]
    },
    {
      scenario: 'Ransomware-Angriff auf Pflegedokumentation',
      likelihood: 'Hoch',
      impact: 'Kritisch',
      riskScore: 95,
      potentialFine: '10-20 Mio. €',
      affectedPersons: '500+ Bewohner',
      mitigationMeasures: [
        'Air-Gap-Backups mit 3-2-1-Regel für Pflegedaten',
        'Network Segmentation zwischen Verwaltung und Pflege',
        'Endpoint Detection & Response auf allen Systemen',
        'Regelmäßige Penetrationstests der IT-Infrastruktur',
        'Incident Response Team mit 24/7-Bereitschaft'
      ],
      complianceActions: [
        'Notfall-Betrieb mit Papier-Dokumentation aktivieren',
        'Krisenstab einberufen: IT, Geschäftsführung, Datenschutz',
        'Behörden-Information gemäß NIS-2 und DSGVO',
        'Forensische IT-Untersuchung mit externen Experten',
        'Kommunikationsstrategie für Angehörige und Öffentlichkeit'
      ]
    },
    {
      scenario: 'Datenschutz-Beschwerde durch Angehörige',
      likelihood: 'Mittel',
      impact: 'Mittel',
      riskScore: 60,
      potentialFine: '50.000 - 500.000 €',
      affectedPersons: '1-10 Personen',
      mitigationMeasures: [
        'Transparente Datenschutz-Information bei Aufnahme',
        'Regelmäßige Angehörigen-Sprechstunden zu Datenschutz',
        'Einfache Widerrufs- und Löschverfahren',
        'Datenschutzbeauftragte mit Expertise im Gesundheitswesen',
        'Proaktive Kommunikation bei Änderungen der Datenverarbeitung'
      ],
      complianceActions: [
        'Sofortige Bearbeitung der Beschwerde durch DSB',
        'Dokumentation aller durchgeführten Maßnahmen',
        'Prüfung der beanstandeten Datenverarbeitung',
        'Nachbesserung der Prozesse falls erforderlich',
        'Präventivmaßnahmen zur Vermeidung ähnlicher Fälle'
      ]
    }
  ];

  const implementationRoadmap = [
    {
      phase: 'Assessment & Analyse',
      duration: '3-4 Wochen',
      color: 'blue',
      tasks: [
        'Ist-Analyse der aktuellen Datenverarbeitung',
        'Bewertung der Einwilligungssituation',
        'TOM-Bewertung der bestehenden Systeme',
        'Mitarbeiterbefragung zu Datenschutz-Herausforderungen',
        'Rechtliche Bewertung der Pflegedokumentation'
      ],
      deliverables: ['Datenschutz-Audit Report', 'Gap-Analyse Pflege', 'Maßnahmen-Roadmap']
    },
    {
      phase: 'Konzeption & Planung',
      duration: '4-6 Wochen',
      color: 'green',
      tasks: [
        'Datenschutzkonzept für Pflegeeinrichtung',
        'Einwilligungsmanagement-System konzipieren',
        'TOM-Katalog für Pflegebereich entwickeln',
        'Schulungskonzept für alle Mitarbeitergruppen',
        'Notfall- und Krisenmanagement-Prozesse'
      ],
      deliverables: ['Pflege-Datenschutzkonzept', 'Einwilligungsvorlagen', 'TOM-Implementierungsplan']
    },
    {
      phase: 'Technische Umsetzung',
      duration: '6-10 Wochen',
      color: 'orange',
      tasks: [
        'Sichere IT-Infrastruktur für Pflegedokumentation',
        'Angehörigen-Kommunikationssystem implementieren',
        'Zugriffskontroll-Systeme einrichten',
        'Backup- und Recovery-Systeme etablieren',
        'Monitoring und Alerting konfigurieren'
      ],
      deliverables: ['Sichere Pflege-IT', 'Angehörigen-Portal', 'Monitoring-Dashboard']
    },
    {
      phase: 'Schulung & Go-Live',
      duration: '4-6 Wochen',
      color: 'purple',
      tasks: [
        'Mitarbeiterschulungen nach Berufsgruppen',
        'Angehörigen-Information und App-Training',
        'Produktiver Rollout mit Pilotbereich',
        'Prozessoptimierung basierend auf Feedback',
        'Compliance-Monitoring etablieren'
      ],
      deliverables: ['Geschulte Teams', 'Live-System', 'Compliance-Monitoring']
    }
  ];

  const toggleChecklistItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId))  else 
    setCheckedItems(newCheckedItems);
  };

  const getCompletionPercentage = () => ;

  return (
    <>
      <Helmet>
        <title>Datenschutz Pflege DSGVO – Praxis-Guide für Pflegeheime 2024</title>
        <meta name="description" content="DSGVO für Pflegeeinrichtungen: ✓ Bewohnerdaten sicher verwalten ✓ Digitale Pflegedokumentation ✓ TOM-Checklisten ✓ Einwilligung bei Demenz. Jetzt Guide lesen!" />
        <meta name="keywords" content="datenschutz pflege, dsgvo pflegeeinrichtung, pflegedokumentation datenschutz, bewohnerdaten schützen, tom pflegeheim, einwilligung pflege" />
        <link rel="canonical" href="https://marsstein.com/wissen/branchen/datenschutz-pflege" />
        <meta>
        <meta>
        <meta>
        <meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">
          
        </script>
      </Helmet>
      
    <div>
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
                    <span class="text-sm font-medium">DSGVO Datenschutz Pflege</span>
                  </div>
                  
                  <h1>
                    Datenschutz in der
                    <span class="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                      Pflege & Betreuung
                    </span>
                  </h1>
                  
                  <p>
                    Rechtssichere DSGVO-Compliance für Pflegeheime, ambulante Dienste und Betreuungseinrichtungen. 
                    Von der Einwilligung bis zur sicheren Pflegedokumentation.
                  </p>

                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>Einwilligungsmanagement bei eingeschränkter Geschäftsfähigkeit</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>Sichere digitale Pflegedokumentation nach DSGVO</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <CheckCircle2 class="h-5 w-5 text-green-600 flex-shrink-0" ></CheckCircle2>
                      <span>Angehörigen-Kommunikation datenschutzkonform</span>
                    </div>
                  </div>

                  <div>
                    <a href="/contact?demo=true&industry=pflege">
                      <Button>
                        <Heart class="mr-2 h-5 w-5" ></Heart>
                        Pflege Demo buchen
                        <ArrowRight>
                      </Button>
                    </a>
                    <Button size="lg" variant="outline" class="group tap-target min-h-[48px]">
                      <Download class="mr-2 h-5 w-5" ></Download>
                      Pflege DSGVO Leitfaden
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
                        <h3 class="font-bold text-lg">Pflege Compliance Center</h3>
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
                      <Home class="h-4 w-4 text-red-500 animate-pulse" ></Home>
                      <span class="text-sm font-medium">Pflege Ready</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Inhaltsverzeichnis für Mobile und Desktop */}
        <section>
          <div class="container px-4 mx-auto">
            <div class="max-w-4xl mx-auto">
              <nav>
                <h2 class="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookOpen class="h-5 w-5 text-red-600" ></BookOpen>
                  Inhaltsverzeichnis
                </h2>
                <div>
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                     
                      class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left tap-target"
                    >
                      <item.icon class="h-5 w-5 text-red-600 flex-shrink-0" ></item>
                      <span class="text-sm font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
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
                    aria-label=Zu ${item.label} springen
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
              <section id="ueberblick" class="space-y-8 scroll-mt-32" aria-label="Überblick Datenschutz in der Pflege">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  DSGVO-Compliance in Pflegeeinrichtungen
                </motion.h2>
                <div>
                  <Card class="p-6">
                    <CardHeader>
                      <CardTitle class="flex items-center gap-2">
                        <Heart class="h-6 w-6 text-red-600" ></Heart>
                        Besondere Herausforderungen der Pflege
                      </CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                      <p>
                        Pflegeeinrichtungen verarbeiten hochsensible Gesundheitsdaten und stehen vor 
                        besonderen Herausforderungen bei der DSGVO-Compliance, insbesondere beim 
                        Einwilligungsmanagement.
                      </p>
                      
                      <div class="space-y-3">
                        {[
                          'Einwilligung bei eingeschränkter Geschäftsfähigkeit',
                          'Rollenbasierte Zugriffe für verschiedene Berufsgruppen',
                          'Sichere Angehörigen-Kommunikation',
                          'Rechtssichere Pflegedokumentation'
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
                            Besonderes Risiko
                          </span>
                        </div>
                        <p>
                          Art. 9 DSGVO Gesundheitsdaten: Bis zu 20 Mio. € oder 4% des Jahresumsatzes
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card class="p-6">
                    <CardHeader>
                      <CardTitle class="flex items-center gap-2">
                        <Users class="h-6 w-6 text-purple-600" ></Users>
                        Pflege-spezifische Datenverarbeitung
                      </CardTitle>
                    </CardHeader>
                    <CardContent class="space-y-4">
                      <p>
                        Die Digitalisierung der Pflege bringt neue Möglichkeiten, aber auch erhöhte 
                        Datenschutzanforderungen mit sich.
                      </p>
                      
                      <div class="space-y-3">
                        {[
                          'Digitale Pflegedokumentation mit Audit-Trail',
                          'IoT-Monitoring von Vitalwerten', 
                          'Mobile Apps für Angehörigen-Kommunikation',
                          'Telemedizin und Remote-Betreuung'
                        ].map((item, i) => (
                          <div key={i} class="flex items-start gap-3">
                            <Cpu class="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" ></Cpu>
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
                          Privacy by Design von Anfang an - bereits bei der Systemplanuung
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Divider */}
              <div>

              {/* Legal Framework Section */}
              <section id="rechtliche-grundlagen" class="space-y-8 scroll-mt-32" aria-label="Rechtliche Grundlagen">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Rechtliche Grundlagen für Pflegeeinrichtungen
                </motion.h2>
                <div class="space-y-8">
                  {legalRequirements.map((requirement, index) => (
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
                                Anwendungsbeispiele in der Pflege
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
                               ` ? null : `legal-${index}`)}
                                class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                              >
                                <Lightbulb class="h-4 w-4" ></Lightbulb>
                                Praxis-Szenario anzeigen
                                <ChevronDown class={cn("h-4 w-4 transition-transform", 
                                  expandedSection === `legal-${index}` && "rotate-180")} ></ChevronDown>
                              </button>
                              
                              {expandedSection === `legal-${index}` && (
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
                                          {step.roles && (
                                            <div>
                                              {step.roles.map((role, roleIndex) => (
                                                <div>
                                                  <div>
                                                    {role.name}
                                                  </div>
                                                  <div>
                                                    {role.access}
                                                  </div>
                                                  <div>
                                                    <strong>Einschränkungen:</strong> {role.restrictions}
                                                  </div>
                                                  <div>
                                                    📝 {role.documentation}
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                          {step.measures && (
                                            <div>
                                              {step.measures.map((measure, measureIndex) => (
                                                <div>
                                                  <div>
                                                    {measure.level}
                                                  </div>
                                                  <div>
                                                    {measure.protection}
                                                  </div>
                                                  <div>
                                                    <strong>Nutzen:</strong> {measure.benefit}
                                                  </div>
                                                  <div>
                                                    🔧 {measure.implementation}
                                                  </div>
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
                                          {step.stages && (
                                            <div class="space-y-3">
                                              {step.stages.map((stage, stageIndex) => (
                                                <div key={stageIndex} class="border-l-4 border-blue-500 pl-4">
                                                  <div class="font-medium text-sm mb-1">{stage.stage}</div>
                                                  <div>
                                                    <strong>Einwilligungsfähigkeit:</strong> {stage.capacity}
                                                  </div>
                                                  <div>
                                                    <strong>Ansatz:</strong> {stage.approach}
                                                  </div>
                                                  <div>
                                                    📋 {stage.documentation}
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                          {step.process && (
                                            <div>
                                              {step.process.map((process, processIndex) => (
                                                <div key={processIndex} class="flex items-start gap-2 text-sm">
                                                  <CheckCircle2 class="h-3 w-3 text-green-600 mt-1 flex-shrink-0" ></CheckCircle2>
                                                  <span>{process}</span>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                          {step.measures && step.measures.map && (
                                            <div>
                                              {step.measures.map((measure, measureIndex) => (
                                                <div key={measureIndex} class="flex items-start gap-2 text-sm">
                                                  <Shield class="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" ></Shield>
                                                  <span>{measure}</span>
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
                              <h4 class="font-semibold mb-3 flex items-center gap-2">
                                <Code class="h-4 w-4 text-green-600" ></Code>
                                Technische Umsetzung
                              </h4>
                              <div class="space-y-3">
                                <div>
                                  <h5 class="font-medium mb-2">Anforderungen:</h5>
                                  <div>
                                    {requirement.implementation.requirements.map((req, i) => (
                                      <div key={i} class="flex items-start gap-2 text-sm">
                                        <CheckCircle2 class="h-3 w-3 text-green-600 mt-1 flex-shrink-0" ></CheckCircle2>
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
              <section id="einwilligungsmanagement" class="space-y-8 scroll-mt-32" aria-label="Einwilligungsmanagement">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Einwilligungsmanagement in Pflegeeinrichtungen
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
                           ` ? null : `consent-${index}`)}
                            class="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                          >
                            <Code class="h-4 w-4" ></Code>
                            Technische Implementation
                            <ChevronDown class={cn("h-4 w-4 transition-transform", 
                              expandedSection === `consent-${index}` && "rotate-180")} ></ChevronDown>
                          </button>
                          
                          {expandedSection === `consent-${index}` && (
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

              {/* TOM Pflege Section */}
              <section id="tom-pflege" class="space-y-8 scroll-mt-32" aria-label="Technische und Organisatorische Maßnahmen">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Technische und Organisatorische Maßnahmen (TOM) für die Pflege
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
                            <h4 class="font-semibold mb-3">Pflege-spezifisch</h4>
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
              <section id="dsfa-risiken" class="space-y-8 scroll-mt-32" aria-label="Datenschutz-Folgenabschätzung und Risiken">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Datenschutz-Folgenabschätzung & Risikoanalyse für Pflegeeinrichtungen
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
              <section id="praxis-umsetzung" class="space-y-8 scroll-mt-32" aria-label="Praxis-Umsetzung">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  class="text-3xl font-bold mb-8"
                >
                  Praxis-Implementation & Roadmap für Pflegeeinrichtungen
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
                      Interaktive Pflege-Compliance-Checkliste
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
                          'Datenschutzbeauftragte/r für Pflegebereich bestellt',
                          'Verzeichnis der Pflegedaten-Verarbeitung erstellt',
                          'DSFA für Bewohnerdaten durchgeführt',
                          'Auftragsverarbeitungsverträge mit IT-Dienstleistern'
                        ]
                      },
                      {
                        category: 'Einwilligungsmanagement', 
                        items: [
                          'Einwilligungsvorlagen für verschiedene Pflegesituationen',
                          'Prozesse für eingeschränkte Geschäftsfähigkeit',
                          'Angehörigen-Vollmachten rechtlich geprüft',
                          'Widerrufsverfahren etabliert'
                        ]
                      },
                      {
                        category: 'Technische Sicherheit',
                        items: [
                          'Rollenbasierte Zugriffe für Pflegepersonal',
                          'Verschlüsselte Pflegedokumentation',
                          'Sichere Angehörigen-Kommunikation',
                          'Backup-Systeme für Bewohnerdaten'
                        ]
                      },
                      {
                        category: 'Organisatorische Maßnahmen',
                        items: [
                          'Mitarbeiterschulungen DSGVO + Pflege',
                          'Notfall-Prozesse bei Datenschutzvorfällen',
                          'Regelmäßige Audits der Pflegedokumentation',
                          'Angehörigen-Information über Datenverarbeitung'
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
                <Card class="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white overflow-hidden relative">
                  <div class="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" ></div>
                  <CardContent>
                    <div class="max-w-4xl mx-auto space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <Home class="h-16 w-16 mx-auto mb-6 text-white" ></Home>
                      </motion.div>
                      
                      <h2>
                        Starten Sie Ihre DSGVO-konforme Pflege
                      </h2>
                      <p class="text-xl text-white/90 max-w-3xl mx-auto">
                        Nutzen Sie unsere jahrelange Expertise im Bereich Pflege-Datenschutz. 
                        Von der Einwilligung bis zur sicheren Dokumentation – wir begleiten Sie zur vollständigen Compliance.
                      </p>
                      
                      <div>
                        <a href="/contact?demo=true&industry=pflege">
                          <Button>
                            <Heart class="mr-2 h-5 w-5" ></Heart>
                            Kostenlose Pflege-Beratung
                            <ArrowRight>
                          </Button>
                        </a>
                        <Button>
                          <Download class="mr-2 h-5 w-5" ></Download>
                          Umfassender Pflege-DSGVO Guide (PDF)
                        </Button>
                      </div>

                      <div>
                        {[
                          { icon: Heart, title: 'Pflege-Expertise', subtitle: 'Spezialisiert auf Pflegeeinrichtungen' },
                          { icon: Shield, title: 'Vollständige DSGVO-Compliance', subtitle: 'Rechtssichere Umsetzung' },
                          { icon: Award, title: 'Bewährte Lösungen', subtitle: 'Erfolgreich in 500+ Einrichtungen' }
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
                    Weiterführende Pflege-Ressourcen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div>
                    <a href="/wissen/branchen/datenschutz-arztpraxis" class="block group">
                      <div>
                        <Stethoscope class="h-5 w-5 text-red-600 mb-2" ></Stethoscope>
                        <div class="font-medium">Datenschutz Arztpraxis</div>
                        <div class="text-sm text-gray-600">Medizinische Praxen DSGVO</div>
                      </div>
                    </a>
                    <a href="/wissen/leitfaeden/betroffenenrechte" class="block group">
                      <div>
                        <Users class="h-5 w-5 text-purple-600 mb-2" ></Users>
                        <div class="font-medium">Betroffenenrechte</div>
                        <div class="text-sm text-gray-600">Rechte der Bewohner</div>
                      </div>
                    </a>
                    <a href="/wissen/krisenmanagement/data-breach-72h" class="block group">
                      <div>
                        <Timer class="h-5 w-5 text-orange-600 mb-2" ></Timer>
                        <div class="font-medium">Datenpanne Notfall</div>
                        <div class="text-sm text-gray-600">72h Response Plan</div>
                      </div>
                    </a>
                    <a href="/branchen/datenschutz-homeoffice" class="block group">
                      <div>
                        <Home class="h-5 w-5 text-blue-600 mb-2" ></Home>
                        <div class="font-medium">Homeoffice Pflege</div>
                        <div class="text-sm text-gray-600">Remote-Arbeit DSGVO</div>
                      </div>
                    </a>
                  </div>
                  
                  {/* Additional Related Links */}
                  <div>
                    <h3>Verwandte Compliance-Themen</h3>
                    <div>
                      <a href="/wissen/branchen/logistics-compliance" class="group">
                        <div>
                          <h4>Logistics Compliance</h4>
                          <p>Supply Chain DSGVO-Compliance</p>
                        </div>
                      </a>
                      <a href="/wissen/dsgvo-compliance" class="group">
                        <div>
                          <h4>DSGVO Grundlagen</h4>
                          <p>Basiswissen zur EU-Datenschutzverordnung</p>
                        </div>
                      </a>
                      <a href="/services/datenschutzbeauftragter" class="group">
                        <div>
                          <h4>Externer DSB</h4>
                          <p>Datenschutzbeauftragter für Pflegeeinrichtungen</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Related Links Section for SEO */}
        <section>
          <div class="container px-4">
            <div class="max-w-7xl mx-auto">
              <h2 class="text-2xl font-bold mb-6">Verwandte Compliance-Themen</h2>
              <div>
                <a href="/wissen/branchen/logistics-compliance" class="group">
                  <Card>
                    <CardContent class="p-6">
                      <h3>Logistics Compliance</h3>
                      <p>DSGVO-konforme Supply Chain und Tracking</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="/wissen/branchen/datenschutz-arztpraxis" class="group">
                  <Card>
                    <CardContent class="p-6">
                      <h3>Datenschutz Arztpraxis</h3>
                      <p>Patientendatenschutz in der ambulanten Versorgung</p>
                    </CardContent>
                  </Card>
                </a>
                <a href="/wissen/dsgvo-compliance" class="group">
                  <Card>
                    <CardContent class="p-6">
                      <h3>DSGVO Grundlagen</h3>
                      <p>Basiswissen zur EU-Datenschutzverordnung</p>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer ></Footer>
    </div>
    </>`
};