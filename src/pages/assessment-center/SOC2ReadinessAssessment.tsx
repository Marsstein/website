import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Target, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ArrowLeft,
  Shield,
  Brain,
  Users,
  Building2,
  Clock,
  FileText,
  Download,
  RefreshCw,
  Info,
  AlertOctagon,
  XCircle,
  Zap,
  Eye,
  Scale,
  Lightbulb,
  ChevronRight,
  CheckCircle,
  Star,
  TrendingUp,
  Settings,
  Activity,
  Globe,
  UserCheck,
  Database,
  Layers,
  Hash,
  Award,
  Clipboard,
  BookOpen,
  Gavel,
  Search,
  BarChart3,
  Lock,
  KeyRound,
  Gauge,
  LineChart,
  PieChart,
  Trending,
  Wifi,
  Server,
  Monitor,
  HardDrive,
  Network,
  CloudCog,
  Fingerprint,
  ShieldCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Question {
  id: string;
  category: string;
  trustService: 'Security' | 'Availability' | 'Processing Integrity' | 'Confidentiality' | 'Privacy';
  question: string;
  explanation: string;
  options: {
    id: string;
    text: string;
    readinessLevel: 'not_ready' | 'basic_implementation' | 'adequate_implementation' | 'strong_implementation' | 'optimal_implementation';
    points: number;
    explanation: string;
  }[];
  helpText?: string;
}

interface AssessmentResult {
  overallReadiness: 'not_ready' | 'basic_implementation' | 'adequate_implementation' | 'strong_implementation' | 'optimal_implementation';
  score: number;
  maxScore: number;
  trustServiceScores: Record<string, { score: number; maxScore: number; readinessLevel: string }>;
  recommendations: string[];
  nextSteps: string[];
  auditPreparation: string[];
  timeline: string;
  estimatedCost: string;
  criticalGaps: string[];
  complianceStatus: 'not_ready_for_audit' | 'needs_preparation' | 'audit_ready' | 'well_prepared';
}

