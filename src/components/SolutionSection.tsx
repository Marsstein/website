import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Sparkles,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Brain,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const SolutionSection: React.FC = () => {
  const solutions = [
    {
      problem: 'Statt 120+ Stunden Audit-Vorbereitung',
      solution: 'In 30 Minuten audit-ready',
      icon: Clock,
      color: 'text-green-600'
    },
    {
      problem: 'Statt Bußgeld-Angst',
      solution: '100% DSGVO-Sicherheit',
      icon: Shield,
      color: 'text-blue-600'
    },
    {
      problem: 'Statt unstrukturierter Dokumentation',
      solution: 'Alles zentral & aktuell',
      icon: Brain,
      color: 'text-purple-600'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-brand-red/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-transparent to-brand-red/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400">
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

          {/* Transformation Visual */}
          <div className="mb-16">
            <Card className="p-8 md:p-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutions.map((item, index) => (
                  <div key={index} className="text-center space-y-4">
                    <div className="space-y-2">
                      <p className="text-gray-500 dark:text-gray-400 line-through">
                        {item.problem}
                      </p>
                      <ArrowRight className="h-6 w-6 mx-auto text-brand-red animate-pulse" />
                      <p className={cn("text-xl font-bold", item.color)}>
                        {item.solution}
                      </p>
                    </div>
                    <div className={cn(
                      "inline-flex p-4 rounded-full",
                      item.color.replace('text-', 'bg-') + '/10'
                    )}>
                      <item.icon className={cn("h-8 w-8", item.color)} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* How it works */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">
                Marsstein Compliance-Plattform:
                <span className="text-brand-red"> Automatisiert und effizient</span>
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                      <span className="text-brand-red font-bold">1</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">KI-gestützte Analyse</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Automatisierte Dokumentenanalyse identifiziert Compliance-Lücken und generiert präzise Handlungsempfehlungen.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                      <span className="text-brand-red font-bold">2</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Integrierte Workflow-Automation</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Nahtlose Automatisierung von der Dokumentenerstellung bis zur Audit-Berichterstattung.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                      <span className="text-brand-red font-bold">3</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Kontinuierliches Monitoring</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Proaktive Überwachung gewährleistet kontinuierliche Compliance-Konformität.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/contact?demo=true">
                <Button 
                  size="lg" 
                  className="bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Demo vereinbaren
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Visual representation */}
            <div className="relative">
              <Card className="p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-2xl">
                <div className="space-y-6">
                  {/* Animated compliance meter */}
                  <div className="text-center">
                    <div className="relative inline-flex items-center justify-center w-48 h-48">
                      <svg className="w-48 h-48 transform -rotate-90">
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          className="text-gray-200 dark:text-gray-700"
                        />
                        <circle
                          cx="96"
                          cy="96"
                          r="88"
                          stroke="currentColor"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 88}`}
                          strokeDashoffset={`${2 * Math.PI * 88 * 0.02}`}
                          className="text-brand-red transition-all duration-1000 animate-pulse"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-brand-red">98%</span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">Compliant</span>
                      </div>
                    </div>
                  </div>

                  {/* Feature highlights */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                      <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">Audit Ready</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-sm font-medium">Voll geschützt</p>
                    </div>
                  </div>

                  {/* Live updates */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 animate-slide-up">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm">Neue Richtlinie automatisch geprüft</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 animate-slide-up" style={{ animationDelay: '200ms' }}>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span className="text-sm">KI-Empfehlung generiert</span>
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