import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Sparkles,
  ShieldCheck,
  Zap,
  Globe,
  BookOpen,
  Unlock,
  Target,
  Rocket
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const VisionSection: React.FC = () => {
  const visionPoints = [
    {
      icon: Sparkles,
      title: 'Komplexität raus, Klarheit rein',
      description: 'Automatisierte Audits analysieren Ihre Richtlinien in Sekunden, zeigen Lücken auf und liefern umsetzbare Empfehlungen – validiert von zertifizierten Expert:innen.',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: ShieldCheck,
      title: 'Sichere Grundlage',
      description: 'Verschlüsselter Dokument-Vault hostet Ihre Daten in Europa und der Schweiz. ISO 27001 zertifiziert mit höchsten DSGVO-Standards und EU AI Act Compliance.',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Kontinuierliche Compliance',
      description: 'Echtzeit-Monitoring und automatisierte Scans halten Ihre Organisation wachsam, minimieren Risiken und dokumentieren jede Änderung für Behörden.',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      icon: BookOpen,
      title: 'Wissen, das wirkt',
      description: 'Die Marsstein Academy macht Ihr Team zum stärksten Glied in der Datenschutz-Kette mit interaktiven Lernmodulen und praxisnahen Webinaren.',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      icon: Unlock,
      title: 'Transparenz ohne Vendor-Lock-in',
      description: 'Klare Preise, exportierbare Daten und 24/7-Support geben Ihnen die volle Kontrolle über Ihre Compliance-Reise – egal ob Start-up oder Konzern.',
      gradient: 'from-indigo-600 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Europäische Werte',
      description: 'Wir glauben an einen europäischen Digitalraum, in dem Vertrauen, Innovation und Rechtssicherheit Hand in Hand gehen.',
      gradient: 'from-teal-600 to-blue-600'
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">Unsere Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Wir machen Compliance so selbstverständlich
              <br />
              <span className="bg-gradient-to-r from-brand-red to-brand-red/60 bg-clip-text text-transparent">
                wie das Speichern einer Datei
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Marsstein entwickelt die führende, KI-gestützte Plattform, die Privacy-, Sicherheits- und 
              AI-Regulierung in einen nahtlosen Workflow übersetzt – von der ersten Bestandsaufnahme 
              bis zur lückenlosen Audit-Spur.
            </p>
          </div>

          {/* Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionPoints.map((point, index) => (
              <Card 
                key={index}
                className={cn(
                  "group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30",
                  "animate-fade-in opacity-0"
                )}
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "p-3 rounded-lg bg-gradient-to-br text-white",
                      point.gradient
                    )}>
                      <point.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{point.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-2 border-primary/20">
              <div className="flex items-center gap-3 text-lg font-medium">
                <Rocket className="h-6 w-6 text-primary" />
                <span>
                  Bereit, Ihre Compliance-Reise zu transformieren?
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};