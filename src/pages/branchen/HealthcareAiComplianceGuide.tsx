import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Brain,
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
  Bot,
  Cpu,
  Search,
  ImageIcon,
  Radar,
  Workflow,
  GitBranch,
  RotateCcw,
  TrendingDown,
  Gauge,
  MessageSquare,
  Camera,
  Scan,
  TestTube,
  Hospital,
  Ambulance,
  Dna,
  FlaskConical,
  Tablets,
  Waves,
  CircuitBoard,
  HardDrive,
  Cloud,
  Rss,
  Radio
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const HealthcareAiComplianceGuide = () => {
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
    { id: 'eu-ai-act', label: 'EU AI Act Healthcare', icon: Brain },
    { id: 'risk-categories', label: 'KI-Risikokategorien', icon: AlertTriangle },
    { id: 'bias-monitoring', label: 'Bias & Fairness', icon: Eye },
    { id: 'human-oversight', label: 'Human-in-the-Loop', icon: Users },
    { id: 'implementation', label: 'Praxis-Implementation', icon: Code }
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
    { label: 'EU AI Act Conformity', value: 94, color: 'text-blue-600', trend: '+12%' },
    { label: 'High-Risk AI Systems', value: 87, color: 'text-red-600', trend: '+8%' },
    { label: 'Bias Monitoring', value: 91, color: 'text-purple-600', trend: '+15%' },
    { label: 'Human Oversight', value: 96, color: 'text-green-600', trend: '+5%' },
    { label: 'DSGVO Integration', value: 98, color: 'text-pink-600', trend: '+3%' },
    { label: 'Algorithm Transparency', value: 89, color: 'text-orange-500', trend: '+18%' }
  ];

  const euAiActRequirements = [
    {
      title: 'Hochrisiko-KI-Systeme in der Medizin (Annex III)',
      description: 'KI-Systeme für medizinische Diagnose, Behandlung oder kritische Lebensfunktionen fallen unter die Hochrisiko-Kategorie des EU AI Act',
      examples: ['Radiologische Diagnosesysteme', 'Medikamentendosierungs-KI', 'Intensivmedizin-Monitoring', 'Robotergestützte Chirurgie', 'Früherkennung von Sepsis'],
      risk: 'Sehr Hoch',
      fineExample: 'Bis zu 35 Mio. € oder 7% des Jahresumsatzes',
      realWorldScenario: {
        title: '🏥 Praxis-Szenario: KI-gestützte Radiologie-Diagnose',
        context: 'Eine Universitätsklinik implementiert ein KI-System zur automatischen Erkennung von Lungenkrebs in CT-Aufnahmen. Das System soll Radiologen unterstützen und die Früherkennung verbessern.',
        challenge: 'Wie kann die Klinik sicherstellen, dass das KI-System EU AI Act-konform betrieben wird, ohne die medizinische Qualität zu beeinträchtigen?',
        solution: {
          step1: {
            title: '📊 Risikomanagementsystem etablieren',
            description: 'Umfassende Bewertung und kontinuierliche Überwachung der KI-Risiken',
            components: [
              {
                name: 'Primäre Risikoidentifikation',
                details: 'Falsch-negative Diagnosen bei frühem Krebsstadium',
                mitigation: 'Multi-Algorithmus-Ansatz mit Confidence-Scoring'
              },
              {
                name: 'Sekundäre Risikobewertung',
                details: 'Bias gegenüber bestimmten Patientengruppen',
                mitigation: 'Diverse Trainingsdaten und kontinuierliches Bias-Monitoring'
              },
              {
                name: 'Systemische Risikoanalyse',
                details: 'Überabhängigkeit der Ärzte von KI-Empfehlungen',
                mitigation: 'Zwingender Human-in-the-Loop bei kritischen Entscheidungen'
              }
            ]
          },
          step2: {
            title: '👁️ Transparenz und Erklärbarkeit',
            description: 'Nachvollziehbare Entscheidungsfindung für medizinisches Personal',
            features: [
              'Heatmaps zeigen relevante Bildregionen für KI-Entscheidung',
              'Confidence-Levels für jeden Diagnoseschritt',
              'Vergleich mit ähnlichen, bekannten Fällen aus der Datenbank',
              'Dokumentation aller KI-Eingaben und -Ausgaben'
            ]
          },
          step3: {
            title: '🔄 Kontinuierliche Überwachung',
            description: 'Post-Market Monitoring für laufende Leistungsvalidierung',
            monitoring: [
              {
                metric: 'Diagnostische Genauigkeit',
                frequency: 'Wöchentlich',
                threshold: '95% Übereinstimmung mit Facharzt-Diagnose',
                action: 'Bei Unterschreitung: Sofortige Systemüberprüfung'
              },
              {
                metric: 'Bias-Indikatoren',
                frequency: 'Monatlich',
                threshold: 'Keine signifikanten Unterschiede zwischen Patientengruppen',
                action: 'Nachjustierung der Algorithmen bei Bias-Erkennung'
              },
              {
                metric: 'Nutzungsverhalten',
                frequency: 'Täglich',
                threshold: 'Ärzte übernehmen KI-Empfehlung in <80% der Fälle',
                action: 'Schulungsmaßnahmen und Systemkalibrierung'
              }
            ]
          }
        },
        outcome: {
          patientBenefit: 'Frühere und genauere Krebserkennung bei vollständiger Arztkontrolle',
          clinicBenefit: 'EU AI Act-konforme KI-Innovation mit rechtlicher Sicherheit',
          complianceLevel: '96% EU AI Act Konformität bei 23% besserer Früherkennung'
        },
        keyLearnings: [
          'Transparenz erhöht Vertrauen der Ärzte in KI-Empfehlungen',
          'Kontinuierliches Monitoring verhindert schleichende Qualitätsverschlechterung',
          'Human-in-the-Loop bleibt kritisch für komplexe medizinische Entscheidungen',
          'Diverse Trainingsdaten sind essentiell für faire KI-Systeme'
        ]
      }
    },
    {
      title: 'Algorithmic Impact Assessment (AIA)',
      description: 'Systematische Bewertung der Auswirkungen von KI-Systemen auf Patienten, Behandlungsqualität und Gesundheitsgerechtigkeit',
      examples: ['Vorhersage von Behandlungserfolg', 'Personalisierte Medikation', 'Triage-Algorithmen', 'Prognose-Modelle für chronische Krankheiten'],
      risk: 'Hoch',
      fineExample: 'Zusätzlich zu EU AI Act: DSGVO-Bußgelder bis 20 Mio. €',
      realWorldScenario: {
        title: '⚕️ Praxis-Szenario: KI-gestützte Intensivmedizin-Triage',
        context: 'Ein großes Krankenhaus verwendet ein KI-System zur Prioritätssetzung in der Notaufnahme. Das System bewertet die Dringlichkeit basierend auf Symptomen, Vitalwerten und Krankengeschichte.',
        challenge: 'Wie kann sichergestellt werden, dass das Triage-System fair und diskriminierungsfrei funktioniert?',
        solution: {
          step1: {
            title: '⚖️ Fairness-by-Design Implementation',
            description: 'Systematische Integration von Fairness-Prinzipien in die KI-Entwicklung',
            principles: [
              {
                principle: 'Demographische Parität',
                implementation: 'Gleiche Triage-Raten unabhängig von Geschlecht, Alter, Ethnizität',
                monitoring: 'Wöchentliche Auswertung der Triage-Entscheidungen nach Patientengruppen'
              },
              {
                principle: 'Chancengleichheit',
                implementation: 'Identische True-Positive-Raten für alle Patientengruppen',
                monitoring: 'Monatliche Analyse der Behandlungsergebnisse nach demografischen Merkmalen'
              },
              {
                principle: 'Kalibrierte Gerechtigkeit',
                implementation: 'Vorhersagegenauigkeit ist über alle Gruppen hinweg gleich',
                monitoring: 'Kontinuierliche Kalibrierung der Risiko-Scores'
              }
            ]
          },
          step2: {
            title: '📈 Bias-Detection und Mitigation',
            description: 'Proaktive Erkennung und Korrektur von algorithmischen Verzerrungen',
            techniques: [
              {
                name: 'Statistical Parity Testing',
                purpose: 'Erkennung von direkter Diskriminierung',
                frequency: 'Täglich automatisiert',
                threshold: 'Max. 5% Abweichung zwischen Gruppen'
              },
              {
                name: 'Equalized Odds Monitoring',
                purpose: 'Überwachung der Vorhersagequalität',
                frequency: 'Wöchentlich',
                threshold: 'Identische Sensitivität und Spezifität'
              },
              {
                name: 'Counterfactual Fairness',
                purpose: 'Test alternativer Entscheidungsszenarien',
                frequency: 'Monatlich',
                threshold: 'Entscheidung bleibt gleich bei Änderung geschützter Merkmale'
              }
            ]
          },
          step3: {
            title: '👩‍⚕️ Clinical Decision Support Integration',
            description: 'Nahtlose Integration in klinische Arbeitsabläufe mit maximaler Transparenz',
            workflow: [
              'KI-System bewertet eingehende Patienten binnen 30 Sekunden',
              'Triage-Empfehlung wird mit Confidence-Level angezeigt',
              'Medizinisches Personal erhält erklärbare Begründung',
              'Endgültige Entscheidung liegt immer beim Arzt',
              'Alle Entscheidungen werden für Audit-Zwecke protokolliert'
            ]
          }
        },
        outcome: {
          patientBenefit: 'Faire und schnelle Notfall-Triage ohne diskriminierende Verzerrungen',
          clinicBenefit: 'Optimierte Ressourcennutzung bei vollständiger EU AI Act Compliance',
          societalBenefit: 'Erhöhte Gesundheitsgerechtigkeit in der Notfallversorgung'
        },
        keyLearnings: [
          'Algorithmic Fairness erfordert kontinuierliche Überwachung und Anpassung',
          'Transparenz der KI-Entscheidungen ist kritisch für Akzeptanz',
          'Diverse Entwicklungsteams reduzieren Bias-Risiken erheblich',
          'Reguläre Audits durch externe Experten verbessern Systemqualität'
        ]
      }
    },
    {
      title: 'Datenqualität und Robustheit (Art. 10 EU AI Act)',
      description: 'Hochwertige, repräsentative und ausreichende Trainingsdaten sind essentiell für sichere medizinische KI-Systeme',
      examples: ['Diverse Patientenpopulationen', 'Annotationsqualität', 'Datenaktualität', 'Cross-Domain Validation'],
      risk: 'Kritisch',
      fineExample: 'Produkthaftung + EU AI Act Sanktionen',
      implementation: {
        requirements: [
          'Repräsentative Trainingsdaten aller Patientengruppen',
          'Validierung der Datenqualität und -vollständigkeit',
          'Kontinuierliche Überwachung der Modell-Performance',
          'Dokumentation der Datenprovenienz und -verarbeitung'
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
      category: 'Hochrisiko-KI (Annex III)',
      icon: AlertTriangle,
      color: 'red',
      description: 'KI-Systeme für kritische medizinische Entscheidungen',
      examples: [
        'Radiologische Diagnosesysteme',
        'Medikamentendosierung und -auswahl',
        'Intensivmedizin-Monitoring',
        'Robotergestützte Chirurgie',
        'Früherkennung kritischer Zustandsveränderungen'
      ],
      requirements: [
        'Vollständiges Risikomanagementsystem',
        'Umfassende Dokumentation und CE-Kennzeichnung',
        'Human Oversight bei allen kritischen Entscheidungen',
        'Post-Market Monitoring und Incident Reporting',
        'Robustheit- und Cybersecurity-Tests'
      ],
      implementation: {
        title: 'KI-gestützte Sepsis-Früherkennung',
        description: 'Implementierung eines Systems zur frühzeitigen Erkennung von Sepsis auf Intensivstationen',
        phases: [
          {
            name: 'Risikobewertung und Systemdesign',
            duration: '8-12 Wochen',
            activities: [
              'Medizinische Risikoanalyse mit Intensivmedizinern',
              'Technische Anforderungsdefinition',
              'Ethik-Committee Review und Genehmigung',
              'Datenschutz-Folgenabschätzung für KI-System'
            ]
          },
          {
            name: 'Entwicklung und Validierung',
            duration: '16-24 Wochen',
            activities: [
              'Training mit diversen Patientendaten',
              'Klinische Validierung in kontrollierten Szenarien',
              'Bias-Testing für verschiedene Patientengruppen',
              'Integration in bestehende Monitoring-Systeme'
            ]
          },
          {
            name: 'Pilot-Deployment mit Human Oversight',
            duration: '12-16 Wochen',
            activities: [
              'Schrittweise Einführung auf einer Pilotstation',
              'Kontinuierliches Feedback von medizinischem Personal',
              'Performance-Monitoring und Feinjustierung',
              'Incident-Tracking und Qualitätssicherung'
            ]
          }
        ]
      }
    },
    {
      category: 'Limitiertes Risiko',
      icon: Eye,
      color: 'orange',
      description: 'KI-Systeme mit erhöhten Transparenzanforderungen',
      examples: [
        'Chatbots für Patienteninformation',
        'Symptom-Checker Apps',
        'Präventive Gesundheitsempfehlungen',
        'Terminplanungs-Assistenten',
        'Medikamenten-Erinnerungssysteme'
      ],
      requirements: [
        'Klare Information über KI-Nutzung',
        'Transparente Entscheidungsfindung',
        'Nutzerfreundliche Erklärungen',
        'Opt-out Möglichkeiten',
        'Grundlegende Sicherheitsmaßnahmen'
      ],
      implementation: {
        title: 'Intelligenter Patientenservice-Chatbot',
        description: 'KI-Assistent für häufige Patientenfragen und Terminvereinbarungen',
        features: [
          {
            name: 'Transparente KI-Kennzeichnung',
            description: 'Klare Kommunikation, dass Nutzer mit KI-System interagieren',
            requirement: 'Sofortige Offenlegung bei erstem Kontakt'
          },
          {
            name: 'Begrenzte Kompetenz',
            description: 'System gibt keine medizinischen Diagnosen oder Behandlungsempfehlungen',
            safeguards: 'Automatische Weiterleitung an Fachpersonal bei medizinischen Fragen'
          },
          {
            name: 'Human Handover',
            description: 'Jederzeit verfügbare Option zur Verbindung mit menschlichem Personal',
            implementation: 'Ein-Klick Weiterleitung an Patientenservice'
          }
        ]
      }
    },
    {
      category: 'Minimales Risiko',
      icon: CheckCircle2,
      color: 'green',
      description: 'KI-Systeme mit geringem Risikopotenzial',
      examples: [
        'Automatische Transkription von Arztbriefen',
        'Optimierung von Reinigungsabläufen',
        'Energiemanagement in Krankenhäusern',
        'Parkplatz-Management',
        'Kantinen-Menüplanung'
      ],
      requirements: [
        'Grundlegende Transparenz bei direkter Interaktion',
        'Einhaltung bestehender Sektorregulierung',
        'Minimale Dokumentationsanforderungen',
        'Freiwillige Anwendung von Best Practices'
      ],
      implementation: {
        title: 'KI-optimierte Krankenhauslogistik',
        description: 'Automatisierung von Verwaltungsprozessen und Ressourcenmanagement',
        applications: [
          'Vorhersage des Bettenbedarfs basierend auf historischen Daten',
          'Optimierung der Materialbestellung und Lagerbestände',
          'Intelligente Wartungsplanung für medizinische Geräte',
          'Personalplanung unter Berücksichtigung von Arbeitsschutzbestimmungen'
        ]
      }
    }
  ];

  const biasMonitoring = [
    {
      type: 'Demografischer Bias',
      icon: Users,
      description: 'Systematische Benachteiligung bestimmter Patientengruppen',
      examples: [
        'KI-System erkennt Hautkrebs bei dunkler Hautfarbe schlechter',
        'Herzinfarkt-Diagnose ist bei Frauen weniger genau', 
        'Schmerztherapie-Algorithmen benachteiligen ältere Patienten',
        'Psychische Erkrankungen werden bei Männern unterdiagnostiziert'
      ],
      detectionMethods: [
        'Statistische Parität zwischen Demografiegruppen',
        'Equalised Odds für Sensitivität und Spezifität',
        'Calibration-Tests für Vorhersagegenauigkeit',
        'Individual Fairness für ähnliche Patienten'
      ],
      mitigationStrategies: [
        'Diverse und repräsentative Trainingsdaten sammeln',
        'Algorithmus-Audits durch diverse Expertenteams',
        'Fairness-Constraints in Modelltraining integrieren',
        'Kontinuierliches Post-Deployment Monitoring'
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
      type: 'Institutioneller Bias',
      icon: Building2,
      description: 'Verzerrungen durch krankenhausspezifische Praktiken und Patientenpopulation',
      examples: [
        'Universitätsklinik vs. ländliches Krankenhaus',
        'Privatklinik vs. öffentliche Versorgung',
        'Spezialklinik vs. Allgemeinversorgung',
        'Regionale Unterschiede in Behandlungsstandards'
      ],
      detectionMethods: [
        'Cross-Institution Validation Studies',
        'External Validation mit unabhängigen Datensätzen',
        'Performance-Monitoring bei Deployment in neuen Kliniken',
        'Systematic Review der institutionellen Behandlungspraktiken'
      ],
      mitigationStrategies: [
        'Multi-Center Training mit diversen Institutionen',
        'Transfer Learning für neue Deployment-Umgebungen',
        'Institution-spezifische Kalibrierung der Algorithmen',
        'Federated Learning für datenschutzkonforme Kooperation'
      ]
    },
    {
      type: 'Temporaler Bias',
      icon: Clock,
      description: 'Veränderungen in medizinischen Standards und Behandlungsmethoden über Zeit',
      examples: [
        'Neue Behandlungsleitlinien ändern Standardtherapie',
        'Technologische Fortschritte in Diagnostik',
        'Pandemie verändert Behandlungsprioritäten',
        'Demografischer Wandel der Patientenpopulation'
      ],
      detectionMethods: [
        'Kontinuierliches Performance-Tracking über Zeit',
        'Concept Drift Detection in Eingabedaten',
        'Periodic Recalibration der Modell-Parameter',
        'Trend-Analyse der klinischen Outcomes'
      ],
      mitigationStrategies: [
        'Automated Model Retraining Pipelines',
        'Ensemble Methods mit zeitgewichteten Modellen',
        'Active Learning für kontinuierliche Verbesserung',
        'Version Control und Rollback-Mechanismen'
      ]
    }
  ];

  const humanOversightFramework = [
    {
      level: 'Human-in-the-Loop (HITL)',
      description: 'Mensch trifft finale Entscheidung basierend auf KI-Empfehlung',
      applications: [
        'Radiologische Diagnosestellung',
        'Therapieplan-Erstellung',
        'Medikamentendosierung',
        'Chirurgische Entscheidungen'
      ],
      implementation: {
        title: 'KI-unterstützte Radiologie-Diagnose',
        workflow: [
          {
            step: 'KI-Analyse',
            description: 'Automatische Bildanalyse identifiziert verdächtige Regionen',
            output: 'Annotiertes Bild mit Confidence-Scores',
            timing: '30-60 Sekunden'
          },
          {
            step: 'Ärztliche Bewertung',
            description: 'Radiologe prüft KI-Empfehlung und trifft eigenständige Diagnose',
            tools: 'Interaktive Visualisierung, Vergleichsbilder, Patientenhistorie',
            timing: '5-15 Minuten'
          },
          {
            step: 'Finale Entscheidung',
            description: 'Arzt bestätigt, modifiziert oder verwirft KI-Empfehlung',
            documentation: 'Begründung bei Abweichung von KI-Empfehlung',
            quality_assurance: 'Stichprobenartige Zweitbegutachtung'
          }
        ],
        safeguards: [
          'KI-System kann keine eigenständigen Diagnosen erstellen',
          'Zeitlimits verhindern überstürzte Entscheidungen',
          'Pflichtfelder für ärztliche Begründung',
          'Automatische Eskalation bei kritischen Befunden'
        ]
      }
    },
    {
      level: 'Human-on-the-Loop (HOTL)',
      description: 'Kontinuierliche Überwachung mit Interventionsmöglichkeit',
      applications: [
        'Intensivmedizin-Monitoring',
        'Medikamentenpumpen-Steuerung',
        'Anästhesie-Überwachung',
        'Herz-Kreislauf-Monitoring'
      ],
      implementation: {
        title: 'Intelligentes Intensivstations-Monitoring',
        monitoring: [
          {
            parameter: 'Vitalzeichen',
            ai_function: 'Kontinuierliche Überwachung und Trendanalyse',
            human_role: 'Interpretation im klinischen Kontext',
            intervention: 'Bei Alarm-Situationen oder ungewöhnlichen Mustern'
          },
          {
            parameter: 'Medikamentenwirkung',
            ai_function: 'Dosierungsoptimierung basierend auf Patientenreaktion',
            human_role: 'Freigabe von Dosierungsänderungen',
            intervention: 'Überprüfung aller automatischen Anpassungen'
          },
          {
            parameter: 'Infektionsrisiko',
            ai_function: 'Früherkennung von Sepsis-Anzeichen',
            human_role: 'Klinische Validation der KI-Alerts',
            intervention: 'Sofortige Untersuchung bei KI-Warnung'
          }
        ],
        controls: [
          'Echtzeit-Dashboard für medizinisches Personal',
          'Konfigurierbare Alarmschwellen',
          'Override-Funktionen für alle KI-Empfehlungen',
          'Audit-Trail aller menschlichen Interventionen'
        ]
      }
    },
    {
      level: 'Human-over-the-Loop (HOTL)',
      description: 'Strategische Governance und Systemoptimierung',
      applications: [
        'KI-System Performance Überwachung',
        'Algorithmus-Updates und -Verbesserungen',
        'Bias-Detection und Fairness-Audits',
        'Compliance und Risikomanagement'
      ],
      implementation: {
        title: 'KI-Governance und Qualitätssicherung',
        governance: [
          {
            role: 'Clinical AI Committee',
            composition: 'Ärzte, KI-Experten, Ethiker, Datenschutzbeauftragte',
            responsibilities: [
              'Überprüfung neuer KI-Implementierungen',
              'Bewertung von Performance-Metriken',
              'Entscheidungen über Modell-Updates',
              'Compliance-Überwachung'
            ],
            frequency: 'Monatliche Sitzungen + Ad-hoc bei kritischen Ereignissen'
          },
          {
            role: 'AI Ethics Board',
            composition: 'Ethiker, Patientenvertreter, Rechtexperten, Kliniker',
            responsibilities: [
              'Ethische Bewertung von KI-Entscheidungen',
              'Fairness-Audits und Bias-Monitoring',
              'Patientenrechte und Transparenz',
              'Konfliktlösung bei ethischen Dilemmata'
            ],
            frequency: 'Quartalsweise + Sondertermine bei ethischen Fragen'
          }
        ]
      }
    }
  ];

  const implementationRoadmap = [
    {
      phase: 'EU AI Act Readiness Assessment',
      duration: '6-8 Wochen',
      color: 'blue',
      tasks: [
        'KI-System Inventarisierung und Risikokategorisierung',
        'Gap-Analyse bestehender KI-Governance Strukturen',
        'EU AI Act Compliance Audit für Hochrisiko-Systeme',
        'Stakeholder-Workshops mit medizinischem Personal',
        'Rechtliche Bewertung und Implementierungsroadmap'
      ],
      deliverables: [
        'AI System Registry mit Risikobewertung',
        'EU AI Act Gap-Analyse Report', 
        'Compliance Roadmap mit Prioritäten',
        'Stakeholder Engagement Plan'
      ]
    },
    {
      phase: 'Technische AI Governance',
      duration: '12-16 Wochen',
      color: 'green',
      tasks: [
        'Risikomanagementsystem für Hochrisiko-KI aufbauen',
        'Bias-Monitoring und Fairness-Testing implementieren',
        'Human Oversight Mechanismen etablieren',
        'Algorithm Transparency und Explainability',
        'Post-Market Monitoring System einrichten'
      ],
      deliverables: [
        'AI Risk Management Framework',
        'Bias Detection und Mitigation Tools',
        'Human-in-the-Loop Workflows',
        'Algorithmic Transparency Dashboard'
      ]
    },
    {
      phase: 'Organisatorische Integration',
      duration: '8-12 Wochen',
      color: 'orange',
      tasks: [
        'AI Ethics Committee und Governance-Strukturen',
        'Personal-Schulungen für EU AI Act Compliance',
        'Incident Response Prozesse für KI-Systeme',
        'Qualitätsmanagementsystem Integration',
        'Audit und Compliance Dokumentation'
      ],
      deliverables: [
        'AI Governance Committee Charter',
        'Comprehensive Training Program',
        'AI Incident Response Playbook',
        'Audit-Ready Documentation Suite'
      ]
    },
    {
      phase: 'Continuous Compliance & Optimization',
      duration: '4-6 Wochen',
      color: 'purple',
      tasks: [
        'Live Monitoring und Performance Tracking',
        'Continuous Model Validation und Updates',
        'Regular Compliance Audits und Assessments',
        'Stakeholder Feedback Integration',
        'Future-Proofing für kommende Regulierungen'
      ],
      deliverables: [
        'Live Compliance Dashboard',
        'Automated Monitoring Systems',
        'Regular Audit Reports',
        'Future Compliance Strategy'
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
    const totalItems = 32; // Total checklist items
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
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                    <Brain className="h-4 w-4" />
                    <span className="text-sm font-medium">Healthcare AI Excellence</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    Healthcare AI Compliance
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                      EU AI Act Guide
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Meistern Sie die Zukunft der medizinischen KI-Compliance. Von EU AI Act über 
                    Bias-Monitoring bis hin zu ethischer KI-Governance im Gesundheitswesen.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>EU AI Act Konformität für medizinische Hochrisiko-KI</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Bias-Monitoring und algorithmische Fairness</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span>Human-in-the-Loop für kritische medizinische Entscheidungen</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/contact?demo=true&industry=healthcare-ai">
                      <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 group">
                        <Brain className="mr-2 h-5 w-5" />
                        Healthcare AI Demo buchen
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      EU AI Act Healthcare Guide
                    </Button>
                  </div>
                </motion.div>

                {/* Interactive AI Compliance Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">AI Compliance Center</h3>
                        <Badge className="bg-green-100 text-green-700">
                          {getCompletionPercentage()}% EU AI Act Ready
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
                      <Brain className="h-4 w-4 text-blue-500 animate-pulse" />
                      <span className="text-sm font-medium">AI Act Ready</span>
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
                  Healthcare AI Compliance Überblick
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="h-6 w-6 text-blue-600" />
                        EU AI Act für Healthcare
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Der EU AI Act klassifiziert medizinische KI-Systeme als Hochrisiko-Anwendungen 
                        und erfordert umfassende Compliance-Maßnahmen für sichere und faire KI-Nutzung.
                      </p>
                      
                      <div className="space-y-3">
                        {[
                          'Risikomanagementsystem für medizinische KI',
                          'Datenqualität und Repräsentativität sicherstellen',
                          'Transparenz und Erklärbarkeit von KI-Entscheidungen',
                          'Human Oversight bei kritischen medizinischen Entscheidungen'
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-sm">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertTriangle className="h-4 w-4 text-blue-600" />
                          <span className="font-semibold text-blue-800 dark:text-blue-400">
                            Compliance Deadline
                          </span>
                        </div>
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          EU AI Act für Hochrisiko-Systeme: Vollständige Compliance bis August 2026
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Eye className="h-6 w-6 text-purple-600" />
                        Bias & Fairness in medizinischer KI
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Algorithmic Bias in der Medizin kann zu lebensbedrohlichen Konsequenzen führen. 
                        Kontinuierliches Fairness-Monitoring ist essentiell für sichere KI-Systeme.
                      </p>
                      
                      <div className="space-y-3">
                        {[
                          'Demografische Parität in KI-Diagnosen gewährleisten',
                          'Kontinuierliches Bias-Monitoring implementieren', 
                          'Diverse Trainingsdaten für alle Patientengruppen',
                          'Fairness-Audits durch multidisziplinäre Teams'
                        ].map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <Eye className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
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
                          Implementieren Sie kontinuierliches A/B-Testing für Fairness in Echtzeit
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* EU AI Act Section */}
              <section id="eu-ai-act" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  EU AI Act Healthcare-Anforderungen
                </motion.h2>
                <div className="space-y-8">
                  {euAiActRequirements.map((requirement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="border-l-4 border-blue-500">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-xl pr-4">{requirement.title}</CardTitle>
                            <Badge 
                              variant={requirement.risk === 'Sehr Hoch' ? 'destructive' : requirement.risk === 'Hoch' ? 'secondary' : 'default'}
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
                                Anwendungsbeispiele
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
                                Sanktionsrisiko
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
                                onClick={() => setExpandedSection(expandedSection === `ai-scenario-${index}` ? null : `ai-scenario-${index}`)}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                              >
                                <Lightbulb className="h-4 w-4" />
                                Praxis-Szenario anzeigen
                                <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                  expandedSection === `ai-scenario-${index}` && "rotate-180")} />
                              </button>
                              
                              {expandedSection === `ai-scenario-${index}` && (
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
                                          
                                          {step.components && (
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                              {step.components.map((component, compIndex) => (
                                                <div key={compIndex} className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                                                  <div className="font-medium text-blue-900 dark:text-blue-100 text-sm mb-1">
                                                    {component.name}
                                                  </div>
                                                  <div className="text-xs text-blue-700 dark:text-blue-300 mb-2">
                                                    {component.details}
                                                  </div>
                                                  <div className="text-xs text-green-600 dark:text-green-400">
                                                    ✓ {component.mitigation}
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                          
                                          {step.features && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                              {step.features.map((feature, featureIndex) => (
                                                <div key={featureIndex} className="flex items-start gap-2 text-sm">
                                                  <Brain className="h-3 w-3 text-purple-600 mt-1 flex-shrink-0" />
                                                  <span>{feature}</span>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                          
                                          {step.monitoring && (
                                            <div className="space-y-3">
                                              {step.monitoring.map((monitor, monitorIndex) => (
                                                <div key={monitorIndex} className="border-l-4 border-green-500 pl-4">
                                                  <div className="flex items-center gap-2 mb-2">
                                                    <Activity className="h-4 w-4 text-green-600" />
                                                    <span className="font-medium text-sm">{monitor.metric}</span>
                                                    <Badge variant="outline" className="text-xs">{monitor.frequency}</Badge>
                                                  </div>
                                                  <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                                                    <strong>Schwellenwert:</strong> {monitor.threshold}
                                                  </div>
                                                  <div className="text-xs text-blue-600 dark:text-blue-400">
                                                    <strong>Maßnahme:</strong> {monitor.action}
                                                  </div>
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
                              <button
                                onClick={() => setExpandedSection(expandedSection === `implementation-${index}` ? null : `implementation-${index}`)}
                                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                              >
                                <Code className="h-4 w-4" />
                                Technische Implementation
                                <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                  expandedSection === `implementation-${index}` && "rotate-180")} />
                              </button>
                              
                              {expandedSection === `implementation-${index}` && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  className="mt-4"
                                >
                                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                    <pre className="text-green-400 text-xs">
                                      {requirement.implementation.template}
                                    </pre>
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

              {/* Risk Categories Section */}
              <section id="risk-categories" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  KI-Risikokategorien im Gesundheitswesen
                </motion.h2>
                <div className="space-y-8">
                  {riskCategories.map((category, index) => (
                    <Card key={index} className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <category.icon className={cn("h-6 w-6", 
                            category.color === 'red' && "text-red-600",
                            category.color === 'orange' && "text-orange-600", 
                            category.color === 'green' && "text-green-600"
                          )} />
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-gray-600 dark:text-gray-400">
                          {category.description}
                        </p>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Anwendungsbeispiele</h4>
                            <div className="space-y-2">
                              {category.examples.map((example, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className={cn("h-4 w-4 mt-0.5 flex-shrink-0",
                                    category.color === 'red' && "text-red-600",
                                    category.color === 'orange' && "text-orange-600", 
                                    category.color === 'green' && "text-green-600"
                                  )} />
                                  <span className="text-sm">{example}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">EU AI Act Anforderungen</h4>
                            <div className="space-y-2">
                              {category.requirements.map((req, i) => (
                                <div key={i} className="flex items-start gap-2">
                                  <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{req}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {category.implementation && (
                          <div>
                            <button
                              onClick={() => setExpandedSection(expandedSection === `risk-impl-${index}` ? null : `risk-impl-${index}`)}
                              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Lightbulb className="h-4 w-4" />
                              Implementierungsbeispiel anzeigen
                              <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                expandedSection === `risk-impl-${index}` && "rotate-180")} />
                            </button>
                            
                            {expandedSection === `risk-impl-${index}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4"
                              >
                                <div className={cn("p-4 rounded-lg border",
                                  category.color === 'red' && "bg-red-50 dark:bg-red-950/30 border-red-200",
                                  category.color === 'orange' && "bg-orange-50 dark:bg-orange-950/30 border-orange-200",
                                  category.color === 'green' && "bg-green-50 dark:bg-green-950/30 border-green-200"
                                )}>
                                  <h5 className="font-medium mb-3">{category.implementation.title}</h5>
                                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                    {category.implementation.description}
                                  </p>
                                  
                                  {category.implementation.phases && (
                                    <div className="space-y-4">
                                      {category.implementation.phases.map((phase, phaseIndex) => (
                                        <div key={phaseIndex} className="bg-white dark:bg-gray-800 p-3 rounded border">
                                          <div className="flex items-center gap-2 mb-2">
                                            <Calendar className="h-4 w-4 text-blue-600" />
                                            <span className="font-medium">{phase.name}</span>
                                            <Badge variant="outline" className="text-xs">{phase.duration}</Badge>
                                          </div>
                                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                            {phase.activities.map((activity, actIndex) => (
                                              <div key={actIndex} className="text-sm text-gray-600 dark:text-gray-400">
                                                • {activity}
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  
                                  {category.implementation.features && (
                                    <div className="space-y-3">
                                      {category.implementation.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="bg-white dark:bg-gray-800 p-3 rounded border">
                                          <div className="font-medium text-sm mb-1">{feature.name}</div>
                                          <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{feature.description}</div>
                                          {feature.requirement && (
                                            <div className="text-xs text-blue-600 dark:text-blue-400">
                                              <strong>Anforderung:</strong> {feature.requirement}
                                            </div>
                                          )}
                                          {feature.safeguards && (
                                            <div className="text-xs text-green-600 dark:text-green-400">
                                              <strong>Schutzmaßnahme:</strong> {feature.safeguards}
                                            </div>
                                          )}
                                          {feature.implementation && (
                                            <div className="text-xs text-purple-600 dark:text-purple-400">
                                              <strong>Umsetzung:</strong> {feature.implementation}
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                  
                                  {category.implementation.applications && (
                                    <div className="space-y-2">
                                      {category.implementation.applications.map((app, appIndex) => (
                                        <div key={appIndex} className="text-sm text-gray-600 dark:text-gray-400">
                                          • {app}
                                        </div>
                                      ))}
                                    </div>
                                  )}
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

              {/* Bias Monitoring Section */}
              <section id="bias-monitoring" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Bias-Monitoring und algorithmische Fairness
                </motion.h2>
                <div className="space-y-8">
                  {biasMonitoring.map((bias, index) => (
                    <Card key={index} className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <bias.icon className="h-6 w-6 text-purple-600" />
                          {bias.type}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-gray-600 dark:text-gray-400">
                          {bias.description}
                        </p>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Problematische Beispiele</h4>
                            <div className="space-y-2">
                              {bias.examples.map((example, i) => (
                                <div key={i} className="flex items-start gap-2 p-2 bg-red-50 dark:bg-red-950/30 rounded">
                                  <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{example}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Erkennungsmethoden</h4>
                            <div className="space-y-2">
                              {bias.detectionMethods.map((method, i) => (
                                <div key={i} className="flex items-start gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 rounded">
                                  <Search className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{method}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">Mitigation-Strategien</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {bias.mitigationStrategies.map((strategy, i) => (
                              <div key={i} className="flex items-start gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded">
                                <Shield className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{strategy}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {bias.technicalImplementation && (
                          <div>
                            <button
                              onClick={() => setExpandedSection(expandedSection === `bias-tech-${index}` ? null : `bias-tech-${index}`)}
                              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <Code className="h-4 w-4" />
                              Technische Implementation
                              <ChevronDown className={cn("h-4 w-4 transition-transform", 
                                expandedSection === `bias-tech-${index}` && "rotate-180")} />
                            </button>
                            
                            {expandedSection === `bias-tech-${index}` && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="mt-4"
                              >
                                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                  <pre className="text-green-400 text-xs">
                                    {bias.technicalImplementation}
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

              {/* Human Oversight Section */}
              <section id="human-oversight" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Human-in-the-Loop Frameworks
                </motion.h2>
                <div className="space-y-8">
                  {humanOversightFramework.map((framework, index) => (
                    <Card key={index} className="p-6">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Users className="h-6 w-6 text-green-600" />
                          {framework.level}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <p className="text-gray-600 dark:text-gray-400">
                          {framework.description}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Medizinische Anwendungen</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {framework.applications.map((app, i) => (
                              <div key={i} className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded">
                                <Stethoscope className="h-4 w-4 text-green-600" />
                                <span className="text-sm">{app}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <button
                            onClick={() => setExpandedSection(expandedSection === `human-impl-${index}` ? null : `human-impl-${index}`)}
                            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                          >
                            <Settings className="h-4 w-4" />
                            Implementierungsdetails anzeigen
                            <ChevronDown className={cn("h-4 w-4 transition-transform", 
                              expandedSection === `human-impl-${index}` && "rotate-180")} />
                          </button>
                          
                          {expandedSection === `human-impl-${index}` && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              className="mt-4"
                            >
                              <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg border border-green-200">
                                <h5 className="font-medium mb-3">{framework.implementation.title}</h5>
                                
                                {framework.implementation.workflow && (
                                  <div className="space-y-4">
                                    <h6 className="font-medium text-sm">Workflow-Schritte:</h6>
                                    {framework.implementation.workflow.map((step, stepIndex) => (
                                      <div key={stepIndex} className="bg-white dark:bg-gray-800 p-3 rounded border">
                                        <div className="flex items-center gap-2 mb-2">
                                          <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                                            {stepIndex + 1}
                                          </div>
                                          <span className="font-medium">{step.step}</span>
                                          {step.timing && <Badge variant="outline" className="text-xs">{step.timing}</Badge>}
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{step.description}</p>
                                        {step.output && (
                                          <div className="text-xs text-blue-600 dark:text-blue-400 mb-1">
                                            <strong>Output:</strong> {step.output}
                                          </div>
                                        )}
                                        {step.tools && (
                                          <div className="text-xs text-purple-600 dark:text-purple-400 mb-1">
                                            <strong>Tools:</strong> {step.tools}
                                          </div>
                                        )}
                                        {step.documentation && (
                                          <div className="text-xs text-orange-600 dark:text-orange-400">
                                            <strong>Dokumentation:</strong> {step.documentation}
                                          </div>
                                        )}
                                        {step.quality_assurance && (
                                          <div className="text-xs text-green-600 dark:text-green-400">
                                            <strong>QS:</strong> {step.quality_assurance}
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                    
                                    {framework.implementation.safeguards && (
                                      <div className="mt-4">
                                        <h6 className="font-medium text-sm mb-2">Sicherheitsmaßnahmen:</h6>
                                        <div className="space-y-1">
                                          {framework.implementation.safeguards.map((safeguard, sgIndex) => (
                                            <div key={sgIndex} className="flex items-start gap-2 text-sm">
                                              <ShieldCheck className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                                              <span>{safeguard}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                                
                                {framework.implementation.monitoring && (
                                  <div className="space-y-4">
                                    <h6 className="font-medium text-sm">Monitoring-Parameter:</h6>
                                    {framework.implementation.monitoring.map((monitor, monIndex) => (
                                      <div key={monIndex} className="bg-white dark:bg-gray-800 p-3 rounded border">
                                        <div className="flex items-center gap-2 mb-2">
                                          <Activity className="h-4 w-4 text-blue-600" />
                                          <span className="font-medium text-sm">{monitor.parameter}</span>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs">
                                          <div>
                                            <strong className="text-blue-600">KI-Funktion:</strong>
                                            <br />
                                            {monitor.ai_function}
                                          </div>
                                          <div>
                                            <strong className="text-green-600">Menschliche Rolle:</strong>
                                            <br />
                                            {monitor.human_role}
                                          </div>
                                          <div>
                                            <strong className="text-orange-600">Intervention:</strong>
                                            <br />
                                            {monitor.intervention}
                                          </div>
                                        </div>
                                      </div>
                                    ))}
                                    
                                    {framework.implementation.controls && (
                                      <div className="mt-4">
                                        <h6 className="font-medium text-sm mb-2">Kontroll-Mechanismen:</h6>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                          {framework.implementation.controls.map((control, ctrlIndex) => (
                                            <div key={ctrlIndex} className="flex items-start gap-2 text-sm">
                                              <Settings className="h-3 w-3 text-blue-600 mt-1 flex-shrink-0" />
                                              <span>{control}</span>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                )}
                                
                                {framework.implementation.governance && (
                                  <div className="space-y-4">
                                    <h6 className="font-medium text-sm">Governance-Struktur:</h6>
                                    {framework.implementation.governance.map((gov, govIndex) => (
                                      <div key={govIndex} className="bg-white dark:bg-gray-800 p-3 rounded border">
                                        <div className="flex items-center gap-2 mb-2">
                                          <Building2 className="h-4 w-4 text-purple-600" />
                                          <span className="font-medium text-sm">{gov.role}</span>
                                          <Badge variant="outline" className="text-xs">{gov.frequency}</Badge>
                                        </div>
                                        <div className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                                          <strong>Zusammensetzung:</strong> {gov.composition}
                                        </div>
                                        <div className="text-xs">
                                          <strong>Verantwortlichkeiten:</strong>
                                          <ul className="list-disc list-inside mt-1 space-y-1">
                                            {gov.responsibilities.map((resp, respIndex) => (
                                              <li key={respIndex}>{resp}</li>
                                            ))}
                                          </ul>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
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
                  Praxis-Implementation & Roadmap
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

                {/* Interactive AI Compliance Checklist */}
                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckSquare className="h-6 w-6 text-green-600" />
                      Interactive AI Compliance-Checkliste
                    </CardTitle>
                    <div className="text-sm text-gray-600">
                      Fortschritt: {getCompletionPercentage()}% abgeschlossen
                    </div>
                    <Progress value={getCompletionPercentage()} className="h-2" />
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      {
                        category: 'EU AI Act Grundlagen',
                        items: [
                          'KI-Systeme inventarisiert und kategorisiert',
                          'Risikobewertung für alle KI-Anwendungen durchgeführt',
                          'Hochrisiko-KI identifiziert und dokumentiert',
                          'Conformity Assessment Procedures definiert'
                        ]
                      },
                      {
                        category: 'Datenqualität & Bias-Monitoring', 
                        items: [
                          'Diverse und repräsentative Trainingsdaten sichergestellt',
                          'Bias-Detection Tools implementiert',
                          'Fairness-Metriken kontinuierlich überwacht',
                          'Algorithmic Impact Assessments durchgeführt'
                        ]
                      },
                      {
                        category: 'Human Oversight & Governance',
                        items: [
                          'Human-in-the-Loop Workflows etabliert',
                          'AI Ethics Committee gebildet',
                          'Transparenz und Erklärbarkeit implementiert',
                          'Incident Response für KI-Systeme aufgebaut'
                        ]
                      },
                      {
                        category: 'Technische Sicherheit',
                        items: [
                          'Robustness Testing durchgeführt',
                          'Cybersecurity für KI-Systeme gewährleistet',
                          'Post-Market Monitoring eingerichtet',
                          'Model Versioning und Rollback implementiert'
                        ]
                      }
                    ].map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <h4 className="font-semibold mb-3">{section.category}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {section.items.map((item, itemIndex) => {
                            const itemId = `ai-${sectionIndex}-${itemIndex}`;
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
                <Card className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white overflow-hidden relative">
                  <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
                  <CardContent className="relative p-8 md:p-12 text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.8 }}
                      >
                        <Brain className="h-16 w-16 mx-auto mb-6 text-white" />
                      </motion.div>
                      
                      <h2 className="text-3xl md:text-4xl font-bold">
                        Starten Sie Ihre Healthcare AI Compliance Journey
                      </h2>
                      <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Profitieren Sie von unserer Expertise in Healthcare AI und EU AI Act Compliance. 
                        Von Bias-Monitoring über Human-in-the-Loop bis hin zu algorithmischer Fairness – 
                        wir begleiten Sie zur vollständigen AI-Governance.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact?demo=true&industry=healthcare-ai">
                          <Button 
                            size="lg" 
                            className="bg-white text-blue-600 hover:bg-gray-100 group shadow-lg"
                          >
                            <Brain className="mr-2 h-5 w-5" />
                            Kostenlose AI Compliance-Beratung
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Button 
                          size="lg" 
                          variant="outline" 
                          className="bg-transparent text-white border-white hover:bg-white/10"
                        >
                          <Download className="mr-2 h-5 w-5" />
                          EU AI Act Healthcare Toolkit (PDF)
                        </Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                        {[
                          { icon: Brain, title: 'AI-Expertise', subtitle: 'Spezialisiert auf Healthcare AI' },
                          { icon: Shield, title: 'EU AI Act Ready', subtitle: 'Vollständige Compliance ab 2026' },
                          { icon: Award, title: 'Bias-Free AI', subtitle: 'Faire und sichere KI-Systeme' }
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
                    Weiterführende AI Compliance-Ressourcen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link to="/wissen/branchen/gesundheitswesen-dsgvo" className="block group">
                      <div className="p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors group-hover:shadow-md">
                        <Heart className="h-5 w-5 text-red-600 mb-2" />
                        <div className="font-medium">Healthcare DSGVO</div>
                        <div className="text-sm text-gray-600">Datenschutz-Grundlagen</div>
                      </div>
                    </Link>
                    <Link to="/wissen/compliance/eu-ai-act" className="block group">
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group-hover:shadow-md">
                        <Brain className="h-5 w-5 text-blue-600 mb-2" />
                        <div className="font-medium">EU AI Act Guide</div>
                        <div className="text-sm text-gray-600">Vollständiger AI-Compliance</div>
                      </div>
                    </Link>
                    <Link to="/wissen/krisenmanagement/ai-incident-response" className="block group">
                      <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors group-hover:shadow-md">
                        <AlertTriangle className="h-5 w-5 text-orange-600 mb-2" />
                        <div className="font-medium">AI Incident Response</div>
                        <div className="text-sm text-gray-600">KI-Notfall-Management</div>
                      </div>
                    </Link>
                    <Link to="/branchen/gesundheitswesen" className="block group">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors group-hover:shadow-md">
                        <Stethoscope className="h-5 w-5 text-green-600 mb-2" />
                        <div className="font-medium">Healthcare Solutions</div>
                        <div className="text-sm text-gray-600">Unsere AI-Produkte</div>
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

export default HealthcareAiComplianceGuide;