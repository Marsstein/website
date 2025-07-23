import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Brain,
  Shield,
  Scan,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  FileText,
  Lock,
  Zap,
  BarChart3,
  Users,
  Database,
  Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const FeaturesShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ai-audit');

  const features = [
    {
      id: 'ai-audit',
      icon: Brain,
      title: 'KI-Audits',
      subtitle: 'Automatisierte Compliance-Analyse',
      description: 'Automatisierte KI-Analyse identifiziert Compliance-Lücken und erstellt präzise Handlungspläne.',
      benefits: [
        '90% weniger Vorbereitungszeit',
        'Automatische Lückenerkennung',
        'Priorisierte To-Do-Listen',
        'Fachlich geprüfte Empfehlungen'
      ],
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      id: 'vault',
      icon: Shield,
      title: 'Dokument-Vault',
      subtitle: 'Sicher & DSGVO-konform',
      description: 'Sichere, DSGVO-konforme Dokumentenverwaltung in europaweit zertifizierten Rechenzentren.',
      benefits: [
        'Ende-zu-Ende Verschlüsselung',
        'Automatische Versionierung',
        'Granulare Zugriffsrechte',
        'ISO 27001 zertifiziert'
      ],
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20'
    },
    {
      id: 'monitoring',
      icon: Scan,
      title: 'Monitoring',
      subtitle: '24/7 Compliance-Überwachung',
      description: 'Proaktive Compliance-Überwachung mit automatisierten Benachrichtigungen und Risikoanalyse.',
      benefits: [
        'Echtzeit-Benachrichtigungen',
        'Risiko-Dashboard',
        'Trend-Analysen',
        'Proaktive Warnungen'
      ],
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20'
    },
    {
      id: 'academy',
      icon: GraduationCap,
      title: 'Academy',
      subtitle: 'Schulungen & Zertifizierungen',
      description: 'Strukturierte Weiterbildungsprogramme für systematische Compliance-Kompetenzentwicklung.',
      benefits: [
        'Zertifizierte Kurse',
        'Interaktive Simulationen',
        'Fortschritts-Tracking',
        'Anwendungsorientierte Schulungen'
      ],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20'
    }
  ];

  const currentFeature = features.find(f => f.id === activeTab) || features[0];

  // UI Components for each feature
  const renderFeatureUI = (feature: typeof features[0]) => {
    switch (feature.id) {
      case 'ai-audit':
        return (
          <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-200 dark:border-blue-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-lg">DSGVO-Audit läuft...</h4>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  <span className="text-sm text-blue-600">KI analysiert</span>
                </div>
              </div>
              
              <Progress value={87} className="h-3" />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-600 mb-2" />
                  <p className="text-sm font-medium">142 Dokumente</p>
                  <p className="text-xs text-gray-500">analysiert</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 mb-2" />
                  <p className="text-sm font-medium">3 Lücken</p>
                  <p className="text-xs text-gray-500">gefunden</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <div>
                    <p className="text-sm font-medium">Datenschutzrichtlinie veraltet</p>
                    <p className="text-xs text-gray-500">Letzte Aktualisierung: 2022</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
                  <div>
                    <p className="text-sm font-medium">Fehlende Löschkonzepte</p>
                    <p className="text-xs text-gray-500">3 Systeme betroffen</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        );

      case 'vault':
        return (
          <Card className="p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20 border-2 border-green-200 dark:border-green-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-lg">Sicherer Vault</h4>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-green-600">Verschlüsselt</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="text-sm font-medium">Datenschutzrichtlinie_v2.3.pdf</p>
                      <p className="text-xs text-gray-500">Aktualisiert vor 2 Stunden</p>
                    </div>
                  </div>
                  <div className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-1 rounded">
                    Aktuell
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="text-sm font-medium">IT-Sicherheitskonzept.pdf</p>
                      <p className="text-xs text-gray-500">Version 1.8</p>
                    </div>
                  </div>
                  <div className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                    Genehmigt
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-purple-600" />
                    <div>
                      <p className="text-sm font-medium">Mitarbeiterschulung_Q3.pdf</p>
                      <p className="text-xs text-gray-500">Entwurf</p>
                    </div>
                  </div>
                  <div className="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 px-2 py-1 rounded">
                    Review
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Speicher belegt</span>
                  <span className="font-medium">2.3 GB / 100 GB</span>
                </div>
                <Progress value={2.3} className="mt-2 h-2" />
              </div>
            </div>
          </Card>
        );

      case 'monitoring':
        return (
          <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-2 border-orange-200 dark:border-orange-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-lg">Live-Dashboard</h4>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-orange-600 animate-pulse" />
                  <span className="text-sm text-orange-600">Monitoring aktiv</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg text-center">
                  <BarChart3 className="h-5 w-5 text-green-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-green-600">98%</p>
                  <p className="text-xs text-gray-500">Compliance</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg text-center">
                  <Zap className="h-5 w-5 text-yellow-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-yellow-600">2</p>
                  <p className="text-xs text-gray-500">Warnungen</p>
                </div>
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg text-center">
                  <Database className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                  <p className="text-lg font-bold text-blue-600">12</p>
                  <p className="text-xs text-gray-500">Systeme</p>
                </div>
              </div>

              <div className="space-y-2">
                <h5 className="font-medium text-sm">Letzte Aktivitäten</h5>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-900 rounded">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs">Backup erfolgreich • vor 5 Min.</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-900 rounded">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                    <span className="text-xs">Neue Richtlinie erkannt • vor 12 Min.</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 bg-white dark:bg-gray-900 rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-xs">System-Update verfügbar • vor 1 Std.</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        );

      case 'academy':
        return (
          <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-2 border-purple-200 dark:border-purple-800">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-lg">Lernfortschritt</h4>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-purple-600">3 aktive Kurse</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">DSGVO Grundlagen</span>
                    <span className="text-xs text-green-600">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">12 von 14 Modulen abgeschlossen</p>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">EU AI Act</span>
                    <span className="text-xs text-blue-600">62%</span>
                  </div>
                  <Progress value={62} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">Nächstes Modul: Risikoklassifizierung</p>
                </div>

                <div className="p-3 bg-white dark:bg-gray-900 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">IT-Sicherheit</span>
                    <span className="text-xs text-yellow-600">23%</span>
                  </div>
                  <Progress value={23} className="h-2" />
                  <p className="text-xs text-gray-500 mt-1">Gerade gestartet</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg">
                <div>
                  <p className="text-sm font-medium">Zertifikat bereit!</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">DSGVO-Experte Level 1</p>
                </div>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  Herunterladen
                </Button>
              </div>
            </div>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Plattform-Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Umfassende
              <span className="bg-gradient-to-r from-brand-red to-red-600 bg-clip-text text-transparent mx-2">
                Compliance-Plattform
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Vier integrierte Module für professionelles Compliance-Management
            </p>
          </div>

          {/* Features Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 gap-4 h-auto p-2 bg-muted/50 w-full">
              {features.map((feature) => (
                <TabsTrigger
                  key={feature.id}
                  value={feature.id}
                  className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-900 data-[state=active]:shadow-lg transition-all duration-300 data-[state=active]:scale-105"
                >
                  <feature.icon className="h-6 w-6" />
                  <span className="font-medium">{feature.title}</span>
                  <span className="text-xs text-muted-foreground text-center">{feature.subtitle}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Feature Content */}
            <div className="mt-12">
              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Description */}
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className={cn(
                        "inline-flex p-4 rounded-2xl",
                        currentFeature.bgColor
                      )}>
                        <currentFeature.icon className={cn(
                          "h-8 w-8",
                          `bg-gradient-to-r ${currentFeature.color} bg-clip-text text-transparent`
                        )} />
                      </div>
                      <h3 className="text-3xl font-bold">{currentFeature.title}</h3>
                      <p className="text-lg text-gray-600 dark:text-gray-400">
                        {currentFeature.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {currentFeature.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/features">
                      <Button className="bg-brand-red hover:bg-brand-red/90 text-white group">
                        Mehr erfahren
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Visual UI */}
                  <div className="relative">
                    {renderFeatureUI(currentFeature)}
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};