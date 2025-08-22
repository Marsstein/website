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
import { Heart, CheckCircle2, ArrowRight, Download, Home, BookOpen, Shield, Scale, UserCheck, Settings, BarChart3, Code, AlertTriangle, Users, Cpu, Lightbulb, FileText, Euro, ChevronDown, Smartphone, Target, Star, Building2, FileCheck, MessageSquare, Clipboard, Clock, CheckSquare, Square, Award, ExternalLink, Stethoscope, Timer } from "lucide-react";
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
const DatenschutzPflege = () => {
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
    "dateModified": (/* @__PURE__ */ new Date()).toISOString(),
    "inLanguage": "de-DE",
    "about": {
      "@type": "Thing",
      "name": "DSGVO Compliance in Pflegeeinrichtungen"
    }
  };
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [activeSection, setActiveSection] = useState("ueberblick");
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
    { id: "ueberblick", label: "Überblick", icon: Shield },
    { id: "rechtliche-grundlagen", label: "Rechtliche Grundlagen", icon: Scale },
    { id: "einwilligungsmanagement", label: "Einwilligungsmanagement", icon: UserCheck },
    { id: "tom-pflege", label: "TOM Pflege", icon: Settings },
    { id: "dsfa-risiken", label: "DSFA & Risiken", icon: BarChart3 },
    { id: "praxis-umsetzung", label: "Praxis-Umsetzung", icon: Code }
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
    { label: "Pflegedokumentation DSGVO", value: 89, color: "text-red-600", trend: "+12%" },
    { label: "Einwilligungsmanagement", value: 85, color: "text-pink-600", trend: "+18%" },
    { label: "Bewohnerschutz TOM", value: 92, color: "text-rose-600", trend: "+9%" },
    { label: "Angehörigen-Kommunikation", value: 87, color: "text-red-500", trend: "+15%" },
    { label: "Digitale Archivierung", value: 83, color: "text-orange-500", trend: "+22%" },
    { label: "Notfall-Compliance", value: 95, color: "text-purple-600", trend: "+6%" }
  ];
  const legalRequirements = [
    {
      title: "Art. 9 DSGVO - Gesundheitsdaten in der Pflege",
      description: "Besondere Kategorien personenbezogener Daten erfordern spezielle Rechtsgrundlagen in Pflegeeinrichtungen",
      examples: ["Medizinische Diagnosen und Behandlungen", "Pflegebedürftigkeitsstufen", "Medikamentenpläne", "Vitalwerte und Monitoring-Daten"],
      risk: "Kritisch",
      fineExample: "Bis zu 20 Mio. € oder 4% des Jahresumsatzes",
      realWorldScenario: {
        title: "🏠 Praxis-Szenario: Digitale Pflegedokumentation",
        context: "Ein 150-Betten-Pflegeheim führt ein digitales Dokumentationssystem ein. Pflegekräfte dokumentieren täglich Medikamentengabe, Vitalwerte und Pflegehandlungen digital.",
        challenge: "Wie kann das Pflegeheim die rechtssichere Dokumentation gewährleisten, während gleichzeitig der Datenschutz der Bewohner maximiert wird?",
        solution: {
          step1: {
            title: "📋 Rollenbasiertes Zugriffskonzept",
            description: "Differenzierte Berechtigungen je nach Funktion im Pflegeteam",
            roles: [
              {
                name: "Pflegefachkräfte",
                access: "Vollzugriff auf zugewiesene Bewohner",
                restrictions: "Nur während der Schicht aktiv",
                documentation: "Alle Pflegehandlungen und Medikamentengabe"
              },
              {
                name: "Betreuungskräfte",
                access: "Basis-Informationen und Aktivitäten",
                restrictions: "Keine medizinischen Daten",
                documentation: "Soziale Betreuung und Wohlbefinden"
              },
              {
                name: "Verwaltung",
                access: "Abrechnungsrelevante Daten",
                restrictions: "Keine Gesundheitsdaten sichtbar",
                documentation: "Aufenthaltsdauer und Pflegestufen"
              },
              {
                name: "Ärzte",
                access: "Medizinische Daten bei Behandlung",
                restrictions: "Nur bei aktiver Behandlung",
                documentation: "Verordnungen und Diagnosen"
              }
            ]
          },
          step2: {
            title: "🔒 Technische Schutzmaßnahmen",
            description: "Mehrstufige Sicherheitsarchitektur für Pflegedaten",
            measures: [
              {
                level: "Eingabeebene",
                protection: "Biometrische Anmeldung für Pflegekräfte",
                benefit: "Eindeutige Zuordnung aller Dokumentationen",
                implementation: "Fingerprint + PIN-Kombination"
              },
              {
                level: "Übertragungsebene",
                protection: "Ende-zu-Ende-Verschlüsselung zwischen Stationen",
                benefit: "Schutz bei WLAN-Übertragung",
                implementation: "WPA3 + zusätzliche VPN-Tunnel"
              },
              {
                level: "Speicherebene",
                protection: "Feld-level Encryption für Gesundheitsdaten",
                benefit: "Granularer Schutz sensibler Informationen",
                implementation: "AES-256 für alle Patientendaten"
              },
              {
                level: "Archivebene",
                protection: "Unveränderbare Langzeitarchivierung",
                benefit: "Rechtssichere Aufbewahrung über 30 Jahre",
                implementation: "Blockchain-basierte Integrität"
              }
            ]
          },
          step3: {
            title: "📱 Benutzerfreundliche Compliance",
            description: "Einfache Handhabung trotz hoher Sicherheitsanforderungen",
            features: [
              "One-Click-Dokumentation häufiger Pflegehandlungen",
              "Automatische Zeitstempelung aller Einträge",
              "Spracherkennung für Notfall-Dokumentation",
              "Mobile Tablets für Dokumentation am Bewohnerzimmer"
            ]
          }
        },
        outcome: {
          efficiency: "35% weniger Dokumentationsaufwand bei höherer Qualität",
          compliance: "98% DSGVO-konforme Dokumentation durch Automation",
          satisfaction: "Pflegekräfte-Zufriedenheit +40% durch vereinfachte Abläufe"
        },
        keyLearnings: [
          "Technische Lösungen müssen die Pflege-Realität berücksichtigen",
          "Automatisierung reduziert menschliche Fehler erheblich",
          "Biometrische Authentifizierung wird von Pflegekräften gut angenommen",
          "Mobile Dokumentation verbessert Bewohner-Pflegekraft-Interaktion"
        ]
      }
    },
    {
      title: "Einwilligungsmanagement bei eingeschränkter Geschäftsfähigkeit",
      description: "Besondere Herausforderungen bei Demenz, geistiger Behinderung oder rechtlicher Betreuung",
      examples: ["Betreuungsrechtliche Einwilligungen", "Angehörigen-Vollmachten", "Notfall-Situationen ohne Einwilligung", "Widerruf bei fortschreitender Demenz"],
      risk: "Hoch",
      fineExample: "Bis zu 10 Mio. € bei fehlerhaftem Einwilligungsmanagement",
      realWorldScenario: {
        title: "🧠 Praxis-Szenario: Demenz-Station Einwilligungsmanagement",
        context: "Eine spezialisierte Demenz-Station mit 40 Bewohnern muss verschiedene Einwilligungssituationen rechtssicher handhaben.",
        challenge: "Wie können Einwilligungen bei fortschreitender Demenz rechtskonform verwaltet werden?",
        solution: {
          step1: {
            title: "📋 Gestuftes Einwilligungsmodell",
            description: "Anpassung der Einwilligung an den Krankheitsverlauf",
            stages: [
              {
                stage: "Frühe Demenz",
                capacity: "Eingeschränkt einwilligungsfähig",
                approach: "Assistierte Einwilligung mit vereinfachten Erklärungen",
                documentation: "Video-dokumentierte Aufklärung und Einwilligung"
              },
              {
                stage: "Mittlere Demenz",
                capacity: "Situativ einwilligungsfähig",
                approach: "Tagesform-abhängige Einwilligung mit Betreuer",
                documentation: "Mehrfache Bestätigung in luciden Momenten"
              },
              {
                stage: "Schwere Demenz",
                capacity: "Nicht einwilligungsfähig",
                approach: "Gesetzlicher Betreuer oder Vorsorgevollmacht",
                documentation: "Stellvertretende Einwilligung mit Begründung"
              }
            ]
          },
          step2: {
            title: "👨‍👩‍👧‍👦 Angehörigen-Integration",
            description: "Strukturierte Einbindung von Angehörigen und Betreuern",
            process: [
              "Regelmäßige Aufklärungs- und Einwilligungsrunden",
              "Transparente Kommunikation über Datenverarbeitung",
              "Dokumentation aller Beteiligten und ihrer Rollen",
              "Widerrufsrecht und dessen praktische Umsetzung"
            ]
          },
          step3: {
            title: "⚖️ Rechtliche Absicherung",
            description: "Compliance mit Betreuungsrecht und DSGVO",
            measures: [
              "Enge Zusammenarbeit mit Betreuungsgerichten",
              "Regelmäßige juristische Prüfung der Einwilligungen",
              "Dokumentation der Einwilligungsfähigkeits-Bewertung",
              "Notfall-Prozeduren für dringende medizinische Situationen"
            ]
          }
        },
        outcome: {
          legalSecurity: "Null Beanstandungen bei Heimaufsicht-Prüfungen",
          familySatisfaction: "Angehörigen-Zufriedenheit +50% durch Transparenz",
          staffConfidence: "Rechtssicherheit für Pflegekräfte bei schwierigen Entscheidungen"
        },
        keyLearnings: [
          "Frühzeitige Einwilligung solange möglich spart spätere Probleme",
          "Angehörigen-Kommunikation ist entscheidend für Akzeptanz",
          "Dokumentation muss den Krankheitsverlauf widerspiegeln",
          "Ethische Bewertung gehört zur rechtlichen Absicherung"
        ]
      }
    },
    {
      title: "Notfallsituationen und lebenswichtige Interessen",
      description: "Art. 9 Abs. 2 lit. c DSGVO ermöglicht Datenverarbeitung zum Schutz lebenswichtiger Interessen",
      examples: ["Medizinische Notfälle ohne Bewusstsein", "Suizidgefahr und Eigen-/Fremdgefährdung", "Epidemie-Schutzmaßnahmen", "Notfall-Kontaktierung von Angehörigen"],
      risk: "Mittel",
      fineExample: "Rechtmäßig bei ordnungsgemäßer Dokumentation",
      implementation: {
        requirements: [
          "Unmittelbare Lebensgefahr oder schwere Gesundheitsgefährdung",
          "Dokumentation der Notfallsituation und Dringlichkeit",
          "Nachträgliche Information sobald möglich",
          "Beschränkung auf unbedingt erforderliche Daten"
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
      scenario: "Aufnahme ins Pflegeheim",
      challenge: "Umfassende Datenerhebung bei Heimeinzug rechtssicher gestalten",
      solution: "Gestuftes, transparentes Einwilligungsverfahren",
      implementation: {
        modules: [
          "Grundversorgung (Rechtlich erforderlich)",
          "Erweiterte Betreuung (Freiwillig)",
          "Angehörigen-Kommunikation (Opt-in)",
          "Qualitätssicherung (Anonymisiert)"
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
      scenario: "Digitale Angehörigen-App",
      challenge: "Sichere Kommunikation zwischen Pflegeheim und Familien",
      solution: "Ende-zu-Ende verschlüsselte Kommunikationsplattform",
      implementation: {
        modules: [
          "Basis-Informationen (Status-Updates)",
          "Detaillierte Berichte (Opt-in)",
          "Video-Calls (Terminbasiert)",
          "Notfall-Benachrichtigungen (Immer aktiv)"
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
      category: "Zutrittskontrolle Pflegeeinrichtung",
      icon: Building2,
      measures: [
        "Elektronische Schließsysteme mit Personalisierung",
        "Besuchermanagement mit Datenerfassung",
        "Demenz-sichere Türsysteme mit Notfall-Override",
        "Videoüberwachung der Eingangsbereiche"
      ],
      healthcareSpecific: "Bewohnerzimmer, Pflegestützpunkte, Medikamentenlager, Verwaltungsbereiche",
      iso27001: "A.11.1.1 - Physische Sicherheitsbereiche",
      practicalImplementation: {
        title: "Bewohner-orientierte Sicherheitszonen",
        description: "Balance zwischen Sicherheit und Lebensqualität in Pflegeeinrichtungen",
        zones: [
          {
            name: "Öffentliche Bereiche",
            security: "Grundschutz",
            access: "Besucher mit Anmeldung",
            measures: "Diskreter Schutz der Bewohnerdaten"
          },
          {
            name: "Bewohnerzimmer",
            security: "Privatsphären-Schutz",
            access: "Bewohner + autorisierte Pflegekräfte",
            measures: "Klopf-Protokoll + elektronische Zutrittskontrolle"
          },
          {
            name: "Pflegestützpunkte",
            security: "Mittlere Sicherheit",
            access: "Nur Pflegepersonal",
            measures: "RFID-Badges + PIN-Systeme"
          },
          {
            name: "Verwaltung",
            security: "Hohe Sicherheit",
            access: "Leitungsebene + Verwaltung",
            measures: "Biometrie + Zutritts-Protokollierung"
          }
        ]
      }
    },
    {
      category: "Digitale Pflegedokumentation",
      icon: FileCheck,
      measures: [
        "Rollenbasierte Berechtigungen nach Qualifikation",
        "Elektronische Signatur für Pflegehandlungen",
        "Automatische Backup-Systeme mit Versionierung",
        "Audit-Trail für alle Dokumentationsänderungen"
      ],
      healthcareSpecific: "Pflegeberichte, Medikamentengabe, Vitalwerte, Angehörigengespräche",
      iso27001: "A.9.1.1 - Zugriffsrichtlinie",
      practicalImplementation: {
        title: "Pflegekraft-zentrierte Dokumentation",
        description: "Einfache und rechtssichere Dokumentation für alle Qualifikationsstufen",
        roles: [
          {
            name: "👩‍⚕️ Pflegefachkräfte",
            permissions: "Vollständige Pflegedokumentation",
            restrictions: "Schichtzeiten + zugewiesene Bewohner",
            security: "Biometrie + PIN-Code"
          },
          {
            name: "🤝 Betreuungskräfte",
            permissions: "Soziale Betreuung dokumentieren",
            restrictions: "Keine medizinischen Einträge",
            security: "RFID-Badge + PIN"
          },
          {
            name: "🏥 Gastärzte",
            permissions: "Medizinische Anordnungen",
            restrictions: "Nur während Visite-Zeiten",
            security: "Temporäre Accounts + SMS-TAN"
          },
          {
            name: "📊 Heimleitung",
            permissions: "Qualitätssicherung + Auswertungen",
            restrictions: "Nur anonymisierte Auswertungen",
            security: "Starke Authentifizierung + Audit"
          }
        ]
      }
    },
    {
      category: "Sichere Kommunikation",
      icon: MessageSquare,
      measures: [
        "Ende-zu-Ende-Verschlüsselung für Angehörigen-Apps",
        "Sichere Telemedizin-Verbindungen zu Ärzten",
        "Verschlüsselte E-Mail für externe Kommunikation",
        "Datenschutzkonforme Video-Calls mit Angehörigen"
      ],
      healthcareSpecific: "Arzt-Kommunikation, Angehörigen-Updates, Notfall-Benachrichtigungen",
      iso27001: "A.10.1.1 - Kryptographische Kontrollen",
      practicalImplementation: {
        title: "Ganzheitliche Kommunikationssicherheit",
        description: "Nahtlose und sichere Kommunikation zwischen allen Beteiligten",
        layers: [
          {
            name: "📱 Angehörigen-App",
            protection: "Mobile App mit biometrischer Anmeldung",
            benefit: "Regelmäßige Updates über Bewohner-Befinden",
            technology: "Flutter + End-to-End-Encryption"
          },
          {
            name: "🩺 Telemedizin",
            protection: "DSGVO-konforme Video-Konsultationen",
            benefit: "Ärztliche Betreuung ohne Ortswechsel",
            technology: "HIPAA/DSGVO-zertifizierte Plattformen"
          },
          {
            name: "📧 E-Mail-Sicherheit",
            protection: "Automatische Verschlüsselung sensibler Inhalte",
            benefit: "Sichere Kommunikation mit externen Partnern",
            technology: "S/MIME + automatische Klassifizierung"
          },
          {
            name: "🚨 Notfall-System",
            protection: "Gesicherte Benachrichtigungsketten",
            benefit: "Schnelle Information bei kritischen Situationen",
            technology: "Redundante Kanäle + Bestätigungsschleifen"
          }
        ]
      }
    }
  ];
  const riskScenarios = [
    {
      scenario: "Unbefugter Zugriff auf Bewohnerdaten",
      likelihood: "Mittel",
      impact: "Hoch",
      riskScore: 80,
      potentialFine: "2-10 Mio. €",
      affectedPersons: "150-300 Bewohner",
      mitigationMeasures: [
        "Biometrische Zutrittskontrolle zu allen IT-Systemen",
        "Automatische Bildschirm-Sperren nach 3 Min Inaktivität",
        "Rollenbasierte Berechtigungen nach Least-Privilege-Prinzip",
        "Regelmäßige Zugriffs-Audits und Mitarbeiterschulungen",
        "Anomalie-Erkennung bei ungewöhnlichen Datenzugriffen"
      ],
      complianceActions: [
        "Sofortige Sperrung verdächtiger Benutzerkonten",
        "Forensische Analyse aller betroffenen Daten",
        "Information der Aufsichtsbehörde binnen 72h",
        "Individuelle Benachrichtigung betroffener Bewohner/Angehörige",
        "Externe Datenschutz-Folgenabschätzung beauftragen"
      ]
    },
    {
      scenario: "Ransomware-Angriff auf Pflegedokumentation",
      likelihood: "Hoch",
      impact: "Kritisch",
      riskScore: 95,
      potentialFine: "10-20 Mio. €",
      affectedPersons: "500+ Bewohner",
      mitigationMeasures: [
        "Air-Gap-Backups mit 3-2-1-Regel für Pflegedaten",
        "Network Segmentation zwischen Verwaltung und Pflege",
        "Endpoint Detection & Response auf allen Systemen",
        "Regelmäßige Penetrationstests der IT-Infrastruktur",
        "Incident Response Team mit 24/7-Bereitschaft"
      ],
      complianceActions: [
        "Notfall-Betrieb mit Papier-Dokumentation aktivieren",
        "Krisenstab einberufen: IT, Geschäftsführung, Datenschutz",
        "Behörden-Information gemäß NIS-2 und DSGVO",
        "Forensische IT-Untersuchung mit externen Experten",
        "Kommunikationsstrategie für Angehörige und Öffentlichkeit"
      ]
    },
    {
      scenario: "Datenschutz-Beschwerde durch Angehörige",
      likelihood: "Mittel",
      impact: "Mittel",
      riskScore: 60,
      potentialFine: "50.000 - 500.000 €",
      affectedPersons: "1-10 Personen",
      mitigationMeasures: [
        "Transparente Datenschutz-Information bei Aufnahme",
        "Regelmäßige Angehörigen-Sprechstunden zu Datenschutz",
        "Einfache Widerrufs- und Löschverfahren",
        "Datenschutzbeauftragte mit Expertise im Gesundheitswesen",
        "Proaktive Kommunikation bei Änderungen der Datenverarbeitung"
      ],
      complianceActions: [
        "Sofortige Bearbeitung der Beschwerde durch DSB",
        "Dokumentation aller durchgeführten Maßnahmen",
        "Prüfung der beanstandeten Datenverarbeitung",
        "Nachbesserung der Prozesse falls erforderlich",
        "Präventivmaßnahmen zur Vermeidung ähnlicher Fälle"
      ]
    }
  ];
  const implementationRoadmap = [
    {
      phase: "Assessment & Analyse",
      duration: "3-4 Wochen",
      color: "blue",
      tasks: [
        "Ist-Analyse der aktuellen Datenverarbeitung",
        "Bewertung der Einwilligungssituation",
        "TOM-Bewertung der bestehenden Systeme",
        "Mitarbeiterbefragung zu Datenschutz-Herausforderungen",
        "Rechtliche Bewertung der Pflegedokumentation"
      ],
      deliverables: ["Datenschutz-Audit Report", "Gap-Analyse Pflege", "Maßnahmen-Roadmap"]
    },
    {
      phase: "Konzeption & Planung",
      duration: "4-6 Wochen",
      color: "green",
      tasks: [
        "Datenschutzkonzept für Pflegeeinrichtung",
        "Einwilligungsmanagement-System konzipieren",
        "TOM-Katalog für Pflegebereich entwickeln",
        "Schulungskonzept für alle Mitarbeitergruppen",
        "Notfall- und Krisenmanagement-Prozesse"
      ],
      deliverables: ["Pflege-Datenschutzkonzept", "Einwilligungsvorlagen", "TOM-Implementierungsplan"]
    },
    {
      phase: "Technische Umsetzung",
      duration: "6-10 Wochen",
      color: "orange",
      tasks: [
        "Sichere IT-Infrastruktur für Pflegedokumentation",
        "Angehörigen-Kommunikationssystem implementieren",
        "Zugriffskontroll-Systeme einrichten",
        "Backup- und Recovery-Systeme etablieren",
        "Monitoring und Alerting konfigurieren"
      ],
      deliverables: ["Sichere Pflege-IT", "Angehörigen-Portal", "Monitoring-Dashboard"]
    },
    {
      phase: "Schulung & Go-Live",
      duration: "4-6 Wochen",
      color: "purple",
      tasks: [
        "Mitarbeiterschulungen nach Berufsgruppen",
        "Angehörigen-Information und App-Training",
        "Produktiver Rollout mit Pilotbereich",
        "Prozessoptimierung basierend auf Feedback",
        "Compliance-Monitoring etablieren"
      ],
      deliverables: ["Geschulte Teams", "Live-System", "Compliance-Monitoring"]
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Datenschutz Pflege DSGVO – Praxis-Guide für Pflegeheime 2024" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "DSGVO für Pflegeeinrichtungen: ✓ Bewohnerdaten sicher verwalten ✓ Digitale Pflegedokumentation ✓ TOM-Checklisten ✓ Einwilligung bei Demenz. Jetzt Guide lesen!" }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "datenschutz pflege, dsgvo pflegeeinrichtung, pflegedokumentation datenschutz, bewohnerdaten schützen, tom pflegeheim, einwilligung pflege" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://marsstein.com/wissen/branchen/datenschutz-pflege" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Datenschutz in der Pflege - DSGVO Compliance Guide" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Umfassender Leitfaden für Datenschutz in Pflegeeinrichtungen. Rechtssichere Pflegedokumentation nach DSGVO." }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://marsstein.com/wissen/branchen/datenschutz-pflege" }),
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
                        /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "DSGVO Datenschutz Pflege" })
                      ] }),
                      /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
                        "Datenschutz in der",
                        /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent block mt-2", children: "Pflege & Betreuung" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Rechtssichere DSGVO-Compliance für Pflegeheime, ambulante Dienste und Betreuungseinrichtungen. Von der Einwilligung bis zur sicheren Pflegedokumentation." }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Einwilligungsmanagement bei eingeschränkter Geschäftsfähigkeit" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Sichere digitale Pflegedokumentation nach DSGVO" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                          /* @__PURE__ */ jsx("span", { children: "Angehörigen-Kommunikation datenschutzkonform" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                        /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=pflege", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-red-600 to-pink-600 text-white hover:opacity-90 group tap-target min-h-[48px]", children: [
                          /* @__PURE__ */ jsx(Heart, { className: "mr-2 h-5 w-5" }),
                          "Pflege Demo buchen",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                        ] }) }),
                        /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group tap-target min-h-[48px]", children: [
                          /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                          "Pflege DSGVO Leitfaden"
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
                          /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Pflege Compliance Center" }),
                          /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-700", children: [
                            Math.round(complianceStats.reduce((acc, stat) => acc + stat.value, 0) / complianceStats.length),
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
                            /* @__PURE__ */ jsx(Home, { className: "h-4 w-4 text-red-500 animate-pulse" }),
                            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Pflege Ready" })
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
          /* @__PURE__ */ jsxs("section", { id: "ueberblick", className: "space-y-8 scroll-mt-32", "aria-label": "Überblick Datenschutz in der Pflege", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "DSGVO-Compliance in Pflegeeinrichtungen"
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Heart, { className: "h-6 w-6 text-red-600" }),
                  "Besondere Herausforderungen der Pflege"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Pflegeeinrichtungen verarbeiten hochsensible Gesundheitsdaten und stehen vor besonderen Herausforderungen bei der DSGVO-Compliance, insbesondere beim Einwilligungsmanagement." }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                    "Einwilligung bei eingeschränkter Geschäftsfähigkeit",
                    "Rollenbasierte Zugriffe für verschiedene Berufsgruppen",
                    "Sichere Angehörigen-Kommunikation",
                    "Rechtssichere Pflegedokumentation"
                  ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0 mt-1" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                  ] }, i)) }),
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 dark:bg-red-950/30 rounded-lg border border-red-200", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-600" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-800 dark:text-red-400", children: "Besonderes Risiko" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 dark:text-red-300", children: "Art. 9 DSGVO Gesundheitsdaten: Bis zu 20 Mio. € oder 4% des Jahresumsatzes" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-purple-600" }),
                  "Pflege-spezifische Datenverarbeitung"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Die Digitalisierung der Pflege bringt neue Möglichkeiten, aber auch erhöhte Datenschutzanforderungen mit sich." }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                    "Digitale Pflegedokumentation mit Audit-Trail",
                    "IoT-Monitoring von Vitalwerten",
                    "Mobile Apps für Angehörigen-Kommunikation",
                    "Telemedizin und Remote-Betreuung"
                  ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx(Cpu, { className: "h-4 w-4 text-purple-600 flex-shrink-0 mt-1" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                  ] }, i)) }),
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4 text-purple-600" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-800 dark:text-purple-400", children: "Best Practice" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 dark:text-purple-300", children: "Privacy by Design von Anfang an - bereits bei der Systemplanuung" })
                  ] })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "rechtliche-grundlagen", className: "space-y-8 scroll-mt-32", "aria-label": "Rechtliche Grundlagen", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Rechtliche Grundlagen für Pflegeeinrichtungen"
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "space-y-8", children: legalRequirements.map((requirement, index) => /* @__PURE__ */ jsx(
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
                          "Anwendungsbeispiele in der Pflege"
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
                          onClick: () => setExpandedSection(expandedSection === `legal-${index}` ? null : `legal-${index}`),
                          className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                          children: [
                            /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4" }),
                            "Praxis-Szenario anzeigen",
                            /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                              "h-4 w-4 transition-transform",
                              expandedSection === `legal-${index}` && "rotate-180"
                            ) })
                          ]
                        }
                      ),
                      expandedSection === `legal-${index}` && /* @__PURE__ */ jsx(
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
                                step.roles && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.roles.map((role, roleIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-900 dark:text-blue-100 text-sm mb-1", children: role.name }),
                                  /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-700 dark:text-blue-300 mb-2", children: role.access }),
                                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Einschränkungen:" }),
                                    " ",
                                    role.restrictions
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400", children: [
                                    "📝 ",
                                    role.documentation
                                  ] })
                                ] }, roleIndex)) }),
                                step.measures && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.measures.map((measure, measureIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg", children: [
                                  /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: measure.level }),
                                  /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: measure.protection }),
                                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Nutzen:" }),
                                    " ",
                                    measure.benefit
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400", children: [
                                    "🔧 ",
                                    measure.implementation
                                  ] })
                                ] }, measureIndex)) }),
                                step.features && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                  /* @__PURE__ */ jsx(Smartphone, { className: "h-3 w-3 text-purple-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsx("span", { children: feature })
                                ] }, featureIndex)) }),
                                step.stages && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: step.stages.map((stage, stageIndex) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-blue-500 pl-4", children: [
                                  /* @__PURE__ */ jsx("div", { className: "font-medium text-sm mb-1", children: stage.stage }),
                                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Einwilligungsfähigkeit:" }),
                                    " ",
                                    stage.capacity
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: [
                                    /* @__PURE__ */ jsx("strong", { children: "Ansatz:" }),
                                    " ",
                                    stage.approach
                                  ] }),
                                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400", children: [
                                    "📋 ",
                                    stage.documentation
                                  ] })
                                ] }, stageIndex)) }),
                                step.process && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.process.map((process, processIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsx("span", { children: process })
                                ] }, processIndex)) }),
                                step.measures && step.measures.map && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.measures.map((measure, measureIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                  /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3 text-blue-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsx("span", { children: measure })
                                ] }, measureIndex)) })
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
                    ] }),
                    requirement.implementation && /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Code, { className: "h-4 w-4 text-green-600" }),
                        "Technische Umsetzung"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium mb-2", children: "Anforderungen:" }),
                          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: requirement.implementation.requirements.map((req, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { children: req })
                          ] }, i)) })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: requirement.implementation.template }) })
                      ] })
                    ] })
                  ] })
                ] })
              },
              index
            )) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "einwilligungsmanagement", className: "space-y-8 scroll-mt-32", "aria-label": "Einwilligungsmanagement", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Einwilligungsmanagement in Pflegeeinrichtungen"
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
          /* @__PURE__ */ jsxs("section", { id: "tom-pflege", className: "space-y-8 scroll-mt-32", "aria-label": "Technische und Organisatorische Maßnahmen", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Technische und Organisatorische Maßnahmen (TOM) für die Pflege"
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
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Pflege-spezifisch" }),
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
          /* @__PURE__ */ jsxs("section", { id: "dsfa-risiken", className: "space-y-8 scroll-mt-32", "aria-label": "Datenschutz-Folgenabschätzung und Risiken", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Datenschutz-Folgenabschätzung & Risikoanalyse für Pflegeeinrichtungen"
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
          /* @__PURE__ */ jsxs("section", { id: "praxis-umsetzung", className: "space-y-8 scroll-mt-32", "aria-label": "Praxis-Umsetzung", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Praxis-Implementation & Roadmap für Pflegeeinrichtungen"
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
                  "Interaktive Pflege-Compliance-Checkliste"
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
                    "Datenschutzbeauftragte/r für Pflegebereich bestellt",
                    "Verzeichnis der Pflegedaten-Verarbeitung erstellt",
                    "DSFA für Bewohnerdaten durchgeführt",
                    "Auftragsverarbeitungsverträge mit IT-Dienstleistern"
                  ]
                },
                {
                  category: "Einwilligungsmanagement",
                  items: [
                    "Einwilligungsvorlagen für verschiedene Pflegesituationen",
                    "Prozesse für eingeschränkte Geschäftsfähigkeit",
                    "Angehörigen-Vollmachten rechtlich geprüft",
                    "Widerrufsverfahren etabliert"
                  ]
                },
                {
                  category: "Technische Sicherheit",
                  items: [
                    "Rollenbasierte Zugriffe für Pflegepersonal",
                    "Verschlüsselte Pflegedokumentation",
                    "Sichere Angehörigen-Kommunikation",
                    "Backup-Systeme für Bewohnerdaten"
                  ]
                },
                {
                  category: "Organisatorische Maßnahmen",
                  items: [
                    "Mitarbeiterschulungen DSGVO + Pflege",
                    "Notfall-Prozesse bei Datenschutzvorfällen",
                    "Regelmäßige Audits der Pflegedokumentation",
                    "Angehörigen-Information über Datenverarbeitung"
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
                    children: /* @__PURE__ */ jsx(Home, { className: "h-16 w-16 mx-auto mb-6 text-white" })
                  }
                ),
                /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Starten Sie Ihre DSGVO-konforme Pflege" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 max-w-3xl mx-auto", children: "Nutzen Sie unsere jahrelange Expertise im Bereich Pflege-Datenschutz. Von der Einwilligung bis zur sicheren Dokumentation – wir begleiten Sie zur vollständigen Compliance." }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                  /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=pflege", children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "bg-white text-red-600 hover:bg-gray-100 group shadow-lg",
                      children: [
                        /* @__PURE__ */ jsx(Heart, { className: "mr-2 h-5 w-5" }),
                        "Kostenlose Pflege-Beratung",
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
                        "Umfassender Pflege-DSGVO Guide (PDF)"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-8", children: [
                  { icon: Heart, title: "Pflege-Expertise", subtitle: "Spezialisiert auf Pflegeeinrichtungen" },
                  { icon: Shield, title: "Vollständige DSGVO-Compliance", subtitle: "Rechtssichere Umsetzung" },
                  { icon: Award, title: "Bewährte Lösungen", subtitle: "Erfolgreich in 500+ Einrichtungen" }
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
            "Weiterführende Pflege-Ressourcen"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-arztpraxis", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors group-hover:shadow-md", children: [
                /* @__PURE__ */ jsx(Stethoscope, { className: "h-5 w-5 text-red-600 mb-2" }),
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Datenschutz Arztpraxis" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Medizinische Praxen DSGVO" })
              ] }) }),
              /* @__PURE__ */ jsx(Link, { to: "/wissen/leitfaeden/betroffenenrechte", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group-hover:shadow-md", children: [
                /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-purple-600 mb-2" }),
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Betroffenenrechte" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Rechte der Bewohner" })
              ] }) }),
              /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement/data-breach-72h", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md", children: [
                /* @__PURE__ */ jsx(Timer, { className: "h-5 w-5 text-orange-600 mb-2" }),
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Datenpanne Notfall" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "72h Response Plan" })
              ] }) }),
              /* @__PURE__ */ jsx(Link, { to: "/branchen/datenschutz-homeoffice", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md", children: [
                /* @__PURE__ */ jsx(Home, { className: "h-5 w-5 text-blue-600 mb-2" }),
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Homeoffice Pflege" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Remote-Arbeit DSGVO" })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-6 border-t border-gray-200 dark:border-gray-700", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3", children: "Verwandte Compliance-Themen" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/logistics-compliance", className: "group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-600 dark:text-red-400 group-hover:underline", children: "Logistics Compliance" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: "Supply Chain DSGVO-Compliance" })
                ] }) }),
                /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo-compliance", className: "group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-600 dark:text-red-400 group-hover:underline", children: "DSGVO Grundlagen" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: "Basiswissen zur EU-Datenschutzverordnung" })
                ] }) }),
                /* @__PURE__ */ jsx(Link, { to: "/services/datenschutzbeauftragter", className: "group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-600 dark:text-red-400 group-hover:underline", children: "Externer DSB" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: "Datenschutzbeauftragter für Pflegeeinrichtungen" })
                ] }) })
              ] })
            ] })
          ] })
        ] }) }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-12 bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Verwandte Compliance-Themen" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/logistics-compliance", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2", children: "Logistics Compliance" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "DSGVO-konforme Supply Chain und Tracking" })
            ] }) }) }),
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-arztpraxis", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2", children: "Datenschutz Arztpraxis" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Patientendatenschutz in der ambulanten Versorgung" })
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
  DatenschutzPflege as default
};
