import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Shield, ArrowRight, Briefcase, FileText, Eye } from 'lucide-react';

const DatenschutzBetriebsrat: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-background to-indigo-900/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-4" variant="secondary">DSGVO & Betriebsrat</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Betriebsrat &
            </span><br />Datenschutz
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Datenschutz-Compliance für Betriebsräte und Mitbestimmungsorgane
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
            BR-Leitfaden <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Briefcase, title: 'Mitarbeiterdaten', desc: 'Rechtmäßiger Umgang mit Beschäftigtendaten' },
            { icon: FileText, title: 'Betriebsvereinbarungen', desc: 'DSGVO-konforme Vereinbarungen' },
            { icon: Eye, title: 'Mitbestimmung', desc: 'Datenschutz bei Überwachungsmaßnahmen' }
          ].map((item, i) => (
            <Card key={i} className="p-6">
              <item.icon className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <h3 className="text-3xl font-bold mb-4">Betriebsrat datenschutzfit?</h3>
          <p className="text-xl mb-6">Rechtssichere Interessenvertretung</p>
          <Button size="lg" variant="secondary">
            BR-Beratung <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default DatenschutzBetriebsrat;