import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  BarChart3, 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft,
  Star,
  Calendar,
  Users,
  Shield,
  FileText,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Download,
  Mail,
  Target,
  Clock,
  Award,
  Zap,
  Info,
  Lightbulb,
  HelpCircle,
  RefreshCw,
  Eye,
  Gauge,
  Timer,
  BookOpen,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';

export const DataPrivacyReadinessAssessment: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showQuestionInfo, setShowQuestionInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime] = useState(Date.now());

  const assessmentCategories = [
    {
      id: 'governance',
      title: 'Datenschutz-Governance',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      questions: [
        {
          id: 'dsb_appointed',
          question: 'Haben Sie einen Datenschutzbeauftragten benannt?',
          context: 'Ab 20 Mitarbeitern oder bei Hochrisiko-Verarbeitungen ist ein DSB nach Art. 37 DSGVO verpflichtend.',
          tip: 'Ein qualifizierter DSB ist essentiell für die DSGVO-Compliance und reduziert rechtliche Risiken erheblich.',
          options: [
            { value: '3', label: 'Ja, intern bestellt und qualifiziert', points: 3 },
            { value: '2', label: 'Ja, extern beauftragt', points: 2 },
            { value: '1', label: 'Noch in Planung', points: 1 },
            { value: '0', label: 'Nein, nicht erforderlich/vorhanden', points: 0 }
          ]
        },
        {
          id: 'policies',
          question: 'Sind umfassende Datenschutzrichtlinien vorhanden?',
          context: 'Interne Richtlinien bilden das Fundament für DSGVO-konforme Datenverarbeitung in Ihrem Unternehmen.',
          tip: 'Dokumentierte Prozesse helfen bei Audits und schaffen Klarheit für alle Mitarbeiter.',
          options: [
            { value: '3', label: 'Ja, vollständig und aktuell', points: 3 },
            { value: '2', label: 'Teilweise vorhanden', points: 2 },
            { value: '1', label: 'In Erstellung', points: 1 },
            { value: '0', label: 'Nicht vorhanden', points: 0 }
          ]
        },
        {
          id: 'training',
          question: 'Werden regelmäßige Datenschutzschulungen durchgeführt?',
          options: [
            { value: '3', label: 'Ja, jährlich für alle Mitarbeiter', points: 3 },
            { value: '2', label: 'Gelegentlich', points: 2 },
            { value: '1', label: 'Nur bei Einstellung', points: 1 },
            { value: '0', label: 'Keine Schulungen', points: 0 }
          ]
        }
      ]
    },
    {
      id: 'documentation',
      title: 'Dokumentation & Transparenz',
      icon: FileText,
      color: 'from-green-500 to-teal-500',
      questions: [
        {
          id: 'processing_records',
          question: 'Führen Sie ein Verzeichnis der Verarbeitungstätigkeiten?',
          options: [
            { value: '3', label: 'Ja, vollständig und aktuell', points: 3 },
            { value: '2', label: 'Teilweise dokumentiert', points: 2 },
            { value: '1', label: 'In Erstellung', points: 1 },
            { value: '0', label: 'Nicht vorhanden', points: 0 }
          ]
        },
        {
          id: 'privacy_notice',
          question: 'Ist Ihre Datenschutzerklärung DSGVO-konform?',
          options: [
            { value: '3', label: 'Ja, vollständig und regelmäßig überprüft', points: 3 },
            { value: '2', label: 'Größtenteils konform', points: 2 },
            { value: '1', label: 'Überarbeitung erforderlich', points: 1 },
            { value: '0', label: 'Nicht DSGVO-konform', points: 0 }
          ]
        },
        {
          id: 'legal_basis',
          question: 'Sind Rechtsgrundlagen für alle Verarbeitungen definiert?',
          options: [
            { value: '3', label: 'Ja, für alle Verarbeitungen dokumentiert', points: 3 },
            { value: '2', label: 'Für die meisten Verarbeitungen', points: 2 },
            { value: '1', label: 'Teilweise definiert', points: 1 },
            { value: '0', label: 'Nicht definiert', points: 0 }
          ]
        }
      ]
    },
    {
      id: 'rights',
      title: 'Betroffenenrechte',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      questions: [
        {
          id: 'data_subject_requests',
          question: 'Haben Sie Prozesse für Betroffenenanfragen etabliert?',
          options: [
            { value: '3', label: 'Ja, vollständig automatisiert', points: 3 },
            { value: '2', label: 'Ja, manuelle Bearbeitung', points: 2 },
            { value: '1', label: 'Grundlegende Prozesse vorhanden', points: 1 },
            { value: '0', label: 'Keine Prozesse', points: 0 }
          ]
        },
        {
          id: 'deletion_concept',
          question: 'Ist ein systematisches Löschkonzept implementiert?',
          options: [
            { value: '3', label: 'Ja, automatisierte Löschung', points: 3 },
            { value: '2', label: 'Manuelle Löschprozesse', points: 2 },
            { value: '1', label: 'Löschkonzept vorhanden, nicht umgesetzt', points: 1 },
            { value: '0', label: 'Kein Löschkonzept', points: 0 }
          ]
        },
        {
          id: 'data_portability',
          question: 'Können Sie Daten in strukturiertem Format exportieren?',
          options: [
            { value: '3', label: 'Ja, vollständig automatisiert', points: 3 },
            { value: '2', label: 'Ja, manuell möglich', points: 2 },
            { value: '1', label: 'Teilweise möglich', points: 1 },
            { value: '0', label: 'Nicht möglich', points: 0 }
          ]
        }
      ]
    },
    {
      id: 'security',
      title: 'Technische Sicherheit',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      questions: [
        {
          id: 'encryption',
          question: 'Werden personenbezogene Daten verschlüsselt?',
          options: [
            { value: '3', label: 'Ja, bei Übertragung und Speicherung', points: 3 },
            { value: '2', label: 'Nur bei Übertragung', points: 2 },
            { value: '1', label: 'Teilweise verschlüsselt', points: 1 },
            { value: '0', label: 'Keine Verschlüsselung', points: 0 }
          ]
        },
        {
          id: 'access_control',
          question: 'Ist eine granulare Zugriffskontrolle implementiert?',
          options: [
            { value: '3', label: 'Ja, rollenbasiert mit regelmäßiger Überprüfung', points: 3 },
            { value: '2', label: 'Grundlegende Zugriffskontrollen', points: 2 },
            { value: '1', label: 'Einfache Benutzerkonten', points: 1 },
            { value: '0', label: 'Keine Zugriffskontrolle', points: 0 }
          ]
        },
        {
          id: 'backup_recovery',
          question: 'Sind Backup- und Recovery-Verfahren etabliert?',
          options: [
            { value: '3', label: 'Ja, getestet und dokumentiert', points: 3 },
            { value: '2', label: 'Ja, regelmäßige Backups', points: 2 },
            { value: '1', label: 'Unregelmäßige Backups', points: 1 },
            { value: '0', label: 'Keine Backups', points: 0 }
          ]
        }
      ]
    }
  ];

  const allQuestions = assessmentCategories.flatMap(category => 
    category.questions.map(q => ({ ...q, categoryId: category.id, categoryTitle: category.title }))
  );

  const currentQuestion = allQuestions[currentStep];
  const totalQuestions = allQuestions.length;

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const nextQuestion = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsLoading(true);
      // Simulate processing time for better UX
      setTimeout(() => {
        setIsLoading(false);
        setShowResults(true);
        setTimeSpent(Math.round((Date.now() - startTime) / 1000));
      }, 1500);
    }
  };

  const prevQuestion = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const restartAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setShowEmailForm(false);
    setShowQuestionInfo(false);
    setIsLoading(false);
    setTimeSpent(0);
  };

  const calculateResults = () => {
    const categoryScores: Record<string, { current: number, max: number }> = {};
    
    assessmentCategories.forEach(category => {
      categoryScores[category.id] = { current: 0, max: 0 };
      
      category.questions.forEach(question => {
        const answer = answers[question.id];
        const selectedOption = question.options.find(opt => opt.value === answer);
        const maxPoints = Math.max(...question.options.map(opt => opt.points));
        
        categoryScores[category.id].current += selectedOption?.points || 0;
        categoryScores[category.id].max += maxPoints;
      });
    });

    const totalCurrent = Object.values(categoryScores).reduce((sum, score) => sum + score.current, 0);
    const totalMax = Object.values(categoryScores).reduce((sum, score) => sum + score.max, 0);
    const overallPercentage = (totalCurrent / totalMax) * 100;

    return { categoryScores, totalCurrent, totalMax, overallPercentage };
  };

  const getMaturityLevel = (percentage: number) => {
    if (percentage >= 90) return { 
      level: 'Optimiert', 
      color: 'text-green-600', 
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      icon: Award,
      description: 'Ihre Datenschutz-Compliance ist exzellent aufgestellt.'
    };
    if (percentage >= 70) return { 
      level: 'Erweitert', 
      color: 'text-blue-600', 
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      icon: TrendingUp,
      description: 'Solide Basis mit Verbesserungspotential in einzelnen Bereichen.'
    };
    if (percentage >= 50) return { 
      level: 'Entwickelt', 
      color: 'text-orange-500', 
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      icon: Target,
      description: 'Grundlagen vorhanden, wichtige Bereiche benötigen Aufmerksamkeit.'
    };
    if (percentage >= 30) return { 
      level: 'Beginnend', 
      color: 'text-yellow-600', 
      bgColor: 'bg-yellow-50 dark:bg-yellow-950/20',
      icon: Clock,
      description: 'Erste Schritte unternommen, systematischer Ausbau erforderlich.'
    };
    return { 
      level: 'Initial', 
      color: 'text-red-600', 
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      icon: AlertTriangle,
      description: 'Dringender Handlungsbedarf für DSGVO-Compliance.'
    };
  };

  const results = showResults ? calculateResults() : null;
  const maturityLevel = results ? getMaturityLevel(results.overallPercentage) : null;

  if (showResults && results && maturityLevel) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        {/* Results Hero */}
        <section className="pt-24 pb-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 border border-green-200">
                  <CheckCircle className="h-4 w-4" />
                  <span className="text-sm font-medium">Assessment abgeschlossen</span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm font-medium">{Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')} Min</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Ihr Datenschutz-Reifegrad
              </h1>
              
              <div className={cn("inline-flex items-center gap-3 px-6 py-3 rounded-2xl border-2 text-lg font-bold mb-8", maturityLevel.bgColor)}>
                <maturityLevel.icon className={cn("h-6 w-6", maturityLevel.color)} />
                <span className={maturityLevel.color}>{maturityLevel.level}</span>
                <span className={maturityLevel.color}>({Math.round(results.overallPercentage)}%)</span>
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {maturityLevel.description}
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Results */}
        <section className="pb-16">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto">
              {/* Overall Score */}
              <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <BarChart3 className="h-6 w-6 text-purple-600" />
                    Gesamtergebnis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        {results.totalCurrent}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Erreichte Punkte</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        {Math.round(results.overallPercentage)}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Compliance-Grad</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        {results.totalMax}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Maximale Punkte</div>
                    </div>
                  </div>
                  <Progress value={results.overallPercentage} className="h-4" />
                </CardContent>
              </Card>

              {/* Category Results */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {assessmentCategories.map(category => {
                  const categoryScore = results.categoryScores[category.id];
                  const categoryPercentage = (categoryScore.current / categoryScore.max) * 100;
                  
                  return (
                    <Card key={category.id} className="border-2 border-gray-200 dark:border-gray-700">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <div className={cn("p-2 rounded-lg bg-gradient-to-r", category.color)}>
                            <category.icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-lg">{category.title}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-bold text-gray-900 dark:text-white">
                            {Math.round(categoryPercentage)}%
                          </span>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {categoryScore.current}/{categoryScore.max} Punkte
                          </span>
                        </div>
                        <Progress value={categoryPercentage} className="h-3" />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Recommendations */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-brand-red" />
                    Personalisierte Empfehlungen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {assessmentCategories
                      .map(category => ({
                        ...category,
                        score: results.categoryScores[category.id],
                        percentage: (results.categoryScores[category.id].current / results.categoryScores[category.id].max) * 100
                      }))
                      .sort((a, b) => a.percentage - b.percentage)
                      .slice(0, 2)
                      .map(category => (
                        <div key={category.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-start gap-3">
                            <div className={cn("p-2 rounded-lg bg-gradient-to-r", category.color)}>
                              <category.icon className="h-5 w-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                                Priorität: {category.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Mit {Math.round(category.percentage)}% Compliance-Grad bietet dieser Bereich 
                                das größte Verbesserungspotential für Ihre DSGVO-Konformität.
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
                  <Button 
                    onClick={() => setShowEmailForm(true)}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Detaillierten Report als PDF herunterladen
                  </Button>
                  
                  <Link to="/contact?source=assessment">
                    <Button variant="outline" size="lg" className="border-2">
                      <Users className="mr-2 h-4 w-4" />
                      Kostenlose Compliance-Beratung buchen
                    </Button>
                  </Link>
                </div>
                
                <Button 
                  onClick={restartAssessment}
                  variant="ghost" 
                  size="sm"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Assessment wiederholen
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Email Form Modal */}
        {showEmailForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-lg w-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-brand-red" />
                  Assessment-Report herunterladen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Erhalten Sie Ihren detaillierten Compliance-Report mit individuellen 
                  Handlungsempfehlungen und Roadmap als PDF.
                </p>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">E-Mail-Adresse</label>
                    <input 
                      type="email" 
                      required
                      className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                      placeholder="ihre.email@unternehmen.de"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Unternehmen</label>
                    <input 
                      type="text" 
                      className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                      placeholder="Ihr Unternehmen"
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      type="submit"
                      className="flex-1 bg-brand-red hover:bg-brand-red/90 text-white"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Report herunterladen
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setShowEmailForm(false)}
                    >
                      Abbrechen
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title="Datenschutz Readiness Assessment – DSGVO-Bereitschaft prüfen"
        description="Bewerten Sie Ihre Datenschutz-Bereitschaft interaktiv. Analysieren Sie Prozesse, Dokumentation & TOMs für optimalen Datenschutz. ✓ Kostenlos ✓ Sofortige Auswertung. Jetzt testen!"
        canonical="/assessment-center/datenschutz-readiness-assessment"
        keywords="datenschutz readiness assessment, dsgvo bereitschaft prüfen, datenschutz bewertung, privacy assessment"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <Link to="/resources" className="hover:text-brand-red transition-colors">Resources</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Datenschutz-Readiness-Assessment</span>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-3">
                  Interaktiver Compliance-Test
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Datenschutz-Readiness-Assessment
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Ermitteln Sie Ihren DSGVO-Compliance-Reifegrad in nur 5 Minuten
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>~5 Minuten</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="pb-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto">
            {/* Progress */}
            <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Fortschritt
                  </span>
                  <span className="text-sm font-medium text-purple-600">
                    {currentStep + 1} von {totalQuestions}
                  </span>
                </div>
                <Progress value={(currentStep + 1) / totalQuestions * 100} className="h-3 mb-4" />
                <div className="text-center">
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                    {currentQuestion.categoryTitle}
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Question */}
            <Card className="mb-8 border-2 border-gray-200 dark:border-gray-700 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl mb-4 flex-1">
                    {currentQuestion.question}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowQuestionInfo(!showQuestionInfo)}
                    className="ml-4 text-gray-500 hover:text-gray-700"
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                </div>
                
                {/* Question Context & Tips */}
                {showQuestionInfo && (currentQuestion as any).context && (
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-start gap-3 mb-3">
                      <BookOpen className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">Hintergrund</h5>
                        <p className="text-sm text-blue-800 dark:text-blue-200">{(currentQuestion as any).context}</p>
                      </div>
                    </div>
                    {(currentQuestion as any).tip && (
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5" />
                        <div>
                          <h5 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">Tipp</h5>
                          <p className="text-sm text-yellow-800 dark:text-yellow-200">{(currentQuestion as any).tip}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <RadioGroup 
                  value={answers[currentQuestion.id] || ''} 
                  onValueChange={handleAnswer}
                  className="space-y-4"
                >
                  {currentQuestion.options.map((option, index) => (
                    <div key={option.value} className={cn(
                      "flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer group",
                      answers[currentQuestion.id] === option.value
                        ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20"
                        : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-purple-300"
                    )}>
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label 
                        htmlFor={option.value} 
                        className="flex-1 cursor-pointer text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300"
                      >
                        {option.label}
                      </Label>
                      <div className={cn(
                        "text-xs px-2 py-1 rounded font-medium",
                        answers[currentQuestion.id] === option.value
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                          : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                      )}>
                        {option.points} Pkt.
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <Button 
                variant="outline" 
                onClick={prevQuestion}
                disabled={currentStep === 0}
                className="flex items-center gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                Zurück
              </Button>

              {/* Time indicator */}
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Timer className="h-4 w-4" />
                <span>~{Math.max(1, Math.ceil((totalQuestions - currentStep) * 0.5))} Min verbleibend</span>
              </div>
              
              <Button 
                onClick={nextQuestion}
                disabled={!answers[currentQuestion.id] || isLoading}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all duration-300 flex items-center gap-2 min-w-[140px]"
                size="lg"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Analysiere...
                  </>
                ) : currentStep === totalQuestions - 1 ? (
                  <>
                    <BarChart3 className="h-4 w-4" />
                    Ergebnis anzeigen
                  </>
                ) : (
                  <>
                    Weiter
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Was Sie nach dem Assessment erhalten
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="inline-flex p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-4">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Personalisierte Bewertung
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Detaillierte Analyse Ihres aktuellen Compliance-Stands mit konkreten Handlungsempfehlungen.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Implementierungs-Roadmap
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Priorisierte To-Do-Liste mit zeitlichen Empfehlungen für die Umsetzung.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <div className="inline-flex p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Benchmark-Vergleich
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Vergleich mit anderen Unternehmen Ihrer Branche und Größe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};