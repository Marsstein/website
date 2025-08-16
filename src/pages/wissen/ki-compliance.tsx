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
  Brain,
  Scale,
  Shield,
  Eye,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Clock,
  BookOpen,
  Zap,
  Users,
  Globe,
  Lock,
  FileText,
  Activity,
  Target,
  Lightbulb,
  Code,
  TrendingUp,
  Search,
  Download,
  ExternalLink,
  ChevronRight,
  Cpu,
  Sparkles,
  ShieldCheck,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const KICompliance: React.FC = () => {
  const [activeTab, setActiveTab] = useState('euaiact');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": "KI Compliance - EU AI Act und Datenschutz",
    "description": "Umfassendes Wissen zu KI-Compliance: EU AI Act, algorithmische Transparenz, Bias-Vermeidung, ethische KI-Entwicklung. Praxisnahe Umsetzung.",
    "url": "https://marsstein.com/wissen/ki-compliance"
  };

  const topics = {
    euaiact: {
      title: 'EU AI Act',
      icon: Scale,
      articles: [
        {
          title: 'EU AI Act Grundlagen',
          description: 'Die wichtigsten Regelungen der KI-Verordnung im Überblick',
          readTime: '10 Min',
          level: 'Einsteiger',
          link: '/wissen/ki-compliance/ai-act-grundlagen'
        },
        {
          title: 'Risikoklassen verstehen',
          description: 'Minimal, Limited, High Risk und Unacceptable - Was bedeutet das?',
          readTime: '12 Min',
          level: 'Fortgeschritten',
          link: '/wissen/ki-compliance/risikoklassen'
        },
        {
          title: 'Konformitätsbewertung',
          description: 'Schritt-für-Schritt durch das Konformitätsbewertungsverfahren',
          readTime: '15 Min',
          level: 'Experte',
          link: '/wissen/ki-compliance/konformitaetsbewertung'
        },
        {
          title: 'Dokumentationspflichten',
          description: 'Welche Dokumentation der EU AI Act verlangt',
          readTime: '8 Min',
          level: 'Praktisch',
          link: '/wissen/ki-compliance/dokumentation'
        }
      ]
    },
    transparenz: {
      title: 'Transparenz & Erklärbarkeit',
      icon: Eye,
      articles: [
        {
          title: 'Algorithmische Transparenz',
          description: 'Wie Sie KI-Entscheidungen nachvollziehbar machen',
          readTime: '10 Min',
          level: 'Technisch',
          link: '/wissen/ki-compliance/transparenz'
        },
        {
          title: 'Explainable AI (XAI)',
          description: 'Methoden zur Erklärbarkeit von KI-Systemen',
          readTime: '14 Min',
          level: 'Experte',
          link: '/wissen/ki-compliance/xai'
        },
        {
          title: 'Transparenzpflichten',
          description: 'Informationspflichten bei KI-Einsatz nach DSGVO und AI Act',
          readTime: '8 Min',
          level: 'Praktisch',
          link: '/wissen/ki-compliance/transparenzpflichten'
        },
        {
          title: 'Model Cards & Datasheets',
          description: 'Standardisierte Dokumentation für KI-Modelle',
          readTime: '6 Min',
          level: 'Technisch',
          link: '/wissen/ki-compliance/model-cards'
        }
      ]
    },
    fairness: {
      title: 'Fairness & Bias',
      icon: Users,
      articles: [
        {
          title: 'Bias in KI-Systemen',
          description: 'Arten von Bias erkennen und verstehen',
          readTime: '12 Min',
          level: 'Fortgeschritten',
          link: '/wissen/ki-compliance/bias-arten'
        },
        {
          title: 'Bias-Vermeidung',
          description: 'Praktische Methoden zur Bias-Reduktion',
          readTime: '15 Min',
          level: 'Technisch',
          link: '/wissen/ki-compliance/bias-vermeidung'
        },
        {
          title: 'Fairness-Metriken',
          description: 'Wie Sie Fairness in KI-Systemen messen',
          readTime: '10 Min',
          level: 'Experte',
          link: '/wissen/ki-compliance/fairness-metriken'
        },
        {
          title: 'Diskriminierungsschutz',
          description: 'Rechtliche Anforderungen an faire KI',
          readTime: '8 Min',
          level: 'Praktisch',
          link: '/wissen/ki-compliance/diskriminierungsschutz'
        }
      ]
    },
    datenschutz: {
      title: 'KI & Datenschutz',
      icon: Shield,
      articles: [
        {
          title: 'DSGVO-konforme KI',
          description: 'Wie KI und DSGVO zusammenpassen',
          readTime: '10 Min',
          level: 'Fortgeschritten',
          link: '/wissen/ki-compliance/ki-dsgvo'
        },
        {
          title: 'Privacy-Preserving ML',
          description: 'Federated Learning, Differential Privacy und mehr',
          readTime: '16 Min',
          level: 'Experte',
          link: '/wissen/ki-compliance/privacy-preserving'
        },
        {
          title: 'Zweckbindung bei KI',
          description: 'Der Grundsatz der Zweckbindung im KI-Kontext',
          readTime: '8 Min',
          level: 'Praktisch',
          link: '/wissen/ki-compliance/zweckbindung'
        },
        {
          title: 'Datenminimierung',
          description: 'Weniger Daten, bessere Compliance',
          readTime: '7 Min',
          level: 'Praktisch',
          link: '/wissen/ki-compliance/datenminimierung'
        }
      ]
    },
    ethik: {
      title: 'Ethische KI',
      icon: Lightbulb,
      articles: [
        {
          title: 'KI-Ethik Grundlagen',
          description: 'Ethische Prinzipien für verantwortungsvolle KI',
          readTime: '10 Min',
          level: 'Einsteiger',
          link: '/wissen/ki-compliance/ki-ethik'
        },
        {
          title: 'Responsible AI Framework',
          description: 'Aufbau eines Governance-Frameworks für ethische KI',
          readTime: '14 Min',
          level: 'Fortgeschritten',
          link: '/wissen/ki-compliance/responsible-ai'
        },
        {
          title: 'Human-in-the-Loop',
          description: 'Menschliche Kontrolle in automatisierten Systemen',
          readTime: '8 Min',
          level: 'Praktisch',
          link: '/wissen/ki-compliance/human-in-the-loop'
        },
        {
          title: 'KI Impact Assessment',
          description: 'Folgenabschätzung für KI-Systeme durchführen',
          readTime: '12 Min',
          level: 'Experte',
          link: '/wissen/ki-compliance/impact-assessment'
        }
      ]
    }
  };

  const quickLinks = [
    {
      title: 'AI Risk Assessment',
      description: 'Bewerten Sie das Risiko Ihres KI-Systems',
      icon: BarChart3,
      link: '/assessment-center/ai-risk-assessment',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'AI Governance Check',
      description: 'Prüfen Sie Ihre KI-Governance-Strukturen',
      icon: ShieldCheck,
      link: '/assessment-center/ai-governance-check',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'KI-Vorlagen',
      description: 'Dokumentationsvorlagen für KI-Projekte',
      icon: Download,
      link: '/vorlagen/ki-compliance',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'KI-News',
      description: 'Aktuelle Entwicklungen im KI-Recht',
      icon: TrendingUp,
      link: '/news/ki-compliance',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const keyFacts = [
    {
      icon: Scale,
      title: 'EU AI Act',
      description: 'Weltweit erste umfassende KI-Regulierung',
      detail: 'Voraussichtlich 2024 in Kraft'
    },
    {
      icon: AlertTriangle,
      title: 'Sanktionen',
      description: 'Bis zu 35 Mio. EUR oder 7% des Umsatzes',
      detail: 'Bei Verstößen gegen Verbote'
    },
    {
      icon: Shield,
      title: 'High-Risk KI',
      description: 'Strenge Anforderungen für kritische Anwendungen',
      detail: 'z.B. HR, Kredite, Strafverfolgung'
    },
    {
      icon: Users,
      title: 'Transparenz',
      description: 'Kennzeichnungspflicht für KI-Interaktionen',
      detail: 'Nutzer müssen informiert werden'
    }
  ];

  return (
    <>
      <SEOHead
        title="KI Compliance – EU AI Act & Datenschutz Guide"
        description="KI-Compliance Wissen: EU AI Act, algorithmische Transparenz, Bias-Vermeidung, ethische KI. ✓ Praxisguides ✓ Checklisten ✓ Expertenrat. Jetzt KI-konform werden!"
        canonical="/wissen/ki-compliance"
        keywords="KI Compliance, EU AI Act, Algorithmic Transparency, Bias in AI, Responsible AI"
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
                <Brain className="h-3 w-3 mr-1" />
                KI Compliance Wissenszentrum
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                KI-Compliance meistern
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Von EU AI Act über Transparenz bis zu ethischer KI – 
                Ihr umfassender Guide für compliant AI
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="grid md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link key={index} to={link.link}>
                    <Card className="h-full hover:shadow-lg transition-all group cursor-pointer">
                      <CardContent className="p-6">
                        <div className={cn(
                          "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4",
                          link.color
                        )}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-brand-red transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {link.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </motion.div>

            {/* Key Facts */}
            <motion.div
              className="grid md:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {keyFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <Card key={index} className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-bl-full opacity-20" />
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 text-purple-600 dark:text-purple-400 mb-3" />
                      <h3 className="font-semibold mb-1">{fact.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {fact.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {fact.detail}
                      </p>
                    </CardContent>
                  </Card>
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

            {/* AI Compliance Journey */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Sparkles className="h-6 w-6" />
                    Ihre KI-Compliance Journey
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Target className="h-8 w-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold mb-1">1. Risikoanalyse</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        KI-System klassifizieren
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <FileText className="h-8 w-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold mb-1">2. Dokumentation</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Compliance nachweisen
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <Shield className="h-8 w-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold mb-1">3. Maßnahmen</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Safeguards implementieren
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
                        <CheckCircle2 className="h-8 w-8 text-purple-600" />
                      </div>
                      <h4 className="font-semibold mb-1">4. Monitoring</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        Kontinuierlich prüfen
                      </p>
                    </div>
                  </div>
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
                  Machen Sie Ihre KI compliant und vertrauenswürdig
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Unsere KI-Compliance-Experten unterstützen Sie bei der Umsetzung
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    KI-Beratung anfragen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    AI Risk Assessment starten
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

export default KICompliance;