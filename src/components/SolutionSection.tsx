import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Brain,
  Clock,
  Target,
  TrendingUp,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const SolutionSection: React.FC = () => {
  const [activeComparison, setActiveComparison] = useState(0);

  const transformations = [
    {
      before: {
        icon: Clock,
        problem: 'Statt 120+ Stunden Audit-Vorbereitung',
        painIcon: RefreshCw,
        color: 'text-red-600'
      },
      after: {
        solution: 'In 30 Minuten audit-ready',
        icon: CheckCircle,
        color: 'text-green-600'
      },
      improvement: '95% Zeitersparnis'
    },
    {
      before: {
        icon: Shield,
        problem: 'Statt Bußgeld-Angst',
        painIcon: RefreshCw,
        color: 'text-red-600'
      },
      after: {
        solution: '100% DSGVO-Sicherheit',
        icon: CheckCircle,
        color: 'text-green-600'
      },
      improvement: 'Vollständige Compliance'
    },
    {
      before: {
        icon: Brain,
        problem: 'Statt unstrukturierter Dokumentation',
        painIcon: RefreshCw,
        color: 'text-red-600'
      },
      after: {
        solution: 'Alles zentral & aktuell',
        icon: CheckCircle,
        color: 'text-green-600'
      },
      improvement: 'Strukturierte Verwaltung'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'KI-gestützte Analyse',
      description: 'Automatisierte Dokumentenanalyse identifiziert Compliance-Lücken und generiert präzise Handlungsempfehlungen.',
      icon: Brain,
      color: 'from-blue-500 to-purple-600'
    },
    {
      number: '2',
      title: 'Integrierte Workflow-Automation',
      description: 'Nahtlose Automatisierung von der Dokumentenerstellung bis zur Audit-Berichterstattung.',
      icon: Zap,
      color: 'from-purple-500 to-pink-600'
    },
    {
      number: '3',
      title: 'Kontinuierliches Monitoring',
      description: 'Proaktive Überwachung gewährleistet kontinuierliche Compliance-Konformität.',
      icon: Shield,
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-brand-red/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-transparent to-green-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Die Lösung</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Intelligente Compliance-Lösung
              <br />
              <span className="bg-gradient-to-r from-brand-red to-red-600 bg-clip-text text-transparent">
                für moderne Unternehmen
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Marsstein automatisiert komplexe Compliance-Prozesse durch KI-gestützte 
              Technologie und ermöglicht effiziente, skalierbare Workflows.
            </p>
          </div>

          {/* Before/After Transformation Cards */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {transformations.map((transformation, index) => (
                <Card 
                  key={index}
                  className={cn(
                    "relative overflow-hidden border-2 transition-all duration-500 cursor-pointer",
                    "hover:shadow-xl hover:-translate-y-1",
                    "animate-slide-up opacity-0"
                  )}
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: 'forwards'
                  }}
                  onMouseEnter={() => setActiveComparison(index)}
                >
                  <div className="p-6 space-y-6">
                    {/* Before State */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                          <transformation.before.painIcon className="h-5 w-5 text-red-600" />
                        </div>
                        <Badge variant="secondary" className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300">
                          Vorher
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm line-through">
                        {transformation.before.problem}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <div className="p-3 bg-brand-red/10 rounded-full">
                        <ArrowRight className={cn(
                          "h-6 w-6 text-brand-red transition-transform duration-300",
                          activeComparison === index && "scale-110"
                        )} />
                      </div>
                    </div>

                    {/* After State */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                          <transformation.after.icon className="h-5 w-5 text-green-600" />
                        </div>
                        <Badge variant="secondary" className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                          Nachher
                        </Badge>
                      </div>
                      <p className="text-gray-900 dark:text-white font-semibold">
                        {transformation.after.solution}
                      </p>
                    </div>

                    {/* Improvement Badge */}
                    <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-brand-red" />
                        <span className="text-sm font-medium text-brand-red">
                          {transformation.improvement}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br from-brand-red/5 to-green-500/5 opacity-0 transition-opacity duration-300",
                    activeComparison === index && "opacity-100"
                  )} />
                </Card>
              ))}
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary">
                  <Target className="h-4 w-4" />
                  <span className="text-sm font-medium">Prozess</span>
                </div>
                <h3 className="text-3xl font-bold">
                  Marsstein Compliance-Plattform:
                  <span className="text-brand-red block"> Automatisiert und effizient</span>
                </h3>
              </div>
              
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center border-2 border-brand-red/20 group-hover:border-brand-red/40 transition-colors">
                          <span className="text-brand-red font-bold text-lg">{step.number}</span>
                        </div>
                        {index < steps.length - 1 && (
                          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-200 dark:bg-gray-700" />
                        )}
                      </div>
                    </div>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-brand-red transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact?demo=true">
                <Button 
                  size="lg" 
                  className="bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group mt-6"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Demo vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Visual Dashboard Mockup */}
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-2xl">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Live Dashboard
                    </h4>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-green-600 font-medium">Aktiv</span>
                    </div>
                  </div>

                  {/* Compliance Meter */}
                  <div className="text-center">
                    <div className="relative inline-flex items-center justify-center w-32 h-32">
                      <svg className="w-32 h-32 transform -rotate-90">
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-gray-200 dark:text-gray-700"
                        />
                        <circle
                          cx="64"
                          cy="64"
                          r="56"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 56}`}
                          strokeDashoffset={`${2 * Math.PI * 56 * 0.02}`}
                          className="text-brand-red transition-all duration-1000"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold text-brand-red">98%</span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">Compliant</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-200 dark:border-green-800">
                      <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-green-700 dark:text-green-300">Audit Ready</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                      <Shield className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-medium text-blue-700 dark:text-blue-300">Geschützt</p>
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 animate-slide-up">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Neue Richtlinie automatisch geprüft
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 animate-slide-up" style={{ animationDelay: '200ms' }}>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        KI-Empfehlung generiert
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 bg-green-100 dark:bg-green-900 rounded-full p-3 shadow-lg animate-float">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-100 dark:bg-blue-900 rounded-full p-3 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Brain className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};