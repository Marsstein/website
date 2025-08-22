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
import { Brain, CheckCircle2, ArrowRight, Download, Shield, AlertTriangle, Eye, Users, Code, Lightbulb, FileText, Euro, ChevronDown, Activity, Target, Star, Calendar, Building2, Clock, Search, Stethoscope, Settings, ShieldCheck, CheckSquare, Square, Award, ExternalLink, Heart } from "lucide-react";
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
const HealthcareAiComplianceGuide = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [activeSection, setActiveSection] = useState("overview");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const navigationItems = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "eu-ai-act", label: "EU AI Act Healthcare", icon: Brain },
    { id: "risk-categories", label: "KI-Risikokategorien", icon: AlertTriangle },
    { id: "bias-monitoring", label: "Bias & Fairness", icon: Eye },
    { id: "human-oversight", label: "Human-in-the-Loop", icon: Users },
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
    { label: "EU AI Act Conformity", value: 94, color: "text-blue-600", trend: "+12%" },
    { label: "High-Risk AI Systems", value: 87, color: "text-red-600", trend: "+8%" },
    { label: "Bias Monitoring", value: 91, color: "text-purple-600", trend: "+15%" },
    { label: "Human Oversight", value: 96, color: "text-green-600", trend: "+5%" },
    { label: "DSGVO Integration", value: 98, color: "text-pink-600", trend: "+3%" },
    { label: "Algorithm Transparency", value: 89, color: "text-orange-500", trend: "+18%" }
  ];
  const euAiActRequirements = [
    {
      title: "Hochrisiko-KI-Systeme in der Medizin (Annex III)",
      description: "KI-Systeme für medizinische Diagnose, Behandlung oder kritische Lebensfunktionen fallen unter die Hochrisiko-Kategorie des EU AI Act",
      examples: ["Radiologische Diagnosesysteme", "Medikamentendosierungs-KI", "Intensivmedizin-Monitoring", "Robotergestützte Chirurgie", "Früherkennung von Sepsis"],
      risk: "Sehr Hoch",
      fineExample: "Bis zu 35 Mio. € oder 7% des Jahresumsatzes",
      realWorldScenario: {
        title: "🏥 Praxis-Szenario: KI-gestützte Radiologie-Diagnose",
        context: "Eine Universitätsklinik implementiert ein KI-System zur automatischen Erkennung von Lungenkrebs in CT-Aufnahmen. Das System soll Radiologen unterstützen und die Früherkennung verbessern.",
        challenge: "Wie kann die Klinik sicherstellen, dass das KI-System EU AI Act-konform betrieben wird, ohne die medizinische Qualität zu beeinträchtigen?",
        solution: {
          step1: {
            title: "📊 Risikomanagementsystem etablieren",
            description: "Umfassende Bewertung und kontinuierliche Überwachung der KI-Risiken",
            components: [
              {
                name: "Primäre Risikoidentifikation",
                details: "Falsch-negative Diagnosen bei frühem Krebsstadium",
                mitigation: "Multi-Algorithmus-Ansatz mit Confidence-Scoring"
              },
              {
                name: "Sekundäre Risikobewertung",
                details: "Bias gegenüber bestimmten Patientengruppen",
                mitigation: "Diverse Trainingsdaten und kontinuierliches Bias-Monitoring"
              },
              {
                name: "Systemische Risikoanalyse",
                details: "Überabhängigkeit der Ärzte von KI-Empfehlungen",
                mitigation: "Zwingender Human-in-the-Loop bei kritischen Entscheidungen"
              }
            ]
          },
          step2: {
            title: "👁️ Transparenz und Erklärbarkeit",
            description: "Nachvollziehbare Entscheidungsfindung für medizinisches Personal",
            features: [
              "Heatmaps zeigen relevante Bildregionen für KI-Entscheidung",
              "Confidence-Levels für jeden Diagnoseschritt",
              "Vergleich mit ähnlichen, bekannten Fällen aus der Datenbank",
              "Dokumentation aller KI-Eingaben und -Ausgaben"
            ]
          },
          step3: {
            title: "🔄 Kontinuierliche Überwachung",
            description: "Post-Market Monitoring für laufende Leistungsvalidierung",
            monitoring: [
              {
                metric: "Diagnostische Genauigkeit",
                frequency: "Wöchentlich",
                threshold: "95% Übereinstimmung mit Facharzt-Diagnose",
                action: "Bei Unterschreitung: Sofortige Systemüberprüfung"
              },
              {
                metric: "Bias-Indikatoren",
                frequency: "Monatlich",
                threshold: "Keine signifikanten Unterschiede zwischen Patientengruppen",
                action: "Nachjustierung der Algorithmen bei Bias-Erkennung"
              },
              {
                metric: "Nutzungsverhalten",
                frequency: "Täglich",
                threshold: "Ärzte übernehmen KI-Empfehlung in <80% der Fälle",
                action: "Schulungsmaßnahmen und Systemkalibrierung"
              }
            ]
          }
        },
        outcome: {
          patientBenefit: "Frühere und genauere Krebserkennung bei vollständiger Arztkontrolle",
          clinicBenefit: "EU AI Act-konforme KI-Innovation mit rechtlicher Sicherheit",
          complianceLevel: "96% EU AI Act Konformität bei 23% besserer Früherkennung"
        },
        keyLearnings: [
          "Transparenz erhöht Vertrauen der Ärzte in KI-Empfehlungen",
          "Kontinuierliches Monitoring verhindert schleichende Qualitätsverschlechterung",
          "Human-in-the-Loop bleibt kritisch für komplexe medizinische Entscheidungen",
          "Diverse Trainingsdaten sind essentiell für faire KI-Systeme"
        ]
      }
    },
    {
      title: "Algorithmic Impact Assessment (AIA)",
      description: "Systematische Bewertung der Auswirkungen von KI-Systemen auf Patienten, Behandlungsqualität und Gesundheitsgerechtigkeit",
      examples: ["Vorhersage von Behandlungserfolg", "Personalisierte Medikation", "Triage-Algorithmen", "Prognose-Modelle für chronische Krankheiten"],
      risk: "Hoch",
      fineExample: "Zusätzlich zu EU AI Act: DSGVO-Bußgelder bis 20 Mio. €",
      realWorldScenario: {
        title: "⚕️ Praxis-Szenario: KI-gestützte Intensivmedizin-Triage",
        context: "Ein großes Krankenhaus verwendet ein KI-System zur Prioritätssetzung in der Notaufnahme. Das System bewertet die Dringlichkeit basierend auf Symptomen, Vitalwerten und Krankengeschichte.",
        challenge: "Wie kann sichergestellt werden, dass das Triage-System fair und diskriminierungsfrei funktioniert?",
        solution: {
          step1: {
            title: "⚖️ Fairness-by-Design Implementation",
            description: "Systematische Integration von Fairness-Prinzipien in die KI-Entwicklung",
            principles: [
              {
                principle: "Demographische Parität",
                implementation: "Gleiche Triage-Raten unabhängig von Geschlecht, Alter, Ethnizität",
                monitoring: "Wöchentliche Auswertung der Triage-Entscheidungen nach Patientengruppen"
              },
              {
                principle: "Chancengleichheit",
                implementation: "Identische True-Positive-Raten für alle Patientengruppen",
                monitoring: "Monatliche Analyse der Behandlungsergebnisse nach demografischen Merkmalen"
              },
              {
                principle: "Kalibrierte Gerechtigkeit",
                implementation: "Vorhersagegenauigkeit ist über alle Gruppen hinweg gleich",
                monitoring: "Kontinuierliche Kalibrierung der Risiko-Scores"
              }
            ]
          },
          step2: {
            title: "📈 Bias-Detection und Mitigation",
            description: "Proaktive Erkennung und Korrektur von algorithmischen Verzerrungen",
            techniques: [
              {
                name: "Statistical Parity Testing",
                purpose: "Erkennung von direkter Diskriminierung",
                frequency: "Täglich automatisiert",
                threshold: "Max. 5% Abweichung zwischen Gruppen"
              },
              {
                name: "Equalized Odds Monitoring",
                purpose: "Überwachung der Vorhersagequalität",
                frequency: "Wöchentlich",
                threshold: "Identische Sensitivität und Spezifität"
              },
              {
                name: "Counterfactual Fairness",
                purpose: "Test alternativer Entscheidungsszenarien",
                frequency: "Monatlich",
                threshold: "Entscheidung bleibt gleich bei Änderung geschützter Merkmale"
              }
            ]
          },
          step3: {
            title: "👩‍⚕️ Clinical Decision Support Integration",
            description: "Nahtlose Integration in klinische Arbeitsabläufe mit maximaler Transparenz",
            workflow: [
              "KI-System bewertet eingehende Patienten binnen 30 Sekunden",
              "Triage-Empfehlung wird mit Confidence-Level angezeigt",
              "Medizinisches Personal erhält erklärbare Begründung",
              "Endgültige Entscheidung liegt immer beim Arzt",
              "Alle Entscheidungen werden für Audit-Zwecke protokolliert"
            ]
          }
        },
        outcome: {
          patientBenefit: "Faire und schnelle Notfall-Triage ohne diskriminierende Verzerrungen",
          clinicBenefit: "Optimierte Ressourcennutzung bei vollständiger EU AI Act Compliance",
          societalBenefit: "Erhöhte Gesundheitsgerechtigkeit in der Notfallversorgung"
        },
        keyLearnings: [
          "Algorithmic Fairness erfordert kontinuierliche Überwachung und Anpassung",
          "Transparenz der KI-Entscheidungen ist kritisch für Akzeptanz",
          "Diverse Entwicklungsteams reduzieren Bias-Risiken erheblich",
          "Reguläre Audits durch externe Experten verbessern Systemqualität"
        ]
      }
    },
    {
      title: "Datenqualität und Robustheit (Art. 10 EU AI Act)",
      description: "Hochwertige, repräsentative und ausreichende Trainingsdaten sind essentiell für sichere medizinische KI-Systeme",
      examples: ["Diverse Patientenpopulationen", "Annotationsqualität", "Datenaktualität", "Cross-Domain Validation"],
      risk: "Kritisch",
      fineExample: "Produkthaftung + EU AI Act Sanktionen",
      implementation: {
        requirements: [
          "Repräsentative Trainingsdaten aller Patientengruppen",
          "Validierung der Datenqualität und -vollständigkeit",
          "Kontinuierliche Überwachung der Modell-Performance",
          "Dokumentation der Datenprovenienz und -verarbeitung"
        ],
        template: `
// Healthcare AI Data Quality Framework
const healthcareAIDataQuality = {
  datasetId: generateSecureId(),
  lastValidated: new Date().toISOString(),
  legalBasis: 'EU AI Act Art. 10',
  
  qualityMetrics: {
    representativeness: {
      patientDemographics: {
        ageDistribution: 'representative_of_target_population',
        genderBalance: 'proportional_to_disease_prevalence',
        ethnicDiversity: 'reflects_catchment_area',
        socioeconomicStatus: 'includes_all_segments'
      },
      clinicalVariability: {
        diseaseSeverity: 'mild_to_severe_spectrum',
        comorbidities: 'realistic_patient_complexity',
        treatmentHistory: 'various_prior_interventions'
      }
    },
    
    dataIntegrity: {
      completeness: {
        required: 'no_missing_critical_values',
        threshold: '95_percent_complete_records',
        monitoring: 'automated_quality_checks'
      },
      accuracy: {
        annotation_quality: 'expert_validated_labels',
        inter_rater_agreement: 'kappa_score_above_0.8',
        temporal_consistency: 'longitudinal_data_validated'
      }
    },
    
    bias_monitoring: {
      performance_parity: {
        across_demographics: 'equal_accuracy_all_groups',
        measurement: 'monthly_fairness_audits',
        threshold: 'max_5_percent_deviation'
      },
      representation_bias: {
        training_distribution: 'matches_real_world_prevalence',
        validation: 'stratified_sampling_approach',
        correction: 'weighted_training_if_needed'
      }
    }
  },
  
  robustness_testing: {
    adversarial_examples: {
      medical_imaging: 'noise_injection_tests',
      clinical_data: 'outlier_robustness_validation',
      frequency: 'quarterly_penetration_testing'
    },
    distribution_shift: {
      temporal_drift: 'model_performance_over_time',
      institutional_variation: 'cross_hospital_validation',
      equipment_changes: 'device_compatibility_testing'
    }
  }
};
        `
      }
    }
  ];
  const riskCategories = [
    {
      category: "Hochrisiko-KI (Annex III)",
      icon: AlertTriangle,
      color: "red",
      description: "KI-Systeme für kritische medizinische Entscheidungen",
      examples: [
        "Radiologische Diagnosesysteme",
        "Medikamentendosierung und -auswahl",
        "Intensivmedizin-Monitoring",
        "Robotergestützte Chirurgie",
        "Früherkennung kritischer Zustandsveränderungen"
      ],
      requirements: [
        "Vollständiges Risikomanagementsystem",
        "Umfassende Dokumentation und CE-Kennzeichnung",
        "Human Oversight bei allen kritischen Entscheidungen",
        "Post-Market Monitoring und Incident Reporting",
        "Robustheit- und Cybersecurity-Tests"
      ],
      implementation: {
        title: "KI-gestützte Sepsis-Früherkennung",
        description: "Implementierung eines Systems zur frühzeitigen Erkennung von Sepsis auf Intensivstationen",
        phases: [
          {
            name: "Risikobewertung und Systemdesign",
            duration: "8-12 Wochen",
            activities: [
              "Medizinische Risikoanalyse mit Intensivmedizinern",
              "Technische Anforderungsdefinition",
              "Ethik-Committee Review und Genehmigung",
              "Datenschutz-Folgenabschätzung für KI-System"
            ]
          },
          {
            name: "Entwicklung und Validierung",
            duration: "16-24 Wochen",
            activities: [
              "Training mit diversen Patientendaten",
              "Klinische Validierung in kontrollierten Szenarien",
              "Bias-Testing für verschiedene Patientengruppen",
              "Integration in bestehende Monitoring-Systeme"
            ]
          },
          {
            name: "Pilot-Deployment mit Human Oversight",
            duration: "12-16 Wochen",
            activities: [
              "Schrittweise Einführung auf einer Pilotstation",
              "Kontinuierliches Feedback von medizinischem Personal",
              "Performance-Monitoring und Feinjustierung",
              "Incident-Tracking und Qualitätssicherung"
            ]
          }
        ]
      }
    },
    {
      category: "Limitiertes Risiko",
      icon: Eye,
      color: "orange",
      description: "KI-Systeme mit erhöhten Transparenzanforderungen",
      examples: [
        "Chatbots für Patienteninformation",
        "Symptom-Checker Apps",
        "Präventive Gesundheitsempfehlungen",
        "Terminplanungs-Assistenten",
        "Medikamenten-Erinnerungssysteme"
      ],
      requirements: [
        "Klare Information über KI-Nutzung",
        "Transparente Entscheidungsfindung",
        "Nutzerfreundliche Erklärungen",
        "Opt-out Möglichkeiten",
        "Grundlegende Sicherheitsmaßnahmen"
      ],
      implementation: {
        title: "Intelligenter Patientenservice-Chatbot",
        description: "KI-Assistent für häufige Patientenfragen und Terminvereinbarungen",
        features: [
          {
            name: "Transparente KI-Kennzeichnung",
            description: "Klare Kommunikation, dass Nutzer mit KI-System interagieren",
            requirement: "Sofortige Offenlegung bei erstem Kontakt"
          },
          {
            name: "Begrenzte Kompetenz",
            description: "System gibt keine medizinischen Diagnosen oder Behandlungsempfehlungen",
            safeguards: "Automatische Weiterleitung an Fachpersonal bei medizinischen Fragen"
          },
          {
            name: "Human Handover",
            description: "Jederzeit verfügbare Option zur Verbindung mit menschlichem Personal",
            implementation: "Ein-Klick Weiterleitung an Patientenservice"
          }
        ]
      }
    },
    {
      category: "Minimales Risiko",
      icon: CheckCircle2,
      color: "green",
      description: "KI-Systeme mit geringem Risikopotenzial",
      examples: [
        "Automatische Transkription von Arztbriefen",
        "Optimierung von Reinigungsabläufen",
        "Energiemanagement in Krankenhäusern",
        "Parkplatz-Management",
        "Kantinen-Menüplanung"
      ],
      requirements: [
        "Grundlegende Transparenz bei direkter Interaktion",
        "Einhaltung bestehender Sektorregulierung",
        "Minimale Dokumentationsanforderungen",
        "Freiwillige Anwendung von Best Practices"
      ],
      implementation: {
        title: "KI-optimierte Krankenhauslogistik",
        description: "Automatisierung von Verwaltungsprozessen und Ressourcenmanagement",
        applications: [
          "Vorhersage des Bettenbedarfs basierend auf historischen Daten",
          "Optimierung der Materialbestellung und Lagerbestände",
          "Intelligente Wartungsplanung für medizinische Geräte",
          "Personalplanung unter Berücksichtigung von Arbeitsschutzbestimmungen"
        ]
      }
    }
  ];
  const biasMonitoring = [
    {
      type: "Demografischer Bias",
      icon: Users,
      description: "Systematische Benachteiligung bestimmter Patientengruppen",
      examples: [
        "KI-System erkennt Hautkrebs bei dunkler Hautfarbe schlechter",
        "Herzinfarkt-Diagnose ist bei Frauen weniger genau",
        "Schmerztherapie-Algorithmen benachteiligen ältere Patienten",
        "Psychische Erkrankungen werden bei Männern unterdiagnostiziert"
      ],
      detectionMethods: [
        "Statistische Parität zwischen Demografiegruppen",
        "Equalised Odds für Sensitivität und Spezifität",
        "Calibration-Tests für Vorhersagegenauigkeit",
        "Individual Fairness für ähnliche Patienten"
      ],
      mitigationStrategies: [
        "Diverse und repräsentative Trainingsdaten sammeln",
        "Algorithmus-Audits durch diverse Expertenteams",
        "Fairness-Constraints in Modelltraining integrieren",
        "Kontinuierliches Post-Deployment Monitoring"
      ],
      technicalImplementation: `
// Bias Detection Framework
const biasMonitoring = {
  demographicParity: {
    protectedAttributes: ['age', 'gender', 'ethnicity', 'socioeconomic_status'],
    fairnessThreshold: 0.05, // max 5% difference between groups
    measurement: 'weekly_automated_analysis',
    
    calculateParity: (predictions, protectedAttribute) => {
      const groups = groupBy(predictions, protectedAttribute);
      const positiveRates = groups.map(group => 
        group.filter(p => p.prediction === 'positive').length / group.length
      );
      return Math.max(...positiveRates) - Math.min(...positiveRates);
    }
  },
  
  equalizedOdds: {
    metrics: ['sensitivity', 'specificity', 'ppv', 'npv'],
    acceptableDeviation: 0.03, // max 3% deviation
    monitoring: 'real_time_dashboard',
    
    assessFairness: (trueLabels, predictions, protectedAttribute) => {
      // Implementation for equalized odds calculation
      return calculateGroupMetrics(trueLabels, predictions, protectedAttribute);
    }
  },
  
  interventionTriggers: {
    immediate: 'bias_threshold_exceeded',
    scheduled: 'monthly_comprehensive_audit',
    adhoc: 'stakeholder_concern_raised'
  }
};
      `
    },
    {
      type: "Institutioneller Bias",
      icon: Building2,
      description: "Verzerrungen durch krankenhausspezifische Praktiken und Patientenpopulation",
      examples: [
        "Universitätsklinik vs. ländliches Krankenhaus",
        "Privatklinik vs. öffentliche Versorgung",
        "Spezialklinik vs. Allgemeinversorgung",
        "Regionale Unterschiede in Behandlungsstandards"
      ],
      detectionMethods: [
        "Cross-Institution Validation Studies",
        "External Validation mit unabhängigen Datensätzen",
        "Performance-Monitoring bei Deployment in neuen Kliniken",
        "Systematic Review der institutionellen Behandlungspraktiken"
      ],
      mitigationStrategies: [
        "Multi-Center Training mit diversen Institutionen",
        "Transfer Learning für neue Deployment-Umgebungen",
        "Institution-spezifische Kalibrierung der Algorithmen",
        "Federated Learning für datenschutzkonforme Kooperation"
      ]
    },
    {
      type: "Temporaler Bias",
      icon: Clock,
      description: "Veränderungen in medizinischen Standards und Behandlungsmethoden über Zeit",
      examples: [
        "Neue Behandlungsleitlinien ändern Standardtherapie",
        "Technologische Fortschritte in Diagnostik",
        "Pandemie verändert Behandlungsprioritäten",
        "Demografischer Wandel der Patientenpopulation"
      ],
      detectionMethods: [
        "Kontinuierliches Performance-Tracking über Zeit",
        "Concept Drift Detection in Eingabedaten",
        "Periodic Recalibration der Modell-Parameter",
        "Trend-Analyse der klinischen Outcomes"
      ],
      mitigationStrategies: [
        "Automated Model Retraining Pipelines",
        "Ensemble Methods mit zeitgewichteten Modellen",
        "Active Learning für kontinuierliche Verbesserung",
        "Version Control und Rollback-Mechanismen"
      ]
    }
  ];
  const humanOversightFramework = [
    {
      level: "Human-in-the-Loop (HITL)",
      description: "Mensch trifft finale Entscheidung basierend auf KI-Empfehlung",
      applications: [
        "Radiologische Diagnosestellung",
        "Therapieplan-Erstellung",
        "Medikamentendosierung",
        "Chirurgische Entscheidungen"
      ],
      implementation: {
        title: "KI-unterstützte Radiologie-Diagnose",
        workflow: [
          {
            step: "KI-Analyse",
            description: "Automatische Bildanalyse identifiziert verdächtige Regionen",
            output: "Annotiertes Bild mit Confidence-Scores",
            timing: "30-60 Sekunden"
          },
          {
            step: "Ärztliche Bewertung",
            description: "Radiologe prüft KI-Empfehlung und trifft eigenständige Diagnose",
            tools: "Interaktive Visualisierung, Vergleichsbilder, Patientenhistorie",
            timing: "5-15 Minuten"
          },
          {
            step: "Finale Entscheidung",
            description: "Arzt bestätigt, modifiziert oder verwirft KI-Empfehlung",
            documentation: "Begründung bei Abweichung von KI-Empfehlung",
            quality_assurance: "Stichprobenartige Zweitbegutachtung"
          }
        ],
        safeguards: [
          "KI-System kann keine eigenständigen Diagnosen erstellen",
          "Zeitlimits verhindern überstürzte Entscheidungen",
          "Pflichtfelder für ärztliche Begründung",
          "Automatische Eskalation bei kritischen Befunden"
        ]
      }
    },
    {
      level: "Human-on-the-Loop (HOTL)",
      description: "Kontinuierliche Überwachung mit Interventionsmöglichkeit",
      applications: [
        "Intensivmedizin-Monitoring",
        "Medikamentenpumpen-Steuerung",
        "Anästhesie-Überwachung",
        "Herz-Kreislauf-Monitoring"
      ],
      implementation: {
        title: "Intelligentes Intensivstations-Monitoring",
        monitoring: [
          {
            parameter: "Vitalzeichen",
            ai_function: "Kontinuierliche Überwachung und Trendanalyse",
            human_role: "Interpretation im klinischen Kontext",
            intervention: "Bei Alarm-Situationen oder ungewöhnlichen Mustern"
          },
          {
            parameter: "Medikamentenwirkung",
            ai_function: "Dosierungsoptimierung basierend auf Patientenreaktion",
            human_role: "Freigabe von Dosierungsänderungen",
            intervention: "Überprüfung aller automatischen Anpassungen"
          },
          {
            parameter: "Infektionsrisiko",
            ai_function: "Früherkennung von Sepsis-Anzeichen",
            human_role: "Klinische Validation der KI-Alerts",
            intervention: "Sofortige Untersuchung bei KI-Warnung"
          }
        ],
        controls: [
          "Echtzeit-Dashboard für medizinisches Personal",
          "Konfigurierbare Alarmschwellen",
          "Override-Funktionen für alle KI-Empfehlungen",
          "Audit-Trail aller menschlichen Interventionen"
        ]
      }
    },
    {
      level: "Human-over-the-Loop (HOTL)",
      description: "Strategische Governance und Systemoptimierung",
      applications: [
        "KI-System Performance Überwachung",
        "Algorithmus-Updates und -Verbesserungen",
        "Bias-Detection und Fairness-Audits",
        "Compliance und Risikomanagement"
      ],
      implementation: {
        title: "KI-Governance und Qualitätssicherung",
        governance: [
          {
            role: "Clinical AI Committee",
            composition: "Ärzte, KI-Experten, Ethiker, Datenschutzbeauftragte",
            responsibilities: [
              "Überprüfung neuer KI-Implementierungen",
              "Bewertung von Performance-Metriken",
              "Entscheidungen über Modell-Updates",
              "Compliance-Überwachung"
            ],
            frequency: "Monatliche Sitzungen + Ad-hoc bei kritischen Ereignissen"
          },
          {
            role: "AI Ethics Board",
            composition: "Ethiker, Patientenvertreter, Rechtexperten, Kliniker",
            responsibilities: [
              "Ethische Bewertung von KI-Entscheidungen",
              "Fairness-Audits und Bias-Monitoring",
              "Patientenrechte und Transparenz",
              "Konfliktlösung bei ethischen Dilemmata"
            ],
            frequency: "Quartalsweise + Sondertermine bei ethischen Fragen"
          }
        ]
      }
    }
  ];
  const implementationRoadmap = [
    {
      phase: "EU AI Act Readiness Assessment",
      duration: "6-8 Wochen",
      color: "blue",
      tasks: [
        "KI-System Inventarisierung und Risikokategorisierung",
        "Gap-Analyse bestehender KI-Governance Strukturen",
        "EU AI Act Compliance Audit für Hochrisiko-Systeme",
        "Stakeholder-Workshops mit medizinischem Personal",
        "Rechtliche Bewertung und Implementierungsroadmap"
      ],
      deliverables: [
        "AI System Registry mit Risikobewertung",
        "EU AI Act Gap-Analyse Report",
        "Compliance Roadmap mit Prioritäten",
        "Stakeholder Engagement Plan"
      ]
    },
    {
      phase: "Technische AI Governance",
      duration: "12-16 Wochen",
      color: "green",
      tasks: [
        "Risikomanagementsystem für Hochrisiko-KI aufbauen",
        "Bias-Monitoring und Fairness-Testing implementieren",
        "Human Oversight Mechanismen etablieren",
        "Algorithm Transparency und Explainability",
        "Post-Market Monitoring System einrichten"
      ],
      deliverables: [
        "AI Risk Management Framework",
        "Bias Detection und Mitigation Tools",
        "Human-in-the-Loop Workflows",
        "Algorithmic Transparency Dashboard"
      ]
    },
    {
      phase: "Organisatorische Integration",
      duration: "8-12 Wochen",
      color: "orange",
      tasks: [
        "AI Ethics Committee und Governance-Strukturen",
        "Personal-Schulungen für EU AI Act Compliance",
        "Incident Response Prozesse für KI-Systeme",
        "Qualitätsmanagementsystem Integration",
        "Audit und Compliance Dokumentation"
      ],
      deliverables: [
        "AI Governance Committee Charter",
        "Comprehensive Training Program",
        "AI Incident Response Playbook",
        "Audit-Ready Documentation Suite"
      ]
    },
    {
      phase: "Continuous Compliance & Optimization",
      duration: "4-6 Wochen",
      color: "purple",
      tasks: [
        "Live Monitoring und Performance Tracking",
        "Continuous Model Validation und Updates",
        "Regular Compliance Audits und Assessments",
        "Stakeholder Feedback Integration",
        "Future-Proofing für kommende Regulierungen"
      ],
      deliverables: [
        "Live Compliance Dashboard",
        "Automated Monitoring Systems",
        "Regular Audit Reports",
        "Future Compliance Strategy"
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
    const totalItems = 32;
    return Math.round(checkedItems.size / totalItems * 100);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Healthcare AI Compliance – Medizinische KI rechtssicher einsetzen",
        description: "Healthcare AI Compliance: Medizinische KI, EU AI Act, FDA-Regularien, Patientensicherheit. ✓ Risikobewertung ✓ Zulassung ✓ Post-Market Surveillance.",
        canonical: "/wissen/branchen/healthcare-ai-compliance",
        keywords: "Healthcare AI Compliance, Medizinische KI, EU AI Act Healthcare, FDA AI Regularien, MDR Software, Patientensicherheit KI",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Healthcare AI Compliance – Medizinische KI rechtssicher einsetzen",
          "description": "Umfassender Leitfaden zur rechtssicheren Implementierung von KI-Systemen im Gesundheitswesen unter Berücksichtigung von EU AI Act, FDA-Regularien und MDR.",
          "author": {
            "@type": "Organization",
            "name": "Marsstein"
          },
          "datePublished": "2024-01-15",
          "dateModified": "2024-01-15",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://marsstein.com/wissen/branchen/healthcare-ai-compliance"
          }
        }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
      /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative py-20 md:py-28", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
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
                      /* @__PURE__ */ jsx(Brain, { className: "h-4 w-4" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Healthcare AI Excellence" })
                    ] }),
                    /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
                      "Healthcare AI Compliance",
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2", children: "EU AI Act Guide" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Meistern Sie die Zukunft der medizinischen KI-Compliance. Von EU AI Act über Bias-Monitoring bis hin zu ethischer KI-Governance im Gesundheitswesen." }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "EU AI Act Konformität für medizinische Hochrisiko-KI" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Bias-Monitoring und algorithmische Fairness" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Human-in-the-Loop für kritische medizinische Entscheidungen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
                      /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=healthcare-ai", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 group", children: [
                        /* @__PURE__ */ jsx(Brain, { className: "mr-2 h-5 w-5" }),
                        "Healthcare AI Demo buchen",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                      ] }) }),
                      /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                        "EU AI Act Healthcare Guide"
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
                        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "AI Compliance Center" }),
                        /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-700", children: [
                          getCompletionPercentage(),
                          "% EU AI Act Ready"
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
                          /* @__PURE__ */ jsx(Brain, { className: "h-4 w-4 text-blue-500 animate-pulse" }),
                          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "AI Act Ready" })
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
        /* @__PURE__ */ jsxs("section", { id: "overview", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "Healthcare AI Compliance Überblick"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Brain, { className: "h-6 w-6 text-blue-600" }),
                "EU AI Act für Healthcare"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Der EU AI Act klassifiziert medizinische KI-Systeme als Hochrisiko-Anwendungen und erfordert umfassende Compliance-Maßnahmen für sichere und faire KI-Nutzung." }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "Risikomanagementsystem für medizinische KI",
                  "Datenqualität und Repräsentativität sicherstellen",
                  "Transparenz und Erklärbarkeit von KI-Entscheidungen",
                  "Human Oversight bei kritischen medizinischen Entscheidungen"
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-blue-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-800 dark:text-blue-400", children: "Compliance Deadline" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700 dark:text-blue-300", children: "EU AI Act für Hochrisiko-Systeme: Vollständige Compliance bis August 2026" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Eye, { className: "h-6 w-6 text-purple-600" }),
                "Bias & Fairness in medizinischer KI"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Algorithmic Bias in der Medizin kann zu lebensbedrohlichen Konsequenzen führen. Kontinuierliches Fairness-Monitoring ist essentiell für sichere KI-Systeme." }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  "Demografische Parität in KI-Diagnosen gewährleisten",
                  "Kontinuierliches Bias-Monitoring implementieren",
                  "Diverse Trainingsdaten für alle Patientengruppen",
                  "Fairness-Audits durch multidisziplinäre Teams"
                ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 text-purple-600 flex-shrink-0 mt-1" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 dark:bg-purple-950/30 rounded-lg border border-purple-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                    /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4 text-purple-600" }),
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-800 dark:text-purple-400", children: "Best Practice" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 dark:text-purple-300", children: "Implementieren Sie kontinuierliches A/B-Testing für Fairness in Echtzeit" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "eu-ai-act", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "EU AI Act Healthcare-Anforderungen"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: euAiActRequirements.map((requirement, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-blue-500", children: [
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
                        "Sanktionsrisiko"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-50 dark:bg-red-950/30 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 dark:text-red-300 font-medium", children: requirement.fineExample }) })
                    ] })
                  ] }),
                  requirement.realWorldScenario && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                    /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => setExpandedSection(expandedSection === `ai-scenario-${index}` ? null : `ai-scenario-${index}`),
                        className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                        children: [
                          /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4" }),
                          "Praxis-Szenario anzeigen",
                          /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                            "h-4 w-4 transition-transform",
                            expandedSection === `ai-scenario-${index}` && "rotate-180"
                          ) })
                        ]
                      }
                    ),
                    expandedSection === `ai-scenario-${index}` && /* @__PURE__ */ jsx(
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
                              step.components && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-3", children: step.components.map((component, compIndex) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                                /* @__PURE__ */ jsx("div", { className: "font-medium text-blue-900 dark:text-blue-100 text-sm mb-1", children: component.name }),
                                /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-700 dark:text-blue-300 mb-2", children: component.details }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400", children: [
                                  "✓ ",
                                  component.mitigation
                                ] })
                              ] }, compIndex)) }),
                              step.features && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: step.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                                /* @__PURE__ */ jsx(Brain, { className: "h-3 w-3 text-purple-600 mt-1 flex-shrink-0" }),
                                /* @__PURE__ */ jsx("span", { children: feature })
                              ] }, featureIndex)) }),
                              step.monitoring && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: step.monitoring.map((monitor, monitorIndex) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-green-500 pl-4", children: [
                                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                                  /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-green-600" }),
                                  /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: monitor.metric }),
                                  /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: monitor.frequency })
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-1", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Schwellenwert:" }),
                                  " ",
                                  monitor.threshold
                                ] }),
                                /* @__PURE__ */ jsxs("div", { className: "text-xs text-blue-600 dark:text-blue-400", children: [
                                  /* @__PURE__ */ jsx("strong", { children: "Maßnahme:" }),
                                  " ",
                                  monitor.action
                                ] })
                              ] }, monitorIndex)) })
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
                        onClick: () => setExpandedSection(expandedSection === `implementation-${index}` ? null : `implementation-${index}`),
                        className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                        children: [
                          /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                          "Technische Implementation",
                          /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                            "h-4 w-4 transition-transform",
                            expandedSection === `implementation-${index}` && "rotate-180"
                          ) })
                        ]
                      }
                    ),
                    expandedSection === `implementation-${index}` && /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsxs("section", { id: "risk-categories", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "KI-Risikokategorien im Gesundheitswesen"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: riskCategories.map((category, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(category.icon, { className: cn(
                "h-6 w-6",
                category.color === "red" && "text-red-600",
                category.color === "orange" && "text-orange-600",
                category.color === "green" && "text-green-600"
              ) }),
              category.category
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: category.description }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Anwendungsbeispiele" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: category.examples.map((example, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: cn(
                      "h-4 w-4 mt-0.5 flex-shrink-0",
                      category.color === "red" && "text-red-600",
                      category.color === "orange" && "text-orange-600",
                      category.color === "green" && "text-green-600"
                    ) }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: example })
                  ] }, i)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "EU AI Act Anforderungen" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: category.requirements.map((req, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: req })
                  ] }, i)) })
                ] })
              ] }),
              category.implementation && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setExpandedSection(expandedSection === `risk-impl-${index}` ? null : `risk-impl-${index}`),
                    className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                    children: [
                      /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4" }),
                      "Implementierungsbeispiel anzeigen",
                      /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "h-4 w-4 transition-transform",
                        expandedSection === `risk-impl-${index}` && "rotate-180"
                      ) })
                    ]
                  }
                ),
                expandedSection === `risk-impl-${index}` && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    className: "mt-4",
                    children: /* @__PURE__ */ jsxs("div", { className: cn(
                      "p-4 rounded-lg border",
                      category.color === "red" && "bg-red-50 dark:bg-red-950/30 border-red-200",
                      category.color === "orange" && "bg-orange-50 dark:bg-orange-950/30 border-orange-200",
                      category.color === "green" && "bg-green-50 dark:bg-green-950/30 border-green-200"
                    ), children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium mb-3", children: category.implementation.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: category.implementation.description }),
                      category.implementation.phases && /* @__PURE__ */ jsx("div", { className: "space-y-4", children: category.implementation.phases.map((phase, phaseIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded border", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                          /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 text-blue-600" }),
                          /* @__PURE__ */ jsx("span", { className: "font-medium", children: phase.name }),
                          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: phase.duration })
                        ] }),
                        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: phase.activities.map((activity, actIndex) => /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                          "• ",
                          activity
                        ] }, actIndex)) })
                      ] }, phaseIndex)) }),
                      category.implementation.features && /* @__PURE__ */ jsx("div", { className: "space-y-3", children: category.implementation.features.map((feature, featureIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded border", children: [
                        /* @__PURE__ */ jsx("div", { className: "font-medium text-sm mb-1", children: feature.name }),
                        /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1", children: feature.description }),
                        feature.requirement && /* @__PURE__ */ jsxs("div", { className: "text-xs text-blue-600 dark:text-blue-400", children: [
                          /* @__PURE__ */ jsx("strong", { children: "Anforderung:" }),
                          " ",
                          feature.requirement
                        ] }),
                        feature.safeguards && /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400", children: [
                          /* @__PURE__ */ jsx("strong", { children: "Schutzmaßnahme:" }),
                          " ",
                          feature.safeguards
                        ] }),
                        feature.implementation && /* @__PURE__ */ jsxs("div", { className: "text-xs text-purple-600 dark:text-purple-400", children: [
                          /* @__PURE__ */ jsx("strong", { children: "Umsetzung:" }),
                          " ",
                          feature.implementation
                        ] })
                      ] }, featureIndex)) }),
                      category.implementation.applications && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: category.implementation.applications.map((app, appIndex) => /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                        "• ",
                        app
                      ] }, appIndex)) })
                    ] })
                  }
                )
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "bias-monitoring", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "Bias-Monitoring und algorithmische Fairness"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: biasMonitoring.map((bias, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(bias.icon, { className: "h-6 w-6 text-purple-600" }),
              bias.type
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: bias.description }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Problematische Beispiele" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: bias.examples.map((example, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-2 bg-red-50 dark:bg-red-950/30 rounded", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: example })
                  ] }, i)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Erkennungsmethoden" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: bias.detectionMethods.map((method, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded", children: [
                    /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: method })
                  ] }, i)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Mitigation-Strategien" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: bias.mitigationStrategies.map((strategy, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: strategy })
                ] }, i)) })
              ] }),
              bias.technicalImplementation && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setExpandedSection(expandedSection === `bias-tech-${index}` ? null : `bias-tech-${index}`),
                    className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                    children: [
                      /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
                      "Technische Implementation",
                      /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "h-4 w-4 transition-transform",
                        expandedSection === `bias-tech-${index}` && "rotate-180"
                      ) })
                    ]
                  }
                ),
                expandedSection === `bias-tech-${index}` && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    className: "mt-4",
                    children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-xs", children: bias.technicalImplementation }) })
                  }
                )
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
        /* @__PURE__ */ jsxs("section", { id: "human-oversight", className: "space-y-8 scroll-mt-32", children: [
          /* @__PURE__ */ jsx(
            motion.h2,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "text-3xl font-bold mb-8 scroll-mt-24",
              children: "Human-in-the-Loop Frameworks"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: humanOversightFramework.map((framework, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-green-600" }),
              framework.level
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: framework.description }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Medizinische Anwendungen" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: framework.applications.map((app, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded", children: [
                  /* @__PURE__ */ jsx(Stethoscope, { className: "h-4 w-4 text-green-600" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: app })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => setExpandedSection(expandedSection === `human-impl-${index}` ? null : `human-impl-${index}`),
                    className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium",
                    children: [
                      /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4" }),
                      "Implementierungsdetails anzeigen",
                      /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "h-4 w-4 transition-transform",
                        expandedSection === `human-impl-${index}` && "rotate-180"
                      ) })
                    ]
                  }
                ),
                expandedSection === `human-impl-${index}` && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    className: "mt-4",
                    children: /* @__PURE__ */ jsxs("div", { className: "bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium mb-3", children: framework.implementation.title }),
                      framework.implementation.workflow && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsx("h6", { className: "font-medium text-sm", children: "Workflow-Schritte:" }),
                        framework.implementation.workflow.map((step, stepIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded border", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                            /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold", children: stepIndex + 1 }),
                            /* @__PURE__ */ jsx("span", { className: "font-medium", children: step.step }),
                            step.timing && /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: step.timing })
                          ] }),
                          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2", children: step.description }),
                          step.output && /* @__PURE__ */ jsxs("div", { className: "text-xs text-blue-600 dark:text-blue-400 mb-1", children: [
                            /* @__PURE__ */ jsx("strong", { children: "Output:" }),
                            " ",
                            step.output
                          ] }),
                          step.tools && /* @__PURE__ */ jsxs("div", { className: "text-xs text-purple-600 dark:text-purple-400 mb-1", children: [
                            /* @__PURE__ */ jsx("strong", { children: "Tools:" }),
                            " ",
                            step.tools
                          ] }),
                          step.documentation && /* @__PURE__ */ jsxs("div", { className: "text-xs text-orange-600 dark:text-orange-400", children: [
                            /* @__PURE__ */ jsx("strong", { children: "Dokumentation:" }),
                            " ",
                            step.documentation
                          ] }),
                          step.quality_assurance && /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400", children: [
                            /* @__PURE__ */ jsx("strong", { children: "QS:" }),
                            " ",
                            step.quality_assurance
                          ] })
                        ] }, stepIndex)),
                        framework.implementation.safeguards && /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                          /* @__PURE__ */ jsx("h6", { className: "font-medium text-sm mb-2", children: "Sicherheitsmaßnahmen:" }),
                          /* @__PURE__ */ jsx("div", { className: "space-y-1", children: framework.implementation.safeguards.map((safeguard, sgIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                            /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3 w-3 text-green-600 mt-1 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { children: safeguard })
                          ] }, sgIndex)) })
                        ] })
                      ] }),
                      framework.implementation.monitoring && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsx("h6", { className: "font-medium text-sm", children: "Monitoring-Parameter:" }),
                        framework.implementation.monitoring.map((monitor, monIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded border", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                            /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-blue-600" }),
                            /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: monitor.parameter })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-2 text-xs", children: [
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("strong", { className: "text-blue-600", children: "KI-Funktion:" }),
                              /* @__PURE__ */ jsx("br", {}),
                              monitor.ai_function
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("strong", { className: "text-green-600", children: "Menschliche Rolle:" }),
                              /* @__PURE__ */ jsx("br", {}),
                              monitor.human_role
                            ] }),
                            /* @__PURE__ */ jsxs("div", { children: [
                              /* @__PURE__ */ jsx("strong", { className: "text-orange-600", children: "Intervention:" }),
                              /* @__PURE__ */ jsx("br", {}),
                              monitor.intervention
                            ] })
                          ] })
                        ] }, monIndex)),
                        framework.implementation.controls && /* @__PURE__ */ jsxs("div", { className: "mt-4", children: [
                          /* @__PURE__ */ jsx("h6", { className: "font-medium text-sm mb-2", children: "Kontroll-Mechanismen:" }),
                          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: framework.implementation.controls.map((control, ctrlIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
                            /* @__PURE__ */ jsx(Settings, { className: "h-3 w-3 text-blue-600 mt-1 flex-shrink-0" }),
                            /* @__PURE__ */ jsx("span", { children: control })
                          ] }, ctrlIndex)) })
                        ] })
                      ] }),
                      framework.implementation.governance && /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsx("h6", { className: "font-medium text-sm", children: "Governance-Struktur:" }),
                        framework.implementation.governance.map((gov, govIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-3 rounded border", children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                            /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 text-purple-600" }),
                            /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: gov.role }),
                            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: gov.frequency })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400 mb-2", children: [
                            /* @__PURE__ */ jsx("strong", { children: "Zusammensetzung:" }),
                            " ",
                            gov.composition
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                            /* @__PURE__ */ jsx("strong", { children: "Verantwortlichkeiten:" }),
                            /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside mt-1 space-y-1", children: gov.responsibilities.map((resp, respIndex) => /* @__PURE__ */ jsx("li", { children: resp }, respIndex)) })
                          ] })
                        ] }, govIndex))
                      ] })
                    ] })
                  }
                )
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
                "Interactive AI Compliance-Checkliste"
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
                category: "EU AI Act Grundlagen",
                items: [
                  "KI-Systeme inventarisiert und kategorisiert",
                  "Risikobewertung für alle KI-Anwendungen durchgeführt",
                  "Hochrisiko-KI identifiziert und dokumentiert",
                  "Conformity Assessment Procedures definiert"
                ]
              },
              {
                category: "Datenqualität & Bias-Monitoring",
                items: [
                  "Diverse und repräsentative Trainingsdaten sichergestellt",
                  "Bias-Detection Tools implementiert",
                  "Fairness-Metriken kontinuierlich überwacht",
                  "Algorithmic Impact Assessments durchgeführt"
                ]
              },
              {
                category: "Human Oversight & Governance",
                items: [
                  "Human-in-the-Loop Workflows etabliert",
                  "AI Ethics Committee gebildet",
                  "Transparenz und Erklärbarkeit implementiert",
                  "Incident Response für KI-Systeme aufgebaut"
                ]
              },
              {
                category: "Technische Sicherheit",
                items: [
                  "Robustness Testing durchgeführt",
                  "Cybersecurity für KI-Systeme gewährleistet",
                  "Post-Market Monitoring eingerichtet",
                  "Model Versioning und Rollback implementiert"
                ]
              }
            ].map((section, sectionIndex) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: section.category }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: section.items.map((item, itemIndex) => {
                const itemId = `ai-${sectionIndex}-${itemIndex}`;
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
          children: /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden relative", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/pattern.svg')] opacity-10" }),
            /* @__PURE__ */ jsx(CardContent, { className: "relative p-8 md:p-12 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-8", children: [
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { scale: 0 },
                  whileInView: { scale: 1 },
                  transition: { type: "spring", duration: 0.8 },
                  children: /* @__PURE__ */ jsx(Brain, { className: "h-16 w-16 mx-auto mb-6 text-white" })
                }
              ),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Starten Sie Ihre Healthcare AI Compliance Journey" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90 max-w-3xl mx-auto", children: "Profitieren Sie von unserer Expertise in Healthcare AI und EU AI Act Compliance. Von Bias-Monitoring über Human-in-the-Loop bis hin zu algorithmischer Fairness – wir begleiten Sie zur vollständigen AI-Governance." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&industry=healthcare-ai", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-blue-600 hover:bg-gray-100 group shadow-lg",
                    children: [
                      /* @__PURE__ */ jsx(Brain, { className: "mr-2 h-5 w-5" }),
                      "Kostenlose AI Compliance-Beratung",
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
                      "EU AI Act Healthcare Toolkit (PDF)"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 pt-8", children: [
                { icon: Brain, title: "AI-Expertise", subtitle: "Spezialisiert auf Healthcare AI" },
                { icon: Shield, title: "EU AI Act Ready", subtitle: "Vollständige Compliance ab 2026" },
                { icon: Award, title: "Bias-Free AI", subtitle: "Faire und sichere KI-Systeme" }
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
          "Weiterführende AI Compliance-Ressourcen"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/gesundheitswesen-dsgvo", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Heart, { className: "h-5 w-5 text-red-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Healthcare DSGVO" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Datenschutz-Grundlagen" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/compliance/eu-ai-act", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-blue-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "EU AI Act Guide" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Vollständiger AI-Compliance" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement/ai-incident-response", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "AI Incident Response" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "KI-Notfall-Management" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/branchen/gesundheitswesen", className: "block group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-md", children: [
            /* @__PURE__ */ jsx(Stethoscope, { className: "h-5 w-5 text-green-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Healthcare Solutions" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Unsere AI-Produkte" })
          ] }) })
        ] }) })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  HealthcareAiComplianceGuide as default
};
