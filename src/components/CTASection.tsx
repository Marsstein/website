import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  Sparkles,
  CheckCircle,
  Calendar,
  MessageSquare,
  Rocket,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const CTASection: React.FC = () => {
  const benefits = [
    'Keine Kreditkarte erforderlich',
    'Kostenlose Expertenberatung',
    'Sofortiger Plattform-Zugang',
    'DSGVO-konforme Testumgebung'
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-purple-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-brand-red/10 to-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="relative overflow-hidden border-2 shadow-2xl bg-gradient-to-br from-background to-muted/20">
            {/* Premium badge */}
            <div className="absolute top-0 right-0 m-6">
              <Badge className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                <Star className="h-3 w-3 mr-1" />
                Premium Demo
              </Badge>
            </div>

            <div className="p-8 md:p-12 space-y-8">
              {/* Header */}
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
                  <Rocket className="h-4 w-4 animate-bounce" />
                  <span className="text-sm font-medium">Limitiertes Angebot</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Bereit für 
                  <span className="bg-gradient-to-r from-brand-red to-purple-600 bg-clip-text text-transparent mx-2">
                    automatisierte Compliance?
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Erfahren Sie, wie Marsstein Ihre Compliance-Prozesse optimiert. 
                  Vereinbaren Sie eine persönliche Demonstration mit unseren Fachexperten.
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-lg bg-primary/5",
                      "animate-fade-in opacity-0"
                    )}
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                      animationFillMode: 'forwards'
                    }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact?demo=true">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-brand-red to-brand-red/80 hover:from-brand-red/90 hover:to-brand-red/70 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 group w-full sm:w-auto"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Demo vereinbaren
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button 
                    size="lg"
                    variant="outline"
                    className="group px-8 py-6 text-lg border-2 hover:bg-primary/5 w-full sm:w-auto"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Beratung anfordern
                  </Button>
                </Link>
              </div>

              {/* Trust indicator */}
              <div className="text-center pt-4">
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4 text-yellow-500" />
                  Über 500 Unternehmen nutzen bereits Marsstein
                </p>
              </div>
            </div>

            {/* Animated corner decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-red/20 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-500/20 to-transparent rounded-tl-full" />
          </Card>
        </div>
      </div>
    </section>
  );
};