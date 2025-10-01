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
  Zap,
  Brain,
  Lock,
  Eye,
  Settings,
  Award,
  Target,
  Layers,
  Database,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';

export const Resources: React.FC = () => {
  // Assessment Categories - Updated 2025
  const assessmentCategories = [
    {
      id: 'dsgvo',
      title: 'DSGVO & Datenschutz',
      subtitle: 'Europäische Datenschutz-Grundverordnung',
      description: 'Umfassende Assessments für DSGVO-Compliance und Datenschutz-Management',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      assessments: [
        {
          id: 'dsgvo-compliance-checklist',
          icon: CheckSquare,
          title: 'DSGVO-Compliance-Checkliste 2025',
          description: '47-Punkte Selbstaudit für vollständige DSGVO-Konformität',
          features: ['47 Prüfpunkte', 'Sofort-Bewertung', 'Handlungsempfehlungen', 'Excel & PDF']
        },
        {
          id: 'datenschutz-test',
          icon: BarChart3,
          title: '⭐ DSGVO Datenschutz Test',
          description: 'Kostenloser interaktiver Test mit Compliance-Score und personalisierten Empfehlungen',
          features: ['Interaktiver Test', 'Sofort-Score', 'Lücken-Analyse', 'Handlungsempfehlungen'],
          featured: true
        },
        {
          id: 'datenschutz-readiness-assessment',
          icon: BarChart3,
          title: 'Datenschutz-Readiness-Assessment',
          description: 'Interaktiver Score mit personalisierten Empfehlungen',
          features: ['Interaktiver Test', 'Sofort-Score', 'Roadmap-Erstellung', 'Benchmarking']
        },
        {
          id: 'breach-response-checklist',
          icon: AlertTriangle,
          title: 'Breach-Response-Checklist',
          description: '72h-Notfallplan bei Datenpannen und Sicherheitsvorfällen',
          features: ['72h-Timeline', 'Meldepflichten', 'Kommunikation', 'Dokumentation']
        },
        {
          id: 'cookie-compliance-audit',
          icon: Cookie,
          title: 'Cookie-Compliance-Audit',
          description: 'Website-Prüfliste für rechtskonforme Cookie-Nutzung',
          features: ['Cookie-Scanner', 'Consent-Check', 'Banner-Optimierung', 'Rechtssicherheit']
        }
      ]
    },
    {
      id: 'ai-act',
      title: 'EU AI Act',
      subtitle: 'Europäische KI-Verordnung',
      description: 'Spezialisierte Assessments für KI-Systeme und AI Act Compliance',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      assessments: [
        {
          id: 'ai-risk-assessment',
          icon: Target,
          title: 'AI Risk Assessment',
          description: 'Klassifizierung Ihrer KI-Systeme nach EU AI Act Risikoebenen',
          features: ['Risikoklassifizierung', 'Compliance-Check', 'Mitigation-Plan', 'Dokumentation']
        },
        {
          id: 'algorithmic-impact-assessment',
          icon: BarChart3,
          title: 'Algorithmic Impact Assessment',
          description: 'Bewertung gesellschaftlicher Auswirkungen Ihrer KI-Algorithmen',
          features: ['Impact-Analyse', 'Bias-Detection', 'Fairness-Metrics', 'Reporting']
        },
        {
          id: 'ai-governance-check',
          icon: Settings,
          title: 'AI Governance Check',
          description: 'Überprüfung Ihrer AI Governance-Strukturen und -Prozesse',
          features: ['Governance-Framework', 'Verantwortlichkeiten', 'Kontrollmechanismen', 'Audit-Trail']
        }
      ]
    },
    {
      id: 'iso27001',
      title: 'ISO 27001',
      subtitle: 'Informationssicherheits-Management',
      description: 'Assessments für ISO 27001 Zertifizierung und Informationssicherheit',
      icon: Lock,
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-800',
      assessments: [
        {
          id: 'iso27001-readiness-check',
          icon: CheckSquare,
          title: 'ISO 27001 Readiness Check',
          description: 'Bewertung Ihrer Bereitschaft für ISO 27001 Zertifizierung',
          features: ['Gap-Analyse', 'Roadmap', 'Control-Assessment', 'Zeitplanung']
        },
        {
          id: 'isms-maturity-assessment',
          icon: Award,
          title: 'ISMS Maturity Assessment',
          description: 'Reifegrad-Bewertung Ihres Informationssicherheits-Management-Systems',
          features: ['Maturity-Level', 'Verbesserungspotentiale', 'Benchmarking', 'Action-Plan']
        },
        {
          id: 'security-controls-audit',
          icon: Eye,
          title: 'Security Controls Audit',
          description: 'Systematische Überprüfung aller ISO 27001 Sicherheitskontrollen',
          features: ['140+ Controls', 'Compliance-Status', 'Schwachstellen', 'Remediation']
        }
      ]
    },
    {
      id: 'other-frameworks',
      title: 'Weitere Frameworks',
      subtitle: 'SOC2, NIS2, TISAX & mehr',
      description: 'Assessments für zusätzliche Compliance-Frameworks und Zertifizierungen',
      icon: Layers,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50 dark:bg-amber-950/20',
      borderColor: 'border-amber-200 dark:border-amber-800',
      assessments: [
        {
          id: 'soc2-readiness-assessment',
          icon: Database,
          title: 'SOC 2 Readiness Assessment',
          description: 'Vorbereitung auf SOC 2 Type I/II Audits',
          features: ['Trust Services', 'Control-Design', 'Evidence-Collection', 'Audit-Prep']
        },
        {
          id: 'nis2-compliance-check',
          icon: Shield,
          title: 'NIS2 Compliance Check',
          description: 'Bewertung für NIS2-Richtlinie Cybersicherheit',
          features: ['Scope-Assessment', 'Risk-Management', 'Incident-Response', 'Reporting']
        },
        {
          id: 'vendor-assessment-template',
          icon: Users,
          title: 'Vendor Assessment Template',
          description: 'Bewertung und Auswahl DSGVO-konformer Auftragsverarbeiter',
          features: ['Bewertungsmatrix', 'Vertragsprüfung', 'Risk-Assessment', 'Monitoring-Plan']
        }
      ]
    }
  ];

  const stats = [
    { label: 'Assessment-Tools', value: '16', icon: Download },
    { label: 'Kategorien', value: '4', icon: Users },
    { label: 'Frameworks', value: '8+', icon: Star },
    { label: 'Updates', value: '2025', icon: TrendingUp }
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
              <span className="text-sm font-medium">Assessment-Center</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Assessment-Tools für
              <br />
              <span className="bg-gradient-to-r from-brand-red via-red-600 to-orange-500 bg-clip-text text-transparent">
                professionelle Compliance
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Umfassende Assessment-Tools für alle wichtigen Compliance-Frameworks. 
              Kategorisiert nach DSGVO, EU AI Act, ISO 27001 und weiteren Standards.
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

      {/* Assessment Categories */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Assessment-Tools nach Kategorien
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Spezialisierte Assessment-Tools für jeden Compliance-Bereich. Von DSGVO über EU AI Act bis ISO 27001 - 
                alle wichtigen Frameworks abgedeckt.
              </p>
            </div>

            {/* Categories */}
            <div className="space-y-16">
              {assessmentCategories.map((category, categoryIndex) => (
                <div key={category.id} className="relative">
                  {/* Category Header */}
                  <div className={cn(
                    "flex items-center gap-4 mb-8 p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg",
                    category.bgColor,
                    category.borderColor
                  )}>
                    <div className={cn(
                      "p-4 rounded-xl bg-gradient-to-r shadow-lg",
                      category.color
                    )}>
                      <category.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {category.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                        {category.subtitle}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {category.description}
                      </p>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-400" />
                  </div>

                  {/* Category Assessments */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-8">
                    {category.assessments.map((assessment, assessmentIndex) => (
                      <Card
                        key={assessment.id}
                        className={cn(
                          "group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
                          (assessment as any).featured
                            ? "border-2 border-brand-red ring-2 ring-brand-red/20 shadow-lg"
                            : "border border-gray-200 dark:border-gray-700"
                        )}
                      >
                        {(assessment as any).featured && (
                          <div className="absolute top-4 right-4 z-10">
                            <Badge className="bg-brand-red text-white border-0 shadow-lg">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          </div>
                        )}
                        <CardContent className="p-6">
                          {/* Assessment Header */}
                          <div className="flex items-start gap-4 mb-4">
                            <div className={cn(
                              "p-3 rounded-lg bg-gradient-to-r shadow-md",
                              category.color
                            )}>
                              <assessment.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-brand-red transition-colors">
                                {assessment.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {assessment.description}
                              </p>
                            </div>
                          </div>

                          {/* Features */}
                          <div className="space-y-2 mb-6">
                            {assessment.features.map((feature, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className={cn(
                                  "w-1.5 h-1.5 rounded-full bg-gradient-to-r",
                                  category.color
                                )} />
                                <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
                              </div>
                            ))}
                          </div>

                          {/* CTA Button */}
                          <Link to={`/assessment-center/${assessment.id}`}>
                            <Button 
                              className={cn(
                                "w-full bg-gradient-to-r text-white shadow-md hover:shadow-lg transition-all duration-300",
                                category.color
                              )}
                              size="sm"
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Assessment starten
                              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
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
                  Benötigen Sie maßgeschneiderte Assessments?
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                  Unsere Compliance-Experten entwickeln individuelle Assessment-Tools speziell für Ihre 
                  Branche und Compliance-Anforderungen.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact?demo=true">
                    <Button 
                      size="lg" 
                      className="bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                    >
                      <FileText className="mr-2 h-5 w-5" />
                      Individuelles Assessment anfragen
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