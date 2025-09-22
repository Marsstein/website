import React, { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  TrendingUp,
  Brain,
  Zap,
  Clock,
  Euro,
  AlertTriangle,
  FileCheck,
  Eye,
  Database,
  Rocket
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TransformationCard {
  id: string;
  problem: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    impact: string;
    color: string;
    bgGradient: string;
  };
  solution: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    benefit: string;
    color: string;
    bgGradient: string;
  };
}

const transformationCards: TransformationCard[] = [
  {
    id: 'fines',
    problem: {
      icon: Euro,
      title: 'Massive Bußgelder',
      description: 'DSGVO-Verstöße können bis zu 4% des Jahresumsatzes oder 20 Millionen Euro kosten.',
      impact: 'Bis zu 20 Mio. €',
      color: 'text-red-600',
      bgGradient: 'from-red-500/10 to-orange-500/10'
    },
    solution: {
      icon: Shield,
      title: 'KI-gestützte Automatisierung',
      description: 'Vollautomatische Compliance-Überwachung und Dokumentation',
      benefit: '85% Zeitersparnis',
      color: 'text-emerald-600',
      bgGradient: 'from-emerald-500/10 to-green-500/10'
    }
  },
  {
    id: 'time',
    problem: {
      icon: Clock,
      title: 'Zeitaufwändige Prozesse',
      description: 'Manuelle Compliance-Vorbereitung verschwendet wertvolle Arbeitszeit und Ressourcen.',
      impact: '120+ Stunden/Audit',
      color: 'text-orange-600',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    },
    solution: {
      icon: Zap,
      title: 'Proaktive Compliance',
      description: 'Frühzeitige Warnung vor Verstößen und automatische Korrekturmaßnahmen',
      benefit: '99% Abdeckung',
      color: 'text-blue-600',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    }
  },
  {
    id: 'complexity',
    problem: {
      icon: TrendingUp,
      title: 'Regulatorische Komplexität',
      description: 'EU AI Act, NIS2, DORA - die Anzahl der Vorschriften wächst exponentiell.',
      impact: '12+ neue Gesetze/Jahr',
      color: 'text-amber-600',
      bgGradient: 'from-amber-500/10 to-orange-500/10'
    },
    solution: {
      icon: Brain,
      title: 'Kontinuierliche Verbesserung',
      description: 'Machine Learning optimiert Ihre Compliance-Prozesse kontinuierlich',
      benefit: '300% Effizienz',
      color: 'text-purple-600',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    }
  },
  {
    id: 'documentation',
    problem: {
      icon: FileCheck,
      title: 'Inkonsistente Dokumentation',
      description: 'Veraltete Richtlinien und fehlende Nachweise erschweren Audits erheblich.',
      impact: '67% unvollständig',
      color: 'text-red-600',
      bgGradient: 'from-red-500/10 to-pink-500/10'
    },
    solution: {
      icon: Database,
      title: 'Multi-Standard Support',
      description: 'DSGVO, ISO 27001, SOC 2, EU AI Act - alles in einer Plattform',
      benefit: '15+ Standards',
      color: 'text-indigo-600',
      bgGradient: 'from-indigo-500/10 to-blue-500/10'
    }
  }
];

