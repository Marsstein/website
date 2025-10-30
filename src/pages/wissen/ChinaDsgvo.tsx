import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  CheckCircle2,
  ArrowRight,
  ShoppingCart,
  Users,
  Scale,
  TrendingUp,
  Lock,
  Building2,
  Briefcase,
  MessageSquare,
  Cpu,
  AlertCircle,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ChinaDsgvo: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "DSGVO & Datenschutz im China-Geschäft",
    "description": "Umfassender Leitfaden für DSGVO-Compliance bei Geschäften mit China: E-Commerce, Social Media, rechtliche Grundlagen und Investment-Themen.",
    "url": "https://marsstein.ai/wissen/china",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": {
            "@id": "https://marsstein.ai/",
            "name": "Home"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": "https://marsstein.ai/wissen",
            "name": "Wissen"
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": "https://marsstein.ai/wissen/china",
            "name": "China DSGVO"
          }
        }
      ]
    }
  };

  const categories = [
    { id: 'all', name: 'Alle Themen', icon: BookOpen, count: 13 },
    { id: 'ecommerce', name: 'E-Commerce', icon: ShoppingCart, count: 3 },
    { id: 'social', name: 'Social Media & Apps', icon: MessageSquare, count: 4 },
    { id: 'legal', name: 'Rechtliche Grundlagen', icon: Scale, count: 4 },
    { id: 'business', name: 'Business & Investment', icon: Briefcase, count: 3 }
  ];

  const articles = [
    {
      id: 'amazon-sellers',
      title: 'Amazon Sellers & DSGVO China',
      description: 'Compliance-Pflichten für Amazon-Händler mit China-Lieferanten und chinesischen FBA-Lagern',
      icon: ShoppingCart,
      link: '/dsgvo-amazon-sellers-china',
      category: 'ecommerce',
      difficulty: 'Mittel',
      readTime: '8 Min',
      tags: ['Amazon', 'E-Commerce', 'FBA'],
      popular: true
    },
    {
      id: 'tiktok-shop',
      title: 'TikTok Shop & DSGVO',
      description: 'Datenschutz-Anforderungen für TikTok Shop Seller mit China-Bezug',
      icon: ShoppingCart,
      link: '/dsgvo-tiktok-shop-china',
      category: 'ecommerce',
      difficulty: 'Mittel',
      readTime: '7 Min',
      tags: ['TikTok', 'Social Commerce', 'Seller'],
      popular: true
    },
    {
      id: 'b2b-hersteller',
      title: 'B2B Hersteller & DSGVO',
      description: 'DSGVO-Compliance für B2B-Unternehmen mit chinesischen Herstellern und Lieferanten',
      icon: Building2,
      link: '/dsgvo-b2b-hersteller-china',
      category: 'business',
      difficulty: 'Fortgeschritten',
      readTime: '10 Min',
      tags: ['B2B', 'Produktion', 'Lieferkette']
    },
    {
      id: 'wechat-alipay',
      title: 'WeChat & Alipay Datenschutz',
      description: 'DSGVO-konforme Nutzung von WeChat und Alipay für europäische Unternehmen',
      icon: MessageSquare,
      link: '/dsgvo-wechat-alipay-china',
      category: 'social',
      difficulty: 'Mittel',
      readTime: '9 Min',
      tags: ['WeChat', 'Alipay', 'Payment']
    },
    {
      id: 'douyin',
      title: 'Douyin & Datenschutz',
      description: 'DSGVO-Aspekte bei der Nutzung von Douyin (chinesisches TikTok) für Marketing',
      icon: MessageSquare,
      link: '/dsgvo-douyin-china',
      category: 'social',
      difficulty: 'Mittel',
      readTime: '7 Min',
      tags: ['Douyin', 'Marketing', 'Social Media']
    },
    {
      id: 'deepseek',
      title: 'DeepSeek AI & DSGVO',
      description: 'Datenschutz-Compliance bei der Nutzung von DeepSeek und anderen chinesischen KI-Tools',
      icon: Cpu,
      link: '/deepseek-dsgvo',
      category: 'social',
      difficulty: 'Fortgeschritten',
      readTime: '12 Min',
      tags: ['KI', 'DeepSeek', 'AI Tools'],
      popular: true
    },
    {
      id: 'eu-vertreter',
      title: 'EU-Vertreter für China-Unternehmen',
      description: 'Anforderungen und Pflichten für EU-Vertreter nach Art. 27 DSGVO',
      icon: Users,
      link: '/eu-vertreter-china',
      category: 'legal',
      difficulty: 'Fortgeschritten',
      readTime: '10 Min',
      tags: ['Art. 27 DSGVO', 'Vertreter', 'Rechtspflichten']
    },
    {
      id: 'artikel-15',
      title: 'Artikel 15 DSGVO Auskunftsrecht',
      description: 'Umsetzung des Auskunftsrechts bei China-Datenflüssen',
      icon: FileText,
      link: '/artikel-15-dsgvo-auskunftsrecht-china',
      category: 'legal',
      difficulty: 'Experte',
      readTime: '11 Min',
      tags: ['Auskunftsrecht', 'Betroffenenrechte', 'Art. 15']
    },
    {
      id: 'scc',
      title: 'China SCC vs. EU SCC',
      description: 'Vergleich der chinesischen und europäischen Standardvertragsklauseln',
      icon: Scale,
      link: '/china-scc-vs-eu-scc',
      category: 'legal',
      difficulty: 'Experte',
      readTime: '15 Min',
      tags: ['SCC', 'Standardverträge', 'Datentransfer']
    },
    {
      id: 'pipl-gdpr',
      title: 'PIPL vs. GDPR Vergleich',
      description: 'Unterschiede und Gemeinsamkeiten zwischen chinesischem PIPL und EU-DSGVO',
      icon: Globe,
      link: '/pipl-gdpr-china',
      category: 'legal',
      difficulty: 'Experte',
      readTime: '14 Min',
      tags: ['PIPL', 'Rechtsvergleich', 'China-Recht'],
      popular: true
    },
    {
      id: 'joint-venture',
      title: 'Joint Ventures & Datenschutz',
      description: 'DSGVO-Compliance bei deutsch-chinesischen Joint Ventures',
      icon: Briefcase,
      link: '/joint-venture-china-datenschutz',
      category: 'business',
      difficulty: 'Experte',
      readTime: '13 Min',
      tags: ['Joint Venture', 'M&A', 'Kooperationen']
    },
    {
      id: 'investitionen',
      title: 'China Investitionen & DSGVO',
      description: 'Datenschutz-Screening bei Investitionen in oder aus China',
      icon: TrendingUp,
      link: '/china-investitionen-dsgvo-screening',
      category: 'business',
      difficulty: 'Experte',
      readTime: '12 Min',
      tags: ['Investment', 'Due Diligence', 'Screening']
    }
  ];

  const filteredArticles = selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Einsteiger': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'Mittel': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'Fortgeschritten': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'Experte': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  return (
    <>
      <SEOHead
        title="DSGVO & Datenschutz China – Praxisguide für Unternehmen"
        description="13 Praxisartikel zu DSGVO-Compliance im China-Geschäft: E-Commerce, Social Media, rechtliche Grundlagen und Investment. ✓ Amazon ✓ TikTok ✓ DeepSeek ✓ EU-Vertreter"
        canonical="/wissen/china"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
        <Header />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <motion.section
        ref={heroRef}
        style={{ y, opacity }}
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 backdrop-blur-sm rounded-full mb-8 border border-red-500/20"
            >
              <Globe className="h-5 w-5 text-red-400 animate-spin-slow" />
              <span className="text-sm font-semibold text-red-300">China & DSGVO</span>
              <Shield className="h-5 w-5 text-orange-400 animate-pulse" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
              >
                DSGVO & China-Geschäft
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              13 Praxisartikel für <span className="font-semibold text-red-300">DSGVO-konforme</span> Geschäfte mit China:
              E-Commerce, Social Media, rechtliche Grundlagen und Investment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Link to="/dsgvo-china">
                    <Shield className="mr-2 h-5 w-5" />
                    DSGVO China Software
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { value: '13', label: 'Praxisartikel', icon: FileText, color: 'from-red-500 to-orange-500' },
              { value: '4', label: 'Kategorien', icon: BookOpen, color: 'from-orange-500 to-yellow-500' },
              { value: '100%', label: 'Praxisnah', icon: CheckCircle2, color: 'from-yellow-500 to-red-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-200">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border-2",
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white border-red-500 shadow-xl"
                    : "bg-slate-800/60 text-slate-300 border-slate-700/50 hover:border-red-500/50 hover:text-red-300"
                )}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
                <Badge className="bg-slate-700 text-slate-200 border-0 text-xs">
                  {category.count}
                </Badge>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />

                <Card className="relative h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="p-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 shadow-lg"
                      >
                        <article.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      {article.popular && (
                        <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                          Beliebt
                        </Badge>
                      )}
                    </div>

                    <div className="mb-6 flex-grow">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-300 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {article.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {article.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="border-slate-600 text-slate-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-1">
                          <CheckCircle2 className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                        <Badge className={getDifficultyColor(article.difficulty)}>
                          {article.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-auto"
                    >
                      <Button asChild className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                        <Link to={article.link} className="flex items-center justify-center gap-2">
                          <span>Artikel lesen</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/10 to-red-900/20" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center bg-slate-800/60 backdrop-blur-sm rounded-3xl p-12 border-2 border-slate-700/50"
          >
            <AlertCircle className="h-16 w-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              DSGVO China Compliance automatisieren
            </h2>

            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Nutzen Sie unsere Software für automatisierte DSGVO-Compliance im China-Geschäft
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Link to="/dsgvo-china">
                  <Shield className="mr-3 h-6 w-6" />
                  Zur DSGVO China Lösung
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
};

export default ChinaDsgvo;
