import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BookOpen, Users, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademyContent = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: BookOpen,
      titleKey: 'academy_feature_1_title',
      descKey: 'academy_feature_1_desc'
    },
    {
      icon: Users,
      titleKey: 'academy_feature_2_title', 
      descKey: 'academy_feature_2_desc'
    },
    {
      icon: Award,
      titleKey: 'academy_feature_3_title',
      descKey: 'academy_feature_3_desc'
    },
    {
      icon: Clock,
      titleKey: 'academy_feature_4_title',
      descKey: 'academy_feature_4_desc'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t('academy_title')}
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          {t('academy_subtitle')}
        </p>
        <Link to="/contact">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            {t('academy_cta')}
          </Button>
        </Link>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="p-6 text-center border-muted">
            <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{t(feature.titleKey)}</h3>
            <p className="text-muted-foreground text-sm">{t(feature.descKey)}</p>
          </Card>
        ))}
      </div>

      {/* Coming Soon Section */}
      <div className="text-center bg-muted/50 rounded-lg p-12">
        <h2 className="text-2xl font-bold mb-4">{t('academy_coming_soon')}</h2>
        <p className="text-muted-foreground mb-6">{t('academy_coming_soon_desc')}</p>
        <Link to="/contact">
          <Button variant="outline">
            {t('academy_notify_me')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Academy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AcademyContent />
      </main>
      <Footer />
    </div>
  );
};

export default Academy;