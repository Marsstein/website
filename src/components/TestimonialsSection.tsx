import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { t } = useLanguage();

  const visionStatements = [
    {
      quote: "Stellen Sie sich vor: Compliance-Prozesse, die Wochen statt Monate dauern. Automatisierte DSGVO-Audits, die Ihnen Zeit für strategische Arbeit geben.",
      title: "Unsere Vision für",
      role: "Compliance-Teams in Europa",
      company: "Moderne Unternehmen",
      avatar: "📋",
      badge: "Beta"
    },
    {
      quote: "Compliance-Manager berichten uns häufig: 80% ihrer Zeit geht für manuelle Dokumentation drauf. Wir entwickeln KI-Tools, die diese Routinearbeit automatisieren.",
      title: "Das Problem, das wir lösen für",
      role: "Datenschutzbeauftragte",
      company: "KMU bis Konzerne", 
      avatar: "🤖",
      badge: "In Entwicklung"
    },
    {
      quote: "Unser Ziel: Eine Plattform, die Standards-konforme Dokumentation erstellt und kontinuierlich Gesetzesänderungen überwacht - entwickelt mit Compliance-Experten.",
      title: "Entwickelt für",
      role: "Rechtsabteilungen",
      company: "Europäische Unternehmen",
      avatar: "⚖️",
      badge: "Roadmap 2025"
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
            <span className="text-sm font-medium">🚧 Beta-Phase</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Die Zukunft von Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entwickelt für Compliance-Profis, die mehr Zeit für strategische Arbeit statt Dokumentation brauchen.
          </p>
        </div>

        {/* Vision Statements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visionStatements.map((statement, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-large transition-all duration-300 bg-gradient-card border-0">
              <CardContent className="p-8">
                {/* Badge */}
                <div className="mb-6 flex justify-between items-start">
                  <div className="text-4xl">{statement.avatar}</div>
                  <div className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                    {statement.badge}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{statement.quote}"
                </blockquote>

                {/* Target Audience */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                    🎯
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{statement.title}</div>
                    <div className="text-sm text-muted-foreground">{statement.role}</div>
                    <div className="text-sm text-primary font-medium">{statement.company}</div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Target Industries */}
        <div className="mt-16">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Branchenspezifische Compliance-Lösungen in Entwicklung für:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['Finanzdienstleister', 'Technologie-Unternehmen', 'Gesundheitswesen', 'Consulting-Firmen', 'Rechtsanwaltskanzleien', 'Manufacturing'].map((industry, index) => (
              <div key={index} className="h-12 px-6 bg-muted rounded-lg flex items-center justify-center">
                <span className="text-sm font-medium text-muted-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};