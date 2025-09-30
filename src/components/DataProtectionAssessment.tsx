import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check, ChevronRight, ChevronLeft, Sparkles, Users, Building2,
  Shield, FileText, Database, AlertTriangle, Lock, Eye, Target,
  TrendingUp, Award, XCircle, CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Answer = 'yes' | 'partial' | 'no' | 'na' | null;

interface ContextAnswers {
  employees: '1-9' | '10-19' | '20-49' | '50+' | null;
  dataType: 'contact' | 'customer' | 'sensitive' | null;
  coreActivity: 'yes' | 'no' | null;
  processors: 'none' | '1-3' | '4+' | null;
}

interface AssessmentQuestion {
  id: string;
  question: string;
  description: string;
  options: {
    value: Answer;
    label: string;
    icon: React.ElementType;
  }[];
  conditional?: (context: ContextAnswers) => boolean;
  weight?: (context: ContextAnswers) => number;
}

interface Category {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  questions: AssessmentQuestion[];
}

interface Gap {
  severity: 'critical' | 'high' | 'medium';
  title: string;
  description: string;
  solvedBy: ('klein-starter' | 'starter' | 'professional' | 'enterprise')[];
  solution?: string;
}

const contextQuestions = [
  {
    id: 'employees',
    question: 'Wie viele Mitarbeiter hat Ihr Unternehmen?',
    subtitle: 'Inklusive Geschäftsführung und Teilzeitkräfte',
    options: [
      { value: '1-9', label: '1-9 Mitarbeiter', icon: Users },
      { value: '10-19', label: '10-19 Mitarbeiter', icon: Users },
      { value: '20-49', label: '20-49 Mitarbeiter', icon: Building2 },
      { value: '50+', label: '50+ Mitarbeiter', icon: TrendingUp }
    ]
  },
  {
    id: 'dataType',
    question: 'Welche Daten verarbeiten Sie hauptsächlich?',
    subtitle: 'Wählen Sie die sensitivste Kategorie',
    options: [
      { value: 'contact', label: 'Nur Kontaktdaten', sublabel: 'E-Mail, Telefon, Namen', icon: FileText },
      { value: 'customer', label: 'Kundendaten + Zahlungen', sublabel: 'Bestellungen, Zahlungsdaten', icon: Database },
      { value: 'sensitive', label: 'Sensible Daten', sublabel: 'Gesundheit, Finanzen, biometrisch', icon: AlertTriangle }
    ]
  },
  {
    id: 'coreActivity',
    question: 'Ist Datenverarbeitung Ihre Kerntätigkeit?',
    subtitle: 'Z.B. Analytics, Marketing, Überwachung im großen Umfang',
    options: [
      { value: 'no', label: 'Nein', icon: Shield },
      { value: 'yes', label: 'Ja', icon: Database }
    ]
  },
  {
    id: 'processors',
    question: 'Arbeiten Sie mit Dienstleistern, die Daten verarbeiten?',
    subtitle: 'Z.B. Cloud-Hosting, Newsletter-Tools, CRM, etc.',
    options: [
      { value: 'none', label: 'Nein', icon: Shield },
      { value: '1-3', label: 'Ja, 1-3 Dienstleister', icon: Building2 },
      { value: '4+', label: 'Ja, 4+ Dienstleister', icon: TrendingUp }
    ]
  }
];

