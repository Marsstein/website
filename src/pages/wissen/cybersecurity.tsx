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
  Shield,
  Lock,
  Globe,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Clock,
  BookOpen,
  Zap,
  Users,
  FileText,
  Activity,
  Target,
  Code,
  TrendingUp,
  Search,
  Download,
  ExternalLink,
  ChevronRight,
  Server,
  Cloud,
  Key,
  ShieldCheck,
  Fingerprint,
  Network,
  Bug,
  AlertOctagon,
  Settings,
  Monitor,
  Database
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Cybersecurity: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basics');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle", 
    "name": "Cybersecurity & Compliance Wissen",
    "description": "IT-Sicherheit trifft Compliance: Technische Sicherheitsmaßnahmen, rechtliche Anforderungen, ISO 27001, NIS-2. Ganzheitlicher Schutz für Ihr Unternehmen.",
    "url": "https://marsstein.ai/wissen/cybersecurity"
  };

  const topics = {
    basics: {
      title: 'Security Grundlagen',
      icon: Shield,
      articles: [
        {
          title: 'IT-Sicherheit Basics',
          description: 'Die wichtigsten Konzepte der Informationssicherheit',
          readTime: '8 Min',
          level: 'Einsteiger',
          link: '/wissen/cybersecurity/basics'
        },
        {
          title: 'CIA-Triade verstehen',
          description: 'Confidentiality, Integrity, Availability im Detail',
          readTime: '6 Min',
          level: 'Einsteiger',
          link: '/wissen/cybersecurity/cia-triade'
        },
        {
          title: 'Bedrohungslandschaft',
          description: 'Aktuelle Cyber-Bedrohungen und Angriffsvektoren',
          readTime: '10 Min',
          level: 'Fortgeschritten',
          link: '/wissen/cybersecurity/bedrohungen'
        },
        {
          title: 'Security by Design',
          description: 'Sicherheit von Anfang an einplanen',
          readTime: '12 Min',
          level: 'Fortgeschritten',
          link: '/wissen/cybersecurity/security-by-design'
        }
      ]
    },
    technical: {
      title: 'Technische Maßnahmen',
      icon: Lock,
      articles: [
        {
          title: 'Verschlüsselung richtig',
          description: 'AES, RSA, TLS - Verschlüsselungsstandards verstehen',
          readTime: '14 Min',
          level: 'Technisch',
          link: '/wissen/cybersecurity/verschluesselung'
        },
        {
          title: 'Zugangskontrollen',
          description: 'IAM, MFA, Zero Trust implementieren',
          readTime: '12 Min',
          level: 'Technisch',
          link: '/wissen/cybersecurity/zugangskontrollen'
        },
        {
          title: 'Netzwerksicherheit',
          description: 'Firewalls, VPN, Segmentierung richtig einsetzen',
          readTime: '15 Min',
          level: 'Technisch',
          link: '/wissen/cybersecurity/netzwerksicherheit'
        },
        {
          title: 'Endpoint Protection',
          description: 'EDR, Antivirus und moderne Endpoint-Sicherheit',
          readTime: '10 Min',
          level: 'Technisch',
          link: '/wissen/cybersecurity/endpoint-protection'
        }
      ]
    },
    compliance: {
      title: 'Compliance & Standards',
      icon: FileText,
      articles: [
        {
          title: 'ISO 27001 umsetzen',
          description: 'ISMS implementieren und zertifizieren',
          readTime: '18 Min',
          level: 'Fortgeschritten',
          link: '/wissen/cybersecurity/iso27001'
        },
        {
          title: 'NIS-2 Anforderungen',
          description: 'Neue EU-Cybersicherheitsrichtlinie verstehen',
          readTime: '12 Min',
          level: 'Praktisch',
          link: '/wissen/cybersecurity/nis2'
        },
        {
          title: 'BSI Grundschutz',
          description: 'IT-Grundschutz-Kompendium anwenden',
          readTime: '15 Min',
          level: 'Fortgeschritten',
          link: '/wissen/cybersecurity/bsi-grundschutz'
        },
        {
          title: 'KRITIS Compliance',
          description: 'Anforderungen für kritische Infrastrukturen',
          readTime: '14 Min',
          level: 'Experte',
          link: '/wissen/cybersecurity/kritis'
        }
      ]
    },
    incident: {
      title: 'Incident Response',
      icon: AlertTriangle,
      articles: [
        {
          title: 'Incident Response Plan',
          description: 'Notfallplan für Sicherheitsvorfälle erstellen',
          readTime: '16 Min',
          level: 'Praktisch',
          link: '/wissen/cybersecurity/incident-response-plan'
        },
        {
          title: 'Forensik Grundlagen',
          description: 'Digitale Forensik bei Sicherheitsvorfällen',
          readTime: '12 Min',
          level: 'Technisch',
          link: '/wissen/cybersecurity/forensik'
        },
        {
          title: 'Breach Notification',
          description: 'Meldepflichten bei Datenpannen nach DSGVO',
          readTime: '10 Min',
          level: 'Praktisch',
          link: '/wissen/cybersecurity/breach-notification'
        },
        {
          title: 'Business Continuity',
          description: 'Geschäftskontinuität nach Cyberangriffen',
          readTime: '14 Min',
          level: 'Fortgeschritten',
          link: '/wissen/cybersecurity/business-continuity'
        }
      ]
    },
    cloud: {
      title: 'Cloud Security',
      icon: Cloud,
      articles: [
        {
          title: 'Cloud Security Basics',
          description: 'Shared Responsibility Model verstehen',
          readTime: '10 Min',
          level: 'Fortgeschritten',
          link: '/wissen/cybersecurity/cloud-basics'
        },
        {
          title: 'Multi-Cloud Security',
          description: 'Sicherheit in hybriden Cloud-Umgebungen',
          readTime: '14 Min',
          level: 'Experte',
          link: '/wissen/cybersecurity/multi-cloud'
        },
        {
          title: 'Container Security',
          description: 'Docker, Kubernetes sicher betreiben',
          readTime: '12 Min',
          level: 'Technisch',
          link: '/wissen/cybersecurity/container-security'
        },
        {
          title: 'CASB & SASE',
          description: 'Cloud Access Security Broker verstehen',
          readTime: '11 Min',
          level: 'Fortgeschritten',
          link: '/wissen/cybersecurity/casb-sase'
        }
      ]
    }
  };

  const quickLinks = [
    {
      title: 'Security Check',
      description: 'Prüfen Sie Ihre IT-Sicherheit',
      icon: ShieldCheck,
      link: '/assessment-center/security-check',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'ISO 27001 Guide',
      description: 'Schritt-für-Schritt zur Zertifizierung',
      icon: FileText,
      link: '/iso-27001',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Security Templates',
      description: 'Vorlagen für Security-Dokumentation',
      icon: Download,
      link: '/vorlagen/cybersecurity',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Threat Intelligence',
      description: 'Aktuelle Bedrohungslage',
      icon: AlertOctagon,
      link: '/threat-intelligence',
      color: 'from-red-500 to-red-600'
    }
  ];

  const securityMetrics = [
    {
      icon: Bug,
      title: '42%',
      description: 'der Unternehmen waren 2023 von Cyberangriffen betroffen',
      detail: 'BSI Lagebericht 2023'
    },
    {
      icon: Database,
      title: '€4.3 Mio',
      description: 'Durchschnittliche Kosten einer Datenpanne',
      detail: 'IBM Cost of Data Breach 2023'
    },
    {
      icon: Clock,
      title: '277 Tage',
      description: 'Durchschnittliche Zeit bis zur Entdeckung',
      detail: 'Mandiant M-Trends 2023'
    },
    {
      icon: Shield,
      title: '95%',
      description: 'der Angriffe nutzen menschliche Fehler',
      detail: 'World Economic Forum'
    }
  ];

  return (
    <>
      <SEOHead
        title="Cybersecurity – IT-Sicherheit & Compliance Wissen"
        description="Cybersecurity & Compliance: IT-Sicherheit, ISO 27001, NIS-2, Incident Response. ✓ Technische Maßnahmen ✓ Standards ✓ Best Practices. Jetzt sicher werden!"
        canonical="/wissen/cybersecurity"
        keywords="Cybersecurity, IT-Sicherheit, ISO 27001, NIS-2, Incident Response"
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
                <Shield className="h-3 w-3 mr-1" />
                Cybersecurity Wissenszentrum
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                IT-Sicherheit trifft Compliance
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Verbinden Sie technische Sicherheitsmaßnahmen mit rechtlichen Anforderungen 
                für ganzheitlichen Schutz
              </p>
            </motion.div>

            {/* Security Metrics */}
            <motion.div
              className="grid md:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {securityMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 rounded-bl-full opacity-20" />
                    <CardContent className="p-6">
                      <Icon className="h-8 w-8 text-red-600 dark:text-red-400 mb-3" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {metric.title}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {metric.description}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        {metric.detail}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="grid md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
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

            {/* Security Maturity */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <TrendingUp className="h-6 w-6" />
                    Security Maturity entwickeln
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2 shadow">
                        <span className="font-bold text-green-600">1</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">Initial</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Ad-hoc Maßnahmen
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2 shadow">
                        <span className="font-bold text-green-600">2</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">Managed</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Basis-Prozesse
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2 shadow">
                        <span className="font-bold text-green-600">3</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">Defined</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Standards etabliert
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2 shadow">
                        <span className="font-bold text-green-600">4</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">Quantified</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Messbar & KPIs
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-2 shadow">
                        <span className="font-bold text-green-600">5</span>
                      </div>
                      <h4 className="font-semibold text-sm mb-1">Optimizing</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">
                        Kontinuierlich
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <Button variant="default" className="bg-green-600 hover:bg-green-700">
                      Security Maturity Assessment starten
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
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
                  Schützen Sie Ihr Unternehmen ganzheitlich
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Unsere Security-Experten unterstützen Sie bei der Umsetzung
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Security-Beratung anfragen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    Penetration Test buchen
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

export default Cybersecurity;