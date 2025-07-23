import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  Shield, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Play,
  Sparkles,
  Lock,
  Zap,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [isVideoHovered, setIsVideoHovered] = useState(false);

  const trustBadges = [
    { icon: Shield, label: 'DSGVO konform', color: 'text-green-600' },
    { icon: Award, label: 'ISO 27001', color: 'text-blue-600' },
    { icon: CheckCircle, label: 'EU AI Act ready', color: 'text-purple-600' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background pt-32 pb-24 md:pt-40 md:pb-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-red/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-brand-red/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Trust indicators */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="flex flex-wrap gap-3">
              {trustBadges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",
                    "border-2 hover:scale-105 transition-all duration-300 shadow-lg",
                    "animate-slide-up",
                    badge.color
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <badge.icon className="h-4 w-4" />
                  <span className="font-medium">{badge.label}</span>
                </Badge>
              ))}
            </div>
          </div>

          {/* Main content */}
          <div className="text-center space-y-8">
            {/* Headline */}
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-brand-charcoal via-brand-red to-brand-charcoal bg-clip-text text-transparent animate-gradient bg-300%">
                  Compliance
                </span>
                <br />
                <span className="text-foreground">so einfach wie nie</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Machen Sie Datenschutz, IT-Sicherheit und KI-Regulierung zum Wettbewerbsvorteil – 
                mit der führenden All-in-One Compliance-Plattform für Europa.
              </p>
            </div>

            {/* Value propositions */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="h-4 w-4 text-brand-red" />
                <span>90% schnellere Audits</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Lock className="h-4 w-4 text-brand-red" />
                <span>100% DSGVO-konform</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BarChart3 className="h-4 w-4 text-brand-red" />
                <span>50% weniger Compliance-Kosten</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact?demo=true">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-brand-red to-brand-red/80 hover:from-brand-red/90 hover:to-brand-red/70 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                  Kostenlose Demo buchen
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/features">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="group px-8 py-6 text-lg border-2 hover:bg-primary/5"
                  onMouseEnter={() => setIsVideoHovered(true)}
                  onMouseLeave={() => setIsVideoHovered(false)}
                >
                  <Play className={cn(
                    "mr-2 h-5 w-5 transition-all duration-300",
                    isVideoHovered && "scale-110 text-brand-red"
                  )} />
                  Plattform-Tour ansehen
                </Button>
              </Link>
            </div>

            {/* Demo preview */}
            <div className="pt-12 animate-slide-up">
              <Card className="relative mx-auto max-w-5xl overflow-hidden shadow-2xl border-2 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red to-transparent" />
                <div className="p-2">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src="/dashboard-preview.png"
                      alt="Marsstein Compliance Dashboard"
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    
                    {/* Floating feature cards */}
                    <div className="absolute top-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-3 shadow-xl animate-float">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm font-medium">Live-Monitoring aktiv</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg p-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                      <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-brand-red" />
                        <span className="text-sm font-medium">Vollständig geschützt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social proof */}
            <div className="pt-12 animate-fade-in">
              <p className="text-sm text-muted-foreground mb-6">
                Vertrauen von über 500+ Unternehmen in Europa
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <img src="/logos/company-1.svg" alt="Company 1" className="h-8" />
                <img src="/logos/company-2.svg" alt="Company 2" className="h-8" />
                <img src="/logos/company-3.svg" alt="Company 3" className="h-8" />
                <img src="/logos/company-4.svg" alt="Company 4" className="h-8" />
                <img src="/logos/company-5.svg" alt="Company 5" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};