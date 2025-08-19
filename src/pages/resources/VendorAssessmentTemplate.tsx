import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { 
  Users, 
  ChevronRight, 
  Star,
  Calendar,
  Download,
  Mail,
  Plus,
  Trash2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Shield,
  FileText,
  Building,
  Globe,
  Scale,
  Eye,
  Lock,
  Server,
  BarChart3,
  ArrowRight,
  Zap,
  Lightbulb,
  HelpCircle,
  Info,
  Target,
  TrendingUp,
  Activity,
  Settings,
  BookOpen,
  ExternalLink,
  Timer,
  Award
} from 'lucide-react';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';

export const VendorAssessmentTemplate: React.FC = () => {
  const [vendors, setVendors] = useState([
    { id: '1', name: '', category: '', riskLevel: '' }
  ]);
  const [currentVendor, setCurrentVendor] = useState(0);
  const [assessmentData, setAssessmentData] = useState<Record<string, any>>({});
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [completedVendors, setCompletedVendors] = useState<Set<string>>(new Set());
  const [assessmentStep, setAssessmentStep] = useState('overview');

  const assessmentCategories = [
    {
      id: 'basic_info',
      title: 'Grundlegende Informationen',
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      description: 'Allgemeine Angaben zum Dienstleister',
      criteria: [
        {
          id: 'company_name',
          title: 'Vollständiger Firmenname',
          type: 'text',
          required: true,
          description: 'Rechtlicher Name des Unternehmens'
        },
        {
          id: 'business_address',
          title: 'Geschäftsadresse',
          type: 'text',
          required: true,
          description: 'Vollständige Geschäftsadresse'
        },
        {
          id: 'contact_person',
          title: 'Datenschutz-Ansprechpartner',
          type: 'text',
          required: true,
          description: 'Name und Kontaktdaten des Datenschutzverantwortlichen'
        },
        {
          id: 'service_description',
          title: 'Beschreibung der Dienstleistung',
          type: 'textarea',
          required: true,
          description: 'Detaillierte Beschreibung der erbrachten Services'
        }
      ]
    },
    {
      id: 'data_processing',
      title: 'Datenverarbeitung',
      icon: Server,
      color: 'from-green-500 to-teal-500',
      description: 'Art und Umfang der Datenverarbeitung',
      criteria: [
        {
          id: 'data_categories',
          title: 'Kategorien personenbezogener Daten',
          type: 'multiselect',
          required: true,
          options: [
            'Stammdaten (Name, Adresse)',
            'Kontaktdaten (E-Mail, Telefon)',
            'Beschäftigtendaten',
            'Vertragsdaten',
            'Zahlungsdaten',
            'Protokolldaten',
            'Besondere Kategorien (Art. 9 DSGVO)'
          ],
          description: 'Welche Arten personenbezogener Daten werden verarbeitet?'
        },
        {
          id: 'processing_purposes',
          title: 'Zwecke der Verarbeitung',
          type: 'multiselect',
          required: true,
          options: [
            'Vertragserfüllung',
            'Kundenbetreuung',
            'Marketing/Werbung',
            'Analyse/Statistik',
            'IT-Services',
            'Buchhaltung',
            'Personalverwaltung'
          ],
          description: 'Für welche Zwecke werden die Daten verarbeitet?'
        },
        {
          id: 'data_subjects',
          title: 'Betroffene Personengruppen',
          type: 'multiselect',
          required: true,
          options: [
            'Kunden',
            'Interessenten',
            'Beschäftigte',
            'Geschäftspartner',
            'Website-Besucher',
            'Sonstige'
          ],
          description: 'Welche Personengruppen sind betroffen?'
        },
        {
          id: 'data_volume',
          title: 'Ungefährer Datenumfang',
          type: 'radio',
          required: true,
          options: [
            { value: 'low', label: 'Gering (< 1.000 Datensätze)', points: 1 },
            { value: 'medium', label: 'Mittel (1.000 - 10.000)', points: 2 },
            { value: 'high', label: 'Hoch (10.000 - 100.000)', points: 3 },
            { value: 'very_high', label: 'Sehr hoch (> 100.000)', points: 4 }
          ],
          description: 'Wie viele Datensätze werden etwa verarbeitet?'
        }
      ]
    },
    {
      id: 'security_measures',
      title: 'Sicherheitsmaßnahmen',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      description: 'Technische und organisatorische Maßnahmen',
      criteria: [
        {
          id: 'encryption',
          title: 'Verschlüsselung',
          type: 'radio',
          required: true,
          options: [
            { value: 'none', label: 'Keine Verschlüsselung', points: 0 },
            { value: 'basic', label: 'Basis-Verschlüsselung', points: 2 },
            { value: 'advanced', label: 'Erweiterte Verschlüsselung', points: 3 },
            { value: 'end_to_end', label: 'Ende-zu-Ende-Verschlüsselung', points: 4 }
          ],
          description: 'Welche Verschlüsselungsverfahren werden eingesetzt?'
        },
        {
          id: 'access_controls',
          title: 'Zugriffskontrolle',
          type: 'radio',
          required: true,
          options: [
            { value: 'basic', label: 'Einfache Passwörter', points: 1 },
            { value: 'mfa', label: 'Mehrfaktor-Authentifizierung', points: 3 },
            { value: 'rbac', label: 'Rollenbasierte Zugriffskontrolle', points: 4 },
            { value: 'zero_trust', label: 'Zero-Trust-Architektur', points: 5 }
          ],
          description: 'Wie ist die Zugriffskontrolle implementiert?'
        },
        {
          id: 'certifications',
          title: 'Zertifizierungen',
          type: 'multiselect',
          required: false,
          options: [
            'ISO 27001',
            'SOC 2',
            'BSI IT-Grundschutz',
            'Cloud Security Alliance',
            'TISAX',
            'Andere'
          ],
          description: 'Welche Sicherheitszertifizierungen besitzt der Anbieter?'
        },
        {
          id: 'incident_response',
          title: 'Incident Response Verfahren',
          type: 'radio',
          required: true,
          options: [
            { value: 'none', label: 'Keine dokumentierten Verfahren', points: 0 },
            { value: 'basic', label: 'Grundlegende Verfahren', points: 2 },
            { value: 'documented', label: 'Dokumentierte Verfahren', points: 3 },
            { value: 'tested', label: 'Getestete und zertifizierte Verfahren', points: 4 }
          ],
          description: 'Wie ist das Incident Response Management aufgestellt?'
        }
      ]
    },
    {
      id: 'compliance',
      title: 'Compliance & Rechtliches',
      icon: Scale,
      color: 'from-orange-500 to-red-500',
      description: 'Rechtliche Aspekte und Compliance-Status',
      criteria: [
        {
          id: 'gdpr_compliance',
          title: 'DSGVO-Konformität',
          type: 'radio',
          required: true,
          options: [
            { value: 'unknown', label: 'Unbekannt/Keine Angaben', points: 0 },
            { value: 'claimed', label: 'Wird behauptet', points: 1 },
            { value: 'documented', label: 'Dokumentiert nachgewiesen', points: 3 },
            { value: 'certified', label: 'Extern zertifiziert', points: 4 }
          ],
          description: 'Wie ist der DSGVO-Compliance-Status?'
        },
        {
          id: 'dpa_signed',
          title: 'Auftragsverarbeitungsvertrag (AVV)',
          type: 'radio',
          required: true,
          options: [
            { value: 'no', label: 'Nicht vorhanden', points: 0 },
            { value: 'template', label: 'Standard-Template', points: 2 },
            { value: 'customized', label: 'Individuell angepasst', points: 3 },
            { value: 'legal_reviewed', label: 'Rechtlich geprüft', points: 4 }
          ],
          description: 'Status des Auftragsverarbeitungsvertrags?'
        },
        {
          id: 'data_location',
          title: 'Datenverarbeitungsort',
          type: 'radio',
          required: true,
          options: [
            { value: 'unknown', label: 'Unbekannt', points: 0 },
            { value: 'eu', label: 'EU/EWR', points: 4 },
            { value: 'adequate', label: 'Angemessenheitsbeschluss', points: 3 },
            { value: 'safeguards', label: 'Mit geeigneten Garantien', points: 2 },
            { value: 'third_country', label: 'Drittland ohne Schutz', points: 0 }
          ],
          description: 'Wo werden die Daten verarbeitet?'
        },
        {
          id: 'subprocessors',
          title: 'Unterauftragsverarbeiter',
          type: 'radio',
          required: true,
          options: [
            { value: 'none', label: 'Keine Unterauftragsverarbeiter', points: 4 },
            { value: 'documented', label: 'Vollständig dokumentiert', points: 3 },
            { value: 'partially', label: 'Teilweise dokumentiert', points: 1 },
            { value: 'unknown', label: 'Unbekannt', points: 0 }
          ],
          description: 'Wie ist der Umgang mit Unterauftragsverarbeitern?'
        }
      ]
    }
  ];

  const addVendor = () => {
    const newId = (vendors.length + 1).toString();
    setVendors([...vendors, { id: newId, name: '', category: '', riskLevel: '' }]);
  };

  const removeVendor = (index: number) => {
    if (vendors.length > 1) {
      const newVendors = vendors.filter((_, i) => i !== index);
      setVendors(newVendors);
      if (currentVendor >= newVendors.length) {
        setCurrentVendor(newVendors.length - 1);
      }
    }
  };

  const updateVendor = (index: number, field: string, value: string) => {
    const newVendors = [...vendors];
    newVendors[index] = { ...newVendors[index], [field]: value };
    setVendors(newVendors);
  };

  const updateAssessmentData = (criteriaId: string, value: any) => {
    const vendorId = vendors[currentVendor].id;
    setAssessmentData(prev => ({
      ...prev,
      [vendorId]: {
        ...prev[vendorId],
        [criteriaId]: value
      }
    }));
  };

  const calculateRiskScore = (vendorId: string) => {
    const data = assessmentData[vendorId] || {};
    let totalPoints = 0;
    let maxPoints = 0;

    assessmentCategories.forEach(category => {
      category.criteria.forEach(criteria => {
        if (criteria.type === 'radio' && criteria.options) {
          const value = data[criteria.id];
          const option = criteria.options.find((opt: any) => opt.value === value);
          if (option) {
            totalPoints += option.points;
          }
          maxPoints += Math.max(...criteria.options.map((opt: any) => opt.points));
        }
      });
    });

    return maxPoints > 0 ? (totalPoints / maxPoints) * 100 : 0;
  };

  const getRiskLevel = (score: number) => {
    if (score >= 80) return { level: 'Niedrig', color: 'text-green-600', bgColor: 'bg-green-50', icon: CheckCircle };
    if (score >= 60) return { level: 'Mittel', color: 'text-yellow-600', bgColor: 'bg-yellow-50', icon: AlertTriangle };
    if (score >= 40) return { level: 'Hoch', color: 'text-orange-600', bgColor: 'bg-orange-50', icon: AlertTriangle };
    return { level: 'Sehr Hoch', color: 'text-red-600', bgColor: 'bg-red-50', icon: XCircle };
  };

  const currentVendorData = assessmentData[vendors[currentVendor]?.id] || {};
  const riskScore = calculateRiskScore(vendors[currentVendor]?.id);
  const riskLevel = getRiskLevel(riskScore);

  return (
    <>
      <SEOHead
        title="Vendor Assessment Template – Lieferanten DSGVO-Bewertung"
        description="Strukturierte Lieferanten-Bewertung: Datenschutz, IT-Sicherheit, Compliance systematisch prüfen. ✓ Bewertungsmatrix ✓ Risiko-Scoring ✓ Vorlagen. Jetzt Partner bewerten!"
        canonical="/assessment-center/vendor-assessment-template"
        keywords="vendor assessment template, lieferantenbewertung dsgvo, auftragsverarbeiter bewertung, supplier assessment"
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <Link to="/resources" className="hover:text-brand-red transition-colors">Resources</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Vendor-Assessment-Template</span>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 mb-3">
                  Systematische Dienstleister-Bewertung
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Vendor-Assessment-Template
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Strukturierte Bewertung und Auswahl DSGVO-konformer Auftragsverarbeiter und Dienstleister
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>4.8 (1.678 Downloads)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Aktualisiert: Januar 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart3 className="h-4 w-4" />
                    <span>Automatische Risikobewertung</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Management */}
      <section className="pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Vendor List */}
            <Card className="mb-8 border-2 border-indigo-200 dark:border-indigo-800">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Building className="h-6 w-6 text-indigo-600" />
                    Dienstleister verwalten
                  </div>
                  <Button 
                    onClick={addVendor}
                    className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white"
                    size="sm"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Hinzufügen
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {vendors.map((vendor, index) => (
                    <div key={vendor.id} className={cn(
                      "p-4 rounded-lg border-2 transition-all duration-200",
                      currentVendor === index 
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" 
                        : "border-gray-200 dark:border-gray-700 hover:border-indigo-300"
                    )}>
                      <div className="flex items-center gap-4">
                        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                          <Input
                            placeholder="Firmenname"
                            value={vendor.name}
                            onChange={(e) => updateVendor(index, 'name', e.target.value)}
                            className="bg-white dark:bg-gray-800"
                          />
                          <Input
                            placeholder="Kategorie (z.B. Cloud-Provider)"
                            value={vendor.category}
                            onChange={(e) => updateVendor(index, 'category', e.target.value)}
                            className="bg-white dark:bg-gray-800"
                          />
                          <div className="flex items-center gap-2">
                            {assessmentData[vendor.id] && (
                              <div className={cn(
                                "px-2 py-1 rounded text-xs font-medium",
                                getRiskLevel(calculateRiskScore(vendor.id)).bgColor,
                                getRiskLevel(calculateRiskScore(vendor.id)).color
                              )}>
                                {getRiskLevel(calculateRiskScore(vendor.id)).level}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            variant={currentVendor === index ? "default" : "outline"}
                            size="sm"
                            onClick={() => setCurrentVendor(index)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          {vendors.length > 1 && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => removeVendor(index)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Assessment Overview */}
            <Card className="mb-8 border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Activity className="h-6 w-6 text-indigo-600" />
                  Assessment-Dashboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-indigo-600 mb-2">
                      {vendors.filter(v => v.name).length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Registrierte Vendor</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {completedVendors.size}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Vollständig bewertet</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      {vendors.filter((v, i) => v.name && calculateRiskScore(v.id) < 60).length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Hohe Risiken</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {Math.round(vendors.filter(v => v.name).reduce((sum, v) => sum + calculateRiskScore(v.id), 0) / Math.max(1, vendors.filter(v => v.name).length))}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Durchschnittlicher Score</div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap gap-3 items-center justify-center">
                  <Button 
                    onClick={() => setShowTips(!showTips)}
                    variant="outline"
                    size="sm"
                    className="border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                  >
                    <Lightbulb className="mr-2 h-4 w-4" />
                    {showTips ? 'Tipps ausblenden' : 'Assessment-Tipps anzeigen'}
                  </Button>
                  <Button 
                    onClick={addVendor}
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Vendor hinzufügen
                  </Button>
                </div>

                {/* Assessment Tips */}
                {showTips && (
                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h5 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Assessment-Tipps</h5>
                        <div className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                          <div className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p>Beginnen Sie mit kritischen Dienstleistern (Cloud-Provider, Payment-Services)</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p>Fordern Sie Zertifizierungen und Compliance-Dokumente an</p>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                            <p>Überprüfen Sie die Bewertung jährlich oder bei Vertragsänderungen</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Current Vendor Assessment */}
            {vendors[currentVendor] && (
              <>
                {/* Risk Overview */}
                <Card className="mb-8 border-2 border-purple-200 dark:border-purple-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <BarChart3 className="h-6 w-6 text-purple-600" />
                      Risikobewertung: {vendors[currentVendor].name || 'Unbenannt'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          {Math.round(riskScore)}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Compliance-Score
                        </div>
                      </div>
                      <div className="text-center">
                        <div className={cn("flex items-center justify-center gap-2 text-lg font-bold mb-2", riskLevel.color)}>
                          <riskLevel.icon className="h-5 w-5" />
                          {riskLevel.level}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Risikostufe
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          {Object.keys(currentVendorData).length}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          Bewertete Kriterien
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Assessment-Fortschritt</span>
                        <span className="text-sm font-bold text-purple-600">{Math.round((Object.keys(currentVendorData).length / assessmentCategories.reduce((sum, cat) => sum + cat.criteria.length, 0)) * 100)}%</span>
                      </div>
                      <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2">
                        <div 
                          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(Object.keys(currentVendorData).length / assessmentCategories.reduce((sum, cat) => sum + cat.criteria.length, 0)) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Assessment Categories */}
                <div className="space-y-6">
                  {assessmentCategories.map((category, categoryIndex) => (
                    <Card key={category.id} className="border-2 border-gray-200 dark:border-gray-700">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className={cn(
                            "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                            category.color
                          )}>
                            <category.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl">{category.title}</CardTitle>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {category.description}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="space-y-6">
                          {category.criteria.map((criteria, criteriaIndex) => (
                            <div key={criteria.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <div className="mb-3">
                                <div className="flex items-center gap-2 mb-2">
                                  <h4 className="font-semibold text-gray-900 dark:text-white">
                                    {criteria.title}
                                  </h4>
                                  {criteria.required && (
                                    <Badge className="bg-red-100 text-red-700 border-red-200 text-xs">
                                      Pflicht
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {criteria.description}
                                </p>
                              </div>

                              {/* Input Fields */}
                              {criteria.type === 'text' && (
                                <Input
                                  placeholder={`${criteria.title} eingeben...`}
                                  value={currentVendorData[criteria.id] || ''}
                                  onChange={(e) => updateAssessmentData(criteria.id, e.target.value)}
                                  className="bg-white dark:bg-gray-700"
                                />
                              )}

                              {criteria.type === 'textarea' && (
                                <textarea
                                  placeholder={`${criteria.title} beschreiben...`}
                                  value={currentVendorData[criteria.id] || ''}
                                  onChange={(e) => updateAssessmentData(criteria.id, e.target.value)}
                                  className="w-full p-3 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600"
                                  rows={3}
                                />
                              )}

                              {criteria.type === 'radio' && criteria.options && (
                                <RadioGroup 
                                  value={currentVendorData[criteria.id] || ''} 
                                  onValueChange={(value) => updateAssessmentData(criteria.id, value)}
                                  className="space-y-2"
                                >
                                  {criteria.options.map((option: any) => (
                                    <div key={option.value} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <RadioGroupItem value={option.value} id={`${criteria.id}_${option.value}`} />
                                      <Label 
                                        htmlFor={`${criteria.id}_${option.value}`} 
                                        className="flex-1 cursor-pointer text-gray-900 dark:text-white"
                                      >
                                        {option.label}
                                      </Label>
                                      <div className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                                        {option.points} Pkt.
                                      </div>
                                    </div>
                                  ))}
                                </RadioGroup>
                              )}

                              {criteria.type === 'multiselect' && criteria.options && (
                                <div className="space-y-2">
                                  {criteria.options.map((option: string) => (
                                    <div key={option} className="flex items-center space-x-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                                      <Checkbox
                                        checked={(currentVendorData[criteria.id] || []).includes(option)}
                                        onCheckedChange={(checked) => {
                                          const current = currentVendorData[criteria.id] || [];
                                          const updated = checked 
                                            ? [...current, option]
                                            : current.filter((item: string) => item !== option);
                                          updateAssessmentData(criteria.id, updated);
                                        }}
                                      />
                                      <Label className="flex-1 cursor-pointer text-gray-900 dark:text-white">
                                        {option}
                                      </Label>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}

            <div className="text-center mt-8">
              <Button 
                onClick={() => setShowEmailForm(true)}
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Bewertungsreport als PDF herunterladen
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
                Vendor-Assessment-Report
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Erhalten Sie Ihren vollständigen Vendor-Assessment-Report mit Risikobewertungen, 
                Handlungsempfehlungen und Musterverträgen als PDF.
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
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Unternehmen</label>
                  <input 
                    type="text" 
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="Ihr Unternehmen"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Anzahl zu bewertender Dienstleister</label>
                  <input 
                    type="number" 
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="z.B. 5"
                    min="1"
                  />
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Warum Vendor-Assessments kritisch sind
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="inline-flex p-3 bg-red-100 dark:bg-red-900/30 rounded-lg mb-4">
                  <Scale className="h-6 w-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Rechtliche Verpflichtung
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Art. 28 DSGVO verpflichtet zur sorgfältigen Auswahl und regelmäßigen Überprüfung von Auftragsverarbeitern.
                </p>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="inline-flex p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mb-4">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Haftungsprinzip
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Sie haften für Datenschutzverstöße Ihrer Dienstleister als wären es Ihre eigenen.
                </p>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <div className="inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  Risikominimierung
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Systematische Bewertung reduziert Compliance-Risiken und potenzielle Bußgelder erheblich.
                </p>
              </Card>
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact?source=vendor-assessment">
                  <Button className="bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                    <Users className="mr-2 h-5 w-5" />
                    Vendor-Assessment-Beratung buchen
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/resources">
                  <Button variant="outline" className="border-2 border-gray-300 dark:border-gray-600 hover:border-brand-red hover:text-brand-red transition-all duration-300">
                    <FileText className="mr-2 h-5 w-5" />
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