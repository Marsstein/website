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
  RefreshCw,
  Euro,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const SolutionSection: React.FC = () => {

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

          {/* Before/After Transformation - Abschnitt B */}
          <div className="mb-20">
            {/* Modern Comparison Cards */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Before Card */}
              <Card className="relative overflow-hidden border-2 border-red-200 dark:border-red-800 hover:shadow-2xl transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-red-100 dark:from-red-950/30 dark:via-orange-950/30 dark:to-red-950/40" />
                <div className="relative p-8 space-y-6">
                  {/* Header */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/50 border border-red-200 dark:border-red-800 mb-4">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      <Badge variant="destructive" className="bg-transparent border-none text-red-700 dark:text-red-300 p-0">
                        Vorher
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-red-700 transition-colors">
                      Manuelle Prozesse
                    </h3>
                  </div>

                  {/* Metrics Grid */}
                  <div className="space-y-4">
                    {[
                      { label: "Audit-Vorbereitung", value: "120+ Stunden", icon: Clock },
                      { label: "Automatisierung", value: "15%", icon: RefreshCw },
                      { label: "Fehlerrate", value: "23%", icon: TrendingUp },
                      { label: "Stress-Level", value: "Maximum", icon: Target }
                    ].map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/80 dark:bg-gray-900/80 rounded-xl backdrop-blur-sm border border-red-100 dark:border-red-900/30 hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                            <metric.icon className="h-5 w-5 text-red-600" />
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white">{metric.label}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-red-600">{metric.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity animate-pulse" />
              </Card>

              {/* After Card */}
              <Card className="relative overflow-hidden border-2 border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-500 group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 dark:from-green-950/30 dark:via-emerald-950/30 dark:to-green-950/40" />
                <div className="relative p-8 space-y-6">
                  {/* Header */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/50 border border-green-200 dark:border-green-800 mb-4">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <Badge className="bg-transparent border-none text-green-700 dark:text-green-300 p-0">
                        Nachher
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-700 transition-colors">
                      Mit Marsstein
                    </h3>
                  </div>

                  {/* Metrics Grid */}
                  <div className="space-y-4">
                    {[
                      { label: "Audit-Vorbereitung", value: "30 Minuten", icon: Clock },
                      { label: "Automatisierung", value: "95%", icon: RefreshCw },
                      { label: "Fehlerrate", value: "<1%", icon: TrendingUp },
                      { label: "Stress-Level", value: "Minimal", icon: Target }
                    ].map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/80 dark:bg-gray-900/80 rounded-xl backdrop-blur-sm border border-green-100 dark:border-green-900/30 hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 hover:scale-[1.02]">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                            <metric.icon className="h-5 w-5 text-green-600" />
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white">{metric.label}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xl font-bold text-green-600">{metric.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity animate-pulse" />
              </Card>

              {/* Central Transform Arrow */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-brand-red to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
                    <ArrowRight className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-green-600 rounded-full animate-ping opacity-30" />
                </div>
              </div>

              {/* Improvement Indicators */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 hidden lg:flex items-center gap-2 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-xl border border-gray-200 dark:border-gray-700">
                <Sparkles className="h-4 w-4 text-green-600 animate-pulse" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">400% Effizienzsteigerung</span>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-lg bg-card text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="inline-flex p-4 rounded-full mb-4 bg-green-100 dark:bg-green-900/30">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">400% Effizienzsteigerung</h3>
                <p className="text-gray-600 dark:text-gray-400">Automatisierte Prozesse steigern die Produktivität um das Vierfache</p>
              </div>
              
              <div className="rounded-lg bg-card text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="inline-flex p-4 rounded-full mb-4 bg-blue-100 dark:bg-blue-900/30">
                  <Euro className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">€50k+ Kostenoptimierung/Jahr</h3>
                <p className="text-gray-600 dark:text-gray-400">Reduzierte Personalkosten, minimierte Compliance-Risiken, weniger externe Beratung</p>
              </div>
              
              <div className="rounded-lg bg-card text-card-foreground shadow-sm p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="inline-flex p-4 rounded-full mb-4 bg-purple-100 dark:bg-purple-900/30">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Strategischer Fokus</h3>
                <p className="text-gray-600 dark:text-gray-400">Mitarbeiter können sich auf wertschöpfende Tätigkeiten konzentrieren</p>
              </div>
            </div>

            {/* ROI Section - Integrated as part of transformation */}
            <div className="mt-16">
              <div className="rounded-lg bg-card text-card-foreground shadow-sm p-8 bg-gradient-to-r from-brand-red/5 to-green-500/5 border-2 border-brand-red/20">
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold">
                    Return on Investment
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-brand-red">
                        300%
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">ROI im ersten Jahr</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-green-600">
                        €75k
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Durchschnittliche Ersparnis</p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl font-bold text-blue-600">
                        6 Monate
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Break-Even Point</p>
                    </div>
                  </div>

                  <Link to="/contact?demo=true">
                    <Button 
                      size="lg" 
                      className="bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                    >
                      <Target className="mr-2 h-5 w-5" />
                      ROI-Analyse anfordern
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Modern Vertical Timeline Process */}
          <div className="relative max-w-5xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-red/10 to-orange-500/10 border border-brand-red/20 mb-6">
                <Target className="h-5 w-5 text-brand-red" />
                <span className="text-sm font-semibold text-brand-red">Intelligenter Prozess</span>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Marsstein Compliance-Plattform:
                <span className="bg-gradient-to-r from-brand-red via-red-600 to-orange-500 bg-clip-text text-transparent block"> 
                  Automatisiert und effizient
                </span>
              </h3>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Drei intelligente Schritte transformieren Ihre manuelle Compliance in ein automatisiertes System.
              </p>
            </div>

            {/* Vertical Timeline */}
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
                <div className="w-full h-full bg-gradient-to-b from-brand-red via-purple-500 to-green-500 rounded-full opacity-20"></div>
                <div className="absolute top-0 w-full bg-gradient-to-b from-brand-red via-purple-500 to-green-500 rounded-full animate-pulse" 
                     style={{ height: '0%', animation: 'timeline-progress 4s ease-in-out infinite' }}></div>
              </div>

              {/* Timeline Steps */}
              <div className="space-y-24">
                {steps.map((step, index) => (
                  <div key={index} className={cn(
                    "relative flex items-center",
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  )}>
                    {/* Content Card */}
                    <div className={cn(
                      "w-5/12 relative group",
                      index % 2 === 0 ? "pr-12" : "pl-12"
                    )}>
                      <Card className="p-8 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-2 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group-hover:border-brand-red/30">
                        <div className="space-y-6">
                          {/* Step Header */}
                          <div className="flex items-center gap-4">
                            <div className={cn(
                              "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110",
                              step.color
                            )}>
                              <step.icon className="h-8 w-8 text-white" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Badge className="bg-brand-red/10 text-brand-red border-brand-red/20">
                                  Schritt {step.number}
                                </Badge>
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                  {index + 1}/3
                                </div>
                              </div>
                              <h4 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand-red transition-colors">
                                {step.title}
                              </h4>
                            </div>
                          </div>

                          {/* Step Description */}
                          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                            {step.description}
                          </p>

                          {/* Interactive Progress Bar */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500 dark:text-gray-400">Fortschritt</span>
                              <span className="font-semibold text-brand-red">{Math.round((index + 1) / 3 * 100)}%</span>
                            </div>
                            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div 
                                className={cn(
                                  "h-full bg-gradient-to-r transition-all duration-1000 ease-out rounded-full",
                                  step.color
                                )}
                                style={{ 
                                  width: `${(index + 1) * 33.33}%`,
                                  boxShadow: `0 0 10px ${index === 0 ? '#3b82f6' : index === 1 ? '#8b5cf6' : '#10b981'}40`
                                }}
                              />
                            </div>
                          </div>

                          {/* Key Benefits */}
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { label: index === 0 ? "Zeitersparnis" : index === 1 ? "Automation" : "Überwachung", 
                                value: index === 0 ? "85%" : index === 1 ? "24/7" : "Real-time" },
                              { label: index === 0 ? "Genauigkeit" : index === 1 ? "Integration" : "Alerts", 
                                value: index === 0 ? "99%" : index === 1 ? "Nahtlos" : "Sofort" }
                            ].map((benefit, i) => (
                              <div key={i} className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                <div className="text-lg font-bold text-brand-red">{benefit.value}</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">{benefit.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Floating decoration */}
                        <div className={cn(
                          "absolute -top-4 w-8 h-8 rounded-full opacity-20 group-hover:opacity-40 transition-opacity animate-pulse",
                          index % 2 === 0 ? "-right-4" : "-left-4",
                          index === 0 ? "bg-gradient-to-br from-blue-500 to-purple-500" : 
                          index === 1 ? "bg-gradient-to-br from-purple-500 to-pink-500" : 
                          "bg-gradient-to-br from-green-500 to-teal-500"
                        )} />
                      </Card>

                      {/* Connection Arrow */}
                      <div className={cn(
                        "absolute top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 border-2 border-brand-red rounded-full flex items-center justify-center shadow-lg z-10",
                        index % 2 === 0 ? "-right-4" : "-left-4"
                      )}>
                        <ArrowRight className={cn(
                          "h-4 w-4 text-brand-red",
                          index % 2 !== 0 && "rotate-180"
                        )} />
                      </div>
                    </div>

                    {/* Central Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-brand-red to-red-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-20 animate-pulse">
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-red-600 rounded-full animate-ping opacity-30"></div>
                    </div>

                    {/* Visual Enhancement */}
                    <div className={cn(
                      "w-5/12 flex items-center justify-center",
                      index % 2 === 0 ? "pl-12" : "pr-12"
                    )}>
                      <div className="relative">
                        <div className={cn(
                          "w-32 h-32 rounded-3xl bg-gradient-to-br flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 group cursor-pointer",
                          step.color
                        )}>
                          <step.icon className="h-16 w-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        {/* Floating particles */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-bounce opacity-60" />
                        <div className="absolute -bottom-1 -left-2 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-50" />
                        <div className="absolute top-1/2 -left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-40" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Final CTA */}
              <div className="text-center mt-20 relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse shadow-lg"></div>
                <div className="pt-8">
                  <Link to="/contact?demo=true">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-brand-red via-red-600 to-orange-500 hover:from-brand-red/90 hover:via-red-600/90 hover:to-orange-500/90 text-white shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-500 group px-12 py-6 text-xl rounded-2xl"
                    >
                      <Zap className="mr-3 h-6 w-6 animate-pulse" />
                      Demo vereinbaren
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};