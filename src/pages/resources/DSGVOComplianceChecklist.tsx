import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { 
  CheckSquare, 
  Download, 
  ArrowRight, 
  Shield, 
  FileText, 
  Users, 
  AlertTriangle,
  Clock,
  Star,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  XCircle,
  Minus,
  BarChart3,
  Calendar,
  Mail,
  Info,
  Lightbulb,
  BookOpen,
  Scale,
  Timer,
  Target,
  HelpCircle,
  ExternalLink,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const DSGVOComplianceChecklist: React.FC = () => {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['grundlagen']));
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [showEmailForm, setShowEmailForm] = useState(false);

  const checklistSections = [
    {
      id: 'grundlagen',
      title: 'Grundlagen & Dokumentation',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      description: 'Fundamentale Dokumentationspflichten nach DSGVO',
      completionTip: 'Diese Grundlagen sind die Basis für alle weiteren Compliance-Maßnahmen',
      items: [
        {
          id: 'verarbeitungsverzeichnis',
          title: 'Verzeichnis der Verarbeitungstätigkeiten erstellt',
          description: 'Art. 30 DSGVO - Vollständige Dokumentation aller Datenverarbeitungen mit Zwecken, Kategorien und Rechtsgrundlagen',
          priority: 'critical',
          category: 'Dokumentation',
          effort: 'Hoch (8-16h)',
          legalBasis: 'Art. 30 DSGVO',
          penalty: 'Bis zu 2% des Jahresumsatzes',
          tips: [
            'Verwenden Sie strukturierte Templates für konsistente Dokumentation',
            'Aktualisieren Sie das Verzeichnis mindestens halbjährlich',
            'Beziehen Sie alle Abteilungen in die Dokumentation ein'
          ],
          resources: [
            'Muster-Verzeichnis der Aufsichtsbehörden',
            'Branchenspezifische Vorlagen',
            'Automatisierte Erfassungstools'
          ]
        },
        {
          id: 'datenschutzerklaerung',
          title: 'Datenschutzerklärung aktualisiert und vollständig',
          description: 'Art. 13, 14 DSGVO - Transparente, verständliche Information über alle Datenverarbeitungen',
          priority: 'critical',
          category: 'Information',
          effort: 'Mittel (4-8h)',
          legalBasis: 'Art. 13, 14 DSGVO',
          penalty: 'Bis zu 4% des Jahresumsatzes',
          tips: [
            'Verwenden Sie einfache, verständliche Sprache',
            'Strukturieren Sie die Informationen logisch',
            'Aktualisieren Sie bei jeder Änderung der Datenverarbeitung'
          ],
          resources: [
            'Generator für Datenschutzerklärungen',
            'Rechtliche Musterformulierungen',
            'Branchenspezifische Beispiele'
          ]
        },
        {
          id: 'rechtsgrundlagen',
          title: 'Rechtsgrundlagen für jede Verarbeitung definiert',
          description: 'Art. 6 DSGVO - Eindeutige rechtliche Basis für alle Datenverarbeitungen dokumentiert und nachweisbar',
          priority: 'critical',
          category: 'Rechtliches',
          effort: 'Mittel (6-12h)',
          legalBasis: 'Art. 6 DSGVO',
          penalty: 'Bis zu 4% des Jahresumsatzes',
          tips: [
            'Prüfen Sie die Angemessenheit der gewählten Rechtsgrundlage',
            'Dokumentieren Sie die Interessenabwägung bei Art. 6 (1) f',
            'Berücksichtigen Sie die Widerrufsmöglichkeit bei Einwilligungen'
          ],
          resources: [
            'Entscheidungsbaum für Rechtsgrundlagen',
            'Muster-Interessenabwägung',
            'Einwilligungsvorlagen'
          ]
        },
        {
          id: 'auftragsverarbeitung',
          title: 'Auftragsverarbeitungsverträge abgeschlossen',
          description: 'Art. 28 DSGVO - Rechtskonforme Verträge mit allen Dienstleistern, die personenbezogene Daten verarbeiten',
          priority: 'high',
          category: 'Verträge',
          effort: 'Hoch (pro Vertrag 2-4h)',
          legalBasis: 'Art. 28 DSGVO',
          penalty: 'Bis zu 4% des Jahresumsatzes',
          tips: [
            'Führen Sie ein Verzeichnis aller Auftragsverarbeiter',
            'Prüfen Sie die TOM der Dienstleister regelmäßig',
            'Regeln Sie Unterauftragsverarbeitung explizit'
          ],
          resources: [
            'Muster-AVV der Aufsichtsbehörden',
            'Checkliste für Dienstleister-Prüfung',
            'Vertragsmanagement-Tools'
          ]
        },
        {
          id: 'loeschkonzept',
          title: 'Löschkonzept implementiert',
          description: 'Art. 17 DSGVO - Systematische, automatisierte Löschung nicht mehr benötigter personenbezogener Daten',
          priority: 'high',
          category: 'Datenmanagement',
          effort: 'Hoch (12-20h)',
          legalBasis: 'Art. 17 DSGVO',
          penalty: 'Bis zu 4% des Jahresumsatzes',
          tips: [
            'Definieren Sie klare Aufbewahrungsfristen für jede Datenkategorie',
            'Implementieren Sie automatisierte Löschprozesse',
            'Dokumentieren Sie alle Löschvorgänge audit-sicher'
          ],
          resources: [
            'Aufbewahrungsfristen-Tabelle',
            'Automatisierte Löschtools',
            'Löschprotokoll-Vorlagen'
          ]
        },
        {
          id: 'datenschutzfolgen',
          title: 'Datenschutz-Folgenabschätzung (DSFA) bei Hochrisiko-Verarbeitungen',
          description: 'Art. 35 DSGVO - Systematische Bewertung von Verarbeitungen mit hohem Risiko für Betroffene',
          priority: 'high',
          category: 'Bewertung',
          effort: 'Hoch (8-16h pro DSFA)',
          legalBasis: 'Art. 35 DSGVO',
          penalty: 'Bis zu 4% des Jahresumsatzes',
          tips: [
            'Nutzen Sie die Liste der Aufsichtsbehörden für Hochrisiko-Verarbeitungen',
            'Beziehen Sie den Datenschutzbeauftragten ein',
            'Dokumentieren Sie Abhilfemaßnahmen'
          ],
          resources: [
            'DSFA-Vorlagen der Aufsichtsbehörden',
            'Risikobewertungs-Tools',
            'Branchenspezifische DSFA-Beispiele'
          ]
        }
      ]
    },
    {
      id: 'betroffenenrechte',
      title: 'Betroffenenrechte',
      icon: Users,
      color: 'from-green-500 to-teal-500',
      items: [
        {
          id: 'auskunftsrecht',
          title: 'Prozess für Auskunftsersuchen etabliert',
          description: 'Art. 15 DSGVO - Systematische Bearbeitung von Auskunftsanfragen',
          priority: 'critical',
          category: 'Betroffenenrechte'
        },
        {
          id: 'berichtigung',
          title: 'Berichtigungsverfahren implementiert',
          description: 'Art. 16 DSGVO - Korrektur fehlerhafter personenbezogener Daten',
          priority: 'high',
          category: 'Betroffenenrechte'
        },
        {
          id: 'loeschung',
          title: 'Löschungsverfahren etabliert',
          description: 'Art. 17 DSGVO - "Recht auf Vergessenwerden" umgesetzt',
          priority: 'critical',
          category: 'Betroffenenrechte'
        },
        {
          id: 'datenportabilitaet',
          title: 'Datenportabilität ermöglicht',
          description: 'Art. 20 DSGVO - Export personenbezogener Daten in strukturiertem Format',
          priority: 'medium',
          category: 'Betroffenenrechte'
        },
        {
          id: 'widerspruch',
          title: 'Widerspruchsrecht implementiert',
          description: 'Art. 21 DSGVO - Möglichkeit zum Widerspruch gegen Verarbeitung',
          priority: 'high',
          category: 'Betroffenenrechte'
        }
      ]
    },
    {
      id: 'sicherheit',
      title: 'Technische & Organisatorische Maßnahmen',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      items: [
        {
          id: 'verschluesselung',
          title: 'Verschlüsselung implementiert',
          description: 'Art. 32 DSGVO - Verschlüsselung bei Übertragung und Speicherung',
          priority: 'critical',
          category: 'Technisch'
        },
        {
          id: 'zugriffskontrolle',
          title: 'Zugriffskontrolle etabliert',
          description: 'Art. 32 DSGVO - Beschränkung des Zugriffs auf autorisierte Personen',
          priority: 'critical',
          category: 'Technisch'
        },
        {
          id: 'backups',
          title: 'Backup- und Recovery-Verfahren implementiert',
          description: 'Art. 32 DSGVO - Wiederherstellbarkeit personenbezogener Daten',
          priority: 'high',
          category: 'Technisch'
        },
        {
          id: 'protokollierung',
          title: 'Logging und Monitoring aktiv',
          description: 'Art. 32 DSGVO - Überwachung und Protokollierung von Datenverarbeitungen',
          priority: 'high',
          category: 'Technisch'
        },
        {
          id: 'incident_response',
          title: 'Incident Response Plan erstellt',
          description: 'Art. 33, 34 DSGVO - Verfahren bei Datenschutzverletzungen',
          priority: 'critical',
          category: 'Organisatorisch'
        }
      ]
    },
    {
      id: 'governance',
      title: 'Datenschutz-Governance',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      items: [
        {
          id: 'dsb_benannt',
          title: 'Datenschutzbeauftragter benannt (falls erforderlich)',
          description: 'Art. 37 DSGVO - Bestellung und Aufgaben des Datenschutzbeauftragten',
          priority: 'critical',
          category: 'Personal'
        },
        {
          id: 'schulungen',
          title: 'Mitarbeiterschulungen durchgeführt',
          description: 'Art. 32 DSGVO - Sensibilisierung und Weiterbildung der Mitarbeiter',
          priority: 'high',
          category: 'Personal'
        },
        {
          id: 'richtlinien',
          title: 'Datenschutzrichtlinien erstellt',
          description: 'Interne Regelungen und Verfahrensanweisungen',
          priority: 'high',
          category: 'Organisatorisch'
        },
        {
          id: 'dsfa_prozess',
          title: 'DSFA-Prozess etabliert',
          description: 'Art. 35 DSGVO - Datenschutz-Folgenabschätzung bei Hochrisiko-Verarbeitungen',
          priority: 'medium',
          category: 'Prozesse'
        }
      ]
    }
  ];

  const toggleItem = (itemId: string) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
  };

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const toggleItemDetails = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const totalItems = checklistSections.reduce((sum, section) => sum + section.items.length, 0);
  const completedCount = completedItems.size;
  const progressPercentage = (completedCount / totalItems) * 100;

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'high': return <CheckCircle className="h-4 w-4 text-orange-500" />;
      case 'medium': return <Minus className="h-4 w-4 text-yellow-500" />;
      default: return <CheckCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800';
      case 'high': return 'bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800';
      case 'medium': return 'bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800';
      default: return 'bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800';
    }
  };

  const getComplianceLevel = () => {
    if (progressPercentage >= 90) return { level: 'Exzellent', color: 'text-green-600', icon: CheckCircle };
    if (progressPercentage >= 70) return { level: 'Gut', color: 'text-orange-500', icon: CheckCircle };
    if (progressPercentage >= 50) return { level: 'Ausreichend', color: 'text-yellow-500', icon: Minus };
    return { level: 'Mangelhaft', color: 'text-red-500', icon: XCircle };
  };

  const complianceLevel = getComplianceLevel();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <Link to="/resources" className="hover:text-brand-red transition-colors">Resources</Link>
              <ChevronRight className="h-4 w-4" />
              <span>DSGVO-Compliance-Checkliste</span>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg">
                <CheckSquare className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-3">
                  47-Punkte Selbstaudit
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  DSGVO-Compliance-Checkliste 2025
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Systematische Überprüfung aller DSGVO-Anforderungen für vollständige Compliance
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>4.9 (2.847 Downloads)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Aktualisiert: Januar 2025</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                  Ihr DSGVO-Compliance-Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Main Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      {completedCount}<span className="text-2xl text-gray-400">/{totalItems}</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Punkte abgehakt</div>
                  </div>
                  <div className="text-center">
                    <div className={cn("text-4xl font-bold mb-2", complianceLevel.color)}>
                      {Math.round(progressPercentage)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Compliance-Grad</div>
                  </div>
                  <div className="text-center">
                    <div className={cn("flex items-center justify-center gap-2 text-xl font-bold mb-2", complianceLevel.color)}>
                      <complianceLevel.icon className="h-6 w-6" />
                      {complianceLevel.level}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Bewertung</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">
                      {checklistSections.reduce((sum, section) => 
                        sum + section.items.filter(item => item.priority === 'critical' && completedItems.has(item.id)).length, 0
                      )}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Kritische erledigt</div>
                  </div>
                </div>

                {/* Enhanced Progress Bar */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Gesamtfortschritt</span>
                    <span className="text-sm font-bold text-blue-600">{Math.round(progressPercentage)}%</span>
                  </div>
                  <Progress value={progressPercentage} className="h-4" />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                  <Button 
                    onClick={() => setShowEmailForm(true)}
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    PDF-Checkliste herunterladen
                  </Button>
                  
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300"
                  >
                    <Zap className="mr-2 h-5 w-5" />
                    Express-Audit buchen
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk Assessment Visualization */}
      <section className="pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-red-950/20 dark:via-gray-900 dark:to-orange-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Risikoanalyse & Priorisierung
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Critical Risk Items */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">
                      {checklistSections.reduce((sum, section) => 
                        sum + section.items.filter(item => item.priority === 'critical' && !completedItems.has(item.id)).length, 0
                      )}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Kritische Punkte offen</div>
                    <Badge variant="destructive" className="text-xs">Sofortiger Handlungsbedarf</Badge>
                  </div>
                  
                  {/* High Risk Items */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      {checklistSections.reduce((sum, section) => 
                        sum + section.items.filter(item => item.priority === 'high' && !completedItems.has(item.id)).length, 0
                      )}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Hohe Priorität offen</div>
                    <Badge className="bg-orange-100 text-orange-700 border-orange-200 text-xs">Zeitnah umsetzen</Badge>
                  </div>
                  
                  {/* Potential Fine Exposure */}
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      4%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Max. Bußgeld-Potenzial</div>
                    <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-xs">Des Jahresumsatzes</Badge>
                  </div>
                </div>

                {/* Section-wise Progress */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Fortschritt nach Bereichen</h4>
                  {checklistSections.map((section) => {
                    const sectionCompleted = section.items.filter(item => completedItems.has(item.id)).length;
                    const sectionTotal = section.items.length;
                    const sectionProgress = (sectionCompleted / sectionTotal) * 100;
                    
                    return (
                      <div key={section.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <section.icon className="h-4 w-4 text-gray-600" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{section.title}</span>
                          </div>
                          <span className="text-sm font-bold text-gray-600">{sectionCompleted}/{sectionTotal}</span>
                        </div>
                        <Progress value={sectionProgress} className="h-2" />
                      </div>
                    );
                  })}
                </div>

                {/* Quick Actions */}
                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">Nächste Schritte</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Beginnen Sie mit den kritischen Punkten. Diese haben das höchste Bußgeldrisiko und sollten prioritär bearbeitet werden.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" className="bg-red-600 hover:bg-red-700 text-white">
                          <Timer className="h-4 w-4 mr-2" />
                          Kritische zuerst
                        </Button>
                        <Button size="sm" variant="outline">
                          <Scale className="h-4 w-4 mr-2" />
                          Rechtliche Beratung
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Checklist */}
      <section className="pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {checklistSections.map((section, sectionIndex) => (
                <Card key={section.id} className="border-2 border-gray-200 dark:border-gray-700">
                  <CardHeader 
                    className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    onClick={() => toggleSection(section.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                          section.color
                        )}>
                          <section.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{section.title}</CardTitle>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {section.items.filter(item => completedItems.has(item.id)).length} von {section.items.length} abgeschlossen
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress 
                          value={(section.items.filter(item => completedItems.has(item.id)).length / section.items.length) * 100} 
                          className="w-20 h-2"
                        />
                        {expandedSections.has(section.id) ? (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  
                  {expandedSections.has(section.id) && (
                    <CardContent className="pt-0">
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <div 
                            key={item.id}
                            className={cn(
                              "rounded-xl border-2 transition-all duration-300 hover:shadow-lg",
                              getPriorityColor(item.priority),
                              completedItems.has(item.id) ? 'opacity-75' : '',
                              expandedItems.has(item.id) ? 'ring-2 ring-blue-200 dark:ring-blue-800' : ''
                            )}
                          >
                            {/* Main Item Content */}
                            <div className="p-6">
                              <div className="flex items-start gap-4">
                                <Checkbox
                                  checked={completedItems.has(item.id)}
                                  onCheckedChange={() => toggleItem(item.id)}
                                  className="mt-1.5"
                                />
                                <div className="flex-1">
                                  <div className="flex items-start justify-between mb-3">
                                    <h4 className={cn(
                                      "text-lg font-bold text-gray-900 dark:text-white leading-tight",
                                      completedItems.has(item.id) ? 'line-through' : ''
                                    )}>
                                      {item.title}
                                    </h4>
                                    <div className="flex items-center gap-2 ml-4">
                                      {getPriorityIcon(item.priority)}
                                      <Badge variant="outline" className="text-xs">
                                        {item.category}
                                      </Badge>
                                    </div>
                                  </div>
                                  
                                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {item.description}
                                  </p>

                                  {/* Quick Info Bar */}
                                  <div className="flex flex-wrap items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                      <Scale className="h-4 w-4" />
                                      <span>{item.legalBasis}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-gray-500">
                                      <Timer className="h-4 w-4" />
                                      <span>{item.effort}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-red-600">
                                      <AlertTriangle className="h-4 w-4" />
                                      <span>{item.penalty}</span>
                                    </div>
                                  </div>

                                  {/* Expand/Collapse Button */}
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => toggleItemDetails(item.id)}
                                    className="mb-4"
                                  >
                                    <Info className="h-4 w-4 mr-2" />
                                    {expandedItems.has(item.id) ? 'Weniger Details' : 'Mehr Details & Tipps'}
                                    {expandedItems.has(item.id) ? (
                                      <ChevronDown className="h-4 w-4 ml-2" />
                                    ) : (
                                      <ChevronRight className="h-4 w-4 ml-2" />
                                    )}
                                  </Button>
                                </div>
                              </div>
                            </div>

                            {/* Expanded Details */}
                            {expandedItems.has(item.id) && (
                              <div className="border-t bg-gray-50 dark:bg-gray-800/50 p-6 space-y-6">
                                {/* Implementation Tips */}
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <Lightbulb className="h-5 w-5 text-yellow-600" />
                                    <h5 className="font-semibold text-gray-900 dark:text-white">Umsetzungstipps</h5>
                                  </div>
                                  <div className="space-y-2">
                                    {item.tips?.map((tip, tipIndex) => (
                                      <div key={tipIndex} className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{tip}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Resources */}
                                <div>
                                  <div className="flex items-center gap-2 mb-3">
                                    <BookOpen className="h-5 w-5 text-blue-600" />
                                    <h5 className="font-semibold text-gray-900 dark:text-white">Hilfreiche Ressourcen</h5>
                                  </div>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {item.resources?.map((resource, resourceIndex) => (
                                      <div key={resourceIndex} className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg border">
                                        <ExternalLink className="h-4 w-4 text-blue-500 flex-shrink-0" />
                                        <span className="text-sm text-gray-700 dark:text-gray-300">{resource}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-wrap gap-3 pt-4 border-t">
                                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                    <Target className="h-4 w-4 mr-2" />
                                    Template herunterladen
                                  </Button>
                                  <Button size="sm" variant="outline">
                                    <HelpCircle className="h-4 w-4 mr-2" />
                                    Beratung anfragen
                                  </Button>
                                  {completedItems.has(item.id) && (
                                    <Button size="sm" variant="outline" className="text-green-600 border-green-200">
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      Erledigt
                                    </Button>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
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
                PDF-Download
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Erhalten Sie die vollständige 47-Punkte DSGVO-Checkliste als PDF sowie 
                exklusive Compliance-Updates direkt in Ihr Postfach.
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
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Unternehmen (optional)</label>
                  <input 
                    type="text" 
                    className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                    placeholder="Ihr Unternehmen"
                  />
                </div>
                <div className="flex items-start gap-2">
                  <Checkbox id="privacy" className="mt-1" />
                  <label htmlFor="privacy" className="text-xs text-gray-600 dark:text-gray-400">
                    Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. 
                    Ich kann der Nutzung jederzeit widersprechen.
                  </label>
                </div>
                <div className="flex gap-3">
                  <Button 
                    type="submit"
                    className="flex-1 bg-brand-red hover:bg-brand-red/90 text-white"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    PDF herunterladen
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

      {/* Next Steps */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Benötigen Sie Unterstützung bei der Umsetzung?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Unsere DSGVO-Experten helfen Ihnen bei der vollständigen Implementierung 
              aller Compliance-Anforderungen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact?source=checklist">
                <Button 
                  size="lg" 
                  className="bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Kostenlose Beratung buchen
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/resources">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-gray-300 dark:border-gray-600 hover:border-brand-red hover:text-brand-red transition-all duration-300"
                >
                  <CheckSquare className="mr-2 h-5 w-5" />
                  Weitere Checklisten
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};