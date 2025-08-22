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
  Home,
  Bed,
  Wheelchair,
  Camera,
  ClipboardList,
  PhoneCall,
  MessageSquare,
  Video,
  Tablets,
  Cpu
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DatenschutzPflege = () => {
  // Structured Data für SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Guide",
    "name": "Datenschutz in der Pflege - DSGVO Compliance Guide",
    "description": "Umfassender Leitfaden für Datenschutz in Pflegeeinrichtungen. Rechtssichere Pflegedokumentation nach DSGVO.",
    "publisher": {
      "@type": "Organization",
      "name": "Marsstein Compliance Solutions"
    },
    "datePublished": "2024-01-15",
    "dateModified": new Date().toISOString(),
    "inLanguage": "de-DE",
    "about": {
      "@type": "Thing",
      "name": "DSGVO Compliance in Pflegeeinrichtungen"
    }
  };
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>('ueberblick');
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
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const getCompletionPercentage = () => {
    const totalItems = 24; // Gesamtanzahl der Checklist-Items
    return Math.round((checkedItems.size / totalItems) * 100);
  };

  return (
    <>
      <Helmet>
        <title>Datenschutz Pflege DSGVO – Praxis-Guide für Pflegeheime 2024</title>
        <meta name="description" content="DSGVO für Pflegeeinrichtungen: ✓ Bewohnerdaten sicher verwalten ✓ Digitale Pflegedokumentation ✓ TOM-Checklisten ✓ Einwilligung bei Demenz. Jetzt Guide lesen!" />
        <meta name="keywords" content="datenschutz pflege, dsgvo pflegeeinrichtung, pflegedokumentation datenschutz, bewohnerdaten schützen, tom pflegeheim, einwilligung pflege" />
        <link rel="canonical" href="https://marsstein.com/wissen/branchen/datenschutz-pflege" />
        <meta property="og:title" content="Datenschutz in der Pflege - DSGVO Compliance Guide" />
        <meta property="og:description" content="Umfassender Leitfaden für Datenschutz in Pflegeeinrichtungen. Rechtssichere Pflegedokumentation nach DSGVO." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://marsstein.com/wissen/branchen/datenschutz-pflege" />
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
                    <Heart className="h-4 w-4" />
                    <span className="text-sm font-medium">DSGVO Datenschutz Pflege</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Datenschutz in der
                    <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                      Pflege & Betreuung
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Rechtssichere DSGVO-Compliance für Pflegeheime, ambulante Dienste und Betreuungseinrichtungen. 
                    Von der Einwilligung bis zur sicheren Pflegedokumentation.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Einwilligungsmanagement bei eingeschränkter Geschäftsfähigkeit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Sichere digitale Pflegedokumentation nach DSGVO</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Angehörigen-Kommunikation datenschutzkonform</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=pflege">
                      <Button size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 text-white hover:opacity-90 group tap-target min-h-[48px]">
                        <Heart className="mr-2 h-5 w-5" />
                        Pflege Demo buchen
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group tap-target min-h-[48px]">
                      <Download className="mr-2 h-5 w-5" />
                      Pflege DSGVO Leitfaden
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
                        <h3 className="font-bold text-lg">Pflege Compliance Center</h3>
                        <Badge className="bg-green-100 text-green-700">
                          {Math.round(complianceStats.reduce((acc, stat) => acc + stat.value, 0) / complianceStats.length)}% Konform
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
                      <Home className="h-4 w-4 text-red-500 animate-pulse" />
                      <span className="text-sm font-medium">Pflege Ready</span>
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
              <section id="ueberblick" className="space-y-8 scroll-mt-32" aria-label="Überblick Datenschutz in der Pflege">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  DSGVO-Compliance in Pflegeeinrichtungen
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Heart className="h-6 w-6 text-red-600" />
                        Besondere Herausforderungen der Pflege
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Pflegeeinrichtungen verarbeiten hochsensible Gesundheitsdaten und stehen vor 
                        besonderen Herausforderungen bei der DSGVO-Compliance, insbesondere beim 
                        Einwilligungsmanagement.
                      </p>
                      
                      <div className="space-y-3">
                        {[
                          'Einwilligung bei eingeschränkter Geschäftsfähigkeit',
                          'Rollenbasierte Zugriffe für verschiedene Berufsgruppen',
                          'Sichere Angehörigen-Kommunikation',
                          'Rechtssichere Pflegedokumentation'
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
                            Besonderes Risiko
                          </span>
                        </div>
                        <p className="text-sm text-red-700 dark:text-red-300">
                          Art. 9 DSGVO Gesundheitsdaten: Bis zu 20 Mio. € oder 4% des Jahresumsatzes
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="h-6 w-6 text-purple-600" />
                        Pflege-spezifische Datenverarbeitung
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Die Digitalisierung der Pflege bringt neue Möglichkeiten, aber auch erhöhte 
                        Datenschutzanforderungen mit sich.
                      </p>
                      
                      <div className="space-y-3">
                        {[
                          'Digitale Pflegedokumentation mit Audit-Trail',
                          'IoT-Monitoring von Vitalwerten', 
                          'Mobile Apps für Angehörigen-Kommunikation',
                          'Telemedizin und Remote-Betreuung'
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Cpu className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
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
                          Privacy by Design von Anfang an - bereits bei der Systemplanuung
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Legal Framework Section */}
              <section id="rechtliche-grundlagen" className="space-y-8 scroll-mt-32" aria-label="Rechtliche Grundlagen">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Rechtliche Grundlagen für Pflegeeinrichtungen
                </motion.h2>
                <div className="space-y-8">
                  {legalRequirements.map((requirement, index) => (
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
                                Anwendungsbeispiele in der Pflege
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
                                onClick={() => setExpandedSection(expandedSection === `legal-${index}` ? null : `legal-${index}`)}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                              >
                                <Lightbulb className="h-4 w-4" />
                                Praxis-Szenario anzeigen
                                <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                  expandedSection === `legal-${index}` && "rotate-180")} />
                              </button>
                              
                              {expandedSection === `legal-${index}` && (
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
                                          {step.roles && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                              {step.roles.map((role, roleIndex) => (
                                                <div key={roleIndex} className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                                  <div className="font-medium text-blue-900 dark:text-blue-100 text-sm mb-1">
                                                    {role.name}
                                                  </div>
                                                  <div className="text-xs text-blue-700 dark:text-blue-300 mb-2">
                                                    {role.access}
                                                  </div>
                                                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                                    <strong>Einschränkungen:</strong> {role.restrictions}
                                                  </div>
                                                  <div className="text-xs text-green-600 dark:text-green-400">
                                                    📝 {role.documentation}
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                          {step.measures && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                              {step.measures.map((measure, measureIndex) => (
                                                <div key={measureIndex} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                                                  <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                                    {measure.level}
                                                  </div>
                                                  <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
                                                    {measure.protection}
                                                  </div>
                                                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                                    <strong>Nutzen:</strong> {measure.benefit}
                                                  </div>
                                                  <div className="text-xs text-green-600 dark:text-green-400">
                                                    🔧 {measure.implementation}
                                                  </div>
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
                                          {step.stages && (
                                            <div className="space-y-3">
                                              {step.stages.map((stage, stageIndex) => (
                                                <div key={stageIndex} className="border-l-4 border-blue-500 pl-4">
                                                  <div className="font-medium text-sm mb-1">{stage.stage}</div>
                                                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                                    <strong>Einwilligungsfähigkeit:</strong> {stage.capacity}
                                                  </div>
                                                  <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
                                                    <strong>Ansatz:</strong> {stage.approach}
                                                  </div>
                                                  <div className="text-xs text-green-600 dark:text-green-400">
                                                    📋 {stage.documentation}
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                          {step.process && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                              {step.process.map((process, processIndex) => (
                                                <div key={processIndex} className="flex items-start gap-2 text-sm">
                                                  <CheckCircle2 className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                                                  <span>{process}</span>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                          {step.measures && step.measures.map && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                              {step.measures.map((measure, measureIndex) => (
                                                <div key={measureIndex} className="flex items-start gap-2 text-sm">
                                                  <Shield className="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" />
                                                  <span>{measure}</span>
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
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Code className="h-4 w-4 text-green-600" />
                                Technische Umsetzung
                              </h4>
                              <div className="space-y-3">
                                <div>
                                  <h5 className="font-medium mb-2">Anforderungen:</h5>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {requirement.implementation.requirements.map((req, i) => (
                                      <div key={i} className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                                        <span>{req}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre className="text-green-400 text-xs">
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
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Consent Management Section */}
              <section id="einwilligungsmanagement" className="space-y-8 scroll-mt-32" aria-label="Einwilligungsmanagement">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Einwilligungsmanagement in Pflegeeinrichtungen
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

              {/* TOM Pflege Section */}
              <section id="tom-pflege" className="space-y-8 scroll-mt-32" aria-label="Technische und Organisatorische Maßnahmen">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Technische und Organisatorische Maßnahmen (TOM) für die Pflege
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
                            <h4 className="font-semibold mb-3">Pflege-spezifisch</h4>
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
              <section id="dsfa-risiken" className="space-y-8 scroll-mt-32" aria-label="Datenschutz-Folgenabschätzung und Risiken">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Datenschutz-Folgenabschätzung & Risikoanalyse für Pflegeeinrichtungen
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
              <section id="praxis-umsetzung" className="space-y-8 scroll-mt-32" aria-label="Praxis-Umsetzung">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Praxis-Implementation & Roadmap für Pflegeeinrichtungen
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
                      Interaktive Pflege-Compliance-Checkliste
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
                        <Home className="h-16 w-16 mx-auto mb-6 text-white" />
                      </motion.div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold">
                        Starten Sie Ihre DSGVO-konforme Pflege
                      </h2>
                      <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Nutzen Sie unsere jahrelange Expertise im Bereich Pflege-Datenschutz. 
                        Von der Einwilligung bis zur sicheren Dokumentation – wir begleiten Sie zur vollständigen Compliance.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact?demo=true&industry=pflege">
                          <Button 
                            size="lg" 
                            className="bg-white text-red-600 hover:bg-gray-100 group shadow-lg"
                          >
                            <Heart className="mr-2 h-5 w-5" />
                            Kostenlose Pflege-Beratung
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="bg-transparent text-white border-white hover:bg-white/10"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Umfassender Pflege-DSGVO Guide (PDF)
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        {[
                          { icon: Heart, title: 'Pflege-Expertise', subtitle: 'Spezialisiert auf Pflegeeinrichtungen' },
                          { icon: Shield, title: 'Vollständige DSGVO-Compliance', subtitle: 'Rechtssichere Umsetzung' },
                          { icon: Award, title: 'Bewährte Lösungen', subtitle: 'Erfolgreich in 500+ Einrichtungen' }
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
                    Weiterführende Pflege-Ressourcen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link to="/wissen/branchen/datenschutz-arztpraxis" className="block group">
                      <div className="p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors group-hover:shadow-md">
                        <Stethoscope className="h-5 w-5 text-red-600 mb-2" />
                        <div className="font-medium">Datenschutz Arztpraxis</div>
                        <div className="text-sm text-gray-600">Medizinische Praxen DSGVO</div>
                      </div>
                    </Link>
                    <Link to="/wissen/leitfaeden/betroffenenrechte" className="block group">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group-hover:shadow-md">
                        <Users className="h-5 w-5 text-purple-600 mb-2" />
                        <div className="font-medium">Betroffenenrechte</div>
                        <div className="text-sm text-gray-600">Rechte der Bewohner</div>
                      </div>
                    </Link>
                    <Link to="/wissen/krisenmanagement/data-breach-72h" className="block group">
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md">
                        <Timer className="h-5 w-5 text-orange-600 mb-2" />
                        <div className="font-medium">Datenpanne Notfall</div>
                        <div className="text-sm text-gray-600">72h Response Plan</div>
                      </div>
                    </Link>
                    <Link to="/branchen/datenschutz-homeoffice" className="block group">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md">
                        <Home className="h-5 w-5 text-blue-600 mb-2" />
                        <div className="font-medium">Homeoffice Pflege</div>
                        <div className="text-sm text-gray-600">Remote-Arbeit DSGVO</div>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Additional Related Links */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Verwandte Compliance-Themen</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Link to="/wissen/branchen/logistics-compliance" className="group">
                        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors">
                          <h4 className="font-medium text-red-600 dark:text-red-400 group-hover:underline">Logistics Compliance</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Supply Chain DSGVO-Compliance</p>
                        </div>
                      </Link>
                      <Link to="/wissen/dsgvo-compliance" className="group">
                        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors">
                          <h4 className="font-medium text-red-600 dark:text-red-400 group-hover:underline">DSGVO Grundlagen</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Basiswissen zur EU-Datenschutzverordnung</p>
                        </div>
                      </Link>
                      <Link to="/services/datenschutzbeauftragter" className="group">
                        <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors">
                          <h4 className="font-medium text-red-600 dark:text-red-400 group-hover:underline">Externer DSB</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Datenschutzbeauftragter für Pflegeeinrichtungen</p>
                        </div>
                      </Link>
                    </div>
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
                <Link to="/wissen/branchen/logistics-compliance" className="group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2">Logistics Compliance</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">DSGVO-konforme Supply Chain und Tracking</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to="/wissen/branchen/datenschutz-arztpraxis" className="group">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2">Datenschutz Arztpraxis</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Patientendatenschutz in der ambulanten Versorgung</p>
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

export default DatenschutzPflege;