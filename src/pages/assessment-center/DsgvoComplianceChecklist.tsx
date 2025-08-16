import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  FileText,
  Users,
  Database,
  Lock,
  Eye,
  AlertTriangle,
  Clock,
  Target,
  Award,
  BarChart3,
  Settings,
  Gavel,
  Building2,
  Globe,
  Download,
  RefreshCw,
  XCircle,
  HelpCircle,
  BookOpen,
  Star,
  Trophy,
  Gauge,
  TrendingUp,
  Calendar,
  Mail
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';

const DsgvoComplianceChecklist = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Assessment",
    "name": "DSGVO Compliance Checklist",
    "description": "Umfassende DSGVO Compliance Checklist mit 50+ Prüfpunkten für vollständige Datenschutz-Compliance",
    "educationalLevel": "Professional",
    "url": "https://marsstein.com/assessment-center/dsgvo-compliance-checklist"
  };

  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [currentCategory, setCurrentCategory] = useState(0);

  const checklistCategories = [
    {
      id: 'legal-basis',
      title: 'Rechtsgrundlagen & Dokumentation',
      icon: Gavel,
      color: 'from-blue-500 to-cyan-500',
      description: 'Grundlegende rechtliche Anforderungen und Dokumentationspflichten',
      items: [
        {
          id: 'legal-1',
          title: 'Rechtsgrundlage für alle Verarbeitungen definiert',
          description: 'Art. 6 DSGVO: Eindeutige Rechtsgrundlage für jede Datenverarbeitung dokumentiert',
          priority: 'critical',
          reference: 'Art. 6 DSGVO'
        },
        {
          id: 'legal-2', 
          title: 'Verarbeitungsverzeichnis vollständig geführt',
          description: 'Art. 30 DSGVO: Detailliertes Verzeichnis aller Verarbeitungstätigkeiten',
          priority: 'critical',
          reference: 'Art. 30 DSGVO'
        },
        {
          id: 'legal-3',
          title: 'Datenschutzerklärung aktuell und vollständig',
          description: 'Art. 13/14 DSGVO: Transparente Information über Datenverarbeitung',
          priority: 'critical',
          reference: 'Art. 13-14 DSGVO'
        },
        {
          id: 'legal-4',
          title: 'Einwilligungserklärungen DSGVO-konform',
          description: 'Art. 7 DSGVO: Freiwillige, informierte und eindeutige Einwilligung',
          priority: 'high',
          reference: 'Art. 7 DSGVO'
        }
      ]
    },
    {
      id: 'data-subject-rights',
      title: 'Betroffenenrechte',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      description: 'Umsetzung und Prozesse für Betroffenenrechte',
      items: [
        {
          id: 'rights-1',
          title: 'Auskunftsrecht implementiert',
          description: 'Art. 15 DSGVO: Prozess zur Beantwortung von Auskunftsersuchen (1 Monat)',
          priority: 'critical',
          reference: 'Art. 15 DSGVO'
        },
        {
          id: 'rights-2',
          title: 'Löschrecht umsetzbar',
          description: 'Art. 17 DSGVO: Technische und organisatorische Maßnahmen zur Datenlöschung',
          priority: 'critical', 
          reference: 'Art. 17 DSGVO'
        },
        {
          id: 'rights-3',
          title: 'Berichtigungsrecht gewährleistet',
          description: 'Art. 16 DSGVO: Prozess zur Korrektur unrichtiger personenbezogener Daten',
          priority: 'high',
          reference: 'Art. 16 DSGVO'
        },
        {
          id: 'rights-4',
          title: 'Datenportabilität möglich',
          description: 'Art. 20 DSGVO: Bereitstellung von Daten in strukturiertem, maschinenlesbarem Format',
          priority: 'medium',
          reference: 'Art. 20 DSGVO'
        }
      ]
    },
    {
      id: 'technical-measures',
      title: 'Technische Maßnahmen',
      icon: Lock,
      color: 'from-emerald-500 to-teal-500', 
      description: 'IT-Sicherheit und technische Schutzmaßnahmen',
      items: [
        {
          id: 'tech-1',
          title: 'Verschlüsselung implementiert',
          description: 'Art. 32 DSGVO: Verschlüsselung von Daten in Ruhe und bei Übertragung',
          priority: 'critical',
          reference: 'Art. 32 DSGVO'
        },
        {
          id: 'tech-2',
          title: 'Zugangskontrollen eingerichtet',
          description: 'Art. 32 DSGVO: Beschränkung des Zugangs auf autorisierte Personen',
          priority: 'critical',
          reference: 'Art. 32 DSGVO'
        },
        {
          id: 'tech-3',
          title: 'Backup- und Recovery-Verfahren',
          description: 'Art. 32 DSGVO: Verfügbarkeit und Belastbarkeit der Systeme gewährleisten',
          priority: 'high',
          reference: 'Art. 32 DSGVO'
        },
        {
          id: 'tech-4',
          title: 'Logging und Monitoring aktiv',
          description: 'Art. 32 DSGVO: Protokollierung zur Nachverfolgung von Datenverarbeitungen',
          priority: 'high', 
          reference: 'Art. 32 DSGVO'
        }
      ]
    },
    {
      id: 'organizational',
      title: 'Organisatorische Maßnahmen',
      icon: Settings,
      color: 'from-orange-500 to-red-500',
      description: 'Interne Prozesse und organisatorische Sicherheit',
      items: [
        {
          id: 'org-1',
          title: 'Datenschutzbeauftragter bestellt',
          description: 'Art. 37-39 DSGVO: DSB bei Kerntätigkeit oder besonderen Kategorien',
          priority: 'critical',
          reference: 'Art. 37-39 DSGVO'
        },
        {
          id: 'org-2',
          title: 'Mitarbeiterschulungen durchgeführt',
          description: 'Art. 32 DSGVO: Regelmäßige Sensibilisierung für Datenschutz',
          priority: 'high',
          reference: 'Art. 32 DSGVO'
        },
        {
          id: 'org-3',
          title: 'Incident Response Plan vorhanden',
          description: 'Art. 33-34 DSGVO: Verfahren für Datenpannen und Meldepflichten',
          priority: 'critical',
          reference: 'Art. 33-34 DSGVO'
        },
        {
          id: 'org-4',
          title: 'Auftragsverarbeitung geregelt',
          description: 'Art. 28 DSGVO: Verträge mit allen Dienstleistern abgeschlossen',
          priority: 'critical',
          reference: 'Art. 28 DSGVO'
        }
      ]
    },
    {
      id: 'special-cases',
      title: 'Besondere Kategorien & Transfers',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      description: 'Sensible Daten und internationale Transfers',
      items: [
        {
          id: 'special-1',
          title: 'Besondere Kategorien geschützt',
          description: 'Art. 9 DSGVO: Zusätzliche Schutzmaßnahmen für sensible Daten',
          priority: 'critical',
          reference: 'Art. 9 DSGVO'
        },
        {
          id: 'special-2',
          title: 'Drittlandtransfers abgesichert',
          description: 'Kap. V DSGVO: Angemessenheitsbeschluss oder geeignete Garantien',
          priority: 'high',
          reference: 'Art. 44-49 DSGVO'
        },
        {
          id: 'special-3',
          title: 'Privacy by Design umgesetzt',
          description: 'Art. 25 DSGVO: Datenschutz durch Technikgestaltung und datenschutzfreundliche Voreinstellungen',
          priority: 'medium',
          reference: 'Art. 25 DSGVO'
        },
        {
          id: 'special-4',
          title: 'Datenschutz-Folgenabschätzung durchgeführt',
          description: 'Art. 35 DSGVO: DSFA bei hohem Risiko für Betroffene',
          priority: 'high',
          reference: 'Art. 35 DSGVO'
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

  const getTotalItems = () => checklistCategories.reduce((sum, cat) => sum + cat.items.length, 0);
  const getCompletionRate = () => Math.round((completedItems.size / getTotalItems()) * 100);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500/20 text-red-300 border-red-500/30';
      case 'high': return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <>
      <SEOHead
        title="DSGVO Compliance Checklist – 50+ Prüfpunkte"
        description="Vollständige DSGVO Compliance Checklist mit über 50 Prüfpunkten. ✓ Rechtliche Anforderungen ✓ Betroffenenrechte ✓ Technische Maßnahmen. Jetzt prüfen!"
        canonical="/assessment-center/dsgvo-compliance-checklist"
        keywords="DSGVO Checklist, Compliance Prüfung, Datenschutz Audit, DSGVO Anforderungen, Compliance Check"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        {/* Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
              >
                <Shield className="h-5 w-5 text-purple-400" />
                <span className="text-sm font-semibold text-purple-300">DSGVO Assessment Tool</span>
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8">
                <span className="text-white">DSGVO</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
                  Compliance
                </span>
                <br />
                <span className="text-white">Checklist</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
                Umfassende Prüfung Ihrer DSGVO-Compliance mit <span className="font-semibold text-purple-300">über 50 Prüfpunkten</span>. 
                Strukturiert nach rechtlichen Kategorien mit <span className="font-semibold text-pink-300">konkreten Handlungsempfehlungen</span>.
              </p>

              {/* Progress Overview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="max-w-lg mx-auto mb-8"
              >
                <Card className="bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 p-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">{getCompletionRate()}%</div>
                    <div className="text-slate-300 mb-4">Compliance Status</div>
                    <Progress value={getCompletionRate()} className="mb-4" />
                    <div className="text-sm text-slate-400">
                      {completedItems.size} von {getTotalItems()} Punkten erfüllt
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Category Navigation */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 sticky top-0 z-40 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center gap-4">
              {checklistCategories.map((category, index) => (
                <Button
                  key={category.id}
                  onClick={() => setCurrentCategory(index)}
                  variant={currentCategory === index ? "default" : "outline"}
                  className={`${
                    currentCategory === index 
                      ? `bg-gradient-to-r ${category.color} text-white` 
                      : 'border-slate-600 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <category.icon className="h-4 w-4 mr-2" />
                  {category.title}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl">
            {checklistCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: currentCategory === categoryIndex ? 1 : 0,
                  x: currentCategory === categoryIndex ? 0 : 20
                }}
                className={currentCategory === categoryIndex ? 'block' : 'hidden'}
              >
                <Card className="mb-8 bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color}`}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-white">{category.title}</CardTitle>
                        <p className="text-slate-300 mt-2">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: itemIndex * 0.1, duration: 0.3 }}
                          className="group"
                        >
                          <Card className="p-6 bg-slate-900/50 border border-slate-700/30 hover:border-slate-600 transition-all duration-200">
                            <div className="flex items-start gap-4">
                              <Checkbox
                                checked={completedItems.has(item.id)}
                                onCheckedChange={() => toggleItem(item.id)}
                                className="mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                              />
                              <div className="flex-grow">
                                <div className="flex items-center gap-3 mb-2">
                                  <h3 className={`font-semibold transition-colors ${
                                    completedItems.has(item.id) ? 'text-green-400 line-through' : 'text-white'
                                  }`}>
                                    {item.title}
                                  </h3>
                                  <Badge className={getPriorityColor(item.priority)}>
                                    {item.priority === 'critical' ? 'Kritisch' : 
                                     item.priority === 'high' ? 'Hoch' : 
                                     item.priority === 'medium' ? 'Mittel' : 'Niedrig'}
                                  </Badge>
                                  <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                                    {item.reference}
                                  </Badge>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Results & Actions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50" />
          
          <div className="container mx-auto max-w-5xl relative z-10">
            <Card className="bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white text-center mb-6">
                  Ihr Compliance-Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400 mb-2">{completedItems.size}</div>
                    <div className="text-slate-300">Erfüllte Punkte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-orange-400 mb-2">{getTotalItems() - completedItems.size}</div>
                    <div className="text-slate-300">Offene Punkte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-400 mb-2">{getCompletionRate()}%</div>
                    <div className="text-slate-300">Compliance Rate</div>
                  </div>
                </div>
                
                <div className="text-center space-y-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 mr-4"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Compliance Report herunterladen
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Beratungstermin vereinbaren
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DsgvoComplianceChecklist;