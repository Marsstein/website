import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  AlertTriangle, 
  Clock, 
  ChevronRight, 
  Star,
  Calendar,
  Download,
  Mail,
  Phone,
  FileText,
  Users,
  Shield,
  CheckCircle,
  Timer,
  Zap,
  Eye,
  MessageSquare,
  Archive,
  Scale,
  ArrowRight,
  Info,
  Lightbulb,
  PlayCircle,
  PauseCircle,
  Gauge,
  Target,
  BookOpen,
  ExternalLink,
  AlertCircle,
  UserCheck,
  FileCheck,
  PhoneCall,
  Building,
  Gavel
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const BreachResponseChecklist: React.FC = () => {
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [activePhase, setActivePhase] = useState<string>('immediate');
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const timelinePhases = [
    {
      id: 'immediate',
      title: 'Sofortmaßnahmen (0-1 Stunden)',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      borderColor: 'border-red-200 dark:border-red-800',
      icon: AlertTriangle,
      description: 'Erste kritische Schritte zur Schadensbegrenzung',
      items: [
        {
          id: 'incident_detected',
          title: 'Vorfall entdeckt und dokumentiert',
          description: 'Zeitpunkt, Art und Umfang der Datenschutzverletzung festhalten',
          timeframe: 'Sofort',
          responsible: 'IT-Team/Entdecker',
          critical: true,
          tips: [
            'Genaue Uhrzeit und Datum der Entdeckung notieren',
            'Ersten Verdacht nicht ignorieren - jede Anomalie ernst nehmen',
            'Screenshots und Logs als Beweismittel sichern'
          ],
          legalBasis: 'Art. 33 Abs. 1 DSGVO',
          consequences: 'Ohne sofortige Dokumentation erschwert sich die spätere Meldung an die Aufsichtsbehörde'
        },
        {
          id: 'containment',
          title: 'Schadensbegrenzung eingeleitet',
          description: 'Weitere Datenverluste verhindern, betroffene Systeme isolieren',
          timeframe: '< 30 Min',
          responsible: 'IT-Security',
          critical: true
        },
        {
          id: 'incident_team_alerted',
          title: 'Incident Response Team benachrichtigt',
          description: 'Alle relevanten internen Stakeholder informieren',
          timeframe: '< 30 Min',
          responsible: 'Incident Manager',
          critical: true
        },
        {
          id: 'dsb_informed',
          title: 'Datenschutzbeauftragten informiert',
          description: 'DSB über Vorfall in Kenntnis setzen (falls vorhanden)',
          timeframe: '< 60 Min',
          responsible: 'Management',
          critical: true
        }
      ]
    },
    {
      id: 'assessment',
      title: 'Bewertung & Analyse (1-6 Stunden)',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      icon: Eye,
      description: 'Detaillierte Analyse des Vorfalls und der Auswirkungen',
      items: [
        {
          id: 'impact_assessment',
          title: 'Auswirkungen bewerten',
          description: 'Art, Umfang und Schwere der Datenschutzverletzung bestimmen',
          timeframe: '1-3 Std',
          responsible: 'DSB/Legal',
          critical: true
        },
        {
          id: 'affected_data_identified',
          title: 'Betroffene Daten identifiziert',
          description: 'Welche personenbezogenen Daten sind betroffen? Kategorien und Menge',
          timeframe: '2-4 Std',
          responsible: 'IT/DSB',
          critical: true
        },
        {
          id: 'affected_persons_count',
          title: 'Anzahl betroffener Personen ermittelt',
          description: 'Wie viele Personen sind von der Verletzung betroffen?',
          timeframe: '2-4 Std',
          responsible: 'IT/DSB',
          critical: true
        },
        {
          id: 'notification_requirement_assessed',
          title: 'Meldepflicht geprüft',
          description: 'Bewertung ob Meldung an Aufsichtsbehörde/Betroffene erforderlich',
          timeframe: '3-6 Std',
          responsible: 'DSB/Legal',
          critical: true
        }
      ]
    },
    {
      id: 'notification',
      title: 'Meldungen (6-72 Stunden)',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      icon: MessageSquare,
      description: 'Gesetzlich vorgeschriebene Meldungen und Kommunikation',
      items: [
        {
          id: 'authority_notification_prepared',
          title: 'Meldung an Aufsichtsbehörde vorbereitet',
          description: 'Vollständige Dokumentation für Behördenmeldung erstellen',
          timeframe: '< 72 Std',
          responsible: 'DSB/Legal',
          critical: true
        },
        {
          id: 'authority_notified',
          title: 'Aufsichtsbehörde benachrichtigt',
          description: 'Formelle Meldung gemäß Art. 33 DSGVO (falls erforderlich)',
          timeframe: '< 72 Std',
          responsible: 'DSB',
          critical: true
        },
        {
          id: 'affected_persons_notification_prepared',
          title: 'Benachrichtigung der Betroffenen vorbereitet',
          description: 'Kommunikationsstrategie und -inhalte für betroffene Personen',
          timeframe: '< 72 Std',
          responsible: 'DSB/PR',
          critical: false
        },
        {
          id: 'affected_persons_notified',
          title: 'Betroffene Personen benachrichtigt',
          description: 'Information der betroffenen Personen (falls erforderlich)',
          timeframe: 'Unverzüglich',
          responsible: 'DSB/Customer Service',
          critical: false
        }
      ]
    },
    {
      id: 'investigation',
      title: 'Untersuchung & Dokumentation (72+ Stunden)',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      icon: FileText,
      description: 'Vollständige Aufarbeitung und Dokumentation',
      items: [
        {
          id: 'root_cause_analysis',
          title: 'Ursachenanalyse durchgeführt',
          description: 'Detaillierte Untersuchung der Entstehungsursachen',
          timeframe: '3-7 Tage',
          responsible: 'IT/DSB',
          critical: false
        },
        {
          id: 'incident_documented',
          title: 'Vorfall vollständig dokumentiert',
          description: 'Komplette Dokumentation für interne Aufzeichnungen',
          timeframe: '5-10 Tage',
          responsible: 'DSB',
          critical: false
        },
        {
          id: 'preventive_measures_identified',
          title: 'Präventionsmaßnahmen identifiziert',
          description: 'Maßnahmen zur Verhinderung ähnlicher Vorfälle definieren',
          timeframe: '7-14 Tage',
          responsible: 'IT/DSB',
          critical: false
        },
        {
          id: 'lessons_learned_documented',
          title: 'Lessons Learned dokumentiert',
          description: 'Erkenntnisse und Verbesserungen für Zukunft festhalten',
          timeframe: '14-21 Tage',
          responsible: 'Management/DSB',
          critical: false
        }
      ]
    },
    {
      id: 'followup',
      title: 'Nachbereitung & Verbesserung (21+ Tage)',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-800',
      icon: CheckCircle,
      description: 'Langfristige Maßnahmen und Prozessverbesserungen',
      items: [
        {
          id: 'security_measures_implemented',
          title: 'Sicherheitsmaßnahmen implementiert',
          description: 'Identifizierte Verbesserungen umsetzen und testen',
          timeframe: '1-3 Monate',
          responsible: 'IT',
          critical: false
        },
        {
          id: 'procedures_updated',
          title: 'Verfahren aktualisiert',
          description: 'Incident Response Verfahren basierend auf Erkenntnissen überarbeiten',
          timeframe: '1-2 Monate',
          responsible: 'DSB/Management',
          critical: false
        },
        {
          id: 'training_conducted',
          title: 'Schulungen durchgeführt',
          description: 'Mitarbeiterschulungen zu neuen Verfahren und Erkenntnissen',
          timeframe: '2-3 Monate',
          responsible: 'HR/DSB',
          critical: false
        },
        {
          id: 'compliance_review',
          title: 'Compliance-Review abgeschlossen',
          description: 'Überprüfung der gesamten Datenschutz-Compliance',
          timeframe: '3-6 Monate',
          responsible: 'DSB/Audit',
          critical: false
        }
      ]
    }
  ];

  const toggleItemExpansion = (itemId: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const startSimulation = () => {
    setSimulationRunning(true);
    setElapsedTime(0);
    // Simulate time progression for demonstration
  };

  const formatElapsedTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const toggleItem = (itemId: string) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
  };

  const totalItems = timelinePhases.reduce((sum, phase) => sum + phase.items.length, 0);
  const completedCount = completedItems.size;
  const criticalItems = timelinePhases.flatMap(phase => phase.items.filter(item => item.critical));
  const completedCritical = criticalItems.filter(item => completedItems.has(item.id)).length;

  const emergencyContacts = [
    { role: 'IT-Notfall-Hotline', contact: '+49 XXX XXXX-111', available: '24/7' },
    { role: 'Datenschutzbeauftragter', contact: 'dsb@unternehmen.de', available: 'Werktags 9-17h' },
    { role: 'Geschäftsführung', contact: '+49 XXX XXXX-001', available: '24/7' },
    { role: 'Rechtsabteilung', contact: 'legal@unternehmen.de', available: 'Werktags 9-18h' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <Link to="/resources" className="hover:text-brand-red transition-colors">Resources</Link>
              <ChevronRight className="h-4 w-4" />
              <span>Breach-Response-Checklist</span>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl shadow-lg">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <Badge className="bg-red-100 text-red-700 border-red-200 mb-3">
                  72h-Notfallplan
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Breach-Response-Checklist
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                  Strukturierter 72-Stunden-Notfallplan bei Datenschutzverletzungen und Sicherheitsvorfällen
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>4.9 (3.156 Downloads)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Aktualisiert: Januar 2025</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Timer className="h-4 w-4" />
                    <span>Kritische 72h-Timeline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Timer & Status */}
      <section className="pb-8">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 border-2 border-red-200 dark:border-red-800 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-yellow-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Timer className="h-6 w-6 text-red-600" />
                  Incident-Timer & Meldepflicht
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-red-600 mb-2">
                      {formatElapsedTime(elapsedTime)}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Vergangene Zeit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      72h
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Meldepflicht an Aufsichtsbehörde</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-yellow-600 mb-2">
                      ASAP
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Information der Betroffenen</div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <Button
                    onClick={startSimulation}
                    disabled={simulationRunning}
                    className="bg-red-600 hover:bg-red-700 text-white"
                  >
                    {simulationRunning ? (
                      <>
                        <PauseCircle className="mr-2 h-4 w-4" />
                        Incident läuft
                      </>
                    ) : (
                      <>
                        <PlayCircle className="mr-2 h-4 w-4" />
                        Incident-Simulation starten
                      </>
                    )}
                  </Button>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Simuliert einen echten Vorfall zur Übung
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Status Overview */}
      <section className="pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 border-red-200 dark:border-red-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {completedCritical}/{criticalItems.length}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Kritische Schritte
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-blue-200 dark:border-blue-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {completedCount}/{totalItems}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Gesamtfortschritt
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-green-200 dark:border-green-800">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {Math.round((completedCount / totalItems) * 100)}%
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Vollständigkeit
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Contacts */}
            <Card className="mb-8 border-2 border-orange-200 dark:border-orange-800">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-orange-700 dark:text-orange-300">
                  <Phone className="h-6 w-6" />
                  Notfall-Kontakte
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {emergencyContacts.map((contact, index) => (
                    <div key={index} className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800">
                      <div className="font-semibold text-gray-900 dark:text-white mb-1">
                        {contact.role}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                        {contact.contact}
                      </div>
                      <div className="text-xs text-orange-600 dark:text-orange-400">
                        {contact.available}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="text-center mb-8">
              <Button 
                onClick={() => setShowEmailForm(true)}
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Vollständige Checkliste als PDF herunterladen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Phases */}
      <section className="pb-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timelinePhases.map((phase, phaseIndex) => (
                <Card key={phase.id} className={cn("border-2", phase.borderColor)}>
                  <CardHeader className={cn("rounded-t-lg", phase.bgColor)}>
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                        phase.color
                      )}>
                        <phase.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900 dark:text-white">
                          {phase.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {phase.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900 dark:text-white">
                          {phase.items.filter(item => completedItems.has(item.id)).length}/{phase.items.length}
                        </div>
                        <div className="text-xs text-gray-500">abgeschlossen</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {phase.items.map((item, itemIndex) => (
                        <div 
                          key={item.id}
                          className={cn(
                            "p-4 rounded-xl border transition-all duration-200 hover:shadow-md",
                            item.critical 
                              ? 'bg-red-50 dark:bg-red-950/10 border-red-200 dark:border-red-800' 
                              : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
                            completedItems.has(item.id) ? 'opacity-75' : ''
                          )}
                        >
                          <div className="flex items-start gap-4">
                            <Checkbox
                              checked={completedItems.has(item.id)}
                              onCheckedChange={() => toggleItem(item.id)}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <h4 className={cn(
                                  "font-semibold text-gray-900 dark:text-white",
                                  completedItems.has(item.id) ? 'line-through' : ''
                                )}>
                                  {item.title}
                                </h4>
                                <div className="flex items-center gap-2 ml-4">
                                  {item.critical && (
                                    <Badge className="bg-red-100 text-red-700 border-red-200 text-xs">
                                      Kritisch
                                    </Badge>
                                  )}
                                  <Badge variant="outline" className="text-xs">
                                    {item.timeframe}
                                  </Badge>
                                </div>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {item.description}
                              </p>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Users className="h-3 w-3" />
                                    <span>Verantwortlich: {item.responsible}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{item.timeframe}</span>
                                  </div>
                                </div>
                                
                                {/* Expand Button */}
                                {(item as any).tips && (
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleItemExpansion(item.id)}
                                    className="text-gray-500 hover:text-gray-700 h-6 w-6 p-0"
                                  >
                                    <Info className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>

                              {/* Expanded Details */}
                              {expandedItems.has(item.id) && (item as any).tips && (
                                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 space-y-4">
                                  {/* Implementation Tips */}
                                  <div>
                                    <div className="flex items-center gap-2 mb-2">
                                      <Lightbulb className="h-4 w-4 text-yellow-600" />
                                      <h5 className="font-semibold text-sm text-gray-900 dark:text-white">Umsetzungstipps</h5>
                                    </div>
                                    <div className="space-y-1">
                                      {(item as any).tips?.map((tip: string, tipIndex: number) => (
                                        <div key={tipIndex} className="flex items-start gap-2">
                                          <div className="w-1 h-1 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                                          <p className="text-xs text-gray-600 dark:text-gray-400">{tip}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Legal Basis */}
                                  {(item as any).legalBasis && (
                                    <div>
                                      <div className="flex items-center gap-2 mb-2">
                                        <Gavel className="h-4 w-4 text-blue-600" />
                                        <h5 className="font-semibold text-sm text-gray-900 dark:text-white">Rechtsgrundlage</h5>
                                      </div>
                                      <p className="text-xs text-blue-800 dark:text-blue-200 bg-blue-50 dark:bg-blue-950/20 p-2 rounded">
                                        {(item as any).legalBasis}
                                      </p>
                                    </div>
                                  )}

                                  {/* Consequences */}
                                  {(item as any).consequences && (
                                    <div>
                                      <div className="flex items-center gap-2 mb-2">
                                        <AlertCircle className="h-4 w-4 text-red-600" />
                                        <h5 className="font-semibold text-sm text-gray-900 dark:text-white">Konsequenzen bei Nicht-Beachtung</h5>
                                      </div>
                                      <p className="text-xs text-red-800 dark:text-red-200 bg-red-50 dark:bg-red-950/20 p-2 rounded">
                                        {(item as any).consequences}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
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
                Notfallplan herunterladen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Erhalten Sie die vollständige Breach-Response-Checkliste als PDF 
                sowie Vorlagen für Meldungen und Kommunikation.
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

      {/* Legal Disclaimer */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Scale className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                      Rechtlicher Hinweis
                    </h3>
                    <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-4">
                      Diese Checkliste dient als Orientierungshilfe und ersetzt keine individuelle 
                      Rechtsberatung. Die konkreten Meldepflichten und -fristen können je nach 
                      Einzelfall variieren. Konsultieren Sie bei einem tatsächlichen Vorfall 
                      umgehend Ihren Datenschutzbeauftragten oder Rechtsanwalt.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to="/contact?source=breach-response">
                        <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                          <Shield className="mr-2 h-4 w-4" />
                          Notfall-Beratung anfordern
                        </Button>
                      </Link>
                      <Link to="/resources">
                        <Button variant="outline" className="border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white">
                          <FileText className="mr-2 h-4 w-4" />
                          Weitere Compliance-Tools
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};