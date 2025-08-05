import React, { useState } from 'react';
import { Shield, Lock, Key, CreditCard, Globe, Database, AlertTriangle, CheckCircle, ArrowRight, Code, FileText, Users, TrendingUp, Layers, GitBranch, Server, Cloud, Zap, BookOpen, BarChart3 } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const FintechComplianceGuide = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'pci-dss', label: 'PCI DSS', icon: CreditCard },
    { id: 'open-banking', label: 'Open Banking Security', icon: Globe },
    { id: 'kyc-aml', label: 'KYC/AML Data', icon: Users },
    { id: 'crypto', label: 'Crypto Assets', icon: Database },
    { id: 'implementation', label: 'Implementation', icon: Code }
  ];

  const complianceFrameworks = [
    {
      name: 'PSD2 (Payment Services Directive 2)',
      category: 'Payment Services',
      requirements: [
        'Strong Customer Authentication (SCA)',
        'Secure Communication (TLS 1.2+)',
        'API Security Standards',
        'Transaction Monitoring'
      ],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'MiCA (Markets in Crypto-Assets)',
      category: 'Crypto Assets',
      requirements: [
        'Wallet Security Standards',
        'Private Key Management',
        'Transaction Transparency',
        'AML Compliance for Crypto'
      ],
      color: 'bg-indigo-50 border-indigo-200'
    },
    {
      name: 'DORA (Digital Operational Resilience Act)',
      category: 'Operational Resilience',
      requirements: [
        'ICT Risk Management',
        'Incident Reporting',
        'Digital Resilience Testing',
        'Third-party Risk Management'
      ],
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const securityGuidelines = [
    {
      category: 'Payment Processing',
      icon: CreditCard,
      guidelines: [
        'Tokenization für Kartendaten',
        'End-to-End Verschlüsselung',
        '3D Secure 2.0 Implementation',
        'PCI DSS Level 1 Compliance'
      ]
    },
    {
      category: 'API Security',
      icon: Globe,
      guidelines: [
        'OAuth 2.0 / OpenID Connect',
        'API Rate Limiting',
        'Certificate Pinning',
        'API Gateway Security'
      ]
    },
    {
      category: 'Data Protection',
      icon: Database,
      guidelines: [
        'Encryption at Rest & Transit',
        'Key Management Systems',
        'Data Minimization',
        'Secure Data Deletion'
      ]
    }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-600" />
          FinTech Compliance Excellence
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Implementieren Sie erstklassige Sicherheits- und Compliance-Standards für Ihre FinTech-Lösungen. 
          Von Payment Processing über Open Banking bis zu Crypto Assets - wir bieten umfassende Leitlinien 
          für regulatorische Anforderungen und Security-Best-Practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['99.9% Compliance Rate', 'PCI DSS Level 1', 'ISO 27001 zertifiziert'].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center border border-blue-200">
              <div className="text-2xl font-bold text-blue-600">{stat}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Compliance Frameworks</h4>
        <div className="space-y-4">
          {complianceFrameworks.map((framework, index) => (
            <div key={index} className={`rounded-lg p-6 border-2 ${framework.color}`}>
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h5 className="font-bold text-lg text-gray-900">{framework.name}</h5>
                  <p className="text-sm text-gray-600">{framework.category}</p>
                </div>
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {framework.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm text-gray-700">{req}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Security-First Development</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {securityGuidelines.map((guide, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <guide.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h5 className="font-bold text-gray-900">{guide.category}</h5>
              </div>
              <ul className="space-y-2">
                {guide.guidelines.map((guideline, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5" />
                    <span className="text-sm text-gray-700">{guideline}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderPCIDSS = () => (
    <div className="space-y-8">
      <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">PCI DSS Compliance</h3>
        <p className="text-gray-700 mb-6">
          Payment Card Industry Data Security Standard (PCI DSS) ist der wichtigste Standard für 
          die sichere Verarbeitung von Kreditkartendaten.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">💳 Praxis-Szenario: Online-Payment bei E-Commerce Startup</h4>
        <div className="space-y-6 p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
          <div className="text-center">
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              🚀 Startup-Challenge: Von 0 auf PCI DSS Level 1
            </h3>
            <p className="text-sm text-blue-700">
              Ein E-Commerce Startup verarbeitet plötzlich über 6 Millionen Transaktionen jährlich und muss 
              binnen 90 Tagen PCI DSS Level 1 Compliance erreichen, um nicht den Payment Processor zu verlieren.
            </p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Die Herausforderung
            </h4>
            <p className="text-sm text-amber-700">
              Kartendaten werden aktuell unverschlüsselt in der Hauptdatenbank gespeichert. 
              Ein Data Breach würde das Unternehmen vernichten und Millionen von Kunden gefährden.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-green-800 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Die 90-Tage-Transformation
            </h4>
            
            {[
              {
                week: 'Woche 1-2: Sofortmaßnahmen',
                title: '🛑 Schadensbegrenzung',
                description: 'Kartendaten werden nicht mehr in der Hauptdatenbank gespeichert',
                actions: [
                  'Tokenization-Service implementiert: Echte Kartennummern durch sichere Tokens ersetzt',
                  'Sofortige Segmentierung: Zahlungsverarbeitung in isolierte Umgebung verschoben',
                  'Notfall-Monitoring: Echtzeit-Alerts bei verdächtigen Datenzugriffen'
                ],
                result: 'Akutes Risiko eliminiert - keine Vollkartennummern mehr im Hauptsystem'
              },
              {
                week: 'Woche 3-6: Infrastruktur-Hardening',
                title: '🏰 Festung errichten',
                description: 'Aufbau einer PCI DSS-konformen Cardholder Data Environment (CDE)',
                actions: [
                  'Dedizierte Hardware: Isolierte Server nur für Zahlungsverarbeitung',
                  'Netzwerk-Segmentierung: Firewalls trennen CDE vom Rest der Infrastruktur',
                  'Verschlüsselung: Alle Daten at-rest und in-transit mit militärischen Standards'
                ],
                result: 'Sichere Zahlungsinfrastruktur - CDE vollständig isoliert und geschützt'
              },
              {
                week: 'Woche 7-10: Prozess-Optimierung',
                title: '🔄 Workflows perfektionieren',
                description: 'Automatisierung und Mitarbeiterschulung für dauerhafte Security',
                actions: [
                  'Zero-Touch-Processing: Mitarbeiter haben nie direkten Zugang zu Kartendaten',
                  'Automatische Compliance-Checks: System erkennt und verhindert Policy-Verstöße',
                  'Schulung aller Teams: Jeder Mitarbeiter versteht PCI DSS Grundlagen'
                ],
                result: 'Nachhaltige Sicherheitskultur - Compliance wird zum Autopilot'
              },
              {
                week: 'Woche 11-12: Zertifizierung',
                title: '🏆 Der finale Durchbruch',
                description: 'Erfolgreiche PCI DSS Assessment und Go-Live',
                actions: [
                  'QSA Assessment: Qualified Security Assessor bestätigt Level 1 Compliance',
                  'Penetration Testing: Externe Hacker finden keine Schwachstellen',
                  'Compliance-Zertifikat: Offizielle Bestätigung der PCI DSS Konformität'
                ],
                result: '🎉 Mission accomplished: PCI DSS Level 1 zertifiziert'
              }
            ].map((phase, phaseIndex) => (
              <div key={phaseIndex} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold text-blue-600">
                    {phaseIndex + 1}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-gray-600">{phase.week}</div>
                    <div className="font-bold text-gray-900">{phase.title}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{phase.description}</p>
                <div className="space-y-2 mb-3">
                  {phase.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                      <span>{action}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-green-50 p-2 rounded text-sm text-green-700 font-medium">
                  ✓ {phase.result}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Business Impact & ROI
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">$2.8M</div>
                <div className="text-sm text-green-700">Verhinderte Schadenssumme bei Data Breach</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">15%</div>
                <div className="text-sm text-green-700">Reduktion der Payment Processing Fees</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.99%</div>
                <div className="text-sm text-green-700">Payment Uptime nach Implementierung</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h4 className="text-xl font-bold text-gray-900 mb-6">🎯 3D Secure 2.0: Intelligente Fraud Prevention</h4>
        <div className="space-y-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
          <div className="text-center">
            <h3 className="text-lg font-bold text-purple-900 mb-2">
              🧠 Smart Authentication: 94% weniger Kaufabbrüche
            </h3>
            <p className="text-sm text-purple-700">
              Wie ein Online-Fashion-Retailer mit intelligenter 3DS 2.0 Implementierung 
              die Conversion Rate um 23% steigerte und gleichzeitig Betrug um 87% reduzierte.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-purple-800 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Der intelligente Authentifizierungsflow
            </h4>
            
            {[
              {
                step: 'Schritt 1: Risiko-Analyse in Echtzeit',
                icon: '🔍',
                description: 'Sofortige Bewertung jeder Transaktion',
                details: [
                  'Geräte-Fingerprinting: Wiederkehrende Kunden werden erkannt',
                  'Verhaltensanalyse: Normale vs. verdächtige Kaufmuster',
                  'Geo-Location: Plausibilitätsprüfung der Kaufort',
                  'ML-Algorithmen: 200+ Risikofaktoren in 50ms analysiert'
                ],
                outcome: 'Risiko-Score: 0-100 (niedrig bis hoch)'
              },
              {
                step: 'Schritt 2: Adaptive Authentifizierung',
                icon: '⚙️',
                description: 'Maßgeschneiderte User Experience je nach Risiko',
                details: [
                  'Niedriges Risiko (0-30): Frictionless - keine Unterbrechung',
                  'Mittleres Risiko (31-70): Soft Challenge - SMS oder App-Push',
                  'Hohes Risiko (71-100): Strong Challenge - Biometrie oder komplexe Verifizierung',
                  'Bekannte Geräte: Vereinfachte Authentifizierung für Stammkunden'
                ],
                outcome: 'Optimale Balance zwischen Sicherheit und User Experience'
              },
              {
                step: 'Schritt 3: Nahtlose Integration',
                icon: '🔗',
                description: 'Unsichtbare Sicherheit für den Endkunden',
                details: [
                  'Single-Click für 73% aller Transaktionen (Frictionless)',
                  'Mobile-first: Biometrische Authentifizierung auf Smartphones',
                  'Fallback-Strategien: Alternative Methoden bei technischen Problemen',
                  'Real-time Feedback: Sofortige Bestätigung für Kunden'
                ],
                outcome: 'Kaufprozess wird beschleunigt statt verlangsamt'
              }
            ].map((step, stepIndex) => (
              <div key={stepIndex} className="bg-white p-4 rounded-lg border border-purple-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">{step.icon}</div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 mb-1">{step.step}</div>
                    <div className="text-sm text-gray-600 mb-3">{step.description}</div>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-50 p-2 rounded text-sm text-purple-700 font-medium">
                  ✓ {step.outcome}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Messbare Erfolge nach 6 Monaten
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">-87%</div>
                <div className="text-sm text-green-700">Fraud Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">+23%</div>
                <div className="text-sm text-green-700">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">73%</div>
                <div className="text-sm text-green-700">Frictionless Auth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">1.2s</div>
                <div className="text-sm text-green-700">Avg. Auth Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h5 className="font-bold text-lg text-gray-900 mb-4">PCI DSS Requirements</h5>
          <ul className="space-y-3">
            {[
              'Firewall-Konfiguration zum Schutz von Kartendaten',
              'Keine Vendor-Standardpasswörter',
              'Verschlüsselung gespeicherter Kartendaten',
              'Verschlüsselung bei Übertragung',
              'Antivirensoftware und Updates',
              'Sichere Systeme und Anwendungen'
            ].map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-blue-600 mt-0.5" />
                <span className="text-gray-700">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h5 className="font-bold text-lg text-gray-900 mb-4">Network Segmentation</h5>
          <div className="bg-gray-100 rounded-lg p-4">
            <img src="/api/placeholder/400/300" alt="Network Segmentation Diagram" className="w-full rounded" />
          </div>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-sm">CDE (Cardholder Data Environment)</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="text-sm">DMZ</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm">Trusted Network</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderOpenBanking = () => (
    <div className="space-y-8">
      <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Open Banking Security</h3>
        <p className="text-gray-700 mb-6">
          Sichere API-Integration für Open Banking gemäß PSD2-Richtlinien mit starker 
          Kundenauthentifizierung und sicherer Kommunikation.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">🏦 Praxis-Szenario: FinTech Bank API Integration</h4>
        <div className="space-y-6 p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border border-indigo-200">
          <div className="text-center">
            <h3 className="text-lg font-bold text-indigo-900 mb-2">
              🔗 PSD2-konforme Multi-Bank Integration in 30 Tagen
            </h3>
            <p className="text-sm text-indigo-700">
              Ein FinTech-Startup muss 47 europäische Banken über Open Banking APIs anbinden, 
              um Kunden eine einheitliche Kontoverwaltung zu bieten - mit höchsten Sicherheitsstandards.
            </p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Die Komplexität
            </h4>
            <p className="text-sm text-amber-700">
              Jede Bank hat unterschiedliche API-Standards, Sicherheitsanforderungen und Zertifikate. 
              Ein einziger Fehler kann zur Sperrung des Zugangs oder zu regulatorischen Problemen führen.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-indigo-800 flex items-center gap-2">
              <Globe className="h-4 w-4" />
              Die elegante Lösung: Unified Security Layer
            </h4>
            
            {[
              {
                layer: 'Layer 1: Zertifikat-Management',
                icon: '🛡️',
                description: 'Automatisierte Verwaltung von 94 verschiedenen Zertifikaten',
                challenge: 'Jede Bank benötigt spezielle QWAC und QSEAL Zertifikate',
                solution: [
                  'Centralized Certificate Store: Ein Vault für alle 94 Zertifikate',
                  'Auto-Renewal: 90 Tage vor Ablauf automatische Verlängerung',
                  'Health Monitoring: Tägliche Überprüfung aller Zertifikatsstatus',
                'Fallback-Strategien: Backup-Zertifikate für kritische Verbindungen'
                ],
                result: '99.97% API Verfügbarkeit trotz komplexer Zertifikat-Landschaft'
              },
              {
                layer: 'Layer 2: Strong Customer Authentication',
                icon: '🔐',
                description: 'Intelligente SCA-Implementierung für optimale User Experience',
                challenge: 'Balance zwischen Sicherheit und Benutzerfreundlichkeit',
                solution: [
                  'Multi-Modal Auth: Biometrie, SMS, App-Push je nach Kontext',
                  'Risk-Based Decisions: Häufige Operationen brauchen weniger Auth',
                  'Device Binding: Bekannte Geräte erhalten vereinfachten Zugang',
                  'Seamless Fallbacks: Alternative Methoden bei tech. Problemen'
                ],
                result: '89% der Transaktionen benötigen nur einen Auth-Faktor'
              },
              {
                layer: 'Layer 3: API Orchestration',
                icon: '⚙️',
                description: 'Einheitliche Schnittstelle für 47 verschiedene Bank-APIs',
                challenge: 'Jede Bank hat unterschiedliche Datenstrukturen und Workflows',
                solution: [
                  'Smart Mapping: Automatische Übersetzung zwischen API-Formaten',
                  'Error Handling: Intelligente Retry-Logik für jede Bank',
                  'Rate Limiting: Optimierte Anfrage-Verteilung pro Bank',
                  'Real-time Monitoring: Sofortige Erkennung von API-Änderungen'
                ],
                result: 'Eine einzige API für Kunden - 47 Bank-APIs im Hintergrund'
              },
              {
                layer: 'Layer 4: Compliance Automation',
                icon: '📊',
                description: 'Automatische Einhaltung aller PSD2 und GDPR Anforderungen',
                challenge: 'Kontinuierliche Überwachung und Dokumentation der Compliance',
                solution: [
                  'Audit Trail: Lückenlose Protokollierung aller API-Interaktionen',
                  'Consent Management: Automatische Verwaltung aller Einwilligungen',
                  'Data Minimization: Nur notwendige Daten werden angefragt',
                  'Regulatory Reporting: Automatische Berichte für Aufsichtsbehörden'
                ],
                result: '100% Compliance ohne manuellen Aufwand'
              }
            ].map((layer, layerIndex) => (
              <div key={layerIndex} className="bg-white p-4 rounded-lg border border-indigo-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">{layer.icon}</div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 mb-1">{layer.layer}</div>
                    <div className="text-sm text-gray-600 mb-2">{layer.description}</div>
                    <div className="text-xs text-red-600 bg-red-50 p-2 rounded mb-2">
                      <strong>Challenge:</strong> {layer.challenge}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  {layer.solution.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                      <span>{solution}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-50 p-2 rounded text-sm text-indigo-700 font-medium">
                  ✓ {layer.result}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Transformation in Zahlen
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">47</div>
                <div className="text-sm text-green-700">Connected Banks</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.97%</div>
                <div className="text-sm text-green-700">API Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">89%</div>
                <div className="text-sm text-green-700">Single-Factor Auth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">30 Tage</div>
                <div className="text-sm text-green-700">Integration Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <h5 className="font-bold text-lg text-gray-900 mb-4">API Security Standards</h5>
          <div className="space-y-4">
            {[
              {
                title: 'OAuth 2.0 + FAPI',
                description: 'Financial-grade API Security Profile',
                requirements: ['PKCE', 'PAR', 'RAR', 'JARM']
              },
              {
                title: 'mTLS',
                description: 'Mutual TLS Authentication',
                requirements: ['QWAC Certificate', 'Certificate Pinning', 'OCSP Stapling']
              },
              {
                title: 'JWS/JWE',
                description: 'Message-level Security',
                requirements: ['Request Signing', 'Response Encryption', 'Non-Repudiation']
              }
            ].map((standard, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <h6 className="font-bold text-gray-900">{standard.title}</h6>
                <p className="text-sm text-gray-600 mb-2">{standard.description}</p>
                <ul className="space-y-1">
                  {standard.requirements.map((req, idx) => (
                    <li key={idx} className="text-sm text-gray-700 flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h5 className="font-bold text-lg text-gray-900 mb-4">📋 Smart Consent Management</h5>
          <div className="space-y-4 p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border border-green-200">
            <div className="text-center">
              <h3 className="text-md font-bold text-green-900 mb-2">
                🧠 Intelligente Einwilligungsverwaltung
              </h3>
              <p className="text-sm text-green-700">
                Automatisierte Verwaltung von Kundenerläubnissen mit KI-gestützter Optimierung
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-900 text-sm mb-2">
                  📅 Dynamische Laufzeiten
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  KI analysiert Nutzungsverhalten und schlägt optimale Consent-Dauer vor
                </div>
                <div className="text-xs text-green-600 font-medium">
                  +34% längere Consent-Perioden durch bessere UX
                </div>
              </div>
              
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-900 text-sm mb-2">
                  🔄 Auto-Renewal
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  Proaktive Erneuerung vor Ablauf mit benutzerfreundlichen Benachrichtigungen
                </div>
                <div className="text-xs text-green-600 font-medium">
                  87% Renewal-Rate durch rechtzeitige Kommunikation
                </div>
              </div>
              
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-900 text-sm mb-2">
                  📊 Granulare Kontrolle
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  Kunden wählen spezifische Berechtigungen statt "Alles-oder-Nichts"
                </div>
                <div className="text-xs text-green-600 font-medium">
                  92% Zufriedenheit durch individuelle Anpassung
                </div>
              </div>
              
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-900 text-sm mb-2">
                  🛡️ Compliance-Check
                </div>
                <div className="text-xs text-gray-600 mb-2">
                  Automatische Überprüfung aller Consents auf regulatorische Konformität
                </div>
                <div className="text-xs text-green-600 font-medium">
                  100% Compliance durch automatisierte Validierung
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderKYCAML = () => (
    <div className="space-y-8">
      <div className="bg-purple-50 rounded-xl p-8 border border-purple-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">KYC/AML Data Protection</h3>
        <p className="text-gray-700 mb-6">
          Sichere Verarbeitung und Speicherung von KYC/AML-Daten unter Einhaltung von 
          Datenschutzbestimmungen und regulatorischen Anforderungen.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">🔍 Praxis-Szenario: KYC-Revolution bei Neo-Bank</h4>
        <div className="space-y-6 p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl border border-purple-200">
          <div className="text-center">
            <h3 className="text-lg font-bold text-purple-900 mb-2">
              🏦 Privacy-First KYC: 90% weniger Datensammlung, 100% Compliance
            </h3>
            <p className="text-sm text-purple-700">
              Eine Neo-Bank implementiert revolutionary Privacy-Preserving KYC und reduziert 
              Datenspeicherung um 90% bei gleichzeitiger Erhöhung der Compliance-Rate auf 99.8%.
            </p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Das Problem
            </h4>
            <p className="text-sm text-amber-700">
              Traditionelle KYC sammelt massive Datenmengen, schafft Datenschutzrisiken und führt zu 
              15-20% Kundenabbruch während der langwierigen Verifizierung.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-purple-800 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Die Privacy-First Transformation
            </h4>
            
            {[
              {
                phase: 'Phase 1: Smart Data Minimization',
                icon: '🧪',
                description: 'Nur sammeln was wirklich nötig ist - mit KI-Unterstützung',
                innovations: [
                  'Risiko-basierte Datenerfassung: Niedriges Risiko = minimale Daten',
                  'Progressive Verifizierung: Stufen-KYC statt Alles-auf-einmal',
                  'Dokumenten-KI: Automatische Extraktion nur relevanter Informationen',
                  'Anonymisierung in Echtzeit: PII sofort nach Verarbeitung pseudonymisiert'
                ],
                result: '85% weniger gespeicherte personenbezogene Daten',
                metrics: { reduction: '85%', time: '3 Min', satisfaction: '94%' }
              },
              {
                phase: 'Phase 2: Zero-Knowledge Verification',
                icon: '🔐',
                description: 'Identitätsprüfung ohne Preisgabe sensibler Daten',
                innovations: [
                  'Homomorphic Encryption: Berechnungen auf verschlüsselten Daten',
                  'Zero-Knowledge Proofs: Alter bestätigen ohne Geburtsdatum zu zeigen',
                  'Secure Multi-Party Computation: Sanctions-Check ohne Datenaustausch',
                  'Biometrische Hashes: Gesichtserkennung ohne Gesichtsspeicherung'
                ],
                result: 'Vollständige Identitätsprüfung mit minimaler Datenspeicherung',
                metrics: { privacy: '99%', accuracy: '97.8%', speed: '45s' }
              },
              {
                phase: 'Phase 3: Intelligente Risikobewertung',
                icon: '🤖',
                description: 'KI erkennt verdachtige Muster ohne individuelle Profilerstellung',
                innovations: [
                  'Federated Learning: ML-Modelle lernen ohne zentrale Datenspeicherung',
                  'Differential Privacy: Statistische Analysen ohne Einzelperson-Identifikation',
                  'Behavioral Analytics: Muster erkennen ohne Nutzerverhalten zu speichern',
                  'Real-time Anomaly Detection: Sofortige Erkennung ohne Datensammlung'
                ],
                result: 'Höhere Erkennungsrate bei niedrigerem Datenschutzrisiko',
                metrics: { detection: '+34%', falsePositives: '-67%', privacy: '100%' }
              },
              {
                phase: 'Phase 4: Adaptive Compliance',
                icon: '📈',
                description: 'Selbstlernende Compliance-Engine passt sich an Regulatorik an',
                innovations: [
                  'Regulatory Mapping: Automatische Anpassung an lokale Gesetze',
                  'Audit Automation: Kontinuierliche Selbstüberprüfung und -dokumentation',
                  'Proactive Alerts: Frühwarnsystem für neue regulatorische Anforderungen',
                  'Evidence Generation: Automatische Compliance-Nachweise für Behörden'
                ],
                result: 'Immer aktuelle Compliance ohne manuellen Aufwand',
                metrics: { automation: '96%', auditTime: '-89%', compliance: '99.8%' }
              }
            ].map((phase, phaseIndex) => (
              <div key={phaseIndex} className="bg-white p-4 rounded-lg border border-purple-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">{phase.icon}</div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 mb-1">{phase.phase}</div>
                    <div className="text-sm text-gray-600 mb-3">{phase.description}</div>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  {phase.innovations.map((innovation, innovationIndex) => (
                    <div key={innovationIndex} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{innovation}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-50 p-3 rounded mb-3">
                  <div className="text-sm text-purple-700 font-medium mb-2">
                    ✓ {phase.result}
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(phase.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-purple-600">{value}</div>
                        <div className="text-xs text-purple-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Revolution in Zahlen: Nach 12 Monaten
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">-90%</div>
                <div className="text-sm text-green-700">Datenspeicherung</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">+73%</div>
                <div className="text-sm text-green-700">Conversion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.8%</div>
                <div className="text-sm text-green-700">Compliance Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">3 Min</div>
                <div className="text-sm text-green-700">Avg. KYC Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h4 className="text-xl font-bold text-gray-900 mb-6">🎯 AML Transaction Monitoring: KI erkennt was Menschen übersehen</h4>
        <div className="space-y-6 p-6 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border border-red-200">
          <div className="text-center">
            <h3 className="text-lg font-bold text-red-900 mb-2">
              🚨 Real-time Fraud Detection: 99.7% Accuracy bei 0.1% False Positives
            </h3>
            <p className="text-sm text-red-700">
              Intelligente Transaction Monitoring Engine erkennt Geldwäsche-Muster in Echtzeit 
              und reduziert manuelle Prüfungen um 94%.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h5 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Privacy-First Detection
              </h5>
              <div className="space-y-3">
                <div className="border-l-4 border-red-500 pl-3">
                  <div className="font-medium text-sm">Zero-Knowledge Analysis</div>
                  <div className="text-xs text-gray-600">Muster erkennen ohne Einzeldaten zu sehen</div>
                </div>
                <div className="border-l-4 border-red-400 pl-3">
                  <div className="font-medium text-sm">Federated Learning</div>
                  <div className="text-xs text-gray-600">Branchenweites Lernen ohne Datenaustausch</div>
                </div>
                <div className="border-l-4 border-red-300 pl-3">
                  <div className="font-medium text-sm">Differential Privacy</div>
                  <div className="text-xs text-gray-600">Statistische Erkenntnisse ohne Risiko</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h5 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Smart Risk Scoring
              </h5>
              <div className="space-y-3">
                {[
                  { risk: 'High Risk', score: '85-100', color: 'text-red-600', action: 'Immediate Review' },
                  { risk: 'Medium Risk', score: '50-84', color: 'text-yellow-600', action: 'Enhanced Monitoring' },
                  { risk: 'Low Risk', score: '0-49', color: 'text-green-600', action: 'Standard Processing' }
                ].map((level, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className={`font-bold ${level.color}`}>{level.risk}</div>
                    <div className="text-xs text-gray-500">{level.score}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h5 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Automation Status
              </h5>
              <div className="space-y-3">
                {[
                  { feature: 'Sanctions Screening', status: '99.9%', uptime: 'Active' },
                  { feature: 'PEP Monitoring', status: '99.7%', uptime: 'Active' },
                  { feature: 'Pattern Detection', status: '99.8%', uptime: 'Active' },
                  { feature: 'SAR Generation', status: 'Auto', uptime: 'Active' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700">{item.feature}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{item.status}</span>
                      <span className="text-green-600 font-bold text-xs">{item.uptime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Performance Metriken: Revolution der AML-Compliance
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99.7%</div>
                <div className="text-sm text-blue-700">Detection Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">0.1%</div>
                <div className="text-sm text-blue-700">False Positives</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">-94%</div>
                <div className="text-sm text-blue-700">Manual Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">15ms</div>
                <div className="text-sm text-blue-700">Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCrypto = () => (
    <div className="space-y-8">
      <div className="bg-indigo-50 rounded-xl p-8 border border-indigo-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Crypto Asset Security</h3>
        <p className="text-gray-700 mb-6">
          Implementierung von Best Practices für die sichere Verwaltung von Kryptowährungen 
          und digitalen Assets gemäß MiCA-Regularien.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">🪙 Praxis-Szenario: Crypto Exchange Launch</h4>
        <div className="space-y-6 p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200">
          <div className="text-center">
            <h3 className="text-lg font-bold text-indigo-900 mb-2">
              🚀 MiCA-Ready: Von 0 auf Crypto Exchange in 6 Monaten
            </h3>
            <p className="text-sm text-indigo-700">
              Ein FinTech startet eine MiCA-konforme Kryptowährungs-Exchange mit institutioneller 
              Sicherheit und verwaltet nach 12 Monaten Assets im Wert von 500M EUR ohne Sicherheitsvorfalle.
            </p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Die Herausforderung
            </h4>
            <p className="text-sm text-amber-700">
              98% aller Crypto-Verluste entstehen durch Sicherheitslücken, schlechtes Key Management 
              oder unzureichende MiCA-Compliance. Ein Fehler kann Millionen kosten und das Vertrauen zerstören.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-indigo-800 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Die Fort Knox-Strategie für Crypto Assets
            </h4>
            
            {[
              {
                layer: 'Layer 1: Unbreakable Wallet Architecture',
                icon: '🏰',
                description: 'Multi-Signature Cold Storage mit Hardware-Security-Modules',
                challenge: 'Private Keys sind der wertvollste und gefährdetste Asset',
                approach: [
                  'Air-Gapped Key Generation: Private Keys nie online erstellt oder gespeichert',
                  '2-of-3 Multi-Sig: Drei Hardware-Wallets, zwei für Transaktionen erforderlich',
                  'Geographische Verteilung: Keys in verschiedenen Hochsicherheitstresoren',
                  'Quantum-Resistant Backup: Zukünftige Sicherheit bereits heute implementiert'
                ],
                result: 'Selbst bei Kompromittierung von 50% der Infrastruktur bleiben Assets sicher',
                metrics: { security: '99.999%', recovery: '15 Min', locations: '3 Countries' }
              },
              {
                layer: 'Layer 2: Intelligent Transaction Screening',
                icon: '🧪',
                description: 'KI-powered AML für Blockchain-Transaktionen',
                challenge: 'Compliance bei pseudonymen Blockchain-Transaktionen',
                approach: [
                  'Address Intelligence: Risiko-Scoring für 50M+ Wallet-Adressen',
                  'Transaction Graph Analysis: Geldfluss-Verfolgung über mehrere Hops',
                  'Real-time Sanctions Screening: Sofortige Erkennung gelisteter Adressen',
                  'Privacy-Coin Monitoring: Spezielle Überwachung für Monero, Zcash etc.'
                ],
                result: '99.9% Accuracy bei Compliance-Screening ohne False Positives',
                metrics: { detection: '99.9%', speed: '50ms', coverage: '15 Blockchains' }
              },
              {
                layer: 'Layer 3: MiCA-Compliance Automation',
                icon: '🏡',
                description: 'Vollautomatische Einhaltung aller MiCA-Anforderungen',
                challenge: 'Komplexe und sich ändernde Regularien in 27 EU-Ländern',
                approach: [
                  'Dynamic Compliance Engine: Automatische Anpassung an neue Regularien',
                  'Real-time Risk Assessment: Kontinuierliche Bewertung aller Asset-Klassen',
                  'Automated Reporting: Tägliche Berichte an alle relevanten Behörden',
                  'Customer Due Diligence: KI-gestütztes Enhanced KYC für Crypto'
                ],
                result: 'Vollständige MiCA-Compliance ohne manuellen Compliance-Aufwand',
                metrics: { automation: '98%', reporting: 'Real-time', jurisdictions: '27 EU' }
              },
              {
                layer: 'Layer 4: Institutional-Grade Operations',
                icon: '🏦',
                description: 'Banken-ähnliche Sicherheits- und Betriebsstandards',
                challenge: 'Crypto-Volatiliät mit institutioneller Zuverlässigkeit verbinden',
                approach: [
                  '24/7 SOC: Dedicated Security Operations Center mit Crypto-Spezialisten',
                  'Disaster Recovery: 15-Sekunden Failover zwischen Rechenzentren',
                  'Insurance Coverage: 100% Asset-Versicherung durch Lloyd\'s of London',
                  'Regulatory Liaison: Direkter Draht zu BaFin und anderen Aufsichtsbehörden'
                ],
                result: 'Banken-ähnliche Sicherheit und Verfügbarkeit für Crypto Assets',
                metrics: { uptime: '99.99%', insurance: '100%', response: '15s' }
              }
            ].map((layer, layerIndex) => (
              <div key={layerIndex} className="bg-white p-4 rounded-lg border border-indigo-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">{layer.icon}</div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 mb-1">{layer.layer}</div>
                    <div className="text-sm text-gray-600 mb-2">{layer.description}</div>
                    <div className="text-xs text-red-600 bg-red-50 p-2 rounded mb-2">
                      <strong>Challenge:</strong> {layer.challenge}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  {layer.approach.map((approach, approachIndex) => (
                    <div key={approachIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                      <span>{approach}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-indigo-50 p-3 rounded mb-3">
                  <div className="text-sm text-indigo-700 font-medium mb-2">
                    ✓ {layer.result}
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(layer.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-indigo-600">{value}</div>
                        <div className="text-xs text-indigo-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Mission Accomplished: Nach 12 Monaten
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500M EUR</div>
                <div className="text-sm text-green-700">Assets under Management</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">0</div>
                <div className="text-sm text-green-700">Security Incidents</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.99%</div>
                <div className="text-sm text-green-700">Platform Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">100%</div>
                <div className="text-sm text-green-700">MiCA Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h4 className="text-xl font-bold text-gray-900 mb-6">🔍 Travel Rule & Blockchain Compliance</h4>
        <div className="space-y-6 p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
          <div className="text-center">
            <h3 className="text-lg font-bold text-yellow-900 mb-2">
              🌍 Globale Compliance: Travel Rule für 40+ Länder automatisiert
            </h3>
            <p className="text-sm text-yellow-700">
              Automatische Einhaltung der Travel Rule (FATF) für grenzüberschreitende 
              Crypto-Transaktionen über 1.000 EUR mit 99.9% Accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 border border-yellow-200">
              <h5 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                <Globe className="h-4 w-4" />
                Intelligente Adress-Identifikation
              </h5>
              <div className="space-y-3">
                <div className="border-l-4 border-yellow-500 pl-3">
                  <div className="font-medium text-sm">VASP-Erkennung</div>
                  <div className="text-xs text-gray-600">97% aller Exchange-Adressen identifiziert</div>
                </div>
                <div className="border-l-4 border-yellow-400 pl-3">
                  <div className="font-medium text-sm">Jurisdiktions-Mapping</div>
                  <div className="text-xs text-gray-600">Automatische Länder-Zuordnung für Compliance</div>
                </div>
                <div className="border-l-4 border-yellow-300 pl-3">
                  <div className="font-medium text-sm">Risk-Scoring</div>
                  <div className="text-xs text-gray-600">Echtzeit-Bewertung aller Counterparties</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-orange-200">
              <h5 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Automatische Datensammlung
              </h5>
              <div className="space-y-3">
                <div className="border-l-4 border-orange-500 pl-3">
                  <div className="font-medium text-sm">KYC-Integration</div>
                  <div className="text-xs text-gray-600">Automatische Sender/Empfänger-Daten</div>
                </div>
                <div className="border-l-4 border-orange-400 pl-3">
                  <div className="font-medium text-sm">Message Standards</div>
                  <div className="text-xs text-gray-600">SWIFT, TRP, OpenVASP Kompatibilität</div>
                </div>
                <div className="border-l-4 border-orange-300 pl-3">
                  <div className="font-medium text-sm">Encrypted Transfer</div>
                  <div className="text-xs text-gray-600">Ende-zu-Ende verschlüsselte Übertragung</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Travel Rule Performance: Branchenführende Automation
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-blue-700">Compliance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">40+</div>
                <div className="text-sm text-blue-700">Jurisdictions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">2.3s</div>
                <div className="text-sm text-blue-700">Avg. Processing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-blue-700">Automated</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h5 className="font-bold text-lg text-gray-900 mb-4">MiCA Compliance Checklist</h5>
          <ul className="space-y-3">
            {[
              'Whitepaper-Anforderungen erfüllt',
              'Reserve Asset Management implementiert',
              'Marktmissbrauchsüberwachung aktiv',
              'Kundenvermögensschutz gewährleistet',
              'Governance-Struktur dokumentiert',
              'Risikomanagement-Framework etabliert'
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 border border-gray-200">
          <h5 className="font-bold text-lg text-gray-900 mb-4">Crypto Security Best Practices</h5>
          <div className="space-y-4">
            <div className="border-l-4 border-indigo-500 pl-4">
              <h6 className="font-bold text-gray-900">Key Management</h6>
              <p className="text-sm text-gray-600">
                Multi-sig, HSM Integration, Cold Storage
              </p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h6 className="font-bold text-gray-900">Transaction Security</h6>
              <p className="text-sm text-gray-600">
                Whitelisting, Time-locks, Multi-approval
              </p>
            </div>
            <div className="border-l-4 border-indigo-500 pl-4">
              <h6 className="font-bold text-gray-900">Audit & Monitoring</h6>
              <p className="text-sm text-gray-600">
                Real-time monitoring, Anomaly detection
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderImplementation = () => (
    <div className="space-y-8">
      <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Guide</h3>
        <p className="text-gray-700 mb-6">
          Schritt-für-Schritt Anleitung zur Implementierung einer sicheren und 
          compliance-konformen FinTech-Architektur.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">🏢 Praxis-Szenario: Enterprise FinTech Transformation</h4>
        <div className="space-y-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
          <div className="text-center">
            <h3 className="text-lg font-bold text-blue-900 mb-2">
              🚀 Zero-to-Hero: Von Legacy Banking zu FinTech Leader in 18 Monaten
            </h3>
            <p className="text-sm text-blue-700">
              Eine traditionelle Bank transformiert ihre gesamte IT-Infrastruktur zu einer 
              cloud-nativen, API-first FinTech-Plattform mit höchsten Sicherheits- und Compliance-Standards.
            </p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Die Ausgangslage
            </h4>
            <p className="text-sm text-amber-700">
              35 Jahre alte Mainframe-Systeme, monolithische Architektur, 3-Wochen Deployment-Zyklen 
              und Compliance-Prüfungen die 6 Monate dauern. Kunden wandern zu Neobanken ab.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold text-blue-800 flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Die 4-Layer Security-First Transformation
            </h4>
            
            {[
              {
                layer: 'Layer 1: Cloud-Native Foundation',
                icon: '☁️',
                timeline: 'Monate 1-4',
                description: 'Aufbau einer sicheren, skalierbaren Cloud-Infrastruktur',
                challenges: 'Legacy-Integration ohne Betriebsunterbrechung',
                solutions: [
                  'Hybrid Cloud Setup: Schrittweise Migration ohne Downtime',
                  'Infrastructure as Code: 100% automatisierte, wiederholbare Deployments',
                  'Zero Trust Network: Jede Verbindung wird verifiziert und verschlüsselt',
                  'Multi-Region Setup: Disaster Recovery und 99.99% SLA'
                ],
                outcome: 'Moderne Infrastruktur bereit für FinTech-Services',
                metrics: { uptime: '99.99%', deployTime: '-95%', costs: '-40%' }
              },
              {
                layer: 'Layer 2: API-First Architecture',
                icon: '🔗',
                timeline: 'Monate 5-8',
                description: 'Microservices mit Banking-grade Security und Performance',
                challenges: 'Granulare Services ohne Komplexitäts-Explosion',
                solutions: [
                  'Domain-Driven Design: Fachlich abgeschnittene, autonome Services',
                  'API Gateway: Zentrale Sicherheit, Rate Limiting und Monitoring',
                  'Service Mesh: Sichere Inter-Service Kommunikation',
                  'Event-Driven Architecture: Lose gekoppelte, resiliente Services'
                ],
                outcome: 'Flexible, skalierbare Service-Landschaft',
                metrics: { services: '47', responseTime: '< 100ms', availability: '99.9%' }
              },
              {
                layer: 'Layer 3: Compliance Automation',
                icon: '📈',
                timeline: 'Monate 9-12',
                description: 'Vollständig automatisierte Compliance für alle Regularien',
                challenges: 'Kontinuierliche Compliance ohne manuelle Prozesse',
                solutions: [
                  'Policy as Code: Alle Compliance-Regeln in versioniertem Code',
                  'Continuous Compliance: Automatische Prüfung bei jedem Deployment',
                  'Real-time Monitoring: Sofortige Erkennung von Compliance-Verstößen',
                  'Automated Reporting: Tägliche Berichte an alle Aufsichtsbehörden'
                ],
                outcome: 'Selbstüberwachende, immer konforme Plattform',
                metrics: { automation: '94%', auditTime: '-87%', violations: '0' }
              },
              {
                layer: 'Layer 4: Advanced Security & AI',
                icon: '🤖',
                timeline: 'Monate 13-18',
                description: 'KI-gestützte Sicherheit und Fraud Prevention',
                challenges: 'Proaktive Bedrohungserkennung ohne False Positives',
                solutions: [
                  'ML-Fraud Detection: 99.7% Accuracy bei 0.1% False Positive Rate',
                  'Behavioral Analytics: Anomalie-Erkennung für User und System-Verhalten',
                  'Threat Intelligence: Integration globaler Bedrohungsdaten',
                  'Automated Response: Selbstheilende Systeme mit Incident Automation'
                ],
                outcome: 'Predictive Security mit minimalen manuellen Eingriffen',
                metrics: { detection: '99.7%', responseTime: '< 5s', automation: '89%' }
              }
            ].map((layer, layerIndex) => (
              <div key={layerIndex} className="bg-white p-4 rounded-lg border border-blue-200">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">{layer.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="font-bold text-gray-900">{layer.layer}</div>
                      <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{layer.timeline}</div>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">{layer.description}</div>
                    <div className="text-xs text-red-600 bg-red-50 p-2 rounded mb-3">
                      <strong>Challenge:</strong> {layer.challenges}
                    </div>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  {layer.solutions.map((solution, solutionIndex) => (
                    <div key={solutionIndex} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                      <span>{solution}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 p-3 rounded mb-3">
                  <div className="text-sm text-blue-700 font-medium mb-2">
                    ✓ {layer.outcome}
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {Object.entries(layer.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-blue-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Transformation erfolgreich: Die Zahlen nach 18 Monaten
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">-73%</div>
                <div className="text-sm text-green-700">Time to Market</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">+245%</div>
                <div className="text-sm text-green-700">API Requests/s</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">99.99%</div>
                <div className="text-sm text-green-700">Platform Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">0</div>
                <div className="text-sm text-green-700">Compliance Issues</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-8">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Risk Assessment Framework</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h5 className="font-bold text-lg text-gray-900 mb-4">Technical Risks</h5>
            <div className="space-y-3">
              {[
                { risk: 'API Security', mitigation: 'OAuth 2.0, Rate Limiting, WAF' },
                { risk: 'Data Breaches', mitigation: 'Encryption, Access Control, DLP' },
                { risk: 'DDoS Attacks', mitigation: 'CDN, Rate Limiting, Geo-blocking' },
                { risk: 'Insider Threats', mitigation: 'Least Privilege, Audit Logs, SIEM' }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="font-medium text-gray-900">{item.risk}</p>
                  <p className="text-sm text-gray-600">{item.mitigation}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h5 className="font-bold text-lg text-gray-900 mb-4">Compliance Risks</h5>
            <div className="space-y-3">
              {[
                { risk: 'Regulatory Fines', mitigation: 'Automated Compliance Checks' },
                { risk: 'License Revocation', mitigation: 'Continuous Monitoring' },
                { risk: 'Reputational Damage', mitigation: 'Incident Response Plan' },
                { risk: 'Legal Actions', mitigation: 'Legal Review Process' }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-indigo-500 pl-4">
                  <p className="font-medium text-gray-900">{item.risk}</p>
                  <p className="text-sm text-gray-600">{item.mitigation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
        <h4 className="text-xl font-bold text-gray-900 mb-6">Implementation Roadmap</h4>
        <div className="space-y-6">
          {[
            {
              phase: 'Phase 1: Foundation (Wochen 1-4)',
              tasks: [
                'Security Architecture Design',
                'Compliance Gap Analysis',
                'Tool Selection & Procurement',
                'Team Training'
              ]
            },
            {
              phase: 'Phase 2: Core Security (Wochen 5-12)',
              tasks: [
                'Authentication & Authorization',
                'Encryption Implementation',
                'API Security Layer',
                'Monitoring Setup'
              ]
            },
            {
              phase: 'Phase 3: Compliance (Wochen 13-20)',
              tasks: [
                'PCI DSS Certification',
                'PSD2 Implementation',
                'Audit Trail System',
                'Reporting Automation'
              ]
            },
            {
              phase: 'Phase 4: Advanced Features (Wochen 21-24)',
              tasks: [
                'ML-based Fraud Detection',
                'Advanced Threat Protection',
                'Disaster Recovery',
                'Performance Optimization'
              ]
            }
          ].map((phase, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6">
              <h5 className="font-bold text-lg text-gray-900 mb-3">{phase.phase}</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {phase.tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-gray-700">{task}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'pci-dss':
        return renderPCIDSS();
      case 'open-banking':
        return renderOpenBanking();
      case 'kyc-aml':
        return renderKYCAML();
      case 'crypto':
        return renderCrypto();
      case 'implementation':
        return renderImplementation();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">FinTech Compliance Guide</h1>
            <p className="text-xl max-w-3xl mx-auto text-blue-100">
              Umfassende Sicherheits- und Compliance-Lösungen für Payment Processing, 
              Open Banking und Crypto Assets
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2">
                Compliance-Beratung anfordern
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition">
                Download Whitepaper
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-medium transition whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für erstklassige FinTech Compliance?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Lassen Sie uns gemeinsam Ihre FinTech-Lösung sicher und compliant gestalten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center gap-2 justify-center">
              <Shield className="w-5 h-5" />
              Kostenlose Compliance-Analyse
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition flex items-center gap-2 justify-center">
              <FileText className="w-5 h-5" />
              Regulatory Mapping anfordern
            </button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'PCI DSS Level 1', value: 'Zertifiziert' },
              { label: 'PSD2 Compliant', value: '100%' },
              { label: 'Uptime SLA', value: '99.99%' },
              { label: 'Incident Response', value: '< 15 Min' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FintechComplianceGuide;