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
  GraduationCap,
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
  Square,
  Bot,
  Cpu,
  Search,
  ImageIcon,
  Radar,
  Workflow,
  GitBranch,
  RotateCcw,
  TrendingDown,
  Gauge,
  MessageSquare,
  Camera,
  Scan,
  TestTube,
  Hospital,
  Ambulance,
  Dna,
  FlaskConical,
  Tablets,
  Waves,
  CircuitBoard,
  HardDrive,
  Cloud,
  Rss,
  Radio,
  Baby,
  School,
  Bookmark,
  Video,
  Headset,
  MousePointer,
  Gamepad2,
  Webcam,
  Mic,
  PlayCircle,
  PauseCircle,
  Volume2,
  Upload,
  UserPlus,
  UserMinus,
  Users2,
  Family,
  Home,
  MapPin,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MessageCircle,
  Share2,
  Flag,
  ThumbsUp,
  ThumbsDown,
  Filter,
  SortAsc,
  RefreshCw,
  MoreHorizontal,
  Edit,
  Trash2,
  Copy,
  ExternalLink as ExternalLinkIcon,
  ChevronLeft,
  ChevronRight,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const EdtechPrivacyGuide = () => {
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
    { id: 'coppa-compliance', label: 'COPPA & Kinderschutz', icon: Baby },
    { id: 'ferpa-privacy', label: 'FERPA & Bildungsdaten', icon: School },
    { id: 'consent-management', label: 'Einwilligungsmanagement', icon: UserCheck },
    { id: 'platform-security', label: 'Plattform-Sicherheit', icon: Lock },
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
    { label: 'COPPA Compliance', value: 96, color: 'text-green-600', trend: '+8%' },
    { label: 'FERPA Konformität', value: 94, color: 'text-blue-600', trend: '+12%' },
    { label: 'DSGVO EdTech', value: 98, color: 'text-purple-600', trend: '+5%' },
    { label: 'Consent Management', value: 92, color: 'text-orange-600', trend: '+15%' },
    { label: 'Data Minimization', value: 89, color: 'text-red-600', trend: '+18%' },
    { label: 'Platform Security', value: 97, color: 'text-indigo-600', trend: '+3%' }
  ];

  const coppaRequirements = [
    {
      title: 'Verifiable Parental Consent (COPPA)',
      description: 'Nachprüfbare elterliche Einwilligung ist erforderlich für die Sammlung, Nutzung oder Weitergabe personenbezogener Daten von Kindern unter 13 Jahren',
      examples: ['Online-Lernplattformen für Grundschüler', 'Bildungs-Apps mit Registrierung', 'Gamification-Systeme mit Profilen', 'Video-Chat für Fernunterricht', 'Social Learning Communities'],
      risk: 'Sehr Hoch',
      fineExample: 'Bis zu 46.517 $ pro Verstoß (FTC)',
      realWorldScenario: {
        title: '🎓 Praxis-Szenario: Lern-App für Grundschüler',
        context: 'Eine EdTech-Firma entwickelt eine interaktive Mathe-Lern-App für Kinder im Alter von 6-12 Jahren. Die App soll Lernfortschritte tracken, personalisierte Übungen anbieten und soziale Features für Klassenwettbewerbe enthalten.',
        challenge: 'Wie kann die App COPPA-konform gestaltet werden, ohne die pädagogische Effektivität zu beeinträchtigen?',
        solution: {
          step1: {
            title: '👨‍👩‍👧‍👦 Verifiable Parental Consent System',
            description: 'Implementierung eines robusten Systems zur elterlichen Einwilligung',
            methods: [
              {
                name: 'Digital Signature with Credit Card Verification',
                process: 'Eltern müssen Kreditkartendaten zur Identitätsverifizierung angeben',
                security: 'Keine Speicherung der Kartendaten, nur Verifizierungsprozess',
                compliance: 'COPPA-konforme Identitätsprüfung'
              },
              {
                name: 'Video Conference Consent',
                process: 'Persönliches Gespräch zwischen Eltern und Schulpersonal',
                security: 'Aufzeichnung der Einwilligung mit Zeitstempel',
                compliance: 'Direkter persönlicher Kontakt als Goldstandard'
              },
              {
                name: 'Notarized Consent Form',
                process: 'Notariell beglaubigte schriftliche Einwilligung',
                security: 'Physische Dokumentation mit rechtlicher Validierung',
                compliance: 'Höchste Rechtssicherheit'
              }
            ]
          },
          step2: {
            title: '📊 Data Minimization für Kinder',
            description: 'Strikte Begrenzung der Datensammlung auf pädagogisch notwendige Informationen',
            dataCategories: [
              {
                category: 'Erforderliche Daten',
                data: 'Vorname, Klassenstufe, Lernfortschritt',
                purpose: 'Personalisierte Lernpfade',
                retention: 'Solange Account aktiv + 30 Tage'
              },
              {
                category: 'Optionale Daten',
                data: 'Avatar-Präferenzen, Lieblingsfächer',
                purpose: 'Verbesserte User Experience',
                retention: 'Nur mit expliziter elterlicher Zustimmung'
              },
              {
                category: 'Verbotene Daten',
                data: 'Vollständiger Name, Adresse, Telefonnummer',
                purpose: 'Nicht erforderlich für Lernzwecke',
                retention: 'Niemals sammeln oder speichern'
              }
            ]
          },
          step3: {
            title: '🔒 Safe Harbor Maßnahmen',
            description: 'Implementierung von Schutzmaßnahmen für sichere Kindernutzung',
            safeguards: [
              'Automatische Abmeldung nach 30 Minuten Inaktivität',
              'Keine direkten Nachrichten zwischen Kindern möglich',
              'Moderierte Klassenforen mit Lehrerkontrolle',
              'Automatische Content-Filter für alle Eingaben',
              'Eltern-Dashboard für Aktivitätsüberwachung'
            ]
          }
        },
        outcome: {
          childSafety: 'Maximaler Schutz der Privatsphäre bei optimaler Lernerfahrung',
          parentalControl: 'Vollständige Transparenz und Kontrolle für Eltern',
          educationalValue: 'Unbeeinträchtigte pädagogische Effektivität',
          legalCompliance: '100% COPPA-Konformität mit FTC-Approval'
        },
        keyLearnings: [
          'Frühzeitige Einbindung der Eltern erhöht Vertrauen und Adoption',
          'Data Minimization verbessert sowohl Compliance als auch Performance',
          'Transparente Kommunikation reduziert rechtliche Risiken erheblich',
          'Pädagogische Ziele und Privacy lassen sich erfolgreich vereinen'
        ]
      }
    },
    {
      title: 'Educational Purpose Limitation',
      description: 'Sammlung und Nutzung von Schülerdaten ist strikt auf legitime Bildungszwecke zu beschränken',
      examples: ['Lernanalytics nur für Bildungszwecke', 'Keine kommerzielle Datennutzung', 'Verbot von Behavioral Advertising', 'Schutz vor Datenbrokern'],
      risk: 'Hoch',
      fineExample: 'Google: 170 Mio. $ (YouTube/COPPA, 2019)',
      realWorldScenario: {
        title: '📚 Praxis-Szenario: Adaptive Learning Platform',
        context: 'Eine Universität implementiert eine KI-gestützte Lernplattform, die das Lernverhalten von 50.000 Studenten analysiert, um personalisierte Empfehlungen zu geben und Lehrmethoden zu optimieren.',
        challenge: 'Wie kann die Universität Learning Analytics nutzen, ohne die Privatsphäre der Studenten zu verletzen?',
        solution: {
          step1: {
            title: '🎯 Purpose Limitation Framework',
            description: 'Klare Definition und Abgrenzung erlaubter Datennutzungszwecke',
            purposes: [
              {
                purpose: 'Legitime Bildungszwecke',
                examples: 'Personalisierte Lernempfehlungen, Früherkennung von Lernschwierigkeiten',
                dataTypes: 'Anonymisierte Lernfortschritte, Zeitinvestitionen, Schwachstellenanalyse',
                safeguards: 'Automatische Anonymisierung, regelmäßige Löschung'
              },
              {
                purpose: 'Institutionelle Forschung',
                examples: 'Verbesserung von Curricula, Optimierung der Lehrmethoden',
                dataTypes: 'Aggregierte Daten ohne Personenbezug',
                safeguards: 'Statistische Anonymisierung, Differential Privacy'
              },
              {
                purpose: 'Verbotene Zwecke',
                examples: 'Kommerzielle Werbung, Verkauf an Dritte, Social Credit Scoring',
                dataTypes: 'Jegliche Personendaten',
                safeguards: 'Technische Sperren, Compliance-Audits'
              }
            ]
          },
          step2: {
            title: '🔬 Privacy-Preserving Analytics',
            description: 'Implementierung datenschutzfreundlicher Analysemethoden',
            techniques: [
              {
                method: 'Differential Privacy',
                application: 'Aggregierte Lernstatistiken',
                privacy_guarantee: 'Mathematisch beweisbarer Schutz gegen Re-Identifikation',
                implementation: 'Noise-Addition bei allen statistischen Abfragen'
              },
              {
                method: 'Federated Learning',
                application: 'Modelltraining ohne Datenaustausch',
                privacy_guarantee: 'Daten verlassen niemals lokale Systeme',
                implementation: 'Dezentrales Training mit Gradientenaggregation'
              },
              {
                method: 'K-Anonymity',
                application: 'Sichere Gruppenanalysen',
                privacy_guarantee: 'Mindestens k ähnliche Datensätze pro Gruppe',
                implementation: 'Automatische Gruppierung mit k≥5'
              }
            ]
          },
          step3: {
            title: '👨‍🎓 Student Consent & Control',
            description: 'Umfassendes Einwilligungs- und Kontrollsystem für Studenten',
            controls: [
              {
                feature: 'Granulare Opt-in/Opt-out Optionen',
                description: 'Studenten können spezifische Analysefunktionen aktivieren/deaktivieren',
                implementation: 'Modulares Dashboard mit individuellen Datenschutzeinstellungen'
              },
              {
                feature: 'Echtzeit-Transparenz',
                description: 'Studenten sehen, welche Daten wann und wofür genutzt werden',
                implementation: 'Live-Dashboard mit Datenfluss-Visualisierung'
              },
              {
                feature: 'Data Portability',
                description: 'Studenten können ihre Lerndaten exportieren und mitnehmen',
                implementation: 'Standardisierte APIs für Datentransfer'
              }
            ]
          }
        },
        outcome: {
          studentTrust: 'Erhöhte Akzeptanz durch transparente Datennutzung',
          educationalImprovement: 'Messbare Verbesserung der Lernergebnisse um 23%',
          legalCompliance: 'Vollständige FERPA und DSGVO Konformität',
          institutionalReputation: 'Vorreiterrolle in ethischer Bildungstechnologie'
        },
        keyLearnings: [
          'Privacy-by-Design erhöht Vertrauen und Nutzungsbereitschaft',
          'Transparenz schafft Wettbewerbsvorteile bei bewussten Studenten',
          'Technische Datenschutzmaßnahmen verbessern auch Datenqualität',
          'Ethische Datennutzung wird zum Differenzierungsmerkmal'
        ]
      }
    },
    {
      title: 'Safe Harbor Provisions',
      description: 'Spezielle Schutzmaßnahmen und Haftungsbefreiungen für konforme EdTech-Anbieter',
      examples: ['School Service Provider Agreements', 'Limited Data Retention', 'No Behavioral Advertising', 'Secure Data Deletion'],
      risk: 'Mittel',
      fineExample: 'Schutz vor Haftung bei konformer Umsetzung',
      implementation: {
        requirements: [
          'Schriftliche Vereinbarungen mit Bildungseinrichtungen',
          'Strikte Zweckbindung der Datenverarbeitung',
          'Sichere Löschung bei Vertragsende',
          'Regelmäßige Compliance-Audits'
        ],
        template: `
// EdTech Safe Harbor Implementation
const edtechSafeHarbor = {
  contractId: generateSecureId(),
  effectiveDate: new Date().toISOString(),
  legalBasis: 'COPPA Safe Harbor + FERPA Exception',
  
  schoolServiceAgreement: {
    signedBySchool: true,
    signedByProvider: true,
    educationalPurposeOnly: true,
    prohibitions: [
      'no_behavioral_advertising',
      'no_data_sales_to_third_parties',
      'no_creation_of_student_profiles_for_non_educational_purposes'
    ]
  },
  
  dataHandling: {
    collection: {
      minimumNecessary: true,
      educationalPurposeOnly: true,
      transparentToParents: true,
      studentNotification: 'age_appropriate_language'
    },
    
    retention: {
      deletionTimeline: 'upon_request_or_contract_end',
      maximumRetention: '1_year_after_student_graduation',
      secureDestruction: 'NIST_800_88_compliant',
      auditTrail: 'complete_deletion_documentation'
    },
    
    security: {
      encryption: 'AES_256_at_rest_and_in_transit',
      accessControls: 'role_based_with_audit_logs',
      incidentResponse: '24_hour_breach_notification',
      regularAudits: 'quarterly_security_assessments'
    }
  },
  
  compliance_monitoring: {
    parentalRights: {
      inspection: 'allow_parental_data_review',
      correction: 'enable_data_correction_requests',
      deletion: 'honor_deletion_requests_within_30_days'
    },
    
    ongoing_compliance: {
      staff_training: 'annual_privacy_training_required',
      policy_updates: 'automatic_notification_of_changes',
      audit_frequency: 'semi_annual_compliance_review'
    }
  }
};
        `
      }
    }
  ];

  const ferpaCompliance = [
    {
      scenario: 'Student Information Systems (SIS)',
      challenge: 'Sichere Verwaltung von Bildungsdatensätzen unter FERPA',
      solution: 'Privacy-by-Design Architektur mit granularen Zugriffskontrollen',
      implementation: {
        modules: [
          'Rollenbasierte Zugriffskontrolle nach "Need-to-Know"-Prinzip',
          'Audit-Logs für alle Datenzugriffe und -änderungen',
          'Automatische Anonymisierung für Forschungszwecke',
          'Eltern- und Studentenportale für Dateneinsicht'
        ],
        technical: `
// FERPA-Compliant Student Information System
const ferpaCompliantSIS = {
  studentRecord: {
    id: generateStudentId(),
    ferpaProtected: true,
    accessLevel: 'education_officials_only',
    
    personalIdentifiableInfo: {
      name: encryptPII('John Smith'),
      studentId: hashStudentId('12345'),
      dateOfBirth: encryptPII('2008-05-15'),
      parentContact: encryptPII('parent@email.com')
    },
    
    educationalRecords: {
      grades: encryptEducationalData(gradeHistory),
      attendance: encryptEducationalData(attendanceRecords),
      disciplinaryActions: encryptEducationalData(disciplinaryHistory),
      specialEducationServices: encryptEducationalData(iepRecords)
    },
    
    accessControls: {
      teachers: ['current_class_students_only'],
      counselors: ['assigned_students_academic_records'],
      administrators: ['school_wide_access_with_logging'],
      parents: ['own_child_records_full_access'],
      students: ['own_records_age_appropriate_access']
    }
  },
  
  directory_information: {
    publiclyDisclosable: [
      'name', 'address', 'phone', 'email', 'grade_level',
      'participation_in_activities', 'awards_received'
    ],
    
    optOut: {
      parentalRights: 'annual_notification_and_opt_out_option',
      processingTime: 'immediate_upon_request',
      scope: 'applies_to_all_future_disclosures'
    }
  },
  
  disclosureTracking: {
    lawfulDisclosures: [
      'school_officials_with_legitimate_interest',
      'other_schools_upon_transfer',
      'specified_officials_for_audit_purposes',
      'appropriate_parties_in_health_safety_emergency'
    ],
    
    auditTrail: {
      who: 'identity_of_party_receiving_records',
      what: 'records_disclosed',
      when: 'date_of_disclosure',
      why: 'legitimate_educational_interest_documented'
    }
  }
};
        `
      }
    },
    {
      scenario: 'Learning Management Systems (LMS)',
      challenge: 'Integration von Drittanbieter-Tools unter Wahrung der FERPA-Konformität',
      solution: 'Comprehensive Data Processing Agreements mit allen Subprocessors',
      implementation: {
        modules: [
          'School Official Designation für alle integrierten Tools',
          'Data Use Agreements mit strikter Zweckbindung',
          'Technische Safeguards für Datenübertragungen',
          'Regular Compliance Audits für alle Integrationen'
        ],
        technical: `
// LMS Third-Party Integration Framework
const lmsIntegrationFramework = {
  integration: {
    vendor: 'ThirdPartyEdTechTool',
    schoolOfficialStatus: 'designated_as_school_official',
    legitimateEducationalInterest: 'curriculum_delivery_and_assessment',
    
    dataProcessingAgreement: {
      purpose: 'educational_services_only',
      prohibitions: [
        'no_commercial_use_of_student_data',
        'no_creation_of_profiles_for_advertising',
        'no_sale_or_disclosure_to_unauthorized_parties'
      ],
      
      technical_safeguards: {
        encryption: 'end_to_end_AES_256',
        access_controls: 'multi_factor_authentication',
        data_residency: 'US_servers_only',
        backup_security: 'encrypted_automated_backups'
      },
      
      data_subject_rights: {
        inspection: 'parents_and_eligible_students_can_review',
        correction: 'mechanism_to_correct_inaccurate_records',
        deletion: 'data_deleted_upon_relationship_termination'
      }
    }
  },
  
  ongoing_compliance: {
    monitoring: {
      data_flows: 'continuous_monitoring_of_data_transfers',
      access_patterns: 'anomaly_detection_for_unusual_access',
      compliance_status: 'real_time_compliance_dashboard'
    },
    
    incident_response: {
      breach_notification: '24_hour_notification_to_school',
      containment: 'immediate_system_isolation_procedures',
      investigation: 'forensic_analysis_and_reporting',
      remediation: 'corrective_actions_and_process_improvements'
    }
  }
};
        `
      }
    }
  ];

  const consentManagement = [
    {
      ageGroup: 'Kinder unter 13 (COPPA)',
      requirements: [
        'Verifiable Parental Consent vor jeder Datensammlung',
        'Klare, altersgerechte Datenschutzerklärung für Kinder',
        'Opt-in für alle nicht-essentiellen Features',
        'Elterliche Kontrolle über alle Datennutzungen'
      ],
      implementation: {
        consentFlow: [
          'Altersverifizierung bei Registrierung',
          'Weiterleitung zu parental consent portal',
          'Mehrstufiger Verifizierungsprozess für Eltern',
          'Granulare Einwilligung für verschiedene Datentypen',
          'Bestätigung und Account-Aktivierung'
        ],
        technicalMeasures: [
          'Age-gate mit robuster Verifizierung',
          'Separate consent database für Minderjährige',
          'Automated consent withdrawal handling',
          'Regular consent renewal reminders'
        ]
      }
    },
    {
      ageGroup: 'Jugendliche 13-16 (EU DSGVO)',
      requirements: [
        'Direkte Einwilligung von Jugendlichen möglich',
        'Elterliche Benachrichtigung empfohlen',
        'Besonders klare und verständliche Information',
        'Einfache Widerrufsmöglichkeiten'
      ],
      implementation: {
        consentFlow: [
          'Altersverifizierung bei Registrierung',
          'Vereinfachte, jugendgerechte Datenschutzerklärung',
          'Optionale elterliche Benachrichtigung',
          'Granulare Kontrolle über Datenfreigaben',
          'Peer-to-peer sharing controls'
        ],
        technicalMeasures: [
          'Visual consent interfaces mit Symbolen',
          'Just-in-time consent für neue Features',
          'Social features mit enhanced privacy controls',
          'Regular privacy checkups und reminders'
        ]
      }
    },
    {
      ageGroup: 'Erwachsene Studenten 16+ (Standard DSGVO)',
      requirements: [
        'Informierte Einwilligung mit vollständiger Information',
        'Granulare Kontrolle über verschiedene Datennutzungen',
        'Transparenz über algorithmische Entscheidungen',
        'Vollständige Betroffenenrechte'
      ],
      implementation: {
        consentFlow: [
          'Comprehensive privacy dashboard',
          'Detailed information über alle Datenverarbeitungen',
          'Granular opt-in/opt-out für alle Services',
          'Regular consent reviews und updates',
          'Export und Portabilität aller Daten'
        ],
        technicalMeasures: [
          'Advanced consent management platform',
          'API-basierte consent propagation',
          'Blockchain-based consent records',
          'AI-powered privacy recommendations'
        ]
      }
    }
  ];

  const platformSecurity = [
    {
      category: 'Infrastruktursicherheit',
      icon: Server,
      measures: [
        'ISO 27001 zertifizierte Rechenzentren',
        'Ende-zu-Ende Verschlüsselung aller Bildungsdaten',
        'Zero-Trust Network Architecture',
        'Continuous Security Monitoring'
      ],
      edtechSpecific: 'Classroom Networks, Student Devices, Learning Content Protection',
      implementation: {
        title: 'Secure EdTech Cloud Infrastructure',
        description: 'Multi-Cloud Setup mit geographischer Datenresidenz',
        layers: [
          {
            name: '🌐 Network Security',
            protection: 'DDoS-Protection, WAF, Intrusion Detection',
            benefit: 'Schutz vor externen Angriffen',
            technology: 'Cloudflare, AWS Shield, Custom IDS'
          },
          {
            name: '🔐 Data Encryption',
            protection: 'AES-256 Verschlüsselung at rest und in transit',
            benefit: 'Schutz sensibler Bildungsdaten',
            technology: 'Hardware Security Modules, Key Rotation'
          },
          {
            name: '🏗️ Container Security',
            protection: 'Signed container images, Runtime protection',
            benefit: 'Sichere Anwendungsbereitstellung',
            technology: 'Kubernetes, Falco, OPA Gatekeeper'
          },
          {
            name: '📊 Monitoring & Logging',
            protection: 'Comprehensive audit trails, anomaly detection',
            benefit: 'Früherkennung von Sicherheitsvorfällen',
            technology: 'ELK Stack, Prometheus, Custom dashboards'
          }
        ]
      }
    },
    {
      category: 'Anwendungssicherheit',
      icon: Shield,
      measures: [
        'Secure Development Lifecycle (SDL)',
        'Regular Penetration Testing',
        'Automated Vulnerability Scanning',
        'Secure Code Reviews'
      ],
      edtechSpecific: 'Student Authentication, Grade Protection, Assignment Integrity',
      implementation: {
        title: 'DevSecOps für EdTech Applications',
        description: 'Security-first development approach für Bildungsanwendungen',
        processes: [
          {
            phase: 'Development',
            security: 'Static Application Security Testing (SAST)',
            tools: 'SonarQube, Checkmarx, Custom rules',
            frequency: 'Every commit'
          },
          {
            phase: 'Testing',
            security: 'Dynamic Application Security Testing (DAST)',
            tools: 'OWASP ZAP, Burp Suite, Custom scripts',
            frequency: 'Every release'
          },
          {
            phase: 'Deployment',
            security: 'Container scanning, Dependency checks',
            tools: 'Snyk, Clair, Trivy',
            frequency: 'Every deployment'
          },
          {
            phase: 'Runtime',
            security: 'Runtime Application Self-Protection (RASP)',
            tools: 'Custom RASP, WAF rules, Behavior analysis',
            frequency: 'Continuous'
          }
        ]
      }
    },
    {
      category: 'Identity & Access Management',
      icon: UserCheck,
      measures: [
        'Multi-Factor Authentication für alle Benutzer',
        'Single Sign-On (SSO) Integration',
        'Role-Based Access Control (RBAC)',
        'Privileged Access Management (PAM)'
      ],
      edtechSpecific: 'Student Profiles, Teacher Dashboards, Parent Access, Admin Functions',
      implementation: {
        title: 'EdTech Identity Governance',
        description: 'Comprehensive identity management für alle Bildungsstakeholder',
        stakeholders: [
          {
            role: '👨‍🎓 Students',
            authentication: 'Age-appropriate MFA (SMS/Email for older, simplified for younger)',
            authorization: 'Access to own data, assigned courses, approved social features',
            audit: 'Complete activity logging for parental oversight'
          },
          {
            role: '👩‍🏫 Teachers',
            authentication: 'Strong MFA with hardware tokens for administrative functions',
            authorization: 'Access to assigned students, curriculum management, grading systems',
            audit: 'Detailed access logs for compliance and security'
          },
          {
            role: '👨‍👩‍👧‍👦 Parents',
            authentication: 'Multi-modal authentication (SMS, Email, App-based)',
            authorization: 'Read access to own children\'s data, communication preferences',
            audit: 'Transparency logs for all data access and changes'
          },
          {
            role: '🏫 Administrators',
            authentication: 'Highest security MFA with biometric options',
            authorization: 'System-wide access with just-in-time elevation',
            audit: 'Complete administrative action logging with approval workflows'
          }
        ]
      }
    }
  ];

  const implementationRoadmap = [
    {
      phase: 'Compliance Assessment & Legal Foundation',
      duration: '6-8 Wochen',
      color: 'blue',
      tasks: [
        'COPPA/FERPA Gap-Analyse für bestehende Systeme',
        'DSGVO-Konformitätsprüfung für EU-Nutzer',
        'Stakeholder-Mapping (Schüler, Eltern, Lehrer, Admins)',
        'Legal Framework Definition und Policy-Erstellung',
        'Privacy Impact Assessment für alle EdTech-Services'
      ],
      deliverables: [
        'Comprehensive Compliance Audit Report',
        'EdTech Privacy Policy Suite',
        'Implementation Roadmap mit Prioritäten',
        'Stakeholder Communication Plan'
      ]
    },
    {
      phase: 'Technical Privacy Infrastructure',
      duration: '10-14 Wochen',
      color: 'green',
      tasks: [
        'Consent Management Platform für alle Altersgruppen',
        'Data Minimization und Purpose Limitation',
        'Sichere Datenarchitektur mit Encryption-at-Rest',
        'Identity & Access Management System',
        'Automated Data Retention und Deletion'
      ],
      deliverables: [
        'Multi-Age Consent Management System',
        'Privacy-by-Design Data Architecture',
        'Secure Authentication Infrastructure',
        'Automated Compliance Tools'
      ]
    },
    {
      phase: 'Educational Stakeholder Integration',
      duration: '8-10 Wochen',
      color: 'orange',
      tasks: [
        'Parent Dashboard und Communication Tools',
        'Student Privacy Education Programme',
        'Teacher Training für Datenschutz-Compliance',
        'School Administrator Control Panels',
        'Age-Appropriate Privacy Interfaces'
      ],
      deliverables: [
        'Stakeholder-Specific Interfaces',
        'Comprehensive Training Materials',
        'Educational Privacy Curriculum',
        'Administrative Control Systems'
      ]
    },
    {
      phase: 'Continuous Compliance & Monitoring',
      duration: '4-6 Wochen',
      color: 'purple',
      tasks: [
        'Real-time Compliance Monitoring Dashboard',
        'Automated Compliance Reporting',
        'Regular Privacy Audits und Assessments',
        'Incident Response für Privacy Breaches',
        'Continuous Privacy Training Programme'
      ],
      deliverables: [
        'Live Compliance Dashboard',
        'Automated Monitoring Systems',
        'Regular Audit Framework',
        'Incident Response Playbook'
      ]
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
    const totalItems = 28; // Total checklist items
    return Math.round((checkedItems.size / totalItems) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <SEOHead 
        title="EdTech Privacy – Bildungssektor Datenschutz"
        description="EdTech Datenschutz: Schülerdaten, COPPA/FERPA, Lernplattformen, digitale Bildung. ✓ Consent Management ✓ Age Verification ✓ Data Minimization."
        canonical="/wissen/branchen/edtech-privacy"
        keywords="EdTech Privacy, Bildungssektor Datenschutz, COPPA FERPA, Schülerdaten DSGVO, Lernplattformen Datenschutz, Age Verification"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "EdTech Privacy – Bildungssektor Datenschutz",
          "description": "Praxisleitfaden für Datenschutz in Bildungseinrichtungen und EdTech-Unternehmen mit Fokus auf COPPA/FERPA-Compliance und Schülerdatenschutz.",
          "author": {
            "@type": "Organization",
            "name": "Marsstein"
          },
          "datePublished": "2024-01-15",
          "dateModified": "2024-01-15",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://marsstein.com/wissen/branchen/edtech-privacy"
          }
        }}
      />
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-sm font-medium">EdTech Privacy Excellence</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    EdTech Privacy Compliance
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block mt-2">
                      COPPA & FERPA Guide
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Meistern Sie den Datenschutz im Bildungswesen. Von COPPA-konformen Kinderplattformen 
                    über FERPA-Compliance bis hin zu altersgerechtem Consent Management.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>COPPA-konforme Plattformen für Kinder unter 13</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>FERPA-Compliance für Bildungseinrichtungen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Altersgerechtes Consent Management</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=edtech">
                      <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 text-white hover:opacity-90 group">
                        <GraduationCap className="mr-2 h-5 w-5" />
                        EdTech Privacy Demo buchen
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      COPPA/FERPA Compliance Guide
                    </Button>
                  </div>
                </motion.div>

                {/* Interactive EdTech Compliance Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 shadow-2xl border-2 border-green-200 dark:border-green-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">EdTech Privacy Center</h3>
                        <Badge className="bg-green-100 text-green-700">
                          {getCompletionPercentage()}% Compliant
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
                    className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-green-500"
                  >
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-green-500 animate-pulse" />
                      <span className="text-sm font-medium">Privacy Ready</span>
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
                        ? "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800"
                        : "hover:bg-green-50 dark:hover:bg-green-950/30 hover:text-green-700 dark:hover:text-green-400",
                      "border",
                      activeSection === item.id
                        ? "border-green-200 dark:border-green-800"
                        : "border-transparent hover:border-green-200 dark:hover:border-green-800"
                    )}
                  >
                    <item.icon className={cn(
                      "h-4 w-4",
                      activeSection === item.id && "text-green-600 dark:text-green-500"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      activeSection === item.id && "text-green-700 dark:text-green-400"
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
                  EdTech Privacy Compliance Überblick
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Baby className="h-6 w-6 text-green-600" />
                        COPPA für Bildungsplattformen
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Der Children's Online Privacy Protection Act (COPPA) reguliert die Sammlung 
                        personenbezogener Daten von Kindern unter 13 Jahren und erfordert verifiable 
                        parental consent für EdTech-Plattformen.
                      </p>
                      
                      <div className="space-y-3">
                        {[
                          'Verifiable Parental Consent vor Datensammlung',
                          'Data Minimization auf Bildungszwecke beschränkt',
                          'Safe Harbor Protections für konforme Anbieter',
                          'Strikte Löschpflichten bei Vertragsende'
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-green-600" />
                          <span className="font-semibold text-green-800 dark:text-green-400">
                            COPPA Enforcement
                          </span>
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          FTC verhängt Bußgelder bis zu 46.517$ pro Verstoß und Kind
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <School className="h-6 w-6 text-blue-600" />
                        FERPA für Bildungseinrichtungen
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Das Family Educational Rights and Privacy Act (FERPA) schützt 
                        Bildungsdatensätze von Studenten und reguliert deren Weitergabe 
                        an Dritte, einschließlich EdTech-Anbieter.
                      </p>
                      
                      <div className="space-y-3">
                        {[
                          'School Official Designation für EdTech-Anbieter',
                          'Legitimate Educational Interest als Rechtsgrundlage', 
                          'Strikte Zweckbindung auf Bildungszwecke',
                          'Comprehensive audit trails für alle Zugriffe'
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <School className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Lightbulb className="h-4 w-4 text-blue-600" />
                          <span className="font-semibold text-blue-800 dark:text-blue-400">
                            Best Practice
                          </span>
                        </div>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          Implementieren Sie granulare Berechtigungen nach dem "Need-to-Know"-Prinzip
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* COPPA Compliance Section */}
              <section id="coppa-compliance" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  COPPA Compliance & Kinderschutz
                </motion.h2>
                <div className="space-y-8">
                  {coppaRequirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="border-l-4 border-green-500">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-xl pr-4">{requirement.title}</CardTitle>
                            <Badge 
                              variant={requirement.risk === 'Sehr Hoch' ? 'destructive' : requirement.risk === 'Hoch' ? 'secondary' : 'default'}
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
                                onClick={() => setExpandedSection(expandedSection === `coppa-scenario-${index}` ? null : `coppa-scenario-${index}`)}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                              >
                                <Lightbulb className="h-4 w-4" />
                                Praxis-Szenario anzeigen
                                <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                  expandedSection === `coppa-scenario-${index}` && "rotate-180")} />
                              </button>
                              
                              {expandedSection === `coppa-scenario-${index}` && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="mt-4"
                                >
                                  <div className="space-y-6 p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-xl border border-green-200 dark:border-green-800">
                                    <div className="text-center">
                                      <h3 className="text-lg font-bold text-green-900 dark:text-green-100 mb-2">
                                        {requirement.realWorldScenario.title}
                                      </h3>
                                      <p className="text-sm text-green-700 dark:text-green-300">
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
                                          
                                          {step.methods && (
                                            <div className="space-y-3">
                                              {step.methods.map((method, methodIndex) => (
                                                <div key={methodIndex} className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                                  <div className="font-medium text-blue-900 dark:text-blue-100 text-sm mb-1">
                                                    {method.name}
                                                  </div>
                                                  <div className="text-xs text-blue-700 dark:text-blue-300 mb-1">
                                                    <strong>Prozess:</strong> {method.process}
                                                  </div>
                                                  <div className="text-xs text-green-600 dark:text-green-400 mb-1">
                                                    <strong>Sicherheit:</strong> {method.security}
                                                  </div>
                                                  <div className="text-xs text-purple-600 dark:text-purple-400">
                                                    <strong>Compliance:</strong> {method.compliance}
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                          
                                          {step.dataCategories && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                              {step.dataCategories.map((category, catIndex) => (
                                                <div key={catIndex} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                                  <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                                    {category.category}
                                                  </div>
                                                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                                    <strong>Daten:</strong> {category.data}
                                                  </div>
                                                  <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
                                                    <strong>Zweck:</strong> {category.purpose}
                                                  </div>
                                                  <div className="text-xs text-green-600 dark:text-green-400">
                                                    <strong>Aufbewahrung:</strong> {category.retention}
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                          
                                          {step.safeguards && (
                                            <div className="space-y-2">
                                              <h6 className="font-medium text-sm">Sicherheitsmaßnahmen:</h6>
                                              {step.safeguards.map((safeguard, sgIndex) => (
                                                <div key={sgIndex} className="flex items-start gap-2 text-sm">
                                                  <ShieldCheck className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                                                  <span>{safeguard}</span>
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
                            <div>
                              <button
                                onClick={() => setExpandedSection(expandedSection === `coppa-impl-${index}` ? null : `coppa-impl-${index}`)}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                              >
                                <Code className="h-4 w-4" />
                                Technische Implementation
                                <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                  expandedSection === `coppa-impl-${index}` && "rotate-180")} />
                              </button>
                              
                              {expandedSection === `coppa-impl-${index}` && (
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

              {/* FERPA Privacy Section */}
              <section id="ferpa-privacy" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  FERPA Compliance & Bildungsdatenschutz
                </motion.h2>
                <div className="space-y-8">
                  {ferpaCompliance.map((ferpa, index) => (
                    <Card key={index} className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <School className="h-6 w-6 text-blue-600" />
                          {ferpa.scenario}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 text-red-700">Herausforderung</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {ferpa.challenge}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3 text-green-700">Lösung</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {ferpa.solution}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3 text-blue-700">Komponenten</h4>
                            <div className="space-y-2">
                              {ferpa.implementation.modules.map((module, i) => (
                                <div key={i} className="text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                                  {module}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <button
                            onClick={() => setExpandedSection(expandedSection === `ferpa-${index}` ? null : `ferpa-${index}`)}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                          >
                            <Code className="h-4 w-4" />
                            Technische Implementation
                            <ChevronDown className={cn("h-4 w-4 transition-transform", 
                              expandedSection === `ferpa-${index}` && "rotate-180")} />
                          </button>
                          
                          {expandedSection === `ferpa-${index}` && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="mt-4"
                            >
                              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                <pre className="text-green-400 text-xs">
                                  {ferpa.implementation.technical}
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

              {/* Consent Management Section */}
              <section id="consent-management" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  Altersgerechtes Einwilligungsmanagement
                </motion.h2>
                <div className="space-y-8">
                  {consentManagement.map((consent, index) => (
                    <Card key={index} className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <UserCheck className="h-6 w-6 text-green-600" />
                          {consent.ageGroup}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Rechtliche Anforderungen</h4>
                            <div className="space-y-2">
                              {consent.requirements.map((req, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{req}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Consent Flow</h4>
                            <div className="space-y-2">
                              {consent.implementation.consentFlow.map((step, i) => (
                                <div key={i} className="flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                    {i + 1}
                                  </div>
                                  <span className="text-sm">{step}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Technische Maßnahmen</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {consent.implementation.technicalMeasures.map((measure, i) => (
                              <div key={i} className="flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded">
                                <Settings className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{measure}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Platform Security Section */}
              <section id="platform-security" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8 scroll-mt-24"
                >
                  EdTech Plattform-Sicherheit
                </motion.h2>
                <div className="space-y-8">
                  {platformSecurity.map((security, index) => (
                    <Card key={index} className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <security.icon className="h-6 w-6 text-blue-600" />
                          {security.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Sicherheitsmaßnahmen</h4>
                            <div className="space-y-2">
                              {security.measures.map((measure, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{measure}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">EdTech-spezifisch</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                              {security.edtechSpecific}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Implementation</h4>
                            <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-200">
                              <div className="space-y-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <Shield className="h-4 w-4 text-blue-600" />
                                  <span className="font-medium text-blue-800 dark:text-blue-200">{security.implementation.title}</span>
                                </div>
                                <div className="text-sm text-blue-700 dark:text-blue-300 mb-3">
                                  {security.implementation.description}
                                </div>
                                
                                {security.implementation.layers && (
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {security.implementation.layers.map((layer, layerIndex) => (
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
                                )}
                                
                                {security.implementation.processes && (
                                  <div className="space-y-3">
                                    {security.implementation.processes.map((process, processIndex) => (
                                      <div key={processIndex} className="border-l-4 border-green-500 pl-4">
                                        <div className="flex items-center gap-2 mb-2">
                                          <Code className="h-4 w-4 text-green-600" />
                                          <span className="font-medium text-sm">{process.phase}</span>
                                          <Badge variant="outline" className="text-xs">{process.frequency}</Badge>
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                          <strong>Security:</strong> {process.security}
                                        </div>
                                        <div className="text-xs text-blue-600 dark:text-blue-400">
                                          <strong>Tools:</strong> {process.tools}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                                
                                {security.implementation.stakeholders && (
                                  <div className="space-y-3">
                                    {security.implementation.stakeholders.map((stakeholder, stakeholderIndex) => (
                                      <div key={stakeholderIndex} className="p-3 bg-white dark:bg-gray-800 rounded border">
                                        <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                          {stakeholder.role}
                                        </div>
                                        <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
                                          <strong>Auth:</strong> {stakeholder.authentication}
                                        </div>
                                        <div className="text-xs text-green-600 dark:text-green-400 mb-1">
                                          <strong>Zugriff:</strong> {stakeholder.authorization}
                                        </div>
                                        <div className="text-xs text-purple-600 dark:text-purple-400">
                                          <strong>Audit:</strong> {stakeholder.audit}
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

                {/* Interactive EdTech Privacy Checklist */}
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckSquare className="h-6 w-6 text-green-600" />
                      Interactive EdTech Privacy-Checkliste
                    </CardTitle>
                    <div className="text-sm text-gray-600">
                      Fortschritt: {getCompletionPercentage()}% abgeschlossen
                    </div>
                    <Progress value={getCompletionPercentage()} className="h-2" />
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        category: 'COPPA Compliance',
                        items: [
                          'Age verification system implementiert',
                          'Verifiable parental consent process etabliert',
                          'Data minimization auf educational purposes',
                          'Safe harbor protections aktiviert'
                        ]
                      },
                      {
                        category: 'FERPA Konformität', 
                        items: [
                          'School official designation erhalten',
                          'Educational purpose limitation dokumentiert',
                          'Audit trails für alle Datenzugriffe',
                          'Directory information opt-out implementiert'
                        ]
                      },
                      {
                        category: 'Consent Management',
                        items: [
                          'Altersgerechte consent interfaces',
                          'Granulare privacy controls',
                          'Elterliche oversight dashboards',
                          'Just-in-time consent für neue features'
                        ]
                      },
                      {
                        category: 'Platform Security',
                        items: [
                          'Ende-zu-Ende Verschlüsselung',
                          'Multi-factor authentication',
                          'Zero-trust network architecture',
                          'Continuous security monitoring'
                        ]
                      }
                    ].map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h4 className="font-semibold mb-3">{section.category}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {section.items.map((item, itemIndex) => {
                            const itemId = `edtech-${sectionIndex}-${itemIndex}`;
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
                <Card className="bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
                  <CardContent className="relative p-8 md:p-12 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <GraduationCap className="h-16 w-16 mx-auto mb-6 text-white" />
                      </motion.div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold">
                        Starten Sie Ihre EdTech Privacy Journey
                      </h2>
                      <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Profitieren Sie von unserer Expertise in EdTech Privacy und COPPA/FERPA Compliance. 
                        Von altersgerechtem Consent Management über sichere Plattformen bis hin zu 
                        umfassender Stakeholder-Integration.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact?demo=true&industry=edtech">
                          <Button 
                            size="lg" 
                            className="bg-white text-green-600 hover:bg-gray-100 group shadow-lg"
                          >
                            <GraduationCap className="mr-2 h-5 w-5" />
                            Kostenlose EdTech Privacy-Beratung
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="bg-transparent text-white border-white hover:bg-white/10"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          COPPA/FERPA Toolkit (PDF)
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        {[
                          { icon: Baby, title: 'COPPA Expertise', subtitle: 'Spezialisiert auf Kinderschutz' },
                          { icon: School, title: 'FERPA Ready', subtitle: 'Vollständige Bildungs-Compliance' },
                          { icon: Shield, title: 'Safe Learning', subtitle: 'Sichere EdTech-Plattformen' }
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
                    <ExternalLink className="h-5 w-5 text-green-600" />
                    Weiterführende EdTech-Ressourcen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link to="/wissen/compliance/dsgvo" className="block group">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group-hover:shadow-md">
                        <Shield className="h-5 w-5 text-purple-600 mb-2" />
                        <div className="font-medium">DSGVO Grundlagen</div>
                        <div className="text-sm text-gray-600">Datenschutz-Basics</div>
                      </div>
                    </Link>
                    <Link to="/wissen/compliance/eu-ai-act" className="block group">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md">
                        <Brain className="h-5 w-5 text-blue-600 mb-2" />
                        <div className="font-medium">EU AI Act</div>
                        <div className="text-sm text-gray-600">KI in der Bildung</div>
                      </div>
                    </Link>
                    <Link to="/wissen/krisenmanagement/data-breach-72h" className="block group">
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md">
                        <Timer className="h-5 w-5 text-orange-600 mb-2" />
                        <div className="font-medium">Data Breach Response</div>
                        <div className="text-sm text-gray-600">72h Notfall-Leitfaden</div>
                      </div>
                    </Link>
                    <Link to="/branchen/bildung" className="block group">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-md">
                        <GraduationCap className="h-5 w-5 text-green-600 mb-2" />
                        <div className="font-medium">EdTech Solutions</div>
                        <div className="text-sm text-gray-600">Unsere Bildungsprodukte</div>
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

export default EdtechPrivacyGuide;