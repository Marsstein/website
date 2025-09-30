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
  Gauge,
  LineChart,
  PieChart,
  Trending,
  Wifi,
  Server,
  Monitor,
  HardDrive,
  Network
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface Question {
  id: string;
  category: string;
  controlId: string;
  question: string;
  explanation: string;
  options: {
    id: string;
    text: string;
    implementationLevel: 'not_implemented' | 'partially_implemented' | 'largely_implemented' | 'fully_implemented' | 'continuously_improved';
    points: number;
    explanation: string;
  }[];
  priority: 'critical' | 'high' | 'medium' | 'low';
  helpText?: string;
}

interface AssessmentResult {
  overallImplementation: 'not_implemented' | 'partially_implemented' | 'largely_implemented' | 'fully_implemented' | 'continuously_improved';
  score: number;
  maxScore: number;
  categoryScores: Record<string, { score: number; maxScore: number; implementationLevel: string; criticalGaps: number }>;
  recommendations: string[];
  nextSteps: string[];
  criticalFindings: string[];
  remediation: { priority: string; control: string; action: string; timeframe: string }[];
  complianceGaps: number;
  complianceStatus: 'non_compliant' | 'partially_compliant' | 'largely_compliant' | 'fully_compliant';
}

const SecurityControlsAudit: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Assessment",
    "name": "Security Controls Audit",
    "description": "Führen Sie ein umfassendes Audit Ihrer Sicherheitskontrollen nach ISO 27001 Annex A durch",
    "educationalLevel": "Professional",
    "url": "https://marsstein.ai/assessment-center/security-controls-audit"
  };

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Security Controls Audit Questions (ISO 27001 Annex A controls)
  const questions: Question[] = [
    {
      id: 'access_control_policy',
      category: 'Zugriffskontrolle',
      controlId: 'A.9.1.1',
      question: 'Haben Sie eine umfassende Zugriffskontroll-Richtlinie etabliert?',
      explanation: 'Eine formelle Zugriffskontroll-Richtlinie definiert Prinzipien und Verfahren für den Informationszugang',
      priority: 'critical',
      options: [
        {
          id: 'no_policy',
          text: 'Keine formelle Zugriffskontroll-Richtlinie vorhanden',
          implementationLevel: 'not_implemented',
          points: 0,
          explanation: 'Kritische Sicherheitslücke - sofortige Entwicklung erforderlich'
        },
        {
          id: 'basic_policy',
          text: 'Grundlegende Richtlinie vorhanden, aber unvollständig',
          implementationLevel: 'partially_implemented',
          points: 1,
          explanation: 'Erste Ansätze vorhanden, umfassende Überarbeitung nötig'
        },
        {
          id: 'documented_policy',
          text: 'Vollständig dokumentierte Richtlinie, teilweise implementiert',
          implementationLevel: 'largely_implemented',
          points: 3,
          explanation: 'Gute Basis, vollständige Implementierung und Training erforderlich'
        },
        {
          id: 'implemented_policy',
          text: 'Vollständig implementiert und allen Mitarbeitern kommuniziert',
          implementationLevel: 'fully_implemented',
          points: 4,
          explanation: 'Solide Implementierung, regelmäßige Überprüfung empfohlen'
        },
        {
          id: 'optimized_policy',
          text: 'Kontinuierlich verbessert basierend auf Monitoring und Feedback',
          implementationLevel: 'continuously_improved',
          points: 5,
          explanation: 'Best Practice Implementierung mit kontinuierlicher Optimierung'
        }
      ]
    },
    {
      id: 'user_access_management',
      category: 'Zugriffskontrolle',
      controlId: 'A.9.2.1',
      question: 'Wie strukturiert ist Ihr Benutzerzugriffs-Management?',
      explanation: 'Formelle Prozesse für Benutzerregistrierung und -deregistrierung sind essentiell',
      priority: 'critical',
      options: [
        {
          id: 'manual_ad_hoc',
          text: 'Manuelle, ad-hoc Benutzerverwaltung',
          implementationLevel: 'not_implemented',
          points: 0,
          explanation: 'Erhebliches Sicherheitsrisiko durch unkontrollierte Zugriffe'
        },
        {
          id: 'basic_processes',
          text: 'Grundlegende Prozesse für neue Benutzer',
          implementationLevel: 'partially_implemented',
          points: 1,
          explanation: 'Erste Strukturen vorhanden, vollständiger Lifecycle-Prozess fehlt'
        },
        {
          id: 'documented_processes',
          text: 'Dokumentierte Prozesse für Benutzer-Lifecycle',
          implementationLevel: 'largely_implemented',
          points: 3,
          explanation: 'Gute Prozesse, Automatisierung und Überwachung verbessern'
        },
        {
          id: 'automated_management',
          text: 'Weitgehend automatisierte Benutzerverwaltung',
          implementationLevel: 'fully_implemented',
          points: 4,
          explanation: 'Effiziente Verwaltung, kontinuierliche Überwachung implementieren'
        },
        {
          id: 'intelligent_management',
          text: 'Intelligente Verwaltung mit ML-basierter Anomalie-Erkennung',
          implementationLevel: 'continuously_improved',
          points: 5,
          explanation: 'Modernste Benutzerverwaltung mit proaktiver Überwachung'
        }
      ]
    },
    {
      id: 'privileged_access_management',
      category: 'Zugriffskontrolle',
      controlId: 'A.9.2.3',
      question: 'Wie kontrollieren Sie privilegierte Zugriffe?',
      explanation: 'Privilegierte Zugriffe erfordern besondere Schutzmaßnahmen und Überwachung',
      priority: 'critical',
      options: [
        {
          id: 'shared_admin',
          text: 'Geteilte administrative Konten ohne besondere Kontrollen',
          implementationLevel: 'not_implemented',
          points: 0,
          explanation: 'Kritisches Sicherheitsrisiko - sofortige Maßnahmen erforderlich'
        },
        {
          id: 'individual_admin',
          text: 'Individuelle Admin-Konten, grundlegende Kontrollen',
          implementationLevel: 'partially_implemented',
          points: 1,
          explanation: 'Verbesserung erkennbar, umfassende PAM-Lösung erforderlich'
        },
        {
          id: 'pam_basic',
          text: 'Grundlegende PAM-Lösung mit Session-Recording',
          implementationLevel: 'largely_implemented',
          points: 3,
          explanation: 'Gute Basis, Just-in-Time Access implementieren'
        },
        {
          id: 'pam_advanced',
          text: 'Umfassende PAM mit Just-in-Time Access',
          implementationLevel: 'fully_implemented',
          points: 4,
          explanation: 'Starke Privilegien-Verwaltung, Zero-Trust erweitern'
        },
        {
          id: 'zero_trust_pam',
          text: 'Zero-Trust PAM mit kontinuierlicher Verifizierung',
          implementationLevel: 'continuously_improved',
          points: 5,
          explanation: 'Best-in-Class Privilegien-Management'
        }
      ]
    },
    {
      id: 'network_security',
      category: 'Netzwerksicherheit',
      controlId: 'A.13.1.1',
      question: 'Wie umfassend sind Ihre Netzwerk-Sicherheitskontrollen?',
      explanation: 'Netzwerk-Segmentierung und -Überwachung sind fundamentale Sicherheitskontrollen',
      priority: 'high',
      options: [
        {
          id: 'flat_network',
          text: 'Flaches Netzwerk ohne Segmentierung',
          implementationLevel: 'not_implemented',
          points: 0,
          explanation: 'Hohes Risiko bei Kompromittierung - Segmentierung erforderlich'
        },
        {
          id: 'basic_segmentation',
          text: 'Grundlegende Netzwerk-Segmentierung mit Firewalls',
          implementationLevel: 'partially_implemented',
          points: 1,
          explanation: 'Erste Schritte unternommen, Micro-Segmentierung implementieren'
        },
        {
          id: 'comprehensive_segmentation',
          text: 'Umfassende Segmentierung mit DMZ und VLANs',
          implementationLevel: 'largely_implemented',
          points: 3,
          explanation: 'Gute Netzwerkarchitektur, Zero-Trust-Prinzipien erweitern'
        },
        {
          id: 'zero_trust_network',
          text: 'Zero-Trust Netzwerkarchitektur implementiert',
          implementationLevel: 'fully_implemented',
          points: 4,
          explanation: 'Moderne Netzwerksicherheit, KI-basierte Überwachung hinzufügen'
        },
        {
          id: 'ai_driven_network',
          text: 'KI-gesteuerte adaptive Netzwerksicherheit',
          implementationLevel: 'continuously_improved',
          points: 5,
          explanation: 'Führende Netzwerksicherheit mit autonomer Threat Response'
        }
      ]
    },
    {
      id: 'encryption_management',
      category: 'Kryptographie',
      controlId: 'A.10.1.1',
      question: 'Wie umfassend ist Ihre Verschlüsselungs-Implementation?',
      explanation: 'Verschlüsselung schützt Daten in Ruhe und während der Übertragung',
      priority: 'high',
      options: [
        {
          id: 'no_encryption',
          text: 'Keine systematische Verschlüsselung implementiert',
          implementationLevel: 'not_implemented',
          points: 0,
          explanation: 'Kritisches Risiko für Datenschutzverletzungen'
        },
        {
          id: 'basic_encryption',
          text: 'Grundlegende Verschlüsselung für kritische Daten',
          implementationLevel: 'partially_implemented',
          points: 1,
          explanation: 'Erste Maßnahmen, umfassende Verschlüsselungsstrategie entwickeln'
        },
        {
          id: 'comprehensive_encryption',
          text: 'Umfassende Verschlüsselung für Daten in Ruhe und Transit',
          implementationLevel: 'largely_implemented',
          points: 3,
          explanation: 'Gute Abdeckung, Key Management System implementieren'
        },
        {
          id: 'enterprise_encryption',
          text: 'Enterprise-weite Verschlüsselung mit zentralem Key Management',
          implementationLevel: 'fully_implemented',
          points: 4,
          explanation: 'Starke Verschlüsselung, Quantum-Safe Algorithmen evaluieren'
        },
        {
          id: 'quantum_safe_encryption',
          text: 'Quantum-Safe Verschlüsselung mit Hardware Security Modules',
          implementationLevel: 'continuously_improved',
          points: 5,
          explanation: 'Zukunftssichere Verschlüsselung auf höchstem Niveau'
        }
      ]
    },
    {
      id: 'vulnerability_management',
      category: 'Schwachstellen-Management',
      controlId: 'A.12.6.1',
      question: 'Wie strukturiert ist Ihr Vulnerability Management?',
      explanation: 'Systematisches Schwachstellen-Management ist kritisch für Cybersecurity',
      priority: 'high',
      options: [
        {
          id: 'reactive_patching',
          text: 'Reaktives Patching bei bekannten Problemen',
          implementationLevel: 'not_implemented',
          points: 0,
          explanation: 'Hohes Risiko durch unentdeckte Schwachstellen'
        },
        {
          id: 'scheduled_scanning',
          text: 'Regelmäßige Vulnerability Scans',
          implementationLevel: 'partially_implemented',
          points: 1,
          explanation: 'Erste Strukturen, kontinuierliches Scanning implementieren'
        },
        {
          id: 'comprehensive_program',
          text: 'Umfassendes Vulnerability Management Programm',
          implementationLevel: 'largely_implemented',
          points: 3,
          explanation: 'Gutes Programm, Automatisierung und Priorisierung verbessern'
        },
        {
          id: 'automated_program',
          text: 'Automatisiertes VM mit Risk-basierter Priorisierung',
          implementationLevel: 'fully_implemented',
          points: 4,
          explanation: 'Effizientes VM, Threat Intelligence integrieren'
        },
        {
          id: 'predictive_vm',
          text: 'Predictive Vulnerability Management mit KI-basierter Risikovorhersage',
          implementationLevel: 'continuously_improved',
          points: 5,
          explanation: 'Modernste VM-Praktiken mit proaktiver Risikoantizipation'
        }
      ]
    },
    {
      id: 'incident_response',
      category: 'Incident Management',
      controlId: 'A.16.1.1',
      question: 'Wie ausgereift sind Ihre Incident Response Prozesse?',
      explanation: 'Schnelle und effektive Incident Response minimiert Schäden bei Sicherheitsvorfällen',
      priority: 'critical',
      options: [
        {
          id: 'no_formal_process',
          text: 'Keine formellen Incident Response Prozesse',
          implementationLevel: 'not_implemented',
          points: 0,
          explanation: 'Kritische Lücke - formelle IR-Prozesse sofort entwickeln'
        },
        {
          id: 'basic_procedures',
          text: 'Grundlegende IR-Verfahren dokumentiert',
          implementationLevel: 'partially_implemented',
          points: 1,
          explanation: 'Erste Schritte, Training und Testing erforderlich'
        },
        {
          id: 'trained_team',
          text: 'Trainiertes IR-Team mit getesteten Verfahren',
          implementationLevel: 'largely_implemented',
          points: 3,
          explanation: 'Gute Vorbereitung, forensische Fähigkeiten ausbauen'
        },
        {
          id: 'advanced_capabilities',
          text: 'Erweiterte IR-Fähigkeiten mit Forensik und Threat Hunting',
          implementationLevel: 'fully_implemented',
          points: 4,
          explanation: 'Starke IR-Capabilities, automatisierte Response implementieren'
        },
        {
          id: 'automated_response',
          text: 'Automatisierte IR mit SOAR und AI-gestützter Analyse',
          implementationLevel: 'continuously_improved',
          points: 5,
          explanation: 'Best-Practice IR mit autonomer Response-Orchestrierung'
        }
      ]
    },
    {
      id: 'backup_recovery',
      category: 'Backup & Recovery',
      controlId: 'A.12.3.1',
      question: 'Wie umfassend ist Ihr Backup und Recovery System?',
      explanation: 'Zuverlässige Backups sind essentiell für Business Continuity',
      priority: 'high',
      options: [
        {
          id: 'irregular_backups',
          text: 'Unregelmäßige oder ungetestete Backups',
          implementationLevel: 'not_implemented',
          points: 0,
          explanation: 'Hohes Risiko für Datenverlust - sofortige Verbesserung nötig'
        },
        {
          id: 'scheduled_backups',
          text: 'Regelmäßige Backups, gelegentlich getestet',
          implementationLevel: 'partially_implemented',
          points: 1,
          explanation: 'Grundlegende Sicherung, systematisches Testing implementieren'
        },
        {
          id: 'tested_backups',
          text: 'Regelmäßige und getestete Backup-Verfahren',
          implementationLevel: 'largely_implemented',
          points: 3,
          explanation: 'Solide Backup-Strategie, Immutable Storage erwägen'
        },
        {
          id: 'enterprise_backup',
          text: '3-2-1 Backup-Strategie mit Offsite-Storage',
          implementationLevel: 'fully_implemented',
          points: 4,
          explanation: 'Robuste Backup-Architektur, Zero-Trust-Backup implementieren'
        },
        {
          id: 'immutable_backup',
          text: 'Immutable Backups mit Zero-Trust-Architektur',
          implementationLevel: 'continuously_improved',
          points: 5,
          explanation: 'Ransomware-resistente Backup-Lösung auf höchstem Niveau'
        }
      ]
    }
  ];

  const calculateResult = (): AssessmentResult => {
    const categoryScores: Record<string, { score: number; maxScore: number; implementationLevel: string; criticalGaps: number }> = {};
    let totalScore = 0;
    let maxTotalScore = 0;
    let complianceGaps = 0;

    // Calculate scores by category
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const selectedOption = question.options.find(opt => opt.id === answer);
        if (selectedOption) {
          const category = question.category;
          if (!categoryScores[category]) {
            categoryScores[category] = { score: 0, maxScore: 0, implementationLevel: 'not_implemented', criticalGaps: 0 };
          }
          categoryScores[category].score += selectedOption.points;
          categoryScores[category].maxScore += Math.max(...question.options.map(opt => opt.points));
          totalScore += selectedOption.points;

          // Count critical gaps
          if (question.priority === 'critical' && selectedOption.implementationLevel === 'not_implemented') {
            categoryScores[category].criticalGaps += 1;
            complianceGaps += 1;
          }
        }
      } else {
        complianceGaps += 1; // Unanswered questions count as gaps
      }
      maxTotalScore += Math.max(...question.options.map(opt => opt.points));
    });

    // Determine overall implementation level
    const implementationPercentage = (totalScore / maxTotalScore) * 100;
    let overallImplementation: 'not_implemented' | 'partially_implemented' | 'largely_implemented' | 'fully_implemented' | 'continuously_improved';
    let complianceStatus: 'non_compliant' | 'partially_compliant' | 'largely_compliant' | 'fully_compliant';

    if (implementationPercentage <= 20) {
      overallImplementation = 'not_implemented';
      complianceStatus = 'non_compliant';
    } else if (implementationPercentage <= 40) {
      overallImplementation = 'partially_implemented';
      complianceStatus = 'partially_compliant';
    } else if (implementationPercentage <= 60) {
      overallImplementation = 'largely_implemented';
      complianceStatus = 'partially_compliant';
    } else if (implementationPercentage <= 80) {
      overallImplementation = 'fully_implemented';
      complianceStatus = 'largely_compliant';
    } else {
      overallImplementation = 'continuously_improved';
      complianceStatus = 'fully_compliant';
    }

    // Generate recommendations and remediation
    const recommendations: string[] = [];
    const nextSteps: string[] = [];
    const criticalFindings: string[] = [];
    const remediation: { priority: string; control: string; action: string; timeframe: string }[] = [];

    // Analyze critical findings
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const selectedOption = question.options.find(opt => opt.id === answer);
        if (selectedOption && question.priority === 'critical' && selectedOption.implementationLevel === 'not_implemented') {
          criticalFindings.push(`${question.controlId}: ${question.question} - Nicht implementiert`);
          remediation.push({
            priority: 'Critical',
            control: question.controlId,
            action: 'Sofortige Implementierung erforderlich',
            timeframe: '1-4 Wochen'
          });
        } else if (selectedOption && question.priority === 'high' && selectedOption.implementationLevel === 'not_implemented') {
          remediation.push({
            priority: 'High',
            control: question.controlId,
            action: 'Prioritäre Implementierung',
            timeframe: '1-3 Monate'
          });
        } else if (selectedOption && selectedOption.implementationLevel === 'partially_implemented') {
          remediation.push({
            priority: 'Medium',
            control: question.controlId,
            action: 'Vervollständigung der Implementierung',
            timeframe: '3-6 Monate'
          });
        }
      }
    });

    // Overall recommendations based on implementation level
    if (overallImplementation === 'not_implemented') {
      recommendations.push('Sofortige Entwicklung grundlegender Sicherheitskontrollen erforderlich');
      recommendations.push('Engagement einer externen Cybersecurity-Beratung empfohlen');
      nextSteps.push('Notfall-Sicherheitsplan entwickeln und kritische Kontrollen implementieren');
    } else if (overallImplementation === 'partially_implemented') {
      recommendations.push('Systematische Verbesserung bestehender Sicherheitskontrollen');
      recommendations.push('Implementierung einer umfassenden Cybersecurity-Strategie');
      nextSteps.push('Gap-Analyse abschließen und Prioritäten-Roadmap erstellen');
    } else if (overallImplementation === 'largely_implemented') {
      recommendations.push('Schließung verbleibender Lücken und Optimierung bestehender Kontrollen');
      recommendations.push('Aufbau fortgeschrittener Überwachungs- und Response-Fähigkeiten');
      nextSteps.push('Penetrationstests und externe Security Audits durchführen');
    } else if (overallImplementation === 'fully_implemented') {
      recommendations.push('Kontinuierliche Verbesserung und Innovation in der Cybersecurity');
      recommendations.push('Aufbau von Threat Intelligence und proaktiven Capabilities');
      nextSteps.push('Zero-Trust-Architektur und KI-basierte Sicherheitslösungen evaluieren');
    } else {
      recommendations.push('Weiterentwicklung als Cybersecurity-Leader mit innovativen Ansätzen');
      recommendations.push('Aufbau eines Cybersecurity-Ökosystems mit Partnern');
      nextSteps.push('Sharing von Best Practices und Mentoring anderer Organisationen');
    }

    return {
      overallImplementation,
      score: totalScore,
      maxScore: maxTotalScore,
      categoryScores,
      recommendations: recommendations.slice(0, 6),
      nextSteps: nextSteps.slice(0, 6),
      criticalFindings,
      remediation: remediation.slice(0, 10),
      complianceGaps,
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

  const getImplementationColor = (level: string) => {
    switch (level) {
      case 'not_implemented': return 'text-red-600 bg-red-100 border-red-200';
      case 'partially_implemented': return 'text-orange-600 bg-orange-100 border-orange-200';
      case 'largely_implemented': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'fully_implemented': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'continuously_improved': return 'text-green-600 bg-green-100 border-green-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getImplementationIcon = (level: string) => {
    switch (level) {
      case 'not_implemented': return XCircle;
      case 'partially_implemented': return AlertTriangle;
      case 'largely_implemented': return Info;
      case 'fully_implemented': return CheckCircle;
      case 'continuously_improved': return Star;
      default: return Info;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'text-red-700 bg-red-100 border-red-300';
      case 'high': return 'text-orange-700 bg-orange-100 border-orange-300';
      case 'medium': return 'text-yellow-700 bg-yellow-100 border-yellow-300';
      case 'low': return 'text-green-700 bg-green-100 border-green-300';
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
                Security Controls Audit wird durchgeführt...
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Wir analysieren Ihre Sicherheitskontrollen und erstellen einen detaillierten 
                Audit-Report mit kritischen Findings und Remediation-Plan.
              </p>
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Lock className="h-4 w-4 animate-pulse" />
                  <span>Zugriffskontrolle auditieren...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Network className="h-4 w-4 animate-pulse" />
                  <span>Netzwerksicherheit prüfen...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Server className="h-4 w-4 animate-pulse" />
                  <span>Systemhärtung bewerten...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Activity className="h-4 w-4 animate-pulse" />
                  <span>Incident Response analysieren...</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <AlertOctagon className="h-4 w-4 animate-pulse" />
                  <span>Kritische Findings identifizieren...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResults && result) {
    const ImplementationIcon = getImplementationIcon(result.overallImplementation);
    const implementationLabels = {
      not_implemented: 'Nicht implementiert',
      partially_implemented: 'Teilweise implementiert',
      largely_implemented: 'Weitgehend implementiert', 
      fully_implemented: 'Vollständig implementiert',
      continuously_improved: 'Kontinuierlich verbessert'
    };

    return (
      <>
        <SEOHead
          title="Security Controls Audit – ISO 27001 Sicherheitskontrollen prüfen"
          description="Security Controls Audit: Auditieren Sie Ihre ISO 27001 Sicherheitskontrollen systematisch. ✓ Annex A Controls ✓ Gap-Analyse ✓ Remediation-Plan. Jetzt testen!"
          canonical="/assessment-center/security-controls-audit"
          keywords="Security Controls Audit, ISO 27001 Controls, Sicherheitskontrollen, Annex A, Controls Assessment"
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
                  getImplementationColor(result.overallImplementation)
                )}>
                  <ImplementationIcon className="h-6 w-6" />
                  <span className="font-semibold">
                    {implementationLabels[result.overallImplementation]}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Security Controls Audit
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Umfassende Bewertung Ihrer ISO 27001 Sicherheitskontrollen
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
                    <div className="text-sm text-gray-600 dark:text-gray-400">Control Score</div>
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
                      result.overallImplementation === 'not_implemented' ? 'text-red-600' :
                      result.overallImplementation === 'partially_implemented' ? 'text-orange-600' :
                      result.overallImplementation === 'largely_implemented' ? 'text-yellow-600' :
                      result.overallImplementation === 'fully_implemented' ? 'text-blue-600' : 'text-green-600'
                    )}>
                      {Math.round((result.score / result.maxScore) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Implementierung</div>
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

                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className={cn(
                      "text-2xl font-bold mb-2",
                      result.complianceStatus === 'fully_compliant' ? 'text-green-600' :
                      result.complianceStatus === 'largely_compliant' ? 'text-yellow-600' :
                      result.complianceStatus === 'partially_compliant' ? 'text-orange-600' : 'text-red-600'
                    )}>
                      {result.complianceStatus === 'fully_compliant' ? 'Konform' :
                       result.complianceStatus === 'largely_compliant' ? 'Weitgehend' :
                       result.complianceStatus === 'partially_compliant' ? 'Teilweise' : 'Nicht konform'}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Compliance Status</div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Critical Findings */}
              {result.criticalFindings.length > 0 && (
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="border-red-200 dark:border-red-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-300">
                        <AlertOctagon className="h-5 w-5" />
                        Kritische Findings
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
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Implementierung nach Kategorien
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {Object.entries(result.categoryScores).map(([category, data], index) => {
                    const percentage = (data.score / data.maxScore) * 100;
                    const level = percentage <= 20 ? 'not_implemented' : percentage <= 40 ? 'partially_implemented' : percentage <= 60 ? 'largely_implemented' : percentage <= 80 ? 'fully_implemented' : 'continuously_improved';
                    
                    return (
                      <Card key={category}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              {category}
                            </h3>
                            <div className="flex items-center gap-2">
                              <Badge className={getImplementationColor(level)}>
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
                            {implementationLabels[level]} ({Math.round(percentage)}%)
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </motion.div>

              {/* Remediation Plan */}
              {result.remediation.length > 0 && (
                <motion.div
                  className="mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Clipboard className="h-5 w-5 text-blue-500" />
                        Remediation Plan
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {result.remediation.map((item, index) => (
                          <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <Badge className={getPriorityColor(item.priority.toLowerCase())}>
                                  {item.priority}
                                </Badge>
                                <span className="font-medium text-gray-900 dark:text-white">
                                  {item.control}
                                </span>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {item.action}
                              </p>
                            </div>
                            <div className="text-sm text-gray-500 ml-4">
                              {item.timeframe}
                            </div>
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
                  Erneut auditieren
                </Button>
                
                <Button 
                  size="lg"
                  className="bg-brand-red hover:bg-brand-red/90 text-white flex items-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  Audit Report downloaden
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <FileText className="h-5 w-5" />
                  Remediation Plan exportieren
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
        title="Security Controls Audit – ISO 27001 Sicherheitskontrollen prüfen"
        description="Security Controls Audit: Auditieren Sie Ihre ISO 27001 Sicherheitskontrollen systematisch. ✓ Annex A Controls ✓ Gap-Analyse ✓ Remediation-Plan. Jetzt testen!"
        canonical="/assessment-center/security-controls-audit"
        keywords="Security Controls Audit, ISO 27001 Controls, Sicherheitskontrollen, Annex A, Controls Assessment"
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
                  <Eye className="h-4 w-4" />
                  <span className="text-sm font-medium">Security Controls Audit</span>
                </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Sicherheitskontrollen auditieren
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
                Führen Sie ein systematisches Audit Ihrer ISO 27001 Sicherheitskontrollen durch 
                und identifizieren Sie kritische Sicherheitslücken mit detailliertem Remediation-Plan.
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
                      {currentQuestion.priority.charAt(0).toUpperCase() + currentQuestion.priority.slice(1)} Priority
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-mono text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      {currentQuestion.controlId}
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
                      const ImplementationIcon = getImplementationIcon(option.implementationLevel);
                      
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
                                <ImplementationIcon className={cn(
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
                                      getImplementationColor(option.implementationLevel)
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
                Control {currentStep + 1} von {questions.length}
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
                    Audit abschließen
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

export default SecurityControlsAudit;