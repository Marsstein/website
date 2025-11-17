import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Clock,
  Star,
  Download,
  BookOpen,
  Target,
  AlertTriangle,
  Lightbulb,
  FileText,
  Users,
  Scale,
  Lock,
  Eye,
  Gavel,
  Euro,
  Calendar,
  ChevronRight,
  Share2,
  Bookmark,
  ExternalLink,
  Filter,
  Search,
  SortAsc,
  Grid,
  List,
  Building2,
  Globe,
  Database,
  Settings,
  Code,
  Brain,
  TrendingUp,
  Zap,
  UserCheck,
  BadgeCheck,
  FileCheck,
  AlertOctagon,
  Info,
  HelpCircle,
  Play,
  BarChart3,
  PieChart,
  Activity,
  Cpu,
  Server,
  Cloud,
  Network,
  Smartphone,
  Monitor,
  Wifi,
  Building,
  Factory,
  Briefcase,
  GraduationCap,
  Heart,
  MapPin,
  Flag,
  Home,
  Car,
  Truck,
  Plane,
  Ship,
  Layers,
  Package,
  ShoppingCart,
  Church,
  Cross
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';

const ComplianceFrameworks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const categories = [
    { id: 'all', name: 'Alle Frameworks', icon: Award, count: 15 },
    { id: 'security', name: 'IT-Sicherheit', icon: Shield, count: 4 },
    { id: 'privacy', name: 'Datenschutz', icon: Lock, count: 5 },
    { id: 'industry', name: 'Branchenstandards', icon: Building2, count: 3 },
    { id: 'ai', name: 'KI & Automation', icon: Brain, count: 3 }
  ];

  const difficulties = [
    { id: 'all', name: 'Alle Level', count: 15 },
    { id: 'beginner', name: 'Einsteiger', count: 3 },
    { id: 'intermediate', name: 'Fortgeschritten', count: 9 },
    { id: 'expert', name: 'Experte', count: 3 }
  ];

  const frameworks = [
    {
      id: 'iso-27001',
      title: 'ISO 27001',
      subtitle: 'Information Security Management',
      description: 'Internationaler Standard für Informationssicherheits-Managementsysteme (ISMS). Definiert systematische Herangehensweise an das Management sensibler Unternehmensinformationen.',
      category: 'security',
      difficulty: 'expert',
      readTime: '45 Min',
      implementationTime: '6-12 Monate',
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      link: '/compliance/iso-27001',
      popular: true,
      certification: true,
      compliance: 98,
      lastUpdated: '2024-01-15',
      industries: ['Fintech', 'Healthcare', 'Government', 'Enterprise'],
      benefits: [
        'Internationale Anerkennung',
        'Risikomanagement',
        'Vertrauen bei Kunden',
        'Compliance-Nachweis'
      ],
      requirements: [
        'ISMS-Dokumentation',
        'Risikobewertung',
        'Interne Audits',
        'Management Review'
      ],
      keyAreas: [
        'Informationssicherheitspolitik',
        'Organisation der Informationssicherheit',
        'Personalwesen',
        'Vermögenswerte-Management',
        'Zugangskontrollen',
        'Kryptographie',
        'Physische und umgebende Sicherheit',
        'Betriebssicherheit',
        'Kommunikationssicherheit',
        'Systemakquisition, -entwicklung und -wartung',
        'Lieferantenbeziehungen',
        'Incident Management',
        'Business Continuity',
        'Compliance'
      ],
      stats: {
        companies: '27.000+',
        countries: '170+',
        satisfaction: '94%'
      }
    },
    {
      id: 'soc2',
      title: 'SOC 2 Type II',
      subtitle: 'Service Organization Control',
      description: 'Audit-Framework für Service-Organisationen zur Bewertung interner Kontrollen bezüglich Sicherheit, Verfügbarkeit, Verarbeitungsintegrität, Vertraulichkeit und Datenschutz.',
      category: 'security',
      difficulty: 'expert',
      readTime: '40 Min',
      implementationTime: '4-8 Monate',
      icon: BadgeCheck,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900',
      link: '/compliance/soc-2',
      certification: true,
      compliance: 96,
      lastUpdated: '2024-01-20',
      industries: ['SaaS', 'Cloud Services', 'Fintech', 'Healthcare'],
      benefits: [
        'Vertrauen bei US-Kunden',
        'Competitive Advantage',
        'Risikominimierung',
        'Prozessoptimierung'
      ],
      requirements: [
        'Trust Services Criteria',
        'Control Environment',
        'Risk Assessment',
        'Information Systems'
      ],
      keyAreas: [
        'Security (Sicherheit)',
        'Availability (Verfügbarkeit)',
        'Processing Integrity (Verarbeitungsintegrität)',
        'Confidentiality (Vertraulichkeit)',
        'Privacy (Datenschutz)'
      ],
      stats: {
        companies: '15.000+',
        countries: '25+',
        satisfaction: '91%'
      }
    },
    {
      id: 'eu-ai-act',
      title: 'EU AI Act',
      subtitle: 'European Artificial Intelligence Act',
      description: 'Erste umfassende KI-Regulierung weltweit. Regelt die Entwicklung, das Inverkehrbringen und die Nutzung von KI-Systemen in der EU mit risikobasiertem Ansatz.',
      category: 'ai',
      difficulty: 'intermediate',
      readTime: '35 Min',
      implementationTime: '3-6 Monate',
      icon: Brain,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      link: '/compliance/eu-ai-act',
      upcoming: true,
      compliance: 85,
      lastUpdated: '2024-01-22',
      effectiveDate: '2025-08-02',
      industries: ['AI/ML', 'Healthcare', 'Finance', 'Automotive', 'Recruitment'],
      benefits: [
        'EU-Marktzugang',
        'Vertrauen schaffen',
        'Risikominimierung',
        'Innovation fördern'
      ],
      requirements: [
        'Risikoklassifizierung',
        'Konformitätsbewertung',
        'CE-Kennzeichnung',
        'Marktüberwachung'
      ],
      keyAreas: [
        'Verbotene KI-Praktiken',
        'Hochrisiko-KI-Systeme',
        'Transparenzpflichten',
        'Foundation Models',
        'Governance und Überwachung'
      ],
      stats: {
        riskCategories: '4',
        prohibitedUses: '8+',
        compliance: 'Mandatory'
      }
    },
    {
      id: 'eu-data-act',
      title: 'EU Data Act',
      subtitle: 'Data Access & Cloud Switching',
      description: 'EU-Verordnung für Datenzugang und Cloud-Portabilität. Regelt Datenzugangsrechte für Connected Products, Cloud-Switching und B2B Data Sharing nach FRAND-Prinzipien.',
      category: 'ai',
      difficulty: 'intermediate',
      readTime: '30 Min',
      implementationTime: '3-6 Monate',
      icon: Database,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      link: '/eu-data-act',
      upcoming: true,
      compliance: 89,
      lastUpdated: '2025-01-26',
      effectiveDate: '2025-09-12',
      industries: ['IoT', 'Cloud Provider', 'Manufacturing', 'Smart Devices'],
      benefits: [
        'Datenzugangsrechte',
        'Cloud-Unabhängigkeit',
        'Neue Geschäftsmodelle',
        'FRAND-Compliance'
      ],
      requirements: [
        'User Data Access APIs',
        'Cloud Switching (30 Tage)',
        'FRAND B2B Sharing',
        'Emergency Data Access'
      ],
      keyAreas: [
        'Connected Product Data',
        'Cloud Portability',
        'B2B Data Sharing',
        'Public Emergency Access',
        'IoT Device Design'
      ],
      stats: {
        effectiveDate: 'Sept 2025',
        cloudDeadline: '2027',
        marketSize: '100+ Mrd. €'
      }
    },
    {
      id: 'tisax',
      title: 'TISAX',
      subtitle: 'Trusted Information Security Assessment Exchange',
      description: 'Branchenstandard der Automobilindustrie für Informationssicherheit. Basiert auf ISO 27001 mit automobilspezifischen Anforderungen und Bewertungsverfahren.',
      category: 'industry',
      difficulty: 'expert',
      readTime: '30 Min',
      implementationTime: '4-8 Monate',
      icon: Car,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900',
      link: '/compliance/tisax',
      certification: true,
      compliance: 94,
      lastUpdated: '2024-01-18',
      industries: ['Automotive', 'Supplier', 'Manufacturing'],
      benefits: [
        'Automobilbranche-Zugang',
        'Lieferantenstatus',
        'Einheitliches Assessment',
        'Kosteneinsparung'
      ],
      requirements: [
        'ISA-Katalog',
        'Assessment durch Provider',
        'Scope Definition',
        'TISAX-Label'
      ],
      keyAreas: [
        'Information Security',
        'Prototype Protection',
        'Data Protection'
      ],
      stats: {
        participants: '4.500+',
        assessments: '12.000+',
        coverage: 'Global'
      }
    },
    {
      id: 'dsgvo',
      title: 'DSGVO/GDPR',
      subtitle: 'Datenschutz-Grundverordnung',
      description: 'EU-Verordnung zum Schutz personenbezogener Daten. Regelt Verarbeitung, Übertragung und Schutz von Daten natürlicher Personen innerhalb der EU.',
      category: 'privacy',
      difficulty: 'intermediate',
      readTime: '25 Min',
      implementationTime: '2-6 Monate',
      icon: Lock,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-green-900 to-slate-900',
      link: '/compliance/dsgvo',
      mandatory: true,
      compliance: 100,
      lastUpdated: '2024-01-25',
      maxFine: '20 Mio. € oder 4% Jahresumsatz',
      industries: ['Alle EU-Unternehmen'],
      benefits: [
        'Rechtskonformität',
        'Vertrauen schaffen',
        'Einheitliche Standards',
        'Wettbewerbsvorteil'
      ],
      requirements: [
        'Verarbeitungsverzeichnis',
        'Datenschutzbeauftragter',
        'Technische Maßnahmen',
        'Betroffenenrechte'
      ],
      keyAreas: [
        'Rechtmäßigkeit der Verarbeitung',
        'Transparenz und Information',
        'Betroffenenrechte',
        'Datenschutz durch Technik',
        'Internationale Übertragungen',
        'Aufsichtsbehörden',
        'Haftung und Sanktionen'
      ],
      stats: {
        articles: '99',
        countries: '27',
        maxFine: '20M€'
      }
    },
    {
      id: 'nis2',
      title: 'NIS2 Direktive',
      subtitle: 'Network and Information Security',
      description: 'EU-Richtlinie zur Cybersicherheit kritischer Infrastrukturen. Aktualisierung der ursprünglichen NIS-Direktive mit erweiterten Anforderungen.',
      category: 'security',
      difficulty: 'intermediate',
      readTime: '30 Min',
      implementationTime: '6-12 Monate',
      icon: Network,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900',
      link: '/compliance/nis2',
      mandatory: true,
      compliance: 88,
      lastUpdated: '2024-01-20',
      deadline: '17. Oktober 2024',
      industries: ['Kritische Infrastruktur', 'Digitale Dienste', 'Telekommunikation'],
      benefits: [
        'Cyber-Resilienz',
        'EU-Harmonisierung',
        'Risikominimierung',
        'Incident Response'
      ],
      requirements: [
        'Cybersicherheitsmaßnahmen',
        'Incident Reporting',
        'Risikomanagement',
        'Lieferketten-Sicherheit'
      ],
      keyAreas: [
        'Wesentliche Einrichtungen',
        'Wichtige Einrichtungen',
        'Cybersicherheitsmaßnahmen',
        'Incident Reporting',
        'Aufsicht und Durchsetzung'
      ],
      stats: {
        sectors: '18',
        entities: '160.000+',
        deadline: 'Okt 2024'
      }
    },
    {
      id: 'iso-27017',
      title: 'ISO 27017',
      subtitle: 'Cloud Security Controls',
      description: 'Leitfaden für Informationssicherheitskontrollen in Cloud-Services. Ergänzt ISO 27001/27002 um cloudspezifische Sicherheitsanforderungen.',
      category: 'security',
      difficulty: 'intermediate',
      readTime: '25 Min',
      implementationTime: '3-6 Monate',
      icon: Cloud,
      color: 'from-sky-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900',
      link: '/compliance/iso-27017',
      certification: true,
      compliance: 92,
      lastUpdated: '2024-01-16',
      industries: ['Cloud Provider', 'SaaS', 'IaaS', 'PaaS'],
      benefits: [
        'Cloud-spezifische Sicherheit',
        'Vertrauen bei Cloud-Nutzung',
        'Best Practices',
        'Compliance-Nachweis'
      ],
      requirements: [
        'Cloud-Sicherheitskontrollen',
        'Shared Responsibility Model',
        'Data Location',
        'Virtual Environment Security'
      ],
      keyAreas: [
        'Cloud Service Customer',
        'Cloud Service Provider',
        'Shared Controls',
        'Data Protection in Cloud'
      ],
      stats: {
        controls: '37',
        cloudFocus: '100%',
        adoption: 'Growing'
      }
    },
    {
      id: 'iso-27018',
      title: 'ISO 27018',
      subtitle: 'Cloud Privacy Protection',
      description: 'Standard für Datenschutz in öffentlichen Cloud-Computing-Umgebungen. Erste internationale Norm speziell für Cloud-Datenschutz als Zusatz zu ISO 27001.',
      category: 'privacy',
      difficulty: 'intermediate',
      readTime: '20 Min',
      implementationTime: '2-4 Monate',
      icon: Shield,
      color: 'from-violet-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900',
      link: '/compliance/iso-27018',
      certification: true,
      compliance: 90,
      lastUpdated: '2024-01-14',
      industries: ['Cloud Provider', 'Public Cloud', 'Multi-Tenant Services'],
      benefits: [
        'Cloud-Datenschutz',
        'GDPR-Komplementär',
        'Kundenvertrauen',
        'Transparenz'
      ],
      requirements: [
        'Privacy Impact Assessment',
        'Data Return/Deletion',
        'Subprocessor Management',
        'Transparency Reports'
      ],
      keyAreas: [
        'Consent and Choice',
        'Purpose Limitation',
        'Collection Limitation',
        'Use Limitation',
        'Retention Limitation',
        'Disclosure Limitation'
      ],
      stats: {
        principles: '6',
        controls: '40+',
        focus: 'Cloud Privacy'
      }
    },
    {
      id: 'hinweisgeberschutz',
      title: 'Hinweisgeberschutzgesetz',
      subtitle: 'Whistleblower Protection Act',
      description: 'Deutsches Gesetz zum Schutz von Hinweisgebern. Umsetzung der EU-Whistleblower-Richtlinie mit Anforderungen an interne Meldesysteme.',
      category: 'privacy',
      difficulty: 'beginner',
      readTime: '15 Min',
      implementationTime: '1-3 Monate',
      icon: UserCheck,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900',
      link: '/compliance/hinweisgeberschutzgesetz',
      mandatory: true,
      compliance: 75,
      lastUpdated: '2024-01-12',
      effectiveDate: '2. Juli 2023',
      industries: ['Unternehmen >250 MA', 'Bestimmte Branchen >50 MA'],
      benefits: [
        'Rechtskonformität',
        'Früherkennung von Missständen',
        'Reputationsschutz',
        'Präventive Wirkung'
      ],
      requirements: [
        'Interne Meldestelle',
        'Meldekanäle',
        'Vertraulichkeit',
        'Dokumentation'
      ],
      keyAreas: [
        'Interne Meldestellen',
        'Meldeverfahren',
        'Schutz vor Vergeltung',
        'Vertraulichkeit',
        'Nachverfolgung'
      ],
      stats: {
        threshold: '250+ MA',
        sectors: 'Regulated',
        protection: 'Full'
      }
    },
    {
      id: 'geldwaeschegesetz',
      title: 'Geldwäschegesetz',
      subtitle: 'Anti-Money Laundering Act',
      description: 'Deutsches Gesetz zur Verhinderung von Geldwäsche und Terrorismusfinanzierung. Umsetzung der EU-Geldwäsche-Richtlinien mit umfassenden Compliance-Anforderungen.',
      category: 'industry',
      difficulty: 'expert',
      readTime: '40 Min',
      implementationTime: '6-12 Monate',
      icon: Euro,
      color: 'from-rose-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900',
      link: '/compliance/geldwaeschegesetz',
      mandatory: true,
      compliance: 95,
      lastUpdated: '2024-01-19',
      industries: ['Banken', 'Finanzdienstleister', 'Immobilien', 'Glücksspiel'],
      benefits: [
        'Rechtssicherheit',
        'Risikominimierung',
        'Reputationsschutz',
        'Marktakzeptanz'
      ],
      requirements: [
        'Kundenidentifizierung (KYC)',
        'Verdachtsmeldungen',
        'Aufzeichnungspflichten',
        'Mitarbeiterschulungen'
      ],
      keyAreas: [
        'Kundensorgfaltspflichten',
        'Verdachtsanzeigen',
        'Aufbewahrungspflichten',
        'Risikomanagement',
        'Aufsicht und Sanktionen'
      ],
      stats: {
        sectors: '15+',
        reporting: 'BaFin',
        penalties: 'Up to 5M€'
      }
    },
    {
      id: 'dsg-ekd',
      title: 'DSG-EKD',
      subtitle: 'Kirchlicher Datenschutz',
      description: 'Datenschutzgesetz der Evangelischen Kirche in Deutschland. Spezifische Regelung für kirchliche Einrichtungen mit Fokus auf Seelsorgegeheimnis und Gemeindedaten.',
      category: 'privacy',
      difficulty: 'intermediate',
      readTime: '30 Min',
      implementationTime: '3-6 Monate',
      icon: Church,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      link: '/dsg-ekd',
      certification: false,
      compliance: 97,
      lastUpdated: '2024-01-26',
      industries: ['Kirchen', 'Gemeinden', 'Diakonie', 'Kirchliche Einrichtungen'],
      benefits: [
        'Kirchliche Autonomie',
        'Seelsorgegeheimnis',
        'Gemeindedatenschutz',
        'Vertrauensschutz'
      ],
      requirements: [
        'Kirchliche Datenschutzbeauftragte',
        'Seelsorge-Dokumentation',
        'Mitgliederdatenverwaltung',
        'Ehrenamtlichen-Schulung'
      ],
      keyAreas: [
        'Kirchliche Amtshandlungen',
        'Seelsorgegeheimnis',
        'Mitgliederverwaltung',
        'Gemeindekommunikation',
        'Ehrenamtlichen-Datenschutz',
        'Kirchenbuchführung'
      ],
      stats: {
        churches: '14.000+',
        members: '20.3M',
        speciality: 'Kirchenrecht'
      }
    },
    {
      id: 'kdg',
      title: 'KDG',
      subtitle: 'Katholischer Datenschutz',
      description: 'Gesetz über den Kirchlichen Datenschutz der katholischen Kirche. Spezifische Regelung für katholische Einrichtungen mit Fokus auf Beichtgeheimnis und sakramentale Daten.',
      category: 'privacy',
      difficulty: 'intermediate',
      readTime: '30 Min',
      implementationTime: '3-6 Monate',
      icon: Cross,
      color: 'from-amber-500 to-yellow-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900',
      link: '/compliance/kdg',
      certification: false,
      compliance: 96,
      lastUpdated: '2024-01-26',
      industries: ['Bistümer', 'Pfarreien', 'Caritas', 'Katholische Einrichtungen'],
      benefits: [
        'Kirchenrechtliche Konformität',
        'Beichtgeheimnis-Schutz',
        'Sakramentendatenschutz',
        'Diözesane Einheit'
      ],
      requirements: [
        'Diözesane Datenschutzbeauftragte',
        'Matrikelbuch-Verwaltung',
        'Caritas-Datenschutz',
        'Pfarrverwaltung'
      ],
      keyAreas: [
        'Sakramentale Datenverarbeitung',
        'Beichtgeheimnis',
        'Diözesanverwaltung',
        'Caritative Dienste',
        'Matrikelbuchführung',
        'Digitale Seelsorge'
      ],
      stats: {
        dioceses: '27',
        catholics: '12.1M',
        speciality: 'Kanonisches Recht'
      }
    }
  ];

  const filteredFrameworks = frameworks.filter(framework => {
    const matchesCategory = selectedCategory === 'all' || framework.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || framework.difficulty === selectedDifficulty;
    const matchesSearch = searchTerm === '' || 
      framework.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      framework.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      framework.industries.some(industry => industry.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'expert': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'security': return Shield;
      case 'privacy': return Lock;
      case 'industry': return Building2;
      case 'ai': return Brain;
      default: return Award;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F6F8] via-orange-50/20 to-[#F5F6F8]" style={{
      wordWrap: 'break-word',
      overflowWrap: 'break-word'
    }}>
      <SEOHead
        title="Compliance Frameworks 2024 - ISO 27001, SOC 2, DSGVO Guide"
        description="Compliance Frameworks Übersicht 2024: ISO 27001 ✓ SOC 2 ✓ DSGVO ✓ NIS2. Vergleich, Zertifizierung & Umsetzung. Kostenloses Assessment starten!"
        canonical="/wissen/compliance-frameworks"
        keywords="Compliance Frameworks, ISO 27001, SOC 2, DSGVO, NIS2, TISAX, Compliance Management, Zertifizierung, IT-Sicherheit"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Guide",
          "name": "Compliance Frameworks Übersicht 2024",
          "description": "Umfassender Leitfaden zu Compliance Frameworks mit Vergleich, Implementierungstipps und Zertifizierungswegen.",
          "audience": {
            "@type": "Audience",
            "audienceType": "Compliance Officers, IT Security Managers, Data Protection Officers"
          }
        }}
      />
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="container px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-[#474747] hover:text-[#e24e1b]">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[#474747]" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/wissen" className="text-[#474747] hover:text-[#e24e1b]">Wissen</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[#474747]" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#e24e1b] font-medium">Compliance Frameworks</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-b border-stone-200"
        style={{ y }}
      >
        <div className="relative container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-[#e24e1b] rounded-xl shadow-sm">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#232323]">
                Compliance Frameworks
              </h1>
            </div>
            <p className="text-xl text-[#474747] mb-8 max-w-4xl mx-auto leading-relaxed">
              Umfassende Leitfäden zu internationalen Compliance-Standards, Zertifizierungen und regulatorischen Frameworks.
              Navigieren Sie mit fachkundiger Anleitung durch die komplexe Landschaft moderner Compliance-Anforderungen.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <Award className="h-4 w-4 mr-2" />
                {frameworks.length} Frameworks
              </Badge>
              <Badge variant="outline" className="bg-blue-50 border-[#003366] text-[#003366]">
                <Building2 className="h-4 w-4 mr-2" />
                Alle Branchen
              </Badge>
              <Badge variant="outline" className="bg-stone-100 border-stone-400 text-[#474747]">
                <Globe className="h-4 w-4 mr-2" />
                International Standards
              </Badge>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Filters & Search */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Search */}
              <Card className="bg-white border-stone-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#474747]" />
                    <input
                      type="text"
                      placeholder="Search frameworks..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-[#F5F6F8] border border-stone-300 rounded-lg text-[#232323] placeholder-[#474747] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:border-transparent"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="bg-white border-stone-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#232323] mb-4">Kategorien</h3>
                  <div className="space-y-2">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
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
                            <IconComponent className="h-4 w-4" />
                            <span className="text-sm font-medium">{category.name}</span>
                          </div>
                          <Badge variant="outline" className="text-xs border-current">
                            {category.count}
                          </Badge>
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              {/* Difficulty */}
              <Card className="bg-white border-stone-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#232323] mb-4">Schwierigkeit</h3>
                  <div className="space-y-2">
                    {difficulties.map((difficulty) => (
                      <button
                        key={difficulty.id}
                        onClick={() => setSelectedDifficulty(difficulty.id)}
                        className={cn(
                          "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
                          selectedDifficulty === difficulty.id
                            ? "bg-orange-50 border border-[#e24e1b] text-[#e24e1b]"
                            : "border border-stone-200 text-[#474747] hover:bg-[#F5F6F8] hover:text-[#232323]"
                        )}
                      >
                        <span className="text-sm font-medium">{difficulty.name}</span>
                        <Badge variant="outline" className="text-xs border-current">
                          {difficulty.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* View Mode Toggle */}
              <Card className="bg-white border-stone-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#232323] mb-4">Ansicht</h3>
                  <div className="flex gap-2">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'outline'}
                      onClick={() => setViewMode('grid')}
                      className={cn(
                        "flex-1",
                        viewMode === 'grid' ? "bg-[#e24e1b] hover:bg-[#f97316] text-white" : "border-stone-300 text-[#474747] hover:bg-[#F5F6F8]"
                      )}
                    >
                      <Grid className="h-4 w-4 mr-2" />
                      Grid
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'outline'}
                      onClick={() => setViewMode('list')}
                      className={cn(
                        "flex-1",
                        viewMode === 'list' ? "bg-[#e24e1b] hover:bg-[#f97316] text-white" : "border-stone-300 text-[#474747] hover:bg-[#F5F6F8]"
                      )}
                    >
                      <List className="h-4 w-4 mr-2" />
                      List
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-[#232323]">
                  {filteredFrameworks.length} Framework{filteredFrameworks.length !== 1 ? 's' : ''} gefunden
                </h2>
                <p className="text-[#474747]">
                  {selectedCategory !== 'all' && `Kategorie: ${categories.find(c => c.id === selectedCategory)?.name} • `}
                  {selectedDifficulty !== 'all' && `Level: ${difficulties.find(d => d.id === selectedDifficulty)?.name}`}
                </p>
              </div>
            </div>

            {/* Frameworks Grid/List */}
            <div className={cn(
              "gap-6",
              viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 gap-6" 
                : "space-y-6"
            )}>
              {filteredFrameworks.map((framework, index) => {
                const IconComponent = framework.icon;
                const CategoryIcon = getCategoryIcon(framework.category);
                
                return (
                  <motion.div
                    key={framework.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={cn(
                      "group relative overflow-hidden bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg",
                      "hover:-translate-y-1"
                    )}>
                      <CardContent className={cn(
                        "p-6",
                        viewMode === 'list' ? "flex items-center gap-6" : ""
                      )}>
                        {/* Header */}
                        <div className={cn(
                          "flex items-start justify-between mb-4",
                          viewMode === 'list' ? "mb-0 flex-shrink-0" : ""
                        )}>
                          <div className={cn(
                            "flex items-center gap-3",
                            viewMode === 'list' ? "flex-col items-center" : ""
                          )}>
                            <div className={cn(
                              "p-3 rounded-xl bg-gradient-to-r",
                              framework.color
                            )}>
                              <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            {viewMode === 'list' && (
                              <div className="text-center">
                                <h3 className="text-lg font-bold text-[#232323]">{framework.title}</h3>
                                <p className="text-sm text-[#e24e1b]">{framework.subtitle}</p>
                              </div>
                            )}
                          </div>
                          
                          {viewMode === 'grid' && (
                            <div className="flex flex-col items-end gap-2">
                              {framework.popular && (
                                <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                  <Star className="h-3 w-3 mr-1" />
                                  Beliebt
                                </Badge>
                              )}
                              {framework.upcoming && (
                                <Badge className="bg-purple-50 text-purple-700 border-purple-200">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  Upcoming
                                </Badge>
                              )}
                              {framework.mandatory && (
                                <Badge className="bg-red-50 text-red-700 border-red-200">
                                  <AlertTriangle className="h-3 w-3 mr-1" />
                                  Mandatory
                                </Badge>
                              )}
                              {framework.certification && (
                                <Badge className="bg-green-50 text-green-700 border-green-200">
                                  <BadgeCheck className="h-3 w-3 mr-1" />
                                  Zertifizierung
                                </Badge>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Content */}
                        <div className={cn(
                          viewMode === 'list' ? "flex-1" : ""
                        )}>
                          {viewMode === 'grid' && (
                            <>
                              <h3 className="text-xl font-bold text-[#232323] mb-1">{framework.title}</h3>
                              <p className="text-[#e24e1b] text-sm mb-3">{framework.subtitle}</p>
                            </>
                          )}

                          <p className={cn(
                            "text-[#474747] leading-relaxed",
                            viewMode === 'grid' ? "mb-4" : "mb-2"
                          )}>
                            {framework.description}
                          </p>

                          {/* Badges for list view */}
                          {viewMode === 'list' && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {framework.popular && (
                                <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                  <Star className="h-3 w-3 mr-1" />
                                  Beliebt
                                </Badge>
                              )}
                              {framework.upcoming && (
                                <Badge className="bg-purple-50 text-purple-700 border-purple-200">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  Upcoming
                                </Badge>
                              )}
                              {framework.mandatory && (
                                <Badge className="bg-red-50 text-red-700 border-red-200">
                                  <AlertTriangle className="h-3 w-3 mr-1" />
                                  Mandatory
                                </Badge>
                              )}
                              {framework.certification && (
                                <Badge className="bg-green-50 text-green-700 border-green-200">
                                  <BadgeCheck className="h-3 w-3 mr-1" />
                                  Zertifizierung
                                </Badge>
                              )}
                            </div>
                          )}

                          {/* Stats */}
                          <div className={cn(
                            "mb-4",
                            viewMode === 'list' ? "grid grid-cols-2 gap-4" : ""
                          )}>
                            {viewMode === 'list' && (
                              <>
                                <div className="bg-[#F5F6F8] border border-stone-200 rounded-lg p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <Target className="h-4 w-4 text-[#474747]" />
                                    <span className="text-xs text-[#474747]">Umsetzung</span>
                                  </div>
                                  <span className="text-sm font-medium text-[#232323]">{framework.implementationTime}</span>
                                </div>
                                <div className="bg-[#F5F6F8] border border-stone-200 rounded-lg p-3">
                                  <div className="flex items-center gap-2 mb-1">
                                    <CategoryIcon className="h-4 w-4 text-[#474747]" />
                                    <span className="text-xs text-[#474747]">Kategorie</span>
                                  </div>
                                  <span className="text-sm font-medium text-[#232323] capitalize">
                                    {categories.find(c => c.id === framework.category)?.name}
                                  </span>
                                </div>
                              </>
                            )}
                            {viewMode === 'grid' && (
                              <div className="bg-[#F5F6F8] border border-stone-200 rounded-lg p-3">
                                <div className="flex items-center gap-2 mb-1">
                                  <Target className="h-4 w-4 text-[#474747]" />
                                  <span className="text-xs text-[#474747]">Umsetzungsdauer</span>
                                </div>
                                <span className="text-sm font-medium text-[#232323]">{framework.implementationTime}</span>
                              </div>
                            )}
                          </div>

                          {/* Difficulty for grid view */}
                          {viewMode === 'grid' && (
                            <div className="mb-4">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-[#474747]">Schwierigkeit</span>
                                <Badge className={cn(
                                  framework.difficulty === 'beginner' ? 'bg-green-50 text-green-700 border-green-200' :
                                  framework.difficulty === 'intermediate' ? 'bg-orange-50 text-[#e24e1b] border-orange-200' :
                                  'bg-red-50 text-red-700 border-red-200'
                                )}>
                                  {framework.difficulty === 'beginner' ? 'Einsteiger' :
                                   framework.difficulty === 'intermediate' ? 'Fortgeschritten' : 'Experte'}
                                </Badge>
                              </div>
                            </div>
                          )}

                          {/* Industries */}
                          <div className="mb-4">
                            <span className="text-sm text-[#474747] mb-2 block">Branchen:</span>
                            <div className="flex flex-wrap gap-1">
                              {framework.industries.slice(0, viewMode === 'list' ? 6 : 3).map((industry) => (
                                <Badge
                                  key={industry}
                                  variant="outline"
                                  className="text-xs bg-stone-100 text-[#474747] border-stone-300"
                                >
                                  {industry}
                                </Badge>
                              ))}
                              {framework.industries.length > (viewMode === 'list' ? 6 : 3) && (
                                <Badge
                                  variant="outline"
                                  className="text-xs bg-stone-100 text-[#474747] border-stone-300"
                                >
                                  +{framework.industries.length - (viewMode === 'list' ? 6 : 3)}
                                </Badge>
                              )}
                            </div>
                          </div>

                          {/* Action Button */}
                          <Button
                            asChild
                            className={cn(
                              "w-full bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm",
                              viewMode === 'list' ? "w-auto px-6" : ""
                            )}
                          >
                            <Link to={framework.link}>
                              <BookOpen className="h-4 w-4 mr-2" />
                              Details ansehen
                              <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* No Results */}
            {filteredFrameworks.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="p-4 bg-orange-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Search className="h-6 w-6 text-[#e24e1b]" />
                </div>
                <h3 className="text-xl font-semibold text-[#232323] mb-2">Keine Frameworks gefunden</h3>
                <p className="text-[#474747] mb-4">
                  Versuchen Sie andere Suchbegriffe oder Filter.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setSelectedDifficulty('all');
                  }}
                  className="bg-[#e24e1b] hover:bg-[#f97316] text-white"
                >
                  Filter zurücksetzen
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ComplianceFrameworks;