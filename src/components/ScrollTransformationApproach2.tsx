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

// APPROACH 2: Transform ohne Sticky CSS (eliminiert CSS Layout-Probleme)
export const ScrollTransformationApproach2: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [transformY, setTransformY] = useState(0);
  const [debugInfo, setDebugInfo] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !contentRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = scrollY + sectionRect.top;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Define animation range
      const animationStart = sectionTop - 64; // When section should start "sticking"
      const animationEnd = animationStart + (sectionHeight - windowHeight);
      
      // Calculate if we're in the animation range
      const isInRange = scrollY >= animationStart && scrollY <= animationEnd;
      
      if (isInRange) {
        // Calculate progress through the range
        const progressThroughRange = (scrollY - animationStart) / (animationEnd - animationStart);
        setScrollProgress(Math.max(0, Math.min(1, progressThroughRange)));
        
        // Instead of sticky, use transform to "pin" the content
        const scrollOffset = scrollY - animationStart;
        setTransformY(scrollOffset);
      } else if (scrollY < animationStart) {
        setScrollProgress(0);
        setTransformY(0);
      } else {
        setScrollProgress(1);
        setTransformY(animationEnd - animationStart);
      }
      
      // Debug info
      setDebugInfo(`Approach2 | ScrollY: ${Math.round(scrollY)} | Range: ${Math.round(animationStart)}-${Math.round(animationEnd)} | TransformY: ${Math.round(transformY)}`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [transformY]);

  return (
    <section 
      ref={sectionRef}
      className="relative h-[300vh]"
    >
      <div className="fixed top-4 left-4 z-50 bg-orange-600 text-white px-3 py-1 rounded text-sm">
        APPROACH 2: Transform statt Sticky
      </div>
      
      {/* Content that moves with transform instead of sticky */}
      <div 
        ref={contentRef}
        className="absolute top-0 left-0 right-0 h-screen"
        style={{
          transform: `translateY(${transformY}px)`,
          willChange: 'transform'
        }}
      >
        <div className="w-full h-full bg-white">
          <div className="container mx-auto max-w-6xl px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-6 space-y-3">
              <Badge className={cn(
                "transition-all duration-500 text-sm",
                scrollProgress > 0.5 ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-red-500/10 text-red-600 border-red-500/20"
              )}>
                <AlertTriangle className="w-4 h-4 mr-1" />
                {scrollProgress > 0.5 ? "Lösungen verfügbar" : "Compliance Herausforderungen"}
              </Badge>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {scrollProgress < 0.5 ? (
                  <>Compliance kostet deutsche Unternehmen <span className="text-red-600">Milliarden</span></>
                ) : (
                  <>KI-Revolution für <span className="text-emerald-600">Compliance</span></>
                )}
              </h2>
              
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                {scrollProgress < 0.5 
                  ? "Manuelle Prozesse, zeitaufwändige Audits und Regulierungs-Chaos verschlingen jährlich Milliardenbeträge"
                  : "Automatisierte Lösungen verwandeln Compliance-Herausforderungen in Wettbewerbsvorteile"
                }
              </p>
              
              <div className="text-xs text-gray-500 max-w-3xl mx-auto">
                Progress: {Math.round(scrollProgress * 100)}%<br/>
                {debugInfo}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-6 max-w-md mx-auto">
              <div 
                className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-150"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
              {transformationCards.map((card, cardIndex) => {
                const cardStartProgress = cardIndex / transformationCards.length;
                const cardEndProgress = (cardIndex + 1) / transformationCards.length;
                const cardProgress = Math.max(0, Math.min(1, (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress)));
                const showSolution = cardProgress > 0.3;
                
                return (
                  <div key={card.id} className="relative h-[140px]">
                    {/* Problem Card */}
                    <div
                      className={cn(
                        "absolute inset-0 transition-all duration-500",
                        showSolution ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
                      )}
                    >
                      <Card className={cn(
                        "w-full h-full p-3 border-2 flex flex-col",
                        `bg-gradient-to-br ${card.problem.bgGradient}`,
                        "border-red-200 hover:border-red-300 shadow-md hover:shadow-lg transition-all duration-300"
                      )}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 rounded bg-red-500/20 shrink-0">
                            <card.problem.icon className={cn("h-4 w-4", card.problem.color)} />
                          </div>
                          <Badge className="bg-red-500/10 text-red-600 border-red-500/20 text-xs">
                            Problem
                          </Badge>
                        </div>
                        
                        <h3 className="text-sm font-bold text-gray-900 mb-1">
                          {card.problem.title}
                        </h3>
                        
                        <p className="text-xs text-gray-600 flex-1 line-clamp-2">
                          {card.problem.description}
                        </p>
                        
                        <div className="mt-2 pt-2 border-t border-red-200">
                          <div className="text-sm font-bold text-red-600">
                            {card.problem.impact}
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
                        "w-full h-full p-3 border-2 flex flex-col",
                        `bg-gradient-to-br ${card.solution.bgGradient}`,
                        "border-emerald-200 hover:border-emerald-300 shadow-md hover:shadow-lg transition-all duration-300"
                      )}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 rounded bg-emerald-500/20 shrink-0">
                            <card.solution.icon className={cn("h-4 w-4", card.solution.color)} />
                          </div>
                          <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-xs">
                            Lösung
                          </Badge>
                        </div>
                        
                        <h3 className="text-sm font-bold text-gray-900 mb-1">
                          {card.solution.title}
                        </h3>
                        
                        <p className="text-xs text-gray-600 flex-1 line-clamp-2">
                          {card.solution.description}
                        </p>
                        
                        <div className="mt-2 pt-2 border-t border-emerald-200">
                          <div className="text-sm font-bold text-emerald-600">
                            {card.solution.benefit}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Status Indicator */}
            <div className="text-center mb-6">
              <div
                className={cn(
                  "inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-500",
                  scrollProgress > 0.5 
                    ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" 
                    : "bg-red-500/10 text-red-600 border border-red-500/20"
                )}
              >
                {scrollProgress > 0.5 ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-sm font-semibold">Probleme gelöst mit Marsstein</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-4 w-4" />
                    <span className="text-sm font-semibold">Typische DACH-Probleme</span>
                  </>
                )}
              </div>
            </div>

            {/* CTA Section */}
            <div className={cn(
              "transition-all duration-500",
              scrollProgress > 0.7 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <Card className="p-6 bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200 shadow-lg">
                <div className="text-center space-y-4">
                  <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Transformation starten
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-gray-900">
                    Bereit für die <span className="text-emerald-600">Compliance-Revolution?</span>
                  </h3>
                  
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    APPROACH 2: Transform statt Sticky CSS für bessere Performance
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <Link to="/contact?demo=true">
                      <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2 text-sm font-semibold shadow hover:shadow-lg transition-all">
                        <Rocket className="mr-2 h-4 w-4" />
                        Kostenlose Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};