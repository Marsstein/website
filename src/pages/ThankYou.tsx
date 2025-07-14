import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Monitor, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ThankYou: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="shadow-lg">
          <CardHeader className="pb-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground mb-2">
              {t('thank_you_title')}
            </CardTitle>
            <p className="text-lg text-muted-foreground">
              {t('thank_you_subtitle')}
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t('thank_you_next_steps')}
              </h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  {t('thank_you_step_1')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  {t('thank_you_step_2')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  {t('thank_you_step_3')}
                </li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t('thank_you_demo_question')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('thank_you_demo_description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard" className="flex-1 sm:flex-initial">
                  <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-white">
                    <Monitor className="w-5 h-5 mr-2" />
                    {t('thank_you_view_demo')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                
                <Link to="/" className="flex-1 sm:flex-initial">
                  <Button variant="outline" size="lg" className="w-full">
                    <Home className="w-5 h-5 mr-2" />
                    {t('thank_you_back_home')}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-4 text-sm text-muted-foreground">
              <p>
                <strong>{t('thank_you_contact_info')}:</strong><br />
                📧 contact@marsstein.com<br />
                📞 +41 44 123 45 67<br />
                🕒 {t('thank_you_response_time')}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ThankYou;
