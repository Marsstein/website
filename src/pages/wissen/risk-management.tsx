import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Target,
  Shield,
  AlertTriangle,
  TrendingUp,
  Activity,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Clock,
  FileText,
  Scale,
  Eye,
  Brain,
  Settings,
  Gauge,
  ShieldCheck,
  AlertOctagon,
  ChevronRight,
  Download,
  ExternalLink,
  Lightbulb,
  Database,
  Users,
  Building2,
  Zap,
  LineChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const RiskManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('identification');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": "Risk Management für Compliance",
    "description": "Systematisches Risikomanagement: Identifikation, Bewertung und Behandlung von Datenschutz- und Sicherheitsrisiken. ISO 31000, DSFA, Risk Assessment.",
    "url": "https://marsstein.com/wissen/risk-management"
  };

  const topics = {
    identification: {
      title: 'Risikoidentifikation',
      icon: Search,
      articles: [
        {
          title: 'Risk Assessment Grundlagen',
          description: 'Systematische Identifikation von Compliance-Risiken',
          readTime: '10 Min',
          level: 'Einsteiger',
          link: '/wissen/risk-management/risk-assessment-basics'
        },
        {
          title: 'Bedrohungsmodellierung',
          description: 'STRIDE, DREAD und andere Threat Modeling Methoden',
          readTime: '14 Min',
          level: 'Fortgeschritten',
          link: '/wissen/risk-management/threat-modeling'
        },
        {
          title: 'Vulnerabilities scannen',
          description: 'Technische und organisatorische Schwachstellen finden',
          readTime: '12 Min',
          level: 'Technisch',
          link: '/wissen/risk-management/vulnerability-scanning'
        },
        {
          title: 'Risk Register aufbauen',
          description: 'Zentrale Dokumentation aller identifizierten Risiken',
          readTime: '8 Min',
          level: 'Praktisch',
          link: '/wissen/risk-management/risk-register'
        }
      ]
    },
    assessment: {
      title: 'Risikobewertung',
      icon: BarChart3,
      articles: [
        {
          title: 'Risikomatrix erstellen',
          description: 'Eintrittswahrscheinlichkeit vs. Schadenshöhe bewerten',
          readTime: '10 Min',
          level: 'Fortgeschritten',
          link: '/wissen/risk-management/risikomatrix'
        },
        {
          title: 'Quantitative Risikoanalyse',
          description: 'Monetäre Bewertung von Risiken (ALE, SLE, ARO)',
          readTime: '16 Min',
          level: 'Experte',
          link: '/wissen/risk-management/quantitative-analyse'
        },
        {
          title: 'Qualitative Bewertung',
          description: 'Risiken ohne Zahlen sinnvoll einschätzen',
          readTime: '8 Min',
          level: 'Praktisch',
          link: '/wissen/risk-management/qualitative-bewertung'
        },
        {
          title: 'Risk Scoring Modelle',
          description: 'CVSS, FAIR und andere Scoring-Systeme',
          readTime: '12 Min',
          level: 'Fortgeschritten',
          link: '/wissen/risk-management/risk-scoring'
        }
      ]
    },
    treatment: {
      title: 'Risikobehandlung',
      icon: Shield,
      articles: [
        {
          title: 'Risikostrategie wählen',
          description: 'Vermeiden, Mindern, Transferieren oder Akzeptieren',
          readTime: '10 Min',
          level: 'Fortgeschritten',
          link: '/wissen/risk-management/risikostrategie'
        },
        {
          title: 'Controls implementieren',
          description: 'Wirksame Maßnahmen zur Risikominderung',
          readTime: '14 Min',
          level: 'Praktisch',
          link: '/wissen/risk-management/controls'
        },
        {
          title: 'Versicherungen & Transfer',
          description: 'Cyber-Versicherungen und Risikotransfer',
          readTime: '12 Min',
          level: 'Fortgeschritten',
          link: '/wissen/risk-management/versicherungen'
        },
        {
          title: 'Restrisiko managen',
          description: 'Umgang mit verbleibendem Risiko',
          readTime: '8 Min',
          level: 'Praktisch',
          link: '/wissen/risk-management/restrisiko'
        }
      ]
    },
    monitoring: {
      title: 'Monitoring & KPIs',
      icon: Activity,
      articles: [
        {
          title: 'Risk KPIs definieren',
          description: 'Key Risk Indicators für kontinuierliches Monitoring',
          readTime: '12 Min',
          level: 'Fortgeschritten',
          link: '/wissen/risk-management/risk-kpis'
        },
        {
          title: 'Risk Dashboard aufbauen',
          description: 'Visualisierung der Risikolage in Echtzeit',
          readTime: '10 Min',
          level: 'Technisch',
          link: '/wissen/risk-management/risk-dashboard'
        },
        {
          title: 'Frühwarnsysteme',
          description: 'Proaktive Risikoerkennung implementieren',
          readTime: '14 Min',
          level: 'Experte',
          link: '/wissen/risk-management/fruehwarnung'
        },
        {
          title: 'Risk Reporting',
          description: 'Effektive Kommunikation an Management',
          readTime: '8 Min',
          level: 'Praktisch',
          link: '/wissen/risk-management/reporting'
        }
      ]
    },
    compliance: {
      title: 'Compliance-Risiken',
      icon: Scale,
      articles: [
        {
          title: 'DSFA durchführen',
          description: 'Datenschutz-Folgenabschätzung nach DSGVO',
          readTime: '18 Min',
          level: 'Experte',
          link: '/wissen/risk-management/dsfa'
        },
        {
          title: 'ISO 31000 umsetzen',
          description: 'Internationaler Standard für Risikomanagement',
          readTime: '15 Min',
          level: 'Fortgeschritten',
          link: '/wissen/risk-management/iso31000'
        },
        {
          title: 'Compliance Risk Assessment',
          description: 'Rechtliche und regulatorische Risiken bewerten',
          readTime: '12 Min',
          level: 'Fortgeschritten',
          link: '/wissen/risk-management/compliance-risk'
        },
        {
          title: 'Third-Party Risk',
          description: 'Risiken durch Lieferanten und Partner',
          readTime: '10 Min',
          level: 'Praktisch',
          link: '/wissen/risk-management/third-party'
        }
      ]
    }
  };

  const riskProcess = [
    {
      step: 1,
      title: 'Kontext etablieren',
      description: 'Scope, Kriterien und Ziele definieren',
      icon: Target
    },
    {
      step: 2,
      title: 'Risiken identifizieren',
      description: 'Systematisch alle Risiken erfassen',
      icon: Search
    },
    {
      step: 3,
      title: 'Risiken analysieren',
      description: 'Wahrscheinlichkeit und Impact bewerten',
      icon: BarChart3
    },
    {
      step: 4,
      title: 'Risiken evaluieren',
      description: 'Priorisierung und Handlungsbedarf',
      icon: Scale
    },
    {
      step: 5,
      title: 'Risiken behandeln',
      description: 'Maßnahmen planen und umsetzen',
      icon: Shield
    },
    {
      step: 6,
      title: 'Überwachen & Review',
      description: 'Kontinuierliche Verbesserung',
      icon: Activity
    }
  ];

  const quickTools = [
    {
      title: 'Risk Assessment Tool',
      description: 'Interaktives Tool für Ihre Risikoanalyse',
      icon: Gauge,
      link: '/tools/risk-assessment',
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'DSFA Generator',
      description: 'Datenschutz-Folgenabschätzung erstellen',
      icon: FileText,
      link: '/tools/dsfa-generator',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Risk Templates',
      description: 'Vorlagen für Risk Register & Reports',
      icon: Download,
      link: '/vorlagen/risk-management',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Compliance Check',
      description: 'Prüfen Sie Ihre Compliance-Risiken',
      icon: ShieldCheck,
      link: '/assessment-center/compliance-risk-check',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <>
      <SEOHead
        title="Risk Management – Compliance-Risiken systematisch managen"
        description="Risk Management für Compliance: Risiken identifizieren, bewerten, behandeln. ✓ ISO 31000 ✓ DSFA ✓ Risk Assessment ✓ KPIs. Jetzt Risiken beherrschen!"
        canonical="/wissen/risk-management"
        keywords="Risk Management, Risikomanagement, ISO 31000, DSFA, Risk Assessment"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="mb-4 px-4 py-1" variant="outline">
                <Target className="h-3 w-3 mr-1" />
                Risk Management Wissenszentrum
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Risiken systematisch beherrschen
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Identifikation, Bewertung und Behandlung von Datenschutz- und 
                Sicherheitsrisiken für resiliente Compliance
              </p>
            </motion.div>

            {/* Risk Management Process */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <LineChart className="h-5 w-5" />
                    Der Risk Management Prozess
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-6 gap-4">
                    {riskProcess.map((phase, index) => {
                      const Icon = phase.icon;
                      return (
                        <div key={index} className="text-center">
                          <div className="relative">
                            <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
                              <Icon className="h-8 w-8 text-red-600" />
                            </div>
                            {index < riskProcess.length - 1 && (
                              <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-red-200 dark:bg-red-800" />
                            )}
                          </div>
                          <div className="bg-white dark:bg-gray-800 rounded-lg p-2">
                            <div className="text-xs font-semibold text-red-600 mb-1">
                              Schritt {phase.step}
                            </div>
                            <h4 className="font-semibold text-sm mb-1">{phase.title}</h4>
                            <p className="text-xs text-gray-600 dark:text-gray-400">
                              {phase.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Tools */}
            <motion.div
              className="grid md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {quickTools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <Link key={index} to={tool.link}>
                    <Card className="h-full hover:shadow-lg transition-all group cursor-pointer">
                      <CardContent className="p-6">
                        <div className={cn(
                          "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4",
                          tool.color
                        )}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {tool.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </motion.div>

            {/* Topics Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                  {Object.entries(topics).map(([key, topic]) => {
                    const Icon = topic.icon;
                    return (
                      <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{topic.title}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {Object.entries(topics).map(([key, topic]) => (
                  <TabsContent key={key} value={key}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {topic.articles.map((article, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card className="h-full hover:shadow-lg transition-all group">
                            <CardHeader>
                              <div className="flex items-start justify-between mb-2">
                                <CardTitle className="text-lg group-hover:text-brand-red transition-colors">
                                  {article.title}
                                </CardTitle>
                                <Badge variant="outline">{article.level}</Badge>
                              </div>
                              <CardDescription>{article.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                  <Clock className="h-4 w-4" />
                                  {article.readTime}
                                </div>
                                <Link to={article.link}>
                                  <Button variant="ghost" size="sm" className="group-hover:text-brand-red">
                                    Lesen
                                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                  </Button>
                                </Link>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>

            {/* Risk Stats */}
            <motion.div
              className="mt-16 grid md:grid-cols-4 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <AlertTriangle className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">73%</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    der Unternehmen haben kein formales Risk Management
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">5x ROI</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    durch proaktives Risikomanagement
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">-45%</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    weniger Incidents durch Risk Management
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Brain className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Kontinuierliches Monitoring erforderlich
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 text-white p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Bauen Sie ein robustes Risk Management auf
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Unsere Experten unterstützen Sie bei der Implementierung
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Risk Assessment starten
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    Risk Management Workshop
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default RiskManagement;