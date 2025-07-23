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

          {/* Modern Before/After Transformation */}
          <div className="mb-20">
            <div className="relative">
              {/* Main transformation showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Before State - Left Side */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <Badge variant="destructive" className="mb-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800">
                      <RefreshCw className="h-3 w-3 mr-2" />
                      Aktuell
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Manuelle Compliance-Prozesse
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {transformations.map((transformation, index) => (
                      <Card 
                        key={index}
                        className="p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200 dark:border-red-800 hover:shadow-lg transition-all duration-300 animate-slide-up opacity-0"
                        style={{ 
                          animationDelay: `${index * 150}ms`,
                          animationFillMode: 'forwards'
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg flex-shrink-0">
                            <transformation.before.painIcon className="h-5 w-5 text-red-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 dark:text-gray-300 font-medium">
                              {transformation.before.problem}
                            </p>
                          </div>
                          <div className="text-red-600 font-semibold text-sm">
                            Zeitaufwändig
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Transformation Arrow - Center */}
                <div className="flex justify-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:z-10">
                  <div className="relative">
                    <div className="p-6 bg-gradient-to-r from-brand-red to-red-600 rounded-full shadow-2xl animate-pulse">
                      <ArrowRight className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <Badge className="bg-gradient-to-r from-brand-red to-red-600 text-white border-0">
                        <Sparkles className="h-3 w-3 mr-1" />
                        KI-Transformation
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* After State - Right Side */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <Badge className="mb-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                      <CheckCircle className="h-3 w-3 mr-2" />
                      Mit Marsstein
                    </Badge>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Automatisierte Compliance
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {transformations.map((transformation, index) => (
                      <Card 
                        key={index}
                        className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 animate-slide-up opacity-0"
                        style={{ 
                          animationDelay: `${(index + 3) * 150}ms`,
                          animationFillMode: 'forwards'
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg flex-shrink-0">
                            <transformation.after.icon className="h-5 w-5 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 dark:text-gray-300 font-medium">
                              {transformation.after.solution}
                            </p>
                          </div>
                          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {transformation.improvement}
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Success metrics */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800 hover:scale-105 transition-all duration-300">
                  <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                  <p className="text-gray-600 dark:text-gray-400">Zeitersparnis bei Audits</p>
                </Card>
                
                <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800 hover:scale-105 transition-all duration-300">
                  <div className="inline-flex p-3 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <p className="text-gray-600 dark:text-gray-400">DSGVO-Konformität</p>
                </Card>
                
                <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800 hover:scale-105 transition-all duration-300">
                  <div className="inline-flex p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">0</div>
                  <p className="text-gray-600 dark:text-gray-400">Manuelle Fehler</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Enhanced Process Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-red/10 to-red-600/10 border border-brand-red/20">
                  <Target className="h-4 w-4 text-brand-red" />
                  <span className="text-sm font-medium text-brand-red">Intelligenter Prozess</span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                  Marsstein Compliance-Plattform:
                  <span className="bg-gradient-to-r from-brand-red to-red-600 bg-clip-text text-transparent block"> 
                    Automatisiert und effizient
                  </span>
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Drei intelligente Schritte transformieren Ihre manuelle Compliance in ein automatisiertes System.
                </p>
              </div>
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div 
                    key={index} 
                    className="group relative animate-slide-up opacity-0"
                    style={{ 
                      animationDelay: `${(index + 6) * 200}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <div className={cn(
                            "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110",
                            step.color
                          )}>
                            <step.icon className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-red rounded-full flex items-center justify-center shadow-lg">
                            <span className="text-white font-bold text-sm">{step.number}</span>
                          </div>
                          {index < steps.length - 1 && (
                            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600" />
                          )}
                        </div>
                      </div>
                      <div className="space-y-3 pt-2 flex-1">
                        <div className="space-y-2">
                          <h4 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-brand-red transition-colors">
                            {step.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                        
                        {/* Progress indicator */}
                        <div className="flex items-center gap-2 mt-3">
                          <div className="h-1 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className={cn(
                                "h-full bg-gradient-to-r transition-all duration-1000 ease-out",
                                step.color,
                                "animate-pulse"
                              )}
                              style={{ 
                                width: `${(index + 1) * 33.33}%`,
                                animationDelay: `${(index + 6) * 200 + 500}ms`
                              }}
                            />
                          </div>
                          <span className="text-xs font-medium text-gray-500 dark:text-gray-400 whitespace-nowrap">
                            Schritt {index + 1}/3
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link to="/contact?demo=true">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-brand-red to-red-600 hover:from-brand-red/90 hover:to-red-600/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group px-8 py-6 text-lg"
                  >
                    <Zap className="mr-2 h-5 w-5 animate-pulse" />
                    Demo vereinbaren
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Enhanced Visual Dashboard Mockup */}
            <div className="relative animate-slide-in-right">
              <Card className="p-6 lg:p-8 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <div className="space-y-6">
                  {/* Enhanced Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-r from-brand-red to-red-600 rounded-lg">
                        <Shield className="h-5 w-5 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Live Compliance Dashboard
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 px-3 py-1 rounded-full border border-green-200 dark:border-green-800">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-xs text-green-600 font-medium">Live-Monitoring</span>
                    </div>
                  </div>

                  {/* Enhanced Compliance Meter */}
                  <div className="text-center relative">
                    <div className="relative inline-flex items-center justify-center w-40 h-40 mb-4">
                      <svg className="w-40 h-40 transform -rotate-90 drop-shadow-lg">
                        <defs>
                          <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#a1251b" />
                            <stop offset="100%" stopColor="#dc2626" />
                          </linearGradient>
                        </defs>
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          className="text-gray-200 dark:text-gray-700"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="70"
                          stroke="url(#progress-gradient)"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 70}`}
                          strokeDashoffset={`${2 * Math.PI * 70 * 0.02}`}
                          className="transition-all duration-2000 animate-pulse"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold bg-gradient-to-r from-brand-red to-red-600 bg-clip-text text-transparent animate-count-up">
                          98%
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                          Compliance Score
                        </span>
                      </div>
                    </div>
                    
                    {/* Metric badges */}
                    <div className="flex justify-center gap-2 mb-6">
                      <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        +15% heute
                      </Badge>
                      <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                        <Target className="h-3 w-3 mr-1" />
                        Ziel erreicht
                      </Badge>
                    </div>
                  </div>

                  {/* Enhanced Status Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="group text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-3 group-hover:animate-bounce" />
                      <p className="text-sm font-bold text-green-700 dark:text-green-300 mb-1">Audit Ready</p>
                      <p className="text-xs text-green-600 dark:text-green-400">Alle Prüfungen bestanden</p>
                    </div>
                    <div className="group text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3 group-hover:animate-bounce" />
                      <p className="text-sm font-bold text-blue-700 dark:text-blue-300 mb-1">Sicher</p>
                      <p className="text-xs text-blue-600 dark:text-blue-400">24/7 Überwacht</p>
                    </div>
                  </div>

                  {/* Enhanced Activity Feed */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Aktuelle Aktivitäten
                    </h5>
                    <div className="space-y-2 max-h-24 overflow-y-auto">
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border border-green-200 dark:border-green-800 animate-slide-up hover:shadow-md transition-all duration-300">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <Zap className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                          Neue Richtlinie automatisch geprüft
                        </span>
                        <span className="text-xs text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded-full">
                          vor 1 Min.
                        </span>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-800 animate-slide-up hover:shadow-md transition-all duration-300" style={{ animationDelay: '200ms' }}>
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        <Brain className="h-4 w-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                          KI-Empfehlung generiert
                        </span>
                        <span className="text-xs text-blue-600 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                          vor 3 Min.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Enhanced Floating elements */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 shadow-xl animate-float">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div className="absolute top-1/2 -right-4 bg-gradient-to-r from-brand-red to-red-600 rounded-xl p-3 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};