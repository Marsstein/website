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
  BarChart3,
  Activity,
  Globe,
  UserCheck,
  Database,
  Layers,
  Hash
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
    impactLevel: 'low' | 'medium' | 'high' | 'critical';
    points: number;
    explanation: string;
  }[];
  helpText?: string;
}

interface AssessmentResult {
  overallImpact: 'low' | 'medium' | 'high' | 'critical';
  score: number;
  maxScore: number;
  categoryScores: Record<string, { score: number; maxScore: number; impactLevel: string }>;
  recommendations: string[];
  nextSteps: string[];
  mitigationStrategies: string[];
  complianceStatus: 'compliant' | 'action_needed' | 'critical';
}

const AlgorithmicImpactAssessment: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Assessment",
    "name": "Algorithmic Impact Assessment",
    "description": "Bewerten Sie die gesellschaftlichen Auswirkungen Ihrer algorithmischen Entscheidungssysteme",
    "educationalLevel": "Professional",
    "url": "https://marsstein.com/assessment-center/algorithmic-impact-assessment"
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Algorithmic Impact Assessment Questions
  const questions: Question[] = [
    {
      id: 'algorithm_scope',
      category: 'Anwendungsbereich',
      question: 'Welchen gesellschaftlichen Bereich betrifft Ihr Algorithmus primär?',
      explanation: 'Der Anwendungsbereich bestimmt die potenzielle gesellschaftliche Reichweite der Auswirkungen',
      options: [
        {
          id: 'internal_processes',
          text: 'Interne Geschäftsprozesse (HR, Finanzen, Operations)',
          impactLevel: 'low',
          points: 1,
          explanation: 'Begrenzte gesellschaftliche Auswirkungen, hauptsächlich unternehmensintern'
        },
        {
          id: 'customer_services',
          text: 'Kundenservice und Produktempfehlungen',
          impactLevel: 'medium',
          points: 2,
          explanation: 'Moderate Auswirkungen auf Nutzerverhalten und Wahlmöglichkeiten'
        },
        {
          id: 'public_services',
          text: 'Öffentliche Dienstleistungen (Gesundheit, Bildung, Soziales)',
          impactLevel: 'high',
          points: 4,
          explanation: 'Erhebliche Auswirkungen auf grundlegende Lebensbereiche der Bürger'
        },
        {
          id: 'justice_security',
          text: 'Justiz, Sicherheit oder demokratische Prozesse',
          impactLevel: 'critical',
          points: 5,
          explanation: 'Kritische Auswirkungen auf Rechtsstaatlichkeit und gesellschaftliche Grundordnung'
        }
      ]
    },
    {
      id: 'affected_population',
      category: 'Betroffene Personen',
      question: 'Wie viele Personen sind von Ihrem Algorithmus betroffen?',
      explanation: 'Die Anzahl betroffener Personen bestimmt die Skalierung der gesellschaftlichen Auswirkungen',
      options: [
        {
          id: 'small_group',
          text: 'Weniger als 1.000 Personen',
          impactLevel: 'low',
          points: 1,
          explanation: 'Begrenzte Reichweite mit lokalisierten Auswirkungen'
        },
        {
          id: 'medium_group',
          text: '1.000 - 10.000 Personen',
          impactLevel: 'medium',
          points: 2,
          explanation: 'Moderate Reichweite mit regionalen Auswirkungen'
        },
        {
          id: 'large_group',
          text: '10.000 - 100.000 Personen',
          impactLevel: 'high',
          points: 3,
          explanation: 'Große Reichweite mit überregionalen Auswirkungen'
        },
        {
          id: 'mass_population',
          text: 'Mehr als 100.000 Personen',
          impactLevel: 'critical',
          points: 4,
          explanation: 'Massenhafte Betroffenheit mit gesellschaftsweiten Auswirkungen'
        }
      ]
    },
    {
      id: 'vulnerable_groups',
      category: 'Vulnerable Gruppen',
      question: 'Betrifft Ihr Algorithmus besonders schutzbedürftige Personengruppen?',
      explanation: 'Vulnerable Gruppen benötigen besonderen Schutz vor algorithmischen Entscheidungen',
      options: [
        {
          id: 'no_vulnerable',
          text: 'Nein, keine besonderen Gruppen betroffen',
          impactLevel: 'low',
          points: 0,
          explanation: 'Standardschutzmaßnahmen ausreichend'
        },
        {
          id: 'economic_vulnerable',
          text: 'Wirtschaftlich Benachteiligte oder Arbeitsuchende',
          impactLevel: 'medium',
          points: 2,
          explanation: 'Erhöhte Aufmerksamkeit für faire Behandlung erforderlich'
        },
        {
          id: 'protected_characteristics',
          text: 'Personen mit geschützten Merkmalen (Alter, Geschlecht, Ethnizität)',
          impactLevel: 'high',
          points: 3,
          explanation: 'Besondere Anti-Diskriminierungsmaßnahmen notwendig'
        },
        {
          id: 'highly_vulnerable',
          text: 'Kinder, Menschen mit Behinderungen oder andere hochvulnerable Gruppen',
          impactLevel: 'critical',
          points: 4,
          explanation: 'Höchste Schutzstandards und zusätzliche Sicherungsmaßnahmen erforderlich'
        }
      ]
    },
    {
      id: 'decision_consequences',
      category: 'Entscheidungsfolgen',
      question: 'Welche Konsequenzen haben die algorithmischen Entscheidungen für Betroffene?',
      explanation: 'Die Schwere der Konsequenzen bestimmt das Risikopotenzial für die Betroffenen',
      options: [
        {
          id: 'minor_convenience',
          text: 'Geringfügige Auswirkungen (z.B. Produktempfehlungen, Werbung)',
          impactLevel: 'low',
          points: 1,
          explanation: 'Minimale Auswirkungen auf Lebensqualität oder Wahlmöglichkeiten'
        },
        {
          id: 'service_access',
          text: 'Zugang zu Services oder Dienstleistungen',
          impactLevel: 'medium',
          points: 2,
          explanation: 'Moderate Auswirkungen auf Zugangsmöglichkeiten und Komfort'
        },
        {
          id: 'financial_impact',
          text: 'Finanzielle Auswirkungen (Kredite, Versicherungen, Gehalt)',
          impactLevel: 'high',
          points: 3,
          explanation: 'Erhebliche Auswirkungen auf wirtschaftliche Situation'
        },
        {
          id: 'fundamental_rights',
          text: 'Grundrechte und Lebensperspektiven (Gesundheit, Freiheit, Bildung)',
          impactLevel: 'critical',
          points: 4,
          explanation: 'Schwerwiegende Auswirkungen auf fundamentale Lebensbereiche'
        }
      ]
    },
    {
      id: 'bias_fairness',
      category: 'Fairness & Bias',
      question: 'Wie bewerten Sie das Bias- und Diskriminierungsrisiko Ihres Algorithmus?',
      explanation: 'Algorithmische Verzerrungen können zu unfairer Behandlung führen',
      options: [
        {
          id: 'low_bias_risk',
          text: 'Niedriges Risiko - neutrale Daten und getestete Fairness',
          impactLevel: 'low',
          points: 1,
          explanation: 'Umfassende Bias-Tests durchgeführt, faire Ergebnisse validiert'
        },
        {
          id: 'moderate_bias_risk',
          text: 'Moderates Risiko - teilweise sensible Daten verwendet',
          impactLevel: 'medium',
          points: 2,
          explanation: 'Einige Bias-Indikatoren vorhanden, Monitoring implementiert'
        },
        {
          id: 'high_bias_risk',
          text: 'Hohes Risiko - historische oder demografische Daten als Basis',
          impactLevel: 'high',
          points: 3,
          explanation: 'Signifikante Bias-Risiken identifiziert, Mitigationsmaßnahmen erforderlich'
        },
        {
          id: 'critical_bias_risk',
          text: 'Kritisches Risiko - bekannte Verzerrungen oder Diskriminierungspotenzial',
          impactLevel: 'critical',
          points: 4,
          explanation: 'Hohe Wahrscheinlichkeit unfairer Behandlung, umfassende Überarbeitung nötig'
        }
      ]
    },
    {
      id: 'transparency_explainability',
      category: 'Transparenz & Erklärbarkeit',
      question: 'Wie transparent und erklärbar sind die Entscheidungen Ihres Algorithmus?',
      explanation: 'Transparenz ermöglicht Vertrauen und Nachvollziehbarkeit algorithmischer Entscheidungen',
      options: [
        {
          id: 'fully_transparent',
          text: 'Vollständig transparent - alle Faktoren nachvollziehbar',
          impactLevel: 'low',
          points: 0,
          explanation: 'Betroffene können Entscheidungen vollständig verstehen und nachvollziehen'
        },
        {
          id: 'partially_transparent',
          text: 'Teilweise transparent - Hauptfaktoren bekannt',
          impactLevel: 'medium',
          points: 1,
          explanation: 'Grundlegende Entscheidungskriterien sind verfügbar'
        },
        {
          id: 'limited_transparency',
          text: 'Begrenzte Transparenz - nur Ergebnis kommuniziert',
          impactLevel: 'high',
          points: 2,
          explanation: 'Entscheidungsprozess größtenteils intransparent'
        },
        {
          id: 'black_box',
          text: 'Black Box - keine Erklärung der Entscheidungslogik',
          impactLevel: 'critical',
          points: 3,
          explanation: 'Vollständig intransparente Entscheidungen ohne Nachvollziehbarkeit'
        }
      ]
    },
    {
      id: 'human_oversight',
      category: 'Menschliche Aufsicht',
      question: 'Welches Maß an menschlicher Kontrolle gibt es über algorithmische Entscheidungen?',
      explanation: 'Menschliche Aufsicht gewährleistet Verantwortlichkeit und Korrekturmöglichkeiten',
      options: [
        {
          id: 'human_in_loop',
          text: 'Mensch entscheidet - Algorithmus unterstützt nur',
          impactLevel: 'low',
          points: 0,
          explanation: 'Vollständige menschliche Kontrolle über finale Entscheidungen'
        },
        {
          id: 'human_on_loop',
          text: 'Menschliche Überprüfung bei kritischen Fällen',
          impactLevel: 'medium',
          points: 1,
          explanation: 'Automatische Entscheidungen mit menschlicher Oversight bei Bedarf'
        },
        {
          id: 'limited_oversight',
          text: 'Begrenzte menschliche Kontrolle - nur bei Beschwerden',
          impactLevel: 'high',
          points: 2,
          explanation: 'Reaktive menschliche Intervention nur nach Problemen'
        },
        {
          id: 'fully_automated',
          text: 'Vollautomatisch - keine routinemäßige menschliche Kontrolle',
          impactLevel: 'critical',
          points: 3,
          explanation: 'Algorithmus entscheidet autonom ohne regelmäßige menschliche Aufsicht'
        }
      ]
    },
    {
      id: 'data_quality',
      category: 'Datenqualität & -repräsentativität',
      question: 'Wie bewerten Sie die Qualität und Repräsentativität Ihrer Trainingsdaten?',
      explanation: 'Datenqualität beeinflusst direkt die Fairness und Genauigkeit algorithmischer Entscheidungen',
      options: [
        {
          id: 'high_quality_representative',
          text: 'Hohe Qualität - repräsentativ für alle Zielgruppen',
          impactLevel: 'low',
          points: 0,
          explanation: 'Umfassende, ausgewogene Datenbasis ohne erkennbare Lücken'
        },
        {
          id: 'good_quality_minor_gaps',
          text: 'Gute Qualität - kleinere Repräsentationslücken',
          impactLevel: 'medium',
          points: 1,
          explanation: 'Solide Datenbasis mit identifizierten und adressierten Schwachstellen'
        },
        {
          id: 'moderate_quality_gaps',
          text: 'Moderate Qualität - signifikante Datenlücken vorhanden',
          impactLevel: 'high',
          points: 2,
          explanation: 'Relevante Unterrepräsentation bestimmter Gruppen oder Szenarien'
        },
        {
          id: 'poor_quality_biased',
          text: 'Niedrige Qualität - stark verzerrte oder unvollständige Daten',
          impactLevel: 'critical',
          points: 3,
          explanation: 'Systematische Datenprobleme mit hohem Bias-Potenzial'
        }
      ]
    }
  ];

  const calculateResult = (): AssessmentResult => {
    const categoryScores: Record<string, { score: number; maxScore: number; impactLevel: string }> = {};
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
            categoryScores[category] = { score: 0, maxScore: 0, impactLevel: 'low' };
          }
          categoryScores[category].score += selectedOption.points;
          categoryScores[category].maxScore += Math.max(...question.options.map(opt => opt.points));
          totalScore += selectedOption.points;
        }
      }
      maxTotalScore += Math.max(...question.options.map(opt => opt.points));
    });

    // Determine overall impact level
    const impactPercentage = (totalScore / maxTotalScore) * 100;
    let overallImpact: 'low' | 'medium' | 'high' | 'critical';
    let complianceStatus: 'compliant' | 'action_needed' | 'critical';

    if (impactPercentage <= 25) {
      overallImpact = 'low';
      complianceStatus = 'compliant';
    } else if (impactPercentage <= 50) {
      overallImpact = 'medium';
      complianceStatus = 'action_needed';
    } else if (impactPercentage <= 75) {
      overallImpact = 'high';
      complianceStatus = 'action_needed';
    } else {
      overallImpact = 'critical';
      complianceStatus = 'critical';
    }

    // Generate recommendations based on answers
    const recommendations: string[] = [];
    const nextSteps: string[] = [];
    const mitigationStrategies: string[] = [];

    // Algorithm scope recommendations
    if (answers['algorithm_scope'] === 'public_services' || answers['algorithm_scope'] === 'justice_security') {
      recommendations.push('Implementierung verstärkter Governance-Mechanismen für den öffentlichen Sektor');
      nextSteps.push('Abstimmung mit relevanten Aufsichtsbehörden');
    }

    // Vulnerable groups recommendations
    if (answers['vulnerable_groups'] !== 'no_vulnerable') {
      recommendations.push('Entwicklung spezifischer Schutzmaßnahmen für vulnerable Gruppen');
      mitigationStrategies.push('Implementierung von Fairness-Constraints im Algorithmus');
    }

    // Bias and fairness recommendations
    if (answers['bias_fairness'] === 'high_bias_risk' || answers['bias_fairness'] === 'critical_bias_risk') {
      recommendations.push('Durchführung umfassender Bias-Audits und Implementierung von Debiasing-Techniken');
      mitigationStrategies.push('Einführung kontinuierlicher Fairness-Monitoring-Systeme');
    }

    // Transparency recommendations
    if (answers['transparency_explainability'] === 'limited_transparency' || answers['transparency_explainability'] === 'black_box') {
      recommendations.push('Entwicklung von Explainable AI-Komponenten für bessere Nachvollziehbarkeit');
      nextSteps.push('Implementation von automatisierten Erklärungssystemen');
    }

    // Human oversight recommendations
    if (answers['human_oversight'] === 'fully_automated' || answers['human_oversight'] === 'limited_oversight') {
      recommendations.push('Einführung menschlicher Aufsichtsmechanismen und Interventionsmöglichkeiten');
      mitigationStrategies.push('Implementierung von Human-in-the-Loop-Verfahren bei kritischen Entscheidungen');
    }

    // Data quality recommendations
    if (answers['data_quality'] === 'moderate_quality_gaps' || answers['data_quality'] === 'poor_quality_biased') {
      recommendations.push('Verbesserung der Datenqualität und -repräsentativität durch gezieltes Datensammlung');
      nextSteps.push('Durchführung einer umfassenden Datenaudit');
    }

    // General recommendations based on overall impact
    if (overallImpact === 'high' || overallImpact === 'critical') {
      recommendations.push('Entwicklung eines umfassenden Algorithmic Impact Management Plans');
      nextSteps.push('Einrichtung eines interdisziplinären Ethics Board');
      mitigationStrategies.push('Regelmäßige Stakeholder-Konsultationen und Impact-Reviews');
    }

    return {
      overallImpact,
      score: totalScore,
      maxScore: maxTotalScore,
      categoryScores,
      recommendations,
      nextSteps,
      mitigationStrategies,
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
      }, 2000);
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

  const getImpactColor = (level: string) => {
    switch (level) {
      case 'low': return 'text-green-600 bg-green-100 border-green-200';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'high': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'critical': return 'text-red-600 bg-red-100 border-red-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getImpactIcon = (level: string) => {
    switch (level) {
      case 'low': return CheckCircle;
      case 'medium': return Info;
      case 'high': return AlertTriangle;
      case 'critical': return AlertOctagon;
      default: return Info;
    }
  };

  if (isCalculating) {
    return (
      <>
        <SEOHead
          title="Algorithmic Impact Assessment – Folgenabschätzung"
          description="Algorithmic Impact Assessment: Bewerten Sie gesellschaftliche Auswirkungen algorithmischer Systeme. ✓ Bias-Prüfung ✓ Fairness ✓ Transparenz. Jetzt testen!"
          canonical="/assessment-center/algorithmic-impact-assessment"
          keywords="Algorithmic Impact Assessment, AIA, Algorithmen Folgenabschätzung, KI Fairness, Bias Detection"
          structuredData={structuredData}
        />
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
                Algorithmic Impact Assessment wird berechnet...
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Wir analysieren die gesellschaftlichen Auswirkungen Ihres Algorithmus und erstellen 
                einen detaillierten Impact-Report mit Handlungsempfehlungen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Activity className="h-4 w-4 animate-pulse" />
                  <span>Gesellschaftliche Auswirkungen bewerten...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Users className="h-4 w-4 animate-pulse" />
                  <span>Vulnerable Gruppen analysieren...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Scale className="h-4 w-4 animate-pulse" />
                  <span>Fairness-Risiken identifizieren...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Eye className="h-4 w-4 animate-pulse" />
                  <span>Transparenz-Level prüfen...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }

  if (showResults && result) {
    const ImpactIcon = getImpactIcon(result.overallImpact);
    const impactLabels = {
      low: 'Geringer Impact',
      medium: 'Moderater Impact', 
      high: 'Hoher Impact',
      critical: 'Kritischer Impact'
    };

    return (
      <>
        <SEOHead
          title="Algorithmic Impact Assessment – Folgenabschätzung"
          description="Algorithmic Impact Assessment: Bewerten Sie gesellschaftliche Auswirkungen algorithmischer Systeme. ✓ Bias-Prüfung ✓ Fairness ✓ Transparenz. Jetzt testen!"
          canonical="/assessment-center/algorithmic-impact-assessment"
          keywords="Algorithmic Impact Assessment, AIA, Algorithmen Folgenabschätzung, KI Fairness, Bias Detection"
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
                  getImpactColor(result.overallImpact)
                )}>
                  <ImpactIcon className="h-6 w-6" />
                  <span className="font-semibold">
                    {impactLabels[result.overallImpact]}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Algorithmic Impact Assessment
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Detaillierte Analyse der gesellschaftlichen Auswirkungen Ihres Algorithmus
                </p>
              </motion.div>

              {/* Score Overview */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {result.score}/{result.maxScore}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Impact Score</div>
                    <Progress 
                      value={(result.score / result.maxScore) * 100} 
                      className="mt-3"
                    />
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className={cn(
                      "text-3xl font-bold mb-2",
                      result.overallImpact === 'low' ? 'text-green-600' :
                      result.overallImpact === 'medium' ? 'text-yellow-600' :
                      result.overallImpact === 'high' ? 'text-orange-600' : 'text-red-600'
                    )}>
                      {impactLabels[result.overallImpact]}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Gesamtbewertung</div>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className={cn(
                      "text-3xl font-bold mb-2",
                      result.complianceStatus === 'compliant' ? 'text-green-600' :
                      result.complianceStatus === 'action_needed' ? 'text-yellow-600' : 'text-red-600'
                    )}>
                      {result.complianceStatus === 'compliant' ? 'Konform' :
                       result.complianceStatus === 'action_needed' ? 'Handlung nötig' : 'Kritisch'}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Compliance Status</div>
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
                  Bewertung nach Kategorien
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(result.categoryScores).map(([category, data], index) => {
                    const percentage = (data.score / data.maxScore) * 100;
                    const level = percentage <= 25 ? 'low' : percentage <= 50 ? 'medium' : percentage <= 75 ? 'high' : 'critical';
                    
                    return (
                      <Card key={category}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {category}
                            </h3>
                            <Badge className={getImpactColor(level)}>
                              {data.score}/{data.maxScore}
                            </Badge>
                          </div>
                          <Progress value={percentage} className="mb-2" />
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {Math.round(percentage)}% Impact Level
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>

              {/* Recommendations */}
              <motion.div
                className="grid md:grid-cols-3 gap-6 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
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
                      {result.recommendations.slice(0, 4).map((rec, index) => (
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
                      {result.nextSteps.slice(0, 4).map((step, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Mitigation Strategies */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-500" />
                      Mitigationsstrategien
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {result.mitigationStrategies.slice(0, 4).map((strategy, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Shield className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{strategy}</span>
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
                transition={{ delay: 0.5 }}
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
                  Impact Report downloaden
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  Mitigation Plan erstellen
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
        title="Algorithmic Impact Assessment – Folgenabschätzung"
        description="Algorithmic Impact Assessment: Bewerten Sie gesellschaftliche Auswirkungen algorithmischer Systeme. ✓ Bias-Prüfung ✓ Fairness ✓ Transparenz. Jetzt testen!"
        canonical="/assessment-center/algorithmic-impact-assessment"
        keywords="Algorithmic Impact Assessment, AIA, Algorithmen Folgenabschätzung, KI Fairness, Bias Detection"
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
                <BarChart3 className="h-4 w-4" />
                <span className="text-sm font-medium">Algorithmic Impact Assessment</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Gesellschaftliche Auswirkungen bewerten
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Analysieren Sie die gesellschaftlichen Auswirkungen Ihres Algorithmus systematisch 
                und entwickeln Sie Strategien zur Risikominimierung.
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
                      const ImpactIcon = getImpactIcon(option.impactLevel);
                      
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
                                <ImpactIcon className={cn(
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
                                      getImpactColor(option.impactLevel)
                                    )}
                                  >
                                    {option.impactLevel === 'low' ? 'Niedrig' :
                                     option.impactLevel === 'medium' ? 'Mittel' :
                                     option.impactLevel === 'high' ? 'Hoch' : 'Kritisch'}
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

export default AlgorithmicImpactAssessment;