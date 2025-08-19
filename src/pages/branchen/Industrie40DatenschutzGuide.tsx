import React, { useState, useRef, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { 
  Factory,
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
  Wrench,
  Cog,
  Radio,
  Scan,
  Camera,
  Gauge,
  Router,
  Thermometer,
  Bluetooth,
  Rss,
  Power,
  Hammer,
  Scissors,
  Bolt,
  CircuitBoard,
  Laptop,
  Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Industrie40DatenschutzGuide = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('ueberblick');
  
  // Navigation items for sticky navigation - mit deutschen Anker-Links
  const navigationItems = [
    { id: 'ueberblick', label: 'Überblick', icon: Shield },
    { id: 'iot-sensoren', label: 'IoT & Sensoren', icon: Radio },
    { id: 'maschinendaten', label: 'Maschinendaten', icon: Cog },
    { id: 'edge-computing', label: 'Edge Computing', icon: Cpu },
    { id: 'mitarbeiterschutz', label: 'Mitarbeiterschutz', icon: Users },
    { id: 'umsetzung', label: 'Umsetzung', icon: Code }
  ];
  
  const scrollToSection = (sectionId: string) => {
    // Update URL with hash
    window.history.pushState(null, '', `#${sectionId}`);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Offset for sticky navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle initial load with hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);
  
  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      
      const scrollPosition = window.scrollY + 150; // Offset for sticky nav
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industrie40Frameworks = [
    {
      name: 'DSGVO für Produktionsdaten',
      category: 'Data Protection',
      requirements: [
        'Anonymisierung von Maschinendaten',
        'Zweckbindung für Produktionsoptimierung',
        'Minimale Datenerfassung in Smart Factory',
        'Sichere Datenübertragung in IIoT-Netzen'
      ],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'Cybersecurity Act & NIS2',
      category: 'Cybersecurity',
      requirements: [
        'Kritische Infrastrukturen absichern',
        'Incident Response für OT-Systeme',
        'Supply Chain Cybersecurity',
        'OT/IT-Konvergenz Security'
      ],
      color: 'bg-red-50 border-red-200'
    },
    {
      name: 'Machinery Directive & CE',
      category: 'Product Safety',
      requirements: [
        'Safety by Design für vernetzte Maschinen',
        'Cybersecurity in Maschinenrichtlinie',
        'Risikobeurteilung für Smart Manufacturing',
        'Dokumentation vernetzter Systeme'
      ],
      color: 'bg-green-50 border-green-200'
    }
  ];

  const iotChallenges = [
    {
      category: 'Sensor Networks',
      icon: Radio,
      challenges: [
        'Massendatenerfassung ohne explizite Einwilligung',
        'Edge-basierte Echtzeitverarbeitung',
        'Verschlüsselung bei begrenzten Ressourcen',
        'Device Identity & Authentication'
      ]
    },
    {
      category: 'Machine Learning',
      icon: Cpu,
      challenges: [
        'Personenbezogene Produktionsdaten in ML-Modellen',
        'Biometrische Daten für Zugangskontrollen',
        'Predictive Analytics vs. Privacy',
        'Federated Learning in der Produktion'
      ]
    },
    {
      category: 'Human-Machine Interface',
      icon: Monitor,
      challenges: [
        'Tracking von Mitarbeiteraktivitäten',
        'Augmented Reality mit Gesichtserkennung',
        'Voice Commands mit Spracherkennung',
        'Wearables in der Arbeitssicherheit'
      ]
    }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Factory className="w-8 h-8 text-gray-600" />
          Industrie 4.0 Datenschutz Excellence
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Implementieren Sie umfassende Datenschutz-Standards für Ihre Smart Factory. 
          Von IoT-Sensornetzen über Edge Computing bis hin zu KI-gestützter Produktion - 
          navigieren Sie sicher durch die regulatorischen Anforderungen der vernetzten Industrie.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['DSGVO-konforme IoT', 'NIS2-ready Infrastructure', 'Privacy by Design'].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-lg font-bold text-gray-700">{feature}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {industrie40Frameworks.map((framework, index) => (
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

  const renderIoTDevices = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Radio className="w-8 h-8 text-indigo-600" />
          IoT & Sensor Privacy Management
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Entwickeln Sie datenschutzkonforme IoT-Architekturen für industrielle Sensornetzwerke 
          mit Privacy by Design Prinzipien und minimaler Datenerfassung.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scan className="w-5 h-5 text-blue-600" />
              Smart Sensor Privacy Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Sensor Data Classification</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Technische Daten (Temperatur, Druck, Vibration)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span>Standortdaten mit potenziellem Personenbezug</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Biometrische Daten für Zugangskontrollen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Verhaltensdaten von Mitarbeitern</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">IoT Privacy Configuration</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// IoT Device Privacy Configuration
{
  "deviceId": "sensor_temp_001",
  "dataClassification": "technical_non_personal",
  "privacySettings": {
    "dataMinimization": true,
    "localProcessingOnly": true,
    "encryptionAtRest": "AES-256",
    "encryptionInTransit": "TLS-1.3",
    "retentionPeriod": "30_days",
    "pseudonymization": {
      "enabled": true,
      "method": "hmac_sha256",
      "saltRotation": "weekly"
    }
  },
  "dataFlow": {
    "collection": {
      "frequency": "1_minute",
      "batchSize": 100,
      "compressionEnabled": true
    },
    "processing": {
      "location": "edge_gateway",
      "aggregationWindow": "5_minutes",
      "anomalyDetection": true
    },
    "storage": {
      "location": "local_edge",
      "cloudBackup": false,
      "automaticDeletion": true
    }
  },
  "compliance": {
    "gdprApplicable": false,
    "legalBasis": "legitimate_interest_technical_optimization",
    "dataSubjectRights": "not_applicable",
    "auditTrail": true
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bluetooth className="w-5 h-5 text-purple-600" />
              Edge-to-Cloud Privacy Pipeline
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Edge Processing Layer</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Real-time Anonymisierung</li>
                    <li>• Data Aggregation & Compression</li>
                    <li>• Anomaly Detection ohne Cloud</li>
                    <li>• Local AI Inference</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Gateway Privacy Controls</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Data Classification Enforcement</li>
                    <li>• Policy-based Filtering</li>
                    <li>• Encryption Key Management</li>
                    <li>• Compliance Rule Engine</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Edge Gateway Implementation</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Edge Gateway Privacy Processor
class EdgePrivacyGateway {
  constructor(config) {
    this.privacyRules = new PrivacyRuleEngine(config);
    this.encryptionService = new EdgeEncryption();
    this.anonymizer = new DataAnonymizer();
    this.complianceLogger = new ComplianceLogger();
  }

  async processSensorData(deviceData) {
    // 1. Klassifiziere eingehende Daten
    const classification = await this.privacyRules
      .classifyData(deviceData);
    
    // 2. Wende Privacy-Transformationen an
    let processedData = deviceData;
    
    if (classification.containsPersonalData) {
      // Anonymisierung erforderlich
      processedData = await this.anonymizer
        .anonymize(deviceData, classification.level);
      
      // Logge Verarbeitung für Audit
      await this.complianceLogger.log({
        action: 'personal_data_anonymization',
        deviceId: deviceData.deviceId,
        dataTypes: classification.dataTypes,
        method: 'edge_processing',
        timestamp: Date.now()
      });
    }
    
    // 3. Komprimierung und Aggregation
    const aggregatedData = await this.aggregateData(
      processedData,
      classification.aggregationRules
    );
    
    // 4. Verschlüsselung für Cloud-Transport
    if (classification.allowCloudTransfer) {
      const encryptedData = await this.encryptionService
        .encrypt(aggregatedData);
      
      return {
        data: encryptedData,
        metadata: {
          classification: classification.level,
          processed: true,
          cloudReady: true
        }
      };
    }
    
    // 5. Lokale Speicherung für sensitive Daten
    await this.storeLocally(aggregatedData, classification);
    
    return {
      data: null,
      metadata: {
        classification: classification.level,
        processed: true,
        localOnly: true
      }
    };
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
            <Network className="w-5 h-5 text-green-600" />
            Industrial IoT Network Security
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {iotChallenges.map((challenge, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2">
                  <challenge.icon className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold">{challenge.category}</h4>
                </div>
                <div className="space-y-2">
                  {challenge.challenges.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
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

  const renderMachineData = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 border border-green-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Cog className="w-8 h-8 text-green-600" />
          Maschinendaten-Datenschutz
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Verwalten Sie Produktions- und Maschinendaten DSGVO-konform, 
          auch wenn diese indirekt Rückschlüsse auf Personen zulassen könnten.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="w-5 h-5 text-blue-600" />
              Machine Learning Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Privacy-Preserving ML</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Federated Learning für verteilte Fabriken</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Differential Privacy für Produktionsdaten</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Homomorphic Encryption für Cloud-ML</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Secure Multi-party Computation</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Federated Learning Implementation</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Federated Learning für Industrie 4.0
class IndustrialFederatedLearning {
  constructor(factoryId, privacyConfig) {
    this.factoryId = factoryId;
    this.privacyBudget = privacyConfig.differentialPrivacy.budget;
    this.localModel = new ProductionOptimizationModel();
    this.federationClient = new SecureFederationClient();
  }

  async trainLocalModel(productionData) {
    // 1. Daten-Preprocessing mit Privacy
    const preprocessedData = await this.preprocessWithPrivacy(
      productionData
    );
    
    // 2. Lokales Training mit Differential Privacy
    const gradients = await this.localModel.train(
      preprocessedData,
      {
        differentialPrivacy: {
          epsilon: this.privacyBudget.epsilon,
          delta: this.privacyBudget.delta,
          mechanism: 'gaussian_noise'
        },
        batchSize: 32,
        epochs: 5
      }
    );
    
    // 3. Gradient Compression für Übertragung
    const compressedGradients = await this.compressGradients(
      gradients,
      0.1 // 10% sparsity
    );
    
    return compressedGradients;
  }

  async participateInFederation() {
    try {
      // Lokale Daten trainieren (nie die Fabrik verlassen)
      const localGradients = await this.trainLocalModel(
        this.getLocalProductionData()
      );
      
      // Sichere Übertragung zum Federation Server
      const encryptedGradients = await this.encryptGradients(
        localGradients
      );
      
      // Empfange aggregierte Updates
      const globalUpdate = await this.federationClient
        .exchangeUpdates(encryptedGradients);
      
      // Aktualisiere lokales Modell
      await this.localModel.applyGlobalUpdate(globalUpdate);
      
      return {
        success: true,
        modelVersion: this.localModel.version,
        privacyBudgetUsed: this.calculatePrivacyBudgetUsage()
      };
    } catch (error) {
      console.error('Federation participation failed:', error);
      return { success: false, error: error.message };
    }
  }

  async preprocessWithPrivacy(data) {
    // Entferne potentiell personenbeziehbare Identifikatoren
    const anonymizedData = data.map(record => ({
      ...record,
      // Entferne Worker-IDs
      workerId: null,
      shiftId: null,
      // Anonymisiere Zeitstempel (nur Stunde)
      timestamp: this.roundToHour(record.timestamp),
      // Addiere Noise zu sensitiven Metriken
      efficiency: this.addDifferentialPrivacyNoise(
        record.efficiency,
        this.privacyBudget.epsilon / 100
      )
    }));
    
    return anonymizedData;
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5 text-purple-600" />
              Production Data Governance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Data Lineage Tracking</h4>
                  <p className="text-sm text-purple-700 mt-1">
                    Vollständige Nachverfolgung aller Datenquellen und Verarbeitungsschritte
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Automated Data Classification</h4>
                  <p className="text-sm text-purple-700 mt-1">
                    KI-basierte Klassifizierung nach Sensitivität und Personenbezug
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Purpose Limitation Enforcement</h4>
                  <p className="text-sm text-purple-700 mt-1">
                    Technische Durchsetzung der Zweckbindung auf Datenbank-Ebene
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Data Governance Engine</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Production Data Governance
class ProductionDataGovernance {
  constructor() {
    this.dataClassifier = new AutomatedDataClassifier();
    this.purposeLimiter = new PurposeLimitationEngine();
    this.lineageTracker = new DataLineageTracker();
    this.retentionManager = new RetentionPolicyManager();
  }

  async processProductionData(data, context) {
    // 1. Automatische Datenklassifizierung
    const classification = await this.dataClassifier
      .classifyProductionData(data);
    
    // 2. Purpose Limitation Check
    const purposeCheck = await this.purposeLimiter
      .validatePurpose(classification, context.purpose);
    
    if (!purposeCheck.allowed) {
      throw new Error(\`Purpose limitation violation: \${purposeCheck.reason}\`);
    }
    
    // 3. Data Lineage Documentation
    await this.lineageTracker.recordDataFlow({
      sourceSystem: context.sourceSystem,
      dataTypes: classification.dataTypes,
      purpose: context.purpose,
      transformation: context.transformation,
      destination: context.destination,
      timestamp: Date.now(),
      complianceFlags: {
        gdprApplicable: classification.containsPersonalData,
        retentionPeriod: classification.retentionPeriod,
        legalBasis: context.legalBasis
      }
    });
    
    // 4. Retention Policy Application
    const processedData = await this.retentionManager
      .applyRetentionPolicy(data, classification);
    
    return {
      data: processedData,
      classification: classification,
      governance: {
        purposeValidated: true,
        lineageRecorded: true,
        retentionApplied: true
      }
    };
  }

  async generateComplianceReport(timeRange) {
    const lineageData = await this.lineageTracker
      .getDataFlows(timeRange);
    
    const report = {
      dataFlowSummary: {
        totalFlows: lineageData.length,
        byPurpose: this.groupBy(lineageData, 'purpose'),
        byDataType: this.groupBy(lineageData, 'dataTypes'),
        withPersonalData: lineageData.filter(
          flow => flow.complianceFlags.gdprApplicable
        ).length
      },
      retentionCompliance: await this.retentionManager
        .getComplianceStatus(),
      purposeLimitation: await this.purposeLimiter
        .getViolationReport(timeRange)
    };
    
    return report;
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderEdgeComputing = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Cpu className="w-8 h-8 text-orange-600" />
          Edge Computing Privacy
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Implementieren Sie Privacy-by-Design in Ihrer Edge Computing Infrastruktur 
          für Echtzeitverarbeitung ohne Kompromisse beim Datenschutz.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="w-5 h-5 text-blue-600" />
              Edge Privacy Architecture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Edge Privacy Stack</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Hardware Security Modules (HSM)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Trusted Execution Environments (TEE)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Secure Boot & Attestation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Edge-to-Edge Encryption</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Edge Privacy Container</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`# Docker Compose für Privacy-Edge
version: '3.8'

services:
  edge-privacy-processor:
    image: industry40/edge-privacy:latest
    privileged: true
    environment:
      - PRIVACY_LEVEL=strict
      - TEE_ENABLED=true
      - HSM_ENDPOINT=tcp://hsm-service:2345
    volumes:
      - /dev/tpmrm0:/dev/tpmrm0  # TPM access
      - ./privacy-policies:/app/policies:ro
      - edge-secure-storage:/secure-data
    deploy:
      resources:
        limits:
          memory: 2G
          cpus: '1.0'
      placement:
        constraints:
          - node.labels.security_level==high
          - node.labels.has_tpm==true

  data-anonymizer:
    image: industry40/data-anonymizer:latest
    environment:
      - ANONYMIZATION_STRENGTH=high
      - K_ANONYMITY_THRESHOLD=5
      - L_DIVERSITY_ENABLED=true
    depends_on:
      - edge-privacy-processor

  secure-gateway:
    image: industry40/secure-gateway:latest
    ports:
      - "8443:8443"
    environment:
      - TLS_VERSION=1.3
      - CIPHER_SUITES=TLS_AES_256_GCM_SHA384
      - CLIENT_CERT_REQUIRED=true
    volumes:
      - ./certs/edge-gateway.crt:/app/certs/server.crt:ro
      - ./certs/edge-gateway.key:/app/certs/server.key:ro
      - ./certs/ca-bundle.crt:/app/certs/ca.crt:ro

  local-ai-engine:
    image: industry40/privacy-ai:latest
    environment:
      - MODEL_ENCRYPTION=enabled
      - INFERENCE_ISOLATION=strict
      - NO_TELEMETRY=true
    volumes:
      - ai-models:/app/models
      - /tmp/ai-workspace:/tmp/workspace
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 1
              capabilities: [gpu]

volumes:
  edge-secure-storage:
    driver: local
    driver_opts:
      type: none
      o: bind
      device: /encrypted/edge-data
  ai-models:
    driver: local
    driver_opts:
      type: none  
      o: bind
      device: /encrypted/ai-models

networks:
  edge-network:
    driver: bridge
    ipam:
      config:
        - subnet: 172.20.0.0/16
    options:
      encrypted: "true"`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CircuitBoard className="w-5 h-5 text-purple-600" />
              Real-time Privacy Processing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Stream Processing Privacy</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Real-time Anonymization Pipeline</li>
                    <li>• Sliding Window Data Minimization</li>
                    <li>• Event-driven Privacy Controls</li>
                    <li>• Zero-latency Compliance Checks</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Edge AI Privacy</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• On-device Model Inference</li>
                    <li>• Encrypted Neural Networks</li>
                    <li>• Privacy-preserving Training</li>
                    <li>• Secure Model Updates</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Real-time Privacy Stream</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Apache Kafka Stream Privacy Processor
class PrivacyStreamProcessor {
  constructor(kafkaConfig, privacyConfig) {
    this.kafka = kafka(kafkaConfig);
    this.consumer = this.kafka.consumer({
      groupId: 'privacy-processor-group'
    });
    this.producer = this.kafka.producer();
    this.privacyEngine = new RealTimePrivacyEngine(privacyConfig);
  }

  async processProductionStream() {
    await this.consumer.subscribe({
      topic: 'production-data-raw'
    });

    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        try {
          const rawData = JSON.parse(message.value.toString());
          
          // Real-time Privacy Processing
          const privacyResult = await this.privacyEngine
            .processInRealTime(rawData);
          
          if (privacyResult.shouldDrop) {
            // Lösche sensitive Daten ohne Weiterleitung
            await this.logPrivacyDecision(
              'data_dropped',
              privacyResult.reason
            );
            return;
          }
          
          // Transformed Data weiterleiten
          await this.producer.send({
            topic: privacyResult.outputTopic,
            messages: [{
              key: message.key,
              value: JSON.stringify(privacyResult.transformedData),
              headers: {
                'privacy-level': privacyResult.privacyLevel,
                'transformation-applied': privacyResult.transformation,
                'compliance-check': 'passed'
              }
            }]
          });
          
        } catch (error) {
          console.error('Privacy processing failed:', error);
          await this.handlePrivacyProcessingError(error, message);
        }
      }
    });
  }
}

class RealTimePrivacyEngine {
  constructor(config) {
    this.rules = new PrivacyRuleEngine(config.rules);
    this.anonymizer = new StreamAnonymizer(config.anonymization);
    this.classifier = new RealTimeDataClassifier();
  }

  async processInRealTime(data) {
    const startTime = Date.now();
    
    // 1. Schnelle Datenklassifizierung (< 1ms)
    const classification = await this.classifier
      .classifyFast(data);
    
    // 2. Privacy Rule Evaluation (< 2ms)
    const ruleResult = await this.rules
      .evaluate(data, classification);
    
    if (ruleResult.action === 'DROP') {
      return {
        shouldDrop: true,
        reason: ruleResult.reason,
        processingTime: Date.now() - startTime
      };
    }
    
    // 3. Datentransformation (< 5ms)
    const transformedData = await this.anonymizer
      .transformStream(data, ruleResult.transformations);
    
    return {
      shouldDrop: false,
      transformedData: transformedData,
      privacyLevel: classification.level,
      transformation: ruleResult.transformations,
      outputTopic: ruleResult.outputTopic,
      processingTime: Date.now() - startTime
    };
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderWorkerPrivacy = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Users className="w-8 h-8 text-teal-600" />
          Mitarbeiterdatenschutz in Smart Factories
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Schützen Sie Mitarbeiterdaten in der vernetzten Produktion und implementieren Sie 
          transparente Überwachungssysteme mit Respekt für die Privatsphäre.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-blue-600" />
              Workplace Monitoring Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Privacy-First Monitoring</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Anonyme Bewegungsmuster-Analyse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Gesichtsunschärfe in Videostreams</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Pseudonymisierte Leistungsmetriken</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Opt-in für erweiterte Analytics</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Privacy Video Analytics</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Privacy-Preserving Video Analytics
class WorkplaceVideoAnalytics {
  constructor(privacyConfig) {
    this.faceBlurrer = new RealTimeFaceBlurring();
    this.anonymizer = new PersonAnonymizer();
    this.safetyDetector = new SafetyViolationDetector();
    this.privacyConfig = privacyConfig;
  }

  async processVideoFrame(frame, metadata) {
    // 1. Privacy Pre-processing
    let processedFrame = frame;
    
    if (this.privacyConfig.blurFaces) {
      // Real-time Gesichtsunschärfe
      processedFrame = await this.faceBlurrer
        .blurFaces(processedFrame);
    }
    
    if (this.privacyConfig.anonymizePersons) {
      // Personen-Silhouetten statt Identifizierung
      processedFrame = await this.anonymizer
        .createSilhouettes(processedFrame);
    }
    
    // 2. Safety Analysis (ohne Personenidentifikation)
    const safetyAnalysis = await this.safetyDetector
      .analyzeWorkplaceSafety(processedFrame, {
        detectHazards: true,
        countPersons: true,
        identifyPersons: false,
        trackMovement: false
      });
    
    // 3. Aggregate Metrics (keine individuellen Daten)
    const aggregateMetrics = {
      timestamp: metadata.timestamp,
      location: metadata.location,
      personsPresent: safetyAnalysis.personCount,
      safetyViolations: safetyAnalysis.violations.map(v => ({
        type: v.type,
        severity: v.severity,
        area: v.boundingBox, // Ohne Personenbezug
        // Keine person_id oder tracking_id
      })),
      // Keine biometrischen Daten oder Gesichtserkennung
      anonymousMovementPatterns: this.extractAnonymousPatterns(
        safetyAnalysis.movements
      )
    };
    
    // 4. Lösche Original-Frame (nur Metriken behalten)
    if (this.privacyConfig.deleteOriginalFrames) {
      processedFrame = null;
    }
    
    return {
      processedFrame: processedFrame,
      metrics: aggregateMetrics,
      privacyCompliant: true
    };
  }

  extractAnonymousPatterns(movements) {
    // Extrahiere anonyme Bewegungsmuster ohne Tracking
    return movements.map(movement => ({
      direction: movement.direction,
      speed: movement.speed,
      area: movement.area,
      // Keine unique IDs oder Tracking
      anonymousId: this.generateSessionAnonymousId()
    }));
  }
}`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-purple-600" />
              Wearables & IoT Privacy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Smart Wearables Data</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Health Monitoring mit lokaler Verarbeitung</li>
                    <li>• Anonyme Stress-Level Aggregation</li>
                    <li>• Standort-Tracking mit Zonen-basierter Privacy</li>
                    <li>• Biometrische Daten nur auf Device</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Employee Consent Management</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Granulare Opt-in für verschiedene Sensoren</li>
                    <li>• Dynamic Consent für Arbeitsbereiche</li>
                    <li>• Anonyme vs. Personalisierte Modi</li>
                    <li>• Einfacher Widerruf über App</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Employee Privacy Dashboard</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Employee Privacy Control Interface
class EmployeePrivacyDashboard {
  constructor(employeeId) {
    this.employeeId = employeeId;
    this.consentManager = new WorkplaceConsentManager();
    this.dataController = new PersonalDataController();
  }

  async renderPrivacyControls() {
    const currentConsent = await this.consentManager
      .getEmployeeConsent(this.employeeId);
    
    return {
      workplaceMonitoring: {
        videoAnalytics: {
          enabled: currentConsent.videoAnalytics,
          purpose: 'Workplace safety monitoring',
          dataTypes: ['Anonymous movement patterns', 'Safety violations'],
          retention: '30 days',
          control: 'Opt-in required'
        },
        audioMonitoring: {
          enabled: currentConsent.audioMonitoring,
          purpose: 'Noise level monitoring for health',
          dataTypes: ['Ambient noise levels', 'No speech recording'],
          retention: '7 days',
          control: 'Opt-in required'
        },
        locationTracking: {
          enabled: currentConsent.locationTracking,
          purpose: 'Emergency response and workflow optimization',
          dataTypes: ['Zone-based location', 'No GPS coordinates'],
          retention: '24 hours',
          control: 'Can be disabled by employee'
        }
      },
      wearableDevices: {
        healthMonitoring: {
          enabled: currentConsent.healthMonitoring,
          purpose: 'Occupational health and safety',
          dataTypes: ['Heart rate zones', 'Stress indicators', 'No medical diagnosis'],
          processing: 'Local device only',
          control: 'Full employee control'
        },
        performanceTracking: {
          enabled: currentConsent.performanceTracking,
          purpose: 'Workflow optimization',
          dataTypes: ['Task completion times', 'Movement efficiency'],
          anonymization: 'Aggregated with team data',
          control: 'Opt-in with granular options'
        }
      },
      dataRights: {
        viewMyData: () => this.dataController.exportEmployeeData(),
        deleteMyData: () => this.dataController.deleteEmployeeData(),
        correctMyData: () => this.dataController.correctEmployeeData(),
        withdrawConsent: (category) => this.consentManager.withdrawConsent(category)
      }
    };
  }

  async updatePrivacyPreferences(preferences) {
    // Sofortige Wirkung auf alle verbundenen Systeme
    await this.consentManager.updateConsent(
      this.employeeId,
      preferences
    );
    
    // Propagiere Änderungen an IoT-Geräte
    await this.propagateConsentToDevices(preferences);
    
    // Audit-Log für Compliance
    await this.logConsentChange(preferences);
    
    return {
      success: true,
      effectiveImmediately: true,
      devicesUpdated: await this.getConnectedDevices()
    };
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
            <Scale className="w-5 h-5 text-green-600" />
            Legal Compliance Framework
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">DSGVO Art. 88 - Beschäftigtendatenschutz</h4>
              <div className="space-y-3">
                {[
                  {
                    requirement: 'Interessenabwägung',
                    description: 'Berechtigte Interessen des Arbeitgebers vs. Mitarbeiterrechte',
                    implementation: 'Regelmäßige Privacy Impact Assessments'
                  },
                  {
                    requirement: 'Zweckbindung',
                    description: 'Monitoring nur für definierte Zwecke (Sicherheit, Qualität)',
                    implementation: 'Technische Purpose Limitation'
                  },
                  {
                    requirement: 'Verhältnismäßigkeit',
                    description: 'Minimale Überwachung für maximale Zielerreichung',
                    implementation: 'Privacy by Design in Monitoring-Systemen'
                  },
                  {
                    requirement: 'Transparenz',
                    description: 'Vollständige Information über Datenverarbeitung',
                    implementation: 'Employee Privacy Dashboard'
                  }
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-800">{item.requirement}</h5>
                    <p className="text-sm text-green-700 mt-1">{item.description}</p>
                    <p className="text-xs text-green-600 mt-1 font-medium">→ {item.implementation}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Betriebsvereinbarung Template</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Betriebsvereinbarung Template
{
  "title": "Betriebsvereinbarung Industrie 4.0 Datenschutz",
  "scope": "Smart Factory Überwachung und IoT-Systeme",
  "dataProcessing": {
    "permitted": [
      {
        "purpose": "Arbeitsschutz und Unfallprävention",
        "dataTypes": ["Anonyme Bewegungsmuster", "Sicherheitsverletzungen"],
        "legalBasis": "Art. 6 Abs. 1 lit. f DSGVO",
        "retention": "30 Tage"
      },
      {
        "purpose": "Qualitätssicherung Produktion",
        "dataTypes": ["Aggregierte Leistungsmetriken", "Fehlerhäufigkeit"],
        "legalBasis": "Art. 6 Abs. 1 lit. f DSGVO",
        "retention": "90 Tage"
      }
    ],
    "prohibited": [
      "Individuelle Leistungsbewertung über Sensordaten",
      "Gesichtserkennung zur Personenidentifikation",
      "Permanente Standortverfolgung außerhalb Arbeitszeit",
      "Emotionserkennung oder Stimmungsanalyse"
    ]
  },
  "employeeRights": {
    "information": "Monatliche Berichte über verarbeitete Daten",
    "objection": "Widerspruch gegen nicht-essenzielles Monitoring",
    "access": "Self-Service Portal für Dateneinsicht",
    "rectification": "Korrektur falscher Sensordaten"
  },
  "technicalMeasures": {
    "anonymization": "Automatische Anonymisierung nach 24h",
    "encryption": "Ende-zu-Ende Verschlüsselung aller IoT-Daten",
    "accessControl": "Role-based Access nur für autorisiertes Personal",
    "auditTrail": "Vollständige Protokollierung aller Datenzugriffe"
  },
  "governance": {
    "dataProtectionOfficer": "Überwachung und regelmäßige Audits",
    "worksCouncil": "Mitbestimmung bei neuen Monitoring-Systemen",
    "reviewCycle": "Jährliche Überprüfung und Anpassung"
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

  const renderImplementation = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Code className="w-8 h-8 text-purple-600" />
          Complete Industrie 4.0 Privacy Implementation
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Umfassende Implementierung einer DSGVO-konformen Smart Factory mit 
          Privacy by Design, Edge Computing und Mitarbeiterdatenschutz.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {[
          {
            phase: 'Phase 1',
            title: 'Assessment & Design',
            duration: '3-4 Wochen',
            color: 'blue',
            tasks: [
              'Privacy Impact Assessment für IoT',
              'Data Flow Mapping Smart Factory',
              'Regulatory Compliance Review',
              'Edge Privacy Architecture Design'
            ]
          },
          {
            phase: 'Phase 2',
            title: 'Edge Infrastructure',
            duration: '4-5 Wochen',
            color: 'green',
            tasks: [
              'Edge Computing Privacy Setup',
              'IoT Device Security Configuration',
              'Real-time Anonymization Pipeline',
              'Secure Gateway Implementation'
            ]
          },
          {
            phase: 'Phase 3',
            title: 'Worker Privacy Systems',
            duration: '3-4 Wochen',
            color: 'orange',
            tasks: [
              'Employee Consent Management',
              'Workplace Monitoring Privacy',
              'Wearables Privacy Controls',
              'Privacy Dashboard Development'
            ]
          },
          {
            phase: 'Phase 4',
            title: 'Compliance & Operations',
            duration: '2-3 Wochen',
            color: 'purple',
            tasks: [
              'Betriebsvereinbarung Finalisierung',
              'Staff Training & Documentation',
              'Audit & Monitoring Setup',
              'Continuous Compliance Framework'
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
            Complete Technology Stack für Smart Factory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-700">Infrastructure Technology Stack</h4>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`# Kubernetes Smart Factory Privacy Stack
apiVersion: v1
kind: Namespace
metadata:
  name: smart-factory-privacy
  labels:
    security.level: high
    privacy.compliance: gdpr-strict

---
# Edge Privacy Gateway
apiVersion: apps/v1
kind: Deployment
metadata:
  name: edge-privacy-gateway
  namespace: smart-factory-privacy
spec:
  replicas: 3
  selector:
    matchLabels:
      app: edge-privacy-gateway
  template:
    metadata:
      labels:
        app: edge-privacy-gateway
        security.level: high
    spec:
      securityContext:
        runAsNonRoot: true
        runAsUser: 1000
        fsGroup: 1000
      containers:
      - name: privacy-gateway
        image: industry40/edge-privacy-gateway:latest
        env:
        - name: PRIVACY_MODE
          value: "strict"
        - name: REAL_TIME_ANONYMIZATION
          value: "enabled"
        - name: HSM_ENDPOINT
          valueFrom:
            secretKeyRef:
              name: hsm-config
              key: endpoint
        resources:
          limits:
            memory: "1Gi"
            cpu: "500m"
          requests:
            memory: "512Mi"
            cpu: "250m"
        ports:
        - containerPort: 8443
          name: https
        volumeMounts:
        - name: privacy-policies
          mountPath: /app/policies
          readOnly: true
        - name: tls-certs
          mountPath: /app/certs
          readOnly: true
      volumes:
      - name: privacy-policies
        configMap:
          name: privacy-policies
      - name: tls-certs
        secret:
          secretName: edge-gateway-tls

---
# IoT Data Anonymizer
apiVersion: apps/v1
kind: Deployment
metadata:
  name: iot-data-anonymizer
spec:
  replicas: 5
  selector:
    matchLabels:
      app: iot-data-anonymizer
  template:
    spec:
      containers:
      - name: anonymizer
        image: industry40/data-anonymizer:latest
        env:
        - name: ANONYMIZATION_STRENGTH
          value: "high"
        - name: K_ANONYMITY_THRESHOLD
          value: "5"
        - name: PROCESSING_MODE
          value: "real_time"
        resources:
          limits:
            memory: "2Gi"
            cpu: "1"

---
# Worker Privacy Dashboard
apiVersion: apps/v1
kind: Deployment
metadata:
  name: worker-privacy-dashboard
spec:
  replicas: 2
  selector:
    matchLabels:
      app: worker-privacy-dashboard
  template:
    spec:
      containers:
      - name: dashboard
        image: industry40/worker-privacy-dashboard:latest
        env:
        - name: CONSENT_MANAGEMENT_ENABLED
          value: "true"
        - name: GDPR_COMPLIANCE_MODE
          value: "strict"`}
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-700">IoT Edge Privacy Configuration</h4>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`# IoT Edge Device Privacy Config
# /etc/iot-privacy/device-config.yaml

device:
  id: "smart-factory-sensor-001"
  type: "environmental_sensor"
  location: "production_line_a"
  
privacy:
  level: "strict"
  personal_data_detection: "enabled"
  auto_anonymization: "enabled"
  
data_collection:
  # Erlaubte Sensordaten
  temperature:
    enabled: true
    precision: 0.1  # Reduzierte Präzision für Privacy
    retention: "24h"
    
  humidity:
    enabled: true
    precision: 1
    retention: "24h"
    
  # Sensitive Daten mit besonderen Schutzmaßnahmen
  pressure:
    enabled: true
    anonymization: "differential_privacy"
    epsilon: 0.1
    retention: "12h"
    
  # Deaktivierte Sensoren für Privacy
  camera:
    enabled: false
    reason: "privacy_protection"
    
  microphone:
    enabled: false
    reason: "worker_privacy"

processing:
  edge_only: true
  cloud_sync: false
  real_time_anonymization: true
  
  pipelines:
    - name: "safety_monitoring"
      input: ["temperature", "pressure"]
      processing: "anomaly_detection"
      output: "safety_alerts"
      personal_data: false
      
    - name: "efficiency_analysis"
      input: ["all_sensors"]
      processing: "aggregation"
      anonymization: "k_anonymity"
      k_value: 5
      output: "efficiency_metrics"

security:
  encryption:
    at_rest: "AES-256-GCM"
    in_transit: "TLS-1.3"
    key_management: "hsm"
    
  authentication:
    device_certificate: true
    mutual_tls: true
    
  network:
    isolated_vlan: true
    firewall_rules: "strict"
    
compliance:
  gdpr:
    applicable: true
    legal_basis: "legitimate_interest"
    purpose_limitation: "safety_and_efficiency"
    data_minimization: "enabled"
    
  audit:
    enabled: true
    log_level: "detailed"
    retention: "7_years"
    
  worker_rights:
    consent_required: false  # Technical data only
    transparency: "enabled"
    access_rights: "aggregated_data_only"`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Deployment & Compliance Checklist</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Pre-Production</h5>
                  {[
                    'Privacy Impact Assessment abgeschlossen',
                    'Betriebsvereinbarung finalisiert',
                    'IoT Security Hardening durchgeführt',
                    'Employee Privacy Training abgeschlossen',
                    'Data Flow Dokumentation vollständig'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Production Deployment</h5>
                  {[
                    'Edge Privacy Gateways konfiguriert',
                    'Real-time Anonymization aktiv',
                    'Worker Privacy Dashboard deployed',
                    'IoT Device Security validiert',
                    'Monitoring & Alerting setup'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Ongoing Compliance</h5>
                  {[
                    'Monatliche Privacy Audits',
                    'Quarterly Risk Assessments',
                    'Employee Feedback Integration',
                    'Technology Updates & Patches',
                    'Regulatory Change Monitoring'
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-950/30 text-gray-700 dark:text-gray-400 mb-6">
                <Factory className="h-4 w-4" />
                <span className="text-sm font-medium">Industrie 4.0 Datenschutz</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Industrie 4.0 Datenschutz
                <span className="bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent block mt-2">
                  Smart Factory Privacy Excellence
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Umfassender Leitfaden für datenschutzkonforme Smart Factories. 
                Von IoT-Sensoren über Edge Computing bis hin zu Mitarbeiterdatenschutz in der vernetzten Produktion.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/wissen/branchen">
                  <Button size="lg" className="bg-gradient-to-r from-gray-600 to-blue-600 text-white hover:opacity-90 group">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Zurück zur Übersicht
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="group">
                  <Download className="mr-2 h-5 w-5" />
                  Smart Factory Privacy Guide
                </Button>
              </div>
            </div>

            {/* Progress Indicator */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Smart Factory Privacy Implementation</h3>
                  <Badge className="bg-green-100 text-green-700">97% Industry 4.0 Ready</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[
                    { label: 'IoT Privacy', progress: 96 },
                    { label: 'Edge Computing', progress: 98 },
                    { label: 'Machine Data', progress: 94 },
                    { label: 'Worker Privacy', progress: 99 },
                    { label: 'Compliance', progress: 97 },
                    { label: 'Security', progress: 98 }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="text-lg font-bold text-gray-600 mb-1">{item.progress}%</div>
                      <div className="text-xs text-gray-600">{item.label}</div>
                      <Progress value={item.progress} className="h-2 mt-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <nav className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setActiveSection(item.id);
                    }}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
                      activeSection === item.id
                        ? "bg-gray-100 dark:bg-gray-950/50 text-gray-700 dark:text-gray-400 border-gray-200 dark:border-gray-800"
                        : "hover:bg-gray-50 dark:hover:bg-gray-950/30 hover:text-gray-700 dark:hover:text-gray-400",
                      "border",
                      activeSection === item.id
                        ? "border-gray-200 dark:border-gray-800"
                        : "border-transparent hover:border-gray-200 dark:hover:border-gray-800"
                    )}
                  >
                    <item.icon className={cn(
                      "h-4 w-4",
                      activeSection === item.id && "text-gray-600 dark:text-gray-500"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      activeSection === item.id && "text-gray-700 dark:text-gray-400"
                    )}>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto space-y-20">
              {/* Überblick Section */}
              <section id="ueberblick" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Industrie 4.0 Datenschutz Überblick
                </motion.h2>
                {renderOverview()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* IoT & Sensoren Section */}
              <section id="iot-sensoren" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  IoT-Geräte & Sensoren Datenschutz
                </motion.h2>
                {renderIoTDevices()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Maschinendaten Section */}
              <section id="maschinendaten" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Maschinendaten & Produktionsdaten
                </motion.h2>
                {renderMachineData()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Edge Computing Section */}
              <section id="edge-computing" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Edge Computing & Datenverarbeitung
                </motion.h2>
                {renderEdgeComputing()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Mitarbeiterschutz Section */}
              <section id="mitarbeiterschutz" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Mitarbeiterdatenschutz in der Smart Factory
                </motion.h2>
                {renderWorkerPrivacy()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Umsetzung Section */}
              <section id="umsetzung" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Umsetzung & Implementation
                </motion.h2>
                {renderImplementation()}
              </section>
            </div>

            {/* Quick Links */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-gray-600" />
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
                  <Link to="/wissen/branchen/saas-privacy-design" className="block">
                    <div className="p-4 bg-cyan-50 rounded-lg border border-cyan-200 hover:border-cyan-300 transition-colors">
                      <Cloud className="h-5 w-5 text-cyan-600 mb-2" />
                      <div className="font-medium">SaaS Privacy by Design</div>
                      <div className="text-sm text-gray-600">Privacy-native SaaS Development</div>
                    </div>
                  </Link>
                  <Link to="/wissen/krisenmanagement" className="block">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors">
                      <AlertTriangle className="h-5 w-5 text-red-600 mb-2" />
                      <div className="font-medium">Krisenmanagement</div>
                      <div className="text-sm text-gray-600">Data Breach Response</div>
                    </div>
                  </Link>
                  <Link to="/industries/manufacturing" className="block">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors">
                      <Factory className="h-5 w-5 text-green-600 mb-2" />
                      <div className="font-medium">Manufacturing Solutions</div>
                      <div className="text-sm text-gray-600">Unsere Produktlösungen</div>
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

export default Industrie40DatenschutzGuide;