import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingContent = () => {
  const { t } = useLanguage();

  const plans = [
    {
      name: 'Starter',
      popular: false,
      features: [
        'pricing_starter_feature_1',
        'pricing_starter_feature_2', 
        'pricing_starter_feature_3'
      ]
    },
    {
      name: 'Professional',
      popular: true,
      features: [
        'pricing_pro_feature_1',
        'pricing_pro_feature_2',
        'pricing_pro_feature_3',
        'pricing_pro_feature_4'
      ]
    },
    {
      name: 'Enterprise',
      popular: false,
      features: [
        'pricing_enterprise_feature_1',
        'pricing_enterprise_feature_2',
        'pricing_enterprise_feature_3',
        'pricing_enterprise_feature_4',
        'pricing_enterprise_feature_5'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          {t('pricing_title')}
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
          {t('pricing_subtitle')}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative p-8 ${plan.popular ? 'border-primary shadow-lg' : 'border-muted'}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {t('pricing_popular')}
                </div>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-primary mb-2">{plan.name}</h3>
              <div className="text-3xl font-bold text-foreground mb-2">
                {t('pricing_coming_soon_price')}
              </div>
              <p className="text-muted-foreground text-sm">{t('pricing_coming_soon_desc')}</p>
            </div>

            <div className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm">{t(feature)}</span>
                </div>
              ))}
            </div>

            <Link to="/contact" className="block">
              <Button 
                className={`w-full ${plan.popular ? 'bg-gradient-primary hover:opacity-90' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {t('pricing_request_info')}
              </Button>
            </Link>
          </Card>
        ))}
      </div>

      {/* Contact Section */}
      <div className="text-center bg-muted/50 rounded-lg p-12">
        <h2 className="text-2xl font-bold mb-4">{t('pricing_custom_title')}</h2>
        <p className="text-muted-foreground mb-6">{t('pricing_custom_desc')}</p>
        <Link to="/contact">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90">
            {t('pricing_contact_sales')}
          </Button>
        </Link>
      </div>
    </div>
  );
};

const Pricing = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <PricingContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Pricing;