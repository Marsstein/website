import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'art9', label: 'Art. 9 DSGVO', icon: Lock },
    { id: 'consent', label: 'Einwilligungsmanagement', icon: UserCheck },
    { id: 'tom', label: 'TOM Healthcare', icon: Settings },
    { id: 'dsfa', label: 'DSFA & Risikoanalyse', icon: BarChart3 },
    { id: 'implementation', label: 'Praxis-Implementation', icon: Code }
  ];

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
      implementation: {
        requirements: [
          'Spezifische, informierte und unmissverständliche Willensbekundung',
          'Freiwilligkeit ohne Kopplungsverbot-Verstoß',
          'Dokumentierte Einwilligungserklärung',
          'Einfache Widerrufsmöglichkeit'
        ],
        template: `
// DSGVO Art. 9 Einwilligungstemplate
const healthDataConsent = {
  patientId: 'P-${Date.now()}-${Math.random().toString(36).substr(2, 9)}',
  consentDate: new Date().toISOString(),
  consentVersion: '2024-v2.1',
  
  // Spezifische Zwecke nach Art. 9
  purposes: [
    {
      id: 'medical_treatment',
      description: 'Medizinische Behandlung und Diagnostik',
      legalBasis: 'Art. 9 Abs. 2 lit. a DSGVO',
      dataCategories: ['diagnoses', 'treatment_history', 'medication'],
      retention: '10_years_after_last_treatment'
    },
    {
      id: 'research_participation', 
      description: 'Teilnahme an medizinischer Forschung',
      legalBasis: 'Art. 9 Abs. 2 lit. a DSGVO',
      dataCategories: ['anonymized_health_data', 'study_results'],
      retention: 'duration_of_study_plus_10_years'
    }
  ],
  
  // Granulare Einwilligung
  specificConsents: {
    geneticData: {
      granted: true,
      purpose: 'Erbkrankheiten-Diagnostik',
      withdrawable: true
    },
    telemedicine: {
      granted: false,
      purpose: 'Fernbehandlung via Video',
      withdrawable: true
    },
    dataSharing: {
      granted: false,
      purpose: 'Übermittlung an Fachärzte',
      recipients: ['cardiologist', 'neurologist'],
      withdrawable: true
    }
  },
  
  // Widerrufsrecht
  withdrawal: {
    method: 'written_or_electronic',
    effectiveDate: 'immediately',
    consequences: 'Behandlung möglicherweise eingeschränkt',
    contactPoint: 'datenschutz@klinik-beispiel.de'
  },
  
  // Audit-Trail
  auditTrail: [
    {
      timestamp: new Date().toISOString(),
      action: 'consent_granted',
      method: 'digital_signature',
      ipAddress: '192.168.1.100', // Anonymisiert nach 30 Tagen
      userAgent: 'masked_after_30_days'
    }
  ]
};
        `
      }
    },
    {
      title: 'Gesundheitsvorsorge & Arbeitsmedizin (Art. 9 Abs. 2 lit. h)',
      description: 'Verarbeitung für Zwecke der Gesundheitsvorsorge oder der Arbeitsmedizin, für die Beurteilung der Arbeitsfähigkeit des Beschäftigten',
      examples: ['Betriebsärztliche Untersuchungen', 'Vorsorgeuntersuchungen', 'Impfstatus-Verwaltung', 'Arbeitsplatz-Gesundheitsscreening'],
      risk: 'Hoch',
      fineExample: 'Meta Ireland: 1,2 Mrd. € (2023)',
      implementation: {
        requirements: [
          'Berufsgeheimnis-Verpflichtung des Personals',
          'Angemessene technische und organisatorische Maßnahmen',
          'Zweckbindung auf Gesundheitsvorsorge',
          'Minimale Datenverarbeitung'
        ],
        template: `
// Arbeitsmedizinische Datenverarbeitung
const occupationalHealthData = {
  employeeId: 'anonymized_employee_id',
  legalBasis: 'Art. 9 Abs. 2 lit. h DSGVO i.V.m. ArbMedVV',
  
  processedData: {
    healthChecks: {
      type: 'preventive_examination',
      frequency: 'annual',
      dataMinimization: true,
      aggregatedReporting: true // Keine Einzeldaten an HR
    },
    vaccinations: {
      purpose: 'workplace_safety',
      storage: 'medical_personnel_only',
      accessControl: 'role_based_strict'
    },
    fitnessToDuty: {
      result: 'fit_with_restrictions',
      restrictions: 'no_night_shifts', // Nur arbeitsrelevant
      medicalDetails: 'not_disclosed_to_employer'
    }
  },
  
  // Strikte Zweckbindung
  purposeLimitation: {
    allowedUse: 'occupational_health_only',
    prohibitedUse: 'performance_evaluation',
    dataSharing: 'medical_professionals_only'
  },
  
  // Automatische Löschung
  retention: {
    activeEmployment: 'duration_plus_3_years',
    aggregatedStatistics: 'anonymized_indefinitely',
    individualRecords: 'automatic_deletion'
  }
};
        `
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
      implementation: `
// Access Control System
const accessControl = {
  zones: {
    public_area: { security_level: 'basic', access: 'unrestricted' },
    patient_area: { security_level: 'medium', access: 'badge_required' },
    surgery_unit: { security_level: 'high', access: 'biometric_plus_badge' },
    data_center: { security_level: 'maximum', access: 'multi_factor_auth' }
  },
  
  monitoring: {
    cctv: {
      face_blurring: 'automatic_for_patients',
      retention: '30_days_max',
      access_logging: 'every_view_tracked'
    },
    access_logs: {
      real_time_alerts: true,
      anomaly_detection: 'ai_powered',
      retention: '7_years_compliance'
    }
  }
};
      `
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
      implementation: `
// Healthcare Role-Based Access Control
const healthcareRBAC = {
  roles: {
    physician: {
      permissions: ['read_all_patient_data', 'write_diagnosis', 'prescribe_medication'],
      restrictions: ['no_admin_access', 'patient_assignment_based'],
      mfa_required: true
    },
    nurse: {
      permissions: ['read_assigned_patients', 'update_vital_signs', 'medication_administration'],
      restrictions: ['no_diagnosis_write', 'shift_based_access'],
      mfa_required: true
    },
    admin_staff: {
      permissions: ['patient_registration', 'appointment_management', 'billing_data'],
      restrictions: ['no_medical_data_access', 'financial_data_only'],
      mfa_required: true
    }
  },
  
  session_management: {
    timeout: '5_minutes_inactivity',
    concurrent_sessions: 'single_session_per_user',
    location_binding: 'ip_range_restriction'
  }
};
      `
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
      implementation: `
// Healthcare Data Encryption
const encryptionStrategy = {
  at_rest: {
    database: {
      algorithm: 'AES-256-GCM',
      key_management: 'HSM_managed',
      field_level: ['patient_name', 'diagnosis', 'treatment_notes']
    },
    files: {
      medical_images: 'AES-256-CBC',
      documents: 'AES-256-GCM',
      backups: 'encrypted_and_signed'
    }
  },
  
  in_transit: {
    internal_systems: 'TLS_1.3_minimum',
    external_communication: 'mTLS_with_certificate_pinning',
    api_calls: 'OAuth2_with_JWT_encryption'
  },
  
  key_management: {
    rotation_policy: 'quarterly_automatic',
    escrow: 'dual_control_recovery',
    audit_trail: 'every_key_operation_logged'
  }
};
      `
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

        {/* Main Content with Enhanced Tabs */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto p-1">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-red-100 data-[state=active]:text-red-700"
                    >
                      <tab.icon className="h-5 w-5" />
                      <span className="text-xs font-medium text-center leading-tight">
                        {tab.label}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Enhanced Tab Contents */}
                <TabsContent value="overview" className="space-y-8">
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
                </TabsContent>

                <TabsContent value="art9" className="space-y-8">
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

                            <div className="space-y-4">
                              <h4 className="font-semibold flex items-center gap-2">
                                <Settings className="h-4 w-4 text-green-600" />
                                Implementation Requirements
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {requirement.implementation.requirements.map((req, i) => (
                                  <div key={i} className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                    <CheckSquare className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{req}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <button
                                onClick={() => setExpandedSection(expandedSection === `template-${index}` ? null : `template-${index}`)}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                              >
                                <Code className="h-4 w-4" />
                                Code-Template anzeigen
                                <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                  expandedSection === `template-${index}` && "rotate-180")} />
                              </button>
                              
                              {expandedSection === `template-${index}` && (
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
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="consent" className="space-y-8">
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
                </TabsContent>

                <TabsContent value="tom" className="space-y-8">
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
                              <h4 className="font-semibold mb-3">Code-Beispiel</h4>
                              <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto">
                                <pre className="text-green-400 text-xs">
                                  {tom.implementation}
                                </pre>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="dsfa" className="space-y-8">
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
                </TabsContent>

                <TabsContent value="implementation" className="space-y-8">
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
                </TabsContent>
              </Tabs>

              {/* Enhanced CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mt-20"
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
                          { icon: Heart, title: '500+ Healthcare-Kunden', subtitle: 'Vertrauen auf unsere Expertise' },
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

              {/* Quick Links */}
              <Card className="mt-12">
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