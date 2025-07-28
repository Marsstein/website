import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Lock, 
  Shield, 
  FileText, 
  Users,
  Building2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Globe,
  Euro,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DsgvoGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 mb-6">
                <Lock className="h-4 w-4" />
                <span className="text-sm font-medium">DSGVO/GDPR</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Datenschutz-Grundverordnung
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent block mt-2">
                  DSGVO Compliance Guide
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Umfassender Leitfaden zur Implementierung der EU-Datenschutz-Grundverordnung 
                und zum Schutz personenbezogener Daten in Ihrem Unternehmen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/regulierung/dsgvo">
                  <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90 group">
                    <BookOpen className="mr-2 h-5 w-5" />
                    DSGVO Produktseite
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="group">
                  <Download className="mr-2 h-5 w-5" />
                  DSGVO Checkliste herunterladen
                </Button>
              </div>
            </div>

            {/* Quick Overview */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  DSGVO Überblick
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">99</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Artikel</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">20M€</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Max. Bußgeld</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">27</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">EU-Länder</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">72h</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Meldepflicht</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Principles */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-green-600" />
                  DSGVO Grundprinzipien
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Verarbeitung muss auf einer Rechtsgrundlage beruhen und transparent erfolgen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Zweckbindung</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Daten nur für festgelegte, eindeutige und rechtmäßige Zwecke erheben
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Datenminimierung</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Nur so viele Daten wie für den Zweck erforderlich verarbeiten
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Richtigkeit</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Daten müssen sachlich richtig und auf dem neuesten Stand sein
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Speicherbegrenzung</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Daten nur so lange speichern, wie es für den Zweck erforderlich ist
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Integrität und Vertraulichkeit</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Angemessene Sicherheit durch technische und organisatorische Maßnahmen
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Rechenschaftspflicht</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Nachweis der Einhaltung aller Datenschutzgrundsätze durch den Verantwortlichen
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Individual Rights */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-600" />
                  Betroffenenrechte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Informationsrecht (Art. 13, 14)',
                    'Auskunftsrecht (Art. 15)',
                    'Berichtigungsrecht (Art. 16)',
                    'Löschungsrecht (Art. 17)',
                    'Einschränkung der Verarbeitung (Art. 18)',
                    'Datenübertragbarkeit (Art. 20)',
                    'Widerspruchsrecht (Art. 21)',
                    'Schutz vor automatisierter Entscheidung (Art. 22)'
                  ].map((right, index) => (
                    <Badge key={index} variant="outline" className="text-left py-2 px-3">
                      {right}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Implementation Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-green-600" />
                  DSGVO Implementierung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: 'Bestandsaufnahme durchführen',
                      description: 'Verzeichnis von Verarbeitungstätigkeiten erstellen und Datenflüsse analysieren'
                    },
                    {
                      step: 2,
                      title: 'Rechtsgrundlagen prüfen',
                      description: 'Für jede Verarbeitung eine gültige Rechtsgrundlage nach Art. 6 DSGVO identifizieren'
                    },
                    {
                      step: 3,
                      title: 'Technische und organisatorische Maßnahmen',
                      description: 'Angemessene Sicherheitsmaßnahmen zum Schutz personenbezogener Daten implementieren'
                    },
                    {
                      step: 4,
                      title: 'Datenschutzmanagement etablieren',
                      description: 'Datenschutzbeauftragten bestellen und Prozesse für Betroffenenrechte einrichten'
                    },
                    {
                      step: 5,
                      title: 'Schulungen und Dokumentation',
                      description: 'Mitarbeiter schulen und vollständige Compliance-Dokumentation erstellen'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DsgvoGuide;