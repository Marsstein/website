import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Euro, 
  Shield, 
  FileText, 
  Users,
  Building2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const GeldwaeschegesetzGuide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 dark:bg-rose-950/30 text-rose-700 dark:text-rose-400 mb-6">
                <Euro className="h-4 w-4" />
                <span className="text-sm font-medium">Geldwäschegesetz</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Geldwäschegesetz (GwG)
                <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent block mt-2">
                  Compliance Guide
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Umfassender Leitfaden zur Implementierung des deutschen Geldwäschegesetzes 
                und zur Erfüllung der Anti-Money Laundering (AML) Anforderungen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/regulierung/geldwaeschegesetz">
                  <Button size="lg" className="bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:opacity-90 group">
                    <BookOpen className="mr-2 h-5 w-5" />
                    GwG Produktseite
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="group">
                  <Download className="mr-2 h-5 w-5" />
                  GwG Checkliste herunterladen
                </Button>
              </div>
            </div>

            {/* Quick Overview */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-rose-600" />
                  GwG Überblick
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rose-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Betroffene Branchen</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rose-600 mb-2">5M€</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Max. Bußgeld</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rose-600 mb-2">BaFin</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Aufsichtsbehörde</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-rose-600 mb-2">KYC</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Know Your Customer</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Requirements */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-rose-600" />
                  Kernpflichten des GwG
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Kundensorgfaltspflichten (KYC)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Identifizierung und Überprüfung der Kundenidentität, wirtschaftlich Berechtigter und Geschäftszweck
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Verdachtsmeldungen</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Meldung verdächtiger Transaktionen an die Financial Intelligence Unit (FIU)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Aufzeichnungspflichten</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Dokumentation und Aufbewahrung von Transaktionen und Kundendaten für 5 Jahre
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Compliance-Organisation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Bestellung Geldwäschebeauftragter, Risikomanagement und Mitarbeiterschulungen
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Affected Industries */}
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-rose-600" />
                  Betroffene Branchen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    'Banken', 'Finanzdienstleister', 'Versicherungen', 'Immobilienmakler',
                    'Rechtsanwälte', 'Steuerberater', 'Wirtschaftsprüfer', 'Notare',
                    'Glücksspiel', 'Edelmetallhändler', 'Kunsthändler', 'Kryptowährungen',
                    'Güterhändler', 'Factoring', 'Leasing', 'Zahlungsdienstleister'
                  ].map((industry, index) => (
                    <Badge key={index} variant="outline" className="text-center py-2">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Implementation Steps */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-rose-600" />
                  Implementierungsschritte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      step: 1,
                      title: 'Risikoanalyse durchführen',
                      description: 'Bewertung der spezifischen Geldwäsche- und Terrorismusfinanzierungsrisiken'
                    },
                    {
                      step: 2,
                      title: 'Compliance-Organisation aufbauen',
                      description: 'Bestellung Geldwäschebeauftragter und Aufbau der organisatorischen Struktur'
                    },
                    {
                      step: 3,
                      title: 'KYC-Prozesse implementieren',
                      description: 'Entwicklung und Umsetzung von Kundensorgfaltspflichten'
                    },
                    {
                      step: 4,
                      title: 'Monitoring-Systeme einrichten',
                      description: 'Transaktionsüberwachung und automatisierte Verdachtserkennung'
                    },
                    {
                      step: 5,
                      title: 'Schulungen durchführen',
                      description: 'Regelmäßige Mitarbeiterschulungen und Sensibilisierung'
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
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

export default GeldwaeschegesetzGuide;