import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ShieldCheck, 
  Scale, 
  Users, 
  FileText, 
  Unlock,
  Zap,
  TrendingDown,
  CheckCircle,
  MessageSquare,
  Archive,
  Download,
  Sparkles
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: TrendingDown,
      titleKey: 'benefit_risk_title',
      descKey: 'benefit_risk_desc',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: Scale,
      titleKey: 'benefit_certainty_title',
      descKey: 'benefit_certainty_desc',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: MessageSquare,
      titleKey: 'benefit_consulting_title',
      descKey: 'benefit_consulting_desc',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Archive,
      titleKey: 'benefit_logs_title',
      descKey: 'benefit_logs_desc',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Download,
      titleKey: 'benefit_freedom_title',
      descKey: 'benefit_freedom_desc',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: Sparkles,
      titleKey: 'benefit_future_title',
      descKey: 'benefit_future_desc',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t('benefits_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of companies who trust Marsstein for their compliance needs across Europe.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden hover:shadow-medium transition-all duration-300 border-0 bg-gradient-card"
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-lg ${benefit.bgColor}`}>
                    <benefit.icon className={`h-6 w-6 ${benefit.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {t(benefit.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(benefit.descKey)}
                    </p>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 md:p-12 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">500+</div>
              <div className="text-sm opacity-90">Trusted Companies</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">99.9%</div>
              <div className="text-sm opacity-90">Uptime Guarantee</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};