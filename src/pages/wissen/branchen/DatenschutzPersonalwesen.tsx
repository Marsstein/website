import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
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
  Clock,
  Target,
  Lightbulb,
  ExternalLink,
  AlertCircle,
  BarChart3,
  Layers,
  ShieldCheck,
  Gavel,
  Scale,
  UserPlus,
  Mail,
  Phone,
  Award,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Trash2,
  Search,
  GraduationCap,
  Square,
  CheckSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DatenschutzPersonalwesen = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>('overview');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const navigationItems = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'rechtsgrundlagen', label: 'Rechtsgrundlagen', icon: Gavel },
    { id: 'bewerbermanagement', label: 'Bewerbermanagement', icon: UserPlus },
    { id: 'personalakte', label: 'Personalakte', icon: FileText },
    { id: 'arbeitszeiterfassung', label: 'Arbeitszeiterfassung', icon: Clock },
    { id: 'monitoring', label: 'Mitarbeiter-Monitoring', icon: Eye },
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
    { label: 'BDSG § 26 Konformität', value: 98, color: 'text-blue-600', trend: '+5%' },
    { label: 'Datensicherheit', value: 94, color: 'text-green-600', trend: '+12%' },
    { label: 'Prozess-Compliance', value: 92, color: 'text-purple-600', trend: '+7%' },
    { label: 'HR-Schulungsstand', value: 89, color: 'text-orange-600', trend: '+15%' },
    { label: 'Audit Readiness', value: 97, color: 'text-pink-600', trend: '+3%' }
  ];

  const rechtsgrundlagen = [
    {
      title: 'BDSG § 26 - Beschäftigtendatenschutz',
      description: 'Zentrale Rechtsgrundlage für die Verarbeitung personenbezogener Daten von Beschäftigten in Deutschland.',
      paragraphs: [
        { nr: '§ 26 Abs. 1', content: 'Datenverarbeitung für Beschäftigungsverhältnis' },
        { nr: '§ 26 Abs. 2', content: 'Einwilligung im Beschäftigungskontext' },
        { nr: '§ 26 Abs. 3', content: 'Verarbeitung besonderer Kategorien (Gesundheit)' },
        { nr: '§ 26 Abs. 4', content: 'Kollektivvereinbarungen' }
      ],
      risk: 'Kritisch',
      fineExample: 'Unzulässige Verarbeitung von Beschäftigtendaten: Bis zu 20 Mio. € oder 4% Jahresumsatz',
      keyPoints: [
        'Erforderlichkeit für Begründung, Durchführung oder Beendigung',
        'Freiwilligkeit der Einwilligung muss gewährleistet sein',
        'Besondere Schutzbedürftigkeit bei Gesundheitsdaten',
        'Betriebsvereinbarungen als Rechtsgrundlage möglich'
      ]
    },
    {
      title: 'DSGVO Art. 88 - Öffnungsklausel',
      description: 'Ermöglicht nationale Regelungen zum Beschäftigtendatenschutz und wird durch § 26 BDSG konkretisiert.',
      paragraphs: [
        { nr: 'Art. 6 Abs. 1 lit. b', content: 'Verarbeitung zur Vertragserfüllung' },
        { nr: 'Art. 6 Abs. 1 lit. f', content: 'Berechtigte Interessen' },
        { nr: 'Art. 9 Abs. 2 lit. b', content: 'Besondere Kategorien im Arbeitsrecht' },
        { nr: 'Art. 88', content: 'Datenverarbeitung im Beschäftigungskontext' }
      ],
      risk: 'Hoch',
      keyPoints: [
        'Grundsätze der Datenverarbeitung gelten uneingeschränkt',
        'Zweckbindung und Datenminimierung beachten',
        'Transparenz gegenüber Beschäftigten sicherstellen',
        'Rechte der Betroffenen wahren (Auskunft, Löschung, etc.)'
      ]
    },
    {
      title: 'BetrVG - Betriebsverfassungsgesetz',
      description: 'Regelt Mitbestimmungsrechte des Betriebsrats bei personellen Maßnahmen und Einführung technischer Systeme.',
      paragraphs: [
        { nr: '§ 87 Abs. 1 Nr. 6', content: 'Mitbestimmung bei technischen Überwachungseinrichtungen' },
        { nr: '§ 94', content: 'Mitbestimmung bei Personalfragebogen' },
        { nr: '§ 95', content: 'Mitbestimmung bei Auswahlrichtlinien' },
        { nr: '§ 99', content: 'Mitbestimmung bei personellen Einzelmaßnahmen' }
      ],
      risk: 'Hoch',
      keyPoints: [
        'Betriebsvereinbarungen vor Einführung neuer HR-Systeme',
        'Mitbestimmung bei Zeiterfassung und Leistungskontrolle',
        'Beteiligung bei Personalfragebogen erforderlich',
        'Auskunftsrechte des Betriebsrats berücksichtigen'
      ]
    }
  ];

  const bewerbermanagementProzess = {
    title: '🎯 Bewerbermanagement DSGVO-konform',
    phases: [
      {
        phase: 'Stellenausschreibung',
        icon: FileText,
        steps: [
          {
            title: 'Datenschutzerklärung',
            description: 'Transparente Information über Datenverarbeitung',
            checklist: [
              'Zweck der Datenerhebung benennen',
              'Rechtsgrundlage angeben (§ 26 BDSG)',
              'Speicherdauer kommunizieren',
              'Betroffenenrechte aufzeigen',
              'Verantwortlichen und DSB nennen'
            ],
            best_practice: 'Datenschutzerklärung direkt in Stellenanzeige verlinken'
          },
          {
            title: 'Datenminimierung',
            description: 'Nur erforderliche Daten abfragen',
            allowed: [
              'Name, Kontaktdaten',
              'Qualifikationen, Zeugnisse',
              'Berufserfahrung',
              'Gehaltsvorstellung (optional)',
              'Frühester Eintrittstermin'
            ],
            forbidden: [
              'Familienstand, Kinderwunsch',
              'Gesundheitszustand',
              'Politische/religiöse Ansichten',
              'Gewerkschaftszugehörigkeit',
              'Sozialversicherungsnummer'
            ]
          }
        ]
      },
      {
        phase: 'Bewerbungseingang & Sichtung',
        icon: Search,
        steps: [
          {
            title: 'Sichere Eingangskanäle',
            description: 'Verschlüsselte Übertragung gewährleisten',
            solutions: [
              'E-Mail: Verschlüsselung (TLS/PGP) anbieten',
              'Bewerbungsportal: HTTPS und Zugangsschutz',
              'Post: Sichere Aufbewahrung physischer Unterlagen',
              'Cloud-Upload: Verschlüsselte Speicherung'
            ]
          },
          {
            title: 'Zugriffskontrolle',
            description: 'Need-to-know-Prinzip durchsetzen',
            measures: [
              'Zugriff nur für befugte HR-Mitarbeiter',
              'Berechtigungskonzept dokumentieren',
              'Zugriffsprotokolle führen',
              'Vier-Augen-Prinzip bei sensiblen Positionen'
            ]
          }
        ]
      },
      {
        phase: 'Auswahlverfahren',
        icon: Users,
        steps: [
          {
            title: 'Interviews & Assessments',
            description: 'Datenschutz während des Verfahrens',
            guidelines: [
              'Nur zulässige Fragen stellen (AGG beachten)',
              'Notizen verschlüsselt speichern',
              'Video-Interviews: Einwilligung einholen',
              'Tests: Anonymisierung wo möglich'
            ]
          },
          {
            title: 'Referenzen einholen',
            description: 'Einwilligung erforderlich',
            process: [
              'Schriftliche Einwilligung des Bewerbers',
              'Nur relevante Informationen anfragen',
              'Zweck der Anfrage kommunizieren',
              'Referenzgeber über Datenschutz informieren'
            ]
          }
        ]
      },
      {
        phase: 'Absage & Löschung',
        icon: Trash2,
        steps: [
          {
            title: 'Absage-Management',
            description: 'Rechtssichere Absage erteilen',
            elements: [
              'Wertschätzende Kommunikation',
              'Information über Löschung der Daten',
              'Frist für Aufbewahrung nennen (6 Monate AGG)',
              'Option: Aufnahme in Talentpool (mit Einwilligung)'
            ]
          },
          {
            title: 'Löschfristen',
            description: 'Automatisierte Löschung einrichten',
            rules: [
              'Abgelehnte Bewerber: 6 Monate nach Absage',
              'Initiativbewerbungen: 6 Monate nach Eingang',
              'Talentpool: Mit Einwilligung, max. 2 Jahre',
              'Eingestellte: Daten in Personalakte überführen'
            ],
            automation: 'Lösch-Workflow im ATS (Applicant Tracking System) implementieren'
          }
        ]
      }
    ]
  };

  const personalakteProzess = {
    title: '📁 Digitale & physische Personalakte',
    sections: [
      {
        type: 'Pflichtinhalte',
        icon: FileCheck,
        items: [
          {
            category: 'Stammdaten',
            items: ['Name, Geburtsdatum', 'Kontaktdaten', 'Sozialversicherungsnummer', 'Bankverbindung', 'Steuer-ID'],
            retention: 'Bis Ende des Beschäftigungsverhältnisses + gesetzliche Aufbewahrungsfristen'
          },
          {
            category: 'Vertragsdokumente',
            items: ['Arbeitsvertrag', 'Änderungsvereinbarungen', 'Zusatzvereinbarungen', 'Befristungsdokumente'],
            retention: '10 Jahre nach Vertragsende (§ 257 HGB)'
          },
          {
            category: 'Abrechnungsunterlagen',
            items: ['Gehaltsabrechnungen', 'Lohnsteuerbescheinigungen', 'Sozialversicherungsnachweise'],
            retention: '10 Jahre (§ 147 AO)'
          },
          {
            category: 'Arbeitszeitdokumentation',
            items: ['Stundennachweise', 'Urlaubsanträge', 'Krankheitszeiten', 'Überstundenkonten'],
            retention: '2 Jahre nach Ende des Beschäftigungsjahres'
          }
        ]
      },
      {
        type: 'Optionale Inhalte (mit Einwilligung)',
        icon: UserCheck,
        items: [
          {
            category: 'Leistungsbeurteilungen',
            items: ['Zielvereinbarungen', 'Feedback-Gespräche', 'Performance Reviews'],
            note: 'Einwilligung oder Betriebsvereinbarung erforderlich',
            retention: 'Während des Arbeitsverhältnisses'
          },
          {
            category: 'Qualifikationen',
            items: ['Weiterbildungszertifikate', 'Fort-bildungsnachweise', 'Schulungsteilnahmen'],
            note: 'Erforderlich für Qualifikationsnachweis',
            retention: 'Während des Arbeitsverhältnisses + 3 Jahre'
          },
          {
            category: 'Gesundheitsdaten',
            items: ['Arbeitsunfähigkeits-bescheinigungen', 'Betriebsärztliche Untersuchungen'],
            note: 'Art. 9 DSGVO - besondere Kategorie!',
            retention: 'Nur mit Einwilligung oder gesetzlicher Verpflichtung'
          }
        ]
      }
    ],
    technicalSafeguards: [
      {
        measure: 'Verschlüsselung',
        description: 'Ende-zu-Ende-Verschlüsselung für digitale Akten',
        level: 'Kritisch'
      },
      {
        measure: 'Zugriffskontrolle',
        description: 'Rollenbasiertes Berechtigungskonzept (RBAC)',
        level: 'Kritisch'
      },
      {
        measure: 'Protokollierung',
        description: 'Lückenlose Dokumentation aller Zugriffe',
        level: 'Hoch'
      },
      {
        measure: 'Backup & Recovery',
        description: 'Regelmäßige verschlüsselte Backups',
        level: 'Hoch'
      },
      {
        measure: 'Physische Sicherheit',
        description: 'Abgeschlossene Räume für Papierakten',
        level: 'Mittel'
      }
    ]
  };

  const arbeitszeiterfassungRegeln = {
    title: '⏱️ Arbeitszeiterfassung nach EuGH-Urteil',
    background: 'Seit dem EuGH-Urteil C-55/18 müssen Arbeitgeber in der EU ein System einrichten, mit dem die Arbeitszeit erfasst wird.',
    requirements: [
      {
        aspect: 'Rechtsgrundlage',
        icon: Gavel,
        rules: [
          'BDSG § 26 Abs. 1 - Erforderlichkeit für Arbeitsverhältnis',
          'ArbZG § 16 Abs. 2 - Dokumentation von Arbeitszeiten',
          'BetrVG § 87 Abs. 1 Nr. 6 - Mitbestimmung des Betriebsrats'
        ],
        complianceLevel: 'Pflicht'
      },
      {
        aspect: 'Erlaubte Datenerhebung',
        icon: CheckCircle2,
        allowed: [
          'Arbeitsbeginn und -ende',
          'Pausenzeiten',
          'Überstunden',
          'Urlaubs- und Krankheitstage',
          'Abwesenheitszeiten'
        ],
        purpose: 'Arbeitsschutz, Vergütung, Personalplanung'
      },
      {
        aspect: 'Unzulässige Leistungskontrolle',
        icon: AlertTriangle,
        forbidden: [
          'Permanente Überwachung am Arbeitsplatz',
          'Detaillierte Produktivitätsmessung ohne Einwilligung',
          'Verhaltenskontrolle außerhalb der Arbeitszeit',
          'GPS-Tracking (außer bei berechtigtem Interesse)'
        ],
        risk: 'Bußgeld + Schadensersatz möglich'
      }
    ],
    systems: [
      {
        type: 'Stempeluhr/Terminal',
        pros: ['Einfach', 'Bewährt', 'Manipulationssicher'],
        cons: ['Keine Flexibilität', 'Kein Homeoffice', 'Wartungsaufwand'],
        compliance: 'Hoch',
        datenschutz: ['Zugriffskontrolle', 'Speicherbegrenzung', 'Löschkonzept']
      },
      {
        type: 'Software/App',
        pros: ['Flexibel', 'Homeoffice-fähig', 'Auswertungen', 'Integration'],
        cons: ['Überwachungsrisiko', 'Technische Komplexität'],
        compliance: 'Mittel',
        datenschutz: ['Betriebsvereinbarung erforderlich', 'DSGVO-Konformität prüfen', 'Keine Verhaltenskontrolle', 'Transparenz für Mitarbeiter']
      },
      {
        type: 'Excel/Vertrauensarbeitszeit',
        pros: ['Kostengünstig', 'Vertrauensbasis'],
        cons: ['Nicht EuGH-konform', 'Fehleranfällig', 'Nicht prüfbar'],
        compliance: 'Niedrig',
        datenschutz: ['Nur Übergangsweise', 'Nicht empfohlen für Unternehmen >10 MA']
      }
    ]
  };

  const monitoringRichtlinien = {
    title: '👁️ Mitarbeiter-Monitoring: Grenzen & Regeln',
    scenarios: [
      {
        type: 'E-Mail-Überwachung',
        icon: Mail,
        allowed: {
          title: 'Zulässig mit Einwilligung/Betriebsvereinbarung',
          cases: [
            'Stichprobenartige Kontrolle der geschäftlichen E-Mails',
            'Virenscans und Sicherheitschecks',
            'Bearbeitung von Abwesenheitsmails (mit Vertretungsregelung)',
            'Aufdeckung von Straftaten (mit konkretem Verdacht)'
          ]
        },
        forbidden: {
          title: 'Unzulässig ohne Einwilligung',
          cases: [
            'Permanente Überwachung aller E-Mails',
            'Lesen privater E-Mails (wenn Privatnutzung erlaubt)',
            'Heimliche Überwachung ohne Verdacht',
            'Speicherung ohne Zweck'
          ]
        },
        best_practice: 'Klare Regelung in Betriebsvereinbarung: Geschäftlich vs. privat trennen, Privatnutzung regeln, Kontrollmaßnahmen definieren'
      },
      {
        type: 'Telefon-Überwachung',
        icon: Phone,
        allowed: {
          title: 'Zulässig unter Bedingungen',
          cases: [
            'Verbindungsdaten für Abrechnung (ohne Inhalt)',
            'Qualitätssicherung im Callcenter (mit Einwilligung)',
            'Stichproben bei geschäftlichen Gesprächen',
            'Aufzeichnung zur Dokumentation (mit Information)'
          ]
        },
        forbidden: {
          title: 'Streng unzulässig',
          cases: [
            'Abhören ohne Wissen des Mitarbeiters',
            'Aufzeichnung privater Gespräche',
            'Dauerhafte Überwachung aller Telefonate',
            'Auswertung zur Leistungskontrolle (ohne Rechtsgrundlage)'
          ]
        },
        best_practice: 'Mitarbeiter über Aufzeichnungen informieren, Einwilligung einholen, Privat-Modus anbieten'
      },
      {
        type: 'Videoüberwachung am Arbeitsplatz',
        icon: Eye,
        allowed: {
          title: 'Nur in Ausnahmefällen',
          cases: [
            'Schutz vor Diebstahl in Verkaufsräumen',
            'Sicherheit in Produktionsbereichen',
            'Zutrittskontrolle',
            'Objektschutz (nicht Verhaltenskontrolle)'
          ]
        },
        forbidden: {
          title: 'Grundsätzlich unzulässig',
          cases: [
            'Überwachung der Arbeitsplätze zur Leistungskontrolle',
            'Heimliche Kameraüberwachung',
            'Pausenräume, Sanitäranlagen',
            'Dauerüberwachung ohne berechtigtes Interesse'
          ]
        },
        requirements: [
          'Betriebsvereinbarung erforderlich (§ 87 Abs. 1 Nr. 6 BetrVG)',
          'Abwägung Arbeitgeberinteressen vs. Persönlichkeitsrechte',
          'Transparenz: Kennzeichnung der Kameras',
          'Speicherung max. 72 Stunden (ohne konkreten Anlass)',
          'Zugriff nur für befugte Personen'
        ]
      },
      {
        type: 'Computerüberwachung & Keylogging',
        icon: AlertCircle,
        allowed: {
          title: 'Stark eingeschränkt zulässig',
          cases: [
            'IT-Sicherheitsmaßnahmen (Firewall, Antivirussoftware)',
            'Protokollierung von Systemzugriffen',
            'Auswertung bei konkretem Verdacht einer Straftat'
          ]
        },
        forbidden: {
          title: 'Hochriskant / Unzulässig',
          cases: [
            'Keylogging zur Leistungskontrolle',
            'Screensharing ohne Wissen',
            'Auswertung von Tastaturanschlägen',
            'Permanent Aktivitätstracking (Mausbewegungen, Klicks)'
          ]
        },
        legal_risk: 'Sehr hoch - Persönlichkeitsrechtsverletzung, Bußgelder bis 300.000 €, strafrechtliche Konsequenzen möglich'
      }
    ],
    fundamentalPrinciples: [
      {
        principle: 'Erforderlichkeit',
        description: 'Überwachung nur, wenn mildere Mittel nicht ausreichen',
        example: 'Statt E-Mail-Überwachung: Klare Nutzungsrichtlinien + Schulungen'
      },
      {
        principle: 'Verhältnismäßigkeit',
        description: 'Arbeitgeberinteresse muss Eingriff rechtfertigen',
        example: 'Videoüberwachung im Kassenbereich: Ja. Im Büro: Nein.'
      },
      {
        principle: 'Transparenz',
        description: 'Mitarbeiter über Überwachungsmaßnahmen informieren',
        example: 'Betriebsvereinbarung + Info-Veranstaltung + Hinweisschilder'
      },
      {
        principle: 'Zweckbindung',
        description: 'Daten nur für den festgelegten Zweck verwenden',
        example: 'Zeiterfassungsdaten nicht für Leistungsbeurteilung nutzen'
      }
    ]
  };

  const implementationRoadmap = [
    {
      phase: 1,
      title: 'Bestandsaufnahme & Gap-Analyse',
      duration: '2-4 Wochen',
      icon: Search,
      tasks: [
        'Ist-Zustand der HR-Prozesse dokumentieren',
        'Datenflüsse im Personalwesen kartieren',
        'Verarbeitungsverzeichnis für HR erstellen',
        'Bestehende Systeme auf DSGVO prüfen',
        'Rechtliche Grundlagen identifizieren (§ 26 BDSG, BetrVG)',
        'Schulungsbedarf ermitteln'
      ],
      deliverables: ['Gap-Analyse Report', 'Verarbeitungsverzeichnis HR', 'Compliance-Roadmap']
    },
    {
      phase: 2,
      title: 'Prozess-Optimierung & Dokumentation',
      duration: '4-6 Wochen',
      icon: FileText,
      tasks: [
        'Bewerbermanagement-Prozess überarbeiten',
        'Personalakten-Struktur definieren (digital/physisch)',
        'Löschkonzept für Bewerberdaten entwickeln',
        'Zugriffsk onzept & Berechtigungen festlegen',
        'Datenschutzrichtlinien für HR erstellen',
        'Einwilligungsvorlagen entwickeln'
      ],
      deliverables: ['HR-Datenschutzrichtlinie', 'Prozessdokumentation', 'Vorlagensammlung']
    },
    {
      phase: 3,
      title: 'Betriebsvereinbarungen & Mitbestimmung',
      duration: '3-6 Wochen',
      icon: Users,
      tasks: [
        'Betriebsrat in Planung einbeziehen',
        'Betriebsvereinbarung zu Zeiterfassung ausarbeiten',
        'Monitoring-Richtlinien mit BR abstimmen',
        'Einführung neuer HR-Software mit BR klären',
        'Schulungskonzept für Betriebsrat',
        'Information der Belegschaft vorbereiten'
      ],
      deliverables: ['Betriebsvereinbarungen', 'Mitarbeiter-Information', 'Schulungsunterlagen'],
      critical: 'Ohne Betriebsrat-Zustimmung können viele Maßnahmen nicht umgesetzt werden!'
    },
    {
      phase: 4,
      title: 'Technische Umsetzung & TOM',
      duration: '6-8 Wochen',
      icon: Settings,
      tasks: [
        'HR-Software auf DSGVO-Konformität prüfen',
        'Verschlüsselung für Personalakten implementieren',
        'Zugriffskontrollsystem einrichten',
        'Automatisierte Löschfristen konfigurieren',
        'Backup-Strategie für HR-Daten',
        'Protokollierung aller Zugriffe aktivieren'
      ],
      deliverables: ['TOM-Dokumentation', 'Konfigurierte Systeme', 'IT-Sicherheitskonzept']
    },
    {
      phase: 5,
      title: 'Schulung & Change Management',
      duration: '2-3 Wochen',
      icon: GraduationCap,
      tasks: [
        'HR-Abteilung zu DSGVO & BDSG schulen',
        'Führungskräfte sensibilisieren',
        'Recruiting-Team zu Bewerberdatenschutz trainieren',
        'Mitarbeiter über neue Prozesse informieren',
        'FAQ & Helpdesk einrichten',
        'Datenschutz-Champions im HR benennen'
      ],
      deliverables: ['Schulungsnachweise', 'HR-Datenschutz-Handbuch', 'FAQ-Katalog']
    },
    {
      phase: 6,
      title: 'Go-Live & Monitoring',
      duration: 'Laufend',
      icon: Activity,
      tasks: [
        'Neue Prozesse live schalten',
        'Kontinuierliche Überwachung der Compliance',
        'Regelmäßige Audits durchführen',
        'Incident-Response-Prozess etablieren',
        'Feedback-Schleifen einrichten',
        'Jährliche Review & Update der Dokumentation'
      ],
      deliverables: ['Audit-Reports', 'Compliance-Dashboard', 'Continuous Improvement']
    }
  ];

  const checklistItems = [
    {
      category: 'Bewerbermanagement',
      items: [
        { id: 'bew-1', text: 'Datenschutzerklärung in Stellenanzeigen integriert', priority: 'high' },
        { id: 'bew-2', text: 'Nur zulässige Daten im Bewerbungsformular abgefragt', priority: 'high' },
        { id: 'bew-3', text: 'Verschlüsselte Übertragung für Bewerbungen (HTTPS/TLS)', priority: 'high' },
        { id: 'bew-4', text: 'Zugriffskontrolle auf Bewerberdaten implementiert', priority: 'high' },
        { id: 'bew-5', text: 'Automatische Löschung nach 6 Monaten eingerichtet', priority: 'medium' },
        { id: 'bew-6', text: 'Talentpool mit Einwilligung betrieben', priority: 'low' }
      ]
    },
    {
      category: 'Personalakte',
      items: [
        { id: 'pa-1', text: 'Personalakten verschlüsselt gespeichert', priority: 'high' },
        { id: 'pa-2', text: 'Rollenbasierte Zugriffskontrolle (RBAC) umgesetzt', priority: 'high' },
        { id: 'pa-3', text: 'Trennung von Stamm-, Abrechnungs- und Leistungsdaten', priority: 'medium' },
        { id: 'pa-4', text: 'Regelmäßige Backups mit Verschlüsselung', priority: 'high' },
        { id: 'pa-5', text: 'Aufbewahrungsfristen definiert und eingehalten', priority: 'high' },
        { id: 'pa-6', text: 'Physische Akten in abgeschlossenen Räumen', priority: 'medium' }
      ]
    },
    {
      category: 'Arbeitszeiterfassung',
      items: [
        { id: 'az-1', text: 'Zeiterfassungssystem entspricht EuGH-Urteil', priority: 'high' },
        { id: 'az-2', text: 'Betriebsvereinbarung zur Zeiterfassung geschlossen', priority: 'high' },
        { id: 'az-3', text: 'Keine Verhaltenskontrolle durch Zeiterfassung', priority: 'high' },
        { id: 'az-4', text: 'Zweckbindung dokumentiert (nur Zeiterfassung, nicht Leistung)', priority: 'high' },
        { id: 'az-5', text: 'Transparenz für Mitarbeiter gewährleistet', priority: 'medium' }
      ]
    },
    {
      category: 'Mitarbeiter-Monitoring',
      items: [
        { id: 'mon-1', text: 'E-Mail-Überwachung nur mit Betriebsvereinbarung', priority: 'high' },
        { id: 'mon-2', text: 'Videoüberwachung nur in zulässigen Bereichen', priority: 'high' },
        { id: 'mon-3', text: 'Keine heimliche Überwachung', priority: 'high' },
        { id: 'mon-4', text: 'Mitarbeiter über Monitoring-Maßnahmen informiert', priority: 'high' },
        { id: 'mon-5', text: 'Protokollierung aller Zugriffe auf Monitoring-Daten', priority: 'medium' }
      ]
    }
  ];

  const relatedArticles = [
    {
      title: 'DSGVO vs BDSG: § 26 Beschäftigtendaten im Detail',
      description: 'Umfassender Leitfaden zum Zusammenspiel von DSGVO und BDSG bei Mitarbeiterdaten',
      link: '/wissen/dsgvo-vs-bdsg',
      icon: Scale
    },
    {
      title: 'Datenschutz Betriebsrat: Mitbestimmung & Compliance',
      description: 'Wie Betriebsräte ihre Aufgaben datenschutzkonform wahrnehmen',
      link: '/wissen/branchen/datenschutz-betriebsrat',
      icon: Users
    },
    {
      title: 'TOM-Maßnahmen: Technisch-organisatorischer Schutz',
      description: 'Praktischer Leitfaden zu TOMs nach Art. 32 DSGVO für HR-Systeme',
      link: '/wissen/leitfaden/tom-massnahmen',
      icon: ShieldCheck
    },
    {
      title: 'Verarbeitungsverzeichnis erstellen',
      description: 'Dokumentationspflicht nach Art. 30 DSGVO für Personalabteilungen',
      link: '/wissen/leitfaden/verarbeitungsverzeichnis',
      icon: FileText
    }
  ];

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const calculateProgress = () => {
    const totalItems = checklistItems.reduce((acc, cat) => acc + cat.items.length, 0);
    return (checkedItems.size / totalItems) * 100;
  };

  return (
    <>
      <Header />

      <Helmet>
        <title>Datenschutz im Personalwesen: DSGVO & BDSG Leitfaden 2025</title>
        <meta name="description" content="Datenschutz im Personalwesen umsetzen: Bewerbermanagement, Personalakte, Zeiterfassung & Mitarbeiter-Monitoring nach DSGVO & § 26 BDSG. Praxisleitfaden für HR." />
        <meta name="keywords" content="datenschutz personalwesen, hr datenschutz, § 26 bdsg, bewerberdaten, personalakte dsgvo, arbeitszeiterfassung dsgvo, mitarbeiter monitoring" />
        <link rel="canonical" href="https://marsstein.ai/wissen/branchen/datenschutz-personalwesen" />

        <meta property="og:title" content="Datenschutz im Personalwesen: DSGVO & BDSG Leitfaden" />
        <meta property="og:description" content="Umfassender Praxisleitfaden für HR: Bewerbermanagement, Personalakte, Zeiterfassung & Monitoring DSGVO-konform gestalten." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://marsstein.ai/wissen/branchen/datenschutz-personalwesen" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Datenschutz im Personalwesen: DSGVO & BDSG Leitfaden",
            "description": "Umfassender Leitfaden für Datenschutz in der Personalabteilung: Bewerbermanagement, Personalakte, Arbeitszeiterfassung und Mitarbeiter-Monitoring.",
            "author": {
              "@type": "Organization",
              "name": "Marsstein"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Marsstein",
              "logo": {
                "@type": "ImageObject",
                "url": "https://marsstein.ai/logo.png"
              }
            },
            "datePublished": "2025-01-15",
            "dateModified": "2025-01-15"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <motion.div
          className="absolute inset-0"
          style={{ y, opacity }}
        >
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30 px-4 py-2">
              <Briefcase className="h-4 w-4 mr-2 inline" />
              HR & Personalwesen
            </Badge>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white">
              Datenschutz im Personalwesen
            </h1>

            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Umfassender Leitfaden für DSGVO- und BDSG-konforme HR-Prozesse: Bewerbermanagement, Personalakte, Zeiterfassung & Mitarbeiter-Monitoring
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm mb-12">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>§ 26 BDSG Beschäftigtendaten</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Bewerberdatenschutz</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>EuGH-Zeiterfassung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>Monitoring-Grenzen</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <a href="#implementation">
                  Umsetzung starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                <a href="#rechtsgrundlagen">
                  Rechtsgrundlagen
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto py-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all",
                    activeSection === item.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section id="overview" className="mb-20 scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Datenschutz im HR: Herausforderungen & Lösungen
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl">
              Die Personalabteilung verarbeitet hochsensible Daten von Bewerbern und Beschäftigten. DSGVO und BDSG stellen hohe Anforderungen an Datenschutz und Compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {complianceStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">{stat.label}</span>
                      <Badge variant="outline" className="text-xs">
                        {stat.trend}
                      </Badge>
                    </div>
                    <div className="flex items-end gap-4">
                      <span className={`text-3xl font-bold ${stat.color}`}>{stat.value}%</span>
                    </div>
                    <Progress value={stat.value} className="mt-3" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 p-6">
            <div className="flex items-start gap-4">
              <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Zentrale Herausforderung: § 26 BDSG</h3>
                <p className="text-slate-700 mb-4">
                  Der <strong>§ 26 BDSG (Beschäftigtendatenschutz)</strong> ist die zentrale Rechtsgrundlage für die Verarbeitung von Mitarbeiterdaten. Er konkretisiert die DSGVO für das deutsche Arbeitsrecht und regelt:
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Erforderlichkeit:</strong> Welche Daten dürfen für welche Zwecke verarbeitet werden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Einwilligung:</strong> Wann ist eine freiwillige Einwilligung überhaupt möglich</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Gesundheitsdaten:</strong> Besondere Schutzregeln für sensible Kategorien</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Betriebsvereinbarungen:</strong> Kollektivvereinbarungen als Rechtsgrundlage</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link to="/wissen/dsgvo-vs-bdsg" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                    Mehr zu DSGVO vs BDSG <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Rechtsgrundlagen Section */}
        <section id="rechtsgrundlagen" className="mb-20 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Rechtsgrundlagen für HR-Datenschutz
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Das Zusammenspiel von DSGVO, BDSG und BetrVG im Personalwesen
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8">
            {rechtsgrundlagen.map((regel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl mb-2">{regel.title}</CardTitle>
                        <p className="text-slate-600">{regel.description}</p>
                      </div>
                      <Badge variant="destructive" className="ml-4">
                        {regel.risk}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Gavel className="h-5 w-5 text-blue-600" />
                          Relevante Paragraphen
                        </h4>
                        <div className="space-y-2">
                          {regel.paragraphs.map((para, idx) => (
                            <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                              <Badge variant="outline" className="text-xs">{para.nr}</Badge>
                              <span className="text-sm text-slate-700">{para.content}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-yellow-600" />
                          Wichtige Punkte
                        </h4>
                        <ul className="space-y-2">
                          {regel.keyPoints?.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {regel.fineExample && (
                      <div className="bg-red-50 border-l-4 border-l-red-600 p-4 rounded-r-lg">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h5 className="font-semibold text-slate-900 mb-1">Bußgeld-Risiko</h5>
                            <p className="text-sm text-slate-700">{regel.fineExample}</p>
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

        {/* Bewerbermanagement Section */}
        <section id="bewerbermanagement" className="mb-20 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {bewerbermanagementProzess.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Von der Stellenausschreibung bis zur Löschung: Rechtssichere Verarbeitung von Bewerberdaten
            </p>
          </div>

          <div className="space-y-8">
            {bewerbermanagementProzess.phases.map((phase, phaseIdx) => {
              const PhaseIcon = phase.icon;
              return (
                <Card key={phaseIdx} className="overflow-hidden border-2 hover:border-blue-300 transition-all">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <PhaseIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <Badge className="mb-2">Phase {phaseIdx + 1}</Badge>
                        <h3 className="text-2xl font-bold text-slate-900">{phase.phase}</h3>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {phase.steps.map((step, stepIdx) => (
                        <div key={stepIdx} className="border-l-4 border-l-blue-600 pl-6 py-2">
                          <h4 className="font-bold text-lg text-slate-900 mb-2">{step.title}</h4>
                          <p className="text-slate-600 mb-4">{step.description}</p>

                          {step.checklist && (
                            <div className="bg-slate-50 rounded-lg p-4">
                              <p className="font-semibold text-slate-900 mb-2">Checkliste:</p>
                              <ul className="space-y-1">
                                {step.checklist.map((item, idx) => (
                                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                    <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                              {step.best_practice && (
                                <div className="mt-3 pt-3 border-t border-slate-200">
                                  <p className="text-xs text-slate-600">
                                    <strong className="text-blue-600">Best Practice:</strong> {step.best_practice}
                                  </p>
                                </div>
                              )}
                            </div>
                          )}

                          {step.allowed && step.forbidden && (
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                                  <CheckCircle2 className="h-5 w-5" />
                                  Zulässig
                                </h5>
                                <ul className="space-y-1">
                                  {step.allowed.map((item, idx) => (
                                    <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                                      <span className="text-green-600">✓</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <h5 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                                  <AlertCircle className="h-5 w-5" />
                                  Unzulässig
                                </h5>
                                <ul className="space-y-1">
                                  {step.forbidden.map((item, idx) => (
                                    <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                                      <span className="text-red-600">✗</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {step.rules && (
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                              <h5 className="font-semibold text-blue-900 mb-2">Löschfristen</h5>
                              <ul className="space-y-1">
                                {step.rules.map((rule, idx) => (
                                  <li key={idx} className="text-sm text-slate-700 flex items-start gap-2">
                                    <Clock className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                    {rule}
                                  </li>
                                ))}
                              </ul>
                              {step.automation && (
                                <p className="mt-3 text-xs text-blue-700 bg-white p-2 rounded">
                                  <strong>Empfehlung:</strong> {step.automation}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Personalakte Section */}
        <section id="personalakte" className="mb-20 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {personalakteProzess.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strukturierung, Schutz und Aufbewahrung von Personalakten nach DSGVO
            </p>
          </div>

          <div className="space-y-8">
            {personalakteProzess.sections.map((section, idx) => {
              const SectionIcon = section.icon;
              return (
                <Card key={idx} className="border-2">
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 border-b">
                    <div className="flex items-center gap-4">
                      <SectionIcon className="h-8 w-8 text-blue-600" />
                      <h3 className="text-2xl font-bold text-slate-900">{section.type}</h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {section.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="border-l-4 border-l-purple-600 pl-6 py-2">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-bold text-lg text-slate-900">{item.category}</h4>
                            {item.note && (
                              <Badge variant="outline" className="text-xs">
                                <AlertCircle className="h-3 w-3 mr-1" />
                                {item.note}
                              </Badge>
                            )}
                          </div>

                          <div className="bg-slate-50 rounded-lg p-4 mb-2">
                            <p className="text-xs font-semibold text-slate-600 mb-2">Inhalte:</p>
                            <div className="flex flex-wrap gap-2">
                              {item.items.map((content, cIdx) => (
                                <Badge key={cIdx} variant="secondary" className="text-xs">
                                  {content}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-slate-600">
                            <Clock className="h-4 w-4 text-blue-600" />
                            <span className="font-medium">Aufbewahrung:</span>
                            <span>{item.retention}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-blue-600" />
                  Technische und organisatorische Maßnahmen (TOM)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {personalakteProzess.technicalSafeguards.map((measure, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4 border border-slate-200">
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-semibold text-slate-900">{measure.measure}</h5>
                        <Badge
                          variant={measure.level === 'Kritisch' ? 'destructive' : measure.level === 'Hoch' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {measure.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600">{measure.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Link to="/wissen/leitfaden/tom-massnahmen" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                    Umfassender TOM-Leitfaden <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Arbeitszeiterfassung Section */}
        <section id="arbeitszeiterfassung" className="mb-20 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {arbeitszeiterfassungRegeln.title}
            </h2>
            <p className="text-slate-600 max-w-3xl mx-auto mb-4">
              {arbeitszeiterfassungRegeln.background}
            </p>
          </div>

          <div className="space-y-8">
            {arbeitszeiterfassungRegeln.requirements.map((req, idx) => {
              const ReqIcon = req.icon;
              return (
                <Card key={idx} className="border-2">
                  <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50">
                    <div className="flex items-center gap-4">
                      <ReqIcon className="h-6 w-6 text-blue-600" />
                      <div>
                        <CardTitle>{req.aspect}</CardTitle>
                        {req.complianceLevel && (
                          <Badge className="mt-2" variant="destructive">
                            {req.complianceLevel}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    {req.rules && (
                      <div className="space-y-2 mb-4">
                        {req.rules.map((rule, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2 text-slate-700">
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{rule}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {req.allowed && (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                        <h5 className="font-semibold text-green-800 mb-3">Erlaubte Datenerhebung</h5>
                        <ul className="space-y-1">
                          {req.allowed.map((item, aIdx) => (
                            <li key={aIdx} className="text-sm text-slate-700 flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        {req.purpose && (
                          <p className="mt-3 text-xs text-green-700">
                            <strong>Zweck:</strong> {req.purpose}
                          </p>
                        )}
                      </div>
                    )}

                    {req.forbidden && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <h5 className="font-semibold text-red-800 mb-3">Unzulässig</h5>
                        <ul className="space-y-1">
                          {req.forbidden.map((item, fIdx) => (
                            <li key={fIdx} className="text-sm text-slate-700 flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        {req.risk && (
                          <p className="mt-3 text-xs text-red-700 font-semibold">
                            ⚠️ Risiko: {req.risk}
                          </p>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Zeiterfassungs-Systeme im Vergleich</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {arbeitszeiterfassungRegeln.systems.map((system, idx) => (
                  <Card key={idx} className="border-2">
                    <CardHeader>
                      <CardTitle className="text-lg">{system.type}</CardTitle>
                      <Badge
                        variant={system.compliance === 'Hoch' ? 'default' : system.compliance === 'Mittel' ? 'secondary' : 'destructive'}
                      >
                        Compliance: {system.compliance}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-semibold text-green-700 mb-2">Vorteile:</p>
                          <ul className="space-y-1">
                            {system.pros.map((pro, pIdx) => (
                              <li key={pIdx} className="text-sm text-slate-700 flex items-start gap-2">
                                <span className="text-green-600">+</span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-red-700 mb-2">Nachteile:</p>
                          <ul className="space-y-1">
                            {system.cons.map((con, cIdx) => (
                              <li key={cIdx} className="text-sm text-slate-700 flex items-start gap-2">
                                <span className="text-red-600">−</span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-slate-50 rounded p-3">
                          <p className="text-xs font-semibold text-slate-700 mb-2">Datenschutz:</p>
                          <ul className="space-y-1">
                            {system.datenschutz.map((ds, dsIdx) => (
                              <li key={dsIdx} className="text-xs text-slate-600">• {ds}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Monitoring Section */}
        <section id="monitoring" className="mb-20 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {monitoringRichtlinien.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Was ist erlaubt? Rechtliche Grenzen der Mitarbeiterüberwachung
            </p>
          </div>

          <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 mb-8 p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">Achtung: Hochsensibles Thema!</h3>
                <p className="text-slate-700 mb-4">
                  Mitarbeiter-Monitoring berührt fundamentale Persönlichkeitsrechte. Verstöße können zu hohen Bußgeldern, Schadensersatzforderungen und strafrechtlichen Konsequenzen führen. Grundprinzipien beachten:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {monitoringRichtlinien.fundamentalPrinciples.map((principle, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-4">
                      <h5 className="font-semibold text-slate-900 mb-1">{principle.principle}</h5>
                      <p className="text-sm text-slate-600 mb-2">{principle.description}</p>
                      <p className="text-xs text-blue-700">
                        <strong>Beispiel:</strong> {principle.example}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-8">
            {monitoringRichtlinien.scenarios.map((scenario, idx) => {
              const ScenarioIcon = scenario.icon;
              return (
                <Card key={idx} className="border-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-6">
                    <div className="flex items-center gap-4">
                      <ScenarioIcon className="h-8 w-8" />
                      <h3 className="text-2xl font-bold">{scenario.type}</h3>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h5 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5" />
                          {scenario.allowed.title}
                        </h5>
                        <ul className="space-y-2">
                          {scenario.allowed.cases.map((item, cIdx) => (
                            <li key={cIdx} className="text-sm text-slate-700 flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h5 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5" />
                          {scenario.forbidden.title}
                        </h5>
                        <ul className="space-y-2">
                          {scenario.forbidden.cases.map((item, fIdx) => (
                            <li key={fIdx} className="text-sm text-slate-700 flex items-start gap-2">
                              <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {scenario.best_practice && (
                      <div className="bg-blue-50 border-l-4 border-l-blue-600 p-4 rounded-r-lg">
                        <p className="text-sm text-slate-700">
                          <strong className="text-blue-700">Best Practice:</strong> {scenario.best_practice}
                        </p>
                      </div>
                    )}

                    {scenario.requirements && (
                      <div className="mt-4 bg-slate-50 rounded-lg p-4">
                        <h5 className="font-semibold text-slate-900 mb-3">Rechtliche Anforderungen</h5>
                        <ul className="space-y-2">
                          {scenario.requirements.map((req, rIdx) => (
                            <li key={rIdx} className="text-sm text-slate-700 flex items-start gap-2">
                              <Gavel className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {scenario.legal_risk && (
                      <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-sm text-red-900">
                          <strong className="flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5" />
                            Rechtliches Risiko:
                          </strong>
                          {scenario.legal_risk}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Implementation Section */}
        <section id="implementation" className="mb-20 scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Umsetzungs-Roadmap: In 6 Phasen zur HR-Compliance
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Strukturierte Einführung von Datenschutz im Personalwesen
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-600"></div>

            <div className="space-y-8">
              {implementationRoadmap.map((phase, idx) => {
                const PhaseIcon = phase.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    <Card className="md:ml-20 border-2 hover:border-blue-300 transition-all">
                      {/* Timeline Dot */}
                      <div className="hidden md:block absolute -left-[4.5rem] top-8 w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                        {phase.phase}
                      </div>

                      <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-4">
                            <PhaseIcon className="h-8 w-8 text-blue-600" />
                            <div>
                              <Badge className="mb-2">Phase {phase.phase}</Badge>
                              <CardTitle className="text-2xl">{phase.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                                <Clock className="h-4 w-4" />
                                <span>{phase.duration}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-6">
                        <div className="mb-6">
                          <h5 className="font-semibold text-slate-900 mb-3">Aufgaben:</h5>
                          <ul className="space-y-2">
                            {phase.tasks.map((task, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2 text-slate-700">
                                <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-blue-50 rounded-lg p-4">
                          <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                            <FileCheck className="h-5 w-5" />
                            Deliverables
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {phase.deliverables.map((deliverable, dIdx) => (
                              <Badge key={dIdx} variant="secondary">
                                {deliverable}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {phase.critical && (
                          <div className="mt-4 bg-amber-50 border-l-4 border-l-amber-600 p-4 rounded-r-lg">
                            <p className="text-sm text-amber-900">
                              <strong className="flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Kritischer Hinweis:
                              </strong>
                              {phase.critical}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Interactive Checklist */}
          <div className="mt-16">
            <Card className="border-2 border-blue-300">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="text-2xl flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clipboard className="h-6 w-6 text-blue-600" />
                    Interaktive Compliance-Checkliste
                  </span>
                  <Badge variant="outline" className="text-lg">
                    {Math.round(calculateProgress())}% Complete
                  </Badge>
                </CardTitle>
                <Progress value={calculateProgress()} className="mt-4" />
              </CardHeader>

              <CardContent className="pt-6">
                {checklistItems.map((category, catIdx) => (
                  <div key={catIdx} className="mb-8 last:mb-0">
                    <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <ChevronRight className="h-5 w-5 text-blue-600" />
                      {category.category}
                    </h4>

                    <div className="space-y-2 ml-7">
                      {category.items.map((item) => (
                        <div
                          key={item.id}
                          className={cn(
                            "flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all",
                            checkedItems.has(item.id)
                              ? "bg-green-50 border-green-300"
                              : "bg-white border-slate-200 hover:border-blue-300"
                          )}
                          onClick={() => toggleCheck(item.id)}
                        >
                          <div className="flex-shrink-0 mt-0.5">
                            {checkedItems.has(item.id) ? (
                              <CheckSquare className="h-5 w-5 text-green-600" />
                            ) : (
                              <Square className="h-5 w-5 text-slate-400" />
                            )}
                          </div>

                          <div className="flex-1">
                            <p className={cn(
                              "text-sm",
                              checkedItems.has(item.id)
                                ? "text-green-900 line-through"
                                : "text-slate-700"
                            )}>
                              {item.text}
                            </p>
                          </div>

                          <Badge
                            variant={
                              item.priority === 'high' ? 'destructive' :
                              item.priority === 'medium' ? 'default' :
                              'secondary'
                            }
                            className="text-xs"
                          >
                            {item.priority === 'high' ? 'Hoch' : item.priority === 'medium' ? 'Mittel' : 'Niedrig'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Download className="mr-2 h-5 w-5" />
                    Checkliste als PDF herunterladen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Weiterführende Artikel
            </h2>
            <p className="text-lg text-slate-600">
              Vertiefen Sie Ihr Wissen zu spezifischen HR-Datenschutz-Themen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {relatedArticles.map((article, index) => {
              const Icon = article.icon;
              return (
                <Link key={index} to={article.link}>
                  <Card className="p-6 h-full hover:shadow-xl hover:border-blue-300 transition-all duration-300 border-2 group">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <Icon className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </h3>
                        <p className="text-sm text-slate-600">{article.description}</p>
                        <div className="mt-3 inline-flex items-center gap-2 text-sm text-blue-600 font-medium">
                          Zum Leitfaden <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-[#e24e1b] to-[#d63516] text-white">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Benötigen Sie Unterstützung bei HR-Datenschutz?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Unsere Datenschutz-Experten helfen Ihnen bei der rechtskonformen Umsetzung aller Personalwesen-Prozesse.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-[#e24e1b] hover:bg-blue-50">
                  <Link to="/contact">
                    Beratung anfragen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
                  <Link to="/wissen/leitfaden/datenschutzbeauftragter">
                    Mehr zu DSB-Pflichten
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DatenschutzPersonalwesen;
