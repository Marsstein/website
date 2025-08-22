import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Heart, CheckCircle2, Stethoscope, ArrowRight, Download, Shield, Lock, UserCheck, Settings, BarChart3, Code, AlertTriangle, Brain, Lightbulb, FileText, Euro, ChevronDown, Smartphone, Clock, Calendar, Target, Star, Building2, Clipboard, FileCheck, CheckSquare, Square, Award, ExternalLink, Gavel, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "react-helmet-async";
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
const HealthcareDsgvoGuide = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [activeSection, setActiveSection] = useState("overview");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const navigationItems = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "art9", label: "Art. 9 DSGVO", icon: Lock },
    { id: "consent", label: "Einwilligungsmanagement", icon: UserCheck },
    { id: "tom", label: "TOM Healthcare", icon: Settings },
    { id: "dsfa", label: "DSFA & Risikoanalyse", icon: BarChart3 },
    { id: "implementation", label: "Praxis-Implementation", icon: Code }
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
    { label: "Art. 9 DSGVO Erfüllung", value: 98, color: "text-red-600", trend: "+5%" },
    { label: "TOM Implementierung", value: 96, color: "text-pink-600", trend: "+8%" },
    { label: "Einwilligungsmanagement", value: 94, color: "text-rose-600", trend: "+12%" },
    { label: "DSFA Compliance", value: 92, color: "text-red-500", trend: "+7%" },
    { label: "MDR Integration", value: 89, color: "text-orange-500", trend: "+15%" },
    { label: "Audit Readiness", value: 97, color: "text-purple-600", trend: "+3%" }
  ];
  const art9Requirements = [
    {
      title: "Ausdrückliche Einwilligung (Art. 9 Abs. 2 lit. a)",
      description: "Die betroffene Person hat in die Verarbeitung der genannten personenbezogenen Daten für einen oder mehrere festgelegte Zwecke ausdrücklich eingewilligt",
      examples: ["Behandlungseinwilligung für spezielle Therapien", "Forschungsteilnahme mit Gesundheitsdaten", "Telemedizin-Services", "Genetische Untersuchungen"],
      risk: "Kritisch",
      fineExample: "Bis zu 20 Mio. € oder 4% des Jahresumsatzes",
      realWorldScenario: {
        title: "🏥 Praxis-Szenario: Digitale Patientenaufnahme",
        context: "Ein 45-jähriger Patient kommt zur kardiologischen Erstuntersuchung. Das Krankenhaus nutzt ein digitales Einwilligungssystem.",
        challenge: "Wie kann die Klinik rechtssicher verschiedene Datenverarbeitungen abfragen, ohne den Patienten zu überfordern?",
        solution: {
          step1: {
            title: "📋 Modularer Einwilligungsprozess",
            description: "Das System präsentiert dem Patienten drei klar getrennte Einwilligungsmodule:",
            modules: [
              {
                name: "Behandlungsdaten (erforderlich)",
                purpose: "Grundlegende medizinische Versorgung",
                dataTypes: "Symptome, Vorerkrankungen, aktuelle Medikation",
                legal: "Zwingend für Behandlungsvertrag"
              },
              {
                name: "Erweiterte Diagnostik (optional)",
                purpose: "Präzisere Diagnose durch Familienanamnese",
                dataTypes: "Genetische Disposition, Familiengeschichte",
                benefit: "Früherkennung von Herzerkrankungen möglich"
              },
              {
                name: "Forschungsteilnahme (freiwillig)",
                purpose: "Anonymisierte Daten für Herzforschung",
                dataTypes: "Behandlungsergebnisse, Therapieerfolg",
                incentive: "Beitrag zur medizinischen Forschung"
              }
            ]
          },
          step2: {
            title: "🔒 Transparente Datennutzung",
            description: "Für jedes Modul wird klar erklärt:",
            transparency: [
              "Wer erhält Zugriff auf welche Daten?",
              "Wie lange werden die Daten gespeichert?",
              "Mit welchen Dritten werden Daten geteilt?",
              "Wie kann die Einwilligung widerrufen werden?"
            ]
          },
          step3: {
            title: "📱 Praktische Umsetzung",
            description: "Der Patient erhält ein Tablet mit intuitiver Benutzeroberfläche",
            features: [
              "Visuell aufbereitete Einwilligungstexte mit Symbolen",
              "Kurze Erklärvideos für komplexe Sachverhalte",
              "Sofortige Auswirkungsvorschau bei jeder Auswahl",
              "Jederzeit änderbare Entscheidungen während des Aufenthalts"
            ]
          }
        },
        outcome: {
          patientBenefit: "Vollständige Transparenz und Kontrolle über eigene Daten",
          clinicBenefit: "Rechtssichere Datenverarbeitung mit höherer Einwilligungsrate",
          complianceLevel: "98% DSGVO-konforme Einwilligungen"
        },
        keyLearnings: [
          "Modulare Einwilligung erhöht Akzeptanz um 34%",
          "Visuelle Aufbereitung reduziert Verständnisfragen um 67%",
          "Granulare Kontrolle stärkt Vertrauen in die Einrichtung",
          "Proaktive Transparenz verhindert spätere Beschwerden"
        ]
      }
    },
    {
      title: "Gesundheitsvorsorge & Arbeitsmedizin (Art. 9 Abs. 2 lit. h)",
      description: "Verarbeitung für Zwecke der Gesundheitsvorsorge oder der Arbeitsmedizin, für die Beurteilung der Arbeitsfähigkeit des Beschäftigten",
      examples: ["Betriebsärztliche Untersuchungen", "Vorsorgeuntersuchungen", "Impfstatus-Verwaltung", "Arbeitsplatz-Gesundheitsscreening"],
      risk: "Hoch",
      fineExample: "Meta Ireland: 1,2 Mrd. € (2023)",
      realWorldScenario: {
        title: "🏭 Praxis-Szenario: Betriebsärztlicher Dienst im Krankenhaus",
        context: "Ein großes Universitätsklinikum führt arbeitsmedizinische Vorsorgeuntersuchungen für 3.500 Mitarbeiter durch. Der Betriebsarzt muss Gesundheitsdaten verarbeiten, ohne die Privatsphäre zu verletzen.",
        challenge: "Wie können Gesundheitsdaten der Mitarbeiter verarbeitet werden, ohne dass die Personalstelle Zugang zu medizinischen Details erhält?",
        solution: {
          step1: {
            title: "👩‍⚕️ Strikte Datentrennung",
            description: 'Implementierung eines "Zwei-Welten-Modells"',
            medicalWorld: {
              title: "Medizinische Welt (Betriebsarzt)",
              access: "Vollständige Gesundheitsdaten",
              purpose: "Arbeitsmedizinische Vorsorge",
              data: ["Untersuchungsergebnisse", "Impfstatus", "Arbeitsplatzrisiken", "Gesundheitsempfehlungen"]
            },
            administrativeWorld: {
              title: "Administrative Welt (Personalabteilung)",
              access: "Nur arbeitsrelevante Ergebnisse",
              purpose: "Arbeitsplatzanpassung",
              data: ["Arbeitsfähigkeit: Ja/Nein", "Einschränkungen ohne medizinische Details", "Nächster Termin"]
            }
          },
          step2: {
            title: "🔒 Technische Umsetzung der Datentrennung",
            description: "Innovative Lösung für maximalen Datenschutz",
            technicalImplementation: [
              {
                component: "Medizinisches Dokumentationssystem",
                security: "Separate Datenbank mit Berufsgeheimnis-Schutz",
                access: "Nur medizinisches Personal mit Qualifikation"
              },
              {
                component: "Arbeitsplatz-Bewertungssystem",
                security: "Automatisierte Anonymisierung medizinischer Details",
                access: "HR-Abteilung erhält nur arbeitsrelevante Bewertungen"
              },
              {
                component: "Audit-Trail System",
                security: "Lückenlose Dokumentation aller Datenzugriffe",
                access: "Datenschutzbeauftragte für Compliance-Kontrolle"
              }
            ]
          },
          step3: {
            title: "📊 Praktisches Beispiel: Nachtschicht-Tauglichkeit",
            description: "Wie arbeitsmedizinische Bewertungen datenschutzkonform kommuniziert werden",
            medicalAssessment: {
              betriebsarzt: "Patient hat chronische Insomnie und Bluthochdruck. Nachtschichten erhöhen Gesundheitsrisiko erheblich.",
              documentation: "Vollständige medizinische Begründung in separatem System"
            },
            hrCommunication: {
              personalstelle: "Mitarbeiter für Nachtschichten nicht geeignet. Alternative Schichtzeiten empfohlen.",
              rationale: "Keine medizinischen Details, nur arbeitsplatzrelevante Empfehlung"
            }
          }
        },
        outcome: {
          employeeBenefit: "Optimaler Gesundheitsschutz ohne Diskriminierungsrisiko",
          employerBenefit: "Arbeitsschutz-Compliance ohne Datenschutzverstöße",
          legalCompliance: "Vollständige Art. 9 DSGVO Konformität + Arbeitsschutzrecht"
        },
        keyLearnings: [
          "Datentrennung schafft Vertrauen bei Mitarbeitern",
          "Betriebsärztliche Schweigepflicht bleibt vollständig gewahrt",
          "Automatisierte Anonymisierung verhindert menschliche Fehler",
          "Transparente Prozesse reduzieren Widerstand gegen Vorsorgeuntersuchungen"
        ]
      }
    },
    {
      title: "Lebenswichtige Interessen (Art. 9 Abs. 2 lit. c)",
      description: "Die Verarbeitung ist zum Schutz lebenswichtiger Interessen der betroffenen Person oder einer anderen natürlichen Person erforderlich",
      examples: ["Notfallbehandlung bewusstloser Patienten", "Intensivmedizin", "Rettungsdienst-Einsätze", "Organspende-Koordination"],
      risk: "Mittel",
      fineExample: "Ausnahme: Notfallsituationen meist bußgeldfrei",
      implementation: {
        requirements: [
          "Unmittelbare Lebensgefahr oder schwerwiegende Gesundheitsgefährdung",
          "Nachträgliche Information sobald möglich",
          "Dokumentation der Notfallsituation",
          "Minimale erforderliche Datenverarbeitung"
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
      scenario: "Digitale Erstanamnese",
      challenge: "Umfassende Gesundheitsdatenerhebung bei Erstkontakt",
      solution: "Granulares, modulares Einwilligungssystem",
      implementation: {
        modules: [
          "Basis-Gesundheitsdaten (Pflichtangaben)",
          "Erweiterte Anamnese (Optional)",
          "Forschungsteilnahme (Opt-in)",
          "Datenübermittlung an Fachärzte (Situativ)"
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
      scenario: "Telemedizin-Konsultation",
      challenge: "Videoübertragung, Aufzeichnung, internationale Datenübertragung",
      solution: "Privacy-by-Design Telemedizin-Plattform",
      implementation: {
        modules: [
          "Ende-zu-Ende Verschlüsselung",
          "Temporäre Session-Daten",
          "Aufzeichnungs-Kontrolle",
          "EU-Server Hosting"
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
      category: "Zutrittskontrolle",
      icon: Building2,
      measures: [
        "Biometrische Zugangssysteme für Patientenbereiche",
        "Mehrstufige Besucherregistrierung",
        "24/7 Sicherheitsdienst mit Protokollierung",
        "Videoüberwachung mit automatischer Anonymisierung"
      ],
      healthcareSpecific: "Patientenzimmer, Operationssäle, Datenverarbeitungsräume, Archivbereiche",
      iso27001: "A.11.1.1 - Physische Sicherheitsbereiche",
      practicalImplementation: {
        title: "Intelligente Sicherheitszonen",
        description: "Automatische Anpassung der Sicherheitsmaßnahmen je nach Bereich und Tageszeit",
        zones: [
          {
            name: "Öffentlicher Bereich",
            security: "Grundsicherheit",
            access: "Freier Zugang für Besucher",
            measures: "Videoaufzeichnung, Notfallknöpfe"
          },
          {
            name: "Patientenbereich",
            security: "Mittlere Sicherheit",
            access: "Mitarbeiterausweis + PIN",
            measures: "Automatische Patientenanonymisierung bei Aufzeichnungen"
          },
          {
            name: "OP/Intensivstation",
            security: "Hohe Sicherheit",
            access: "Biometrie + Mitarbeiterausweis",
            measures: "Lückenlose Dokumentation, Reinraumstandards"
          },
          {
            name: "Rechenzentrum",
            security: "Maximale Sicherheit",
            access: "Multi-Faktor + Begleitperson",
            measures: "Faraday-Käfig, 24/7 Überwachung"
          }
        ]
      }
    },
    {
      category: "Zugangskontrolle",
      icon: UserCheck,
      measures: [
        "Multi-Faktor-Authentifizierung für alle Systeme",
        "Rollenbasierte Berechtigungen nach Funktionsbereich",
        "Automatische Sperrung bei Inaktivität (5 Min)",
        "Privilegierte Konten mit zusätzlicher Überwachung"
      ],
      healthcareSpecific: "KIS, PACS, Laborinformationssysteme, Patientenportale",
      iso27001: "A.9.1.1 - Zugriffsrichtlinie",
      practicalImplementation: {
        title: "Intelligente Rollenverwaltung",
        description: "Automatische Rechtevergabe basierend auf Funktion, Schicht und Patientenzuordnung",
        roles: [
          {
            name: "👩‍⚕️ Ärzte",
            permissions: "Vollzugriff auf zugewiesene Patienten",
            restrictions: "Automatische Sperrung nach Schichtende",
            security: "Biometrische Anmeldung + Smart Card"
          },
          {
            name: "👩‍⚕️ Pflegekräfte",
            permissions: "Patientendaten + Vitalwerte erfassen",
            restrictions: "Keine Diagnose-Änderungen",
            security: "PIN + Fingerabdruck"
          },
          {
            name: "📈 Verwaltung",
            permissions: "Terminplanung + Abrechnung",
            restrictions: "Kein Zugriff auf medizinische Daten",
            security: "Passwort + SMS-Code"
          },
          {
            name: "🔧 IT-Support",
            permissions: "Systemwartung unter Aufsicht",
            restrictions: "Keine Patientendaten sichtbar",
            security: "Doppelte Bestätigung + Protokollierung"
          }
        ]
      }
    },
    {
      category: "Verschlüsselung",
      icon: Shield,
      measures: [
        "Ende-zu-Ende Verschlüsselung aller Patientendaten",
        "Hardware Security Modules (HSM) für Schlüsselverwaltung",
        "Verschlüsselte Datenbanken mit Feld-Level Encryption",
        "Sichere Kommunikation zwischen allen Systemen"
      ],
      healthcareSpecific: "Patientenakten, DICOM-Bilder, Laborbefunde, Verschreibungen",
      iso27001: "A.10.1.1 - Kryptographische Kontrollen",
      practicalImplementation: {
        title: "Mehrstufige Verschlüsselungsstrategie",
        description: "Umfassender Schutz von der Dateneingabe bis zur langfristigen Archivierung",
        layers: [
          {
            name: "📱 Eingabeebene",
            protection: "Verschlüsselung direkt bei der Dateneingabe",
            benefit: "Schutz bereits während der Erfassung",
            technology: "Client-seitige Verschlüsselung mit Hardware-Schlüsseln"
          },
          {
            name: "📊 Übertragungsebene",
            protection: "Sichere Kanäle zwischen allen Systemen",
            benefit: "Schutz vor Netzwerkangriffen",
            technology: "TLS 1.3 mit Certificate Pinning"
          },
          {
            name: "📋 Speicherebene",
            protection: "Verschlüsselte Datenbankfelder",
            benefit: "Schutz auch bei Datenbankzugriff",
            technology: "AES-256 mit HSM-verwalteten Schlüsseln"
          },
          {
            name: "📺 Archivebene",
            protection: "Langzeitsichere Verschlüsselung",
            benefit: "Schutz über Jahrzehnte garantiert",
            technology: "Quantenresistente Algorithmen"
          }
        ]
      }
    }
  ];
  const riskScenarios = [
    {
      scenario: "Patientendaten-Breach durch Ransomware",
      likelihood: "Hoch",
      impact: "Sehr Hoch",
      riskScore: 95,
      potentialFine: "5-20 Mio. €",
      affectedPersons: "10.000+",
      mitigationMeasures: [
        "Immutable Backups mit Air-Gap Isolation",
        "Zero-Trust Network Architecture",
        "Endpoint Detection and Response (EDR)",
        "Incident Response Team 24/7",
        "Cyber Insurance mit DSGVO-Abdeckung"
      ],
      complianceActions: [
        "Meldung an Aufsichtsbehörde binnen 72h",
        "Information betroffener Personen binnen 72h",
        "Forensische Untersuchung dokumentieren",
        "Schadensbegrenzung und -bewertung",
        "Verbesserungsmaßnahmen implementieren"
      ]
    },
    {
      scenario: "Unberechtigte Einsichtnahme durch Mitarbeiter",
      likelihood: "Mittel",
      impact: "Hoch",
      riskScore: 75,
      potentialFine: "500.000 - 2 Mio. €",
      affectedPersons: "50-500",
      mitigationMeasures: [
        "Umfassende Zugriffsprotokollierung",
        "Anomalie-Erkennung bei Datenzugriffen",
        "Regelmäßige Mitarbeiterschulungen",
        "Break-Glass Verfahren für Notfälle",
        "Whistleblower-System für Compliance-Verstöße"
      ],
      complianceActions: [
        "Interne Untersuchung und Dokumentation",
        "Arbeitsrechtliche Maßnahmen prüfen",
        "Betroffene Patienten informieren",
        "Zusätzliche Sicherheitsmaßnahmen",
        "Präventive Schulungsmaßnahmen"
      ]
    }
  ];
  const implementationRoadmap = [
    {
      phase: "Assessment & Planung",
      duration: "4-6 Wochen",
      color: "blue",
      tasks: [
        "DSGVO Healthcare Gap-Analyse",
        "Datenschutz-Folgenabschätzung (DSFA)",
        "Art. 9 Compliance-Audit",
        "Stakeholder-Workshops",
        "Implementierungsplan erstellen"
      ],
      deliverables: ["Gap-Analyse Report", "DSFA Dokumentation", "Implementierungsroadmap"]
    },
    {
      phase: "Technische Implementation",
      duration: "8-12 Wochen",
      color: "green",
      tasks: [
        "Verschlüsselungsinfrastruktur aufbauen",
        "Consent Management System",
        "Zugriffskontrollsystem implementieren",
        "Monitoring und Alerting",
        "Backup und Recovery optimieren"
      ],
      deliverables: ["Technische Infrastruktur", "Security Controls", "Monitoring Dashboard"]
    },
    {
      phase: "Organisatorische Maßnahmen",
      duration: "6-8 Wochen",
      color: "orange",
      tasks: [
        "Richtlinien und Verfahren aktualisieren",
        "Mitarbeiterschulungen durchführen",
        "Incident Response Prozesse",
        "Audit und Compliance Checks",
        "Dokumentation vervollständigen"
      ],
      deliverables: ["Compliance Dokumentation", "Schulungsnachweis", "Audit Reports"]
    },
    {
      phase: "Go-Live & Monitoring",
      duration: "2-4 Wochen",
      color: "purple",
      tasks: [
        "Produktive Inbetriebnahme",
        "Continuous Monitoring einrichten",
        "User Acceptance Testing",
        "Performance Optimierung",
        "Compliance Validation"
      ],
      deliverables: ["Live System", "Monitoring Setup", "Compliance Certificate"]
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
    const totalItems = 24;
    return Math.round(checkedItems.size / totalItems * 100);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Gesundheitswesen DSGVO – Patientendaten rechtssicher verarbeiten",
        description: "DSGVO im Gesundheitswesen: Patientendatenschutz, Schweigepflicht, Forschung, eHealth. ✓ Praxisnahe Lösungen ✓ Rechtssicherheit ✓ Compliance-Checklisten.",
        canonical: "/wissen/branchen/gesundheitswesen-dsgvo",
        keywords: "DSGVO Gesundheitswesen, Patientendatenschutz, Schweigepflicht DSGVO, eHealth Datenschutz, medizinische Forschung DSGVO, Gesundheitsdaten Art. 9",
        structuredData: {
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
        }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative py-20 md:py-28", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
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
                    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400", children: [
                      /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Healthcare DSGVO Excellence" })
                    ] }),
                    /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
                      "Healthcare DSGVO",
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block mt-2", children: "Art. 9 Compliance Guide" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Meistern Sie die komplexesten Datenschutz-Herausforderungen im Gesundheitswesen. Von Art. 9 DSGVO über MDR bis hin zu KI-basierten Diagnose-Systemen." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "DSGVO Art. 9 konforme Verarbeitung von Gesundheitsdaten" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "EU AI Act Compliance für medizinische KI-Systeme" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "MDR-Integration und Medizinprodukte-Compliance" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                      /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=healthcare", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-red-600 to-pink-600 text-white hover:opacity-90 group", children: [
                        /* @__PURE__ */ jsx(Stethoscope, { className: "mr-2 h-5 w-5" }),
                        "Healthcare Demo buchen",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                      ] }) }),
                      /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                        "Art. 9 DSGVO Checkliste"
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
                    /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-red-200 dark:border-red-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Healthcare Compliance Center" }),
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
                        className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-red-500",
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4 text-red-500 animate-pulse" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "DSGVO Ready" })
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
      /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: navigationItems.map((item, index) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            scrollToSection(item.id);
            setActiveSection(item.id);
          },
          className: cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
            activeSection === item.id ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800" : "hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-400",
            "border",
            activeSection === item.id ? "border-red-200 dark:border-red-800" : "border-transparent hover:border-red-200 dark:hover:border-red-800"
          ),
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: cn(
              "h-4 w-4",
              activeSection === item.id && "text-red-600 dark:text-red-500"
            ) }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "text-sm font-medium",
              activeSection === item.id && "text-red-700 dark:text-red-400"
            ), children: item.label })
          ]
        },
        item.id
      )) }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
        /* @__PURE__ */ jsxs("section", { id: "overview", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "Healthcare DSGVO Überblick"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-red-600" }),
                "DSGVO Art. 9 - Besondere Kategorien"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Gesundheitsdaten gehören zu den besonderen Kategorien personenbezogener Daten und erfordern höchste Schutzstandards und spezielle Rechtsgrundlagen." }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "Explizite Einwilligung oder gesetzliche Erlaubnis",
                  "Erhöhte technische und organisatorische Maßnahmen",
                  "Besondere Transparenz- und Informationspflichten",
                  "Verschärfte Dokumentations- und Nachweispflichten"
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-800 dark:text-red-400", children: "Bußgeldrisiko" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 dark:text-red-300", children: "Bis zu 20 Mio. € oder 4% des weltweiten Jahresumsatzes bei Verstößen gegen Art. 9 DSGVO" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Brain, { className: "h-6 w-6 text-purple-600" }),
                "EU AI Act & Healthcare KI"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Medizinische KI-Systeme fallen unter die Hochrisiko-Kategorie des EU AI Act und erfordern umfassende Compliance-Maßnahmen." }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "Risikomanagementsystem für KI-Anwendungen",
                  "Transparenz und Erklärbarkeit der Algorithmen",
                  "Menschliche Aufsicht bei kritischen Entscheidungen",
                  "Kontinuierliche Überwachung und Bias-Monitoring"
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(Brain, { className: "h-4 w-4 text-purple-600 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4 text-purple-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-800 dark:text-purple-400", children: "Best Practice" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 dark:text-purple-300", children: 'Implementieren Sie "Human-in-the-Loop" Systeme für alle KI-gestützten Diagnosen' })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "art9", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "Art. 9 DSGVO - Besondere Kategorien personenbezogener Daten"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: art9Requirements.map((requirement, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-red-500", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-xl pr-4", children: requirement.title }),
                  /* @__PURE__ */ jsxs(
                    Badge,
                    {
                      variant: requirement.risk === "Kritisch" ? "destructive" : "secondary",
                      className: "flex-shrink-0",
                      children: [
                        requirement.risk,
                        " Risiko"
                      ]
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 leading-relaxed", children: requirement.description }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-blue-600" }),
                        "Anwendungsbeispiele"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: requirement.examples.map((example, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm", children: example })
                      ] }, i)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Euro, { className: "h-4 w-4 text-red-600" }),
                        "Bußgeldrisiko"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-50 dark:bg-red-950/30 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 dark:text-red-300 font-medium", children: requirement.fineExample }) })
                    ] })
                  ] }),
                  requirement.realWorldScenario && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => setExpandedSection(expandedSection === `scenario-${index}` ? null : `scenario-${index}`),
                        className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                        children: [
                          /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4" }),
                          "Praxis-Szenario anzeigen",
                          /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                            "h-4 w-4 transition-transform",
                            expandedSection === `scenario-${index}` && "rotate-180"
                          ) })
                        ]
                      }
                    ),
                    expandedSection === `scenario-${index}` && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, height: 0 },
                        animate: { opacity: 1, height: "auto" },
                        className: "mt-4",
                        children: /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl border border-blue-200 dark:border-blue-800", children: [
                          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-blue-900 dark:text-blue-100 mb-2", children: requirement.realWorldScenario.title }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 dark:text-blue-300", children: requirement.realWorldScenario.context })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 dark:bg-amber-950/30 p-4 rounded-lg border border-amber-200", children: [
                            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-amber-800 dark:text-amber-200 mb-2 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
                              "Herausforderung"
                            ] }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700 dark:text-amber-300", children: requirement.realWorldScenario.challenge })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 dark:text-green-200 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
                              "Lösungsansatz"
                            ] }),
                            Object.values(requirement.realWorldScenario.solution).map((step, stepIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg border", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 dark:text-gray-100 mb-3", children: step.title }),
                              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: step.description }),
                              step.modules && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: step.modules.map((module, moduleIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                                /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-900 dark:text-blue-100 text-sm mb-1", children: module.name }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-700 dark:text-blue-300 mb-2", children: module.purpose }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: module.dataTypes }),
                                module.benefit && /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400 mt-1 font-medium", children: [
                                  "✓ ",
                                  module.benefit
                                ] })
                              ] }, moduleIndex)) }),
                              step.transparency && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.transparency.map((item, itemIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { children: item })
                              ] }, itemIndex)) }),
                              step.features && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(Smartphone, { className: "h-3 w-3 text-purple-600 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { children: feature })
                              ] }, featureIndex)) }),
                              step.actions && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: step.actions.map((action, actionIndex) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-red-500 pl-4", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                                  /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-red-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: action.time }),
                                  /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600", children: [
                                    "- ",
                                    action.action
                                  ] })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 mb-1", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Datenverarbeitung:" }),
                                  " ",
                                  action.dataProcessing
                                ] }),
                                action.legalBasis && /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Rechtsgrundlage:" }),
                                  " ",
                                  action.legalBasis
                                ] })
                              ] }, actionIndex)) }),
                              step.documentation && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: step.documentation.map((doc, docIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 dark:bg-gray-700 p-3 rounded", children: [
                                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm mb-1", children: doc.aspect }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: doc.content }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-600 dark:text-blue-400", children: doc.evidence || doc.monitoring || doc.purpose })
                              ] }, docIndex)) }),
                              step.postEmergencyActions && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: step.postEmergencyActions.map((action, actionIndex) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                                  /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-green-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: action.timeline })
                                ] }),
                                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-700 dark:text-gray-300 mb-1", children: action.action }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: action.method || action.scope || action.transparency })
                              ] }, actionIndex)) })
                            ] }, stepIndex))
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200", children: [
                            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2", children: [
                              /* @__PURE__ */ jsx(Target, { className: "h-4 w-4" }),
                              "Ergebnis & Learnings"
                            ] }),
                            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: Object.entries(requirement.realWorldScenario.outcome).map(([key, value]) => /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                              /* @__PURE__ */ jsxs("span", { className: "font-medium capitalize", children: [
                                key.replace(/([A-Z])/g, " $1").trim(),
                                ":"
                              ] }),
                              /* @__PURE__ */ jsx("br", {}),
                              /* @__PURE__ */ jsx("span", { className: "text-green-700 dark:text-green-300", children: value })
                            ] }, key)) }),
                            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                              /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-800 dark:text-green-200", children: "Key Learnings:" }),
                              requirement.realWorldScenario.keyLearnings.map((learning, learningIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
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
        /* @__PURE__ */ jsxs("section", { id: "consent", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "Einwilligungsmanagement im Gesundheitswesen"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: consentManagement.map((consent, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(UserCheck, { className: "h-6 w-6 text-green-600" }),
              consent.scenario
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-red-700", children: "Herausforderung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: consent.challenge })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-700", children: "Lösung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: consent.solution })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-blue-700", children: "Module" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: consent.implementation.modules.map((module, i) => /* @__PURE__ */ jsx("div", { className: "text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded", children: module }, i)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setExpandedSection(expandedSection === `consent-${index}` ? null : `consent-${index}`),
                    className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                    children: [
                      /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                      "Technische Implementation",
                      /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "h-4 w-4 transition-transform",
                        expandedSection === `consent-${index}` && "rotate-180"
                      ) })
                    ]
                  }
                ),
                expandedSection === `consent-${index}` && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    className: "mt-4",
                    children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: consent.implementation.technical }) })
                  }
                )
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "tom", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "Technische und Organisatorische Maßnahmen (TOM) für Healthcare"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: tomMeasures.map((tom, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(tom.icon, { className: "h-6 w-6 text-blue-600" }),
              tom.category
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Technische Maßnahmen" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: tom.measures.map((measure, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: measure })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Healthcare-spezifisch" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 p-3 bg-red-50 dark:bg-red-950/30 rounded-lg", children: tom.healthcareSpecific }),
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
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
                    tom.practicalImplementation.zones && tom.practicalImplementation.zones.map((zone, zoneIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 rounded border", children: [
                      /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: zone.name }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: zone.security }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                        /* @__PURE__ */ jsx("strong", { children: "Zugang:" }),
                        " ",
                        zone.access
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: zone.measures })
                    ] }, zoneIndex)),
                    tom.practicalImplementation.roles && tom.practicalImplementation.roles.map((role, roleIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 rounded border", children: [
                      /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: role.name }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: role.permissions }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                        /* @__PURE__ */ jsx("strong", { children: "Einschränkungen:" }),
                        " ",
                        role.restrictions
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: role.security })
                    ] }, roleIndex)),
                    tom.practicalImplementation.layers && tom.practicalImplementation.layers.map((layer, layerIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 rounded border", children: [
                      /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: layer.name }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: layer.protection }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                        /* @__PURE__ */ jsx("strong", { children: "Nutzen:" }),
                        " ",
                        layer.benefit
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: layer.technology })
                    ] }, layerIndex))
                  ] })
                ] }) })
              ] })
            ] }) })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "dsfa", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "Datenschutz-Folgenabschätzung & Risikoanalyse"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: riskScenarios.map((risk, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-600" }),
                risk.scenario
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(Badge, { variant: "destructive", children: [
                "Risiko-Score: ",
                risk.riskScore,
                "/100"
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 dark:bg-orange-950/30 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-orange-700 dark:text-orange-400 mb-1", children: "Wahrscheinlichkeit" }),
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-orange-800 dark:text-orange-300", children: risk.likelihood })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 dark:bg-red-950/30 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-red-700 dark:text-red-400 mb-1", children: "Auswirkung" }),
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-red-800 dark:text-red-300", children: risk.impact })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-purple-700 dark:text-purple-400 mb-1", children: "Bußgeld" }),
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-purple-800 dark:text-purple-300", children: risk.potentialFine })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700 dark:text-blue-400 mb-1", children: "Betroffene" }),
                  /* @__PURE__ */ jsx("div", { className: "font-bold text-blue-800 dark:text-blue-300", children: risk.affectedPersons })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-green-600" }),
                    "Schutzmaßnahmen"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: risk.mitigationMeasures.map((measure, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: measure })
                  ] }, i)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Clipboard, { className: "h-4 w-4 text-blue-600" }),
                    "Compliance-Maßnahmen"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: risk.complianceActions.map((action, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded", children: [
                    /* @__PURE__ */ jsx(FileCheck, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: action })
                  ] }, i)) })
                ] })
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "implementation", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "Praxis-Implementation & Roadmap"
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
                "Interaktive Compliance-Checkliste"
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
                  "Datenschutzbeauftragte/r bestellt",
                  "Verzeichnis der Verarbeitungstätigkeiten erstellt",
                  "DSFA für Hochrisiko-Verarbeitungen durchgeführt",
                  "Auftragsverarbeitungsverträge aktualisiert"
                ]
              },
              {
                category: "Technische Maßnahmen",
                items: [
                  "Ende-zu-Ende Verschlüsselung implementiert",
                  "Zugriffskontrollsystem eingerichtet",
                  "Backup und Recovery getestet",
                  "Monitoring und Alerting aktiv"
                ]
              },
              {
                category: "Organisatorische Maßnahmen",
                items: [
                  "Mitarbeiterschulungen durchgeführt",
                  "Incident Response Plan erstellt",
                  "Einwilligungsprozesse dokumentiert",
                  "Audit-Verfahren etabliert"
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
          children: /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white overflow-hidden relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/pattern.svg')] opacity-10" }),
            /* @__PURE__ */ jsx(CardContent, { className: "relative p-8 md:p-12 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { scale: 0 },
                  whileInView: { scale: 1 },
                  transition: { type: "spring", duration: 0.8 },
                  children: /* @__PURE__ */ jsx(Heart, { className: "h-16 w-16 mx-auto mb-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Starten Sie Ihre Healthcare DSGVO Journey" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 max-w-3xl mx-auto", children: "Profitieren Sie von unserer 10+ Jahren Expertise in Healthcare Compliance. Von DSGVO Art. 9 über EU AI Act bis hin zu MDR – wir begleiten Sie zur vollständigen Compliance." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=healthcare", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-red-600 hover:bg-gray-100 group shadow-lg",
                    children: [
                      /* @__PURE__ */ jsx(Heart, { className: "mr-2 h-5 w-5" }),
                      "Kostenlose Healthcare-Beratung",
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
                      "Umfassender Healthcare Guide (PDF)"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-8", children: [
                { icon: Heart, title: "Healthcare-Expertise", subtitle: "Spezialisiert auf Gesundheitswesen" },
                { icon: Shield, title: "DSGVO + EU AI Act Ready", subtitle: "Zukunftssichere Compliance" },
                { icon: Award, title: "MDR & ISO 27001 Certified", subtitle: "Höchste Sicherheitsstandards" }
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
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-5 w-5 text-red-600" }),
          "Weiterführende Healthcare-Ressourcen"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/wissen/rechtsprechung/meta-irland-2024", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Gavel, { className: "h-5 w-5 text-red-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Meta Ireland Urteil" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "1,2 Mrd. € Bußgeld-Analyse" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/compliance/eu-ai-act", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-purple-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "EU AI Act Guide" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "KI-Compliance für Healthcare" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement/data-breach-72h", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Timer, { className: "h-5 w-5 text-orange-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Data Breach Response" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "72h Notfall-Leitfaden" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/branchen/gesundheitswesen", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Stethoscope, { className: "h-5 w-5 text-blue-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Healthcare Solutions" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Unsere Produktlösungen" })
          ] }) })
        ] }) })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  HealthcareDsgvoGuide as default
};
