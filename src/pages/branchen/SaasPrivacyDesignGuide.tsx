import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Cloud,
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
  Layers,
  GitBranch,
  RefreshCw,
  Upload,
  HardDrive,
  Network,
  Cpu,
  MemoryStick,
  Webhook,
  Terminal,
  Boxes,
  Construction,
  Wrench
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SaasPrivacyDesignGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'architecture', label: 'Privacy Architecture', icon: Layers },
    { id: 'data-minimization', label: 'Data Minimization', icon: Database },
    { id: 'user-control', label: 'User Control', icon: UserCheck },
    { id: 'security-design', label: 'Security by Design', icon: Lock },
    { id: 'implementation', label: 'Implementation', icon: Code }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Shield className="w-8 h-8 text-cyan-600" />
          SaaS Privacy by Design Framework
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Ein umfassendes Framework für die Entwicklung DSGVO-konformer SaaS-Anwendungen mit 
          eingebautem Datenschutz von der ersten Zeile Code an.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Privacy by Default',
            icon: Shield,
            color: 'text-blue-600',
            description: 'Datenschutzfreundlichste Einstellungen als Standard'
          },
          {
            title: 'Data Minimization',
            icon: Database,
            color: 'text-green-600',
            description: 'Nur notwendige Daten sammeln und verarbeiten'
          },
          {
            title: 'User Control',
            icon: UserCheck,
            color: 'text-purple-600',
            description: 'Vollständige Kontrolle über persönliche Daten'
          },
          {
            title: 'Security by Design',
            icon: Lock,
            color: 'text-red-600',
            description: 'Sicherheit als fundamentales Architekturprinzip'
          },
          {
            title: 'Transparency',
            icon: Eye,
            color: 'text-orange-600',
            description: 'Transparente Datenverarbeitung und -nutzung'
          },
          {
            title: 'Compliance',
            icon: FileCheck,
            color: 'text-indigo-600',
            description: 'DSGVO-, CCPA- und weitere Compliance-Standards'
          }
        ].map((principle, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <principle.icon className={`w-6 h-6 ${principle.color}`} />
                <h4 className="font-semibold">{principle.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{principle.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderArchitecture = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Layers className="w-8 h-8 text-purple-600" />
          Privacy-First Architecture
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Architektur-Patterns und Best Practices für SaaS-Anwendungen mit eingebautem Datenschutz.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Microservices Privacy Architecture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Core Services</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: 'User Service', purpose: 'Benutzerverwaltung mit Privacy Controls' },
                  { name: 'Consent Service', purpose: 'Einverständnisverwaltung und -tracking' },
                  { name: 'Data Service', purpose: 'Datenverarbeitung mit Minimierung' },
                  { name: 'Audit Service', purpose: 'Compliance und Audit-Logs' }
                ].map((service, index) => (
                  <div key={index} className="bg-white p-4 rounded border">
                    <h5 className="font-medium text-gray-900">{service.name}</h5>
                    <p className="text-sm text-gray-600 mt-1">{service.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderDataMinimization = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Database className="w-8 h-8 text-green-600" />
          Data Minimization Strategies
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Techniken zur Minimierung der Datensammlung und -verarbeitung in SaaS-Anwendungen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Collection Minimization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Frontend Validation</h4>
                <div className="bg-gray-50 p-3 rounded">
                  <code className="text-sm">
                    {`// Nur erforderliche Felder sammeln
const requiredFields = ['email', 'name'];
const optionalFields = ['phone', 'company'];`}
                  </code>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Progressive Disclosure</h4>
                <p className="text-sm text-gray-600">
                  Daten nur sammeln, wenn sie für die aktuelle Funktionalität benötigt werden.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Processing Minimization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">Purpose Binding</h4>
                <div className="bg-gray-50 p-3 rounded">
                  <code className="text-sm">
                    {`// Datenverarbeitung nur für definierten Zweck
const processingPurpose = 'user_authentication';
if (purpose !== processingPurpose) return false;`}
                  </code>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Retention Limits</h4>
                <p className="text-sm text-gray-600">
                  Automatische Löschung nach Ablauf der Aufbewahrungsfristen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderUserControl = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <UserCheck className="w-8 h-8 text-teal-600" />
          User Control & Rights Management
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Implementierung der DSGVO-Betroffenenrechte in SaaS-Anwendungen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            title: 'Data Export',
            icon: Download,
            features: [
              'Vollständiger Datenexport in JSON/CSV',
              'Strukturierte Datenportabilität',
              'Sichere Download-Links',
              'Export-Historie und -Status'
            ]
          },
          {
            title: 'Consent Management',
            icon: CheckCircle2,
            features: [
              'Granulare Einverständniserklärungen',
              'Einfache Widerrufsmöglichkeiten',
              'Consent-Historie und -Tracking',
              'Cookie-Banner Integration'
            ]
          },
          {
            title: 'Data Deletion',
            icon: Truck,
            features: [
              'Sofortiges Löschen auf Anfrage',
              'Kaskadierendes Löschen in allen Services',
              'Backup-Bereinigung',
              'Löschbestätigung für Benutzer'
            ]
          }
        ].map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <feature.icon className="w-5 h-5 text-teal-600" />
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderSecurityDesign = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 border border-red-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Lock className="w-8 h-8 text-red-600" />
          Security by Design
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Sicherheitsmaßnahmen als fundamentaler Bestandteil der SaaS-Architektur.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {[
          {
            title: 'Encryption at Rest & Transit',
            icon: Key,
            color: 'blue',
            features: [
              'AES-256 Verschlüsselung für alle Daten',
              'TLS 1.3 für alle Kommunikation',
              'HSM-basiertes Key Management',
              'Automatische Key Rotation'
            ]
          },
          {
            title: 'Zero-Trust Architecture',
            icon: Shield,
            color: 'green',
            features: [
              'Microsegmentierung der Netzwerke',
              'Identity-based Access Control',
              'Continuous Verification',
              'Least Privilege Principle'
            ]
          },
          {
            title: 'Threat Detection',
            icon: AlertTriangle,
            color: 'red',
            features: [
              'Real-time Anomaly Detection',
              'Behavioral Analysis',
              'Automated Incident Response',
              'Threat Intelligence Integration'
            ]
          },
          {
            title: 'Audit & Compliance',
            icon: FileCheck,
            color: 'purple',
            features: [
              'Comprehensive Audit Logs',
              'Compliance Dashboards',
              'Automated Reporting',
              'Third-party Security Assessments'
            ]
          }
        ].map((security, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <security.icon className={`w-5 h-5 text-${security.color}-600`} />
                {security.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {security.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderImplementation = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Code className="w-8 h-8 text-purple-600" />
          Complete Implementation Guide
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Schritt-für-Schritt Anleitung zur Implementierung einer vollständig DSGVO-konformen 
          SaaS-Anwendung mit Privacy by Design Prinzipien.
        </p>
      </div>

      <Card className="p-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Construction className="w-5 h-5 text-yellow-600" />
            Complete Technology Stack
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-600 rounded-lg">
                  <Construction className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-yellow-900">🚀 Complete Technology Stack Transformation</h4>
                  <p className="text-sm text-yellow-700">Vom Legacy-Chaos zu Privacy-First Excellence</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border border-yellow-100 text-center">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">12</div>
                  <div className="text-xs text-gray-600">Privacy-aware</div>
                  <div className="text-xs text-yellow-600">Microservices</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-yellow-100 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">100%</div>
                  <div className="text-xs text-gray-600">Encrypted</div>
                  <div className="text-xs text-green-600">Data at Rest</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-yellow-100 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">7</div>
                  <div className="text-xs text-gray-600">Security Layers</div>
                  <div className="text-xs text-purple-600">Defense in Depth</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Production Deployment Checklist</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Pre-Deployment</h5>
                  {[
                    'Privacy Impact Assessment abgeschlossen',
                    'DSGVO Compliance Review durchgeführt',
                    'Security Penetration Tests bestanden',
                    'Data Flow Dokumentation vollständig',
                    'Incident Response Plan etabliert'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Deployment</h5>
                  {[
                    'Kubernetes Security Policies aktiviert',
                    'Encryption at Rest konfiguriert',
                    'Network Policies implementiert',
                    'Monitoring & Alerting konfiguriert',
                    'Backup & Recovery getestet'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Post-Deployment</h5>
                  {[
                    'Privacy Monitoring Dashboard aktiv',
                    'User Consent Flows getestet',
                    'Data Export/Deletion funktional',
                    'Compliance Audits automatisiert',
                    'Staff Training abgeschlossen'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-purple-600" />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400 mb-6">
                <Cloud className="h-4 w-4" />
                <span className="text-sm font-medium">SaaS Privacy by Design</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                SaaS Privacy by Design
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent block mt-2">
                  DSGVO-native SaaS Development
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Entwickeln Sie SaaS-Anwendungen mit eingebautem Datenschutz von Grund auf. 
                Privacy by Design und Security by Design als fundamentale Architekturprinzipien.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/wissen/branchen">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:opacity-90 group">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Zurück zur Übersicht
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="group">
                  <Download className="mr-2 h-5 w-5" />
                  Implementation Guide
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {[
                    { label: 'Privacy', progress: 98 },
                    { label: 'Security', progress: 96 },
                    { label: 'Compliance', progress: 97 },
                    { label: 'Monitoring', progress: 95 }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-cyan-600 mb-1">{item.progress}%</div>
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

              <TabsContent value="architecture" className="space-y-8">
                {renderArchitecture()}
              </TabsContent>

              <TabsContent value="data-minimization" className="space-y-8">
                {renderDataMinimization()}
              </TabsContent>

              <TabsContent value="user-control" className="space-y-8">
                {renderUserControl()}
              </TabsContent>

              <TabsContent value="security-design" className="space-y-8">
                {renderSecurityDesign()}
              </TabsContent>

              <TabsContent value="implementation" className="space-y-8">
                {renderImplementation()}
              </TabsContent>
            </Tabs>

            {/* Quick Links */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-cyan-600" />
                  Weiterführende Ressourcen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link to="/wissen/dsgvo" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium mb-2">DSGVO Grundlagen</h4>
                    <p className="text-sm text-gray-600">Rechtliche Grundlagen verstehen</p>
                  </Link>
                  <Link to="/wissen/datenschutz-tools" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium mb-2">Privacy Tools</h4>
                    <p className="text-sm text-gray-600">Praktische Implementierungstools</p>
                  </Link>
                  <Link to="/kontakt" className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h4 className="font-medium mb-2">Beratung anfragen</h4>
                    <p className="text-sm text-gray-600">Individuelle Unterstützung erhalten</p>
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

export default SaasPrivacyDesignGuide;