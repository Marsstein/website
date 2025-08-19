import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield,
  FileText,
  Users,
  Building2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Euro,
  Calendar,
  Activity,
  Lock,
  Database,
  Eye,
  UserCheck,
  Clipboard,
  FileCheck,
  Zap,
  Settings,
  Globe,
  TrendingUp,
  Clock,
  Star,
  Target,
  Lightbulb,
  Smartphone,
  Server,
  Code,
  Award,
  Scale,
  Fingerprint,
  Key,
  Monitor,
  Phone,
  X,
  ChevronDown,
  ExternalLink,
  Gavel,
  AlertCircle,
  Timer,
  BarChart3,
  PieChart,
  LineChart,
  Layers,
  Network,
  ShieldCheck,
  FileX,
  UserX,
  Ban,
  CheckSquare,
  Square,
  Umbrella,
  Car,
  Home,
  Heart,
  Briefcase,
  CreditCard,
  Calculator,
  TrendingDown,
  Brain,
  Bot,
  Cpu,
  CloudRain,
  GitBranch,
  RefreshCw,
  DollarSign,
  Percent,
  Coins,
  Receipt,
  FileSignature,
  UserPlus,
  Mail,
  MessageSquare,
  Headphones,
  HelpCircle,
  Info,
  BadgeCheck,
  ShieldAlert,
  CircleDollarSign,
  Banknote,
  WalletCards,
  HandCoins,
  PiggyBank,
  Landmark,
  CandlestickChart,
  FileSearch,
  Search,
  Rocket,
  Sparkles,
  Workflow,
  PlayCircle,
  PauseCircle,
  FileWarning,
  UserMinus,
  Unlink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const InsurtechComplianceGuide = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [selectedInsuranceType, setSelectedInsuranceType] = useState<string>('auto');
  const [complianceScore, setComplianceScore] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Navigation items for sticky navigation
  const navigationItems = [
    { id: 'ueberblick', label: 'Überblick', icon: Shield },
    { id: 'regulatorik', label: 'Regulatorik', icon: Scale },
    { id: 'datenschutz', label: 'Datenschutz', icon: Lock },
    { id: 'ki-compliance', label: 'KI & Automatisierung', icon: Brain },
    { id: 'kundenreise', label: 'Customer Journey', icon: Users },
    { id: 'implementierung', label: 'Implementierung', icon: Code }
  ];
  
  const scrollToSection = (sectionId: string) => {
    window.history.pushState(null, '', `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Auto-detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      const scrollPosition = window.scrollY + 150;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = window.scrollY + top;
          const elementBottom = window.scrollY + bottom;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Handle hash on initial load
    const hash = window.location.hash.replace('#', '');
    if (hash && navigationItems.some(item => item.id === hash)) {
      setTimeout(() => scrollToSection(hash), 100);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCheckedItem = (itemId: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  // Compliance score calculation
  useEffect(() => {
    const totalItems = 24;
    const score = Math.round((checkedItems.size / totalItems) * 100);
    setComplianceScore(score);
  }, [checkedItems]);

  const insuranceTypes = [
    { id: 'auto', label: 'KFZ-Versicherung', icon: Car, color: 'blue' },
    { id: 'health', label: 'Krankenversicherung', icon: Heart, color: 'red' },
    { id: 'life', label: 'Lebensversicherung', icon: Users, color: 'green' },
    { id: 'property', label: 'Sachversicherung', icon: Home, color: 'orange' },
    { id: 'liability', label: 'Haftpflicht', icon: Umbrella, color: 'purple' },
    { id: 'business', label: 'Gewerbeversicherung', icon: Briefcase, color: 'indigo' }
  ];

  const regulatoryFrameworks = [
    { name: 'DSGVO/GDPR', compliance: 95, trend: '+5%' },
    { name: 'IDD (Insurance Distribution Directive)', compliance: 88, trend: '+3%' },
    { name: 'Solvency II', compliance: 92, trend: '+2%' },
    { name: 'AI Act', compliance: 78, trend: '+12%' },
    { name: 'DORA', compliance: 85, trend: '+8%' },
    { name: 'ESG-Compliance', compliance: 82, trend: '+10%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative py-20 md:py-28 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        <motion.div 
          style={{ y, opacity }}
          className="container px-4"
        >
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
                <Sparkles className="w-3 h-3 mr-1" />
                InsurTech Compliance Excellence
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                InsurTech Compliance:
                <span className="block mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Innovation trifft Regulatorik
                </span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            >
              Der umfassende Leitfaden für rechtskonforme Digitalisierung in der Versicherungsbranche. 
              Von DSGVO über IDD bis zum AI Act – alle Compliance-Anforderungen für moderne InsurTech-Lösungen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white group"
                onClick={() => scrollToSection('ueberblick')}
              >
                <Shield className="mr-2 h-5 w-5" />
                Compliance-Check starten
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gray-300 dark:border-gray-700"
              >
                <Download className="mr-2 h-5 w-5" />
                Whitepaper herunterladen
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
            >
              {[
                { label: 'Bußgelder vermieden', value: '€2.8M+', icon: Euro, color: 'text-green-600' },
                { label: 'Compliance-Rate', value: '98.5%', icon: CheckCircle2, color: 'text-blue-600' },
                { label: 'Prozesse optimiert', value: '150+', icon: TrendingUp, color: 'text-purple-600' },
                { label: 'ROI in Monaten', value: '< 6', icon: Timer, color: 'text-orange-600' }
              ].map((stat, index) => (
                <Card key={index} className="p-4 hover:shadow-md transition-shadow">
                  <stat.icon className={`h-8 w-8 ${stat.color} mb-2`} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container px-4">
          <nav className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-3 scrollbar-thin">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all",
                    activeSection === item.id
                      ? "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-medium"
                      : "hover:bg-blue-50 dark:hover:bg-blue-950/30 text-gray-600 dark:text-gray-400"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto space-y-20">
            
            {/* Overview Section */}
            <section id="ueberblick" className="space-y-8 scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  InsurTech Compliance-Landschaft 2024
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Die Versicherungsbranche durchläuft eine digitale Revolution. Mit neuen Technologien 
                  kommen neue regulatorische Herausforderungen – von Datenschutz über KI-Ethik bis zur 
                  digitalen Resilienz.
                </p>
              </motion.div>

              {/* Interactive Compliance Dashboard */}
              <Card className="p-6 shadow-2xl border-2 border-blue-200 dark:border-blue-800">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Ihr Compliance-Score
                  </h3>
                  <Badge 
                    variant={complianceScore > 80 ? 'default' : complianceScore > 60 ? 'secondary' : 'destructive'}
                    className="text-lg px-3 py-1"
                  >
                    {complianceScore}%
                  </Badge>
                </div>
                
                <Progress 
                  value={complianceScore} 
                  className="h-4 mb-6"
                />
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {regulatoryFrameworks.map((framework, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                    >
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {framework.name}
                      </div>
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
                        {framework.compliance}%
                      </div>
                      <div className="text-xs text-green-600 dark:text-green-400">
                        {framework.trend}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Insurance Type Selector */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Wählen Sie Ihren Versicherungsbereich</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {insuranceTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <motion.button
                        key={type.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedInsuranceType(type.id)}
                        className={cn(
                          "p-4 rounded-lg border-2 transition-all",
                          selectedInsuranceType === type.id
                            ? `border-${type.color}-500 bg-${type.color}-50 dark:bg-${type.color}-950/20`
                            : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                        )}
                      >
                        <Icon className={cn(
                          "h-8 w-8 mx-auto mb-2",
                          selectedInsuranceType === type.id
                            ? `text-${type.color}-600`
                            : "text-gray-500"
                        )} />
                        <div className={cn(
                          "text-sm font-medium",
                          selectedInsuranceType === type.id
                            ? `text-${type.color}-700 dark:text-${type.color}-400`
                            : "text-gray-700 dark:text-gray-300"
                        )}>
                          {type.label}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </Card>

              {/* Key Challenges */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Database,
                    title: "Datenintensive Prozesse",
                    description: "Gesundheitsdaten, Telematik, IoT-Sensoren – massive Datenmengen rechtskonform verarbeiten",
                    risk: "Hoch",
                    color: "red"
                  },
                  {
                    icon: Brain,
                    title: "KI & Automatisierung",
                    description: "Risikobewertung, Schadensregulierung und Betrugserkennung mit AI Act-konformer KI",
                    risk: "Mittel",
                    color: "yellow"
                  },
                  {
                    icon: Globe,
                    title: "Cross-Border Compliance",
                    description: "Internationale Datentransfers und unterschiedliche Regulierungen in EU-Märkten",
                    risk: "Hoch",
                    color: "red"
                  },
                  {
                    icon: Users,
                    title: "Kundenrechte",
                    description: "Transparenz, Auskunftsrechte und Datenportabilität in digitalen Kanälen",
                    risk: "Mittel",
                    color: "yellow"
                  },
                  {
                    icon: Shield,
                    title: "Cyber-Resilienz",
                    description: "DORA-Anforderungen und Schutz sensibler Versicherungsdaten",
                    risk: "Kritisch",
                    color: "red"
                  },
                  {
                    icon: FileCheck,
                    title: "Dokumentationspflichten",
                    description: "Audit-Trails, Verarbeitungsverzeichnisse und Compliance-Nachweise",
                    risk: "Mittel",
                    color: "yellow"
                  }
                ].map((challenge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className={cn(
                      "h-full border-l-4",
                      challenge.color === 'red' ? 'border-red-500' : 'border-yellow-500'
                    )}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <challenge.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                          <Badge 
                            variant={challenge.risk === 'Kritisch' || challenge.risk === 'Hoch' ? 'destructive' : 'secondary'}
                          >
                            {challenge.risk} Risiko
                          </Badge>
                        </div>
                        <CardTitle className="text-lg mt-3">{challenge.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-400">{challenge.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Regulations Section */}
            <section id="regulatorik" className="space-y-8 scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Regulatorisches Framework für InsurTech
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Ein komplexes Geflecht aus Datenschutz, Finanzaufsicht und Tech-Regulierung prägt 
                  die Compliance-Landschaft für digitale Versicherungslösungen.
                </p>
              </motion.div>

              {/* Regulatory Timeline */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">Regulatorische Meilensteine</h3>
                <div className="space-y-4">
                  {[
                    { date: '2018', title: 'DSGVO', description: 'Datenschutz-Grundverordnung tritt in Kraft', status: 'active' },
                    { date: '2018', title: 'IDD', description: 'Insurance Distribution Directive wird wirksam', status: 'active' },
                    { date: '2023', title: 'DORA', description: 'Digital Operational Resilience Act verabschiedet', status: 'active' },
                    { date: '2024', title: 'AI Act', description: 'KI-Verordnung tritt schrittweise in Kraft', status: 'upcoming' },
                    { date: '2025', title: 'DORA', description: 'Vollständige Anwendung ab Januar 2025', status: 'upcoming' },
                    { date: '2026', title: 'AI Act', description: 'Vollständige Compliance-Anforderungen', status: 'future' }
                  ].map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4"
                    >
                      <div className={cn(
                        "w-16 h-16 rounded-full flex items-center justify-center font-bold",
                        milestone.status === 'active' ? 'bg-green-100 text-green-700' :
                        milestone.status === 'upcoming' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      )}>
                        {milestone.date}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{milestone.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{milestone.description}</p>
                      </div>
                      {milestone.status === 'active' && (
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                      )}
                      {milestone.status === 'upcoming' && (
                        <Clock className="h-5 w-5 text-yellow-600" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Detailed Regulations */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* DSGVO for InsurTech */}
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Lock className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-bold">DSGVO in der Versicherung</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Besondere Herausforderungen</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Gesundheitsdaten nach Art. 9 DSGVO (Krankenversicherung)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Telematik-Daten und Fahrerprofile (KFZ-Versicherung)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Profiling für Risikobewertung und Pricing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-blue-600 mt-0.5" />
                          <span>Datenübermittlung an Rückversicherer</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Rechtsgrundlagen</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { base: 'Art. 6 Abs. 1 lit. b', desc: 'Vertragserfüllung' },
                          { base: 'Art. 6 Abs. 1 lit. f', desc: 'Berechtigte Interessen' },
                          { base: 'Art. 9 Abs. 2 lit. a', desc: 'Einwilligung (Gesundheit)' },
                          { base: 'Art. 22', desc: 'Automatisierte Entscheidungen' }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded p-2">
                            <div className="text-xs font-semibold text-blue-600">{item.base}</div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* IDD Compliance */}
                <Card className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileSignature className="h-8 w-8 text-purple-600" />
                    <h3 className="text-xl font-bold">IDD-Compliance</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Digitale Beratungspflichten</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5" />
                          <span>Anforderungsgerechte Beratung auch in Apps</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5" />
                          <span>Dokumentation der Kundenberatung</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5" />
                          <span>Produktinformationsblätter (IPID) digital bereitstellen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-600 mt-0.5" />
                          <span>Interessenkonflikte bei Robo-Advisory</span>
                        </li>
                      </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <span className="text-sm font-medium">Beratungsprotokoll</span>
                        <Badge>Pflicht</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <span className="text-sm font-medium">Geeignetheitsprüfung</span>
                        <Badge>Automatisierbar</Badge>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded">
                        <span className="text-sm font-medium">Fortbildungsnachweis</span>
                        <Badge variant="secondary">15h/Jahr</Badge>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Penalty Warning */}
              <Card className="border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-100 dark:bg-red-900/50 rounded-full">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-red-900 dark:text-red-100 mb-2">
                        Bußgeldrisiken im InsurTech-Bereich
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                          <div className="text-sm font-semibold text-red-700 dark:text-red-300">DSGVO-Verstöße</div>
                          <div className="text-2xl font-bold text-red-900 dark:text-red-100">bis zu 20 Mio. €</div>
                          <div className="text-sm text-red-600 dark:text-red-400">oder 4% des weltweiten Jahresumsatzes</div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-red-700 dark:text-red-300">IDD-Verstöße</div>
                          <div className="text-2xl font-bold text-red-900 dark:text-red-100">bis zu 5 Mio. €</div>
                          <div className="text-sm text-red-600 dark:text-red-400">plus Geschäftsverbot möglich</div>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-red-100 dark:bg-red-900/30 rounded">
                        <p className="text-sm text-red-800 dark:text-red-200">
                          <strong>Aktuelle Entwicklung:</strong> BaFin verstärkt Prüfungen bei digitalen 
                          Versicherungsvermittlern und InsurTech-Startups. Fokus auf Datenschutz und 
                          ordnungsgemäße Beratungsdokumentation.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Data Protection Section */}
            <section id="datenschutz" className="space-y-8 scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Datenschutz in InsurTech-Anwendungen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Von der Risikobewertung bis zur Schadensregulierung – Datenschutz durchzieht jeden 
                  Aspekt moderner Versicherungslösungen.
                </p>
              </motion.div>

              {/* Data Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Heart,
                    title: "Gesundheitsdaten",
                    category: "Besondere Kategorien (Art. 9)",
                    examples: ["Diagnosen", "Behandlungsverläufe", "Fitness-Tracker", "Medikation"],
                    requirements: ["Explizite Einwilligung", "Erhöhte Sicherheit", "Zweckbindung", "Minimale Speicherdauer"]
                  },
                  {
                    icon: Car,
                    title: "Telematik-Daten",
                    category: "Verhaltens- und Standortdaten",
                    examples: ["Fahrverhalten", "GPS-Standorte", "Geschwindigkeit", "Bremsverhalten"],
                    requirements: ["Transparente Information", "Opt-in Modelle", "Anonymisierung", "Löschkonzepte"]
                  },
                  {
                    icon: Home,
                    title: "Smart Home Daten",
                    category: "IoT-Sensordaten",
                    examples: ["Raumtemperatur", "Bewegungsmelder", "Wassermelder", "Einbruchsensoren"],
                    requirements: ["Privacy by Design", "Edge Computing", "Verschlüsselung", "Zugriffskontrolle"]
                  },
                  {
                    icon: CreditCard,
                    title: "Finanzdaten",
                    category: "Zahlungs- und Bonitätsdaten",
                    examples: ["Einkommen", "Schufa-Score", "Zahlungshistorie", "Kontodaten"],
                    requirements: ["PSD2-Konformität", "Sichere APIs", "Minimale Abfragen", "Audit-Logs"]
                  },
                  {
                    icon: Users,
                    title: "Familiendaten",
                    category: "Personenbezogene Drittdaten",
                    examples: ["Mitversicherte", "Begünstigte", "Familienstand", "Kinder"],
                    requirements: ["Informationspflichten", "Separate Einwilligungen", "Betroffenenrechte", "Datentrennung"]
                  },
                  {
                    icon: Activity,
                    title: "Verhaltensdaten",
                    category: "Profiling und Scoring",
                    examples: ["App-Nutzung", "Kommunikation", "Schadensmeldungen", "Präferenzen"],
                    requirements: ["Art. 22 DSGVO", "Erklärbarkeit", "Widerspruchsrecht", "Human Oversight"]
                  }
                ].map((dataType, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-100 dark:bg-blue-950 rounded-lg">
                            <dataType.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{dataType.title}</CardTitle>
                            <p className="text-sm text-gray-500">{dataType.category}</p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Beispieldaten:</h4>
                          <div className="flex flex-wrap gap-1">
                            {dataType.examples.map((example, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {example}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold mb-2">Anforderungen:</h4>
                          <ul className="space-y-1">
                            {dataType.requirements.map((req, idx) => (
                              <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1">
                                <CheckCircle2 className="h-3 w-3 text-green-500" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Privacy by Design Framework */}
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
                <h3 className="text-xl font-bold mb-6">Privacy by Design für InsurTech</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Settings className="h-5 w-5 text-blue-600" />
                      Technische Maßnahmen
                    </h4>
                    <div className="space-y-3">
                      {[
                        { 
                          title: "Ende-zu-Ende Verschlüsselung",
                          desc: "Alle Gesundheits- und Finanzdaten verschlüsselt übertragen und speichern"
                        },
                        {
                          title: "Pseudonymisierung",
                          desc: "Trennung von Identitäts- und Verhaltensdaten in der Risikobewertung"
                        },
                        {
                          title: "Differential Privacy",
                          desc: "Statistische Analysen ohne Rückschlüsse auf Einzelpersonen"
                        },
                        {
                          title: "Zero-Knowledge Proofs",
                          desc: "Altersverifikation ohne Geburtsdatum-Übermittlung"
                        }
                      ].map((measure, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-3">
                          <h5 className="font-medium text-sm">{measure.title}</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{measure.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Workflow className="h-5 w-5 text-indigo-600" />
                      Organisatorische Maßnahmen
                    </h4>
                    <div className="space-y-3">
                      {[
                        {
                          title: "Datenschutz-Folgenabschätzung",
                          desc: "DSFA für alle KI-basierten Risikobewertungen und Profiling-Prozesse"
                        },
                        {
                          title: "Privacy Engineering Team",
                          desc: "Dedizierte Experten für datenschutzfreundliche Systemarchitektur"
                        },
                        {
                          title: "Consent Management Platform",
                          desc: "Granulare Einwilligungsverwaltung über alle Touchpoints"
                        },
                        {
                          title: "Automated Compliance Checks",
                          desc: "Kontinuierliche Überprüfung der Datenverarbeitungsprozesse"
                        }
                      ].map((measure, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-3">
                          <h5 className="font-medium text-sm">{measure.title}</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{measure.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Consent Management */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <UserCheck className="h-6 w-6 text-green-600" />
                  Einwilligungsmanagement für Versicherungen
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Granulare Einwilligungen</h4>
                    <div className="space-y-2">
                      {[
                        "Telematik-Datenerfassung",
                        "Gesundheitsdaten-Verarbeitung",
                        "Marketing-Kommunikation",
                        "Datenübermittlung an Partner",
                        "KI-basierte Risikobewertung"
                      ].map((consent, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-2 bg-white dark:bg-gray-800 rounded cursor-pointer hover:bg-gray-50"
                          onClick={() => toggleCheckedItem(`consent-${idx}`)}
                        >
                          {checkedItems.has(`consent-${idx}`) ? (
                            <CheckSquare className="h-4 w-4 text-green-600" />
                          ) : (
                            <Square className="h-4 w-4 text-gray-400" />
                          )}
                          <span className="text-sm">{consent}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Best Practices</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Eindeutige Zweckbestimmung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Einfacher Widerruf möglich</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Keine Kopplung an Vertragsschluss</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Verständliche Sprache</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>Dokumentation & Nachweis</span>
                      </li>
                    </ul>
                  </Card>
                  
                  <Card className="p-4">
                    <h4 className="font-semibold mb-3">Widerrufsprozess</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span className="text-sm">In-App Widerruf</span>
                        <Badge className="bg-green-100 text-green-700">Aktiv</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span className="text-sm">E-Mail Widerruf</span>
                        <Badge className="bg-green-100 text-green-700">Aktiv</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <span className="text-sm">Automatische Löschung</span>
                        <Badge className="bg-green-100 text-green-700">24h</Badge>
                      </div>
                      <Button className="w-full" variant="outline" size="sm">
                        <FileX className="h-4 w-4 mr-2" />
                        Widerruf testen
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </section>

            {/* AI Compliance Section */}
            <section id="ki-compliance" className="space-y-8 scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  KI & Automatisierung im Versicherungswesen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Von der Risikobewertung bis zur automatisierten Schadensregulierung – KI revolutioniert 
                  die Versicherungsbranche. Mit dem AI Act kommen neue Compliance-Anforderungen.
                </p>
              </motion.div>

              {/* AI Risk Classification */}
              <Card className="p-6 border-2 border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Brain className="h-6 w-6 text-purple-600" />
                  KI-Risikostufen nach AI Act
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      level: "Hochrisiko",
                      color: "red",
                      applications: [
                        "Automatisierte Versicherungsentscheidungen",
                        "Gesundheitsrisiko-Bewertung",
                        "Betrugserkennung mit Konsequenzen"
                      ],
                      requirements: [
                        "Konformitätsbewertung",
                        "CE-Kennzeichnung",
                        "Risikomanagementsystem",
                        "Menschliche Aufsicht"
                      ]
                    },
                    {
                      level: "Begrenztes Risiko",
                      color: "yellow",
                      applications: [
                        "Chatbots für Kundenservice",
                        "Emotionserkennung bei Claims",
                        "Personalisierte Angebote"
                      ],
                      requirements: [
                        "Transparenzpflichten",
                        "Kennzeichnung als KI",
                        "Opt-out Möglichkeit",
                        "Informationspflichten"
                      ]
                    },
                    {
                      level: "Minimales Risiko",
                      color: "green",
                      applications: [
                        "Interne Prozessoptimierung",
                        "Dokumentenanalyse",
                        "Spam-Filter"
                      ],
                      requirements: [
                        "Freiwillige Verhaltenskodizes",
                        "Best Practices",
                        "Ethik-Guidelines",
                        "Keine spezifischen Pflichten"
                      ]
                    }
                  ].map((risk, index) => (
                    <div
                      key={index}
                      className={cn(
                        "rounded-lg border-2 p-4",
                        risk.color === 'red' ? 'border-red-300 bg-red-50 dark:bg-red-950/20' :
                        risk.color === 'yellow' ? 'border-yellow-300 bg-yellow-50 dark:bg-yellow-950/20' :
                        'border-green-300 bg-green-50 dark:bg-green-950/20'
                      )}
                    >
                      <Badge
                        variant={risk.color === 'red' ? 'destructive' : risk.color === 'yellow' ? 'secondary' : 'default'}
                        className="mb-3"
                      >
                        {risk.level}
                      </Badge>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Anwendungen:</h4>
                          <ul className="space-y-1">
                            {risk.applications.map((app, idx) => (
                              <li key={idx} className="text-xs flex items-start gap-1">
                                <Bot className="h-3 w-3 mt-0.5" />
                                {app}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Anforderungen:</h4>
                          <ul className="space-y-1">
                            {risk.requirements.map((req, idx) => (
                              <li key={idx} className="text-xs flex items-start gap-1">
                                <CheckCircle2 className="h-3 w-3 mt-0.5 text-green-600" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* AI Use Cases */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Underwriting AI */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">KI im Underwriting</h3>
                    <Badge variant="destructive">Hochrisiko</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">Compliance-Anforderungen:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm">Erklärbarkeit der Entscheidungen (Art. 13 AI Act)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm">Diskriminierungsfreie Algorithmen</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm">Human-in-the-Loop für finale Entscheidungen</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm">Kontinuierliche Überwachung auf Bias</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">Best Practice Beispiel:</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Zweistufiges Modell: KI erstellt Risikobewertung mit Erklärung, 
                        qualifizierter Underwriter trifft finale Entscheidung. Alle KI-Vorschläge 
                        werden geloggt und regelmäßig auf Fairness geprüft.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Claims Processing AI */}
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">KI in der Schadensregulierung</h3>
                    <Badge variant="secondary">Begrenztes Risiko</Badge>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">Anwendungsfälle:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          { use: "Bilderkennung", desc: "Schadensausmaß bewerten" },
                          { use: "NLP", desc: "Schadensmeldungen kategorisieren" },
                          { use: "Predictive Analytics", desc: "Betrugswahrscheinlichkeit" },
                          { use: "Automation", desc: "Kleinschäden automatisiert" }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white dark:bg-gray-700 rounded p-2">
                            <div className="text-xs font-semibold">{item.use}</div>
                            <div className="text-xs text-gray-500">{item.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-950/30 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-2">Transparenzpflichten:</h4>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-start gap-2">
                          <Info className="h-4 w-4 text-yellow-600 mt-0.5" />
                          <span>Kunde über KI-Nutzung informieren</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Info className="h-4 w-4 text-yellow-600 mt-0.5" />
                          <span>Möglichkeit menschlicher Überprüfung</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Info className="h-4 w-4 text-yellow-600 mt-0.5" />
                          <span>Erklärung der automatisierten Entscheidung</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Algorithmic Fairness */}
              <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
                <h3 className="text-xl font-bold mb-6">Algorithmic Fairness & Bias Prevention</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      metric: "Gender Parity",
                      score: 94,
                      trend: "stable",
                      description: "Gleichbehandlung der Geschlechter"
                    },
                    {
                      metric: "Age Fairness",
                      score: 87,
                      trend: "improving",
                      description: "Keine Altersdiskriminierung"
                    },
                    {
                      metric: "Geographic Equity",
                      score: 91,
                      trend: "stable",
                      description: "Regionale Gleichbehandlung"
                    },
                    {
                      metric: "Income Neutrality",
                      score: 82,
                      trend: "needs attention",
                      description: "Einkommensunabhängige Bewertung"
                    }
                  ].map((metric, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-sm">{metric.metric}</h4>
                        {metric.trend === 'improving' && <TrendingUp className="h-4 w-4 text-green-600" />}
                        {metric.trend === 'stable' && <Activity className="h-4 w-4 text-blue-600" />}
                        {metric.trend === 'needs attention' && <AlertCircle className="h-4 w-4 text-yellow-600" />}
                      </div>
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div>
                            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                              Score
                            </span>
                          </div>
                          <div className="text-right">
                            <span className="text-xs font-semibold inline-block text-purple-600">
                              {metric.score}%
                            </span>
                          </div>
                        </div>
                        <Progress value={metric.score} className="h-2" />
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">{metric.description}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            {/* Customer Journey Section */}
            <section id="kundenreise" className="space-y-8 scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Compliance-konforme Customer Journey
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Jeder Touchpoint der digitalen Kundenreise muss Datenschutz, Transparenz und 
                  regulatorische Anforderungen erfüllen.
                </p>
              </motion.div>

              {/* Journey Stages */}
              <div className="space-y-6">
                {[
                  {
                    stage: "1. Awareness & Research",
                    icon: Search,
                    color: "blue",
                    touchpoints: ["Website", "Social Media", "Vergleichsportale", "Apps"],
                    compliance: [
                      { req: "Cookie-Consent (ePrivacy)", status: "critical" },
                      { req: "Transparente Datenverarbeitung", status: "required" },
                      { req: "Opt-out für Tracking", status: "required" },
                      { req: "Keine Dark Patterns", status: "required" }
                    ]
                  },
                  {
                    stage: "2. Beratung & Angebot",
                    icon: MessageSquare,
                    color: "indigo",
                    touchpoints: ["Chatbot", "Video-Beratung", "Robo-Advisor", "Kalkulator"],
                    compliance: [
                      { req: "IDD-konforme Beratung", status: "critical" },
                      { req: "Bedarfsanalyse dokumentiert", status: "critical" },
                      { req: "KI-Kennzeichnung", status: "required" },
                      { req: "Aufzeichnung mit Einwilligung", status: "required" }
                    ]
                  },
                  {
                    stage: "3. Abschluss & Onboarding",
                    icon: FileSignature,
                    color: "purple",
                    touchpoints: ["E-Signature", "Video-Ident", "App-Onboarding", "Welcome-Journey"],
                    compliance: [
                      { req: "eIDAS-konforme Signatur", status: "critical" },
                      { req: "GwG-konforme Identifikation", status: "critical" },
                      { req: "Widerrufsbelehrung", status: "critical" },
                      { req: "Datenschutzerklärung akzeptiert", status: "required" }
                    ]
                  },
                  {
                    stage: "4. Nutzung & Service",
                    icon: Headphones,
                    color: "green",
                    touchpoints: ["Self-Service Portal", "App", "Chatbot", "Hotline"],
                    compliance: [
                      { req: "Sichere Authentifizierung", status: "critical" },
                      { req: "Verschlüsselte Kommunikation", status: "critical" },
                      { req: "Auskunftsrecht gewährleistet", status: "required" },
                      { req: "Änderungen nachvollziehbar", status: "required" }
                    ]
                  },
                  {
                    stage: "5. Schadensmeldung",
                    icon: AlertTriangle,
                    color: "orange",
                    touchpoints: ["Schaden-App", "Foto-Upload", "KI-Bewertung", "Status-Tracking"],
                    compliance: [
                      { req: "Datensparsamkeit", status: "critical" },
                      { req: "Zweckbindung der Daten", status: "critical" },
                      { req: "Löschfristen definiert", status: "required" },
                      { req: "Transparente KI-Nutzung", status: "required" }
                    ]
                  }
                ].map((journey, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className={`border-l-4 border-${journey.color}-500`}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={`p-3 bg-${journey.color}-100 dark:bg-${journey.color}-950 rounded-lg`}>
                            <journey.icon className={`h-6 w-6 text-${journey.color}-600`} />
                          </div>
                          <h3 className="text-xl font-bold">{journey.stage}</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Digital Touchpoints</h4>
                            <div className="flex flex-wrap gap-2">
                              {journey.touchpoints.map((touchpoint, idx) => (
                                <Badge key={idx} variant="outline" className="px-3 py-1">
                                  <Smartphone className="h-3 w-3 mr-1" />
                                  {touchpoint}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Compliance-Anforderungen</h4>
                            <div className="space-y-2">
                              {journey.compliance.map((comp, idx) => (
                                <div key={idx} className="flex items-center justify-between">
                                  <span className="text-sm">{comp.req}</span>
                                  <Badge
                                    variant={comp.status === 'critical' ? 'destructive' : 'secondary'}
                                    className="text-xs"
                                  >
                                    {comp.status === 'critical' ? 'Kritisch' : 'Erforderlich'}
                                  </Badge>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Customer Rights Dashboard */}
              <Card className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20">
                <h3 className="text-xl font-bold mb-6">Kundenrechte-Dashboard</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    {
                      right: "Auskunft",
                      icon: Eye,
                      timeframe: "30 Tage",
                      automated: true,
                      description: "Vollständige Datenübersicht"
                    },
                    {
                      right: "Berichtigung",
                      icon: FileCheck,
                      timeframe: "Unverzüglich",
                      automated: true,
                      description: "Fehlerhafte Daten korrigieren"
                    },
                    {
                      right: "Löschung",
                      icon: FileX,
                      timeframe: "Unverzüglich",
                      automated: false,
                      description: "Recht auf Vergessenwerden"
                    },
                    {
                      right: "Datenportabilität",
                      icon: Download,
                      timeframe: "30 Tage",
                      automated: true,
                      description: "Daten in strukturiertem Format"
                    },
                    {
                      right: "Widerspruch",
                      icon: Ban,
                      timeframe: "Unverzüglich",
                      automated: true,
                      description: "Verarbeitung widersprechen"
                    },
                    {
                      right: "Einschränkung",
                      icon: Lock,
                      timeframe: "Unverzüglich",
                      automated: false,
                      description: "Verarbeitung einschränken"
                    },
                    {
                      right: "Keine Automation",
                      icon: UserX,
                      timeframe: "Sofort",
                      automated: true,
                      description: "Menschliche Entscheidung"
                    },
                    {
                      right: "Widerruf",
                      icon: RefreshCw,
                      timeframe: "Sofort",
                      automated: true,
                      description: "Einwilligung zurückziehen"
                    }
                  ].map((right, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <right.icon className="h-5 w-5 text-blue-600" />
                        {right.automated ? (
                          <Badge className="bg-green-100 text-green-700">Automatisiert</Badge>
                        ) : (
                          <Badge variant="secondary">Manuell</Badge>
                        )}
                      </div>
                      <h4 className="font-semibold text-sm">{right.right}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{right.description}</p>
                      <div className="mt-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3 inline mr-1" />
                        {right.timeframe}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            {/* Implementation Section */}
            <section id="implementierung" className="space-y-8 scroll-mt-32">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Praktische Implementierung
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Von der Strategie zur Umsetzung – so implementieren Sie Compliance in Ihre 
                  InsurTech-Lösung.
                </p>
              </motion.div>

              {/* Implementation Roadmap */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">Compliance Implementation Roadmap</h3>
                <div className="space-y-4">
                  {[
                    {
                      phase: "Phase 1: Assessment & Gap-Analyse",
                      duration: "4-6 Wochen",
                      tasks: [
                        "Bestandsaufnahme aller Datenverarbeitungen",
                        "Risikobewertung der KI-Systeme",
                        "Regulatorische Gap-Analyse",
                        "Stakeholder-Mapping"
                      ],
                      completion: 100
                    },
                    {
                      phase: "Phase 2: Design & Architektur",
                      duration: "6-8 Wochen",
                      tasks: [
                        "Privacy by Design Architektur",
                        "Consent Management Design",
                        "Datenschutz-Folgenabschätzungen",
                        "Technische Konzepte"
                      ],
                      completion: 85
                    },
                    {
                      phase: "Phase 3: Implementierung",
                      duration: "12-16 Wochen",
                      tasks: [
                        "Technische Umsetzung der TOM",
                        "Integration Consent Management",
                        "KI-Governance implementieren",
                        "Prozesse automatisieren"
                      ],
                      completion: 60
                    },
                    {
                      phase: "Phase 4: Testing & Validation",
                      duration: "4-6 Wochen",
                      tasks: [
                        "Penetration Testing",
                        "Compliance-Audits",
                        "KI-Fairness Testing",
                        "Betroffenenrechte testen"
                      ],
                      completion: 30
                    },
                    {
                      phase: "Phase 5: Go-Live & Monitoring",
                      duration: "Ongoing",
                      tasks: [
                        "Schrittweiser Rollout",
                        "Continuous Monitoring",
                        "Incident Response Setup",
                        "Regular Compliance Reviews"
                      ],
                      completion: 0
                    }
                  ].map((phase, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold">{phase.phase}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Dauer: {phase.duration}
                          </p>
                        </div>
                        <Badge variant={phase.completion === 100 ? 'default' : 'secondary'}>
                          {phase.completion}% abgeschlossen
                        </Badge>
                      </div>
                      <Progress value={phase.completion} className="h-2" />
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {phase.tasks.map((task, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm p-2 bg-gray-50 dark:bg-gray-800 rounded"
                            onClick={() => toggleCheckedItem(`task-${index}-${idx}`)}
                          >
                            {checkedItems.has(`task-${index}-${idx}`) || phase.completion === 100 ? (
                              <CheckSquare className="h-4 w-4 text-green-600" />
                            ) : (
                              <Square className="h-4 w-4 text-gray-400" />
                            )}
                            <span className={cn(
                              checkedItems.has(`task-${index}-${idx}`) || phase.completion === 100
                                ? "line-through text-gray-500"
                                : ""
                            )}>
                              {task}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Technical Implementation */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Architecture Example */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4">Compliance-First Architecture</h3>
                  <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>{`// Privacy-by-Design API Gateway
const insuranceAPI = {
  middleware: [
    consentValidator(),
    dataMinimizer(),
    purposeLimiter(),
    auditLogger()
  ],
  
  endpoints: {
    '/quote': {
      requiredConsents: ['marketing', 'profiling'],
      dataRetention: '90 days',
      allowedPurposes: ['quote_generation']
    },
    
    '/claim': {
      requiredConsents: ['claims_processing'],
      dataRetention: '7 years',
      encryption: 'AES-256',
      aiDisclosure: true
    }
  }
};

// Automated Compliance Checks
async function processInsuranceData(data) {
  // 1. Consent verification
  await verifyConsents(data.userId, data.purpose);
  
  // 2. Data minimization
  const minimizedData = minimizeData(data, purpose);
  
  // 3. Purpose limitation
  validatePurpose(data.purpose);
  
  // 4. Audit trail
  await logProcessing(data.userId, purpose);
  
  return processedData;
}`}</code>
                    </pre>
                  </div>
                </Card>

                {/* Tools & Technologies */}
                <Card className="p-6">
                  <h3 className="text-lg font-bold mb-4">Compliance Tech-Stack</h3>
                  <div className="space-y-4">
                    {[
                      {
                        category: "Consent Management",
                        tools: ["OneTrust", "Usercentrics", "Cookiebot", "Custom CMP"],
                        icon: UserCheck
                      },
                      {
                        category: "Privacy Engineering",
                        tools: ["Privacera", "Immuta", "DataGrail", "BigID"],
                        icon: Shield
                      },
                      {
                        category: "AI Governance",
                        tools: ["IBM Watson OpenScale", "Google Model Cards", "Fiddler AI", "Arthur AI"],
                        icon: Brain
                      },
                      {
                        category: "Security & Encryption",
                        tools: ["HashiCorp Vault", "AWS KMS", "Azure Key Vault", "HSM Solutions"],
                        icon: Lock
                      },
                      {
                        category: "Audit & Monitoring",
                        tools: ["Splunk", "Datadog", "Elastic SIEM", "Custom Dashboards"],
                        icon: BarChart3
                      }
                    ].map((stack, idx) => (
                      <div key={idx}>
                        <div className="flex items-center gap-2 mb-2">
                          <stack.icon className="h-5 w-5 text-blue-600" />
                          <h4 className="font-semibold">{stack.category}</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {stack.tools.map((tool, toolIdx) => (
                            <Badge key={toolIdx} variant="outline">
                              {tool}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Best Practices */}
              <Card className="p-6 border-2 border-green-200 dark:border-green-800">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Award className="h-6 w-6 text-green-600" />
                  InsurTech Compliance Best Practices
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-green-700 dark:text-green-300">Do's ✓</h4>
                    <ul className="space-y-2">
                      {[
                        "Privacy by Design von Anfang an",
                        "Transparente KI-Entscheidungen",
                        "Granulare Einwilligungen",
                        "Regelmäßige Compliance-Audits",
                        "Automatisierte Betroffenenrechte",
                        "Verschlüsselung für alle Daten",
                        "Dokumentierte Verfahren",
                        "Schulungen für alle Mitarbeiter"
                      ].map((practice, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-red-700 dark:text-red-300">Don'ts ✗</h4>
                    <ul className="space-y-2">
                      {[
                        "Compliance als nachträgliches Add-on",
                        "Black-Box KI ohne Erklärbarkeit",
                        "Versteckte Datenverarbeitung",
                        "Übermäßige Datensammlung",
                        "Fehlende Löschkonzepte",
                        "Unverschlüsselte Kommunikation",
                        "Manuelle Compliance-Prozesse",
                        "Ignorieren von Kundenrechten"
                      ].map((practice, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5" />
                          <span className="text-sm">{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Success Metrics */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-6">Compliance Success Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { metric: "DSGVO-Anfragen", value: "< 48h", target: "Response Time", icon: Clock },
                    { metric: "Consent Rate", value: "87%", target: "Active Consents", icon: UserCheck },
                    { metric: "Data Breaches", value: "0", target: "Last 12 Months", icon: ShieldCheck },
                    { metric: "Audit Score", value: "96%", target: "Latest Review", icon: Award },
                    { metric: "KI Transparenz", value: "100%", target: "Erklärt", icon: Brain },
                    { metric: "Verschlüsselung", value: "100%", target: "Coverage", icon: Lock },
                    { metric: "Löschanfragen", value: "99%", target: "Automatisiert", icon: FileX },
                    { metric: "Compliance ROI", value: "320%", target: "Savings vs Fines", icon: TrendingUp }
                  ].map((kpi, idx) => (
                    <div key={idx} className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <kpi.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">{kpi.value}</div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{kpi.metric}</div>
                      <div className="text-xs text-gray-500">{kpi.target}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </section>

            {/* Call to Action */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="py-12"
            >
              <Card className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
                <div className="absolute inset-0 bg-grid-white/10" />
                <CardContent className="relative p-8 md:p-12 text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block mb-6"
                  >
                    <Shield className="h-16 w-16 mx-auto" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Starten Sie Ihre InsurTech Compliance Journey
                  </h2>
                  <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Nutzen Sie unsere Expertise für rechtskonforme Innovation. Von der Strategie bis zur 
                    Implementierung – wir begleiten Sie auf dem Weg zur compliant InsurTech-Lösung.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white text-blue-600 hover:bg-gray-100 group"
                    >
                      <Rocket className="mr-2 h-5 w-5" />
                      InsurTech Compliance Check
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white/10"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      Beratungstermin vereinbaren
                    </Button>
                  </div>
                  <div className="mt-8 flex items-center justify-center gap-8 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>DSGVO-konform</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>AI Act ready</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5" />
                      <span>IDD-compliant</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

            {/* Related Resources */}
            <section className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Weiterführende Ressourcen
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "FinTech Compliance Guide",
                    description: "Regulatorische Anforderungen für digitale Finanzdienstleistungen",
                    link: "/wissen/branchen/fintech-compliance",
                    icon: Landmark
                  },
                  {
                    title: "Healthcare AI Compliance",
                    description: "KI-Einsatz im Gesundheitswesen rechtskonform gestalten",
                    link: "/wissen/branchen/healthcare-ai-compliance",
                    icon: Brain
                  },
                  {
                    title: "DSGVO Grundlagen",
                    description: "Die wichtigsten Datenschutz-Anforderungen im Überblick",
                    link: "/wissen/dsgvo-grundlagen",
                    icon: BookOpen
                  }
                ].map((resource, index) => (
                  <Link key={index} to={resource.link}>
                    <Card className="h-full hover:shadow-md transition-all hover:border-blue-300 dark:hover:border-blue-700">
                      <CardHeader>
                        <resource.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-2" />
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {resource.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default InsurtechComplianceGuide;