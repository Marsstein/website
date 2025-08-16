import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search,
  BookOpen,
  FileText,
  Shield,
  Brain,
  Globe,
  Code,
  Users,
  TrendingUp,
  Clock,
  ArrowRight,
  Lightbulb,
  Award,
  Target,
  CheckCircle2,
  Star,
  Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const WissenOverview: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Compliance Wissensdatenbank",
    "description": "Umfassende Wissensdatenbank für Compliance-Themen: DSGVO, ISO 27001, EU AI Act, Cybersecurity. Guides, Best Practices und aktuelle Informationen.",
    "url": "https://marsstein.com/wissen"
  };

  const categories = [
    { id: 'all', name: 'Alle Themen', count: 25 },
    { id: 'dsgvo', name: 'DSGVO', count: 8 },
    { id: 'iso', name: 'ISO Standards', count: 6 },
    { id: 'ai', name: 'KI & AI Act', count: 5 },
    { id: 'security', name: 'Cybersecurity', count: 6 }
  ];

  const wissenAreas = [
    {
      title: 'DSGVO Kompendium',
      description: 'Umfassendes Wissen zur Datenschutz-Grundverordnung. Von Grundlagen über Betroffenenrechte bis zu komplexen Implementierungen.',
      icon: Shield,
      link: '/wissen/dsgvo',
      category: 'dsgvo',
      articles: 45,
      level: 'Alle Level',
      color: 'from-blue-500 to-blue-600',
      highlights: ['Betroffenenrechte', 'Verarbeitungsverzeichnis', 'TOMs', 'Internationale Transfers']
    },
    {
      title: 'KI Compliance',
      description: 'Alles zu künstlicher Intelligenz und Datenschutz. EU AI Act, algorithmische Transparenz und ethische KI-Entwicklung.',
      icon: Brain,
      link: '/wissen/ki-compliance',
      category: 'ai',
      articles: 32,
      level: 'Fortgeschritten',
      color: 'from-purple-500 to-purple-600',
      highlights: ['EU AI Act', 'Bias-Vermeidung', 'Transparenz', 'Ethische KI']
    },
    {
      title: 'Cybersecurity',
      description: 'IT-Sicherheit trifft Compliance. Verbinden Sie technische Sicherheitsmaßnahmen mit rechtlichen Anforderungen.',
      icon: Globe,
      link: '/wissen/cybersecurity',
      category: 'security',
      articles: 28,
      level: 'Technisch',
      color: 'from-green-500 to-green-600',
      highlights: ['Verschlüsselung', 'Zugangskontrollen', 'Incident Response', 'Security by Design']
    },
    {
      title: 'DSGVO Leitfäden',
      description: 'Praktische Guides für den Alltag. Schritt-für-Schritt-Anleitungen für häufige Compliance-Herausforderungen.',
      icon: BookOpen,
      link: '/wissen/dsgvo-leitfaeden',
      category: 'dsgvo',
      articles: 21,
      level: 'Praktisch',
      color: 'from-indigo-500 to-indigo-600',
      highlights: ['How-To Guides', 'Templates', 'Checklisten', 'Best Practices']
    },
    {
      title: 'Risk Management',
      description: 'Systematisches Risikomanagement für Compliance. Identifikation, Bewertung und Behandlung von Risiken.',
      icon: Target,
      link: '/wissen/risk-management',
      category: 'security',
      articles: 18,
      level: 'Fortgeschritten',
      color: 'from-red-500 to-red-600',
      highlights: ['DSFA', 'Risk Assessment', 'Maßnahmenplanung', 'Monitoring']
    },
    {
      title: 'Compliance Frameworks',
      description: 'Überblick über alle relevanten Compliance-Rahmenwerke. Vergleichen Sie Anforderungen und finden Sie Synergien.',
      icon: Code,
      link: '/wissen/compliance-frameworks',
      category: 'iso',
      articles: 24,
      level: 'Überblick',
      color: 'from-orange-500 to-orange-600',
      highlights: ['ISO 27001', 'SOC 2', 'TISAX', 'Framework-Vergleich']
    }
  ];

  const popularArticles = [
    {
      title: 'DSGVO in 30 Tagen umsetzen',
      category: 'DSGVO',
    },
    {
      title: 'EU AI Act: Was Sie jetzt wissen müssen',
      category: 'KI Compliance',
    },
    {
      title: 'ISO 27001 Zertifizierung: Der komplette Guide',
      category: 'ISO Standards',
    }
  ];

  const filteredAreas = wissenAreas.filter(area => {
    const matchesSearch = area.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         area.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || area.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOHead
        title="Wissen – Compliance-Wissensdatenbank & Guides"
        description="Compliance-Wissensdatenbank: DSGVO, ISO 27001, EU AI Act Guides. ✓ Best Practices ✓ Vorlagen ✓ Aktuelle Informationen. Jetzt Wissen erweitern!"
        canonical="/wissen"
        keywords="Compliance Wissen, DSGVO Guide, ISO 27001 Wissen, EU AI Act Guide, Compliance Best Practices"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="mb-4 px-4 py-1" variant="outline">
                <BookOpen className="h-3 w-3 mr-1" />
                Compliance Wissensdatenbank
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Ihr Compliance-Wissen zentral
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Guides, Best Practices, Vorlagen und aktuelle Informationen zu allen relevanten Compliance-Themen
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Suchen Sie nach Themen, Guides oder Begriffen..."
                  className="pl-10 pr-4 py-3 text-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={selectedCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(cat.id)}
                    className="flex items-center gap-2"
                  >
                    {cat.name}
                    <Badge variant="secondary" className="ml-1">
                      {cat.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Popular Articles */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Beliebte Artikel
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {popularArticles.map((article, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{article.rating}</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {article.views.toLocaleString()} Views
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Knowledge Areas Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredAreas.map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <motion.div
                      key={area.title}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link to={area.link}>
                        <Card className="h-full hover:shadow-xl transition-all group cursor-pointer">
                          <CardHeader>
                            <div className={cn(
                              "w-12 h-12 rounded-lg bg-gradient-to-br flex items-center justify-center mb-4",
                              area.color
                            )}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <CardTitle className="text-xl mb-2 group-hover:text-brand-red transition-colors">
                              {area.title}
                            </CardTitle>
                            <CardDescription>{area.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                              <span className="flex items-center gap-1">
                                <FileText className="h-4 w-4" />
                                {area.articles} Artikel
                              </span>
                              <span className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {area.readTime}
                              </span>
                              <Badge variant="outline">{area.level}</Badge>
                            </div>
                            
                            <div className="space-y-2 mb-4">
                              {area.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-center gap-2 text-sm">
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>

                            <Button 
                              variant="ghost" 
                              className="w-full justify-between group-hover:text-brand-red"
                            >
                              Mehr erfahren
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* CTA Section */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-gradient-to-r from-brand-red to-red-600 text-white p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Bleiben Sie auf dem Laufenden
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Abonnieren Sie unseren Newsletter und erhalten Sie die neuesten Compliance-Updates
                </p>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="bg-white text-brand-red hover:bg-gray-100"
                >
                  Newsletter abonnieren
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Card>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default WissenOverview;