import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageCircle, 
  Search, 
  Brain, 
  Monitor,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MessageCircle,
      titleKey: 'how_step1_title',
      descKey: 'how_step1_desc',
      number: '01'
    },
    {
      icon: Search,
      titleKey: 'how_step2_title',
      descKey: 'how_step2_desc',
      number: '02'
    },
    {
      icon: Brain,
      titleKey: 'how_step3_title',
      descKey: 'how_step3_desc',
      number: '03'
    },
    {
      icon: Monitor,
      titleKey: 'how_step4_title',
      descKey: 'how_step4_desc',
      number: '04'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t('how_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From consultation to continuous monitoring - your journey to compliance made simple.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="relative z-10 group hover:shadow-medium transition-all duration-300 bg-background border-2 hover:border-primary/20">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-xl bg-gradient-primary mb-6 mt-4">
                      <step.icon className="h-8 w-8 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20">
                    <div className="w-8 h-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                )}

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <ArrowRight className="h-4 w-4 text-primary-foreground rotate-90" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-secondary rounded-full text-secondary-foreground">
            <CheckCircle className="h-5 w-5" />
            <span className="font-medium">Ready to get started? Let's ensure your compliance today.</span>
          </div>
        </div>
      </div>
    </section>
  );
};