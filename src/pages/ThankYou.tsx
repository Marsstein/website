import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Monitor, ArrowRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

export const ThankYou: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Danke – Ihre Anfrage wurde erfolgreich übermittelt"
        description="Vielen Dank für Ihre Anfrage. Unser Compliance-Team meldet sich innerhalb von 24 Stunden bei Ihnen. Entdecken Sie jetzt unsere Demo oder weitere Ressourcen."
        canonical="/thank-you"
        keywords="danke, anfrage bestätigung, marsstein kontakt, compliance demo"
      />
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <Card className="shadow-lg">
          <CardHeader className="pb-4">
            <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-foreground mb-2">
              Vielen Dank für Ihr Interesse!
            </CardTitle>
            <p className="text-lg text-muted-foreground">
              Wir haben Ihre Anfrage erhalten und werden Sie innerhalb von 24 Stunden kontaktieren.
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Was passiert als nächstes?
              </h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Unsere Compliance-Experten werden Ihre Anfrage prüfen
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Wir kontaktieren Sie innerhalb von 24 Stunden, um eine Beratung zu vereinbaren
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                  Sie erhalten einen personalisierten Compliance-Assessment-Vorschlag
                </li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Möchten Sie direkt einen Termin vereinbaren?
              </h3>
              <p className="text-muted-foreground mb-6">
                Buchen Sie jetzt einen persönlichen Beratungstermin mit unseren Compliance-Experten.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://calendly.com/marsstein" target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-initial">
                  <Button size="lg" className="w-full bg-gradient-primary hover:opacity-90 text-white">
                    <Monitor className="w-5 h-5 mr-2" />
                    Termin vereinbaren
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>

                <Link to="/" className="flex-1 sm:flex-initial">
                  <Button variant="outline" size="lg" className="w-full">
                    <Home className="w-5 h-5 mr-2" />
                    Zurück zur Startseite
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-primary/5 rounded-lg p-4 text-sm text-muted-foreground">
              <p>
                <strong>Benötigen Sie sofortige Hilfe?</strong><br />
                📧 <a href="mailto:info@marsstein.ai" className="hover:underline">info@marsstein.ai</a><br />
                📞 <a href="tel:+4989451266770" className="hover:underline">+49 89 45126670</a><br />
                🕒 Antwortzeit: Innerhalb von 24 Stunden
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  );
};

export default ThankYou;
