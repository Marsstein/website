import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield,
  Award,
  Users,
  Building2,
  Star,
  CheckCircle,
  Globe,
  Lock,
  FileCheck,
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const TrustIndicators: React.FC = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'ISO 27001',
      subtitle: 'Informationssicherheit',
      description: 'Zertifiziert für höchste Sicherheitsstandards',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20'
    },
    {
      icon: Award,
      title: 'SOC 2 Type II',
      subtitle: 'Compliance Audit',
      description: 'Jährliche Prüfung durch unabhängige Auditoren',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20'
    },
    {
      icon: FileCheck,
      title: 'DSGVO Ready',
      subtitle: 'Datenschutz-Konformität',
      description: '100% konform mit europäischen Datenschutzgesetzen',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20'
    },
    {
      icon: Globe,
      title: 'EU AI Act',
      subtitle: 'KI-Gesetz Compliance',
      description: 'Bereit für die neuen KI-Regulierungen',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Vertrauende Unternehmen',
      subtext: 'Von Startups bis DAX-Konzerne'
    },
    {
      icon: Building2,
      value: '99.9%',
      label: 'Verfügbarkeit',
      subtext: 'SLA-garantiert'
    },
    {
      icon: Lock,
      value: '0',
      label: 'Datenlecks',
      subtext: 'Seit Gründung 2019'
    },
    {
      icon: TrendingUp,
      value: '4.9/5',
      label: 'Kundenzufriedenheit',
      subtext: 'Basierend auf 200+ Reviews'
    }
  ];

  const customerLogos = [
    { name: 'TechCorp', sector: 'Technology' },
    { name: 'MedHealth', sector: 'Healthcare' },
    { name: 'FinanceFirst', sector: 'Financial Services' },
    { name: 'EduLearn', sector: 'Education' },
    { name: 'RetailMax', sector: 'Retail' },
    { name: 'ManufactureIT', sector: 'Manufacturing' }
  ];

  const testimonialHighlights = [
    {
      quote: "Marsstein hat unsere Audit-Vorbereitungszeit von 3 Monaten auf 2 Wochen reduziert.",
      author: "Dr. Sarah Weber",
      role: "Datenschutzbeauftragte",
      company: "TechCorp GmbH",
      rating: 5
    },
    {
      quote: "Die Automatisierung ermöglicht es uns, strategische Initiativen zu priorisieren.",
      author: "Michael Schmidt",
      role: "IT-Leiter",
      company: "MedHealth AG",
      rating: 5
    },
    {
      quote: "Die KI-gestützte Analyse identifiziert Compliance-Lücken, die manuell übersehen wurden.",
      author: "Lisa Chen",
      role: "Compliance Officer",
      company: "FinanceFirst",
      rating: 5
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Vertrauen & Sicherheit</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Über
              <span className="bg-gradient-to-r from-brand-red to-green-600 bg-clip-text text-transparent mx-2">
                500+ Unternehmen
              </span>
              setzen auf Marsstein
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Zertifizierte Sicherheitsstandards, nachvollziehbare Prozesse und messbare Resultate
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="space-y-3">
                  <div className="inline-flex p-3 rounded-full bg-brand-red/10 group-hover:bg-brand-red/20 transition-colors">
                    <stat.icon className="h-6 w-6 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {stat.subtext}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className={cn(
                  "p-6 hover:shadow-xl transition-all duration-300 hover:scale-105",
                  "bg-gradient-to-br",
                  cert.bgColor,
                  "border-2 border-gray-200 dark:border-gray-700 hover:border-brand-red/30"
                )}
              >
                <CardContent className="p-0 space-y-4">
                  <div className={cn(
                    "inline-flex p-3 rounded-xl",
                    `bg-gradient-to-r ${cert.color}`,
                    "text-white"
                  )}>
                    <cert.icon className="h-6 w-6" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {cert.subtitle}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {cert.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Customer Testimonials */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">Was unsere Kunden sagen</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonialHighlights.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-0 space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 dark:text-gray-300 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.role} • {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Customer Logos */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-8 text-gray-600 dark:text-gray-400">
              Partnerschaft mit führenden Unternehmen verschiedener Branchen
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">
              {customerLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="w-16 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded flex items-center justify-center mb-2">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {logo.name}
                  </p>
                  <p className="text-xs text-gray-500">
                    {logo.sector}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Security Promise */}
          <div className="mt-16">
            <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-2 border-green-200 dark:border-green-800">
              <div className="text-center space-y-4">
                <div className="inline-flex p-4 bg-green-100 dark:bg-green-900 rounded-full">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Sicherheits- und Compliance-Standards
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Daten bleiben in der EU</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Ende-zu-Ende Verschlüsselung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm">Regelmäßige Sicherheitsaudits</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};