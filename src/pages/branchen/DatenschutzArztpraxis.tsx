import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
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
  Square,
  Camera,
  Archive,
  Printer,
  Trash2,
  Search,
  Filter,
  Folder,
  Calculator,
  CreditCard,
  Receipt,
  UserPlus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DatenschutzArztpraxis = () => {
  // Structured Data für SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Guide",
    "name": "Datenschutz in der Arztpraxis - DSGVO Compliance Guide",
    "description": "Praxisleitfaden für Datenschutz in Arztpraxen. Patientendaten DSGVO-konform verarbeiten, TOM implementieren.",
    "publisher": {
      "@type": "Organization",
      "name": "Marsstein Compliance Solutions"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "de-DE",
    "about": {
      "@type": "Thing",
      "name": "DSGVO Compliance in Arztpraxen"
    }
  };
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>('overview');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Add scroll-margin-top styles for sticky header and mobile optimizations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      h2[id], h3[id], section[id] {
        scroll-margin-top: 96px;
      }
      
      /* Mobile-optimierungen */
      @media (max-width: 768px) {
        body {
          font-size: 16px;
          line-height: 1.5;
        }
        
        .tap-target {
          min-height: 48px;
          min-width: 48px;
        }
        
        p, li {
          max-width: 45ch;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  // Navigation items for sticky navigation
  const navigationItems = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'patientendaten', label: 'Patientendatenverarbeitung', icon: Heart },
    { id: 'praxisorganisation', label: 'Praxisorganisation', icon: Settings },
    { id: 'tom-praxis', label: 'TOM für Arztpraxen', icon: Lock },
    { id: 'notfallsituationen', label: 'Notfallsituationen', icon: AlertTriangle },
    { id: 'implementation', label: 'Praxis-Leitfaden', icon: CheckSquare }
  ];
  
  const scrollToSection = (sectionId: string) => {
    window.history.pushState(null, '', `#${sectionId}`);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
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
      
      const scrollPosition = window.scrollY + 150;
      
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
    { label: 'DSGVO Art. 9 Compliance', value: 96, color: 'text-red-600', trend: '+4%' },
    { label: 'Patientendokumentation', value: 98, color: 'text-pink-600', trend: '+2%' },
    { label: 'Einverständniserklärungen', value: 94, color: 'text-rose-600', trend: '+8%' },
    { label: 'TOM Implementierung', value: 92, color: 'text-red-500', trend: '+6%' },
    { label: 'Mitarbeiterschulungen', value: 89, color: 'text-orange-500', trend: '+12%' },
    { label: 'Audit Readiness', value: 95, color: 'text-purple-600', trend: '+3%' }
  ];

  const patientDataProcessing = [
    {
      title: 'Erstaufnahme & Anamnese',
      description: 'Strukturierte Erfassung der Patientenstammdaten und Krankengeschichte gemäß DSGVO',
      icon: UserPlus,
      legalBasis: 'Art. 9 Abs. 2 lit. h DSGVO - Gesundheitsvorsorge',
      dataTypes: ['Personalien', 'Kontaktdaten', 'Versicherungsdaten', 'Anamnese', 'Beschwerden'],
      retentionPeriod: '10 Jahre nach letztem Behandlungskontakt',
      specialMeasures: [
        'Doppelte Einverständniserklärung für besondere Gesundheitsdaten',
        'Separate Speicherung von Stammdaten und medizinischen Daten',
        'Verschlüsselte Übertragung zwischen Praxissystemen',
        'Revisionssichere Archivierung'
      ],
      practicalScenario: {
        title: '🏥 Szenario: Neue Patientin mit chronischer Erkrankung',
        context: 'Eine 45-jährige Patientin kommt zur Erstuntersuchung mit einer Autoimmunerkrankung.',
        challenge: 'Wie erfassen wir alle relevanten Daten DSGVO-konform ohne den Behandlungsablauf zu behindern?',
        solution: {
          step1: {
            title: '📋 Modulare Datenerfassung',
            description: 'Gestufter Ansatz für verschiedene Datenkategorien',
            modules: [
              {
                name: 'Basis-Stammdaten',
                purpose: 'Patientenidentifikation & Abrechnung',
                dataTypes: 'Name, Adresse, Geburtsdatum, Versicherung',
                legal: 'Erforderlich für Behandlungsvertrag (Art. 6 Abs. 1 lit. b DSGVO)'
              },
              {
                name: 'Medizinische Basisdaten',
                purpose: 'Aktuelle Behandlung',
                dataTypes: 'Aktuelle Beschwerden, Medikation, Allergien',
                legal: 'Gesundheitsvorsorge (Art. 9 Abs. 2 lit. h DSGVO)'
              },
              {
                name: 'Erweiterte Anamnese',
                purpose: 'Umfassende Diagnostik',
                dataTypes: 'Vorerkrankungen, Familienanamnese, Sozialanamnese',
                legal: 'Explizite Einwilligung (Art. 9 Abs. 2 lit. a DSGVO)'
              }
            ]
          },
          step2: {
            title: '🔒 Datenschutz by Design',
            description: 'Technische Umsetzung der Datensparsamkeit',
            implementation: [
              'Automatische Verschlüsselung aller Gesundheitsdaten',
              'Rollenbasierte Zugriffsbeschränkung nach Behandlungsnotwendigkeit',
              'Automatisches Logging aller Datenzugriffe',
              'Separate Speicherung verschiedener Datenkategorien'
            ]
          },
          step3: {
            title: '📱 Digitaler Einverständnisprozess',
            description: 'Transparente und benutzerfreundliche Einwilligung',
            features: [
              'Tablet-basiertes System mit visueller Erklärung',
              'Getrennte Einwilligungen für verschiedene Datentypen',
              'Jederzeit widerrufbare Zustimmungen',
              'Automatische Dokumentation aller Einverständnisse'
            ]
          }
        },
        outcome: {
          efficiency: 'Erstaufnahme in 15 Minuten statt 30 Minuten',
          compliance: '100% DSGVO-konforme Einverständnisse',
          patientSatisfaction: '92% Zufriedenheit mit Transparenz'
        }
      }
    },
    {
      title: 'Behandlungsdokumentation',
      description: 'Revisionssichere Erfassung aller Behandlungsmaßnahmen und Befunde',
      icon: FileText,
      legalBasis: 'Art. 9 Abs. 2 lit. h DSGVO + Berufsordnung',
      dataTypes: ['Diagnosen', 'Therapiemaßnahmen', 'Verlaufsdokumentation', 'Befunde', 'Medikation'],
      retentionPeriod: '10 Jahre, bei Minderjährigen bis zur Volljährigkeit + 10 Jahre',
      specialMeasures: [
        'Elektronische Signatur für alle Einträge',
        'Unveränderbarkeit durch Blockchain-basierte Integrität',
        'Automatische Backup-Erstellung nach jeder Sitzung',
        'Vollständige Audit-Trail-Dokumentation'
      ],
      practicalScenario: {
        title: '🩺 Szenario: Langzeittherapie mit mehreren Fachärzten',
        context: 'Ein Patient wird über 6 Monate von verschiedenen Ärzten der Praxis behandelt.',
        challenge: 'Wie gewährleisten wir einheitliche, vollständige Dokumentation bei mehreren Behandlern?',
        solution: {
          step1: {
            title: '📊 Strukturierte Dokumentationsvorlage',
            description: 'Einheitliche Erfassung durch alle Behandler',
            structure: [
              'Pflichtfelder für jede Behandlung (SOAP-Schema)',
              'Dropdown-Menüs für häufige Diagnosen/Therapien',
              'Freitextfelder für individuelle Besonderheiten',
              'Automatische Verlinkung zu Vorbefunden'
            ]
          },
          step2: {
            title: '🔄 Automatisierte Qualitätskontrolle',
            description: 'System-unterstützte Vollständigkeitsprüfung',
            controls: [
              'Warnung bei unvollständiger Dokumentation vor Sitzungsende',
              'Automatische Erinnerung an Folgeuntersuchungen',
              'Plausibilitätsprüfung bei Medikamentenverschreibungen',
              'Integration mit Laborsystem für automatischen Befund-Import'
            ]
          }
        }
      }
    },
    {
      title: 'Überweisung & Arztbriefe',
      description: 'Sichere Kommunikation zwischen Behandlern unter Wahrung der ärztlichen Schweigepflicht',
      icon: Mail,
      legalBasis: 'Art. 9 Abs. 2 lit. h DSGVO - Gesundheitsversorgung',
      dataTypes: ['Befunde', 'Diagnosen', 'Therapieempfehlungen', 'Anamnese (relevante Teile)'],
      retentionPeriod: 'Kopien: 10 Jahre in Patientenakte',
      specialMeasures: [
        'Verschlüsselte E-Mail-Kommunikation (S/MIME oder PGP)',
        'Sichere Fax-Übertragung mit Empfangsbestätigung',
        'Minimierung der übertragenen Daten auf behandlungsrelevante Inhalte',
        'Dokumentation aller Datenübermittlungen'
      ]
    }
  ];

  const practiceOrganization = [
    {
      title: 'Terminmanagement & Patientenkommunikation',
      icon: Calendar,
      measures: [
        'Verschlüsselte Online-Terminbuchung mit minimaler Datenerfassung',
        'SMS-Erinnerungen nur mit Pseudonymen ("Ihr Termin morgen")',
        'E-Mail-Kommunikation ausschließlich über sichere Kanäle',
        'Wartezimmer-Organisation ohne Namensaufrufe'
      ],
      implementation: `
// Datenschutzkonformes Terminmanagement
const appointmentSystem = {
  booking: {
    requiredData: ['initials', 'phone_last_digits', 'appointment_type'],
    optionalData: ['email', 'preferred_time'],
    retention: '6_months_after_appointment',
    encryption: 'AES-256'
  },
  
  reminders: {
    sms: {
      content: 'Erinnerung: Termin morgen um [TIME] - Dr. [INITIALS]',
      personalization: 'minimal',
      opt_out: 'always_available'
    },
    email: {
      encryption: 'S/MIME_required',
      content: 'appointment_details_encrypted',
      fallback: 'phone_call'
    }
  },
  
  waiting_room: {
    call_system: 'number_based',
    privacy: 'no_names_in_public',
    seating: 'privacy_optimized'
  }
};
      `
    },
    {
      title: 'Abrechnung & Kostenträger',
      icon: CreditCard,
      measures: [
        'Getrennte Systeme für medizinische Daten und Abrechnungsdaten',
        'Pseudonymisierte Übermittlung an Abrechnungsdienstleister',
        'Verschlüsselte Kommunikation mit Krankenkassen',
        'Sichere Aufbewahrung der Belege nach GoB'
      ],
      implementation: `
// Datenschutzkonforme Abrechnung
const billingSystem = {
  data_separation: {
    medical_data: {
      storage: 'practice_internal_only',
      encryption: 'field_level_AES-256',
      access: 'medical_staff_only'
    },
    billing_data: {
      storage: 'separate_database',
      pseudonymization: 'automatic',
      external_sharing: 'encrypted_only'
    }
  },
  
  kostenträger_communication: {
    data_minimization: 'diagnosis_codes_only',
    encryption: 'TLS_1.3_minimum',
    audit_trail: 'complete_documentation',
    retention: 'legal_minimum_only'
  }
};
      `
    },
    {
      title: 'Personalmanagement',
      icon: Users,
      measures: [
        'Verschwiegenheitserklärungen für alle Mitarbeiter',
        'Rollenbasierte Zugriffskontrolle auf Patientendaten',
        'Regelmäßige Datenschutzschulungen',
        'Sichere Löschung bei Personalwechsel'
      ]
    }
  ];

  const tomMeasuresPractice = [
    {
      category: 'Physische Sicherheit',
      icon: Building2,
      description: 'Schutz der Praxisräume und physischen Datenträger',
      measures: [
        'Abschließbare Patientenschränke in jedem Behandlungsraum',
        'Zentraler, gesicherter Serverraum mit Klimaanlage',
        'Sichtschutz für Bildschirme im Empfangsbereich',
        'Sichere Vernichtung von Papierdokumenten (P-4 Standard)'
      ],
      practicalTips: [
        'Bildschirme automatisch sperren nach 5 Min Inaktivität',
        'Patientenakten niemals unbeaufsichtigt liegen lassen',
        'Drucker in sicheren Bereichen positionieren',
        'Backup-Medien in feuerfestem Tresor lagern'
      ]
    },
    {
      category: 'IT-Sicherheit',
      icon: Shield,
      description: 'Technische Schutzmaßnahmen für digitale Patientendaten',
      measures: [
        'Firewall mit Intrusion Detection System',
        'Regelmäßige Sicherheitsupdates für alle Systeme',
        'Antivirensoftware mit Echtzeit-Scanning',
        'Verschlüsselte Festplatten (BitLocker/LUKS)'
      ],
      practicalTips: [
        'Automatische Updates außerhalb der Sprechzeiten',
        'Separate VLAN für Praxisgeräte',
        'USB-Ports deaktivieren wo nicht benötigt',
        'Mobile Geräte über MDM verwalten'
      ]
    },
    {
      category: 'Zugriffskontrolle',
      icon: Key,
      description: 'Kontrolle über den Zugang zu Patientendaten',
      measures: [
        'Individuelle Benutzerkonten für jeden Mitarbeiter',
        'Zwei-Faktor-Authentifizierung für kritische Systeme',
        'Automatische Sperrung bei Fehlversuchen',
        'Regelmäßige Überprüfung der Zugriffsrechte'
      ],
      practicalTips: [
        'Passwort-Manager für alle Mitarbeiter bereitstellen',
        'Notfallzugänge nur für Praxisinhaber',
        'Zeitbasierte Zugriffsbeschränkungen',
        'Sofortige Deaktivierung bei Personalwechsel'
      ]
    }
  ];

  const emergencyScenarios = [
    {
      scenario: 'Notfallbehandlung bewusstloser Patient',
      urgency: 'Kritisch',
      legalBasis: 'Art. 9 Abs. 2 lit. c DSGVO - Lebenswichtige Interessen',
      immediateActions: [
        'Behandlung ohne Einverständnis bei vitaler Indikation',
        'Minimale erforderliche Datenverarbeitung',
        'Notfalldokumentation für später Nachvollziehbarkeit',
        'Angehörige informieren sobald möglich'
      ],
      followUpActions: [
        'Patienteninformation innerhalb 72h nach Stabilisation',
        'Nachträgliche Einverständniserklärung einholen',
        'Überschüssige Daten löschen nach Stabilisation',
        'Vollständige Dokumentation des Notfalls'
      ],
      documentation: `
// Notfall-Datenverarbeitung Protokoll
const emergencyProtocol = {
  patient_id: generateEmergencyId(),
  timestamp: new Date().toISOString(),
  legal_basis: 'Art. 9 Abs. 2 lit. c DSGVO',
  
  emergency_situation: {
    type: 'vital_threat',
    consciousness: 'unconscious',
    witnesses: ['dr_smith', 'nurse_jane'],
    vitals: recordedVitals
  },
  
  data_processing: {
    immediate_necessary: {
      vital_signs: true,
      allergies: 'life_threatening_only',
      medications: 'interaction_critical_only',
      medical_history: 'emergency_relevant_only'
    },
    
    not_processed: {
      social_history: false,
      family_history: false,
      financial_data: false,
      non_critical_conditions: false
    }
  },
  
  post_emergency: {
    patient_information: {
      deadline: '72_hours_max',
      method: 'written_and_verbal',
      required: true
    },
    consent_regularization: 'as_soon_as_stable',
    data_review: 'unnecessary_deletion_within_7_days'
  }
};
      `
    },
    {
      scenario: 'IT-Systemausfall während Sprechstunde',
      urgency: 'Hoch',
      legalBasis: 'Behandlungsvertrag - Notfall-Dokumentation',
      immediateActions: [
        'Umstellung auf Papier-Dokumentation',
        'Sichere Aufbewahrung der handschriftlichen Notizen',
        'Information der Patienten über temporäre Maßnahmen',
        'Priorisierung dringender Behandlungen'
      ],
      followUpActions: [
        'Digitale Nacherfassung binnen 24h nach Systemwiederherstellung',
        'Abgleich zwischen Papier- und digitaler Dokumentation',
        'Sichere Vernichtung der Papiernotizen nach Übertragung',
        'Analyse der Ausfallursache und Präventionsmaßnahmen'
      ]
    }
  ];

  const implementationGuide = [
    {
      phase: 'Bestandsaufnahme & Analyse',
      duration: '2-3 Wochen',
      color: 'blue',
      tasks: [
        'Datenschutz-Audit der aktuellen Praxis',
        'Identifikation aller Datenverarbeitungsprozesse',
        'Bewertung der bestehenden TOM-Maßnahmen',
        'Gap-Analyse zu DSGVO-Anforderungen',
        'Risikoanalyse für die Praxis'
      ],
      deliverables: [
        'Datenschutz-Auditbericht',
        'Verzeichnis der Verarbeitungstätigkeiten (VVT)',
        'TOM-Bewertung mit Handlungsempfehlungen'
      ]
    },
    {
      phase: 'Rechtliche Grundlagen',
      duration: '1-2 Wochen', 
      color: 'green',
      tasks: [
        'Datenschutzbeauftragten bestellen (falls erforderlich)',
        'Patienteneinverständniserklärungen überarbeiten',
        'Mitarbeiterverträge um Datenschutzklauseln ergänzen',
        'Auftragsverarbeitungsverträge mit Dienstleistern',
        'Datenschutzerklärung für Praxis-Website'
      ],
      deliverables: [
        'DSGVO-konforme Einverständniserklärungen',
        'Auftragsverarbeitungsverträge',
        'Mitarbeiterschulung-Dokumentation'
      ]
    },
    {
      phase: 'Technische Umsetzung',
      duration: '3-4 Wochen',
      color: 'orange',
      tasks: [
        'Praxissoftware auf DSGVO-Compliance prüfen',
        'Verschlüsselung für alle Patientendaten aktivieren',
        'Backup-System einrichten und testen',
        'Zugriffskontrolle implementieren',
        'Sichere Kommunikationswege etablieren'
      ],
      deliverables: [
        'DSGVO-konforme IT-Infrastruktur',
        'Backup-Konzept mit Wiederherstellungstest',
        'Sichere Kommunikationskanäle'
      ]
    },
    {
      phase: 'Organisatorische Maßnahmen',
      duration: '2-3 Wochen',
      color: 'purple',
      tasks: [
        'Mitarbeiterschulungen durchführen',
        'Arbeitsanweisungen für Datenschutz erstellen',
        'Incident-Response-Plan entwickeln',
        'Regelmäßige Compliance-Checks etablieren',
        'Dokumentation aller Maßnahmen'
      ],
      deliverables: [
        'Geschulte Mitarbeiter mit Nachweisen',
        'Datenschutz-Arbeitsanweisungen',
        'Incident-Response-Plan'
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
    <>
      <Helmet>
        <title>Datenschutz Arztpraxis DSGVO – Praxis-Guide für Ärzte 2024</title>
        <meta name="description" content="DSGVO für Arztpraxen: ✓ Patientendaten sicher verwalten ✓ Einwilligungen korrekt ✓ TOM-Checklisten ✓ Schweigepflicht digital. Jetzt Praxis-Guide lesen!" />
        <meta name="keywords" content="datenschutz arztpraxis, dsgvo arzt, patientendatenschutz, einwilligung patient, tom arztpraxis, schweigepflicht dsgvo" />
        <link rel="canonical" href="https://marsstein.ai/wissen/branchen/datenschutz-arztpraxis" />
        <meta property="og:title" content="Datenschutz in der Arztpraxis - DSGVO Compliance Guide" />
        <meta property="og:description" content="Praxisleitfaden für Datenschutz in Arztpraxen. Patientendaten DSGVO-konform verarbeiten, TOM implementieren." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://marsstein.ai/wissen/branchen/datenschutz-arztpraxis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      
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
                    <Stethoscope className="h-4 w-4" />
                    <span className="text-sm font-medium">Datenschutz für Arztpraxen</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Datenschutz in der
                    <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                      Arztpraxis
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Kompletter DSGVO-Leitfaden für niedergelassene Ärzte. Von der Patientenaufnahme bis zur 
                    sicheren Archivierung – alle Datenschutzaspekte praxisnah erklärt.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>DSGVO-konforme Patientendatenverarbeitung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Sichere Praxisorganisation und IT-Systeme</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Notfallsituationen rechtssicher bewältigen</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=healthcare">
                      <Button size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 text-white hover:opacity-90 group tap-target min-h-[48px]">
                        <Heart className="mr-2 h-5 w-5" />
                        Praxis-Beratung buchen
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group tap-target min-h-[48px]">
                      <Download className="mr-2 h-5 w-5" />
                      Arztpraxis DSGVO-Checkliste
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
                        <h3 className="font-bold text-lg">Praxis Compliance Status</h3>
                        <Badge className="bg-green-100 text-green-700">
                          {getCompletionPercentage()}% Implementiert
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {complianceStats.slice(0, 6).map((stat, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="p-3 bg-white dark:bg-gray-900 rounded-lg border text-center cursor-pointer"
                          >
                            <div className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1">
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
                      <Stethoscope className="h-4 w-4 text-red-500 animate-pulse" />
                      <span className="text-sm font-medium">Praxis Ready</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Inhaltsverzeichnis für Mobile und Desktop */}
        <section className="py-8 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <nav aria-label="Inhaltsverzeichnis" className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-red-600" />
                  Inhaltsverzeichnis
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left tap-target"
                    >
                      <item.icon className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <nav className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm" aria-label="Inhaltsverzeichnis">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setActiveSection(item.id);
                    }}
                    aria-label={`Zu ${item.label} springen`}
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
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Sections */}
        <div className="py-20">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto space-y-20">

              {/* Overview Section */}
              <section id="overview" className="space-y-8 scroll-mt-32" aria-label="Überblick Datenschutz Arztpraxis">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Datenschutz in der Arztpraxis - Überblick
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-6 w-6 text-red-600" />
                        DSGVO für niedergelassene Ärzte
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Arztpraxen verarbeiten täglich hochsensible Gesundheitsdaten, die unter die besonderen 
                        Kategorien personenbezogener Daten (Art. 9 DSGVO) fallen und höchste Schutzanforderungen haben.
                      </p>
                      
                      <div className="space-y-3">
                        {[
                          'Ärztliche Schweigepflicht trifft auf DSGVO-Anforderungen',
                          'Besondere Rechtsgrundlagen für Gesundheitsdaten erforderlich',
                          'Erhöhte technische und organisatorische Maßnahmen (TOM)',
                          'Spezielle Einverständniserklärungen für Patienten'
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Stethoscope className="h-4 w-4 text-red-600 flex-shrink-0 mt-1" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-red-600" />
                          <span className="font-semibold text-red-800 dark:text-red-400">
                            Besondere Risiken
                          </span>
                        </div>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          Bußgelder bis zu 20 Mio. € oder 4% des Jahresumsatzes bei Verstößen gegen 
                          Art. 9 DSGVO (Besondere Kategorien personenbezogener Daten)
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-6 w-6 text-pink-600" />
                        Praxis-spezifische Herausforderungen
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Kleine und mittlere Arztpraxen stehen vor besonderen Herausforderungen bei der 
                        DSGVO-Umsetzung, die praktikable Lösungen erfordern.
                      </p>
                      
                      <div className="space-y-3">
                        {[
                          'Begrenzte Ressourcen für IT und Datenschutz',
                          'Verschiedene Praxissoftware-Systeme mit unterschiedlicher DSGVO-Reife',
                          'Mitarbeiterschulungen in kleinen Teams organisieren',
                          'Balance zwischen Datenschutz und Behandlungsqualität'
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <AlertCircle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-1" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span className="font-semibold text-green-800 dark:text-green-400">
                            Praxistaugliche Lösungen
                          </span>
                        </div>
                        <p className="text-sm text-green-700 dark:text-green-300">
                          Dieser Leitfaden bietet konkrete, umsetzbare Lösungen speziell für den 
                          Praxisalltag ohne übermäßigen Verwaltungsaufwand.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Patient Data Processing Section */}
              <section id="patientendaten" className="space-y-8 scroll-mt-32" aria-label="Patientendatenverarbeitung">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Patientendatenverarbeitung in der Praxis
                </motion.h2>
                <div className="space-y-8">
                  {patientDataProcessing.map((process, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="border-l-4 border-pink-500">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-xl pr-4 flex items-center gap-2">
                              <process.icon className="h-6 w-6 text-pink-600" />
                              {process.title}
                            </CardTitle>
                            <Badge className="flex-shrink-0">
                              {process.retentionPeriod}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {process.description}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Scale className="h-4 w-4 text-blue-600" />
                                Rechtsgrundlage
                              </h4>
                              <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                                  {process.legalBasis}
                                </p>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Database className="h-4 w-4 text-purple-600" />
                                Datenarten
                              </h4>
                              <div className="space-y-1">
                                {process.dataTypes.map((dataType, i) => (
                                  <div key={i} className="text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded">
                                    {dataType}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Shield className="h-4 w-4 text-green-600" />
                              Besondere Schutzmaßnahmen
                            </h4>
                            <div className="space-y-2">
                              {process.specialMeasures.map((measure, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                                  <span className="text-sm">{measure}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {process.practicalScenario && (
                            <div className="space-y-6">
                              <button
                                onClick={() => setExpandedSection(expandedSection === `patient-${index}` ? null : `patient-${index}`)}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                              >
                                <Lightbulb className="h-4 w-4" />
                                Praxis-Szenario anzeigen
                                <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                  expandedSection === `patient-${index}` && "rotate-180")} />
                              </button>
                              
                              {expandedSection === `patient-${index}` && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="mt-4"
                                >
                                  <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
                                    <h3 className="text-xl font-bold mb-4 text-red-900 dark:text-red-100">
                                      {process.practicalScenario.title}
                                    </h3>
                                    <div className="space-y-4">
                                      <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-4">
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                          <FileText className="h-4 w-4" />
                                          Kontext
                                        </h4>
                                        <p className="text-sm">{process.practicalScenario.context}</p>
                                      </div>
                                      
                                      <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-4 border border-amber-200">
                                        <h4 className="font-semibold mb-2 text-amber-800 dark:text-amber-200 flex items-center gap-2">
                                          <AlertTriangle className="h-4 w-4" />
                                          Herausforderung
                                        </h4>
                                        <p className="text-sm text-amber-700 dark:text-amber-300">
                                          {process.practicalScenario.challenge}
                                        </p>
                                      </div>
                                      
                                      <div className="space-y-4">
                                        <h4 className="font-semibold text-green-800 dark:text-green-200 flex items-center gap-2">
                                          <CheckCircle2 className="h-4 w-4" />
                                          Lösungsansatz
                                        </h4>
                                        {Object.values(process.practicalScenario.solution).map((step: any, stepIndex) => (
                                          <div key={stepIndex} className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
                                            <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-3">
                                              {step.title}
                                            </h5>
                                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                                              {step.description}
                                            </p>
                                            {step.modules && (
                                              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {step.modules.map((module: any, moduleIndex: number) => (
                                                  <div key={moduleIndex} className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                                    <div className="font-medium text-blue-900 dark:text-blue-100 text-sm mb-1">
                                                      {module.name}
                                                    </div>
                                                    <div className="text-xs text-blue-700 dark:text-blue-300 mb-2">
                                                      {module.purpose}
                                                    </div>
                                                    <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                                      {module.dataTypes}
                                                    </div>
                                                    <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                                                      ⚖️ {module.legal}
                                                    </div>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.implementation && (
                                              <div className="space-y-2">
                                                {step.implementation.map((impl: string, implIndex: number) => (
                                                  <div key={implIndex} className="flex items-start gap-2 text-sm">
                                                    <Settings className="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" />
                                                    <span>{impl}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.features && (
                                              <div className="space-y-2">
                                                {step.features.map((feature: string, featureIndex: number) => (
                                                  <div key={featureIndex} className="flex items-start gap-2 text-sm">
                                                    <Smartphone className="h-3 w-3 text-purple-600 mt-1 flex-shrink-0" />
                                                    <span>{feature}</span>
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
                                          Ergebnis
                                        </h4>
                                        <div className="space-y-2 text-sm">
                                          {Object.entries(process.practicalScenario.outcome).map(([key, value]) => (
                                            <div key={key}>
                                              <span className="font-medium capitalize text-green-700 dark:text-green-300">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}:
                                              </span>{' '}
                                              <span className="text-green-600 dark:text-green-400">{value as string}</span>
                                            </div>
                                          ))}
                                        </div>
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

              {/* Practice Organization Section */}
              <section id="praxisorganisation" className="space-y-8 scroll-mt-32" aria-label="Praxisorganisation">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Praxisorganisation & Verwaltung
                </motion.h2>
                <div className="space-y-8">
                  {practiceOrganization.map((org, index) => (
                    <Card key={index} className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <org.icon className="h-6 w-6 text-blue-600" />
                          {org.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">Datenschutzmaßnahmen</h4>
                          <div className="space-y-2">
                            {org.measures.map((measure, i) => (
                              <div key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{measure}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {org.implementation && (
                          <div>
                            <button
                              onClick={() => setExpandedSection(expandedSection === `org-${index}` ? null : `org-${index}`)}
                              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code className="h-4 w-4" />
                              Technische Umsetzung anzeigen
                              <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                expandedSection === `org-${index}` && "rotate-180")} />
                            </button>
                            
                            {expandedSection === `org-${index}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4"
                              >
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre className="text-green-400 text-xs">
                                    {org.implementation}
                                  </pre>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* TOM for Medical Practices Section */}
              <section id="tom-praxis" className="space-y-8 scroll-mt-32" aria-label="Technische und Organisatorische Maßnahmen für Arztpraxen">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  TOM-Maßnahmen für Arztpraxen
                </motion.h2>
                <div className="space-y-8">
                  {tomMeasuresPractice.map((tom, index) => (
                    <Card key={index} className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <tom.icon className="h-6 w-6 text-red-600" />
                          {tom.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-gray-600 dark:text-gray-400">
                          {tom.description}
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Technische Maßnahmen</h4>
                            <div className="space-y-2">
                              {tom.measures.map((measure, i) => (
                                <div key={i} className="flex items-start gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded">
                                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{measure}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Praktische Tipps</h4>
                            <div className="space-y-2">
                              {tom.practicalTips.map((tip, i) => (
                                <div key={i} className="flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                                  <Lightbulb className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{tip}</span>
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

              {/* Emergency Situations Section */}
              <section id="notfallsituationen" className="space-y-8 scroll-mt-32" aria-label="Notfallsituationen">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Notfallsituationen & Datenschutz
                </motion.h2>
                <div className="space-y-8">
                  {emergencyScenarios.map((emergency, index) => (
                    <Card key={index} className="p-6 border-l-4 border-orange-500">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <AlertTriangle className="h-6 w-6 text-orange-600" />
                            {emergency.scenario}
                          </CardTitle>
                          <div className="flex items-center gap-2">
                            <Badge variant="destructive">
                              {emergency.urgency}
                            </Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                          <div className="text-sm font-medium text-blue-800 dark:text-blue-200 mb-1">
                            Rechtsgrundlage
                          </div>
                          <div className="text-sm text-blue-700 dark:text-blue-300">
                            {emergency.legalBasis}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Zap className="h-4 w-4 text-red-600" />
                              Sofortmaßnahmen
                            </h4>
                            <div className="space-y-2">
                              {emergency.immediateActions.map((action, i) => (
                                <div key={i} className="flex items-start gap-2 p-2 bg-red-50 dark:bg-red-950/30 rounded">
                                  <Clock className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{action}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-green-600" />
                              Nachfolgende Maßnahmen
                            </h4>
                            <div className="space-y-2">
                              {emergency.followUpActions.map((action, i) => (
                                <div key={i} className="flex items-start gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded">
                                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{action}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {emergency.documentation && (
                          <div>
                            <button
                              onClick={() => setExpandedSection(expandedSection === `emergency-${index}` ? null : `emergency-${index}`)}
                              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code className="h-4 w-4" />
                              Dokumentationsvorlage anzeigen
                              <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                expandedSection === `emergency-${index}` && "rotate-180")} />
                            </button>
                            
                            {expandedSection === `emergency-${index}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4"
                              >
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre className="text-green-400 text-xs">
                                    {emergency.documentation}
                                  </pre>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Implementation Guide Section */}
              <section id="implementation" className="space-y-8 scroll-mt-32" aria-label="Praxis-Leitfaden">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Schritt-für-Schritt Implementierungsguide
                </motion.h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
                  {implementationGuide.map((phase, index) => (
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

                {/* Interactive Compliance Checklist */}
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckSquare className="h-6 w-6 text-green-600" />
                      Praxis Compliance-Checkliste
                    </CardTitle>
                    <div className="text-sm text-gray-600">
                      Implementierungsfortschritt: {getCompletionPercentage()}% abgeschlossen
                    </div>
                    <Progress value={getCompletionPercentage()} className="h-2" />
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        category: 'Rechtliche Grundlagen',
                        items: [
                          'Datenschutzbeauftragte/r bestellt (falls erforderlich)',
                          'Verzeichnis der Verarbeitungstätigkeiten (VVT) erstellt',
                          'DSFA für kritische Verarbeitungen durchgeführt',
                          'Patienteneinverständniserklärungen überarbeitet',
                          'Auftragsverarbeitungsverträge mit Dienstleistern',
                          'Mitarbeiterverträge um Datenschutzklauseln ergänzt',
                          'Datenschutzerklärung für Praxis-Website erstellt'
                        ]
                      },
                      {
                        category: 'Technische Maßnahmen', 
                        items: [
                          'Praxissoftware auf DSGVO-Compliance geprüft',
                          'Verschlüsselung für alle Patientendaten aktiviert',
                          'Backup-System eingerichtet und getestet',
                          'Firewall und Antivirensoftware installiert',
                          'Zugriffskontrolle mit individuellen Benutzerkonten',
                          'Zwei-Faktor-Authentifizierung implementiert',
                          'Sichere E-Mail-Kommunikation eingerichtet'
                        ]
                      },
                      {
                        category: 'Organisatorische Maßnahmen',
                        items: [
                          'Mitarbeiterschulungen durchgeführt',
                          'Arbeitsanweisungen für Datenschutz erstellt',
                          'Incident-Response-Plan entwickelt',
                          'Physische Sicherheitsmaßnahmen umgesetzt',
                          'Regelmäßige Compliance-Checks etabliert',
                          'Sichere Vernichtung von Papierdokumenten organisiert',
                          'Notfallprozeduren dokumentiert'
                        ]
                      },
                      {
                        category: 'Praxisorganisation',
                        items: [
                          'Wartezimmer-Organisation ohne Namensaufrufe',
                          'Sichere Terminvergabe implementiert',
                          'Datenschutzkonforme Abrechnung sichergestellt',
                          'Praxisräume sichtschutzoptimiert',
                          'Patientenakte-Aufbewahrung reorganisiert',
                          'Kommunikation mit Kostenträgern verschlüsselt',
                          'Überweisung und Arztbriefe sicher übertragen'
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
                        <Stethoscope className="h-16 w-16 mx-auto mb-6 text-white" />
                      </motion.div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold">
                        Machen Sie Ihre Arztpraxis DSGVO-konform
                      </h2>
                      <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Profitieren Sie von unserer langjährigen Expertise im Healthcare-Datenschutz. 
                        Wir begleiten Sie sicher durch alle Compliance-Anforderungen.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact?demo=true&industry=healthcare">
                          <Button 
                            size="lg" 
                            className="bg-white text-red-600 hover:bg-gray-100 group shadow-lg"
                          >
                            <Stethoscope className="mr-2 h-5 w-5" />
                            Kostenlose Praxis-Beratung
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="bg-transparent text-white border-white hover:bg-white/10"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Arztpraxis DSGVO-Handbuch (PDF)
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        {[
                          { icon: Heart, title: 'Praxis-Expertise', subtitle: 'Spezialisiert auf niedergelassene Ärzte' },
                          { icon: Shield, title: 'DSGVO Art. 9 Ready', subtitle: 'Besondere Kategorien-Compliance' },
                          { icon: CheckCircle2, title: 'Praxistaugliche Lösungen', subtitle: 'Ohne übermäßigen Aufwand' }
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
                    <Link to="/wissen/branchen/gesundheitswesen-dsgvo" className="block group">
                      <div className="p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors group-hover:shadow-md">
                        <Heart className="h-5 w-5 text-red-600 mb-2" />
                        <div className="font-medium">Healthcare DSGVO Guide</div>
                        <div className="text-sm text-gray-600">Umfassender Compliance-Guide</div>
                      </div>
                    </Link>
                    <Link to="/wissen/branchen/datenschutz-pflege" className="block group">
                      <div className="p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors group-hover:shadow-md">
                        <Users className="h-5 w-5 text-pink-600 mb-2" />
                        <div className="font-medium">Datenschutz Pflege</div>
                        <div className="text-sm text-gray-600">Speziell für Pflegeeinrichtungen</div>
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
                        <Building2 className="h-5 w-5 text-blue-600 mb-2" />
                        <div className="font-medium">Healthcare Solutions</div>
                        <div className="text-sm text-gray-600">Unsere Produkte für Praxen</div>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Related Links Section for SEO */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Verwandte Compliance-Themen</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/wissen/branchen/datenschutz-pflege" className="group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2">Datenschutz in der Pflege</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">DSGVO-Compliance für Pflegeeinrichtungen</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/wissen/branchen/logistics-compliance" className="group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2">Logistics Compliance</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">DSGVO im Supply Chain Management</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/wissen/dsgvo-compliance" className="group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2">DSGVO Grundlagen</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Basiswissen zur EU-Datenschutzverordnung</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default DatenschutzArztpraxis;