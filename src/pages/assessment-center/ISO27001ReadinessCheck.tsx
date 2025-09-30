import React, { useState, useRef, useEffect } from 'react';
import SEOHead from '../../components/SEOHead';
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
  Gauge
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Question {
  id: string;
  category: string;
  question: string;
  explanation: string;
  options: {
    id: string;
    text: string;
    readinessLevel: 'not_ready' | 'basic_preparation' | 'good_preparation' | 'well_prepared' | 'certification_ready';
    points: number;
    explanation: string;
  }[];
  helpText?: string;
}

interface AssessmentResult {
  overallReadiness: 'not_ready' | 'basic_preparation' | 'good_preparation' | 'well_prepared' | 'certification_ready';
  score: number;
  maxScore: number;
  categoryScores: Record<string, { score: number; maxScore: number; readinessLevel: string }>;
  recommendations: string[];
  nextSteps: string[];
  gapAnalysis: string[];
  timeline: string;
  effortEstimate: string;
  complianceStatus: 'critical_gaps' | 'major_gaps' | 'minor_gaps' | 'ready_for_audit';
}

const ISO27001ReadinessCheck: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Assessment",
    "name": "ISO 27001 Readiness Check",
    "description": "Bewerten Sie Ihre Bereitschaft für eine ISO 27001 Zertifizierung und erhalten Sie einen detaillierten Readiness-Report",
    "educationalLevel": "Professional",
    "url": "https://marsstein.ai/assessment-center/iso-27001-readiness-check"
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // ISO 27001 Readiness Assessment Questions
  const questions: Question[] = [
    {
      id: 'isms_policy',
      category: 'ISMS-Politik',
      question: 'Haben Sie eine dokumentierte Informationssicherheits-Politik etabliert?',
      explanation: 'Eine ISMS-Politik bildet das Fundament für alle Sicherheitsmaßnahmen nach ISO 27001',
      options: [
        {
          id: 'no_policy',
          text: 'Keine Informationssicherheits-Politik vorhanden',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Grundlegende Politik muss entwickelt und implementiert werden'
        },
        {
          id: 'draft_policy',
          text: 'Entwurf einer Politik vorhanden, aber nicht formell verabschiedet',
          readinessLevel: 'basic_preparation',
          points: 2,
          explanation: 'Politik-Entwicklung begonnen, formelle Verabschiedung steht aus'
        },
        {
          id: 'approved_policy',
          text: 'Verabschiedete Politik, aber noch nicht vollständig kommuniziert',
          readinessLevel: 'good_preparation',
          points: 3,
          explanation: 'Gute Basis vorhanden, Kommunikation und Training erforderlich'
        },
        {
          id: 'implemented_policy',
          text: 'Politik implementiert und allen Mitarbeitern kommuniziert',
          readinessLevel: 'well_prepared',
          points: 4,
          explanation: 'Solide Implementierung, regelmäßige Überprüfung empfohlen'
        },
        {
          id: 'mature_policy',
          text: 'Politik vollständig integriert mit regelmäßiger Überprüfung und Aktualisierung',
          readinessLevel: 'certification_ready',
          points: 5,
          explanation: 'Optimaler Zustand für ISO 27001 Zertifizierung'
        }
      ]
    },
    {
      id: 'risk_assessment',
      category: 'Risikobeurteilung',
      question: 'Wie umfassend ist Ihre Informationssicherheits-Risikobeurteilung?',
      explanation: 'Eine systematische Risikobeurteilung ist Kernbestandteil von ISO 27001',
      options: [
        {
          id: 'no_risk_assessment',
          text: 'Keine systematische Risikobeurteilung durchgeführt',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Risikobeurteilungsprozess muss von Grund auf entwickelt werden'
        },
        {
          id: 'basic_risk_assessment',
          text: 'Grundlegende Risikoidentifikation für kritische Assets',
          readinessLevel: 'basic_preparation',
          points: 2,
          explanation: 'Erste Schritte unternommen, systematischer Ansatz erforderlich'
        },
        {
          id: 'documented_risk_assessment',
          text: 'Dokumentierte Risikobeurteilung für alle relevanten Assets',
          readinessLevel: 'good_preparation',
          points: 3,
          explanation: 'Gute Abdeckung, regelmäßige Aktualisierung implementieren'
        },
        {
          id: 'comprehensive_risk_management',
          text: 'Umfassendes Risikomanagement mit regelmäßiger Aktualisierung',
          readinessLevel: 'well_prepared',
          points: 4,
          explanation: 'Starkes Risikomanagement, Integration in Geschäftsprozesse empfohlen'
        },
        {
          id: 'mature_risk_management',
          text: 'Integriertes Risikomanagement mit kontinuierlicher Überwachung und Reporting',
          readinessLevel: 'certification_ready',
          points: 5,
          explanation: 'Ausgereifte Risikobeurteilung entspricht ISO 27001 Standards'
        }
      ]
    },
    {
      id: 'asset_management',
      category: 'Asset Management',
      question: 'Wie vollständig ist Ihr Informations-Asset-Inventar?',
      explanation: 'Ein vollständiges Asset-Inventar ist essentiell für effektives Informationssicherheitsmanagement',
      options: [
        {
          id: 'no_inventory',
          text: 'Kein systematisches Asset-Inventar vorhanden',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Asset-Inventarisierung muss komplett neu aufgebaut werden'
        },
        {
          id: 'partial_inventory',
          text: 'Teilweise Inventarisierung kritischer IT-Assets',
          readinessLevel: 'basic_preparation',
          points: 2,
          explanation: 'Erste Assets erfasst, vollständige Inventarisierung erforderlich'
        },
        {
          id: 'documented_inventory',
          text: 'Dokumentiertes Inventar für IT- und Informations-Assets',
          readinessLevel: 'good_preparation',
          points: 3,
          explanation: 'Gute Basis, Klassifizierung und Verantwortlichkeiten definieren'
        },
        {
          id: 'classified_inventory',
          text: 'Vollständiges Inventar mit Klassifizierung und Verantwortlichkeiten',
          readinessLevel: 'well_prepared',
          points: 4,
          explanation: 'Sehr gute Vorbereitung, regelmäßige Aktualisierung sicherstellen'
        },
        {
          id: 'dynamic_inventory',
          text: 'Dynamisches Asset-Management mit automatischer Aktualisierung und Lifecycle-Management',
          readinessLevel: 'certification_ready',
          points: 5,
          explanation: 'Optimales Asset-Management für ISO 27001 Compliance'
        }
      ]
    },
    {
      id: 'access_control',
      category: 'Zugriffskontrolle',
      question: 'Wie robust sind Ihre Zugriffskontroll-Mechanismen?',
      explanation: 'Effektive Zugriffskontrolle schützt vor unbefugtem Zugang zu kritischen Informationen',
      options: [
        {
          id: 'basic_access_control',
          text: 'Grundlegende Passwort-basierte Zugriffskontrolle',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Erhebliche Verbesserungen der Zugriffskontrolle erforderlich'
        },
        {
          id: 'role_based_access',
          text: 'Rollenbasierte Zugriffskontrolle für kritische Systeme',
          readinessLevel: 'basic_preparation',
          points: 2,
          explanation: 'Guter Ansatz, Ausbau auf alle Systeme und MFA-Implementierung nötig'
        },
        {
          id: 'comprehensive_access_control',
          text: 'Umfassende Zugriffskontrolle mit Multi-Faktor-Authentifizierung',
          readinessLevel: 'good_preparation',
          points: 3,
          explanation: 'Solide Zugriffskontrolle, privilegierte Zugriffe verstärken'
        },
        {
          id: 'advanced_access_management',
          text: 'Erweiterte Zugriffsverwaltung mit privilegiertem Zugriff und Monitoring',
          readinessLevel: 'well_prepared',
          points: 4,
          explanation: 'Starke Zugriffskontrolle, Zero-Trust-Prinzipien implementieren'
        },
        {
          id: 'zero_trust_access',
          text: 'Zero-Trust-Architektur mit kontinuierlicher Verifizierung und adaptiver Authentifizierung',
          readinessLevel: 'certification_ready',
          points: 5,
          explanation: 'Modernste Zugriffskontrolle übertrifft ISO 27001 Anforderungen'
        }
      ]
    },
    {
      id: 'incident_management',
      category: 'Incident Management',
      question: 'Wie ausgereift ist Ihr Incident Management für Sicherheitsvorfälle?',
      explanation: 'Effektives Incident Management minimiert Auswirkungen von Sicherheitsvorfällen',
      options: [
        {
          id: 'no_incident_process',
          text: 'Kein formeller Incident Management Prozess',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Incident Management Prozess muss vollständig entwickelt werden'
        },
        {
          id: 'basic_incident_response',
          text: 'Grundlegende Incident Response Verfahren dokumentiert',
          readinessLevel: 'basic_preparation',
          points: 2,
          explanation: 'Erste Verfahren vorhanden, Training und Testing erforderlich'
        },
        {
          id: 'trained_incident_team',
          text: 'Incident Response Team trainiert mit dokumentierten Prozessen',
          readinessLevel: 'good_preparation',
          points: 3,
          explanation: 'Gute Vorbereitung, regelmäßige Übungen und Forensik-Fähigkeiten aufbauen'
        },
        {
          id: 'tested_incident_procedures',
          text: 'Getestete Incident Procedures mit forensischen Fähigkeiten',
          readinessLevel: 'well_prepared',
          points: 4,
          explanation: 'Starke Incident Response, kontinuierliche Verbesserung implementieren'
        },
        {
          id: 'mature_incident_management',
          text: 'Ausgereiftes Incident Management mit kontinuierlicher Verbesserung und Threat Intelligence',
          readinessLevel: 'certification_ready',
          points: 5,
          explanation: 'Optimales Incident Management für ISO 27001 Compliance'
        }
      ]
    },
    {
      id: 'business_continuity',
      category: 'Business Continuity',
      question: 'Wie umfassend ist Ihre Business Continuity Planung?',
      explanation: 'Business Continuity sichert die Geschäftskontinuität bei Sicherheitsvorfällen',
      options: [
        {
          id: 'no_bc_plan',
          text: 'Keine Business Continuity Pläne vorhanden',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Business Continuity Management muss von Grund auf entwickelt werden'
        },
        {
          id: 'basic_backup_procedures',
          text: 'Grundlegende Backup- und Recovery-Verfahren',
          readinessLevel: 'basic_preparation',
          points: 2,
          explanation: 'Erste Maßnahmen vorhanden, umfassende BC-Planung erforderlich'
        },
        {
          id: 'documented_bc_plans',
          text: 'Dokumentierte Business Continuity Pläne für kritische Prozesse',
          readinessLevel: 'good_preparation',
          points: 3,
          explanation: 'Gute Planung, regelmäßige Tests und Training implementieren'
        },
        {
          id: 'tested_bc_procedures',
          text: 'Getestete BC-Verfahren mit definierten Recovery-Zeiten',
          readinessLevel: 'well_prepared',
          points: 4,
          explanation: 'Starke BC-Vorbereitung, kontinuierliche Verbesserung sicherstellen'
        },
        {
          id: 'mature_bc_management',
          text: 'Ausgereiftes BC-Management mit regelmäßigen Tests und kontinuierlicher Verbesserung',
          readinessLevel: 'certification_ready',
          points: 5,
          explanation: 'Optimale Business Continuity für ISO 27001 Standards'
        }
      ]
    },
    {
      id: 'documentation_records',
      category: 'Dokumentation & Aufzeichnungen',
      question: 'Wie vollständig ist Ihre ISMS-Dokumentation?',
      explanation: 'Umfassende Dokumentation ist für ISO 27001 Audit und Compliance unerlässlich',
      options: [
        {
          id: 'minimal_documentation',
          text: 'Minimale oder fehlende ISMS-Dokumentation',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Umfassende Dokumentationsstruktur muss aufgebaut werden'
        },
        {
          id: 'basic_procedures',
          text: 'Grundlegende Sicherheitsverfahren dokumentiert',
          readinessLevel: 'basic_preparation',
          points: 2,
          explanation: 'Erste Dokumentation vorhanden, vollständige ISMS-Dokumentation nötig'
        },
        {
          id: 'structured_documentation',
          text: 'Strukturierte ISMS-Dokumentation mit Verfahren und Richtlinien',
          readinessLevel: 'good_preparation',
          points: 3,
          explanation: 'Gute Dokumentationsbasis, Aufzeichnungen und Versionskontrolle verbessern'
        },
        {
          id: 'comprehensive_documentation',
          text: 'Umfassende Dokumentation mit Aufzeichnungen und Versionskontrolle',
          readinessLevel: 'well_prepared',
          points: 4,
          explanation: 'Sehr gute Dokumentation, regelmäßige Aktualisierung sicherstellen'
        },
        {
          id: 'integrated_documentation_system',
          text: 'Integriertes Dokumentationssystem mit automatischer Versionierung und Workflow-Management',
          readinessLevel: 'certification_ready',
          points: 5,
          explanation: 'Optimale Dokumentation übertrifft ISO 27001 Anforderungen'
        }
      ]
    },
    {
      id: 'management_commitment',
      category: 'Management-Engagement',
      question: 'Wie stark ist das Engagement der Geschäftsleitung für das ISMS?',
      explanation: 'Starkes Management-Engagement ist kritisch für erfolgreiche ISO 27001 Implementierung',
      options: [
        {
          id: 'limited_support',
          text: 'Begrenztes oder unklares Management-Engagement',
          readinessLevel: 'not_ready',
          points: 1,
          explanation: 'Management-Buy-in und formelles Engagement erforderlich'
        },
        {
          id: 'verbal_support',
          text: 'Verbale Unterstützung, aber begrenzte Ressourcenzuteilung',
          readinessLevel: 'basic_preparation',
          points: 2,
          explanation: 'Guter Start, formelle Verpflichtung und Ressourcen nötig'
        },
        {
          id: 'formal_commitment',
          text: 'Formelle Verpflichtung mit zugewiesenen Ressourcen',
          readinessLevel: 'good_preparation',
          points: 3,
          explanation: 'Solides Engagement, regelmäßige Reviews implementieren'
        },
        {
          id: 'active_leadership',
          text: 'Aktive Führung mit regelmäßigen Management Reviews',
          readinessLevel: 'well_prepared',
          points: 4,
          explanation: 'Starke Führung, kontinuierliche Verbesserungskultur fördern'
        },
        {
          id: 'strategic_integration',
          text: 'Vollständige Integration in Unternehmensstrategie mit kontinuierlicher Verbesserungskultur',
          readinessLevel: 'certification_ready',
          points: 5,
          explanation: 'Optimales Management-Engagement für nachhaltige ISO 27001 Compliance'
        }
      ]
    }
  ];

  const calculateResult = (): AssessmentResult => {
    const categoryScores: Record<string, { score: number; maxScore: number; readinessLevel: string }> = {};
    let totalScore = 0;
    let maxTotalScore = 0;

    // Calculate scores by category
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const selectedOption = question.options.find(opt => opt.id === answer);
        if (selectedOption) {
          const category = question.category;
          if (!categoryScores[category]) {
            categoryScores[category] = { score: 0, maxScore: 0, readinessLevel: 'not_ready' };
          }
          categoryScores[category].score += selectedOption.points;
          categoryScores[category].maxScore += Math.max(...question.options.map(opt => opt.points));
          totalScore += selectedOption.points;
        }
      }
      maxTotalScore += Math.max(...question.options.map(opt => opt.points));
    });

    // Determine overall readiness level
    const readinessPercentage = (totalScore / maxTotalScore) * 100;
    let overallReadiness: 'not_ready' | 'basic_preparation' | 'good_preparation' | 'well_prepared' | 'certification_ready';
    let complianceStatus: 'critical_gaps' | 'major_gaps' | 'minor_gaps' | 'ready_for_audit';
    let timeline: string;
    let effortEstimate: string;

    if (readinessPercentage <= 20) {
      overallReadiness = 'not_ready';
      complianceStatus = 'critical_gaps';
      timeline = '18-24 Monate';
      effortEstimate = 'Umfangreich (>500 Personentage)';
    } else if (readinessPercentage <= 40) {
      overallReadiness = 'basic_preparation';
      complianceStatus = 'major_gaps';
      timeline = '12-18 Monate';
      effortEstimate = 'Erheblich (300-500 Personentage)';
    } else if (readinessPercentage <= 60) {
      overallReadiness = 'good_preparation';
      complianceStatus = 'major_gaps';
      timeline = '9-12 Monate';
      effortEstimate = 'Moderat (150-300 Personentage)';
    } else if (readinessPercentage <= 80) {
      overallReadiness = 'well_prepared';
      complianceStatus = 'minor_gaps';
      timeline = '6-9 Monate';
      effortEstimate = 'Begrenzt (50-150 Personentage)';
    } else {
      overallReadiness = 'certification_ready';
      complianceStatus = 'ready_for_audit';
      timeline = '3-6 Monate';
      effortEstimate = 'Minimal (<50 Personentage)';
    }

    // Generate recommendations and gap analysis
    const recommendations: string[] = [];
    const nextSteps: string[] = [];
    const gapAnalysis: string[] = [];

    // Analyze each category for gaps and recommendations
    Object.entries(categoryScores).forEach(([category, data]) => {
      const categoryPercentage = (data.score / data.maxScore) * 100;
      
      if (categoryPercentage < 60) {
        gapAnalysis.push(`${category}: Erhebliche Lücken identifiziert (${Math.round(categoryPercentage)}% Reifegrad)`);
      }
    });

    // ISMS Policy recommendations
    if (answers['isms_policy'] === 'no_policy' || answers['isms_policy'] === 'draft_policy') {
      recommendations.push('Entwicklung und formelle Verabschiedung einer umfassenden ISMS-Politik');
      nextSteps.push('Erstellung einer ISMS-Politik basierend auf ISO 27001 Anforderungen');
    }

    // Risk Assessment recommendations
    if (answers['risk_assessment'] === 'no_risk_assessment' || answers['risk_assessment'] === 'basic_risk_assessment') {
      recommendations.push('Implementierung einer systematischen Risikobeurteilungsmethodik');
      nextSteps.push('Durchführung einer umfassenden Asset-Inventarisierung und Risikoanalyse');
    }

    // Asset Management recommendations
    if (answers['asset_management'] === 'no_inventory' || answers['asset_management'] === 'partial_inventory') {
      recommendations.push('Aufbau eines vollständigen Informations-Asset-Inventars mit Klassifizierung');
      nextSteps.push('Systematische Erfassung aller IT- und Informations-Assets');
    }

    // Access Control recommendations
    if (answers['access_control'] === 'basic_access_control' || answers['access_control'] === 'role_based_access') {
      recommendations.push('Verstärkung der Zugriffskontrolle durch Multi-Faktor-Authentifizierung');
      nextSteps.push('Implementierung von MFA für alle kritischen Systeme');
    }

    // Incident Management recommendations
    if (answers['incident_management'] === 'no_incident_process' || answers['incident_management'] === 'basic_incident_response') {
      recommendations.push('Entwicklung umfassender Incident Response Verfahren');
      nextSteps.push('Aufbau eines Incident Response Teams mit definierten Rollen');
    }

    // Business Continuity recommendations
    if (answers['business_continuity'] === 'no_bc_plan' || answers['business_continuity'] === 'basic_backup_procedures') {
      recommendations.push('Erstellung umfassender Business Continuity Pläne');
      nextSteps.push('Business Impact Analysis für kritische Geschäftsprozesse');
    }

    // Documentation recommendations
    if (answers['documentation_records'] === 'minimal_documentation' || answers['documentation_records'] === 'basic_procedures') {
      recommendations.push('Aufbau einer strukturierten ISMS-Dokumentation');
      nextSteps.push('Entwicklung einer Dokumentationsstruktur nach ISO 27001');
    }

    // Management Commitment recommendations
    if (answers['management_commitment'] === 'limited_support' || answers['management_commitment'] === 'verbal_support') {
      recommendations.push('Sicherstellung formeller Management-Verpflichtung und Ressourcenzuteilung');
      nextSteps.push('Präsentation eines Business Case für ISO 27001 an die Geschäftsleitung');
    }

    // Overall readiness recommendations
    if (overallReadiness === 'not_ready' || overallReadiness === 'basic_preparation') {
      recommendations.unshift('Entwicklung einer strukturierten ISO 27001 Implementierungsroadmap');
      nextSteps.unshift('Engagement externer ISO 27001 Beratung für Implementierungsplanung');
    } else if (overallReadiness === 'good_preparation') {
      recommendations.unshift('Schließung identifizierter Lücken und Vorbereitung auf Pre-Assessment');
      nextSteps.unshift('Durchführung eines internen Audits zur Lückenbewertung');
    } else if (overallReadiness === 'well_prepared') {
      recommendations.unshift('Durchführung eines Pre-Assessments und Zertifizierungsplanung');
      nextSteps.unshift('Auswahl einer akkreditierten Zertifizierungsstelle');
    }

    return {
      overallReadiness,
      score: totalScore,
      maxScore: maxTotalScore,
      categoryScores,
      recommendations: recommendations.slice(0, 6),
      nextSteps: nextSteps.slice(0, 6),
      gapAnalysis,
      timeline,
      effortEstimate,
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
      }, 2500);
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
      case 'basic_preparation': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'good_preparation': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'well_prepared': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'certification_ready': return 'text-green-600 bg-green-100 border-green-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getReadinessIcon = (level: string) => {
    switch (level) {
      case 'not_ready': return XCircle;
      case 'basic_preparation': return AlertTriangle;
      case 'good_preparation': return Info;
      case 'well_prepared': return CheckCircle;
      case 'certification_ready': return Award;
      default: return Info;
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
                ISO 27001 Readiness wird bewertet...
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Wir analysieren Ihre ISMS-Vorbereitung und erstellen einen detaillierten 
                Readiness-Report mit spezifischer Roadmap zur Zertifizierung.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <FileText className="h-4 w-4 animate-pulse" />
                  <span>ISMS-Politik bewerten...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield className="h-4 w-4 animate-pulse" />
                  <span>Risikobeurteilung analysieren...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Database className="h-4 w-4 animate-pulse" />
                  <span>Asset Management prüfen...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Lock className="h-4 w-4 animate-pulse" />
                  <span>Zugriffskontrolle bewerten...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Gauge className="h-4 w-4 animate-pulse" />
                  <span>Zertifizierungs-Readiness bestimmen...</span>
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
      basic_preparation: 'Grundvorbereitung',
      good_preparation: 'Gute Vorbereitung', 
      well_prepared: 'Gut vorbereitet',
      certification_ready: 'Zertifizierungsbereit'
    };

    return (
      <>
        <SEOHead
          title="ISO 27001 Readiness Check – Zertifizierungs-Bereitschaft prüfen"
          description="ISO 27001 Readiness Check: Bewerten Sie Ihre Bereitschaft für ISO 27001 Zertifizierung. ✓ ISMS-Bewertung ✓ Gap-Analyse ✓ Implementierungs-Roadmap. Jetzt testen!"
          canonical="/assessment-center/iso-27001-readiness-check"
          keywords="ISO 27001 Readiness, ISO 27001 Check, ISMS Bereitschaft, ISO 27001 Zertifizierung, Readiness Assessment"
          structuredData={structuredData}
        />
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
                  ISO 27001 Readiness Check
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Detaillierte Bewertung Ihrer Bereitschaft für ISO 27001 Zertifizierung
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
                    <div className="text-sm text-gray-600 dark:text-gray-400">Readiness Score</div>
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
                      result.overallReadiness === 'basic_preparation' ? 'text-orange-600' :
                      result.overallReadiness === 'good_preparation' ? 'text-yellow-600' :
                      result.overallReadiness === 'well_prepared' ? 'text-blue-600' : 'text-green-600'
                    )}>
                      {readinessLabels[result.overallReadiness]}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Readiness Level</div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {result.timeline}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Geschätzte Timeline</div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {result.effortEstimate}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Aufwandsschätzung</div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Category Breakdown */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Readiness nach ISMS-Bereichen
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(result.categoryScores).map(([category, data], index) => {
                    const percentage = (data.score / data.maxScore) * 100;
                    const level = percentage <= 20 ? 'not_ready' : percentage <= 40 ? 'basic_preparation' : percentage <= 60 ? 'good_preparation' : percentage <= 80 ? 'well_prepared' : 'certification_ready';
                    
                    return (
                      <Card key={category}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {category}
                            </h3>
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

              {/* Gap Analysis */}
              {result.gapAnalysis.length > 0 && (
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="border-orange-200 dark:border-orange-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <Search className="h-5 w-5" />
                        Gap-Analyse
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {result.gapAnalysis.map((gap, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{gap}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Recommendations and Next Steps */}
              <motion.div
                className="grid md:grid-cols-2 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
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
                      <Clipboard className="h-5 w-5 text-blue-500" />
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
                transition={{ delay: 0.6 }}
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
                  Readiness Report downloaden
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <BookOpen className="h-5 w-5" />
                  Implementierungs-Roadmap erstellen
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="ISO 27001 Readiness Check – Zertifizierungs-Bereitschaft prüfen"
        description="ISO 27001 Readiness Check: Bewerten Sie Ihre Bereitschaft für ISO 27001 Zertifizierung. ✓ ISMS-Bewertung ✓ Gap-Analyse ✓ Implementierungs-Roadmap. Jetzt testen!"
        canonical="/assessment-center/iso-27001-readiness-check"
        keywords="ISO 27001 Readiness, ISO 27001 Check, ISMS Bereitschaft, ISO 27001 Zertifizierung, Readiness Assessment"
        structuredData={structuredData}
      />
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
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm font-medium">ISO 27001 Readiness Check</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Zertifizierungs-Bereitschaft bewerten
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Evaluieren Sie systematisch Ihre Bereitschaft für ISO 27001 Zertifizierung und 
                erhalten Sie eine detaillierte Roadmap zur erfolgreichen Implementierung.
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
                                    {option.readinessLevel === 'not_ready' ? 'Nicht bereit' :
                                     option.readinessLevel === 'basic_preparation' ? 'Grundvorbereitung' :
                                     option.readinessLevel === 'good_preparation' ? 'Gute Vorbereitung' :
                                     option.readinessLevel === 'well_prepared' ? 'Gut vorbereitet' : 'Zertifizierungsbereit'}
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
    </>
  );
};

export default ISO27001ReadinessCheck;