const SOC2ReadinessAssessment: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // SOC 2 Readiness Assessment Questions (Trust Service Criteria)
  const questions: Question[] = [
    {
      id: 'security_governance',
      category: 'Security Governance',
      trustService: 'Security',
      question: 'Haben Sie eine formelle Informationssicherheits-Governance etabliert?',
      explanation: 'Security Governance bildet das Fundament für alle SOC 2 Security-Kontrollen',
      options: [
        {
          id: 'no_governance',
          text: 'Keine formelle Security Governance vorhanden',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Grundlegende Governance-Strukturen müssen aufgebaut werden'
        },
        {
          id: 'basic_governance',
          text: 'Grundlegende Sicherheitsrichtlinien und -verantwortlichkeiten',
          readinessLevel: 'basic_implementation',
          points: 2,
          explanation: 'Erste Strukturen vorhanden, umfassende Governance erforderlich'
        },
        {
          id: 'documented_governance',
          text: 'Dokumentierte Governance mit definierten Rollen und Prozessen',
          readinessLevel: 'adequate_implementation',
          points: 3,
          explanation: 'Solide Basis, regelmäßige Reviews und Updates implementieren'
        },
        {
          id: 'mature_governance',
          text: 'Reife Governance mit regelmäßigen Reviews und kontinuierlicher Verbesserung',
          readinessLevel: 'strong_implementation',
          points: 4,
          explanation: 'Starke Governance-Struktur, Best Practices integrieren'
        },
        {
          id: 'optimized_governance',
          text: 'Optimierte Governance mit Benchmarking und Innovation',
          readinessLevel: 'optimal_implementation',
          points: 5,
          explanation: 'Exzellente Governance entspricht Best Practices'
        }
      ]
    },
    {
      id: 'access_controls',
      category: 'Access Controls',
      trustService: 'Security',
      question: 'Wie umfassend sind Ihre Zugriffskontroll-Mechanismen?',
      explanation: 'Robuste Zugriffskontrolle ist essentiell für SOC 2 Security Compliance',
      options: [
        {
          id: 'basic_passwords',
          text: 'Grundlegende Passwort-basierte Authentifizierung',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Unzureichend für SOC 2 - MFA und RBAC erforderlich'
        },
        {
          id: 'rbac_implemented',
          text: 'Rollenbasierte Zugriffskontrolle (RBAC) implementiert',
          readinessLevel: 'basic_implementation',
          points: 2,
          explanation: 'Guter Start, MFA und privilegierte Zugriffskontrolle hinzufügen'
        },
        {
          id: 'mfa_rbac',
          text: 'MFA und RBAC mit regelmäßigen Access Reviews',
          readinessLevel: 'adequate_implementation',
          points: 3,
          explanation: 'Solide Zugriffskontrolle, privilegierte Zugriffe verstärken'
        },
        {
          id: 'advanced_access',
          text: 'Umfassende Zugriffskontrolle mit PAM und automatisierten Reviews',
          readinessLevel: 'strong_implementation',
          points: 4,
          explanation: 'Starke Implementierung, Zero-Trust-Prinzipien erwägen'
        },
        {
          id: 'zero_trust_access',
          text: 'Zero-Trust-Architektur mit kontinuierlicher Verifizierung',
          readinessLevel: 'optimal_implementation',
          points: 5,
          explanation: 'Optimale Zugriffskontrolle übertrifft SOC 2 Anforderungen'
        }
      ]
    },
    {
      id: 'system_monitoring',
      category: 'System Monitoring',
      trustService: 'Security',
      question: 'Wie umfassend ist Ihr System- und Sicherheitsmonitoring?',
      explanation: 'Kontinuierliches Monitoring ist erforderlich für SOC 2 Compliance',
      options: [
        {
          id: 'manual_monitoring',
          text: 'Hauptsächlich manuelles Monitoring und gelegentliche Überprüfungen',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Unzureichend - automatisiertes Monitoring erforderlich'
        },
        {
          id: 'basic_automated',
          text: 'Grundlegendes automatisiertes Monitoring kritischer Systeme',
          readinessLevel: 'basic_implementation',
          points: 2,
          explanation: 'Erste Automatisierung, umfassende SIEM-Lösung implementieren'
        },
        {
          id: 'siem_implemented',
          text: 'SIEM-System mit automatisierten Alerts und Dashboards',
          readinessLevel: 'adequate_implementation',
          points: 3,
          explanation: 'Gute Monitoring-Basis, Threat Intelligence integrieren'
        },
        {
          id: 'advanced_siem',
          text: 'Erweiterte SIEM mit Threat Intelligence und ML-basierter Analyse',
          readinessLevel: 'strong_implementation',
          points: 4,
          explanation: 'Fortgeschrittenes Monitoring, SOAR-Integration evaluieren'
        },
        {
          id: 'ai_monitoring',
          text: 'KI-gestütztes Monitoring mit automatisierter Response-Orchestrierung',
          readinessLevel: 'optimal_implementation',
          points: 5,
          explanation: 'State-of-the-art Monitoring mit autonomer Response'
        }
      ]
    },
    {
      id: 'system_availability',
      category: 'System Availability',
      trustService: 'Availability',
      question: 'Wie stellen Sie die Verfügbarkeit Ihrer Systeme sicher?',
      explanation: 'Hohe Verfügbarkeit ist ein Kernaspekt des SOC 2 Availability Trust Service',
      options: [
        {
          id: 'single_systems',
          text: 'Einzelne Systeme ohne Redundanz oder Failover',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Hohes Ausfallrisiko - Redundanz und HA-Architektur erforderlich'
        },
        {
          id: 'basic_redundancy',
          text: 'Grundlegende Redundanz für kritische Komponenten',
          readinessLevel: 'basic_implementation',
          points: 2,
          explanation: 'Erste HA-Maßnahmen, umfassende HA-Architektur entwickeln'
        },
        {
          id: 'ha_architecture',
          text: 'High-Availability-Architektur mit automatischem Failover',
          readinessLevel: 'adequate_implementation',
          points: 3,
          explanation: 'Solide HA-Implementierung, Disaster Recovery verbessern'
        },
        {
          id: 'dr_tested',
          text: 'Umfassende HA/DR mit regelmäßig getesteten Recovery-Verfahren',
          readinessLevel: 'strong_implementation',
          points: 4,
          explanation: 'Starke Verfügbarkeitsarchitektur, Cloud-native Resilienz erwägen'
        },
        {
          id: 'chaos_engineering',
          text: 'Resiliente Architektur mit Chaos Engineering und Self-Healing',
          readinessLevel: 'optimal_implementation',
          points: 5,
          explanation: 'Optimale Verfügbarkeit mit proaktiver Resilienz-Validierung'
        }
      ]
    },
    {
      id: 'capacity_management',
      category: 'Capacity Management',
      trustService: 'Availability',
      question: 'Wie managen Sie Systemkapazitäten und Performance?',
      explanation: 'Effektives Capacity Management gewährleistet kontinuierliche Verfügbarkeit',
      options: [
        {
          id: 'reactive_scaling',
          text: 'Reaktive Kapazitätserweiterung bei Problemen',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Risiko von Performance-Problemen - proaktives Management nötig'
        },
        {
          id: 'basic_monitoring',
          text: 'Grundlegendes Performance-Monitoring mit manueller Skalierung',
          readinessLevel: 'basic_implementation',
          points: 2,
          explanation: 'Erste Überwachung, automatisierte Skalierung implementieren'
        },
        {
          id: 'auto_scaling',
          text: 'Automatisierte Skalierung basierend auf Metriken',
          readinessLevel: 'adequate_implementation',
          points: 3,
          explanation: 'Gute Automatisierung, Kapazitätsplanung verbessern'
        },
        {
          id: 'predictive_capacity',
          text: 'Predictive Capacity Planning mit Trend-Analyse',
          readinessLevel: 'strong_implementation',
          points: 4,
          explanation: 'Starkes Capacity Management, ML-basierte Optimierung evaluieren'
        },
        {
          id: 'ai_optimization',
          text: 'KI-gesteuerte Kapazitätsoptimierung mit selbstlernenden Systemen',
          readinessLevel: 'optimal_implementation',
          points: 5,
          explanation: 'Optimales Capacity Management mit autonomer Optimierung'
        }
      ]
    },
    {
      id: 'data_processing_integrity',
      category: 'Data Processing Controls',
      trustService: 'Processing Integrity',
      question: 'Wie gewährleisten Sie die Integrität Ihrer Datenverarbeitung?',
      explanation: 'Processing Integrity stellt sicher, dass Daten korrekt und vollständig verarbeitet werden',
      options: [
        {
          id: 'manual_checks',
          text: 'Hauptsächlich manuelle Überprüfungen und Validierungen',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Fehleranfällig - automatisierte Kontrollen implementieren'
        },
        {
          id: 'basic_validation',
          text: 'Grundlegende automatisierte Datenvalidierung',
          readinessLevel: 'basic_implementation',
          points: 2,
          explanation: 'Erste Automatisierung, umfassende Kontrollen ausbauen'
        },
        {
          id: 'comprehensive_controls',
          text: 'Umfassende Datenintegritäts-Kontrollen und Monitoring',
          readinessLevel: 'adequate_implementation',
          points: 3,
          explanation: 'Solide Kontrollen, End-to-End-Validierung implementieren'
        },
        {
          id: 'automated_reconciliation',
          text: 'Automatisierte Reconciliation und Exception Handling',
          readinessLevel: 'strong_implementation',
          points: 4,
          explanation: 'Starke Integritätssicherung, ML-basierte Anomalie-Erkennung erwägen'
        },
        {
          id: 'ai_integrity_monitoring',
          text: 'KI-gestützte Integritätsüberwachung mit proaktiver Anomalie-Erkennung',
          readinessLevel: 'optimal_implementation',
          points: 5,
          explanation: 'Optimale Processing Integrity mit intelligenter Überwachung'
        }
      ]
    },
    {
      id: 'data_encryption',
      category: 'Data Protection',
      trustService: 'Confidentiality',
      question: 'Wie umfassend ist Ihre Datenverschlüsselung?',
      explanation: 'Verschlüsselung ist essentiell für den SOC 2 Confidentiality Trust Service',
      options: [
        {
          id: 'minimal_encryption',
          text: 'Minimale oder keine systematische Verschlüsselung',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Kritisches Risiko - umfassende Verschlüsselung erforderlich'
        },
        {
          id: 'basic_encryption',
          text: 'Grundlegende Verschlüsselung für sensible Daten',
          readinessLevel: 'basic_implementation',
          points: 2,
          explanation: 'Erste Maßnahmen, End-to-End-Verschlüsselung implementieren'
        },
        {
          id: 'comprehensive_encryption',
          text: 'Umfassende Verschlüsselung in Transit und at Rest',
          readinessLevel: 'adequate_implementation',
          points: 3,
          explanation: 'Gute Verschlüsselung, Key Management System implementieren'
        },
        {
          id: 'enterprise_encryption',
          text: 'Enterprise-weite Verschlüsselung mit zentralem Key Management',
          readinessLevel: 'strong_implementation',
          points: 4,
          explanation: 'Starke Verschlüsselung, HSM und Quantum-Safe Algorithmen evaluieren'
        },
        {
          id: 'advanced_encryption',
          text: 'Fortgeschrittene Verschlüsselung mit HSM und Zero-Knowledge-Architekturen',
          readinessLevel: 'optimal_implementation',
          points: 5,
          explanation: 'Optimale Verschlüsselung auf höchstem Sicherheitsniveau'
        }
      ]
    },
    {
      id: 'privacy_controls',
      category: 'Privacy Controls',
      trustService: 'Privacy',
      question: 'Wie umfassend sind Ihre Datenschutz-Kontrollen?',
      explanation: 'Privacy-Kontrollen sind erforderlich für SOC 2 + Privacy Audits',
      options: [
        {
          id: 'basic_privacy',
          text: 'Grundlegende Datenschutzrichtlinien ohne systematische Umsetzung',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Unzureichend - umfassende Privacy-by-Design erforderlich'
        },
        {
          id: 'documented_procedures',
          text: 'Dokumentierte Privacy-Verfahren und Mitarbeitertraining',
          readinessLevel: 'basic_implementation',
          points: 2,
          explanation: 'Erste Strukturen, systematische Umsetzung und Monitoring nötig'
        },
        {
          id: 'systematic_privacy',
          text: 'Systematische Privacy-Kontrollen mit regelmäßigen Assessments',
          readinessLevel: 'adequate_implementation',
          points: 3,
          explanation: 'Solide Privacy-Programm, Automatisierung und DPIAs implementieren'
        },
        {
          id: 'mature_privacy_program',
          text: 'Reifes Privacy-Programm mit automatisierten Kontrollen und DPIAs',
          readinessLevel: 'strong_implementation',
          points: 4,
          explanation: 'Starkes Privacy-Management, Privacy-Tech-Integration erwägen'
        },
        {
          id: 'privacy_by_design',
          text: 'Privacy-by-Design mit fortgeschrittenen Privacy-Enhancing Technologies',
          readinessLevel: 'optimal_implementation',
          points: 5,
          explanation: 'Optimaler Privacy-Schutz mit innovativen Technologien'
        }
      ]
    }
  ];

  const calculateResult = (): AssessmentResult => {
    const trustServiceScores: Record<string, { score: number; maxScore: number; readinessLevel: string }> = {};
    let totalScore = 0;
    let maxTotalScore = 0;

    // Calculate scores by Trust Service
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const selectedOption = question.options.find(opt => opt.id === answer);
        if (selectedOption) {
          const trustService = question.trustService;
          if (!trustServiceScores[trustService]) {
            trustServiceScores[trustService] = { score: 0, maxScore: 0, readinessLevel: 'not_ready' };
          }
          trustServiceScores[trustService].score += selectedOption.points;
          trustServiceScores[trustService].maxScore += Math.max(...question.options.map(opt => opt.points));
          totalScore += selectedOption.points;
        }
      }
      maxTotalScore += Math.max(...question.options.map(opt => opt.points));
    });

    // Determine overall readiness level
    const readinessPercentage = (totalScore / maxTotalScore) * 100;
    let overallReadiness: 'not_ready' | 'basic_implementation' | 'adequate_implementation' | 'strong_implementation' | 'optimal_implementation';
    let complianceStatus: 'not_ready_for_audit' | 'needs_preparation' | 'audit_ready' | 'well_prepared';
    let timeline: string;
    let estimatedCost: string;

    if (readinessPercentage <= 20) {
      overallReadiness = 'not_ready';
      complianceStatus = 'not_ready_for_audit';
      timeline = '12-18 Monate';
      estimatedCost = '$150,000 - $300,000';
    } else if (readinessPercentage <= 40) {
      overallReadiness = 'basic_implementation';
      complianceStatus = 'needs_preparation';
      timeline = '9-12 Monate';
      estimatedCost = '$100,000 - $200,000';
    } else if (readinessPercentage <= 60) {
      overallReadiness = 'adequate_implementation';
      complianceStatus = 'needs_preparation';
      timeline = '6-9 Monate';
      estimatedCost = '$75,000 - $150,000';
    } else if (readinessPercentage <= 80) {
      overallReadiness = 'strong_implementation';
      complianceStatus = 'audit_ready';
      timeline = '3-6 Monate';
      estimatedCost = '$50,000 - $100,000';
    } else {
      overallReadiness = 'optimal_implementation';
      complianceStatus = 'well_prepared';
      timeline = '2-4 Monate';
      estimatedCost = '$25,000 - $75,000';
    }

    // Generate recommendations and critical gaps
    const recommendations: string[] = [];
    const nextSteps: string[] = [];
    const auditPreparation: string[] = [];
    const criticalGaps: string[] = [];

    // Analyze Trust Service gaps
    Object.entries(trustServiceScores).forEach(([trustService, data]) => {
      const percentage = (data.score / data.maxScore) * 100;
      
      if (percentage < 40) {
        criticalGaps.push(`${trustService}: Erhebliche Lücken identifiziert (${Math.round(percentage)}% bereit)`);
      }
    });

    // Specific recommendations based on readiness level
    if (overallReadiness === 'not_ready') {
      recommendations.push('Aufbau grundlegender SOC 2 Kontrollen und Governance-Strukturen');
      recommendations.push('Engagement einer SOC 2 Beratung für Implementierungsplanung');
      nextSteps.push('SOC 2 Readiness Assessment mit externen Experten');
      nextSteps.push('Entwicklung einer SOC 2 Implementierungs-Roadmap');
      auditPreparation.push('Grundlegende Kontrollumgebung etablieren');
    } else if (overallReadiness === 'basic_implementation') {
      recommendations.push('Systematischer Ausbau bestehender Kontrollen');
      recommendations.push('Implementierung automatisierter Monitoring- und Kontrolltechnologien');
      nextSteps.push('Gap-Analyse für alle Trust Service Criteria');
      nextSteps.push('Entwicklung von Kontrollnachweisen und -dokumentation');
      auditPreparation.push('Pre-Assessment durch qualifizierte Berater');
    } else if (overallReadiness === 'adequate_implementation') {
      recommendations.push('Optimierung bestehender Kontrollen und Schließung identifizierter Lücken');
      recommendations.push('Aufbau umfassender Audit-Trail und Nachweisdokumentation');
      nextSteps.push('Interne SOC 2 Readiness Review');
      nextSteps.push('Auswahl und Beauftragung einer CPA-Firma');
      auditPreparation.push('Vollständige Dokumentation aller Kontrollen');
    } else if (overallReadiness === 'strong_implementation') {
      recommendations.push('Feinabstimmung der Kontrollen und Vorbereitung auf Audit');
      recommendations.push('Kontinuierliche Verbesserung und Best Practice Integration');
      nextSteps.push('Pre-Audit Walkthrough mit CPA-Firma');
      nextSteps.push('Planung des SOC 2 Type I Audits');
      auditPreparation.push('Management Representation Letter vorbereiten');
    } else {
      recommendations.push('Aufrechterhaltung der Excellence und kontinuierliche Innovation');
      recommendations.push('Vorbereitung auf SOC 2 Type II Audit');
      nextSteps.push('SOC 2 Type I Audit initiieren');
      nextSteps.push('Planung für jährliche SOC 2 Type II Audits');
      auditPreparation.push('Kontinuierliches Monitoring und Improvement etablieren');
    }

    // Trust Service specific recommendations
    if (answers['security_governance'] === 'no_governance' || answers['security_governance'] === 'basic_governance') {
      recommendations.push('Aufbau einer robusten Informationssicherheits-Governance');
    }

    if (answers['access_controls'] === 'basic_passwords' || answers['access_controls'] === 'rbac_implemented') {
      recommendations.push('Implementierung von Multi-Faktor-Authentifizierung und privilegierter Zugriffskontrolle');
    }

    if (answers['system_monitoring'] === 'manual_monitoring' || answers['system_monitoring'] === 'basic_automated') {
      recommendations.push('Aufbau einer umfassenden SIEM-Lösung mit automatisierten Alerts');
    }

    return {
      overallReadiness,
      score: totalScore,
      maxScore: maxTotalScore,
      trustServiceScores,
      recommendations: recommendations.slice(0, 6),
      nextSteps: nextSteps.slice(0, 6),
      auditPreparation: auditPreparation.slice(0, 5),
      timeline,
      estimatedCost,
      criticalGaps,
      complianceStatus
    };
  };

  const handleAnswer = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate results
      setIsCalculating(true);
      setTimeout(() => {
        const result = calculateResult();
        setResult(result);
        setIsCalculating(false);
        setShowResults(true);
      }, 3000);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setResult(null);
    setIsCalculating(false);
  };

  const currentQuestion = questions[currentStep];
  const selectedAnswer = answers[currentQuestion?.id];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const getReadinessColor = (level: string) => {
    switch (level) {
      case 'not_ready': return 'text-red-600 bg-red-100 border-red-200';
      case 'basic_implementation': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'adequate_implementation': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'strong_implementation': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'optimal_implementation': return 'text-green-600 bg-green-100 border-green-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getReadinessIcon = (level: string) => {
    switch (level) {
      case 'not_ready': return XCircle;
      case 'basic_implementation': return AlertTriangle;
      case 'adequate_implementation': return Info;
      case 'strong_implementation': return CheckCircle;
      case 'optimal_implementation': return Star;
      default: return Info;
    }
  };

  const getTrustServiceIcon = (trustService: string) => {
    switch (trustService) {
      case 'Security': return Shield;
      case 'Availability': return Activity;
      case 'Processing Integrity': return CheckCircle2;
      case 'Confidentiality': return Lock;
      case 'Privacy': return Fingerprint;
      default: return Shield;
    }
  };

  const getTrustServiceColor = (trustService: string) => {
    switch (trustService) {
      case 'Security': return 'text-red-600 bg-red-50 border-red-200';
      case 'Availability': return 'text-green-600 bg-green-50 border-green-200';
      case 'Processing Integrity': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Confidentiality': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'Privacy': return 'text-indigo-600 bg-indigo-50 border-indigo-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  if (isCalculating) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto text-center">
              <motion.div
                className="mb-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCw className="h-16 w-16 text-brand-red mx-auto" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                SOC 2 Readiness wird bewertet...
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Wir analysieren Ihre SOC 2 Bereitschaft und erstellen einen detaillierten 
                Readiness-Report mit Audit-Vorbereitung und Kosten-Timeline.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield className="h-4 w-4 animate-pulse" />
                  <span>Security Trust Service bewerten...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Activity className="h-4 w-4 animate-pulse" />
                  <span>Availability Controls prüfen...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <CheckCircle2 className="h-4 w-4 animate-pulse" />
                  <span>Processing Integrity analysieren...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Lock className="h-4 w-4 animate-pulse" />
                  <span>Confidentiality bewerten...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <ShieldCheck className="h-4 w-4 animate-pulse" />
                  <span>Audit-Bereitschaft bestimmen...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResults && result) {
    const ReadinessIcon = getReadinessIcon(result.overallReadiness);
    const readinessLabels = {
      not_ready: 'Nicht bereit',
      basic_implementation: 'Grundimplementierung',
      adequate_implementation: 'Angemessene Implementierung', 
      strong_implementation: 'Starke Implementierung',
      optimal_implementation: 'Optimale Implementierung'
    };

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Header />
        <div className="pt-24 pb-16">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              {/* Results Header */}
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className={cn(
                  "inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 mb-6",
                  getReadinessColor(result.overallReadiness)
                )}>
                  <ReadinessIcon className="h-6 w-6" />
                  <span className="font-semibold">
                    {readinessLabels[result.overallReadiness]}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  SOC 2 Readiness Assessment
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Umfassende Bewertung Ihrer Bereitschaft für SOC 2 Audit
                </p>
              </motion.div>

              {/* Score Overview */}
              <motion.div
                className="grid md:grid-cols-4 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {result.score}/{result.maxScore}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">SOC 2 Score</div>
                    <Progress 
                      value={(result.score / result.maxScore) * 100} 
                      className="mt-3"
                    />
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className={cn(
                      "text-2xl font-bold mb-2",
                      result.overallReadiness === 'not_ready' ? 'text-red-600' :
                      result.overallReadiness === 'basic_implementation' ? 'text-orange-600' :
                      result.overallReadiness === 'adequate_implementation' ? 'text-yellow-600' :
                      result.overallReadiness === 'strong_implementation' ? 'text-blue-600' : 'text-green-600'
                    )}>
                      {Math.round((result.score / result.maxScore) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Bereit</div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {result.timeline}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Timeline bis Audit</div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {result.estimatedCost}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Geschätzte Kosten</div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Trust Service Breakdown */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Trust Service Criteria Bewertung
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(result.trustServiceScores).map(([trustService, data], index) => {
                    const percentage = (data.score / data.maxScore) * 100;
                    const level = percentage <= 20 ? 'not_ready' : percentage <= 40 ? 'basic_implementation' : percentage <= 60 ? 'adequate_implementation' : percentage <= 80 ? 'strong_implementation' : 'optimal_implementation';
                    const TrustIcon = getTrustServiceIcon(trustService);
                    
                    return (
                      <Card key={trustService} className={cn("border-2", getTrustServiceColor(trustService))}>
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className={cn("p-2 rounded-lg", getTrustServiceColor(trustService))}>
                              <TrustIcon className="h-5 w-5" />
                            </div>
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {trustService}
                            </h3>
                          </div>
                          <div className="flex items-center justify-between mb-3">
                            <Badge className={getReadinessColor(level)}>
                              {data.score}/{data.maxScore}
                            </Badge>
                          </div>
                          <Progress value={percentage} className="mb-2" />
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {readinessLabels[level]} ({Math.round(percentage)}%)
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>

              {/* Critical Gaps */}
              {result.criticalGaps.length > 0 && (
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="border-orange-200 dark:border-orange-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <AlertTriangle className="h-5 w-5" />
                        Kritische Lücken
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {result.criticalGaps.map((gap, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <XCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{gap}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Audit Preparation */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Card className="border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                      <Clipboard className="h-5 w-5" />
                      Audit-Vorbereitung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {result.auditPreparation.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recommendations and Next Steps */}
              <motion.div
                className="grid md:grid-cols-2 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-yellow-500" />
                      Empfehlungen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {result.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Next Steps */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-500" />
                      Nächste Schritte
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {result.nextSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Actions */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Button 
                  onClick={handleRestart}
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-5 w-5" />
                  Erneut bewerten
                </Button>
                
                <Button 
                  size="lg"
                  className="bg-brand-red hover:bg-brand-red/90 text-white flex items-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  SOC 2 Readiness Report downloaden
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <BookOpen className="h-5 w-5" />
                  Audit-Roadmap erstellen
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 mb-6">
                <ShieldCheck className="h-4 w-4" />
                <span className="text-sm font-medium">SOC 2 Readiness Assessment</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                SOC 2 Audit-Bereitschaft bewerten
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Evaluieren Sie systematisch Ihre Bereitschaft für SOC 2 Audit und erhalten Sie 
                eine detaillierte Roadmap mit Timeline und Kostenschätzung für die Zertifizierung.
              </p>

              {/* Progress */}
              <div className="max-w-md mx-auto">
                <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Fortschritt</span>
                  <span>{currentStep + 1} von {questions.length}</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            </motion.div>

            {/* Question Card */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="mb-8"
            >
              <Card className="border-2 border-gray-200 dark:border-gray-700">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-brand-red/10 rounded-lg">
                      <Hash className="h-5 w-5 text-brand-red" />
                    </div>
                    <Badge variant="outline" className="text-brand-red border-brand-red/30">
                      {currentQuestion.category}
                    </Badge>
                    <Badge className={cn("border-2", getTrustServiceColor(currentQuestion.trustService))}>
                      {currentQuestion.trustService}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-2xl text-gray-900 dark:text-white mb-3">
                    {currentQuestion.question}
                  </CardTitle>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {currentQuestion.explanation}
                  </p>

                  {currentQuestion.helpText && (
                    <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-start gap-2">
                        <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          {currentQuestion.helpText}
                        </p>
                      </div>
                    </div>
                  )}
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {currentQuestion.options.map((option) => {
                      const isSelected = selectedAnswer === option.id;
                      const ReadinessIcon = getReadinessIcon(option.readinessLevel);
                      
                      return (
                        <motion.div
                          key={option.id}
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.99 }}
                        >
                          <button
                            onClick={() => handleAnswer(currentQuestion.id, option.id)}
                            className={cn(
                              "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
                              isSelected
                                ? "border-brand-red bg-brand-red/5 shadow-md"
                                : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
                            )}
                          >
                            <div className="flex items-start gap-4">
                              <div className={cn(
                                "p-2 rounded-lg flex-shrink-0",
                                isSelected ? "bg-brand-red/10" : "bg-gray-100 dark:bg-gray-800"
                              )}>
                                <ReadinessIcon className={cn(
                                  "h-5 w-5",
                                  isSelected ? "text-brand-red" : "text-gray-500"
                                )} />
                              </div>
                              
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="font-semibold text-gray-900 dark:text-white">
                                    {option.text}
                                  </span>
                                  <Badge 
                                    className={cn(
                                      "text-xs",
                                      getReadinessColor(option.readinessLevel)
                                    )}
                                  >
                                    {option.points}/5 Punkte
                                  </Badge>
                                </div>
                                
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                  {option.explanation}
                                </p>
                              </div>

                              <div className={cn(
                                "flex items-center justify-center w-6 h-6 rounded-full border-2 flex-shrink-0",
                                isSelected
                                  ? "border-brand-red bg-brand-red"
                                  : "border-gray-300 dark:border-gray-600"
                              )}>
                                {isSelected && (
                                  <CheckCircle className="h-4 w-4 text-white" />
                                )}
                              </div>
                            </div>
                          </button>
                        </motion.div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <Button
                onClick={handlePrevious}
                disabled={currentStep === 0}
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück
              </Button>

              <div className="text-sm text-gray-500 dark:text-gray-400">
                Frage {currentStep + 1} von {questions.length}
              </div>

              <Button
                onClick={handleNext}
                disabled={!selectedAnswer}
                size="lg"
                className="bg-brand-red hover:bg-brand-red/90 text-white flex items-center gap-2"
              >
                {currentStep === questions.length - 1 ? (
                  <>
                    <Target className="h-4 w-4" />
                    Assessment abschließen
                  </>
                ) : (
                  <>
                    Weiter
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SOC2ReadinessAssessment;