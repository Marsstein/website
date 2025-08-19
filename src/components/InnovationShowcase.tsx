import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Brain,
  Zap,
  Shield,
  Globe,
  Cpu,
  Database,
  Network,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Code,
  Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';

interface Innovation {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
  features: string[];
  href: string;
  status: 'active' | 'beta' | 'coming-soon';
  metric?: { label: string; value: string };
}

const innovations: Innovation[] = [
  {
    id: 'ai-engine',
    title: 'KI-Compliance-Engine',
    description: 'Fortschrittliche Machine Learning Algorithmen analysieren kontinuierlich Ihre Compliance-Landschaft und identifizieren Optimierungspotenziale.',
    icon: Brain,
    gradient: 'from-purple-500/20 to-indigo-600/20',
    features: ['Natural Language Processing', 'Predictive Analytics', 'Automated Risk Assessment'],
    href: '/tools/compliance-ai-assistant',
    status: 'active',
    metric: { label: 'Genauigkeit', value: '99.7%' }
  },
  {
    id: 'real-time-monitoring',
    title: 'Echtzeit-Überwachung',
    description: 'Live-Monitoring aller Compliance-Parameter mit intelligenten Benachrichtigungen und automatischen Korrekturvorschlägen.',
    icon: Zap,
    gradient: 'from-amber-500/20 to-orange-600/20',
    features: ['24/7 Monitoring', 'Smart Alerts', 'Auto-Remediation'],
    href: '/dashboard',
    status: 'active',
    metric: { label: 'Uptime', value: '99.9%' }
  },
  {
    id: 'quantum-security',
    title: 'Quantum-Safe Verschlüsselung',
    description: 'Zukunftssichere Verschlüsselungstechnologien, die auch gegen Quantum-Computing-Angriffe resistent sind.',
    icon: Lock,
    gradient: 'from-cyan-500/20 to-blue-600/20',
    features: ['Post-Quantum Cryptography', 'Zero-Knowledge Proofs', 'Homomorphic Encryption'],
    href: '/branchen',
    status: 'beta',
    metric: { label: 'Sicherheit', value: 'Military Grade' }
  },
  {
    id: 'global-compliance',
    title: 'Multi-Region Compliance',
    description: 'Automatische Anpassung an lokale Gesetze und Vorschriften in über 50 Ländern mit intelligenter Konfliktauflösung.',
    icon: Globe,
    gradient: 'from-green-500/20 to-emerald-600/20',
    features: ['50+ Jurisdictions', 'Auto-Localization', 'Conflict Resolution'],
    href: '/regulierung/dsgvo',
    status: 'active',
    metric: { label: 'Abdeckung', value: '50+ Länder' }
  },
  {
    id: 'blockchain-audit',
    title: 'Blockchain Audit Trail',
    description: 'Unveränderliche Dokumentation aller Compliance-Aktivitäten mit kryptographisch gesicherten Audit-Trails.',
    icon: Network,
    gradient: 'from-rose-500/20 to-pink-600/20',
    features: ['Immutable Records', 'Smart Contracts', 'Decentralized Verification'],
    href: '/tools',
    status: 'coming-soon',
    metric: { label: 'Integrität', value: '100%' }
  },
  {
    id: 'edge-computing',
    title: 'Edge Computing Analytics',
    description: 'Lokale Datenverarbeitung für sensitive Informationen mit Cloud-Integration für globale Insights.',
    icon: Cpu,
    gradient: 'from-indigo-500/20 to-purple-600/20',
    features: ['Local Processing', 'Privacy-First', 'Cloud Sync'],
    href: '/wissen/ki-datenschutz',
    status: 'beta',
    metric: { label: 'Latenz', value: '<1ms' }
  }
];

