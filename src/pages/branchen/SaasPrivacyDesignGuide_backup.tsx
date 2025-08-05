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
import { cn } from '@/lib/utils';

const SaasPrivacyDesignGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'architecture', label: 'Privacy Architecture', icon: Layers },
    { id: 'data-minimization', label: 'Data Minimization', icon: Database },
    { id: 'user-control', label: 'User Control', icon: UserCheck },
    { id: 'security-design', label: 'Security by Design', icon: Lock },
    { id: 'implementation', label: 'Implementation', icon: Code }
  ];

  const privacyPrinciples = [
    {
      name: 'Privacy by Default',
      category: 'Grundprinzip',
      requirements: [
        'Datenschutzfreundlichste Einstellungen als Standard',
        'Minimale Datenverarbeitung ohne Nutzeraktion',
        'Opt-in statt Opt-out für sensible Funktionen',
        'Automatische Datenlöschung nach Zweckerfüllung'
      ],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'Data Minimization by Design',
      category: 'Datenreduktion',
      requirements: [
        'Nur erforderliche Daten sammeln und verarbeiten',
        'Zweckgebundene Datenverarbeitung implementieren',
        'Pseudonymisierung und Anonymisierung priorisieren',
        'Regelmäßige Datenbereinigung automatisieren'
      ],
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'Transparency by Design',
      category: 'Transparenz',
      requirements: [
        'Verständliche Datenschutzerklärungen',
        'Real-time Verarbeitungshinweise',
        'Granulare Zustimmungsoptionen',
        'Audit-Logs für Nutzer zugänglich'
      ],
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const architecturalPatterns = [
    {
      pattern: 'Microservices Privacy',
      icon: Boxes,
      description: 'Isolierte Services mit minimalen Datenflüssen',
      benefits: [
        'Reduzierte Angriffsfläche',
        'Service-spezifische Datenschutzrichtlinien',
        'Isolierte Compliance-Scopes',
        'Granulare Zugriffskontrollen'
      ]
    },
    {
      pattern: 'Event-Driven Privacy',
      icon: Webhook,
      description: 'Privacy-Events für automatische Compliance',
      benefits: [
        'Automatische Löschungen bei Vertragsende',
        'Real-time Consent-Propagation',
        'Audit-Trail für alle Datenoperationen',
        'Compliance-Monitoring durch Events'
      ]
    },
    {
      pattern: 'Zero-Trust Data',
      icon: Shield,
      description: 'Standardmäßige Verschlüsselung und Zugriffskontrolle',
      benefits: [
        'End-to-End Encryption for all data',
        'Identity-based Access Control',
        'Minimal Privilegien für Services',
        'Kontinuierliche Verifikation'
      ]
    }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Cloud className="w-8 h-8 text-cyan-600" />
          SaaS Privacy by Design
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Entwickeln Sie SaaS-Lösungen mit eingebautem Datenschutz von Grund auf. 
          Privacy by Design und Privacy by Default als fundamentale Architekturprinzipien 
          für moderne, DSGVO-konforme Cloud-Anwendungen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['Privacy by Default', 'Zero-Trust Architecture', 'GDPR-native'].map((principle, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center border border-cyan-200">
              <div className="text-lg font-bold text-cyan-700">{principle}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {privacyPrinciples.map((principle, index) => (
          <Card key={index} className={cn("p-6 border-2", principle.color)}>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{principle.name}</CardTitle>
              <Badge variant="outline" className="w-fit">{principle.category}</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              {principle.requirements.map((req, i) => (
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

  const renderArchitecture = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Layers className="w-8 h-8 text-indigo-600" />
          Privacy-First SaaS Architecture
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Entwickeln Sie eine Systemarchitektur, die Datenschutz als Kernprinzip implementiert 
          und automatische Compliance-Mechanismen in jeden Service integriert.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {architecturalPatterns.map((pattern, index) => (
          <Card key={index} className="p-6">
            <CardHeader>
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-indigo-100 rounded-lg">
                  <pattern.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-lg">{pattern.pattern}</CardTitle>
              </div>
              <p className="text-sm text-gray-600">{pattern.description}</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {pattern.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{benefit}</span>
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
            <Network className="w-5 h-5 text-purple-600" />
            Privacy-Aware System Design
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-indigo-600 rounded-lg">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-indigo-900">🏗️ Privacy-First Architecture Transformation</h4>
                  <p className="text-sm text-indigo-700">Microservices mit eingebautem Datenschutz</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-100 text-center">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">99.7%</div>
                  <div className="text-xs text-gray-600">Service Uptime</div>
                  <div className="text-xs text-indigo-600">mit Privacy Controls</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-indigo-100 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">-85%</div>
                  <div className="text-xs text-gray-600">Datenverarbeitung</div>
                  <div className="text-xs text-green-600">durch Minimierung</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-indigo-100 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">2.3s</div>
                  <div className="text-xs text-gray-600">Response Time</div>
                  <div className="text-xs text-purple-600">trotz Verschlüsselung</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  Erfolgsgeschichte: TechFlow SaaS
                </h4>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-blue-900">Intelligente Datenklassifizierung</h5>
                        <p className="text-sm text-blue-700">Automatische Privacy-Level Erkennung</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="bg-white p-3 rounded border border-blue-100">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Hochsensible Daten:</span>
                          <span className="text-blue-600 font-bold">AES-256 + HSM</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-100">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Sensible Daten:</span>
                          <span className="text-green-600 font-bold">AES-128 + Tokenization</span>
                        </div>
                      </div>
                      <div className="bg-white p-3 rounded border border-blue-100">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Interne Daten:</span>
                          <span className="text-purple-600 font-bold">Pseudonymisierung</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-100 p-3 rounded border border-green-200">
                      <p className="text-xs text-green-800">
                        <strong>Ergebnis:</strong> 99.9% automatische Klassifizierung, 0 manuelle Privacy-Entscheidungen nötig.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-purple-600" />
                  Architektur-Transformation: CloudCorp
                </h4>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-200">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                        <Boxes className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h5 className="font-bold text-purple-900">Microservices Privacy Gateway</h5>
                        <p className="text-sm text-purple-700">Dezentrale Privacy Controls</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between bg-white p-2 rounded border border-purple-100">
                        <span className="text-xs font-medium">User Service:</span>
                        <span className="text-xs text-green-600 font-bold">730 Tage Retention</span>
                      </div>
                      <div className="flex items-center justify-between bg-white p-2 rounded border border-purple-100">
                        <span className="text-xs font-medium">Analytics Service:</span>
                        <span className="text-xs text-blue-600 font-bold">90 Tage + Anonymisierung</span>
                      </div>
                      <div className="flex items-center justify-between bg-white p-2 rounded border border-purple-100">
                        <span className="text-xs font-medium">Audit Service:</span>
                        <span className="text-xs text-purple-600 font-bold">7 Jahre verschlüsselt</span>
                      </div>
                    </div>
                    
                    <div className="bg-yellow-100 p-3 rounded border border-yellow-200">
                      <p className="text-xs text-yellow-800">
                        <strong>Transformation:</strong> Von monolithischem System zu 12 Privacy-aware Microservices. 
                        Jeder Service hat eigene Datenschutzrichtlinien und Compliance-Scopes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
              <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-green-600" />
                Privacy-First Architecture Best Practices
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="bg-white p-3 rounded border border-green-100">
                  <div className="font-semibold mb-1 flex items-center gap-1">
                    <Shield className="w-3 h-3 text-green-600" />
                    Service Isolation
                  </div>
                  <p className="text-gray-600">Jeder Service verarbeitet nur die minimal notwendigen Daten für seinen spezifischen Zweck.</p>
                </div>
                <div className="bg-white p-3 rounded border border-green-100">
                  <div className="font-semibold mb-1 flex items-center gap-1">
                    <Webhook className="w-3 h-3 text-blue-600" />
                    Event-Driven Privacy
                  </div>
                  <p className="text-gray-600">Privacy-Events propagieren Consent-Änderungen automatisch an alle Services.</p>
                </div>
                <div className="bg-white p-3 rounded border border-green-100">
                  <div className="font-semibold mb-1 flex items-center gap-1">
                    <Lock className="w-3 h-3 text-red-600" />
                    Zero-Trust Data
                  </div>
                  <p className="text-gray-600">Standardmäßige Verschlüsselung und Identity-based Access Control für alle Datenflüsse.</p>
                </div>
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
          Implementieren Sie systematische Datenreduktion und intelligente Datenverarbeitung, 
          um nur die wirklich notwendigen Informationen zu sammeln und zu speichern.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-600" />
              Smart Data Collection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Progressive Data Collection</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Core Daten bei Registrierung (Name, E-Mail)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Erweiterte Daten bei Bedarf (Präferenzen)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Analytische Daten nur mit Consent</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Context-aware Data Requests</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-600 rounded-lg">
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900">📊 Smart Data Collection Excellence</h4>
                    <p className="text-sm text-green-700">Nur sammeln was wirklich gebraucht wird</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-green-100">
                    <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-600" />
                      Progressive Collection Erfolgsmetriken
                    </h5>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-green-600">89%</div>
                        <div className="text-xs text-gray-600">weniger Datensammlung</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-blue-600">+127%</div>
                        <div className="text-xs text-gray-600">User Engagement</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-green-100">
                      <h6 className="font-semibold text-xs mb-2 text-green-700">🎯 Stufenweise Datensammlung</h6>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span>Registrierung:</span>
                          <span className="font-medium">Name + E-Mail</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Onboarding:</span>
                          <span className="font-medium">Firma + Rolle</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Nutzung:</span>
                          <span className="font-medium">Feature Usage</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Analytics:</span>
                          <span className="font-medium">Nur mit Consent</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-green-100">
                      <h6 className="font-semibold text-xs mb-2 text-blue-700">⚡ Context-Aware Requests</h6>
                      <div className="space-y-1 text-xs">
                        <div className="p-2 bg-blue-50 rounded">"Für bessere Empfehlungen: Branche?"</div>
                        <div className="p-2 bg-green-50 rounded">"Analytics helfen uns: Zustimmen?"</div>
                        <div className="p-2 bg-purple-50 rounded">"Team-Features: Firmengröße?"</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600" />
                      <span className="font-semibold text-sm text-blue-800">Praxis-Beispiel: DataFlow SaaS</span>
                    </div>
                    <p className="text-xs text-blue-700">
                      Durch progressive Datensammlung konnte DataFlow die Bounce-Rate um 67% senken und gleichzeitig 
                      89% weniger personenbezogene Daten sammeln. Nutzer schätzen die Transparenz und geben Daten 
                      bereitwilliger preis, wenn der Nutzen klar kommuniziert wird.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-purple-600" />
              Automated Data Lifecycle
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Automatic Deletion Policies</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Inactive User Data: 3 Jahre</li>
                    <li>• Analytics Data: 6 Monate</li>
                    <li>• Log Files: 30 Tage</li>
                    <li>• Temporary Files: 24 Stunden</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Data Transformation Rules</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Personal → Aggregated nach 90 Tagen</li>
                    <li>• Detailed → Summarized nach 30 Tagen</li>
                    <li>• Identifiable → Pseudonymized sofort</li>
                    <li>• Sensitive → Encrypted at Rest</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-600 rounded-lg">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900">🤖 Vollautomatisches Data Lifecycle Management</h4>
                    <p className="text-sm text-purple-700">Set it and forget it - Compliance läuft von selbst</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-600" />
                      24/7 Automatische Datenbereinigung
                    </h5>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-purple-600 mb-1">2:00 AM</div>
                        <div className="text-xs text-gray-600">Tägliche Bereinigung</div>
                        <div className="text-xs text-purple-600">vollautomatisch</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600 mb-1">99.8%</div>
                        <div className="text-xs text-gray-600">Erfolgsrate</div>
                        <div className="text-xs text-green-600">ohne manuelles Eingreifen</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-purple-100">
                      <h6 className="font-semibold text-xs mb-2 text-green-700">✅ Was automatisch passiert</h6>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-600" />
                          <span>Abgelaufene Daten löschen</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-600" />
                          <span>Alte Daten anonymisieren</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-600" />
                          <span>Details zu Aggregaten</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3 h-3 text-green-600" />
                          <span>Compliance-Berichte</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-purple-100">
                      <h6 className="font-semibold text-xs mb-2 text-blue-700">📈 Echte Einsparungen</h6>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span>Manuelle Arbeit:</span>
                          <span className="font-medium text-red-600">-40h/Monat</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Storage Kosten:</span>
                          <span className="font-medium text-green-600">-67%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Compliance Risiko:</span>
                          <span className="font-medium text-blue-600">-89%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>DSGVO Readiness:</span>
                          <span className="font-medium text-purple-600">99.9%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-3 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-orange-600" />
                      <span className="font-semibold text-sm text-orange-800">Success Story: DevTools Inc.</span>
                    </div>
                    <p className="text-xs text-orange-700">
                      "Nach der Implementierung des automatischen Lifecycle Managements sparen wir 40 Stunden 
                      pro Monat für manuelle Datenbereinigung. Unser Compliance-Score stieg von 78% auf 99.9% - 
                      und das System läuft seit 18 Monaten fehlerfrei."
                    </p>
                    <div className="mt-2 text-right">
                      <span className="text-xs font-medium text-orange-600">- Sarah M., CTO</span>
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
            <MemoryStick className="w-5 h-5 text-orange-600" />
            Data Minimization Techniques
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Eye className="w-4 h-4 text-orange-600" />
                Pseudonymization
              </h4>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium">Hash-based Pseudonyms</p>
                  <p className="text-gray-600 mt-1">Konsistente Pseudonyme für Analytics</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium">Token-based IDs</p>
                  <p className="text-gray-600 mt-1">Reversible Pseudonymisierung</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium">Synthetic Data</p>
                  <p className="text-gray-600 mt-1">AI-generierte Test-/Trainingsdaten</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <BarChart className="w-4 h-4 text-orange-600" />
                Data Aggregation
              </h4>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium">Usage Statistics</p>
                  <p className="text-gray-600 mt-1">Aggregierte Nutzungsmetriken</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium">Trend Analysis</p>
                  <p className="text-gray-600 mt-1">Anonyme Verhaltensmuster</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium">Performance Metrics</p>
                  <p className="text-gray-600 mt-1">System-Performance ohne User-Bezug</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-orange-600" />
                Storage Optimization
              </h4>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium">Hot/Cold Storage</p>
                  <p className="text-gray-600 mt-1">Automatische Daten-Archivierung</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium">Compression</p>
                  <p className="text-gray-600 mt-1">Verlustfreie Datenkompression</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-medium">Deduplication</p>
                  <p className="text-gray-600 mt-1">Entfernung redundanter Daten</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderUserControl = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <UserCheck className="w-8 h-8 text-teal-600" />
          User Control & Transparency
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Geben Sie Ihren Nutzern vollständige Kontrolle über ihre Daten mit 
          intuitiven Interfaces und transparenten Datenverarbeitungsprozessen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              Privacy Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Self-Service Privacy Controls</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Granulare Consent-Verwaltung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Data Download Center</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Activity Logs & Audit Trail</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>One-Click Account Deletion</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Settings className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">🏛️ Self-Service Privacy Excellence</h4>
                    <p className="text-sm text-blue-700">Nutzer lieben die volle Kontrolle über ihre Daten</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-100">
                    <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      Privacy Dashboard Erfolgsmetriken
                    </h5>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-blue-600 mb-1">94%</div>
                        <div className="text-xs text-gray-600">Nutzer-Zufriedenheit</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600 mb-1">73%</div>
                        <div className="text-xs text-gray-600">Aktive Nutzung</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-purple-600 mb-1">-81%</div>
                        <div className="text-xs text-gray-600">Support-Tickets</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <h6 className="font-semibold text-xs mb-2 text-green-700">✅ Was Nutzer können</h6>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center gap-2">
                          <UserCheck className="w-3 h-3 text-green-600" />
                          <span>Granulare Consent-Kontrolle</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Download className="w-3 h-3 text-blue-600" />
                          <span>1-Click Daten-Export</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-3 h-3 text-purple-600" />
                          <span>Transparente Activity Logs</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="w-3 h-3 text-red-600" />
                          <span>Account Deletion</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-blue-100">
                      <h6 className="font-semibold text-xs mb-2 text-blue-700">🚀 Business Impact</h6>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span>Trust Score:</span>
                          <span className="font-medium text-green-600">+187%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Data Requests:</span>
                          <span className="font-medium text-blue-600">-92%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>User Retention:</span>
                          <span className="font-medium text-purple-600">+34%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>NPS Score:</span>
                          <span className="font-medium text-yellow-600">+28 Punkte</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-sm text-green-800">Erfolgsgeschichte: ProjectFlow SaaS</span>
                    </div>
                    <p className="text-xs text-green-700">
                      "Unser Privacy Dashboard hat die Nutzererfahrung revolutioniert. 94% unserer Nutzer verwenden 
                      aktiv die Privacy-Controls, und unsere DSGVO-Anfragen sind um 92% gesunken. 
                      Das Vertrauen unserer Kunden ist spürbar gestiegen."
                    </p>
                    <div className="mt-2 text-right">
                      <span className="text-xs font-medium text-green-600">- Alex K., Head of Product</span>
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
              <Eye className="w-5 h-5 text-purple-600" />
              Transparency Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Real-time Processing Notifications</h4>
                  <p className="text-sm text-purple-700 mt-1">
                    Benachrichtigungen bei Datenverarbeitung mit Zweck und Rechtsgrundlage
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Data Journey Visualization</h4>
                  <p className="text-sm text-purple-700 mt-1">
                    Grafische Darstellung der Datenflüsse und Verarbeitungsschritte
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Purpose-based Data Access</h4>
                  <p className="text-sm text-purple-700 mt-1">
                    Detaillierte Aufschlüsselung der Datenzugriffe nach Verarbeitungszweck
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-600 rounded-lg">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-purple-900">🔍 Real-Time Transparency Magic</h4>
                    <p className="text-sm text-purple-700">Nutzer sehen jede Datenverarbeitung live</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-purple-100">
                    <h5 className="font-semibold text-sm mb-3 flex items-center gap-2">
                      <BarChart className="w-4 h-4 text-purple-600" />
                      Transparency Impact Metriken
                    </h5>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-purple-600 mb-1">12.7M</div>
                        <div className="text-xs text-gray-600">Processing Events</div>
                        <div className="text-xs text-purple-600">transparent geloggt</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-green-600 mb-1">91%</div>
                        <div className="text-xs text-gray-600">User Satisfaction</div>
                        <div className="text-xs text-green-600">mit Transparenz</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-lg border border-purple-100">
                      <h6 className="font-semibold text-xs mb-2 text-blue-700">📱 Real-Time Notifications</h6>
                      <div className="space-y-1 text-xs">
                        <div className="p-2 bg-blue-50 rounded">"Analytics: Neue Session"</div>
                        <div className="p-2 bg-green-50 rounded">"Backup: Daten gesichert"</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg border border-purple-100">
                      <h6 className="font-semibold text-xs mb-2 text-green-700">📈 Data Journey Viz</h6>
                      <div className="space-y-1 text-xs">
                        <div className="p-2 bg-green-50 rounded">Upload → Processing</div>
                        <div className="p-2 bg-yellow-50 rounded">Analysis → Storage</div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-3 rounded-lg border border-purple-100">
                      <h6 className="font-semibold text-xs mb-2 text-purple-700">🎯 Purpose-Based Access</h6>
                      <div className="space-y-1 text-xs">
                        <div className="p-2 bg-purple-50 rounded">Marketing: 47 Zugriffe</div>
                        <div className="p-2 bg-orange-50 rounded">Analytics: 123 Events</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-3 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-yellow-600" />
                      <span className="font-semibold text-sm text-yellow-800">Game Changer: DataViz Pro</span>
                    </div>
                    <p className="text-xs text-yellow-700">
                      "Die Real-Time Transparency hat das Vertrauen unserer Enterprise-Kunden um 340% gesteigert. 
                      Wir loggen 12.7M Processing Events monatlich und Nutzer können jeden einzelnen Schritt 
                      nachvollziehen. Das ist unser größter Competitive Advantage geworden."
                    </p>
                    <div className="mt-2 text-right">
                      <span className="text-xs font-medium text-yellow-600">- Maria L., VP Engineering</span>
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
            <Terminal className="w-5 h-5 text-green-600" />
            User Control Implementation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-teal-600" />
                Granular Consent Excellence: TechStart SaaS
              </h4>
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-teal-900">Mikro-Consent Management Revolution</h5>
                      <p className="text-sm text-teal-700">Jede Einwilligung wird sofort an alle 23 Services propagiert</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-teal-100">
                      <h6 className="font-semibold text-sm mb-3 text-teal-800">Consent Categories</h6>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span>Analytics:</span>
                          <Badge className="bg-green-100 text-green-700 text-xs">67% Opt-in</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Marketing:</span>
                          <Badge className="bg-blue-100 text-blue-700 text-xs">34% Opt-in</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Personalization:</span>
                          <Badge className="bg-purple-100 text-purple-700 text-xs">89% Opt-in</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span>Research:</span>
                          <Badge className="bg-orange-100 text-orange-700 text-xs">12% Opt-in</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg border border-teal-100">
                      <h6 className="font-semibold text-sm mb-3 text-blue-800">Real-Time Propagation</h6>
                      <div className="space-y-2 text-xs">
                        <div className="flex items-center justify-between">
                          <span>Propagation Speed:</span>
                          <span className="font-bold text-green-600">&lt;300ms</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Services Updated:</span>
                          <span className="font-bold text-blue-600">23/23</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Reliability:</span>
                          <span className="font-bold text-purple-600">99.98%</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Audit Trail:</span>
                          <span className="font-bold text-teal-600">Complete</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-sm text-green-800">Smart Consent Innovation</span>
                    </div>
                    <p className="text-xs text-green-700">
                      Wenn ein Nutzer Analytics ablehnt, werden automatisch alle 7 Analytics-Services 
                      gestoppt und bestehende Daten anonymisiert - alles in unter 300ms. 
                      IP-Adressen, User-Agents und exakte Timestamps werden für jede Consent-Änderung geloggt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Download className="w-4 h-4 text-green-600" />
                Data Portability Excellence: CloudExport Pro
              </h4>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-green-900">1-Click Data Export Revolution</h5>
                      <p className="text-sm text-green-700">100MB Daten in 3 Formaten in unter 47 Sekunden</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-white p-3 rounded border border-green-100">
                      <div className="text-lg font-bold text-green-600">JSON</div>
                      <div className="text-xs text-gray-600">Entwickler-Format</div>
                    </div>
                    <div className="bg-white p-3 rounded border border-green-100">
                      <div className="text-lg font-bold text-blue-600">CSV</div>
                      <div className="text-xs text-gray-600">Excel-kompatibel</div>
                    </div>
                    <div className="bg-white p-3 rounded border border-green-100">
                      <div className="text-lg font-bold text-purple-600">XML</div>
                      <div className="text-xs text-gray-600">System-Integration</div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-100 p-3 rounded border border-yellow-200">
                    <p className="text-xs text-yellow-800">
                      <strong>Innovation:</strong> Export-Jobs laufen asynchron, sicherer Download-Link 
                      gültig für 7 Tage, automatische Datensammlung aus 12 Services mit 
                      Integritätsprüfung. 94% der Nutzer bewerten den Export als "sehr einfach".
                    </p>
                  </div>
                </div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs mt-4">
{`# Export Service - Transformed
class DataExportService {
  constructor() {
    this.exportFormats = ['json', 'csv', 'xml'];
    this.maxExportSize = 100 * 1024 * 1024; // 100MB
  }

  async exportUserData(userId, format = 'json', sections = 'all') {
    const exportJob = await ExportJob.create({
      userId,
      format,
      sections,
      status: 'initiated',
      createdAt: Date.now()
    });

    try {
      // Sammle Daten aus allen Services
      const userData = await this.collectUserData(userId, sections);
      
      // Validiere Datenintegrität
      const validatedData = await this.validateExportData(userData);
      
      // Formatiere Export
      const formattedData = await this.formatExport(
        validatedData, 
        format
      );
      
      // Erstelle sicheren Download-Link
      const downloadUrl = await this.createSecureDownload(
        formattedData,
        userId,
        exportJob.id
      );

      await exportJob.update({
        status: 'completed',
        downloadUrl,
        expiresAt: Date.now() + (7 * 24 * 60 * 60 * 1000) // 7 Tage
      });

      return {
        exportId: exportJob.id,
        downloadUrl,
        format,
        size: formattedData.length,
        expiresAt: exportJob.expiresAt
      };
    } catch (error) {
      await exportJob.update({
        status: 'failed',
        error: error.message
      });
      throw error;
    }
  }

  async collectUserData(userId, sections) {
    const collectors = {
      profile: () => User.findById(userId),
      activity: () => ActivityLog.findByUserId(userId),
      preferences: () => Preferences.findByUserId(userId),
      content: () => UserContent.findByUserId(userId),
      analytics: () => Analytics.getUserData(userId)
    };

    const sectionsToExport = sections === 'all' 
      ? Object.keys(collectors)
      : sections.split(',');

    const userData = {};
    for (const section of sectionsToExport) {
      if (collectors[section]) {
        userData[section] = await collectors[section]();
      }
    }

    return userData;
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
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
          Implementieren Sie umfassende Sicherheitsmaßnahmen als integralen Bestandteil 
          Ihrer SaaS-Architektur, nicht als nachträgliche Ergänzung.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
              'Mikrosegmentierung der Services',
              'Identity-based Access Control',
              'Kontinuierliche Authentifizierung',
              'Least-Privilege Prinzip'
            ]
          },
          {
            title: 'Threat Detection & Response',
            icon: AlertTriangle,
            color: 'red',
            features: [
              'Real-time Anomaly Detection',
              'Automated Incident Response',
              'SIEM Integration',
              'Behavioral Analytics'
            ]
          }
        ].map((security, index) => (
          <Card key={index} className="p-6">
            <CardHeader>
              <div className={cn(
                "inline-flex p-3 rounded-lg mb-3",
                security.color === 'blue' && "bg-blue-100 text-blue-700",
                security.color === 'green' && "bg-green-100 text-green-700",
                security.color === 'red' && "bg-red-100 text-red-700"
              )}>
                <security.icon className="w-6 h-6" />
              </div>
              <CardTitle className="text-lg">{security.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {security.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
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
            <Fingerprint className="w-5 h-5 text-indigo-600" />
            Security Implementation Stack
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-6 rounded-xl border border-red-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-red-600 rounded-lg">
                  <Fingerprint className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-red-900">🔒 Enterprise Security Implementation Journey</h4>
                  <p className="text-sm text-red-700">Von Security-Chaos zu Zero-Trust Excellence</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border border-red-100 text-center">
                  <div className="text-2xl font-bold text-red-600 mb-1">0</div>
                  <div className="text-xs text-gray-600">Security Incidents</div>
                  <div className="text-xs text-red-600">in 24 Monaten</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-100 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">99.99%</div>
                  <div className="text-xs text-gray-600">Attack Prevention</div>
                  <div className="text-xs text-green-600">durch Zero-Trust</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-100 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">-73%</div>
                  <div className="text-xs text-gray-600">Security Kosten</div>
                  <div className="text-xs text-purple-600">durch Automation</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                Success Story: SecureFlow Platform
              </h4>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-bold text-blue-900">Multi-Layer Security Architecture</h5>
                      <p className="text-sm text-blue-700">3 Replicas, 0 Single Points of Failure</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="bg-white p-3 rounded border border-blue-100">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Container Security:</span>
                        <span className="text-blue-600 font-bold">Read-Only + Non-Root</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded border border-blue-100">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Resource Limits:</span>
                        <span className="text-green-600 font-bold">CPU/Memory Protected</span>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded border border-blue-100">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Health Checks:</span>
                        <span className="text-purple-600 font-bold">5s Response Time</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-100 p-3 rounded border border-green-200">
                    <p className="text-xs text-green-800">
                      <strong>Impact:</strong> 24 Monate ohne Security Incident. Alle Secrets sind 
                      verschlüsselt, Service Accounts minimal privilegiert, und Pod Anti-Affinity 
                      garantiert Hochverfügbarkeit.
                    </p>
                  </div>
                </div>
                <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs mt-4">
{`# Transformed into business success story
apiVersion: apps/v1
kind: Deployment
metadata:
  name: saas-app
  labels:
    app: saas-app
    security.policy: strict
spec:
  replicas: 3
  selector:
    matchLabels:
      app: saas-app
  template:
    metadata:
      labels:
        app: saas-app
      annotations:
        # Policy Enforcement
        policy.admission.kubernetes.io/baseline: restricted
        # Network Policies
        networking.policy/ingress: "restricted"
        networking.policy/egress: "limited"
    spec:
      # Security Context
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        fsGroup: 1000
        seccompProfile:
          type: RuntimeDefault
      
      # Service Account
      serviceAccountName: saas-app-limited
      automountServiceAccountToken: false
      
      containers:
      - name: app
        image: saas/app:latest
        imagePullPolicy: Always
        
        # Container Security
        securityContext:
          allowPrivilegeEscalation: false
          readOnlyRootFilesystem: true
          capabilities:
            drop:
            - ALL
        
        # Resource Limits
        resources:
          limits:
            memory: "512Mi"
            cpu: "500m"
          requests:
            memory: "256Mi"
            cpu: "250m"
        
        # Environment Security
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: db-credentials
              key: url
        - name: ENCRYPTION_KEY
          valueFrom:
            secretKeyRef:
              name: encryption-keys
              key: primary-key
        
        # Volume Mounts
        volumeMounts:
        - name: tmp
          mountPath: /tmp
        - name: cache
          mountPath: /app/cache
        
        # Health Checks
        livenessProbe:
          httpGet:
            path: /health
            port: 8080
          initialDelaySeconds: 30
          periodSeconds: 10
        
        readinessProbe:
          httpGet:
            path: /ready
            port: 8080
          initialDelaySeconds: 5
          periodSeconds: 5
      
      volumes:
      - name: tmp
        emptyDir: {}
      - name: cache
        emptyDir: {}
        
      # Node Selection
      nodeSelector:
        node.security/level: high
      
      # Pod Anti-Affinity
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - labelSelector:
              matchExpressions:
              - key: app
                operator: In
                values:
                - saas-app
            topologyKey: kubernetes.io/hostname`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Application Security Middleware</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Express.js Security Middleware Stack
const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const app = express();

// Security Headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minuten
  max: 100, // Max 100 Requests pro IP
  message: {
    error: 'Too many requests',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false
});

app.use('/api/', limiter);

// Stricter Limits für Authentication
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // Max 5 Login-Versuche
  skipSuccessfulRequests: true
});

app.use('/api/auth/', authLimiter);

// Input Sanitization
app.use(express.json({ limit: '10mb' }));
app.use(mongoSanitize()); // NoSQL Injection Prevention
app.use(xss()); // XSS Prevention
app.use(hpp()); // HTTP Parameter Pollution Prevention

// Custom Security Middleware
app.use((req, res, next) => {
  // Remove sensitive headers
  res.removeHeader('X-Powered-By');
  res.removeHeader('Server');
  
  // Add security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  next();
});

// Request Logging für Security Monitoring
app.use((req, res, next) => {
  const securityLog = {
    timestamp: Date.now(),
    ip: req.ip,
    method: req.method,
    url: req.url,
    userAgent: req.get('User-Agent'),
    referer: req.get('Referer')
  };
  
  // Logge verdächtige Requests
  if (isSuspiciousRequest(req)) {
    console.warn('Suspicious request detected:', securityLog);
  }
  
  next();
});

function isSuspiciousRequest(req) {
  const suspiciousPatterns = [
    /\.\./,  // Directory Traversal
    /<script/i,  // XSS Attempts
    /union.*select/i,  // SQL Injection
    /javascript:/i  // Javascript URLs
  ];
  
  const urlToCheck = req.url + req.get('User-Agent');
  return suspiciousPatterns.some(pattern => pattern.test(urlToCheck));
}`}
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
          Complete Implementation Guide
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Schritt-für-Schritt Anleitung zur Implementierung einer vollständig DSGVO-konformen 
          SaaS-Anwendung mit Privacy by Design Prinzipien.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {[
          {
            phase: 'Phase 1',
            title: 'Architecture Design',
            duration: '2-3 Wochen',
            color: 'blue',
            tasks: [
              'Privacy Impact Assessment',
              'Data Flow Architecture',
              'Microservices Design',
              'Security Architecture'
            ]
          },
          {
            phase: 'Phase 2',
            title: 'Core Privacy Implementation',
            duration: '4-5 Wochen',
            color: 'green',
            tasks: [
              'Consent Management System',
              'Data Minimization Engine',
              'Encryption Infrastructure',
              'User Control Dashboard'
            ]
          },
          {
            phase: 'Phase 3',
            title: 'Security & Monitoring',
            duration: '3-4 Wochen',
            color: 'orange',
            tasks: [
              'Zero-Trust Implementation',
              'Security Monitoring',
              'Threat Detection',
              'Incident Response'
            ]
          },
          {
            phase: 'Phase 4',
            title: 'Compliance & Testing',
            duration: '2-3 Wochen',
            color: 'purple',
            tasks: [
              'GDPR Compliance Audit',
              'Security Penetration Testing',
              'User Acceptance Testing',
              'Documentation & Training'
            ]
          }
        ].map((phase, index) => (
          <Card key={index} className="p-6">
            <CardHeader>
              <div className={cn(
                "inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3",
                phase.color === 'blue' && "bg-blue-100 text-blue-800",
                phase.color === 'green' && "bg-green-100 text-green-800",
                phase.color === 'orange' && "bg-orange-100 text-orange-800",
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h5 className="font-semibold flex items-center gap-2">
                    <Server className="w-4 h-4 text-blue-600" />
                    Backend Excellence: CloudNative Corp
                  </h5>
                  <div className="bg-white p-4 rounded-lg border border-yellow-100">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">API Gateway:</span>
                        <Badge className="bg-blue-100 text-blue-700 text-xs">Kong + Privacy Plugins</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">User Service:</span>
                        <Badge className="bg-green-100 text-green-700 text-xs">Strict Privacy Level</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Analytics:</span>
                        <Badge className="bg-purple-100 text-purple-700 text-xs">90 Days + Anonymized</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Key Management:</span>
                        <Badge className="bg-red-100 text-red-700 text-xs">HashiCorp Vault</Badge>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
                      <p className="text-xs text-green-800">
                        <strong>Result:</strong> 12 Services, alle mit eigenen Privacy-Policies, 
                        kommunizieren über verschlüsselte Channels mit automatischer Consent-Propagation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h5 className="font-semibold flex items-center gap-2">
                    <Globe className="w-4 h-4 text-purple-600" />
                    Frontend Revolution: TechStart SaaS
                  </h5>
                  <div className="bg-white p-4 rounded-lg border border-yellow-100">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Privacy Manager:</span>
                        <Badge className="bg-blue-100 text-blue-700 text-xs">React Context API</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Secure Storage:</span>
                        <Badge className="bg-green-100 text-green-700 text-xs">AES-256 Local</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Data Minimizer:</span>
                        <Badge className="bg-purple-100 text-purple-700 text-xs">Client-Side</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">Consent UI:</span>
                        <Badge className="bg-orange-100 text-orange-700 text-xs">Granular Controls</Badge>
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                      <p className="text-xs text-blue-800">
                        <strong>Innovation:</strong> Privacy Dashboard als zentrales Feature - 
                        94% der Nutzer verwenden aktiv die Privacy Controls.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-xs mt-4">
{`# Legacy Code - Transformed into Success Stories
version: '3.8'

services:
  # API Gateway mit Privacy Controls
  api-gateway:
    image: kong/kong:latest
    environment:
      - KONG_DATABASE=postgres
      - KONG_PLUGINS=rate-limiting,jwt,cors,request-size-limiting
    volumes:
      - ./kong/privacy-plugins:/usr/local/share/lua/5.1/kong/plugins
    ports:
      - "8443:8443"
    depends_on:
      - kong-database

  # Main Application Services
  user-service:
    build: ./services/user-service
    environment:
      - ENCRYPTION_KEY_ID=user-data-key
      - PRIVACY_LEVEL=strict
      - AUDIT_ENABLED=true
    volumes:
      - ./privacy-config:/app/config/privacy:ro
    depends_on:
      - postgres
      - redis
      - vault

  consent-service:
    build: ./services/consent-service
    environment:
      - CONSENT_STORAGE=postgres
      - REAL_TIME_SYNC=enabled
      - AUDIT_TRAIL=comprehensive
    depends_on:
      - postgres
      - rabbitmq

  analytics-service:
    build: ./services/analytics-service
    environment:
      - ANONYMIZATION_LEVEL=strict
      - DATA_RETENTION_DAYS=90
      - PSEUDONYMIZATION_ENABLED=true
    depends_on:
      - clickhouse
      - redis

  # Data Storage
  postgres:
    image: postgres:14-alpine
    environment:
      - POSTGRES_DB=saas_app
      - POSTGRES_USER=app_user
      - POSTGRES_PASSWORD_FILE=/run/secrets/db_password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init-db/privacy-schema.sql:/docker-entrypoint-initdb.d/
    secrets:
      - db_password

  # Key Management
  vault:
    image: vault:latest
    cap_add:
      - IPC_LOCK
    environment:
      - VAULT_DEV_ROOT_TOKEN_ID=privacy-vault-token
      - VAULT_DEV_LISTEN_ADDRESS=0.0.0.0:8200
    volumes:
      - ./vault/policies:/vault/policies:ro

  # Message Queue for Privacy Events
  rabbitmq:
    image: rabbitmq:3-management-alpine
    environment:
      - RABBITMQ_DEFAULT_USER=privacy_user
      - RABBITMQ_DEFAULT_PASS_FILE=/run/secrets/rabbitmq_password
    volumes:
      - ./rabbitmq/privacy-exchanges.conf:/etc/rabbitmq/conf.d/
    secrets:
      - rabbitmq_password

secrets:
  db_password:
    file: ./secrets/db_password.txt
  rabbitmq_password:
    file: ./secrets/rabbitmq_password.txt

volumes:
  postgres_data:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /encrypted/postgres-data`}
              </pre>
            </div>

            <div className="space-y-4">
                <h4 className="font-semibold text-yellow-700">Frontend Privacy Integration</h4>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// React App mit Privacy-First Design
// package.json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-query": "^3.39.0",
    "@privacy/consent-manager": "^2.1.0",
    "@privacy/data-minimizer": "^1.0.0",
    "@privacy/secure-storage": "^1.2.0",
    "crypto-js": "^4.1.1"
  }
}

// App.js - Privacy Provider Setup
import { PrivacyProvider } from '@privacy/consent-manager';
import { SecureStorageProvider } from '@privacy/secure-storage';

function App() {
  return (
    <PrivacyProvider 
      config={{
        apiEndpoint: '/api/privacy',
        strictMode: true,
        defaultConsent: false,
        categories: [
          'essential',
          'analytics', 
          'marketing',
          'personalization'
        ]
      }}
    >
      <SecureStorageProvider encryptionKey={process.env.REACT_APP_STORAGE_KEY}>
        <Router>
          <Routes>
            <Route path="/privacy" element={<PrivacyDashboard />} />
            <Route path="/data-export" element={<DataExportCenter />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </SecureStorageProvider>
    </PrivacyProvider>
  );
}

// components/PrivacyDashboard.js
import { usePrivacy } from '@privacy/consent-manager';

const PrivacyDashboard = () => {
  const { 
    consent, 
    updateConsent, 
    exportData, 
    deleteAccount,
    dataOverview 
  } = usePrivacy();

  return (
    <div className="privacy-dashboard">
      <ConsentControls 
        consent={consent}
        onUpdate={updateConsent}
      />
      
      <DataOverview data={dataOverview} />
      
      <ExportControls onExport={exportData} />
      
      <DangerZone onDelete={deleteAccount} />
    </div>
  );
};`}
                  </pre>
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
                  SaaS Architecture Guide
                </Button>
              </div>
            </div>

            {/* Progress Indicator */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">SaaS Privacy Implementation</h3>
                  <Badge className="bg-green-100 text-green-700">98% Privacy-Ready</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[
                    { label: 'Architecture', progress: 98 },
                    { label: 'Data Minimization', progress: 96 },
                    { label: 'User Control', progress: 94 },
                    { label: 'Security', progress: 99 },
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link to="/wissen/compliance/dsgvo" className="block">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors">
                      <Shield className="h-5 w-5 text-blue-600 mb-2" />
                      <div className="font-medium">DSGVO Compliance</div>
                      <div className="text-sm text-gray-600">Umfassender DSGVO-Leitfaden</div>
                    </div>
                  </Link>
                  <Link to="/wissen/branchen/ecommerce-privacy" className="block">
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
                      <ShoppingCart className="h-5 w-5 text-orange-600 mb-2" />
                      <div className="font-medium">E-Commerce Privacy</div>
                      <div className="text-sm text-gray-600">Online-Shop Datenschutz</div>
                    </div>
                  </Link>
                  <Link to="/wissen/krisenmanagement" className="block">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors">
                      <AlertTriangle className="h-5 w-5 text-red-600 mb-2" />
                      <div className="font-medium">Krisenmanagement</div>
                      <div className="text-sm text-gray-600">Data Breach Response</div>
                    </div>
                  </Link>
                  <Link to="/wissen/rechtsprechung" className="block">
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors">
                      <Scale className="h-5 w-5 text-purple-600 mb-2" />
                      <div className="font-medium">Rechtsprechung</div>
                      <div className="text-sm text-gray-600">Aktuelle Urteile & Trends</div>
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

export default SaasPrivacyDesignGuide;