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
  ShieldCheck,
  Factory,
  Truck,
  Zap as Power,
  Droplets,
  Radio,
  Plane
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Question {
  id: string;
  category: string;
  nisRequirement: string;
  question: string;
  explanation: string;
  options: {
    id: string;
    text: string;
    complianceLevel: 'non_compliant' | 'partially_compliant' | 'largely_compliant' | 'fully_compliant' | 'exceeds_requirements';
    points: number;
    explanation: string;
  }[];
  priority: 'critical' | 'high' | 'medium';
  helpText?: string;
}

interface AssessmentResult {
  overallCompliance: 'non_compliant' | 'partially_compliant' | 'largely_compliant' | 'fully_compliant' | 'exceeds_requirements';
  score: number;
  maxScore: number;
  categoryScores: Record<string, { score: number; maxScore: number; complianceLevel: string; criticalGaps: number }>;
  recommendations: string[];
  nextSteps: string[];
  legalRequirements: string[];
  implementationTimeline: string;
  estimatedInvestment: string;
  criticalFindings: string[];
  complianceStatus: 'immediate_action_required' | 'significant_gaps' | 'minor_improvements' | 'compliant';
  entityType: 'essential' | 'important' | 'not_applicable';
}

const NIS2ComplianceCheck: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // NIS2 Compliance Assessment Questions
  const questions: Question[] = [
    {
      id: 'entity_scope',
      category: 'Anwendungsbereich',
      nisRequirement: 'Art. 2 NIS2',
      question: 'Welcher Kategorie gehört Ihr Unternehmen nach NIS2-Richtlinie an?',
      explanation: 'Die NIS2-Richtlinie unterscheidet zwischen wesentlichen und wichtigen Einrichtungen',
      priority: 'critical',
      options: [
        {
          id: 'essential_energy',
          text: 'Wesentliche Einrichtung (Energie, Verkehr, Bankwesen, Gesundheit)',
          complianceLevel: 'non_compliant',
          points: 5,
          explanation: 'Höchste Compliance-Anforderungen - umfassende Maßnahmen erforderlich'
        },
        {
          id: 'important_digital',
          text: 'Wichtige Einrichtung (Digitale Dienste, Post, Abfall)',
          complianceLevel: 'partially_compliant',
          points: 4,
          explanation: 'Erhebliche Compliance-Anforderungen - systematische Umsetzung nötig'
        },
        {
          id: 'supply_chain',
          text: 'Lieferant für kritische Infrastrukturen',
          complianceLevel: 'largely_compliant',
          points: 3,
          explanation: 'Indirekte Betroffenheit - Vorbereitung auf Kundenanforderungen'
        },
        {
          id: 'medium_enterprise',
          text: 'Mittleres Unternehmen (50-250 Mitarbeiter) in relevanten Sektoren',
          complianceLevel: 'fully_compliant',
          points: 2,
          explanation: 'Mögliche Betroffenheit je nach Umsatz und Sektor'
        },
        {
          id: 'not_applicable',
          text: 'Nicht von NIS2 betroffen',
          complianceLevel: 'exceeds_requirements',
          points: 1,
          explanation: 'Keine direkten Compliance-Anforderungen'
        }
      ]
    },
    {
      id: 'cybersecurity_governance',
      category: 'Cybersecurity Governance',
      nisRequirement: 'Art. 20 NIS2',
      question: 'Wie umfassend ist Ihre Cybersecurity Governance-Struktur?',
      explanation: 'NIS2 fordert eine klare Cybersecurity-Governance mit Führungsverantwortung',
      priority: 'critical',
      options: [
        {
          id: 'no_governance',
          text: 'Keine formelle Cybersecurity Governance vorhanden',
          complianceLevel: 'non_compliant',
          points: 0,
          explanation: 'Schwerwiegender NIS2-Verstoß - sofortige Maßnahmen erforderlich'
        },
        {
          id: 'basic_structure',
          text: 'Grundlegende Sicherheitsorganisation ohne Führungseinbindung',
          complianceLevel: 'partially_compliant',
          points: 1,
          explanation: 'Unzureichend für NIS2 - Führungsverantwortung etablieren'
        },
        {
          id: 'management_involved',
          text: 'Geschäftsführung involviert, aber unvollständige Governance',
          complianceLevel: 'largely_compliant',
          points: 3,
          explanation: 'Gute Basis, strukturierte Governance-Prozesse ausbauen'
        },
        {
          id: 'comprehensive_governance',
          text: 'Umfassende Cybersecurity Governance mit Führungsverantwortung',
          complianceLevel: 'fully_compliant',
          points: 4,
          explanation: 'Entspricht NIS2-Anforderungen, kontinuierliche Verbesserung'
        },
        {
          id: 'mature_governance',
          text: 'Reife Governance mit Best Practices und kontinuierlicher Optimierung',
          complianceLevel: 'exceeds_requirements',
          points: 5,
          explanation: 'Übertrifft NIS2-Anforderungen deutlich'
        }
      ]
    },
    {
      id: 'risk_management',
      category: 'Risikomanagement',
      nisRequirement: 'Art. 21 NIS2',
      question: 'Wie strukturiert ist Ihr Cybersecurity-Risikomanagement?',
      explanation: 'NIS2 verlangt ein systematisches Cybersecurity-Risikomanagement',
      priority: 'critical',
      options: [
        {
          id: 'no_risk_management',
          text: 'Kein systematisches Cybersecurity-Risikomanagement',
          complianceLevel: 'non_compliant',
          points: 0,
          explanation: 'Kritischer NIS2-Verstoß - umfassendes Risikomanagement erforderlich'
        },
        {
          id: 'basic_risk_assessment',
          text: 'Grundlegende Risikobeurteilungen ohne systematischen Ansatz',
          complianceLevel: 'partially_compliant',
          points: 1,
          explanation: 'Unzureichend - strukturiertes Risikomanagement-Framework nötig'
        },
        {
          id: 'documented_processes',
          text: 'Dokumentierte Risikomanagement-Prozesse für Cybersecurity',
          complianceLevel: 'largely_compliant',
          points: 3,
          explanation: 'Solide Basis, kontinuierliche Überwachung und Aktualisierung'
        },
        {
          id: 'integrated_risk_management',
          text: 'Integriertes Risikomanagement mit regelmäßigen Updates',
          complianceLevel: 'fully_compliant',
          points: 4,
          explanation: 'Entspricht NIS2-Standards, Automatisierung erwägen'
        },
        {
          id: 'advanced_risk_management',
          text: 'Fortgeschrittenes Risikomanagement mit KI-gestützter Analyse',
          complianceLevel: 'exceeds_requirements',
          points: 5,
          explanation: 'Übertrifft NIS2-Anforderungen mit innovativen Ansätzen'
        }
      ]
    },
    {
      id: 'incident_response',
      category: 'Incident Response',
      nisRequirement: 'Art. 23 NIS2',
      question: 'Wie ausgereift ist Ihr Incident Response Management?',
      explanation: 'NIS2 fordert umfassende Incident Response Capabilities mit Meldepflichten',
      priority: 'critical',
      options: [
        {
          id: 'ad_hoc_response',
          text: 'Ad-hoc Reaktion auf Sicherheitsvorfälle ohne Struktur',
          complianceLevel: 'non_compliant',
          points: 0,
          explanation: 'Schwerwiegender Verstoß - strukturierte IR-Prozesse sofort entwickeln'
        },
        {
          id: 'basic_procedures',
          text: 'Grundlegende IR-Verfahren, aber keine Meldeprozesse',
          complianceLevel: 'partially_compliant',
          points: 1,
          explanation: 'Unzureichend - NIS2-konforme Meldeprozesse implementieren'
        },
        {
          id: 'structured_ir',
          text: 'Strukturierte IR mit Meldeprozessen an Behörden',
          complianceLevel: 'largely_compliant',
          points: 3,
          explanation: 'Gute Compliance, Automatisierung und Testing verbessern'
        },
        {
          id: 'comprehensive_ir',
          text: 'Umfassende IR mit 24h-Meldung und forensischen Fähigkeiten',
          complianceLevel: 'fully_compliant',
          points: 4,
          explanation: 'Entspricht NIS2-Anforderungen vollständig'
        },
        {
          id: 'advanced_ir',
          text: 'Proaktive IR mit Threat Hunting und automatisierter Response',
          complianceLevel: 'exceeds_requirements',
          points: 5,
          explanation: 'Übertrifft NIS2-Standards mit fortgeschrittenen Capabilities'
        }
      ]
    },
    {
      id: 'supply_chain_security',
      category: 'Lieferkettenmanagement',
      nisRequirement: 'Art. 21 Abs. 2 NIS2',
      question: 'Wie umfassend ist Ihr Supply Chain Security Management?',
      explanation: 'NIS2 verlangt Cybersecurity-Maßnahmen für die gesamte Lieferkette',
      priority: 'high',
      options: [
        {
          id: 'no_supply_chain_security',
          text: 'Keine systematische Supply Chain Security',
          complianceLevel: 'non_compliant',
          points: 0,
          explanation: 'NIS2-Verstoß - Lieferantenbewertung und -überwachung erforderlich'
        },
        {
          id: 'basic_vendor_checks',
          text: 'Grundlegende Sicherheitsprüfungen bei Vertragsabschluss',
          complianceLevel: 'partially_compliant',
          points: 1,
          explanation: 'Unzureichend - kontinuierliche Überwachung implementieren'
        },
        {
          id: 'regular_assessments',
          text: 'Regelmäßige Sicherheitsassessments kritischer Lieferanten',
          complianceLevel: 'largely_compliant',
          points: 3,
          explanation: 'Guter Ansatz, auf alle Lieferanten ausweiten'
        },
        {
          id: 'comprehensive_scm',
          text: 'Umfassendes Supply Chain Cybersecurity Management',
          complianceLevel: 'fully_compliant',
          points: 4,
          explanation: 'Entspricht NIS2-Anforderungen, kontinuierliche Verbesserung'
        },
        {
          id: 'advanced_scm',
          text: 'Fortgeschrittenes SCM mit Echtzeit-Monitoring und Threat Intelligence',
          complianceLevel: 'exceeds_requirements',
          points: 5,
          explanation: 'Übertrifft NIS2-Standards mit innovativen Monitoring-Technologien'
        }
      ]
    },
    {
      id: 'vulnerability_management',
      category: 'Schwachstellenmanagement',
      nisRequirement: 'Art. 21 Abs. 2 NIS2',
      question: 'Wie systematisch ist Ihr Vulnerability Management?',
      explanation: 'NIS2 fordert regelmäßige Schwachstellenanalysen und zeitnahe Behebung',
      priority: 'high',
      options: [
        {
          id: 'reactive_patching',
          text: 'Reaktives Patching bei bekannten Exploits',
          complianceLevel: 'non_compliant',
          points: 0,
          explanation: 'Unzureichend für NIS2 - proaktives VM-Programm erforderlich'
        },
        {
          id: 'scheduled_scanning',
          text: 'Regelmäßige Vulnerability Scans ohne systematische Priorisierung',
          complianceLevel: 'partially_compliant',
          points: 1,
          explanation: 'Erste Schritte, Risk-based Priorisierung implementieren'
        },
        {
          id: 'systematic_vm',
          text: 'Systematisches VM mit Risk-basierter Priorisierung',
          complianceLevel: 'largely_compliant',
          points: 3,
          explanation: 'Gutes Programm, Automatisierung und Integration verbessern'
        },
        {
          id: 'automated_vm',
          text: 'Automatisiertes VM mit kontinuierlicher Überwachung',
          complianceLevel: 'fully_compliant',
          points: 4,
          explanation: 'Entspricht NIS2-Standards, Threat Intelligence integrieren'
        },
        {
          id: 'predictive_vm',
          text: 'Predictive VM mit KI-gestützter Schwachstellenanalyse',
          complianceLevel: 'exceeds_requirements',
          points: 5,
          explanation: 'Übertrifft NIS2 mit fortgeschrittenen Predictive-Technologien'
        }
      ]
    },
    {
      id: 'business_continuity',
      category: 'Business Continuity',
      nisRequirement: 'Art. 21 Abs. 2 NIS2',
      question: 'Wie umfassend ist Ihre Business Continuity Planung?',
      explanation: 'NIS2 verlangt Business Continuity und Disaster Recovery Pläne',
      priority: 'high',
      options: [
        {
          id: 'no_bc_plans',
          text: 'Keine systematischen Business Continuity Pläne',
          complianceLevel: 'non_compliant',
          points: 0,
          explanation: 'Kritischer NIS2-Verstoß - BC/DR-Pläne sofort entwickeln'
        },
        {
          id: 'basic_backup',
          text: 'Grundlegende Backup-Verfahren ohne getestete Recovery',
          complianceLevel: 'partially_compliant',
          points: 1,
          explanation: 'Unzureichend - umfassende BC/DR-Strategie entwickeln'
        },
        {
          id: 'documented_plans',
          text: 'Dokumentierte BC-Pläne mit gelegentlichen Tests',
          complianceLevel: 'largely_compliant',
          points: 3,
          explanation: 'Solide Basis, regelmäßige Tests und Updates implementieren'
        },
        {
          id: 'tested_bc',
          text: 'Getestete BC/DR-Pläne mit definierten Recovery-Zeiten',
          complianceLevel: 'fully_compliant',
          points: 4,
          explanation: 'Entspricht NIS2-Anforderungen, kontinuierliche Verbesserung'
        },
        {
          id: 'resilient_architecture',
          text: 'Resiliente Architektur mit automatisiertem Failover',
          complianceLevel: 'exceeds_requirements',
          points: 5,
          explanation: 'Übertrifft NIS2 mit selbstheilenden Systemen'
        }
      ]
    },
    {
      id: 'employee_training',
      category: 'Mitarbeitertraining',
      nisRequirement: 'Art. 20 Abs. 2 NIS2',
      question: 'Wie umfassend ist Ihr Cybersecurity-Training für Mitarbeiter?',
      explanation: 'NIS2 fordert regelmäßige Cybersecurity-Schulungen für alle Mitarbeiter',
      priority: 'medium',
      options: [
        {
          id: 'no_training',
          text: 'Keine systematischen Cybersecurity-Trainings',
          complianceLevel: 'non_compliant',
          points: 0,
          explanation: 'NIS2-Verstoß - umfassendes Training-Programm erforderlich'
        },
        {
          id: 'annual_briefing',
          text: 'Jährliche Sicherheitsbriefings für alle Mitarbeiter',
          complianceLevel: 'partially_compliant',
          points: 1,
          explanation: 'Grundlage vorhanden, regelmäßige und interaktive Trainings nötig'
        },
        {
          id: 'regular_training',
          text: 'Regelmäßige Cybersecurity-Trainings mit Tests',
          complianceLevel: 'largely_compliant',
          points: 3,
          explanation: 'Gutes Programm, rollenspezifische Trainings ausbauen'
        },
        {
          id: 'comprehensive_program',
          text: 'Umfassendes Training-Programm mit Phishing-Simulationen',
          complianceLevel: 'fully_compliant',
          points: 4,
          explanation: 'Entspricht NIS2-Standards, Gamification erwägen'
        },
        {
          id: 'adaptive_training',
          text: 'Adaptives Training mit KI-gestützter Personalisierung',
          complianceLevel: 'exceeds_requirements',
          points: 5,
          explanation: 'Übertrifft NIS2 mit innovativen Lernmethoden'
        }
      ]
    }
  ];

  const calculateResult = (): AssessmentResult => {
    const categoryScores: Record<string, { score: number; maxScore: number; complianceLevel: string; criticalGaps: number }> = {};
    let totalScore = 0;
    let maxTotalScore = 0;
    let criticalGaps = 0;

    // Calculate scores by category
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const selectedOption = question.options.find(opt => opt.id === answer);
        if (selectedOption) {
          const category = question.category;
          if (!categoryScores[category]) {
            categoryScores[category] = { score: 0, maxScore: 0, complianceLevel: 'non_compliant', criticalGaps: 0 };
          }
          categoryScores[category].score += selectedOption.points;
          categoryScores[category].maxScore += Math.max(...question.options.map(opt => opt.points));
          totalScore += selectedOption.points;

          // Count critical gaps
          if (question.priority === 'critical' && selectedOption.complianceLevel === 'non_compliant') {
            categoryScores[category].criticalGaps += 1;
            criticalGaps += 1;
          }
        }
      }
      maxTotalScore += Math.max(...question.options.map(opt => opt.points));
    });

    // Determine entity type based on first question
    let entityType: 'essential' | 'important' | 'not_applicable' = 'not_applicable';
    if (answers['entity_scope']) {
      if (answers['entity_scope'].includes('essential')) {
        entityType = 'essential';
      } else if (answers['entity_scope'].includes('important') || answers['entity_scope'].includes('supply_chain') || answers['entity_scope'].includes('medium')) {
        entityType = 'important';
      }
    }

    // Determine overall compliance level
    const compliancePercentage = (totalScore / maxTotalScore) * 100;
    let overallCompliance: 'non_compliant' | 'partially_compliant' | 'largely_compliant' | 'fully_compliant' | 'exceeds_requirements';
    let complianceStatus: 'immediate_action_required' | 'significant_gaps' | 'minor_improvements' | 'compliant';
    let implementationTimeline: string;
    let estimatedInvestment: string;

    if (compliancePercentage <= 20 || criticalGaps > 0) {
      overallCompliance = 'non_compliant';
      complianceStatus = 'immediate_action_required';
      implementationTimeline = '12-18 Monate';
      estimatedInvestment = entityType === 'essential' ? '€500,000 - €2,000,000' : '€200,000 - €800,000';
    } else if (compliancePercentage <= 40) {
      overallCompliance = 'partially_compliant';
      complianceStatus = 'significant_gaps';
      implementationTimeline = '9-12 Monate';
      estimatedInvestment = entityType === 'essential' ? '€300,000 - €1,200,000' : '€150,000 - €500,000';
    } else if (compliancePercentage <= 60) {
      overallCompliance = 'largely_compliant';
      complianceStatus = 'minor_improvements';
      implementationTimeline = '6-9 Monate';
      estimatedInvestment = entityType === 'essential' ? '€200,000 - €600,000' : '€100,000 - €300,000';
    } else if (compliancePercentage <= 80) {
      overallCompliance = 'fully_compliant';
      complianceStatus = 'compliant';
      implementationTimeline = '3-6 Monate';
      estimatedInvestment = entityType === 'essential' ? '€100,000 - €300,000' : '€50,000 - €150,000';
    } else {
      overallCompliance = 'exceeds_requirements';
      complianceStatus = 'compliant';
      implementationTimeline = '1-3 Monate';
      estimatedInvestment = entityType === 'essential' ? '€50,000 - €150,000' : '€25,000 - €75,000';
    }

    // Generate recommendations and findings
    const recommendations: string[] = [];
    const nextSteps: string[] = [];
    const legalRequirements: string[] = [];
    const criticalFindings: string[] = [];

    // Legal requirements based on entity type
    if (entityType === 'essential') {
      legalRequirements.push('Meldepflicht für erhebliche Sicherheitsvorfälle innerhalb von 24 Stunden');
      legalRequirements.push('Jährliche Überwachung durch nationale Behörden');
      legalRequirements.push('Potential für Bußgelder bis zu €10 Millionen oder 2% des Jahresumsatzes');
    } else if (entityType === 'important') {
      legalRequirements.push('Meldepflicht für erhebliche Sicherheitsvorfälle innerhalb von 24 Stunden');
      legalRequirements.push('Überwachung durch nationale Behörden bei Verdacht auf Verstöße');
      legalRequirements.push('Potential für Bußgelder bis zu €7 Millionen oder 1,4% des Jahresumsatzes');
    }

    // Analyze critical findings
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const selectedOption = question.options.find(opt => opt.id === answer);
        if (selectedOption && question.priority === 'critical' && selectedOption.complianceLevel === 'non_compliant') {
          criticalFindings.push(`${question.nisRequirement}: ${question.question} - Nicht compliant`);
        }
      }
    });

    // Overall recommendations based on compliance level
    if (overallCompliance === 'non_compliant') {
      recommendations.push('Sofortige Entwicklung einer NIS2-Compliance-Strategie');
      recommendations.push('Engagement spezialisierter NIS2-Beratung');
      nextSteps.push('Gap-Analyse und Risikobewertung durchführen');
      nextSteps.push('Notfall-Sicherheitsmaßnahmen implementieren');
    } else if (overallCompliance === 'partially_compliant') {
      recommendations.push('Systematischer Ausbau bestehender Cybersecurity-Maßnahmen');
      recommendations.push('Aufbau NIS2-konformer Governance-Strukturen');
      nextSteps.push('Priorisierungs-Roadmap für kritische Lücken erstellen');
      nextSteps.push('Incident Response Verfahren implementieren');
    } else if (overallCompliance === 'largely_compliant') {
      recommendations.push('Schließung verbleibender Compliance-Lücken');
      recommendations.push('Aufbau kontinuierlicher Monitoring-Capabilities');
      nextSteps.push('Internes NIS2-Audit durchführen');
      nextSteps.push('Mitarbeitertraining intensivieren');
    } else if (overallCompliance === 'fully_compliant') {
      recommendations.push('Aufrechterhaltung der Compliance durch kontinuierliche Verbesserung');
      recommendations.push('Vorbereitung auf behördliche Überwachung');
      nextSteps.push('Regelmäßige Compliance-Reviews etablieren');
      nextSteps.push('Best Practice Sharing mit Branche');
    } else {
      recommendations.push('Weiterentwicklung als Cybersecurity-Excellence-Beispiel');
      recommendations.push('Innovation in Cybersecurity-Technologien');
      nextSteps.push('Mentoring anderer Organisationen');
      nextSteps.push('Beitrag zu Branchenstandards');
    }

    return {
      overallCompliance,
      score: totalScore,
      maxScore: maxTotalScore,
      categoryScores,
      recommendations: recommendations.slice(0, 6),
      nextSteps: nextSteps.slice(0, 6),
      legalRequirements,
      implementationTimeline,
      estimatedInvestment,
      criticalFindings,
      complianceStatus,
      entityType
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

  const getComplianceColor = (level: string) => {
    switch (level) {
      case 'non_compliant': return 'text-red-600 bg-red-100 border-red-200';
      case 'partially_compliant': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'largely_compliant': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'fully_compliant': return 'text-green-600 bg-green-100 border-green-200';
      case 'exceeds_requirements': return 'text-blue-600 bg-blue-100 border-blue-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getComplianceIcon = (level: string) => {
    switch (level) {
      case 'non_compliant': return XCircle;
      case 'partially_compliant': return AlertTriangle;
      case 'largely_compliant': return Info;
      case 'fully_compliant': return CheckCircle;
      case 'exceeds_requirements': return Star;
      default: return Info;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-700 bg-red-100 border-red-300';
      case 'high': return 'text-orange-700 bg-orange-100 border-orange-300';
      case 'medium': return 'text-yellow-700 bg-yellow-100 border-yellow-300';
      default: return 'text-gray-700 bg-gray-100 border-gray-300';
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
                NIS2 Compliance wird bewertet...
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Wir analysieren Ihre NIS2-Compliance und erstellen einen detaillierten 
                Compliance-Report mit rechtlichen Anforderungen und Umsetzungsplan.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Building2 className="h-4 w-4 animate-pulse" />
                  <span>Anwendungsbereich bestimmen...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield className="h-4 w-4 animate-pulse" />
                  <span>Cybersecurity Governance prüfen...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Activity className="h-4 w-4 animate-pulse" />
                  <span>Incident Response bewerten...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Network className="h-4 w-4 animate-pulse" />
                  <span>Supply Chain Security analysieren...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Gavel className="h-4 w-4 animate-pulse" />
                  <span>Rechtliche Anforderungen bestimmen...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResults && result) {
    const ComplianceIcon = getComplianceIcon(result.overallCompliance);
    const complianceLabels = {
      non_compliant: 'Nicht compliant',
      partially_compliant: 'Teilweise compliant',
      largely_compliant: 'Weitgehend compliant', 
      fully_compliant: 'Vollständig compliant',
      exceeds_requirements: 'Übertrifft Anforderungen'
    };

    const entityLabels = {
      essential: 'Wesentliche Einrichtung',
      important: 'Wichtige Einrichtung',
      not_applicable: 'Nicht anwendbar'
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
                  getComplianceColor(result.overallCompliance)
                )}>
                  <ComplianceIcon className="h-6 w-6" />
                  <span className="font-semibold">
                    {complianceLabels[result.overallCompliance]}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  NIS2 Compliance Check
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Umfassende Bewertung Ihrer NIS2-Richtlinien-Compliance
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
                    <div className="text-sm text-gray-600 dark:text-gray-400">NIS2 Score</div>
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
                      result.overallCompliance === 'non_compliant' ? 'text-red-600' :
                      result.overallCompliance === 'partially_compliant' ? 'text-orange-600' :
                      result.overallCompliance === 'largely_compliant' ? 'text-yellow-600' :
                      result.overallCompliance === 'fully_compliant' ? 'text-green-600' : 'text-blue-600'
                    )}>
                      {Math.round((result.score / result.maxScore) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Compliance Level</div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {entityLabels[result.entityType]}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">NIS2 Kategorie</div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className={cn(
                      "text-2xl font-bold mb-2",
                      result.criticalFindings.length === 0 ? 'text-green-600' :
                      result.criticalFindings.length <= 2 ? 'text-orange-600' : 'text-red-600'
                    )}>
                      {result.criticalFindings.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Kritische Findings</div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Implementation Details */}
              <motion.div
                className="grid md:grid-cols-2 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-500" />
                      Umsetzungsplanung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Timeline</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{result.implementationTimeline}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">Geschätzte Investition</div>
                        <div className="font-semibold text-gray-900 dark:text-white">{result.estimatedInvestment}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gavel className="h-5 w-5 text-purple-500" />
                      Rechtliche Anforderungen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {result.legalRequirements.slice(0, 3).map((req, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Info className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{req}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Critical Findings */}
              {result.criticalFindings.length > 0 && (
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="border-red-200 dark:border-red-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <AlertOctagon className="h-5 w-5" />
                        Kritische Compliance-Lücken
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {result.criticalFindings.map((finding, index) => (
                          <div key={index} className="flex items-start gap-2 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                            <XCircle className="h-4 w-4 text-red-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-red-800 dark:text-red-200">{finding}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {/* Category Breakdown */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Compliance nach NIS2-Bereichen
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(result.categoryScores).map(([category, data], index) => {
                    const percentage = (data.score / data.maxScore) * 100;
                    const level = percentage <= 20 ? 'non_compliant' : percentage <= 40 ? 'partially_compliant' : percentage <= 60 ? 'largely_compliant' : percentage <= 80 ? 'fully_compliant' : 'exceeds_requirements';
                    
                    return (
                      <Card key={category}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {category}
                            </h3>
                            <div className="flex items-center gap-2">
                              <Badge className={getComplianceColor(level)}>
                                {data.score}/{data.maxScore}
                              </Badge>
                              {data.criticalGaps > 0 && (
                                <Badge className="text-red-700 bg-red-100 border-red-300">
                                  {data.criticalGaps} Critical
                                </Badge>
                              )}
                            </div>
                          </div>
                          <Progress value={percentage} className="mb-2" />
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {complianceLabels[level]} ({Math.round(percentage)}%)
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
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
                  NIS2 Compliance Report downloaden
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  Umsetzungsplan erstellen
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
                <span className="text-sm font-medium">NIS2 Compliance Check</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                NIS2-Richtlinien-Compliance bewerten
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Evaluieren Sie systematisch Ihre Compliance mit der NIS2-Richtlinie und 
                erhalten Sie detaillierte rechtliche Anforderungen sowie einen Umsetzungsplan.
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
                    <Badge className={getPriorityColor(currentQuestion.priority)}>
                      {currentQuestion.priority.charAt(0).toUpperCase() + currentQuestion.priority.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {currentQuestion.nisRequirement}
                    </span>
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
                      const ComplianceIcon = getComplianceIcon(option.complianceLevel);
                      
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
                                <ComplianceIcon className={cn(
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
                                      getComplianceColor(option.complianceLevel)
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

export default NIS2ComplianceCheck;