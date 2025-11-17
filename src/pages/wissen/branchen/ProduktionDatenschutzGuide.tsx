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
  Package,
  Truck,
  BarChart,
  MessageSquare,
  Layers,
  GitBranch,
  RefreshCw,
  Upload,
  HardDrive,
  Network,
  Cpu,
  Cog,
  Radio,
  Scan,
  Camera,
  Gauge,
  CircuitBoard,
  Cloud,
  Wrench,
  Scale,
  Lock,
  Search,
  Monitor,
  Server,
  Code,
  Award,
  Construction,
  Hammer,
  Box,
  Rocket,
  ShieldCheck,
  FileSearch,
  FolderCheck,
  Timer,
  TestTube,
  ClipboardCheck,
  Sparkles,
  Megaphone,
  Workflow,
  Container,
  Palette,
  Recycle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const ProduktionDatenschutzGuide = () => {
  // SEO Meta Tags
  React.useEffect(() => {
    // Title Tag
    document.title = 'Produktion Datenschutz DSGVO – Compliance Guide';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', 'DSGVO-konforme Produktion: Fertigungsdaten & Mitarbeiterschutz sicher umsetzen. ISO 27001 Standards für Ihre Fertigung. Jetzt Beratung anfordern!');
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
    
    // Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', 'https://www.dataprivacyframework.com/wissen/branchen/produktion');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonical);
    }
    
    return () => {
      document.title = 'Data Privacy Framework';
    };
  }, []);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('ueberblick');
  
  // Navigation items for sticky navigation
  const navigationItems = [
    { id: 'ueberblick', label: 'Überblick', icon: Shield },
    { id: 'produktionsdaten', label: 'Produktionsdaten', icon: Factory },
    { id: 'qualitaet', label: 'Qualitätssicherung', icon: TestTube },
    { id: 'lieferkette', label: 'Lieferkette', icon: Truck },
    { id: 'mitarbeiter', label: 'Mitarbeiterdaten', icon: Users },
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

  const productionFrameworks = [
    {
      name: 'DSGVO für Produktionsbetriebe',
      category: 'Data Protection',
      requirements: [
        'Datenschutz in der Fertigung',
        'Mitarbeiterdaten & Schichtplanung',
        'Kunden- und Lieferantendaten',
        'Produktionsdatenerfassung'
      ],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'ISO 27001 & Informationssicherheit',
      category: 'Security',
      requirements: [
        'IT-Sicherheit in der Produktion',
        'Schutz von Betriebsgeheimnissen',
        'Zugriffskontrolle & Berechtigungen',
        'Backup & Recovery Strategien'
      ],
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'Branchenspezifische Standards',
      category: 'Industry Specific',
      requirements: [
        'ISO 9001 Qualitätsmanagement',
        'IATF 16949 für Automotive',
        'FDA Compliance für Medizinprodukte',
        'CE-Konformität & Produktsicherheit'
      ],
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const productionChallenges = [
    {
      category: 'Fertigungsdaten',
      icon: Factory,
      challenges: [
        'Maschinendaten & Produktionsparameter',
        'Qualitätsdaten & Prüfprotokolle',
        'Rückverfolgbarkeit & Chargen',
        'Produktionsfehler & Ausschuss'
      ]
    },
    {
      category: 'Personenbezogene Daten',
      icon: Users,
      challenges: [
        'Schichtpläne & Zeiterfassung',
        'Leistungsdaten der Mitarbeiter',
        'Zugangskontrolle & Sicherheit',
        'Schulungsnachweise & Qualifikationen'
      ]
    },
    {
      category: 'Geschäftsdaten',
      icon: Building2,
      challenges: [
        'Kundendaten & Aufträge',
        'Lieferantendaten & Bestellungen',
        'Kalkulationen & Preise',
        'Konstruktionsdaten & Zeichnungen'
      ]
    }
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8 border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Factory className="w-8 h-8 text-gray-600" />
          Datenschutz in der Produktion
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Implementieren Sie umfassende Datenschutz-Standards für Ihren Produktionsbetrieb. 
          Von der Fertigungsdatenerfassung über Qualitätssicherung bis hin zum Mitarbeiterdatenschutz - 
          meistern Sie die regulatorischen Anforderungen in der modernen Produktion.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {['DSGVO-konforme Fertigung', 'ISO 27001 Sicherheit', 'Mitarbeiterdatenschutz'].map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center border border-gray-200">
              <div className="text-lg font-bold text-gray-700">{feature}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productionFrameworks.map((framework, index) => (
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

  const renderProductionData = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Database className="w-8 h-8 text-indigo-600" />
          Produktionsdaten & Fertigungsinformationen
        </h3>
        <p className="text-gray-700 leading-relaxed mb-6">
          Schützen Sie Ihre Produktionsdaten und implementieren Sie sichere Prozesse für die 
          Erfassung, Verarbeitung und Speicherung von Fertigungsinformationen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="w-5 h-5 text-blue-600" />
              Maschinendatenerfassung (MDE)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Datenkategorien in der MDE</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Produktionszeiten & Maschinenauslastung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Stückzahlen & Produktionsmengen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span>Mitarbeiterbezogene Leistungsdaten</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Personalisierte Fehlerstatistiken</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Datenschutzkonforme MDE-Konfiguration</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// MDE Privacy Configuration
{
  "dataCollection": {
    "machineData": {
      "enabled": true,
      "anonymization": "none_required",
      "retention": "5_years",
      "purpose": "production_optimization"
    },
    "operatorData": {
      "enabled": true,
      "anonymization": "pseudonymization",
      "aggregation": "shift_level",
      "personalIdentifiers": {
        "employeeId": "hashed",
        "name": "removed",
        "performance": "aggregated"
      }
    },
    "qualityData": {
      "defectTracking": true,
      "operatorAssociation": "anonymous",
      "retention": "product_warranty_period"
    }
  },
  "accessControl": {
    "productionManager": ["view_all", "export_aggregated"],
    "shiftLeader": ["view_shift", "no_personal_data"],
    "operator": ["view_own_anonymized"],
    "quality": ["view_quality_anonymous"]
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
              <Container className="w-5 h-5 text-purple-600" />
              ERP & Produktionsplanung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Auftragsdaten</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Kundendaten & Lieferadressen</li>
                    <li>• Produktspezifikationen</li>
                    <li>• Liefertermine & Prioritäten</li>
                    <li>• Preise & Kalkulationen</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Ressourcenplanung</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Materialbedarfsplanung</li>
                    <li>• Kapazitätsplanung</li>
                    <li>• Personaleinsatzplanung</li>
                    <li>• Maschinenbelegung</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">ERP Data Governance</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// ERP Privacy Policy Implementation
class ProductionDataGovernance {
  constructor() {
    this.dataClassifier = new DataClassificationEngine();
    this.accessController = new RoleBasedAccessControl();
    this.auditLogger = new ComplianceAuditLog();
  }

  async processProductionOrder(orderData) {
    // Klassifiziere Daten nach Sensitivität
    const classification = await this.dataClassifier
      .classify(orderData);
    
    // Anwenden von Datenschutzregeln
    const processedData = await this.applyPrivacyRules(
      orderData,
      classification
    );
    
    // Zugriffskontrolle basierend auf Rolle
    const accessLevel = await this.accessController
      .determineAccess(currentUser, classification);
    
    // Audit-Logging für Compliance
    await this.auditLogger.log({
      action: 'order_processing',
      dataTypes: classification.dataTypes,
      user: currentUser.id,
      purpose: 'production_planning',
      timestamp: new Date()
    });
    
    return {
      data: this.filterByAccessLevel(processedData, accessLevel),
      metadata: {
        classification: classification.level,
        retention: classification.retentionPeriod,
        gdprRelevant: classification.hasPersonalData
      }
    };
  }

  applyPrivacyRules(data, classification) {
    if (classification.hasPersonalData) {
      // Minimierung personenbezogener Daten
      data = this.minimizePersonalData(data);
      // Pseudonymisierung wo möglich
      data = this.pseudonymize(data);
    }
    
    if (classification.hasTradeSecrets) {
      // Verschlüsselung sensibler Geschäftsdaten
      data = this.encryptSensitiveFields(data);
    }
    
    return data;
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
            <HardDrive className="w-5 h-5 text-green-600" />
            Datenaufbewahrung & Löschkonzepte
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productionChallenges.map((challenge, index) => (
              <div key={index} className="space-y-3">
                <div className="flex items-center gap-2">
                  <challenge.icon className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold">{challenge.category}</h4>
                </div>
                <div className="space-y-2">
                  {challenge.challenges.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
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

  const renderQualityManagement = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 border border-green-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <TestTube className="w-8 h-8 text-green-600" />
          Qualitätssicherung & Datenschutz
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Integrieren Sie Datenschutzprinzipien in Ihre Qualitätssicherungsprozesse und 
          schützen Sie sensible Qualitätsdaten sowie Prüfprotokolle.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5 text-blue-600" />
              Prüfdatenmanagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Qualitätsdaten-Kategorien</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Messwerte & Prüfergebnisse</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Produktspezifikationen & Toleranzen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span>Prüfer-Identifikation & Zeitstempel</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Fehlerursachen mit Personenbezug</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Quality Data Privacy Framework</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Qualitätsdaten-Verwaltung mit Datenschutz
class QualityDataManager {
  constructor() {
    this.privacyEngine = new QualityPrivacyEngine();
    this.retentionManager = new DataRetentionManager();
    this.anonymizer = new QualityDataAnonymizer();
  }

  async recordQualityInspection(inspectionData) {
    // 1. Datenschutz-Klassifizierung
    const classification = await this.classifyInspectionData(
      inspectionData
    );
    
    // 2. Anonymisierung personenbezogener Daten
    if (classification.hasPersonalData) {
      inspectionData = await this.anonymizer.process({
        data: inspectionData,
        rules: {
          inspectorId: 'pseudonymize',
          inspectorName: 'remove',
          timestamp: 'generalize_to_shift',
          defectAssignment: 'anonymize'
        }
      });
    }
    
    // 3. Speicherung mit Aufbewahrungsfristen
    const storedData = await this.storeWithRetention({
      data: inspectionData,
      retention: {
        measurementData: '10_years', // Produkthaftung
        inspectorData: '30_days',    // Anonymisiert
        customerData: 'warranty_period_plus_1_year',
        calibrationData: '5_years'
      }
    });
    
    // 4. Audit Trail für Compliance
    await this.logQualityDataProcessing({
      action: 'quality_inspection_recorded',
      dataTypes: classification.dataTypes,
      anonymizationApplied: classification.hasPersonalData,
      retentionPeriods: storedData.retention,
      legalBasis: 'product_liability_compliance'
    });
    
    return {
      success: true,
      recordId: storedData.id,
      privacyCompliant: true
    };
  }

  async generateQualityReport(criteria) {
    // Aggregierte Berichte ohne Personenbezug
    const rawData = await this.fetchQualityData(criteria);
    
    return {
      overview: {
        totalInspections: rawData.length,
        defectRate: this.calculateDefectRate(rawData),
        trends: this.analyzeTrends(rawData)
      },
      // Keine individuellen Prüfer-Statistiken
      aggregatedMetrics: {
        byShift: this.aggregateByShift(rawData),
        byProductType: this.aggregateByProduct(rawData),
        byDefectType: this.aggregateByDefect(rawData)
      },
      // Anonymisierte Detaildaten
      details: rawData.map(record => ({
        timestamp: this.generalizeTimestamp(record.timestamp),
        result: record.result,
        measurements: record.measurements,
        // Keine Prüfer-Identifikation
        anonymousId: this.generateAnonymousId(record)
      }))
    };
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
              <FileSearch className="w-5 h-5 text-purple-600" />
              Rückverfolgbarkeit & Compliance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Traceability-Anforderungen</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Chargenrückverfolgung</li>
                    <li>• Lieferantendokumentation</li>
                    <li>• Prozessparameter-Historie</li>
                    <li>• Änderungsmanagement</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Compliance-Dokumentation</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Konformitätserklärungen</li>
                    <li>• Zertifikate & Prüfberichte</li>
                    <li>• Audit-Protokolle</li>
                    <li>• Schulungsnachweise</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Traceability System</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`# Rückverfolgbarkeits-Konfiguration
traceability:
  batch_tracking:
    enabled: true
    data_captured:
      - material_batch_numbers
      - supplier_certificates
      - production_parameters
      - quality_results
    privacy_measures:
      - operator_anonymization
      - timestamp_generalization
      - aggregated_reporting
  
  retention_policies:
    product_data:
      automotive: "15_years"
      medical: "10_years_plus_product_lifetime"
      consumer: "warranty_plus_2_years"
    
    personal_data:
      operator_logs: "30_days_then_anonymize"
      training_records: "employment_duration"
      access_logs: "1_year"
  
  data_access:
    internal_audit:
      - full_access_anonymized
      - personal_data_restricted
    
    customer_request:
      - product_specific_only
      - no_personal_data
      - aggregated_quality_metrics
    
    regulatory_inspection:
      - compliance_relevant_data
      - justified_personal_access
      - audit_trail_required`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderSupplyChain = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Truck className="w-8 h-8 text-orange-600" />
          Lieferkette & Datenaustausch
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Sicherer Datenaustausch mit Lieferanten und Kunden unter Einhaltung aller 
          Datenschutzbestimmungen in der gesamten Lieferkette.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-600" />
              Lieferantendatenmanagement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Lieferantendaten-Kategorien</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Firmendaten & Kontaktinformationen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Zertifikate & Qualifikationen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span>Ansprechpartner & persönliche Daten</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span>Bewertungen & Leistungsdaten</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Supplier Data Exchange Protocol</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Sicherer Lieferantendatenaustausch
class SupplierDataExchange {
  constructor() {
    this.encryptionService = new E2EEncryption();
    this.dataValidator = new SupplierDataValidator();
    this.consentManager = new B2BConsentManager();
  }

  async exchangeProductionData(supplierId, dataPackage) {
    // 1. Überprüfe Datenaustausch-Vereinbarung
    const agreement = await this.consentManager
      .getDataSharingAgreement(supplierId);
    
    if (!agreement.isValid()) {
      throw new Error('No valid data sharing agreement');
    }
    
    // 2. Validiere und klassifiziere Daten
    const validation = await this.dataValidator.validate({
      data: dataPackage,
      allowedTypes: agreement.permittedDataTypes,
      privacyLevel: agreement.privacyLevel
    });
    
    // 3. Entferne nicht-autorisierte Daten
    const sanitizedData = this.sanitizeData(
      dataPackage,
      agreement.dataScope
    );
    
    // 4. Verschlüsselung für Übertragung
    const encryptedPackage = await this.encryptionService
      .encryptForRecipient(sanitizedData, supplierId);
    
    // 5. Audit Trail
    await this.logDataExchange({
      recipient: supplierId,
      dataTypes: validation.dataTypes,
      purpose: agreement.purpose,
      legalBasis: 'contractual_necessity',
      encryptionMethod: 'E2E_AES256',
      timestamp: new Date()
    });
    
    return {
      transmissionId: generateId(),
      encrypted: true,
      dataTypes: validation.dataTypes,
      expiresAt: agreement.dataRetentionEnd
    };
  }

  sanitizeData(data, allowedScope) {
    // Entferne personenbezogene Daten wenn nicht erlaubt
    if (!allowedScope.includes('personal_data')) {
      data = this.removePersonalIdentifiers(data);
    }
    
    // Entferne Geschäftsgeheimnisse wenn nicht erlaubt
    if (!allowedScope.includes('trade_secrets')) {
      data = this.removeConfidentialInfo(data);
    }
    
    return data;
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
              <Globe className="w-5 h-5 text-purple-600" />
              EDI & Systemintegration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">EDI-Datenschutz</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Sichere EDI-Verbindungen</li>
                    <li>• Datenminimierung in Nachrichten</li>
                    <li>• Verschlüsselte Übertragung</li>
                    <li>• Protokollierung & Monitoring</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">API-Sicherheit</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• OAuth 2.0 Authentication</li>
                    <li>• Rate Limiting & Quotas</li>
                    <li>• Field-Level Encryption</li>
                    <li>• API Gateway Security</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">EDI Privacy Configuration</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`# EDI Privacy & Security Setup
edi_configuration:
  communication:
    protocol: "AS2"
    encryption: "3DES"
    signing: "SHA-256"
    mdn_required: true
  
  data_handling:
    message_types:
      ORDERS:
        personal_data_fields:
          - "buyer_contact"
          - "delivery_contact"
        anonymization: "hash_personal_identifiers"
        retention: "order_completion_plus_1_year"
      
      INVOICES:
        personal_data_fields:
          - "contact_person"
          - "bank_details"
        encryption: "field_level_aes256"
        retention: "legal_requirement_10_years"
      
      DELIVERY_NOTES:
        personal_data_fields:
          - "driver_name"
          - "recipient_signature"
        handling: "minimal_retention_30_days"
  
  partner_agreements:
    data_processing_agreement: "required"
    privacy_addendum: "mandatory"
    audit_rights: "annual"
    breach_notification: "72_hours"
  
  monitoring:
    failed_transmissions: "alert_immediate"
    unauthorized_access: "block_and_alert"
    data_anomalies: "flag_for_review"
    retention_logs: "1_year"`}
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderEmployeeData = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
          <Users className="w-8 h-8 text-teal-600" />
          Mitarbeiterdatenschutz in der Produktion
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Schützen Sie die Daten Ihrer Mitarbeiter in allen Produktionsprozessen und 
          implementieren Sie transparente Datenschutzmaßnahmen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Timer className="w-5 h-5 text-blue-600" />
              Zeiterfassung & Schichtplanung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-3">Erfasste Mitarbeiterdaten</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Arbeitszeiten & Pausen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>Schichtzuteilungen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600" />
                    <span>Überstunden & Zuschläge</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    <span>Krankheits- & Urlaubsdaten</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Datenschutzkonforme Zeiterfassung</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Mitarbeiterdatenschutz in der Zeiterfassung
class PrivacyCompliantTimeTracking {
  constructor() {
    this.consentManager = new EmployeeConsentManager();
    this.dataMinimizer = new TimeDataMinimizer();
    this.accessController = new TimeDataAccessControl();
  }

  async recordTimeEntry(employeeId, timeData) {
    // 1. Überprüfe Mitarbeiter-Einwilligung
    const consent = await this.consentManager
      .getEmployeeConsent(employeeId, 'time_tracking');
    
    // 2. Datenminimierung
    const minimizedData = this.dataMinimizer.minimize({
      employeeId: employeeId,
      checkIn: timeData.checkIn,
      checkOut: timeData.checkOut,
      // Keine biometrischen Daten speichern
      biometricUsed: true, // Nur Flag, keine Rohdaten
      // Keine Standortdaten außer Werkszugang
      location: 'main_entrance'
    });
    
    // 3. Zweckbindung sicherstellen
    const purposes = ['payroll', 'legal_compliance'];
    
    // 4. Speicherung mit Zugriffskontrolle
    await this.storeTimeData({
      data: minimizedData,
      allowedPurposes: purposes,
      accessRoles: ['hr', 'payroll', 'direct_supervisor'],
      retention: {
        detailed: '3_months',
        aggregated: '3_years',
        payroll_relevant: '10_years'
      }
    });
    
    // 5. Transparenz für Mitarbeiter
    await this.notifyEmployee(employeeId, {
      dataRecorded: 'time_entry',
      purposes: purposes,
      accessRights: 'view_own_data_anytime',
      deletion: 'automatic_after_retention'
    });
  }

  async generateShiftReport(shiftId, requestor) {
    // Zugriffsberechtigung prüfen
    const authorized = await this.accessController
      .checkAuthorization(requestor, 'shift_reports');
    
    if (!authorized) {
      throw new Error('Unauthorized access to shift data');
    }
    
    // Aggregierte Daten ohne Personenbezug
    const shiftData = await this.getShiftData(shiftId);
    
    return {
      shiftSummary: {
        totalWorkers: shiftData.length,
        totalHours: this.sumHours(shiftData),
        efficiency: this.calculateEfficiency(shiftData)
      },
      // Keine individuellen Leistungsdaten
      anonymizedMetrics: {
        averageProductivity: this.avgProductivity(shiftData),
        qualityScore: this.avgQuality(shiftData)
      },
      // Audit Trail
      accessLog: await this.logDataAccess(requestor, 'shift_report')
    };
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
              <UserCheck className="w-5 h-5 text-purple-600" />
              Leistungsdaten & Qualifikationen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Leistungserfassung</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Produktivitätskennzahlen</li>
                    <li>• Qualitätsmetriken</li>
                    <li>• Fehlerquoten (anonymisiert)</li>
                    <li>• Verbesserungsvorschläge</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800">Qualifikationsmanagement</h4>
                  <ul className="text-sm text-purple-700 mt-2 space-y-1">
                    <li>• Schulungsnachweise</li>
                    <li>• Zertifikate & Berechtigungen</li>
                    <li>• Kompetenzbewertungen</li>
                    <li>• Weiterbildungsbedarf</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Performance Data Privacy</h4>
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`# Leistungsdaten-Datenschutzrichtlinie
performance_data_policy:
  data_collection:
    allowed:
      - aggregated_team_metrics
      - anonymous_quality_scores
      - shift_level_productivity
      - machine_specific_output
    
    prohibited:
      - individual_piece_counting
      - continuous_monitoring
      - ranking_employees
      - public_performance_display
  
  processing_rules:
    anonymization:
      method: "k_anonymity"
      k_value: 5
      grouping: "by_shift_and_department"
    
    aggregation:
      minimum_group_size: 5
      time_window: "weekly"
      metrics: "average_only"
  
  access_control:
    employee:
      own_data: "full_access"
      team_data: "aggregated_only"
      comparison: "anonymous_percentiles"
    
    supervisor:
      team_data: "aggregated_metrics"
      individual_data: "exceptional_cases_only"
      purpose: "development_and_support"
    
    hr_department:
      access: "aggregated_reports"
      individual: "with_employee_consent"
      retention: "performance_review_cycle"
  
  employee_rights:
    information: "quarterly_transparency_report"
    objection: "opt_out_from_detailed_tracking"
    correction: "dispute_incorrect_data"
    deletion: "after_employment_ends"`}
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
            Betriebsvereinbarung & Mitbestimmung
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Betriebsvereinbarung Datenschutz</h4>
              <div className="space-y-3">
                {[
                  {
                    topic: 'Datenerfassung',
                    content: 'Transparente Regelung aller erfassten Mitarbeiterdaten',
                    requirement: 'Mitbestimmungspflichtig'
                  },
                  {
                    topic: 'Leistungskontrolle',
                    content: 'Klare Grenzen für Leistungsüberwachung',
                    requirement: 'Betriebsrat-Zustimmung'
                  },
                  {
                    topic: 'Datenzugriff',
                    content: 'Definierte Zugriffsrechte und Zweckbindung',
                    requirement: 'Schriftliche Vereinbarung'
                  },
                  {
                    topic: 'Löschfristen',
                    content: 'Verbindliche Aufbewahrungs- und Löschfristen',
                    requirement: 'DSGVO-konform'
                  }
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <h5 className="font-medium text-green-800">{item.topic}</h5>
                    <p className="text-sm text-green-700 mt-1">{item.content}</p>
                    <p className="text-xs text-green-600 mt-1 font-medium">→ {item.requirement}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Mitarbeiterschulung</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Datenschutz-Schulungsprogramm
{
  "schulungsprogramm": {
    "neue_mitarbeiter": {
      "einführung": "Datenschutz-Grundlagen",
      "dauer": "2 Stunden",
      "inhalte": [
        "Umgang mit Kundendaten",
        "Produktionsdaten-Schutz",
        "Eigene Rechte als Mitarbeiter",
        "Meldewege bei Verstößen"
      ]
    },
    "produktionsmitarbeiter": {
      "fokus": "Praktischer Datenschutz",
      "themen": [
        "MDE-System Datenschutz",
        "Qualitätsdaten-Handling",
        "Besuchermanagement",
        "Mobile Geräte & Apps"
      ],
      "intervall": "jährlich"
    },
    "führungskräfte": {
      "spezialschulung": true,
      "themen": [
        "Mitarbeiterdaten-Verwaltung",
        "Leistungsbewertung & DSGVO",
        "Auskunftsrechte",
        "Datenschutz-Folgenabschätzung"
      ],
      "zertifizierung": "erforderlich"
    }
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
          Datenschutz-Implementation für Produktionsbetriebe
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Schritt-für-Schritt Anleitung zur Implementierung eines umfassenden 
          Datenschutzkonzepts in Ihrem Produktionsunternehmen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {[
          {
            phase: 'Phase 1',
            title: 'Assessment & Analyse',
            duration: '2-3 Wochen',
            color: 'blue',
            tasks: [
              'Bestandsaufnahme aller Datenflüsse',
              'Identifikation personenbezogener Daten',
              'Risikoanalyse Produktion',
              'Gap-Analyse DSGVO-Compliance'
            ]
          },
          {
            phase: 'Phase 2',
            title: 'Konzept & Design',
            duration: '3-4 Wochen',
            color: 'green',
            tasks: [
              'Datenschutzkonzept erstellen',
              'Technische Maßnahmen planen',
              'Betriebsvereinbarung entwerfen',
              'Schulungskonzept entwickeln'
            ]
          },
          {
            phase: 'Phase 3',
            title: 'Umsetzung',
            duration: '4-6 Wochen',
            color: 'orange',
            tasks: [
              'IT-Systeme anpassen',
              'Prozesse implementieren',
              'Mitarbeiter schulen',
              'Dokumentation erstellen'
            ]
          },
          {
            phase: 'Phase 4',
            title: 'Betrieb & Optimierung',
            duration: 'Kontinuierlich',
            color: 'purple',
            tasks: [
              'Monitoring & Audits',
              'Incident Management',
              'Kontinuierliche Verbesserung',
              'Compliance-Updates'
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
            Technische Implementierung
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-700">ERP-System Anpassungen</h4>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`-- SQL: Datenschutz-Views für ERP
-- Anonymisierte Produktionsdaten
CREATE VIEW v_production_anonymous AS
SELECT 
  DATE_TRUNC('hour', timestamp) as time_slot,
  machine_id,
  product_type,
  COUNT(*) as quantity,
  AVG(cycle_time) as avg_cycle_time,
  -- Keine Operator-ID
  COUNT(DISTINCT 
    CASE WHEN operator_id IS NOT NULL 
    THEN 'operator' END
  ) as operator_count
FROM production_data
GROUP BY 1, 2, 3;

-- Mitarbeiterdaten mit Zugriffskontrolle
CREATE VIEW v_employee_restricted AS
SELECT 
  employee_id,
  department,
  -- Sensible Daten nur für HR
  CASE 
    WHEN current_user IN ('hr_user', 'payroll_user')
    THEN full_name 
    ELSE 'RESTRICTED' 
  END as name,
  CASE 
    WHEN current_user = 'hr_user'
    THEN salary_grade 
    ELSE NULL 
  END as salary_info
FROM employees;

-- Audit-Trigger für Datenzugriff
CREATE TRIGGER audit_sensitive_access
AFTER SELECT ON v_employee_restricted
FOR EACH STATEMENT
EXECUTE FUNCTION log_data_access();`}
                  </pre>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-700">MES-Integration</h4>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`# MES Privacy Configuration
# /etc/mes/privacy-config.yaml

privacy_settings:
  operator_tracking:
    mode: "anonymous"
    session_based: true
    retain_identity: false
    
  quality_data:
    link_to_operator: false
    aggregate_level: "shift"
    
  performance_metrics:
    individual_tracking: false
    team_metrics: true
    minimum_group_size: 5
    
data_retention:
  real_time_data: "24_hours"
  aggregated_data: "1_year"
  quality_records: "product_lifetime"
  
api_security:
  authentication: "oauth2"
  encryption: "tls_1.3"
  rate_limiting:
    per_minute: 100
    per_hour: 1000
    
export_controls:
  customer_data:
    require_approval: true
    anonymize_operators: true
    audit_trail: true
    
  internal_reports:
    auto_anonymize: true
    watermark: "confidential"
    track_downloads: true`}
                  </pre>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Implementierungs-Checkliste</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Technische Maßnahmen</h5>
                  {[
                    'Verschlüsselung aller Datenbanken',
                    'Zugriffskontrolle implementiert',
                    'Anonymisierung aktiviert',
                    'Backup-Verschlüsselung',
                    'Netzwerksegmentierung'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Organisatorische Maßnahmen</h5>
                  {[
                    'Datenschutzbeauftragter benannt',
                    'Verfahrensverzeichnis erstellt',
                    'Betriebsvereinbarung unterzeichnet',
                    'Schulungen durchgeführt',
                    'Notfallplan erstellt'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-gray-800">Kontinuierliche Aufgaben</h5>
                  {[
                    'Monatliche Datenschutz-Audits',
                    'Quartalweise Risikoanalyse',
                    'Jährliche Mitarbeiterschulung',
                    'Update der Dokumentation',
                    'Lieferanten-Audits'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-purple-600" />
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
                <span className="text-sm font-medium">Datenschutz in der Produktion</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Produktionsbranche Datenschutz
                <span className="bg-gradient-to-r from-gray-600 to-blue-600 bg-clip-text text-transparent block mt-2">
                  DSGVO-Compliance für Fertigungsbetriebe
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Umfassender Leitfaden für datenschutzkonforme Produktionsprozesse. 
                Von der Fertigungsdatenerfassung über Qualitätsmanagement bis zum Mitarbeiterdatenschutz.
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
                  Produktion Privacy Guide
                </Button>
              </div>
            </div>

            {/* Progress Indicator */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Produktion Datenschutz-Implementation</h3>
                  <Badge className="bg-green-100 text-green-700">95% Compliant</Badge>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                  {[
                    { label: 'Fertigung', progress: 94 },
                    { label: 'Qualität', progress: 96 },
                    { label: 'Lieferkette', progress: 92 },
                    { label: 'Mitarbeiter', progress: 98 },
                    { label: 'IT-Security', progress: 95 },
                    { label: 'Compliance', progress: 97 }
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

        {/* Sticky Navigation with ToC */}
        <nav className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm" aria-label="Inhaltsverzeichnis">
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
        </nav>

        {/* Main Content Sections */}
        <div className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto space-y-20">
              {/* Überblick Section with proper scroll margin */}
              <section id="ueberblick" className="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                  id="datenschutz-produktion-ueberblick"
                >
                  Datenschutz in der Produktion - Überblick
                </motion.h2>
                {renderOverview()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Produktionsdaten Section with proper scroll margin */}
              <section id="produktionsdaten" className="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                  id="produktionsdaten-fertigungsinformationen"
                >
                  Produktionsdaten & Fertigungsinformationen
                </motion.h2>
                {renderProductionData()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Qualitätssicherung Section with proper scroll margin */}
              <section id="qualitaet" className="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                  id="qualitaetssicherung-compliance"
                >
                  Qualitätssicherung & Compliance
                </motion.h2>
                {renderQualityManagement()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Lieferkette Section with proper scroll margin */}
              <section id="lieferkette" className="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                  id="lieferkette-datenaustausch"
                >
                  Lieferkette & Datenaustausch
                </motion.h2>
                {renderSupplyChain()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Mitarbeiterdaten Section with proper scroll margin */}
              <section id="mitarbeiter" className="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                  id="mitarbeiterdatenschutz-produktion"
                >
                  Mitarbeiterdatenschutz
                </motion.h2>
                {renderEmployeeData()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Umsetzung Section with proper scroll margin */}
              <section id="umsetzung" className="space-y-8" style={{ scrollMarginTop: '96px' }}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                  id="umsetzung-implementation"
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
                  <Link to="/wissen/branchen/industrie-40" className="block">
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors">
                      <Factory className="h-5 w-5 text-purple-600 mb-2" />
                      <div className="font-medium">Industrie 4.0</div>
                      <div className="text-sm text-gray-600">Smart Factory Datenschutz</div>
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
                      <Wrench className="h-5 w-5 text-green-600 mb-2" />
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

export default ProduktionDatenschutzGuide;