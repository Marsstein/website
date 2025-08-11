import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Brain,
  Shield,
  GraduationCap,
  FileCheck,
  Users,
  DollarSign,
  Scan,
  Lock,
  BookOpen,
  Award,
  Settings,
  TrendingUp,
  Sparkles,
  Zap,
  Globe,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Database
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('ai-audit');

  const mainFeatures = [
    {
      id: 'ai-audit',
      icon: Brain,
      title: 'KI-gestützte Audits',
      shortTitle: 'KI-Audits',
      description: 'Vision: Intelligente Analyse Ihrer Compliance-Dokumente',
      benefits: [
        'Ziel: Automatische Lückenanalyse in Minuten',
        'Geplant: Priorisierte Handlungsempfehlungen',
        'Roadmap: Kontinuierliche Verbesserungsvorschläge',
        'Partner: Validierung durch Compliance-Experten'
      ],
      stats: { value: 'Bis 90%', label: 'Potenzial für Zeitersparnis' },
      color: 'from-blue-600 to-purple-600',
      image: '/features/ai-audit.png',
      status: 'Beta'
    },
    {
      id: 'secure-vault',
      icon: Shield,
      title: 'Sicherer Dokument-Vault',
      shortTitle: 'Dokument-Vault',
      description: 'Standards: Verschlüsselte Speicherung in Europa geplant',
      benefits: [
        'Ziel: Ende-zu-Ende Verschlüsselung',
        'Roadmap: Nach ISO 27001 Standards',
        'Geplant: Automatische Versionierung',
        'Vision: Granulare Zugriffsrechte'
      ],
      stats: { value: 'DSGVO', label: 'Standards-konform entwickelt' },
      color: 'from-green-600 to-teal-600',
      image: '/features/vault.png',
      status: 'In Progress'
    },
    {
      id: 'monitoring',
      icon: Scan,
      title: 'Echtzeit-Monitoring',
      shortTitle: 'Monitoring',
      description: 'Roadmap: Proaktive Überwachung Ihrer Compliance',
      benefits: [
        'Vision: Automatisierte Scans',
        'Geplant: Intelligente Benachrichtigungen',
        'Ziel: Risiko-Dashboard',
        'Roadmap: Trend-Analysen'
      ],
      stats: { value: 'Continuous', label: 'Monitoring Vision' },
      color: 'from-orange-600 to-red-600',
      image: '/features/monitoring.png',
      status: 'Roadmap 2025'
    },
    {
      id: 'academy',
      icon: GraduationCap,
      title: 'Marsstein Academy',
      shortTitle: 'Academy',
      description: 'Konzept: Schulungen für Ihr gesamtes Team',
      benefits: [
        'Geplant: Interaktive Lernmodule',
        'Vision: Zertifizierte Kurse',
        'Ziel: Praxisnahe Webinare',
        'Konzept: Fortschritts-Tracking'
      ],
      stats: { value: 'Launch', label: 'Q3 2025 geplant' },
      color: 'from-purple-600 to-pink-600',
      image: '/features/academy.png',
      status: 'Q3 2025'
    }
  ];

  const additionalFeatures = [
    {
      icon: BarChart3,
      title: 'Detaillierte Reports',
      description: 'Vision: Audit-fertige Berichte auf Knopfdruck',
      highlight: 'In Dev'
    },
    {
      icon: Users,
      title: 'Team-Kollaboration',
      description: 'Geplant: Nahtlose Zusammenarbeit mit rollenbasiertem Zugriff',
      highlight: 'Beta'
    },
    {
      icon: Globe,
      title: 'Multi-Sprachen Support',
      description: 'Roadmap: Verfügbarkeit in europäischen Sprachen',
      highlight: '2025'
    },
    {
      icon: Zap,
      title: 'API & Integrationen',
      description: 'Konzept: Integration bestehender Tools',
      highlight: 'Roadmap'
    },
    {
      icon: Clock,
      title: 'Audit-Historie',
      description: 'Ziel: Lückenlose Dokumentation aller Änderungen',
      highlight: 'Beta'
    },
    {
      icon: Database,
      title: 'Daten-Export',
      description: 'Prinzip: Ihre Daten gehören Ihnen - jederzeit exportierbar',
      highlight: 'Core Value'
    }
  ];

  const activeFeature = mainFeatures.find(f => f.id === activeTab) || mainFeatures[0];

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-secondary/5 to-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Leistungsstarke Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Alles was Sie für
            <span className="bg-gradient-to-r from-brand-red to-brand-red/60 bg-clip-text text-transparent mx-2">
              mühelose Compliance
            </span>
            brauchen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Von KI-gestützten Audits bis zur sicheren Dokumentenverwaltung –
            eine Plattform für all Ihre Compliance-Anforderungen.
          </p>
        </div>

        {/* Main Features Tabs */}
        <div className="max-w-6xl mx-auto mb-20">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-auto p-2 bg-muted/50">
              {mainFeatures.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:shadow-lg transition-all duration-300"
                >
                  <feature.icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{feature.shortTitle}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {mainFeatures.map((feature) => (
              <TabsContent
                key={feature.id}
                value={feature.id}
                className="mt-8 animate-fade-in"
              >
                <Card className="overflow-hidden border-2 shadow-xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Content */}
                    <div className="p-8 lg:p-12 space-y-6">
                      <div className="space-y-4">
                        <div className={cn(
                          "inline-flex p-4 rounded-2xl bg-gradient-to-r text-white",
                          feature.color
                        )}>
                          <feature.icon className="h-8 w-8" />
                        </div>
                        <h3 className="text-3xl font-bold">{feature.title}</h3>
                        <p className="text-lg text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3">
                        {feature.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <Card className="inline-block p-6 bg-gradient-to-br from-muted/50 to-muted border-2">
                        <div className="flex items-center gap-4">
                          <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            {feature.stats.value}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {feature.stats.label}
                          </div>
                        </div>
                        <Badge variant="outline" className="mt-2 text-xs">
                          {feature.status}
                        </Badge>
                      </Card>

                      {/* CTA */}
                      <Link to="/features">
                        <Button className="group">
                          Mehr erfahren
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    {/* Image */}
                    <div className="relative bg-gradient-to-br from-muted to-muted/50 p-8 lg:p-12 flex items-center justify-center">
                      <div className="relative w-full max-w-md">
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full h-auto rounded-lg shadow-2xl"
                        />
                        <div className={cn(
                          "absolute -top-4 -right-4 w-24 h-24 rounded-full blur-2xl opacity-30",
                          `bg-gradient-to-r ${feature.color}`
                        )} />
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Additional Features Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-12">
            Und noch viel mehr...
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card
                key={index}
                className={cn(
                  "group hover:shadow-lg transition-all duration-300 hover:-translate-y-1",
                  "animate-slide-up opacity-0"
                )}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    {feature.highlight && (
                      <Badge variant="secondary" className="text-xs">
                        {feature.highlight}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link to="/features">
            <Button size="lg" variant="outline" className="group">
              Alle Features entdecken
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
