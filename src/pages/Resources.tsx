import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckSquare, 
  BarChart3, 
  AlertTriangle, 
  Cookie, 
  Users, 
  Download,
  ArrowRight,
  Shield,
  FileText,
  Clock,
  Star,
  TrendingUp,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';

export const Resources: React.FC = () => {
  const leadMagnets = [
    {
      id: 'dsgvo-compliance-checklist',
      icon: CheckSquare,
      title: 'DSGVO-Compliance-Checkliste 2025',
      description: '47-Punkte Selbstaudit für vollständige DSGVO-Konformität',
      details: 'Systematische Überprüfung aller Compliance-Anforderungen',
      downloadCount: '2.847',
      rating: 4.9,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-700 dark:text-blue-300',
      features: ['47 Prüfpunkte', 'Sofort-Bewertung', 'Handlungsempfehlungen', 'Excel & PDF']
    },
    {
      id: 'datenschutz-readiness-assessment',
      icon: BarChart3,
      title: 'Datenschutz-Readiness-Assessment',
      description: 'Interaktiver Score mit personalisierten Empfehlungen',
      details: 'Ermitteln Sie Ihren Compliance-Reifegrad in 5 Minuten',
      downloadCount: '1.923',
      rating: 4.8,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      textColor: 'text-purple-700 dark:text-purple-300',
      features: ['Interaktiver Test', 'Sofort-Score', 'Roadmap-Erstellung', 'Benchmarking']
    },
    {
      id: 'breach-response-checklist',
      icon: AlertTriangle,
      title: 'Breach-Response-Checklist',
      description: '72h-Notfallplan bei Datenpannen und Sicherheitsvorfällen',
      details: 'Schritt-für-Schritt Anleitung für den Ernstfall',
      downloadCount: '3.156',
      rating: 4.9,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      borderColor: 'border-red-200 dark:border-red-800',
      textColor: 'text-red-700 dark:text-red-300',
      features: ['72h-Timeline', 'Meldepflichten', 'Kommunikation', 'Dokumentation']
    },
    {
      id: 'cookie-compliance-audit',
      icon: Cookie,
      title: 'Cookie-Compliance-Audit',
      description: 'Website-Prüfliste für rechtskonforme Cookie-Nutzung',
      details: 'Vollständige Analyse Ihrer Website-Compliance',
      downloadCount: '4.234',
      rating: 4.7,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-800',
      textColor: 'text-green-700 dark:text-green-300',
      features: ['Cookie-Scanner', 'Consent-Check', 'Banner-Optimierung', 'Rechtssicherheit']
    },
    {
      id: 'vendor-assessment-template',
      icon: Users,
      title: 'Vendor-Assessment-Template',
      description: 'Bewertung und Auswahl DSGVO-konformer Auftragsverarbeiter',
      details: 'Systematische Bewertung Ihrer Dienstleister und Partner',
      downloadCount: '1.678',
      rating: 4.8,
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/20',
      borderColor: 'border-indigo-200 dark:border-indigo-800',
      textColor: 'text-indigo-700 dark:text-indigo-300',
      features: ['Bewertungsmatrix', 'Vertragsprüfung', 'Risk-Assessment', 'Monitoring-Plan']
    }
  ];

  const stats = [
    { label: 'Downloads', value: '12.5k+', icon: Download },
    { label: 'Unternehmen', value: '850+', icon: Users },
    { label: 'Durchschnittsbewertung', value: '4.8★', icon: Star },
    { label: 'Aktualisiert', value: '2025', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-transparent to-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 mb-6 animate-fade-in">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Kostenlose DSGVO-Resources</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Compliance-Tools für
              <br />
              <span className="bg-gradient-to-r from-brand-red via-red-600 to-orange-500 bg-clip-text text-transparent">
                rechtssichere Unternehmen
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Professionelle Checklisten, Assessments und Templates für DSGVO-Compliance. 
              Kostenlos, sofort verfügbar und von Datenschutz-Experten entwickelt.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-800 mb-2">
                    <stat.icon className="h-6 w-6 text-brand-red" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Magnets Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Kostenlose Compliance-Tools
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Sofortiger Download, keine Registrierung erforderlich. Alle Tools werden regelmäßig aktualisiert.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadMagnets.map((magnet, index) => (
                <Card 
                  key={magnet.id} 
                  className={cn(
                    "group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-2",
                    magnet.borderColor,
                    "animate-fade-in opacity-0"
                  )}
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <CardContent className="p-0">
                    {/* Header with gradient */}
                    <div className={cn(
                      "p-6 bg-gradient-to-br",
                      magnet.bgColor
                    )}>
                      <div className="flex items-start justify-between mb-4">
                        <div className={cn(
                          "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                          magnet.color
                        )}>
                          <magnet.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {magnet.rating}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500">
                            {magnet.downloadCount} Downloads
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors">
                        {magnet.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {magnet.description}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {magnet.details}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="p-6">
                      <div className="space-y-3 mb-6">
                        {magnet.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className={cn(
                              "w-2 h-2 rounded-full bg-gradient-to-r",
                              magnet.color
                            )} />
                            <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Link to={`/resources/${magnet.id}`}>
                        <Button 
                          className={cn(
                            "w-full bg-gradient-to-r text-white shadow-lg hover:shadow-xl group-hover:scale-105 transition-all duration-300",
                            magnet.color
                          )}
                          size="lg"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Jetzt kostenlos herunterladen
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    {/* Hover effect overlay */}
                    <div className={cn(
                      "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br -z-10",
                      magnet.color
                    )} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="relative overflow-hidden bg-gradient-to-r from-brand-red/5 via-orange-500/5 to-red-600/5 border-2 border-brand-red/20">
              <CardContent className="p-12 text-center relative z-10">
                <div className="inline-flex p-4 rounded-full bg-brand-red/10 mb-6">
                  <Zap className="h-8 w-8 text-brand-red" />
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Benötigen Sie individuelle Beratung?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Unsere DSGVO-Experten helfen Ihnen bei der Implementierung einer vollständigen 
                  Compliance-Strategie für Ihr Unternehmen.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact?demo=true">
                    <Button 
                      size="lg" 
                      className="bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      Kostenlose Beratung buchen
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  
                  <Link to="/demo">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-2 border-gray-300 dark:border-gray-600 hover:border-brand-red hover:text-brand-red transition-all duration-300"
                    >
                      <Clock className="mr-2 h-5 w-5" />
                      Live-Demo ansehen
                    </Button>
                  </Link>
                </div>
              </CardContent>
              
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-red/20 to-orange-500/20 rounded-full blur-2xl opacity-60" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-red-600/20 to-brand-red/20 rounded-full blur-xl opacity-40" />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};