export const ComplianceTransformation: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Calculate when section should be sticky
      const startSticky = rect.top <= 0;
      const endSticky = rect.bottom <= windowHeight;
      
      setIsSticky(startSticky && !endSticky);

      if (startSticky && !endSticky) {
        // Calculate scroll progress within the sticky section
        const scrolledDistance = Math.abs(rect.top);
        const totalScrollDistance = sectionHeight - windowHeight;
        const progress = Math.min(scrolledDistance / totalScrollDistance, 1);
        
        setScrollProgress(progress);
      } else if (!startSticky) {
        setScrollProgress(0);
      } else if (endSticky) {
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ minHeight: '400vh' }}
    >
      {/* Sticky Container */}
      <div className={cn(
        "w-full transition-all duration-300",
        isSticky 
          ? "fixed top-0 left-0 h-screen z-10" 
          : "relative h-screen"
      )}>
        {/* Background - Always present */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/50 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative w-full h-full flex flex-col justify-center px-4 py-16">
          <div className="container mx-auto max-w-7xl">
            {/* Header */}
            <div className="text-center mb-12 space-y-6">
              <Badge className={cn(
                "transition-all duration-500 text-sm",
                scrollProgress > 0.5 ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-red-500/10 text-red-600 border-red-500/20"
              )}>
                <AlertTriangle className="w-4 h-4 mr-1" />
                {scrollProgress > 0.5 ? "Lösungen verfügbar" : "Compliance Herausforderungen"}
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {scrollProgress < 0.5 ? (
                  <>Compliance kostet deutsche Unternehmen <span className="text-red-600">Milliarden</span></>
                ) : (
                  <>KI-Revolution für <span className="text-emerald-600">Compliance</span></>
                )}
              </h2>
              
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {scrollProgress < 0.5 
                  ? "Manuelle Prozesse, zeitaufwändige Audits und Regulierungs-Chaos verschlingen jährlich Milliardenbeträge"
                  : "Automatisierte Lösungen verwandeln Compliance-Herausforderungen in Wettbewerbsvorteile"
                }
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-12 max-w-md mx-auto">
              <div 
                className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Cards Grid - Fixed height container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {transformationCards.map((card, cardIndex) => {
                // Calculate card transformation timing
                const cardStartProgress = cardIndex / transformationCards.length;
                const cardEndProgress = (cardIndex + 1) / transformationCards.length;
                const cardProgress = Math.max(0, Math.min(1, (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress)));
                const showSolution = cardProgress > 0.3;
                
                return (
                  <div key={card.id} className="relative h-[380px]">
                    {/* Problem Card */}
                    <div
                      className={cn(
                        "absolute inset-0 transition-all duration-500",
                        showSolution ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
                      )}
                    >
                      <Card className={cn(
                        "w-full h-full p-6 border-2 flex flex-col",
                        `bg-gradient-to-br ${card.problem.bgGradient}`,
                        "border-red-200 hover:border-red-300 shadow-lg hover:shadow-xl transition-all duration-300"
                      )}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-xl bg-red-500/20 shrink-0">
                            <card.problem.icon className={cn("h-6 w-6", card.problem.color)} />
                          </div>
                          <Badge className="bg-red-500/10 text-red-600 border-red-500/20 text-sm shrink-0">
                            Problem
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                          {card.problem.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                          {card.problem.description}
                        </p>
                        
                        <div className="mt-auto pt-4 border-t border-red-200">
                          <div className="text-2xl font-black text-red-600 mb-1">
                            {card.problem.impact}
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                            Typische Kosten
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Solution Card */}
                    <div
                      className={cn(
                        "absolute inset-0 transition-all duration-500",
                        showSolution ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                      )}
                    >
                      <Card className={cn(
                        "w-full h-full p-6 border-2 flex flex-col",
                        `bg-gradient-to-br ${card.solution.bgGradient}`,
                        "border-emerald-200 hover:border-emerald-300 shadow-lg hover:shadow-xl transition-all duration-300"
                      )}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-3 rounded-xl bg-emerald-500/20 shrink-0">
                            <card.solution.icon className={cn("h-6 w-6", card.solution.color)} />
                          </div>
                          <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-sm shrink-0">
                            Lösung
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                          {card.solution.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                          {card.solution.description}
                        </p>
                        
                        <div className="mt-auto pt-4 border-t border-emerald-200">
                          <div className="text-2xl font-black text-emerald-600 mb-1">
                            {card.solution.benefit}
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                            Marsstein Vorteil
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Status Indicator */}
            <div className="text-center mt-12">
              <div
                className={cn(
                  "inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500",
                  scrollProgress > 0.5 
                    ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" 
                    : "bg-red-500/10 text-red-600 border border-red-500/20"
                )}
              >
                {scrollProgress > 0.5 ? (
                  <>
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-semibold">Probleme gelöst mit Marsstein</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-5 w-5" />
                    <span className="font-semibold">Typische DACH-Probleme</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Outside sticky container */}
      <div className="relative bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Card className="inline-block p-12 bg-white/80 backdrop-blur-sm border-white/60 shadow-xl max-w-4xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/50 via-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Transformation starten
                  </Badge>
                  
                  <h3 className="text-3xl font-bold text-gray-900">
                    Bereit für die <span className="text-emerald-600">Compliance-Revolution?</span>
                  </h3>
                  
                  <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Lassen Sie uns Ihre Compliance-Herausforderungen in effiziente, 
                    automatisierte Lösungen verwandeln. <span className="font-semibold text-gray-900">
                    Starten Sie noch heute mit einer kostenlosen Demo.</span>
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/contact?demo=true">
                    <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-600/90 hover:to-blue-600/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <Rocket className="mr-2 h-5 w-5" />
                      Kostenlose Demo starten
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <Link to="/tools">
                    <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300">
                      <Eye className="mr-2 h-5 w-5" />
                      Tools entdecken
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>Keine Kreditkarte nötig</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>Sofort einsatzbereit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>DACH-optimiert</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};