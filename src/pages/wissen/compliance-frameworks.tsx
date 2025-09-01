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
  Code,
  Shield,
  Globe,
  Scale,
  CheckCircle2,
  ArrowRight,
  Clock,
  FileText,
  Award,
  BarChart3,
  Building2,
  Layers,
  Network,
  Target,
  Settings,
  ChevronRight,
  Download,
  ExternalLink,
  Lightbulb,
  Database,
  Users,
  Zap,
  GitBranch,
  Lock,
  Car,
  Heart,
  CreditCard
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ComplianceFrameworks: React.FC = () => {
  const [activeTab, setActiveTab] = useState('international');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": "Compliance Frameworks Übersicht",
    "description": "Alle relevanten Compliance-Rahmenwerke im Vergleich: ISO 27001, SOC 2, TISAX, ISO 27017/18, DSGVO. Anforderungen vergleichen, Synergien finden.",
    "url": "https://marsstein.ai/wissen/compliance-frameworks"
  };

  const frameworkCategories = {
    international: {
      title: 'Internationale Standards',
      icon: Globe,
      frameworks: [
        {
          title: 'ISO 27001',
          description: 'Der globale Standard für Information Security Management Systems (ISMS)',
          icon: Shield,
          readTime: '15 Min',
          level: 'Standard',
          link: '/wissen/frameworks/iso27001',
          highlights: ['Weltweit anerkannt', '114 Controls', 'Risk-based Approach', 'PDCA-Zyklus'],
          certification: true
        },
        {
          title: 'SOC 2',
          description: 'Trust Services Criteria für Service-Provider',
          icon: Award,
          readTime: '12 Min',
          level: 'Standard',
          link: '/wissen/frameworks/soc2',
          highlights: ['5 Trust Principles', 'US-Standard', 'Type I & II', 'Cloud-fokussiert'],
          certification: true
        },
        {
          title: 'ISO 27017',
          description: 'Cloud Security Controls als Erweiterung zu ISO 27001',
          icon: Cloud,
          readTime: '10 Min',
          level: 'Spezialisiert',
          link: '/wissen/frameworks/iso27017',
          highlights: ['Cloud-spezifisch', '37 zusätzliche Controls', 'Provider & Nutzer', 'Multi-Cloud'],
          certification: true
        },
        {
          title: 'ISO 27018',
          description: 'Privacy in der Cloud für personenbezogene Daten',
          icon: Lock,
          readTime: '10 Min',
          level: 'Spezialisiert',
          link: '/wissen/frameworks/iso27018',
          highlights: ['PII-Schutz', 'Cloud Privacy', 'DSGVO-aligned', 'Transparenz'],
          certification: true
        }
      ]
    },
    industry: {
      title: 'Branchenstandards',
      icon: Building2,
      frameworks: [
        {
          title: 'TISAX',
          description: 'Trusted Information Security Assessment Exchange für Automotive',
          icon: Car,
          readTime: '14 Min',
          level: 'Branche',
          link: '/wissen/frameworks/tisax',
          highlights: ['Automotive', 'VDA ISA basiert', 'ENX-Anbindung', '3 Assessment Level'],
          certification: true
        },
        {
          title: 'PCI DSS',
          description: 'Payment Card Industry Data Security Standard',
          icon: CreditCard,
          readTime: '12 Min',
          level: 'Branche',
          link: '/wissen/frameworks/pci-dss',
          highlights: ['Kreditkarten', '12 Requirements', '4 Compliance Level', 'Jährliche Audits'],
          certification: true
        },
        {
          title: 'HIPAA',
          description: 'Health Insurance Portability and Accountability Act',
          icon: Heart,
          readTime: '10 Min',
          level: 'Branche',
          link: '/wissen/frameworks/hipaa',
          highlights: ['Healthcare USA', 'PHI-Schutz', 'Administrative Controls', 'Technical Safeguards'],
          certification: false
        },
        {
          title: 'BSI Grundschutz',
          description: 'IT-Grundschutz des Bundesamts für Sicherheit',
          icon: Shield,
          readTime: '16 Min',
          level: 'National',
          link: '/wissen/frameworks/bsi-grundschutz',
          highlights: ['Deutsche Behörden', 'Baustein-Prinzip', 'KRITIS', 'Zertifizierung'],
          certification: true
        }
      ]
    },
    regulatory: {
      title: 'Regulatorisch',
      icon: Scale,
      frameworks: [
        {
          title: 'DSGVO/GDPR',
          description: 'Datenschutz-Grundverordnung der EU',
          icon: FileText,
          readTime: '18 Min',
          level: 'Gesetz',
          link: '/wissen/frameworks/dsgvo',
          highlights: ['EU-weit', 'Betroffenenrechte', 'Bußgelder', 'Privacy by Design'],
          certification: false
        },
        {
          title: 'EU AI Act',
          description: 'Verordnung über Künstliche Intelligenz',
          icon: Brain,
          readTime: '15 Min',
          level: 'Gesetz',
          link: '/wissen/frameworks/eu-ai-act',
          highlights: ['KI-Regulierung', 'Risikoklassen', 'CE-Kennzeichnung', 'Konformität'],
          certification: false
        },
        {
          title: 'NIS-2',
          description: 'Network and Information Security Directive 2.0',
          icon: Network,
          readTime: '12 Min',
          level: 'Gesetz',
          link: '/wissen/frameworks/nis2',
          highlights: ['Cybersecurity', 'Erweiteter Scope', 'Meldepflichten', 'Supply Chain'],
          certification: false
        },
        {
          title: 'HinSchG',
          description: 'Hinweisgeberschutzgesetz (Whistleblower)',
          icon: Users,
          readTime: '8 Min',
          level: 'Gesetz',
          link: '/wissen/frameworks/hinschg',
          highlights: ['Meldekanäle', 'Anonymität', 'Schutz', 'Ab 50 Mitarbeiter'],
          certification: false
        },
        {
          title: 'DSG-EKD',
          description: 'Datenschutzgesetz der Evangelischen Kirche in Deutschland. Spezifische Regelung für kirchliche Einrichtungen mit Fokus auf Seelsorgegeheimnis und Gemeindedaten.',
          icon: Heart,
          readTime: '30 Min',
          level: 'Kirchlich',
          link: '/compliance/dsg-ekd',
          highlights: ['Kirchlicher Datenschutz', 'Seelsorgegeheimnis', 'Gemeindedaten', 'Spezialregelung'],
          certification: false
        }
      ]
    },
    operational: {
      title: 'Operative Frameworks',
      icon: Settings,
      frameworks: [
        {
          title: 'COBIT',
          description: 'Control Objectives for IT and Related Technologies',
          icon: Target,
          readTime: '14 Min',
          level: 'Governance',
          link: '/wissen/frameworks/cobit',
          highlights: ['IT-Governance', '40 Prozesse', 'Maturity Model', 'Business-Fokus'],
          certification: true
        },
        {
          title: 'ITIL',
          description: 'IT Infrastructure Library für Service Management',
          icon: Layers,
          readTime: '12 Min',
          level: 'Service',
          link: '/wissen/frameworks/itil',
          highlights: ['Service Lifecycle', 'Best Practices', 'Prozess-Framework', 'ITSM'],
          certification: true
        },
        {
          title: 'NIST CSF',
          description: 'NIST Cybersecurity Framework',
          icon: Shield,
          readTime: '10 Min',
          level: 'Security',
          link: '/wissen/frameworks/nist-csf',
          highlights: ['5 Functions', 'Risk-based', 'US-Standard', 'Flexibel'],
          certification: false
        },
        {
          title: 'CIS Controls',
          description: 'Center for Internet Security Controls',
          icon: Lock,
          readTime: '10 Min',
          level: 'Security',
          link: '/wissen/frameworks/cis-controls',
          highlights: ['18 Controls', 'Priorisiert', 'Implementierung', 'Messbar'],
          certification: false
        }
      ]
    }
  };

  const frameworkComparison = [
    {
      framework: 'ISO 27001',
      scope: 'ISMS gesamt',
      certification: 'Ja',
      duration: '6-12 Monate',
      cost: '€€€',
      recognition: 'Weltweit'
    },
    {
      framework: 'SOC 2',
      scope: 'Service Provider',
      certification: 'Report',
      duration: '3-6 Monate',
      cost: '€€',
      recognition: 'USA/Global'
    },
    {
      framework: 'TISAX',
      scope: 'Automotive',
      certification: 'Label',
      duration: '4-8 Monate',
      cost: '€€',
      recognition: 'Automotive'
    },
    {
      framework: 'DSGVO',
      scope: 'Datenschutz',
      certification: 'Nein',
      duration: 'Kontinuierlich',
      cost: '€',
      recognition: 'EU'
    }
  ];

  const synergyMatrix = [
    {
      primary: 'ISO 27001',
      synergies: ['SOC 2 (70%)', 'ISO 27017 (85%)', 'TISAX (75%)', 'BSI (80%)']
    },
    {
      primary: 'DSGVO',
      synergies: ['ISO 27018 (90%)', 'ISO 27701 (95%)', 'SOC 2 Privacy (80%)']
    },
    {
      primary: 'NIS-2',
      synergies: ['ISO 27001 (85%)', 'NIST CSF (80%)', 'CIS Controls (75%)']
    }
  ];

  return (
    <>
      <SEOHead
        title="Compliance Frameworks – Standards & Gesetze im Vergleich"
        description="Compliance-Frameworks im Überblick: ISO 27001, SOC 2, TISAX, DSGVO, EU AI Act. ✓ Anforderungen vergleichen ✓ Synergien nutzen ✓ Strategie optimieren. Jetzt informieren!"
        canonical="/wissen/compliance-frameworks"
        keywords="Compliance Frameworks, ISO 27001, SOC 2, TISAX, DSGVO Compliance"
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
                <Code className="h-3 w-3 mr-1" />
                Compliance Frameworks Kompendium
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Compliance-Rahmenwerke verstehen
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Vergleichen Sie Anforderungen, finden Sie Synergien und 
                optimieren Sie Ihre Compliance-Strategie
              </p>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="grid md:grid-cols-4 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <Layers className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold">20+</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Frameworks analysiert
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <GitBranch className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold">75%</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Durchschnittliche Synergie
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold">40%</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Zeitersparnis möglich
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Zertifizierbare Standards
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Framework Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                  {Object.entries(frameworkCategories).map(([key, category]) => {
                    const Icon = category.icon;
                    return (
                      <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{category.title}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {Object.entries(frameworkCategories).map(([key, category]) => (
                  <TabsContent key={key} value={key}>
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.frameworks.map((framework, index) => {
                        const Icon = framework.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card className="h-full hover:shadow-lg transition-all group">
                              <CardHeader>
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                      <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                    </div>
                                    <div>
                                      <CardTitle className="text-lg group-hover:text-brand-red transition-colors">
                                        {framework.title}
                                      </CardTitle>
                                      {framework.certification && (
                                        <Badge variant="secondary" className="mt-1">
                                          Zertifizierbar
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                  <Badge variant="outline">{framework.level}</Badge>
                                </div>
                                <CardDescription>{framework.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-3">
                                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <Clock className="h-4 w-4" />
                                    {framework.readTime}
                                  </div>
                                  
                                  <div className="space-y-1">
                                    {framework.highlights.map((highlight, idx) => (
                                      <div key={idx} className="flex items-center gap-2 text-sm">
                                        <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                                        <span>{highlight}</span>
                                      </div>
                                    ))}
                                  </div>

                                  <Link to={framework.link}>
                                    <Button 
                                      variant="ghost" 
                                      className="w-full justify-between group-hover:text-brand-red mt-4"
                                    >
                                      Details ansehen
                                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                  </Link>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>

            {/* Framework Comparison */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Framework-Vergleich auf einen Blick
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-2 px-4">Framework</th>
                          <th className="text-left py-2 px-4">Scope</th>
                          <th className="text-left py-2 px-4">Zertifizierung</th>
                          <th className="text-left py-2 px-4">Dauer</th>
                          <th className="text-left py-2 px-4">Kosten</th>
                          <th className="text-left py-2 px-4">Anerkennung</th>
                        </tr>
                      </thead>
                      <tbody>
                        {frameworkComparison.map((item, index) => (
                          <tr key={index} className="border-b">
                            <td className="py-2 px-4 font-medium">{item.framework}</td>
                            <td className="py-2 px-4">{item.scope}</td>
                            <td className="py-2 px-4">{item.certification}</td>
                            <td className="py-2 px-4">{item.duration}</td>
                            <td className="py-2 px-4">{item.cost}</td>
                            <td className="py-2 px-4">{item.recognition}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Synergy Matrix */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Network className="h-5 w-5" />
                    Synergie-Potenziale nutzen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    {synergyMatrix.map((item, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-semibold mb-3">{item.primary}</h4>
                        <div className="space-y-2">
                          {item.synergies.map((synergy, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <GitBranch className="h-4 w-4 text-blue-600" />
                              <span>{synergy}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Tools */}
            <motion.div
              className="mt-12 grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Framework-Finder</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Finden Sie das passende Framework für Ihre Anforderungen
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/tools/framework-finder">
                      Tool starten
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Mapping-Guide</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Control-Mappings zwischen verschiedenen Frameworks
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/vorlagen/framework-mapping">
                      Download PDF
                      <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Beratung</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Individuelle Framework-Strategie entwickeln
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Experten fragen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 text-white p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Entwickeln Sie Ihre Multi-Framework-Strategie
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Nutzen Sie Synergien und sparen Sie Zeit und Kosten bei der Implementierung
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Framework-Analyse starten
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900"
                  >
                    Synergie-Workshop buchen
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

export default ComplianceFrameworks;