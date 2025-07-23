import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle,
  Clock,
  Euro,
  Users,
  FileX,
  TrendingDown,
  Brain,
  ArrowRight,
  BarChart3,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const PainPointsSection: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const painPoints = [
    {
      icon: Euro,
      title: 'Bußgelder bis zu 20 Mio. €',
      description: 'DSGVO-Verstöße können erhebliche finanzielle Auswirkungen haben. Aufsichtsbehörden intensivieren ihre Prüfungsaktivitäten.',
      stat: '4% des Jahresumsatzes',
      impact: 'Hoch',
      color: 'red',
      iconBg: 'bg-red-500',
      cardBg: 'bg-red-50 dark:bg-red-950/10',
      borderColor: 'border-red-200 dark:border-red-800',
      hoverBorder: 'hover:border-red-400',
      statBg: 'bg-red-100 dark:bg-red-900/30',
      impactColor: 'text-red-700 dark:text-red-300'
    },
    {
      icon: Clock,
      title: 'Zeitaufwändige Audit-Vorbereitung',
      description: 'Umfangreiche manuelle Vorbereitung, dokumentenintensive Prozesse und hoher Personalaufwand bei jeder Prüfung.',
      stat: '120+ Stunden pro Audit',
      impact: 'Hoch',
      color: 'purple',
      iconBg: 'bg-purple-500',
      cardBg: 'bg-purple-50 dark:bg-purple-950/10',
      borderColor: 'border-purple-200 dark:border-purple-800',
      hoverBorder: 'hover:border-purple-400',
      statBg: 'bg-purple-100 dark:bg-purple-900/30',
      impactColor: 'text-purple-700 dark:text-purple-300'
    },
    {
      icon: FileX,
      title: 'Inkonsistente Dokumentation',
      description: 'Veraltete Richtlinien, fehlende Nachweise und inkonsistente Versionsstände erschweren die Compliance-Übersicht.',
      stat: '67% unvollständige Docs',
      impact: 'Mittel',
      color: 'orange',
      iconBg: 'bg-orange-500',
      cardBg: 'bg-orange-50 dark:bg-orange-950/10',
      borderColor: 'border-orange-200 dark:border-orange-800',
      hoverBorder: 'hover:border-orange-400',
      statBg: 'bg-orange-100 dark:bg-orange-900/30',
      impactColor: 'text-orange-700 dark:text-orange-300'
    },
    {
      icon: Users,
      title: 'Ressourcenintensive Prozesse',
      description: 'Fachkräfte verbringen übermäßig viel Zeit mit administrativen Tätigkeiten anstatt strategischen Aufgaben.',
      stat: '80% Routine-Arbeit',
      impact: 'Hoch',
      color: 'blue',
      iconBg: 'bg-blue-500',
      cardBg: 'bg-blue-50 dark:bg-blue-950/10',
      borderColor: 'border-blue-200 dark:border-blue-800',
      hoverBorder: 'hover:border-blue-400',
      statBg: 'bg-blue-100 dark:bg-blue-900/30',
      impactColor: 'text-blue-700 dark:text-blue-300'
    },
    {
      icon: TrendingDown,
      title: 'Reputations- und Haftungsrisiken',
      description: 'Compliance-Verstöße können erhebliche Auswirkungen auf Unternehmensreputation und Geschäftstätigkeit haben.',
      stat: '87% Kundenverlust',
      impact: 'Hoch',
      color: 'gray',
      iconBg: 'bg-gray-500',
      cardBg: 'bg-gray-50 dark:bg-gray-950/10',
      borderColor: 'border-gray-200 dark:border-gray-800',
      hoverBorder: 'hover:border-gray-400',
      statBg: 'bg-gray-100 dark:bg-gray-900/30',
      impactColor: 'text-gray-700 dark:text-gray-300'
    },
    {
      icon: Brain,
      title: 'Komplexe Regulierungslandschaft',
      description: 'EU AI Act, NIS2, DORA und weitere Vorschriften erfordern kontinuierliche Anpassung der Compliance-Strategie.',
      stat: '12+ neue Gesetze/Jahr',
      impact: 'Hoch',
      color: 'indigo',
      iconBg: 'bg-indigo-500',
      cardBg: 'bg-indigo-50 dark:bg-indigo-950/10',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      hoverBorder: 'hover:border-indigo-400',
      statBg: 'bg-indigo-100 dark:bg-indigo-900/30',
      impactColor: 'text-indigo-700 dark:text-indigo-300'
    }
  ];

  return (
    <section id="pain-points" className="py-20 md:py-28 relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-brand-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/30 text-brand-red border border-red-200 dark:border-red-800">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Herausforderungen</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Compliance-Herausforderungen
              <br />
              <span className="bg-gradient-to-r from-brand-red to-red-600 bg-clip-text text-transparent">
                kosten Zeit und Ressourcen
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Unternehmen investieren erhebliche Ressourcen in manuelle Compliance-Prozesse. 
              Diese Herausforderungen sind branchenübergreifend bekannt.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <Card 
                key={index}
                className={cn(
                  "group relative overflow-hidden transition-all duration-300 cursor-pointer",
                  "border-2 bg-white dark:bg-gray-900",
                  point.borderColor,
                  point.hoverBorder,
                  "hover:shadow-xl hover:-translate-y-1",
                  "animate-fade-in opacity-0"
                )}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Impact Badge */}
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant="secondary" 
                    className={cn(
                      "text-xs font-medium",
                      point.impactColor,
                      point.statBg,
                      "border-0"
                    )}
                  >
                    {point.impact}
                  </Badge>
                </div>

                <CardContent className="p-6">
                  {/* Icon with animated background */}
                  <div className="relative mb-6">
                    <div className={cn(
                      "inline-flex p-4 rounded-2xl text-white transition-all duration-300",
                      point.iconBg,
                      hoveredCard === index && "scale-110 shadow-lg"
                    )}>
                      <point.icon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                      {point.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {point.description}
                    </p>

                    {/* Statistics Bar */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          Auswirkung
                        </span>
                        <BarChart3 className={cn("h-4 w-4", point.impactColor)} />
                      </div>
                      
                      <div className={cn(
                        "relative p-4 rounded-xl border-2 border-dashed transition-all duration-300",
                        point.cardBg,
                        point.borderColor,
                        hoveredCard === index && "border-solid shadow-inner"
                      )}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={cn(
                              "w-2 h-2 rounded-full",
                              point.iconBg.replace('bg-', 'bg-'),
                              hoveredCard === index && "animate-pulse"
                            )} />
                            <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                              Kennzahl
                            </span>
                          </div>
                          <span className={cn(
                            "text-lg font-bold",
                            point.impactColor
                          )}>
                            {point.stat}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Subtle hover effect overlay */}
                <div className={cn(
                  "absolute inset-0 transition-all duration-300 pointer-events-none",
                  "bg-gradient-to-br from-transparent via-transparent to-black/5",
                  hoveredCard === index ? "opacity-100" : "opacity-0"
                )} />
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-brand-red/10 rounded-2xl">
                  <Zap className="h-8 w-8 text-brand-red" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Effizientere Compliance-Prozesse benötigt?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Marsstein bietet automatisierte Lösungen für diese Herausforderungen.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-brand-red animate-pulse" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};