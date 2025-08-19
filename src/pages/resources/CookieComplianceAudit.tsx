import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Cookie, 
  ChevronRight, 
  Star,
  Calendar,
  Download,
  Mail,
  Globe,
  Search,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Eye,
  Shield,
  Settings,
  BarChart3,
  FileText,
  Users,
  Zap,
  ArrowRight,
  ExternalLink,
  Scan,
  PlayCircle,
  Timer,
  Target,
  Gauge,
  Lightbulb,
  Info,
  BookOpen,
  RefreshCw,
  TrendingUp,
  Activity,
  Loader2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';

export const CookieComplianceAudit: React.FC = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [auditResults, setAuditResults] = useState<any>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStep, setScanStep] = useState('');
  const [detectedCookies, setDetectedCookies] = useState<Array<any>>([]);

  const auditCategories = [
    {
      id: 'cookie_banner',
      title: 'Cookie-Banner & Consent',
      icon: Eye,
      color: 'from-blue-500 to-cyan-500',
      description: 'Überprüfung der Einverständniserklärung und des Cookie-Banners',
      items: [
        {
          id: 'banner_present',
          title: 'Cookie-Banner ist vorhanden',
          description: 'Website zeigt Cookie-Banner vor dem Setzen nicht-essentieller Cookies',
          critical: true,
          autoCheck: true
        },
        {
          id: 'banner_before_cookies',
          title: 'Banner erscheint vor Cookie-Setzung',
          description: 'Nicht-essentielle Cookies werden erst nach Zustimmung gesetzt',
          critical: true,
          autoCheck: true
        },
        {
          id: 'clear_information',
          title: 'Klare und verständliche Informationen',
          description: 'Banner enthält präzise Informationen über Cookie-Zwecke',
          critical: true,
          autoCheck: false
        },
        {
          id: 'granular_consent',
          title: 'Granulare Zustimmungsoptionen',
          description: 'Nutzer können verschiedene Cookie-Kategorien einzeln aktivieren/deaktivieren',
          critical: false,
          autoCheck: false
        },
        {
          id: 'easy_withdrawal',
          title: 'Einfacher Widerruf möglich',
          description: 'Zustimmung kann jederzeit einfach widerrufen werden',
          critical: true,
          autoCheck: false
        }
      ]
    },
    {
      id: 'cookie_types',
      title: 'Cookie-Kategorisierung',
      icon: Settings,
      color: 'from-green-500 to-teal-500',
      description: 'Korrekte Klassifizierung und Behandlung verschiedener Cookie-Typen',
      items: [
        {
          id: 'essential_cookies_identified',
          title: 'Essentielle Cookies identifiziert',
          description: 'Technisch notwendige Cookies sind klar als solche gekennzeichnet',
          critical: true,
          autoCheck: true
        },
        {
          id: 'analytics_cookies_categorized',
          title: 'Analytics-Cookies korrekt kategorisiert',
          description: 'Tracking- und Analyse-Cookies erfordern explizite Zustimmung',
          critical: true,
          autoCheck: true
        },
        {
          id: 'marketing_cookies_controlled',
          title: 'Marketing-Cookies unter Kontrolle',
          description: 'Werbe- und Marketing-Cookies werden nur mit Zustimmung gesetzt',
          critical: true,
          autoCheck: true
        },
        {
          id: 'third_party_cookies_managed',
          title: 'Third-Party-Cookies verwaltet',
          description: 'Externe Cookies (Social Media, Ads) werden kontrolliert geladen',
          critical: true,
          autoCheck: true
        },
        {
          id: 'cookie_purposes_documented',
          title: 'Cookie-Zwecke dokumentiert',
          description: 'Jeder Cookie-Typ hat eine klare Zweckbeschreibung',
          critical: false,
          autoCheck: false
        }
      ]
    },
    {
      id: 'privacy_policy',
      title: 'Datenschutzerklärung',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      description: 'Cookie-relevante Informationen in der Datenschutzerklärung',
      items: [
        {
          id: 'cookies_in_privacy_policy',
          title: 'Cookies in Datenschutzerklärung erwähnt',
          description: 'Detaillierte Cookie-Informationen in der Datenschutzerklärung',
          critical: true,
          autoCheck: false
        },
        {
          id: 'cookie_purposes_explained',
          title: 'Cookie-Zwecke detailliert erklärt',
          description: 'Ausführliche Beschreibung der Cookie-Verwendungszwecke',
          critical: true,
          autoCheck: false
        },
        {
          id: 'retention_periods_specified',
          title: 'Aufbewahrungszeiten angegeben',
          description: 'Speicherdauer für verschiedene Cookie-Typen dokumentiert',
          critical: false,
          autoCheck: false
        },
        {
          id: 'third_party_services_listed',
          title: 'Drittanbieter-Services aufgelistet',
          description: 'Alle externen Services mit Cookie-Zugriff dokumentiert',
          critical: true,
          autoCheck: false
        },
        {
          id: 'contact_information_available',
          title: 'Kontaktinformationen verfügbar',
          description: 'Klare Kontaktmöglichkeiten für Cookie-bezogene Anfragen',
          critical: false,
          autoCheck: false
        }
      ]
    },
    {
      id: 'technical_implementation',
      title: 'Technische Umsetzung',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      description: 'Technische Aspekte der Cookie-Compliance',
      items: [
        {
          id: 'consent_logging',
          title: 'Einverständnis wird protokolliert',
          description: 'Zustimmungen werden datenschutzkonform gespeichert und nachweisbar',
          critical: true,
          autoCheck: false
        },
        {
          id: 'cookie_lifetime_appropriate',
          title: 'Angemessene Cookie-Laufzeiten',
          description: 'Cookie-Laufzeiten entsprechen den tatsächlichen Zwecken',
          critical: false,
          autoCheck: true
        },
        {
          id: 'secure_cookie_attributes',
          title: 'Sichere Cookie-Attribute gesetzt',
          description: 'HttpOnly, Secure und SameSite Attributes korrekt verwendet',
          critical: false,
          autoCheck: true
        },
        {
          id: 'consent_renewal',
          title: 'Regelmäßige Zustimmungserneuerung',
          description: 'Nutzer werden regelmäßig zur Erneuerung der Zustimmung aufgefordert',
          critical: false,
          autoCheck: false
        },
        {
          id: 'cookie_deletion',
          title: 'Cookie-Löschung funktioniert',
          description: 'Widerruf der Zustimmung führt zur tatsächlichen Cookie-Löschung',
          critical: true,
          autoCheck: false
        }
      ]
    }
  ];

  const mockAuditResults = {
    url: websiteUrl,
    totalCookies: 23,
    essentialCookies: 4,
    analyticsCookies: 8,
    marketingCookies: 11,
    thirdPartyCookies: 15,
    compliance: {
      bannerPresent: true,
      consentRequired: false,
      granularOptions: false,
      privacyPolicyLink: true
    },
    issues: [
      { type: 'critical', message: 'Marketing-Cookies werden ohne Zustimmung gesetzt' },
      { type: 'warning', message: 'Cookie-Banner bietet keine granularen Optionen' },
      { type: 'info', message: 'Einige Cookies haben sehr lange Laufzeiten' }
    ],
    score: 65
  };

  const simulateAudit = async () => {
    if (!websiteUrl) return;
    
    setIsScanning(true);
    setScanProgress(0);
    setAuditResults(null);
    
    const steps = [
      { message: 'Verbindung zur Website wird hergestellt...', duration: 500 },
      { message: 'Analysiere Cookie-Banner...', duration: 800 },
      { message: 'Scanne nach gesetzten Cookies...', duration: 1000 },
      { message: 'Prüfe Cookie-Kategorien...', duration: 700 },
      { message: 'Bewerte DSGVO-Konformität...', duration: 600 },
      { message: 'Erstelle Compliance-Report...', duration: 400 }
    ];
    
    let currentProgress = 0;
    
    for (let i = 0; i < steps.length; i++) {
      setScanStep(steps[i].message);
      await new Promise(resolve => setTimeout(resolve, steps[i].duration));
      currentProgress = ((i + 1) / steps.length) * 100;
      setScanProgress(currentProgress);
    }
    
    // Generate realistic cookie data
    const mockCookies = [
      { name: '_ga', category: 'Analytics', domain: '.google-analytics.com', duration: '2 Jahre', essential: false },
      { name: '_fbp', category: 'Marketing', domain: '.facebook.com', duration: '3 Monate', essential: false },
      { name: 'PHPSESSID', category: 'Essential', domain: websiteUrl, duration: 'Session', essential: true },
      { name: '__cfduid', category: 'Technical', domain: '.cloudflare.com', duration: '30 Tage', essential: true },
      { name: '_gid', category: 'Analytics', domain: '.google-analytics.com', duration: '24 Stunden', essential: false }
    ];
    
    setDetectedCookies(mockCookies);
    setAuditResults({...mockAuditResults, url: websiteUrl, detectedCookies: mockCookies});
    setIsScanning(false);
    setScanStep('');
  };

  const toggleItem = (itemId: string) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
  };

  const totalItems = auditCategories.reduce((sum, category) => sum + category.items.length, 0);
  const completedCount = completedItems.size;

  return (
    <>
      <SEOHead
        title="Cookie Compliance Audit – DSGVO Cookie-Scanner & Analyse"
        description="Detaillierte Cookie-Compliance Überprüfung: Cookie-Scanner, Einwilligungsprozesse, TCF 2.2. ✓ Automatische Analyse ✓ DSGVO-konform ✓ Sofortige Ergebnisse. Jetzt Website scannen!"
        canonical="/assessment-center/cookie-compliance-audit"
        keywords="cookie compliance audit, cookie scanner, dsgvo cookies, cookie banner test, tcf 2.2 audit"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <Link to="/resources" className="hover:text-brand-red transition-colors">Resources</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Cookie-Compliance-Audit</span>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg">
                <Cookie className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <Badge className="bg-green-100 text-green-700 border-green-200 mb-3">
                  Website-Scanner + Prüfliste
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Cookie-Compliance-Audit
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Automatisierte Website-Analyse und systematische Prüfliste für rechtskonforme Cookie-Nutzung
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>4.7 (4.234 Scans)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Aktualisiert: Januar 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Scan className="h-4 w-4" />
                    <span>Automatischer Scanner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Scanner */}
      <section className="pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-2 border-green-200 dark:border-green-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-green-600" />
                  Website Cookie-Scanner
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Scannen Sie Ihre Website automatisch auf Cookie-Compliance-Probleme. 
                  Unser Scanner analysiert alle Cookies und gibt sofortige Empfehlungen.
                </p>
                
                <div className="flex gap-3 mb-6">
                  <div className="flex-1">
                    <Input
                      placeholder="https://ihre-website.de"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="h-12"
                    />
                  </div>
                  <Button 
                    onClick={simulateAudit}
                    disabled={!websiteUrl || isScanning}
                    className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 h-12"
                  >
                    {isScanning ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Scannt...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-4 w-4" />
                        Website scannen
                      </>
                    )}
                  </Button>
                </div>

                {/* Scanning Progress */}
                {isScanning && (
                  <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="flex items-center gap-3 mb-4">
                      <Loader2 className="h-5 w-5 text-blue-600 animate-spin" />
                      <span className="font-medium text-blue-900 dark:text-blue-100">
                        {scanStep}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-800 dark:text-blue-200">Fortschritt</span>
                        <span className="font-medium text-blue-900 dark:text-blue-100">{Math.round(scanProgress)}%</span>
                      </div>
                      <div className="w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${scanProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Scan Results */}
                {auditResults && (
                  <div className="space-y-6">
                    {/* Score Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <Card className="text-center p-4">
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {auditResults.totalCookies}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Cookies gefunden
                        </div>
                      </Card>
                      
                      <Card className="text-center p-4">
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {auditResults.essentialCookies}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Essentielle
                        </div>
                      </Card>
                      
                      <Card className="text-center p-4">
                        <div className="text-2xl font-bold text-orange-600 mb-1">
                          {auditResults.thirdPartyCookies}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Third-Party
                        </div>
                      </Card>
                      
                      <Card className="text-center p-4">
                        <div className={cn(
                          "text-2xl font-bold mb-1",
                          auditResults.score >= 80 ? 'text-green-600' :
                          auditResults.score >= 60 ? 'text-orange-500' : 'text-red-500'
                        )}>
                          {auditResults.score}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Compliance-Score
                        </div>
                      </Card>
                    </div>

                    {/* Detected Cookies */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <Cookie className="h-5 w-5 text-green-600" />
                          Erkannte Cookies ({detectedCookies.length})
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {detectedCookies.map((cookie, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border">
                              <div className="flex-1">
                                <div className="font-medium text-gray-900 dark:text-white mb-1">
                                  {cookie.name}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">
                                  {cookie.domain} • {cookie.duration}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge className={cn(
                                  "text-xs",
                                  cookie.essential 
                                    ? "bg-green-100 text-green-700 border-green-200" 
                                    : "bg-orange-100 text-orange-700 border-orange-200"
                                )}>
                                  {cookie.category}
                                </Badge>
                                {cookie.essential ? (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                ) : (
                                  <AlertTriangle className="h-4 w-4 text-orange-500" />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Issues */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <AlertTriangle className="h-5 w-5 text-orange-500" />
                          Gefundene Probleme
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {auditResults.issues.map((issue: any, index: number) => (
                            <div key={index} className={cn(
                              "flex items-start gap-3 p-3 rounded-lg border",
                              issue.type === 'critical' ? 'bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800' :
                              issue.type === 'warning' ? 'bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800' :
                              'bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800'
                            )}>
                              {issue.type === 'critical' ? (
                                <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                              ) : issue.type === 'warning' ? (
                                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                              ) : (
                                <Eye className="h-5 w-5 text-blue-500 mt-0.5" />
                              )}
                              <div>
                                <div className={cn(
                                  "font-medium text-sm",
                                  issue.type === 'critical' ? 'text-red-700 dark:text-red-300' :
                                  issue.type === 'warning' ? 'text-orange-700 dark:text-orange-300' :
                                  'text-blue-700 dark:text-blue-300'
                                )}>
                                  {issue.message}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <div className="text-center">
                      <Button 
                        onClick={() => setShowEmailForm(true)}
                        className="bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Detaillierten Scan-Report herunterladen
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Manual Checklist */}
      <section className="pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Manuelle Compliance-Prüfung
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Ergänzende Checkliste für Aspekte, die eine menschliche Bewertung erfordern
              </p>
            </div>

            {/* Progress Overview */}
            <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {completedCount}/{totalItems}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Punkte abgehakt
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">
                      {Math.round((completedCount / totalItems) * 100)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Vollständigkeit
                    </div>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${(completedCount / totalItems) * 100}%` }}
                  ></div>
                </div>
              </CardContent>
            </Card>

            {/* Checklist Categories */}
            <div className="space-y-6">
              {auditCategories.map((category, categoryIndex) => (
                <Card key={category.id} className="border-2 border-gray-200 dark:border-gray-700">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                        category.color
                      )}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{category.title}</CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {category.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {category.items.filter(item => completedItems.has(item.id)).length}/{category.items.length}
                        </div>
                        <div className="text-xs text-gray-500">abgeschlossen</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <div 
                          key={item.id}
                          className={cn(
                            "p-4 rounded-xl border transition-all duration-200 hover:shadow-md",
                            item.critical 
                              ? 'bg-red-50 dark:bg-red-950/10 border-red-200 dark:border-red-800' 
                              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
                            completedItems.has(item.id) ? 'opacity-75' : ''
                          )}
                        >
                          <div className="flex items-start gap-4">
                            <Checkbox
                              checked={completedItems.has(item.id)}
                              onCheckedChange={() => toggleItem(item.id)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className={cn(
                                  "font-semibold text-gray-900 dark:text-white",
                                  completedItems.has(item.id) ? 'line-through' : ''
                                )}>
                                  {item.title}
                                </h4>
                                <div className="flex items-center gap-2 ml-4">
                                  {item.critical && (
                                    <Badge className="bg-red-100 text-red-700 border-red-200 text-xs">
                                      Kritisch
                                    </Badge>
                                  )}
                                  {item.autoCheck && (
                                    <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                                      Auto-Check
                                    </Badge>
                                  )}
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button 
                onClick={() => setShowEmailForm(true)}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Vollständige Checkliste als PDF herunterladen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Form Modal */}
      {showEmailForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-lg w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-brand-red" />
                Cookie-Audit-Report herunterladen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Erhalten Sie den vollständigen Cookie-Compliance-Report mit Scan-Ergebnissen, 
                Checkliste und konkreten Umsetzungsempfehlungen.
              </p>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">E-Mail-Adresse</label>
                  <input 
                    type="email" 
                    required
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="ihre.email@unternehmen.de"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Website-URL (optional)</label>
                  <input 
                    type="url" 
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="https://ihre-website.de"
                    defaultValue={websiteUrl}
                  />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="privacy" className="mt-1" />
                  <label htmlFor="privacy" className="text-xs text-gray-600 dark:text-gray-400">
                    Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu.
                  </label>
                </div>
                <div className="flex gap-3">
                  <Button 
                    type="submit"
                    className="flex-1 bg-brand-red hover:bg-brand-red/90 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Report herunterladen
                  </Button>
                  <Button 
                    type="button"
                    variant="outline"
                    onClick={() => setShowEmailForm(false)}
                  >
                    Abbrechen
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Tools & Resources */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Weiterführende Cookie-Compliance-Tools
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Settings className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Cookie-Banner-Generator
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Erstellen Sie DSGVO-konforme Cookie-Banner mit unserem interaktiven Generator.
                      </p>
                      <Button variant="outline" size="sm" className="hover:text-blue-600">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Zum Generator
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <FileText className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Cookie-Policy-Template
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Vorgefertigte Cookie-Richtlinien-Vorlagen für verschiedene Website-Typen.
                      </p>
                      <Button variant="outline" size="sm" className="hover:text-green-600">
                        <Download className="mr-2 h-4 w-4" />
                        Template laden
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?source=cookie-audit">
                  <Button className="bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <Users className="mr-2 h-5 w-5" />
                    Cookie-Compliance-Beratung buchen
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/resources">
                  <Button variant="outline" className="border-2 border-gray-300 dark:border-gray-600 hover:border-brand-red hover:text-brand-red transition-all duration-300">
                    <BarChart3 className="mr-2 h-5 w-5" />
                    Weitere Compliance-Tools
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};