export const DataProtectionAssessment: React.FC = () => {
  const [phase, setPhase] = useState<'context' | 'assessment' | 'result'>('context');
  const [contextStep, setContextStep] = useState(0);
  const [contextAnswers, setContextAnswers] = useState<ContextAnswers>({
    employees: null,
    dataType: null,
    coreActivity: null,
    processors: null
  });
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const hasDSBRequirement = () => {
    if (!contextAnswers.employees) return false;
    const empCount = contextAnswers.employees;
    return empCount === '20-49' || empCount === '50+' || contextAnswers.coreActivity === 'yes';
  };

  const isHighRisk = () => contextAnswers.dataType === 'sensitive';
  const manyProcessors = () => contextAnswers.processors === '4+';

  const categories: Category[] = [
    {
      id: 'documents',
      title: 'DSGVO Pflichtdokumente',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      questions: [
        {
          id: 'verarbeitungsverzeichnis',
          question: 'Haben Sie ein Verarbeitungsverzeichnis (Art. 30 DSGVO)?',
          description: 'Dokumentation aller Datenverarbeitungstätigkeiten',
          options: [
            { value: 'yes', label: 'Ja, vollständig und aktuell', icon: CheckCircle2 },
            { value: 'partial', label: 'Vorhanden, aber unvollständig', icon: AlertTriangle },
            { value: 'no', label: 'Nein / Weiß nicht', icon: XCircle }
          ],
          weight: () => 15
        },
        {
          id: 'datenschutzerklaerung',
          question: 'Ist Ihre Datenschutzerklärung aktuell und DSGVO-konform?',
          description: 'Transparente Information über Datenverarbeitung',
          options: [
            { value: 'yes', label: 'Ja, aktuell (geprüft in letzten 6 Monaten)', icon: CheckCircle2 },
            { value: 'partial', label: 'Vorhanden, aber möglicherweise veraltet', icon: AlertTriangle },
            { value: 'no', label: 'Nein / Weiß nicht', icon: XCircle }
          ],
          weight: () => 15
        },
        {
          id: 'avv',
          question: 'Haben Sie AVV-Verträge mit allen Dienstleistern?',
          description: 'Auftragsverarbeitungsverträge gemäß Art. 28 DSGVO',
          options: [
            { value: 'yes', label: 'Ja, mit allen', icon: CheckCircle2 },
            { value: 'partial', label: 'Mit einigen', icon: AlertTriangle },
            { value: 'no', label: 'Nein', icon: XCircle },
            { value: 'na', label: 'Keine Dienstleister', icon: Shield }
          ],
          conditional: (ctx) => ctx.processors !== 'none',
          weight: (ctx) => ctx.processors === '4+' ? 15 : 10
        },
        {
          id: 'loeschkonzept',
          question: 'Haben Sie ein Löschkonzept mit definierten Fristen?',
          description: 'Dokumentierte Löschfristen für verschiedene Datenarten',
          options: [
            { value: 'yes', label: 'Ja, dokumentiert und umgesetzt', icon: CheckCircle2 },
            { value: 'partial', label: 'Fristen bekannt, aber nicht dokumentiert', icon: AlertTriangle },
            { value: 'no', label: 'Nein', icon: XCircle }
          ],
          weight: () => 10
        }
      ]
    },
    {
      id: 'dsb',
      title: 'Datenschutzbeauftragter & Organisation',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      questions: [
        {
          id: 'dsb_benannt',
          question: 'Haben Sie einen Datenschutzbeauftragten benannt?',
          description: 'Interner oder externer DSB',
          options: [
            { value: 'yes', label: 'Ja, intern oder extern', icon: CheckCircle2 },
            { value: 'no', label: 'Nein', icon: XCircle }
          ],
          conditional: (ctx) => {
            const empCount = ctx.employees;
            return empCount === '20-49' || empCount === '50+' || ctx.coreActivity === 'yes';
          },
          weight: () => 20
        },
        {
          id: 'mitarbeiter_verpflichtung',
          question: 'Sind Mitarbeiter zum Datenschutz verpflichtet?',
          description: 'Vertraulichkeitsverpflichtung unterschrieben',
          options: [
            { value: 'yes', label: 'Ja, alle unterschrieben', icon: CheckCircle2 },
            { value: 'partial', label: 'Teilweise', icon: AlertTriangle },
            { value: 'no', label: 'Nein', icon: XCircle }
          ],
          weight: () => 8
        },
        {
          id: 'verantwortlichkeiten',
          question: 'Gibt es klare Verantwortlichkeiten für Datenschutz?',
          description: 'Zuständigkeiten dokumentiert und kommuniziert',
          options: [
            { value: 'yes', label: 'Ja, dokumentiert', icon: CheckCircle2 },
            { value: 'partial', label: 'Informell geregelt', icon: AlertTriangle },
            { value: 'no', label: 'Nein', icon: XCircle }
          ],
          weight: () => 7
        }
      ]
    },
    {
      id: 'security',
      title: 'Technische Sicherheit',
      icon: Lock,
      color: 'from-red-500 to-orange-500',
      questions: [
        {
          id: 'ssl_tls',
          question: 'Nutzen Sie SSL/TLS-Verschlüsselung?',
          description: 'Für Website, E-Mail und Datenübertragung',
          options: [
            { value: 'yes', label: 'Ja, überall', icon: CheckCircle2 },
            { value: 'partial', label: 'Teilweise', icon: AlertTriangle },
            { value: 'no', label: 'Nein', icon: XCircle }
          ],
          weight: () => 15
        },
        {
          id: 'encryption',
          question: 'Sind Ihre Datenbanken/Systeme verschlüsselt?',
          description: 'Verschlüsselung gespeicherter Daten',
          options: [
            { value: 'yes', label: 'Ja, vollständig', icon: CheckCircle2 },
            { value: 'partial', label: 'Teilweise', icon: AlertTriangle },
            { value: 'no', label: 'Nein', icon: XCircle },
            { value: 'na', label: 'N/A - keine Datenbanken', icon: Shield }
          ],
          weight: (ctx) => ctx.dataType === 'sensitive' ? 20 : 12
        },
        {
          id: 'access_control',
          question: 'Haben Sie ein Zugriffskontroll- & Berechtigungskonzept?',
          description: 'Need-to-know Prinzip umgesetzt',
          options: [
            { value: 'yes', label: 'Ja, nach Need-to-know', icon: CheckCircle2 },
            { value: 'partial', label: 'Basis-Kontrollen vorhanden', icon: AlertTriangle },
            { value: 'no', label: 'Nein / alle haben Zugriff', icon: XCircle }
          ],
          weight: () => 10
        },
        {
          id: 'backups',
          question: 'Werden regelmäßige Backups erstellt und getestet?',
          description: 'Automatische Backups mit Wiederherstellungstests',
          options: [
            { value: 'yes', label: 'Ja, automatisch + getestet', icon: CheckCircle2 },
            { value: 'partial', label: 'Backups ja, aber nicht getestet', icon: AlertTriangle },
            { value: 'no', label: 'Nein / unregelmäßig', icon: XCircle }
          ],
          weight: () => 8
        }
      ]
    },
    {
      id: 'rights',
      title: 'Betroffenenrechte & Prozesse',
      icon: Eye,
      color: 'from-green-500 to-emerald-500',
      questions: [
        {
          id: 'auskunft',
          question: 'Haben Sie einen Prozess für Auskunftsanfragen (Art. 15)?',
          description: 'Response-Zeit unter 1 Monat',
          options: [
            { value: 'yes', label: 'Ja, dokumentiert (<1 Monat)', icon: CheckCircle2 },
            { value: 'partial', label: 'Wissen wie, aber nicht dokumentiert', icon: AlertTriangle },
            { value: 'no', label: 'Nein', icon: XCircle }
          ],
          weight: () => 10
        },
        {
          id: 'loeschung',
          question: 'Können Sie Daten auf Anfrage löschen (Art. 17)?',
          description: 'Technisch und prozessual möglich',
          options: [
            { value: 'yes', label: 'Ja, technisch und prozessual', icon: CheckCircle2 },
            { value: 'partial', label: 'Technisch möglich, Prozess unklar', icon: AlertTriangle },
            { value: 'no', label: 'Nein / sehr aufwändig', icon: XCircle }
          ],
          weight: () => 10
        },
        {
          id: 'datenpanne',
          question: 'Haben Sie einen Datenpannen-Meldeprozess (72h)?',
          description: 'Dokumentierter Prozess mit Verantwortlichen',
          options: [
            { value: 'yes', label: 'Ja, dokumentiert', icon: CheckCircle2 },
            { value: 'partial', label: 'Grundsätzlich bekannt', icon: AlertTriangle },
            { value: 'no', label: 'Nein', icon: XCircle }
          ],
          weight: () => 12
        }
      ]
    },
    {
      id: 'monitoring',
      title: 'Security Monitoring',
      icon: Target,
      color: 'from-yellow-500 to-amber-500',
      questions: [
        {
          id: 'security_checks',
          question: 'Führen Sie regelmäßige Security-Checks durch?',
          description: 'Automatisierte oder manuelle Vulnerability Scans',
          options: [
            { value: 'yes', label: 'Ja, automatisiert', icon: CheckCircle2 },
            { value: 'partial', label: 'Manuell/gelegentlich', icon: AlertTriangle },
            { value: 'no', label: 'Nein', icon: XCircle }
          ],
          weight: (ctx) => ctx.dataType === 'sensitive' ? 12 : 8
        },
        {
          id: 'website_compliance',
          question: 'Überwachen Sie Ihre Website auf Datenschutz-Compliance?',
          description: 'Cookie-Scanner, Tracking-Check, etc.',
          options: [
            { value: 'yes', label: 'Ja, regelmäßig', icon: CheckCircle2 },
            { value: 'partial', label: 'Bei Änderungen', icon: AlertTriangle },
            { value: 'no', label: 'Nein', icon: XCircle }
          ],
          weight: () => 7
        },
        {
          id: 'breach_monitoring',
          question: 'Monitoring von Datenlecks/Breaches?',
          description: 'Dark Web, E-Mail-Breach-Checks',
          options: [
            { value: 'yes', label: 'Ja, aktives Monitoring', icon: CheckCircle2 },
            { value: 'partial', label: 'Nur bei Verdacht', icon: AlertTriangle },
            { value: 'no', label: 'Nein / weiß nicht', icon: XCircle }
          ],
          weight: () => 8
        }
      ]
    },
    {
      id: 'documentation',
      title: 'Dokumentation & Compliance',
      icon: Award,
      color: 'from-indigo-500 to-purple-500',
      questions: [
        {
          id: 'dsfa',
          question: 'Führen Sie Datenschutz-Folgenabschätzungen durch (Art. 35)?',
          description: 'Bei Hochrisiko-Verarbeitungen',
          options: [
            { value: 'yes', label: 'Ja, bei Hochrisiko', icon: CheckCircle2 },
            { value: 'partial', label: 'Nicht systematisch', icon: AlertTriangle },
            { value: 'no', label: 'Nein / nicht bekannt', icon: XCircle }
          ],
          conditional: (ctx) => ctx.dataType === 'sensitive',
          weight: () => 10
        },
        {
          id: 'documentation',
          question: 'Dokumentieren Sie alle Datenverarbeitungen?',
          description: 'Zentrale und aktuelle Dokumentation',
          options: [
            { value: 'yes', label: 'Ja, zentral und aktuell', icon: CheckCircle2 },
            { value: 'partial', label: 'Teilweise', icon: AlertTriangle },
            { value: 'no', label: 'Nein', icon: XCircle }
          ],
          weight: () => 8
        },
        {
          id: 'reviews',
          question: 'Führen Sie regelmäßige Compliance-Reviews durch?',
          description: 'Mindestens jährliche Überprüfung',
          options: [
            { value: 'yes', label: 'Ja, mindestens jährlich', icon: CheckCircle2 },
            { value: 'partial', label: 'Unregelmäßig', icon: AlertTriangle },
            { value: 'no', label: 'Nein', icon: XCircle }
          ],
          weight: () => 7
        }
      ]
    }
  ];

  const getVisibleQuestions = (category: Category) => {
    return category.questions.filter(q => {
      if (!q.conditional) return true;
      return q.conditional(contextAnswers);
    });
  };

  const getAllVisibleQuestions = () => {
    return categories.flatMap(cat => getVisibleQuestions(cat));
  };

  const handleContextAnswer = (questionId: string, value: string) => {
    setContextAnswers(prev => ({ ...prev, [questionId]: value as any }));

    if (contextStep < contextQuestions.length - 1) {
      setDirection('forward');
      setTimeout(() => setContextStep(contextStep + 1), 300);
    } else {
      setTimeout(() => setPhase('assessment'), 300);
    }
  };

  const handleAnswer = (value: Answer) => {
    const currentCat = categories[currentCategory];
    const visibleQuestions = getVisibleQuestions(currentCat);
    const currentQ = visibleQuestions[currentQuestion];

    setAnswers(prev => ({ ...prev, [currentQ.id]: value }));

    if (currentQuestion < visibleQuestions.length - 1) {
      setDirection('forward');
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else if (currentCategory < categories.length - 1) {
      setDirection('forward');
      setTimeout(() => {
        setCurrentCategory(currentCategory + 1);
        setCurrentQuestion(0);
      }, 300);
    } else {
      setTimeout(() => setPhase('result'), 300);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setDirection('backward');
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentCategory > 0) {
      setDirection('backward');
      const prevCat = categories[currentCategory - 1];
      const prevVisibleQuestions = getVisibleQuestions(prevCat);
      setCurrentCategory(currentCategory - 1);
      setCurrentQuestion(prevVisibleQuestions.length - 1);
    }
  };

  const handleRestart = () => {
    setPhase('context');
    setContextStep(0);
    setContextAnswers({ employees: null, dataType: null, coreActivity: null, processors: null });
    setCurrentCategory(0);
    setCurrentQuestion(0);
    setAnswers({});
    setDirection('forward');
  };

  const calculateResults = () => {
    let totalPoints = 0;
    let maxPoints = 0;

    const allQuestions = getAllVisibleQuestions();

    allQuestions.forEach(q => {
      const weight = q.weight ? q.weight(contextAnswers) : 10;
      const answer = answers[q.id];

      if (answer === 'yes') {
        totalPoints += weight;
      } else if (answer === 'partial') {
        totalPoints += weight * 0.5;
      } else if (answer === 'na') {
        return;
      }

      maxPoints += weight;
    });

    const percentage = maxPoints > 0 ? (totalPoints / maxPoints) * 100 : 0;

    return { totalPoints, maxPoints, percentage };
  };

  const analyzeGaps = (): Gap[] => {
    const gaps: Gap[] = [];

    if (answers.verarbeitungsverzeichnis !== 'yes') {
      gaps.push({
        severity: 'critical',
        title: 'Verarbeitungsverzeichnis fehlt',
        description: 'Pflichtdokument gemäß Art. 30 DSGVO - Bußgeldrisiko bis €10 Mio',
        solvedBy: ['starter', 'professional', 'enterprise'],
        solution: 'Automatisch generiertes Verarbeitungsverzeichnis (Art. 30)'
      });
    }

    if (hasDSBRequirement() && answers.dsb_benannt !== 'yes') {
      gaps.push({
        severity: 'critical',
        title: 'Kein DSB benannt',
        description: `Gesetzliche Pflicht für Unternehmen ab 20 Mitarbeitern`,
        solvedBy: ['professional', 'enterprise'],
        solution: 'Externer Datenschutzbeauftragter (zertifiziert)'
      });
    }

    if (answers.datenschutzerklaerung !== 'yes') {
      gaps.push({
        severity: 'critical',
        title: 'Datenschutzerklärung fehlt/veraltet',
        description: 'Transparenzpflicht gemäß Art. 13/14 DSGVO',
        solvedBy: ['starter', 'professional', 'enterprise'],
        solution: 'Rechtssichere Datenschutzerklärungen (Website & App)'
      });
    }

    if (manyProcessors() && answers.avv === 'no') {
      gaps.push({
        severity: 'critical',
        title: 'AVV-Verträge fehlen',
        description: 'Pflicht bei Auftragsverarbeitung gemäß Art. 28 DSGVO',
        solvedBy: ['starter', 'professional', 'enterprise'],
        solution: 'AVV-Generator für alle gängigen Dienstleister'
      });
    }

    if (isHighRisk() && answers.encryption !== 'yes') {
      gaps.push({
        severity: 'critical',
        title: 'Keine Verschlüsselung bei sensiblen Daten',
        description: 'Hohes Risiko für Datenpannen und Bußgelder',
        solvedBy: ['professional', 'enterprise'],
        solution: 'Beratung zu Verschlüsselungs-Best-Practices & TOMs'
      });
    }

    if (answers.ssl_tls !== 'yes') {
      gaps.push({
        severity: 'critical',
        title: 'Keine SSL/TLS-Verschlüsselung',
        description: 'Grundlegende Sicherheitsmaßnahme fehlt',
        solvedBy: ['starter', 'professional', 'enterprise'],
        solution: 'SSL/TLS-Überwachung & Monitoring'
      });
    }

    if (answers.loeschkonzept !== 'yes') {
      gaps.push({
        severity: 'high',
        title: 'Löschkonzept fehlt',
        description: 'Speicherbegrenzung gemäß Art. 5 DSGVO nicht umgesetzt',
        solvedBy: ['starter', 'professional', 'enterprise'],
        solution: 'Löschkonzept-Vorlage mit Fristen-Management'
      });
    }

    if (answers.datenpanne !== 'yes') {
      gaps.push({
        severity: 'high',
        title: 'Datenpannen-Prozess fehlt',
        description: '72h-Meldepflicht kann nicht eingehalten werden',
        solvedBy: ['starter', 'professional', 'enterprise'],
        solution: 'Datenpannen-Management inkl. 72h-Meldeprozess'
      });
    }

    if (answers.security_checks !== 'yes') {
      gaps.push({
        severity: 'high',
        title: 'Keine Security-Audits',
        description: 'Schwachstellen werden nicht erkannt',
        solvedBy: ['professional', 'enterprise'],
        solution: 'Regelmäßige Vulnerability Scans & Pentests'
      });
    }

    if (answers.breach_monitoring !== 'yes') {
      gaps.push({
        severity: 'medium',
        title: 'Kein Breach-Monitoring',
        description: 'Datenlecks werden nicht proaktiv erkannt',
        solvedBy: ['professional', 'enterprise'],
        solution: 'Dark Web Monitoring & Email Breach Checks'
      });
    }

    if (answers.website_compliance !== 'yes') {
      gaps.push({
        severity: 'medium',
        title: 'Keine Website-Compliance-Überwachung',
        description: 'Cookie-Banner und Tracking nicht geprüft',
        solvedBy: ['professional', 'enterprise'],
        solution: 'Automatischer Cookie-Scanner & Compliance-Check'
      });
    }

    if (answers.auskunft !== 'yes') {
      gaps.push({
        severity: 'high',
        title: 'Kein Auskunftsprozess',
        description: 'Betroffenenrechte können nicht erfüllt werden',
        solvedBy: ['starter', 'professional', 'enterprise'],
        solution: 'Betroffenenrechte-Prozesse & Vorlagen'
      });
    }

    return gaps.sort((a, b) => {
      const severityOrder = { critical: 0, high: 1, medium: 2 };
      return severityOrder[a.severity] - severityOrder[b.severity];
    });
  };

  const recommendPackage = () => {
    const { percentage } = calculateResults();
    const gaps = analyzeGaps();
    const criticalCount = gaps.filter(g => g.severity === 'critical').length;

    if (criticalCount >= 4 || (isHighRisk() && percentage < 50)) {
      return 'enterprise';
    }

    if (hasDSBRequirement() || criticalCount >= 2 || percentage < 60) {
      return 'professional';
    }

    if (percentage < 80) {
      return 'starter';
    }

    return 'starter';
  };

  const getPackageDetails = (pkg: string) => {
    const details = {
      starter: {
        name: 'STARTER',
        price: '€69',
        color: 'from-[#474747] to-[#232323]',
        icon: Shield
      },
      professional: {
        name: 'PROFESSIONAL',
        price: '€199',
        color: 'from-[#e24e1b] to-[#ea580c]',
        icon: Award
      },
      enterprise: {
        name: 'ENTERPRISE',
        price: '€449',
        color: 'from-[#003366] to-[#1F1F24]',
        icon: Target
      }
    };

    return details[pkg as keyof typeof details] || details.starter;
  };

  const slideVariants = {
    enter: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: 'forward' | 'backward') => ({
      zIndex: 0,
      x: direction === 'forward' ? -1000 : 1000,
      opacity: 0
    })
  };

  if (phase === 'context') {
    const currentQ = contextQuestions[contextStep];
    const progress = ((contextStep + 1) / contextQuestions.length) * 100;

    return (
      <div className="w-full max-w-2xl mx-auto px-3 sm:px-0">
        <div className="mb-3 sm:mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-semibold text-[#474747]">
              Schritt {contextStep + 1}/{contextQuestions.length}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-[#e24e1b]">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={contextStep}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
          >
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="text-center mb-4 sm:mb-6">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#232323] mb-2">
                    {currentQ.question}
                  </h2>
                  {currentQ.subtitle && (
                    <p className="text-xs sm:text-sm text-[#474747]">
                      {currentQ.subtitle}
                    </p>
                  )}
                </div>

                <div className="space-y-2 sm:space-y-3">
                  {currentQ.options.map((option: any, idx: number) => {
                    const OptionIcon = option.icon;

                    return (
                      <motion.button
                        key={option.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + idx * 0.1 }}
                        onClick={() => handleContextAnswer(currentQ.id, option.value)}
                        className="w-full p-3 sm:p-4 rounded-lg border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300 text-left group hover:shadow-md"
                      >
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#e24e1b] to-[#ea580c] transition-transform group-hover:scale-110">
                            <OptionIcon className="h-5 w-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-[#232323] text-sm sm:text-base">
                              {option.label}
                            </div>
                            {option.sublabel && (
                              <div className="text-xs sm:text-sm text-[#474747] mt-0.5">
                                {option.sublabel}
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }

  if (phase === 'result') {
    const results = calculateResults();
    const gaps = analyzeGaps();
    const recommendedPkg = recommendPackage();
    const packageDetails = getPackageDetails(recommendedPkg);
    const Icon = packageDetails.icon;

    const criticalGaps = gaps.filter(g => g.severity === 'critical');
    const highGaps = gaps.filter(g => g.severity === 'high');
    const allMajorGaps = [...criticalGaps, ...highGaps];
    const gapsSolvedByPackage = allMajorGaps.filter(g =>
      g.solvedBy.includes(recommendedPkg as any)
    );

    let scoreLabel = '🔴 KRITISCH';
    let scoreColor = 'text-red-600';
    if (results.percentage >= 80) {
      scoreLabel = '🟢 EXCELLENT';
      scoreColor = 'text-green-600';
    } else if (results.percentage >= 60) {
      scoreLabel = '🟢 SOLIDE';
      scoreColor = 'text-green-600';
    } else if (results.percentage >= 40) {
      scoreLabel = '🟡 AUSBAUFÄHIG';
      scoreColor = 'text-yellow-600';
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl mx-auto space-y-3 px-3 sm:px-0"
      >
        <Card className="border-2 border-gray-200 shadow-xl">
          <CardContent className="p-3 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
              <div className="text-center sm:text-left">
                <h2 className="text-base sm:text-xl font-bold text-[#232323]">
                  Ihr Compliance-Score
                </h2>
                <p className="text-xs text-[#474747]">
                  Basierend auf {getAllVisibleQuestions().length} Prüfpunkten
                </p>
              </div>
              <div className="text-center sm:text-right">
                <div className="text-4xl sm:text-4xl font-bold text-[#232323]">
                  {Math.round(results.percentage)}%
                </div>
                <span className={cn("text-xs font-semibold", scoreColor)}>
                  {scoreLabel}
                </span>
              </div>
            </div>

            {hasDSBRequirement() && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 sm:p-2.5 text-xs text-blue-800">
                <AlertTriangle className="h-3.5 w-3.5 sm:h-4 sm:w-4 inline mr-1 sm:mr-1.5" />
                <strong>Wichtig:</strong> Als Unternehmen mit {contextAnswers.employees === '50+' ? '50+' : '20+'} Mitarbeitern
                {contextAnswers.coreActivity === 'yes' && ' und Datenverarbeitung als Kerntätigkeit'}
                {' '}benötigen Sie einen DSB
              </div>
            )}
          </CardContent>
        </Card>

        {(criticalGaps.length > 0 || highGaps.length > 0) && (
          <Card className="border-2 border-red-500 shadow-xl bg-gradient-to-br from-red-50 to-white">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="p-1.5 sm:p-2 bg-red-100 rounded-lg">
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-lg font-bold text-[#232323]">
                    {criticalGaps.length + highGaps.length} Compliance-Risiken gefunden
                  </h3>
                  <p className="text-xs text-[#474747]">
                    {criticalGaps.length > 0 && `${criticalGaps.length} kritisch`}
                    {criticalGaps.length > 0 && highGaps.length > 0 && ', '}
                    {highGaps.length > 0 && `${highGaps.length} hoch`}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                {allMajorGaps.slice(0, 5).map((gap, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-white rounded-lg p-2.5 sm:p-3 border-l-4 border-red-500"
                  >
                    <div className="flex items-start gap-2">
                      <XCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-xs sm:text-sm text-[#232323] mb-0.5">
                          {gap.title}
                        </h4>
                        <p className="text-xs text-[#474747] leading-tight">
                          {gap.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="border-2 border-[#e24e1b] shadow-xl bg-gradient-to-br from-orange-50 to-white">
          <CardContent className="p-3 sm:p-6">
            <div className="text-center mb-3 sm:mb-4">
              <Badge className="bg-[#e24e1b] text-white text-xs px-3 py-1 mb-2 sm:mb-3">
                💡 DIE LÖSUNG
              </Badge>

              <div className={cn(
                "inline-flex items-center gap-2 px-3 py-2 sm:px-6 sm:py-3 rounded-xl bg-gradient-to-r text-white mb-2 sm:mb-3 shadow-lg max-w-full",
                packageDetails.color
              )}>
                <Icon className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <div className="text-left flex-1 min-w-0">
                  <div className="text-xs opacity-90">Empfohlen:</div>
                  <div className="font-bold text-sm sm:text-lg">{packageDetails.name}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-lg sm:text-2xl font-bold">{packageDetails.price}</div>
                  <div className="text-xs opacity-90">/Monat</div>
                </div>
              </div>

              {gapsSolvedByPackage.length > 0 && (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-green-100 text-green-800 rounded-lg text-xs sm:text-sm font-semibold"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  Löst {gapsSolvedByPackage.length} von {allMajorGaps.length} Risiken
                </motion.div>
              )}
            </div>

            {gapsSolvedByPackage.length > 0 && (
              <div className="bg-white rounded-lg p-2.5 sm:p-4 mb-3 sm:mb-4 border border-gray-200">
                <h4 className="text-xs sm:text-sm font-bold text-[#232323] mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                  <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#39B37B]" />
                  Diese Risiken werden gelöst:
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {gapsSolvedByPackage.map((gap, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + idx * 0.1 }}
                      className="flex items-start gap-1.5 sm:gap-2 text-xs"
                    >
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#39B37B]" />
                      </div>
                      <span className="text-[#232323] leading-tight">{gap.solution || gap.title}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
              <a
                href="/beta"
                className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl border-2 border-[#e24e1b] bg-gradient-to-br from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2">🚀</div>
                <div className="text-sm sm:text-lg font-bold mb-0.5 sm:mb-1">BETA</div>
                <div className="text-xs opacity-90 mb-2 sm:mb-3">Kostenlos registrieren</div>
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/20 rounded-lg text-xs font-semibold group-hover:bg-white/30 transition-colors">
                  Jetzt starten
                </div>
              </a>

              <a
                href="https://calendly.com/marsstein-info/marsstein-intro"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 sm:p-6 rounded-xl border-2 border-gray-300 bg-white hover:border-[#e24e1b] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2">📅</div>
                <div className="text-sm sm:text-lg font-bold mb-0.5 sm:mb-1 text-[#232323]">BERATUNG</div>
                <div className="text-xs text-[#474747] mb-2 sm:mb-3">15min Termin</div>
                <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-100 rounded-lg text-xs font-semibold text-[#232323] group-hover:bg-[#e24e1b] group-hover:text-white transition-colors">
                  Termin buchen
                </div>
              </a>
            </div>

            <Button
              onClick={handleRestart}
              variant="outline"
              size="sm"
              className="w-full border-2 border-gray-300"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Assessment erneut durchführen
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const currentCat = categories[currentCategory];
  const visibleQuestions = getVisibleQuestions(currentCat);
  const currentQ = visibleQuestions[currentQuestion];
  const CategoryIcon = currentCat.icon;

  const totalVisibleQuestions = categories.reduce((sum, cat) =>
    sum + getVisibleQuestions(cat).length, 0
  );
  const questionsAnswered = categories.slice(0, currentCategory).reduce((sum, cat) =>
    sum + getVisibleQuestions(cat).length, 0
  ) + currentQuestion;
  const progress = ((questionsAnswered + 1) / totalVisibleQuestions) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto px-3 sm:px-0">
      <div className="mb-3 sm:mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm font-semibold text-[#474747]">
            Frage {questionsAnswered + 1} von {totalVisibleQuestions}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#e24e1b]">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c]"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={`${currentCategory}-${currentQuestion}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          <Card className="border-2 border-gray-200 shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <div className="mb-4">
                <Badge className={cn("bg-gradient-to-r text-white", currentCat.color)}>
                  <CategoryIcon className="h-3 w-3 mr-1" />
                  {currentCat.title}
                </Badge>
              </div>

              <div className="mb-6">
                <h2 className="text-base sm:text-lg font-bold text-[#232323] mb-2">
                  {currentQ.question}
                </h2>
                <p className="text-xs sm:text-sm text-[#474747]">
                  {currentQ.description}
                </p>
              </div>

              <div className="space-y-2">
                {currentQ.options.map((option, idx) => {
                  const OptionIcon = option.icon;
                  const isSelected = answers[currentQ.id] === option.value;

                  return (
                    <motion.button
                      key={option.value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                      onClick={() => handleAnswer(option.value)}
                      className={cn(
                        "w-full p-3 rounded-lg border-2 transition-all duration-300 text-left group",
                        isSelected
                          ? "border-[#e24e1b] bg-[#e24e1b]/5"
                          : "border-gray-200 hover:border-[#e24e1b]/50 hover:shadow-md"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <OptionIcon className="h-5 w-5 text-[#e24e1b] flex-shrink-0" />
                        <span className="text-sm font-medium text-[#232323]">
                          {option.label}
                        </span>
                        {isSelected && (
                          <Check className="h-5 w-5 text-[#e24e1b] ml-auto flex-shrink-0" />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {(currentQuestion > 0 || currentCategory > 0) && (
                <div className="mt-4">
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    size="sm"
                    className="border-2 border-gray-300"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Zurück
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};