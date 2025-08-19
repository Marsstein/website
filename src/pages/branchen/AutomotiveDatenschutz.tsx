import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Car,
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
  Lock,
  Search,
  Package,
  Truck,
  AlertCircle,
  Navigation,
  Cloud,
  Cpu,
  Radio,
  MapPin,
  Camera,
  Mic,
  Volume2,
  BrainCircuit,
  Network,
  ShieldCheck,
  FileX,
  UserX,
  Ban,
  CheckSquare,
  X,
  ChevronDown,
  Heart,
  Gauge,
  Wrench,
  CircuitBoard,
  Waves,
  Satellite,
  HardDrive,
  ExternalLink,
  BarChart3,
  LineChart,
  Phone,
  User,
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const AutomotiveDatenschutz = () => {
  const [activeSection, setActiveSection] = useState<string>('ueberblick');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const navigationItems = [
    { id: 'ueberblick', label: 'Überblick', icon: Car },
    { id: 'connected-car', label: 'Connected Car', icon: Wifi },
    { id: 'fahrzeugdaten', label: 'Fahrzeugdaten', icon: Database },
    { id: 'telematik', label: 'Telematik & GPS', icon: Navigation },
    { id: 'infotainment', label: 'Infotainment', icon: Smartphone },
    { id: 'compliance', label: 'Compliance', icon: Shield }
  ];

  const scrollToSection = (sectionId: string) => {
    window.history.pushState(null, '', `#${sectionId}`);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
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
      
      const scrollPosition = window.scrollY + 150;
      
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

  const automotiveDataTypes = [
    {
      category: 'Fahrzeugdaten',
      icon: Gauge,
      data: [
        'Geschwindigkeit & Beschleunigung',
        'Motor- und Getriebedaten',
        'Kraftstoffverbrauch & Emissionen',
        'Wartungsintervalle & Fehlercodes',
        'Fahrstil & Fahrverhalten'
      ],
      risk: 'high'
    },
    {
      category: 'Standortdaten',
      icon: MapPin,
      data: [
        'GPS-Position in Echtzeit',
        'Bewegungsprofile & Routen',
        'Parkplätze & Aufenthaltsorte',
        'Geschwindigkeitsüberschreitungen',
        'Grenzübertritte'
      ],
      risk: 'critical'
    },
    {
      category: 'Personendaten',
      icon: Users,
      data: [
        'Fahrer-Identifikation',
        'Kontakte & Anruflisten',
        'Musikpräferenzen',
        'Sprachaufzeichnungen',
        'Biometrische Daten'
      ],
      risk: 'high'
    },
    {
      category: 'Umgebungsdaten',
      icon: Camera,
      data: [
        'Kamera-Aufnahmen (360°)',
        'Radar- & LIDAR-Daten',
        'Verkehrssituation',
        'Wetterbedingungen',
        'Straßenzustand'
      ],
      risk: 'medium'
    }
  ];

  const connectedCarFeatures = [
    {
      feature: 'Over-the-Air Updates',
      description: 'Software-Updates ohne Werkstattbesuch',
      privacy: 'Übertragung von Fahrzeugdaten an Hersteller',
      icon: Download
    },
    {
      feature: 'Remote Services',
      description: 'Fahrzeugsteuerung per App',
      privacy: 'Standortzugriff und Fahrzeugstatus',
      icon: Smartphone
    },
    {
      feature: 'Predictive Maintenance',
      description: 'Vorhersage von Wartungsbedarf',
      privacy: 'Analyse von Fahrverhalten und Nutzung',
      icon: Wrench
    },
    {
      feature: 'Emergency Call (eCall)',
      description: 'Automatischer Notruf bei Unfall',
      privacy: 'Übertragung von Standort und Fahrzeugdaten',
      icon: Phone
    }
  ];

  const complianceRequirements = [
    {
      regulation: 'DSGVO / GDPR',
      requirements: [
        'Transparenz über Datenverarbeitung',
        'Einwilligung für nicht-notwendige Datenerhebung',
        'Recht auf Löschung (soweit technisch möglich)',
        'Datenportabilität für persönliche Daten'
      ],
      deadline: 'Seit Mai 2018'
    },
    {
      regulation: 'UN-R 155/156 (Cybersecurity)',
      requirements: [
        'Cybersecurity Management System',
        'Software Update Management System',
        'Risk Assessment für Fahrzeugsysteme',
        'Incident Response Prozesse'
      ],
      deadline: 'Ab Juli 2024 für neue Fahrzeugtypen'
    },
    {
      regulation: 'Data Act (geplant)',
      requirements: [
        'Zugang zu Fahrzeugdaten für Nutzer',
        'Datenportabilität zwischen Diensten',
        'Faire Datennutzungsverträge',
        'B2B & B2G Datenaustausch'
      ],
      deadline: 'Voraussichtlich 2025'
    }
  ];

  const renderOverview = () => (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { label: 'Datenvolumen/Fahrzeug', value: '25 GB/Stunde', icon: Database, trend: '+150%' },
          { label: 'Sensoren/Fahrzeug', value: '100-200', icon: CircuitBoard, trend: '+40%' },
          { label: 'Software-Codezeilen', value: '100+ Mio.', icon: Code, trend: '+200%' },
          { label: 'Connected Cars 2025', value: '75%', icon: Wifi, trend: 'Prognose' }
        ].map((stat, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <stat.icon className="h-8 w-8 text-blue-600" />
                <Badge variant="secondary" className="text-xs">
                  {stat.trend}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </CardContent>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none" />
          </Card>
        ))}
      </div>

      <Card className="border-blue-200 bg-blue-50/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-blue-600" />
            Datenschutz-Herausforderungen in der Automobilindustrie
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Car className="h-4 w-4" />
                Technische Komplexität
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Über 100 ECUs (Electronic Control Units) pro Fahrzeug</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Heterogene Systemlandschaft verschiedener Zulieferer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Lange Produktlebenszyklen (10-15 Jahre)</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Regulatorische Anforderungen
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                  <span>Konflikt zwischen Funktionalität und Privacy</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                  <span>Internationale Datentransfers bei globalen Herstellern</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                  <span>Unklare Verantwortlichkeiten in der Lieferkette</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Datenerhebung im Fahrzeug</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {automotiveDataTypes.map((type, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={cn(
                    "p-2 rounded-lg",
                    type.risk === 'critical' && "bg-red-100",
                    type.risk === 'high' && "bg-orange-100",
                    type.risk === 'medium' && "bg-yellow-100"
                  )}>
                    <type.icon className={cn(
                      "h-5 w-5",
                      type.risk === 'critical' && "text-red-600",
                      type.risk === 'high' && "text-orange-600",
                      type.risk === 'medium' && "text-yellow-600"
                    )} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{type.category}</h4>
                      <Badge variant={
                        type.risk === 'critical' ? 'destructive' : 
                        type.risk === 'high' ? 'destructive' : 
                        'secondary'
                      } className="text-xs">
                        {type.risk === 'critical' ? 'Kritisch' : 
                         type.risk === 'high' ? 'Hoch' : 
                         'Mittel'}
                      </Badge>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {type.data.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                          <span className="text-xs">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Stakeholder im Automotive-Ökosystem</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'OEM (Fahrzeughersteller)', role: 'Hauptverantwortlicher für Datenverarbeitung', icon: Building2 },
                { name: 'Tier-1/2 Zulieferer', role: 'Komponenten mit eigener Datenverarbeitung', icon: Package },
                { name: 'Werkstätten', role: 'Zugriff auf Diagnose- und Wartungsdaten', icon: Wrench },
                { name: 'Versicherungen', role: 'Telematik-Tarife und Schadensanalyse', icon: Shield },
                { name: 'Behörden', role: 'Zugriff bei Unfällen oder Ermittlungen', icon: Building2 },
                { name: 'App-Entwickler', role: 'Third-Party Services und Infotainment', icon: Smartphone }
              ].map((stakeholder, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <stakeholder.icon className="h-5 w-5 text-blue-600" />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{stakeholder.name}</div>
                    <div className="text-xs text-muted-foreground">{stakeholder.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );

  const renderConnectedCar = () => (
    <>
      <Card className="border-green-200">
        <CardHeader className="bg-green-50">
          <CardTitle className="flex items-center gap-2">
            <Wifi className="h-5 w-5 text-green-600" />
            Connected Car Services & Datenschutz
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-2">
            {connectedCarFeatures.map((feature, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <feature.icon className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{feature.feature}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
                    <div className="flex items-start gap-2 text-sm">
                      <Eye className="h-4 w-4 text-orange-600 mt-0.5" />
                      <span className="text-orange-700 dark:text-orange-400">{feature.privacy}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              Backend-Infrastruktur
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Server className="h-4 w-4 text-blue-600 mt-0.5" />
                <span>Zentrale Datenplattformen der Hersteller</span>
              </li>
              <li className="flex items-start gap-2">
                <Globe className="h-4 w-4 text-blue-600 mt-0.5" />
                <span>Globale Datenspeicherung und -verarbeitung</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="h-4 w-4 text-blue-600 mt-0.5" />
                <span>Security Operations Center (SOC)</span>
              </li>
              <li className="flex items-start gap-2">
                <Database className="h-4 w-4 text-blue-600 mt-0.5" />
                <span>Big Data Analytics für Produktverbesserung</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Radio className="h-5 w-5" />
              Kommunikationstechnologien
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Wifi className="h-4 w-4 text-green-600 mt-0.5" />
                <span>4G/5G Mobilfunk für Echtzeitdaten</span>
              </li>
              <li className="flex items-start gap-2">
                <Waves className="h-4 w-4 text-green-600 mt-0.5" />
                <span>V2X (Vehicle-to-Everything)</span>
              </li>
              <li className="flex items-start gap-2">
                <Satellite className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Satellitennavigation (GPS, Galileo)</span>
              </li>
              <li className="flex items-start gap-2">
                <Radio className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Bluetooth/WiFi für lokale Dienste</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Sicherheitsmaßnahmen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Key className="h-4 w-4 text-red-600 mt-0.5" />
                <span>Ende-zu-Ende Verschlüsselung</span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="h-4 w-4 text-red-600 mt-0.5" />
                <span>Secure Boot & Code Signing</span>
              </li>
              <li className="flex items-start gap-2">
                <Fingerprint className="h-4 w-4 text-red-600 mt-0.5" />
                <span>Authentifizierung & Autorisierung</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                <span>Intrusion Detection Systems</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Datenschutz by Design für Connected Services</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Technische Maßnahmen
              </h4>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Datenminimierung durch Edge Computing</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Anonymisierung von Bewegungsprofilen</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Pseudonymisierung von Nutzeridentitäten</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Lokale Datenverarbeitung wo möglich</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Automatische Datenlöschung nach Zweckerfüllung</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Granulare Einwilligungsoptionen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderFahrzeugdaten = () => (
    <>
      <Card className="border-orange-200">
        <CardHeader className="bg-orange-50">
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-orange-600" />
            Kategorisierung von Fahrzeugdaten
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Personenbezogene Daten
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>• Fahrername & Kontaktdaten</li>
                  <li>• Fahrzeug-ID verknüpft mit Halter</li>
                  <li>• Zahlungsinformationen</li>
                  <li>• Biometrische Daten (Stimme, Gesicht)</li>
                  <li>• Smartphone-Kontakte</li>
                </ul>
                <Badge className="mt-2" variant="destructive">DSGVO relevant</Badge>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Standortbezogene Daten
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>• GPS-Koordinaten</li>
                  <li>• Fahrtrouten & Ziele</li>
                  <li>• Parkplätze & Aufenthaltsdauer</li>
                  <li>• Geschwindigkeit je Streckenabschnitt</li>
                  <li>• Grenzübergänge</li>
                </ul>
                <Badge className="mt-2" variant="destructive">Besonders sensibel</Badge>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Gauge className="h-4 w-4" />
                  Technische Daten
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>• Motordaten & Diagnose</li>
                  <li>• Verschleißzustand</li>
                  <li>• Fehlercodes</li>
                  <li>• Kraftstoffverbrauch</li>
                  <li>• Reifendruck & Temperatur</li>
                </ul>
                <Badge className="mt-2" variant="secondary">Meist anonymisierbar</Badge>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Besondere Risiken bei Fahrzeugdaten
              </h4>
              <div className="grid gap-3 md:grid-cols-2 text-sm">
                <div>
                  <strong>Profilbildung:</strong>
                  <ul className="mt-1 space-y-1 ml-4">
                    <li>• Fahrverhalten & Persönlichkeit</li>
                    <li>• Wirtschaftliche Situation</li>
                    <li>• Soziale Kontakte & Beziehungen</li>
                  </ul>
                </div>
                <div>
                  <strong>Missbrauchspotential:</strong>
                  <ul className="mt-1 space-y-1 ml-4">
                    <li>• Überwachung & Stalking</li>
                    <li>• Diskriminierung bei Versicherungen</li>
                    <li>• Manipulation von Beweismitteln</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Datenflüsse im Fahrzeug</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-gray-300"></div>
                {[
                  { title: 'Sensoren', desc: 'Erfassung von Rohdaten', icon: CircuitBoard },
                  { title: 'ECUs', desc: 'Verarbeitung & Aggregation', icon: Cpu },
                  { title: 'Gateway', desc: 'Zentrale Kommunikation', icon: Network },
                  { title: 'Backend', desc: 'Cloud-Speicherung & Analyse', icon: Cloud }
                ].map((step, index) => (
                  <div key={index} className="relative flex items-center gap-4 mb-4">
                    <div className="z-10 p-2 bg-white border-2 border-gray-300 rounded-full">
                      <step.icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 p-3 bg-gray-50 rounded-lg">
                      <h5 className="font-semibold">{step.title}</h5>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Zugriffsrechte verwalten</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { entity: 'Fahrzeughalter', access: 'Vollzugriff auf eigene Daten', level: 'full' },
                { entity: 'Werkstatt', access: 'Diagnosedaten bei Wartung', level: 'limited' },
                { entity: 'Hersteller', access: 'Aggregierte & anonymisierte Daten', level: 'restricted' },
                { entity: 'Versicherung', access: 'Nach expliziter Einwilligung', level: 'consent' },
                { entity: 'Behörden', access: 'Bei rechtlicher Grundlage', level: 'legal' }
              ].map((access, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{access.entity}</div>
                    <div className="text-xs text-muted-foreground">{access.access}</div>
                  </div>
                  <Badge variant={
                    access.level === 'full' ? 'default' :
                    access.level === 'limited' ? 'secondary' :
                    access.level === 'restricted' ? 'outline' :
                    access.level === 'consent' ? 'outline' :
                    'destructive'
                  }>
                    {access.level === 'full' ? 'Vollzugriff' :
                     access.level === 'limited' ? 'Begrenzt' :
                     access.level === 'restricted' ? 'Eingeschränkt' :
                     access.level === 'consent' ? 'Mit Einwilligung' :
                     'Rechtliche Basis'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Best Practices für Datenmanagement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Database className="h-4 w-4" />
                Datenspeicherung
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Klare Trennung von personen- und fahrzeugbezogenen Daten</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Verschlüsselung at rest und in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Regelmäßige Löschung nach definierten Fristen</span>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Datenschutzkonzepte
              </h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Privacy Dashboard im Fahrzeug</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Opt-in/Opt-out für nicht-kritische Services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                  <span>Transparente Datenschutzerklärungen</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderTelematik = () => (
    <>
      <Card className="border-purple-200">
        <CardHeader className="bg-purple-50">
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-5 w-5 text-purple-600" />
            Telematik & GPS-Systeme
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">eCall-System (Pflicht seit 2018)</h4>
                <div className="space-y-2 text-sm">
                  <div className="p-3 bg-red-50 rounded-lg">
                    <strong className="text-red-700">Automatische Datenübertragung bei:</strong>
                    <ul className="mt-1 space-y-1 ml-4">
                      <li>• Schweren Unfällen (Airbag-Auslösung)</li>
                      <li>• Manueller Aktivierung (SOS-Taste)</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <strong className="text-blue-700">Übertragene Daten:</strong>
                    <ul className="mt-1 space-y-1 ml-4">
                      <li>• GPS-Position des Unfalls</li>
                      <li>• Fahrtrichtung</li>
                      <li>• Fahrzeugtyp & Antriebsart</li>
                      <li>• Anzahl der Insassen</li>
                      <li>• Zeitstempel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Kommerzielle Telematik-Dienste</h4>
                <div className="space-y-3">
                  {[
                    { service: 'Pay-as-you-drive Versicherung', data: 'Fahrverhalten, Strecken, Zeiten' },
                    { service: 'Flottenmanagement', data: 'Echtzeit-Tracking, Fahreridentifikation' },
                    { service: 'Stolen Vehicle Tracking', data: 'Permanente Standortüberwachung' },
                    { service: 'Predictive Maintenance', data: 'Fahrzeugzustand, Nutzungsmuster' }
                  ].map((item, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="font-medium text-sm">{item.service}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        <Eye className="inline h-3 w-3 mr-1" />
                        {item.data}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Standortgenauigkeit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">GPS Standard</span>
                <Badge>~5-10m</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">GPS + GLONASS</span>
                <Badge>~3-5m</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">RTK/DGPS</span>
                <Badge variant="secondary">~1-2cm</Badge>
              </div>
              <div className="mt-3 p-3 bg-orange-50 rounded-lg text-sm">
                <AlertTriangle className="inline h-4 w-4 text-orange-600 mr-1" />
                Höhere Genauigkeit = Größeres Datenschutzrisiko
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Datenaufbewahrung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-sm mb-1">eCall-Daten</div>
                <div className="text-xs text-muted-foreground">13 Stunden nach Notruf</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-sm mb-1">Telematik-Versicherung</div>
                <div className="text-xs text-muted-foreground">3-10 Jahre (vertragsabhängig)</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="font-medium text-sm mb-1">Hersteller-Backend</div>
                <div className="text-xs text-muted-foreground">Oft unbegrenzt (anonymisiert)</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <UserCheck className="h-5 w-5" />
              Nutzerrechte
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Deaktivierung kommerzieller Dienste</span>
              </div>
              <div className="flex items-start gap-2">
                <X className="h-4 w-4 text-red-600 mt-0.5" />
                <span>eCall nicht deaktivierbar (gesetzlich)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                <span>Auskunft über gespeicherte Daten</span>
              </div>
              <div className="flex items-start gap-2">
                <AlertCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                <span>Löschung nur teilweise möglich</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Datenschutzkonformer Einsatz von Telematik</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-600" />
                  Technische Schutzmaßnahmen
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Verschlüsselung der GPS-Daten</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Pseudonymisierung von Bewegungsprofilen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Geofencing für sensible Bereiche</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Automatisches Löschen alter Standortdaten</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-blue-600" />
                  Organisatorische Maßnahmen
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Klare Zweckbindung definieren</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Transparente Nutzerinformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Einwilligung für kommerzielle Nutzung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600">✓</span>
                    <span>Regelmäßige Datenschutz-Audits</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 rounded-lg">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                Besondere Vorsicht bei
              </h4>
              <div className="grid gap-2 md:grid-cols-2 text-sm">
                <div>• Firmenwagen mit Privatnutzung</div>
                <div>• Grenzüberschreitenden Fahrten</div>
                <div>• Weitergabe an Dritte (z.B. Versicherungen)</div>
                <div>• Langzeitspeicherung von Bewegungsprofilen</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderInfotainment = () => (
    <>
      <Card className="border-indigo-200">
        <CardHeader className="bg-indigo-50">
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-indigo-600" />
            Infotainment & Connectivity
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Smartphone-Integration</h4>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Smartphone className="h-4 w-4" />
                      <span className="font-medium text-sm">Apple CarPlay / Android Auto</span>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1 ml-6">
                      <li>• Zugriff auf Kontakte & Anrufliste</li>
                      <li>• Nachrichten & Benachrichtigungen</li>
                      <li>• Standort & Navigation</li>
                      <li>• Musik & Medienbibliothek</li>
                    </ul>
                  </div>

                  <div className="p-3 border rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Wifi className="h-4 w-4" />
                      <span className="font-medium text-sm">Bluetooth & WiFi</span>
                    </div>
                    <ul className="text-xs text-muted-foreground space-y-1 ml-6">
                      <li>• Automatische Gerätekopplung</li>
                      <li>• Kontaktsynchronisation</li>
                      <li>• Hotspot-Funktionalität</li>
                      <li>• App-Datenübertragung</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Sprachassistenten</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Mic className="h-4 w-4 text-orange-600" />
                      <span className="font-medium text-sm">Datenerfassung</span>
                    </div>
                    <ul className="text-xs space-y-1">
                      <li>• Sprachbefehle & Aktivierungswort</li>
                      <li>• Umgebungsgeräusche</li>
                      <li>• Stimmprofile der Nutzer</li>
                      <li>• Kontext der Anfragen</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="h-4 w-4 text-red-600" />
                      <span className="font-medium text-sm">Risiken</span>
                    </div>
                    <ul className="text-xs space-y-1">
                      <li>• Dauerhafte Mikrofonaktivierung</li>
                      <li>• Cloud-Verarbeitung der Sprache</li>
                      <li>• Profilbildung über Anfragen</li>
                      <li>• Mithören durch Dritte</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Camera className="h-5 w-5" />
              Kamera-Systeme
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="font-medium text-sm">Innenraumkameras</div>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• Fahrerüberwachung (Müdigkeit)</li>
                <li>• Gesichtserkennung</li>
                <li>• Videotelefonie</li>
                <li>• Unfallaufzeichnung</li>
              </ul>
              <div className="font-medium text-sm mt-3">Außenkameras</div>
              <ul className="text-xs space-y-1 text-muted-foreground">
                <li>• 360° Rundumsicht</li>
                <li>• Dashcam-Funktion</li>
                <li>• Verkehrszeichenerkennung</li>
                <li>• Fußgängererkennung</li>
              </ul>
              <Badge variant="destructive" className="mt-2 text-xs">
                Hohe Datenschutzrelevanz
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <HardDrive className="h-5 w-5" />
              Lokale Datenspeicherung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium">Nutzerprofile</div>
                <div className="text-xs text-muted-foreground">Sitzposition, Klimaeinstellungen, Favoriten</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium">Navigationsverlauf</div>
                <div className="text-xs text-muted-foreground">Letzte Ziele, Heimatadresse, POIs</div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="text-sm font-medium">Mediendaten</div>
                <div className="text-xs text-muted-foreground">Gekoppelte Geräte, Wiedergabelisten</div>
              </div>
              <div className="text-xs text-orange-600 mt-2">
                <AlertTriangle className="inline h-3 w-3 mr-1" />
                Daten bleiben oft nach Fahrzeugverkauf
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              Cloud-Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <Globe className="h-4 w-4 text-blue-600 mt-0.5" />
                <div>
                  <div className="font-medium">Online-Dienste</div>
                  <div className="text-xs text-muted-foreground">Wetter, News, Verkehr</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Download className="h-4 w-4 text-green-600 mt-0.5" />
                <div>
                  <div className="font-medium">App-Store</div>
                  <div className="text-xs text-muted-foreground">Third-Party Apps</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Server className="h-4 w-4 text-purple-600 mt-0.5" />
                <div>
                  <div className="font-medium">Backup & Sync</div>
                  <div className="text-xs text-muted-foreground">Einstellungen, Favoriten</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Datenschutz-Checkliste für Infotainment</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <UserCheck className="h-4 w-4" />
                Vor der Nutzung
              </h4>
              <div className="space-y-2">
                {[
                  'Datenschutzerklärung des Systems prüfen',
                  'Nur notwendige Berechtigungen erteilen',
                  'Automatische Synchronisation deaktivieren',
                  'Sprachassistent-Einstellungen anpassen'
                ].map((item, index) => (
                  <label key={index} className="flex items-center gap-2 text-sm">
                    <CheckSquare className="h-4 w-4 text-gray-400" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                <Truck className="h-4 w-4" />
                Vor Fahrzeugweitergabe
              </h4>
              <div className="space-y-2">
                {[
                  'Alle persönlichen Daten löschen',
                  'Bluetooth-Kopplungen entfernen',
                  'Navigationsverlauf zurücksetzen',
                  'Auf Werkseinstellungen zurücksetzen'
                ].map((item, index) => (
                  <label key={index} className="flex items-center gap-2 text-sm">
                    <CheckSquare className="h-4 w-4 text-gray-400" />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-4 w-4 text-blue-600" />
              Empfehlungen
            </h4>
            <div className="grid gap-2 md:grid-cols-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Gastmodus für temporäre Nutzer verwenden</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Regelmäßige Privacy-Einstellungen überprüfen</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Kritische Apps nicht mit Fahrzeug verbinden</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>Offline-Alternativen bevorzugen</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  const renderCompliance = () => (
    <>
      <Card className="border-red-200">
        <CardHeader className="bg-red-50">
          <CardTitle className="flex items-center gap-2">
            <Scale className="h-5 w-5 text-red-600" />
            Regulatorische Anforderungen
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {complianceRequirements.map((reg, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-lg">{reg.regulation}</h4>
                  <Badge variant="outline">{reg.deadline}</Badge>
                </div>
                <div className="grid gap-2">
                  {reg.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Verantwortlichkeiten nach DSGVO</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="h-4 w-4 text-blue-600" />
                  <span className="font-semibold">Fahrzeughersteller (OEM)</span>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Hauptverantwortlicher für Fahrzeugsysteme</li>
                  <li>• Privacy by Design bei Entwicklung</li>
                  <li>• Datenschutz-Folgenabschätzung</li>
                </ul>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="h-4 w-4 text-green-600" />
                  <span className="font-semibold">Zulieferer</span>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Auftragsverarbeiter für OEM</li>
                  <li>• Eigene Verantwortung bei eigenen Services</li>
                  <li>• Technische Sicherheitsmaßnahmen</li>
                </ul>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  <span className="font-semibold">Händler & Werkstätten</span>
                </div>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Verantwortlich für Kundendaten</li>
                  <li>• Löschung bei Fahrzeugweitergabe</li>
                  <li>• Schulung des Personals</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Technische & Organisatorische Maßnahmen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="space-y-2">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Security by Design
                </h4>
                <div className="pl-6 space-y-1 text-sm">
                  <div>• Secure Boot & Code Signing</div>
                  <div>• Hardware Security Module (HSM)</div>
                  <div>• Intrusion Detection System</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  <Lock className="h-4 w-4" />
                  Zugriffskontrolle
                </h4>
                <div className="pl-6 space-y-1 text-sm">
                  <div>• Role-Based Access Control</div>
                  <div>• Multi-Faktor-Authentifizierung</div>
                  <div>• Audit-Logging</div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-sm flex items-center gap-2">
                  <FileCheck className="h-4 w-4" />
                  Dokumentation
                </h4>
                <div className="pl-6 space-y-1 text-sm">
                  <div>• Verzeichnis von Verarbeitungstätigkeiten</div>
                  <div>• Datenschutz-Folgenabschätzung</div>
                  <div>• Incident Response Plan</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Umsetzungsfahrplan für Automotive-Unternehmen</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {[
                {
                  phase: 'Assessment Phase',
                  duration: '2-3 Monate',
                  tasks: [
                    'Bestandsaufnahme aller Datenflüsse',
                    'Identifikation von Risiken',
                    'Gap-Analyse zu Anforderungen'
                  ],
                  icon: Search,
                  color: 'blue'
                },
                {
                  phase: 'Design Phase',
                  duration: '3-4 Monate',
                  tasks: [
                    'Privacy by Design Konzepte',
                    'Technische Architektur',
                    'Prozessdefinition'
                  ],
                  icon: Lightbulb,
                  color: 'green'
                },
                {
                  phase: 'Implementation',
                  duration: '6-12 Monate',
                  tasks: [
                    'Technische Umsetzung',
                    'Schulung der Mitarbeiter',
                    'Pilotprojekte'
                  ],
                  icon: Settings,
                  color: 'orange'
                },
                {
                  phase: 'Validation',
                  duration: 'Kontinuierlich',
                  tasks: [
                    'Audits & Zertifizierung',
                    'Monitoring & Verbesserung',
                    'Incident Management'
                  ],
                  icon: CheckCircle2,
                  color: 'purple'
                }
              ].map((phase, index) => (
                <div key={index} className="relative flex items-start gap-4 mb-6">
                  <div className={cn(
                    "z-10 p-3 rounded-full border-4 border-white",
                    phase.color === 'blue' && "bg-blue-100",
                    phase.color === 'green' && "bg-green-100",
                    phase.color === 'orange' && "bg-orange-100",
                    phase.color === 'purple' && "bg-purple-100"
                  )}>
                    <phase.icon className={cn(
                      "h-5 w-5",
                      phase.color === 'blue' && "text-blue-600",
                      phase.color === 'green' && "text-green-600",
                      phase.color === 'orange' && "text-orange-600",
                      phase.color === 'purple' && "text-purple-600"
                    )} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{phase.phase}</h4>
                      <Badge variant="outline" className="text-xs">{phase.duration}</Badge>
                    </div>
                    <ul className="space-y-1">
                      {phase.tasks.map((task, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  Vorteile der Compliance
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>• Wettbewerbsvorteil durch Vertrauen</li>
                  <li>• Vermeidung von Bußgeldern</li>
                  <li>• Internationale Marktfähigkeit</li>
                  <li>• Innovation durch Privacy by Design</li>
                </ul>
              </div>

              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-orange-600" />
                  Key Success Factors
                </h4>
                <ul className="space-y-1 text-sm">
                  <li>• Management Commitment</li>
                  <li>• Cross-funktionale Teams</li>
                  <li>• Kontinuierliche Verbesserung</li>
                  <li>• Transparente Kommunikation</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="container px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl">
                    <Car className="h-16 w-16 text-white" />
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Datenschutz in der Automobilindustrie
                </h1>
                <p className="text-xl mb-8 text-blue-100">
                  Von Connected Cars bis Autonomous Driving: Navigieren Sie sicher durch die komplexen 
                  Datenschutzanforderungen der modernen Mobilität
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                    <Download className="mr-2 h-5 w-5" />
                    Automotive DSGVO-Guide
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Phone className="mr-2 h-5 w-5" />
                    Beratung anfragen
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Stats */}
        <section className="py-12 bg-white dark:bg-gray-800 border-b">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: 'Daten pro Fahrzeug/Tag', value: '25 GB', icon: Database },
                  { label: 'Sensoren im Fahrzeug', value: '100+', icon: CircuitBoard },
                  { label: 'DSGVO-Bußgeldrisiko', value: '4% Umsatz', icon: Euro },
                  { label: 'Compliance-Aufwand', value: '+40%', icon: TrendingUp }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Navigation */}
        <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <nav className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setActiveSection(item.id);
                    }}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
                      activeSection === item.id
                        ? "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800"
                        : "hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-700 dark:hover:text-blue-400",
                      "border",
                      activeSection === item.id
                        ? "border-blue-200 dark:border-blue-800"
                        : "border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                    )}
                  >
                    <item.icon className={cn(
                      "h-4 w-4",
                      activeSection === item.id && "text-blue-600 dark:text-blue-500"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      activeSection === item.id && "text-blue-700 dark:text-blue-400"
                    )}>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-20">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto space-y-20">
              
              {/* Überblick Section */}
              <section id="ueberblick" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Die Datenrevolution im Automobil
                </motion.h2>
                {renderOverview()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Connected Car Section */}
              <section id="connected-car" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Connected Car Services
                </motion.h2>
                {renderConnectedCar()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Fahrzeugdaten Section */}
              <section id="fahrzeugdaten" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Fahrzeugdaten & Datenkategorien
                </motion.h2>
                {renderFahrzeugdaten()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Telematik Section */}
              <section id="telematik" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Telematik & GPS-Systeme
                </motion.h2>
                {renderTelematik()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Infotainment Section */}
              <section id="infotainment" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Infotainment & Connectivity
                </motion.h2>
                {renderInfotainment()}
              </section>

              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />

              {/* Compliance Section */}
              <section id="compliance" className="space-y-8 scroll-mt-32">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-8"
                >
                  Compliance & Umsetzung
                </motion.h2>
                {renderCompliance()}
              </section>
            </div>

            {/* CTA Section */}
            <div className="mt-20">
              <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0">
                <CardContent className="p-12 text-center">
                  <Car className="h-16 w-16 mx-auto mb-6 text-white/90" />
                  <h2 className="text-3xl font-bold mb-4">
                    Bereit für die Zukunft der Mobilität?
                  </h2>
                  <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                    Lassen Sie uns gemeinsam Ihre Datenschutz-Strategie für Connected und Autonomous Vehicles entwickeln.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                      <Calendar className="mr-2 h-5 w-5" />
                      Beratungstermin vereinbaren
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      <FileText className="mr-2 h-5 w-5" />
                      Whitepaper anfordern
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Links */}
            <Card className="mt-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5 text-blue-600" />
                  Weiterführende Ressourcen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Link to="/wissen/branchen/ecommerce-privacy" className="block">
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors">
                      <ShoppingCart className="h-5 w-5 text-orange-600 mb-2" />
                      <div className="font-medium">E-Commerce Privacy</div>
                      <div className="text-sm text-gray-600">Online-Handel & DSGVO</div>
                    </div>
                  </Link>
                  <Link to="/wissen/technologie/iot-datenschutz" className="block">
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors">
                      <Wifi className="h-5 w-5 text-green-600 mb-2" />
                      <div className="font-medium">IoT Datenschutz</div>
                      <div className="text-sm text-gray-600">Vernetzte Geräte</div>
                    </div>
                  </Link>
                  <Link to="/wissen/compliance/un-r-155" className="block">
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors">
                      <Shield className="h-5 w-5 text-purple-600 mb-2" />
                      <div className="font-medium">UN-R 155/156</div>
                      <div className="text-sm text-gray-600">Cybersecurity Regulation</div>
                    </div>
                  </Link>
                  <Link to="/wissen/ki-ethik" className="block">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors">
                      <BrainCircuit className="h-5 w-5 text-red-600 mb-2" />
                      <div className="font-medium">KI & Ethik</div>
                      <div className="text-sm text-gray-600">Autonomous Driving</div>
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

export default AutomotiveDatenschutz;