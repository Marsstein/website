import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
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
  TrendingUp
} from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Brain,
      titleKey: 'feature_audit_title',
      descKey: 'feature_audit_desc',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Shield,
      titleKey: 'feature_vault_title', 
      descKey: 'feature_vault_desc',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: GraduationCap,
      titleKey: 'feature_academy_title',
      descKey: 'feature_academy_desc',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: FileCheck,
      titleKey: 'feature_reports_title',
      descKey: 'feature_reports_desc',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      titleKey: 'feature_teams_title',
      descKey: 'feature_teams_desc',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: DollarSign,
      titleKey: 'feature_pricing_title',
      descKey: 'feature_pricing_desc',
      gradient: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {t('features_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From AI-powered audits to secure document management, everything you need for comprehensive compliance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden hover:shadow-large transition-all duration-300 hover:-translate-y-1 bg-gradient-card border-0"
            >
              <CardContent className="p-8">
                {/* Icon with gradient background */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.gradient} mb-6`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional feature highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-3">
            <div className="inline-flex p-3 rounded-full bg-primary/10">
              <Scan className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold">Automated Scanning</h4>
            <p className="text-sm text-muted-foreground">Continuous monitoring of your compliance status</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="inline-flex p-3 rounded-full bg-secondary/10">
              <Lock className="h-6 w-6 text-secondary" />
            </div>
            <h4 className="font-semibold">EU Data Hosting</h4>
            <p className="text-sm text-muted-foreground">Your data never leaves European jurisdiction</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="inline-flex p-3 rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h4 className="font-semibold">Expert Validated</h4>
            <p className="text-sm text-muted-foreground">All recommendations reviewed by legal experts</p>
          </div>
        </div>
      </div>
    </section>
  );
};