import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Heart,
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
  Stethoscope,
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
  Pill,
  Microscope,
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
  Square
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const HealthcareDsgvoGuide = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>('overview');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Navigation items for sticky navigation
  const navigationItems = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'art9', label: 'Art. 9 DSGVO', icon: Lock },
    { id: 'consent', label: 'Einwilligungsmanagement', icon: UserCheck },
    { id: 'tom', label: 'TOM Healthcare', icon: Settings },
    { id: 'dsfa', label: 'DSFA & Risikoanalyse', icon: BarChart3 },
    { id: 'implementation', label: 'Praxis-Implementation', icon: Code }
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
              {
                name: 'Behandlungsdaten (erforderlich)',
                purpose: 'Grundlegende medizinische Versorgung',
                dataTypes: 'Symptome, Vorerkrankungen, aktuelle Medikation',
                legal: 'Zwingend für Behandlungsvertrag'
              },
              {
                name: 'Erweiterte Diagnostik (optional)',
                purpose: 'Präzisere Diagnose durch Familienanamnese',
                dataTypes: 'Genetische Disposition, Familiengeschichte',
                benefit: 'Früherkennung von Herzerkrankungen möglich'
              },
              {
                name: 'Forschungsteilnahme (freiwillig)',
                purpose: 'Anonymisierte Daten für Herzforschung',
                dataTypes: 'Behandlungsergebnisse, Therapieerfolg',
                incentive: 'Beitrag zur medizinischen Forschung'
              }
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
            medicalWorld: {
              title: 'Medizinische Welt (Betriebsarzt)',
              access: 'Vollständige Gesundheitsdaten',
              purpose: 'Arbeitsmedizinische Vorsorge',
              data: ['Untersuchungsergebnisse', 'Impfstatus', 'Arbeitsplatzrisiken', 'Gesundheitsempfehlungen']
            },
            administrativeWorld: {
              title: 'Administrative Welt (Personalabteilung)',
              access: 'Nur arbeitsrelevante Ergebnisse',
              purpose: 'Arbeitsplatzanpassung',
              data: ['Arbeitsfähigkeit: Ja/Nein', 'Einschränkungen ohne medizinische Details', 'Nächster Termin']
            }
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
        template: `
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
        `
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
        technical: `
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
        `
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
        technical: `
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
        `
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
    {
      scenario: 'Patientendaten-Breach durch Ransomware',
      likelihood: 'Hoch',
      impact: 'Sehr Hoch',
      riskScore: 95,
      potentialFine: '5-20 Mio. €',
      affectedPersons: '10.000+',
      mitigationMeasures: [
        'Immutable Backups mit Air-Gap Isolation',
        'Zero-Trust Network Architecture',
        'Endpoint Detection and Response (EDR)',
        'Incident Response Team 24/7',
        'Cyber Insurance mit DSGVO-Abdeckung'
      ],
      complianceActions: [
        'Meldung an Aufsichtsbehörde binnen 72h',
        'Information betroffener Personen binnen 72h',
        'Forensische Untersuchung dokumentieren',
        'Schadensbegrenzung und -bewertung',
        'Verbesserungsmaßnahmen implementieren'
      ]
    },
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
    {
      phase: 'Assessment & Planung',
      duration: '4-6 Wochen',
      color: 'blue',
      tasks: [
        'DSGVO Healthcare Gap-Analyse',
        'Datenschutz-Folgenabschätzung (DSFA)',
        'Art. 9 Compliance-Audit',
        'Stakeholder-Workshops',
        'Implementierungsplan erstellen'
      ],
      deliverables: ['Gap-Analyse Report', 'DSFA Dokumentation', 'Implementierungsroadmap']
    },
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
      <SEOHead 
        title="Gesundheitswesen DSGVO – Patientendaten rechtssicher verarbeiten"
        description="DSGVO im Gesundheitswesen: Patientendatenschutz, Schweigepflicht, Forschung, eHealth. ✓ Praxisnahe Lösungen ✓ Rechtssicherheit ✓ Compliance-Checklisten."
        canonical="/wissen/branchen/gesundheitswesen-dsgvo"
        keywords="DSGVO Gesundheitswesen, Patientendatenschutz, Schweigepflicht DSGVO, eHealth Datenschutz, medizinische Forschung DSGVO, Gesundheitsdaten Art. 9"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Gesundheitswesen DSGVO – Patientendaten rechtssicher verarbeiten",
          "description": "Umfassender Leitfaden zur DSGVO-Compliance im Gesundheitswesen mit Fokus auf Patientendatenschutz, Schweigepflicht und eHealth.",
          "author": {
            "@type": "Organization",
            "name": "Marsstein"
          },
          "datePublished": "2024-01-15",
          "dateModified": "2024-01-15",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://marsstein.com/wissen/branchen/gesundheitswesen-dsgvo"
          }
        }}
      />
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400">
                    <Heart className="h-4 w-4" />
                    <span className="text-sm font-medium">Healthcare DSGVO Excellence</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Healthcare DSGVO
                    <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                      Art. 9 Compliance Guide
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Meistern Sie die komplexesten Datenschutz-Herausforderungen im Gesundheitswesen. 
                    Von Art. 9 DSGVO über MDR bis hin zu KI-basierten Diagnose-Systemen.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>DSGVO Art. 9 konforme Verarbeitung von Gesundheitsdaten</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>EU AI Act Compliance für medizinische KI-Systeme</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>MDR-Integration und Medizinprodukte-Compliance</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=healthcare">
                      <Button size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 text-white hover:opacity-90 group">
                        <Stethoscope className="mr-2 h-5 w-5" />
                        Healthcare Demo buchen
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      Art. 9 DSGVO Checkliste
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
                  <Card className="p-6 shadow-2xl border-2 border-red-200 dark:border-red-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Healthcare Compliance Center</h3>
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
                    className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-red-500"
                  >
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                      <span className="text-sm font-medium">DSGVO Ready</span>
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
                        ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800"
                        : "hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-400",
                      "border",
                      activeSection === item.id
                        ? "border-red-200 dark:border-red-800"
                        : "border-transparent hover:border-red-200 dark:hover:border-red-800"
                    )}
                  >
                    <item.icon className={cn(
                      "h-4 w-4",
                      activeSection === item.id && "text-red-600 dark:text-red-500"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      activeSection === item.id && "text-red-700 dark:text-red-400"
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
                  className="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  Healthcare DSGVO Überblick
                </motion.h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-6 w-6 text-red-600" />
                          DSGVO Art. 9 - Besondere Kategorien
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Gesundheitsdaten gehören zu den besonderen Kategorien personenbezogener Daten 
                          und erfordern höchste Schutzstandards und spezielle Rechtsgrundlagen.
                        </p>
                        
                        <div className="space-y-3">
                          {[
                            'Explizite Einwilligung oder gesetzliche Erlaubnis',
                            'Erhöhte technische und organisatorische Maßnahmen',
                            'Besondere Transparenz- und Informationspflichten',
                            'Verschärfte Dokumentations- und Nachweispflichten'
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="h-4 w-4 text-red-600" />
                            <span className="font-semibold text-red-800 dark:text-red-400">
                              Bußgeldrisiko
                            </span>
                          </div>
                          <p className="text-sm text-red-700 dark:text-red-300">
                            Bis zu 20 Mio. € oder 4% des weltweiten Jahresumsatzes bei Verstößen gegen Art. 9 DSGVO
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Brain className="h-6 w-6 text-purple-600" />
                          EU AI Act & Healthcare KI
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Medizinische KI-Systeme fallen unter die Hochrisiko-Kategorie des EU AI Act 
                          und erfordern umfassende Compliance-Maßnahmen.
                        </p>
                        
                        <div className="space-y-3">
                          {[
                            'Risikomanagementsystem für KI-Anwendungen',
                            'Transparenz und Erklärbarkeit der Algorithmen', 
                            'Menschliche Aufsicht bei kritischen Entscheidungen',
                            'Kontinuierliche Überwachung und Bias-Monitoring'
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Brain className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
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
                            Implementieren Sie "Human-in-the-Loop" Systeme für alle KI-gestützten Diagnosen
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Art. 9 DSGVO Section */}
              <section id="art9" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  Art. 9 DSGVO - Besondere Kategorien personenbezogener Daten
                </motion.h2>
                  <div className="space-y-8">
                    {art9Requirements.map((requirement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="border-l-4 border-red-500">
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
                                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                                                    <Smartphone className="h-3 w-3 text-purple-600 mt-1 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.actions && (
                                              <div className="space-y-3">
                                                {step.actions.map((action, actionIndex) => (
                                                  <div key={actionIndex} className="border-l-4 border-red-500 pl-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                      <Clock className="h-4 w-4 text-red-600" />
                                                      <span className="font-medium text-sm">{action.time}</span>
                                                      <span className="text-sm text-gray-600">- {action.action}</span>
                                                    </div>
                                                    <div className="text-xs text-gray-600 mb-1">
                                                      <strong>Datenverarbeitung:</strong> {action.dataProcessing}
                                                    </div>
                                                    {action.legalBasis && (
                                                      <div className="text-xs text-green-600">
                                                        <strong>Rechtsgrundlage:</strong> {action.legalBasis}
                                                      </div>
                                                    )}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.documentation && (
                                              <div className="space-y-3">
                                                {step.documentation.map((doc, docIndex) => (
                                                  <div key={docIndex} className="bg-gray-50 dark:bg-gray-700 p-3 rounded">
                                                    <div className="font-medium text-sm mb-1">{doc.aspect}</div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">{doc.content}</div>
                                                    <div className="text-xs text-blue-600 dark:text-blue-400">{doc.evidence || doc.monitoring || doc.purpose}</div>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.postEmergencyActions && (
                                              <div className="space-y-3">
                                                {step.postEmergencyActions.map((action, actionIndex) => (
                                                  <div key={actionIndex} className="border-l-4 border-green-500 pl-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                      <Calendar className="h-4 w-4 text-green-600" />
                                                      <span className="font-medium text-sm">{action.timeline}</span>
                                                    </div>
                                                    <div className="text-sm text-gray-700 dark:text-gray-300 mb-1">{action.action}</div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400">{action.method || action.scope || action.transparency}</div>
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
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Consent Management Section */}
              <section id="consent" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  Einwilligungsmanagement im Gesundheitswesen
                </motion.h2>
                  <div className="space-y-8">
                    {consentManagement.map((consent, index) => (
                      <Card key={index} className="p-6">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <UserCheck className="h-6 w-6 text-green-600" />
                            {consent.scenario}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 text-red-700">Herausforderung</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {consent.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-green-700">Lösung</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {consent.solution}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-blue-700">Module</h4>
                              <div className="space-y-2">
                                {consent.implementation.modules.map((module, i) => (
                                  <div key={i} className="text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                                    {module}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <button
                              onClick={() => setExpandedSection(expandedSection === `consent-${index}` ? null : `consent-${index}`)}
                              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code className="h-4 w-4" />
                              Technische Implementation
                              <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                expandedSection === `consent-${index}` && "rotate-180")} />
                            </button>
                            
                            {expandedSection === `consent-${index}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4"
                              >
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre className="text-green-400 text-xs">
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
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* TOM Healthcare Section */}
              <section id="tom" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  Technische und Organisatorische Maßnahmen (TOM) für Healthcare
                </motion.h2>
                  <div className="space-y-8">
                    {tomMeasures.map((tom, index) => (
                      <Card key={index} className="p-6">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <tom.icon className="h-6 w-6 text-blue-600" />
                            {tom.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Technische Maßnahmen</h4>
                              <div className="space-y-2">
                                {tom.measures.map((measure, i) => (
                                  <div key={i} className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{measure}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Healthcare-spezifisch</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg">
                                {tom.healthcareSpecific}
                              </p>
                              <div className="mt-3">
                                <Badge variant="outline" className="text-xs">
                                  {tom.iso27001}
                                </Badge>
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Praktische Umsetzung</h4>
                              <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-200">
                                <div className="space-y-3">
                                  <div className="flex items-center gap-2 mb-2">
                                    <Shield className="h-4 w-4 text-blue-600" />
                                    <span className="font-medium text-blue-800 dark:text-blue-200">{tom.practicalImplementation.title}</span>
                                  </div>
                                  <div className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                                    {tom.practicalImplementation.description}
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {tom.practicalImplementation.zones && tom.practicalImplementation.zones.map((zone, zoneIndex) => (
                                      <div key={zoneIndex} className="p-3 bg-white dark:bg-gray-800 rounded border">
                                        <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                          {zone.name}
                                        </div>
                                        <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
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
                                    {tom.practicalImplementation.roles && tom.practicalImplementation.roles.map((role, roleIndex) => (
                                      <div key={roleIndex} className="p-3 bg-white dark:bg-gray-800 rounded border">
                                        <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                          {role.name}
                                        </div>
                                        <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
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
                                    {tom.practicalImplementation.layers && tom.practicalImplementation.layers.map((layer, layerIndex) => (
                                      <div key={layerIndex} className="p-3 bg-white dark:bg-gray-800 rounded border">
                                        <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                          {layer.name}
                                        </div>
                                        <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
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

              {/* DSFA & Risk Analysis Section */}
              <section id="dsfa" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  Datenschutz-Folgenabschätzung & Risikoanalyse
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
                                Bußgeld
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
                                {risk.affectedPersons}
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
              <section id="implementation" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8 scroll-mt-24"
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
                        Interaktive Compliance-Checkliste
                      </CardTitle>
                      <div className="text-sm text-gray-600">
                        Fortschritt: {getCompletionPercentage()}% abgeschlossen
                      </div>
                      <Progress value={getCompletionPercentage()} className="h-2" />
                    </CardHeader>
                    <CardContent className="space-y-6">
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
                <Card className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
                  <CardContent className="relative p-8 md:p-12 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <Heart className="h-16 w-16 mx-auto mb-6 text-white" />
                      </motion.div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold">
                        Starten Sie Ihre Healthcare DSGVO Journey
                      </h2>
                      <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Profitieren Sie von unserer 10+ Jahren Expertise in Healthcare Compliance. 
                        Von DSGVO Art. 9 über EU AI Act bis hin zu MDR – wir begleiten Sie zur vollständigen Compliance.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact?demo=true&industry=healthcare">
                          <Button 
                            size="lg" 
                            className="bg-white text-red-600 hover:bg-gray-100 group shadow-lg"
                          >
                            <Heart className="mr-2 h-5 w-5" />
                            Kostenlose Healthcare-Beratung
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="bg-transparent text-white border-white hover:bg-white/10"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Umfassender Healthcare Guide (PDF)
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        {[
                          { icon: Heart, title: 'Healthcare-Expertise', subtitle: 'Spezialisiert auf Gesundheitswesen' },
                          { icon: Shield, title: 'DSGVO + EU AI Act Ready', subtitle: 'Zukunftssichere Compliance' },
                          { icon: Award, title: 'MDR & ISO 27001 Certified', subtitle: 'Höchste Sicherheitsstandards' }
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
                    <ExternalLink className="h-5 w-5 text-red-600" />
                    Weiterführende Healthcare-Ressourcen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link to="/wissen/rechtsprechung/meta-irland-2024" className="block group">
                      <div className="p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors group-hover:shadow-md">
                        <Gavel className="h-5 w-5 text-red-600 mb-2" />
                        <div className="font-medium">Meta Ireland Urteil</div>
                        <div className="text-sm text-gray-600">1,2 Mrd. € Bußgeld-Analyse</div>
                      </div>
                    </Link>
                    <Link to="/wissen/compliance/eu-ai-act" className="block group">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group-hover:shadow-md">
                        <Brain className="h-5 w-5 text-purple-600 mb-2" />
                        <div className="font-medium">EU AI Act Guide</div>
                        <div className="text-sm text-gray-600">KI-Compliance für Healthcare</div>
                      </div>
                    </Link>
                    <Link to="/wissen/krisenmanagement/data-breach-72h" className="block group">
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md">
                        <Timer className="h-5 w-5 text-orange-600 mb-2" />
                        <div className="font-medium">Data Breach Response</div>
                        <div className="text-sm text-gray-600">72h Notfall-Leitfaden</div>
                      </div>
                    </Link>
                    <Link to="/branchen/gesundheitswesen" className="block group">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md">
                        <Stethoscope className="h-5 w-5 text-blue-600 mb-2" />
                        <div className="font-medium">Healthcare Solutions</div>
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

export default HealthcareDsgvoGuide;