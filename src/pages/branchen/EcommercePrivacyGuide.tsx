import React, { useState } from 'react';
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
  MessageSquare
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
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">JavaScript Consent Framework</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Cookie Consent Management
class CookieConsent {
  constructor() {
    this.consentData = this.loadConsent();
    this.initializeBanner();
  }

  initializeBanner() {
    if (!this.hasValidConsent()) {
      this.showConsentBanner();
    } else {
      this.loadApprovedServices();
    }
  }

  grantConsent(categories) {
    const consent = {
      timestamp: Date.now(),
      categories: categories,
      version: '1.0'
    };
    
    localStorage.setItem('cookie_consent', 
      JSON.stringify(consent));
    this.loadServices(categories);
    this.hideBanner();
  }

  loadServices(categories) {
    if (categories.includes('analytics')) {
      this.loadGoogleAnalytics();
    }
    if (categories.includes('marketing')) {
      this.loadMarketingPixels();
    }
  }
}`}
                </pre>
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

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">gtag Konfiguration</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`gtag('config', 'GA_MEASUREMENT_ID', {
  'anonymize_ip': true,
  'allow_google_signals': false,
  'allow_ad_personalization_signals': false,
  'restricted_data_processing': true
});

// Consent Mode V2
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied'
});`}
                </pre>
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

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Plausible Integration</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`<script defer 
  data-domain="yourdomain.com" 
  data-api="/js/plausible/api/event"
  src="/js/plausible/script.js">
</script>

// Custom Events
plausible('Purchase', {
  props: {
    amount: 99.99,
    currency: 'EUR'
  }
});`}
                </pre>
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

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Payment Token Implementation</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Stripe Payment Element (PCI-compliant)
const stripe = Stripe('pk_...');
const elements = stripe.elements();

const paymentElement = elements.create('payment', {
  mode: 'payment',
  amount: 1099,
  currency: 'eur',
  // DSGVO: Minimale Datenerfassung
  paymentMethodCreation: 'manual',
  capture_method: 'manual'
});

// Tokenize ohne Speicherung der Kartendaten
const {error, paymentMethod} = 
  await stripe.createPaymentMethod({
    elements,
    params: {
      billing_details: {
        name: 'John Doe' // Nur erforderliche Daten
      }
    }
  });`}
                </pre>
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

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Privacy-First Fraud Check</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// DSGVO-konforme Fraud Detection
const fraudCheck = {
  // Erlaubt: Berechtigtes Interesse
  transactionPattern: analyzePattern(
    transaction.amount,
    transaction.frequency,
    transaction.merchant
  ),
  
  // Erlaubt: Notwendig für Vertragserfüllung
  geoLocation: validateCountry(
    billing.country,
    shipping.country
  ),
  
  // Einwilligung erforderlich
  deviceFingerprint: consent.fraud_detection 
    ? generateFingerprint() 
    : null,
    
  // Pseudonymisiert
  riskScore: calculateRisk(
    hashedCustomerId,
    transactionPattern
  )
};`}
                </pre>
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
            <Code className="w-5 h-5 text-indigo-600" />
            Customer Data Portal Implementation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">React Customer Privacy Dashboard</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Customer Privacy Dashboard Component
const PrivacyDashboard = () => {
  const [customerData, setCustomerData] = useState(null);
  const [loading, setLoading] = useState(false);

  const requestDataExport = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/privacy/export', {
        method: 'POST',
        headers: {
          'Authorization': \`Bearer \${token}\`,
          'Content-Type': 'application/json'
        }
      });
      
      const exportData = await response.json();
      downloadFile(exportData.url, 'my-data.json');
    } catch (error) {
      console.error('Export failed:', error);
    }
    setLoading(false);
  };

  const requestDeletion = async () => {
    const confirmation = confirm(
      'Möchten Sie Ihr Konto und alle Daten löschen?'
    );
    
    if (confirmation) {
      await fetch('/api/privacy/delete', {
        method: 'DELETE',
        headers: {
          'Authorization': \`Bearer \${token}\`
        }
      });
    }
  };

  return (
    <div className="privacy-dashboard">
      <h2>Meine Datenschutz-Einstellungen</h2>
      
      <section className="data-overview">
        <h3>Gespeicherte Daten</h3>
        <DataOverview data={customerData} />
      </section>

      <section className="privacy-actions">
        <Button onClick={requestDataExport} disabled={loading}>
          Daten exportieren
        </Button>
        <Button 
          onClick={requestDeletion} 
          variant="destructive"
        >
          Konto löschen
        </Button>
      </section>
    </div>
  );
};`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Backend API Implementation</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Express.js Privacy API
app.post('/api/privacy/export', authenticate, async (req, res) => {
  try {
    const customerId = req.user.id;
    
    // Sammle alle Kundendaten
    const exportData = {
      profile: await Customer.findById(customerId),
      orders: await Order.find({ customerId }),
      addresses: await Address.find({ customerId }),
      preferences: await Preference.find({ customerId }),
      communications: await Communication.find({ customerId }),
      // Anonymisierte Analytics
      analytics: await Analytics.getAnonymizedData(customerId)
    };

    // Erstelle sicheren Download-Link
    const exportFile = await createExportFile(exportData);
    const downloadUrl = await generateSecureUrl(exportFile);

    res.json({
      success: true,
      url: downloadUrl,
      expiresAt: Date.now() + (24 * 60 * 60 * 1000) // 24h
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Export failed',
      message: error.message 
    });
  }
});

app.delete('/api/privacy/delete', authenticate, async (req, res) => {
  const customerId = req.user.id;
  
  // Soft Delete mit Anonymisierung
  await anonymizeCustomerData(customerId);
  
  res.json({ 
    success: true, 
    message: 'Account deletion initiated' 
  });
});`}
                </pre>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-700">Frontend Privacy Stack</h4>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// package.json dependencies
{
  "dependencies": {
    "react": "^18.0.0",
    "react-cookie-consent": "^8.0.0",
    "@react-google-analytics/gtag": "^1.0.0",
    "plausible-tracker": "^0.3.8",
    "@stripe/stripe-js": "^1.54.0",
    "react-query": "^3.39.0"
  }
}

// Privacy-first component architecture
components/
├── privacy/
│   ├── CookieConsent.tsx
│   ├── PrivacyDashboard.tsx
│   └── DataExportButton.tsx
├── analytics/
│   ├── PlausibleProvider.tsx
│   └── ConsentAnalytics.tsx
└── payments/
    ├── StripeProvider.tsx
    └── PaymentForm.tsx`}
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-700">Backend Privacy API</h4>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Express.js API structure
routes/
├── privacy/
│   ├── consent.js      // Cookie consent management
│   ├── export.js       // Data export (Art. 15)
│   ├── deletion.js     // Right to erasure (Art. 17)
│   └── rectification.js // Data correction (Art. 16)
├── analytics/
│   ├── events.js       // Privacy-compliant tracking
│   └── reporting.js    // Anonymized insights
└── payments/
    ├── tokenization.js // PCI-compliant payment handling
    └── fraud.js        // Privacy-aware fraud detection

// Middleware stack
app.use(helmet());                 // Security headers
app.use(rateLimit());             // DoS protection
app.use(privacyCompliance());     // GDPR middleware
app.use(auditLogger());           // Compliance logging`}
                  </pre>
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