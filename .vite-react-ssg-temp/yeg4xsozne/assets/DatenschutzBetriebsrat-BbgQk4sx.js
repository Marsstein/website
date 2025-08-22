import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { HandshakeIcon, CheckCircle2, Users, ArrowRight, Download, Shield, Gavel, Database, Settings, Activity, Target, AlertTriangle, Lightbulb, Scale, Euro, ChevronDown, MessageSquare, Star, Clock, Building2, Lock, FileCheck, FileText, CheckSquare, Square, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-progress";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const DatenschutzBetriebsrat = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [activeSection, setActiveSection] = useState("overview");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const navigationItems = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "rechtsgrundlagen", label: "Rechtsgrundlagen", icon: Gavel },
    { id: "datenarten", label: "Datenarten", icon: Database },
    { id: "tom", label: "TOM & Sicherheit", icon: Settings },
    { id: "prozesse", label: "Betriebsratsprozesse", icon: Activity },
    { id: "implementation", label: "Umsetzung", icon: Target }
  ];
  const scrollToSection = (sectionId) => {
    window.history.pushState(null, "", `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
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
      const sections = navigationItems.map((item) => ({
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const complianceStats = [
    { label: "DSGVO Compliance", value: 96, color: "text-red-600", trend: "+8%" },
    { label: "BetrVG Konformität", value: 98, color: "text-blue-600", trend: "+5%" },
    { label: "Datensicherheit", value: 94, color: "text-green-600", trend: "+12%" },
    { label: "Prozess-Compliance", value: 92, color: "text-purple-600", trend: "+7%" },
    { label: "Schulungsstand", value: 89, color: "text-orange-600", trend: "+15%" },
    { label: "Audit Readiness", value: 97, color: "text-pink-600", trend: "+3%" }
  ];
  const rechtsgrundlagen = [
    {
      title: "Betriebsverfassungsgesetz (BetrVG)",
      description: "Das BetrVG regelt die Grundlagen der Betriebsratsarbeit und definiert die Rechte und Pflichten bei der Verarbeitung von Beschäftigtendaten.",
      paragraphs: [
        { nr: "§ 79", content: "Schutz der Arbeitnehmer" },
        { nr: "§ 80", content: "Allgemeine Aufgaben des Betriebsrats" },
        { nr: "§ 94", content: "Mitbestimmung bei personellen Einzelmaßnahmen" },
        { nr: "§ 95", content: "Auskunftsrecht über Lohn und Gehalt" }
      ],
      risk: "Kritisch",
      fineExample: "Verletzung der Betriebsratsrechte: Bis zu 15.000 € Bußgeld",
      realWorldScenario: {
        title: "⚖️ Praxis-Szenario: Betriebsrat bei Umstrukturierung",
        context: "Ein Unternehmen mit 500 Mitarbeitern plant eine Reorganisation. Der Betriebsrat muss seine Mitbestimmungsrechte wahrnehmen und benötigt Zugang zu personenbezogenen Daten.",
        challenge: "Wie kann der Betriebsrat seine gesetzlichen Aufgaben erfüllen, ohne unnötig in die Privatsphäre der Beschäftigten einzugreifen?",
        solution: {
          step1: {
            title: "📊 Bedarfsgerechte Datenanfrage",
            description: "Der Betriebsrat stellt eine strukturierte Anfrage für die erforderlichen Daten",
            modules: [
              {
                name: "Mitarbeiterliste (anonymisiert)",
                purpose: "Überblick über betroffene Bereiche",
                dataTypes: "Abteilung, Position, Beschäftigungsumfang",
                legal: "BetrVG § 80 Abs. 2"
              },
              {
                name: "Sozialplan-relevante Daten",
                purpose: "Ausgleichsmaßnahmen entwickeln",
                dataTypes: "Betriebszugehörigkeit, Alter, Familienstatus",
                benefit: "Faire Ausgleichsregelungen möglich"
              },
              {
                name: "Qualifikationsprofile",
                purpose: "Weiterbildungsmaßnahmen planen",
                dataTypes: "Ausbildung, Fortbildungen, Kompetenzen",
                incentive: "Erhalt von Arbeitsplätzen durch Umschulung"
              }
            ]
          },
          step2: {
            title: "🔐 Datenschutzkonforme Verarbeitung",
            description: "Sichere Handhabung der übertragenen Personalinformationen",
            transparency: [
              "Zugriff nur durch geschulte Betriebsratsmitglieder",
              "Verschlüsselte Speicherung auf separaten Systemen",
              "Protokollierung aller Datenzugriffe",
              "Automatische Löschung nach Projektabschluss"
            ]
          },
          step3: {
            title: "👥 Mitarbeiterkommunikation",
            description: "Transparente Information über die Datenverarbeitung",
            features: [
              "Info-Veranstaltung über Datenschutz im Verfahren",
              "Schriftliche Mitteilung über verarbeitete Daten",
              "Ansprechpartner für Datenschutzfragen benennen",
              "Widerspruchsmöglichkeiten aufzeigen (soweit möglich)"
            ]
          }
        },
        outcome: {
          employeeBenefit: "Schutz der Arbeitsplätze bei maximaler Privatsphäre",
          councilBenefit: "Rechtssichere Wahrnehmung der Mitbestimmungsrechte",
          complianceLevel: "100% BetrVG und DSGVO-konform"
        },
        keyLearnings: [
          "Frühe Abstimmung mit Datenschutzbeauftragten spart Zeit",
          "Strukturierte Datenanfragen reduzieren Konfliktpotential",
          "Transparenz stärkt Vertrauen bei den Beschäftigten",
          "Dokumentierte Prozesse schützen vor rechtlichen Problemen"
        ]
      }
    },
    {
      title: "DSGVO Art. 6 - Rechtmäßigkeit der Verarbeitung",
      description: "Die DSGVO definiert, wann Betriebsräte personenbezogene Daten rechtmäßig verarbeiten dürfen.",
      paragraphs: [
        { nr: "Art. 6 Abs. 1 lit. c", content: "Verarbeitung zur Erfüllung rechtlicher Verpflichtung" },
        { nr: "Art. 6 Abs. 1 lit. f", content: "Verarbeitung zur Wahrung berechtigter Interessen" },
        { nr: "Art. 9 Abs. 2 lit. b", content: "Verarbeitung für arbeitsrechtliche Zwecke" }
      ],
      risk: "Sehr Hoch",
      fineExample: "Bis zu 20 Mio. € oder 4% des Jahresumsatzes",
      realWorldScenario: {
        title: "🏢 Praxis-Szenario: Arbeitsschutz-Kontrolle",
        context: "Der Betriebsrat eines Produktionsunternehmens stellt fest, dass in einer Abteilung häufig Arbeitsunfälle auftreten und möchte Präventionsmaßnahmen einleiten.",
        challenge: "Welche Gesundheitsdaten darf der Betriebsrat zur Verbesserung des Arbeitsschutzes einsehen?",
        solution: {
          step1: {
            title: "🏥 Gestufte Datenanalyse",
            description: "Schrittweise Annäherung an die Ursachen ohne unnötige Datenpreisgabe",
            medicalWorld: {
              title: "Stufe 1: Anonymisierte Statistiken",
              access: "Unfallhäufigkeit nach Bereichen und Uhrzeiten",
              purpose: "Muster erkennen ohne Personenbezug",
              data: ["Unfalltypen", "Tageszeiten", "Wochentage", "Betriebsbereiche"]
            },
            administrativeWorld: {
              title: "Stufe 2: Pseudonymisierte Einzelfälle",
              access: "Detailanalyse besonders schwerer Vorfälle",
              purpose: "Ursachenforschung bei kritischen Ereignissen",
              data: ["Unfallhergang (anonymisiert)", "Arbeitsplatzgegebenheiten", "Sicherheitsausrüstung"]
            }
          },
          step2: {
            title: "👨‍⚕️ Zusammenarbeit mit Betriebsarzt",
            description: "Rechtssichere Kooperation unter Wahrung der Schweigepflicht",
            technicalImplementation: [
              {
                component: "Gemeinsame Arbeitsgruppe Arbeitssicherheit",
                security: "Getrennte Datenhaltung mit abgestimmten Maßnahmen",
                access: "Betriebsrat erhält nur arbeitsplatzbezogene Empfehlungen"
              },
              {
                component: "Anonymisiertes Berichtswesen",
                security: "Medizinische Details bleiben beim Betriebsarzt",
                access: "Präventionsmaßnahmen ohne Personenbezug entwickeln"
              }
            ]
          },
          step3: {
            title: "📋 Praktische Umsetzung",
            description: "Konkrete Arbeitsschutzmaßnahmen ohne Datenschutzverstöße",
            medicalAssessment: {
              betriebsrat: "Abteilung X hat 40% mehr Unfälle als der Durchschnitt, besonders bei Nachtschichten.",
              documentation: "Statistische Analyse ohne Personenbezug"
            },
            hrCommunication: {
              massnahmen: "Zusätzliche Beleuchtung, Pausenregelung anpassen, Schulungen verstärken.",
              rationale: "Präventive Maßnahmen für alle ohne Diskriminierung Einzelner"
            }
          }
        },
        outcome: {
          employeeBenefit: "Verbesserte Arbeitssicherheit ohne Überwachungsgefühl",
          councilBenefit: "Wirksamer Arbeitsschutz ohne rechtliche Risiken",
          legalCompliance: "BetrVG § 89 + DSGVO Art. 6 vollständig erfüllt"
        },
        keyLearnings: [
          "Anonymisierte Daten sind oft ausreichend für Präventionsmaßnahmen",
          "Kooperation mit Betriebsarzt erweitert Handlungsspielraum",
          "Gestufte Herangehensweise vermeidet Datenschutz-Fallstricke",
          "Fokus auf Arbeitsplatz statt Person schützt Privatsphäre"
        ]
      }
    }
  ];
  const datenarten = [
    {
      category: "Personalstammdaten",
      icon: Users,
      description: "Grundlegende Informationen über Beschäftigte für Betriebsratsarbeit",
      examples: [
        "Name, Vorname, Personalnummer",
        "Abteilung, Position, Einstellungsdatum",
        "Arbeitszeit, Beschäftigungsumfang",
        "Entgeltgruppe (nur bei Mitbestimmung)"
      ],
      rechtsgrundlage: "BetrVG § 80 Abs. 2, Art. 6 Abs. 1 lit. c DSGVO",
      speicherdauer: "Dauer der Betriebsratszugehörigkeit + 3 Jahre",
      besonderheiten: "Zugriff nur soweit für konkrete Betriebsratsaufgaben erforderlich"
    },
    {
      category: "Vergütungsdaten",
      icon: Euro,
      description: "Entgeltinformationen für Mitbestimmung bei Vergütungsordnungen",
      examples: [
        "Grundentgelt nach Entgeltgruppen",
        "Zuschläge und variable Vergütungsbestandteile",
        "Durchschnittswerte nach Bereichen/Funktionen",
        "Statistische Auswertungen (anonymisiert)"
      ],
      rechtsgrundlage: "BetrVG § 87 Abs. 1 Nr. 10, § 95",
      speicherdauer: "10 Jahre (steuerrechtliche Aufbewahrungsfristen)",
      besonderheiten: "Individuelle Gehaltsdaten nur bei konkretem Mitbestimmungsfall"
    },
    {
      category: "Arbeitszeit- und Leistungsdaten",
      icon: Clock,
      description: "Daten zur Arbeitsorganisation und Leistungsbeurteilung",
      examples: [
        "Arbeitszeitmodelle und Schichtpläne",
        "Überstundendokumentation",
        "Urlaubszeiten und Fehlzeiten (aggregiert)",
        "Leistungsbewertungen (bei Mitbestimmung)"
      ],
      rechtsgrundlage: "BetrVG § 87 Abs. 1 Nr. 2, 3",
      speicherdauer: "2 Jahre nach Ende des Beschäftigungsverhältnisses",
      besonderheiten: "Detaillierte Leistungsdaten nur bei Mitbestimmungsverfahren"
    },
    {
      category: "Gesundheits- und Sozialangaben",
      icon: Shield,
      description: "Besonders schützenswerte Daten für Arbeitsschutz und soziale Angelegenheiten",
      examples: [
        "Schwerbehinderung (nur Status, nicht Art)",
        "Mutterschutz und Elternzeit",
        "Arbeitsunfälle (anonymisiert/statistisch)",
        "Betriebliche Altersvorsorge"
      ],
      rechtsgrundlage: "BetrVG § 89, § 92a, Art. 9 Abs. 2 lit. b DSGVO",
      speicherdauer: "Je nach Zweck: 3-30 Jahre",
      besonderheiten: "Besonders restriktive Verarbeitung, oft nur statistische Auswertungen"
    }
  ];
  const tomMeasures = [
    {
      category: "Zutrittskontrolle",
      icon: Building2,
      measures: [
        "Separater, abschließbarer Betriebsratsraum",
        "Schlüsselverwaltung nur für BR-Mitglieder",
        "Besucherprotokoll für externe Beratung",
        "Sichere Aufbewahrung vertraulicher Unterlagen"
      ],
      healthcareSpecific: "Betriebsratsbüros, Besprechungsräume, Archivbereiche für BR-Unterlagen",
      iso27001: "A.11.1.1 - Physische Sicherheitsbereiche",
      practicalImplementation: {
        title: "Sichere Betriebsratsräume",
        description: "Physische Sicherheit für vertrauliche Betriebsratsarbeit",
        zones: [
          {
            name: "Betriebsratsbüro",
            security: "Hohe Sicherheit",
            access: "Nur gewählte Betriebsratsmitglieder",
            measures: "Codeschloss + Alarmanlage, Feuerfeste Schränke"
          },
          {
            name: "Beratungsraum",
            security: "Mittlere Sicherheit",
            access: "BR-Mitglieder + externe Berater",
            measures: "Schallschutz, keine Abhörmöglichkeiten"
          },
          {
            name: "Archiv/Lager",
            security: "Maximale Sicherheit",
            access: "BR-Vorsitzender + Stellvertreter",
            measures: "Tresor, klimatisiert, Zugriffsprotokollierung"
          }
        ]
      }
    },
    {
      category: "IT-Sicherheit für BR",
      icon: Lock,
      measures: [
        "Separate IT-Ausstattung für Betriebsratsarbeit",
        "Verschlüsselte E-Mail-Kommunikation",
        "Sichere Cloud-Lösungen oder lokale Server",
        "Regelmäßige Datensicherung"
      ],
      healthcareSpecific: "BR-spezifische Software, Personalverwaltungssysteme, Kommunikationstools",
      iso27001: "A.12.6.1 - Management technischer Schwachstellen",
      practicalImplementation: {
        title: "IT-Infrastruktur für Betriebsräte",
        description: "Sichere und rechtskonforme IT-Ausstattung",
        roles: [
          {
            name: "💻 BR-Computer",
            permissions: "Getrennt von Unternehmens-IT betrieben",
            restrictions: "Keine privaten oder betriebsfremden Daten",
            security: "Vollverschlüsselung + Zwei-Faktor-Authentifizierung"
          },
          {
            name: "📧 E-Mail-System",
            permissions: "Vertrauliche Kommunikation mit Beschäftigten",
            restrictions: "Keine Weiterleitung an Unternehmensleitung",
            security: "Ende-zu-Ende-Verschlüsselung"
          },
          {
            name: "☁️ Cloud-Speicher",
            permissions: "Sichere Dokumentenablage",
            restrictions: "Nur DSGVO-konforme Anbieter in der EU",
            security: "AES-256-Verschlüsselung"
          },
          {
            name: "📱 Mobile Geräte",
            permissions: "Flexible Betriebsratsarbeit",
            restrictions: "Mobile Device Management",
            security: "Remote Wipe bei Verlust"
          }
        ]
      }
    },
    {
      category: "Datenschutz-Organisation",
      icon: FileCheck,
      measures: [
        "BR-spezifisches Datenschutzkonzept",
        "Schulung aller BR-Mitglieder",
        "Dokumentation der Datenverarbeitung",
        "Zusammenarbeit mit DSB des Unternehmens"
      ],
      healthcareSpecific: "BR-Verzeichnis von Verarbeitungstätigkeiten, Einwilligungsmanagement",
      iso27001: "A.18.1.1 - Identifikation anwendbarer Gesetzgebung",
      practicalImplementation: {
        title: "Datenschutz-Management für BR",
        description: "Systematischer Aufbau der Datenschutz-Organisation",
        layers: [
          {
            name: "📚 Schulungsebene",
            protection: "Kontinuierliche Weiterbildung aller BR-Mitglieder",
            benefit: "Rechtssicheres Handeln im BR-Alltag",
            technology: "E-Learning + Präsenzschulungen + Updates"
          },
          {
            name: "📋 Prozessebene",
            protection: "Standardisierte Abläufe für Datenverarbeitung",
            benefit: "Einheitliche und rechtskonforme Bearbeitung",
            technology: "Workflows + Checklisten + Vorlagen"
          },
          {
            name: "📊 Kontrollebene",
            protection: "Regelmäßige Überprüfung der Datenschutz-Maßnahmen",
            benefit: "Frühzeitige Erkennung von Compliance-Problemen",
            technology: "Audit-Tools + Dashboards + Berichte"
          },
          {
            name: "⚖️ Rechtsebene",
            protection: "Juristische Beratung bei komplexen Fällen",
            benefit: "Rechtssicherheit bei schwierigen Entscheidungen",
            technology: "Externe Beratung + Rechts-Datenbanken"
          }
        ]
      }
    }
  ];
  const betriebsratsProzesse = [
    {
      prozess: "Mitbestimmung bei Kündigungen",
      challenge: "Anhörung des BR vor Kündigung unter Datenschutz-Gesichtspunkten",
      solution: "Strukturiertes Anhörungsverfahren mit minimaler Datenpreisgabe",
      implementation: {
        schritte: [
          "Anonymisierte Vorab-Information über geplante Kündigung",
          "Detaillierte Anhörung nur bei strittigen Fällen",
          "Getrennte Dokumentation von Person und Sachverhalt",
          "Fristgerechte Vernichtung nach Abschluss des Verfahrens"
        ],
        rechtsbasis: "BetrVG § 102, DSGVO Art. 6 Abs. 1 lit. c",
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
      prozess: "Beteiligung bei Versetzungen",
      challenge: "Prüfung der Sozialauswahl und Mitbestimmung bei Arbeitsplatzveränderungen",
      solution: "Anonymisierte Vergleichsanalyse mit bedarfsgerechter Datenfreigabe",
      implementation: {
        schritte: [
          "Statistische Übersicht aller relevanten Mitarbeiter",
          "Anonymisierte Bewertungskriterien (Alter, Betriebszugehörigkeit, etc.)",
          "Personalisierte Daten nur bei Einspruch gegen Sozialauswahl",
          "Strukturierte Einigung oder Einigungsstellenverfahren"
        ],
        rechtsbasis: "BetrVG § 95, § 99, DSGVO Art. 6 Abs. 1 lit. f",
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
      phase: "Analyse & Bestandsaufnahme",
      duration: "2-3 Wochen",
      color: "blue",
      tasks: [
        "Betriebsratsstrukturen analysieren",
        "Bestehende Datenverarbeitungen erfassen",
        "Rechtliche Anforderungen definieren",
        "Gap-Analyse durchführen",
        "Risikobewertung erstellen"
      ],
      deliverables: ["BR-Datenschutz-Analyse", "Rechtlicher Rahmenplan", "Risikoregister"]
    },
    {
      phase: "Organisatorische Strukturen",
      duration: "3-4 Wochen",
      color: "green",
      tasks: [
        "BR-Datenschutzkonzept entwickeln",
        "Prozessdefinitionen erstellen",
        "Verantwortlichkeiten festlegen",
        "Dokumentationssystem aufbauen",
        "Schulungsplan entwickeln"
      ],
      deliverables: ["BR-Datenschutzrichtlinie", "Prozesshandbuch", "Dokumentationsvorlagen"]
    },
    {
      phase: "Technische Umsetzung",
      duration: "4-6 Wochen",
      color: "orange",
      tasks: [
        "IT-Infrastruktur für BR einrichten",
        "Sicherheitsmaßnahmen implementieren",
        "Verschlüsselungssysteme installieren",
        "Backup-Strategien etablieren",
        "Zugriffskontrollsystem aufbauen"
      ],
      deliverables: ["BR-IT-System", "Sicherheitskonzept", "Notfallhandbuch"]
    },
    {
      phase: "Schulung & Go-Live",
      duration: "2-3 Wochen",
      color: "purple",
      tasks: [
        "BR-Mitglieder schulen",
        "Praxistest durchführen",
        "Prozesse optimieren",
        "Compliance-Checks etablieren",
        "Monitoring einrichten"
      ],
      deliverables: ["Geschulte BR-Mitglieder", "Live-System", "Compliance-Dashboard"]
    }
  ];
  const toggleChecklistItem = (itemId) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };
  const getCompletionPercentage = () => {
    const totalItems = 20;
    return Math.round(checkedItems.size / totalItems * 100);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Datenschutz für Betriebsräte – BetrVG & DSGVO Compliance" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Rechtssichere Betriebsratsarbeit: BetrVG-Mitbestimmung datenschutzkonform umsetzen & Compliance sichern. Jetzt beraten lassen!" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Datenschutz für Betriebsräte – BetrVG & DSGVO Compliance" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Rechtssichere Betriebsratsarbeit: BetrVG-Mitbestimmung datenschutzkonform umsetzen & Compliance sichern. Jetzt beraten lassen!" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://marsstein.de/wissen/branchen/datenschutz-betriebsrat" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://marsstein.de/wissen/branchen/datenschutz-betriebsrat" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
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
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
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
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative py-20 md:py-28", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: { y, opacity },
            className: "container px-4",
            children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -50 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.8 },
                  className: "space-y-6",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400", children: [
                      /* @__PURE__ */ jsx(HandshakeIcon, { className: "h-4 w-4" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Betriebsrat & Datenschutz" })
                    ] }),
                    /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
                      "Datenschutz für",
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block mt-2", children: "Betriebsräte" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Rechtssichere Betriebsratsarbeit zwischen BetrVG und DSGVO. Wir zeigen Ihnen, wie Sie Ihre Mitbestimmungsrechte datenschutzkonform ausüben." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "BetrVG-konforme Datenverarbeitung" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "DSGVO-Compliance in der Betriebsratsarbeit" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Sichere IT-Infrastruktur für Betriebsräte" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                      /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=betriebsrat", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-90 group", children: [
                        /* @__PURE__ */ jsx(Users, { className: "mr-2 h-5 w-5" }),
                        "Betriebsrat-Beratung buchen",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                      ] }) }),
                      /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                        "BR-Datenschutz Leitfaden"
                      ] })
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: 50 },
                  animate: { opacity: 1, x: 0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  className: "relative",
                  children: [
                    /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Betriebsrat Compliance Center" }),
                        /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-700", children: [
                          getCompletionPercentage(),
                          "% Konform"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: complianceStats.slice(0, 6).map((stat, index) => /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          whileHover: { scale: 1.05 },
                          className: "p-3 bg-white dark:bg-gray-900 rounded-lg border text-center cursor-pointer",
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-600 dark:text-gray-400 mb-1", children: stat.label.split(" ")[0] }),
                            /* @__PURE__ */ jsxs("div", { className: cn("text-xl font-bold", stat.color), children: [
                              stat.value,
                              "%"
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600", children: stat.trend })
                          ]
                        },
                        index
                      )) }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: complianceStats.slice(0, 3).map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                          /* @__PURE__ */ jsx("span", { children: stat.label }),
                          /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                            stat.value,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx(Progress, { value: stat.value, className: "h-2" })
                      ] }, index)) })
                    ] }) }),
                    /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        animate: { y: [0, -10, 0] },
                        transition: { duration: 2, repeat: Infinity },
                        className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-blue-500",
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(HandshakeIcon, { className: "h-4 w-4 text-blue-500 animate-pulse" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "BetrVG Ready" })
                        ] })
                      }
                    )
                  ]
                }
              )
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: navigationItems.map((item, index) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            scrollToSection(item.id);
            setActiveSection(item.id);
          },
          className: cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
            activeSection === item.id ? "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800" : "hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-700 dark:hover:text-blue-400",
            "border",
            activeSection === item.id ? "border-blue-200 dark:border-blue-800" : "border-transparent hover:border-blue-200 dark:hover:border-blue-800"
          ),
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: cn(
              "h-4 w-4",
              activeSection === item.id && "text-blue-600 dark:text-blue-500"
            ) }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "text-sm font-medium",
              activeSection === item.id && "text-blue-700 dark:text-blue-400"
            ), children: item.label })
          ]
        },
        item.id
      )) }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
        /* @__PURE__ */ jsxs("section", { id: "overview", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Betriebsrat & Datenschutz - Herausforderungen und Lösungen"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-blue-600" }),
                "Rechtliche Herausforderungen"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Betriebsräte bewegen sich in einem komplexen rechtlichen Spannungsfeld zwischen Mitbestimmungsrechten aus dem BetrVG und Datenschutzanforderungen der DSGVO." }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "Zugang zu Personaldaten vs. Datenschutz",
                  "Informationsrechte vs. Datenminimierung",
                  "Vertretung der Belegschaft vs. Privatsphäre",
                  "Transparenz vs. Geschäftsgeheimnisse"
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-600 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(Gavel, { className: "h-4 w-4 text-blue-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-800 dark:text-blue-400", children: "Rechtslage" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 dark:text-blue-300", children: "BetrVG und DSGVO sind gleichrangig - es bedarf einer Abwägung im Einzelfall" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Target, { className: "h-6 w-6 text-green-600" }),
                "Praktische Lösungsansätze"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Durch systematische Herangehensweise und klare Prozesse lassen sich Betriebsratsrechte datenschutzkonform ausüben." }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "Gestufte Informationsverfahren entwickeln",
                  "Datenminimierung bei BR-Anfragen beachten",
                  "Sichere IT-Infrastruktur für BR aufbauen",
                  "Schulung aller BR-Mitglieder durchführen"
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4 text-green-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-800 dark:text-green-400", children: "Best Practice" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 dark:text-green-300", children: "Frühe Einbindung des Datenschutzbeauftragten in BR-Verfahren verhindert Konflikte" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "rechtsgrundlagen", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Rechtsgrundlagen für Betriebsratsdatenverarbeitung"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: rechtsgrundlagen.map((rechtsgrundlage, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-blue-500", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-xl pr-4", children: rechtsgrundlage.title }),
                  /* @__PURE__ */ jsxs(
                    Badge,
                    {
                      variant: rechtsgrundlage.risk === "Kritisch" ? "destructive" : rechtsgrundlage.risk === "Sehr Hoch" ? "destructive" : "secondary",
                      className: "flex-shrink-0",
                      children: [
                        rechtsgrundlage.risk,
                        " Risiko"
                      ]
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 leading-relaxed", children: rechtsgrundlage.description }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4 text-blue-600" }),
                        "Relevante Bestimmungen"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: rechtsgrundlage.paragraphs.map((paragraph, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded", children: [
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs flex-shrink-0", children: paragraph.nr }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm", children: paragraph.content })
                      ] }, i)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Euro, { className: "h-4 w-4 text-red-600" }),
                        "Bußgeldrisiko"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-50 dark:bg-red-950/30 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 dark:text-red-300 font-medium", children: rechtsgrundlage.fineExample }) })
                    ] })
                  ] }),
                  rechtsgrundlage.realWorldScenario && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => setExpandedSection(expandedSection === `rechtsgrund-${index}` ? null : `rechtsgrund-${index}`),
                        className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                        children: [
                          /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4" }),
                          "Praxis-Szenario anzeigen",
                          /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                            "h-4 w-4 transition-transform",
                            expandedSection === `rechtsgrund-${index}` && "rotate-180"
                          ) })
                        ]
                      }
                    ),
                    expandedSection === `rechtsgrund-${index}` && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, height: 0 },
                        animate: { opacity: 1, height: "auto" },
                        className: "mt-4",
                        children: /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800", children: [
                          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-900 dark:text-blue-100 mb-2", children: rechtsgrundlage.realWorldScenario.title }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 dark:text-blue-300", children: rechtsgrundlage.realWorldScenario.context })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200", children: [
                            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
                              "Herausforderung"
                            ] }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700 dark:text-amber-300", children: rechtsgrundlage.realWorldScenario.challenge })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 dark:text-green-200 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
                              "Lösungsansatz"
                            ] }),
                            Object.values(rechtsgrundlage.realWorldScenario.solution).map((step, stepIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg border", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 dark:text-gray-100 mb-3", children: step.title }),
                              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: step.description }),
                              step.modules && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: step.modules.map((module, moduleIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                                /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-900 dark:text-blue-100 text-sm mb-1", children: module.name }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-700 dark:text-blue-300 mb-2", children: module.purpose }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: module.dataTypes }),
                                module.benefit && /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400 mt-1 font-medium", children: [
                                  "✓ ",
                                  module.benefit
                                ] }),
                                module.legal && /* @__PURE__ */ jsx("div", { className: "text-xs text-purple-600 dark:text-purple-400 mt-1", children: module.legal })
                              ] }, moduleIndex)) }),
                              step.transparency && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.transparency.map((item, itemIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { children: item })
                              ] }, itemIndex)) }),
                              step.features && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(MessageSquare, { className: "h-3 w-3 text-blue-600 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { children: feature })
                              ] }, featureIndex)) })
                            ] }, stepIndex))
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200", children: [
                            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(Target, { className: "h-4 w-4" }),
                              "Ergebnis & Learnings"
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: Object.entries(rechtsgrundlage.realWorldScenario.outcome).map(([key, value]) => /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                              /* @__PURE__ */ jsxs("span", { className: "font-medium capitalize", children: [
                                key.replace(/([A-Z])/g, " $1").trim(),
                                ":"
                              ] }),
                              /* @__PURE__ */ jsx("br", {}),
                              /* @__PURE__ */ jsx("span", { className: "text-green-700 dark:text-green-300", children: value })
                            ] }, key)) }),
                            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-800 dark:text-green-200", children: "Key Learnings:" }),
                              rechtsgrundlage.realWorldScenario.keyLearnings.map((learning, learningIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 text-yellow-500 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { className: "text-green-700 dark:text-green-300", children: learning })
                              ] }, learningIndex))
                            ] })
                          ] })
                        ] })
                      }
                    )
                  ] })
                ] })
              ] })
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "datenarten", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Datenarten in der Betriebsratsarbeit"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: datenarten.map((datenart, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(datenart.icon, { className: "h-6 w-6 text-blue-600" }),
              datenart.category
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: datenart.description }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Typische Datentypen:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-1", children: datenart.examples.map((example, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                  /* @__PURE__ */ jsx(Database, { className: "h-3 w-3 text-blue-600 mt-1 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: example })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-3 pt-3 border-t", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Rechtsgrundlage: " }),
                  /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: datenart.rechtsgrundlage })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Speicherdauer: " }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: datenart.speicherdauer })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-yellow-800 dark:text-yellow-200", children: "Besonderheiten: " }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-yellow-700 dark:text-yellow-300", children: datenart.besonderheiten })
                ] })
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "tom", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Technische und Organisatorische Maßnahmen für Betriebsräte"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: tomMeasures.map((tom, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(tom.icon, { className: "h-6 w-6 text-blue-600" }),
              tom.category
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Maßnahmen" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: tom.measures.map((measure, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: measure })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Anwendungsbereiche" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: tom.healthcareSpecific }),
                /* @__PURE__ */ jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: tom.iso27001 }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Praktische Umsetzung" }),
                /* @__PURE__ */ jsx("div", { className: "bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-200", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium text-blue-800 dark:text-blue-200", children: tom.practicalImplementation.title })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700 dark:text-blue-300 mb-3", children: tom.practicalImplementation.description }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-3", children: (tom.practicalImplementation.zones || tom.practicalImplementation.roles || tom.practicalImplementation.layers || []).map((item, itemIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 rounded border", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: item.name }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: item.security || item.permissions || item.protection }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                      /* @__PURE__ */ jsxs("strong", { children: [
                        item.access ? "Zugang" : item.restrictions ? "Einschränkungen" : "Nutzen",
                        ":"
                      ] }),
                      " ",
                      item.access || item.restrictions || item.benefit
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: item.measures || item.security || item.technology })
                  ] }, itemIndex)) })
                ] }) })
              ] })
            ] }) })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "prozesse", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Datenschutzkonforme Betriebsratsprozesse"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: betriebsratsProzesse.map((prozess, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Activity, { className: "h-6 w-6 text-green-600" }),
              prozess.prozess
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-red-700", children: "Herausforderung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: prozess.challenge })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-700", children: "Lösung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: prozess.solution })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-blue-700", children: "Rechtsbasis" }),
                  /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-sm", children: prozess.implementation.rechtsbasis })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Umsetzungsschritte" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: prozess.implementation.schritte.map((schritt, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center w-6 h-6 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-bold flex-shrink-0 mt-0.5", children: i + 1 }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: schritt })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setExpandedSection(expandedSection === `prozess-${index}` ? null : `prozess-${index}`),
                    className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                    children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
                      "Code-Template anzeigen",
                      /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "h-4 w-4 transition-transform",
                        expandedSection === `prozess-${index}` && "rotate-180"
                      ) })
                    ]
                  }
                ),
                expandedSection === `prozess-${index}` && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    className: "mt-4",
                    children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: prozess.implementation.template }) })
                  }
                )
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "implementation", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8",
              children: "Umsetzungsfahrplan für datenschutzkonforme Betriebsratsarbeit"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6", children: implementationRoadmap.map((phase, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxs("div", { className: cn(
                    "inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3",
                    phase.color === "blue" && "bg-blue-100 text-blue-800",
                    phase.color === "green" && "bg-green-100 text-green-800",
                    phase.color === "orange" && "bg-orange-100 text-orange-800",
                    phase.color === "purple" && "bg-purple-100 text-purple-800"
                  ), children: [
                    "Phase ",
                    index + 1
                  ] }),
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: phase.phase }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
                    /* @__PURE__ */ jsx("span", { children: phase.duration })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Aufgaben" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.tasks.map((task, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: task })
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Deliverables" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-1", children: phase.deliverables.map((deliverable, i) => /* @__PURE__ */ jsx("div", { className: "text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded", children: deliverable }, i)) })
                  ] })
                ] })
              ] })
            },
            index
          )) }),
          /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckSquare, { className: "h-6 w-6 text-green-600" }),
                "Interaktive Betriebsrat-Checkliste"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
                "Fortschritt: ",
                getCompletionPercentage(),
                "% abgeschlossen"
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: getCompletionPercentage(), className: "h-2" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", children: [
              {
                category: "Rechtliche Grundlagen",
                items: [
                  "BetrVG-Rechte und DSGVO-Pflichten abgestimmt",
                  "Verzeichnis der BR-Verarbeitungstätigkeiten erstellt",
                  "Zusammenarbeit mit DSB etabliert",
                  "Rechtssichere Datenerhebungsverfahren definiert"
                ]
              },
              {
                category: "Technische Infrastruktur",
                items: [
                  "Separate IT-Ausstattung für BR eingerichtet",
                  "Sichere Kommunikationskanäle implementiert",
                  "Verschlüsselte Datenspeicherung aktiviert",
                  "Zugriffskontrollsystem für BR-Räume installiert"
                ]
              },
              {
                category: "Organisatorische Maßnahmen",
                items: [
                  "Alle BR-Mitglieder zu Datenschutz geschult",
                  "BR-spezifische Datenschutzrichtlinie erstellt",
                  "Prozesse für Datenauskunft und -löschung definiert",
                  "Notfallplan für Datenschutzverletzungen entwickelt"
                ]
              }
            ].map((section, sectionIndex) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: section.category }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: section.items.map((item, itemIndex) => {
                const itemId = `${sectionIndex}-${itemIndex}`;
                const isChecked = checkedItems.has(itemId);
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                    onClick: () => toggleChecklistItem(itemId),
                    children: [
                      isChecked ? /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-green-600" }) : /* @__PURE__ */ jsx(Square, { className: "h-5 w-5 text-gray-400" }),
                      /* @__PURE__ */ jsx("span", { className: cn(
                        "text-sm",
                        isChecked && "line-through text-gray-500"
                      ), children: item })
                    ]
                  },
                  itemIndex
                );
              }) })
            ] }, sectionIndex)) })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/pattern.svg')] opacity-10" }),
            /* @__PURE__ */ jsx(CardContent, { className: "relative p-8 md:p-12 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { scale: 0 },
                  whileInView: { scale: 1 },
                  transition: { type: "spring", duration: 0.8 },
                  children: /* @__PURE__ */ jsx(HandshakeIcon, { className: "h-16 w-16 mx-auto mb-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Rechtssichere Betriebsratsarbeit beginnt hier" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 max-w-3xl mx-auto", children: "Vereinen Sie erfolgreich Mitbestimmungsrechte mit Datenschutz-Compliance. Unsere Experten unterstützen Sie bei der rechtssicheren Gestaltung Ihrer Betriebsratsarbeit." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=betriebsrat", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-blue-600 hover:bg-gray-100 group shadow-lg",
                    children: [
                      /* @__PURE__ */ jsx(Users, { className: "mr-2 h-5 w-5" }),
                      "Kostenlose Betriebsrat-Beratung",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "bg-transparent text-white border-white hover:bg-white/10",
                    children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "Betriebsrat Datenschutz-Guide (PDF)"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-8", children: [
                { icon: HandshakeIcon, title: "Betriebsrat-Expertise", subtitle: "Spezialisiert auf BR-Datenschutz" },
                { icon: Shield, title: "BetrVG + DSGVO konform", subtitle: "Rechtssichere Prozesse" },
                { icon: Award, title: "TÜV-zertifizierte Beratung", subtitle: "Höchste Qualitätsstandards" }
              ].map((item, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "bg-white/20 p-3 rounded-lg", children: /* @__PURE__ */ jsx(item.icon, { className: "h-6 w-6" }) }),
                    /* @__PURE__ */ jsxs("div", { className: "text-left", children: [
                      /* @__PURE__ */ jsx("div", { className: "font-semibold", children: item.title }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-white/80", children: item.subtitle })
                    ] })
                  ]
                },
                index
              )) })
            ] }) })
          ] })
        }
      ) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-5 w-5 text-blue-600" }),
          "Weiterführende Ressourcen für Betriebsräte"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-homeoffice", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Datenschutz Homeoffice" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Sicheres Arbeiten im Homeoffice" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/compliance/audit-management", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-green-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Audit Management" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "DSGVO-Audits erfolgreich meistern" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/it-sicherheit/verschluesselung", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5 text-purple-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Verschlüsselung" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Sichere Datenkommunikation" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/recht/beschaeftigtendatenschutz", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-orange-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Beschäftigtendatenschutz" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Rechtliche Grundlagen im HR" })
          ] }) })
        ] }) })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  DatenschutzBetriebsrat as default
};
