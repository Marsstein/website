import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Stethoscope, CheckCircle2, Heart, ArrowRight, Download, BookOpen, Shield, Settings, Lock, AlertTriangle, CheckSquare, AlertCircle, UserPlus, FileText, Mail, Scale, Database, Lightbulb, ChevronDown, Smartphone, Target, Calendar, CreditCard, Users, Code, Building2, Key, Zap, Clock, Square, ExternalLink, Timer } from "lucide-react";
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
const DatenschutzArztpraxis = () => {
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
    "dateModified": (/* @__PURE__ */ new Date()).toISOString(),
    "inLanguage": "de-DE",
    "about": {
      "@type": "Thing",
      "name": "DSGVO Compliance in Arztpraxen"
    }
  };
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [activeSection, setActiveSection] = useState("overview");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  useEffect(() => {
    const style = document.createElement("style");
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
  const navigationItems = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "patientendaten", label: "Patientendatenverarbeitung", icon: Heart },
    { id: "praxisorganisation", label: "Praxisorganisation", icon: Settings },
    { id: "tom-praxis", label: "TOM für Arztpraxen", icon: Lock },
    { id: "notfallsituationen", label: "Notfallsituationen", icon: AlertTriangle },
    { id: "implementation", label: "Praxis-Leitfaden", icon: CheckSquare }
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
    { label: "DSGVO Art. 9 Compliance", value: 96, color: "text-red-600", trend: "+4%" },
    { label: "Patientendokumentation", value: 98, color: "text-pink-600", trend: "+2%" },
    { label: "Einverständniserklärungen", value: 94, color: "text-rose-600", trend: "+8%" },
    { label: "TOM Implementierung", value: 92, color: "text-red-500", trend: "+6%" },
    { label: "Mitarbeiterschulungen", value: 89, color: "text-orange-500", trend: "+12%" },
    { label: "Audit Readiness", value: 95, color: "text-purple-600", trend: "+3%" }
  ];
  const patientDataProcessing = [
    {
      title: "Erstaufnahme & Anamnese",
      description: "Strukturierte Erfassung der Patientenstammdaten und Krankengeschichte gemäß DSGVO",
      icon: UserPlus,
      legalBasis: "Art. 9 Abs. 2 lit. h DSGVO - Gesundheitsvorsorge",
      dataTypes: ["Personalien", "Kontaktdaten", "Versicherungsdaten", "Anamnese", "Beschwerden"],
      retentionPeriod: "10 Jahre nach letztem Behandlungskontakt",
      specialMeasures: [
        "Doppelte Einverständniserklärung für besondere Gesundheitsdaten",
        "Separate Speicherung von Stammdaten und medizinischen Daten",
        "Verschlüsselte Übertragung zwischen Praxissystemen",
        "Revisionssichere Archivierung"
      ],
      practicalScenario: {
        title: "🏥 Szenario: Neue Patientin mit chronischer Erkrankung",
        context: "Eine 45-jährige Patientin kommt zur Erstuntersuchung mit einer Autoimmunerkrankung.",
        challenge: "Wie erfassen wir alle relevanten Daten DSGVO-konform ohne den Behandlungsablauf zu behindern?",
        solution: {
          step1: {
            title: "📋 Modulare Datenerfassung",
            description: "Gestufter Ansatz für verschiedene Datenkategorien",
            modules: [
              {
                name: "Basis-Stammdaten",
                purpose: "Patientenidentifikation & Abrechnung",
                dataTypes: "Name, Adresse, Geburtsdatum, Versicherung",
                legal: "Erforderlich für Behandlungsvertrag (Art. 6 Abs. 1 lit. b DSGVO)"
              },
              {
                name: "Medizinische Basisdaten",
                purpose: "Aktuelle Behandlung",
                dataTypes: "Aktuelle Beschwerden, Medikation, Allergien",
                legal: "Gesundheitsvorsorge (Art. 9 Abs. 2 lit. h DSGVO)"
              },
              {
                name: "Erweiterte Anamnese",
                purpose: "Umfassende Diagnostik",
                dataTypes: "Vorerkrankungen, Familienanamnese, Sozialanamnese",
                legal: "Explizite Einwilligung (Art. 9 Abs. 2 lit. a DSGVO)"
              }
            ]
          },
          step2: {
            title: "🔒 Datenschutz by Design",
            description: "Technische Umsetzung der Datensparsamkeit",
            implementation: [
              "Automatische Verschlüsselung aller Gesundheitsdaten",
              "Rollenbasierte Zugriffsbeschränkung nach Behandlungsnotwendigkeit",
              "Automatisches Logging aller Datenzugriffe",
              "Separate Speicherung verschiedener Datenkategorien"
            ]
          },
          step3: {
            title: "📱 Digitaler Einverständnisprozess",
            description: "Transparente und benutzerfreundliche Einwilligung",
            features: [
              "Tablet-basiertes System mit visueller Erklärung",
              "Getrennte Einwilligungen für verschiedene Datentypen",
              "Jederzeit widerrufbare Zustimmungen",
              "Automatische Dokumentation aller Einverständnisse"
            ]
          }
        },
        outcome: {
          efficiency: "Erstaufnahme in 15 Minuten statt 30 Minuten",
          compliance: "100% DSGVO-konforme Einverständnisse",
          patientSatisfaction: "92% Zufriedenheit mit Transparenz"
        }
      }
    },
    {
      title: "Behandlungsdokumentation",
      description: "Revisionssichere Erfassung aller Behandlungsmaßnahmen und Befunde",
      icon: FileText,
      legalBasis: "Art. 9 Abs. 2 lit. h DSGVO + Berufsordnung",
      dataTypes: ["Diagnosen", "Therapiemaßnahmen", "Verlaufsdokumentation", "Befunde", "Medikation"],
      retentionPeriod: "10 Jahre, bei Minderjährigen bis zur Volljährigkeit + 10 Jahre",
      specialMeasures: [
        "Elektronische Signatur für alle Einträge",
        "Unveränderbarkeit durch Blockchain-basierte Integrität",
        "Automatische Backup-Erstellung nach jeder Sitzung",
        "Vollständige Audit-Trail-Dokumentation"
      ],
      practicalScenario: {
        title: "🩺 Szenario: Langzeittherapie mit mehreren Fachärzten",
        context: "Ein Patient wird über 6 Monate von verschiedenen Ärzten der Praxis behandelt.",
        challenge: "Wie gewährleisten wir einheitliche, vollständige Dokumentation bei mehreren Behandlern?",
        solution: {
          step1: {
            title: "📊 Strukturierte Dokumentationsvorlage",
            description: "Einheitliche Erfassung durch alle Behandler",
            structure: [
              "Pflichtfelder für jede Behandlung (SOAP-Schema)",
              "Dropdown-Menüs für häufige Diagnosen/Therapien",
              "Freitextfelder für individuelle Besonderheiten",
              "Automatische Verlinkung zu Vorbefunden"
            ]
          },
          step2: {
            title: "🔄 Automatisierte Qualitätskontrolle",
            description: "System-unterstützte Vollständigkeitsprüfung",
            controls: [
              "Warnung bei unvollständiger Dokumentation vor Sitzungsende",
              "Automatische Erinnerung an Folgeuntersuchungen",
              "Plausibilitätsprüfung bei Medikamentenverschreibungen",
              "Integration mit Laborsystem für automatischen Befund-Import"
            ]
          }
        }
      }
    },
    {
      title: "Überweisung & Arztbriefe",
      description: "Sichere Kommunikation zwischen Behandlern unter Wahrung der ärztlichen Schweigepflicht",
      icon: Mail,
      legalBasis: "Art. 9 Abs. 2 lit. h DSGVO - Gesundheitsversorgung",
      dataTypes: ["Befunde", "Diagnosen", "Therapieempfehlungen", "Anamnese (relevante Teile)"],
      retentionPeriod: "Kopien: 10 Jahre in Patientenakte",
      specialMeasures: [
        "Verschlüsselte E-Mail-Kommunikation (S/MIME oder PGP)",
        "Sichere Fax-Übertragung mit Empfangsbestätigung",
        "Minimierung der übertragenen Daten auf behandlungsrelevante Inhalte",
        "Dokumentation aller Datenübermittlungen"
      ]
    }
  ];
  const practiceOrganization = [
    {
      title: "Terminmanagement & Patientenkommunikation",
      icon: Calendar,
      measures: [
        "Verschlüsselte Online-Terminbuchung mit minimaler Datenerfassung",
        'SMS-Erinnerungen nur mit Pseudonymen ("Ihr Termin morgen")',
        "E-Mail-Kommunikation ausschließlich über sichere Kanäle",
        "Wartezimmer-Organisation ohne Namensaufrufe"
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
      title: "Abrechnung & Kostenträger",
      icon: CreditCard,
      measures: [
        "Getrennte Systeme für medizinische Daten und Abrechnungsdaten",
        "Pseudonymisierte Übermittlung an Abrechnungsdienstleister",
        "Verschlüsselte Kommunikation mit Krankenkassen",
        "Sichere Aufbewahrung der Belege nach GoB"
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
      title: "Personalmanagement",
      icon: Users,
      measures: [
        "Verschwiegenheitserklärungen für alle Mitarbeiter",
        "Rollenbasierte Zugriffskontrolle auf Patientendaten",
        "Regelmäßige Datenschutzschulungen",
        "Sichere Löschung bei Personalwechsel"
      ]
    }
  ];
  const tomMeasuresPractice = [
    {
      category: "Physische Sicherheit",
      icon: Building2,
      description: "Schutz der Praxisräume und physischen Datenträger",
      measures: [
        "Abschließbare Patientenschränke in jedem Behandlungsraum",
        "Zentraler, gesicherter Serverraum mit Klimaanlage",
        "Sichtschutz für Bildschirme im Empfangsbereich",
        "Sichere Vernichtung von Papierdokumenten (P-4 Standard)"
      ],
      practicalTips: [
        "Bildschirme automatisch sperren nach 5 Min Inaktivität",
        "Patientenakten niemals unbeaufsichtigt liegen lassen",
        "Drucker in sicheren Bereichen positionieren",
        "Backup-Medien in feuerfestem Tresor lagern"
      ]
    },
    {
      category: "IT-Sicherheit",
      icon: Shield,
      description: "Technische Schutzmaßnahmen für digitale Patientendaten",
      measures: [
        "Firewall mit Intrusion Detection System",
        "Regelmäßige Sicherheitsupdates für alle Systeme",
        "Antivirensoftware mit Echtzeit-Scanning",
        "Verschlüsselte Festplatten (BitLocker/LUKS)"
      ],
      practicalTips: [
        "Automatische Updates außerhalb der Sprechzeiten",
        "Separate VLAN für Praxisgeräte",
        "USB-Ports deaktivieren wo nicht benötigt",
        "Mobile Geräte über MDM verwalten"
      ]
    },
    {
      category: "Zugriffskontrolle",
      icon: Key,
      description: "Kontrolle über den Zugang zu Patientendaten",
      measures: [
        "Individuelle Benutzerkonten für jeden Mitarbeiter",
        "Zwei-Faktor-Authentifizierung für kritische Systeme",
        "Automatische Sperrung bei Fehlversuchen",
        "Regelmäßige Überprüfung der Zugriffsrechte"
      ],
      practicalTips: [
        "Passwort-Manager für alle Mitarbeiter bereitstellen",
        "Notfallzugänge nur für Praxisinhaber",
        "Zeitbasierte Zugriffsbeschränkungen",
        "Sofortige Deaktivierung bei Personalwechsel"
      ]
    }
  ];
  const emergencyScenarios = [
    {
      scenario: "Notfallbehandlung bewusstloser Patient",
      urgency: "Kritisch",
      legalBasis: "Art. 9 Abs. 2 lit. c DSGVO - Lebenswichtige Interessen",
      immediateActions: [
        "Behandlung ohne Einverständnis bei vitaler Indikation",
        "Minimale erforderliche Datenverarbeitung",
        "Notfalldokumentation für später Nachvollziehbarkeit",
        "Angehörige informieren sobald möglich"
      ],
      followUpActions: [
        "Patienteninformation innerhalb 72h nach Stabilisation",
        "Nachträgliche Einverständniserklärung einholen",
        "Überschüssige Daten löschen nach Stabilisation",
        "Vollständige Dokumentation des Notfalls"
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
      scenario: "IT-Systemausfall während Sprechstunde",
      urgency: "Hoch",
      legalBasis: "Behandlungsvertrag - Notfall-Dokumentation",
      immediateActions: [
        "Umstellung auf Papier-Dokumentation",
        "Sichere Aufbewahrung der handschriftlichen Notizen",
        "Information der Patienten über temporäre Maßnahmen",
        "Priorisierung dringender Behandlungen"
      ],
      followUpActions: [
        "Digitale Nacherfassung binnen 24h nach Systemwiederherstellung",
        "Abgleich zwischen Papier- und digitaler Dokumentation",
        "Sichere Vernichtung der Papiernotizen nach Übertragung",
        "Analyse der Ausfallursache und Präventionsmaßnahmen"
      ]
    }
  ];
  const implementationGuide = [
    {
      phase: "Bestandsaufnahme & Analyse",
      duration: "2-3 Wochen",
      color: "blue",
      tasks: [
        "Datenschutz-Audit der aktuellen Praxis",
        "Identifikation aller Datenverarbeitungsprozesse",
        "Bewertung der bestehenden TOM-Maßnahmen",
        "Gap-Analyse zu DSGVO-Anforderungen",
        "Risikoanalyse für die Praxis"
      ],
      deliverables: [
        "Datenschutz-Auditbericht",
        "Verzeichnis der Verarbeitungstätigkeiten (VVT)",
        "TOM-Bewertung mit Handlungsempfehlungen"
      ]
    },
    {
      phase: "Rechtliche Grundlagen",
      duration: "1-2 Wochen",
      color: "green",
      tasks: [
        "Datenschutzbeauftragten bestellen (falls erforderlich)",
        "Patienteneinverständniserklärungen überarbeiten",
        "Mitarbeiterverträge um Datenschutzklauseln ergänzen",
        "Auftragsverarbeitungsverträge mit Dienstleistern",
        "Datenschutzerklärung für Praxis-Website"
      ],
      deliverables: [
        "DSGVO-konforme Einverständniserklärungen",
        "Auftragsverarbeitungsverträge",
        "Mitarbeiterschulung-Dokumentation"
      ]
    },
    {
      phase: "Technische Umsetzung",
      duration: "3-4 Wochen",
      color: "orange",
      tasks: [
        "Praxissoftware auf DSGVO-Compliance prüfen",
        "Verschlüsselung für alle Patientendaten aktivieren",
        "Backup-System einrichten und testen",
        "Zugriffskontrolle implementieren",
        "Sichere Kommunikationswege etablieren"
      ],
      deliverables: [
        "DSGVO-konforme IT-Infrastruktur",
        "Backup-Konzept mit Wiederherstellungstest",
        "Sichere Kommunikationskanäle"
      ]
    },
    {
      phase: "Organisatorische Maßnahmen",
      duration: "2-3 Wochen",
      color: "purple",
      tasks: [
        "Mitarbeiterschulungen durchführen",
        "Arbeitsanweisungen für Datenschutz erstellen",
        "Incident-Response-Plan entwickeln",
        "Regelmäßige Compliance-Checks etablieren",
        "Dokumentation aller Maßnahmen"
      ],
      deliverables: [
        "Geschulte Mitarbeiter mit Nachweisen",
        "Datenschutz-Arbeitsanweisungen",
        "Incident-Response-Plan"
      ]
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
    const totalItems = 28;
    return Math.round(checkedItems.size / totalItems * 100);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Datenschutz Arztpraxis DSGVO – Praxis-Guide für Ärzte 2024" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "DSGVO für Arztpraxen: ✓ Patientendaten sicher verwalten ✓ Einwilligungen korrekt ✓ TOM-Checklisten ✓ Schweigepflicht digital. Jetzt Praxis-Guide lesen!" }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "datenschutz arztpraxis, dsgvo arzt, patientendatenschutz, einwilligung patient, tom arztpraxis, schweigepflicht dsgvo" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://marsstein.com/wissen/branchen/datenschutz-arztpraxis" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Datenschutz in der Arztpraxis - DSGVO Compliance Guide" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Praxisleitfaden für Datenschutz in Arztpraxen. Patientendaten DSGVO-konform verarbeiten, TOM implementieren." }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://marsstein.com/wissen/branchen/datenschutz-arztpraxis" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(structuredData) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
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
                        /* @__PURE__ */ jsx(Stethoscope, { className: "h-4 w-4" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Datenschutz für Arztpraxen" })
                      ] }),
                      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
                        "Datenschutz in der",
                        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block mt-2", children: "Arztpraxis" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Kompletter DSGVO-Leitfaden für niedergelassene Ärzte. Von der Patientenaufnahme bis zur sicheren Archivierung – alle Datenschutzaspekte praxisnah erklärt." }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "DSGVO-konforme Patientendatenverarbeitung" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Sichere Praxisorganisation und IT-Systeme" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Notfallsituationen rechtssicher bewältigen" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                        /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=healthcare", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-red-600 to-pink-600 text-white hover:opacity-90 group tap-target min-h-[48px]", children: [
                          /* @__PURE__ */ jsx(Heart, { className: "mr-2 h-5 w-5" }),
                          "Praxis-Beratung buchen",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                        ] }) }),
                        /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group tap-target min-h-[48px]", children: [
                          /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                          "Arztpraxis DSGVO-Checkliste"
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
                          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Praxis Compliance Status" }),
                          /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-700", children: [
                            getCompletionPercentage(),
                            "% Implementiert"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: complianceStats.slice(0, 6).map((stat, index) => /* @__PURE__ */ jsxs(
                          motion.div,
                          {
                            whileHover: { scale: 1.05 },
                            className: "p-3 bg-white dark:bg-gray-900 rounded-lg border text-center cursor-pointer",
                            children: [
                              /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-gray-600 dark:text-gray-400 mb-1", children: stat.label.split(" ")[0] }),
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
                            /* @__PURE__ */ jsx(Stethoscope, { className: "h-4 w-4 text-red-500 animate-pulse" }),
                            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Praxis Ready" })
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
        /* @__PURE__ */ jsx("section", { className: "py-8 bg-white dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-6", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5 text-red-600" }),
            "Inhaltsverzeichnis"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: navigationItems.map((item) => /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => scrollToSection(item.id),
              className: "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left tap-target",
              children: [
                /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5 text-red-600 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: item.label })
              ]
            },
            item.id
          )) })
        ] }) }) }) }),
        /* @__PURE__ */ jsx("nav", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: navigationItems.map((item, index) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              scrollToSection(item.id);
              setActiveSection(item.id);
            },
            "aria-label": `Zu ${item.label} springen`,
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
          /* @__PURE__ */ jsxs("section", { id: "overview", className: "space-y-8 scroll-mt-32", "aria-label": "Überblick Datenschutz Arztpraxis", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Datenschutz in der Arztpraxis - Überblick"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-red-600" }),
                  "DSGVO für niedergelassene Ärzte"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Arztpraxen verarbeiten täglich hochsensible Gesundheitsdaten, die unter die besonderen Kategorien personenbezogener Daten (Art. 9 DSGVO) fallen und höchste Schutzanforderungen haben." }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                    "Ärztliche Schweigepflicht trifft auf DSGVO-Anforderungen",
                    "Besondere Rechtsgrundlagen für Gesundheitsdaten erforderlich",
                    "Erhöhte technische und organisatorische Maßnahmen (TOM)",
                    "Spezielle Einverständniserklärungen für Patienten"
                  ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx(Stethoscope, { className: "h-4 w-4 text-red-600 flex-shrink-0 mt-1" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                  ] }, i)) }),
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-600" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-800 dark:text-red-400", children: "Besondere Risiken" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 dark:text-red-300", children: "Bußgelder bis zu 20 Mio. € oder 4% des Jahresumsatzes bei Verstößen gegen Art. 9 DSGVO (Besondere Kategorien personenbezogener Daten)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Heart, { className: "h-6 w-6 text-pink-600" }),
                  "Praxis-spezifische Herausforderungen"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Kleine und mittlere Arztpraxen stehen vor besonderen Herausforderungen bei der DSGVO-Umsetzung, die praktikable Lösungen erfordern." }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                    "Begrenzte Ressourcen für IT und Datenschutz",
                    "Verschiedene Praxissoftware-Systeme mit unterschiedlicher DSGVO-Reife",
                    "Mitarbeiterschulungen in kleinen Teams organisieren",
                    "Balance zwischen Datenschutz und Behandlungsqualität"
                  ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-orange-600 flex-shrink-0 mt-1" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                  ] }, i)) }),
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-800 dark:text-green-400", children: "Praxistaugliche Lösungen" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 dark:text-green-300", children: "Dieser Leitfaden bietet konkrete, umsetzbare Lösungen speziell für den Praxisalltag ohne übermäßigen Verwaltungsaufwand." })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "patientendaten", className: "space-y-8 scroll-mt-32", "aria-label": "Patientendatenverarbeitung", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Patientendatenverarbeitung in der Praxis"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "space-y-8", children: patientDataProcessing.map((process, index) => /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: index * 0.1 },
                children: /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-pink-500", children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                    /* @__PURE__ */ jsxs(CardTitle, { className: "text-xl pr-4 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(process.icon, { className: "h-6 w-6 text-pink-600" }),
                      process.title
                    ] }),
                    /* @__PURE__ */ jsx(Badge, { className: "flex-shrink-0", children: process.retentionPeriod })
                  ] }) }),
                  /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 leading-relaxed", children: process.description }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4 text-blue-600" }),
                          "Rechtsgrundlage"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 dark:text-blue-300 font-medium", children: process.legalBasis }) })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Database, { className: "h-4 w-4 text-purple-600" }),
                          "Datenarten"
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "space-y-1", children: process.dataTypes.map((dataType, i) => /* @__PURE__ */ jsx("div", { className: "text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded", children: dataType }, i)) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-green-600" }),
                        "Besondere Schutzmaßnahmen"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: process.specialMeasures.map((measure, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm", children: measure })
                      ] }, i)) })
                    ] }),
                    process.practicalScenario && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                      /* @__PURE__ */ jsxs(
                        "button",
                        {
                          onClick: () => setExpandedSection(expandedSection === `patient-${index}` ? null : `patient-${index}`),
                          className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                          children: [
                            /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4" }),
                            "Praxis-Szenario anzeigen",
                            /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                              "h-4 w-4 transition-transform",
                              expandedSection === `patient-${index}` && "rotate-180"
                            ) })
                          ]
                        }
                      ),
                      expandedSection === `patient-${index}` && /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          initial: { opacity: 0, height: 0 },
                          animate: { opacity: 1, height: "auto" },
                          className: "mt-4",
                          children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-6 border border-red-200 dark:border-red-800", children: [
                            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4 text-red-900 dark:text-red-100", children: process.practicalScenario.title }),
                            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                              /* @__PURE__ */ jsxs("div", { className: "bg-white/80 dark:bg-gray-900/80 rounded-lg p-4", children: [
                                /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                                  /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" }),
                                  "Kontext"
                                ] }),
                                /* @__PURE__ */ jsx("p", { className: "text-sm", children: process.practicalScenario.context })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "bg-amber-50 dark:bg-amber-950/30 rounded-lg p-4 border border-amber-200", children: [
                                /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 text-amber-800 dark:text-amber-200 flex items-center gap-2", children: [
                                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
                                  "Herausforderung"
                                ] }),
                                /* @__PURE__ */ jsx("p", { className: "text-sm text-amber-700 dark:text-amber-300", children: process.practicalScenario.challenge })
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                                /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 dark:text-green-200 flex items-center gap-2", children: [
                                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
                                  "Lösungsansatz"
                                ] }),
                                Object.values(process.practicalScenario.solution).map((step, stepIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-4 rounded-lg border", children: [
                                  /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 dark:text-gray-100 mb-3", children: step.title }),
                                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: step.description }),
                                  step.modules && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: step.modules.map((module, moduleIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                                    /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-900 dark:text-blue-100 text-sm mb-1", children: module.name }),
                                    /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-700 dark:text-blue-300 mb-2", children: module.purpose }),
                                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: module.dataTypes }),
                                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400 font-medium", children: [
                                      "⚖️ ",
                                      module.legal
                                    ] })
                                  ] }, moduleIndex)) }),
                                  step.implementation && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: step.implementation.map((impl, implIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                    /* @__PURE__ */ jsx(Settings, { className: "h-3 w-3 text-blue-600 mt-1 flex-shrink-0" }),
                                    /* @__PURE__ */ jsx("span", { children: impl })
                                  ] }, implIndex)) }),
                                  step.features && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: step.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                    /* @__PURE__ */ jsx(Smartphone, { className: "h-3 w-3 text-purple-600 mt-1 flex-shrink-0" }),
                                    /* @__PURE__ */ jsx("span", { children: feature })
                                  ] }, featureIndex)) })
                                ] }, stepIndex))
                              ] }),
                              /* @__PURE__ */ jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200", children: [
                                /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2", children: [
                                  /* @__PURE__ */ jsx(Target, { className: "h-4 w-4" }),
                                  "Ergebnis"
                                ] }),
                                /* @__PURE__ */ jsx("div", { className: "space-y-2 text-sm", children: Object.entries(process.practicalScenario.outcome).map(([key, value]) => /* @__PURE__ */ jsxs("div", { children: [
                                  /* @__PURE__ */ jsxs("span", { className: "font-medium capitalize text-green-700 dark:text-green-300", children: [
                                    key.replace(/([A-Z])/g, " $1").trim(),
                                    ":"
                                  ] }),
                                  " ",
                                  /* @__PURE__ */ jsx("span", { className: "text-green-600 dark:text-green-400", children: value })
                                ] }, key)) })
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
          /* @__PURE__ */ jsxs("section", { id: "praxisorganisation", className: "space-y-8 scroll-mt-32", "aria-label": "Praxisorganisation", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Praxisorganisation & Verwaltung"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "space-y-8", children: practiceOrganization.map((org, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(org.icon, { className: "h-6 w-6 text-blue-600" }),
                org.title
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Datenschutzmaßnahmen" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: org.measures.map((measure, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: measure })
                  ] }, i)) })
                ] }),
                org.implementation && /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setExpandedSection(expandedSection === `org-${index}` ? null : `org-${index}`),
                      className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                      children: [
                        /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                        "Technische Umsetzung anzeigen",
                        /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                          "h-4 w-4 transition-transform",
                          expandedSection === `org-${index}` && "rotate-180"
                        ) })
                      ]
                    }
                  ),
                  expandedSection === `org-${index}` && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      className: "mt-4",
                      children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: org.implementation }) })
                    }
                  )
                ] })
              ] })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "tom-praxis", className: "space-y-8 scroll-mt-32", "aria-label": "Technische und Organisatorische Maßnahmen für Arztpraxen", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "TOM-Maßnahmen für Arztpraxen"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "space-y-8", children: tomMeasuresPractice.map((tom, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(tom.icon, { className: "h-6 w-6 text-red-600" }),
                tom.category
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: tom.description }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Technische Maßnahmen" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: tom.measures.map((measure, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: measure })
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Praktische Tipps" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: tom.practicalTips.map((tip, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded", children: [
                      /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: tip })
                    ] }, i)) })
                  ] })
                ] })
              ] })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "notfallsituationen", className: "space-y-8 scroll-mt-32", "aria-label": "Notfallsituationen", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Notfallsituationen & Datenschutz"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "space-y-8", children: emergencyScenarios.map((emergency, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6 border-l-4 border-orange-500", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-orange-600" }),
                  emergency.scenario
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsx(Badge, { variant: "destructive", children: emergency.urgency }) })
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-blue-800 dark:text-blue-200 mb-1", children: "Rechtsgrundlage" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700 dark:text-blue-300", children: emergency.legalBasis })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4 text-red-600" }),
                      "Sofortmaßnahmen"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: emergency.immediateActions.map((action, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-2 bg-red-50 dark:bg-red-950/30 rounded", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: action })
                    ] }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-green-600" }),
                      "Nachfolgende Maßnahmen"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: emergency.followUpActions.map((action, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: action })
                    ] }, i)) })
                  ] })
                ] }),
                emergency.documentation && /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs(
                    "button",
                    {
                      onClick: () => setExpandedSection(expandedSection === `emergency-${index}` ? null : `emergency-${index}`),
                      className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                      children: [
                        /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                        "Dokumentationsvorlage anzeigen",
                        /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                          "h-4 w-4 transition-transform",
                          expandedSection === `emergency-${index}` && "rotate-180"
                        ) })
                      ]
                    }
                  ),
                  expandedSection === `emergency-${index}` && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      initial: { opacity: 0, height: 0 },
                      animate: { opacity: 1, height: "auto" },
                      className: "mt-4",
                      children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: emergency.documentation }) })
                    }
                  )
                ] })
              ] })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "implementation", className: "space-y-8 scroll-mt-32", "aria-label": "Praxis-Leitfaden", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Schritt-für-Schritt Implementierungsguide"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12", children: implementationGuide.map((phase, index) => /* @__PURE__ */ jsx(
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
                  "Praxis Compliance-Checkliste"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600", children: [
                  "Implementierungsfortschritt: ",
                  getCompletionPercentage(),
                  "% abgeschlossen"
                ] }),
                /* @__PURE__ */ jsx(Progress, { value: getCompletionPercentage(), className: "h-2" })
              ] }),
              /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", children: [
                {
                  category: "Rechtliche Grundlagen",
                  items: [
                    "Datenschutzbeauftragte/r bestellt (falls erforderlich)",
                    "Verzeichnis der Verarbeitungstätigkeiten (VVT) erstellt",
                    "DSFA für kritische Verarbeitungen durchgeführt",
                    "Patienteneinverständniserklärungen überarbeitet",
                    "Auftragsverarbeitungsverträge mit Dienstleistern",
                    "Mitarbeiterverträge um Datenschutzklauseln ergänzt",
                    "Datenschutzerklärung für Praxis-Website erstellt"
                  ]
                },
                {
                  category: "Technische Maßnahmen",
                  items: [
                    "Praxissoftware auf DSGVO-Compliance geprüft",
                    "Verschlüsselung für alle Patientendaten aktiviert",
                    "Backup-System eingerichtet und getestet",
                    "Firewall und Antivirensoftware installiert",
                    "Zugriffskontrolle mit individuellen Benutzerkonten",
                    "Zwei-Faktor-Authentifizierung implementiert",
                    "Sichere E-Mail-Kommunikation eingerichtet"
                  ]
                },
                {
                  category: "Organisatorische Maßnahmen",
                  items: [
                    "Mitarbeiterschulungen durchgeführt",
                    "Arbeitsanweisungen für Datenschutz erstellt",
                    "Incident-Response-Plan entwickelt",
                    "Physische Sicherheitsmaßnahmen umgesetzt",
                    "Regelmäßige Compliance-Checks etabliert",
                    "Sichere Vernichtung von Papierdokumenten organisiert",
                    "Notfallprozeduren dokumentiert"
                  ]
                },
                {
                  category: "Praxisorganisation",
                  items: [
                    "Wartezimmer-Organisation ohne Namensaufrufe",
                    "Sichere Terminvergabe implementiert",
                    "Datenschutzkonforme Abrechnung sichergestellt",
                    "Praxisräume sichtschutzoptimiert",
                    "Patientenakte-Aufbewahrung reorganisiert",
                    "Kommunikation mit Kostenträgern verschlüsselt",
                    "Überweisung und Arztbriefe sicher übertragen"
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
                    children: /* @__PURE__ */ jsx(Stethoscope, { className: "h-16 w-16 mx-auto mb-6 text-white" })
                  }
                ),
                /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Machen Sie Ihre Arztpraxis DSGVO-konform" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 max-w-3xl mx-auto", children: "Profitieren Sie von unserer langjährigen Expertise im Healthcare-Datenschutz. Wir begleiten Sie sicher durch alle Compliance-Anforderungen." }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                  /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=healthcare", children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "bg-white text-red-600 hover:bg-gray-100 group shadow-lg",
                      children: [
                        /* @__PURE__ */ jsx(Stethoscope, { className: "mr-2 h-5 w-5" }),
                        "Kostenlose Praxis-Beratung",
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
                        "Arztpraxis DSGVO-Handbuch (PDF)"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-8", children: [
                  { icon: Heart, title: "Praxis-Expertise", subtitle: "Spezialisiert auf niedergelassene Ärzte" },
                  { icon: Shield, title: "DSGVO Art. 9 Ready", subtitle: "Besondere Kategorien-Compliance" },
                  { icon: CheckCircle2, title: "Praxistaugliche Lösungen", subtitle: "Ohne übermäßigen Aufwand" }
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
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/gesundheitswesen-dsgvo", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors group-hover:shadow-md", children: [
              /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5 text-red-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Healthcare DSGVO Guide" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Umfassender Compliance-Guide" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-pflege", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-pink-50 rounded-lg border border-pink-200 hover:border-pink-300 transition-colors group-hover:shadow-md", children: [
              /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-pink-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Datenschutz Pflege" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Speziell für Pflegeeinrichtungen" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement/data-breach-72h", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md", children: [
              /* @__PURE__ */ jsx(Timer, { className: "h-5 w-5 text-orange-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Data Breach Response" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "72h Notfall-Leitfaden" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/branchen/gesundheitswesen", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md", children: [
              /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-blue-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Healthcare Solutions" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Unsere Produkte für Praxen" })
            ] }) })
          ] }) })
        ] }) }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-12 bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Verwandte Compliance-Themen" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-pflege", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2", children: "Datenschutz in der Pflege" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "DSGVO-Compliance für Pflegeeinrichtungen" })
            ] }) }) }),
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/logistics-compliance", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2", children: "Logistics Compliance" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "DSGVO im Supply Chain Management" })
            ] }) }) }),
            /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo-compliance", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2", children: "DSGVO Grundlagen" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Basiswissen zur EU-Datenschutzverordnung" })
            ] }) }) })
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  DatenschutzArztpraxis as default
};
