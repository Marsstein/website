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
  TrendingUp
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
    riskLevel: 'minimal' | 'limited' | 'high' | 'unacceptable';
    points: number;
    explanation: string;
  }[];
  helpText?: string;
}

interface AssessmentResult {
  overallRisk: 'minimal' | 'limited' | 'high' | 'unacceptable';
  score: number;
  maxScore: number;
  categoryScores: Record<string, { score: number; maxScore: number; riskLevel: string }>;
  recommendations: string[];
  nextSteps: string[];
  complianceStatus: 'compliant' | 'action_needed' | 'critical';
}

const AIRiskAssessment: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Assessment",
    "name": "EU AI Act Risk Assessment",
    "description": "Bewerten Sie das Risiko Ihres KI-Systems nach EU AI Act Kriterien und erhalten Sie Handlungsempfehlungen",
    "educationalLevel": "Professional",
    "url": "https://marsstein.ai/assessment-center/ai-risk-assessment"
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // EU AI Act Risk Assessment Questions
  const questions: Question[] = [
    {
      id: 'ai_purpose',
      category: 'Grundlagen',
      question: 'Wofür setzen Sie Ihr KI-System primär ein?',
      explanation: 'Der Anwendungsbereich ist entscheidend für die Risikoeinstufung nach EU AI Act',
      options: [
        {
          id: 'general_purpose',
          text: 'Allgemeine Anwendungen (z.B. Chatbots, Content-Erstellung)',
          riskLevel: 'minimal',
          points: 1,
          explanation: 'Geringe regulatorische Anforderungen, hauptsächlich Transparenzpflichten'
        },
        {
          id: 'business_optimization',
          text: 'Geschäftsoptimierung (z.B. Empfehlungen, Prozessautomatisierung)',
          riskLevel: 'limited',
          points: 2,
          explanation: 'Mittlere Anforderungen mit Fokus auf Transparenz und Fairness'
        },
        {
          id: 'critical_infrastructure',
          text: 'Kritische Infrastruktur (z.B. Energieversorgung, Verkehr)',
          riskLevel: 'high',
          points: 4,
          explanation: 'Hohe Risikokategorie - umfassende Compliance-Anforderungen erforderlich'
        },
        {
          id: 'prohibited_use',
          text: 'Social Scoring, Massenüberwachung oder Manipulation',
          riskLevel: 'unacceptable',
          points: 5,
          explanation: 'VERBOTEN - Diese Anwendungen sind in der EU nicht erlaubt'
        }
      ],
      helpText: 'Der EU AI Act klassifiziert KI-Systeme nach ihrem Risikopotential. Je höher das Risiko, desto strenger die Auflagen.'
    },
    {
      id: 'data_sensitivity',
      category: 'Daten & Privacy',
      question: 'Welche Art von Daten verarbeitet Ihr KI-System?',
      explanation: 'Sensible Daten erhöhen das Risiko und die Compliance-Anforderungen erheblich',
      options: [
        {
          id: 'anonymous_data',
          text: 'Anonyme/aggregierte Daten ohne Personenbezug',
          riskLevel: 'minimal',
          points: 1,
          explanation: 'Niedrigste Risikostufe - minimale Datenschutzrisiken'
        },
        {
          id: 'personal_data',
          text: 'Personenbezogene Daten (Namen, E-Mails, etc.)',
          riskLevel: 'limited',
          points: 2,
          explanation: 'DSGVO-Compliance erforderlich - mittleres Risiko'
        },
        {
          id: 'sensitive_data',
          text: 'Besondere Kategorien (Gesundheit, Ethnie, Religion)',
          riskLevel: 'high',
          points: 4,
          explanation: 'Höchste Datenschutzanforderungen - strenge Auflagen'
        },
        {
          id: 'biometric_data',
          text: 'Biometrische Daten zur Identifikation',
          riskLevel: 'unacceptable',
          points: 5,
          explanation: 'Potentiell verboten - nur in sehr spezifischen Ausnahmefällen erlaubt'
        }
      ],
      helpText: 'Biometrische Systeme und sensible Daten unterliegen besonderen Beschränkungen im EU AI Act.'
    },
    {
      id: 'decision_impact',
      category: 'Auswirkungen',
      question: 'Welche Auswirkungen haben die KI-Entscheidungen auf Menschen?',
      explanation: 'Je größer der Einfluss auf Menschenleben, desto höher die Regulierung',
      options: [
        {
          id: 'informational',
          text: 'Nur Informationen/Empfehlungen - Menschen entscheiden final',
          riskLevel: 'minimal',
          points: 1,
          explanation: 'Geringes Risiko da menschliche Kontrolle erhalten bleibt'
        },
        {
          id: 'business_decisions',
          text: 'Geschäftsentscheidungen (Preise, Angebote, Marketing)',
          riskLevel: 'limited',
          points: 2,
          explanation: 'Mittleres Risiko - Transparenz und Fairness wichtig'
        },
        {
          id: 'life_affecting',
          text: 'Lebenswichtige Entscheidungen (Jobs, Kredite, Gesundheit)',
          riskLevel: 'high',
          points: 4,
          explanation: 'Hohes Risiko - strikte Governance und Überwachung erforderlich'
        },
        {
          id: 'safety_critical',
          text: 'Sicherheitskritische Entscheidungen (Leben und Tod)',
          riskLevel: 'high',
          points: 5,
          explanation: 'Höchstes Risiko - umfassende Sicherheitsmaßnahmen obligatorisch'
        }
      ],
      helpText: 'Systeme die wichtige Lebensentscheidungen beeinflussen werden als Hochrisiko-KI eingestuft.'
    },
    {
      id: 'human_oversight',
      category: 'Kontrolle & Governance',
      question: 'Wie ist die menschliche Aufsicht über Ihr KI-System organisiert?',
      explanation: 'Menschliche Kontrolle ist ein Kernprinzip des EU AI Act',
      options: [
        {
          id: 'full_human_control',
          text: 'Vollständige menschliche Kontrolle - KI nur als Hilfsmittel',
          riskLevel: 'minimal',
          points: 1,
          explanation: 'Optimal - Menschen behalten volle Entscheidungsgewalt'
        },
        {
          id: 'human_in_loop',
          text: 'Human-in-the-loop - Menschen prüfen wichtige Entscheidungen',
          riskLevel: 'limited',
          points: 2,
          explanation: 'Gute Balance zwischen Automatisierung und Kontrolle'
        },
        {
          id: 'human_on_loop',
          text: 'Human-on-the-loop - Menschen überwachen das System',
          riskLevel: 'high',
          points: 3,
          explanation: 'Erhöhtes Risiko - menschliche Eingriffsmöglichkeiten müssen gewährleistet sein'
        },
        {
          id: 'fully_automated',
          text: 'Vollautomatisch ohne direkte menschliche Überwachung',
          riskLevel: 'high',
          points: 4,
          explanation: 'Hohes Risiko - nur bei unkritischen Anwendungen zulässig'
        }
      ],
      helpText: 'Der EU AI Act verlangt angemessene menschliche Aufsicht je nach Risikoklasse.'
    },
    {
      id: 'transparency',
      category: 'Transparenz',
      question: 'Wie transparent ist Ihr KI-System für Nutzer?',
      explanation: 'Transparenz ist entscheidend für Vertrauen und Compliance',
      options: [
        {
          id: 'full_transparency',
          text: 'Vollständig transparent - Nutzer wissen immer, dass sie mit KI interagieren',
          riskLevel: 'minimal',
          points: 1,
          explanation: 'Beste Praxis - erfüllt alle Transparenzanforderungen'
        },
        {
          id: 'clear_disclosure',
          text: 'Klare Kennzeichnung als KI-System mit Erklärungen',
          riskLevel: 'limited',
          points: 2,
          explanation: 'Gute Compliance - ausreichend für die meisten Anwendungen'
        },
        {
          id: 'limited_disclosure',
          text: 'Begrenzte Information über KI-Nutzung',
          riskLevel: 'high',
          points: 3,
          explanation: 'Compliance-Risiko - Transparenz muss verbessert werden'
        },
        {
          id: 'no_disclosure',
          text: 'Keine Information über KI-Einsatz für Nutzer',
          riskLevel: 'unacceptable',
          points: 4,
          explanation: 'Nicht compliant - Transparenzpflicht wird verletzt'
        }
      ],
      helpText: 'Nutzer müssen über KI-Einsatz informiert werden - das ist eine Grundanforderung.'
    },
    {
      id: 'bias_fairness',
      category: 'Fairness & Bias',
      question: 'Wie gehen Sie mit Bias und Fairness in Ihrem KI-System um?',
      explanation: 'Diskriminierung durch KI ist ein zentrales Risiko im EU AI Act',
      options: [
        {
          id: 'comprehensive_testing',
          text: 'Umfassende Bias-Tests und Fairness-Metriken implementiert',
          riskLevel: 'minimal',
          points: 1,
          explanation: 'Excellente Praxis - proaktive Diskriminierungsprävention'
        },
        {
          id: 'basic_testing',
          text: 'Grundlegende Tests auf offensichtliche Diskriminierung',
          riskLevel: 'limited',
          points: 2,
          explanation: 'Ausreichend für viele Anwendungen - sollte ausgebaut werden'
        },
        {
          id: 'awareness_no_testing',
          text: 'Bewusstsein für Bias vorhanden, aber keine systematischen Tests',
          riskLevel: 'high',
          points: 3,
          explanation: 'Risiko - Tests müssen implementiert werden'
        },
        {
          id: 'no_consideration',
          text: 'Bias und Fairness wurden noch nicht berücksichtigt',
          riskLevel: 'high',
          points: 4,
          explanation: 'Hohes Compliance-Risiko - sofortige Maßnahmen erforderlich'
        }
      ],
      helpText: 'Bias-Testing ist besonders wichtig bei Systemen die Menschen kategorisieren oder bewerten.'
    }
  ];

  const calculateResult = (): AssessmentResult => {
    const totalScore = Object.values(answers).reduce((sum, answerId) => {
      const question = questions.find(q => answers[q.id] === answerId);
      const option = question?.options.find(opt => opt.id === answerId);
      return sum + (option?.points || 0);
    }, 0);

    const maxScore = questions.length * 5;

    // Calculate category scores
    const categories = ['Grundlagen', 'Daten & Privacy', 'Auswirkungen', 'Kontrolle & Governance', 'Transparenz', 'Fairness & Bias'];
    const categoryScores: Record<string, { score: number; maxScore: number; riskLevel: string }> = {};
    
    categories.forEach(category => {
      const categoryQuestions = questions.filter(q => q.category === category);
      const categoryScore = categoryQuestions.reduce((sum, question) => {
        const answerId = answers[question.id];
        const option = question.options.find(opt => opt.id === answerId);
        return sum + (option?.points || 0);
      }, 0);
      
      const categoryMaxScore = categoryQuestions.length * 5;
      const riskPercentage = (categoryScore / categoryMaxScore) * 100;
      
      let riskLevel = 'minimal';
      if (riskPercentage > 80) riskLevel = 'unacceptable';
      else if (riskPercentage > 60) riskLevel = 'high';
      else if (riskPercentage > 30) riskLevel = 'limited';
      
      categoryScores[category] = {
        score: categoryScore,
        maxScore: categoryMaxScore,
        riskLevel
      };
    });

    // Determine overall risk level
    const riskPercentage = (totalScore / maxScore) * 100;
    let overallRisk: 'minimal' | 'limited' | 'high' | 'unacceptable' = 'minimal';
    let complianceStatus: 'compliant' | 'action_needed' | 'critical' = 'compliant';

    if (riskPercentage > 80) {
      overallRisk = 'unacceptable';
      complianceStatus = 'critical';
    } else if (riskPercentage > 60) {
      overallRisk = 'high';
      complianceStatus = 'action_needed';
    } else if (riskPercentage > 30) {
      overallRisk = 'limited';
      complianceStatus = 'action_needed';
    } else {
      complianceStatus = 'compliant';
    }

    // Generate recommendations
    const recommendations: string[] = [];
    const nextSteps: string[] = [];

    if (overallRisk === 'unacceptable') {
      recommendations.push('🚨 Kritisch: Ihr KI-System fällt möglicherweise unter verbotene Praktiken');
      recommendations.push('Sofortiger Stopp der Entwicklung/des Einsatzes empfohlen');
      recommendations.push('Rechtliche Beratung dringend erforderlich');
      nextSteps.push('System-Architekt sofort kontaktieren');
      nextSteps.push('Compliance-Anwalt beauftragen');
      nextSteps.push('Alternative Lösungsansätze entwickeln');
    } else if (overallRisk === 'high') {
      recommendations.push('⚠️ Hoch-Risiko System: Umfassende Compliance-Maßnahmen erforderlich');
      recommendations.push('CE-Kennzeichnung und Konformitätsbewertung notwendig');
      recommendations.push('Risikomanagementsystem implementieren');
      recommendations.push('Menschliche Aufsicht verstärken');
      nextSteps.push('Compliance-Team aufbauen');
      nextSteps.push('Risikomanagementsystem designen');
      nextSteps.push('Dokumentation vervollständigen');
      nextSteps.push('Testing und Validierung ausbauen');
    } else if (overallRisk === 'limited') {
      recommendations.push('📋 Begrenzte Risiken: Transparenz- und Fairness-Maßnahmen nötig');
      recommendations.push('Nutzerinformation über KI-Einsatz sicherstellen');
      recommendations.push('Bias-Testing implementieren');
      nextSteps.push('Transparenz-Guidelines entwickeln');
      nextSteps.push('Fairness-Metriken einführen');
      nextSteps.push('Nutzer-Interface überarbeiten');
    } else {
      recommendations.push('✅ Minimales Risiko: Grundlegende Transparenz ausreichend');
      recommendations.push('Weiterhin bewährte Praktiken befolgen');
      recommendations.push('Monitoring der Regulierungsentwicklung');
      nextSteps.push('Dokumentation aktuell halten');
      nextSteps.push('Periodische Überprüfung planen');
    }

    return {
      overallRisk,
      score: totalScore,
      maxScore,
      categoryScores,
      recommendations,
      nextSteps,
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
        const calculatedResult = calculateResult();
        setResult(calculatedResult);
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

  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setResult(null);
    setIsCalculating(false);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'minimal': return 'text-green-600 bg-green-100';
      case 'limited': return 'text-yellow-600 bg-yellow-100';  
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'unacceptable': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'minimal': return CheckCircle;
      case 'limited': return Info;
      case 'high': return AlertTriangle;
      case 'unacceptable': return XCircle;
      default: return Info;
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];
  const selectedAnswer = answers[currentQuestion?.id];

  if (isCalculating) {
    return (
      <>
        <SEOHead
          title="KI-Risiko Assessment – EU AI Act Bewertung"
          description="EU AI Act Risk Assessment: Bewerten Sie das Risiko Ihres KI-Systems nach EU AI Act. ✓ Risikoeinstufung ✓ Compliance-Check ✓ Handlungsempfehlungen. Jetzt testen!"
          canonical="/assessment-center/ai-risk-assessment"
          keywords="EU AI Act Assessment, KI-Risiko Bewertung, AI Risk Assessment, KI Compliance, EU AI Act Risiko"
          structuredData={structuredData}
        />
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950 dark:via-gray-900 dark:to-pink-950">
          <Header />
        <div className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="text-center p-12">
              <CardContent>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="mx-auto mb-6"
                >
                  <Brain className="h-16 w-16 text-purple-600" />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Analysiere Ihr KI-System...
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Unsere AI-Experten bewerten Ihre Antworten nach EU AI Act Kriterien
                </p>
                <Progress value={75} className="w-full max-w-md mx-auto" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      </>
    );
  }

  if (showResults && result) {
    const RiskIcon = getRiskIcon(result.overallRisk);
    
    return (
      <>
        <SEOHead
          title="KI-Risiko Assessment – EU AI Act Bewertung"
          description="EU AI Act Risk Assessment: Bewerten Sie das Risiko Ihres KI-Systems nach EU AI Act. ✓ Risikoeinstufung ✓ Compliance-Check ✓ Handlungsempfehlungen. Jetzt testen!"
          canonical="/assessment-center/ai-risk-assessment"
          keywords="EU AI Act Assessment, KI-Risiko Bewertung, AI Risk Assessment, KI Compliance, EU AI Act Risiko"
          structuredData={structuredData}
        />
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950 dark:via-gray-900 dark:to-pink-950">
          <Header />
        <div className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Results Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <Badge className={cn("mb-4 px-4 py-2 text-lg", getRiskColor(result.overallRisk))}>
                <RiskIcon className="w-5 h-5 mr-2" />
                {result.overallRisk === 'minimal' && 'Minimales Risiko'}
                {result.overallRisk === 'limited' && 'Begrenztes Risiko'}
                {result.overallRisk === 'high' && 'Hohes Risiko'}
                {result.overallRisk === 'unacceptable' && 'Inakzeptables Risiko'}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Ihr AI Risk Assessment
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Basierend auf Ihren Antworten haben wir Ihr KI-System nach EU AI Act Kriterien bewertet
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Main Results */}
              <div className="lg:col-span-2 space-y-6">
                {/* Overall Score */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-purple-600" />
                      Gesamtbewertung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {result.score} / {result.maxScore} Punkte
                      </span>
                      <Badge className={cn("px-3 py-1", getRiskColor(result.overallRisk))}>
                        {Math.round((result.score / result.maxScore) * 100)}% Risiko
                      </Badge>
                    </div>
                    <Progress 
                      value={(result.score / result.maxScore) * 100} 
                      className="mb-4"
                    />
                    <p className="text-gray-600 dark:text-gray-400">
                      {result.complianceStatus === 'compliant' && 'Ihr System entspricht den grundlegenden EU AI Act Anforderungen.'}
                      {result.complianceStatus === 'action_needed' && 'Handlungsbedarf: Einige Bereiche benötigen Verbesserungen für vollständige Compliance.'}
                      {result.complianceStatus === 'critical' && 'Kritisch: Sofortige Maßnahmen erforderlich um EU AI Act Compliance zu erreichen.'}
                    </p>
                  </CardContent>
                </Card>

                {/* Category Breakdown */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-purple-600" />
                      Bewertung nach Kategorien
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(result.categoryScores).map(([category, score]) => {
                        const percentage = (score.score / score.maxScore) * 100;
                        const CategoryIcon = getRiskIcon(score.riskLevel);
                        
                        return (
                          <div key={category} className="flex items-center gap-3">
                            <CategoryIcon className={cn("h-5 w-5", 
                              score.riskLevel === 'minimal' ? 'text-green-600' :
                              score.riskLevel === 'limited' ? 'text-yellow-600' :
                              score.riskLevel === 'high' ? 'text-orange-600' : 'text-red-600'
                            )} />
                            <div className="flex-1">
                              <div className="flex justify-between items-center mb-1">
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {category}
                                </span>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {score.score}/{score.maxScore}
                                </span>
                              </div>
                              <Progress value={percentage} className="h-2" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                {/* Recommendations */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-purple-600" />
                      Empfehlungen
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {result.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 dark:text-gray-300">{rec}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Next Steps */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-purple-600" />
                      Nächste Schritte
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {result.nextSteps.map((step, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <span className="flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full flex items-center justify-center text-sm font-medium">
                            {index + 1}
                          </span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Download className="h-5 w-5 text-purple-600" />
                      Report & Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      <FileText className="mr-2 h-4 w-4" />
                      Detailreport herunterladen
                    </Button>
                    <Button variant="outline" className="w-full" onClick={resetAssessment}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Neues Assessment
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Users className="mr-2 h-4 w-4" />
                      Experten-Beratung buchen
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center space-y-2">
                      <div className="text-2xl font-bold text-purple-600">
                        {Math.round(((result.maxScore - result.score) / result.maxScore) * 100)}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Compliance-Potenzial
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
        title="KI-Risiko Assessment – EU AI Act Bewertung"
        description="EU AI Act Risk Assessment: Bewerten Sie das Risiko Ihres KI-Systems nach EU AI Act. ✓ Risikoeinstufung ✓ Compliance-Check ✓ Handlungsempfehlungen. Jetzt testen!"
        canonical="/assessment-center/ai-risk-assessment"
        keywords="EU AI Act Assessment, KI-Risiko Bewertung, AI Risk Assessment, KI Compliance, EU AI Act Risiko"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950 dark:via-gray-900 dark:to-pink-950">
        <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Badge className="mb-4 bg-purple-100 text-purple-700 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              EU AI Act Risk Assessment
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ist Ihr KI-System EU AI Act konform?
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              Finden Sie in 5 Minuten heraus, welche Compliance-Anforderungen für Ihr KI-System gelten. 
              Kostenlos und ohne Verpflichtung.
            </p>
          </motion.div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Frage {currentStep + 1} von {questions.length}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {Math.round(progress)}% abgeschlossen
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <Badge variant="outline" className="mb-4 w-fit mx-auto">
                    {currentQuestion.category}
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {currentQuestion.question}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    {currentQuestion.explanation}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {currentQuestion.options.map((option) => {
                    const isSelected = selectedAnswer === option.id;
                    const RiskIcon = getRiskIcon(option.riskLevel);
                    
                    return (
                      <motion.div
                        key={option.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={cn(
                          "p-6 rounded-xl border-2 cursor-pointer transition-all duration-200",
                          isSelected 
                            ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20" 
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                        )}
                        onClick={() => handleAnswer(currentQuestion.id, option.id)}
                      >
                        <div className="flex items-start gap-4">
                          <div className={cn(
                            "p-2 rounded-lg",
                            isSelected ? "bg-purple-100 dark:bg-purple-800" : "bg-gray-100 dark:bg-gray-800"
                          )}>
                            <RiskIcon className={cn(
                              "h-5 w-5",
                              isSelected ? "text-purple-600 dark:text-purple-400" : 
                              option.riskLevel === 'minimal' ? 'text-green-600' :
                              option.riskLevel === 'limited' ? 'text-yellow-600' :
                              option.riskLevel === 'high' ? 'text-orange-600' : 'text-red-600'
                            )} />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold text-gray-900 dark:text-white">
                                {option.text}
                              </h3>
                              <Badge className={cn("text-xs", getRiskColor(option.riskLevel))}>
                                {option.riskLevel === 'minimal' && 'Minimal'}
                                {option.riskLevel === 'limited' && 'Begrenzt'}
                                {option.riskLevel === 'high' && 'Hoch'}
                                {option.riskLevel === 'unacceptable' && 'Kritisch'}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {option.explanation}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                  
                  {currentQuestion.helpText && (
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-start gap-2">
                        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-blue-700 dark:text-blue-300">
                          <strong>Hinweis:</strong> {currentQuestion.helpText}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
                
                <div className="p-6 pt-0">
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentStep === 0}
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Zurück
                    </Button>
                    
                    <Button
                      onClick={handleNext}
                      disabled={!selectedAnswer}
                      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      {currentStep === questions.length - 1 ? 'Ergebnis anzeigen' : 'Weiter'}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      <Footer />
    </div>
    </>
  );
};

export default AIRiskAssessment;