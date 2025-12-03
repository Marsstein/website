import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Globe,
  Shield,
  FileText,
  ArrowRight,
  ShoppingCart,
  Users,
  Scale,
  TrendingUp,
  Building2,
  Briefcase,
  MessageSquare,
  Cpu,
  BookOpen,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

const ChinaDsgvo: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "DSGVO & Datenschutz im China-Geschäft",
    "description": "Umfassender Leitfaden für DSGVO-Compliance bei Geschäften mit China: E-Commerce, Social Media, rechtliche Grundlagen und Investment-Themen.",
    "url": "https://marsstein.ai/wissen/china"
  };

  const categories = [
    { id: 'all', name: 'Alle Themen', icon: BookOpen, count: 12 },
    { id: 'ecommerce', name: 'E-Commerce', icon: ShoppingCart, count: 3 },
    { id: 'social', name: 'Social Media & Apps', icon: MessageSquare, count: 4 },
    { id: 'legal', name: 'Rechtliche Grundlagen', icon: Scale, count: 4 },
    { id: 'business', name: 'Business & Investment', icon: Briefcase, count: 2 }
  ];

  const articles = [
    {
      id: 'amazon-sellers',
      title: 'Amazon Sellers & DSGVO China',
      subtitle: 'Compliance für Amazon-Händler',
      description: 'Compliance-Pflichten für Amazon-Händler mit China-Lieferanten und chinesischen FBA-Lagern',
      icon: ShoppingCart,
      link: '/dsgvo-amazon-sellers-china',
      category: 'ecommerce',
      difficulty: 'intermediate',
      readTime: '8 Min',
      tags: ['Amazon', 'E-Commerce', 'FBA'],
      popular: true,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 'tiktok-shop',
      title: 'TikTok Shop & DSGVO',
      subtitle: 'Datenschutz für TikTok Seller',
      description: 'Datenschutz-Anforderungen für TikTok Shop Seller mit China-Bezug',
      icon: ShoppingCart,
      link: '/dsgvo-tiktok-shop-china',
      category: 'ecommerce',
      difficulty: 'intermediate',
      readTime: '7 Min',
      tags: ['TikTok', 'Social Commerce', 'Seller'],
      popular: true,
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 'b2b-hersteller',
      title: 'B2B Hersteller & DSGVO',
      subtitle: 'Compliance für B2B-Unternehmen',
      description: 'DSGVO-Compliance für B2B-Unternehmen mit chinesischen Herstellern und Lieferanten',
      icon: Building2,
      link: '/dsgvo-b2b-hersteller-china',
      category: 'business',
      difficulty: 'expert',
      readTime: '10 Min',
      tags: ['B2B', 'Produktion', 'Lieferkette'],
      color: 'from-gray-500 to-slate-600'
    },
    {
      id: 'wechat-alipay',
      title: 'WeChat & Alipay Datenschutz',
      subtitle: 'Payment & Kommunikation',
      description: 'DSGVO-konforme Nutzung von WeChat und Alipay für europäische Unternehmen',
      icon: MessageSquare,
      link: '/dsgvo-wechat-alipay-china',
      category: 'social',
      difficulty: 'intermediate',
      readTime: '9 Min',
      tags: ['WeChat', 'Alipay', 'Payment'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'douyin',
      title: 'Douyin & Datenschutz',
      subtitle: 'Chinesisches TikTok',
      description: 'DSGVO-Aspekte bei der Nutzung von Douyin (chinesisches TikTok) für Marketing',
      icon: MessageSquare,
      link: '/dsgvo-douyin-china',
      category: 'social',
      difficulty: 'intermediate',
      readTime: '7 Min',
      tags: ['Douyin', 'Marketing', 'Social Media'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'deepseek',
      title: 'DeepSeek AI & DSGVO',
      subtitle: 'Chinesische KI-Tools',
      description: 'Datenschutz-Compliance bei der Nutzung von DeepSeek und anderen chinesischen KI-Tools',
      icon: Cpu,
      link: '/deepseek-dsgvo',
      category: 'social',
      difficulty: 'expert',
      readTime: '12 Min',
      tags: ['KI', 'DeepSeek', 'AI Tools'],
      popular: true,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'eu-vertreter',
      title: 'EU-Vertreter für China-Unternehmen',
      subtitle: 'Art. 27 DSGVO',
      description: 'Anforderungen und Pflichten für EU-Vertreter nach Art. 27 DSGVO',
      icon: Users,
      link: '/eu-vertreter-china',
      category: 'legal',
      difficulty: 'expert',
      readTime: '10 Min',
      tags: ['Art. 27 DSGVO', 'Vertreter', 'Rechtspflichten'],
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'artikel-15',
      title: 'Artikel 15 DSGVO Auskunftsrecht',
      subtitle: 'Betroffenenrechte',
      description: 'Umsetzung des Auskunftsrechts bei China-Datenflüssen',
      icon: FileText,
      link: '/artikel-15-dsgvo-auskunftsrecht-china',
      category: 'legal',
      difficulty: 'expert',
      readTime: '11 Min',
      tags: ['Auskunftsrecht', 'Betroffenenrechte', 'Art. 15'],
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'scc',
      title: 'China SCC vs. EU SCC',
      subtitle: 'Standardvertragsklauseln',
      description: 'Vergleich der chinesischen und europäischen Standardvertragsklauseln',
      icon: Scale,
      link: '/china-scc-vs-eu-scc',
      category: 'legal',
      difficulty: 'expert',
      readTime: '15 Min',
      tags: ['SCC', 'Standardverträge', 'Datentransfer'],
      color: 'from-blue-600 to-indigo-600'
    },
    {
      id: 'pipl-gdpr',
      title: 'PIPL vs. GDPR Vergleich',
      subtitle: 'Rechtsvergleich',
      description: 'Unterschiede und Gemeinsamkeiten zwischen chinesischem PIPL und EU-DSGVO',
      icon: Globe,
      link: '/pipl-gdpr-china',
      category: 'legal',
      difficulty: 'expert',
      readTime: '14 Min',
      tags: ['PIPL', 'Rechtsvergleich', 'China-Recht'],
      popular: true,
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 'joint-venture',
      title: 'Joint Ventures & Datenschutz',
      subtitle: 'Deutsch-chinesische JVs',
      description: 'DSGVO-Compliance bei deutsch-chinesischen Joint Ventures',
      icon: Briefcase,
      link: '/joint-venture-china-datenschutz',
      category: 'business',
      difficulty: 'expert',
      readTime: '13 Min',
      tags: ['Joint Venture', 'M&A', 'Kooperationen'],
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'investitionen',
      title: 'China Investitionen & DSGVO',
      subtitle: 'Investment Due Diligence',
      description: 'Datenschutz-Screening bei Investitionen in oder aus China',
      icon: TrendingUp,
      link: '/china-investitionen-dsgvo-screening',
      category: 'ecommerce',
      difficulty: 'expert',
      readTime: '12 Min',
      tags: ['Investment', 'Due Diligence', 'Screening'],
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const searchMatch = searchTerm === '' ||
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && searchMatch;
  });

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'basic':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'intermediate':
        return 'bg-orange-50 text-[#e24e1b] border-orange-200';
      case 'expert':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-stone-100 text-[#474747] border-stone-300';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'basic': return 'Grundlagen';
      case 'intermediate': return 'Fortgeschritten';
      case 'expert': return 'Experte';
      default: return difficulty;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F6F8] via-orange-50/20 to-[#F5F6F8]">
      <SEOHead
        title="DSGVO & Datenschutz China – Praxisguide für Unternehmen"
        description="12 Praxisartikel zu DSGVO-Compliance im China-Geschäft: E-Commerce, Social Media, rechtliche Grundlagen und Investment. ✓ Amazon ✓ TikTok ✓ DeepSeek ✓ EU-Vertreter"
        canonical="/wissen/china"
        structuredData={structuredData}
      />
      <Header />

      <div className="container px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-[#474747] hover:text-[#e24e1b]">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[#474747]" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/wissen" className="text-[#474747] hover:text-[#e24e1b]">
                Wissen
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[#474747]" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#e24e1b] font-medium">
                China DSGVO
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <motion.section
        className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-b border-stone-200"
      >
        <div className="relative container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-[#e24e1b] rounded-xl shadow-sm">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#232323]">
                China & DSGVO
              </h1>
            </div>

            <p className="text-xl text-[#474747] mb-8 max-w-4xl mx-auto leading-relaxed">
              12 Praxisartikel für DSGVO-konforme Geschäfte mit China: E-Commerce, Social Media, rechtliche Grundlagen und Investment.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <FileText className="h-4 w-4 mr-2" />
                12 Praxisartikel
              </Badge>
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <BookOpen className="h-4 w-4 mr-2" />
                5 Kategorien
              </Badge>
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <Shield className="h-4 w-4 mr-2" />
                Praxisnah
              </Badge>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              <Card className="bg-white border-stone-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#474747]" />
                    <input
                      type="text"
                      placeholder="Artikel durchsuchen..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-[#F5F6F8] border border-stone-300 rounded-lg text-[#232323] placeholder-[#474747] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:border-transparent"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-stone-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#232323] mb-4">Kategorie</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={cn(
                          "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
                          selectedCategory === category.id
                            ? "bg-orange-50 border border-[#e24e1b] text-[#e24e1b]"
                            : "border border-stone-200 text-[#474747] hover:bg-[#F5F6F8] hover:text-[#232323]"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <category.icon className="h-4 w-4" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs border-current">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-3">
            {filteredArticles.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="p-4 bg-orange-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Search className="h-6 w-6 text-[#e24e1b]" />
                </div>
                <h3 className="text-xl font-semibold text-[#232323] mb-2">
                  Keine Ergebnisse gefunden
                </h3>
                <p className="text-[#474747] mb-4">
                  Versuchen Sie andere Suchbegriffe oder Filter.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="bg-[#e24e1b] hover:bg-[#f97316] text-white"
                >
                  Filter zurücksetzen
                </Button>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredArticles.map((article, index) => {
                  const IconComponent = article.icon;
                  return (
                    <motion.div
                      key={article.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className={cn(
                        "group relative overflow-hidden bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg",
                        "hover:-translate-y-1 h-full"
                      )}>
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                              <div className={cn("p-3 rounded-xl bg-gradient-to-r", article.color)}>
                                <IconComponent className="h-6 w-6 text-white" />
                              </div>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                              {article.popular && (
                                <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                  Beliebt
                                </Badge>
                              )}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-[#232323] mb-1">{article.title}</h3>
                          <p className="text-[#e24e1b] text-sm mb-3">{article.subtitle}</p>

                          <p className="text-[#474747] leading-relaxed mb-4 flex-grow">
                            {article.description}
                          </p>

                          <div className="bg-[#F5F6F8] border border-stone-200 rounded-lg p-3 mb-4">
                            <div className="flex items-center gap-2 mb-1">
                              <BookOpen className="h-4 w-4 text-[#474747]" />
                              <span className="text-xs text-[#474747]">Lesezeit</span>
                            </div>
                            <span className="text-sm font-medium text-[#232323]">{article.readTime}</span>
                          </div>

                          <div className="mb-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-[#474747]">Schwierigkeit</span>
                              <Badge variant="outline" className={getDifficultyBadge(article.difficulty)}>
                                {getDifficultyLabel(article.difficulty)}
                              </Badge>
                            </div>
                          </div>

                          <div className="mb-4">
                            <span className="text-sm text-[#474747] mb-2 block">Tags:</span>
                            <div className="flex flex-wrap gap-1">
                              {article.tags.slice(0, 3).map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="text-xs bg-stone-100 text-[#474747] border-stone-300"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button
                            asChild
                            className="w-full bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm mt-auto"
                          >
                            <Link to={article.link}>
                              <BookOpen className="h-4 w-4 mr-2" />
                              Artikel lesen
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ChinaDsgvo;
