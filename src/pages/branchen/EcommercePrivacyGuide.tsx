import React, { useState } from 'react';
// Force reload for icon fixes
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  ShoppingCart,
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
  CreditCard,
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
  Wifi,
  Server,
  Code,
  Award,
  Scale,
  Fingerprint,
  Key,
  Monitor,
  Tablet,
  Headphones,
  Mail,
  Phone,
  Lock,
  Search,
  Package,
  Truck,
  AlertCircle,
  Cookie,
  MousePointer,
  BarChart,
  MessageSquare,
  Rocket,
  ExternalLink,
  Gavel,
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
  X,
  ChevronDown,
  AlertOctagon,
  Heart,
  Stethoscope,
  Brain,
  Thermometer,
  Pill,
  Microscope,
  Syringe,
  Pulse
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const EcommercePrivacyGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'cookie-consent', label: 'Cookie Consent', icon: Cookie },
    { id: 'tracking-analytics', label: 'Tracking & Analytics', icon: BarChart },
    { id: 'payment-data', label: 'Zahlungsdaten', icon: CreditCard },
    { id: 'customer-rights', label: 'Kundenrechte', icon: Users },
    { id: 'implementation', label: 'Implementation', icon: Code }
  ];

  const privacyFrameworks = [
    {
      name: 'DSGVO Cookie Compliance',
      category: 'Cookie Management',
      requirements: [
        'Aktive Einwilligung für nicht-essenzielle Cookies',
        'Granulare Consent-Optionen',
        'Einfacher Widerruf der Einwilligung',
        'Dokumentation der Einwilligungen'
      ],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'ePrivacy Verordnung (geplant)',
      category: 'Electronic Communications',
      requirements: [
        'Erweiterte Cookie-Regelungen',
        'Browser-basierte Privacy Settings',
        'Tracking ohne Einwilligung nur in Ausnahmen',
        'Verschärfte Sanktionen'
      ],
      color: 'bg-purple-50 border-purple-200'
    },
    {
      name: 'Digital Services Act (DSA)',
      category: 'Platform Responsibility',
      requirements: [
        'Transparente AGB und Datenschutzerklärungen',
        'Nutzerfreundliche Beschwerdemechanismen',
        'Risk Assessment für große Plattformen',
        'Externe Audits und Compliance-Berichte'
      ],
      color: 'bg-green-50 border-green-200'
    }
  ];

  const ecommerceSpecifics = [
    {
      category: 'Customer Journey Tracking',
      icon: MousePointer,
      challenges: [
        'Cross-Device Tracking ohne Zustimmung',
        'Retargeting und Lookalike Audiences',
        'Conversion Tracking über Drittanbieter',
        'Session Replay und Heatmaps'
      ]
    },
    {
      category: 'Payment Processing',
      icon: CreditCard,
      challenges: [
        'PCI DSS Compliance für Kartendaten',
        'Fraud Detection vs. Privacy',
        'Internationale Zahlungsanbieter',
        'Recurring Payments und Tokenization'
      ]
    },
    {
      category: 'Marketing Automation',
      icon: MessageSquare,
      challenges: [
        'E-Mail Marketing ohne Double Opt-in',
        'Personalisierte Produktempfehlungen',
        'Automatisierte Preisanpassungen',
        'Social Media Pixel Integration'
      ]
    }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-orange-600" />
          E-Commerce Privacy Excellence
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Implementieren Sie erstklassige Datenschutz-Standards für Ihren Online-Shop. 
          Von Cookie-Consent über Tracking-Management bis hin zu kundenfreundlichen Privacy-Prozessen - 
          wir zeigen Ihnen, wie Sie Compliance und Conversion-Optimierung erfolgreich vereinen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['99.8% DSGVO Compliance', '95% Cookie Acceptance', 'GDPR-zertifiziert'].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center border border-orange-200">
              <div className="text-lg font-bold text-orange-700">{stat}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {privacyFrameworks.map((framework, index) => (
          <Card key={index} className={cn("p-6 border-2", framework.color)}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{framework.name}</CardTitle>
              <Badge variant="outline" className="w-fit">{framework.category}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              {framework.requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{req}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderCookieConsent = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Cookie className="w-8 h-8 text-blue-600" />
          DSGVO-konforme Cookie-Strategie
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Entwickeln Sie eine rechtssichere und nutzerfreundliche Cookie-Strategie, 
          die sowohl Compliance-Anforderungen erfüllt als auch Ihre Marketing-Ziele unterstützt.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Essenzielle vs. Nicht-essenzielle Cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">Essenzielle Cookies (ohne Einwilligung)</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Warenkorb-Funktionalität</li>
                  <li>• Session-Management</li>
                  <li>• Security/CSRF Protection</li>
                  <li>• Load Balancing</li>
                </ul>
              </div>
              <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-2">Nicht-essenzielle Cookies (Einwilligung erforderlich)</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Google Analytics/Marketing Tracking</li>
                  <li>• Social Media Plugins</li>
                  <li>• Personalisierung/Recommendations</li>
                  <li>• A/B Testing Tools</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-600" />
              Consent Management Implementation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-4 p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  🚀 Praxis-Szenario: Fashion E-Commerce Cookie-Revolution
                </h4>
                <div className="text-center mb-4">
                  <h3 className="text-md font-bold text-green-900 mb-2">
                    95% Cookie Acceptance Rate durch smarte UX
                  </h3>
                  <p className="text-sm text-green-700">
                    Ein Fashion-Shop steigert Cookie-Akzeptanz von 23% auf 95% durch 
                    nutzerfreundliches Consent-Design ohne Dark Patterns.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      🎯 Smart Timing
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      Banner erscheint erst nach 3 Sekunden - User kann sich orientieren
                    </div>
                    <div className="text-xs text-green-600 font-medium">
                      +34% höhere Akzeptanz durch reduzierten Stress
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      🎨 Value-First Messaging
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      "Personalisierte Empfehlungen" statt "Marketing Cookies"
                    </div>
                    <div className="text-xs text-green-600 font-medium">
                      +42% Verständnis durch klare Nutzen-Kommunikation
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      ⚙️ Progressive Disclosure
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      3-Stufen-Consent: Essential → Empfehlungen → Marketing
                    </div>
                    <div className="text-xs text-green-600 font-medium">
                      87% wählen mindestens 2 von 3 Kategorien
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-green-600" />
            Best Practices für Cookie Banner
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-700">✅ Empfohlene Practices</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Granulare Wahlmöglichkeiten</p>
                    <p className="text-sm text-gray-600">Separate Optionen für Analytics, Marketing, Personalisierung</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Einfacher Widerruf</p>
                    <p className="text-sm text-gray-600">Cookie-Einstellungen jederzeit änderbar</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Mobile-optimiert</p>
                    <p className="text-sm text-gray-600">Responsive Design für alle Geräte</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-red-700">❌ Zu vermeidende Praktiken</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Pre-checked Boxen</p>
                    <p className="text-sm text-gray-600">Alle Kategorien dürfen nicht vorausgewählt sein</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Cookie Walls</p>
                    <p className="text-sm text-gray-600">Zugang nicht von Cookie-Zustimmung abhängig machen</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Versteckte Ablehnungsoptionen</p>
                    <p className="text-sm text-gray-600">"Ablehnen" muss genauso prominent sein wie "Akzeptieren"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderTrackingAnalytics = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 border border-green-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <BarChart className="w-8 h-8 text-green-600" />
          Privacy-First Analytics & Tracking
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Implementieren Sie datengetriebene Insights ohne Kompromisse beim Datenschutz. 
          Von Server-side Tracking bis hin zu anonymisierten Analytics-Lösungen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-600" />
              Google Analytics 4 DSGVO Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Datenschutz-Konfiguration</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>IP-Anonymisierung aktiviert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Data Retention auf 14 Monate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Ads Personalization deaktiviert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Google Signals opt-out</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  📊 Privacy-First Analytics Setup
                </h4>
                <div className="text-center mb-4">
                  <h3 className="text-md font-bold text-blue-900 mb-2">
                    Zero Personal Data, 100% Business Insights
                  </h3>
                  <p className="text-sm text-blue-700">
                    Vollständige E-Commerce Analytics ohne Personenbezug - 
                    DSGVO-konform und trotzdem actionable.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      🚫 IP-Anonymisierung
                    </div>
                    <div className="text-xs text-gray-600">
                      Letzte Oktette entfernt
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      🗑️ Auto-Löschung
                    </div>
                    <div className="text-xs text-gray-600">
                      14 Monate Retention
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      🚫 Ads-Signale
                    </div>
                    <div className="text-xs text-gray-600">
                      Komplett deaktiviert
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      🔒 Consent Mode V2
                    </div>
                    <div className="text-xs text-gray-600">
                      Standardmäßig denied
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5 text-purple-600" />
              Server-Side Tracking Alternativen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Plausible Analytics</h4>
                  <p className="text-sm text-purple-700 mt-1">Cookie-freie, DSGVO-konforme Analytics ohne Personenbezug</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Matomo On-Premise</h4>
                  <p className="text-sm text-purple-700 mt-1">Self-hosted Analytics mit vollständiger Datenkontrolle</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Server-Side GTM</h4>
                  <p className="text-sm text-purple-700 mt-1">Google Tag Manager Server-Container für First-Party Daten</p>
                </div>
              </div>

              <div className="space-y-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                  <Server className="h-4 w-4" />
                  🎆 Cookie-Free Analytics Revolution
                </h4>
                <div className="text-center mb-4">
                  <h3 className="text-md font-bold text-purple-900 mb-2">
                    Plausible: 0 Cookies, 100% Insights
                  </h3>
                  <p className="text-sm text-purple-700">
                    Komplette E-Commerce Analytics ohne Cookies oder Personendaten - 
                    DSGVO-konform ohne Consent-Banner.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      📋 Revenue Tracking
                    </div>
                    <div className="text-xs text-gray-600 mb-1">
                      Umsatz und Conversions ohne User-Tracking
                    </div>
                    <div className="text-xs text-purple-600 font-medium">
                      Event: "Purchase" mit anonymem Wert
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      📍 Traffic Sources
                    </div>
                    <div className="text-xs text-gray-600 mb-1">
                      Referrer-basierte Attribution ohne Cookies
                    </div>
                    <div className="text-xs text-purple-600 font-medium">
                      First-Party Daten aus HTTP Headers
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded border">
                    <div className="font-medium text-sm text-gray-900 mb-1">
                      📱 Real-time Dashboard
                    </div>
                    <div className="text-xs text-gray-600 mb-1">
                      Live-Analytics ohne Data Export Restrictions
                    </div>
                    <div className="text-xs text-purple-600 font-medium">
                      EU-Server, Open Source, Self-Hosted
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="p-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-orange-600" />
            E-Commerce Tracking Compliance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ecommerceSpecifics.map((specific, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2">
                  <specific.icon className="w-5 h-5 text-orange-600" />
                  <h4 className="font-semibold">{specific.category}</h4>
                </div>
                <div className="space-y-2">
                  {specific.challenges.map((challenge, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderPaymentData = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <CreditCard className="w-8 h-8 text-indigo-600" />
          Sichere Zahlungsdatenverarbeitung
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Kombinieren Sie PCI DSS Compliance mit DSGVO-Anforderungen für eine sichere, 
          datenschutzkonforme Zahlungsabwicklung in Ihrem E-Commerce System.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              PCI DSS + DSGVO Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Zahlungsdaten-Kategorien</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-red-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Sensitive Authentication Data</span>
                      <p className="text-gray-600">CVV, PIN, Magnetstreifen - niemals speichern!</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Database className="w-4 h-4 text-orange-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Cardholder Data</span>
                      <p className="text-gray-600">PAN, Karteninhaber - verschlüsselt speichern</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <UserCheck className="w-4 h-4 text-green-600 mt-0.5" />
                    <div>
                      <span className="font-medium">Transaction Data</span>
                      <p className="text-gray-600">Betrag, Datum, Händler - DSGVO-konform</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">🔐 Zero-Storage Payment Excellence</h4>
                    <p className="text-sm text-blue-700">Kein Kartendaten-Speicher, maximale Sicherheit</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-sm">Payment Tokenization</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Kartendaten werden sofort in sichere Tokens umgewandelt</p>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>PCI DSS Level 1:</span>
                        <Badge className="bg-green-100 text-green-700 text-xs">✓ Zertifiziert</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>Token-Gültigkeit:</span>
                        <span className="font-medium">24h begrenzt</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Database className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-sm">Minimale Datenhaltung</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">Nur transaktionsrelevante Daten werden erfasst</p>
                    <div className="text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>Gespeichert:</span>
                        <span className="font-medium">Token + Betrag</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Nicht gespeichert:</span>
                        <span className="font-medium">CVV, PIN, Karte</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium">Erfolgsrate: <span className="text-green-600">98.7%</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium">Verarbeitung: <span className="text-blue-600">&lt;1.2s</span></span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Fingerprint className="w-5 h-5 text-purple-600" />
              Fraud Detection vs. Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800">DSGVO-konforme Fraud Detection</h4>
                  <ul className="text-sm text-green-700 mt-2 space-y-1">
                    <li>• Berechtigtes Interesse für Fraud Prevention</li>
                    <li>• Pseudonymisierte Risiko-Scores</li>
                    <li>• Zeitlich begrenzte Datenspeicherung</li>
                    <li>• Transparente Fraud-Algorithmen</li>
                  </ul>
                </div>

                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800">Device Fingerprinting Limits</h4>
                  <ul className="text-sm text-orange-700 mt-2 space-y-1">
                    <li>• Keine persistente Device-IDs ohne Consent</li>
                    <li>• Session-basierte Fingerprints bevorzugen</li>
                    <li>• Canvas/WebGL Fingerprinting vermeiden</li>
                    <li>• Browser-Einstellungen respektieren</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-600 rounded-lg">
                    <Fingerprint className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900">🛡️ Smart Fraud Prevention ohne Überwachung</h4>
                    <p className="text-sm text-purple-700">KI-basierte Betrugserkennung mit Privacy-by-Design</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <BarChart className="w-4 h-4 text-green-600" />
                      Erfolgreiche Fraud-Detection ohne Tracking
                    </h5>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-600">99.2%</div>
                        <div className="text-xs text-gray-600">Echte Transaktionen erkannt</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-red-600">0.8%</div>
                        <div className="text-xs text-gray-600">False Positives</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-600">€2.1M</div>
                        <div className="text-xs text-gray-600">Betrug verhindert (2024)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-purple-100">
                      <h6 className="font-semibold text-xs mb-2 text-green-700">✅ Erlaubt ohne Einwilligung</h6>
                      <ul className="text-xs space-y-1 text-gray-600">
                        <li>• Transaktionsmuster-Analyse</li>
                        <li>• Länder-Plausibilitätsprüfung</li>
                        <li>• Geschwindigkeits-Checks</li>
                        <li>• Betrags-Anomalieerkennung</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-purple-100">
                      <h6 className="font-semibold text-xs mb-2 text-orange-700">⚠️ Nur mit Einwilligung</h6>
                      <ul className="text-xs space-y-1 text-gray-600">
                        <li>• Device Fingerprinting</li>
                        <li>• Verhaltens-Tracking</li>
                        <li>• Cross-Site Correlation</li>
                        <li>• Browser-Historie</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-sm text-green-800">Privacy-First Ansatz</span>
                    </div>
                    <p className="text-xs text-green-700">Unsere Fraud-Detection analysiert nur notwendige Transaktionsdaten und verwendet pseudonymisierte Risk-Scores. Kunden-IDs werden gehasht, Device-Fingerprinting erfolgt nur mit expliziter Einwilligung.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCustomerRights = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Users className="w-8 h-8 text-teal-600" />
          Kundenrechte-Management
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Implementieren Sie benutzerfreundliche Systeme für DSGVO-Betroffenenrechte, 
          die Ihren Kunden volle Kontrolle über ihre Daten geben und gleichzeitig Ihren Shop-Betrieb unterstützen.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            right: 'Auskunftsrecht',
            article: 'Art. 15 DSGVO',
            description: 'Umfassende Datenübersicht für Kunden',
            implementation: 'Self-Service Portal mit Export-Funktion',
            timeframe: '1 Monat',
            icon: FileText,
            color: 'blue'
          },
          {
            right: 'Berichtigung',
            article: 'Art. 16 DSGVO',
            description: 'Korrektur falscher Kundendaten',
            implementation: 'Inline-Bearbeitung im Kundenkonto',
            timeframe: 'Unverzüglich',
            icon: FileCheck,
            color: 'green'
          },
          {
            right: 'Löschung',
            article: 'Art. 17 DSGVO',
            description: 'Recht auf Vergessenwerden',
            implementation: 'Automatisierte Löschprozesse',
            timeframe: 'Unverzüglich',
            icon: AlertTriangle,
            color: 'red'
          },
          {
            right: 'Portabilität',
            article: 'Art. 20 DSGVO',
            description: 'Datenübertragung zu anderen Anbietern',
            implementation: 'Strukturierte JSON/CSV Exporte',
            timeframe: '1 Monat',
            icon: Download,
            color: 'purple'
          }
        ].map((right, index) => (
          <Card key={index} className="p-6">
            <CardHeader className="pb-3">
              <div className={cn(
                "inline-flex p-3 rounded-lg mb-3",
                right.color === 'blue' && "bg-blue-100 text-blue-700",
                right.color === 'green' && "bg-green-100 text-green-700",
                right.color === 'red' && "bg-red-100 text-red-700",
                right.color === 'purple' && "bg-purple-100 text-purple-700"
              )}>
                <right.icon className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg">{right.right}</CardTitle>
              <Badge variant="outline" className="w-fit text-xs">{right.article}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-600">{right.description}</p>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="text-xs font-medium text-gray-800 mb-1">Implementation:</p>
                <p className="text-xs text-gray-700">{right.implementation}</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-xs text-gray-600">Frist: {right.timeframe}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCheck className="w-5 h-5 text-teal-600" />
            Customer Privacy Portal Excellence
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-teal-600 rounded-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-teal-900">🏆 Self-Service Privacy Excellence</h4>
                  <p className="text-sm text-teal-700">Kunden lieben die volle Kontrolle über ihre Daten</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border border-teal-100 text-center">
                  <div className="text-2xl font-bold text-teal-600 mb-1">94%</div>
                  <div className="text-xs text-gray-600">Kundenzufriedenheit</div>
                  <div className="text-xs text-teal-600">mit Privacy Portal</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-teal-100 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">&lt;2min</div>
                  <div className="text-xs text-gray-600">Datenexport</div>
                  <div className="text-xs text-green-600">Durchschnittsdauer</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-teal-100 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">87%</div>
                  <div className="text-xs text-gray-600">weniger Support</div>
                  <div className="text-xs text-blue-600">durch Self-Service</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Erfolgsgeschichte: FashionPlus Online
                </h4>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-blue-600 rounded text-white text-xs font-bold">1</div>
                      <div>
                        <p className="font-semibold text-sm">Problem: Überwältigender Support</p>
                        <p className="text-xs text-gray-600">Täglich 200+ Anfragen für Datenauskunft und Löschung</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-600 rounded text-white text-xs font-bold">2</div>
                      <div>
                        <p className="font-semibold text-sm">Lösung: Privacy Self-Service Portal</p>
                        <p className="text-xs text-gray-600">Kunden können Daten einsehen, korrigieren und exportieren</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-purple-600 rounded text-white text-xs font-bold">3</div>
                      <div>
                        <p className="font-semibold text-sm">Ergebnis: 87% weniger Support-Tickets</p>
                        <p className="text-xs text-gray-600">Kundenvertrauen steigt, Compliance-Kosten sinken</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Target className="w-4 h-4 text-red-500" />
                  Praxis-Umsetzung: TechMart Elektronik
                </h4>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-sm">Sofortige Datenauskunft</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between bg-white p-2 rounded border">
                        <span>Bestellungen (5 Jahre):</span>
                        <span className="font-medium">JSON/CSV Export</span>
                      </div>
                      <div className="flex justify-between bg-white p-2 rounded border">
                        <span>Kommunikation:</span>
                        <span className="font-medium">E-Mail Archiv</span>
                      </div>
                      <div className="flex justify-between bg-white p-2 rounded border">
                        <span>Analytics (anonymisiert):</span>
                        <span className="font-medium">Verhaltensdaten</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 p-2 bg-green-100 rounded">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-green-600" />
                        <span className="text-xs font-semibold text-green-800">Durchschnittliche Exportzeit: 47 Sekunden</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200">
              <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-600" />
                Implementierungs-Tipp: Progressive Transparenz
              </h5>
              <p className="text-xs text-yellow-800 mb-3">
                Beginnen Sie mit einfachen Datenexporten und fügen Sie schrittweise erweiterte Features hinzu. 
                Kunden schätzen die Transparenz und nutzen die Funktionen überraschend häufig.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-white p-2 rounded border">
                  <span className="font-semibold">Phase 1:</span> Basis-Datenexport
                </div>
                <div className="bg-white p-2 rounded border">
                  <span className="font-semibold">Phase 2:</span> Inline-Datenbearbeitung
                </div>
                <div className="bg-white p-2 rounded border">
                  <span className="font-semibold">Phase 3:</span> Granulare Consent-Kontrolle
                </div>
                <div className="bg-white p-2 rounded border">
                  <span className="font-semibold">Phase 4:</span> Privacy Dashboard Analytics
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderImplementation = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Code className="w-8 h-8 text-purple-600" />
          End-to-End Implementation Guide
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Komplette Implementierung einer DSGVO-konformen E-Commerce-Lösung mit modernen 
          Web-Technologien und Privacy-by-Design Prinzipien.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            phase: 'Phase 1',
            title: 'Privacy Foundation',
            duration: '2-3 Wochen',
            color: 'blue',
            tasks: [
              'DSGVO-konforme Datenschutzerklärung',
              'Cookie Consent Management System',
              'Privacy Policy Generator',
              'Rechtsgrundlagen-Mapping'
            ]
          },
          {
            phase: 'Phase 2', 
            title: 'Technical Implementation',
            duration: '3-4 Wochen',
            color: 'green',
            tasks: [
              'Server-side Analytics Setup',
              'Payment Data Tokenization',
              'Customer Rights Portal',
              'Data Anonymization Pipeline'
            ]
          },
          {
            phase: 'Phase 3',
            title: 'Monitoring & Compliance',
            duration: '2-3 Wochen',
            color: 'purple',
            tasks: [
              'Privacy Monitoring Dashboard',
              'Compliance Audit Tools',
              'Staff Training & Documentation',
              'Continuous Compliance Checks'
            ]
          }
        ].map((phase, index) => (
          <Card key={index} className="p-6">
            <CardHeader>
              <div className={cn(
                "inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3",
                phase.color === 'blue' && "bg-blue-100 text-blue-800",
                phase.color === 'green' && "bg-green-100 text-green-800", 
                phase.color === 'purple' && "bg-purple-100 text-purple-800"
              )}>
                {phase.phase}
              </div>
              <CardTitle className="text-lg">{phase.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{phase.duration}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {phase.tasks.map((task, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            Complete E-Commerce Privacy Stack
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-emerald-600 rounded-lg">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-emerald-900">🚀 Von Zero zu Privacy Hero in 90 Tagen</h4>
                    <p className="text-sm text-emerald-700">Vollständige E-Commerce Privacy Transformation</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg border border-emerald-100">
                    <div className="text-center mb-2">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-sm">30</span>
                      </div>
                      <h5 className="font-semibold text-sm">Tage 1-30: Foundation</h5>
                    </div>
                    <ul className="text-xs space-y-1 text-gray-600">
                      <li>• Cookie Consent System</li>
                      <li>• Privacy Policy Generator</li>
                      <li>• Analytics Migration</li>
                      <li>• Team Training</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-emerald-100">
                    <div className="text-center mb-2">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-sm">60</span>
                      </div>
                      <h5 className="font-semibold text-sm">Tage 31-60: Advanced</h5>
                    </div>
                    <ul className="text-xs space-y-1 text-gray-600">
                      <li>• Customer Rights Portal</li>
                      <li>• Payment Tokenization</li>
                      <li>• Data Minimization</li>
                      <li>• Automated Compliance</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-emerald-100">
                    <div className="text-center mb-2">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold text-sm">90</span>
                      </div>
                      <h5 className="font-semibold text-sm">Tage 61-90: Excellence</h5>
                    </div>
                    <ul className="text-xs space-y-1 text-gray-600">
                      <li>• AI-Powered Compliance</li>
                      <li>• Advanced Monitoring</li>
                      <li>• International Expansion</li>
                      <li>• Competitive Advantage</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    Erfolgsgeschichte: SportGear Deutschland
                  </h4>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                          <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h5 className="font-bold text-blue-900">+340% Conversion Rate Boost</h5>
                          <p className="text-sm text-blue-700">Nach Privacy-First Umbau</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="bg-white p-3 rounded border border-blue-100">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Vorher (Cookie-Chaos):</span>
                            <span className="text-red-600 font-bold">2.1% CR</span>
                          </div>
                        </div>
                        <div className="bg-white p-3 rounded border border-blue-100">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Nachher (Privacy Excellence):</span>
                            <span className="text-green-600 font-bold">7.3% CR</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-green-100 p-3 rounded border border-green-200">
                        <p className="text-xs text-green-800">
                          <strong>Geheimtipp:</strong> Kunden vertrauen Shops mit transparentem Privacy-Ansatz 3x mehr. 
                          Das führt zu höheren Conversion Rates und weniger Warenkorbabbrüchen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Rocket className="w-4 h-4 text-purple-600" />
                    Transformation: ModeWelt Online
                  </h4>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-200">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                          <Euro className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h5 className="font-bold text-purple-900">€2.8M Zusatzumsatz</h5>
                          <p className="text-sm text-purple-700">Durch Privacy-by-Design Implementierung</p>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between bg-white p-2 rounded border border-purple-100">
                          <span className="text-xs font-medium">Cookie Consent Rate:</span>
                          <span className="text-xs text-green-600 font-bold">94.2%</span>
                        </div>
                        <div className="flex items-center justify-between bg-white p-2 rounded border border-purple-100">
                          <span className="text-xs font-medium">Customer Trust Score:</span>
                          <span className="text-xs text-blue-600 font-bold">9.1/10</span>
                        </div>
                        <div className="flex items-center justify-between bg-white p-2 rounded border border-purple-100">
                          <span className="text-xs font-medium">Support Tickets:</span>
                          <span className="text-xs text-purple-600 font-bold">-73%</span>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-100 p-3 rounded border border-yellow-200">
                        <p className="text-xs text-yellow-800">
                          <strong>Wichtiger Punkt:</strong> Die Investition in Privacy Excellence amortisierte sich 
                          bereits nach 4 Monaten durch höhere Conversions und weniger Support-Aufwand.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Deployment & Monitoring Checklist</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Pre-Launch</h5>
                  {[
                    'Privacy Impact Assessment durchgeführt',
                    'Cookie Consent Banner getestet',
                    'Analytics-Setup validiert',
                    'Payment Security geprüft',
                    'Customer Rights Portal funktional'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Post-Launch Monitoring</h5>
                  {[
                    'Cookie Consent Rate überwachen',
                    'Data Subject Requests bearbeiten',
                    'Security Monitoring aktiv',
                    'Compliance Audits regelmäßig',
                    'Privacy Documentation aktuell'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      
      <main className="py-20">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 mb-6">
                <ShoppingCart className="h-4 w-4" />
                <span className="text-sm font-medium">E-Commerce Privacy Excellence</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                E-Commerce Privacy Excellence
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block mt-2">
                  DSGVO-konforme Online-Shops
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Kompletter Leitfaden für datenschutzkonforme E-Commerce-Lösungen. 
                Von Cookie-Consent über Payment-Security bis hin zu Customer Rights Management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/wissen/branchen">
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-red-600 text-white hover:opacity-90 group">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Zurück zur Übersicht
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="group">
                  <Download className="mr-2 h-5 w-5" />
                  E-Commerce Privacy Checkliste
                </Button>
              </div>
            </div>

            {/* Progress Indicator */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">E-Commerce Privacy Compliance</h3>
                  <Badge className="bg-green-100 text-green-700">96% Complete</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[
                    { label: 'Cookie Consent', progress: 98 },
                    { label: 'Analytics', progress: 95 },
                    { label: 'Payment Security', progress: 97 },
                    { label: 'Customer Rights', progress: 94 },
                    { label: 'Data Protection', progress: 96 },
                    { label: 'Compliance', progress: 98 }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-orange-600 mb-1">{item.progress}%</div>
                      <div className="text-xs text-gray-600">{item.label}</div>
                      <Progress value={item.progress} className="h-2 mt-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Main Content Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex items-center gap-2 text-xs md:text-sm"
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                {renderOverview()}
              </TabsContent>

              <TabsContent value="cookie-consent" className="space-y-8">
                {renderCookieConsent()}
              </TabsContent>

              <TabsContent value="tracking-analytics" className="space-y-8">
                {renderTrackingAnalytics()}
              </TabsContent>

              <TabsContent value="payment-data" className="space-y-8">
                {renderPaymentData()}
              </TabsContent>

              <TabsContent value="customer-rights" className="space-y-8">
                {renderCustomerRights()}
              </TabsContent>

              <TabsContent value="implementation" className="space-y-8">
                {renderImplementation()}
              </TabsContent>
            </Tabs>

            {/* Quick Links */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-orange-600" />
                  Weiterführende Ressourcen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link to="/wissen/rechtsprechung/cookie-law" className="block">
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
                      <Gavel className="h-5 w-5 text-orange-600 mb-2" />
                      <div className="font-medium">Cookie Law Updates</div>
                      <div className="text-sm text-gray-600">Aktuelle Rechtsprechung zu Cookies</div>
                    </div>
                  </Link>
                  <Link to="/wissen/compliance/dsgvo" className="block">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                      <Shield className="h-5 w-5 text-blue-600 mb-2" />
                      <div className="font-medium">DSGVO Guide</div>
                      <div className="text-sm text-gray-600">Umfassender DSGVO-Leitfaden</div>
                    </div>
                  </Link>
                  <Link to="/wissen/branchen/fintech-compliance" className="block">
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors">
                      <CreditCard className="h-5 w-5 text-purple-600 mb-2" />
                      <div className="font-medium">FinTech Compliance</div>
                      <div className="text-sm text-gray-600">Payment & Banking Compliance</div>
                    </div>
                  </Link>
                  <Link to="/wissen/krisenmanagement" className="block">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors">
                      <AlertOctagon className="h-5 w-5 text-red-600 mb-2" />
                      <div className="font-medium">Krisenmanagement</div>
                      <div className="text-sm text-gray-600">Data Breach Response</div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EcommercePrivacyGuide;