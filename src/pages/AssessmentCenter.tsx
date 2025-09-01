import React from 'react';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Brain,
  BarChart3,
  Clock,
  Trophy,
  Users,
  Settings,
  FileText,
  Star,
  Award,
  TrendingUp,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AssessmentCenter = () => {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Assessment Center - Compliance Bewertungen",
      "description": "Umfassendes Assessment Center für DSGVO, ISO 27001, SOC 2 und KI-Risiko Bewertungen mit interaktiven Tools",
      "applicationCategory": "Assessment Platform",
      "url": "https://marsstein.ai/assessment-center",
      "isAccessibleForFree": true
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://marsstein.ai"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Assessment Center",
          "item": "https://marsstein.ai/assessment-center"
        }
      ]
    }
  ];

  const assessments = [
    {
      title: "DSGVO Compliance Checklist",
      description: "Umfassende Bewertung Ihrer DSGVO-Compliance mit detaillierten Handlungsempfehlungen",
      icon: Shield,
      url: "/assessment-center/dsgvo-compliance-checklist",
      difficulty: "Mittel",
      color: "from-blue-500 to-cyan-500",
      tags: ["DSGVO", "Datenschutz", "EU-Recht"]
    },
    {
      title: "ISO 27001 Maturity Assessment",
      description: "Bewertung der ISMS-Reife und Identifikation von Verbesserungspotenzialen",
      icon: Target,
      url: "/assessment-center/isms-maturity-assessment", 
      difficulty: "Hoch",
      color: "from-purple-500 to-pink-500",
      tags: ["ISO 27001", "ISMS", "Security"]
    },
    {
      title: "SOC 2 Readiness Assessment",
      description: "Vorbereitung auf SOC 2 Zertifizierung mit Gap-Analyse und Roadmap",
      icon: Award,
      url: "/assessment-center/soc2-readiness-assessment",
 
      difficulty: "Mittel",
      color: "from-emerald-500 to-teal-500",
      tags: ["SOC 2", "Compliance", "Trust Principles"]
    },
    {
      title: "KI-Risiko Assessment",
      description: "EU AI Act konforme Risikobewertung für KI-Systeme und Algorithmen",
      icon: Brain,
      url: "/assessment-center/ai-risk-assessment",
      difficulty: "Hoch", 
      color: "from-orange-500 to-red-500",
      tags: ["EU AI Act", "KI-Risiko", "Algorithmen"]
    },
    {
      title: "Algorithmic Impact Assessment",
      description: "Bewertung gesellschaftlicher Auswirkungen algorithmischer Entscheidungssysteme",
      icon: TrendingUp,
      url: "/assessment-center/algorithmic-impact-assessment",
      difficulty: "Hoch",
      color: "from-indigo-500 to-purple-500", 
      tags: ["AIA", "Algorithmen", "Impact"]
    }
  ];

  return (
    <>
      <SEOHead
        title="Assessment Center – Compliance & Risiko Bewertungen"
        description="Interaktives Assessment Center für DSGVO, ISO 27001, SOC 2 und KI-Risiko Bewertungen. ✓ Professionelle Tools ✓ Detaillierte Analysen ✓ Handlungsempfehlungen."
        canonical="/assessment-center"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
              >
                <Target className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300">Professional Assessment Tools</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8">
                <span className="text-white">Assessment Center</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Professionelle Compliance- und Risikobewertungen für <span className="font-semibold text-purple-300">DSGVO, ISO 27001, SOC 2</span> und 
                <span className="font-semibold text-pink-300"> KI-Systeme</span>. Wissenschaftlich fundiert, praxisnah und sofort umsetzbar.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <Trophy className="mr-2 h-5 w-5" />
                  Assessment starten
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm"
                >
                  Überblick ansehen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="grid grid-cols-2 gap-6 max-w-2xl mx-auto"
            >
              {[
                { value: '5', label: 'Assessment Tools', sublabel: 'Verschiedene Bereiche', icon: Target, color: 'from-blue-500 to-cyan-500' },
                { value: '100+', label: 'Kriterien geprüft', sublabel: 'Umfassende Analyse', icon: CheckCircle2, color: 'from-emerald-500 to-teal-500' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                  className="relative group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm font-semibold text-slate-200 mb-1">{stat.label}</div>
                    <div className="text-xs text-slate-400">{stat.sublabel}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Assessments Grid */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                  Verfügbare Compliance-Assessments
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                Wählen Sie das passende Assessment für Ihren Compliance-Bereich
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {assessments.map((assessment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-2xl transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${assessment.color}`}>
                          <assessment.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-right">
                          <Badge className={`bg-gradient-to-r ${assessment.color} text-white`}>
                            {assessment.difficulty}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                        {assessment.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {assessment.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {assessment.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-slate-700 text-slate-300 text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Link to={assessment.url}>
                        <Button className={`w-full bg-gradient-to-r ${assessment.color} text-white hover:opacity-90 transition-opacity`}>
                          Assessment starten
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                  Warum unser Assessment Center?
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300">
                Professionelle Tools für präzise Compliance-Bewertungen
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Wissenschaftlich fundiert",
                  description: "Alle Assessments basieren auf aktuellen Standards und Best Practices aus der Compliance-Forschung",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: BarChart3,
                  title: "Detaillierte Analysen",
                  description: "Erhalten Sie umfassende Reports mit Gap-Analysen, Risikobewertungen und priorisierten Handlungsempfehlungen",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Zap,
                  title: "Sofort umsetzbar",
                  description: "Konkrete, praxisnahe Empfehlungen die Sie direkt in Ihrem Unternehmen implementieren können",
                  color: "from-emerald-500 to-teal-500"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Card className="h-full p-8 bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-2xl transition-all duration-300">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AssessmentCenter;