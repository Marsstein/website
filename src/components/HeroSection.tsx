import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Award, CheckCircle, Play } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  const trustBadges = [
    { icon: Shield, label: 'GDPR Compliant' },
    { icon: Award, label: 'ISO 27001' },
    { icon: CheckCircle, label: 'Swiss DPA' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2">
              {trustBadges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="flex items-center gap-1 px-3 py-1 bg-background/50 backdrop-blur"
                >
                  <badge.icon className="h-3 w-3" />
                  {badge.label}
                </Badge>
              ))}
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
                {t('hero_headline')}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                {t('hero_subheadline')}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                {t('hero_cta')}
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                {t('hero_cta_secondary')}
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">
                {t('hero_trust')}
              </p>
              <div className="flex items-center gap-6 opacity-60">
                {/* Customer logos placeholder */}
                <div className="h-8 bg-muted rounded px-12 flex items-center justify-center text-xs font-medium">
                  Customer Logo
                </div>
                <div className="h-8 bg-muted rounded px-12 flex items-center justify-center text-xs font-medium">
                  Customer Logo
                </div>
                <div className="h-8 bg-muted rounded px-12 flex items-center justify-center text-xs font-medium">
                  Customer Logo
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-extra">
              <img
                src={heroImage}
                alt="Marsstein Dashboard"
                className="w-full h-auto"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-primary rounded-full opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-secondary rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};