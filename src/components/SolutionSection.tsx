import React, { useState, useEffect, useRef } from 'react';
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
  Users,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const SolutionSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timelineElement = timelineRef.current;
      const rect = timelineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when timeline is in view
      const timelineTop = rect.top;
      const timelineHeight = rect.height;
      
      // Start progress when timeline enters viewport, complete when it leaves
      const startPoint = windowHeight;
      const endPoint = -timelineHeight;
      
      if (timelineTop <= startPoint && timelineTop >= endPoint) {
        const progress = Math.max(0, Math.min(100, 
          ((startPoint - timelineTop) / (startPoint - endPoint)) * 100
        ));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

              {/* Simple Transformation Indicator */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden lg:block">
                <div className="flex flex-col items-center gap-2">
                  {/* Simple dots */}
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  {/* Transformation text */}
                  <div className="bg-white dark:bg-gray-900 px-3 py-1 rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Transformation</span>
                  </div>
                </div>
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
            <div ref={timelineRef} className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
                <div className="w-full h-full bg-gradient-to-b from-brand-red via-purple-500 to-green-500 rounded-full opacity-20"></div>
                <div 
                  className="absolute top-0 w-full bg-gradient-to-b from-brand-red via-purple-500 to-green-500 rounded-full transition-all duration-300" 
                  style={{ height: `${scrollProgress}%` }}
                ></div>
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
                      index % 2 === 0 ? "pr-8" : "pl-8"
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

                          {/* Enhanced Key Benefits */}
                          <div className="grid grid-cols-2 gap-4">
                            {[
                              { label: index === 0 ? "Zeitersparnis" : index === 1 ? "Automation" : "Überwachung", 
                                value: index === 0 ? "85%" : index === 1 ? "24/7" : "Real-time",
                                color: index === 0 ? "from-blue-500 to-purple-600" : index === 1 ? "from-purple-500 to-pink-600" : "from-green-500 to-teal-600",
                                icon: index === 0 ? Clock : index === 1 ? RefreshCw : Shield },
                              { label: index === 0 ? "Genauigkeit" : index === 1 ? "Integration" : "Alerts", 
                                value: index === 0 ? "99%" : index === 1 ? "Nahtlos" : "Sofort",
                                color: index === 0 ? "from-emerald-500 to-cyan-600" : index === 1 ? "from-orange-500 to-red-600" : "from-yellow-500 to-orange-600",
                                icon: index === 0 ? Target : index === 1 ? Zap : TrendingUp }
                            ].map((benefit, i) => (
                              <div key={i} className="group relative overflow-hidden">
                                <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-xl relative z-10">
                                  {/* Animated background gradient */}
                                  <div className={cn(
                                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl",
                                    benefit.color
                                  )} />
                                  
                                  {/* Icon */}
                                  <div className={cn(
                                    "w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300",
                                    benefit.color
                                  )}>
                                    <benefit.icon className="h-4 w-4 text-white" />
                                  </div>
                                  
                                  {/* Value with counter animation */}
                                  <div className="text-center relative">
                                    <div className={cn(
                                      "text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300",
                                      benefit.color
                                    )}>
                                      {benefit.value}
                                    </div>
                                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                                      {benefit.label}
                                    </div>
                                  </div>
                                  
                                  {/* Animated border glow */}
                                  <div className={cn(
                                    "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r p-[2px] -z-10",
                                    benefit.color
                                  )}>
                                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl" />
                                  </div>
                                </div>
                                
                                {/* Floating particles */}
                                <div className={cn(
                                  "absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-all duration-500",
                                  `bg-gradient-to-r ${benefit.color.split(' ')[0]} ${benefit.color.split(' ')[1]}`
                                )} />
                                <div className={cn(
                                  "absolute -bottom-1 -left-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-pulse transition-all duration-700",
                                  `bg-gradient-to-r ${benefit.color.split(' ')[0]} ${benefit.color.split(' ')[1]}`
                                )} />
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

                    {/* Dashboard Mockup */}
                    <div className={cn(
                      "w-7/12 flex items-center justify-center",
                      index % 2 === 0 ? "pl-24 xl:pl-32" : "pr-24 xl:pr-32"
                    )}>
                      <div className="relative w-full">
                        {/* Step 1: KI-Analyse Dashboard */}
                        {index === 0 && (
                          <Card className="w-full p-6 lg:p-8 bg-gradient-to-br from-white via-blue-50 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 border-2 border-blue-200 dark:border-blue-800 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-slide-in-right opacity-0" style={{ animationDelay: `${index * 300 + 400}ms`, animationFillMode: 'forwards' }}>
                            <div className="space-y-4">
                              {/* Header */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg animate-bounce-in" style={{ animationDelay: `${index * 300 + 600}ms` }}>
                                    <Brain className="h-5 w-5 text-blue-600" />
                                  </div>
                                  <span className="text-base font-semibold text-gray-900 dark:text-white">KI-Analyse Dashboard</span>
                                </div>
                                <div className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full animate-slide-in-left" style={{ animationDelay: `${index * 300 + 700}ms` }}>
                                  <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-blink"></div>
                                    <span className="text-xs text-blue-600 font-medium">Live</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Document Progress */}
                              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-blue-100 dark:border-blue-900/30 animate-scale-in" style={{ animationDelay: `${index * 300 + 800}ms` }}>
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Dokumentenanalyse</h4>
                                  <span className="text-xs text-gray-500">75%</span>
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full w-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-progress-bar" style={{ animationDelay: `${index * 300 + 1000}ms`, '--progress-width': '75%' }}></div>
                                  </div>
                                  <span className="text-sm font-bold text-blue-600">127/170</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Zap className="h-3 w-3 text-blue-600 animate-spin-slow" />
                                  <span className="text-xs text-blue-600">KI analysiert Dokumente...</span>
                                </div>
                              </div>

                              {/* Issues Grid */}
                              <div className="grid grid-cols-2 gap-3">
                                <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-3 text-center border border-red-200 dark:border-red-800 animate-scale-in hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: `${index * 300 + 900}ms` }}>
                                  <TrendingUp className="h-4 w-4 text-red-600 mx-auto mb-1" />
                                  <div className="text-xl font-bold text-red-600">23</div>
                                  <div className="text-xs text-red-500">Kritische Lücken</div>
                                </div>
                                <div className="bg-yellow-50 dark:bg-yellow-950/20 rounded-lg p-3 text-center border border-yellow-200 dark:border-yellow-800 animate-scale-in hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: `${index * 300 + 950}ms` }}>
                                  <Target className="h-4 w-4 text-yellow-600 mx-auto mb-1" />
                                  <div className="text-xl font-bold text-yellow-600">47</div>
                                  <div className="text-xs text-yellow-500">Empfehlungen</div>
                                </div>
                              </div>

                              {/* Live Recommendations */}
                              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: `${index * 300 + 1200}ms` }}>
                                <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Live KI-Empfehlungen</h4>
                                <div className="space-y-1.5">
                                  <div className="flex items-center gap-2 p-1.5 bg-blue-50 dark:bg-blue-950/20 rounded animate-recommendation-slide" style={{ animationDelay: `${index * 300 + 1300}ms` }}>
                                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-blink"></div>
                                    <span className="text-xs text-gray-600 dark:text-gray-300">DSGVO Art. 32 prüfen</span>
                                  </div>
                                  <div className="flex items-center gap-2 p-1.5 bg-green-50 dark:bg-green-950/20 rounded animate-recommendation-slide" style={{ animationDelay: `${index * 300 + 1400}ms` }}>
                                    <CheckCircle className="w-3 h-3 text-green-500" />
                                    <span className="text-xs text-gray-600 dark:text-gray-300">ISO 27001 konform</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card>
                        )}

                        {/* Step 2: Workflow Automation Dashboard */}
                        {index === 1 && (
                          <Card className="w-full p-6 lg:p-8 bg-gradient-to-br from-white via-purple-50 to-white dark:from-gray-900 dark:via-purple-950/20 dark:to-gray-900 border-2 border-purple-200 dark:border-purple-800 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-slide-in-left opacity-0" style={{ animationDelay: `${index * 300 + 400}ms`, animationFillMode: 'forwards' }}>
                            <div className="space-y-4">
                              {/* Header */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg animate-bounce-in" style={{ animationDelay: `${index * 300 + 600}ms` }}>
                                    <Zap className="h-5 w-5 text-purple-600" />
                                  </div>
                                  <span className="text-base font-semibold text-gray-900 dark:text-white">Workflow Automation</span>
                                </div>
                                <div className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full animate-slide-in-right" style={{ animationDelay: `${index * 300 + 700}ms` }}>
                                  <div className="flex items-center gap-1">
                                    <RefreshCw className="h-3 w-3 text-purple-600 animate-spin-slow" />
                                    <span className="text-xs text-purple-600 font-medium">Aktiv</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Automation Progress */}
                              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-purple-100 dark:border-purple-900/30 animate-scale-in" style={{ animationDelay: `${index * 300 + 800}ms` }}>
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Automatisierungsgrad</h4>
                                  <RefreshCw className="h-4 w-4 text-purple-600 animate-rotate-slow" />
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full w-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full animate-progress-bar" style={{ animationDelay: `${index * 300 + 1000}ms`, '--progress-width': '95%' }}></div>
                                  </div>
                                  <span className="text-xl font-bold text-purple-600">95%</span>
                                </div>
                              </div>

                              {/* Active Processes */}
                              <div className="grid grid-cols-3 gap-2">
                                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 text-center border border-green-200 dark:border-green-800 animate-scale-in" style={{ animationDelay: `${index * 300 + 1100}ms` }}>
                                  <div className="text-lg font-bold text-green-600">12</div>
                                  <div className="text-xs text-green-500">Berichte</div>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 text-center border border-blue-200 dark:border-blue-800 animate-scale-in" style={{ animationDelay: `${index * 300 + 1150}ms` }}>
                                  <div className="text-lg font-bold text-blue-600">8</div>
                                  <div className="text-xs text-blue-500">Audits</div>
                                </div>
                                <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-3 text-center border border-orange-200 dark:border-orange-800 animate-scale-in" style={{ animationDelay: `${index * 300 + 1200}ms` }}>
                                  <div className="text-lg font-bold text-orange-600">3</div>
                                  <div className="text-xs text-orange-500">Reviews</div>
                                </div>
                              </div>

                              {/* Live Timeline */}
                              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: `${index * 300 + 900}ms` }}>
                                <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Live Workflow Timeline</h4>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2 animate-workflow-item" style={{ animationDelay: `${index * 300 + 1100}ms` }}>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-xs text-gray-600 dark:text-gray-300 flex-1">Dokumentenerstellung</span>
                                    <CheckCircle className="h-3 w-3 text-green-500" />
                                  </div>
                                  
                                  <div className="flex items-center gap-2 animate-workflow-item" style={{ animationDelay: `${index * 300 + 1200}ms` }}>
                                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-spin-pulse"></div>
                                    <span className="text-xs text-gray-600 dark:text-gray-300 flex-1">Audit-Bericht wird generiert</span>
                                    <RefreshCw className="h-3 w-3 text-purple-500 animate-spin-slow" />
                                  </div>
                                  
                                  <div className="flex items-center gap-2 animate-workflow-item opacity-50" style={{ animationDelay: `${index * 300 + 1300}ms` }}>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                    <span className="text-xs text-gray-400 flex-1">Compliance-Review</span>
                                    <Clock className="h-3 w-3 text-gray-400" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card>
                        )}

                        {/* Step 3: Monitoring Dashboard */}
                        {index === 2 && (
                          <Card className="w-full p-6 lg:p-8 bg-gradient-to-br from-white via-green-50 to-white dark:from-gray-900 dark:via-green-950/20 dark:to-gray-900 border-2 border-green-200 dark:border-green-800 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] animate-slide-in-right opacity-0" style={{ animationDelay: `${index * 300 + 400}ms`, animationFillMode: 'forwards' }}>
                            <div className="space-y-4">
                              {/* Header */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg animate-bounce-in" style={{ animationDelay: `${index * 300 + 600}ms` }}>
                                    <Shield className="h-5 w-5 text-green-600" />
                                  </div>
                                  <span className="text-base font-semibold text-gray-900 dark:text-white">Live Monitoring</span>
                                </div>
                                <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 rounded-full animate-slide-in-left" style={{ animationDelay: `${index * 300 + 700}ms` }}>
                                  <div className="flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-blink"></div>
                                    <span className="text-xs text-green-600 font-medium">24/7</span>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Compliance Score */}
                              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4 backdrop-blur-sm border border-green-100 dark:border-green-900/30 animate-scale-in" style={{ animationDelay: `${index * 300 + 800}ms` }}>
                                <div className="flex items-center justify-between mb-2">
                                  <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400">Compliance Score</h4>
                                  <TrendingUp className="h-4 w-4 text-green-600" />
                                </div>
                                <div className="flex items-center gap-3 mb-2">
                                  <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div className="h-full w-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-full animate-progress-bar" style={{ animationDelay: `${index * 300 + 1000}ms`, '--progress-width': '98%' }}></div>
                                  </div>
                                  <span className="text-2xl font-bold text-green-600">98%</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Shield className="h-3 w-3 text-green-600" />
                                  <span className="text-xs text-green-600">Exzellenter Status</span>
                                </div>
                              </div>

                              {/* Status Grid */}
                              <div className="grid grid-cols-2 gap-3">
                                <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-3 text-center border border-green-200 dark:border-green-800 animate-scale-in hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: `${index * 300 + 900}ms` }}>
                                  <CheckCircle className="h-4 w-4 text-green-600 mx-auto mb-1" />
                                  <div className="text-xl font-bold text-green-600">15</div>
                                  <div className="text-xs text-green-500">Audits OK</div>
                                </div>
                                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-3 text-center border border-blue-200 dark:border-blue-800 animate-scale-in hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: `${index * 300 + 950}ms` }}>
                                  <Eye className="h-4 w-4 text-blue-600 mx-auto mb-1" />
                                  <div className="text-xl font-bold text-blue-600">127</div>
                                  <div className="text-xs text-blue-500">Prüfpunkte</div>
                                </div>
                              </div>

                              {/* Live Activity */}
                              <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3 backdrop-blur-sm border border-gray-200 dark:border-gray-700 animate-slide-up" style={{ animationDelay: `${index * 300 + 1200}ms` }}>
                                <h4 className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-2">Live Aktivitäten</h4>
                                <div className="space-y-1.5">
                                  <div className="flex items-center gap-2 p-1.5 bg-green-50 dark:bg-green-950/20 rounded animate-recommendation-slide" style={{ animationDelay: `${index * 300 + 1300}ms` }}>
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-blink"></div>
                                    <span className="text-xs text-gray-600 dark:text-gray-300">Audit erfolgreich</span>
                                  </div>
                                  <div className="flex items-center gap-2 p-1.5 bg-blue-50 dark:bg-blue-950/20 rounded animate-recommendation-slide" style={{ animationDelay: `${index * 300 + 1400}ms` }}>
                                    <Shield className="w-3 h-3 text-blue-500" />
                                    <span className="text-xs text-gray-600 dark:text-gray-300">Backup erstellt</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Card>
                        )}
                        
                        {/* Floating particles around dashboard */}
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