const statusColors = {
  active: { bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-500/20' },
  beta: { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/20' },
  'coming-soon': { bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-500/20' }
};

const statusLabels = {
  active: 'Verfügbar',
  beta: 'Beta',
  'coming-soon': 'Bald verfügbar'
};

export const InnovationShowcase: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      innovations.forEach((innovation, index) => {
        setTimeout(() => {
          setVisibleCards(prev => new Set([...prev, innovation.id]));
        }, index * 200);
      });
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#E6F2FF] via-white to-[#E6F2FF]/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-liquid-morph" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-aurora" />
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--accent)) 1px, transparent 1px),
            linear-gradient(hsl(var(--accent)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <Badge className="bg-primary/10 text-primary border-primary/20 animate-pulse">
            <Code className="w-3 h-3 mr-1" />
            Innovation Lab
          </Badge>
          
          <h2 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-foreground",
            isVisible && "animate-text-reveal"
          )}>
            Technologie der
            <span className="block animate-gradient-flow bg-clip-text text-transparent">
              nächsten Generation
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie die fortschrittlichen Technologien, die Marsstein zur 
            innovativsten Compliance-Plattform Europas machen.
          </p>
        </div>

        {/* Innovation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon;
            const isCardVisible = visibleCards.has(innovation.id);
            const isHovered = hoveredCard === innovation.id;
            const statusStyle = statusColors[innovation.status];
            
            return (
              <Card
                key={innovation.id}
                className={cn(
                  "relative overflow-hidden neomorphism card-hover magnetic group cursor-pointer perspective-1000",
                  "bg-card/80 backdrop-blur-sm border border-white/20",
                  isCardVisible && "animate-slide-up-bounce"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredCard(innovation.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link to={innovation.href} className="block p-6 h-full">
                  {/* Gradient overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    innovation.gradient
                  )} />
                  
                  {/* 3D effect overlay */}
                  <div className="absolute inset-0 glass-effect opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 card-3d">
                        <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <Badge 
                        className={cn(
                          "text-xs animate-pulse",
                          statusStyle.bg,
                          statusStyle.text,
                          statusStyle.border
                        )}
                      >
                        {statusLabels[innovation.status]}
                      </Badge>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                        {innovation.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {innovation.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2">
                        {innovation.features.map((feature, featureIndex) => (
                          <div 
                            key={featureIndex}
                            className="flex items-center gap-2 text-xs text-muted-foreground"
                          >
                            <CheckCircle2 className="h-3 w-3 text-secondary" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Metric */}
                    {innovation.metric && (
                      <div className="mt-4 p-3 rounded-lg bg-muted/50 group-hover:bg-muted/70 transition-colors duration-300">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {innovation.metric.label}
                          </span>
                          <span className="text-sm font-bold text-primary">
                            {innovation.metric.value}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Hover indicator */}
                    <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      <span className="text-sm font-medium mr-2">Erkunden</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  
                  {/* Floating particles for hovered card */}
                  {isHovered && (
                    <>
                      {[...Array(6)].map((_, i) => (
                        <div
                          key={i}
                          className="particle animate-particle absolute pointer-events-none"
                          style={{
                            left: `${20 + Math.random() * 60}%`,
                            top: `${20 + Math.random() * 60}%`,
                            animationDelay: `${Math.random() * 2}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                          }}
                        />
                      ))}
                    </>
                  )}
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Technology Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'KI-Modelle', value: '50+', icon: Brain },
            { label: 'Datenquellen', value: '200+', icon: Database },
            { label: 'Algorithmen', value: '30+', icon: Cpu },
            { label: 'Patente', value: '12', icon: Shield }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <Card 
                key={stat.label}
                className={cn(
                  "p-6 text-center neomorphism-inset hover-lift",
                  isVisible && "animate-bounce-in"
                )}
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <StatIcon className="h-8 w-8 text-primary mx-auto mb-3 animate-float-gentle" />
                <div className="text-2xl font-bold text-card-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Innovation CTA */}
        <div className="text-center">
          <Card className="inline-flex items-center p-8 neomorphism bg-gradient-to-r from-card to-muted/30 hover-lift">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-primary/10 animate-breathe">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                  Innovation Leader
                </Badge>
              </div>
              
              <h3 className="text-2xl font-bold text-card-foreground">
                Erleben Sie die Zukunft der Compliance
              </h3>
              <p className="text-muted-foreground max-w-md">
                Testen Sie unsere innovativen Technologien und erleben Sie, 
                wie KI Ihre Compliance-Prozesse revolutioniert.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?demo=true">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground btn-modern magnetic">
                    <Brain className="mr-2 h-4 w-4 animate-pulse" />
                    KI-Demo erleben
                  </Button>
                </Link>
                <Link to="/wissen/ki-datenschutz">
                  <Button variant="outline" className="interactive-border magnetic">
                    Technologie lernen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};