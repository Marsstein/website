import React, { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Euro,
  Clock,
  TrendingDown,
  FileWarning,
  Zap,
  CheckCircle,
  Shield,
  Brain
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, useScroll, useTransform } from 'framer-motion';

const transformationCards = [
  {
    id: 'fines',
    problem: {
      icon: Euro,
      title: 'Massive Bußgelder',
      description: 'DSGVO-Verstöße können bis zu 4% des Jahresumsatzes oder 20 Millionen Euro kosten.',
      metric: 'Bis zu 20 Mio. €',
      color: 'red'
    },
    solution: {
      icon: Shield,
      title: 'Voller Schutz',
      description: 'Automatische Compliance-Überwachung verhindert Verstöße',
      metric: '100% konform',
      bgGradient: 'from-emerald-500 to-emerald-600',
      borderColor: 'border-emerald-500'
    }
  },
  {
    id: 'time',
    problem: {
      icon: Clock,
      title: 'Zeitaufwändige Prozesse',
      description: 'Manuelle Compliance-Vorbereitung verschwendet wertvolle Arbeitszeit und Ressourcen.',
      metric: '120+ Stunden/Audit',
      color: 'orange'
    },
    solution: {
      icon: Zap,
      title: 'Blitzschnell',
      description: 'KI-gestützte Automatisierung spart 95% der Zeit',
      metric: '< 6 Stunden',
      bgGradient: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-500'
    }
  },
  {
    id: 'complexity',
    problem: {
      icon: TrendingDown,
      title: 'Regulatorische Komplexität',
      description: 'EU AI Act, NIS2, DORA - die Anzahl der Vorschriften wächst exponentiell.',
      metric: '12+ neue Gesetze/Jahr',
      color: 'amber'
    },
    solution: {
      icon: Brain,
      title: 'KI-Intelligenz',
      description: 'Automatische Updates und Anpassungen an neue Regelungen',
      metric: 'Immer aktuell',
      bgGradient: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-500'
    }
  },
  {
    id: 'documentation',
    problem: {
      icon: FileWarning,
      title: 'Inkonsistente Dokumentation',
      description: 'Veraltete Richtlinien und fehlende Nachweise erschweren Audits erheblich.',
      metric: '67% unvollständig',
      color: 'red'
    },
    solution: {
      icon: CheckCircle,
      title: 'Perfekt dokumentiert',
      description: 'Zentrale Verwaltung mit automatischer Versionierung',
      metric: '100% nachweisbar',
      bgGradient: 'from-teal-500 to-teal-600',
      borderColor: 'border-teal-500'
    }
  }
];

export const ScrollTransformationNew: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Use framer motion scroll progress
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const progressWidth = useTransform(scrollYProgress, [0.2, 0.7], ["0%", "100%"]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Start animations when visible
          const timer = setTimeout(() => {
            setActiveCardIndex(0);
          }, 100);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setProgress(latest);
      
      // Update active card based on scroll
      if (latest < 0.3) {
        setActiveCardIndex(-1);
      } else if (latest < 0.45) {
        setActiveCardIndex(0);
      } else if (latest < 0.6) {
        setActiveCardIndex(1);
      } else if (latest < 0.75) {
        setActiveCardIndex(2);
      } else {
        setActiveCardIndex(3);
      }
    });
    
    return () => unsubscribe();
  }, [scrollYProgress, isVisible]);
  
  const showSolutions = progress > 0.5;
  
  return (
    <section 
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-8 space-y-4 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Badge className={cn(
            "transition-all duration-500",
            showSolutions ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-red-500/10 text-red-600 border-red-500/20"
          )}>
            {showSolutions ? "✓ Lösungen verfügbar" : "⚠ Compliance Herausforderungen"}
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {showSolutions ? (
              <>KI-gestützte <span className="text-emerald-600">Compliance</span>-Transformation</>
            ) : (
              <>Compliance kostet deutsche Unternehmen <span className="text-red-600">Milliarden</span></>
            )}
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {showSolutions 
              ? "Automatisierte Lösungen verwandeln Compliance-Herausforderungen in Wettbewerbsvorteile"
              : "Manuelle Prozesse, zeitaufwändige Audits und Regulierungs-Chaos verschlingen jährlich Milliardenbeträge"
            }
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-200 rounded-full mb-8 max-w-md mx-auto overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 rounded-full"
            style={{ width: progressWidth }}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-5xl mx-auto">
          {transformationCards.map((card, index) => {
            // Calculate individual card transformation progress
            const cardStartProgress = 0.3 + (index * 0.15); // Start at 0.3, each card 0.15 apart
            const cardEndProgress = cardStartProgress + 0.1; // Each card has 0.1 range for transformation
            const cardProgress = Math.max(0, Math.min(1, (progress - cardStartProgress) / (cardEndProgress - cardStartProgress)));
            const showSolution = cardProgress > 0.5;
            
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className={cn(
                  "relative overflow-hidden min-h-[240px] md:min-h-[220px] transition-all duration-500",
                  showSolution ? "scale-105" : "scale-100"
                )}>
                  {/* Problem State */}
                  <div className={cn(
                    "absolute inset-0 p-4 transition-all duration-500",
                    showSolution ? "opacity-0 scale-95" : "opacity-100 scale-100"
                  )}>
                    <Card className="w-full h-full p-6 border-2 border-red-100 bg-red-50/50">
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-red-100 flex-shrink-0">
                              <card.problem.icon className="w-5 h-5 text-red-600" />
                            </div>
                            <Badge variant="outline" className="text-xs bg-white border-red-200 text-red-700">
                              Problem
                            </Badge>
                          </div>
                          <div className="text-sm md:text-lg font-bold text-red-600 text-right whitespace-nowrap">
                            {card.problem.metric}
                          </div>
                        </div>
                        
                        <h3 className="font-semibold text-gray-900 text-lg mb-2">
                          {card.problem.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {card.problem.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                  
                  {/* Solution State */}
                  <div className={cn(
                    "absolute inset-0 p-4 transition-all duration-500",
                    showSolution ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  )}>
                    <Card className={cn(
                      "w-full h-full p-6 border-2",
                      `bg-gradient-to-br ${card.solution.bgGradient}`,
                      card.solution.borderColor
                    )}>
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-white/20 flex-shrink-0">
                              <card.solution.icon className="w-5 h-5 text-white" />
                            </div>
                            <Badge className="text-xs bg-white/20 border-white/30 text-white">
                              Lösung
                            </Badge>
                          </div>
                          <div className="text-sm md:text-lg font-bold text-white text-right whitespace-nowrap">
                            {card.solution.metric}
                          </div>
                        </div>
                        
                        <h3 className="font-semibold text-white text-lg mb-2">
                          {card.solution.title}
                        </h3>
                        <p className="text-sm text-white/90 leading-relaxed">
                          {card.solution.description}
                        </p>
                      </div>
                    </Card>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom text */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={showSolutions ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            ✓ Typische DACH-Probleme
          </Badge>
        </motion.div>
      </div>
    </section>
  );
};