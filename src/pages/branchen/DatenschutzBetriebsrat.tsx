import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield,
  Users,
  FileText,
  Building2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Euro,
  Calendar,
  Activity,
  Lock,
  Database,
  Eye,
  UserCheck,
  Clipboard,
  FileCheck,
  Settings,
  Globe,
  Clock,
  Star,
  Target,
  Lightbulb,
  ExternalLink,
  AlertCircle,
  BarChart3,
  PieChart,
  Layers,
  ShieldCheck,
  CheckSquare,
  Square,
  Gavel,
  Scale,
  HandshakeIcon,
  UserPlus,
  MessageSquare,
  Camera,
  Mail,
  Phone,
  Award,
  Zap,
  Heart,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DatenschutzBetriebsrat = () => {
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
    { id: 'rechtsgrundlagen', label: 'Rechtsgrundlagen', icon: Gavel },
    { id: 'datenarten', label: 'Datenarten', icon: Database },
    { id: 'tom', label: 'TOM & Sicherheit', icon: Settings },
    { id: 'prozesse', label: 'Betriebsratsprozesse', icon: Activity },
    { id: 'implementation', label: 'Umsetzung', icon: Target }
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
              {
                name: 'Mitarbeiterliste (anonymisiert)',
                purpose: 'Überblick über betroffene Bereiche',
                dataTypes: 'Abteilung, Position, Beschäftigungsumfang',
                legal: 'BetrVG § 80 Abs. 2'
              },
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
          step3: {
            title: '👥 Mitarbeiterkommunikation',
            description: 'Transparente Information über die Datenverarbeitung',
            features: [
              'Info-Veranstaltung über Datenschutz im Verfahren',
              'Schriftliche Mitteilung über verarbeitete Daten',
              'Ansprechpartner für Datenschutzfragen benennen',
              'Widerspruchsmöglichkeiten aufzeigen (soweit möglich)'
            ]
          }
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
            administrativeWorld: {
              title: 'Stufe 2: Pseudonymisierte Einzelfälle',
              access: 'Detailanalyse besonders schwerer Vorfälle',
              purpose: 'Ursachenforschung bei kritischen Ereignissen',
              data: ['Unfallhergang (anonymisiert)', 'Arbeitsplatzgegebenheiten', 'Sicherheitsausrüstung']
            }
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
    {
      category: 'Personalstammdaten',
      icon: Users,
      description: 'Grundlegende Informationen über Beschäftigte für Betriebsratsarbeit',
      examples: [
        'Name, Vorname, Personalnummer',
        'Abteilung, Position, Einstellungsdatum',
        'Arbeitszeit, Beschäftigungsumfang',
        'Entgeltgruppe (nur bei Mitbestimmung)'
      ],
      rechtsgrundlage: 'BetrVG § 80 Abs. 2, Art. 6 Abs. 1 lit. c DSGVO',
      speicherdauer: 'Dauer der Betriebsratszugehörigkeit + 3 Jahre',
      besonderheiten: 'Zugriff nur soweit für konkrete Betriebsratsaufgaben erforderlich'
    },
    {
      category: 'Vergütungsdaten',
      icon: Euro,
      description: 'Entgeltinformationen für Mitbestimmung bei Vergütungsordnungen',
      examples: [
        'Grundentgelt nach Entgeltgruppen',
        'Zuschläge und variable Vergütungsbestandteile',
        'Durchschnittswerte nach Bereichen/Funktionen',
        'Statistische Auswertungen (anonymisiert)'
      ],
      rechtsgrundlage: 'BetrVG § 87 Abs. 1 Nr. 10, § 95',
      speicherdauer: '10 Jahre (steuerrechtliche Aufbewahrungsfristen)',
      besonderheiten: 'Individuelle Gehaltsdaten nur bei konkretem Mitbestimmungsfall'
    },
    {
      category: 'Arbeitszeit- und Leistungsdaten',
      icon: Clock,
      description: 'Daten zur Arbeitsorganisation und Leistungsbeurteilung',
      examples: [
        'Arbeitszeitmodelle und Schichtpläne',
        'Überstundendokumentation',
        'Urlaubszeiten und Fehlzeiten (aggregiert)',
        'Leistungsbewertungen (bei Mitbestimmung)'
      ],
      rechtsgrundlage: 'BetrVG § 87 Abs. 1 Nr. 2, 3',
      speicherdauer: '2 Jahre nach Ende des Beschäftigungsverhältnisses',
      besonderheiten: 'Detaillierte Leistungsdaten nur bei Mitbestimmungsverfahren'
    },
    {
      category: 'Gesundheits- und Sozialangaben',
      icon: Shield,
      description: 'Besonders schützenswerte Daten für Arbeitsschutz und soziale Angelegenheiten',
      examples: [
        'Schwerbehinderung (nur Status, nicht Art)',
        'Mutterschutz und Elternzeit',
        'Arbeitsunfälle (anonymisiert/statistisch)',
        'Betriebliche Altersvorsorge'
      ],
      rechtsgrundlage: 'BetrVG § 89, § 92a, Art. 9 Abs. 2 lit. b DSGVO',
      speicherdauer: 'Je nach Zweck: 3-30 Jahre',
      besonderheiten: 'Besonders restriktive Verarbeitung, oft nur statistische Auswertungen'
    }
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
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const getCompletionPercentage = () => {
    const totalItems = 20; // Beispiel: Gesamtanzahl der Checklist-Items
    return Math.round((checkedItems.size / totalItems) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400">
                    <HandshakeIcon className="h-4 w-4" />
                    <span className="text-sm font-medium">Betriebsrat & Datenschutz</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Datenschutz für
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2">
                      Betriebsräte
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Rechtssichere Betriebsratsarbeit zwischen BetrVG und DSGVO. 
                    Wir zeigen Ihnen, wie Sie Ihre Mitbestimmungsrechte datenschutzkonform ausüben.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>BetrVG-konforme Datenverarbeitung</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>DSGVO-Compliance in der Betriebsratsarbeit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Sichere IT-Infrastruktur für Betriebsräte</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=betriebsrat">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 group">
                        <Users className="mr-2 h-5 w-5" />
                        Betriebsrat-Beratung buchen
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      BR-Datenschutz Leitfaden
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
                  <Card className="p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Betriebsrat Compliance Center</h3>
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
                    className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-blue-500"
                  >
                    <div className="flex items-center gap-2">
                      <HandshakeIcon className="h-4 w-4 text-blue-500 animate-pulse" />
                      <span className="text-sm font-medium">BetrVG Ready</span>
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
                        ? "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                        : "hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-700 dark:hover:text-blue-400",
                      "border",
                      activeSection === item.id
                        ? "border-blue-200 dark:border-blue-800"
                        : "border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                    )}
                  >
                    <item.icon className={cn(
                      "h-4 w-4",
                      activeSection === item.id && "text-blue-600 dark:text-blue-500"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      activeSection === item.id && "text-blue-700 dark:text-blue-400"
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
                  className="text-3xl font-bold mb-8"
                >
                  Betriebsrat & Datenschutz - Herausforderungen und Lösungen
                </motion.h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Shield className="h-6 w-6 text-blue-600" />
                          Rechtliche Herausforderungen
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Betriebsräte bewegen sich in einem komplexen rechtlichen Spannungsfeld zwischen 
                          Mitbestimmungsrechten aus dem BetrVG und Datenschutzanforderungen der DSGVO.
                        </p>
                        
                        <div className="space-y-3">
                          {[
                            'Zugang zu Personaldaten vs. Datenschutz',
                            'Informationsrechte vs. Datenminimierung',
                            'Vertretung der Belegschaft vs. Privatsphäre',
                            'Transparenz vs. Geschäftsgeheimnisse'
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <AlertTriangle className="h-4 w-4 text-orange-600 flex-shrink-0 mt-1" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Gavel className="h-4 w-4 text-blue-600" />
                            <span className="font-semibold text-blue-800 dark:text-blue-400">
                              Rechtslage
                            </span>
                          </div>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            BetrVG und DSGVO sind gleichrangig - es bedarf einer Abwägung im Einzelfall
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="h-6 w-6 text-green-600" />
                          Praktische Lösungsansätze
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Durch systematische Herangehensweise und klare Prozesse lassen sich 
                          Betriebsratsrechte datenschutzkonform ausüben.
                        </p>
                        
                        <div className="space-y-3">
                          {[
                            'Gestufte Informationsverfahren entwickeln', 
                            'Datenminimierung bei BR-Anfragen beachten',
                            'Sichere IT-Infrastruktur für BR aufbauen',
                            'Schulung aller BR-Mitglieder durchführen'
                          ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200">
                          <div className="flex items-center gap-2 mb-2">
                            <Lightbulb className="h-4 w-4 text-green-600" />
                            <span className="font-semibold text-green-800 dark:text-green-400">
                              Best Practice
                            </span>
                          </div>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Frühe Einbindung des Datenschutzbeauftragten in BR-Verfahren verhindert Konflikte
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Rechtsgrundlagen Section */}
              <section id="rechtsgrundlagen" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Rechtsgrundlagen für Betriebsratsdatenverarbeitung
                </motion.h2>
                  <div className="space-y-8">
                    {rechtsgrundlagen.map((rechtsgrundlage, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="border-l-4 border-blue-500">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <CardTitle className="text-xl pr-4">{rechtsgrundlage.title}</CardTitle>
                              <Badge 
                                variant={rechtsgrundlage.risk === 'Kritisch' ? 'destructive' : rechtsgrundlage.risk === 'Sehr Hoch' ? 'destructive' : 'secondary'}
                                className="flex-shrink-0"
                              >
                                {rechtsgrundlage.risk} Risiko
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {rechtsgrundlage.description}
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h4 className="font-semibold mb-3 flex items-center gap-2">
                                  <Scale className="h-4 w-4 text-blue-600" />
                                  Relevante Bestimmungen
                                </h4>
                                <div className="space-y-2">
                                  {rechtsgrundlage.paragraphs.map((paragraph, i) => (
                                    <div key={i} className="flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                                      <Badge variant="outline" className="text-xs flex-shrink-0">
                                        {paragraph.nr}
                                      </Badge>
                                      <span className="text-sm">{paragraph.content}</span>
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
                                    {rechtsgrundlage.fineExample}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {rechtsgrundlage.realWorldScenario && (
                              <div className="space-y-6">
                                <button
                                  onClick={() => setExpandedSection(expandedSection === `rechtsgrund-${index}` ? null : `rechtsgrund-${index}`)}
                                  className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                                >
                                  <Lightbulb className="h-4 w-4" />
                                  Praxis-Szenario anzeigen
                                  <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                    expandedSection === `rechtsgrund-${index}` && "rotate-180")} />
                                </button>
                                
                                {expandedSection === `rechtsgrund-${index}` && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="mt-4"
                                  >
                                    <div className="space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800">
                                      <div className="text-center">
                                        <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">
                                          {rechtsgrundlage.realWorldScenario.title}
                                        </h3>
                                        <p className="text-sm text-blue-700 dark:text-blue-300">
                                          {rechtsgrundlage.realWorldScenario.context}
                                        </p>
                                      </div>
                                      
                                      <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200">
                                        <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2">
                                          <AlertTriangle className="h-4 w-4" />
                                          Herausforderung
                                        </h4>
                                        <p className="text-sm text-amber-700 dark:text-amber-300">
                                          {rechtsgrundlage.realWorldScenario.challenge}
                                        </p>
                                      </div>
                                      
                                      <div className="space-y-4">
                                        <h4 className="font-semibold text-green-800 dark:text-green-200 flex items-center gap-2">
                                          <CheckCircle2 className="h-4 w-4" />
                                          Lösungsansatz
                                        </h4>
                                        {Object.values(rechtsgrundlage.realWorldScenario.solution).map((step: any, stepIndex) => (
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
                                                    <div className="text-xs text-gray-600 dark:text-gray-400">
                                                      {module.dataTypes}
                                                    </div>
                                                    {module.benefit && (
                                                      <div className="text-xs text-green-600 dark:text-green-400 mt-1 font-medium">
                                                        ✓ {module.benefit}
                                                      </div>
                                                    )}
                                                    {module.legal && (
                                                      <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                                                        {module.legal}
                                                      </div>
                                                    )}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.transparency && (
                                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {step.transparency.map((item: string, itemIndex: number) => (
                                                  <div key={itemIndex} className="flex items-start gap-2 text-sm">
                                                    <CheckCircle2 className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                                                    <span>{item}</span>
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                            {step.features && (
                                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {step.features.map((feature: string, featureIndex: number) => (
                                                  <div key={featureIndex} className="flex items-start gap-2 text-sm">
                                                    <MessageSquare className="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" />
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
                                          Ergebnis & Learnings
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                          {Object.entries(rechtsgrundlage.realWorldScenario.outcome).map(([key, value]: [string, any]) => (
                                            <div key={key} className="text-sm">
                                              <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                              <br />
                                              <span className="text-green-700 dark:text-green-300">{value}</span>
                                            </div>
                                          ))}
                                        </div>
                                        <div className="space-y-2">
                                          <h5 className="font-medium text-green-800 dark:text-green-200">Key Learnings:</h5>
                                          {rechtsgrundlage.realWorldScenario.keyLearnings.map((learning: string, learningIndex: number) => (
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

              {/* Datenarten Section */}
              <section id="datenarten" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Datenarten in der Betriebsratsarbeit
                </motion.h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {datenarten.map((datenart, index) => (
                      <Card key={index} className="p-6">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <datenart.icon className="h-6 w-6 text-blue-600" />
                            {datenart.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-gray-600 dark:text-gray-400 text-sm">
                            {datenart.description}
                          </p>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Typische Datentypen:</h4>
                            <div className="space-y-1">
                              {datenart.examples.map((example, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm">
                                  <Database className="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" />
                                  <span>{example}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-3 pt-3 border-t">
                            <div>
                              <span className="text-sm font-medium">Rechtsgrundlage: </span>
                              <Badge variant="outline" className="text-xs">
                                {datenart.rechtsgrundlage}
                              </Badge>
                            </div>
                            <div>
                              <span className="text-sm font-medium">Speicherdauer: </span>
                              <span className="text-sm text-gray-600">{datenart.speicherdauer}</span>
                            </div>
                            <div className="p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
                              <span className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Besonderheiten: </span>
                              <span className="text-sm text-yellow-700 dark:text-yellow-300">{datenart.besonderheiten}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* TOM Section */}
              <section id="tom" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Technische und Organisatorische Maßnahmen für Betriebsräte
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
                              <h4 className="font-semibold mb-3">Maßnahmen</h4>
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
                              <h4 className="font-semibold mb-3">Anwendungsbereiche</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
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
                                  <div className="grid grid-cols-1 gap-3">
                                    {(tom.practicalImplementation.zones || tom.practicalImplementation.roles || tom.practicalImplementation.layers || []).map((item: any, itemIndex: number) => (
                                      <div key={itemIndex} className="p-3 bg-white dark:bg-gray-800 rounded border">
                                        <div className="font-medium text-gray-900 dark:text-gray-100 text-sm mb-1">
                                          {item.name}
                                        </div>
                                        <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
                                          {item.security || item.permissions || item.protection}
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                          <strong>{item.access ? 'Zugang' : item.restrictions ? 'Einschränkungen' : 'Nutzen'}:</strong> {item.access || item.restrictions || item.benefit}
                                        </div>
                                        <div className="text-xs text-green-600 dark:text-green-400">
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
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Betriebsratsprozesse Section */}
              <section id="prozesse" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Datenschutzkonforme Betriebsratsprozesse
                </motion.h2>
                  <div className="space-y-8">
                    {betriebsratsProzesse.map((prozess, index) => (
                      <Card key={index} className="p-6">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Activity className="h-6 w-6 text-green-600" />
                            {prozess.prozess}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3 text-red-700">Herausforderung</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {prozess.challenge}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-green-700">Lösung</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {prozess.solution}
                              </p>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3 text-blue-700">Rechtsbasis</h4>
                              <Badge variant="outline" className="text-sm">
                                {prozess.implementation.rechtsbasis}
                              </Badge>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Umsetzungsschritte</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {prozess.implementation.schritte.map((schritt, i) => (
                                <div key={i} className="flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                                  <span className="flex items-center justify-center w-6 h-6 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-bold flex-shrink-0 mt-0.5">
                                    {i + 1}
                                  </span>
                                  <span className="text-sm">{schritt}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <button
                              onClick={() => setExpandedSection(expandedSection === `prozess-${index}` ? null : `prozess-${index}`)}
                              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <FileText className="h-4 w-4" />
                              Code-Template anzeigen
                              <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                expandedSection === `prozess-${index}` && "rotate-180")} />
                            </button>
                            
                            {expandedSection === `prozess-${index}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4"
                              >
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre className="text-green-400 text-xs">
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
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Implementation Section */}
              <section id="implementation" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Umsetzungsfahrplan für datenschutzkonforme Betriebsratsarbeit
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
                        Interaktive Betriebsrat-Checkliste
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
                <Card className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
                  <CardContent className="relative p-8 md:p-12 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <HandshakeIcon className="h-16 w-16 mx-auto mb-6 text-white" />
                      </motion.div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold">
                        Rechtssichere Betriebsratsarbeit beginnt hier
                      </h2>
                      <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Vereinen Sie erfolgreich Mitbestimmungsrechte mit Datenschutz-Compliance. 
                        Unsere Experten unterstützen Sie bei der rechtssicheren Gestaltung Ihrer Betriebsratsarbeit.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact?demo=true&industry=betriebsrat">
                          <Button 
                            size="lg" 
                            className="bg-white text-blue-600 hover:bg-gray-100 group shadow-lg"
                          >
                            <Users className="mr-2 h-5 w-5" />
                            Kostenlose Betriebsrat-Beratung
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="bg-transparent text-white border-white hover:bg-white/10"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          Betriebsrat Datenschutz-Guide (PDF)
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        {[
                          { icon: HandshakeIcon, title: 'Betriebsrat-Expertise', subtitle: 'Spezialisiert auf BR-Datenschutz' },
                          { icon: Shield, title: 'BetrVG + DSGVO konform', subtitle: 'Rechtssichere Prozesse' },
                          { icon: Award, title: 'TÜV-zertifizierte Beratung', subtitle: 'Höchste Qualitätsstandards' }
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
                    <ExternalLink className="h-5 w-5 text-blue-600" />
                    Weiterführende Ressourcen für Betriebsräte
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link to="/wissen/arbeitsrecht/betrvg-dsgvo" className="block group">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md">
                        <Gavel className="h-5 w-5 text-blue-600 mb-2" />
                        <div className="font-medium">BetrVG & DSGVO</div>
                        <div className="text-sm text-gray-600">Rechtliche Grundlagen</div>
                      </div>
                    </Link>
                    <Link to="/wissen/compliance/br-schulungen" className="block group">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-md">
                        <Users className="h-5 w-5 text-green-600 mb-2" />
                        <div className="font-medium">BR-Schulungen</div>
                        <div className="text-sm text-gray-600">Datenschutz für BR-Mitglieder</div>
                      </div>
                    </Link>
                    <Link to="/wissen/it-sicherheit/br-infrastruktur" className="block group">
                      <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group-hover:shadow-md">
                        <Lock className="h-5 w-5 text-purple-600 mb-2" />
                        <div className="font-medium">IT-Sicherheit</div>
                        <div className="text-sm text-gray-600">Sichere BR-IT-Infrastruktur</div>
                      </div>
                    </Link>
                    <Link to="/branchen/betriebsrat" className="block group">
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md">
                        <HandshakeIcon className="h-5 w-5 text-orange-600 mb-2" />
                        <div className="font-medium">BR Solutions</div>
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

export default DatenschutzBetriebsrat;