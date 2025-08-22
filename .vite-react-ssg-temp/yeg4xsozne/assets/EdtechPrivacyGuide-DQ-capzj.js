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
import { GraduationCap, CheckCircle2, ArrowRight, Download, Shield, Baby, School, UserCheck, Lock, Code, AlertTriangle, Lightbulb, FileText, Euro, ChevronDown, ShieldCheck, Target, Star, Settings, Server, Clock, CheckSquare, Square, ExternalLink, Brain, Timer } from "lucide-react";
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
const EdtechPrivacyGuide = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [activeSection, setActiveSection] = useState("overview");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const navigationItems = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "coppa-compliance", label: "COPPA & Kinderschutz", icon: Baby },
    { id: "ferpa-privacy", label: "FERPA & Bildungsdaten", icon: School },
    { id: "consent-management", label: "Einwilligungsmanagement", icon: UserCheck },
    { id: "platform-security", label: "Plattform-Sicherheit", icon: Lock },
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
    { label: "COPPA Compliance", value: 96, color: "text-green-600", trend: "+8%" },
    { label: "FERPA Konformität", value: 94, color: "text-blue-600", trend: "+12%" },
    { label: "DSGVO EdTech", value: 98, color: "text-purple-600", trend: "+5%" },
    { label: "Consent Management", value: 92, color: "text-orange-600", trend: "+15%" },
    { label: "Data Minimization", value: 89, color: "text-red-600", trend: "+18%" },
    { label: "Platform Security", value: 97, color: "text-indigo-600", trend: "+3%" }
  ];
  const coppaRequirements = [
    {
      title: "Verifiable Parental Consent (COPPA)",
      description: "Nachprüfbare elterliche Einwilligung ist erforderlich für die Sammlung, Nutzung oder Weitergabe personenbezogener Daten von Kindern unter 13 Jahren",
      examples: ["Online-Lernplattformen für Grundschüler", "Bildungs-Apps mit Registrierung", "Gamification-Systeme mit Profilen", "Video-Chat für Fernunterricht", "Social Learning Communities"],
      risk: "Sehr Hoch",
      fineExample: "Bis zu 46.517 $ pro Verstoß (FTC)",
      realWorldScenario: {
        title: "🎓 Praxis-Szenario: Lern-App für Grundschüler",
        context: "Eine EdTech-Firma entwickelt eine interaktive Mathe-Lern-App für Kinder im Alter von 6-12 Jahren. Die App soll Lernfortschritte tracken, personalisierte Übungen anbieten und soziale Features für Klassenwettbewerbe enthalten.",
        challenge: "Wie kann die App COPPA-konform gestaltet werden, ohne die pädagogische Effektivität zu beeinträchtigen?",
        solution: {
          step1: {
            title: "👨‍👩‍👧‍👦 Verifiable Parental Consent System",
            description: "Implementierung eines robusten Systems zur elterlichen Einwilligung",
            methods: [
              {
                name: "Digital Signature with Credit Card Verification",
                process: "Eltern müssen Kreditkartendaten zur Identitätsverifizierung angeben",
                security: "Keine Speicherung der Kartendaten, nur Verifizierungsprozess",
                compliance: "COPPA-konforme Identitätsprüfung"
              },
              {
                name: "Video Conference Consent",
                process: "Persönliches Gespräch zwischen Eltern und Schulpersonal",
                security: "Aufzeichnung der Einwilligung mit Zeitstempel",
                compliance: "Direkter persönlicher Kontakt als Goldstandard"
              },
              {
                name: "Notarized Consent Form",
                process: "Notariell beglaubigte schriftliche Einwilligung",
                security: "Physische Dokumentation mit rechtlicher Validierung",
                compliance: "Höchste Rechtssicherheit"
              }
            ]
          },
          step2: {
            title: "📊 Data Minimization für Kinder",
            description: "Strikte Begrenzung der Datensammlung auf pädagogisch notwendige Informationen",
            dataCategories: [
              {
                category: "Erforderliche Daten",
                data: "Vorname, Klassenstufe, Lernfortschritt",
                purpose: "Personalisierte Lernpfade",
                retention: "Solange Account aktiv + 30 Tage"
              },
              {
                category: "Optionale Daten",
                data: "Avatar-Präferenzen, Lieblingsfächer",
                purpose: "Verbesserte User Experience",
                retention: "Nur mit expliziter elterlicher Zustimmung"
              },
              {
                category: "Verbotene Daten",
                data: "Vollständiger Name, Adresse, Telefonnummer",
                purpose: "Nicht erforderlich für Lernzwecke",
                retention: "Niemals sammeln oder speichern"
              }
            ]
          },
          step3: {
            title: "🔒 Safe Harbor Maßnahmen",
            description: "Implementierung von Schutzmaßnahmen für sichere Kindernutzung",
            safeguards: [
              "Automatische Abmeldung nach 30 Minuten Inaktivität",
              "Keine direkten Nachrichten zwischen Kindern möglich",
              "Moderierte Klassenforen mit Lehrerkontrolle",
              "Automatische Content-Filter für alle Eingaben",
              "Eltern-Dashboard für Aktivitätsüberwachung"
            ]
          }
        },
        outcome: {
          childSafety: "Maximaler Schutz der Privatsphäre bei optimaler Lernerfahrung",
          parentalControl: "Vollständige Transparenz und Kontrolle für Eltern",
          educationalValue: "Unbeeinträchtigte pädagogische Effektivität",
          legalCompliance: "100% COPPA-Konformität mit FTC-Approval"
        },
        keyLearnings: [
          "Frühzeitige Einbindung der Eltern erhöht Vertrauen und Adoption",
          "Data Minimization verbessert sowohl Compliance als auch Performance",
          "Transparente Kommunikation reduziert rechtliche Risiken erheblich",
          "Pädagogische Ziele und Privacy lassen sich erfolgreich vereinen"
        ]
      }
    },
    {
      title: "Educational Purpose Limitation",
      description: "Sammlung und Nutzung von Schülerdaten ist strikt auf legitime Bildungszwecke zu beschränken",
      examples: ["Lernanalytics nur für Bildungszwecke", "Keine kommerzielle Datennutzung", "Verbot von Behavioral Advertising", "Schutz vor Datenbrokern"],
      risk: "Hoch",
      fineExample: "Google: 170 Mio. $ (YouTube/COPPA, 2019)",
      realWorldScenario: {
        title: "📚 Praxis-Szenario: Adaptive Learning Platform",
        context: "Eine Universität implementiert eine KI-gestützte Lernplattform, die das Lernverhalten von 50.000 Studenten analysiert, um personalisierte Empfehlungen zu geben und Lehrmethoden zu optimieren.",
        challenge: "Wie kann die Universität Learning Analytics nutzen, ohne die Privatsphäre der Studenten zu verletzen?",
        solution: {
          step1: {
            title: "🎯 Purpose Limitation Framework",
            description: "Klare Definition und Abgrenzung erlaubter Datennutzungszwecke",
            purposes: [
              {
                purpose: "Legitime Bildungszwecke",
                examples: "Personalisierte Lernempfehlungen, Früherkennung von Lernschwierigkeiten",
                dataTypes: "Anonymisierte Lernfortschritte, Zeitinvestitionen, Schwachstellenanalyse",
                safeguards: "Automatische Anonymisierung, regelmäßige Löschung"
              },
              {
                purpose: "Institutionelle Forschung",
                examples: "Verbesserung von Curricula, Optimierung der Lehrmethoden",
                dataTypes: "Aggregierte Daten ohne Personenbezug",
                safeguards: "Statistische Anonymisierung, Differential Privacy"
              },
              {
                purpose: "Verbotene Zwecke",
                examples: "Kommerzielle Werbung, Verkauf an Dritte, Social Credit Scoring",
                dataTypes: "Jegliche Personendaten",
                safeguards: "Technische Sperren, Compliance-Audits"
              }
            ]
          },
          step2: {
            title: "🔬 Privacy-Preserving Analytics",
            description: "Implementierung datenschutzfreundlicher Analysemethoden",
            techniques: [
              {
                method: "Differential Privacy",
                application: "Aggregierte Lernstatistiken",
                privacy_guarantee: "Mathematisch beweisbarer Schutz gegen Re-Identifikation",
                implementation: "Noise-Addition bei allen statistischen Abfragen"
              },
              {
                method: "Federated Learning",
                application: "Modelltraining ohne Datenaustausch",
                privacy_guarantee: "Daten verlassen niemals lokale Systeme",
                implementation: "Dezentrales Training mit Gradientenaggregation"
              },
              {
                method: "K-Anonymity",
                application: "Sichere Gruppenanalysen",
                privacy_guarantee: "Mindestens k ähnliche Datensätze pro Gruppe",
                implementation: "Automatische Gruppierung mit k≥5"
              }
            ]
          },
          step3: {
            title: "👨‍🎓 Student Consent & Control",
            description: "Umfassendes Einwilligungs- und Kontrollsystem für Studenten",
            controls: [
              {
                feature: "Granulare Opt-in/Opt-out Optionen",
                description: "Studenten können spezifische Analysefunktionen aktivieren/deaktivieren",
                implementation: "Modulares Dashboard mit individuellen Datenschutzeinstellungen"
              },
              {
                feature: "Echtzeit-Transparenz",
                description: "Studenten sehen, welche Daten wann und wofür genutzt werden",
                implementation: "Live-Dashboard mit Datenfluss-Visualisierung"
              },
              {
                feature: "Data Portability",
                description: "Studenten können ihre Lerndaten exportieren und mitnehmen",
                implementation: "Standardisierte APIs für Datentransfer"
              }
            ]
          }
        },
        outcome: {
          studentTrust: "Erhöhte Akzeptanz durch transparente Datennutzung",
          educationalImprovement: "Messbare Verbesserung der Lernergebnisse um 23%",
          legalCompliance: "Vollständige FERPA und DSGVO Konformität",
          institutionalReputation: "Vorreiterrolle in ethischer Bildungstechnologie"
        },
        keyLearnings: [
          "Privacy-by-Design erhöht Vertrauen und Nutzungsbereitschaft",
          "Transparenz schafft Wettbewerbsvorteile bei bewussten Studenten",
          "Technische Datenschutzmaßnahmen verbessern auch Datenqualität",
          "Ethische Datennutzung wird zum Differenzierungsmerkmal"
        ]
      }
    },
    {
      title: "Safe Harbor Provisions",
      description: "Spezielle Schutzmaßnahmen und Haftungsbefreiungen für konforme EdTech-Anbieter",
      examples: ["School Service Provider Agreements", "Limited Data Retention", "No Behavioral Advertising", "Secure Data Deletion"],
      risk: "Mittel",
      fineExample: "Schutz vor Haftung bei konformer Umsetzung",
      implementation: {
        requirements: [
          "Schriftliche Vereinbarungen mit Bildungseinrichtungen",
          "Strikte Zweckbindung der Datenverarbeitung",
          "Sichere Löschung bei Vertragsende",
          "Regelmäßige Compliance-Audits"
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
      scenario: "Student Information Systems (SIS)",
      challenge: "Sichere Verwaltung von Bildungsdatensätzen unter FERPA",
      solution: "Privacy-by-Design Architektur mit granularen Zugriffskontrollen",
      implementation: {
        modules: [
          'Rollenbasierte Zugriffskontrolle nach "Need-to-Know"-Prinzip',
          "Audit-Logs für alle Datenzugriffe und -änderungen",
          "Automatische Anonymisierung für Forschungszwecke",
          "Eltern- und Studentenportale für Dateneinsicht"
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
      scenario: "Learning Management Systems (LMS)",
      challenge: "Integration von Drittanbieter-Tools unter Wahrung der FERPA-Konformität",
      solution: "Comprehensive Data Processing Agreements mit allen Subprocessors",
      implementation: {
        modules: [
          "School Official Designation für alle integrierten Tools",
          "Data Use Agreements mit strikter Zweckbindung",
          "Technische Safeguards für Datenübertragungen",
          "Regular Compliance Audits für alle Integrationen"
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
      ageGroup: "Kinder unter 13 (COPPA)",
      requirements: [
        "Verifiable Parental Consent vor jeder Datensammlung",
        "Klare, altersgerechte Datenschutzerklärung für Kinder",
        "Opt-in für alle nicht-essentiellen Features",
        "Elterliche Kontrolle über alle Datennutzungen"
      ],
      implementation: {
        consentFlow: [
          "Altersverifizierung bei Registrierung",
          "Weiterleitung zu parental consent portal",
          "Mehrstufiger Verifizierungsprozess für Eltern",
          "Granulare Einwilligung für verschiedene Datentypen",
          "Bestätigung und Account-Aktivierung"
        ],
        technicalMeasures: [
          "Age-gate mit robuster Verifizierung",
          "Separate consent database für Minderjährige",
          "Automated consent withdrawal handling",
          "Regular consent renewal reminders"
        ]
      }
    },
    {
      ageGroup: "Jugendliche 13-16 (EU DSGVO)",
      requirements: [
        "Direkte Einwilligung von Jugendlichen möglich",
        "Elterliche Benachrichtigung empfohlen",
        "Besonders klare und verständliche Information",
        "Einfache Widerrufsmöglichkeiten"
      ],
      implementation: {
        consentFlow: [
          "Altersverifizierung bei Registrierung",
          "Vereinfachte, jugendgerechte Datenschutzerklärung",
          "Optionale elterliche Benachrichtigung",
          "Granulare Kontrolle über Datenfreigaben",
          "Peer-to-peer sharing controls"
        ],
        technicalMeasures: [
          "Visual consent interfaces mit Symbolen",
          "Just-in-time consent für neue Features",
          "Social features mit enhanced privacy controls",
          "Regular privacy checkups und reminders"
        ]
      }
    },
    {
      ageGroup: "Erwachsene Studenten 16+ (Standard DSGVO)",
      requirements: [
        "Informierte Einwilligung mit vollständiger Information",
        "Granulare Kontrolle über verschiedene Datennutzungen",
        "Transparenz über algorithmische Entscheidungen",
        "Vollständige Betroffenenrechte"
      ],
      implementation: {
        consentFlow: [
          "Comprehensive privacy dashboard",
          "Detailed information über alle Datenverarbeitungen",
          "Granular opt-in/opt-out für alle Services",
          "Regular consent reviews und updates",
          "Export und Portabilität aller Daten"
        ],
        technicalMeasures: [
          "Advanced consent management platform",
          "API-basierte consent propagation",
          "Blockchain-based consent records",
          "AI-powered privacy recommendations"
        ]
      }
    }
  ];
  const platformSecurity = [
    {
      category: "Infrastruktursicherheit",
      icon: Server,
      measures: [
        "ISO 27001 zertifizierte Rechenzentren",
        "Ende-zu-Ende Verschlüsselung aller Bildungsdaten",
        "Zero-Trust Network Architecture",
        "Continuous Security Monitoring"
      ],
      edtechSpecific: "Classroom Networks, Student Devices, Learning Content Protection",
      implementation: {
        title: "Secure EdTech Cloud Infrastructure",
        description: "Multi-Cloud Setup mit geographischer Datenresidenz",
        layers: [
          {
            name: "🌐 Network Security",
            protection: "DDoS-Protection, WAF, Intrusion Detection",
            benefit: "Schutz vor externen Angriffen",
            technology: "Cloudflare, AWS Shield, Custom IDS"
          },
          {
            name: "🔐 Data Encryption",
            protection: "AES-256 Verschlüsselung at rest und in transit",
            benefit: "Schutz sensibler Bildungsdaten",
            technology: "Hardware Security Modules, Key Rotation"
          },
          {
            name: "🏗️ Container Security",
            protection: "Signed container images, Runtime protection",
            benefit: "Sichere Anwendungsbereitstellung",
            technology: "Kubernetes, Falco, OPA Gatekeeper"
          },
          {
            name: "📊 Monitoring & Logging",
            protection: "Comprehensive audit trails, anomaly detection",
            benefit: "Früherkennung von Sicherheitsvorfällen",
            technology: "ELK Stack, Prometheus, Custom dashboards"
          }
        ]
      }
    },
    {
      category: "Anwendungssicherheit",
      icon: Shield,
      measures: [
        "Secure Development Lifecycle (SDL)",
        "Regular Penetration Testing",
        "Automated Vulnerability Scanning",
        "Secure Code Reviews"
      ],
      edtechSpecific: "Student Authentication, Grade Protection, Assignment Integrity",
      implementation: {
        title: "DevSecOps für EdTech Applications",
        description: "Security-first development approach für Bildungsanwendungen",
        processes: [
          {
            phase: "Development",
            security: "Static Application Security Testing (SAST)",
            tools: "SonarQube, Checkmarx, Custom rules",
            frequency: "Every commit"
          },
          {
            phase: "Testing",
            security: "Dynamic Application Security Testing (DAST)",
            tools: "OWASP ZAP, Burp Suite, Custom scripts",
            frequency: "Every release"
          },
          {
            phase: "Deployment",
            security: "Container scanning, Dependency checks",
            tools: "Snyk, Clair, Trivy",
            frequency: "Every deployment"
          },
          {
            phase: "Runtime",
            security: "Runtime Application Self-Protection (RASP)",
            tools: "Custom RASP, WAF rules, Behavior analysis",
            frequency: "Continuous"
          }
        ]
      }
    },
    {
      category: "Identity & Access Management",
      icon: UserCheck,
      measures: [
        "Multi-Factor Authentication für alle Benutzer",
        "Single Sign-On (SSO) Integration",
        "Role-Based Access Control (RBAC)",
        "Privileged Access Management (PAM)"
      ],
      edtechSpecific: "Student Profiles, Teacher Dashboards, Parent Access, Admin Functions",
      implementation: {
        title: "EdTech Identity Governance",
        description: "Comprehensive identity management für alle Bildungsstakeholder",
        stakeholders: [
          {
            role: "👨‍🎓 Students",
            authentication: "Age-appropriate MFA (SMS/Email for older, simplified for younger)",
            authorization: "Access to own data, assigned courses, approved social features",
            audit: "Complete activity logging for parental oversight"
          },
          {
            role: "👩‍🏫 Teachers",
            authentication: "Strong MFA with hardware tokens for administrative functions",
            authorization: "Access to assigned students, curriculum management, grading systems",
            audit: "Detailed access logs for compliance and security"
          },
          {
            role: "👨‍👩‍👧‍👦 Parents",
            authentication: "Multi-modal authentication (SMS, Email, App-based)",
            authorization: "Read access to own children's data, communication preferences",
            audit: "Transparency logs for all data access and changes"
          },
          {
            role: "🏫 Administrators",
            authentication: "Highest security MFA with biometric options",
            authorization: "System-wide access with just-in-time elevation",
            audit: "Complete administrative action logging with approval workflows"
          }
        ]
      }
    }
  ];
  const implementationRoadmap = [
    {
      phase: "Compliance Assessment & Legal Foundation",
      duration: "6-8 Wochen",
      color: "blue",
      tasks: [
        "COPPA/FERPA Gap-Analyse für bestehende Systeme",
        "DSGVO-Konformitätsprüfung für EU-Nutzer",
        "Stakeholder-Mapping (Schüler, Eltern, Lehrer, Admins)",
        "Legal Framework Definition und Policy-Erstellung",
        "Privacy Impact Assessment für alle EdTech-Services"
      ],
      deliverables: [
        "Comprehensive Compliance Audit Report",
        "EdTech Privacy Policy Suite",
        "Implementation Roadmap mit Prioritäten",
        "Stakeholder Communication Plan"
      ]
    },
    {
      phase: "Technical Privacy Infrastructure",
      duration: "10-14 Wochen",
      color: "green",
      tasks: [
        "Consent Management Platform für alle Altersgruppen",
        "Data Minimization und Purpose Limitation",
        "Sichere Datenarchitektur mit Encryption-at-Rest",
        "Identity & Access Management System",
        "Automated Data Retention und Deletion"
      ],
      deliverables: [
        "Multi-Age Consent Management System",
        "Privacy-by-Design Data Architecture",
        "Secure Authentication Infrastructure",
        "Automated Compliance Tools"
      ]
    },
    {
      phase: "Educational Stakeholder Integration",
      duration: "8-10 Wochen",
      color: "orange",
      tasks: [
        "Parent Dashboard und Communication Tools",
        "Student Privacy Education Programme",
        "Teacher Training für Datenschutz-Compliance",
        "School Administrator Control Panels",
        "Age-Appropriate Privacy Interfaces"
      ],
      deliverables: [
        "Stakeholder-Specific Interfaces",
        "Comprehensive Training Materials",
        "Educational Privacy Curriculum",
        "Administrative Control Systems"
      ]
    },
    {
      phase: "Continuous Compliance & Monitoring",
      duration: "4-6 Wochen",
      color: "purple",
      tasks: [
        "Real-time Compliance Monitoring Dashboard",
        "Automated Compliance Reporting",
        "Regular Privacy Audits und Assessments",
        "Incident Response für Privacy Breaches",
        "Continuous Privacy Training Programme"
      ],
      deliverables: [
        "Live Compliance Dashboard",
        "Automated Monitoring Systems",
        "Regular Audit Framework",
        "Incident Response Playbook"
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
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "EdTech Privacy – Bildungssektor Datenschutz",
        description: "EdTech Datenschutz: Schülerdaten, COPPA/FERPA, Lernplattformen, digitale Bildung. ✓ Consent Management ✓ Age Verification ✓ Data Minimization.",
        canonical: "/wissen/branchen/edtech-privacy",
        keywords: "EdTech Privacy, Bildungssektor Datenschutz, COPPA FERPA, Schülerdaten DSGVO, Lernplattformen Datenschutz, Age Verification",
        structuredData: {
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
        }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative py-20 md:py-28", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
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
                    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400", children: [
                      /* @__PURE__ */ jsx(GraduationCap, { className: "h-4 w-4" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "EdTech Privacy Excellence" })
                    ] }),
                    /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
                      "EdTech Privacy Compliance",
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent block mt-2", children: "COPPA & FERPA Guide" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Meistern Sie den Datenschutz im Bildungswesen. Von COPPA-konformen Kinderplattformen über FERPA-Compliance bis hin zu altersgerechtem Consent Management." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "COPPA-konforme Plattformen für Kinder unter 13" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "FERPA-Compliance für Bildungseinrichtungen" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Altersgerechtes Consent Management" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                      /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=edtech", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-green-600 to-blue-600 text-white hover:opacity-90 group", children: [
                        /* @__PURE__ */ jsx(GraduationCap, { className: "mr-2 h-5 w-5" }),
                        "EdTech Privacy Demo buchen",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                      ] }) }),
                      /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                        "COPPA/FERPA Compliance Guide"
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
                    /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-green-200 dark:border-green-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "EdTech Privacy Center" }),
                        /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-700", children: [
                          getCompletionPercentage(),
                          "% Compliant"
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
                        className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-green-500",
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(GraduationCap, { className: "h-4 w-4 text-green-500 animate-pulse" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Privacy Ready" })
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
            activeSection === item.id ? "bg-green-100 dark:bg-green-950/50 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800" : "hover:bg-green-50 dark:hover:bg-green-950/30 hover:text-green-700 dark:hover:text-green-400",
            "border",
            activeSection === item.id ? "border-green-200 dark:border-green-800" : "border-transparent hover:border-green-200 dark:hover:border-green-800"
          ),
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: cn(
              "h-4 w-4",
              activeSection === item.id && "text-green-600 dark:text-green-500"
            ) }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "text-sm font-medium",
              activeSection === item.id && "text-green-700 dark:text-green-400"
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
              children: "EdTech Privacy Compliance Überblick"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Baby, { className: "h-6 w-6 text-green-600" }),
                "COPPA für Bildungsplattformen"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Der Children's Online Privacy Protection Act (COPPA) reguliert die Sammlung personenbezogener Daten von Kindern unter 13 Jahren und erfordert verifiable parental consent für EdTech-Plattformen." }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "Verifiable Parental Consent vor Datensammlung",
                  "Data Minimization auf Bildungszwecke beschränkt",
                  "Safe Harbor Protections für konforme Anbieter",
                  "Strikte Löschpflichten bei Vertragsende"
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 dark:bg-green-950/30 rounded-lg border border-green-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-green-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-800 dark:text-green-400", children: "COPPA Enforcement" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 dark:text-green-300", children: "FTC verhängt Bußgelder bis zu 46.517$ pro Verstoß und Kind" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(School, { className: "h-6 w-6 text-blue-600" }),
                "FERPA für Bildungseinrichtungen"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Das Family Educational Rights and Privacy Act (FERPA) schützt Bildungsdatensätze von Studenten und reguliert deren Weitergabe an Dritte, einschließlich EdTech-Anbieter." }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "School Official Designation für EdTech-Anbieter",
                  "Legitimate Educational Interest als Rechtsgrundlage",
                  "Strikte Zweckbindung auf Bildungszwecke",
                  "Comprehensive audit trails für alle Zugriffe"
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(School, { className: "h-4 w-4 text-blue-600 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4 text-blue-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-800 dark:text-blue-400", children: "Best Practice" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 dark:text-blue-300", children: 'Implementieren Sie granulare Berechtigungen nach dem "Need-to-Know"-Prinzip' })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "coppa-compliance", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "COPPA Compliance & Kinderschutz"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: coppaRequirements.map((requirement, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-green-500", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-xl pr-4", children: requirement.title }),
                  /* @__PURE__ */ jsxs(
                    Badge,
                    {
                      variant: requirement.risk === "Sehr Hoch" ? "destructive" : requirement.risk === "Hoch" ? "secondary" : "default",
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
                        onClick: () => setExpandedSection(expandedSection === `coppa-scenario-${index}` ? null : `coppa-scenario-${index}`),
                        className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                        children: [
                          /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4" }),
                          "Praxis-Szenario anzeigen",
                          /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                            "h-4 w-4 transition-transform",
                            expandedSection === `coppa-scenario-${index}` && "rotate-180"
                          ) })
                        ]
                      }
                    ),
                    expandedSection === `coppa-scenario-${index}` && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, height: 0 },
                        animate: { opacity: 1, height: "auto" },
                        className: "mt-4",
                        children: /* @__PURE__ */ jsxs("div", { className: "space-y-6 p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 rounded-xl border border-green-200 dark:border-green-800", children: [
                          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                            /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-green-900 dark:text-green-100 mb-2", children: requirement.realWorldScenario.title }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 dark:text-green-300", children: requirement.realWorldScenario.context })
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
                              step.methods && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: step.methods.map((method, methodIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                                /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-900 dark:text-blue-100 text-sm mb-1", children: method.name }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-blue-700 dark:text-blue-300 mb-1", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Prozess:" }),
                                  " ",
                                  method.process
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400 mb-1", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Sicherheit:" }),
                                  " ",
                                  method.security
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-purple-600 dark:text-purple-400", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Compliance:" }),
                                  " ",
                                  method.compliance
                                ] })
                              ] }, methodIndex)) }),
                              step.dataCategories && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: step.dataCategories.map((category, catIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 dark:bg-gray-700 rounded-lg", children: [
                                /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: category.category }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Daten:" }),
                                  " ",
                                  category.data
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Zweck:" }),
                                  " ",
                                  category.purpose
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Aufbewahrung:" }),
                                  " ",
                                  category.retention
                                ] })
                              ] }, catIndex)) }),
                              step.safeguards && /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                                /* @__PURE__ */ jsx("h6", { className: "font-medium text-sm", children: "Sicherheitsmaßnahmen:" }),
                                step.safeguards.map((safeguard, sgIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                  /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
                                  /* @__PURE__ */ jsx("span", { children: safeguard })
                                ] }, sgIndex))
                              ] })
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
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => setExpandedSection(expandedSection === `coppa-impl-${index}` ? null : `coppa-impl-${index}`),
                        className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                        children: [
                          /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                          "Technische Implementation",
                          /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                            "h-4 w-4 transition-transform",
                            expandedSection === `coppa-impl-${index}` && "rotate-180"
                          ) })
                        ]
                      }
                    ),
                    expandedSection === `coppa-impl-${index}` && /* @__PURE__ */ jsx(
                      motion.div,
                      {
                        initial: { opacity: 0, height: 0 },
                        animate: { opacity: 1, height: "auto" },
                        className: "mt-4",
                        children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: requirement.implementation.template }) })
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
        /* @__PURE__ */ jsxs("section", { id: "ferpa-privacy", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "FERPA Compliance & Bildungsdatenschutz"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: ferpaCompliance.map((ferpa, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(School, { className: "h-6 w-6 text-blue-600" }),
              ferpa.scenario
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-red-700", children: "Herausforderung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: ferpa.challenge })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-700", children: "Lösung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: ferpa.solution })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-blue-700", children: "Komponenten" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: ferpa.implementation.modules.map((module, i) => /* @__PURE__ */ jsx("div", { className: "text-sm p-2 bg-blue-50 dark:bg-blue-950/30 rounded", children: module }, i)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setExpandedSection(expandedSection === `ferpa-${index}` ? null : `ferpa-${index}`),
                    className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                    children: [
                      /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                      "Technische Implementation",
                      /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "h-4 w-4 transition-transform",
                        expandedSection === `ferpa-${index}` && "rotate-180"
                      ) })
                    ]
                  }
                ),
                expandedSection === `ferpa-${index}` && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    className: "mt-4",
                    children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: ferpa.implementation.technical }) })
                  }
                )
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "consent-management", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "Altersgerechtes Einwilligungsmanagement"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: consentManagement.map((consent, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(UserCheck, { className: "h-6 w-6 text-green-600" }),
              consent.ageGroup
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Rechtliche Anforderungen" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: consent.requirements.map((req, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: req })
                  ] }, i)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Consent Flow" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: consent.implementation.consentFlow.map((step, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-2 bg-gray-50 dark:bg-gray-800 rounded", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold", children: i + 1 }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: step })
                  ] }, i)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Technische Maßnahmen" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: consent.implementation.technicalMeasures.map((measure, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-3 bg-blue-50 dark:bg-blue-950/30 rounded", children: [
                  /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: measure })
                ] }, i)) })
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "platform-security", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "EdTech Plattform-Sicherheit"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: platformSecurity.map((security, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(security.icon, { className: "h-6 w-6 text-blue-600" }),
              security.category
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Sicherheitsmaßnahmen" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: security.measures.map((measure, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: measure })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "EdTech-spezifisch" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 p-3 bg-green-50 dark:bg-green-950/30 rounded-lg", children: security.edtechSpecific })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Implementation" }),
                /* @__PURE__ */ jsx("div", { className: "bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 border border-blue-200", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium text-blue-800 dark:text-blue-200", children: security.implementation.title })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-700 dark:text-blue-300 mb-3", children: security.implementation.description }),
                  security.implementation.layers && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: security.implementation.layers.map((layer, layerIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 rounded border", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: layer.name }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: layer.protection }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                      /* @__PURE__ */ jsx("strong", { children: "Nutzen:" }),
                      " ",
                      layer.benefit
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 dark:text-green-400", children: layer.technology })
                  ] }, layerIndex)) }),
                  security.implementation.processes && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: security.implementation.processes.map((process, processIndex) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Code, { className: "h-4 w-4 text-green-600" }),
                      /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: process.phase }),
                      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: process.frequency })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                      /* @__PURE__ */ jsx("strong", { children: "Security:" }),
                      " ",
                      process.security
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-blue-600 dark:text-blue-400", children: [
                      /* @__PURE__ */ jsx("strong", { children: "Tools:" }),
                      " ",
                      process.tools
                    ] })
                  ] }, processIndex)) }),
                  security.implementation.stakeholders && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: security.implementation.stakeholders.map((stakeholder, stakeholderIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white dark:bg-gray-800 rounded border", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-gray-100 text-sm mb-1", children: stakeholder.role }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: [
                      /* @__PURE__ */ jsx("strong", { children: "Auth:" }),
                      " ",
                      stakeholder.authentication
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400 mb-1", children: [
                      /* @__PURE__ */ jsx("strong", { children: "Zugriff:" }),
                      " ",
                      stakeholder.authorization
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-purple-600 dark:text-purple-400", children: [
                      /* @__PURE__ */ jsx("strong", { children: "Audit:" }),
                      " ",
                      stakeholder.audit
                    ] })
                  ] }, stakeholderIndex)) })
                ] }) })
              ] })
            ] }) })
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
                "Interactive EdTech Privacy-Checkliste"
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
                category: "COPPA Compliance",
                items: [
                  "Age verification system implementiert",
                  "Verifiable parental consent process etabliert",
                  "Data minimization auf educational purposes",
                  "Safe harbor protections aktiviert"
                ]
              },
              {
                category: "FERPA Konformität",
                items: [
                  "School official designation erhalten",
                  "Educational purpose limitation dokumentiert",
                  "Audit trails für alle Datenzugriffe",
                  "Directory information opt-out implementiert"
                ]
              },
              {
                category: "Consent Management",
                items: [
                  "Altersgerechte consent interfaces",
                  "Granulare privacy controls",
                  "Elterliche oversight dashboards",
                  "Just-in-time consent für neue features"
                ]
              },
              {
                category: "Platform Security",
                items: [
                  "Ende-zu-Ende Verschlüsselung",
                  "Multi-factor authentication",
                  "Zero-trust network architecture",
                  "Continuous security monitoring"
                ]
              }
            ].map((section, sectionIndex) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: section.category }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: section.items.map((item, itemIndex) => {
                const itemId = `edtech-${sectionIndex}-${itemIndex}`;
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
          children: /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 text-white overflow-hidden relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/pattern.svg')] opacity-10" }),
            /* @__PURE__ */ jsx(CardContent, { className: "relative p-8 md:p-12 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { scale: 0 },
                  whileInView: { scale: 1 },
                  transition: { type: "spring", duration: 0.8 },
                  children: /* @__PURE__ */ jsx(GraduationCap, { className: "h-16 w-16 mx-auto mb-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Starten Sie Ihre EdTech Privacy Journey" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 max-w-3xl mx-auto", children: "Profitieren Sie von unserer Expertise in EdTech Privacy und COPPA/FERPA Compliance. Von altersgerechtem Consent Management über sichere Plattformen bis hin zu umfassender Stakeholder-Integration." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=edtech", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-green-600 hover:bg-gray-100 group shadow-lg",
                    children: [
                      /* @__PURE__ */ jsx(GraduationCap, { className: "mr-2 h-5 w-5" }),
                      "Kostenlose EdTech Privacy-Beratung",
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
                      "COPPA/FERPA Toolkit (PDF)"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-8", children: [
                { icon: Baby, title: "COPPA Expertise", subtitle: "Spezialisiert auf Kinderschutz" },
                { icon: School, title: "FERPA Ready", subtitle: "Vollständige Bildungs-Compliance" },
                { icon: Shield, title: "Safe Learning", subtitle: "Sichere EdTech-Plattformen" }
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
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-5 w-5 text-green-600" }),
          "Weiterführende EdTech-Ressourcen"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/wissen/compliance/dsgvo", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-purple-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "DSGVO Grundlagen" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Datenschutz-Basics" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/compliance/eu-ai-act", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-blue-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "EU AI Act" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "KI in der Bildung" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement/data-breach-72h", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Timer, { className: "h-5 w-5 text-orange-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Data Breach Response" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "72h Notfall-Leitfaden" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/branchen/bildung", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(GraduationCap, { className: "h-5 w-5 text-green-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "EdTech Solutions" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Unsere Bildungsprodukte" })
          ] }) })
        ] }) })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  EdtechPrivacyGuide as default
};
