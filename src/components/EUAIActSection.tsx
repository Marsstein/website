import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Brain,
  AlertTriangle,
  CheckCircle2,
  Users,
  ArrowRight,
  FileCheck,
  Eye,
  Scale,
  Target,
  Zap,
  Activity,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePerformantAnimation, getOptimizedTransition, getGPUAcceleratedStyle } from '@/hooks/usePerformantAnimation';

interface AIRiskCategory {
  id: string;
  level: 'minimal' | 'limited' | 'high' | 'unacceptable';
  title: string;
  description: string;
  examples: string[];
  requirements: string[];
  riskScore: number;
  color: {
    bg: string;
    text: string;
    border: string;
    gradient: string;
  };
}

// Optimized Neural Network Component  
const NeuralNetwork: React.FC<{ intensity?: number }> = ({ intensity = 1 }) => {
  const [nodes, setNodes] = useState<Array<{id: number, x: number, y: number, active: boolean}>>([]);
  const [connections, setConnections] = useState<Array<{from: number, to: number, strength: number}>>([]);

  const animationConfig = useMemo(() => ({
    duration: 800,
    complexity: 'high' as const,
    enableFor: 'high-performance-only' as const
  }), []);

  const neuralAnimConfig = usePerformantAnimation(animationConfig);

  useEffect(() => {
    if (!neuralAnimConfig.shouldAnimate) {
      // Static fallback for low-performance devices
      const staticNodes = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: (i % 3) * 40 + 20,
        y: Math.floor(i / 3) * 40 + 30,
        active: i % 2 === 0
      }));
      setNodes(staticNodes);
      setConnections([]);
      return;
    }

    // Generate neural network nodes (reduced count for performance)
    const nodeCount = neuralAnimConfig.reducedComplexity ? 8 : 12;
    const newNodes = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      active: false
    }));

    // Generate connections (reduced for performance)
    const newConnections = [];
    const maxConnections = neuralAnimConfig.reducedComplexity ? 8 : 15;
    for (let i = 0; i < newNodes.length && newConnections.length < maxConnections; i++) {
      for (let j = i + 1; j < newNodes.length && newConnections.length < maxConnections; j++) {
        if (Math.random() < (neuralAnimConfig.reducedComplexity ? 0.2 : 0.3)) {
          newConnections.push({
            from: i,
            to: j,
            strength: Math.random()
          });
        }
      }
    }

    setNodes(newNodes);
    setConnections(newConnections);

    // Animate nodes with performance considerations
    const animationInterval = neuralAnimConfig.reducedComplexity ? 1200 : 800;
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => ({
        ...node,
        active: Math.random() < 0.3 * intensity
      })));
    }, animationInterval);

    return () => clearInterval(interval);
  }, [intensity, neuralAnimConfig.shouldAnimate, neuralAnimConfig.reducedComplexity]);

  return (
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Connections */}
        {connections.map((conn, i) => {
          const fromNode = nodes[conn.from];
          const toNode = nodes[conn.to];
          if (!fromNode || !toNode) return null;
          
          return (
            <line
              key={i}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="rgba(147, 51, 234, 0.3)"
              strokeWidth={conn.strength * 0.5}
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          );
        })}
        
        {/* Nodes */}
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r={node.active ? "1.5" : "1"}
            fill={node.active ? "#8B5CF6" : "#E0E7FF"}
            className="transition-all duration-300"
          />
        ))}
      </svg>
    </div>
  );
};

