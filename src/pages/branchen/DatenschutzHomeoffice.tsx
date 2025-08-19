import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Home, Shield, ArrowRight, Laptop, Wifi, Lock } from 'lucide-react';

const DatenschutzHomeoffice: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Badge className="mb-4" variant="secondary">Datenschutz Homeoffice</Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Homeoffice &
            </span><br />Datenschutz
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            DSGVO-konforme Heimarbeit - Sicherer Umgang mit Firmendaten zu Hause
          </p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600">
            Homeoffice-Guide <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Laptop, title: 'Sichere Arbeitsplätze', desc: 'DSGVO-konforme Homeoffice-Einrichtung' },
            { icon: Wifi, title: 'Netzwerk-Sicherheit', desc: 'Sichere Internetverbindungen und VPN' },
            { icon: Lock, title: 'Datenzugriff', desc: 'Kontrollierter Zugang zu Firmendaten' }
          ].map((item, i) => (
            <Card key={i} className="p-6">
              <item.icon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <h3 className="text-3xl font-bold mb-4">Homeoffice DSGVO-sicher?</h3>
          <p className="text-xl mb-6">Schützen Sie Firmendaten in der Heimarbeit</p>
          <Button size="lg" variant="secondary">
            Homeoffice-Audit <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default DatenschutzHomeoffice;