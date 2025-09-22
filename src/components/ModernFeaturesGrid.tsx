import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Shield,
  Brain,
  Zap,
  Globe,
  FileCheck,
  Users,
  BarChart3,
  Lock,
  ArrowRight,
  Sparkles,
  Database,
  Settings,
  Eye,
  Blocks,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  gradient: string;
  href: string;
  badge?: string;
  stats?: { label: string; value: string };
  technologies?: string[];
}

const features: FeatureCard[] = [
  {
    id: 'ki-compliance-engine',
    title: 'KI-Compliance-Engine',
    description: 'Fortschrittliche Machine Learning Algorithmen analysieren kontinuierlich Ihre Compliance-Landschaft und identifizieren Optimierungspotenziale.',
    icon: Brain,
    gradient: 'from-purple-500/20 to-indigo-600/20',
    href: '/technologie/ki-engine',
    badge: 'Verfügbar',
    stats: { label: 'Genauigkeit', value: '99.7%' },
    technologies: ['Natural Language Processing', 'Predictive Analytics', 'Automated Risk Assessment']
  },
  {
    id: 'echtzeit-ueberwachung',
    title: 'Echtzeit-Überwachung',
    description: 'Live-Monitoring aller Compliance-Parameter mit intelligenten Benachrichtigungen und automatischen Korrekturvorschlägen.',
    icon: Eye,
    gradient: 'from-cyan-500/20 to-blue-600/20',
    href: '/technologie/monitoring',
    badge: 'Verfügbar',
    stats: { label: 'Uptime', value: '99.9%' },
    technologies: ['24/7 Monitoring', 'Smart Alerts', 'Auto-Remediation']
  },
  {
    id: 'quantum-safe',
    title: 'Quantum-Safe Verschlüsselung',
    description: 'Zukunftssichere Verschlüsselungstechnologien, die auch gegen Quantum-Computing-Angriffe resistent sind.',
    icon: Lock,
    gradient: 'from-emerald-500/20 to-green-600/20',
    href: '/technologie/verschluesselung',
    badge: 'Beta',
    stats: { label: 'Sicherheit', value: 'Military Grade' },
    technologies: ['Post-Quantum Cryptography', 'Zero-Knowledge Proofs', 'Homomorphic Encryption']
  },
  {
    id: 'multi-region',
    title: 'Multi-Region Compliance',
    description: 'Automatische Anpassung an lokale Gesetze und Vorschriften im DACH-Raum mit intelligenter Konfliktauflösung.',
    icon: Globe,
    gradient: 'from-blue-500/20 to-indigo-600/20',
    href: '/technologie/multi-region',
    badge: 'Verfügbar',
    stats: { label: 'Abdeckung', value: 'DACH + EU' },
    technologies: ['DACH Jurisdictions', 'Auto-Localization', 'Conflict Resolution']
  },
  {
    id: 'blockchain-audit',
    title: 'Blockchain Audit Trail',
    description: 'Unveränderliche Dokumentation aller Compliance-Aktivitäten mit kryptographisch gesicherten Audit-Trails.',
    icon: Blocks,
    gradient: 'from-amber-500/20 to-orange-600/20',
    href: '/technologie/blockchain',
    badge: 'Bald verfügbar',
    stats: { label: 'Integrität', value: '100%' },
    technologies: ['Immutable Records', 'Smart Contracts', 'Decentralized Verification']
  },
  {
    id: 'edge-computing',
    title: 'Edge Computing Analytics',
    description: 'Lokale Datenverarbeitung für sensitive Informationen mit Cloud-Integration für globale Insights.',
    icon: Database,
    gradient: 'from-red-500/20 to-rose-600/20',
    href: '/technologie/edge-computing',
    badge: 'Beta',
    stats: { label: 'Latenz', value: '<1ms' },
    technologies: ['Local Processing', 'Privacy-First', 'Cloud Sync']
  }
];

export const ModernFeaturesGrid: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Immediate loading - no animation delay
    const allIds = features.map(f => f.id);
    setVisibleCards(new Set(allIds));
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#E6F2FF] to-white relative overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-20 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors">
            <Sparkles className="w-3 h-3 mr-1" />
            Technologie der nächsten Generation
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Fortschrittliche
            <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              Technologien
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Entdecken Sie die fortschrittlichen Technologien, die Marsstein zur 
            innovativsten Compliance-Plattform des DACH-Raums machen.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.has(feature.id);
            
            return (
              <Card
                key={feature.id}
                id={feature.id}
                className="feature-card relative overflow-hidden bg-card border hover:shadow-lg transition-transform duration-150 cursor-pointer group"
              >
                <Link to={feature.href} className="block p-6 h-full">
                  {/* Simplified hover overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-50 transition-opacity duration-200",
                    feature.gradient
                  )} />

                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon and Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-150">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      {feature.badge && (
                        <Badge variant="secondary" className="text-xs">
                          {feature.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-150">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    {feature.technologies && (
                      <div className="mt-4 space-y-2">
                        <div className="flex flex-wrap gap-1">
                          {feature.technologies.map((tech, index) => (
                            <span 
                              key={index} 
                              className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Stats */}
                    {feature.stats && (
                      <div className="mt-4 p-3 rounded-lg bg-muted/50 group-hover:bg-muted/70 transition-colors duration-150">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{feature.stats.label}</span>
                          <span className="text-sm font-bold text-primary">{feature.stats.value}</span>
                        </div>
                      </div>
                    )}

                    {/* Hover indicator */}
                    <div className="mt-4 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                      <span className="text-sm font-medium mr-2">Erkunden</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center p-8 neomorphism rounded-2xl bg-card/80 backdrop-blur-sm">
            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-card-foreground">
                Bereit für die Zukunft der Compliance?
              </h3>
              <p className="text-muted-foreground">
                Starten Sie noch heute mit einer personalisierten Demo.
              </p>
              <Link to="/contact?demo=true">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground btn-modern"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Kostenlose Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};