// Risk Thermometer Component
const RiskThermometer: React.FC<{ level: number, animated?: boolean }> = ({ level, animated = true }) => {
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayLevel(level);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setDisplayLevel(level);
    }
  }, [level, animated]);

  const getColor = (level: number) => {
    if (level >= 90) return 'from-red-500 to-red-600';
    if (level >= 70) return 'from-orange-500 to-red-500';
    if (level >= 40) return 'from-yellow-500 to-orange-500';
    return 'from-green-500 to-yellow-500';
  };

  return (
    <div className="relative w-6 h-32 bg-gray-200 rounded-full overflow-hidden">
      <div 
        className={cn(
          "absolute bottom-0 w-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-t",
          getColor(displayLevel)
        )}
        style={{ height: `${displayLevel}%` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 rounded-full" />
    </div>
  );
};

// AI Brain Component
const AIBrain: React.FC<{ active?: boolean }> = ({ active = false }) => {
  return (
    <div className="relative">
      <Brain 
        className={cn(
          "h-8 w-8 transition-all duration-1000",
          active ? "text-purple-500 scale-110" : "text-purple-400"
        )}
      />
      {active && (
        <>
          <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping" />
          <div className="absolute inset-0 bg-purple-500/30 rounded-full animate-pulse" />
        </>
      )}
    </div>
  );
};

const aiRiskCategories: AIRiskCategory[] = [
  {
    id: 'unacceptable',
    level: 'unacceptable',
    title: 'Unannehmbares Risiko',
    description: 'KI-Systeme, die vollständig verboten sind',
    examples: [
      'Soziale Bewertung durch öffentliche Stellen',
      'Biometrische Identifizierung in Echtzeit im öffentlichen Raum',
      'Manipulation von Verhalten durch unterschwellige Techniken'
    ],
    requirements: [
      'Vollständiges Verbot',
      'Keine Ausnahmen'
    ],
    riskScore: 100,
    color: {
      bg: 'bg-red-500/10',
      text: 'text-red-600',
      border: 'border-red-500/30',
      gradient: 'from-red-500/20 to-red-600/30'
    }
  },
  {
    id: 'high',
    level: 'high',
    title: 'Hohes Risiko',
    description: 'KI-Systeme mit strengen Compliance-Auflagen',
    examples: [
      'Biometrische Identifizierung und Kategorisierung',
      'Management kritischer Infrastruktur',
      'Bildung und Berufsausbildung',
      'Beschäftigung und Personalmanagement',
      'Kreditwürdigkeit und Versicherungen'
    ],
    requirements: [
      'Konformitätsbewertung',
      'CE-Kennzeichnung',
      'Risikomanagementsystem',
      'Datenqualität und -governance',
      'Dokumentation und Aufzeichnungen',
      'Transparenz und Bereitstellung von Informationen',
      'Menschliche Aufsicht',
      'Genauigkeit, Robustheit und Cybersicherheit'
    ],
    riskScore: 85,
    color: {
      bg: 'bg-orange-500/10',
      text: 'text-orange-600',
      border: 'border-orange-500/30',
      gradient: 'from-orange-500/20 to-red-500/30'
    }
  },
  {
    id: 'limited',
    level: 'limited',
    title: 'Begrenztes Risiko',
    description: 'KI-Systeme mit Transparenzpflichten',
    examples: [
      'Chatbots und Sprachassistenten',
      'Emotionserkennungssysteme',
      'Biometrische Kategorisierungssysteme',
      'KI-generierte Inhalte (Deepfakes)'
    ],
    requirements: [
      'Transparenzpflichten',
      'Nutzerinformation über KI-Einsatz',
      'Klare Kennzeichnung von KI-generierten Inhalten'
    ],
    riskScore: 45,
    color: {
      bg: 'bg-yellow-500/10',
      text: 'text-yellow-600',
      border: 'border-yellow-500/30',
      gradient: 'from-yellow-500/20 to-orange-500/30'
    }
  },
  {
    id: 'minimal',
    level: 'minimal',
    title: 'Minimales Risiko',
    description: 'KI-Systeme ohne spezielle Auflagen',
    examples: [
      'KI-gestützte Videospiele',
      'Spam-Filter',
      'Inventarverwaltungssysteme'
    ],
    requirements: [
      'Freiwillige Verhaltenskodizes',
      'Keine gesetzlichen Verpflichtungen'
    ],
    riskScore: 15,
    color: {
      bg: 'bg-green-500/10',
      text: 'text-green-600',
      border: 'border-green-500/30',
      gradient: 'from-green-500/20 to-yellow-500/30'
    }
  }
];

export const EUAIActSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(0); // Start with first category (unacceptable)
  const [isVisible, setIsVisible] = useState(false);
  const [brainActive, setBrainActive] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Performance optimizations
  const mainAnimConfig = usePerformantAnimation({
    duration: 600,
    complexity: 'medium',
    enableFor: 'all'
  });
  
  const complexAnimConfig = usePerformantAnimation({
    duration: 2000,
    complexity: 'high',
    enableFor: 'high-performance-only'
  });

  const gpuStyles = getGPUAcceleratedStyle(mainAnimConfig);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setBrainActive(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Only activate brain, no auto-rotation
      setBrainActive(true);
    }
  }, [isVisible]);

  const selectedRisk = aiRiskCategories[selectedCategory];

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden"
    >
      {/* Clean Background with Subtle Neural Networks */}
      <div className="absolute inset-0 -z-10">
        <NeuralNetwork intensity={isVisible ? 0.5 : 0} />
        
        {/* Subtle Gradient Accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-100/30 to-indigo-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-100/25 to-purple-100/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with AI Brain */}
        <div className="text-center mb-12 space-y-6">
          <div className="flex items-center justify-center mb-4">
            <AIBrain active={brainActive} />
          </div>
          
          <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20 text-sm backdrop-blur-sm">
            <Brain className="w-4 h-4 mr-1" />
            EU AI Act Compliance
          </Badge>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            <span className="block sm:hidden">KI-Risiko</span>
            <span className="hidden sm:block">KI-Risiko</span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block sm:inline"> Klassifizierung</span>
          </h2>
          
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            <span className="block sm:hidden">
              EU AI Act Compliance. Automatische Risikoklassifizierung für KI-Systeme.
            </span>
            <span className="hidden sm:block">
              Vollständige Unterstützung für die EU-Verordnung über Künstliche Intelligenz. 
              Automatische Risikoklassifizierung und Compliance-Management für KI-Systeme.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12 px-4">
          
          {/* Left: Risk Categories with Thermometers */}
          <div className="xl:col-span-2 space-y-4">
            <Card className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm border-white/60 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">KI-Risikoklassifizierung</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {aiRiskCategories.map((category, index) => {
                  const isActive = selectedCategory === index;
                  
                  return (
                    <div
                      key={category.id}
                      className={cn(
                        "p-4 rounded-lg border-2 transition-all duration-500 cursor-pointer",
                        isActive 
                          ? `bg-gradient-to-r ${category.color.gradient} ${category.color.border} shadow-lg scale-105` 
                          : "bg-gray-50 border-gray-200 hover:bg-gray-100"
                      )}
                      onClick={() => setSelectedCategory(index)}
                    >
                      <div className="flex items-center gap-4">
                        {/* Risk Thermometer */}
                        <div className="flex-shrink-0">
                          <RiskThermometer level={category.riskScore} animated={isActive} />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            {category.level === 'unacceptable' && <AlertTriangle className="h-5 w-5 text-red-400" />}
                            {category.level === 'high' && <AlertTriangle className="h-5 w-5 text-orange-400" />}
                            {category.level === 'limited' && <Eye className="h-5 w-5 text-yellow-400" />}
                            {category.level === 'minimal' && <CheckCircle2 className="h-5 w-5 text-green-400" />}
                            
                            <Badge className={cn(
                              "text-xs px-2 py-1",
                              isActive ? "bg-white/90 text-gray-900" : category.color.bg + " " + category.color.text
                            )}>
                              {category.riskScore}% RISK
                            </Badge>
                          </div>
                          
                          <h4 className={cn(
                            "font-semibold mb-1",
                            isActive ? "text-gray-900" : "text-gray-900"
                          )}>
                            {category.title}
                          </h4>
                          
                          <p className={cn(
                            "text-sm",
                            isActive ? "text-gray-700" : "text-gray-600"
                          )}>
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Right: Selected Category Details */}
          <div className="space-y-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-white/60 shadow-xl">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className={cn(
                    "p-2 rounded-lg",
                    selectedRisk.color.bg
                  )}>
                    {selectedRisk.level === 'unacceptable' && <AlertTriangle className="h-5 w-5 text-red-600" />}
                    {selectedRisk.level === 'high' && <AlertTriangle className="h-5 w-5 text-orange-600" />}
                    {selectedRisk.level === 'limited' && <Eye className="h-5 w-5 text-yellow-600" />}
                    {selectedRisk.level === 'minimal' && <CheckCircle2 className="h-5 w-5 text-green-600" />}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">
                    {selectedRisk.title}
                  </h4>
                </div>

                <div className="space-y-3">
                  <div>
                    <h5 className="text-sm font-semibold text-purple-600 mb-2">Beispiele:</h5>
                    <ul className="space-y-1">
                      {selectedRisk.examples.slice(0, 3).map((example, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <div className="w-1 h-1 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-sm font-semibold text-purple-600 mb-2">Anforderungen:</h5>
                    <ul className="space-y-1">
                      {selectedRisk.requirements.slice(0, 3).map((req, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <CheckCircle2 className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* AI Timeline */}
            <Card className="p-4 bg-white/80 backdrop-blur-sm border-white/60 shadow-xl">
              <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Activity className="h-4 w-4 text-purple-600" />
                EU AI Act Zeitplan
              </h4>
              <div className="space-y-2">
                {[
                  { date: 'Feb 2025', event: 'Verbotene KI-Systeme', status: 'active' },
                  { date: 'Aug 2026', event: 'Hochrisiko-KI-Systeme', status: 'upcoming' },
                  { date: 'Aug 2027', event: 'Vollständige Anwendung', status: 'upcoming' }
                ].map((milestone, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      milestone.status === 'active' ? "bg-purple-500" : "bg-gray-400"
                    )} />
                    <div className="flex-1">
                      <div className="text-xs font-medium text-gray-900">{milestone.date}</div>
                      <div className="text-xs text-gray-600">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center px-4">
          <Card className="inline-block p-4 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm border-white/60 shadow-xl max-w-3xl w-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50" />
            <div className="relative space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <AIBrain active={true} />
                <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20 text-xs sm:text-sm">
                  EU AI Act Ready 2025
                </Badge>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Bereit für KI-Compliance?
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                <span className="block sm:hidden">
                  Kostenlose KI-Bewertung nach EU AI Act Kriterien.
                  <span className="font-semibold text-gray-900"> Automatische Risikoklassifizierung inklusive.</span>
                </span>
                <span className="hidden sm:block">
                  Lassen Sie uns eine kostenlose Bewertung Ihrer KI-Systeme nach EU AI Act Kriterien durchführen.
                  <span className="font-semibold text-gray-900"> Automatische Risikoklassifizierung inklusive.</span>
                </span>
              </p>

              <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center">
                <Link to="/contact?demo=true" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-600/90 hover:to-pink-600/90 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <Brain className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    KI-Risiko Bewertung
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/ki/ki-risikoklassifizierung" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold border-2 border-purple-500 text-purple-600 hover:bg-purple-50 hover:border-purple-600 transition-all duration-300">
                    <Scale className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Mehr Details
                  </Button>  
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                  <span>Kostenlos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                  <span>Automatisiert</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" />
                  <span>EU-konform</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};