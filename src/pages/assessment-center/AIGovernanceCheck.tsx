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
  BarChart3
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
    maturityLevel: 'basic' | 'developing' | 'defined' | 'managed' | 'optimized';
    points: number;
    explanation: string;
  }[];
  helpText?: string;
}

interface AssessmentResult {
  overallMaturity: 'basic' | 'developing' | 'defined' | 'managed' | 'optimized';
  score: number;
  maxScore: number;
  categoryScores: Record<string, { score: number; maxScore: number; maturityLevel: string }>;
  recommendations: string[];
  nextSteps: string[];
  improvementAreas: string[];
  strengths: string[];
  complianceStatus: 'compliant' | 'action_needed' | 'critical';
}

const AIGovernanceCheck: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Assessment",
    "name": "AI Governance Check",
    "description": "Überprüfen Sie Ihre KI-Governance-Strukturen und -Prozesse für verantwortungsvolle KI-Entwicklung",
    "educationalLevel": "Professional",
    "url": "https://marsstein.ai/assessment-center/ai-governance-check"
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // AI Governance Assessment Questions
  const questions: Question[] = [
    {
      id: 'governance_structure',
      category: 'Governance-Struktur',
      question: 'Wie ist die AI Governance in Ihrem Unternehmen organisiert?',
      explanation: 'Eine klare Governance-Struktur ist fundamental für verantwortungsvolle KI-Entwicklung',
      options: [
        {
          id: 'no_structure',
          text: 'Keine formale AI Governance-Struktur vorhanden',
          maturityLevel: 'basic',
          points: 1,
          explanation: 'Grundlegende Governance-Mechanismen müssen erst etabliert werden'
        },
        {
          id: 'informal_guidelines',
          text: 'Informelle Richtlinien und Ad-hoc-Entscheidungen',
          maturityLevel: 'developing',
          points: 2,
          explanation: 'Erste Ansätze vorhanden, aber strukturierte Formalisierung erforderlich'
        },
        {
          id: 'formal_committee',
          text: 'AI Ethics Committee oder Governance Board etabliert',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Solide Grundstruktur mit definierten Verantwortlichkeiten'
        },
        {
          id: 'integrated_governance',
          text: 'Integrierte AI Governance in alle Geschäftsprozesse',
          maturityLevel: 'managed',
          points: 4,
          explanation: 'Systematische Integration in Unternehmensprozesse'
        },
        {
          id: 'adaptive_governance',
          text: 'Adaptive, lernende Governance mit kontinuierlicher Optimierung',
          maturityLevel: 'optimized',
          points: 5,
          explanation: 'Höchste Reifegrad mit selbstoptimierenden Governance-Mechanismen'
        }
      ]
    },
    {
      id: 'policies_procedures',
      category: 'Richtlinien & Verfahren',
      question: 'Wie umfassend sind Ihre AI-spezifischen Richtlinien und Verfahren?',
      explanation: 'Dokumentierte Richtlinien bilden das Fundament für konsistente AI Governance',
      options: [
        {
          id: 'no_policies',
          text: 'Keine spezifischen AI-Richtlinien vorhanden',
          maturityLevel: 'basic',
          points: 1,
          explanation: 'Grundlegende Policy-Entwicklung erforderlich'
        },
        {
          id: 'basic_policies',
          text: 'Grundlegende AI-Richtlinien für einzelne Bereiche',
          maturityLevel: 'developing',
          points: 2,
          explanation: 'Erste Richtlinien vorhanden, aber Ausbau notwendig'
        },
        {
          id: 'comprehensive_policies',
          text: 'Umfassende AI-Richtlinien für alle relevanten Bereiche',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Solide Policy-Basis mit breiter Abdeckung'
        },
        {
          id: 'integrated_procedures',
          text: 'Integrierte Verfahren mit regelmäßiger Überprüfung und Anpassung',
          maturityLevel: 'managed',
          points: 4,
          explanation: 'Systematische Verfahrensintegration mit Monitoring'
        },
        {
          id: 'dynamic_policies',
          text: 'Dynamische, selbstaktualierende Richtlinien basierend auf Learnings',
          maturityLevel: 'optimized',
          points: 5,
          explanation: 'Fortschrittlichste Policy-Verwaltung mit kontinuierlicher Adaptation'
        }
      ]
    },
    {
      id: 'risk_management',
      category: 'Risikomanagement',
      question: 'Wie handhaben Sie AI-spezifische Risiken in Ihrem Unternehmen?',
      explanation: 'Systematisches Risikomanagement ist essentiell für sichere AI-Implementierung',
      options: [
        {
          id: 'no_risk_mgmt',
          text: 'Keine systematische AI-Risikobewertung',
          maturityLevel: 'basic',
          points: 1,
          explanation: 'Risikomanagement-Framework muss entwickelt werden'
        },
        {
          id: 'basic_risk_assessment',
          text: 'Grundlegende Risikoidentifikation bei AI-Projekten',
          maturityLevel: 'developing',
          points: 2,
          explanation: 'Erste Risikobewertung vorhanden, aber Systematisierung nötig'
        },
        {
          id: 'formal_risk_framework',
          text: 'Formelles AI-Risikomanagement-Framework implementiert',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Strukturiertes Risikomanagement mit definierten Prozessen'
        },
        {
          id: 'integrated_monitoring',
          text: 'Integriertes Monitoring mit automatisierten Risiko-Alerts',
          maturityLevel: 'managed',
          points: 4,
          explanation: 'Proaktives Risikomanagement mit kontinuierlicher Überwachung'
        },
        {
          id: 'predictive_risk_mgmt',
          text: 'Predictive Risk Management mit KI-gestützter Risikovorhersage',
          maturityLevel: 'optimized',
          points: 5,
          explanation: 'Fortschrittlichstes Risikomanagement mit prädiktiven Capabilities'
        }
      ]
    },
    {
      id: 'accountability_responsibility',
      category: 'Verantwortlichkeit',
      question: 'Wie sind Verantwortlichkeiten für AI-Systeme in Ihrem Unternehmen geregelt?',
      explanation: 'Klare Verantwortlichkeiten gewährleisten Accountability bei AI-Entscheidungen',
      options: [
        {
          id: 'unclear_responsibility',
          text: 'Unklare oder keine definierten Verantwortlichkeiten',
          maturityLevel: 'basic',
          points: 1,
          explanation: 'Grundlegende Verantwortlichkeitsstrukturen müssen etabliert werden'
        },
        {
          id: 'project_level_responsibility',
          text: 'Projektebene: AI-Projektleiter sind verantwortlich',
          maturityLevel: 'developing',
          points: 2,
          explanation: 'Erste Verantwortlichkeiten definiert, aber Ausbau erforderlich'
        },
        {
          id: 'role_based_responsibility',
          text: 'Rollenbasierte Verantwortlichkeiten mit klaren Zuständigkeiten',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Strukturierte Verantwortlichkeitsverteilung implementiert'
        },
        {
          id: 'end_to_end_accountability',
          text: 'End-to-End Accountability mit Lifecycle-Management',
          maturityLevel: 'managed',
          points: 4,
          explanation: 'Umfassende Verantwortlichkeit über gesamten AI-Lebenszyklus'
        },
        {
          id: 'adaptive_accountability',
          text: 'Adaptive Accountability mit dynamischen Verantwortlichkeiten',
          maturityLevel: 'optimized',
          points: 5,
          explanation: 'Höchste Stufe mit selbstanpassenden Verantwortlichkeitsstrukturen'
        }
      ]
    },
    {
      id: 'transparency_explainability',
      category: 'Transparenz & Erklärbarkeit',
      question: 'Wie transparent sind Ihre AI-Systeme für Stakeholder?',
      explanation: 'Transparenz schafft Vertrauen und ermöglicht verantwortungsvolle AI-Nutzung',
      options: [
        {
          id: 'black_box_systems',
          text: 'AI-Systeme sind größtenteils "Black Boxes"',
          maturityLevel: 'basic',
          points: 1,
          explanation: 'Grundlegende Transparenz-Mechanismen müssen entwickelt werden'
        },
        {
          id: 'basic_documentation',
          text: 'Grundlegende Dokumentation von AI-Systemen vorhanden',
          maturityLevel: 'developing',
          points: 2,
          explanation: 'Erste Transparenz-Ansätze, aber Verbesserung nötig'
        },
        {
          id: 'stakeholder_transparency',
          text: 'Transparenz für verschiedene Stakeholder-Gruppen implementiert',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Strukturierte Transparenz mit zielgruppenspezifischer Information'
        },
        {
          id: 'interactive_explainability',
          text: 'Interaktive Erklärbarkeits-Tools für Nutzer verfügbar',
          maturityLevel: 'managed',
          points: 4,
          explanation: 'Fortgeschrittene Transparenz mit benutzerfreundlichen Tools'
        },
        {
          id: 'adaptive_transparency',
          text: 'Adaptive Transparenz basierend auf Kontext und Nutzerbedürfnissen',
          maturityLevel: 'optimized',
          points: 5,
          explanation: 'Höchste Transparenz mit kontextadaptiven Erklärungen'
        }
      ]
    },
    {
      id: 'human_oversight',
      category: 'Menschliche Aufsicht',
      question: 'Wie ist die menschliche Kontrolle über AI-Systeme organisiert?',
      explanation: 'Human Oversight ist entscheidend für verantwortungsvolle AI-Governance',
      options: [
        {
          id: 'minimal_oversight',
          text: 'Minimale oder keine systematische menschliche Aufsicht',
          maturityLevel: 'basic',
          points: 1,
          explanation: 'Grundlegende Oversight-Mechanismen müssen etabliert werden'
        },
        {
          id: 'reactive_oversight',
          text: 'Reaktive Überwachung bei Problemen oder Beschwerden',
          maturityLevel: 'developing',
          points: 2,
          explanation: 'Erste Oversight-Strukturen, aber proaktive Ansätze nötig'
        },
        {
          id: 'systematic_monitoring',
          text: 'Systematisches Monitoring mit definierten Interventionspunkten',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Strukturierte Überwachung mit klaren Eingriffsregeln'
        },
        {
          id: 'intelligent_oversight',
          text: 'Intelligente Oversight mit KI-unterstützter Anomalie-Erkennung',
          maturityLevel: 'managed',
          points: 4,
          explanation: 'Fortgeschrittene Überwachung mit technologischer Unterstützung'
        },
        {
          id: 'adaptive_human_ai_collaboration',
          text: 'Adaptive Mensch-KI-Kollaboration mit dynamischer Kontrolle',
          maturityLevel: 'optimized',
          points: 5,
          explanation: 'Optimale Balance zwischen menschlicher Kontrolle und AI-Automatisierung'
        }
      ]
    },
    {
      id: 'training_awareness',
      category: 'Training & Bewusstsein',
      question: 'Wie umfassend ist das AI Governance Training in Ihrem Unternehmen?',
      explanation: 'Mitarbeiter-Training ist fundamental für erfolgreiche AI Governance Implementierung',
      options: [
        {
          id: 'no_training',
          text: 'Kein spezifisches AI Governance Training vorhanden',
          maturityLevel: 'basic',
          points: 1,
          explanation: 'Grundlegende Trainings-Programme müssen entwickelt werden'
        },
        {
          id: 'basic_awareness',
          text: 'Grundlegende AI-Awareness-Sessions für Schlüsselpersonal',
          maturityLevel: 'developing',
          points: 2,
          explanation: 'Erste Trainings-Ansätze, aber Ausbau erforderlich'
        },
        {
          id: 'role_specific_training',
          text: 'Rollenspezifische Trainings für verschiedene Zielgruppen',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Strukturierte Trainings mit zielgruppenspezifischen Inhalten'
        },
        {
          id: 'continuous_learning',
          text: 'Kontinuierliche Lernprogramme mit regelmäßigen Updates',
          maturityLevel: 'managed',
          points: 4,
          explanation: 'Systematische Weiterbildung mit aktuellen Entwicklungen'
        },
        {
          id: 'adaptive_learning_ecosystem',
          text: 'Adaptives Lern-Ökosystem mit personalisierten Trainings-Pfaden',
          maturityLevel: 'optimized',
          points: 5,
          explanation: 'Fortschrittlichstes Lernsystem mit individueller Anpassung'
        }
      ]
    },
    {
      id: 'compliance_monitoring',
      category: 'Compliance & Monitoring',
      question: 'Wie überwachen Sie die Einhaltung von AI Governance Standards?',
      explanation: 'Kontinuierliches Compliance-Monitoring gewährleistet nachhaltige Governance',
      options: [
        {
          id: 'no_monitoring',
          text: 'Keine systematische Compliance-Überwachung',
          maturityLevel: 'basic',
          points: 1,
          explanation: 'Grundlegende Monitoring-Systeme müssen implementiert werden'
        },
        {
          id: 'periodic_audits',
          text: 'Periodische interne Audits und Überprüfungen',
          maturityLevel: 'developing',
          points: 2,
          explanation: 'Erste Compliance-Checks, aber kontinuierliches Monitoring nötig'
        },
        {
          id: 'systematic_compliance_tracking',
          text: 'Systematisches Compliance-Tracking mit KPIs und Metriken',
          maturityLevel: 'defined',
          points: 3,
          explanation: 'Strukturiertes Monitoring mit messbaren Indikatoren'
        },
        {
          id: 'automated_compliance_monitoring',
          text: 'Automatisiertes Compliance-Monitoring mit Real-time-Alerts',
          maturityLevel: 'managed',
          points: 4,
          explanation: 'Fortgeschrittenes Monitoring mit proaktiven Benachrichtigungen'
        },
        {
          id: 'predictive_compliance_management',
          text: 'Predictive Compliance Management mit Trend-Analyse',
          maturityLevel: 'optimized',
          points: 5,
          explanation: 'Höchstes Niveau mit prädiktiver Compliance-Vorhersage'
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
            categoryScores[category] = { score: 0, maxScore: 0, maturityLevel: 'basic' };
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
    let overallMaturity: 'basic' | 'developing' | 'defined' | 'managed' | 'optimized';
    let complianceStatus: 'compliant' | 'action_needed' | 'critical';

    if (maturityPercentage <= 20) {
      overallMaturity = 'basic';
      complianceStatus = 'critical';
    } else if (maturityPercentage <= 40) {
      overallMaturity = 'developing';
      complianceStatus = 'action_needed';
    } else if (maturityPercentage <= 60) {
      overallMaturity = 'defined';
      complianceStatus = 'action_needed';
    } else if (maturityPercentage <= 80) {
      overallMaturity = 'managed';
      complianceStatus = 'compliant';
    } else {
      overallMaturity = 'optimized';
      complianceStatus = 'compliant';
    }

    // Generate recommendations and insights
    const recommendations: string[] = [];
    const nextSteps: string[] = [];
    const improvementAreas: string[] = [];
    const strengths: string[] = [];

    // Analyze each category for specific recommendations
    Object.entries(categoryScores).forEach(([category, data]) => {
      const categoryPercentage = (data.score / data.maxScore) * 100;
      
      if (categoryPercentage < 40) {
        improvementAreas.push(category);
      } else if (categoryPercentage >= 80) {
        strengths.push(category);
      }
    });

    // Governance structure recommendations
    if (answers['governance_structure'] === 'no_structure' || answers['governance_structure'] === 'informal_guidelines') {
      recommendations.push('Etablierung einer formalen AI Governance-Struktur mit klaren Rollen und Verantwortlichkeiten');
      nextSteps.push('Gründung eines AI Ethics Committee oder Governance Board');
    }

    // Policies and procedures recommendations
    if (answers['policies_procedures'] === 'no_policies' || answers['policies_procedures'] === 'basic_policies') {
      recommendations.push('Entwicklung umfassender AI-spezifischer Richtlinien und Verfahren');
      nextSteps.push('Erstellung eines AI Policy Frameworks für alle relevanten Bereiche');
    }

    // Risk management recommendations
    if (answers['risk_management'] === 'no_risk_mgmt' || answers['risk_management'] === 'basic_risk_assessment') {
      recommendations.push('Implementierung eines systematischen AI-Risikomanagement-Frameworks');
      nextSteps.push('Durchführung einer umfassenden AI-Risikoanalyse');
    }

    // Accountability recommendations
    if (answers['accountability_responsibility'] === 'unclear_responsibility' || answers['accountability_responsibility'] === 'project_level_responsibility') {
      recommendations.push('Definition klarer Verantwortlichkeiten und Accountability-Strukturen');
      nextSteps.push('Erstellung einer RACI-Matrix für AI-Governance-Prozesse');
    }

    // Transparency recommendations
    if (answers['transparency_explainability'] === 'black_box_systems' || answers['transparency_explainability'] === 'basic_documentation') {
      recommendations.push('Verbesserung der AI-Transparenz durch Explainable AI-Technologien');
      nextSteps.push('Implementierung von AI-Erklärbarkeitswerkzeugen für Stakeholder');
    }

    // Human oversight recommendations
    if (answers['human_oversight'] === 'minimal_oversight' || answers['human_oversight'] === 'reactive_oversight') {
      recommendations.push('Stärkung der menschlichen Aufsicht durch systematische Monitoring-Mechanismen');
      nextSteps.push('Entwicklung von Human-in-the-Loop-Verfahren für kritische AI-Entscheidungen');
    }

    // Training recommendations
    if (answers['training_awareness'] === 'no_training' || answers['training_awareness'] === 'basic_awareness') {
      recommendations.push('Ausbau der AI Governance-Trainings für alle relevanten Mitarbeitergruppen');
      nextSteps.push('Entwicklung rollenspezifischer AI-Trainings-Programme');
    }

    // Compliance monitoring recommendations
    if (answers['compliance_monitoring'] === 'no_monitoring' || answers['compliance_monitoring'] === 'periodic_audits') {
      recommendations.push('Einführung kontinuierlicher Compliance-Monitoring-Systeme');
      nextSteps.push('Implementierung automatisierter Compliance-Tracking-Tools');
    }

    // Overall maturity recommendations
    if (overallMaturity === 'basic' || overallMaturity === 'developing') {
      recommendations.unshift('Aufbau einer grundlegenden AI Governance-Infrastruktur als Fundament');
      nextSteps.unshift('Priorisierung der kritischsten Governance-Lücken');
    } else if (overallMaturity === 'defined') {
      recommendations.unshift('Integration und Automatisierung bestehender Governance-Prozesse');
      nextSteps.unshift('Entwicklung von KPIs zur Messung der Governance-Effektivität');
    } else if (overallMaturity === 'managed') {
      recommendations.unshift('Optimierung und kontinuierliche Verbesserung der Governance-Prozesse');
      nextSteps.unshift('Implementierung von Best Practices und Benchmarking');
    }

    return {
      overallMaturity,
      score: totalScore,
      maxScore: maxTotalScore,
      categoryScores,
      recommendations: recommendations.slice(0, 6),
      nextSteps: nextSteps.slice(0, 6),
      improvementAreas,
      strengths,
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

  const getMaturityColor = (level: string) => {
    switch (level) {
      case 'basic': return 'text-red-600 bg-red-100 border-red-200';
      case 'developing': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'defined': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'managed': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'optimized': return 'text-green-600 bg-green-100 border-green-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getMaturityIcon = (level: string) => {
    switch (level) {
      case 'basic': return XCircle;
      case 'developing': return AlertTriangle;
      case 'defined': return Info;
      case 'managed': return CheckCircle;
      case 'optimized': return Star;
      default: return Info;
    }
  };

  if (isCalculating) {
    return (
      <>
        <SEOHead
          title="KI-Governance Check – Reifegrad-Bewertung"
          description="AI Governance Check: Bewerten Sie Ihre KI-Governance-Strukturen. ✓ Verantwortungsvolle KI ✓ Reifegrad-Analyse ✓ Handlungsempfehlungen. Jetzt testen!"
          canonical="/assessment-center/ai-governance-check"
          keywords="AI Governance Check, KI-Governance, Responsible AI, KI-Ethik, KI-Management"
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
                AI Governance Assessment wird ausgewertet...
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Wir analysieren Ihre AI Governance-Strukturen und erstellen einen detaillierten 
                Reifegrad-Report mit spezifischen Verbesserungsempfehlungen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Building2 className="h-4 w-4 animate-pulse" />
                  <span>Governance-Strukturen bewerten...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <FileText className="h-4 w-4 animate-pulse" />
                  <span>Richtlinien und Verfahren prüfen...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield className="h-4 w-4 animate-pulse" />
                  <span>Risikomanagement analysieren...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Users className="h-4 w-4 animate-pulse" />
                  <span>Verantwortlichkeiten bewerten...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <BarChart3 className="h-4 w-4 animate-pulse" />
                  <span>Compliance-Reifegrad bestimmen...</span>
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
    const MaturityIcon = getMaturityIcon(result.overallMaturity);
    const maturityLabels = {
      basic: 'Grundstufe',
      developing: 'Entwickelnd',
      defined: 'Definiert', 
      managed: 'Gesteuert',
      optimized: 'Optimiert'
    };

    return (
      <>
        <SEOHead
          title="KI-Governance Check – Reifegrad-Bewertung"
          description="AI Governance Check: Bewerten Sie Ihre KI-Governance-Strukturen. ✓ Verantwortungsvolle KI ✓ Reifegrad-Analyse ✓ Handlungsempfehlungen. Jetzt testen!"
          canonical="/assessment-center/ai-governance-check"
          keywords="AI Governance Check, KI-Governance, Responsible AI, KI-Ethik, KI-Management"
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
                  getMaturityColor(result.overallMaturity)
                )}>
                  <MaturityIcon className="h-6 w-6" />
                  <span className="font-semibold">
                    Reifegrad: {maturityLabels[result.overallMaturity]}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  AI Governance Check
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Detaillierte Analyse Ihrer AI Governance-Strukturen und -Prozesse
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
                    <div className="text-sm text-gray-600 dark:text-gray-400">Governance Score</div>
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
                      result.overallMaturity === 'basic' ? 'text-red-600' :
                      result.overallMaturity === 'developing' ? 'text-orange-600' :
                      result.overallMaturity === 'defined' ? 'text-yellow-600' :
                      result.overallMaturity === 'managed' ? 'text-blue-600' : 'text-green-600'
                    )}>
                      {maturityLabels[result.overallMaturity]}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Reifegrad</div>
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
                  Reifegrad nach Governance-Bereichen
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(result.categoryScores).map(([category, data], index) => {
                    const percentage = (data.score / data.maxScore) * 100;
                    const level = percentage <= 20 ? 'basic' : percentage <= 40 ? 'developing' : percentage <= 60 ? 'defined' : percentage <= 80 ? 'managed' : 'optimized';
                    
                    return (
                      <Card key={category}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {category}
                            </h3>
                            <Badge className={getMaturityColor(level)}>
                              {data.score}/{data.maxScore}
                            </Badge>
                          </div>
                          <Progress value={percentage} className="mb-2" />
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {maturityLabels[level]} ({Math.round(percentage)}%)
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>

              {/* Strengths and Improvement Areas */}
              {(result.strengths.length > 0 || result.improvementAreas.length > 0) && (
                <motion.div
                  className="grid md:grid-cols-2 gap-6 mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {result.strengths.length > 0 && (
                    <Card className="border-green-200 dark:border-green-800">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
                          <Award className="h-5 w-5" />
                          Stärken
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {result.strengths.map((strength, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{strength}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {result.improvementAreas.length > 0 && (
                    <Card className="border-orange-200 dark:border-orange-800">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-300">
                          <TrendingUp className="h-5 w-5" />
                          Verbesserungsbereiche
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {result.improvementAreas.map((area, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-orange-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">{area}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )}
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
                  Governance Report downloaden
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
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="KI-Governance Check – Reifegrad-Bewertung"
        description="AI Governance Check: Bewerten Sie Ihre KI-Governance-Strukturen. ✓ Verantwortungsvolle KI ✓ Reifegrad-Analyse ✓ Handlungsempfehlungen. Jetzt testen!"
        canonical="/assessment-center/ai-governance-check"
        keywords="AI Governance Check, KI-Governance, Responsible AI, KI-Ethik, KI-Management"
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
                <Settings className="h-4 w-4" />
                <span className="text-sm font-medium">AI Governance Check</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                AI Governance Reifegrad bewerten
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Evaluieren Sie systematisch den Reifegrad Ihrer AI Governance-Strukturen und 
                erhalten Sie konkrete Handlungsempfehlungen zur Verbesserung.
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
                                    {option.maturityLevel === 'basic' ? 'Grundstufe' :
                                     option.maturityLevel === 'developing' ? 'Entwickelnd' :
                                     option.maturityLevel === 'defined' ? 'Definiert' :
                                     option.maturityLevel === 'managed' ? 'Gesteuert' : 'Optimiert'}
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

export default AIGovernanceCheck;