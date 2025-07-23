import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  AlertTriangle,
  Clock,
  Euro,
  Users,
  FileX,
  TrendingDown,
  Brain,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const PainPointsSection: React.FC = () => {
  const painPoints = [
    {
      icon: Euro,
      title: 'Bußgelder bis zu 20 Mio. €',
      description: 'Ein einziger DSGVO-Verstoß kann Ihr Unternehmen ruinieren. Die Behörden werden strenger.',
      stat: '4% des Jahresumsatzes',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      borderColor: 'border-red-200 dark:border-red-900'
    },
    {
      icon: Clock,
      title: 'Zeitaufwändige Audit-Vorbereitung',
      description: 'Umfangreiche manuelle Vorbereitung, dokumentenintensive Prozesse und hoher Personalaufwand bei jeder Prüfung.',
      stat: '120+ Stunden pro Audit',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-900'
    },
    {
      icon: FileX,
      title: 'Inkonsistente Dokumentation',
      description: 'Veraltete Richtlinien, fehlende Nachweise und inkonsistente Versionsstände erschweren die Compliance-Übersicht.',
      stat: '67% unvollständige Docs',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-200 dark:border-orange-900'
    },
    {
      icon: Users,
      title: 'Ressourcenintensive Prozesse',
      description: 'Fachkräfte verbringen übermäßig viel Zeit mit administrativen Tätigkeiten anstatt strategischen Aufgaben.',
      stat: '80% Routine-Arbeit',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-900'
    },
    {
      icon: TrendingDown,
      title: 'Reputations- und Haftungsrisiken',
      description: 'Compliance-Verstöße können erhebliche Auswirkungen auf Unternehmensreputation und Geschäftstätigkeit haben.',
      stat: '87% Kundenverlust',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50 dark:bg-gray-950/20',
      borderColor: 'border-gray-200 dark:border-gray-900'
    },
    {
      icon: Brain,
      title: 'Komplexe Regulierungslandschaft',
      description: 'EU AI Act, NIS2, DORA und weitere Vorschriften erfordern kontinuierliche Anpassung der Compliance-Strategie.',
      stat: '12+ neue Gesetze/Jahr',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/20',
      borderColor: 'border-indigo-200 dark:border-indigo-900'
    }
  ];

  return (
    <section id="pain-points" className="py-20 md:py-28 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-950/30 text-brand-red">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Die harte Realität</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Diese Probleme kosten Sie
              <br />
              <span className="bg-gradient-to-r from-brand-red to-red-600 bg-clip-text text-transparent">
                Millionen und Ihre Nerven
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Compliance ohne die richtige Lösung ist wie ein Kampf gegen Windmühlen. 
              Erkennen Sie sich wieder?
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <Card 
                key={index}
                className={cn(
                  "group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl",
                  point.borderColor,
                  "border-2",
                  "animate-fade-in opacity-0"
                )}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={cn(
                    "inline-flex p-3 rounded-xl mb-4",
                    point.bgColor
                  )}>
                    <point.icon className={cn(
                      "h-6 w-6",
                      `bg-gradient-to-r ${point.color} bg-clip-text text-transparent`
                    )} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {point.description}
                  </p>

                  {/* Stat */}
                  <div className={cn(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium",
                    point.bgColor
                  )}>
                    <TrendingDown className="h-4 w-4" />
                    {point.stat}
                  </div>

                  {/* Hover effect */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    `bg-gradient-to-br ${point.color}`,
                    "opacity-5"
                  )} />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-2 border-red-200 dark:border-red-900">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-red/10 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-brand-red" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
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