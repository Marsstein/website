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
  Trending
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
    maturityLevel: 'initial' | 'managed' | 'defined' | 'quantitatively_managed' | 'optimizing';
    points: number;
    explanation: string;
  }[];
  helpText?: string;
}

interface AssessmentResult {
  overallMaturity: 'initial' | 'managed' | 'defined' | 'quantitatively_managed' | 'optimizing';
  score: number;
  maxScore: number;
  categoryScores: Record<string, { score: number; maxScore: number; maturityLevel: string }>;
  recommendations: string[];
  nextSteps: string[];
  improvementPlan: string[];
  benchmarks: { category: string; industry: number; yourScore: number }[];
  maturityRoadmap: string[];
  complianceStatus: 'immature' | 'developing' | 'mature' | 'advanced' | 'world_class';
}

const ISMSMaturityAssessment: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // ISMS Maturity Assessment Questions based on CMMI model
  const questions: Question[] = [
    {
      id: 'process_documentation',
      category: 'Prozess-Dokumentation',
      question: 'Wie dokumentiert und standardisiert sind Ihre ISMS-Prozesse?',
      explanation: 'Reife ISMS-Organisationen haben gut dokumentierte und standardisierte Sicherheitsprozesse',
      options: [
        {
          id: 'ad_hoc_processes',
          text: 'Ad-hoc Prozesse ohne formelle Dokumentation',
          maturityLevel: 'initial',
          points: 1,
          explanation: 'Unstrukturierte Herangehensweise mit inkonsistenten Ergebnissen'
        },
        {
          id: 'basic_documentation',
          text: 'Grundlegende Prozessdokumentation für kritische Bereiche',
          maturityLevel: 'managed',
          points: 2,
          explanation: 'Erste Strukturierung, aber noch nicht vollständig implementiert'
        },
        {
          id: 'standardized_processes',
          text: 'Standardisierte und dokumentierte Prozesse organisationsweit',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Konsistente Prozesse mit klaren Verantwortlichkeiten'
        },
        {
          id: 'measured_processes',
          text: 'Prozesse werden gemessen und kontrolliert mit KPIs',
          maturityLevel: 'quantitatively_managed',
          points: 4,
          explanation: 'Datengetriebene Prozesssteuerung mit kontinuierlicher Überwachung'
        },
        {
          id: 'optimized_processes',
          text: 'Kontinuierlich optimierte Prozesse basierend auf Daten und Feedback',
          maturityLevel: 'optimizing',
          points: 5,
          explanation: 'Selbstoptimierende Prozesse mit proaktiver Verbesserung'
        }
      ]
    },
    {
      id: 'risk_management_maturity',
      category: 'Risikomanagement-Reife',
      question: 'Wie ausgereift ist Ihr Risikomanagement-Ansatz?',
      explanation: 'Reifes Risikomanagement integriert sich nahtlos in Geschäftsprozesse',
      options: [
        {
          id: 'reactive_risk_handling',
          text: 'Reaktive Risikobehandlung bei Auftreten von Problemen',
          maturityLevel: 'initial',
          points: 1,
          explanation: 'Risiken werden erst bei Eintreten erkannt und behandelt'
        },
        {
          id: 'basic_risk_assessment',
          text: 'Regelmäßige Risikobeurteilungen mit grundlegender Behandlung',
          maturityLevel: 'managed',
          points: 2,
          explanation: 'Strukturierte Risikoidentifikation mit grundlegenden Maßnahmen'
        },
        {
          id: 'integrated_risk_management',
          text: 'Integriertes Risikomanagement in alle Geschäftsprozesse',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Risikomanagement ist Teil der täglichen Geschäftstätigkeit'
        },
        {
          id: 'quantitative_risk_analysis',
          text: 'Quantitative Risikoanalyse mit messbaren Risikoindikatoren',
          maturityLevel: 'quantitatively_managed',
          points: 4,
          explanation: 'Datenbasierte Risikoentscheidungen mit KRIs und Metriken'
        },
        {
          id: 'predictive_risk_management',
          text: 'Predictive Risk Intelligence mit proaktiver Risikoantizipation',
          maturityLevel: 'optimizing',
          points: 5,
          explanation: 'Vorausschauendes Risikomanagement mit AI-gestützter Analyse'
        }
      ]
    },
    {
      id: 'security_culture',
      category: 'Sicherheitskultur',
      question: 'Wie stark ist die Sicherheitskultur in Ihrer Organisation ausgeprägt?',
      explanation: 'Eine starke Sicherheitskultur ist das Fundament für nachhaltigen ISMS-Erfolg',
      options: [
        {
          id: 'awareness_lacking',
          text: 'Geringe Sicherheitsawareness, Compliance-getrieben',
          maturityLevel: 'initial',
          points: 1,
          explanation: 'Sicherheit wird als Hindernis wahrgenommen'
        },
        {
          id: 'basic_awareness',
          text: 'Grundlegendes Sicherheitsbewusstsein bei Schlüsselpersonen',
          maturityLevel: 'managed',
          points: 2,
          explanation: 'Erste Sensibilisierung, aber noch nicht organisationsweit'
        },
        {
          id: 'established_culture',
          text: 'Etablierte Sicherheitskultur mit regelmäßigen Trainings',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Sicherheit ist akzeptierter Teil der Arbeitskultur'
        },
        {
          id: 'measured_culture',
          text: 'Sicherheitskultur wird gemessen und kontinuierlich verbessert',
          maturityLevel: 'quantitatively_managed',
          points: 4,
          explanation: 'Kulturelle Metriken und systematische Verbesserung'
        },
        {
          id: 'self_improving_culture',
          text: 'Selbstverbessernde Sicherheitskultur mit proaktiven Mitarbeitern',
          maturityLevel: 'optimizing',
          points: 5,
          explanation: 'Mitarbeiter als aktive Sicherheitsbotschafter'
        }
      ]
    },
    {
      id: 'incident_response_maturity',
      category: 'Incident Response Reife',
      question: 'Wie ausgereift sind Ihre Incident Response Fähigkeiten?',
      explanation: 'Reife Incident Response minimiert Schäden und maximiert Lerneffekte',
      options: [
        {
          id: 'ad_hoc_response',
          text: 'Ad-hoc Reaktion auf Sicherheitsvorfälle',
          maturityLevel: 'initial',
          points: 1,
          explanation: 'Unkoordinierte Reaktion ohne strukturierte Verfahren'
        },
        {
          id: 'documented_procedures',
          text: 'Dokumentierte Incident Response Verfahren',
          maturityLevel: 'managed',
          points: 2,
          explanation: 'Strukturierte Verfahren, aber begrenzte Übung und Training'
        },
        {
          id: 'trained_team',
          text: 'Trainiertes IR-Team mit regelmäßigen Übungen',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Koordinierte Response mit standardisierten Prozessen'
        },
        {
          id: 'measured_response',
          text: 'Gemessene Response-Zeiten mit kontinuierlicher Verbesserung',
          maturityLevel: 'quantitatively_managed',
          points: 4,
          explanation: 'Metriken-basierte Optimierung der IR-Fähigkeiten'
        },
        {
          id: 'predictive_response',
          text: 'Predictive Response mit Threat Hunting und proaktiver Erkennung',
          maturityLevel: 'optimizing',
          points: 5,
          explanation: 'Vorausschauende Incident Prevention und Response'
        }
      ]
    },
    {
      id: 'continuous_monitoring',
      category: 'Kontinuierliches Monitoring',
      question: 'Wie umfassend ist Ihr kontinuierliches Sicherheitsmonitoring?',
      explanation: 'Kontinuierliches Monitoring ermöglicht proaktive Sicherheitsmaßnahmen',
      options: [
        {
          id: 'periodic_checks',
          text: 'Periodische manuelle Sicherheitsüberprüfungen',
          maturityLevel: 'initial',
          points: 1,
          explanation: 'Sporadische Kontrollen ohne systematischen Ansatz'
        },
        {
          id: 'basic_monitoring',
          text: 'Grundlegendes automatisiertes Monitoring kritischer Systeme',
          maturityLevel: 'managed',
          points: 2,
          explanation: 'Erste Automatisierung, aber begrenzte Abdeckung'
        },
        {
          id: 'comprehensive_monitoring',
          text: 'Umfassendes Monitoring mit SIEM und Alerting',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Strukturiertes Monitoring mit zentralisierter Überwachung'
        },
        {
          id: 'intelligent_monitoring',
          text: 'Intelligentes Monitoring mit ML-basierter Anomalie-Erkennung',
          maturityLevel: 'quantitatively_managed',
          points: 4,
          explanation: 'Fortgeschrittene Analytik für proaktive Erkennung'
        },
        {
          id: 'adaptive_monitoring',
          text: 'Adaptives Monitoring mit selbstlernenden Systemen',
          maturityLevel: 'optimizing',
          points: 5,
          explanation: 'Autonome Überwachung mit kontinuierlicher Optimierung'
        }
      ]
    },
    {
      id: 'governance_integration',
      category: 'Governance-Integration',
      question: 'Wie gut ist ISMS in Ihre Unternehmens-Governance integriert?',
      explanation: 'Reife ISMS-Integration unterstützt strategische Geschäftsziele',
      options: [
        {
          id: 'isolated_security',
          text: 'Sicherheit als isolierte IT-Funktion betrachtet',
          maturityLevel: 'initial',
          points: 1,
          explanation: 'Sicherheit wird nicht als Geschäftsthema verstanden'
        },
        {
          id: 'basic_integration',
          text: 'Grundlegende Integration in IT-Governance',
          maturityLevel: 'managed',
          points: 2,
          explanation: 'Erste Anerkennung als wichtiger IT-Aspekt'
        },
        {
          id: 'business_aligned',
          text: 'ISMS ist an Geschäftszielen ausgerichtet',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Sicherheit unterstützt Geschäftsprozesse aktiv'
        },
        {
          id: 'strategic_enabler',
          text: 'ISMS als strategischer Geschäfts-Enabler',
          maturityLevel: 'quantitatively_managed',
          points: 4,
          explanation: 'Sicherheit ermöglicht neue Geschäftsmöglichkeiten'
        },
        {
          id: 'competitive_advantage',
          text: 'ISMS als Wettbewerbsvorteil und Innovationstreiber',
          maturityLevel: 'optimizing',
          points: 5,
          explanation: 'Sicherheit als strategischer Differentiator'
        }
      ]
    },
    {
      id: 'metrics_analytics',
      category: 'Metriken & Analytics',
      question: 'Wie ausgereift sind Ihre Sicherheitsmetriken und -analysen?',
      explanation: 'Reife Organisationen nutzen Daten für strategische Sicherheitsentscheidungen',
      options: [
        {
          id: 'basic_reporting',
          text: 'Grundlegendes Compliance-Reporting',
          maturityLevel: 'initial',
          points: 1,
          explanation: 'Minimale Berichterstattung für regulatorische Anforderungen'
        },
        {
          id: 'operational_metrics',
          text: 'Operative Sicherheitsmetriken und KPIs',
          maturityLevel: 'managed',
          points: 2,
          explanation: 'Erste Messungen zur Prozessverbesserung'
        },
        {
          id: 'strategic_metrics',
          text: 'Strategische Metriken mit Management-Dashboards',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Umfassende Metriken für alle Stakeholder-Ebenen'
        },
        {
          id: 'predictive_analytics',
          text: 'Predictive Analytics für Risiko- und Trendvorhersagen',
          maturityLevel: 'quantitatively_managed',
          points: 4,
          explanation: 'Datengestützte Vorhersagen für proaktive Maßnahmen'
        },
        {
          id: 'ai_driven_insights',
          text: 'KI-gestützte Insights für strategische Sicherheitsentscheidungen',
          maturityLevel: 'optimizing',
          points: 5,
          explanation: 'Autonome Datenanalyse für optimale Sicherheitsstrategien'
        }
      ]
    },
    {
      id: 'supply_chain_security',
      category: 'Supply Chain Security',
      question: 'Wie umfassend managen Sie Sicherheitsrisiken in der Lieferkette?',
      explanation: 'Moderne ISMS berücksichtigen Third-Party und Supply Chain Risiken',
      options: [
        {
          id: 'basic_vendor_checks',
          text: 'Grundlegende Vendor-Überprüfungen bei Vertragsabschluss',
          maturityLevel: 'initial',
          points: 1,
          explanation: 'Minimale Due Diligence ohne kontinuierliche Überwachung'
        },
        {
          id: 'vendor_assessments',
          text: 'Regelmäßige Sicherheitsassessments wichtiger Lieferanten',
          maturityLevel: 'managed',
          points: 2,
          explanation: 'Strukturierte Bewertung kritischer Vendor-Beziehungen'
        },
        {
          id: 'integrated_scm',
          text: 'Integriertes Supply Chain Risikomanagement',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Umfassendes Management aller Lieferantenrisiken'
        },
        {
          id: 'continuous_monitoring_scm',
          text: 'Kontinuierliches Monitoring der Supply Chain Sicherheit',
          maturityLevel: 'quantitatively_managed',
          points: 4,
          explanation: 'Real-time Überwachung von Lieferantenrisiken'
        },
        {
          id: 'ecosystem_security',
          text: 'Ganzheitliches Ecosystem Security Management',
          maturityLevel: 'optimizing',
          points: 5,
          explanation: 'Proaktives Management des gesamten Sicherheits-Ökosystems'
        }
      ]
    }
  ];

  const calculateResult = (): AssessmentResult => {
    const categoryScores: Record<string, { score: number; maxScore: number; maturityLevel: string }> = {};
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
            categoryScores[category] = { score: 0, maxScore: 0, maturityLevel: 'initial' };
          }
          categoryScores[category].score += selectedOption.points;
          categoryScores[category].maxScore += Math.max(...question.options.map(opt => opt.points));
          totalScore += selectedOption.points;
        }
      }
      maxTotalScore += Math.max(...question.options.map(opt => opt.points));
    });

    // Determine overall maturity level
    const maturityPercentage = (totalScore / maxTotalScore) * 100;
    let overallMaturity: 'initial' | 'managed' | 'defined' | 'quantitatively_managed' | 'optimizing';
    let complianceStatus: 'immature' | 'developing' | 'mature' | 'advanced' | 'world_class';

    if (maturityPercentage <= 20) {
      overallMaturity = 'initial';
      complianceStatus = 'immature';
    } else if (maturityPercentage <= 40) {
      overallMaturity = 'managed';
      complianceStatus = 'developing';
    } else if (maturityPercentage <= 60) {
      overallMaturity = 'defined';
      complianceStatus = 'mature';
    } else if (maturityPercentage <= 80) {
      overallMaturity = 'quantitatively_managed';
      complianceStatus = 'advanced';
    } else {
      overallMaturity = 'optimizing';
      complianceStatus = 'world_class';
    }

    // Generate industry benchmarks (simulated data)
    const benchmarks = [
      { category: 'Prozess-Dokumentation', industry: 3.2, yourScore: categoryScores['Prozess-Dokumentation']?.score || 0 },
      { category: 'Risikomanagement-Reife', industry: 2.8, yourScore: categoryScores['Risikomanagement-Reife']?.score || 0 },
      { category: 'Sicherheitskultur', industry: 2.5, yourScore: categoryScores['Sicherheitskultur']?.score || 0 },
      { category: 'Incident Response Reife', industry: 2.9, yourScore: categoryScores['Incident Response Reife']?.score || 0 },
      { category: 'Kontinuierliches Monitoring', industry: 3.1, yourScore: categoryScores['Kontinuierliches Monitoring']?.score || 0 },
      { category: 'Governance-Integration', industry: 2.7, yourScore: categoryScores['Governance-Integration']?.score || 0 },
      { category: 'Metriken & Analytics', industry: 2.4, yourScore: categoryScores['Metriken & Analytics']?.score || 0 },
      { category: 'Supply Chain Security', industry: 2.2, yourScore: categoryScores['Supply Chain Security']?.score || 0 }
    ];

    // Generate recommendations based on maturity level
    const recommendations: string[] = [];
    const nextSteps: string[] = [];
    const improvementPlan: string[] = [];
    const maturityRoadmap: string[] = [];

    // Maturity-specific recommendations
    if (overallMaturity === 'initial') {
      recommendations.push('Etablierung grundlegender ISMS-Strukturen und -Prozesse');
      recommendations.push('Aufbau einer dokumentierten Sicherheitsorganisation');
      nextSteps.push('Ernennung eines Chief Information Security Officers (CISO)');
      nextSteps.push('Entwicklung einer Informationssicherheits-Politik');
      improvementPlan.push('Strukturierte ISMS-Implementierung nach ISO 27001');
      maturityRoadmap.push('Jahr 1: Grundlagen schaffen und Politik etablieren');
    } else if (overallMaturity === 'managed') {
      recommendations.push('Standardisierung und Optimierung bestehender Sicherheitsprozesse');
      recommendations.push('Ausbau des Risikomanagements und Monitoring');
      nextSteps.push('Implementierung eines SIEM-Systems');
      nextSteps.push('Entwicklung von Sicherheits-KPIs');
      improvementPlan.push('Prozessstandardisierung und Automatisierung');
      maturityRoadmap.push('Jahr 1-2: Prozesse standardisieren und messen');
    } else if (overallMaturity === 'defined') {
      recommendations.push('Integration von Sicherheit in alle Geschäftsprozesse');
      recommendations.push('Aufbau fortgeschrittener Analyse- und Monitoring-Fähigkeiten');
      nextSteps.push('Implementierung von Predictive Analytics');
      nextSteps.push('Ausbau der Threat Intelligence Capabilities');
      improvementPlan.push('Datengetriebene Sicherheitsentscheidungen');
      maturityRoadmap.push('Jahr 2-3: Integration und Quantifizierung');
    } else if (overallMaturity === 'quantitatively_managed') {
      recommendations.push('Kontinuierliche Optimierung durch KI und Machine Learning');
      recommendations.push('Aufbau von Zero-Trust-Architekturen');
      nextSteps.push('Implementierung autonomer Sicherheitssysteme');
      nextSteps.push('Entwicklung einer Sicherheits-Innovation-Pipeline');
      improvementPlan.push('Autonome und selbstoptimierende Sicherheit');
      maturityRoadmap.push('Jahr 3-5: Optimierung und Innovation');
    } else {
      recommendations.push('Weiterentwicklung als Sicherheits-Innovation-Leader');
      recommendations.push('Aufbau eines Sicherheits-Ökosystems mit Partnern');
      nextSteps.push('Entwicklung branchenführender Sicherheitspraktiken');
      nextSteps.push('Mentoring anderer Organisationen');
      improvementPlan.push('Thought Leadership und Ecosystem Building');
      maturityRoadmap.push('Kontinuierlich: Innovation und Ökosystem-Leadership');
    }

    // Category-specific recommendations
    Object.entries(categoryScores).forEach(([category, data]) => {
      const categoryPercentage = (data.score / data.maxScore) * 100;
      
      if (categoryPercentage < 40) {
        improvementPlan.push(`${category}: Prioritäre Verbesserung erforderlich (${Math.round(categoryPercentage)}% Reifegrad)`);
      }
    });

    return {
      overallMaturity,
      score: totalScore,
      maxScore: maxTotalScore,
      categoryScores,
      recommendations: recommendations.slice(0, 6),
      nextSteps: nextSteps.slice(0, 6),
      improvementPlan,
      benchmarks,
      maturityRoadmap,
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

  const getMaturityColor = (level: string) => {
    switch (level) {
      case 'initial': return 'text-red-600 bg-red-100 border-red-200';
      case 'managed': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'defined': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'quantitatively_managed': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'optimizing': return 'text-green-600 bg-green-100 border-green-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getMaturityIcon = (level: string) => {
    switch (level) {
      case 'initial': return XCircle;
      case 'managed': return AlertTriangle;
      case 'defined': return Info;
      case 'quantitatively_managed': return BarChart3;
      case 'optimizing': return Star;
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
                ISMS Maturity Assessment wird berechnet...
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Wir analysieren den Reifegrad Ihres ISMS und erstellen einen umfassenden 
                Maturity-Report mit Benchmarks und Verbesserungsroadmap.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <FileText className="h-4 w-4 animate-pulse" />
                  <span>Prozess-Dokumentation bewerten...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield className="h-4 w-4 animate-pulse" />
                  <span>Risikomanagement-Reife analysieren...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Users className="h-4 w-4 animate-pulse" />
                  <span>Sicherheitskultur bewerten...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <LineChart className="h-4 w-4 animate-pulse" />
                  <span>Metriken und Analytics prüfen...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Gauge className="h-4 w-4 animate-pulse" />
                  <span>Gesamt-Reifegrad bestimmen...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResults && result) {
    const MaturityIcon = getMaturityIcon(result.overallMaturity);
    const maturityLabels = {
      initial: 'Initial',
      managed: 'Managed',
      defined: 'Defined', 
      quantitatively_managed: 'Quantitatively Managed',
      optimizing: 'Optimizing'
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
                  getMaturityColor(result.overallMaturity)
                )}>
                  <MaturityIcon className="h-6 w-6" />
                  <span className="font-semibold">
                    Level {Object.keys(maturityLabels).indexOf(result.overallMaturity) + 1}: {maturityLabels[result.overallMaturity]}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  ISMS Maturity Assessment
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Umfassende Reifegrad-Analyse Ihres Informationssicherheits-Management-Systems
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
                    <div className="text-sm text-gray-600 dark:text-gray-400">Maturity Score</div>
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
                      result.overallMaturity === 'initial' ? 'text-red-600' :
                      result.overallMaturity === 'managed' ? 'text-orange-600' :
                      result.overallMaturity === 'defined' ? 'text-yellow-600' :
                      result.overallMaturity === 'quantitatively_managed' ? 'text-blue-600' : 'text-green-600'
                    )}>
                      Level {Object.keys(maturityLabels).indexOf(result.overallMaturity) + 1}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">CMMI Level</div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className={cn(
                      "text-2xl font-bold mb-2",
                      result.complianceStatus === 'immature' ? 'text-red-600' :
                      result.complianceStatus === 'developing' ? 'text-orange-600' :
                      result.complianceStatus === 'mature' ? 'text-yellow-600' :
                      result.complianceStatus === 'advanced' ? 'text-blue-600' : 'text-green-600'
                    )}>
                      {result.complianceStatus === 'immature' ? 'Unreif' :
                       result.complianceStatus === 'developing' ? 'Entwickelnd' :
                       result.complianceStatus === 'mature' ? 'Reif' :
                       result.complianceStatus === 'advanced' ? 'Fortgeschritten' : 'Weltklasse'}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Status</div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {Math.round((result.score / result.maxScore) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Gesamt-Reifegrad</div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Category Breakdown & Benchmarks */}
              <motion.div
                className="grid lg:grid-cols-2 gap-8 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Category Scores */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-blue-500" />
                      Reifegrad nach Kategorien
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(result.categoryScores).map(([category, data], index) => {
                        const percentage = (data.score / data.maxScore) * 100;
                        const level = percentage <= 20 ? 'initial' : percentage <= 40 ? 'managed' : percentage <= 60 ? 'defined' : percentage <= 80 ? 'quantitatively_managed' : 'optimizing';
                        
                        return (
                          <div key={category} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                {category}
                              </span>
                              <Badge className={cn("text-xs", getMaturityColor(level))}>
                                Level {Object.keys(maturityLabels).indexOf(level) + 1}
                              </Badge>
                            </div>
                            <Progress value={percentage} className="h-2" />
                            <div className="text-xs text-gray-500">
                              {data.score}/{data.maxScore} ({Math.round(percentage)}%)
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Industry Benchmarks */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-green-500" />
                      Industry Benchmarks
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {result.benchmarks.map((benchmark, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {benchmark.category}
                            </span>
                            <div className="flex items-center gap-2">
                              <span className={cn(
                                "text-xs px-2 py-1 rounded",
                                benchmark.yourScore >= benchmark.industry 
                                  ? "bg-green-100 text-green-700" 
                                  : "bg-orange-100 text-orange-700"
                              )}>
                                {benchmark.yourScore >= benchmark.industry ? '↗' : '↘'} vs Industry
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-xs">
                            <div className="flex-1">
                              <div className="text-gray-500">Sie: {benchmark.yourScore}/5</div>
                              <Progress value={(benchmark.yourScore / 5) * 100} className="h-1" />
                            </div>
                            <div className="flex-1">
                              <div className="text-gray-500">Industrie: {benchmark.industry}/5</div>
                              <Progress value={(benchmark.industry / 5) * 100} className="h-1 opacity-60" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Maturity Roadmap */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="border-blue-200 dark:border-blue-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                      <Trending className="h-5 w-5" />
                      Maturity Roadmap
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {result.maturityRoadmap.map((milestone, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{milestone}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Recommendations and Improvement Plan */}
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

              {/* Improvement Plan */}
              {result.improvementPlan.length > 0 && (
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Card className="border-orange-200 dark:border-orange-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                        <TrendingUp className="h-5 w-5" />
                        Verbesserungsplan
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {result.improvementPlan.map((item, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <Target className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

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
                  Maturity Report downloaden
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <BookOpen className="h-5 w-5" />
                  Improvement Roadmap erstellen
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
                <Award className="h-4 w-4" />
                <span className="text-sm font-medium">ISMS Maturity Assessment</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                ISMS-Reifegrad bewerten
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Evaluieren Sie den Reifegrad Ihres Informationssicherheits-Management-Systems 
                nach CMMI-Modell und erhalten Sie Benchmarks sowie eine detaillierte Verbesserungsroadmap.
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
                      const MaturityIcon = getMaturityIcon(option.maturityLevel);
                      
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
                                <MaturityIcon className={cn(
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
                                      getMaturityColor(option.maturityLevel)
                                    )}
                                  >
                                    Level {Object.keys(maturityLabels).indexOf(option.maturityLevel) + 1}
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

export default ISMSMaturityAssessment;